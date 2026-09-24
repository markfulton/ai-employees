# Tổng kết đêm Việt hóa 7 kit (24/09/2026)

Đã xong: 7 kit còn lại đều có bản Việt, cùng với `gtm-engineer-vn` (1.11.0) làm trước đó là đủ 8 vị trí. Cả 7 bản mới qua checker kit, selftests, no-dashes, evals 7/7, aeo-check và lượt thuê thử bằng installer của fork. 8 kit gốc không đổi một byte. Mọi thứ nằm trên nhánh `feature/vn-localization` trong worktree `Snagon-Agent-cos-vn`: đã commit cục bộ, chưa push, chưa publish.

Số liệu dưới đây lấy từ `localization-reports/<slug>/README.md`, `_shared/patch-log.md` của từng kit và từ lần kiểm em chạy lại sau bước nối dây chung. Chi tiết từng điều khoản nằm trong các file đó.

## Bảng tổng hợp

| Biến thể | Số routine | Phiên bản | Kết quả kiểm (chạy lại 24/09/2026, sau nối dây) | Người rà tìm và đã sửa | Việc còn mở chính |
|---|---|---|---|---|---|
| `web-dev-employee-vn` | 8 | 1.9.0, từ bản gốc 1.8.1 | Checker kit `PASS WITH WARNINGS (0 fail, 3 warn)`. Thuê thử: exit 0, 3 self test `ok` | Cả 8 routine bị trả về mức SỬA, không có CHẶN. Đã sửa 106 mục | Có đặt `mon-fri sat` làm mặc định hay để chủ tự sửa. Trang thanh toán hỏng mà trang chủ vẫn chạy thì vẫn ghi `"p0": false` (đề xuất SS 7 bị từ chối, khoảng hở mức vừa). Ngưỡng 100 lượt kiểm của báo cáo tuần chờ anh quyết (mục 6.7 gói rà) |
| `chief-of-staff-vn` | 7 | 1.9.0, từ bản gốc 1.8.1 | `PASS WITH WARNINGS (0 fail, 10 warn)`. Thuê thử: exit 0, 3 `ok` | Cả 7 routine mức SỬA, không có CHẶN. Đã sửa 75 mục | Giờ kiểm hồ sơ 08:55 (D19) hay 09:00 như phiếu. Một quy tắc chung cho nền tảng chưa có trong bảng điều khoản. Cửa sổ sale trước Tết chưa có nguồn ghi ngày |
| `seo-employee-vn` | 8 | 1.10.0, từ bản gốc 1.9.0 | `PASS WITH WARNINGS (0 fail, 3 warn)`. Thuê thử: exit 0, 3 `ok` | Cả 8 routine mức SỬA, không có CHẶN. Đã sửa 105 mục | Standup 08:15 và lượt đăng bài 09:15 đều là `[CG]` nhưng luật giãn cách trình duyệt không cho cả hai, nên giờ gốc được giữ: cần chọn phương án A hay B. Người bấm gửi yêu cầu lập chỉ mục cần một `[CG]` |
| `ad-manager-employee-vn` | 7 | 1.9.0, từ bản gốc 1.8.0 | `PASS WITH WARNINGS (0 fail, 19 warn)`. Thuê thử: exit 0, 3 `ok` | 5 routine mức SỬA, 2 routine bị CHẶN lần đầu (`ads-account-intake`, `ads-change-list`) và đã gỡ ở lần rà thứ hai. Đã sửa 103 mục (93 lần đầu, 10 lần hai) | Hai đổi giờ chạy anh đã duyệt mâu thuẫn nhau (câu 1 gói rà). Chạy thứ Bảy chờ quyết. Chưa có số đơn theo từng nhóm quảng cáo |
| `customer-satisfaction-employee-vn` | 8 | 1.9.0, từ bản gốc 1.8.0 | `PASS WITH WARNINGS (0 fail, 4 warn)`. Thuê thử: exit 0, 3 `ok` | 7 routine mức SỬA, 1 routine bị CHẶN lần đầu (`csat-desk-intake`) và đã gỡ. Đã sửa 106 mục (97 lần đầu, 9 lần hai) | Trực cuối tuần: các dòng vẫn `mon-fri` trong khi sàn tính cả chat cuối tuần. Anh chọn giữa `[CG]` 309 và `[CG]` 1717 về tỷ lệ chưa phân loại. Lead xác nhận cách đọc chặt: không mở trình duyệt trên nền tảng nào ở mục 4c |
| `social-media-employee-vn` | 7 | 1.9.0, từ bản gốc 1.8.1 | `PASS (0 fail, 0 warn)`. Thuê thử: exit 0, 3 `ok` | Cả 7 routine mức SỬA, không có CHẶN. Đã sửa 75 mục | Tách bài trả tiền và bài KOL khỏi bài tự nhiên cần một `[CG]`, đây là khoảng hở lớn nhất của kit. Bài hẹn giờ trước giờ chạy lượt đăng bị giao trễ. Chạy thứ Bảy, Chủ nhật chờ quyết |
| `sales-employee-vn` | 7 | 1.9.0, từ bản gốc 1.8.0 | `PASS WITH WARNINGS (0 fail, 2 warn)`. Thuê thử: exit 0, 3 `ok` | 6 routine mức SỬA, 1 routine bị CHẶN (`sales-prospect-sweep`, 2 lỗi CHẶN) và đã gỡ. Đã sửa 86 mục (81 lần đầu, 5 lần hai) | Giá trị kênh cho cách "gọi tổng đài trước, chat sau" (lead quyết). Im lặng sau tin quảng cáo đầu tiên cần luật sư đọc văn bản gốc. Khóa lead theo mã số thuế và cổng duyệt của chủ cần `[CG]` |

Cách đọc cột "Người rà tìm và đã sửa": mỗi routine có một người rà độc lập (một agent AI khác, không phải người làm nghề), rồi một người sửa. Số mục đã sửa là tổng cột "Fixed" trong bảng Review của từng báo cáo; vài dòng tính cả mục NOTE. Báo cáo không ghi riêng số lỗi tìm thấy. Không routine nào qua người rà ngay lần đầu.

## Các lần kiểm chung, chạy lại từ worktree sau bước nối dây (24/09/2026)

| Lệnh | Kết quả |
|---|---|
| `check-localized-routine.mjs kit`, từng biến thể một | Cả 7 không còn `FAIL`; dòng kết luận của từng kit như trong bảng trên. Trước bước nối dây, kit nào cũng `FAIL` đúng một lỗi `root-changelog` |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node evals/run.mjs` | `evals: PASS (7/7)` |
| `node .github/scripts/aeo-check.mjs` | `aeo-check: PASS (roster, manifest, schedule, install wiring, guard and measurement tests)`. Script này chỉ kiểm `seo-employee` bản gốc |
| `node installer/cli.mjs list` | 16 dòng: mỗi vị trí có bản gốc và bản VN nằm ngay dưới |
| `claude plugin validate . --strict` | `Validation passed` |
| Thuê thử 7 biến thể vào thư mục tạm | Cả 7 exit 0, mỗi kit 3 dòng self test `ok`, có `.installed.json`, đường dẫn đã điền vào lời cài. Lệnh `upgrade` chỉ báo cáo: "Already on ..., Nothing to upgrade." |

## Thay đổi riêng cho Việt Nam, từng kit

**Web Dev (`web-dev-employee-vn`).** Tên miền `.vn` hết hạn được coi là sập, không có thời gian ân hạn, và kho thông tin ghi thêm người đứng tên, hạn hosting, thời gian giữ bản sao lưu. Một lượt đóng băng quanh ngày sale của chủ và kỳ nghỉ Tết giữ lại fix runner và dependency run. Trang quản trị Haravan, Sapo chỉ đọc tay; người trực ghi điều cần biết vào `inventory/handover.md`.

**Chief of Staff (`chief-of-staff-vn`).** Nền tảng nào có điều khoản cấm đọc tự động thì không mở; người trực ghi điều mình thấy vào `market/manual.md` (D22), trừ trang shop khác trên Shopee (D23). Trang số tuần tính theo tuần bán hàng thứ Hai đến Chủ nhật, và tuần sale hay tuần Tết không bao giờ so với tuần thường. Ngày nghỉ chỉ lấy từ hồ sơ của chủ, giờ làm có nghỉ trưa.

**SEO/AEO (`seo-employee-vn`).** Không routine nào tự tra trang kết quả tìm kiếm, chế độ AI hay mạng xã hội; người trực xem và dán lại theo phiếu hỏi mà routine soạn sẵn. Người bấm đăng bài ở mọi trang không ghi `publish_control: employee`, luôn luôn với WordPress và với thực phẩm chức năng, mỹ phẩm, thiết bị y tế. Quy tắc về sức khỏe, so sánh nhất, giá, địa danh và sao chép quyết định câu nào được viết.

**Ads (`ad-manager-employee-vn`).** Kết quả quyết định là đơn trong phần mềm bán hàng của chủ; loại chiến dịch đếm mọi đơn của sản phẩm được quảng bá không bao giờ được tính là kết quả quảng cáo. Sản phẩm bị cấm hay cần giấy tờ không có bộ sáng tạo, không có bảng dựng. AI không có quyền chi tiền: dòng `prepare` hay `publish` trong `RELEASES.md` được đọc như `advise` (D18).

**CSKH (`customer-satisfaction-employee-vn`).** Bàn CSKH làm việc ở nơi khách Việt nhắn: chat người bán trên sàn, yêu cầu trả hàng, hộp thư trang, tài khoản chat chính thức, bình luận, cuộc gọi, đánh giá trên bản đồ; chat sàn và yêu cầu trả hàng được đọc trước. Hạn phản hồi của sàn, hạn trả hàng và hạn luật định lấy từ file của chủ kèm nguồn và ngày; bản tin sáng liệt kê mọi hạn đến trước bản tin kế tiếp. Câu trả lời dùng "Dạ", "em", "anh/chị", không kéo khách ra khỏi sàn, không bao giờ hỏi mã OTP hay phí, không đổi quà lấy đánh giá.

**Social (`social-media-employee-vn`).** Bài soạn theo luật quảng cáo Việt Nam bằng lời, không bằng con số, có dòng `Nội dung quảng cáo` và xác nhận của chủ khi có người được trả tiền, không khuyến mại may rủi. Số điện thoại, địa chỉ, số giấy tờ được che thành `[đã che]` trước khi ghi; chuyển khoản nhầm lên đầu hàng đợi, tin lừa đảo được ghi lại và không làm theo. Giờ chạy dời theo buổi sáng của chủ để bản tin sẵn khi anh đọc.

**Sales (`sales-employee-vn`).** Chỉ soạn lời chào đầu cho người có thẻ đồng ý (`consent-email-YYYY-MM-DD` hoặc `consent-linkedin-YYYY-MM-DD`) trong `crm/contacts.csv`, và mọi email quảng cáo có nhãn `[QC]`, thông tin người gửi, dòng từ chối. Không mở LinkedIn hay nền tảng cấm đọc tự động, tra cổng đăng ký doanh nghiệp và mã số thuế từng công ty một, không dùng danh sách mua, không giải captcha. Một lời từ chối trên bất kỳ kênh nào dừng mọi kênh; gọi điện và nhắn chat luôn do người làm.

## Việc em làm trong bước nối dây chung

- `installer/cli.mjs`: 7 biến thể vào danh sách, mỗi bản nằm ngay dưới bản gốc, alias ngắn như `cos-vn`, `seo-vn`, `ads-vn`, `csat-vn`, `social-vn`, `sales-vn`, `dev-vn`. Hai chốt chặn "chỉ có trong fork" (thuê từ gói công khai, và upgrade) nay áp cho mọi slug kết thúc bằng `-vn`. Cột danh sách nới rộng để tên dài nhất không dính vào cột sau.
- `skills/hire/SKILL.md` và `docs/INSTALL.md`: mỗi biến thể một dòng; các ghi chú "gói npm và file zip không có bản này, dùng installer của fork" nay áp cho mọi biến thể.
- `CHANGELOG.md` gốc: một mục mới ở đầu, có link tới changelog của cả 7 biến thể và câu "gói npm công khai không chứa các biến thể, installer của fork liệt kê và cài được".
- `.claude/memory.md` và `.claude/rules/localization.md`: số kit (8 gốc, 8 bản VN), nơi để báo cáo, hai file dùng chung, và các quy tắc của lượt này.
- D23, Shopee cấm cả theo dõi bằng tay: em rà cả 8 biến thể và sửa 10 dòng trong 3 kit. Chief of Staff: `CONTRACT.md` 2.6, 10.1, 10.4, `INSTALL-PROMPT.md` và 2 dòng trong `cos-market-sweep`. Ads: `CONTRACT.md` 10.1, `INSTALL-PROMPT.md` và `ads-account-intake`. CSKH: `csat-desk-intake`. Mỗi thay đổi ghi trong `_shared/patch-log.md` của kit đó. Social và SEO đã có ngoại lệ này từ trước; Web Dev, Sales và GTM không có dòng nào mời theo dõi trang shop khác. File xuất Shopee của chính chủ vẫn dùng được.

## Những chỗ còn hở

- **Chưa có người làm nghề thật rà.** Phiếu do AI điền; các dấu `[CG]` là quyết định của anh trên bản nháp đó, chưa phải xác nhận của người đang làm nghề ở Việt Nam (cổng 3, D6).
- **Chưa chạy thử hành vi thật.** Chưa có lượt nào cho agent chạy routine trên dữ liệu giả để xem nó làm gì (cổng 7 lớp B, D6).
- **`copy-check.mjs` không nhìn thấy số tiền và số đếm tiếng Việt thiếu nguồn.** Script phải giữ nguyên từng byte, nên mỗi routine tự giữ quy tắc "số nào cũng kèm đường dẫn nguồn".
- **Điều khoản nền tảng làm giảm phần quan sát tự động.** Google Search và chế độ AI, ChatGPT, Gemini, LinkedIn, Meta, TikTok, YouTube, Shopee, TikTok Shop, Lazada, Zalo, Haravan, Sapo cấm đọc tự động (D17), nên bản Việt ít tự động hơn bản gốc ở phần nhìn ra ngoài: người trực xem rồi dán. Riêng trang shop khác trên Shopee thì không ai theo dõi, kể cả bằng tay (D23).
- **Khác.** `employee.json` của cả 7 biến thể vẫn trỏ `repository` về dự án gốc, anh quyết báo lỗi tiếng Việt gửi về đâu. Ví dụ của SEO và CSKH phần lớn vẫn là doanh nghiệp lợp mái giả bằng tiếng Anh. `aeo-check.mjs` chỉ kiểm bản SEO gốc.
- **Lỗi thừa hưởng từ bản gốc, em không sửa trong kit.** `runlog.mjs` của SEO thiếu `seo-answer-visibility` trong CADENCE, nên bản ghi chạy của routine này rơi về UNRECORDED RUN; script phải giữ nguyên từng byte nên bản Việt thừa hưởng lỗi này.

## Anh cần làm tiếp

1. **Rà 7 gói tiếng Việt**, `localization-reports/<slug>/review-packet-vi.md`, và nếu được thì nhờ một người đang làm đúng vị trí đó ở Việt Nam đọc từng gói. Đây là việc quan trọng nhất trước khi cho kit chạy với việc thật.
2. **Chốt các câu đang chờ anh**, nằm ở mục "Deferred and unresolved" trong báo cáo từng kit: giờ chạy của SEO và Ads, trực thứ Bảy và cuối tuần, tách bài trả tiền ở Social, `[CG]` 309 hay 1717 ở CSKH, khóa lead theo mã số thuế ở Sales.
3. **Push và mở PR trên fork.** Sau khi lead commit phần nối dây, push nhánh `feature/vn-localization` lên `origin` (`phantanphatdgteam-gif/ai-employees-VN`) và mở PR vào `main` của fork. Chưa ai push hay mở PR.
4. **`npm publish` là việc của người bảo trì.** Gói `ai-employees` công khai trên npm không chứa biến thể nào, nên `npx ai-employees` chưa cài được bản Việt; hiện chỉ installer đi kèm fork cài được: `node installer/cli.mjs hire <slug>-vn --to <thư mục>`. Không ai trong lượt này publish.
5. **Chuyển cho người bảo trì bản gốc:** câu lỗi ở `employees/chief-of-staff/routines/cos-decision-review/SKILL.md` dòng 576 (bản Việt đã sửa); `runlog.mjs` của SEO thiếu `seo-answer-visibility`; `guard.mjs` chỉ đọc dòng đầu của một id trong `SCHEDULE.md`, nên lời khuyên "thêm một dòng `sat` riêng" trong bản gốc Web Dev không bao giờ được đọc.
