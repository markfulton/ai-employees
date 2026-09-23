# Install

The short version is two steps: extract a kit to a local folder, then open your agent in that folder and tell it to install the employee from there. The employee's first run takes about an hour and may ask for a second session. This page is the long version of the README's two steps: every operating system, every scheduler, and what a first run should look like so you know when it did not.

Read `docs/PREREQUISITES.md` first. Item 3, the login, is the one that fails silently.

## Before first run

- **Nothing to fill in.** The install researches your offer, your buyer and your positioning from your own public pages and confirms a short list with you. If it cannot find your home page on its own it asks once. Anything you want it to know up front, a channel that is off limits or a claim that must never be made, goes in one optional line at the top of `INSTALL-PROMPT.md`.
- **A browser signed in** to the accounts the employee should read, and your mailbox if you want drafts landing there. Log in yourself; it never will.
- **Real customer words, if you have any.** Real quotes are the only social proof the routines are allowed to use. With none, they write copy with no social proof rather than inventing any.
- **Your ceilings.** A paid ceiling of zero puts the guard into observation only. Which channels are off limits, and any claim that must never be made, one line each.
- **A machine that is awake** at the fire times in `SCHEDULE.md`, or fire times moved to after it normally wakes.

## Step 1. Get one employee folder

Pick one. The GTM Engineer is the one I have run in production the longest, so it is the one to start with unless your business needs one of the others more.

**Path A, the installer:**

```
npx ai-employees hire gtm-engineer --to D:\AgentOps\gtm-engineer
```

For the Vietnam variant in this fork, run the bundled installer from the clone: `node installer/cli.mjs hire gtm-engineer-vn --to ~/ai-employees/gtm-engineer-vn`. The public npm package does not contain this fork's variant.
The clone for this variant is `https://github.com/phantanphatdgteam-gif/ai-employees-VN.git`.

It copies that one folder, refuses a path under OneDrive, Dropbox, Google Drive or iCloud, runs the three self tests, and prints the install prompt with your path filled in. On macOS or Linux, `--to ~/ai-employees/gtm-engineer`. Without `--to` it uses `./employees/<slug>` under the current folder.

**Path B, a clone:**

```
git clone https://github.com/markfulton/ai-employees.git
```

Then copy `employees/gtm-engineer` to a folder outside cloud sync. Do not run an employee from inside the clone if the clone sits in a synced folder.

**Path C, the Claude Code plugin:** in any Claude Code session, run `/plugin marketplace add markfulton/ai-employees`, then `/plugin install ai-employees@ai-employees`, then say "hire the GTM Engineer into D:\AgentOps\gtm-engineer" or run `/ai-employees:hire`. The plugin carries all eight kits and the installer, so the skill runs Path A from the bundled files with no download. To take a newer release later, run `/plugin marketplace update ai-employees`.

**Path D, any harness that reads the skill format:** copy `skills/hire` into `~/.claude/skills/` (or your harness's skills folder) and say "hire the GTM Engineer into D:\AgentOps". Outside the plugin it uses the installer through `npx`, which is Path A.

## Step 2. Check the machine

From the employee folder:

```
node --version
node scripts/copy-check.mjs --selftest
node scripts/runlog.mjs --selftest
node scripts/guard.mjs --selftest
claude auth status
```

Four passes and `loggedIn: true`. If the last one says false, run `claude` and `/login` before anything else. On another harness, swap the last line for its own login check; a signed in account is the requirement, not the command.

## Step 3. Paste the install prompt

Open a session in that folder in the harness you use. On Claude Code, the Desktop app: open the folder, trust it; the CLI: `cd` into it and run `claude`. On another harness, `docs/HARNESSES.md` has its command. Say "install the GTM Engineer from this folder" and it reads `INSTALL-PROMPT.md` itself. Or paste it: open that file, fill in the block marked `FILL THIS IN` if you want to hand it your folder path and home page up front, copy everything between `=== BEGIN PROMPT ===` and `=== END PROMPT ===`, and paste it.

Then let it work. It reads the contract, checks the machine, researches your business from your own public pages instead of interviewing you, writes the strategy folder, seeds the board, builds the dashboard, registers its own schedule, and stops exactly once for you to read its first drafts. It asks about at most five things a crawl genuinely could not settle, and it does not wait for the answers.

If the session ends before it finishes, open a new one in the same folder and paste the prompt again. It resumes from `progress[]` in its state file rather than starting over.

## Step 4. Register the schedule

The install prompt does this itself where it can, and it proves one routine by hand before it registers the rest. What follows is what it does, per scheduler, so you can check it or do it yourself.

### Windows, the Claude Desktop app (the route I run in production)

Routines, New routine, Local. One task per routine, named exactly after the routine id (`gtm-board-standup` and so on), prompt `Read D:\AgentOps\gtm-engineer/routines/gtm-board-standup/SKILL.md and follow it.`, working folder set to the employee folder, the fire time from `SCHEDULE.md`. Click Run now once per task and choose always allow on each prompt so later runs do not stall. Turn on Keep computer awake in Settings. Local tasks need app version 1.1.5368 or later.

What happens after sleep: the app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. The kit's window guard decides whether that catch up does anything.

### Windows, Task Scheduler with the CLI

Every routine ships `run/<routine-id>.cmd.example`. Copy it to `run/<routine-id>.cmd`, replace the `«..._ROOT»` placeholder with your folder, and check the path to `claude.exe` (`where.exe claude`; the native installer puts it at `%USERPROFILE%\.local\bin\claude.exe`). Never point it at the Desktop app's bundled copy, which lives under a path Task Scheduler cannot see.

Run one by hand first:

```
cmd /c run\gtm-board-standup.cmd
```

Count the lines in `runlog.jsonl` before and after. One new line means it worked. Then register the rest with the `schtasks` lines in `CAPABILITIES.md` section 9.4, and turn on "Run task as soon as possible after a scheduled start is missed" on each.

Four things in that launcher are there because a scheduled fire found each one missing: the full path to the binary (Task Scheduler starts with the system PATH and `claude` is not on it), `< nul` (without it every fire waits three seconds for stdin), an explicit `--permission-mode` (a run that waits on a prompt at 06:45 never fails and never writes a record), and the `if errorlevel 1` line that writes a `failed` run record when the harness exits before the routine could (which is what a missing login looks like).

### macOS, the Claude Desktop app

Same as the Windows app route: Routines, New routine, Local, one task per routine, prompt `Read ~/ai-employees/gtm-engineer/routines/gtm-board-standup/SKILL.md and follow it.`, working folder the employee folder, always allow on first run, Keep computer awake on.

### macOS, launchd with the CLI

One plist per routine at `~/Library/LaunchAgents/com.aiemployees.<routine-id>.plist`. The weekday standup, as an example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>com.aiemployees.gtm-board-standup</string>
  <key>WorkingDirectory</key><string>/Users/you/ai-employees/gtm-engineer</string>
  <key>ProgramArguments</key><array>
    <string>/bin/zsh</string><string>-lc</string>
    <string>/Users/you/.local/bin/claude -p "Read /Users/you/ai-employees/gtm-engineer/routines/gtm-board-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json &lt; /dev/null || node /Users/you/ai-employees/gtm-engineer/scripts/runlog.mjs --failed-run gtm-board-standup --exit-code $?</string>
  </array>
  <key>StartCalendarInterval</key><array>
    <dict><key>Weekday</key><integer>1</integer><key>Hour</key><integer>7</integer><key>Minute</key><integer>30</integer></dict>
    <dict><key>Weekday</key><integer>2</integer><key>Hour</key><integer>7</integer><key>Minute</key><integer>30</integer></dict>
    <dict><key>Weekday</key><integer>3</integer><key>Hour</key><integer>7</integer><key>Minute</key><integer>30</integer></dict>
    <dict><key>Weekday</key><integer>4</integer><key>Hour</key><integer>7</integer><key>Minute</key><integer>30</integer></dict>
    <dict><key>Weekday</key><integer>5</integer><key>Hour</key><integer>7</integer><key>Minute</key><integer>30</integer></dict>
  </array>
  <key>StandardOutPath</key><string>/Users/you/ai-employees/gtm-engineer/run/gtm-board-standup.log</string>
  <key>StandardErrorPath</key><string>/Users/you/ai-employees/gtm-engineer/run/gtm-board-standup.log</string>
</dict></plist>
```

Monthly rows use `Day` entries 1 to 7 (the intake) and 25 to 31 (the refresh) instead of `Weekday`; the routine's own `days` and period key reduce that burst to one run. Load with `launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/com.aiemployees.gtm-board-standup.plist`, test with `launchctl kickstart -k gui/$(id -u)/com.aiemployees.gtm-board-standup`, remove with `launchctl bootout gui/$(id -u)/com.aiemployees.gtm-board-standup`. `/bin/zsh -lc` is what gives the job your PATH and home. launchd coalesces every fire missed during sleep into one run on wake.

Install the CLI with `curl -fsSL https://claude.ai/install.sh | bash`, log in once with `claude` and `/login`, and `brew install node` for the scripts. For the browser lane, install the Claude in Chrome extension and run `claude --chrome` once interactively to accept the first run dialog.

### Linux, cron

One line per routine, from `CAPABILITIES.md` section 9.3, with the full path to the binary and `< /dev/null`. cron skips a fire the machine slept through and never catches up, so on a laptop put the fire times after it normally wakes. The two monthly lines leave the day of week field open on purpose; the file explains why.

### The other ten harnesses

OpenClaw, Hermes, Cline and Qwen Code have a built in cron, Codex has scheduled runs, Antigravity has the `agy` job runner, DeepSeek schedules through a plugin, and Grok Bot runs recurring tasks from its own cloud computer: register one job per routine in that scheduler, with the kit folder as the working directory, the fire time from `SCHEDULE.md`, and the prompt `Read <root>/routines/<id>/SKILL.md and follow it.`. OpenCode and Pi have no scheduler of their own, so use the operating system's route above with their headless command in place of `claude -p`. `docs/HARNESSES.md` has the exact invocation and the first run check for each, and the same rule holds everywhere: run one routine by hand before you register the rest. Grok Bot is the one whose computer is not yours: the bot installs the kit on its own cloud computer, you paste the kit's `AGENTS.md` into the bot's Instructions field, and the brief reaches you in the bot's thread. The hosted section of `docs/HARNESSES.md` has the rest, including what the shared computer means for your logins.

## What a first day looks like

Day one ends with a strategy folder in your own words, a command center you can click through, a schedule that is registered and proven with one run by hand, and a first small batch of drafts you have corrected. The next weekday the standup writes `brief-latest.md` before you are up. It is capped at thirty lines and it never lists what passed.

## When something goes wrong

- **No brief and no run record the next morning.** The schedule did not fire or the run stalled. Check the login (`claude auth status` on Claude Code, your harness's own check elsewhere), check the machine was awake, and run the launcher by hand. A run that hangs on a permission prompt leaves nothing behind; `CAPABILITIES.md` section 10 is the fix.
- **A `failed` record that names the launcher.** The harness exited before the routine wrote anything. Login first, binary path second.
- **`skipped-out-of-window` on a day it should have run.** The fire arrived late, outside the window. Move the fire time or widen nothing: a wider window invites an overlap.
- **`runlog.mjs` refused a record.** It carried a URL, an email address, a draft, or a secret. That is the rule working; the detail belongs in the queue file, not the log.
- **The kit ended up inside OneDrive.** Move it out, update the `FILL THIS IN` path, and re-register the jobs. The install prompt does this itself if it notices.

## The macOS first run checklist

Run this on your first macOS install and open an issue with what each step recorded and what you changed. It goes into the notes in `docs/HARNESSES.md`, with your name on the change.

1. `sw_vers`, `node --version`, `claude --version`, `claude auth status` (expect `loggedIn: true`).
2. Copy the kit to `~/ai-employees/gtm-engineer`, run the three self tests, record the three PASS lines.
3. Paste the install prompt in a fresh session in that folder with a real home URL; record the wall time to the stop, the phase where it first asked for anything not on the list, and the final `state/gtm-intake-and-dashboard.json`.
4. Run `gtm-board-standup` by hand with the exact plist command line and confirm `brief-latest.md` plus one `runlog.jsonl` line.
5. Load the eight plists, sleep the machine across a 07:30 fire, wake it, and record what fired, when, and which status each run wrote.
6. Repeat step 5 with the Desktop app route and eight local tasks.
7. Run the sweep with `--chrome` while signed in to LinkedIn and confirm it never types there and records `blocked-login` on a checkpoint.
8. Report `--output-format json` `total_cost_usd` for each routine so `docs/COST.md` gets a Mac column.
