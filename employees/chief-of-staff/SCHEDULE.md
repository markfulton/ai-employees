# Chief of Staff: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. It never guesses a window.

`CONTRACT.md` section 1 carries the same seven routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `cos-fleet-reconcile` | `mon-fri` | 07:15 | 07:00 | 11:30 | `YYYY-MM-DD` | 20 min | never |
| `cos-fault-dossier` | `mon-fri` | 14:30 | 14:15 | 18:00 | `YYYY-MM-DD` | 25 min | never |
| `cos-market-sweep` | `wed` | 10:00 | 09:45 | 14:00 | `YYYY-Www` | 40 min | heavy |
| `cos-metrics-review` | `thu` | 10:30 | 10:15 | 15:00 | `YYYY-Www` | 30 min | conditional |
| `cos-decision-brief` | `fri` | 16:00 | 15:45 | 19:00 | `YYYY-Www` | 30 min | never |
| `cos-charter-and-fleet-audit` | `first-weekday` | 12:00 | 11:45 | 17:00 | `YYYY-MM` | 45 min | light |
| `cos-decision-review` | `last-weekday` | 13:00 | 12:45 | 17:30 | `YYYY-MM` | 30 min | never |

Seven rows, seven routines, and every id carries the `cos-` prefix so they namespace cleanly beside the other Agent Employees this one watches.

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
| `never` | Reads and writes files only. Runs to full function on a machine with no browser control at all. Never takes the mutex, and never deletes a lock |
| `light` | Prefers a route that needs no browser, and takes the lane for one step only. `cos-charter-and-fleet-audit` crawls through `web.fetch` and takes the lock only to view the built dashboard |
| `conditional` | Uses the browser on some runs only. `cos-metrics-review` takes a lane if and only if `charter/metric-map.md` names at least one live screen. On a healthy install it names none, and this routine opens nothing |
| `heavy` | Navigates and reads for most of its budget. Owns the lane for the whole browser phase |

**Anything other than `never` takes the browser mutex**, described in section 4.3. **Four of the seven are `never`**, and for two of them that is a discipline rather than a saving: `cos-decision-brief` argues only from facts another routine verified and wrote down, and `cos-decision-review` verifies only against a metric file rather than a display. Opening a page in either would break the thing that makes their output worth reading.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed eight in `CONTRACT.md` section 4.1:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Six of the seven produce their main deliverable with no browser at all**, including the morning brief, the daily dossier, the weekly score, the Friday argument, and the monthly review. `CAPABILITIES.md` section 7 has the routine by routine detail and it is honest about the one that genuinely needs a browser, which is the market sweep.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `cos-fleet-reconcile` | Fleet reconcile | Weekdays | Walks every Agent Employee on this machine strictly read only, classifies every routine as running, stopped loudly, stopped silently, or paused, ages the faults, folds the decision register, and writes the brief |
| `cos-fault-dossier` | Fault dossier | Weekdays | Takes the top open fault and turns it into a page the member can act on in a minute, ending in one paste ready correction line with the exact path it belongs in |
| `cos-market-sweep` | Market sweep | Wednesdays | Works its own watchlist through one contiguous browser phase and captures one dated observation per real change, with a verbatim quote and the exact URL |
| `cos-metrics-review` | Metrics review | Thursdays | Scores the fleet and the business for the week with a source beside every number, citing the Employee that owns a metric rather than recomputing it |
| `cos-decision-brief` | Decision brief | Fridays | Picks three moves, argues both sides of each with a citation in every clause, and argues against its own top recommendation last |
| `cos-charter-and-fleet-audit` | Charter and fleet audit | First weekday of the month | First run it researches the business, discovers the Employees on this machine, writes the map and the charter, seeds the priorities and the watchlist, builds the dashboard, and registers seven jobs. Monthly it re-runs discovery and reconciles the map |
| `cos-decision-review` | Decision review | Last weekday of the month | Folds the decision ledger, scores this Employee's own judgement against the metric files that measured it, retires a move nobody ever accepted, and rewrites the priorities |

**Two of the seven cannot be turned off.**

`cos-charter-and-fleet-audit` writes `charter/fleet-map.md`, which is the file every other routine reads to know what exists. Without it the reconcile can walk exactly one root, its own.

`cos-fleet-reconcile` writes `brief-latest.md`, which is what the member opens first every morning. It is the only writer of `fleet/fleet.json` and `decisions/REGISTER.md`, the only reader of `fleet/inbox.jsonl`, and the only routine that turns a ticked box into a decision outcome. Without it no fault ever ages, the dossier has no input, and no decision is ever scoreable.

**The first run of `cos-charter-and-fleet-audit` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the zip. It detects the first run by the absence of `state/cos-charter-and-fleet-audit.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the period guard, the budget, the mutex, and both stops.

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

**`sun` is not in the vocabulary.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently skipped forever. **The three weekly routines check their own row for `sun` and treat it as an unparsable row**, recording `failed` with a blocker naming the double count, because a silently lost week is worse than a loud failure.

**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a weekend. A fleet that produced nothing on Saturday produced nothing correctly, and Monday's reconcile window covers the whole gap in one pass without losing an hour or counting one twice.

### 3.1 Why the two monthly values are ranges and not single dates

If the monthly routines only ran on the exact first or exact last weekday, a machine that was asleep or shut that morning would skip the whole month. **A month of scoring lost is a month of decisions that never reach an outcome**, and that is the one thing in this kit that cannot be recovered later, because a decision's `visible_by` date passes whether anybody looked or not.

Giving each a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. Be generous about when, be strict about how many times.

**The two monthly routines can never land on the same date.** The shortest month is 28 days, so days 1 to 7 and the last seven days never overlap in any month of any length. A late catch up cannot create the case either, because a first weekday fire arriving on the 25th fails the window guard's day test and exits clean.

---

## 4. Staggering, and the browser lane

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a read returns the wrong page, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes 12 minutes and is budgeted for 40 will one day take 40.
2. **No two routines share a fire minute**, even when neither touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **The weekly three run on consecutive days in one order and it is not arbitrary.** The sweep reads the world on Wednesday. The metrics review reads the fleet and cites the sweep's page on Thursday. The decision brief argues from both on Friday. Do not reorder them: a brief argued on Friday from a market page that has not been written yet is a brief argued from nothing.
5. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes.

### 4.2 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
07:15  cos-fleet-reconcile        20 min  never        takes no lane
14:30  cos-fault-dossier          25 min  never        takes no lane
```
The gap between them is deliberate rather than incidental. The dossier reads `fleet/fleet.json`, which the reconcile writes that morning, so it wants to fire hours later and on the same day. If it ever reads a fleet file whose `generated_on` is not today, the reconcile did not run: it works the fault anyway from the file it has and puts the staleness in the dossier's own header.

**Wednesday adds**
```
10:00  cos-market-sweep           40 min  heavy        lane clear by 10:40
```

**Thursday adds**
```
10:30  cos-metrics-review         30 min  conditional  lane clear by 11:00
```
Different day from the sweep, so no gap arithmetic is needed between them.

**Friday adds**
```
16:00  cos-decision-brief         30 min  never        takes no lane
```

**First weekday of the month adds**
```
12:00  cos-charter-and-fleet-audit 45 min light        lane clear by 12:45
```
**This is the only row that needs the arithmetic**, because the first weekday of a month can be any weekday. On a first weekday that is a Wednesday, the sweep's lane is clear by 10:40 and this fires at 12:00, a gap of 80 minutes. On a first weekday that is a Thursday, the metrics review is clear by 11:00, a gap of 60 minutes. Both clear the 20 minute rule comfortably. The audit's own lane is clear by 12:45, which is 105 minutes before the dossier fires, and the dossier takes no lane anyway.

**Last weekday of the month adds**
```
13:00  cos-decision-review        30 min  never        takes no lane
```
Worst case end 13:30, which is 60 minutes before the dossier fires. It can never collide with the audit, because the two monthly cadences never share a date.

**The tightest gap between two lane holding fires in this schedule is 60 minutes**, on a first weekday that falls on a Thursday. That clears the 20 minute rule with 40 minutes to spare, and it is the first thing to check after any edit.

If you need more room there, **move the audit later rather than shortening the metrics budget.** The afternoon is empty on most days apart from the dossier, which takes no lane.

### 4.3 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. Forty five minutes is the staleness window for every routine regardless of its own budget, which is why nothing here is budgeted past 45 minutes. The full rule is `ROLE.md` section 7 and `CONTRACT.md` section 6.

**A stale lock is also a finding.** If the routine named in it has no run record for its own current period, it died without recording, and that goes in the run record so the next morning's reconcile raises it as `died-holding-lock`. That is one of the four cases in this kit that earns a push.

**A routine that never took the lock never deletes it**, on this Employee or on any other. The four `never` routines may read any lock the fleet map names, as a diagnostic. They write none and delete none.

### 4.4 Why the week runs in this order

**The reconcile goes first every morning** because everything else in the kit reads what it wrote, and because the member reads it with their first coffee. It takes no browser lane, so it costs the morning nothing.

**The dossier goes in the afternoon** because it needs today's fleet file, and because a diagnosis wants a whole run's budget rather than a slice of the morning. A fault it works has by definition been open for at least one full period already, so nothing is lost by the wait.

**The sweep goes mid week** because it wants the browser while nobody else is using it and because its page has to exist before Thursday.

**The metrics review goes after the sweep** so it can cite that week's market page by path rather than recomputing anything off it.

**The decision brief goes last in the week** because both of its evidence inputs are then on disk, verified, quoted, and sourced. It is the only routine whose whole output is an argument, and it argues from files rather than from pages for exactly that reason.

**The audit goes on the first weekday and the review on the last**, so the charter is fresh when the month starts and the priorities are fresh when the audit next arrives. **The two never write the same file:** the audit seeds `charter/priorities.md` once and the review owns it from the second month.

**If a catch up puts the dossier before the reconcile on some day**, the dossier works yesterday's fleet file and says so in its own header. That is a thin day, not a broken one.

### 4.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless.

**Set the earliest fire in this table after the time the machine is normally awake.** If the machine wakes at 08:00, a 07:15 fire always arrives as a catch up, which works, and the brief is permanently one wake behind.

**A day the machine slept through is handled rather than misreported.** The reconcile window runs from the exact instant the previous run closed to this run's start, so a Wednesday run after a Tuesday outage covers both days once. Nothing is lost and no hour is counted twice. `CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.
2. **Seven jobs, and never an eighth.** This Employee registers the seven routines in this kit and nothing else. **It never registers, retimes, disables, or removes a job belonging to any other Employee**, even when it can see one is wrong. It names that in the fleet map and in the report and leaves it to the member.
3. **The job's only content is the invocation.** All the logic is in the SKILL.md.
4. **Know what the invocation is before you register anything.** `CAPABILITIES.md` 9.2a gives its shape per harness. Where that section could not answer for your harness, find its non interactive run command and write what you found into the `## Corrections` at the bottom of that file.
5. **Prove one routine by hand before you register seven.** Run the line for `cos-fleet-reconcile` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you see is an empty brief.
6. **Register the `fire` column, not the window.** The window is enforced inside the routine.
7. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `cos-charter-and-fleet-audit` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«COS_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, and names that file first in its report. Run them once yourself and you are scheduled. **The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work.

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 07:15 the reconcile asks to write a file, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one.

**That is exactly the `silent-stop` fault class this Employee exists to catch on your other Employees**, and it is the one shape of failure that nothing catches on this one. Get the setting right on day one.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows for writes, ideally to `«COS_ROOT»` and nothing else. Read access wants to be wider, because reading your other Employees' folders is the job.

This does not weaken anything. **The prompt gate was never what stopped this kit from doing anything:** it never sends, never spends, never enters a credential, and never opens a write handle outside its own folder, and all four are checked as invariants at the end of every run. Turning off the prompt removes a question about writing a file inside `«COS_ROOT»`. It does not add a capability. `CAPABILITIES.md` section 10 has the full treatment.

If your harness cannot run without interactive approval at all, **schedule the four routines whose lane is `never` and run the other three by hand.** You still get the brief, the dossier, the Friday argument, and the monthly score.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.2 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time. Remember that a first weekday can be any weekday.
3. Re register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**The Employee may change a `fire` time itself, and only for two reasons:** to clear a lane collision it detected inside this kit, or because a routine concluded its own window or cadence is wrong. In the first case `cos-charter-and-fleet-audit` edits the row and records both times in `charter/CHANGELOG.md`. In the second the routine edits **its own row only** and records both times in `improvements/CHANGELOG.md`. Either way it re registers that one job and the change appears in the next morning's brief.

**No routine ever changes a row belonging to another routine**, in this kit or in any other Employee. No routine removes a row, sets `days` to `off`, or changes a `days`, `key`, or `budget` value. Those are the member's.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back, and the brief is where the member finds out it happened.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**Prefer the `PAUSED` file for anything temporary.** An empty `PAUSED` file in the Employee root stops all seven and needs no re registration to undo. The same file holding a routine id on a line stops only that one. A holiday costs one file, and the first brief written after it is deleted names the gap so it reads as explained rather than as a hole.

**No routine is ever left off for a missing input.** A blank value is a research task, not a reason to disable anything. `ROLE.md` section 5 carries the table of what gets researched and what does not, and the list of what does not is three lines long: the ceilings, the rate floor, and the member's own claims.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If the member travels and changes the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. The timezone id in the audit's state file is a record of what was true at intake. **It is never used to decide anything.**

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
