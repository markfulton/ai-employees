# Example output

What a day of the GTM Engineer looks like, for a fictional business: Northwind Roofing, a residential and light commercial roofing company run by Sam (sam@example.com). Every name, address, company and number in this folder is made up, and every file was run through this kit's own `scripts/copy-check.mjs` before it was committed.

The dates are the first week of March 2026, a baseline week: nothing sent yet, so the brief carries no rates and the scoreboard would read `n/a (baseline week)` where a number will later go.

| File | What it is |
|---|---|
| `brief-latest.md` | The thirty line morning brief `gtm-board-standup` writes every weekday. Three sections, the pointer line at the foot. |
| `runlog.jsonl` | Three run records: one `ok`, one `skipped-out-of-window`, one `partial`. The exact shape `scripts/runlog.mjs` accepts. |
| `board/LAUNCH-BOARD.md` | The board as the standup renders it: four cards, two ticked. |
| `crm/contacts.csv` | The contact ledger: the header, one row you imported yourself above the marker, one row the sweep appended below it. |
| `queue/2026-03-05-email.md` | One drafted first touch in the queue entry shape. Nothing in it was sent; the box is unticked. |

The real files land in the kit root, not here. This folder exists so you can see the shape before you install.
