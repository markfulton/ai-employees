#!/usr/bin/env node
// Shared implementation is authored once and distributed as self-contained kit files.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
let failures = 0;
for (const slug of fs.readdirSync(path.join(root, 'employees'))) {
  for (const [source, destination] of [['WORK-CYCLE.md', 'WORK-CYCLE.md'], ['work-cycle.mjs', 'scripts/work-cycle.mjs'], ['run-state.mjs', 'scripts/run-state.mjs']]) {
    const body = fs.readFileSync(path.join(root, 'shared/work-cycle', source));
    const target = path.join(root, 'employees', slug, destination);
    if (process.argv.includes('--write')) fs.writeFileSync(target, body);
    else if (!fs.existsSync(target) || !body.equals(fs.readFileSync(target))) { console.error(`Shared work-cycle drift: ${slug}/${destination}`); failures++; }
  }
}
if (!failures) console.log('sync-work-cycle: PASS');
process.exitCode = failures ? 1 : 0;
