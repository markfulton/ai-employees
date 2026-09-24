# Shared file patch log: web-dev-employee-vn

Integrator pass, 24/09/2026. Every `## Shared file patch requests` row from the eight routine ledgers, in the order the lead set: `CONTRACT.md`, then `SCHEDULE.md` with `employee.json` and every stale shipped time, then `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`. New `CONTRACT.md` material sits in section 10, "Vietnam operating rules", placed just before Appendix A; every existing section number is unchanged. Outbound deferrals aimed at the lead, and the integrator's own repairs, are logged at the end.

Status words: **applied** (exact text, at the requested anchor), **applied, relocated** (same meaning, placed in `CONTRACT.md` section 10 because the lead asked for new material there, with a pointer left at the anchor), **applied, merged** (combined with another request that said the same thing), **applied in part** (the reason names the part left out), **declined**.

Short names: DR `web-dependency-run`, FR `web-fix-runner`, GR `web-guardrail-review`, IR `web-inventory-refresh`, PG `web-platform-guard`, SS `web-site-sweep`, SU `web-standup`, WR `web-weekly-report`. The number after the short name is the row's order in that ledger's patch table.

## CONTRACT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| IR 1 | 2.3 table, rows `inventory/owner-summary.md` and `inventory/handover.md` | applied | Rows inserted after `inventory/domains.md`, exact text |
| FR 1 | 2.3 table, `policy/budgets.md` readers gain `web-fix-runner` | applied | Row edited in place |
| DR 1 | 2.3 schema, `project_kind` and `update_screen` | applied, relocated | 10.2, per project list. Pointer paragraph at the end of 2.3 |
| IR 2 | 2.3 schema, the Vietnam project and domain fields | applied, relocated and merged with DR 1 and PG 3 | 10.2. Exact field names kept |
| PG 3 | 2.3 schema, `holder_role`, `payer_role`, `backup_retention` | declined, merged | Contradicts IR 2 on the field names. The PG ledger itself says the names were "to be confirmed against the `web-inventory-refresh` writer". IR writes the fields, so its names (`legal_holder`, `roles{}`) stand, and 10.2 says the guard compares against them. `backup_retention` is in IR 2 already |
| DR 2 | 2.3, `## Working days and hours` carries sale days and `Tết` days off | applied, relocated | 10.3, with the freeze line shape from FR's INSTALL request and the rule that no routine supplies a date |
| PG 4 | 2.3, `## Expiry warning window` may carry one line per kind | applied, relocated | 10.3, exact meaning. The template gained only the `.vn` line both PG and SU agree on |
| GR 1 | 2.3, `## Guardrail review` holds two keys, neither written by the guardrail review | applied, relocated | 10.3, with `quality_bar` added from the FR deferral to GR. The 2.3 sentence is unchanged and still true |
| GR 2 | 2.3, a widening only moves `off` to `one-file`; `infra` and `payment` never widen | applied, relocated | 10.5 |
| SS 2 | 2.3, `log_surfaces[].kind` and the webhook endpoint rule | applied, relocated | 10.2, exact meaning |
| SU 1 | 2.4, the graph mark needs a second half | applied, relocated | 10.4, exact text. A one sentence pointer was added after the 2.4 paragraph, because 2.4 states the two marks and a reader must find the narrowing there |
| SU 2 | 2.7, the blocker line rule: money or domain from the first brief, or two working days | applied | Replaced in place. 2.7 says the rule "lives here and is implemented once, in `web-standup`", and the contract outranks a routine, so leaving the seven day text would have overruled the routine's adopted rule. The new rule is stricter, never looser. 10.4 points to it |
| IR 3 | 2.8 table, `inventory/owner-summary.md` and the person on duty | applied | Row edited in place |
| integrator | 2.6 table, `changes/*-deps-*.md` readers gain `web-standup` | applied | Needed by the DR deferral to SU (the `## Việc cần anh/chị quyết` lines). A read with no map entry is the defect section 2.0 names |
| integrator | 8.5, the version check read the English kit and the upgrade line would install it | applied | Same repair as `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn` 1.9.0: the check reads `employees/web-dev-employee-vn/`, and the upgrade line uses `node installer/cli.mjs upgrade web-dev-employee-vn` |
| integrator, Gate 8 | New section 10.1, the twelve rules three or more routines share | applied | See the report's Gate 8 table |
| integrator | 10.3, `mon-fri sat` in one row | applied | Found while applying SS 1: `scripts/guard.mjs` reads only the first row carrying an id and reads each space separated `days` value, so a second `sat` row, which the original `SCHEDULE.md` suggests, is never read. Tested on 26/09/2026 (a Saturday), 27/09/2026 and 24/09/2026 against the guard's own `dayAllowed` |

## SCHEDULE.md, employee.json, stale times

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| DR 4 | 1.2, the `conditional` row names a `cms` updates screen | applied | In place |
| SS 1 | Section 3, `web-inventory-refresh` sets the sweep row to `mon-fri sat` | applied in part | The premise (Saturday trade, `[S36]`) and the Sunday note are applied. The mechanism is declined: `CONTRACT.md` 2.1 and the IR file map forbid a routine changing a `days` value. The member sets `mon-fri sat` in the one row. The original advice to add a second `sat` row was replaced, because the guard never reads a second row |
| SU 3 | Section 3, the standup row may carry `mon-fri sat` | applied, merged with SS 1 | Same paragraph, same member edit |
| WR 1 | Section 6, a week whose Friday is a declared day off | applied | Exact text after step 3 |
| stale time scan | No row changed in this pass | done | No `fire`, window or budget moved, so `employee.json` keeps every row value and no shipped time needed updating in `CONTRACT.md`, `SCHEDULE.md` prose or `README.md`. The browser spacing rule is unchanged (tightest gap 45 minutes, first Monday). `employee.json` changed only its `version` |

## CAPABILITIES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| DR 3 | 4b row `cms.updates.read` | applied | After `advisories.read`, `unknown` |
| SS 3 | 4b rows `monitor.read`, `payments.read`, `security.read` | applied | After `cms.updates.read`, all `unknown`. The vendor facts carry "sources opened 24/09/2026" in place of the form's source ids, because no form marker may appear in a kit file |
| PG 1 | 4b row `trust.lookup` | applied | After `registrar.read`, `unknown` |
| PG 2 | 4b, hosted store platforms read in the member's own admin only | applied | After the "Read only, scoped" paragraph |
| integrator, lead step 2 | 4b, the added routes are read only, `unknown`, and hold every outbound action | applied | One paragraph after PG 2 |
| FR 2 | `field.set`, platforms whose terms bar automated access | applied | After the "One routine in this kit types into a form" paragraph |
| WR 2 | `perf.sample`, lab and field routes | applied | After the "Whichever route answered" paragraph |
| DR 5 | Section 7, the `web-dependency-run` row loses every `cms` project without a browser | applied | In place |

## ROLE.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, lead step 2 | 5.1, the profile values the Vietnam routines now read | applied | `«EXPIRY WARNING WINDOW»` default names the `.vn` window; four rows: the calendar lines, the form of address, `min_resolved_changes_to_widen` and `quality_bar`, and the handover values. No new placeholder token |
| integrator | Section 9, the added `n/a` reasons and the two Vietnamese not known values | applied | One paragraph after the common reasons |

## README.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| PG 5 | Routine table, the `web-platform-guard` row | applied | Exact text |
| IR 4 | File tree, `inventory/` line | applied | Exact text |
| integrator | Install: the variant is not on npm, never upgrade it with the English line | applied | Top of `## Install` |
| integrator | "What it needs from you": the optional intake answers | applied | One paragraph after "A few minutes on a weekday" |
| integrator | "Version and updates" read v1.2.0 while `VERSION` read 1.8.1 | applied | Now v1.9.0. The stale value is inherited from the original kit; the maintainer may want the same fix there |

## INSTALL-PROMPT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, lead step 2 | The intake asks for every profile field a routine now reads | applied | `FILL THIS IN` lines 2 to 10, optional and never a stop: form of address, working days and Saturday, sale days and freeze windows, announced days off including `Tết`, maintenance windows, urgent update hours, field speed budgets, the roles per domain and host including who may merge, and the quality bar. This kit never spends, so no spending ceiling and no discount is asked; the spend approver role is |
| SS 4 | Phase 3, the four surfaces a small Vietnamese site runs on | applied | Exact text after the hosted database paragraph, plus one sentence that a managed store platform is never driven |
| IR 5 | Phase 4 step 4, create `inventory/handover.md` and ask once for the four roles | applied | Exact meaning, filled from line 9 |
| FR 3 | Phase 4 step 5, one line per declared change freeze | applied, merged with SS 5 | Same sentence |
| SS 5 | Phase 4 step 5, Saturday opening and maintenance windows | applied, merged with FR 3 | Same sentence, plus the urgent update hours (DR deferral to IR), the peak season only where the member said so (WR deferral), `Xưng hô:` under `## Member set`, and field budgets only from line 8 (WR deferral, relocated here) |
| GR 3 | Phase 4 step 5, `min_resolved_changes_to_widen: 8` | applied | With `quality_bar` from line 10 or the owner approved default |
| GR 4 | Phase 4 step 6, `payment` at `off`, never widening | applied | Exact text, plus the four never tuneable lines from the FR deferral to IR |
| integrator | Phase 4 step 5, the expiry windows | applied | `.vn` 45 days added, matching the IR template |
| integrator | Phase 5, the Vietnam seed cards | applied | Items 6 to 9 of IR Step A7, so the install and the routine's first run seed the same set |
| integrator | Phase 7 handover names `inventory/handover.md` and the person on duty section | applied | One item, written in Vietnamese to the member |

## AGENTS.md and examples/

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator | `AGENTS.md` says this is the Vietnam variant, where its rules live, that a person sends, and never to upgrade it from npm | applied | One paragraph under the title |
| FR 4 | `examples/changes/2026-03-05-fix-C-005.md`, the opening lines | applied | Exact text |
| FR 5 | Same file, `## Rollback` | applied | Exact text |
| FR 6 | Same file, `## Left for you` | applied | Exact text. `copy-check.mjs --dest plain`: PASS |
| SU 4 | `examples/board/REVIEW-BOARD.md`, the three header sentences | applied | Exact text, matching the standup's Step 6 template. `copy-check`: PASS |
| SU 5 | `examples/brief-latest.md`, the lines under the English headings | applied | Exact text; the date heading and the footer line unchanged. `copy-check`: PASS |
| integrator | `examples/health/incidents.jsonl` gains `"p0":false` on both lines | applied | The sweep now writes `p0` on every line (WR deferral) |
| integrator | `examples/README.md`, two rows name the Vietnamese lines | applied | `copy-check`: PASS |

## Outbound deferrals aimed at the lead or at a shared file

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| DR, form 1363 `[CG]` | Re-ask a member's `held-by-member` after 30 days | declined | Contradicts `CONTRACT.md` 2.6: a `held-by-member` package is "never re-carded". The original behaviour stands. Listed as an open question in the Gate 3 packet |
| FR, form 821, 846, 895 `[CG]`, Phần A row 38 | Person on duty: a P0 patched by hand after a backup; manual edits on a site with no repository in the quiet night window | applied | `README.md` new section "The person on duty"; `INSTALL-PROMPT.md` Phase 7 points to it |
| PG, form 1400, 1402, 1468, 1473 `[CG]`, 1628 | Person on duty: reminder drafts, one working hour for a nameserver change, four working hours for a suspended `.vn`, calls only in business hours | applied | Same section |
| SU, form 1977, 2004, 1998, 1986 `[CG]` | Person on duty: brief pasted around 08:00, sent before 08:15, one reminder around 15:00, a ten line brief after five unread working days | applied | Same section, English and the member's Vietnamese text. These are the person's own habits, not fire times, and no routine reads them. The clock time eval covers routine bodies only and stays at its baseline |
| none | Deferrals aimed at another kit | none | No ledger in this kit aims a deferral at another kit, so the report has no cross kit notes |

## Counts

37 shared file patch requests: 36 applied (24 exactly at their anchor, 8 relocated to `CONTRACT.md` section 10 with a pointer, 3 merged with another request that said the same thing, 1 applied in part), 1 declined (PG 3, field names). 58 outbound deferrals: 45 applied (including in part, relocated, or already satisfied by the target writer), 13 declined; each is a row in its target routine's ledger under `### From deferrals`, and the lead's four are in the table above. Integrator repairs outside any request: 17 in the shared files and examples, each named above, plus 2 in routines (`web-inventory-refresh` Step B3a.1, the English version check; `web-weekly-report` Step 4a, the webhook count).

## Pending, after review

Requests added by review fixes after the integrator pass. None is applied; each waits for the lead.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| SS 6 | `CONTRACT.md` 2.3 file map, the `inventory/handover.md` row gains the reader `web-site-sweep` | applied, final verifier 24/09/2026 | Review fix 9 (D17): the sweep opens nothing on a managed shop platform's admin and reads only what the person on duty recorded in `inventory/handover.md`. A read with no map entry is the defect section 2.0 names |
| SS 7 | `CONTRACT.md` 10.2, a per project `p0_paths[]` written by `web-inventory-refresh` from the member's own words | declined, final verifier 24/09/2026 | Review fix 7: B11 case 1 (checkout 502 twice, home 200) yields `"p0": false` on the check line today. With the field, the sweep marks a failed path on that list `"p0": true` in addition to the all paths rule. Paired with an outbound deferral to `web-inventory-refresh` in the SS ledger |
| SU 6 (reviewer FIX pass, 24/09/2026) | `examples/board/REVIEW-BOARD.md`, the third header sentence becomes `Thẻ việc có nhánh đã gộp vẫn chưa tự đóng: người trực kiểm trang trên bản đang chạy, thấy đúng rồi mới tick.` | applied, final verifier 24/09/2026 | Replaces the sentence applied under SU 4, so the example matches the routine's Step 6 template again. The old wording said the card merged the branch; the glossary's form is `thẻ việc`. Exact old and new text in the `web-standup` ledger, `## Shared file patch requests`, last row. `copy-check --dest plain`: PASS |

## Review fix requests, after the integrator pass

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| IR 6 | Rename the `inventory/handover.md` headings `## Hợp đồng chỗ chứa web` to `## Hợp đồng hosting` and `## Nền tảng bán hàng không giao mã nguồn` to `## Web bán hàng thuê trên nền tảng (không có mã nguồn)`, in `_shared/parsed-strings.md` and in `web-inventory-refresh` `SKILL.md` lines 231, 234, 313 and 326 together | applied, final verifier 24/09/2026 | Independent review of `web-inventory-refresh`, findings 3 and 9. The fixer kept both headings byte for byte because `parsed-strings.md` registers them; lead decision |
| IR 7 | Vietnamese `quality_bar` seed, or `mức mặc định` in `web-guardrail-review` line 380 when the line equals the seed; `INSTALL-PROMPT.md` lines 41 and 137 and `web-inventory-refresh` `SKILL.md` line 494 move together | applied, final verifier 24/09/2026 (merged with GR 7) | Independent review NOTE on `web-inventory-refresh` line 494; kit wide, lead decision |

## Reviewer FIX pass, web-guardrail-review, 24/09/2026

Rows 5 to 7 of the `web-guardrail-review` ledger's `## Shared file patch requests`, added by the fixer after the independent review. None is applied yet.

| Source | Request | Status | Where it should land and why |
|---|---|---|---|
| GR 5 | `_shared/glossary.md`, `## Kit words, fixed Vietnamese forms`: add merged unchanged `thay đổi gộp nguyên`, merged edited `thay đổi gộp sau khi sửa`, closed unmerged `thay đổi đóng không gộp`, regressed `lần lỗi lại` | applied, final verifier 24/09/2026 | Reviewer FIX: the counts were worded three ways in one file. The routine already uses these four forms |
| GR 6 | `_shared/phan-a-ledger.md`, `## Clause decisions` row 19: add `web-guardrail-review` (Step 2 freeze thin row) to the Exact target cell | applied, final verifier 24/09/2026 | Reviewer FIX: GR ledger rows 14, 22, 23, 24 rest on row 19 `[CG]`. If declined, those rows become UNVERIFIED and the routine's freeze row, freeze paragraph and fenced line, the undeclared freeze refusal bullet and the two freeze failure rows are removed |
| GR 7 | `INSTALL-PROMPT.md` Phase 4 step 5: default `quality_bar` in Vietnamese, `16 trên 20 thay đổi gộp nguyên, tối đa 2 thay đổi đóng không gộp, 0 lần lỗi lại ở payment`, with the matching `web-inventory-refresh` seed | applied, final verifier 24/09/2026 | Reviewer NOTE: the member reads the value verbatim in `policy/safe-fix-rules.md` |

## Requests after review, pending

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| WR 3, reviewer FIX 1, 24/09/2026 | `ROLE.md`, the Vietnam variant paragraph: replace the token `n/a (no ledger marks a webhook path)` with `n/a (no payment-webhook surface in inventory)` | applied, final verifier 24/09/2026 | `web-weekly-report` Step 4a now counts webhook failures from `payment-webhook` incident fingerprints and writes the renamed token, so `ROLE.md` would name a token no routine writes |
| WR 4, reviewer NOTE 1, 24/09/2026 | `review-packet-vi.md` section 6: add row 6.7 so the owner confirms the one hundred check floor for the response time movement test (form 1687 `[CG]`) knowing it rarely fires at about fifteen checks a week per project | applied, final verifier 24/09/2026 | The routine text stays as approved; the owner decides with the consequence in view. Exact row text in the `web-weekly-report` ledger, patch request 4 |

## Pending, after review

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| PG, reviewer NOTE 24/09/2026 | `CAPABILITIES.md`, the paragraph `**Platforms whose terms bar automated access, checked 24/09/2026.**`, lists Sapo as "own account, read by hand only", while `CONTRACT.md` 10.1 item 4 and Phần A D13 let a routine read the member's own admin one screen at a time. The lead to choose one reading and make both files agree | applied, final verifier 24/09/2026 | Not applied. `web-platform-guard` Step 3 already covers both readings: it opens no tab on a platform `CAPABILITIES.md` marks as read by hand only and takes the plan expiry and certificate state from `inventory/handover.md`, or records `not checked` |

## web-fix-runner fixer pass, 24/09/2026 (pending, after review)

Requests raised after the independent reviewer's FIX verdict on `web-fix-runner`. None is applied; each waits for the lead. Exact old and new text is in `web-fix-runner.md` under `## Shared file patch requests` (the rows marked "fixer pass") and under `## Outbound deferrals`.

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| FR 7 | `examples/changes/2026-03-05-fix-C-005.md`, the opening lines: "Việc gộp nhánh là của anh/chị." becomes "Anh/chị hoặc người có quyền ghi ở cuối quyết định có gộp nhánh hay không." | applied, final verifier 24/09/2026 | Matches the Step 7b template after the fixer pass |
| FR 8 | Same file, the value under `## What changed and why` in Vietnamese | applied, final verifier 24/09/2026 | Step 7b requires Vietnamese values; the heading stays English (parsed) |
| FR 9 | Same file, `## Left for you`: `Người có quyền gộp nhánh:`, "file quy tắc" for "rule file", the check line with "nếu web có trang thanh toán", closing `Em chưa đưa thay đổi này lên bản đang chạy.` | applied, final verifier 24/09/2026 | Matches the Step 7b template; glossary terms for card and production |
| FR 10 | `localization-reports/web-dev-employee-vn/review-packet-vi.md` row 3.5: "Người được gộp nhánh" becomes "Người có quyền gộp nhánh" | applied, final verifier 24/09/2026 | Report text only, kept in step with the routine |
| FR, outbound to the lead | `web-dependency-run` Step 5.0: remove the two computed freeze window bullets (sale days, `Tết`) | applied, final verifier 24/09/2026 | `CONTRACT.md` 10.1 rule 2 and `web-fix-runner` Step 2 forbid a routine computing a window; the arithmetic lives in `INSTALL-PROMPT.md` |

## Final verifier pass, 24/09/2026

Every request above that read "pending, after review" was decided in this pass. A routine ledger row that still says pending for one of these requests is superseded by this table. Exact spans changed, smallest span each time:

| Source | Decision | Where it landed and why |
|---|---|---|
| SS 6 | applied, widened by one reader | `CONTRACT.md` 2.3, the `inventory/handover.md` row: readers now `web-inventory-refresh`, `web-site-sweep` (read only, what the person on duty recorded for a managed shop platform's admin surface), and `web-platform-guard` (read only, the plan expiry and certificate state of a platform `CAPABILITIES.md` marks as read by hand only). `web-platform-guard` Step 3 reads the same file, so leaving it out would repeat the defect SS 6 names |
| SS 7 | declined | No writable member source exists for `p0_paths[]`: `inventory/handover.md` rows are fixed column rows the routine parses, and a new column or line would change a parsed template and need its own review. The field would have no writer, and the sweep may not read a field no writer produces. Kept as a gap in the report; acceptance case 1 of `web-site-sweep` stays **Gap, medium** |
| SU 6 | applied | `examples/board/REVIEW-BOARD.md` line 5, now byte identical to `web-standup` Step 6 template line 429 |
| IR 6 | applied | Headings renamed to `## Hợp đồng hosting` and `## Web bán hàng thuê trên nền tảng (không có mã nguồn)` in `web-inventory-refresh` (template and the two prose references) and in `_shared/parsed-strings.md` together. `inventory/handover.md` is new in 1.9.0 and unpublished, so no install carries the old headings. Glossary: hosting is `hosting` |
| IR 7, GR 7 | applied together | Seed `16 trên 20 thay đổi gộp nguyên, tối đa 2 thay đổi đóng không gộp, 0 lần lỗi lại ở loại payment` in `INSTALL-PROMPT.md` (FILL THIS IN line 10 and Phase 4 step 5), `web-inventory-refresh` template line 494, and the `web-guardrail-review` fictional template line 380. `ở loại payment` rather than GR 7's `ở payment`, to match the routine's count line 381. No file parses the value; an install that already holds the English seed keeps it as the member's own line |
| GR 5 | applied | `_shared/glossary.md`, four rows after `person on duty` |
| GR 6 | applied | `_shared/phan-a-ledger.md` row 19 Exact target cell names `web-guardrail-review` (Step 2 freeze thin row); GR rows 14, 22, 23, 24 keep their support |
| WR 3 | applied | `ROLE.md`, Vietnam variant paragraph, token now `n/a (no payment-webhook surface in inventory)`, the one `web-weekly-report` writes |
| WR 4 | applied | `review-packet-vi.md` row 6.7, exact text from the `web-weekly-report` ledger |
| PG, reviewer NOTE | applied, stricter reading | D17 names Haravan and Sapo as platforms whose reopened terms bar automated access. `CAPABILITIES.md` 4b paragraph retitled `**Hosted store platforms read by hand only.**` and says no routine opens either admin, the person on duty records what the kit needs in `inventory/handover.md`; the `field.set` paragraph marks Haravan read by hand only like Sapo; `CONTRACT.md` 10.1 rule 4 says no routine opens the admin of a platform `CAPABILITIES.md` marks read by hand only (Haravan and Sapo), and keeps the one screen at a time reading for any other managed platform. `web-platform-guard` Step 3 already covers both bullets and is unchanged; `web-inventory-refresh` and `web-site-sweep` were already this strict |
| FR 7, FR 8, FR 9 | applied | `examples/changes/2026-03-05-fix-C-005.md`, exact texts from the `web-fix-runner` ledger; matches Step 7b lines 420, 450 to 454. `copy-check --dest plain`: PASS |
| FR 10 | applied | `review-packet-vi.md` row 3.5 |
| FR, outbound to the lead | applied | `web-dependency-run` Step 5.0 held no bullets any more; its remaining sentence that said `web-inventory-refresh` proposes a window from the seventh day before a sale day or `Tết` was replaced by: the window arithmetic lives in `INSTALL-PROMPT.md` Phase 4 step 5 and neither routine computes a window. `web-inventory-refresh` never proposed such a line, so the old sentence also named a behaviour no routine had |
