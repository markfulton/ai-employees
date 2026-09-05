# Customer Satisfaction Employee

<img src="https://club.reinventing.ai/img/employees/customer-satisfaction-employee.webp" alt="Customer Satisfaction Employee" width="100%">


**Role:** the support desk.
**What it replaces:** the part-time support hire, for the parts that repeat.
**What it is:** eight scheduled routines that run on your own machine, on your own schedule, against your own accounts.

This is not a chat window and not a service running somewhere else. It is eight jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

It reads every place a customer can say something about your product, grades how much each one matters and shows you the rule it used, writes the hardest replies first, tells you which paying customers are about to leave and why, writes down the answer to the question that keeps coming back, and on Friday names the one thing you could change in the product to make the most of it stop happening.

**It can send a reply and it can grant a refund. Whether it does is a setting you own: every channel ships held, with the reply drafted hardest first and the remedy named, and `RELEASES.md` hands a channel over when its drafts have earned it.** Held is the default because it is what lets you leave this running on day one. Released is where a channel goes once its drafts have earned it.

---

## What it owns

Your whole support surface, end to end.

- **Intake.** Your support mailbox, your helpdesk queue, your review and rating listings, your marketplace pages, and the forums where your product actually gets discussed. Every new or changed item captured as one dated line carrying the customer's own words, the page it was read on, and the date they wrote it.
- **Severity, with its reasoning shown.** An ordered set of rules, each with a name. Every ticket records which rules fired, the exact words that fired them, the grade it beat, and why that grade was rejected.
- **Themes.** Six to nine categories named in your customers' language, not in yours, corrected once a month against what actually happened.
- **Replies, hardest first.** By severity, then by how long they have waited, then by money at stake. Drafts only, in a dated file, with the customer's own words above each one.
- **Remedies, named.** Where the honest answer is a refund, a credit, a plan change, or a cancellation, you get the exact amount, the exact screen, and the line in your own policy that covers it. You grant it.
- **Churn watch.** Nine trip wires. Every flag is a one page dossier: what fired, the evidence for each, that customer's whole history with you in their own words, and one thing you could do today with its cost written next to it.
- **Deflection.** A reusable macro and a help article draft for every question that keeps coming back, and a weekly check on whether the last ones actually made that question stop.
- **Measurement.** Two response clocks per ticket, a resolution clock, volume by channel and by theme, and a count of the gradings that were genuinely ambiguous.
- **One product change a week.** Named concretely enough that somebody could open the codebase or the pricing page on Monday morning and know exactly what to change.
- **Your dashboard.** One page holding the board, the open tickets with their quotes, today's drafts, the accounts at risk, and the week.

---

## The eight routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `csat-inbox-sweep` | Weekdays | 06:45 | Reads every support channel and captures each new or changed item as one dated, sourced, severity graded ticket. |
| `csat-desk-standup` | Weekdays | 07:30 | Turns your ticks into answered dates and closed cards, computes the clocks, re-renders the board, and writes your morning brief. |
| `csat-reply-desk` | Weekdays | 08:15 | Drafts today's replies, hardest first, and names the remedy where the honest answer is money. Held unless you release it. |
| `csat-churn-watch` | Weekdays | 09:20 | Flags the paying customers about to leave, one dossier each, with the evidence attached and one thing you can do today. |
| `csat-deflection-desk` | Wednesdays | 11:00 | Writes the macro and the help draft for every question that keeps coming back, and audits whether the last ones worked. |
| `csat-satisfaction-report` | Fridays | 16:00 | Scores the week with a source beside every number and names the one product change that would remove the most tickets. |
| `csat-desk-intake` | First weekday of the month | 13:00 | First run: researches your business, writes the strategy folder, seeds the board, builds the dashboard, registers the schedule. Monthly: re-reads the evidence and applies what changed. |
| `csat-taxonomy-refresh` | Last weekday of the month | 14:00 | Re-tests every theme and every severity rule against a month of real outcomes and rewrites them where the evidence disagrees. |

Three things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits.

**No routine sits on a Sunday, and nothing runs at the weekend by default.** Your customers do write in at the weekend, and a review left on a Saturday is captured on Monday. That is not smoothed over anywhere: the clocks report the time from when the desk saw a ticket **and** the time from when the customer wrote it, side by side, every week, so you can see which part of the wait was yours. If you want weekend cover, it is one row in `SCHEDULE.md`.

---

## The loop that makes it a system

Each of the eight exists because it is a link in one chain.

The sweep captures a real customer's real words with a grade and the rule that produced it. The reply desk answers the hardest first and, where the honest answer is money, names the remedy and files a card only you can close. You send and tick. The standup turns your tick into an answered date, which is the only thing that makes a response time computable at all. The churn watch reads the same ledger and flags the accounts about to leave, with the evidence attached rather than a percentage. The deflection desk turns the question that keeps coming back into an answer that only has to be written once, and measures whether it worked. Friday scores it all and names the product change that would remove the most of it. At the end of the month the taxonomy refresh reads what actually happened and rewrites the rules that graded it wrongly.

Break one link and the chain stops producing numbers. That is why there are eight and not five.

**And two of the eight run the other way.** Everything else answers tickets. The deflection desk and the Friday product change remove tickets that would otherwise have arrived. That is the part that makes month six cheaper than week one, and it is the reason to keep this running after the novelty of the first brief wears off.

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- No email, DM, post, comment, reply, forum post, review response, connection request, like, reaction, vote, form submit, or published page. The draft is written. The queue entry is complete. You press the button.
- **It never marks a ticket read**, and where a helpdesk marks one read simply because a session opened it, the sweep reads that surface from its list view only and says so on the ticket. A ticket showing as read tells your customer a human has looked at it, and nobody has.
- **It never changes a ticket's state.** Not assigned, not tagged, not snoozed, not escalated, not merged, not closed, not resolved.
- **It publishes only where you released the channel a help article.** The draft sits in `help/` and the card names the exact page it goes on.
- No refund, no credit, no discount, no plan change, no extension, no cancellation, no goodwill gesture. **It reads your billing screens and touches no control on them**, not a toggle, not a plan selector, not a pause button, not a payment retry, and not the "keep this customer" button your retention dashboard offers it. It also never opens a cancellation flow to see what it says, because some of those commit on the first step.
- **On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them. It will never click Message, Connect, Follow, or Like, never open a composer, never type into LinkedIn, and never take any action there. LinkedIn flags automated activity and your account is the asset, so the kit automates the reading, the templating, the dedupe, and the tracking, and keeps you as the human for every message that leaves.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms. **If you offer it a helpdesk login during setup it will refuse and tell you why:** it never authenticates, it inherits a browser you are already signed in to, and nothing here ever needs a key.
- It never writes a key, a token, a password, or a URL with an embedded credential into any file, report, log line, or command.
- **Your customers will paste secrets into your support tickets, constantly.** That is handled the moment the ticket is captured: the value is replaced with a marker, only the class is recorded, and the real value never reaches a file, a digest, or a log. You read in your brief that somebody sent an API key, which is exactly enough to tell them to rotate it. **Telling them is a send, so you do it.**
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

**Nothing in the kit can send a reply.** There is no switch, no exception, and no routine with the capability buried inside it.

There is one option that touches a live surface and it ships off. If you set `helpdesk_draft_mode` to true by hand in `state/csat-reply-desk.json`, the reply desk may also save a **private draft** on a ticket in your own helpdesk instead of only writing a queue file. Even then it only creates drafts it wrote in that run. It never opens a thread to reply to it, never edits a draft it did not create, never changes a status, an assignee, a tag, or a priority, and it treats eight helpdesk button labels as barred by name, `Submit as Pending` first among them, because on the common products that one delivers the reply and then sets the ticket to pending. Leave it off for week one. Turn it on when you have read a week of queue files and you trust the drafts.

---

## What it does without asking

The two guardrails above are the whole list. Everything else it owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It researches your business from your own published pages rather than interviewing you. It finds the forums where your product is discussed, tests each one, and writes the working ones into your channel list. It rotates a dead surface out and researches a replacement. It rewrites your themes and your severity rules once a month on a month of real outcomes. It creates its own board cards, advances them, and ticks the ones whose definition of done is a file it can verify. It registers its own scheduled jobs and moves a fire time to clear a collision it detected. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it copies that one line aside and rebuilds the index from the rest.

**It also tunes its own thresholds, and this one is worth expecting.** A churn wire that fires on half your customer base is not a wire, it is a description of your business, so it raises the threshold and records one line saying it did. The same goes for how many pages the sweep loads and how often a question has to recur before it earns a written answer.

Every one of those changes lands as one line in `strategy/CHANGELOG.md`: the date, the routine, the file, what changed, and the evidence path. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute, and it appears in your brief under `Waiting on you` the next morning.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. **One of those calls has a stated direction and you should know which way it leans:** where the severity rules do not settle a grade, it takes the more severe reading. Over grading costs you ten minutes of attention. Under grading costs you a customer.

Two things stay outside all of that, because they are the first guardrail wearing different clothes: a ticket state, an account setting, a billing record, or a help centre page it did not create, and anything on the far side of a reply, publish, resolve, or spend control. Those get named, never touched.

**Every card carries a `done_kind`.** A card whose definition of done is a file on your machine ticks itself the moment the file is verified. A card whose definition of done is a refund, a credit, a plan change, a cancellation, a published article, or a reply reaching a customer is yours, and only your tick closes it. That single field is what lets it run at full speed on its own work without ever quietly claiming credit for something you have to do.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## The three things that make it different from a template

**The severity reasoning is shown, and then it stops being shown.** For the first weeks, every ticket in your digest carries the rules that fired, the exact words that fired them, the grade it beat, and why. That is deliberate: the one rule that is wrong for your business is usually visible in the first ten of these, and correcting it takes one line. When you write a date under `## Severity rules confirmed` in `strategy/themes.md`, it stops writing the full block and renders only the ambiguous ones. **No routine ever writes that date**, which is why it is the one thing you have to type.

**A flag is never a score.** No health percentage, no risk grade, no churn probability. Every at risk account is a list of things that happened, each with the date and the file or screen it was read from, and one suggested save with its cost. You can see exactly which piece of evidence is wrong, and correcting it takes one line. A percentage you cannot check is a number you trust for a month and then stop reading.

**It measures its own answers.** Every Wednesday it asks whether each macro it has ever shipped actually made its theme smaller, comparing the weeks before it shipped against the weeks after. A macro whose theme did not shrink is a failed answer, and a failed answer left in the folder keeps getting sent, so it is rewritten from the tickets that arrived after it shipped. Those are the exact people it did not help. **A macro on its third failure is not a writing problem**, and the report says so plainly: three failed answers to one question means the fix is a change to the product.

---

## It installs nothing into your global skills directory

This is a kit of scheduled routines. It is not a set of global skills, and it never becomes one.

No routine here creates, authors, or installs anything in your harness's global skills or plugins directory. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. **As it happens this Employee names none**, because nothing it produces needs an image, a slide, a converter, or a publisher. The three scripts inside the kit are the only tooling it depends on, and all three ship with it.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither one is a new helper installed somewhere global, and neither is silent: both go in the run record as one line naming the flow or the step.

**Nothing has to be set up for that to work.** No flow file ships with the Employee and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. **A day the sweep does not run is a day of tickets nobody captured, and nothing later gets them back**, because it reads what is on the page today. The standup says so in plain language the next morning rather than showing you a quiet board.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. There is a second reason here: this folder fills up with your customers' names, their own words, their order references, their billing states, and a list of the accounts about to leave you. It belongs on a local disk in a folder you control, not on a shared drive somebody else's laptop syncs. Something like `D:\AgentOps\support-desk` or `~/agent-ops/support-desk` is right. If you point the install at a synced path it moves the kit to a local one, tells you where it went, and carries on.

**A harness that can do four things.** Read and write files in that folder, read the machine clock and timezone, run a local command, and drive a browser that carries your own signed in sessions. The first three are not optional. The fourth is what decides whether it can read your mailbox, and [What you lose with no browser control](#what-you-lose-with-no-browser-control) below is the honest accounting. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all four in one pass.

**A browser you are already signed in to.** This one matters more here than in any sibling kit. Your mailbox and your helpdesk are behind your login, and the kit never signs in to anything. A harness that launches a clean automated browser has handed it a browser with no session, and every read of your own inbox lands on a sign in wall, every morning, forever.

**Your own public presence.** The install investigates before it asks anything: your site, your pricing page, your **refund and cancellation policy**, your help centre, your support or contact page, your store and marketplace listings, and the forums where your product name shows up. The more of that is public, the less there is to ask you about. In practice one URL is the whole input.

**Three things that are true but not on the internet.** What you are actually willing to grant and up to what amount, the answer time you are willing to promise, and any claim you can defend in public. It asks about these in one short block at the end of the investigation and it does not wait for the answer. Your published refund policy stands in for the first, marked as published rather than agreed, and every remedy above it is marked as your call. The second reads `n/a (no response target recorded)` until you set one, because a target you never set is a promise a machine made on your behalf. The third stays empty, which means your replies carry no numbers at all, which is correct on day one rather than thin.

**A few minutes on a weekday.** Read the brief, send the drafts you approve, tick what you sent, grant the remedies you agree with. The brief is capped at thirty lines on purpose and it never lists what passed.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«CSAT_ROOT»` everywhere in this kit.
10. **A usage budget.** On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, and an API key loses the browser lane. The repo's `docs/COST.md` has the table and the dates.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

**1. Extract into your working folder.** Files sit at the root of the archive, so extract straight into the local, unsynced folder you picked above.

**2. Point your harness at `«CSAT_ROOT»/routines`.** Every routine is a folder holding one `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that a harness reading markdown instructions can run it. If your harness takes a routine source directory, set it to `«CSAT_ROOT»/routines`. If it only reads one fixed directory, link the folders rather than copying them. **Do not keep two copies.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run, and with two copies you write into one and it reads from the other.

**3. Read `CONTRACT.md`.** It is the spine. Every routine reads it first, every run. Where a routine and `CONTRACT.md` disagree, the contract wins. Where the contract and your own workspace rule file disagree, yours wins. You do not have to fill anything in. You do have to have read it, because everything the role will and will not do is in there and you are the one who lives with it.

**4. Run the capability probe in `CAPABILITIES.md` section 1.2.** It is a short block you paste into your agent. It changes no files, sends nothing, and opens no ticket. Read the answer next to section 2, and write any disagreement into the `## Corrections` section at the bottom of that file in one line. Your machine is the authority on your machine.

**5. Paste `INSTALL-PROMPT.md` into your agent, in that folder.** Edit the marked slots at the top first. One is required. It investigates your business from your own public presence, writes the strategy folder, creates the ledgers, seeds the board, builds the dashboard and opens it, registers the eight scheduled jobs, and then runs the sweep, the standup, and the reply desk once each so you see real tickets and real drafts. It stops for you once, at the end, on the severity reasoning.

**6. Set your harness to run scheduled work without interactive approval.** A routine launched in a prompting mode does not fail at 06:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«CSAT_ROOT»` if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the browser routines; run them by hand and let the file routines schedule normally. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two guardrails.

**7. Correct one severity rule in week one.** This is the single highest value thing you will do with this kit and it takes one line. Read the triage block in `tickets/tickets-latest.md`, find the rule that is wrong for your business, and write a dated line in the `## Corrections` section at the bottom of `routines/csat-inbox-sweep/SKILL.md` saying what it should do instead. Then write today's date under `## Severity rules confirmed` in `strategy/themes.md` when you are happy.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your business specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, and local command execution. The kit does not run without those four.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 08:15 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to.** This is the one people get wrong, and in this kit it is the difference between reading your support mailbox and not. Ask your harness directly: does your browser control attach to the profile I am signed in to, or start a fresh one. `CAPABILITIES.md` section 1.1 is the check.

**Optional.** Nothing. This Employee names no optional helper, because nothing it produces needs an image, a slide, a converter, or a publisher.

**Forbidden, deliberately.** No routine may call anything that publishes, anything that sends, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend. Research uses whatever web search your harness has, and where it has none the routine writes the exact queries it would have run into the run record so you can run them yourself.

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your pricing page, your refund and cancellation policy, your help centre, your support page, your changelog, your store and marketplace listings, and the forums where your product is discussed. It reads fifteen or twenty real complaints in public, because those are the raw material for your first set of themes. It forms working answers about what you sell, what it does not do, what you have published that you will do, and where your customers actually talk, with a source URL and a date beside each one.

Then it tells you in a short list what it concluded, and asks only about the handful of things a crawl genuinely could not settle. It does not wait for those answers.

It writes the strategy folder, creates the ledgers, seeds the board, builds `dashboard/index.html` and opens it, and registers eight scheduled jobs. Then it runs the sweep, the standup, and the reply desk once each, by hand, in front of you.

**Then it stops once, and only once.** It shows you two things.

The first is the triage block: every ticket it captured, its grade, the rule that fired, the exact words that fired it, the grade it beat, and why. **The rule that is wrong for your business is usually visible in the first ten of these.** Correcting it costs you one line, and correcting it on day one is worth more than correcting a hundred drafts in month three.

The second is the first queue file, opened. Two or three drafts, with the severity, the reason, and the customer's own words above each one. Nothing has been sent. The box under each one is what tells the desk tomorrow morning that it went.

Set your expectation about those first drafts now: **they will carry no numbers at all**, because nothing is in your proof inventory until you put it there. Copy with no numbers is the correct output on day one, not a thin one.

You end day one with a strategy folder in your own language, real tickets on a real ledger, a first queue you have corrected, a dashboard you can click through, a registered schedule, and a list of every assumption it made.

**The next weekday.** The sweep runs at 06:45. The standup runs at 07:30 and writes `brief-latest.md`: what today is for, what is waiting on you, what is blocked, and what changed about the Employee itself. The reply desk runs at 08:15 and writes today's drafts. The churn watch runs at 09:20 and writes a dossier for anything that tripped.

You open the brief, open the queue, edit anything you want, send by hand, tick what you sent, and grant the remedies you agree with. Tomorrow's standup reads those ticks and turns them into answered dates.

**Wednesday** adds the deflection desk. In week one it usually writes nothing, because no theme has recurred enough yet. A quiet Wednesday is the correct outcome, not a failure.

**Friday afternoon** is the report. **Set your expectation about the first one too.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of your own data and it will not estimate the rest. The week over week column is empty on your first Friday and fills in as you accumulate weeks. If your ticket count is genuinely low and every routine ran, it will say so in one line and name that as the best possible week, because a support report that reads as a failure when nobody complained teaches you to want tickets.

**Last weekday of the month**, the taxonomy refresh re-tests every theme and every severity rule against a month of real outcomes. This is the routine that finds the thing nothing else can: a ticket graded low, that took four exchanges, and ended in a refund. That is a rule that has been quietly doing the same thing to every ticket like it, all month.

**First weekday of next month**, the intake routine re-reads your pages, applies what changed, and rebuilds.

**The thing that will annoy you in week one**, and it is better heard now than discovered: drafts you have to send yourself, and refunds you have to grant yourself before you send the reply that mentions them. Both are on purpose. A routine that can send can send the wrong thing to somebody who already paid you, and a reply that says a refund was issued, sent before the refund is issued, is a false statement to somebody who is already unhappy. Neither is recoverable by editing afterwards. A queue costs you a few minutes of your morning.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the reply queue, neither do the macros, and neither does the arithmetic behind the Friday report.** On a machine with no browser control at all you still get a plan every morning, drafts to send, dossiers on the accounts your ledger says are at risk, and a scored week every Friday.

**What you lose is the intake, and the intake is where every ticket comes from.** Your mailbox and your helpdesk sit behind your login, and those are the two surfaces where somebody is waiting with a clock running. Without a browser the sweep falls back to fetching public pages, which reaches your review listings, your marketplace pages, and your public forums, and reaches nothing private at all.

There is a straightforward answer if that is your situation. Paste the tickets you want answered into `tickets/tickets.jsonl` yourself, one line each to the shape in `CONTRACT.md` section 2.5. The rest of the loop works exactly as designed: the reply desk drafts, the standup reconciles your ticks and computes the clocks, the churn watch reads the same ledger, and Friday still scores.

| Routine | With browser control | With none |
|---|---|---|
| `csat-inbox-sweep` | Reads your mailbox, your helpdesk, your listings, and your forums | Public listings and forums only. Nothing behind your login |
| `csat-desk-standup` | Never uses one | Identical. Full function |
| `csat-reply-desk` | May also save a private draft in your helpdesk, if you turned that on | Queue files, which is the default mode anyway |
| `csat-churn-watch` | Adds the billing and usage wires read off your own account screens | The seven ledger wires still fire. The dossier says which two it could not test |
| `csat-deflection-desk` | Checks your help centre before drafting an article | Every macro still written. No article for a theme it could not check |
| `csat-satisfaction-report` | Full page plus your rating movement and the Friday flow replay | Full page except the listing cells. No replay, so a drifted flow goes unnoticed |
| `csat-desk-intake` | Researches your business, probes every channel, builds and opens the dashboard | Research narrows to what it can fetch. Signed in channels are written as unconfirmed. The dashboard still gets built |
| `csat-taxonomy-refresh` | May re-read a truncated ticket that decides a split | Runs on ledger evidence, which is files |

Seven of the eight produce their main deliverable with no browser at all. That is most of the product, not a consolation prize. **But do not buy this expecting it to read your support mailbox without one, because it will not**, and it is better to know that now than on your second Tuesday.

A missing browser does not get its own status. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«CSAT_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/csat-<id>/SKILL.md  the eight routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  strategy/                  product, channels, tone, policy-limits, themes,
                             proof-inventory, CHANGELOG
  tickets/                   tickets.jsonl, the digest, and any dated fallback file
  desk/                      desk.json, DESK-BOARD.md (you tick it), inbox.jsonl
  queue/                     YYYY-MM-DD-reply.md and -community.md
  risk/                      risk.jsonl, one dossier per flagged account, the digest
  macros/                    one reusable answer per recurring theme
  help/                      help article drafts, waiting for you to publish them
  report/                    manual.md (yours, never overwritten) and the weekly files
  dashboard/                 src/, build.mjs, and the built index.html
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per site flow,
                             each written by the routine that uses it on the first run that needs it
  state/                     one small JSON per routine, plus browser-lock.json
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning plan, overwritten daily, capped at thirty lines
  csat-latest.md             the machine detail, overwritten, uncapped
  improvements/CHANGELOG.md  every change the Employee made to itself, with the undo
  briefs/, archive/          dated copies, and anything older than thirty days
```

Nothing is ever deleted. Anything older than thirty days moves into `archive/` with its path preserved. **A dossier for an account that is still flagged is never archived**, whatever its date, because an at risk account that has not been cleared is live evidence.

Three things are yours and no routine overwrites them: `desk/DESK-BOARD.md` free text, `report/manual.md`, and the `## Corrections` section at the bottom of every routine and every root document. Tick a card and the standup picks it up tomorrow. Unticking reopens it: your mark wins in both directions.

**Two ledgers carry statuses only you can write.** On `tickets/tickets.jsonl` those are `resolved` and `dropped`: the Employee writes `new`, `stale`, `drafted`, and `replied`, and only you can say a customer's problem actually went away. On `risk/risk.jsonl` they are `saved` and `lost`. The Employee writes `at-risk` and `cleared`, and **`cleared` is not `saved`**: cleared means the evidence receded, which sometimes means the customer calmed down and sometimes means they quietly left. The Friday report writes `n/a (no outcome recorded)` rather than counting a cleared flag as a save, which is honest and slightly useless, and one line from you fixes it.

---

## Stopping it, and approving the way it changes

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file. To stop just one routine, put its id on a line inside that file and leave the rest running.

**Know what a pause costs before you take one.** A paused support desk is a desk where customers are still writing in and nobody is capturing it, and no later run recovers those days. The first brief after you delete the file says so, naming the dates it covers, so you get an explained gap rather than a hole in your ledgers.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**A self edit can make its allowed work better and can never widen what is allowed.** It will never write itself permission to send, to publish, to resolve a ticket, to mark one read, to touch a billing control, to grant a remedy, or to confirm its own severity rules.

**It notifies you only when you are the thing blocking it.** An expired login, a credential it needs, a support surface that has gone dark while customers are still writing in, or a stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours. **A customer about to leave never earns one**, however urgent it feels, because that would put their name and their unhappiness on your lock screen, and a channel that fires every morning is a channel you mute. Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-out-of-window` `skipped-already-ran` `skipped-paused` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser, and in this kit that usually still produced a deliverable. The three `skipped` values are all correct behaviour, not faults.

Blockers appear in your morning brief word for word. A blocker that has been open for more than a week gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan, and on a support desk a confident board on a morning when nothing has run for a week looks exactly like a working system.

**No routine ever writes a customer into a run record.** No name, no account handle, no email address, no order number, no quote, no ticket id. Run records carry counts, ids, paths, cursors, and blockers. The detail stays in the queue files, the dossiers, and the digests, inside your working folder, because the run log is the file most likely to end up in a screenshot.

---

## Working alongside the other AI Employees

`csat-latest.md` is the whole handover surface, and it carries paths, theme ids, channel values, and dates. **No quote, no customer name, no account slug, and no dossier line ever leaves this folder.**

| Employee | They own | This one hands over | This one never |
|---|---|---|---|
| **SEO or Content Employee** | Keyword research, the editorial calendar, writing, publishing, search console | The theme ids and the help drafts in `help/`, named in `csat-latest.md` for it to read and open itself | Writes or publishes an article, touches a content repo, or edits an editorial calendar |
| **Social Media Employee** | The organic calendar, community engagement, replies | The forum rows, so it knows which surfaces this desk already reads | Posts, replies, or reacts anywhere |
| **GTM, Sales, or Ad Manager Employee** | Prospecting, outbound, the pipeline, live ad accounts | **Nothing at all** | Exports a customer, a quote, an account slug, or a ticket for any outbound purpose |

**That last row is worth being blunt about. A support ledger is not a prospect list.** Every line in it is somebody who wrote in because something was wrong, and handing that to an outbound routine is the fastest way to turn a support relationship into a complaint. There is no setting that enables it and no card that requests it.

If you also run a Content or SEO Employee, the help drafts in `help/` are exactly the sort of page it would want. Decide once whether publishing them sits with you or with that Employee, and write the answer into that Employee's own folder. This one drafts and publishes only where you released the channel, either way.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
