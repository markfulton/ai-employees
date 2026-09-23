# Repository evals

Code graded regression evals for the rules in `AGENTS.md` that `selftests.mjs` and `no-dashes.mjs` do not already check. They read the repository only and write nothing, except `--write-baseline`.

```bash
node evals/run.mjs          # human report, exit 1 on any FAIL
node evals/run.mjs --json   # machine report
```

## What each eval checks

| Eval | Rule in AGENTS.md | Grader |
|---|---|---|
| `routine-wiring` | A routine needs a `SCHEDULE.md` row, a `run/<id>.cmd.example` and a `routines/<id>/SKILL.md` with one id | code |
| `guard-identical` | Shared standard code stays the same across the kits: `guard.mjs` is byte identical | code |
| `version-sync` | `package.json`, `plugin.json` and `marketplace.json` versions move together | code |
| `examples-fictional` | Every email under `employees/*/examples/` uses a reserved example or test domain | code |
| `retired-name` | "Agent Employees" appears nowhere outside changelog history | code |
| `no-new-clock-times` | A routine `SKILL.md` holds no clock time; times live in `SCHEDULE.md` | code, against a baseline |

## The clock time baseline

`baseline/clock-times.json` records every clock time already present in a routine above its `## Corrections` heading, counted per file. ISO timestamps and zone offsets inside example JSON are not counted. The eval fails only when a file goes above its recorded count.

Each recorded count is a candidate defect, not an approved exception. After fixing a routine, lower its count with `node evals/run.mjs --write-baseline` and commit the smaller baseline in the same commit. Never raise a count to make the eval pass.

## Adding an eval

Add an entry to the `evals` array in `run.mjs` with an `id`, the `rule` it enforces, and a `run()` that returns a list of problems, empty on pass. Prefer a code grader. Keep it fast, Node 18, no dependencies, and free of em and en dashes.
