# Example output: Northwind Roofing

Everything in this folder is fictional. Northwind Roofing is an invented residential and light commercial roofing company run by Sam, and the two platforms are named generically as short video and business network. No real business, person, platform account, or URL appears anywhere.

The snapshot is Thursday 2026-03-05 in the kit's first week, installed on the Monday, so the calendar is short and nothing has been reviewed yet. It is a baseline week: two posts out, one due today, one planned for Friday, and a small reply queue.

Nothing here was posted by anybody. The queue entry is a draft sitting on disk with its hold box under it, and it only goes out if Sam leaves that box alone.

Every file here was run through this kit's own scripts/copy-check.mjs at the destination the routine that writes it uses, and every run record was validated by scripts/runlog.mjs in dry run mode.

The ledgers are trimmed to a couple of rows each so the shape reads at a glance.

| File | What it is |
|---|---|
| brief-latest.md | The morning brief soc-calendar-standup writes, thirty lines at most |
| runlog.jsonl | Three run records: one ok, one skipped out of window, one partial |
| calendar/calendar.json | The machine calendar, the source the markdown is rendered from |
| calendar/CALENDAR.md | The rendered calendar Sam ticks and writes under |
| posts/posts.jsonl | The post ledger, one published row and one drafted row |
| queue/2026-03-05-business-network.md | A queue file with one draft for tomorrow and its hold box |
