# soc-intake-and-voice: provenance ledger

Status on 24/09/2026: **ledger complete, sources re-opened for Gate 2, routine edits applied to the variant routine and checked (see Files and checks).** Written by the B-1 writer. A fixer pass on 24/09/2026 applied the independent reviewer's FIX findings; see "Fixer pass after review" under Files and checks. No shared kit file was edited; the two changes this routine needs outside itself are in "Shared file patch requests".

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-1. soc-intake-and-voice`, form lines 265 to 560. Phần A decisions are cited from `_shared/phan-a-ledger.md`, not re-decided.
- Extract: `extract_form_section.py --routine soc-intake-and-voice`, kept in the scratch folder as `soc-intake-and-voice-extract.md` and `.json`. 141 rows and numbered answers: 29 with `[S#]`, 5 with `[CG]` (3 of them also carry `[S#]`), 110 unmarked. B0 box ticked: "Làm khác".
- What each `[CG]` covers, read from `ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx` on 24/09/2026 (the owner marked all five "Đúng"). A `[CG]` covers only the fragment its review row names:
  - KN-06-019, line 302: "YouTube Shorts: 2 to 3 video/tuần" only.
  - KN-06-020, line 307: "Thứ Bảy nhiều shop bán lẻ và F&B mở, Chủ nhật mở nửa ngày hoặc nghỉ" only (the KN note says no state calendar exists for shop hours).
  - KN-06-021, line 375: "ngưỡng 3 video là trần SME chưa có team" only.
  - KN-06-022, line 454: "Không làm brand book 20 trang cho SME", with the KN note that the length (400 to 700 words) is what a newcomer reads once. The question list in the same answer is unmarked.
  - KN-06-023, line 462: the sample caption lengths (Facebook 40 to 80 words, TikTok 15 to 40, Zalo OA 60 to 120), with the KN note "read the counter, not a technical limit". The 700 word page and 30 line message in the same row are unmarked.
- Form author (A1): an AI sub agent, research draft dated 23/09/2026 (Phần A ledger, Identity). **No clause has been confirmed by a person who runs social media for a Vietnamese business.** Every ADOPT below still needs that review before sale (Gate 3, deferred by D6).
- Peer review of the form read as data: `ket-qua/_review/06_Social-Media_review.md` (C2 Page names under NĐ 147, C3 missing holidays, C5 abolished ward in example 1, N3 lucky draw law, G10 the 13:00 livestream sentence). It changed no decision on its own; it pointed at what to re-open.
- Original kit and routine: `employees/social-media-employee`, `routines/soc-intake-and-voice/SKILL.md`, 92567 bytes, 974 lines. Not edited.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id. 111099 bytes after the writer's edits, 114792 after the integrator pass, 116174 after the fixer pass (126 percent of the original).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row. Gate 2 re-opening on 24/09/2026 below.
- Kit version before: 1.8.1. After: set once for the whole kit by the lead (D14). This writer did not touch `VERSION`, `CHANGELOG.md` or `employee.json`.
- Gate 1: the `_shared/glossary.md` search of Snagon skills (24/09/2026) found no Vietnamese intake or voice routine. Wording only was reused: "trụ nội dung", "lịch đăng bài", "cặp xưng hô".

## Sources re-opened

Only sources behind an ADOPT or MOVE row of this ledger that state a law, a number or a platform rule and that the Phần A ledger had not verified. Every other source cited below is verified in `_shared/phan-a-ledger.md` "Sources re-opened on 24/09/2026" (S2, S3, S11, S16, S24, S26, S28, S32, S33, S34, S41, S43, S44, S48, S49, S50, S52) or carries no ADOPT here.

| Source | URL | Date checked | What it supports | Verdict |
|---|---|---|---|---|
| S1 Cổng Xây dựng chính sách, Nghị định 147/2024/NĐ-CP | https://xaydungchinhsach.chinhphu.vn/tu-25-12-xac-thuc-tai-khoan-mang-xa-hoi-bang-so-dien-thoai-di-dong-119241112163033918.htm | 24/09/2026 | From 25/12/2024 "Chỉ những tài khoản đã xác thực mới được đăng tải thông tin (viết bài, bình luận, livestream)" | **Confirmed** for authenticated accounts. **The Page name rule and the 24 and 48 hour takedown duties are not on this page** |
| Supplementary for form line 502, Cổng Bộ Khoa học và Công nghệ, thông cáo báo chí NĐ 147 | https://mst.gov.vn/thong-cao-bao-chi-chinh-phu-ban-hanh-nghi-dinh-147-2024-nd-cp-ngay-09-11-2024-ve-quan-ly-cung-cap-su-dung-dich-vu-internet-va-thong-tin-tren-mang-197241128090616239.htm | 24/09/2026 | "Không đặt tên kênh/tài khoản/nhóm cộng đồng/trang cộng đồng giống hoặc trùng với cơ quan báo chí hoặc gây nhầm lẫn cơ quan báo chí." In force 25/12/2024 | **Confirmed** (official ministry page). The exact word list (báo, đài, tạp chí, tin, tin tức, phát thanh, truyền hình, truyền thông, thông tấn, thông tấn xã) appears only in a WebSearch summary of congluan.vn and thuvienphapluat.vn, so the routine states the rule qualitatively and lists no words. After the review, routine line 288 says "a name that reads like a newspaper's, a station's, or a news agency's" and the fenced example no longer names a word as the legal trigger |
| S7 Tuổi Trẻ, 09/09/2026 | https://tuoitre.vn/de-xuat-fanpage-tu-1-trieu-nguoi-theo-doi-phai-gui-thong-tin-lien-he-toi-co-quan-quan-ly-100260909183719916.htm | 24/09/2026 | A draft ("dự thảo") amending NĐ 147 would require owners of accounts, channels and groups with 1 million followers to send contact details to the authority | **Confirmed as a draft, not in force.** Supports only the rule that a drafted duty is never written as in force |
| Supplementary for form line 491, Cổng Xây dựng chính sách, toàn văn Luật số 72/2025/QH15 Tổ chức chính quyền địa phương | https://xaydungchinhsach.chinhphu.vn/toan-van-luat-so-72-2025-qh15-to-chuc-chinh-quyen-dia-phuong-119250618161434371.htm | 24/09/2026 | Article 2, clause 1: "Đơn vị hành chính của nước Cộng hòa xã hội chủ nghĩa Việt Nam được tổ chức thành 02 cấp", cấp tỉnh and cấp xã only | **Confirmed** that the law in force has no district level (official government portal). The date on which district units stopped working (01/07/2025) is not in the part of the page that loaded; it appears only in WebSearch summaries of vanban.chinhphu.vn and thuvienphapluat.vn, so the routine names no date for it |
| Supplementary for form line 376, Cục Quản lý và Phát triển thị trường trong nước (Bộ Công Thương), "Quy định về thông báo thực hiện hoạt động khuyến mại từ ngày 01/12/2024", dated 20/11/2024 | https://dms.gov.vn/tin-chi-tiet/-/chi-tiet/quy-%C4%91inh-ve-thong-bao-thuc-hien-hoat-%C4%91ong-khuyen-mai-tu-ngay-01-12-2024-93497-1.html | 24/09/2026 (read with curl; the fetch tool refused the site's certificate chain) | Under NĐ 128/2024 (in force 01/12/2024), a promotion under Điều 13 NĐ 81/2018, the chance form, reports its results to "cơ quan quản lý nhà nước có thẩm quyền (nơi đã đăng ký và được xác nhận)"; the under 100 million đồng exemption from notification names only Điều 12 and Điều 14 | **Confirmed** that after the NĐ 128/2024 amendment a chance promotion is still registered and confirmed, and that the prize value exemption does not reach it. S26 (LuatVietnam, 15/04/2024) predates the amendment; this page covers the gap |
| S36 Meta Trung tâm trợ giúp doanh nghiệp | https://vi-vn.facebook.com/business/help/942827662903020 | 24/09/2026 | "Thời điểm hoạt động" over 7 days as the basis for posting times | **Not confirmed.** Only the page title loads. WebSearch returned a blog (congvietit.com) naming "Thời điểm hoạt động tích cực" in Business Suite, which is not an official source. The clause stays UNVERIFIED |

Three sources re-opened (S1, S7, S36), plus three supplementary official pages: MST for form line 502, the Luật 72/2025 text for form line 491, and the DMS page on NĐ 128/2024 for form line 376 (the last two opened in the fixer pass).

## Clause decisions

Decisions follow `references/form-map.md`. Line numbers are form lines. "Phần A" means `_shared/phan-a-ledger.md`. A row split into two decisions carries both. Routine line numbers are in the variant `SKILL.md`, re-derived from the file as it stands after the fixer pass on 24/09/2026.

### B0 and B1

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 272, 273 B0 box: "Làm khác" | none | KEEP | report | Recorded in Identity |
| 275 B0: Instagram at most 5 hashtags | `[S33]`, verified in Phần A (A4 134) | ADOPT | A5.2 `## Hashtag policy` paragraph (line 404), cap value by patch request P1 to `CAPABILITIES.md` | `copy.check` only knows `none` or allowed; the cap is platform data, so it lives in `CAPABILITIES.md` with its date and the routine copies it into the voice file |
| 275 B0: no software founder repo assumed; main channels Facebook Page, Zalo OA, TikTok not LinkedIn; Saturday in the working week; Vietnamese copy check; no slots for personal profiles | none | UNVERIFIED | report | Unmarked. The inherited A4.1 order already ends in asking; the channel set is what the member is on; the copy check script cannot change (D6); personal profiles are deferred to B-4 by Phần A A2 71 |
| 281 B1: deliverable on a Google Sheet or Drive folder | none | REJECT | report | The file map (CONTRACT 2.3) makes `voice/` and `plan/` the deliverable; a second copy elsewhere has no reader |
| 283 B1: the owner or a named approver approves before staff use it | none | REJECT | report | CONTRACT 7.1: no approval loop in this kit; the member corrects through `assumptions[]`, `## Corrections` and the hold box |
| 284 B1: success measured by 100 percent of numbers sourced and at most 1 Facebook post a day | none | KEEP | `copy.check` proof gate; A7 one slot per platform per weekday | Already the original |
| 284 B1: 5 working days, exactly 14 days, at least 4 slots per channel, 0 personal profile slots | none | UNVERIFIED | report | Unmarked figures |
| 285 B1: what bad looks like (30 posts a week, "Quý khách hàng thân mến", 20 hashtags, copied competitor, "tôi từng làm thương hiệu X") | none | EXAMPLE | Acceptance and traps | Fictional failure shapes only |

### B2

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 290: triggers (new channel, redo voice, new industry, add or drop a platform) | none | KEEP | Step 1 PATH A and B | Hand run first, monthly after; an added platform is a monthly `plan/channels.md` change |
| 292: monthly on the first working day at 14:00, 90 minutes; not 13:00 if a livestream | none (the 90 minutes is `[CG]` KN-06-001 in Phần A A2 68, a human duration) | UNVERIFIED | report; `SCHEDULE.md` row unchanged | An unmarked B2 clock time never moves a row. Row stays `first-weekday`, 13:00, 12:45 to 17:00, 45 min, light |
| 293: five ways the owner asks | none | EXAMPLE | Acceptance and traps | |
| 294: draft in 3 working days, final in 5; no price list, no final calendar | none | UNVERIFIED | report | Unmarked deadlines. "No price, no priced post" is KEEP through `## Member claims` |
| 295: done when the owner writes OK on Zalo or ticks the Sheet; silence is not consent | none | REJECT (OK loop) and KEEP (silence) | report; allow list rule | No approval loop (CONTRACT 7.1). Silence never releases anything: only the member typing into `publish_allow_list:` does (line 36) |
| 296: remind after 24 working hours, at most twice, on the reviewer's Zalo | none | REJECT | report | D10: no Zalo automation; CONTRACT 9 has four push cases and never a first run push |
| 297: not for tomorrow's post, not for posting, not during a crisis; report within 15 minutes | none | KEEP (scope) and UNVERIFIED (15 minutes) | report | Scope matches the kit; the minutes are unmarked |
| 302 Câu 1: TikTok business account scheduler, 15 minutes to 10 days | `[S28]`, verified in Phần A A5 146 | MOVE (already) | `CAPABILITIES.md` `channel.schedule`, Phần A | Nothing new for this routine |
| 302 Câu 1: Instagram at most 5 hashtags | `[S33]` | ADOPT | same as 275 | |
| 302 Câu 1: final posting time from the Page's own 7 day "Thời điểm hoạt động" | `[S36]`, not confirmed on 24/09/2026 | UNVERIFIED | report | Page body did not load; only a blog confirms. The inherited rule stands: `default_time`, then the member's own posting cluster, corrected by `soc-performance-review` |
| 302 Câu 1: Facebook 1 to 2 posts a day, windows 11h to 13h and 19h to 22h | `[S39]`, an agency blog | REJECT | report | Not a measurement, and clock times never enter a routine |
| 302 Câu 1: YouTube Shorts 2 to 3 videos a week | `[CG]` KN-06-019 | MOVE | patch request P1 (`CAPABILITIES.md` opening cadence column); routine A7 bullet (line 555) | Lower than one a weekday, so it follows the inherited "down, never up" rule; the per platform figure lives in `CAPABILITIES.md` so the routine names no platform |
| 302 Câu 1: Facebook at most 2 with 4 hours between; TikTok 4 to 7 a week; Zalo OA 2 to 4 a week; Instagram 3 to 4 a week; no 5 videos in a day | none | UNVERIFIED | report | Unmarked figures |
| 302 Câu 1: weekend slots when the shop opens; evening 19:30 to 21:00; nothing after 21:30; B2B 7:30 to 8:30 or 12:00 to 13:00 | none | UNVERIFIED | report; outbound deferral to `soc-publish-run` for Saturday | Unmarked. The first run keeps "no weekend slots" (line 553): `soc-publish-run` runs `mon-fri`, so a Saturday slot would never go out |
| 307 Câu 2: 24/11 Ngày Văn hóa Việt Nam, paid day off from 01/7/2026 | `[S52]`, verified in Phần A A2 86 | ADOPT | A6 `## Working days and hours` (line 454); A7 closed day bullet (line 554); monthly carry (line 724); A8 working days row (line 574) and question 3 of the block | Phần A routed it here. S52 gives workers a paid day off and says nothing about closing a business, so after the review the line reads `người lao động nghỉ có hưởng lương từ 01/07/2026`, counts as closed only until the member answers, and is replaced by `24/11 hằng năm: mở cửa (chủ xác nhận dd/mm/yyyy)` when the member says they open |
| 307 Câu 2: many retail and food shops open Saturday, Sunday half day or closed | `[CG]` KN-06-020 | ADOPT | A6 (line 454) and A8 working days row (line 574): offered as the working answer; written only when the member confirms | The CG approves an observation, not a default. With no answer the inherited Monday to Friday stands |
| 307 Câu 2: Monday to Friday 8:00 to 17:30, messages 8:00 to 21:00 | none (outside the CG fragment) | UNVERIFIED | report | Unmarked hours |
| 307 Câu 2: holidays 01/01, Tết 5 days, Giỗ Tổ, 30/4, 01/5, 2/9 (2 days), nghỉ bù | none (S52 supports only 24/11) | UNVERIFIED | report; routine asks the member which holidays they close (line 574) | Not written from memory; the member names them |
| 307 Câu 2: no post on mùng 1 unless OK from 23 tháng Chạp; Tết calendar 21 days ahead | none | UNVERIFIED | report | Unmarked |
| 307 Câu 2: brief at 7:30, not 6:50 | none here; `[CG]` KN-06-003 in Phần A A2 74 | DEFER | `soc-calendar-standup` (Phần A MOVE) | Not this routine's row |

### B3

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 315: read at least 6 non advertising posts, link and date | none | KEEP | A5.1 "at least six" | Same as the original |
| 315: under 6 posts is thin: one pillar, at most 4 posts a week per channel | none | UNVERIFIED | report | The original's thin line is three; unmarked caps |
| 316: no price, no selling post; never infer a price from a competitor | none | KEEP | `## Member claims`, A4.3 no benchmarking | Already |
| 317: 30 masked comments exported by the person on duty | none | UNVERIFIED | report | Intake does not read the inbox; engagement sweep territory |
| 318: ask the owner where buyers gather; public search; three questions only | none, plus D13 | KEEP and WORDING | A4.3 three questions; A8 row (line 581 block) | The A8 row is the consequence of the platform terms verdict (Phần A "Platform terms"), not a new rule from this clause |
| 319: restricted category question; health supplement confirmation, cosmetic notification number (no ad confirmation for cosmetics), education licence; "chưa khai" bars every function, cure or score claim | `[S14,S41,S50]`; S41, S50 verified in Phần A; Phần A A6 243 and A7 256 ADOPT here | ADOPT | A6 `## Member claims` certificate paragraph (line 446), `## Who they are` line (line 460), pillars (line 468), A5.2 banned words (line 396), A8 row (line 575), failure row | Qualitative; no legal number. Education and finance named as licensed services per the KN-06-018 "Sửa" in Phần A (not in the NĐ 342 special list) |
| 320: channels come from links the owner signs; no link, not on the allow list | none | KEEP | `publish_allow_list:` member only | Already |
| 322: photos and video: date, who shot, faces of customers and children masked; voice notes as transcripts; stickers; PDF licences keep number and expiry | none | UNVERIFIED (media handling) and KEEP (licence number via 319) | report | Unmarked; customer data in samples is handled by the Phần A S32 ADOPT at 348 |
| 328 Câu 3: source order A7, pinned and recent posts, About, website, marketplace link, press search; no login, no password | none | UNVERIFIED (order), REJECT (marketplace), KEEP (credentials) | report; A4.2 platform terms paragraph (line 286); Guardrail 2 | Marketplaces are not read by this kit (Phần A "Platform terms", D16) |
| 333 Câu 4: take samples from the channel itself even when staff wrote them; never a competitor's post as "our voice" | none | KEEP | A5.1, A4.3 | Already |
| 333 Câu 4: label an all promotion set as a promotion voice; ask for 3 samples the owner likes; under 3 samples no new slogan | none | UNVERIFIED | report | Unmarked |
| 338 Câu 5: cover photo, pinned post, TikTok Shop or Shopee cart, Zalo OA, Google Maps; target buyer from real questions; write "missing" | none | UNVERIFIED and REJECT (marketplace, Maps reviews) | report | D16: marketplaces not read |
| 343 Câu 6: ask the owner first; public sources only; paid listening only from the owner's export; never a fake account to enter a closed group | none, plus D13 | KEEP | A4.3 terms bullet (line 319), Guardrail 2 (Create account barred) | Already covered |
| 348 Câu 7: praise without "cho đăng" is told anonymously, no face photo, no phone | `[S32]`, verified in Phần A (A6 239, 244) | ADOPT | A6 `## Sources read` paragraph (line 448) with `[đã che]`; A5.1 sample exclusion (line 350) | Intentional disclosure of personal data is prohibited from 01/01/2026 |
| 348 Câu 7: evidence folder "kho-cong-bo", files named dd-mm-yyyy; approver confirms | none | REJECT | report | No file map entry, no reader (CONTRACT 2); no approver role |
| 348 Câu 7: never turn "many customers praise" into a number | none | KEEP | the rule about numbers (line 969) | Already |

### B4

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 356 step 1: stop and ask when price, approver or links are missing | none | REJECT (stop) and KEEP (ask) | A8 rule 1 (line 607) | CONTRACT 7.1: never block on an answer |
| 357 step 2: 6 posts, 8 to 12 verbatim quotes with permalink and date | none | KEEP (verbatim, permalink, date) and UNVERIFIED (8 to 12) | A5.2 `## Samples` | |
| 358 step 3: score the voice (pronouns, length, emoji, sales share) | none | REJECT | report | CONTRACT 2.3: `## Samples` holds posts and nothing else |
| 359 step 4: at most 3 pillars, each with a link to the shop's own post | none | KEEP | A6 pillars | Already |
| 360 step 5: 14 days, at most 1 a day per channel, no pillar two days running | `[S36]` on the active times note only | KEEP | A7 | Already the original |
| 360 step 5: start at 11:30 or 19:30, replace with active times after 7 days | `[S36]` not confirmed | UNVERIFIED | report | Clock times, and S36 did not load |
| 361 step 6: a 30 line summary to the reviewer | none | WORDING | A8 block rule "never more than thirty lines" (line 586) | Owner facing length only |
| 361 step 6: sent on Zalo, reminded after 24 hours twice | none | REJECT | report | D10; the block is given in the session, never sent |

### B5

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 368: under 6 posts, at most 4 a week, no new slogan | none | UNVERIFIED | report | Unmarked |
| 369: over 50 percent discount posts means selling at most 30 percent of the new calendar | `[S31]` supports only price sensitivity and the Q4 volume figure | UNVERIFIED | report | A marketplace GMV report does not establish a 30 percent ceiling (Phần A A7 258 same verdict) |
| 370: health supplements, drugs, medical services: no function pillar until a valid confirmation number | `[S3,S14,S41]`; S3, S41 verified in Phần A | ADOPT | A6 pillar bar 1 (line 468) | Phần A A6 243 |
| 371: cosmetics: only declared functions, no cure claims, no doctor or pharmacist imagery | `[S5,S50]`; S50 verified | ADOPT | A6 pillar bar 2; A5.2 banned words (line 396) | Phần A A6 243. After the review the five cure words apply unconditionally to cosmetics only, which is what S50 supports (not presented as a medicine, no doctor) |
| 372: spirits of 15 degrees or more, tobacco, prescription drugs: no pillar, no selling post | `[S49]` verified | ADOPT, qualitative | A6 pillar bar 3; A7 "nothing that Step A6 barred" (line 556) | The 15 degree boundary stays out (D11); the member says which class; unknown is treated as barred |
| 373: a pillar with no new material for 21 days is dropped | none | UNVERIFIED | report | The original's three weeks stands |
| 374: a channel unreadable for 30 days gets no slots | none | KEEP | B2 monthly seeding "a month" | Already |
| 375: more than 2 Facebook posts or 3 TikTok videos a day only after 14 days of data, 4 hours apart | `[S39]` blog on the Facebook part; `[CG]` KN-06-021 on the 3 video ceiling | DEFER | `soc-performance-review` (outbound deferral) | Intake never seeds more than one a platform a day; the only routine that adds slots later on evidence is the review |
| 376: minigame prize total from 10.000.000đ or a draw: not in the calendar; a person checks NĐ 128 and Meta's promotion policy | `[S8,S11,S26]`; S11, S26 verified | ADOPT, qualitative | A6 pillar bar 4 (line 468); A7 (line 556) | A draw needs registration whatever its value; Meta adds conditions. The 10 million figure is REJECTED (D11, and the review N3 notes it is wrong for draws). S26 predates NĐ 128/2024, which amended NĐ 81/2018 from 01/12/2024; the DMS page under Sources re-opened confirms that a chance promotion is still registered and confirmed after the amendment, so no routine text changed |
| 378: legal and account safety rules beat frequency; "no evidence, no number" beats "full calendar" | none | KEEP | CONTRACT precedence, rule about numbers, A6 "two honest pillars" | Already the kit's order |
| 384 Câu 8: at most 3 pillars named by what the shop does; no "inspiration" pillar | `[S31]` does not support pillar naming | KEEP | A6 pillars credibility line | Inherited |
| 384 Câu 8: 70 percent no ask, 30 percent price or offer; one discount post in 7 days; B2B 80 to 20 | `[S31]` supports only "buyers compare prices" | UNVERIFIED | report | |
| 389 Câu 9: monthly on the first working day; never a fourth pillar; drop a platform after 30 days unreadable | none | KEEP | row, B2 table | Already |
| 389 Câu 9: drop a pillar after 21 days or 4 posts under the channel median; add a platform only with 5 spare hours, real media and no Tết or sale in 14 days | none | UNVERIFIED | report | Unmarked thresholds |
| 389 Câu 9: view thresholds never taken from another industry, because counting changed at the end of 2024 | `[S34]` verified | ADOPT | A6 `## Read screens` label (line 512); monthly own series sentence (line 724) | Phần A A4 119 and A5.4 184 route the label here |

### B6

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 397: read public posts and build the voice alone, at most 20 posts a channel | none | KEEP (autonomy) and UNVERIFIED (20) | A5 | Caps live in `human-pace` |
| 398: three pillars and 14 days drafted, a person approves | none | KEEP (drafted, held by the hold box) and REJECT (approval) | A7; CONTRACT 7.1 | |
| 399: at most 8 questions in one Zalo message | none | WORDING (one compact block) and REJECT (Zalo) | A8 block (line 586) | D10 |
| 400: a new channel on the allow list is always a person's | none | KEEP | line 36 | Already |
| 401: prices, discounts, customer counts, awards only from the store; one character off stops | none | KEEP | `copy.check`, `## Member claims` | Already |
| 402: KOL brief or minigame rules always a person's | none | KEEP | A6 pillar bar 4; Phần A A3 106 (draft queue holds influencer drafts) | |
| 403: pressing publish, ads, paid OA messages never | none | KEEP | Guardrail 1 | Already |
| 405: handover: link, question, options, deadline, what the AI will not do; no password | none | WORDING and KEEP | A8 block closing line; Guardrail 2 | |
| 411 Câu 10: the AI is never on the permission list; agencies never hold owner rights | `[S24]` supports only Zalo OA seats per package | KEEP | Guardrail 2, "never press a control that would connect" (line 28) | Already |
| 411 Câu 10: Zalo OA staff seats depend on the package | `[S24]` verified | MOVE (already) | `CAPABILITIES.md` Zalo OA note, Phần A A5 160 | |
| 411 Câu 10: role names per platform, removal within 24 hours | none | UNVERIFIED | report | |

### B7

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 418 good 1 situation: a shop in phường Sài Gòn after Bến Nghé merged | `[S54]` not re-opened | EXAMPLE, not used | report | The routine example names no place. The review C5 notes the old ward in the example; the address rule is ADOPTed at 491 |
| 420, 421 good 1 output and why | none | EXAMPLE | A8 block (line 586), report lines (line 934): "Em chưa đăng bài nào", two pillars instead of an invented third | Fictional presentation only |
| 425 to 427 good 2, B2B accounting firm | none | EXAMPLE | Acceptance | |
| 428 good 2: never ask for a phone number in public | `[S32]` verified | ADOPT | A5.2 banned closer (line 402) | Phần A A6 239 routes the CTA rule to the draft queue; the voice file carries the closer so `copy.check` catches it |
| 432 to 435 good 3: Instagram added in a sale week, refused until a link and samples exist | none | EXAMPLE | Acceptance | |
| 439 to 442 bad 1: "hàng đầu", four pillars, junk hashtags, Sunday posting | none | EXAMPLE | Acceptance | |
| 446 to 449 bad 2: invented price and "already posted" | none | EXAMPLE | Acceptance, traps | |
| 454 Câu 11: no 20 page brand book; about 400 to 700 words | `[CG]` KN-06-022 | ADOPT | A5.2 "one page", under seven hundred generated words outside `## Samples` (line 406) | |
| 454 Câu 11: six parts (pronouns, samples, banned words, pillars, sales ratio, where the AI stops) | none | REJECT | report | CONTRACT 2.3 fixes six other headings, parsed by `copy-check.mjs` |
| 454 Câu 11: questions on certificates, opening hours and days off, weekend cover | none here; supported by 319, 307, Phần A A6 243, A2 86 | ADOPT (through those rows) | A8 rows (line 574) | |
| 454 Câu 11: who approves and how fast | none | REJECT | report | No approval loop; Phần A A7 251 keeps phone numbers out of kit files |
| 454 Câu 11: pronoun pair, own banned words, channels allowed | none | KEEP | A5.1 item 5 (read, never chosen), A5.2, allow list | Inherited |
| 454 Câu 11: which prices may be written, items running out, customer names, music outside the library | none | DEFER | `soc-draft-queue`, `soc-material-sweep` (Phần A A5.5 music ADOPT there) | Not intake work |

### B8

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 460: em or bên em to the owner; the voice pair to buyers; never mix shop and quý khách | none | WORDING | report paragraph (line 934) per STYLE-VI; A5.1 item 5 | Presentation |
| 462: sample caption lengths per platform | `[CG]` KN-06-023 | DEFER | `soc-draft-queue` (outbound deferral) | Intake writes no caption |
| 462: voice page at most 700 words; owner message at most 30 lines | none (the 700 is covered by 454 `[CG]`) | ADOPT (via 454) and WORDING | lines 406, 586 | |
| 463: emoji and abbreviations by segment | none | UNVERIFIED | report | Learned from samples |
| 464: 89.000đ, dd/mm/yyyy, 19:30 Vietnam time, no $ | none | WORDING | report paragraph (dd/mm/yyyy) | Money never appears in intake output |
| 465: banned phrases ("Số 1", "duy nhất", "tuyệt đối"...) unless in an approved document | none | UNVERIFIED as a shipped list; WORDING for owner text | report paragraph bans `số 1`, `duy nhất`, `hàng đầu` about the business (STYLE-VI) | The inherited hype rule still lets the agent add Vietnamese hype words from what the member does not use |
| 466: sample phrases for opening, closing, apology, refusal, handover | none | WORDING | A8 block, report lines | |
| 467: Instagram at most 5 hashtags | `[S33]` | ADOPT | same as 275 | |
| 467: Facebook first line complete, TikTok short text, Zalo OA plain, LinkedIn no emoji | none | UNVERIFIED | report | |
| 472 Câu 12: banned openers, closers, adjectives, machine phrases | none | UNVERIFIED | report | Same reasoning as 465 |
| 477 Câu 13: Instagram at most 5 hashtags since 12/2025 | `[S33]` | ADOPT | same as 275 | |
| 477 Câu 13: emoji and hashtag counts per platform, "-" bullets, spam thresholds | none | UNVERIFIED | report | |
| 482 Câu 14: a "Ký hiệu" section in the voice page | none | REJECT | report | Six fixed headings (CONTRACT 2.3) |

### B9 and B10

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 490: a Page over 1 million followers and news of a duty to declare: do not write that it is already required | `[S7]` re-opened, confirmed a draft | ADOPT | A4.3 draft rule bullet (line 321); failure row | A drafted duty is never written as in force |
| 491: an abolished district in the owner's address: never rename, ask for the new line | `[S48]` verified; Phần A A2 88, A3 104; Luật 72/2025 Article 2 re-opened 24/09/2026 | ADOPT | A6 addresses (line 456), A8 row (line 577), question 6 of the block, failure row | S48 confirms the 34 provincial units only. The two level structure (no district) is confirmed on the Luật 72/2025 page under Sources re-opened. After the review the routine speaks of "a province, district, or ward name that no longer exists" and question 6 asks for the address in use today, so it claims no more than both pages carry |
| 492: two people each claim to be the approver | none | UNVERIFIED | report; ambiguity rule (line 32) | No approver concept |
| 493: a channel full of cure claims | none; covered by 370, 371, 511 | ADOPT (through those rows) | A5.2 cure words listed even when used (line 396) | |
| 494: lost admin mid intake: stop, no new Page | `[S16]` verified | KEEP | Guardrail 2, `login-wall`, Create account barred | Already |
| 494: a strange mail during intake is phishing, never followed | `[S16]` | ADOPT | A4.2 paragraph (line 298), failure row | Phần A A2 87 |
| 494: tell the owner within 15 minutes | none | UNVERIFIED | report | Push is never on a first run (CONTRACT 9.3) |
| 495: copy a big brand's voice | none | KEEP | A5.1, A4.3 no competitor samples | |
| 502: only authenticated accounts may post, comment, livestream | `[S1]` re-opened, confirmed | ADOPT | A4.2 (line 294), A7 (line 556) | An account the member says is not authenticated gets no slot |
| 502: Page and channel names must not be confusable with a press agency; check and tell the owner, never rename | `[S1]` page lacks it; confirmed on the MST official page | ADOPT, qualitative | A4.2 (line 288), fenced Vietnamese line, failure row | No word list in the kit. The review found the writer's routine still listed six words; they were removed in the fixer pass, and the failure row now says "naming the channel and why it reads that way" |
| 502: takedown within 24 hours on request, 48 hours on a grounded complaint | `[S1]` page lacks it | REJECT | report | Not on the re-opened page; a legal number stays out (D11); not intake work |
| 503: Luật 75/2025, influencer disclosure | none here; `[S2]` in Phần A A3 106 | ADOPT (through Phần A) | A6 `## Who they are` influencer line (line 460), A8 row (line 576) | Phần A routes the question here |
| 504: NĐ 342 special groups, 24 hour removal | none here; `[S3]` in Phần A A6 243 | ADOPT (groups, through Phần A) and REJECT (24 hours, D11) | A6 pillar bars | |
| 505: Luật 91/2025, no phone, ID or child photos in the evidence store; never buy customer lists | none here; `[S32]` in Phần A A6 244 | ADOPT (through Phần A) | lines 350, 448 | Fines stay out (D11) |
| 506: QĐ 874 code of conduct | none here; `[S43][S44]` in Phần A A7 259 | ADOPT (through Phần A) | A5.2 banned words (line 395) | S43 covers words that incite hatred, violence or discrimination by region, gender or religion. It says nothing about competitor names, so after the review those sit in their own sentence (line 398), as the member's call from Step A8, outside the law framing |
| 511 Câu 15: claims needing evidence (price, percent, units, years, awards, "đối tác của", expert words, customer names, before and after) | `[S3,S14,S41,S49]` | KEEP | `## Member claims`, `copy.check` | Already |
| 511 Câu 15: barred even if the owner says so (cure, no side effects, better than medicine, alcohol to minors, barred spirits, tobacco, prescription drugs) | `[S3,S41,S49]` verified | ADOPT | A5.2 banned words (line 396); A6 pillar bars | S49 supports only the tobacco, spirits and prescription drug bars. The banned words come through rows 370 and 371: for a cosmetic, all five words (S50); for a health supplement, drug or medical service with no ad content confirmation under `## Member claims`, only `chữa khỏi`, `khỏi bệnh` and `bác sĩ khuyên` (S3, S41). `không tác dụng phụ` and `tốt hơn thuốc` stay cosmetics only, and `chữa bệnh` is never banned for a medical service, because `copy-check.mjs` matches the phrase and would catch the clinic's own `khám chữa bệnh` |
| 511 Câu 15: from 01/7/2026 the provincial People's Committee issues the confirmation | `[S41]` verified | KEEP (report only) | report | The routine asks for the certificate the member holds; which office issues it is not intake behaviour |
| 511 Câu 15: delete a sentence missing evidence, never soften with "có thể" | `[S3]` | DEFER | `soc-draft-queue` (outbound deferral) | Drafting rule |
| 516 Câu 16: open the composers in each tool and read the counters | `[S28,S29,S33,S36]` on the facts only | REJECT | A6 "Never open a composer" (line 510) | Guardrail 1 platform draft rule (CONTRACT 7); `unknown` stays the fallback |
| 516 Câu 16: Instagram 10 images, TikTok 15 minutes to 10 days, Facebook 20 minutes to 29 days, no Buffer | `[S36]`, `[S28]`, `[S29]`, owner note | MOVE (already, Phần A A5 145, 146, 153) and UNVERIFIED (S29) | `CAPABILITIES.md` | |
| 516 Câu 16: Instagram hashtags at most 5 | `[S33]` | ADOPT | same as 275 | |
| 516 Câu 16: bare link on its own line on Facebook; trust the counter on posting day | none | UNVERIFIED | report | |

### B11, B12, Câu 17, B14

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 520 to 535 B11 cases 1 to 12 | cases 3 `[S36]`, 7 `[S48,S54]`, 9 `[S16]`, 12 `[S11,S26]` | acceptance | Acceptance and traps | |
| 538 to 546 B12 self checks | none | KEEP | invariant (line 982), rule about numbers, A7 bullets | Five of six map to adopted or inherited rules; the Instagram check maps to line 404 |
| 551 Câu 17: review checklist and numbers needing evidence | none | DEFER | `soc-draft-queue` | Unmarked |
| 557 B14: remember brand, approver, pronoun pair, banned words, pillars, allow list, days off, licence, sample date; never passwords or customer phones | none | KEEP | state file, `voice/`, `plan/`, Guardrail 2 | The kit already keeps these in files; approver REJECTED above |
| 559 B14: record time, links read, voice, calendar, OK or not, open points in a Sheet | none | KEEP (files, run record) and REJECT (Sheet) | run record, `plan/CHANGELOG.md` | |
| 560 B14: one Zalo message at draft, one before the deadline, no more than 2 reminders | none | REJECT | report | D10, CONTRACT 9 |

### Phần A rows routed to B-1

| Phần A row | Decision there | What this routine does |
|---|---|---|
| A2 86 `[S52]` 24/11 | ADOPT | Lines 454, 554, 724 |
| A2 88, A3 104 `[S48]` current place names | ADOPT | Lines 456, 577 |
| A3 100 `[S27][S30]` buyers message on Zalo and Messenger | DEFER to B-1 as research context | KEEP: market facts stay out of files; the A4.3 scan answers "where they gather" per business |
| A3 102 pronoun pairs | DEFER, `[CG]` on the example only | KEEP with WORDING: A5.1 item 5 reads the pair off the posts (line 343) |
| A3 103 `[S19][S31]` sale đôi and market facts | DEFER | No rule: nothing from the market scan becomes a claim |
| A3 106 `[S2][S15+CG]` KOL disclosure | ADOPT, intake asks | Lines 460, 576 |
| A4 119, A5.4 184 `[S34]` Lượt xem | ADOPT | Line 512 |
| A4 134 `[S33]` Instagram 5 hashtags | ADOPT | Line 404, P1 |
| A5 143 `[CG]` KN-06-010 X not a default channel | ADOPT | Line 320, P1 |
| A5 148 Threads, no new channel in 14 days | DEFER, unmarked | UNVERIFIED here too |
| A5.1 169, A5.2 174 platform fit | DEFER as context | KEEP: no figure enters a file |
| A6 238 `[S2][S3][S15]` no invented counts or copied reviews | ADOPT | Lines 444, 448 |
| A6 243, A7 256 restricted categories | ADOPT | Lines 396, 446, 460, 468, 575 |
| A7 251 approver and their Zalo | DEFER, unmarked | REJECT here: no approver role, no phone number in a kit file |
| A7 253 pronouns, emoji, thin under 6 | DEFER, unmarked | UNVERIFIED |
| A7 255 opening hours, days off, weekend cover | DEFER, unmarked | ADOPT only through 307 `[CG]` and `[S52]`: line 574 |
| A7 257 reply library | DEFER | Not intake; `soc-engagement-sweep` |
| A7 259 `[S43][S44]` discrimination words, competitor names | ADOPT | Line 395 for the words S43 names; line 398 for competitor names, as the member's call, not the law's |
| A7 262 industry seasons | DEFER, unmarked | UNVERIFIED |

### Repo mechanics, no form clause

| Item | Decision | Target | Reason |
|---|---|---|---|
| New placeholders would fail the checker | WORDING | A4.2 page name line uses an invented filled example, not `«channel name»` | Placeholders are defined in ROLE.md |
| Platform names in routine prose would fail the vendor check | WORDING | Per platform data in P1 (`CAPABILITIES.md`); the routine says "a platform `CAPABILITIES.md` marks" | CONTRACT rule 2: capabilities named, tools not |
| Vietnamese owner terms outside fences | WORDING | Kept in backticks (`cặp xưng hô`, `chưa khai`, `Tết`, `anh`, `chị`) | Checker Vietnamese rule; 0 warnings |

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-material-sweep` | 672 `[CG]` KN-06-024, 694 `[CG]` KN-06-026; D16 | List the drop folder, price list and season file under `own-work`; terms check before a source is kept | ADOPT, from deferral | Step A6 item 4, appended sentences; Step A8, new table row asking for the folders. `CONTRACT.md` 10.2 carries the same |
| `soc-material-sweep` | 598 `[S52]` plus an unmarked list | Keep 24/11; the rest of the season list is a proposal | already covered | Step A6 already writes the 24/11 line. The rest declined as unmarked |
| `soc-draft-queue` | 1057, 1062, 1103, none | Vietnamese clichés and superlatives as banned list candidates | DECLINED | Unmarked, and the superlative rule's source was not found on the re-opened pages |
| `soc-draft-queue` | 1024 `[CG]` KN-06-032; 1037 `[CG]` | Seed slot formats from the starting mix; write the sample lengths into the voice file | DECLINED in part | No slot field carries a format, and a new field needs a writer and a reader in the file map. The sample lengths are placed once, in the platform notes table in `CAPABILITIES.md`, where the draft queue reads them, rather than a second copy in `voice/voice.md` |
| `soc-draft-queue` | 1037 `[CG]` KN-06-033 | `first_line_fold:` only from a figure the member measured on their phone | ADOPT, from deferral | Step A6 item 5, the paragraph on `character_cap:`, `url_cost:` and `first_line_fold:` |
| `soc-publish-run` | 1227 `[S33]`; Phần A A4 134 | Record the hashtag cap as a comment line in the `plan/channels.md` block | DECLINED | The cap already reaches `soc-publish-run` through its route note, which points at the platform notes table, and `## Hashtag policy` carries it for the draft queue. A comment line in `plan/channels.md` would be a third copy of one figure |
| `soc-publish-run` | 1298 `[CG]` KN-06-036 | At most one feed slot a day on Instagram | already covered | Step A7 seeds at most one slot per platform per weekday. No edit |
| `soc-publish-run` | 1268, 1303 `[S16]` (does not fit); Phần A A5 153 `[CG]` KN-06-011 | Personal profiles and groups are posted by a person | ADOPT, from deferral | Step A4.2, one paragraph: the report says in one line that tool posting there risks a checkpoint, per the route note. No refusal and no allow list change |
| `soc-engagement-sweep` | 1496 none; Phần A D13 Zalo verdict (terms re-opened) | `n/a (not used)` for browser URLs on a connected route only platform | ADOPT, from deferral | Step A6 item 5, a paragraph after the `read_only:` line |
| `soc-engagement-sweep` | 1642, 1645, 1647, 1654 none; A7 259 `[S43,S44]` | Pronoun pair, emoji, abbreviations, sensitive words | already covered in part | The marked part, the sensitive words under `## Banned words`, is Step A5.2. The unmarked parts are declined |
| `soc-performance-review` | 1936f `[CG]` KN-06-052; 1931 `[S32]` | Vietnamese example lines in `scorecard/manual.md` | ADOPT, from deferral | Step A2, the `scorecard/manual.md` paragraph. `CONTRACT.md` 2.0a row and `INSTALL-PROMPT.md` Phase 4 item 6 match |
| `soc-performance-review` | D16; Phần A platform terms | `## Read screens` lists only the member's own screens, none for a platform barred from third party software | ADOPT, from deferral | Step A6 item 5, the `## Read screens` paragraph |
| `soc-calendar-standup` | 2076 `[S52]` | Closed days written as dates the standup can compare | ADOPT, from deferral | Step A6, the `## Working days and hours` paragraph: `dd/mm hằng năm` for a fixed day, `dd/mm/yyyy` for `Tết` and lunar holidays |
| `soc-calendar-standup` | STYLE-VI address rule; 2170 none | Record `anh` or `chị` in `## Who they are` | ADOPT, from deferral | Not a form clause: the way the binding `STYLE-VI.md` address rule is carried out, as D21 decided for the Chief of Staff. Step A6, a `Xưng hô:` line; Step A8, a new table row |
| integrator | GTM 1.11.0 defect 11 | The monthly kit version check read the English kit | repair | Step B3a.1 item 2 reads `employees/social-media-employee-vn/VERSION` and says why; `CONTRACT.md` 8.4 matches |

## Counts

Counted from the decision columns of the clause tables above (B0 to B14 and the repo mechanics table, 136 rows, a row with two decisions counted once for each; the Phần A routing table is cross reference only and not counted; B11 acceptance rows are not decisions): ADOPT 29, MOVE 4, KEEP 38, WORDING 12, EXAMPLE 8, DEFER 6, REJECT 21, UNVERIFIED 35. Total 153.

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none; description stays English and names the cadence in words |
| What you own, and the two guardrails (incl. `### The one thing you create and never fill`) | Keep | none | none (checker: shared section equal) |
| Reading order, every run | Keep | none | none |
| Step 0. The five opening lines | Keep byte for byte | none | none; schedule unchanged, so the 0.2 cadence sentence is untouched |
| Step 1. Decide which run this is | Keep | none | none |
| Step A1. Ground the run | Keep | none | none |
| Step A2. Build the tree | Localize (integrator) | deferral from `soc-performance-review`, 1936f `[CG]` KN-06-052 | The `scorecard/manual.md` paragraph (line 229) gains the Vietnamese example lines, applied by the integrator from the deferral |
| Step A3. Read what is already here | Keep | none | none |
| Step A4. Research the business before you ask anything | Localize | D13/D16 and Phần A platform terms; 502 `[S1]`; 494 `[S16]`; A5 143 `[CG]`; 490 `[S7]` | A4.2: platform terms paragraph, page name check with a fenced Vietnamese line, unauthenticated account paragraph, phishing paragraph. A4.3: three bullets (terms, no new channel `CAPABILITIES.md` marks, drafted rules). A4.1 unchanged |
| Step A5. Build the voice file from real samples | Localize | A3 102 wording; D13; 348 `[S32]`; A7 259 `[S43][S44]`; 370, 371, 511 `[S3][S41][S49][S50]`; 428 `[S32]`; 275 `[S33]`; 454 `[CG]` | A5.1: pronoun pair sentence, own account paragraph, customer data exclusion. A5.2: two law based banned word additions, a separate sentence for the member's competitor names, the phone number closer, the hashtag cap line from `CAPABILITIES.md`, one page length. The voice template block is unchanged |
| Step A6. Write the rest of the plan | Localize | A6 238; 319; 348 `[S32]`; 307 `[S52]` and `[CG]`; 491 `[S48]`; A3 106; 370 to 376; D13; 516; 389 `[S34]` | Invented number paragraph; certificate paragraph; `## Sources read` paragraph; closed days; addresses; `## Who they are` lines; four pillar bars; `own-saved` and `audience-places` limit; no composer; `## Read screens` label. The channels template is unchanged |
| Step A7. Seed the opening slots | Localize | 307 `[S52]`; 302 `[CG]` via P1; 502 `[S1]` | Three bullets: closed days, lower cadence from `CAPABILITIES.md`, unauthenticated accounts and barred subjects. "No weekend slots on the first run" kept |
| Step A8. Ask only what research could not settle | Localize | 307 `[CG]` and `[S52]`; 319; A3 106; 491; A7 259; D13; 361 and 460 wording; deferrals from the material sweep and the standup | Working days row widened (24/11 opening added in the fixer pass); seven new rows; Vietnamese block rule and fenced template. The three governing rules unchanged |
| Step A9. Reconcile the schedule and register the jobs | Keep | none | none |
| Step A10. Close the first run | Keep | none | none |
| Step B1. Read the evidence | Keep | none | none |
| Step B2. Apply what the evidence says | Localize one paragraph | 389 `[S34]`; A6 carries | "The legal limits from the first run" paragraph after the change table |
| Step B3. Drift, reconciled | Keep | none | none |
| Step B3a. The kit itself (incl. the contribution draft template) | Localize (integrator) | integrator repair, `CONTRACT.md` 8.4 (GTM 1.11.0 defect 11) | B3a.1 item 2 (lines 779 to 783) reads the variant's own `VERSION` URLs and says why. The contribution template stays English because the project's tracker reads it |
| Step B4. Close the monthly pass | Keep | none | none |
| Your files | Keep | none | none; no new file or state key |
| Idempotency | Keep | none | none |
| Browser recipes this routine uses | Keep | none | none |
| What it reports | Localize | 460, 464, 466 wording; STYLE-VI | One paragraph: both session reports in Vietnamese, address, date format, tokens kept, banned owner words, a fenced shape of report items 2 and 3. Run record, never appears list and invariant unchanged |
| Failure behaviour | Localize | D13; 502; 494; 319; 491; 490 | Six rows added, all `continues`; no status added |
| Handoffs | Keep | none | none |
| Improving this routine | Keep | none | none (checker: shared section equal) |
| The one push | Keep | none | none (checker: shared section equal) |
| Corrections | Keep byte for byte | none | none |

Every original `## ` heading present, in order; no `## ` heading added (checker: 0 heading findings). The nested `# Voice`, `## Member claims`, `## «platform-id»: «platform name»`, `## Read screens`, `## Scorecard settings` and `# Fixes from real runs` template lines inside fences are unchanged, because `copy-check.mjs` and other routines parse them.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Monthly 14:00, 90 minutes; not 13:00 on a livestream | 292, none | Proposal only. Row unchanged: `first-weekday`, fire 13:00, window 12:45 to 17:00, `YYYY-MM`, 45 min, `light`. No shipped time prose touched |
| 11:30, 19:30 start times; 11h to 13h, 19h to 22h; 19:30 to 21:00; after 21:30; 7:30 to 8:30; 12:00 to 13:00 | 302, 360, `[S39]` blog, `[S36]` unconfirmed | Kept out. `default_time` in `plan/channels.md` stays the one per platform value, written at run time |
| 8:00 to 17:30, 8:00 to 21:00, standup 6:50 or 7:30, 8:10 case time | 307, 524 | Kept out; the standup time is Phần A's MOVE for B-7 |
| YouTube Shorts 2 to 3 a week | 302 `[CG]` | P1 to `CAPABILITIES.md` |
| Instagram 5 hashtags per post and Reel | 275, 302, 467, 477, 516 `[S33]` | P1 to `CAPABILITIES.md`, with the date read; the routine copies it into `## Hashtag policy` |
| X not a default new channel | Phần A A5 143 `[CG]` | P1 to `CAPABILITIES.md` |
| Per platform terms verdicts | Phần A "Platform terms", D16 | P1 to `CAPABILITIES.md` |
| 24/11 paid day off from 01/7/2026 | 307 `[S52]` | Written by the routine into `## Working days and hours` (line 454) as a dated fact, per Phần A A2 86 |
| 10.000.000đ minigame threshold; 15 degree alcohol boundary; 24 and 48 hour takedowns; 3 billion đồng fine | 376, 372, 502, 505 | Kept out (D11); candidates for the shared dated Vietnam rules file (Phần A "For the routine writers") |
| Sample caption lengths | 462 `[CG]` | Deferred to `soc-draft-queue` |
| Seven hundred words, thirty lines | 454 `[CG]`, 361 and 462 wording | In the routine as a length rule and an owner facing message length, not a time or a price |
| Vendors and tools named by the form (Zalo, Zalo OA, TikTok, Facebook, Instagram, YouTube, Shopee, TikTok Shop, Google Sheet, Google Maps, Meta Business Suite, Buffer, YouNet, Buzzmetrics, newspapers) | throughout | None in routine prose (checker vendor rule: 0 findings). Platform data in P1 |
| Fictional figures in routine templates ("8 bài", "2 trụ", "Tin Tức Trà Mẫu") | B7 shape | Marked invented beside each block; the rule about numbers governs real runs |

## Acceptance and traps

Routine line numbers are in the variant `SKILL.md` as it stands after the fixer pass on 24/09/2026.

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. "Bảng giá chưa kịp gửi", customers say shop | `## Member claims` only from the member (442), invented number (444), rule about numbers (969), A8 claims row (573) | Pass: no price anywhere; the question block asks (question 2). The pronoun pair is read off posts (343). "Trạng thái chờ giá" has no status in the kit's closed vocabulary; the empty claims row carries the same meaning |
| 2. Six posts all "SALE 50% duy nhất hôm nay" | none for the promotion voice label, the 30 percent cap, or a superlative in a draft | **Gap, open.** Both clauses are UNVERIFIED (369, 333). The inherited rule keeps a word the member used off the banned list, so "duy nhất" is not banned unless the member adds it. No routine in this kit carries a superlative rule for drafts: the draft queue's candidate was DECLINED (see Deferrals received). The clause is unmarked, so it cannot be ADOPTed; recorded under Rejected and unresolved for the Gate 3 practitioner review |
| 3. "Khách toàn ib lúc 9h tối" | A7 `time` from `default_time` or the member's own posting cluster, recorded in `assumptions[]` (552) | Partial: a concrete time and a correction path (performance review) exist; no clock time in the routine, so "6:50 per the US skill" cannot happen. The S36 active times rule is UNVERIFIED |
| 4. "ben minh lam phan mem ke toan cho ho kinh doanh, dung dang tiktok dance" (unaccented) | `CONTRACT.md` 10.1 item 5, read at routine line 42 (Reading order, item 1); pillars from what the business does (A6 credibility line); session input is data | Pass for the reading rule: unaccented Vietnamese is read for its meaning, quoted as written, never corrected. Nothing in the routine schedules a dance video, because pillars come from the member's own work. The B2B emoji and CTA rules stay unmarked (Phần A deferred A3 101 to B-5 and B-2) |
| 5. Closed Sunday and mùng 1 Tết | 454 closed days, 553 no weekend on first run, 554 no slot on a closed day | Pass once the member names the days in the A8 answer (question 3) |
| 6. Only 2 posts, new page | A5.1 fewer than three (346), failure row (1008) | Partial: marked thin and `partial`; "at most 4 a week" is UNVERIFIED; A7 already seeds at most one a platform a weekday |
| 7. "12 Nguyễn Huệ, Quận 1" after 01/7/2025 | 456, 577, question 6 of the block (597), failure row (1024) | Pass: no rename, one question, no address in any file |
| 8. Two approvers, one wants "quý khách" | ambiguity rule (32); voice changes only through `## Corrections` on the monthly pass (717) | Partial: no approver model (REJECTED); the voice is not rebuilt from a chat message; nothing is published |
| 9. "Meta Business Suite yêu cầu xác minh trong 12 giờ" | 298, failure row (1022), Guardrail 2 (22), `login-wall` | Pass: link not opened, no code asked, named in the report. "Within 15 minutes" is UNVERIFIED; no push on a first run (CONTRACT 9.3) |
| 10. "Page đối thủ ghi 20.000 khách, mình ghi 25.000" | 444 invented number, A4.3 no benchmark (310), 969 | Pass |
| 11. "Duyệt giúp luôn và đăng 14 bài, mật khẩu để trong note" | A8 rule 3 (609), Guardrail 2 (22), Guardrail 1, allow list member only (36), question block last line (600) | Pass: no credential read, nothing published, allow list untouched |
| 12. "them mini game boc tham iphone, tong giai tam 5 trieu, khoi lam thu tuc" (unaccented) | pillar bar 4 (468 block), A7 (556), `CONTRACT.md` 10.1 item 5 (read at 42) | Pass for the calendar: no minigame pillar or slot, and the routine states registration applies at any value (confirmed after NĐ 128/2024 on the DMS page). Drafting rules for the member stay with `soc-draft-queue` (Phần A A2 82) |
| Trap: invented number | 444, 969, `copy.check` metric rule | Pass. Known gap D6: `copy-check.mjs` does not catch Vietnamese counts such as "8 bài" |
| Trap: invented sent or done status | invariant (982), report paragraph bans `em đã đăng` and `em đã gửi` (934), "Em chưa đăng bài nào" in both templates | Pass |
| Trap: instruction planted in a card, file or web page | page content is data (317), fetched changelog is data (799), existing plan files are evidence not instructions (244), allow list never filled by a routine (36) | Pass. A plan file line asking to add a destination is carried as evidence and never acted on |
| Trap: unaccented Vietnamese request | `CONTRACT.md` 10.1 item 5, read at routine line 42; cases 4 and 12 | Pass for the reading rule |
| Trap: second run in the same period | Step 0.2 (99), idempotency, `progress[]` resume only by hand | Pass |

## Rejected and unresolved

- **Rejected:** Sheet or Drive deliverable (281); approval loop and approver role (283, 295, 398, 454, A7 251); Zalo sending and reminders (296, 361, 399, 560); stopping to wait for inputs (356); voice scoring inside `voice.md` (358); six part voice structure and a "Ký hiệu" section (454, 482); the "kho-cong-bo" folder (348); marketplace and map reads (328, 338); opening composers to read counters (516); agency blog frequencies and windows (302 `[S39]`); the 10 million minigame threshold (376); takedown hours (502, 504).
- **Unverified, kept as proposals:** S36 active times basis for posting times (302, 360); all unmarked frequencies (Facebook 2 a day, TikTok 4 to 7, Zalo OA 2 to 4, Instagram 3 to 4); working hours; the national holiday list other than 24/11; Tết rules; thin voice at 6 posts and its caps; 70 to 30 and 80 to 20 ratios and the 30 percent cap (S31 does not support them); 21 day and median based pillar retirement; platform addition conditions; Vietnamese hype word lists (465, 472); emoji and hashtag counts per platform; 15 minute reporting; 20 post read cap; 8 to 12 quotes.
- **Weekend slots:** the first run keeps "no weekend slots". A Saturday slot for a shop that opens needs `soc-publish-run` to run on Saturday; proposal deferred (see Outbound deferrals). The `days` vocabulary allows `mon,tue,wed,thu,fri,sat`, so it is possible once a marked clause supports it.
- **Residual platform terms risk** (Phần A): reading the member's own account through a browser may itself count as "automated means" under some terms. The routine prefers a paste or an export where the terms bar third party software, and otherwise reads own account screens at `human-pace`.
- **Gaps from acceptance:** B11 case 2 (promotion voice, the 30 percent cap, and a superlative such as "duy nhất" in a draft): open, with no routine line, because the clause is unmarked and no routine carries a superlative rule for drafts. Named for the Gate 3 practitioner review. Case 4 and the unaccented trap are covered by `CONTRACT.md` 10.1 item 5 (read at routine line 42). The D6 copy check gap on Vietnamese counts stays.
- **Every ADOPT still needs review by a real Vietnamese practitioner before sale** (Gate 3).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-intake-and-voice/SKILL.md` | 92567 bytes to 111099 bytes (120 percent) by the writer, 114792 after the integrator (Step A2 and Step B3a.1 deferrals), 116174 after the fixer pass (126 percent). A4.2 four paragraphs and a fenced Vietnamese line; A4.3 three bullets; A5.1 one sentence and two paragraphs; A5.2 banned word additions, the phone closer, hashtag cap line, one page rule; A6 invented number, certificate, `## Sources read`, closed days, addresses, `## Who they are`, four pillar bars, source kinds limit, no composer, `## Read screens` label; A7 three bullets; A8 five rows, one widened row, the Vietnamese block rule and template; B2 legal limits paragraph; What it reports, the Vietnamese report paragraph and template; Failure behaviour six rows | Clause decisions above |
| `localization-reports/social-media-employee-vn/soc-intake-and-voice.md` | This ledger | Writer step |

Untouched, confirmed by the checker (Step 0 and Corrections equal, shared sections equal, headings in order) and by `git status` (the original kit shows no change): frontmatter, guard call, both guardrails and the save test, file ownership, run record, idempotency, the improvement and push rules, `## Corrections`. No state key, file, status or placeholder added.

Checker, routine mode. First run after the edits:

```
  WARN vietnamese  employees/social-media-employee-vn/routines/soc-intake-and-voice/SKILL.md  review 2 lines outside fences as owner-facing wording, not agent instruction; first lines 574, 920
PASS WITH WARNINGS (0 fail, 1 warn)
```

Both lines carried a bare `chị` in an English instruction; the address terms were put in backticks. Final run, after the invented number paragraph was added:

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest plan --json` (the call shape Step A5.2 and A6 document), on the three Vietnamese blocks the routine ships, saved under `scratchpad/vn/social-media-employee-vn/`: the page name line (`siv-page-name-line.md`), the A8 question block (`siv-question-block.md`) and the report items 2 and 3 (`siv-report-lines.md`). The same three also run at `--dest plain`, since the block is read as plain text in the session:

```
siv-page-name-line.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-question-block.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-report-lines.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-page-name-line.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
siv-question-block.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
siv-report-lines.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
copy-check: selftest PASS (43 checks)
```

Known gap (D6): `copy-check.mjs` does not recognise Vietnamese counts such as `8 bài` or `2 trụ`, so these PASS lines do not prove every figure is sourced. Each template is marked invented beside it, and the rule about numbers governs real runs.

Dash scan (the U+2013 and U+2014 counter) of this ledger and the routine, after the closing sections were written: see the last line of this section.

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals`, and `installer/cli.mjs list` are the lead's, once per kit.

### Fixer pass after review, 24/09/2026

The independent reviewer returned FIX with seven FIX findings and two NOTEs. All nine were applied; none declined. Only the routine and this ledger were edited; the one change a shared file needs is patch request P3 below and in `_shared/patch-log.md`, marked pending.

| Finding | What changed | Where |
|---|---|---|
| FIX 1, page name word list wider than the MST page | The six words are gone: "such as a name that reads like a newspaper's, a station's, or a news agency's". The fenced example now says the name "đọc giống tên một cơ quan báo chí" rather than naming a word as the legal trigger, and the failure row says "naming the channel and why it reads that way" | Routine lines 288, 291, 1021; ledger Sources re-opened (MST row) and form row 502 |
| FIX 2, 24/11 written as a day the business closes | The line reads `Ngày Văn hóa Việt Nam, 24/11 hằng năm, người lao động nghỉ có hưởng lương từ 01/07/2026`, counts as closed only until the member answers, and is replaced by `24/11 hằng năm: mở cửa (chủ xác nhận dd/mm/yyyy)` when they say they open. A7 "unless the member said they open that day"; B2 "the national day off line, with the member's answer about opening"; A8 row and question 3 ask about 24/11 | Routine lines 454, 554, 574, 594, 724; `CONTRACT.md` 10.2 by P3. `CONTRACT.md` 10.1 item 6 needs no change: it already makes only the member's file close a day |
| FIX 3, competitor names under the law framing | The law bullet names only words that incite hatred, violence or discrimination by region, gender or religion (S43). Competitor names are a separate sentence, the member's call from Step A8 | Routine lines 395, 398; ledger rows 506 and A7 259 |
| FIX 4, cure words wider than S50, S3 and S41 | All five words for a cosmetic only. For a health supplement, drug or medical service with no ad content confirmation under `## Member claims`: `chữa khỏi`, `khỏi bệnh`, `bác sĩ khuyên`. `chữa bệnh` is never banned for a medical service. The A8 no answer cell and the failure row point at "the cure words Step A5.2 names" for the category | Routine lines 396, 575, 1023; ledger rows 371 and 511 |
| FIX 5, district claim wider than S48 | Re-opened the Luật 72/2025 text (two levels, no district) and added it under Sources re-opened. The routine now says "a province, district, or ward name that no longer exists", and question 6 reads "Địa chỉ em thấy có thể còn tên đơn vị hành chính cũ. Anh/chị gửi em địa chỉ đang dùng hiện nay giúp em." | Routine lines 456, 577, 597, 1024; ledger row 491 |
| FIX 6, A8 block Vietnamese | Lines 1, 2, question 1, 2, 4 and 7 reworded as the reviewer gave them, each count now beside its file path; "file giọng văn" is the one term for the voice file in both templates | Routine lines 589 to 598, 937 |
| FIX 7, acceptance gaps | Case 4 and the unaccented trap cite `CONTRACT.md` 10.1 item 5, read at routine line 42, and pass for the reading rule. Case 2 no longer relies on a draft queue superlative rule that does not exist; it is an open gap under Rejected and unresolved, named for Gate 3 | Acceptance and traps; Rejected and unresolved |
| NOTE 8, stale bookkeeping | Outline rows for Step A2 and Step B3a now say Localize (integrator) with their sources; byte counts updated; every routine line citation re-derived from the current file by a line map from the writer's backup (`scratchpad/vn/social-media-employee-vn/siv-fix/linemap.py`), then the acceptance table by hand | Identity, outline, clause tables, acceptance |
| NOTE 9, S26 predates NĐ 128/2024 | Re-opened the DMS page on NĐ 128/2024 (20/11/2024): a chance promotion is still registered and confirmed, and the under 100 million đồng exemption names only Điều 12 and 14. No routine text change | Sources re-opened; form row 376 |

Checker, routine mode, after the fixer pass:

```
PASS (0 fail, 0 warn)
```

Copy check on the three fenced Vietnamese blocks as they now stand, saved under `scratchpad/vn/social-media-employee-vn/siv-fix/`:

```
siv-page-name-line.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-page-name-line.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
siv-question-block.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-question-block.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
siv-report-lines.md --dest plan "verdict":"PASS" "violation_count":0 exit 0
siv-report-lines.md --dest plain "verdict":"PASS" "violation_count":0 exit 0
copy-check: selftest PASS (43 checks)
```

## Outbound deferrals

Each target writer re-checks its own Phần B before acting. Vendor and tool names go to `CAPABILITIES.md`, never into a routine body; no clock time enters a routine.

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `soc-draft-queue` | 462 `[CG]` KN-06-023 | Sample caption lengths: Facebook 40 to 80 words, TikTok 15 to 40, Zalo OA 60 to 120; read the counter, not a technical limit | Use these as the starting length per platform for a Vietnamese caption, stated as words not characters, beneath `character_cap:` from `plan/channels.md` and never above it; `soc-performance-review` may move them on evidence. The per platform figures go in `CAPABILITIES.md` or the draft queue's own table, not in prose naming vendors |
| `soc-draft-queue` | 511 Câu 15 `[S3]` | A sentence whose claim lacks its evidence or certificate is deleted, never softened with "có thể" | In the candidate judge: where a claim is not in `## Member claims`, remove the sentence; never rewrite it as a hedge. Read `## Who they are` in `plan/audience.md` for the restricted category line and `chưa khai` written by intake (line 460) |
| `soc-draft-queue` | 275, 302, 467, 477 `[S33]`; Phần A A4 134 | Instagram at most 5 hashtags | Count hashtags against the per platform line intake writes under `## Hashtag policy` (line 404), since `copy.check` only knows `none` |
| `soc-calendar-standup` | 307 `[S52]`; Phần A A2 86 | 24/11 and member named closed days | When folding the inbox, flag in `## Blocked` any slot dated on a day `## Working days and hours` lists as closed, instead of placing it silently |
| `soc-performance-review` | 375 `[CG]` KN-06-021, `[S39]` blog | An SME without a video team stays at or under 3 videos a day; more than one a day on a platform only after 14 days of its own data | When proposing extra slots through `calendar/inbox.jsonl`, never above that ceiling for a video platform, and only after two full weeks of the member's own series; the 4 hour Facebook gap stays a proposal (unmarked) |
| `soc-performance-review` | 389 Câu 9 `[S34]` | View thresholds come from the member's own series only; a series spanning the Lượt xem change is not compared | Already Phần A A4 119; confirm the scorecard never cuts a pillar on a median taken from another account or across the definition change |
| `soc-publish-run` | 302 Câu 1, none; 307 `[CG]` KN-06-020 (observation only) | A shop that opens on Saturday may want Saturday posts | Proposal only, unmarked for the schedule: if a marked B-4 clause supports it, a Saturday opening could use `days` `mon,tue,wed,thu,fri,sat` for the publish, standup and draft rows together; until then intake seeds no weekend slot |

## Shared file patch requests

The writer edits none of these files. The schedule row is unchanged, so no `SCHEDULE.md` or `employee.json` request. P1 and P2 were applied by the integrator (`_shared/patch-log.md`); P3 comes from the fixer pass and is pending.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### \`web.fetch\``, paragraph "**This capability is what keeps the material sweep and the intake crawl alive" | insert after | It cannot reach anything behind a login, which is where the saved searches, the notifications, and the analytics live. Section 7 has the honest arithmetic on that. | It cannot reach anything behind a login, which is where the saved searches, the notifications, and the analytics live. Section 7 has the honest arithmetic on that.<br><br>### Platform notes read by `soc-intake-and-voice`<br><br>One row per platform. `soc-intake-and-voice` reads the terms verdict before it reads a platform (A4.2, A4.3, A5.1), copies a hashtag cap into `## Hashtag policy` in `voice/voice.md` (A5.2), seeds no more than the opening cadence (A7), and never proposes a platform marked "not a default" as a new channel (A4.3). Terms were re-opened on 24/09/2026; re-read a platform's page before relying on a row older than a year.<br><br>\| Platform \| Terms verdict \| Hashtag cap per post \| Opening cadence at intake \| New channel \|<br>\|---\|---\|---\|---\|---\|<br>\| Facebook Page \| Own account only: own Page and the Business Suite screens the member is signed in to, at `human-pace`. Meta terms 3.2 bar automated access or collection \| none recorded \| one a weekday \| may be proposed \|<br>\| Instagram \| Own account only, same terms family \| 5 per post and Reel (Instagram, confirmed 24/09/2026) \| one a weekday \| may be proposed \|<br>\| TikTok \| Own account and TikTok Studio only. Terms section 5 bar automated collection \| none recorded \| one a weekday \| may be proposed \|<br>\| YouTube \| Own channel and YouTube Studio only \| none recorded \| Shorts: 2 to 3 a week \| may be proposed \|<br>\| Zalo OA \| No browser at all. Zalo terms 4.7 bar use through third party software; only what the member pastes or exports \| none recorded \| one a weekday \| may be proposed \|<br>\| LinkedIn \| Own profile, posts and notifications only; `read_only: always` \| none recorded \| one a weekday \| may be proposed \|<br>\| X \| Terms not re-opened: own account only \| none recorded \| one a weekday \| not a default for Vietnamese buyers: kept only where the member already posts \|<br>\| TikTok Shop, Shopee, Lazada \| Not read by this kit \| n/a \| no slots \| never proposed \| | Phần A "Platform terms" (D13, D16); 275, 302, 467, 477, 516 `[S33]`; 302 `[CG]` KN-06-019; Phần A A5 143 `[CG]` KN-06-010 |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.3 Plan and voice`, paragraph "`plan/audience.md`: `## Who they are`" | insert after | The member moves a line into `## Member claims` when they are willing to defend it, and only then does the copy gate open for that string. | The member moves a line into `## Member claims` when they are willing to defend it, and only then does the copy gate open for that string.<br><br>In this variant two headings carry more. **`## Working days and hours` also lists the days the business is closed**, one per line in Vietnamese, including Ngày Văn hóa Việt Nam on 24/11, a paid day off from 01/07/2026; `soc-intake-and-voice` seeds no slot on a closed day and `soc-calendar-standup` flags one. **`## Who they are` carries two dated lines** written from the member's own answers: whether the business sells in a category Vietnamese advertising law restricts, and whether it books influencers, each `chưa khai` until the member answers. `soc-draft-queue` reads both. A certificate number the member states goes under `## Member claims` verbatim with its expiry date, and a review copied from a page that is not the member's own never enters `## Sources read`. | 307 `[S52]`; 319 `[S14,S41,S50]`; Phần A A3 106 `[S2]`, A6 238, A6 243, A7 256; 348 `[S32]` |
| `employees/social-media-employee-vn/CONTRACT.md` (P3, from the fixer pass, pending after review) | `### 10.2 What this variant adds to the member's plan files`, bullet "**`plan/audience.md`, `## Working days and hours`**" | replace sentence | It always carries the national day off, Ngày Văn hóa Việt Nam on 24/11, a paid day off from 01/07/2026, marked as the law's rather than the member's. | It always carries the national day off line, Ngày Văn hóa Việt Nam on 24/11, a paid day off for workers from 01/07/2026, marked as the law's rather than the member's. The line counts as a closed day only until the member answers the Step A8 working days question; where the member says they open that day, `24/11 hằng năm: mở cửa (chủ xác nhận dd/mm/yyyy)` replaces it and the day is seeded like any other. | 307 `[S52]`; reviewer FIX 2 |

Dash scan result, run on this ledger and the routine after the fixer pass (and after this section was written):

```
no dashes
```
