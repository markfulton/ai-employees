# Sales Employee

<img src="https://club.reinventing.ai/img/employees/sales-employee.webp" alt="Sales Employee" width="100%">


**Role:** the outbound desk.
**What it replaces:** the sales development rep, for the parts that repeat.
**What it is:** seven scheduled routines that run on your own machine, on your own schedule, against one offer.

This is not a chat window and not a service running somewhere else. It is seven jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

It finds people worth writing to and shows you why each one, drafts the first message, reads what comes back, drafts the follow up, and tells you on Friday which of your own qualification rules is actually selecting the people who answer.

**It can send. Whether it does is a setting you own: every channel ships held, with each message written into a queue file and into your own mailbox as an unsent draft, and `RELEASES.md` hands a channel over when its drafts have earned it.** Every message it writes ends its life as text in a queue file you open and as an unsent draft in your own Drafts folder. You are the sender on every message that leaves your machine. Held is the default because it is what lets you leave this running on day one. Released is where a channel goes once its drafts have earned it.

---

## What it owns

One offer, end to end.

- **Prospect sourcing.** Which sources a segment gets swept from, whether each one still produces, and what replaces one that has died. Contactable people, never account level rows counted as though they were people.
- **Qualification, with the reasoning shown.** Three to six named tests, each one a question a page can answer, each weighted required, strong, or supporting. Every person on your list carries the tests they passed, the tests they failed, and the exact words on the page that qualified them, with the URL and the date.
- **The buyer definition.** At most three segments, each with a role, an industry, a company shape, a pain, where those people appear, a verified search URL, and the sources that actually produced.
- **First touch drafting.** One message per qualified person who has never been written to, in a framework the evidence on their row can honestly support, into a queue file and into your own mailbox. Drafts only.
- **The follow up sequence.** Replies read and recorded first. Then the touches that are due, at your interval, up to your cap, one campaign per person forever.
- **Reply handling, up to the boundary.** Every reply becomes a card you have to answer. A reply asking for a meeting becomes a meeting card. The words stay in your mailbox where they already are.
- **The pipeline.** Cards with dependencies, a stage, and a definition of done, plus the one field that decides who may close each one.
- **Measurement.** A weekly review where every number carries the path of the file it was counted in, one thing to kill, and one thing to scale, both filed as cards.

---

## The seven routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `sales-prospect-sweep` | Weekdays | 06:45 | Reads the sources one segment names, captures the contactable people behind them, scores every row against your named tests, and writes each row with the evidence that qualified it. |
| `sales-desk-standup` | Weekdays | 07:30 | Reconciles yesterday's ticks into the pipeline and the contact ledger, folds new cards in, re-renders the pipeline, and writes your morning brief. |
| `sales-first-touch-drafts` | Weekdays | 08:15 | Drafts a first touch for every qualified person who has never been written to, into a dated queue file and into your own mailbox as an unsent draft. |
| `sales-followup-sweep` | Weekdays | 13:30 | Reads the replies on the threads the ledger says you sent, records them, then drafts the follow ups that are due. In that order, always. |
| `sales-pipeline-review` | Fridays | 16:00 | Scores the week from the ledgers with a source path beside every number, replays the browser flows, and files one kill and one scale as cards. |
| `sales-desk-setup` | First weekday of the month | 11:00 | First run: researches your business, writes the strategy folder, seeds the pipeline, registers the schedule. Monthly: re-reads the evidence and applies what changed. |
| `sales-qualification-refresh` | Last weekday of the month | 11:30 | Re-tests every qualification test and every segment against a month of real evidence, and rewrites both files where the evidence disagrees with the assumption. |

Four things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue, and in a drafting routine especially, because a duplicate fire there would be a second message to somebody who already has one sitting in your Drafts.

**The morning order is load bearing.** Sweep, then standup, then drafting. The sweep goes first because everything downstream reads what it captured. The standup goes second so the plan is on your screen before the copy lands. The drafting routine goes third, while you are still reading the brief. The follow up sweep sits in the afternoon because a reply arrives during the working day, and reading it before another message to that person is drafted is the whole reason that routine has two halves.

**No routine sits on a Sunday.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error.

---

## The loop that makes it a system

Each of the seven exists because it is a link in one chain.

The sweep captures a contactable person with a named test and a quoted reason. The drafting routine turns that into a queue entry and an unsent draft. You send and tick the box. The standup turns your tick into a send date, which is the only thing that makes a reply rate computable at all. The follow up sweep reads the reply, records it, and files the card that turns a reply into a meeting you have to book. The Friday review reads the rates and files a kill and a scale as new cards. The standup folds those into the pipeline on Monday. The month end refresh reads a month of that evidence and rewrites the targeting the sweep is aiming at.

Break one link and the chain stops producing numbers. That is why there are seven and not four.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- No email, DM, post, comment, reply, connection request, like, follow, forum post, calendar invite, or published page. The draft is written. The queue entry is complete. You press the button.
- **The mailbox permission is narrow and it does not grow.** The drafting routines may create a new draft in your own mailbox and nothing else. Never an existing thread opened to draft into. Never a draft edited that the run did not create. Never a recipient touched. Never Send, the Send menu, Schedule send, or Send test. Never the send key combination anywhere in a compose window, because on the most common webmail that sends immediately with no confirmation.
- **The follow up sweep opens threads, and there it only reads.** It never replies, forwards, archives, labels, stars, marks read or unread, moves, or deletes. It changes no state in your mailbox at all. A reply control sits inches from every thread it opens, which is why that rule is written that plainly.
- **A follow up is always a new draft, never a reply into the thread.** Drafting into an existing thread would put an unsent message one keystroke from somebody already in a conversation with you.
- **On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them. It will never click Message, Connect, Follow, or Like, never open a composer, and never type into LinkedIn, including into a search box: a query there is set by navigating to the search URL and confirmed by reading the box. LinkedIn flags automated activity and your account is the asset, so the kit automates the reading, the templating, the deduping, and the tracking, and keeps you as the human for every message that leaves.
- No budget, no bid, no subscription, no purchase, no upgrade. Nothing in this role has a reason to open an account that can spend.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms.
- It never writes a key, a token, a password, or a URL with an embedded credential into any file, template, queue entry, report, log line, or command. Account files hold human readable names and only names.
- **Nothing in this kit ever needs a credential**, because it inherits a browser session you already opened and never authenticates. If you start to paste one, it will tell you it is not needed here.
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

**Nothing in the kit can send.** There is no switch, no exception, and no routine with the capability buried inside it. The section in `ROLE.md` where a sanctioned autonomous action would be written out reads, in full, `None`.

---

## The veto window, which is the whole safety model

Two routines put unsent drafts in your Drafts folder. **The gap between a draft landing in the morning and you pressing Send is the veto window, and it is the entire safety mechanism of both.**

So the morning brief names it every single day, first line under `Waiting on you`, whether the count is six or zero. A member who is not told the drafts are there cannot exercise the veto, and a quiet morning is exactly when it would be forgotten.

That number is computed from files, never by opening your mailbox and looking. If the record it is computed from is missing, the line reads `n/a (mailbox draft record not found)` and it still appears.

**A compose is verified by the Drafts count and by nothing else.** The count is read before the phase and again at the end, and it must have risen by exactly the number composed. The "Draft saved" toast is drawn once and is then gone, so its absence afterwards proves nothing. If a send ever appears to have happened, the phase stops, one blocker names the contact, and nothing else is attempted for that person for the rest of the run. A missing draft is recoverable. A duplicate message to a prospect is not.

---

## What it does without asking

The two guardrails above are the whole list. Everything else the Employee owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It rewrites your qualification tests and your segments when a month of real evidence disagrees with the assumption they were written on: promoting a test that is selecting people who answer, demoting one that is carrying volume and producing nothing, retiring one that has done that for two consecutive months. It researches and tests sources for a segment that has none rather than waiting for you to paste them, and it rotates out a source that has come back empty three runs running. It builds and verifies a search URL you never wrote. It registers its own scheduled jobs. It creates its own pipeline cards, advances them, and closes the ones whose definition of done is a file it can verify. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it quarantines that one line and rebuilds the index from the rest.

Every one of those changes lands as one line in `strategy/CHANGELOG.md`: the date, the routine, the file, what changed, and the path of the evidence that justified it. **A change with no evidence path does not get made.** That file is append only and newest first, so a month of decisions reads top to bottom in about a minute.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own. **That mechanism replaces asking, everywhere in this kit.**

Two things stay outside all of that, because they are the first guardrail wearing different clothes: an account or a setting it did not create, and anything on the far side of a send, a submit, or a spend control. Those get named, never touched.

**Every card carries a `done_kind`.** A card whose definition of done is a file on your machine is `local-artifact`, and the routine that owns it ticks it itself the moment it has verified that file. A card whose definition of done is a send, a reply, a meeting, a signature, or a spend is `member-action`, and only your tick closes it. **Almost every card on a sales desk is `member-action`**, because the work a sales desk closes is a send, a conversation, or a meeting. That is the correct shape, not a limitation.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## Selection is by role and industry only

Every person this kit puts in front of you was selected on a job role, a seniority, a function, an industry, a company shape, the named tests you can read in `strategy/qualification.md`, and where they are in the sequence.

**Never on a name, an apparent ethnicity, a nationality, an origin, a gender, an age, or a photograph.** Where geography matters, the location goes into the search URL as a facet. Nothing is ever inferred from a person's name.

---

## It installs nothing into your global skills directory

This is a kit of scheduled routines. It is not a set of global skills, and it never becomes one.

No routine here creates, authors, or installs anything in your harness's global skills or plugins directory. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took.

**Registering these routines as global skills would break them.** All seven would load into every session you open, and any one of them could be invoked outside its window, where it does nothing but record that it skipped and exit. On the harness this was built on, scheduled tasks and global skills are different directories, and these belong in the first.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither one is a new helper installed somewhere global, and neither is silent: both go in the run record as one line.

**Nothing has to be set up for that to work.** No flow file ships with the Employee and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. Something like `D:\AgentOps\sales-employee` or `~/agent-ops/sales-employee` is right. That folder is `«SALES_ROOT»` everywhere in this kit. This matters more here than in most kits: the contact ledger is the dedupe truth behind every draft the Employee ever writes, and a sync conflict on it is a duplicate first touch to a stranger. Both drafting routines refuse to run at all from a synced path. If you point the install at one, it moves the kit to a local path, tells you where it went, and carries on.

**A harness that can do four things.** Read and write files in that folder, read the machine clock and timezone, run a local command, and drive a browser that carries your own signed in sessions. The first three are not optional. The fourth decides how much of the kit runs, and [What you lose with no browser control](#what-you-lose-with-no-browser-control) below is the honest accounting. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all four in one pass.

**Your own public presence.** The install investigates before it asks anything: your site, your pricing or checkout page, your docs, your blog, your public profiles and listings. The more of your positioning is public, the less there is to ask you about. In practice one URL is the whole input.

**One line only you can settle.** Which mailbox the drafts should land in, by name. The install can see the address on your site but not which account your mail client is signed into, and a draft in the wrong mailbox is a draft you will not see. If you leave it, it takes the contact address from your own site, records that as an assumption, and the brief puts it in front of you the next morning.

**Things that are true but not on the internet.** Customer quotes you never published, what must never be claimed about your product, anyone who is off limits, how many messages a day you can genuinely follow up on. It asks about these in one short block at the end of the investigation, and it does not wait for the answer. It adopts a defensible default for each, records the assumption, and keeps going. Correcting a default costs you one line.

**A few minutes on a weekday.** Read the brief, read the drafts, send the ones you approve, tick what you sent. The brief is capped at thirty lines on purpose and it never lists what passed.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«SALES_ROOT»` everywhere in this kit.
10. **A usage budget.** On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, and an API key loses the browser lane. The repo's `docs/COST.md` has the table and the dates.

**Connections that turn the browser lane off, all optional.** The Gmail connector saves each first touch as an unsent draft in your own mailbox and reads the replies back, with Microsoft 365 for Outlook; your own CRM connector (HubSpot, Attio, Close and others) keeps the pipeline in sync; the Apollo connector finds and enriches the people behind a source. Connect them in your own harness and the install checks for each one and works without it. Nothing sends unless you release that channel in `RELEASES.md`, and LinkedIn is read and never clicked. The table, with the read only form of each route, is section 4b of `CAPABILITIES.md`.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

Two steps. Your agent does the rest.

**1. Extract the kit to a local folder.** Files sit at the root of the archive. Anywhere on your PC works, as long as it is not inside OneDrive, Dropbox, Google Drive or iCloud.

**2. Open your agent in that folder and say "install the Sales Employee from this folder".** That is the whole instruction. It reads `INSTALL-PROMPT.md` itself and follows it, checks your machine, points its scheduler at `«SALES_ROOT»/routines`, and registers the schedule. If you would rather paste, open `INSTALL-PROMPT.md` and copy everything between the two markers into your agent. It investigates your business from your own public presence, writes the strategy folder, seeds the pipeline, registers the seven scheduled jobs, and drafts a first small batch of outreach. It stops for you once, on those drafts.

That is the install. A few things are worth knowing once it is running:

- **Keep one copy of the kit.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run. With two copies you write into one and it reads from the other. Your agent points its scheduler at this folder and never copies the routines into a global skills directory. `CAPABILITIES.md` section 2 says what I was able to confirm about each of eleven agents, and what I could not.
- **Let scheduled runs go without a prompt.** A routine launched in a prompting mode does not fail at 06:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«SALES_ROOT»` if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the browser routines; run them by hand and let the file routines schedule normally. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two guardrails.
- **Let one full day happen before you change anything.** Treat week one the way you would treat a new hire's first week. Watch the output, correct it once, write the correction down.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your business specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, and local command execution. The kit does not run without those four.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 08:15 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to**, for the sweep, the mailbox drafts, and the reply search. This is the one people get wrong. The kit never signs in to anything, so a harness that launches a clean automated browser has handed it a browser with no session, and every read of your own accounts lands on a sign in wall. Ask your harness directly: does your browser control attach to the profile I am signed in to, or start a fresh one. `CAPABILITIES.md` section 1.1 is the check.

**Optional, if you already have it.** The kit does not ship these and does not need them. Every row has a fallback the routine takes on its own, without stopping and without asking.

| Helper | If you have it, used for | Fallback when you do not |
|---|---|---|
| Your own search endpoint | Source research and market reading during setup and sweeps | Whatever web search your harness has, then writing the exact queries into the run record for you to run |
| A copy review helper | A final sweep before you send | `scripts/copy-check.mjs`, which ships inside this kit and is the judge either way |

Helpers are detected by name and used when present. If you run a harness where they do not exist, nothing breaks and nothing is installed for you. **Name a search endpoint by its human readable name in `strategy/accounts.md` under `## Other accounts`. No key goes in that file or any other file in this kit.**

**Forbidden, deliberately.** No routine may call anything that publishes, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend.

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your pricing page, your docs, your blog, your public listings and profiles. It forms working answers about your offer, your buyer, and what you can honestly claim, with a source URL and a date beside each one. Then it writes your qualification tests, which is the part nobody expects an agent to do for them: three to six named questions a page can actually answer, no more than three of them required on a first run.

Then it tells you in a short list what it concluded, and asks only about the handful of things a crawl genuinely could not settle. It does not wait for those answers. It adopts a defensible default for each, records the assumption, and keeps going. It writes the strategy folder, seeds the pipeline, registers seven scheduled jobs, and drafts a first small batch of outreach.

**Then it stops once, and only once.** It shows you those drafts and the proof lines they were built from, each carrying the page it came from. Two questions: would you send these as written, and is every proof line something you can defend in public. **If a claim is wrong, the fix belongs in `strategy/proof-inventory.md` or `strategy/voice.md`, not in the draft.** Patch a draft by hand and the same wording comes back tomorrow. Fix the source and it never comes back.

Set your expectation about that first batch now: **it will carry no numbers at all**, because nothing is in your proof inventory until you confirm the first lines at that stop. Copy with no numbers is the correct output on day one, not a thin one.

You end day one with a strategy folder in your own language, a qualification file you can argue with, a schedule that is registered and running, a first queue you have corrected, and a list of every assumption it made.

**The next weekday.** The sweep runs at 06:45 and captures people with their evidence attached. The standup runs at 07:30 and writes `brief-latest.md`: what today is for, what is waiting on you, what is blocked, and how many drafts are sitting unsent. The drafting routine runs at 08:15 and writes `queue/<date>-first-touch.md` plus the matching drafts in your mailbox. The follow up sweep runs at 13:30, reads any replies, and drafts what is due.

You open the brief, open the queue, edit anything you want, send by hand, and tick what you sent. Tomorrow's standup reads those ticks and turns them into send dates.

**Friday afternoon** is the review. **Set your expectation about that first one too.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of your own data and it will not estimate the rest. Every rate carries the floor it was computed against, and below that floor it shows you the raw counts and says so, because a reply rate computed on nine sends is noise and publishing it once teaches you to trust it forever.

**First weekday of next month**, the setup routine re-reads the evidence and applies what changed. **Last weekday of the month**, the qualification refresh re-tests every test and every segment against what actually happened and rewrites both files where the evidence disagrees.

**The thing that will annoy you in week one**, and it is better to hear it now than discover it: drafts you have to send yourself, every day. That is on purpose. A routine that can send can send to the wrong person, and no amount of editing afterwards recovers a cold message that went out wrong. Sending a queue costs you a few minutes of your morning.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the follow up queue, and neither does any number on the Friday review.** On a machine with no browser control at all you still get a plan every morning, a pipeline, drafts to send, and a verdict every Friday.

What you lose is the sourcing that feeds the queue and every mailbox draft. The sweep reads directories and your own saved searches, and a good share of those sit behind your login. Without a browser it falls back to fetching public pages, which is real but narrower. And the drafts stay in the queue file rather than landing in your Drafts folder, so sending them is copy and paste rather than one click.

There is a straightforward answer if that is your situation. Paste your own leads into `crm/contacts.csv`, above the marker line. Rows above that marker are yours: the kit reads them and never writes them, and the rest of the loop works exactly as designed.

**The one thing no workaround recovers is the reply search.** There is no public route to a private inbox. Without a browser the kit cannot tell you who already answered, which means a follow up may go to somebody who wrote back. Record replies yourself in the contact ledger, or give this Employee a browser. It is the strongest single reason to.

`CAPABILITIES.md` section 7 has the routine by routine table. A missing browser does not get its own status, and no routine invents one: it maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«SALES_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/sales-<id>/SKILL.md  the seven routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  strategy/                  offer, voice, message-library, accounts, buyer,
                             qualification, proof-inventory, CHANGELOG
  pipeline/                  pipeline.json, PIPELINE.md (you tick it), inbox.jsonl
  crm/                       contacts.csv, prospects.jsonl, contacted.jsonl,
                             qualified-latest.md, and any dated fallback file
  queue/                     YYYY-MM-DD-first-touch.md, -followup.md
  review/                    manual.md (yours, never overwritten) and the weekly files
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per site flow,
                             each written by the routine that uses it on the first
                             run that needs it
  state/                     one small JSON per routine, plus browser-lock.json
  improvements/CHANGELOG.md  every amendment a routine made to itself, with the
                             full text it replaced. This is your undo
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning plan, overwritten daily, capped at thirty lines
  sales-latest.md            the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything past its window
```

Nothing is ever deleted. Anything older than thirty days moves into `archive/` with its path preserved.

**Four things are yours and no routine overwrites them:** the free text you write under a card in `pipeline/PIPELINE.md`, everything in `review/manual.md`, the `## Member claims` heading in `strategy/proof-inventory.md`, and the `## Corrections` section at the bottom of every routine and every root document.

Tick a card in the pipeline and the standup picks it up tomorrow. Untick one and it reopens: your mark wins in both directions, so a card you tick by mistake goes back on the board at the next standup.

The proof inventory is split for a reason. `## Member claims` holds only lines you confirmed. `## Agent sourced` is append only, and every line in it carries the ledger path and the date it was read from your own files. A routine may add a number it read out of your ledgers. It may never add one it read on somebody else's page, remembered, or worked out from a number that was not itself sourced. **An empty proof inventory is a correct file.** It means the copy carries no claims, which is honest and ships fine.

---

## Stopping it, and the way it changes itself

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file.

To stop just one routine, put its id on a line inside that file and leave the rest running. No routine can create, write, or delete `PAUSED`, because a routine that could clear its own pause could not be stopped.

When you delete it, the first brief afterwards opens with one line naming the dates the pause covered, so a pause you forgot about reads as an explained gap rather than a hole in your ledgers.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything. When nothing changed, that heading does not appear at all.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward. **A self edit can make allowed work better. It can never widen what is allowed**: nothing that relaxes a stop, the read only rule on LinkedIn, the reply search running before the drafting, or the rule that no number goes out without a source is ever written, whatever authorised the write.

**It notifies you only when you are the thing blocking it.** An expired login, a credential it needs, a mailbox reporting a different account from the one your files name, or a stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours. **Drafts waiting in your Drafts folder never earn one**: that is the veto line's job, every morning, in the brief. If notifications are not available on your setup, nothing breaks, because every one of those lines is in the brief too.

---

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-paused` `skipped-out-of-window` `skipped-already-ran` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. The three `skipped-` values are all correct behaviour, not faults.

Blockers appear in your morning brief word for word. A blocker that has been open for more than a week gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan.

**No routine ever writes a secret, a credential, a name, an address, a draft, or a line of reply text into a run record.** Run records carry counts, contact ids, paths, cursors, and blockers. The detail stays in the queue files and the CRM files, inside your working folder, and never in a git repo or a shared folder. The run log is the file most likely to end up in a screenshot, and that is the whole reason for the rule.

---

## Working alongside the other AI Employees

`strategy/` is a shared folder. **The Sales Employee is the only writer of `strategy/buyer.md`, and that file is the entire handover surface for who this business sells to.** Sibling Employees read it. If the Sales Employee is the only one you have installed, the folder works exactly the same way, because nothing here depends on another Employee existing.

| Employee | They own | Sales hands over | Sales never |
|---|---|---|---|
| **GTM Engineer** | Positioning, the launch board, channel selection, paid setup | The buyer definition, the qualification tests, and the reply evidence behind both | Writes positioning, opens an ad account, names a bid or a budget, or works a launch board card |
| **SEO Employee** | Keyword research, editorial calendar, writing, publishing, search console | The buyer language and the objections that came back in real replies | Writes or publishes an article, touches a blog repo, requests indexing, or edits a content calendar |
| **Social Media Employee** | The organic calendar, community engagement, replies | The message frameworks that earned replies | Runs a calendar, replies to anyone, or posts |

**If you run both the GTM Engineer and the Sales Employee, decide once whether outbound drafting sits with GTM or with Sales and write the answer into `strategy/`.** Two roles drafting into the same mailbox is the one overlap worth settling before day two. The install detects which sibling Employees you have and asks about that one specifically if it finds a GTM Engineer.

The browser mutex does not reach across kits, because each kit has its own folder and its own lock file. So the install reads a sibling kit's schedule table and staggers **this kit's** browser fire times against it. It reads a sibling's schedule and never writes one.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
