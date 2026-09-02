# Example output

What a day of the Sales Employee looks like, for a fictional business: Northwind Roofing, a residential and light commercial roofing company run by Sam (sam@example.com), selling inspections and repairs to property managers and homeowners associations. Every name, company, address and number in this folder is made up, and every file was run through this kit's own `scripts/copy-check.mjs` before it was committed.

The dates are the first week of March 2026, a baseline week: the first prospects qualified, the first touches drafted, nothing sent, nothing to score.

| File | What it is |
|---|---|
| `brief-latest.md` | The morning brief `sales-desk-standup` writes every weekday, with the veto line first under Waiting on you. |
| `runlog.jsonl` | Three run records: one `ok`, one `skipped-out-of-window`, one `partial`. The exact shape `scripts/runlog.mjs` accepts. |
| `pipeline/PIPELINE.md` | The pipeline as the standup renders it, grouped by stage: four cards, two ticked. |
| `crm/contacts.csv` | The contact ledger: the header, one row Sam imported above the marker, one row the sweep appended below it. |
| `crm/prospects.jsonl` | Two prospect rows with the tests each one passed and the verbatim evidence. |
| `queue/2026-03-05-first-touch.md` | One drafted first touch in the queue entry shape. It also sits unsent in the mailbox's Drafts. The box is unticked. |

The real files land in the kit root, not here. This folder exists so you can see the shape before you install.
