# social-media-employee-vn: Phần A ledger (shared by all seven routines)

Status on 24/09/2026: **Phần A classified, sources behind adopted law, number and platform clauses re-opened, platform terms re-opened (D13). No kit file edited by this ledger.** Every routine writer reads this file before writing its own Phần B ledger, and cites the row by form line.

## Identity

- Form: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md` (byte identical to `~/Downloads/khung-cg/ket-qua/06_Social-Media/phieu-da-dien.md`, checked with `cmp` on 24/09/2026). Phần A is form lines 51 to 262.
- Extract: `extract_form_section.py --routine soc-calendar-standup --with-a`, Phần A part only, kept in the scratch folder as `phan-a-only.md`. 138 Phần A rows: 40 with `[S#]` only, 10 with `[CG]` only, 8 with both, 80 unmarked (headers and question prompts included).
- Source index: `06_Social-Media/literature/nguon.md`, 56 rows, viewing date 23/09/2026 for every row.
- **A1, who filled the form: an AI.** Form lines 5 and 55 to 61 name the filler as "Sub-agent AI đóng vai Social Media", a research draft dated 23/09/2026 that asks for review by a real practitioner. It has no years of practice, has run no real account and has no former clients. **No clause in this form has been confirmed by a person who runs social media for a Vietnamese business.** Every ADOPT below still needs that review before sale (Gate 3, deferred by D6).
- What `[CG]` means here, checked against `ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx`: the owner reviewed 18 `[KN]` fragments of this form (KN-06-001 to KN-06-018) and marked 17 "Đúng" and 1 "Sửa". **Each `[CG]` covers only the fragment the review row names**, not the whole table row or answer it sits in. In A3, for example, the `[CG]` sits on the illustrative case ("tình huống minh hoạ"), not on the column "AI phải làm khác thế nào". That column is treated as unmarked unless an `[S#]` in the same row supports it.
- Original kit: `employees/social-media-employee`, VERSION 1.8.1, seven routines. Variant: `employees/social-media-employee-vn`, scaffolded 24/09/2026 as a byte for byte copy with `employee.json` slug and name changed, VERSION still 1.8.1 (bump once per D14).

## Routine map

| Phần B | Routine id | Form lines | Original SKILL.md |
|---|---|---|---|
| B-1 | `soc-intake-and-voice` | 265 to 560 | 92567 bytes |
| B-2 | `soc-material-sweep` | 561 to 848 | 67597 bytes |
| B-3 | `soc-draft-queue` | 849 to 1153 | 67430 bytes |
| B-4 | `soc-publish-run` | 1154 to 1448 | 66171 bytes |
| B-5 | `soc-engagement-sweep` | 1449 to 1732 | 63989 bytes |
| B-6 | `soc-performance-review` | 1733 to 2027 | 78859 bytes |
| B-7 | `soc-calendar-standup` (short form, B0, B1, B2, B5, B7, B11, B12 and "Câu hỏi riêng khác") | 2028 to 2211 | 77257 bytes |

Every routine has a Phần B, so no routine stays byte identical by default.

## Sources re-opened on 24/09/2026

| Source | URL | What it supports | Verdict |
|---|---|---|---|
| S2 Sở Tư pháp Đắk Lắk, Luật 75/2025/QH15 | https://sotuphap.daklak.gov.vn/nhung-diem-moi-dang-chu-y-cua-luat-quang-cao-sua-doi-nam-2025-14428.html | From 01/01/2026 a person with influence who carries an ad must announce it is advertising before and during the content, must verify the information, and must not promote a product whose origin and quality they do not understand | Confirmed. **The page says "chưa hiểu rõ nguồn gốc, chất lượng", not "chưa dùng".** "Must have used the product" is not on this page |
| S3 Báo Điện tử Chính phủ, Nghị định 342/2025/NĐ-CP | https://baochinhphu.vn/quy-dinh-moi-ve-hoat-dong-quang-cao-tren-mang-102260102181832697.htm | Violating online ads removed within 24 hours of a written request; eleven special goods groups (cosmetics, food, infant nutrition, chemicals, medical devices, health services, veterinary, fertiliser, seed, drugs, alcohol). Effective 15/02/2026 | Confirmed |
| S11 Meta, Chính sách về Trang, Nhóm và Sự kiện, Khuyến mãi (vi_VN) | https://www.facebook.com/policies_center/pages_groups_events/?locale=vi_VN | A promotion must follow the law, must not require or encourage sharing, reposting or tagging others, must state that Meta does not sponsor or administer it, and must publish official rules | Confirmed |
| S16 VTV8 | https://vtv8.vtv.vn/30000-tai-khoan-facebook-bi-chiem-doat-he-lo-thu-doan-mao-danh-meta-qua-email-google-cuc-tinh-vi-10726050309483251.htm | About 30.000 Facebook accounts, mostly business accounts and Pages, taken over by phishing mail impersonating Meta sent through a Google service; victims gave passwords, 2FA codes and ID photos. Dated 03/05/2026 | Confirmed (news report, not a rule) |
| S23 Zalo Official Account, chính sách gửi tin | https://oa.zalo.me/home/resources/news/thong-bao-chinh-sach-gui-tin-va-quy-dinh-phi-gui-tin_1433049880779375099 | Consultation messages: the first 8 within 48 hours of the user's last interaction are free, then charged per message; in force since 20/06/2023 | Confirmed |
| S24 Zalo Business Solutions, bảng giá OA | https://zalo.solutions/oa/pricing | Package prices from 01/06/2026 incl. VAT; consultation messages outside the window charged per message; OpenAPI only on Tăng trưởng and Toàn diện | Confirmed for prices, the per message fee and OpenAPI. **The monthly quota per package read on 24/09/2026 differs from the form's figures**, so no quota enters any file; the member reads the page on install day |
| S26 LuatVietnam | https://luatvietnam.vn/linh-vuc-khac/khuyen-mai-duoi-100-trieu-co-phai-dang-ky-khong-883-97383-article.html | A promotion of chance (bốc thăm, quay số) must be registered whatever its value (Điều 19 NĐ 81/2018) | Confirmed |
| S28 TikTok for Business (vi) | https://ads.tiktok.com/business/vi/blog/introducing-video-scheduler-now-you-can-plan-tiktoks-in-advance | Desktop scheduler: 15 minutes to 10 days ahead, business account needed, video, caption and time cannot be edited once scheduled | Confirmed |
| S29 Meta Trung tâm trợ giúp doanh nghiệp | https://vi-vn.facebook.com/business/help/1252240869631062 | Page posts can be scheduled 20 minutes to 29 days ahead | **Not confirmed on the page**: only the title loads (also for help 2223502627919449). A WebSearch summary repeats 20 minutes to 29 days. The window figure stays out of the kit |
| S32 Báo Công Luận, Luật 91/2025/QH15 | https://congluan.vn/luat-bao-ve-du-lieu-ca-nhan-co-hieu-luc-tu-01-01-2026-tang-che-tai-xu-phat-10325136.html | In force 01/01/2026; buying and selling personal data prohibited; intentional disclosure prohibited | Confirmed. Fines are on the page and stay out of the kit (D11) |
| S33 Báo Lao Động | https://laodong.vn/cong-nghe/instagram-gioi-han-toi-da-5-hashtag-cho-moi-bai-dang-va-reels-1628826.ldo | Instagram allows at most 5 hashtags per post and Reel | Page returned empty. **Confirmed through WebSearch** by Instagram's own `@creators` Threads post ("Instagram will allow up to 5 hashtags in a reel or post") and trade press |
| S34 Meta cho người sáng tạo (vi_VN), redirected to creators.facebook.com | https://creators.facebook.com/introducing-views-to-simplify-content/?locale=vi_VN | From 14/11/2024 Lượt xem is the main metric for reels, video, posts and stories; for non video content a view counts each time content appears on a screen, repeats included | Confirmed |
| S35 Meta Trung tâm trợ giúp | https://vi-vn.facebook.com/business/help/144825579583746 | Business Suite label Lượt xem | Page body did not load. S34 carries the rule |
| S37 Tuổi Trẻ, 17/05/2026 | https://tuoitre.vn/bao-ve-ban-quyen-su-dung-bai-hat-tren-youtube-tiktok-khac-gi-voi-bieu-dien-tren-san-khau-20260517134029669.htm | Music used to grow views or sales can be commercial exploitation; platform library music carries lower risk; cutting in outside music for public posting can infringe copyright | Confirmed |
| S38 Meta Trung tâm trợ giúp | https://vi-vn.facebook.com/business/help/755124255686026 | Reels muted when music rights change | Page body did not load; blogs in the search result say muted. S37 carries the music rule |
| S41 Sức khỏe & Đời sống, Nghị quyết 21/2026/NQ-CP | https://suckhoedoisong.vn/tu-1-7-ubnd-tinh-thanh-se-cap-phep-quang-cao-thuc-pham-bao-ve-suc-khoe-thu-tuc-va-ho-so-chuan-bi-the-nao-169260505234426608.htm | From 01/7/2026 the provincial People's Committee chair issues the ad content confirmation for health supplements; a dossier is filed before the ad runs | Confirmed. S14 not re-opened; S41 carries the rule |
| S43 Ban Tuyên giáo Thành ủy Cần Thơ, Bộ Quy tắc ứng xử | https://btgdv.cantho.gov.vn/vi/news/tai-lieu-tuyen-truyen/bo-quy-tac-ung-xu-tren-mang-xa-hoi-61.html | Article 4: use real names of the organisation; no words inciting hatred, violence, or discrimination by region, gender, religion | Confirmed |
| S44 Cổng Bộ KH&CN | https://mst.gov.vn/van-ban-phap-luat/14668.htm | QĐ 874/QĐ-BTTTT of 17/06/2021 shown "Văn bản còn hiệu lực" | Confirmed |
| S48 Cổng Xây dựng chính sách | https://xaydungchinhsach.chinhphu.vn/chi-tiet-34-don-vi-hanh-chinh-cap-tinh-tu-12-6-2025-119250612141845533.htm | From 12/6/2025, 34 provincial units (28 provinces, 6 cities); reorganised local government runs from 01/7/2025; 3.321 commune level units listed | Confirmed for 34 units. **The end of the district level is not stated on this page** |
| S49 Báo Điện tử Chính phủ, Nghị định 87/2026/NĐ-CP | https://baochinhphu.vn/quy-dinh-moi-ve-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-van-hoa-quang-cao-102260413165337606.htm | In force 15/5/2026; advertising tobacco, spirits of 15 degrees or more, prescription drugs is prohibited advertising and fined | Confirmed. Fine amounts stay out (D11) |
| S50 Trung tâm Báo chí TP.HCM, Thông tư 03/2026 | https://ttbc-hcm.gov.vn/nhung-diem-moi-trong-quang-cao-my-pham-hoa-chat-1020812.html | From 15/02/2026 no content confirmation for cosmetics ads; only products with a notification receipt number; content matches declared function; never presented as medicine; no images, names or uniforms of medical facilities, doctors, pharmacists, medical staff | Confirmed |
| S51 LuatVietnam | https://luatvietnam.vn/linh-vuc-khac/truong-hop-khong-phai-thuc-hien-thong-bao-hoat-dong-khuyen-mai-883-99546-article.html | From 01/12/2024 samples, gifts, price cuts, vouchers and cultural programmes need no notification; contests with prizes need notification only above a prize total and when sales are not only on a marketplace; loyalty programmes need notification | Confirmed. Threshold and lead time stay out (D11) |
| S52 Báo Điện tử Chính phủ | https://baochinhphu.vn/ngay-van-hoa-viet-nam-24-11-nguoi-lao-dong-duoc-nghi-lam-huong-nguyen-luong-102260424093821937.htm | 24/11 each year is Ngày Văn hóa Việt Nam, a paid day off, resolution in force 01/7/2026 | Confirmed |

Not re-opened, index viewing date 23/09/2026: S1, S5, S8, S9, S10, S12, S14, S15, S17 to S22, S25, S27, S30, S31, S36, S39, S40, S42, S45 to S47, S53 to S56. None of these alone carries an ADOPT below; S36 and S42 sit behind MOVE rows and are marked so.

## Platform terms (D13)

The original kit reads the member's own surfaces through a browser (`read-a-page`, `read-linkedin`, `confirm-a-post-is-live`), plus `own-saved` searches and `audience-places` in `soc-material-sweep`. The Vietnamese variant adds Facebook Page, Instagram, TikTok, YouTube and Zalo OA as likely surfaces (A1 59, A5).

| Platform | Terms re-opened 24/09/2026 | Clause | Verdict for this kit |
|---|---|---|---|
| Facebook (Meta) | https://www.facebook.com/legal/terms?locale=vi_VN, effective 01/01/2025 | 3.2: "Bạn không được truy cập hoặc thu thập dữ liệu từ Sản phẩm của chúng tôi bằng các phương tiện tự động" without prior permission, logged in or not | **Tracking or collecting others' pages: not allowed.** Read only the member's own Page and Business Suite screens they give access to, at human pace. No competitor or group page tracking |
| Instagram | https://www.facebook.com/help/instagram/581066165581870?locale=vi_VN, no effective date shown | No unauthorised access or collection, including automated access or collection | Same as Facebook |
| TikTok | https://www.tiktok.com/legal/page/row/terms-of-service/vi, updated 01/12/2025 | Section 5: no "mã lệnh tự động để thu thập thông tin từ hoặc tương tác theo cách khác với Dịch Vụ" | Own account and TikTok Studio analytics only; no scraping of other accounts or shop pages |
| YouTube | https://www.youtube.com/static?template=terms&hl=vi&gl=VN, effective 05/01/2022 | No automated access (robots, botnets, scrapers) except as the terms allow; no collecting information that identifies a person (usernames, faces) without permission | Own channel through YouTube Studio only; commenter data stays in the reply queue, never collected beyond it |
| LinkedIn | https://www.linkedin.com/legal/user-agreement, effective 03/11/2025 | 8.2.2 no software, scripts, robots, crawlers or plugins to scrape or copy the Services; 8.2.13 no bots to access, message, comment, like or share | Kit already holds LinkedIn `read_only: always`. D13 adds: own profile, own posts and own notifications only; a LinkedIn saved search in `own-saved` is collection of others' profiles and is not read |
| Zalo | https://zalo.vn/dieukhoan/, updated 28/08/2026 | 4.7: no login or use through third party software or systems Zalo has not developed, authorised or approved | No browser automation of Zalo. Zalo OA data only from OA Manager screens or exports the member opens; nothing sent (D10) |
| Threads | not re-opened | none | Treated as Meta family: own account only |
| TikTok Shop, Shopee, Lazada | not re-opened | none | **Not read by this kit.** A5 163 holds TikTok Shop actions with the seller; no routine opens a marketplace page |

Consequence for the routine writers: `soc-material-sweep` (`own-saved`, `audience-places`) and `soc-engagement-sweep` must drop any read of a page that is not the member's own account or a surface the member opened for them; `soc-performance-review` reads only the member's own insight screens and exports. Residual risk to report, not to fix here: the terms' "automated means" wording can cover browser reading of the member's own account too, so a variant that prefers member exports over live page reads is the safer shape.

## Clause decisions

Decisions follow `references/form-map.md`. One row is one decision. A row whose clause has two decisions is split. Legal thresholds, fines and platform prices stay out of every kit file (D11); where a row needs one, the routine names the member's own file or tells the member to check.

### A1 and A2

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 5, 55 to 61 A1: filler is an AI sub agent, research draft 23/09/2026, no practice, no clients, no contact | none | KEEP | report only | Recorded in Identity above; never presented as an expert |
| 59 A1: scope SME retail, local services, small B2B; channels Facebook Page, Zalo, TikTok, optional YouTube Shorts, Instagram | none | KEEP | `soc-intake-and-voice` unchanged | The kit already builds `plan/channels.md` only from platforms the member is on |
| 68 A2: intake takes a person 4 to 6 hours first time, 90 minutes monthly | `[CG]` KN-06-001 on the 90 minutes | KEEP | `SCHEDULE.md` row unchanged | A human's working time is not the agent's budget; B-1 B2 decides any row change |
| 69 A2: material sweep every selling morning, Saturday included when the shop opens | none | DEFER | `soc-material-sweep` (B-2 B2), `SCHEDULE.md` `days` | Unmarked here. `guard.mjs` already accepts day names (`mon,tue,wed,thu,fri,sat`), so a marked B-2 clause can move the row |
| 70 A2: drafts 90 minutes before approval; 45 to 70 minutes per video script | `[CG]` KN-06-002 on 45 to 70 minutes | KEEP | `SCHEDULE.md` row unchanged | Human duration, not a budget |
| 71 A2: publish is scheduled by a person after the owner's OK | none | KEEP | `soc-publish-run` Guardrail 1, `publish_allow_list:` | Held by default already; nothing publishes until the member types a destination |
| 71 A2: a personal profile or a group is always a person's job | none | DEFER | `soc-publish-run` (B-4 B6) | Unmarked; B-4 may carry the marked version |
| 72 A2: every reply is sent by the person on duty | none | KEEP | `soc-engagement-sweep` reply queue | The original drafts into `queue/*-replies.md` and the member answers by hand |
| 72 A2: at least 4 sweeps a day between 8:00 and 21:00 | none | DEFER | `soc-engagement-sweep` (B-5 B2) | Unmarked, and one `YYYY-MM-DD` key allows one run a day; B-5 decides |
| 73 A2: weekly report Friday afternoon, Monday morning if Friday is a live day | none | DEFER | `soc-performance-review` (B-6 B2) | Unmarked |
| 74 A2: morning brief each posting day, 7:30, at least 90 minutes before the earliest post | `[CG]` KN-06-003 | MOVE | `SCHEDULE.md` `soc-calendar-standup` row and `employee.json`, applied in the B-7 pass | Owner approved. Lane is `never`, so no browser spacing; the B-7 writer checks `days` and the ordering against `soc-publish-run` |
| 80 A2: livestream scripts | none | UNVERIFIED | report | New work with no routine; a new routine is outside this localization |
| 81 A2: KOL and KOC briefs | `[S15]` supports the consequence only | UNVERIFIED | report | New work; the disclosure rule is adopted at A3 106 |
| 82 A2: check a minigame or promotion before its rules are posted; AI only lists what to ask | `[S8][S11]` on the consequence; S11 and S26 re-opened | ADOPT | `soc-draft-queue` (hold and note), `soc-calendar-standup` (`## Waiting on you` line) | Meta forbids share or tag entry conditions; a lucky draw needs registration whatever its value. Qualitative only |
| 82 A2: a person decides when prizes reach 10 million đồng or there is a draw | none on the threshold | UNVERIFIED | report | The figure is unmarked, and a legal threshold stays out (D11) |
| 83 A2: note what to mask (phone, address, children's faces) on a customer photo before it enters the material store | `[S32]` re-opened | ADOPT | `soc-material-sweep`, `soc-draft-queue` | Intentional disclosure of personal data is prohibited from 01/01/2026 |
| 84 A2: update pinned price posts within 30 minutes | none | UNVERIFIED | report | Kit has no pin surface; unmarked |
| 85 A2: Zalo OA replies stay in the free window; a charged message is the member's click | `[S24][S40]`; S23, S24 re-opened | ADOPT | `soc-engagement-sweep` (a Zalo OA reply entry outside the free window is marked as possibly charged) | Qualitative; the fee and the count stay on the Zalo page |
| 85 A2: where the fee lives | `[S24]` | MOVE | `CAPABILITIES.md` Zalo OA route note: read the pricing page on install day | A price lives in one dated place, never in a routine |
| 86 A2: Ngày Văn hóa Việt Nam 24/11 is a day off from 01/7/2026 | `[S52]` re-opened | ADOPT | `soc-intake-and-voice` (`## Working days and hours` in `plan/audience.md`), `soc-calendar-standup` | Confirmed |
| 86 A2: the rest of the season list (Tết, 8/3, 30/4, 2/9, sale đôi, Black Friday, Noel), quarterly plan, 21 days ahead | none in A | DEFER | `soc-intake-and-voice` (B-1 Câu 2), `soc-material-sweep` (B-2 Câu 1), `soc-calendar-standup` (B-7 Câu 3) | Those B answers cite S52 and may carry the rest |
| 87 A2: fake Page, fake Meta mail, lost admin is always a person's job | `[S16]` re-opened | KEEP | Guardrail 2, `login-wall` recipe | Already: no credentials, stop at a checkpoint |
| 87 A2: a message or mail that asks to verify a Page or send a code is named as phishing and never followed | `[S16]` | ADOPT | `soc-engagement-sweep`, `soc-material-sweep` (`## Blocked` line through the run record) | Confirmed scam pattern against business Pages |
| 88 A2: addresses use the member confirmed current province and ward names; ask when only an old address exists | `[S48]` re-opened | ADOPT | `soc-draft-queue`, `soc-intake-and-voice` | 34 provincial units from 12/6/2025 confirmed; the routine never renames a place itself |
| 90, 92 A2: first hand AI the brief, the material sweep and caption drafts; never auto post, answer complaints, send paid Zalo or fix minigame dates | none | KEEP | report | Matches the held outbound design |

### A3

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 100: buyers message on Zalo and Messenger, little email (Q&Me, VNG figures) | `[S27][S30]` | DEFER | `soc-intake-and-voice` (`## Where they already are` research, dated source) | A market fact; no figure enters a shipped file |
| 100: "ib giá" is a buying question, answered first, 4 sweeps from 8:00 to 21:00 | `[CG]` KN-06-004 covers the example only | DEFER | `soc-engagement-sweep` (B-5) | Rule column unmarked |
| 101: read unaccented and abbreviated text before asking; ask only for missing size, colour, address | `[CG]` KN-06-005 covers the example only | DEFER | `soc-engagement-sweep` (B-5), `soc-material-sweep` (B-2) | Rule column unmarked |
| 102: pronoun pairs by business type; never call a customer "em" first | `[CG]` KN-06-006 covers the example only | DEFER | `soc-intake-and-voice` (voice), `soc-draft-queue`, `soc-engagement-sweep` (B-1, B-3, B-5 B8) | Glossary records the wording |
| 103: sale đôi, Tết 2026, marketplace GMV and price rise | `[S19][S31]` | DEFER | `soc-intake-and-voice`, `soc-performance-review` (B-6) | Market facts for research and sale week flags |
| 103: never invent a percentage | none | KEEP | `copy.check` proof inventory rule | Already enforced |
| 103: a discount post needs owner confirmed list price, end date and quantity | `[CG]` KN-06-007 covers the example only | UNVERIFIED | report; B-3 B10 may carry it | Rule unmarked in A |
| 104: current province and ward names only, ask on old names | `[S48+CG]` re-opened | ADOPT | `soc-draft-queue`, `soc-intake-and-voice` | Same rule as 88 |
| 105: never click a verification link, never send a password or 2FA code | `[S16][S30]` | KEEP | Guardrail 2, `login-wall` | Already |
| 105: the AI stops publishing on a phishing sign | `[S16]` on the fact | REJECT | report | No routine writes `PAUSED` (CONTRACT 2.0a). The brief tells the member to write `PAUSED` naming `soc-publish-run` |
| 105: report to the owner within 15 minutes | none | UNVERIFIED | report | Unmarked number |
| 106: a draft that features a KOL or KOC opens with "Nội dung quảng cáo" and is held until the member records that the person checked the product | `[S2][S15+CG]`; S2 re-opened | ADOPT | `soc-draft-queue`, `soc-intake-and-voice` (asks whether the business books KOL or KOC) | Disclosure before and during, and verification, confirmed from 01/01/2026 |
| 106: the KOL must have used the product | `[S2]` does not say "used" | UNVERIFIED | report | S2 says "chưa hiểu rõ nguồn gốc, chất lượng"; write the rule as "checked", not "used" |

### A4

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 113 to 118, 121 to 123, 125, 126, 129, 133, 135: Fanpage, ib, rep, cmt, chốt đơn, ghim, hook, caption, CTA, seeding, booking, OA, sale đôi, buff | none | WORDING | `_shared/glossary.md` | Owner facing terms only |
| Rules inside unmarked A4 examples: reply in 15 minutes, finish inbox before 21:00, hide comments with phone numbers, never delete complaints, unpin within 30 minutes, TikTok caption under 150 words, one CTA, no identical repost within 24 hours, 11/11 teaser 7 days ahead | none | UNVERIFIED | report | Unmarked numbers and rules |
| 119, 120: Lượt xem replaced reach and impressions on Facebook from 14/11/2024 and counts repeat views; never compare 2024 reach with 2026 views | `[S34][S35]`; S34 re-opened | ADOPT | `soc-engagement-sweep` (records the platform's own label), `soc-performance-review` (a definition change breaks the series), `soc-intake-and-voice` (`## Read screens` names the label) | Platform rule confirmed |
| 124: KOL, KOC | `[S2]` | WORDING | glossary | The rule is adopted at 106 |
| 127: trend music only from the platform library | `[S37][S38]` | WORDING | glossary | The rule is adopted at A6 240 |
| 128: live commerce needs a verified account | `[S1]` | WORDING | glossary | Livestream is not a routine here |
| 130: tin tư vấn, free window then charged | `[S24][S40]` | WORDING | glossary | The rule is adopted at A2 85 |
| 131: checkpoint means stop, no retry | `[S16]` | KEEP | `login-wall` recipe | Already |
| 132: giảm tiếp cận differs from removal and from a muted video | `[S38]` | WORDING | glossary | S38 page body did not load |
| 134: Instagram allows at most 5 hashtags per post and Reel | `[S33]`, confirmed through Instagram `@creators` | ADOPT | `soc-draft-queue` (cap on an Instagram destination even when `## Hashtag policy` allows hashtags), `soc-intake-and-voice` (`plan/channels.md` note) | `copy.check` only knows `none` or allowed, so the routine counts |

### A5 table

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 142 LinkedIn: only for B2B readers, read with the company account, no automation, posting and messaging by a person | none | KEEP | `read-linkedin` recipe, `read_only: always` | Already |
| 143 X: not a default channel for Vietnamese SMEs | `[CG]` KN-06-010 | ADOPT | `soc-intake-and-voice` (never proposes X as a new channel; keeps it only where the member is already active) | Owner approved |
| 144 Facebook Page through Meta Business Suite | `[S29]` | MOVE | `CAPABILITIES.md` `channel.schedule` route, confidence `expected` | Route data, not a rule |
| 144: schedule window 20 minutes to 29 days | `[S29]` not confirmed on the page | UNVERIFIED | report | Only a search summary carries it |
| 144: AI holds no Graph token; scheduling, posting, replying, pinning, hiding and ads are locked | none | KEEP | Guardrails 1 and 2 | Already |
| 145 Instagram: at most 10 images | `[S36]` not re-opened, index viewing date 23/09/2026 | MOVE | `CAPABILITIES.md` `file.upload` note | Capability data; recheck on the day |
| 146 TikTok Studio, business account, 15 minutes to 10 days, no edit after scheduling | `[S28]` re-opened | MOVE | `CAPABILITIES.md` `channel.schedule` route | Confirmed platform data |
| 146: a scheduled TikTok cannot be edited, so the hold decision comes before it is scheduled | `[S28]` | DEFER | `soc-publish-run` (B-4) | Ordering belongs to the publish routine |
| 147 YouTube Studio, Shorts first | `[S42]` not re-opened | MOVE | `CAPABILITIES.md` route, confidence `unknown` | The channel figures stay out |
| 148 Threads only if already used; no new channel in the first 14 days | none | DEFER | `soc-intake-and-voice` (B-1) | Unmarked |
| 149 to 151, 154, 157, 158, 164: Bluesky, Mastodon, Pinterest, Postiz, Discord, Circle, listening tools not needed or never posted from | none | KEEP | `soc-intake-and-voice` channel list | The kit lists only platforms the member is on |
| 152 Metricool replaced by native schedulers | none | UNVERIFIED | report | Route removal unmarked; probes decide |
| 153 Buffer: third party tools that post to a personal profile risk a checkpoint | `[CG]` KN-06-011 | MOVE | `CAPABILITIES.md` `channel.schedule` note | Owner approved risk note |
| 155 Canva or CapCut, common sizes, MP4 | `[CG]` KN-06-012 says check the upload box each day | EXAMPLE | report | No size default enters the kit |
| 156 internal Zalo group replaces Slack; brief drafted, customer messages locked | none | KEEP | `brief.deliver` route unchanged (D10) | Already |
| 156: the brief reads well pasted into an internal Zalo group | none | DEFER | `soc-calendar-standup` (B-7 B7) | Wording |
| 159 material from product photos, masked bills, permitted messages instead of git | none | DEFER | `soc-material-sweep` (B-2, `own-work` kind) | Unmarked |
| 160 Zalo OA packages, fees, free window | `[S23][S24]` re-opened | MOVE | `CAPABILITIES.md` Zalo OA route note with page and date | Quotas on the page differ from the form |
| 160: OpenAPI only on paid packages; AI holds no key | `[S24]` re-opened | MOVE | `CAPABILITIES.md`, confidence `unknown` | Confirmed |
| 161 Google Sheet calendar; mark published only with a link | none | KEEP | slot `published` only from a receipt | Already; `calendar/calendar.json` stays the calendar |
| 162 Pancake, blog price | `[S45]` blog | REJECT | report | A blog is not a price list, and a price never enters a kit file |
| 163 TikTok Shop price, variants, cart pin belong to the seller | `[S19]` market figure only | KEEP | no routine touches a shop | Already |

### A5 numbered answers

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 169 A5.1: no login, no SMS code, no extension | `[S16][S27][S30]` | KEEP | Guardrail 2, `login-wall` | Already |
| 169 A5.1: B2B uses LinkedIn and Facebook groups, closes on Zalo | `[S27][S30]` on usage | DEFER | `soc-intake-and-voice` (B-1) | Research context |
| 174 A5.2: platform fit by business type, user counts | `[S18][S19][S30][S39][S42]` | DEFER | `soc-intake-and-voice` (B-1) | S39 is an agency blog; no figure enters a file |
| 179 A5.3: native schedulers as routes; Buffer, Metricool, Postiz not used | `[S24][S28][S29][S45]` | MOVE | `CAPABILITIES.md` `channel.schedule` | The allow list stays member only and ships empty |
| 184 A5.4: read Lượt xem, split free and paid Zalo messages | `[S34][S40][S24]` | ADOPT | `soc-engagement-sweep`, `soc-performance-review`, `soc-intake-and-voice` (`## Read screens`) | Same basis as A4 119 |
| 184 A5.4: a screen that did not load is "không đọc được", never 0 | none | KEEP | `null`, never zero, in `posts/metrics.jsonl` | Already |
| 184 A5.4: orders from the owner's Sheet or sales software | none | DEFER | `soc-performance-review` (B-6, `scorecard/manual.md`) | Unmarked |
| 189 A5.5: hand over the raw clip without music; music is chosen from the platform library at posting | `[S37][S38+CG]` KN-06-013 | ADOPT | `soc-draft-queue`, `soc-material-sweep` | S37 confirmed |
| 194 A5.6: AI never asks to join a group and never comments in one | `[S27]` on usage only | KEEP | read only surfaces | Already |
| 194 A5.6: group questions reach the Sheet through a person, names removed | none | DEFER | `soc-material-sweep` (B-2) | Unmarked |
| 199 A5.7: one verification error stops the run; no password stored | `[S16][S28]` | KEEP | `login-wall`, `human-pace` | Already |
| 204 A5.8 items 5 to 9: KOL disclosure, library music, no customer data, current place names, Instagram hashtag cap | `[S2][S32][S33][S38][S48]` | ADOPT | `soc-draft-queue` (the candidate judge) | Each item's source re-opened above |
| 204 A5.8 items 1, 2: accents consistent with the voice, the right pronoun pair | none | DEFER | `soc-draft-queue` (B-3 B8) | Unmarked |
| 204 A5.8 item 3: every price, percent, quantity, date from the owner's file | none | KEEP | `copy.check`, `## Member claims` | Already |
| 204 A5.8 item 4: no "nhất", "duy nhất", "khỏi bệnh", "100%" without a document | none in this form | UNVERIFIED | report; a B10 answer may source it | Unmarked here |
| 204 A5.8 item 10: a reviewer wrote OK with the time | none | DEFER | `soc-publish-run` (B-4), `soc-calendar-standup` (B-7) | Opt in approval against the shipped hold box is their call |
| 209 A5.9: the owner keeps the top role; AI has none | none | KEEP | Guardrail 2 | Already |
| 214 A5.10: weekly report reaches the owner Friday 16:30 | `[CG]` KN-06-014 | MOVE | `SCHEDULE.md` `soc-performance-review` row, applied in the B-6 pass | Owner approved send time; the writer checks the heavy lane spacing |
| 214 A5.10: no customer names in the report | `[CG]` KN-06-014 | KEEP | personal data confinement | Already |
| 214 A5.10: the metric list and the monthly roll up | none | DEFER | `soc-performance-review` (B-6) | Unmarked |
| 219 A5.11: a message about price, stock, shipping or health is sent by a person | `[S24+CG]` KN-06-015 | KEEP | reply queue answered by hand | Already |
| 219 A5.11: shift hours, 15 and 30 minute targets, after hours answers | none | DEFER | `soc-engagement-sweep` (B-5) | Unmarked |
| 224 A5.12: Zalo OpenAPI on paid packages; Pancake price | `[S24][S45]` | KEEP | no new action | Covered at 160 and 162 |
| 229 A5.13: escalate on the owner's personal Zalo, remind, then call | `[CG]` KN-06-016 on the call | REJECT | report | `notify.push` keeps its contract route and never goes to Zalo (D10, CONTRACT section 9); a call is a human duty |
| 229 A5.13: the out of hours incident list | none | UNVERIFIED | report | Unmarked |

### A6

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 237: never post, schedule, reply, message or send a charged message on its own | `[S24]` supports only the fee | KEEP | Guardrail 1, empty allow list, reply queue | Already the shipped state |
| 237: "in every case", even where the member wrote a release | none | REJECT | report | `RELEASES.md` and the allow list are the member's; a form line cannot remove them (CONTRACT section 7) |
| 238: no invented sales counts, no copied reviews, no invented "bác sĩ khuyên", no KOL claim without verification | `[S2][S3][S15]` re-opened | ADOPT | `soc-draft-queue`, `soc-engagement-sweep` (suggested replies), `soc-intake-and-voice` (`## Sources read` never feeds a copied review) | Truthful advertising and influencer duties confirmed |
| 238: takedown within 24 hours on request | `[S3]` confirmed | REJECT | report; candidate for a shared dated Vietnam rules file | A legal number stays out of the kit (D11) |
| 239: never buy likes, views or comments; no seeding as a fake customer | `[S34]` does not support the ban | KEEP | the kit never spends and never posts outside the allow list | Already |
| 239: never ask for phone numbers in comments; never copy commenters' numbers into files | `[S32]` re-opened | ADOPT | `soc-draft-queue` (no CTA that asks for a phone number in public), `soc-engagement-sweep` (a phone number or address in captured text is masked before it reaches any file) | The writer must reconcile this with the verbatim `text` rule in CONTRACT 2.5 |
| 240: no music, images or video outside the library or licence; no reposting a competitor's video | `[S37][S38]` | ADOPT | `soc-draft-queue`, `soc-material-sweep` (another account's video is a reference, never media) | S37 confirmed |
| 241: never click a Meta or Zalo verification link, send a login code, add an unknown admin, or post from the owner's personal profile | `[S16]` | KEEP | Guardrail 2, publishing only through the configured channel | Already |
| 242: a draw or prize needs the rules checked against the promotion decrees and Meta's promotion policy first | `[S11][S26][S51]` re-opened | ADOPT | `soc-draft-queue` (no share, tag or repost entry condition; the Meta release sentence on Facebook; held with a check note), `soc-calendar-standup` | Qualitative; thresholds and lead times stay out |
| 243: health supplements and drugs need a confirmation number; cosmetics only declared functions, never as medicine, no doctor imagery; no ad for tobacco, spirits in the banned class, prescription drugs | `[S3][S5][S14][S41][S49][S50+CG]`; S3, S41, S49, S50 re-opened | ADOPT | `soc-intake-and-voice` (asks the category and records the member's certificate numbers under `## Member claims`), `soc-draft-queue` (refusal) | Qualitative; the 15 degree boundary and fines are candidates for a shared rules file |
| 243: beer and wine under 15 degrees follow the alcohol law | `[CG]` KN-06-017 says the original text must be opened | UNVERIFIED | report | Not opened |
| 244: never post an address, phone, ID photo or a child's photo, or copy a customer chat into a staff group | `[S32]` re-opened | ADOPT | `soc-material-sweep`, `soc-engagement-sweep`, `soc-calendar-standup` (brief and `soc-latest.md` carry none) | Adds ID photos and children to the inherited confinement |

### A7

| Form line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 251: brand, industry, one line description, final reviewer and that person's Zalo | none | DEFER | `soc-intake-and-voice` (B-1 B3) | Unmarked; no phone number is stored in a kit file |
| 252: the list of channels allowed; not listed means not allowed | none | KEEP | `publish_allow_list:` | Already |
| 253: banned words, hashtag choice | none | KEEP | `## Banned words`, `## Hashtag policy` | Already |
| 253: pronoun pair, emoji choice, fewer than 6 old posts means a thin voice | none | DEFER | `soc-intake-and-voice` (B-1) | Unmarked |
| 254: price list with an effective date; no number outside it | none | KEEP | `## Member claims` | Already |
| 255: opening hours, days off, weekend cover, no message window | none | DEFER | `soc-intake-and-voice`, `soc-engagement-sweep` | `## Working days and hours` stays the heading |
| 256: conditional categories and their certificate numbers; medical services and devices in the Nghị định 342 list, education and finance by their own laws | `[S49][S50+CG]` KN-06-018 (Sửa) | ADOPT | `soc-intake-and-voice` intake question, `soc-draft-queue` refusal | Same basis as A6 243 |
| 257: approved reply library; promises the shop never makes | none | DEFER | `soc-engagement-sweep`, `soc-intake-and-voice` | Unmarked |
| 258: three pillars | none | KEEP | `plan/pillars.md` cap of three | Already |
| 258: 30 percent selling posts by default | none | UNVERIFIED | report | Unmarked default |
| 259: competitors never named, sensitive political, religious, gender and regional words | `[S43][S44]` re-opened | ADOPT | `soc-intake-and-voice` (writes the list under `## Banned words`), `soc-draft-queue`, `soc-engagement-sweep` | Code of conduct Article 4 confirmed in force |
| 260: ad account, a daily figure AI may mention and never spend | none | KEEP | the kit never spends | Already |
| 261: sales software or Sheet; without it "chưa đo được đơn" | none | DEFER | `soc-performance-review` (B-6) | Unmarked |
| 262: industry seasons | none | DEFER | `soc-intake-and-voice` (B-1) | Unmarked |

## Counts

Counted from the decision column of this file (121 decision rows): ADOPT 22, MOVE 11, KEEP 34, WORDING 6, EXAMPLE 1, DEFER 28, REJECT 5, UNVERIFIED 14.

## For the routine writers

- `soc-draft-queue` carries most adopted rules: KOL disclosure, promotion checks, restricted categories, library music, Instagram hashtag cap, current place names, customer data, banned words. Keep them qualitative and name the member's file for any figure.
- `soc-material-sweep` and `soc-engagement-sweep` carry the D13 verdict: own account only, no reading of pages that are not the member's.
- Two schedule rows have `[CG]` support: `soc-calendar-standup` (A2 74) and `soc-performance-review` (A5.10 214). Every other time in Phần A is a proposal.
- Candidates for one shared, dated Vietnam rules file at Gate 8: the promotion notice threshold and lead time, the 24 hour takedown, the 15 degree alcohol boundary, fines under Luật 91/2025 and Nghị định 87/2026, Zalo OA fees and quotas.
