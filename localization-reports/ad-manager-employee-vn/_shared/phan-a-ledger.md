# ad-manager-employee-vn: Phần A ledger (shared by all seven routines)

Status on 24/09/2026: **Phần A classified row by row, sources behind every adopted law, number or platform rule re-opened, platform terms re-opened for D13. No kit file changed by this ledger.** Each routine writer copies the rows that name its routine id into that routine's own provenance ledger and does not re-classify them.

## Identity

- Form: `Khung-tri-thuc-ban-dia/04_Ad-Manager/phieu-da-dien.md` (read only), Phần A at form lines 51 to 259. Source index: `04_Ad-Manager/literature/nguon.md`, viewing date 23/09/2026 on every row.
- Extract: `extract_form_section.py --routine ads-account-intake --with-a`, scratch copy at `scratchpad/vn/ad-manager-employee-vn/intake-with-a.md` and `.json`. Phần A carries 135 extracted lines; 29 are prompts, table headers or question lines and carry no clause (A2 64, 66, 76, 78, 89; A3 95, 97; A4 109, 111; A5 140, 142, 164 and the thirteen question lines 165 to 225; A6 231, 233; A7 246, 248). **106 content rows are classified below.**
- Markers on the 106 content rows: A1 6 none; A2 12 none, 3 `[CG]`, 1 `[S]`; A3 1 none, 5 `[S]`, 2 `[S+CG]`; A4 18 none, 7 `[S]`; A5 7 none, 17 `[S]`, 3 `[CG]`, 5 `[S+CG]` (question lines excluded); A6 2 none, 6 `[S]`, 1 `[S+CG]`; A7 6 none, 3 `[S]`, 1 `[S+CG]`. Totals: 52 none, 39 `[S]`, 6 `[CG]`, 9 `[S+CG]`.
- **Form author (A1): an AI sub agent playing the Ads role, research draft dated 23/09/2026, which itself asks for review by a real practitioner (form line 55).** It has never run a real account (line 60) and has no years of experience (line 58). No clause in this form has been confirmed by a person running Vietnamese ad accounts. `[CG]` marks are the owner's review decisions, not a domain expert's. Every adopted rule below still needs Gate 3 review by a real practitioner before sale (D6).
- Original kit: `employees/ad-manager-employee` 1.8.0, byte identical and never edited. Variant: `employees/ad-manager-employee-vn`, scaffolded 24/09/2026 from 1.8.0 (`employee.json` slug and name changed only).
- Decisions that bind this ledger: D3, D8, D10, D11, D12, D13 in `localization-reports/VN-DECISIONS.md`; style in `localization-reports/STYLE-VI.md`.

## Decision counts (primary decision per content row)

| Decision | A1 | A2 | A3 | A4 | A5 | A6 | A7 | Total |
|---|---|---|---|---|---|---|---|---|
| ADOPT | 0 | 1 | 6 | 1 | 13 | 6 | 4 | 31 |
| MOVE | 0 | 1 | 0 | 0 | 5 | 0 | 0 | 6 |
| KEEP | 6 | 2 | 0 | 1 | 6 | 3 | 4 | 22 |
| WORDING | 0 | 0 | 1 | 22 | 1 | 0 | 1 | 25 |
| EXAMPLE | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| DEFER | 0 | 2 | 0 | 1 | 3 | 0 | 0 | 6 |
| REJECT | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| UNVERIFIED | 0 | 10 | 1 | 0 | 4 | 0 | 1 | 16 |
| **Rows** | 6 | 16 | 8 | 25 | 32 | 9 | 10 | **106** |

Secondary decisions inside split rows are written in the row (for example the Sunday clause of A2 69 is REJECT, the example column of every A3 row is EXAMPLE only). A1 rows are KEEP in the sense "no kit change, recorded in this header".

## Sources re-opened on 24/09/2026

Re-opened with WebFetch, WebSearch or the ego-browser skill (Meta Help Centre pages render only in a browser). "Confirmed" means the page states the clause the ledger adopts; any narrower result is written out.

| Source | Supports (form line) | URL | Checked | Verdict |
|---|---|---|---|---|
| S1 Sở VHTTDL Đồng Nai | Luật 75/2025/QH15 effective 01/01/2026 (106, 237) | svhttdl.dongnai.gov.vn/.../luat-sua-doi-bo-sung...-180.html | 24/09/2026 | Confirmed for the effective date only. The page says nothing about superlatives |
| S5 lsvn.vn, NĐ 342/2025 | Mandatory content for cosmetics, medical devices (registration number, no doctor image), medical services (240) | lsvn.vn/nhung-diem-moi-cua-nghi-dinh-342-2025...-a169273.html | 24/09/2026 | Confirmed for cosmetics, devices, services. The page states no separate TPBVSK rule; S6 carries it |
| S6 VTV | TPBVSK ad content still needs confirmation; from 01/07/2026 issued by the provincial People's Committee chair (240, 256) | vtv.vn/tu-1-7-ubnd...-100260505192118017.htm | 24/09/2026 | Confirmed, including the 10 working day handling time (kept out of the kit, D11) |
| S7 ttbc-hcm.gov.vn | Cosmetics: no content confirmation from 15/02/2026 (Thông tư 03/2026/TT-BYT), must not imply a drug (240) | ttbc-hcm.gov.vn/nhung-diem-moi...-1020812.html | 24/09/2026 | Confirmed |
| S8 Báo Pháp luật | Cosmetics ads: no drug confusion; no image, uniform or name of doctors, pharmacists, medical facilities (240) | baophapluat.vn/quy-dinh-moi-ve-quang-cao-my-pham-tu-15-2.html | 24/09/2026 | Confirmed |
| S9 Báo Chính phủ, NĐ 87/2026 | Effective 15/05/2026; organisations fined double; tobacco, alcohol of 15 degrees or more, breast milk substitutes for children under 24 months are sanctioned (235, 237) | baochinhphu.vn/quy-dinh-moi-ve-xu-phat...-102260413165337606.htm | 24/09/2026 | Confirmed. The page carries no superlative wording |
| S10 LuatVietnam, NĐ 87/2026 full text | Fine for "nhất", "duy nhất", "tốt nhất" without documents (106, 237) | luatvietnam.vn/.../nghi-dinh-87-2026-nd-cp...-431418-d1.html | 24/09/2026 | Page opened but truncated before the advertising chapter. Substitute opened: Sức khoẻ và Đời sống (suckhoedoisong.vn/...-169260503124857479.htm) states NĐ 87/2026, effective 15/05/2026, sanctions "nhất", "duy nhất", "tốt nhất", "số một" without lawful supporting documents. Clause confirmed through the substitute |
| S12 Báo Chính phủ | Luật Bảo vệ dữ liệu cá nhân effective 01/01/2026 (238, 242) | baochinhphu.vn/luat-bao-ve-du-lieu-ca-nhan...-102251231155609721.htm | 24/09/2026 | Confirmed for the date and the right to consent. The page does not mention advertising use; S13 carries it |
| S13 VOH | Processing personal data for advertising needs consent and an opt out (238) | voh.com.vn/phap-luat/co-duoc-su-dung-du-lieu...-645977.html | 24/09/2026 | Confirmed (the page cites Article 28 of the 2025 law and NĐ 356/2026; article numbers stay out of the kit) |
| S15 Meta Ad Standards, Health and wellness (vi) | No body shaming wording, no close up fat pinching, no result claimed from wearing a product alone (237, 243) | transparency.meta.com/vi-vn/policies/ad-standards/restricted-goods-services/health-wellness/ | 24/09/2026 | Confirmed, and weight loss ads only to 18 and over |
| S17 TikTok ads policy, weight management (vi) | No claim that the product alone causes weight loss; 18 and over (243) | ads.tiktok.com/help/article/tiktok-ads-policy-weight-management?lang=vi | 24/09/2026 | Confirmed |
| S19 MarketingAI | LinkedIn barely used in Vietnam, about 15 minutes a month (156) | marketingai.vn/toan-canh-mang-xa-hoi-2025...htm | 24/09/2026 | Confirmed. Number stays out of the kit |
| S20 VietNamNet | About 80 percent of marketing spend once went to Facebook and Google, 2022 report (172) | vietnamnet.vn/mieng-banh-quang-cao...-i5004154.html | 24/09/2026 | Confirmed as an old figure; the adopted rule forbids a fixed share, so no number enters |
| S21 Tuổi Trẻ | Refused orders 15 to 20 percent industry wide, up to 30 percent on a platform in 2021; seller pays both shipping legs (100, 259) | tuoitre.vn/khoc-rong-voi-khach-bom-hang...-20250611084935056.htm | 24/09/2026 | Confirmed. The form itself forbids using these as an industry rate; no number enters |
| S22 VietnamBiz | 77,5 percent of e commerce consumers choose COD (99) | vietnambiz.vn/nghich-ly-tmdt-viet-nam...-2025615192910833.htm | 24/09/2026 | Confirmed; quoted from the Ministry of Industry and Trade e commerce department, survey year not stated. Number stays out |
| S23 Pancake POS docs | Pancake sends purchase events to Meta by CAPI (146, 161, 222) | docs.pos.pages.fm/pos/tinh-nang-nang-cao/toi-uu-chuyen-doi-su-kien-mua-hang-voi-capi-facebook-2024 | 24/09/2026 | Confirmed |
| S24 Pancake CRM docs | Status to event mapping; "Có số điện thoại" condition (146) | pancake-crm.gitbook.io/.../4.6.3-toi-uu-chuyen-doi-mua-hang-voi-capi-cho-facebook-+-instagram | 24/09/2026 | Confirmed |
| S25 Nhanh Vpage manual | Connector must be BM admin; one dataset per page; option to send only orders from conversations carrying an ad_id (146, 154, 222) | vpage.manual.nhanh.vn/cai-dat/meta-conversions-api | 24/09/2026 | Confirmed. **The page says nothing about UTM**, so the UTM clause of 154 is unverified |
| S27 CafeF | Cốc Cốc 30,6 million users, over 600 million queries a month (159, 182) | cafef.vn/coc-coc-trinh-duyet-viet-nam...-188241022101317449.chn | 24/09/2026 | Confirmed. Numbers stay out |
| S28 Zalo Ads | Eight formats; OA ads and Post ads need a verified OA (135, 158) | ads.zalo.me/business/cac-hinh-thuc-quang-cao-tren-zalo-ads/ | 24/09/2026 | Confirmed |
| S29 Zalo OA message policy | Consultation, transaction, promotional message rules (136, 162, 227) | oa.zalo.me/home/resources/news/thong-bao-chinh-sach-gui-tin-va-quy-dinh-phi-gui-tin_1433049880779375099 | 24/09/2026 | Confirmed for consultation and transaction terms. The page ties promotional volume to the OA service package; prices stay out |
| S30 Zalo OA interaction policy | Promotional messages at most 1 a day and 30 a month per follower; violations tracked over 12 weeks (162, 227, 241) | oa.zalo.me/home/documents/policy/tuong-tac-cua-oa-voi-nguoi-dung | 24/09/2026 | Confirmed |
| S34 CafeF | 15 percent returns at 11.11 for one fashion shop; 50.000 đ per return for one shop (100) | cafef.vn/gia-tang-boom-hang-188251118084816142.chn | 24/09/2026 | Confirmed as single shop figures, not industry rates. Nothing numeric enters |
| S35 myads.com.vn | Year end peak season (103) | myads.com.vn/tang-toc-chay-quang-cao-facebook-dip-cuoi-nam-2025/ | 24/09/2026 | Partly. Lists Black Friday, 12/12, Christmas, New Year, Tết only. **8/3, 20/10, 20/11, Trung thu and the double day sales are not on this page**; their form citation is blank, so they rest on `[CG]` alone |
| S38 TikTok Help, learning phase (vi) | Context for A4 128 | ads.tiktok.com/help/article/learning-phase?lang=vi | 24/09/2026 | Confirmed: volatility drops after about 25 results or 7 days; avoid pausing and edits. Opened for context, not cited on a Phần A row |
| S39 TikTok In-Feed specs (vi) | 9:16 at least 540 by 960; display name up to 20 characters (177, 197) | ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=vi | 24/09/2026 | Confirmed |
| S42 Google Ads Help (vi) | Auto applied recommendations can add broad match keywords, remove keywords, change bidding; can be switched off (147) | support.google.com/google-ads/answer/10279006?hl=vi | 24/09/2026 | Confirmed |
| S52 Looker Studio docs (vi) | Free tool; a Pro edition exists (152, 187, 212) | docs.cloud.google.com/looker/docs/studio?hl=vi | 24/09/2026 | Confirmed |
| S53 xaydungchinhsach.chinhphu.vn | 34 provincial units, 28 provinces and 6 cities (102, 255) | xaydungchinhsach.chinhphu.vn/nghi-quyet-so-112-2025-ubtvqh15...-119260101165717259.htm | 24/09/2026 | Confirmed for 34 units. The two level government clause is not on this page; confirmed instead on Báo Chính phủ (baochinhphu.vn/1-7-2025-ngay-hoi-non-song-va-buoc-ngoat-lich-su-102250701075426419.htm): province and commune levels nationwide from 01/07/2025, district level ended |
| S55 Zalo OA message overview | Broadcast send window 6:00 to 19:59 (104) | oa.zalo.me/home/documents/guides/tong-quan-cac-loai-tin-nhan...-_3651713298729094511 | 24/09/2026 | Confirmed. The kit sends no OA broadcast, so the window enters nothing |
| S56 Meta Help, learning phase (vi) | "Máy học" status; about 50 results in the week after the last significant edit; edits restart learning (128) | vi-vn.facebook.com/business/help/112167992830700 | 24/09/2026 | Confirmed (ego-browser); Shop ads need 17 website and 5 Meta purchases |
| S57 TikTok Help, GMV Max (vi) | All orders of promoted products count, organic and affiliate included; same day GMV, 1 day window (85, 148, 177) | ads.tiktok.com/help/article/about-product-gmv-max?lang=vi | 24/09/2026 | Confirmed. The page does not state the July 2025 default; S58 does |
| S58 TikTok Help, video shopping ads (vi) | From 07/2025 GMV Max is the default and only campaign type for TikTok Shop ads (132, 148, 177) | ads.tiktok.com/help/article/best-practices-for-video-shopping-ads-with-tiktok-shop?lang=vi | 24/09/2026 | Confirmed |
| S59 TikTok Help, GMV Max in Promote (vi) | Vietnam listed; needs a TikTok Shop seller and the shop's official Promote account (177) | ads.tiktok.com/help/article/how-to-set-up-gmv-max-in-promote?lang=vi | 24/09/2026 | Confirmed |
| S62 Google Ads Help (vi) | PMax final URL expansion on by default, replaces the final URL with a page on the same domain, can be switched off (133, 147) | support.google.com/google-ads/answer/14337539?hl=vi | 24/09/2026 | Confirmed |
| S64 Google PMax Vietnam page | One campaign across Search, YouTube, Display, Discover, Gmail, Maps; optimises to conversion goals (133, 147, 172) | business.google.com/vn/ad-solutions/performance-max/ | 24/09/2026 | Confirmed |
| S68 Meta Help, billing threshold (vi) | Threshold is the unpaid spend at which Meta charges; starts at the lowest level and can rise after successful payments (105, 126) | vi-vn.facebook.com/business/help/776240779095515 | 24/09/2026 | Confirmed (ego-browser; WebFetch returned only the title) |
| S70 Meta Help, payment restrictions (vi) | Unusual activity, high failed or disputed payments or unauthorised use can restrict payment methods or automatic billing and pause ads (105, 217) | vi-vn.facebook.com/business/help/1256440956255650 | 24/09/2026 | Confirmed (ego-browser) |
| S75 Advertising Vietnam | Cốc Cốc Import Domain moves Google Ads search campaigns, launched 09/2022 (159, 182) | advertisingvietnam.com/import-domain...-p20463 | 24/09/2026 | Confirmed (ego-browser; WebFetch returned 403) |
| S76 dangkykinhdoanh.gov.vn | Official national business registration portal (202, 250) | dangkykinhdoanh.gov.vn/vn/Pages/Trangchu.aspx | 24/09/2026 | Confirmed; its terms are recorded under D13 below |
| S77 dichvuthongtin.dkkd.gov.vn | Free fields: name, enterprise code, status, legal form, founding date, legal representative, head office address, seal, business lines (202, 250) | dichvuthongtin.dkkd.gov.vn/ | 24/09/2026 | Confirmed (ego-browser; WebFetch looped on redirects). Certificates, history and role reports are paid |
| S78 Thư viện Pháp luật | Article 36 NĐ 01/2021 on public free fields (202) | thuvienphapluat.vn/ma-so-thue/phap-luat-thue/chu-de/tra-cuu-doanh-nghiep | 24/09/2026 | **Not re-opened** (403, then a Cloudflare bot check in the browser); index viewing date 23/09/2026. Nothing depends on it: the adopted rule records only fields the portal shows on the day and names no decree |

Not re-opened because nothing adopted rests on them: S47, S48, S49, S50, S51 (vendor prices, kept out), S54 (Zalo user count, kept out), S79, S80 (Shopee bid blogs, UNVERIFIED).

## Platform terms re-opened for D13 (24/09/2026)

The kit reads the member's own ad accounts through the member's logged in browser, and `ads-account-intake` researches public surfaces. D13: where a platform forbids tracking or collection, the routine does not do it and uses only the member's own account data.

| Platform | Terms page and clause | Effective or dated | Tracking or collecting their pages allowed? | Consequence for the variant |
|---|---|---|---|---|
| Meta (Facebook, Instagram, Messenger, Ad Library) | vi-vn.facebook.com/legal/terms, section 3.2 item 3: no access or collection of data from Meta Products by automated means without prior permission | 01/01/2025 | **No**, not by automated means without permission | Reading the member's own Ads Manager, Events Manager and billing screens stays (the member's own data, read by the member's own session, as in the original). Competitor fanpages, Facebook groups and the public Ad Library (facebook.com/ads/library, re-opened, public, with an official API) are never read or collected by a routine; `ads-account-intake` lists them as places the member looks at personally, or the member pastes what they saw |
| TikTok (TikTok, TikTok Shop, Ads Manager) | tiktok.com/legal/page/row/terms-of-service/vi: no automated code to collect information from or otherwise interact with the Service | last updated 01/12/2025 | **No** automated collection | Own Ads Manager, GMV Max and Seller Center screens only. No competitor shop or video tracking |
| Shopee | help.shopee.vn/portal/4/article/77243, section 3.1: no robot, spider, **or automatic or manual method** to monitor, compile, collect or copy Shopee Content without Shopee's prior written consent | posted 22/09/2026, effective five days later | **No**, and the clause covers manual monitoring too | Only the member's own Kênh Người bán and Shopee Ads screens. No competitor listing, price or ad tracking of any kind, including a manual weekly look by a routine |
| Zalo (Zalo, OA, Zalo Ads) | zalo.vn/dieukhoan/, sections 4.6 and 4.7: no unauthorised system access; no login or use through third party software or systems not approved by Zalo | 05/09/2026 | **No** for automated or third party access | No routine logs into Zalo or OA. Zalo Ads (ads.zalo.me) figures come from the member's own export or screen. D10 unchanged: routines draft, a person sends |
| Google (Ads, Maps, Search) | policies.google.com/terms?hl=vi: no automated access in violation of machine readable instructions such as robots.txt | 30/07/2026 | Conditional: automated access only where robots.txt and similar instructions allow | Own Google Ads and GA4 screens stay. Google Maps listings of competitors are read by the member, not collected by a routine |
| LinkedIn | linkedin.com/legal/user-agreement, section 8.2 item 2: no software, scripts, robots, crawlers or browser plugins to scrape or copy the Services, including profiles | 03/11/2025 | **No** | The original's `read-linkedin` recipe already reads only the member's own logged in pages and takes no action. The form (A5 156, A5.8 202) puts LinkedIn last and read only. Flag for the writers: a routine scripted through the browser reading LinkedIn is still automated; keep it to the member's own pages as the original does |
| National business registration portal | dangkykinhdoanh.gov.vn terms (Gioithieu.aspx?IDNews=1763): no trading in registration information obtained through the portal; no unauthorised access; reuse on media must follow the law | undated | Single look ups of the member's own business are allowed; bulk collection or resale is not | `ads-account-intake` checks only the member's own enterprise record, one look up, fields as shown that day |
| Lazada | lazada.vn/terms-of-use opened; the terms text was not rendered | not read | Not determined | The kit does not read Lazada anywhere and the form names it only inside a vendor price row (S47). Nothing to change; if a writer adds Lazada, the terms must be re-opened first |

## Clause decisions, A1 to A7

Columns: form line, marker, what the clause says (paraphrase, no dash), decision, target routine ids or kit files, reason.

### A1. Author

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 55 | none | Author is an AI sub agent playing the Ads role, research draft 23/09/2026, needs review by a real expert | KEEP | this header; every routine ledger | Report only. Never present the form as a human expert's view |
| 57 | none | Role: performance marketing specialist for Vietnamese SMEs, not employed anywhere | KEEP | this header | Report only |
| 58 | none | No years of experience; content synthesised from Vietnamese sources | KEEP | this header | Report only |
| 59 | none | Scope researched: online retail with inbox, COD and marketplaces, local services, small B2B; Meta, TikTok, Google, Zalo, Cốc Cốc, marketplace ads | KEEP | this header | Report only; defines which channels the writers may name |
| 60 | none | Has operated no real account; read Vietnamese docs of the listed tools | KEEP | this header | Report only |
| 61 | none | No contact | KEEP | this header | Report only |

### A2. Work of the role in Vietnam

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 68 | `[CG]` | Intake: once on onboarding; re-review at the start of each month or when category, offer or measurement changes; AI drafts, a person approves | DEFER | `ads-account-intake` | Row `first-weekday` already matches. The change triggers are the intake writer's call against B-1. Clock times in the form stay out of the body |
| 69 | `[CG]` | Account read every day with spend, Saturday included while campaigns run; Sunday off unless the owner is in a sale | MOVE (Saturday); REJECT (Sunday clause) | `SCHEDULE.md` row `ads-account-read`, candidate `days` `mon-fri, sat`; the `ads-desk-standup` row must be read at the same time | `guard.mjs` accepts `mon-fri` plus a `sat` token (checked). `sun` is outside the closed vocabulary (SCHEDULE.md section 3) and the conflict is a repo rule, so the Sunday clause cannot land. The B-2 writer decides, and the lead checks the browser stagger |
| 70 | `[CG]` | Creative sets by monthly budget tier: under 15 million đ two sets a week; 15 to under 50 million three to four; 50 million and up one per working day | DEFER | `ads-creative-studio` | A tier cannot live in `days`. Candidate: a run time skip read from `## Monthly ceiling` in `plan/offer.md`, tier thresholds as owner approved numbers recorded in the member's plan, not in the body. `SCHEDULE.md` unchanged |
| 71 | none | Build desk only when an approved set, an offer change or a new channel exists | KEEP | `ads-build-desk` | Already the original: it works the next ready card and nothing else |
| 72 | none | Change list Friday afternoon, or Monday morning when Friday is a holiday | UNVERIFIED | report | Unmarked cadence; the row stays `fri` |
| 73 | none | Retro on the last working day; earlier before Tết or a 9.9 to 12.12 sale close | UNVERIFIED | report | Unmarked |
| 74 | none | Standup Zalo report Monday to Saturday; Sunday only with spend and an alert | UNVERIFIED | report | Unmarked; `sun` is not in the vocabulary; D10 means no routine sends on Zalo |
| 80 | none | Daily reconciliation of closed orders in Pancake, Nhanh.vn, KiotViet or Sapo against ad results | UNVERIFIED | report; B-2 writer | Unmarked here. The rule that the result is an order in the sales software is adopted through A3 99 and A3 100 |
| 81 | none | Read wallet, bill and payment status of Meta, TikTok, Google, Zalo every morning; payment always goes to a person | UNVERIFIED | report | Unmarked. Billing and payment restriction reads are adopted through A3 105 |
| 82 | none | Read rejected ads and check restricted categories before editing copy | UNVERIFIED | report | Unmarked |
| 83 | none | Check location targeting against the 2025 province and commune map | UNVERIFIED | report | Substance adopted through A3 102 and A7 255 |
| 84 | none | Collect foreign platform invoices monthly for the accountant; always a person | UNVERIFIED | report | Unmarked and outside the kit's file work; S31 to S33 and S67 are B section sources, not Phần A |
| 85 | `[S57]` | GMV Max or TikTok Shop livestream budget agreed with the seller, separate from message campaigns; GMV Max ROAS includes organic orders | ADOPT (rule); UNVERIFIED (the budget agreement task) | `ads-account-read`, `ads-change-list`, `ads-creative-retro` | S57 re-opened: every order of a promoted product counts. A GMV Max ROAS is never read as ad attributed profit and never summed with Meta results |
| 86 | none | Filter junk conversations that pollute message events | UNVERIFIED | report | Unmarked |
| 87 | none | Weekly Vietnamese negative keywords with and without diacritics and teencode | UNVERIFIED | report; B-4 writer | Unmarked at A; B-4 may carry S46 |
| 91 | none | First three tasks for AI: morning read without editing, short Zalo brief from recorded numbers, negative keyword and pre launch checklist; never payments, enabling, budget raises, medical claims | KEEP | all | Matches the original holds. The Zalo delivery and 30 line figure are covered by D10 and the original's 30 line brief |

### A3. Vietnam specifics

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 99 | `[S22]` | Most e commerce orders are COD. Ask the closing model before choosing the event; for inbox and COD the main result is an order in the sales software with a phone number, never a click or a draft order | ADOPT, qualitative; example column EXAMPLE | `ads-account-intake` (`## Primary conversion event`, `## Conversion source` in `plan/measurement.md`), `ads-account-read`, `ads-change-list` | S22 re-opened. The 77,5 percent figure stays out |
| 100 | `[S21,S34]` | Refused and returned orders make cost per ad order look cheaper than real. Report cost per order as spend divided by delivered orders, or non cancelled orders as the owner defined; record refusals and returns separately; a missing status column is `n/a`, never 0 | ADOPT | `ads-account-intake`, `ads-account-read`, `ads-change-list`, `ads-desk-standup` | Re-opened. No rate enters; the form itself forbids the 15 to 20 percent and 15 percent figures as industry rates. Uses the kit's existing `n/a (<reason>)` vocabulary |
| 101 | none | Customers write without diacritics, in teencode, ask price before giving a phone; still a sales conversation | UNVERIFIED | report | Unmarked |
| 102 | `[S53+CG]` | Since 2025: 34 provincial units, two level government, no district. Target by province or city plus the owner's commune list; never an abolished district; if the platform's location field is not updated, write "chưa khớp địa giới", ask the owner, never widen to the whole country | ADOPT | `ads-account-intake` (content under `## Countries sold into` and `## Locations`), `ads-build-desk` (`## Locations and targeting`) | S53 and Báo Chính phủ re-opened. Headings stay English (parsed) |
| 103 | `[S35+CG]` | Sale seasons differ from the US calendar; flag holiday and sale weeks "không so được với tuần liền trước"; compare with the same event last year or the 7 normal days before; never scale only because of a sale | ADOPT, qualitative | `ads-change-list`, `ads-creative-retro`, `ads-desk-standup` | S35 supports only the year end list; the rest rests on `[CG]`. No list of dates enters a body; a flagged week is the member's or the plan's |
| 104 | `[S55]` | Owners read on Zalo, address as anh or chị, no Markdown; Vietnamese, dot thousands and "đ", dd/mm; send 8:00 to 21:00; urgent items call | WORDING (format); UNVERIFIED (send window, calling); KEEP (OA window, no sends) | every owner facing template, first `ads-desk-standup` | Format already in STYLE-VI. S55 supports only the OA broadcast window, which the kit never uses. D10 governs delivery |
| 105 | `[S68,S70]` | BM, fanpage and ad accounts often sit with a person or an agency. At intake record who owns the BM, who admins the page, which card is attached. AI never asks for passwords. Do not proceed without at least view and pause rights for the business | ADOPT | `ads-account-intake` (`## Accounts`, `## Platform identity` in `plan/account-map.md`), `ads-account-read` (billing threshold and payment restriction read as findings) | S68 and S70 re-opened via ego-browser. Credentials: Guardrail 2 already forbids |
| 106 | `[S1,S10]` | Never write "nhất", "duy nhất", "tốt nhất", "số 1" in ad copy; if the owner insists, mark "chờ pháp lý duyệt" and stop that line; AI never judges supporting documents; health, supplements, cosmetics, finance: stop and ask for documents before writing | ADOPT, qualitative | `ads-creative-studio`, `ads-build-desk`, `ads-creative-retro`, `ads-account-intake` (seed `## Banned words` in `plan/voice.md`) | Re-opened via S1 and the S10 substitute. `copy-check.mjs` reads `## Banned words` from `plan/voice.md`, so the variant enforces this without a script change. Seed phrases, not the bare word "nhất", which would also match "thống nhất" and "nhất định" |

### A4. Terms

All 25 terms go to `_shared/glossary.md` with the exact Vietnamese the member reads (WORDING), unless the row says otherwise.

| Line | Marker | Term | Decision | Target | Reason |
|---|---|---|---|---|---|
| 113 to 124 | none | CPQC, Camp, Nhóm QC, Ad, BM, Fanpage, Mess, Chốt đơn, COD, Bom hàng, Hoàn đơn, Pixel | WORDING (12 rows) | glossary; owner facing text | Vocabulary only |
| 125 | `[S23]` | CAPI | WORDING | glossary | Definition; the CAPI rule is ADOPTed at A5 146 |
| 126 | `[S68]` | Ngưỡng bill | WORDING | glossary | Definition matches S68 |
| 127 | none | Bill đỏ | WORDING | glossary | Informal; shown only with the plain meaning beside it |
| 128 | `[S56]` | Học máy: "Máy học" delivery status, about 50 results in the week after a significant edit | ADOPT, qualitative | `ads-change-list` (never propose an edit on an ad set reading "Máy học" without saying it restarts learning), `ads-account-read` (record the delivery status as read) | S56 re-opened. The 50 figure stays out of the body; read the status as the screen shows it |
| 129 to 131 | none | Tần suất, Góc, Hook | WORDING (3 rows) | glossary; `ads-creative-studio`, `ads-creative-retro` owner text | Vocabulary |
| 132 | `[S57,S58]` | GMV Max | WORDING | glossary | Rule ADOPTed at A5 148 |
| 133 | `[S62,S64]` | PMax | WORDING | glossary | Rule ADOPTed at A5 147 |
| 134 | none | Từ khoá phủ định | WORDING | glossary | Vocabulary |
| 135 | `[S28]` | OA; unverified OA cannot run some Zalo Ads formats | DEFER | `ads-build-desk` | S28 re-opened: OA ads and Post ads need a verified OA. The build sheet for a Zalo Ads campaign names this |
| 136 | `[S29]` | ZNS; never for mass promotion | KEEP | none | The kit sends no ZNS |
| 137 | none | UTM | WORDING | glossary | Vocabulary |

Row count: 12 + 1 + 1 + 1 + 1 + 3 + 1 + 1 + 1 + 1 + 1 + 1 = 25 (22 WORDING, 1 ADOPT, 1 DEFER, 1 KEEP).

### A5. Tools and channels

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 144 | none | Meta Ads Manager; held: enable, raise budget, change card, top up, publish; AI does none | KEEP | CONTRACT.md Guardrail 1 | Already held. The form's "AI never publishes even with a release" is unmarked here; see 217 |
| 145 | none | Fanpage; AI does not post or reply | KEEP | Guardrail 1 | Already held |
| 146 | `[S23,S24,S25]` | Pixel and CAPI dataset; inbox orders sent by CAPI from Pancake or Nhanh Vpage; connector must be BM admin; AI never edits pixel code or the optimisation event | ADOPT | `ads-account-intake` (`## Conversion source`), `ads-account-read` (event check), `CAPABILITIES.md` section 4b | Re-opened. Never editing pixel or events is KEEP |
| 147 | `[S42,S62,S64]` | Google Ads held actions include search partners, auto applied recommendations, URL expansion | ADOPT; UNVERIFIED (search partners, S43 not cited on this row) | `ads-build-desk` (sheet states URL expansion and auto apply state), `ads-account-intake` (`## Expansion settings`, `## Automatic recommendations`) | Re-opened. The original already never accepts or dismisses a recommendation |
| 148 | `[S57,S58]` | TikTok Shop ads use GMV Max, default since 07/2025; ROAS inflated by organic orders | ADOPT | `ads-account-read`, `ads-change-list`, `ads-creative-retro`, `CAPABILITIES.md` | Re-opened |
| 149 | `[CG]` | Microsoft Advertising not needed for most Vietnamese SMEs; never open an account for the owner | ADOPT | `ads-account-intake`, `CAPABILITIES.md` | Owner approved; no number |
| 150 | none | GA4 when a site exists; never sessions as cost per order | KEEP | rule about numbers | Inherited |
| 151 | none | Vercel Analytics not needed | UNVERIFIED | report | Unmarked |
| 152 | `[S52]` | Supermetrics not default; CSV into Google Sheets; Looker Studio free | MOVE | `CAPABILITIES.md` section 4b | Capability data, re-opened |
| 153 | none | Windsor.ai not needed | UNVERIFIED | report | Unmarked |
| 154 | `[S25]` | Messenger links carry no full UTM; reconcile by ad_id where the software records it; AI drafts links, a person approves | ADOPT (ad_id); UNVERIFIED (UTM claim) | `ads-build-desk` (`## Tracking template`), `ads-account-intake` (`## Link convention`) | S25 supports ad_id only |
| 155 | none | Canva, CapCut, phone video | UNVERIFIED | report | Unmarked |
| 156 | `[S19]` | LinkedIn barely used; read public pages only for large client companies; never connect or message | KEEP | `read-linkedin` recipe; `ads-account-intake` research order via 202 | Original already read only; D13 LinkedIn terms recorded above |
| 157 | `[S47,S49]` | Member website often Webcake or Sapo, or none; AI never edits the site | MOVE | `CAPABILITIES.md` | Capability data; no prices |
| 158 | `[S28,S54]` | Zalo Ads formats; OA verification for OA and Post ads; enabling and wallet top up held | MOVE | `CAPABILITIES.md` | Capability data; 79,6 million user figure stays out |
| 159 | `[S27,S75]` | Cốc Cốc Ads search and display; import from Google Ads | MOVE | `CAPABILITIES.md` | Re-opened; user figure stays out |
| 160 | `[S79,S80]` | Shopee Ads in Kênh Người bán; minimum bid and CPM change from two blogs | UNVERIFIED | report; channel name may enter `CAPABILITIES.md` as a held channel without numbers | The form itself says neither source is a Shopee page |
| 161 | `[S23,S25,S47 to S51]` | Pancake, Nhanh.vn, KiotViet, Sapo; prices; CAPI connectors; AI never changes order status or exports phone lists | MOVE | `CAPABILITIES.md` section 4b | Prices stay out. No export of phone lists is ADOPTed through A6 238 and 242 |
| 162 | `[S29,S30]` | Zalo OA and ZNS limits; AI sends nothing | KEEP | Guardrail 1 | Kit sends nothing |
| 167 | `[CG]` A5.1 | Legal entity should own BM, page, ad account; record four lines (BM name, page name, ad account id, admin person); minimum rights: view numbers and billing; pause right only for the owner's named person; AI takes no password, no 2FA code, is never added as admin | ADOPT | `ads-account-intake` (`plan/account-map.md` `## Accounts`), CONTRACT.md Guardrail 2 wording in the variant, `ads-account-read` | Owner approved |
| 172 | `[S20,S64+CG]` A5.2 | Never state a fixed channel share without the owner's 30 day spend per channel | ADOPT | `ads-account-intake`, `ads-change-list` | Re-opened; the old 80 percent figure stays out |
| 177 | `[S39,S57,S58,S59]` A5.3 | GMV Max counting (same day, 1 day window, organic and affiliate included); video specs | ADOPT (counting); DEFER (specs) | `ads-account-read`, `ads-change-list`, `ads-creative-retro`; specs to `ads-creative-studio` | Re-opened |
| 182 | `[S27,S75+CG]` A5.4 | Cốc Cốc Search only after Google Search converts and budget remains; Shopee Ads is in marketplace search; Zalo Ads is not keyword search; no Microsoft Ads | ADOPT | `ads-account-intake`, `ads-change-list` (test rank) | Re-opened; owner approved |
| 187 | `[S52]` A5.5 | Default reporting: Sheets and CSV; Looker Studio free; never invent a paid dashboard | ADOPT | `ads-account-intake` (dashboard step), `CAPABILITIES.md` | Re-opened |
| 192 | none A5.6 | GA4, UTM, sales software; never infer marketplace metrics not seen | KEEP | rule about numbers | Inherited |
| 197 | `[S39+CG]` A5.7 | TikTok and GMV Max almost all video; Meta sets at least one vertical video and one image when someone films, else "chưa có video", never stock video with strangers' faces; owner approves on Zalo with "ok đăng" | DEFER | `ads-creative-studio`; approval words to `ads-desk-standup` | Approval words map to D8; only a tick or an approvals row changes state |
| 202 | `[S76,S77,S78+CG]` A5.8 | Research order: client site, fanpage and public ad library, industry groups, Google Maps, Zalo OA, then the registration portal; record only the fields shown free that day; no decree number; LinkedIn read only; never buy phone lists | ADOPT, narrowed by D13 | `ads-account-intake` | Terms re-opened: Meta, Google and Zalo surfaces of third parties are not collected by a routine; the member looks and pastes. Portal: one look up of the member's own record |
| 207 | `[CG]` A5.9 | Urgent alerts on Zalo to the owner's chosen chat, a time window, the person on duty calls up to three times; night message only over 150 percent of the daily cap | DEFER; REJECT the automated Zalo part (D10) | `ads-account-read` (flags payment restriction, daily spend over the approved cap, ad rejected for a banned category), `ads-desk-standup` (top of brief) | Clock windows only in `SCHEDULE.md`; `notify.push` keeps its cases |
| 212 | `[S52]` A5.10 | Daily Zalo text up to 30 lines, VND and orders; weekly longer text or a Sheet; monthly one to two pages; no 1,280.40 decimals | WORDING | `ads-desk-standup`, `ads-change-list`, `ads-creative-retro` | S52 supports only Looker; the 30 line cap is already the original's |
| 217 | `[S70+CG]` A5.11 | AI authority 0 đ: never creates, enables, raises or changes a card; people pause only above 150 percent of the approved daily budget or on payment restriction and report within 30 minutes; every raise and new campaign needs the owner's "ok" that day | ADOPT (AI 0 đ in `advise`); DEFER (human pause trigger) | CONTRACT.md section 7 variant wording, `ads-build-desk`; trigger to `ads-account-read`, `ads-desk-standup` | **Lead decision needed**: the original lets `ads-build-desk` publish where `RELEASES.md` names the channel. This owner approved rule narrows that for the Vietnamese variant; RELEASES.md is never edited |
| 222 | `[S23,S25,S47 to S51]` A5.12 | Ask which sales software the owner uses; never assume one | ADOPT | `ads-account-intake`, `CAPABILITIES.md` | No prices enter |
| 227 | `[S29,S30]` A5.13 | Alert the one person in the profile; no group message carrying card balance or customer phone; never ZNS or OA broadcast for internal alerts; no customer files | DEFER | `ads-desk-standup`, `CAPABILITIES.md` (`brief.deliver` note) | Re-opened. Reminder cadence rests on 207 `[CG]` |

Row count: 19 table rows plus 13 answers = 32 (13 ADOPT, 5 MOVE, 6 KEEP, 4 UNVERIFIED, 3 DEFER, 1 WORDING).

### A6. Absolute prohibitions

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 235 | `[S9]` | Never write copy, a build sheet or a proposal for products banned from advertising: tobacco, alcohol of 15 degrees or more, breast milk substitutes for children under 24 months, prescription drugs, even with documents | ADOPT, qualitative | CONTRACT.md (variant, shared refusal), `ads-account-intake`, `ads-creative-studio`, `ads-build-desk`, `ads-change-list` | Re-opened. Fines stay out (D11) |
| 236 | none | Never enable, raise, change card or top up on an urgent message without a separate confirmation of the exact amount | KEEP | Guardrail 1 | Already held |
| 237 | `[S1,S9,S10,S15+CG]` | Never write or keep superlatives, cure promises, weight or disease claims without documents on file; Meta bans body shaming, fat pinching close ups, results from a worn product alone | ADOPT | `ads-creative-studio`, `ads-creative-retro`, `ads-build-desk`, `ads-account-intake` (`plan/voice.md`) | Re-opened (S10 via substitute) |
| 238 | `[S12,S13]` | Never upload customer phone files to custom audiences or turn on phone sending by CAPI without a consent basis | ADOPT | `ads-build-desk` (audience sheets), `ads-account-intake` (`## What is not measured`), CONTRACT.md | Re-opened |
| 239 | none | Never ask for, store or type the owner's passwords | KEEP | Guardrail 2 | Already on |
| 240 | `[S5,S6,S7,S8]` | Supplements, OTC drugs, medical services, children's nutrition, medical devices: no copy without the content confirmation or mandatory information; cosmetics must not imply a drug and use no doctor image | ADOPT, qualitative | `ads-creative-studio`, `ads-build-desk`, `ads-account-intake` | Re-opened. Dates and the 10 day handling time stay out |
| 241 | `[S30]` | Never self send bulk OA messages or message customers from ad data | KEEP | Guardrail 1 | Kit sends nothing |
| 242 | `[S12]` | Never put customer phone, address, revenue or bill photos into a Zalo group with outsiders | ADOPT | `ads-desk-standup` (brief and `ads-latest.md` carry no customer data), CONTRACT.md | Re-opened |
| 243 | `[S15,S17]` | No before and after body images, fat pinching, customer photos without written consent; TikTok bans "the product alone makes you lose weight" | ADOPT | `ads-creative-studio`, `ads-creative-retro` | Re-opened |

### A7. Install information

| Line | Marker | Clause | Decision | Target | Reason |
|---|---|---|---|---|---|
| 250 | `[S76+CG]` | Legal name, enterprise code, main line, legal representative, matching the portal; do not run if dissolved or suspended; household business: household or personal name and tax code, and no enterprise code is not a reason to stop | ADOPT | `ads-account-intake`, `INSTALL-PROMPT.md` | Re-opened S76, S77 |
| 251 | none | Admin table for BM, page, ad account, OA | KEEP | covered by 167 | Same content as the ADOPTed A5.1; no second change |
| 252 | none | Monthly and daily caps in VND; hard or average (hard by default); missing reads "chưa chốt" and no enabling proposal | KEEP; UNVERIFIED (hard by default) | `## Monthly ceiling`, `## Daily cap` | Inherited: never derived, missing refuses |
| 253 | none | Closing model per product group | KEEP | covered by 99 | |
| 254 | none | Sales software and which statuses count as real orders; none means cost per order is n/a | KEEP | covered by 100 | |
| 255 | `[S53]` | Delivery area after the 2025 reorganisation; no old district names | ADOPT | `ads-account-intake`, `ads-build-desk` | Re-opened |
| 256 | `[S6]` | Products allowed and banned; content confirmation for special categories; no supplement copy without it | ADOPT | `ads-account-intake`, `ads-creative-studio`, `ads-build-desk` | Re-opened |
| 257 | none | Address, brand banned words, Zalo recipient, callable hours; default "em" to the owner, "anh" or "chị" per profile | WORDING | owner facing templates | STYLE-VI already says this; recipient and hours fall under D10 |
| 258 | none | Currency and payment method per account; reports in VND with rate and date for USD accounts | UNVERIFIED | report | Unmarked conversion rule |
| 259 | `[S21]` | Assumed refusal and return rate until real; never invented; without it subtract per order status, not an industry rate | ADOPT | `ads-account-intake`, `ads-account-read` | Re-opened |

## Adopted and deferred rows by target (for the routine writers)

| Target | Rows |
|---|---|
| `ads-account-intake` | ADOPT 99, 100, 102, 105, 106, 146, 147, 149, 154, 167, 172, 182, 187, 202, 222, 235, 237, 238, 240, 250, 255, 256, 259; DEFER 68 |
| `ads-account-read` | ADOPT 85, 99, 100, 105, 128, 146, 148, 167, 177, 259; DEFER 207, 217 (trigger) |
| `ads-creative-studio` | ADOPT 106, 235, 237, 240, 243, 256; DEFER 70, 177 (specs), 197 |
| `ads-build-desk` | ADOPT 102, 106, 147, 154, 217, 235, 237, 238, 240, 255, 256; DEFER 135 |
| `ads-change-list` | ADOPT 85, 99, 100, 103, 128, 148, 172, 177, 182, 235 |
| `ads-creative-retro` | ADOPT 85, 103, 106, 148, 177, 237, 243 |
| `ads-desk-standup` | ADOPT 100, 103, 242; DEFER 197 (approval words), 207, 217 (trigger), 227 |
| `SCHEDULE.md` | MOVE 69 (candidate `mon-fri, sat` for `ads-account-read`) |
| `CAPABILITIES.md` | ADOPT 146, 148, 149, 187, 222; MOVE 152, 157, 158, 159, 161; DEFER 227 |
| `CONTRACT.md` (variant) | ADOPT 167, 217, 235, 238, 242. Three or more routines share 106, 235, 237, 240: Gate 8 candidate for one shared Vietnamese advertising refusal |
| `INSTALL-PROMPT.md` | ADOPT 250 |

## Kept out of the kit (D11 and the rule about numbers)

Fines (10 to 20 million đ, 50 to 70 million đ, double for organisations), the TPBVSK handling time, effective dates, Zalo message prices and caps, the OA broadcast window, vendor prices, user counts (Zalo 79,6 million, Cốc Cốc 30,6 million), COD and refusal rates, the 80 percent channel share, Shopee bid figures. Candidates for one shared dated Vietnam rules file at Gate 8, as in `chief-of-staff-vn`.

## Open for the lead

1. A5.11 (217): the variant narrows the release mechanism to 0 đ AI authority. Confirm before any writer edits CONTRACT.md section 7 or `ads-build-desk`.
2. A2 69: Saturday run of `ads-account-read` needs a `SCHEDULE.md` change and a matching read by `ads-desk-standup`.
3. D13: Meta, TikTok, Shopee, Zalo and LinkedIn forbid automated collection; Shopee also forbids manual monitoring of its content. `ads-account-intake` research must use only the member's own accounts plus what the member pastes.
4. `copy-check.mjs` catches no "đ" amount (currency patterns are $, £, €, ¥ and English words), so Vietnamese money in owner text is not checked. Known gap under D6.
