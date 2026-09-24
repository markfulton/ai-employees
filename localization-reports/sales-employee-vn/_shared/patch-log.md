# sales-employee-vn: shared file patch log

Integrator pass, 24/09/2026. Every shared file patch request in the seven routine ledgers and every Phần A row that targets a shared file, in the lead's order: `CONTRACT.md`, `SCHEDULE.md` with `employee.json`, `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`. Where two requests contradict, the original behaviour is kept and the contradiction is logged. `CONTRACT.md` keeps every section number; new material sits in the new section 10, "Vietnam operating rules", placed just before Appendix A, with a one line pointer where a reader of an existing section needs it. Backup of the variant before this pass: `scratchpad/vn/sales-employee-vn/sales-employee-vn.before-integrator`.

Request ids: SP setup, TP standup, FP first touch, UP follow up, RP pipeline review, WP prospect sweep, QP qualification refresh, in the order each ledger lists them.

## Contradictions, kept at the original behaviour

| Requests | What they ask | Decision |
|---|---|---|
| SP4 against UP1, UP2, UP3, and the `sales-first-touch-drafts` outbound deferral to the lead (841b) | SP4 adds `call` and `chat` to `channel:` in `strategy/message-library.md`. UP1 and UP2 add `call` and `zalo` to the same field and to `channel` in `crm/contacted.jsonl`; UP3 defines queue entries for them. The first touch writer asked the lead to decide, adding a `phone` key and a Voice Brandname gate in one change across seven routines | **Declined, original kept:** `channel` stays `email` or `linkedin`, `both` in the library. The two value sets disagree, every reader of `crm/contacted.jsonl` would have to change in the same pass (`_shared/parsed-strings.md`), `crm/contacts.csv` has no phone column, and the first touch writer did not adopt a call or chat draft. Recorded in `CONTRACT.md` 10.5. The routines already degrade: setup writes only listed channels, the follow up sweep skips a pair with no resolvable address and counts it |
| FP3 against SP3 | FP3 puts the form of address under `## Samples` in `strategy/voice.md`; SP3 gives it its own heading `## Form of address` | **SP3 applied for the form of address, FP3 applied for the signature block.** `sales-desk-setup` writes `## Form of address` as the last heading; the setup deferral 443 `[CG]` made `sales-first-touch-drafts` read that heading first and the samples second, so no behaviour is lost |
| WP1 against QP2 | A platform the table does not name: the sweep falls back to its own category defaults; the refresh treats it as forbidden | **Both kept**, each routine's own behaviour. The table's preamble says so |

## CONTRACT.md

| Id | Anchor | Request | Decision | Where and why |
|---|---|---|---|---|
| SP1 | 2.3, offer headings | Add `## Legal identity`; price lines from the member only | Applied | The heading joins the list in 2.3 with a pointer; what goes under it and under `## Price and billing shape` is 10.2 |
| SP2 | 2.3, buyer fields | `influencer:` after `role:` | Applied as written | 2.3 |
| SP3 | 2.3, voice headings | `## Form of address` | Applied as written | 2.3, 10.2 |
| SP4 | 2.3, library `channel:` | `call`, `chat` | Declined | Contradiction above |
| TP1 | 2.7, brief template | Stop line first under `## Today` | Applied as written | 2.7. Two more template lines added in the same place to match the standup template after this pass's deferrals (held for want of consent, refused data list) |
| TP2 | 2.7, after the veto paragraph | The stop line paragraph | Applied | Full text in 10.4; 2.7 carries "The stop line is not optional either" and the pointer |
| FP1 | 2.5, after the marker paragraph | Consent records in `tags` above the marker | Applied | Full text in 10.3; a pointer sentence in 2.5 |
| FP2 | 2.6, queue example | Vietnamese header lines | Applied as written | Byte equal to the `sales-first-touch-drafts` template; one sentence says the header is Vietnamese and that the follow up file carries its own |
| FP3 | 2.3, voice | Form of address and signature block under `## Samples` | Applied in part | Signature block under `## Samples` (2.3, 10.2); form of address under its own heading (contradiction above). The legal reason stays in the first touch routine's body |
| UP1 | 2.5, `channel` | `call`, `zalo` | Declined | Contradiction above |
| UP2 | 2.3, library `channel:` | `call`, `zalo`, `both` | Declined | Contradiction above |
| UP3 | 2.6, entries | `call` and `zalo` queue entries | Declined | Depends on UP1 |
| RP1 | 2.7 file map, after `review/manual.md` | Call log or CRM export row | Applied as written | 2.7 |
| WP2 | 7.2, rule 2 | LinkedIn not opened in this variant | Applied as written | 7.2 |
| QP1 | 2.7, `evidence_floor{}` row | Shipped values | Applied | As written, plus `opt_outs_per_framework` 2 from the setup deferral 368 `[S37+CG]` applied to the refresh. The review row now names `rate_floor` 15 and a new `followup_floor{}` row carries the follow up deferral 1147 `[S37+CG]` |
| QP3 | 4.3, vocabulary | Four refresh tokens | Applied | As written, plus the setup's `n/a (captcha)` and `n/a (not set by the member)` |
| Phần A 104, 225, 226, 228, 229, 232 | "`CONTRACT.md` guardrail text" | Bought data, consent, hours and frequency, superlatives, personal identifiers | Applied, qualitatively | 10.1 rules 2, 3, 4, 6, 10; no hour, count or fine (D11) |
| Phần A 86 | finished forever rule extended to call and chat | Refusal on any channel | Applied as a rule, not a vocabulary change | 10.1 rule 3; `do_not_contact` already finishes a contact forever in 2.5 |
| Phần A 245, 249 | file map candidate for a restricted refusal store | A store with tax code or number, verbatim words and recorder | Declined | Same reason as the follow up deferral 1195b: a store of numbers conflicts with rule 10, and needs a writer and reader. `## Other accounts` names where the member keeps their own records |
| Integrator repair | 8.4 | Version check read `employees/sales-employee/VERSION` and printed `npx ai-employees upgrade sales-employee` | Repaired | Reads `employees/sales-employee-vn/`, prints the fork installer's line, as in `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn` 1.9.0. `sales-desk-setup` Step B3a.1 changed in step |
| Gate 8 | new 10.1 | Principles in three or more routines | Written | Twelve rules, English, no legal number |

## SCHEDULE.md and employee.json

No ledger asked for a row change: every writer kept its row and recorded the form's clock times as proposals. `SCHEDULE.md` is unchanged, so no shipped time in `CONTRACT.md`, `SCHEDULE.md` prose, `README.md`, `CAPABILITIES.md` or `INSTALL-PROMPT.md` went stale, and the browser spacing is the original's. `employee.json` changed only its `version`, to 1.9.0.

## CAPABILITIES.md

| Id | Anchor | Request | Decision | Where and why |
|---|---|---|---|---|
| SP5 | `web.fetch`, after "takes no browser mutex" | Closed platforms paragraph | Applied, merged | The platform list moved into the table below; the paragraph keeps the portal, the tax lookup, the directory number rule, the fair catalogue and "confidence `unknown` until observed" |
| TP3 | `brief.deliver`, after "Absent every route" | No chat app route; the member pastes | Applied as written | Section 6 |
| RP2 | 4b, after "`confirmed` appears" | Closed platforms paragraph | Applied, merged | A Vietnam paragraph after the 4b table: outbound held, caller identifier gate, the pointer to the table, and the note that the professional network is not read on the browser lane in this variant |
| WP1 | end of section 10 | `## Platform terms, Vietnam` table (block P1) | Applied, merged | One table between section 10 and `## Corrections`, under the exact heading `sales-prospect-sweep` looks up, with the terms page and date column from QP2 |
| QP2 | connected sources | Platform table with terms page and date | Applied, merged into WP1 | Rows: LinkedIn, Meta, Zalo and Zalo OA, chat groups, VietnamWorks, CareerViet, ITviec, TopCV, the registration portal, the tax lookup, Trang Vàng Việt Nam, Trang Vàng BIZ, the Vietrade catalogue, X |
| Follow up deferral 1179b `[S36]`, 1190c `[S31,S72+CG]` | 4b | `calls.read`, read only, `unknown` | Applied | New 4b row; the export file is the only route |
| Phần A 165b, 187a, 212a (MOVE) | 4b | Vietnamese CRM and switchboard route names | Applied | `crm.read`, Vietnam row and the `calls.read` row, names only, no price, `unknown` |
| Phần A 207b, 163a, 164, 165a, 231, 250, 161, 233 | held actions | Calls, chat, official account messages, quotes, contracts, payment requests, invoices | Applied | The 4b Vietnam paragraph. An invitation on a professional network stays under guardrail 1 as `CONTRACT.md` section 7 writes it, because no marked clause narrows the original release model (D18) |

## ROLE.md

No ledger filed a `ROLE.md` request. Three additions keep it true against the patched contract: the LinkedIn paragraph in guardrail 1 gains the variant sentence (as WP2 and WP3), section 6.3 gains one paragraph on the lines the variant adds (pointing at `CONTRACT.md` 10.2 and 10.3), and section 7 lists the new `n/a` tokens (as QP3).

## README.md

| Id | Request | Decision | Where |
|---|---|---|---|
| WP3 | LinkedIn bullet, one sentence | Applied as written | "The two things it stops for" |
| Integrator | Say this is the Vietnam variant, what differs, and that it is an AI prepared draft | Added | After the opening lines |
| Integrator | The intake fields a routine now reads, and the consent tag the member writes | Added | "What it needs from you" |
| Integrator | Install and upgrade from the fork, never `npx ai-employees upgrade sales-employee` | Added | "Version and updates", which also drops the stale `v1.2.0` the original carries |

## INSTALL-PROMPT.md

| Id | Request | Decision | Where |
|---|---|---|---|
| FP4 | Phase 6 step 2: hold everyone without a consent record | Applied as written, plus the pointer to 10.3 and a line for a run where everyone is held | Phase 6 |
| Integrator, lead step 2 | The intake asks for every profile field a routine now reads | Added | `FILL THIS IN` line 4 (address form, signature block, price and VAT lines, credit terms, largest discount, handoff value, working days and Saturday, call hours, holidays, provinces, buying month, caller identifier, business chat account, call service, where the do not contact list and consent records live) and its no guess rule; Phase 1 step 8 offer and qualification bullets; Phase 1 step 10 question block; Phase 3 `review/manual.md` at `rate_floor` 15; Phase 7 one line on recording consent |
| Integrator | Standing rule 3: LinkedIn and the closed platforms are not opened at all | Added | Rule 3 |

## AGENTS.md

One section, "This is the Vietnam variant": where the Vietnam rules live, and never upgrade from npm or onto `sales-employee`.

## examples/

| Id | Request | Decision | Where |
|---|---|---|---|
| TP4 | `brief-latest.md` replaced by the standup's Step 8.3a sample | Applied verbatim | Extracted from the routine fence |
| TP5 | `pipeline/PIPELINE.md` line 3 in Vietnamese | Applied | The header now equals the standup's Step 6 template (title and three generated lines); the cards were rewritten for the same fictional day as the brief |
| FP5 | Queue header in Vietnamese; entries replaced with the scratch Vietnamese entry and email | Applied | New `queue/2026-09-22-first-touch.md` (the date the brief names), contact `c-0151` so it does not collide with the brief's stop line for `c-0142`, domains under `example.com`, `- mailbox: drafted` added. The English `queue/2026-03-05-first-touch.md` was removed; `examples/README.md` names its successor |
| Integrator | `crm/contacts.csv`, `crm/prospects.jsonl`, `runlog.jsonl`, `examples/README.md` | Rewritten for the same fictional day | The contacts file shows a member consent row above the marker; `runlog.mjs --stdin` accepted all three records in a scratch root; `copy-check --dest plain` PASS on the brief, the pipeline, the queue file and the README |

## Counts

26 requests from the seven routine ledgers: 22 applied (8 as written, 14 merged, split into section 10, or applied in part), 4 declined, all four the channel vocabulary contradiction. Phần A shared file rows: 6 applied, 1 declined (the restricted refusal store). One integrator repair (the version check). No `SCHEDULE.md` request.

## Pending, after review

Requests raised by fixer passes after the independent review. All sixteen were applied by the final verifier on 24/09/2026 (fifteen shared file requests in full and one routine request, FP-N1, in part); the Status column records each.

| Id | File and anchor | Request | Status | Source |
|---|---|---|---|---|
| SP-R1 | `INSTALL-PROMPT.md`, `## PHASE 4. Seed the pipeline`, step 3 | Replace the five English seed titles with the exact Vietnamese titles in `sales-desk-setup` Step A7 (the proof card now reads `Chọn một câu anh/chị sẵn sàng nói công khai và chuyển vào mục bằng chứng được phép nói`), say the inbox is deduplicated on the title, and add the sixth card `Xác nhận tên pháp lý, mã số thuế, địa chỉ mới và người đại diện trên cổng đăng ký`, seeded only when the registration lookup could not be read. Exact old and new text in `sales-desk-setup.md`, Shared file patch requests | applied, final verifier, 24/09/2026: Phase 4 step 3 now carries the five Step A7 titles verbatim and the conditional sixth card | Independent review of `sales-desk-setup`, FIX 4 and FIX 7, 24/09/2026 |
| SP-R2 | `CONTRACT.md`, section 10.2, bullet "`## Other accounts` in `strategy/accounts.md`" | Replace `n/a (chưa có)` with `n/a (none on file) chưa có`, so the cell token stays English with the Vietnamese gloss after it, as the routine now writes it | applied, final verifier, 24/09/2026: 10.2 now reads `n/a (none on file) chưa có`, as setup Step A4.6 writes it | Independent review of `sales-desk-setup`, FIX 5, 24/09/2026 |
| RP-R1 | `localization-reports/sales-employee-vn/_shared/glossary.md`, table row beginning "\| the tick `- [ ] sent` \|" | Insert after it the row \| weekly review Numbers table metric names (`sales-pipeline-review` Step 8) \| `Đầu mối đạt tiêu chí lọc`, `Bản nháp`, `Anh/chị đã tự gửi`, `Phản hồi`, `Yêu cầu không liên hệ nữa` \| fixed wording and order, every week; routine line 459 \|, so the glossary carries the same fixed list the routine now names. Exact text in `sales-pipeline-review.md`, Shared file patch requests | applied, final verifier, 24/09/2026: row inserted after the tick row | Independent review of `sales-pipeline-review`, NOTE on lines 444 and 459, 24/09/2026 |
| SQR-R1 | `CONTRACT.md`, `### 2.7 Review, briefs, recipes, state`, row `evidence_floor{}` | Replace `full working weeks left after declared holidays` with `working weeks left after declared holidays, counted in working days` | applied, final verifier, 24/09/2026 | Independent review of `sales-qualification-refresh`, FIX 1, 24/09/2026; exact text in `sales-qualification-refresh.md`, Shared file patch requests |
| SQR-R2 | `INSTALL-PROMPT.md`, `## FILL THIS IN`, item 4 | After "the public holidays I observe;" insert ` what share of the scheduled prospect sweeps a customer group must get before a month's numbers count for it (worked_fraction), which the kit never sets for me;` so `worked_fraction` is a member value collected at intake, never shipped by the kit | applied, final verifier, 24/09/2026: inserted in `FILL THIS IN` item 4 after the holidays clause | Independent review of `sales-qualification-refresh`, FIX 5, 24/09/2026 |
| SQR-R3 | `localization-reports/sales-employee-vn/_shared/glossary.md`, `## Role terms`, after the row "announced public holiday" | Add three rows: `replied` (display) \| phản hồi \| 1724 [CG]; next step (`booked` or `won` after a reply) \| bước tiếp \| 1724 [CG]; self declared company size \| (tự khai) \| 1646d [S40]. Exact rows in `sales-qualification-refresh.md`, Shared file patch requests | applied, final verifier, 24/09/2026: three rows after `announced public holiday` | Independent review of `sales-qualification-refresh`, FIX 12, 24/09/2026 |
| FP-R1 | `CONTRACT.md`, `### 2.6 Queue`, fenced example | Header lines 3 and 4 to `# Sáng mai em đọc các ô đã đánh dấu để đưa vào bản tin sáng.` and `# Em chưa gửi thư nào. Mỗi email bên dưới cũng đã được lưu, chưa gửi, trong thư mục Nháp (Drafts) của hộp thư.`; `- why this person:` to the Vietnamese value with the consent date; `- subject: [QC] «subject line»`. Byte equal to the `sales-first-touch-drafts` template again (FP2). Exact old and new text in `sales-first-touch-drafts.md`, Shared file patch requests | applied, final verifier, 24/09/2026: header lines 3 and 4, `- why this person:` and `- subject: [QC]` now match the routine's Write 1 template, with the example's concrete dates | Independent review of `sales-first-touch-drafts`, FIX 6 and FIX 8, 24/09/2026 |
| FP-R2 | `examples/queue/2026-09-22-first-touch.md`, header and F-01 body | The same two header lines, and the four reworded phrases of the example email, so the file equals the routine's Step 5 example again (FP5). Rerun `copy-check --dest plain` on the file after applying | applied, final verifier, 24/09/2026: header and the four phrases now equal the routine's Step 5 example; `copy-check --dest plain` PASS (0 violations) | Independent review of `sales-first-touch-drafts`, FIX 5 and FIX 6, 24/09/2026 |
| FP-R3 | `CONTRACT.md`, `### 10.1`, rule 6 | Optional: append `The drafting routines write none; the member adds a documented one by hand.` | applied, final verifier, 24/09/2026 | Independent review of `sales-first-touch-drafts`, NOTE 3, 24/09/2026 |
| FP-N1 | `routines/sales-followup-sweep/SKILL.md` (a routine, not a shared file; for its fixer) | Its queue header lines 455 and 456 still carry the old two lines; match FP-R1. Its sender placeholder `«paste at send time»` to `«member: paste the detail»`, and `bên em` in its refusal line to the business name or `bên «sender name»`. The refusal confirmation duty (S8 Điều 20(3-4)) goes to the kit report as an unresolved item for the member | applied in part, final verifier, 24/09/2026 (routine body, not a shared file): header lines 3 and 4 match FP-R1; the example refusal line is the first touch line verbatim, `bên Lan` in place of `bên em`; `mẫu kế toán bên anh đang dùng` as in the first touch. **Not applied:** the sender placeholder stays `«paste at send time»`; `«member: paste the detail»` was tried and reverted because the kit checker fails any placeholder the original routine does not carry (4 FAIL), although `ROLE.md` section 5 defines it; left for the lead in the kit report. The refusal confirmation duty stays unresolved in the kit report | Independent review of `sales-first-touch-drafts`, FIX 6 and NOTE 2, 24/09/2026 |
| TP-R1 | `examples/brief-latest.md`, lines 4, 10 and 19 | Replace the stop line, the unticked queue file line and the compact blocker row with the same lines of the `sales-desk-standup` Step 8.3a sample after the fixer pass (`do_not_contact (không liên hệ nữa)`, `xóa bản nháp này, đừng gửi`; `chưa đánh dấu`, `đánh dấu vào ô sent`; `Còn 2 việc bị kẹt khác`). Exact old and new text in `sales-desk-standup.md`, Shared file patch requests | applied, final verifier, 24/09/2026: `examples/brief-latest.md` is again byte equal to the Step 8.3a fence (diff showed exactly the three lines) | Independent review of `sales-desk-standup`, FIX 8, FIX 9 and FIX 11, 24/09/2026 |
| TP-R2 | `examples/pipeline/PIPELINE.md`, line 5 | Replace `Tin nhắn ok trên ứng dụng chat chưa phải là tick: người trực tick ở đây và dán nguyên lời anh/chị dưới việc.` with `Trả lời "ok" qua ứng dụng chat chưa tính là đã đánh dấu: người trực đánh dấu ở đây và dán nguyên văn lời anh/chị ngay dưới việc đó.`, so the example stays byte equal to the `sales-desk-standup` Step 6 template | applied, final verifier, 24/09/2026: line 5 equals the Step 6 template | Independent review of `sales-desk-standup`, FIX 12, 24/09/2026 |
| WP-R1 | `CAPABILITIES.md`, `## Platform terms, Vietnam`, row "Trang Vàng Việt Nam" | Automated read `single lookups only` becomes `no`; the last cell becomes `Nothing. The member may look one company up by hand`. Its terms forbid unauthorised copying, use or distribution of site content (`phan-a-ledger.md` 67, 220), and the routine no longer reads any commercial directory (line 72, 414) | applied, final verifier, 24/09/2026 | Independent review of `sales-prospect-sweep`, BLOCK, 24/09/2026 |
| WP-R2 | `CAPABILITIES.md`, same table, row "TopCV" | Append to the last cell: `Its terms are silent on automated reading and forbid copying or exploiting content: the quote is the evidence string only, never republished` | applied, final verifier, 24/09/2026 | Independent review of `sales-prospect-sweep`, FIX 2, 24/09/2026 |
| WP-R3 | `CAPABILITIES.md`, same table, row "Trang Vàng BIZ" | Automated read `single lookups only` becomes `no`; the last cell becomes `Nothing. It republishes registration announcements and is not a state body; the member may look one company up by hand and confirm it on the registration portal`. Follows routine line 414 as the review wrote it; a tightening only, its own terms were not read | applied, final verifier, 24/09/2026 | Fixer pass of `sales-prospect-sweep`, consequence of the BLOCK, 24/09/2026 |
| WP-R4 | `CAPABILITIES.md`, `## 5. Research and notification`, paragraph "**In this Vietnam variant `web.fetch` never reaches a platform closed to automated access.**" | Replace `a directory number counts only after it matches the tax code;` with `a commercial business directory is not read by automation, and a number the member looked up there by hand is a member import;` | applied, final verifier, 24/09/2026; no other kit file names Trang Vàng or a directory number rule, so no reader is left behind | Fixer pass of `sales-prospect-sweep`, consequence of the BLOCK, 24/09/2026 |
