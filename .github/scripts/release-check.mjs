import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const json = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const pkg = json('package.json');
assert.equal(json('.claude-plugin/plugin.json').version, pkg.version);
assert.equal(json('.claude-plugin/marketplace.json').plugins[0].version, pkg.version);
assert.ok(fs.readFileSync(path.join(root, 'CHANGELOG.md'), 'utf8').includes(`## ${pkg.version},`));
for (const slug of fs.readdirSync(path.join(root, 'employees'))) {
  const base = `employees/${slug}`, m = json(`${base}/employee.json`);
  assert.equal(m.version, fs.readFileSync(path.join(root, base, 'VERSION'), 'utf8').trim());
  assert.equal(m.standard, '1.5');
  for (const file of ['WORK-CYCLE.md', 'work-profile.json']) assert.ok(m.files.kit.includes(file));
  for (const file of ['progress/**', 'experiments/**', 'handoffs/**', '.upgrade/**']) assert.ok(m.files.member.includes(file));
  assert.ok(m.files.member.includes('RELEASES.md'));
}
console.log('release-check: PASS (package, plugin, changelogs, manifests, protected data)');
