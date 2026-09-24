# Customer Satisfaction Employee Vietnam localization

## Status

`employees/customer-satisfaction-employee-vn` is at **1.9.0**, one minor step above the original `employees/customer-satisfaction-employee` at 1.8.0 (decision D14). This is the first evidence bounded pass: all eight routines were localized from their own form section, and an integrator pass then applied the cross routine deferrals, the shared file patch requests, and the Gate 8 rules. An independent review of each routine and a fixer pass followed, and a final verifier pass on 24/09/2026 applied the patch requests those fixers left pending, made the member facing wording consistent, and ran every check (sections "Review" and "Checks"). Nothing was committed, pushed or published. The original kit has no changes.

**This is an AI prepared draft.** Form section A1 (lines 56 to 62) names the filler as an AI sub agent playing the customer care role, a research draft dated 23/09/2026, with no years of practice, no real business, and no account operated by hand, and it asks for review by a real practitioner. **The form was filled by an AI.** The `[CG]` markers are the owner's review decisions on that draft, not a domain expert's. **No clause here has been confirmed by a Vietnamese practitioner running customer care.** Gate 3 (a real practitioner) is deferred under D6; `review-packet-vi.md` in this folder is the packet for that review.

## Inputs

| Input | Path |
|---|---|
| Form, extracted Markdown, the line numbers in every ledger | `Snagon-Agent/Khung-tri-thuc-ban-dia/05_CSKH/phieu-da-dien.md`, Phần A lines 52 to 270, B-1 to B-8 lines 273 to 2330 |
| Source index | `Khung-tri-thuc-ban-dia/05_CSKH/literature/nguon.md`, viewing date 23/09/2026 for every row |
| Decisions and style | `localization-reports/VN-DECISIONS.md` (D1 to D23), `localization-reports/STYLE-VI.md` |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md`, its references and `scripts/check-localized-routine.mjs` |
| Shared ledgers | `_shared/phan-a-ledger.md` (Phần A, 159 decisions), `_shared/parsed-strings.md`, `_shared/glossary.md`, `_shared/patch-log.md` |
| Routine ledgers | `csat-desk-intake.md`, `csat-inbox-sweep.md`, `csat-reply-desk.md`, `csat-churn-watch.md`, `csat-deflection-desk.md`, `csat-taxonomy-refresh.md`, `csat-satisfaction-report.md`, `csat-desk-standup.md` |
| Backup of the variant and the ledgers before the integrator pass | the session scratchpad, `vn/customer-satisfaction-employee-vn/customer-satisfaction-employee-vn.before-integrator` and `reports.before-integrator` |
| Backup before the final verifier pass | the session scratchpad, `vn/customer-satisfaction-employee-vn/verifier/variant.before-verifier` and `reports.before-verifier` |

## How it was done

1. **Phần A once.** Every Phần A clause was classified row by row in `_shared/phan-a-ledger.md`. Sources behind an adopted law, number or platform clause were re-opened on 24/09/2026, and the terms of Shopee, Meta, TikTok Shop, Lazada, Zalo and Google Maps were read for D13.
2. **One writer per routine.** Each writer extracted its own Phần B, built a clause ledger before editing (ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED), edited only its own `SKILL.md` in English with Vietnamese owner lines, kept Step 0, both guardrails, the run record, idempotency and `## Corrections` byte identical, and routed everything outside its file as an outbound deferral or a shared file patch request.
3. **One integrator.** 78 deferrals aimed at a routine of this kit were settled (41 applied, 14 declined, 23 already covered, retargeted, or asking for no change): applied where the clause carried `[CG]` or an `[S#]` re-opened on 24/09/2026, and recorded in the target routine's ledger under `### Deferrals received (integrator pass, 24/09/2026)`. The integrator re-opened two sources to settle deferrals that needed them (S1, S56). 37 shared file requests were applied in the lead's order and logged in `_shared/patch-log.md`. New contract material went into a new `CONTRACT.md` section 10, "Vietnam operating rules", placed before Appendix A, with every existing section number unchanged.
4. **Checks** as listed below. A checker PASS was not treated as proof: every adopted rule was traced to the file that carries it and the routine that reads it, and two contradictions between writers were found that way (the platform deadline field name, and the Facebook browser route).
5. **Review, fixers, final verifier.** One independent reviewer per routine, then one fixer per routine that applied the findings to its own routine and ledger and logged every shared file change it needed as "pending, after review". The final verifier, the last and only writer, applied those fourteen rows (`_shared/patch-log.md`, "Final verifier pass"), checked the Vietnamese the member reads against `_shared/glossary.md` and `STYLE-VI.md` across all eight routines and `CONTRACT.md`, and ran the checks.

## Routines

Decision counts are the writers' own tallies where the ledger carries one, and a machine tally of the Clause decisions table otherwise. "Deferrals received" counts the integrator's rows in that ledger.

### csat-desk-intake (B-1)

| Measure | Value |
|---|---|
| Writer decisions | 48 ADOPT, 43 KEEP, 38 UNVERIFIED, 18 WORDING, 14 REJECT, 6 EXAMPLE, 5 MOVE, 4 DEFER (176 rows); 4 patch requests |
| Deferrals received | 32: 19 applied (2 in part, 2 retargeted here from other routines), 6 already covered, 7 declined (5 unmarked, 1 contradicting the original theme rule, 1 an unmarked clause of a marked line) |
| Main Vietnam changes | Reads marketplaces, pages and chat accounts only on the member's own side under their terms; one refund block per source; the response target kept apart from platform windows and the legal acknowledgement deadline; `tạm` fallbacks; six new severity rules (`safety-or-defect`, `fake-refund-scam`, `platform-deadline`, `authority-named`, `cod-refused`, `pre-sale`); addresses in the current units; form of address and per channel lines in `## Samples`; export folders; voucher ceilings and the deposit rule per role |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-inbox-sweep (B-2)

| Measure | Value |
|---|---|
| Writer decisions | 34 ADOPT, 64 KEEP, 24 UNVERIFIED, 15 DEFER, 15 REJECT, 9 WORDING, 6 EXAMPLE, 3 MOVE; 5 patch requests and one schedule deferral |
| Deferrals received | 15: 6 applied (1 retargeted here from the standup), 6 already covered (one also gaining a carry forward sentence), 1 retargeted to the intake, 2 declined (unmarked) |
| Main Vietnam changes | Marketplace chat and return requests read first every run, nearest platform deadline first; the Vietnamese surfaces mapped onto the five channel values; `event_at`, `platform_deadline_at`, `first_reply_at`, `input_kinds`; `order_ref` copied exactly; NFC with diacritics kept, folded comparison for matching; Vietnamese redaction shapes; export folders for forbidden platforms; a chat surface stays "seen on open" until tested by hand |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-reply-desk (B-3)

| Measure | Value |
|---|---|
| Writer decisions | 39 ADOPT, 49 KEEP, 16 UNVERIFIED, 13 WORDING, 8 DEFER, 4 EXAMPLE, 4 REJECT (133 rows); 4 patch requests |
| Deferrals received | 11: 7 applied (1 in part), 3 already covered (one also gaining a paragraph on marketplace blocks), 1 no change asked |
| Main Vietnam changes | The Vietnam rules beside the rules that do not bend (no off platform contact, the refund scam, money sentences as commitments, no denial for goods not as announced, nothing for a rating, no promotion, current address units, invoices never touched, public means no personal data, platform terms before any page, data requests are the member's); `Dạ`, `em`, `anh/chị`; remedies mapped onto the closed list and back the way the money came; role ceilings and card `owner`; one remedy per order; only `## The reply` from a macro |
| Routine checker | `PASS WITH WARNINGS (0 fail, 4 warn)`. Three warnings are the fictional `120.000 đ` in the remedy block, the card title and the private draft example, each tied to the ticket line it names; one is the "what you own" shared section, whose writes list gains the invoice correction card (writer) and the data request card (integrator, from the `[S56]` deferral). Both add a card to a file the routine already appends to and relax nothing |

### csat-churn-watch (B-4)

| Measure | Value |
|---|---|
| Writer decisions | 26 ADOPT, 38 KEEP, 36 UNVERIFIED, 19 WORDING, 12 REJECT, 3 DEFER, 2 MOVE, 1 EXAMPLE (137); 4 patch requests |
| Deferrals received | 2: 1 already covered, 1 declined (unmarked) |
| Main Vietnam changes | Leaving phrases read with and without diacritics from a member confirmed list; one customer joined across slugs only by the same order code (`joined_slugs`); saves that are never suggested (a reward for a rating, anything off a marketplace, an unset deposit, a broadcast); a promotion labelled as one and never sent to a customer who asked to stop; TikTok Shop data used only for that order |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-deflection-desk (B-5)

| Measure | Value |
|---|---|
| Writer decisions | 25 ADOPT, 24 KEEP, 16 UNVERIFIED, 8 EXAMPLE, 6 WORDING, 3 MOVE, 3 DEFER, 2 REJECT (machine tally); 5 patch requests |
| Deferrals received | 3: 2 applied (1 beside a covered part), 1 already covered |
| Main Vietnam changes | Recurrence counts conversations, 8 in 7 days by default and a low volume default; a `## Bot version` that says it is automated and never stands in for a person's marketplace reply; no bot version for money or safety themes; windows never shorter than the customer's right and one labelled version per channel group; help surfaces checked from pasted text; a platform window never published as the shop's promise |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-taxonomy-refresh (B-6)

| Measure | Value |
|---|---|
| Writer decisions | 12 ADOPT, 61 KEEP, 21 UNVERIFIED, 17 REJECT, 13 DEFER, 9 WORDING, 5 EXAMPLE (138); 3 patch requests |
| Deferrals received | 3: 1 applied, 2 declined (one contradicting this routine's own `[CG]`, one unmarked) |
| Main Vietnam changes | Five mismatches before a rule is rewritten; an unclassified share and a dominant share that order the tests and never decide them; ASCII ids with Vietnamese names; folded phrases, both spellings in `matches:`; a platform refund after the deadline read as `critical` evidence; deadline rules name the deadline; a boundary trigger for one phrase graded two ways |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-satisfaction-report (B-7)

| Measure | Value |
|---|---|
| Writer decisions | 15 ADOPT, 21 KEEP, 21 UNVERIFIED, 5 WORDING, 3 EXAMPLE, 2 MOVE, 2 REJECT (machine tally); 6 patch requests |
| Deferrals received | 6: 4 applied (1 in part), 2 declined (1 conditional, 1 unmarked) |
| Main Vietnam changes | Marketplace figures only as the member typed them into `report/manual.md`, never recomputed; sale windows from the member's own records, `n/a (sale window)`; no satisfaction score or promoter figure; a Vietnamese page with English cell tokens and fixed glosses; split transition rows; the member's intake audit and retraction counts as typed |
| Routine checker | `PASS (0 fail, 0 warn)` |

### csat-desk-standup (B-8)

| Measure | Value |
|---|---|
| Writer decisions | 21 ADOPT, 23 KEEP, 22 UNVERIFIED, 10 DEFER, 8 WORDING, 5 REJECT, 3 EXAMPLE, 1 MOVE (93); 5 patch requests |
| Deferrals received | 6: 2 applied, 2 already covered (one with the field name repair), 1 retargeted to the sweep, 1 no change asked |
| Main Vietnam changes | Every day open and six requests a day by default; platform reply windows and return deadlines listed before they end, straight through nights and holidays; the legal acknowledgement date counted in working days; in shift first response in minutes, never a rate; a `Tết` day brief; the week before `Tết` line on vacation mode; a shift lead's cards named and not counted |
| Routine checker | `PASS (0 fail, 0 warn)` |

## Gate 8: Vietnam operating rules in `CONTRACT.md` section 10.1

Principles adopted in three or more routines, written once in English and without legal numbers. The routines keep their own text.

| Rule in 10.1 | Routines that carry it |
|---|---|
| 1. Platform terms decide what is read | intake, sweep, reply desk, churn watch, deflection desk, taxonomy refresh, report |
| 2. No legal or platform number lives in a routine | intake, sweep, reply desk, deflection desk, taxonomy refresh, standup |
| 3. The platform's clock is not the shop's clock | intake, sweep, standup, deflection desk, reply desk |
| 4. Nothing leads a marketplace customer off the marketplace | intake, reply desk, deflection desk, churn watch |
| 5. The shop never asks for what a scammer asks for | intake, sweep, reply desk, deflection desk, churn watch |
| 6. A sentence with money in it is a commitment; money is named, never made | intake, reply desk, deflection desk, churn watch |
| 7. Nothing traded for a rating, nothing promoted without consent | reply desk, deflection desk, churn watch |
| 8. Only the member's own records make a day special | intake, standup, report, taxonomy refresh |
| 9. Personal data stays inside the folder and never goes public | sweep, reply desk, taxonomy refresh, intake |
| 10. Vietnamese is read by meaning, with or without diacritics | sweep, reply desk, deflection desk, taxonomy refresh, churn watch |
| 11. An address uses the administrative units in force | intake, reply desk, deflection desk |
| 12. The member reads Vietnamese, machines read English | all eight |

Section 10 also holds the lines this variant adds under the strategy headings with the `tạm` fallbacks and the legal sources the intake transcribes from (10.2), the four ticket fields and why platform times are not clocks (10.3), the card `owner`, the invoice correction, the order code join and the `## Bot version` (10.4), and the automated assistant sentence on a released send (10.5). The one principle carried by fewer than three routines, that an automated system says it is automated, sits in 10.5 as a shared file request rather than in 10.1.

## Shared files changed in the integrator pass

| File | Change |
|---|---|
| `CONTRACT.md` | 2.3, 2.8, 2.9 reader rows; pointers from 2.3, 2.4, 2.5, 2.6, 2.7 and the Releases paragraph to section 10; the `exports/` row in 2.5 and 2.9; the `brief-latest.md` template; the proof inventory sentence; 8.4 version check and upgrade line for this variant; new section 10 |
| `SCHEDULE.md`, `employee.json` | 1.2 report sentence; section 9 note on weekend cover; manifest version 1.9.0. No row moved |
| `CAPABILITIES.md` | 4b rows `billing.read`, `reviews.read`, `helpcentre.read`, and new `replytool.saved`, `marketplace.read`, `calls.read` at `unknown`; three Vietnam paragraphs; new section 4c, the platform terms table; section 7 rows for the sweep, the deflection desk and the taxonomy refresh |
| `ROLE.md` | 6.1 optional Vietnamese lines; 6.2 working days fallback and one row for grants, vouchers, the deposit rule and the `cod-refused` value |
| `README.md` | What this variant is; the intake questions it adds; install and upgrade from the fork; the stale v1.2.0 now v1.9.0 |
| `INSTALL-PROMPT.md` | Phase 1 item 7 on platform terms; Phase 3 asks for every profile field a routine reads |
| `AGENTS.md` | One paragraph: this is the Vietnam variant, where its rules live, never upgrade from npm |
| `examples/queue/2026-03-05-reply.md`, `examples/README.md` | Vietnamese header lines; a note that the rest is the English fictional example |
| `VERSION`, `CHANGELOG.md` | 1.9.0 and one entry for the localization pass |
| Routines | The deferrals in the eight ledgers, in the target routines only, plus the standup's reads renamed to `platform_deadline_at` |

## Sources re-opened

Every date below is 24/09/2026.

| Pass | Sources |
|---|---|
| Phần A | S3, S4, S7, S8, S9, S11 (partly), S13, S19, S21, S22, S23, S43, S45, S48, S52, S53, S55, S59, S61, S62, S68; S60 could not be confirmed. Platform terms: Shopee 3.1, Meta, TikTok Shop seller terms, Lazada 4.2, Zalo 4.7, Google Maps |
| `csat-desk-intake` | S3 (Điều 32, 33), S54 |
| `csat-inbox-sweep` | S48 (partly: map listings only) |
| `csat-reply-desk` | S41 (partly), Meta's own messaging policy page in place of S16, S50 |
| `csat-churn-watch` | S50, S51, S46 (partly: deposit advice) |
| `csat-deflection-desk` | S22 (holiday mode clause) |
| `csat-satisfaction-report` | S46 (sale seasons, 11.11 only), S41, S24 |
| `csat-desk-standup` | S18 (definition only) |
| `csat-taxonomy-refresh` | none new |
| Integrator | **S1** at moit.gov.vn (page dated 15/08/2025): from 01/07/2025 the National Competition Commission stopped receiving consumer negotiation requests, which go to the provincial Department of Industry and Trade or a consumer protection association. **S56**: the index URL at Thư viện Pháp luật returned 403; the same Nghị định 356/2025/NĐ-CP Điều 5 deadlines were confirmed on LuatVietnam's article on the decree (page dated 01/01/2026). Neither figure enters the kit |

Not re-opened, index viewing date 23/09/2026, claims not widened: S2, S5, S6, S10, S12, S14, S15, S16, S17, S20 (replaced by S52), S25, S26, S27, S33 to S40 and every other vendor page behind a MOVE, S44, S47 (replaced by S61, S62), S49, S57, S64 to S67.

## Acceptance summary

The form's B11 cases were mapped to routine lines by each writer; the tables are in each ledger under `## Acceptance and traps`. Every writer included the three required traps: an invented number, an invented sent or done status, and an instruction planted in a ticket, card, file or page.

| Routine | Rows | Result |
|---|---|---|
| intake | 21 | Pass except case 6: a channel silent for 45 days may pass "a few months"; the 30 day rule is unmarked |
| sweep | 22 | Pass for capture. Gaps: same evening capture (one fire per weekday), the missed call's call back deadline (now offered by the intake as a candidate target), the aggregator lag where section 4c forbids the native app |
| reply desk | 20 | Pass. Gap: two people drafting two amounts outside this routine's surface; one order now gets one remedy block (integrator) |
| churn watch | 19 | Pass on the traps. Partial gaps on cases 1, 2 and 4, where the form's thresholds are unmarked and the shipped wires do not flag |
| deflection desk | 19 | Pass on the traps. Gaps: the bot's opening time is not written (no clock time), a changed pin is corrected on the weekly run, and no routine controls the member's bot |
| taxonomy refresh | 20 | Pass for the taxonomy. Cases 3, 6 and 7 are sweep grading decisions, unmarked; case 9's same day reaction is not in the closed schedule vocabulary |
| report | 15 | Pass. Gap: a sale week the member never recorded is compared as usual |
| standup | 12 | Pass. Gap: Sunday, no run (weekend rows stay `mon-fri`, `SCHEDULE.md` section 9); a phone number inside a card title another routine wrote |

## Deferred and unresolved

| Item | What would settle it |
|---|---|
| **Weekend cover.** A marketplace counts weekend and holiday chat; the sweep, standup and reply desk stay `mon-fri` (Option A in `SCHEDULE.md` section 9) | The lead or the member writes `mon-fri sat`; Sunday needs `sun` in the closed vocabulary and the checker |
| **`platform_deadline` against `platform_deadline_at`.** The two writers named the field differently; the integrator kept the writer's name and renamed the standup's three reads | The lead confirms |
| **No browser route on any section 4c platform.** The final verifier applied the sweep fixer's P7 (lead decision): Shopee and Google Maps are read only through a connector the member authorised or `exports/`, as `CONTRACT.md` 10.1 rule 1 and D17 already said, and D23 no longer needs to be squared with a browser route. The intake, taxonomy refresh, churn watch and report open a browser on those platforms only where a 4c row permits it, so none does | The lead confirms the stricter reading; the alternative in the sweep ledger's P7 note would restore a dated, member confirmed browser route and needs the same exception in 10.1 rule 1 and the routines |
| **Unaccented `unclassified` share.** The intake's 309 `[CG]` (20 percent over 14 days) contradicts the taxonomy's 1717 `[CG]` (10 percent over the month); the taxonomy value was kept | The owner picks one |
| **Owner's macro range** (1431 `[CG]`, 15 to 40 macros after three months) and the share of entries using a macro | A member file that records the range, and a wider queue read for the report in `CONTRACT.md` 2.6 |
| **Badge thresholds** (2320) | The intake recording them with source and date, and a decision that the report may compute a marketplace rate |
| **Candidate response targets beyond the two `[CG]` ones** (599: marketplace 2 hours, one star comment 30 minutes, email one working day) | A `[CG]` on the list itself |
| **Unmarked proposals** kept out of every routine: banned word lists, emoji limits, leaving phrases, COD refusal wires, fake praise theme, two issue grading, saved and lost signals, venue and B2B hours | A `[CG]` or a re-opened `[S#]` on each clause |
| **S20, S16, S15, S49, vendor pages** not re-opened | Re-opening before any claim rests on them |
| **Lazada's return window** (A5-39) unverified; the off platform rule rests on a vendor blog (S21) | Lazada's own return terms and Shopee's own off platform policy page |

## Legal threshold candidates kept out of the kit (decision D11)

None of these figures is in a kit file. They are listed so one dated, shared Vietnam rules file can be decided once across the kits.

| Candidate | Source | Where a routine applies it in words |
|---|---|---|
| Acknowledge every consumer complaint within a set number of working days, and publish the complaint handling process | S3, S4, Luật 19/2023/QH15 Điều 31 | `csat-desk-standup` 5e item 3 from the line the intake records; `csat-reply-desk` 2b key 2 |
| Compensate, refund or exchange goods not as announced or committed | S3, S54, Luật 19/2023/QH15 Điều 10 khoản 1 điểm e | Intake flag under a no refund policy; reply desk money sentences |
| Recall and report defective goods by group | S3, Luật 19/2023/QH15 Điều 32, 33 | `safety-or-defect` rule reason |
| Deadlines for a data subject's request to withdraw, view, correct, provide or delete personal data | S56, Nghị định 356/2025/NĐ-CP Điều 5 (confirmed via LuatVietnam) | Reply desk data request card; intake `data-or-privacy` rule |
| Personal data law in force, silence is not consent | S68, S8, Luật 91/2025/QH15 | Public replies carry no personal data |
| Breach notice to the authority within a set number of hours | S9 | Not applied by any routine |
| Promotional messages only with prior consent; permitted hours and daily counts; fines | S7, S59 (Nghị định 91/2020, Nghị định 330/2026 Điều 37); S60 unconfirmed | Reply desk and deflection desk no promotion; churn watch labels a promotional save |
| A system that talks with people must say it is a system, and its effective date | S13, S55, Luật 134/2025/QH15 Điều 11 | `CONTRACT.md` 10.5; deflection desk bot line |
| Invoice correction cases | S45, Nghị định 70/2025 | Reply desk Step 6f |
| Consumer negotiation requests go to the provincial Department of Industry and Trade from 01/07/2025 | S1, Nghị định 146/2025/NĐ-CP | `authority-named` rule |

Platform facts kept out of routines for the same reason, with their source in the Phần A ledger: Shopee's return window and seller response time and its chat window and badge rates (S19, S52), TikTok Shop's chat window (S22), Zalo OA's consult window and broadcast quotas (S50, S51), Meta's reply window and Human Agent tag (Meta's policy page). The intake transcribes each into the member's own files with its URL and date.

## Known gaps

- **The form was filled by an AI**, and no clause has been confirmed by a Vietnamese customer care practitioner. No Gate 3 review and no Gate 7 class B run on fictional data (D6).
- **`copy-check.mjs` does not recognise Vietnamese counts or money** (D6). The scripts stay byte identical, so the control is each routine's own in agent pass and the rule that a figure carries its source.
- **The examples folder is still mostly the English kit's fictional roofing business.** Only the queue header is Vietnamese; the routines carry fictional Vietnamese examples of every owner facing line.
- **The root `CHANGELOG.md` has no link** to `employees/customer-satisfaction-employee-vn/CHANGELOG.md`, and `installer/cli.mjs list` does not yet show the variant. Both are the lead's wiring step; the kit checker fails `root-changelog` until then.
- **`employee.json` `repository`** still points at the upstream project, as in the other variants.
- **Weekend chat** is not swept on Saturday or Sunday by default; Monday's sweep and brief catch up, with the platform deadlines computed through the weekend.
- **A phone number inside a card title** written by another routine can still reach the brief (standup acceptance case 6).

## Cross kit notes

- No outbound deferral from this kit's writers aims at another kit.
- The platform terms table in `CAPABILITIES.md` section 4c (Shopee, Facebook and Instagram, TikTok Shop, Lazada, Zalo, Google Maps) was read on 24/09/2026 and applies equally to any other `-vn` kit that reads those platforms. After the final verifier pass no row permits a browser, which agrees with D17 and D23.
- The version check repair in `CONTRACT.md` 8.4 repeats GTM 1.11.0 defect 11 and the Chief of Staff repair.
- Every row of the D11 table above belongs to a shared, dated Vietnam rules file if the lead creates one across kits.

## Review

One independent reviewer per routine, then one fixer per routine that applied every finding to its own `SKILL.md` and ledger and raised shared file changes as "pending, after review". The final verifier applied all fourteen pending rows on 24/09/2026 (`_shared/patch-log.md`, "Final verifier pass"). No finding was declined by any fixer, and no BLOCK is open.

| Routine | First review | Fixed | Second review | Fixed | Shared file rows the final verifier applied | Still open |
|---|---|---|---|---|---|---|
| `csat-desk-intake` | BLOCK | 17 (BLOCK 1, browser reading on platforms whose terms forbid it; FIX 2 to 13; three NOTEs) | FIX | 9 | P5 (`CONTRACT.md` 10.2 `recurrence:`), P7 (`csat-deflection-desk` Step 3), P6 recorded; its `counted weekdays:` line got its reader in the standup | None in the routine. The owner still picks between the intake's 309 `[CG]` and the taxonomy's 1717 `[CG]` unclassified share (the taxonomy value is in force) |
| `csat-inbox-sweep` | FIX | 13 (11 FIX, 2 NOTE) | none | 0 | P6 (`exports/<surface-name>/` in `CONTRACT.md` 10.2), P7 (no browser route in `CAPABILITIES.md` 4c and `reviews.read`) | None. The lead confirms the P7 reading and the `platform_deadline_at` field name |
| `csat-reply-desk` | FIX | 12 (11 FIX, 1 NOTE) | none | 0 | The example queue header in Vietnamese with a `dd/mm/yyyy` date | The four checker warnings below, each justified in the ledger |
| `csat-churn-watch` | FIX | 10 (three NOTEs also answered) | none | 0 | none requested | None |
| `csat-deflection-desk` | FIX | 8 (2 NOTEs, one as a glossary row) | none | 0 | Three glossary rows for its `n/a` tokens; intake P7 in its Step 3 | None |
| `csat-taxonomy-refresh` | FIX | 12 (one NOTE through patch requests, one logged) | none | 0 | `CAPABILITIES.md` section 7 row (adapted to P7), one glossary row, the `tach <parent-id>:` split line in `csat-satisfaction-report` | None |
| `csat-satisfaction-report` | FIX | 13 | none | 0 | Five glossary rows for its `n/a` tokens; the split line reader | None |
| `csat-desk-standup` | FIX | 12 (two NOTEs as patch requests) | none | 0 | `CONTRACT.md` 2.8 in-shift line; `parsed-strings.md` board headings row; the holiday `n/a (not read)` clause in Step 5e item 3 | None |

**Changes the final verifier made beyond the pending rows.**

- `csat-desk-standup` Step 5e item 3: where the complaint acknowledgement line's public holiday list reads `n/a (not read)`, no date is computed and one assumption names the line. This is the paired half of the intake second fixer's change, proposed in the intake ledger's outbound deferrals, so the token the intake now writes has a reader.
- One verb for ticking a sent box. The member read `đánh dấu vào ô` in the queue header and `tick ô` in the brief and the board. `csat-desk-standup` now writes `chưa đánh dấu ô sent (đã gửi)` (three places) and `thì đánh dấu ô của việc đó` on the board header, and `csat-satisfaction-report` Step 8 item 7 writes `được đánh dấu`. None of these strings is parsed; `copy-check.mjs --dest plain` passes on each.
- `CHANGELOG.md` of the variant, the 1.9.0 `CAPABILITIES.md` bullet: one sentence saying no 4c row permits a browser. The version stays 1.9.0 because nothing has been published.

**Consistency pass, left as it is on purpose.**

- `hạn của sàn` in the `Tết` line (`csat-desk-intake` 7 and `csat-desk-standup` 5e) covers every platform deadline, return decisions included, so it is not the reply window `hạn phản hồi của sàn`; both routines write the same line. `hạn xử lý của sàn` names a return request deadline in the standup example.
- `Bản tin sáng` with a capital in the reply queue headers names the routine (glossary section 2); `bản tin sáng` is the brief.
- Severity glosses (`khẩn`, `cao`, `thường`, `thấp`), `phiếu`, `mẫu trả lời`, `bài hướng dẫn`, `chủ đề`, `giữ được`, `mất khách`, `hạn mức duyệt`, `mức thời gian phản hồi`, `chưa đủ mẫu`, `tuần sale` and the `n/a` glosses read the same in every routine that writes them and in `CONTRACT.md`. No routine writes `bạn`, `sếp` or `quý khách` to anyone except inside a rule that forbids them.

## Checks

Final run 24/09/2026 from `/Users/phantanphat210593/Snagon-Agent-cos-vn`, after the final verifier pass.

| Check | Result |
|---|---|
| Kit checker, `check-localized-routine.mjs kit` with this report | `FAIL (1 fail, 4 warn)`. The one fail is `root-changelog`: the repository root `CHANGELOG.md` has no link to `employees/customer-satisfaction-employee-vn/CHANGELOG.md`. That link is the lead's wiring step, and no pass on this kit may make it. The four warnings are all `csat-reply-desk`: three fictional `120.000 đ` figures, each tied to its ticket line, and the "what you own" shared section, whose writes list gains the invoice correction card and the data request card; both are justified in the reply desk ledger and relax nothing. The other seven routines raise nothing |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)` |
| `node installer/cli.mjs list` | Runs; lists the nine shipped kits and `gtm-engineer-vn`. `customer-satisfaction-employee-vn` is not listed until the lead wires it |
| `copy-check.mjs --dest plain` on the example queue header and the reworded `đánh dấu` lines | `"verdict": "PASS"`, `"violation_count": 0` on each |
| Dash scan over this report folder and every file of the variant | `no dashes` over 52 files |
| Original kit unchanged | `git status --porcelain -- employees/customer-satisfaction-employee` prints nothing |
| Scripts | byte identical to the original (the kit checker's `scripts` rule raises nothing) |

**Verdict: ready for the lead's wiring step.** Every check this kit owns passes, no BLOCK is open, and the original kit is unchanged. The kit checker's only fail, `root-changelog`, clears when the lead links the variant changelog from the root `CHANGELOG.md`; the installer lists the variant once the lead registers it.

## How to install this variant

The public npm package does not contain `customer-satisfaction-employee-vn`, and `npx ai-employees hire customer-satisfaction-employee` installs the English kit. Once the lead wires the variant into the fork's bundled installer, install from a checkout of the Vietnam fork:

```
git clone https://github.com/phantanphatdgteam-gif/ai-employees-VN.git
cd ai-employees-VN
git checkout feature/vn-localization
node installer/cli.mjs hire customer-satisfaction-employee-vn --to ~/ai-employees/customer-satisfaction-employee-vn
```

The branch must contain the variant, so it has to be committed and pushed first. A later upgrade uses the same checkout: `node installer/cli.mjs upgrade customer-satisfaction-employee-vn --to <folder>`, then `--apply`. Never run `npx ai-employees upgrade customer-satisfaction-employee` on this folder.
