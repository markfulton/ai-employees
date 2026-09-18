# Prerequisites

Ten things, and one optional eleventh. Every line here was either measured on my own machine or read from the vendor's own page, and the install prompt checks the ones it can. Read this before `npx ai-employees hire` or a clone, because the one thing that fails silently is the login, and it fails after everything else looks fine.

The kits run on eleven harnesses: Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek. Claude Code is the worked example in every item below because it is the one I run these on every weekday. Where another harness differs, the item says so, and `docs/HARNESSES.md` has the scheduler, the invocation and the first run check for each of the eleven.

## 1. An agent harness that can do four things

Read and write files in a folder, read the machine clock and timezone, run a local command, and, for the browser lane, drive a browser that carries your own signed in sessions. Any of the eleven qualifies. Pick the one you already use; nothing in a kit is written for one harness's tools, because the routines name capabilities and `CAPABILITIES.md` in each kit maps them to a route per harness.

On Claude Code that means a plan that includes it: Pro, Max 5x, Max 20x, Team or Enterprise. The free plan does not include Claude Code. An Anthropic Console API key also works, but it turns the browser lane off (item 6), so the routines that read your own accounts fall back to public pages. On the other ten, the account or key the harness already runs on is the whole requirement; the kits add no credential of their own.

## 2. The harness installed, in a shape you can schedule

Every harness comes in one of two shapes, and the shape decides how you register the schedule in item 7: one with a scheduler of its own, and one you pair with the operating system's.

On Claude Code the two shapes are:

- **The Claude Desktop app** (macOS, Windows, Linux beta). It includes Claude Code, needs no Node for itself, and has local scheduled tasks with a permission mode per task. This is the route I run in production.
- **The CLI.** macOS and Linux: `curl -fsSL https://claude.ai/install.sh | bash`. Windows PowerShell: `irm https://claude.ai/install.ps1 | iex`. Also Homebrew (`brew install --cask claude-code`), WinGet (`winget install Anthropic.ClaudeCode`), or npm (`npm install -g @anthropic-ai/claude-code`, Node 22 or later for that route). The CLI has no scheduler of its own; you pair it with the operating system's (item 7).

Minimums from Claude Code's setup page: macOS 13.0 or later, Windows 10 1809 or later, Ubuntu 20.04 or later, 4 GB of RAM.

On the other ten, install the harness the way its own page says. OpenClaw, Hermes, Cline, Qwen Code, Codex, Antigravity and DeepSeek bring a scheduler; Grok Bot runs its schedule from its own cloud computer; OpenCode and Pi have none of their own and pair with the operating system's. `docs/HARNESSES.md` has one row per harness.

## 3. Logged in, by a human, once

Whatever harness you use, a person signs in to it once, and the routines never do. On Claude Code: run `claude`, then `/login`, and finish in the browser. Confirm with:

```
claude auth status
```

You want `loggedIn: true`. On another harness, run its own login or status command and confirm a signed in account before you register anything; the install prompt asks your harness for its own equivalent of this check.

A scheduled run that is not logged in exits in about a third of a second, on Claude Code with `Not logged in`, and writes nothing. That is the failure this repo is built to make loud: the install prompt checks it in Phase 0 and stops in plain words, and the Windows launcher writes a `failed` run record when it happens later.

## 4. Node 18 or newer

For the scripts in every kit: `guard.mjs`, `runlog.mjs`, `copy-check.mjs`, and a kit's own extras such as the Ad Manager's `review.mjs`. They are dependency free and the same on every harness. Nothing to install beyond Node itself. Check with `node --version`, then run all three self tests once from the kit folder:

```
node scripts/copy-check.mjs --selftest
node scripts/runlog.mjs --selftest
node scripts/guard.mjs --selftest
```

## 5. On Windows with Claude Code, Git for Windows

Claude Code uses it for its shell tool and the Desktop app requires it for local sessions. Do not use WSL if you want the browser lane: the Chrome integration is not supported inside WSL. Another harness has its own Windows requirements, listed on its install page; the kits themselves need only Node and a folder.

## 6. The browser lane, if you want it

Optional, and the section in each kit's README called "What you lose with no browser control" is honest about what it costs to skip. The requirement is the same on every harness: it has to drive a browser that carries your own logins, not a clean automated profile, because the routines share your browser's login state and never sign in to anything. On a login wall or a captcha they stop that phase and say so.

On Claude Code that means Google Chrome or Microsoft Edge, the Claude in Chrome extension (1.0.36 or later), `claude --chrome` on the CLI or the Desktop app's own integration, a login based session rather than an API key, and the site permissions granted in the extension before the first scheduled run. On OpenCode and Codex it is a browser automation server you add. On Antigravity and DeepSeek browser control is part of the product, and the thing to settle is which profile it drives. On Grok Bot the browser runs on its own cloud computer, so whether it can reach your accounts at all is the first check. Each kit's `CAPABILITIES.md` section 1.2 has a probe that answers the question on any harness in a minute.

## 7. A scheduler

Your harness's own, where it has one:

- The Claude Desktop app's local scheduled tasks (Routines, Local), one task per routine, named after the routine id.
- The built in cron in OpenClaw, Hermes, Cline and Qwen Code; Codex scheduled runs; the Antigravity `agy` job runner; the DeepSeek scheduling plugin; a recurring task per routine on Grok Bot.

Otherwise the operating system's:

- Windows Task Scheduler, pointed at the launchers in the kit's `run/` folder.
- launchd on macOS, one plist per routine.
- cron on Linux. cron never catches up after sleep; the kit's window guard makes that safe, but a laptop that sleeps through a fire time gets no brief that day.

`docs/INSTALL.md` has the exact steps for each operating system and `docs/HARNESSES.md` the invocation for each harness. Whichever you use, run one routine by hand before you register the rest.

## 8. A machine that is awake at fire time

These are scheduled routines on your machine, not a service somewhere else. Either the machine is awake at the times in `SCHEDULE.md`, or you move the fire times to after it normally wakes. On the Desktop app, turn on Keep computer awake. A closed lid still sleeps. Grok Bot is the one exception, because its schedule runs on its own cloud computer.

## 9. A working folder outside cloud sync

Not inside OneDrive, Dropbox, Google Drive or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. `D:\AgentOps\gtm-engineer` or `~/ai-employees/gtm-engineer` is right. The installer refuses a synced path, and the install prompt moves the kit out of one if it finds itself there.

## 10. A usage budget

On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, about $27 on a Monday or a Friday, and an API key loses the browser lane. On another harness the cost is that harness's own model bill for the same work; the per routine table in `docs/COST.md` gives the token shape so you can estimate it, along with the dates and the method.

## 11. Connections, optional

Every kit's `CAPABILITIES.md` has a section 4b naming the connections that read its accounts without a browser: a connector from your harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. Each one is optional. The install checks for it, uses it when it is there, and falls back to the browser lane when it is not. Four rules hold on every harness: the kit never installs a connection; a connected route is used read only wherever the vendor offers a read only form; nothing on a connection creates, sends, spends, deploys or deletes unless you release that channel in `RELEASES.md`; and a connection earns its place only if a routine reads it every day or every week, because most harnesses load every connected server's tool descriptions into every run. `docs/HARNESSES.md` has the column that says how each harness adds one.

## Where it runs

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. Windows through the Desktop app scheduler or Task Scheduler, macOS through the Desktop app or launchd, Linux through cron, and the harnesses with a scheduler of their own through that. `docs/HARNESSES.md` has the invocation and the first run check for each, and `docs/INSTALL.md` has the steps per operating system.
