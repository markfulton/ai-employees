# AGENTS.md

Instructions for an AI coding agent working **on this repository**. If you are an agent that has been *hired* and is running a routine, this is not your file: read `CONTRACT.md`, `ROLE.md` and your own `routines/<id>/SKILL.md` inside your kit folder, and read the `AGENTS.md` in that kit folder rather than this one.

This file follows the [AGENTS.md](https://agents.md) convention, stewarded by the Linux Foundation's Agentic AI Foundation.

## What this repository is

Eight AI Employees. Each one is a folder of plain markdown instructions plus three small Node scripts, which a person installs into their own working folder and registers on a schedule. There is no framework, no runtime and no service. The instructions are the product.

A kit is large on purpose: a shipped kit is roughly 1.1 MB of instructions, with `CONTRACT.md` near 85 KB and each routine's `SKILL.md` between 60 and 94 KB. Do not "tidy" a kit by shortening it. Precision in these files is what keeps a scheduled agent from improvising against someone's live business.

## Repository layout

| Path | What it holds |
|---|---|
| `employees/<slug>/` | One complete kit. Eight of them |
| `employees/<slug>/routines/<id>/SKILL.md` | One scheduled routine. The largest and most important files here |
| `employees/<slug>/scripts/` | `guard.mjs`, `runlog.mjs`, `copy-check.mjs`. Each carries its own self test |
| `employees/<slug>/examples/` | Fictional example output. Never real customer or member data |
| `installer/cli.mjs` | `npx ai-employees hire <slug>`. No dependencies, Node 18 or newer |
| `skills/hire/` | The same install flow as a Claude Code skill |
| `docs/` | Reader documentation: install, prerequisites, harnesses, cost, FAQ |
| `.github/scripts/` | `no-dashes.mjs` and `selftests.mjs`, both wired to CI |

## Checks you must run before opening a pull request

```bash
node .github/scripts/selftests.mjs
node .github/scripts/no-dashes.mjs
node installer/cli.mjs list
```

All three must pass. `selftests.mjs` runs the self test inside all 24 kit scripts. `no-dashes.mjs` enforces the rule below and is the one gate that fails builds most often.

## Rules that are not style preferences

**No em dashes or en dashes, anywhere.** Not in markdown, not in a code comment, not in a commit message. Use a period, a comma, or split the sentence. `no-dashes.mjs` enforces it and CI fails on a single violation. This exists because the kits write copy that gets published under a person's name, and a kit that uses dashes teaches the routine to use them too.

**A time, a budget or a price lives in exactly one place.** Clock times, windows and budgets live in a kit's `SCHEDULE.md` row and nowhere else. A routine `SKILL.md` that contains a clock time is a defect, not a source. The same rule holds for any number a routine might publish: it comes from a named file with a source and a date beside it.

**Never invent an example.** Everything under `examples/` is fictional and must stay fictional. Never commit a real customer, a real contact, a real account screen, a real API key, or a real price from anyone's live business.

**The product name is "AI Employees".** "Agent Employees" is retired. The single exception is **the Agent Employee Standard**, which is the proper noun for the specification itself and keeps its name.

**A routine never sends and never spends.** It drafts, fills, stages and leaves things open for a person to send. If a change would let a routine click Send, submit a form, post publicly, or spend money, it does not belong in this repository.

## Adding or changing a kit

- Every kit carries `VERSION` and `CHANGELOG.md`. Bump both in the same commit that changes kit behaviour, and add a line to the root `CHANGELOG.md` linking the kit changelog.
- The eight kits share one skeleton. If you change a shared section in one kit, check whether the other seven need the same change. Roughly 60 to 70 percent of a kit by bytes is shared standard text with the role name substituted.
- A new routine needs a `SCHEDULE.md` row, a `run/<id>.cmd.example` launcher, and a `routines/<id>/SKILL.md`. The routine id, the folder name and the YAML `name` key are always the same string.
- Fire times are staggered: a browser capable routine takes the first free minute at or after the previous browser capable fire plus that routine's **full budget** plus twenty minutes. Use the budget, never the typical run time.

## Commit and pull request conventions

Write the commit subject as a plain sentence saying what changed, no prefix and no dash. Explain in the body why the change was needed, and name the evidence if a run record or a field report prompted it. Keep one concern per commit.

## What is out of scope for an agent working here

Do not create GitHub releases, publish to npm, change `LICENSE`, `TRADEMARKS.md` or `SECURITY.md`, or alter the repository visibility. Those are the maintainer's.
