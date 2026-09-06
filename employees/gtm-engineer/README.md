# GTM Engineer

<img src="https://club.reinventing.ai/img/employees/gtm-engineer.webp" alt="GTM Engineer" width="100%">


**Role:** launch and demand.
**What it replaces:** the fractional CMO retainer, for the parts that repeat.
**What it is:** eight scheduled routines that run on your own machine, on your own schedule, against one offer.

This is not a chat window and not a service running somewhere else. It is eight jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

It takes one offer and builds the go to market around it: who it is for, what it says, which channels get worked in what order, and a board you can run on a Tuesday morning. On the first run it researches your business from your own public presence, writes your strategy folder, seeds the board, builds a single page command center with your copy already in it, and registers its own schedule.

After that it works the board every weekday. It captures buying signals, drafts outreach, fills listing forms, holds your paid setup inside its guardrails, and on Friday it names one thing to kill and one thing to scale.

**It can send and it can spend. Whether it does is a setting you own: every channel ships held, with the draft written and the form filled one click from done, and `RELEASES.md` hands a channel over when its drafts have earned it.** Held is the default because it is what lets you leave this running on day one. Released is where a channel goes once its drafts have earned it.

---

## What it owns

One offer, end to end.

- **ICP.** Up to three segments. Each carries a pain, a trigger event, a place those people gather, a message, and the signal sources it watches.
- **Positioning.** The one liner, the long version, the objection map, and a proof inventory of what you can honestly claim today.
- **Channel selection.** Which channels get worked this quarter, in what order, against the hours you actually have.
- **The launch board.** Cards with dependencies and a definition of done. Every card links to the exact copy that closes it, so a card is not a reminder. You click it and land on the copy, already personalised.
- **Outbound.** Signal capture, contact capture, dedupe, first touch, follow up cadence, and the tracking behind all of it. Drafts only.
- **Directories and press.** Listing forms filled and left open in their tabs. Pitches drafted into a queue.
- **Paid setup.** Campaign structure, ad copy, negative keyword seed, budget guardrails, landing page match, conversion definition. Configuration only, assembled and left unpublished.
- **Measurement.** A link taxonomy set before the first touch goes out, then a weekly scoreboard with a source beside every number.
- **Your dashboard.** It builds the command center from scratch, chooses the tabs from the channels that survived selection, and rebuilds it when your positioning changes.

---

## The eight routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `gtm-signal-sweep` | Weekdays | 06:45 | Reads your own signal sources and saved searches, captures dated buying signals and contactable people, and appends both to the ledgers the queue reads. |
| `gtm-board-standup` | Weekdays | 07:30 | Reconciles yesterday's ticks into the board and the contact ledger, folds new cards in, re-renders the board, and writes your morning brief. |
| `gtm-outreach-queue` | Weekdays | 08:15 | Drafts today's due first touches and follow ups into dated queue files. Held unless you release it. |
| `gtm-launch-step-runner` | Weekdays | 09:15 | Works the next ready board card: stages copy, fills a directory or press form and leaves it open, queues a batch, or verifies a setup. |
| `gtm-paid-and-tracking-guard` | Mondays | 11:00 | Confirms your primary conversion event still fires and your paid setup still sits inside its guardrails, and names every drift. |
| `gtm-scoreboard` | Fridays | 16:00 | Scores the week from the ledgers with a source beside every number, replays the browser flows, and files the kill and the scale as cards. |
| `gtm-intake-and-dashboard` | First weekday of the month | 13:00 | First run: researches the business, writes the strategy folder, seeds the board, builds the dashboard, registers the schedule. Monthly: re-reads the evidence, applies what changed, rebuilds. |
| `gtm-icp-refresh` | Last weekday of the month | 14:00 | Re-tests every segment against the real ledger evidence and rewrites your ICP where the evidence disagrees with the assumption. |

Three things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**No routine sits on a Sunday.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error.

---

## The loop that makes it a system

Each of the eight exists because it is a link in one chain.

The sweep captures contactable people with a dated reason to write. The queue turns those into drafts and records that they are queued. You send and tick the box. The standup turns your tick into a send date, which is the only thing that makes a reply rate computable at all. The scoreboard reads those rates on Friday and files a kill and a scale as new cards. The standup folds them into the board on Monday. The step runner works the cards and marks its own finished files done, which clears the dependencies for the cards behind them. The ICP refresh reads a month of that evidence and rewrites the targeting the sweep is aiming at.

Break one link and the chain stops producing numbers. That is why there are eight and not four.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- No email, DM, post, comment, reply, connection request, like, follow, forum post, calendar invite, or published page. The draft is written. The queue entry is complete. You press the button.
- No budget change, no bid change, no campaign status change in either direction, nothing enabled, nothing purchased, nothing upgraded. A campaign skeleton is assembled and left unpublished. You spend the money.
- **On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them. It will never click Message, Connect, Follow, or Like, never open a composer, never type into LinkedIn, and never take any action there. LinkedIn flags automated activity and your account is the asset, so the kit automates the reading, the templating, the dedupe, and the tracking, and keeps you as the human for every message that leaves.
- **It fills forms and stops.** Listings get filled and left open in their tabs. It never clicks the final Submit or Publish. On a multi step wizard it advances freely and stops before the terminal step.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms.
- It never writes a key, a token, a password, or a URL with an embedded credential into any file, template, queue entry, report, log line, or command. Where a credential is needed it names the account in plain words and leaves a `«paste at send time»` marker for you.
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

**Nothing in the kit can publish.** There is no switch, no exception, and no routine with the capability buried inside it.

There is one option that touches a live surface and it ships off. If you set `mailbox_draft_mode` to true by hand in `state/gtm-outreach-queue.json`, the queue may also create new drafts in your own mailbox instead of only writing a queue file. Even then it only creates drafts it wrote in that run. It never opens an existing thread, never edits a draft it did not create, never touches recipients, and never clicks Send, Schedule send, or Send test. Leave it off for week one. Turn it on when you have read a week of queue files and you trust the drafts.

---

## What it does without asking

The two guardrails above are the whole list. Everything else the Employee owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It rewrites your ICP when the ledger evidence disagrees with the assumption. It researches and fills in a segment's signal sources when they are empty rather than waiting for you to paste them. It registers its own scheduled jobs, and moves a fire time to clear a collision it detected. It creates its own board cards, advances them, and ticks the ones whose definition of done is a file it can verify. It builds and rebuilds the dashboard, and adds a tab when a channel gains a card. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it quarantines that one line and rebuilds the index from the rest.

Every one of those changes lands as one line in `strategy/CHANGELOG.md`: the date, the routine, the file, what changed, and the evidence path. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own.

Two things stay outside all of that, because they are the first guardrail wearing different clothes: a campaign or an account setting it did not create, and anything on the far side of a send or a spend control. Those get named, never touched.

**Every card carries a `done_kind`.** A card whose definition of done is a file on your machine is `local-artifact`, and the routine ticks it itself the moment it has verified that file. A card whose definition of done is a send, a submit, a publish, or a spend is `member-action`, and only your tick closes it. That single field is what lets the Employee run at full speed on its own work without ever quietly claiming credit for something you have to do.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## It installs nothing into your global skills directory

This is a kit of scheduled routines. It is not a set of global skills, and it never becomes one.

No routine here creates, authors, or installs anything in your harness's global skills or plugins directory. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took. You add helpers from the library when you decide to, and nothing here reaches into that decision.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither one is a new helper installed somewhere global, and neither is silent: both go in the run record as one line naming the flow or the step.

**Nothing has to be set up for that to work.** No flow file ships with the Employee and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Something like `D:\AgentOps\gtm-engineer` or `~/agent-ops/gtm-engineer` is right. That folder is `«GTM_ROOT»` everywhere in this kit. If you point the install at a synced path it moves the kit to a local one, tells you where it went, and carries on.

**A harness that can do four things.** Read and write files in that folder, read the machine clock and timezone, run a local command, and ideally drive a browser that carries your own signed in sessions. The first three are not optional. The fourth decides how much of the kit runs, and [What you lose with no browser control](#what-you-lose-with-no-browser-control) below is the honest accounting. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all four in one pass.

**Your own public presence.** The install investigates before it asks anything: your site, your pricing or checkout page, your docs, your blog, your public profiles and listings. The more of your positioning is public, the less there is to ask you about. In practice one URL is the whole input.

**Things that are true but not on the internet.** Customer quotes you never published, what must never be claimed about your product, your paid ceiling, which channels are off limits and why. It asks about these in one short block at the end of the investigation, and it does not wait for the answer. It adopts a defensible default for each, records the assumption, and keeps going. Correcting a default costs you one line.

**A few minutes on a weekday.** Read the brief, send the drafts you approve, tick what you sent. The brief is capped at thirty lines on purpose and it never lists what passed.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«GTM_ROOT»` everywhere in this kit.
10. **A usage budget.** On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, and an API key loses the browser lane. The repo's `docs/COST.md` has the table and the dates.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

Two steps. Your agent does the rest.

**1. Extract the kit to a local folder.** Files sit at the root of the archive. Anywhere on your PC works, as long as it is not inside OneDrive, Dropbox, Google Drive or iCloud.

**2. Open your agent in that folder and say "install the GTM Engineer from this folder".** That is the whole instruction. It reads `INSTALL-PROMPT.md` itself and follows it, checks your machine, points its scheduler at `«GTM_ROOT»/routines`, and registers the schedule. If you would rather paste, open `INSTALL-PROMPT.md` and copy everything between the two markers into your agent. It investigates your business from your own public presence, writes the strategy folder, seeds the board, builds the dashboard and opens it, registers the eight scheduled jobs, and drafts a first small batch of outreach. It stops for you once, on those drafts.

That is the install. A few things are worth knowing once it is running:

- **Keep one copy of the kit.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run. With two copies you write into one and it reads from the other. Your agent points its scheduler at this folder and never copies the routines into a global skills directory. `CAPABILITIES.md` section 2 says what I was able to confirm about each of eleven agents, and what I could not.
- **Let scheduled runs go without a prompt.** A routine launched in a prompting mode does not fail at 06:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«GTM_ROOT»` if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the browser routines; run them by hand and let the file routines schedule normally. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two guardrails.
- **Let one full day happen before you change anything.** Treat week one the way you would treat a new hire's first week. Watch the output, correct it once, write the correction down.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your business specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, and local command execution. The kit does not run without those four.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 08:15 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to**, for the routines that read your own accounts. This is the one people get wrong. The kit never signs in to anything, so a harness that launches a clean automated browser has handed it a browser with no session, and every read of your own accounts lands on a sign in wall. Ask your harness directly: does your browser control attach to the profile I am signed in to, or start a fresh one. `CAPABILITIES.md` section 1.1 is the check.

**Optional, if you already have it.** The kit does not ship these and does not need them. Every row has a fallback the routine takes on its own, without stopping and without asking.

| Helper | If you have it, used for | Fallback when you do not |
|---|---|---|
| An image generation helper | Lead magnet, landing, and ad creative artwork | Queues the asset text with no artwork and notes which route it took. You get the copy on time with a note. Nothing waits on artwork |
| A carousel or slide helper | Launch week visual assets | Text only |
| A directory submission helper | Directory form filling | `gtm-launch-step-runner` does its own form fill and does not depend on one |
| A copy review helper | A final sweep before you send | `scripts/copy-check.mjs`, which ships inside this kit and is the judge either way |

Helpers are detected by name and used when present. If you run a harness where they do not exist, nothing breaks and nothing is installed for you.

**Forbidden, deliberately.** No routine may call anything that publishes, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend. That includes publishing helpers, search console and indexing helpers, and paid data or media endpoints. Research uses whatever web search your harness has. If you have your own search endpoint, name it in `strategy/utm-taxonomy.md` under `## SERP source`, by its human readable name only, and the routines will use it. Where they cannot, they write the exact queries they would have run into the run record so you can point your own tool at them.

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your pricing page, your docs, your blog, your public listings and profiles, and whatever public collateral it can reach. It forms working answers about your offer, your buyer, your positioning, and what you can honestly claim, with a source URL and a date beside each one. Then it tells you in a short list what it concluded, and asks only about the handful of things a crawl genuinely could not settle. It does not wait for those answers. It adopts a defensible default for each, records the assumption, and keeps going.

It writes the strategy folder, seeds the board, builds `dashboard/index.html` and opens it, registers eight scheduled jobs, and drafts a first small batch of outreach.

**Then it stops once, and only once.** It shows you those drafts and the proof lines they were built from, each proof line carrying the page it came from. Two questions: would you send these as written, and is every proof line something you can defend in public. **If a claim is wrong, the fix belongs in `strategy/proof-inventory.md` or `strategy/voice.md`, not in the draft.** Patch a draft by hand and the same wording comes back tomorrow. Fix the source and it never comes back.

Set your expectation about that first batch now: it will carry no numbers at all, because nothing is in your proof inventory until you confirm the first lines at that stop. Copy with no numbers is the correct output on day one, not a thin one.

You end day one with a strategy folder in your own language, a command center you can click through, a schedule that is registered and running, a first queue you have corrected, and a list of every assumption it made.

**The next weekday.** The sweep runs at 06:45 and appends what it captured. The standup runs at 07:30 and writes `brief-latest.md`: what to do today, what is waiting on you, what is blocked. The queue runs at 08:15 and writes `queue/<date>-email.md` and `queue/<date>-dm.md`. The step runner runs at 09:15 and works the next ready card.

You open the brief, open the queue, edit anything you want, send by hand, and tick what you sent. Tomorrow's standup reads those ticks and turns them into send dates.

**Monday** adds the paid and tracking guard. If everything sits inside its guardrails it says nothing at all. Silence there is the good outcome, and it will never pad your brief with a list of things that passed.

**Friday afternoon** is the scoreboard.

**Set your expectation about that first scoreboard too.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of your own data and it will not estimate the rest. The numbers that are there carry their source in brackets. The week over week column is empty on your first Friday and fills in as you accumulate weeks.

**First weekday of next month**, the intake routine re-reads the evidence, applies what changed, and rebuilds. **Last weekday of the month**, the ICP refresh re-tests every segment against what actually happened and rewrites the targeting where the evidence disagrees.

**The thing that will annoy you in week one**, and I would rather you hear it from me than discover it: forms left filled but unsubmitted in open tabs, and drafts you have to send yourself. Both are on purpose. A routine that can submit a form can submit the wrong form, and a routine that can send can send to the wrong list. Neither mistake is recoverable by editing afterwards, and neither is a false claim made in public. A queue costs you thirty seconds of your morning.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the outreach queue, and neither does the arithmetic behind the Friday scoreboard.** On a machine with no browser control at all you still get a plan every morning, drafts to send, and a verdict every Friday.

What you lose is the signal capture that feeds the queue. The sweep reads your own saved searches and your own sources, and most of those sit behind your login. Without a browser it falls back to fetching public pages, which is real but narrower. Left alone long enough the queue runs dry, because there is nobody new in it.

There is a straightforward answer if that is your situation. Paste your own leads into `crm/contacts.csv`, above the marker line. Rows above that marker are yours: the kit reads them and never writes them, and the rest of the loop works exactly as designed. You do the finding, it does the drafting, the deduping, the cadence, and the tracking.

| Routine | With browser control | With none |
|---|---|---|
| `gtm-signal-sweep` | Reads your saved searches and sources, captures contactable people | Public pages only. Nothing behind your login |
| `gtm-board-standup` | Never uses one | Identical. Full function |
| `gtm-outreach-queue` | May also put drafts in your own mailbox, if you turned that on | Queue files, which is the default mode anyway |
| `gtm-launch-step-runner` | Works every card type including form cards | Works copy, queue, and research cards. Leaves form cards blocked and named |
| `gtm-paid-and-tracking-guard` | Confirms the conversion event fires and reads the account screens | Checks the file side guardrails and names everything it could not verify |
| `gtm-scoreboard` | Full scoreboard plus the Friday flow replay | Full scoreboard. No replay, so a drifted flow goes unnoticed until a routine hits it |
| `gtm-intake-and-dashboard` | Researches your business, builds and opens the dashboard | Research narrows to what it can fetch. The dashboard still gets built |
| `gtm-icp-refresh` | May re check where a segment gathers | Runs on ledger evidence, which is files |

Five of the eight produce their main deliverable with no browser at all. That is most of the product, not a consolation prize. But do not buy this expecting the sweep to work without one, because it will not, and I would rather you know that now than on your second Tuesday.

A missing browser does not get its own status, and no routine invents one. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«GTM_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/gtm-<id>/SKILL.md the eight routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  strategy/                  offer, icp, positioning, voice, utm-taxonomy,
                             proof-inventory, CHANGELOG
  board/                     board.json, LAUNCH-BOARD.md (you tick it), inbox.jsonl
  crm/                       contacts.csv, signals.jsonl, contacted.jsonl,
                             signals-latest.md, and any dated fallback file
  queue/                     YYYY-MM-DD-email.md, -dm.md, -form.md
  dashboard/                 src/, build.mjs, and the built index.html
  scoreboard/                manual.md (yours, never overwritten) and the weekly files
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per site flow, each written by the routine that uses it on the first run that needs it
  state/                     one small JSON per routine, plus browser-lock.json
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning plan, overwritten daily, capped at thirty lines
  gtm-latest.md              the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything older than thirty days
```

Nothing is ever deleted. Anything older than thirty days moves into `archive/` with its path preserved.

Three things are yours and no routine overwrites them: `board/LAUNCH-BOARD.md` free text, `scoreboard/manual.md`, and the `## Corrections` section at the bottom of every routine and every root document. Tick a card in the board and the standup picks it up tomorrow. Unticking reopens the card: your mark wins in both directions, so a card you tick by mistake goes back on the board at the next standup.

The proof inventory is split for the same reason. `## Member claims` holds only lines you confirmed. `## Agent sourced` is append only, and every line in it carries the ledger path and the date it was read from your own files. A routine may add a number it read out of your ledgers. It may never add one it read on somebody else's page, remembered, or worked out from a number that was not itself sourced.

---

## Stopping it, and approving the way it changes

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file. To stop just one routine, put its id on a line inside that file and leave the rest running.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**It notifies you only when you are the thing blocking it.** An expired login, a credential it needs, conversion tracking that has died while ads are running, or a stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours. Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are seven and only seven.

`ok` `partial` `failed` `skipped-out-of-window` `skipped-already-ran` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. `skipped-out-of-window` and `skipped-already-ran` are both correct behaviour, not faults.

Blockers appear in your morning brief word for word. A blocker that has been open for more than a week gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan.

No routine ever writes a secret, a credential, a draft, or a person's name into a run record. Run records carry counts, ids, paths, cursors, and blockers. The detail stays in the queue files and the digests, inside your working folder.

---

## Working alongside the other AI Employees

`strategy/` is the shared folder and **the GTM Engineer is the only writer in it.** The SEO, Ad Manager, and Social Media Employees are readers. That is what stops four roles from each keeping their own quietly different idea of who your customer is. If the GTM Engineer is the only one you have installed, the folder works exactly the same way.

| Employee | They own | GTM hands over | GTM never |
|---|---|---|---|
| **SEO Employee** | Keyword research, editorial calendar, writing, publishing, internal linking, search console | A keyword shortlist and the ICP language, in `strategy/icp.md` and `strategy/positioning.md` | Writes or publishes an article, touches a blog repo, requests indexing, or edits a content calendar |
| **Ad Manager Employee** | Live account operations: spend pacing, bid adjustments, search term mining, budget reallocation, creative rotation | The campaign skeleton, launch copy, negative keyword seed, tracking template, conversion definition, and the guardrail list | Changes a budget, a bid, or a campaign status, enables anything, or keeps touching an account after the handoff |
| **Social Media Employee** | The always on organic calendar, community engagement, replies | Launch week posts and positioning language | Runs the daily calendar, replies to anyone, or posts |

**The handoff to the Ad Manager is a dated card on your board**, not a vague intention. Once that card is closed, `gtm-paid-and-tracking-guard` switches to read only observation and stops proposing campaign changes. If you never install the Ad Manager Employee, it keeps running the weekly guardrail check and you own the account.

If you also run the Sales Employee, decide once whether outbound drafting sits with GTM or with Sales and write the answer into `strategy/`. Two roles drafting into the same inbox is the one overlap worth settling before day two. The install detects which sibling Employees you have and asks about that one specifically if it finds Sales.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
