# Sales Employee Vietnam localization

## Status

`employees/sales-employee-vn` is at **1.9.0**, one minor step above the original `employees/sales-employee` at 1.8.0 (decision D14). This is the first evidence bounded pass: seven routine writers each localized one routine from its own form section, and an integrator pass then applied the in kit deferrals, the shared file patch requests, and the Gate 8 rules, and bumped the version. Nothing was committed, pushed or published. The original kit has no changes.

**This is an AI prepared draft.** Form section A1 (lines 55 to 61) names the filler as an AI sub agent playing a Vietnamese B2B sales development rep, research draft dated 23/09/2026, with no years of practice and no account operated, and it asks for review by a real practitioner. The `[CG]` markers are the owner's review decisions on that draft, not a practitioner's. **No clause here has been confirmed by a person working in Vietnamese B2B sales**, and the legal parts have not been read by a lawyer. Gate 3 (a real practitioner) is deferred under D6; `review-packet-vi.md` in this folder is the packet for that review. Each of the seven routines then had one independent review and a fixer pass on 24/09/2026, and a final verifier applied the resulting shared file requests (see Review below); that review was by another AI agent, not by a practitioner or a lawyer.

## Inputs

| Input | Path |
|---|---|
| Form, extracted Markdown, the line numbers in every ledger | `Snagon-Agent/Khung-tri-thuc-ban-dia/07_Sales/phieu-da-dien.md`: Phần A lines 51 to 250, B-1 `sales-desk-setup` 253 to 534, B-2 `sales-prospect-sweep` 535 to 830, B-3 `sales-first-touch-drafts` 831 to 1121, B-4 `sales-followup-sweep` 1122 to 1409, B-5 `sales-pipeline-review` 1410 to 1583, B-6 `sales-qualification-refresh` 1584 to 1877, B-7 `sales-desk-standup` 1878 to 2044 |
| Source index | `Khung-tri-thuc-ban-dia/07_Sales/literature/nguon.md`, viewing date 23/09/2026 on every row |
| Decisions and style | `localization-reports/VN-DECISIONS.md` (D1 to D22), `localization-reports/STYLE-VI.md` |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md`, its references and `scripts/check-localized-routine.mjs` |
| Shared ledgers | `_shared/phan-a-ledger.md` (Phần A, 132 clause units), `_shared/parsed-strings.md`, `_shared/glossary.md`, `_shared/patch-log.md` |
| Routine ledgers | `sales-desk-setup.md`, `sales-prospect-sweep.md`, `sales-first-touch-drafts.md`, `sales-followup-sweep.md`, `sales-pipeline-review.md`, `sales-qualification-refresh.md`, `sales-desk-standup.md` |
| Backups before the integrator pass | the session scratchpad, `vn/sales-employee-vn/sales-employee-vn.before-integrator` and `vn/sales-employee-vn/reports.before-integrator` |

## How it was done

1. **Phần A once.** Every Phần A clause was classified in `_shared/phan-a-ledger.md`. Sources behind an adopted law, number or platform rule were re-opened on 24/09/2026, and the terms of LinkedIn, Meta, Zalo, TopCV, VietnamWorks, CareerViet, ITviec, Trang Vàng, the business registration portal and the tax lookup were read for D13.
2. **One writer per routine.** Each writer extracted its own Phần B, built a clause ledger before editing (ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED), edited only its own `SKILL.md` in English with Vietnamese member lines, kept Step 0, both guardrails, the run record, idempotency and `## Corrections` byte identical, and routed everything outside its file as an outbound deferral or a shared file patch request. No routine's schedule row moved.
3. **One integrator.** Deferrals aimed at a routine of this kit were applied where the clause carried `[CG]` or an `[S#]` re-opened on 24/09/2026, and recorded in the target routine's ledger under `### Deferrals received`. Shared file requests were applied in the lead's order and logged in `_shared/patch-log.md`; where two requests contradicted, the original behaviour was kept. New contract material went into a new `CONTRACT.md` section 10, "Vietnam operating rules", placed before Appendix A, with every existing section number unchanged. One defect the writers did not own was repaired: the monthly version check read the English kit.
4. **Checks** as listed below. A checker PASS was not taken as proof: every rule the integrator applied was traced to the file that carries it and the routine that reads it, and every new Vietnamese line was put through `copy-check.mjs`.

## Routines

Decision counts are the writers' own, from each ledger's counts table; `sales-followup-sweep` has none, so its counts were taken by the integrator from the decision column, cited Phần A rows included. Deferrals received are the integrator's.

### sales-desk-setup (B-1)

| Measure | Value |
|---|---|
| Writer decisions | 50 ADOPT, 31 KEEP, 9 WORDING, 15 EXAMPLE, 6 DEFER, 20 REJECT, 28 UNVERIFIED; 5 patch requests |
| Deferrals received | 19: 7 applied (the operating status test is `supporting`; the signature block; how consent is recorded, in part; `rate_floor: 15`; where a call log goes; the invoice and payment concern in `pain:`; the proof kinds in order), 4 already covered, 7 declined, 1 split (the form of address already covered, stage day ceilings declined). Plus the version check repair |
| Main Vietnam changes | `## Legal identity` from one registration lookup, never past a captcha; the 2025 address change; member only price, VAT, credit, discount and handoff lines; `## Form of address`; `influencer:`; a Vietnamese test set; no bought list; closed platforms not opened; Vietnamese intake block and report |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-prospect-sweep (B-2)

| Measure | Value |
|---|---|
| Writer decisions | 40 ADOPT, 41 KEEP, 8 WORDING, 3 EXAMPLE, 5 DEFER, 10 REJECT, 36 UNVERIFIED; 3 patch requests |
| Deferrals received | 7: 2 applied (a company read as stopped is disqualified whatever the status test's weight, the consequence of its own deferral to setup; state bodies, public hospitals and schools, and the member's competitors and off limits list are not for cold work), 3 already covered, 2 declined |
| Main Vietnam changes | LinkedIn and every closed platform not opened; single lookups on the portal and the tax lookup; no bought or unsourced data; a public contact detail is not consent; no personal mobile anywhere; resting sources; Vietnamese digest line with `Nguồn em không đọc hôm nay` |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-first-touch-drafts (B-3)

| Measure | Value |
|---|---|
| Writer decisions | 21 ADOPT, 46 KEEP, 7 WORDING, 4 EXAMPLE, 36 DEFER, 14 REJECT, 18 UNVERIFIED; 5 patch requests |
| Deferrals received | 7: 1 applied (read `## Form of address` first), 1 already covered, 5 declined (all need a call or chat channel, or are unmarked) |
| Main Vietnam changes | No first touch without a consent tag above the marker; held people counted, never dropped; the `[QC]` label, the full sender block and the refusal line on every email; `anh` or `chị`; a 900 character body cap the member set |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-followup-sweep (B-4)

| Measure | Value |
|---|---|
| Decisions | 38 ADOPT, 1 MOVE, 51 KEEP, 8 WORDING, 8 EXAMPLE, 6 DEFER, 12 REJECT, 34 UNVERIFIED; 3 patch requests |
| Deferrals received | 8: 2 applied (the three legal parts on every follow up email, with the example extended to 552 characters under the 600 cap; the tax status check before a quote in the `handoff` card), 5 already covered, 1 declined |
| Main Vietnam changes | A refusal in any words stops every channel; a stall is a date, not a refusal; Vietnamese reading of unaccented replies; price questions go to the closer; calls and chat messages are a person's; Vietnamese queue header and cards |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-pipeline-review (B-5)

| Measure | Value |
|---|---|
| Writer decisions | 8 ADOPT, 2 MOVE, 31 KEEP, 7 WORDING, 5 EXAMPLE, 0 DEFER as rules, 1 REJECT, 33 UNVERIFIED; 2 patch requests |
| Deferrals received | 4: 1 applied (a follow up framework with twenty people at step 2 and fewer than two next steps changes its angle, never the cadence, with `followup_floor{}` in state), 1 already covered, 2 declined |
| Main Vietnam changes | Rate floor fifteen per segment and channel; call stages only from a member saved export; no industry or telesales rate; source kill in words; no phone, identity or bank number on the page; closed platforms never replayed |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-qualification-refresh (B-6)

| Measure | Value |
|---|---|
| Writer decisions | 13 ADOPT, 43 KEEP, 5 WORDING, 5 EXAMPLE, 6 DEFER, 1 REJECT, 50 UNVERIFIED; 3 patch requests |
| Deferrals received | 4: 2 applied and 1 applied in part (`influencer:` carried across rewrites; a resting source is not retired; two refusals on one framework make a message problem), 1 declined |
| Main Vietnam changes | Floors sized for a small business, measured in businesses reached; a short or holiday month changes nothing; `next step` beside `replied`; returning customers counted apart; self declared company size marked `(tự khai)` |
| Routine checker | `PASS (0 fail, 0 warn)` |

### sales-desk-standup (B-7)

| Measure | Value |
|---|---|
| Writer decisions | 10 ADOPT, 37 KEEP, 8 WORDING, 3 EXAMPLE, 5 DEFER, 6 REJECT, 23 UNVERIFIED; 5 patch requests |
| Deferrals received | 6: 2 applied (a line for people held for want of a consent record; a line for a refused data list), 1 already covered, 3 declined |
| Main Vietnam changes | The stop line first under `## Today`; the veto line in Vietnamese; outcome words only from the ledger; no phone, bank or identity number; no route into a chat app or group; a chat "ok" is not a tick |
| Routine checker | `PASS WITH WARNINGS (0 fail, 1 warn)`. The warning is LinkedIn inside the Step 11 run record example, byte identical to the original and inside a section the pass must keep |

## Gate 8: `CONTRACT.md` section 10.1, Vietnam operating rules

Principles adopted in three or more routines, written once in English with no legal number. The routines keep their own text.

| Rule in 10.1 | Routines that carry it |
|---|---|
| 1. Platform terms decide what a routine reads by automation | setup, sweep, review, refresh |
| 2. No advertising contact without a recorded consent | setup, sweep, first touch, follow up, standup |
| 3. A refusal ends contact on every channel, at once | follow up, first touch, standup, refresh |
| 4. No bought, traded or unsourced list, ever | setup, sweep, standup |
| 5. A captcha is never cleared, and a status nobody could read is not a pass | setup, sweep, follow up, refresh |
| 6. A superlative needs its document | setup, first touch, follow up, refresh |
| 7. No price moves without the member | setup, first touch, follow up |
| 8. A figure from another market is not a fact about Vietnamese buyers | setup, sweep, review |
| 9. A call or a chat message is always a person's | setup, follow up, standup |
| 10. No personal identifier in anything a person might forward | sweep, review, standup |
| 11. Prospects are addressed as `anh` or `chị` | setup, first touch, follow up, standup |
| 12. The member reads Vietnamese; machines read English | all seven |

Section 10 also holds what the variant adds to the strategy files (10.2), the consent record (10.3), the stop line (10.4), and the channel vocabulary, which stays `email` and `linkedin` (10.5). Two principles appear in only two routines and stay there: the registered address after the 2025 change (setup, sweep) and "a customer exists only with a contract, an order, an invoice or money received" (review, standup).

## Shared files changed in the integrator pass

| File | Change |
|---|---|
| `CONTRACT.md` | 2.3 offer, buyer and voice lists; 2.5 consent pointer; 2.6 Vietnamese queue header; 2.7 call log row, brief template, stop line pointer, `evidence_floor{}`, `rate_floor`, `followup_floor{}`; 4.3 vocabulary; 7.2 rule 2; 8.4 version check; new section 10 |
| `CAPABILITIES.md` | 4b Vietnamese CRM and call log routes at `unknown`, held outbound actions; `web.fetch` closed platforms paragraph; `brief.deliver` no chat app route; new `## Platform terms, Vietnam` before `## Corrections` |
| `ROLE.md` | LinkedIn sentence; the lines the variant adds; the new `n/a` tokens |
| `README.md` | Vietnam variant paragraph; LinkedIn sentence; the intake fields and the consent tag; install and upgrade from the fork |
| `INSTALL-PROMPT.md` | `FILL THIS IN` line 4 and its no guess rule; standing rule 3; Phase 1 steps 8 and 10; Phase 3 `review/manual.md`; Phase 6 consent hold; Phase 7 consent line |
| `AGENTS.md` | "This is the Vietnam variant" |
| `examples/` | One fictional Vietnamese day: brief, pipeline, contacts, prospects, run log, a new `queue/2026-09-22-first-touch.md` replacing the English `queue/2026-03-05-first-touch.md`, and `examples/README.md` |
| `VERSION`, `employee.json`, `CHANGELOG.md` | 1.9.0 and one entry for the localization pass |
| `SCHEDULE.md` | Unchanged. No ledger asked for a row change, so no shipped time went stale and the browser spacing is the original's |
| Routines | The deferrals above, in the target routines only, and the setup version check |

The request by request record is `_shared/patch-log.md`: 26 requests from the routine ledgers, 22 applied and 4 declined (the channel vocabulary contradiction), plus 6 Phần A rows applied and 1 declined.

## Sources re-opened

Every date below is 24/09/2026. The integrator re-opened no source: every rule it applied rests on `[CG]` or on a source a writer or the Phần A pass re-opened that day.

| Pass | Sources |
|---|---|
| Phần A | S1 (instrument page), S3, S7, S8, S10, S14, S19, S21, S22, S24, S26, S27, S45, S46, S49, S51, S53, S54, S56, S57, S59, S60, S61, S63, S72, S74, S86; S55, S64, S75, S76 through search results because the page refused; S50 HTTP 403 (S51 carries the rule). Platform terms: LinkedIn 8.2, Meta 3.2, Zalo 4.7, TopCV, VietnamWorks, CareerViet, ITviec, Trang Vàng Việt Nam, the registration portal, the tax lookup. X not re-opened (HTTP 402), index viewing date 23/09/2026 |
| `sales-desk-setup` | S47 (Ministry of Justice page; qualitative only), S68, S20, S38. S82 returned placeholders: not re-opened, index viewing date 23/09/2026 |
| `sales-prospect-sweep` | S20, S65, S81, S44 (partly), S47 (qualitative), S68, S40. S5, S66, S67 not re-opened, index viewing date 23/09/2026 |
| `sales-first-touch-drafts` | S8 (label, sender details, opt out); S7 metadata only |
| `sales-followup-sweep` | S62; a luatvietnam page cross checking S76 |
| `sales-pipeline-review` | S31, S32, S35, S36, S37 |
| `sales-qualification-refresh` | S40, S41, S44 (through search results), S47 (Ministry of Justice page), S80 (partly) |
| `sales-desk-standup` | S1 full text, Articles 37 and 49, from the official attachment |

## Acceptance summary

Each writer mapped its B11 cases to routine lines, with the three required traps (an invented number, an invented sent or done status, an instruction planted in a card, file or page), in its ledger under `## Acceptance and traps`.

| Routine | Cases | Result |
|---|---|---|
| setup | 13 cases, 7 traps | Pass except case 4 (frame lengths, unmarked), case 11 (the form's re ask on the main channel is unmarked; the member's own words are recorded), case 13 (the single chat draft is not implemented) |
| sweep | 12 cases, 9 traps | Pass. Case 2 improved in this pass: with the status test `supporting`, a candidate whose status sits behind a captcha is no longer disqualified for good. Case 4 matches by identity key, not by tax code; case 7 (two companies behind one hotline) is a gap |
| first touch | 12 cases, 10 traps | Cases 3, 6, 10, 11, 12 pass; 2 and 7 partial; 1, 4, 5, 9 are call cases with no route; 8 (company level dedupe) is a gap |
| follow up | 14 cases, 5 traps | Pass except case 1 (call hours, partial), case 4 (the cadence is not shifted to a return date), case 5 (finished is forever), case 8 (holiday shifting, unmarked) |
| review | 6 cases, 8 traps | Pass except case 3 (a stop first and a blocked scale are unmarked) and case 4 (the holiday week rule is unmarked). The seeded `rate_floor: 30` trap is closed by the setup deferral |
| refresh | 12 cases, 7 traps | Pass or partial on every case. Gaps: the owner approval gate (unmarked, contradicts `CONTRACT.md` 7.1), two months to promote, reading a second CRM |
| standup | 6 cases, 8 traps | Pass except case 2 (the meeting time and the closer appear only when the filing routine wrote them into the card title) |

## Deferred and unresolved

| Item | What would settle it |
|---|---|
| **Call and chat first.** The form's central change (Phần A 100a, 172 `[CG]`): call the switchboard first, chat only after a number is given, email after a conversation. Two ledgers asked for different channel values (`call` and `chat` against `call` and `zalo`), so `channel` stays `email` and `linkedin` | The lead decides the values, then one change adds them to `crm/contacted.jsonl`, the library, the queue shape, a `phone` field, the caller identifier gate in `CAPABILITIES.md`, and every reader, together |
| **Silence after the first advertising message.** A luatvietnam page quotes Nghị định 91/2020 Article 13 clause 3 as forbidding any further advertising message or call to a person who did not answer the first. The source is outside the form's index | A lawyer reads the official text. If it holds, follow ups by phone or text need a recorded consent too |
| **The company level lead keyed by tax code** (B-2 central change, unmarked) | A `[CG]` on 545 or 666 and a schema change to `crm/prospects.jsonl` and `crm/contacts.csv` with five readers |
| **The owner approval gate** on the handbook and the monthly rewrite (B-1, B-6, unmarked) | A `[CG]` and a change to `CONTRACT.md` 7.1, 2.3 and the status vocabulary for all seven routines |
| **Stage day ceilings** (B-7 1941 `[CG]`) | A stage entry date written by the standup into `pipeline/pipeline.json` (`CONTRACT.md` 2.4) and read by the review |
| **Answered and right person rates** (B-6 1724 `[CG]`) | An outcome vocabulary for calls, which waits on the channel decision |
| **A restricted refusal store** with tax code, number and verbatim words (Phần A 245, B-4 1195b) | A design that keeps numbers out of shared files; until then `do_not_contact` is the record |
| **Holiday handling in the weekly review and the follow up cadence** (1474d, 1170b, unmarked) | A marked clause and a source that states the rule |
| **Unmarked proposals** kept out of every routine: all clock times, reminder timings, frame lengths, daily call and chat counts, deal value thresholds | A `[CG]` or a re-opened `[S#]` on each clause |
| **Platform verdicts not settled**: X, and any job board not in the table | A person reads the terms page and adds a row to `## Platform terms, Vietnam` |
| **Original kit defects**, noted, not changed there: the original `review/manual.md` template lacks the `## Review settings` heading its own contract and review rely on; the original README says `v1.2.0` while `VERSION` is 1.8.0 | The maintainer fixes the original; the variant carries both repairs |

## Legal threshold candidates kept out of the kit (decision D11)

None of these figures is in a kit file. They are listed so one dated, shared Vietnam rules file can be decided once across the kits.

| Candidate | Source | Where a routine applies it in words |
|---|---|---|
| Permitted hours for advertising calls and messages, one call and three messages per number per 24 hours | S8, S10, S59, Nghị định 91/2020 | The follow up queue header tells the caller to keep to the legal hours and frequency; no routine dials |
| Prior consent for advertising email, messages and calls; silence is not consent | S8, S14, S64, Luật 91/2025 Article 9 | `CONTRACT.md` 10.3 consent records; first touch Step 3c |
| The `[QC]` label, sender details and opt out in advertising email | S8, Nghị định 91/2020 Articles 18 to 20 | First touch and follow up Step 5 |
| Fines and suspension for advertising calls and messages; penalties for personal data | S1 Articles 37, 38, 49; S61; S14 | Nothing is sent; no personal identifier in shared files |
| Consent and refusal records kept for at least one year | S1 Article 37, S14 | The member keeps the proof; `do_not_contact` is never deleted |
| National do not call register and how to join it | S60 | An advertising call only through a call service that screens it |
| VAT reduction rate, end date and excluded groups | S55, S86, Nghị định 174/2025 | Only the member's rate and end date, `stale` after it |
| Non cash payment and contract threshold for deductibility | S57, Nghị định 320/2025, Thông tư 20/2026 | `pain:` names the invoice and payment concern in words |
| Small and medium enterprise size thresholds (the index row and the decree summaries disagree) | S47, Nghị định 80/2021 | A legal size class only with a figure that supports it |
| Superlatives need a market survey, an award or a state confirmation | S51, Thông tư 12/2026/TT-BVHTTDL; S50 | Rule 6 |
| Buying and selling personal data; the Criminal Code article | S63, S19, S65 | Rule 4 |
| Tax status codes for a business that stopped at its address or was suspended | S27 | The status label is quoted as the lookup writes it |
| Zalo personal contact caps and official account messaging windows | S21, S22 | Nothing automated on Zalo |
| The 2025 administrative unit change and the new province count | S49, S75 | The registered address is written as the portal shows it |
| 2026 holidays and the Tết 2027 proposal | S53, S54 | Only a declared or officially issued holiday counts |

## Known gaps

- **No Gate 3 review** by a real Vietnamese practitioner and **no Gate 7 class B run** of the agents on fictional data (D6). The independent review on 24/09/2026 was an AI reviewer per routine, not a person.
- **The variant drafts much less than the original on day one.** With no consent tags recorded, `sales-first-touch-drafts` drafts nothing and reports a held count every morning. That is the lawful behaviour the sources support, and the member has to record consent to change it.
- **LinkedIn and the closed platforms are hand work.** A member who relied on LinkedIn saved searches pastes rows above the marker.
- **The operating status is a person's check.** Both lookups show a captcha on every query; the sweep records the status as not read and the handoff card asks for a hand lookup before a quote.
- **`copy-check.mjs` does not recognise Vietnamese amounts or counts** (D6). The scripts stay byte identical, so each routine carries its own rule to read Vietnamese figures against the proof inventory.
- **The root `CHANGELOG.md` has no link** to `employees/sales-employee-vn/CHANGELOG.md`, and the installer does not list the variant yet. Both are the lead's wiring step; the kit checker fails `root-changelog` until then.
- **`employee.json` `repository`** still points at the upstream project, as in the other variants.
- **The example queue file shows one entry** of the four the example brief counts.
- **S47 index discrepancy** on the small business thresholds, for the form owner to correct; **S82** could not be read.

## Cross kit notes

- No outbound deferral from this kit's writers aims at another kit.
- The platform terms verdicts in `## Platform terms, Vietnam` (LinkedIn, Meta, Zalo, the job boards, the directories, the registration portal and the tax lookup) were read on 24/09/2026 and apply equally to any other `-vn` kit that reads those platforms.
- The version check repair repeats `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn` 1.9.0.
- Every row in the D11 table belongs to the shared, dated Vietnam rules file if the lead creates one.

## Review

One independent review per routine on 24/09/2026, then a fixer pass on that routine and its ledger; the prospect sweep had a second review. Shared file requests the fixers could not make themselves were logged as "pending, after review" in `_shared/patch-log.md` and applied by the final verifier the same day. Each routine's ledger in this folder carries its finding by finding table.

| Routine | Verdict | Fixed | Second review | Unresolved after the fixes |
|---|---|---|---|---|
| `sales-desk-setup` | FIX | 9 (seven FIX, two NOTE), none declined | none | None in the routine. SP-R1 (INSTALL-PROMPT seed titles) and SP-R2 (`CONTRACT.md` 10.2 cell token) applied by the final verifier |
| `sales-prospect-sweep` | BLOCK | 11 | BLOCK, 5 fixed | The BLOCK (commercial directories read by automation) closed only when WP-R1, WP-R3 and WP-R4 reached `CAPABILITIES.md`; the final verifier applied them and WP-R2 (TopCV). Open for the lead: the public sector exclusion stays UNVERIFIED until the `[CG]` scope of 1048 is confirmed; the standup deferral 829 |
| `sales-first-touch-drafts` | FIX | 9, none declined | none | FP-R1 to FP-R3 applied by the final verifier. NOTE 1 (build the sender block from `## Legal identity` at intake) is a lead decision. The refusal confirmation duty (S8 Điều 20(3-4)) stays with the member, because confirming would be an outbound action |
| `sales-followup-sweep` | FIX | 11, none declined | none | FP-N1 applied in part by the final verifier: header lines, refusal line and example phrase now match the first touch. The sender placeholder stays `«paste at send time»`: `«member: paste the detail»`, which `ROLE.md` section 5 defines for this case, fails the kit checker's placeholder rule in this routine because the original routine never carries it. The lead decides whether the checker or the routine changes |
| `sales-pipeline-review` | FIX | 15, none declined | none | RP-R1 (glossary metric names) applied. Two 1147 exemptions not implemented because no file records them; B11 cases 3 and 4 stay in the ledger's Rejected and unresolved |
| `sales-qualification-refresh` | FIX | 14, none declined | none | SQR-R1 to SQR-R3 applied (working weeks counted in working days in `CONTRACT.md` 2.7, `worked_fraction` asked at intake, three glossary rows) |
| `sales-desk-standup` | FIX | 12 | none | TP-R1 and TP-R2 applied, so `examples/brief-latest.md` and `examples/pipeline/PIPELINE.md` equal the routine's samples again. NOTE 2 (stop lines past the thirty line maximum) declined as a contract level question. Checker warning: LinkedIn inside the inherited run record example (line 723) |

**No BLOCK is unresolved.** The sweep's two BLOCK findings are closed in the routine and in `CAPABILITIES.md`; routine checker `PASS (0 fail, 0 warn)` on the sweep after the final pass.

### Shared file requests applied by the final verifier

Sixteen rows in `_shared/patch-log.md`, all applied on 24/09/2026: SP-R1, SP-R2 (setup); RP-R1 (review); SQR-R1 to SQR-R3 (refresh); FP-R1 to FP-R3 (first touch; FP-R3 was optional and taken because the first touch deletes every superlative); FP-N1 (a routine request, in part, above); TP-R1, TP-R2 (standup); WP-R1 to WP-R4 (sweep). `copy-check --dest plain` on the three changed examples: `"verdict": "PASS", "violation_count": 0` each.

### Wording made consistent by the final verifier

Only where the kit said one thing two ways, against `_shared/glossary.md` ("the tick" is `đánh dấu vào ô`) and STYLE-VI:

- `sales-desk-standup` Step 6 template and `examples/pipeline/PIPELINE.md` line 3: `anh/chị tick vào ô` became `anh/chị đánh dấu vào ô`, matching line 5 of the same header.
- `sales-desk-standup` 8.3a gloss list and sample, and `examples/brief-latest.md`: `đóng khi anh/chị tick` became `đóng khi anh/chị đánh dấu`, and `(anh/chị tick mới đóng)` became `(anh/chị đánh dấu mới đóng)`; the example stays byte equal to the sample.
- `sales-desk-standup` Step 8 held consent line: `đầu mối đạt tiêu chí` became `đầu mối đạt tiêu chí lọc`, and `tag đồng ý` became `thẻ đồng ý`, as `sales-desk-setup` intake item 8 writes it.
- `sales-desk-standup` 8.2a stop line shape: `thư mục Nháp của hộp thư` became `thư mục Nháp (Drafts) của hộp thư`, as every other line names the Drafts folder.
- `sales-followup-sweep` queue header lines 3 and 4 equal the first touch header; its example refusal line is the first touch line, `bên Lan` in place of `bên em`; `theo mẫu kế toán bên anh đang dùng` as in the first touch.
- `examples/pipeline/PIPELINE.md` card C-025 carries the exact seed title `Đọc danh sách đủ chuẩn đầu tiên và sửa tiêu chí lọc nếu sai` (the inbox is deduplicated on the title).
- `examples/queue/2026-09-22-first-touch.md` `- why this person:` captcha clause now reads as the sweep's digest cell: `chưa tra legal-status vì trang tra cứu đòi mã captcha, anh/chị cần tra tay trước khi gọi hoặc báo giá`.

## Checks

Final verifier run 24/09/2026 from `/Users/phantanphat210593/Snagon-Agent-cos-vn`, after every pending request was applied and the wording pass.

| Check | Result |
|---|---|
| `check-localized-routine.mjs --selftest` | `check-localized-routine: selftest PASS (34 checks)` |
| Kit checker, `check-localized-routine.mjs kit` with this report | `FAIL (1 fail, 2 warn)`. The one fail is `root-changelog`: the repository root `CHANGELOG.md` has no link to `employees/sales-employee-vn/CHANGELOG.md`, the lead's wiring step, which no pass on this kit makes. Warnings: `examples/queue/2026-03-05-first-touch.md` replaced by `examples/queue/2026-09-22-first-touch.md` (named in `examples/README.md` and above); LinkedIn inside the standup's inherited run record example |
| Routine checker, seven routines | setup, sweep, first touch, follow up, review, refresh `PASS (0 fail, 0 warn)`; standup `PASS WITH WARNINGS (0 fail, 1 warn)` |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)` |
| `node installer/cli.mjs list` | Runs; lists the English kits and `gtm-engineer-vn`, not yet `sales-employee-vn` (the lead's wiring step) |
| `copy-check.mjs --dest plain` on `examples/brief-latest.md`, `examples/pipeline/PIPELINE.md`, `examples/queue/2026-09-22-first-touch.md` after the final pass | `"verdict": "PASS", "violation_count": 0` on each |
| Dash scan (U+2013 and U+2014) over this report folder and every file of the variant | `50 files; no dashes` |
| Original kit unchanged | `git status --porcelain -- employees/sales-employee` prints nothing |

**Verdict: every check this kit owns passes and no BLOCK is unresolved; ready for the lead's wiring.** The kit checker's `root-changelog` fail and the missing installer entry clear only with the lead's wiring step. Shipping still waits on a practitioner review (Gate 3) and a lawyer's reading of the legal items above.

## How to install this variant

The public npm package does not contain `sales-employee-vn`, and `npx ai-employees hire sales-employee` installs the English kit. Once the lead wires the variant into the fork's bundled installer, install from a checkout of the Vietnam fork:

```
git clone https://github.com/phantanphatdgteam-gif/ai-employees-VN.git
cd ai-employees-VN
git checkout feature/vn-localization
node installer/cli.mjs hire sales-employee-vn --to ~/ai-employees/sales-employee-vn
```

The branch must contain the variant, so it has to be committed and pushed first. A later upgrade uses the same checkout: `node installer/cli.mjs upgrade sales-employee-vn --to <folder>`, then `--apply`. Never run `npx ai-employees upgrade sales-employee` on this folder.
