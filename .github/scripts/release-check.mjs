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
// Plugin directories block an unpinned npx launcher: the hire skill's npm fallback names this exact release.
const hireSkill = fs.readFileSync(path.join(root, 'skills/hire/SKILL.md'), 'utf8');
assert.ok(hireSkill.includes(`npx ai-employees@${pkg.version} hire`), `skills/hire/SKILL.md must pin npx ai-employees@${pkg.version}`);
assert.ok(!/npx ai-employees hire/.test(hireSkill), 'skills/hire/SKILL.md has an unpinned npx ai-employees hire');
// The portable Agent Plugins manifest (Codex, Cursor, Hermes, Antigravity) moves with the package too,
// and holds only the fields its schema allows (additionalProperties is false there).
const portable = json('plugin.json');
assert.equal(portable.version, pkg.version, 'plugin.json version');
assert.equal(portable.name, 'ai-employees');
assert.equal(portable.$schema, 'https://agent-plugins.org/schemas/1.0.0/plugin.schema.json');
const allowed = ['$schema', 'name', 'version', 'description', 'author', 'homepage', 'repository', 'license', 'keywords', 'extensions'];
for (const key of Object.keys(portable)) assert.ok(allowed.includes(key), `plugin.json has a key its schema forbids: ${key}`);
const ui = portable.extensions['com.openai'].interface;
assert.ok(ui.displayName.length <= 30 && ui.shortDescription.length <= 30, 'OpenAI listing names are 30 characters or fewer');
for (const icon of [ui.composerIcon, ui.logo]) assert.ok(fs.existsSync(path.join(root, icon)), `missing ${icon}`);
for (const slug of fs.readdirSync(path.join(root, 'employees'))) {
  const base = `employees/${slug}`, m = json(`${base}/employee.json`);
  assert.equal(m.version, fs.readFileSync(path.join(root, base, 'VERSION'), 'utf8').trim());
  assert.equal(m.standard, '1.5');
  for (const file of ['WORK-CYCLE.md', 'work-profile.json']) assert.ok(m.files.kit.includes(file));
  for (const file of ['progress/**', 'experiments/**', 'handoffs/**', '.upgrade/**']) assert.ok(m.files.member.includes(file));
  assert.ok(m.files.member.includes('RELEASES.md'));
}
console.log('release-check: PASS (package, plugin manifests, pinned hire route, changelogs, kit manifests, protected data)');
