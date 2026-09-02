# Example output: Northwind Roofing

Everything in this folder is fictional. Northwind Roofing is an invented residential and light commercial roofing company run by Sam, and the only account is named generically as the search ads account. No real business, person, platform account, or URL appears anywhere.

The snapshot is Thursday 2026-03-05 in the kit's first week, installed on the Monday, so the board is short and no change list exists yet. It is a baseline week: one campaign spending, one creative set waiting for upload, one build sheet waiting for a hand on the control.

Nothing here was created in any account. The set and the sheet are the shape of work waiting for Sam, and money moves only when Sam ticks the card.

Every file here was run through this kit's own scripts/copy-check.mjs at the destination the routine that writes it uses, and every run record was validated by scripts/runlog.mjs in dry run mode.

The ledgers are trimmed to a couple of rows each so the shape reads at a glance.

| File | What it is |
|---|---|
| brief-latest.md | The morning brief ads-desk-standup writes, thirty lines at most |
| runlog.jsonl | Three run records: one ok, one skipped out of window, one partial |
| board/board.json | The machine board, the source the markdown is rendered from |
| board/LAUNCH-BOARD.md | The rendered board Sam ticks and writes under |
| metrics/daily.jsonl | The metrics ledger, one account row and one campaign row for the last complete day |
| creative/set-2026-03-04-fast-estimate/set.md | A creative set manifest, text only, with its slot strings |
| build/campaign-storm-repair.md | A campaign build sheet with the budget left to Sam |
