import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import assert from 'node:assert/strict';
import { writeReceipt, upgrade, hashFile } from '../../installer/upgrade.mjs';
import { mergeText, reconcile } from '../../installer/reconcile.mjs';
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'employee-upgrade-test-'));
const put = (dir, file, text) => { fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true }); fs.writeFileSync(path.join(dir, file), text); };
const get = (dir, file) => fs.readFileSync(path.join(dir, file), 'utf8');
const out = () => {}, fail = message => { throw new Error(message); };
try {
  const installed = path.join(root, 'installed'), fresh = path.join(root, 'fresh');
  const manifest = { slug: 'fictional', name: 'Fictional', version: '1.0.0', files: { kit: ['CONTRACT.md', 'employee.json', 'VERSION', 'scripts/**'], member: ['RELEASES.md', 'state/**', '.upgrade/**'], merge: ['SCHEDULE.md'] } };
  for (const dir of [installed, fresh]) {
    put(dir, 'employee.json', JSON.stringify(manifest)); put(dir, 'VERSION', '1.0.0');
    put(dir, 'CONTRACT.md', 'start\nold upstream\nseparator\nold local\nend\n\n## Corrections\nMember rule\n');
    put(dir, 'SCHEDULE.md', 'member schedule'); put(dir, 'RELEASES.md', 'member permission');
  }
  writeReceipt(installed, 'fictional', '1.0.0');
  const baselineHash = hashFile(path.join(installed, 'CONTRACT.md'));
  put(installed, 'CONTRACT.md', get(installed, 'CONTRACT.md').replace('old local', 'local improvement'));
  put(installed, 'state/private.json', '{"private":"preserve"}');
  put(fresh, 'CONTRACT.md', get(fresh, 'CONTRACT.md').replace('old upstream', 'upstream improvement'));
  put(fresh, 'RELEASES.md', 'must never replace');
  put(fresh, 'SCHEDULE.md', 'different schedule');
  put(fresh, 'employee.json', JSON.stringify({ ...manifest, version: '1.1.0' })); put(fresh, 'VERSION', '1.1.0');
  const options = { installed, fresh, slug: 'fictional', out, fail };
  upgrade({ ...options, apply: false }); assert.equal(fs.existsSync(path.join(installed, 'CONTRACT.md.new')), false);
  const upgradeRows = upgrade({ ...options, apply: true });
  assert.ok(upgradeRows.drifted.includes('CONTRACT.md'), JSON.stringify(upgradeRows));
  assert.ok(fs.existsSync(path.join(installed, 'CONTRACT.md.new')));
  assert.equal(JSON.parse(get(installed, '.installed.json')).files['CONTRACT.md'], baselineHash);
  assert.match(get(installed, 'CONTRACT.md'), /local improvement/);
  assert.equal(get(installed, 'RELEASES.md'), 'member permission'); assert.equal(get(installed, 'SCHEDULE.md'), 'member schedule');
  // Repeated upgrade must not bless and then overwrite a local edit.
  put(fresh, 'employee.json', JSON.stringify({ ...manifest, version: '1.2.0' })); put(fresh, 'VERSION', '1.2.0');
  upgrade({ ...options, apply: true }); assert.match(get(installed, 'CONTRACT.md'), /local improvement/);
  const preview = reconcile({ installed, out }); assert.equal(preview.find(r => r.file === 'CONTRACT.md')?.status, 'ready', JSON.stringify(preview));
  assert.doesNotMatch(get(installed, 'CONTRACT.md'), /upstream improvement/);
  const applied = reconcile({ installed, apply: true, out }); assert.equal(applied.find(r => r.file === 'CONTRACT.md').status, 'applied');
  assert.match(get(installed, 'CONTRACT.md'), /upstream improvement/); assert.match(get(installed, 'CONTRACT.md'), /local improvement/);
  assert.ok(get(installed, 'CONTRACT.md').endsWith('## Corrections\nMember rule\n'));
  assert.equal(get(installed, 'state/private.json'), '{"private":"preserve"}');
  assert.equal(get(installed, 'SCHEDULE.md'), 'member schedule');
  assert.equal(mergeText('a\nb\nc', 'a\nx\nc', 'a\ny\nc').clean, false);
  assert.equal(mergeText('a\nb', 'a\nx\nb', 'a\ny\nb').clean, false);
  assert.equal(mergeText('a\nb', 'a\nx\nb', 'a\nx\nb').clean, true);
  fs.rmSync(path.join(installed, '.upgrade/baseline/CONTRACT.md'));
  put(installed, 'CONTRACT.md.new', 'another incoming version');
  assert.equal(reconcile({ installed, out }).find(r => r.file === 'CONTRACT.md').status, 'manual');
  console.log('upgrade-check: PASS (preview, repeated upgrades, true baselines, merge, conflicts, member data, corrections, missing baseline)');
} finally { fs.rmSync(root, { recursive: true, force: true }); }
