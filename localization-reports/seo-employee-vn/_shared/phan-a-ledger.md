# seo-employee-vn: Phần A ledger (shared by all eight routines)

Status on 2026-09-24: **Phần A classified, sources behind adopted law, number and platform clauses re-opened, platform terms checked under D13. No kit file edited by this pass.** Routine writers take their rows from the "Target" column and still classify their own Phần B section.

## Identity

- Form: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, Phần A at form lines 52 to 264 (A1 56 to 62, A2 65 to 94, A3 98 to 108, A4 111 to 134, A5 137 to 228, A6 232 to 246, A7 249 to 264).
- Extract: `extract_form_section.py --routine seo-standup --with-a`, Phần A part kept at `scratchpad/vn/seo-employee-vn/phanA-only.md` (the B-8 part discarded).
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row (S1 to S75).
- **A1 records that an AI filled the form.** Name field: "Sub-agent AI đóng vai SEO/AEO, bản nháp nghiên cứu 23/09/2026, cần chuyên gia người thật rà soát". No years of practice, no former clients, no account operated. The submission block (form line 2436) repeats it: 8/8 Phần B filled by an AI sub agent. **No clause here has been confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions, not a domain expert's; the form's own attachment table (line 2431) says the `[CG]` operating thresholds (60 days, 100 impressions, 8 posts per batch, 2 refreshes a week) still need a real person to confirm.
- Original kit: `employees/seo-employee` 1.9.0. Variant: `employees/seo-employee-vn`, scaffolded 24/09/2026, byte copy, VERSION 1.9.0 (bump per D14 once, at the first routine).
- Decision vocabulary: form-map.md. Markers never enter a kit file. Legal numbers and instrument numbers stay out of routine bodies (D11); clock times only in `SCHEDULE.md`.

## Sources re-opened on 24/09/2026

| S# | URL | What the adopted clause needs | Verdict |
|---|---|---|---|
| S11 | https://developers.google.com/search/docs/essentials/spam-policies?hl=vi | Automated queries to Google incl. rank checking; buying links; scaled AI content; doorway pages; hacked content; scraped content | Confirmed, all six passages verbatim. Page updated 03/09/2026 |
| S12 | https://developers.google.com/search/docs/appearance/ai-features?hl=vi | AI feature clicks counted in Web totals; no special AI file or markup; keep Business Profile and Merchant Center current | Confirmed. Updated 31/12/2025. Says "keep up to date", not cross channel NAP matching |
| S13 | https://vietnamnet.vn/che-do-tim-kiem-manh-nhat-cua-google-chinh-thuc-ho-tro-tieng-viet-2450351.html | AI Mode supports Vietnamese from 08/10/2025 | Confirmed, article 08/10/2025 |
| S15 | https://vnexpress.net/hai-ai-noi-dia-trong-top-10-su-dung-nhieu-nhat-viet-nam-4928442.html | Decision Lab, late July 2025: 78% used AI; ChatGPT 81%, Gemini 51%, Meta AI 36%, AI Hay 9%, Kiki 3%, Perplexity 2%, Claude 2% | Confirmed. Article dated 20/08/2025, the form says "công bố 19/08/2025": report date only |
| S18 | https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-quyet-so-202-2025-qh15-ve-sap-xep-don-vi-hanh-chinh-cap-tinh-119250612174148722.htm | 34 provinces and cities; effective 12/06/2025 | Confirmed |
| S19 | https://tuoitre.vn/chi-tiet-moi-nhat-ve-168-phuong-xa-cua-tp-hcm-sau-sap-nhap-20250616181134562.htm | TP.HCM 168 commune level units; operating from 01/07/2025; Bến Nghé into phường Sài Gòn | Confirmed (113 phường, 54 xã, 1 đặc khu) |
| S20 | https://mona.media/nen-seo-tu-khoa-co-dau-hay-khong-dau/ | Prefer keywords with diacritics; unaccented variants usually follow; optimise unaccented separately only when Search Console shows a real share, or in game and tech niches | Confirmed, article 02/10/2025. Vendor blog: practice, not a platform rule. Does not address slugs |
| S27 | https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=vi | Owner or full user to request; repeat requests do not speed crawling; sitemap for many URLs | Confirmed. Updated 31/12/2025. No published quota number |
| S29 | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=vi | 50 MB uncompressed or 50,000 URLs per file; only preferred (canonical) URLs; priority and changefreq ignored; most CMS generate sitemaps; `Sitemap:` line in robots.txt | Confirmed. Updated 15/07/2026 |
| S30 | https://support.google.com/webmasters/answer/9012289?hl=vi | "URL nằm trên Google" does not guarantee appearing in results; inspection has daily limits | Confirmed |
| S31 | https://support.google.com/webmasters/answer/7687615?hl=vi | Owner, full user, restricted user; only owners add users or owners; full user can submit sitemaps and request indexing | Confirmed |
| S32 | https://developers.google.com/search/apis/indexing-api/v3/quota-pricing?hl=vi | Indexing API only for JobPosting or BroadcastEvent pages; default 200 publish requests per day per project; free | Confirmed. Updated 17/07/2026 |
| S68 | https://support.google.com/webmasters/answer/16984139?hl=vi | Generative AI performance report: impressions in AI Overviews and AI Mode, available from 31/08/2026 | Confirmed for impressions and date. The page does not mention clicks at all: "no clicks" is an inference from silence |
| S70 | https://support.google.com/webmasters/answer/16908024?hl=vi | Generative AI control for Search, rolled out 31/08/2026; takes a few days, then usually 1 to 2 days, caching may delay | Confirmed |
| S8 | https://suckhoedoisong.vn/bo-y-te-luu-y-khong-mua-thuc-pham-bao-ve-suc-khoe-co-cac-dau-hieu-quang-cao-sau-day-169250419002019703.htm | TPBVSK is not a medicine; needs declaration receipt and ad content confirmation when advertised; check on vfa.gov.vn | Confirmed, article 19/04/2025. It does not carry the cosmetics doctor ban (S66 does) |
| S66 | https://ttbc-hcm.gov.vn/nhung-diem-moi-trong-quang-cao-my-pham-hoa-chat-1020812.html | From 15/02/2026 no cosmetics ad content confirmation, advertiser responsible; no images, uniforms, names, letters or articles of medical facilities, doctors, pharmacists; content must match declared uses | Confirmed |
| S75 | https://vtv.vn/tu-1-7-ubnd-cac-tinh-thanh-pho-se-cap-phep-quang-cao-thuc-pham-bao-ve-suc-khoe-100260505192118017.htm | From 01/07/2026 the provincial People's Committee chair issues TPBVSK ad confirmation (NQ 21/2026/NQ-CP, 29/04/2026) | Confirmed. S71 (baochinhphu.vn) not re-opened, S75 carries the same fact |
| S67 | https://tuoitre.vn/plo/tu-5-7-muon-quang-cao-nhat-duy-nhat-phai-co-tai-lieu-chung-minh-post910302.html | From 05/07/2026 "nhất, duy nhất, tốt nhất, số một" need a lawful market survey or a competent body's certificate, named in the ad with number and date | Confirmed (Thông tư 12/2026/TT-BVHTTDL) |
| S69 | https://nhandan.vn/luat-tri-tue-nhan-tao-thiet-lap-co-che-kiem-soat-lua-dao-cong-nghe-cao-post936369.html | AI Law effective 01/03/2026; Article 11: AI made audio, images, video marked and labelled | Confirmed. Silent on AI written text |
| S9 | https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm | Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15, effective 01/01/2026 | Confirmed (issued 26/06/2025). The gazette page does not show the definitions article; "phone and email are personal data" not read on this page |
| S73 | https://congbao.chinhphu.vn/van-ban/luat-so-131-2025-qh15-468691.htm | Luật 131/2025/QH15 amending the IP law, effective 01/04/2026 | Confirmed for identity and date. S46 (secondary summary) not re-opened; the copyright exception wording behind A6 237 is not re-verified |
| S48 | https://coccoc.com/search/features | Cốc Cốc Quản trị trang web: submit sitemap and single URLs; experimental AI answer box | Confirmed |
| S49 | https://coccoc.com/search/console/robots.txt | `coccocbot`; `Sitemap:` directive independent of User-agent; crawl delay capped at 10 s | Confirmed. The page does not describe noindex; S48 lists noindex guidance |
| S39 | https://hocvien.haravan.com/blogs/seo/6-buoc-toi-uu-seo-co-ban-giup-website-haravan-len-top-google | Title 40 to 70 characters, description 145 to 160; Website, Blog, Thêm bài viết | Confirmed. Vendor recommendation, not a platform limit |
| S40 | https://help.haravan.com/docs/website/blogs/thao-tac-tao-danh-muc-blog/ | Admin path Website, Blogs, Quản lý Blog | Confirmed |
| S41 | https://help.sapo.vn/huong-dan-thiet-ke-giao-dien-chuan-seo-cho-website | Sapo Web title, description, sitemap.xml | **Not confirmed**: the page rendered navigation only. S64 (https://www.sapo.vn/blog/onpage-seo-tren-sapo-web/) confirms title, description and alias are editable for blog posts; S58 mentions XML sitemaps without saying Sapo generates one. Sitemap claim stays UNVERIFIED |
| S52 | https://ladipage.vn/khoi-tao-landing-page | Landing page builder, drag and drop, pixel tracking, not a blog | Confirmed |

Not re-opened (not behind an adopted law, number or platform rule, or carried by a re-opened source): S16, S17, S21, S22, S23, S34, S38, S42, S44, S46, S47, S53, S55, S56, S59, S71. Where a row below leans on one of them, the row says so.

## Platform terms (D13)

The kit reads or may reach these platforms. Each was re-opened on 24/09/2026.

| Platform | Terms page | Clause | Verdict for the variant |
|---|---|---|---|
| Google Search, AI Overviews, AI Mode | https://policies.google.com/terms?hl=vi (effective 30/07/2026) and S11 | No automated access in breach of machine readable instructions; "Lưu lượng truy cập do máy tạo ... gửi các truy vấn tự động đến Google ... kiểm tra thứ hạng" | **Not allowed** to query or scrape Google result pages by script, actor or driven browser. A person views and pastes; routines analyse only what was pasted. Search Console in the member's own property is the member's own data: allowed |
| LinkedIn | https://www.linkedin.com/legal/user-agreement (effective 03/11/2025), 8.2.2 and 8.2.13 | No software, scripts, robots, crawlers or plugins to scrape or copy the Services, incl. profiles | **Not allowed** to read by agent. The original kit's "reading a page there is allowed" (CONTRACT 7, `read-linkedin`) conflicts with D13; the variant should hold LinkedIn reads to what a person pastes |
| Meta (Facebook Fanpage, groups) | https://www.facebook.com/legal/terms (effective 01/01/2025), 3.2 | "Bạn không được truy cập hoặc thu thập dữ liệu từ Sản phẩm của chúng tôi bằng các phương tiện tự động" without permission | **Not allowed** by agent; a person pastes public posts. Closed groups never |
| TikTok | https://www.tiktok.com/legal/page/row/terms-of-service/en (updated 01/12/2025), section 5 | No automated scripts to collect information from the Services | **Not allowed** by agent |
| YouTube | https://www.youtube.com/t/terms (effective 05/01/2022) | No automated access (robots, scrapers) except public search engines per robots.txt | **Not allowed** by agent |
| ChatGPT (OpenAI) | https://openai.com/policies/row-terms-of-use/ | "automatically or programmatically extract data or Output" is prohibited | Clause seen verbatim in a WebSearch result on 24/09/2026; the page itself returned HTTP 403, effective date not read. **Not allowed** for an agent to sample consumer ChatGPT answers; a person asks and pastes |
| Cốc Cốc Tìm kiếm | https://coccoc.com/vi/terms (updated 24/08/2026), sections 4 and 5 | No explicit robots or scraping clause; "Bạn sẽ không kinh doanh, khai thác, sản xuất lại, sao chép, sử dụng các Dịch vụ của Cốc Cốc vì mục đích thương mại trừ khi có sự đồng ý bằng văn bản" | **Not allowed** for commercial automated querying without written consent; a person searches and pastes. Quản trị trang web in the member's own account: allowed, submission held |
| Gemini app | not opened | Covered by the Google Terms row | Treated as Google: a person asks and pastes |
| Shopee, Lazada, TikTok Shop | none | The SEO kit reads no marketplace | Not applicable |

Consequence for writers: `seo-answer-visibility`, `seo-calendar-refill`, `seo-draft-run`, `seo-rank-review` and `CAPABILITIES.md` `web.search` must treat a pasted result set or pasted answer as the observation route in the variant. `seo-calendar-refill` appends no entry without a search route in the original; the writer must define "a result set a person pasted, with its date" as that route or the refill stops appending. Fetching a competitor's own website or a public article remains ordinary `web.fetch`.

## Clause decisions

Form line numbers are the phieu-da-dien.md lines. One table row is one clause; a split row carries a letter.

### A1. Author (lines 56 to 62)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 56 | Name: AI sub agent, research draft 23/09/2026, needs human review | none | UNVERIFIED | report header only | Author status, never presented as a human expert |
| 58 | Role: AI playing SEO/AEO for Vietnamese SMEs, not agency staff | none | UNVERIFIED | report | Same |
| 59 | Years of experience: not applicable, AI | none | UNVERIFIED | report | Same |
| 60 | Business types: none served; research scope retail, local services, small B2B on WordPress, Haravan, Sapo, LadiPage | none | UNVERIFIED | report | Scope statement, no rule |
| 61 | Platforms operated: none; read Vietnamese documentation of GSC, GA4, Cốc Cốc, Haravan, Sapo, LadiPage and three agency price pages | none | UNVERIFIED | report | Same |
| 62 | Contact: none | none | UNVERIFIED | report | Same |

### A2. The role in Vietnam (lines 65 to 94)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 69 | seo-intake-and-map once at onboarding, reviewed first working day of the month | none | KEEP | `SCHEDULE.md` row unchanged (`first-weekday`) | Same as the original |
| 70a | seo-calendar-refill weekly on Wednesday | none | KEEP | row unchanged (`wed`) | Same as the original |
| 70b | Refill only when fewer than 8 unwritten entries remain | none | UNVERIFIED | report; B-2 writer | Unmarked; `runway_threshold: 15` stays. Line 2431 lists "8 bài/đợt" as a `[CG]` threshold awaiting a real person |
| 71a | seo-draft-run 4 articles a week for one writer: 2 new plus at most 2 refreshes | `[CG]` | DEFER | `seo-draft-run`, `seo-standup` (capacity), `strategy/properties.md` `## Thresholds` (`refresh_share`) | Owner approved capacity; B-3 B2 and B5 decide how it maps onto a `mon-fri` row without moving it |
| 71b | 1,200 to 1,800 words, local articles 800 to 1,200 words, 3 to 5 hours | `[CG]` | DEFER | `seo-draft-run` | Length belongs to the draft routine; hours are human effort, not kit data |
| 72 | seo-publish-run one a day, two if both reviewed; "AI soạn, người duyệt" | none | UNVERIFIED | report; see A5 155 | Unmarked authority change against Control one |
| 73 | seo-index-sweep twice a week, Tuesday and Friday 10:00 | none | UNVERIFIED | report; B-5 writer | Unmarked cadence and clock time never move a row |
| 74 | seo-rank-review weekly, Friday 16:00 | none | KEEP | row unchanged (`fri`, 16:00) | Same as the original |
| 75 | seo-answer-visibility monthly, second Thursday | none | UNVERIFIED | report; B-7 writer | Row is weekly `thu`; the `days` vocabulary has no "second Thursday" token; B-7 B2 decides |
| 76 | seo-standup Monday to Friday 8:15, not on holidays | none | UNVERIFIED | report | Row fires 07:15; holidays handled by A3 107 |
| 82 | Check place names against the new administrative units (34 provinces and cities, NQ 202/2025/QH15 effective 12/06/2025; new communes from 01/07/2025) on every local topic, quarterly review | `[S18]` | ADOPT | `seo-intake-and-map` (topic map, local clusters), `seo-calendar-refill` (local entries), `seo-draft-run` (title, H1) | Re-opened S18. Rule is qualitative: use the current official unit list; the numbers stay out of routine bodies |
| 83 | Weekly check of Search Console and the live site for strange URLs and gambling redirects | `[S11,S44]` | ADOPT | `seo-index-sweep` | S11 hacked content confirmed; S44 is a news vendor page, not re-opened |
| 84 | Industry papers before a topic enters the calendar: TPBVSK needs ad content confirmation, from 01/07/2026 issued by the provincial People's Committee chair; cosmetics from 15/02/2026 need none but only declared uses; medical devices per the owner's legal adviser. Never handled by AI | `[S8,S66,S75]` | ADOPT | `seo-calendar-refill` (gate before an entry), `seo-draft-run`, `seo-intake-and-map` (profile fields, A7 260) | Re-opened S8, S66, S75. Instrument numbers and dates stay out of routine bodies (D11); the routine checks the papers the owner filed |
| 85a | Keep name, address, phone, hours consistent between website and Google Business Profile | `[S12]` | ADOPT | `seo-intake-and-map` (a `verify` card, `member-action`) | S12 says keep Business Profile information up to date. Editing the profile stays held (guardrail 1) |
| 85b | The same across Fanpage and Zalo OA | `[S12]` | UNVERIFIED | report | S12 does not mention Fanpage or Zalo OA |
| 86 | Sapo of 40 to 70 words and 3 to 5 FAQ questions in the words Vietnamese buyers use, on every article | `[CG]` | ADOPT | `seo-draft-run`, `standards/PUBLISH-STANDARD.md` | Owner approved presentation rule. The calendar field "FAQ questions" holds four in the original; the draft writer reconciles |
| 87 | Submit the sitemap to Cốc Cốc (Quản trị trang web or robots.txt `Sitemap:`) after Google; always a person | `[S48]` | ADOPT | `CAPABILITIES.md` (new held route), `seo-index-sweep` (draft and remind) | Re-opened S48, S49. Held outbound action; the routine stages it |
| 88a | Weekly report never carries raw exports with customers' personal data | `[S9]` | ADOPT | `seo-rank-review`, `seo-standup` | Re-opened S9 (law and date). Qualitative rule, no fine |
| 88b | Weekly report 15 to 25 lines on Zalo to the owner, Friday before 17:30 | `[S9]` | DEFER | `seo-rank-review` | S9 does not support the format; A3 106 `[CG]` does. Zalo send stays human (D10) |
| 89 | Turn off every auto share to Facebook or Zalo on the CMS publish screen | `[CG]` | KEEP | `seo-publish-run`, CONTRACT 7.1 | Control one already declines every distribution offer through its own decline control. WORDING only: name Facebook and Zalo in the example |
| 90a | Slug without diacritics | `[S20,S29]` | KEEP | `seo-draft-run`, `seo-calendar-refill` | Existing slug rule (lowercase, hyphenated) forces ASCII. S20 does not address slugs |
| 90b | No date in the slug | `[S20,S29]` | UNVERIFIED | report | Neither source supports it |
| 90c | One canonical URL; only canonical URLs in the sitemap | `[S29]` | ADOPT | `seo-publish-run`, `seo-index-sweep` | Re-opened S29 |
| 94a | AI first: morning brief; weekly rank table from the Search Console export, no invented positions | `[S27,S30]` | KEEP | `seo-standup`, `seo-rank-review` | Same as the original and its rule about numbers |
| 94b | AI only lists URLs; a person with full rights presses "Yêu cầu lập chỉ mục" | `[S27,S30]` | DEFER | `seo-index-sweep` | S27 and S30 say only who may request, not that an agent may not. B-5 B6 (unmarked) and Câu 10 `[CG]` decide Control two |
| 94c | Not yet delegated: auto publish, auto reply, buying SEO services | `[S27,S30]` | DEFER | `seo-publish-run`; spending already held | Sources do not cover it; A5 155 `[CG]` does for WordPress |

### A3. Vietnamese specifics (lines 98 to 108)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 102 | One cluster, one URL; title, H1, sapo with diacritics; no second article for the unaccented variant unless Search Console shows a real share | `[S20]` | ADOPT | `seo-intake-and-map`, `seo-calendar-refill` (cannibalisation check), `seo-draft-run` | Re-opened S20 (vendor practice, dated 02/10/2025) |
| 103a | Title and H1 use the new phường or xã name after checking the official list; old name once in brackets when Search Console still shows it; never invent a ward | `[S18,S19+CG]` | ADOPT | `seo-intake-and-map`, `seo-calendar-refill`, `seo-draft-run` | Re-opened S18, S19 |
| 103b | "spa quan 1" illustration | `[S18,S19+CG]` | EXAMPLE | fictional examples | The form calls it a synthetic illustration |
| 104a | Each pillar has at least one price article, one "where" or area article, one criteria comparison before any pure definition article | `[CG]` | ADOPT | `seo-intake-and-map` (answer map), `seo-calendar-refill` | Owner approved |
| 104b | Sample queries "sua rua mat gia bao nhieu", "phong kham nha o dau" | `[CG]` | EXAMPLE | answer map example | How buyers type, not data |
| 105a | Google first, then Cốc Cốc; declare `coccocbot` rules and the `Sitemap:` line; no market share percentage in decisions; no separate Bing rank tool for a domestic site | `[S16,S48,S49,S55]` | ADOPT | `seo-index-sweep`, `seo-intake-and-map`, `CAPABILITIES.md` | Re-opened S48, S49 |
| 105b | Cốc Cốc user counts (30.5 million ecosystem, over 30 million browser) | `[S16,S55]` | REJECT | report only | The form itself forbids using them in decisions; no routine needs the figure |
| 106a | End of article CTA: Zalo button or call, then form; never a newsletter closer | `[CG]` | ADOPT | `seo-draft-run`, `seo-calendar-refill` (Call to action field), `strategy/voice.md` banned closers seeded by `seo-intake-and-map` | Owner approved |
| 106b | Weekly report 15 to 25 lines on Zalo before 17:30 Friday | `[CG]` | DEFER | `seo-rank-review` (report shape); schedule KEEP | Row fires Friday 16:00 with a 40 minute budget, ready before 17:30. Send stays human (D10) |
| 106c | A 30 line English brief emailed early is not read | `[CG]` | WORDING | `seo-standup` | Brief lines in Vietnamese under English parsed headings (STYLE-VI) |
| 107 | Lock the Tết calendar before 15 tháng Chạp; no new scheduled posts 27 tháng Chạp to mùng 6 unless the owner writes it; no posts on 30/4, 1/5, 2/9 except food and travel campaigns | `[CG]` | ADOPT | `strategy/properties.md` `## Working days and hours` (member data, seeded by `seo-intake-and-map`), read by `seo-publish-run`, `seo-calendar-refill`, `seo-standup` | Owner approved. Dates live in the member's file, not in a routine body |
| 108a | No bought links, no mass unedited AI posts, weekly strange URL check; gambling redirect stops publishing | `[S11,S42,S44]` | ADOPT | `seo-draft-run`, `seo-index-sweep`, `seo-publish-run` | Re-opened S11 |
| 108b | Hand to a person within 1 hour | `[S11,S42,S44]` | UNVERIFIED | report | No source supports the hour; the push list in CONTRACT 9.1 is closed at four cases, so this is a brief line and a blocker |

### A4. Vocabulary (lines 111 to 134)

All 20 term rows go to `_shared/glossary.md` as WORDING. Clauses that carry a rule or a figure are split out.

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 115a | SEO tổng thể | `[S23,S34]` | WORDING | glossary | Term |
| 115b | Agency packages from 300 million đồng per project | `[S23,S34]` | REJECT | report | Vendor price; never enters a kit file |
| 116 | Từ khoá, with the phường Sài Gòn example | `[S19]` | WORDING | glossary; EXAMPLE for the sentence | Term |
| 117 | Cụm chủ đề / cluster | none | WORDING | glossary | Term |
| 118 | Trụ cột / pillar | none | WORDING | glossary | Term. "2 pillars in 90 days" is an unmarked example |
| 119 | Sapo | none | WORDING | glossary | Term; not meta description, not the Sapo software |
| 120 | Slug | none | WORDING | glossary | Term |
| 121a | Lập chỉ mục / index | `[S30]` | WORDING | glossary | Term |
| 121b | "URL nằm trên Google" does not guarantee appearing | `[S30]` | ADOPT | `seo-index-sweep`, `seo-rank-review` | Re-opened S30. Never report an inspected URL as visible |
| 122 | Search Console / GSC | none | WORDING | glossary | Term |
| 123 | Lượt hiển thị / impression | none | WORDING | glossary | Term |
| 124 | CTR | none | WORDING | glossary | Term |
| 125 | Làm mới / refresh | none | WORDING | glossary | Term |
| 126 | Backlink; buying links is a Google spam technique | `[S11]` | WORDING | glossary; rule in A6 236 | Term |
| 127 | PBN / site vệ tinh | none | WORDING | glossary | Term |
| 128 | AEO | none | WORDING | glossary | Term |
| 129a | AI Overviews / Chế độ AI | `[S12,S13,S68]` | WORDING | glossary | Term |
| 129b | AI Mode Vietnamese from 08/10/2025; AI clicks inside Web totals; Generative AI performance report from 31/08/2026 counts impressions only | `[S12,S13,S68]` | ADOPT | `seo-answer-visibility`, `seo-rank-review`, `AEO-PLAYBOOK.md` | Re-opened S12, S13, S68. "No clicks" is inferred from the page's silence: write "the report shows impressions", not "Google says no clicks" |
| 130 | EEAT / YMYL | `[S34]` | WORDING | glossary | Term; the reviewer rule is A2 84 |
| 131 | Canonical; parameter URLs never in the sitemap | `[S29]` | WORDING | glossary; rule in A2 90c | Term |
| 132 | Noindex versus Disallow; Cốc Cốc reads robots.txt | `[S49]` | WORDING | glossary | Term |
| 133 | Hotkey | `[S34]` | WORDING | glossary | Term; "no hotkey under 30 posts" is an unmarked example |
| 134 | Entity / thực thể | none | WORDING | glossary | Term |

### A5. Tools and channels (lines 141 to 228)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 141 | Google Search: no automated querying or access, including rank checks; AI never opens google.com or AI Mode; a person views and pastes URL or screenshot | `[S11]` | ADOPT | `CAPABILITIES.md` `web.search`, `standards/PUBLISH-STANDARD.md` 1.2, `seo-calendar-refill`, `seo-draft-run`, `seo-rank-review`, `seo-answer-visibility` | Re-opened S11 and Google Terms. See the D13 consequence above |
| 142 | Search Console roles: owner, full user, restricted user | `[S31]` | ADOPT | `CAPABILITIES.md`, `seo-intake-and-map`, `INSTALL-PROMPT.md` | Re-opened S31; never add an owner (already in CONTRACT 7.1) |
| 143 | GA4: sharing view rights to a wrong email is a data risk | `[S9]` | KEEP | CONTRACT 7.1 and 7.2 | The kit never changes users or permissions |
| 144 | Bing Webmaster Tools not a priority | none | UNVERIFIED | report | Unmarked |
| 145 | AI Overviews and AI Mode observed by hand in Vietnamese; no API for answers; no invented "AEO score" | `[S12,S13,S68]` | ADOPT | `seo-answer-visibility`, `AEO-PLAYBOOK.md` | Re-opened sources and Google Terms |
| 146 | ChatGPT: most used AI in Vietnam (81%); no customer data in prompts | `[S15]` | ADOPT | `seo-answer-visibility` (surface list) | Re-opened S15. The percentage stays in this report. The "no customer data" clause is covered by A6 243 |
| 147 | Gemini 51% | `[S15]` | ADOPT | `seo-answer-visibility` (surface list) | Same |
| 148 | Bing and Copilot not sampled unless the profile names foreign buyers | `[CG]` | ADOPT | `seo-answer-visibility`, `AEO-PLAYBOOK.md` | Owner approved |
| 149 | OpenSEO not used | none | UNVERIFIED | report | Unmarked; route list unchanged |
| 150 | DataForSEO not an SME default; paid, always a person | `[S21]` | KEEP | `CAPABILITIES.md` | Spending already held by guardrail 1 |
| 151 | Ahrefs only if already bought; never upgrade | none | KEEP | `CAPABILITIES.md` | Spending already held |
| 152 | Semrush not default | `[S21,S22]` | KEEP | `CAPABILITIES.md` | Optional route unchanged |
| 153 | Apify Google results actor forbidden | `[S11]` | ADOPT | `CAPABILITIES.md` | Re-opened S11: machine generated traffic |
| 154 | IndexNow not the route; Google by sitemap and URL Inspection; Cốc Cốc by Quản trị trang web | `[S27,S48]` | ADOPT | `CAPABILITIES.md`, `seo-index-sweep` | Re-opened S27, S48 |
| 155 | WordPress: publish in wp-admin; REST API only with an application password named in the profile; the AI never presses Publish | `[CG]` | ADOPT | CONTRACT 7.1 Control one, `seo-publish-run`, `CAPABILITIES.md` | Owner approved tightening. **Changes shared Control one text**; B-4 B6 (unmarked) proposes holding every CMS publish. Lead decides the kit wide shape |
| 156 | Webflow rare | none | UNVERIFIED | report | Unmarked |
| 157 | Wix; many CMS generate sitemaps | `[S29]` | KEEP | none | Nothing changes |
| 158 | Shopify rare in domestic shops; never edit a price | none | UNVERIFIED | report | Unmarked; the kit never edits prices anyway |
| 159 | Ghost not used | none | UNVERIFIED | report | Unmarked |
| 160 | Git route only when the profile names repo and branch; production push always a person | none | UNVERIFIED | report | Unmarked; cannot change Control one |
| 161 | Sitemap 50 MB or 50,000 URLs per file; Cốc Cốc reads the `Sitemap:` line | `[S29,S49]` | ADOPT | `seo-index-sweep` | Re-opened S29, S49. Platform limit, not a legal number |
| 162 | LinkedIn not a research channel; use Facebook, Zalo, TikTok, competitor sites instead | none | UNVERIFIED | report | Unmarked. D13 check above: Facebook and TikTok forbid automated reading, so the substitution cannot be automated either |
| 163a | TPBVSK claims checked on vfa.gov.vn | `[S8]` | ADOPT | `seo-draft-run`, `seo-calendar-refill` | Re-opened S8 |
| 163b | Editing Google Business Profile or Zalo OA always a person | `[S8]` | KEEP | CONTRACT 7.2 | Account settings the kit did not create are never touched |
| 164 | Cốc Cốc Quản trị trang web: sitemap and URL submission after review | `[S48,S49]` | ADOPT | `CAPABILITIES.md` (new held route), `seo-index-sweep` | Re-opened S48, S49 |
| 165 | Haravan: Website, Blog; title 40 to 70 characters, description 145 to 160; sales API is not a blog API | `[S38,S39]` | ADOPT | `seo-intake-and-map` (property `editorial_conventions`), `seo-draft-run`, `seo-publish-run`, `CAPABILITIES.md` | Re-opened S39, S40. Caps are vendor recommendations stored in the member's property block, not in a routine body |
| 166a | Sapo Web: title, description, alias edited in admin | `[S41,S64]` | ADOPT | `CAPABILITIES.md`, `seo-publish-run` | S64 re-opened and confirms; S41 did not render |
| 166b | Sapo Web has sitemap.xml | `[S41,S64]` | UNVERIFIED | report | Not confirmed on 24/09/2026 |
| 167 | LadiPage is a landing surface, not a blog; form to Google Sheet or CRM | `[S52,S53]` | ADOPT | `seo-intake-and-map` (never a blog property) | Re-opened S52 |
| 168a | Zalo is the report channel and the CTA; sending to owner or customer needs a person | none | KEEP | D10 | Routines draft, a person sends |
| 168b | No Zalo after 21:00 except a security incident | none | UNVERIFIED | report | Unmarked clock time |
| 173 | A5.1: read GSC and GA4; SEO person gets full user, never owner; conversions as GA4 events (form submit, tel: click, Zalo link click, add to cart); without GA4 write "chưa đo được đơn", never estimate orders from clicks | `[S31+CG]` | ADOPT | `seo-rank-review`, `seo-intake-and-map`, `INSTALL-PROMPT.md` | Re-opened S31; owner approved the event list |
| 178a | A5.2: trust order GSC, then Keyword Planner in the owner's account, then a person's manual suggestions, then Ahrefs or Semrush if owned; no bulk rank tool calling Google | `[S11,S21,S22]` | ADOPT | `seo-calendar-refill`, `seo-rank-review`, `CAPABILITIES.md` | Re-opened S11; S21, S22 are vendor lists, not re-opened |
| 178b | At most 10 manual suggestion queries per session | `[S11,S21,S22]` | UNVERIFIED | report | No source for the number |
| 178c | Spineditor about 30,000 đồng a month | `[S21]` | REJECT | report | Vendor price; the tool queries Google automatically |
| 183 | A5.3: sitemap in GSC, then URL Inspection per important article; owner or full user; no published daily cap; repeats do not speed crawling; Indexing API only JobPosting or BroadcastEvent; Cốc Cốc by its console. IMTA's 10 to 15 per day is an observation, not a limit | `[S27,S30,S32,S47,S48]` | ADOPT | `seo-index-sweep`, `CAPABILITIES.md` | Re-opened S27, S30, S32, S48. `request_allowance` stays the member's threshold; neither 200 nor 10 to 15 enters a routine |
| 188a | A5.4: WordPress, Haravan, Sapo most documented; LadiPage for landing; API publishing only when the profile names endpoint, account and reviewer; never guess an API | `[S29,S38,S40,S41,S52,S56,S59+CG]` | ADOPT | `seo-intake-and-map`, `seo-publish-run`, `CAPABILITIES.md` | Re-opened S29, S40, S52; owner approved |
| 188b | Third party Haravan setup 3,000,000 to 15,000,000 đồng | `[S56]` | REJECT | report | Vendor price |
| 193a | A5.5: read public pages only: competitor sites, news; no closed Facebook groups, no posing as a customer on Zalo, no bots on Google; never store the owner's password | `[S11]` | ADOPT | `seo-draft-run`, `seo-calendar-refill`, `seo-intake-and-map`, `standards/PUBLISH-STANDARD.md` 1.3 | Re-opened S11 |
| 193b | Public Fanpage, TikTok and YouTube videos read by the agent | `[S11]` | REJECT | report | D13: Meta 3.2, TikTok 5, YouTube terms forbid automated collection. A person pastes |
| 198a | A5.6: surfaces ChatGPT, Gemini or AI Mode, Cốc Cốc; no official API to count citations; GSC generative AI report counts impressions only | `[S13,S15,S17,S48,S68]` | ADOPT | `seo-answer-visibility`, `AEO-PLAYBOOK.md` | Re-opened S13, S15, S48, S68. Observation by a person under D13 |
| 198b | Monthly, exactly 20 questions from the answer map, asked by hand | `[S13,S15,S17,S48,S68]` | DEFER | `seo-answer-visibility` | Cadence and set size belong to B-7 B2; sources do not support the number |
| 203a | Hero from Canva or the owner's photos; never Google Images | `[S69+CG]` | ADOPT | `seo-draft-run`, `standards/PUBLISH-STANDARD.md` 5 | Owner approved |
| 203b | Hero 1200 by 630 pixels, JPG or WebP, under 300 KB | `[S69+CG]` | ADOPT | `strategy/properties.md` `hero_spec` default seeded by `seo-intake-and-map` | Owner approved; member data, not a routine constant |
| 203c | Alt in Vietnamese with diacritics, lower case, 8 to 14 words, describes the image, no keyword stuffing | `[S69+CG]` | ADOPT | `standards/PUBLISH-STANDARD.md` 6, CONTRACT 2.6, `seo-draft-run`, `seo-publish-run` | Owner approved. **Reverses the shared alt rule** ("keyword rich string, not a description"), read by five routines. Lead decides the kit wide text |
| 203d | AI made images only if the owner agrees in writing, no real person or real event, label "Ảnh minh hoạ tạo bằng AI" under the image | `[S69+CG]` | ADOPT | `seo-draft-run`, `standards/PUBLISH-STANDARD.md` 5, `seo-publish-run` (live check of the label) | Re-opened S69, Article 11. The original generates a hero by default, so this matters in every draft |
| 203e | Keep IPTC metadata for Merchant Center | `[S69+CG]` | UNVERIFIED | report | No Google source opened |
| 203f | Whether AI written text needs a label: legal adviser to confirm | `[S69+CG]` | UNVERIFIED | report | S69 is silent on text |
| 208a | A5.8: coordination with owner, writers, technical staff, accountant or legal | none | UNVERIFIED | report | Unmarked |
| 208b | Never send passwords, codes or cookies through Zalo | none | KEEP | CONTRACT guardrail 2 | Already covered |
| 213a | A5.9: report on Zalo Friday before 17:30, 15 to 25 lines; posts this week, clicks and impressions 28 days against the previous 28, three URLs up, three down, owner actions; no raw export | `[S23,S34]` | DEFER | `seo-rank-review` | Sources support only the agency KPI sentence; the format rests on A3 106 `[CG]`; the metric list is a B-6 proposal |
| 213b | Never promise top positions | `[S23,S34]` | KEEP | rule about numbers | Already covered |
| 218a | A5.10: no "nhất, duy nhất, tốt nhất, số một" unless the owner supplies a lawful survey or a competent body's certificate, and the article names it with number and date; press, blogs, AI answers are not proof | `[S67]` | ADOPT | `seo-draft-run`, `strategy/voice.md` banned words seeded by `seo-intake-and-map`, `standards/PUBLISH-STANDARD.md` | Re-opened S67. Instrument number stays out (D11) |
| 218b | Diacritics in title, sapo, headings, alt; ASCII slug; money in đồng with dot thousands; dd/mm/yyyy; one H1; one form of address per article | `[S67]` | WORDING | `standards/PUBLISH-STANDARD.md`, `seo-draft-run` | Presentation, consistent with STYLE-VI |
| 218c | Banned opener "Trong thời đại số hóa ngày nay"; never "khỏi bệnh", "thay thuốc", "cam kết khỏi" | `[S67]` | WORDING | `strategy/voice.md` seed suggestion | S67 does not cover them; the health words are adopted through A6 239 |
| 223 | A5.11: no call centre; connect an app only when the profile names it, its rights and reviewer | `[S40,S41,S53]` | KEEP | CONTRACT 7.2 | Already the kit's rule |
| 228a | A5.12: Zalo to the named person 8:00 to 21:00, repeat after 60 minutes, at most 3 a day; after 21:00 only for gambling redirect, lost GSC access, a live banned health sentence | `[S9,S42]` | UNVERIFIED | report | Sources support neither the hours nor the triggers; the push list is closed (CONTRACT 9.1) and never goes to Zalo (D10) |
| 228b | No passwords, cookies or customer lists in messages | `[S9,S42]` | KEEP | guardrail 2, A6 243 | Already covered |

### A6. Absolute prohibitions (lines 236 to 246)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 236 | Never buy, sell or swap backlinks, never run a PBN | `[S11]` | ADOPT | CONTRACT 7 or invariant, `seo-draft-run`, `seo-calendar-refill` | Re-opened S11. The original bans paid link schemes only inside `AEO-PLAYBOOK.md` |
| 237 | Never publish mass unedited AI articles or spin another site's copy | `[S11,S46+CG]` | ADOPT | `seo-draft-run`, `seo-calendar-refill`, `seo-publish-run` | Re-opened S11 (scaled content, scraped content); S73 confirms the IP law amendment and date; the copyright exception wording (S46) not re-verified, so no legal clause is quoted |
| 238 | Never keep or add gambling links or strange redirects; stop other work and hand to a person | `[S11,S42,S44]` | ADOPT | `seo-index-sweep`, `seo-publish-run` | Re-opened S11 (hacked content) |
| 239 | Never write TPBVSK, cosmetics or medical devices as medicine ("khỏi bệnh", "thay thuốc"); never use a doctor's or pharmacist's image, name or article for cosmetics, even if the owner says there is a licence | `[S8,S66]` | ADOPT | `seo-draft-run`, `seo-calendar-refill`, `strategy/voice.md` banned words seeded by `seo-intake-and-map` | Re-opened S8, S66 |
| 240 | Never invent figures, prices, addresses, or past projects | none | KEEP | the rule about numbers | Already covered |
| 241a | Never edit prices, add a Search Console owner, or pay for SEO services | none | KEEP | CONTRACT 7.1, 7.2, guardrail 1 | Already covered |
| 241b | Never press publish | none | DEFER | `seo-publish-run` | Unmarked here; A5 155 `[CG]` carries it for WordPress |
| 242 | Never use the Indexing API for blog posts | `[S32]` | ADOPT | `seo-index-sweep`, `CAPABILITIES.md` | Re-opened S32 |
| 243 | Never put a customer's phone, email or a password in a Zalo report | `[S9]` | ADOPT | `seo-rank-review`, `seo-standup` | Re-opened S9. Qualitative, no fine |
| 244 | Never create near duplicate local pages that only swap the province name | `[S11]` | ADOPT | `seo-intake-and-map`, `seo-calendar-refill` | Re-opened S11 (doorway abuse) |
| 245 | Never delete a sitemap or drop robots.txt `Disallow: /` without understanding it | `[S29,S49]` | KEEP | CONTRACT 7.1 | "Never remove a sitemap" already there; robots.txt is never edited by the kit |
| 246 | Never change a Search Console setting, including the generative AI control | `[S70]` | ADOPT | CONTRACT 7.1 (three things list), `seo-index-sweep`, `seo-rank-review`, `seo-answer-visibility` | Re-opened S70. Already implied by "never a setting"; name the new control explicitly |

### A7. Onboarding facts (lines 253 to 264)

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 253 | Legal name, brand, tax code, industries allowed to advertise | none | UNVERIFIED | report; intake proposal | Unmarked |
| 254 | Service area by current administrative units; AI never names a ward itself | `[S18,S19]` | ADOPT | `INSTALL-PROMPT.md`, `seo-intake-and-map` (`strategy/properties.md` field) | Re-opened S18, S19 |
| 255 | Reviewer: role, Zalo, hours; without one nothing is published | none | UNVERIFIED | report | Unmarked |
| 256 | Search Console full user and GA4 viewer by email invitation; never a password, never owner | `[S31]` | ADOPT | `INSTALL-PROMPT.md`, `seo-intake-and-map`, `CAPABILITIES.md` | Re-opened S31 |
| 257 | Web platform and sitemap URL | none | KEEP | `strategy/properties.md` (`publish_route`, `sitemaps`) | Already there |
| 258 | 4 to 5 article URLs for voice, or 10 things the owner says | none | KEEP | `strategy/voice.md` `## Samples` | Already there |
| 259 | Products and services, price ceiling, phrases never said; article prices must match the owner's price list and sales page, mismatch stops | `[CG]` | ADOPT | `seo-intake-and-map`, `seo-draft-run`, `seo-publish-run` | Owner approved |
| 260 | Industry papers: TPBVSK declaration and ad confirmation numbers; cosmetics declaration number and declared uses (no confirmation since 15/02/2026); medical items by the owner's legal adviser. No TPBVSK papers, no benefit topic | `[S8,S66]` | ADOPT | `INSTALL-PROMPT.md`, `seo-intake-and-map`, `seo-calendar-refill`, `seo-draft-run` | Re-opened S8, S66 |
| 261 | Preferred CTA channel | none | UNVERIFIED | report | Unmarked; A3 106a `[CG]` already sets the CTA order |
| 262 | Monthly writing budget and maximum articles | none | UNVERIFIED | report | Unmarked |
| 263 | Three competitors that may be named, three that may not | none | UNVERIFIED | report | Unmarked |
| 264 | The owner's own bans (no social, no local, no AI images) | none | KEEP | `## Corrections` in strategy files | Already the kit's mechanism |

Headers and question prompts (lines 65, 67, 78, 80, 92, 98, 100, 111, 113, 137, 139, 170, 171, 176, 181, 186, 191, 196, 201, 206, 211, 216, 221, 226, 232, 234, 249, 251) carry no clause and are not counted.

## Decision counts

| Decision | Clause rows |
|---|---|
| ADOPT | 55 |
| KEEP | 23 |
| WORDING | 23 |
| DEFER | 9 |
| UNVERIFIED | 33 |
| REJECT | 5 |
| EXAMPLE | 2 |
| MOVE | 0 |
| Total | 150 |

Counted from the tables above with awk on the decision column, 24/09/2026. By marker: A1 6 unmarked; every `[S#]` or `[CG]` row that became UNVERIFIED names the missing support in its reason.

## Adopted rules by routine or file

- `seo-intake-and-map`: 82, 84, 85a, 102, 103a, 104a, 105a, 106a (voice seed), 107 (seed dates), 142, 165, 167, 173, 188a, 193a, 203b (hero seed), 218a (voice seed), 239 (voice seed), 244, 254, 256, 259, 260.
- `seo-calendar-refill`: 82, 84, 102, 103a, 104a, 106a, 107, 108a (via 236, 237), 141, 163a, 178a, 193a, 236, 237, 239, 244, 260.
- `seo-draft-run`: 82, 84, 86, 102, 103a, 106a, 108a, 141, 163a, 165, 193a, 203a, 203c, 203d, 218a, 236, 237, 239, 259, 260.
- `seo-publish-run`: 90c, 107, 108a, 155, 165, 166a, 188a, 203c, 203d, 237, 238, 259.
- `seo-index-sweep`: 83, 87, 90c, 105a, 108a, 121b, 154, 161, 164, 183, 238, 242, 246.
- `seo-rank-review`: 88a, 121b, 129b, 141, 173, 178a, 243, 246.
- `seo-answer-visibility`: 129b, 141, 145, 146, 147, 148, 198a, 246.
- `seo-standup`: 88a, 107, 243.
- Kit files: `CAPABILITIES.md` (87, 105a, 141, 142, 153, 154, 155, 164, 165, 166a, 178a, 183, 188a, 242, 256), `CONTRACT.md` 7 and 2.6 (155, 203c, 236, 246), `standards/PUBLISH-STANDARD.md` (86, 141, 193a, 203a, 203c, 203d, 218a), `AEO-PLAYBOOK.md` (129b, 145, 148, 198a), `INSTALL-PROMPT.md` (142, 173, 254, 256, 260).

## Deferred to a routine's own Phần B

71a, 71b (`seo-draft-run`), 88b, 213a (`seo-rank-review`), 94b (`seo-index-sweep`), 94c, 241b (`seo-publish-run`), 198b (`seo-answer-visibility`), 106b (`seo-rank-review`).

## Open for the lead

1. Control one (publish) and Control two (request indexing) held by a person: A5 155 `[CG]` holds WordPress publishing; B-4 B6 and B-5 B6 (unmarked) hold every CMS publish and every index request. CONTRACT 7.1 and 7.2 say the Employee owns publishing; a tightening is allowed but is shared text.
2. Alt text: A5.7 203c `[CG]` reverses `standards/PUBLISH-STANDARD.md` section 6, which five routines read.
3. D13 makes every Google, ChatGPT, Gemini, Cốc Cốc, LinkedIn, Facebook, TikTok and YouTube observation a pasted observation. `seo-answer-visibility` and `seo-calendar-refill` lose their automatic route in the variant; the LinkedIn "reading is allowed" sentence in CONTRACT 7 and three routines conflicts with LinkedIn 8.2.2.
4. `scripts/runlog.mjs` CADENCE lists seven routines and omits `seo-answer-visibility` (original kit, not ours to edit); `.github/scripts/aeo-check.mjs` checks only `employees/seo-employee`.
5. Every adopted rule still needs a real Vietnamese SEO practitioner's review before sale (A1).
