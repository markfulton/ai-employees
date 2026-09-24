# Example output: Web Dev Employee

Fictional example output for Northwind Roofing, a residential and light commercial roofing company run by Sam, whose two projects are the marketing site at https://www.example.com and a crew portal for the light commercial jobs. It shows what the working folder holds after a baseline week, the first week of March 2026: inventory on Monday, the first fix merged on Wednesday, and the Thursday morning brief below. Every person, company, URL, figure, incident, and change here is invented and none of it comes from a real installation.
Every file was run through the kit's own scripts/copy-check.mjs, and every line of runlog.jsonl through scripts/runlog.mjs in dry run mode, so the shapes match what the routines write.

| File | What it is |
|---|---|
| brief-latest.md | The Thursday morning brief web-standup writes, in the exact shape of its template: English headings, Vietnamese lines under them |
| runlog.jsonl | Three run records: one ok, one skipped out of window, one partial |
| board/REVIEW-BOARD.md | The rendered review board with four cards, two ticked, and the member's own notes kept |
| changes/changes.jsonl | Two change lines: one merged, resolved by the standup, and one drafted by the fix runner |
| health/incidents.jsonl | Two incident lines from the site sweep, one recurring and one quiet |
| changes/2026-03-05-fix-C-005.md | The reviewable change brief the fix runner leaves beside a pushed branch, with the Vietnamese opening, rollback and production check lines |
