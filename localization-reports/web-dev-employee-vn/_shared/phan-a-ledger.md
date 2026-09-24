# web-dev-employee-vn: Phần A ledger (shared by all eight routines)

Status on 24/09/2026: **Phần A classified, sources behind every adopted law, number and platform rule re-opened, platform terms re-checked (D13). No kit file edited by this pass except the scaffold.** Each routine writer reads this file before its own Phần B and takes only the rows that name its routine id.

## Identity

- Form: `Khung-tri-thuc-ban-dia/01_Web-Dev/phieu-da-dien.md` (read only mirror of `~/Downloads/khung-cg/ket-qua/01_Web-Dev/`), Phần A form lines 52 to 254. Source index `01_Web-Dev/literature/nguon.md`, S1 to S64, viewing date 23/09/2026 for every row.
- Extract: `extract_form_section.py --routine web-standup --with-a`, Phần A kept at `scratchpad/vn/web-dev-employee-vn/phan-a-extract.md` (207 lines) with the JSON at `extract.json`. Phần A holds 138 rows, answers and prose lines across A1 to A7.
- **Form author (A1, lines 5 and 56 to 62): an AI sub agent playing a Web Ops practitioner, research draft dated 23/09/2026, asking for review by a real practitioner. No clause has been confirmed by a person who runs websites for Vietnamese businesses.** Line 61 `[CG]`: the tools the AI "operated" were only documents it opened (DirectAdmin/BKNS, Haravan, Sapo, Mắt Bão, iNET, VinaHost, Vietnix, BizFly, PageSpeed Insights, Search Console, SePay, payOS, VNPAY, Zalo OA, KiotViet); every other tool name in the form is assumed scope, not experience. `[CG]` marks are the owner's review decisions, not a domain expert's. Every adopted rule below still needs a human practitioner before sale.
- Original kit: `employees/web-dev-employee`, VERSION 1.8.1, eight routines. Variant: `employees/web-dev-employee-vn`, scaffolded 24/09/2026 by `scaffold_variant.py`, byte for byte copy, VERSION still 1.8.1 (bump once per D14 when the first routine lands).
- Phần B map: B-1 `web-inventory-refresh` (form lines 257 to 525), B-2 `web-site-sweep` (526 to 804), B-3 `web-fix-runner` (805 to 1082), B-4 `web-dependency-run` (1083 to 1364), B-5 `web-platform-guard` (1365 to 1628), B-6 `web-weekly-report` (1629 to 1802, short form), B-7 `web-guardrail-review` (1803 to 1960, short form), B-8 `web-standup` (1961 to 2169, short form). Every original routine has a section; none stays byte identical by default.

## Legend

Decisions follow `references/form-map.md`: ADOPT (sourced or `[CG]` new rule), MOVE (sourced or `[CG]` schedule or capability data), KEEP (inherited rule, or report only), WORDING (presentation only), EXAMPLE (fictional presentation), DEFER (belongs to a named routine's Phần B or a named kit file), REJECT (conflicts with the repo or a D decision), UNVERIFIED (no support; stays a proposal in the report, never in `assumptions[]`). A marker applies to its own clause, so one table row can yield several ledger lines. No legal number, fee or day count enters a kit file (D11); the numbers stay here with their source.

## Sources re-opened on 24/09/2026

| Source | Claim checked | Verdict |
|---|---|---|
| S1 Nghị định 147/2024/NĐ-CP, xaydungchinhsach.chinhphu.vn | A .vn name is revoked when the maintenance fee is not paid in full within 30 days of the due date | Confirmed, quote found. Decree issued 09/11/2024; WebSearch results (tapchicongthuong.vn, thuvienphapluat.vn) give effect 25/12/2024 and list non payment of the fee as a suspension case (khoản 13 Điều 9) |
| S2 Mắt Bão wiki, Vòng đời tên miền .VN | Suspended from day 1 to day 30 after expiry; 30 days to pay; then up to 15 days of revocation processing with no renewal | Confirmed |
| S55 VinaHost, Quy định sử dụng tên miền .VN (updated 15/06/2026) | Suspended during the 30 days from expiry; then revocation processing about 15 days; transfer only at 60 days of age | Confirmed on the raw page text (curl). **Exception found**: protected names and `.gov.vn` keep working 35 days and are suspended from day 36. Also: VinaHost may suspend a name without notice when a browser flags it as dangerous |
| S7 VinaHost, Vòng đời tên miền | International names: a grace period at the normal fee, then a Redemption Period at a much higher fee | Confirmed as a sequence; the readable text gives no day counts, so the kit never computes them |
| S9 vioit.org.vn | Law on E-commerce 122/2025/QH15 in force 01/7/2026 | Confirmed. The page does not detail duties of a seller running its own website |
| S10 LuatVietnam, Nghị định 248/2026/NĐ-CP | Issued 30/6/2026, in force 01/7/2026; a direct sales platform with online ordering must have its notification confirmed before operating; must disclose owner, privacy policy, rights, complaints, prices, payment, delivery, returns | Confirmed. The confirming body is the provincial People's Committee |
| S8 Bộ Công an | Personal Data Protection Law 91/2025/QH15 in force 01/01/2026 | Confirmed. The page has no breach notification detail |
| S60 LuatVietnam, Luật 91/2025/QH15 | Điều 23 khoản 1: a violation that may harm defence, security, order, or a data subject's life, health, honour, dignity or property is notified to the specialised agency within 72 hours of discovery | Confirmed |
| S21 mst.gov.vn, 27/12/2024 | More than 600 Vietnamese business sites injected with gambling links by Q3/2024; entry points: unpatched server OS, outdated libraries or plugins, weak admin passwords, loose server permissions; remediation includes isolation and backups against reinfection | Confirmed |
| S22 Mắt Bão wiki, chèn link cờ bạc | Signs: `.php` in uploads, unknown admin user, hidden footer links | **Not supported.** The page names only files whose creation time differs from their neighbours |
| S52 Search Console Security Issues (hl=vi) | Report covers hacked content, malware, phishing; reconsideration takes days to weeks, longer for link issues; do not resubmit before a decision | Confirmed |
| S26 SePay Developer, xử lý lỗi | Retries only with "Tự động gửi lại khi server trả lỗi" on; 8 sends over about 33 minutes; success is HTTP 200/201 with body `{"success": true}`; timeout over 30 seconds; then marked Failed | Confirmed. Extra: webhooks older than 5 hours are no longer retried |
| S23 VNPAY sandbox FAQ | Reconcile response code and amount, not the thank you page | Partly: the FAQ only says the IPN URL updates the payment result on the merchant's server |
| S24 Viblo @hhoang, 19/03/2024 | Verify signature, amount and response code on the IPN; the return URL has very low reliability | Confirmed |
| S20 Dân trí, 28/08/2026 | 4 of 8 international submarine cables faulty, domestic Internet slowed | Confirmed |
| S33 Tuổi Trẻ, 18/11/2025 | Many Vietnamese sites unreachable from about 18:00 to about 22:40 because of a Cloudflare fault | Confirmed |
| S53 PageSpeed Insights about (hl=vi), updated 25/07/2025 | Lab runs from one of North America, Europe or Asia; Good at p75: LCP up to 2500 ms, INP up to 200 ms, CLS up to 0,1 | Confirmed |
| S34 Báo Công Thương, 27/08/2026 | Peak online shopping season runs from September to December | Confirmed. The article does not name 9.9, 10.10, 11.11, 12.12 |
| S35 xaydungchinhsach.chinhphu.vn, 22/09/2026 | Two proposals for Tết 2027 (7 or 10 days in a row); mùng 1 Tết Đinh Mùi is 06/02/2027; not yet issued | Confirmed |
| S36 Dân trí, 24/02/2025 | Most workers still work 44 to 48 hours a week, a half or full Saturday | Confirmed |
| S58 iNET Helpdesk | A domain is invoiced only to its registered holder, never another entity (cites Thông tư 32/2025/TT-BTC, Nghị định 123/2020/NĐ-CP) | Confirmed, **for iNET only** |
| S50 tinnhiemmang.vn (NCA) | Public lookup of scam flagged sites, trust labels | Confirmed. No terms on automated access found on the page |
| S25 Báo Chính phủ, 24/01/2025 | Ministry of Public Security points citizens to tinnhiemmang.vn or VNeID | Confirmed; the article lists no warning signs |
| S43 Mắt Bão wiki, OTP DNS | OTP required to change name servers or set DNS records, for security | Confirmed |
| S44 Mắt Bão wiki, CCCD | ID Mắt Bão warns accounts with old 9 digit ID or no CCCD image; the holder uploads both sides | Confirmed |
| S45 Mắt Bão wiki, unlock | Transfer needs the EPP code from the holder's registration email, Registry Lock off, valid contact; .vn transfers go through support by phone | Confirmed |
| S54 Mắt Bão price list | .vn price = fee plus maintenance fee plus Mắt Bão account service; VAT 8% on the service part; head office "12A Núi Thành, Phường Tân Bình, TP. Hồ Chí Minh" | Confirmed (the form's "VAT on the service fee" matches the formula shown) |
| S59 VNNIC registrar list | 10 domestic .vn registrars; AZDIGI and Vietnix not listed | Confirmed |
| S63 Vietnix Business Hosting | Backup twice a day, kept 7 days | Confirmed on raw page text (WebFetch hit a redirect loop; curl with cookies opened it). **Conflicts with S57** (6 a day), not re-opened; the kit records the member's own contract figure |
| S49 Bizfly Cloud home | "uptime trên 99,99%" and Cloud Database are the provider's own claims | Confirmed |
| S30 Zalo OA message policy (from 20/06/2023, updated 15/01/2024) | OA consultation messages: 8 free within 48 hours of user interaction, then charged; transaction messages charged; OA is a customer channel | Confirmed |
| S31 Zalo Platform docs | Zalo Bot in group chats is in internal testing | Confirmed |
| S46 Haravan học viện | Haravan is a managed platform that lets merchants adjust site code and offers an API | Partly: no explicit statement that source or PHP is withheld |
| S47 Sapo blog | Sapo Web lets merchants edit HTML/CSS of the theme; orders from channels sync to Sapo | Confirmed; no explicit statement about source handover |

Not re-opened because no ADOPT rests on them: S18, S19, S27, S28, S29, S32, S51, S57 (superseded by S63), S3 to S6, S11 to S17, S37 to S42, S48, S56, S61, S62, S64. Routine writers re-open any of these before adopting a clause that rests on it.

## Platform terms (D13), re-opened 24/09/2026

| Platform | Does the kit read it | Terms checked | Verdict |
|---|---|---|---|
| Shopee, TikTok Shop, Lazada, Meta | No. The original kit reads repositories, hosts, registrars, databases and logs; the form adds none of these platforms | Not re-opened | Not applicable. A routine writer who adds any of them must re-open the terms first |
| Zalo (personal and groups) | Delivery only, by a person | zalo.vn/dieukhoan, Thỏa thuận sử dụng dịch vụ Zalo, in force 05/09/2026, Điều 4.7 bans logging in or using the service with third party software or a system Zalo has not developed or approved | **Not allowed to automate.** No route reads or sends through Zalo; a person sends the drafted text (D10) |
| Zalo Official Account | Never | S30 policy, S31 docs | Customer channel with per message fees; never used for staff or the member |
| Haravan | Possibly, the member's own admin, read only | haravan.com/pages/quy-dinh: 3.6 no exploiting the Service without written permission; 11.1(h) bans spider, crawl or scrape; 2.3 keep account credentials secret | **Crawling not allowed.** Read only the member's own admin in the member's signed in session, page by page; declared storefront paths by `http.probe` only |
| Sapo | Possibly, the member's own admin, read only | help.sapo.vn/dieu-khoan-va-dieu-kien-su-dung, section 4: no copying, reverse analysis or interfering with Sapo's technical system; no automated access clause; no date on page | **Own account read only**, no scraping, no API unless the member installed an app |
| tinnhiemmang.vn | Public lookup, one query per domain | Home page, no terms on automated access found | Allowed as a manual pace lookup of the member's own domains; any complaint to remove a label is held for a person |

## Clause decisions

| # | Form line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 1 | 5, 56, 58 to 60, 62 A1: the filler is an AI sub agent, research draft 23/09/2026, no years, no contact | none | KEEP | every `-vn` report, Identity | Form map A1: never present an AI draft as a human expert |
| 2 | 61 A1: tools only read as documents; other names assumed | `[CG]` | KEEP | report; `CAPABILITIES.md` new routes stay `unknown` (D5) | A tool named in the form is not proof a route exists |
| 3 | 69 A2: inventory monthly first working day; recheck on provider or holder change and before sale and Tết; durations | durations `[CG]` | DEFER | `web-inventory-refresh` (B-1 B2) | Cadence already `first-weekday`; event triggers unmarked; durations are human time, not the row `budget` |
| 4 | 70 A2: UptimeRobot free about 5 minutes, Uptime Kuma 1 minute | `[S28]` | MOVE | `CAPABILITIES.md` uptime and `http.probe` notes | The member's external monitor cadence, not a routine fire time |
| 5 | 70 A2: log pass once a day at 08:00; weekend uptime; AI drafts before telling a customer | none, durations `[CG]` | DEFER | `web-site-sweep` (B-2 B2) | An unmarked clock time never moves a row |
| 6 | 71 A2: at most 3 fix tickets a day per person; no fix in a freeze; never to production | `[CG]` | DEFER | `web-fix-runner` (B-3) | Capacity and freeze belong to B-3; row 20 carries the freeze |
| 7 | 72 A2: Wednesday 14:00 to 16:00 outside freeze; exploited vulnerability within 24 hours even in a content freeze | `[CG]` on the last clause | DEFER | `web-dependency-run` (B-4) | The Wednesday row already fires inside a window covering 14:00; the 24 hour clause is B-4's |
| 8 | 73 A2: Monday 09:30; extra Friday 16:00 within 45 days of a .vn expiry and in September to December | `[S34][S55]` | UNVERIFIED | report; `web-platform-guard` writer | S34 supports the season, S55 the .vn lifecycle; neither supports a Friday run, a clock time or 45 days |
| 9 | 74 A2: weekly report numbers closed Friday 16:00, sent before 18:00; Saturday morning kept in its own week | `[S36]` | DEFER | `web-weekly-report` (B-6) | S36 supports Saturday work only |
| 10 | 75 A2: last working day of the month; after Tết moved to the first working week | `[S35]` | DEFER | `web-guardrail-review` (B-7) | S35 supports only that the 2027 schedule is a proposal |
| 11 | 76 A2: 08:00 on store working days incl. Saturday if open; no normal brief on declared Tết days; at most 30 lines; AI never sends | `[S36]`, `[CG]` | DEFER | `web-standup` (B-8) | The 30 line cap is already `CONTRACT.md` 2.7; never sending is Guardrail 1 and D10 |
| 12 | 82 A2 table 2: reconcile the .vn holder; unpaid fee means suspension, then revocation after 30 days | `[S1][S55]` | ADOPT | `web-inventory-refresh` (holder record), `web-platform-guard` (expiry and holder drift) | Re-opened, confirmed. Qualitative only: a lapsed .vn name stops working; no day count in the kit |
| 13 | 82, 83, 84 A2 table 2: monthly, quarterly and weekly cadences for the new jobs | none | UNVERIFIED | report | No marker; existing rows carry the work |
| 14 | 83 A2 table 2: check a selling website discloses owner, prices, returns, privacy; record notification status | `[S9][S10]` | ADOPT | `web-inventory-refresh` (read only disclosure check on declared paths), `INSTALL-PROMPT.md` (notification status is member supplied) | S10 confirmed ND 248/2026 disclosure list and prior notification confirmation. The routine never files a notification (row 60) |
| 15 | 84 A2 table 2: scan for gambling link injection, read only; a person removes malware | `[S21][S52]` | ADOPT | `web-site-sweep` (Search Console security issue read), `web-platform-guard` | S21, S52 confirmed. Malware removal is a `member-action` card |
| 16 | 84 A2 table 2 and 104 A3: signs are `.php` in uploads, unknown admin, hidden footer links | `[S22]` | UNVERIFIED | report | S22 re-opened does not list these signs |
| 17 | 85 A2 table 2: reconcile payment webhooks (VNPAY, SePay, payOS) and mismatched orders | `[S26]` | ADOPT | `web-site-sweep` (webhook path health), `CAPABILITIES.md` | S26 confirmed |
| 18 | 85 A2 table 2: a person approves before refunding or cancelling | none | KEEP | Guardrail 1 | Already held |
| 19 | 86 A2 table 2: freeze before 9.9, 10.10, 11.11, 12.12 and Tết; sale day D from 00:00 seven days before D to 23:59 the day after D; Tết from seven days before the first announced day off to the end of the first working day after | `[CG]` | ADOPT | `web-fix-runner`, `web-dependency-run` (no change marked ready inside a freeze; card parked with the reason), `web-standup` (brief line), `web-guardrail-review` (Step 2 freeze thin row), `web-inventory-refresh` and `INSTALL-PROMPT.md` (sale dates and the business's announced Tết days in the member section of `policy/budgets.md` `## Working days and hours`) | Owner approved. Dates come from the member's file, never from a SKILL.md |
| 20 | 86 A2 table 2: a theme edit during a sale breaks the cart at peak | `[S34]` | ADOPT | same as row 19 | S34 confirmed the September to December season |
| 21 | 87 A2 table 2: invoice only in the holder's name | `[S58]` | ADOPT | `web-inventory-refresh` (holder and payer recorded separately), `web-platform-guard` (a holder and payer mismatch is a Waiting line) | Confirmed for iNET only; stated as "may not be invoiceable at some registrars", never as a universal rule |
| 22 | 88 A2 table 2: look up tinnhiemmang.vn and Search Console weekly and when a browser blocks the site; a person decides a complaint | `[S25][S50]` | ADOPT | `web-platform-guard` (read only lookup, Monday row unchanged), `CAPABILITIES.md` | S25, S50 confirmed; complaint is a held submit |
| 23 | 89 A2 table 2: panel access handover and revocation when a freelancer, agency or employee leaves; never AI | `[S43][S45]` | ADOPT | `web-inventory-refresh` (who holds each login, as a role; a departed holder is a Waiting line) | S43, S45 confirmed; changing access stays Guardrail 1 and 2 |
| 24 | 93 A2 proposal 1: read panels and WHOIS, fill the inventory, never press save | none | KEEP | `web-inventory-refresh` | Same as the original |
| 25 | 93 A2 proposal 2: uptime and SSL, draft the warning, never renew | none | KEEP | `web-site-sweep`, `web-platform-guard` | Same as the original |
| 26 | 93 A2 proposal 3: brief from the ledgers, at most 30 lines; a person approves and sends each time; never renew, change DNS, update a plugin on production, refund | none | KEEP | `web-standup`, Guardrail 1 | Same as the original and D10 |
| 27 | 101 A3: .vn is suspended from the expiry day with no redemption; 30 days to pay, then revoked | `[S1][S7][S55]` | ADOPT | `web-platform-guard`, `web-standup` | A lapsed .vn name is down, never "in grace". S55 exception: protected names and `.gov.vn` keep working 35 days |
| 28 | 101 A3: warn a .vn from 45 days | none | UNVERIFIED | report | The kit's `## Expiry warning window` in `policy/budgets.md` stays the one threshold; the member may set 45 |
| 29 | 101 A3: for .com say whether renewal is still at the normal fee or already redemption | `[S7]` | ADOPT | `web-platform-guard` | Read the state from the registrar screen; never compute the days |
| 30 | 101 A3: never invent the days left when the panel does not show them | none | KEEP | the rule about numbers | Inherited |
| 31 | 102 A3: record four roles per domain and host (legal holder, password holder, payer, spend approver); mismatch is "chưa bàn giao"; never transfer | `[S44][S45][S58]` | ADOPT | `web-inventory-refresh`, `web-platform-guard`; new fields need a `CONTRACT.md` 2.3 owner | Confirmed. Store roles, never a CCCD number or image |
| 32 | 103 A3: when several sites slow together, check carrier and CDN status before blaming code; PageSpeed lab runs abroad | `[S20][S33][S53]` | ADOPT | `web-site-sweep` (shared upstream check before a code fingerprint), `web-weekly-report` (lab figures named as lab) | Confirmed |
| 33 | 104 A3: injection is common; lock accounts, back up, scan other sites on the same host; never install nulled code | `[S21]` | ADOPT | `web-fix-runner`, `web-dependency-run` (malware cleanup is never a drafted fix, it is a `member-action` card) | Confirmed; the 600 figure stays in the report |
| 34 | 105 A3: many businesses work Saturday | `[S36]` | DEFER | `web-standup`, `web-site-sweep`, `web-weekly-report` B2; `INSTALL-PROMPT.md` intake | Confirmed; whether `days` follows `## Working days and hours` is each B2's call |
| 35 | 105 A3: freeze windows; P0 or an exploited component patched after a backup by an authorised person | `[CG]` | ADOPT | as row 19; the exception is a `member-action` only | Owner approved |
| 36 | 105 A3: never write Tết dates the business has not announced; 2027 dates are proposals | `[S35]` | ADOPT | `web-standup`, `web-weekly-report`, `web-guardrail-review` | Confirmed |
| 37 | 106 A3: brief and P1 alerts in the internal Zalo group, full diacritics, under 30 lines | `[CG]` | WORDING | `web-standup` template | Presentation; a person sends (D10) |
| 38 | 106 A3 and 225 A5.10: P0 ladder, reminder at 15 minutes, call at 30, 08:00 to 21:30, at most three Zalo messages | `[CG]` on 106 only | DEFER | `INSTALL-PROMPT.md` and `README.md` guidance for the person on duty | `notify.push` keeps its four cases and never goes to Zalo (D10); no clock time enters a SKILL.md |
| 39 | 107 A3: SePay retries only when enabled; success needs 200/201 and `success: true` | `[S26]` | ADOPT | `web-site-sweep` (never count on a retry unless the member's record says auto resend is on) | Confirmed; numbers stay out |
| 40 | 107 A3: VNPAY: reconcile code and amount, not the thank you page | `[S23][S24]` | ADOPT | `web-fix-runner` (a return URL is never proof of payment), `web-site-sweep` | S24 confirmed |
| 41 | 107 A3: daily check of the webhook URL and its certificate | none | KEEP | `web-site-sweep` declared paths and certificates | The member declares the webhook path (row 67) |
| 42 | 107 A3: one test transaction a day | none | REJECT | report | A payment is a spend and an outbound action (Guardrail 1) |
| 43 | 107 A3: one success log line within 24 hours | none | UNVERIFIED | report | Unmarked threshold |
| 44 | 107 A3: never mark an order paid from a customer's screenshot | none here | KEEP | carried by row 57 | |
| 45 | 108 A3: addresses changed after the 2025 reorganisation; never edit the holder record without the representative's scan | `[S44][S54]` | ADOPT | `web-inventory-refresh` (an old district name on the registrar record is a question for the member, never an edit) | Confirmed |
| 46 | 115 to 141 A4: unmarked terms | none | WORDING | `_shared/glossary.md` | Vocabulary only |
| 47 | 116, 123 to 125, 127, 128, 130, 131, 136, 137, 139 A4: sourced terms and their example sentences | `[S#]` | WORDING | `_shared/glossary.md` | Day counts, SLA and backup figures in the example sentences stay out of kit text |
| 48 | 134 A4: Vietnix keeps a daily backup | `[S57]` | UNVERIFIED | report | S57 and S63 disagree; the kit records the member's contract figure |
| 49 | 140 A4: đóng băng | `[CG]` | WORDING | glossary | The rule itself is row 19 |
| 50 | 141 A4: P0 and P1 | `[CG]` | WORDING | glossary; brief display only | No severity field exists in `board.json`; push cases unchanged |
| 51 | 148 A5: many WordPress sites have no Git; Haravan, Sapo theme code only; never self merge | `[S46][S47]`, `[CG]` | MOVE | `CAPABILITIES.md` (repo route optional), `web-inventory-refresh`, `web-fix-runner` (no repo means a written up proposal) | Never merging is Guardrail 1 |
| 52 | 149, 150, 156, 158, 159, 163 A5: Vercel, Netlify, Supabase, PlanetScale, Sentry, npm mapped to Vietnamese panels, phpMyAdmin, logs, Wordfence, wp-admin updates | `[CG]` | MOVE | `CAPABILITIES.md`, read only, status `unknown` | Owner approved mapping; no write query ever |
| 53 | 151, 157 A5: Railway, Neon mapped to Vietnamese VPS and cloud databases | `[S49]` | MOVE | `CAPABILITIES.md` | Confirmed |
| 54 | 152 A5: Render not used | none | UNVERIFIED | report | Original route text kept |
| 55 | 153, 160, 161, 162, 164, 168, 169, 171, 173, 174, 175 A5: Cloudflare, PostHog, Better Stack, http.probe, OSV, Haravan, Sapo, payment webhooks, Search Console, KiotViet, tinnhiemmang.vn | `[S#]`, some `[CG]` | MOVE | `CAPABILITIES.md` | Held actions listed there are already Guardrail 1 |
| 56 | 154, 165 A5 and 185 A5.2: 10 domestic registrars; AZDIGI, Vietnix resell; record "nơi mua" and "nhà đăng ký"; Mắt Bão needs OTP for DNS | `[S43][S45][S54][S59]`, `[CG]` | ADOPT | `web-inventory-refresh` (two fields per domain; `CONTRACT.md` 2.3 names the owner), `CAPABILITIES.md` | Confirmed |
| 57 | 236 A6: never mark paid, refund or change an amount when the webhook does not match | `[S24][S26]` | ADOPT | variant `CONTRACT.md` 7.1 list, `web-fix-runner`, `web-site-sweep` | Confirmed |
| 58 | 155, 166, 167 A5: foreign registrar kept; Vietnamese hosts; wp-admin actions held | none | KEEP | Guardrail 1 (Restore, Transfer, Renew barred by name) | Inherited |
| 59 | 170 A5: LadiPage has no repo; SSL free on some plans | `[CG]`, "[cần xác minh]" | MOVE and UNVERIFIED | `CAPABILITIES.md`; SSL claim stays in report | The form flags its own claim |
| 60 | 239 A6: never file with a state portal on the business's behalf | none | KEEP | Guardrail 1 (Submit barred) | Inherited |
| 61 | 172 A5, 210 A5.7: OA is a customer channel with fees; Zalo Bot is internal beta; brief by internal group | `[S30][S31]` | ADOPT | `CAPABILITIES.md`, variant `CONTRACT.md` 3.2a: no route sends through Zalo, Zalo OA or a Zalo bot | Confirmed, plus Zalo terms 4.7 (D13 table) |
| 62 | 180 A5.1: five infrastructure shapes; order is not market share | `[S18][S19][S28][S33][S46][S47][S49]`, `[CG]` | MOVE | `CAPABILITIES.md`, `web-inventory-refresh` project kind | Classification, not a rule |
| 63 | 185 A5.2: when overview and detail screens disagree, trust the registrar's detail screen; WHOIS is never the only source | `[CG]` | ADOPT | `web-platform-guard`, `web-inventory-refresh` | Owner approved |
| 64 | 190 A5.3: no production query "to look"; backups sit outside phpMyAdmin; record the provider's retention | `[S49][S63]` | ADOPT | `web-inventory-refresh` (retention from the member's contract, else "chưa xác minh") | S63 confirmed; no query is inherited |
| 65 | 195 A5.4: small budget stack | `[S28][S29][S32][S53]`, `[CG]` | MOVE | `CAPABILITIES.md` | Monitor counts and cycles stay out |
| 66 | 200 A5.5: four source shapes; SaaS hands over accounts, not code | `[S46][S47]` | ADOPT | `web-inventory-refresh`, `web-fix-runner`, `CAPABILITIES.md` | S46, S47 partly confirmed (theme code editing only on a managed platform); with row 51 `[CG]` |
| 67 | 200 A5.5 and 251 A7: a Git merge is not proof the site changed; the webhook path is a required path | none | DEFER | `web-standup` (B-8 B0 evidence), `web-site-sweep` | B-8 B0 carries its own markers |
| 68 | 205 A5.6: never trust a patch file sent through chat; CVE with id over an article | `[S21][S52]` | ADOPT | `web-dependency-run`, `web-fix-runner` | Advisory ids already inherited |
| 69 | 210 A5.7: plain Vietnamese with diacritics, under 30 lines; email for the weekly file | `[S30][S31]` on the OA clause | WORDING | `web-standup`, `web-weekly-report` templates | Presentation |
| 70 | 210 A5.7: send at 08:00 | none | UNVERIFIED | report | Unmarked clock time |
| 71 | 215 A5.8: tracking in Zalo, Google Sheet, Drive; a renewal line carries task, deadline, listed amount, who may press, panel link | none | UNVERIFIED | report; proposal for the `web-platform-guard` writer | Unmarked |
| 72 | 220 A5.9: order hubs; read order status only when granted; never change a delivered or paid status | `[S46][S47][S51][S54]`, `[CG]` | MOVE | `CAPABILITIES.md` | Status changes are Guardrail 1 |
| 73 | 225 A5.10: OA free messages within 48 hours, then charged | `[S30]` | REJECT | report only | Fee numbers never enter the kit (D11); the kit never uses OA |
| 74 | 233 A6: never renew, upgrade, enable auto pay or change the holder without a written order | `[S54][S58]` | KEEP | Guardrail 1 | Already barred |
| 75 | 234 A6: never change name servers, delete DNS records or turn off the Cloudflare proxy | `[S43]` | KEEP | Guardrail 1 | Already barred |
| 76 | 235 A6: never install nulled themes, plugins or a patch of unknown origin sent through Zalo | `[CG]`, `[S21]` | ADOPT | variant `CONTRACT.md` (Gate 8 candidate), `web-dependency-run`, `web-fix-runner` | Confirmed |
| 77 | 235 A6: may become a personal data incident | `[S8]` | ADOPT | `web-site-sweep`, `web-fix-runner` (flag possible exposure as a legal question for the member) | S8 confirmed; no legal duty stated by the routine |
| 78 | 237 A6: never put passwords, API keys, dumps into chat, tickets or templates | `[S60]` | KEEP | Guardrail 2 | Inherited |
| 79 | 237 A6: logs holding customer phone numbers never copied; a breach may need a report within a legal deadline | `[S60]` | ADOPT | `web-site-sweep` (personal data in a log line is withheld like a secret), `web-standup` (Waiting line) | Confirmed; the 72 hours stay out of the kit |
| 80 | 238 A6: never promise "never down" or present a provider SLA as the business's own | `[S20][S33][S49]` | ADOPT | `web-weekly-report`, `web-standup` | Confirmed |
| 81 | 246 A7: legal entity, tax code, representative, current address | none | UNVERIFIED | report | Row 31 reads the holder from the registrar screen instead |
| 82 | 247, 248, 251 A7: domain list, hosting, production and staging URLs, required paths | none | KEEP | `INSTALL-PROMPT.md`, `inventory/projects.json` | Inherited fields |
| 83 | 249 A7: spend decider and ceiling, zero for AI | none | KEEP | Guardrail 1 | The kit never spends |
| 84 | 250 A7: working hours, Saturday opening, no call days, declared sale campaigns | none | ADOPT | `INSTALL-PROMPT.md`, `policy/budgets.md` `## Working days and hours` | Carrier for row 19 `[CG]` |
| 85 | 252 A7: reporting channel; first two weeks the brief is reviewed | none | UNVERIFIED | report | Unmarked rule |
| 86 | 253 A7: privacy policy page and incident contact | `[S8]` | ADOPT | `INSTALL-PROMPT.md`, `web-inventory-refresh` (page as a declared path) | S8 confirmed |
| 87 | 254 A7: repository optional; "không có Git"; never create one | none | ADOPT | `INSTALL-PROMPT.md`, `web-inventory-refresh` | Carried by rows 51 `[CG]` and 66 |

## Counts

87 ledger lines: ADOPT 33, MOVE 9 (row 59 counted here and under UNVERIFIED), KEEP 16, WORDING 6, DEFER 10, REJECT 2, UNVERIFIED 12, EXAMPLE 0. Sources re-opened: 34 form sources plus 3 platform terms pages (Zalo, Haravan, Sapo).

## Open for the routine writers and the lead

- New inventory fields (four roles, "nơi mua", provider backup retention, project kind, no Git) each need a writer and reader in the variant `CONTRACT.md` 2.3 before any routine writes them.
- Freeze calendar and Saturday opening live in the member section of `policy/budgets.md` `## Working days and hours`; `web-inventory-refresh` carries it across verbatim and never invents dates.
- Candidates for one shared, dated Vietnam rules file (Gate 8): .vn lapse sequence (S1, S2, S55), ND 248/2026 disclosure list (S10), Luật 91/2025 Điều 23 (S60), SePay retry facts (S26).
- Brief footer: the original ends with an English promotional line; B-8 B0 asks to drop it. Decide in B-8.
