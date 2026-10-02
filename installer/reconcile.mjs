// Conservative three-way reconciliation. Member files and schedules are never applied.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
import { classify, walkFiles, hashFile, RECEIPT } from './upgrade.mjs';

function hunks(base, next) {
  const a = base.split('\n'), b = next.split('\n');
  if (a.length * b.length > 4000000) throw new Error('File needs manual reconciliation: diff limit');
  const dp = Array.from({ length: a.length + 1 }, () => new Uint32Array(b.length + 1));
  for (let i = a.length - 1; i >= 0; i--) for (let j = b.length - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? 1 + dp[i + 1][j + 1] : Math.max(dp[i + 1][j], dp[i][j + 1]);
  let i = 0, j = 0, current = null; const out = [];
  const flush = () => { if (current) out.push(current); current = null; };
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) { flush(); i++; j++; }
    else {
      current ??= { start: i, end: i, lines: [] };
      if (j < b.length && (i === a.length || dp[i][j + 1] >= dp[i + 1][j])) current.lines.push(b[j++]);
      else { i++; current.end = i; }
    }
  }
  flush(); return out;
}
export function mergeText(base, local, incoming) {
  if (local === incoming || incoming === base) return { clean: true, text: local };
  if (local === base) return { clean: true, text: incoming };
  const normalize = s => s.replace(/\r\n/g, '\n');
  base = normalize(base); local = normalize(local); incoming = normalize(incoming);
  const left = hunks(base, local), right = hunks(base, incoming), merged = [...left];
  for (const r of right) {
    const overlaps = left.filter(l => l.start <= r.end && r.start <= l.end);
    if (overlaps.length) {
      if (overlaps.length === 1 && JSON.stringify(overlaps[0]) === JSON.stringify(r)) continue;
      return { clean: false, reason: 'Overlapping local and incoming changes' };
    }
    merged.push(r);
  }
  const lines = base.split('\n');
  for (const h of merged.sort((a, b) => b.start - a.start)) lines.splice(h.start, h.end - h.start, ...h.lines);
  return { clean: true, text: lines.join('\n') };
}
function contained(root, rel) {
  if (path.isAbsolute(rel) || rel.split(/[\\/]/).includes('..')) throw new Error('Unsafe reconciliation path');
  const p = path.resolve(root, rel), base = fs.realpathSync(root);
  let ancestor = p;
  while (!fs.existsSync(ancestor)) ancestor = path.dirname(ancestor);
  const real = fs.realpathSync(ancestor);
  if (!(real === base || real.startsWith(base + path.sep))) throw new Error('Linked path escapes install');
  return p;
}
function validateCandidate(file, content, stage) {
  if (file.endsWith('.json')) JSON.parse(content);
  if (file.endsWith('/SKILL.md') && !/^---\r?\nname: [^\n]+\r?\ndescription: [^\n]+\r?\nmetadata:\r?\n  internal: true\r?\n---/.test(content)) throw new Error('Invalid skill frontmatter');
  if (file.endsWith('.mjs')) {
    const r = spawnSync(process.execPath, ['--check', stage], { encoding: 'utf8' });
    if (r.status !== 0) throw new Error('JavaScript syntax validation failed');
  }
  if (content.includes('<<<<<<<') || content.includes('>>>>>>>')) throw new Error('Unresolved merge markers');
}
export function reconcile({ installed, base, apply = false, out = console.log }) {
  const manifest = JSON.parse(fs.readFileSync(path.join(installed, 'employee.json'), 'utf8'));
  const receiptPath = path.join(installed, RECEIPT);
  const receipt = fs.existsSync(receiptPath) ? JSON.parse(fs.readFileSync(receiptPath, 'utf8')) : { files: {} };
  const runId = new Date().toISOString().replace(/[:.]/g, '-') + '-' + crypto.randomBytes(3).toString('hex');
  const reportRoot = contained(installed, '.upgrade/reconcile/' + runId);
  fs.mkdirSync(reportRoot, { recursive: true });
  const rows = [];
  for (const relNative of walkFiles(installed)) {
    const rel = relNative.split(path.sep).join('/');
    if (!rel.endsWith('.new') || rel.startsWith('.upgrade/')) continue;
    const file = rel.slice(0, -4), kind = classify(manifest, file);
    if (kind !== 'kit') { rows.push({ file, status: 'protected', reason: 'Member, schedule or unknown file' }); continue; }
    const localPath = contained(installed, file), incomingPath = contained(installed, rel);
    const basePath = base ? contained(path.resolve(base), file) : contained(installed, '.upgrade/baseline/' + file);
    if (!fs.existsSync(basePath) || !receipt.files?.[file] || hashFile(basePath) !== receipt.files[file]) { rows.push({ file, status: 'manual', reason: 'Verified baseline unavailable. Supply --base with the original kit to compare.' }); continue; }
    try {
      const local = fs.readFileSync(localPath, 'utf8'), incoming = fs.readFileSync(incomingPath, 'utf8');
      const result = mergeText(fs.readFileSync(basePath, 'utf8'), local, incoming);
      if (!result.clean) { rows.push({ file, status: 'conflict', reason: result.reason }); continue; }
      // Member corrections always survive byte for byte, even if the incoming kit altered them.
      const marker = /^## Corrections\s*$/m;
      const originalCorrections = marker.exec(local), newCorrections = marker.exec(result.text);
      if (originalCorrections && (!newCorrections || local.slice(originalCorrections.index) !== result.text.slice(newCorrections.index))) { rows.push({ file, status: 'conflict', reason: 'Member Corrections would change' }); continue; }
      const staged = path.join(reportRoot, 'candidate', file);
      fs.mkdirSync(path.dirname(staged), { recursive: true }); fs.writeFileSync(staged, result.text);
      validateCandidate(file, result.text, staged);
      rows.push({ file, status: 'ready', local_hash: hashFile(localPath), incoming_hash: hashFile(incomingPath), candidate: path.relative(installed, staged).split(path.sep).join('/') });
    } catch (e) { rows.push({ file, status: 'manual', reason: e.message }); }
  }
  // Applying requires an explicit invocation, and rechecks inputs after preparing all candidates.
  if (apply) for (const row of rows.filter(r => r.status === 'ready')) {
    const target = contained(installed, row.file), incoming = contained(installed, row.file + '.new');
    if (hashFile(target) !== row.local_hash || hashFile(incoming) !== row.incoming_hash) throw new Error('Inputs changed during reconciliation; nothing further applied');
    const backup = path.join(reportRoot, 'before', row.file); fs.mkdirSync(path.dirname(backup), { recursive: true }); fs.copyFileSync(target, backup);
    const tmp = target + '.reconcile-tmp'; fs.writeFileSync(tmp, fs.readFileSync(contained(installed, row.candidate)), { flag: 'wx' }); fs.renameSync(tmp, target);
    const baseline = contained(installed, '.upgrade/baseline/' + row.file); fs.mkdirSync(path.dirname(baseline), { recursive: true }); fs.copyFileSync(incoming, baseline);
    receipt.files[row.file] = row.incoming_hash;
    receipt.pending = (receipt.pending || []).filter(file => file !== row.file);
    // Keep the incoming copy in the report before removing the now-resolved .new file.
    const saved = path.join(reportRoot, 'incoming', row.file); fs.mkdirSync(path.dirname(saved), { recursive: true }); fs.copyFileSync(incoming, saved); fs.unlinkSync(incoming);
    row.status = 'applied';
    const receiptTmp = receiptPath + '.tmp'; fs.writeFileSync(receiptTmp, JSON.stringify(receipt, null, 2) + '\n'); fs.renameSync(receiptTmp, receiptPath);
  }
  fs.writeFileSync(path.join(reportRoot, 'report.json'), JSON.stringify({ schema: 1, apply, validation: 'JSON, skill frontmatter, JavaScript syntax and preserved Corrections; run kit selftests after apply', rows }, null, 2) + '\n');
  out('Reconciliation report: ' + path.join(reportRoot, 'report.json'));
  for (const row of rows) out(row.status + ': ' + row.file + (row.reason ? ' (' + row.reason + ')' : ''));
  if (!apply) out('Live files unchanged. Inspect candidates, then rerun with --apply for nonconflicting kit files. Schedules remain manual.');
  return rows;
}
