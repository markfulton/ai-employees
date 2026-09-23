---
paths:
  - "employees/*/routines/**/SKILL.md"
---
# Routine SKILL.md files

## Frontmatter

It must be exactly this shape, or `selftests.mjs` fails:

```
---
name: <routine-id>
description: <one line>
metadata:
  internal: true
---
```

`name`, the folder name and the routine id in `SCHEDULE.md` are the same string.

## Body

- The first bold paragraph runs `guard.mjs` with this routine's id. Keep it first and keep the id in it matching `name`.
- Never write a clock time, window, budget or price in a routine. Those live in the kit's `SCHEDULE.md` row, or in a named file with a source and a date. Refer to "your row in `SCHEDULE.md`" instead.
- Keep every `«PLACEHOLDER»` token exactly as written, for example `«GTM_ROOT»`, `«BUSINESS NAME»`, `«TODAY»`. The installer and the member fill them; never substitute a value.
- The `## Corrections` section at the foot belongs to the member. Do not edit text below that heading, and do not move it.
- A routine drafts, fills and stages outbound work. It may complete a send, submit, post or spend only where the member's `RELEASES.md` names the channel. Never add an outbound action without that condition, and never make a routine write a release.

## Shared text

Most routine text is shared standard wording with the role name swapped. After changing a shared passage in one kit, search the other kits for the same passage and either apply the same change or say why not.

## Release

A behaviour change needs the kit's `VERSION` and `CHANGELOG.md` bumped in the same commit. See the kit files rule.
