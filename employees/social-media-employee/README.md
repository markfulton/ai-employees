# Social Media Employee

**Role:** the organic social account, run properly.
**What it replaces:** the social media manager retainer, for the parts that repeat.
**What it is:** seven scheduled routines that run on your own machine, on your own schedule, against one account.

This is not a chat window and not a service running somewhere else. It is seven jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

On the first run it reads your own site and your own already published posts, builds a voice file out of real samples with their permalinks, writes your plan, seeds two weeks of slots, and registers its own schedule.

After that it works every weekday. It writes down what you actually shipped, drafts tomorrow's posts from it, leaves them on disk overnight where you can read and stop them, hands the ones you did not stop to the channel you connected, proves each one is genuinely live, brings back everything a human said to you with a reply already drafted, and on Friday it names one thing to stop and one thing to do more of.

**It publishes only to destinations you typed into a list yourself. It never replies, never messages, never comments, never likes, never follows, and never spends.** That is not a limitation being apologised for. It is the reason you can leave this running.

---

## What it owns

One account, end to end.

- **Voice.** Real posts of yours, quoted with their permalinks, plus your banned words, your banned openers, your banned closers, your hashtag policy, and a hard no on em dashes and en dashes. One file. Everything that writes anything reads it first.
- **Pillars.** At most three subjects this account has standing to talk about, each with the evidence for that standing.
- **Channels.** Which platforms, which surfaces on each, what each platform's real character arithmetic is, and which destinations you have allowed.
- **Material.** Dated, sourced, quoted raw material captured from your own shipped work, your own site and changelog, your own saved searches, the places your audience already is, and the questions people actually asked you.
- **The calendar.** One slot per platform per day at most, pillars rotated, seeded two weeks out and no further.
- **Drafting.** One post per due slot, on a rotated framework, inside the platform's real limits, judged by a script before it is written to disk.
- **Publishing.** Through the channel you connected, to destinations you allowed, with a receipt.
- **Listening.** Proof each post is live, the counts attached to it, and every comment, mention, quote, reply, and message, each with a reply already drafted for you to send.
- **Measurement.** A weekly scorecard where every figure carries the file it came from, and drafting standards rewritten from it every Friday.

---

## The seven routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `soc-engagement-sweep` | Weekdays | 05:45 | Confirms every published post is genuinely live, reads its counts, captures everyone who spoke to you, and drafts a reply for each. |
| `soc-calendar-standup` | Weekdays | 06:50 | Reconciles yesterday's ticks and receipts, re-renders the calendar, and writes your brief. Its first lines name what publishes today and the tick that stops it. |
| `soc-publish-run` | Weekdays | 07:25 | Hands today's due, drafted, unheld slots to your channel, for destinations on your allow list, and records a receipt for each. |
| `soc-material-sweep` | Weekdays | 08:10 | Captures the dated material tomorrow's posts are built from, out of your own work and your own surfaces. |
| `soc-draft-queue` | Weekdays | 09:15 | Writes tomorrow's posts, in your voice, on a rotated framework, inside each platform's real character limits. |
| `soc-performance-review` | Fridays | 16:00 | Scores the week from your own files with a source beside every number, rewrites the drafting standards, and files one thing to stop and one to do more of. |
| `soc-intake-and-voice` | First weekday of the month | 13:00 | First run: researches the business, reads your published posts, builds the voice file, writes the plan, seeds the calendar, registers the schedule. Monthly: re-reads the evidence and rebuilds only what it contradicts. |

Four things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If the two ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**Two of those fire times are not preferences and moving one on its own breaks something.** The standup has to finish before the publish run starts, because the brief is where you find out what is going out and how to stop it. And the draft queue has to run the day before the slot it serves, so every post sits on disk overnight where you can read it. If you want the morning to start later, move all five weekday rows later together. `SCHEDULE.md` section 6 has a worked example.

**No routine sits on a Sunday.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error.

---

## The loop that makes it a system

Each of the seven exists because it is a link in one chain.

The material sweep writes down what actually happened, with a date and a source. The draft queue turns that into one post per due slot and leaves it in a file overnight with a hold box under it. The standup names it in tomorrow's brief and tells you the tick that stops it. The publish run hands the ones you did not stop to your channel and records a receipt. The engagement sweep proves each one is live, reads the counts, and brings back everything a human said, with a reply drafted. The standup turns your reply tick into a fact. The performance review reads a week of all of it, rewrites the standards the draft queue follows, and files a stop and a scale into next week's calendar.

Break one link and the chain stops producing evidence. That is why there are seven and not three.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- **One action reaches the world, and it is narrow.** The publish run hands a post you could have read yesterday to the channel you connected, for a destination you typed into a list yourself. That is all.
- **Nothing else leaves.** No reply, no comment, no quote, no like, no reaction, no repost, no follow, no connection request, no direct message. Every reply it writes lands in a queue file with the permalink beside it, and you post it.
- **No spending.** No boost, no promotion, no budget, no bid, no purchase. It will not even open a screen inside an account that can spend, because several platforms autosave a draft the moment such a flow opens.
- **On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them. It will never click Message, Connect, Follow, Like, React, Repost, or Comment, never open a composer, never type into LinkedIn, and never take any action there. LinkedIn flags automated activity and your account is the asset, so the kit automates the reading, the drafting, the dedupe, and the tracking, and keeps you as the human for every message that leaves.
- **It never posts through a browser.** There is no page in this kit on which it presses Post. If it ever finds itself looking at a composer, it closes the tab and records why.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms. It will not press a control that connects it to a destination, even where the screen calls it Save.
- Your channel holds its own credentials in your harness's secret store. This Employee never sees them, never reads them, never prints them, and never names them beyond the destination's plain name.
- If it finds something that looks like a key or a token in a file or a page it read, it captures nothing, writes nothing, and tells you which file so you can rotate it. It never repeats the matched line.
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

### The three things that make an autonomous publisher safe to leave running

**1. Nothing publishes until you type a destination in yourself.**

`plan/channels.md` carries a `publish_allow_list:` under each platform. It ships present and empty, with one commented example. **No routine in this kit ever adds a line to it.** Not the publish run, not the setup run, not the Friday review. A commented line is not an entry. A destination it obviously should know about is not an entry. On your first week every slot is skipped and the run record tells you the file and the line. Writing one line there is what turns this Employee on.

**2. Every post sits in a file for a full day before it goes anywhere.**

The draft queue writes tomorrow's posts today. Tomorrow morning the brief names each one, at what time, to which destination, and tells you that ticking `hold this one` in the queue entry stops it. The publish run reads that box live, immediately before it hands the post over. That gap is the whole safety mechanism, and it is why the drafting and the publishing are two separate routines that can never be scheduled on the wrong side of each other.

**3. Every post that goes out leaves a receipt, and something checks it.**

Each published slot records what the channel returned, the permalink, and the first line as sent. The next morning the engagement sweep opens that permalink and compares. A channel that reports success and publishes nothing is otherwise invisible, and that check is the only thing in the kit that would ever catch it.

**To stop everything going out for a week, put `soc-publish-run` on a line inside a file called `PAUSED` in the folder.** Drafting, listening, material capture, and your morning brief all carry on. You come back to a full queue instead of an empty week. Delete the line and it resumes on its next scheduled run.

---

## What it does without asking

The two stops above are the whole list. Everything else the Employee owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It researches, tests, and fills in a source list that is empty rather than waiting for you to paste one, and rotates a dead source out and a tested one in. It rewrites the drafting standards every Friday from measured numbers, and the draft queue follows them the next morning. It rebuilds your plan monthly where the evidence contradicts it. It creates calendar slots, assigns their ids, reopens a slot whose post turned out never to have gone live, and marks a past slot missed. It registers its own scheduled jobs and moves a fire time to clear a collision it detected. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it quarantines that one line and rebuilds the index from the rest. It raises its own per run caps when a platform genuinely produces more than the default allows.

Every one of those changes lands as one line in `plan/CHANGELOG.md`: the date, the routine, the file, what changed, and the evidence path. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute.

When something is genuinely ambiguous it makes the most defensible call, records it in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own.

Five things stay yours and no routine overwrites them: the publish allow list, the scorecard thresholds in `plan/channels.md`, `## Member claims` in the proof inventory, `scorecard/manual.md`, and your own free text under a slot in the calendar. Two more stay outside everything, because they are the first stop wearing different clothes: an account setting it did not create, and anything on the far side of a publish, send, or spend control. Those get named, never touched.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## About the writing

This is the part that decides whether you keep it.

**The voice file is built from your own posts, not from an idea of your voice.** On the first run it reads what you have already published, quotes real posts into `voice/voice.md` with their permalinks and the date it read them, and every routine that writes anything reads that file every single run. If it could find fewer than three of your posts, it says so, and pasting three you like the sound of into `## Samples` is the highest value five minutes you will spend on this.

**Nothing gets a number it cannot source.** A figure only goes into a post if that exact string appears in `voice/proof-inventory.md`. Yours go under `## Member claims`. The Employee may add one under `## Agent sourced` only when it read that number out of a file inside this folder, with the path and the date beside it. It will never put a number in a post that it read on an analytics screen, remembered, or worked out from an estimate. **On week one your proof inventory is empty, so the posts carry no numbers at all. That is the correct output, not a thin one.**

**It refuses to repeat its own shape.** The same post skeleton is never used twice in one run, and never twice on the same platform inside three runs. Readers pattern match a repeated structure as machine output faster than they read the words.

**Platform mechanics are treated as arithmetic, not taste.** Social surfaces show markdown literally, so nothing it writes carries an asterisk, a hash heading, or a markdown link, and list items use an arrow. Lines get a blank line between them, because a single newline collapses on several platforms and turns a structured post into a wall of text. On a capped destination the budget is the cap minus the hashtag characters minus a fixed cost per link, whatever that link's real length. It computes that before writing and checks it again after. Over budget is a rewrite, never a truncation, because a post the platform truncates ends mid word in front of everybody who reads it and stays that way.

**Every draft goes through a script before it is written to disk.** The script fails a dash, an unsourced number, a banned word, a banned opener, a banned closer, a hashtag where your policy is none, a markdown token, a collapsed paragraph break, an over-long first line, and anything shaped like a secret. A draft that fails twice is dropped and named. It is never softened into a vaguer version of the same claim that happens to pass.

---

## It installs nothing into your global skills directory

This is a kit of scheduled routines. It is not a set of global skills, and it never becomes one.

No routine here creates, authors, or installs anything in your harness's global skills or plugins directory. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took. You add helpers from the library when you decide to, and nothing here reaches into that decision.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither is a new helper installed somewhere global, and neither is silent: both go in the run record as one line.

**Nothing has to be set up for that to work.** No flow file ships and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning. The shipped morning starts at 05:45 and the brief has to be written by 07:20. If your machine is not awake by then, move the whole morning block later, together.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Something like `D:\AgentOps\social` or `~/agent-ops/social` is right. If you point the install at a synced path it moves the kit to a local one, tells you where it went, and carries on.

**A harness that can do four things.** Read and write files in that folder, read the machine clock and timezone, run a local command, and ideally drive a browser that carries your own signed in sessions. The first three are not optional. The fourth decides how much of the kit runs, and the section below is the honest accounting. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all four in one pass.

**A publishing channel you connect yourself, if you want the last step automated.** This kit hands a post to a channel. It does not become one, and it never drives a browser to post. Whether your harness has a route that accepts a post, a destination, and a time is the fifth thing the probe asks about. **Without one, everything else still runs and you copy each post out of the queue file yourself, which takes about a minute a day.**

**Your own published posts.** The more you have already written in public under your own name, the better the voice file is on day one. If the account is new, say so, and paste three posts you like the sound of into `## Samples`.

**A few minutes on a weekday.** Read the brief, tick anything you want held, post the replies you approve, tick what you answered. The brief is capped at thirty lines on purpose and it never lists what passed.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«SOC_ROOT»` everywhere in this kit.
10. **A usage budget.** Measured on the GTM Engineer over 29 production runs: about $20 of API equivalent usage on a plain weekday on Opus, about $8 on Sonnet, and a skipped fire costs cents now that `scripts/guard.mjs` runs before any document is read. The repo's `docs/COST.md` has the table and the dates.

Tested on Claude Code on Windows through the Desktop app scheduler and Task Scheduler. macOS through launchd is expected to work and is untested until a Mac tester runs the checklist in `docs/INSTALL.md`.

---

## Install

**1. Extract into your working folder.** Files sit at the root of the archive, so extract straight into the local, unsynced folder you picked above.

**2. Point your harness at `«SOC_ROOT»/routines`.** Every routine is a folder holding one `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that a harness reading markdown instructions can run it. If your harness takes a routine source directory, set it to `«SOC_ROOT»/routines`. If it only reads one fixed directory, link the folders rather than copying them. **Do not keep two copies.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run, and with two copies you write into one and it reads from the other.

**3. Read `CONTRACT.md`.** It is the spine. Every routine reads it first, every run. Where a routine and `CONTRACT.md` disagree, the contract wins. Where the contract and your own workspace rule file disagree, yours wins. You do not have to fill anything in. You do have to have read it, because everything the role will and will not do is in there and you are the one who lives with it.

**4. Run the capability probe in `CAPABILITIES.md` section 1.2.** It is a short block you paste into your agent. It changes no files, publishes nothing, and enters no credential. Read the answer next to section 2, and write any disagreement into the `## Corrections` section at the bottom of that file in one line. Your machine is the authority on your machine.

**5. Paste `INSTALL-PROMPT.md` into your agent, in that folder.** Edit the marked slots at the top first. It investigates your business and your own published posts, builds the voice file, writes the plan, seeds two weeks of slots, registers the seven scheduled jobs, and drafts a first small batch of posts. It stops for you once, on those drafts and the voice file.

**6. Set your harness to run scheduled work without interactive approval.** A routine launched in a prompting mode does not fail at 05:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«SOC_ROOT»` if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the browser routines; run them by hand and let the file routines schedule normally. `CAPABILITIES.md` section 10 is the detail, including exactly why this does not weaken the publishing controls.

**7. Leave the publish allow list empty for the first week.** Read a week of queue files first. When you trust the drafts, write one destination name into `publish_allow_list:` under that platform in `plan/channels.md` and posts start going out the next morning.

**8. Let one full day happen before you change anything.** Treat week one the way you would treat a new hire's first week. Watch the output, correct it once, write the correction down.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your account specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, and local command execution. The kit does not run without those four.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 09:15 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to**, for the routines that read your own feeds, notifications, and analytics. This is the one people get wrong. The kit never signs in to anything, so a harness that launches a clean automated browser has handed it a browser with no session, and every read of your own account lands on a sign in wall.

**Optional, and it changes what the last step does.**

4. **A publishing channel you configured yourself.** Without it the publish run defers each slot and tells you, and you post from the queue file by hand. Everything upstream and downstream of that one step is unaffected.

**Optional, if you already have it.** The kit does not ship these and does not need them. Every row has a fallback the routine takes on its own, without stopping and without asking.

| Helper | If you have it, used for | Fallback when you do not |
|---|---|---|
| An image generation helper | Post artwork on a slot that calls for one | The post ships as text with a note saying why. Nothing waits on artwork |
| An image compression tool | Getting an existing image under the injection ceiling | The image is left out and its path is named on the queue entry |
| Your own search endpoint | Finding sources and the places your audience gathers | Whatever web search your harness has, and where there is none, the exact queries are written into the run record for you to run |
| A copy review helper | A final read before you post | `scripts/copy-check.mjs`, which ships inside this kit and is the judge either way |

Helpers are detected by name and used when present. If you run a harness where they do not exist, nothing breaks and nothing is installed for you.

**Forbidden, deliberately.** No routine may call anything that publishes on its own, anything that belongs to another Employee's territory, or anything billed per run that you did not agree to spend. There is exactly one publishing route in this kit and it is the channel you connected, reaching a destination you allowed.

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your about page, your product pages, your changelog or blog, your pricing, and the profile pages those link to. Then it spends the largest single share of its time on one thing, which is reading your own published posts and building the voice file out of real samples with their permalinks. It writes the plan, creates the proof inventory empty, seeds two weeks of weekday slots, and registers seven scheduled jobs.

**Then it stops once, and only once.** It shows you the voice file and the first batch of drafts, and asks whether they sound like you. It tells you the path to the publish allow list, that it is empty, and that nothing goes anywhere until you write a destination into it.

Set your expectation about that first batch now: it will carry no numbers at all, because nothing is in your proof inventory until you put it there. Copy with no numbers is the correct output on day one.

You end day one with a voice file built from your own words, a plan, a calendar two weeks out, a schedule that is registered and running, a first queue you have read, and a list of every assumption it made.

**The next weekday.** The engagement sweep runs at 05:45 and looks for anything to confirm. The standup runs at 06:50 and writes `brief-latest.md`: what publishes today and how to stop it, what is waiting on you, what is blocked. The publish run fires at 07:25 and, with an empty allow list, skips every slot and says so. The material sweep runs at 08:10. The draft queue runs at 09:15 and writes tomorrow's posts.

You open the brief, open the queue, edit anything you want, and tick `hold this one` on anything you do not want going out.

**Friday afternoon** is the scorecard. **Set your expectation about the first one too.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of your own data and it will not estimate the rest. The numbers that are there carry the file they came from. The week over week column is empty on your first Friday and fills in as you accumulate weeks.

**First weekday of next month**, the intake routine re-reads the evidence, applies what changed, and rebuilds only what it contradicts. Your voice samples get checked for dead permalinks. A pillar that produced nothing for three weeks gets retired or reworded.

**The thing that will annoy you in week one**, and it is better heard now than discovered: the posts wait a day, and nothing goes out until you type a destination into a file. Both are on purpose. A routine that can publish the moment it writes is a routine you cannot check, and a routine that picks its own destinations is a routine that can find an audience you did not choose. Neither mistake is recoverable by editing afterwards.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the draft queue, neither does the publish handover, and neither does most of the Friday scorecard.** On a machine with no browser control you still get a voice file, a plan, a calendar, a queue of drafted posts every day, a brief, posts going out through your channel, and a scorecard.

What you lose is the proof and the listening. Nobody confirms a post is actually live. Nobody reads the counts. Nobody brings back the comments. Left alone long enough that is the more expensive of the two gaps, because a channel that reports success and publishes nothing becomes invisible.

| Routine | With browser control | With none |
|---|---|---|
| `soc-engagement-sweep` | Confirms liveness, reads counts, captures inbound, drafts replies | Nothing. Its whole job is in the browser |
| `soc-calendar-standup` | Never uses one | Identical. Full function |
| `soc-publish-run` | Reads each permalink back the same morning | Hands over exactly as normal, skips the read back |
| `soc-material-sweep` | Reads your saved searches and where your audience gathers | Your own work and your own published surfaces only. Nothing behind a login |
| `soc-draft-queue` | Verifies a link it could not otherwise read | Drops that one link and names it. The queue files need no browser |
| `soc-performance-review` | Account level figures from your read screens, plus the Friday flow replay | Everything your files hold, which is most of it |
| `soc-intake-and-voice` | Reads your own published posts behind a session | Reads whatever public post surfaces it can fetch |

Five of the seven produce their main deliverable with no browser at all. But do not buy this expecting the listening to work without one, because it will not.

A missing browser does not get its own status. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«SOC_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/soc-<id>/SKILL.md the seven routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  voice/                     voice.md (samples, banned lists, policies)
                             proof-inventory.md (what may be claimed)
  plan/                      audience.md, pillars.md, sources.md, channels.md, CHANGELOG
  calendar/                  calendar.json, CALENDAR.md (you tick it), inbox.jsonl
  queue/                     YYYY-MM-DD-<platform>.md and YYYY-MM-DD-replies.md
  posts/                     posts.jsonl (every status of every post), metrics.jsonl
  engagement/                inbound.jsonl (everyone who spoke to you)
  material/                  material.jsonl and material-latest.md
  standards/                 drafting-standards.md, rewritten every Friday from your numbers
  scorecard/                 manual.md (yours, never overwritten) and the weekly files
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per site flow, each
                             written by the routine that uses it on the first run that needs it
  state/                     one small JSON per routine, plus browser-lock.json and pushes.jsonl
  improvements/CHANGELOG.md  every change a routine made to its own instructions, with the undo
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning plan, overwritten daily, capped at thirty lines
  soc-latest.md              the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything past its archive window
```

Nothing is ever deleted. Anything past its archive window moves into `archive/` with its path preserved.

---

## Stopping it, and how it changes

**To stop everything, create an empty file called `PAUSED` in the folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file.

**To stop only the publishing, put `soc-publish-run` on a line inside that file.** Drafting, listening, material capture, and the brief carry on. This is the pause most people want.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, that a destination counts characters differently than the file assumed, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**A short list of things it will never teach itself**, whatever the evidence: to publish somewhere you did not allow, to publish on the day it drafted, to reply or message anybody, to act on LinkedIn, to write a number it cannot source, or to relax the character arithmetic. A run that finds itself drafting one of those has found a mistake in its own reasoning, not a new permission.

**It notifies you only when you are the thing blocking it.** An expired session, a channel whose credentials have lapsed, a secret it found sitting somewhere it should not be, or a stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours. Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

**A routine is a scheduled job, not a skill you invoke.** These belong in whatever your harness uses for scheduled work, not in its global skills directory. Registered as global skills they load into every session you open and can be invoked outside their window, where they do nothing but record that they skipped.

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

If a slot ever appears in `Waiting on you` as reopened, a post that was reported published turned out not to be live. It gets rewritten and rescheduled the same day. That line is the reason the liveness check exists.

No routine ever writes a secret, a credential, a post body, a suggested reply, a handle, a permalink, or a person's words into a run record. Run records carry counts, ids, paths, cursors, and blockers. The detail stays in the queue files and the ledgers, inside your working folder.

---

## Working alongside the other Agent Employees

`voice/` and `plan/` are this Employee's own folders and it is their only writer. Where you have another Agent Employee installed, it reads `soc-latest.md`, which the standup writes every morning.

| Employee | They own | Social hands over | Social never |
|---|---|---|---|
| **GTM Engineer** | The go to market system for one offer: ICP, positioning, outbound, paid setup, the launch board | Nothing automatically. Launch week posts reach the calendar as slots you or that Employee file into `calendar/inbox.jsonl` | Writes into that folder, drafts outbound email or DMs, or takes a claim from it by any route other than you pasting it into `## Member claims` |
| **SEO Employee** | Keyword research, editorial calendar, writing, publishing, internal linking, search console | Your pillars and your audience language | Writes or publishes an article, touches a blog repo, or requests indexing |
| **Ad Manager Employee** | Live account operations: spend pacing, bids, budgets, creative rotation | Nothing. Organic and paid are different accounts and different risks | Boosts a post, promotes anything, or opens a screen inside an account that can spend |

If you run the GTM Engineer as well, decide once whether launch week social copy is drafted here or handed over as slots, and write the answer into `plan/`. That is the one overlap worth settling before day two.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
