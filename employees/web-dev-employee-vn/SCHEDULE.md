# Web Dev Employee: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. It never guesses a window.

`CONTRACT.md` section 1 carries the same eight routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `web-site-sweep` | `mon-fri` | 06:45 | 06:30 | 09:45 | `YYYY-MM-DD` | 25 min | heavy |
| `web-standup` | `mon-fri` | 07:30 | 07:15 | 11:30 | `YYYY-MM-DD` | 15 min | never |
| `web-fix-runner` | `mon-fri` | 08:10 | 08:00 | 13:00 | `YYYY-MM-DD` | 40 min | conditional |
| `web-platform-guard` | `mon` | 10:30 | 10:15 | 15:00 | `YYYY-Www` | 30 min | heavy |
| `web-inventory-refresh` | `first-weekday` | 11:45 | 11:30 | 16:00 | `YYYY-MM` | 45 min | light |
| `web-dependency-run` | `wed` | 13:30 | 13:15 | 17:00 | `YYYY-Www` | 40 min | conditional |
| `web-weekly-report` | `fri` | 15:30 | 15:15 | 18:00 | `YYYY-Www` | 35 min | light |
| `web-guardrail-review` | `last-weekday` | 16:45 | 16:30 | 19:30 | `YYYY-MM` | 20 min | never |

Eight rows, eight routines, and every id carries the `web-` prefix so they namespace cleanly beside other AI Employees.

### 1.1 The column meanings

| Column | Meaning |
|---|---|
| `routine` | The routine id. It equals the folder name under `routines/` and the YAML `name` key in that folder's SKILL.md. All three are always the same string |
| `days` | Which days the routine is allowed to run. Vocabulary in section 3 |
| `fire` | The time to register in whatever schedules this machine. Not a guarantee, and not what the window guard checks |
| `window_start`, `window_end` | The only thing the window guard checks. Outside this range the routine records `skipped-out-of-window` and exits |
| `key` | The period key format used by the once per period guard. Local date for weekdays, ISO week for weekly, calendar month for monthly, computed from the local date and never from a UTC timestamp |
| `budget` | Hard wall clock budget. At budget the routine writes what it has and records `partial` |
| `browser` | How much browser control the routine needs. This drives the staggering in section 4 and decides whether it takes the mutex |

### 1.2 The browser column

| Value | Means |
|---|---|
| `never` | Reads and writes files and runs local commands only. Runs to full function on a machine with no browser control at all. Never takes the mutex. A row reading `none` carries the same meaning and is accepted |
| `light` | Opens a page for one bounded phase that is the first thing cut when the budget is short. Still takes the mutex |
| `conditional` | Uses the browser on some paths only. `web-fix-runner` uses it only for a `platform` card carrying a console form. `web-dependency-run` uses it only when a changelog or a build log could not be read any other way, or to read a `cms` project's updates screen |
| `heavy` | Holds the lane for most of its budget. `web-site-sweep` navigates and reads log surfaces. `web-platform-guard` holds it just as long, and **every page it opens is read only**: the word describes how long it holds the lane, not what it does with it |

**Anything other than `never` takes the browser mutex**, described in section 4.3.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed vocabulary in `CONTRACT.md` section 4.1, and the mapping is not negotiable:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Two of the eight need no browser at all, and four more produce their main deliverable without one.** The morning brief, the reviewable change, the reachability check on every declared path, the expiry warning, and the Friday report all survive. What does not is everything behind the member's own login, which is the production logs and the three provider surfaces. `CAPABILITIES.md` section 7 has the routine by routine detail and is honest about the one thing that genuinely cannot work without a browser, which is error triage.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `web-site-sweep` | Site sweep | Weekdays | Checks every declared path from the outside, records one dated observation per project, then reads the production log surfaces since its own cursor and groups every error into a fingerprint |
| `web-standup` | Triage standup | Weekdays | Resolves which drafted changes merged by reading the commit graph, closes and reopens incidents on that evidence, folds the card inbox, re-renders the review board, and writes the morning brief |
| `web-fix-runner` | Fix runner | Weekdays | Takes the one card the standup marked next and turns it into a reviewable change on a branch, behind that project's own gate, with a rollback line |
| `web-platform-guard` | Platform guard | Mondays | Confirms the registrar, the host, and the hosted database still match the inventory, read only, and names every drift with the screen and both values |
| `web-inventory-refresh` | Inventory refresh | First weekday of the month | First run it discovers what the member runs, writes the inventory and the opening policy, seeds the board, builds the dashboard, and registers the schedule. Monthly it re-reads the same evidence and applies what changed |
| `web-dependency-run` | Dependency run | Wednesdays | Bumps the patch and lockfile class on a branch per project, behind that project's own gate, and holds everything else with the evidence attached |
| `web-weekly-report` | Weekly change report | Fridays | Scores the week from the ledgers with a source path beside every number, names one fix and one thing to stop, and replays every learned browser flow once, read only |
| `web-guardrail-review` | Guardrail review | Last weekday of the month | Rewrites what the fix runner may change unsupervised, from a month of real merge outcomes. Widening waits for a streak. Narrowing is immediate |

**`web-standup` is the one that cannot be turned off.** It writes `brief-latest.md`, which is what the member opens first every morning. It is the only whole file writer of `board/board.json` and the only writer of `board/REVIEW-BOARD.md`, and it is the only thing in this kit that turns a merge into a closed card. Without it no dependency ever clears and no rate is ever computable.

**The first run of `web-inventory-refresh` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the kit. It detects the first run by the absence of `state/web-inventory-refresh.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the pause switch, the period guard, the budget, the mutex, and both stops.

---

## 3. The `days` vocabulary

Closed. Six values, and `CONTRACT.md` section 1.2 carries the same six.

| Value | Means |
|---|---|
| `mon-fri` | Monday to Friday |
| `mon`, `tue`, `wed`, `thu`, `fri`, `sat` | That single weekday |
| `first-weekday` | Any Monday to Friday date in the first seven days of the calendar month |
| `last-weekday` | Any Monday to Friday date in the last seven days of the calendar month |
| `off` | Registered but disabled. Records `skipped-out-of-window` and exits |

Two values are deliberately absent.

**`sun` is not in the vocabulary.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently skipped forever. Three routines in this table key on the ISO week and every one of them would lose a run.

**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a Sunday, and a fix runner that drafts changes at a weekend hands you a review queue you did not ask for.

**Many businesses in Vietnam open on Saturday, for half a day or a whole one**, and a site that goes down on a Saturday morning loses that day's orders before Monday's sweep sees it. Where your business opens on Saturday, change the `days` of the `web-site-sweep` row to `mon-fri sat`, and, if the person on duty sends a Saturday brief, the `web-standup` row too. Keep one row per routine: the window guard reads each space separated value in `days`, and it reads only the first row that carries a routine's id, so a second row for the same routine is never read. Leave the other six on weekdays. The Employee never makes this change itself, because `days` is yours. Sunday stays out of the vocabulary: where you keep an external uptime monitor, Monday's sweep reads its Sunday history through the `uptime-monitor` surface.

### 3.1 Why the two monthly values are ranges and not single dates

If the monthly routines only ran on the exact first or exact last weekday, a machine that was asleep or shut that morning would skip the whole month. Giving each a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. That is the same trick the window guard uses: be generous about when, be strict about how many times.

**The two monthly routines can never land on the same date.** The shortest month is 28 days, so days 1 to 7 and the last seven days never overlap in any month of any length. A late catch up cannot create the case either, because a first weekday fire arriving on the 25th fails the window guard's day test and exits clean.

---

## 4. Staggering, and the browser lane

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes 12 minutes and is budgeted for 40 will one day take 40.
2. **No two routines share a fire minute**, even when neither touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so that a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **`web-guardrail-review` fires after `web-weekly-report`'s full budget has elapsed, and that gap is load bearing.** On a month whose last weekday is a Friday, both run on the same day, and the review reads that morning's report. Any edit to either row preserves the gap. The review checks it itself at the top of every run and records a thin month if it finds itself racing.
5. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes.

### 4.2 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
06:45  web-site-sweep            25 min  heavy        lane clear by 07:10
07:30  web-standup               15 min  none         takes no lane
08:10  web-fix-runner            40 min  conditional  lane clear by 08:50
```
Gap from the sweep's worst case end to the fix runner's fire: 60 minutes.

**Monday adds**
```
10:30  web-platform-guard        30 min  heavy        lane clear by 11:00
```
Gap from the fix runner's worst case end: 100 minutes.

**First weekday of the month adds**
```
11:45  web-inventory-refresh     45 min  light        lane clear by 12:30
```
Gap from the fix runner's worst case end: 175 minutes. On a first weekday that is also a Monday, the gap from the platform guard's worst case end is 45 minutes.

**Wednesday adds**
```
13:30  web-dependency-run        40 min  conditional  lane clear by 14:10
```
Gap from the fix runner's worst case end: 280 minutes. On a first weekday that is also a Wednesday, the gap from the inventory refresh's worst case end is 60 minutes.

**Friday adds**
```
15:30  web-weekly-report         35 min  light        lane clear by 16:05
```

**Last weekday of the month adds**
```
16:45  web-guardrail-review      20 min  none         takes no lane
```
On a last weekday that is also a Friday, the gap from the weekly report's worst case end is 40 minutes, which is the load bearing gap in rule 4.

**The tightest browser gap in the schedule is 45 minutes**, between the platform guard's worst case end and the inventory refresh's fire on a first Monday. It clears the 20 minute rule with 25 minutes to spare, and it is the first thing to check after any edit.

If you need more room there, **move the inventory refresh later rather than shortening the platform guard's budget.** The early afternoon is empty on a Monday, and the guard is the routine most likely to need its whole budget because it reads three surfaces across every project.

### 4.3 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. Forty five minutes is the staleness window for every routine regardless of its own budget, which is why nothing here is budgeted past 45 minutes. The full rule is `ROLE.md` section 7 and `CONTRACT.md` section 6, and every routine implements it identically.

### 4.4 Why the morning runs in this order

The sweep goes first because everything downstream reads what it captured, and because it wants the browser while nobody else does. It is also the only weekday routine that genuinely cannot do its main job without one.

The standup goes second because it compiles what the other routines produced and reconciles yesterday's ticks and merges. It takes no browser lane at all, so it costs the morning nothing, and it runs to full function on a machine whose browser is signed out, busy, or missing.

The fix runner goes last of the three because it works the board the standup just re-rendered and the card the standup just marked ready. **The plan arrives first, the change arrives second.** Its ordering is not a preference: a fix runner that ran before the standup would work yesterday's board.

**If a catch up puts the standup after the fix runner on some morning**, the fix runner works yesterday's card and says so in its run record. That is a thin day, not a broken one, and the next morning's standup reconciles both days.

### 4.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless: whatever arrives inside the window runs once, whatever arrives outside it exits clean.

**Set the earliest fire in this table after the time the machine is normally awake.** If the machine wakes at 08:00, a 06:45 fire always arrives as a catch up. That works, and it always lands after the standup, so the brief is permanently one run behind and it is built on yesterday's sweep. `CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Eight routines, eight jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into eight.
2. **The job's only content is the invocation.** All the logic is in the SKILL.md.
3. **Know what the invocation is before you register anything.** `CAPABILITIES.md` 9.2a gives its shape per harness. Where that section could not answer for your harness, find its non interactive run command and write what you found into the `## Corrections` at the bottom of that file.
4. **Prove one routine by hand before you register eight.** Run the line for `web-standup` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Eight jobs registered on an invocation nobody has run is eight silent failures on the same morning, and the first thing you see is an empty brief.
5. **Register the `fire` column, not the window.** The window is enforced inside the routine.
6. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `web-inventory-refresh` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«WEB_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, and names that file in the session report. Run them once yourself and you are scheduled. **The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work.

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 06:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows. Here that means `«WEB_ROOT»` plus the code roots your projects live in, and nothing else.

This does not weaken anything, and the reason is worth being clear about. **The prompt gate was never what stopped this kit from merging, deploying, or spending.** Those stops live inside the routines: the Employee never composes a merge, never presses a deploy control, never applies a migration, never buys anything, and never rotates a key. There is no path where an approval prompt is the last thing standing between a branch and a production site. `CAPABILITIES.md` section 10 has the full treatment.

If your harness cannot run without interactive approval at all, do not schedule the browser routines. Run those by hand when you are at the machine. The file routines schedule fine and you still get the brief, the changes, and the Friday report.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.2 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time. **And check rule 4:** the guardrail review must still fire after the weekly report's full budget has elapsed.
3. Re-register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**A week whose Friday the business has declared a day off.** The weekly report is then due the working day before, so you still have it that afternoon. Before that week, set the `web-weekly-report` row's `days` to that weekday, for example `thu`, and set it back to `fri` once the report is written. Keep the `fire` time, so the gap before `web-guardrail-review` in section 4.1 rule 4 is unchanged. The once per period guard keys on the ISO week, so nothing is scored twice. The Employee never makes this change itself, because it changes a `days` value, which is yours.

**The Employee may change a `fire` time itself, and only for one reason: to clear a lane collision it detected.** It edits the row, records both the old time and the new time in one line in `inventory/CHANGELOG.md` with the evidence, re-registers that job, and surfaces the change in the next morning brief. It never removes a row, never sets `days` to `off`, and never changes a `days`, `key`, or `budget` value. Those are yours.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back, and the brief is where you find out it happened.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**Know what each one costs you before you turn it off.**

| Turning this off | Costs you |
|---|---|
| `web-site-sweep` | Every health number, every incident, and the fingerprints every fix card is built from. The board stops gaining work |
| `web-standup` | The brief, the board, and every merge verdict. **Nothing else in this kit works without it.** Do not turn this one off |
| `web-fix-runner` | Every change. The board fills and nothing gets drafted |
| `web-platform-guard` | Every expiry warning and every provider drift. This is the one whose absence is silent until a domain lapses |
| `web-inventory-refresh` | The monthly re-read. A branch that moved, a command that changed, or a log surface that vanished stops being noticed |
| `web-dependency-run` | Dependency debt and advisory tracking |
| `web-weekly-report` | The week over week series, permanently. **It cannot be rebuilt afterwards**, because the ledgers it was computed from get archived |
| `web-guardrail-review` | The boundary stops moving. The fix runner keeps whatever rungs it had, forever, which is safe and static |

**No routine is ever left off for a missing input.** A blank value is a research task, not a reason to disable anything. The routine that needs it reads it, fills it, records the assumption, and runs. `ROLE.md` section 5 carries the table of what gets researched and what gets defaulted, and the list of what is never invented is two entries long.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If you travel and change the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. `«TIMEZONE ID»` in the state file is a record of what was true at setup. It is never used to decide anything.

If the times look wrong by exactly one hour, or by exactly a whole number of hours, the machine's timezone is wrong. Fix the machine. Do not compensate by editing this table, because the next correct clock will then be wrong by the same amount in the other direction.

---

## 9. Notes on this schedule

Rows that differ from the shipped defaults are recorded here with the date and the reason, so the next reader does not undo a deliberate change.

Format: `YYYY-MM-DD: <routine>, <what changed>, <why>.`

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.` Every routine reads this section at the top of every run.

---

## The lane is per platform, amended at Standard v1.1, 2026-08-28

This section supersedes the browser lane and mutex language above wherever they disagree.

The harness runs agent sessions in isolated browser tab groups, so two routines touching different platforms may run at the same time. What still serializes is the member's identity on one platform: a site sees one logged-in account, not tab groups. So `state/browser-lock.json` now carries a `sites` list naming the platforms the holder is touching. A routine taking the lane writes its platforms; a second routine reads the lock and proceeds when its own platforms are disjoint, and records `blocked-browser-busy` after its file work only on an overlap. The staleness rule, the delete-on-every-exit rule, and the standup's reading of a stale lock as evidence of a dead run are all unchanged. Fire-time staggering above remains as prevention for same-platform pairs and machine load, not as a claim that the browser is scarce.
