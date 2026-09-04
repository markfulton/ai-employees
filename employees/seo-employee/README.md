# SEO Employee

**Role:** organic search, end to end.
**What it replaces:** the content agency retainer, for the parts that repeat.
**What it is:** seven scheduled routines that run on your own machine, on your own schedule, against your own properties.

This is not a chat window and not a service running somewhere else. It is seven jobs your agent runs at fixed times each week, in a working folder you own, reading and writing plain files you can open.

It takes your sites and builds the search motion around them: which topics you have a right to rank for, what to write next and why, an article a day written against what actually ranks today, published to your property, requested for indexing, and measured on Friday. Then it uses that measurement to decide what to write next month.

**It publishes.** That is the part most tools stop short of. An article this Employee drafted, to a property you named, verified live by loading the URL and reading what rendered. It never emails anyone, never comments anywhere, never posts to a third party surface, and never spends a penny.

---

## What it owns

- **Keyword research and demand validation.** Every planned article's keyword is confirmed against a live result set: real pages rank for it, they are articles rather than product listings, they match the intent claimed, and the field is beatable by your property this quarter. A keyword that fails any of those is dropped rather than written.
- **The topic map.** Pillars, clusters, and the internal link map that stops articles being stranded. A pillar carries a clause on why your business is entitled to rank for it, and a pillar that cannot honestly carry that clause does not go in.
- **The editorial calendar.** Entries specified well enough that the article can be written from the entry alone: the keyword and its intent, two or three competitors with a clause each on why they are weak, the angle, the one thing this article has that nothing else does, the outline as questions, the FAQ, the internal links, and the call to action.
- **Drafting.** The live result set pulled that morning, three to six ranking pages read, their gaps named, the body written in your voice, two to three verified authority links, a hero image, and alt text built on the target keyword.
- **Publishing.** By each property's own route. A repository backed site gets a post file, a registry entry, a sitemap update, a build, and a push. A site with an editor gets driven through a flow the Employee learned itself the first time. Either way the live URL is loaded and read before anything is recorded.
- **Indexing.** Every sitemap you declare, unioned and kept fresh, and your indexing allowance spent on the newest and least discovered posts across your whole roster rather than in file order.
- **Measurement.** A weekly scoreboard where every figure names the screen it came from and the window it covers, and a short rolling file the rest of the kit reads instead of the whole history.

---

## The seven routines

Every routine has an id. The id is the folder name under `routines/`, the `name` key in that folder's `SKILL.md`, and the name of the scheduled job. All three are the same string, always.

| id | Cadence | Shipped fire time | What it does |
|---|---|---|---|
| `seo-standup` | Weekdays | 07:15 | Folds every ledger and every run record since yesterday, reconciles your board, marks the one card today's draft run works, and writes your morning brief. |
| `seo-draft-run` | Weekdays | 08:00 | Works that one card: pulls the live result set, reads what ranks, writes the body, the metadata, the links and the hero, and leaves one complete draft. |
| `seo-publish-run` | Weekdays | 09:15 | Takes the oldest ready draft, publishes it to its property, verifies the live URL, and records it. |
| `seo-index-sweep` | Tuesdays | 11:00 | Unions every declared sitemap, requests indexing inside your allowance, and keeps every sitemap fresh. |
| `seo-calendar-refill` | Wednesdays | 13:00 | Reads the runway on every property, and refills only the ones running low. Most weeks it records the counts and exits. |
| `seo-rank-review` | Fridays | 16:00 | Reads your search performance and analytics screens, classifies every published article by a fixed rule, writes the scoreboard, and files what it found as cards. |
| `seo-intake-and-map` | First weekday of the month | 14:30 | First run: discovers your properties, writes your strategy files, creates the ledgers, registers the schedule. Monthly: re-reads a month of evidence and rebuilds. |

Four things about that table worth knowing before you change it.

**The times above are the shipped defaults. `SCHEDULE.md` is where they actually live**, and it is the only file in the kit that carries a cadence, a fire time, a window, or a budget. If `SCHEDULE.md` and this table ever disagree, `SCHEDULE.md` wins, because that is the file the routines read and the file you edit.

**Every routine has a window, not just a fire time.** What a missed fire does depends on your scheduler: the Desktop app and Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. A catch up lands at an unplanned minute, sometimes beside another routine's. The window is what makes a late or duplicated fire harmless: outside its window a routine records that it skipped and exits. Do not remove a window because a run looks overdue.

**No routine sits on a Sunday, and three of them would break if one did.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled there shares a period key with the following week and one of the two runs is lost with no error.

**One article per run, never a catch up batch.** A property that receives four articles in one morning looks to every reader exactly like what it is.

---

## The loop that makes it a system

Each of the seven exists because it is a link in one chain.

The intake writes your properties, your topic map, and your voice. The refill turns last Friday's rank evidence into fully specified entries. The standup promotes the next entry to a card and marks exactly one card as today's, which is the decision nothing else in the kit can make for itself. The draft run researches what ranks and leaves one complete draft on disk. The publish run puts it on your property and proves it is live. The index sweep gets it discovered, which is the difference between an article that ranks in a month and one that is found in three. The rank review measures what it earned and files refreshes and dead clusters back onto the board, which is what makes next month's calendar better than this month's.

Break one link and the chain stops producing articles that earn anything. That is why there are seven and not four.

---

## What it does outward, exactly

Most of this kit reads and writes files. Three controls in the whole thing make something happen outside your working folder, and each one is narrow, named, and conditional.

**1. It publishes one article.** To a property listed in your own `strategy/properties.md`, from a draft this Employee wrote and checked, using a control that makes that one article live and nothing else.

If the publish control on your surface also emails a list, notifies subscribers, cross posts, or schedules a broadcast, **that is not the control** and it stops. Every share, notify, and distribution option on that screen and on the screen after it is switched off through its own control, read back, and recorded. If a distribution setting defaults to sending and the surface offers no way to decline it, **it does not press publish at all**: the article waits and it tells you which setting to turn off. You turn it off once and every run after that is clean.

**2. It requests indexing for one URL**, inside your own search performance console, for a URL that is already public on your own property.

**3. It submits or resubmits one sitemap** you already declare, when the console shows it missing, erroring, or stale.

Inside that console exactly three things can happen: inspect a URL, request indexing, and view or submit a sitemap. Never a setting, a user, a permission, a verification, a removal, a disavow file, or a change of address. **It never removes a sitemap**, including one that errors and one a previous owner of the domain left behind.

**Everything else it stops for. There are two categories and nothing else joins them.**

**Sending or spending.** No email, DM, post, comment, reply, forum post, share, cross post, or syndication. No budget, bid, plan, subscription, purchase, or upgrade, and nothing created or saved inside an account that can spend, in any state, including a draft.

**On LinkedIn this is total and has no exception anywhere in the kit.** It may navigate to your own signed in pages and read them, which happens during research and during referral analysis. It will never click Message, Connect, Follow, or Like, never open a composer, never type there, and never take any action there. LinkedIn flags automated activity and your account is the asset.

**Private keys and credentials.** It never creates an account, enters or generates a password, completes a captcha, enters payment details, or accepts terms. It never signs in and never re-authenticates: it inherits a browser you are already signed in to. It never writes a key, a token, a password, or a URL with an embedded credential into any file, any commit message, any report, or any log line. On a login wall or a captcha it stops that phase, changes nothing, enters nothing, records the blocker, and carries on with the phases that do not need it. It never retries a refused action a different way.

**If it ever finds a credential sitting in plain text in a file it read**, it does not copy it and does not quote it. It names the file and the class of secret with no fragment of the value, and puts a card on your board saying to move it into secret storage and rotate it.

---

## What it does without asking

The two stops above are the whole list. Everything else it owns outright, and it is worth being explicit, because this is the half people assume they will have to supervise.

It writes and rewrites every file in its own working folder. It rebuilds your topic map on the evidence and retires a cluster that earned nothing in three months. It chooses every keyword and every angle, and refuses a candidate that would compete with something you already rank for. It writes the article, picks the sources, swaps a dead authority link, and drops a hero that came back wrong. It publishes, runs your property's build, fixes a build error its own files caused, and pushes. It resubmits a stale sitemap and spends a second indexing request on a URL that has stayed invisible for three weeks. It creates its own board cards, advances them, and closes the ones whose evidence is a file it can verify. It registers its own scheduled jobs and moves a fire time to clear a collision it detected. When a site changes and a browser flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into its own recipe file. When a ledger line will not parse it copies that one line out with its number and rebuilds the index from the rest.

Every change to a strategy file lands as one line in `strategy/CHANGELOG.md`: the date, the routine, the file, what changed, and the path of the evidence that forced it. That file is append only and newest first, so a month of decisions reads top to bottom in about a minute, and your morning brief surfaces every new line.

When something is genuinely ambiguous it makes the most defensible call, records the assumption in one line, and moves on. New assumptions appear in the next morning's brief so you can correct any of them in one line of your own.

Two things stay outside all of that, because they are the first stop wearing different clothes: an account setting or a property configuration it did not create, and anything on the far side of a control that commits. Those get named, never touched.

**Every card carries a kind.** A card whose definition of done is a file on your machine or a line in one of its own ledgers closes itself the moment the evidence is verified. A card whose definition of done is something only you can do inside your own account, like adding and verifying a property, waits for your tick and nothing else sets it.

There is no proposal file in this kit, no approval block, and no status that means waiting for a yes. If a routine ever stops for something that is not a send, not a spend, and not a key, that is a defect in the routine.

---

## These are scheduled routines, not global skills

This is a kit of scheduled work. It is not a set of global skills, and it never becomes one.

**Do not copy the routines into your harness's global skills directory.** Registering them there loads all seven into every session you open and lets one be invoked outside its window, where it does nothing but record that it skipped and exit. Point your harness at `«SEO_ROOT»/routines` as a source directory, or link the folders. Do not keep two copies: every routine ends with a `## Corrections` section you write into and the routine reads on its next run, and with two copies you write into one and it reads from the other.

**No routine here creates, authors, or installs anything in your global skills or plugins directory.** Not on the first run, not on a monthly run, not as part of a repair. Your global setup is yours.

What it does instead: it **names** an optional helper as a dependency, **detects** whether you already have it, **uses** it when it is there, and **falls back** to a stated route when it is not. The run record says which route it took.

Self repair means the same thing. The first time a routine needs a browser flow, it drives that flow once and writes what it verified into a JSON file under `recipes/` inside this folder. After that, a drifted selector is fixed in the same file. Neither one is a new helper installed somewhere global, and neither is silent: both go in the run record as one line naming the flow or the step.

**Nothing has to be set up for that to work.** No flow file ships with the Employee and none is ever yours to write. A routine that needs one and finds none learns it on the spot, which is why `recipes/` starts with a single file in it and fills up over the first few weeks.

---

## What it needs from you

**A machine that is awake at the times in `SCHEDULE.md`.** These are scheduled routines, not a cloud service. A closed laptop produces nothing, and the standup says so in plain language the next morning. A missed weekday costs one article. A missed Tuesday costs a week of indexing and a missed Friday costs a week of measurement that cannot be recovered later, because the scoring window moves on.

**A working folder that is not synced.** Pick a local path that is **not** inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Something like `D:\AgentOps\seo-employee` or `~/agent-ops/seo-employee` is right. That folder is `«SEO_ROOT»` everywhere in this kit. If you point the install at a synced path it stops and tells you, before it creates anything, because creating the structure in the wrong place costs you every ledger you later accumulate.

**Your sites, and the repository path for any of them whose source lives on this machine.** That is the one thing the install genuinely asks for. It can work out your framework, your post prefix, your sitemaps, your editorial conventions, and your hero specification by reading. It cannot work out which sites belong to you.

**A harness that can do five things.** Read and write files in that folder, read the machine clock and timezone, run a local command, fetch a URL and run a search, and ideally drive a browser that carries your own signed in sessions. The first four are not optional. The fifth decides how much of the kit runs, and [What you lose with no browser control](#what-you-lose-with-no-browser-control) below is the honest accounting. `CAPABILITIES.md` section 1.2 has a probe you paste into your agent that answers all five in one pass.

**A few minutes on a weekday.** Read the brief, tick what you did, correct anything you disagree with in one line. The brief is capped at thirty lines on purpose and it never lists what passed.

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
9. **A working folder outside OneDrive, Dropbox, Google Drive and iCloud.** That folder is `«SEO_ROOT»` everywhere in this kit.
10. **A usage budget.** Measured on the GTM Engineer over 29 production runs: about $20 of API equivalent usage on a plain weekday on Opus, about $8 on Sonnet, and a skipped fire costs cents now that `scripts/guard.mjs` runs before any document is read. The repo's `docs/COST.md` has the table and the dates.

Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex and Antigravity, and runs on Windows, macOS and Linux. The repo's `docs/HARNESSES.md` has the scheduler and invocation for each harness, and `docs/INSTALL.md` has the steps per operating system and what a first run should look like.

---

## Install

**1. Extract into your working folder.** Files sit at the root of the archive, so extract straight into the local, unsynced folder you picked above.

**2. Point your harness at `«SEO_ROOT»/routines`.** Every routine is a folder holding one `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that a harness reading markdown instructions can run it. If your harness takes a routine source directory, set it to `«SEO_ROOT»/routines`. If it only reads one fixed directory, link the folders rather than copying them.

**3. Read `CONTRACT.md`.** It is the spine. Every routine reads it first, every run. Where a routine and `CONTRACT.md` disagree, the contract wins. Where the contract and your own workspace rule file disagree, yours wins. You do not have to fill anything in. You do have to have read it, because everything the role will and will not do is in there and you are the one who lives with it.

**4. Run the capability probe in `CAPABILITIES.md` section 1.2.** It is a short block you paste into your agent. It changes no files and publishes nothing. Read the answer next to section 2, and write any disagreement into the `## Corrections` section at the bottom of that file in one line. Your machine is the authority on your machine.

**5. Paste `INSTALL-PROMPT.md` into your agent, in that folder.** Edit the two marked lines at the top first. It reads your sites, writes your strategy folder, creates the ledgers, seeds the board, registers the seven scheduled jobs, and shows you one drafted article. It stops for you once, on that article.

**6. Set your harness to run scheduled work without interactive approval.** A routine launched in a prompting mode does not fail at 08:00, which would at least leave a record. It hangs, waiting for a human who is asleep, and there is no run record and no blocker to read in the morning. Every harness calls this setting something different. Scope it to `«SEO_ROOT»` plus each property repository if yours supports scoping. If yours cannot run without interactive approval at all, do not schedule the index sweep and the rank review; run those two by hand and let the other five schedule normally. `CAPABILITIES.md` section 10 is the detail, including why this does not weaken the two stops.

**7. Let one full week happen before you change anything.** Treat week one the way you would treat a new hire's first week. Watch the output, correct it once, write the correction down.

Corrections go in the `## Corrections` section at the bottom of the routine, or of `CONTRACT.md`, or of `CAPABILITIES.md`, or of `standards/PUBLISH-STANDARD.md`, whichever the mistake belongs to. Every routine reads the ones that apply to it at the top of every run. This is how the kit gets good at your business specifically, and it is worth more than any edit you make to a routine body.

---

## Dependencies

**Required.**

1. **An agent harness** with file read, file write, a readable clock, local command execution, a URL fetch, and a web search. The kit does not run without the first four, and the calendar refill deliberately produces nothing without the last one.
2. **Node 18 or newer.** Used only by the three scripts inside the kit, `scripts/guard.mjs`, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. All three are dependency free. There is no install step and no package file. Each takes a `--selftest` flag, and the install runs all three on day one so you find out then rather than at 08:00 on a Tuesday.
3. **Browser control that attaches to a browser you are already signed in to**, for the index sweep and the rank review. This is the one people get wrong. The kit never signs in to anything, so a harness that launches a clean automated browser has handed it a browser with no session, and every read of your own console lands on a sign in wall. Ask your harness directly: does your browser control attach to the profile I am signed in to, or start a fresh one. `CAPABILITIES.md` section 1.1 is the check.
4. **A shell**, if any of your properties publishes from a repository on this machine. The build, the commit, and the push all run through one.

**Optional, if you already have it.** The kit does not ship these and does not need them. Every row has a fallback the routine takes on its own, without stopping and without asking.

| Helper | If you have it, used for | Fallback when you do not |
|---|---|---|
| An image generation helper | The hero on each article | The article publishes without a hero, the alt text is still written, and the run record says so. Nothing waits on artwork |
| A local image tool | Compressing the hero under the injection ceiling | Same: publish without it and say so |
| A search endpoint you already pay for | Result sets, as the first route | Whatever web search your harness has |

Helpers are detected by name and used when present. If you run a harness where they do not exist, nothing breaks and nothing is installed for you.

**Forbidden, deliberately.** No routine may call anything that publishes to a surface other than your own named property, anything that belongs to another Employee's territory, or anything billed per run that you did not agree to spend. That includes social publishing helpers, mailbox helpers, and paid data endpoints.

---

## Week one

**Day one.** You extract the kit, point your harness at the routines, run the probe, and paste the install prompt.

It reads the contract, then investigates: your sites, their sitemaps, their blog indexes, their existing posts, and any repository you named. It works out per property how a post is wired in, which branch the remote tracks, what the frontmatter schema is, where the hero lives, and **every sitemap the property declares**, which is the single highest leverage thing it does that day. A property whose articles live only in a secondary sitemap gets zero indexing requests, every week, forever, with no error and no symptom.

Then it researches your topics and writes three files: your properties, your topic map, and your voice. The voice file is taken from your own published writing, with real excerpts and the URL each came from. **It will not invent a sample.**

It creates the ledgers empty, files the opening cards, registers seven scheduled jobs, and proves one of them by hand before registering the rest.

**Then it stops once, and only once.** It shows you one drafted article and asks whether you would publish it as written. If a claim is wrong, the fix goes in the source rather than in the draft: a property fact goes in `strategy/properties.md`, a wording problem goes in `strategy/voice.md`. Patch a draft by hand and the same wording comes back tomorrow. Fix the source and it never comes back.

You end day one with a strategy folder in your own language, a calendar the refill fills on its first Wednesday, a schedule that is registered and running, one article you have read, and a list of every assumption it made.

**The next weekday.** The standup runs at 07:15 and writes `brief-latest.md`: what today is for, what is waiting on you, what is blocked. The draft run works the card. The publish run takes the oldest ready draft and puts it live.

**Tuesday** adds the index sweep. **Wednesday** adds the calendar refill, and most Wednesdays it records the counts and exits, which is the correct outcome rather than a quiet one.

**Friday afternoon** is the rank review.

**Set your expectation about that first scoreboard.** It will be mostly `n/a`, and that is correct rather than broken. It has one week of data, it will not estimate the rest, and it will not classify any article younger than two weeks, because a two day old article has no position to speak of. The week over week column says `baseline week` on your first Friday and fills in as you accumulate weeks.

**First weekday of next month**, the intake re-reads a month of evidence, rebuilds the topic map from four scoreboards rather than from its own previous conclusions, rebuilds the internal link map, and names any article that nothing links to.

**The thing that will surprise you in week one**, and it is worth hearing now: the calendar starts empty, and the first Wednesday is when it fills. Until then the standup has nothing to promote and says so plainly. That is not a broken install. It is the refill doing demand research properly rather than seeding thirty entries nobody validated.

---

## What you lose with no browser control

The honest headline first. **The morning brief never needs a browser. Neither does the calendar refill, the draft folder, or publishing to a repository backed property and confirming it live.** On a machine with no browser control at all you still get a plan every morning, a researched draft every weekday, and an article published and verified.

What you lose is measurement and discovery, and both sit behind your own login. The index sweep can union every sitemap and build its candidate set, and then it cannot open the console to spend a single request. The rank review has nothing at all to read. Left alone long enough the calendar starts refilling blind, because the file it leans on hardest is the one the rank review writes.

There is no workaround for that pair and this kit will not pretend otherwise. If you cannot give it a browser carrying your own sessions, you are buying a research, drafting, and publishing engine, and you are keeping the measurement yourself.

| Routine | With browser control | With none |
|---|---|---|
| `seo-standup` | Never uses one | Identical. Full function |
| `seo-draft-run` | Reads a source that refuses a fetch | Marks those sources unread and writes from the ones that fetched. Most weeks that is all of them |
| `seo-publish-run` | Publishes a surface property, verifies any live URL by loading it | Publishes a repository property in full and verifies through a fetch. Cannot publish a surface property |
| `seo-index-sweep` | Requests indexing and keeps sitemaps fresh | Unions the sitemaps, builds the candidate set, records the counts, stops there |
| `seo-calendar-refill` | Reads a competitor page that refuses a fetch | Takes the next ranking page instead. A refill has never needed a browser to be good |
| `seo-rank-review` | The whole job | Nothing. It records the blocker and names what that costs the refill and the draft run |
| `seo-intake-and-map` | Reads a site a fetch cannot render, confirms a console property | Both become unknown with the reason. All three strategy files still get written |

Five of the seven produce their main deliverable with no browser at all. That is most of the product, not a consolation prize.

A missing browser does not get its own status, and no routine invents one. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## Where things live

```
«SEO_ROOT»/
  CONTRACT.md                  the spine. Every routine reads it first, every run
  CAPABILITIES.md              capability to route, per harness. Yours to correct
  SCHEDULE.md                  the only place a cadence, fire time, window, or budget lives
  ROLE.md                      the role charter
  README.md                    this file
  INSTALL-PROMPT.md            the setup prompt
  standards/PUBLISH-STANDARD.md  research, authority links, heroes, alt text, the report
  routines/seo-<id>/SKILL.md   the seven routines
  scripts/runlog.mjs           the only sanctioned way to append a run record
  scripts/guard.mjs            the pause, window and period guards, run before any document is read
  scripts/copy-check.mjs       the scripted judge for anything about to be written
  strategy/                    properties.md, topic-map.md, voice.md, CHANGELOG.md
  calendar/CALENDAR.md         the plan, appended in blocks, taken in order
  content/drafts.jsonl         ready, dropped, consumed
  content/published.jsonl      one line per article that reached a live property
  index/requests.jsonl         one line per indexing request
  drafts/<slug>/               body, internal note, hero, and metadata per article
  board/                       board.json, WORK-BOARD.md (you tick it), inbox.jsonl
  tracking/rank-latest.md      the short rolling state the rest of the kit reads
  scoreboard/                  one file per week
  recipes/                     BROWSER-RECIPES.md, plus one JSON file per site flow,
                               each written by the routine that uses it on the first run
  state/                       one small JSON per routine, plus browser-lock.json
  run/                         one line launcher per routine, written only where your
                               scheduler needs the invocation in a file rather than inline
  improvements/CHANGELOG.md    every self amendment, with the full text it replaced
  runlog.jsonl                 append only, one line per run
  brief-latest.md              your morning plan, overwritten daily, capped at thirty lines
  seo-latest.md                the machine detail, overwritten, uncapped
  briefs/, archive/            dated copies, and anything past the archive window
```

**Nothing is ever deleted.** Anything past the archive window moves into `archive/` with its path preserved. A draft folder is archived only once its article is both consumed and published, so a failed publish always finds its folder exactly where it left it.

Two things are yours and no routine overwrites them: your free text inside `board/WORK-BOARD.md`, and the `## Corrections` section at the bottom of every routine and every root document. Tick a card in the board and the standup picks it up tomorrow. Unticking reopens the card: **your mark wins in both directions**, so a card you tick by mistake goes back on the board at the next standup.

**An article's published state lives in one place, and it is not the calendar.** It is a line in `content/published.jsonl`. Nothing in this kit ever flips a marker inside your calendar, which is what lets five routines read that file with no lock and no second writer, and it is why no existing calendar entry is ever modified, reordered, or renumbered.

---

## Stopping it, and how it changes

**To stop it, create an empty file called `PAUSED` in the Employee's folder.** Every routine checks for that file before it checks anything else, records that it skipped, and does nothing. Delete the file and everything resumes on its next scheduled run. Nothing is unregistered and nothing needs reconfiguring, so a holiday costs you one file.

**To stop just one routine, put its id on a line inside that file and leave the rest running.** The most useful single line you can write there is `seo-publish-run`: it stops anything reaching a live property while the drafting, the indexing, and the measurement keep going.

**It rewrites its own instructions as it learns.** This is the part that makes it worth more in month three than in week one. When a routine works out that a wait was too short, that a step order mattered, or that a page moved for good, it edits its own instruction file immediately and the next run is better for it. Nothing is queued and nothing waits on you.

Where it writes the lesson depends on what it learned, and that matters as much as whether it wrote it: something true of one screen goes in that screen's flow file, something true of any site goes in `recipes/BROWSER-RECIPES.md`, something true of every article goes in `standards/PUBLISH-STANDARD.md` where every publishing routine reads it at once, and something true of one routine goes in that routine.

You stay in control through three things rather than an approval queue. Your agent software already asks you before anything writes to your disk, which is the real gate and the right place for it. Every change writes a line into `improvements/CHANGELOG.md` carrying **the full text it replaced**, so any of it can be undone without the original download. And tomorrow's brief tells you what changed under `What changed about me`, so you always know without having to diff anything.

If you disagree with something it taught itself, write one line in that routine's `Corrections` section. That line outranks the routine's own instructions from its next run onward.

**It notifies you only when you are the thing blocking it.** An expired login, a credential it needs, a publishing route that has stopped working entirely, or a stuck browser lock. Four cases, once each, never twice for the same problem, never outside your working hours, never on the first run. Everything else waits for the morning brief. If notifications are not available on your setup, nothing breaks: every one of those lines is in the brief too.

## Version and updates

This kit is **v1.2.0**. The version is in `VERSION` at the root, and `CHANGELOG.md` beside it lists what each release changed.

Employees update one at a time. They share nothing but a scheduler, so running one at v1.0.0 and another at a later version is fine and needs no coordination.

When an update lands, `CHANGELOG.md` says exactly which files changed and which are yours. The short version: everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are **yours and are never overwritten**. Everything else is ours and safe to replace. The one file holding both is a routine's `SKILL.md`, so copy your `## Corrections` block out before replacing it and paste it back after.

## When something goes wrong

Every run appends one line to `runlog.jsonl` with a status. There are eight and only eight.

`ok` `partial` `failed` `skipped-paused` `skipped-out-of-window` `skipped-already-ran` `blocked-login` `blocked-browser-busy`

`partial` means it hit its budget, or a capability was missing, and it wrote what it had rather than overrunning. That is designed behaviour, not an error. `blocked-login` means a human has to sign in, and it means no credential was entered and none will be. `blocked-browser-busy` means another routine is holding the browser. `skipped-out-of-window` and `skipped-already-ran` are both correct behaviour, not faults.

**A run with nothing to do records `ok`.** The publish run with nothing ready, the index sweep with nothing to request, and the calendar refill with every property comfortably stocked are all successful runs. Reporting them as failures would teach you to ignore the status field.

Blockers appear in your morning brief word for word. A blocker that has been open for more than a week gets a full line. Everything else open gets one compact row, so it stays visible without taking over the brief.

If the standup ever opens by telling you that nothing has been produced since a given date, the schedule stopped firing. Check that the machine was awake and that the jobs are still registered. That one line replaces the whole brief on purpose, because a plan built on nothing is worse than no plan.

**If a publish fails for any reason, the draft stays ready and neither ledger is touched.** Nothing is lost, and tomorrow takes the same draft first because it is still the oldest. That is why you will sometimes see a draft sitting a day: the brief names it, with the number of runs it has waited.

No routine ever writes a secret, a credential, an article body, a headline, a keyword, or a person's name into a run record. Run records carry counts, slugs, paths, live URLs on your own properties, and blockers. The detail stays in the draft folders and the scoreboards, inside your working folder.

---

## Working alongside the other AI Employees

This Employee publishes to your own properties and does nothing else outward. That keeps its boundary with the others simple.

| Employee | They own | SEO hands over | SEO never |
|---|---|---|---|
| **GTM Engineer** | ICP, positioning, outbound, launch board, paid setup | Published article URLs and keywords, as ledger lines | Drafts outreach, writes a positioning file, or touches a CRM |
| **Social Media Employee** | The organic calendar, community engagement, replies | Published article URLs, as ledger lines | Posts an article anywhere, shares one, or replies to anyone |
| **Ad Manager Employee** | Live account operations, spend, bids, creative | Nothing. It never opens an advertising account | Reads a spend screen, even where the same account family holds it |
| **Web Dev Employee** | Application code, dependencies, deploys, infrastructure | A card naming a broken sitemap, a registry a build no longer reads, or a URL pattern that no longer matches | Changes application code, a dependency manifest, or a build configuration to make a publish go through |

**A published article reaches every other Employee as one line in `content/published.jsonl` and nothing else.** It does not hand an article to a social Employee, queue it for outreach, email it to anyone, or post it anywhere. A sibling Employee that promotes articles reads the ledger and decides for itself, on its own schedule, with its own stops. That separation is what keeps one publish from becoming four sends.

If you also run the GTM Engineer, both kits keep a voice file. The install detects that and reads its voice and audience research into `strategy/voice.md` rather than researching the same thing twice into two files that will disagree. One voice per business.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

Nothing reads this file at runtime, so a correction that has to change behaviour belongs in `CONTRACT.md`, in `CAPABILITIES.md`, in `standards/PUBLISH-STANDARD.md`, or at the bottom of the routine it applies to. Use this section for anything about the kit as a whole that you want the next person reading it to see.
