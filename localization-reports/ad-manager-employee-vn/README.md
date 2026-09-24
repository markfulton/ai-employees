# Ad Manager Employee Vietnam localization

## Status

`employees/ad-manager-employee-vn` is at **1.9.0**, one minor step above the original `ad-manager-employee` 1.8.0 (D14). It is an **AI prepared draft**. The expert form for the Ad Manager role was **filled by an AI**: form section A1 names the author as an AI sub agent playing the Ads role, dated 23/09/2026, that has never run a real account and asks for review by a real practitioner. **No clause here has been confirmed by a Vietnamese practitioner.** The `[CG]` marks are the owner's review decisions on the form, not a domain expert's. Gate 3 (a real practitioner's review) is still open, and `review-packet-vi.md` is written for it.

Nothing was committed, pushed or published. The original `employees/ad-manager-employee` kit has no changes. The repository root `CHANGELOG.md`, `installer/`, `skills/` and `.claude/` were not touched: the lead wires every kit at the end.

## Inputs

| Input | Path |
|---|---|
| Form, extracted Markdown, the line numbers below | `Khung-tri-thuc-ban-dia/04_Ad-Manager/phieu-da-dien.md` (read only), Phần A at lines 51 to 259, B-1 to B-7 at lines 262 to 2234 |
| Source index | `04_Ad-Manager/literature/nguon.md`, viewing date 23/09/2026 on every row |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md`, its `references/` and `scripts/` |
| Decisions and style | `localization-reports/VN-DECISIONS.md` (D1 to D22 as of this pass), `localization-reports/STYLE-VI.md` |
| Phần A ledger, shared by all seven routines | `_shared/phan-a-ledger.md` |
| Glossary and parsed strings | `_shared/glossary.md`, `_shared/parsed-strings.md` |
| Routine ledgers | `ads-account-intake.md`, `ads-account-read.md`, `ads-creative-studio.md`, `ads-build-desk.md`, `ads-change-list.md`, `ads-creative-retro.md`, `ads-desk-standup.md` |
| Integrator log | `_shared/patch-log.md`: every shared file request, every outbound deferral (D1 to D60), every contradiction |

## How it was done

1. **Phần A once, for the kit.** 106 content rows of Phần A were classified in `_shared/phan-a-ledger.md` (ADOPT 31, MOVE 6, KEEP 22, WORDING 25, DEFER 6, UNVERIFIED 16), with the sources behind every adopted law, number or platform rule re-opened on 24/09/2026, and the platform terms re-opened for D13.
2. **One writer per routine.** Each routine was localized from its own form section, B-1 to B-7, with a ledger written before the edit: clause decisions, protected edits, schedule and numbers, acceptance cases, sources re-opened, checks. Routines stay in English; every line the member reads is Vietnamese; every parsed heading, id, status and `n/a (<reason>)` token stays in English with a fixed Vietnamese gloss after it. Step 0, the two guardrails and every `## Corrections` section are byte identical to the original.
3. **Integrator pass (this report).** Every outbound deferral was applied to its target routine where the clause carries a `[CG]` or a verified `[S#]`, otherwise declined, and recorded in the target ledger under "From deferrals (integrator pass, 24/09/2026)". Every shared file patch request was applied or declined in the lead's order, and logged. Where two requests contradicted, the original behaviour was kept, except the member's sale days, where three shapes of the same member data were reconciled on one heading. Gate 8 rules went into a new `CONTRACT.md` section 10. The version moved to 1.9.0. Totals: 60 deferrals (20 applied with an edit, 18 already present, 22 declined, none aimed at another kit) and 96 shared file request rows (28 applied, 68 declined, 65 of them schedule rows).
4. **Independent review (Gate 9).** After the integrator pass every routine had an independent reviewer pass and a fixer pass; `ads-account-intake` and `ads-change-list` returned BLOCK and had a second review. Each ledger records its findings and fixes under its fixer section. See Review.
5. **Final verifier pass.** The fifteen shared file requests the fixers left pending were applied, the owner facing Vietnamese was checked for consistency across the seven routines and `CONTRACT.md`, and every check was rerun (`_shared/patch-log.md`, `## Final verifier pass, 24/09/2026`).

## Routines

Decision counts are the primary decision per clause row, as each writer counted them over its own form section (the Phần A rows are counted once, above). "From deferrals" counts the rows the integrator added to that routine's ledger. Checker is `check-localized-routine.mjs routine`, run on the final variant after the integrator pass.

### `ads-account-intake` (B-1, form lines 262 to 559)

| ADOPT | KEEP | UNVERIFIED | EXAMPLE | WORDING | REJECT | DEFER | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|
| 33 | 25 | 19 | 15 | 8 | 4 | 3 | 119, plus 12 acceptance cases | 19: 12 applied, 2 already present, 5 declined | `PASS WITH WARNINGS (0 fail, 3 warn)` |

The three warnings are owner approved thresholds, not market figures: 30 percent, 20 percent and 30 percent in the monthly signal table (form line 299 Câu 1 `[CG]`). The creative pace tiers (879 and 889 `[CG]`) left the routine body in the fixer pass and now live in `CONTRACT.md` 10.2 `## Creative pace`. Size 98239 to 135257 bytes.

### `ads-account-read` (B-2, form lines 560 to 851)

| ADOPT | KEEP | prompt | UNVERIFIED | DEFER | WORDING | REJECT | MOVE | EXAMPLE | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 55 | 42 | 14 | 13 | 12 | 8 | 5 | 3 | 3 | 156 with split clauses, plus 12 acceptance cases | 14: 2 applied, 6 already present or no change asked, 6 declined | `PASS (0 fail, 0 warn)` |

Size 82041 to 106569 bytes.

### `ads-creative-studio` (B-3, form lines 852 to 1159)

| ADOPT | KEEP | WORDING | REJECT | UNVERIFIED | EXAMPLE | MOVE | DEFER | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|
| 47 | 49 | 12 | 7 | 14 | 5 | 1 | 1 | 136 | 8: 3 applied, 2 already present, 3 declined | `PASS (0 fail, 0 warn)` |

Size 74443 to 96476 bytes.

### `ads-build-desk` (B-4, form lines 1160 to 1455)

| ADOPT | KEEP | UNVERIFIED | EXAMPLE | WORDING | REJECT | MOVE | DEFER | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|
| 38 | 37 | 28 | 9 | 8 | 3 | 2 | 2 | 127, plus 12 acceptance cases | 6: 2 applied, 2 already present, 2 declined | `PASS (0 fail, 0 warn)` |

Size 81063 to 104853 bytes.

### `ads-change-list` (B-5, form lines 1456 to 1749)

| ADOPT | KEEP | UNVERIFIED | WORDING | EXAMPLE | DEFER | MOVE | REJECT | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|
| 37 | 43 | 17 | 12 | 8 | 7 | 5 | 2 | 131 | 7: 0 applied, 3 already present, 4 declined; plus the reader edit for the reconciled sale heading | `PASS WITH WARNINGS (0 fail, 8 warn)` |

The eight warnings are owner approved VND tiers and percentages (1568 and the B5 rules, `[CG]`) and fictional template figures. Size 71331 to 90718 bytes.

### `ads-creative-retro` (B-6, form lines 1750 to 2055)

| ADOPT | KEEP | UNVERIFIED | EXAMPLE | DEFER | REJECT | WORDING | MOVE | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|
| 13 | 31 | 21 | 17 | 8 | 6 | 5 | 0 | 113, of which 12 acceptance cases | 1: declined | `PASS WITH WARNINGS (0 fail, 1 warn)` |

The warning is a fictional template figure. Size 70549 to 89584 bytes.

### `ads-desk-standup` (B-7, form lines 2056 to 2234)

| ADOPT | KEEP | UNVERIFIED | WORDING | EXAMPLE | DEFER | REJECT | MOVE | Rows | From deferrals | Checker |
|---|---|---|---|---|---|---|---|---|---|---|
| 11 | 22 | 19 | 5 | 3 | 3 | 3 | 2 | 69, plus the acceptance group | 8: 2 applied, 4 already present, 2 declined; plus the reader edits for the sale heading and the `Xưng hô:` line | `PASS WITH WARNINGS (0 fail, 7 warn)` |

The seven warnings are fictional amounts in the owner facing sample brief. Size 79385 to 100375 bytes.

## Gate 8: the rules three or more routines share

Written once, in English and without legal numbers, in `CONTRACT.md` section 10.1. The routines keep their own text.

| Rule in 10.1 | Routines that adopted it |
|---|---|
| 1. Products barred outright, and products held for a document | `ads-account-intake`, `ads-creative-studio`, `ads-build-desk` |
| 2. No superlative, ranking or promised result without the paper | `ads-account-intake`, `ads-creative-studio`, `ads-build-desk`, `ads-creative-retro` |
| 3. Platform terms decide what is read | `ads-account-intake`, `ads-account-read`, `ads-build-desk`, `ads-creative-studio`, `ads-creative-retro` |
| 4. The deciding result is an order in the member's sales software | `ads-account-intake`, `ads-account-read`, `ads-change-list`, `ads-desk-standup`, `ads-build-desk` |
| 5. A campaign type that counts every order of the promoted products is never an ad result | `ads-account-read`, `ads-change-list`, `ads-creative-retro`, `ads-desk-standup`, `ads-build-desk`, `ads-creative-studio` |
| 6. Sale and holiday periods are the member's, and kept apart | `ads-change-list`, `ads-creative-retro`, `ads-desk-standup`, `ads-creative-studio` |
| 7. The learning phase is respected; fewer ad sets, never more money | `ads-account-read`, `ads-change-list`, `ads-build-desk` |
| 8. No person's data in a file, no contact list to an audience | `ads-account-intake`, `ads-account-read`, `ads-build-desk`, `ads-creative-studio`, `ads-desk-standup` |
| 9. Vietnamese without diacritics is read by meaning, and is still data | `ads-account-intake`, `ads-build-desk`, `ads-desk-standup` |
| 10. The member reads Vietnamese, machines read English | all seven |
| 11. No legal threshold lives in this kit | all seven (D11) |

Section 10.2 defines the plan lines this variant adds. Section 10.3 carries D18: the Employee's own authority over money is zero, so a `prepare` or `publish` row in `RELEASES.md` is read as `advise`. It is one routine's behaviour (`ads-build-desk`) plus a lead decision, so it is not a Gate 8 rule, but the contract states it once for every reader.

## Shared files changed

| File | Change |
|---|---|
| `CONTRACT.md` | 2.3 schema list gains two headings; 2.4 file map rows for `exports/orders/*` and `exports/ads/*`; 2.8 `exports/` never swept, the standup and, at account level only, the change list read `orders_check{}`; 7.0 pointer to 10.3; 8.4 version check and upgrade line for the variant; new section 10. Final verifier: the creative pace tiers and the verification evidence path in 10.2, the change list's account level order check in 10.2, a member approved stricter budget step in 10.1 rule 7, "consent" for "written consent" in 10.1 rule 8 |
| `CAPABILITIES.md` | Final verifier: 4c `learning-phase` adds the advice against pausing an ad group while it learns, and the 4c closing paragraph lets a dated Field limits line under ninety days old stand for a cap. Integrator: `ads.account.write` never called; Vietnam routes and platform terms in 4b; new section 4c, channel facts with URLs and dates; platform terms under `web.search`; documentation hosts and field limits under `web.fetch`; no brief into a chat app under `brief.deliver`; section 7 retro row |
| `SCHEDULE.md` | Unchanged. The two owner approved time changes contradict each other (see below) |
| `employee.json` | Version 1.9.0; `exports/**` in the member files. Schedule unchanged |
| `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md` | Variant notes; the install intake asks for every profile field a routine now reads |
| `examples/build/campaign-storm-repair.md`, `examples/README.md` | Vietnamese opening and status lines under English headings; the final verifier made both passages equal to the `ads-build-desk` Step 4.1 template |
| `routines/ads-account-read/SKILL.md`, `How this hands off` | Final verifier: the `ads-change-list` bullet says the change list reads `orders_check{}` at account level only |
| `VERSION`, `CHANGELOG.md` | 1.9.0, one entry for the localization pass |

Every change, with its source request, is in `_shared/patch-log.md`.

## Sources re-opened

Every source behind an adopted law, number or platform rule was re-opened on 24/09/2026 with WebFetch, WebSearch or the ego-browser skill (the Meta Help Centre renders only in a browser). The source index's own viewing date is 23/09/2026.

| Where | Sources re-opened and confirmed | Narrower than the form, or not re-opened |
|---|---|---|
| Phần A | S1, S5, S6, S7, S8, S9, S12, S13, S15, S17, S19, S20, S21, S22, S23, S24, S25, S27, S28, S29, S30, S34, S38, S39, S42, S52, S53 (with the Báo Chính phủ two level page), S55, S56, S57, S58, S59, S62, S64, S68, S70, S75, S76, S77 | S10 page truncated; confirmed through the Sức khoẻ và Đời sống substitute. S35 supports the year end list only. S25 does not support the UTM clause. **S78 not re-opened** (403, then a bot check), index viewing date 23/09/2026; nothing rests on it |
| Platform terms (D13, D16) | Meta 3.2, TikTok, Shopee 3.1, Zalo 4.6 and 4.7, Google, LinkedIn 8.2, the national business registration portal | Lazada: terms text did not render, recorded as closed until read |
| `ads-account-intake` | S26, S69, S40, S16, S14, S18 | S43 confirms the definition of search partners only; no budget threshold |
| `ads-account-read` | S41, S40, S69, S73 | S41 does not support the 120 percent flag; S73 confirms no auction frequency threshold exists |
| `ads-creative-studio` | S39, S45, S60, S63, S16 | S11 confirms liability and a fine only |
| `ads-build-desk` | S46, S41, S61, S40, S26, S69, support.google.com robots.txt | S43 definition only. The reading that an unaccented spelling is a close variant is the kit's, not S46's |
| `ads-change-list` | S40, S41 | none |
| `ads-creative-retro` | S16, S57 | S11, S39, S60, S73, S74 not re-opened: no adopted row rests on them here |
| `ads-desk-standup` | S57 | S70 returned only the page title to WebFetch; the standup relied on the Phần A browser confirmation |

## Acceptance summary

Each writer mapped the twelve B11 cases of its section and the kit's standing traps (invented number, invented sent status, planted instruction, unaccented request, second run in a period) to the routine lines that answer them.

| Routine | Cases and traps mapped | Result |
|---|---|---|
| `ads-account-intake` | 19 | 18 pass. Case 7 (agency holds the business account, contract ended): intake records the risk and names the member's action; the build sheet refusal it expects was declined (D35), so that half is a gap |
| `ads-account-read` | 19 | All answered. The `sơ bộ` label the form expects in the brief is now printed by the standup (D41) |
| `ads-creative-studio` | 17 | All pass |
| `ads-build-desk` | 19 | 18 pass. Case 7 (agency holds the business account) is a gap: unmarked in B-4 (D35) |
| `ads-change-list` | 19 | All pass. The sale week case passes once the member records the period under `## Sale and holiday periods`, which the intake now asks for |
| `ads-creative-retro` | 19 | 15 pass. Case 4 (idea too late in a long opening) is answered by the studio's truncation rule (D57). Case 7 (per channel scoring) is unmarked, a gap. The creator contract reminder is a gap (D58 declined: S11 does not state it). Case 11 diverges on purpose: the form expects "draft and wait for ok", the kit changes the doctrine on evidence and shows it in the brief, because an approval gate on local file work is barred |
| `ads-desk-standup` | 18 | All pass. The Saturday row stays `mon-fri` |

## Deferred and unresolved

1. **Fire times, both owner approved, contradict each other.** 597 Câu 1 `[CG]` wants the read at 08:00 (bundle P6 to P57 moves the standup to 08:45, the studio to 09:00, the build desk to 10:00). 2099a `[CG]` wants the standup at 07:45. The standup reports the rows the read appends that morning, so both cannot hold. The shipped times stay. Review packet question 1.
2. **Saturday.** A2 69 `[CG]` and 2099b `[CG]` want a Saturday read and brief. It needs the protected Step 0.1 sentence ("it runs on weekdays") changed in two routines, which is the lead's ruling. A second read on the next day (597, 1493c `[CG]`) needs a new row.
3. **Order counts per ad set.** `ads-account-read` writes account level order counts once into `orders_check{}` in its state (Step 5.5). `ads-change-list` and `ads-creative-retro` expected per object order keys on metrics rows. The requests contradict, so no per row key was written. After its review BLOCK, `ads-change-list` reads `orders_check{}` for the account's cost per counted order, at account level only (`CONTRACT.md` 2.8 and 10.2); the retro keeps its `n/a` path, and the standup prints `orders_check{}`. Per ad set order counts still do not exist. Unlocking it needs Step 5.5 of the read and Step 1.2 of the change list redesigned together, with the append only ledger rule kept.
4. **Revenue after returns** as the deciding ratio (1289, 2223b `[CG]`): no revenue field exists anywhere; depends on item 3.
5. **Owner placement policy** (Câu 12, 1352 `[CG]`): needs its own heading, because `## Networks and placements` holds observed values the read compares daily.
6. **Business account held only by an agency** (B11 case 7): recorded by intake; no build stop without a marked B-4 clause.
7. **Human pause trigger** (A5.11 217, the 150 percent rule): deferred, as Phần A decided. The kit reports; the member's rule decides what a person does.
8. **Search partners off, TikTok budget step thresholds as defaults, the 10 million đ search partner threshold, the 15 million đ placement tier**: unsupported by the re-opened sources, kept as proposals.
9. **The unmarked B-section clauses** (Zalo send windows, reminder cadences, 30 line Zalo formats, invoice collection): not adopted (D10, D9, UNVERIFIED rows in each ledger).

## Legal threshold candidates kept out of the kit (decision D11)

None of these is in a kit file. They are candidates for one shared, dated Vietnam rules file, as in `chief-of-staff-vn`, if the lead decides to create one.

| Candidate | Source in the form's index |
|---|---|
| Alcohol strength barred from advertising, and the infant age for breast milk substitutes | S9 (Báo Chính phủ, NĐ 87/2026) |
| Fines for superlatives without documents, doubled for organisations | S9, S10 through its substitute |
| Fines for KOL and KOC false advertising | S11 |
| Handling time for health supplement advertising confirmation, and the issuing authority from 01/07/2026 | S6 |
| Effective dates: Luật 75/2025/QH15, NĐ 87/2026, NĐ 342/2025, Thông tư 03/2026/TT-BYT, the personal data law | S1, S9, S5, S7, S12 |
| Zalo OA promotional message caps per follower, the 12 week violation window, the broadcast send window | S30, S55 |
| Market figures: COD share, refusal and return rates, channel spend shares, user counts, vendor prices, Shopee bid figures | S20, S21, S22, S27, S34, S47 to S51, S54, S79, S80 |

Platform limits (character counts, budget step limits, the monthly multiplier, minimum budgets) are platform facts, not legal thresholds. They live once, in `CAPABILITIES.md` sections 4c and `web.fetch`, each with its URL and the date it was read.

## Known gaps

- **Gate 3 is open.** No Vietnamese practitioner has confirmed any clause. `review-packet-vi.md` is the packet.
- **Gate 9 is recorded, by AI reviewers only.** Every routine had an independent AI review and a fixer pass (see Review). No human reviewer has read the kit.
- **Gate 7 class B** (a real agent run on fictional data) was not run (D6).
- **`copy-check.mjs` does not check a Vietnamese `đ` amount or a Vietnamese count for a source** (D6). Scripts stay byte identical, so a person reads each money line.
- **`README.md` still says "This kit is v1.2.0"** under Version and updates, inherited from the original 1.8.0 kit; left as shipped, the `VERSION` file is the truth.
- **`employee.json` `repository`** still points at the original project. The fork owner decides where Vietnamese field reports go.
- **The root changelog link and the installer registration** are missing until the lead wires the kit, so the kit checker fails on `root-changelog` and `node installer/cli.mjs list` does not show the variant. Both belong to the lead's wiring step.
- **Sales software terms** (Pancake, Nhanh.vn, KiotViet, Sapo) were not re-opened, so every sales software route is export only.
- **The diacritic reading of S46** (an unaccented spelling is a close variant) is the kit's interpretation and needs a practitioner.

## Review

Independent reviewer passes on 24/09/2026, after the integrator pass. Each reviewer read one routine against the original, the form, the ledgers and the shared files; a fixer then edited only that routine and its ledger and sent any shared file change to `_shared/patch-log.md`. The final verifier applied those requests.

| Routine | First review | Fixed | Second review | Fixed | Unresolved after review |
|---|---|---|---|---|---|
| `ads-account-intake` | BLOCK (1 BLOCK, 11 FIX, 2 NOTE) | 14 | FIX (1 FIX, 3 NOTE) | 3 | None in the routine. The BLOCK (the official messaging account read off its own screens) is fixed in Step A4.6; its `CONTRACT.md` 10.2 wording (intake 7) and the creative pace tiers (intake 6) were applied by the final verifier. B11 case 7, the build refusal for an agency held business account, stays declined (D35) and open for Gate 3 |
| `ads-account-read` | FIX | 15 | none | 0 | None. The handoff line for `ads-change-list` was updated by the final verifier |
| `ads-creative-studio` | FIX | 14 | none | 0 | None. Consent (FIX 3) and the dated caps (NOTE 14) were applied to `CONTRACT.md` and `CAPABILITIES.md` by the final verifier. D56 reads UNVERIFIED |
| `ads-build-desk` | FIX | 10 | none | 0 | None. The example sheet and the `chưa có video` registration were applied by the final verifier. B11 case 7 stays a gap (D35) |
| `ads-change-list` | BLOCK (1 BLOCK, 9 FIX, 4 NOTE) | 14 | FIX (6 FIX, 2 NOTE), first BLOCK confirmed resolved | 7 | None in the routine. The BLOCK (order counts from keys nobody writes) is fixed in Step 1.2 through `orders_check{}`; its seven shared file requests (change list 4 to 10 and the outbound row) were applied by the final verifier. 1586c, 1591 (spend) and 1596a stay UNVERIFIED for Gate 3 |
| `ads-creative-retro` | FIX | 16 | none | 0 | None |
| `ads-desk-standup` | FIX | 10 | none | 0 | None |

No BLOCK is unresolved. What stays open is outside the routines: Gate 3 (no Vietnamese practitioner has confirmed a clause), the two contradicting schedule bundles and the Saturday ruling (Deferred and unresolved, items 1 and 2), and the lead's wiring step.

**Final verifier, consistency of the owner facing Vietnamese.** Every term in `_shared/glossary.md` sections 1 to 5 and the STYLE-VI vocabulary was searched across the seven routines, `CONTRACT.md`, `CAPABILITIES.md`, the examples and the install files: one spelling per word under the kit's "oá, oé, uý" rule (no `hủy`, `khóa`, `hóa`, `tùy`, `khỏe`, `hòa` form anywhere), `boom hàng` never `bom hàng`, `hạn mức chi` never `trần ngân sách`, `nhóm quảng cáo` and `mẫu quảng cáo` never `nhóm QC` or `mẫu QC`, the fixed phrases `chờ pháp lý duyệt`, `chưa khớp địa giới`, `không so được với tuần liền trước`, `chưa có video` and the `Xưng hô:` line spelled identically wherever they occur, and every `n/a (<reason>)` gloss equal to its section 5 row. No plainly inconsistent wording was found, so no wording edit was made in this pass. The glossary gained the counted order terms and four glosses the change list already used (change list 9 and 10).

## Checks, run 24/09/2026 from the worktree root (final verifier)

| Check | Result |
|---|---|
| `check-localized-routine.mjs kit` with this report | `FAIL (1 fail, 19 warn)`; the failure is `root-changelog`, the lead's wiring step |
| `check-localized-routine.mjs routine`, seven routines | `ads-account-read`, `ads-creative-studio`, `ads-build-desk`: `PASS (0 fail, 0 warn)`. `ads-account-intake`: `PASS WITH WARNINGS (0 fail, 3 warn)`. `ads-change-list`: `PASS WITH WARNINGS (0 fail, 8 warn)`. `ads-creative-retro`: `PASS WITH WARNINGS (0 fail, 1 warn)`. `ads-desk-standup`: `PASS WITH WARNINGS (0 fail, 7 warn)` |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)` |
| `copy-check.mjs --file examples/build/campaign-storm-repair.md`, `--dest form` and `--dest plain` | `copy-check: PASS` both |
| Dash scan over this report folder and every file of the variant (53 files) | `no dashes` |
| `git status --porcelain -- employees/ad-manager-employee` | empty: the original kit is unchanged |
| `node installer/cli.mjs list` | runs; `ad-manager-employee-vn` is not listed until the lead registers it |

Kit checker verdict line: `FAIL (1 fail, 19 warn)`. The one failure is `root-changelog`: the repository root `CHANGELOG.md` has no link to `employees/ad-manager-employee-vn/CHANGELOG.md` yet, which the lead adds when wiring every kit. The 19 warnings are owner approved thresholds and fictional template amounts inside the routines (intake 3, change list 8, retro 1, standup 7); none is a failure. Every other kit rule passes.

## How to install this variant

The public npm package does not contain `ad-manager-employee-vn`. Once the lead wires the kit into the fork's bundled installer, install it from a copy of the Vietnam fork:

```
node installer/cli.mjs hire ad-manager-employee-vn --to ~/ai-employees/ad-manager-employee-vn
```

Then open the agent in that folder and say "install the Ad Manager from this folder". A later upgrade uses the same checkout: `node installer/cli.mjs upgrade ad-manager-employee-vn --to <folder>`, then `--apply`. Never run `npx ai-employees upgrade ad-manager-employee` on this folder: that is the English kit and it would replace the Vietnamese routines.
