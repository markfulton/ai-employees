# Nhật ký quyết định tự làm trong đêm Việt hóa (24/09/2026)

Anh giao toàn quyền duyệt việc chỉnh sửa agent và skill theo hướng bản địa hóa Việt Nam, làm trước báo sau. Đây là danh sách em tự quyết, kèm lý do. Mỗi dòng anh có thể lật lại.

## Phạm vi và cách làm

- **D1. Phạm vi.** Việt hóa 7 kit còn lại thành biến thể `<kit>-vn`: web-dev-employee (phiếu 01), chief-of-staff (02), seo-employee (03), ad-manager-employee (04), customer-satisfaction-employee (05), social-media-employee (06), sales-employee (07). GTM (08) đã có `gtm-engineer-vn` nên không làm lại. Kit gốc không đổi một byte.
- **D2. Nơi làm.** Tất cả trong worktree `/Users/phantanphat210593/Snagon-Agent-cos-vn`, nhánh `feature/vn-localization` (đổi tên từ `feature/chief-of-staff-vn`). Không ghi gì vào thư mục chính vì phiên Claude kia đang dùng.
- **D3. Quy trình mỗi routine.** Theo skill `snagon-routine-writer-v2`: sổ điều khoản trước, rồi sửa. Routine viết tiếng Anh; tri thức luật, văn hóa, thông lệ lấy từ phiếu và nguồn Việt Nam có ngày; chữ cho chủ bằng tiếng Việt theo `STYLE-VI.md`. Chuỗi máy đọc giữ nguyên, theo tiền lệ GTM 1.11.0.
- **D4. Điều phối.** Em là người điều phối, subagent Claude làm việc đọc và viết qua workflow chạy nền. Chạy thử Chief of Staff trước, rút kinh nghiệm, rồi 6 kit còn lại song song.
- **D5. Cổng chất lượng chạy trong đêm.** 0 (bản đồ nghiệm thu trong mỗi sổ), 1 (tìm trước khi viết), 2 (mở lại nguồn cho điều khoản luật, số, nền tảng được áp dụng), 4 (quy ước chữ Việt), 5 (lộ trình công cụ mới để chỉ đọc, trạng thái `unknown`), 6 (checker hai chế độ, selftests, no-dashes, evals, aeo-check, installer list, quét gạch dài), 8 (nguyên tắc lặp ở từ 3 routine đưa vào `CONTRACT.md` bản Việt), 9 (người rà độc lập mỗi routine, tối đa 2 vòng sửa).
- **D6. Hoãn sang lượt sau, có ghi rõ.** Cổng 3 (chưa có chuyên gia thật; em soạn sẵn gói rà tiếng Việt cho mỗi kit). Cổng 7 lớp B chạy agent thật trên dữ liệu giả (ước khoảng 1,2 đến 2,5 triệu token mỗi kit, cần dựng fixture riêng). Bộ chấm `score_task.py` hiện chỉ đúng cho GTM. `copy-check.mjs` chưa bắt số tiền và số đếm tiếng Việt thiếu nguồn, và script phải giữ nguyên từng byte, nên đây là lỗ hổng biết trước.
- **D7. Commit.** Commit cục bộ theo từng kit trên nhánh `feature/vn-localization` sau khi kiểm đạt, để có điểm lùi. Không push, không mở PR, không publish npm.

## Quyết định nghiệp vụ dùng chung

- **D8. Câu trả lời của chủ.** "ok em", "làm đi" là duyệt; "để anh xem" là hoãn; "không làm" là từ chối. Thả tim, "seen", "khoan" đứng một mình là chưa rõ, người trực hỏi lại. Im lặng là đang chờ, không phải quyết định. Chỉ dấu tick trong sổ mới tạo `accepted`, `rejected`, `deferred`; người trực tick và dán nguyên lời chủ cùng giờ dưới dòng đó.
- **D9. Nhắc việc.** Việc chờ chốt được nhắc một lần trong bản tin sáng khi quá hạn, sau đó chỉ còn một dòng đếm, để chủ không bị nhắc lặp mỗi ngày (phiếu 02 dòng 128, [CG]). Dòng trong sổ vẫn giữ.
- **D10. Zalo.** Không tự động hóa Zalo cá nhân. Routine soạn, người trực bấm gửi. `notify.push` giữ nguyên bốn trường hợp chặn và không bao giờ đi Zalo.
- **D11. Ngưỡng luật.** Không chép con số luật (trần khuyến mại, khung giờ tin quảng cáo, mức phạt) vào file kit, theo tiền lệ GTM. Routine dùng quy tắc định tính; con số nằm trong hồ sơ do chủ ghi (hạn mức chi, mức giảm tối đa). Ứng viên cho một file luật dùng chung được liệt kê trong báo cáo mỗi kit.
- **D12. Ngày tháng.** Chủ thấy dd/mm/yyyy và tuần dạng khoảng ngày; khóa tuần ISO giữ nguyên trong tên file và sổ.
- **D13. Điều khoản sàn.** Routine đọc sàn hay mạng xã hội phải mở lại điều khoản của nền tảng (ví dụ Shopee S69, Meta S38) trước khi áp dụng. Nền tảng cấm theo dõi, thu thập thì routine không làm, chỉ dùng dữ liệu từ tài khoản của chính chủ.
- **D14. Phiên bản.** Mỗi biến thể nâng một bậc minor so với bản gốc, một dòng changelog cho lượt Việt hóa; root CHANGELOG ghi rõ gói npm công khai chưa chứa biến thể, chỉ installer của fork phục vụ.

## Ghi thêm trong lúc chạy

(Em bổ sung ở đây mỗi khi phải tự quyết thêm.)

- **D15. Routine không có Phần B** (ví dụ `cos-fault-dossier`). Không để nguyên tiếng Anh: làm một lượt chỉ dựa trên Phần A. Chữ cho chủ đổi sang tiếng Việt, và chỉ áp các quy tắc Phần A có [S#] đã mở hoặc [CG]. Có sổ điều khoản riêng, qua người rà độc lập như mọi routine khác. Không thêm quy tắc nào từ trí nhớ.
- **D16. Điều khoản nền tảng, mở lại ngày 24/09/2026.** Meta (mục 3.2), Shopee (mục 3.1, và mục 3.2.8 về công cụ AI), TikTok, TikTok Shop và Lazada đều cấm thu thập hoặc sao chép tự động khi chưa có đồng ý bằng văn bản. Điều khoản Shopee cấm cả theo dõi thủ công. Vì vậy routine không theo dõi trang đối thủ trên các nền tảng này; số liệu sàn chỉ lấy từ file xuất hay tài khoản của chính chủ. Google Maps cấm đánh giá giả, đánh giá đổi quà và đăng thông tin cá nhân người đánh giá. Nguồn nào chưa mở được điều khoản (thư viện quảng cáo TikTok, các trang tuyển dụng, Metric.vn) thì phải mở trước khi thêm vào danh sách theo dõi.
- **D17. Quan sát trên nền tảng cấm đọc tự động.** Google Search và chế độ AI, ChatGPT, Gemini, LinkedIn, Meta, TikTok, YouTube, Shopee, TikTok Shop, Lazada, Zalo, Haravan, Sapo: điều khoản mở lại ngày 24/09/2026 cấm truy cập hay thu thập tự động. Ở các bản Việt, bước quan sát trên những nền tảng này đổi thành "người trực hoặc chủ dán lại cái mình thấy". Công cụ của chính chủ vẫn đọc trực tiếp: Search Console, Cốc Cốc Quản trị trang web, file xuất Kênh Người Bán, tài khoản quảng cáo. Như vậy bản Việt ít tự động hơn bản gốc ở phần quan sát bên ngoài. Anh có thể nới lại nếu chấp nhận rủi ro điều khoản.
- **D18. [CG] chỉ được thu hẹp quyền, không bao giờ nới rộng.** Ví dụ, trong kit Ads, chủ đã chốt [CG] rằng AI được chi 0 đồng: bản Việt không chi tiền kể cả khi một kênh chi đã được mở trong RELEASES.md. Điều khoản không đánh dấu không đổi hành vi của bản gốc.
- **D19. Giờ chạy kiểm hồ sơ Chief of Staff.** Phiếu [CG] muốn 09:00; em đặt 08:55 (khung 08:40 đến 17:00) để giữ luật giãn cách trình duyệt với lượt quét thứ Tư 10:00, không phải dời lượt quét.
- **D20. Chú giải mẫu nhỏ.** Trong `STYLE-VI.md`, "chưa đủ 30 mẫu" đổi thành "chưa đủ mẫu", vì ngưỡng mẫu mỗi kit mỗi khác.
- **D21. Dòng "Xưng hô:" trong hồ sơ doanh nghiệp.** Giữ, dù câu 1024 của phiếu 02 không đánh dấu: đây là cách thực hiện quy ước xưng hô trong `STYLE-VI.md`, chỉ đổi cách trình bày, không đổi nghiệp vụ.
- **D22. File `market/manual.md`** (người trực dán điều mình thấy trên nền tảng cấm đọc tự động, theo D17): chủ doanh nghiệp là người ghi; bước cài đặt tạo sẵn mẫu trống; routine chỉ đọc, thiếu file thì hiểu là tuần này không có quan sát tay.
- **D23. Shopee cấm cả theo dõi thủ công** (điều khoản mục 3.1). Đường "dán tay" ở D17 không áp cho trang đối thủ trên Shopee: không ai theo dõi, đếm hay chép trang đối thủ trên Shopee, bằng tay hay tự động. File xuất Shopee của chính chủ vẫn dùng được. Bước nối dây chung rà lại mọi kit theo điều này.
- **Kết quả 6 kit còn lại** (Web Dev, SEO, Ads, CSKH, Social, Sales; 45 routine): 45 writer, rồi 110 agent tích hợp, rà, sửa và kiểm cuối, không agent nào lỗi. Không routine nào qua người rà ngay lần đầu: mỗi routine có lỗi mức SỬA, 4 routine có lỗi CHẶN ban đầu (Ads 2, Sales 1, CSKH 1) và đều đã gỡ. Cả 6 kit qua selftests, no-dashes, evals 7/7, aeo-check; kit gốc không đổi. Phiên bản: 1.9.0, riêng SEO 1.10.0 vì bản gốc đã ở 1.9.x. Commit cục bộ: web c44d637, seo be83ce9, ads cda9366, cskh d539e28, social 5b36661, sales d5b9ceb, chief of staff 12eb679.
- **D24. Danh bạ doanh nghiệp (Sales).** Trang Vàng Việt Nam và Trang Vàng BIZ cấm sao chép trái phép, nên routine không đọc tự động; chủ tra tay từng công ty và đối chiếu mã số thuế trên Cổng đăng ký doanh nghiệp.
- **Nối dây chung:** installer, skill hire, `docs/INSTALL.md`, root CHANGELOG, `.claude/memory.md`, luật localization; cả 7 bản mới qua checker kit không lỗi, thuê thử đều exit 0. Commit 31d6907; bản sửa D23 ở commit 27f27bd. Tổng kết cho anh: `localization-reports/VN-TONG-KET.md`.

## Việc chờ anh quyết, kèm đề xuất của em

1. **Giờ chạy.** Chief of Staff 08:55 hay 09:00 (em đề xuất giữ 08:55). SEO: standup 08:15 và lượt đăng 09:15 đều [CG] nhưng vướng luật giãn cách, em giữ giờ gốc đến khi anh chọn phương án trong báo cáo SEO. Ads: hai đổi giờ đã duyệt mâu thuẫn nhau, em giữ giờ gốc.
2. **Chạy cuối tuần** (Web Dev, Ads, Social, CSKH). Em đề xuất để `mon-fri` mặc định; chủ nào mở cửa thứ Bảy thì ghi `mon-fri sat` trong một dòng lịch (guard chỉ đọc dòng đầu tiên của mỗi routine; `sun` không có trong từ vựng).
3. **CSKH:** chọn giữa [CG] dòng 309 và [CG] dòng 1717 về tỷ lệ tin chưa phân loại.
4. **Social:** tách bài trả tiền và bài KOL khỏi bài tự nhiên cần một [CG] mới; đây là khoảng hở lớn nhất của kit.
5. **Sales:** giá trị kênh cho cách "gọi tổng đài trước, chat sau"; câu hỏi im lặng sau tin quảng cáo đầu tiên (Nghị định 91/2020 Điều 13 khoản 3) cần luật sư đọc văn bản gốc; placeholder người gửi ở lượt follow up vướng luật placeholder của checker.
6. **Việc của người bảo trì kit gốc:** `runlog.mjs` của SEO thiếu `seo-answer-visibility` trong CADENCE; `guard.mjs` chỉ đọc dòng lịch đầu tiên của mỗi routine; câu lỗi ở `cos-decision-review` dòng 576 bản gốc; README Web Dev gốc ghi v1.2.0.
7. **Chưa làm trong đêm:** cổng 3 (gói rà `review-packet-vi.md` của mỗi kit đã sẵn để đưa người làm nghề), cổng 7 lớp B (chạy agent thật trên dữ liệu giả), copy-check chưa bắt số tiền tiếng Việt, `employee.json` vẫn trỏ repo gốc, điều khoản VietnamWorks, CareerViet, ITviec, Metric.vn chưa mở được.
8. **Công khai:** nhánh `feature/vn-localization` mới commit cục bộ. Anh tự push và mở PR vào fork `phantanphatdgteam-gif/ai-employees-VN`; npm publish là việc của người bảo trì.
- **Kết quả lượt thử Chief of Staff:** 7 routine, 24 agent, khoảng 66 phút. Mọi routine qua checker; người rà tìm 4 đến 14 lỗi mức SỬA mỗi routine, không có lỗi CHẶN, đã sửa gần hết. Kit gốc không đổi. Còn thiếu dòng root CHANGELOG và đăng ký installer, làm ở bước nối dây chung. Một câu lỗi sẵn trong kit gốc (`cos-decision-review` dòng 576) để người bảo trì sửa; bản Việt đã sửa trong biến thể.
