# Shared file patch log: chief-of-staff-vn

Integrator pass, 24/09/2026. Every `## Shared file patch requests` row from the seven routine ledgers, in the order the lead set: `CONTRACT.md`, then `SCHEDULE.md` with `employee.json` and every stale shipped time, then `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`. Two outbound deferrals aimed at `recipes/BROWSER-RECIPES.md`, a shared kit file outside that list, are logged at the end. New `CONTRACT.md` material sits in section 10, "Vietnam operating rules", placed just before Appendix A, and every existing section number is unchanged.

Status words: **applied** (exact text, at the requested anchor), **applied, relocated** (same text or meaning, placed in `CONTRACT.md` section 10 because the lead asked for new material there), **applied, merged** (combined with another request that said the same thing), **applied in part** (the reason names the part left out), **declined**.

## CONTRACT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| audit 7 | Section 1 roster, audit fire 12:00 to 08:55 | applied | Row edited in place |
| audit 8 | 1.4 code block, audit line | applied | In place |
| audit 9 | 1.4 paragraph on the first weekday arithmetic | applied | In place |
| reconcile 2 | 2.3 table, `charter/constraints.md` readers add declared days off | applied | Row edited in place |
| reconcile 3 | 2.3 paragraph on `- day off:` lines | applied, relocated | 10.2. A one sentence pointer to 10.2 was added to the 2.3 paragraph |
| metrics 5 | 2.3 paragraph on `Tết` closure and sale days as dd/mm/yyyy | applied, relocated and reconciled | 10.2. It contradicted reconcile 3 on the date form (dd/mm/yyyy against ISO). Neither original behaviour existed, so both are kept on one line: the ISO part the reconcile parses, then the dd/mm/yyyy dates the member reads. Sale days stay dd/mm/yyyy |
| brief 2 | 2.3, empty `## Ceilings` refuses every move of that kind of spend | applied, relocated | 10.2, with the four figures the member types |
| brief 1 | 2.5, `decision_id` slugged from the English statement of the move | applied, relocated | 10.3, exact text |
| review 1 | 2.3, the fixed Vietnamese line after `n/a (too few closed decisions)` | applied, relocated | 10.3 states the gloss; the 2.3 sentence is unchanged, so the token other files read is untouched |
| review 3 | 2.0a, Vietnamese written without diacritics | applied, relocated | 10.5, exact text. Kept out of 2.0a, which is the absolute rule section |
| sweep 2 | 2.6, optional `- entity:` watchlist line | applied, relocated | 10.4, exact text |
| sweep 3 | 2.6 table, new row `market/manual.md` | applied, changed | Row added in place. The request said the audit creates the file once; the row says no routine creates or writes it, so no routine gains a write and the audit's file ownership is unchanged. The sweep reads nothing when it is absent. 10.4 gives the line shape |
| integrator | 8.4, the version check read the English kit and the upgrade line would install it | applied | Same repair as `gtm-engineer-vn` 1.11.0 defect 11: the check reads `employees/chief-of-staff-vn/`, and the upgrade line uses `node installer/cli.mjs upgrade chief-of-staff-vn` |
| integrator, Gate 8 | New section 10.1, the rules three or more routines share | applied | See the report's Gate 8 table |

## SCHEDULE.md, employee.json, stale times

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| audit 1 | Row: fire 08:55, window 08:40 to 17:00 | applied | 288 `[CG]` asked for 09:00. 09:00 plus the 45 minute budget plus 20 is 10:05, after the Wednesday sweep's 10:00 fire, so 08:55 keeps the browser spacing rule with no minute to spare. The lead may instead keep 09:00 and move the sweep to 10:05 or later |
| audit 2 to 5 | 4.2 block, arithmetic, tightest gap, "move the audit earlier" | applied | In place |
| audit 6 | Section 9 dated note | applied | In place |
| audit 15, 16 | `employee.json` fire and window_start | applied | In place; version moved to 1.9.0 in the same file |
| stale time scan | Every file for the old 12:00, 11:45, 12:45 audit values | done | `CONTRACT.md`, `SCHEDULE.md` prose, `README.md`, `CAPABILITIES.md` 9.1, 9.3, 9.4 all updated. The one remaining `11:45` is a timestamp in the audit's own run record example, inherited from the original and still inside the new window |

## CAPABILITIES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| audit 10 to 13 | 9.1 shape, 9.3 cron line and its note, 9.4 Task Scheduler line | applied | `55 8 1-7 * *` and `/ST 08:55` |
| metrics 1 | 4b `money.read` row | applied | Vietnamese routes at `unknown`, read only, never a route that needs a bank username and password |
| metrics 2 | 4b, marketplace facts paragraph | applied | Exact text |
| sweep 1 | 4b, platform terms table | applied, merged | New `### Platform terms` at the end of 4b with the nine rows exactly. The intro was widened from "the market sweep" to "every routine", because the audit and the metrics review read the same list |
| audit 19 | `web.fetch`, the platforms that forbid automated reading | applied in part, merged | The platform list is the `Forbidden` rows of the table, and `web.fetch` carries a one line pointer. Its last sentence, "A platform not listed here is read only after its own terms are checked in that run", contradicted the sweep's table intro, which treats an unlisted platform as forbidden. `CAPABILITIES.md` originally had neither rule, so neither sentence was kept there: the table intro says each routine's own file decides, and each routine keeps the rule its writer adopted. The seeding gap between them was closed in the audit routine (seed only what the table permits) |
| metrics 3 | 4b, platforms whose terms bar automated reading | applied, merged | Same content as audit 19 and sweep 1; it lives in the table |
| audit 18 | `web.fetch`, the two public registers | applied | Exact text |
| reconcile 1 | `brief.deliver`, the private chat paragraph | applied | Exact text |

## ROLE.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| audit 17 | 5.1 Working days and hours row with the default hours and lunch break | applied | Exact text. Two rows were added beside it for the other profile fields a routine now reads: the shop's own sale days and the form of address |
| review 2 | Section 9 vocabulary gains `sale or holiday week` | applied | In place |
| metrics 6 | Section 9, the three Vietnamese variant `n/a` reasons | applied | Paragraph after the vocabulary line |

## README.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| audit 14 | Routine table, audit time 08:55 | applied | In place |
| reconcile 4 | The private chat answer paragraph | applied | After "A few minutes on a weekday" |
| integrator | The install section says the variant is not on npm and must not be upgraded with the English kit's line | applied | Top of `## Install`, and one sentence in "What it needs from you" on the new intake questions |

## INSTALL-PROMPT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, lead step 2 | The intake asks for every profile field a routine now reads | applied | FILL THIS IN lines 4 to 10: form of address, working hours and lunch break, days off including the company's `Tết` option, the shop's sale days, the legal entity where the portal cannot be read, the export folder, and the spending ceilings. Phase 3 item 9 says where each goes. Ceilings, including the deepest discount a promotion may carry, are named but never written by the installing agent: the member types them into `## Ceilings`, which keeps the audit's rule that a money figure never comes from a message. The handover names the four figures |

## AGENTS.md and examples/

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator | `AGENTS.md` says this is the Vietnam variant, where its rules live, and never to upgrade it from npm | applied | One paragraph under the title |
| reconcile 5 | `examples/brief-latest.md` lines in Vietnamese under English headings | applied | Exact lines; `## What changed about me` and the footer unchanged. `copy-check.mjs --dest plain`: PASS. `examples/README.md` row says so |

## recipes/BROWSER-RECIPES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| sweep, outbound deferral | `read-a-watchlist-surface`, failure behaviour: a surface on a forbidden platform is never opened | applied | First failure bullet. A6 234 `[S38][S69][S70]` |
| metrics 4 | `read-a-metric-screen` step 2: the sales window for a business metric | applied | In place. 779 `[CG]` |

## Contradictions kept at the original behaviour, or reconciled

1. **Unlisted platforms** (audit 19 against sweep 1): no fallback sentence in `CAPABILITIES.md`; each routine keeps its own. The audit now seeds only what the table permits, which removes the case where the two rules met.
2. **Date form of a day off** (metrics 5 against reconcile 3): both kept on one line, ISO first for the parser, dd/mm/yyyy after it for the member.
3. **Who creates `market/manual.md`** (sweep 3): no routine, so no routine gains a write the original lacked.

Counts: 38 requests, 38 applied (7 relocated to section 10, 3 merged, 1 applied in part, 1 changed), 0 declined, plus 2 recipe deferrals applied and 6 integrator additions.

## cos-fault-dossier fixer, pending after review

Filed 24/09/2026 by the `cos-fault-dossier` fixer after the independent reviewer's FIX findings under D15. Exact old and new text for each row is in `../cos-fault-dossier.md`, `## Shared file patch requests`, rows 1 to 7.

| Source | Request | Status | Where it should land and why |
|---|---|---|---|
| fault dossier 1 | Add `cos-fault-dossier` (the `Xưng hô:` line only) to the readers of `charter/business.md` | applied (verifier, 24/09/2026) | `CONTRACT.md` 2.3 row at line 162, and the 2.8 data flow row at line 442 as `fault dossier (the Xưng hô: line only)`. The routine now reads that line for Step 7 rule 9 (D15, CONTRACT 10.1 rule 9, line 1085) |
| fault dossier 2 | Example dossier: Vietnamese headline sentence after the colon, `What is happening`, `What it has cost` and `What this does not tell you`; both `-08:00` offsets to `+07:00` | applied, corrected (verifier, 24/09/2026) | `examples/dossiers/dossier-seo-employee--seo-publish-run--silent-stop.md` lines 1, 11, 18, 21, 26, 27, 35. Headings, metadata, first record, causes, the line to paste and History unchanged. Scratch copy `copy-check.mjs --dest plain`: PASS |
| fault dossier 3 | `examples/README.md` dossier row says the prose is Vietnamese under English headings | applied (verifier, 24/09/2026) | Row at line 15, last cell |
| fault dossier 4 | Glossary row: fault dossier, `hồ sơ lỗi` | applied (verifier, 24/09/2026) | `_shared/glossary.md` section 1, after the `cash on delivery` row |
| fault dossier 5 | parsed-strings dossier row no longer says byte identical | applied (verifier, 24/09/2026) | `_shared/parsed-strings.md` line 49, last cell |
| fault dossier 6 | Phần A routine map row: form line 51, and "Phần A only pass under D15" | applied (verifier, 24/09/2026) | `_shared/phan-a-ledger.md` line 22 |
| fault dossier 7 | Variant changelog sentence about `cos-fault-dossier` | applied (verifier, 24/09/2026) | `CHANGELOG.md` line 9 |

## Pending after review: cos-market-sweep fixer pass, 24/09/2026

Rows from the `cos-market-sweep` ledger's `## Shared file patch requests`, raised by the independent reviewer's findings 1 and 11. Not applied: the fixer may edit only the routine and its ledger.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| sweep, reviewer finding 1 | `CONTRACT.md` 2.6 table, `market/manual.md` row, reader cell: copy the lines seen today or in the six days before, skipping one the previous week's page already carries | applied (verifier, 24/09/2026) | In place. A weekly Wednesday run that copies only the current ISO week never copies a line seen Thursday to Sunday. The routine already says the new rule; until this lands, `CONTRACT.md` wins |
| sweep, reviewer finding 1 | `CONTRACT.md` 10.4, the hand route paragraph, same change | applied (verifier, 24/09/2026) | In place, exact text in the ledger row |
| sweep, reviewer finding 11 | `_shared/parsed-strings.md` line 54, clause `người trực mở tay ngày dd/mm/yyyy` becomes `có người xem trực tiếp ngày dd/mm/yyyy` | applied (verifier, 24/09/2026) | In place. Nothing parses the clause; the routine already writes the new wording |

## Fixer requests after review (cos-decision-review, 24/09/2026)

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| review fixer, finding 2(e) | `_shared/glossary.md` section 2, insert after the "sale events" row four calibration count labels: proposed `đã đề xuất`, never measured `chưa đo`, reversed `làm rồi quay lại như cũ`, sale or holiday week `rơi vào tuần sale hoặc Tết` | applied (verifier, 24/09/2026) | Exact rows in `cos-decision-review.md` "Shared file patch requests". The routine already uses them at SKILL.md:467; the glossary lets the other routines reuse the same words |

## Fix pass requests from `cos-decision-brief`, after independent review (24/09/2026)

Logged by the `cos-decision-brief` fixer. None is applied here; each waits for the lead after review. Exact old and new text are in `../cos-decision-brief.md`, `## Shared file patch requests`, rows 3 to 5, and the sweep text in its `## Outbound deferrals`.

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| brief 3 | `_shared/glossary.md` row "weekly decision brief": first line of the page becomes `Tờ trình tuần dd/mm đến dd/mm/yyyy.` | applied (verifier, 24/09/2026) | A week shown to the member is a date range only (`STYLE-VI.md` Formats, D12). The routine template already writes it that way |
| brief 4 | `_shared/phan-a-ledger.md` A7 row 251 (line 266): marker cell `[CG]` becomes "A7 251 (unmarked); follows from A4 130 `[CG]` ..., narrows only (D18)" | applied (verifier, 24/09/2026) | Form line 251 carries only `[S13]`, on the second channel clause; the empty ceiling clause is unmarked |
| brief 5 | `localization-reports/STYLE-VI.md` line 10: gloss `chưa đủ 30 mẫu, không tính %` becomes `chưa đủ mẫu, không tính %` | declined by the verifier, left to the lead | Matches `cos-metrics-review` and the glossary; the floor can be overridden with `rate_floor: <n>`. Shared by every `-vn` kit, so the lead decides |
| brief, outbound deferral | `cos-market-sweep` SKILL.md:322: add "(or `giá đang bán đổi, giữ từ` when the selling price changed)" after the `giá gạch đổi, giữ từ` clause | already present, no change | `cos-decision-brief` Step 3 matches both clauses; no writer emits the second. A3 100 `[S26+CG]` |

## Pending, after review

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| reconcile 6 | `examples/brief-latest.md` lines 4, 9, 14, 15: `đang dừng` to `ngừng chạy`, `lỗi đang mở` to `lỗi chưa xử lý`, `chờ anh/chị tick` to `chờ anh/chị chốt`, `mở từ` to `lỗi chưa xử lý từ` | applied (verifier, 24/09/2026) | Exact old and new text in `cos-fleet-reconcile.md`, `## Shared file patch requests`, last row. Follows reviewer FIX findings 4 and 7 on the reconcile routine, whose fixed lines now use the same words. Not applied by the fixer, who may edit only the routine and its ledger |

## Final verifier pass, 24/09/2026

Every row above that read "pending, after review" was settled by the final verifier, the last writer on this kit. 16 rows: 14 applied (1 of them corrected), 1 already present, 1 declined.

- **Applied at the exact text:** fault dossier 1, 3 to 7; sweep reviewer finding 1 (both rows) and finding 11; review fixer finding 2(e); brief 3 and 4; reconcile 6.
- **fault dossier 2, applied, corrected.** The requested text turned three citations into `dòng 402` and `dòng 380 đến 402` and dropped the count of missed runs. `cos-fault-dossier` Step 7 rule 9 keeps every citation in English, and Step 5 ("how many runs have been missed since `first_seen`") needs the count. So the citations stay `seo-employee runlog.jsonl line 402` and `lines 380 to 402`, as in `examples/brief-latest.md`, and line 27 reads `Từ 20/02/2026 đến nay, việc này đã lỡ chín lần chạy đến hạn và không lần nào để lại bản ghi. Bản ghi cuối cùng của việc này vẫn là seo-employee runlog.jsonl line 402.` Line 26 uses `ngày làm việc`, the same word as line 11. The requested citation `dòng 403 đến 446` was dropped, because those lines belong to other routines (cause 3). Every other requested line is exact.
- **brief, outbound deferral: already present.** `cos-market-sweep` SKILL.md line 322 already carries the clause (or `giá đang bán đổi, giữ từ` for the selling price), so no edit was made.
- **brief 5: declined, left to the lead.** `localization-reports/STYLE-VI.md` is shared by every `-vn` kit, and other kits are being verified in the same run. The row's own text says the lead decides. Until the lead changes it, `chưa đủ mẫu, không tính %` in this kit matches the glossary, and STYLE-VI line 10 still shows the older `chưa đủ 30 mẫu` example.


### Consistency edits by the final verifier, 24/09/2026

Wording only, in routine owner text, where one concept had two Vietnamese forms. No instruction, parsed string, heading or `## Corrections` line changed.

| File and line | Before | After | Why |
|---|---|---|---|
| `routines/cos-metrics-review/SKILL.md` 509, 528 | `lỗi đang mở` | `lỗi chưa xử lý` | The reconcile reviewer's fixed term; its fixer flagged these lines for the lead (`../cos-fleet-reconcile.md`, Review fixes) |
| `routines/cos-fault-dossier/SKILL.md` 431 | `mở từ 24/02/2026`, `mở 9 ngày` | `lỗi chưa xử lý từ 24/02/2026`, `lỗi chưa xử lý 9 ngày` | Same term as the brief's `Blocked` line |
| `routines/cos-charter-and-fleet-audit/SKILL.md` 438, 444 | `hồ sơ`, `file hồ sơ` | `hồ sơ doanh nghiệp` | Glossary term for the charter; a bare `hồ sơ` could be read as `hồ sơ lỗi` |

## Follow-up fixer pass, 24/09/2026

Shared file changes made on the lead's direct tasks, not on a routine's patch request. Each routine side change is recorded in its own ledger.

| File | Change | Basis |
|---|---|---|
| `CONTRACT.md` 2.6, `market/manual.md` row | Writer cell: the install creates the file once, holding only a short Vietnamese header, and after that no routine creates or writes it | D22 |
| `CONTRACT.md` 2.8 | New row: `market/manual.md`, member (created once by the install, header only), market sweep | D22; every file in 2.6 has a 2.8 row |
| `CONTRACT.md` 10.2 | A `- day off:` line comes only from the member; a public holiday on an official announcement stays a holiday line until the member says the business closes that day | Audit reviewer NOTE; `[S1]` rows in `../cos-fleet-reconcile.md` (1291, 1335) and the audit deferral row (1335, 1353, 1340); matches audit A7.2 and 10.1 item 3 |
| `CONTRACT.md` 10.4 | The install sentence, and `Không có quan sát tay tuần này.` where the file is absent or holds no line seen in the seven days | D22 |
| `INSTALL-PROMPT.md` Phase 0 item 7 | Create `market/manual.md` once, only where absent, with a seven line Vietnamese header and no observation line | D22 |
| `CHANGELOG.md` 1.9.0 | The `market/manual.md` sentence names the install's header | Accuracy |
| `examples/brief-latest.md` line 4 | `29 routine` to `29 việc định kỳ` | New glossary row for "routine" |
