# Example output

What a day of the Customer Satisfaction Employee looks like, for a fictional business: Northwind Roofing, a residential and light commercial roofing company run by Sam (sam@example.com), with a support mailbox and a public review listing. Every name, ticket, account and figure in this folder is made up, and every file was run through this kit's own `scripts/copy-check.mjs` before it was committed.

The dates are the first week of March 2026, a baseline week: the first tickets captured, the first replies drafted, one account flagged, no clocks long enough to score.

| File | What it is |
|---|---|
| `brief-latest.md` | The morning brief `csat-desk-standup` writes every weekday, with the at-risk account and the credit waiting on Sam's hand. |
| `runlog.jsonl` | Three run records: one `ok`, one `skipped-out-of-window`, one `partial`. The exact shape `scripts/runlog.mjs` accepts. |
| `desk/DESK-BOARD.md` | The desk board as the standup renders it, grouped by who closes the card and then by severity: four cards, two ticked. |
| `tickets/tickets.jsonl` | Two ticket lines with the customer's words verbatim, the theme, the severity and the rules that graded it. |
| `queue/2026-03-05-reply.md` | One drafted reply in the queue entry shape, naming a credit and the screen it is granted on. Nothing granted, nothing sent, the box unticked. |

The real files land in the kit root, not here. This folder exists so you can see the shape before you install.

**In this Vietnam variant** the queue file opens with the three Vietnamese header lines `csat-reply-desk` writes. The entries below them, the brief, the board, and the ticket lines are still the English kit's fictional example for Northwind Roofing, kept so the machine parsed lines (`- ticket:`, `- [ ] sent`, the ticket JSON keys) can be seen in their exact shape. The routines themselves carry fictional Vietnamese examples of every owner facing line.
