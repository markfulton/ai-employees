# ad-manager-employee-vn: glossary for owner facing Vietnamese

Built 24/09/2026 from Phần A of `04_Ad-Manager/phieu-da-dien.md` (A4 lines 113 to 137, A3 lines 99 to 106) and the kit's own concepts, aligned with `localization-reports/STYLE-VI.md`. **Every routine of this kit uses the Vietnamese form in the second column, identically.** Routine instructions stay English; this file governs only text the member reads: templates, examples, brief lines, board intro lines, build sheet and set values. Parsed headings and tokens stay English (see `parsed-strings.md`); where the member reads a token, the fixed gloss in section 5 follows it and never replaces it.

Spelling rule for this kit: follow the form's "oá, oé, uý" placement (`khoá`, `hoá`, `huỷ`, `tuỳ`, `sức khoẻ`), because the platform Vietnamese UIs the member sees use it (`Tối đa hoá hiệu suất`, `từ khoá phủ định`). One spelling per word across the kit.

## 1. STYLE-VI terms this kit uses (binding, unchanged)

| Concept | Vietnamese the member reads | Note for this kit |
|---|---|---|
| the member's AI Employees | đội nhân viên AI | |
| morning brief (`brief-latest.md`) | bản tin sáng | |
| spend ceiling | hạn mức chi | `## Monthly ceiling` is shown as "hạn mức chi tháng", `## Daily cap` as "hạn mức chi ngày". The form says "trần ngân sách"; the kit says hạn mức chi, per STYLE-VI |
| waiting on the member | chờ anh/chị chốt | Under the English heading `## Waiting on you` |
| accepted, rejected, deferred (display) | đã chốt, từ chối, hoãn | |
| done, dropped (display) | đã làm, không làm nữa | `dropped` in `changes/ledger.jsonl` |
| sale week | tuần sale | A3 103 flags these weeks |
| not enough sample | chưa đủ mẫu | Evidence floor not reached |
| order refused on delivery | boom hàng | A4 122 writes "Bom hàng"; STYLE-VI fixes "boom hàng" for every kit. Readers of the member's own notes accept both spellings |
| cash on delivery | COD (thu tiền khi giao) | First mention in a document carries the bracket; later mentions "COD" |
| net received from a platform | thực nhận | Only where a marketplace statement is read |
| listed and current price | giá gạch, giá đang bán | Only in creative offer framing |

## 2. Role terms from A4 (exact form, one per concept)

| A4 line | Form term | Kit concept | Vietnamese the member reads | Do not confuse with (from the form) |
|---|---|---|---|---|
| 113 | CPQC | spend | chi phí quảng cáo; short form `CPQC` after the first full mention | CPA |
| 113, 100 | CPA | cost per result, cost per order | chi phí mỗi kết quả; for orders: chi phí mỗi đơn giao thành công | CPQC |
| 114 | Camp | campaign | chiến dịch (never "camp" in kit text) | "trại", email campaign |
| 115 | Nhóm QC, adset | ad set, ad group | nhóm quảng cáo | the whole account |
| 116 | Ad | ad, creative variant | mẫu quảng cáo | a fanpage post that is not advertised |
| A2 70 | bộ | creative set | bộ mẫu quảng cáo | |
| 117 | BM | Business Manager, business portfolio | BM (trình quản lý doanh nghiệp) | tài khoản quảng cáo |
| 118 | Fanpage | Facebook Page | fanpage | trang cá nhân |
| 119 | Mess | a message conversation from an ad | tin nhắn; "mess" only when quoting the member | lượt nhấp |
| 120 | Chốt đơn | confirmed order | chốt đơn (verb); đơn đã chốt (noun): order entered in the sales software with phone and address | khách chỉ hỏi giá |
| 121 | COD | cash on delivery | COD (thu tiền khi giao) | chuyển khoản trước |
| 122 | Bom hàng | refused order | boom hàng | hoàn vì lỗi sản phẩm |
| 123 | Hoàn đơn | returned or cancelled order | hoàn đơn | boom hàng |
| 124 | Pixel | browser pixel | pixel | CAPI |
| 125 | CAPI | server events (Conversions API) | CAPI (gửi sự kiện từ máy chủ hoặc phần mềm bán hàng) | pixel trên trình duyệt |
| 126 | Ngưỡng bill | billing threshold | ngưỡng thanh toán (Meta's own Vietnamese term, S68); "ngưỡng bill" only when quoting | ngân sách ngày |
| 127 | Bill đỏ | failed payment | thanh toán lỗi; "bill đỏ" only when quoting | hoá đơn GTGT |
| 128 | Học máy | learning phase, delivery status "Learning" | giai đoạn máy học; the status is quoted as the screen shows it: `Máy học` (S56). TikTok's equivalent is "giai đoạn tìm hiểu" (S38) | quảng cáo bị từ chối |
| 129 | Tần suất | frequency | tần suất | số lần nhấp |
| 130 | Góc, angle | angle | góc tiếp cận | định dạng ảnh hay video |
| 131 | Hook | hook | câu mở (hook) on first mention, then câu mở | tiêu đề dưới ảnh |
| 132 | GMV Max | GMV Max | GMV Max (chiến dịch tự động cho TikTok Shop) | quảng cáo tin nhắn TikTok |
| 133 | PMax | Performance Max | Tối đa hoá hiệu suất (PMax) | chiến dịch Tìm kiếm |
| 134 | Từ khoá phủ định | negative keyword | từ khoá phủ định | từ khoá đang bật |
| 135 | OA | Zalo Official Account | Zalo OA | Zalo cá nhân của chủ |
| 136 | ZNS | Zalo notification service | ZNS (tin giao dịch theo mẫu) | tin Tư vấn |
| 137 | UTM | UTM parameters | UTM | pixel |

## 3. Kit concepts and A3 phrases (fixed wording)

| Kit concept or A3 line | Vietnamese the member reads | Source of the wording |
|---|---|---|
| board (`board/LAUNCH-BOARD.md`) | bảng việc | form B-7 scope "viết lại bảng việc" |
| weekly change list | danh sách thay đổi tuần | form scope table B-5 |
| kill, scale, test (change ranks) | tắt, tăng, thử | form A2 72 "chốt tắt, tăng, test"; "thử" chosen over "test" for owner text |
| build sheet | phiếu dựng | form A6 235 "soạn phiếu dựng" |
| creative doctrine | nguyên tắc creative | form scope table B-1, B-6 |
| monthly creative retrospective | tổng kết creative tháng | form A2 73 "Tổng kết content tháng"; "creative" kept for consistency with the doctrine |
| account read | đọc số sáng | form A2 69 |
| account intake | nhận tài khoản | form A2 68 |
| primary conversion event | sự kiện chuyển đổi chính | form scope table B-2 |
| closing model (A3 99, A7 253) | mô hình chốt đơn: inbox, web, sàn, gọi điện, B2B | A3 99, A7 253 |
| delivered order (A3 100) | đơn giao thành công | A3 100 |
| non cancelled order, as the owner defined it | đơn không huỷ, theo định nghĩa anh/chị đã chốt | A3 100 |
| counted order (`ads-change-list`) | đơn tính chi phí: đơn giao thành công, hoặc đơn không huỷ theo định nghĩa anh/chị đã chốt; boom hàng và hoàn đơn đếm riêng | A3 100; `CONTRACT.md` 10.1 rule 4 |
| cost per counted order | chi phí mỗi đơn tính | A3 100 |
| delivery status | trạng thái phân phối | Meta Vietnamese UI "Phân phối" (S56) |
| spend (money out) | chi tiêu | |
| daily budget on a build sheet | ngân sách ngày | |
| landing page | trang đích | Google Ads Vietnamese help (S62) |
| final URL | URL cuối cùng | S62 |
| final URL expansion | mở rộng URL cuối cùng | S62 title |
| auto applied recommendations | tự động áp dụng đề xuất | S42 title |
| search partners | đối tác tìm kiếm | S43 title |
| tracking template | mẫu theo dõi | A5 154 |
| spend limit on a Meta account | giới hạn chi tiêu | S69 title |
| payment restriction | hạn chế thanh toán | S70 title |
| custom audience | tệp đối tượng tuỳ chỉnh | A6 238 |
| public ad library | Thư viện quảng cáo | Meta page, re-opened 24/09/2026 |
| Shopee seller centre | Kênh Người bán | A5 160 |
| TikTok seller centre | Trung tâm người bán | A5.3 177 |
| province or city; commune or ward (A3 102) | tỉnh, thành phố; xã, phường | S53, Báo Chính phủ |
| location not matching the new map (A3 102) | chưa khớp địa giới | A3 102, exact phrase |
| superlative held for legal review (A3 106) | chờ pháp lý duyệt | A3 106, exact phrase |
| holiday or sale week flag (A3 103) | không so được với tuần liền trước | A3 103, exact phrase |
| no video yet (A5.7 197) | chưa có video | A5.7, exact phrase |
| cap not recorded (A7 252) | chưa chốt | A7 252, exact phrase; also the gloss for `unresolved` below |
| advertising content confirmation | giấy xác nhận nội dung quảng cáo | A6 240, S6 |
| health supplement | thực phẩm bảo vệ sức khoẻ (TPBVSK) | A6 240 |
| enterprise code, tax code, household business, legal representative | mã số doanh nghiệp, mã số thuế, hộ kinh doanh, người đại diện theo pháp luật | A7 250, S77 |
| person on duty (D8, D10) | người trực | VN-DECISIONS D8 |

These values are owner facing text. If a writer turns one into a machine value another routine greps, list it in `parsed-strings.md` section 5 first.

## 4. Owner replies (D8, STYLE-VI)

| Member writes | Meaning | Note |
|---|---|---|
| "ok em", "làm đi" | duyệt | Only a tick in `board/LAUNCH-BOARD.md` or a row in `creative/approvals.jsonl` changes state |
| "ok đăng" on a creative set (A5.7 197) | duyệt bộ mẫu | Same rule: the person on duty records it through `scripts/review.mjs` or the tick |
| "để anh xem", "để chị xem" | hoãn | |
| "không làm" | từ chối | |
| a heart, "seen", a bare "ok" with several items open, a bare "khoan" | not a decision | The person on duty asks: "Anh/chị chốt việc số mấy ạ?" |
| silence | waiting | Never a decision |

## 5. Fixed glosses for tokens the member reads

The English token stays; the gloss follows it after one space, never replaces it.

| Token | Gloss |
|---|---|
| `n/a (<reason>)` | chưa có số, lý do trong ngoặc |
| `n/a (no results measured in the window)` | chưa có kết quả trong khoảng đọc |
| `n/a (conversion event not confirmed)` | sự kiện chuyển đổi chưa xác nhận, không tính kết quả |
| `n/a (evidence floor, <n> of <floor> days)` | chưa đủ mẫu |
| `not measured` | chưa đo |
| `not yet measured` | chưa đo tới |
| `not tracked` | không theo dõi |
| `stale (<date>)` | số cũ, ngày trong ngoặc |
| `baseline week` | tuần làm mốc |
| `baseline month` | tháng làm mốc |
| `unresolved` | chưa chốt |
| `platform default` | mặc định của nền tảng |
| `unknown (not in metrics/daily.jsonl)` | chưa có trong sổ số liệu, anh/chị đọc trên màn hình trước |
| review `approved`, `rejected`, `needs-revision`, `withdrawn`, `awaiting-review`, `changed` | đã duyệt, từ chối, cần sửa, đã rút, chờ duyệt, đã đổi sau lần duyệt |
| change `proposed`, `packet-ready`, `applied`, `dropped`, `superseded` | đề xuất, phiếu đã sẵn, đã áp dụng, không làm nữa, đã thay bằng đề xuất mới |
| creative `produced`, `live`, `retired` | đã làm xong, đang chạy, đã nghỉ |
| card `todo`, `staged`, `blocked`, `parked` | cần làm, đã sẵn, bị chặn, tạm gác |
| `earning` | đang hiệu quả |
| `not earning` | không hiệu quả |
| `not enough evidence` | chưa đủ mẫu |
| `not tested` | chưa chạy thử |
| `not checked this month` | tháng này chưa kiểm nơi bán |
| `n/a (refusals not recorded)` | chưa có số boom hàng theo mẫu |
| `ad copy: allowed` | được viết quảng cáo |
| `ad copy: held (<document>)` | chờ giấy |
| `ad copy: barred (<category>)` | không được quảng cáo |
| `not evidence` | không dùng làm chứng cứ |
| `n/a (event fires with no software orders)` | sự kiện có số nhưng phần mềm không có đơn |
| `n/a (no sales software)` | chưa có phần mềm bán hàng |
| `n/a (no ad id recorded on orders)` | đơn chưa ghi mã quảng cáo |
| `n/a (fewer than 30 conversations)` | chưa đủ 30 hội thoại |
| `n/a (sale or holiday week)` | không so được với tuần liền trước |
| `n/a (no counted orders in the ledger)` | chưa có số đơn từ phần mềm bán hàng |
| `n/a (<n> changes applied to this object in the same window)` | nhiễu, không kết luận |
| `n/a (no seven day frequency)` | chưa có tần suất 7 ngày |

## 6. Formats (STYLE-VI, restated for this kit's numbers)

- Money inside backticks with its source path, dot thousands and "đ": `1.250.000 đ`. A USD account shows its own currency as read; no conversion unless the member recorded a rate and date (A7 258 is unverified).
- Never `1,280.40` style decimals (A3 104, A5.10 212). Percent `10,5%`.
- Counts carry their unit: `12 đơn`, `30 tin nhắn`, `3 mẫu quảng cáo`.
- Dates shown to the member dd/mm/yyyy; weeks as "tuần 14/09 đến 20/09/2026"; ISO keys stay in files and backticks.
- Ranges with "đến", never a dash.
- Address: the assistant is "em"; the member "anh" or "chị" as the install profile records it (A7 257), "anh/chị" when unknown.

## 7. Gate 1: reusable Vietnamese wording from Snagon skills

Searched 24/09/2026: `~/AI wspace/Claude wspace/Plugin-CLI/plugins/` (40 plugins, 500 SKILL.md). Close to this role: `ub-ads-1` (`ad-copy`, `facebook-ad-campaign`, `google-ads-campaign`, `tiktok-ad-script`, `ad-creative-brief`, `retargeting-strategy`, `lookalike-audience-plan`, `media-buy-plan`), `ub-ads-2` (`ad-performance-report`, `ad-spend-calculator`), `ub-analytics` (attribution model skill). Their bodies are English; only the `description` lines are Vietnamese. **Wording only is reused below; no rule, number or benchmark from those skills enters the kit** (for example `ad-performance-report` compares against "industry benchmarks", which this kit forbids).

| Concept | Snagon wording reused | Where the variant may use it |
|---|---|---|
| ad copy | lời quảng cáo | `ads-creative-studio` set text, `ads-build-desk` asset slots |
| audience | tệp đối tượng | build sheets, audience sheets |
| retargeting | quảng cáo bám đuổi | build sheets |
| frequency cap | giới hạn tần suất | `ads-change-list` lines |
| winning creative; creative that spends without orders | creative ăn khách; creative ăn tiền không ra đơn | `ads-creative-retro`, `ads-change-list` owner lines |
| target CPA | CPA mục tiêu | only where the member recorded one |
| break even ROAS | ROAS để hoà vốn | only where the member recorded margin |
| hook in the first 3 seconds | câu mở 3 giây đầu | `ads-creative-studio` video briefs |
| visual brief, visual direction | brief hình, hướng hình | `ads-creative-studio` |
| image size per platform | kích thước ảnh theo nền tảng | set manifests |
| keyword groups; bidding | nhóm từ khoá; đặt giá thầu | Google Search build sheets |
| split the budget; test a new channel | chia ngân sách; thử kênh mới | `ads-change-list` test rank |
| attribution model | mô hình ghi công | `plan/measurement.md` member facing lines |
| optimisation proposals for next period | đề xuất tối ưu kỳ tới | `ads-change-list` intro line |
