---
paths:
  - "employees/*-vn/**"
  - "localization-reports/**"
---
# Localized variant kits

Every `<slug>-vn` folder is the Vietnamese variant of `<slug>`, and `localization-reports/<slug>/` records how it was built. `gtm-engineer-vn` came first; `localization-reports/VN-DECISIONS.md` holds the decisions of the run that localized the other seven, and the rules below come from it.

## Keep stable

- Routine ids, folder names, frontmatter keys, file names, `SCHEDULE.md` column names, script names and every `«PLACEHOLDER»` token stay exactly as in the source kit. Translate prose only.
- The variant keeps its own `VERSION` and `CHANGELOG.md`. Do not reset it to the source kit's version.
- A heading another file parses and every token (`n/a (<reason>)`, statuses, keys, ids) stay English; a Vietnamese gloss follows a token the member reads and never replaces it.
- Decision ids and slugs derive from the move stated in English, never from a Vietnamese title.

## Behaviour

- Platform terms gate: a platform whose terms, as the kit's `CAPABILITIES.md` records them with a date, forbid automated reading is never read by a routine; a person pastes what they saw into a manual file the member owns, unless the terms forbid manual tracking too, as Shopee's do for another shop's page.
- A `[CG]` owner decision may narrow what an Employee does, never widen it, and an unmarked form clause leaves the source kit's behaviour unchanged.
- No legal threshold number (a promotion cap, a fine, a notice period, the date a rule took effect) goes into a kit file; a routine applies the rule in words and names the case for a person to check.

## Style

- `localization-reports/STYLE-VI.md` is the shared owner facing style for every `-vn` kit; a kit adds its own role terms in its report and uses them identically in every routine.

## Evidence

- Every rule that differs from the source kit needs a source in the localization report: the clause, where it came from, and whether it was adopted or deferred. A local rule with no source is an invented fact.
- Prices, legal thresholds and platform rules for Vietnam come from a named, dated source, never from memory.

## Checks

- Vietnamese text follows the same no dash rule.
- Record the three core checks, with their date, in the report's checks section.
- The public npm package does not contain this variant; only the fork's bundled installer serves it. Keep that sentence true in the root `CHANGELOG.md` and the report.
