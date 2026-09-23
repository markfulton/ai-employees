---
paths:
  - "employees/*-vn/**"
  - "localization-reports/**"
---
# Localized variant kits

`gtm-engineer-vn` is the Vietnamese variant of `gtm-engineer`. `localization-reports/gtm-engineer-vn/` records how it was built and is the template for the next variant.

## Keep stable

- Routine ids, folder names, frontmatter keys, file names, `SCHEDULE.md` column names, script names and every `«PLACEHOLDER»` token stay exactly as in the source kit. Translate prose only.
- The variant keeps its own `VERSION` and `CHANGELOG.md`. Do not reset it to the source kit's version.

## Evidence

- Every rule that differs from the source kit needs a source in the localization report: the clause, where it came from, and whether it was adopted or deferred. A local rule with no source is an invented fact.
- Prices, legal thresholds and platform rules for Vietnam come from a named, dated source, never from memory.

## Checks

- Vietnamese text follows the same no dash rule.
- Record the three core checks, with their date, in the report's checks section.
- The public npm package does not contain this variant; only the fork's bundled installer serves it. Keep that sentence true in the root `CHANGELOG.md` and the report.
