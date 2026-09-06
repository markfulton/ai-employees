# AGENTS.md

**Customer Satisfaction Employee**, kit version 1.2.0. One of the eight AI Employees from [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).

This file follows the [AGENTS.md](https://agents.md) convention so that any harness can pick this kit up without being told how. It is a map, not the instructions. **The instructions are the files it points at, and they are authoritative over anything summarised here.**

## If you have been asked to install this Employee

The person opened you in this folder and said something like "install the Customer Satisfaction Employee from this folder". Read `INSTALL-PROMPT.md` and follow everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===` exactly as if they had pasted it. `«CSAT_ROOT»` is this folder, resolved to an absolute path. Where the `FILL THIS IN` block is unedited, work the lines out yourself the way the prompt says, and ask one question only if you cannot.

## If you have been asked to run a routine

Read these, in this order, before you do anything else:

1. `CONTRACT.md` - the laws every routine in this kit obeys. Read this even if the task looks small.
2. `ROLE.md` - what this Employee is responsible for and what belongs to someone else.
3. `SCHEDULE.md` - your row. It carries your days, window, period key, budget and browser lane. **Every clock time and every budget figure in this kit lives in that table and nowhere else.** If you find a clock time inside a routine file, that is a defect, not a source.
4. `routines/<id>/SKILL.md` - the routine itself.

Then run the guard before the work: `node scripts/guard.mjs`. It checks the day, the window and the once per period key, and it is what stops a routine running twice or running at the wrong hour.

## The routines in this kit

| Routine id | Instructions |
|---|---|
| `csat-churn-watch` | `routines/csat-churn-watch/SKILL.md` |
| `csat-deflection-desk` | `routines/csat-deflection-desk/SKILL.md` |
| `csat-desk-intake` | `routines/csat-desk-intake/SKILL.md` |
| `csat-desk-standup` | `routines/csat-desk-standup/SKILL.md` |
| `csat-inbox-sweep` | `routines/csat-inbox-sweep/SKILL.md` |
| `csat-reply-desk` | `routines/csat-reply-desk/SKILL.md` |
| `csat-satisfaction-report` | `routines/csat-satisfaction-report/SKILL.md` |
| `csat-taxonomy-refresh` | `routines/csat-taxonomy-refresh/SKILL.md` |

## What this Employee will never do

It drafts, fills, stages and leaves the last click to the person who hired it, unless that person released the channel in `RELEASES.md` at the kit root, in which case the routine that stages the channel completes the action and records it. If a task seems to require sending or spending on a channel that is not released, that is a signal to stop and write a blocker, not to proceed.

It also never edits its own `SCHEDULE.md` row, never widens its own budget, and never invents a number. Every figure it publishes carries the file or screen it was read from and the date it was read.

## Files it owns and files it must not touch

`state/`, `runlog.jsonl` and its own outputs are written by the routines. `SCHEDULE.md` belongs to the person who hired it. Anything under `strategy/` is shared, so read the writer rules in `CONTRACT.md` before writing there.

## If you are working on this kit as source code

Read the `AGENTS.md` at the root of the repository instead. It carries the contribution rules, the checks that must pass, and the no dashes rule that CI enforces.
