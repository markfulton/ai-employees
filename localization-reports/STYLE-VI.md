# Vietnamese owner facing style sheet (every `-vn` kit)

Applies to literal text the member reads: templates, examples, brief lines and headings that no other file parses. Routine instructions stay in English. Parsed strings never change. Knowledge about Vietnamese law, culture and practice comes from the expert form and its dated sources, never from memory.

## Never translate

- JSON keys, status values, ids, file names, paths, `«PLACEHOLDER»` tokens, `SCHEDULE.md` columns and vocabularies, run record fields.
- Register lines such as `- [ ] accept`, `- [ ] reject`, `- [ ] defer`.
- Any heading another file reads. Grep the whole kit (routines, CONTRACT, INSTALL-PROMPT, scripts, examples) before translating a heading. Known parsed headings include `Waiting on you`, `## Today`, `## Blocked`, `## Calibration`, `## Corrections`, `## Member claims`, `## Agent sourced`, charter headings and `UNRECORDED RUN`. Precedent: `gtm-engineer-vn` 1.11.0 keeps parsed headings in English and writes the member's lines under them in Vietnamese.
- Cell tokens: `n/a (<reason>)`, `not measured`, `below the rate floor`, `not published`, `baseline week`, `not read this week`. Where the member reads one, add a fixed Vietnamese gloss after it, never instead of it: `n/a (below the rate floor)` chưa đủ mẫu, không tính %.

## Address and tone

- The assistant writes as "em". The member is "anh" or "chị" as the kit's business profile records it; when it does not, "anh/chị". Never "tôi", "bạn" or "sếp".
- The first line states the action or the result. One idea per line. No emoji, no teencode, at most one sentence of greeting.
- A refusal says what em did not do and why, naming the file or the date: "Em không ghi 'không đổi' vì trang không mở được ngày 23/09/2026."

## Formats

- Dates shown to the member: dd/mm/yyyy. A week shown to the member is a date range: "tuần 14/09 đến 20/09/2026". ISO dates and ISO week keys stay in ledgers, file names, JSON and backticks.
- Money inside backticks with its source path: `5.000.000 đ`. Percent: `10,5%`. Counts carry their unit: `12 đơn`, `30 hội thoại`.
- Ranges use "đến", never a dash. No U+2013 or U+2014 anywhere, including Vietnamese text and reports.
- Clock times never appear in a SKILL.md body or template; they live in the `SCHEDULE.md` row.

## Vocabulary, used identically across a kit

| Concept | Vietnamese |
|---|---|
| the member's AI Employees | đội nhân viên AI |
| morning brief | bản tin sáng |
| weekly decision brief | tờ trình |
| weekly metrics page | trang số tuần |
| competitor or market bulletin | bản tin đối thủ |
| monthly decision review | bản rà tháng |
| business profile, charter | hồ sơ doanh nghiệp |
| decision register or ledger | sổ quyết định |
| waiting on the member | chờ anh/chị chốt |
| accepted, rejected, deferred (display only) | đã chốt, từ chối, hoãn |
| done, dropped, worked, no effect (display only) | đã làm, không làm nữa, có chuyển đúng hướng, không thấy chuyển |
| spend ceiling | hạn mức chi |
| listed strikethrough price, current selling price | giá gạch, giá đang bán |
| net received from a platform | thực nhận |
| sale week | tuần sale |
| not enough sample | chưa đủ mẫu |
| order refused on delivery | boom hàng |
| cash on delivery | COD (thu tiền khi giao) |

A kit may add its own role terms from its form section A4 in its report, and then uses them identically in every routine of that kit.

## Owner replies, for routines that read the member's answers

- "ok em", "làm đi", or an approve button: duyệt.
- "để anh xem", "để chị xem": hoãn.
- "không làm": từ chối.
- A heart, "seen", a bare "ok" while several items are open, and a bare "khoan" are not decisions. The person on duty asks: "Anh/chị chốt việc số mấy ạ?"
- Silence is waiting, never a decision.
- Only a tick in the register creates `accepted`, `rejected` or `deferred`. The person on duty ticks and pastes the member's words and the time under the row.

## Banned in owner text

"chắc chắn" for a prediction; "số 1", "nhất", "duy nhất", "hàng đầu", "top 1" unless the claim sits in the evidence file with its supporting document; "em đã gửi" when nothing was sent; "không đổi" for a page that was not read; any number without its source path.

## Channels

The member lives in Zalo. No routine automates personal Zalo: routines draft, and a named person on duty sends. `notify.push` and `brief.deliver` keep their original routes, and a push never goes to Zalo.
