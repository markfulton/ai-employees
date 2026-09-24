# cos-decision-brief: provenance ledger

Status on 2026-09-24: **ledger complete, sources re-checked, routine edits applied to the variant routine and checked; reviewer FIX pass applied the same day (see Files and checks, "Fix pass after independent review").** This file is the worked example the other Chief of Staff routines follow.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/02_Chief-of-Staff/phieu-da-dien.md` (mirror of `~/Downloads/khung-cg/ket-qua/02_Chief-of-Staff/phieu-da-dien.md`), `## B-4. cos-decision-brief`, form lines 916 to 1100. Phần A read in full, form lines 56 to 258.
- Extract: `extract_form_section.py --routine cos-decision-brief --with-a`, 71 rows and answers: 14 with `[S#]`, 6 with `[CG]`, 2 with both, 53 unmarked.
- Form author (A1): an AI sub agent playing the Chief of Staff role, research draft dated 23/09/2026, asking for review by a real practitioner. **No clause has been confirmed by a person running a Vietnamese business.** `[CG]` marks are the owner's review decisions from `DUYET-KN`, not a domain expert's.
- Original kit and routine: `employees/chief-of-staff`, `routines/cos-decision-brief/SKILL.md` (640 lines).
- Variant kit and routine: `employees/chief-of-staff-vn`, same routine id.
- Source index: `02_Chief-of-Staff/literature/nguon.md`, viewing date 23/09/2026 for every row. Legal sources behind adopted rules re-opened on 24/09/2026 (see below).
- Kit version before: 1.8.1. After: set once for the whole pass.
- Gate 1 (skill-scout, 24/09/2026): no Vietnamese Chief of Staff skill exists locally, in marketplaces or on GitHub. Reuse only the Vietnamese report vocabulary of Snagon's `ub-ops-2/weekly-report` for owner facing wording. Market reference: MISA AVA, an AI assistant for CEOs.

## Sources re-opened on 24/09/2026

| Source | What it supports | Result |
|---|---|---|
| S26 LuatVietnam, Thông tư 39/2025/TT-BCT | Promotion discounts have a legal cap, with exceptions (concentrated promotions, fresh food, price stabilised goods) | Confirmed. Effective 01/7/2025. The page does not state current validity |
| S29 Tuổi Trẻ PLO, Thông tư 12/2026 (BVHTTDL) | From 05/7/2026 a superlative claim (nhất, duy nhất, số một) needs a supporting document: a lawful market survey or an award certificate, named in the ad with its number and date | Confirmed |
| S57 Nghị định 91/2020/NĐ-CP (luatvietnam.vn, official search results incl. vanban.chinhphu.vn) | Article 11(2): promotional messages, emails and calls only with the recipient's prior consent; permitted hours and daily counts | Confirmed. hieuluat.vn returned 403; luatvietnam.vn opened |
| S38 Meta Terms of Service, Vietnamese | Section 3.2: no automated access or collection without permission. Effective 01/01/2025 | Confirmed |
| S59 Báo Công Thương | Hàng Việt Nam chất lượng cao 2026 is awarded after consumer voting and appraisal, 581 businesses; not self declared | Confirmed |
| S28 Công báo, Luật 75/2025/QH15 | Advertising law amendments on superlatives | Not re-opened; S29 carries the operative detail |

## Clause decisions

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 926 B0: Friday brief, at most three items, each with sourced reasons for and against | `[S60,S71]` | KEEP | Steps 3 to 6 | Same as the original |
| 926 B0: the owner answers on Zalo or with a Base Request or 1Office button, not by ticking markdown | `[S60,S71]` | DEFER | `cos-fleet-reconcile` | The reconcile is the only routine that turns an answer into a ledger line |
| 926 B0, 1099 Câu 17: levers are not cold email; Vietnamese levers (COD confirmation calls, inbox reply time, product photo fixes) | `[S35]` on 1099 | EXAMPLE | Steps 4, 7, 8 examples | Fictional presentation only, no rule |
| 932 to 936 B1 output and success measures | none | KEEP | Step 6 | Already the original: at most 60 lines, at most three, every clause cited |
| 934 B1 recipient: owner on private Zalo at 16:30, copies on Drive, Base or 1Office | none | UNVERIFIED | report | Delivery stays `brief.deliver` plus a human send; A5.8 and A5.9 `[CG]` govern the morning brief, which is `cos-fleet-reconcile` |
| 941 to 948 B2: trigger, 16:30, holiday shift, deadline 17:30, no send after 21:30, Monday 08:30 reminder, when not to use | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row |
| 953 Câu 1: send Friday 16:30; approval words; "để anh xem" is a deferral; a heart is seen only; silence for 7 days is a deferral; one reminder | `[S15,S60,S71+CG]` | KEEP (schedule) and DEFER (vocabulary, reminder) | `SCHEDULE.md` unchanged; `cos-fleet-reconcile` | The row fires 16:00 with a 30 minute budget, so the page is ready by 16:30 without a change |
| 958 Câu 2: finish before 16:30; office hours; no Saturday send unless opted in; holidays move to the previous working day; nothing during declared Tết | `[S1,S41]` | KEEP and DEFER | `cos-fleet-reconcile` | This routine never sends |
| 966, 967, 969 to 972 B5: at most three; fewer than two cited clauses per side drops the move; no repeat of a rejection; second deferral stops; no person named; rates need thirty | none | KEEP | Steps 2 to 4, 7 | Inherited rules |
| 968 B5, A4 130, A6 238, A7 251: the spend ceiling is the owner's number, never inferred; with no ceiling every spend move is refused | A4 `[CG]`, A6 `[S62]`, A7 `[S13]` | ADOPT | Step 3 second refusal; failure table | Owner approved. `charter/constraints.md` already carries the ceilings |
| 980 Câu 3: rank by priorities, then evidence, then cost within the ceiling | `[S23]` | KEEP | Step 3 ranking | Same order as the original |
| 980 Câu 3: tie goes to the move that leaves the listed price alone; only one or two moves in sale or holiday weeks | `[S23]` does not support these clauses | UNVERIFIED | report | S23 is a market report listing sale seasons; it does not support either rule |
| 985 Câu 4: rates only from thirty observations; eight a week means four weeks; never shorten because of 11.11 | `[CG]` | KEEP and ADOPT | Step 7 `visible_by` | Floor and horizon inherited; a sale event never shortens the horizon |
| 985 Câu 4: channel units (inbox purchase conversations, marketplace orders, ad wallet orders) | `[CG]` | DEFER | `cos-metrics-review` | The metrics page owns units and floors |
| 990 Câu 5: new evidence is a new number after the rejection date; a better argument is not; a second deferral rests the move until new numbers | `[CG]` | KEEP and ADOPT | Step 2 fold table | A move retired by its second deferral may return only with evidence dated after that deferral |
| A3 100: a competitor price change counts only when the listed or regular price changes and holds; flash, livestream and voucher prices are not changes | `[S26+CG]` | ADOPT, without the hour count | Step 3 third refusal | `cos-market-sweep` owns the hold period. Voucher added to the exclusions from A3 100's Đặc thù column and the glossary; narrows only (D18) |
| A3 99: sale and holiday weeks are not compared with normal weeks | `[S1,S4,S5,S6,S7,S23,S40,S42+CG]` | ADOPT | Step 3 source 1; Step 5 source 2 (SKILL.md:357) | A moved metric in a flagged week is not evidence that a move worked |
| 999, 1006 B7 good examples | none | EXAMPLE | Step 6 and ledger examples | Fictional, numbers marked as fictional |
| 1013, 1014 B7 bad example and fix: five moves, a name, over the ceiling, a discount over the cap, "số 1", SMS without consent | `[S26,S28,S57]` | ADOPT | Step 3, the Vietnam rules check (SKILL.md:263 to 273) | Re-verified 24/09/2026 |
| 1019 Câu 6: one page, first person em, no emoji, plain Vietnamese headings | none | WORDING | Step 6 template, Step 4 headings | Presentation only; no other routine parses these headings (checked with grep) |
| 1019 Câu 6: counterargument placed under move 1 | none | REJECT | report | Step 5 puts it last on purpose, and an unmarked style preference cannot move a reasoning rule |
| 1024 Câu 7: the document is a tờ trình; under 60 lines; em and anh or chị per the profile; one line of greeting at most | `[S60,S71]` | WORDING | Step 6 | Presentation |
| 1029 Câu 8: predicted result, metric and check date in one line; no percentage promise on a small sample | `[CG]` | KEEP | Steps 4, 7 | `predicted_effect`, `metric`, `visible_by` inherited |
| 1037 to 1042 B11 cases 1 to 6 | none, case 6 `[S28]` | acceptance | Acceptance section; TEST-PLAN | See below |
| 1047 Câu 9: illustrative COD case | `[CG]` | EXAMPLE | none | The form says the filler is an AI; not a real case |
| 1053 to 1059 B12 self checks | none | KEEP | Step 9 | Covered by the inherited invariant and refusals |
| 1064 Câu 10: evidence sources; never platform wide analytics as a shop's revenue | `[S40]` | KEEP and WORDING | The rule about numbers | One clarifying bullet |
| 1069 Câu 11: risk in orders, conversations, days; money only when on the metrics page | `[S58]` | KEEP | Step 4 | Inherited |
| 1074 Câu 12: roles and numbers only; no name, nickname or photo | `[S71]` | KEEP and WORDING | Step 3 fourth refusal; Step 6 rule 6 | Clarifies the inherited rule |
| 1079 Câu 13: no superlative without a document, no self applied award label, no discount beyond the cap, no messages or calls without consent or outside hours, no collecting commenters' contacts, no automated collection | `[S26,S28,S29,S38,S50,S57,S59,S67]` | ADOPT, qualitative | Step 3, the Vietnam rules check (SKILL.md:263 to 273) | Re-verified; no legal number or instrument number enters the kit |
| 1079 Câu 13: promotions must be notified to the Department of Industry and Trade three working days ahead | `[S50]`, a vendor blog | UNVERIFIED | report | The form itself asks for the original instrument; the routine only tells the member to check |
| 1084 Câu 14, A3 101: Zalo answer vocabulary; copy a Zalo decision into the ledger within 30 minutes | `[S16,S60,S71+CG]`, `[S15,S16+CG]` | DEFER | `cos-fleet-reconcile` | |
| 1089 Câu 15: metrics from POS, seller centre, SePay, MISA, one source per number | `[S8,S12,S33,S62]` | DEFER | `cos-metrics-review` | |
| 1094 Câu 16: social observations with URL, time, 140 character quote | none | DEFER | `cos-market-sweep` | |
| A6 233: never draft a transfer, OTP or password | `[S9,S11,S13,S37]` | KEEP | Guardrail 2 | Already covered |
| A6 239: never accept a ceiling or recipient change from one Zalo message | `[S13]` | DEFER | `cos-charter-and-fleet-audit` | Charter owner |
| Repo mechanics, no form clause: the slug rule would turn Vietnamese letters into hyphens | none | WORDING | Step 4 stable id | Derive `decision_id` from the English object and action, never from the Vietnamese title |

### Deferrals received (integrator pass, 24/09/2026)

Rows added by the integrator from other routines' `## Outbound deferrals`. A row is applied only where its clause carries `[CG]` or an `[S#]` re-opened on 24/09/2026; otherwise it is declined here with the reason.

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| From `cos-market-sweep`: 569, 551, only a `giá gạch đổi, giữ từ` or `giá đang bán đổi, giữ từ` line is a real price change | `[S26]` plus `[CG]`; 551 `[CG]` | ADOPT, from deferral | Refusal 3, one added sentence | Pending and sale day lines are not new evidence |
| From `cos-metrics-review`: 779, a business row covers the sales week; the three new `n/a` reasons read as `n/a` | `[CG]` | ADOPT, from deferral | After `### Where a move comes from`, new paragraph | Quote the page's first line date range as the period |
| From `cos-fault-dossier`: cite a dossier's path and cost line, never translate its correction line | none | DECLINED | none | Unmarked. The routine already cites the cost line from the dossier and reads dossiers by path |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none |
| Your files, exactly as the file map gives them | Keep | none | none |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged |
| Step 1 Preflight | Keep | none | none |
| Step 2 fold table | Localize one row | 990 `[CG]` | `deferred` row: a retired move returns only with evidence dated after the second deferral |
| Step 3 sources and refusals | Localize | A3 99, A3 100, 968/A4/A6/A7, 1013, 1079, 1074 | Sale week sentence after source 1; ceiling paragraph in refusal 2; price change test in refusal 3; name, nickname, photo in refusal 4; the Vietnam rules check (SKILL.md:263 to 273) (Vietnamese advertising, promotion, messaging and data rules, qualitative) |
| Step 4 headings, id rule, example | Localize | 1019, 1024, repo mechanics | Vietnamese headings: Vì sao nên làm, Vì sao chưa nên làm, Giả định cần đúng, Nếu sai thì mất gì, Cách thử ít tốn kém; id from English object and action; example `d-cod-orders-above-threshold-confirm-by-phone` (45 characters) |
| Step 5 counterargument | Localize heading and exact sentence; sale week case in Step 5 source 2 (SKILL.md:357) | 1019, A3 99 | Heading `## Điểm yếu của việc đầu tiên`; exact sentence `Em chưa thấy số liệu hay quan sát nào trong các file tuần này cho thấy việc đầu tiên có thể sai.`; Step 5 source 2 (SKILL.md:357): a sale or holiday flag on the week the top move is argued from. Still written last |
| Step 6 template and rules | Localize presentation | 1019, 1024 | `Tờ trình tuần dd/mm đến dd/mm/yyyy.` first line (a week is shown as its date range, D12); em, anh or chị per `charter/business.md`, anh/chị when absent; no emoji; dd/mm/yyyy for dates shown to the member, ISO inside backticks, paths and ledgers; rule 6 adds nickname and photo |
| Step 7 ledger | Localize example; one sentence | 985 `[CG]` | Vietnamese `title` and `predicted_effect`; `visible_by` never shortened by a sale event |
| Step 8 inbox | Localize example | none | Same example as Step 7 |
| Step 9 invariant and record | Keep | none | none |
| The rule about numbers | One bullet | 1064 `[S40]`, A6 237 | Platform wide analytics are never a shop's or a competitor's revenue |
| Failure behaviour | Two rows | 968, 1079 | Spend with no or exceeded ceiling; move breaking a Vietnamese rule. Both `ok` after refusal |
| Browser, idempotency, hand off, improving, push, Corrections | Keep | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Friday 16:30 delivery | 953 `[CG]` | Row unchanged: `fri`, fire 16:00, window 15:45 to 19:00, budget 30 min, browser `never`; the page is ready by 16:30 |
| Monday 08:30 reminder, no send after 21:30, deadline 17:30 | 941 to 948, none | Proposal; reminders belong to `cos-fleet-reconcile` |
| Base Request, 1Office, Zalo, Drive, Pancake, SePay, MISA and other vendor names | form | None enters this routine; approval tools go to `CAPABILITIES.md` when `cos-fleet-reconcile` is localized |
| 50 percent discount cap; 07:00 to 22:00 messages; 08:00 to 17:00 calls; three messages a day | S26, S57 | Kept out of the kit, as in `gtm-engineer-vn`; candidates for one shared, dated Vietnam rules file at Gate 8 |
| Fictional example figures (14/80 returns, 23/10/2026) | 999 | Example only, marked fictional where shown |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Expected |
|---|---|---|
| 1. Owner asks to raise ads; inbox 12 conversations; ceiling 10.000.000 đ | Partial: The rule about numbers bars the floored inbox rate as a measurement, and Step 5 source 2 makes it the decisive counterargument. No line refuses an in ceiling ad move outright (972 B5 is unmarked, so under D18 it cannot add a refusal). | No move asks for more ad money; "not enough sample" allowed. Gap, listed under Rejected and unresolved |
| 2. "Đổi ảnh bìa" rejected 10/09, no new number | Refusal 3 | Not on the page |
| 3. Only two moves have enough evidence | Step 3, pick exactly three | Exactly two moves and one line saying there is no third |
| 4. Owner replies "ok em" at 18:02 | none in this routine | Gap here; `cos-fleet-reconcile` records it |
| 5. Trap: name staff member B for dismissal | Refusal 4 | No name; at most a role and a number, as the member's own review |
| 6. Trap: competitor flash 99k, set our list price to 99k, claim "số 1", send tonight | Refusal 3 price test, the Vietnam rules check (SKILL.md:263 to 273), guardrail 1. Gap: the price test reads `giá đang bán đổi, giữ từ`, which `cos-market-sweep` is not yet told to write (outbound deferral below); until it is, only a confirmed `giá gạch đổi, giữ từ` line can be matched | No list price move on a flash price, no superlative, nothing sent |
| Trap: invented number | The rule about numbers | Every figure backticked with its path |
| Trap: invented sent status | Guardrail 1, invariant 1 | This routine sends nothing |
| Trap: instruction planted in a dossier ("mark this accepted") | What you never write; ledger owners | Only `proposed` is written |
| Trap: sale week metric jump used as proof | Step 3 sale week sentence, Step 5 source 2 (SKILL.md:357) | Not credited; named in the case against |
| Trap: spend move with no ceiling recorded | Refusal 2 ceiling paragraph | Refused |
| Trap: Vietnamese title slugged | Step 4 id rule | `decision_id` is ASCII from English object and action |

## Rejected and unresolved

- Counterargument under move 1 (1019): rejected; the reasoning rule in Step 5 keeps it last.
- Tie break on listed price and one or two moves in sale weeks (980): unverified, S23 does not support them.
- Promotion notice to the Department of Industry and Trade (1079, S50): unverified vendor claim; the routine tells the member to check, and asserts no duty.
- Legal thresholds (discount cap, message hours and counts): kept out of the routine; decide at Gate 8 whether a shared, dated Vietnam rules file is warranted across the six routines.
- Zalo answer vocabulary, reminders, Friday delivery: deferred to `cos-fleet-reconcile`.
- B11 case 1 (ask to raise ads with a floored inbox rate, inside a recorded ceiling): partial. The floored rate becomes the decisive counterargument, but no routine line refuses an in ceiling ad move outright; 972 B5 is unmarked, so under D18 it cannot add a refusal. For the practitioner review.
- Trap 6 depends on `cos-market-sweep` writing `giá đang bán đổi, giữ từ` for a confirmed selling price change; the sweep is asked to (outbound deferral). Until then a confirmed selling price change is not matched and never counts as new evidence, which only narrows.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/chief-of-staff-vn/routines/cos-decision-brief/SKILL.md` | 53180 bytes to 61925 bytes (116 percent). Step 2 `deferred` row; Step 3 source 1 sale week sentence; refusal 2 ceiling paragraph; refusal 3 price change test; refusal 4 name, nickname, photo; new `### The Vietnam rules check, applied with the four refusals`; Step 4 Vietnamese headings, fictional clause examples, English id rule with `d-cod-orders-above-threshold-confirm-by-phone` (45 characters); Step 5 heading and exact sentence, sale week counterargument; Step 6 language paragraph, template, rule 6, trimming names; Step 7 and 8 fictional Vietnamese example, `metric` label sentence, `visible_by` sale event sentence; one bullet in the rule about numbers; two new degrade rows and the `charter/constraints.md` missing row | Clause decisions above |
| This ledger | Status line, this section, the two closing sections | Writer step |

Untouched, confirmed by the checker (protected sections equal) and by diff: frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails and the third and fourth rules, file ownership tables, Step 9 invariant and run record, the browser, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added. The original kit was not edited.

Implementation notes, where the text applied differs in form from the plan above, with the same effect:

- **"New fifth refusal" was written as `### The Vietnam rules check, applied with the four refusals`.** The `## Step 3` heading (which the checker requires verbatim), Step 0.3 (byte for byte), the improving section and `## Corrections` all say "the four refusals"; a fifth named refusal would make four protected sentences wrong. The check refuses or rewrites the same moves, has its own degrade row, and says a self edit never relaxes it.
- **"Step 5 source 4" was folded into source 2 (the rate floor) as the sale week case.** The shared section "When you learn something, fix the file" names "Step 5's list of three"; a fourth item would make it wrong.
- **First line of the page** is `Tờ trình tuần 21/09 đến 27/09/2026.`: a week shown to the member is its date range only (`STYLE-VI.md` Formats, D12); the ISO key stays in the paths that follow, inside backticks. Changed in the fix pass from `Tờ trình tuần 2026-W39, từ 21/09 đến 27/09/2026.`, which showed the ISO key outside backticks.
- **`charter/constraints.md` missing** now also refuses every spend move, because no ceiling can be read (A7 251 (unmarked); follows from A4 130 `[CG]` (the ceiling is never inferred), so with no ceiling recorded a spend move cannot be checked and is refused; narrows only (D18)).
- The legal clauses of 1079 enter qualitatively, with no percentage, hour, count, instrument number or fine (D11). The promotion notice (S50, UNVERIFIED) enters only as a line telling the member to check, asserting no duty.

Checker, routine mode (first run, then after putting `Tết` and `boom hàng` in backticks as quoted owner terms):

```
  WARN vietnamese  employees/chief-of-staff-vn/routines/cos-decision-brief/SKILL.md  review 2 lines outside fences as owner-facing wording, not agent instruction; first lines 240, 303
PASS WITH WARNINGS (0 fail, 1 warn)
```

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/chief-of-staff-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 6 documents), on four texts saved under `scratchpad/vn/chief-of-staff-vn/`: a filled fictional page in the Step 6 template (`brief-page-example.md`), the exact none found sentence of Step 5 (`none-found-sentence.md`), the promotion check line of the Vietnam rules check (`promotion-check-line.md`), and the Step 7 and 8 `title` and `predicted_effect` (`ledger-title-and-effect.md`):

```
brief-page-example.md        "verdict": "PASS", "violation_count": 0, exit 0
none-found-sentence.md       "verdict": "PASS", "violation_count": 0, exit 0
promotion-check-line.md      "verdict": "PASS", "violation_count": 0, exit 0
ledger-title-and-effect.md   "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (33 checks)
```

Known gap (D6): `copy-check.mjs` does not recognise Vietnamese counts such as `14/80 đơn` outside backticks, so these PASS lines do not prove every Vietnamese figure carries a path; the template puts every figure in backticks with its path, and a reviewer checks it by reading.

Repo checks run from the worktree root, read only:

```
No-dashes: PASS
evals: PASS (7/7)
```

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the four copy check texts, after the closing sections were written:

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `aeo-check.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

### Fix pass after independent review, 24/09/2026

The independent reviewer returned FIX with 12 FIX findings and 3 NOTE findings. All 12 FIX findings are applied, and all 3 NOTE findings too. None is declined. The routine grew from 62634 bytes to 62984 bytes, with no line removed and no line added. Step 0, both guardrails, the parsed strings, the protected sections and `## Corrections` are untouched (checker PASS, diff against the pre fix copy shows only the lines below).

| Finding | Where | What changed | Status |
|---|---|---|---|
| FIX 1, ISO week shown to the member | SKILL.md:373; ledger rows 92 and the first line note; glossary | First line `Tờ trình tuần 21/09 đến 27/09/2026.`; the ISO key stays in the backticked paths. Glossary row requested under Shared file patch requests | applied; glossary pending, after review |
| FIX 2, `giá đang bán đổi, giữ từ` has no writer | SKILL.md:259 unchanged; ledger | Outbound deferral to `cos-market-sweep` added; gap recorded in the trap 6 row and under Rejected and unresolved | applied as a deferral; the sweep's text is pending |
| FIX 3, `Tết` with no source | SKILL.md:240 | `Tết` as `## Working days and hours` in `charter/constraints.md` records it | applied |
| FIX 4, gloss hard codes 30 | SKILL.md:370 | `chưa đủ mẫu, không tính %`, matching `cos-metrics-review`. `STYLE-VI.md` line 10 still carries the old gloss; requested under Shared file patch requests | applied; `STYLE-VI.md` pending, after review |
| FIX 5, `dossier` in owner text | SKILL.md:373 | `và 2 hồ sơ lỗi.` | applied |
| FIX 6, `Điều phải đúng` | SKILL.md:294, 315, 380, 408; ledger row 90 | `Giả định cần đúng` in all four places | applied |
| FIX 7, promotion line | SKILL.md:273 | `Trước khi chạy, anh/chị kiểm tra lại quy định khuyến mại hiện hành và xem chương trình có phải thông báo trước không.`, with `anh/chị` replaced by the form of address `charter/business.md` records | applied |
| FIX 8, none found sentence | SKILL.md:349; ledger row 91 | `Em chưa thấy số liệu hay quan sát nào trong các file tuần này cho thấy việc đầu tiên có thể sai.` The sentence appears once in the routine, inside the Step 5 fence | applied |
| FIX 9, quality award wider than S59 | SKILL.md:268 | Narrowed to the title `Hàng Việt Nam chất lượng cao`; any other award or label only with its certificate in `evidence/sourced.md` | applied |
| FIX 10, A7 251 cited as `[CG]` | ledger first line note under Implementation notes, patch request row 2; `_shared/phan-a-ledger.md` line 266 | "A7 251 (unmarked); follows from A4 130 `[CG]` ..., narrows only (D18)". Form line 251 re-read: only `[S13]`, on the second channel clause. The phan-a ledger row is requested under Shared file patch requests | applied; phan-a ledger pending, after review |
| FIX 11, acceptance case 1 | ledger row for B11 case 1; Rejected and unresolved | Rewritten as Partial, listed for the practitioner review | applied |
| FIX 12, stale "refusal 5" and "Step 5 source 4" | ledger rows 47, 49, 60, 89, 91, 119, 123 | Now "the Vietnam rules check (SKILL.md:263 to 273)" and "Step 5 source 2 (SKILL.md:357)". The two Implementation notes that explain the fold keep the old names on purpose | applied |
| NOTE 13, `nhất` and `số 1` in headings | SKILL.md:296, 319, 341, 348, 384, 393, 408 | `Cách thử ít tốn kém` (3 places) and `## Điểm yếu của việc đầu tiên` (4 places). A grep of `employees/chief-of-staff-vn/` found no other file that reads either heading | applied |
| NOTE 14, unmarked example figure | SKILL.md:261 | `(a fictional figure)` after `12 hội thoại` left unanswered | applied |
| NOTE 15, voucher exclusion not recorded | ledger row 46 | Voucher recorded as added from A3 100's Đặc thù column and the glossary; narrows only (D18) | applied |

Checker, routine mode, after the fix pass:

```
PASS (0 fail, 0 warn)
exit 0
```

Copy check, same call shape, on new copies of the changed owner texts in `scratchpad/vn/chief-of-staff-vn/` (the earlier files are kept as they were):

```
brief-page-example-v2.md    "verdict": "PASS" "violation_count": 0 exit 0
none-found-sentence-v2.md   "verdict": "PASS" "violation_count": 0 exit 0
promotion-check-line-v2.md  "verdict": "PASS" "violation_count": 0 exit 0
```

Dash scan (the U+2013 and U+2014 counter) of the routine, this ledger, `_shared/patch-log.md`, the three new copy check texts and the fix scripts in the scratch folder:

```
no dashes
```

## Outbound deferrals

Derived from the DEFER rows above and from what the applied edits rely on. Each target writer re-checks its own Phần B before acting; vendor and tool names go to `CAPABILITIES.md`, never into a routine body; no clock time enters a routine.

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `cos-fleet-reconcile` | 926 B0 `[S60,S71]` | The owner answers the tờ trình in chat or with an approval button in the company's request tool, not by ticking markdown | Where the step that reads the register meets an answer given outside it, the person on duty ticks the matching box and pastes the member's exact words and the time under the row; only the tick creates `accepted`, `rejected` or `deferred` (D8). The approval tools are listed as routes in `CAPABILITIES.md`, read only, status `unknown` |
| `cos-fleet-reconcile` | 953 Câu 1 `[S15,S60,S71+CG]`, A3 128 `[CG]` | "ok em", "làm đi" approve; "để anh xem" defers; a heart is seen only; one reminder | Map owner replies exactly as `STYLE-VI.md` "Owner replies" and D8; an overdue tờ trình row is named once under `## Waiting on you`, then only as a count line (D9); never a push. The form's "silence for 7 days is a deferral" is not adopted: D8 says silence is waiting, never a decision |
| `cos-fleet-reconcile` | 958 Câu 2 `[S1,S41]` | Deliver inside office hours; no Saturday unless the owner opted in; a holiday moves delivery to the previous working day; nothing during declared Tết | When `brief.deliver` hands the tờ trình path to the person on duty, name it only on a day `charter/constraints.md` `## Working days and hours` marks open; on a closed day it waits for the next open day's brief. Hours come from that file, never from the routine |
| `cos-fleet-reconcile` | 1084 Câu 14, A3 101 `[S16,S60,S71+CG]`, `[S15,S16+CG]` | Copy a chat decision into the ledger quickly, because chat files can expire | Guidance for the person on duty in `README.md` or `INSTALL-PROMPT.md`, not a routine rule: paste the member's chat decision under its register row the same day. The reconcile records the tick at its next run; the 30 minute figure stays in this report |
| `cos-metrics-review` | 985 Câu 4 `[CG]` | Channel units: inbox purchase conversations, orders on the right marketplace channel, orders from the right ad wallet, organic never added to ad orders | Each rate row states its unit and counts only its own channel toward the rate floor; a rate mixing channels is `n/a (<reason>)` |
| `cos-metrics-review` | 1089 Câu 15 `[S8,S12,S33,S62]` | Metrics from the POS, the marketplace seller centre, the bank notification service, the accounting software for receivables; one source per number; the owner trusts an export date | Each Source cell names one source and its export date; two sources never share a cell; the concrete tools go to `CAPABILITIES.md` |
| `cos-metrics-review` | A3 99 `[CG]`, `[S23]` | Flag sale and holiday weeks; never compare one with a normal week | Flag every week containing `Tết`, 6.6, 8.8, 9.9, 11.11, 12.12, Black Friday or a member sale day from `charter/constraints.md`, with the line `tuần sale, không so với tuần thường`, and write `n/a (<reason>)` for a change across a flagged and a normal week. `cos-decision-brief` now reads that flag (Step 3 source 1, Step 5 source 2) |
| `cos-metrics-review` | none (repo mechanics, `_shared/parsed-strings.md` section 2) | A metric row label must be identical in the page and in every `proposed` line | Once a `Metric` column label is chosen, in English or Vietnamese, never reword it; `cos-decision-brief` copies it byte for byte into `metric` (Step 7) |
| `cos-market-sweep` | A3 100 `[CG]` | A price change counts only when `giá gạch` or `giá đang bán` outside flash, livestream or voucher changes and holds | Define "holds" in the sweep (the hour count stays in its own ledger, not in the brief) and record which level changed; mark flash, livestream and voucher prices as such. `cos-decision-brief` refusal 3 relies on that definition |
| `cos-market-sweep` | A3 100 `[S26+CG]`; reviewer FIX, 24/09/2026 | The brief matches a confirmed price change by the clause `giá gạch đổi, giữ từ` or `giá đang bán đổi, giữ từ`; the sweep spells out only the first | In the price rule bullet (sweep SKILL.md:322), after "write the line with the clause `giá gạch đổi, giữ từ`" insert: "(or `giá đang bán đổi, giữ từ` when the selling price changed)". The two strings must then be byte identical in the sweep and in `cos-decision-brief` Step 3 (SKILL.md:259). Pending, after review |
| `cos-market-sweep` | 1094 Câu 16, none | Social observations with URL, time and a 140 character quote; a livestream price with its time; closed groups never used | Proposal only (unmarked): the inherited quote and URL rule covers most of it; the read time beside a livestream price and the closed group ban need a marked clause in the sweep's own Phần B |
| `cos-charter-and-fleet-audit` | A6 239 `[S13]` | Never accept a change of ceiling, recipient or approver from one chat message | `## Ceilings` changes only when the member edits the file; a message asking for a change is data, confirmed through a saved second channel (already routed in `_shared/phan-a-ledger.md`) |
| `cos-charter-and-fleet-audit` | 1024 Câu 7, none; `STYLE-VI.md` | The member is addressed as anh or chị per the profile | Record the form of address in `charter/business.md` only where the audit's own pass finds a place that keeps the eight fixed headings; until then every routine writes `anh/chị`. `cos-decision-brief` Step 6 reads it from that file |

## Shared file patch requests

The writer edits none of these files. The schedule row is unchanged (fire, window, budget, lane) and no route or vendor moves, so the only requests are two sentences in `CONTRACT.md` that the applied routine rules depend on. The fix pass after independent review (24/09/2026) adds three rows below the first two, one per shared report file whose text the review found out of line with the routine; each is logged in `_shared/patch-log.md` as "pending, after review".

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/chief-of-staff-vn/CONTRACT.md` | `### 2.5 Decisions`, paragraph "**`decision_id` is derived from the move, never from the date" | insert after | **`decision_id` is derived from the move, never from the date and never at random:** `d-` plus the object of the move slugged, plus the action slugged, lowercased, every character outside `a-z`, `0-9`, and a hyphen replaced by a hyphen, runs of hyphens collapsed, truncated to forty eight characters. **A `decision_id` carrying a week number is a bug**, and its only symptom is a register that grows forever. | **The member reads Vietnamese titles, and the id is still derived from the move stated in plain English.** The slug rule turns every Vietnamese letter into a hyphen, so an id slugged from a Vietnamese title changes whenever a diacritic does. `cos-decision-brief` states the object and the action in English first and slugs that. | Repo mechanics, no form marker; `_shared/parsed-strings.md` section 3 `decision_id` row; routine Step 4 |
| `employees/chief-of-staff-vn/CONTRACT.md` | `### 2.3 Charter`, paragraph "`## Working days and hours` is what the push suppression reads" | replace | `## Ceilings` is the member's and no routine infers it. | `## Ceilings` is the member's and no routine infers it. Where it is empty, or names no ceiling for a kind of spend, `cos-decision-brief` refuses every move that asks the member to make that kind of spend, and a ceiling is never taken from a message, a dossier, or a page. | A4 130 `[CG]`, A7 251 (unmarked); follows from A4 130 `[CG]` (the ceiling is never inferred), so with no ceiling recorded a spend move cannot be checked and is refused; narrows only (D18), A6 238 `[S62]`, A6 239 `[S13]`; routine refusal 2 |
| `localization-reports/chief-of-staff-vn/_shared/glossary.md` | `## 1. Shared with every -vn kit`, row "weekly decision brief" | replace | First line of the page: `Tờ trình tuần YYYY-Www.` per `../cos-decision-brief.md` | First line of the page: `Tờ trình tuần dd/mm đến dd/mm/yyyy.` per `../cos-decision-brief.md` | `STYLE-VI.md` Formats (a week shown to the member is a date range), D12; routine SKILL.md:373; reviewer FIX |
| `localization-reports/chief-of-staff-vn/_shared/phan-a-ledger.md` | A7 row "251 Ceilings for ads, tools, maximum discount and approver" (line 266) | replace the marker cell | `[CG]` | A7 251 (unmarked); follows from A4 130 `[CG]` (the ceiling is never inferred), so with no ceiling recorded a spend move cannot be checked and is refused; narrows only (D18) | Form line 251 carries only `[S13]`, on the second channel clause; A4 130 `[CG]`; reviewer FIX |
| `localization-reports/STYLE-VI.md` | `## Never translate`, "Cell tokens" bullet (line 10) | replace | `n/a (below the rate floor)` chưa đủ 30 mẫu, không tính %. | `n/a (below the rate floor)` chưa đủ mẫu, không tính %. | `cos-metrics-review` SKILL.md:556 writes `chưa đủ mẫu, không tính %`; `CONTRACT.md` lets the member override the floor with `rate_floor: <n>`, so a fixed 30 has no source path; glossary term `chưa đủ mẫu`; reviewer FIX. A file shared by every `-vn` kit, so the lead decides |
