# Web Dev Employee Vietnam localization

## Status

`employees/web-dev-employee-vn` is at **1.9.0**, one minor step above the original `web-dev-employee` 1.8.1. All eight routines were localized from their own section of the Vietnamese expert form, and an integrator pass then applied the routines' outbound deferrals and shared file patch requests, wrote the Vietnam operating rules into `CONTRACT.md` section 10, and bumped the version. Nothing was committed, pushed or published. The original `employees/web-dev-employee` kit has no changes.

**This is an AI prepared draft.** Form section A1 names its author as an AI sub agent playing a Web Ops practitioner, research draft dated 23/09/2026, asking for review by a real practitioner. The `[CG]` marks are the owner's review decisions, not a practitioner's. **No clause here has been confirmed by a Vietnamese practitioner who runs websites for businesses.** `review-packet-vi.md` is the Gate 3 packet for that person.

## Inputs

| Input | Path |
|---|---|
| Form, original | `Downloads/khung-cg/ket-qua/Phieu-chuyen-gia_01_Web-Dev_da-dien.docx` |
| Form, extracted Markdown, the line numbers in every ledger | `Snagon-Agent/Khung-tri-thuc-ban-dia/01_Web-Dev/phieu-da-dien.md` (read only mirror of `Downloads/khung-cg/ket-qua/01_Web-Dev/`), 2169 lines; Phần A lines 52 to 254, B-1 to B-8 lines 257 to 2134 |
| Source index | `01_Web-Dev/literature/nguon.md`, S1 to S64, viewing date 23/09/2026 for every row |
| Decisions and style | `localization-reports/VN-DECISIONS.md` (D1 to D22), `localization-reports/STYLE-VI.md` |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md` and its `references/` and `scripts/` |
| Shared ledgers | `_shared/phan-a-ledger.md` (Phần A, 87 lines), `_shared/parsed-strings.md`, `_shared/glossary.md`, `_shared/patch-log.md` (this pass) |
| Routine ledgers | `web-inventory-refresh.md`, `web-site-sweep.md`, `web-fix-runner.md`, `web-dependency-run.md`, `web-platform-guard.md`, `web-weekly-report.md`, `web-guardrail-review.md`, `web-standup.md` |
| Backup of the variant and reports before the integrator pass | the session scratchpad, `vn/web-dev-employee-vn/variant.before-integrator` and `reports.before-integrator` |

## How it was done

1. **Phần A once, for all eight.** Every Phần A row was classified in `_shared/phan-a-ledger.md`, and the sources behind every adopted law, number and platform rule were re-opened on 24/09/2026, together with the terms of Zalo, Haravan and Sapo (D13). Each routine writer cited those rows by number and never re-decided them.
2. **One writer per routine.** Each writer extracted its Phần B, built a clause ledger before editing, re-opened any further source an ADOPT rested on, edited only the domain steps of its own `SKILL.md`, kept Step 0, the two guardrails, parsed strings and `## Corrections` byte for byte, mapped the form's B11 cases to routine lines, ran the routine checker and the kit's own `copy-check.mjs`, and wrote its outbound deferrals and shared file patch requests into its ledger rather than editing another file.
3. **The integrator pass.** 58 outbound deferrals were applied to their target routines where the clause carried a `[CG]` or a verified source, under the same editing rules, and declined otherwise; each is a row under `### From deferrals` in its target ledger. 37 shared file patch requests were applied in the order `CONTRACT.md`, `SCHEDULE.md` with `employee.json`, `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`, and logged in `_shared/patch-log.md`. Where two requests contradicted, the original behaviour was kept and the contradiction logged. Gate 8 was then written as `CONTRACT.md` 10.1, and the version was bumped.

## Per routine

Decision counts are those each writer recorded in its ledger (a line carrying two decisions counts under both, except in `web-weekly-report`, which counts the first). "From deferral" is the number of integrator rows added under `### From deferrals` in that ledger. Checker verdicts are the final runs of `check-localized-routine.mjs routine` on 24/09/2026, after the integrator pass.

| Routine | Form section | Ledger lines | ADOPT | MOVE | KEEP | WORDING | EXAMPLE | DEFER | REJECT | UNVERIFIED | From deferral | Size vs original | Checker |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| `web-inventory-refresh` | B-1, 257 to 525 | 96 | 43 | 0 | 37 | 5 | 4 | 7 | 7 | 7 | 22 | 145% | `PASS (0 fail, 0 warn)` |
| `web-site-sweep` | B-2, 526 to 804 | 107 | 39 | 4 | 32 | 3 | 1 | 19 | 3 | 18 | 9 | 132% | `PASS (0 fail, 0 warn)` |
| `web-fix-runner` | B-3, 805 to 1082 | 119 | 37 | 1 | 35 | 6 | 8 | 13 | 9 | 16 | 7 | 123% | `PASS (0 fail, 0 warn)` |
| `web-dependency-run` | B-4, 1083 to 1364 | 116 | 47 | 0 | 33 | 8 | 7 | 11 | 7 | 13 | 1 | 132% | `PASS (0 fail, 0 warn)` |
| `web-platform-guard` | B-5, 1365 to 1628 | 115 | 47 | 0 | 38 | 10 | 3 | 7 | 4 | 16 | 4 | 136% | `PASS (0 fail, 0 warn)` |
| `web-weekly-report` | B-6, 1629 to 1802, short form | 78 | 31 | 1 | 23 | 4 | 3 | 3 | 3 | 10 | 5 | 127% | `PASS WITH WARNINGS (0 fail, 2 warn)` |
| `web-guardrail-review` | B-7, 1803 to 1960, short form | 66 | 10 | 0 | 23 | 3 | 3 | 4 | 3 | 14 | 2 | 120% | `PASS (0 fail, 0 warn)` |
| `web-standup` | B-8, 1961 to 2134, short form | 75 | 24 | 0 | 26 | 6 | 5 | 7 | 1 | 10 | 10 | 124% | `PASS WITH WARNINGS (0 fail, 1 warn)` |
| Phần A, shared | A1 to A7, 52 to 254 | 87 | 33 | 9 | 16 | 6 | 0 | 10 | 2 | 12 | none | n/a | n/a |

**The three routine warnings, explained.** `web-weekly-report` line 477: `93,3%` is the invented figure in the fictional short block, on a line naming `health/checks.jsonl`, labelled fictional two lines above; every threshold in Step 4h is in words. `web-weekly-report` lines 186, 287, 468: quoted owner wording inside English instructions (the week labels, the `n/a (no field data)` gloss, the short block's first line). `web-standup`, section "what you own, and the two guardrails": one paragraph appended to `### The one card rule`, supported by form lines 1977, 2017 and 2030 `[CG]`, which narrows how a card closes; Guardrail 1, Guardrail 2 and the key rule are byte for byte the original.

## Gate 8: rules adopted in three or more routines

Written once, in English and with no legal number, as `CONTRACT.md` 10.1. Routines keep their own text.

| Rule in 10.1 | Routines that adopt it |
|---|---|
| 1. A person sends, and nothing records a send | `web-standup`, `web-weekly-report`, `web-platform-guard`, `web-inventory-refresh`, `web-guardrail-review`, `web-site-sweep`, `web-fix-runner` |
| 2. The calendar is the member's, and only the member's | `web-fix-runner`, `web-dependency-run`, `web-standup`, `web-weekly-report`, `web-guardrail-review`, `web-inventory-refresh` |
| 3. A lapsed `.vn` name is down, not in grace | `web-inventory-refresh`, `web-platform-guard`, `web-standup` |
| 4. A managed store platform or a page builder is never driven by software | `web-inventory-refresh`, `web-site-sweep`, `web-dependency-run`, `web-platform-guard`, `web-fix-runner`, `web-weekly-report` |
| 5. No identity paper and no one time code enters any file | `web-inventory-refresh`, `web-platform-guard`, `web-standup`, `web-guardrail-review` |
| 6. Roles, never people | `web-inventory-refresh`, `web-fix-runner`, `web-platform-guard`, `web-dependency-run`, `web-standup` |
| 7. Customer personal data is never copied, and exposure is the member's question | `web-site-sweep`, `web-fix-runner`, `web-standup`, `web-inventory-refresh`, `web-weekly-report` |
| 8. Money moves only by a person, and only the gateway proves a payment | `web-site-sweep`, `web-fix-runner`, `web-guardrail-review` |
| 9. No pirated or sent component is ever installed | `web-dependency-run`, `web-fix-runner`, `web-inventory-refresh` (the never tuneable seed, from a deferral) |
| 10. A provider's promise is not the business's measurement | `web-weekly-report`, `web-site-sweep`, `web-inventory-refresh`, `web-platform-guard` |
| 11. The member reads Vietnamese, and machines read English | all eight |
| 12. No legal threshold lives in this kit | all eight |

## Sources re-opened

The Phần A pass re-opened 34 form sources and three platform terms pages on 24/09/2026; the routine writers re-opened twelve more. The integrator adopted no claim that rests on a source not already re-opened by one of them, so it opened none.

| Source | Opened by | Verdict in short |
|---|---|---|
| S1, S2, S55 (.vn lifecycle), S7 (international names) | Phần A; S55 again by `web-inventory-refresh` | Confirmed. S55 exception: protected names and `.gov.vn` keep working for a period. S7 gives no day counts |
| S3, S4 (Thông tư 48/2025/TT-BKHCN) | `web-platform-guard` | Confirmed: holder records must be kept accurate and supplied when asked |
| S8, S60 (Luật 91/2025/QH15), S9 (Luật 122/2025/QH15), S10 (Nghị định 248/2026/NĐ-CP) | Phần A | Confirmed; S9 gives no seller site duties |
| S38 (Nghị định 248/2026 full text) | `web-inventory-refresh`; the official page would not render its PDF body, the LuatVietnam full text found by WebSearch was read | Confirmed on the alternative source; the transitional clause was not found and stays UNVERIFIED |
| S13 (Nghị định 356/2025) | `web-site-sweep` | **Not supported** for the personal data list it was cited for; the rule rests on `[CG]` |
| S18 (BKNS log locations) | `web-site-sweep` | Partly: log locations yes, rotation no |
| S20, S33 (cable faults, CDN outage), S53 (PageSpeed Insights), S32 (Core Web Vitals report) | Phần A; S32 by `web-weekly-report` | Confirmed |
| S21 (injected gambling links) | Phần A; again by `web-dependency-run` | Confirmed; "update only after cleanup" and "never install unknown components" are not on the page |
| S22 (injection signs) | Phần A | **Not supported**; unused |
| S23, S24, S26, S27 (payment callbacks and webhooks) | Phần A; S26 again by `web-guardrail-review`; S27 by `web-site-sweep` | S24, S26, S27 confirmed; S23 partly |
| S25, S50 (tinnhiemmang.vn) | Phần A | Confirmed; no automated access terms found |
| S28, S29 (uptime monitors) | `web-site-sweep` | Confirmed for intervals and history |
| S30, S31 (Zalo OA, Zalo Bot) | Phần A | Confirmed |
| S34, S35, S36 (peak season, Tết 2027 proposals, Saturday work) | Phần A; S35 and S36 again by `web-standup` | Confirmed; S35 also confirms the employer's advance notice rule |
| S42, S56 (certificate lifetimes) | `web-platform-guard` | Confirmed; no figure enters the kit |
| S43, S44, S45 (Mắt Bão OTP, identity papers, transfer) | Phần A; S43 again by `web-guardrail-review` | Confirmed |
| S46, S47 (Haravan, Sapo) | Phần A; again by `web-dependency-run` | Partly; S47 does not support "Sapo updates itself" |
| S49, S54, S58, S59, S63 (provider claims, price formula, holder invoicing, registrar list, backups) | Phần A; S54 again by `web-inventory-refresh` | Confirmed; S58 for iNET only |
| S57 (Vietnix backup update) | `web-fix-runner` | Does not support the 24 hour backup rule; conflicts with S63 |
| Zalo terms 4.7, Haravan terms 3.6 and 11.1(h), Sapo terms section 4 | Phần A | No automation of Zalo; no crawling of Haravan; Sapo own account only |

## Acceptance summary

Each routine ledger maps its form's B11 cases and the standard traps to routine lines. Across the eight: every trap for an invented number, an invented sent or done status, an instruction planted in a card, file or page, an unaccented Vietnamese request, and a second run in the same period passes by a named routine line. The partial results and gaps, after the integrator pass:

| Routine | Cases | Result |
|---|---|---|
| `web-inventory-refresh` | B11 1 to 12 | 10 pass. Case 4 (www to bare redirect) is an unmarked proposal. Case 7 (holder not the business) has no sourced action deadline |
| `web-site-sweep` | B11 1 to 12 | All met or met with a noted gap: case 1 sees "orders waiting to pay" only through a `payment-webhook` surface; case 7 never probes undeclared sites; case 8 keeps the resend minutes in `CAPABILITIES.md`, not in owner text |
| `web-fix-runner` | B11 1 to 12 | Case 3 (a change waiting over three days) now carried by `web-standup` Step 7b line 3. Case 6 partial (no pictures). Case 11 single price rule unverified |
| `web-dependency-run` | B11 1 to 12 | 11 pass; case 6 partial (no line cap); case 7 belongs to the sweep and the runner by design. Case 4 now works: `project_kind` has a writer |
| `web-platform-guard` | B11 1 to 12 | All pass; case 6 (owner asks a price) is outside the routine's inputs |
| `web-weekly-report` | B11 1 to 6 | Case 4 (payment P0) now counted from the sweep's `p0` field when the incident is on a `payment-webhook` surface; a checkout failure alone is P0 only when every declared path of the project failed |
| `web-guardrail-review` | B11 1 to 6 and Câu 4 | Case 6 gap: a change of mind still narrows a class under the inherited rule (the exemption is unmarked) |
| `web-standup` | B11 1 to 6 | Case 2 (Saturday) works once the member sets `mon-fri sat` on the row, which `SCHEDULE.md` section 3 now explains; the shipped row stays `mon-fri`. Case 3 (merged but production unchanged) now holds, because `CONTRACT.md` 2.4 points to the narrowing in 10.4 |

## Deferred and unresolved

- **Declined deferrals (13).** `web-standup`: the license reminder count line (no card field marks a license card) and closing a path card on two passes (a third mark `CONTRACT.md` forbids). `web-site-sweep`: probing the fix's route after a merge, probing the webhook path, and a `webhook: true` mark (all against the sweep's own Step 2 scope rule). `web-fix-runner`: setting `fix_class: payment` and writing `definition_of_done` (neither is one of its six writable fields). `web-inventory-refresh`: changing `days` for a Saturday sweep or standup (`CONTRACT.md` 2.1), and the OTP phone holder role (unmarked). `web-weekly-report`: presenting 99,5 percent as the member's operating target (contradicts the inventory refresh's own `[CG]` request that a target comes only from the member). `web-platform-guard`: the double card check (not applicable). The lead: re-asking a `held-by-member` package after 30 days (`CONTRACT.md` 2.6 says never re-carded).
- **Contradictions resolved by keeping the original.** Expiry window defaults: the platform guard and the standup agreed only on the `.vn` window, so `.vn domains: 45 days` was added and the certificate and plan lines stayed as shipped. Inventory field names: the inventory refresh's names stand, not the platform guard's proposal. Uptime target: none is presented.
- **Waiting on the lead.** The root `CHANGELOG.md` link and the installer registration (the kit checker's one FAIL, below). Whether to ship `mon-fri sat` as a default rather than a member edit. Whether the English pointer line at the foot of the brief stays (kept, as in every `-vn` kit).
- **Each ledger's own unresolved list** stands as written there, with the evidence that would unlock each proposal: unmarked clock times, the 24 hour backup rule, event triggers the closed schedule vocabulary cannot carry, per hour incident counts, test transactions (rejected, a spend), the Nghị định 52 transitional rule, and every unmarked threshold.

## Legal threshold candidates kept out of the kit (decision D11)

Candidates for one shared, dated Vietnam rules file. None is in a kit file; each routine applies the rule in words.

| Candidate | Source | Where the kit applies it in words |
|---|---|---|
| A `.vn` name unpaid 30 days after expiry is revoked; revocation processing about 15 days; protected names keep working 35 days | S1, S2, S55 | `web-inventory-refresh` A4b, `web-platform-guard` Step 4 and 8, `web-standup` 5d |
| A holder who does not supply requested records within 15 days can be suspended for 30 days | S4 (Thông tư 48/2025/TT-BKHCN Điều 12 khoản 3) | `web-platform-guard` Step 4 read 6 |
| A direct sales platform amends its notification within 20 working days of a domain change; it must have its notification confirmed before operating | S38, S10 (Nghị định 248/2026/NĐ-CP) | `web-inventory-refresh` A4e |
| A personal data violation is notified within 72 hours of discovery | S60 (Luật 91/2025/QH15 Điều 23 khoản 1) | `web-site-sweep` 5a and 6d, `web-standup` 7b |
| Effective dates: e-commerce law 01/07/2026, personal data law 01/01/2026 | S9, S8 | "now in force", no date |
| Employers announce the Tết plan to workers at least 30 days ahead | S35 | `web-standup` 5e, `web-inventory-refresh` A6 (only announced days) |
| VAT of 8 percent on a registrar's service part | S54 | Never stated; prices only from a screen read that run |
| Log retention periods in Luật 116/2025/QH15 and Nghị định 333/2026/NĐ-CP | form 752, 753 (not adopted) | Not applied |
| Zalo OA free message window and fees | S30 | The kit never uses an official account |

## Known gaps

- **Gate 3 not done.** No Vietnamese practitioner has read any clause. `review-packet-vi.md` is ready.
- **Gate 7 class B not run** (D6): no routine was run end to end against fictional fixtures.
- **`copy-check.mjs` does not see Vietnamese counts or unsourced Vietnamese amounts** (D6). Every routine applies the rule by hand, and the script must stay byte identical.
- **`scripts/guard.mjs` reads only the first `SCHEDULE.md` row for an id.** The original kit's advice to add a separate `sat` row would never be read; this variant tells the member to set `mon-fri sat` in the one row instead (tested against the guard's own day function). The original kit still carries the advice, which the maintainer may want to fix upstream.
- **New inventory values need a fresh first run or a filled `inventory/handover.md`.** An install made before 1.9.0 has no `## Thông tin thêm từng website` or `## Màn hình theo dõi` section, so `project_kind`, `merge_role`, staging and the four added surfaces stay absent and every routine behaves as the original until the member adds them.
- **Two routines may each file a card asking for sale day freezes** (`web-inventory-refresh` Step A7 item 9 and `web-dependency-run` Step 5.0). The standup dedupes on the same title from the same proposer, so the member may see two.
- **`web-platform-guard`'s per kind certificate defaults** apply only to kinds `policy/budgets.md` names no line for; the shipped `certificates: 14 days` line covers every certificate, so the free and paid certificate defaults act only after the member removes or splits that line.
- **`web-standup` keeps two new state keys** (`guardrail_widening_shown{}`, `overdue_named[]`) that are carried forward from Step 7b, because Step 0.2's table is protected and cannot list them.
- **P0 is judged from two facts only**: a `payment-webhook` incident, or every declared path of a project failing in one run. A failing checkout page alone is not P0, because no inventory field marks which path is the checkout. The review proposed a member set `p0_paths[]` (SS 7); the final pass declined it for lack of a member written source, see `## Review`.
- **`README.md` said v1.2.0** in the original while `VERSION` read 1.8.1; the variant now says v1.9.0. `employee.json` still names the original repository and lists no Vietnamese routes under `connections`.
- **The installer does not list the variant yet**: `node installer/cli.mjs list` prints nine kits and no `web-dev-employee-vn` until the lead wires it.
- A check that intermittently printed `selftests: FAIL (1)` during this pass passed on every rerun; see Checks.

## Files changed in this pass

| File | Change |
|---|---|
| `employees/web-dev-employee-vn/routines/*/SKILL.md` | All eight, by the routine writers; then the deferrals above in all eight. Step 0, the guardrails, parsed strings and `## Corrections` unchanged |
| `employees/web-dev-employee-vn/CONTRACT.md` | 2.3, 2.6, 2.7 and 2.8 rows and one sentence each where the file map had to be true in place; pointers in 2.3 and 2.4; 8.5 version check and upgrade line; section 10 new |
| `employees/web-dev-employee-vn/SCHEDULE.md` | 1.2 `conditional` row; section 3 Saturday paragraph; section 6 Friday day off paragraph. No row changed |
| `employees/web-dev-employee-vn/CAPABILITIES.md` | 4b five rows and two paragraphs; `field.set` platform terms; `perf.sample` lab and field; section 7 dependency run row |
| `employees/web-dev-employee-vn/ROLE.md` | 5.1 four rows and the `.vn` default; section 9 paragraph |
| `employees/web-dev-employee-vn/README.md` | Platform guard row, install note, intake paragraph, file tree, version, section "The person on duty" |
| `employees/web-dev-employee-vn/INSTALL-PROMPT.md` | `FILL THIS IN` lines 2 to 10; Phase 3 four surfaces; Phase 4 steps 4 to 6; Phase 5 cards; Phase 7 handover item |
| `employees/web-dev-employee-vn/AGENTS.md` | Vietnam variant paragraph |
| `employees/web-dev-employee-vn/examples/` | `brief-latest.md`, `board/REVIEW-BOARD.md`, `changes/2026-03-05-fix-C-005.md`, `health/incidents.jsonl`, `README.md` |
| `employees/web-dev-employee-vn/VERSION`, `employee.json`, `CHANGELOG.md` | 1.9.0, one entry for the Vietnam localization pass |
| `localization-reports/web-dev-employee-vn/` | This report, `review-packet-vi.md`, `_shared/patch-log.md`, the added table in `_shared/parsed-strings.md`, and a `### From deferrals` table in each routine ledger |

Final verifier pass, 24/09/2026: `CONTRACT.md` (2.3 handover row, 10.1 rule 4), `CAPABILITIES.md` (4b hosted store paragraph, `field.set` platform list), `ROLE.md` (one token), `INSTALL-PROMPT.md` (the `quality_bar` seed, twice), `examples/board/REVIEW-BOARD.md`, `examples/changes/2026-03-05-fix-C-005.md`, three routines (`web-inventory-refresh` headings and seed, `web-guardrail-review` template line, `web-dependency-run` Step 5.0 sentence and CMS handoff wording), and in this folder `README.md`, `review-packet-vi.md` (rows 3.5 and 6.7), `_shared/patch-log.md`, `_shared/glossary.md`, `_shared/parsed-strings.md`, `_shared/phan-a-ledger.md`.

Not touched: the original kit, every other kit, `RELEASES.md`, `scripts/`, any `## Corrections` text, the root `CHANGELOG.md`, `installer/`, `skills/`, `.claude/`.

## Review

Each routine had one independent review after the integrator pass. Every verdict was FIX, the fixer applied the findings in the routine and its ledger, and no second review was run (no routine was left at BLOCK).

| Routine | Verdict | Findings fixed | Second review | Left unresolved |
|---|---|---|---|---|
| `web-inventory-refresh` | FIX | 10 | not run | Heading renames (IR 6) and the Vietnamese `quality_bar` seed (IR 7) were requests for the lead; both applied in the final verifier pass below |
| `web-site-sweep` | FIX | 12 | not run | `p0_paths[]` (SS 7) declined in the final pass: a failed checkout page with a working home page still writes `"p0": false` (acceptance case 1, **Gap, medium**). The `inventory/handover.md` reader row (SS 6) applied |
| `web-fix-runner` | FIX | 17 | not run | None. FR 7 to FR 10 and the outbound request to `web-dependency-run` applied in the final pass |
| `web-dependency-run` | FIX | 14 | not run | None. Step 5.0 no longer describes a window computed by any routine |
| `web-platform-guard` | FIX | 17 | not run | None. The Haravan and Sapo reading was settled in the final pass (read by hand only, per D17) |
| `web-weekly-report` | FIX | 13 | not run | The one hundred check floor for the response time movement test rarely fires at about fifteen checks a week; now row 6.7 of the Gate 3 packet for the owner. Checker warnings: `93,3%` in the fictional short block, three quoted Vietnamese lines |
| `web-guardrail-review` | FIX | 13 | not run | None. GR 5, GR 6 and GR 7 applied in the final pass, so ledger rows 14, 22, 23 and 24 keep their support in Phần A row 19 |
| `web-standup` | FIX | 10 | not run | Checker warning: one narrowing paragraph under the one card rule in the shared section, justified in the ledger and never a relaxed rule |

**Final verifier pass, 24/09/2026.** The last and only writer applied the requests the review fixes left pending, then made the member's Vietnamese consistent across the kit. Each decision, with its exact span, is in `_shared/patch-log.md` under `## Final verifier pass, 24/09/2026`.

- Applied (15 requests): SS 6 (with `web-platform-guard` added as a reader of `inventory/handover.md`, since its Step 3 reads that file too), SU 6, IR 6, IR 7 with GR 7, GR 5, GR 6, WR 3, WR 4, the PG note, FR 7 to FR 10, and the outbound request on `web-dependency-run` Step 5.0.
- Declined (1): SS 7, `p0_paths[]`. No member written line exists that `web-inventory-refresh` could read the field from without changing a parsed `inventory/handover.md` row, so the field would have no writer.
- The PG note was settled on the stricter reading: `CAPABILITIES.md` 4b and `field.set` now both mark Haravan and Sapo as read by hand only, and `CONTRACT.md` 10.1 rule 4 says no routine opens the admin of such a platform. `web-platform-guard` Step 3, `web-inventory-refresh` and `web-site-sweep` already acted this way.
- Consistency fixes (the glossary names production `bản đang chạy`): in the `web-dependency-run` CMS handoff template, `web chính` became `bản đang chạy` twice, `Em chưa bấm trên web đang bán.` became `Em chưa bấm cập nhật nào trên bản đang chạy.`, and the version placeholder `[bản đang chạy]` became `[phiên bản hiện tại]` twice (with `[phiên bản mới]`), so the production term no longer names a version. `copy-check --dest plain` on the template: PASS. The four count forms (`thay đổi gộp nguyên`, `thay đổi gộp sau khi sửa`, `thay đổi đóng không gộp`, `lần lỗi lại`) are now in the glossary. No other term was found used two ways in a routine, `CONTRACT.md`, `ROLE.md`, `README.md` or the examples.

## Checks, run 24/09/2026 from the worktree root

| Check | Verdict line |
|---|---|
| `check-localized-routine.mjs --selftest` | `check-localized-routine: selftest PASS (34 checks)` |
| Routine checker, eight routines (final pass) | six `PASS (0 fail, 0 warn)`; `web-weekly-report` `PASS WITH WARNINGS (0 fail, 2 warn)`; `web-standup` `PASS WITH WARNINGS (0 fail, 1 warn)` |
| Kit checker with this report (final pass) | `FAIL (1 fail, 3 warn)`. The one FAIL is `root-changelog`: the root `CHANGELOG.md` has no link to `employees/web-dev-employee-vn/CHANGELOG.md`. That line is the lead's wiring step and outside this kit's write scope. The three warnings are the routine warnings above |
| `node .github/scripts/selftests.mjs` (final pass) | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` (final pass) | `no-dashes: PASS` |
| `node evals/run.mjs` (final pass) | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` (final pass) | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)` |
| `node installer/cli.mjs list` (final pass) | lists the English kits and `gtm-engineer-vn`; no `web-dev-employee-vn` line until the lead wires it |
| `copy-check.mjs --dest plain` on the files changed in the final pass | `examples/changes/2026-03-05-fix-C-005.md`, `examples/board/REVIEW-BOARD.md` and the `web-dependency-run` CMS handoff template: three `copy-check: PASS` |
| Dash scan over all 53 files of the variant and this report folder (final pass) | `no dashes` |
| `git status --porcelain -- employees/web-dev-employee` (final pass) | empty: the original kit is unchanged |

## How to install this variant

The public npm package does not contain `web-dev-employee-vn`, and `npx ai-employees upgrade web-dev-employee` must never be run on it: that is the English kit, and it would replace the Vietnamese routines. Once the lead has wired the variant into the fork's bundled installer, install it from a checkout of the fork:

```
git clone https://github.com/phantanphatdgteam-gif/ai-employees-VN.git
cd ai-employees-VN
git checkout feature/vn-localization
node installer/cli.mjs hire web-dev-employee-vn --to ~/ai-employees/web-dev-employee-vn
```

The branch must contain the variant, so it has to be committed and pushed first; until then, run the last line from this working copy after the lead's wiring. A later upgrade uses the same checkout: `node installer/cli.mjs upgrade web-dev-employee-vn --to <folder>`, then `--apply`, which is also the line `CONTRACT.md` 8.5 gives the member.
