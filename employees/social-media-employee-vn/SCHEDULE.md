# Social Media Employee: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time, a window, a budget figure, or a per run cap.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. It never guesses a window.

`CONTRACT.md` section 1 carries the same seven routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `soc-engagement-sweep` | `mon-fri` | 05:45 | 05:30 | 08:00 | `YYYY-MM-DD` | 40 min | heavy |
| `soc-calendar-standup` | `mon-fri` | 07:10 | 07:00 | 07:40 | `YYYY-MM-DD` | 12 min | never |
| `soc-publish-run` | `mon-fri` | 08:40 | 08:35 | 11:00 | `YYYY-MM-DD` | 20 min | light |
| `soc-material-sweep` | `mon-fri` | 09:20 | 09:10 | 12:30 | `YYYY-MM-DD` | 35 min | heavy |
| `soc-draft-queue` | `mon-fri` | 10:15 | 10:05 | 15:00 | `YYYY-MM-DD` | 35 min | conditional |
| `soc-performance-review` | `fri` | 15:50 | 15:35 | 19:00 | `YYYY-Www` | 40 min | heavy |
| `soc-intake-and-voice` | `first-weekday` | 13:00 | 12:45 | 17:00 | `YYYY-MM` | 45 min | light |

Seven rows, seven routines, and every id carries the `soc-` prefix so they namespace cleanly beside other AI Employees.

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
| `never` | Reads and writes files only. Runs to full function on a machine with no browser control at all. Never takes the mutex |
| `light` | Opens a page for one bounded phase and releases the lane. `soc-publish-run` reads permalinks back. `soc-intake-and-voice` reads the member's own published posts |
| `conditional` | Uses the browser on some paths only. `soc-draft-queue` uses it only when a draft carries a link that `web.fetch` could not verify, which on most days is no path at all |
| `heavy` | Navigates and reads for most of its budget. Owns the lane for the whole run |

**Anything other than `never` takes the browser mutex**, described in section 4.3. There is no `read only` lane in this kit, because every browser lane here is read only: nothing in this kit publishes through a browser.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed eight in `CONTRACT.md` section 4.1, and the mapping is not negotiable:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Five of the seven produce their main deliverable with no browser at all**, including the morning brief, the draft queue, the publish handover, and most of the Friday scorecard. `CAPABILITIES.md` section 7 has the routine by routine detail and it is honest about the one that genuinely cannot run without one, which is the engagement sweep.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `soc-engagement-sweep` | Engagement sweep | Weekdays | Proves every published post is genuinely live, reads the counts attached to it, captures every human who spoke to this account, and drafts a reply for each one into a queue the member answers by hand |
| `soc-calendar-standup` | Calendar standup | Weekdays | Reconciles yesterday's ticks and receipts into the calendar, folds the slot inbox, re renders the calendar, and writes the brief. Its first lines name what publishes today and the tick that stops it |
| `soc-publish-run` | Publish run | Weekdays | Hands today's due, drafted, unheld slots to the channel the member configured, for destinations the member allowed, and records a receipt the instant each one lands |
| `soc-material-sweep` | Material sweep | Weekdays | Captures the dated raw material tomorrow's drafts are built from, out of the member's own work, their own published surfaces, their own saved searches, and the places their audience is |
| `soc-draft-queue` | Draft queue | Weekdays | Writes one post per slot due tomorrow, in the member's own voice, on a rotated framework, inside the platform's real character arithmetic, and judges every candidate before it lands |
| `soc-performance-review` | Performance review | Fridays | Scores the week from the ledgers with a source path beside every number, rewrites the drafting standards from that evidence, replays the browser flows, and files one thing to stop and one to do more of |
| `soc-intake-and-voice` | Intake and voice | First weekday of the month | First run it researches the business, reads the member's own published posts, builds the voice file from real samples, writes the plan, seeds the opening slots, and registers the schedule. Monthly it re reads the evidence and rebuilds only what it contradicts |

**`soc-calendar-standup` is the one that cannot be turned off.** It writes `brief-latest.md`, which is what the member opens first every morning, and its publishing line is the only place in this kit that tells them what is about to go out under their name and how to stop it. Without it the calendar never clears a slot, no rate is ever computable, and `soc-publish-run` refuses to publish.

**The first run of `soc-intake-and-voice` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the zip. It detects the first run by the absence of `state/soc-intake-and-voice.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the budget, the mutex, and both stops. It is the only exemption in this kit and no other routine has or may add one.

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

**`sun` is not in the vocabulary.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently skipped forever. `soc-performance-review` treats a row carrying `sun` as unparsable and records the blocker naming the double count.

**`daily` is not in the vocabulary either.** If the account posts at weekends, add `sat` as its own row for `soc-publish-run` and `soc-draft-queue`. The shipped design covers the weekend differently and more cheaply: on a Friday, `soc-draft-queue` also drafts Saturday's and Sunday's slots, and `soc-publish-run` hands the whole weekend to the member's own scheduler at each slot's own time. That way nothing has to fire on a day the member is not at their desk.

### 3.1 Why the monthly value is a range and not a single date

If `soc-intake-and-voice` only ran on the exact first weekday, a machine that was asleep or shut that morning would skip the whole month. Giving it a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. That is the same trick the window guard uses: be generous about when, be strict about how many times.

`last-weekday` is in the vocabulary and no shipped row uses it. It is there so a member who adds a routine on a month end cadence has the value already defined and already understood by the guards.

---

## 4. Staggering, the browser lane, and the two orderings

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a read comes back with the previous view, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes 12 minutes and is budgeted for 40 will one day take 40.
2. **No two routines share a fire minute**, even the one that never touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so that a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **Friday afternoon is single tenant.** `soc-performance-review` owns it by itself. Do not add anything to it.
5. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes.

### 4.2 The two orderings that are not preferences

**These are the only two constraints in this table that are load bearing, and a schedule that breaks either has broken the product without changing a word in any other file.**

**Ordering one: the veto window.** `soc-calendar-standup` fires before `soc-publish-run`, **and its `window_end` falls strictly before the publish run's `window_start`.** In the shipped table that is 07:40 and 08:35.

The brief names every slot going out today, at what time, to which destination, and the one tick that stops any of them. If the publish run could fire before the brief was written, the member would be reading about posts that had already gone out. `soc-publish-run` checks this itself at Step 0.1, two ways: it compares the two rows, and it confirms `state/soc-calendar-standup.json` carries today's period key. **If either check fails it publishes nothing that run and records `partial` with the blocker.** That is the one condition under which a run with workable slots publishes nothing, and it is deliberate: an autonomous publisher without a veto window is not the product.

**The veto lead, which the standup reads.** The member reads the brief on their phone from the start of their morning, not at the standup's fire time, and needs time after reading to tick a hold box, or to ask whoever scheduled a post to take it down. The owner set that lead:

`veto_lead: 90 min`

`soc-calendar-standup` reads this one line. A slot dated the next day `soc-publish-run` runs, whose time is earlier than the standup's `window_end` plus this lead, is named in today's brief as an early slot, because the next brief would reach the member too late to stop it. Change the figure here and nowhere else.

**A slot timed before the publish run's own fire is not lost and not moved.** The publish run reaches it when it fires and, because its time has already passed, hands it over through `channel.publish`, exactly as the original kit treats an overdue slot, so it goes out late by the difference. The early slot line names it the day before. To have such a post go out on time, give the slot a time after the publish run's `fire`.

**The standup's window is the narrowest in this table and that is the cost of the ordering.** It is 40 minutes wide rather than several hours. **If the machine is not awake by 07:40, no brief is written, nothing publishes that day, and both routines say so.** That is the safe outcome rather than a bug. If it happens more than once, move the whole morning block later, together, per section 6. Never widen the standup's window past the publish run's start, and never move the publish run earlier.

**Ordering two: a draft sleeps a night.** `soc-draft-queue` fires after `soc-material-sweep`, so today's material is on the ledger before it reaches for it, and both fire the day before the slot they serve. Every draft sits on disk for a full day with a hold box under it before anything hands it to a channel. A draft written and published in the same run has had no veto window at all.

### 4.3 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
05:45  soc-engagement-sweep      40 min  heavy        lane clear by 06:25
07:10  soc-calendar-standup      12 min  never        takes no lane
08:40  soc-publish-run           20 min  light        lane clear by 09:00
09:20  soc-material-sweep        35 min  heavy        lane clear by 09:55
10:15  soc-draft-queue           35 min  conditional  lane clear by 10:50
```
Gap from the engagement sweep's fire to the publish run's: 175 minutes, against a required 60. Gap from the publish run's fire to the material sweep's: 40 minutes, against a required 40. Gap from the material sweep's fire to the draft queue's: 55 minutes, against a required 55.

**Friday adds**
```
15:50  soc-performance-review    40 min  heavy        alone in the afternoon, page ready by 16:30
```

**First weekday of the month adds**
```
13:00  soc-intake-and-voice      45 min  light        lane clear by 13:45
```
Gap from the draft queue's worst case end: 130 minutes. On a first weekday that is also a Friday, the gap from the intake's worst case end to the review's fire is 125 minutes.

**The tightest gaps in the schedule are 40 minutes**, between the publish run's fire and the material sweep's, **and 55 minutes**, between the material sweep's fire and the draft queue's. Each meets the 20 minute rule exactly, with no minute to spare, and they are the first thing to check after any edit.

If you need more room there, **move the material sweep later rather than shortening the publish run's budget**, and move the draft queue by the same amount. The morning has room and the material sweep only has to finish before the draft queue starts.

### 4.4 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. Forty five minutes is the staleness window for every routine regardless of its own budget, which is why nothing here is budgeted past 45 minutes. The full rule is `CONTRACT.md` section 6 and every routine implements it identically.

**One routine treats a busy lane differently and it is worth knowing why.** `soc-publish-run` hands over every slot exactly as normal when the lock is held, and skips only the permalink read back. The read back is a same day convenience. The receipt is the safety mechanism, and `soc-engagement-sweep` confirms every permalink the next morning anyway.

### 4.5 Why the morning runs in this order

The engagement sweep goes first because it is the only routine that genuinely cannot work without a browser, it wants the lane while nobody else does, and its `live-missing` line is the one thing in this kit that can reopen a slot before the day's drafting starts.

The standup goes second because it compiles what the sweep produced, applies yesterday's receipts, and writes the brief. It takes no browser lane at all, so it costs the morning nothing, and it is what makes the publish run safe to fire.

The publish run goes third, in a narrow slot after the brief and before the first typical posting time. It needs almost no lane. In this variant it fires after the hour in which the owner reads the brief on their phone, which puts it after some posting times, and section 4.2 says how an early slot is named the day before.

The material sweep goes fourth, with the whole mid morning to work in.

The draft queue goes last, because it needs the material sweep's output and because it works on tomorrow.

**If a catch up puts the standup after the publish run on some morning**, the publish run finds no standup record for today, publishes nothing, and says so. That is a thin day, not a broken one, and it is exactly the behaviour the ordering exists to produce.

### 4.6 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless.

**In `soc-publish-run` that is a hard safety property rather than a tidiness rule.** Without the due-today rule, a machine that slept through Wednesday and Thursday would publish three days of posts in three minutes on Friday morning, under the member's name, to a live audience. Wednesday's slot is `missed`, the standup marks it so, the member reads it in the brief, and they decide. **There is no catch up, ever.**

`CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.
2. **The job's only content is the invocation.** All the logic is in the SKILL.md.
3. **Point every job at `«SOC_ROOT»/routines/` and never at a copy.** Every routine ends with a `## Corrections` section the member writes into and the routine reads at the top of every run. With two copies they write into one and it reads from the other.
4. **Prove one routine by hand before you register seven.** Run the line for `soc-calendar-standup` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. **Prove the standup and never the publish run**, because the standup writes files and sends nothing and the publish run is the one routine with an outward surface.
5. **Register the `fire` column, not the window.** The window is enforced inside the routine.
6. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `soc-intake-and-voice` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«SOC_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, and names that file in the first paragraph of its report. **The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work.

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 05:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows, ideally to `«SOC_ROOT»` and nothing else.

This does not weaken anything, and in a kit that can publish the reason is worth being precise about. **The prompt gate was never what stopped this kit from publishing the wrong thing.** Four things do, and all four live inside the routines: the publish allow list, which is empty until the member types into it and which no routine ever writes; the full day a draft sits on disk with a hold box under it; the brief that names every slot going out and the tick that stops it, which the publish run confirms was actually written; and the four conditions checked per slot immediately before each handover. Turning off the prompt removes a question about opening a tab and writing a file. It does not touch any of those four.

One limit case, because no setting clears it: a prompt raised by the browser rather than by the harness. **If your harness cannot run without interactive approval at all, do not schedule the browser routines.** Run those by hand when you are at the machine. The file routines schedule fine and you still get the brief, the queue, and the scorecard. `CAPABILITIES.md` section 10 has the full treatment.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.3 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time.
3. **Check the two orderings in section 4.2 by hand.** The standup's `window_end` must still fall strictly before the publish run's `window_start`, and the draft queue must still fire after the material sweep.
4. Re register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**Moving the morning block, which is the change most members will want.** If the machine is not awake at 05:45, move all five weekday rows later by the same amount, keeping the gaps and the two orderings intact. For example, adding ninety minutes gives an engagement sweep at 07:15, a standup at 08:40 with its window at 08:30 to 09:10, a publish run at 10:10 with its window opening at 10:05, a material sweep at 10:50, and a draft queue at 11:45, which still clears the first weekday intake at 13:00. **Move them together or the orderings break.**

**The Employee may change a `fire` time itself, and only for two reasons: to clear a lane collision it detected, or because one of the two orderings in section 4.2 is broken.** It edits the row, records both the old time and the new time in one line in `plan/CHANGELOG.md` with the evidence path, re registers that job, and surfaces the change in the next morning brief. It never removes a row, never sets `days` to `off`, and never changes a `days`, `key`, or `budget` value. Those are the member's.

**Two changes are barred by name, and a routine that drafts one has found a defect in its own reasoning rather than a new permission.** `soc-draft-queue` and `soc-calendar-standup` never move to a fire time later than `soc-publish-run`'s. `soc-publish-run` never moves to a fire time at or before `soc-calendar-standup`'s `window_end`. Either one removes the veto window.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back, and the brief is where the member finds out it happened.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**To stop publishing without stopping anything else, do not touch this table.** Put `soc-publish-run` on a line inside a file called `PAUSED` in the Employee's folder. Drafting, listening, material capture, and the morning brief all carry on, the queue stays full, and deleting that line resumes everything with nothing to re register.

**No routine is ever left off for a missing input.** A blank placeholder is a research task, not a reason to disable anything. The routine that needs the value researches it, fills it, records the assumption, and runs. `ROLE.md` section 7 carries the table of what gets researched and what does not, and the list of what no routine ever fills is three items long: the publish allow list, the member's own claims, and the member's own typed numbers.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If the member travels and changes the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. `«TIMEZONE ID»` in the state file is a record of what was true at intake. **It is never used to decide anything.**

**One thing does need a look after a move, and it is the only thing.** Slot times in `calendar/calendar.json` were chosen for the audience the member had when they were seeded, in the timezone they were in. Moving from one continent to another does not move the audience. The times are the member's to change, in the calendar, and `soc-performance-review` will start measuring the new ones from the week they change.

If the times look wrong by exactly one hour, or by exactly a whole number of hours, the machine's timezone is wrong. Fix the machine. Do not compensate by editing this table, because the next correct clock will then be wrong by the same amount in the other direction.

---

## 9. Notes on this schedule

Rows that differ from the shipped defaults are recorded here with the date and the reason, so the next reader does not undo a deliberate change.

Format: `YYYY-MM-DD: <routine>, <what changed>, <why>.`

2026-09-24: soc-calendar-standup, fire 06:50 to 07:10 and window 06:40 to 07:20 to 07:00 to 07:40, veto_lead added in section 4.2, because the owner reads the brief on their phone from 07:30 to 08:30 on open days and wants it at least 90 minutes before the earliest post; moved together with soc-publish-run.
2026-09-24: soc-publish-run, fire 07:25 to 08:40 and window_start 07:22 to 08:35, so the handover follows the owner's reading of the brief and ordering one still holds.
2026-09-24: soc-material-sweep, fire 08:10 to 09:20 and window_start 08:00 to 09:10, the publish run's full budget plus twenty minutes after its new fire; it also now reads the shop's daily drop after the staff send it. window_end unchanged, so the intake's window still opens after it closes.
2026-09-24: soc-draft-queue, fire 09:15 to 10:15 and window_start 09:05 to 10:05, the material sweep's full budget plus twenty minutes after its new fire, so ordering two still holds. window_end unchanged, so Friday afternoon stays single tenant.
2026-09-24: soc-performance-review, fire 16:00 to 15:50 and window_start 15:45 to 15:35, so a full budget run leaves the page ready by 16:30 on a Friday, the time the owner set.

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.` Every routine reads this section at the top of every run.

---

## The lane is per platform, amended at Standard v1.1, 2026-08-28

This section supersedes the browser lane and mutex language above wherever they disagree.

The harness runs agent sessions in isolated browser tab groups, so two routines touching different platforms may run at the same time. What still serializes is the member's identity on one platform: a site sees one logged-in account, not tab groups. So `state/browser-lock.json` now carries a `sites` list naming the platforms the holder is touching. A routine taking the lane writes its platforms; a second routine reads the lock and proceeds when its own platforms are disjoint, and records `blocked-browser-busy` after its file work only on an overlap. The staleness rule, the delete-on-every-exit rule, and the standup's reading of a stale lock as evidence of a dead run are all unchanged. Fire-time staggering above remains as prevention for same-platform pairs and machine load, not as a claim that the browser is scarce.
