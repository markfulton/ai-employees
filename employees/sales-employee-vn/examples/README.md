# Example output

What a day of the Vietnam variant of the Sales Employee looks like, for a fictional business: Công ty TNHH Mẫu ABC, which sells a timesheet program to workshops and factories, with Lan drafting outreach for the owner. Every name, company, address, email address and number in this folder is made up, the domains sit under `example.com`, and there is no tax code or phone number anywhere. Every Vietnamese file was run through this kit's own `scripts/copy-check.mjs` before it was written here.

The dates are Tuesday 22/09/2026 and Wednesday 23/09/2026: the sweep qualified a few workshops, the first touch routine drafted for the people who had agreed to receive email, the afternoon sweep read one refusal, and the next morning's brief puts the stop line first. Headings, keys, ids, file names and the tick lines stay in English because scripts and other routines read them; the lines the member reads are Vietnamese.

| File | What it is |
|---|---|
| `brief-latest.md` | The morning brief `sales-desk-standup` writes every weekday, the fictional sample from its Step 8.3a: the stop line first under Today, the veto line first under Waiting on you. |
| `runlog.jsonl` | Three run records: one `ok`, one `skipped-out-of-window`, one `partial`. The exact shape `scripts/runlog.mjs` accepts. |
| `pipeline/PIPELINE.md` | The pipeline as the standup renders it, grouped by stage: four cards, one ticked. |
| `crm/contacts.csv` | The contact ledger: the header, one row the member added above the marker carrying the person's consent tag, and the row the sweep appended below it for the same person. |
| `crm/prospects.jsonl` | One prospect, qualified by the sweep and then queued by the first touch routine, with the tests it passed and the verbatim evidence. The legal status test is not among them because the lookup asked for a captcha. |
| `queue/2026-09-22-first-touch.md` | The first of that day's four drafted first touches, in the queue entry shape: the `[QC]` subject label, the sender block with two details left for the member to paste, and the refusal line at the end. It also sits unsent in the mailbox's Drafts. The box is unticked. |

It replaces the original kit's `queue/2026-03-05-first-touch.md`, an English example for a roofing business.

The real files land in the kit root, not here. This folder exists so you can see the shape before you install.
