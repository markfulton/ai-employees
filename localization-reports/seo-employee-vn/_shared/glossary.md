# seo-employee-vn: glossary for owner facing Vietnamese

Built on 24/09/2026 from form Phần A (A4 lines 115 to 134, A3 lines 102 to 108, A2 and A5 where they name a task or a screen), checked against `localization-reports/STYLE-VI.md`. Every routine of this kit uses exactly the Vietnamese form in the second column wherever the member reads the concept. Routine instructions stay English; parsed strings stay English (see `parsed-strings.md`); a Vietnamese form may follow an English token as a gloss, never replace it.

## Spelling and form

- Tone mark on the main vowel, as in `VN-DECISIONS.md` ("Việt hóa"): **từ khóa, sức khỏe, hóa đơn, minh họa, chuẩn hóa**. The form mixes "khoá" and "hóa"; the kit does not. Exception: a Google or Cốc Cốc screen label is quoted exactly as the screen prints it.
- The assistant is "em"; the member is "anh" or "chị" per the business profile, "anh/chị" when absent. A published article addresses its reader as `voice.md` records ("anh/chị" or "bạn"), one form per article (A5.10, line 218). The two never mix: "bạn" is allowed in an article body, never in a brief line.
- Dates dd/mm/yyyy, a week as "tuần 14/09 đến 20/09/2026" (D12). Money `1.200.000 đồng` in articles (A5.10); in briefs STYLE-VI's backticked `5.000.000 đ` with its source path.
- Ranges use "đến", never a dash.

## Role terms (A4)

| Concept, English token in the kit | Vietnamese the member reads | Do not confuse with | Form line |
|---|---|---|---|
| full site SEO | SEO tổng thể | SEO theo từ khóa (gói vài từ khóa rồi đi link) | 115 |
| keyword, `keyword`, primary keyword | từ khóa, từ khóa chính | chủ đề rộng | 116 |
| cluster | cụm chủ đề | trụ cột | 117 |
| pillar | trụ cột (trụ cột chủ đề) | danh mục menu trên web | 118 |
| lead paragraph under H1 | sapo; in an owner facing summary: đoạn mở đầu bài | thẻ mô tả (meta description); phần mềm Sapo | 119 |
| slug | slug (đường dẫn cuối, viết không dấu) | tiêu đề | 120 |
| indexed, index | đã lập chỉ mục | lên top | 121 |
| Search Console | Search Console (Google Search Console) | Google Analytics | 122 |
| impressions | lượt hiển thị | lượt truy cập | 123 |
| clicks | lượt nhấp | lượt truy cập | 173 |
| CTR | CTR (tỷ lệ nhấp) | tỷ lệ chuyển đổi | 124 |
| average position | vị trí trung bình | thứ hạng một lần tra tay | 173 |
| `refresh` | làm mới bài | viết bài mới | 125 |
| backlink | backlink (liên kết từ site khác) | liên kết nội bộ | 126 |
| internal link | liên kết nội bộ | backlink | 126 |
| PBN | PBN (site vệ tinh) | trang chi nhánh hợp pháp của cùng thương hiệu | 127 |
| AEO | AEO (tối ưu để AI nhắc và dẫn link về site) | SEO thông thường | 128 |
| AI Overviews | Thông tin tổng quan do AI tạo (AI Overviews) | một thứ hạng riêng | 129 |
| AI Mode | Chế độ AI (AI Mode) | Gemini app | 129 |
| Generative AI performance report | Báo cáo hiệu suất AI tạo sinh (chỉ có lượt hiển thị) | báo cáo Hiệu suất thường | 129, S68 |
| Generative AI control for Search | Kiểm soát AI tạo sinh cho Tìm kiếm | cài đặt robots.txt | 246, S70 |
| EEAT, YMYL | EEAT, YMYL (độ tin cậy, ngành sức khỏe, tài chính) | một thẻ schema bắt buộc | 130 |
| canonical | URL chuẩn (canonical) | chuyển hướng 301 | 131 |
| noindex | noindex (không đưa trang vào chỉ mục) | Disallow trong robots.txt (chặn thu thập) | 132 |
| hotkey | hotkey (từ khóa ngắn, lượng tìm cao) | từ khóa dài | 133 |
| entity | thực thể (thương hiệu, người, địa điểm nhận diện thống nhất) | từ khóa | 134 |

## Screens and controls, quoted as Google and Cốc Cốc print them

| English in the kit | Vietnamese label | Source |
|---|---|---|
| URL Inspection | Công cụ kiểm tra URL | S30, re-opened 24/09/2026 |
| Request indexing | Yêu cầu lập chỉ mục | S30 |
| URL is on Google | URL nằm trên Google (không bảo đảm đang hiện trên kết quả) | S30 |
| sitemap | sơ đồ trang web (sitemap) | S29 |
| owner, full user, restricted user | chủ sở hữu, người dùng có quyền đầy đủ, người dùng bị hạn chế | S27, S31. The form writes "Người dùng toàn quyền"; use the Google wording |
| Cốc Cốc webmaster tools | Quản trị trang web Cốc Cốc | S48 |
| Google Business Profile | trang Google Doanh nghiệp | form line 85, S12 "Trang doanh nghiệp". Never "hồ sơ doanh nghiệp": STYLE-VI reserves that for the member's business profile |
| Haravan admin path | Website, Blog, Thêm bài viết | S39, S40 |
| Sapo Web fields | thẻ tiêu đề, thẻ mô tả, đường dẫn/alias | S64 |

## Kit concepts (the member's view of the eight routines)

| Kit concept | Vietnamese | Note |
|---|---|---|
| the member's AI Employees | đội nhân viên AI | STYLE-VI |
| `seo-standup`, morning brief, `brief-latest.md` | bản tin sáng | STYLE-VI; A2 76 calls it "brief việc đầu ngày" |
| `seo-intake-and-map` | khảo sát website và lập bản đồ chủ đề | A2 69 |
| `seo-calendar-refill`, calendar | nạp lịch biên tập; lịch biên tập | A2 70 |
| `seo-draft-run`, draft | viết bài; bản nháp | A2 71 |
| `seo-publish-run` | đăng bài | A2 72 |
| `seo-index-sweep` | quét lập chỉ mục | A2 73 |
| `seo-rank-review`, scoreboard | đọc thứ hạng tuần; trang số tuần | A2 74; STYLE-VI "weekly metrics page" |
| weekly Zalo summary drafted for a person to send | báo cáo tuần (15 đến 25 dòng) | A3 106 `[CG]`; the length is owner approved |
| `seo-answer-visibility` | soi mức được AI nhắc tên | A2 75 |
| topic map, `strategy/topic-map.md` | bản đồ chủ đề | A2 69 |
| answer map, `strategy/answer-map.md` | bản đồ câu hỏi của người mua | A3 104 |
| business profile, `strategy/properties.md` and charter | hồ sơ doanh nghiệp | STYLE-VI |
| voice, `strategy/voice.md` | giọng văn | A7 258 |
| banned words list | từ, cụm bị cấm | Snagon `content-style-guide` wording |
| board, card, `WORK-BOARD.md` | bảng việc, thẻ việc | A2 94, A4 125 |
| waiting on the member | chờ anh/chị chốt | STYLE-VI |
| blocker | việc đang kẹt | |
| assumption, `assumptions[]` | giả định em đã tự chọn | |
| property (a site in the kit) | website; in Search Console: tài sản | S31 uses "tài sản" |
| hero image | ảnh đại diện bài | A5.7 203 |
| alt text | alt (mô tả ảnh) | A5.7 203 |
| title tag, meta description | thẻ tiêu đề, thẻ mô tả | S64 |
| authority link | liên kết nguồn uy tín | |
| call to action | lời kêu gọi cuối bài (nút Zalo, gọi, form) | A3 106 |
| buyer question | câu người mua hỏi | A3 104 |
| search intent | ý định tìm kiếm | Snagon `keyword-research` |
| crawl | thu thập dữ liệu | S27 |
| hacked content, gambling redirect | nội dung của kẻ xâm nhập; chuyển hướng sang cờ bạc | S11, A2 83 |
| link spam, scaled content, scraped content, doorway pages | mua bán liên kết; nội dung tạo hàng loạt; sao chép nội dung; trang ngõ | S11 |
| AI image label under the image | Ảnh minh họa tạo bằng AI | A5.7 203d `[CG]`, spelled per this sheet; the form wrote "minh hoạ" |
| health supplement | thực phẩm bảo vệ sức khỏe (TPBVSK) | A2 84 |
| ad content confirmation | giấy xác nhận nội dung quảng cáo | S8, S75 |
| declared uses (cosmetics) | công dụng đã công bố | S66 |
| administrative units | tỉnh, thành phố; phường, xã (đơn vị hành chính hiện hành) | S18, S19 |
| Tết window | tháng Chạp, mùng 6 | A3 107 |

## Band and status glosses (token stays, gloss follows)

| Token the member may read | Fixed gloss |
|---|---|
| `winning` | đang lên top |
| `striking distance` | sắp lên top |
| `invisible` | chưa hiện trên kết quả |
| `too new` | bài còn mới, chưa chấm |
| `unclassified` | chưa xếp loại |
| `watching` | theo dõi thêm |
| cluster met the pause rule | tạm dừng viết thêm |
| `n/a (no result page saved by a person)` | chưa có trang kết quả do người xem tay lưu lại |
| `ready` (draft ledger) | bản nháp xong, chờ đăng, chưa lên web |
| `not measured` | chưa đo được |
| `n/a (below the rate floor)` | chưa đủ lượt hiển thị để tính tỷ lệ |
| `n/a (range control also saves a view)` | không đổi khoảng ngày vì sẽ lưu thành chế độ xem của anh/chị |
| `baseline week` | tuần gốc để so sánh |
| `live-check-failed` | đã đăng nhưng kiểm trang live chưa đạt |
| `requested`, `already-indexed`, `re-requested` | đã yêu cầu lập chỉ mục; đã có trong chỉ mục; đã yêu cầu lần hai |
| no GA4 conversion data | chưa đo được đơn (A5.1, line 173) |

No gloss carries a number: thresholds are the member's values in `strategy/properties.md`.

## Gate 1: reusable Vietnamese wording from Snagon skills (wording only, no rules)

Searched `AI wspace/Claude wspace/Plugin-CLI/plugins/` on 24/09/2026: `ub-seo-1` (10 skills), `ub-seo-2` (10 skills), `ub-content-3`, `ub-ops-2/weekly-report`. Skill bodies are English; only the Vietnamese `description` lines carry reusable wording. None of their rules (link building outreach, keyword volume estimates, GBP posting cadence) is taken: several conflict with this kit's held actions and with S11.

| Snagon skill | Wording reused | Where it helps |
|---|---|---|
| `ub-seo-1/keyword-research` | ý định tìm kiếm; từ khóa đuôi dài | calendar entry intent, brief lines |
| `ub-seo-1/featured-snippet-optimizer` | ô kết quả nổi bật (vị trí số 0) | `seo-draft-run` notes, rank brief |
| `ub-seo-1/meta-tag-optimizer` | thẻ title, meta description; trang bị Google cắt chữ | draft notes (prefer "thẻ tiêu đề, thẻ mô tả" when naming the Sapo or Haravan field) |
| `ub-seo-1/site-architecture-plan` | cấu trúc URL; liên kết nội bộ; cây danh mục | topic map summary |
| `ub-seo-1/technical-seo-checklist` | dữ liệu có cấu trúc; kiểm tra sức khỏe kỹ thuật site | index sweep brief lines |
| `ub-seo-1/seo-audit` | kho nội dung (bài nào giữ, gộp hay xóa) | intake monthly review |
| `ub-seo-2/local-seo-plan` | NAP đồng bộ (tên, địa chỉ, số điện thoại) | A2 85a card wording |
| `ub-content-3/content-pillar-strategy` | trụ cột chủ đề; chủ đề con | topic map |
| `ub-content-3/content-style-guide` | quy chuẩn văn phong; từ nên dùng và cụm bị cấm | `voice.md` explanation to the member |
| `ub-ops-2/weekly-report` | tóm tắt; bảng chỉ số; việc đã xong; vướng mắc kèm hướng gỡ; ưu tiên tuần tới | the Zalo báo cáo tuần draft from `seo-rank-review` (section names under the parsed scoreboard, not replacing it) |

Not reused: "tỉ lệ click" (use "CTR (tỷ lệ nhấp)"), "index" as a Vietnamese verb (use "lập chỉ mục"), "traffic tự nhiên" (use "lượt nhấp từ tìm kiếm" when the number comes from Search Console, since the kit reports clicks, not sessions).

## Added by the integrator, 24/09/2026

Rows above from the `seo-rank-review` patch request (`watching`, the pause rule, the unsaved result page) and the `seo-draft-run` request (`ready`). No other row changed.
