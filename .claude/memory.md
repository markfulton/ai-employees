# Project memory

Durable notes for an agent working on this repository. `AGENTS.md` holds the rules; this file holds the state around them. Keep it short and update a line rather than adding a duplicate.

## Kits and localization

- Sixteen kit folders live under `employees/`: the eight originals (`gtm-engineer`, `seo-employee`, `web-dev-employee`, `social-media-employee`, `ad-manager-employee`, `sales-employee`, `customer-satisfaction-employee`, `chief-of-staff`) and a Vietnam variant of each, named `<slug>-vn`. `gtm-engineer-vn` came first, at kit version 1.11.0. The other seven were localized on 2026-09-24: `seo-employee-vn` at 1.10.0, and `web-dev-employee-vn`, `social-media-employee-vn`, `ad-manager-employee-vn`, `sales-employee-vn`, `customer-satisfaction-employee-vn` and `chief-of-staff-vn` at 1.9.0. The originals are unchanged by the localization.
- Each variant's report lives in `localization-reports/<slug>/`: `README.md` (status, checks, deferred items), one clause ledger per routine, `_shared/` (Phần A ledger, parsed strings, glossary, patch log) and `review-packet-vi.md`, the packet for a Vietnamese practitioner's review. `localization-reports/gtm-engineer-vn/` is the older shape, `README.md` and `B8-provenance.md`. `localization-reports/VN-TONG-KET.md` is the owner's Vietnamese summary of the run.
- Two shared files govern every `-vn` kit: `localization-reports/STYLE-VI.md`, the owner facing Vietnamese style, and `localization-reports/VN-DECISIONS.md`, the decisions (D1 onward) taken during the localization run, in Vietnamese. `.claude/rules/localization.md` holds the rules they established.
- The fork installer and the `hire` skill serve every `-vn` slug, and the installer refuses to fetch one from the upstream tarball. A new variant needs a roster line in `installer/cli.mjs`, a row in `skills/hire/SKILL.md`, and a root `CHANGELOG.md` link to its kit changelog.

## Harness

- ECC is the only extra plugin enabled for this project, through `.claude/settings.json`. The repo itself is the `ai-employees` plugin.
- `.claude/settings.local.json` is personal and ignored by git. Do not copy its permission list into a shared file.
- Harness audit: `node ~/.claude/plugins/cache/ecc/ecc/<version>/scripts/harness-audit.js repo --root .`

## Release state

- The root `package.json` version is 1.8.0 as of 2026-09-24. A kit change is not live on `npx ai-employees` until the maintainer bumps it and publishes.
