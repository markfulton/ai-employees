# Chief of Staff

**Role:** the Employee that watches the other Employees.
**What it replaces:** the operations lead you would hire to tell you what actually happened this week.
**What it is:** seven scheduled routines that run on your own machine, in a working folder you own, reading and writing plain files you can open.

This is not a chat window and not a service running somewhere else. It is seven jobs your agent runs at fixed times each week.

Every weekday morning it walks every Agent Employee installed on your machine, reads each one's own run log, and writes you one short page: what ran, what stopped, what is waiting on you. Every weekday afternoon it takes the single worst fault on the fleet and turns it into a page you can act on in a minute. Once a week it reads the world, scores what your machine and your business actually produced, and argues three moves both ways. Once a month it grades its own advice.

**It is read only toward everything.** It never sends, never spends, never deploys, never migrates, and never publishes. **And it never writes a single file into another Employee's folder.** That second rule is the one that makes the first one worth having, and the whole of it is below.

---

## The failure it exists to catch

A routine that fails loudly leaves a record. Its own Employee's brief carries it, and you find out.

**A routine that stops running leaves nothing at all**, because it never reached the line that writes a record. Its log is not shorter than it should be, because nothing knows how long it should be. Nothing inside that Employee can see its own absence. It is the failure nobody notices, and the usual causes are ordinary: a job that was never registered, a folder that moved, a machine asleep at the fire time, or a routine launched in a mode that asks a human for permission at dawn and then waits forever for somebody who is asleep.

The only way to see it is to compare that routine's own schedule row against its own log, from outside, across a window. **That comparison is what this Employee does every morning**, and it is the single reason it exists.

There is a quieter version it also catches: a routine that skips correctly every single day because its fire time drifted outside its own window. It has records, so it looks healthy by every ordinary test, and it has produced nothing for a week.

---

## What it owns

- **The fleet's true state.** Every Employee on the machine, every routine inside each one, and which of four states it is in this morning: running, stopped loudly, stopped silently, or paused.
- **The age of every fault.** A fault that has been open eight days reads as eight days old, not as new. One bad morning is never reported at all, because a page that reports noise is a page you stop opening.
- **Diagnosis.** One fault an afternoon, worked properly, ending in one line you paste.
- **The outside view.** A watchlist of real surfaces, a baseline per surface, and one dated observation per real change, each with a quote you can check and a link that still works.
- **The score.** What the fleet and the business produced this week, with a source beside every number.
- **The argument.** Three moves a week, both sides written out, and the case against its own top recommendation written last.
- **Its own judgement, audited.** At the end of the month: were your accepted moves actually done, did the done ones work, and how often has this Employee been right.
- **The charter.** What you sell, what you will not do, what your priorities are, and which metric measures each one.

---

## The seven routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `cos-fleet-reconcile` | Weekdays | 07:15 | Walks every Employee on the machine, classifies every routine, ages the faults, folds your ticks, and writes your morning brief. |
| `cos-fault-dossier` | Weekdays | 14:30 | Takes the top open fault and writes the diagnosis: the first record that shows it, three ranked causes each with its evidence line, what it has cost, and one line to paste. |
| `cos-market-sweep` | Wednesdays | 10:00 | Reads the surfaces on its watchlist and captures one dated observation per real change, with a verbatim quote and the exact link. |
| `cos-metrics-review` | Thursdays | 10:30 | Scores the week with a source beside every number, citing the Employee that owns a metric rather than recomputing it. |
| `cos-decision-brief` | Fridays | 16:00 | Three moves, both sides of each argued with a citation in every clause, and the case against its own top pick written last. |
| `cos-charter-and-fleet-audit` | First weekday of the month | 12:00 | First run: researches your business, finds your Employees, writes the map and the charter, builds your dashboard, registers the schedule. Monthly: re-runs discovery and reconciles the map against what is really there. |
| `cos-decision-review` | Last weekday of the month | 13:00 | Scores whether the accepted moves were done, whether the done ones worked, and rewrites your priorities where a quarter of evidence disagrees with them. |

Three things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**The weekly three run on consecutive days and the order matters.** The sweep reads the world on Wednesday. The scorecard cites it on Thursday. The Friday argument is built from both. A brief argued from a market page that has not been written yet is a brief argued from nothing.

---

## The loop that makes it a system

Each of the seven exists because it is a link in one chain.

The audit finds your Employees and writes the map. The reconcile walks that map every morning and turns "something is wrong" into a fault with an age and an evidence line. The dossier turns the worst one into a line you paste. The sweep reads the world. The scorecard reads the fleet and the sweep's page and puts a source beside every number. The Friday brief argues three moves from both and files them onto your register with three boxes each. You tick one. **The reconcile turns your tick into a ledger line**, and that ledger line is the only thing in the whole system that makes an outcome computable a month later. The monthly review folds that ledger, scores what happened, and rewrites the priorities the Friday brief argues from.

Break one link and the chain stops producing evidence. The link people underestimate is the tick: a box nobody ticked is a decision the monthly review can never score, and the monthly review is the only thing that can tell you whether any of this advice has been worth reading.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- No email, DM, post, comment, reply, connection request, like, follow, form submit, forum post, calendar invite, published page, deploy, or migration. **This Employee has no outward surface at all.** Six of its seven routines read files and write files inside one folder. The seventh opens pages, reads them, and closes the tab.
- No budget change, no bid change, no campaign status change, nothing enabled, nothing purchased, nothing upgraded. **It never opens anything inside an account that can spend.** Not to look, not to compare, not once. If a metric can only be read on a screen inside such an account, it says so on the page and asks you to move that metric somewhere safe rather than going in after it.
- **On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them. It will never click Message, Connect, Follow, Like, or More, never open a composer, never type into LinkedIn, never run a script that clicks or types there, and never take any action there. LinkedIn flags automated activity and your account is the asset.
- **It changes no state on any site it reads.** Not a save, a preference, a saved view, a saved search, a bookmark, a watch, a star, or a notification setting. It types in exactly two places: a search box on a page it is about to read where the surface has no URL form for the same query, and a date range control that cannot be set in a URL, which it sets back to what it found. **A date range is a view. A saved view is not.**

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms. It declines optional cookie and consent banners, and where a consent choice is unavoidable to read a page at all it takes the most privacy preserving option and says in one line that it did.
- It never writes a key, a token, a password, or a URL with an embedded credential into any file, report, log line, or command. When it is diagnosing a fault whose blocker text carries something credential shaped, it names the class and the file and never the value.
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. **It never retries a refused action a different way.**

**Nothing in the kit can publish, send, or spend.** There is no switch, no exception, and no routine with the capability buried inside it.

---

## The third rule, which is this Employee's own

**It never writes a single file outside its own folder.**

Not a file, not a folder, not a rename, not a move, not a delete. Not a `PAUSED` file, not a browser lock, not a corrected schedule row, not a scheduled job, and not an obvious one line fix sitting in plain view inside another Employee's folder.

It will frequently be able to see the exact repair. It writes none of it.

**Here is why that matters to you rather than to it.** Every Agent Employee in this club is built on one rule: one routine owns each file that gets rewritten, and named routines own each ledger that gets appended to. The moment a second Employee starts editing a first Employee's files, that rule breaks everywhere at once, silently. The first symptom you would see is a routine whose own corrections list contains a line it did not write and cannot reconcile with its own instructions, or a state file that disagrees with itself on a Monday morning three weeks later.

So the shape is: **it writes the diagnosis, with the exact path of the section the line belongs in, and your hand is the last step.** That is two clicks. It is also the only arrangement in which every other Employee you own can keep its own corrections meaningful and its own self improvement honest.

**The correction you paste is a correction you chose. The correction it pasted would be a correction nobody chose.**

The same rule covers scheduled jobs. It registers its own seven. If it finds one of your other Employees' jobs unregistered or drifted, it tells you in the brief and changes nothing. An Employee that silently retimes another Employee's morning is one nobody can debug.

---

## What it reads inside your other Employees, and what it never reads

It opens seven folders every morning. This is the closed list of what it takes from each one.

**It reads:** their schedule file, so it knows what was due. Their run log, with line numbers, so every claim it makes about them can be checked in one move. Their pause file, so a silence that is explained reads as explained. Their state files, so a cursor that stopped moving is visible. Their digest, the file they publish for siblings. Their weekly output file. When it is diagnosing one specific fault it also reads that one routine's own instructions, its changelog, and any flow file the blocker names.

**It never reads:** their queue files, their CRM ledgers, their contact lists, their drafts, or their briefs. Those hold your data and your customers' data, and nothing this Employee writes needs either. **The digest exists so a sibling can read counts and paths without reading people.**

If a diagnosis would need one of those files, it says so in those words and names the file for you to look in yourself. That is the honest answer, and it is also a finding: a fault whose evidence lives somewhere this Employee cannot see is a fault worth knowing has that shape.

---

## What it does without asking

The two stops and the third rule are the whole list. Everything else it owns outright inside its own folder, and it is worth being explicit, because this is the half people assume they will have to supervise.

It raises a fault, ages it, and closes one when a record shows it clear. It folds new items onto your register and assigns their ids. It turns your tick into a ledger line. It adds a surface to its watchlist when it proves one worth watching, and retires one that has produced nothing for six runs, in place, with the date and the reason. It rewrites your charter when your own site's price or buy URL no longer matches what the file says. It rewrites your priorities when a quarter of ledger evidence disagrees with them. It registers its own seven jobs and moves one of its own fire times to clear a collision it detected. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file.

Every one of those changes lands as one line in `charter/CHANGELOG.md`: the date, the routine, the file, what changed, and the evidence path. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute, and the next morning's brief carries each one as a single line.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own. **Where two readings are defensible, it takes the more conservative one, and in the monthly self review that means the one less flattering to itself.**

**There is no proposal file in this kit, no approval block, and no status that means waiting for a yes.** If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## The three things it will not do, however useful they look

**It will not fix another Employee.** Every finding reaches its owner through your hand.

**It will not recompute a number another Employee already publishes.** It cites that Employee's own file instead, exactly as that file states it. Two answers to one question is worse than one stale answer, and the Employee that owns a metric is the one that finds out first when it drifts, because it reads that ledger every week in the routine that produced it. A number recomputed from outside is a number nobody is watching.

**It will not report a change against a surface it has no baseline for.** A first read is a baseline and produces no change line at all, and the page says so. A diff against memory is a fabrication with a real screenshot attached, and it is the single most damaging thing this Employee could produce, because it reads exactly like real work.

---

## These are scheduled routines, not global skills

This is a kit of scheduled jobs. It is not a set of global skills and it never becomes one.

**Do not copy the routine folders into your harness's global skills directory.** Doing that loads all seven into every session you open and lets one be invoked outside its window, where it does nothing but record that it skipped and exit. Point your harness at `«COS_ROOT»/routines` as a routine source, or link the folders. **Do not keep two copies:** every routine ends with a corrections section you write into and the routine reads on its next run, and with two copies you write into one and it reads from the other.

**And it installs nothing into your global directory either.** No routine here creates, authors, or installs anything in your harness's global skills or plugins folder. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither is a new helper installed somewhere global, and neither is silent: both go in the run record as one line.

**Nothing has to be set up for that to work.** No flow file ships with the Employee and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the brief says so in plain language the next morning.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Something like `D:\AgentOps\chief-of-staff` or `~/agent-ops/chief-of-staff` is right. That folder is `«COS_ROOT»` everywhere in this kit. If you point the install at a synced path it moves the kit to a local one, leaves a pointer beside the original, tells you where it went, and carries on.

**A harness that can do four things.** Read and write files in that folder, **read files by absolute path outside it**, read the machine clock and timezone, and run a local command. The third and fourth are the ordinary ones. **The second is the one specific to this Employee**, because reading your other Employees' folders is the job: a harness that sandboxes file access to one directory will watch exactly one Employee, its own, and the brief will be honest about that from day one. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all of it in one pass.

**Browser control is optional here, and that is unusual for this club.** Six of the seven routines produce their main deliverable without one. The market sweep is the exception, because reading a competitor's pricing page is what it does. See the section below.

**Your own public presence, for one run.** The install investigates before it asks anything: your site, your pricing or checkout page, your docs, your blog, your public profiles and listings. In practice one URL is the whole input.

**Three things that are true but not on the internet.** Any figure that bounds your spending or commitment, the minimum cohort size below which you do not want a rate published, and anything you can defend in public word for word. It asks about these in one short block at the end of the investigation and it does not wait for the answer. It adopts a defensible default for each, records the assumption, and keeps going. Correcting a default costs you one line.

**A few minutes on a weekday.** Read the brief, paste a correction line when one is waiting, tick a box when you have made a decision. The brief is capped at thirty lines on purpose and it never lists what passed.

---

## Prerequisites

Ten things. The install checks the ones it can, and it stops in plain words on the one that fails silently otherwise, which is the login.

1. **A plan that includes Claude Code**, or another harness that can read and write files, run a command, read the clock, and drive the browser you are signed in to. On Claude that is Pro, Max, Team or Enterprise; the free plan does not include Claude Code. An API key works for the file routines and turns the browser lane off.
2. **Claude Code installed.** Either the Claude Desktop app, which includes it and has a local scheduler of its own, or the CLI. `CAPABILITIES.md` section 2 says how the two differ.
3. **Logged in, by a human, once.** Run `claude`, then `/login`, and confirm with `claude auth status`. A scheduled run that is not logged in exits in under a second with `Not logged in` and writes nothing, so the install checks this before it does anything else and the launcher writes a `failed` run record when it happens later.
4. **Node 18 or newer.** The three scripts in `scripts/` are dependency free and need nothing installed.
5. **On Windows, Git for Windows.** Claude Code needs it for its shell and the Desktop app needs it for local sessions. Not WSL if you want the browser lane, because the browser bridge does not run inside WSL.
6. **The browser lane, if you want it:** Google Chrome or Microsoft Edge, the Claude in Chrome extension, a login based session rather than an API key, and the site permissions granted in the extension before the first scheduled run. The routines share your browser's own login state and never sign in to anything.
7. **A scheduler.** The Desktop app's local scheduled tasks, or Windows Task Scheduler with the launchers in `run/`, or launchd on macOS, or cron on Linux. `CAPABILITIES.md` section 9 has the commands, and the repo's `docs/INSTALL.md` walks each one.
8. **A machine that is awake at the fire times in `SCHEDULE.md`**, or fire times moved to after it normally wakes. A closed lid sleeps.
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«COS_ROOT»` everywhere in this kit.
10. **A usage budget.** Measured on the GTM Engineer over 29 production runs: about $20 of API equivalent usage on a plain weekday on Opus, about $8 on Sonnet, and a skipped fire costs cents now that `scripts/guard.mjs` runs before any document is read. The repo's `docs/COST.md` has the table and the dates.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex and Antigravity, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

**1. Extract into your working folder.** Files sit at the root of the archive, so extract straight into the local, unsynced folder you picked above.

**2. Point your harness at `«COS_ROOT»/routines`.** Every routine is a folder holding one `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill. If your harness takes a routine source directory, set it to `«COS_ROOT»/routines`. If it only reads one fixed directory, link the folders rather than copying them. Your harness's own documentation names its directory, and `CAPABILITIES.md` section 2 says what could be confirmed about each of seven harnesses and what could not.

**3. Read `CONTRACT.md`.** It is the spine. Every routine reads it first, every run. Where a routine and `CONTRACT.md` disagree, the contract wins. Where the contract and your own workspace rule file disagree, yours wins. You do not have to fill anything in. You do have to have read it, because everything the role will and will not do is in there and you are the one who lives with it.

**4. Run the capability probe in `CAPABILITIES.md` section 1.2.** It is a short block you paste into your agent. It changes no files and sends nothing. Read the answer next to section 2, and write any disagreement into the corrections section at the bottom of that file in one line. Your machine is the authority on your machine.

**5. Paste `INSTALL-PROMPT.md` into your agent, in that folder.** Edit the two marked slots at the top first. One is required. It researches your business, finds your Employees, writes the charter and the map, seeds the watchlist and the priorities, builds the dashboard, and registers the seven jobs.

**6. Set your harness to run scheduled work without interactive approval.** A routine launched in a prompting mode does not fail at 07:15, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. **That is precisely the silent stop this Employee exists to catch on your other Employees, and it is the one shape of failure that nothing catches on this one.** Scope the write permission to `«COS_ROOT»` if your harness supports scoping; read permission wants to be wider. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two stops.

**7. Let one full week happen before you change anything.** The first brief will be thin, the first market page will be all baselines, the first scorecard will be mostly blank, and the first calibration figure will refuse to exist. Every one of those is correct rather than broken, and the next section says why.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your business specifically, and it is worth more than any edit you make to a routine body.

---

## Week one, and what "correct but empty" looks like

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your pricing page, your docs, your blog, your public listings. Then it searches the folders next to this one for Agent Employees, using a bounded search rather than walking your whole disk, and writes one block per Employee it found with every value read out of that Employee's own files rather than assumed. Then it writes the charter, seeds your priorities and your watchlist, builds the dashboard, and registers seven jobs.

It tells you what it concluded with a source beside each line, and asks only about the handful of things a crawl genuinely could not settle. It does not wait for those answers.

**The next weekday morning.** The reconcile runs at 07:15 and writes `brief-latest.md`: what today is for, what is waiting on you, what is blocked. **The first one will be short, and it will report the state of your fleet as one line of counts.** In the afternoon the dossier runs. If nothing is wrong, it writes a record saying there are no open faults and stops. **That is the good outcome and it is the most common one on a healthy machine.**

**Wednesday** is the market sweep. **Every surface on it will be a baseline this week**, which means it produces no change lines at all and says so. That is the honest first week: it has nothing to compare against yet, and a diff against memory is the one thing it must never do.

**Thursday** is the scorecard. **It will be mostly blank**, with the reason in each cell rather than an estimate. It has one week of your machine's own data and it will not invent the rest. The week over week column fills in as you accumulate weeks.

**Friday** is the argument. If fewer than three moves survive its four refusals, it writes fewer and says why in one line. **Two moves with real evidence is a better brief than three with an invented one**, and you would learn that from the third one every time.

**End of the month** the review runs and refuses to publish a calibration figure, because fewer than five decisions have closed. It says so in exactly those words. A hit rate computed on two calls is noise, and publishing it once would teach you to trust it forever.

**The thing that will annoy you in week one**, and it is better to hear it now: it will show you a fault it can obviously fix and hand you the line rather than fixing it. That is on purpose, and the third rule above is the whole reason.

---

## Stopping it, and how it changes

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file. To stop just one routine, put its id on a line inside that file and leave the rest running.

**The first brief written after you delete it names the gap**, so a pause you forgot about reads as an explained gap rather than a hole in your ledgers. No routine ever creates, writes, or deletes that file: one that could clear its own pause could not be stopped.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a read order put the highest yield file last, that a fault class fires too early, that a walk order leaves the same Employee unreached every week, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. **Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it.** Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**Four rules it can never teach itself out of**, whatever it concludes: the two stops, the rule against writing anywhere outside its own folder, the rule against registering a job it does not own, and the rule against reporting a number it did not read in a file that run. A run that finds itself drafting one of those edits has found a defect in its own reasoning, not a new permission. **A self edit can make allowed work better. It can never widen what is allowed.**

**It notifies you only when you are the thing blocking it.** An expired login on a surface it needs, a credential it named that is absent, your primary metric becoming unreadable, or a browser lock held by a run that died. Four cases, once each, never twice for the same problem, never outside your working hours, never on a first run. Everything else waits for the morning brief. **A silently stopped Employee is a brief line and never a buzz**, unless its cause is one of those four: it is discovered in the morning and read in the morning, and a channel that fires every day is a channel you mute.

If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

---

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-out-of-window` `skipped-already-ran` `skipped-paused` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. The three `skipped` values are all correct behaviour, not faults.

Blockers appear in your morning brief word for word, with two mechanical exceptions that are always named beside the line: a dash inside a blocker written by another Employee becomes a comma, and a count inside one gains the file and line number it can be checked at. **The untouched original is one file away, at the line named beside it.**

A blocker that has been open for more than a week gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

**If the brief ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing.** Check that the machine was awake and that the jobs are still registered. The scorecard has a version of the same rule: where every run record in a whole week is a skip of any kind, it replaces its headline with one sentence asking exactly that, because a table of zeros reads like a bad week of work rather than a dead one.

No routine ever writes a secret, a credential, a quote, a person's name, or another Employee's internal file path into a run record. Run records carry counts, ids, relative paths, cursors, and blockers.

---

## Where things live

```
«COS_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/cos-<id>/SKILL.md the seven routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  charter/                   business, constraints, metric-map, fleet-map,
                             priorities, CHANGELOG
  fleet/                     fleet.json, observations.jsonl, inbox.jsonl
  decisions/                 REGISTER.md (you tick it), decisions.jsonl,
                             and one dated brief per week
  dossiers/                  one page per fault, named after the fault
  market/                    watchlist.md and one dated page per week
  metrics/                   one dated page per week
  evidence/                  sourced.md, the proof inventory
  dashboard/                 src/, build.mjs, and the built index.html
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per site flow,
                             each written by the routine that uses it
  state/                     one small JSON per routine, plus browser-lock.json
                             and pushes.jsonl
  improvements/CHANGELOG.md  every instruction change, with the text it replaced
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning page, overwritten daily, capped at thirty lines
  cos-latest.md              the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything past its retention age
```

Nothing is ever deleted. Anything past its retention age moves into `archive/` with its path preserved. A closed fault keeps its dossier: it is the cheapest thing you can read the next time the same fault appears.

**Four things are yours and no routine overwrites them:** free text under a row in `decisions/REGISTER.md`, free text and hand added surfaces in `market/watchlist.md`, the `## Member claims` heading in `evidence/sourced.md`, and the `## Corrections` section at the bottom of every routine and every root document. They are carried across verbatim on every rewrite, with no reflow, no capitalisation, no punctuation fix, and no dash removal.

**If a check ever fails on something you wrote, it writes the file anyway** and puts one line in the brief naming the file and the rule. Editing your own words to please a checker is the one repair this kit does not do.

The proof inventory is split for the same reason. `## Member claims` holds only lines you confirmed. `## Agent sourced` is append only, and every line in it carries the file path and the date it was read from inside this folder. **A figure read off a live screen never qualifies**, because nothing in this folder can re-derive it, and a claim nobody can re-derive is a claim that will one day be wrong in public.

---

## What you lose with no browser control

The honest headline first. **Six of the seven routines produce their main deliverable with no browser at all.** The morning brief never needs one. Neither does the dossier, the Friday argument, or the monthly review. The scorecard reads files, and on a healthy install every metric on it has a file behind it rather than a screen.

What you lose is the outside view. The market sweep is the one routine that genuinely needs a browser, because reading a competitor's pricing page, a changelog, a careers list, or a forum thread is what it does. Without one it writes the week's page from the baselines it already holds, names every surface it could not read, and produces no new observations.

| Routine | With browser control | With none |
|---|---|---|
| `cos-fleet-reconcile` | Never uses one | Identical. Full function |
| `cos-fault-dossier` | Never uses one | Identical. Full function |
| `cos-market-sweep` | Reads every surface and diffs against the baseline | No new observations. The page names every surface it could not read |
| `cos-metrics-review` | Reads the live screens your metric map names | Every file based number, which is most of them |
| `cos-decision-brief` | Never uses one | Identical, unless the market page is thin |
| `cos-charter-and-fleet-audit` | Crawls, and views the built dashboard | Research narrows to what it can fetch. The dashboard still gets built and verified off disk |
| `cos-decision-review` | Never uses one | Identical. Full function |

**The most common healthy configuration takes no browser lane on most days.** If your metric map names no live screen, the Thursday scorecard opens nothing at all and produces exactly the same page, which means every number on it came out of a file. That is a better place for a metric to live than a screen somebody has to be signed in to.

A missing browser does not get its own status, and no routine invents one. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Working alongside the other Agent Employees

This is the only Employee in the club that reads the others, and the boundary is one sentence in each direction.

**Inward:** it reads their schedule, their run log, their pause file, their state cursors, their digest, and their weekly output, plus one failing routine's own instructions and changelog when it is diagnosing a fault. It never reads their queue files, their CRM ledgers, their contact lists, their drafts, or their briefs.

**Outward:** nothing. No file, no row, no job, no note, no proposal. Every finding it has about an Employee reaches that Employee's owner by exactly one route: you read it in the brief or in a dossier, and your hand does the rest.

That looks like a limitation and it is the opposite. It is the only arrangement in which every Employee on your machine can keep one writer per file, keep its own corrections meaningful, and keep its own self improvement loop honest.

**If this is the only Employee you have installed, everything still works.** The fleet map holds one root, its own, and it reconciles itself the same way it would reconcile anybody else. The brief is shorter. The market sweep, the scorecard, the Friday argument, and the monthly review are unaffected, because none of them needs a sibling to exist.

**What it publishes for your other agents** is `cos-latest.md`, and specifically its `## For other employees` block: the current charter paths with their dates, the Employee roots and their digest paths, the open fault keys, and the paths of this week's three pages. Paths and dates only.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
