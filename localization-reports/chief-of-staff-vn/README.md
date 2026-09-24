# Chief of Staff Vietnam localization

## Status

`employees/chief-of-staff-vn` is at **1.9.0**, one minor step above the original `employees/chief-of-staff` at 1.8.1 (decision D14). This is the first evidence bounded pass: six routines were localized from their own form section, and an integrator pass then applied the cross routine deferrals, the shared file patch requests, and the Gate 8 rules. Each routine then went through an independent review and a fixer pass, and a final verifier applied the shared file requests those fixers filed and made the kit's Vietnamese wording consistent (see `## Review`). Nothing was committed, pushed or published. The original kit has no changes.

**This is an AI prepared draft.** Form section A1 (lines 54 to 62) names the filler as an AI sub agent playing the Chief of Staff role, dated 23/09/2026, with no years of practice, no employer and no tool operated live, and it asks for review by a real practitioner. The `[CG]` markers are the owner's review decisions on that draft, not a domain expert's. **No clause here has been confirmed by a person running a Vietnamese business.** Gate 3 (a real practitioner) is deferred under D6; `review-packet-vi.md` in this folder is the packet for that review.

## Inputs

| Input | Path |
|---|---|
| Form, extracted Markdown, the line numbers in every ledger | `Snagon-Agent/Khung-tri-thuc-ban-dia/02_Chief-of-Staff/phieu-da-dien.md`, Phần A lines 52 to 258, B-1 to B-6 lines 261 to 1450 |
| Source index | `Khung-tri-thuc-ban-dia/02_Chief-of-Staff/literature/nguon.md`, viewing date 23/09/2026 for every row |
| Decisions and style | `localization-reports/VN-DECISIONS.md` (D1 to D18), `localization-reports/STYLE-VI.md` |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md`, its references and `scripts/check-localized-routine.mjs` |
| Shared ledgers | `_shared/phan-a-ledger.md` (Phần A, 162 clauses), `_shared/parsed-strings.md`, `_shared/glossary.md`, `_shared/patch-log.md` |
| Routine ledgers | `cos-charter-and-fleet-audit.md`, `cos-market-sweep.md`, `cos-metrics-review.md`, `cos-decision-brief.md`, `cos-decision-review.md`, `cos-fleet-reconcile.md`, `cos-fault-dossier.md` |
| Backup of the variant before the integrator pass | the session scratchpad, `vn/chief-of-staff-vn/chief-of-staff-vn.before-integrator` |

## How it was done

1. **Phần A once.** Every Phần A clause was classified row by row in `_shared/phan-a-ledger.md`. Sources behind an adopted law, number or platform clause were re-opened on 24/09/2026, and the platform terms of Meta, Shopee, TikTok, TikTok Shop and Lazada were read for D13.
2. **One writer per routine.** Each writer extracted its own Phần B, built a clause ledger before editing (ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED), edited only its own `SKILL.md` in English with Vietnamese owner lines, kept Step 0, both guardrails, the run record, idempotency and `## Corrections` byte identical, and routed everything outside its file as an outbound deferral or a shared file patch request.
3. **One integrator.** Deferrals aimed at a routine of this kit were applied where the clause carried `[CG]` or an `[S#]` re-opened on 24/09/2026, and recorded in the target routine's ledger under `### Deferrals received`. Shared file requests were applied in the lead's order and logged in `_shared/patch-log.md`. New contract material went into a new `CONTRACT.md` section 10, "Vietnam operating rules", placed before Appendix A, with every existing section number unchanged.
4. **Checks** as listed below. A checker PASS was not treated as proof: every adopted rule was traced to the file that carries it and the routine that reads it.

## Routines

### cos-charter-and-fleet-audit (B-1)

| Measure | Value |
|---|---|
| Writer decisions | 38 ADOPT, 8 DEFER, 16 UNVERIFIED, 19 patch requests |
| Deferrals received | 8 applied (seed only what the platform terms table permits, the competitor `entity` line, the thirty percent competitor band, `Tết` and sale days, the `- day off:` line shape, six separate business metric rows, no platform screen under `## Live screens`, the form of address), 2 already covered, 1 integrator repair (the version check read the English kit) |
| Main Vietnam changes | Legal entity from the national registration portal, address checked against the 2025 administrative unit lookup, three price levels and `ib` as `n/a (not public)`, superlatives staged, default hours with a lunch break, day off lines only from the member, platform terms gate, fire moved to 08:55 |
| Routine checker | `PASS (0 fail, 0 warn)` |

### cos-market-sweep (B-2)

| Measure | Value |
|---|---|
| Writer decisions | 44 ADOPT, 6 DEFER, 27 UNVERIFIED, 3 patch requests |
| Deferrals received | 1 applied (`market/manual.md`, the hand route, D17), 2 already covered, 1 declined (unmarked) |
| Main Vietnam changes | Platform terms rule with verdicts in `CAPABILITIES.md`, no person's identity in any file, 48 hour price hold with a pending first sighting, sale events, the administrative rename and same name checks, a fourteen day cadence for careers and review surfaces, a cap of eight and the thirty percent band |
| Routine checker | `PASS WITH WARNINGS (0 fail, 1 warn)`. The warning is the new `market/manual.md` row in `### What you read`, inside the shared section "what you own, and the two guardrails". It adds one read and relaxes nothing; the table says "Read nothing that is not on this table", so the read needs its row |

### cos-metrics-review (B-3)

| Measure | Value |
|---|---|
| Writer decisions | 21 ADOPT, 5 DEFER, 12 UNVERIFIED, 6 patch requests |
| Deferrals received | 2 applied in the routine (a rate row's unit and own channel, one source and its export date per Source cell), 2 applied through the audit and `CAPABILITIES.md`, 3 already covered |
| Main Vietnam changes | Business metrics over the Monday to Sunday sales week, sale and `Tết` weeks never compared with ordinary weeks, four money figures in separate rows, gaps shown and never explained, spending account and platform terms screens kept closed, expired connections shown as `n/a` |
| Routine checker | `PASS WITH WARNINGS (0 fail, 9 warn)`. Eight warnings are the fictional amounts and percentages inside the filled page example, which the writer marked fictional; one is 17 Vietnamese glosses outside fences, each a fixed owner gloss after an English token as `STYLE-VI.md` requires |

### cos-decision-brief (B-4)

| Measure | Value |
|---|---|
| Writer decisions | 7 ADOPT, 8 DEFER, 4 UNVERIFIED, 2 patch requests |
| Deferrals received | 2 applied (only a confirmed `giá gạch đổi, giữ từ` line is a price change; business rows quote the sales week and read the new `n/a` reasons), 1 declined (unmarked) |
| Main Vietnam changes | A Vietnam rules check beside the four refusals (superlatives, promotion rules, messaging consent, data), sale weeks never evidence, empty ceilings refuse a spend, `decision_id` from English, a Vietnamese tờ trình |
| Routine checker | `PASS (0 fail, 0 warn)` |

### cos-decision-review (B-5)

| Measure | Value |
|---|---|
| Writer decisions | 10 ADOPT, 8 DEFER, 8 UNVERIFIED, 3 patch requests |
| Deferrals received | 2 applied (`Tết` from `charter/constraints.md` and no month comparison; the sales week and the new `n/a` reasons) |
| Main Vietnam changes | A sale or `Tết` week yields `no-effect (sale or holiday week)`, two deferred lines retire a move, promotion and demotion of priorities on counted evidence, no customer data in any file. The writer also restored a broken sentence that the original carries at its line 576 (repo defect, reported below) |
| Routine checker | `PASS (0 fail, 0 warn)` |

### cos-fleet-reconcile (B-6)

| Measure | Value |
|---|---|
| Writer decisions | 13 ADOPT, 6 DEFER, 11 UNVERIFIED, 5 patch requests |
| Deferrals received | 6 applied (a lunch break suppresses a push, a brief written for a phone, one reminder for a deferral after seven days then a count line, the first working day after a day off carries what the held brief named, a declared day off is not a due date, the same day paste as `README.md` guidance), 2 declined (both conditional on reading an approval tool, which B-6 did not adopt), 5 already covered |
| Main Vietnam changes | A lapsed session named the first morning, a declared day off holds the brief's delivery, Vietnamese lines under English headings with fixed templates, chat and buttons never an outcome, no account number or payment request in the brief |
| Routine checker | `PASS (0 fail, 0 warn)` |

### cos-fault-dossier (no Phần B)

| Measure | Value |
|---|---|
| Writer decisions | A Phần A only pass under D15, after the reviewer's FIX: rule 9 in Step 7 and the `charter/business.md` read row (the `Xưng hô:` line only) ADOPT; every instruction, heading and parsed string KEEP. Full table in `cos-fault-dossier.md` |
| Deferrals received | none |
| Change | Owner prose (the headline sentence after the colon, `What is happening`, `What it has cost`, `What this does not tell you`) is Vietnamese with dd/mm/yyyy dates. Headings, metadata lines, the first record line, citations, `## History` and the correction line stay English with ISO dates. 8 changed lines against the original |
| Routine checker | `PASS (0 fail, 0 warn)` |

## Gate 8: Vietnam operating rules in `CONTRACT.md` section 10.1

Principles adopted in three or more routines, written once in English and without legal numbers. The routines keep their own text.

| Rule in 10.1 | Routines that carry it |
|---|---|
| 1. Platform terms decide what is read | audit, sweep, metrics (and the shared recipe) |
| 2. A sale or holiday week is never compared with an ordinary week | metrics, sweep, brief, review |
| 3. Only `charter/constraints.md` makes a day off | audit, reconcile, metrics, sweep, review |
| 4. No person's identity enters a file | audit, sweep, metrics, review, reconcile |
| 5. A price nobody saw is not a price; flash, livestream and voucher prices are never the listed price | audit, sweep, brief |
| 6. A superlative or an award is a staged string | audit, sweep, metrics, brief |
| 7. Only a tick in the register makes a decision | reconcile, review, brief, audit |
| 8. A figure that bounds money never comes from a message | audit, brief, reconcile |
| 9. The member reads Vietnamese, machines read English | all six localized routines |
| 10. No legal threshold lives in this kit | all six, under D11 |

Section 10 also holds the lines this variant adds to the charter (10.2), decisions and calibration (10.3), the market `entity` line and `market/manual.md` (10.4), and Vietnamese written without diacritics (10.5).

## Shared files changed in the integrator pass

| File | Change |
|---|---|
| `CONTRACT.md` | Audit time in section 1 and 1.4; 2.3 reader row and a pointer to 10.2; 2.6 row for `market/manual.md`; 8.4 version check and upgrade line for this variant; new section 10 |
| `SCHEDULE.md`, `employee.json` | Audit row 08:55, window 08:40 to 17:00; 4.2 arithmetic; section 9 note; manifest version 1.9.0 |
| `CAPABILITIES.md` | 9.1, 9.3, 9.4 audit times; 4b `money.read` Vietnamese routes at `unknown`, marketplace facts, the platform terms table; `web.fetch` registers and pointer; `brief.deliver` private chat note |
| `ROLE.md` | 5.1 default hours with a lunch break, sale days, form of address; section 9 vocabulary |
| `README.md` | Audit time; private chat answers; the new intake questions; install and upgrade note for the variant |
| `INSTALL-PROMPT.md` | FILL THIS IN lines 4 to 10, Phase 3 item 9, the handover names the four ceiling figures |
| `AGENTS.md` | One paragraph: this is the Vietnam variant, where its rules live, never upgrade from npm |
| `recipes/BROWSER-RECIPES.md` | Forbidden platforms never opened; the sales window for a business metric screen |
| `examples/brief-latest.md`, `examples/README.md` | Vietnamese lines under English headings |
| `VERSION`, `CHANGELOG.md` | 1.9.0 and one entry for the localization pass |
| Routines | The deferrals above, in the target routines only |

The full request by request record is `_shared/patch-log.md`: 38 requests, all applied, seven of them relocated into section 10, three merged, one applied in part, one changed so that no routine gains a write.

## Sources re-opened

Every date below is 24/09/2026. The integrator re-opened no source: every rule it applied rests on a source already re-opened by the Phần A pass or a routine writer, or on `[CG]`.

| Pass | Sources |
|---|---|
| Phần A | S1, S6, S9, S11, S13, S22 (partly), S23, S26, S28, S29, S30, S37, S38, S39, S40, S44, S55, S56, S59, S62, S65, S67, S68, S69, S70; TikTok Terms of Service (vi), TikTok Shop Seller Terms (Vietnam), Lazada Điều Khoản Sử Dụng 4.2 |
| `cos-charter-and-fleet-audit` | S41; the national business registration portal; Công văn 4370/BTC-DNTN through secondary sites only |
| `cos-market-sweep` | Google Maps Additional Terms section 2, Google Terms of Service (vi), google.com robots.txt, TopCV employer terms section V, VietnamWorks terms and robots.txt, CareerViet robots.txt, ITviec robots.txt and terms (404), Metric.vn robots.txt and terms (not found), TikTok ad library robots.txt, TikTok Ads robots.txt |
| `cos-metrics-review` | S8, S10 (partly), S12, S19, S33 (partly), S46, S52, S62, S64 |
| `cos-fleet-reconcile` | S19, S52, S60 (rationale only) |
| `cos-decision-brief`, `cos-decision-review`, `cos-fault-dossier` | none new; every adopted legal clause rests on the Phần A re-check |

## Acceptance summary

The form's B11 cases were mapped to routine lines by each writer; the tables are in each ledger under `## Acceptance and traps`.

| Routine | Cases | Result |
|---|---|---|
| audit | 6 cases, 7 traps | Pass except case 3 (a hiring post must not become a priority; clause 325 is unmarked) and unaccented input, which `CONTRACT.md` 10.5 now covers kit wide |
| sweep | 12 cases, 10 traps | Pass. Cases 1, 3 and 4 diverge from the form on purpose: TikTok Shop, the Meta ad library and Google Maps place pages are never opened (D13, D16, D17); a person can use `market/manual.md` |
| metrics | 6 cases, 7 traps | Pass. Case 2 omits the 500.000 đ gap threshold, which is unmarked |
| brief | 6 cases, 7 traps | Pass. Case 4 ("ok em" at 18:02) is the reconcile's and the register tick |
| review | 6 cases, 9 traps | Pass. The unaccented correction gap is now covered by `CONTRACT.md` 10.5 |
| reconcile | 6 cases, 8 traps | Pass. The day off line shape it reads is now written by the audit |
| dossier | no cases | No Phần B; 9 traps pass |

Every writer included the three required traps: an invented number, an invented sent or done status, and an instruction planted in a card, file or page.

## Deferred and unresolved

| Item | What would settle it |
|---|---|
| **Audit fire 08:55, not 09:00.** 288 `[CG]` asked for 09:00, which breaks the browser spacing rule against the Wednesday sweep by five minutes | The lead keeps 08:55, or keeps 09:00 and moves the sweep to 10:05 or later |
| **`STYLE-VI.md` line 10 gloss.** It still shows `chưa đủ 30 mẫu, không tính %`; this kit writes `chưa đủ mẫu, không tính %` because the member can change the floor with `rate_floor: <n>`. The file is shared by every `-vn` kit, so the final verifier did not edit it (brief patch request 5) | The lead edits `STYLE-VI.md` line 10 once for every kit |
| **Form of address.** Applied from the brief's deferral on `STYLE-VI.md` and `CONTRACT.md` 2.0 grounds, not on the form clause, which is unmarked (1024) | The lead confirms or reverts the `Xưng hô:` line |
| **Approval and task tools** (charter 408, 428; review 1171, 1259) | B-6 adopting a read of such a tool, a route in `CAPABILITIES.md` 4b and a file inside `«COS_ROOT»` for its status |
| **Saturday runs, extra sale season passes, same day alerts** | A new `days` value, routine rows and push cases, which a localization pass does not add |
| **Platform verdicts still unknown**: VietnamWorks, CareerViet, ITviec, Metric.vn | A person reads each terms page and records a verdict in the `CAPABILITIES.md` table |
| **Unmarked proposals** kept out of every routine: clock times, reminder timings, the 500.000 đ and 5.000.000 đ thresholds, a five question cap, people priorities | A `[CG]` or a re-opened `[S#]` on each clause |
| **Repo defect in the original**: `employees/chief-of-staff/routines/cos-decision-review/SKILL.md` line 576 is a broken sentence | The maintainer fixes the original; the variant already carries the repaired sentence |
| **Unlisted platform rule** (audit reviewer NOTE). A4.2b reads the member's own surface on a platform the terms table does not name after a same run terms check, the sweep treats that platform as forbidden, and `CONTRACT.md` 10.1 item 1 leaves each routine its own rule; no `[CG]` or verified `[S#]` clause picks one | The lead picks one rule for every routine, or keeps the two |
| **Pre `Tết` sale window** (sweep reviewer NOTE). No clause dates it: 467 `[S23]` names `Tết` without dates, and the 477 `[CG]` window of ten days before `Tết` belongs to the extra passes that were rejected, so only the member's `Ngày sale shop tham gia:` line marks it | A `[CG]` or a re-opened `[S#]` that dates the window |
| **Two login walls end the repeating push** (sweep reviewer NOTE). 555 `[CG]` retires a surface after two unopenable runs, login walls included, so the repeated `blocked-login` behind `CONTRACT.md` 9.1 case 1 stops after the second week; no clause exempts a wall | A `[CG]` that keeps a walled surface on the list, or the lead accepts the shorter push window |
| **`Tết` gloss** (metrics reviewer NOTE 10). A3 99 `[CG]` fixes `tuần sale, không so với tuần thường` as the flagged week line and `cos-decision-review` parses it, so a `Tết` wording is a parsed string change in three routines | A new `[CG]` for the wording and one matched change in metrics, brief and review |
| **Order of `Needs you` lines past three** (metrics reviewer NOTE 11). The three line cap and "Never trim `Needs you`" are both inherited from the original Step 8, and no form clause orders the overflow | A form clause, or an upstream fix by the maintainer |
| **Shopee and the hand route** (found in the follow-up pass). `CONTRACT.md` 10.4 and the sweep's retirement line invite a person to open any forbidden platform by hand, but Shopee's terms also forbid manual tracking and copying without written consent (S69 3.1, D16, sweep row 591 `[S69]`); only the new `market/manual.md` header says so | The lead adds the exception to 10.4 and to the retirement line, or confirms the header is enough |

## Legal threshold candidates kept out of the kit (decision D11)

None of these figures is in a kit file. They are listed so one dated, shared Vietnam rules file can be decided once across the kits.

| Candidate | Source | Where a routine applies it in words |
|---|---|---|
| Promotion discount cap on the price just before a promotion, and its exceptions | S26, Thông tư 39/2025/TT-BCT | Brief Vietnam rules check; the sweep never says a competitor broke a promotion rule. The sweep's flag `cần người kiểm tra ngoại lệ khuyến mại` waits for this file |
| Superlatives need a market survey or award document, named with number and date, and the date the rule took effect | S28, S29, Thông tư 12/2026/TT-BVHTTDL | Staged superlatives in the audit, sweep, metrics and brief |
| Promotional messages, emails and calls only with prior consent; permitted hours and daily counts | S57, Nghị định 91/2020/NĐ-CP | Brief Vietnam rules check |
| Employer notice period for the chosen `Tết` option | S1 | Only the member's declared days off count |
| 24/11 as a paid day off from 01/07/2026 | S6 | Only the member's declared days off count |
| Personal data law in force and its decree | S67, S30 | No person's identity in any file |
| Normal working hours per day and per week | S41, Bộ luật Lao động 2019 Article 105 | Default hours are an owner approved default, never a legal claim |
| Seller type and deduction scope | S17, Nghị định 117/2025 (not re-opened) | The metrics review never explains a gap |

The TikTok Shop return window in `CAPABILITIES.md` 4b is a platform fact from a vendor blog with its date, not a legal threshold, and the routine body carries no figure for it.

## Known gaps

- **`cos-fault-dossier` has no Phần B.** Under D15 it had a Phần A only pass: its owner prose is Vietnamese and its instructions are the original's. No Vietnamese business clause stands behind it.
- **`copy-check.mjs` does not recognise Vietnamese counts or money** (D6). The scripts stay byte identical, so the control is each routine's own rule that a count carries its path.
- **No Gate 3 review** by a real Vietnamese practitioner, and **no Gate 7 class B run** of the agents on fictional data (D6).
- **The root `CHANGELOG.md` has no link** to `employees/chief-of-staff-vn/CHANGELOG.md`, and `installer/cli.mjs list` does not yet show `chief-of-staff-vn`. Both are the lead's wiring step; the kit checker fails `root-changelog` until then.
- **`employee.json` `repository`** still points at the upstream project, as in the GTM variant. The fork owner decides where Vietnamese field reports go.
- **Unaccented Vietnamese input** is covered by one contract rule (10.5), not by a routine line; routines read `CONTRACT.md` first on every run.
- **People priorities** (audit case 3) have no routine line.

## Cross kit notes

- The promotion cap flag and every row in the D11 table above belong to a shared, dated Vietnam rules file if the lead creates one across kits.
- The platform terms verdicts in `CAPABILITIES.md` 4b (Meta, Shopee, TikTok, TikTok Shop, Lazada, Google Maps place pages, TopCV) were read on 24/09/2026 and apply equally to any other `-vn` kit that reads those platforms.
- The version check repair (read the variant's own folder, upgrade through the fork's installer) repeats GTM 1.11.0 defect 11 and is likely needed in every other `-vn` kit whose routines check a published `VERSION`.
- No outbound deferral from this kit's writers aims at another kit.

## Maintainer notes

- The original kit's `employees/chief-of-staff/routines/cos-decision-review/SKILL.md` line 576 is a broken sentence, "It publishes only where you released the channel a calibration figure on fewer than five closed decisions.", and the maintainer should fix it upstream. The variant carries the repair at its line 629: "It never publishes a calibration figure on fewer than five closed decisions."

## Review

Every routine went to an independent reviewer on 24/09/2026. All seven came back FIX, a fixer applied the findings to the routine and its ledger only, and no routine needed a second review. No BLOCK was raised. The fixers filed 16 shared file requests; the final verifier settled them all (`_shared/patch-log.md`, `## Final verifier pass, 24/09/2026`).

| Routine | Verdict | Fixed | Left open or passed to the lead |
|---|---|---|---|
| `cos-charter-and-fleet-audit` | FIX | 9 of 9 FIX findings | Three NOTE items for the lead: a platform the terms table does not name; 08:55 against the 09:00 in form line 288; the `- day off:` source wording in `CONTRACT.md` 10.2 |
| `cos-market-sweep` | FIX | 14 FIX and 2 NOTE | The two NOTE items are recorded under Rejected and unresolved: the sale season before `Tết`, and two login walls ending the repeated push. The `CONTRACT.md` and parsed strings parts of findings 1 and 11 were applied by the verifier |
| `cos-metrics-review` | FIX | 9 (8 FIX and NOTE 9) | NOTE 10 (the `Tết` gloss read as the page's own flag, a three routine change) and NOTE 11 (the order of `Needs you` lines past three) are the lead's |
| `cos-decision-brief` | FIX | 12 FIX and 3 NOTE | Brief request 5 (`STYLE-VI.md` line 10) declined by the verifier and left to the lead. Its outbound deferral to the sweep was already in place |
| `cos-decision-review` | FIX | 7 (finding 1 applied in part, with its reason) | NOTE 6: the broken sentence in the original kit's line 576 is for the maintainer; the variant carries the repair |
| `cos-fleet-reconcile` | FIX | 10 FIX and 2 NOTE | none. Its request to change `examples/brief-latest.md` was applied by the verifier, and the `lỗi đang mở` lines it saw in `cos-metrics-review` were aligned (below) |
| `cos-fault-dossier` | FIX | 5 FIX and 2 NOTE | none. Requests 1 to 7 were applied by the verifier; request 2 with a correction (below) |

**Shared file requests settled by the final verifier.** 14 applied, 1 already present, 1 declined:

- `CONTRACT.md`: `cos-fault-dossier` (the `Xưng hô:` line only) added to the `charter/business.md` readers in 2.3 and in the 2.8 data flow; the `market/manual.md` reader cell in 2.6 and the hand route paragraph in 10.4 now copy the lines seen on the run day or in the six days before, skipping one the previous week's page already carries.
- `examples/dossiers/dossier-seo-employee--seo-publish-run--silent-stop.md`: owner prose in Vietnamese, offsets `+07:00`. **Corrected against the request:** every citation stays English (`seo-employee runlog.jsonl line 402`, `lines 380 to 402`), as rule 9 of Step 7 requires and as `examples/brief-latest.md` writes it, and the count of missed runs (`chín lần`) is kept, because Step 5 asks for it. `copy-check.mjs --dest plain`: PASS.
- `examples/brief-latest.md`: `ngừng chạy`, `lỗi chưa xử lý`, `chờ anh/chị chốt`, `lỗi chưa xử lý từ`. `copy-check.mjs --dest plain`: PASS.
- `examples/README.md` dossier row; the variant `CHANGELOG.md` sentence on `cos-fault-dossier`.
- `_shared/glossary.md`: `hồ sơ lỗi`; the tờ trình first line `Tờ trình tuần dd/mm đến dd/mm/yyyy.`; the four calibration count labels. `_shared/parsed-strings.md`: the dossier row and `có người xem trực tiếp ngày dd/mm/yyyy`. `_shared/phan-a-ledger.md`: the dossier map row and the A7 251 marker cell.
- Already present: `giá đang bán đổi, giữ từ` in `cos-market-sweep` Step 4. Declined: `STYLE-VI.md` line 10, shared by every `-vn` kit.

**Consistency edits by the final verifier.** Wording only, where one concept had two Vietnamese forms against the glossary or a reviewer's fixed term:

| File and line | Before | After | Why |
|---|---|---|---|
| `routines/cos-metrics-review/SKILL.md` 509, 528 | `lỗi đang mở` | `lỗi chưa xử lý` | The reconcile's reviewer fixed this calque in the brief and flagged these two lines for the lead |
| `routines/cos-fault-dossier/SKILL.md` 431 | `mở từ 24/02/2026` ... `mở 9 ngày` | `lỗi chưa xử lý từ 24/02/2026` ... `lỗi chưa xử lý 9 ngày` | Same term as the brief's `Blocked` line |
| `routines/cos-charter-and-fleet-audit/SKILL.md` 438, 444 | `hồ sơ`, `file hồ sơ` | `hồ sơ doanh nghiệp` | Glossary term for the charter; bare `hồ sơ` could be read as the `hồ sơ lỗi` |

Checked and consistent with no edit: `chờ anh/chị chốt`, `tuần sale, không so với tuần thường`, `đọc trong ngày sale, không so với tuần thường`, `chưa đủ mẫu`, `hạn mức chi`, `tạm suy ra`, `đội nhân viên AI`, `trang số tuần`, `bản tin đối thủ`, `Tờ trình tuần dd/mm đến dd/mm/yyyy`; no `sếp`, `tôi` or `bạn` in owner text. Noted, not changed: the brief counts routines as `21 routine` while the metrics page says `việc định kỳ`. The glossary has no row for "routine", so neither form is plainly wrong; the lead may add one. Settled in the follow-up pass below: the glossary row reads `việc định kỳ`, and the brief and `examples/brief-latest.md` now use it.

## Checks

Final run 24/09/2026 from `/Users/phantanphat210593/Snagon-Agent-cos-vn`, after the final verifier pass.

| Check | Result |
|---|---|
| Kit checker, `check-localized-routine.mjs kit` with this report | `FAIL (1 fail, 10 warn)`. The one fail is `root-changelog`: the repository root `CHANGELOG.md` has no link to `employees/chief-of-staff-vn/CHANGELOG.md`. That link is part of the lead's wiring step, and no pass on this kit may make it. The ten warnings are the ones the routine checker reports below: the `market/manual.md` read row in the sweep's shared section, and in the metrics review the fictional amounts and percents of the filled example page plus the Vietnamese glosses outside fences |
| Routine checker, seven routines | audit, brief, review, reconcile, dossier `PASS (0 fail, 0 warn)`; sweep `PASS WITH WARNINGS (0 fail, 1 warn)`; metrics `PASS WITH WARNINGS (0 fail, 9 warn)` |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)` |
| `copy-check.mjs --dest plain` on `examples/brief-latest.md` and the example dossier | `copy-check: PASS` on both |
| Dash scan over this report folder and the whole variant | `no dashes` over 49 files (13 report files, all 36 files of the variant) |
| Original kit unchanged | `git status --porcelain -- employees/chief-of-staff` prints nothing |
| Unresolved BLOCK | none |

**Verdict: not ready to ship until the lead wires the kit.** Every check passes except the kit checker's `root-changelog`, which only the lead's wiring step clears.

## Follow-up fixes, 24/09/2026

A follow-up fixer applied the lead's four tasks. Nothing was committed, pushed or published, and the original kit has no changes.

| Task | Files | Result |
|---|---|---|
| D22, `market/manual.md` | `CONTRACT.md` 2.6, 2.8, 10.4; `INSTALL-PROMPT.md` Phase 0 item 7; `routines/cos-market-sweep/SKILL.md` Step 6 and one degrade row; `CHANGELOG.md` | The member or the person on duty writes the file; the install seeds it once with a seven line Vietnamese header and no observation line; the sweep only reads it and writes `Không có quan sát tay tuần này.` where it is absent or holds no line seen in the seven days. Recorded in `cos-market-sweep.md`, Files and checks. The `seen` date stays ISO and the link stays required, because the line shape is a parsed string and Step 6 rule 1 drops an observation with no URL; the header shows the dd/mm/yyyy reading beside the ISO example. It also bars a competitor's Shopee page (sweep row 591 `[S69]`) |
| Glossary row for "routine" | `_shared/glossary.md`; `routines/cos-fleet-reconcile/SKILL.md` 669 and 678; `examples/brief-latest.md` line 4 | `việc định kỳ` in every owner facing count; the metrics page already used it |
| Reviewer NOTE items passed to the lead | `CONTRACT.md` 10.2 | Applied: the `- day off:` source wording, so a day off comes only from the member, on the verified `[S1]` rows cited in `cos-charter-and-fleet-audit.md`. The other five are under Deferred and unresolved, each with its reason |
| Maintainer note | this report | The broken sentence in the original's `cos-decision-review` line 576, under Maintainer notes |

Removed from Deferred and unresolved: the row on who creates `market/manual.md`, settled by D22. Every shared file change is also listed in `_shared/patch-log.md`, `## Follow-up fixer pass, 24/09/2026`.

Checks after the follow-up, from `/Users/phantanphat210593/Snagon-Agent-cos-vn`:

| Check | Result |
|---|---|
| Kit checker with this report | `FAIL (1 fail, 10 warn)`, the same as before: the one fail is `root-changelog`, the lead's wiring step, and the ten warnings are unchanged |
| Routine checker, the two edited routines | sweep `PASS WITH WARNINGS (0 fail, 1 warn)`, the same `market/manual.md` read row; reconcile `PASS (0 fail, 0 warn)` |
| `node .github/scripts/selftests.mjs` | `selftests: FAIL (1)`. The one fail is another kit written in parallel: `social-media-employee-vn: VERSION 1.9.0 has no CHANGELOG heading`. All three `chief-of-staff-vn` scripts report `ok` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `copy-check.mjs --dest plain` | `copy-check: PASS` on `examples/brief-latest.md`, the reconcile brief example, the `market/manual.md` header as the install writes it, and a fictional market page holding only the new fixed line |
| Dash scan | 0 dashes in the 12 changed files, and 0 across the 49 files of the variant and this report folder |
| Original kit unchanged | `git status --porcelain -- employees/chief-of-staff` prints nothing |

## How to install this variant

The public npm package does not contain `chief-of-staff-vn`, and `npx ai-employees hire chief-of-staff` installs the English kit. Once the lead wires the variant into the fork's bundled installer, install from a checkout of the Vietnam fork:

```
git clone https://github.com/phantanphatdgteam-gif/ai-employees-VN.git
cd ai-employees-VN
git checkout feature/vn-localization
node installer/cli.mjs hire chief-of-staff-vn --to ~/ai-employees/chief-of-staff-vn
```

The branch must contain the variant, so it has to be committed and pushed first. A later upgrade uses the same checkout: `node installer/cli.mjs upgrade chief-of-staff-vn --to <folder>`, then `--apply`. Never run `npx ai-employees upgrade chief-of-staff` on this folder.
