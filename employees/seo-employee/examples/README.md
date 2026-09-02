# Example output: SEO Employee

Fictional example output for Northwind Roofing, a residential and light commercial roofing company run by Sam, with one property at https://www.example.com. It shows what the working folder holds after a baseline week, the first week of March 2026: intake on Monday, the first article live on Tuesday, and the Thursday morning brief below. Every person, company, URL, figure, and article here is invented and none of it comes from a real installation.
Every file was run through the kit's own scripts/copy-check.mjs, and every line of runlog.jsonl through scripts/runlog.mjs in dry run mode, so the shapes match what the routines write.

| File | What it is |
|---|---|
| brief-latest.md | The Thursday morning brief seo-standup writes, in the exact shape of its template |
| runlog.jsonl | Three run records: one ok, one skipped out of window, one partial |
| board/WORK-BOARD.md | The rendered board with four cards, two ticked, and the member's own notes kept |
| content/published.jsonl | Two published lines, the ledger every other routine reads |
| content/drafts.jsonl | A consumed line and a ready line, one from each appender |
| drafts/roof-lifespan-by-material/body.md | A short article draft in the shape seo-draft-run leaves |
| drafts/roof-lifespan-by-material/meta.json | The handoff file seo-publish-run reads beside that draft |
