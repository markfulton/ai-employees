# web-dev-employee-vn: glossary for owner facing Vietnamese

Every routine in `web-dev-employee-vn` uses these forms identically in text the member reads (brief lines, report lines, change brief prose, cards, templates, examples). Machine strings in `parsed-strings.md` never change; a Vietnamese form here is written beside or under them, never instead of them. Sources: form A4 (lines 110 to 141) and A3 (lines 96 to 108), `STYLE-VI.md` shared vocabulary, and Gate 1 wording from Snagon's own Vietnamese skills. A term's meaning comes from the form; no fact below is from memory. Numbers in the form's example sentences (day counts, SLA, backup frequency) stay out of kit text (D11).

## Address and shared words (from `STYLE-VI.md`, unchanged)

| Concept | Vietnamese the member reads |
|---|---|
| the assistant | em |
| the member | anh, chị, or anh/chị when `policy/budgets.md` or the inventory does not say |
| the member's AI Employees | đội nhân viên AI |
| morning brief (`brief-latest.md`) | bản tin sáng |
| waiting on the member (under `## Waiting on you`) | chờ anh/chị chốt |
| spend ceiling | hạn mức chi |
| sale week | tuần sale |
| not enough sample | chưa đủ mẫu |
| cash on delivery | COD (thu tiền khi giao) |

## Role terms from A4

| English in the kit | Vietnamese form | Use it this way | Never confuse with |
|---|---|---|---|
| domain | tên miền | "tên miền shopmau.vn" | hosting |
| .vn, .com.vn | tên miền .vn, tên miền .com.vn | two different names; never treat one as the renewal of the other | |
| hosting, shared host | hosting | "web nằm trên hosting của nhà cung cấp" | tên miền, VPS |
| VPS | VPS (máy chủ ảo) | gloss once per document, then "VPS" | hosting chia sẻ |
| control panel (cPanel, DirectAdmin, aaPanel) | panel | "vào panel xem dung lượng và chứng chỉ" | wp-admin, trang quản trị nhà đăng ký |
| DNS, name server | DNS, nameserver | "đổi nameserver là đổi nơi quản lý DNS" | bản ghi A, CNAME |
| A record, CNAME | bản ghi A, bản ghi CNAME | | nameserver |
| TLS/SSL certificate | chứng chỉ SSL | "chứng chỉ SSL của shopmau.vn hết hạn ngày dd/mm/yyyy" | giấy chứng nhận đăng ký kinh doanh |
| renew (domain or host) | gia hạn | for a .vn fee: "nộp phí duy trì" | transfer |
| suspended (.vn) | tạm ngừng | "tên miền đang bị tạm ngừng, web và email không chạy" | thu hồi |
| revoked (.vn) | thu hồi | "bị thu hồi là mất quyền sử dụng tên miền" | xoá file trên hosting |
| WHOIS | WHOIS | "WHOIS và trang chi tiết ở nhà đăng ký đang lệch nhau" | hoá đơn |
| transfer to another registrar | chuyển nhà đăng ký (transfer) | gloss once, then "chuyển nhà đăng ký" | đổi nameserver |
| registrant, legal holder | chủ thể (chủ thể đăng ký tên miền) | "chủ thể là cá nhân, không phải công ty" | tài khoản admin wp-admin |
| nulled plugin or theme | plugin lậu, theme lậu (nulled) | "em không cài plugin lậu" | bản miễn phí chính hãng trên wordpress.org |
| link injection, SEO spam | chèn link độc (link cờ bạc, cá cược) | "Search Console báo vấn đề bảo mật, nghi bị chèn link độc" | quảng cáo Google do chủ gắn |
| webhook | webhook | "webhook thanh toán chưa báo về web" | API |
| VietQR | VietQR (chuyển khoản bằng mã QR) | | cổng thẻ VNPAY |
| staging | bản staging (bản thử) | "cập nhật trên staging trước" | bản sao lưu |
| backup | bản sao lưu (backup) | "bản sao lưu của nhà cung cấp" | staging |
| uptime | tỷ lệ web chạy (uptime) | a percentage always carries its source path | tốc độ tải trang |
| Core Web Vitals, LCP, INP, CLS | Core Web Vitals (LCP, INP, CLS) | "số đo phòng thí nghiệm" for lab, "số người dùng thật" for field | điểm Lighthouse |
| CDN | CDN (ví dụ Cloudflare) | | hosting |
| provider ticket | ticket gửi nhà cung cấp | "em soạn sẵn ticket, anh/chị bấm gửi" | thẻ việc nội bộ |
| provider SLA | cam kết SLA của nhà cung cấp | always "của nhà cung cấp", never "của mình" | uptime em tự đo |
| change freeze | đóng băng thay đổi | "đang trong đợt đóng băng trước 11.11, em không đưa thay đổi nào vào diện chờ gộp" | tắt website |
| P0 | P0 (đang không bán được, không thu được tiền, hoặc ghi sai tiền) | display only; no field in `board.json` | độ ưu tiên trong WordPress |
| P1 | P1 (vẫn bán được nhưng có lỗi, có thể thành P0) | display only | |

## Kit words, fixed Vietnamese forms

| English in the kit | Vietnamese form |
|---|---|
| card (on the review board) | thẻ việc |
| review board | bảng duyệt |
| change brief | mô tả thay đổi |
| branch | nhánh |
| merge (done by the member) | gộp nhánh (merge) |
| rollback | cách hoàn tác |
| gate (build and test) | bước kiểm build và test |
| production | bản đang chạy (production) |
| incident | sự cố |
| fingerprint (error group) | nhóm lỗi |
| drift (platform guard) | chỗ lệch |
| expiry warning window | khoảng cảnh báo hết hạn |
| inventory | sổ tài sản web |
| weekly change report | báo cáo tuần |
| guardrail review | rà quyền tự sửa cuối tháng |
| rung (safe fix ladder) | nấc quyền |
| held (dependency) | tạm giữ |
| not measured | chưa đo được |
| not handed over | chưa bàn giao |
| registrar | nhà đăng ký |
| where it was bought (reseller) | nơi mua |
| legal holder, password holder, payer, spend approver | chủ thể pháp lý, người giữ mật khẩu, người trả tiền, người duyệt chi |
| person on duty | người trực |
| merged unchanged (a change) | thay đổi gộp nguyên |
| merged edited (a change) | thay đổi gộp sau khi sửa |
| closed unmerged (a change) | thay đổi đóng không gộp |
| regressed (a change) | lần lỗi lại |

## Vietnamese market facts, as the member reads them (A3)

Wording only; the rule and its source live in `phan-a-ledger.md`.

- A lapsed .vn name: "Tên miền .vn hết hạn là bị tạm ngừng ngay, web và email không chạy. Đây không phải thời gian ân hạn." (ledger row 27)
- A .com name: "Tên miền quốc tế: còn trong giai đoạn gia hạn giá thường" or "đã sang giai đoạn chuộc (redemption), phí cao hơn nhiều", only as the registrar screen shows it. (row 29)
- Holder mismatch: "Chủ thể tên miền khác bên trả tiền. Một số nhà đăng ký chỉ xuất hoá đơn đúng tên chủ thể." (row 21)
- Shared outage: "Nhiều site chậm cùng lúc, em kiểm trang trạng thái nhà mạng và CDN trước khi kết luận lỗi code." (row 32)
- Lab speed: "Số PageSpeed là số phòng thí nghiệm, đo từ máy chủ Google ở nước ngoài, không phải từ mạng của khách." (row 32)
- Tết: "Doanh nghiệp chưa thông báo lịch nghỉ Tết, em chưa ghi ngày." (row 36)
- Provider SLA: "99,99% là cam kết của nhà cung cấp trên trang của họ, không phải cam kết của mình với khách." (row 80)
- Payment: "Em không đánh dấu đơn đã thanh toán dựa trên ảnh chuyển khoản." (row 57)

## Gate 1: reusable Vietnamese wording from Snagon skills (wording only, no rules)

Searched `AI wspace/Claude wspace/Plugin-CLI/plugins/` (40 plugins, 500 skills) on 24/09/2026. No Vietnamese web operations, hosting or domain skill exists; skill bodies are English and only descriptions are Vietnamese. Reusable phrasing:

| Phrase | From | Use for |
|---|---|---|
| "vướng mắc kèm hướng gỡ" | `ub-ops-2/weekly-report` | a `## Blocked` line that also says what unblocks it |
| "ưu tiên tuần tới" | `ub-ops-2/weekly-report` | the weekly report's next week item |
| "đầu việc, trạng thái, người phụ trách, hạn chót" | `ub-ops-1/project-tracker` | column words on the review board and renewal lines |
| "leo thang sự cố", "phân cấp xử lý" | `ub-ops-1/escalation-procedure` | the person on duty guidance in `INSTALL-PROMPT.md` |
| "khôi phục sau sự cố" | `ub-ops-2/business-continuity-plan` | rollback and restore wording in change briefs |
| "dấu hiệu cảnh báo sớm" | `ub-ops-1/risk-assessment` | P1 lines that may become P0 |
| "đạt / không đạt", "kiểm trước khi giao" | `ub-ops-2/quality-assurance-checklist` | gate results shown to the member (the tokens `pass`, `fail` stay) |
| "rút kinh nghiệm" | `ub-ops-1/retrospective` | the monthly guardrail review summary |
| "đổi tên miền", "bản đồ redirect URL cũ mới" | `ub-seo-2/seo-migration-plan` | redirect findings in the site sweep |
| "chỉ tiêu uptime" | `ub-launch-2/service-level-agreement` | never for the kit's own measured uptime; only when quoting a provider's claim |
