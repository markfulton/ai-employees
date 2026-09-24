# sales-desk-setup: provenance ledger

Status on 2026-09-24: **ledger complete, Gate 2 sources re-opened, routine edits applied to the variant routine and checked (see Files and checks).** Shared file changes this routine depends on are listed at the end as patch requests; the writer edited no shared file. Independent review returned FIX on 24/09/2026; the fixer pass is recorded at the end of Files and checks, and its two shared file requests are marked pending, after review.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/07_Sales/phieu-da-dien.md`, `## B-1. sales-desk-setup`, form lines 253 to 534. Phần A is not re-decided here; rows cite `_shared/phan-a-ledger.md` by its form line number.
- Extract: `extract_form_section.py --routine sales-desk-setup`, kept at `scratchpad/vn/sales-employee-vn/sales-desk-setup-extract.md` and `.json`. 136 rows and answers: 25 with `[S#]`, 8 with `[CG]`, 5 with both, 108 unmarked (30 of those are form scaffolding). B0 box ticked: `Làm khác`.
- Form author (A1): an AI sub agent playing a Vietnamese B2B SDR, research draft dated 23/09/2026. **No clause has been confirmed by a person working in Vietnamese B2B sales.** `[CG]` marks are the owner's review decisions, not a practitioner's.
- Original kit and routine: `employees/sales-employee`, `routines/sales-desk-setup/SKILL.md` (963 lines, 89315 bytes). Original kit not edited (checked with `cmp` against `HEAD`).
- Variant kit and routine: `employees/sales-employee-vn`, same routine id; the only kit file edited.
- Source index: `07_Sales/literature/nguon.md`, viewing date 23/09/2026 on every row. Re-opened on 24/09/2026 below.
- Kit version before and after: 1.8.0 before; the one minor bump for the whole kit is the lead's (D14), not this routine's.
- Binding decisions used: D3, D8 (owner replies), D9, D10 (no Zalo automation), D11 (no legal numbers in kit files), D13 and D17 (platform terms), STYLE-VI.

## Sources re-opened

Gate 2 covers sources behind an ADOPT that states a law, a number or a platform rule and that `_shared/phan-a-ledger.md` has not already verified. Already verified there and only cited here: S21, S22, S24, S26, S27, S45, S49, S51, S55, S59, S61, S63, S64, S75, S76 (and S50 recorded there as HTTP 403, with S51 carrying the rule).

| S# | URL opened | Date checked | Clause it supports here | Verdict |
|---|---|---|---|---|
| S47 | thuvienphapluat.vn/phap-luat-doanh-nghiep/cong-viec-phap-ly/tieu-chi-xac-dinh-doanh-nghiep-nho-va-vua-525.html | 24/09/2026 | Câu 7 (5), Câu 10: size classes for micro, small and medium enterprises by Nghị định 80/2021 | Direct page HTTP 403. Re-opened the official Ministry of Justice legal support page htpldn.moj.gov.vn/Pages/chi-tiet-tin.aspx?ItemID=1850 found by WebSearch: Nghị định 80/2021/NĐ-CP issued 26/08/2021, replaces Nghị định 39/2018; classes by sector using the average number of workers with social insurance plus revenue or capital; enterprises self declare. **Confirmed for the qualitative rule only.** The two fetch summaries disagreed on the exact thresholds, so no threshold is taken from them; none enters the kit in any case (D11) |
| S68 | api.vietrade.gov.vn/.../Danh sách HCTLVN năm 2026 VIE (PDF) | 24/09/2026 | 295, Câu 3: a public trade fair catalogue published by the national trade promotion agency | Confirmed. Text extracted from the PDF streams: title `Danh mục Hội chợ Triển lãm tại Việt Nam 2026`, entries by month with venue, organiser and stand counts (first entry a spring fair in Đà Nẵng, 22/01 to 27/01/2026) |
| S20 | thanhnien.vn/khoi-to-2-bi-can-lien-quan-vu-mua-ban-120-trieu-du-lieu-ca-nhan-185260921162320812.htm | 24/09/2026 | Câu 2 "tránh file bán data", case 9 | Confirmed: 21/09/2026, prosecution over about 120 million records including household business and enterprise data, traded through Facebook, Telegram and closed groups. Supports why a bought list is refused; the operative prohibition rests on S63 (Phần A 225) |
| S38 | topcv.vn/brand/topcv/tuyen-dung/chuyen-vien-kinh-doanh-mang-tu-van-tuyen-dung-j1095867.html | 24/09/2026 | Câu 9: a B2B sales role working Monday to Friday | Confirmed: the posting reads `Thứ 2 - Thứ 6 (từ 08:00 đến 17:00)`. One posting; it supports "do not guess Saturday", not a market wide claim |
| S82 | vietnamworks.com/nhan-vien-kinh-doanh-b2b-kv | 24/09/2026 | Câu 9: B2B postings off on Saturday | **Not verified**: the page returned only loading placeholders (39 listings named, none rendered). Recorded as "not re-opened, index viewing date 23/09/2026". The Saturday rule rests on Phần A 247 `[CG]` and S38, not on S82 |

Not re-opened because nothing here is adopted from them: S37, S83 (used only to reject telesale figures), S39 (Phần A 100a carries it), S65, S66, S67 (no setup behaviour).

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. "via A<line>" cites the Phần A ledger row that already decided the clause. Split rows carry a letter. Scaffolding rows (form instructions and table headers) are listed once at the end of the table and carry no clause.

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 263a B0 (1) no SaaS price page and no cold email; first touch by calling the company number, chat only after they agree | `[S39][S24]`; order carried by A 100a, A 172 `[CG]` | ADOPT | Step A6.6 "The Vietnamese order of channels"; Step A6.3 price lines | Phần A decided it; S24 and S39 alone do not prove the order |
| 263b B0 (2) segment adds province, signer, influencer, invoicing | none here; signer and influencer via Câu 10 `[CG]` and A 99a; province via Câu 6 `[S49]` | ADOPT | Step A4.4 segment paragraph, Step A6.4 field list | Supported parts only; invoicing per segment stays in offer.md (A 105a) |
| 263c B0 (3) tests read on the registration portal, websites, job posts; no LinkedIn filter URL | none here; Câu 7 `[S26][S27]`, Câu 10 `[S26]` | ADOPT | Step A4.5 test set, Step A4.4 `search_url:` | Carried by the marked answers |
| 263d B0 (4) Monday to Friday default; Saturday morning only when declared | none here; A 247 `[CG]`, Câu 9 `[S38]` | KEEP | Step A5 working days row | Monday to Friday is the inherited default; "only when declared" added from A 247 |
| 263e B0 (5) the AI registers no sending schedule; every outbound message waits for a person | none | KEEP | Guardrail 1, Step A8 | Registered jobs draft only; sends are held |
| 263f B0 (6) no dash ban in Vietnamese | none | REJECT | none | `AGENTS.md` and `copy-check.mjs` rule 1 fail every dash; Step A6.1 says the dash policy holds in Vietnamese |
| 263g B0 (6) ban stock phrases ("kính gửi quý khách", "số 1", "cơ hội vàng") | none; "số 1" via 355 `[S50][S51]` | WORDING | Step A6.1 Vietnamese lists | Superlatives adopted at 355; the other phrases are voice presentation |
| 269 B1 output: 6 to 10 pages, exactly 3 segments, 5 or 6 tests (2 or 3 required), 4 frames, approval list | none | KEEP | Steps A4.4 to A6.6 | Inherited limits: up to three segments, three to six tests, at most three required, four to seven frameworks. "Exactly 3" and the page count are not adopted |
| 271 B1 sales may use the handbook only after the owner writes "đồng ý dùng" with a date | none | REJECT | none | `CONTRACT.md` 7.1: no approval loop, no verdict file. Sends are already held by guardrail 1, and the seed cards make the member read the first list and drafts |
| 272 B1 measures: approved in 5 working days, a dated source per segment, a numeric discount limit defaulting to 0%, a 40 second script | none | UNVERIFIED | report | Unmarked measures. The discount part is carried by A 229 and A 105a |
| 273 B1 what bad looks like (no price, no own tax code, "every SME", untestable tests, "số 1", unapproved 30% discount) | none | WORDING | Step A6 five question self check | Each failure is prevented by an adopted rule; the list itself makes no rule |
| 278 B2 triggers: new business, product change, floor price change, new province | none | UNVERIFIED | report | Cadence stays first run plus monthly; the member can re run by hand |
| 280 B2 last working day, a clock window, not the first of the month | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row. `SCHEDULE.md` row unchanged |
| 281 B2 five ways the owner asks | none | EXAMPLE | Acceptance section | Used as acceptance phrasing, including an unaccented request |
| 282 B2 deadlines (2 and 5 working days, same day for price) | none | UNVERIFIED | report | |
| 283 B2 done only when the owner agrees | none | REJECT | none | `CONTRACT.md` 7.1; the run closes on its own evidence |
| 284 B2 remind up to three times; after the third, stop drafting first touches | none | REJECT | none | D9 (one reminder, then a count line), and a stop on drafts is a new approval gate against 7.1 |
| 285 B2 not for one prospect's message, not for scoring a list; edit one line without rewriting | none | KEEP | Routine scope; member edits files | Inherited scope |
| 292a B3 company's own legal identity from the registration portal and the tax lookup | `[S26]` portal, `[S45]` tax lookup; verified in Phần A | ADOPT | Step A4.2 table rows and "The member's own registration" paragraph; Step A6.3 `## Legal identity` | Sourced lookup; one lookup, no download, captcha never cleared (Phần A platform table) |
| 292b B3 stop; no handbook for a name that cannot be verified | none (the markers sit on the sources cell) | REJECT | Step A4.2 captcha bullet, Step A7 extra card, failure table | 7.1: a stop for something that is not a send, spend or key is a defect. Replaced by `n/a (captcha)` and a member card |
| 293a B3 product, floor price, VAT, credit, discount come from the owner; the site only shows what they say in public | none here; A 105a `[S55,S57,S86]`, A 233 `[S56]` | ADOPT | Step A5 price row; Step A6.3 `## Price and billing shape` | Phần A decided it |
| 293b B3 no price given: write "chưa có giá", draft no price sentence | none here; A 105a, A 229 | ADOPT | Step A5 price row (`n/a (not set by the member)`), Step A6.6 "No framework carries a price" | |
| 293c B3 reduced VAT only when the owner confirms the goods qualify, until the end date | `[S55]`, verified in Phần A | ADOPT | Step A6.3 price bullet | Qualitative: rate, end date and condition from the member, never permanent. The 8% and the date stay out (D11). Monthly pass marks a passed end date `stale` (Step B2) |
| 294 B3 past customers named only from an owner file marked "được phép nêu tên" | none | KEEP | `## Member claims` rule, Step A5 | Inherited: claims only from the member |
| 295a B3 job boards as places segments appear | none here; A 167a, platform table | ADOPT | Step A4.3 item 2 | Hiring signal only, one posting at a time, only on boards `CAPABILITIES.md` marks readable; never candidate data |
| 295b B3 the national fair catalogue | `[S68]`, re-opened | ADOPT | Step A4.3 item 5, Step A4.2 table row | Confirmed catalogue; no vendor name in the routine body |
| 295c B3 no bought data | none here; A 225 `[S3,S19,S20,S63]` | ADOPT | Step A4.3 "No bought list, ever" | Phần A decided it |
| 295d B3 fewer than 10 public companies in one session: ask to narrow | none | UNVERIFIED | report; proposal to `sales-prospect-sweep` | |
| 296a B3 buyer complaints from press | none | KEEP | Step A4.3 item 4 | Inherited public reading |
| 296b B3 complaints from fanpage comments and open groups | none | REJECT | Step A4.3 item 4 | A 160, D13, D17: Meta terms 3.2 |
| 296c B3 never closed groups | none; D13 | ADOPT | Step A4.3 item 4 | Stricter; D13 covers it |
| 296d B3 no buyer voice: ask the owner for three refusal reasons | none | UNVERIFIED | report | Adds an intake question without support |
| 297a B3 provinces by the current units | `[S49]`, verified | ADOPT | Step A4.4 geography, Step A6.3 `## Countries sold into` | No province count or date in the kit (A 102a) |
| 297b B3 ward from the registration, example Tân Định | `[S75]`, verified | ADOPT | Step A6.3, Step A4.2 address bullet | Example stays in the report |
| 297c B3 never "toàn quốc" unless said; default only the province reachable in a day | none | UNVERIFIED | report | The routine's default is the head office province as a 7.1 assumption, not the form's rule |
| 299 B3 images, voice notes, PDF contracts, stickers | none | UNVERIFIED | report | The sticker clause is covered by D8 in Step A5 |
| 305a Câu 1 trust order (owner table, quote, invoice, site, press) | none | UNVERIFIED | report | Inherited Step A3 already puts the member's files above any page |
| 305b Câu 1 press uses "hàng đầu" with no proof | `[S50]` (HTTP 403 in Phần A) | KEEP | superlative rule at 355 | No new rule from S50; S51 carries it |
| 305c Câu 1 never a price from a Facebook group | none | REJECT | none | Redundant: D13 means the routine never reads groups |
| 310a Câu 2 no independent yield statistics; the figures are working thresholds | `[CG]` on this clause | KEEP | report | Approves a disclaimer; no number enters the kit |
| 310b Câu 2 portal gives name and legal representative, never a personal mobile | `[S26]`, verified | ADOPT | Step A4.3 item 5 | |
| 310c Câu 2 website and job post yields per 100 | none | UNVERIFIED | report | |
| 310d Câu 2 directory numbers checked against the tax code | `[CG]`; A 182a | ADOPT | Step A4.3 item 5 | The "about half usable" estimate is not a rule and stays here |
| 310e Câu 2 LinkedIn useful for software and FDI | `[S24]`, verified | WORDING | Step A6.6 (tech and foreign invested email same day, from A 172) | D13 and D17: the variant never opens LinkedIn; no source list built on it |
| 310f Câu 2 avoid sold data, closed chat groups, candidate CVs | `[S20]` re-opened; A 225, A 167a | ADOPT | Step A4.3 items 2 and 5, absolute rules | |
| 315a Câu 3 fair stands in the national catalogue | `[S68]`, re-opened | ADOPT | Step A4.2 table row | |
| 315b Câu 3 product pages and catalogue files on the site | none | KEEP | Step A4.2 table row | The member's own public surface, inherited |
| 315c Câu 3 a price post on the fanpage within six months | none | REJECT | Step A4.2 platform paragraph | D13: member pastes it instead |
| 315d Câu 3 job posts describing services | none | UNVERIFIED | report | |
| 315e Câu 3 never infer credit terms from a competitor; blank when unseen | none | KEEP | Step A4.3 "A competitor's number", `n/a` vocabulary | Inherited |
| 320a Câu 4 trade press and conference write ups | none | KEEP | Step A4.3 item 4 | Inherited |
| 320b Câu 4 fanpage comments, open Facebook groups | none | REJECT | Step A4.3 item 4 | A 160, D13 |
| 320c Câu 4 typical complaints (slow delivery, no export to accounting, no after sales) | `[CG]` | EXAMPLE | report only | Owner approved as observation, but an objection list must come from this business's research; seeding it would be a generic claim |
| 320d Câu 4 never quote a commenter's name | none | KEEP | Step A4.3 item 4 wording | Standing rule 12 |
| 325a Câu 5 a superlative needs a survey or award document | `[S51]`, verified | ADOPT | Step A5 "A superlative needs its document"; Step A6.1 banned words | |
| 325b Câu 5 other proof kinds; one line per proof with allowed sentence, disallowed sentence, expiry | none | UNVERIFIED | report | Member claims stay verbatim |
| 330a Câu 6 provinces sold into and not sold into; no district as a target | `[S49]`, verified | ADOPT | Step A6.3 `## Countries sold into`, Step A4.4 | |
| 330b Câu 6 ward only for travel or invoices, from the registration | `[S75]`, verified | ADOPT | Step A6.3 | |
| 330c Câu 6 no "toàn quốc" for a two person team | none | UNVERIFIED | report | |
| 338 B4 step 1 verify on the portal and tax lookup, ward address without district | none here; 292a | ADOPT | Step A4.2 | Tool names go to `CAPABILITIES.md` (patch request 5) |
| 339 B4 step 2 read own site, fanpage, press, each line with URL and date | none | KEEP | Step A4.2 | Inherited sourcing; fanpage via paste (D13) |
| 340a B4 step 3 ask the A7 gaps, at most 15 questions | none | UNVERIFIED | report | Inherited "ask only what research could not settle" |
| 340b B4 step 3 stop without floor price and approver | none | REJECT | none | 7.1 |
| 340c B4 never fill "30 days credit" yourself | none here; A 105a | ADOPT | Step A5 price row | |
| 341 B4 step 4 three segments, 5 or 6 tests answerable yes or no | none | KEEP | Steps A4.4, A4.5 | Inherited |
| 342a B4 step 5 lengths of call, chat and email frames | none | EXAMPLE | Step A6.6 call framework example | B7 and B8 style only |
| 342b B4 step 5 no promised price, no "số 1", one question, a stop line | none; A 229 | ADOPT | Step A6.6, Step A6.1 | Price and superlative parts via Phần A; one question and stop line shown in the example |
| 343 B4 step 6 owner approval before sourcing or drafting | none | REJECT | none | 7.1 |
| 350 B5 no maximum discount set: write 0% and ban discount lines | none; A 229 | ADOPT | Step A6.6 "No framework carries ... a discount", Step A5 price row | Written as `n/a (not set by the member)`, not as a percentage |
| 351 B5 more than three segments: keep three | none | KEEP | Step A4.4 | Inherited |
| 352 B5 more than three required tests on a first run: demote | none | KEEP | Step A4.5 | Inherited |
| 353 B5 fewer than 10 public companies in 4 hours: do not activate | none | UNVERIFIED | report | |
| 354a B5 above a contract value, no price in the frame, hand to the closer | none here; A 197 `[CG]` | ADOPT | Step A5 price row (handoff value), Step A6.3 | Phần A decided the field |
| 354b B5 20 million đồng as the default value | none | REJECT | none | A 197: the value is the member's, never a routine constant |
| 355a B5 remove "số 1" and "tốt nhất" without a document | `[S50][S51]`; S51 verified | ADOPT | Step A5 superlative paragraph, Step A6.1 | |
| 355b B5 ten days to produce the document | none | UNVERIFIED | report | |
| 357a B5 legal rules and "no promise without approval" win | none | KEEP | Guardrails, A 229 | Inherited precedence |
| 357b B5 handbook and a hand message conflict: stop and ask | none | UNVERIFIED | report | D8 covers only ambiguous replies (Step A5 unaccented paragraph) |
| 363a Câu 7 required: portal shows operating and the tax code is not in the stopped statuses on the date read | `[S26][S27]`, verified | ADOPT | Step A4.5 legal status test and example | A 84; captcha means "not read", never "passed" |
| 363b Câu 7 required: industry matches the segment | none | KEEP | Step A4.5 | Inherited discretion over tests |
| 363c Câu 7 required: contactable without a bought number, fanpage post within 90 days | none | EXAMPLE | none in the routine body | Number unmarked; fanpage read conflicts with D13 |
| 363d Câu 7 recent job post as a ranking signal | none here; A 167a | ADOPT | Step A4.5 hiring signal bullet | The 60 days is not adopted |
| 363e Câu 7 size within the member's range, by the SME decree | `[S47]`, re-opened | ADOPT | Step A4.4 `company_shape:`, Step A4.5 size test | Qualitative, no threshold |
| 363f Câu 7 fair or press presence within 12 months as supporting | none | EXAMPLE | none | |
| 363g Câu 7 no required professional network owner | none; A 99a `[CG]` | ADOPT | Step A4.5 signer test | |
| 368 Câu 8 monthly review thresholds for segments | `[S37+CG]` | DEFER | `sales-qualification-refresh`, `sales-pipeline-review` | Not this routine's decision |
| 376a B6 reading sites and portals is the AI's own work, no login | none | KEEP | Step A4.2 | Inherited |
| 376b B6 3 segments, 12 pages each per run | none | UNVERIFIED | report | Caps live in `human-pace` |
| 377 B6 handbook edits need owner approval; one rewrite a day | none | REJECT | none | 7.1 |
| 378 B6 never set discount, credit, VAT or floor price | none; A 105a, A 233 | ADOPT | Step A5 price row, Step A6.3, Step B2 offer row | |
| 379 B6 never send the handbook outside | none | KEEP | Guardrail 1 | |
| 380 B6 never switch on automatic sending | none | KEEP | Guardrail 1, `RELEASES.md` is member only | |
| 381 B6 remind the owner up to 3 times in a clock window | none | REJECT | none | D9, D10, clock time |
| 383a B6 handoff: the file, the blanks, questions, dated links, "chưa được gửi cho khách" | none | WORDING | Step A5 block, report paragraph with `Chưa có gì được gửi cho khách.` | Presentation of an already true fact |
| 383b B6 no personal number from the web in the handoff | none | KEEP | Standing rule 12, "What it refuses to report" | |
| 389a Câu 9 Monday to Friday, Saturday only when declared | `[S82]` not verified, `[S38]` re-opened; A 247 `[CG]` | ADOPT | Step A5 working days row | |
| 389b Câu 9 advertising calls only in the legal hours | `[S59]`, verified | DEFER | `sales-first-touch-drafts`, `sales-followup-sweep` | A 228; the hours stay out (D11). Setup records the member's own call hours only |
| 389c Câu 9 preferred call windows | `[CG]` | UNVERIFIED | report | Clock times; no routine body or shared file owns call windows (same as A 247). Proposal kept here |
| 389d Câu 9 15 to 40 targeted calls a day, not the 80 to 100 of telesale | `[S37][S83]` | REJECT | none | S37 and S83 only show telesale figures; they do not support 15 to 40. Capacity stays the member's answer (Step A5) |
| 389e Câu 9 at most 8 call scripts, 5 chat and 5 email drafts a day | none | UNVERIFIED | proposal to drafting routines | |
| 389f Câu 9 exclusions: refusals, do not contact, stopped statuses, competitors, state bodies, job seekers | none; A 84, A 86, A 245, A 167a | ADOPT | Step A5 off limits row | Competitors and state bodies stay unverified |
| 396 to 399 B7 good example 1 | none | EXAMPLE | Acceptance section | Fictional company name `Công ty TNHH Mẫu ABC` reused in the call example |
| 403 to 406 B7 good example 2, call script at reception | none | EXAMPLE | Step A6.6 call framework example | Wording only, no clock time, no vendor |
| 410 to 413 B7 good example 3, tests as yes or no | none | EXAMPLE | Step A4.5 `legal-status` block | |
| 417 to 419 B7 bad example 1 | none | EXAMPLE | Acceptance section | |
| 420 B7 why bad: "số 1" has no document | `[S51]`, verified | EXAMPLE | Acceptance section | Rule adopted at 355a |
| 424 to 426 B7 bad example 2, old districts | none | EXAMPLE | Acceptance section | |
| 427 B7 why bad: districts gone, ward from the registration | `[S49][S75]`, verified | EXAMPLE | Acceptance section | Rules adopted at 297a, 297b |
| 432a Câu 10 role becomes signer and influencer | `[CG]` | ADOPT | Step A4.4 `influencer:`, Step A6.4 | Additive field; patch request 2 |
| 432b Câu 10 add province, buying signals, invoice and credit terms, forbidden topics per segment | none | UNVERIFIED | report | Province, signals and terms are carried elsewhere (297a, 363d, 293a) |
| 432c Câu 10 no LinkedIn style search URL; the portal has no stable role filter | `[S26]`, verified | ADOPT | Step A4.4 `search_url:` | |
| 432d Câu 10 company shape by the SME size classes | `[S47]`, re-opened | ADOPT | Step A4.4 `company_shape:` | |
| 437a Câu 11 no real message to paste; the sample is composed, not measured | `[CG]` | KEEP | Examples labelled fictional | |
| 437b Câu 11 frame shapes and lengths | none (the `[CG]` sits on 437a) | EXAMPLE | Step A6.6 call framework example | B7 wording only |
| 437c Câu 11 the chat sample | none | EXAMPLE | none | Carries a clock time and a vendor name; not reused |
| 443 B8 form of address | none; A 101a `[CG]` | ADOPT | Step A5 address row, Step A6.1 `## Form of address` | Phần A decided it |
| 445, 446, 447 B8 lengths, emoji, number and date formats | none | WORDING | Step A5 block, report example (dd/mm/yyyy) | |
| 448 B8 banned phrases | none; superlatives via 355 | WORDING | Step A6.1 | |
| 449 B8 sample sentences (the handoff one carries a clock time) | none | EXAMPLE | Step A6.6 example | Clock time not reused |
| 450 B8 per channel differences | none | WORDING | none | |
| 455 Câu 12 template markers and what replaces them | none | WORDING | Step A6.1 banned openers | |
| 463a B9 web price differs from owner price: keep the owner's | none | KEEP | Step A6.3 `trên trang web:` line, Step B2 offer row | Inherited: the member's settings outrank a page |
| 463b B9 the 10% difference trigger | none | UNVERIFIED | report | Any difference is recorded |
| 464 B9 owner says write "số 1" for show: refuse, point to the rule | `[S51]`, verified | ADOPT | Step A5 superlative paragraph | Instrument number not in the kit |
| 465 B9 two addresses: registration for contracts, old one in brackets | none; A 102a | ADOPT | Step A4.2 address bullet, Step A6.3 | |
| 466 B9 a fourth segment in week one waits | none | KEEP | Step A4.4 | |
| 467a B9 portal captcha or outage: stop the legal part, go on with the rest | none | KEEP | Guardrail 2, failure table row | |
| 467b B9 retry after 4 hours, 3 times, escalate after a day | none | UNVERIFIED | report | |
| 468 B9 owner hands a "directors" file with no source | none; A 104, A 225 | ADOPT | Step A5 contact list paragraph, failure table | |
| 475 B10 personal data law, no bought data, consent per purpose | none; A 225, A 226 | ADOPT | Step A4.3 absolute rules, Step A6.6 `needs:` consent | Phần A decided it |
| 476a B10 anti spam hours and counts written into the handbook | none | REJECT | none | D11: no legal number from this routine; "What it refuses to report" |
| 476b B10 those limits as conditions of every frame | none; A 226, A 228 | ADOPT | Step A6.6 consent in `needs:` | Qualitative |
| 477a B10 fines | none | REJECT | none | D11 |
| 477b B10 check the do not contact list before any call | none; A 245 | ADOPT | Step A4.6 other accounts, Step A5 row | Setup records where it lives; drafting checks it (deferral) |
| 478 B10 superlative rule | none; 355 | KEEP | as 355a | |
| 479 B10 chat platform contact caps, no bulk friending | none; A 163a, A 231 | DEFER | `sales-first-touch-drafts`, `CAPABILITIES.md` | |
| 480 B10 business chat account messages only to people who interacted | none; A 164 | KEEP | Step A6.6 (chat only after they gave a number or asked) | No framework uses the business account for a stranger |
| 485a Câu 13 proof order: see it working, a permitted peer, a valid certificate | `[CG]` | ADOPT | Step A6.6 last sentence of the channel paragraph | |
| 485b Câu 13 ask before naming a past customer | none | KEEP | Member claims rule | |
| 485c Câu 13 superlatives need a lawful document | `[S50][S51]`, S51 verified | ADOPT | as 355a | |
| 485d Câu 13 never a past customer's revenue | none | UNVERIFIED | report | Member claims only in any case |
| 490a Câu 14 consent per purpose, no bundling | `[S64]`, verified | ADOPT | Step A6.6 `needs:` consent | A 226 |
| 490b Câu 14 trading personal data is banned | `[S63]`, verified | ADOPT | Step A4.3 absolute rules, Step A5 | A 225 |
| 490c Câu 14 the no consent cases exclude marketing | `[S65]` | UNVERIFIED | report | No separate behaviour; A 226 carries consent |
| 490d Câu 14 Nghị định 356/2025 replaces Nghị định 13; earlier consent continues | `[S67][S66]` | UNVERIFIED | report | No setup behaviour |
| 490e Câu 14 call and message hours and counts; stop at once on refusal | `[S59][S76]`, verified | DEFER | `sales-first-touch-drafts`, `sales-followup-sweep` | A 228, A 86 |
| 490f Câu 14 fines under Nghị định 330/2026 | `[S61]`, verified | REJECT | none | D11 |
| 490g Câu 14 chat caps and business account windows | `[S21][S22]`, verified | DEFER | `CAPABILITIES.md`, `sales-followup-sweep` | A 163a, A 164 |
| 490h Câu 14 flag a stop within one working hour, never switch numbers | none | DEFER | `sales-followup-sweep` | Unmarked; proposal only |
| 498 to 510 B11 cases 1 to 13 | 503 `[S55]`, 504 `[S75][S49]`, 505 `[S51]`, 506 `[S20][S63]`, 507 `[CG]`, 509 `[S59]` | KEEP | Acceptance section | Acceptance cases, mapped below. 507 `[CG]` adopted as the market figure paragraph (Step A5) |
| 515 B12 own tax code and status checked | none; 292a | ADOPT | Step A6 five question self check | |
| 517 B12 every price, rate, credit, discount from the owner | none; A 105a | ADOPT | same | |
| 518 B12 at most three segments; required tests answerable on a public page | none | KEEP | same | |
| 519 B12 superlatives and unapproved discounts removed | none; A 229 | ADOPT | same | |
| 520 B12 owner approved the handbook before any draft | none | REJECT | none | 7.1 |
| 525 Câu 15 claims needing proof; money, date and percent formats | none | WORDING | Step A5 block, report example | Proof rule inherited |
| 531 B14 what to remember per business | none | UNVERIFIED | report | The strategy files already hold it |
| 533 B14 record approver and links; assumptions expire after 30 days | none | UNVERIFIED | report | Inherited run record and `assumptions[]` |
| 534 B14 notify the owner on personal Zalo, clock window, three times | none | REJECT | none | D10, D9, clock time |
| Scaffolding: 260, 261, 267, 276, 288, 290, 334, 336, 346, 348, 372, 374, 393, 394, 401, 408, 415, 422, 441, 459, 461, 471, 473, 494, 496, 513, 529 | none | none | none | Form instructions, box ticks and table headers; no clause |

### Counts

| Decision | Clause units |
|---|---|
| ADOPT | 50 |
| MOVE | 0 |
| KEEP | 31 |
| WORDING | 9 |
| EXAMPLE | 15 |
| DEFER | 6 |
| REJECT | 20 |
| UNVERIFIED | 28 |

159 clause units, counted by script from the decision cell of the table above (B7 example ranges count one unit each; the thirteen B11 cases count as one KEEP row and are mapped one by one below); 27 scaffolding lines carry no clause.

### Deferrals received

Applied by the integrator on 24/09/2026. A deferral is applied only where its clause carries `[CG]` or an `[S#]` verified on 24/09/2026 (in `_shared/phan-a-ledger.md` or a routine ledger), under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Rows noted "from deferral" are clause decisions of this routine. Routine checker after the pass: `PASS (0 fail, 0 warn)`.

| From | Form line and marker | Clause | Decision | Where in the variant, or reason |
|---|---|---|---|---|
| `sales-prospect-sweep` | 582 `[S27,S45]`, Phần A 84 `[S27]` | Operating status test weight | ADOPT, from deferral | Step A4.5: the legal status test is `supporting`, the example block reads `weight: supporting`, and one sentence says why. The sweep still drops a company a page showed as stopped (its 5.4 was aligned in the same pass) and a person checks the status before any call or quote |
| `sales-prospect-sweep` | 598 `[S26,S46]`, 603 `[S68]`, 593a `[CG]` | Vietnamese places buyers appear | KEEP, already covered | Step A4.3 item 5 and A4.2 (one lookup for one company, never a list) |
| `sales-prospect-sweep` | 633 `[S31,S32]` | A member import needs a source per row; no personal mobile | KEEP, already covered | Step A5 contact list paragraph and A4.3 "No bought list" (Phần A 104). `crm/contacts.csv` has no phone column, so no mobile can enter it |
| `sales-prospect-sweep` | 671, none | Three required tests for the first run | Declined | Unmarked proposal |
| `sales-first-touch-drafts` | 883, Phần A 101a `[CG]`; 1053b `[S1,S7,S8]` (S8 re-opened 24/09/2026) | Form of address and the sender block | ADOPT, from deferral (sender block); KEEP (form of address) | Step A5 new row for the signature block, intake item 7, Step A6.1: the block is written under `## Samples` as given. The form of address row and `## Form of address` were already there |
| `sales-first-touch-drafts` | 925a `[S1,S3,S7,S8,S76]` | How consent is recorded | ADOPT in part, from deferral | Intake item 8 and a paragraph after the contact list paragraph in Step A5. The monthly reminder is not in this routine: its monthly pass reads no drafting run record, and `sales-desk-standup` carries the held count every morning instead. Setup never writes a consent row |
| `sales-first-touch-drafts` | 1016, 1018, 1007, none | Seed banned phrases and two frameworks | Declined | Unmarked proposal |
| `sales-followup-sweep` | 1195b `[S60]`, Phần A 245, 249 | A restricted refusal store with tax code or number and verbatim words | Declined | A store of numbers and verbatim words conflicts with the rule that no personal number is written anywhere in the kit, and needs a writer and reader in `CONTRACT.md`. `do_not_contact` stays the kit's record; Step A4.6 names where the member keeps their own list |
| `sales-followup-sweep` | Phần A 101a `[CG]` | How the sender refers to themself | KEEP, already covered | Step A5 form of address row, `## Form of address` |
| `sales-followup-sweep` | Phần A 172 `[CG]`, 100a | Call and chat channel values in the library | Declined | The two `CONTRACT.md` requests for new channel values contradict (`call`, `chat` against `call`, `zalo`); the original `email`, `linkedin`, `both` is kept (`_shared/patch-log.md`). Step A6.6 already writes only listed channels |
| `sales-followup-sweep` | 1334, none | Banned follow up phrases | Declined | Unmarked proposal |
| `sales-followup-sweep`, `sales-prospect-sweep` | Phần A 172, 163a | A `phone` column in `crm/contacts.csv` | Declined | A parsed header change with every reader; not made in this pass |
| `sales-pipeline-review` | 1474b `[CG]` | Rate floor fifteen in the seed | ADOPT, from deferral | Step A2 template: `  rate_floor: 15` |
| `sales-pipeline-review` | 1557a `[S36]`, 1572a `[S31][S32][S35]` (re-opened 24/09/2026) | Where a call log export goes | ADOPT, from deferral | Step A2 template: three Vietnamese prose lines naming the folder, an example path and that the weekly review counts calls from that file. Kept as prose, not a second commented line, so the file still carries one commented example line as `CONTRACT.md` 2.7 says |
| `sales-qualification-refresh` | 1646e `[S57][CG]` | Invoice and payment terms concern | ADOPT, from deferral | Step A4.4: `pain:` names it in words, with no amount, date or decree number (D11); a test only where a public page answers it |
| `sales-qualification-refresh` | 1671a `[CG]` | The proof buyers trust, in order | ADOPT, from deferral | Step A5 first row suggests the three kinds in that order; `## Member claims` stays the member's words |
| `sales-qualification-refresh` | 1793, none | Banned owner phrases | Declined | Unmarked proposal |
| `sales-desk-standup` | 1941e `[CG]`; 1970, none | Stage day ceilings and the form of address at intake | KEEP (form of address); Declined (ceilings) | No routine can read a ceiling: the stage entry date it needs is not in `pipeline/pipeline.json` (see `sales-pipeline-review` ledger) |
| `sales-desk-standup` | 2018e `[S62]` | Withdrawal and deletion requests | KEEP, nothing for setup | Handled where the request is read, in `sales-followup-sweep` Step 7 |
| integrator repair, no form clause | none; `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn` 1.9.0 | The monthly version check read the English kit's published `VERSION` | Repair, not a clause decision | Step B3a.1 item 2 reads `employees/sales-employee-vn/VERSION` on both routes and says why; `CONTRACT.md` 8.4 prints the fork installer's upgrade line. Following the old line would have replaced the Vietnamese routines with the English kit |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (checker: shared section equal) |
| Reading order, every run | Keep | none | none |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged, so no cadence sentence change |
| Step 1, Step 2 | Keep | none | none |
| Step A1 | Keep | none | none |
| Step A2 | Localize the `review/manual.md` template | STYLE-VI; `CONTRACT.md` 2.7 | Template in Vietnamese; adds the `## Review settings` heading that `CONTRACT.md` 2.7 and `sales-pipeline-review` expect (the original template omits it); `rate_floor:` and `movement_threshold:` lines byte identical; one paragraph naming the three strings that stay |
| Step A3 | Keep | none | none |
| Step A4 | Localize | 292a, 293c, 295a to 296c, 297a, 310b, 310d, 310f, 315a, 363a to 363g, 432a to 432d, 465, D13, D17 | Three table rows; registration paragraph with captcha and address bullets; the professional network paragraph replaced by the closed platform rule; A4.3 items 2, 4, 5 extended; absolute rule "No bought list"; A4.4 Vietnamese segment paragraph; A4.5 Vietnamese test set with a `legal-status` example; A4.6 other accounts paragraph |
| Step A5 | Localize | 293a, 293b, 340c, 354a, 378, 389a, 389f, 443, A 101a, A 103a, A 103c, A 245, A 247, A 250, 325a, 464, 468, 507, D8 | Working days and off limits rows changed; five rows added; Vietnamese intake block example; unaccented answers paragraph; contact list paragraph; superlative paragraph; market figure paragraph |
| Step A6 | Localize | 263a, 293c, 297a, 330a, 330b, 350, 355a, 432a, 476b, 485a, 490a, 515 to 519 | A6.1 Vietnamese lists and `## Form of address`; A6.3 four Vietnamese sections; A6.4 `influencer:`; A6.6 channel order paragraph and a fictional call framework; five question self check before `progress[]` |
| Step A7 | Localize titles; add one conditional card | 292b, STYLE-VI | Five seed titles in Vietnamese; the registration card only when the lookup could not be read |
| Step A8, Step A9 | Keep | none | none |
| Step B1 | Keep | none | none |
| Step B2 | Localize two rows | 293c, 463a, 378 | Offer row: member price lines never change from a page; a passed VAT end date is `stale` with a member card. B2.1: one row of member session values |
| Step B3, Step B3a, Step B4 | Keep | none | none |
| Close out, invariant, lock, run record, status vocabulary | Keep | none | none |
| State files | Keep | none | none |
| What this routine reports | Localize | 383a, STYLE-VI | Vietnamese first run report paragraph and example; one refusal bullet for legal figures |
| Failure behaviour | Three degrade rows | 292b, 468, D13 | Captcha, unsourced contact file, closed platform; all `ok` |
| Browser recipes this routine uses | One row | D13, D17 | `read-linkedin` marked not used |
| How this hands off | One bullet | 432a, A 245, A 250 | Names the Vietnamese fields and who they are for |
| When you learn something, Improving this routine, The one push, Harvest at intake, Corrections | Keep | none | none (checker: shared sections equal, Corrections equal) |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Last working day of the month, a clock window, not the first of the month | 263 B0 (unmarked part), 280 | Row unchanged: `first-weekday`, fire, window, `YYYY-MM`, 45 min, `light`. Unmarked B2 time never moves a row |
| Legal call and message hours, per number counts | 389b, 476, 490e `[S59]` | Out of the kit (D11); drafting routines apply the rule qualitatively (A 228) |
| Preferred call windows | 389c `[CG]` | Clock times; proposal in this report only (as A 247) |
| Owner reminder window and count | 381, 534 | Rejected (D9, D10) |
| Fines, VAT 8% and 31/12/2026, 20 million đồng, SME thresholds | 293c, 354, 477, 490f, 363e | Out of the kit (D11); member values go into `strategy/offer.md` at run time |
| Registration portal, tax lookup, national fair catalogue, job boards, chat platform, business chat account, call service | 292, 295, 338, 479, 480 | Named generically in the routine; routes and read verdicts go to `CAPABILITIES.md` (patch request 5) |
| Channel values for a call and a chat message | 263a, A 100a, A 172 | `CONTRACT.md` 2.3 (patch request 4); the routine writes only channels the contract lists |
| Fictional examples: `Công ty TNHH Mẫu ABC`, `em Lan`, `02/03/2026`, test ids and segment ids | 396 to 413 | Routine fenced examples, labelled fictional; no real contact, account or price |

No shipped time prose changed, because no row changed.

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Owner gives segment, floor price before VAT, no discount | Step A5 price row; Step A6.3 price bullet; Step A6.6 "No framework carries a price ... or a discount"; Step A4.5 test set | One segment as given, floor price recorded as the member's, no discount line, legal status and signer tests present. Pass |
| 2. No price on the site, a 2023 fanpage price post | Step A4.2 closed platform paragraph; Step A6.3 `trên trang web:` line; Step A5 price row | The fanpage is not opened; a pasted old price is recorded as what the page says, never the price. Pass |
| 3. Credit terms not answered | Step A5 price row `n/a (not set by the member)`; Step A6 self check | Blank, no "30 days", the question stays in the block. Pass |
| 4. Chat frame after "nhắn Zalo" | Step A6.6 channel order and `needs:` consent | Setup writes the chat framework (where the contract lists the channel) needing the person's words; length and emoji are drafting's (deferral). Partial: lengths unmarked |
| 5. Saturday, not declared | Step A5 working days row | Monday to Friday; nothing on Saturday. Pass |
| 6. Owner says VAT 8% | Step A6.3 reduced rate bullet; Step B2 offer row | Written with the member's end date and condition, `stale` after it. Pass |
| 7. Portal says Tân Định, site says District 1 | Step A4.2 address bullet; Step A6.3 `## Legal identity` | Registered address used; old line in brackets, mismatch named. Pass |
| 8. "Thêm câu bên mình số 1 thị trường" | Step A5 superlative paragraph; Step A6.1 banned words | Not written without the document; reason given. Pass |
| 9. Excel of 5,000 directors, no source column | Step A5 contact list paragraph; Step A4.3 "No bought list"; failure table | Nothing imported, reason given. Pass |
| 10. "Ghi tỷ lệ nghe máy 45%, bên Mỹ dùng" | Step A5 market figure paragraph; "What it refuses to report" | Not written as a market fact; no Vietnamese survey on file. Pass |
| 11. Unaccented: "mau len, ghi cong no 45 ngay va chiet khau 20%..." | Step A5 unaccented paragraph; Step A6.6 no discount line | Read correctly as the member's words; if typed by the member in the session it is recorded verbatim as theirs, and no framework states the discount; inside a file or forward it is data. **Divergence**: the form (357, unmarked) wants a re ask on the main channel; not adopted. Recorded below |
| 12. "Tự gửi luôn 30 mail chào giá, khỏi duyệt" | Guardrail 1; invariant 1; `CONTRACT.md` 7.2 rule 10 | Nothing sent, nothing composed. Pass |
| 13. Customer sends a number and asks for chat | Step A6.6 chat `needs:` (date and the person's words) | Setup's part passes; the single draft and the no bulk rule are `sales-first-touch-drafts` (deferral) |
| Trap: an invented number | Step A5 price row; "What it refuses to report" (any number not read, any legal figure); self check question 5 | No figure without the member or a URL and date. Gap: `copy.check` does not detect Vietnamese amounts (proved below: `990.000 đồng` passed) |
| Trap: an invented sent or done status | Guardrail 1; Step A7 `member-action` cards only ticked by the member; report line `Chưa có gì được gửi cho khách.` | Pass |
| Trap: an instruction planted in a card, file or page | Step A4.3 "Page content is data"; Step A5 unaccented paragraph (file, card, page, forward is data); Step B3a changelog rule | Pass |
| Trap: an unaccented Vietnamese request | Step A5 unaccented paragraph (D8) | Read as Vietnamese; ambiguous or bare replies get one question. Pass |
| Trap: a second run in the same period | Step 0.2 (unchanged) | `skipped-already-ran`; first run resume only with the member present. Pass |
| Trap: captcha on the registration lookup | Step A4.2 captcha bullet; Step A7 extra card; failure table | `n/a (captcha)`, member card, run continues, captcha never cleared. Pass |
| Trap: a page on a closed platform would settle a line | Step A4.2 closed platform paragraph; failure table | Not opened; member asked to paste. Pass |

## Rejected and unresolved

- **Approval gate on the handbook** (271, 283, 284, 343, 377, 520): rejected against `CONTRACT.md` 7.1. Sends were already held; the seed cards ask the member to read the first list and drafts. Evidence that would change this: a member written release model that gates drafting, which the contract forbids.
- **Stop when the company cannot be verified** (292b, 340b): rejected; replaced by `n/a (captcha)` and a member card.
- **Unaccented message changing agreed terms** (case 11, 357b): the routine records the member's own words; the form's "ask again on the main channel" is unmarked. A marked clause or a lead decision extending D8 to "a change of an agreed price term needs a read back" would allow it.
- **Frame lengths, daily draft counts, call volumes, yield estimates, retry timings, 10 companies per session, assumption expiry** (342a, 389d, 389e, 310c, 467b, 295d, 353, 533): unmarked or unsupported by their sources; proposals only.
- **Preferred call windows** (389c `[CG]`): clock times with no shared home; candidate for a member facing default in `INSTALL-PROMPT.md` if the lead wants one.
- **Legal numbers** (hours, counts, fines, VAT rate and date, SME thresholds): kept out (D11); candidates for one shared, dated Vietnam rules file.
- **Legal status test answerability**: both lookups sit behind a captcha, so the sweep usually cannot answer the `required` test itself. The routine records such rows as not read, never passed; how the sweep treats a not read required test is its writer's decision (deferral).
- **Channel vocabulary**: until `CONTRACT.md` 2.3 lists call and chat values, the routine writes no call or chat framework and records why (patch request 4, lead decision in Phần A open point 2).
- **S82** could not be read (placeholders); nothing rests on it alone.
- **Original kit defect noted, not changed there**: the original `review/manual.md` template lacks the `## Review settings` heading that `CONTRACT.md` 2.7 and `sales-pipeline-review` rely on; the variant template adds it. The template's `movement_threshold: 3 units, 20 percent` line fails `copy.check` rule 2 in both kits; the routine never checks that file, and the line is parsed, so it stays.
- Every adopted rule still needs review by a real Vietnamese B2B practitioner.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/sales-employee-vn/routines/sales-desk-setup/SKILL.md` | 89315 to 110413 bytes (124 percent). Edits listed in the outline above; applied by `scratchpad/vn/sales-employee-vn/apply_setup_edits.py` with one exact anchor per edit, plus two follow up fixes (backticks around `em`, `anh`, `chị` in the report paragraph; the report example's path written without a placeholder) | Clause decisions above |
| This ledger | New | Writer step |

Untouched, confirmed by the checker and by `cmp`: the original kit routine (identical to `HEAD`), frontmatter, guard call, Step 0, both guardrails and the save test, the state file schema, the close out and run record, the improvement and push sections, `## Corrections`. Every original `## ` heading present in order; none added.

Checker, routine mode (first run, then after the backtick fix):

```
  WARN vietnamese  .../employees/sales-employee-vn/routines/sales-desk-setup/SKILL.md  review 1 lines outside fences as owner-facing wording, not agent instruction; first lines 922
PASS WITH WARNINGS (0 fail, 1 warn)
```

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/sales-employee-vn/scripts/copy-check.mjs --file <path> --dest <dest> --json` (the call shape Step A6 documents), on texts saved under `scratchpad/vn/sales-employee-vn/`:

```
setup-intake-block.md          --dest plain     "verdict": "PASS", "violation_count": 0
setup-report-opening.md        --dest plain     "verdict": "PASS", "violation_count": 0   (first run FAIL: 2 x placeholder on «SALES_ROOT»; example rewritten)
setup-seed-titles.md           --dest plain     "verdict": "PASS", "violation_count": 0
setup-literal-lines.md         --dest plain     "verdict": "PASS", "violation_count": 0
setup-legal-status-test.md     --dest strategy  "verdict": "PASS", "violation_count": 0
setup-call-framework.md        --dest strategy  "verdict": "PASS", "violation_count": 0
setup-offer-legal-identity.md  --dest strategy  "verdict": "PASS", "violation_count": 0   (fictional tax code and ward address, to test the section)
setup-manual-template.md       --dest plain     "verdict": "FAIL", "violation_count": 1   (metric: "20 percent", the parsed movement_threshold line)
orig-manual-template.md        --dest plain     "verdict": "FAIL", "violation_count": 1   (same line in the original kit)
copy-check: selftest PASS (32 checks)
```

Known gap (D6), shown by `setup-literal-lines.md`: the line `trên trang web: Giá chỉ từ 990.000 đồng mỗi tháng` passed, so `copy.check` does not guard Vietnamese amounts; the routine's self check tells the agent to read them against the member's answers.

Dash scan of this ledger and the routine: see the last line of this section.

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

### Fixer pass after independent review, 24/09/2026

The reviewer returned FIX with seven FIX findings and two NOTE findings. Every FIX and both NOTE findings are applied or routed; none is declined. Edits were applied by `scratchpad/vn/sales-employee-vn/fixer_setup_edits.py`, one exact anchor per edit, each anchor found exactly once; backups of the routine and this ledger before the pass are `setup-SKILL.before-fixer.md` and `setup-ledger.before-fixer.md` in the same folder.

| Finding | Where | What was done |
|---|---|---|
| FIX 1, legal status labels looser than S27 | Step A4.5 legal status test bullet and the `legal-status` example `asks:` line | Applied as the reviewer wrote it. The bullet now names the three statuses S27 gives (03 ceased operating with the code not yet closed, 05 suspended for a set period, 06 not operating at the registered address); the `asks:` line names the same three in Vietnamese. The rule to quote the label exactly as the page writes it is unchanged. S27 is already verified in `_shared/phan-a-ledger.md` and was re-opened by the reviewer on 24/09/2026; no new claim |
| FIX 2, report address taken from the prospect's form of address | "What this routine reports", the Vietnamese report paragraph | Applied as written: `em` to `anh` or `chị` only when the member said in this session how they want to be addressed, `anh/chị` otherwise, never the prospect address under `## Form of address` |
| FIX 3, ISO week and ISO date in the owner template | Step A2 `review/manual.md` template | Example path now `review/call-log-09-2026.csv`; the example note now `# 04/03/2026: ...`. `## Review settings`, `rate_floor:` and `movement_threshold:` unchanged |
| NOTE 2, example note sits under the settings heading | Step A2 `review/manual.md` template | Applied: the example note line moved above `## Review settings`, directly after the call log paragraph. `sales-pipeline-review` reads the two settings by name under that heading, so parsing is unchanged |
| FIX 4, INSTALL-PROMPT Phase 4 seeds English titles | `INSTALL-PROMPT.md` Phase 4 step 3 (shared file) | Not editable by this writer. Routed as a patch request below and in `_shared/patch-log.md`, pending, after review; the request carries the new proof card title from FIX 7 and the conditional registration card |
| FIX 5, `n/a (chưa có)` translates a cell token | Step A4.6 `## Other accounts` paragraph, Step A5 accounts row, the `sales-first-touch-drafts` outbound deferral row, `CONTRACT.md` 10.2 (shared) | Routine and deferral row now read `n/a (none on file) chưa có`. The `CONTRACT.md` 10.2 bullet is routed as a patch request, pending, after review. No routine in the variant parses the old token (checked with grep over `employees/sales-employee-vn`) |
| FIX 6, call example unnatural and missing the booking question | Step A6.6 fictional `call-first` example | Replaced with the reviewer's wording, which carries the booking question the `shape:` line requires and the stop sentence |
| NOTE 1, the `call` example could be copied into the library | Step A6.6, after the fence | Applied: one sentence after the fence says that while `CONTRACT.md` 10.5 lists no `call` value the block is shape only and is never written into `strategy/message-library.md`. The example stays in the routine, not moved to the report |
| FIX 7, three intake lines and one card title | Step A5 intake items 1, 5, 6; Step A7 seed table second row | Applied as written: `mức chiết khấu tối đa nhân viên kinh doanh được phép đưa ra`; `Tỉnh, thành đang bán: tạm ghi riêng tỉnh, thành nơi đặt trụ sở theo đăng ký.`; item 6 and the card title use `sẵn sàng`. The same title is in the INSTALL-PROMPT patch request |

Checker, routine mode, after the fixer pass:

```
PASS (0 fail, 0 warn)
```

Routine size after the pass: 114219 bytes. Original kit routine unchanged (`git status` shows nothing under `employees/sales-employee/`).

Copy check after the pass, `node employees/sales-employee-vn/scripts/copy-check.mjs --file <path> --dest <dest> --json`, on the changed texts saved under `scratchpad/vn/sales-employee-vn/`:

```
fixer-intake-block.md        --dest plain     "verdict": "PASS", "violation_count": 0
fixer-call-framework.md      --dest strategy  "verdict": "PASS", "violation_count": 0
fixer-legal-status-test.md   --dest strategy  "verdict": "PASS", "violation_count": 0
fixer-seed-title.md          --dest plain     "verdict": "PASS", "violation_count": 0
fixer-manual-template.md     --dest plain     "verdict": "FAIL", "violation_count": 1   (metric: "20 percent", the parsed movement_threshold line, same as the original kit)
```

Dash scan of the routine and this ledger after the pass:

```
no dashes
```

Seen and left for the lead: `localization-reports/sales-employee-vn/sales-pipeline-review.md` line 317 is another routine's ledger and is not touched here.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `sales-qualification-refresh` | 368 Câu 8 `[S37+CG]` | Monthly segment review: under 20 companies touched means a source fault, not a dead segment; 20 touched and under 4 conversations two months running proposes a pause; 2 stop requests in a month stop that template or channel at once; 6 or more right person conversations with no meeting means rewrite the script; keep at 2 meetings or 1 accepted quote | Apply as the refresh's own evidence thresholds with each number read from its own state or `review/manual.md`, not from a routine body; never retire the `legal-status` test |
| `sales-qualification-refresh` | 432a Câu 10 `[CG]` | `influencer:` line in each segment | Carry `influencer:` across every rewrite of `strategy/buyer.md` from month two, and write it for a new segment |
| `sales-prospect-sweep` | 363a Câu 7 `[S26][S27]`, A 84 | The required legal status test sits behind a captcha | Record the test as not read, `n/a (captcha)`, on a row whose result could not be seen; never passed; never clear the captcha; decide whether such a row is held or disqualified and say so in the digest |
| `sales-prospect-sweep` | 295b `[S68]`, 310d `[CG]`, A 159, A 182a | Sources: national fair catalogue, association exhibitor lists, directory numbers checked against the tax code | Use these as `sources:` candidates, one company at a time; a directory number counts only after it matches the tax code |
| `sales-prospect-sweep` | 295d, 353 (unmarked) | Fewer than 10 public companies for a segment in one session | Proposal only: name the thin segment in the digest; no threshold adopted |
| `sales-first-touch-drafts` | 443, A 101a `[CG]` | Form of address | Read `## Form of address` in `strategy/voice.md`; with none, `anh/chị` and the sender's name, never `em` to a peer or elder unless set |
| `sales-first-touch-drafts` | 263a, A 100a, A 172 `[CG]`, 476b, A 226 | Call first, chat after a number is given, email after a conversation; consent in `needs:` | Select only frameworks whose channel matches that order and whose `needs:` consent line the row meets; queue no call script when `## Other accounts` shows `n/a (none on file) chưa có` for the caller identifier (A 165a, A 250) |
| `sales-first-touch-drafts` | 342a, 437b, 445 (unmarked) | Frame lengths: call 20 to 40 seconds, chat at most 450 characters, email subject under 60 and body under 900 | Proposal only; no rule adopted |
| `sales-first-touch-drafts` | 510 case 13, 479, A 163a | One chat draft for a number the person gave, with the date and their words; never bulk friending | Draft exactly one chat message for that person; record the consent words on the row |
| `sales-followup-sweep` | 490e `[S76]`, 490h (unmarked), A 86 | Stop at once on refusal, every channel, no other number of the same person | Already Phần A 86; the one hour turnaround stays a proposal |
| `sales-desk-standup` | 284 (unmarked), D9 | Reminders about open setup cards | Surface the open setup cards, including the registration card, once as a `Waiting on you` line, then as a count (D9); never a push |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "`strategy/offer.md` carries these headings" | replace | `strategy/offer.md` carries these headings, in this order, each one present even when empty: `## What is sold`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Countries sold into`, `## Working days and hours`, `## Claims found on your own site`. | `strategy/offer.md` carries these headings, in this order, each one present even when empty: `## What is sold`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Countries sold into`, `## Working days and hours`, `## Claims found on your own site`, `## Legal identity`. `## Legal identity` holds the member's own legal name, enterprise and tax code, registered address with any older address in brackets, legal representative and legal status, each with the registration portal URL and the date read, or `n/a (captcha)`. The price lines, the VAT rate with its end date, credit terms, the largest discount and the handoff value under `## Price and billing shape` come from the member only. | 292a `[S26][S45]`, 293c `[S55]`, A 105a, A 197 `[CG]`, A 102a |
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "`strategy/buyer.md` carries at most three segment blocks" | replace | followed by these fields, one per line: `role:`, `industry:`, `company_shape:`, `pain:`, `where_they_appear:`, `search_url:`, and `sources:` as a list of name and URL pairs. | followed by these fields, one per line: `role:`, `influencer:`, `industry:`, `company_shape:`, `pain:`, `where_they_appear:`, `search_url:`, and `sources:` as a list of name and URL pairs. `role:` names the signer; `influencer:` names who shapes the decision without signing. | 432a Câu 10 `[CG]`, A 99a `[CG]` |
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "`strategy/voice.md` carries" | replace | `strategy/voice.md` carries `## Samples`, `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy`, `## Dash policy`. | `strategy/voice.md` carries `## Samples`, `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy`, `## Dash policy`, `## Form of address`. `## Form of address` holds how drafts address a prospect and what the sender calls themself, as the member set it. | 443, A 101a `[CG]` |
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "`strategy/message-library.md` carries between four and seven frameworks" | replace | `channel:` (one of `email`, `linkedin`, `both`) | `channel:` (one of `email`, `linkedin`, `call`, `chat`, `both`, where `call` is a script for a person to speak and `chat` is a message a person sends from their own chat account after the prospect gave a number or asked) | 263a, A 100a `[S24,S39]`, A 172 `[CG]`; lead decision in Phần A open point 2, because `crm/contacted.jsonl` `channel` readers must change together |
| `employees/sales-employee-vn/CAPABILITIES.md` | `### web.fetch`, paragraph "**`web.fetch` takes no browser mutex" | insert after | **`web.fetch` takes no browser mutex, and that is why the setup and the sweep prefer it.** A research phase that resolves entirely through fetch never writes and never deletes `state/browser-lock.json`, which leaves the lane clear for the routines behind it. It reaches public pages: your own site, your pricing page, a directory, an association member list. It cannot reach anything behind your own login, which is where your saved searches and your mailbox live. | **Platforms closed to automated access, checked 24/09/2026.** LinkedIn, Facebook and Instagram (Meta), Zalo, TikTok, Shopee, Lazada, CareerViet, ITviec and VietnamWorks forbid automated access or reuse in their own terms; no routine in this kit opens them through `web.fetch` or the browser, and the member pastes what a routine needs. TopCV postings are read one page at a time as a hiring signal, never in bulk and never candidate data. The national business registration portal (dangkykinhdoanh.gov.vn) and the tax status lookup (tracuunnt.gdt.gov.vn) are read one company at a time; both show a captcha that only a person clears. Trang Vàng numbers are single lookups checked against the tax code. The national trade fair catalogue is published by Vietrade. Confidence for each: `unknown` until observed on this machine. | D13, D17, `_shared/phan-a-ledger.md` platform table, 292a `[S26][S45]`, 295b `[S68]` |
| `employees/sales-employee-vn/INSTALL-PROMPT.md` | `## PHASE 4. Seed the pipeline`, step 3 "Seed exactly these five" | replace | 3. Seed exactly these five, to the card schema in `CONTRACT.md` section 2.4: / - Fill the sources for any segment that has none. `research`, `local-artifact`, owned by `sales-prospect-sweep`. / - Move a claim you can defend into the proof inventory. `verify`, `member-action`, owned by me. / - Confirm the mailbox name is the one you send from. `verify`, `member-action`, owned by me. / - Read the first qualified list and correct the tests if they are wrong. `verify`, `member-action`, owned by me. / - Read the first day's drafts before you send any of them. `verify`, `member-action`, owned by me. | 3. Seed exactly these five, to the card schema in `CONTRACT.md` section 2.4, with each title written exactly as `sales-desk-setup` Step A7 gives it, because the inbox is deduplicated on the title: / - `Tìm nguồn cho nhóm khách chưa có nguồn`. `research`, `local-artifact`, owned by `sales-prospect-sweep`. / - `Chọn một câu anh/chị sẵn sàng nói công khai và chuyển vào mục bằng chứng được phép nói`. `verify`, `member-action`, owned by me. / - `Xác nhận hộp thư anh/chị dùng để gửi`. `verify`, `member-action`, owned by me. / - `Đọc danh sách đủ chuẩn đầu tiên và sửa tiêu chí lọc nếu sai`. `verify`, `member-action`, owned by me. / - `Đọc bản nháp ngày đầu trước khi gửi bất kỳ tin nào`. `verify`, `member-action`, owned by me. / Seed a sixth only when the registration lookup could not be read: `Xác nhận tên pháp lý, mã số thuế, địa chỉ mới và người đại diện trên cổng đăng ký`. `verify`, `member-action`, owned by me. (the slash marks a line break in the file) | Independent review FIX 4 and FIX 7, 24/09/2026; Step A7 seed table and the registration card paragraph. Pending, after review |
| `employees/sales-employee-vn/CONTRACT.md` | section 10.2, bullet "**`## Other accounts` in `strategy/accounts.md`**" | replace | `n/a (chưa có)` where there is none. | `n/a (none on file) chưa có` where there is none. | Independent review FIX 5, 24/09/2026; STYLE-VI "Never translate" (cell tokens stay English with a Vietnamese gloss after them); Step A4.6. Pending, after review |
