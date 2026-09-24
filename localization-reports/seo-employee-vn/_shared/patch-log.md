# seo-employee-vn: shared file patch log

Integrator pass, 24/09/2026. Every shared file patch request in the eight routine ledgers, plus the shared file deferrals (`AEO-PLAYBOOK.md`, `INSTALL-PROMPT.md`, `_shared/glossary.md`), applied in the lead's order: `CONTRACT.md`, `SCHEDULE.md` with `employee.json`, `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`, then the shared kit files outside that list (`AEO-PLAYBOOK.md`, `standards/PUBLISH-STANDARD.md`, `recipes/BROWSER-RECIPES.md`) and the report files. A backup of the variant and this folder as they stood before the pass is in the session scratchpad, `vn/seo-employee-vn/integrator-backup/`.

Rules followed: `CONTRACT.md` keeps every section number; new contract material sits in a new section 10 at the end of the file (the contract has no appendix), after `## Answer visibility extension`, and a short pointer sentence is left where a request asked for an insert inside an existing section. No text under a `## Corrections` heading was touched. `## Answer visibility extension` and `## Answer visibility reads` sit after the Corrections heading of their files but under their own level two heading, so they are not Corrections text; both were patched as requested. No form marker, legal instrument number or fine entered a kit file. Where two requests contradicted, the original behaviour was kept and the conflict is logged below.

Codes: AV `seo-answer-visibility`, CR `seo-calendar-refill`, DR `seo-draft-run`, IS `seo-index-sweep`, IN `seo-intake-and-map`, PR `seo-publish-run`, RR `seo-rank-review`, SU `seo-standup`; P is a shared file patch request, D a deferral aimed at a shared file.

## Requests, one row each

| # | From | File and anchor | Decision | Reason |
|---|---|---|---|---|
| 1 | AV P1 | `SCHEDULE.md` section 1, `seo-answer-visibility` row, key | applied | `YYYY-Www` to `YYYY-MM`. 1963 `[CG]`: one monthly batch, asked by hand. Fire, window, budget and lane unchanged, so no stale time anywhere |
| 2 | AV P2 | `SCHEDULE.md` section 2, roster | applied | "First Thursday of each month" |
| 3 | AV P3 | `employee.json`, `seo-answer-visibility` `period_key` | applied | Manifest agrees with the row; the kit checker's manifest rule passes |
| 4 | AV P4 | `CONTRACT.md` `## Answer visibility extension` | applied | One sentence added: `seo-standup` reads the month's ask sheet only to count its unanswered rows (from the AV deferral to the standup, below) |
| 5 | AV P5 | `CAPABILITIES.md` `## Answer visibility reads` | applied | Verbatim |
| 6 | AV P6 | `INSTALL-PROMPT.md` `## SEO/AEO installation extension` | applied | Verbatim. Phase 4 also creates both pasted folders (integrator addition, row 60) |
| 7 | AV D | `AEO-PLAYBOOK.md` `## Observation contract` | applied | Verbatim |
| 8 | AV D | `AEO-PLAYBOOK.md` Google bullet | applied | Verbatim, including its two source URLs. S12, S68 and S72 were re-opened on 24/09/2026 |
| 9 | CR P1 | `CONTRACT.md` 2.6, rows for the ask sheet and the pasted sets | applied, merged | The pasted folder row names `seo-rank-review` and `seo-draft-run` as readers too, because rows 13, 19 and 43 asked for the same route under other names. One path for everybody: `research/result-sets/pasted/` |
| 10 | CR P2 | `CONTRACT.md` 2.8, `research/result-sets/**` row | applied | Rank review added as a reader |
| 11 | CR P3 | `CONTRACT.md` 3.3, paragraph after "Never emit encoded image data" | applied, relocated | Into section 10.4. 3.3 is the club dashboard capability table, and new material belongs in section 10 |
| 12 | CR P4 | `CAPABILITIES.md` `web.search`, after **Absent:** | applied, merged | One paragraph with rows 13, 29 and 46 |
| 13 | CR P5 | `CAPABILITIES.md` 4b `serp.read` | applied | Verbatim, confidence `unknown` |
| 14 | DR P1 | `CAPABILITIES.md` `web.search`, path `research/pasted-results/YYYY-MM-DD-<ascii-query>.md` and an English key shape | merged; the path and the shape declined | Contradicts row 9: `seo-calendar-refill` already writes its ask sheet and reads `research/result-sets/pasted/` in a Vietnamese labelled shape (its Step 5b), while `seo-draft-run` names only "the route `CAPABILITIES.md` gives". Two folders would split what a person pastes. The path and shape the refill already uses are kept for all three readers |
| 15 | DR P2 | `CAPABILITIES.md` `web.fetch`, food safety lookup | applied | Confidence `unknown`. S8 re-opened 24/09/2026 |
| 16 | DR P3 | `CAPABILITIES.md` `image.generate` | applied | Verbatim |
| 17 | DR P4 | `CONTRACT.md` 2.6 alt text and `hero_label` | applied | One clause added: `hero_label` is not a registry field (the draft run's own rule) |
| 18 | DR P5 | `CONTRACT.md` 2.0a, row for the pasted folder | merged into row 9 | 2.0a is "the operator's three paths"; a fourth would change its meaning. The 2.6 row marks the folder **member or person on duty only** |
| 19 | DR P6 | `CONTRACT.md` 2.3, what the property fields carry | applied, relocated | Into section 10.2, with rows 26 and 36 |
| 20 | DR P7 | `standards/PUBLISH-STANDARD.md` section 6 | applied | Verbatim, and the "drifts back the fastest" paragraph under it reworded so it no longer tells an agent to correct a description back into a keyword string. Phần A 203c `[S69+CG]` |
| 21 | DR P8 | `standards/PUBLISH-STANDARD.md` section 5 | applied | Verbatim |
| 22 | DR P9 | `standards/PUBLISH-STANDARD.md` 1.2 | applied | Verbatim |
| 23 | DR D | `_shared/glossary.md`, `ready` gloss | applied | Wording only |
| 24 | IS P1 | `CAPABILITIES.md` 4b `index.request` | applied | "re-opened" written as "read", because a kit file names no report process |
| 25 | IS P2 | `CAPABILITIES.md` 4b, new `sitemap.declare` row | applied | Held, `unknown`. "confirmed in the Phần A ledger" dropped for the same reason |
| 26 | IS P3 | `CAPABILITIES.md` `web.fetch`, sitemap file limits | applied | A platform fact with its source and date, not a legal threshold |
| 27 | IS P4 | `CONTRACT.md` 7.1, six more conditions on a request | applied, relocated | Into section 10.3; one pointer sentence in 7.1 |
| 28 | IS D | `INSTALL-PROMPT.md`, Search Console access guidance | applied | Phase 2 item 6; the old item 6 is now 7. S31 re-opened 24/09/2026 |
| 29 | IN P1 | `CONTRACT.md` 2.3 thresholds, five `retire_` and split keys | applied, merged | One code block with rows 41, 42 and 55. The keys differ from rows 41 and 42 and decide a different thing, so both sets stand |
| 30 | IN P2 | `CONTRACT.md` 2.3, `service_area` | applied, merged | The field list carries it; its meaning is in 10.2 |
| 31 | IN P3 | `CAPABILITIES.md` `web.search`, surfaces read only through a person, `coccocbot`, hosted platforms | applied, merged | The surfaces and the crawler in the `web.search` paragraph; the hosted platforms moved to a new paragraph under the 4b table, where the publish routes live |
| 32 | IN P4 | `CONTRACT.md` Guardrail 1, LinkedIn | applied, merged | One sentence for rows 32 and 45 |
| 33 | IN P5 | `INSTALL-PROMPT.md` standing rule 4 | applied | Verbatim |
| 34 | IN P6 | `INSTALL-PROMPT.md` Phase 3 item 1, default working hours | applied | 321a `[CG]`. A clock time in the install prompt, never in a routine |
| 35 | PR P1 | `CONTRACT.md` 2.3 field list, `publish_control`, `price_source` | applied, merged | With row 30 |
| 36 | PR P2 | `CONTRACT.md` 7.1, a person presses Control one | applied, relocated | Into section 10.3, with the open strange URL card condition; one pointer sentence in 7.1 |
| 37 | PR P3 | `CONTRACT.md` 7.2, its own publishing | applied | The pointer names section 10.3 instead of 7.1 |
| 38 | PR P4 | `CAPABILITIES.md` 4b `cms.publish` | applied | Verbatim |
| 39 | PR P5 | `ROLE.md` line 67 | applied | Verbatim |
| 40 | RR P1 | `CONTRACT.md` 2.3, `judgement_window` 28 | applied | 1766, 1780c, 1785b `[CG]`. `seo-intake-and-map` now seeds 28 too (deferral), so the routines that read it agree |
| 41 | RR P2 | `CONTRACT.md` 2.3, three new keys | applied, merged | See row 29 |
| 42 | RR P3 | `CONTRACT.md` 2.7, scoreboard readers | applied | Verbatim |
| 43 | RR P4 | `CONTRACT.md` 2.7, `tracking/pasted-results/` row | declined as a path; merged into row 9 | The ledger itself asked the lead to fix one path across routines. `seo-rank-review` names only the `web.search` route, so it reads `research/result-sets/pasted/` with no routine edit |
| 44 | RR P5 | `CONTRACT.md` Guardrail 1, LinkedIn | merged into row 32 | Same clause, same effect |
| 45 | RR P6 | `CAPABILITIES.md` `web.search` | merged into row 12 | |
| 46 | RR P7 | `CAPABILITIES.md` `brief.deliver` | applied | One sentence added on the monthly answer summary, the same kind of draft |
| 47 | RR P8 | `_shared/glossary.md` band rows | applied | |
| 48 | RR P9 | `_shared/parsed-strings.md` band row | applied | And a new section 5 listing every variant only string the integrator pass introduced |
| 49 | SU P1 to P10 | `SCHEDULE.md`, `employee.json`, `CONTRACT.md` 1 and 1.4, `README.md`, `CAPABILITIES.md` 9.1, 9.4, 9.5, `INSTALL-PROMPT.md`: standup 08:15, draft run 08:30, publish run 09:30 | declined | Two owner approved clauses contradict: B-8 2286a `[CG]` asks for the standup at 08:15, and B-4 Câu 2 `[CG]` keeps the publish run at 09:15. With the draft run between them, the browser spacing rule (draft run budget 40 minutes plus 20) cannot give both. The standup writer offered Option A or B; under the lead's rule the original rows stay, so no stale shipped time exists anywhere. Carried to the report's Deferred and unresolved |
| 50 | SU P11 | `CONTRACT.md` 2.3, `new_post_share: 2` | applied, merged | See row 29 |
| 51 | SU P12 | `examples/brief-latest.md` | applied | Wording only, fictional. The `## What changed about me` line was also put into Vietnamese so the whole example matches the standup's rule. `copy-check.mjs --dest plain`: PASS |

## Integrator additions with no request behind them

Each keeps the kit consistent with a request or deferral applied above. None adds a rule the form or a re-opened source does not carry.

| # | File | Change | Why |
|---|---|---|---|
| 52 | `CONTRACT.md` | New section 10, "Vietnam operating rules": 10.1 Gate 8 rules, 10.2 strategy file additions, 10.3 narrowed controls, 10.4 pasted result sets and answers, 10.5 what a person sends by hand | The lead's Step 3 and the relocations in rows 11, 19, 27, 36 |
| 53 | `CONTRACT.md` 8.4 | The version check reads `employees/seo-employee-vn/VERSION`; the two upgrade lines use the fork's bundled installer | Intake ledger lead item; GTM 1.11.0 defect 11 and the Chief of Staff precedent. Without it the brief would offer the English kit, which replaces these routines |
| 54 | `ROLE.md` | Guardrail 1 LinkedIn sentence, standing rule 2, standing rule 7 (alt text), 6.2 rows for `publish_control`, `price_source`, `service_area`, and the `country` row | ROLE repeated the two rules rows 20 and 32 changed; left alone it would contradict the contract |
| 55 | `README.md` | New `## The Vietnam variant` section; the keyword research, drafting, publishing and LinkedIn lines; the Apify mention; the version line (it read `v1.2.0`, an original defect, now `v1.10.0`) and the install and upgrade route | The reader documentation must not promise a result set pulled by machine or LinkedIn reading |
| 56 | `INSTALL-PROMPT.md` | `FILL THIS IN` lines 4 to 10; Phase 3 item 1 writes them where section 10.2 says; Phase 4 creates the two pasted folders; the Phase 7 handover is Vietnamese and names what the person on duty does by hand | The lead's Step 2: the install intake asks for every profile field a routine now reads |
| 57 | `AGENTS.md` | One paragraph: this is the Vietnam variant, where its rules live, never upgrade from npm | Chief of Staff precedent |
| 58 | `recipes/BROWSER-RECIPES.md` | `read-linkedin` carries a note that the variant never takes it | Row 32 |
| 59 | `CAPABILITIES.md` 4b | Paragraph on the Vietnamese hosted platforms (WordPress, Haravan, Sapo Web, LadiPage) with the title and description lengths and their sources | Phần A 165, 166a, 188a; the draft run's deferral to the intake (928, 1057), which names vendors a routine body may not |
| 60 | `INSTALL-PROMPT.md` Phase 4 | `research/result-sets/pasted/` and `tracking/answers/pasted/` created empty | Rows 6 and 9 |
| 61 | `SCHEDULE.md` section 9 | One dated note for the answer visibility key | The section asks for one per changed row |
| 62 | `examples/README.md` | One paragraph: the brief is the variant's shape; the rest of the example business is the original's, and its `alt` is the original's keyword string | The draft run ledger flagged the example alt text for the lead |
| 63 | `VERSION`, `employee.json`, `CHANGELOG.md` | 1.10.0 and one entry for the localization pass | The lead's Step 4, D14 |

## Contradictions, and what was kept

| Requests | Conflict | Kept |
|---|---|---|
| SU P1 to P10 against B-4 Câu 2 | Standup 08:15 and publish 09:15 cannot both hold under the spacing rule | The original rows (row 49) |
| DR P1 against CR P1 and RR P4 | Three paths for one pasted result set | The path a routine already writes and reads by name, `research/result-sets/pasted/` (rows 9, 14, 43) |
| RR deferral to intake 12a against intake's own 377a `[CG]` | Two articles and the pause keys against three articles and the retire keys | Each routine's own owner approved clause; the rank review files the pause finding, the intake retires on its own rule. Recorded in the intake ledger |
| CR deferral to standup (move `Tết` entries first) against SU deferral to the refill (place seasonal entries ahead) | Each asks the other to reorder; `CONTRACT.md` 2.6 forbids reordering the calendar and the standup promotes in file order | The original: no reordering. Recorded in both ledgers |

## After review, applied by the final verifier

Requests filed by a routine fixer after the independent review. The final verifier applied all of them on 24/09/2026 as the last writer of the kit; the two that target a routine (rows 67 and 69) were applied too, because no later pass edits those routines and without them the reading routine acts on a line nobody writes. Numbers 68 to 71 replace the duplicate "64" and the unnumbered rows the fixers filed.

| # | From | File and anchor | Decision | Reason |
|---|---|---|---|---|
| 64 | CR P6 (fixer, 24/09/2026) | `CONTRACT.md` 10.2, after the last sentence of the `## Working days and hours` paragraph: `season lock:` lines, one per selling season, ISO date, season name, property ids; `seo-intake-and-map` writes `Tết`, the member any other | applied | Verbatim from the refill ledger. Reviewer finding 2 on `seo-calendar-refill`: its Step 3 season lock (Phần A 107 `[CG]`) read a date no writer produced |
| 65 | CR P7 (fixer, 24/09/2026) | `CONTRACT.md` 10.2, `operator_notes` bullet: each paper also carries the uses it names, in the paper's words | applied | Verbatim. Reviewer finding 9: 4e reads "the uses those papers name". Phần A 84, 163a, 260 `[S8,S66]` |
| 66 | CR P8 (fixer, 24/09/2026) | `_shared/parsed-strings.md` section 5, new row for `season lock:` after the `Xưng hô:` row | applied | Verbatim |
| 67 | CR deferral (fixer, 24/09/2026) | `routines/seo-intake-and-map/SKILL.md`: Step 5 template, the paragraph on the English lines, the Step 4b regulated category row, the Step 14 `no new articles:` refresh row | applied | Template line `season lock: «YYYY-MM-DD», Tết, «property ids»` after `no new articles:`. The `Tết` line is written on the first run and every monthly run from the same public calendar page, the ISO date of `15 tháng Chạp` as that page names it, never computed; where the page names no such date or the member named no property selling into `Tết`, no line and one `assumptions[]` line, so the refill acts on no season (the safe direction). Member `season lock:` lines are kept verbatim. Each paper's `operator_notes` line also carries the uses it names, in the paper's words. The deferral said "after the `campaign:` line", but the template carries no `campaign:` line by design, so the new line follows `no new articles:` |
| 68 | SU P13 | `examples/brief-latest.md` `## Blocked`, compact blocker row: `việc kẹt` becomes `việc đang kẹt` | applied | Wording only, fictional. `copy-check.mjs --dest plain`: PASS |
| 69 | AV P7 (fixer, 24/09/2026) | `routines/seo-standup/SKILL.md` 0.3 read table row for `tracking/answers/ask-sheet-YYYY-MM.md` and `## Waiting on you` rule 7 | applied | Verbatim from the answer visibility ledger: rows counted by pasted file whose name starts with the row id, not by empty answer cells |
| 70 | AV P8 (fixer, 24/09/2026) | `CONTRACT.md` 10.4 path table, rows `tracking/answers/ask-sheet-YYYY-MM.md` and `tracking/answers/pasted/` | applied | Verbatim |
| 71 | AV P9 (fixer, 24/09/2026) | `_shared/glossary.md` row `lead paragraph under H1` | applied | Verbatim: `sapo; in an owner facing summary: đoạn mở đầu bài` |
| 72 | Final verifier addition | `CONTRACT.md` 10.4, `tracking/answers/pasted/` readers cell | applied | Adds `seo-standup`, file names only, because row 69 makes the standup list that folder; the path table must name every reader |
