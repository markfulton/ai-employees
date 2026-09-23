---
paths:
  - "employees/*/*.md"
  - "employees/*/VERSION"
  - "employees/*/employee.json"
  - "employees/*/run/*.cmd.example"
  - "CHANGELOG.md"
---
# Kit root files

## Ownership

- `SCHEDULE.md` is the only home of cadences, fire times, windows, budgets, period keys and browser lanes. If a time appears anywhere else in the kit, that is the defect to fix; do not copy it back.
- `CONTRACT.md` wins over a routine when they disagree. Keep its section numbers stable; routines cite them.
- `CONTRACT.md`, `ROLE.md`, `SCHEDULE.md`, `CAPABILITIES.md`, `README.md`, `INSTALL-PROMPT.md` and every routine end with a `## Corrections` section written by the member. Never edit below that heading, and `no-dashes.mjs` does not check below it either.

## Adding a routine

A new routine needs all three, with one shared id:

1. A row in `SCHEDULE.md`.
2. `run/<id>.cmd.example`.
3. `routines/<id>/SKILL.md`.

Stagger the fire time: a browser capable routine fires at the first free minute at or after the previous browser capable fire plus that routine's full `budget` plus twenty minutes. Use the budget, never the typical run time.

## Versions and changelogs

- `VERSION` holds one semver string. `CHANGELOG.md` must carry a heading of exactly `## <version>, <YYYY-MM-DD>` for it, or `selftests.mjs` fails.
- Bump both in the same commit as the behaviour change, and add a root `CHANGELOG.md` line that links the kit changelog.
- `CHANGELOG.md` in a kit is written by publishers only. A routine writes to `improvements/CHANGELOG.md`, never here.
- A kit version is not live on `npx ai-employees` until the root `package.json` is bumped and the maintainer publishes. Say so in the pull request.
