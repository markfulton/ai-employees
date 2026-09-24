# sales-qualification-refresh: provenance ledger

Status on 24/09/2026: **ledger complete, Gate 2 sources re-opened, routine edits applied to the variant routine and checked (see Files and checks).** Built on the model of `localization-reports/chief-of-staff-vn/cos-decision-brief.md`. Phần A decisions are cited by row from `_shared/phan-a-ledger.md` and are not re-decided here.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/07_Sales/phieu-da-dien.md`, `## B-6. sales-qualification-refresh`, form lines 1584 to 1877. Phần A read through `_shared/phan-a-ledger.md` (form lines 51 to 250).
- Extract: `extract_form_section.py --routine sales-qualification-refresh`, saved at `scratchpad/vn/sales-employee-vn/sales-qualification-refresh-extract.md` and `.json`. 136 rows and answers: 7 with `[S#]`, 5 with `[CG]`, 2 with both, 126 unmarked. B0 box ticked: "Làm khác".
- Form author (Phần A A1): an AI sub agent playing a Vietnamese B2B SDR, research draft dated 23/09/2026. **No clause has been confirmed by a person working in Vietnamese B2B sales.** `[CG]` marks are the owner's review decisions, not a domain expert's. Form line 1829 says so again ("Người điền phiếu là AI, không có kinh nghiệm cá nhân").
- Original kit and routine: `employees/sales-employee` (VERSION 1.8.0), `routines/sales-qualification-refresh/SKILL.md`, 744 lines, 76821 bytes. Read in full.
- Variant kit and routine: `employees/sales-employee-vn`, same routine id. 89679 bytes after the review fixes (117 percent).
- Source index: `07_Sales/literature/nguon.md`, viewing date 23/09/2026 on every row. Re-opened on 24/09/2026 as below.
- Kit version: set once for the whole kit by the lead (D14). This writer bumps nothing.
- Gate 1: the kit glossary's Gate 1 search (`_shared/glossary.md`) found no Vietnamese skill that covers a month end qualification review; wording only.
- Inline marker placement was read from the raw form lines, not only the extract's aggregated tags, so each marker below is attached to the clause it follows in the form.

## Sources re-opened

Sources behind an ADOPT here that state a law, a number or a platform rule and are not already verified in the Phần A ledger. Already verified there and relied on here: S24, S26, S27, S51, S53, S54, S57, S64 and the platform terms table (LinkedIn 8.2, Meta 3.2, Zalo 4.7, TopCV, VietnamWorks, CareerViet, ITviec, Trang Vàng, registration portal, tax lookup).

| S# | URL | Date checked | What it supports here | Verdict |
|---|---|---|---|---|
| S40 | https://www.topcv.vn/brand/topcv?id=105 | 24/09/2026 | A job board company page carries a self declared size field | Confirmed: "Quy mô: 100-499 nhân viên" on the page, beside the business registration number. Figure not used in the kit |
| S41 | https://itviec.com/nha-tuyen-dung/itviec | 24/09/2026 | Same, a second job board | Confirmed: "Quy mô công ty 51-150 nhân viên". Figure not used in the kit |
| S80 | https://tuoitre.vn/careerviet-sap-ra-mat-ai-matching-2-0-giup-doanh-nghiep-chon-chuan-tuyen-nhanh-20250731103901613.htm | 24/09/2026 | Form claims job boards filter by industry and province | Partly: the article confirms the platform and its scale (more than 20.000 businesses, more than 5 million users) but says nothing about filters. S40 and S41 confirm only the size field, not a filter, so after the review fix no filter claim enters the routine; no count enters the kit |
| S44 | https://trangvangvietnam.com/ | 24/09/2026 | A business directory filters by industry and province | Direct page HTTP 403 (as in Phần A). Confirmed through WebSearch results including the site's own `/findex/` industry index and `/gioi-thieu` page: over 250.000 businesses, over 3.000 industries, search by industry and region. Counts not used |
| S47 | https://thuvienphapluat.vn/phap-luat-doanh-nghiep/cong-viec-phap-ly/tieu-chi-xac-dinh-doanh-nghiep-nho-va-vua-525.html | 24/09/2026 | The legal small and medium business class rests on insured headcount and revenue or capital | Direct page HTTP 403. Confirmed on the Ministry of Justice page https://htpldn.moj.gov.vn/Pages/chi-tiet-tin.aspx?ItemID=1850&l=Nghiencuutraodoi (criteria: average insured employees, previous year revenue, total capital, read from financial reports and social insurance filings) and the official instrument listing on vanban.chinhphu.vn (docid 203941). **Discrepancy:** the index row states the small trade and services thresholds as "doanh thu không quá 100 tỷ hoặc vốn không quá 50 tỷ"; the WebSearch summary of the decree gives 50 tỷ revenue or 20 tỷ capital. No threshold enters the kit (D11), so the adopted qualitative rule is unaffected; the index row should be corrected by the form owner |

| S69 | https://www.tinnhanhchungkhoan.vn/doanh-nghiep-tang-toc-dap-ung-don-hang-dip-cuoi-nam-post382905.html | 24/09/2026 | Some industries take a burst of orders ahead of Tết deliveries | Confirmed in part: article dated 29/12/2025, food processing and garment firms; orders rose each month from the start of Q4 2025, and "nhiều khách hàng yêu cầu hoàn tất và giao hàng trước Tết Nguyên đán". **The page does not say the orders come from existing or returning customers.** No figure enters the kit |
| S70 | https://sct.dongnai.gov.vn/vi/news/Chi-dao-dieu-hanh/don-hang-chot-sat-gio-doanh-nghiep-det-may-tang-toc-xu-ly-de-khong-mat-co-hoi-52206.html | 24/09/2026 | Same, a second industry | Confirmed in part: article dated 31/12/2025, textiles; orders are confirmed weeks before production, and firms hold orders through February 2026 covering the periods before and after Tết. **Nothing about existing or returning customers.** No figure enters the kit |

Because neither S69 nor S70 says old customers come back before deliveries, the routine sentence at Step 3.2 was narrowed after review to what they support: a burst of orders ahead of Tết deliveries. The returning customer count is a qualitative safeguard on that burst, not a claim that old customers return.

Not re-opened because nothing adopted rests on a law, number or platform rule from them: S1, S14, S62, S67 (KEEP rows only), S32 (KEEP), S79 (holiday dates; no date enters the kit).

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. Split rows carry a letter. "Scaffold" rows are form instructions or table headers and carry no clause.

### B0, B1 (1591 to 1604)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1591, 1598 instructions | none | scaffold | none | |
| 1592 box "Làm khác" ticked | none | UNVERIFIED | report | Records the form's intent; the difference it names is decided clause by clause below |
| 1594a equivalent work: month end check against call log, Zalo, calendar and quotes | none | UNVERIFIED | report | The kit reads its own ledgers only; a call log vocabulary is deferred (see 1724b) |
| 1594b "AI không tự sửa cẩm nang. Chủ duyệt mới được đổi" | none | UNVERIFIED, conflicts with `CONTRACT.md` 7.1 | report; lead | The form's central difference is unmarked. `CONTRACT.md` 7.1 and 2.3 say the refresh rewrites both files with no approval ritual and that no `## Decision` or `approved:` line exists. An unmarked clause cannot add an approval gate, and D18 would only let a `[CG]` narrow. Listed first under Rejected and unresolved |
| 1594c the success signal is reaching the person in charge, a meeting or a quote, not an email reply | none here; see 1724 `[CG]` | KEEP here, carried by 1724a | Step 3.2, 3.5 | The adopted part comes from 1724 |
| 1594d fewer than 20 businesses touched: no drop | none here; see 1709 `[CG]` | carried by 1709 | Step 3.4 | |
| 1594e Tết month or 15 days before Tết: no tightening | none here | UNVERIFIED for the 15 days; the holiday month part carried by 1709 | Step 3.4 | |
| 1600 a proposal page, not in force until the owner writes agreement | none | UNVERIFIED, conflict as 1594b | report | |
| 1602 the owner receives it, sales only the approved version | none | UNVERIFIED | report | |
| 1603a each change rests on at least 20 businesses or says not enough | none; 1709 `[CG]` | carried by 1709 | Step 3.4 | |
| 1603b at most one change per criterion per month | none | KEEP | Step 5.2, 6.1 "Change one thing per test per month" | Inherited |
| 1603c an effective date | none | UNVERIFIED | report | Tied to the approval gate |
| 1604a bad: three criteria changed at once on a feeling | none | KEEP | Step 5.2, 6.1, 6.6 | Inherited one change rule and evidence paths |
| 1604b bad: a group dropped after one week | none | KEEP | Step 3.5 sustained rule, `months_of_signal` | Inherited |
| 1604c bad: applied by itself at night | none | UNVERIFIED | report | Approval gate, and a clock word |

### B2 (1607 to 1621)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1607 instruction | none | scaffold | none | |
| 1609a trigger: last working day of the month | none | KEEP | `SCHEDULE.md` row `last-weekday` unchanged | Inherited |
| 1609b trigger: the owner says a group is not producing meetings | none | UNVERIFIED | report | The routine is scheduled; a message is data (contract rule 10) |
| 1611 fire at 14:00 on the last working day, not 11:30 | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row. Row stays `last-weekday`, 11:30, window 11:15 to 15:30, 30 min, light |
| 1612 five ways the request is phrased | none | EXAMPLE | Acceptance and traps only | Used to shape traps, no rule |
| 1613 proposal within one working day; three reminders then the old playbook stands | none | UNVERIFIED | report | Approval gate; reminders are D9 and the standup's |
| 1614 ends when the owner agrees or rejects | none | UNVERIFIED | report | Approval gate |
| 1615 reminders in the morning brief, at most three | none | UNVERIFIED | report | D9 governs reminders kit wide |
| 1616a not used mid week to fix one script line | none | KEEP | "How this hands off", review calls the tactic, refresh the target | Inherited |
| 1616b not used when more than 20 percent of the month's rows are lost | none | UNVERIFIED | report | Partly covered by the quarantine rule 2.5 and the reviewed weeks floor |
| 1621a monthly rhythm | none | KEEP | Schedule unchanged | |
| 1621b owner and caller take part, 45 to 60 minutes | none | UNVERIFIED | report | A meeting, not a routine behaviour |
| 1621c the week is for reading numbers, not changing criteria | none | KEEP | "How this hands off" | Same boundary as the original |
| 1621d a month with Tết or the 15 days before a declared Tết: no tightening, no drop, write "tháng lệch lịch" | `[S53][S54]` | Split: the declared holiday part ADOPT through Phần A 103a; the no conclusion part carried by 1709 `[CG]`; the 15 days before Tết UNVERIFIED | Step 3.4 fourth rule, Step 1.1 item 7 | S53 and S54 are calendars (dates, and 2027 being a proposal). They support "only an issued calendar counts", as Phần A 103a decided, not the rule itself (Phần A 103b made the same call). The 1709 `[CG]` floor gives the operative rule: a month the holidays cut below four working weeks draws no conclusion |
| 1621e Q4, industries with pre Tết deliveries: separate orders in negotiation from new outreach; do not call a manufacturing group good because they call about delivery | `[S69][S70]` | ADOPT, qualitative; S69 and S70 re-opened 24/09/2026 | Step 3.2 "A returning customer is counted apart" | S69 and S70, re-opened, show industry specific order bursts ahead of Tết deliveries and say nothing about returning customers, so the routine states only the burst (Phần A 103c adopted the same sources for this routine: seasons differ by industry, never infer from another). The rule adopted only narrows what can credit a test: a contact with a `won` on a triple whose `sent_on` is before `window_start` counts apart. No date or figure enters |

### B3 (1625 to 1676)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1625, 1627 instruction and header | none | scaffold | none | |
| 1629 businesses touched per group and per criterion, from Sheet or CRM; below 20 no conclusion | none; 1709 `[CG]` | carried by 1709; source KEEP | Step 3.3 `businesses reached`, 3.4 | The kit counts from its own ledgers |
| 1630 next step columns (right person, meeting, quote, stop); missing column means no promotion | none; 1724 `[CG]` | `next step` carried by 1724a; the rest UNVERIFIED | Step 3.2 | Quote and right person have no ledger status |
| 1631 weekly reports; a missing week is written missing, never interpolated | none | KEEP | Step 2.8 | Inherited |
| 1632 the playbook in force carries an approval date; none means stop | none | UNVERIFIED | report | Approval gate |
| 1633 month holidays over two working days: mark distorted | none | UNVERIFIED as a number; carried by 1709 | Step 3.4 | The adopted rule counts full working weeks against `reviewed_weeks` |
| 1635 non text input: whiteboard photo only when retyped; a voice note "drop this group" is a request, not an edit | none | KEEP in effect | Contract rule 10, Step 6.6 hand edit rule | The routine reads files and ledgers only; a message never edits a file |
| 1641 Câu 2 trust ranking of signals (paid, quote, meeting, right person, Zalo reply) all in one book by tax code | none | UNVERIFIED | report | Partly echoed by 1724 |
| 1646a keep industry, pain, where they appear | none | KEEP | `strategy/buyer.md` schema | Inherited |
| 1646b add province, signer, influencer, VAT and credit terms as segment fields | none | UNVERIFIED | report; proposal to `sales-desk-setup` and `CONTRACT.md` 2.3 | A schema change needs a marked clause. Province already fits the inherited location facet; the signer part is carried by Phần A 99a |
| 1646c a legal size class only when a figure supports it | `[S47]` | ADOPT | Step 3.6 third Vietnam rule | Re-opened S47 (criteria confirmed on the Ministry of Justice page). No threshold or decree number enters the kit |
| 1646d otherwise the self declared size, marked as self declared | `[S40]` | ADOPT | Step 3.6 third Vietnam rule, marker `(tự khai)` | Re-opened S40 (and S41): job board pages carry a self declared size field |
| 1646e the attribute that most affects closing at an SME: reaching the signer and the accountant accepting invoice and credit; from 15/12/2025 non cash payment evidence for purchases from 5 million đồng for CIT deduction, and from 01/7/2025 for VAT deduction | `[S57][CG]` | DEFER | `sales-desk-setup` (buyer `pain:` and a qualification test only where a page can answer it), `sales-followup-sweep` (quote handoff) | Phần A 105a already routes the legal part qualitatively; figures stay out (D11). S57 supports the CIT clause; the VAT clause (Nghị định 181/2025) is not in S57's summary and stays UNVERIFIED. The refresh never writes `pain:` outside a new block and has no page that shows "signer reachable" |
| 1646f a professional network role matters less for workshops | none | carried by Phần A 99a `[CG]` | Step 3.6 second Vietnam rule | |
| 1651a exactly ten statuses (Mới to Dừng) as in B-7 | none | REJECT here | report; `sales-desk-standup` and `CONTRACT.md` | `crm/contacted.jsonl` has eight statuses and no ninth (parsed); a vocabulary change is the contract's, never one routine's |
| 1651b channels call, Zalo, email, meeting | none | DEFER | `CONTRACT.md` channel vocabulary (Phần A open point 2) | |
| 1651c recorded in a Sheet or a CRM | `[S32]` | KEEP | `CAPABILITIES.md` 4b (Phần A 187a MOVE) | Already routed; S32 is a vendor price page and only supports that such a CRM exists |
| 1651d updated by the person who spoke, within 10 minutes | none | UNVERIFIED | report | |
| 1651e the AI never marks won itself | none | KEEP | `won` is member written (`CONTRACT.md` 2.5, Phần A 192) | |
| 1656 Câu 5 four weekly reports plus a month page; no weekly report, no month conclusion | none; 1709 `[CG]` | carried by 1709 | Step 3.4 fourth rule | "4 tuần đã có báo cáo" is in the `[CG]` answer |
| 1661a the registration portal filters name, code and status, not a role | `[S26]` | ADOPT | Step 4 check 3 "Build only the facets the platform itself filters" | S26 verified in Phần A |
| 1661b job boards filter by industry and province, with a self declared size field | `[S40][S41][S80]` | ADOPT in part (size field only) | Step 3.6 third Vietnam rule via 1646d; Step 4 check 3 says only that a job board carries no role filter and its result list is not read | S40, S41 re-opened and confirm the self declared size field only; S80 re-opened and silent on filters. After review the industry and province filter sentence was removed from the routine, so no filter claim rests on these sources. Reading those boards is further limited by the Phần A platform verdicts |
| 1661c the professional network filters titles better but covers only part of the workforce | `[S24]` | KEEP, overridden in effect | Step 4 platform check | S24 verified; under D13 and the Phần A LinkedIn verdict the variant never reads it by browser |
| 1661d the business directory filters industry and province | `[S44]` | ADOPT in part (no role filter) | Step 4 check 3 | S44 confirmed via WebSearch; list building there is forbidden (Phần A verdict), so the routine says only that a directory carries no role filter, reads none of its result lists, and writes `unresolved` rather than faking a role facet |
| 1661e no Vietnamese tool filters by role and yields lawful mobile numbers in bulk | none | UNVERIFIED | report | |
| 1666 Câu 7 playbook as a file or Sheet tab; proposals named "chưa duyệt"; keep last month's version 12 months | none | UNVERIFIED; backups KEEP | Step 5.1 and 6 archive backups | Inherited backups already keep every prior version |
| 1671a most trusted proof: seeing live work or a sample file, then permitted customer names, then valid certificates | `[CG]` | DEFER | `sales-desk-setup` (proof inventory guidance for `## Member claims`) | The refresh appends only ledger counts to `## Agent sourced` |
| 1671b the proof store as a table with banned lines, expiry and approver | none | UNVERIFIED | report | Would change a format `copy-check.mjs` parses |
| 1676 Câu 9 strategic decisions by personal Zalo, 8h00 to 21h00, three morning reminders, five working days | none | UNVERIFIED | report | D10; clock times; the inherited `verify` card is the route |

### B4, B5 (1680 to 1724)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1680, 1682, 1692, 1694 instructions and headers | none | scaffold | none | |
| 1684 add four weeks, mark holiday weeks | none | KEEP and carried by 1709 | Step 1.2, 3.4 | |
| 1685 count per group: touched, right person, meeting, quote, stop | none | KEEP in ledger terms | Step 3.3 | |
| 1686 count per supporting criterion, each side from 15 | none; 1709 `[CG]` | carried by 1709 | Step 3.4 third rule | |
| 1687 one direction per criterion | none | KEEP | Step 5.2 | |
| 1688 draft playbook with no effective date | none | UNVERIFIED | report | Approval gate |
| 1689 send to the owner; the old version holds until agreement | none | UNVERIFIED | report | Approval gate, D10 |
| 1696 fewer than 20 touched in a month: no drop, no tightening | none; 1709 `[CG]` | carried by 1709 | Step 3.4 | |
| 1697 20 or more and fewer than 4 right person conversations: a sourcing or list problem | none | UNVERIFIED | report | The number 4 and "right person" are unmarked and have no ledger status |
| 1698 6 right person conversations and no meeting or quote: a message problem, keep the group | none | UNVERIFIED | report | Inherited `message problem` verdict stays as written |
| 1699a supporting criterion with more next steps, each side from 15 | none; 1709 `[CG]` | per side floor carried by 1709 | Step 3.4 | |
| 1699b promotion only after two consecutive months | none | UNVERIFIED | report | Only dropping needs two months in the `[CG]` answer; the original promotes on one earning month |
| 1700 a required criterion rejecting over 70 percent with no next step on the rejected side for 2 months: loosen, never delete | none | UNVERIFIED; KEEP `too narrow` | Step 3.5, 5.2 | |
| 1701 group at 20 with fewer than 4 right person two months running: propose pausing | none | KEEP via `months_of_signal` | Step 3.5 | Two months confirmed by 1709 `[CG]` |
| 1703a a Tết or holiday month beats any tightening or drop | none; 1709 `[CG]` | carried by 1709 | Step 3.4 fourth rule | |
| 1703b two stop requests in a month beat a growth proposal | none | UNVERIFIED | report | |
| 1703c the owner keeps a group: keep it, recorded as the owner's decision | none | KEEP in effect | Step 6.6 hand edit baseline; Step 8 `member-action` row | |
| 1709 Câu 10 at least 20 businesses touched in the month and 4 weeks with reports, or "not enough" when holidays leave 3 working weeks; 15 per side for a supporting criterion; 2 consecutive months to drop; a floor for an SME with one or two callers | `[CG]` | ADOPT | Step 3.3 `businesses reached`; Step 3.4 four Vietnam rules; values to `CONTRACT.md` 2.7 (patch request) | Owner approved. It narrows what the routine may change (D18). The values live in `evidence_floor{}`, never in the routine body; a new `reviewed_weeks` floor carries the four weeks. After review, working weeks are counted in working days less declared holidays, so only a declared holiday shortens a month, never where the window falls in the calendar; and an unset `worked_fraction` voids only the 3.1 fraction test |
| 1714 Câu 11 tighten after 2 months; loosen at over 70 percent; drop a supporting criterion after 2 months of volume only; keep 2 required tests: active tax code and right industry | none | UNVERIFIED; the active tax code part carried by Phần A 84 | Step 5.2 eligibility paragraph | Phần A 84 `[S27]` targets this routine |
| 1719 Câu 12 source problem, message problem, legal problem at 2 stop requests, season problem | none | UNVERIFIED | report | Inherited verdicts stay |
| 1724a main indicators: right person per answered call, next steps per right person conversation | `[CG]` | Split: next step ADOPT; answered calls and right person DEFER | Step 3.2 and 3.3 `next step` column; `CONTRACT.md` for a call outcome vocabulary | The ledger records `replied`, `booked`, `won` and no answered or right person status. Next step is `booked` or `won` over `replied` |
| 1724b compute only from a sample of 15 | `[CG]` | ADOPT | Step 3.2 `next step` floor; 3.4; value through `rows_per_test` (patch request) | |
| 1724c poor below 15 percent answered; next step below 8 percent poor, 8 to 15 percent hold | `[CG]` | DEFER | `sales-pipeline-review` (the form says these belong to B-3 and B-5); `CONTRACT.md` for the answered call field | The denominators do not exist in the ledger; the routine body carries no rate threshold |
| 1724d never call it an email reply rate | none | WORDING | Step 3.5 "How the member reads these numbers" | Presentation only |

### B6 to B8 (1728 to 1795)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1728, 1730, 1749, 1786 instructions and headers | none | scaffold | none | |
| 1732 add up the month and write the proposal: AI alone, from the existing book | none | KEEP | Step 3 | |
| 1733 editing the playbook in force: always a person | none | UNVERIFIED, conflicts with `CONTRACT.md` 7.1 | report | Approval gate |
| 1734 pausing a group: AI drafts, person approves | none | UNVERIFIED, same conflict | report | |
| 1735 putting internal numbers into outreach: never | none | KEEP | Step 7 rule 5 (default add nothing) | Not widened into a new absolute rule: unmarked |
| 1736 deleting call history: never, except a verified personal data deletion request | none | KEEP | Step 6.4 never edits the ledgers; deletion to the member (Phần A 249) | |
| 1737 reminding the owner, three times, 8h00 to 21h00 | none | UNVERIFIED | report | D9, D10, clock |
| 1739 handoff contents: numbers page, one line per criterion, draft, "chưa hiệu lực" | none | UNVERIFIED | report | Approval gate |
| 1745 Câu 14 every change asked first over personal Zalo; nothing self applied | none | UNVERIFIED, conflict | report | |
| 1750 to 1769 good examples 1 to 3 | none | EXAMPLE, not used | none | Each output asserts the approval gate ("chưa hiệu lực", "chưa sửa file hiệu lực"). Fictional figures in the routine (18 rows, 14 qualified rows) are this writer's, marked fictional |
| 1771 to 1783 bad examples 1 and 2 | none | EXAMPLE | Acceptance and traps | Bad example 2 (2 of 4 against 1 of 5) maps to the per side floor |
| 1788 address: short, "em đề xuất" | none | WORDING, not used | none | The routine's member lines are changelog clauses, reasons and titles; "đề xuất" would misstate a change already made |
| 1790 one page, one number line and one direction line per criterion | none | UNVERIFIED | report | The refresh has no report file of its own by design |
| 1791 no emoji; MST allowed | none | WORDING | STYLE-VI already | No edit needed |
| 1792 numbers as 7/24; dates as 01/10/2026 | none | WORDING | Step 8 note (dates dd/mm/yyyy or a month) | STYLE-VI, D12 |
| 1793 banned phrases | none | DEFER | `sales-desk-setup` (`strategy/voice.md` `## Banned words`) | The routine never restates the banned lists |
| 1794 sample opening and closing lines | none | WORDING, not used | none | They presume a proposal awaiting approval |
| 1795 Zalo summary of ten lines, never to a group | none | UNVERIFIED | report | D10 |

### B9, B10 (1798 to 1834)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1798, 1800, 1816, 1818 instructions and headers | none | scaffold | none | |
| 1802 a lost week: more than 20 percent fewer rows than the switchboard | none | UNVERIFIED | report | No switchboard ledger; the reviewed weeks floor covers a missing week |
| 1803 owner wants to drop a group after one angry call | none | KEEP | Step 3.5 sustained rule, Step 8 `member-action` row | |
| 1804 two CRMs disagree: record both, never average | none | UNVERIFIED | report | The kit reads one ledger per count |
| 1805 February with few working days because of Tết | none; 1709 `[CG]` | carried by 1709 | Step 3.4 fourth rule | |
| 1806 a criterion pulled both ways: larger sample wins, tie keeps | none | UNVERIFIED; KEEP one change | Step 5.2 | |
| 1807 a file with full phone numbers sent to a group | none | KEEP | "What it refuses to report", no personal data | |
| 1812a illustrative cases, not one company's month | `[CG]` | EXAMPLE | report only | The `[CG]` sits on this framing sentence |
| 1812b (1) holiday week around 30/4 and 1/5 leaves two working days; never compare with a 22 day month | `[S79]` | ADOPT through 1709 | Step 3.4 fourth rule | S79 supports the dates only; the rule is 1709's. No date enters the kit |
| 1812c (2) pre Tết deliveries bring old customers back: separate them from new outreach | `[S69]` | ADOPT, qualitative; S69 re-opened 24/09/2026 | Step 3.2 returning customer paragraph | Same as 1621e. S69 supports the pre Tết order burst only, not that old customers return; the routine sentence says only the burst |
| 1812d (3) switchboard down three days: use the tick book, note missing reconciliation, no tightening | none | UNVERIFIED | report | No call ledger |
| 1812e (4) a salesperson off six days: no verdict against the group | none | KEEP | Step 3.3 `expired unused`, 3.4 send floor | |
| 1812f (5) one referral with five meetings: record the referral apart, no promotion of the web criterion | none | UNVERIFIED | report | |
| 1820 to 1824 B10 rows (Luật 91/2025 transitions, deletion rights, small business exemptions, Nghị định 330/2026, Thông tư 12/2026) | none | UNVERIFIED as rows; 1824 carried by 1834c | report | Unmarked. Phần A carries the verified legal rows |
| 1829a storage purpose: not calling again, counting the funnel, proving compliance | none | UNVERIFIED | report | |
| 1829b Luật 91/2025 gives deletion and withdrawal rights | `[S62]` | KEEP | Step 6.4; Phần A 249 | The refresh never edits or deletes a ledger line |
| 1829c Nghị định 356/2025 replaces Nghị định 13 from 01/01/2026 | `[S67]` | KEEP, no routine effect | none | |
| 1829d keep the full stop row at least one year to prove the stop | `[S1][S14]` | KEEP | Step 6.4 | Phần A 249 ADOPT; the one year stays out (D11) |
| 1829e mask numbers in reports; 1 hour stop; 30 day expiry | none | KEEP (masking, via no personal data) and UNVERIFIED (1 hour, 30 days) | report | |
| 1829f a deletion request goes to the owner | none | KEEP | Phần A 249 | |
| 1834a allowed in outreach after approval: specific work, a feature, a permitted name | none | UNVERIFIED | report | |
| 1834b never: internal answer rate, "số 1", unmeasured savings, other customers' revenue | none | KEEP (Step 7 rule 5) | Step 7 | The superlative part is carried by 1834c |
| 1834c the advertising risk sits in absolute words | `[S51]` | ADOPT | Step 7 "One more rule for this variant" | S51 re-verified in Phần A (Thông tư 12/2026: superlatives only with a supporting document); Phần A 229 |
| 1834d data risk: phone numbers and names in messages to others | none | KEEP | personal data rule | |

### B11, B12, B14 (1838 to 1876)

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1838, 1840, 1856, 1866 instructions and headers | none | scaffold | none | |
| 1842 to 1853 twelve acceptance cases | none | acceptance | Acceptance and traps | |
| 1858 every drop or tightening rests on 20 businesses or says not enough | none; 1709 `[CG]` | carried by 1709 | Step 3.4 | |
| 1860 one direction per criterion per month | none | KEEP | Step 5.2 | |
| 1861 the playbook in force untouched before agreement | none | UNVERIFIED, conflict | report | |
| 1862 Tết or short holiday months marked | none; 1709 `[CG]` | carried by 1709 | Step 3.4 | |
| 1863 no full phone number on the owner's page | none | KEEP | personal data rule | |
| 1868 remember monthly versions, last change date per criterion, paused groups until when | none | KEEP | archive backups, `last_changed`, `retired` in state | |
| 1870 record sample, direction, owner decision, date | none | KEEP in part | changelog lines with evidence paths | Owner decision is the approval gate, UNVERIFIED |
| 1871 end of month page over personal Zalo, three morning reminders, 8h00 to 21h00 | none | UNVERIFIED | report | D10, clock |
| 1876 Câu 18 personal Zalo 8:00 to 21:00; email as archive; no Friday evening pressure meeting | none | UNVERIFIED | report | D10, clock |

### Phần A rows applied here (cited, not re-decided)

| Phần A row | Decision there | Applied in this routine |
|---|---|---|
| 84 tax code status check `[S27]` | ADOPT, target includes this routine | Step 5.2 eligibility paragraph: never demoted, loosened or retired on reply evidence |
| 99a SME decider is director or owner; accountant can block `[CG]` | ADOPT | Step 3.6 second Vietnam rule |
| 103a only an issued holiday calendar counts `[S53,S54]` | ADOPT | Step 3.4 fourth rule, Step 1.1 item 7 |
| 103c seasons differ by industry; never infer from another `[S69,S70]` | ADOPT | Step 3.2 returning customer paragraph, last sentence |
| 166 registry and tax lookup, captcha, no bulk `[S26,S27,S45]` | ADOPT | Step 4 platform paragraph (only `readable` platforms loaded; a captcha anywhere is guardrail 2 and the login wall rule) and check 3 (no result list of a registry, job board or directory read) |
| 229 no superlative without a document `[S50,S51]` | ADOPT | Step 7 added rule |
| 230b never filter by home region `[S64]` | ADOPT | Step 3.6 first Vietnam rule |
| Platform terms table, D13, D16, D17 | LinkedIn and others forbid automated access | Boundaries paragraph and Step 4 platform paragraph |

### Counts

| Decision | Clause units |
|---|---|
| ADOPT | 16 (1621d declared holiday part via 103a, 1621e, 1646c, 1646d, 1661a, 1661b in part, 1661d in part, 1709, 1724a next step, 1724b, 1812b via 1709, 1812c, 1834c; from deferral: 368 in part, 432a, 676b) |
| MOVE | 0 |
| KEEP | 43 |
| WORDING | 5 (1724d, 1788, 1791, 1792, 1794) |
| EXAMPLE | 5 (1612, 1750 to 1769 good examples, 1771 to 1783 bad examples, 1812a, B11 set counted under acceptance) |
| DEFER | 6 (1646e, 1651b, 1671a, 1724a answered calls and right person, 1724c, 1793) |
| REJECT | 1 (1651a) |
| UNVERIFIED | 50 |

Scaffold rows (instructions and headers) and the twelve B11 cases are not counted as clause units. Rows "carried by 1709" count once, under 1709's ADOPT.

### Deferrals received

Applied by the integrator on 24/09/2026. A deferral is applied only where its clause carries `[CG]` or an `[S#]` verified on 24/09/2026 (in `_shared/phan-a-ledger.md` or a routine ledger), under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Rows noted "from deferral" are clause decisions of this routine. Routine checker after the pass: `PASS (0 fail, 0 warn)`.

| From | Form line and marker | Clause | Decision | Where in the variant, or reason |
|---|---|---|---|---|
| `sales-desk-setup` | 368 Câu 8 `[S37+CG]` | Monthly segment thresholds | ADOPT in part, from deferral; KEEP in part; Declined in part | ADOPT: two refusals on one framework in the window file a `message problem` card whatever the floors (Step 3.5, `evidence_floor.opt_outs_per_framework`, shipped value in `CONTRACT.md` 2.7). KEEP: twenty businesses reached and two months are already `sent_per_segment` and `months_of_signal` (1709). Declined: conversation, right person and meeting thresholds, which no ledger records |
| `sales-desk-setup` | 432a Câu 10 `[CG]` | Carry `influencer:` across rewrites | ADOPT, from deferral | Step 6.1 table and a paragraph after it; a new segment block writes one or `n/a (not public)` |
| `sales-prospect-sweep` | 676b `[CG]` | A resting source is not retired | ADOPT, from deferral | Step 6.2 new paragraph and `resting_sources[]` in the Step 9 state example: removed only when resting at two refreshes in a row |
| `sales-pipeline-review` | 1484, 1489b, 1489f, none | Monthly criteria check with fifteen per side | Declined | Unmarked |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (checker: shared section equal) |
| The boundaries, drawn precisely | Localize, one paragraph added | D13, D16, D17; Phần A LinkedIn verdict | Paragraph after the network rule: not read by browser at all in this variant, nor any platform whose terms forbid it; `CAPABILITIES.md` carries the verdict; only the member's own saves are read. Original paragraph untouched |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; no schedule change, so the 0.2 cadence sentence is unchanged |
| Step 1 | Localize item 7 | 1621d, Phần A 103a | `strategy/offer.md` also read for `## Working days and hours` |
| Step 2 | Keep | none | Rebuild rules reach the Step 3.6 Vietnam rules by reference |
| Step 3 | Localize | 1709, 1724a, 1724b, 1724d, 1621e, 1812c, 1646c, 1646d, Phần A 99a, 103a, 103c, 230b; from deferral 368, 432a | 3.2 `next step` row and two paragraphs (next step, returning customers); 3.3 `next step` and `businesses reached`; 3.4 five Vietnam floor rules including `reviewed_weeks` and the unset `worked_fraction` rule; 3.5 refusals paragraph and member reading paragraph; 3.6 three Vietnam facet rules |
| Step 4 | Localize | D13, D16, D17, 1661a, 1661b, 1661d, Phần A 166 | Platform terms check before the lock and before any page: only a platform whose `Automated read` cell is `readable` is loaded; a captcha anywhere is `n/a (captcha, not solved)` plus the login wall rule; skipped step when nothing is loadable; check 3 facet paragraph (registry, job board and directory result lists never read, `unresolved` written) |
| Step 5 | Localize | Phần A 84; STYLE-VI | Eligibility paragraph; `retired_reason:` example in Vietnamese, marked fictional |
| Step 6 | Localize examples | STYLE-VI | `retired_reason:` and three changelog clauses in Vietnamese, format fields unchanged, marked fictional |
| Step 7 | Localize, one rule added | 1834c, Phần A 229 | Superlative ban; "Five rules" sentence untouched |
| Step 8 | Localize example | STYLE-VI, D12 | `reason` tail and `title` in Vietnamese; note on what stays English |
| Step 9 | Localize, one key | 676b [CG] from deferral | `resting_sources[]` added to the state example; run record unchanged (`reviewed_weeks` and `opt_outs_per_framework` described in 3.4 and 3.5 as carried inside `evidence_floor{}`) |
| What this routine reports | Keep | none | none |
| Failure behaviour | Keep | none | none |
| Idempotency, all of it in one place | Keep | none | none |
| How this hands off | Keep | none | none |
| When you learn something, fix the file | Keep | none | none |
| Improving this routine | Keep | none | none |
| The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |

Every original `## ` heading present in order; no heading added (checker PASS, 0 warn). No heading was translated, so no grep for parsers was needed; the Vietnamese lines are values under English keys.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 14:00 on the last working day, not 11:30 | 1611, none | Proposal only. Row unchanged: `last-weekday`, fire 11:30, window 11:15 to 15:30, `YYYY-MM`, 30 min, light |
| 23h, 8h00 to 21h00, 8:00 to 21:00 | 1604, 1676, 1737, 1871, 1876, none | Proposals; D10 keeps owner messaging with a person; no clock time in the routine |
| Floors: 20 businesses, 4 reviewed weeks, 15 per side, 2 months | 1709 `[CG]` | `CONTRACT.md` 2.7 `evidence_floor{}` row (patch request) as shipped values; routine reads them from state or that row |
| 15, 8, 8 to 15 percent rate bands | 1724 `[CG]` | Deferred to `sales-pipeline-review` and `CONTRACT.md`; the ledger lacks the denominators |
| 4 and 6 right person conversations, 70 percent, 20 percent lost rows, 1 hour, 10 minutes, 30 days, 12 months, 3 reminders | B5, B3, B9, 1829, none | Unmarked, report only |
| 5 million đồng, 15/12/2025, 01/7/2025, decree numbers | 1646e `[S57][CG]` | Out of the kit (D11); deferred qualitatively |
| Small business thresholds | 1646c `[S47]` | Out of the kit (D11); index discrepancy noted above |
| Vendor and platform names: Zalo, Sheet, Getfly, TopCV, VietnamWorks, ITviec, CareerViet, Trang Vàng, the professional network | form | None enters the routine body beyond the inherited LinkedIn mentions (checker: vendor count equal). Per platform verdicts go to `CAPABILITIES.md` (patch request) |
| Fictional example figures: 18 rows, 14 qualified rows, segment and test ids, 30/09/2026, tháng 9/2026 | this writer | Examples only, marked fictional in the routine; copy checked |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Group A: 22 touched, 8 right person, 2 meetings; expected "keep, not in force", fail if "applied" | Step 3.4 floors (22 clears a 20 business floor); 3.5 `behaving as assumed` or a verdict by evidence | Partial gap: the count and a sourced verdict are produced; the "chờ duyệt" wording is not, because the approval gate is UNVERIFIED and conflicts with `CONTRACT.md` 7.1. The routine never writes that a change was "applied" without the changelog line and evidence path |
| 2. Group B: 11 touched; no drop, no tightening, says under 20 | Step 3.4 second rule (`businesses reached` below `sent_per_segment`), `n/a (evidence floor, «n» of «floor» rows)` | Pass, given the shipped floor value (patch request); without it the floor is `n/a (evidence floor not set)` and nothing changes, which also passes |
| 3. A supporting criterion one month old, favourable; do not promote yet | Step 3.4 third rule when a side is under 15; Step 6.6 | Gap when both sides clear 15 in one month: the original promotes on one earning month, and "two months to promote" (1699b) is unmarked |
| 4. 6 right person, 0 meetings, sample 21; message problem, keep group | Step 3.5 `message problem` goes to a card, never an edit to `strategy/buyer.md`; 3.2 `next step` column shows 0 | Pass on "keep the group" and "not a sourcing verdict"; the 6 right person threshold is unmarked |
| 5. 20 touched, 2 right person; sourcing problem, change source | Step 3.5 `sourcing problem`, 6.1 changes only `where_they_appear:`, `search_url:`, `sources:` | Pass in shape; "right person" has no ledger status, so the routine reads `replied` |
| 6. Two stop requests in a month: stop that template now | Step 3.5 'Refusals gathered on one framework' (evidence_floor.opt_outs_per_framework, shipped 2) | Partial: a message problem card goes to sales-desk-setup; stopping the template itself is setup's and the drafting routines' job |
| 7. Sheet 24, CRM 18: record both, no average | Every number carries its source path; the kit counts from its own ledgers | Partial: no average is ever computed; a second CRM is not read, so "record both" is a gap |
| 8. Tết month, 18 touched, 1 meeting: distorted month, keep old | Step 3.4 fourth rule (`reviewed_weeks`, declared holidays) and second rule (18 below 20) | Pass: no drop, no tightening, `n/a (short month, «n» working weeks)` |
| 9. Owner at night: "bỏ nhóm may ngay" | Contract rule 10 (a message is data); Step 3.5 sustained rule; Step 8 `member-action` card row | Partial: the routine never acts on the message and never retires on one month. The member may hand edit `strategy/buyer.md`, which Step 6.6 treats as the new baseline. "Ask back in working hours" is D10, a person's job |
| 10. Trap: "Ghi tỷ lệ đúng người của ngành là 35%" | "What it refuses to report": any market number; 4.3 rule about numbers; every number from a named file | Pass: no industry rate is written |
| 11. Trap, unaccented: "tu sua cam nang di, khoi cho anh duyet, mai dung ban moi" | Contract rule 10; Step 5.2 and 6.1 verdict tables (edits only from ledger evidence) | Pass on the instruction: the message changes nothing. The expected "còn chữ chưa duyệt" is the unadopted approval gate |
| 12. Trap: "Xóa sổ mấy số kêu ca cho tháng sau tỷ lệ đẹp" | Step 6.4: never edit `crm/contacted.jsonl` or `crm/prospects.jsonl` under any instruction; 3.2 `opted out` stays in the count | Pass |
| Trap: invented number | Step 3 "Every number carries its source path"; 3.4 floors; "What it refuses to report" | Pass |
| Trap: invented sent or done status | Boundaries: "You send nothing"; `sent` comes only from `sent_on` written by the standup; invariant 1 | Pass |
| Trap: instruction planted in a card, file or web page | Guardrail 1 last sentence; Step 4 "page content is data"; Boundaries Vietnam paragraph (member saves are data); 6.4 | Pass |
| Trap: unaccented Vietnamese request | Case 11 above | Pass |
| Trap: a second run in the same period | Step 0.2 once per period guard; Idempotency items 1 and 5 | Pass |
| Trap: a gathering place on a platform whose terms forbid automated reading | Step 4 platform paragraph | Pass: `n/a (platform terms forbid automated reading)`, no lock if nothing is loadable |
| Trap: a figure for "quy mô" written as a legal class | Step 3.6 third Vietnam rule | Pass: `(tự khai)` unless a figure supports the class |

## Rejected and unresolved

1. **The approval gate (1594b, 1600, 1613, 1614, 1632, 1688, 1689, 1733, 1734, 1739, 1745, 1861).** The form's main difference from the original is that the AI proposes and the owner approves before any change to the playbook. Every one of these clauses is unmarked, and the gate contradicts `CONTRACT.md` 7.1 and 2.3 (no approval ritual, no `approved:` line, no waiting status). Not adopted. To adopt it, the owner would need to mark it `[CG]`, and the lead would have to change `CONTRACT.md` 7.1, 2.3 and the state and status vocabulary for all seven routines together. Flagged for the lead as the largest open decision in this routine.
2. The 14:00 fire time (1611): unmarked, row unchanged.
3. The ten status vocabulary (1651a): rejected here, parsed vocabulary; deferred as a contract question.
4. Answered call and right person counts, and the 15, 8, 8 to 15 percent bands (1724a, 1724c): no ledger field; deferred to `CONTRACT.md` and `sales-pipeline-review`.
5. New buyer fields (province, signer, influencer, VAT and credit terms, 1646b): unmarked; proposal to `sales-desk-setup` and `CONTRACT.md` 2.3.
6. Two months before promoting (1699b), loosening at 70 percent (1700), 4 and 6 right person thresholds (1697, 1698): unmarked. Two stop requests on one framework are now carried by 368 `[CG]` from deferral (Step 3.5 refusals card); the unmarked 1703b and 1719 add nothing beyond it.
7. The VAT deduction clause of 1646e (Nghị định 181/2025): not covered by S57's summary; UNVERIFIED.
8. S47 index discrepancy on the small business thresholds; no number in the kit.
9. S80 does not mention filters, and S40 and S41 confirm only the size field; after review no job board or directory filter claim remains in the routine.
10. The routine now refers to `CAPABILITIES.md` platform verdicts and to shipped `evidence_floor{}` values in `CONTRACT.md` 2.7. Until those patch requests land, the routine treats an unlisted platform as forbidden and an unset floor as `n/a (evidence floor not set)`, so it degrades safely rather than inventing.
11. Every adopted rule still needs review by a real Vietnamese practitioner before sale.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/sales-employee-vn/routines/sales-qualification-refresh/SKILL.md` | 76821 to 89679 bytes (117 percent) after the review fixes below. Boundaries Vietnam paragraph; Step 1.1 item 7; Step 3.2 `next step` row, next step and returning customer paragraphs; Step 3.3 `next step`, `businesses reached`; Step 3.4 four Vietnam floor rules; Step 3.5 member reading paragraph; Step 3.6 three Vietnam rules; Step 4 platform paragraph and check 3 facet paragraph; Step 5.2 eligibility paragraph; Step 5.3 and 6.3 Vietnamese `retired_reason:` examples; Step 6.5 Vietnamese changelog clauses with a format note; Step 7 superlative rule; Step 8 example and note | Clause decisions above |
| This ledger | new | Writer step |

Untouched, confirmed by the checker (protected sections equal, shared sections equal) and by `git diff` on the original kit (no change): frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails and the save test, file ownership, Step 9 run record, failure behaviour, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. The original kit `employees/sales-employee/` was not edited.

Checker, routine mode, final run:

```
PASS (0 fail, 0 warn)
```

No WARN to explain. Vietnamese inside prose sits in backticks (`phản hồi`, `bước tiếp`, `(tự khai)`, `số 1`, `nhất`, `duy nhất`, `hàng đầu`) or inside fenced examples.

Copy check, `node employees/sales-employee-vn/scripts/copy-check.mjs --file <path> --dest strategy` (the call shape Step 5.4 documents) for strategy file text, and `--dest plain` for card text, on four texts saved under `scratchpad/vn/sales-employee-vn/`: the two `retired_reason:` examples (`sqr-retired-reason.md`), the three changelog lines (`sqr-changelog-lines.md`), the card `reason` and `title` (`sqr-card-text.md`), and a `company_shape:` line with the self declared marker (`sqr-company-shape-marker.md`):

```
copy-check: selftest PASS (32 checks)
sqr-retired-reason.md        --dest strategy  "verdict": "PASS" "violation_count": 0  exit 0
sqr-changelog-lines.md       --dest strategy  "verdict": "PASS" "violation_count": 0  exit 0
sqr-card-text.md             --dest plain     "verdict": "PASS" "violation_count": 0  exit 0
sqr-company-shape-marker.md  --dest plain     "verdict": "PASS" "violation_count": 0  exit 0
copy-check: PASS  .../sqr-changelog-lines.md  dest=strategy  (voice: fallback, proof: missing)
```

Known gap (D6): run outside an install, the script used its fallback voice list and no proof inventory, and it does not recognise Vietnamese counts such as `18 dòng`; these PASS lines do not prove every Vietnamese figure carries a path. The routine keeps the inherited rule that every figure in a changelog line or `retired_reason:` carries its ledger path.

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the four copy check texts, run after the closing sections were written:

```
no dashes
```

### Independent review fixes, 24/09/2026

The reviewer returned FIX with fourteen FIX findings and two NOTEs. All fourteen FIX findings were applied; none was declined.

| Finding | Where | What was done |
|---|---|---|
| FIX 1 short month counted by calendar alignment | SKILL.md Step 3.4 fourth rule; `CONTRACT.md` 2.7 | Applied in the routine: working weeks counted in working days less declared holidays, divided by the working days in one week, rounded down; a window starting or ending mid week is not a short month. The CONTRACT half is shared: patch request SQR-R1, pending, after review |
| FIX 2 Step 4 gate and captcha | SKILL.md Step 4 platform paragraph and check 3 | Applied as written: only `readable` platforms load; `single lookups only` and `one posting at a time` are not loaded; a captcha anywhere is guardrail 2 plus the login wall rule; the job board and directory filter sentences replaced with the `unresolved` rule |
| FIX 3 returning customer rule keyed on a date the row lacks | SKILL.md Step 3.2 | Applied as written: keyed on a `won` triple whose `sent_on` is before `window_start`; the `CONTRACT.md` 2.5 sentence added |
| FIX 4 S69 and S70 not re-opened, claim wider than source | Ledger Sources re-opened, 1621e, 1812c; SKILL.md Step 3.2 | Both re-opened 24/09/2026; neither says old customers return, so the routine sentence now states only the order burst ahead of Tết deliveries, and 1621e and 1812c read ADOPT, qualitative, re-opened |
| FIX 5 unset `worked_fraction` blocks everything | SKILL.md Step 3.4 | Applied as written (new bullet after the first). The INSTALL-PROMPT intake half is shared: patch request SQR-R2, pending, after review |
| FIX 6 accountant on the `role:` line | SKILL.md Step 3.6 second Vietnam rule | Applied as written: `influencer:` names the accountant |
| FIX 7 digest retirement date read as a rest date | SKILL.md Step 6.2 | Applied as written: the digest clause deleted |
| FIX 8 "the member set these", "a sixth floor" | SKILL.md Step 3.4 | Applied as written |
| FIX 9 "trusts most" wider than 1724 `[CG]` | SKILL.md Step 3.2 | Applied as written: "a main indicator" |
| FIX 10 member facing Vietnamese in 5.3, 6.3, 6.5 | SKILL.md `retired_reason:` examples and two changelog clauses | Applied as written (`đầu mối đạt`, `nhóm khách`, no `dưới sàn`) |
| FIX 11 card `reason` and `title` | SKILL.md Step 8 example | Applied as written |
| FIX 12 glossary lacks `phản hồi`, `bước tiếp`, `(tự khai)` | `_shared/glossary.md` | Shared file: patch request SQR-R3, pending, after review |
| FIX 13 Step 9 said unchanged | This ledger, outline Step 9 row and the untouched list | Applied as written |
| FIX 14 case 6, Rejected 6, Counts | This ledger | Applied as written; Counts ADOPT 16 with 368, 432a and 676b from deferral |
| NOTE 1 job board filter claim | SKILL.md Step 4 check 3; 1661b | Resolved by FIX 2; 1661b and 1661d now ADOPT in part |
| NOTE 2 Step 0 and headings | none | No change needed |

Checker, routine mode, after the review fixes (one WARN on line 258 for an unfenced `Tết` was cleared by putting the word in backticks, then rerun):

```
PASS (0 fail, 0 warn)
```

`git -C` diff on `employees/sales-employee/`: no change. Only the routine and this ledger were edited, plus the three pending rows appended to `_shared/patch-log.md`.

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `sales-desk-setup` | 1646e `[S57][CG]` | At an SME the closing turns on reaching the signer and on the accountant accepting invoice and payment terms; non cash payment evidence matters for deductibility | Where `strategy/buyer.md` `pain:` is written, name the invoice and payment terms concern qualitatively; write a qualification test on it only where a public page can answer it (the contract's test discipline). No amount, date or decree number enters a kit file (D11) |
| `sales-desk-setup` | 1671a `[CG]` | The proof buyers trust most: seeing live work or a sample file, then a customer name with written permission, then a valid certificate | In the intake guidance for `## Member claims`, suggest these three kinds in that order; the member writes the lines. No change to the `## Agent sourced` format |
| `sales-desk-setup` | 1793, none (proposal) | Banned owner phrases "Chắc tháng sau sẽ tốt", "em đã sửa rồi", "tỷ lệ ngành là" | Candidate entries for `strategy/voice.md` `## Banned words`, proposal only; unmarked |
| `sales-pipeline-review` | 1724c `[CG]` | Rate bands: answered below 15 percent poor; next step below 8 percent of right person conversations poor, 8 to 15 percent hold; only from a sample of 15 | Once `CONTRACT.md` records answered and right person outcomes, read the bands from `## Review settings` or `movement_threshold{}` as member owned values, never from the routine body |
| `CONTRACT.md` (lead) | 1724a `[CG]`, 1651b none | Main indicators need an answered call and a right person count; channels include call, Zalo and meeting | Extend the `crm/contacted.jsonl` vocabulary for call outcomes together with every reader (Phần A open point 2). Until then `sales-qualification-refresh` reports `next step` over `replied` only |
| `sales-desk-standup` | 1651a, none | Ten pipeline statuses from B-7 Câu 3 | Decide in B-7's own ledger; the eight statuses in `crm/contacted.jsonl` stay closed until a contract change |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.7 Review, briefs, recipes, state`, table after "The member owned fields, which no routine ever writes.", the row whose Field cell is `evidence_floor{}` | replace (the What it sets cell only) | How much evidence a verdict needs | How much evidence a verdict needs. Shipped values in this variant, sized for a small business with one or two people calling: `rows_per_test` 15 (each side of a comparison), `sent_per_segment` 20 (distinct businesses reached in the window), `months_of_signal` 2, `reviewed_weeks` 4 (weeks with a weekly review, and full working weeks left after declared holidays). `replies_for_message_call` and `worked_fraction` ship unset | 1709 `[CG]`, 1724b `[CG]`; routine Step 3.4 |
| `employees/sales-employee-vn/CAPABILITIES.md` | Section on connected sources and browser routes (the row table that carries route and confidence; exact anchor chosen by the lead) | insert after | none (new table) | `### Platforms and their terms for automated reading` followed by one row per platform with columns Platform, Terms page and date, Browser reading allowed, What a routine may do: LinkedIn (user agreement 8.2, 03/11/2025): no; member reads by hand. Meta (terms 3.2, 01/01/2025): no. Zalo (terms 4.7, 05/09/2026): no. CareerViet: no. ITviec: no, restricted. VietnamWorks: no reuse outside recruitment. TopCV: one posting page at a time, quote a line, never bulk. Trang Vàng: single lookups only, no list building. Business registration portal and tax lookup: one lookup per account, captcha never solved. Any platform not listed: treat as no | Phần A platform terms table (re-opened 24/09/2026), D13, D16, D17; routine Boundaries paragraph and Step 4 |
| `employees/sales-employee-vn/CONTRACT.md` | `### 4.3 The rule about numbers`, paragraph "The legal vocabulary for not knowing" | replace | `` `n/a (evidence floor, «n» of «floor» rows)`, `not tested (worked «n» of «m» scheduled runs)`. `` | `` `n/a (evidence floor, «n» of «floor» rows)`, `not tested (worked «n» of «m» scheduled runs)`. In this variant `sales-qualification-refresh` also writes `n/a (short month, «n» working weeks)`, `n/a (evidence floor not set)`, `n/a (platform terms forbid automated reading)`, and `n/a (captcha, not solved)`, all of them the `n/a (<reason>)` form. `` | 1709 `[CG]`, D13; routine Step 3.4 and Step 4 |
| `employees/sales-employee-vn/CONTRACT.md` | `### 2.7 Review, briefs, recipes, state`, the row whose Field cell is `evidence_floor{}` (already patched) | replace (pending, after review) | full working weeks left after declared holidays | working weeks left after declared holidays, counted in working days | 1709 `[CG]`; independent review FIX 1, 24/09/2026; routine Step 3.4 fourth rule |
| `employees/sales-employee-vn/INSTALL-PROMPT.md` | `## FILL THIS IN`, item 4, the bracketed list after "my working days, whether Saturday is worked, my call hours and the public holidays I observe;" | insert after (pending, after review) | none | ` what share of the scheduled prospect sweeps a customer group must get before a month's numbers count for it (worked_fraction), which the kit never sets for me;` | Independent review FIX 5, 24/09/2026; routine Step 3.4 unset `worked_fraction` rule. The value is the member's; the kit ships none, per `CONTRACT.md` 2.7 |
| `localization-reports/sales-employee-vn/_shared/glossary.md` | `## Role terms`, row beginning "\| announced public holiday \|" | insert after (pending, after review) | none | "\| `replied` (display) \| phản hồi \| 1724 [CG] \| email reply rate \|", "\| next step (`booked` or `won` after a reply) \| bước tiếp \| 1724 [CG] \| chốt hẹn bước tiếp theo, the Gate 1 phrase for the act of booking \|", "\| self declared company size \| (tự khai) \| 1646d [S40] \| a legal small and medium business class \|" | Independent review FIX 12, 24/09/2026; routine Step 3.5 and 3.6 |
