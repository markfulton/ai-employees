# Prerequisites

Ten things. Every line here was either measured on my own machine or read from the vendor's own page, and the install prompt checks the ones it can. Read this before `npx ai-employees hire` or a clone, because the one thing that fails silently is the login, and it fails after everything else looks fine.

## 1. A plan that includes Claude Code

Pro, Max 5x, Max 20x, Team or Enterprise. The free plan does not include Claude Code. An Anthropic Console API key also works, but it turns the browser lane off (item 6), so the routines that read your own accounts fall back to public pages.

If you run another harness, it needs four things: read and write files in a folder, read the machine clock and timezone, run a local command, and ideally drive a browser that carries your own signed in sessions. `docs/HARNESSES.md` has the scheduler, the invocation and the first run check for each harness.

## 2. Claude Code installed

Two shapes, and the difference decides how you schedule.

- **The Claude Desktop app** (macOS, Windows, Linux beta). It includes Claude Code, needs no Node for itself, and has local scheduled tasks with a permission mode per task. This is the route I run in production.
- **The CLI.** macOS and Linux: `curl -fsSL https://claude.ai/install.sh | bash`. Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`. Also Homebrew (`brew install --cask claude-code`), WinGet (`winget install Anthropic.ClaudeCode`), or npm (`npm install -g @anthropic-ai/claude-code`, Node 22 or later for that route). The CLI has no scheduler of its own; you pair it with the operating system's (item 7).

Minimums from the setup page: macOS 13.0 or later, Windows 10 1809 or later, Ubuntu 20.04 or later, 4 GB of RAM.

## 3. Logged in, by a human, once

Run `claude`, then `/login`, and finish in the browser. Confirm with:

```
claude auth status
```

You want `loggedIn: true`. A scheduled run that is not logged in exits in about a third of a second with `Not logged in` and writes nothing, and that is the failure this repo is built to make loud: the install prompt checks it in Phase 0 and stops in plain words, and the Windows launcher writes a `failed` run record when it happens later.

## 4. Node 18 or newer

For the three scripts in every kit: `guard.mjs`, `runlog.mjs` and `copy-check.mjs`. They are dependency free. Nothing to install beyond Node itself. Check with `node --version`, then run all three self tests once from the kit folder:

```
node scripts/copy-check.mjs --selftest
node scripts/runlog.mjs --selftest
node scripts/guard.mjs --selftest
```

## 5. On Windows, Git for Windows

Claude Code uses it for its shell tool and the Desktop app requires it for local sessions. Do not use WSL if you want the browser lane: the Chrome integration is not supported inside WSL.

## 6. The browser lane, if you want it

Optional, and the section in each kit's README called "What you lose with no browser control" is honest about what it costs to skip. To have it: Google Chrome or Microsoft Edge, the Claude in Chrome extension (1.0.36 or later), `claude --chrome` on the CLI or the Desktop app's own integration, a login based session rather than an API key, and the site permissions granted in the extension before the first scheduled run. The routines share your browser's own login state; they never sign in to anything, and on a login wall or a captcha they stop that phase and say so.

## 7. A scheduler

- The Desktop app's local scheduled tasks (Routines, Local), one task per routine, named after the routine id.
- Windows Task Scheduler, pointed at the launchers in the kit's `run/` folder.
- launchd on macOS, one plist per routine.
- cron on Linux. cron never catches up after sleep; the kit's window guard makes that safe, but a laptop that sleeps through a fire time gets no brief that day.

`docs/INSTALL.md` has the exact steps for each.

## 8. A machine that is awake at fire time

These are scheduled routines on your machine, not a service somewhere else. Either the machine is awake at the times in `SCHEDULE.md`, or you move the fire times to after it normally wakes. On the Desktop app, turn on Keep computer awake. A closed lid still sleeps.

## 9. A working folder outside cloud sync

Not inside OneDrive, Dropbox, Google Drive or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. `D:\AgentOps\gtm-engineer` or `~/ai-employees/gtm-engineer` is right. The installer refuses a synced path, and the install prompt moves the kit out of one if it finds itself there.

## 10. A usage budget

Measured on the GTM Engineer over 29 production runs: about $20 of API equivalent usage on a plain weekday on Opus, about $27 on a Monday or a Friday, about $8 a weekday on Sonnet. `docs/COST.md` has the table, the dates, and the plan line. In short: on a Max 20x plan one employee fits comfortably in my experience; on Pro it will hit the weekly limit; on an API key it costs what the table says and loses the browser lane.

## Where it runs

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex and Antigravity, and runs on Windows, macOS and Linux. Windows through the Desktop app scheduler or Task Scheduler, macOS through the Desktop app or launchd, Linux through cron, OpenClaw and Hermes through their built in cron. `docs/HARNESSES.md` has the invocation and the first run check for each, and `docs/INSTALL.md` has the steps per operating system.
