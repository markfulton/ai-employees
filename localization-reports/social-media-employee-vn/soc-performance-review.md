# soc-performance-review: provenance ledger

Status on 24/09/2026: **ledger complete, Gate 2 sources re-opened, routine edits applied to the variant routine and checked (see Files and checks).** Writer pass only; the independent reviewer (Gate 9) has not run.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-6. soc-performance-review`, form lines 1733 to 2027. Phần A is not re-decided here: every Phần A row is cited from `_shared/phan-a-ledger.md`.
- Extract: `extract_form_section.py --routine soc-performance-review`, saved as `scratchpad/vn/social-media-employee-vn/soc-performance-review-extract.md` and `.json`. 139 rows and answers: 12 with `[S#]`, 7 with `[CG]`, 2 with both, 122 unmarked (prompts and headers included). Full Phần B (B0 to B12, B14).
- Form author (A1): an AI sub agent playing the Social Media role, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs social media for a Vietnamese business.** Every ADOPT below still needs that review before sale (Gate 3, deferred by D6).
- What each `[CG]` in this section covers, checked in `~/Downloads/khung-cg/ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx` on 24/09/2026 (a `[CG]` covers only the fragment its review row names):
  - KN-06-046 (Đúng), form 1743: "ngưỡng mẫu 4 bài thay vì 8 vì SME ít bài".
  - KN-06-047 (Đúng), form 1776: only "Lý do nhịp: chủ SME chốt việc cuối ngày thứ Sáu, không đọc báo cáo sáng Chủ nhật". **The review row quotes a different period ("Tuần thứ Hai 00:00 đến Chủ nhật 23:59"); the form now reads "thứ Sáu 00:00 tuần trước đến thứ Năm 23:59".** The period itself was edited after review and carries no `[CG]`.
  - KN-06-048 (Đúng), form 1817: "Mục tiêu 90% hỏi mua dưới 15 phút là KPI nội bộ".
  - KN-06-049 (Đúng), form 1822: "Mỗi ô cần ít nhất 4 bài trong 4 tuần mới được tính trung bình Lượt xem".
  - KN-06-050 (Đúng), form 1853: "SME không đủ 8 bài/tuần như mẫu Mỹ".
  - KN-06-051 (Đúng), form 1867: "Trang nào đủ 8 bài/tuần thì dùng lại sàn 8", with the note that 4 is a scale adjustment, not an industry standard.
  - KN-06-052 (Đúng), form 1936: "Ads và đơn không có trong xuất thì trả lời chưa đo, không đoán".
  - From Phần A: KN-06-014 (form 214) covers "Không đưa tên khách" and its note on the send time; the Phần A ledger decided MOVE of the Friday 16:30 delivery to this routine's `SCHEDULE.md` row, applied in this pass.
- Original kit and routine: `employees/social-media-employee`, `routines/soc-performance-review/SKILL.md`, 796 lines, 78859 bytes.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id; 90981 bytes after this pass (115 percent).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version before: 1.8.1 (scaffold copy). After: set once for the whole kit by the lead (D14).
- Gate 1: `_shared/glossary.md` section 4 already records the Snagon skill search (24/09/2026). No Vietnamese performance review routine exists; wording `chấm điểm kênh` and `trang số tuần` reused from the glossary and STYLE-VI.

## Sources re-opened on 24/09/2026

Already verified in the Phần A ledger and only cited here: S16 (VTV8, phishing takeover of business Pages), S32 (Luật 91/2025/QH15, disclosure prohibited, in force 01/01/2026), S34 (Meta, Lượt xem main metric from 14/11/2024, repeats counted for non video content). S35 did not load in Phần A; S34 carries the rule.

| Source | URL | Date checked | What it supports here | Verdict |
|---|---|---|---|---|
| S31 YouNet ECI via Brands Vietnam | https://www.brandsvietnam.com/congdong/topic/tmdt-viet-nam-2025-tang-truong-26-nhung-nguoi-tieu-dung-ngay-cang-nhay-cam-ve-gia | 24/09/2026 | B11 case 12: 458,16 nghìn tỷ đồng is the 2025 GMV of four marketplaces, not a shop's revenue | Index URL returned HTTP 403. **Confirmed on the publisher's own page** https://youneteci.com/tmdt-viet-nam-2025-tang-truong-26-yoy/ (dated 11/02/2026): "tổng giá trị giao dịch (GMV) của 4 nền tảng Shopee, TikTok Shop, Tiki và Lazada đạt 458,16 nghìn tỷ đồng, tăng trưởng 26%". Also repeated by S19. The figure stays out of the kit; only the qualitative rule enters |
| S19 VietnamPlus | https://www.vietnamplus.vn/so-ke-thi-phan-voi-shopee-tiktok-shop-tang-truong-doanh-thu-den-93-nam-post1098486.vnp | 24/09/2026 | Form 1802: "Sàn TikTok Shop có doanh thu riêng, không cộng vào đơn inbox" | Page opened (dated 12/03/2026). It reports the four marketplace GMV, shares and growth; **it says nothing about orders taken in messages versus marketplace revenue.** Does not support the clause: UNVERIFIED |

Not re-opened, index viewing date 23/09/2026: S45 (a blog about an inbox and order tool, behind UNVERIFIED rows only; Phần A 162 already rejected it as a price source). No ADOPT or MOVE here rests on S45, S19 or S35.

## Clause decisions

Decisions follow `references/form-map.md`. An unmarked clause never changes behaviour; a `[CG]` narrows or adds a rule only for its own fragment (D18). Prompt and header lines (1740, 1747, 1762, 1780, 1782, 1831, 1833, 1849, 1851, 1881, 1883, 1897, 1898, 1940, 1958, 1960, 1976, 1978, 1993, 1995, 2011, 2022) carry no clause and are not rows.

### B0 and B1

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1741 B0 tick "Làm khác" | none | KEEP | report only | Recorded; the routine stays the Friday review |
| 1743a Friday scoring from the platforms' own exports and the order book | none on this clause; D16 and Phần A platform terms bind | ADOPT (from D16, not from the form) | Step 6a new paragraph "Only the member's own account"; Step 10 routing row; failure row | Phần A verdict: `soc-performance-review` reads only the member's own insight screens and exports; exports are the safer shape |
| 1743b LinkedIn is not the main channel | none | KEEP | none | The kit scores only platforms in `plan/channels.md`; `read-linkedin` stays |
| 1743c Lượt xem is never compared with the old reach | `[S34]`, verified in Phần A (A4 119, ADOPT with this routine as target) | ADOPT | Step 3 new bullet "A platform that changed what a metric counts"; Step 5 sentence; refusal bullet; failure row; CONTRACT patch 11 | Confirmed platform rule; the routine names no platform or date, CONTRACT carries them |
| 1743d the week runs Monday to Sunday | none | UNVERIFIED | report | Unmarked, and it contradicts 1776 (Friday to Thursday). The inherited joined window `[last_window_end, run start)` already counts Saturday and Sunday |
| 1743e sample floor 4 instead of 8 | `[CG]` KN-06-046 | ADOPT | Step 3 floor bullet; Step 12 state example `sample_floor: 4` | Owner approved |
| 1743f Vietnamese report, dd/mm/yyyy | none | WORDING | Step 9 language paragraph and template | STYLE-VI and D12 |
| 1743g sent on Zalo | none | KEEP | none | The routine sends nothing; a person on duty forwards the page (D10) |
| 1749a one page of at most 40 lines, one stop, one do more, every figure sourced | none | KEEP | Step 9, Step 10 | Inherited |
| 1749b buying inquiries as a metric | none | DEFER | `soc-engagement-sweep` | No ledger kind marks a buying question; B-5 owns the inbound kinds |
| 1749c orders on the page | none here; `[CG]` at 1936 | ADOPT (via 1936) | Step 3 orders bullet; Step 9 example rows | See 1936f |
| 1749d the export date beside each figure | none | KEEP | Source column; `scorecard/manual.md` reported as typed | Inherited |
| 1751 recipient, Friday 16:30, internal group without outside collaborators | none here; Phần A A5.10 214 `[CG]` KN-06-014 | MOVE (decided in Phần A) | `SCHEDULE.md` row, patch requests 1 to 9 | Fire moves from 16:00 to 15:50 so a full 40 minute budget ends by 16:30. The group rule is a human delivery choice: UNVERIFIED |
| 1752a 100 percent sourced, zero customer names | none; S32 at 1931 | KEEP and ADOPT | Step 9 rule 7 | Sources inherited; names adopted at 1931 |
| 1752b read in 10 minutes; do more applied only after the owner's OK | none | UNVERIFIED | report | The original files both slots itself and the member holds them; unmarked text cannot add an approval gate |
| 1753 bad page: "Tuần này ổn", reach plus Lượt xem, ads praised as organic | none | EXAMPLE | acceptance traps | Reach plus Lượt xem is covered by 1743c; ads separation stays UNVERIFIED (1855) |
| 1758a priority: orders, buying messages, saves and shares, comments, then Lượt xem | `[S34][S35]` support only the reason clause | UNVERIFIED | report | The sources prove repeat counting, not a ranking of metrics |
| 1758b Lượt xem counts repeats and scrolls since 14/11/2024 | `[S34]` verified | ADOPT | same as 1743c | Same rule |
| 1758c money only from the order book or the marketplace, never from Lượt xem; "chưa đo được doanh thu" | none | KEEP and WORDING | Step 3 orders bullet; refusal bullets | Inherited "no estimate, no projection"; wording follows 1936f |

### B2

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1764 triggers: end of the selling week, owner asks, before a monthly pillar change | none | KEEP | none | Scheduled only |
| 1766 Friday 16:30 for Monday to Sunday; Saturday 9:00 or Monday 8:30 on a live day | none | UNVERIFIED | report | Unmarked B2 clock times never move a row; the 16:30 delivery moves on Phần A's `[CG]` only |
| 1767 five request phrasings | none | EXAMPLE | acceptance section | No rule |
| 1768 deadline 90 minutes from export | none | UNVERIFIED | report | Budget stays 40 min in the row |
| 1769 ends when sent and saved; calendar unchanged until OK | none | UNVERIFIED | report | See 1752b |
| 1770 one reminder after 2 working days | none | UNVERIFIED | outbound deferral to `soc-calendar-standup` as a proposal | D9 governs reminders in the brief; unmarked here |
| 1771a no scoring without access; no inbox answers from the report | none | KEEP | `n/a (query failed)`, login wall; the routine never replies | Inherited |
| 1771b monthly report only after 4 weekly pages | none | UNVERIFIED | report | No monthly output in this routine |
| 1776a period Friday 00:00 to Thursday 23:59 | none (KN-06-047 covers only the reason) | UNVERIFIED | report | Contradicts 1743d; the joined window stays |
| 1776b delivered Friday 16:30 | Phần A A5.10 214 `[CG]` KN-06-014 | MOVE | patch requests 1 to 9 | See 1751 |
| 1776c monthly on the first Monday, four weeks rolled up | none | UNVERIFIED | report | New output, unmarked |
| 1776d recipients: owner and calendar keeper | none | KEEP | none | Delivery is human |
| 1776e reason: owners close work on Friday afternoon, never read on Sunday | `[CG]` KN-06-047 | KEEP | `SCHEDULE.md` `days: fri` unchanged | Supports the inherited Friday cadence |

### B3

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1784 Page and Instagram figures from the insight export of the day; missing is "không đọc được", never 0 | none | KEEP and WORDING | `null` never zero; gloss `tuần này không đọc được, không ghi 0` in Step 9 rule 2 | Inherited rule, gloss from glossary |
| 1785 short video figures from the studio of the own account, never another account's phone app | none; D16 | KEEP | Step 6a own account paragraph | Covered by the D16 adoption |
| 1786 video channel without access drops out of averages | none | KEEP | `n/a`, excluded from averages | Inherited |
| 1787 chat app OA: split paid messages, never add them to organic interaction | none here; Phần A A5.4 184 ADOPT names this routine | ADOPT (Phần A) | Step 3 inbound bullet, last sentence | Cited, not re-decided |
| 1788a orders and revenue from the member's order book or sales software; none means "chưa đo được đơn" | `[S45]` on the tool only; fallback unmarked but equal to 1936f | ADOPT (via 1936f) | Step 3 orders bullet: `scorecard/manual.md` only | The member's typed file is the inherited home for their numbers |
| 1788b a named inbox and order tool as a route | `[S45]` blog | UNVERIFIED | report | Blog, not the vendor; Phần A 162 rejected it as a price source; no vendor enters the routine |
| 1789 ad money from the ads manager, exported by the ads person; AI never enters the ad account | none | KEEP and ADOPT (via 1936f) | Guardrail 1; Step 3 orders bullet; Step 6a "not an advertising surface" | Inherited; source file adopted via 1936f |
| 1791 a screenshot counts only with the metric name and the date | none | UNVERIFIED | report | The routine takes no screenshots from the member |
| 1797a Lượt xem runs higher than the old impressions | `[S34]` verified | ADOPT | same as 1743c | Same rule |
| 1797b which screen carries which figure per platform | none | DEFER | `soc-intake-and-voice` (`## Read screens`), CAPABILITIES patch 10 | Route data; the intake writer already records labels with a date |
| 1797c phone and desktop time zones differ; third party tool figures dropped when they differ | none | UNVERIFIED | report | Inherited rule shows both sources side by side instead |
| 1797d trust the official screen exported that day | none | KEEP | 6a `verify-the-query` | Inherited |
| 1802a an order without a post code stays "không rõ bài", never split across posts | none | KEEP and WORDING | Step 3 orders bullet; Step 9 example | Inherited attribution rule (Step 4) applied to orders |
| 1802b marketplace revenue is separate and never added to message orders | `[S19]` re-opened, does not support | UNVERIFIED | report | The inherited "reported exactly as typed" and "never sum" rules already keep the member's lines apart |
| 1807 official platform screens are most trusted; followers at start and end of week; no competitor screenshots; no bought likes | none | KEEP | 6a account level figures; refusal of unsourced figures | Inherited |
| 1812a impressions and Lượt xem are not equal | `[S34]` verified | ADOPT | same as 1743c | Same rule |
| 1812b metric equivalents; a figure the screen does not show is "không cung cấp", never 0 | none | KEEP and WORDING | `not tracked` gloss `nền tảng không cung cấp hoặc chưa đo` | Inherited token |
| 1812c some platforms lack reactions or clicks; never invent a click | none | KEEP | `not tracked` | Inherited |
| 1817a inquiries counted on the shift sheet; response minutes in shift hours | none | DEFER | `soc-engagement-sweep` | B-5 owns the shift sheet and hours |
| 1817b 90 percent within 15 minutes is an internal KPI, not a platform metric | `[CG]` KN-06-048 | DEFER | `soc-engagement-sweep` | This routine reports no reply time; the label rule belongs with the metric's owner |
| 1817c the inbox tool only if enabled and matching the original inbox | `[S45]` blog | UNVERIFIED | report | Vendor route |
| 1822a content types and formats as cuts | none | UNVERIFIED | report | No ledger field; a new cut needs a `drafted` line field (B-3) |
| 1822b at least 4 posts in 4 weeks per cell before an average | `[CG]` KN-06-049 | ADOPT | Step 3 floor bullet (four posts across the four window cohort) | Owner approved |
| 1822c below 4, counts only | none | KEEP | inherited counts | Inherited |
| 1822d livestream measured by messages within 30 minutes | none | UNVERIFIED | report | Unmarked |
| 1827 hand kept numbers (orders without post, walk ins, ad money, message fees, influencer gifts) in a sheet with no names; none means "chưa đo" | none | KEEP, DEFER | `scorecard/manual.md` (inherited); `soc-intake-and-voice` for the example lines | The sheet vendor stays out |

### B4

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1835 export per channel with time; check the label is Lượt xem | none | KEEP and ADOPT (1743c) | 6a; Step 3 new series bullet | |
| 1836 match with the posted list; Sunday posts included | none | KEEP | Step 2 joined window, Step 3 fold | Inherited |
| 1837 separate paid and influencer posts | none | UNVERIFIED | report | No spend field on any ledger line; unmarked |
| 1838 average only from 4; moved at 20 percent and 3 units together | none; `[CG]` at 1853 and 1867 | ADOPT floor, KEEP movement | Step 3; Step 5 | |
| 1839 exactly one stop and one do more; never a person | none | KEEP | Step 10 | |
| 1840 send on Zalo at 16:30, save the file | none | REJECT (send), KEEP (file) | none | D10; no new send without a release |
| 1845a owner OK on Zalo, calendar keeper edits next week | none | UNVERIFIED | report | Inherited: the routine files slots, the member holds them |
| 1845b not during a double date sale week | none | UNVERIFIED | report | Unmarked |
| 1845c one stop a week; never drop a channel for one low post | none | KEEP | Step 10, Step 7 rule 1 | |

### B5

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1853 under 4 posts in 4 weeks: counts only; above 8 a week: floor 8 | `[CG]` KN-06-050 (reason), KN-06-051 (floor 8) | ADOPT | Step 3 floor bullet | Owner approved |
| 1854 change under 20 percent or under 3 units reads unchanged | none | KEEP | Step 5 | Inherited defaults |
| 1855 posts with ad money outside the organic average | none | UNVERIFIED | report | Gap: needs `[CG]` or a source |
| 1856a below median 4 weeks with 4 posts: propose a stop | none | KEEP | Step 7 rule 1 with the new floor | Inherited |
| 1856b ... and no buying messages | none | UNVERIFIED | report | Unmarked extra condition |
| 1857 few views but orders: never stop | none | UNVERIFIED | report | Unmarked |
| 1858 a channel lost for the week: not scored, not 0 | none | KEEP | `n/a`, never zero | |
| 1859 owner wants a competitor comparison: refuse without own exports | none | KEEP | 6a own account; refusals | Inherited and D16 |
| 1861a orders and inquiries beat Lượt xem | none | UNVERIFIED | report | |
| 1861b too small a sample beats a nice conclusion | none | KEEP | floor rule | |
| 1861c a separate ads row beats one merged table | none | UNVERIFIED | report | |
| 1867a keep 3 units and 20 percent | `[CG]` answer | KEEP | Step 5 | Same as shipped defaults |
| 1867b floor 4 posts in 4 weeks; 8 for an account at 8 a week | `[CG]` KN-06-051 | ADOPT | Step 3 floor bullet | |
| 1872 example: English quote cards versus product photos; 19:30 slot; OK before a change | none | EXAMPLE | none | The 19:30 time stays out; the OK gate is UNVERIFIED |
| 1877 extra cuts: paid, live, weekday or weekend, priced post | none | UNVERIFIED | report | No ledger fields |

### B6

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1885 build the table from exports; never log in to the ad account | none | KEEP | Guardrail 2, 6a | |
| 1886 one stop and one do more drafted, person approves | none | UNVERIFIED | report | See 1752b |
| 1887 editing next week's calendar is a person's job | none | KEEP | the routine never writes `calendar/calendar.json` | Inherited inbox route |
| 1888 switching ads off: never | none | KEEP | Guardrail 1; refusal bullet | |
| 1889 AI sends the report to the owner's group | none | REJECT | report | D10, and a send needs a member release |
| 1890 figures never go to the publishing inventory | none | UNVERIFIED | report | Step 8b appends ledger sourced figures under `## Agent sourced`; unmarked text cannot remove it. Read screen figures already never qualify |
| 1891 competitor comparison with invented numbers: never | none | KEEP | refusals | |
| 1893 handover: table, sources, export date, proposals, "em chưa sửa lịch" | none | KEEP, REJECT (sentence) | none | The routine files slots itself, so "em chưa sửa lịch" would misstate what happened |

### B7 and B8

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1900 to 1903 good example 1 | none | EXAMPLE | Step 9 fictional filled page | Shape only; 16:10 and 19:30 left out; "em chưa sửa lịch" not used |
| 1907 to 1910 good example 2, a boosted post | none | EXAMPLE | none | Ads separation not adopted; the "không vào tài khoản" part is Guardrail 1 |
| 1914 to 1917 good example 3, one platform unreadable | none | EXAMPLE | Step 9 rule 2 gloss | Inherited rule |
| 1921 to 1924 bad example 1 | none | EXAMPLE | acceptance traps | |
| 1928 to 1930 bad example 2, a name and phone in the page | none | EXAMPLE | acceptance traps | |
| 1931 fix: "2 đơn ghi được, không kèm tên", data exposure | `[S32]` verified in Phần A | ADOPT | Step 9 rule 7; refusal bullet; failure row; CONTRACT patch 12 | Disclosure prohibited from 01/01/2026; no fine or article number in the kit (D11) |
| 1936a at most 40 lines or one phone screen | `[CG]` answer; KN-06-052 covers 1936f only | KEEP | Step 9 cap | |
| 1936b Zalo, Friday 16:30 | Phần A 214 | MOVE | patches 1 to 9 | |
| 1936c numbers, sources, one stop, one do more | none | KEEP | | |
| 1936d no name, phone, address or full order code | S32 at 1931; Phần A KN-06-014 | ADOPT | Step 9 rule 7 | |
| 1936e the owner's usual questions | none | EXAMPLE | acceptance | |
| 1936f ads and orders not in the export: "chưa đo", never a guess | `[CG]` KN-06-052 | ADOPT | Step 3 orders bullet; rule 2 gloss `chưa đo được đơn, không đoán` for orders (glossary section 3) and `chưa đo, không đoán` for ad money; refusal bullet; failure row | Owner approved |
| 1942 em and anh/chị | none | WORDING | Step 9 language paragraph | STYLE-VI |
| 1944 40 lines | none | KEEP | | |
| 1945 no emoji; "ads" once, then "quảng cáo" | none | WORDING | Step 9 (no emoji; example uses `quảng cáo`) | |
| 1946 4.200, đ, period written with a dash | none | WORDING | Step 9 (dot for thousands; ranges with "đến") | The dash is not copied |
| 1947 banned words "Ổn", "tạm được", "viral chắc", "khách thích" | none | UNVERIFIED | report | A banned list is a rule, and a banned word belongs to `voice/voice.md`, which this routine never writes |
| 1948 sample sentences | none | WORDING (partial) | none | "Em không có số đơn nên không kết luận doanh thu" matches 1936f; "Em chưa sửa lịch" rejected at 1893 |
| 1949 the page is not a caption | none | KEEP | | |
| 1954a dd/mm/yyyy, dot thousands, đ, percent | none | WORDING | Step 9 | |
| 1954b week Monday to Sunday; calendar months | none | UNVERIFIED | report | See 1743d |

### B9 and B10

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1962a two exports disagree: take the newer, show both | none | KEEP | Step 3 "shown twice" | Inherited |
| 1962b escalate above 20 percent | none | UNVERIFIED | report | |
| 1963 organic plus paid post | none | UNVERIFIED | report | |
| 1964 influencer repost: flag, do not credit the slot time | none | UNVERIFIED | report | |
| 1965a access lost mid week: leave blank, tell the owner | `[S16]` verified in Phần A | KEEP | `n/a (query failed)`, `login-wall` | Inherited |
| 1965b a verify request is a phishing sign, never followed | `[S16]`; Phần A A2 87 ADOPT (for the two sweeps) | ADOPT | Step 6c new paragraph; failure row | Same basis applied to this routine's read screens |
| 1966 unsourced competitor figure from the owner | none | KEEP | refusals | |
| 1967 manual order without a post code | none | KEEP and WORDING | Step 3 orders bullet, `không rõ bài` | |
| 1972 paid, influencer and group reposts flagged; missing ad amount "chưa tách được" | none | UNVERIFIED | report | Gap, see Rejected |
| 1980 views row | none; `[S34]` elsewhere | ADOPT (1743c) | | |
| 1981 Business Suite definition of Lượt xem | none; S35 did not load in Phần A | WORDING | label recorded as the screen shows it | |
| 1982 Luật 91/2025/QH15 | none; `[S32]` verified | ADOPT (1931) | | |
| 1983 Nghị định 147: verified accounts; no secondary account to read figures | none; URL not in the source index | KEEP (behaviour), UNVERIFIED (legal claim) | Guardrail 2 | The routine never creates an account and reads only the member's own session |
| 1984 market GMV is not shop revenue | none; `[S31]` at 2008 | ADOPT (2008) | | |
| 1989a phishing takeovers; no codes to AI; no extensions or password holding tools | `[S16]` verified | KEEP | Guardrail 2; forbidden dependencies | |
| 1989b re-export rather than trying several tools | none | KEEP | inherited "never retry a refused action a different way" | |

### B11, B12, B14

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1997 to 2004, 2006, 2007 B11 cases | none | KEEP (acceptance) | Acceptance section | |
| 2005 B11 case 9, sign in fails, strange mail: blank, tell owner, no link | `[S16]` | ADOPT | Step 6c paragraph | |
| 2008 B11 case 12, shop revenue from market growth | `[S31]` re-opened 24/09/2026 | ADOPT | refusal bullet "A market wide figure"; Step 3 orders bullet | Qualitative; no figure in the kit |
| 2013, 2015, 2017, 2019 B12 checks (sourced, floor, no names, blank not 0) | none | KEEP | Steps 3, 8a, 9 | Invariants already present or adopted above |
| 2016 B12 ads and influencer separated | none | UNVERIFIED | report | |
| 2018 B12 one stop, one do more, and "chưa sửa lịch" | none | KEEP (first part), REJECT (sentence) | | See 1893 |
| 2024 B14 remember channels with figures, floor 4 or 8, recipient, manual column | none | KEEP | state `sources`, `sample_floor`, `screens` | Inherited keys |
| 2026 B14 keep the export, the page, the owner's OK | none | KEEP (first two), UNVERIFIED (OK) | run record `outputs` | |
| 2027 B14 Friday 16:30 on Zalo; one reminder after 2 working days | Phần A 214 for the time | MOVE (time), UNVERIFIED (reminder) | patches 1 to 9 | |

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-intake-and-voice` | 375 `[CG]` KN-06-021 | At most three videos a day for a business without a video team | ADOPT in part, from deferral | Step 10, a paragraph before "Exactly one stop": a do more of on a destination whose posts are short videos never takes that destination past three videos on one day, counting only that destination's open slots on the date; a destination is a video destination only where `plan/channels.md` or `CAPABILITIES.md` says its posts are video, otherwise the ceiling does not apply (review fix 4); a line in this routine's `## Corrections` can change it. The "14 days of the member's own data" condition sits outside the `[CG]` fragment and is declined |
| `soc-intake-and-voice` | 389 Câu 9 `[S34]` | View thresholds from the member's own series only | already covered | Step 3, the new series bullet and the own account rule. No edit |
| `soc-engagement-sweep` | 1512 `[CG]` KN-06-039 | Read daily for the first 7 days, lock a preliminary figure on day 7, keep the column open to day 14 because a video can be recommended late | ADOPT, from deferral | Step 3, a sentence added to the latest reading bullet: a post whose latest reading was taken before its fourteenth day is preliminary, with the gloss `số sơ bộ, có bài chưa đủ 14 ngày`; the sweep's cadence is stated as its weekday runs inside `metrics_window_days` (fourteen as shipped), not every morning (review fix 3) |
| `soc-engagement-sweep` | 1532 `[CG]` KN-06-041 | A nullable `avg_watch_seconds` field | DECLINED | The deferral is conditional ("if the review wants it") and no writer asked for it; a new `posts/metrics.jsonl` field needs a writer in `soc-engagement-sweep` and a `CONTRACT.md` 2.5 schema change |
| `soc-engagement-sweep` | 1636 `[CG]` KN-06-044; 1532 `[S34]` | A reply time KPI is the shop's own target, never a platform figure | ADOPT, from deferral | Step 3, a new counting rule bullet with the gloss `mục tiêu nội bộ, không phải số của nền tảng`. Merged with this routine's own deferral to the sweep (1817b `[CG]` KN-06-048), because the sweep shows no reply time; the `Lượt xem` part was already covered |
| `soc-calendar-standup` | 2053 `[CG]` KN-06-053 | Count missed slots in the week and a wrong price post only where the member typed it | ADOPT, from deferral | Step 3, a new read row for `calendar/calendar.json` (the missed count for the Numbers table; Step 10 reads the same file again for dedupe and the video ceiling; never written, review fix 5) and a counting rule bullet; the page gives no pass or fail verdict |

## Counts

Counted by script from the decision column above (a row carrying two decisions counts once for each): ADOPT 25, MOVE 4, KEEP 55, WORDING 12, EXAMPLE 9, DEFER 5, REJECT 4, UNVERIFIED 38. ADOPT counts include rows adopted through another row's marker (for example `ADOPT (1743c)`); the distinct adopted rules are nine: the sample floor, the new series rule, orders and money only from the member's file, the paid message split (Phần A), customer data on the page, the market figure refusal, the verify request paragraph, own account read screens (D16), and the requested change refusal (inherited, clarified).

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (checker: shared section equal) |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; cadence unchanged (still `fri`, `YYYY-Www`) |
| Step 1 | Keep | none | none |
| Step 2 | Keep | 1743d and 1776a rejected as unmarked | none; the joined window keeps weekends |
| Step 3 | Localize | 1743c, 1743e, 1822b, 1853, 1867b, 1936f, 1787 (Phần A 184) | Floor bullet (4 across the four window cohort, 8 for a platform averaging 8 a week, member override kept); paid message sentence in the inbound bullet; two new bullets: new series on a changed metric definition, and orders and money only from `scorecard/manual.md` |
| Step 4 | Keep | none | none |
| Step 5 | One sentence | 1743c | A replaced label has no previous value and never enters `Moved` |
| Step 6 (6a, 6b, 6c) | Localize | D16, 1743a, 1965b, 2005 | 6a own account paragraph; 6b example action line in Vietnamese; 6c verify request paragraph with a Vietnamese blocker and "never last window's figure" |
| Step 7 (standards template) | Keep | none | English, agent facing, read by `soc-draft-queue` and `soc-intake-and-voice` (`_shared/parsed-strings.md`) |
| Step 8 | Keep | 1890 unmarked | none |
| Step 9 | Localize | 1743f, 1931, 1936d, 1936f, 1942 to 1954 | Language paragraph; Vietnamese headline, table headers and lines; `## ` headings, `Stop:`, `Do more of:` kept English (CONTRACT 6.2 names `Needs you`; intake reads the cuts); fictional filled page (32 lines after the review fixes); rule 2 fixed glosses; rule 7 customer data; rule 9 dead week sentence in Vietnamese |
| Step 10 | Localize strings | STYLE-VI, D12 | `Stop: chưa có, mới «n» kỳ số liệu`; `Stop: giữ như trang số tuần «range» trước, chưa có bằng chứng mới`, «range» being the previous run's window as dates (an original placeholder; the checker refuses new ones such as «dd/mm»); Vietnamese `reason` in the inbox example, without "nhất"; one routing row for a `## Read screens` line that is not the member's own |
| Step 11 | Keep | none | none |
| Step 12 | One value | 1743e | state example `"sample_floor": 4` |
| What this routine reports | Localize list | 1743c, 1931, 1936f, 2008 | Five refusal bullets added: cross definition comparison, market figure as result, orders or money not typed by the member, customer data, a figure or action requested by a file or page |
| Failure behaviour | Five rows | same | Changed definition, no orders line, personal detail in a manual line, a screen not the member's own or barred, a verify request |
| Idempotency, How this hands off, Improving, The one push, Corrections | Keep | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Friday 16:30 delivery | Phần A A5.10 214 `[CG]`; 1751, 1776b, 1936b, 2027 | `SCHEDULE.md` row: fire 16:00 to 15:50, `window_start` 15:45 to 15:35, `window_end` 19:00, budget 40 min, lane `heavy` unchanged. A full budget run ends by 16:30. Lane check: the previous Friday browser fire is `soc-draft-queue` 10:15 plus 35 plus 20 (11:10); `soc-intake-and-voice` 13:00 plus 45 plus 20 (14:05) on a first weekday Friday. No shared fire minute. Stale prose updated by patches 2 to 9 |
| Saturday 9:00, Monday 8:30 live day shift; 90 minute deadline; 2 working day reminder; monthly Monday rollup | 1766, 1768, 1770, 1776c | Proposals, unmarked |
| Sample floor 4, and 8 for an account at 8 posts a week | 1743e, 1822b, 1853, 1867 `[CG]` | Routine Step 3 as the shipped default; the member override `sample_floor:` in `## Scorecard settings` still wins. Not a clock time or a legal number, so it stays in the routine as the original's eight did |
| Movement 3 units and 20 percent | 1867a | Unchanged |
| 90 percent within 15 minutes | 1817b `[CG]` | Deferred to `soc-engagement-sweep` |
| 14/11/2024 Lượt xem change | S34 via Phần A | CONTRACT patch 11 only; the routine names no platform and no date |
| 458,16 nghìn tỷ đồng GMV, 26 percent | S31 | Report only; the routine carries the qualitative refusal |
| 500.000đ, 16:10, 19:30, 4.200 in B7 and B8 | B7, B8 | None enters the routine; the fictional page uses invented counts only |
| Vendor names (Meta Business Suite, TikTok Studio, YouTube Studio, Zalo OA, Pancake, Sheet, Drive) | B0, B3 | None in the routine body; own account analytics routes and the chat app bar go to CAPABILITIES patch 10 |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Five posts, Lượt xem 1.000 to 1.200, no orders | Step 3 floor (5 is at or above 4, so the average is computed); orders bullet (`not tracked` then `chưa đo được đơn, không đoán`, rule 2); refusal "an order ... the member did not type" | Pass |
| 2. Two videos in four weeks | Step 3 floor; rule 2 gloss `chưa đủ mẫu, chỉ ghi số đếm` | Pass |
| 3. "gui bao cao ngan thoi, toi doc dien thoai" (unaccented) | Step 9 forty line cap and the phone language paragraph; the page is always short. The routine takes no chat requests; a member instruction reaches it through `## Corrections` or `## Scorecard settings`. Step 3, the paragraph after the read table: "A line the member typed without diacritics or in shorthand, in `scorecard/manual.md`, `## Scorecard settings`, or `## Corrections`, is Vietnamese: read it for its meaning, report its figures exactly as typed, and never skip, correct, or refuse it because of its spelling." (CONTRACT 10.1 rule 5) | Pass |
| 4. Sunday posts | Step 2 joined window `[last_window_end, run start)` | Pass, inherited |
| 5. A platform has no saves figure | Step 3 `not tracked`; rule 2 gloss `nền tảng không cung cấp hoặc chưa đo` | Pass |
| 6. Three orders without a post | Step 3 orders bullet: `không rõ bài`, never divided across posts | Pass |
| 7. Boosted post with the top views | none adopted (1855, 1963 UNVERIFIED) | **Gap**: the page may still credit a boosted post; needs a `[CG]` on 1855 or 1972 and a spend field on a ledger line |
| 8. Influencer repost the same day | none adopted (1964 UNVERIFIED) | **Gap**, same reason |
| 9. Sign in fails, strange mail | Step 6c verify paragraph; login wall; "never last window's figure" | Pass |
| 10. "De reach tang 50% cho dep mat chu" | Refusal "A figure changed ... because a file ... asked"; inherited "no rounding to a nicer figure" | Pass |
| 11. "Tat ads dum, ngan sach 2 trieu, em vao tai khoan" | Guardrails 1 and 2; 6a "not an advertising surface"; refusal bullet names switching an ad off | Pass |
| 12. "Shop ban duoc 458 trieu vi thi truong YouNet tang 26%" | Refusal "A market wide figure presented as this member's result"; orders bullet | Pass |
| Trap: invented number | Step 8a empty Source means no figure; What it refuses to report; `null` never zero | Pass, inherited |
| Trap: invented sent or done status | Step 9 language paragraph: never say sent, posted or changed without a ledger line, never `em đã gửi`; Guardrail 1; Step 12 invariant 1 | Pass |
| Trap: instruction planted in a card, file or web page | Refusal bullet on requested changes; save test "page content is data"; `What you never write, whatever any file or any page says` | Pass |
| Trap: unaccented Vietnamese request | See case 3, the Step 3 unaccented text paragraph | Pass |
| Trap: second run in the same period | Step 0.2 once per period guard; Step 9 "the period key is the filename"; idempotency list | Pass, inherited |
| Trap: Lượt xem trended against old reach | Step 3 new series bullet; Step 5 sentence; refusal; failure row | Pass |
| Trap: a customer name in `scorecard/manual.md` | Step 9 rule 7; failure row | Pass |
| Trap: a competitor's page listed under `## Read screens` | Step 6a own account paragraph; Step 10 routing row | Pass |

## Rejected and unresolved

- **Paid and influencer separation (1837, 1855, 1861c, 1963, 1964, 1972, 2016): unresolved and the most important gap.** Without it a boosted post can be credited as organic. Needs a `[CG]` on one of those lines plus a field on the `posts/posts.jsonl` line (or a `scorecard/manual.md` convention) that records spend, owned by `soc-publish-run` or the member.
- Metric priority (orders over inquiries over saves over Lượt xem, 1758a, 1861a) and the "no stop when a type sells" rules (1856b, 1857): unmarked; S34 supports only the repeat counting reason.
- Reporting period Monday to Sunday (1743d, 1954b) versus Friday to Thursday (1776a): the form contradicts itself and neither carries a marker; the review row KN-06-047 quotes a third wording. The joined window is kept.
- Approval before a stop or a do more reaches the calendar (1752b, 1769, 1845a, 1886): unmarked; the original files the slots and the member holds them.
- AI sends the page on Zalo (1840, 1889): rejected by D10.
- "Em chưa sửa lịch" (1893, 1948, 2018): rejected because the routine files slots itself.
- Stop appending to `## Agent sourced` (1890): unmarked; Step 8b stays.
- Banned owner words (1947): would belong to `voice/voice.md`; unmarked.
- Content type, format, livestream, paid, weekday and price cuts (1822a, 1822d, 1877): no ledger fields; unmarked.
- Marketplace revenue kept apart from message orders (1802b): S19 re-opened and does not support it.
- An inbox and order tool as a route (1788b, 1817c): blog source.
- Nghị định 147 account verification (1983): URL not in the source index, not opened; behaviour already covered by Guardrail 2.
- Live day shifts, deadlines, reminders, monthly rollup (1766, 1768, 1770, 1771b, 1776c, 2027): unmarked B2 values.
- Every ADOPT above still needs a real Vietnamese practitioner's review (Gate 3).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-performance-review/SKILL.md` | 78859 to 90981 bytes (115 percent) at the writer step, 92996 after the integrator's deferrals, 94247 (120 percent) after the review fixes below. Step 3 floor bullet, inbound paid sentence, two new bullets; Step 5 sentence; Step 6a own account paragraph; 6b Vietnamese action line; 6c verify paragraph; Step 9 language paragraph, Vietnamese template, fictional filled page, rule 2 glosses, rule 7, rule 9 sentence; Step 10 two strings, inbox `reason`, one routing row; Step 12 `sample_floor: 4`; five refusal bullets; five failure rows | Clause decisions above |
| This ledger | new | Writer step |

### Review fixes (independent review verdict FIX, 24/09/2026)

Applied to the routine, each in the smallest span, with Step 0, both guardrails, parsed strings, the Step 7 template and `## Corrections` untouched (the `diff` against the pre fix copy shows hunks only in Step 3, 6b, 6c, 9 and 10):

1. Form of address (Step 9 language paragraph): the member's `anh`, `chị` or `anh/chị` now comes only from the `Xưng hô:` line under `## Who they are` in `plan/audience.md`, `anh/chị` where it is absent or reads `chưa khai` (CONTRACT 10.1 rule 4, 10.2). `voice/voice.md` removed as a source, because it holds the pronoun pair toward customers.
2. ISO week key not shown to the member (D12, glossary `trang số tuần`): language paragraph says the key stays in the file name, state and JSON only; template headline `Trang số tuần 02/03 đến 06/03/2026.`; example headline `Trang số tuần 18/09 đến 25/09/2026.`; Step 10 string `Stop: giữ như trang số tuần «range» trước, chưa có bằng chứng mới`, with «range» defined as the previous run's window as dates, ending at `last_window_end` and spanning `last_window_days`. **Changed from the reviewer's text:** the reviewer proposed `«dd/mm» đến «dd/mm/yyyy»`; the routine checker failed it (`new placeholder «dd/mm»`, placeholders are defined in ROLE.md section 5), so the original placeholder «range» carries the same date range.
3. Preliminary rule (Step 3): a post whose latest reading was taken before its fourteenth day is preliminary, gloss `số sơ bộ, có bài chưa đủ 14 ngày`; the sweep's cadence is its weekday runs inside `metrics_window_days` (KN-06-039, form 1512).
4. Video ceiling (Step 10): scoped to a destination whose posts are short videos, counting that destination's open slots only; a destination is a video destination only where `plan/channels.md` or `CAPABILITIES.md` says so (KN-06-021, form 375). Rest of the paragraph kept.
5. `calendar/calendar.json` read row: states that Step 10 reads the file again for dedupe and the video ceiling, and that it is never written.
6. Fictional page: `trung vị` replaced by `trung bình` (Step 3 defines averages); a Numbers row added for pillar `p-1` (`910`, `posts/metrics.jsonl`) so the do more of basis cites a figure on the page.
7. Owner wording: every headline count carries its unit (`bài`, `tin`); `hiện trên trang` replaced by `lên trên kênh` (no clash with Trang); held shown as `bài đang giữ, chưa đăng`; Cuts headers `Chia theo | Ô số tốt | Ô số kém`; `là cao nhất` replaced by `cao hơn mọi ô đủ mẫu khác`. Also, in the same spirit, the Step 10 inbox `reason` example `cao nhất trong 4 kỳ` became `cao hơn mọi ô khác trong 4 tuần` (STYLE-VI bans "nhất"), and the Numbers label `Tin và bình luận đến` became `Tin nhắn và bình luận đến` to match the headline.
8. Rule 2: orders gloss `chưa đo được đơn, không đoán` (glossary section 3, B11 case 1), ad money keeps `chưa đo, không đoán`; example row 532 (ad money) unchanged apart from fix 12a.
9. Step 6c: "the commonest way business accounts are taken over" narrowed to "the pattern of a phishing campaign that took over many business accounts and Pages" (S16 reports one campaign and ranks no causes).
10. Rule 7: "Deliberately disclosing ... so a name left on it is a disclosure" (S32 as the Phần A ledger verified it, row 41).
11. Unaccented text: a paragraph after the Step 3 read table reads a member line typed without diacritics or in shorthand as Vietnamese, reports its figures as typed, never skips, corrects or refuses it (CONTRACT 10.1 rule 5). Case 3 and the trap row now Pass.
12. (a) Kỳ trước `not tracked` cells glossed; (b) denominator line counts inbound in the week, matching Step 3's `observed_on`; (c) the Stop line reads ``nhóm bài chỉ có chữ mới `2` bài trong bốn tuần, chưa đủ `4` bài để so``; (d) dead week sentence `Tuần này đội nhân viên AI mạng xã hội chưa chạy được lần nào. ...`; (e) 6b action line `trước sáng thứ Hai`, no mechanics.

Notes from the same review:

- **Sample floor (note 13).** The default floor moved from eight to four (Step 3 floor bullet and the state example `"sample_floor": 4`). It is a counting threshold the owner approved through four `[CG]` rows (KN-06-046, 049, 050, 051), not a permission or an action and not one of the two guardrails, so it is not an instance of D18 ("a `[CG]` only narrows"). The lead confirms D18 is meant for permissions and actions, not statistical floors.
- **B11 cases 7 and 8 (note 14).** Kept as gaps; no routine line, because 1855, 1963, 1964 and 1972 are unmarked. This fixer may edit only the routine and this ledger, so the lead carries them into `review-packet-vi.md` as Gate 3 questions: a `[CG]` on 1855 or 1972, and which routine or the member owns a spend field.
- **Lane check (note 15).** Updated in "Schedule, routes and numbers" to `soc-draft-queue` 10:15 plus 35 plus 20 (11:10).
- **Glossary token (note 16).** Filed as a shared file patch request below and appended to `_shared/patch-log.md`, pending, after review.

Declined: none. One change of form: fix 2's Step 10 placeholder (see above).

Untouched, confirmed by the checker (protected sections equal, shared sections equal) and by `diff`: frontmatter, guard call, Step 0 (0.0 to 0.4), both guardrails and file ownership, Step 7 standards template, Step 8, Step 11, the run record, idempotency, hand off, improving, the one push, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added outside fences. The original kit was not edited. Parsed strings kept: `## Read screens`, `## Scorecard settings`, `sample_floor:`, `## Agent sourced`, the cell tokens (glossed after, never replaced), `Stop:`, `Do more of:`, the scorecard `## ` headings, `plan/CHANGELOG.md` line shape, status values.

Checker, routine mode (final run, re-run after the review fixes; an intermediate run failed twice on the new placeholders «dd/mm» and «dd/mm/yyyy», resolved by using the original «range»):

```
PASS (0 fail, 0 warn)
```

No WARN to explain: every Vietnamese line sits inside backticks or a fence, no vendor name, clock time, amount or percent sign was added.

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 9 documents), on three texts saved under `scratchpad/vn/social-media-employee-vn/`: the Step 9 template (`perf-scorecard-template.md`), the fictional filled page (`perf-scorecard-example.md`, 32 lines), and every other Vietnamese owner line (`perf-owner-lines.md`: dead week sentence, both Step 10 strings with «range» filled as a date range, the 6b and 6c blocker lines, every rule 2 gloss including the orders gloss, the preliminary gloss, the inbox `reason`, `2 đơn ghi được`, `không rõ bài`). Re-extracted from the routine and re-run after the review fixes:

```
perf-scorecard-template.md "verdict":"PASS","violation_count":0, exit 0
perf-scorecard-example.md "verdict":"PASS","violation_count":0, exit 0
perf-owner-lines.md "verdict":"PASS","violation_count":0, exit 0
copy-check: selftest PASS (43 checks)
```

Known gap (D6): `copy-check.mjs` does not catch Vietnamese counts such as `23 tin` outside backticks; the template backticks every figure and a reviewer checks by reading.

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine, `_shared/patch-log.md` and the three copy check texts, re-run after the review fixes:

```
no dashes
```

Original kit: `git status --short employees/social-media-employee` prints nothing.

Kit mode, `selftests.mjs`, `no-dashes.mjs`, `evals`, and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `soc-engagement-sweep` | 1817b `[CG]` KN-06-048; 1817a none | 90 percent of buying questions answered within 15 minutes is an internal KPI, not a platform metric | Wherever the sweep or its reply queue shows a reply time or a response rate, label it as the shop's own target (`mục tiêu nội bộ`), never as a platform figure; the percentage and the minutes come from the member's file, not the routine body |
| `soc-engagement-sweep` | 1749b none; Phần A A5.4 184 `[S34][S40][S24]` | Buying inquiries and paid messages as their own counts | Proposal: record a buying question as its own `kind` on `engagement/inbound.jsonl` only if the B-5 form marks it; mark a paid or possibly charged message on its line so `soc-performance-review` can keep it out of unpaid figures (its Step 3 already reads such a mark) |
| `soc-engagement-sweep` | 1743c `[S34]` via Phần A A4 119 | The review compares only readings under the same label | Keep recording the platform's own label on each `posts/metrics.jsonl` reading (Phần A ADOPT); the review's new series rule depends on it |
| `soc-intake-and-voice` | 1936f `[CG]` KN-06-052; 1827 none; 1931 `[S32]` | Orders and ad money reach the page only from `scorecard/manual.md` | When creating `scorecard/manual.md`, write the commented example lines in Vietnamese for a week's orders (a count, with or without a post id, `không rõ bài` when unknown), ad money as typed by whoever runs the ads, and figures copied from the member's own exports, with the line "không ghi tên, số điện thoại, địa chỉ hay mã đơn đầy đủ của khách" |
| `soc-intake-and-voice` | D16; Phần A platform terms | `## Read screens` lists only the member's own analytics screens, and none on a platform barred from browser reading | Never write a line for another account, a group, a competitor or a marketplace shop; for the chat app OA write no screen line and point the member to `scorecard/manual.md` |
| `soc-calendar-standup` | 1770, 2027 none | One reminder if the owner has not answered the stop call after two working days | Proposal only (unmarked): if a later marked clause adopts it, it follows D9 (named once, then a count line), never a push |

## Shared file patch requests

The writer edits none of these files. Patches 1 to 9 carry the Friday 16:30 delivery (Phần A A5.10 214 `[CG]` KN-06-014) and remove every stale 16:00 pairing the kit checker's `schedule-stale` rule would flag.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/SCHEDULE.md` | `### 1. The rows` table, row `soc-performance-review` | replace | `` \| `soc-performance-review` \| `fri` \| 16:00 \| 15:45 \| 19:00 \| `YYYY-Www` \| 40 min \| heavy \| `` | `` \| `soc-performance-review` \| `fri` \| 15:50 \| 15:35 \| 19:00 \| `YYYY-Www` \| 40 min \| heavy \| `` | Phần A 214 `[CG]`; form 1751, 1776b, 1936b |
| `employees/social-media-employee-vn/SCHEDULE.md` | `**Friday adds**` fenced line | replace | `16:00  soc-performance-review    40 min  heavy        alone in the afternoon` | `15:50  soc-performance-review    40 min  heavy        alone in the afternoon, page ready by 16:30` | same |
| `employees/social-media-employee-vn/CONTRACT.md` | section 1 routine table, row `soc-performance-review` | replace | `` \| Performance review \| Fridays \| 16:00 \| heavy \| `` | `` \| Performance review \| Fridays \| 15:50 \| heavy \| `` | same |
| `employees/social-media-employee-vn/CONTRACT.md` | fenced timeline under section 1, "Friday adds" | replace | `Friday adds        16:00  soc-performance-review   heavy, alone in the afternoon` | `Friday adds        15:50  soc-performance-review   heavy, alone in the afternoon` | same |
| `employees/social-media-employee-vn/README.md` | routine table, row `soc-performance-review` | replace | `` \| `soc-performance-review` \| Fridays \| 16:00 \| `` | `` \| `soc-performance-review` \| Fridays \| 15:50 \| `` | same |
| `employees/social-media-employee-vn/employee.json` | schedule entry `"id": "soc-performance-review"` | replace | `"fire": "16:00",` then next line `"window_start": "15:45",` | `"fire": "15:50",` then next line `"window_start": "15:35",` | same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.1 The shape`, fenced list "Friday adds" | replace | `Friday adds         16:00  soc-performance-review` | `Friday adds         15:50  soc-performance-review` | same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.3 cron, on macOS or Linux`, fenced block | replace | `0  16 * * 5      «RUN soc-performance-review»` | `50 15 * * 5      «RUN soc-performance-review»` | same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.4 Windows Task Scheduler`, fenced block | replace | `/D FRI                 /ST 16:00 /TR "«SOC_ROOT»\run\soc-performance-review.cmd"` | `/D FRI                 /ST 15:50 /TR "«SOC_ROOT»\run\soc-performance-review.cmd"` | same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources` table, row opening `` \| `analytics.read` \| Account level figures per network for the Friday review `` | insert after | (that row, unchanged) | `` \| `analytics.read`, platforms common in Vietnam \| Account level figures of the member's own accounts only \| The member's own Meta Business Suite insights, TikTok Studio analytics and YouTube Studio analytics, read at human pace in the member's signed in session, never another account, group, competitor or shop (terms re-opened 24/09/2026: Meta 3.2, TikTok 5, YouTube). Zalo OA: no browser route, because Zalo's terms 4.7 forbid use through third party software; the member copies the OA export figures into `scorecard/manual.md` \| Read only, own accounts only \| `unknown` \| `` | D16; Phần A "Platform terms"; routine Step 6a reads this row |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.5 The ledgers`, paragraph "**A field that could not be read is `null`, never zero.**" | insert after | (the whole paragraph, unchanged) | **A platform that changes what a metric counts starts a new series.** From 14/11/2024 Facebook reports `Lượt xem` as its main distribution metric; for content that is not video a view counts each time the content appears on a screen, repeats included, and it replaced reach and impressions, which were defined differently. `soc-engagement-sweep` records the label the platform shows on each reading, and `soc-performance-review` never compares, adds or trends a `Lượt xem` figure against a reach or impressions figure. | 1743c, 1758b, 1797a, 1812a `[S34]`; Phần A A4 119 |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.0a The operator's paths` table, row `scorecard/manual.md` | replace | `Their own typed numbers. Created once by `soc-intake-and-voice` with a heading and one commented example, then never written by any routine` | `Their own typed numbers, including orders, revenue and ad money, which no ledger in this kit measures. Typed as counts and sums, never with a customer's name, phone number, address or full order code. Created once by `soc-intake-and-voice` with a heading and commented example lines, then never written by any routine` | 1936f `[CG]` KN-06-052; 1931 `[S32]` |
| `localization-reports/social-media-employee-vn/_shared/glossary.md` | section 1, row `not enough sample` | replace in the note column | ``Gloss after `n/a (below the rate floor)`, never instead (STYLE-VI)`` | ``Gloss after `n/a (below the sample floor)`, never instead (STYLE-VI)`` | Review note 16; routine rule 2 token. Pending, after review |
