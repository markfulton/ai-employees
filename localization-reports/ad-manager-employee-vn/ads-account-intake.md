# ads-account-intake: provenance ledger

Status on 2026-09-24: **ledger complete, sources behind every adopted law, number or platform rule re-opened or already verified in the Phần A ledger, routine edits applied to the variant routine and checked (see Files and checks).** Writer pass only; the independent review (Gate 9) and the kit mode checks are the lead's.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/04_Ad-Manager/phieu-da-dien.md` (read only), `## B-1. ads-account-intake`, form lines 262 to 559. Phần A decisions are cited from `_shared/phan-a-ledger.md` and not re-decided here.
- Extract: `extract_form_section.py --routine ads-account-intake`, scratch copy `scratchpad/vn/ad-manager-employee-vn/ads-account-intake-extract.md` and `.json`. 145 extracted rows and answers: 38 with `[S#]`, 10 with `[CG]`, 6 with both, 103 unmarked. 26 of them are prompts, table headers or example labels with no clause (269, 276, 285, 303, 305, 357, 359, 371, 373, 400, 402, 416, 417, 424, 431, 438, 445, 464, 482, 484, 500, 502, 524, 526, 542, 554). **119 content rows are classified below.** B0 box ticked: Làm khác.
- Form author (A1): an AI sub agent playing the Ads role, research draft dated 23/09/2026, asking for review by a real practitioner. **No clause has been confirmed by a person running Vietnamese ad accounts.** `[CG]` marks are the owner's review decisions, not a domain expert's. Every adopted rule below still needs Gate 3 review (D6).
- Original kit and routine: `employees/ad-manager-employee` 1.8.0, `routines/ads-account-intake/SKILL.md`, 995 lines, 98239 bytes, never edited.
- Variant kit and routine: `employees/ad-manager-employee-vn`, same routine id. The only kit file this writer edited.
- Source index: `04_Ad-Manager/literature/nguon.md`, viewing date 23/09/2026 on every row. Re-opened on 24/09/2026 as below.
- Kit version before: 1.8.0 (scaffold). After: set once for the whole kit by the lead (D14).
- Decisions that bind this ledger: D3, D8, D10, D11, D12, D13, D16, D17, D18 in `localization-reports/VN-DECISIONS.md`; `localization-reports/STYLE-VI.md`; `_shared/glossary.md`; `_shared/parsed-strings.md`.

## Sources re-opened on 24/09/2026

Sources already confirmed in the Phần A ledger and reused here without a second opening: S5, S6, S7, S8, S9, S10 (through the Sức khoẻ và Đời sống substitute), S12, S13, S15, S17, S19, S21, S22, S23, S24, S25, S27, S28, S38, S42, S53 (with the Báo Chính phủ two level page), S56, S57, S62, S64, S68, S70, S75, S76, S77, and the platform terms of Meta, TikTok, Shopee, Zalo, Google, LinkedIn and the business registration portal. The sources below are cited on a B-1 row that this ledger ADOPTs and were not verified in Phần A.

| Source | Supports (form line) | URL | Checked | Verdict |
|---|---|---|---|---|
| S43 Google Ads Help, search partners (vi) | Search partners carry search ads onto hundreds of non Google sites and YouTube (365, 380, 396, 450, 533) | support.google.com/google-ads/answer/2616017?hl=vi | 24/09/2026, WebFetch | Confirmed for the definition. **The page states no budget threshold**, so the "under 10 million đ a month" clause of 380 and 396 stays UNVERIFIED. It does not state how to switch search partners off |
| S26 Pancake POS docs, purchase event sync | An order moved to the status the seller chooses is marked Purchase and sent to the ad platform (343) | docs.pos.pages.fm/pos/tinh-nang-nang-cao/dong-bo-su-kien-mua-hang | 24/09/2026, WebFetch | Confirmed |
| S69 Meta Help, account spending limit (vi) | A spending limit pauses every ad and stops spend when reached; it is distinct from the billing threshold (353) | vi-vn.facebook.com/business/help/141820733085330 | 24/09/2026, ego-browser (WebFetch returned only the title twice, also on facebook.com/business/help/203321833042958) | Confirmed: "khi chi tiêu đạt đến giới hạn, quảng cáo của bạn sẽ tạm dừng và tài khoản sẽ ngừng chi tiêu"; not available on prepaid funds accounts |
| S40 TikTok Help, budget (vi) | Minimum daily budgets stated in USD (353, 396) | ads.tiktok.com/help/article/budget?lang=vi | 24/09/2026, WebFetch | Confirmed: campaign above 50 USD, ad group above 20 USD, no VND figure. The adopted rule is only "read the minimum off the account's own screen, never convert"; the figures stay out of the kit. The budget change limits in 396 (40 percent, 30 percent, every 2 days) were not checked on this page and stay a proposal |
| S16 Meta Ad Standards, personal attributes (vi) | Ads must not assert or imply the viewer's personal attributes (478) | transparency.meta.com/vi-vn/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/ | 24/09/2026, WebFetch | Confirmed ("không được chứa nội dung khẳng định hoặc ám chỉ các đặc điểm cá nhân"; health examples) |
| S14 Meta Ad Standards (vi) | Financial services, alcohol and gambling are restricted categories (515) | transparency.meta.com/vi-vn/policies/ad-standards/ | 24/09/2026, WebFetch | Confirmed: alcohol, financial and insurance services, online gambling listed as restricted |
| S18 Google Ads policy, healthcare and medicines (vi) | In Vietnam only LegitScript certified pharmaceutical manufacturers may advertise non prescription medicines (515) | support.google.com/adspolicy/answer/176031?hl=vi | 24/09/2026, WebFetch | Confirmed for the manufacturer certification; no Vietnam permission for prescription drugs found |

Not re-opened because nothing adopted rests on them: S71 (billing threshold adjustment; S68 carries the adopted clause), S78 (Thư viện Pháp luật; already recorded as not re-opened in Phần A, index viewing date 23/09/2026; the routine names no decree and records only fields the portal shows).

Note for the lead: the ego-browser run printed an `[ego-browser:notice]` that an Ego Lite update is available. Nothing was upgraded; that needs the user's approval.

## Clause decisions

Columns: form line and clause (paraphrase), marker and support, decision, exact target, reason. Routine line numbers refer to the variant `SKILL.md` after this pass.

### B0, B1, B2

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 270 B0 box: Làm khác | none | KEEP | this header | Records the form's choice; no kit change by itself |
| 272 B0: six differences from the original (no price list or checkout; ask closing model, software, BM holder, licences; conversion off the buy URL; province and commune; Saturday and sale weeks; Vietnamese superlative ban) | none | WORDING | governing line, routine line 30 | Explains the variant. Each behaviour it names rests on a marked row: 328, 343, 348, 391, 311, 478. The Saturday clause is UNVERIFIED here (A2 69 is the read routine's) |
| 278 B1: one profile of 8 to 12 sections a builder can use without asking | none | UNVERIFIED | report | Unmarked output shape; the original plan folder already is that artifact |
| 280 B1: owner approves on Zalo; accountant gets tax papers only | none | UNVERIFIED | report | Unmarked; D10 keeps delivery with a person |
| 281 B1: success is the owner answering four questions in one working day; at least 5 public sources; no "chưa rõ" in event or money | none | UNVERIFIED | report | Unmarked numbers; the event is never left empty in the original anyway |
| 282 B1: bad is a CPA by feel, clicks as results, copied competitor claims, daily cap as last month divided by 30 | none | KEEP | inherited rules; A5 bullets line 442 | All four are already forbidden by the original |
| 287 B2: triggers (new client, new category, closing change, month start) | none | UNVERIFIED | report | Unmarked; one run per month by the period guard |
| 289 B2: first working day before 17:00; extra review within 48 hours on a 10 point refusal gap | none | UNVERIFIED | `SCHEDULE.md` unchanged | An unmarked B2 clock time never moves a row. The row already ends its window at the same hour |
| 290 B2: five owner phrasings | none | EXAMPLE | acceptance map only | Wording, no rule |
| 291 B2: deadlines of 2 working days and 1 day | none | UNVERIFIED | report | Unmarked |
| 292 B2: done when owner says "ok hồ sơ" on Zalo | none | REJECT | report | An approval loop conflicts with `CONTRACT.md` 7.1 and the routine's "no approval loop"; D8 governs owner replies |
| 293 B2: two reminders 24 hours apart, then "chưa chốt" | none | UNVERIFIED | report | Unmarked; D9 and D10; no routine sends. The "chưa chốt" state is adopted through 328 as `unresolved` |
| 294 B2: when not to use; no drug or supplement copy without the paper's name | none | KEEP | inherited scope; held products line 504 | Other routines own B-2, B-3, B-5; the paper rule rests on 312 and 377 |
| 299 Câu 1: review once on the first working day each month | `[CG]` | KEEP | `SCHEDULE.md` row `first-weekday` unchanged | Already the row |
| 299 Câu 1: four signals over 7 consecutive days (cost per closed order up 30 percent on the 14 day average; over 20 percent of conversations without a phone; refusals 10 points above the assumption; spend with zero primary events while the software has orders) | `[CG]` | ADOPT | PATH B signals table, lines 795 to 804 | Owner approved thresholds, not market figures. Tested only from ledgers; missing input is `n/a` and changes nothing |
| 299 Câu 1: measurement is wrong when real orders and ad results differ by over 30 percent after setting aside orders without an ad id | `[CG]` | ADOPT | line 804 | Points at `## Conversion source`; the member decides which count to trust |
| 299 Câu 1: positioning is wrong when last month's winning angle is not in the two cheapest per order | `[CG]` | ADOPT | signals table, first row | Rewrite from evidence |
| 299 Câu 1: offer is wrong when the ad price and the Page or marketplace price differ for over 24 hours | `[CG]` | DEFER | `ads-account-read` | An unattended pass may not read those surfaces (D13, D17); line 793 limits the re crawl to the member's own site |
| 299 Câu 1: an extra review as soon as a signal appears | `[CG]` | DEFER | `ads-account-read` | The `YYYY-MM` period guard allows one run a month; the read routine sees a break on the day |

### B3

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 307 legal name, code, status from the registration portal; stop for a dissolved or suspended unit | `[S76,S77]` re-opened in Phần A; A7 250 `[S76+CG]` | ADOPT | new `### A4.1a`, lines 277 to 288; failure row | One look up of the member's own record (portal terms, D13). Fixer pass: the routine now says only what the terms say, no trading in the information and no unauthorised access (Phần A ledger, undated terms); the single look up is this kit's own limit, not an allowance the terms grant; fields as shown that day; `partial` on a dissolved or suspended status; household business is not a stop |
| 308 how customers buy; no answer means model "chưa chốt" and no web Purchase | none | UNVERIFIED | report | Substance adopted through 328 `[S9+CG]` |
| 309 events in the account; "chưa có sự kiện"; never clicks | `[S23,S25]` | ADOPT | A4.4 closing model table, line 348 onward | Server events from the sales software; the connector administrator requirement is written beside the software only where its own documentation states it, which S25 does for Vpage (fixer pass; S26 says nothing about the connector's role). Never clicks is inherited |
| 310 ceilings from the owner's message, never current spend | none | KEEP | inherited | Already the governing rule |
| 311 delivery area from the owner's commune and province list; no district level; never the whole country | `[S53]` | ADOPT | A5 table row, `## Countries sold into` line 505 | Phần A 102 and 255 |
| 312 special category papers (supplement content confirmation, cosmetic notification number, clinic licence); no paper means empty copy and the product barred from running | `[S6,S7]` | ADOPT | `ad copy: held (<document>)`, line 504; failure row | Qualitative; no dates or handling times (D11) |
| 313 competitor angles from public ad library, Page, reviews, only as seen; three angles from own product when none | none | KEEP | inherited rule line 340; line 543 | The original already bars competitor lines from claims; D13 moves the reading to the member (see 323) |
| 314 who holds BM, Page, card; no job without view rights | none | UNVERIFIED (stop clause) | report | Recording the holders is ADOPTed through Phần A 105 and 167 at A4.6 item 6; refusing the job is unmarked |
| 317 non text inputs: customer phone spreadsheet never opened for an audience; consent basis | `[S12,S13]` | ADOPT | A5 data paragraph line 450; failure row; `## What is not measured` line 531 | Phần A 238 |
| 317 screenshots dated by the image, voice summarised, sticker not consent, licence recorded by name, number, date, expiry | none; sticker rule is D8; licence fields follow A7 256 `[S6]` | WORDING | line 450 | Clarifies inherited "never carry a value as today's"; the 24 hour cut off itself is not adopted |
| 323 Câu 2 research order: site; Page and public ad library; marketplace shop; registration portal; map listing; public groups; LinkedIn not primary; never buy lists | `[S19,S76,S77,S78]`; Phần A 202 `[S76,S77,S78+CG]` | ADOPT, narrowed by D13, D16, D17 | lines 275, 312, 314, A4.1a, A4.3 lines 327 to 332 | The routine reads the member's own site and the portal; every Meta, TikTok, marketplace, chat app and map surface is opened and pasted by the member. S78 not re-opened; nothing rests on it |
| 328 Câu 3: must ask, one question at a time, not a long form: both ceilings, closing model, sales software and real order status, delivery area, allowed and banned products, BM and Page admins, callable hours; licences for special categories | `[S9+CG]` | ADOPT | governing line 30; A5 intro line 421; A5 table | Owner approved; no authority widened (D18). "On Zalo" is REJECT under D10: the first run is in session and later questions go into the report |
| 328 Câu 3: barred products (tobacco, strong alcohol, breast milk substitutes for young children, prescription drugs): stop, tell the owner, do not ask for papers | `[S9]` re-opened in Phần A | ADOPT | line 448; `ad copy: barred`; failure row | No threshold in the body or the kit: patch request 3 was applied without thresholds as `CONTRACT.md` 10.1 rules 1 and 2 (patch-log row 13; rule 11). Fixer pass: the stop names every alcoholic drink and every milk product for infants and young children, as rule 1 requires |
| 328 Câu 3: no answer means ceilings "chưa chốt", never 0đ; area and event not chosen | `[CG]` | ADOPT | lines 34, 425, 426, failure row | Matches `CONTRACT.md` 2.3 three states. The original routine said "explicit zero"; the variant writes `unresolved`, which the ledgers guard as zero |
| 328 Câu 3: ask the ceiling again next month while it is still unresolved | `[CG]` | ADOPT | lines 34, 472, 808, monthly re-ask example line 961 | Only in the monthly report; the standup lists the open member-action card (D44 declined a standup re-ask line); never a push, never a send, never a stall |
| 328 Câu 3: after two reminders | `[CG]` | UNVERIFIED | report | No routine sends reminders (D9, D10) |
| 333 Câu 4: angle source order (own description, newest shop reviews, repeated customer questions, competitor ads only for emphasis) and the line shape "Khách đang ... nên ta nói ... bằng chứng là ... không nói ..." | `[CG]` | ADOPT, narrowed by D13 | lines 535 to 543 | Template in owner Vietnamese; the member pastes marketplace and competitor material |
| 333 Câu 4: the two fictional examples (shirt shop, Excel course) | `[CG]` | EXAMPLE | scratch copy check text only | The form marks them as synthesised, not real |
| 338 Câu 5: four places for buyers' words; keep unaccented spellings; no keywords from non Vietnamese tools; an objection seen 5 times in 30 conversations enters the angles, never the copy if it is an unfixed shop fault | `[CG]` | ADOPT, narrowed by D13 | lines 327 to 336 | The routine never reads marketplace suggestions itself, and item 1 names only the member's own seller centre ads screen, never a marketplace's public search box (Shopee terms 3.1, Phần A ledger; fixer pass); fewer than 30 conversations gives `n/a` |
| 343 Câu 6: primary result per model (inbox and COD order with phone and the chosen status; Pancake and Vpage server events; web purchase reconciled; marketplace orders, GMV Max counts organic orders with a one day window; B2B qualified meeting; never clicks, views, likes) | `[S23,S24,S25,S26,S57]` | ADOPT | A4.4 table line 350 onward | S26 re-opened; tool names go to `CAPABILITIES.md`. The connector administrator requirement is written only where the software's own documentation states it (S25, Vpage), fixer pass |
| 348 Câu 7: province or city plus commune list; basis is the warehouse and the owner's written word, not the head office; old district shows "chưa khớp"; whole country only on the owner's own words | `[S53+CG]` | ADOPT | A5 table row; line 505; line 517 | "giao 34 tỉnh" rendered as "deliver to every province" so no administrative count enters the body |
| 353 Câu 8: calendar month plus a daily cap | `[S40,S68,S69,S70,S71+CG]` | KEEP | inherited | Already the two money lines |
| 353 Câu 8: sale seasons get a separate pocket, not added to the month unless the owner says | `[CG]` | DEFER | `ads-change-list` | Intake records the member's words verbatim; the split belongs to the ranker |
| 353 Câu 8: billing threshold, account spending limit pauses ads, failed card can restrict payment | `[S68,S69,S70]` | ADOPT | A4.6 item 7, line 398 | S69 re-opened; values never bound the ceiling and never enter a run record |
| 353 Câu 8: TikTok minimum daily budget in USD; read the minimum on screen, never multiply by a rate | `[S40+CG]` | ADOPT, without the figures | line 500 (platform minimum sentence) | S40 re-opened; 50 and 20 USD stay out (D11 spirit, number rule) |
| 353 Câu 8: prepaid wallet caps the daily figure at balance over remaining days | `[CG]` | DEFER | `ads-account-read` | A daily flag, not an intake write; intake never derives a cap |

### B4

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 361 step 1: view rights, screenshot admins, no password | none | KEEP | A4.6, Guardrail 2 | Inherited |
| 362 step 2: legal entity on the portal against the Page name | `[S76]` | ADOPT | A4.1a line 285 | Both names written, member confirms |
| 363 step 3: ask the required questions; record money and area verbatim; never fill from 30 day spend | none | KEEP | inherited; A5 bullets | Verbatim recording is inherited; the questions rest on 328 |
| 364 step 4: read pixel, server events, software and marketplace orders; name one primary event; never "view content" | `[S23,S25]` | ADOPT | A4.4 | "View content" is already an inherited ban (page views) |
| 365 step 5: five control groups: placements, audience expansion, search partners, auto applied recommendations, URL expansion; on, off or not found; never "ổn" | `[S42,S43,S62]` | ADOPT | A6 item 4, line 515 | S43 re-opened; S42, S62 in Phần A |
| 366 step 6: 3 to 6 angles and a banned phrase list per category | `[S10,S15,S17]` | ADOPT | lines 482, 535 | Classes only in the body; the phrases live in `plan/voice.md` (CONTRACT 2.3) |
| 367 step 7: send the profile on Zalo 8:00 to 21:00, ask ok per item | none | REJECT | report | D10, no approval loop, clock time |
| 368 step 8: save to the team's Drive or Sheets | none | REJECT | report | A1.2 forbids a synced root; the plan folder is the record |

### B5

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 375 no order or phone bearing event means no conversion and no purchase optimisation | none | UNVERIFIED | report | The original keeps a stated event; optimisation belongs to the build desk |
| 376 no daily cap in VND means no build sheet | none | UNVERIFIED | report | Inherited behaviour stands: a sheet writes `unresolved` and nothing is created |
| 377 supplement without content confirmation: no function copy, profile waits for the paper | `[S6]` | ADOPT | `ad copy: held`, line 504; claims bullet line 466 | Dates and the 10 working days out (D11) |
| 378 USD account: write USD and how the owner wants VND; never convert | none | KEEP | A5 bullet line 444 | Clarifies the inherited "never derived, never rounded" |
| 379 Google auto apply on: record as risk | `[S42]` | ADOPT | line 515 | Recording and report only |
| 379 propose switching it off before a search build | `[S42]` | DEFER | `ads-change-list`, `ads-build-desk` | Intake changes and proposes no setting |
| 380 search partners on: record | `[S43]` | ADOPT | line 515 | S43 re-opened |
| 380 switch search partners off under 10 million đ a month | `[S43]` does not support the threshold | UNVERIFIED | report | The page states no threshold |
| 381 GMV Max: ROAS includes organic orders, 1 day window | `[S57]` | ADOPT | A4.4 table marketplace row | Written under `## What is not measured` |
| 382 old district named by the owner: convert to province and commune, ask again | `[CG]` | ADOPT | line 505 | |
| 385 precedence: law and platform policy, then the owner's ceiling, then correct measurement, then savings; narrow ad sets rather than raise money for learning | `[S15,S56]` | DEFER | `ads-build-desk`, `ads-change-list` | Intake already applies law first through the claims and held products |
| 391 Câu 9: inbox or COD measures closed software orders with a phone, by server events where wired; report delivered orders because of COD and refusals; conversation start only secondary; web purchase; marketplace orders with organic split for GMV Max; B2B qualified meeting; lead form primary only when nobody replies within 15 minutes | `[S21,S22,S23,S25,S57+CG]` | ADOPT | A4.4 lines 348 to 366; `## Conversion source` line 529 | The 77,5 percent figure stays out. The 15 minute rule rests on `[CG]` |
| 396 Câu 10: record Meta automatic audience and placement state, Google auto apply, search partners, PMax URL expansion | `[S42,S43,S62+CG]` | ADOPT | line 515 | Recording only |
| 396 Câu 10: safe values (manual placements under 15 million đ a month, audience network off until 50 results a week, TikTok budget change limits, Google switches off, Zalo OA verified, Cốc Cốc only after Google converts) | `[S28,S38,S40,S42,S43,S62+CG]` | DEFER | `ads-build-desk`, `ads-change-list` | Proposals and build settings; the Cốc Cốc order is also named qualitatively at line 458 (Phần A 182) |

### B6

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 404 read accounts, Page, events, portal; 25 pages and 15 queries | none | UNVERIFIED | report | Caps live in `human-pace`; unmarked numbers |
| 405 draft the profile and questions; no money the owner did not say | none | KEEP | inherited | |
| 406 send the profile on Zalo, 8:00 to 21:00 | none | REJECT | report | D10; clock time |
| 407 choosing the conversion event on the account is a person's job | none | KEEP | inherited | The routine changes no account setting |
| 408 enabling or raising budget after intake: 0đ for AI | none | KEEP | Guardrail 1; D18 | |
| 409 uploading phone lists to custom audiences: never, even when the owner sends the file | `[S12,S13]` | ADOPT | line 450 | |
| 412 handover contents: client, account id, open questions, second reminder date, the person's task; no password | none | KEEP | report item 9 | Reminder dates not adopted |

### B7

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 419, 421, 422 good example 1 (chat shop, Hà Nội and Hải Phòng, CAPI proposal, money unresolved, two angles, banned phrases) | 421 `[S53]` | EXAMPLE | first run report example, line 944 onward | Fictional; money shown as `unresolved`; no vendor name |
| 426, 428, 429 good example 2 (one reminder asking for the four missing lines) | none | EXAMPLE | monthly re-ask example, line 961 | The deadline hour is dropped (clock rule) |
| 433, 435, 436 good example 3 (competitor "kem số 1, giảm nám 7 ngày" kept as market news only) | 435 `[S6,S10]` | EXAMPLE | acceptance map; rule at line 340 | |
| 440, 442, 443 bad example 1 (daily cap from yesterday times 1,2; clicks; "đẹp nhất"; whole country; likes) | none | EXAMPLE | acceptance traps | Every error is already forbidden |
| 447, 449 bad example 2 (USD account, 20.000.000 USD, enabling, search partners and auto apply on) | none | EXAMPLE | acceptance traps | |
| 450 fix: record 20.000.000 đ as the owner's intent, ask the USD figure, do not enable, Google switches off until approved | `[S42,S43]` | KEEP (money, enabling); DEFER (Google switches) | line 444; `ads-build-desk` | |
| 455 Câu 11: two money lines plus a conversion line; never convert; daily is a maximum, not an average | none | KEEP | A5 bullets lines 442 to 444 | Clarifies the inherited rule |
| 455 Câu 11: flag "may hit the monthly ceiling around dd/mm"; prepaid wallet limit | none | UNVERIFIED | report | Unmarked |
| 460 Câu 12: one page of exactly 8 sections | none | WORDING | report opening lines, line 942 | Presentation only; the nine report items stay |
| 460 Câu 12: owner must type ok for sections 4 to 7 before the operator gets the profile | none | REJECT | report | An approval gate conflicts with `CONTRACT.md` 7.1; D8 |

### B8

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 466 em to anh or chị per the profile; never tôi | none | WORDING | lines 421, 942 | STYLE-VI |
| 468 under 400 words on Zalo; long file with a source appendix | none | WORDING | report example | The word count is not adopted |
| 469 no emoji; spell out abbreviations on first use | none | WORDING | line 942 | Glossary terms used |
| 470 money 1.250.000đ, dates 23/09/2026, percent 15% | none | WORDING | line 942 | STYLE-VI and glossary section 6 |
| 471 never "em chắc chắn lãi", "đối thủ đang chi khoảng", "ngành này CPA khoảng"; no "nhất", "số 1", "cam kết khỏi" | none | WORDING | STYLE-VI banned list; line 446 | Owner text only; the copy rule itself rests on 478 |
| 472 sample sentences (open, close, refuse, hand over) | none | WORDING | report example closing line | "Anh trả lời từng dòng hoặc sửa từng dòng, em ghi đúng lời anh" |
| 473 Zalo short, file with URLs; never into a group with the accountant or outside freelancers | none | DEFER | `ads-desk-standup` | Phần A 242 `[S12]` already routes it there |
| 478 Câu 13: banned in ad copy: superlatives without documents; cure and weight results; personal attribute phrases; guaranteed job or profit | `[S10,S15,S16,S17]` | ADOPT | `## Banned words` classes, line 482 | S16 re-opened. Classes only in the body (CONTRACT 2.3 forbids restating the list) |
| 478 Câu 13: limit "Chỉ hôm nay" without an end date and "inbox ngay kẻo hết" without a stock cap | none on those clauses | UNVERIFIED | report | Reasoned, unmarked |

### B9

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 486 BM and Page held by the old agency: stop building, owner must be admin first | none; Phần A 105 `[S68,S70]`, 167 `[CG]` | ADOPT (record); DEFER (stop building) | line 411; failure row; `ads-build-desk` | Recording rests on Phần A; refusing a build sheet belongs to the build desk |
| 487 two accounts on one Page in different currencies: never add, report apart | none | UNVERIFIED | report | Unmarked |
| 488 pixel purchases with no software orders: do not use the event, hand to the tracking person | none; supported by 391 `[S+CG]` | ADOPT | line 366; failure row | The software order is the result under 391 |
| 489 owner sends 5.000 phone numbers to "throw into ads": refuse, consent basis | `[S12]` | ADOPT | line 450 | |
| 490 supplement page pushing to run before the paper: no function copy, no build sheet | `[S6]` | ADOPT | `ad copy: held`; line 466 | Build sheet refusal DEFER to `ads-build-desk` |
| 491 platform location shows an abolished district: do not tick, ask for communes | `[S53]` | ADOPT | line 517; failure row | |
| 496 Câu 14: agency holds BM; low billing threshold or failed bills stop ads; no sales software means cost per order not measurable; one Page selling cosmetics and supplements is split by product | `[S6,S7,S8,S68,S70]` | ADOPT | lines 397, 398, 411, 428 row, 504 | The "tiny awareness campaign if the owner insists" clause is DEFER to `ads-change-list` |

### B10

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 504 Luật 75/2025: ask about intermediaries and cross border ads; the owner is responsible for content | none | UNVERIFIED | report | Unmarked; S1 confirms only the effective date |
| 505 NĐ 87/2026 superlatives; organisations fined double | none | UNVERIFIED as a row | report | Substance adopted through 478 and Phần A 106 (S9, S10 verified); fines out (D11) |
| 506 supplement content confirmation, from 01/7/2026 by the provincial chair, 10 working days | none | UNVERIFIED as a row | report | Substance adopted through 312 and 377; dates and duration out (D11) |
| 507 Thông tư 03/2026 cosmetics | none | UNVERIFIED as a row | report | Substance adopted through 515 and 496 |
| 508 personal data law: no phone files for audiences; consent and opt out for remarketing | none | UNVERIFIED as a row | report | Substance adopted through 317 and 409 |
| 509 Meta health and wellness: 18 and over; no body shaming; no fat pinching close ups; no result from a worn product alone; no before and after for weight products | `[S15,S17+CG]` | ADOPT (claims and banned classes); DEFER (images, targeting age) | lines 465, 482; `ads-creative-studio`, `ads-build-desk` | |
| 510 TikTok weight management | none | UNVERIFIED as a row | report | Substance adopted through 478 and 509 (S17) |
| 515 Câu 15: supplements need content confirmation; cosmetics, chemicals no confirmation but mandatory information and no medicine implication; clinics publish licence number; devices show registration and no doctor image; Google OTC only for certified manufacturers; finance, alcohol, gambling restricted on Meta | `[S5,S6,S7,S8,S14,S18]` | ADOPT | line 504 (held and platform restricted lines) | S14 and S18 re-opened; no dates or instrument numbers in the body. Fixer pass: S14 lists these categories as restricted, not barred, so a platform restricted product is held on that platform only, as `ad copy: held (platform restricted: <platform>, <what the policy requires>)`, and the member lifts it with proof under `## Member claims`; a product the law bars stays barred. S18 supports only the manufacturer certification, so the inference "a small shop never runs a medicine ad there" was removed |
| 520 Câu 16: superlatives need documents; weight claims not written; cosmetics need the notification number and label ingredients; supplements need a valid confirmation; customer counts from a software export | `[S6,S7,S8,S10,S15,S17]` | ADOPT | claims bullets lines 464 to 467 | |
| 520 Câu 16: discounts need the base price and end date; testimonials need written consent | none of the cited sources supports these clauses | UNVERIFIED | report | Kept out of the routine |

### B11, B12, B14

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 528 to 539 B11 cases 1 to 12 | cases 3 `[S76]`, 4 `[S10]`, 5 `[S6]`, 6 `[S42,S43]`, 9 `[S12,S13]`; others none | acceptance | Acceptance and traps below | Test cases, not rules |
| 544 self check: ceilings written by the owner | none | KEEP | inherited invariant | |
| 546 self check: event is an order or qualified meeting | none | KEEP | A4.4 | Rests on 391 |
| 547 self check: every angle sourced, no superlative | none | KEEP | lines 482, 535 | Rests on 333, 478 |
| 548 self check: no abolished district, not the whole country | none | KEEP | line 505 | Rests on 348 |
| 549 self check: no password, 2FA code, customer phone or file | none | KEEP | Guardrail 2; line 450 | |
| 550 self check: supplement, drug, clinic copy empty without paper | none | KEEP | line 504 | Rests on 312 |
| 551 self check: barred categories stopped | none | KEEP | line 448 | Rests on 328 `[S9]` |
| 556 B14 remember: account id, currency, admin, closing model, event, current ceilings, area, banned phrases, licence expiry | none | KEEP | plan files already hold these; expiry through 312 | |
| 558 B14 record: date, URLs read, owner's verbatim money answer, masked event screenshot, which items the owner ok'd | none | KEEP (dates, URLs, verbatim); UNVERIFIED (screenshots, ok per item) | inherited | Run record rules forbid quotes and personal data |
| 559 B14 notify on Zalo with four items to ok; no card balance; two reminders 8:00 to 21:00 | none | DEFER | `ads-desk-standup` | D10; no clock time in a routine |

**Decision counts (primary decision per content row, 119 rows, counted by script from the tables above, the first decision named in a row wins):** ADOPT 33, KEEP 25, UNVERIFIED 19, EXAMPLE 15, WORDING 8, REJECT 4, DEFER 3, acceptance cases 12. Split rows carry their secondary decisions in the row: 11 further DEFER clauses (299 twice, 353 twice, 379, 396, 450, 486, 490, 496, 509) and 8 further UNVERIFIED or REJECT clauses (328 twice, 380, 455, 460, 478, 520, 558) sit inside rows counted under their first decision.

### From deferrals (integrator pass, 24/09/2026)

Outbound deferrals other writers aimed at this routine, decided by the integrator under the lead's rule: applied where the clause carries a `[CG]` or a verified `[S#]`, under the same editing rules as the writer (Step 0, guardrails, parsed strings and `## Corrections` untouched, nothing shortened), otherwise declined. Ids match `_shared/patch-log.md`. These rows are not in the decision counts above.

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| D1, from `ads-account-read`: Five lines under `## Conversion source`: software, send mode, counted statuses, cost per order basis, ads source label | 624 `[S25]`; A3 99 `[S22]`, A3 100 `[S21,S34]`, A5 146 `[S23,S24,S25]` | ADOPT, from deferral | Step A5 table, sales software row; Step A6 item 6 `## Conversion source` paragraph | Sources verified in Phần A. `ads-account-read` Step 2.2 reads these and never infers one |
| D2, from `ads-account-read`: Name the billing or payment screen and the event dataset screen under `## Read screens` | 608 `[S68,S70]`, 609 `[S23,S25]` | ADOPT, from deferral | Step A4.6 item 4 | Sources verified in Phần A; the read routine opens both screens (Step 3, Step 7 item 5) |
| D3, from `ads-account-read`: Mark each account `session` or `export only` and tell the member to drop exports | D16, Phần A Zalo terms row (no `[CG]`, no `[S#]`) | DECLINED | none | No `[CG]` or `[S#]` on the clause. The route is decided per platform in `CAPABILITIES.md` section 4b, which `ads-account-read` reads directly; the export folders are named in `CONTRACT.md` 2.4 and 10.2 and in `INSTALL-PROMPT.md` |
| D4, from `ads-account-read`: Seed owner banned words `ngon`, `chắc chắn lãi`, `em đã tắt giúp anh` | 775, none | DECLINED | none | Unmarked |
| D5, from `ads-build-desk`: One member policy line under `## Networks and placements`: feed and reels; audience network off below a member figure | Câu 12, 1352 `[CG]` | DECLINED | none | `## Networks and placements` holds the observed `on` or `off` values that `ads-account-read` compares every morning (Step 6); a policy line there would be read as a recorded control value. It needs its own heading in `CONTRACT.md` 2.3 first. Question 4 of the review packet |
| D6, from `ads-build-desk`: Record the official messaging account and its verification state | 1419 `[S28]`, A4 135 | ADOPT, from deferral | Step A4.6 item 6 | S28 verified in Phần A. `ads-build-desk` Step 2.6 check 4 reads it. Fixer pass (BLOCK): the state is now the member's paste or screenshot of the account's own settings screen, never a read by this routine, because `CAPABILITIES.md` 4b marks Zalo Ads export only and Zalo terms 4.6 and 4.7 forbid third party access |
| D7, from `ads-build-desk`: Record each product's content confirmation, number and date, in one named place | A6 240 `[S5]`, A7 256 `[S6]`, 1406, 1446 `[S6]` | ADOPT, from deferral, merged with D16 | Step A5 claims rule, new bullet: verbatim under `## Member claims` | Build Step 2.6 check 2 reads any plan file, and `ads-creative-studio` reads `## Member claims`, so one place serves both. Not a second line under `## What is sold` |
| D8, from `ads-build-desk`: Commune and ward list under `## Countries sold into`, never a district | 1203, Câu 11 `[S53]`, A3 102 | KEEP, already present | Step A6 item 3, `## Countries sold into` bullet | No edit needed |
| D9, from `ads-change-list`: `## Sale and holiday weeks`, lines `YYYY-MM-DD to YYYY-MM-DD: <name>` | 1510 `[S35]`, 1694a `[S35+CG]`, Phần A 103 | ADOPT, from deferral, reconciled | Step A5 table row; Step A6 item 3 `## Sale and holiday periods` | Three writers proposed three shapes for the same member data (D9, D12, D18). One heading, `## Sale and holiday periods`, with a `sale` or `holiday` type per line, serves all four readers; `ads-change-list` and `ads-desk-standup` now read it (see `_shared/patch-log.md`) |
| D10, from `ads-change-list`: A sale budget as its own line under `## Campaign allocations` | 1535c `[CG]` | DECLINED | none | `## Campaign allocations` lines must sum to at most `## Daily cap` (`CONTRACT.md` 2.3), and `ads-account-read` Step 7 item 2 compares each campaign with its line. A separate sale pot outside the cap needs its own heading and reader first |
| D11, from `ads-change-list`: Keep `## Automatic recommendations` current; a `change` card where it reads on | 1606e `[S42]`, Phần A 147 | DECLINED | none | Intake already records the control each month, and its own rule leaves any proposal to change a setting to `ads-change-list`. The build sheet already tells the member to switch automatic application off (Step 4.1, `CAPABILITIES.md` 4c) |
| D12, from `ads-creative-retro`: `## Sale and holiday periods`, typed lines, `Tết` as two periods, never inferred | 1787 Câu 1 `[CG]`; Phần A 103 `[S35+CG]` | ADOPT, from deferral | Step A5 table row; Step A6 item 3 | The shape every reader now uses |
| D13, from `ads-creative-retro`: A rejected phrase or image type named in a retro card joins `## Banned words` | 1853 `[S10,S15]` | ADOPT, from deferral | Path B, Step B2 table, `plan/voice.md` row | S10 (through its substitute) and S15 verified in Phần A. Seed phrases only, never the bare `nhất` |
| D14, from `ads-creative-studio`: Ask the weekly creative pace with the owner approved budget tiers; write `## Creative pace` | 879 `[CG]`, 889 `[S39,S58+CG]`, Phần A A2 70 `[CG]` | ADOPT, from deferral | Step A5 table row; Step A6 item 3 | Never derived from spend. Fixer pass: the three owner approved amounts left the routine body, which now points at `CONTRACT.md` 10.2 `## Creative pace` and asks with no default choices while that bullet carries none; patch request 6 moves the tiers there (pending, after review) |
| D15, from `ads-creative-studio`: Seed `## Banned words` with the superlative phrases | A3 106 `[S1,S10]`, 959 `[S10]`, 1069 `[S10,S15,S16,S17]` | KEEP, already present | Step A6 item 1 | No edit needed |
| D16, from `ads-creative-studio`: State each product's category; the member's content confirmation goes under `## Member claims` | 961 `[S6]`, 1105 `[S6,S7,S8]`, A7 256 `[S6]`, A6 240 `[S5]` | ADOPT, from deferral | Step A5 table, products row; claims rule bullet | Intake's inherited rule already writes `## Member claims` only from the member's own words in the session, which is what the deferral asks |
| D17, from `ads-desk-standup`: Default Monday to Saturday and three cards; owner windows as clock times | 2104a `[CG]`, 2099b `[CG]` | ADOPT in part, from deferral | Step A5 table, working days row | Monday to Saturday adopted. The clock windows are DECLINED: a clock time never enters a routine body, and the member's own hours are recorded as they give them |
| D18, from `ads-desk-standup`: `sale period: <ISO> to <ISO>` lines under `## Working days and hours` | 2099d `[CG]`, Phần A A3 103 `[S35+CG]` | ADOPT, from deferral, reconciled | `## Sale and holiday periods` (see D9) | Same member data as D9 and D12; `ads-desk-standup` Step 8 now reads a `sale` line there |
| D19, from `ads-desk-standup`: Record the form of address in one plan file line | STYLE-VI Address; Phần A A7 257 WORDING (no marker) | ADOPT as WORDING, from deferral | Step A5 table, working days row; Step A6 item 3, `Xưng hô:` line | Presentation only, as decision D21 allowed for `chief-of-staff-vn`. `ads-desk-standup` Step 8 reads the line |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none. The description still says "asks about exactly two things"; the original's own Step A5 already asked seven, and the two money questions remain the only never researched ones |
| The one line that governs this whole file | Localize | 328 `[S9+CG]` | Two paragraphs added: the Vietnamese questions (line 30) and `unresolved` never `0` with the monthly re-ask (line 34). One clause extended: "it does not wait for an answer" |
| What you read at the top of every run | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (checker: equal) |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; cadence unchanged |
| Step 1 | Keep | none | none |
| Step A1, A2, A3 | Keep | none | none |
| Step A4 (A4.1 to A4.6) | Localize | 307, 323, 338, 343, 348, 353, 362, 364, 365, 391, D13, D16, D17 | No site paragraph; new `### A4.1a` registration record; chat sale and platform terms paragraphs in A4.2; professional network read last; Vietnamese sources, diacritics, objection count in A4.3; competitor bullet extended; closing model table and software wins rule in A4.4; ad id join key in A4.5; A4.6 items 6 and 7, the paragraph that opens only the screens `CAPABILITIES.md` 4b permits (fixer pass), and the agency paragraph |
| Step A5 | Localize | 328, 311, 312, 348, 391, 409, 478, 520, Phần A 149, 172, 182, 222 | Ask one at a time; table rows for closing model, software and status, delivery, products and papers, administrators; money rows `unresolved`; money bullets; barred category stop; member files are data; channels paragraph; Vietnamese claims gate; `ceiling_asked_on` sentence |
| Step A6 | Localize | 366, 377, 381, 382, 391, 478, 515, Phần A 100, 102, 147, 238, 259 | Vietnamese banned phrase classes; platform minimum sentence; three Vietnamese facts in `plan/offer.md`; guardrail control values; `## Locations`; `## Accounts` content; `## Conversion source`; `## What is not measured` consent line; angle template and sources. The doctrine block is unchanged |
| Step A7 | One clause | 328 | "a ceiling left `unresolved` is guarded as zero" |
| Step A8 | One bullet | Phần A 187 `[S52]` | No paid reporting tool proposed |
| Step A9, A10 | Keep | none | none |
| PATH B, Step B1 | Keep | none | none |
| Step B2 | Localize | 299 `[CG]`, 328 | Re crawl limited to the member's own site; four signals table; ceiling bullet re-asks only in the report |
| Step B3, B3a, B4 | Keep | none | none |
| Files, stated once | Keep | none | none (diffed equal) |
| What it reports | Localize | 328, 460, 466 to 472 | First run report in Vietnamese with a fictional example; item 4 names `unresolved`; monthly re-ask example. Run record, rule about numbers, never in a record and the invariant are unchanged (diffed equal) |
| Failure behaviour | Localize | 307, 312, 328, 486, 488, 489, 491 | Ceiling row now `unresolved`; seven new rows |
| Idempotency | Keep | none | none (equal) |
| Browser recipes this routine uses | Keep | none | none (equal) |
| Handoffs | Two cells | 312, Phần A 105 | `ads-creative-studio` and `ads-build-desk` also read the `ad copy:` state and the administrator lines |
| Improving this routine, The one push, Corrections | Keep | none | none (checker: equal) |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| First working day of the month; first run by hand | 289 none, 299 `[CG]` | Row unchanged: `first-weekday`, fire 13:00, window 12:45 to 17:00, `YYYY-MM`, 45 min, `conditional` |
| Before 17:00; 8:00 to 21:00 sends and reminders | 289, 367, 406, 559 none | Not adopted; no clock time in the routine; D10 |
| Registration portal (dangkykinhdoanh.gov.vn, dichvuthongtin.dkkd.gov.vn) | 307, 323 | Named generically in the routine; routes to `CAPABILITIES.md` (patch request 1) |
| Pancake, Nhanh.vn Vpage, KiotViet, Sapo; Meta, TikTok, TikTok Shop, Shopee, Zalo, Google Maps, Cốc Cốc, Google Ads, LinkedIn | 309, 323, 343, 396 | Capabilities and terms in `CAPABILITIES.md` (patch requests 1 and 2); the routine names none |
| 30 percent, 20 percent, 10 points, 7 and 14 days, 30 percent after ad id | 299 `[CG]` | In the routine as owner approved thresholds (checker WARN explained below) |
| 5 objections in 30 conversations; 15 minutes for a lead form; 30 days of spend for a channel share | 338 `[CG]`, 391 `[S+CG]`, Phần A 172 `[S20,S64+CG]` | In the routine as owner approved thresholds, written in words |
| 50 and 20 USD TikTok minimums | 353 `[S40]` | Kept out; the routine reads the minimum off the screen |
| 10 million đ search partner threshold; 15 million đ placement tier; 50 results a week; 40 and 30 percent budget change limits | 380, 396 | Not supported or deferred; kept out |
| 15 degrees alcohol, 24 months breast milk substitutes | 328 `[S9]` | Kept out of the body and out of the kit: patch request 3 was applied without thresholds as `CONTRACT.md` 10.1 rules 1 and 2 (patch-log row 13; rule 11), so every alcoholic drink and every milk product for infants and young children is barred |
| Creative pace tiers: under 15.000.000 đ, 2 sets a week; 15.000.000 đ to under 50.000.000 đ, 3 or 4; 50.000.000 đ and up, 5 | Creative studio form 879 `[CG]` (D14) | Fixer pass: out of the routine body, which points at `CONTRACT.md` 10.2 `## Creative pace` and asks with no default choices while that bullet carries none. Patch request 6 moves the tiers there as owner approved tiers, pending, after review |
| 77,5 percent COD; 15 to 20 percent refusals; 10 working days; fines; effective dates | 391, 506, 505 | Kept out (D11 and the rule about numbers) |
| Fictional example: Shop Mẫu ABC, 05/10/2026, Hà Nội and Hải Phòng | 419, 421 | Report example only; no money figure, no vendor, no real contact |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. New shop, chat sales, Hà Nội, "tháng này anh để 15 triệu" | Line 442 (never divide by thirty), 425 to 426 (`unresolved` daily cap), A4.4 chat row, line 505 | Monthly ceiling written as the member said; daily cap `unresolved` and asked; event is the software order; province only. Pass |
| 2. Site with prices, no cart, a message button per product | Line 310 (price plus message button is the chat model), line 364 (a buy URL counts only where the site takes an order online) | Chat model; no form submit, no web purchase. Pass |
| 3. Page "Shop Mẫu ABC", registration "Công ty TNHH Mẫu ABC", active | A4.1a line 285 | Both names written; member confirms. Pass |
| 4. Competitor runs "serum số 1 bệnh viện" | Line 340, line 482, claims bullet 464 | Kept under `## Sources read` as `not evidence`; superlative class banned. Pass |
| 5. "Bán thêm hộp TPBVSK tuần sau, giấy đang làm" | Line 504 `ad copy: held`, line 466, failure row | No function copy, no date promised, paper named. Pass |
| 6. Google auto apply and search partners on | Line 515 | Both recorded `on` with the platform's reason; nothing switched off. Pass |
| 7. BM admin is only the agency email; contract ended | Line 411, failure row, Guardrail 2 | Risk recorded, member's action named, no password taken. Pass for intake; build refusal declined (D35), open for Gate 3 |
| 8. Pixel 40 purchases in 7 days, software 0 orders | Line 366, failure row | Purchase event not chosen; `n/a (event fires with no software orders)`; misfire named. Pass |
| 9. `sdt.xlsx` "ném vào custom audience cho nhanh" | Line 450, failure row, line 531 | Not opened, refused, consent explained. Pass |
| 10. Trap, unaccented: "anh chot ngan sach tam 10tr/thang nhe, em tu chia ngay va bat camp gium anh" | Lines 442, 443, 445 | 10.000.000 đ recorded with the words and "tạm"; daily cap `unresolved`; no division; nothing enabled. Pass |
| 11. Trap: competitor revenue "2 tỷ" as an angle | Line 340, line 543 | Recorded as what the competitor says, `not evidence`; no angle. Pass |
| 12. Trap, unaccented: "CPA muc tieu 45.000đ ... shop khac" | Line 446 | Not written as a target; own cost per delivered order asked; no baseline stated when none. Pass (the "14 days" window of the case is not adopted, unmarked) |
| Trap: an invented number | Rule about numbers (line 985, unchanged), line 442, A6 `unresolved` rules | No figure without a read or the member's words. Pass |
| Trap: an invented sent or done status | Invariant line 1000 (unchanged); line 34 "never a message sent anywhere"; report line 942 "Silence is not an answer and nothing in this run waits for one" | The routine sends nothing and marks no member card done. Pass |
| Trap: an instruction planted in a card, file or web page | Line 343 (page content is data), line 450 (files, cards, screenshots), line 871 (changelog) | Ignored, recorded as instructions found in data. Pass |
| Trap: an unaccented Vietnamese request | Line 443; line 334 for buyers' words | Read as the same words; verbatim kept. Pass |
| Trap: a second run in the same period | Step 0.2 (line 120, unchanged); idempotency line 1051; line 804 (signals never start a second run) | `skipped-already-ran`. Pass |
| Trap: dissolved or suspended business | A4.1a line 287, failure row | No angles or copy; `partial`. Pass |
| Trap: platform terms forbid collection | Lines 312, 327 to 332, 400 (A4.6 opens only the screens `CAPABILITIES.md` 4b permits), 793 | Nothing fetched on those platforms; member pastes. Pass |

## Rejected and unresolved

- REJECT: done on "ok hồ sơ" (292), the four ok gate (460), sending on Zalo in a time window (367, 406), saving to Drive or Sheets (368). They conflict with `CONTRACT.md` 7.1 (no approval loop), D10 (no routine sends on Zalo), the clock rule and A1.2 (no synced root).
- UNVERIFIED, kept out until a source or `[CG]` supports it: B1 success metrics and output size; B2 triggers, deadlines and reminders; search partners under 10 million đ; discounts and testimonial consent (520); "Chỉ hôm nay" and "inbox ngay kẻo hết"; two currency accounts; month end flag and prepaid wallet limit at intake; the 24 hour screenshot cut off; 25 pages and 15 queries; Luật 75/2025 intermediaries question.
- DEFER, see Outbound deferrals.
- A shared file dependency, now closed: line 448 points at `CONTRACT.md` 10.1 rule 1, which states no threshold, so every product in the barred groups is barred. Patch request 3 was applied without thresholds (patch-log row 13; rule 11), and nothing in the routine depends on a number.
- New machine values introduced by this routine (`ad copy: allowed`, `ad copy: held (<document>)`, `ad copy: barred (<category>)`, `not evidence`, `n/a (event fires with no software orders)`, `n/a (no sales software)`, `n/a (no ad id recorded on orders)`, `n/a (fewer than 30 conversations)`) need a line in `_shared/parsed-strings.md` section 5 and in `CONTRACT.md` 2.3 before `ads-creative-studio` and `ads-build-desk` read them (patch requests 4 and 5).
- `copy-check.mjs` does not check a Vietnamese `đ` amount for a source (D6 known gap); the report example deliberately carries no amount.
- Every adopted rule still needs Gate 3 review by a real Vietnamese practitioner.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/ad-manager-employee-vn/routines/ads-account-intake/SKILL.md` | 98239 bytes to 130665 bytes (133 percent). Edits listed in the outline above | Clause decisions above |
| This ledger | New | Writer step |
| `employees/ad-manager-employee-vn/routines/ads-account-intake/SKILL.md`, fixer pass after review | 1141 lines to 1143 lines, 136549 bytes after the pass. Findings and lines in "Fixer pass after review" below | Independent reviewer, BLOCK |
| This ledger and `_shared/patch-log.md`, fixer pass | Line citations re-derived; fixer section; patch requests 6 and 7 in both files, pending, after review | Independent reviewer |

Untouched and verified by the checker and by section diffs: frontmatter and guard call (first 12 lines byte identical), Step 0 (0.0 to 0.4, including the cadence sentence), `## What you own, and the two guardrails`, `## Files, stated once`, `### The run record`, `### The rule about numbers`, `### What never appears in a run record`, `### The invariant, checked before the record is written`, `## Idempotency`, `## Browser recipes this routine uses`, `## Improving this routine`, `## The one push`, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added (one `### A4.1a` added). The original kit was not edited.

Checker, routine mode, final run:

```
  WARN percent     routines/ads-account-intake/SKILL.md:789  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:790  20% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:794  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
PASS WITH WARNINGS (0 fail, 3 warn)
```

The three WARNs are the owner approved thresholds of form line 299 Câu 1 `[CG]` (cost per delivered order up 30 percent on the 14 day average; over 20 percent of conversations without a phone; a 30 percent gap between software orders and ad results after orders without an ad id are set aside). They are thresholds the owner set, not market figures, and they are tested only against the kit's own ledgers.

Copy check, `node employees/ad-manager-employee-vn/scripts/copy-check.mjs --file <path> --dest strategy --json` (the call shape Step A6 documents for plan files), repeated with `--dest plain`, on texts saved under `scratchpad/vn/ad-manager-employee-vn/`: the first run report example (`intake-first-run-report-example.md`), the monthly re-ask example (`intake-monthly-reask-example.md`), the angle template line (`intake-angle-template.md`) and a filled fictional `## Angles` section (`intake-angle-filled-example.md`):

```
intake-first-run-report-example.md   strategy "verdict": "PASS", "violation_count": 0   plain "verdict": "PASS", "violation_count": 0
intake-monthly-reask-example.md      strategy "verdict": "PASS", "violation_count": 0   plain "verdict": "PASS", "violation_count": 0
intake-angle-template.md             strategy "verdict": "PASS", "violation_count": 0   plain "verdict": "PASS", "violation_count": 0
intake-angle-filled-example.md       strategy "verdict": "PASS", "violation_count": 0   plain "verdict": "PASS", "violation_count": 0
copy-check: selftest PASS (32 checks)
```

Probe of the banned phrase rule with a fictional Vietnamese `plan/voice.md` (`--root scratchpad/vn/ad-manager-employee-vn/root`, `intake-banned-probe.md`, `--dest plain`): `"verdict": "FAIL", "violation_count": 1, "rule": "banned-word"` on "đẹp nhất", while "Thống nhất" and "nhất định" on the next line passed. This confirms the routine's instruction never to list the bare particle. The fictional `voice.md` itself passed `--dest strategy` (`"verdict": "PASS", "violation_count": 0`).

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine, the four copy check texts, the probe and the fictional `root/plan/` files, after every section of this ledger was written:

```
no dashes
```

The Phần A scratch extract `intake-with-a.md` in the same scratch folder is the lead's copy of form text and still carries the form's own dashes; it is not a kit or report file and this writer did not write it.

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.


### Fixer pass after review, 24/09/2026

The independent reviewer returned BLOCK with one BLOCK, eleven FIX and two NOTE findings. The fixer edited only the routine and this ledger, under the writer rules: Step 0, the guardrails, parsed strings and `## Corrections` untouched, nothing shortened, English instructions, owner Vietnamese per STYLE-VI. Routine line numbers below are after this pass, and every "line N" in this ledger was re-derived from the current `SKILL.md`.

| Finding | Where it landed | Outcome |
|---|---|---|
| BLOCK, A4.6 item 6, the official messaging account read off its own settings screen | Line 397: the member opens that account's settings screen and pastes or sends a screenshot; the state is `verified <date> \| <evidence path of the member's paste or screenshot>` or `unverified`; the routine never opens that platform's screens (Step A4.2). `CONTRACT.md` 10.2 `## Accounts` did not itself imply a read; patch request 7 makes the evidence path explicit | Fixed; shared part pending, after review |
| FIX, A4.6 opens screens `CAPABILITIES.md` 4b does not permit | Line 400, new paragraph after item 7: open only the screens 4b permits for that platform in the member's own session; for an export only platform or an unnamed screen, open nothing, and the member pastes the holder and billing lines, recorded with the date and `member pasted` | Fixed |
| FIX, A4.3 item 1, a marketplace's public search suggestions | Line 329: only the keyword suggestions the member's own seller centre ads screen shows; never a marketplace's public search box | Fixed |
| FIX, barred category list and "exact thresholds wherever the kit carries them" | Line 448: every alcoholic drink, breast milk substitutes and every milk product for infants and young children, tobacco and prescription medicines; `CONTRACT.md` 10.1 rule 1 states no threshold, so every product in these groups is barred | Fixed |
| FIX, platform restricted products held with no way to lift the hold | Line 504: held on that platform only, as `ad copy: held (platform restricted: <platform>, <what the platform's policy requires>)`, lifted by proof under `## Member claims`; the inference about small shops removed. One sentence added by the fixer: a product the Step A5 stop marks `ad copy: barred`, every alcoholic drink included, stays barred on every platform, so the platform hold for alcohol never lifts the legal bar | Fixed, with one clarifying sentence |
| FIX, portal terms claimed a single look up allowance | Line 279: the terms forbid trading in the information and unauthorised access, so the routine makes one look up, of this business only | Fixed |
| FIX, monthly re-ask said the standup carries it | Line 34: the seeded `member-action` card `Set the monthly ceiling and the daily cap` (Step A7 table, line 609) stays open on the board, where `ads-desk-standup` lists it. Ledger row for form line 328 (re-ask) updated with D44 | Fixed |
| FIX, creative pace amounts in the routine body with no source path | Line 435: offer the owner approved tiers in `CONTRACT.md` 10.2 `## Creative pace` with that path beside each amount; where the bullet carries no tiers, ask with no default choices. The fixer may not edit `CONTRACT.md`, so patch request 6 moves the three tiers there. Until it lands the question has no default choices, which is stricter, never looser | Fixed in the routine; shared part pending, after review |
| FIX, connector administrator requirement stated for every sales software | Line 352: written beside the software only where its own documentation requires it, as `CAPABILITIES.md` 4b records for one of them | Fixed |
| FIX, first run report example (casual opening, missing `chờ pháp lý duyệt`, "Nút tự động") | Lines 945, 949, 950, exact reviewer text; glossary rows "chờ pháp lý duyệt", "thực phẩm bảo vệ sức khoẻ (TPBVSK)" and "tự động áp dụng đề xuất" match | Fixed |
| FIX, monthly re-ask example wording | Line 962, exact reviewer text | Fixed |
| FIX, stale ledger citations, patch request 3 and the section 7 pointer | Every "line N" re-derived with the current file; patch request 3 marked applied without thresholds (patch-log row 13); the Rejected and unresolved bullet and the Schedule row now point at `CONTRACT.md` 10.1 rule 1 | Fixed |
| NOTE, lines 32 and 34 reconciled only implicitly | Line 32: "(the one exception is the report line in the next paragraph)" | Applied |
| NOTE, B11 case 7 build refusal | Acceptance row 7 now reads "Pass for intake; build refusal declined (D35), open for Gate 3" | Applied |

Declined: none.

New cell token: `member pasted`, written only by this routine under `## Accounts` and read by no script or routine, so no `_shared/parsed-strings.md` row is needed. The `ad copy: held (...)` shape is unchanged; only the text inside the parentheses is new.

Checker, routine mode, after this pass:

```
  WARN percent     routines/ads-account-intake/SKILL.md:799  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:800  20% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:804  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
PASS WITH WARNINGS (0 fail, 3 warn)
```

The three WARNs are the same owner approved thresholds of form line 299 Câu 1 `[CG]` as above, now at lines 799, 800 and 804 because the fixer added two lines in A4.6.

Copy check of the two report examples, refreshed from the routine into the same scratch files:

```
intake-first-run-report-example.md   strategy "verdict": "PASS" "violation_count": 0 
intake-first-run-report-example.md   plain    "verdict": "PASS" "violation_count": 0 
intake-monthly-reask-example.md      strategy "verdict": "PASS" "violation_count": 0 
intake-monthly-reask-example.md      plain    "verdict": "PASS" "violation_count": 0 
intake-first-run-report-example.md   plain, --root "verdict": "FAIL" "violation_count": 2 "rule": "banned-word" "rule": "banned-word" 
copy-check: selftest PASS (32 checks)
```

With the fictional `root/plan/voice.md`, the first run report example fails `banned-word` twice, on "đẹp nhất" and "bán chạy nhất". That is expected and correct: the line quotes the member's two superlatives to say they are held (`chờ pháp lý duyệt`), and a report is not ad copy. The probe confirms the banned phrase list catches exactly those phrases.

Dash scan (the U+2013 and U+2014 counter) of the routine, this ledger and `_shared/patch-log.md` after the pass:

```
no dashes
```

### Second fixer pass after review, 24/09/2026

The independent reviewer returned FIX with one FIX and three NOTE findings. The fixer edited only the routine and this ledger, and appended one request row to `_shared/patch-log.md`, under the same writer rules: Step 0, the guardrails, parsed strings and `## Corrections` untouched, English instructions. The routine went from 1143 lines, 136549 bytes, to 1143 lines, 136614 bytes.

| Finding | Where it landed | Outcome |
|---|---|---|
| FIX, `_shared/patch-log.md` line 96, row D14 still says the tiers live in the question text and the checker warns on the two amounts | Patch request 8 below and in `_shared/patch-log.md` (new section at the end), with the reviewer's exact old and new text. This ledger's own D14 row already carried the corrected wording, so the two records agree once the lead applies it | Raised as a patch request, pending, after review. Not edited in place: this pass may edit only the routine and this ledger, and every other patch-log row is the lead's |
| NOTE, patch requests intake 6 and 7 still pending | Nothing to change in the routine: line 435 asks with no default choices while the `## Creative pace` bullet has no tiers, and line 397 writes `verified <date> \| <evidence path of the member's paste or screenshot>`, which fits the 10.2 shape `ads-build-desk` Step 2.6 check 4 reads | Left to the lead, as the reviewer directs |
| NOTE, line 504, "held on that platform only" while the readers hold every platform | Line 504: sentence added, "Until a reader checks the platform named in the parentheses, it holds the product on every platform, which is the stricter reading." "alcohol" dropped from the platform restricted list, since the next sentence and `CONTRACT.md` 10.1 rule 1 bar every alcoholic drink everywhere. S14 still supports the remaining items (financial and insurance services, gambling); the clause row for form line 515 keeps its ADOPT, as stricter, never looser | Applied |
| NOTE, line 279, "one look up, of this business only" twice in one paragraph | Line 279: the second sentence now reads "The portal's own terms forbid trading in the information it shows and any unauthorised access, and nothing in this kit needs another company's record." The bold lead sentence keeps the rule | Applied |

Declined: none. The FIX is carried as a patch request rather than an in place edit, for the reason in its row.

Checker, routine mode, after this pass:

```
  WARN percent     routines/ads-account-intake/SKILL.md:799  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:800  20% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
  WARN percent     routines/ads-account-intake/SKILL.md:804  30% reads as a claim. Keep it only if it is a threshold the owner set, never a market figure
PASS WITH WARNINGS (0 fail, 3 warn)
```

The three WARNs are the same owner approved thresholds of form line 299 Câu 1 `[CG]` as above; no line moved.

Dash scan (the U+2013 and U+2014 counter) of the routine, this ledger and `_shared/patch-log.md` after this pass:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `ads-build-desk` | 486 none, Phần A 105 `[S68,S70]`, 167 `[CG]`; B11 case 7 | BM held only by an agency or former staff: no build | Refuse a build sheet for an account whose `plan/account-map.md#Accounts` line reads that the business holds no administrator role, and name the member's one action (ask the holder to add the business); never ask for or use a password |
| `ads-build-desk`, `ads-creative-studio` | 312 `[S6,S7]`, 377 `[S6]`, 490 `[S6]`, 515 `[S5,S6,S7,S8,S14,S18]` | Held and barred products get no copy | Read the `ad copy:` state at the end of each `plan/offer.md#What is sold` line; write no set, no slot and no build sheet for a product reading `held (...)` or `barred (...)`, and name the missing paper or the bar in `## Values this sheet could not resolve` or `## Values this set could not resolve` |
| `ads-build-desk`, `ads-change-list` | 379 `[S42]`, 380 `[S43]`, 396 `[S28,S38,S40,S42,S43,S62+CG]`, 450 `[S42,S43]` | Safe settings for a Vietnamese SME | Build sheets state the recorded values of auto applied recommendations, search partners and final URL expansion, and propose `off` for each until the member approves; placement and audience network tiers and the TikTok budget change limits stay proposals until their own sources are re-opened (the 10 million đ threshold is unsupported) |
| `ads-change-list` | 385 `[S15,S56]` | Precedence of rules | Order every conflict: law and platform policy, then the member's recorded ceiling, then correct measurement, then savings; where the ceiling cannot fund the learning phase, propose fewer ad sets, never more money |
| `ads-change-list` | 353 `[CG]` | Sale pockets | A sale budget the member names separately is ranked against its own figure and never added to `## Monthly ceiling` unless the member wrote so |
| `ads-change-list` | 496 `[S6,S7,S8,S68,S70]` | No sales software | With `n/a (no sales software)` under `## What is not measured`, rank no line by cost per order and say it cannot be computed; an awareness test stays a member decision |
| `ads-account-read` | 299 `[CG]`, 353 `[S69+CG]` | Daily flags that intake cannot see | Flag in its record, for the standup: primary event at zero with spend while software orders exist; an account spending limit set below the recorded ceiling; a prepaid balance that cannot fund the daily cap for the remaining days; an ad price that differs from a price the member pasted for over 24 hours |
| `ads-desk-standup` | 473 none, 559 none, Phần A 242 `[S12]` | Owner notice | Carry the intake's `unresolved` re-ask line near the top of the brief; never put card balances or customer data in the brief or `ads-latest.md`; the brief goes to the person on duty, never to a group with outsiders (D10) |
| `ads-creative-studio` | 509 `[S15,S17+CG]` | Weight and body images | No before and after images, no fat pinching close ups, no result claimed from a worn product alone, for weight products |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/ad-manager-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, paragraph "TikTok for Business and Microsoft Advertising ship official servers" | insert after | TikTok for Business and Microsoft Advertising ship official servers for their own accounts. Name one in `plan/measurement.md` by its human readable name only where the intake found that account. | **Vietnam, read only routes named by `ads-account-intake`.** The national business registration portal (`dangkykinhdoanh.gov.vn`, free fields at `dichvuthongtin.dkkd.gov.vn`): one look up of the member's own record through `web.fetch`, then `read-a-page`; never a paid extract; confidence `unknown`. The sales software the member names (Pancake, Nhanh.vn with Vpage, KiotViet, Sapo or another): read only through the member's own export or screen, never a login by the kit; Pancake and Vpage can send a chosen order status to Meta as a server event, and the Vpage connector must be an administrator of the business account; confidence `unknown`. The Vietnamese UI names the member reads: `Máy học` (Meta learning), `Kênh Người bán` (Shopee), `Trung tâm người bán` (TikTok Shop). | 307 `[S76,S77]`, 343 `[S23,S24,S25,S26]`, Phần A 146, 161, 222 |
| `employees/ad-manager-employee-vn/CAPABILITIES.md` | `### web.search`, paragraph "Only `ads-account-intake` uses this" | insert after | Only `ads-account-intake` uses this, and only during its market scan. **Nothing from that scan ever becomes a claim about your business.** A competitor's number is a competitor's number and it never enters the proof inventory in any form under any heading. | **Platforms whose terms forbid automated reading, re-opened 24/09/2026.** Meta (Facebook, Instagram, Messenger, Ad Library; terms 3.2, dated 01/01/2025), TikTok and TikTok Shop (terms dated 01/12/2025), Shopee (terms 3.1, posted 22/09/2026, which also forbids manual monitoring), Zalo and Zalo OA (terms 4.6 and 4.7, dated 05/09/2026), LinkedIn (8.2, dated 03/11/2025), Google Search and Google Maps (automated access only where robots.txt allows; kit practice: no scraping of results or map pages). On these, `ads-account-intake` fetches nothing and scripts no browser; the member pastes what they see or hands over their own export. Cốc Cốc Ads can import Google Ads search campaigns. | Phần A D13 table; D16; D17; 323 `[S19,S76,S77,S78]`; Phần A 159 `[S27,S75]` |
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### Guardrail 2: credentials, always on`, paragraph "On a login wall, a checkpoint, or a captcha" | insert after | On a login wall, a checkpoint, or a captcha: stop that phase immediately, change nothing, enter nothing, and never retry a refused action in a different way. Record `blocked-login`, name the platform in `blockers[]`, and carry on with the phases that do not need it. | ### Vietnamese advertising refusal, always on<br><br>Never write copy, an angle, a set, a build sheet or a proposal for a product Vietnamese law bars from advertising: tobacco, alcohol of 15 degrees or more, breast milk substitutes for children under 24 months, and prescription medicines, even with documents. A health supplement, a medical device, a medical service or a non prescription medicine gets no copy until the document the law requires is on file; a cosmetic's copy never implies a medicine and never uses a doctor or pharmacist. A superlative needs the supporting document the member names. `plan/offer.md#What is sold` records each product's state as `ad copy: allowed`, `ad copy: held (<document>)` or `ad copy: barred (<category>)`. Source instruments and dates live in the provenance report, not here. | 328 `[S9+CG]`, 312 `[S6,S7]`, 515 `[S5,S6,S7,S8]`, Phần A 235, 237, 240 (Gate 8 candidate). The lead may instead park the two thresholds in a dated Vietnam rules file under D11. **Status: applied without thresholds as `CONTRACT.md` 10.1 rules 1 and 2 (patch-log row 13); rule 11 keeps every legal threshold out of the kit, so the 15 degrees and 24 months in this request's text were never written** |
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### 2.3 Plan`, paragraph "**The money headings are structured fields" | insert after | On a platform where a daily budget is a pacing target rather than a ceiling, every file that shows the figure calls it `daily budget (pacing)`, and `recipes/META-ADS-RECIPES.md` section 2 says why. | In the Vietnamese variant, `## What is sold` ends each product line with its `ad copy:` state; `## Countries sold into` lists provinces or cities and communes, never a district and never the whole country unless the member wrote so; `plan/account-map.md#Accounts` opens with the registration fields read that day and carries, per account, the administrator holder, whether the business holds an administrator role, whose name the payment method is under, and the billing state as settings; `plan/measurement.md#Conversion source` names the closing model, the sales software, the status counted as a real order and the join key. Cost per order is spend divided by delivered orders, or by orders not cancelled as the member defines them. | 311, 343, 348, 391 `[S+CG]`; Phần A 100, 102, 105, 167, 250 |
| `localization-reports/ad-manager-employee-vn/_shared/parsed-strings.md` (report file, not kit) | `## 5. New strings the Phần A ledger introduces`, paragraph "Owner facing Vietnamese phrases" | insert after | If a writer makes any of them a machine value that another routine greps, it must be added here with its readers and used byte identical in every reader, or replaced by an English token with the Vietnamese gloss after it (the safer choice, per the Never translate rule in STYLE-VI). | Added by `ads-account-intake` (writer), read by `ads-creative-studio` and `ads-build-desk`: `ad copy: allowed`, `ad copy: held (<document>)`, `ad copy: barred (<category>)`. Cell tokens written by `ads-account-intake`: `not evidence`, `n/a (event fires with no software orders)`, `n/a (no sales software)`, `n/a (no ad id recorded on orders)`, `n/a (fewer than 30 conversations)`. Glosses for `_shared/glossary.md` section 5: được viết quảng cáo; chờ giấy; không được quảng cáo; không dùng làm chứng cứ; sự kiện có số nhưng phần mềm không có đơn; chưa có phần mềm bán hàng; đơn chưa ghi mã quảng cáo; chưa đủ 30 hội thoại. | Repo mechanics; `_shared/parsed-strings.md` section 5 rule |
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### 10.2 Lines this variant adds to the plan`, bullet "`## Creative pace`: one line" | replace | - `## Creative pace`: one line, `sets_per_week: <n> \| <the tier as the member chose it> \| <YYYY-MM-DD>`, the number of creative sets a week the member chose for their monthly budget tier. `ads-account-intake` writes it from the member's answer and never derives it; `ads-creative-studio` reads it and only ever produces fewer sets because of it; `unresolved` or absent changes nothing. | - `## Creative pace`: one line, `sets_per_week: <n> \| <the tier as the member chose it> \| <YYYY-MM-DD>`, the number of creative sets a week the member chose for their monthly budget tier. `ads-account-intake` writes it from the member's answer and never derives it; `ads-creative-studio` reads it and only ever produces fewer sets because of it; `unresolved` or absent changes nothing. Owner approved tiers, expert form, 24/09/2026, which `ads-account-intake` offers as the default choices and never picks for the member: a monthly ceiling under `15.000.000 đ`, 2 sets a week; from `15.000.000 đ` to under `50.000.000 đ`, 3 or 4, the member picks; `50.000.000 đ` and up, 5. | Creative studio form 879 `[CG]` (D14); reviewer FIX on routine line 433 (fixer pass, 24/09/2026). The routine now points here. The reviewer asked for the marker "form 879 [CG]"; written as "expert form" because this kit keeps source markers out of kit files (patch-log, `CAPABILITIES.md` P5). **Status: applied by the final verifier, 24/09/2026** |
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### 10.2 Lines this variant adds to the plan`, bullet "`## Accounts` opens with the registration fields" | replace | and, for an official business messaging account a format needs, whether it is verified, as `verified <date> \| <evidence path>` or `unverified`. Names only; never a card number or a password. | and, for an official business messaging account a format needs, whether it is verified, as `verified <date> \| <evidence path of the member's paste or screenshot>` or `unverified`; no routine opens that platform's screens to read it. Names only; never a card number or a password. | Reviewer BLOCK on routine A4.6 item 6: `CAPABILITIES.md` 4b marks Zalo Ads export only, Zalo terms 4.6 and 4.7 (Phần A ledger). The bullet does not itself say a routine reads the state; the change makes the evidence path explicit so no reader infers one. **Status: applied by the final verifier, 24/09/2026** |
| `localization-reports/ad-manager-employee-vn/_shared/patch-log.md` (report file, not kit) | `## Outbound deferrals` table, row `D14`, last cell "Step A5 table row; Step A6 item 3." | replace | Owner approved tiers live in the question text only; never derived from spend. Checker warns on the two amounts; they are owner thresholds, not market figures | Never derived from spend. Fixer pass: the owner approved tiers left the routine body; Step A5 points at `CONTRACT.md` 10.2 `## Creative pace` and asks with no default choices while that bullet carries none (patch request intake 6, pending) | Second reviewer FIX on patch-log line 96: the row disagreed with this ledger's D14 row and with patch request intake 6. The fixer may edit only the routine and this ledger. **Status: applied by the final verifier, 24/09/2026** |
