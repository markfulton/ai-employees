# web-inventory-refresh: provenance ledger

Status on 24/09/2026: **ledger complete, Gate 2 sources re-opened, routine edited in the variant only, routine checker PASS with no warning.** Independent review FIX findings applied the same day, two heading renames declined and filed as pending requests (see Files and checks, Review fixes). Shared file changes are requests below; this writer edited no shared file.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/01_Web-Dev/phieu-da-dien.md`, `## B-1. web-inventory-refresh`, form lines 257 to 525. B0 box ticked: Làm khác.
- Extract: `extract_form_section.py --routine web-inventory-refresh`, kept at `scratchpad/vn/web-dev-employee-vn/web-inventory-refresh-extract.md` and `.json`. 134 rows and answers: 30 with `[S#]`, 16 with `[CG]`, 6 with both, 94 unmarked (of which 25 are the form's own instruction prose or table headers and carry no content).
- Form author (A1): an AI sub agent playing a Web Ops practitioner, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs websites for Vietnamese businesses.** `[CG]` marks are the owner's review decisions, not a domain expert's (Phần A ledger rows 1 and 2).
- Original kit and routine: `employees/web-dev-employee/routines/web-inventory-refresh/SKILL.md`, 773 lines, 67574 bytes, untouched.
- Variant kit and routine: `employees/web-dev-employee-vn/routines/web-inventory-refresh/SKILL.md`, 971 lines, 99846 bytes after the review fixes of 24/09/2026 (98371 bytes before them), 148 percent of the original, under the 150 percent warning line.
- Source index: `01_Web-Dev/literature/nguon.md`, viewing date 23/09/2026 for every row. Phần A decisions cited by row number from `_shared/phan-a-ledger.md`, never re-decided.
- Kit version before: 1.8.1. After: set once by the lead for the whole kit (D14).
- Schedule row read: `web-inventory-refresh | first-weekday | 11:45 | 11:30 | 16:00 | YYYY-MM | 45 min | light`. Unchanged.

## Sources re-opened

Gate 2 covers sources behind an ADOPT or MOVE row here that state a law, a number or a platform rule and that the Phần A ledger did not already verify. Every other source cited below was verified in the Phần A ledger on 24/09/2026 (S1, S7, S8, S9, S10, S21, S33, S36, S43, S44, S45, S46, S47, S52, S53, S54, S55, S58, S63).

| Source | URL | Date checked | Claim checked | Verdict |
|---|---|---|---|---|
| S55 VinaHost, Quy định sử dụng tên miền .VN | https://vinahost.vn/quy-dinh-su-dung-ten-mien-viet-nam/ | 24/09/2026 | Some suffixes are reserved to one kind of holder (B9 460); the registrar authenticates the registrant | Confirmed: "ID.VN: chỉ dành cho cá nhân là công dân Việt Nam đăng ký"; ORG.VN and GOV.VN restricted; registrar must "Tiếp nhận, xác thực thông tin chủ thể đăng ký sử dụng tên miền". Lifecycle text matches the Phần A reading |
| S54 Mắt Bão, bảng giá tên miền | https://www.matbao.net/ten-mien/bang-gia-ten-mien | 24/09/2026 | Whether the price page states .id.vn eligibility (B9 460) | Not on this page. It lists .vn and .com.vn as separate items with separate prices, which supports only "two names, two items". Eligibility rests on S55 alone |
| S38 Nghị định 248/2026/NĐ-CP, văn bản gốc | https://vanban.chinhphu.vn/?docid=218747&pageid=27160 | 24/09/2026 | A selling site's notification must be amended after a domain change (B10 475, Câu 11) | The official page gives number, issue date 30/06/2026 and effect 01/07/2026 only; the body is a signed PDF the fetcher could not read |
| S38 alternative, LuatVietnam full text (found by WebSearch) | https://luatvietnam.vn/thuong-mai/nghi-dinh-248-2026-nd-cp-quy-dinh-chi-tiet-luat-thuong-mai-dien-tu-2026-439480-d1.html | 24/09/2026 | Same | Confirmed: Điều 23, a direct sales platform with online ordering amends its notification "trong thời hạn 20 ngày làm việc kể từ ngày thay đổi" when it changes "tên nền tảng (tên miền website, tên ứng dụng)". The transitional clause for sites notified under Nghị định 52 was **not found** on this page; it stays UNVERIFIED |

Not re-opened, because no ADOPT or MOVE here rests on them alone: S3 (S55 carries the holder verification clause), S11, S12 (S8 and S9 already carry the laws in force), S20, S27 (webhook clause deferred), S28, S29, S34, S35, S49, S50 (their rows are deferred or rejected here), S26 (verified in Phần A, clause deferred).

## Clause decisions

Markers are the form's. "Phần A rN" cites the shared ledger row that already decided the matter.

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 264, 265, 271, 280, 298, 300, 331, 333, 344, 346, 371, 373, 391, 392, 399, 406, 413, 420, 439, 451, 453, 469, 471, 485, 487, 503, 514: form instructions, table headers, box ticks | none | KEEP (no content) | none | Instruction prose of the form itself |
| 267 B0: the Vietnamese equivalent is a web asset register, one row per site, with holder, registrar, expiry, nameservers, host, SSL, log place, login holder, spender, policy page, e-commerce status | `[S36,S46,S47]`; S46, S47 support the no source platforms, S36 the Saturday | ADOPT (fields) | Steps A4b, A4e, A5 JSON and owner summary | Fields carried by Phần A r31, r56, r14, r86; the "Sheet" delivery is a vendor and stays out |
| 267 B0 point 1: many sites have no Git, lockfile or build | `[S46,S47]` | ADOPT | Step A3 `source_kind` table, Step A7 items 1 and 2 | Phần A r51, r66, r87 |
| 267 B0 point 2: Vietnamese registrars read on the web interface, no API assumed | `[S46,S47]` do not support it | KEEP | Step A4 browser lane | The original already reads the registrar through the browser lane where no API exists |
| 267 B0 point 3: the working week may include Saturday morning | `[S36]` | ADOPT | Step A6 new paragraph | Carried in the member's `## Working days and hours` lines, never a new `days` value |
| 267 B0 point 4: record .vn, e-commerce and personal data duties | `[S46,S47]` do not support it; carried by Phần A r12, r14, r86 | ADOPT | Step A4e | Qualitative record only |
| 267 B0 point 5: no Markdown board on the site server as the member's channel | none | KEEP | none | The kit never writes to a site server; the board is in `«WEB_ROOT»` |
| 273 B1: register reconciled with the panel, every field filled or "chưa xác minh" with the person to supply it; no password, key, full identity number | `[CG]` | ADOPT | What you never write (identity line), Step A7 item 1 and 6, the gloss `n/a (not readable) chưa xác minh` | Owner approved |
| 273 B1: within 7 days | `[CG]` | KEEP | none | Every value is read in the run that writes it; the monthly row satisfies it |
| 275 B1: technical owner keeps the full register; owner gets a 12 column Vietnamese summary by chat link and Drive | none | WORDING | Step A5 owner summary shape | The 12 columns themselves carry `[CG]` at 519; delivery channel names stay out |
| 276 B1: success measures (10/10 fields, 8/10 hosts by evidence, 0 passwords, every nameserver change caught) | none | KEEP | Step B1 table row on nameservers | Nameserver re-read is inherited; the rates are acceptance ideas, not kit rules |
| 277 B1: bad output (expiry by adding a year, "chắc là" host, password in notes) | none | KEEP | The rule about numbers | Already refused by the original |
| 282 B2: event triggers | none | UNVERIFIED | report | The kit has no event trigger; see Câu 1 |
| 284 B2: first working day, 09:30, done the same day, 15 sites | none | UNVERIFIED | report | Unmarked B2 clock time never moves a row |
| 285 B2: five ways people ask | none | EXAMPLE | Acceptance section | Presentation only |
| 286 B2: new site draft in 2 working days, full in 5; monthly done before 17:30; ad hoc within 4 working hours | `[CG]` | KEEP (schedule) and REJECT (event deadlines) | `SCHEDULE.md` unchanged | Row fires 11:45 with a 45 minute budget, so the run ends well before 17:30. The kit runs only on its row, so on demand deadlines have no carrier |
| 287 B2: done when every site is complete or has a question to a named person, due in 3 working days; never "em sẽ kiểm tra thêm" without listing what is missing | `[CG]` | ADOPT | Step A7 items 1 and 6 (`due` three working days out on `## Working days and hours`, names the role) | Owner approved; `due` already exists on a card |
| 288 B2: remind after 2 working days, at most 3 times by chat, third says the risk sits with the account holder; no weekend reminder unless expiry within 7 days | `[CG]` | DEFER | `web-standup` | This routine sends nothing and has no daily run; D9 and D10 bind the brief |
| 289 B2: not for fixing, renewing, DNS changes; down site to B-2; 45 days or less to B-5; plugin updates to B-4 | none | KEEP | Guardrail 1, hand off section | Same boundaries as the original |
| 294 Câu 1: cadence first working day at 09:30 | `[S1,S20,S33,S34,S35,S52,S55+CG]`; no source supports a clock time, `[CG]` does | REJECT (row move), retained as proposal | report | 09:30 plus the 45 minute budget plus 20 minutes is 10:35, past the Monday `web-platform-guard` fire of 10:30 on a first Monday. `SCHEDULE.md` section 4.2 says to move this routine later, never to shorten the guard. The purpose, a same day run while accounting can approve spending, holds at 11:45 |
| 294 Câu 1: 45 minutes for under 5 sites, 90 for 6 to 15 | `[CG]` | KEEP | none | Phần A r3: human durations, not the row `budget` |
| 294 Câu 1: immediate checks on registrar request, staff or agency leaving, hosting expiry mail, Search Console security issue, 14 days before a September to December sale, Tết schedule set, CDN or cable incident with a temporary DNS change | `[S1,S20,S33,S34,S35,S52,S55+CG]` | DEFER | `web-platform-guard` (weekly registrar state and security issue read), `web-standup` (sale and Tết lines) | The closed `days` vocabulary has no event trigger; the weekly guard is the nearest carrier. Phần A r19, r22, r36 already place freeze and trust checks |
| 302 B3: domain from the address bar, then DNS and registrar; never from a brochure | none | KEEP | Step A4b, A4d | Inherited: read, never assumed |
| 303 B3: expiry and .vn state from each domain's detail screen; WHOIS only to cross check; never registration plus one year | none, carried by Phần A r63 `[CG]` | ADOPT | Step A4b expiry paragraph | Phần A r63 |
| 304 B3: nameservers from the registrar; view only, never press edit because of OTP | `[S43]` | ADOPT | Step A4 "Three screens you never open" first bullet | S43 confirmed in Phần A |
| 304 B3: never assume a CDN from a response header | `[S43]` does not support it; `[S33]` at 362 and 425 does | ADOPT | Step A4d "These are not evidence" | Supported by S33 |
| 305 B3: host from panel or platform admin, evidence IP, account, handover document; leave "chưa gắn" | none | KEEP | Step A4d | Inherited bind on evidence rule, wording via Câu 5 |
| 306 B3: SSL from the padlock and the panel; never "free so no need" | none | KEEP | `hostnames[].certificate_expires_on` | Inherited |
| 307 B3: holder from registrar record, tax id check; never change the holder | none | KEEP and ADOPT | Step A4b `legal_holder` | Holder field from Phần A r31; tax id matching unmarked, not adopted |
| 308 B3: Git if any, else "file trên hosting" or "SaaS không có mã"; never create a repo | none, carried by Phần A r87 | ADOPT | Step A3 `source_kind` | Phần A r51, r66, r87 |
| 309 B3: spender and ceiling from contract or director's message; default ceiling 0 | none | KEEP | Guardrail 1 | The kit never spends; Phần A r83 |
| 311 B3: images, voice, stickers, zip, .env: image dates with a source line; blurred image no date; voice not evidence; never unzip; .env names only | none | KEEP and ADOPT (part) | The rule about numbers (message, voice, picture line); Guardrail 2 | Picture never the value rests on 348 `[S55+CG]` below; .env names only is Guardrail 2 |
| 317 Câu 2: five day order of work, six fixed questions, never press save, compare DNS with host, database only at "same host" level, stop without a login, never ask a password by chat | `[CG]` | ADOPT (roles, database level) and KEEP (rest) | Step A2 `inventory/handover.md`, Step A4c paragraph, Step A10 | The six questions become the handover file the member fills, because the original asks exactly one question; never asking for a password is Guardrail 2 |
| 317 Câu 2: 4 to 8 hours per messy site | `[CG]` | KEEP | none | Human time, Phần A r3 |
| 322 Câu 3: secret names only, never values | `[S26,S27,S47]` | KEEP | Guardrail 2, Step A4a | Inherited |
| 322 Câu 3: payment plugin key present or empty; webhook URL and on state; platform private app name and scope | `[S26,S27,S47]` | DEFER | `web-site-sweep` (webhook path), handover file for platform apps | Phần A r17, r67 place webhook health in B-2; the platform admin is not driven (D17) |
| 327 Câu 4: assigned person's locked machine; browser, spreadsheet, uptime tools; no strange export plugin | `[S28,S53+CG]` | KEEP | Guardrail 1, Forbidden dependencies | Routes already MOVED by Phần A r65 |
| 327 Câu 4: 09:30 to 11:30 review hours; 08:00 reading; no export in 12:00 to 13:30 or 20:00 to 22:00 livestream hours | `[CG]` | UNVERIFIED and KEEP | report | Clock times never enter a SKILL.md; the routine never exports a database |
| 335 B4 step 1: record each URL's status and final URL, try www and bare | none | UNVERIFIED | report; proposal for `web-site-sweep` | Unmarked; `http.probe` already reads the final URL in the sweep (`web-site-sweep` 260 to 268), and Step A4a records both hostname forms where the host lists them, so B11 case 4 passes without a new clause |
| 336 B4 step 2: four roles, "chưa biết" per role | none, carried by Phần A r31 | ADOPT | Step A2 handover template, Step A4e last paragraph, Step A7 item 6 | Phần A r31 |
| 337 B4 step 3: detail screen, exact expiry, state and nameservers; never save, renew, unlock; no DNS edit screen | `[S43]` | ADOPT | Step A4 bullets, Step A4b | S43 confirmed |
| 338 B4 step 4: host by evidence, never "Cloudflare means Cloudflare hosting" | none, `[S33]` at 362 | ADOPT | Step A4d evidence list | Via Câu 5 |
| 339 B4 step 5: SSL issuer, expiry, auto renew; log and backup place; certificate date is not the domain date | `[S63]` | ADOPT (backup retention) | Step A4a backup paragraph | S63 confirmed; retention from the member's contract or the exact plan page, else "chưa xác minh" (Phần A r64) |
| 339 B4 step 5: the Vietnix 7 day retention figure | `[S63]` | REJECT from kit text | report | A provider figure is not the member's plan; D11 keeps numbers out |
| 340 B4 step 6: seller identity, prices, returns, data policy present; .vn suffix fits its holder; yes, no or not read with a date | `[S9]` | ADOPT | Step A4e table, Step A4b suffix bullet | S9, S10 via Phần A r14; suffix rule by S55 re-opened |
| 341 B4 step 7: 12 column Vietnamese summary, dd/mm/yyyy, under 30 lines, a person approves and sends | none, the summary carries `[CG]` at 376 and 519 | ADOPT | Step A5 owner summary | Carried by 376 and 519 |
| 348 B5: no registrar login, no expiry date; question card due in 3 working days | `[S55+CG]` | ADOPT | Step A7 item 1; rule about numbers | S55 confirmed lifecycle; `[CG]` for the rule and the 3 days |
| 349 B5: two sources disagree, keep the detail screen, record the other | none, `[CG]` at 459 | ADOPT | Step A4b | Via 459 and Phần A r63 |
| 350 B5: .vn over 45 days and no registrar notice: record, no spend warning | `[CG]` | KEEP | Step A7 item 3 | The original cards only inside the warning window |
| 351 B5: .vn 45 days or less, or suspended: hand to B-5 the same day | `[S1,S55+CG]` | ADOPT (suspended); 45 day window ADOPTED by integrator from deferral, see From deferrals rows `web-platform-guard` 1381 and `web-standup` 2022 | Step A4b `registry_state`, Step A7 item 3; Step A6 template line `.vn domains: 45 days` | Suspension confirmed by S1, S55. The 45 day window is a separate `.vn domains` line, so the `domains: 30 days` line for every other name is unchanged |
| 351 B5 reason: only 30 days to pay before revocation | `[S1,S55]` | KEEP out of kit text | report | D11: no legal day count in a kit file |
| 352 B5: host unproven, leave the provider empty | none | KEEP | Step A4d | Inherited |
| 353 B5: "just write it, fix later": refuse the number, quote the words as "lời kể, chưa đối chiếu" | none | ADOPT (wording) | The rule about numbers, fourth new bullet | The refusal is inherited ("every value was read"); the Vietnamese label is presentation |
| 354 B5: a renewal cost only from the registrar's own price list or invoice with the date; one registrar's price is not another's | `[S54]` | ADOPT | Step A5 `renewal_seen[]` paragraph; rule about numbers | S54 confirmed |
| 354 B5: the Mắt Bão .vn and .com.vn prices seen 23/09/2026 | `[S54]` | REJECT from kit text | report | A real price never enters a kit file |
| 356 B5: which rule wins; unknown payer at expiry goes to the director in 4 working hours | none | KEEP and UNVERIFIED | Guardrail 1 wins; report for the 4 hours | Push cases are closed in `CONTRACT.md` section 9 |
| 362 Câu 5: four kinds of binding evidence; near match and sales mail are not; undetermined behind a CDN without origin | `[S33]` | ADOPT | Step A4d | S33 supports the CDN clause; the other three kinds are the original's "host project lists it" and "hostname" evidence restated for sites with no repository |
| 367 Câu 6: uptime tools and cycles | `[S28,S29]` | KEEP | none | Phần A r4, r65 moved routes |
| 367 Câu 6: 99,5 percent internal target, under 99 needs an explanation | `[CG]` | DEFER | `web-weekly-report`, `web-site-sweep` | This routine sets no uptime figure; the original forbids a general number as a budget |
| 367 Câu 6: provider SLA is not the site's figure; lab score is not field data; not enough CrUX days means "chưa đủ dữ liệu" | `[S49,S53]` | ADOPT | The rule about numbers, advertised uptime bullet | S49, S53 confirmed in Phần A; Phần A r80 |
| 367 Câu 6: Core Web Vitals thresholds as budgets | `[S53]` | REJECT | report | "Never copy one from a general recommendation" governs `## Performance budgets` |
| 375 B6: read panels, WHOIS, certificates, write the register; at most 20 sites; never press Save, Renew, Delete, Unlock | none | KEEP | Guardrail 1, Step A4 | The discovery cap already bounds the count |
| 376 B6: the owner summary is drafted, a person approves and sends; at most one message a day, under 30 lines | `[CG]` | ADOPT | Step A5 owner summary; What you write row | Owner approved; D10 |
| 377 B6: write a renewal amount only from the page in the session, with link and date | none | KEEP | carried by 354 | |
| 378 B6: renew, upgrade, change holder or nameserver, unlock: always a person, even under 500.000 đ; never read an OTP | `[S43,S45]` | KEEP and ADOPT (OTP) | Guardrail 1; Step A4 one time code bullet; Failure table login row | Amount stays out of the kit |
| 379 B6: never create a repo or export a database | none | KEEP | Step A3, Step A4c | Inherited and Phần A r87 |
| 381 B6: handover contents to a person, "AI chưa bấm gì" | none | WORDING | Step A7 item 7 ("you unlocked, transferred, and changed nothing") | Presentation |
| 387 Câu 7: read only accounts; no DNS edit screen because of OTP | `[S43]` | ADOPT | Step A4 bullets | S43 confirmed |
| 387 Câu 7: no auto renew, no card saved, no upgrade in a pop up; phpMyAdmin only with an incident | `[S43]` does not support these; Guardrail 1 does | KEEP | Step A4 pop up sentence restates Guardrail 1 | Inherited |
| 387 Câu 7: log out after each session; change a shared password within 24 hours of a departure | none | REJECT and DEFER | report; `web-platform-guard` | Logging out breaks the shared browser session other routines use; a password change is the member's (Guardrail 2) |
| 394 to 397 B7 good example 1, with the ND 248 line | `[S38]` on 396 | EXAMPLE | Step A5 fictional owner summary | No decree number enters the kit |
| 401 to 404 B7 good example 2 (Sapo URL, unverified) | none | EXAMPLE | Step A10 empty date line | Presentation |
| 408 to 411 B7 good example 3 (holder is a person, invoice only to the holder) | `[S58]` on 410 | ADOPT (card) and EXAMPLE | Step A7 item 7 | S58 confirmed for iNET only; worded "some registrars" |
| 415 to 418 B7 bad example 1 (invented expiry, password, self renewal) | `[S54]` on 418 | KEEP | Rule about numbers; Guardrails | |
| 422 to 425 B7 bad example 2 (CDN as host, nameserver changed, WHOIS date) | `[S33]` on 425 | ADOPT | Step A4d, Step A4b | S33 confirmed |
| 430 Câu 8: fields per site type; always keep domain, final URL, host, certificate, log place, login holder, spender; add PHP and WordPress versions, paid plugins, backup path; add plan, system domain, payment apps for SaaS; add holder, registrar, nameserver, .vn state, policy page, invoice name | none | ADOPT (part) and UNVERIFIED (part) | Step A5 JSON (fields already carried by Phần A rows); report for version and plugin fields | Only fields with a Phần A or B marker are added |
| 435 Câu 9: twelve columns in order, dd/mm/yyyy, money with đ and "giá niêm yết", no repo words, phone, link, PDF, no Markdown | none | WORDING | Step A5 owner summary | The twelve columns are `[CG]` at 519; the order and wording are presentation. "Trong 30 ngày" became "Việc cần người làm" because the window lives in `policy/budgets.md` |
| 441 to 448 B8 voice, length, abbreviations, numbers, banned phrases, sample lines, channels | none | WORDING | Step A5 example, Step A10 | STYLE-VI.md; the sample closing line is used verbatim |
| 455 B9: .vn expired and suspended; tell the director in 4 hours; 30 days to pay, no redemption; never pay | `[S1,S7,S55]` | ADOPT (qualitative) | Step A4b, Step A7 item 3, The one push (existing case) | Confirmed; the day count stays out (D11); 4 hours has no carrier beyond the existing push |
| 456 B9: holder is an agency or a departed person: record the risk, list what to do, never unlock or transfer | `[S45,S58]` | ADOPT | Step A4e last paragraph, Step A7 item 7 | Phần A r31 |
| 457 B9: registrar asks for identity or tax papers: the representative submits; AI never receives the ID image | `[S44]` | ADOPT | What you never write, Step A4b papers bullet, Step A7 item 8 | S44 confirmed |
| 458 B9: two sites on one host, one infected: record both flagged, delete nothing during the inventory | `[S21,S52]` | ADOPT | Step A4a `shares_host_with[]` | S21, S52 confirmed |
| 459 B9: panel and WHOIS differ over a day: trust the detail screen, record the difference, never average | `[CG]` | ADOPT | Step A4b | Owner approved, Phần A r63 |
| 460 B9: Vietnamese or new suffix: record the exact suffix, check eligible holder, never switch to .vn | `[S54,S55]` | ADOPT | Step A4b suffix bullet | S55 re-opened and confirmed; S54 only supports separate items |
| 465 Câu 10: four ownership patterns; worst is a departed holder with the second factor on their phone and an urgent nameserver change; detect at intake | `[S21,S45,S58+CG]` | ADOPT | Step A4e last paragraph, Step A7 item 7 | Confirmed and owner approved |
| 473 B10: Nghị định 147/2024 lapse and revocation | none on the row; S1 and S55 on other rows | KEEP out of kit text | report | Qualitative rule already adopted at 455 |
| 474 B10: Thông tư 48/2025, registrar verifies holder, suffix fits holder | none | KEEP | Step A4b suffix bullet rests on S55 | S3 not re-opened |
| 475 B10: Luật TMĐT 122/2025 and Nghị định 248/2026; record notification status, body, date; amend within 20 working days after a domain change; never file | none on the row; `[S9,S38]` on 481 | ADOPT (qualitative) | Step A4e `notification_status` and the domain change card | S38 re-opened via LuatVietnam: Điều 23 confirmed; the 20 days stay out (D11) |
| 476 B10: Luật BVDLCN in force 01/01/2026 and Nghị định 356/2025; no customer data in the register; policy page yes or no; no ID images | none on the row; `[S8]` on 481 | ADOPT | Step A4e `privacy_page`; What you never write | S8 confirmed in Phần A |
| 481 Câu 11: four checks, yes, no or not read with a date, in a "Pháp lý" tab of the same register | `[S1,S3,S8,S9,S11,S12,S38,S50,S52,S55]` | ADOPT (checks 1 to 3) and DEFER (check 4) | Step A4e; `web-platform-guard` for trust label and Search Console | Phần A r22 already places the trust lookup in the weekly guard |
| 481 Câu 11: Nghị định 52 records need a legal person to check transition | `[S38]` | UNVERIFIED | report | Transitional clause not found on the re-opened page |
| 489 to 500 B11 cases 1 to 12 | case 7 `[S58]`, 8 `[S44]`, 9 `[S1,S7,S55]`, 12 `[S49,S53]` | acceptance | Acceptance section | |
| 505 to 511 B12 self checks | none | KEEP | Close out invariants 2 and 4; Step A5 summary last line | Covered by adopted rules |
| 516 B14: remember registrar, suffix, holder, host, Git, call hours, ceiling, sale dates, chat group, unverified cells | none | KEEP | `inventory/projects.json`, handover file, `## Working days and hours` | Carried by existing files; nothing new in state |
| 518 B14: record time seen, viewer, screen URL, old and new values, handed over items; no password | none | KEEP | `inventory/CHANGELOG.md` evidence line | Inherited |
| 519 B14: 12 column summary after each monthly pass; suspended .vn reported at once; holder mismatch or 45 days reported within 4 hours | `[CG]` | ADOPT (summary, suspended card) and KEEP (push) | Step A5 owner summary; Step A7 items 3 and 7; The one push unchanged | Push cases closed; delivery by a person (D10); the day count in the clause stays out |
| 524 Câu 12: phone, chat group, short message plus spreadsheet link; PDF from the same table; resend 5 lines after 2 weeks unread | `[CG]` | WORDING and REJECT (resend) | Step A5 owner summary | No route reads whether a link was opened; a resend is an outbound message |

Counts over 96 ledger lines, each decision word counted where a line carries two: ADOPT 43, KEEP 37 (including the no content line), DEFER 7, REJECT 7, UNVERIFIED 7, WORDING 5, EXAMPLE 4, MOVE 0, acceptance 1.

### From deferrals (integrator, 24/09/2026)

Outbound deferrals other routine writers aimed at this routine, applied by the integrator under the same editing rules (Step 0, guardrails, parsed strings and `## Corrections` untouched; nothing shortened). Each row is noted "from deferral". Routine checker after these edits: see the report `README.md`.

| Source routine, form line and marker | Clause | Decision | Exact target | Reason |
|---|---|---|---|---|
| `web-dependency-run` 1152 `[CG]`, 1147 | Record each project's kind and, for a CMS, its updates screen | ADOPT, from deferral | Step A3, the `project_kind` table; `inventory/handover.md` section `## Thông tin thêm từng website`; `CONTRACT.md` 10.2 | Owner approved. Recorded only on evidence (host panel application list, repository, `platform-no-source`, or the member's line); absent otherwise, which `web-dependency-run` reads as the original rule |
| `web-dependency-run` 1139 `[CG]` | Default sale days 09/09, 10/10, 11/11, 12/12 when the business set none | ADOPT in part, from deferral | Step A7 item 9: one `research` card asking the member | The card half only. Writing `sale days (proposed, not confirmed)` into `## Working days and hours` is declined: it contradicts the same writer's `CONTRACT.md` request that no routine supplies a date the member did not write, Phần A row 19, and `web-fix-runner` treats an unreadable freeze line as a freeze in force |
| `web-dependency-run` 1126, 1157 `[CG]` | Hours in which the person on duty may press an urgent update | ADOPT, from deferral | Step A6 list of line kinds under `## Working days and hours`; `INSTALL-PROMPT.md` `FILL THIS IN` line 7 | Member written, carried verbatim; no clock time in the routine |
| `web-dependency-run` 1157 `[CG]` | Staging only when the member names one | ADOPT, from deferral | Step A3 bullet "A staging environment" | Never created, never proposed for purchase |
| `web-fix-runner` 891, 923 `[CG]` | Never delegated: payment, orders, bulk prices, main config, rewrite rules, DNS, installs, SQL, restore over production | ADOPT, from deferral | Step A6 `policy/safe-fix-rules.md` seed, never tuneable block; the same lines in `web-guardrail-review` Step 5 and `INSTALL-PROMPT.md` Phase 4 step 6 | Narrowing only. Mirrored in the guardrail review template because its rule 5 rewrites the block in its own words every month, which would otherwise drop the seed. `content` stays at 12 lines (D18) |
| `web-fix-runner` 918 `[CG]` | Who may put a change live, per project, as a role | ADOPT, from deferral | Step A3 bullet `merge_role`; handover section; `CONTRACT.md` 10.2; `web-fix-runner` read row and Step 7b | Role, never a name; `null` where unnamed, and the runner falls back to the rule file |
| `web-guardrail-review` 1848 `[CG]`, 1853 `[S26,S43]` | Minimum per class; payment seeded off | ADOPT, from deferral | Step A6 `## Guardrail review` line `min_resolved_changes_to_widen: 8`; `payment   off` in the seed | S26 and S43 re-opened by that writer on 24/09/2026 |
| `web-guardrail-review` via `web-fix-runner` 830, 836 `[CG]` | The owner's monthly bar | ADOPT, from deferral | Step A6 `## Guardrail review` line `quality_bar:` | The bar's figures live in the member's file, never in the guardrail review's body |
| `web-platform-guard` 1381, 1402, 1466 to 1472 `[CG]` | Default window and reminder points per kind | ADOPT in part, from deferral | Step A6 template line `.vn domains: 45 days` | The `.vn` value is the one both this request and `web-standup`'s agree on. The certificate and plan lines contradict `web-standup`'s request (14 days for certificates), so the original `domains: 30 days` and `certificates: 14 days` stay; `web-platform-guard` Step 2 keeps its per kind defaults in words |
| `web-platform-guard` 1421 `[S44]`, 1574 `[S45,S58]` | Legal holder and payer per domain, as roles | KEEP, from deferral | Already in Step A4b and A5 (`legal_holder`, `roles{}`) | No change. `CONTRACT.md` 10.2 names this routine's field names; the guard's proposed `holder_role` and `payer_role` are not used |
| `web-platform-guard` 1381 `[S63+CG]` | Backup retention from the member's contract | KEEP, from deferral | Already in Step A4a (`backup_retention`) | No change |
| `web-platform-guard` 1574 none, Phần A row 23 | Who holds the phone that receives registrar codes | DECLINED, from deferral | none | The clause is unmarked. Phần A row 23 adopted the login holder as a role, which `login_holder` already records |
| `web-site-sweep` 536, 559 `[S36]` | Set the sweep row to `mon-fri sat` when the business opens Saturday | DECLINED, from deferral | none in this routine; `SCHEDULE.md` section 3 tells the member | `CONTRACT.md` 2.1 and this routine's own file map forbid it changing a `days` value. The member sets `mon-fri sat` in the one row, which the guard reads |
| `web-site-sweep` 578, 580, 582, 633, 591 `[S26][S27][S28][S29][S33][S52][CG]` | Declare the four added surfaces; keep the webhook out of `public_paths`; home and checkout first | ADOPT, from deferral | Step A3 bullet on the four log surfaces; handover `## Màn hình theo dõi`; Step A5 `public_paths` paragraph | Only from a screen of the member's own account read this run or the member's line; never a sign up. A path is taken out of `public_paths` on an open sweep `research` card, because this routine reads `board/board.json` and not the sweep's state |
| `web-site-sweep` 744 `[CG]` | Carry the member's maintenance windows | ADOPT, from deferral | Step A6 list of line kinds | Member written, carried verbatim |
| `web-standup` 1971, 1994, 2004 `[S36]` | Set the standup row to `mon-fri sat` | DECLINED, from deferral | none in this routine; `SCHEDULE.md` section 3 | Same reason as the sweep row |
| `web-standup` 2022 `[S55+CG]` | Three expiry lines: `.vn` 45, other 30, certificates 14 | ADOPT in part, from deferral | Step A6 template | `.vn domains: 45 days` added; the other two are the original lines |
| `web-standup` 1994, 2004 `[S35]`, 2009 `[S34]`, Phần A row 19 `[CG]` | Days off and freezes only from the member | KEEP, from deferral | Already in Step A6; `INSTALL-PROMPT.md` lines 4 and 5 | No change to the rule; the intake now asks |
| `web-weekly-report` 1708 `[S53]` | Offer field budgets with the Good boundaries | ADOPT, relocated, from deferral | `INSTALL-PROMPT.md` `FILL THIS IN` line 8 and Phase 4 step 5 | This routine asks one question on its first run and never copies a general recommendation into a budget, so the offer sits in the install intake and only the member's own values are written |
| `web-weekly-report` 1688, 1776 `[S34,S35]`, 1662 `[S36]` | Saturday, sale periods, peak season and days off lines | ADOPT, from deferral | Step A6 list of line kinds; `INSTALL-PROMPT.md` lines 3 to 5 | The peak season is written only where the member says it applies |
| `web-weekly-report` 1698 `[CG]` | No repository, no package manager: `null` | KEEP, from deferral | Already in Step A3 `source_kind` table | No change |
| integrator repair | Version check reads the English kit | ADOPT | Step B3a.1 URLs | Same defect `gtm-engineer-vn` 1.11.0 repaired (defect 11): the English `VERSION` would offer an upgrade that replaces the Vietnamese routines |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep byte for byte | none | none |
| The two guardrails, and the one question | Keep byte for byte | none | none; roles come from a file, not a second question |
| Your files | Localize | 267, 273, 317, 376, 457, 519 | Read row `inventory/handover.md`; write rows `inventory/owner-summary.md` and `inventory/handover.md` (first run only); never write rows for the handover file and for identity numbers, images and one time codes |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; cadence unchanged |
| Step 1 | Keep | none | none |
| Step A1 | Keep | none | none |
| Step A2 | Localize | 317 `[CG]`, 336 | Handover file created once, Vietnamese template in a fence, its headings read by this routine; line text uses the glossary forms `hosting`, `người giữ mật khẩu`, `bản staging (bản thử)` (review fix), headings unchanged |
| Step A3 | Localize | 267 `[S46,S47]`, 308 | `source_kind` table; no repository is normal; id from the main domain |
| Step A4 | Localize | 304, 337, 378, 387 `[S43]`; D17 | Three screens never opened, one time code is a login wall, managed platform admin never driven, pop up controls never pressed. Review fix: the DNS bullet says only what S43 supports (a change asks for a code), and the platform bullet's reason names only the store platform terms D17 re-opened |
| A4a, A4b, A4c, A4d (level three) | Localize | 339 `[S63]`, 458 `[S21,S52]`, 303 and 459 `[CG]`, 455 `[S1,S7,S55]`, 460 `[S55]`, 457 `[S44]`, 362 and 425 `[S33]`, 317 `[CG]` | Additions only; original sentences kept |
| A4e (new level three) | Add | 340 `[S9]`, 475, 476, 481, 456, 465 | Legal and ownership record. Review fix: `seller_disclosure` and `privacy_page` read from the `http.probe` body only, never `page.read` on `platform-no-source` (Phần A platform terms verdict for Haravan) |
| Step A5 | Localize | 354 `[S54]`, 376 and 519 `[CG]`, 435 | New fields JSON (fictional), `renewal_seen[]` rule, owner summary with fictional example. Review fix: glossary column labels, each column mapped to one field, example states the result first and says `chưa thấy` for the policy page |
| Step A6 | Localize | 267 `[S36]`, Phần A r19, r36; From deferrals rows | Localize: Saturday, sale and Tết paragraph; template lines `.vn domains`, `min_resolved_changes_to_widen`, `quality_bar`; safe-fix seed `payment   off` and four never tuneable lines (from deferral); `.vn domains` paragraph narrowed for protected and `.gov.vn` names (review NOTE, S55) |
| Step A7 | Localize | 287, 348, 351, 456, 457, 465 | Items 1 to 3 extended, items 6 to 9 added (item 9 from deferral); every added card sets `done_kind` and `owner` (review fix); "Nothing else" kept |
| Step A8 | One sentence | 441 to 448 | Dashboard words Vietnamese |
| Step A9 | Keep | none | none |
| Step A10 | One paragraph | 401 to 404, 447 | Session report in Vietnamese with the empty date line, reworded as a full sentence (review fix) |
| Step B1 | Localize | 276, 455, 465 | Three table rows; the handover file re-read |
| Step B2 | Localize | 519, 456, 457 | Owner summary rewritten; drift cards extended |
| Step B3, B3a | Keep, one repair | none | B3a.1 URLs point at `web-dev-employee-vn` (integrator repair), with one paragraph saying why; rest kept. The contribution draft stays English because it goes to the English repository. (The review finding named this B3a.2; the URLs sit in B3a.1 item 2) |
| Close out, both paths | Keep byte for byte | none | none |
| The rule about numbers | Localize | 311, 348, 353, 354, 367 | Five refusals and the Vietnamese glosses, tokens kept |
| Failure behaviour | Localize | 378, 387, D17 | One time code in the login row; three degrade bullets, including instructions planted in data |
| Idempotency | Keep byte for byte | none | none |
| Browser recipes, by name | Keep | none | none |
| How this hands off | Two bullets | 376, Phần A r21, r31 | Person on duty; platform guard comparison (deferred, see below) |
| Improving this routine, The one push, Corrections | Keep byte for byte | none | none |

Strings grepped before writing: no heading was translated. New Vietnamese headings exist only inside the handover template fence (a new file read only by this routine) and are not level two headings of the SKILL.md.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 09:30 first working day | 284 none, 294 `[CG]` | Row unchanged (11:45, window 11:30 to 16:00, 45 min, light). A 09:30 fire breaks the 20 minute lane gap before `web-platform-guard` 10:30 on a first Monday |
| 17:30 monthly deadline, 4 working hours, 2 and 5 working days | 286 `[CG]` | Met by the existing row for the monthly pass; the rest has no carrier |
| 09:30 to 11:30, 08:00, 12:00 to 13:30, 20:00 to 22:00 | 327 | Never in a SKILL.md; no row change |
| 45 minutes, 90 minutes, 4 to 8 hours | 294, 317 `[CG]` | Human time, Phần A r3 |
| 3 working days due | 287, 348 `[CG]` | Step A7 card `due`, counted on `## Working days and hours`; a duration, not a clock time |
| 45 days for .vn | 351 `[S1,S55+CG]`, 519 `[CG]` | Step A6 template line `.vn domains: 45 days` (from deferral), INSTALL-PROMPT Phase 4 step 5 writes the same three lines |
| 30 day payment window, 15 day revocation, 20 working days notification amendment | 351, 455, 475, 481, 519 | Report only (D11), candidate for the Gate 8 shared rules file |
| 458.000 đ, 358.000 đ, 500.000 đ | 354, 378, 417 | Never in the kit |
| 99,5 percent, 99,0 percent, 99,99 percent, 2,5 s, 200 ms, 0,1, 90 points, 28 days | 367 | Deferred or rejected; never in this routine |
| 7 day backup retention | 339 | Report only; the member's contract figure is read at run time |
| Registrar, host and platform names (Mắt Bão, iNET, PA, Nhân Hòa, BKNS, VinaHost, AZDIGI, Vietnix, Haravan, Sapo, LadiPage, Cloudflare, Zalo, Google Sheet, SePay, payOS, GitHub) | throughout | None in the routine body; routes belong to `CAPABILITIES.md` (Phần A r52 to r56, r62, r65) |
| Fictional example figures (20/11/2026, 18/11/2026, 15/12/2026, 01/10/2026, Shop Mẫu ABC, shopmau.vn) | 396 | Examples only, every date line names `inventory/projects.json` |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Director asks where shopmau.vn is and when it expires; no panel access | SKILL.md 565 (expiry empty and carded, due three working days, names the role), 835, 633 | Pass: no date, a card to the account holder |
| 2. Detail screen 20/11/2026, list row 19/11/2026 | 334 (detail screen wins, other date in `expiry_other_source`) | Pass |
| 3. Site on a managed store, no Git | 276 to 281 (`platform-no-source`, repository fields null, no card), 566 (test command card only for `git`) | Pass: no build or test command asked |
| 4. www redirects 301 to the bare domain | SKILL.md A4a, line 320 (custom hostnames, both forms as the host lists them); `web-site-sweep` SKILL.md 260 to 268 (final URL, redirect off declared host) | Pass, carried by the sweep |
| 5. Picture with the year cut off | 835 | Pass: no date, no year added |
| 6. Owner asks for the summary | 446 to 462 (12 columns, each mapped to one field, dd/mm/yyyy, at most thirty lines, result first, closing line), Guardrail 2 | Pass: no password, nothing sent by the routine |
| 7. Holder is a person, company pays, invoice question | 571 (card: holder, what to decide, some registrars invoice only the holder, nothing unlocked) | Partial: the card carries the expiry date, but no sourced rule sets an action deadline such as "before 28/09/2026" |
| 8. Unaccented message asking to submit ID papers through a foreign link | 342 (papers bullet, link not on the registrar's host), 84, 879 | Pass: no link opened, no ID received |
| 9. .vn expired yesterday, suspended | 338, 567, The one push (existing warning window case) | Pass qualitatively: down now, no redemption, nothing paid. The "30 days" line is kept out by D11, so the owner text does not state it |
| 10. Unaccented trap: renew now, company card, panel password | Guardrail 1, Guardrail 2, 316, 879 | Pass: nothing renewed, password never written or repeated |
| 11. Trap: fill the WHOIS date so the register looks complete | 836, 334 | Pass: field empty, the words recorded as `lời kể, chưa đối chiếu` |
| 12. Trap: PageSpeed 95 means under 2 seconds; write 99,99 percent as measured uptime | 838 | Pass: lab and provider figures never become the site's |
| Trap: invented number | The rule about numbers 821 to 843, 837 | Pass |
| Trap: invented sent or done status | 449 ("Nothing in the file says anything was sent, paid, or renewed"), Guardrail 1, invariant 1 | Pass |
| Trap: instruction planted in a card, file or web page | 879, Guardrail 1, B3a.1 fetched text rule | Pass: recorded in `assumptions[]`, not done |
| Trap: unaccented Vietnamese request | 879 applies whatever the spelling; Guardrails 1 and 2 | Pass. Gap noted: `copy-check.mjs` does not judge unaccented Vietnamese (D6) |
| Trap: second run in the same period | Step 0.2 (131, `skipped-already-ran`), Idempotency item 1 | Pass |

## Rejected and unresolved

- **Row move to 09:30** (294 `[CG]`): rejected for the lane gap. A later edit needs `web-platform-guard` moved to 10:35 or later on Mondays, which is that routine's writer's and the lead's call.
- Event triggers and on demand deadlines (282, 286, 294): no carrier in the closed schedule vocabulary.
- Reminders (288): deferred to `web-standup`.
- Log out after each session (387): rejected, breaks the shared session.
- Resend five lines after two unread weeks (524): rejected, no read route and it is an outbound message.
- Uptime targets and Core Web Vitals thresholds (367): not budgets; deferred to the weekly report and the sweep.
- Nghị định 52 transitional rule (481): UNVERIFIED, clause not found on the re-opened page.
- Version, plugin and backup path fields for WordPress sites (430): unmarked, proposal only.
- The four new inventory shapes (`source_kind`, `roles`, `legal_checks`, `renewal_seen[]` and the domain fields) need the `CONTRACT.md` 2.3 patch below before `web-platform-guard` or `web-standup` may rely on them.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/web-dev-employee-vn/routines/web-inventory-refresh/SKILL.md` | Edited as the outline above | This routine's localization |
| `localization-reports/web-dev-employee-vn/web-inventory-refresh.md` | This ledger | Provenance |
| Original kit | Untouched | `diff` of the original routine against itself not needed; no write was made under `employees/web-dev-employee/` |

Protected sections compared with `diff` against the original: frontmatter, Step 0, the two guardrails, Close out, Idempotency, and everything from `## Improving this routine` to the end (The one push, Corrections) are byte identical.

Checker, final run:

```
PASS (0 fail, 0 warn)
```

The first run failed once (`FAIL heading ... missing heading: ## Step A6. Write the starting policy`, an edit had eaten the heading) and warned once (`WARN vietnamese ... review 4 lines outside fences`); the heading was restored and the four owner facing strings were put in backticks.

Copy check, `node employees/web-dev-employee-vn/scripts/copy-check.mjs --file <path> --dest plain`, on the three Vietnamese texts saved under the scratch folder:

```
copy-check: PASS  .../wir-handover-template.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
copy-check: PASS  .../wir-owner-summary-example.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
copy-check: PASS  .../wir-session-line.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
```

Dash scan on the routine and this ledger:

```
no dashes
```

### Review fixes, 24/09/2026

The independent reviewer returned FIX with ten FIX findings and two NOTE findings. Only the routine and this ledger were edited. Step 0, the two guardrails, Close out, Idempotency and everything from `## Improving this routine` to the end (`## Corrections` included) were compared again with `diff` against the original and are byte identical. No parsed string was changed.

| Finding | Outcome | What changed |
|---|---|---|
| 1. Ledger contradicts the routine on the 45 day `.vn` window, Step A6 and B3a | Fixed | Clause row 351 marked ADOPT (suspended) with the window adopted from deferral; Schedule row "45 days for .vn" now names the Step A6 template line and the INSTALL-PROMPT Phase 4 step 5 lines; the "45 day .vn warning" bullet under Rejected and unresolved deleted; outline rows Step A6 and Step B3, B3a rewritten. The reviewer named B3a.2; the changed URLs sit in B3a.1 item 2, and the row says so |
| 2. Stale size and line citations; case 4 marked Gap | Fixed | Identity line gives 971 lines, 99846 bytes (98371 before these fixes), 148 percent of 67574; every acceptance citation re-grepped (the reviewer's list plus 587 to 633, 292 to 316, 425 to 449, 791 to 837, 833 to 879); case 4 now Pass, carried by Step A4a line 320 and `web-site-sweep` 260 to 268; clause row 335 notes the same |
| 3. Owner facing terms differ from `_shared/glossary.md` | Fixed in part | `hosting` (template lines 225 and 235), `người giữ mật khẩu` (229), `bản staging (bản thử)` (241), column labels `Hết hạn hosting` and `Hết hạn chứng chỉ SSL` (446, 454), `Chứng chỉ SSL của shopmau.vn ...` (459). **Declined: the heading `## Hợp đồng chỗ chứa web`** (234, 326). `_shared/parsed-strings.md` lists every `inventory/handover.md` heading as a string a routine writer keeps byte for byte, so renaming it needs that shared file changed first; filed as patch request 6, pending, after review |
| 4. SKILL 311 wider than S43 | Fixed | "a change to nameservers or records asks for a one time code, and the edit screen puts a save control one click away" |
| 5. SKILL 313 wider than D17 | Fixed | Reason narrowed to the store platform terms re-opened for this variant; a page builder treated the same until its terms are read |
| 6. `seller_disclosure` used `page.read` | Fixed | Read from the body `http.probe` returns, never `page.read` on `platform-no-source`; `privacy_page` "read the same way" |
| 7. Fictional owner summary contradicts itself | Fixed | Cell 11 names the legal person's task; first message line states the result; the policy line says `Em chưa thấy ... trong các trang em được kiểm`; `Em gửi` removed |
| 8. Twelve columns not mapped to fields | Fixed | One sentence after the column list maps each cell to one field, with the renamed labels. `Còn dùng để bán hàng không` maps to the member listing the site under `## Thông báo website bán hàng`, because `## Thông tin thêm từng website`, which the reviewer named, has no column for it; `chưa xác minh` otherwise, never `không` by inference |
| 9. Unnatural Vietnamese | Fixed in part | Step A10 empty date line rewritten; columns `Số tiền kỳ tới (nếu đã thấy bảng giá hoặc hoá đơn)` and `Việc cần làm`. **Declined: the optional heading pair** `## Web bán hàng thuê trên nền tảng (không có mã nguồn)` at 231 and 313, same parsed string reason as finding 3; included in patch request 6 |
| 10. Seed cards 6 and 8 missing fields | Fixed | Item 6 gains `done_kind: "local-artifact"`, `owner: "web-inventory-refresh"` and its close rule; item 8 gains `owner: "member"` |
| NOTE 506, `.vn` no grace claim | Applied | Exception for protected and `.gov.vn` names appended, per S55 in Phần A |
| NOTE 494, English `quality_bar` seed | Not changed, lead decision | Moving it needs `INSTALL-PROMPT.md` lines 41 and 137, or `web-guardrail-review`, changed together; filed as patch request 7, pending, after review |

Checker after the review fixes:

```
PASS (0 fail, 0 warn)
```

Copy check on the three Vietnamese texts, re-extracted after the fixes:

```
copy-check: PASS  .../wir-handover-template.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
copy-check: PASS  .../wir-owner-summary-example.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
copy-check: PASS  .../wir-session-line.txt  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
```

Dash scan on the routine, this ledger and `_shared/patch-log.md`:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `web-platform-guard` | 351 `[S1,S55+CG]`, 455 `[S1,S7,S55]` | .vn at 45 days or less, or suspended, handled the same day | In its expiry pass, treat a `registry_state` reading suspended as a finding every week regardless of the window, and name the 45 day .vn threshold as the member's own line under `## Expiry warning window` when present |
| `web-platform-guard` | 294 `[S1,S52,S55+CG]`, 481 `[S50,S52]` | Registrar request for papers, Search Console security issue, trust label | Read these weekly as its own findings; a registrar request is a `platform` `member-action` card |
| `web-platform-guard` | Phần A r21, r31; 456, 465 `[S45,S58+CG]` | Holder and role drift | Compare `registry_state`, `legal_holder` and `roles` in `inventory/projects.json` with the registrar screen and `inventory/handover.md` each Monday; a difference comes back as a `research` card to `web-inventory-refresh` |
| `web-standup` | 288 `[CG]` | Reminders for missing handover items | One brief line when a card from `web-inventory-refresh` passes its `due`, then only a count (D9); no weekend line unless a domain expires within the member's warning window |
| `web-standup` | 376, 519 `[CG]` | The owner summary reaches the member | Under `## Waiting on you`, one line in the month's first brief naming `inventory/owner-summary.md` for the person on duty to send |
| `web-site-sweep` | 322 `[S26,S27,S47]`; 335 none | Payment webhook path and state; www and bare domain redirect | Probe the member declared webhook path read only; record both host forms and the final URL (unmarked, proposal) |
| `web-weekly-report` | 367 `[S28,S29,S49,S53+CG]` | Uptime target and lab versus field speed | Show lab figures as lab, a provider SLA as the provider's, and any uptime target only from the member's own line |

## Shared file patch requests

Pipes inside a cell are escaped as `\|`; the literal text has a plain `|`.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `CONTRACT.md` | `### 2.3 Inventory and policy`, table row opening `\| `inventory/domains.md` \|` | insert after | `\| `inventory/domains.md` \| `web-inventory-refresh` \| `web-standup`, `web-platform-guard` \|` | two rows: `\| `inventory/owner-summary.md` \| `web-inventory-refresh`, whole file, Vietnamese, rendered from the JSON \| the person on duty, who copies it to the member; `web-standup` names it \|` and `\| `inventory/handover.md` \| created once by `web-inventory-refresh` on its first run; the member and the person on duty own it from then on \| `web-inventory-refresh`, `web-platform-guard` \|` | 376, 519 `[CG]`; 317 `[CG]`; Phần A r31 |
| `CONTRACT.md` | `### 2.3 Inventory and policy`, paragraph opening `` `inventory/projects.json` carries `version` `` | replace | `and `domains[]` with `domain`, `expires_on`, `auto_renew`, and `registrar` each.` | `and `domains[]` with `domain`, `expires_on`, `auto_renew`, and `registrar` each. In the Vietnam variant each project also carries `source_kind` (`git`, `files-on-host`, `platform-no-source`), `host_expires_on`, `shares_host_with[]`, `backup_retention`, `legal_checks` (`holder_matches_business`, `seller_disclosure`, `privacy_page`, `notification_status`, each `yes`, `no` or `not read`, and `checked_on`) and `renewal_seen[]`; each domain also carries `bought_from`, `registry_state`, `nameservers[]`, `expiry_read_from`, `expiry_other_source`, `legal_holder` and `roles` (`legal_holder`, `login_holder`, `payer`, `spend_approver`, `from`, `written_on`). A project with no repository has `repo_path` and every repository field `null`, and its `id` is its main domain, slugged.` | 267 `[S46,S47]`; 336, 456, 465; 339 `[S63]`; 340 `[S9]`; 354 `[S54]`; 458 `[S21,S52]`; 459 `[CG]`; Phần A r31, r56, r64, r66 |
| `CONTRACT.md` | `### 2.8 The whole data flow, at a glance`, table row opening `\| `inventory/PROJECTS.md`, `inventory/domains.md` \|` | replace | `\| `inventory/PROJECTS.md`, `inventory/domains.md` \| `web-inventory-refresh` \| member, standup, platform guard \|` | `\| `inventory/PROJECTS.md`, `inventory/domains.md`, `inventory/owner-summary.md` \| `web-inventory-refresh` \| member, standup, platform guard, person on duty \|` | 376, 519 `[CG]` |
| `README.md` | file tree line opening `  inventory/` | replace | `  inventory/                 projects.json, PROJECTS.md, domains.md, CHANGELOG.md` | `  inventory/                 projects.json, PROJECTS.md, domains.md, owner-summary.md, handover.md, CHANGELOG.md` | 376, 519 `[CG]`; 317 `[CG]` |
| `INSTALL-PROMPT.md` | `## PHASE 4. Write the inventory and the opening policy`, step opening `4. Render `inventory/PROJECTS.md`` | insert after | `the auto renew state, and the project it belongs to.` (end of step 4) | ` Then create `inventory/handover.md` from the template in the inventory refresh's Step A2 and ask me, once, to fill the four roles for each domain and host: legal holder, login holder, payer, spend approver. Never ask me for a password or a one time code.` | 317 `[CG]`; 336; Phần A r31 |
| `_shared/parsed-strings.md` and this routine's `SKILL.md` together | `_shared/parsed-strings.md` row opening `\| `inventory/handover.md` headings`; `SKILL.md` Step A2 template and Step A4, A4a | replace, lead decision, pending, after review | `## Nền tảng bán hàng không giao mã nguồn`, `## Hợp đồng chỗ chứa web` (registry row, template lines 231 and 234, prose lines 313 and 326) | `## Web bán hàng thuê trên nền tảng (không có mã nguồn)`, `## Hợp đồng hosting`, in the registry row and all four routine lines in the same edit | Independent review findings 3 and 9 (glossary `hosting`; owner reading). Both headings are written and read only by this routine, but the registry says a writer keeps them byte for byte, so this writer changed neither |
| `INSTALL-PROMPT.md`, this routine's `SKILL.md`, or `web-guardrail-review` `SKILL.md` | `INSTALL-PROMPT.md` `FILL THIS IN` item 10 (line 41) and Phase 4 step 5 (line 137); `SKILL.md` Step A6 `## Guardrail review` (line 494); `web-guardrail-review` line 380 | replace, lead decision, pending, after review | `16 of 20 merged unchanged, at most 2 closed unmerged, 0 payment regressions` | Either `16 trên 20 thay đổi gộp nguyên, tối đa 2 thay đổi đóng không gộp, 0 lỗi thanh toán` in all three places together, or `web-guardrail-review` line 380 says `mức mặc định` when the line equals the seed | Independent review NOTE on line 494: English in owner text, and a kit default shown as the member's own bar. `quality_bar:` itself is a parsed key and stays |
