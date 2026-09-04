# Sales Employee: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. **It never guesses a window.**

`CONTRACT.md` section 1 carries the same seven routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `sales-prospect-sweep` | `mon-fri` | 06:45 | 06:30 | 09:45 | `YYYY-MM-DD` | 25 min | heavy |
| `sales-desk-standup` | `mon-fri` | 07:30 | 07:15 | 11:30 | `YYYY-MM-DD` | 12 min | never |
| `sales-first-touch-drafts` | `mon-fri` | 08:15 | 08:00 | 12:00 | `YYYY-MM-DD` | 30 min | heavy |
| `sales-followup-sweep` | `mon-fri` | 13:30 | 13:15 | 17:00 | `YYYY-MM-DD` | 35 min | heavy |
| `sales-pipeline-review` | `fri` | 16:00 | 15:45 | 19:00 | `YYYY-Www` | 35 min | conditional |
| `sales-desk-setup` | `first-weekday` | 11:00 | 10:45 | 15:00 | `YYYY-MM` | 45 min | light |
| `sales-qualification-refresh` | `last-weekday` | 11:30 | 11:15 | 15:30 | `YYYY-MM` | 30 min | light |

Seven rows, seven routines, and every id carries the `sales-` prefix so they namespace cleanly beside other AI Employees.

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

**Per run caps are not in this table.** They live in `human-pace` in `recipes/BROWSER-RECIPES.md` and in the `caps{}` object in each routine's own state file, in one place each, so a number never disagrees with itself. Neither a row here nor a routine body ever restates one.

### 1.2 The browser column

| Value | Means |
|---|---|
| `never` | Reads and writes files only. Runs to full function on a machine with no browser control at all. Never takes the mutex |
| `light` | Most of the run is local. One capped step may open a page, and it takes the lock for that step and no longer. A run that never opens a page never takes it at all |
| `conditional` | Uses the browser on some paths only. `sales-pipeline-review` uses it only when `recipes/` holds at least one flow file to replay |
| `heavy` | Navigates and reads for most of its budget. Owns the lane for the whole run |

**Anything other than `never` takes the browser mutex**, described in section 4.3. `sales-desk-standup` is the only routine in this kit whose lane is `never`, and it reads the value anyway to confirm it: a row edited to give the standup a lane would take that lane away from the four routines that can actually use it, so the routine treats any other value as an unparsable row and records `failed` naming the value it found. `none` and `never` mean the same thing to it.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed eight in `CONTRACT.md` section 4.1, and the mapping is not negotiable:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Six of the seven produce their main deliverable with no browser at all**, including the morning brief, both queue files, and the whole Friday review. `CAPABILITIES.md` section 7 has the routine by routine detail and it is honest about the one that genuinely needs a browser, which is the sweep.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `sales-prospect-sweep` | Prospect sweep | Weekdays | Reads the sources one buyer segment names, captures the contactable people behind them, scores every row against the named tests, and writes each row with the evidence that qualified it |
| `sales-desk-standup` | Desk standup | Weekdays | Reconciles yesterday's ticks into the pipeline and the contacted ledger, folds the card inbox, re-renders the pipeline, and writes the morning brief with the veto line in it |
| `sales-first-touch-drafts` | First touch drafts | Weekdays | Drafts a first touch for every qualified person who has never been written to, into a dated queue file and into the member's own mailbox as an unsent draft. It never sends |
| `sales-followup-sweep` | Follow up sweep | Weekdays | Reads the replies on the threads the ledger says were sent, records them, then drafts the follow ups that are due. In that order, always |
| `sales-pipeline-review` | Pipeline review | Fridays | Scores the week from the ledgers with a source path beside every number, replays the browser flows, and files one kill and one scale as cards |
| `sales-desk-setup` | Desk setup | First weekday of the month | First run: researches the business, writes the strategy folder, seeds the pipeline, reconciles this table, registers the jobs. Monthly: re-reads the evidence, applies what changed, carries every member written setting across verbatim |
| `sales-qualification-refresh` | Qualification refresh | Last weekday of the month | Re-tests every named qualification test and every buyer segment against a month of ledger evidence, and rewrites both files where the evidence disagrees with the assumption |

**`sales-desk-standup` is the one that cannot be turned off.** It writes `brief-latest.md`, which is what the member opens first every morning. It is the only writer of `pipeline/pipeline.json` and `pipeline/PIPELINE.md`, the only routine that turns a ticked box into a `sent_on`, and the only routine that computes the veto line naming the unsent drafts. Without it the pipeline never clears a dependency, no rate is ever computable, and nothing tells the member that drafts are sitting in their mailbox.

**The first run of `sales-desk-setup` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the kit. It detects the first run by the absence of `state/sales-desk-setup.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the period guard, the budget, the mutex, and both stops.

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

**`sun` is not in the vocabulary.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently skipped forever. `sales-pipeline-review` treats a row carrying `sun` as unparsable and records `failed` naming the double count, rather than running and producing a week that quietly overwrites another.

**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a weekend. Nobody replies to a cold email on a Sunday, and a queue that fills seven days a week in front of a member who works five produces a backlog rather than a pipeline. If you do work Saturdays, add `sat` as its own row and raise your capacity in `strategy/offer.md` at the same time.

### 3.1 Why the two monthly values are ranges and not single dates

If the monthly routines only ran on the exact first or exact last weekday, a machine that was asleep or shut that morning would skip the whole month. Giving each a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. That is the same trick the window guard uses: **be generous about when, be strict about how many times.**

**The two monthly routines can never land on the same date.** The shortest month is 28 days, so days 1 to 7 and the last seven days never overlap in any month of any length. That is why the section 4.2 arithmetic never has to reconcile an 11:00 setup with an 11:30 refresh: the case cannot occur. A late catch up cannot create it either, because a first weekday fire arriving on the 25th fails the window guard's day test and exits clean.

**There is no catch up field anywhere in this kit and no backlog flush.** Do not add one. A missed period is a missed period, and the two guards are what make that safe rather than expensive.

---

## 4. Staggering, and the browser lane

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a read returns the other routine's page, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes twelve minutes and is budgeted for thirty five will one day take thirty five.
2. **No two routines share a fire minute**, even when neither touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so that a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **The morning order is load bearing.** The sweep, then the standup, then the drafting routine. Do not reorder those three. The sweep goes first because everything downstream reads what it captured and because it is the only routine that genuinely cannot work without a browser. The standup goes second so the plan is on the member's screen before the copy lands. The drafting routine goes third, while the member is still reading the brief.
5. **The follow up sweep belongs in the afternoon.** A reply arrives during the working day, and the whole value of that routine is reading it before another message to that person is drafted.
6. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes. `sales-pipeline-review` is the only routine that can see three runs of history, so it is the one that raises this, as a card owned by `sales-desk-setup`.

### 4.2 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
06:45  sales-prospect-sweep        25 min  heavy   lane clear by 07:10
07:30  sales-desk-standup          12 min  never   takes no lane
08:15  sales-first-touch-drafts    30 min  heavy   lane clear by 08:45
13:30  sales-followup-sweep        35 min  heavy   lane clear by 14:05
```
Gap from the sweep's worst case end to the drafting fire: 65 minutes. Gap from the drafting routine's worst case end to the follow up fire: 285 minutes.

**Friday adds**
```
16:00  sales-pipeline-review       35 min  conditional
```
Gap from the follow up sweep's worst case end: 115 minutes.

**First weekday of the month adds**
```
11:00  sales-desk-setup            45 min  light   lane clear by 11:45
```
Gap from the drafting routine's worst case end: 135 minutes. Gap from its own worst case end to the follow up fire: 105 minutes.

**Last weekday of the month adds**
```
11:30  sales-qualification-refresh 30 min  light   lane clear by 12:00
```
Gap from the drafting routine's worst case end: 165 minutes. Gap from its own worst case end to the follow up fire: 90 minutes.

**The tightest gap in the schedule is 65 minutes**, between the sweep's worst case end and the drafting fire. It clears the 20 minute rule with room, and it is the first thing to check after any edit.

If you need more room in the morning, **move the drafting routine later rather than shortening the sweep's budget.** The queue is what the member acts on, but an empty queue is what a shortened sweep produces, and a drafting routine with nothing to draw from writes nothing at all.

### 4.3 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder and when it took the lock, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. Forty five minutes is the staleness window for every routine regardless of its own budget, which is why nothing here is budgeted past 45 minutes. The full rule is `CONTRACT.md` section 6, and every routine with a lane implements it identically. **A routine that never took the lock never deletes it**, and `sales-desk-standup` reads it as a diagnostic only.

### 4.4 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless: whatever arrives inside the window runs once, whatever arrives outside it exits clean.

**Set the earliest fire in this table after the time the machine is normally awake.** If the machine wakes at 08:00, a 06:45 fire always arrives as a catch up, which works, but it always lands after the standup and the brief is permanently one run behind. `CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Seven routines, seven jobs. **Never one job that runs several in sequence:** a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.
2. **The job's only content is the invocation.** All the logic is in the SKILL.md. If your scheduler grows a shell script with business rules in it, the rules now live in two places and you find out which one is wrong on the day it matters.
3. **Point every job at `«SALES_ROOT»/routines/` as the routine source.** Never at a copy of a routine folder somewhere else. Every routine ends with a `## Corrections` section you write into and the routine reads at the top of every run, and with two copies you write into one and it reads from the other.
4. **Know what the invocation is before you register anything.** Where `CAPABILITIES.md` 9.2a could not answer for your harness, find its non interactive run command from its own help output, use it, and write what you found into the `## Corrections` at the bottom of that file.
5. **Prove one routine by hand before you register seven.** Run the line for `sales-desk-standup` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you see is an empty brief.
6. **Register the `fire` column, not the window.** The window is enforced inside the routine.
7. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `sales-desk-setup` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«SALES_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, and names that file in its report and in the brief. Run them once yourself and you are scheduled.

**The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work. A job that fires at the wrong time is caught by the window guard. A job that fires twice is caught by the period guard. **The scheduler is a starter motor, not a controller.**

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 06:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling the member that nothing has been produced since a given date, which is correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows, ideally to `«SALES_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is what keeps that true rather than merely intended.

This does not weaken anything, and the reason is worth being clear about. **The prompt gate was never what stopped this kit from sending.** The two stops live inside the routines: the Employee never composes a send action, never presses the send key combination, never clicks a final Submit or Publish control, never enters a credential, and never spends. There is no path where an approval prompt is the last thing standing between a draft and a stranger's inbox. Turning off the prompt removes a question about opening a tab and writing a file. It does not add a capability.

One limit case, because no setting clears it: a prompt raised by the browser rather than by the harness. **If your harness cannot run without interactive approval at all, do not schedule the browser routines.** Run those by hand when you are at the machine. `sales-desk-standup` schedules fine and you still get the brief, the pipeline, and the veto line. `CAPABILITIES.md` section 10 has the full treatment.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.2 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time.
3. Re-register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**Two kinds of change the Employee makes itself, and they belong to different routines.**

**A window.** Any routine that concludes its own `window_start` or `window_end` is wrong edits those two cells on its own row, records the old and the new value in `improvements/CHANGELOG.md`, and carries on. A window is local to one routine, so widening or narrowing it collides with nothing and needs nobody's permission.

**A fire time.** Only `sales-desk-setup` moves one, and only for one reason: to clear a lane collision it detected. That includes a collision against a sibling AI Employee's kit, detected by reading that kit's own `SCHEDULE.md`. It edits the row, records both the old time and the new time in one line in `strategy/CHANGELOG.md` with the evidence path, re-registers that job, and surfaces the change in the next morning brief. A routine that thinks its own fire time is wrong files a card owned by `sales-desk-setup` rather than moving it, because a fire time can only be reasoned about against every other row and every sibling kit's table, and one routine reads neither.

**It moves this kit's row and never a sibling's.** A row in another kit belongs to that kit, and moving it would be exactly the two writers problem this whole rule exists to prevent.

**Nothing in this kit ever removes a row, sets `days` to `off`, or changes a `days`, `key`, or `budget` value on a row that already exists.** Those are the member's. Changing a `key` silently makes every previous run of that routine invisible to its own guard, and the first symptom is a routine running twice in one period. Changing a `budget` changes how much of the member's machine and morning they are giving a routine.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back, and the brief is where the member finds out it happened.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

To stop everything for a while, do not touch this table at all: create an empty file called `PAUSED` in the Employee's folder. Every routine checks for it before it checks anything else. Put a routine id on a line inside it to stop only that one. Delete it to resume, with nothing to re-register.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**No routine is ever left off for a missing input.** A blank placeholder is a research task, not a reason to disable anything. The routine that needs the value researches it, fills it, records the assumption, and runs. `ROLE.md` section 6 carries the table of what gets researched.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If the member travels and changes the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. `«TIMEZONE ID»` in the state file is a record of what was true at setup. It is never used to decide anything.

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
