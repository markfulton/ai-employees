# AGENTS.md

**GTM Engineer**, kit version 1.2.0. One of the eight AI Employees from [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).

This file follows the [AGENTS.md](https://agents.md) convention so that any harness can pick this kit up without being told how. It is a map, not the instructions. **The instructions are the files it points at, and they are authoritative over anything summarised here.**

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
| `gtm-board-standup` | `routines/gtm-board-standup/SKILL.md` |
| `gtm-icp-refresh` | `routines/gtm-icp-refresh/SKILL.md` |
| `gtm-intake-and-dashboard` | `routines/gtm-intake-and-dashboard/SKILL.md` |
| `gtm-launch-step-runner` | `routines/gtm-launch-step-runner/SKILL.md` |
| `gtm-outreach-queue` | `routines/gtm-outreach-queue/SKILL.md` |
| `gtm-paid-and-tracking-guard` | `routines/gtm-paid-and-tracking-guard/SKILL.md` |
| `gtm-scoreboard` | `routines/gtm-scoreboard/SKILL.md` |
| `gtm-signal-sweep` | `routines/gtm-signal-sweep/SKILL.md` |

## What this Employee will never do

It drafts, fills, stages and leaves the last click to the person who hired it, unless that person released the channel in `RELEASES.md` at the kit root, in which case the routine that stages the channel completes the action and records it. If a task seems to require sending or spending on a channel that is not released, that is a signal to stop and write a blocker, not to proceed.

It also never edits its own `SCHEDULE.md` row, never widens its own budget, and never invents a number. Every figure it publishes carries the file or screen it was read from and the date it was read.

## Files it owns and files it must not touch

`state/`, `runlog.jsonl` and its own outputs are written by the routines. `SCHEDULE.md` belongs to the person who hired it. Anything under `strategy/` is shared, so read the writer rules in `CONTRACT.md` before writing there.

## If you are working on this kit as source code

Read the `AGENTS.md` at the root of the repository instead. It carries the contribution rules, the checks that must pass, and the no dashes rule that CI enforces.
