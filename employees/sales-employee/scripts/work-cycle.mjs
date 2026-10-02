#!/usr/bin/env node
// Shared source. Copied into each kit so installed employees have no runtime dependency.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const text = (x) => typeof x === 'string' && x.trim().length > 0;
const stamp = (x) => text(x) && !Number.isNaN(Date.parse(x));
function requireValue(test, message) { if (!test) throw new Error(message); }
export function inside(root, rel) {
  requireValue(text(rel) && !path.isAbsolute(rel) && !rel.includes('\\') && !rel.split('/').includes('..'), 'Use a relative path inside the employee');
  const resolved = path.resolve(root, rel), base = fs.realpathSync(root);
  requireValue(resolved.startsWith(path.resolve(root) + path.sep), 'Path escapes employee');
  let parent = resolved;
  while (!fs.existsSync(parent)) parent = path.dirname(parent);
  const real = fs.realpathSync(parent);
  requireValue(real === base || real.startsWith(base + path.sep), 'Linked path escapes employee');
  return resolved;
}
export function loadRows(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '').split(/\r?\n/).filter(x => x.trim()).map((x, i) => {
    try { return JSON.parse(x); } catch { throw new Error(`Malformed ledger line ${i + 1}; preserve it and report the gap`); }
  });
}
export function chooseWork(candidates) {
  // Candidates come from the owning routine's existing queue; this never grants authority.
  return candidates.filter(c => c.owned === true && c.fresh === true && c.authorized === true && c.inputs_ready === true)
    .sort((a, b) => Number(b.prevents_loss === true) - Number(a.prevents_loss === true)
      || Number(b.fulfills_commitment === true) - Number(a.fulfills_commitment === true)
      || Number(b.unblocks_work === true) - Number(a.unblocks_work === true)
      || (b.value ?? 0) - (a.value ?? 0) || (a.effort ?? 0) - (b.effort ?? 0))[0] ?? null;
}
export function validateExperiment(x) {
  requireValue(x.schema === 1, 'Experiment schema must be 1');
  for (const k of ['id', 'owner', 'hypothesis', 'source', 'baseline', 'change', 'primary_metric', 'guardrail', 'review_when', 'decision_rule', 'authority']) requireValue(text(x[k]), `Experiment needs ${k}`);
  requireValue(['prepared', 'running', 'unmeasured', 'inconclusive', 'improved', 'no-improvement', 'worse', 'retired'].includes(x.status), 'Invalid experiment status');
  requireValue(['controlled', 'directional'].includes(x.design), 'Declare controlled or directional design');
  if (x.design === 'controlled') requireValue(text(x.assignment) && text(x.contamination_check), 'Controlled tests need assignment and contamination checks');
  if (['improved', 'no-improvement', 'worse'].includes(x.status)) requireValue(x.measurement_ready === true && x.sufficient_evidence === true && text(x.result_evidence), 'Measured conclusions need sufficient evidence');
  if (x.status === 'running') requireValue(text(x.launch_receipt), 'Running needs an observed launch receipt');
  return x;
}
export function validateHandoff(x) {
  requireValue(x.schema === 1, 'Handoff schema must be 1');
  for (const k of ['id', 'from', 'to', 'source', 'requested_deliverable', 'acceptance', 'expires_on', 'status']) requireValue(text(x[k]), `Handoff needs ${k}`);
  requireValue(stamp(x.expires_on), 'Handoff needs an expiry date');
  requireValue(['proposed', 'accepted', 'declined', 'completed', 'expired'].includes(x.status), 'Invalid handoff status');
  if (x.status === 'completed') requireValue(text(x.receipt), 'Completed handoff needs a receipt');
  return x;
}
export function checkExperimentCapacity(root, experiment) {
  validateExperiment(experiment);
  const schedule = fs.readFileSync(path.join(root, 'SCHEDULE.md'), 'utf8');
  const cap = Number(/active_experiments:\s*(\d+)/.exec(schedule)?.[1]);
  requireValue(Number.isInteger(cap) && cap > 0, 'SCHEDULE.md needs active_experiments');
  const active = new Set(), base = inside(root, 'experiments');
  if (fs.existsSync(base)) for (const owner of fs.readdirSync(base)) {
    const dir = inside(root, `experiments/${owner}`);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const row = validateExperiment(JSON.parse(fs.readFileSync(inside(root, `experiments/${owner}/${file}`), 'utf8')));
      if (['prepared', 'running'].includes(row.status)) active.add(`${row.owner}/${row.id}`);
    }
  }
  const key = `${experiment.owner}/${experiment.id}`;
  if (['prepared', 'running'].includes(experiment.status)) active.add(key); else active.delete(key);
  requireValue(active.size <= cap, 'Active experiment limit reached; finish or retire existing work first');
  return { active: active.size, cap };
}
export function handoffInbox(root, routine, now = Date.now()) {
  const profile = JSON.parse(fs.readFileSync(path.join(root, 'work-profile.json'), 'utf8'));
  requireValue(Object.hasOwn(profile.routines, routine), 'Unknown receiving routine');
  const configPath = inside(root, 'handoffs/routes.json');
  if (!fs.existsSync(configPath)) return { configured: false, items: [] };
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  requireValue(config.schema === 1 && Array.isArray(config.routes), 'Invalid member route configuration');
  const items = [], seen = new Set();
  for (const route of config.routes.filter(r => r.to_routine === routine)) {
    requireValue(path.isAbsolute(route.root) && text(route.from) && /^[a-z][a-z0-9-]+$/.test(route.source_routine) && Array.isArray(route.fields), 'Route needs explicit root, source, owner and allowed fields');
    const dir = inside(route.root, `handoffs/outbox/${route.source_routine}`);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
      const raw = JSON.parse(fs.readFileSync(inside(route.root, `handoffs/outbox/${route.source_routine}/${file}`), 'utf8'));
      const row = Object.fromEntries(Object.entries(raw).filter(([k]) => k === 'schema' || route.fields.includes(k)));
      validateHandoff(row);
      requireValue(row.from === route.from && row.to === routine, 'Handoff identity does not match configured route');
      // The outbox proposes work. Only local receiving receipts can accept or complete it.
      requireValue(row.status === 'proposed', 'Producer outbox cannot assert recipient acceptance');
      const key = `${route.from}/${row.id}`;
      requireValue(!seen.has(key), 'Duplicate handoff id from the same source'); seen.add(key);
      items.push({ ...row, status: Date.parse(row.expires_on) < now ? 'expired' : 'proposed' });
    }
  }
  return { configured: true, items };
}
export function validateProgress(root, x) {
  requireValue(x.schema === 1 && /^[a-z][a-z0-9-]+$/.test(x.routine), 'Invalid progress schema or routine');
  for (const k of ['period', 'work_id', 'summary', 'next_action', 'next_check']) requireValue(text(x[k]), `Progress needs ${k}`);
  requireValue(stamp(x.observed_at), 'Progress needs observed_at');
  requireValue(typeof x.expected === 'boolean', 'Declare whether a deliverable was expected this period');
  requireValue(['advanced', 'completed', 'blocked', 'quiet'].includes(x.delivery), 'Invalid delivery state');
  requireValue(['unknown', 'unmeasured', 'inconclusive', 'improved', 'no-improvement', 'worse'].includes(x.business), 'Invalid business result');
  requireValue(Array.isArray(x.artifacts) && Array.isArray(x.blockers), 'Artifacts and blockers must be arrays');
  if (['improved', 'no-improvement', 'worse'].includes(x.business)) requireValue(text(x.result_evidence) && x.artifacts.includes(x.result_evidence), 'A measured business conclusion needs its result evidence among the verified artifacts');
  if (['advanced', 'completed'].includes(x.delivery)) requireValue(x.artifacts.length > 0, 'Progress needs a verified deliverable');
  const artifacts = x.artifacts.map(rel => {
    requireValue(!/^(state|progress|archive)\/|(^|\/)runlog\.jsonl$/.test(rel), 'Bookkeeping alone is not a deliverable');
    const p = inside(root, rel), bytes = fs.readFileSync(p);
    requireValue(bytes.length > 0, 'Deliverable is empty');
    return { path: rel, sha256: crypto.createHash('sha256').update(bytes).digest('hex') };
  });
  for (const b of x.blockers) {
    for (const k of ['key', 'step', 'owner', 'kind', 'evidence', 'next_action', 'next_check']) requireValue(text(b[k]), `Blocker needs ${k}`);
    requireValue(stamp(b.verified_at), 'Blocker must be verified this run');
    requireValue(Date.parse(b.verified_at) <= Date.parse(x.observed_at), 'Blocker verification cannot be in the future');
    requireValue(['permission', 'access', 'input', 'evidence', 'dependency'].includes(b.kind), 'Invalid blocker kind');
  }
  if (x.delivery === 'blocked') requireValue(x.blockers.length > 0, 'Blocked needs a scoped blocker');
  return { ...x, verified_artifacts: artifacts };
}
export function deliveryHealth(rows, threshold = 2) {
  requireValue(Number.isInteger(threshold) && threshold > 0, 'Invalid stalled threshold');
  // Retries in one period do not count as extra eligible periods.
  const periods = new Map();
  for (const row of rows) periods.set(row.period, row);
  const folded = [...periods.values()];
  let streak = 0;
  for (let i = folded.length - 1; i >= 0; i--) {
    const r = folded[i];
    if (!r.expected) break;
    const prior = folded.slice(0, i).reverse().find(p => p.work_id === r.work_id && p.verified_artifacts?.length);
    const changed = r.verified_artifacts?.length && (!prior || JSON.stringify(r.verified_artifacts.map(a => a.sha256).sort()) !== JSON.stringify(prior.verified_artifacts.map(a => a.sha256).sort()));
    if (['completed', 'advanced'].includes(r.delivery) && changed) break;
    streak++;
  }
  return { delivery: !folded.length ? 'unknown' : streak >= threshold ? 'stalled' : streak ? 'at-risk' : 'on-track', eligible_periods_without_progress: streak, latest: folded.at(-1) ?? null };
}
export function recordProgress(root, input) {
  const profile = JSON.parse(fs.readFileSync(path.join(root, 'work-profile.json'), 'utf8'));
  requireValue(Object.hasOwn(profile.routines, input.routine), 'Unknown routine');
  const x = validateProgress(root, input), dir = inside(root, `progress/${x.routine}`);
  fs.mkdirSync(dir, { recursive: true });
  const receiptId = crypto.createHash('sha256').update(`${x.period}\n${x.work_id}\n${x.observed_at}`).digest('hex');
  const file = path.join(dir, receiptId + '.json');
  if (fs.existsSync(file)) { requireValue(fs.readFileSync(file, 'utf8') === JSON.stringify(x, null, 2) + '\n', 'Receipt id conflict'); return file; }
  fs.writeFileSync(file, JSON.stringify(x, null, 2) + '\n', { flag: 'wx' });
  return file;
}
export function readProgress(root, routine) {
  const dir = inside(root, `progress/${routine}`);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.json')).map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))).sort((a, b) => a.observed_at.localeCompare(b.observed_at));
}
function selftest() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'work-cycle-'));
  try {
    fs.mkdirSync(path.join(root, 'drafts')); fs.writeFileSync(path.join(root, 'drafts/result.md'), 'A sourced draft');
    const p = { schema: 1, routine: 'test-produce', period: '2026-10-01', observed_at: '2026-10-01T10:00:00Z', work_id: 'draft-one', expected: true, delivery: 'completed', business: 'unmeasured', summary: 'Draft ready', artifacts: ['drafts/result.md'], blockers: [], next_action: 'Review current revision', next_check: 'next eligible period' };
    const valid = validateProgress(root, p);
    assert.equal(deliveryHealth([valid]).delivery, 'on-track');
    assert.equal(deliveryHealth([valid, { ...valid, period: '2026-10-02' }, { ...valid, period: '2026-10-03' }]).delivery, 'stalled');
    const held = { ...valid, delivery: 'quiet', verified_artifacts: [] };
    assert.equal(deliveryHealth([held, held]).eligible_periods_without_progress, 1);
    assert.equal(deliveryHealth([{ ...held, expected: false }]).delivery, 'on-track');
    assert.equal(deliveryHealth([]).delivery, 'unknown');
    assert.throws(() => validateProgress(root, { ...p, artifacts: ['../secret'] }));
    assert.throws(() => validateProgress(root, { ...p, artifacts: ['state/job.json'] }));
    assert.throws(() => validateProgress(root, { ...p, artifacts: [] }));
    assert.throws(() => validateProgress(root, { ...p, business: 'improved' }));
    assert.equal(chooseWork([{ id: 'publish', owned: true, authorized: false, fresh: true, inputs_ready: true }, { id: 'prepare', owned: true, authorized: true, fresh: true, inputs_ready: true }]).id, 'prepare');
    assert.equal(chooseWork([{ owned: false, authorized: true, fresh: true, inputs_ready: true }]), null);
    const experiment = Object.fromEntries(['id','owner','hypothesis','source','baseline','change','primary_metric','guardrail','review_when','decision_rule','authority'].map(k => [k, k]));
    assert.equal(validateExperiment({ ...experiment, schema: 1, design: 'directional', status: 'inconclusive' }).status, 'inconclusive');
    assert.throws(() => validateExperiment({ ...experiment, schema: 1, design: 'directional', status: 'improved', measurement_ready: false }));
    assert.throws(() => validateExperiment({ ...experiment, schema: 1, design: 'controlled', status: 'prepared' }));
    console.log('work-cycle: selftest PASS');
  } finally { fs.rmSync(root, { recursive: true, force: true }); }
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const args = process.argv.slice(2), value = key => args[args.indexOf(key) + 1];
    if (args.includes('--selftest')) selftest();
    else {
      const root = path.resolve(args.includes('--root') ? value('--root') : path.join(path.dirname(fileURLToPath(import.meta.url)), '..'));
      if (args[0] === 'record') console.log(recordProgress(root, JSON.parse(fs.readFileSync(value('--file'), 'utf8'))));
      else if (args[0] === 'health') {
        const schedule = fs.readFileSync(path.join(root, 'SCHEDULE.md'), 'utf8');
        const threshold = Number(/stalled_after_eligible_periods:\s*(\d+)/.exec(schedule)?.[1]);
        console.log(JSON.stringify(deliveryHealth(readProgress(root, value('--routine')), threshold), null, 2));
      } else if (args[0] === 'handoff-inbox') console.log(JSON.stringify(handoffInbox(root, value('--routine')), null, 2));
      else if (args[0] === 'validate-experiment' || args[0] === 'validate-handoff') {
        const x = JSON.parse(fs.readFileSync(value('--file'), 'utf8'));
        (args[0] === 'validate-experiment' ? checkExperimentCapacity(root, x) : validateHandoff(x)); console.log('valid');
      } else throw new Error('Usage: work-cycle.mjs record --file receipt.json | health --routine id | validate-experiment --file file | validate-handoff --file file | --selftest');
    }
  } catch (e) { console.error(e.message); process.exitCode = 1; }
}
