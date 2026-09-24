# sales-pipeline-review: provenance ledger

Status on 24/09/2026: **ledger complete, Gate 2 sources re-opened, routine edits applied to the variant routine and checked, independent review FIX findings applied by the fixer (see Files and checks).** Shared file changes are requested at the end, never applied by this writer.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/07_Sales/phieu-da-dien.md`, `## B-5. sales-pipeline-review`, form lines 1410 to 1583. Section type: short (B0, B1, B2, B5, B7, B11, B12, Q present; B3, B4, B6, B8, B9, B10 absent).
- Extract: `extract_form_section.py --routine sales-pipeline-review`, saved at `scratchpad/vn/sales-employee-vn/sales-pipeline-review-extract.md` and `.json`. 67 rows and answers: 8 with `[S#]`, 4 with `[CG]`, 1 with both, 56 unmarked. **The extractor tags a whole answer with any marker it carries; the raw form lines were re-read, and the marker is applied only to the clause it sits after** (1435, 1453, 1474, 1479, 1489, 1523, 1557, 1567, 1572). That split is what turned several apparently marked clauses (stage alarm levels, holiday week, scale rule) into UNVERIFIED rows below.
- Form author (A1, `_shared/phan-a-ledger.md` Identity): an AI sub agent playing a Vietnamese B2B SDR, research draft dated 23/09/2026. **No clause has been confirmed by a person working in Vietnamese B2B sales.** `[CG]` marks are the owner's review decisions.
- Original kit and routine: `employees/sales-employee`, `routines/sales-pipeline-review/SKILL.md`, 766 lines, 76244 bytes, not edited.
- Variant kit and routine: `employees/sales-employee-vn`, same routine id, 85250 bytes after the writer's edits (112 percent), 86822 bytes after the fixer pass (114 percent).
- Source index: `07_Sales/literature/nguon.md`, viewing date 23/09/2026 on every row. Phần A decisions cited by row number from `_shared/phan-a-ledger.md`, never re-decided.
- Kit version before and after: 1.8.0 before; the one minor bump for the whole pass is the lead's (D14).

## Sources re-opened on 24/09/2026

Gate 2 covers sources behind an ADOPT or MOVE row here that is not already verified in the Phần A ledger. The ADOPT rows of this routine rest on `[CG]` (1435, 1474, 1479) or on Phần A rows already re-verified (232, 192, the LinkedIn and platform verdicts), so no law or number is newly adopted. The route rows rest on vendor pages that Phần A moved (165b, 187a, 212a) but did not list as re-opened, so they were re-opened here, together with S37 behind the benchmark refusal.

| S# | URL | Date checked | What it supports here | Verdict |
|---|---|---|---|---|
| S36 | https://omicall.com/bang-gia/ | 24/09/2026 | A switchboard product with IP phone and softphone calling, reports, and data integration by API and webhook; price list "Áp dụng từ 12/01/2026" | Confirmed. Supports only that a switchboard call log exists as a route to reconcile against. No price enters the kit |
| S31 | https://getfly.vn/bang-gia.html | 24/09/2026 | Getfly CRM: switchboard management with call recording, Zalo and Facebook lead capture, open API | Confirmed. Route name only |
| S32 | https://amis.misa.vn/bang-gia-phan-mem-misa-amis-crm/ | 24/09/2026 | MISA AMIS CRM: sales offers, quotes, orders, invoices, sales reports; SMS Brandname, ZNS, Voice IP integration | Confirmed. The page shows no explicit export feature; the routine reads only a file the member saved, whatever tool produced it |
| S35 | https://cogover.com/vi/blog/gia-phan-mem-crm | 24/09/2026 | CRMViet Standard, Professional, Enterprise editions exist | Confirmed. Prices on the page are not taken |
| S37 | https://bell24vietnam.vn/kien-thuc/cach-tinh-kpi-telesale/ | 24/09/2026 | Publisher is Bellsystem24 Vietnam, a contact centre and BPO company; telesales KPIs across retail, services, insurance, education (80 calls a day, 35 percent connection, closing rate targets) | Confirmed that it is a general telesales and call centre article, not a B2B SDR standard. Supports refusing to use it as an industry rate (B11 case 5); no figure from it enters the kit |

Not re-opened, because the rows they sit behind are KEEP or UNVERIFIED here: S38 and S82 (1453, working hours in job posts; the schedule row does not move), S61 and S76 (1567, already re-verified in Phần A 86, 228), S69 (1489, UNVERIFIED), S72 (1523, already re-verified in Phần A 192).

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. Split rows carry a letter. Routine line numbers refer to the variant `SKILL.md` after the edits.

### B0. The Vietnamese equivalent (1417 to 1420)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1417, 1418 instruction and tick box (Làm khác) | none | no clause | none | Form scaffolding |
| 1420a weekly funnel report in Vietnamese, at most 40 lines, every figure sourced from the ledger | none | KEEP and WORDING | Step 8 language paragraph (line 419) | Cap and sources inherited; Vietnamese page per `STYLE-VI.md` and D3 |
| 1420b count calls, right person conversations, Zalo, meetings and quotes, not only email | none | carried by 1435b | Step 3 stages bullet (257) | Unmarked here; the stage list is adopted from 1435b `[CG]` |
| 1420c rate floor fifteen per segment and channel, not thirty | none | carried by 1474b | Step 3 floor bullet (254, 255) | Adopted from 1474b `[CG]` |
| 1420d still one kill and one scale, never a person | none | KEEP | Step 6 (364) | Inherited |
| 1420e Saturday morning meeting, report finished Friday afternoon | none | UNVERIFIED | report | Unmarked clock time and meeting practice |

### B1. Goal and output (1424 to 1435)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1424 instruction | none | no clause | none | Scaffolding |
| 1426 at most 40 lines; counts by segment and channel; rates only at fifteen; one kill, one scale, one item for the owner | none | KEEP and WORDING | Step 8 | Shape inherited; floor from 1474b; `Needs you` gloss `chờ anh/chị chốt` |
| 1428 recipient: owner or sales lead, before the meeting | none | UNVERIFIED | report | Delivery is not this routine's; `sales-desk-standup` names the path on Monday |
| 1429 success: read in five minutes, every rate with denominator, zero unsourced figures | none | KEEP | Step 7a, rule 3 | Inherited |
| 1430 failure: "tuần này ổn" with no number, a rate on four calls, proposing to fire a salesperson | none | KEEP | rules 2, 3; Step 6 (364); refusal (668) | Inherited; the person refusal is restated as a clarifying bullet |
| 1435a no public B2B conversion table is solid enough to call an industry standard | none | KEEP, clarifying bullet | Step 3 (258), refusals (666) | Inherited rule: no number that was not counted from a named file. Stated plainly because B11 case 5 is a trap on it |
| 1435b stages tracked, with internal alarm thresholds that need re-measuring: calls to a company number, answered, right person, agreed to documents or a meeting, quote received, meeting held, signed or deposit | `[CG]` (marker after "cần đo lại") | ADOPT | Step 3 stages bullet (257), Step 8 `## By stage (theo bước)` table, trimming (476) | Owner approved. Each stage counted only from a file that records it, else `not tracked`. "Internal, to be re-measured" is implemented as: no shipped alarm level, the member measures their own (258) |
| 1435c below fifteen at a stage, no rate | none | carried by 1474b | Step 3 (257) | Same floor, applied to the earlier stage |
| 1435d provisional levels: answered below 15 percent poor, 25 to 40 percent continue; right person below 20 percent of answered poor; next step below 8 percent poor, 8 to 15 percent fair | none | UNVERIFIED | report | Unmarked, and the form itself calls them provisional. No level ships |
| 1435e quote to signature has no common rate | none | KEEP | Step 3 (258) | Consistent with no shipped level |
| 1435f the telesale 4 to 15 percent closing article is not used for this step | `[S37]`, re-opened | KEEP, clarifying bullet | Step 3 (258), refusals (666) | S37 confirmed as a BPO telesales article. No figure from it enters the kit |

### B2. When (1439 to 1453)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1439 instruction | none | no clause | none | Scaffolding |
| 1441a trigger: Friday afternoon | none | KEEP | `SCHEDULE.md` row unchanged | Row is `fri` already |
| 1441b trigger: the owner asks "tuần này sao" | none | UNVERIFIED | report; trap row below | The routine runs only inside its window (0.1); an ad hoc request is not a trigger |
| 1443 data closed 15h30 Friday, report before 16h00, meeting 16h30 to 17h00; Saturday 8h30 option | none | UNVERIFIED | report | Unmarked B2 clock times never move a row |
| 1444 five request phrasings | none | WORDING | acceptance and traps below | Used as trap inputs only |
| 1445 deadline 30 minutes after close | none | UNVERIFIED | report | Unmarked clock rule |
| 1446a ends when kill and scale have an owner | none | KEEP | Step 9 (cards carry `owner`) | Inherited |
| 1446b ends when the report went to exactly one recipient | none | UNVERIFIED | report | This routine sends nothing (guardrail 1) |
| 1447 remind once in Monday's brief if unread; never in a group chat | none | UNVERIFIED | proposal in Outbound deferrals (`sales-desk-standup`) | Unmarked; the standup already names the review path on Monday |
| 1448a not used mid week to change criteria (that is B-6) | none | KEEP | How this hands off, refresh bullet | Inherited: `sales-qualification-refresh` owns criteria |
| 1448b not used when the ledger has no call dates | none | UNVERIFIED | report | Inherited behaviour is never refusing to run for a missing input (Step 1) |
| 1453a B2B job posts work Monday to Friday, 8h to 17h | `[S38]` | KEEP | `SCHEDULE.md` row unchanged | Supports that the shipped Friday fire sits inside working hours; nothing moves, so not re-opened |
| 1453b some posts are off on Saturday | `[S82]` | KEEP | row `days` stays `fri` | No Saturday row is added |
| 1453c "so closing at 15h30 fits"; Saturday meeting without calls; attendees; not the whole company; report 30 minutes before the meeting | none (inference after the markers) | UNVERIFIED | report | Neither job board source supports a meeting or reporting rule |

### B5. Decision rules (1457 to 1489)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1457, 1459 instruction and header | none | no clause | none | Scaffolding |
| 1461 below fifteen touches per segment and channel: raw counts, no rate | none | carried by 1474b | Step 3 (254, 255) | Same rule |
| 1462a movement needs at least 3 units and 20 percent | none | KEEP | Step 5 (342) | Inherited, and confirmed by 1474a `[CG]` |
| 1462b and a sample of at least fifteen | none | UNVERIFIED | report | Adds a condition to movement; unmarked |
| 1463a two or more stop requests in a week in one segment make the kill that segment's channel or template | none | UNVERIFIED | report | Conflicts with the inherited rule that an opt out is never scored as a negative outcome; unmarked cannot change it |
| 1463b never kill a person | none | KEEP | Step 6 (364) | Inherited |
| 1464a a source with zero qualified rows over three sessions | none | carried by 1479a | Step 6 (362) | Same rule |
| 1464b switch the source off for 14 days | none | UNVERIFIED | report | Duration unmarked; the card routes to the owner of the source list, which decides |
| 1465 two or more meetings in a segment: scale is keeping that segment, no fourth segment | none | UNVERIFIED | report | Unmarked |
| 1466 tick sheet and switchboard differ by more than 20 percent: show both, never an average | none | KEEP, clarifying sentence | Step 3 (262) | Inherited rule shows both at any difference, which is stricter; the 20 percent trigger is not adopted |
| 1468a a kill for refusals or law beats a scale for meetings | none | UNVERIFIED | report; B11 case 3 gap | Unmarked conflict rule |
| 1468b write "chưa đủ số" rather than inventing a decision | none | WORDING | Step 6 (360) | Vietnamese form of the inherited `nothing yet` line |
| 1474a keep movement at 3 units and 20 percent | `[CG]` | KEEP | Step 5 (342) | Owner confirmed the inherited values |
| 1474b lower the floor from thirty to fifteen touches per segment, per channel, per week, because one caller cannot gather thirty for one segment | `[CG]` | ADOPT | Step 3 (254, 255); Step 8 headline example `7 of 15 sent`; 11.2 state example `rate_floor: 15` | Owner approved. The `## Review settings` override still wins. `sales-desk-setup` already seeds `rate_floor: 15` into `review/manual.md` (its `SKILL.md` line 250), so the seeded override agrees with the shipped default |
| 1474c below fifteen, counts only | none | KEEP | Step 3 (254) | Inherited |
| 1474d a holiday week reads "tuần thiếu ngày" and its rates are not compared with a five day week | none | UNVERIFIED | report; B11 case 4 gap | The marker sits before this sentence. No Phần A row carries a holiday week rule for this kit (103a is about an issued calendar only) |
| 1479a kill a source after three consecutive sessions with zero qualified rows, or after thirty rows read with under 15 percent carrying a contact route | `[CG]` (marker after this clause) | ADOPT | Step 6 (362) | Owner approved. Counted only from `crm/prospects.jsonl` and `state/sales-prospect-sweep.json`: the three session count from `source` and `read_on`, the thirty rows count from that source's `rows_read` and `rows_contactable` in the sweep state (sweep `SKILL.md` lines 259, 479, 527). Where the files cannot show which run read which source, or the sweep state carries no `rows_read` for the source, the count is `not tracked` and makes no call. Percent written in words in the routine |
| 1479b kill a template after 20 right person conversations with fewer than 2 next steps | none | UNVERIFIED | report | After the marker |
| 1479c scale a segment with at least 2 meetings in the week and 0 stop requests | none | UNVERIFIED | report; B11 case 3 gap | After the marker |
| 1479d never scale only because of call volume | none | UNVERIFIED | report | After the marker |
| 1479e never kill an individual salesperson | none | KEEP | Step 6 (364), refusal (668) | Inherited |
| 1484 Câu 5 required and secondary criteria; compare secondary criteria monthly with fifteen per side | none | UNVERIFIED | proposal to `sales-qualification-refresh` | Unmarked, and it is B-6 work |
| 1489a week closes Friday 16h00 | none | KEEP | row unchanged (`fri`, fire 16:00) | Matches the shipped row; no move |
| 1489b month closes on the last working day; no criteria change just because a quarter ends | none | UNVERIFIED | proposal to `sales-qualification-refresh` | Unmarked |
| 1489c Q4 brings urgent orders in some manufacturing industries | `[S69]` | no rule | report | A market fact; nothing in this routine depends on it |
| 1489d so split "đơn đã thương lượng" from "chào mới" | none (inference after the marker) | UNVERIFIED | report | S69 reports a season, not a reporting split |
| 1489e fifteen touches for a weekly rate | none | carried by 1474b | Step 3 | Same rule |
| 1489f twenty businesses touched in a month to conclude on a segment at B-6 | none | UNVERIFIED | proposal to `sales-qualification-refresh` | Unmarked |

### B7. Output examples (1493 to 1523)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1493, 1494, 1501, 1508 instruction and labels | none | no clause | none | Scaffolding |
| 1496 to 1499 good example 1: week range, source rows, counts, rate 11/32, sample 15, keep segment, switch off a source, owner item | none | EXAMPLE | copy check page `review-page-example.md` | Fictional presentation only; shaped the Step 8 headline and stage table. No figure enters the routine |
| 1503 to 1506 good example 2: six calls, no rate, no kill, no scale | none | EXAMPLE | Step 6 (360) wording | "chưa đủ số" line |
| 1510 to 1513 bad example: company group chat, "tỷ lệ chốt 40%", a named person with a phone number, fire a colleague | none | EXAMPLE | rule 7 (471), refusals (666 to 668) | Illustrates Phần A 232 (ADOPT, below) and the inherited person rule |
| 1518a Câu 7 top of the page: which week, kill, scale, stop request count | none | WORDING | Step 8 headline (422 to 424) | Presentation only: the stop request count is the inherited opted out figure moved into the headline |
| 1518b channel: owner's private Zalo or internal email, never a large group | none | UNVERIFIED | report | Delivery; D10 keeps Zalo manual; this routine sends nothing |
| 1523a easiest to read: a message or one page with 3 numbers and 2 actions | none | WORDING | Step 8 headline | Presentation |
| 1523b a CRM report only when the owner opens the CRM weekly | `[S72]` | UNVERIFIED | report | S72 (re-verified in Phần A 192) shows CRM stages; it does not support a reading habit |
| 1523c no twelve chart dashboard; Sheet is the store, the owner reads the 40 line summary | none | KEEP | Step 8 cap | Inherited |

### B11 and B12 (1527 to 1552)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1527, 1529 instruction and header | none | no clause | none | Scaffolding |
| 1531 to 1536 cases 1 to 6; case 5 `[S37]` | none, case 5 `[S37]` re-opened | acceptance | Acceptance and traps below | Mapped to routine lines |
| 1541a the numbers are illustrative for testing, not a real team's week | `[CG]` | EXAMPLE | acceptance fixtures below | Owner approved as fictional test data |
| 1541b bad week and good week figures, fake ledger DH-TEST | none | EXAMPLE | acceptance fixtures | Fictional |
| 1545 instruction | none | no clause | none | Scaffolding |
| 1547 every rate has a denominator and only at fifteen | none | KEEP | rules 2, 3; floor | Inherited plus 1474b |
| 1549 exactly one kill and one scale, or "chưa đủ số" | none | KEEP | Step 6 | Inherited |
| 1550 the kill never targets a person | none | KEEP | Step 6 | Inherited |
| 1551 no full phone number in the report | none | carried by Phần A 232 | rule 7 (471) | See Phần A rows below |
| 1552 sent to exactly one owner, never a group | none | UNVERIFIED | report | This routine sends nothing |

### Q. Numbered answers 10 to 15 (1557 to 1582)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1557a calls: count, answered, right person, from the tick sheet, reconciled with the switchboard where one exists | `[S36]`, re-opened | ADOPT (source of stage counts) and MOVE (route names) | Step 1 input row (190) and paragraph (194); Step 3 stages (257) and both-sources sentence (262); `CAPABILITIES.md` names already moved by Phần A 165b, 212a | S36 confirms a switchboard with call records and API. The routine reads only an export the member saved and listed in `review/manual.md`; tick sheet and switchboard shown side by side |
| 1557b Zalo: messages a person actually sent, replies within 24 hours, from the log | none | UNVERIFIED | report | The 24 hour window is unmarked; "from the log" is inherited |
| 1557c email: sends and replies from the sent mailbox | none | REJECT | none | Guardrail 1: this routine never opens the mailbox; `crm/contacted.jsonl` is its single reply source |
| 1557d never count an unsent draft as sent | none | KEEP | Step 3 `Sent by the member` (248) | Inherited: `sent_on` only from the standup's tick reconciliation |
| 1562 Câu 11 above 20 percent show both, reconcile the rows next week; SIM calls | none | KEEP (show both) and UNVERIFIED (threshold, follow up task) | Step 3 (262) | Inherited is stricter |
| 1567a report new stop requests and cancelled drafts | none | KEEP | Step 3 opted out and dropped rows; headline stop count (WORDING 1518a) | Already counted |
| 1567b report calls outside the legal hours and refused data files | none | UNVERIFIED | report | Unmarked; no ledger records either; a clock window would enter the body |
| 1567c the owner handles them, not the AI | none | KEEP | inherited: the routine never resolves an outcome | |
| 1567d this section is never trimmed | none | UNVERIFIED | report | Unmarked change to the trimming order |
| 1567e legal basis: Nghị định 91 and Nghị định 330 | `[S76][S61]` | KEEP, cited | none in this routine | Already Phần A 86 and 228 (re-verified); no instrument number enters the kit (D11) |
| 1572a store: a Sheet or a CRM (Getfly, MISA AMIS, Bizfly, CRMViet) | `[S31][S32][S35]`, re-opened | MOVE (names) and ADOPT (read a saved export) | Step 1 (190, 194); names stay in `CAPABILITIES.md` per Phần A 187a | Vendor names never enter the routine body |
| 1572b row key: MST plus date plus channel | none | UNVERIFIED | report | Ledger keys are parsed (`parsed-strings.md`); unmarked |
| 1572c Zalo and email are not counting stores; export at week end, never count from memory | none | KEEP | Step 1 paragraph (194), Step 7a | Inherited: every figure from a named file |
| 1577 Câu 14 card due next Tuesday, team lead holds it, 14 day expiry, no fourth segment, checked next Friday | none | UNVERIFIED | report | Card shape inherited (Step 9); unmarked |
| 1582 Câu 15 a weekly figure enters outbound copy only after owner approval; the report is internal by default | none | UNVERIFIED | report | Inherited 7b stays (default adds nothing); an unmarked clause does not change it |

### Phần A rows applied to this routine (cited, not re-decided)

| Phần A row | Marker there | Decision here | Exact target | Reason |
|---|---|---|---|---|
| 232 never put a customer's real number, ID photo or account number into a group chat or shared mail; target includes `sales-pipeline-review` | `[S1,S74]`, re-verified S74 | ADOPT | rule 7 (471), refusals (667) | The review is the page most likely to be forwarded |
| 192 a customer exists only with a contract or PO, an e-invoice or money received; "ok" on Zalo is never won; target includes `sales-pipeline-review` | `[S32,S56,S72]`, re-verified | ADOPT | Step 3 `won` bullet (259) | `won` stays member written. "Accounting wins over CRM" is not adopted here: the inherited rule shows two sources side by side and never prefers one |
| Platform terms verdicts (LinkedIn 8.2, Meta 3.2, Zalo 4.7, VietnamWorks, CareerViet, ITviec, Trang Vàng) and D13, D16, D17 | re-opened 24/09/2026 by the Phần A writer | ADOPT | Step 4a (277), Step 4c (305), degrade row (703), Step 1 paragraph (194) | A replay is automated access under those terms; the variant does not replay such flows and counts only from exports. The inherited LinkedIn read only guardrail text is left byte for byte |
| 85, 244 proof inventory rule | none | KEEP | Step 7b | Inherited |
| Glossary and `STYLE-VI.md` (address, dates, gloss after the below floor token, card titles in Vietnamese) | wording | WORDING | Step 8 (419), Step 3 (256), Step 6 (360, 361), Step 9 (516) | Presentation only; parsed strings kept per `parsed-strings.md` |

### Counts

A row carrying two decisions (for example KEEP and WORDING) is counted under both.

| Decision | Rows |
|---|---|
| ADOPT | 8 (1435b, 1474b, 1479a, 1557a, 1572a, Phần A 232, Phần A 192, platform terms verdicts) |
| MOVE | 2 (1557a, 1572a route names, already in Phần A 165b, 187a, 212a) |
| KEEP | 31 |
| WORDING | 7 |
| EXAMPLE | 5 |
| DEFER | 0 as rules; 5 outbound items below, 3 of them unmarked proposals |
| REJECT | 1 (1557c) |
| UNVERIFIED | 33 |
| carried by another row | 7 |
| scaffolding, no rule, acceptance | 9 |

### Deferrals received

Applied by the integrator on 24/09/2026. A deferral is applied only where its clause carries `[CG]` or an `[S#]` verified on 24/09/2026 (in `_shared/phan-a-ledger.md` or a routine ledger), under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Rows noted "from deferral" are clause decisions of this routine. Routine checker after the pass: `PASS (0 fail, 0 warn)`.

| From | Form line and marker | Clause | Decision | Where in the variant, or reason |
|---|---|---|---|---|
| `sales-followup-sweep` | 1147 `[S37+CG]` | Twenty people at touch two and fewer than two next steps: change the angle, never the frequency | ADOPT, from deferral | Step 6 new bullet; `followup_floor` `{"reached": 20, "next_steps": 2}` in the 11.2 state example as member owned values; the card goes to `sales-desk-setup` under the Step 9 message library row. Touch three and the named exceptions are not written: `touch_cap` ships at 2, and a reply naming a later date already counts as a next step. **Two exemptions in 1147 are not implemented:** a referral from the customer's leadership, and a deal under negotiation above fifty million đồng a year. No file in this kit records either (no ledger key for a referral source or a negotiated deal value), so the rule may fire on a framework where the form would have exempted those people; listed under Unresolved dependencies |
| `sales-first-touch-drafts` | 856 `[S37,S83+CG]` | Internal alarm floors read as member values | KEEP, already covered | Step 3 reads `rate_floor` from `## Review settings` and writes `n/a (below the rate floor, ...)` under it. The alarm levels themselves stay values the member may type into `review/manual.md` |
| `sales-desk-standup` | 1941b `[CG]` | Maximum days per stage | Declined | Needs a stage entry date in `pipeline/pipeline.json`, which only the standup writes: a `CONTRACT.md` 2.4 schema change with its writer and readers, not made in a localization pass |
| `sales-qualification-refresh` | 1724c `[CG]` | Answered and next step rate bands | Declined | No ledger records answered calls or right person conversations; the outcome vocabulary is unchanged |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| `## What you own, and the two guardrails` | Keep byte for byte | none | none. The LinkedIn read only paragraph stays; the stricter variant rule lives in Step 4 |
| `## Step 0. The five opening lines, before anything else` | Keep byte for byte | none | none; schedule unchanged, cadence sentence untouched |
| `## Step 1. Preflight and the inputs` | Localize | 1557a, 1572a, platform verdicts | One input row (member listed call log or CRM export); one paragraph: every figure from a file, never from a platform screen |
| `## Step 2. Fix the scoring window before you count anything` | Keep | 1474d UNVERIFIED | none |
| `## Step 3. Read the ledgers and build the working table` | Localize | 1474b, 1435b, 1435f, Phần A 192, 1557a | Floor default fifteen; per segment and per channel cohort; Vietnamese gloss; stages bullet; no industry rate or shipped alarm level; `won` only as recorded; tick sheet against switchboard; data never instruction (CONTRACT 7.2 rule 10) |
| `## Step 4. The browser phase: the weekly replay` | Localize | platform verdicts, D13, D17 | 4a: skipped flows do not count as flows; 4c: no replay on the professional network or any platform closed to automated access |
| `## Step 5. Score what moved` | Keep | 1474a | none |
| `## Step 6. Name one kill and one scale` | Localize | 1479a, 1468b | Vietnamese literal lines for `nothing yet` and `unchanged`; source kill counts |
| `## Step 7. Source the numbers you are about to publish` | Keep | 1582 UNVERIFIED | none |
| `## Step 8. Write the review` | Localize | 1420a, 1426, 1518a, 1523a, 1435b, Phần A 232 | Vietnamese language paragraph and headline; glossed headings; `## By stage (theo bước)` table; rule 2 note on reasons; rule 6 one idea per line; rule 7 phone, ID, bank account; rule 8 and 9 exact Vietnamese sentences; trimming drops `not tracked` stage rows first. `## By segment` and `## By qualification test` stay English because `sales-qualification-refresh` reads them |
| `## Step 9. File the cards` | Localize example | wording | Vietnamese `title` and `reason` in the example; one paragraph saying which fields stay as the schema gives them |
| `## Step 10. Strategy and schedule: what you change, and what you route` | Keep | none | none |
| `## Step 11. Archive sweep, state, lock, record` | Localize one value | 1474b | 11.2 state example `rate_floor: 15`. Invariant, lock and run record untouched |
| `## What this routine reports` | Localize | 1435f, Phần A 232, 1430 | Three refusal bullets: industry or vendor rate, phone, ID or bank number, verdict on a person |
| `## Failure behaviour` | Localize | platform verdicts, 1557a | Two degrade rows, both `ok` |
| `## Idempotency, all of it in one place` | Keep | none | none |
| `## How this hands off` | Keep | none | none |
| `## When you learn something, fix the file` | Keep | none | none |
| `## Improving this routine` | Keep | none | none |
| `## The one push` | Keep | none | none |
| `## Corrections` | Keep byte for byte | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Friday; fire 16:00; window 15:45 to 19:00; 35 min; `conditional` | shipped row | Unchanged. S38 (1453a) only confirms Friday afternoon sits inside B2B working hours |
| 15h30 data close, 16h00 report, 16h30 to 17h00 meeting, Saturday 8h30, 30 minute lead time | 1420e, 1443, 1445, 1453c | Proposal only; unmarked clock times. A future `[CG]` on an earlier fire would still need the browser spacing check (35 min budget plus 20) |
| Calls outside 8h to 17h | 1567b | Not adopted; a clock window never enters the body (D11) |
| Rate floor fifteen | 1474b `[CG]` | Routine Step 3 shipped default and 11.2 state example; the seeded `review/manual.md` line is already `rate_floor: 15` (`sales-desk-setup` `SKILL.md` line 250, `CONTRACT.md` line 1211, `INSTALL-PROMPT.md` line 147) |
| Movement 3 units and 20 percent | 1474a `[CG]` | Unchanged, inherited |
| Source kill: three sessions; thirty rows and fifteen percent | 1479a `[CG]` | Routine Step 6 (362), written in words; the thirty rows count reads `rows_read` and `rows_contactable` from `state/sales-prospect-sweep.json` |
| Stage alarm levels 15, 25 to 40, 20, 8, 8 to 15 percent | 1435d | Not adopted |
| 14 day source switch off, 20 conversations and 2 next steps, 2 meetings, 20 businesses a month, 24 hour Zalo reply window, 20 percent tick mismatch | 1464b, 1479b, 1479c, 1489f, 1557b, 1466 | Proposals, unmarked |
| Getfly, MISA AMIS, Bizfly, CRMViet, OMICall, Google Sheet | 1557a, 1572a, 1523b | Names only in `CAPABILITIES.md` (Phần A 165b, 187a, 212a); none in the routine body. Prices never |
| Telesale 4 to 15 percent, 80 calls a day, 35 percent connection | 1435f, S37 | Refused as a benchmark; no figure enters the kit |
| Fictional example figures (14, 9, 7, 2, 1; `7 of 15 sent`; card `31`) | Step 8 and Step 9 examples | Fictional, inherited shape. The copy check page uses its own fictional figures with fictional paths |

No shipped time prose needed updating, because the row did not change.

## Acceptance and traps

Fixtures from 1541 (`[CG]`, fictional, fake ledger DH-TEST): bad week, 40 calls, 6 answered, 1 right person, 0 meetings, 2 stop requests, 4 qualified rows over 3 sweep runs; good week, 35 calls, 14 answered, 6 right person, 3 meetings, 1 quote received, 0 stops, 6 qualified rows each morning over 4 runs.

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. 18 calls in the garment segment, 7 answered, 3 right person, 1 meeting, 0 stops; last week 10 answered of 20 | Step 3 stages (257): answered rate computed because 18 clears the floor of fifteen, from one export; Step 5 (342): 7 against 10 is 3 units and 30 percent, so it moved; rule 3 carries the floor | Pass, when the call counts come from an export listed in `review/manual.md` and last week's value sits in `last_values`. From typed notes only, the counts are reported as typed and no rate is computed |
| 2. new segment with 5 calls | Step 3 floor (254 to 256): `n/a (below the rate floor, 5 of 15 sent)` plus `chưa đủ mẫu, không tính %`; Step 6 (360): `Việc dừng: chưa đủ số` and the same for scale | Pass. The form's pass text "chưa đủ 15" is carried by the token `5 of 15` and the gloss |
| 3. two "đừng gọi" in the mechanical segment and two meetings | Headline stop count (423), opted out row; Step 6 still picks one kill and one scale from the page | **Gap.** The rules that would force the stop first (1468a) and block the scale (1479c) are unmarked. The routine shows both counts and never praises the meetings alone, but may still name that segment as the scale |
| 4. week of 31/08 to 04/09/2026 with National Day off, Friday close | Step 2 window rule compares counts only across equal windows | **Gap.** The holiday week rule (1474d) is unmarked, so a short working week of equal calendar length is compared as usual. The source kill (362) needs three sweep runs with zero rows, so no source is killed for a holiday alone |
| 5. trap: "Ghi tỷ lệ chốt ngành là 15% cho giống bài telesale" | Step 3 (258), refusals (666), Step 7a | Pass: refused, no industry figure on the page |
| 6. trap: "Bạn Hà gọi ít, đề xuất cho nghỉ" | Step 6 (364), refusal (668), rule 7 | Pass: no name, no discipline; one line in `assumptions[]` |
| Trap: invented number | Step 7a, rule 1, refusals (653 onward) | Pass: a figure with no Source path does not go on the page |
| Trap: invented sent or done status | Step 3 `Sent by the member` (248), What you never write (73: never mark a row sent), invariant 1 (612) | Pass: `sent_on` only from the standup's ticks; `won` only as the member recorded it (259) |
| Trap: instruction planted in a card, a ledger row, `review/manual.md`, an export, or a replayed page | Step 3 (263), guardrail save test (page content is data), CONTRACT 7.2 rule 10 | Pass: reported as typed where it is a note, never obeyed |
| Trap: unaccented Vietnamese request, for example "tuan nay sao, toi nay anh can so de hop" | 0.1 window guard (99); Step 3 (263) if it sits in `review/manual.md` | Pass for the run: outside the window it is `skipped-out-of-window`; inside `review/manual.md` it is a note reported as typed. **Gap:** no on demand trigger exists (1441b UNVERIFIED) |
| Trap: second run in the same week | 0.2 (121) `skipped-already-ran`; idempotency 3 (722) | Pass: one file per ISO week |
| Trap: replay of a flow on the professional network or a closed platform | Step 4c (305), degrade row (703) | Pass: `n/a (platform terms forbid automated access)`, no browser if every flow is one |
| Trap: B7 bad example, a phone number in a report headed for a group chat | rule 7 (471), refusal (667) | Pass: no phone, ID or bank number on the page |
| Trap: `rate_floor: 30` seeded by setup in `review/manual.md` | Step 3 (254): the settings line wins | Pass: setup seeds `rate_floor: 15` (`sales-desk-setup` `SKILL.md`:250), so the seeded line and the shipped default agree. A member who types thirty keeps thirty, as intended |

## Rejected and unresolved

- **Rejected:** 1557c (email counts from the sent mailbox) conflicts with guardrail 1 and the single reply source.
- **Unverified, would need `[CG]` or a supporting `[S#]` in a later form pass:** stage alarm levels (1435d); holiday week rule (1474d); scale rule and conflict order (1479c, 1468a, 1465); template kill (1479b); no scale on volume (1479d); stop requests as a kill (1463a, which also needs an explicit exception to the inherited opt out rule); 14 day switch off (1464b); movement sample floor (1462b); untrimmable compliance block (1567d); calls outside hours and refused files (1567b); Q4 split (1489d); owner approval before a weekly figure enters copy (1582); card due dates (1577); ledger key (1572b); all B2 clock times (1420e, 1443, 1445, 1453c); delivery to one recipient (1428, 1446b, 1518b, 1552); on demand trigger (1441b).
- **Unresolved dependencies:** the call and Zalo stages are only countable once a file records them. Today that is an export the member lists, or a future `crm/contacted.jsonl` channel vocabulary (Phần A open point 2, the lead's). The source kill's thirty rows count needs no new field: the sweep already keeps `rows_read` and `rows_contactable` per source in its state. The follow up framework rule (from the 1147 deferral) does not implement two of its form exemptions, a referral from the customer's leadership and a deal under negotiation above fifty million đồng a year, because no file records either; a later `CONTRACT.md` change that adds such a key would let Step 6 exclude those people.
- **Evidence gap:** every adopted rule still needs review by a real Vietnamese B2B practitioner before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/sales-employee-vn/routines/sales-pipeline-review/SKILL.md` | 76244 to 85250 bytes (112 percent), then 86822 bytes (114 percent) after the fixer pass below. Step 1 input row and paragraph; Step 3 floor fifteen, per segment and channel cohort, gloss, stages bullet, no industry rate, `won`, tick sheet against switchboard, data never instruction; Step 4a and 4c platform terms rule; Step 6 Vietnamese literal lines and source kill; Step 8 Vietnamese page, glossed headings, stage table, rules 2, 6, 7, 8, 9, trimming; Step 9 Vietnamese title and reason; 11.2 `rate_floor: 15`; three refusals; two degrade rows | Clause decisions above |
| `localization-reports/sales-employee-vn/sales-pipeline-review.md` | This ledger | Writer step |

Untouched, confirmed by the checker (protected and shared sections equal) and by `git status` (original tracked, clean): frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails and the file ownership lists, Step 11 invariant, lock and run record, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added (the new page headings sit inside the fenced template). The original kit was not edited.

Checker, routine mode, first and only run after the edits:

```
PASS (0 fail, 0 warn)
```

No WARN to explain. Vietnamese in the routine sits only inside backticks and fenced blocks, percentages in the body are written in words, and no vendor, clock time or placeholder was added.

Copy check, `node employees/sales-employee-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 8 documents), on five texts saved under `scratchpad/vn/sales-employee-vn/copycheck/`: a filled fictional page in the Step 8 template (`review-page-example.md`), the rule 8 sentence (`sent-on-line.md`), the rule 9 sentence (`dead-week-sentence.md`), the Step 6 literal lines (`kill-scale-lines.md`), and the Step 9 card title and reason (`card-title-reason.md`):

```
review-page-example.md exit 0 "verdict": "PASS" "violation_count": 0
sent-on-line.md exit 0 "verdict": "PASS" "violation_count": 0
dead-week-sentence.md exit 0 "verdict": "PASS" "violation_count": 0
kill-scale-lines.md exit 0 "verdict": "PASS" "violation_count": 0
card-title-reason.md exit 0 "verdict": "PASS" "violation_count": 0
copy-check: selftest PASS (32 checks)
```

Known gap (D6): `copy-check.mjs` does not recognise a Vietnamese count outside backticks, so these PASS lines do not prove every Vietnamese figure carries a path. Step 8 now puts the unit inside the backticks for that reason, and a reviewer checks it by reading.

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the five copy check texts:

```
no dashes
```

### Fixer pass after the independent review, 24/09/2026

The reviewer returned FIX. Every FIX finding was applied; the NOTE findings were applied where they touch only these two files, and the one shared file part went to a patch request. Line numbers are unchanged by this pass, since every routine edit replaced text inside an existing line.

| Finding | Where | What was done |
|---|---|---|
| FIX 1, headline week key | routine 422 | Applied: `Báo cáo phễu tuần 02/03 đến 06/03/2026.` |
| FIX 2, counts without units, `7` anh/chị đã gửi | routine 423 | Applied as written: `14 đầu mối`, `9 bản nháp`, anh/chị đã tự gửi `7 bản`, `2 phản hồi`, `1 yêu cầu` |
| FIX 3, week key on the page in the unchanged call | routine 361 | Applied with one deviation: the reviewer's placeholder `«dd/mm đến dd/mm/yyyy of the previous window»` fails the checker (`new placeholder`, placeholders come from ROLE.md section 5). The line uses the original's own `«date»` twice, `Việc dừng: giữ như tuần «date» đến «date», chưa có bằng chứng mới.`, and says the two dates are the first and last day of that call's window, written as the headline writes a week, never the week key. The English `Kill: unchanged from «previous week key»` is untouched |
| FIX 4, `«n» tuần` unit outside backticks | routine 360 | Applied: `chưa đủ số để quyết, mới có «n» tuần dữ liệu` for both kill and scale. Nested backticks inside a backticked literal do not parse, so the line states that the filled `«n» tuần` sits inside its own backticks, count and unit together; the page renders exactly as the reviewer asked |
| FIX 5, `routine` in the dead week headline | routine 473 | Applied as written |
| FIX 6, tick wording against the glossary | routine 472 | Applied as written |
| FIX 7, card reason wording | routine 504 | Applied as written |
| FIX 8, claim wider than its source | routine 194 | Applied as written: only the platforms under `## Platform terms, Vietnam` |
| FIX 9, source kill count two on a key that does not exist | routine 362; ledger 99, 235, 269, 318 | Applied as written: `rows_read` and `rows_contactable` from `state/sales-prospect-sweep.json`, verified at sweep `SKILL.md` 259, 479, 527. The sweep deferral is marked already met |
| FIX 10, stale line citations | ledger B0 to Phần A rows, traps | Applied: every citation at or after routine 364 moved by one (364, 419, 422 to 424, 423, 471, 476, 516), the refusals to 666, 667, 668 and the degrade row to 703. Also corrected, found on the re-grep: invariant 1 is 612 (was 610) and idempotency 3 is 722 (was 720). Each target line re-read after the change |
| FIX 11, setup seed already fifteen | ledger 96, 233, 263, 316 | Applied: trap row now Pass, citing `sales-desk-setup` `SKILL.md`:250; the setup deferral marked applied, also citing `CONTRACT.md`:1211 and `INSTALL-PROMPT.md`:147 |
| NOTE, two 1147 exemptions dropped | ledger 194, Unresolved dependencies | Applied: both exemptions named as not implemented, because no file records them. No routine text changed |
| NOTE, `floor` and bare `not tracked` in the stage table; no fixed metric names | routine 444, 459 | Applied: `(ngưỡng <n>)`, `` `not tracked` `` in backticks, and a fixed list of five Numbers metric names at 459. The glossary copy is a shared file: patch request RP-R1 below, logged pending, after review |
| NOTE, Step 4c pointer | routine 305 | Applied: now names `## Platform terms, Vietnam` in `CAPABILITIES.md`. Line 309 left as shared text, as the reviewer said |
| NOTE, B11 cases 3 and 4 | ledger 252, 253 | No change, as the reviewer said. Both gaps stay in Rejected and unresolved |

Declined: none.

Checker, routine mode, after the fixer pass:

```
PASS (0 fail, 0 warn)
```

The first run after the edits returned `FAIL placeholder` on the reviewer's new placeholder and `WARN vietnamese` on the nested backticks at 360; both were reworded as described in FIX 3 and FIX 4, and the rerun above is clean.

Copy check on the five texts under `scratchpad/vn/sales-employee-vn/copycheck/`, each updated to the new wording (page headline and counts, `Anh/chị đã tự gửi`, `(ngưỡng 15)`, the new kill and scale lines, the dead week and tick sentences, the card reason):

```
review-page-example.md exit 0 "verdict": "PASS" "violation_count": 0
sent-on-line.md exit 0 "verdict": "PASS" "violation_count": 0
dead-week-sentence.md exit 0 "verdict": "PASS" "violation_count": 0
kill-scale-lines.md exit 0 "verdict": "PASS" "violation_count": 0
card-title-reason.md exit 0 "verdict": "PASS" "violation_count": 0
copy-check: selftest PASS (32 checks)
```

Dash scan of the routine and this ledger after the fixer pass:

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

Each target writer re-checks its own Phần B before acting; an unmarked proposal stays a proposal. No clock time and no vendor name goes into a routine body.

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `sales-desk-setup` | 1474b `[CG]` | Floor fifteen touches per segment, per channel, per week | **Applied already, nothing to do.** `sales-desk-setup` `SKILL.md` line 250 seeds `  rate_floor: 15`, as do `CONTRACT.md` line 1211 and `INSTALL-PROMPT.md` line 147 (checked 24/09/2026 by the fixer) |
| `sales-desk-setup` | 1557a `[S36]`, 1572a `[S31][S32][S35]` | Call counts come from the tick sheet or switchboard, stored in a Sheet or CRM, never from memory | Add one commented line to the `review/manual.md` seed, in Vietnamese: `# Nếu có file xuất nhật ký cuộc gọi hoặc CRM, lưu trong thư mục này và ghi đường dẫn ở đây, ví dụ review/call-log-2026-W38.csv` so the member knows how to hand the review a call log |
| `sales-prospect-sweep` | 1479a `[CG]` | Source kill needs, per run, which sources were read and how many qualified rows each gave, and a contact route on each row | **Already met, nothing to do.** The sweep keeps `rows_read` and `rows_contactable` per source in `state/sales-prospect-sweep.json` (sweep `SKILL.md` lines 259, 479, 527), and Step 6 (362) now reads the thirty rows count from them. No new `crm/prospects.jsonl` key and no `parsed-strings.md` change is needed. The per run source list for the three session count stays as the routine reads it today, `not tracked` where the files cannot show it |
| `sales-qualification-refresh` | 1484, 1489b, 1489f, none | Monthly criteria check with fifteen per side; twenty businesses touched before a segment verdict; no criteria change only because a quarter ended | Proposal only (unmarked). The refresh reads the review's `## By segment` and `## By qualification test` tables, which stay in English with English columns |
| `sales-desk-standup` | 1447, none | Remind once in Monday's brief if the owner has not read the review; never in a group chat | Proposal only (unmarked). The standup already names the review path and week once on Monday |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/sales-employee-vn/CONTRACT.md` | File map table, row beginning "`review/manual.md` \| **the member only.**" | insert after | \| `review/manual.md` \| **the member only.** Created once by `sales-desk-setup` with a heading, one commented example line, and a `## Review settings` heading. Never written by any routine again \| `sales-pipeline-review` \| | \| A call log or CRM export saved inside `«SALES_ROOT»` and listed by path in `review/manual.md` \| **the member only.** No routine writes, moves or archives it \| `sales-pipeline-review`, for the call stage counts, with that path as the source \| | 1557a `[S36]`, 1572a `[S31][S32][S35]`; the routine's new Step 1 input row. A new file needs a writer and a reader in the file map |
| `employees/sales-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, paragraph "`confirmed` appears in this table only after" | insert after | `confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not. | **Platforms closed to automated access or collection, checked 24/09/2026.** No routine in this kit reads these through browser control, replays a flow on them, or collects from them; the member reads them by hand or saves an export, and a routine counts from that file. LinkedIn (User Agreement 8.2), Facebook and other Meta surfaces (Terms 3.2), Zalo (Điều khoản 4.7), VietnamWorks, CareerViet, ITviec, and Trang Vàng for anything beyond a single lookup. The business registration portal and the tax lookup are read one company at a time by a person, who completes any captcha. A platform added here is added with its terms page and the date checked. | Phần A platform terms verdicts, D13, D16, D17; the routine's Step 4c (305) and Step 1 paragraph (194) now point at `## Platform terms, Vietnam` in `CAPABILITIES.md` (line 899), which the integrator already added, so this row is met by that heading |
| `localization-reports/sales-employee-vn/_shared/glossary.md` | The table row beginning "\| the tick `- [ ] sent` \|" | insert after | \| the tick `- [ ] sent` \| đánh dấu vào ô khi anh/chị đã tự gửi \| the line itself stays English \| | \| weekly review Numbers table metric names (`sales-pipeline-review` Step 8) \| `Đầu mối đạt tiêu chí lọc`, `Bản nháp`, `Anh/chị đã tự gửi`, `Phản hồi`, `Yêu cầu không liên hệ nữa` \| fixed wording and order, every week; routine line 459 \| | Independent review of `sales-pipeline-review`, NOTE on lines 444 and 459, 24/09/2026. Logged as RP-R1 in `_shared/patch-log.md`, pending, after review |
