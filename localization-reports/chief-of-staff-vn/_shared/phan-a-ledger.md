# Phần A ledger: chief-of-staff-vn

Status on 24/09/2026: **Phần A classified row by row and answer by answer, sources behind adopted law, number and platform clauses re-opened, platform terms re-opened for D13.** No kit file was edited by this step. This ledger is shared by the six routine writers of `chief-of-staff-vn`; each routine ledger (worked example: `../cos-decision-brief.md`) cites the row here instead of re-deciding it.

## Identity

- Form: `Khung-tri-thuc-ban-dia/02_Chief-of-Staff/phieu-da-dien.md`, `# Phần A. Vị trí (điền một lần)`, form lines 52 to 258. Source index `02_Chief-of-Staff/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Extract: `extract_form_section.py --routine cos-decision-brief --with-a`, written to the scratch folder `scratchpad/vn/chief-of-staff-vn/extract-a.md` and `.json`; only the Phần A part is used here.
- **A1: the form was filled by an AI.** Line 56 names the filler as "Sub-agent AI đóng vai Chief of Staff", a research draft dated 23/09/2026 that asks for review by a real practitioner. Lines 57 to 62 confirm: no years of practice, no employer, no tool operated live, no contact. **No clause below has been confirmed by a person running a Vietnamese business.** `[CG]` marks are the owner's review decisions (DUYET-KN), not a domain expert's. Every adopted rule still needs review by a real Vietnamese practitioner before sale (Gate 3, deferred per D6).
- Original kit: `employees/chief-of-staff`, VERSION 1.8.1. Variant: `employees/chief-of-staff-vn`, scaffolded 24/09/2026, still byte identical except `employee.json`.

## Routine map (Phần B to routine)

| Section | Routine id | Form lines | Original SKILL.md size |
|---|---|---|---|
| B-1 | `cos-charter-and-fleet-audit` | 261 to 439 | 93233 bytes (91.0 KB) |
| B-2 | `cos-market-sweep` | 440 to 735 | 64977 bytes (63.5 KB) |
| B-3 | `cos-metrics-review` | 736 to 915 | 65922 bytes (64.4 KB) |
| B-4 | `cos-decision-brief` | 916 to 1100 | 53180 bytes (51.9 KB) |
| B-5 | `cos-decision-review` | 1101 to 1280 | 53722 bytes (52.5 KB) |
| B-6 | `cos-fleet-reconcile` | 1281 to 1450 | 98522 bytes (96.2 KB) |
| none | `cos-fault-dossier` | none (form line 51: "Không cần anh/chị điền") | 60067 bytes before; Phần A only pass under D15 |

## How to read the decisions

- One row per clause. A marker applies to its own clause only; a row of the form with clauses under different markers is split.
- `ADOPT`: a sourced (`[S#]` re-opened below) or owner approved (`[CG]`) new rule; the target column names the routine ids or kit files that carry it. Legal numbers stay out of the kit (D11): an adopted legal rule enters as a qualitative rule, and the number stays in this report.
- `DEFER`: supported, but the decision belongs to a named routine's own Phần B pass, to `CAPABILITIES.md` when that routine is localized, or to Gate 8. The writer named must re-check the Phần B section before acting.
- `KEEP`: the original kit already does this; no change. `WORDING`: owner facing Vietnamese only, feeds `glossary.md`. `EXAMPLE`: fictional illustration, never a rule or a figure in the kit. `REJECT`: conflicts with the repo, a decision D1 to D14, or the number rule (a figure a routine might publish lives in one named file with source and date). `UNVERIFIED`: no marker, or the marker does not support the clause; stays in the report as a proposal.
- An unmarked clock time never moves a `SCHEDULE.md` row.

## Sources re-opened on 24/09/2026

Every source behind an `ADOPT` that states a law, a number or a platform rule, plus the platform terms for D13.

| Source | URL | What it supports here | Checked | Verdict |
|---|---|---|---|---|
| S1 Cổng TTĐT Chính phủ | https://xaydungchinhsach.chinhphu.vn/de-xuat-phuong-an-nghi-tet-am-lich-nghi-le-quoc-khanh-nam-2026-119251002130522291.htm | Tết 2026: civil servants 16/02 to 20/02 plus weekends; employers pick one of three options and notify workers at least 30 days ahead | 24/09/2026 | Confirmed. Number stays out of the kit (D11) |
| S6 Báo Chính phủ | https://baochinhphu.vn/ngay-van-hoa-viet-nam-24-11-nguoi-lao-dong-duoc-nghi-lam-huong-nguyen-luong-102260424093821937.htm | 24/11 "Ngày Văn hóa Việt Nam" is a paid day off, effective 01/7/2026 | 24/09/2026 | Confirmed. S7 not re-opened, S6 carries it |
| S9 Casso Docs | https://docs.casso.vn/huong-dan/bat-dau-su-dung-casso | Casso states Basic Auth with bank username and password (and RPA) as a connection route | 24/09/2026 | Confirmed |
| S11 VOH | https://voh.com.vn/kinh-te/tu-1-7-nhieu-giao-dich-doanh-nghiep-phai-xac-thuc-khuon-mat-658570.html | From 01/7/2026 many business transactions need the legal representative's face authentication (Thông tư 77/2025/TT-NHNN) | 24/09/2026 | Confirmed. Used as rationale only |
| S13 Thanh Niên | https://thanhnien.vn/cong-an-canh-bao-chieu-gia-mao-zalo-lanh-dao-de-lua-chuyen-tien-185260519162507703.htm | Police warning 19/05/2026: hijacked or fake leader Zalo accounts ask staff for urgent transfers; verify by calling; never share OTP or bank passwords | 24/09/2026 | Confirmed |
| S37 VOH | https://voh.com.vn/phap-luat/canh-giac-thu-doan-mao-danh-zalo-nguoi-quen-de-dan-du-chuyen-tien-666965.html | Verify by calling the saved number; do not trust transfer screenshots | 24/09/2026 | Confirmed |
| S22 Meta Help Center | https://www.facebook.com/help/259468828226154 | Ad Library: active ads searchable; political ads kept 7 years | 24/09/2026 | Partly confirmed: "active ads only" confirmed; "no login needed" not found on the page as fetched, so it is not claimed |
| S23 Metric.vn | https://metric.vn/insights/cong-bo-bao-cao-thuong-mai-dien-tu-viet-nam-2025/ | Sale seasons named: Tết, 6.6, 8.8, 9.9, 11.11, 12.12, Black Friday; figures are four platform totals, not one shop | 24/09/2026 | Confirmed |
| S40 Metric.vn | https://metric.vn/insights/bao-cao-thuong-mai-dientu-viet-nam-q1-2026/ | Q1/2026 platform totals; February +5% attributed to Tết, March +11% | 24/09/2026 | Confirmed. Rationale only, no figure enters the kit |
| S26 LuatVietnam | https://luatvietnam.vn/tin-van-ban-moi/khuyen-mai-hang-hoa-dich-vu-khong-vuot-qua-50-gia-tri-tu-01-7-2025-186-102656-article.html | Thông tư 39/2025/TT-BCT Article 4: discount cap on the price just before the promotion, with exceptions (concentrated promotions, price stabilised goods, fresh food, liquidation) | 24/09/2026 | Confirmed. Number stays out (D11) |
| S28 Công báo | https://congbao.chinhphu.vn/van-ban/luat-so-75-2025-qh15-45566.htm | Luật 75/2025/QH15 amending the Advertising Law, passed 16/06/2025, effective 01/01/2026 | 24/09/2026 | Confirmed (page metadata; operative detail from S29) |
| S29 Tuổi Trẻ PLO | https://tuoitre.vn/plo/tu-5-7-muon-quang-cao-nhat-duy-nhat-phai-co-tai-lieu-chung-minh-post910302.html | Thông tư 12/2026/TT-BVHTTDL, from 05/7/2026: "nhất", "duy nhất", "số một" need a lawful market survey or an award certificate, named in the ad with number and date | 24/09/2026 | Confirmed |
| S59 Báo Công Thương | https://congthuong.vn/vinh-danh-581-doanh-nghiep-dat-chung-nhan-hang-viet-nam-chat-luong-cao-449660.html | Hàng Việt Nam chất lượng cao 2026 is consumer voted and appraised, not self declared | 24/09/2026 | Confirmed |
| S55 sapnhap.bando.com.vn | https://sapnhap.bando.com.vn/ | Official lookup map after Nghị quyết 202/2025/QH15 (12/6/2025) and the commune level resolutions | 24/09/2026 | Confirmed |
| S68 Cổng TTĐT Chính phủ | https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-168-2025-nd-cp-ve-dang-ky-doanh-nghiep-119250702175708554.htm | Nghị định 168/2025/NĐ-CP Article 74: portal publishes name, enterprise code, head office address, business lines, legal representative, legal status free | 24/09/2026 | Confirmed |
| S65 Cổng TTĐT Chính phủ | https://xaydungchinhsach.chinhphu.vn/huong-dan-mot-so-noi-dung-ve-su-dung-so-dinh-danh-ca-nhan-thay-cho-ma-so-thue-tu-1-7-119250621104848381.htm | From 01/7/2025 individuals and household businesses use the personal identification number instead of a tax code | 24/09/2026 | Confirmed |
| S67 Bộ Công an | https://bocongan.gov.vn/bai-viet/luat-bao-ve-du-lieu-ca-nhan-chinh-thuc-co-hieu-luc-thi-hanh-tu-ngay-01-01-2026-1767186124 | Luật 91/2025/QH15 in force 01/01/2026; buying or selling personal data prohibited | 24/09/2026 | Confirmed. Fine amounts stay out (D11) |
| S30 LuatVietnam | https://luatvietnam.vn/linh-vuc-khac/luat-bao-ve-du-lieu-ca-nhan-moi-nhat-va-van-ban-huong-dan-883-106497-article.html | Nghị định 356/2025/NĐ-CP guides the law from 01/01/2026 and replaces Nghị định 13/2023 | 24/09/2026 | Confirmed |
| S56 Tạp chí Công Thương | https://tapchicongthuong.vn/quy-dinh-ve-hanh-vi-canh-tranh-khong-lanh-manh-theo-luat-canh-tranh-2018-101627.htm | Luật Cạnh tranh 2018 Article 45: business secrets, untruthful information about another business, unprovable comparisons | 24/09/2026 | Confirmed as of the article date 06/11/2022; later amendments not checked, as the index already notes |
| S62 Nhanh.vn | https://nhanh.vn/cach-tinh-doanh-thu-tren-shopee-chuan-2025-cho-nguoi-moi-n156995.html | Goods value, buyer payment, seller net received and profit are four different figures; fees vary by category and programme | 24/09/2026 | Confirmed (vendor blog, article 05/03/2026). No fee figure enters the kit |
| S44 GHN blog | https://ghn.vn/blogs/tip-ban-hang/thu-vien-quang-cao-tiktok | TikTok Top Ads (region filter) differs from the Commercial Content Library (mainly EEA, Switzerland, UK); viewable without an ads account | 24/09/2026 | Confirmed (vendor blog) |
| S38 Meta Terms, Vietnamese | https://vi-vn.facebook.com/legal/terms | Section 3.2: no access or data collection from Meta Products by automated means without prior permission. Effective 01/01/2025 | 24/09/2026 | Confirmed |
| S39 Google Maps content policy (hl=vi) | https://support.google.com/contributionpolicy/answer/7400114?hl=vi | Paid, incentivised and conflict of interest reviews (including of competitors) prohibited; no personal information without consent | 24/09/2026 | Confirmed |
| S69 Shopee Terms of Service | https://help.shopee.vn/portal/4/article/77243 | Section 3.1: no robot, spider, automated device or manual method to monitor, compile, collect or copy Shopee Content without written consent | 24/09/2026 | Confirmed (index cited "mục 3"; the page shows 3.1). No update date on the page |
| S70 Shopee AI Terms | https://help.shopee.vn/portal/4/article/185399?previousPage=other+articles | 3.2.8: no data collection by automated tools (spider, crawl, scrape); scope AI Tools and AIGC; updated 16/09/2026 | 24/09/2026 | Confirmed; scope limited to AI Tools, not widened |
| New: TikTok Terms of Service (vi) | https://www.tiktok.com/legal/page/row/terms-of-service/vi | Section 5: no automated scripts to collect information from the Service. Updated 01/12/2025 | 24/09/2026 | Opened; not in `nguon.md`, add at the next index pass |
| New: TikTok Shop Seller Terms (Vietnam) | https://seller-vn.tiktok.com/university/essay?knowledge_id=2581017870255874 | Section 14: no robot, spider, scraper, data mining or automated access to the Platform or TikTok Shop without express written permission. Updated 09/02/2026 | 24/09/2026 | Opened; not in `nguon.md`, add at the next index pass |
| New: Lazada Điều Khoản Sử Dụng | https://cdn.contract.alibaba.com/terms/common_platform_service/20260713175157767/20260713175157767.html?lng=vi (linked from https://www.lazada.vn/terms-of-use/, version dated 21/07/2026) | 4.2 Hạn Chế Sử Dụng: no content or material may be copied, redistributed, or stored in any information system without Lazada's prior written permission | 24/09/2026 | Opened through ego-browser and a direct download; no clause names robots or spiders, the copying and storing ban is the operative one. Not in `nguon.md` |

Not re-opened, with reason: S4, S5 (news of two holiday proposals; the adopted rule only says a proposal is not a holiday), S7 (S6 carries it), S8, S10, S12, S14, S16, S33, S34, S35, S43, S52, S53, S60, S61, S64, S71 (behind `DEFER` or `KEEP` rows only; the routine writer that takes the row re-opens them), S15, S32, S36 (usage surveys, rationale only), S17, S18, S45, S46, S47, S48, S49, S50, S57, S58, S63, S66, S72 (behind `DEFER`, `REJECT` or `UNVERIFIED` rows only). S27 is gone (404 on 23/09/2026) and cited by no row.

## Platform terms verdicts (D13)

| Platform the kit may read | Terms clause | Verdict for this kit |
|---|---|---|
| Meta (Facebook pages, groups, Ad Library) | S38 3.2 | **Automated access or collection not allowed without Meta's permission.** No routine reads Meta pages by browser automation or `web.fetch`; a Meta observation reaches the kit only as a page a person opened and saved into a file, or from the member's own account export |
| Shopee | S69 3.1; S70 3.2.8 | **Tracking, compiling, collecting or copying Shopee Content by automated or manual means not allowed without written consent.** No competitor Shopee shop on the watchlist; Shopee numbers only from the member's own Seller Centre export or report file |
| TikTok and TikTok Shop | TikTok ToS 5; TikTok Shop Seller Terms 14 | **Automated collection not allowed without express written permission.** Same treatment as Shopee; the member's own TikTok Shop reports only |
| Lazada | Điều Khoản Sử Dụng 4.2 | **Copying or storing Lazada content in any system not allowed without prior written permission.** Same treatment; the member's own Seller Center reports only |
| Google Maps reviews | S39 | Reading is not addressed; posting competitor or incentivised reviews and publishing reviewers' personal information are prohibited. `cos-market-sweep` may keep a review surface only as a verbatim quote without the reviewer's name, and the writer must check the Google Maps terms of service before a browser reads Maps |
| TikTok Ad Library, TopCV, VietnamWorks, CareerViet, ITviec, Metric.vn, Brands Vietnam, CafeBiz | not re-opened | **Unknown.** `cos-market-sweep` and `cos-charter-and-fleet-audit` must open each site's terms before adding a surface, per D13, and record the verdict in their ledger |

## Clause decisions

### A1. Form author (lines 54 to 62)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 56 Filler is an AI sub agent, research draft 23/09/2026, needs a real practitioner | none | KEEP | this report, every routine ledger | Recorded as author and review status; the kit never presents an AI draft as a human expert |
| 58 Role: Chief of Staff for Vietnamese SME owners, research role | none | KEEP | report | Scope statement only |
| 59 No years of experience | none | KEEP | report | Review status |
| 60 Scope: online retail on Shopee, TikTok Shop, Lazada, Facebook, Zalo; local services; small B2B; household to SME | `[CG]` | KEEP | report | Scope of the form; the original kit already serves any small business |
| 60 SME size thresholds under Nghị định 80/2021 (labour counts 100 and 200; household is not an enterprise) | `[CG]`, no `[S#]` | UNVERIFIED | report | A legal number with no source in the index; D11 keeps legal numbers out anyway |
| 61 Tools only read about, never operated; Shopee Academy did not load | none | KEEP | report | Review status; confirms no tool route was tested live |
| 62 No contact | none | KEEP | report | Nothing to record |

### A2. The work in Vietnam (lines 64 to 91)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 69 Charter: "Hồ sơ doanh nghiệp một trang + sơ đồ việc lặp", not "charter" | none | WORDING | glossary; `cos-charter-and-fleet-audit` | Presentation only; `STYLE-VI.md` already uses "hồ sơ doanh nghiệp" |
| 69 Charter cadence: first client, first working day of month, or within 24 hours of a price, tax code, address or province change | none | UNVERIFIED | report | Unmarked cadence; `first-weekday` row unchanged |
| 69 Charter authority: AI drafts, person approves | none | KEEP | `cos-charter-and-fleet-audit` | The audit writes its own charter files and reports; its outbound actions are already held (Guardrail 1). Approval gating ordinary file work is forbidden by the repo contract |
| 70 Sweep name "Quét đối thủ giữa tuần" | none | WORDING | glossary; `cos-market-sweep` | Presentation |
| 70 Sweep Wednesday 09:30; extra Monday and Friday price and voucher pass in sale season and 10 days before Tết; 50 to 80 min, 6 sources | none | UNVERIFIED | report | Unmarked clock time and cadence; the `wed` row stays |
| 71 Metrics name "Chốt số tuần" (revenue, orders, money in, returns, receivables) | none | WORDING | glossary; `cos-metrics-review` | Presentation |
| 71 Metrics Thursday 16:30; week Monday 00:00 to Sunday 23:59 Vietnam time | none | UNVERIFIED | report | Unmarked time; the ISO week key already runs Monday to Sunday on local time |
| 72 Brief name "Tờ trình ngắn cuối tuần, tối đa 3 việc" | none | WORDING | glossary; `cos-decision-brief` | Already applied in `../cos-decision-brief.md` |
| 72 Brief Friday 16:30; one reminder Monday 08:30 | none | UNVERIFIED | report | Unmarked; the B-4 ledger kept the row |
| 73 Review name "Họp rà quyết định tháng" | none | WORDING | glossary; `cos-decision-review` | Presentation; glossary uses "bản rà tháng" for the page |
| 73 Review 15:00 last working day; five working days earlier in a Tết month | none | UNVERIFIED | report | Unmarked time and shift rule |
| 74 Reconcile name "Bản tin sáng" | none | WORDING | glossary; `cos-fleet-reconcile` | Presentation |
| 74 Reconcile 07:15 read, 07:30 send on declared working days | none | UNVERIFIED | report | Unmarked; row fires 07:15 already. A5.9 `[CG]` is the marked version, see below |
| 74 Every brief drafted by AI, sent by a person; a brief touching money or a person's name needs its own approval | none | KEEP | `cos-fleet-reconcile`; CAPABILITIES `brief.deliver` | D10: routines draft, the person on duty sends. The kit writes no names and no money moves, so the separate approval has nothing to gate |
| 80 New task: reconcile money in (SePay business channel, view only) against delivered orders at 07:20 | none | UNVERIFIED | report | New behaviour, unmarked; the kit's reconcile is of AI Employees, not money. B-3 or B-6 may carry a marked version |
| 81 New task: remind tax, invoice, social insurance deadlines from the signed accountant table; NĐ 117/2025 deduction check for household sellers; never compute or file | none | UNVERIFIED | report | New behaviour, unmarked; the same idea at A7 258 is unmarked too |
| 82 New task: screen messages impersonating the owner or accountant asking for transfers; always a person | none | KEEP | CONTRACT section 7 Guardrail 2 | Covered by Guardrail 2 and by the A6 233 adoption below |
| 83 New task: watch Shopee, TikTok Shop, Lazada, fanpage connection expiry; read status only, a person reconnects | none | UNVERIFIED | report | Unmarked new behaviour; B-6 decides if its section marks it |
| 84 New task: record an oral decision or "ok em" in the register within 30 minutes | none | KEEP | `cos-fleet-reconcile` | The marked versions are A3 101 and A4 127 below; this unmarked duplicate adds nothing |
| 85 New task: check addresses against the 34 province map before writing | none | KEEP | `cos-charter-and-fleet-audit` | The marked version is A3 102 below |
| 86 New task: flag Tết, 6.6, 8.8, 9.9, 11.11, 12.12, Black Friday weeks before any week on week percent | none | KEEP | `cos-metrics-review` | The marked version is A3 99 below |
| 87 New task: one block of at most five questions to the owner with provisional answers, never drip fed | none | UNVERIFIED | report | Unmarked; `INSTALL-PROMPT.md` says "Do not interview me" and the kit asks nothing at run time |
| 91 Give the AI first: morning brief, Wednesday sweep, connection expiry reminders; not first: money reconciliation, spend briefs, anything about transfers | none | KEEP | report | Rollout advice for the project; no kit behaviour |

### A3. Vietnam specifics (lines 94 to 104)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 99 Tết 2026 facts: five paid days, employer picks one of three options, notice at least 30 days, civil servant dates | `[S1][S42]` | DEFER | `cos-charter-and-fleet-audit` (`## Working days and hours` from the member's own Tết plan) | Legal facts and dates stay out of the kit (D11, D12); the member's constraints file carries the year's plan |
| 99 Q1/2026 platform growth 46,60%, February +5%, March +11% | `[S40]` | REJECT | report | A market figure as kit text breaks the number rule; kept as rationale for the sale week rule |
| 99 Sale seasons: Tết, 6.6, 8.8, 9.9, 11.11, 12.12, Black Friday | `[S23]` | ADOPT | `cos-metrics-review`, `cos-decision-brief`, `cos-decision-review`, `cos-market-sweep` | Re-verified; the list is the default set of flagged events; the member's own sale days (A7 256) add to it |
| 99 Illustration: 11.11 week 180 orders, next week 70, "down 61%, cut ads" | `[CG]` | EXAMPLE | acceptance traps in the routine ledgers | Fictional case; figures never enter the kit |
| 99 Never compare a sale week percent with a normal week; name the comparison period when both weeks are the same kind and share a source; write "tuần sale, không so với tuần thường" | `[CG]` | ADOPT | `cos-metrics-review` (week flag, `n/a` reason), `cos-decision-brief` (already applied), `cos-decision-review` | Owner approved |
| 99 Compare with the same event last year only with same source figures | none | UNVERIFIED | report | Unmarked clause inside the row |
| 99 24/11 is a paid day off from 01/7/2026 | `[S6][S7]` | DEFER | `cos-charter-and-fleet-audit` (holiday line in `## Working days and hours`) | Re-verified; a dated holiday lives in the member's constraints file, never in a routine |
| 99 Two competing 2026 bridge day proposals; never assume the company takes four days | `[S4][S5]` | ADOPT | `cos-charter-and-fleet-audit`, `cos-fleet-reconcile` | Qualitative: a proposal is not a holiday; only the member's constraints file makes a day off |
| 100 Public price is often not the closing price ("ib", flash sale, voucher, livestream price) | none | WORDING | glossary | Definitions |
| 100 Promotion discount cap on the price just before, concentrated promotions exempt | `[S26]` | ADOPT, qualitative | `cos-decision-brief` (applied), `cos-market-sweep` | Re-verified; the percentage stays out (D11) |
| 100 Shopee policy "giá bán tăng bất hợp lý trước khuyến mãi", page not loaded, no threshold | `[CG]` | UNVERIFIED | report | S27 is 404; `[CG]` approves the note, not a rule |
| 100 Illustration: list 500.000 đ, 2 hour flash 250.000 đ, reported as a 50% list cut | `[CG]` | EXAMPLE | `cos-market-sweep` acceptance trap | Fictional |
| 100 Record three price levels (giá gạch, giá đang bán with time, giá sau voucher when shown); call it a price change only when giá gạch or the selling price outside flash or livestream changes and holds 48 hours; say which level changed | `[CG]` | ADOPT | `cos-market-sweep` (owns the hold period), `cos-decision-brief` (price test, applied without the hour count) | Owner approved |
| 100 Never turn a competitor's price into our own claim | none | KEEP | `copy.check`; ROLE standing rules | Inherited |
| 101 Zalo 92%, Messenger 33%, Teams 24% for work | `[S15]` | REJECT | report | Survey figure as kit text breaks the number rule; rationale for D10 |
| 101 Zalo free storage 500 MB; files not on Cloud deleted after one week | `[S16]` | KEEP | none | Rationale only; the kit already keeps every brief as a file under `briefs/` |
| 101 Illustration: "ok em" at 22:10 lost among 300 messages | `[CG][S16]` | EXAMPLE | `cos-fleet-reconcile` acceptance trap | Fictional |
| 101 "Ok em", "làm đi" approve; heart or "để anh xem" is not approval | `[CG]` | ADOPT | `cos-fleet-reconcile`, `cos-decision-brief` wording | D8; still only a tick in the register creates `accepted` |
| 101 Brief and tờ trình go to the owner's private Zalo | `[CG]` | DEFER | CAPABILITIES `brief.deliver`, `cos-fleet-reconcile` | D10: the person on duty sends; `brief.deliver` and `notify.push` keep their routes |
| 101 Save to Drive, Lark or Base within 15 minutes; record approval within 30 minutes | `[CG]` | DEFER | `README.md` handover text in the variant, `cos-fleet-reconcile` | Duties of the person on duty; a routine cannot time a human |
| 102 34 provinces after Nghị quyết 202/2025/QH15; check the official map before writing an address | `[S55]` | ADOPT | `cos-charter-and-fleet-audit` (`charter/business.md`), `cos-market-sweep` if it records an address | Re-verified; qualitative, no count needed in the kit |
| 102 Business registration portal shows name, code, address, representative, status free | `[S68]` | ADOPT | `cos-charter-and-fleet-audit`; CAPABILITIES research route | Re-verified; legal identity comes from the portal, not from a website |
| 102 Illustration: old district name copied into a letter | `[CG]` | EXAMPLE | `cos-charter-and-fleet-audit` trap | Fictional |
| 102 When the portal still shows the old address, record both with the read date; never rewrite to the new name unchecked | `[S55]` | ADOPT | `cos-charter-and-fleet-audit` | Supports the "never guess" rule with a dated record |
| 103 Impersonated leader on Zalo, fake transfer slips, deepfakes | `[S13][S37]` | ADOPT | CONTRACT section 7 Guardrail 2 note; ROLE section 1 | Re-verified; see A6 233 |
| 103 Face authentication from 01/7/2026; banks may block unregistered | `[S11][S49]` | REJECT | report | The kit never touches a bank; a legal date as kit text adds nothing (D11) |
| 103 Illustration: 80 million request at 21:40 | `[CG]` | EXAMPLE | acceptance trap in `cos-fleet-reconcile` | Fictional |
| 103 Never draft a transfer, never ask for an OTP, never call the number in the message; tell the person to call the saved number | none (row sources above) | KEEP | Guardrail 2 | Carried by the A6 233 adoption |
| 104 Luật 75/2025/QH15 and Thông tư 12/2026: superlatives need a supporting document from 05/7/2026 | `[S28][S29]` | ADOPT, qualitative | `cos-charter-and-fleet-audit` (`## Sources read` staging note), `cos-market-sweep` (competitor claims are quotes, not facts), `cos-decision-brief` (applied) | Re-verified |
| 104 HVNCLC 2026 is consumer voted, 581 businesses | `[S59]` | ADOPT, qualitative | `cos-charter-and-fleet-audit`, `cos-decision-brief` (applied) | Re-verified; the count stays out |
| 104 Illustration: "số 1 collagen Việt Nam" from a PR piece | `[CG]` | EXAMPLE | trap | Fictional |
| 104 Record a claim only with a valid document named and dated; otherwise write "câu trên website, chưa thấy chứng từ" | none (row sources above) | WORDING | `cos-charter-and-fleet-audit` `## Sources read` line suffix | Fits the existing staging rule; the Vietnamese phrase is presentation |

### A4. Trade terms (lines 106 to 135)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 111 Boom hàng | none | WORDING | glossary | |
| 112 Hoàn đơn, definition | none | WORDING | glossary | |
| 112 TikTok Shop return window 15 days from "Đã giao" | `[S46]` | DEFER | `cos-metrics-review`, `cos-decision-review` | A platform window matters for when a return rate is final; their B sections cite S46 and re-open it |
| 113 COD | none | WORDING | glossary | |
| 113 Household goods 10/100 broken, fashion 15% at 11.11 | `[S58]` | REJECT | report | Anecdotal figures as kit text break the number rule |
| 114 Chốt đơn | none | WORDING | glossary | |
| 115 Inbox; a close rate needs 30 purchase conversations | none | KEEP | rate floor, `cos-metrics-review` | Inherited default floor of thirty |
| 116 Giá ib; never fill an estimate | none | KEEP | `cos-market-sweep` `n/a (<reason>)` | Inherited "never estimate" |
| 117 Flash sale | none | WORDING | glossary | |
| 118 Voucher; always record who pays | none | WORDING | glossary | Term only; "record who pays" is an unmarked rule and stays a proposal |
| 119 Livestream | none | WORDING | glossary | |
| 120 Thực nhận is not revenue and not profit | `[S62]` | DEFER | `cos-metrics-review` | Re-verified; the metrics page owns units |
| 121 Đối soát | none | WORDING | glossary | |
| 122 Công nợ; COD in transit is not receivable | none | WORDING | glossary | Definition |
| 123 Hoá đơn MTT under NĐ 70/2025 | `[S3]` | DEFER | `cos-metrics-review` | The kit reads no invoices; B-3 C7 carries it |
| 124 MST: company code on the portal; households use the 12 digit personal id since 01/7/2025, which is personal data and never enters a brief | `[S68][S65][S67]` | ADOPT | `cos-charter-and-fleet-audit` (`charter/business.md` records the company code only when the portal shows it; a household id is never copied) | Re-verified; strengthens the inherited no personal data rule |
| 125 ZBS Template Message (formerly ZNS) | `[S14]` | WORDING | glossary | Term only; the kit sends nothing through Zalo OA |
| 126 Thả tim is not approval | `[CG]` | ADOPT | `cos-fleet-reconcile` | D8 |
| 127 Ok em is approval, recorded within 30 minutes with time and sender | `[CG]` | ADOPT | `cos-fleet-reconcile` | D8; the person on duty ticks and pastes words and time |
| 128 Để anh xem is a deferral; one reminder after 7 days | `[CG]` | ADOPT | `cos-fleet-reconcile`, `cos-decision-brief` | D8, D9 |
| 129 Tờ trình | none | WORDING | glossary | |
| 130 Hạn mức chi is the owner's number, never inferred | `[CG]` | ADOPT | `cos-decision-brief` (applied), `cos-decision-review`, `cos-charter-and-fleet-audit` (`## Ceilings` member only, already carried verbatim) | Owner approved |
| 131 Chỉ đọc; MISA separates balance lookup from payment orders | `[S12]` | DEFER | CAPABILITIES section 4b | Route detail for connected sources |
| 132 ROAS only with same period and same source | none | KEEP | `cos-metrics-review` | Inherited "windows are different lengths" |
| 133 Affiliate; TikTok deduction differs for individuals | `[S45]` | DEFER | `cos-metrics-review` | B-3 carries tax deductions |
| 134 Seen is not agreement | none | KEEP | `cos-fleet-reconcile` | Only a tick is an outcome; D8 and `STYLE-VI.md` say the same |
| 135 Shop; one legal entity may run several shops | none | WORDING | glossary | |

### A5. Tools and channels (lines 137 to 225)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 142 Gmail or company domain; owners read Zalo faster | `[S15][CG]` | DEFER | CAPABILITIES `brief.deliver` | Route note; outbound email stays held |
| 143 Microsoft 365 rarely primary | none | KEEP | none | The kit assumes no mail vendor |
| 144 Calendar; holidays from documents, never guessed | `[S1][S47]` | KEEP | `cos-charter-and-fleet-audit` | Inherited "never guess"; holidays come from the constraints file |
| 145 Drive or Lark Docs; "anyone with the link" sharing is a locked action for the register and revenue reports | `[S16]` | KEEP | Guardrail 1 | Sharing is an outbound action already held; the kit publishes nothing |
| 146 Slack replaced by Zalo, Lark or Base | `[S15][S36]` | DEFER | CAPABILITIES `notify.push`, `brief.deliver` | D10: no personal Zalo automation; push never Zalo |
| 147 No Notion; the business profile is at most two pages | `[CG]` | DEFER | `cos-charter-and-fleet-audit` | B-1 decides the charter length |
| 148 Base, 1Office, MISA AMIS Công việc, Lark for tasks; never assign work by name | `[S43][S60][S71]` | DEFER | `cos-fleet-reconcile`, CAPABILITIES section 4b | Reading a human task board is new; B-6 decides |
| 149 Money in: view only bank app, SePay business chat channel that hides the balance; not the accounting channel | `[S8]` | DEFER | CAPABILITIES section 4b, `cos-metrics-review` | B-3 decides |
| 149 Never Casso: its guide uses Basic Auth with the bank password | `[S9]` | ADOPT | CONTRACT section 7 Guardrail 2 note; CAPABILITIES | Re-verified; no route may need a bank password |
| 150 Chargebee not needed | none | KEEP | none | |
| 151 MISA SME or AMIS; sales reports in KiotViet, Sapo, Haravan, Nhanh.vn; editing vouchers or invoices locked | `[S12][S33][S34]` | DEFER | CAPABILITIES section 4b, `cos-metrics-review` | Route detail |
| 152 Ads wallets; ceiling in VND written by the owner | none | KEEP | Guardrail 1; A4 130 | Spend already held; ceiling rule adopted at A4 130 |
| 153 PostHog not needed; GA4 for a website | `[CG]` | DEFER | CAPABILITIES | Route note |
| 154 GA4 view only; never attach phone numbers | none | UNVERIFIED | report | Unmarked route |
| 155 Vercel not needed; Haravan, Sapo, Nhanh.vn statistics | `[S34]` | DEFER | CAPABILITIES | Route note |
| 156 Metric.vn is an industry picture, never one shop's revenue; never write Metric figures as a competitor's revenue | `[S23][S40]` | ADOPT | `cos-market-sweep`, `cos-metrics-review`, `cos-decision-brief` (applied) | Re-verified: platform totals only |
| 157 Crunchbase replaced by the registration portal | `[S68]` | DEFER | CAPABILITIES research route | Covered by A3 102 |
| 158 Hiring signals on TopCV, VietnamWorks, CareerViet, ITviec, fanpages; never message candidates | `[CG]` | DEFER | `cos-market-sweep` (careers surfaces) | Each site's terms unknown (D13 table) |
| 159 Watchlist surfaces: marketplace shops, fanpages, Meta Ad Library, TikTok library, Google Maps, job posts, public groups; read only, never log in for the owner | `[S22][S44][S39]` | ADOPT, restricted | `cos-market-sweep`, `cos-charter-and-fleet-audit` (seed), `recipes/BROWSER-RECIPES.md` | Re-verified; restricted by the D13 table: no automated reading of Meta, Shopee, TikTok Shop or Lazada pages |
| 159 Meta forbids automated collection without permission | `[S38]` | ADOPT | `cos-market-sweep`, `cos-charter-and-fleet-audit`, `cos-metrics-review` (no live screen on Meta) | Re-verified (D13) |
| 160 Member surfaces: website, fanpage, Zalo OA, marketplace shop, Maps; many local services have no price list | `[CG]` | DEFER | `cos-charter-and-fleet-audit` | B-1 decides; `## Price and billing shape` may be empty with a reason |
| 161 KiotViet, Sapo, Haravan, Nhanh.vn; editing prices or stock locked | `[S33][S10][S34][S52]` | DEFER | CAPABILITIES section 4b | Route detail |
| 162 Pancake or Vpage inbox; replies drafted, a person approves | `[S35]` | DEFER | CAPABILITIES section 4b | Route detail; replies are outbound and held |
| 163 MISA AMIS CRM report sharing | `[S64][S12]` | DEFER | CAPABILITIES section 4b | Route detail |
| 164 SePay; Casso not used | `[S8][S9]` | DEFER | CAPABILITIES section 4b | Duplicate of 149 |
| 165 Base Request, 1Office, Lark Approval as the decision register; approving for the owner is locked | `[S60][S71]` | DEFER | `cos-fleet-reconcile` | D8: only a tick in `decisions/REGISTER.md` creates an outcome; B-6 decides whether an approval tool is read |
| 170 A5.1 revenue, cash and receivables sources and read only roles | `[S33][S10][S62][S8][S12][S64][S9]` | DEFER | `cos-metrics-review`, CAPABILITIES section 4b | B-3 owns metric sources |
| 175 A5.2 orders and conversion; close rate needs 30 conversations; no invented walk ins | `[S34][S62][S35][S23]` | KEEP | `cos-metrics-review` | Inherited rate floor and "never estimate" |
| 175 A5.2 never use Similarweb or Metric.vn for the shop's own orders | `[S23]` | ADOPT | `cos-metrics-review` | Same rule as 156 |
| 180 A5.3 AI assigns no work; reads existing task status and flags overdue | `[S15][S36][S71][S60]` | DEFER | `cos-fleet-reconcile` | Reading human tasks is new; B-6 decides |
| 185 A5.4 read named internal Zalo groups and Drive folders; never family, private or customer chats | `[S15][S16]` | REJECT | report | D10 and Appendix A: no routine automates personal Zalo, reading included |
| 185 A5.4 never copy account numbers, ID numbers or passwords into a brief | none | KEEP | `runlog.mjs` refusal; no personal data rule | Inherited |
| 190 A5.5 ask the owner once at install which copy is the original | `[S15][CG]` | DEFER | `INSTALL-PROMPT.md` `## FILL THIS IN` block | The install prompt forbids an interview; a filled field fits |
| 195 A5.6 legal entity, admin map, ad libraries, hiring, no invented funding rounds | `[S68][S55][S22][S44][S24][S23][S40]` | DEFER | `cos-market-sweep`, `cos-charter-and-fleet-audit` | B-2 and B-1 carry surface detail; D13 table applies |
| 195 A5.6 not seen in the TikTok Commercial Content Library does not mean no ads in Vietnam | `[S44]` | ADOPT | `cos-market-sweep` | Re-verified; an absence on that library is `n/a`, not "no ads" |
| 200 A5.7 fanpage, Zalo OA, website, marketplace shop, Maps, job sites; LinkedIn is not the owner's channel; read public posts only, never friend or message | `[CG]` | DEFER | `cos-market-sweep`, `cos-charter-and-fleet-audit` | Surface choice is B-2 and B-1 |
| 205 A5.8 urgent alerts: private Zalo drafted, sent by the person on duty; 07:30 to 21:30; at most three a day; four urgent cases; 5.000.000 đ threshold | `[CG]` | REJECT | report | D10 and CONTRACT section 9: `notify.push` keeps its own case list and never goes to Zalo; the four money and marketplace cases are outside this kit's data |
| 205 A5.8 impersonation message is urgent | `[S13]` | KEEP | Guardrail 2 | Handled as data plus a line for the person on duty |
| 205 A5.8 promotional SMS limited by NĐ 91/2020 | `[S57]` | KEEP | Guardrail 1 | The kit sends no SMS |
| 210 A5.9 morning brief 07:30, sent by a person on private Zalo; draft kept on Drive or Lark; at most 30 lines; first "Việc cần chủ trong 15 phút" (three lines), then money, pushed orders, connections; never list what runs fine | `[CG]` | DEFER | `cos-fleet-reconcile`; CAPABILITIES `brief.deliver` | B-6 decides; the 30 line cap and "never list what passed" are already inherited; parsed headings `## Today` and `## Waiting on you` stay English |
| 210 A5.9 Điều 105 Bộ luật Lao động 2019 sets no start hour | `[CG]` | REJECT | report | A legal statement as kit text adds nothing (D11) |
| 210 A5.9 Intage via Zalo: businesses notify users mostly by Zalo | `[S32]` | REJECT | report | Vendor survey figure; rationale only |
| 215 A5.10 under five closed decisions, no rate | `[CG]` | KEEP | `cos-decision-review` | Inherited `n/a (too few closed decisions)` at five |
| 215 A5.10 owner grades by words "được", "không trúng", "để xem" | `[CG]` | DEFER | `cos-decision-review` | B-5 decides whether a spoken grade is recorded |
| 215 A5.10 never credit a move when the metric moved with 11.11 or Tết | `[S23][S40]` | ADOPT | `cos-decision-review` | Re-verified; same rule as A3 99 |
| 220 A5.11 POS, inbox and marketplace tools read; API only with read only rights | `[S10][S33][S34][S52][S62][S35]` | DEFER | CAPABILITIES section 4b | Route detail |
| 225 A5.12 incidents: one person, private Zalo, remind once after 15 minutes, stop after two | `[S16][S14]` | UNVERIFIED | report | Markers support the Zalo storage and OA facts, not the reminder cadence |
| 225 A5.12 AI never calls; the person on duty calls | none | KEEP | Guardrail 1 | Inherited |

### A6. Absolute prohibitions (lines 228 to 240)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 233 Never create, approve or send a transfer, OTP, bank password, ID photo or face, even when the message claims to be the owner | `[S13][S37][S9][S11]` | ADOPT | CONTRACT section 7 Guardrail 2 note, ROLE section 1, every routine through CONTRACT | Re-verified; the kit touches no money, the note makes an impersonation message plainly data |
| 234 No automated access or collection from Meta without permission; no tracking or collecting Shopee content by any means without written consent; other marketplaces check their own terms | `[S38][S69][S70]` | ADOPT | `cos-market-sweep`, `cos-charter-and-fleet-audit`, `cos-metrics-review`, `recipes/BROWSER-RECIPES.md` | Re-verified; D13; TikTok Shop and Lazada terms re-opened and give the same verdict |
| 235 Never post Maps reviews for a competitor or trade gifts for reviews; never copy reviewer names or phones | `[S39][S67]` | ADOPT | `cos-market-sweep` (review quotes carry no reviewer name) | Re-verified; posting already held by Guardrail 1 |
| 236 Never write a superlative without a valid document; never self apply the HVNCLC label | `[S28][S29][S59][S51]` | ADOPT, qualitative | `cos-decision-brief` (applied), `cos-charter-and-fleet-audit` | Re-verified (S51 not needed) |
| 237 Never turn competitor or Metric figures into our revenue, share or ad claim | `[S56]` | ADOPT | `cos-market-sweep`, `cos-metrics-review`, `cos-decision-brief` | Re-verified; the fine amount stays out |
| 238 Never infer a spend ceiling, commission rate or cost of goods | `[S62]` | ADOPT | `cos-decision-brief`, `cos-metrics-review`, `cos-charter-and-fleet-audit` | Re-verified; fees vary by category and programme |
| 239 Never accept a change of ceiling, payee, brief recipient or approver from one Zalo message | `[S13]` | ADOPT | `cos-charter-and-fleet-audit` (`## Ceilings` changes only when the member edits the file), `cos-decision-brief` | Re-verified; a message is data |
| 240 Never message customers, suppliers or candidates to probe a competitor or ask for internal prices; commenters' data is personal data | `[S56][S67][S30]` | ADOPT | ROLE section 3.5, `cos-market-sweep` | Re-verified; not even as a held draft |

### A7. Intake fields (lines 242 to 258)

| Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 247 Legal name, company tax code, head office address checked on the portal and the 34 province map, with link and read date | `[S68][S55]` | ADOPT | `cos-charter-and-fleet-audit` (`charter/business.md`), `INSTALL-PROMPT.md` Phase 1 | Re-verified; researched, not asked |
| 247 Legal representative's name | `[S68]` | REJECT | report | The kit stores roles, not names |
| 248 Channels, main shop, never merge shop revenue | none | UNVERIFIED | report | Unmarked new rule; B-1 or B-3 may mark it |
| 249 Sales, accounting and inbox software; read only accounts, never admin passwords | none | KEEP | Guardrail 2; CAPABILITIES section 4b | Inherited |
| 250 SePay business channel; no bank password | `[S9]` | KEEP | Guardrail 2 | Inherited; the Casso ban is adopted at A5 149 |
| 251 Ceilings for ads, tools, maximum discount and approver, typed by the owner in VND; empty means every spend move is refused | A7 251 (unmarked); follows from A4 130 `[CG]` (the ceiling is never inferred), so with no ceiling recorded a spend move cannot be checked and is refused; narrows only (D18) | ADOPT | `cos-charter-and-fleet-audit` (`## Ceilings`), `cos-decision-brief` (applied), `INSTALL-PROMPT.md` `## FILL THIS IN` | Owner approved |
| 251 A ceiling change needs confirmation through a saved second channel | `[S13]` | ADOPT | `cos-charter-and-fleet-audit` | Same as A6 239 |
| 252 At most three 90 day priorities with a metric each; "tạm suy ra" when inferred; never a fourth | none | KEEP | `cos-charter-and-fleet-audit` seed, `cos-decision-review` | Inherited seed; "tạm suy ra" is WORDING in the glossary |
| 253 Working days, hours, quiet hours, Tết duty person | none | KEEP | `charter/constraints.md` `## Working days and hours` | Inherited heading |
| 253 Default 08:00 to 17:30 Monday to Friday when the owner writes none | `[CG]` | ADOPT | `cos-charter-and-fleet-audit` (constraints default, marked as a default); `cos-fleet-reconcile` reads it for push suppression | Owner approved; business hours are charter data, not a schedule row |
| 253 Must match the Tết plan the employer announced | `[S1]` | ADOPT, qualitative | `cos-charter-and-fleet-audit` | Re-verified; the member's Tết plan, not a legal default |
| 254 Up to eight competitor sources, public URLs already opened; no private group links | none | KEEP | `cos-charter-and-fleet-audit` watchlist seed (cap eight) | Inherited cap and no login rule |
| 255 Owner's Zalo number, emergency phone, stand in's name | none | REJECT | report | D10 and the no personal data rule: the kit sends nothing on Zalo and stores no contact |
| 256 Shop's own sale days, used to flag weeks, never to switch on ads | none, carrier for A3 99 `[CG]` | ADOPT | `cos-charter-and-fleet-audit` (constraints list), `cos-metrics-review` | The field is the data source the adopted `[CG]` rule needs |
| 256 Categories barred from advertising | none | UNVERIFIED | report | Unmarked |
| 257 Seller type per marketplace and revenue above or below 500 million; NĐ 117/2025 applies to households and individuals | `[S17]` | DEFER | `cos-metrics-review` | B-3 C5 and C7; the threshold stays out (D11) |
| 258 Tax, invoice and insurance deadline table signed by the accountant; reminders three working days ahead | none | UNVERIFIED | report | Unmarked new behaviour; the kit never infers deadlines from law |

## Counts

Counted from the tables above, one row per clause (a row marked "ADOPT, qualitative" or "ADOPT, restricted" counts as ADOPT).

| Decision | Rows |
|---|---|
| ADOPT | 38 |
| DEFER | 34 |
| KEEP | 36 |
| WORDING | 20 |
| EXAMPLE | 6 |
| REJECT | 10 |
| UNVERIFIED | 18 |
| MOVE | 0 |
| Total | 162 |

No row moves a `SCHEDULE.md` row: every clock time in Phần A is unmarked or deferred to its routine's Phần B.

## Candidates for Gate 8 (shared Vietnam rules file)

Kept out of the kit under D11, listed so one dated file can be decided once: promotion discount cap and exceptions (S26), superlative document rule dates (S28, S29), Tết notice period (S1), 24/11 holiday (S6), personal data law date (S67, S30), SMS and call hours (S57, not re-opened here), NĐ 117/2025 deduction scope (S17, not re-opened here).
