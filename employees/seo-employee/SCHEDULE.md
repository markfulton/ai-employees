# SEO Employee: the schedule

This file is the only place cadences, fire times, windows, budgets, period keys, and browser lanes live. Every routine reads its own row here at the top of every run, as Step 0.1, and takes `days`, `window_start`, `window_end`, `key`, `budget`, and `browser` from it. **A SKILL.md never carries a clock time.** A registered job may drift from this table without breaking anything, because the window guard catches it and the monthly drift check reports it.

If a routine cannot find its row here, or cannot parse it, it records `status: "failed"` with the blocker `no SCHEDULE.md row for <routine-id>` and exits. It never guesses a window.

`CONTRACT.md` section 1 carries the same seven routines with their cadence in words. **Where the two disagree, this file wins**, because this is the file the member edits and the file the guard reads.

All times are 24 hour local machine time. No time in this file is UTC and none is relative to any other zone.

---

## 1. The rows

This table is authoritative. Edit it, and the routines follow on their next fire.

| routine | days | fire | window_start | window_end | key | budget | browser |
|---|---|---|---|---|---|---|---|
| `seo-standup` | `mon-fri` | 07:15 | 07:00 | 11:30 | `YYYY-MM-DD` | 12 min | never |
| `seo-draft-run` | `mon-fri` | 08:00 | 07:45 | 12:00 | `YYYY-MM-DD` | 40 min | conditional |
| `seo-publish-run` | `mon-fri` | 09:15 | 09:00 | 13:00 | `YYYY-MM-DD` | 30 min | conditional |
| `seo-index-sweep` | `tue` | 11:00 | 10:45 | 16:00 | `YYYY-Www` | 40 min | heavy |
| `seo-calendar-refill` | `wed` | 13:00 | 12:45 | 17:00 | `YYYY-Www` | 40 min | conditional |
| `seo-rank-review` | `fri` | 16:00 | 15:45 | 19:00 | `YYYY-Www` | 40 min | heavy |
| `seo-intake-and-map` | `first-weekday` | 14:30 | 14:15 | 18:00 | `YYYY-MM` | 45 min | conditional |

Seven rows, seven routines, and every id carries the `seo-` prefix so they namespace cleanly beside other AI Employees.

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
| `conditional` | Uses the browser on some paths only. `seo-draft-run` and `seo-calendar-refill` use it only for a source that refuses a fetch. `seo-publish-run` uses it for a `surface` property and for the live check. `seo-intake-and-map` uses it for a site a fetch cannot render and for a read screen it has to confirm |
| `heavy` | Navigates and reads for most of its budget. Owns the lane for the whole run |

**Anything other than `never` takes the browser mutex**, described in section 4.3.

There is no `light` lane and no `read only` lane in this kit. Both were folded into `conditional` and `heavy`, because in practice every routine here either never opens a page or opens one for long enough to want the lane, and a lane value that describes what a routine does to a page rather than whether it competes for the browser is a value that gets read wrong.

### 1.3 What happens on a machine with no browser control

There is no status meaning "this machine has no browser". A missing capability maps onto the closed eight in `CONTRACT.md` section 4.1, and the mapping is not negotiable:

- File work still to do: `partial`, with `no browser control capability configured` in `blockers[]`.
- Nothing else to do: `failed`, same blocker string.

**Four of the seven produce their main deliverable with no browser at all**, including the morning brief, the whole calendar refill, the draft folder, and a repository publish verified through a fetch. `CAPABILITIES.md` section 7 has the routine by routine detail and it is honest about the two that genuinely need a browser, which are the index sweep and the rank review.

---

## 2. The roster

| routine | display name | cadence | job, one line |
|---|---|---|---|
| `seo-standup` | Morning standup | Weekdays | Folds every ledger and every run record since yesterday, reconciles the board, marks the one card the draft run works today, and writes the morning brief |
| `seo-draft-run` | Draft run | Weekdays | Works the one card marked next: pulls the live result set, reads what ranks, writes the body, the metadata, the links and the hero, and leaves one complete draft folder |
| `seo-publish-run` | Publish run | Weekdays | Takes the oldest ready draft, publishes it to its own named property by that property's route, verifies the live URL, and writes the published line |
| `seo-index-sweep` | Index sweep | Tuesdays | Unions every declared sitemap, requests indexing inside an account wide allowance, and keeps every declared sitemap fresh |
| `seo-calendar-refill` | Calendar refill | Wednesdays | Reads the runway on every property and refills only the ones running low, with fully specified entries researched from rank evidence and live result sets |
| `seo-rank-review` | Rank review | Fridays | Reads the member's own search performance and analytics screens, classifies every published article by a fixed rule, writes the scoreboard, and files what it found as cards |
| `seo-intake-and-map` | Intake and topic map | First weekday of the month | First run it discovers the properties, writes the three strategy files, creates the ledgers, files the opening cards, and registers the seven jobs. Monthly it re-reads a month of evidence and rebuilds |

**`seo-standup` is the one that cannot be turned off.** It writes `brief-latest.md`, which is what the member opens first every morning. It is the only writer of `board/board.json` and `board/WORK-BOARD.md`, the only reader of `board/inbox.jsonl`, and the only thing in this kit that decides what `seo-draft-run` works today. Without it no finding ever reaches the board and no card is ever worked.

**`seo-publish-run` is the one the member is most likely to pause deliberately.** Its id on a line inside `PAUSED` stops anything reaching a live property while the drafting, the discovery, and the measurement keep running.

**The first run of `seo-intake-and-map` is exempt from the window guard, and only from the window guard.** The member launches it by hand from `INSTALL-PROMPT.md`, at whatever hour they extracted the kit. It detects the first run by the absence of `state/seo-intake-and-map.json` and records `notes: "first run, window guard not applicable"`. It is also the one run not held to the row's budget: it takes about an hour, it may run past the session that started it, and when it does the member opens a second session and it resumes from `progress[]`. Every other guard still applies, including the pause switch, the period guard, the budget, the mutex, and both stops.

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

**`sun` is not in the vocabulary, and this kit has three weekly routines that would each be broken by it.** A Sunday belongs to the ISO week that just ended, so a weekly routine scheduled on Sunday shares a period key with the following Monday to Friday run and one of the two is silently skipped forever. A row that lists Sunday is treated as unparsable: the routine records `failed` with a blocker naming the double count rather than running and losing a week.

**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a weekend. If the member works weekends, add `sat` as its own row and raise the capacity in `## Working days and hours` in `strategy/properties.md` at the same time. A board that fills seven days a week and a member who works five produces a backlog, not a body of work.

### 3.1 Why the monthly value is a range and not a single date

If `seo-intake-and-map` only ran on the exact first weekday, a machine that was asleep or shut that morning would skip the whole month, and the topic map would go two months without meeting the evidence. Giving it a seven day span plus the once per period guard means it runs on the first eligible day the machine is actually awake, once, and then stops for the month. That is the same trick the window guard uses: be generous about when, be strict about how many times.

---

## 4. Staggering, and the browser lane

Two routines fighting over browser control is a real failure, not a theoretical one. The symptoms are ugly and slow to diagnose: a navigation lands in the other routine's tab, a form gets half filled with the wrong values, a click by element reference hits a detached node, or a disconnect is reported that did not happen while both runs keep going. Nothing crashes. The member gets two bad outputs and no error to explain either of them.

Two things keep the lane clear, and both are needed. The fire times below are the prevention. The mutex in 4.3 is the enforcement.

### 4.1 The rules

1. **Minimum gap between two browser capable fires: the earlier routine's full hard budget, plus 20 minutes.** Use the budget, never the typical run time. A routine that usually takes twelve minutes and is budgeted for forty will one day take forty.
2. **No two routines share a fire minute**, even when neither touches the browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.
3. **The window is a catch up net, not a concurrency plan.** Windows overlap on purpose, so that a late fire still does useful work. Fire times must not overlap. Where a catch up does put two browser routines in the same minute, the mutex decides which one gets the lane and the other records `blocked-browser-busy` after doing its file work.
4. **Friday afternoon is single tenant.** `seo-rank-review` owns it by itself. Do not add anything to it.
5. **No routine is budgeted past 45 minutes**, because 45 minutes is the mutex staleness window and a routine budgeted past it would have its own live lock treated as stale by the next routine along.
6. **If a browser routine records `partial` three weeks running, move its fire or cut its scope. Do not widen its window.** A wider window invites an overlap. A smaller job finishes.

### 4.2 The week as it actually runs

Times below are the fire time, the hard budget, and the time the lane is guaranteed clear.

**Every weekday**
```
07:15  seo-standup            12 min  never        takes no lane
08:00  seo-draft-run          40 min  conditional  lane clear by 08:40
09:15  seo-publish-run        30 min  conditional  lane clear by 09:45
```
Gap from the draft run's worst case end to the publish run's fire: 35 minutes. The rule needs 20.

**Tuesday adds**
```
11:00  seo-index-sweep        40 min  heavy        lane clear by 11:40
```
Gap from the publish run's worst case end: 75 minutes.

**Wednesday adds**
```
13:00  seo-calendar-refill    40 min  conditional  lane clear by 13:40
```
Gap from the publish run's worst case end: 195 minutes.

**Friday adds**
```
16:00  seo-rank-review        40 min  heavy        alone in the afternoon
```

**First weekday of the month adds**
```
14:30  seo-intake-and-map     45 min  conditional  lane clear by 15:15
```
On a first weekday that is also a Wednesday, the gap from the refill's fire is 90 minutes and the rule needs 60. **That is the tightest gap in the whole table and it is the first thing to check after any edit.** On a first weekday that is also a Friday, the gap to the rank review's 16:00 fire is 90 minutes and the rule needs 65.

### 4.3 The mutex, in one paragraph

Every routine whose `browser` value is not `never` reads `state/browser-lock.json` before it touches a page. If the file exists and is less than 45 minutes old, another routine is live: do every phase that does not need the browser, record `blocked-browser-busy` naming the holder and the time it took the lock, and exit. If it is 45 minutes or older it is stale, so overwrite it and note that in the run record. **Delete it on every exit path, including every failure path**, in the same block that writes the run record so a later edit cannot separate the two. A routine that never took the lock never deletes it. The full rule is `CONTRACT.md` section 6 and every routine implements it identically.

`seo-standup` reads that file once, as a diagnostic, and never writes it. A lock held by a routine that has no run record for its own current period is a routine that died, and that is a line in the brief and one of the four cases that earns a push. The member clears it.

### 4.4 Why the day runs in this order

The standup goes first because it compiles what the other routines produced and reconciles yesterday's ticks, and because it takes no browser lane at all, so it costs the morning nothing. At 07:15 it reports the state as it stands at 07:15, which includes yesterday's publish and yesterday's ticks.

The draft run goes second because it works the card the standup just marked, and it wants the lane while nobody else does.

The publish run goes third, because it takes the oldest `ready` draft and the oldest is almost always yesterday's. **It does not publish the draft written forty minutes earlier by preference, and that is deliberate:** oldest first means a draft never sits and goes stale while newer ones jump it.

The three weekly routines sit where they do for one reason each. The index sweep is on Tuesday because a Monday article is live by then and worth a request. The refill is on Wednesday because it reads the rank review's rolling file, which is Friday's, and midweek is far enough from both. The rank review is on Friday afternoon because it needs the whole week's data and because nothing should be queued behind it.

**If a catch up puts the publish run before the standup on some morning**, the publish run takes the oldest ready draft anyway, which is the correct behaviour: its input is a ledger, not the board. If a catch up puts the draft run before the standup, it finds no card marked `next`, files its own research findings, and records `ok`. That is a thin day, not a broken one, and the next morning's standup reconciles both.

### 4.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up. The window guard and the once per period guard exist for exactly this, and together they make a burst harmless: whatever arrives inside the window runs once, whatever arrives outside it exits clean.

**Set the earliest fire in this table after the time the machine is normally awake.** If the machine wakes at 09:00, a 07:15 fire always arrives as a catch up, which works, but the brief is permanently one run behind. `CAPABILITIES.md` section 9.5 covers the per platform detail, including the cron case, which never catches up at all.

**The three weekly routines are the ones a sleeping machine actually costs.** A missed weekday is one article. A missed Tuesday is a week of discovery, and a missed Friday is a week of measurement that cannot be recovered later because the scoring window moves on. Their windows are wide for that reason: the index sweep has more than five hours, the refill four, and the rank review three.

---

## 5. Registering this table

Every harness schedules differently and some do not schedule at all. **`CAPABILITIES.md` section 9 is the file that says which mechanism yours has and gives the exact commands for each one.** Section 9.2a of the same file says what the invocation inside those commands actually looks like on your harness. Neither is restated here, because a set of commands written down twice is a set of commands that will disagree.

What belongs here is the shape, which is the same on every harness.

1. **One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.
2. **The job's only content is the invocation.** All the logic is in the SKILL.md. If a scheduler grows a shell script with business rules in it, the rules now live in two places and you find out which one is wrong on the day it matters.
3. **Know what the invocation is before you register anything.** `CAPABILITIES.md` 9.2a gives its shape per harness.
4. **Prove one routine by hand before you register seven.** Run the line for `seo-standup` in a terminal and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you see is an empty brief.
5. **Register the `fire` column, not the window.** The window is enforced inside the routine.
6. **Name every job exactly after its routine id.** The monthly drift check can only match a registered job to a row when the names are identical.

**The Employee registers these itself during setup.** `seo-intake-and-map` reads this table and takes whichever route `CAPABILITIES.md` says exists on this machine: the harness's own scheduler first, the operating system's scheduler through `shell.run` second. Where neither is available it writes every command it would have run into `«SEO_ROOT»/schedule-commands.txt`, expanded rather than left as a placeholder, files a `verify` card naming that file, and puts the same line in `blockers[]` so it arrives by two routes. **The kit runs identically whether a scheduler or a person started the run**, because every routine reads the clock, reads its row, and decides for itself whether to work.

### 5.1 The setting that decides whether any of this produces anything

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.**

At 08:00 the draft run asks to fetch a page, or to write a file, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling the member that nothing has been produced since a given date, which is correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode**, scoped as narrowly as your harness allows, ideally to `«SEO_ROOT»` and nothing else. These routines have no business writing anywhere else, with one named exception: a property's own repository, where `seo-publish-run` writes the post file, the registry entry, the sitemap source, and one pillar link. Scope the grant to include that repository and nothing more.

This does not weaken anything, and the reason is worth being clear about. **The prompt gate was never what stopped this kit from sending.** The two stops live inside the routines. The Employee never composes an email, never comments, never posts to a third party surface, never enters a credential, and never spends. The one publish control has three conditions written into the routine that presses it, and turning off an approval prompt does not relax one of them. It removes a question about opening a tab and writing a file. It does not add a capability.

One limit case, because no setting clears it: a prompt raised by the browser rather than by the harness. **If your harness cannot run without interactive approval at all, do not schedule `seo-index-sweep` or `seo-rank-review`.** Run those two by hand when you are at the machine. The other five schedule fine and you still get the brief, the drafts, and the published articles. `CAPABILITIES.md` section 10 has the full treatment.

---

## 6. Changing a time

1. Edit the row in this file. This file is the source, so change it here first.
2. Recompute the gaps in section 4.2 for every day the change touches. If any browser capable fire now sits inside another browser routine's budget plus 20 minutes, pick a different time. Check the first weekday cases as well as the plain weekday ones.
3. Re register that one job at the new `fire` time, or leave it and let the monthly drift check remind you. The routine follows the new window either way, on its next fire.

**`seo-intake-and-map` may change a `fire` time itself, and only for one reason: to clear a lane collision it detected.** It confirms the collision actually happened, by finding `blocked-browser-busy` records in the month naming the pair, rather than merely that it was possible. It moves the **later** routine's fire, later rather than earlier, records both the old and the new value in one line in `strategy/CHANGELOG.md` with the evidence path, re registers that one job, and the change reaches the member through the next morning brief. It never widens a window to solve a collision, because a wider window invites an overlap rather than resolving one. It never moves its own fire to give itself more room. It never removes a row, never sets `days` to `off`, and never changes a `days`, `key`, or `budget` value. Those are the member's.

A fire time is not a send, not a spend, and not a credential. There is no proposal file in this kit and no verdict to wait for. If the change is wrong, one line in this table puts it back.

---

## 7. Turning a routine off

Set its `days` to `off`. **Do not delete the row.** A missing row is a `failed` run record every time the job fires, which fills the brief's `Blocked` section with noise. `days: off` produces a clean `skipped-out-of-window` instead.

Then either remove the job or leave it. Leaving it costs nothing, because the routine exits in under a second, and turning the routine back on later is one word in this file.

**No routine is ever left off for a missing input.** A blank property field is a research task, not a reason to disable anything. The routine that needs the value researches it, fills it, records the assumption, and runs. `ROLE.md` section 6 carries the table of what gets researched and what does not, and the list of what does not is two lines long.

**Turning off `seo-publish-run` for a while is a legitimate and common choice**, and the pause switch is the better tool for it, because it is one file the member deletes rather than a row they have to remember to change back.

---

## 8. Daylight saving, travel, and the clock

Every fire time here is wall clock time on the machine. When the clock shifts for daylight saving, the whole schedule shifts with it and the windows absorb the change. Nothing needs editing.

If the member travels and changes the machine's timezone, the routines follow the new local time immediately, because every one of them reads the live clock at the top of the run and none of them reads a stored timezone. `«TIMEZONE ID»` in the state file is a record of what was true at intake. It is never used to decide anything.

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
