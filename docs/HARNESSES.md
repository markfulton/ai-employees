# Harnesses

Every routine is one `SKILL.md` with `name` and `description` frontmatter, plain markdown instructions, and no clock time in it. Any harness that can read files, write files, run a command, read the clock, and (ideally) drive your signed in browser can run one. What differs is the scheduler and the invocation, and this page says which of those I have actually watched work.

Tested on Claude Code on Windows through the Desktop app scheduler and Task Scheduler. OpenClaw and Hermes have built in cron and their install notes are included, not yet tested by me. OpenCode, Grok Bot, Codex and Antigravity notes come from the club docs and are untested. macOS through launchd is expected to work and untested until a Mac tester runs the checklist.

Two rules hold on every harness. **Routines are scheduled jobs, not skills**: point the scheduler at the kit's `routines/` folder and never copy them into a global skills directory, because a skills directory loads all of them into every session you open and lets any of them be invoked outside its window, where it will only record a skip and exit. **Keep one copy**: every routine ends with a `## Corrections` section you write into and it reads on its next run, and two copies means you write into one and it reads from the other.

| Harness | Status | Scheduler | Invocation shape | What to check first |
|---|---|---|---|---|
| Claude Desktop app, Windows | **Tested.** The GTM Engineer has run my club launch every weekday on it since August 27 | Local scheduled tasks, one per routine, permission mode per task | The task's prompt is `Read <root>/routines/<id>/SKILL.md and follow it.` with the working folder set to the kit | Always allow on the first run of each task, Keep computer awake on |
| Claude Code CLI, Windows Task Scheduler | **Tested to the point where Claude Code starts.** The chain task, `run/<id>.cmd`, binary, prompt fired and reached Claude Code; a full routine completing under it is not yet proven | Task Scheduler, one task per routine pointed at `run/<id>.cmd` | `claude.exe -p "<prompt>" --permission-mode acceptEdits --output-format json < nul`, shipped as `run/<id>.cmd.example` | Full path to the binary, `claude auth status`, the missed start setting on |
| Claude Desktop app, macOS | Expected to work, untested by me | Local scheduled tasks | Same as Windows | A Mac tester running the checklist in `docs/INSTALL.md` |
| Claude Code CLI, macOS launchd | Expected to work, untested by me | launchd, one plist per routine, `StartCalendarInterval` | `/bin/zsh -lc "claude -p ... < /dev/null"`, plist in `docs/INSTALL.md` | launchd coalesces missed fires into one run on wake, which the window guard handles |
| Claude Code CLI, Linux cron | Untested by me | cron, lines in each kit's `CAPABILITIES.md` 9.3 | `claude -p "<prompt>" < /dev/null` with absolute paths | cron never catches up after sleep |
| OpenClaw | Notes included, not yet tested by me | Built in cron: `openclaw automations create "<cron>" "<message>" --name <id> --session isolated`, one per routine, with the timezone flag | The message is `Read <root>/routines/<id>/SKILL.md and follow it.` | Whether its browser control attaches to your signed in profile; run the probe in `CAPABILITIES.md` 1.2 |
| Hermes | Notes included, not yet tested by me | Built in cron with delivery to any platform | Point each job at the routine file as its prompt | Whether it reads files and runs a shell command; then the browser question |
| OpenCode | Untested, notes from the club docs | None built in; use the operating system's | `opencode run "<prompt>"`, confirm against `opencode --help` | Add a browser automation server for the browser lane |
| Grok Bot | Untested, notes from the club docs | Its bots run routines on a schedule from their own cloud computer | One recurring task per routine, handed that routine's `SKILL.md` as the run prompt | Whether it can reach your signed in accounts at all; it runs elsewhere |
| Codex | Untested, notes from the club docs | Scheduled runs, one per routine | `codex exec "<prompt>"`, confirm against `codex --help` | The sandbox: confirm it can write in the kit folder and reach the network |
| Antigravity | Untested, notes from the club docs | `agy` job runner pointed at the routine folder | `agy -p "<prompt>"` | Whether it drives your signed in browser profile or a clean one |

## What the invocation has to get right, on every harness

1. **The working directory is the kit folder.** Every path in a routine is relative to it.
2. **No permission prompt.** A scheduled run in a prompting mode does not fail at 06:45; it hangs, and leaves no record. Run scheduled work in the harness's auto approve mode, scoped to the kit folder where the harness allows scoping. This does not weaken the two stops, which live inside the routines, not in the prompt gate. `CAPABILITIES.md` section 10 in every kit is the full argument.
3. **Prove one routine by hand before registering the rest.** Run the standup, watch it write `brief-latest.md` and exactly one line into `runlog.jsonl`. Eight jobs registered on an invocation nobody ran is eight silent failures on the same morning.
4. **A non zero exit should leave a record.** The Windows launcher does this through `runlog.mjs --failed-run`. On other harnesses, add the same `||` fallback to the command line.

## If you ran one of the untested rows

Open an issue with the harness and version, the invocation you used, and what the first run record said. That is what moves a row from untested to tested, with your name on the change.
