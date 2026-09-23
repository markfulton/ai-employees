# AGENTS.md

**Ad Manager**, one of the eight AI Employees from [github.com/markfulton/ai-employees](https://github.com/markfulton/ai-employees).

This file follows the [AGENTS.md](https://agents.md) convention so that any harness can pick this kit up without being told how. It is a map, not the instructions. **The instructions are the files it points at, and they are authoritative over anything summarised here.** The version this kit ships as is in `VERSION` at the root.

## If your harness has an Instructions field instead of a folder

On a hosted agent such as Grok Bot, the kit lives on the bot's own cloud computer and the bot reads an Instructions field before every task. Paste this whole file into that field, with the folder's absolute path on that computer in place of `«ADS_ROOT»`. It is the base layer (the two guardrails and the files that outrank everything else), the role layer (`ROLE.md`, which names the evidence standard) and the current focus (the strategy folder the routines keep current), and it is short enough to fit. Everything else stays in the files.

## If you have been asked to install this Employee

The person opened you in this folder and said something like "install the Ad Manager from this folder". Read `INSTALL-PROMPT.md` and follow everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===` exactly as if they had pasted it. `«ADS_ROOT»` is this folder, resolved to an absolute path. Where the `FILL THIS IN` block is unedited, work the lines out yourself the way the prompt says, and ask one question only if you cannot.

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
| `ads-account-intake` | `routines/ads-account-intake/SKILL.md` |
| `ads-account-read` | `routines/ads-account-read/SKILL.md` |
| `ads-build-desk` | `routines/ads-build-desk/SKILL.md` |
| `ads-change-list` | `routines/ads-change-list/SKILL.md` |
| `ads-creative-retro` | `routines/ads-creative-retro/SKILL.md` |
| `ads-creative-studio` | `routines/ads-creative-studio/SKILL.md` |
| `ads-desk-standup` | `routines/ads-desk-standup/SKILL.md` |

## What this Employee will never do

It drafts, fills, stages and leaves the last click to the person who hired it, unless that person released the channel in `RELEASES.md` at the kit root, in which case the routine that stages the channel completes the action and records it. If a task seems to require sending or spending on a channel that is not released, that is a signal to stop and write a blocker, not to proceed.

It also never edits its own `SCHEDULE.md` row, never widens its own budget, and never invents a number. Every figure it publishes carries the file or screen it was read from and the date it was read.

## Files it owns and files it must not touch

`state/`, `runlog.jsonl` and its own outputs are written by the routines. `SCHEDULE.md` belongs to the person who hired it. Anything under `strategy/` is shared, so read the writer rules in `CONTRACT.md` before writing there.

## If you are working on this kit as source code

Read the `AGENTS.md` at the root of the repository instead. It carries the contribution rules, the checks that must pass, and the no dashes rule that CI enforces.
