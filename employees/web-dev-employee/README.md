# Web Dev Employee

<img src="https://club.reinventing.ai/img/employees/web-dev-employee.webp" alt="Web Dev Employee" width="100%">


**Role:** keeping the things you already shipped alive.
**What it replaces:** the maintenance half of a contract developer, for the parts that repeat.
**What it is:** eight scheduled routines that run on your own machine, on your own schedule, against the projects you already run.

This is not a chat window and not a service running somewhere else. It is eight jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

It finds out every weekday whether your sites are up. It reads your production logs and turns a hundred error lines into one incident with an age and a count. It fixes the safe ones on a branch, behind your own build and your own tests, and hands you the rest written up with the evidence. It watches your registrar, your host, and your database for the drift nobody notices until a domain lapses. And on Friday it tells you what actually changed, with the file every number came from printed beside it.

**It can merge, deploy and spend. Whether it does is a setting you own: shipped, every change stops at a branch you review, and `RELEASES.md` hands a step over when its branches have earned it.** Held is the default because it is what lets you leave this running on day one. Released is where a channel goes once its drafts have earned it.

---

## What it owns

- **Site health.** Every page you declare, checked from the outside every weekday: the status code, the response time, and where a redirect actually landed. One dated observation per path, kept forever.
- **Error triage.** Your production logs, read since a cursor so the same week is never read twice. Every error line is normalised into a fingerprint, so an error seen four hundred times is one incident with a first seen date, not four hundred lines.
- **The safe fixes.** A narrow class of change made on a branch, behind your own build command and your own test command, with the rollback in one line and a compare link. What counts as safe is not somebody's opinion: it is set by what you actually merged last month.
- **The escalations.** Everything outside that class, written up with the evidence, a proposed diff, and the open questions, so it takes you five minutes instead of an evening.
- **Dependency and supply chain debt.** Patch and lockfile bumps in one branch per project. Everything else held, with the changelog link, the breaking note quoted rather than summarised, and the files that would need touching, found by searching rather than guessed.
- **Your platform.** Domain expiry dates and auto renew states, nameservers, certificates, hostname bindings, failed production builds, missing environment variable names, and your database's own security and performance advisories.
- **Your inventory.** What you actually run: the repositories, the production branches, the build and test commands, the hostnames, the environments, the log surfaces, the domains. Re-read every month rather than trusted.
- **The weekly change report.** What moved, one fix worth doing next week, one thing to stop.

---

## The eight routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `web-site-sweep` | Weekdays | 06:45 | Checks every declared path from the outside, then reads your production logs since its own cursor and groups every error into a fingerprint. |
| `web-standup` | Weekdays | 07:30 | Reads the commit graph to find out which of yesterday's branches you actually merged, closes those cards, reopens anything that came back, re-renders the board, and writes your morning brief. |
| `web-fix-runner` | Weekdays | 08:10 | Takes the one card the standup marked ready and turns it into a branch with a gate result, a change brief, and a rollback line. |
| `web-platform-guard` | Mondays | 10:30 | Reads your registrar, your host, and your database, and names every difference from what your inventory says, with the exact screen and both values. |
| `web-inventory-refresh` | First weekday of the month | 11:45 | First run: finds what you run, writes the inventory, seeds the board, builds a dashboard, registers the schedule. Monthly: re-reads the same evidence and applies what changed. |
| `web-dependency-run` | Wednesdays | 13:30 | Bumps the patch and lockfile class on a branch per project behind your own gate, and holds everything else with the evidence attached. |
| `web-weekly-report` | Fridays | 15:30 | Scores the week with a source beside every number, names one fix and one thing to stop, and replays the learned browser flows so a drifted one is found on a Friday rather than on a Tuesday morning something needed it. |
| `web-guardrail-review` | Last weekday of the month | 16:45 | Rewrites what the fix runner may change unsupervised, from what you actually merged, edited, and rejected that month. |

Three things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**No routine sits on a Sunday.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error. Three of these key on the ISO week.

---

## The loop that makes it a system

Each of the eight exists because it is a link in one chain.

The sweep finds out what is true this morning and turns your logs into a short list of incidents. The standup reads the commit graph, learns which branches you merged, closes those cards, reopens anything that regressed, orders the board, and marks exactly one card ready. The fix runner turns that one card into a branch with a verdict and stops there. You merge. Tomorrow's standup reads the graph, closes the card, and clears the dependency behind it, which is what makes the next card ready.

The platform guard watches the surfaces that fail silently. The dependency run keeps the trees current on the same ledger with the same statuses. Friday scores it all and sets what next week aims at. The end of the month reads a month of outcomes and decides what the fix runner may do next month. The inventory refresh re-reads what everything above is pointed at.

Break one link and the chain stops producing changes you will merge. That is why there are eight and not four.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- **It never merges, deploys, promotes, redeploys, or restores.** Every change is a branch. You merge it.
- **It never applies a migration to any environment**, including a local one. The migration file is written onto the branch with the exact command to apply it, what it depends on, and an honest rollback line, or the honest words that there is no automatic rollback.
- **It never registers, renews, transfers, or buys a domain**, and never touches auto renew in either direction. A domain lapsing is the top line of the report and a card with the exact screen. A domain renewed for you is money spent that nobody authorised, on a name you may have been letting go deliberately.
- **It never buys or provisions a certificate**, including a free one a screen offers in one click.
- **It never upgrades a plan, adds a paid add on, raises a usage tier, lifts a limit, or provisions paid infrastructure.** Not a database, not an instance, not a bucket, not a build minute pack.
- **It never puts anything into a purchasable state**, including a cart, a saved order, a quote, or a plan change scheduled for later. A cart is a purchase in a waiting room.
- **It never creates, saves, applies, enables, disables, pauses, resumes, renames, or deletes anything in any of your provider accounts.** On any screen, the whole list of what it may do is navigate, read, and set a view control such as a date range or a log level filter. A filter it changed, it puts back.
- **A dependency that now needs a paid tier is a held package with a card**, carrying the exact screen and the exact cost the page states. Resolving a dependency never becomes a purchase.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms.
- It never writes a key, a token, a password, or a connection string into any file, commit message, branch name, change brief, card, report, or log line. Where a change needs one, it writes the variable name into the code and names the screen where you set the value.
- **It records the names of your environment variables and never their values.** Not masked, not truncated, not by length. A screen offering to reveal a value is a screen whose reveal control it does not press.
- Every raw string that came off a production surface is scanned before it is copied anywhere: a log excerpt, a build failure reason, a package manager output line, and every diff before it is committed. A flagged line is not copied at all, and a flagged diff is never committed, because a value in a commit is in the history forever.
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

### And one rule that is neither, and matters more than both

**It never rotates or regenerates an encryption key or an API key.**

Something is encrypted with that key, or something is authenticating with it, and rotating it destroys that thing silently. There is no undo and usually no error, only data that stops decrypting and a service that stops connecting, found days later by somebody with no idea why.

Every provider screen it reads has a control that offers to do it. Several sit right next to the value it came to check. It does not press one, in any circumstance, **including the run where it has just found that a key leaked.** In that case the output is a card naming the class of credential and the exact screen, and you rotate it yourself.

**Nothing in the kit can merge, deploy, or rotate.** There is no switch, no exception, and no routine with the capability buried inside it.

---

## What it does without asking

The two guardrails above are the whole list. Everything else the Employee owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

**It owns every branch it creates.** It picks how to write the change inside the card's definition of done, writes the code, runs your gate, writes the brief, and pushes. Nobody signs any of that off and it never waits. The boundary is not who approves the change: the boundary is that the change stops at the branch.

**It owns its own boundary.** At the end of each month it reads what you merged as it was, what you edited on the way in, what you closed without merging, and what came back after merging, and rewrites what it may change unsupervised. A class you merged clean three months running widens by exactly one step. A class you edited once narrows immediately. **A class whose fix came back after you merged it goes straight to nothing.** Widening waits, narrowing does not, because a class left too wide for one more month can put a change you did not want into your production branch, and a class narrowed too soon costs you one extra write up you can act on in five minutes.

**It owns everything inside its own folder.** It rewrites the inventory on this month's evidence, sets your performance budgets from four weeks of your own measurements rather than from a general recommendation, creates and orders its own board cards, registers its own scheduled jobs, and moves a fire time to clear a collision it detected. When a provider screen changes and a browser flow stops matching, it reads the live page, finds what carries that role now, and writes the replacement into its own file. When a ledger line will not parse it copies that one line to a quarantine file and rebuilds its index from the rest.

Every one of those changes lands as one line in a changelog: the date, the routine, the file, what changed, and where it read it. **A change with no evidence path is not written**, because if it cannot say where it read something, it did not read it.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own.

Two things stay outside all of that, because they are the first guardrail wearing different clothes: anything in a provider account it did not create, and anything on the far side of a merge, a deploy, a spend, or a rotate control. Those get named, never touched.

**Every card carries a kind.** A card whose definition of done is a file on your machine gets ticked by the routine that made that file, the moment it has verified it. A card whose definition of done is a merge, a spend, or a credential is yours, and it closes from exactly two marks: your tick, or the commit graph showing the change merged. The second is not a substitute for you acting. It is the record of you having acted, and it is more reliable than a tick because it cannot be forgotten.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## These are scheduled routines, not skills

This is a kit of scheduled work. It is not a set of global skills, and it never becomes one.

**Do not copy the folders under `routines/` into your harness's global skills directory.** Two things go wrong if you do. All eight load into every session you open, including the ones that have nothing to do with your projects. And any of them can be invoked outside its window, where it does nothing at all except record that it skipped and exit, which looks like a broken routine and is not.

Point your harness at `«WEB_ROOT»/routines` as a routine source, or link the folders. **Do not keep two copies.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run, and with two copies you write into one and it reads from the other.

**No routine here creates, authors, or installs anything in your global skills or plugins directory.** Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Something like `D:\AgentOps\web-dev` or `~/agent-ops/web-dev` is right. That folder is `«WEB_ROOT»` everywhere in this kit.

**Your projects stay where they are.** `«WEB_ROOT»` is not a code root and never holds one. The Employee reads your repositories where they already live, and the only thing it ever writes there is a branch.

**A harness that can do four things.** Read and write files, read the machine clock and timezone, run a local command, and ideally drive a browser that carries your own signed in sessions. The first three are not optional, and the third matters more here than in most kits because a gate is a command. The fourth decides how much of the kit runs, and [What you lose with no browser control](#what-you-lose-with-no-browser-control) below is the honest accounting.

**Node 18 or newer**, used only by the three scripts inside the kit. All three are dependency free. There is no install step and no package file.

**One answer, once.** Setup asks you for the working folder path and nothing else. It finds your repositories by looking, reads your remotes and branches off them, reads your build and test commands out of your manifests, reads your package manager off the lockfile each repository actually holds, and reads your hostnames, environments, log surfaces, and expiry dates off your host and your registrar. If it ever asks you for something it could have read, that is a defect.

**A few minutes on a weekday.** Read the brief, merge the branches you agree with, tick what you did. The brief is capped at thirty lines on purpose and it never lists what passed.

---

## Prerequisites

Ten things. The install checks the ones it can, and it stops in plain words on the one that fails silently otherwise, which is the login.

1. **An agent harness that can read and write files, run a command, read the clock, and drive the browser you are signed in to.** Any of the eleven this kit is built for: Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code or DeepSeek. On Claude Code that means a plan that includes it, Pro, Max, Team or Enterprise; the free plan does not. An API key works for the file routines and turns the browser lane off. The other ten run on whatever account they already run on.
2. **The harness installed, in a shape you can schedule.** On Claude Code that is either the Claude Desktop app, which includes it and has a local scheduler of its own, or the CLI, which you pair with the operating system's scheduler. `CAPABILITIES.md` section 2 gives the same answer for each of the other ten.
3. **Logged in, by a human, once.** On Claude Code, run `claude`, then `/login`, and confirm with `claude auth status`; on another harness, its own login check. A scheduled run that is not logged in exits in under a second and writes nothing, so the install checks this before it does anything else and the launcher writes a `failed` run record when it happens later.
4. **Node 18 or newer.** The three scripts in `scripts/` are dependency free and need nothing installed.
5. **On Windows with Claude Code, Git for Windows.** Claude Code needs it for its shell and the Desktop app needs it for local sessions. Not WSL if you want the browser lane, because the browser bridge does not run inside WSL. Another harness has its own Windows requirements, listed on its install page.
6. **The browser lane, if you want it:** a harness that drives a browser carrying your own logins rather than a clean automated profile. On Claude Code that is Google Chrome or Microsoft Edge, the Claude in Chrome extension, a login based session rather than an API key, and the site permissions granted in the extension before the first scheduled run; `CAPABILITIES.md` section 2 says what it is on each of the others. The routines share your browser's own login state and never sign in to anything.
7. **A scheduler.** Your harness's own where it has one: the Claude Desktop app's local scheduled tasks, the built in cron in OpenClaw, Hermes, Cline and Qwen Code, Codex scheduled runs, the Antigravity job runner, the DeepSeek plugin. Otherwise Windows Task Scheduler with the launchers in `run/`, launchd on macOS, or cron on Linux. `CAPABILITIES.md` section 9 has the commands, and the repo's `docs/INSTALL.md` walks each one.
8. **A machine that is awake at the fire times in `SCHEDULE.md`**, or fire times moved to after it normally wakes. A closed lid sleeps.
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«WEB_ROOT»` everywhere in this kit.
10. **A usage budget.** On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, and an API key loses the browser lane. The repo's `docs/COST.md` has the table and the dates.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

Two steps. Your agent does the rest.

**1. Extract the kit to a local folder.** Files sit at the root of the archive. Anywhere on your PC works, as long as it is not inside OneDrive, Dropbox, Google Drive or iCloud.

**2. Open your agent in that folder and say "install the Web Dev Employee from this folder".** That is the whole instruction. It reads `INSTALL-PROMPT.md` itself and follows it, checks your machine, points its scheduler at `«WEB_ROOT»/routines`, and registers the schedule. If you would rather paste, open `INSTALL-PROMPT.md` and copy everything between the two markers into your agent. It walks your code roots, reads your three provider surfaces, writes the inventory, sets the opening safe fix rules deliberately narrow, seeds the board, builds a dashboard, registers eight scheduled jobs, and shows you what it found.

That is the install. A few things are worth knowing once it is running:

- **Keep one copy of the kit.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run. With two copies you write into one and it reads from the other. Your agent points its scheduler at this folder and never copies the routines into a global skills directory. `CAPABILITIES.md` section 2 says what I was able to confirm about each of eleven agents, and what I could not.
- **Let scheduled runs go without a prompt.** A routine launched in a prompting mode does not fail at 06:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«WEB_ROOT»` plus your code roots if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the browser routines; run them by hand and let the file routines schedule normally. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two guardrails.
- **Let one full week happen before you change anything.** Treat week one the way you would treat a new maintainer's first week. Watch the output, correct it once, write the correction down.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your projects specifically, and it is worth more than any edit you make to a routine body.

---

## Week one, and what to expect

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, asks for one path, and then goes looking. It walks your code roots and finds your repositories. It reads each one's remote, default branch, manifest, lockfile, rule file, and docs folder. It opens your host, your registrar, and your database and reads the project names, the production branches, the hostnames with their certificate dates, the environments, the variable names, the log surfaces, the domains with their expiry dates and auto renew states. Then it binds them together on evidence, and where it cannot, it leaves the binding empty and files a card rather than guessing.

**Set your expectation about the safe fix rules now.** They start deliberately narrow: a content change of a few lines, a null guard, and almost nothing else. Everything else gets written up for you. That is not the kit being timid on day one, it is the kit starting where it can only earn its way outward. **An Employee that starts wide and narrows has already made the mistakes it is narrowing away from.**

You end day one with an inventory of what you actually run, a starting policy, a small opening card set, a dashboard, and a registered schedule.

**The next weekday.** The sweep runs at 06:45. The standup runs at 07:30 and writes `brief-latest.md`: what today is for, what is waiting on you, what is blocked. The fix runner runs at 08:10 and works one card.

You open the brief, read the change brief for anything it pushed, merge what you agree with, and tick anything you did by hand. The next morning's standup reads your commit graph and closes those cards.

**Set your expectation about the first few weeks of numbers too.** Performance budgets read `not yet measured` until there are four weeks of your own samples, because a budget your site has never met is a budget every report fails against for no reason. The week over week column in the Friday report is empty on your first Friday and fills in as you accumulate weeks. Anything it could not measure appears under `Not measured` with the reason, rather than being quietly left out.

**Monday** adds the platform guard. If your three surfaces match your inventory it says nothing at all. Silence there is the good outcome, and it will never pad your brief with a list of things that passed.

**Wednesday** adds the dependency run. Most weeks its main output is a list of held packages with the evidence attached, and that is the deliverable rather than a thin result: you are being handed a decision with the changelog and the affected files in front of you instead of a red build.

**Friday afternoon** is the report.

**The thing that will annoy you in week one**, and you should hear it now rather than discover it: branches you have to merge yourself, and cards that stay open until you do. Both are on purpose. A routine that can merge can merge the wrong thing, at 08:10, into a branch your host deploys automatically, with nobody watching. Reviewing a branch costs you two minutes.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the fix runner, the guardrail review, or most of the Friday report. And the sweep still tells you whether your sites are up.**

What you lose is everything behind your own login: your production logs, your registrar, your host, and your database. So the sweep sees that a page returned 502 and cannot see the error that caused it, and the platform guard cannot read a single provider screen.

**One thing survives that, and it is the one with a deadline.** The expiry ladder is computed entirely from the dates already in your inventory, so a browserless week still warns you that a domain lapses on a stated date.

| Routine | With browser control | With none |
|---|---|---|
| `web-site-sweep` | Checks every path, renders the tracked one, reads the console, reads your logs, fingerprints every error | Checks every path. No render, no console, and **no log read at all** |
| `web-standup` | Never uses one | Identical. Full function |
| `web-fix-runner` | Works every card type including one that fills a console form | Works nearly every card. Leaves a console form card blocked and named |
| `web-platform-guard` | Reads all three surfaces and names every drift | The expiry warning off your inventory dates. Every other finding carried forward untouched |
| `web-inventory-refresh` | Walks your code roots and binds every project to its host, database, and domains | Walks your code roots and writes the whole local side. Provider fields fill in next month |
| `web-dependency-run` | Classifies, bumps the patch class, reads a changelog the package manager could not give it | The same, minus the changelog reads. **An unread changelog is treated as the most disruptive change it could be**, so those are held rather than bumped |
| `web-weekly-report` | Full report plus the Friday flow replay | Full report. No replay, so a drifted flow goes unnoticed until something needs it |
| `web-guardrail-review` | Never uses one | Identical. Full function |

Two of the eight need no browser at all and four more produce their main deliverable without one. But do not buy this expecting error triage to work without one, because your logs are behind your login and it will not.

A missing browser does not get its own status. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«WEB_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/web-<id>/SKILL.md the eight routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge, and the credential scanner
  inventory/                 projects.json, PROJECTS.md, domains.md, CHANGELOG.md
  policy/                    budgets.md and safe-fix-rules.md
  health/                    checks.jsonl, incidents.jsonl, health-latest.md
  changes/                   changes.jsonl, and one brief per change
  deps/                      dependency-ledger.jsonl
  board/                     board.json, REVIEW-BOARD.md (you tick it), inbox.jsonl
  platform/                  one guard report per week
  reports/                   one change report per week
  dashboard/                 src/, build.mjs, and the built index.html
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per provider flow,
                             each written by the routine that uses it on the first
                             run that needs it
  improvements/CHANGELOG.md  every amendment a routine made to itself, with the
                             full text it replaced. This is the undo
  state/                     one small JSON per routine, plus browser-lock.json
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning plan, overwritten daily, capped at thirty lines
  web-latest.md              the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything older than thirty days
```

Nothing is ever deleted. Anything older than thirty days moves into `archive/` with its path preserved.

Three things are yours and no routine overwrites them: your free text under a card in `board/REVIEW-BOARD.md`, everything you write under `## Member set` in `policy/budgets.md`, and the `## Corrections` section at the bottom of every routine and every root document. Tick a card in the board and the standup picks it up tomorrow. Unticking reopens it: your mark wins in both directions, including over a merge the standup already resolved, so a card you tick by mistake goes back on the board at the next standup.

---

## Stopping it, and the way it changes

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file. To stop just one routine, put its id on a line inside that file and leave the rest running.

**No routine ever creates, writes, or deletes that file**, because a routine that could clear its own pause could not be stopped. When you delete it, the first brief afterwards names the dates it covered, so you read an explained gap rather than a hole in your ledgers.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, that a log surface moved for good, or that a grouping rule was splitting one incident into three, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**One thing it can never teach itself is a wider boundary.** A self edit can make allowed work better and it can never widen what is allowed. Nothing that relaxes the two guardrails, the rule that every change stops at a branch, the rule that no key is ever rotated, or the rule that every number carries its source is ever written, whatever authorised the write.

**It notifies you only when you are the thing blocking it.** A production path that has failed twice in a row. A domain or certificate inside its warning window. An expired login it needs. A stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours. Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-out-of-window` `skipped-already-ran` `skipped-paused` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. `skipped-out-of-window`, `skipped-already-ran`, and `skipped-paused` are all correct behaviour, not faults.

**A gate that failed is not a failed run.** The run says `ok` and the change says `gate-failed`. Finding out that a change does not work before you spend a review on it is the routine doing exactly its job.

Blockers appear in your morning brief word for word. A blocker open for more than a week gets a full line naming the date it was first seen. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan.

No routine ever writes a secret, a credential, a raw log line, a stack trace, a diff, or a person's name into a run record. Run records carry counts, ids, paths, branch names, fingerprints, cursors, and blockers. The detail stays in the digests and the change briefs, inside your working folder.

---

## Working alongside the other AI Employees

This Employee reads production and writes branches. It has no opinion about your market, your pipeline, or your content, and it never touches an advertising account, a blog repository, or a mailbox.

| Employee | They own | Web Dev hands over | Web Dev never |
|---|---|---|---|
| **GTM Engineer** | Positioning, outbound, the launch board, paid setup | Whether the pages their links point at are up | Writes copy, drafts outreach, or has a view on a landing page's message |
| **SEO Employee** | Keyword research, the editorial calendar, writing, publishing, internal linking, search console | Page performance samples and the incident list for the pages they publish to | Publishes an article, touches a blog repo, or requests indexing |
| **Ad Manager Employee** | Live account operations, spend pacing, bids, creative rotation | Whether the pages the ads point at are up, and whether the conversion path errored | Touches an advertising account in any way at all |

One file crosses the boundary: `web-latest.md`, and specifically its `For other employees` block. It carries project ids, live hostnames, the count of open incidents per project, the paths of the most recent reports, and the date of the last successful sweep. Paths, ids, counts, and dates only. No log line, no stack, and no personal data.

No routine in this kit ever writes into another Employee's folder and none ever reads one.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
