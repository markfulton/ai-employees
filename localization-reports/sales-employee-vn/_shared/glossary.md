# sales-employee-vn: glossary

The exact Vietnamese the member reads, used identically in all seven routines, templates and examples of the variant. Sources: form Phần A A4 (lines 112 to 139) and A3 (lines 99 to 105), the shared table in `localization-reports/STYLE-VI.md`, and Gate 1 wording (below). This file is wording only: a rule reaches a routine through `phan-a-ledger.md`, never through a gloss here. Machine strings stay English (`parsed-strings.md`); where the member reads one, the Vietnamese follows it as a gloss.

## Address

- The assistant is "em"; the member is "anh" or "chị" as `strategy/offer.md` or the business profile records it, "anh/chị" when absent (STYLE-VI).
- A prospect is addressed "anh" or "chị" at first contact. A draft never has the sender call themself "em" to a peer or an elder unless the member set it at intake (Phần A 101a, `[CG]`). Never "bạn", "tôi" or "sếp".

## Shared terms (from STYLE-VI, repeated so writers do not look twice)

| Concept | Vietnamese |
|---|---|
| the member's AI Employees | đội nhân viên AI |
| morning brief (`brief-latest.md`) | bản tin sáng |
| waiting on the member (`## Waiting on you` stays English) | chờ anh/chị chốt |
| spend ceiling | hạn mức chi |
| not enough sample, below the rate floor | chưa đủ mẫu, không tính % (gloss after `n/a (below the rate floor, «n» of «floor» sent)`; the floor number comes from the file, never 30 by default) |
| cash on delivery | COD (thu tiền khi giao) |

## Role terms

| Kit concept or English token | Vietnamese the member reads | Form line | Never confuse with |
|---|---|---|---|
| lead, prospect (a row in `crm/prospects.jsonl`) | đầu mối | 112 | khách hàng (only after a contract, PO, invoice or payment) |
| opportunity, deal | cơ hội | 113 | một cuộc gọi nhỡ |
| pipeline (`PIPELINE.md`) | phễu | 114 | phễu quảng cáo |
| weekly pipeline review (`sales-pipeline-review` output) | báo cáo phễu tuần | A2 72 | |
| first touch (step 1) | chạm đầu | 115 | lần nhắc |
| follow up (step 2 and above) | lần nhắc | 116 | gọi lại ngay cho cùng một số |
| `won`, `lost` (display only) | thắng, thua | A5.5 192, S72 vocabulary | "đã chốt", which STYLE-VI keeps for the member's decisions |
| the customer agreed to buy or sign | chốt đơn, ký hợp đồng | 117 | khách nói "hay đấy" |
| closer, account executive | người chốt | 118 | the SDR |
| the role itself | kinh doanh B2B tìm khách mới (SDR) | form title | telesale B2C |
| tax code | MST (mã số thuế) | 119 | số điện thoại |
| legal representative | người đại diện pháp luật | 120 | kế toán trưởng |
| switchboard, reception | tổng đài, lễ tân | 121 | người quyết định |
| decider at an SME | giám đốc hoặc chủ doanh nghiệp | A3 99 | chức danh trên LinkedIn hay tin tuyển dụng |
| influencer (accountant, the department in pain) | người ảnh hưởng | A3 99 | người ký |
| Voice Brandname | tên định danh cuộc gọi (Voice Brandname) | 122 | tên Zalo cá nhân |
| national Do Not Call register | Danh sách không quảng cáo (DNC) | 123 | danh sách khách đã từ chối của mình |
| `do_not_contact` (display gloss) | không liên hệ nữa | A2 86 | tạm hoãn |
| Zalo Official Account | Zalo OA | 124 | Zalo cá nhân của sales |
| Zalo notification service | ZNS (tin thông báo qua Zalo) | 125 | tin chào hàng |
| credit terms | công nợ (số ngày) | 126 | chiết khấu |
| VAT | VAT (thuế GTGT) | 127 | phí chuyển khoản |
| e-invoice | hóa đơn điện tử | 128 | báo giá PDF |
| framework contract | hợp đồng nguyên tắc | 129 | một tin "ok em" |
| discount | chiết khấu | 130 | hoa hồng |
| referral commission | hoa hồng | 131 | chiết khấu cho người mua |
| purchase order | PO (đơn đặt hàng) | 132 | báo giá của mình |
| KPI | KPI | 133 | doanh thu cả công ty |
| contact list | danh sách liên hệ có nguồn (avoid "data", which in the trade means a bought file) | 134 | khách đã đồng ý |
| cold, never spoken to | đầu mối nguội | 135 | khách cũ |
| warm, referred or left a number | đầu mối ấm | 136 | quảng cáo Facebook |
| a stall, not a refusal ("để em xem đã", "cuối tháng nhé") | câu hẹn lại, chưa phải từ chối | 137, A3 101 | "đừng gọi nữa" |
| quote | báo giá | 138 | hóa đơn |
| deposit | cọc | 139 | công nợ |
| consent to advertising contact | đồng ý nhận quảng cáo | A6 226 | im lặng, which is not consent |
| new ward address, old address line | địa chỉ phường mới, địa chỉ cũ (trong ngoặc) | A3 102 | |
| announced public holiday | ngày nghỉ lễ đã công bố | A3 103 | lịch nghỉ mới là đề xuất |
| `replied` (display) | phản hồi | 1724 [CG] | email reply rate |
| next step (`booked` or `won` after a reply) | bước tiếp | 1724 [CG] | chốt hẹn bước tiếp theo, the Gate 1 phrase for the act of booking |
| self declared company size | (tự khai) | 1646d [S40] | a legal small and medium business class |

## Kit artifacts, as the member sees them

| Kit concept | Vietnamese | Note |
|---|---|---|
| `sales-desk-setup` output (offer, buyer, qualification, message library) | cẩm nang bán | A2 68 names it "cẩm nang bán: sản phẩm, chân dung, tiêu chí lọc, khung thoại và tin" |
| buyer segment | nhóm khách | A2 69 |
| buyer persona (`strategy/buyer.md`) | chân dung khách | A2 68 |
| qualification tests (`strategy/qualification.md`) | tiêu chí lọc | A2 68, 73 |
| message library frameworks | khung thoại và tin | A2 68 |
| call script (new in the variant) | kịch bản gọi | A2 70 |
| draft | bản nháp | never "em đã gửi" unless a tick says it was sent (STYLE-VI) |
| queue file for first touches | danh sách chạm đầu chờ gửi | file name stays English |
| queue file for follow ups | danh sách nhắc chờ gửi | file name stays English |
| the tick `- [ ] sent` | đánh dấu vào ô khi anh/chị đã tự gửi | the line itself stays English |
| weekly review Numbers table metric names (`sales-pipeline-review` Step 8) | `Đầu mối đạt tiêu chí lọc`, `Bản nháp`, `Anh/chị đã tự gửi`, `Phản hồi`, `Yêu cầu không liên hệ nữa` | fixed wording and order, every week; routine line 459 |
| veto line | dòng nhắc bản nháp chưa gửi | first line of every bản tin sáng |
| proof inventory | bằng chứng được phép nói | A7 244 |
| handoff card | phiếu bàn giao | A2 87 |
| meeting booked stage | đã có lịch hẹn | display gloss after `meeting-booked` |
| stages `new`, `in-conversation`, `proposal`, `closed` (display gloss only) | mới, đang trao đổi, đã gửi báo giá, đã đóng | headings stay English in `PIPELINE.md` |
| month end qualification refresh | rà tiêu chí lọc cuối tháng | A2 73 |
| desk standup | bản tin sáng việc sales | A2 74 |

## Gate 1: reusable Vietnamese wording from Snagon skills

Searched `/Users/phantanphat210593/AI wspace/Claude wspace/Plugin-CLI/plugins/` on 24/09/2026. `ub-sales-1` and `ub-sales-2` (30 skills) and `ub-email-2/cold-outreach` carry Vietnamese only in their `description` line; the bodies are English. No skill covers a Vietnamese SDR routine, Vietnamese consent law or Vietnamese data sources. Wording kept, rules left behind (for example the "3 chạm trong 7 ngày" cadence in `cold-outreach` is a rule and is not taken):

| Wording | From | Use in this kit |
|---|---|---|
| gỡ từ chối; lý do khách chối (giá, thời điểm, niềm tin) | `ub-sales-1/objection-handler` | objection angles in the message library |
| buổi gọi đầu tiên; câu hỏi sàng lọc | `ub-sales-1/discovery-call-script` | call script headings |
| chốt hẹn bước tiếp theo | `ub-sales-1/discovery-call-script` | the ask at the end of a call script |
| khách im không trả lời | `ub-sales-1/sales-email-template` | follow up reason line |
| gửi báo giá; bản đề xuất | `ub-sales-1/sales-email-template`, `proposal-writer` | handoff card text |
| phân tích thắng thua | `ub-sales-1/win-loss-analysis` | weekly review section wording |
| kịch bản bán hàng qua điện thoại hoặc tin nhắn | `ub-sales-1/sales-script` | description of the call and Zalo drafts |
| tìm khách mới chưa từng liên hệ | `ub-email-2/cold-outreach` | describing đầu mối nguội |
