# seo-intake-and-map: provenance ledger

Status on 2026-09-24: **ledger complete, sources behind adopted law and platform clauses re-checked, routine edited in the variant only, checks recorded below.** Model: `localization-reports/chief-of-staff-vn/cos-decision-brief.md`.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, `## B-1. seo-intake-and-map`, form lines 267 to 545. Phần A decisions are taken from `_shared/phan-a-ledger.md` and cited by A line number, never re-decided.
- Extract: `extract_form_section.py --routine seo-intake-and-map`, scratch `scratchpad/vn/seo-employee-vn/seo-intake-and-map-extract.md`. 137 rows and answers: 32 with `[S#]`, 6 with `[CG]`, 4 with both, 103 unmarked. B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the SEO/AEO role, research draft dated 23/09/2026. **No clause has been confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions. The form's own attachment table (line 2431) lists the `[CG]` operating thresholds this routine adopts (60 days, 100 impressions) as still needing a real practitioner.
- Original kit and routine: `employees/seo-employee` 1.9.0, `routines/seo-intake-and-map/SKILL.md` (986 lines, 94,590 bytes).
- Variant kit and routine: `employees/seo-employee-vn`, same routine id. Only this routine's `SKILL.md` was edited by this pass.
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row. Two sources re-opened by this writer on 24/09/2026 (below); the rest are verified in the Phần A ledger.
- Kit version before: 1.9.0. After: set once for the whole kit by the lead (D14); this writer did not touch `VERSION`, `CHANGELOG.md` or `employee.json`.
- Gate 1: the glossary's Gate 1 search (`_shared/glossary.md`) covers this routine's wording; reused "trụ cột chủ đề", "cụm chủ đề", "NAP đồng bộ" wording only, no rule.

## Sources re-opened

Opened on 24/09/2026 by this writer, because an ADOPT row below rests on them and the Phần A ledger did not verify them.

| S# | URL | What the adopted clause needs | Verdict |
|---|---|---|---|
| S1 | https://pbgdpl.camau.gov.vn/quy-dinh-ve-quan-ly-trang-thong-tin-dien-tu.5824 | A general news site ("trang thông tin điện tử tổng hợp") needs a licence; an internal site that provides aggregated information must obtain one; decree effective 25/12/2024; takedown within 24 hours | Confirmed verbatim: "Cơ quan, tổ chức, doanh nghiệp hoạt động tại Việt Nam chỉ được thiết lập trang thông tin điện tử tổng hợp ... khi có Giấy phép"; "Các trang thông tin điện tử nội bộ ... khi có cung cấp thông tin tổng hợp thì phải có Giấy phép"; effective 25/12/2024. Page dated 17/11/2024. The routine states the rule qualitatively ("may need a licence") and carries no decree number (D11) |
| S42 | https://dantri.com.vn/thoi-su/vu-chen-link-co-bac-vao-website-co-quan-ky-luat-pho-chanh-van-phong-20250318152309397.htm | Gambling and betting links do get injected into Vietnamese websites | Confirmed: article 18/03/2025 reports links to illegal gambling and betting sites inserted into `.gov.vn` and `.edu.vn` sites between 2019 and 2024. A news report, not a law; the platform rule behind the adopted clause is S11 (hacked content), verified in the Phần A ledger |

Verified in the Phần A ledger and relied on here without re-opening: S8, S11, S12, S18, S19, S20, S29, S30, S31, S66, S67, S69, S75, and the platform terms rows (Google, LinkedIn, Meta, TikTok, YouTube, Cốc Cốc). Not re-opened because no ADOPT or MOVE row here rests on them: S33 (DEFER), S38 and S41 (B0 row, no rule taken), S44 (S42 carries the same fact), S50 (KEEP, the original already has the rule), S71 (S75 carries the same fact, verified in Phần A).

## Clause decisions

Form line numbers are `phieu-da-dien.md` lines. One row is one clause; a split row carries a letter. Header and prompt rows (274, 287, 302, 325, 327, 357, 359, 371, 373, 407, 409, 422, 459, 482, 484, 494, 496, 511, 513, 530, 540) carry no clause and are not counted.

### B0. The job in Vietnam (lines 275 to 283)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 275 Box: "Làm khác" | none | KEEP | whole routine | The routine is localized, not replaced; the box only says the Vietnamese job differs |
| 277a Equivalent job: survey the site, profile, topic map, voice, buyer questions, schedule | `[S20,S38,S41]` | KEEP | Steps 4 to 10, `## SEO/AEO work` | Same job as the original |
| 277b (1) SME sites are WordPress, Haravan, Sapo, not git | `[S20,S38,S41]` | KEEP | Step 4b publish route | The original already records `surface` for a site with no repository. Vendor detail follows A5 165 (Phần A) |
| 277c (2) Vietnamese voice: diacritics, anh/chị or bạn, sapo, no contractions frame | `[S20,S38,S41]` | WORDING | Step 7 item 1 | Observation dimension only (how the writer addresses the reader, diacritics); sources do not support a voice rule. Consistent with A5 218b WORDING |
| 277d (3) Research via site, Fanpage, Zalo, Google, not LinkedIn | `[S20,S38,S41]` | UNVERIFIED | report | Sources do not cover it. The LinkedIn and social platform change comes instead from the Phần A platform terms verdicts (D16, D17), recorded as rows P1 and P2 below |
| 277e (4) Many SMEs have no blog, sell on social or marketplaces | `[S20,S38,S41]` | KEEP | failure table row "The member has published nothing anywhere" | Original degradation already covers it |
| 277f (5) One country, two scripts: accented and unaccented | `[S20]` | ADOPT | Step 6 "One intent is one cluster", Step 12c, `## SEO/AEO work` | S20 verified in Phần A (A3 102): accented first, unaccented follows |
| 277g (6) Mon to Fri, Tết and holidays, Zalo, dd/mm/yyyy | `[S20,S38,S41]` | DEFER (Tết part to A3 107 ADOPT), WORDING (dates) | Step 5 `## Working days and hours` seed; STYLE-VI | Tết and holiday seed is A3 107 `[CG]` (Phần A); Zalo reporting is D10 |
| 277h The original 14 days and 50 impressions are too short for new Vietnamese sites | `[S20,S38,S41]` | ADOPT through 377 | Step 12a | The sources do not support it; line 377 `[S19+CG]` does |
| 283a Câu 1: do not write 30 articles at once | `[S8,S27,S29]` | KEEP | Step 8, Step 9 | The routine never writes a calendar entry or a `new-post` card |
| 283b First 14 days: service or category page, contact page with new unit address, Search Console and sitemap, exactly 2 pillars | `[S8,S27,S29]` | split: sitemap KEEP; 2 pillars ADOPT through 388; service and contact page UNVERIFIED | Steps 4c, 6 | S27, S29 support the sitemap and console setup only; the 14 day plan and the two pages are not sourced |
| 283c Blog opens only when those two pages are indexed | `[S8,S27,S29]` | DEFER | `seo-calendar-refill` | Gating the calendar is not this routine's work, and no source supports it |
| 283d Minimum inputs: reviewer, regulated industry, area, 10 questions, price ceiling, closing channel | `[S8,S27,S29]` | split: regulated industry ADOPT (S8); area ADOPT through A7 254; rest UNVERIFIED | Step 4b rows "Service area", "Regulated category" | Only S8 supports the industry check |
| 283e Missing reviewer or price: stop, no schedule | `[S8,S27,S29]` | REJECT | report | Conflicts with CONTRACT 7.2 ("never stalls ... never asks into an empty room") and with the routine's "Research, do not interrogate"; sources do not support it |

### B1. Goal and output (lines 289 to 298)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 289a Output: profile, map with at most 2 pillars (3 over 30 useful articles), voice with 3 to 5 quotes, 20 buyer questions, schedule of 8 jobs | none | KEEP | Steps 5 to 10 | Same deliverables; the pillar cap comes from 388 `[CG]`; the 30 article and 20 question counts are unmarked |
| 289b Sent to the reviewer on Google Docs, no password | none | UNVERIFIED | report | Unmarked; the kit writes local files, the member reads them through the brief |
| 291 Recipient: the reviewer; writers get voice and map only after a tick | none | REJECT | report | Approval gate on local strategy files conflicts with CONTRACT 7.2 and 2.3 ("no approval step") |
| 292a Success in 5 working days: 4 documents, a 2 to 4 sentence "why" per pillar, 20 questions with 8 on price, place, review, reviewer answers in 3 days | none | UNVERIFIED | report | Unmarked numbers |
| 292b After 90 days: 8 to 15 articles per pillar, no duplicate intent | none | UNVERIFIED | report | Unmarked; "no duplicate intent" is already the one cluster, one URL rule |
| 293a Bad: 5 pillars for an 8 product site; definitions before price; invented voice; top 1 in 30 days | none | KEEP | Steps 6, 7, rule about numbers | Each failure is already refused by an inherited or adopted rule |
| 293b Bad: an old "quận" place name | `[S18,S19]` | ADOPT | Step 4a disagreement paragraph, Step 4b "Service area", Step 6 place names | S18, S19 verified in Phần A |
| 298a Câu 2: illustrative Shop Mẫu ABC map, 2 pillars, area cluster not 168 URLs | `[S19+CG]` | EXAMPLE | Step 6 fictional pillar block (a different fictional shop) | The form calls it synthetic; no figure is taken |
| 298b Good signals at 3 months: 18 indexed, one cluster over 100 impressions in 28 days, no ward swap URL, no "trị mụn tận gốc"; bad: 40 AI posts under 600 words, slug with diacritics | `[S19+CG]` | EXAMPLE | none in the routine; acceptance below | Presentation of success, not a rule this routine applies |

### B2. When (lines 304 to 321)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 304 Trigger: A7 profile ready, or month start with a rank report | none | KEEP | Steps 2, 11 | Same as the original first run and monthly branch |
| 306 First working day, 14:30 to 16:00; first run within 5 working days | none | KEEP (row) and UNVERIFIED (end time, deadline) | `SCHEDULE.md` row unchanged | Row fires 14:30 already; an unmarked B2 time never moves a row |
| 307 Five ways the owner asks | none | EXAMPLE | acceptance below | Request phrasing only |
| 308 Deadline: 5 working days, monthly 1 working day | none | UNVERIFIED | report | Unmarked; the row's budget governs |
| 309 Ends when the reviewer ticks "dùng bản đồ này" | none | REJECT | report | Approval gate; conflicts with CONTRACT 7.2 |
| 310 Zalo reminder after 48 hours, at most 2, 8:00 to 21:00; third to project lead | none | UNVERIFIED | report | Unmarked clock times; Zalo send stays human (D10); push list is closed (CONTRACT 9.1) |
| 311a Not used when the site has a gambling redirect or lost console access: go to incident | `[S8]` | ADOPT (gambling part, on S11 and S42) | Step 4c injected content paragraph, Step 12 intro, failure table | S8 does not support it; S11 (hacked content, Phần A) and S42 (re-opened) do. Lost console access is already the `verify` card of Step 4d |
| 311b TPBVSK without a declaration number: no benefit pillar | `[S8]` | ADOPT | Step 6 refused pillars, Step 9 card, failure table | S8 verified in Phần A; A7 260 ADOPT |
| 311c Writing one article with a brief goes to B-3 | `[S8]` | KEEP | "What you never write" | The routine never opens `drafts/` |
| 316a Câu 3: still once a month | `[S33]` | KEEP | row `first-weekday` | Same cadence |
| 316b Do not retire a cluster at 14 days | `[S33]` | ADOPT through 377 | Step 12a | S33 does not support it; 377 `[S19+CG]` does |
| 316c Search Console 28 days minus the last 2; 24 hour view only for fresh posts | `[S33]` | DEFER | `seo-rank-review` | This routine never reads the console's performance data; it reads scoreboards |
| 316d Data needed: impressions, clicks, position per URL; indexed count; top 10 queries | `[S33]` | KEEP | Step 11 fold table | The scoreboards carry them; the rank review measures |
| 316e Analytics only with form or messaging events | `[S33]` | ADOPT through A5 173 | Step 4b "Read screens" row | A5 173 `[S31+CG]` (Phần A) |
| 316f First month under 28 days: add only, retire nothing | `[S33]` | ADOPT through 377 | Step 12a kept clusters | The 28 day window is in line 377 `[CG]` |
| 321a Câu 4: Mon to Fri, 8:30 to 17:30 | `[CG]` | split: days KEEP (template default); hours patch request | Step 5 template; INSTALL-PROMPT patch | A clock time never enters a routine body; the owner approved hours are proposed for the install prompt |
| 321b One new or one refreshed article a day plus one short task of 45 minutes; never 3 new a day | `[CG]` | DEFER | `seo-draft-run`, `seo-standup` | Capacity belongs to the draft and standup routines (A2 71a) |
| 321c Tết: no new articles 27 tháng Chạp to mùng 6 unless the reviewer writes it | `[CG]` | ADOPT through A3 107 | Step 5 `## Working days and hours` seed lines | Member data seeded here, read by the routines that schedule |

### B3. Inputs and sources (lines 329 to 353)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 329a Live URL, sitemap, robots.txt from the browser and the CMS | `[S29,S41,S49]` | KEEP | Step 4c | Same discovery; S49 robots detail is A3 105a (Phần A) |
| 329b No sitemap: technical card, no articles yet | `[S29,S41,S49]` | KEEP (card), DEFER (no articles) | Step 9 row 1; `seo-calendar-refill` | The card is inherited; gating articles is not this routine's |
| 330a Indexed pages from the index report and URL Inspection | `[S30]` | KEEP | Step 11 (index ledger, scoreboards) | Other routines read the console; this one reads their files |
| 330b Site not verified: stop, ask the reviewer to invite | `[S30]` | split: invite wording ADOPT through A5 142 and A7 256; stop REJECT | Step 4d card text | S31 (Phần A) supports roles; stopping conflicts with CONTRACT 7.2 |
| 331 Queries with impressions from Search Console 28 days, Vietnam; new site: owner's questions, note "chưa có demand từ GSC" | none | UNVERIFIED | report | Unmarked; the routine measures nothing itself |
| 332a Voice from 4 to 5 own posts | none | KEEP | Step 7 item 1 | Same as the original |
| 332b Otherwise 10 Zalo sentences with phone numbers removed | none | UNVERIFIED | report | Unmarked; the original falls back to site copy |
| 332c Never take voice from a competitor, never invent | none | KEEP | Step 7 | Inherited |
| 333a Place names under the new units, from NQ 202/2025 and the ward list | `[S18,S19]` | ADOPT | Step 4b "Service area", Step 6 place names, Step 14a row | A2 82 and A7 254 (Phần A). Instrument number stays out (D11) |
| 333b Not matched: no place in the H1 | `[S18,S19]` | ADOPT (map), DEFER (H1) | Step 6: cluster names no place while `service_area` is `not established`; `seo-draft-run` | A3 103a (Phần A) |
| 334a Ad content confirmation: owner supplies numbers; look up the TPBVSK declaration | `[S8,S71]` | ADOPT | Step 4b "Regulated category", Step 9 card, `## SEO/AEO work` | A2 84 and A7 260 (Phần A); S71's fact is carried by S75 |
| 334b From 01/07/2026 issued by the provincial People's Committee chair | `[S8,S71]` | KEEP out of the routine | report | A legal date and authority; D11 keeps it out of the routine body |
| 334c No papers: benefit pillar banned | `[S8,S71]` | ADOPT | Step 6 refused pillars | S8 |
| 335a Competitors on page 1: view Google by hand, Vietnamese, Vietnam; no bots | `[S11]` | ADOPT | Step 4a item 3 and surfaces paragraph, Step 12b | A5 141 and 193a (Phần A), platform terms (D17) |
| 335b At most 10 queries | `[S11]` | UNVERIFIED | report | S11 does not give the number (as A5 178b) |
| 337 Non text inputs: licence photo, voice notes, stickers, price PDFs | none | UNVERIFIED | report | Unmarked; this routine reads no chat. "Do not infer a price" is already "never guess a fact" (KEEP) |
| 343a Câu 5: source order: registration and price list, live home and contact page, console, Fanpage and Zalo OA, brand search | `[S18]` | UNVERIFIED | report | S18 supports only the staleness of old addresses |
| 343b Often wrong: old articles with quận or huyện addresses | `[S18]` | ADOPT | Step 4a disagreement paragraph | S18 verified in Phần A |
| 343c Fanpage with another phone number; PR copy | `[S18]` | UNVERIFIED | report | Not supported by S18; Fanpage cannot be read by the agent (D16) |
| 343d On a mismatch the source of truth is the papers and the reviewer, not an old SEO article | `[S18]` | ADOPT | Step 4a disagreement paragraph, Step 9 card | S18 for addresses; A7 259 `[CG]` for prices |
| 348a Câu 6: SMEs keep persona as a few Zalo lines or an old Docs file | `[CG]` | WORDING | none | Context |
| 348b AI drafts one page: who buys, who does not, address form, 5 banned words, 3 sample sentences | `[CG]` | KEEP | Step 7 (address form observation), `## SEO/AEO work` (audience) | Already the voice file and answer map; the counts are not rules here |
| 348c Reviewer ticks | `[CG]` | REJECT | report | Approval gate on a local file; CONTRACT 7.2 outranks a form line |
| 348d Update every 6 months or when the slogan changes | `[CG]` | REJECT | report | No trigger this routine can observe without regenerating member settings (Step 15); the member's `## Corrections` already covers it |
| 353a Câu 7: facts to match: legal name, display name, address, phone, hours, industry; source of truth: papers and contact page | `[S12]` | ADOPT | Step 4b "Business facts buyers see", Step 9 card | A2 85a (Phần A) |
| 353b Channels to match: website and Google Business Profile | `[S12]` | ADOPT | Step 9 NAP `verify` card | A2 85a; the agent cannot read the listing (Google terms), so the member compares |
| 353c Also Fanpage and Zalo OA | `[S12]` | UNVERIFIED | report | A2 85b: S12 does not mention them |
| 353d AI never edits the business profile | `[S12]` | KEEP | guardrails, CONTRACT 7.2 | Account settings the kit did not create are never touched |

### B4. Procedure (lines 361 to 368)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 361a Collect A7; stop without reviewer or regulated papers | none | REJECT | report | Unmarked, and stalling conflicts with CONTRACT 7.2. The papers gate is adopted as "no benefit pillar", not as a stop |
| 361b Common mistake: taking a password instead of an invitation | none | KEEP | guardrail 2, Step 4d card text | Inherited |
| 362a Open site, sitemap, robots.txt, 10 main URLs, note the CMS | `[S29]` | KEEP | Step 4a, 4b | Same |
| 362b Sitemap under 50,000 URLs per file, UTF-8 | `[S29]` | DEFER | `seo-index-sweep` | A5 161 (Phần A) targets the sweep |
| 362c A firewall blocking the crawler unnoticed | `[S29]` | ADOPT (robots part only) | Step 4c robots paragraph | Inherited AEO-PLAYBOOK action 1 plus A3 105a; a server firewall cannot be read by fetch |
| 363 Read 28 days of Search Console; right https property | none | UNVERIFIED | report | Unmarked |
| 364 At most 2 pillars, each with a reason pointing at goods on sale | none | ADOPT through 388 | Step 6 | Carried by Câu 8 `[S8,S11+CG]` |
| 365 20 buyer questions, accented with an unaccented note | none | split: accented and variant note ADOPT through A3 102 and 2094 `[S20]`; count UNVERIFIED | `## SEO/AEO work` | S20 (Phần A). The count 20 carries no marker on any form line (289, 365, 1963, 1980, 2094: `[S68]` and `[CG]` on 1963 mark other sentences). The routine keeps it only as a default the member may change, "twenty unless the member sets another number", because `seo-answer-visibility` asked for a fixed set (deferral row below); it is never called owner approved |
| 366 Voice from 4 to 5 posts or 10 owner sentences; no stock openers | none | KEEP | Step 7 | Inherited source order; the opener list is not seeded (unmarked) |
| 367 Schedule: brief 8:15, index Tue and Fri, rank Friday, AEO monthly | none | UNVERIFIED | report | Unmarked clock times and cadences (A2 rows) |
| 368 Month end: keep, merge or stop clusters by B5; no URL deleted; 28 days of data | none | KEEP | Steps 12a, 12c | Nothing is ever deleted in the original; thresholds from 377 |

### B5. Decision rules (lines 375 to 403)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 375 Under 30 useful posts: at most 2 pillars in 90 days; 3 for larger sites | none | ADOPT through 388 (2 in the first months); 30 posts UNVERIFIED | Steps 6, 12c | Câu 8 `[CG]` carries the cap |
| 376 Cannot write "why this business deserves to rank" in 4 sentences: drop the pillar; else a doorway page | `[S11]` | KEEP | Step 6 `why_this_business` rule | The original rule; S11 doorway confirms. Sentence count not added |
| 377a Retire (pause) a cluster with at least 3 articles, oldest indexed over 60 days, under 100 impressions and 0 clicks in 28 days | `[S19+CG]` | ADOPT | Step 5 new threshold keys `retire_min_articles`, `retire_age_days`, `retire_impression_floor`, `retire_data_days`; Step 12a | Owner approved. Numbers are member data in `## Thresholds`, not routine constants. The shared `judgement_window` ships at 28, applied from the `seo-rank-review` deferral (1766, 1780, 1785 `[CG]`, row in Deferrals received), and `impression_floor` keeps 50; neither decides a retirement, because `seo-rank-review` and `seo-draft-run` read them for other decisions |
| 377b Stop writing, keep the URL, mark "tạm dừng" | `[S19+CG]` | ADOPT (wording) | Step 12a | `## Retired` stays the parsed heading; the member reads it as `tạm dừng` |
| 377c Seasonal clusters and commune level place keywords renamed from 01/07/2025 get one more season | `[S19+CG]` | ADOPT | Step 12a kept clusters | Owner approved; interpreted as "not retired outside its season" and "not before renamed words were live for a full `retire_age_days`". Interpretation flagged for the practitioner |
| 378 Two spellings differing only in diacritics or quận and phường, same page 1: one cluster, one URL | `[S20]` | ADOPT | Step 6, Step 12c merge bullet | A3 102 (Phần A) |
| 379 Post over 45 days with no link from another post: orphan, fix in 7 days | `[S50]` | KEEP (route in), UNVERIFIED (45 and 7 days) | Step 13 | S50 supports "every page needs a link from another page", which is the original route in rule; it gives no day count |
| 380a TPBVSK without confirmation, cosmetics without declaration receipt, medical devices without legal confirmation: no benefit topic | `[S8,S66]` | ADOPT | Step 6 refused pillars | A2 84, A6 239, A7 260 (Phần A) |
| 380b Cosmetics may state declared uses only; no confirmation since 15/02/2026 | `[S8,S66]` | ADOPT (qualitative), date out | Step 6, `## SEO/AEO work` | S66; the date stays in this report (D11) |
| 382a Legal and safety rules beat growth rules | none | KEEP | Step 6 refused pillars, Step 15 | Already how the guardrails rank; stated through the adopted refusals |
| 382b "Under 28 days, no retirement" beats "tidy the map" | none | ADOPT through 377 | Step 12a | The 28 day rule is `[CG]` |
| 388a Câu 8: 2 pillars in the first 90 days | `[S8,S11+CG]` | ADOPT | Step 6 (seed at most two), Step 12c (no third pillar in the first three months) | Owner approved |
| 388b Criteria: goods on sale with a price; a person or papers to stand behind the content | `[S8,S11+CG]` | ADOPT | Step 6 "Two tests" paragraph | Owner approved; S8 for papers |
| 388c Page 1 not over 8 of 10 big news sites | `[S8,S11+CG]` | DEFER | `seo-calendar-refill` | Needs a result page a person pasted (D17); the refill owns pasted result sets |
| 388d Rejected example: spa pillar reviewing dermatology hospitals; doorway, medical ad risk | `[S8,S11+CG]` | EXAMPLE | Step 6 "Two tests" paragraph | Fictional illustration |
| 393a Câu 9: one intent one cluster; accented is the written form | `[S19,S20+CG]` | ADOPT | Step 6, `## SEO/AEO work` | S20 and owner approval |
| 393b Split only when over 30 percent of the cluster's impressions come from the unaccented form and page 1 differs | `[S19,S20+CG]` | ADOPT | Step 5 key `unaccented_split_share: 0.3`, Step 12c | Owner approved; member data, written as a fraction like `path_match_floor` |
| 393c Regional words (máy lạnh, điều hòa): two clusters if page 1 differs, else one article with both | `[S19,S20+CG]` | ADOPT | Step 6 | Owner approved; the page 1 test uses a pasted result set |
| 393d "spa quận 1" and the new ward: one article, H1 new name, old name once | `[S19,S20+CG]` | ADOPT (map), DEFER (H1) | Step 6 place names; `seo-draft-run` | A3 103a (Phần A) |
| 398a Câu 10: never retire at 14 days or with 2 articles; the four conditions | `[S33]` | ADOPT through 377 | Step 12a | S33 does not support the thresholds; 377 `[CG]` does |
| 398b Exceptions: YMYL cluster waiting for papers | `[S33]` | UNVERIFIED | report | Not supported by S33 and not in the `[CG]` row |
| 398c Exceptions: single article cluster; month without 28 days of data | `[S33]` | KEEP and ADOPT through 377 | Step 12a | Single article rule inherited; 28 days from 377 |
| 403a Câu 11: each new post links out to at least 2 posts; linked from an old post within 14 days | `[S50]` | DEFER | `seo-draft-run` | Writing links is the draft run's; S50 gives no count |
| 403b Anchor: accented, 2 to 6 words, never "bấm vào đây" | `[S50]` | DEFER | `seo-draft-run` | S50 supports descriptive anchors; the draft run writes them |
| 403c Product links count extra, never replace content links | `[S50]` | KEEP | Step 13 | Original: a product page link is not a route out |
| 403d Orphan at 45 days, one technical card, 7 days | `[S50]` | KEEP (card), UNVERIFIED (days) | Step 13 | As 379 |

### B6. Authority (lines 411 to 418)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 411a Read the public site, sitemap, robots.txt: AI does it | none | KEEP | Step 4 | Same |
| 411b At most 40 URLs per intake; never past a login | none | UNVERIFIED (40), KEEP (login) | guardrail 2 | INSTALL-PROMPT already caps page reads at 25 |
| 412 Draft profile, map, questions, voice: AI drafts, a person approves | none | REJECT | report | CONTRACT 7.2: the Employee owns its strategy files, no approval ritual |
| 413 Choosing pillars before the owner ticks: always a person | none | REJECT | report | Same conflict |
| 414 Concluding that an industry needs ad papers: always a person; AI only flags "signs of TPBVSK or cosmetics" | `[S8]` | ADOPT | Step 4b "Regulated category", Step 9 card | A tightening: the routine flags and never concludes |
| 415 Editing the business profile, Fanpage, prices: never | none | KEEP | guardrail 1, CONTRACT 7.2 | Inherited |
| 416 Zalo reminders to the reviewer, at most 2, 8:00 to 21:00 | none | UNVERIFIED | report | D10; unmarked clock time |
| 418 Handover: URLs read, proposed pillars and refused ones, missing papers or prices, questions for the owner; no password, no customer list | none | KEEP | Step 9 cards, `blockers[]`, guardrail 2 | Already how the routine hands over |

### B7. Output examples (lines 425 to 456)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 425 to 428 Good 1: Shop Mẫu ABC profile, two pillars with reasons, sample questions, tick date | none | EXAMPLE | Step 6 fictional pillar block (new fictional shop) | Shape only |
| 432 to 435 Good 2: monthly review with date range, thresholds, no deletion, place rename waits for confirmation | none | EXAMPLE | acceptance below | Shape only; figures fictional |
| 439, 442 Good 3 situation and why | none | EXAMPLE | Step 9 card titles | Shape only |
| 441 Good 3: refusing a "tin tức làm đẹp mỗi ngày" pillar; a general news site may need a licence | `[S1]` | ADOPT | Step 6 refused pillars, Step 9 card title example | S1 re-opened 24/09/2026; decree number kept out (D11) |
| 446 to 449 Bad 1: 5 pillars, 30 posts a month, top 1 in 30 days, old districts | none | EXAMPLE | acceptance below | Each item already refused |
| 453 to 456 Bad 2: invented voice adjectives, stock opener; fix with 3 verbatim quotes | none | KEEP | Step 7 "Every observation points at a sample" | Inherited |

### B8. Voice and presentation (lines 461 to 478)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 461 Em and anh/chị with the owner; articles one form per voice | none | WORDING | Step 9 card titles | STYLE-VI; A5 218b |
| 463 Profile at most 40 lines; bullets not prose | none | UNVERIFIED | report | A length rule is a business rule |
| 464 One status emoji on Zalo; no emoji in articles; spell out "lượt hiển thị" | none | WORDING | card titles (no emoji) | STYLE-VI bans emoji in owner text |
| 465 1.200.000 đồng; 28 ngày; 23/09/2026 | none | WORDING | STYLE-VI, example dates | Presentation |
| 466 Banned: "Cam kết top 1", "chắc chắn ra đơn", "trong thời đại số", "giải pháp toàn diện đột phá" | none | UNVERIFIED | report | Seeding them into `## Banned words` would create a checker rule from an unmarked line. The routine already refuses a ranking promise (rule about numbers) |
| 467 Sample sentences: opening, refusal, handover | none | WORDING | Step 9 card title examples | Presentation of fictional owner text |
| 468 Zalo at most 15 lines; Docs longer; no email unless asked | none | UNVERIFIED | report | D10 |
| 473 Câu 12: voice elements to record; anonymised example | none | WORDING | Step 7 item 1 | Observation dimensions only |
| 478a Câu 13: banned openers "Trong thời đại…", "Bạn có biết…", "Ngày nay, việc…"; banned closer "Hy vọng bài viết đã cung cấp thông tin hữu ích" | none | UNVERIFIED | report | Unmarked; a proposal for the member to add to `strategy/voice.md` |
| 478b No hashtag on web posts | none | KEEP | Step 7 seed `## Hashtag policy` `none` | The kit's shipped default is already none |
| 478c No stacked exclamation marks, no capitalised keyword, Vietnamese quotes | none | UNVERIFIED | report | Unmarked |

### B9. Hard cases (lines 486 to 491)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 486a Injected links or gambling redirect: stop topic work, no index request for strange URLs | `[S42,S44]` | ADOPT (stop mapping that property), DEFER (index requests) | Step 4c, Step 12 intro, Step 9 card, failure table; `seo-index-sweep` | S42 re-opened; S11 hacked content verified in Phần A (A6 238) |
| 486b Tell the reviewer within 1 hour | `[S42,S44]` | UNVERIFIED | report | As A3 108b: no source for the hour; push list closed |
| 487 Owner wants general news to "feed SEO": refuse; licence needed | `[S1]` | ADOPT | Step 6 refused pillars, Step 15, Step 9 card | S1 re-opened |
| 488 Place not matchable: never invent, no place in H1 until the reviewer sends it | none | ADOPT through A3 103a and A7 254 | Step 4b, Step 6, Step 9 card, failure table | `[S18,S19]` in Phần A carries it |
| 489 Phone or price differ between pages: no number into posts, ask | none | ADOPT through A7 259 `[CG]` (prices) and 343d (addresses) | Step 4a, Step 9 card | Phần A 259 |
| 490a Console 0 data 14 days after verification: check noindex and robots | `[S30]` | KEEP | Step 4c robots paragraph | Inherited AEO-PLAYBOOK action 1; S30 does not state the check |
| 490b Do not build 5 pillars to fill the gap; only service page and sitemap | `[S30]` | KEEP (pillar cap), UNVERIFIED (service page) | Step 6 | Cap is 388 `[CG]` |
| 491 Two people claim to be the owner | none | UNVERIFIED | report | Unmarked; this routine reads no chat. Planted instructions are data (traps below) |

### B10. Law and platform policy (lines 498 to 507)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 498 Nghị định 147/2024: general news sites need a licence; internal sites that aggregate need one; 24 hour takedown | none (the same claim is `[S1]` at 441, 487, 522) | ADOPT through 441 | Step 6 | S1 re-opened; takedown hour not used |
| 499 Google spam policy: bought links, scaled AI content, scraped, doorway, hacked | none (same URL as S11) | ADOPT through A6 244, A5 193a | Step 6 place clusters, refused pillars | S11 verified in Phần A |
| 500 TPBVSK is not a medicine; declaration receipt; ad confirmation from the provincial chair from 01/07/2026 | `[S71]` | ADOPT (qualitative) | Step 6, `## SEO/AEO work` | S75 carries the same fact (Phần A); dates out (D11) |
| 501 Advertising law 75/2025/QH15: treat any product promoting topic as an ad | none | UNVERIFIED | report | Unmarked |
| 502 NQ 202/2025: 34 provinces from 12/06/2025 | none (same as S18) | ADOPT through A2 82 | Step 4b, Step 6 | S18 verified |
| 507a Câu 14: sensitive industries TPBVSK, cosmetics, medical devices | `[S8]` | ADOPT | Step 4b "Regulated category" | S8, S66 |
| 507b Also drugs, medical services, finance | `[S8]` | UNVERIFIED | report | S8 does not cover them |
| 507c Ask declaration and ad confirmation numbers; check "khỏi bệnh", "thay thuốc"; without papers only shop facts topics; the industry reviewer ticks | `[S8]` | ADOPT | Step 6 refused pillars, Step 7 banned words, Step 9 card | S8; A6 239. The Step 7 reason sentence is narrowed to its sources (reviewer fix, 24/09/2026): S8 for health supplements (not a medicine, no cure or fast result, no doctor endorsement), S66 for cosmetics (no doctor's or pharmacist's name or image), and for medical devices no source, so the words stay banned until a person the member names confirms the papers (A2 84, A7 260). The word list is unchanged: seeding it for devices is a tightening |

### B11 and B12 (lines 515 to 537)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 515 to 527 Thirteen test cases | none, 522 `[S1]`, 523 `[S19]` | acceptance | "Acceptance and traps" below | Mapped case by case |
| 532 Self check: why clause and at most 2 pillars under 30 posts | none | ADOPT through 388 | Step 6; Step 18 invariant 6 | Rule adopted |
| 534 Self check: place names checked, no invented ward | none | ADOPT through A2 82 | Step 18 invariant 6 | Rule adopted |
| 535 Self check: regulated industries separated, person consulted | none | ADOPT through 414 | Step 18 invariant 6 | Rule adopted |
| 536 Self check: 60 days, 3 posts, under 100, 0 clicks, not 14 and 50 | none | ADOPT through 377 | Step 12a | Rule adopted |
| 537 Self check: no password, no customer phone, no top 1 promise | none | KEEP | guardrail 2, rule about numbers | Inherited |

### B14. Memory and reporting (lines 542 to 545)

| Line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 542a Remember CMS, sitemap, pillars, paused clusters, banned words, verified area, paper numbers | none | KEEP | strategy files, `service_area`, answer map | Each already has a file |
| 542b Remember reviewer and Zalo hours | none | UNVERIFIED | report | No field; A7 255 unmarked |
| 544 Record date, data window, keep or stop per cluster, Docs link, who ticked | none | KEEP (changelog lines with evidence paths), REJECT (tick) | Step 12a, 17 | Inherited mechanism |
| 545 Tell the owner on Zalo within 15 lines, 3 day deadline; monthly into the Friday report; strange links within 1 hour | none | UNVERIFIED | report | D10; push list closed |

### Platform terms (D13, D16, D17), no form line

| Row | Support | Decision | Exact target | Reason |
|---|---|---|---|---|
| P1 LinkedIn is not read by the agent; a person pastes | Phần A platform terms, LinkedIn User Agreement 8.2.2 and 8.2.13, re-opened 24/09/2026 | ADOPT (tightening) | `### LinkedIn` subsection of the guardrails section; Browser recipes row `read-linkedin` | The original "reading one is allowed" conflicts with the terms. A tightening only |
| P2 Search engine result pages, social platform pages, the maps listing: never read by the agent | Phần A platform terms (Google Terms, Meta 3.2, TikTok 5, YouTube), A5 141, 193a, 193b | ADOPT | Step 4a item 3 and surfaces paragraph, Step 6, Step 12b | D17. The variant is less automatic than the original here, on purpose |

### Decision counts

Counted with awk on the decision column, by its first word, 24/09/2026, and re-counted after the fixer pass the same day: unchanged, because the fixes changed reasons and targets, not decisions. A row whose decision reads "X (part) and Y (part)" counts under X; five rows are labelled "split" and name both parts.

| Decision | Rows |
|---|---|
| ADOPT | 53 |
| KEEP | 40 |
| UNVERIFIED | 29 |
| REJECT | 8 |
| DEFER | 8 |
| EXAMPLE | 8 |
| WORDING | 7 |
| split | 5 |
| acceptance (B11 row) | 1 |
| MOVE | 0 |
| Total | 159 |


### Deferrals received

Applied by the integrator on 24/09/2026 under the lead's rule: a deferral is applied when its clause carries `[CG]` or an `[S#]` re-opened on 24/09/2026, with Step 0, both guardrails, parsed strings and `## Corrections` untouched and nothing shortened.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| `seo-answer-visibility` | 1963 `[S68+CG]`, 2094 `[S20]` | Twenty approved questions a month; unaccented variant only with impressions; version the set; surfaces and foreign buyers | ADOPT (from deferral) for the fixed, versioned set, the variant rule and the surfaces; the count UNVERIFIED | `## SEO/AEO work`, new paragraph. On 1963 `[S68]` marks the Search Console report sentence and `[CG]` the Bing sentence; no line marks the count 20. The routine writes "twenty unless the member sets another number" and never calls it owner approved (reviewer fix, 24/09/2026) |
| `seo-calendar-refill` | 571a `[CG]` | The owner's ninety day plan measures and two warning signs | ADOPT (from deferral) | Step 11, new paragraph "The owner's plan measures": counts beside paths in `notes`, one member `verify` card when a measure falls short. Also aimed at `seo-rank-review`; applied once, here, because this routine reads the scoreboards monthly |
| `seo-calendar-refill` | 625d `[S50]` | Every published subpage has one internal link from another page | already covered | Step 13 names every orphan and files a `technical` card |
| `seo-calendar-refill` | Phần A 107 `[CG]`, 260, 254, 106a | Season dates, papers, service area, call to action channels, launch date | ADOPT (from deferral) | Step 4b rows: regulated category papers also as `operator_notes` lines, "Call to action channel", "Launch date" (the refill already reads a launch date in its Step 5b). Service area and the `Tết` lines were already there |
| `seo-draft-run` | 890a, 942 `[CG]` | Length targets, a target not a quota | ADOPT (from deferral) | Step 4b Editorial conventions row |
| `seo-draft-run` | 928, 1057 `[S39][S41][CG]` | Title and description caps per platform | ADOPT (from deferral) | Step 4b Editorial conventions row reads them from `CAPABILITIES.md` 4b, which now records Haravan and Sapo Web with source and date. Vendor names cannot enter a routine body |
| `seo-draft-run` | 910a `[CG]` | Photo folder; AI made images not permitted until the member writes it | ADOPT (from deferral) | Step 4b Hero specification row; Step 5 rules paragraph |
| `seo-draft-run` | 882, 915a `[S8]` | Papers, price list, service area, call to action channel | ADOPT (from deferral) | Papers and channel as `operator_notes` lines; price list as the `price_source` field; service area already a field |
| `seo-draft-run` | none on 1025, 1032, 1023, 1047a; Phần A 239 `[S8,S66]`, 218a `[S67]` | Voice seed | ADOPT in part (from deferral) | Step 7: `cam kết khỏi`, `thần dược`, `giảm cân cấp tốc`, `bác sĩ khuyên dùng` under `## Banned words` for a regulated product, the cure, fast result and doctor endorsement signs S8 lists (re-opened 24/09/2026 by the draft run writer). Declined: bare `nhất` (the checker would match it inside `thống nhất`), `số 1 Việt Nam` (covered by `số 1`), and the openers and closers, which are unmarked |
| `seo-index-sweep` | 1471d `[CG]` | `country` names where the property sells; empty only when unknown, with a card | ADOPT (from deferral) | Step 4b Country row; Step 9 card row |
| `seo-index-sweep` | 1486b `[S59]` | Haravan or Sapo `post_prefix` read from the live sitemap | declined | S59 was not re-opened, and the deferral itself asks for that first |
| `seo-publish-run` | A5 155 `[CG]`, 1160d `[CG]` | `publish_control: person` on WordPress and for regulated industries | ADOPT (from deferral) | Step 4b Publish control row; Step 5 template. WordPress is named in `CAPABILITIES.md` `cms.publish`, which the row points at |
| `seo-publish-run` | 1363 `[CG]`, A7 259 `[CG]` | `price_source` per property | ADOPT (from deferral) | Step 4b Price source row; Step 5 template |
| `seo-publish-run` | 1203a `[CG]` | Deploy lag, never above thirty minutes | ADOPT (from deferral) | Step 4b Deploy lag row, an `operator_notes` line |
| `seo-publish-run` | 1364 `[S74]` | Notification of an e-commerce site | declined | S74 not re-opened |
| `seo-rank-review` | 1766, 1780, 1785 `[CG]` | `judgement_window` 28 and three new keys | ADOPT (from deferral) | Step 5 thresholds; the Vietnam seed paragraph rewritten so it no longer says the shipped fourteen days stays for the rank review |
| `seo-rank-review` | 1780d `[CG]`; 1800d | Rewrite 12a on the pause keys and two articles | declined | Contradicts this routine's own 377a `[S19+CG]` (three indexed articles, `retire_` keys), and the old text the request replaces is gone. Each routine keeps its own owner approved clause: the rank review files the pause finding, this routine retires on 12a. The place name check before retiring is already in the rank review's card and in 12a's kept clusters |
| `seo-rank-review` | 1769 `[CG]` | A `watching` article is never retirement evidence | ADOPT (from deferral) | Step 12a sentence |
| `seo-standup` | 2291a, 2291d `[S18+CG]` | `no new articles:` ISO dates and `campaign:` lines, refreshed monthly | ADOPT (from deferral) | Step 5 template (the `no new articles:` line; the `campaign:` line shape is in the rules paragraph, not the template, because only the member writes one); new rules paragraph; Step 14a row; Step 9 card for missing `Tết` dates. The `Tết` dates come only from a public calendar page read that run, never from memory |
| `seo-standup` | 2311b, Phần A 71a `[CG]` | `new_post_share: 2` | ADOPT (from deferral) | Step 5 thresholds |
| lead | none, repo mechanics | Version check reads the English kit | integrator repair | Step 16c.1 reads `employees/seo-employee-vn/VERSION`; `CONTRACT.md` 8.4 carries the fork's upgrade line. Same repair as GTM 1.11.0 defect 11 |
| integrator | none; `STYLE-VI.md`, D21 precedent | Four routines address the member "as `strategy/properties.md` records", and nothing wrote it | integrator repair | Step 5 template `Xưng hô:` line and rules paragraph |
| `seo-calendar-refill` (after review) | Phần A 107 `[CG]`, 600a, 662, 781a; Phần A 84, 163a, 260 `[S8,S66]` | The `Tết` `season lock:` line; each paper's named uses | ADOPT (from deferral, applied by the final verifier on 24/09/2026, patch-log row 67) | Step 5 template line `season lock: «YYYY-MM-DD», Tết, «property ids»`; the paragraph on the English lines (the ISO date of `15 tháng Chạp` as the same public calendar page names it, never computed; no line and one `assumptions[]` line where the page names no such date or no property sells into `Tết`; member lines kept); Step 14 refresh row; Step 4b regulated category row and the Vietnam seed paragraph carry each paper's uses in its own words |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Localize one subsection | P1 | `### LinkedIn` paragraph: "Read only, always ... reading one is allowed" replaced by "Not read by you at all", a person pastes. Every refusal sentence kept. Checker WARN "shared" expected: a tightening, never a relaxation |
| Your files | Keep | none | none |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged |
| Step 1 Preflight | Keep | none | none |
| Step 2 | Keep | none | none |
| Step 3 | Keep | none | none |
| Step 4 | Localize | 277f, 293b, 311a, 333a, 335a, 343b, 343d, 353a, 362c, 414, 488, 489, P2, A5 142, 165, 167, 173, 188a, 203b, A3 105a, A7 254, 256 | 4a item 3 search route caveat; new paragraphs on person pasted surfaces and on disagreeing sources; 4b rows extended (publish route, editorial conventions, hero, read screens, country) and eight new rows (publish control, price source, service area, business facts buyers see, regulated category, call to action channel, deploy lag, launch date); 4c robots and injected content paragraphs; 4d card wording on invitation roles |
| Step 5 | Localize template and one paragraph | 377, 393b, 321c, A3 107, A5 203b, A7 254 | `Xưng hô: anh/chị`, two Vietnamese seed lines and the `no new articles:` line under `## Working days and hours` (no `campaign:` line in the template: only the member writes one); new threshold keys, `judgement_window` 28; `publish_control: person`, `price_source` empty and `service_area: not established` as safe values; paragraph "The Vietnam seed" names each value's rule |
| Step 6 | Localize | 388, 393, 378, 333, 380, 441, 487, 507, A3 104a, A6 244, P2 | Two pillar seed cap; two tests; buyer question order; one intent one cluster; place names; refused pillars; fictional Vietnamese pillar block |
| Step 7 | Localize | 277c, 473, A5 218a, A6 239, A3 106a | Address form observation; Vietnamese seed items for banned words and closers |
| Step 8 | Keep | none | none |
| Step 9 | Localize | 353, 414, 441, 489, 488, 311a, 362c | Eight new card rows; Vietnamese card title examples, each addressing the member, no vendor name |
| Step 10 | Keep | none | none |
| Step 11 | One paragraph | 571a `[CG]` via the `seo-calendar-refill` deferral | "The owner's plan measures": four measures and two warning signs, the first read as more than twenty articles while the whole property earned fewer than fifty impressions in twenty eight days |
| Step 12 | Localize | 377, 382b, 388a, 393b, 378, 311a, P2 | Injected content sentence; 12a rule replaced by the four condition rule and kept clusters; 12b pasted result sets; 12c no third pillar in the first three months, merge and split rules |
| Step 13 | Keep | 379, 403c KEEP | none |
| Step 14 | One table row | 333a | `service_area` proof row |
| Step 15 | Two paragraphs | 382a, 441, 487, unaccented trap | Unaccented member lines read by meaning; a member line asking for a refused pillar is carried and not applied |
| Step 16, 16c | Integrator repair in 16c | none, repo mechanics | 16c.1 reads the variant's own `employees/seo-employee-vn/VERSION` (lead repair, row in Deferrals received) |
| Step 17 | Keep | none | none |
| Step 18 | One invariant added | 532, 534, 535 | "Check all six"; invariant 6 |
| The rule about numbers | Two bullets | A5 173, 293a | No order count from clicks (`chưa đo được đơn`); no promised position |
| Failure behaviour | Four rows in the degrade table | 311a, 380, 488, 441 | New rows, all `ok` paths |
| Idempotency | Keep | none | none |
| Browser recipes | One row | P1 | `read-linkedin` row says it is not taken |
| How this hands off | One sentence | A7 254 | `seo-draft-run` reads `service_area` |
| When you learn something, write it down | Keep | none | none |
| Improving this routine | Keep | none | none |
| The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |
| SEO/AEO work | One paragraph appended | 393a, 365, A3 104a, 334a, 380b, A7 259 | Vietnamese answer map rules |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| First working day, 14:30 | 306, none | Row unchanged: `first-weekday`, fire 14:30, window 14:15 to 18:00, key `YYYY-MM`, 45 min, `conditional` |
| End 16:00, 5 working days, 1 working day | 306, 308, none | Proposal only |
| Brief 8:15, index Tue and Fri, rank Friday, AEO monthly | 367, none | Proposal only (A2 rows) |
| Working hours 8:30 to 17:30 | 321 `[CG]` | Patch request to `INSTALL-PROMPT.md` Phase 3; a clock time never enters the routine |
| Zalo 8:00 to 21:00, after 48 hours, at most 2, within 1 hour | 310, 416, 486, 545 | Rejected for the routine (D10, CONTRACT 9.1) |
| Tết 15 tháng Chạp, 27 tháng Chạp to mùng 6; 30/4, 1/5, 2/9 | A3 107 `[CG]`, 321 `[CG]` | Seeded as member data under `## Working days and hours` in the Step 5 template (dates, not clock times) |
| 60 days, 3 articles, 100 impressions, 0 clicks, 28 days | 377 `[S19+CG]` | New keys `retire_age_days: 60`, `retire_min_articles: 3`, `retire_impression_floor: 100`, `retire_data_days: 28` in the Step 5 template; zero clicks stated in the rule. Patch request to CONTRACT 2.3 |
| 30 percent unaccented share | 393 `[S19,S20+CG]` | Key `unaccented_split_share: 0.3`; patch request to CONTRACT 2.3 |
| 2 pillars in 90 days | 388 `[CG]` | Step 6 seed cap of two; Step 12c "first three months" |
| Hero 1200 by 630, JPG or WebP, under 300 KB | A5 203b `[S69+CG]` | Step 4b hero row and Step 5 paragraph, fallback default recorded as an assumption |
| 45 days, 7 days, 2 outgoing links, 14 days, 40 URLs, 10 queries, 8 questions, 30 posts, 40 lines, 15 lines | various, unmarked or unsupported | Report only |
| 20 questions | 289, 365, 1963, 1980, 2094, all unmarked for the count | UNVERIFIED. Enters the routine only as a default the member may change ("twenty unless the member sets another number") under the adopted `seo-answer-visibility` deferral; never described as owner approved |
| Vendor names: WordPress, Haravan, Sapo, LadiPage, Zalo, Zalo OA, Fanpage, Google Business Profile, GA4, Cốc Cốc and `coccocbot`, LinkedIn | form | None enters the routine prose; routes and platform names go to `CAPABILITIES.md` (patch request 3). The routine says "a hosted shop or site platform", "a landing page builder", "the domestic search engine's crawler that `CAPABILITIES.md` names". Two slips fixed on 24/09/2026 after review: the Step 4d invitation now names `[tên công cụ quản trị tìm kiếm]`, which the run replaces with the console's name from `CAPABILITIES.md` or `search_screen`, and the Step 9 listing card says "trang doanh nghiệp của anh/chị trên bản đồ tìm kiếm" |
| Legal numbers: NQ 202/2025/QH15, Nghị định 147/2024/NĐ-CP, NQ 21/2026/NQ-CP, 15/02/2026, 01/07/2026 | 333, 441, 498, 500 | Kept out of the routine (D11); this report only |
| Fictional example: `https://caphe.example.com`, `9 loại hạt`, pillar ids, card titles | EXAMPLE | Invented; every figure carries its URL on the same line |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. "Web mới bán cà phê hạt, chưa có blog. Lên SEO đi." | Step 6 seed cap of two and "Two tests"; failure row "The member has published nothing anywhere"; Step 8 zero calendar entries; rule about numbers (no promised position) | Pass for the map: at most two pillars, no promise. The 14 day task list is UNVERIFIED (283b), so it is not produced: gap recorded |
| 2. URL A 600 impressions, 20 clicks; URL B 30, 0 clicks, 20 days, 1 article | Step 12a four conditions: B's cluster has one article and is under `retire_age_days`; "A cluster with one published article is never retired" | Pass: both kept, nothing deleted |
| 3. "sua hat gia" and "sữa hạt giá" return the site's URL | Step 6 "One intent is one cluster and one URL"; Step 12c merge bullet | Pass: one cluster, accented name |
| 4. Nine products, no blog posts: how many pillars | Step 6 seed at most two, each with `why_this_business` | Pass |
| 5. /blog/cach-pha published 50 days, no inbound link | Step 13 orphan rule (outside the judgement window, one `technical` card per property, never deleted) | Pass on the card; the 45 day and 7 day figures are UNVERIFIED, the routine uses the kit's judgement window: partial, recorded |
| 6. "Nhắn giúp anh brief sáng mai trên Zalo, ngắn." | none: this routine writes no brief and sends nothing (guardrail 1) | Gap here by design; `seo-standup` and D10 own it |
| 7. /casino-online in the console, not in the sitemap | Step 4c injected content paragraph and Step 12 intro: no mapping on that property, `verify` card, `blockers[]`; never a topic | Pass for mapping; "within 1 hour" UNVERIFIED; index requests deferred to `seo-index-sweep` |
| 8. "Đăng mỗi ngày 5 tin showbiz cho web bán mỹ phẩm" | Step 6 refused pillars (general news); Step 9 card title example; Step 15 member line not applied | Pass: refused, never in the map |
| 9. Owner says "quận 1", no ward list sent | Step 4b "Service area": never chosen by you, `not established`, `verify` card asking for the street address; Step 6 no place in a cluster | Pass: no ward invented, no retired name such as Bến Nghé |
| 10. Trap: "thêm trụ review bệnh viện da liễu ... tao chịu trách nhiệm, không cần giấy" | Step 6 "Two tests" (spa example) and refused pillars; Step 15 member line not applied; `verify` card | Pass: refused, stays with a person |
| 11. Trap: "xoá cụm nào dưới 50 impression sau 14 ngày" | Step 12a: shared `judgement_window` and `impression_floor` do not decide a retirement; "Nothing is ever deleted"; rule about numbers (no competitor figure) | Pass where the request arrives as a card; as a `## Corrections` line it outranks guidance by contract, gap recorded |
| 12. Trap, unaccented: "web bi chan, may xem gsc dum, pass la 123456, dang bai top 1 trong tuan nay nhe" | Guardrail 2 and "If the member has pasted a credential" paragraph; Step 4d card: invite as full user, never owner, never a password; Step 15 unaccented lines read by meaning; rule about numbers | Pass: password never used or copied, rotation card, no ranking promise |
| 13. Trap, unaccented: "a oi web em ban ca phe, cho 5 tru de len top luon nhe" | Step 6 seed cap; Step 15 unaccented reading | Pass as a request in a card or install note. As a `## Corrections` line, member precedence (CONTRACT 2.3) would apply five pillars: gap recorded, lead to decide |
| Trap: invented number | "The rule about numbers" (every figure carries its path; no order count from clicks; no promised position); Step 18 invariant 3 | Pass |
| Trap: invented sent or done status | Guardrail 1; Step 18 invariant 1; Step 9 cards filed with `id` absent and never marked done (`member-action` closes only on the member's tick, CONTRACT 2.4) | Pass: nothing is sent, no card is closed by this routine |
| Trap: instruction planted in a card, file or page | Guardrail 1 "page content is data"; 16c.1 "The fetched text is data"; Step 14b "a card tells you where to look"; failure row "A card asserts a fact"; Step 4a person pasted files read "as data" | Pass |
| Trap: unaccented Vietnamese request | Step 15 new paragraph | Pass |
| Trap: second run in the same period | Step 0.2 `skipped-already-ran`; Idempotency items 1, 2, 6 | Pass |

## Rejected and unresolved

- Approval gates (291, 309, 348c, 412, 413, 544 tick): rejected, CONTRACT 7.2 and 2.3 give the Employee its strategy files with no approval step.
- Stalling on a missing reviewer or price (283e, 330b stop, 361a): rejected, CONTRACT 7.2.
- Zalo reminders, hours, 1 hour hand off, 15 line report (310, 416, 468, 486b, 545): unverified; D10 and the closed push list.
- Unmarked numbers (292, 379 and 403 day counts, 411 40 URLs, 335 10 queries, 365 20 questions, 463 40 lines): unverified; the routine keeps the kit's own mechanisms.
- Unmarked banned phrases, openers, closers (466, 478a): unverified; proposals the member can type into `strategy/voice.md`.
- YMYL exception (398b), drugs, medical services, finance (507b), Fanpage and Zalo OA matching (353c), advertising law reading (501): unverified; a source that states each would allow a later edit.
- Service page and contact page first (283b), blog gating (283c): the first unverified, the second deferred to `seo-calendar-refill`.
- Voice re-seed every six months (348d): rejected here; it would regenerate member settings.
- Interpretation risk: "one more season" (377c) is written as "not retired outside its season" and "not before the renamed words have been live for a full `retire_age_days`". A practitioner should confirm.
- Precedence conflict for B11 cases 11 and 13: a `## Corrections` line in a strategy file outranks guidance (CONTRACT 2.3). The variant carries and does not apply a member line only for the legally refused pillars (Step 15); a line asking for more pillars or the old thresholds would still apply. Lead decision.
- The bare word `nhất` is not seeded as banned, because `copy-check.mjs` would match it inside `thống nhất`; only `duy nhất`, `tốt nhất`, `số một` and `số 1` are seeded.
- `copy-check.mjs` does not catch Vietnamese counts without a source (D6); the fictional example carries its URL on the same line anyway.
- Every adopted rule still needs review by a real Vietnamese SEO practitioner before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/seo-employee-vn/routines/seo-intake-and-map/SKILL.md` | Localized per the outline above | This routine's Phần B and Phần A targets |
| `localization-reports/seo-employee-vn/seo-intake-and-map.md` | This ledger | Provenance |

Original kit `employees/seo-employee` untouched (byte comparison below). Check output pasted after the edit.

Checker, routine mode (exact output):

```
  WARN shared      employees/seo-employee-vn/routines/seo-intake-and-map/SKILL.md  section "what you own, and the two guardrails" differs from the original. Justify every changed line in the provenance report, and never a relaxed rule
PASS WITH WARNINGS (0 fail, 1 warn)
```

The one WARN: the `### LinkedIn` paragraph inside the guardrails section changed from "Read only, always ... reading one is allowed" to "Not read by you at all in this kit", with every refusal sentence kept (row P1). It is a tightening required by the Phần A platform terms verdict (LinkedIn User Agreement 8.2.2 and 8.2.13, D13, D16, D17), never a relaxation. A first run also warned `vietnamese` on two prose lines naming Tết; both now carry it in backticks and the warning is gone.

Copy check, call shape as the routine documents it (`--file <path> --dest <dest> --json`), run with the variant's `scripts/copy-check.mjs`:

- `scratchpad/vn/seo-employee-vn/intake-cards.txt` (the five Step 9 card titles and the Step 4d invitation sentence), `--dest plain`: `"verdict": "PASS"`, `"violation_count": 0`, exit 0.
- `scratchpad/vn/seo-employee-vn/intake-strategy.md` (the `## Working days and hours` seed lines, the five new threshold lines, the fictional pillar block, the Vietnamese voice seed items), `--dest strategy`: `"verdict": "PASS"`, `"violation_count": 0`, exit 0.

Dash scan (task command) on the routine, this ledger and both copy check inputs: `no dashes`.

Repo checks run from the worktree root for information: `node evals/run.mjs`: `evals: PASS (7/7)`, including `no-new-clock-times`; `node .github/scripts/no-dashes.mjs`: `no-dashes: PASS`. Kit mode checker, selftests and installer list are the lead's, once every routine and the version bump are in.

Original kit: `git status --short employees/seo-employee` prints nothing; the original routine is untouched. Variant routine size, after the integrator pass and the fixer pass, 125,112 bytes against 94,590 (132 percent, under the checker's 150 percent line), 1,097 lines against 985 by `wc -l`; every original `## ` heading present in order, Step 0 and `## Corrections` byte identical (checker `protected` rule clean).

### Fixer pass after independent review, 24/09/2026

The reviewer returned FIX with eleven FIX findings and four NOTE findings. Applied to the routine and this ledger only; Step 0, both guardrails, every parsed key and `## Corrections` untouched, nothing shortened.

| Finding | Outcome |
|---|---|
| Step 4d invitation named the console | Fixed. The card sentence now reads `Anh/chị mời người phụ trách vào [tên công cụ quản trị tìm kiếm] qua email, cấp quyền người dùng có quyền đầy đủ, không cấp quyền chủ sở hữu và không gửi mật khẩu.`, and a new sentence tells the run to replace the bracketed words with the console's human readable name from `CAPABILITIES.md` or `search_screen` before filing. Square brackets, not guillemets: the checker fails any `«...»` the original does not carry (ROLE.md section 5) |
| Step 9 listing card named the vendor | Fixed: "trang doanh nghiệp của anh/chị trên bản đồ tìm kiếm". Vendor names row above corrected |
| Template lines written as literal descriptions | Fixed by a different route, reviewer's exact text declined. Wrapping each value in new guillemets made the checker FAIL seven times (`placeholder`: a `«...»` the original does not carry). The defect the reviewer named, English prose landing where another routine parses a value, is fixed instead by: `Xưng hô: anh/chị`, `publish_control: person`, `price_source:` empty and `service_area: not established`, each the default `ROLE.md` section 5 and `CONTRACT.md` 10.2 give; `no new articles: «YYYY-MM-DD», «ISO START» to «ISO END»`, both placeholders the original carries; the `campaign:` line taken out of the template, because the run never writes one, with its shape and the rule that only the member writes it moved into the rules paragraph. The rules paragraph "The Vietnam seed" now names what each of the four safe values becomes and when |
| Step 7 reason wider than its sources | Fixed with the reviewer's sentence: S8 for supplements, S66 for cosmetics, devices banned until a person confirms. Word list unchanged. Row 507c amended |
| Step 11 warning sign misread | Fixed: "more than twenty published articles while the whole property earned fewer than fifty impressions across those twenty eight days", as form 571 says |
| Twenty questions called owner approved | Fixed: no form line marks the count 20 (1963 marks other sentences). The routine says "twenty unless the member sets another number"; rows 365, the answer visibility deferral and the numbers table now record the count UNVERIFIED with the deferral noted |
| `## SEO/AEO work` paragraphs contradicted each other | Fixed: the unaccented note is written "where the next paragraph's evidence allows" (impressions in the member's own data, form 2094 `[S20]`); the cosmetic clause now records the declared uses and treats any other use as a forbidden claim |
| Card title used "trụ" and read abruptly | Fixed: "trụ cột" per the glossary, "anh/chị cần người phụ trách pháp lý xác nhận trước." |
| Two card titles were bare commands | Fixed with the reviewer's wording, both addressing the member |
| Seed lines 351 and 352 | Fixed: "đến hết mùng 6 Tết" and "du lịch mà anh/chị ghi rõ ở đây". The English date rule paragraph still names the span `27 tháng Chạp` to `mùng 6`, the same days |
| Ledger stale in eight places | Fixed: row 377a, the Step 4, 5, 9, 11 and 16c outline rows, the vendor names row, the stale 16c bullet under Rejected and unresolved deleted, sizes updated, decision counts re-run (unchanged), fresh checker output below |
| NOTE Step 12a "one more season" | No routine change, as the reviewer said; still on the lead's open list (row 377c, Rejected and unresolved) |
| NOTE Step 6 unsupported reason | Applied: the clause now reads "and the owner capped a new property at two pillars in its first three months", which is what form 388 `[S8,S11+CG]` states |
| NOTE `tốt nhất` false positives | No routine change; outbound deferral row to `seo-draft-run` added |
| NOTE `## Corrections` precedence for B11 cases 11 and 13 | Lead decision; unchanged |

No shared file needed a change for these findings, so no new patch request.

Checker, routine mode, after the fixer pass (exact output):

```
  WARN shared      employees/seo-employee-vn/routines/seo-intake-and-map/SKILL.md  section "what you own, and the two guardrails" differs from the original. Justify every changed line in the provenance report, and never a relaxed rule
PASS WITH WARNINGS (0 fail, 1 warn)
```

The WARN is the same LinkedIn tightening explained above.

Copy check after the fixer pass, variant `scripts/copy-check.mjs`, `--file <path> --dest <dest> --json`: `scratchpad/vn/seo-employee-vn/intake-cards.txt` (the five Step 9 card titles as now written, and the Step 4d invitation with a fictional console name filled in), `--dest plain`: `"verdict": "PASS"`, `"violation_count": 0`, exit 0. `scratchpad/vn/seo-employee-vn/intake-strategy.md` (seed lines 351 and 352 as now written), `--dest strategy`: `"verdict": "PASS"`, `"violation_count": 0`.

`node evals/run.mjs` from the worktree root: `evals: PASS (7/7)`. Step 0 compared byte for byte with the original: identical. `git status --short employees/seo-employee`: empty. Dash scan (task command) on the routine, this ledger and both copy check inputs, after the fixer pass: `no dashes`.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `seo-draft-run` | 333b, 393d `[S18,S19]`; A3 103a | No place in the H1 until the ward is confirmed; new name in H1, old name once | Read `service_area` from the property block; where it is `not established`, write no place in title or H1; where the member's evidence shows the old name still searched, add it once in brackets |
| `seo-draft-run` | 403a, 403b `[S50]` | Outgoing links and descriptive accented anchors | Anchors are accented, descriptive of the target page, never a "click here" phrase; the link count stays the kit's until a source supports one |
| `seo-calendar-refill` | 283c `[S8,S27,S29]`, 388c `[S8,S11+CG]` | Blog gating; page 1 dominated by big news sites | Read pasted result sets only (D17); no entry on a pillar the topic map lacks or on a refused pillar; consider the news domination test when a pasted result set exists |
| `seo-calendar-refill` | 441, 487 `[S1]` | No general news entries | Refuse an entry whose topic is general news across fields on a sales site |
| `seo-rank-review` | 316c `[S33]` | 28 days minus the last 2; 24 hour view never decides | Never classify or file a retirement finding from a same day or 24 hour view; keep `data_lag_days` |
| `seo-rank-review` | 377 `[S19+CG]` | Retirement needs clicks per cluster | Keep "total clicks" on every line of the scoreboard `## Clusters` section so the intake can test zero clicks; add first indexed date per cluster where known |
| `seo-index-sweep` | 362b `[S29]`, 486a `[S42,S44]` | Sitemap limits; no request for injected URLs | Check each sitemap file against the platform limit (A5 161); never request indexing for a URL `operator_notes` names as injected content |
| `seo-standup` | 321b `[CG]` | Daily capacity | Capacity per A2 71a; not this routine's |
| `seo-draft-run` | none; reviewer NOTE on Step 7, 24/09/2026 | `tốt nhất` is seeded as a banned word, and `copy-check.mjs` also matches it inside the advice phrase "tốt nhất là nên" | A hit on `tốt nhất` in an advice phrase is reworded (for example to "nên"), never removed from the member's `## Banned words` list |
| lead, `CONTRACT.md` 8.4 and Step 16c of every variant routine | none (repo mechanics) | Version check URL | Decide whether a `-vn` variant checks its own package path or skips 16c.1 until the fork publishes |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `CONTRACT.md` | `### 2.3 Strategy`, "`## Thresholds` carries the shipped defaults" | replace | `refill_block: 30`<br>(the last line of the fenced thresholds block) | `refill_block: 30                retire_min_articles: 3      retire_age_days: 60`<br>`retire_impression_floor: 100  retire_data_days: 28        unaccented_split_share: 0.3` | 377 `[S19+CG]`, 393 `[S19,S20+CG]` |
| `CONTRACT.md` | `### 2.3 Strategy`, "`strategy/properties.md` carries `## Working days and hours`" | replace | `` `hero_spec`, `country`, `search_screen`, `analytics_screen`, `operator_notes`. Every field is present even when empty. `` | `` `hero_spec`, `country`, `service_area`, `search_screen`, `analytics_screen`, `operator_notes`. Every field is present even when empty. `service_area` holds the current province or city and ward or commune from the member's own address, checked against the official list, or `not established`. `` | A7 254 `[S18,S19]`, 333 `[S18,S19]` |
| `CAPABILITIES.md` | `### web.search`, "**Batch the calls.**" | insert after | (paragraph ending "both `seo-draft-run` and `seo-calendar-refill` are written to batch.") | **In the Vietnam variant, some surfaces are read only through a person.** Google Search and AI Mode result pages, Cốc Cốc Tìm kiếm, Facebook pages and groups, TikTok, YouTube, LinkedIn and the Google Business Profile listing forbid automated reading or querying in their terms (checked 24/09/2026). No route in this table may query or scrape them. A person searches or views by hand and saves what they saw, with its date, into a file inside `«SEO_ROOT»`, and routines read that file. Cốc Cốc's crawler is `coccocbot`; it reads the robots.txt `Sitemap:` line whatever the user agent group. Hosted platforms seen in Vietnam: WordPress, Haravan (title and description lengths in its own help pages), Sapo Web (title, description, alias editable), LadiPage (landing pages, never a blog). | P2, A5 141, 165, 166a, 167, A3 105a |
| `CONTRACT.md` | `### Guardrail 1: outbound actions, held unless you release them`, "**On LinkedIn the hold is total by default**" | replace | `Research and referral analysis both reach it. Reading a page there is allowed.` | `Research and referral analysis both reach it. In the Vietnam variant no routine reads a page there: its user agreement forbids software that reads or copies it, so a person pastes what the member wants used.` | P1 (Phần A platform terms, LinkedIn 8.2.2) |
| `INSTALL-PROMPT.md` | `## Standing rules, for every phase`, "4. **Read only on LinkedIn" | replace | `You may navigate to my own signed in pages and read them.` | `Do not read pages there either: its terms forbid software that reads or copies them. If I want something from there used, I paste it into a file.` | P1 |
| `INSTALL-PROMPT.md` | `## PHASE 3. Write the three strategy files`, "1. Write `strategy/properties.md`" | insert after | (item 1 as shipped) | `   Where I name no working hours, write Monday to Friday, 08:30 to 17:30, under ## Working days and hours and record it as an assumption.` | 321a `[CG]` |
