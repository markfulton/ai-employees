# Ví dụ đầu ra

Một ngày làm việc của GTM Engineer bản Việt Nam, cho một doanh nghiệp hư cấu: xưởng nội thất văn phòng Mộc Xanh, chủ là chị Hà (ha@example.org), đóng bàn làm việc và tủ hồ sơ cho văn phòng nhỏ. Mọi tên người, tên công ty và con số trong thư mục này đều bịa ra, và mọi file đã chạy qua `scripts/copy-check.mjs` của bộ kit trước khi đưa vào.

Ngày trong ví dụ là tuần từ 21 đến 25/09/2026, tuần đầu chạy. Mới có hai thư được chủ tích là đã gửi, còn dưới ngưỡng tối thiểu để tính tỷ lệ, nên bản tin không có tỷ lệ và bảng điểm sẽ ghi `n/a (baseline week)` ở chỗ con số sẽ xuất hiện sau.

| File | Là gì |
|---|---|
| `brief-latest.md` | Bản tin sáng tối đa ba mươi dòng mà `gtm-board-standup` viết mỗi ngày làm việc. Ba mục giữ tên máy đọc `Today`, `Waiting on you`, `Blocked`; nội dung việc bằng tiếng Việt. Dòng kẹt chép nguyên văn từ bản ghi lượt chạy nên giữ tiếng Anh. Dòng cuối là dòng trỏ cố định của bộ kit. |
| `runlog.jsonl` | Ba bản ghi lượt chạy: một `ok` của việc quét tín hiệu, một `ok` của bản tin sáng, một `skipped-out-of-window`. Đúng khuôn mà `scripts/runlog.mjs` nhận. |
| `board/LAUNCH-BOARD.md` | Bảng ra mắt như bản tin sáng vẽ lại: phần đầu tiếng Việt, dòng thẻ giữ nguyên khuôn máy đọc, năm thẻ, hai thẻ đã tích. Tên giai đoạn lấy từ hồ sơ chiến lược lúc cài. |
| `crm/contacts.csv` | Sổ liên hệ: dòng tiêu đề, một dòng anh/chị tự nhập phía trên vạch, một dòng việc quét tín hiệu thêm phía dưới vạch. |
| `queue/2026-09-22-email.md` | Một thư chạm đầu theo đúng khuôn mục hàng đợi. Chưa gửi gì; ô chưa tích. Dòng tiêu đề đầu file, dòng `- id:` và dòng `- [ ] sent` giữ nguyên khuôn máy đọc. |

File thật nằm ở thư mục gốc của bộ kit, không nằm ở đây. Thư mục này chỉ để anh/chị xem hình dạng trước khi cài.
