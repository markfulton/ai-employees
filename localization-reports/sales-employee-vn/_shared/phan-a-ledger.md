# sales-employee-vn: Phần A ledger (shared by all seven routines)

Status on 24/09/2026: **Phần A classified, sources behind every adopted law, number or platform rule re-opened, platform terms re-opened for D13. No kit file edited yet.** Routine writers read this file before their own B section; a routine ledger cites the row number here instead of re-deciding a Phần A clause.

## Identity

- Form: `Khung-tri-thuc-ban-dia/07_Sales/phieu-da-dien.md`, Phần A at form lines 51 to 250. Phần B sections: B-1 `sales-desk-setup` 253 to 534, B-2 `sales-prospect-sweep` 535 to 830, B-3 `sales-first-touch-drafts` 831 to 1121, B-4 `sales-followup-sweep` 1122 to 1409, B-5 `sales-pipeline-review` 1410 to 1583, B-6 `sales-qualification-refresh` 1584 to 1877, B-7 `sales-desk-standup` 1878 to 2044. Phần C from 2045.
- Extract: `extract_form_section.py --routine sales-desk-setup --with-a`, Phần A part kept at `scratchpad/vn/sales-employee-vn/phan-a.md`. 135 Phần A rows: 34 with `[S#]` only, 6 with `[CG]` only, 3 with both, 92 unmarked (26 of those are form scaffolding: table headers and question text).
- **A1, form author: an AI sub agent playing a Vietnamese B2B SDR, research draft dated 23/09/2026, asking for review by a real practitioner (form lines 55 to 61).** It states it never ran a real account and has no years of practice. No clause here has been confirmed by a person working in Vietnamese B2B sales. `[CG]` marks are the owner's review decisions, not a domain expert's.
- Source index: `07_Sales/literature/nguon.md`, viewing date 23/09/2026 on every row. Re-opened on 24/09/2026 as listed below.
- Original kit: `employees/sales-employee`, VERSION 1.8.0. Variant: `employees/sales-employee-vn`, scaffolded 24/09/2026, byte identical to the original, VERSION 1.8.0 (D14: bump one minor before the first routine lands).
- Every routine has a Phần B section, so no routine stays byte identical by default.

## Sources re-opened on 24/09/2026

Every source behind an ADOPT that states a law, a number or a platform rule. Numbers confirmed here still stay out of kit files (D11); they are listed so a writer knows the qualitative rule rests on something real.

| S# | URL | What it supports | Verdict |
|---|---|---|---|
| S1 | congbao.chinhphu.vn/van-ban/nghi-dinh-so-330-2026-nd-cp-470339.htm | Nghị định 330/2026, penalties for cybersecurity and personal data, Articles 37, 38, 49, 50 | Page confirms the instrument, signed and effective 19/08/2026. Article text sits in an attached .docx that was not re-read; Articles 37 and 38 content is carried by S10, S61 and S14 below |
| S3 | congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm | Luật 91/2025, personal data protection | Page confirms the law, issued 26/06/2025, effective 01/01/2026. Clause text via S63 and a WebSearch result for S64 |
| S7 | vanban.chinhphu.vn/default.aspx?pageid=27160&docid=200773 | Nghị định 91/2020, anti spam | Page confirms issue 14/08/2020, effective 01/10/2020. Text via S8 and S59 |
| S8 | luatvietnam.vn (Nghị định 91/2020 summary) | Prior consent, call and message hours, one call and three messages per number per 24 hours, DNC register, stop on refusal | Confirmed. The page does not show current validity status (behind a login) |
| S10 | dantri.com.vn, 25/08/2026 | Advertising calls only in the legal call window, frequency cap; organisation fines; carriers must block calls with no Voice Brandname | Confirmed |
| S14 | luatnguyen.vn (law firm) | From 19/08/2026 advertising calls need explicit consent; consent and refusal records kept at least one year; Article 37 | Confirmed |
| S19 | luatvietnam.vn | Article 288 Criminal Code covers buying and selling private information online | Confirmed |
| S21 | help.zalo.me (official) | Personal account contact cap; friend request feature locked after too many requests | Confirmed |
| S22 | oa.zalo.me (official) | OA consultation messages only to users who interacted; windows differ between OA Manager and OpenAPI | Confirmed |
| S24 | tuoitre.vn, 20/03/2024 | LinkedIn membership in Vietnam skews to engineering, sales, business development, operations | Confirmed. The article is from 2024 |
| S26 | dangkykinhdoanh.gov.vn | Free public lookup: name, enterprise code, head office address, legal representative, legal status | Confirmed |
| S27 | vnexpress.net, 06/09/2026 | Tax authority lookup of statuses 03, 05, 06, with captcha | Confirmed |
| S45 | techcombank.com (bank blog) | Tax code checked at tracuunnt.gdt.gov.vn and dangkykinhdoanh.gov.vn; captcha required | Confirmed |
| S46 | vcci.com.vn | VCCI membership is not a downloadable phone directory | Confirmed; no member directory with phone numbers on the page |
| S49 | vnexpress.net | From 01/07/2025 two level local government, district level removed, 34 provinces | Confirmed (S48 Wikipedia not re-opened; S49 carries it) |
| S50 | thuvienphapluat.vn | Luật 75/2025 advertising amendments on superlatives | Not re-opened: HTTP 403. S51 carries the operative rule |
| S51 | tuoitre.vn | Thông tư 12/2026/TT-BVHTTDL, effective 05/07/2026: "số 1", "nhất" only with a state confirmation, a lawful market survey, or an award certificate | Confirmed |
| S53 | tapchicongthuong.vn | 2026 Tết and National Day holiday dates | Confirmed (Tết 14/02 to 22/02/2026, National Day five days around 02/09/2026) |
| S54 | xaydungchinhsach.chinhphu.vn, 22/09/2026 | Tết 2027 is a proposal with two options, not an issued calendar | Confirmed |
| S55 | thuvienphapluat.vn | VAT 8% until 31/12/2026 and excluded groups | Direct page not opened; the same facts confirmed via WebSearch results (MISA, thuvienphapluat) and S86 metadata |
| S56 | intertax.vn (tax firm) | Nghị định 70/2025 amends Nghị định 123/2020 on e-invoices from 01/06/2025 | Confirmed |
| S57 | aps-audit.vn (audit firm) | From 15/12/2025 an unpaid purchase of 5 million đồng or more needs a contract and non cash payment to be deductible (Nghị định 320/2025, Thông tư 20/2026) | Confirmed |
| S59 | mst.gov.vn (ministry) | No advertising without consent; frequency and hours | Confirmed |
| S60 | cafebiz.vn | DNC registration by SMS to 5656 or khongquangcao.ais.gov.vn | Confirmed |
| S61 | vnexpress.net, 31/08/2026 | Nghị định 330/2026 Articles 37 and 38: wrong hours or frequency, DNC calls, no consent; suspension one to three months | Confirmed |
| S63 | hatinh.gov.vn | Luật 91/2025 bans buying and selling personal data unless another law allows it | Confirmed |
| S64 | thuvienphapluat.vn | Luật 91/2025 Article 9: consent voluntary and informed; silence or no response is not consent | Direct page HTTP 403; confirmed from WebSearch result text quoting Article 9 |
| S72 | amis.misa.vn (vendor) | AMIS CRM stages In progress, Won, Lost; conversion to order | Confirmed |
| S74 | baochinhphu.vn, 23/09/2026 | Nghị định 363/2026 effective 11/11/2026; excludes matters under the cybersecurity and personal data penalty decree | Confirmed |
| S75 | thuvienphapluat.vn | Nghị quyết 1685/NQ-UBTVQH15: old District 1 split into Sài Gòn, Tân Định, Bến Thành, Cầu Ông Lãnh | Direct page HTTP 403; confirmed via WebSearch results including the official text on xaydungchinhsach.chinhphu.vn |
| S76 | qdnd.vn | Nghị định 91/2020 Article 13: stop at once on refusal; never send to the DNC list or to someone who declined | Direct page redirect loop; confirmed via WebSearch results (thuvienphapluat, tuyentruyenphapluat.tphcm.gov.vn) |
| S86 | vanban.chinhphu.vn (Nghị định 174/2025) | VAT reduction instrument | Page confirms issue 30/06/2025, effective 01/07/2025; end date and exclusions not on the metadata page (see S55) |

## Platform terms re-opened for D13 (24/09/2026)

The original kit reads LinkedIn (member's own logged in pages, read only), X live search, public directories, review sites and forums, and the member's mailbox. The form adds Vietnamese job boards, directories, the business registration portal, Facebook groups and Zalo.

| Platform | Terms page | Tracking or collecting allowed? | Consequence for the variant |
|---|---|---|---|
| LinkedIn | linkedin.com/legal/user-agreement, effective 03/11/2025, section 8.2 | **No.** Forbids software, scripts, robots, crawlers and browser plugins "to scrape or copy the Services" and "bots or other unauthorized automated methods to access the Services" | Under D13 the variant routine does not read LinkedIn through browser control. The member reads LinkedIn by hand and may paste a profile URL as a member import. `sales-prospect-sweep`, `sales-desk-setup`, `CAPABILITIES.md` and the `linkedin_url` channel need a lead decision (see notes) |
| Meta (Facebook groups, fanpages) | facebook.com/legal/terms, Vietnamese, effective 01/01/2025, section 3.2 | **No.** No automated access or collection without prior permission | The routine never reads Facebook groups or comments; only data from the member's own page, exported by the member |
| Zalo | zalo.vn/dieukhoan, updated 28/08/2026, effective 05/09/2026, 4.7 | **No.** Forbids logging in or using the service through unapproved third party software; collecting users' information without permission | Personal Zalo is drafted only, a named person sends (D10). No bulk tool, no login by the agent |
| Zalo OA | oa.zalo.me guide (S22) | Messaging only to users who interacted, inside the OA windows | Any proactive OA message is held for the member |
| TopCV | topcv.vn/terms-of-service, updated 01/04/2025 | Not explicit on bots; forbids copying, distributing or exploiting TopCV content | Read a posting as a hiring signal, one page at a time, quote a line; never copy listings in bulk, never use candidate data |
| VietnamWorks | vietnamworks.com/thoa-thuan-su-dung, no date shown | **No reuse outside recruitment:** "khai thác, sử dụng các thông tin ... không nhằm phục vụ cho mục đích tuyển dụng" is forbidden | Treat as restricted. A human may read a posting; the routine does not harvest VietnamWorks pages. Needs a lead decision before any automated read |
| CareerViet | careerviet.vn/vi/employers/use, references Luật 91/2025 | **No.** Forbids browsers, data collectors, robots outside the site's own search tools; candidate data only for recruitment | The routine does not read CareerViet automatically |
| ITviec | itviec.com/blog/quy-che-hoat-dong-cua-itviec, updated 08/12/2025 | **No** (general): forbids tools that interfere with the system and copying or distributing content without written consent | Treat as restricted; human reading only unless the lead decides otherwise |
| Trang Vàng Việt Nam | trangvangvietnam.com/quy-che-hoat-dong (via WebSearch; homepage HTTP 403) | **No** unauthorised copying, use or distribution of site content | Single lookups to confirm a company's public number, cross checked against the MST; no list building |
| Cổng đăng ký doanh nghiệp | dangkykinhdoanh.gov.vn terms, 15/12/2017 | No commercial exploitation of registration data without approval; no unauthorised system access; captcha on lookups | One lookup per account to verify MST, status and legal representative; never solve a captcha, never bulk download |
| Tra cứu người nộp thuế | tracuunnt.gdt.gov.vn (S27, S45) | Captcha on every query; no public bot API | Same: the member or a human completes the captcha; the routine records `n/a` when it cannot read |
| X | x.com/en/tos | Not re-opened (HTTP 402), index viewing date 23/09/2026 | The form drops X for Vietnamese SME buyers (unmarked); no claim widened |

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. Split rows carry a letter. Targets are routine ids or kit files in `employees/sales-employee-vn`.

### A1. Form author (55 to 61)

| Line | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 55, 57, 58, 59, 60, 61 | none | UNVERIFIED (6 rows) | report identity only | AI self description; no human expert, no years of practice, no account operated. Recorded above, never presented as expert input |

### A2. The role's work in Vietnam (64 to 91)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 68 to 74 cadence, duration and authority for the seven routines (setup monthly on the last working day, sweep weekdays, follow up in the afternoon, Friday review, month end refresh with a Tết shift, standup before a morning hour, Saturday only if declared) | none | UNVERIFIED (7 rows) | report | An unmarked A2 cadence never moves a `SCHEDULE.md` row. The authority column matches the inherited hold on every outbound action |
| 80 calling a switchboard or public number to reach the person in charge is always a human's job; advertising calls only in the legal window and at most once per number per day | `[S10,S61+CG]` | ADOPT, qualitative | `sales-first-touch-drafts`, `sales-followup-sweep`, `CAPABILITIES.md` (held action) | Re-verified S10, S61. The fine and the hours stay out of the kit (D11); the routine drafts a call script and never dials |
| 81 meeting requests (coffee, video) are drafted by the AI and approved by a person; recorded in the shared calendar | `[CG]` | ADOPT | `sales-followup-sweep` (meeting card), `sales-first-touch-drafts` | Owner approved; the send stays with the member |
| 82 draft quotes with unit price, VAT, credit, delivery; never raise a discount | none | UNVERIFIED | report | Covered in part by 105 and A6 229 |
| 83 log CRM within ten minutes of a touch | none | UNVERIFIED | report | |
| 84 check MST and operating status before a quote; statuses 03, 05, 06 | `[S27]` | ADOPT | `sales-prospect-sweep` (a disqualifying test), `sales-desk-setup` (test in `strategy/qualification.md`), `sales-qualification-refresh` | Re-verified S27. Status codes may appear as the portal's own labels quoted with their URL |
| 85 ask a past customer's permission before naming them | none | KEEP | `strategy/proof-inventory.md` rule | Inherited: nothing is claimed that is not in the proof inventory |
| 86 flag do not contact and stop every channel on a refusal | `[S76]` | ADOPT | `sales-followup-sweep` (`do_not_contact`), `sales-first-touch-drafts`, `CONTRACT.md` finished forever rule extended to call and Zalo | Re-verified S76. The one hour turnaround is unmarked and stays a proposal |
| 87 hand a booked opportunity to the closer within two working hours | none | UNVERIFIED | report | |
| 91 three tasks to give the AI first; never call, befriend on Zalo, send cold email or promise a price | none | KEEP | guardrails 1 and 2 | Same as the inherited hold |

### A3. Vietnam specifics (99 to 105)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 99a at an SME the decider is the director or owner, not a LinkedIn title; the accountant can block on invoice and credit; a job post title is not the signer | `[CG]` | ADOPT | `sales-desk-setup` (`strategy/buyer.md` role tests), `sales-prospect-sweep`, `sales-qualification-refresh` | Owner approved. The fifty insured employees cut off goes into `strategy/buyer.md` as the member's own segment value, proposed at intake, never in a routine body |
| 99b the HR manager example | `[CG]` | EXAMPLE | examples only | Illustrative case |
| 100a first touch by phone or Zalo after they give a number, not cold email; email for quotes and contracts after a conversation | `[S24,S39]` | ADOPT | `sales-first-touch-drafts`, `sales-followup-sweep`, `sales-desk-setup` (`strategy/message-library.md` channels) | S24 and S39 alone do not prove the order; A5.1 (172, `[CG]`) carries it |
| 100b LinkedIn is useful only for technology, FDI and professional services buyers | `[S24,S39]` | ADOPT | `sales-prospect-sweep`, `sales-desk-setup` | Re-verified S24 (2024 figures). Subject to the D13 verdict on LinkedIn above |
| 101a anh or chị at first contact; never em to a peer or elder unless the owner set it; ask the owner how to address before drafting | `[CG]` | ADOPT | `sales-desk-setup` (intake question), `sales-first-touch-drafts`, `sales-followup-sweep` | Owner approved. Also WORDING for templates |
| 101b "để anh xem đã", "cuối tháng nhé" are not refusals; record the date they named and remind on that date, never daily | `[CG]` | ADOPT | `sales-followup-sweep` (reply classification and next step date) | Owner approved; never recorded as `lost` or `do_not_contact` |
| 101c tax season example, remind after the 20th | `[CG]` | EXAMPLE | examples only | Illustrative |
| 102a addresses after 01/07/2025: never infer a new ward from an old district; read the registration portal; keep the old line in brackets; flag a mismatch for a person | `[S48,S49,S75]` | ADOPT | `sales-prospect-sweep`, `sales-desk-setup` (member's own address) | Re-verified S49, S75. No province count or resolution number enters the kit |
| 102b District 1 example | `[S75]` | EXAMPLE | examples only | Fictional use only |
| 103a only an issued holiday calendar counts; a ministry proposal is not a holiday | `[S53,S54]` | ADOPT | `sales-desk-setup` (member calendar in `strategy/offer.md` `## Working days and hours`), `sales-first-touch-drafts` | Re-verified S53, S54. No holiday date enters a routine |
| 103b no cold calls on declared holidays and two working days before Tết | `[S53,S54,S69,S70]` | UNVERIFIED | report | The sources are calendars and news; none supports the rule |
| 103c buying seasons differ by industry; ask the owner which month their customers sign; never infer from another industry | `[S69,S70]` | ADOPT | `sales-desk-setup`, `sales-qualification-refresh` | S69 and S70 show industry specific seasons (not re-opened: no law or number adopted from them) |
| 103d progress reminders before Tết allowed to customers already negotiating | none in support | UNVERIFIED | report | |
| 104 buying and selling personal data is banned; refuse any file without a source per row; only company numbers published on the website, the registration portal or a voluntary directory, and consent still needed for an advertising call | `[S19,S20,S63]` | ADOPT | `CONTRACT.md` (VN guardrail text), `sales-prospect-sweep`, `sales-desk-setup` (member import) | Re-verified S19, S63. Inherited "no row without evidence" already refuses unsourced rows |
| 105a B2B prices carry VAT, credit terms and a contract; the AI never states a VAT rate the owner did not record; a quote line says a contract is needed when payment is not immediate | `[S55,S57,S86]` | ADOPT, qualitative | `sales-desk-setup` (`strategy/offer.md` `## Price and billing shape` records the owner's rate and terms), `sales-followup-sweep` | Re-verified S55, S57, S86. 8%, 5 million đồng and 31/12/2026 stay out of the kit (D11) |
| 105b a quote template (unit price before VAT, rate, total, blank credit days) | `[S55,S57,S86]` | DEFER | `sales-followup-sweep` (a price question becomes a `handoff` card) | No routine owns a quote file; a new file needs a writer and reader in `CONTRACT.md` |

### A4. Trade terms (112 to 139)

| Line | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 112 to 121, 123 to 139 (27 terms) | none | WORDING (27 rows) | `glossary.md` | Vocabulary only. Their example sentences carry unmarked rules (fourteen day reminder, deposit percent, 15 day quote validity) that stay unverified |
| 122 Brandname and Voice Brandname: no advertising call is scheduled without a registered identifier | `[S1,S8]` | ADOPT, qualitative | `sales-first-touch-drafts`, `sales-desk-setup` (intake field), `CAPABILITIES.md` | Re-verified via S10, S61. Fine amounts stay out |

### A5. Tools and channels (146 to 217)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 146a Gmail: the AI drafts, a person sends; no price file attached before approval | none | KEEP | guardrail 1 | Inherited |
| 146b company domain mail, never personal gmail for bulk outreach | none | UNVERIFIED | report | |
| 147 Microsoft 365 only where already used | none | KEEP | `CAPABILITIES.md` unchanged | |
| 148a LinkedIn: invitations and messages by a person; no automated connection tools | `[S24,S73]` | KEEP | inherited LinkedIn read only rule | Already stricter |
| 148b "AI only reads and quotes" on LinkedIn | `[S24,S73]` | REJECT | `sales-prospect-sweep` flagged | D13: LinkedIn User Agreement 8.2 forbids automated access and scraping |
| 148c fewer than 100 invitations a week | `[S73]` | UNVERIFIED | report | Consultant advice; the platform publishes no number; the kit sends none |
| 149 X not needed | none | UNVERIFIED | report | Removal of an original source needs support; the inherited yield rule already retires a dead source |
| 150 HubSpot replaced by Vietnamese CRMs | none | UNVERIFIED | see 187 | |
| 151 to 158 Attio, Close, Zoho, Salesflare, Salesforce, Apollo, Clay, ZoomInfo not needed | none | UNVERIFIED (8 rows) | report | Apollo as a personal data risk is covered by 104 and 225 |
| 159 directories: VCCI is not a phone file; Vietrade fair catalogue; association exhibitor lists; no message from a name only list | `[S46,S68]` | ADOPT | `sales-prospect-sweep`, `sales-desk-setup` (`where_they_appear:`) | Re-verified S46 |
| 160 public Facebook groups, fanpage comments, forums read for complaints | none | REJECT | `sales-desk-setup` step on public objections, `sales-prospect-sweep` | D13, Meta Terms 3.2; unmarked in any case |
| 161 payments are transfer, VietQR, cash with receipt; e-invoices belong to accounting; the AI never creates a payment request, issues an invoice or changes an account number | `[S56]` | ADOPT | `CONTRACT.md` guardrail text, `CAPABILITIES.md` | Re-verified S56 |
| 162 calendar invites: a person sends | none | KEEP | guardrail 1 | |
| 163a personal Zalo only after they give a number or accept; the agent never logs in; no unofficial bulk software; a person befriends and sends | `[S21,S23]` | ADOPT | `sales-first-touch-drafts`, `sales-followup-sweep`, `CAPABILITIES.md` | Re-verified S21 and Zalo terms 4.7; D10 |
| 163b zBusiness price | `[S23]` | UNVERIFIED | report | Reseller blog; the form itself asks to recheck |
| 164 OA messages only to people who interacted; proactive OA messages held | `[S22]` | ADOPT | `CAPABILITIES.md`, `sales-followup-sweep` | Re-verified S22; windows stay out |
| 165a advertising calls only through a switchboard with Voice Brandname; company SIM only for non advertising calls; no brandname, no call script queued | `[S1,S8,S36,S71,S76]` | ADOPT | `sales-first-touch-drafts`, `sales-desk-setup`, `CAPABILITIES.md` | Re-verified S10, S61 (carrier blocking) |
| 165b OMICall, Bizfly Cloud as switchboard routes | `[S36,S71]` | MOVE | `CAPABILITIES.md` (names only) | Sourced capability data |
| 165c switchboard prices | `[S36,S71]` | REJECT | none | A kit file carries no vendor price |
| 166 registration portal and tax lookup for name, code, address, legal representative, status; captcha; no bulk download | `[S26,S27,S45]` | ADOPT | `sales-prospect-sweep`, `sales-qualification-refresh`, `recipes/BROWSER-RECIPES.md` candidate | Re-verified; captcha rule is inherited |
| 167a job postings are hiring signals; never buy CVs, never message candidates, never use job seeker data | `[S40,S41,S43,S80]` | ADOPT | `sales-prospect-sweep`, `sales-desk-setup` | Subject to the job board D13 verdicts above |
| 167b company size examples | `[S40,S41]` | EXAMPLE | examples only | |
| 172 A5.1 email is not the first touch; call or referral first, Zalo if they ask, email after the conversation; tech and FDI may get email the same day as the call | `[CG]` | ADOPT | `sales-first-touch-drafts`, `sales-followup-sweep`, `sales-desk-setup` | Owner approved. Needs the channel vocabulary change noted in `parsed-strings.md` |
| 177a A5.2 decider found via registration portal, site About and Contact, fanpage or trade press, job posts, then the switchboard | `[S24,S26]` | ADOPT | `sales-prospect-sweep` | Re-verified S26; fanpage reads fall under the Meta verdict |
| 177b never construct an email from a name pattern | `[S24,S26]` | KEEP | `sales-prospect-sweep` Step 4 | Inherited |
| 182a A5.3 allowed sources and cross checks: portal, tax lookup, website switchboard, Trang Vàng (self declared, check MST), Trang Vàng BIZ is not a state body, VCCI; never data sold on Telegram or Facebook | `[S20,S26,S27,S44,S45,S46,S81]` | ADOPT | `sales-prospect-sweep`, `sales-desk-setup` | Re-verified the legal and government rows; directory terms above |
| 182b CRM prices | `[S31,S32]` | REJECT | none | No vendor price in kit files |
| 187a A5.4 Sheet under about 300 leads; Getfly, MISA AMIS CRM, Bizfly, CRMViet, Base; CSV or Excel export is the safe link | `[S31..S35,S77,S84,S85+CG]` | MOVE | `CAPABILITIES.md` section 4b connected sources | Sourced route data |
| 187b CRM prices | same | REJECT | none | |
| 187c API only when the owner names who may call it | same | KEEP | inherited credential rule | |
| 192 A5.5 a customer exists only with a signed contract or PO, an issued e-invoice, or money received; "ok" on Zalo is never won; accounting wins over CRM | `[S32,S56,S72]` | ADOPT | `sales-followup-sweep`, `sales-pipeline-review`, `sales-desk-standup` | Re-verified S56, S72. `won` stays member written |
| 197 A5.6 calendar of record is Google Calendar or the CRM; the closer and the owner see meetings above the owner's value threshold; reminders only after they agreed a time; no invite to a guessed address | `[CG]` | ADOPT | `sales-followup-sweep`, `sales-desk-setup` (threshold field in `strategy/offer.md`) | Owner approved; the 20 million đồng default is the owner's value, not a routine constant |
| 202 A5.7 urgent owner alerts over Zalo OA, 08:00 to 21:00 | `[S22+CG]` | REJECT | none | D10: `notify.push` keeps its routes and never goes to Zalo; clock times belong to `SCHEDULE.md` |
| 207a A5.8 the AI writes internal files and the brief; everything outbound is a person's | `[S10,S59,S61,S64]` | KEEP | guardrails | Inherited |
| 207b the held list names calls, Zalo friend requests, Zalo messages, proactive OA, quotes, contracts, LinkedIn invitations | `[S10,S59,S61,S64]` | ADOPT | `CAPABILITIES.md`, `CONTRACT.md` held actions | Re-verified |
| 212a A5.9 tool routes: Getfly Social CRM, MISA AMIS CRM, OMICall, Bizfly Cloud; a one person SME has a company SIM and a Sheet | `[S31,S32,S36,S71,S72,S84]` | MOVE | `CAPABILITIES.md` (names only) | |
| 212b never ask the owner to buy a tool in week one | same | UNVERIFIED | report | The sources are vendor pages; none supports the rule |
| 217 A5.10 incident alerts over personal Zalo with retries and one call | `[S21]` | REJECT | none | D10 and the contract's push cases |

### A6. Absolute prohibitions (225 to 233)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 225 never buy, receive or use a sold personal data file, even when the owner says go ahead | `[S3,S19,S20,S63]` | ADOPT | `CONTRACT.md` guardrail text, `sales-prospect-sweep`, `sales-desk-setup` | Re-verified; fine multiples stay out |
| 226 no advertising call, message or email without prior clear consent; silence is not consent | `[S1,S3,S7,S8,S14]` | ADOPT | `sales-first-touch-drafts`, `sales-followup-sweep`, `CONTRACT.md` | Re-verified S8, S14, S64 |
| 227 never call, befriend, message, email or post by itself | `[S59,S64]` | KEEP | guardrail 1 | Inherited |
| 228 no advertising call or message outside the legal hours, above the frequency cap, or to a refuser or a DNC number | `[S8,S10,S59,S61,S76]` | ADOPT, qualitative | `sales-first-touch-drafts`, `sales-followup-sweep` | Re-verified. Hours and counts stay out (D11); the draft carries the rule, the member sends |
| 229 never promise a discount, a cash commission, skipping an invoice; never "số 1" or "tốt nhất" without the supporting document | `[S50,S51]` | ADOPT | `sales-first-touch-drafts`, `sales-followup-sweep`, `CONTRACT.md` copy rules | Re-verified S51 |
| 230a never guess an email, invent a name or a customer quote | `[S64]` | KEEP | inherited evidence rules | |
| 230b never filter people by gender, age, ethnicity or home region | `[S64]` | ADOPT | `sales-prospect-sweep`, `sales-qualification-refresh` | Re-verified S64 (purpose bound processing) |
| 231 no unofficial bulk Zalo software; no VoIP without Voice Brandname | `[S10,S21]` | ADOPT | `CAPABILITIES.md`, `sales-first-touch-drafts` | Re-verified |
| 232 never put a customer's real number, ID photo or account number into a group chat or shared mail | `[S1,S74]` | ADOPT | `sales-desk-standup`, `sales-pipeline-review`, `CONTRACT.md` | Re-verified S74; the S1 articles not re-read |
| 233 never issue an invoice, change a price or confirm a payment | `[S56]` | ADOPT | `CONTRACT.md` guardrail text | Re-verified |

### A7. Install time business information (240 to 250)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 240 company name, MST, new address, legal representative, industry | none | UNVERIFIED | report | Verification itself is adopted at 84, 102a, 166 |
| 241 offer page: floor price before VAT, VAT rate, credit days, maximum discount (0% when blank) | none | UNVERIFIED | report | 105a and 229 carry the adopted part |
| 242 at most three segments | none | UNVERIFIED | report | |
| 243 address form, sender name, public number, domain email | none | UNVERIFIED | report | Address form adopted at 101a |
| 244 proof list; empty means no customer name and no figure | none | KEEP | `strategy/proof-inventory.md` | Inherited |
| 245 do not contact list with MST and full normalised number in a restricted store, date, verbatim words, recorder; checked before every draft; masked in reports; cold calls only through a switchboard that filters the national DNC | `[S1,S60]` | ADOPT | `sales-desk-setup` (intake), `sales-first-touch-drafts`, `sales-followup-sweep`, `CONTRACT.md` file map candidate | Re-verified S60, S61 |
| 246 CRM in use and who may view; never ask for a password | none | KEEP | inherited credential rule | |
| 247 working calendar: Saturday or not, call windows, approver and deadline | `[CG]` | ADOPT | `sales-desk-setup` (`strategy/offer.md` `## Working days and hours`) | Owner approved. The default windows are clock times and stay proposals in this report, never in a routine body |
| 248 thresholds to ask the owner | none | UNVERIFIED | report | 197 carries the calendar threshold |
| 249 where call logs, consent evidence, refusals and stop confirmations live; never delete a refusal record; deletion requests go to the owner | `[S1,S14]` | ADOPT | `sales-desk-setup` (intake), `sales-followup-sweep`, `CONTRACT.md` | Re-verified S14. The one year retention stays out (D11) |
| 250 Voice Brandname and OA names; no password or OTP; no brandname, no cold call; company SIM only for signed customers or written consent | `[S1,S8,S14,S76]` | ADOPT | `sales-desk-setup`, `sales-first-touch-drafts`, `CAPABILITIES.md` | Re-verified |

## Counts

| Decision | Rows |
|---|---|
| ADOPT | 40 |
| MOVE | 3 |
| KEEP | 13 |
| WORDING | 27 |
| EXAMPLE | 4 |
| DEFER | 1 |
| REJECT | 7 |
| UNVERIFIED | 37 |

132 decided clause units from 109 content rows; 26 scaffolding rows (table headers, question text) carry no clause.

## Numbers kept out of kit files (D11)

Call window and message window, one call and three messages per number per 24 hours, every fine amount, suspension of one to three months, one year retention, VAT 8% to 31/12/2026, the 5 million đồng contract threshold, Zalo and OA windows and contact caps, the 100 invitations a week advice, vendor and CRM prices. Candidates for one shared, dated Vietnam rules file at Gate 8.

## Open points for the lead

1. LinkedIn, Meta, Zalo, CareerViet, ITviec, VietnamWorks and Trang Vàng forbid automated collection. D13 means the variant's `sales-prospect-sweep` cannot keep its LinkedIn read lane (72 mentions in the original routine) and cannot harvest Vietnamese job boards; what remains is the registration portal and tax lookup one account at a time, company websites, public fair and association lists, and member imports.
2. Adopting 172 and 100a (call and Zalo first) collides with the parsed `channel` vocabulary `email` or `linkedin` in `crm/contacted.jsonl`; see `parsed-strings.md`.
3. S1 article text (.docx) not re-read; S10, S61, S14 carry Articles 37 and 38.
