# Project memory

Durable notes for an agent working on this repository. `AGENTS.md` holds the rules; this file holds the state around them. Keep it short and update a line rather than adding a duplicate.

## Kits and localization

- Nine kit folders live under `employees/`. `gtm-engineer-vn` is the Vietnamese variant of `gtm-engineer`, first shipped at kit version 1.11.0.
- `localization-reports/gtm-engineer-vn/` records how that variant was built: source tracing, which clauses were kept or deferred, and the acceptance checks. Use it as the template for the next localized kit.
- The fork installer and the `hire` skill both serve `gtm-engineer-vn`. A new variant needs the same two wiring changes.

## Harness

- ECC is the only extra plugin enabled for this project, through `.claude/settings.json`. The repo itself is the `ai-employees` plugin.
- `.claude/settings.local.json` is personal and ignored by git. Do not copy its permission list into a shared file.
- Harness audit: `node ~/.claude/plugins/cache/ecc/ecc/<version>/scripts/harness-audit.js repo --root .`

## Release state

- The root `package.json` version is 1.8.0 as of 2026-09-24. A kit change is not live on `npx ai-employees` until the maintainer bumps it and publishes.
