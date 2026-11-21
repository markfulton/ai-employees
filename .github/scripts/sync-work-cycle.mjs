#!/usr/bin/env node
// Shared implementation is authored once and distributed as self-contained kit files.
// shared/work-cycle goes to every kit. shared/voice-check goes to every kit that writes copy a person reads.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const VOICE_CHECK_KITS = ['chief-of-staff', 'customer-satisfaction-employee', 'gtm-engineer', 'sales-employee', 'seo-employee', 'social-media-employee'];
let failures = 0;
for (const slug of fs.readdirSync(path.join(root, 'employees'))) {
  const pairs = [['work-cycle', 'WORK-CYCLE.md', 'WORK-CYCLE.md'], ['work-cycle', 'work-cycle.mjs', 'scripts/work-cycle.mjs'], ['work-cycle', 'run-state.mjs', 'scripts/run-state.mjs']];
  if (VOICE_CHECK_KITS.includes(slug)) pairs.push(['voice-check', 'voice-check.mjs', 'scripts/voice-check.mjs']);
  for (const [folder, source, destination] of pairs) {
    const body = fs.readFileSync(path.join(root, 'shared', folder, source));
    const target = path.join(root, 'employees', slug, destination);
    if (process.argv.includes('--write')) fs.writeFileSync(target, body);
    else if (!fs.existsSync(target) || !body.equals(fs.readFileSync(target))) { console.error(`Shared ${folder} drift: ${slug}/${destination}`); failures++; }
  }
}
for (const slug of VOICE_CHECK_KITS) if (!fs.existsSync(path.join(root, 'employees', slug))) { console.error(`Voice check kit missing: ${slug}`); failures++; }
if (!failures) console.log('sync-work-cycle: PASS');
process.exitCode = failures ? 1 : 0;
