# Shared file patch log: ad-manager-employee-vn

Integrator pass, 24/09/2026. Every `## Shared file patch requests` row from the seven routine ledgers, in the order the lead set: `CONTRACT.md`, then `SCHEDULE.md` with `employee.json` and every stale shipped time, then `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`, then the report files under `_shared/`. Then every outbound deferral, D1 to D60. New `CONTRACT.md` material sits in section 10, "Vietnam operating rules", placed just before Appendix A, and every existing section number is unchanged.

Status words: **applied** (exact text, at the requested anchor), **applied, relocated** (same meaning, placed in `CONTRACT.md` section 10 because the lead asked for new material there), **applied, merged** (combined with another request that said the same thing), **applied, reconciled** (two or more requests described the same member data in different shapes; one shape serves every reader), **applied, changed** (the reason names what differs), **declined**.

Row counts: 96 request rows (intake 5, account read 57, build desk 6, change list 3, creative retro 6, creative studio 3, desk standup 16). 28 applied, 68 declined. 65 of the 68 are schedule rows: the two time bundles, which contradict each other (64 rows), and the conditional Saturday row.

## CONTRACT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| intake 3, studio 2 | A Vietnamese advertising refusal after Guardrail 2, with the alcohol strength and the infant age | applied, relocated, merged and changed | Section 10.1 rules 1 and 2. **The two legal thresholds are left out** (D11, and the lead's Gate 8 rule: no legal numbers). `ads-creative-studio` Step 4.2a item 1 already says: where `CONTRACT.md` states no threshold, treat every alcoholic drink and every milk product for infants and young children as barred, so the rule is stricter without the numbers, never looser. The intake sentence that pointed at "section 7" for the thresholds now points at section 10.1 |
| intake 4 | 2.3, the Vietnamese lines under the plan headings | applied, relocated | Section 10.2, `plan/offer.md`, `plan/account-map.md`, `plan/measurement.md` |
| account read P1 | 2.4 table, rows `exports/orders/*` and `exports/ads/*` | applied | In place, a file map row belongs in the file map. `employee.json` lists `exports/**` as member files, integrator addition, so an upgrade never touches them |
| account read P2 | 2.3, `## Conversion source` five lines | applied, relocated | Section 10.2, `plan/measurement.md` |
| account read P3 | 2.8, `ads-change-list` reads `orders_check{}` | declined | `ads-change-list` does not read it: its own design reads order counts from metrics rows (change list request 1). The two contradict, so neither sentence was written. Integrator addition in its place: 2.8 says `ads-desk-standup` reads `orders_check{}`, which it now does (D40) |
| account read P4 | 2.8, never move `exports/` | applied | In place |
| build desk P2 | 7.0, `prepare` and `publish` read as `advise` | applied, relocated | Section 10.3, exact text, plus one closing sentence on who acts on a payment restriction. A one line pointer to 10.3 was added at the end of 7.0, and `CAPABILITIES.md` 4c now cites sections 7.0 and 10.3 |
| change list 1 | 2.4, five order count keys on metrics rows | declined | Contradicts `ads-account-read` Step 5.5, which writes account level counts once into `orders_check{}` in its state after the rows are appended; `metrics/daily.jsonl` is append only and no routine writes the keys. Kept at the original of this pass |
| change list 2, retro 1, standup P13 | 2.3, a heading for the member's sale days: `## Sale and holiday weeks` with `YYYY-MM-DD to YYYY-MM-DD: <name>`; `## Sale and holiday periods` with `\| sale \|` or `\| holiday \|`; `sale period:` lines under `## Working days and hours` | applied, reconciled | One heading, `## Sale and holiday periods`, typed lines (the retro's shape), listed in 2.3 and defined in 10.2. Neither shape existed in the original, all three rest on owner approved clauses (1694a, 1787, 2099d), and the retro needs the `sale` or `holiday` type the other two lack. Reader edits, wording only: `ads-change-list` Step 1.2, file map and failure row; `ads-desk-standup` file map and Step 8. `ads-creative-studio` reads the same heading (D55) |
| retro 2 | 2.4, creative level `orders_refused` and `orders_returned` | declined | Same contradiction as change list 1 |
| studio 1 | 2.3, `## Creative pace` | applied | Heading in the 2.3 list, schema in 10.2 |
| integrator | 8.4, the version check read the English kit and the upgrade line would install it | applied | Same repair as `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn`: the check reads `employees/ad-manager-employee-vn/`, and the upgrade line uses `node installer/cli.mjs upgrade ad-manager-employee-vn`. `ads-account-intake` Step B3a now fetches the variant's own `VERSION` path |
| integrator, Gate 8 | Section 10.1, the rules three or more routines share | applied | See the report's Gate 8 table |

## SCHEDULE.md, employee.json, stale times

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| account read P6 to P57 | Bundle, all or none: account read fires 08:00, standup 08:45, studio 09:00, build desk 10:00, with windows, `employee.json`, `CONTRACT.md` 1 and 1.4, `README.md`, `CAPABILITIES.md` 9 | declined | Contradicts the standup bundle below on the standup's fire (08:45 against 07:45). Both rest on owner approved clauses (597 Câu 1, "đọc lúc 8:00"; 2099a, 07:45). They cannot both hold: the standup reports the rows the read appends that morning, so a 07:45 standup after an 08:00 read would print the previous day. Kept at the shipped times; question 1 of the review packet asks the owner to choose |
| standup P1 to P9 | Bundle: standup fires 07:45, window from 07:30 | declined | Same contradiction |
| standup P10 | Standup `days` `mon-fri, sat` | declined | Conditional on the lead's ruling on the protected Step 0.1 sentence ("it runs on weekdays") in both routines, and on a Saturday read row. Not given in this pass |
| account read, outbound to lead | Saturday read and a second read on the next day | declined | Same Step 0.1 ruling; a second daily read needs a new row (D23, D34) |
| stale time scan | Every file for a changed fire time | none needed | No fire time changed, so no shipped time went stale. The browser spacing rule holds as shipped |

## CAPABILITIES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| intake 1 | 4b, Vietnam read only routes: registration portal, sales software, Vietnamese UI names | applied | After the TikTok and Microsoft paragraph, exact text, confidence `unknown` |
| account read P5 | 4b, a table of routes, platform terms and platform numbers | applied, merged | After intake 1. The rows for the monthly multiplier, the budget step limits, the account spending limit and the every order campaign type are replaced by one row pointing at section 4c, because the same figures with the same sources sit there; a figure lives in one place. The form line citation became "Expert form" so no source marker enters a kit file |
| change list 3 | 4b, platform limits the change list reads | applied, merged | The figures are 4c rows `learning-phase` and `average-daily-budget`, with the same URLs and dates. Its rule, "applies the stricter of these and its own rules", is in the 4c introduction, which now names `ads-account-read` and `ads-change-list` as readers |
| retro 3, standup P12 | 4b, campaign types that credit every order of the promoted product | applied, merged | One paragraph after the account read table, naming all four readers; the figures stay in 4c `shop-campaign-default` |
| build desk P1 | New section 4c, channel facts a build sheet names | applied, changed | Exact table and closing paragraph, after 4b and before section 5. Two changes: the introduction names the two other readers (change list 3), and the last sentence cites `CONTRACT.md` sections 7.0 and 10.3 |
| integrator | 4b table, `ads.account.write` row | applied | One sentence: in this variant it is never called (`CONTRACT.md` 10.3). The row otherwise still said the build desk calls it under a release row |
| intake 2 | `web.search`, the platforms whose terms forbid automated reading | applied | Exact text after the "Only `ads-account-intake` uses this" paragraph |
| studio 3 | `web.fetch`, platform terms and documentation hosts, field limits read by a person | applied | Exact block after the "It cannot reach anything behind your own login" paragraph. Consistent with the intake 2 paragraph and 4c: Google help pages open, Meta, TikTok, Shopee and Zalo closed, Lazada closed until read |
| standup P11 | `brief.deliver`, no route posts the brief into Zalo | applied | Exact text after the "Absent every route" paragraph |
| standup P8a, P8b, P9 | Section 9 times for the 07:45 standup | declined | Part of the declined schedule bundle |
| retro 4 | Section 7 row for `ads-creative-retro` | applied | Exact text |

## ROLE.md, README.md, INSTALL-PROMPT.md, AGENTS.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| build desk 3 | `ROLE.md`, the operating modes sentence | applied | Exact text |
| build desk 4 | `README.md`, "In this Vietnamese variant the row does not switch it on" | applied | New paragraph after "There is no other switch" |
| integrator | `README.md`, install note and the extra intake questions | applied | Top of `## Install`: the npm package does not contain the variant, the fork's installer line, never the English upgrade line. One sentence in "What it needs from you" names the questions this variant adds |
| build desk 5 | `INSTALL-PROMPT.md`, "In this Vietnamese variant that row is read and not acted on" | applied | After "When you want it to publish" |
| integrator, lead step 2 | `INSTALL-PROMPT.md`, the intake asks for every profile field a routine now reads | applied | Summary paragraph under "What it asks you"; Phase 1 item 6, no scan of a platform whose terms forbid it; Phase 2 item 4 names the payment settings and event dataset screens, new item 6 reads administrators, billing state and official account verification; Phase 3 default Monday to Saturday and seven more questions (closing model, sales software and statuses, products and documents, delivery provinces and communes, form of address and call hours, sale and holiday periods, creative pace); Phase 4 items 3 and 6 name the new lines. Spending ceilings were already asked; no routine of this kit reads a maximum discount, so none is asked |
| integrator | `AGENTS.md`, variant paragraph | applied | Under the title: where the rules live, zero authority over money, never upgrade from npm |

## examples/

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| build desk 6 | `examples/build/campaign-storm-repair.md`, Vietnamese opening lines and status line | applied | Exact lines; headings unchanged. `copy-check.mjs --dest form` and `--dest plain`: PASS. `examples/README.md` row says so |

## Report files under `_shared/`

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| intake 5, retro 5 | `parsed-strings.md` section 5, the new machine strings | applied | One table, with every string the integrator pass added (`Xưng hô:`, `sets_per_week`, `payment restricted`, `results include organic and affiliate orders`, `orders_check{}` read by the standup) and the declined row keys named as not adopted |
| retro 6 | `glossary.md` section 5, glosses | applied | Six retro rows, plus the eight intake glosses the intake ledger listed |

## Outbound deferrals

Decided under the lead's rule: applied to the target routine where the clause carries a `[CG]` or a verified `[S#]`, under the writers' editing rules, otherwise declined. Each row is also recorded in the target routine's ledger under "From deferrals (integrator pass, 24/09/2026)". No deferral in this kit is aimed at another kit, so there are no cross kit notes.

| Id | From | To | Form line and marker | Clause | Status | Where, or why not |
|---|---|---|---|---|---|---|
| D1 | `ads-account-read` | `ads-account-intake` | 624 `[S25]`; A3 99 `[S22]`, A3 100 `[S21,S34]`, A5 146 `[S23,S24,S25]` | Five lines under `## Conversion source`: software, send mode, counted statuses, cost per order basis, ads source label | ADOPT, from deferral | Step A5 table, sales software row; Step A6 item 6 `## Conversion source` paragraph. Sources verified in Phần A. `ads-account-read` Step 2.2 reads these and never infers one |
| D2 | `ads-account-read` | `ads-account-intake` | 608 `[S68,S70]`, 609 `[S23,S25]` | Name the billing or payment screen and the event dataset screen under `## Read screens` | ADOPT, from deferral | Step A4.6 item 4. Sources verified in Phần A; the read routine opens both screens (Step 3, Step 7 item 5) |
| D3 | `ads-account-read` | `ads-account-intake` | D16, Phần A Zalo terms row (no `[CG]`, no `[S#]`) | Mark each account `session` or `export only` and tell the member to drop exports | DECLINED | none. No `[CG]` or `[S#]` on the clause. The route is decided per platform in `CAPABILITIES.md` section 4b, which `ads-account-read` reads directly; the export folders are named in `CONTRACT.md` 2.4 and 10.2 and in `INSTALL-PROMPT.md` |
| D4 | `ads-account-read` | `ads-account-intake` | 775, none | Seed owner banned words `ngon`, `chắc chắn lãi`, `em đã tắt giúp anh` | DECLINED | none. Unmarked |
| D5 | `ads-build-desk` | `ads-account-intake` | Câu 12, 1352 `[CG]` | One member policy line under `## Networks and placements`: feed and reels; audience network off below a member figure | DECLINED | none. `## Networks and placements` holds the observed `on` or `off` values that `ads-account-read` compares every morning (Step 6); a policy line there would be read as a recorded control value. It needs its own heading in `CONTRACT.md` 2.3 first. Question 4 of the review packet |
| D6 | `ads-build-desk` | `ads-account-intake` | 1419 `[S28]`, A4 135 | Record the official messaging account and its verification state | ADOPT, from deferral | Step A4.6 item 6. S28 verified in Phần A. `ads-build-desk` Step 2.6 check 4 reads it |
| D7 | `ads-build-desk` | `ads-account-intake` | A6 240 `[S5]`, A7 256 `[S6]`, 1406, 1446 `[S6]` | Record each product's content confirmation, number and date, in one named place | ADOPT, from deferral, merged with D16 | Step A5 claims rule, new bullet: verbatim under `## Member claims`. Build Step 2.6 check 2 reads any plan file, and `ads-creative-studio` reads `## Member claims`, so one place serves both. Not a second line under `## What is sold` |
| D8 | `ads-build-desk` | `ads-account-intake` | 1203, Câu 11 `[S53]`, A3 102 | Commune and ward list under `## Countries sold into`, never a district | KEEP, already present | Step A6 item 3, `## Countries sold into` bullet. No edit needed |
| D9 | `ads-change-list` | `ads-account-intake` | 1510 `[S35]`, 1694a `[S35+CG]`, Phần A 103 | `## Sale and holiday weeks`, lines `YYYY-MM-DD to YYYY-MM-DD: <name>` | ADOPT, from deferral, reconciled | Step A5 table row; Step A6 item 3 `## Sale and holiday periods`. Three writers proposed three shapes for the same member data (D9, D12, D18). One heading, `## Sale and holiday periods`, with a `sale` or `holiday` type per line, serves all four readers; `ads-change-list` and `ads-desk-standup` now read it (see `_shared/patch-log.md`) |
| D10 | `ads-change-list` | `ads-account-intake` | 1535c `[CG]` | A sale budget as its own line under `## Campaign allocations` | DECLINED | none. `## Campaign allocations` lines must sum to at most `## Daily cap` (`CONTRACT.md` 2.3), and `ads-account-read` Step 7 item 2 compares each campaign with its line. A separate sale pot outside the cap needs its own heading and reader first |
| D11 | `ads-change-list` | `ads-account-intake` | 1606e `[S42]`, Phần A 147 | Keep `## Automatic recommendations` current; a `change` card where it reads on | DECLINED | none. Intake already records the control each month, and its own rule leaves any proposal to change a setting to `ads-change-list`. The build sheet already tells the member to switch automatic application off (Step 4.1, `CAPABILITIES.md` 4c) |
| D12 | `ads-creative-retro` | `ads-account-intake` | 1787 Câu 1 `[CG]`; Phần A 103 `[S35+CG]` | `## Sale and holiday periods`, typed lines, `Tết` as two periods, never inferred | ADOPT, from deferral | Step A5 table row; Step A6 item 3. The shape every reader now uses |
| D13 | `ads-creative-retro` | `ads-account-intake` | 1853 `[S10,S15]` | A rejected phrase or image type named in a retro card joins `## Banned words` | ADOPT, from deferral | Path B, Step B2 table, `plan/voice.md` row. S10 (through its substitute) and S15 verified in Phần A. Seed phrases only, never the bare `nhất` |
| D14 | `ads-creative-studio` | `ads-account-intake` | 879 `[CG]`, 889 `[S39,S58+CG]`, Phần A A2 70 `[CG]` | Ask the weekly creative pace with the owner approved budget tiers; write `## Creative pace` | ADOPT, from deferral | Step A5 table row; Step A6 item 3. Never derived from spend. Fixer pass: the owner approved tiers left the routine body; Step A5 points at `CONTRACT.md` 10.2 `## Creative pace`, which carries them since the final verifier applied patch request intake 6 |
| D15 | `ads-creative-studio` | `ads-account-intake` | A3 106 `[S1,S10]`, 959 `[S10]`, 1069 `[S10,S15,S16,S17]` | Seed `## Banned words` with the superlative phrases | KEEP, already present | Step A6 item 1. No edit needed |
| D16 | `ads-creative-studio` | `ads-account-intake` | 961 `[S6]`, 1105 `[S6,S7,S8]`, A7 256 `[S6]`, A6 240 `[S5]` | State each product's category; the member's content confirmation goes under `## Member claims` | ADOPT, from deferral | Step A5 table, products row; claims rule bullet. Intake's inherited rule already writes `## Member claims` only from the member's own words in the session, which is what the deferral asks |
| D17 | `ads-desk-standup` | `ads-account-intake` | 2104a `[CG]`, 2099b `[CG]` | Default Monday to Saturday and three cards; owner windows as clock times | ADOPT in part, from deferral | Step A5 table, working days row. Monday to Saturday adopted. The clock windows are DECLINED: a clock time never enters a routine body, and the member's own hours are recorded as they give them |
| D18 | `ads-desk-standup` | `ads-account-intake` | 2099d `[CG]`, Phần A A3 103 `[S35+CG]` | `sale period: <ISO> to <ISO>` lines under `## Working days and hours` | ADOPT, from deferral, reconciled | `## Sale and holiday periods` (see D9). Same member data as D9 and D12; `ads-desk-standup` Step 8 now reads a `sale` line there |
| D19 | `ads-desk-standup` | `ads-account-intake` | STYLE-VI Address; Phần A A7 257 WORDING (no marker) | Record the form of address in one plan file line | ADOPT as WORDING, from deferral | Step A5 table, working days row; Step A6 item 3, `Xưng hô:` line. Presentation only, as decision D21 allowed for `chief-of-staff-vn`. `ads-desk-standup` Step 8 reads the line |
| D20 | `ads-account-intake` | `ads-account-read` | 299 `[CG]`, 353 `[S69+CG]` | Four daily flags: event at zero while software orders exist; spending limit below the ceiling; prepaid balance short; ad price differs from a pasted price | DECLINED | none. (a) contradicts the read routine's own Step 5.5 rule 5, a gap between the two sides is information and not a finding, adopted by its writer on 794 `[CG]`: kept at the original of this pass. (b) a reached limit is already a finding (Step 7 item 5); a limit set below the ceiling is the member's own setting, and intake's rule says billing values never bound the ceiling. (c) no source was re-opened for a prepaid balance read. (d) the 24 hour price clause is UNVERIFIED in the intake ledger |
| D21 | `ads-build-desk` | `ads-account-read` | 1378 `[S70]`, 1379 `[S69]` | Record payment restriction and reached spending limit as a blocker | KEEP, already present | Step 7 item 5; Step 9 card table. No edit needed |
| D22 | `ads-build-desk` | `ads-account-read`, `ads-change-list` | Câu 10, 1289 `[CG]` | Cost over revenue after returns, with a target asked of the member | DECLINED | none. No revenue field exists in `orders_check{}` or on a metrics row, and `ads-change-list` reads neither; it depends on the order data path left open under D24. Question 3 of the review packet |
| D23 | `ads-change-list` | `ads-account-read` | 1493c `[CG]` | Re-read the latest day once after the sales staff update orders | DECLINED | none. Needs a second daily `SCHEDULE.md` row, which is the lead's and the owner's decision (patch log, schedule) |
| D24 | `ads-change-list` | `ads-account-read` | 1507 `[S23,S34]`, Phần A 100, B-2 624 | Five order count keys on every metrics row, by ad id | DECLINED | none. Contradicts the read routine's own design: Step 5.5 writes account level counts once into `orders_check{}` in state, after the rows are appended, and `metrics/daily.jsonl` is append only. The two requests contradict, so the original of this pass is kept and both are logged in `_shared/patch-log.md`. `ads-change-list` degrades to `n/a (no counted orders in the ledger)` as its own failure row says |
| D25 | `ads-change-list` | `ads-account-read` | 1530e `[S25]` | Event still received and connector still an administrator | KEEP, already present | Step 3, permission error finding. No edit needed |
| D26 | `ads-change-list` | `ads-account-read` | 1509, 1687, 1606e `[S42]` | An edit the platform made itself is a finding | KEEP, already present in substance | Step 6, automatic recommendations observation and category 3. No edit needed |
| D27 | `ads-creative-retro` | `ads-account-read` | 1894 Câu 13 `[CG]`; Phần A 100 | Creative level `orders_refused` and `orders_returned` | DECLINED | none. Same contradiction as D24 |
| D28 | `ads-creative-retro` | `ads-account-read` | 1819 Câu 4, 1879 Câu 10 `[S73,S74+CG]` | Owner approved fatigue rule, with a three second view variant | KEEP, already present; view variant DECLINED | Fatigue read, three sign test. The three sign test is already the shipped test. No metrics row carries a three second view rate (`CONTRACT.md` 2.4), so that variant would read a figure the ledger lacks |
| D29 | `ads-creative-retro` | `ads-account-read` | Phần A 148 `[S57,S58]` | Campaign type named in `result_type` or `screen` | KEEP, already present | Step 5.3, campaign types that count every order. No edit needed |
| D30 | `ads-creative-studio` | `ads-account-read` | 1087 Câu 15 `[S57]`, Phần A 85 and 148 | Fatigue finding on a shop campaign carries `results include organic and affiliate orders` | ADOPT, from deferral | Step 8, fatigue read, new paragraph. S57 verified in Phần A |
| D31 | `ads-desk-standup` | `ads-account-read` | 2188a, 2198c `[S70]` | Blocker contains `payment restricted` | ADOPT, from deferral | Step 7 item 5. S70 verified in Phần A |
| D32 | `ads-desk-standup` | `ads-account-read` | 2223a, 2223c `[CG]` | `result_type` naming the counted order; refused and returned keys | DECLINED | none. Same contradiction as D24; refused and returned counts already live in `orders_check{}`, which the brief now prints (D40) |
| D33 | `ads-desk-standup` | `ads-account-read` | Phần A A5.11 217 trigger | The read routine records, the standup prints, nobody pauses | KEEP, no change asked | none. Recorded for completeness |
| D34 | `ads-desk-standup, ads-account-read` | `SCHEDULE.md` | Phần A A2 69 `[CG]`, 2099b `[CG]`, 597 `[CG]` | Saturday read and brief; a second read on the next day | DECLINED | none. Needs the protected Step 0.1 sentence changed in two routines; the lead's ruling. Logged in the patch log |
| D35 | `ads-account-intake` | `ads-build-desk` | 486 none; Phần A 105 `[S68,S70]`, 167 `[CG]`; B11 case 7 | No build sheet where the business holds no administrator role | DECLINED | none. Phần A routes 105 and 167 to intake and the account read only, the build writer found no marked B-4 clause for an ownership check, and S68 and S70 support the billing reads, not a build stop. The risk reaches the member through intake's report. Question 5 of the review packet |
| D36 | `ads-account-intake` | `ads-build-desk`, `ads-creative-studio` | 312 `[S6,S7]`, 377 `[S6]`, 490 `[S6]`, 515 `[S5,S6,S7,S8,S14,S18]` | A product reading `ad copy: held (...)` or `barred (...)` gets no set and no sheet | ADOPT, from deferral | Build Step 2.6 checks 1 and 2; studio Step 4.2a items 1 and 2. Sources verified in Phần A and the intake ledger |
| D37 | `ads-account-intake` | `ads-build-desk`, `ads-change-list` | 379 `[S42]`, 380 `[S43]`, 396, 450 | Build sheets state and propose off for automatic settings | KEEP, already present in the build desk; DECLINED for the change list | Build Step 4.1 switches bullet; `CAPABILITIES.md` 4c. The sheet already carries the switch lines. S43 is a definition only, so search partners off stays a proposal; a weekly change list line would repeat the same member action every week |
| D38 | `ads-account-read` | `ads-build-desk` | 700 `[S28]` | Zalo Ads formats need a verified OA | KEEP, already present | Step 2.6 check 4. No edit needed |
| D39 | `ads-creative-studio` | `ads-build-desk` | 1031 Câu 9 `[S39,S45,S60,S63]`, 931 Câu 6 `[S57]` | Upload packet for a video only placement and a shop destination with no URL | ADOPT, from deferral | Step 4.5, new paragraph. S39, S60, S63 re-opened by the studio writer; S57 in Phần A |
| D40 | `ads-account-read` | `ads-desk-standup` | 794 `[CG]`, 619 `[S57+CG]` | Print `orders_check{}` as two numbers side by side, never averaged | ADOPT, from deferral | File map; Step 8 template and new paragraph; sample line. `CONTRACT.md` 2.8 and 10.2 name the read |
| D41 | `ads-account-read` | `ads-desk-standup` | 597 `[CG]` | The most recent day's results are provisional | ADOPT, from deferral | Step 8, `sơ bộ` paragraph; sample account line. Owner approved |
| D42 | `ads-account-read` | `ads-desk-standup` | 672 `[S23,S25]` | A broken event taints every cost | KEEP, already present | Step 8 gloss for `n/a (conversion event not confirmed)`; What it refuses to report. No edit needed |
| D43 | `ads-account-read` | `ads-desk-standup` | A5.11 217 `[S70+CG]`, A5.9 207 `[CG]` | Payment restriction, spend over the cap and a reached limit on top | KEEP, already present | Step 8 money flags 1 and 2. No edit needed |
| D44 | `ads-account-intake` | `ads-desk-standup` | 473 none, 559 none, Phần A 242 `[S12]` | Re-ask line near the top; no card balances or customer data; brief to the person on duty | KEEP in part, already present; re-ask line DECLINED | Step 8 member reads Vietnamese, delivery paragraph. Customer data and the person on duty are already there. The re-ask line is unmarked |
| D45 | `ads-build-desk` | `ads-desk-standup` | D18, A5.11 217 | A daily line under `## About this kit` while a release row exists | DECLINED | none. `## About this kit` is shown once per monthly check by design, and a daily line would nag. The rule is in `CONTRACT.md` 10.3, `README.md` and `INSTALL-PROMPT.md`, and the build desk's run record says each time that the row was read and not acted on |
| D46 | `ads-creative-studio` | `ads-desk-standup` | 926 none, 1082 none, Phần A A5.7 197 `[S39+CG]`, D8 | `ok đăng bộ <folder>` approves one set; a bare `ừ` approves nothing | KEEP, already present in substance | Step 3, a reply in a chat app is not a tick. A reply naming no card closes nothing and the person on duty asks which |
| D47 | `ads-change-list` | `ads-desk-standup` | 1545, none | Applied date from the member's screenshots | DECLINED | none. Unmarked, proposal only |
| D48 | `ads-account-intake` | `ads-change-list` | 385 `[S15,S56]` | Precedence: law, ceiling, measurement, savings; fewer ad sets, never more money | DECLINED | none. S15 and S56 do not state an order of precedence. The change list already applies the stricter rule, and `CONTRACT.md` 10.1 rule 7 carries fewer ad sets, never more money |
| D49 | `ads-account-intake` | `ads-change-list` | 353 `[CG]` | A sale budget ranked against its own figure | DECLINED | none. The change list reads no `## Campaign allocations`, and D10 declined the line it would read |
| D50 | `ads-account-intake` | `ads-change-list` | 496 `[S6,S7,S8,S68,S70]` | With no sales software, rank nothing by cost per order | KEEP, already present | Failure row, `n/a (no counted orders in the ledger)`; ranks 3 and 4 read `chưa có`. No edit needed |
| D51 | `ads-account-read` | `ads-change-list` | 619, 639 `[S57+CG]`, 624 | Read `orders_check{}` for the week | DECLINED | none. The change list's own design reads counts from metrics rows (D24); the two contradict, so both stay as the writers left them and the gap is logged |
| D52 | `ads-account-read` | `ads-change-list` | 788 `[S35+CG]` | A sale day spike is not a trend | KEEP, already present | Step 1.2 flagged weeks, now read from `## Sale and holiday periods`. No edit needed |
| D53 | `ads-creative-studio` | `ads-creative-retro` | 973 Câu 8 (2) `[S35+CG]`; 1158 Câu 19 `[CG]` | Earning angles by cost per order against a trailing average and live count | DECLINED | none. Phrased as a consideration; the clauses sit in B-3, not in the retro's B-6, and the retro already keeps its own B-6 evidence floor. A trailing average and a live count would be new numbers |
| D54 | `ads-account-intake` | `ads-creative-studio` | 509 `[S15,S17+CG]` | No before and after or pinched fat images for weight products | KEEP, already present | Step 4.2a item 4. No edit needed |
| D55 | `ads-creative-retro` | `ads-creative-studio` | 1787 Câu 1 `[CG]` | A sale only value stays off the everyday schedule | ADOPT, from deferral | Step 2.3, new paragraph; file map row. Reads `## Sale and holiday periods` |
| D56 | `ads-creative-retro` | `ads-creative-studio` | 1879 Câu 10 `[S73,S74+CG]` | Refresh a fatigued creative with a new opening, never only new music | ADOPT, from deferral | Step 2.3, new paragraph. Owner approved |
| D57 | `ads-creative-retro` | `ads-creative-studio` | 1889 Câu 12 `[S60]` | The main idea sits in the visible opening | KEEP, already present | Step 4.4, a truncation point is not a cap. S60 re-opened by the studio writer; the rule is already there |
| D58 | `ads-creative-retro` | `ads-creative-studio`, `ads-build-desk` | 1884 Câu 11, 1980 `[S11]` | Creator content needs a contract note | DECLINED | none. S11 re-opened confirms the liability and a fine only, not a contract requirement. Studio 4.2a item 6 keeps real people out without written consent, and build 4.6 takes assets only from positioning and the inventory |
| D59 | `ads-creative-retro` | `ads-creative-studio` | 2005 Câu 17 `[S8,S10,S15,S16,S17]` | Form replacement wording as fictional examples | DECLINED | none. An example changes no behaviour; the refusal classes are in Step 4.2a items 3 to 5 |
| D60 | `ads-build-desk` | `ads-creative-studio` | STYLE-VI, B8, no marker | Same Vietnamese intro lines as the build sheet | DECLINED | none. No marker; presentation only |

Counts: 60 deferrals. 20 applied with an edit (D1, D2, D6, D7, D9, D12, D13, D14, D16, D17 in part, D18, D19, D30, D31, D36, D39, D40, D41, D55, D56), 18 already present so no edit was needed, 22 declined.

## Integrator repairs outside the requests

| File | Change | Why |
|---|---|---|
| `routines/ads-account-intake/SKILL.md` Step B3a | The two `VERSION` URLs name `employees/ad-manager-employee-vn/` | Same as `CONTRACT.md` 8.4 above. Without it the monthly check would offer the English kit |
| `routines/ads-account-intake/SKILL.md` Step A5 | "the exact thresholds in `CONTRACT.md` section 7" now reads section 10.1 | The thresholds were never in section 7, and 10.1 states none |
| `routines/ads-change-list/SKILL.md`, `routines/ads-desk-standup/SKILL.md` | Read `## Sale and holiday periods` | The reconciled heading. Wording of the two readers only; the rule each applies is unchanged |
| `routines/ads-desk-standup/SKILL.md` Step 8 | The address rule names the `Xưng hô:` line | D19 |
| `employee.json` | `exports/**` in the member list; version 1.9.0 | Member files are never replaced by an upgrade |

## Contradictions kept at the original behaviour, or reconciled

1. **Fire times** (account read P6 to P57 against standup P1 to P9): both kept at the shipped times. The owner chooses (review packet question 1).
2. **Where order counts live** (change list 1, retro 2, D24, D27, D32 against account read P3 and D51): `orders_check{}` in the read routine's state stays as the read writer built it; no metrics row carries order keys; the change list and the retro keep their `n/a` degrade paths. The desk standup prints `orders_check{}` (D40). A later pass that wants per ad set order counts must redesign Step 5.5 of the read routine and the change list's Step 1.2 together.
3. **The member's sale days** (change list 2, retro 1, standup P13, D9, D12, D18): reconciled on one heading, `## Sale and holiday periods`.

## Fixer pass after review: ads-account-intake, 24/09/2026

Requests the `ads-account-intake` fixer raised while applying the independent reviewer's findings. The fixer edited only the routine and its ledger; these rows wait for the lead.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| intake 6 | `CONTRACT.md` 10.2, `## Creative pace` bullet: append the three owner approved creative pace tiers (under `15.000.000 đ`, 2 sets a week; `15.000.000 đ` to under `50.000.000 đ`, 3 or 4; `50.000.000 đ` and up, 5), marked "owner approved tiers, expert form, 24/09/2026" | applied, final verifier 24/09/2026 | Reviewer FIX: the amounts sat in the routine body with no source path. The routine Step A5 row now points at this bullet and asks with no default choices while the bullet carries none. Exact old and new text in the intake ledger, `## Shared file patch requests` |
| intake 7 | `CONTRACT.md` 10.2, `## Accounts` bullet: the verification state reads `verified <date> \| <evidence path of the member's paste or screenshot>`, and no routine opens that platform's screens to read it | applied, final verifier 24/09/2026 | Reviewer BLOCK on routine A4.6 item 6 (Zalo Ads export only in `CAPABILITIES.md` 4b; Zalo terms 4.6 and 4.7). The routine is already fixed; the bullet did not itself imply a read, so this is a clarity change only |

## Fixer pass requests, after the independent review (24/09/2026)

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| build desk fixer 1 | `examples/build/campaign-storm-repair.md`, opening lines and `## Status to set first` reworded to the corrected Step 4.1 template: `Mọi hướng dẫn trong file này dành cho anh/chị, mọi thao tác là việc anh/chị\ntự làm. Chưa có mục nào trong file này được thực hiện trong tài khoản.` and `Tạm dừng. Chọn trạng thái này trước mọi thiết lập khác trên nền tảng, và giữ\ntạm dừng đến khi đã nhập xong mọi giá trị trên phiếu.` | applied, final verifier 24/09/2026 | Reviewer wording finding (1) and (2). Headings unchanged. `copy-check.mjs --dest form` on the new lines: PASS. See `ads-build-desk.md` `## Shared file patch requests` |
| build desk fixer 2 | `parsed-strings.md` section 5, new row: `video` slot line reading `chưa có video` in `creative/set-*/set.md` `## Slots`; writer `ads-creative-studio`; reader `ads-build-desk` Step 4.5 | applied, final verifier 24/09/2026 | D39 made the build desk read the studio's value byte for byte, so section 5 must register it |

## Fixer pass after review: ads-creative-studio, 24/09/2026

Requests the `ads-creative-studio` fixer raised while applying the independent reviewer's findings. The fixer edited only the routine and its ledger; these rows wait for the lead. Exact old and new text in the studio ledger, `## Shared file patch requests`, rows 4 and 5.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| studio NOTE 14 | `CAPABILITIES.md` 4c closing paragraph: a cap on Meta or TikTok stays `n/a (cap not confirmed)` unless the member confirmed it on a card "or the Field limits table under `web.fetch` records it with a read date under ninety days old" | applied, final verifier 24/09/2026 | The studio's Step 4.4 rung 2 copies caps from the dated table; the two passages disagreed. Alternative: scope the sentence to `ads-build-desk` |
| studio FIX 3 | `CONTRACT.md` 10.1 rule 8: "written consent" reads "consent" | applied, final verifier 24/09/2026 | S12 and S13 (Phần A) support consent; no re-opened source and no `[CG]` states it must be written. The routine now says consent; the stricter contract wins meanwhile |
| studio FIX 2 | D56 above now reads UNVERIFIED, not applied: the studio's Step 2.3 paragraph was removed | recorded, no shared file | The 1879 markers `[CG][S73][S74]` sit on the Meta frequency sentence only; the refresh clause carries none. The counts line above still lists D56 as applied |

## Fixer pass after review: ads-change-list, 24/09/2026

Requests the `ads-change-list` fixer raised while applying the independent reviewer's findings. The fixer edited only the routine and its ledger; these rows wait for the lead. Exact old and new text is in `ads-change-list.md`, `## Shared file patch requests`.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| change list 4 | `CONTRACT.md` 2.8, row `state/ads-<id>.json`: `ads-change-list` also reads `orders_check{}` of `ads-account-read`, account level only | applied, final verifier 24/09/2026 | Reviewer BLOCK: no routine writes the metrics row order keys (change list 1 declined), so the change list now reads `orders_check{}` in Step 1.2. This reverses the change list side of D51 and of contradiction 2 above; `ads-account-read` Step 5.5 is unchanged |
| change list 5 | `CONTRACT.md` 10.2, "The order check": append that `ads-change-list` sums the entries over its window at account level only and compares no object with them | applied, final verifier 24/09/2026 | Same BLOCK |
| change list 6 | `CONTRACT.md` 10.1 rule 7: a budget step limit may also be stated where it is a stricter step the member approved for this kit | applied, final verifier 24/09/2026 | Reviewer NOTE: the owner approved `[CG]` tiers and the 20 percent step read as contradicting rule 7 |
| change list 7 | `CAPABILITIES.md` 4c, row `learning-phase`: add "avoid pausing an ad group while it learns" | applied, final verifier 24/09/2026 | Reviewer FIX: the routine's kill line now cites 4c `learning-phase` for the pausing advice; S38 confirmed it (`phan-a-ledger.md` row 60), and the row already cites that page |
| change list 8 | `parsed-strings.md` section 5, row `orders_check{}`: add `ads-change-list` Step 1.2 and Step 3 as readers | applied, final verifier 24/09/2026 | Reviewer BLOCK |
| change list 9 | `glossary.md` section 3: rows for the counted order (`đơn tính chi phí`) and the cost per counted order (`chi phí mỗi đơn tính`) | applied, final verifier 24/09/2026 | Reviewer FIX on the headline terms; the gloss follows the member's basis, not the unmarked "closed minus refused, cancelled and returned" formula |
| change list 10 | `glossary.md` section 5: glosses for `n/a (sale or holiday week)`, `n/a (no counted orders in the ledger)`, `n/a (<n> changes applied to this object in the same window)`, `n/a (no seven day frequency)` | applied, final verifier 24/09/2026 | Reviewer FIX |
| change list, outbound | `routines/ads-account-read/SKILL.md`, `How this hands off`, the `ads-change-list` bullet (line 836 on 24/09/2026): replace "**`ads-change-list`** scores the week from `metrics/daily.jsonl` alone." with "**`ads-change-list`** scores the week from `metrics/daily.jsonl`, and in this variant reads `orders_check{}` for the account's cost per counted order, at account level only, weighing no campaign, ad set, or ad by it." | applied, final verifier 24/09/2026 | Keeps the writer's handoff line true after the BLOCK fix. Second review: the earlier row quoted text that exists nowhere in the kit; this row quotes the exact current sentence |

## Second fixer pass after review: ads-account-intake, 24/09/2026

A request the `ads-account-intake` fixer raised while applying the second independent review. The fixer edited only the routine and its ledger; this row waits for the lead. Exact old and new text in `ads-account-intake.md`, `## Shared file patch requests`, row 8.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| intake 8 | This file, `## Outbound deferrals`, row D14, last cell: replace "Owner approved tiers live in the question text only; never derived from spend. Checker warns on the two amounts; they are owner thresholds, not market figures" with "Never derived from spend. Fixer pass: the owner approved tiers left the routine body; Step A5 points at `CONTRACT.md` 10.2 `## Creative pace` and asks with no default choices while that bullet carries none (patch request intake 6, pending)" | applied, changed, final verifier 24/09/2026 | Reviewer FIX: the routine holds no amount any more (Step A5, line 435) and intake 6 moves the tiers to `CONTRACT.md` 10.2, so the D14 row disagreed with the intake ledger's own D14 row |

## Final verifier pass, 24/09/2026

The fifteen rows marked `pending, after review` above were applied by the final verifier, the last writer on this kit, with the exact old text found once at each anchor and replaced by the exact new text of the source ledger. The source ledgers' patch request rows now read "applied by the final verifier, 24/09/2026".

| Row | File | Note |
|---|---|---|
| intake 6 | `CONTRACT.md` 10.2, `## Creative pace` | Exact text. The tiers are owner thresholds, not legal numbers, so D11 and rule 11 do not bar them; each amount sits in backticks with `đ` and the source "expert form, 24/09/2026" beside it. `ads-account-intake` Step A5 already reads this bullet |
| intake 7 | `CONTRACT.md` 10.2, `## Accounts` | Exact text |
| intake 8 | This file, row D14 | Applied, changed: the last clause reads "which carries them since the final verifier applied patch request intake 6" instead of "(patch request intake 6, pending)", because intake 6 is now applied. The anchor matched twice (row D14 and the intake 8 request text), so the replacement was scoped to row D14 |
| build desk fixer 1 | `examples/build/campaign-storm-repair.md` | Exact text; the two passages now equal the Step 4.1 template in `ads-build-desk` byte for byte |
| build desk fixer 2 | `_shared/parsed-strings.md` section 5 | Row appended at the end of the table |
| studio NOTE 14 | `CAPABILITIES.md` 4c closing paragraph | Exact words; the anchor is hard wrapped in the file, so the new clause keeps the paragraph's wrapping |
| studio FIX 3 | `CONTRACT.md` 10.1 rule 8 | Exact text. Checked against `_shared/phan-a-ledger.md`: S12 and S13 confirm consent; S15 and S17, the sources on clause 243, were confirmed for the body image and weight rules and state no consent, so "written" was wider than any re-opened source. The rule still keeps every such photo out of a routine's hands |
| change list 4 to 7 | `CONTRACT.md` 2.8, 10.2, 10.1 rule 7; `CAPABILITIES.md` 4c `learning-phase` | Exact text. Resolves the change list BLOCK: the reader line in 2.8 and the order check paragraph now name the change list's account level read |
| change list 8 to 10 | `_shared/parsed-strings.md`, `_shared/glossary.md` | Exact text |
| change list, outbound | `routines/ads-account-read/SKILL.md`, `How this hands off` | Exact text; the rest of that bullet is unchanged |

## Global wiring pass, D23, 24/09/2026

Decision D23 in `localization-reports/VN-DECISIONS.md`: Shopee's terms (section 3.1) forbid manual tracking as well as automated tracking, so a competitor's or any other shop's page, listing or ad on Shopee is never tracked, counted or copied, by hand or automatically. The global integrator grepped every Vietnam variant (routines, `CONTRACT.md`, `INSTALL-PROMPT.md`, `README.md`, examples) and changed each line in this kit that asked the member to paste what they saw on a competitor's page on a platform that forbids automated reading, without excepting Shopee. The member's own Shopee exports stay allowed. Routine prose names no platform, because the kit checker fails a vendor name the original routine never carries; it points at `CAPABILITIES.md`, whose Shopee rows already read "no automatic or manual monitoring".

| File | Change | Basis |
|---|---|---|
| `CONTRACT.md` 10.1 rule 3 | New sentence after "What the member saw there by hand reaches the kit only because the member pasted it": a competitor's or any other shop's page, listing or ad on Shopee is never tracked, counted or copied, by hand or automatically, so nobody pastes from one; the member's own Shopee exports stay allowed | D23 |
| `INSTALL-PROMPT.md` Phase 1 item 6 | New sentence: never ask the member to paste from a competitor's or any other shop's page, listing or ad on Shopee, because its terms (section 3.1) forbid tracking or copying it by hand as well | D23 |
| `routines/ads-account-intake/SKILL.md` A4.3, place 4 | The competitor ads the member saw never come from another shop's page, listing or ad on a platform whose terms `CAPABILITIES.md` records as forbidding monitoring by hand as well | D23 |

Check after the change: routine checker on `ads-account-intake`, `PASS WITH WARNINGS (0 fail, 3 warn)`, the same three percent warnings as before the change. No version bump: 1.9.0 is unpublished and this is part of the same localization pass.
