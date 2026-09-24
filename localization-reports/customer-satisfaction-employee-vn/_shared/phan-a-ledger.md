# customer-satisfaction-employee-vn: Phần A ledger (shared by all eight routines)

Status on 2026-09-24: **Phần A classified, sources behind adopted law, number and platform clauses re-opened, platform terms re-checked (D13). No kit file edited.** Every routine writer reads this file before its own Phần B ledger. A routine ledger may cite a row id here (`A3-07`) instead of repeating it.

## Identity

- Form: `Khung-tri-thuc-ban-dia/05_CSKH/phieu-da-dien.md` (read only), Phần A at form lines 52 to 270. Source index: `05_CSKH/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Extract: `extract_form_section.py --routine csat-desk-intake --with-a`, scratch copy only (`scratchpad/vn/customer-satisfaction-employee-vn/extract-a.md`, `.json`). Phần A table rows, header rows included: 123. With `[S#]` only 42, `[CG]` only 5, both 5, unmarked 71.
- **Form author (A1, lines 56 to 62): an AI sub agent playing the customer care role, research draft dated 23/09/2026, asking for review by a real practitioner.** No years of experience, no real business, no account operated by hand; the tools named were read from Vietnamese documentation only. **No clause in this form has been confirmed by a person running customer care in a Vietnamese business.** `[CG]` marks are the owner's review decisions, not a domain expert's. No report or kit file may present this form as expert testimony.
- Original kit: `employees/customer-satisfaction-employee`, VERSION 1.8.0. Variant: `employees/customer-satisfaction-employee-vn`, scaffolded 2026-09-24, VERSION still 1.8.0, byte copy of the original except `employee.json` slug and name. Version bump (D14) happens with the first localized routine.
- Every Phần B section exists: B-1 `csat-desk-intake` (273), B-2 `csat-inbox-sweep` (557), B-3 `csat-reply-desk` (829), B-4 `csat-churn-watch` (1118), B-5 `csat-deflection-desk` (1413), B-6 `csat-taxonomy-refresh` (1693), B-7 `csat-satisfaction-report` (1991, short), B-8 `csat-desk-standup` (2163, short).

## Sources re-opened on 24/09/2026

Only sources behind an ADOPT that states a law, a number or a platform rule. Vendor feature pages behind a MOVE (Pancake, Harasocial, Subiz, CareSoft, Getfly, Bizfly, Stringee, OMICall, Botcake) were not re-opened: they carry no rule and every route they feed stays `unknown` until the member confirms it.

| Source | URL | What it supports here | Verdict |
|---|---|---|---|
| S19 Shopee, Chính sách trả hàng và hoàn tiền | https://help.shopee.vn/portal/4/article/77251 | 15 days to request a return, 24 hours for fresh and frozen food; seller responds within 02 calendar days "or another time Shopee sets", else Shopee refunds automatically | Confirmed. Posted 04/3/2026, effective 11/3/2026 |
| S52 Học viện Shopee, Tỷ lệ Phản hồi Chat | https://banhang.shopee.vn/edu/article/2027 | Valid reply is a manual message within 12 hours, "vào cả cuối tuần và ngày lễ"; Shop Yêu thích at least 80%, Yêu thích+ at least 90%; automatic and promotional messages do not count | Confirmed through ego-browser (WebFetch returned an empty shell). Article dated 17/07/2024 |
| S53 Học viện Shopee, Chế độ Tạm nghỉ | https://banhang.shopee.vn/edu/article/14682 | While vacation mode is on, the chat response rate is not counted | Confirmed through ego-browser. Article dated 17/04/2026 |
| S21 Ecommax | https://ecommax.vn/vi-pham-giao-dich-ngoai-shopee/ | Shopee off platform rule: phone, email, links, abbreviations such as "z.a.l.o", "sdt", contact emoji, asking to pay or talk outside Shopee; tightened 16/06/2025 | Confirmed. A service vendor's blog, not Shopee's own page; the Shopee terms (below) independently forbid collection, not off platform contact, so the off platform rule still rests on this blog |
| S43 Báo Nhân Dân | https://nhandan.vn/gia-mao-san-thuong-mai-dien-tu-lua-dao-nguoi-mua-hang-post989906.html | Fake refund scam: scammer reads the order correctly, sends a fake link or a QR code, asks for bank account, OTP, bank password or an advance fee; on Shopee returns and refunds are done in "Đơn mua" | Confirmed. Article dated 21/09/2026 |
| S22 TikTok Shop, Hiệu suất chat | https://seller-vn.tiktok.com/university/essay?knowledge_id=7321019421820673&lang=vi-VN | 12 hour response rate counts customer started sessions answered by staff within 12 hours; an FAQ auto answer counts only when the buyer writes nothing more | Confirmed |
| S23 TikTok Shop, hủy, trả hàng, hoàn tiền | https://seller-vn.tiktok.com/university/essay?knowledge_id=6837773789234946 | "Nếu không hoàn thành các hành động bắt buộc, yêu cầu sẽ được chấp thuận" | Confirmed |
| S3 LuatVietnam, Luật 19/2023/QH15 | https://luatvietnam.vn/thuong-mai/luat-bao-ve-quyen-loi-nguoi-tieu-dung-2023-so-19-2023-qh15-259732-d1.html | Điều 10 khoản 1 điểm e (must refund, compensate or exchange when goods differ from what was announced or committed); Điều 31 khoản 2 (notify receipt of every consumer complaint within 03 working days); effective 01/7/2024 | Confirmed. The page did not show a clear validity status |
| S4 Hội đồng PBGDPL Thái Nguyên | https://pbgdplthainguyen.gov.vn/chu-truong-chinh-sach/trach-nhiem-giai-quyet-khieu-nai-cua-nguoi-tieu-dung-doi-voi-san-pham-hang-hoa-co-khuyet-tat-313.html | Same Điều 31 khoản 2 and khoản 3 (publish the complaint handling process); applies to all complaints, not only defective goods | Confirmed |
| S61 Cổng Chính phủ, Quyết định 19/2025/QĐ-TTg | https://xaydungchinhsach.chinhphu.vn/bang-danh-muc-va-ma-so-cua-34-tinh-thanh-moi-cac-don-vi-hanh-chinh-cap-xa-moi-11925070418263625.htm | 34 provincial units, 3.321 commune level units, from 01/07/2025 | Confirmed. Replaces S47 (Wikipedia), which was not re-opened |
| S62 Báo Chính phủ | https://baochinhphu.vn/quoc-hoi-chinh-thuc-thong-qua-nghi-quyet-sua-doi-bo-sung-mot-so-dieu-cua-hien-phap-nam-2013-102250616092411276.htm | "kết thúc hoạt động của đơn vị hành chính cấp huyện trong cả nước từ ngày 1/7" | Confirmed |
| S55 cov.gov.vn | https://cov.gov.vn/tin-tuc/tri-tue-nhan-tao-va-cac-diem-dang-chu-y-168383.html | Luật 134/2025/QH15 Điều 11 khoản 1: a system that interacts directly with people must let the user know they are interacting with a system | Confirmed. This page gives no effective date |
| S13 Báo Nhân Dân | https://nhandan.vn/luat-tri-tue-nhan-tao-thiet-lap-co-che-kiem-soat-lua-dao-cong-nghe-cao-post936369.html | Same duty named for chatbots and automated customer care; effective 01/3/2026 | Confirmed |
| S68 Thư viện Pháp luật, Luật 91/2025/QH15 | https://thuvienphapluat.vn/van-ban/Bo-may-hanh-chinh/Luat-Bao-ve-du-lieu-ca-nhan-2025-so-91-2025-QH15-625628.aspx | Điều 9: "Sự im lặng hoặc không phản hồi không được coi là sự đồng ý"; Điều 38: effective 01/01/2026 | Confirmed through ego-browser (WebFetch returned 403). The Điều 2 definition text was not captured in this pass |
| S8 Báo Chính phủ | https://baochinhphu.vn/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-tu-ngay-mai-1-1-2026-102251231155609721.htm | Personal Data Protection Law in force 01/1/2026 | Confirmed. The article does not state the silence clause; S68 does |
| S11 Tuổi Trẻ PLO | https://tuoitre.vn/plo/xu-ly-du-lieu-ca-nhan-nhieu-thay-doi-lon-tu-ngay-1-1-2026-nguoi-dan-can-biet-post889644.html | Consent must be explicit for listed purposes | Partly confirmed. It does not say "silence is not consent" verbatim; that clause now rests on S68 |
| S9 VnEconomy | https://vneconomy.vn/nhung-diem-moi-trong-luat-bao-ve-du-lieu-ca-nhan-tu-112026.htm | Breach notice to the specialised authority within 72 hours of discovery, for breaches that can cause the listed harms | Confirmed. The number stays out of the kit (D11) |
| S45 LuatVietnam | https://luatvietnam.vn/thue-phi-le-phi/cach-xu-ly-hoa-don-dien-tu-sai-sot-565-33904-article.html | Nghị định 70/2025: wrong name or address with correct tax code is notified, not reissued; wrong tax code, amount, rate is adjusted or replaced after a written agreement | Confirmed |
| S7 Bộ KH và CN (mst.gov.vn) | https://mst.gov.vn/tu-hom-nay-0110-cam-tu-y-nhan-tin-goi-dien-quang-cao-197144805.htm | Nghị định 91/2020: no promotional message or call to a number that refused; message hours, call hours and daily counts | Confirmed. Effective 01/10/2020 |
| S59 VnExpress | https://vnexpress.net/goi-dien-nhan-tin-quang-cao-sai-gio-co-the-bi-phat-100-trieu-dong-5115021.html | Nghị định 330/2026/NĐ-CP Điều 37: three messages, three emails, one call per 24 hours; hours; individual fine 30 to 50 triệu, organisation double; effective 19/8 | Confirmed. Fines are not copied into the kit |
| S60 LuatVietnam, Nghị định 330/2026/NĐ-CP | https://luatvietnam.vn/vi-pham-hanh-chinh/nghi-dinh-330-2026-nd-cp-xu-phat-vi-pham-hanh-chinh-trong-an-ninh-mang-va-bao-ve-du-lieu-445214-d1.html | The form's fine for sending without consent | **Not confirmed.** The fetched text stopped at Điều 26 and never reached Điều 37. Treat the form's figure as unverified; it is rejected from the kit anyway |
| S48 Báo Công Thương | https://congthuong.vn/google-maps-cong-cu-that-hay-ao-trong-kinh-doanh-fb-379908.html | Google deletes inauthentic reviews; a business that buys reviews or gives incentives can lose all reviews, the review feature or its map listing | Confirmed |

Not re-opened, index viewing date 23/09/2026, claims not widened: S47 (replaced by S61 and S62), S20 (replaced by S52), S12 (S13 and S55 carry it), S2, S5, S6, S64, S65 (the consent rule adopted in A6-04 rests on S7, S59 and S68), S46, S44, S14, S15, S16, S17, S18, S24, S25, S49, S50, S51, S57, S67, and every vendor page. Each DEFER below names the source its routine writer must re-open before adopting.

## Platform terms re-opened (D13)

A routine that reads a marketplace or social platform follows these verdicts. The kit's reading is always the member's own account, and only the member's own customers' messages, orders, returns and reviews.

| Platform | Terms opened 24/09/2026 | Clause | Verdict for this kit |
|---|---|---|---|
| Shopee | Điều Khoản Dịch Vụ, https://help.shopee.vn/portal/4/article/77243 (ego-browser) | 3.1: no robot, spider, "hay bất kỳ thiết bị tự động hoặc phương thức thủ công nào để theo dõi, thống kê, thu thập hoặc sao chép Nội Dung của Shopee khi chưa có sự đồng ý trước bằng văn bản của Shopee" | **Tracking and collecting Shopee pages is not allowed.** No listing, shop or competitor capture of any kind. The sweep reads only the member's own Kênh Người Bán chat, returns and order reviews, preferably through a connector the member authorised (Shopee Open Platform or an aggregator such as Pancake); browser reading of Kênh Người Bán stays one ticket at a time for the member's own orders, and the capability route stays `unknown` until the member confirms it |
| Facebook, Instagram (Meta) | Điều khoản dịch vụ, https://vi-vn.facebook.com/legal/terms, effective 01/01/2025 | "Bạn không được truy cập hoặc thu thập dữ liệu từ Sản phẩm của chúng tôi bằng các phương tiện tự động (khi chưa được chúng tôi cho phép trước)... bất kể việc truy cập hoặc thu thập tự động đó có được thực hiện khi đăng nhập vào tài khoản Facebook hay không" | **Automated access or collection is not allowed, logged in or not.** Fanpage inbox and comments enter the kit only through a Meta authorised connector the member connected (Pancake, Harasocial) or text the member pastes. No browser sweep of Facebook, no reading of customer groups |
| TikTok Shop | Điều khoản dịch vụ dành cho người bán, https://seller-vn.tiktok.com/university/essay?knowledge_id=2581017870255874, updated 09/02/2026 | "Dữ Liệu Từ TikTok Shop" (data received through platform messaging) may be used only to process and fulfil orders and to handle refunds, cancellations, requests or complaints about an order; any other purpose is forbidden | **Complaint handling is allowed; any other use is not.** Tickets from TikTok Shop chat may be captured and answered. That data never feeds a churn dossier's save message, a renewal, a promotion or a broadcast. No explicit automation clause was found in the text read, so browser reading stays own account and one ticket at a time |
| Lazada | Điều Khoản Sử Dụng, https://cdn.contract.alibaba.com/terms/common_platform_service/20260713175157767/20260713175157767.html?lng=vi, updated 21/07/2026, effective 29/07/2026 | 4.2: no content "được lưu trữ trong hệ thống thông tin... mà không được sự cho phép trước bằng văn bản của Lazada"; the seller may access "dữ liệu liên quan trực tiếp đến hoạt động kinh doanh" | **Copying Lazada content into another system is not allowed without written permission; the seller's own business data is.** Only the member's own orders, returns and customer messages; no listing content. No robot clause located |
| Zalo | Điều khoản sử dụng, https://zalo.vn/dieukhoan/ (no date captured) | 4.7: forbids logging in or using the service through third party software or a system not developed or authorised by Zalo | **No personal Zalo automation** (matches D10). Zalo OA only through official OA tools; every OA send is held |
| Google Maps | Điều khoản dịch vụ bổ sung, https://www.google.com/intl/vi/help/terms_maps/, modified 04/06/2025 | Forbids "tải xuống hàng loạt hoặc tạo nguồn cấp dữ liệu khối lượng lớn của nội dung" | **No bulk extraction.** The member's own Business Profile reviews only, read as the member would read them |

## Clause decisions

Decisions: ADOPT (sourced or `[CG]` rule, lands in the named routines or files when they are localized), MOVE (sourced route or schedule data), KEEP (inherited rule, no change), WORDING (owner facing presentation only), EXAMPLE (fictional only), DEFER (belongs to the named routine's Phần B, which must carry its own support), REJECT (conflicts with the repo), UNVERIFIED (no support; proposal only). A marker covers only its own clause. Numbers from laws and platforms never enter a routine body (D11); where a routine needs one, it reads it from a member owned file with source and date.

### A1. Author (lines 56 to 62)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A1-01 | 56 to 62: an AI sub agent wrote the form; no real person, no experience, no account operated | none | KEEP | Every variant report, Identity section | Report fact. Never present an AI draft as expert testimony |

### A2. Work in Vietnam (lines 64 to 94)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A2-01 | 69 to 76, column "Tên gọi ở VN": Vietnamese names of the eight routines | none | WORDING | `_shared/glossary.md` | Display names only; ids, folders and YAML `name` never change |
| A2-02 | 69 intake: once per new shop, review on day 02 each month and when a platform or law changes; 4 to 6 hours first time | none | UNVERIFIED | none | Row stays `first-weekday`, which already covers day 02; event driven re-runs have no support |
| A2-03 | 70 sweep every 15 minutes, 08:00 to 22:00, seven days; night passes at 22:30 and 07:30 | none | UNVERIFIED | none | Unmarked clock times never move a row. Also `daily` and `sun` are absent from the closed `days` vocabulary (CONTRACT 1.2) and a row fires once per period |
| A2-04 | 71 reply desk through the shift; urgent draft in 5 minutes, normal in 15 | none | UNVERIFIED | none | Unmarked |
| A2-05 | 72 churn watch 11:00 on shift days; extra 17:00 pass in sale seasons and 7 days after Tết | none | UNVERIFIED | none | Unmarked; one fire per period |
| A2-06 | 73 deflection Wednesday 10:00; fix within 24 hours when a question repeats 8 times in 7 days | none | UNVERIFIED | none | Row stays `wed`; the 8 in 7 threshold is a B-5 proposal |
| A2-07 | 74 taxonomy on the last working day at 14:00 | none | KEEP | `SCHEDULE.md` row unchanged | Already `last-weekday` 14:00 |
| A2-08 | 74 extra taxonomy pass after 11.11 and after mùng 6 Tết | none | UNVERIFIED | none | Unmarked; one fire per month |
| A2-09 | 75 weekly report Friday 16:30, week closes Friday 16:00 to Friday 16:00 | none | UNVERIFIED | none | Row stays `fri` 16:00 with ISO week key; a Friday to Friday window would break `YYYY-Www` |
| A2-10 | 76 standup 07:50 on shift days, Saturday and Sunday included | none | UNVERIFIED | none | Unmarked; `sun` absent from vocabulary |
| A2-11 | 69 to 76, column "Giao AI?": sweep and standup "AI tự làm", the other six "AI soạn, người duyệt" | none | KEEP | Guardrail 1, CONTRACT 7 | Matches the original: file work owned, every outbound action held |
| A2-12 | 82 confirm every unpaid Facebook or Zalo COD order before delivery | none | UNVERIFIED | none | New task, no routine owns order confirmation |
| A2-13 | 82 marketplace orders confirmed only inside marketplace chat, and only when the shop's 7 day return rate is above 15% | [CG] | DEFER | `csat-desk-intake` (records the owner's threshold in `strategy/policy-limits.md`), `csat-reply-desk` (B-3 decides if a confirmation is a queue entry) | Owner approved, but order confirmation is new work that needs a B section behind it |
| A2-14 | 82 high consequence from 500.000đ | none | UNVERIFIED | none | Unmarked figure |
| A2-15 | 83 marketplace return request: seller must respond within 02 calendar days, else automatic refund | [S19] | ADOPT | `csat-inbox-sweep` (a return request is a ticket that carries the platform deadline read from the page), `csat-desk-standup` (surfaces it under `Waiting on you`), `csat-desk-intake` (transcribes the marketplace policy into `## Published refund policy` with URL and date) | S19 confirmed. The routine names "the platform's response deadline shown on the request"; the number lives in the transcribed policy |
| A2-16 | 83 authority "Không, luôn chuyển người" | none | KEEP | CONTRACT 2.4 `member-action` | Accepting or refusing a return is the member's press |
| A2-17 | 84 answer reviews and public comments without pulling the customer to Zalo; off platform contact gets the chat locked | [S21] | ADOPT | `csat-reply-desk`, `csat-deflection-desk` | S21 confirmed. Same rule as A6-01 |
| A2-18 | 84 answer a 1 to 2 star review within 60 minutes in shift | none | UNVERIFIED | none | Unmarked target |
| A2-19 | 85 warn a customer targeted by a fake shipper or fake refund; point them into the platform app; trigger words OTP, QR, phí thu hồi, unfamiliar STK | [S43] | ADOPT | `csat-inbox-sweep` (B-2 names the severity rule id), `csat-reply-desk` (the draft points to the platform's own order screen and asks for nothing) | S43 confirmed, including QR and advance fee |
| A2-20 | 86 reconcile refunds by the original payment path | none | UNVERIFIED | none | New task; its authority ("always a person") already matches the guardrail |
| A2-21 | 87 address fixes after 01/07/2025: drop district, write ward or commune and the new province | [S47] | ADOPT | `csat-reply-desk` (asks the customer for the new format, never invents a ward), `csat-desk-intake` (warehouse address) | Re-checked on S61 and S62 |
| A2-22 | 88 sale day shifts 9.9 to 12.12 plus 15 days after; chat 12 hour limit and rate under 80% | [S19][S46][S52] | DEFER | `csat-desk-intake` (sale calendar under `## Working days and hours`), `csat-satisfaction-report` (B-7), `csat-desk-standup` (B-8) | S19 and S52 confirmed their own clauses; the 15 day sale window is an inference joining them, S46 not re-opened; shift lengths unmarked |
| A2-23 | 89 transcribe voice messages and product photos into text | none | UNVERIFIED | none | Unmarked; B-2 may carry support |
| A2-24 | 90 renewal reminders by ZBS inside the OA Broadcast limits; Nghị định 91/2020 | [S51][S50][S6][S7] | DEFER | `csat-churn-watch` (B-4), `CAPABILITIES.md` (Zalo OA route, read only, `unknown`) | A reminder is an outbound send, held; S50, S51 must be re-opened by the B-4 writer; the broadcast counts and hours stay out of the kit (D11) |
| A2-25 | 94 first tasks for the AI: sweep, drafts for price, size, shipping and hours, the morning brief; not yet: returns, refunds, ZNS, public 1 star replies | none | KEEP | Guardrail 1 | The original already works this way |

### A3. Vietnam specifics (lines 102 to 109)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A3-01 | 102 COD is the dominant habit; 77,5% of e-commerce buyers choose COD (15/06/2025) | [S44] | WORDING | this report only | Market context; the figure never enters the kit |
| A3-02 | 102 example: a 350.000đ Facebook order refused at the door | [CG] | EXAMPLE | `examples/` of `csat-churn-watch` or `csat-reply-desk`, marked fictional | Presentation only |
| A3-03 | 102 confirm every off marketplace order once before delivery | none | UNVERIFIED | none | Same as A2-12 |
| A3-04 | 102 ask the owner whether a high value order from a new customer needs a 10 to 30% deposit | [S46] | DEFER | `csat-desk-intake` (B-1, the A7-11 question) | S46 not re-opened; the deposit is the owner's answer, never a default |
| A3-05 | 102 the 1.000.000đ threshold for that question | none | UNVERIFIED | none | The marker covers the deposit range, not this figure |
| A3-06 | 102 never write "bom" in text the customer reads | none | WORDING | `csat-reply-desk` drafts; `strategy/tone.md` candidate | Wording only |
| A3-07 | 103 customers write without diacritics and in teencode; read it as written, answer short and with diacritics, never ask them to rewrite | none | WORDING | `csat-reply-desk`, `csat-inbox-sweep` (verbatim stays as written) | Presentation; creates no rule |
| A3-08 | 103 voice and photos are mandatory inputs; email is not a retail complaint channel | none | UNVERIFIED | none | The email role is carried by A5-41 `[CG]` |
| A3-09 | 104 default "Dạ anh/chị", shop is "em", follow the customer's own form of address; never "bạn" or "quý khách" to a retail customer | none | WORDING | `strategy/tone.md` `## Samples` via `csat-desk-intake`; A7-03 | Presentation |
| A3-10 | 104 South "dạ", North adds "vâng", unknown region "dạ" | [CG] | ADOPT | `csat-desk-intake` (default in `strategy/tone.md`), `csat-reply-desk`, `csat-deflection-desk` | Owner approved wording default; not a law, number or platform rule |
| A3-11 | 105 from 01/07/2025: 34 provinces, 3.321 communes, district level ended | [S47] | ADOPT | as A2-21 | Confirmed on S61 and S62; numbers stay in the report |
| A3-12 | 105 never invent a new ward name; ask the customer when unsure | none | KEEP | kit wide "never invent" rule | Inherited principle |
| A3-13 | 106 fake refund scam: scammer knows the order, asks for STK, OTP, QR or a fee; Shopee refunds happen in "Đơn mua" | [S43] | ADOPT | `csat-inbox-sweep`, `csat-reply-desk`, `csat-deflection-desk` (a macro for this theme) | S43 confirmed |
| A3-14 | 106 outside a marketplace, a refund goes only to the paying account, pressed by an authorised person | none | KEEP | CONTRACT 2.4 `member-action` | Refunds are never pressed by a routine |
| A3-15 | 107 marketplace chat counts weekends and holidays; a valid reply is manual within 12 hours; Shop Yêu thích 80%, Yêu thích+ 90% | [S52] | ADOPT | `csat-inbox-sweep` (marketplace chat items carry the platform clock), `csat-desk-standup` (clock against the platform window), `csat-reply-desk` (marketplace chat ranks first when its window is closing), `csat-desk-intake` (writes the platform window into `## Response target` with URL and date) | S52 confirmed, including weekends and holidays and the exclusion of automatic messages |
| A3-16 | 107 sending a phone number or Zalo, abbreviations included, counts as an off platform deal from 16/06/2025 | [S21] | ADOPT | as A6-01 | S21 confirmed |
| A3-17 | 107 vacation mode stops the chat rate | [S53] | DEFER | `csat-inbox-sweep` (B-2), `csat-desk-standup` (B-8) | S53 confirmed; how a vacation period is recorded belongs to those B sections |
| A3-18 | 108 sale peaks: 10 of 100 orders returned, fashion 15% on 11.11 | [S46] | WORDING | this report only | Context; not re-opened; no figure enters the kit |
| A3-19 | 108 Shopee: 15 days to return, 24 hours for fresh food | [S19] | ADOPT | `csat-desk-intake` (`## Published refund policy`, verbatim with URL and date), `csat-reply-desk` (a remedy is measured against it) | S19 confirmed |
| A3-20 | 108 separate shift calendar for sale days and 15 days after; do not call a sale week "CSKH kém" against a normal week when orders rose 50% | none | UNVERIFIED | none | B-7 proposal |
| A3-21 | 109 every complaint must be acknowledged within 03 working days (Luật 19/2023 Điều 31 khoản 2) | [S4] | ADOPT | `csat-reply-desk` (an acknowledgement draft for any complaint not answered in full), `csat-desk-standup` (a ticket nearing the acknowledgement date is listed) | S3 and S4 confirmed; applies to all complaints. The number stays out of the routine (D11); the routine reads the legal acknowledgement deadline the intake records in `strategy/policy-limits.md` |
| A3-22 | 109 public comments and 1 to 2 star reviews are urgent in shift; answer short in public and move details to the same platform's inbox | none | UNVERIFIED | none | Urgency ranking unmarked; the "not to Zalo from a marketplace" half is A3-16 |

### A4. Role terms (lines 116 to 138)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A4-01 to A4-23 | 116 to 138: inbox/ib, cmt, rep, seen, OA, ZNS/ZBS, COD, bom/boom, hoàn, ck/stk, 1 sao, Shop Yêu thích, FRT, chốt đơn, hỏa tốc, ad, sp, ntn, fake, tra soát, phiếu/ticket, mẫu trả lời, ngoài sàn (23 terms) | mixed | WORDING (23) | `_shared/glossary.md` | Vocabulary for owner facing wording and for reading customer text; machine statuses unchanged |
| A4-24 | 120 OA Manager sends consult messages up to 365 days, OpenAPI 7 days | [S50] | DEFER | `CAPABILITIES.md` Zalo OA route, `csat-reply-desk` (B-3) | S50 not re-opened; platform number stays out of the kit |
| A4-25 | 121 ZBS is the new name of ZNS; consult messages free within 48 hours, 55đ outside | [S15][S49][S50] | DEFER | `csat-churn-watch` (B-4), `CAPABILITIES.md` | Not re-opened; a paid send is held; the price is never a kit default |
| A4-26 | 128 FRT: blog S18 suggests under 5 minutes for retail, explicitly "not a commitment of the form" | [S18] | UNVERIFIED | none | The form itself disowns it as a target; `## Response target` stays the member's own answer |

### A5. Tools and channels (lines 143 to 236)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A5-01 | 145 email is a side channel for invoices, contracts, written complaints; Getfly sends email from CRM | [S39] | MOVE | `CAPABILITIES.md` mailbox route candidates, read only, `unknown` | Vendor feature, no rule |
| A5-02 | 145 never attach a CCCD or a full account number | none | KEEP | CONTRACT 2.5 redaction at capture | Inherited |
| A5-03 | 146 Outlook rarely used as a desk | none | UNVERIFIED | none | Original route kept |
| A5-04 | 147 Pancake (API, webhook), Harasocial in place of Intercom | [S26][S33] | MOVE | `CAPABILITIES.md` helpdesk and aggregator routes, read only, `unknown` | Vendor pages; also the Meta authorised route in the D13 table |
| A5-05 | 147 lock the send button until approved | none | KEEP | Guardrail 1 | Inherited |
| A5-06 | 148 Subiz as a Help Scout substitute | [S27] | MOVE | `CAPABILITIES.md` | Vendor |
| A5-07 | 148 Subiz yearly prices | [S27] | REJECT | report only | A vendor price is never a kit default |
| A5-08 | 149 Pancake or Harasocial as a shared inbox for many pages | none | UNVERIFIED | none | Covered by A5-04 |
| A5-09 | 150 Getfly, Bizfly for SMEs with contracts | [S39][S40] | MOVE | `CAPABILITIES.md` | Vendor |
| A5-10 | 150 a ZNS is an outbound paid message | none | KEEP | Guardrail 1 | Held send |
| A5-11 | 151 CareSoft for call centre and tickets | [S38] | MOVE | `CAPABILITIES.md` | Vendor |
| A5-12 | 152 reviews live on Shopee, TikTok Shop, Lazada, Google Maps, food apps; Trustpilot not used | [S48] | MOVE | `csat-desk-intake` (review surfaces in `strategy/channels.md`, channel `review` or `marketplace`), `CAPABILITIES.md` | S48 confirmed for Google Maps; each surface is read under its D13 verdict |
| A5-13 | 152 never buy stars | [S48] | ADOPT | as A6-07 | S48 confirmed |
| A5-14 | 153 app store reviews only when the SME has an app | none | KEEP | `strategy/channels.md` | A surface is swept only when listed |
| A5-15 | 154 marketplace listings, Q&A, reviews and chat in the seller centres; platform APIs limited and never simulated | none | MOVE | `csat-desk-intake`, `CAPABILITIES.md` | Supported by the platform terms re-opened above; own account only |
| A5-16 | 154 editing a price and pressing a refund are money actions | none | KEEP | Guardrail 1 | Inherited |
| A5-17 | 155 internal Zalo group replaces Slack; the AI never posts there | none | KEEP | `notify.push`, `brief.deliver` unchanged (D10) | Matches D10 |
| A5-18 | 156 read Facebook and Zalo customer groups when the owner is a member and allows it | none | REJECT | none | Meta terms (automated access) and Zalo terms 4.7 forbid it for an automated reader (D13); the member reads groups |
| A5-19 | 157 LinkedIn not used | none | KEEP | `strategy/channels.md` | Not listed, not swept |
| A5-20 | 158 fanpage, TikTok, Zalo OA, Instagram through Pancake or Harasocial; Botcake channel list from its Vietnamese page | [S26][S33][S58] | MOVE | `CAPABILITIES.md` | Vendor; Facebook only through an authorised connector (D13) |
| A5-21 | 159 money arrives by COD, bank transfer, MoMo, ZaloPay, VNPay, marketplace wallet; the owner names the gateway | none | UNVERIFIED | none | Unmarked list; refunds stay locked (KEEP by Guardrail 1) |
| A5-22 | 160 Paddle not used | none | KEEP | none | Nothing to change |
| A5-23 | 161 renewals tracked in Getfly, Bizfly, Haravan or an owner file | none | UNVERIFIED | none | B-4 decides the churn surfaces |
| A5-24 | 162 analytics in seller centres, Meta Business Suite, TikTok Analytics, read only | none | UNVERIFIED | none | Unmarked |
| A5-25 | 163 orders live in the marketplace, Haravan or an owner spreadsheet; never edit source data | none | UNVERIFIED | none | Unmarked; "never edit" is already the kit's rule |
| A5-26 | 164 help content lives in pinned posts, OA notes, marketplace Q&A, an internal Google Doc; publishing needs approval | none | UNVERIFIED | none | Placement covered by A5-44; publish is already `member-action` |
| A5-27 | 165 many shops have no website; policies sit in marketplace descriptions, fanpage cover, OA posts | none | UNVERIFIED | none | B-1 decides where intake reads policies |
| A5-28 | 166 phone systems OMICall, Stringee, CareSoft | [S36][S37][S38] | MOVE | `CAPABILITIES.md`, read only, `unknown` | No routine places a call |
| A5-29 | 166 OMICall per user prices | [S37] | REJECT | report only | Vendor price |
| A5-30 | 166 a call recording tied to a customer's phone number is personal data | [S68][CG] | ADOPT | `csat-inbox-sweep` (a transcribed call is captured with the same redaction, stays in `«CSAT_ROOT»`, never quoted in a run record) | S68 confirmed (law in force 01/01/2026); mostly the existing CONTRACT 2.5 and 4.2 rules |
| A5-31 | 166 state the purpose and play a notice before recording | none | UNVERIFIED | none | S30 is named without a marker; no routine records calls |
| A5-32 | 167 Zalo OA message types, 48 hour free window, 55đ outside, OA Manager 365 days, OpenAPI 7 days, Broadcast limits, ZBS 400 characters | [S49][S50][S51][S15] | DEFER | `CAPABILITIES.md` (Zalo OA route, read only, `unknown`), `csat-reply-desk` (B-3), `csat-churn-watch` (B-4) | Not re-opened; every number stays out of the kit (D11) |
| A5-33 | 167 do not use the 2023 figures (8 messages in 48 hours, 165đ) | [S14] | REJECT | report only | Superseded figures never enter the kit |
| A5-34 | 167 a ZBS send costs the OA money and reaches the customer: locked | none | KEEP | Guardrail 1 | Held |
| A5-35 | 168 Messenger 24 hour window (vendor docs 2020), Human Agent tag 7 days (Sapo); no send beyond 24 hours without permission | [S16][S17][S67] | DEFER | `csat-reply-desk` (B-3) | Not re-opened; no Meta page confirms it; drafts are sent by a person anyway |
| A5-36 | 169 Shopee chat valid reply within 12 hours, weekends and holidays counted; return response within 02 calendar days | [S20][CG][S19] | ADOPT | as A2-15 and A3-15 | Confirmed on S52 and S19 |
| A5-37 | 170 TikTok Shop response rate counts sessions answered within 12 hours; an unprocessed return is approved | [S22][S23] | ADOPT | `csat-inbox-sweep`, `csat-reply-desk`, `csat-desk-standup` | S22 and S23 confirmed |
| A5-38 | 170 sellers bear return and cancellation fees from 01/04/2026 | [S24] | DEFER | `csat-satisfaction-report` (B-7) | Not re-opened; context for the product change, never a kit number |
| A5-39 | 171 Lazada returns 7 to 15 days by brand, refund 1 to 4 working days, from a GHN blog | [S25] | UNVERIFIED | none | Not Lazada's own page. Lazada's return terms (updated 21/07/2026) were opened for D13 and show a 24 hour window for broken or missing items; the 7 to 15 day claim was not found there |
| A5-40 | 171 Lazada seller hotline number and per minute price | [S57] | REJECT | report only | A phone number and a price are not kit defaults |
| A5-41 | 176 A5.1: channel order for retail: marketplace chat, Facebook inbox and comments, Zalo OA or the owner's Zalo, TikTok live comments, calls and voice; email is secondary (invoices, contracts, B2B); "mail" from a customer usually means a tax code for an invoice | [CG] | ADOPT | `csat-desk-intake` (order of surfaces in `strategy/channels.md`; a mailbox is no longer assumed to be the primary surface), `csat-inbox-sweep` (sweep order) | Owner approved. The owner's personal Zalo is never automated (D10, Zalo 4.7) |
| A5-42 | 181 A5.2: aggregator list and their channels | [S26][S33][S34][S27][S58] | MOVE | `CAPABILITIES.md` | Vendor |
| A5-43 | 181 A5.2: prices (Haravan range, Subiz) | [S34][S27] | REJECT | report only | Vendor prices |
| A5-44 | 181 A5.2: a one person shop works in the Zalo app and the seller centre, no software | none | UNVERIFIED | none | Unmarked |
| A5-45 | 186 A5.3: where Vietnamese customers leave public reviews; Google removes fake reviews | [S48] | MOVE | `csat-desk-intake` (`strategy/channels.md`) | S48 confirmed |
| A5-46 | 186 A5.3: a 1 star on the order weighs more than a Facebook post | none | UNVERIFIED | none | Unmarked |
| A5-47 | 191 A5.4: customer groups, admins, no mass friending, closed groups only if the shop account was admitted, answer a public complaint post once | none | UNVERIFIED | none | Unmarked; any automated reading is rejected by A5-18 |
| A5-48 | 196 A5.5: payment and debt systems; Getfly, Bizfly for B2B and plans | [S39][S40] | MOVE | `CAPABILITIES.md` (account and billing surface candidates, read only) | Vendor |
| A5-49 | 196 A5.5: care staff see order code, amount, paid state; never a bank password or OTP; renewals reminded, never charged automatically | none | KEEP | Guardrail 2, Guardrail 1 | Inherited |
| A5-50 | 201 A5.6: signals a customer is still active: last order, delivery date, warranty, messages in 30 days, plan state | none | UNVERIFIED | none | B-4 proposal |
| A5-51 | 201 A5.6: with no usage data write "chưa có dữ liệu dùng", never guess the customer left | none | KEEP | kit wide `n/a` honesty | Inherited |
| A5-52 | 206 A5.7: self help lives in fanpage pinned posts, marketplace descriptions, TikTok Shop FAQ, OA welcome message, an internal Google Doc; the AI drafts, never publishes | [S22] | MOVE | `csat-desk-intake` (`## Help center` in `strategy/product.md` lists these surfaces), `csat-deflection-desk` (help draft targets) | S22 confirmed for TikTok Shop FAQ; publish stays `member-action` |
| A5-53 | 206 A5.7: owner or shift lead updates monthly and on price or policy change | none | UNVERIFIED | none | Unmarked |
| A5-54 | 211 A5.8: which comments are support tickets (keywords order, ship, hoàn, lỗi, fake, size, còn hàng; live stream questions; reviews with text; tags) | none | UNVERIFIED | none | B-2 decides |
| A5-55 | 216 A5.9: after 22:00 only four cases; viral comment threshold 20 replies or shares in 30 minutes; reminder after 10 minutes; the person on duty calls | [CG] on the threshold | REJECT | none | CONTRACT 9.1 closes push to four cases and D10 keeps push off Zalo. A viral comment may be a brief line if B-8 supports it |
| A5-56 | 216 A5.9: platform deadline under 60 minutes, cited to S19 | [S19] | UNVERIFIED | none | S19 supports 02 calendar days only, not a 60 minute alarm |
| A5-57 | 221 A5.10: shift lead approves money lines up to a ceiling, 200.000đ only once the owner typed agreement, otherwise 0đ; above it the owner | [CG] | ADOPT | `csat-desk-intake` (asks for each role's ceiling into `## What you will grant without asking`; records nothing until the owner types it), `csat-reply-desk` (`above the recorded limit, your call` above it) | Owner approved; 200.000đ is never a shipped default |
| A5-58 | 221 A5.10: who may send what, the must approve list, approval within 5 or 15 minutes, a holding line when late | none | UNVERIFIED | none | Unmarked; a holding line is a send |
| A5-59 | 226 A5.11: online shops staff 08:00 to 22:00 every day because marketplace chat counts holidays | [S20][CG] | ADOPT | `csat-desk-intake` (`## Working days and hours` question and fallback), `csat-desk-standup` (reads it) | S52 confirms weekends and holidays count. `SCHEDULE.md` rows do not move: `daily` and `sun` are outside the closed vocabulary, and a `sat` row needs a B2 source |
| A5-60 | 226 A5.11: Tết, mùng 1 to mùng 3 urgent only, mùng 4 to mùng 6 09:00 to 17:00 unless the owner says otherwise | [CG] | ADOPT | `csat-desk-intake` (Tết block in `## Working days and hours`), `csat-desk-standup` | Owner approved |
| A5-61 | 226 A5.11: venue businesses plus 30 minutes after closing; B2B Monday to Friday 08:00 to 17:30 | none | UNVERIFIED | none | Unmarked |
| A5-62 | 231 A5.12: tools read, with API notes | [S26][S33][S27][S58][S36][S37][S38][S39][S40] | MOVE | `CAPABILITIES.md` | Same as A5-42 |
| A5-63 | 236 A5.13: alert channel and hours, four night cases, one reminder, three messages per case, the AI never calls, copy the owner's decision into the ticket | none | REJECT | none | Conflicts with CONTRACT 9 and D10; "the AI never calls" is already true |

### A6. Absolute prohibitions (lines 244 to 251)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A6-01 | 244 never send a phone number, Zalo or an outside order link in Shopee, TikTok Shop or Lazada chat, abbreviations and emoji included | [S21] | ADOPT | `csat-reply-desk`, `csat-deflection-desk` (macros for marketplace channels), `csat-desk-intake` (marketplace section of `strategy/tone.md`) | S21 confirmed |
| A6-02 | 245 never ask for or accept OTP, bank password, CVV, both sides of a CCCD; never tell a customer to scan a QR or pay a "refund fee" | [S43] | ADOPT | `csat-reply-desk`, `csat-deflection-desk`; candidate for the variant `CONTRACT.md` at Gate 8 | S43 confirmed |
| A6-03 | 246 never promise compensation, press a refund or change a wallet balance; Luật 19/2023 binds the shop to what it announced; a sent message survives the 07 working day negotiation | [S3][S2] | ADOPT | `csat-reply-desk` (the remedy block and apology policy already hold this; the report adds the Vietnamese basis) | S3 confirmed (Điều 10); the 07 day figure (S2, not re-opened) stays out |
| A6-04 | 247 no promotional message or call without prior consent or outside the permitted hours; Nghị định 91/2020 still applies, replacement draft expected 01/01/2027; [QC] or [AD] label and an identified sender | [S5][S6][S7][S59][S64][S65] | ADOPT | `csat-churn-watch`, `csat-reply-desk`, `csat-deflection-desk`: a draft carrying promotional content to a customer with no recorded consent is marked as such and never sent by a routine | S7 and S59 confirmed; hours, counts and labels stay out of the kit (D11) |
| A6-05 | 247 fines under Nghị định 330/2026 | [S60][S59] | REJECT | report only | A fine is never copied (form map A6, D11); S60 could not be confirmed |
| A6-06 | 248 never let a bot pass as a person; AI law in force 01/03/2026, Điều 11 | [S12][S13] | ADOPT | `csat-deflection-desk` (a macro or script a bot sends says it is automated), `csat-reply-desk` (no change: a person sends) | S13 and S55 confirmed |
| A6-07 | 250 never buy 5 stars, trade gifts for stars, or require a customer to pick a return reason "so the shop is not penalised" | [S48] | ADOPT | `csat-reply-desk`, `csat-deflection-desk`, `csat-churn-watch` (a save never offers a reward for a rating) | S48 confirmed |
| A6-08 | 249 never post a customer's phone, home address or order photo in public; PDP law in force 01/01/2026, silence is not consent; 72 hour breach notice | [S8][S11][S9] | ADOPT | `csat-reply-desk` (`P-nn` community entries), `csat-deflection-desk` | S8, S68 and S9 confirmed; the 72 hours stay out; a suspected breach is a brief line and a member action |
| A6-09 | 251 never issue, edit or cancel an e-invoice; Nghị định 70/2025 | [S45] | ADOPT | `csat-reply-desk` (an invoice correction is a `member-action` card naming which case applies), `CAPABILITIES.md` (held) | S45 confirmed |

### A7. Intake fields (lines 258 to 270)

| Id | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| A7-01 | 258 shop name, category, channels in use | none | KEEP | `strategy/product.md` `## What is sold`, `strategy/channels.md` | Existing intake work |
| A7-02 | 259 shift hours, days off, Tết and sale days; fallback 08:00 to 22:00 all week, then ask again | [CG] | ADOPT | `csat-desk-intake` (`## Working days and hours`; the fallback is written as an assumption the brief surfaces) | Owner approved |
| A7-03 | 260 forms of address and banned words, default dạ, em, anh, chị | none | WORDING | `strategy/tone.md` via `csat-desk-intake` | Presentation |
| A7-04 | 261 published return and warranty policy verbatim with date, re-read on day 02 | none | KEEP | `## Published refund policy`, monthly re-read | Existing |
| A7-05 | 262 money each role may approve; missing means no promise at all | none | KEEP | `## What you will grant without asking`, `above the recorded limit, your call` | Existing |
| A7-06 | 263 channels and who is on duty; no passwords; access through the aggregator | none | KEEP | Guardrail 2 | Existing |
| A7-07 | 264 approved phrases; the bot uses only these | none | UNVERIFIED | none | B-5 decides whether macros become the approved set |
| A7-08 | 265 price list, SKU, sizes, shipping fees | none | UNVERIFIED | none | A new file needs a writer and a reader in `CONTRACT.md` |
| A7-09 | 266 emergency Zalo number and the number to call after 22:00 | none | REJECT | none | The kit stores no contact number and pushes never go to Zalo (D10) |
| A7-10 | 267 warehouse address in the new units, no district | [S47] | ADOPT | `csat-desk-intake` | Confirmed on S61 and S62 |
| A7-11 | 268 COD thresholds: which orders to confirm, which need a deposit (10 to 30% suggested) | [S46] | DEFER | `csat-desk-intake` (B-1), `csat-churn-watch` (B-4) | S46 not re-opened; the owner's answer only |
| A7-12 | 269 software, call centre and plan names; blank means never invent one | none | KEEP | `CAPABILITIES.md` | Existing "never invent" rule |
| A7-13 | 270 internal channel for alerts and the brief; an OA message to the owner is paid; a personal Zalo group has no stable API | [S49] | REJECT | none | Zalo as a `notify.push` or `brief.deliver` route conflicts with D10 and STYLE-VI Channels; the original routes stay |

## Decision counts

| Decision | Count |
|---|---|
| ADOPT | 29 |
| DEFER | 11 |
| UNVERIFIED | 40 |
| KEEP | 23 |
| WORDING | 30 |
| MOVE | 14 |
| EXAMPLE | 1 |
| REJECT | 11 |
| Total | 159 |

A4-01 to A4-23 count as 23 WORDING rows.

## What each routine writer inherits from Phần A

| Routine | ADOPT rows | DEFER rows to settle with its own Phần B |
|---|---|---|
| `csat-desk-intake` (B-1) | A2-15, A2-21, A3-10, A3-15, A3-19, A3-21 (records the deadline), A5-41, A5-57, A5-59, A5-60, A6-01, A7-02, A7-10 | A2-13, A2-22, A3-04, A7-11 |
| `csat-inbox-sweep` (B-2) | A2-15, A2-19, A3-13, A3-15, A5-30, A5-37, A5-41 | A3-17 |
| `csat-reply-desk` (B-3) | A2-17, A2-19, A2-21, A3-10, A3-13, A3-15, A3-19, A3-21, A5-37, A5-57, A6-01, A6-02, A6-03, A6-04, A6-06, A6-07, A6-08, A6-09 | A2-13, A4-24, A5-32, A5-35 |
| `csat-churn-watch` (B-4) | A6-04, A6-07 | A2-24, A4-25, A5-32, A7-11 |
| `csat-deflection-desk` (B-5) | A2-17, A3-10, A3-13, A6-01, A6-02, A6-04, A6-06, A6-07, A6-08 | none |
| `csat-taxonomy-refresh` (B-6) | none | none |
| `csat-satisfaction-report` (B-7) | none | A2-22, A5-38 |
| `csat-desk-standup` (B-8) | A2-15, A3-15, A3-21, A5-37, A5-59, A5-60 | A2-22, A3-17 |
| `CAPABILITIES.md` | A6-09 (held) | A2-24, A4-24, A4-25, A5-32 |

Every platform read also follows the D13 table above, whichever routine performs it.

## Rejected and unresolved

- Every clock time in A2 and A5 is a proposal; no `SCHEDULE.md` row moves on Phần A alone. Seven day cover cannot be expressed as one row: `daily` and `sun` are outside the closed vocabulary.
- Push and alert changes (A5-55, A5-63, A7-09, A7-13) conflict with CONTRACT section 9 and D10.
- Vendor prices, a seller hotline, fines and superseded Zalo figures (A5-07, A5-29, A5-33, A5-40, A5-43, A6-05) stay in this report.
- S60's fine for sending without consent could not be confirmed; the fetched law text stopped before Điều 37.
- The off platform rule (A6-01) rests on a vendor blog (S21). Shopee's own terms page was opened for D13 but its collection clause is a different rule. A later pass should find Shopee's own off platform policy page.
- Lazada's 7 to 15 day return window (A5-39) is unverified; Lazada's own return terms should be read by the B-1 writer.
- Legal numbers (03 working days, 72 hours, message hours and counts) are candidates for one shared, dated Vietnam rules file at Gate 8 (D11).
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1).
