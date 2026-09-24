# Ad Manager

<img src="https://club.reinventing.ai/img/employees/ad-manager-employee.webp" alt="Ad Manager Employee" width="100%">


**Role:** paid advertising, end to end, up to the spend button.
**What it replaces:** the media buyer retainer, for the parts that repeat.
**What it is:** seven scheduled routines that run on your own machine, on your own schedule, against your own ad accounts.

This is not a chat window and not a service running somewhere else. It is seven jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

Every weekday it checks your conversion tracking is still firing, reads what your accounts cost and what they bought, produces a creative set, and works the next thing on your board. On Friday it hands you a ranked list of what to change next week, with the evidence beside every line. At the end of the month it tells you which kind of creative is actually earning on your account, and rewrites the rules it produces against.

**It can build in your accounts and it can spend. Whether it does is a setting you own: shipped, nothing is created in an account and nothing is spent, every campaign arrives as a build sheet ready to paste, and `RELEASES.md` hands a channel over with the ceiling you set.** You make every object and you spend every pound. Held is the default because it is what lets you leave this running on day one. Released is where a channel goes once its drafts have earned it.

---

## What it owns

Your paid advertising, end to end, as files.

- **Creative production.** One set per weekday, built against a doctrine that was rewritten last month from your own measured results rather than from taste. Images and exact strings in a dated folder, with the screen to upload them to named at the top.
- **Performance reading.** One row per object per day, at account, campaign, ad set, and creative level, with the screen, the date range, and the read date beside every figure.
- **Measurement integrity.** Your primary conversion event confirmed before any other number in the day is trusted, and that verdict stamped onto every row it produced.
- **The weekly change list.** Ranked, paste ready. Every line names the exact screen, the current value, the proposed value, and the evidence row it came from.
- **The monthly creative retrospective.** A month of creative folded against a month of performance, scored by angle, format, hook, and offer framing, and the doctrine rewritten where the evidence disagrees.
- **Build sheets.** Campaigns, negative keyword lists, conversion action specifications, audiences, and upload packets. Complete, ready to paste, never created.
- **Pacing and guardrails.** Spend against your recorded ceiling, and six categories of setting checked every morning against what your plan says they should be.
- **Your dashboard.** Built from scratch on the first run, tabs chosen from what your accounts actually have, rebuilt when the plan changes.

---

## The seven routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `ads-account-read` | Weekdays | 06:45 | Confirms your conversion event still fired, then reads yesterday's spend, delivery, and results at four levels and appends them to the metrics ledger. |
| `ads-desk-standup` | Weekdays | 07:30 | Folds every ledger, turns yesterday's ticks into dated facts, rewrites the board, and writes your morning brief. |
| `ads-creative-studio` | Weekdays | 08:15 | Produces one creative set against the doctrine, what has decayed, and your feedback. It uploads nothing; you approve or reject each set on the review page. |
| `ads-build-desk` | Weekdays | 09:15 | Works the next ready card and assembles what it asks for as a complete local file, ready to paste. Where you released the ad account, it publishes the approved set through a connection you already have and writes a receipt. |
| `ads-change-list` | Fridays | 16:00 | Scores the week from the metrics ledger alone and writes the ranked list of what to change next week. |
| `ads-account-intake` | First weekday of the month | 13:00 | First run: researches your business, reads your account structure once, writes the plan folder, builds the dashboard, registers the schedule. Monthly: re reads the evidence and applies what changed. |
| `ads-creative-retro` | Last weekday of the month | 14:00 | Scores a month of creative by angle, format, hook, and offer framing, and rewrites the doctrine. |

Three things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**No routine sits on a Sunday.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error.

---

## These are scheduled routines, not skills

This is the thing most people get wrong on day one, so it is worth being direct about.

**Do not copy these folders into your harness's global skills directory.** They are scheduled work. Putting them in a global directory loads all seven into every session you open, and lets one be invoked at three in the afternoon on a Tuesday, where it reads the clock, sees it is outside its window, records `skipped-out-of-window`, and exits having done nothing. That is the routine behaving correctly and it is also a waste of everybody's time.

Point your harness at `«ADS_ROOT»/routines` as a routine source, or register one scheduled job per routine pointing at that path. `CAPABILITIES.md` section 9 has the exact commands for your harness and for both common operating system schedulers.

**And keep one copy, not two.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run. With two copies you write into one and it reads from the other, and the correction never takes effect.

---

## The loop that makes it a system

Each of the seven exists because it is a link in one chain.

The read routine confirms your tracking is alive and appends what the account cost. The studio produces a set against the doctrine and files a card. The build desk turns a card into a sheet you can paste. You upload the set and tick the box. You make the change and tick the box. **The standup turns each of those ticks into a dated fact**, and those two facts are the ones nothing else can produce: a change with a date on it, and a creative that actually went live. The change list reads a week of that and scores what your applied changes actually did. The retrospective reads a month of it and works out which kind of creative earns on your account. The intake re reads the whole thing monthly and corrects the plan it all runs on.

Break one link and the chain stops producing numbers. **The two ticks are the link most likely to break, and they are yours.**

---

## The two things it stops for

There are exactly two, and this list is the product. Read it before you install.

**1. Sending or spending.**

- **Nothing is created or saved inside an account that can spend, in any state, including a draft.** Not a campaign, not an ad group, not an ad, not an asset, not a keyword, not a negative list, not an audience, not a conversion action, not a tracking template, not a saved view, not a saved report, not a rule, not a label.
- **There is no paused first exception.** A campaign created paused is still a campaign in an account that can spend, sitting one click from delivery with its budget field already filled in. What you get instead is a build sheet: the same campaign, one paste away, zero clicks from spending.
- **It does not open a create flow, a campaign wizard, a conversion action form, an audience builder, an asset library, or any screen in edit mode, even to look, even to read a field limit.** Several platforms autosave a draft the moment such a flow opens, and the platform decides that, not the agent. A screen it never entered cannot be submitted by accident. A field limit comes off the platform's own published documentation instead, and where that cannot be reached the sheet says so and tells you to watch the counter as you paste.
- **No budget figure is ever typed into an account.** The daily cap you wrote goes onto the sheet, where you read it and type it yourself. It never accepts a platform suggested budget, a suggested bid, or an auto applied recommendation, **and it never dismisses one either**, because a dismissal is still a click on a control that writes to your account.
- **Inside an account it does three things and nothing else:** navigate, read, and set a date range, a filter, or a column on a report view, then set the view back to what it found.
- **Nothing in this kit has an outward surface.** No email, no DM, no post, no form submit, no publishing route. There is no composer anywhere in the seven routines, and the only switch that adds an outward action is a row you write in `RELEASES.md`.
- **On a professional network it is read only, always, with no exception.** It has no reason to be there and only ever arrives if a link redirects it.

**2. Private keys and credentials.**

- It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms.
- It never writes a key, a token, a password, or a URL with an embedded credential into any file, sheet, card, report, log line, or command. **If part of a tracking snippet is a key, it does not go into a sheet at all:** the sheet names the account screen you copy it from and stops.
- If you offer it a key during setup, it will stop you and tell you it is not needed. **Nothing in this kit ever needs one.**
- On a login wall, a checkpoint, or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

**Nothing in the kit creates an object in your account until you write the row.** `RELEASES.md` names the account and one of two actions: `prepare`, which creates an approved set as a paused campaign so activating it is your click, or `publish`, which creates and activates it inside the total daily budget you recorded. Either way it runs through a connection you already have, never a browser create flow, every call lands as a line in a receipts file with the ids the platform returned, a set is only eligible once you approved that exact version on the review page, and the brief shows approved, published and delivering as three separate facts. There is no other switch, and no routine with the capability buried inside it.

**In this Vietnamese variant the row does not switch it on.** Anh/chị đã chốt: đội nhân viên AI không tạo, không bật, không tăng ngân sách trong tài khoản quảng cáo, kể cả khi `RELEASES.md` có dòng `prepare` hay `publish`. Phiếu dựng dưới `build/` vẫn là sản phẩm, người của anh/chị dán và bật. Muốn nới lại, anh/chị ghi một dòng có ngày trong `## Corrections`.

---

## What it does without asking

The two guardrails above are the whole list. Everything else it owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It rewrites your creative doctrine when a month of measured results disagrees with it, and retires an angle that has not earned across three consecutive months. It decides which angle to build against today, what format, and how many variants. It decides what goes on Friday's list and in what order, and which line is the kill and which is the scale. It registers its own scheduled jobs, and moves a fire time to clear a collision it detected. It creates its own board cards, advances them, and ticks the ones whose definition of done is a file it can verify. It builds and rebuilds the dashboard. When a screen moves and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it copies that one line into a quarantine file and rebuilds the index from the rest.

Every one of those changes lands as one line in `plan/CHANGELOG.md`: the date, the routine, the file, what changed, and the evidence path. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own.

Two things stay outside all of that, because they are the first guardrail wearing different clothes: an object or a setting inside an account, and anything on the far side of a spend control. Those get named, never touched. **If a mismatch is so small it feels absurd to leave, that feeling is the reason the rule exists.** You get a card carrying the exact recorded value, the exact observed value, and the screen they sit on, so closing it is one paste.

**Every card carries a `done_kind`.** A card whose definition of done is a file on your machine is `local-artifact`, and the routine ticks it itself the moment it has verified that file. A card whose definition of done is a change in an account, an upload, or a credential is `member-action`, and **only your tick closes it.** No routine writes done on one of those from anything else: not from a run record, not from an artifact appearing on disk, not from a metrics row showing the change took effect, and not from a note written inside the card. That single field is what lets it run at full speed on its own work without ever quietly claiming credit for something you have to do.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## It installs nothing into your global skills directory

No routine here creates, authors, or installs anything in your harness's global skills or plugins directory. Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took.

**The one that matters here is image generation.** If you have an image helper installed, your creative sets ship with artwork. If you do not, they ship as text only: every slot with its exact string and character count, the images section saying plainly that no generator is configured, and one line telling you what to supply. The card is filed either way and nothing waits.

Self repair means the same thing. The first time `ads-account-read` needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a moved control is fixed in the same file. Neither one is a helper installed somewhere global, and neither is silent: both go in the run record as one line.

**Nothing has to be set up for that to work.** No flow file ships and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why the `recipes/` folder starts with a single file in it and fills up over the first week.

---

## What it needs from you

**Ad accounts you are already signed in to, in a browser your agent can drive.** This is the one that decides whether the kit is worth installing. It never signs in to anything, so a harness that launches a clean automated browser has handed it a browser with no session, and every read of your accounts lands on a sign in wall. `CAPABILITIES.md` section 1.1 is the check, and section 7 is the honest accounting of what you lose without it. **Unlike some Employees, this one genuinely needs the browser**, because the thing it manages lives behind your login and no public page carries yesterday's cost per result.

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning. **It matters a little more here than elsewhere:** a reporting day nobody read is a permanent gap in the ledger, because filling it later would destroy the only record that a screen was unreachable that morning.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. It matters twice over here, because creative sets are written as a burst of image files and a sync client mangles those too. Something like `D:\AgentOps\ad-manager` or `~/agent-ops/ad-manager` is right. If you point the install at a synced path it moves the kit to a local one, tells you where it went, and carries on.

**Two numbers, and they are the only things it will ask you for.** Your monthly ceiling and your daily cap. They are the only two values in the whole kit that are never researched, never inferred, and never derived from what your accounts currently spend, because they are your money. The daily cap is the total across every campaign it runs, in your account's currency. Leave them blank and they are recorded as unresolved, which the ledgers guard as zero and which no publish ever treats as an authorised figure: the account still gets read, and every delivering campaign gets ranked as spending against no recorded ceiling, which is true and useful. This Vietnam variant also asks, one question at a time and without waiting, how you close orders, which sales software holds them and which order statuses count as delivered, refused or returned, which products need a document before they are advertised, the provinces and communes you deliver to, who holds the administrator role on each account, your working days, how you want to be addressed, your sale and holiday periods, and how many creative sets a week your budget carries. `CONTRACT.md` section 10.2 lists where each answer goes.

**Your own public presence.** The install investigates before it asks anything: your site, your pricing or checkout page, your landing pages, your public collateral. The more of your positioning is public, the less there is to ask you about. In practice one URL plus the two numbers is the whole input.

**A few minutes on a weekday.** Read the brief. Upload the set when one is ready. Make the changes you agree with and tick them. **The ticks are the part the whole system runs on**, and they take about thirty seconds.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«ADS_ROOT»` everywhere in this kit.
10. **A usage budget.** On a Claude Pro or Max plan an employee costs nothing beyond the plan; it spends a share of the plan's usage limits. Measured on one employee as the example, the GTM Engineer, over 27 scheduled runs, that share was about 6 percent of everything one Max seat sent to Claude in ten days of heavy use. On an API key it is about $19 of Opus 5 usage at list price on a plain weekday, and an API key loses the browser lane. The repo's `docs/COST.md` has the table and the dates.

**Connections that turn the browser lane off, all optional.** For a Meta account, Meta's own Ads MCP server or Ads CLI reads spend, delivery, results and signal health without a screen; for a Google account, Google's own read only Ads MCP server does the same; Google's Analytics MCP server covers the conversion check. Connect them in your own harness and the install checks for each one and works without it. Every route is used read only, and nothing here can spend or publish unless you release that channel in `RELEASES.md`. The table, with the read only form of each route, is section 4b of `CAPABILITIES.md`.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

**This is the Vietnam variant, `ad-manager-employee-vn`, and the public npm package does not contain it.** Install it with the installer bundled in the Vietnam fork: `node installer/cli.mjs hire ad-manager-employee-vn --to <folder>`. Never run `npx ai-employees upgrade ad-manager-employee` on this folder: that is the English kit, and it would replace the Vietnamese routines. `CONTRACT.md` section 8.4 carries the upgrade line this variant uses.

Two steps. Your agent does the rest.

**1. Extract the kit to a local folder.** Files sit at the root of the archive. Anywhere on your PC works, as long as it is not inside OneDrive, Dropbox, Google Drive or iCloud.

**2. Open your agent in that folder and say "install the Ad Manager from this folder".** That is the whole instruction. It reads `INSTALL-PROMPT.md` itself and follows it, checks your machine, points its scheduler at `«ADS_ROOT»/routines`, and registers the schedule. If you would rather paste, open `INSTALL-PROMPT.md` and copy everything between the two markers into your agent. It investigates your business from your own public presence, reads your account structure once, writes your plan folder, creates your creative doctrine, seeds your board, builds the dashboard and opens it, and registers the seven scheduled jobs. It asks you about two things and it does not wait for the answer.

That is the install. A few things are worth knowing once it is running:

- **Keep one copy of the kit.** Every routine ends with a `## Corrections` section you write into and the routine reads on its next run. With two copies you write into one and it reads from the other. Your agent points its scheduler at this folder and never copies the routines into a global skills directory. `CAPABILITIES.md` section 2 says what I was able to confirm about each of eleven agents, and what I could not.
- **Let scheduled runs go without a prompt.** A routine launched in a prompting mode does not fail at 06:45, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«ADS_ROOT»` if yours supports scoping. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken either stop.
- **Let one full week happen before you change anything.** The first Friday change list will be mostly `n/a` and the first monthly retrospective will retire nothing. Both are correct. They have one period of your own data and they will not estimate the rest.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, whichever the mistake belongs to. Every routine reads all three at the top of every run. This is how the kit gets good at your accounts specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, and local command execution. The kit does not run without those four.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 06:45 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to.** This is the one people get wrong, and in this kit it is not optional in the way it is elsewhere. Ask your harness directly: does your browser control attach to the profile I am signed in to, or start a fresh one.

**Optional, if you already have it.** The kit does not ship these and does not need them. Every row has a fallback the routine takes on its own, without stopping and without asking.

| Helper | If you have it, used for | Fallback when you do not |
|---|---|---|
| An image generation helper | The images in every creative set | Text only sets. Every slot with its exact string and character count, and one line saying what to supply. The card is filed either way |
| An image compression helper, or a local image tool | Getting images under the size ceiling | Images shipped uncompressed with their byte sizes named |
| A copy review helper | A final sweep before you paste | `scripts/copy-check.mjs`, which ships inside this kit and is the judge either way |
| Your own search endpoint | The market scan on the first run | Whatever web search your harness has. Where there is none, it writes the exact queries it would have run so you can run them |

Helpers are detected by name and used when present. If you run a harness where they do not exist, nothing breaks and nothing is installed for you.

**Forbidden, deliberately.** No routine may call anything that publishes, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend. That includes publishing helpers, search console and indexing helpers, and paid data endpoints. **Spend is the one thing this kit exists to hold the line on, and that includes spend on itself.**

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your site, your pricing page, your checkout, your landing pages, and whatever public collateral it can reach. Then it opens your ad account **once**, reads the account list, the object tree, the conversion list, the read screens, and the current values of six guardrail categories, and closes the tab. **That is the only time that routine ever opens an account screen for the life of the kit.** Every month after it reads the metrics ledger instead, because by then the ledger carries the query, the range, and the read date beside every figure, which a live screen does not.

Then it asks you about two things, both of them money, and keeps working while it waits. It writes your plan folder, creates your creative doctrine, seeds your board, builds `dashboard/index.html` and opens it, and registers seven scheduled jobs.

You end day one with a plan folder in your own language, a doctrine with every rule marked `not tested` because nothing has run yet, a dashboard you can click through, a schedule that is registered, and a list of every assumption it made.

**The next weekday.** The read routine runs at 06:45, checks your conversion event, and appends your first metrics rows. The standup runs at 07:30 and writes `brief-latest.md`: what the account cost yesterday and what it bought, what is waiting on you, what is blocked. The studio runs at 08:15 and writes your first creative set. The build desk runs at 09:15 and works the next ready card.

You open the brief, open the set folder, upload it if you like it, and tick the card. That tick is what makes the retrospective able to score an angle a month from now. Or run `node scripts/review.mjs --serve` and approve, reject or send it back on the review page, which is the same decision bound to the exact version you saw, and a rejected set leaves the queue with your note instead of blocking the next one.

**Friday afternoon** is the change list.

**Set your expectation about that first one.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of your own data and it will not estimate the rest. The numbers that are there carry their source. The week over week column is empty on your first Friday and fills in as you accumulate weeks.

**Last weekday of the month**, the retrospective scores what it has. On a first month it will almost certainly say `not tested` against most categories and change nothing, and it will say so in the file with the counts and the floor beside it. **A doctrine rewritten on four rows is a doctrine rewritten on a coin flip somebody wrote down as a rule.**

**The thing that will annoy you in week one**, and I would rather you hear it from me than discover it: build sheets you have to paste and creative sets you have to upload. Both are on purpose. A routine that can create a campaign can create the wrong campaign, and a routine that can set a budget can set it in the wrong place with an extra zero on it. Neither mistake is recoverable by editing afterwards, and both spend money while you are asleep. **A paste costs you two minutes.**

---

## Where things live

```
«ADS_ROOT»/
  CONTRACT.md                the spine. Every routine reads it first, every run
  CAPABILITIES.md            capability to route, per harness. Yours to correct
  SCHEDULE.md                the only place a cadence, fire time, window, or budget lives
  ROLE.md                    the role charter
  README.md                  this file
  INSTALL-PROMPT.md          the setup prompt
  routines/ads-<id>/SKILL.md the seven routines
  scripts/runlog.mjs         the only sanctioned way to append a run record
  scripts/guard.mjs          the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs     the scripted judge for anything about to be written
  plan/                      offer, account-map, measurement, guardrails,
                             positioning, voice, proof-inventory, CHANGELOG
  metrics/daily.jsonl        one row per object per day, with a source per figure
  creative/                  doctrine.md, ledger.jsonl, and one folder per set
  build/                     campaign, negatives, conversion, audience, upload sheets
  changes/                   ledger.jsonl and one change list per week
  board/                     board.json, LAUNCH-BOARD.md (you tick it), inbox.jsonl
  dashboard/                 src/, build.mjs, and the built index.html
  recipes/                   BROWSER-RECIPES.md, plus one JSON file per account flow,
                             each written by ads-account-read on the run that needs it
  state/                     one small JSON per routine, plus browser-lock.json
  improvements/CHANGELOG.md  every change a routine made to its own instructions
  run/                       one line launcher per routine, written only where your
                             scheduler needs the invocation in a file rather than inline
  runlog.jsonl               append only, one line per run
  brief-latest.md            your morning brief, overwritten daily, capped at thirty lines
  ads-latest.md              the machine detail, overwritten, uncapped
  briefs/, archive/          dated copies, and anything past its archive window
```

Nothing is ever deleted. Anything past its archive window moves into `archive/` with its path preserved, and that includes a ledger line that would not parse: it is **copied** into a quarantine file with its line number, never removed from the ledger.

**Five things are yours and no routine overwrites them:** the free text you write under a card in `board/LAUNCH-BOARD.md`, `## Member claims` in `plan/proof-inventory.md`, `## Change list settings` in `plan/guardrails.md`, `## Screens never opened` and `## Objects not ours` in `plan/account-map.md`, and the `## Corrections` section at the bottom of every routine and every root document.

**Two of those are worth knowing about now.** `## Screens never opened` is where you list any screen you do not want an agent on, and every routine treats it as binding above its own defaults. `## Change list settings` is where you set how big a movement has to be before it counts and how many days of data it takes before a verdict is allowed, and either line you write there overrides the shipped default.

**The proof inventory is split, and the split is the whole copy gate.** `## Member claims` holds only lines you confirmed, and no routine writes there. `## Agent sourced` is append only, written by the change list and the retrospective, and every line in it carries the ledger path and the date it was read from your own files. **A figure read off an account screen never becomes a proof line**, because that is a number about your account, not a claim about your business.

Tick a card in the board and the standup picks it up tomorrow. Unticking reopens the card: your mark wins in both directions, so a card you tick by mistake goes back on the board at the next standup.

---

## Stopping it, and how it changes

**To stop it, create an empty file called `PAUSED` in the folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file. **To stop just one routine, put its id on a line inside that file** and leave the rest running.

No routine ever creates, writes, or deletes that file. A routine that could clear its own pause would be a routine you cannot stop.

**To turn one routine off for good rather than for a week**, set its `days` to `off` in `SCHEDULE.md` and leave the row in place. A missing row produces a failed run record every time the job fires. `days: off` produces a clean skip instead.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, that a screen moved for good, or that a check has caught nothing in six runs, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know, without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `## Corrections` section. That line outranks the routine's own instructions from its next run onward.

**One thing it can never teach itself.** No self amendment ever relaxes either stop, the save test, the rule that no create flow or edit mode screen is opened, the rule that no budget figure is typed into an account, the rule that your ceiling and cap are never derived, the read only rule on a professional network, or the evidence floors that stop a doctrine being rewritten on noise. **A self edit can make allowed work better. It can never widen what is allowed.**

**It notifies you only when you are the thing blocking it.** Four cases, once each, never twice for the same problem, never outside your working hours, never on a first run.

1. A session expired on an account it needs, so it will be blocked every morning until you sign in.
2. A credential it named is absent and a phase cannot proceed.
3. **Your primary conversion event has stopped firing while spend is live.** Money is leaving against no measurement and every figure downstream of it is guesswork presented as data. This is the one this kit exists to catch, and it is urgent by the hour.
4. The browser lock is held by a run that died, so every browser routine is queued behind a lock nobody holds.

Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too, so you lose speed and never information.

---

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-out-of-window` `skipped-already-ran` `skipped-paused` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. The three `skipped-` values are all correct behaviour, not faults.

Blockers appear in your morning brief word for word. A blocker open for more than seven days gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan.

**Two things it will never do to make a report look better.** It will never write a zero where the answer is that nobody read, and it will never resolve a finding on a check that did not run. A gap in the ledger is a fact about a morning when a screen was unreachable, and filling it destroys the only record of that. Where it does not know, you get `n/a` and the reason.

No routine ever writes a secret, a credential, a creative string, an account figure, or a person's name into a run record. Run records carry counts, ids, paths, cursors, and blockers. The detail stays in the ledgers and the sheets, inside your working folder.

---

## Working alongside the other AI Employees

If this is the only Employee you have installed, everything works exactly the same way. Nothing here depends on another one existing.

| Employee | They own | Ad Manager hands over | Ad Manager never |
|---|---|---|---|
| **GTM Engineer** | Positioning research, outbound, the launch board, and the campaign build sheets an account was first created from | Nothing. Each writes into its own folder | Reads its folder, writes its files, or ticks its handoff card |
| **SEO/AEO Employee** | Keyword research, editorial calendar, writing, publishing, internal linking, search console | The category language and the angle list | Writes or publishes an article, touches a blog repo, requests indexing, or edits a content calendar |
| **Social Media Employee** | The always on organic calendar, community engagement, replies | Positioning language and the angle list | Runs the calendar, replies to anyone, posts, or lets paid creative reach an organic surface |

**If you also run the GTM Engineer**, the handoff is a dated card on that Employee's board. Once it is closed, live account reading belongs here and that Employee's paid guard goes read only and stops assembling campaign skeletons. **Neither Employee was ever allowed to click**, so the handoff moves who writes the specification and never who is allowed to change an account.

`ads-latest.md` is the one file the others read, and specifically its `## For other employees` block. It carries paths and dates, never creative copy, never account figures, and never personal data.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
