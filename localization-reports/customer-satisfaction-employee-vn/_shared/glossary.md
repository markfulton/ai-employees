# customer-satisfaction-employee-vn: glossary

Built 2026-09-24 from form A4 (lines 116 to 138), A3 (lines 102 to 109) and the Phần B scope table (lines 44 to 51), aligned with `localization-reports/STYLE-VI.md`. Every routine in this variant uses these forms identically. The left column is the concept; the middle column is what stays in files and ledgers (see `parsed-strings.md`); the right column is exactly what the member or the customer reads.

Two audiences, two registers:

- **The member (owner or shift lead)** reads briefs, boards, reports, dossiers. The assistant writes as "em" to "anh" or "chị" as `charter` or the business profile records it, "anh/chị" when it does not (STYLE-VI).
- **The customer** reads drafts the member sends. Default "Dạ anh/chị", the shop is "em", follow the customer's own form of address for the whole conversation; South "dạ", North may add "vâng", unknown region "dạ" (A3-10 `[CG]`). Never "bạn" or "quý khách" to a retail customer, unless `strategy/tone.md` says otherwise.

## 1. Kit wide terms from STYLE-VI, as used here

| Concept | Kept in files | Member reads |
|---|---|---|
| morning brief | `brief-latest.md`, headings stay English | bản tin sáng |
| business profile, charter | `strategy/*.md` | hồ sơ doanh nghiệp |
| waiting on the member | heading `## Waiting on you` | chờ anh/chị chốt |
| spend or grant ceiling | `## What you will grant without asking` | hạn mức duyệt (hạn mức chi when it is spend) |
| sale week | ISO week key | tuần sale |
| not enough sample | `n/a (...)`, `evidence floor` | chưa đủ mẫu |
| order refused on delivery | wire and theme ids stay English | boom hàng (member text only; never in customer text, A3-06) |
| cash on delivery | `COD` | COD (thu tiền khi giao) |
| net received from a platform | report cells | thực nhận |

## 2. Routine display names (A2-01)

Ids never change. These names appear only in member facing prose, for example the brief or the README of the variant.

| Routine id | Member reads |
|---|---|
| `csat-desk-intake` | Dựng bàn CSKH (lần đầu), rà lại hằng tháng |
| `csat-inbox-sweep` | Quét tin và lập phiếu |
| `csat-reply-desk` | Soạn trả lời vào hàng đợi |
| `csat-churn-watch` | Canh khách sắp bỏ |
| `csat-deflection-desk` | Viết câu trả lời mẫu và bài hướng dẫn |
| `csat-taxonomy-refresh` | Rà bộ chủ đề khiếu nại |
| `csat-satisfaction-report` | Báo cáo tuần CSKH |
| `csat-desk-standup` | Bản tin sáng |

## 3. Role terms

| Concept | Kept in files | Member reads | Notes, and what it is confused with (A4) |
|---|---|---|---|
| customer care | none | CSKH (chăm sóc khách hàng) | Spell out once per document |
| ticket | `ticket_id`, `tickets.jsonl` | phiếu | One customer writing five messages is still one phiếu. Not "một tin nhắn" |
| queue file, queue entry | `queue/`, `## R-nn`, `## P-nn` | hàng đợi, bản nháp số R-01 | P entries are public replies: "bản nháp trả lời công khai" |
| reply | `drafted`, `replied` | trả lời | Customers write "rep"; the member reads "trả lời". "rep" is not "hoàn tiền" |
| sent (checkbox) | `- [ ] sent` | đã gửi | Tick only when the member actually sent it. Never write "em đã gửi" (STYLE-VI) |
| seen | none | đã xem | Not "đã xử lý xong" |
| private message on Facebook | channel `helpdesk` or `marketplace` per `strategy/channels.md` | inbox (tin nhắn riêng) | Customers write "ib". Not a public comment |
| comment | none | bình luận | Customers write "cmt". Not a marketplace review |
| review, rating | channel `review`, `rating:` | đánh giá, 1 sao, 5 sao | "1 sao" on a marketplace or Google is not Shopee's internal penalty point "Sao Quả Tạ" |
| Zalo Official Account | route name in `CAPABILITIES.md` | Zalo OA | Not the owner's personal Zalo, which is never automated (D10) |
| template notification message | route name | tin mẫu ZBS (trước đây gọi là ZNS) | Paid and held. Not a free consult message ("tin Tư vấn") |
| refund, return, exchange | `- remedy:` values | hoàn tiền; trả hàng; đổi hàng, đổi size | Never write bare "hoàn". Ask which one: "Anh/chị muốn hoàn tiền hay đổi size ạ?" Not "huỷ đơn chưa giao" |
| cancel an order not yet shipped | none | huỷ đơn | Different from a return |
| bank transfer, account number | none | chuyển khoản, số tài khoản | Customers write "ck", "stk"; member text spells them out |
| bank chargeback investigation | none | tra soát | Never promise a date the money returns |
| order agreed | none | chốt đơn | Not "khiếu nại đã xong" |
| same day marketplace delivery | none | hoả tốc | Not "giao tiết kiệm" |
| page admin as customers call it | none | "ad" in customer text; "người trực page" in member text | Not "ads" (quảng cáo) |
| product | none | sản phẩm | Customers write "sp" |
| suspected counterfeit | severity words | nghi hàng giả | Customers write "fake". Not "hàng lỗi kỹ thuật". Never argue it in one line |
| off platform deal | none | giao dịch ngoài sàn | Sending a phone number, Zalo or link inside Shopee, TikTok Shop or Lazada chat (A6-01) |
| Shopee badge | none | Shop Yêu thích, Shop Yêu thích+ | Not Shopee Mall |
| Shopee vacation mode | none | Chế độ Tạm nghỉ | Chat rate not counted while on (A3-17) |
| seller centre | route names | Kênh Người Bán (Shopee), Seller Center (TikTok Shop, Lazada) | Shopee's own Vietnamese name, seen on its pages 24/09/2026 |
| buyer's order screen | none | mục Đơn mua | Where a Shopee refund is really handled (A3-13) |
| first response time | `first_response_from_observed_days`, `first_response_from_event_days` | thời gian phản hồi đầu | Not the time to resolve the whole case ("thời gian xử lý xong") |
| response target | `## Response target` | mức thời gian phản hồi anh/chị đặt | Absent means `n/a (no response target recorded)` |
| platform reply window | read from the platform page with date | hạn phản hồi của sàn | Only as written in `strategy/policy-limits.md` with its source and date |
| canned reply, macro | `macros/macro-<theme-id>.md` | mẫu trả lời | A template never pre fills a refund amount |
| help article draft | `help/help-<theme-id>.md` | bài hướng dẫn (bản nháp, chưa đăng) | Publishing is the member's action |
| theme, taxonomy | `theme`, `strategy/themes.md` | chủ đề khiếu nại, bộ chủ đề | |
| severity | `critical`, `high`, `normal`, `low` | mức nghiêm trọng: khẩn, cao, thường, thấp | Display only; values stay English |
| at risk customer, dossier | `at-risk`, `risk/at-risk-<slug>.md` | khách sắp bỏ, hồ sơ dấu hiệu | "wires" read as "dấu hiệu". Never a score |
| saved, lost, cleared | `saved`, `lost`, `cleared` | giữ được, mất khách, hết dấu hiệu | `cleared` is never "giữ được" |
| weekly report | `report/satisfaction-YYYY-Www.md` | báo cáo tuần CSKH | Week shown as "tuần 14/09 đến 20/09/2026" |
| public complaint post | none | bài bóc phốt | Answer once, invite order code comparison, never argue |
| fake shipper, fake refund scam | severity words | giả shipper, giả hoàn tiền, phí thu hồi | Trigger words customers write: OTP, QR, "phí thu hồi", an unfamiliar STK (A2-19) |
| order confirmation before delivery | none | xác nhận đơn | Not adopted as a task yet (A2-12, A2-13) |
| address after 01/07/2025 | none | số nhà, đường, phường/xã, tỉnh/thành | Never "quận/huyện"; never invent a new ward |
| Tết days | `## Working days and hours` | mùng 1 đến mùng 3, mùng 4 đến mùng 6 | |
| promotional message label | none | tin quảng cáo | A draft with promotional content to a customer with no recorded consent says so (A6-04) |

## 4. Glosses for English cell tokens the member reads

Write the token first, then the gloss, never the gloss alone (STYLE-VI).

| Token | Gloss |
|---|---|
| `n/a (no response target recorded)` | anh/chị chưa đặt mức thời gian phản hồi |
| `n/a (no outcome recorded)` | anh/chị chưa ghi giữ được hay mất khách |
| `n/a (not published)` | chưa đăng |
| `n/a (browser held by <routine>)` | trình duyệt đang bận việc khác |
| `n/a (surface marks items read on open)` | kênh này mở ra là tự đánh dấu đã đọc, em không mở |
| `n/a (help surface text not recorded)` | anh/chị chưa dán nội dung chỗ này, em không mở trang |
| `n/a (no help center recorded in strategy/channels.md)` | chưa ghi chỗ khách tự đọc |
| `n/a (no help center recorded)` | chưa ghi chỗ khách tự đọc |
| `n/a (no browser route for this surface)` | kênh này không cho đọc tự động, em không mở |
| `baseline week` | tuần đầu, chưa có tuần trước để so |
| `baseline day`, `baseline month` | ngày đầu, tháng đầu, chưa có kỳ trước để so |
| `not tracked` | chưa theo dõi |
| `stale (<date>)` | quá hạn chưa trả lời từ <dd/mm/yyyy> |
| `no items captured` | không lấy được phiếu nào |
| `not enough evidence`, `evidence floor` | chưa đủ mẫu |
| `above the recorded limit, your call` | vượt hạn mức anh/chị đã ghi, anh/chị quyết |
| `n/a (sale window)` | tuần sale, không so với tuần thường |
| `n/a (not typed in report/manual.md)` | anh/chị chưa chép số này vào file |
| `n/a (typed for another window)` | số đã chép là của kỳ khác |
| `n/a (no audit recorded)` | anh/chị chưa chép kết quả tự kiểm tra phiếu tuần này |
| `n/a (no retraction recorded)` | anh/chị chưa ghi câu nào về tiền phải rút lại |

## 5. Reusable Vietnamese wording from Snagon skills (Gate 1)

Searched `AI wspace/Claude wspace/Plugin-CLI/plugins/` on 2026-09-24. The closest skills are `ub-launch-2/complaint-resolution`, `ub-launch-2/support-response-templates`, `ub-launch-2/customer-support-kb`, `ub-launch-2/review-response`, `ub-launch-2/chatbot-script`, `ub-launch-1/churn-prevention-playbook`, `ub-launch-1/voice-of-customer`, `ub-analytics-2/feedback-analysis`, `ub-industry/restaurant-review-response`. Their bodies are English; only their Vietnamese descriptions carry reusable wording. **Wording only: none of their rules, defaults (for example a 4 hour response target) or frameworks are adopted.**

| Phrase | From | Use it for |
|---|---|---|
| xử lý khiếu nại | complaint-resolution | the general name of the reply work in member text |
| khách hỏi đi hỏi lại | customer-support-kb, product-faq | why the deflection desk wrote a mẫu trả lời |
| câu trả lời sẵn | customer-support-kb | synonym the member may use for mẫu trả lời; the kit writes "mẫu trả lời" |
| quy tắc chuyển lên chủ | customer-support-kb | naming a `member-action` card in the brief |
| chỗ cá nhân hoá | support-response-templates | the square bracket holes in a macro |
| khen đáp ấm, chê gỡ khéo | review-response | a one line description of review drafts in the README |
| trả lời review 1 sao | restaurant-review-response | brief lines about low reviews |
| tín hiệu sớm khách sắp huỷ | churn-prevention-playbook | churn watch intro text ("dấu hiệu" stays the kit term) |
| chủ đề khách nhắc nhiều nhất | voice-of-customer | the weekly report's theme section |
| khách phàn nàn nhiều nhất về gì, xếp ưu tiên nên sửa gì trước | feedback-analysis | the one product change line in the weekly report |
| câu thoát khi bot bí, chuyển sang người thật | chatbot-script | macro text used by a bot, together with saying it is automated (A6-06) |

Not reused: "sếp" (banned by STYLE-VI), "cảnh báo khi tỉ lệ tiêu cực tăng" (a push the kit does not have), any compensation scale.
