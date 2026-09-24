# Ad Manager: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. It never guesses a window.

`CONTRACT.md` section 1 carries the same seven routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `ads-account-read` | `mon-fri` | 06:45 | 06:30 | 09:45 | `YYYY-MM-DD` | 30 min | heavy |
| `ads-desk-standup` | `mon-fri` | 07:30 | 07:15 | 11:30 | `YYYY-MM-DD` | 12 min | never |
| `ads-creative-studio` | `mon-fri` | 08:15 | 08:00 | 12:00 | `YYYY-MM-DD` | 30 min | conditional |
| `ads-build-desk` | `mon-fri` | 09:15 | 09:00 | 13:00 | `YYYY-MM-DD` | 30 min | conditional |
| `ads-change-list` | `fri` | 16:00 | 15:45 | 19:00 | `YYYY-Www` | 35 min | light |
| `ads-account-intake` | `first-weekday` | 13:00 | 12:45 | 17:00 | `YYYY-MM` | 45 min | conditional |
| `ads-creative-retro` | `last-weekday` | 14:00 | 13:45 | 17:30 | `YYYY-MM` | 35 min | light |

Seven rows, seven routines, and every id carries the `ads-` prefix so they namespace cleanly beside other AI Employees.

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

**Per run caps are not in this table.** They live in `human-pace` in `recipes/BROWSER-RECIPES.md`, in one place, and no row and no routine body restates one.

### 1.2 The browser column

| Value | Means |
|---|---|
| `never` | Reads and writes files only. Runs to full function on a machine with no browser control at all. Never takes the mutex |
| `light` | May read one page, capped and skippable. Seconds, not minutes |
| `conditional` | Uses the browser on some paths only, and most runs use none. The routine's own Step 0.4 names the step that makes the decision |
| `heavy` | Navigates and reads for most of its budget. Owns the lane for the whole run |

**Anything other than `never` takes the browser mutex**, described in section 4.3.

**There is no `read only` lane in this kit and that is not an omission.** Every lane in this kit is read only inside an account. `heavy` here means a lot of reading, not a lot of writing, because no routine in this kit writes anything to any account at all.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed eight in `ROLE.md` section 8.1, and the mapping is not negotiable:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Six of the seven produce their main deliverable with no browser at all**, including the morning brief, the creative set, the build sheet, the weekly change list, and the monthly doctrine rewrite. `CAPABILITIES.md` section 7 has the routine by routine detail and it is honest about the one that genuinely needs a browser, which is `ads-account-read`.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `ads-account-read` | Account read | Weekdays | Confirms the primary conversion event still fired, then reads yesterday's spend, delivery, and result rows at four levels and appends one row per object per day with the screen, the range, and the read date beside every figure |
| `ads-desk-standup` | Desk standup | Weekdays | Folds every ledger, turns yesterday's ticks into facts a machine can count, folds the card inbox, rewrites the board, and writes the morning brief |
| `ads-creative-studio` | Creative studio | Weekdays | Produces one creative set against the standing doctrine and the measured decay, into a dated local folder with the destination screen named. It uploads nothing |
| `ads-build-desk` | Build desk | Weekdays | Works the next ready card and assembles what it asks for as a complete local build sheet, ready to paste |
| `ads-change-list` | Change list | Fridays | Scores the week from the metrics ledger alone and writes the ranked, paste ready list of what to change next week, with the evidence row on every line |
| `ads-account-intake` | Account intake | First weekday of the month | First run: researches the business, reads the account structure once, writes the plan folder, seeds the board, creates the doctrine, builds the dashboard, registers the jobs. Monthly: re reads the evidence and applies what changed |
| `ads-creative-retro` | Creative retrospective | Last weekday of the month | Folds a month of the creative ledger against the metrics ledger to score angle, format, hook, and offer framing, and rewrites the doctrine where the evidence disagrees with the assumption |

**`ads-desk-standup` is the one that cannot be turned off.** It writes `brief-latest.md`, which is what the member opens first every morning. It is the only whole file writer of `board/board.json` and `board/LAUNCH-BOARD.md`, and it is the only thing in this kit that turns a ticked box into a dated fact. Two of those facts are load bearing and nothing else can produce either: a ticked change line becomes an `applied` row carrying a date, and a ticked upload card becomes a `live` row against a creative id.

**The first run of `ads-account-intake` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the archive. It detects the first run by the absence of `state/ads-account-intake.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the pause switch, the period guard, the budget, the mutex, and both stops.

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

**`sun` is not in the vocabulary.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently lost forever. **`ads-change-list` treats a row listing `sun` as unparsable for exactly that reason** and records the blocker naming the double count.

**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a weekend. Reporting screens keep adjusting the most recent day for hours after it ends, and a weekend read buys a row nobody acts on until Monday. If the member works weekends, add `sat` as its own row and raise the capacity in `plan/offer.md` at the same time.

### 3.1 Why the two monthly values are ranges and not single dates

If the monthly routines only ran on the exact first or exact last weekday, a machine that was asleep or shut that morning would skip the whole month. Giving each a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. That is the same trick the window guard uses: **be generous about when, be strict about how many times.**

**The two monthly routines can never land on the same date.** The shortest month is 28 days, so days 1 to 7 and the last seven days never overlap in any month of any length. A late catch up cannot create the case either, because a first weekday fire arriving on the 25th fails the window guard's day test and exits clean.

That separation is also what makes the plan and the doctrine take turns rather than fight: **intake runs on the first weekday and the retrospective on the last**, so the plan is a month old when the retrospective arrives and the doctrine is fresh when intake does.

---

## 4. Staggering, and the browser lane

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a filter gets set on the wrong report, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes 12 minutes and is budgeted for 30 will one day take 30.
2. **No two routines share a fire minute**, even when neither touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **The afternoon is single tenant.** `ads-change-list` owns Friday afternoon by itself. Do not add anything to it.
5. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes.

### 4.2 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
06:45  ads-account-read        30 min  heavy        lane clear by 07:15
07:30  ads-desk-standup        12 min  never        takes no lane
08:15  ads-creative-studio     30 min  conditional  lane clear by 08:45
09:15  ads-build-desk          30 min  conditional  lane clear by 09:45
```
Gap from the read routine's worst case end to the studio fire: 60 minutes. Gap from the studio's worst case end to the build desk fire: 30 minutes.

**Friday adds**
```
16:00  ads-change-list         35 min  light        alone in the afternoon
```
Gap from the build desk's worst case end: 375 minutes.

**First weekday of the month adds**
```
13:00  ads-account-intake      45 min  conditional  lane clear by 13:45
```
Gap from the build desk's worst case end: 195 minutes. On a first weekday that is also a Friday, the gap from intake's worst case end to the change list's 16:00 fire is 135 minutes.

**Last weekday of the month adds**
```
14:00  ads-creative-retro      35 min  light        lane clear by 14:35
```
Gap from the build desk's worst case end: 255 minutes. On a last weekday that is also a Friday, the gap from the retrospective's worst case end to the change list's 16:00 fire is 85 minutes.

**The tightest gap in the schedule is 30 minutes**, between the studio's worst case end at 08:45 and the build desk's fire at 09:15. It clears the 20 minute rule with 10 minutes to spare, and it is the first thing to check after any edit.

If you need more room there, **move the build desk later rather than shortening the studio budget.** The middle of the day is empty, and the studio's image phase is the one that runs long.

Both conditional lanes usually take no lock at all, so the real contention on a normal weekday is one routine, `ads-account-read`, for the first half hour of the morning.

### 4.3 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. Forty five minutes is the staleness window for every routine regardless of its own budget, which is why nothing here is budgeted past 45 minutes. The full rule is `ROLE.md` section 7 and `CONTRACT.md` section 6, and every routine implements it identically.

**`ads-desk-standup` reads that file and never writes it.** It has no lane of its own, so it is the one routine that can safely notice a browser routine that died holding the lock, and that noticing is one of the four things in this kit worth a push notification.

### 4.4 Why the morning runs in this order

**The read routine goes first because everything downstream reads what it appended**, and because the conversion event check has to happen before any other figure in the day is trusted. It also wants the browser while nobody else does, and it is the only routine that genuinely cannot work without one.

The standup goes second because it folds what the other routines produced and reconciles yesterday's ticks. At 07:30 it reports the state as it stands at 07:30, which includes this morning's metrics rows. It takes no browser lane at all, so it costs the morning nothing.

The studio goes third, 45 minutes after the standup, so today's set lands while the member is still reading the brief.

The build desk goes last because it works the board the standup just re rendered and reads `brief-latest.md` to avoid working a card the member was told is blocked.

**If a catch up puts the standup after the build desk on some morning**, the build desk works yesterday's board and says so in its run record. That is a thin day, not a broken one, and the next morning's standup reconciles both days of ticks.

### 4.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless: whatever arrives inside the window runs once, whatever arrives outside it exits clean.

**Set the earliest fire in this table after the time the machine is normally awake.** If the machine wakes at 08:00, a 06:45 fire always arrives as a catch up, which works, but it always lands after the standup and the brief is permanently one run behind. `CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

**One thing about this Employee specifically.** A missed `ads-account-read` is not recoverable later in the way a missed draft is. The routine reads yesterday's reporting day, and a day nobody read is a permanent hole in `metrics/daily.jsonl` that no later run fills, because filling it would destroy the only record that a screen was unreachable that morning. The catch up read in that routine covers a small number of missing reporting days and it is capped. If the machine is regularly asleep at 06:45, move the fire rather than relying on the catch up.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file is the one that says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.
2. **The job's only content is the invocation.** All the logic is in the SKILL.md. If your scheduler grows a shell script with business rules in it, the rules now live in two places and you find out which one is wrong on the day it matters.
3. **Know what the invocation is before you register anything.** `CAPABILITIES.md` 9.2a gives its shape per harness: the routine id where your harness discovers routines from a directory, and the routine's `SKILL.md` handed over as the run prompt where it does not.
4. **Prove one routine by hand before you register seven.** Run the line for `ads-desk-standup` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you see is an empty brief.
5. **Register the `fire` column, not the window.** The window is enforced inside the routine.
6. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `ads-account-intake` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«ADS_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, and names that file in the report and in the brief. Run them once yourself and you are scheduled. **The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work. A job that fires at the wrong time is caught by the window guard. A job that fires twice is caught by the period guard. **The scheduler is a starter motor, not a controller.**

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 06:45 the read routine asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling the member that nothing has been produced since a given date, which is correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows, ideally to `«ADS_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is what keeps that true rather than merely intended.

This does not weaken anything, and the reason is worth being clear about. **The prompt gate was never what stopped this kit from spending.** The two guardrails live inside the routines: no routine composes a create action, opens a create flow, presses a control that saves inside an account, types a budget figure, or enters a credential. There is no path where an approval prompt is the last thing standing between this kit and a live campaign. Turning off the prompt removes a question about opening a tab and writing a file. It does not add a capability.

One limit case, because no setting clears it: a prompt raised by the browser rather than by the harness. **If your harness cannot run without interactive approval at all, do not schedule `ads-account-read`.** Run it by hand when you are at the machine. The other six schedule fine and you still get the brief, the set, the sheet, the change list, and the doctrine, all of them thinner because the ledger is thinner. `CAPABILITIES.md` section 10 has the full treatment.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.2 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time.
3. Re register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**The Employee may change a `fire` time itself, and only for one reason: to clear a lane collision it detected.** `ads-account-intake` edits the row, records both the old time and the new time in one line in `plan/CHANGELOG.md` with the evidence path, re registers that job, and surfaces the change in the next morning brief. **It never removes a row, never sets `days` to `off`, and never changes a `days`, `key`, or `budget` value.** Those are the member's.

A routine may also change its own row when it concludes its window or cadence is wrong, re register its own job, and record both values in `improvements/CHANGELOG.md`. That is section 8.3 of `CONTRACT.md` and it works the same way as every other self amendment: it happens, it is recorded with the text it replaced, and the next brief reports it.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back, and the brief is where the member finds out it happened.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**To stop everything at once, do not edit this table at all.** Create an empty `PAUSED` file in `«ADS_ROOT»` and every routine stops at Step 0.0 with a clean `skipped-paused` record. Naming routine ids on lines inside it stops only those. Deleting it resumes everything with nothing to re-register. That is the switch for a holiday. `days: off` is the switch for a routine you have decided you do not want.

**No routine is ever left off for a missing input.** A blank value is a research task, not a reason to disable anything. The routine that needs it researches it, fills it, records the assumption, and runs. `ROLE.md` section 5 carries the table of what gets researched and what does not, and the list of what does not is two money figures long.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If the member travels and changes the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. `«TIMEZONE ID»` in the state file is a record of what was true at intake. It is never used to decide anything.

If the times look wrong by exactly one hour, or by exactly a whole number of hours, the machine's timezone is wrong. Fix the machine. Do not compensate by editing this table, because the next correct clock will then be wrong by the same amount in the other direction.

**One consequence worth knowing for this Employee.** A reporting screen reports in the ad account's own timezone, which may not be the machine's. That is why every metrics row carries its `range` and its `screen` beside the figure, and why the window in `plan/measurement.md` is read from the platform rather than assumed. Nothing in this table is affected. The row is honest about what it read either way.

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
