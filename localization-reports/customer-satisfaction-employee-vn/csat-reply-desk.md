# csat-reply-desk: provenance ledger

Status on 2026-09-24: **ledger complete, sources behind new law, number and platform rules re-opened, routine edits applied to the variant routine and checked, and the independent reviewer's FIX findings applied the same day (see Files and checks).** Phần A decisions are cited by row id from `_shared/phan-a-ledger.md` and not re-decided.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/05_CSKH/phieu-da-dien.md` (read only), `## B-3. csat-reply-desk`, form lines 829 to 1117. Phần A classified once for the kit in `_shared/phan-a-ledger.md`.
- Extract: `extract_form_section.py --routine csat-reply-desk`, scratch copy only (`scratchpad/vn/customer-satisfaction-employee-vn/csat-reply-desk-extract.md`, `.json`). 139 rows and answers: 26 with `[S#]`, 5 with `[CG]`, 4 with both, 112 unmarked. B0 box ticked: "Làm khác".
- Form author (A1, row A1-01): an AI sub agent playing the customer care role, research draft dated 23/09/2026. **No clause has been confirmed by a person running customer care in a Vietnamese business.** `[CG]` marks are the owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/customer-satisfaction-employee`, `routines/csat-reply-desk/SKILL.md` (755 lines, 71168 bytes).
- Variant kit and routine: `employees/customer-satisfaction-employee-vn`, same routine id, same folder, same YAML `name`.
- Source index: `05_CSKH/literature/nguon.md`, viewing date 23/09/2026 for every row. Sources behind this routine's own ADOPT rows that are not already verified in Phần A re-opened on 24/09/2026 (below).
- Kit version before: 1.8.0 (variant still 1.8.0). After: set once for the whole kit by the lead (D14).
- Platform terms: this routine reads a marketplace or social surface only in Step 4 (enrichment) and Step 9 (helpdesk draft mode). Both now follow the Phần A D13 table and D16, D17: a surface whose terms forbid automated access, or a marketplace, social network, chat app or map listing surface with no recorded verdict or whose platform has no row in `CAPABILITIES.md` section 4c, is skipped, and the stricter of the block and the 4c row holds; the draft works from the ledger or from text the person on duty pastes.

## Sources re-opened on 24/09/2026

Already verified in Phần A and only cited here: S19, S52 (for S20), S21, S43, S22, S23, S3, S4, S61 and S62 (for S47), S55, S13, S68, S8, S45, S7, S48, and every D13 terms page.

| Source | URL | What it supports here | Verdict |
|---|---|---|---|
| S41 Báo Công Thương | https://congthuong.vn/giao-hang-khong-dung-cam-ket-co-so-kinh-doanh-chiu-trach-nhiem-465565.html | Goods or services that differ from what the business registered, announced, listed, advertised, agreed or committed are the business's responsibility (Luật 19/2023 Điều 14 khoản 1); 7 working day negotiation (Điều 57 khoản 2) | **Partly confirmed.** Article dated 16/07/2026. Its case is a wrong model delivered, not a late delivery; no 24 hour figure. Supports the narrow rule "never deny responsibility for goods that differ from what was announced" together with S3; does not support the form's overdue delivery rule (row R57) |
| S16, replaced by Meta's own page | https://developers.facebook.com/docs/messenger-platform/policy/policy-overview | "Businesses have up to 24 hours to respond to a user"; message tags for updates outside the window; a Human Agent tag "allows businesses to manually respond to user messages within a 7-day period" | **Confirmed** on the platform's own page (no date shown). S16 (a vendor blog from 2020) was not re-opened; this page carries the claim instead and settles Phần A A5-35 for this routine |
| S50 Zalo OA, Tổng quan các loại tin nhắn | https://oa.zalo.me/home/documents/guides/tong-quan-cac-loai-tin-nhan-tren-zalo-official-account-_3651713298729094511 | Consult message free within 48 hours of the user's last interaction; charged outside it; OA Manager reply window 365 days, OpenAPI 07 days; effective 01/01/2026 | **Confirmed.** Settles Phần A A4-24 and the window half of A5-32 for this routine |

Not re-opened, index viewing date 23/09/2026, claims not widened: S1 (row deferred to `csat-inbox-sweep`), S15, S49, S51 (ZBS and Broadcast rows kept as held sends or deferred; no price enters the kit), S34, S39, S40 (vendor pages behind a MOVE; they carry no rule), S46 (context only), and Thông tư 18/2024/TT-NHNN cited inside row R51 (its numbers are rejected from the kit, D11).

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED (form-map). A marker covers only its own clause. Numbers from laws and platforms never enter the routine body (D11); where a rule needs one it reads it from a member owned file with source and date.

### Phần A rows this routine inherits (cited, not re-decided)

| Phần A row | Where it landed in the variant routine |
|---|---|
| A2-15, A3-19 (return deadline, S19) | Step 2b key 2 (return request against the ticket's `platform_deadline_at`, copied and never computed, CONTRACT 10.1.2 and 10.3; a null field is an unreadable deadline); deadline tickets drafted whatever the target; failure row |
| A3-15, A5-36, A5-37 (marketplace chat window, S52, S22, S23) | Step 2b key 2 (a `seller-chat` surface against the window in its `strategy/channels.md` block or the platform line under `## Response target`, counted from the ticket's `event_at`); Step 1 reads it; the rule is worded "a marketplace whose recorded rule says so", because the sources cover two marketplaces |
| A3-21 (acknowledgement period, S3, S4) | Step 2b key 2 (complaint whose `first_reply_at` is null and with no sent reply, against the period `strategy/policy-limits.md` records, counted exactly as that line's source states, never from `## Working days and hours`) |
| A2-17, A3-16, A6-01 (no off platform contact, S21) | "The Vietnam rules" first bullet, worded "at least one marketplace" because S21 is a vendor blog about one marketplace; Step 7 private channel is the same marketplace's chat on a marketplace surface only, and the original route stays on every other surface |
| A2-19, A3-13, A6-02 (refund scam, S43) | "The Vietnam rules" second bullet; failure row |
| A6-03 (commitment, S3) | "The Vietnam rules" third bullet; the compensation words are `đền`, `bồi thường` and `hoàn tiền` promised to this customer, and the scam warning sentence is named as not a commitment |
| A6-07 (no reward for rating, S48) | "The Vietnam rules" fifth bullet, its consequence narrowed to a map listing platform as S48 states it; Step 7 suspected fake review |
| A6-04 (promotional content, S7, S59) | "The Vietnam rules" sixth bullet; failure row |
| A2-21, A3-11 (address units, S61, S62) | "The Vietnam rules" seventh bullet |
| A6-09 (invoices, S45) | "The Vietnam rules" eighth bullet; new Step 6f; writes list; failure row |
| A6-08 (personal data in public, S8, S68) | "The Vietnam rules" ninth bullet; Step 7 identification bullet |
| A3-10 (`Dạ` or `Vâng` default, CG), A3-07, A3-09 (WORDING) | Step 5b "Address" and "A customer who wrote without diacritics" bullets |
| A5-57 (per role ceiling, CG; 200.000đ never shipped) | Step 1 policy-limits bullet; Step 6a per role `- policy:` paragraph |
| A6-06 (bot disclosure, S13, S55): "no change: a person sends" | No routine change, as decided. A release gap is raised as a CONTRACT patch request below |
| A4-24, A5-35 (DEFER to B-3) | Settled here by rows R94, R109, R110 with re-opened sources |
| A5-32 (DEFER to B-3) | Window half settled by R110; ZBS and Broadcast half stays deferred (R111) |
| A2-13 (order confirmation, CG, DEFER to B-3) | UNVERIFIED here: Phần B-3 carries no clause for order confirmation; it stays a proposal (see Rejected and unresolved) |

### Phần B-3 rows

| Id | Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|---|
| R01 | 836 B0 box "Làm khác" | none | WORDING | this ledger | Context |
| R02 | 838 equivalent work: drafts for chat, comments, Zalo, reviews; the person on duty sends | none | KEEP | Guardrail 1, Steps 5 to 8 | Same as the original: drafts in files, a person sends |
| R03 | 838 many rounds in a shift, Sunday included, not one morning batch | none | UNVERIFIED | report | Unmarked cadence; row unchanged |
| R04 | 838 long email is not the main form; refunds go through marketplace, COD, transfer, wallet | none | WORDING | Step 6a refund path list (rule rests on R46 to R50) | Presentation of the screen line |
| R05 | 844 B1 output: queue of drafts with ticket id, channel, sentence, where approval is needed for money | none | KEEP | Step 8 entry shape | Inherited |
| R06 | 846 recipients: staff sends, shift lead approves money or 1 star, owner above the ceiling | none | WORDING | Step 6a per role `- policy:` paragraph | The rule rests on R58 and R71 `[CG]` |
| R07 | 847 90 percent of normal tickets drafted in 10 minutes, all urgent in 5 minutes | `[S20+CG]`; S20 does not support minutes | DEFER | `csat-desk-intake` (`## Response target`), `csat-satisfaction-report` | Owner approved as a measure; a once per weekday routine cannot meet it; measuring is the report's job |
| R08 | 847 Shopee chat 12 hour rate not under 80 percent while holding the badge | `[S20+CG]`, S52 in Phần A | KEEP | Step 2b key 2 via A3-15 | Already adopted by Phần A; numbers stay in `strategy/channels.md` |
| R09 | 847 at most one sentence a week retracted for a wrong money promise | `[S20+CG]` | DEFER | `csat-satisfaction-report` | A weekly measure |
| R10 | 848 bad work: English drafts, full refund promise, Zalo on marketplace chat, sending before a person pressed | none | WORDING | Acceptance traps | Each item is covered by an adopted rule |
| R11 | 853 Câu 1 (1) inbox and Zalo first response 90 percent under 15 minutes | `[S19,S20,S22]` do not support it | UNVERIFIED | report | No source for this figure |
| R12 | 853 (2) marketplace chat answered by a person inside 12 hours | S52 (for S20), S22 | ADOPT | Step 2b key 2 | Same as A3-15, A5-37; number read from `strategy/channels.md` |
| R13 | 853 (3) no Shopee return request reaches 6 hours left unhandled | S19 supports the 02 calendar day deadline, not 6 hours | ADOPT without the 6 hour figure | Step 2b key 2 and the deadline paragraph | Deadline ranking adopted; the 6 hour mark is UNVERIFIED |
| R14 | 853 (4) 1 star drafted in 15 minutes, sent in 60 | none effective | UNVERIFIED | report | Unsupported targets |
| R15 | 853 (5) no retracted money sentence in a day | none | KEEP | "Never commit the business" | Inherited |
| R16 | 859 B2 trigger: new urgent or high ticket, or a periodic round | none | UNVERIFIED | report | Event triggers are outside a scheduled row |
| R17 | 861 every 15 minutes, 08:00 to 22:00, all week | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row; `daily` and `sun` are outside the closed vocabulary |
| R18 | 862 five request phrasings, including "Đừng rep hộ, để anh tự nói" | none | EXAMPLE | Acceptance vocabulary | The member sends every draft anyway |
| R19 | 863 deadlines 5, 10, 15, 30 minutes by severity | none | UNVERIFIED | report | Unmarked |
| R20 | 864 work ends when a person sent or declined; the ticket logs the send time | none | KEEP | Step 8, hand off (`csat-desk-standup` writes `replied`) | Inherited |
| R21 | 865 reminders after 10 and 15 minutes, internal channel, at most two | none | REJECT | report | CONTRACT section 9 closes push to four cases; D10 |
| R22 | 866 never press a marketplace refund, never transfer money | `[S7]` does not concern it | KEEP | Guardrail 1 | Inherited |
| R23 | 866 not for promotional renewal messages; Nghị định 91 | `[S7]`, confirmed in Phần A | ADOPT | "The Vietnam rules" promotional bullet | Same as A6-04; no hours or counts |
| R24 | 871 Câu 2 inbox 15 minutes, marketplace 2 hours, comment 30 minutes, email 1 working day | `[S20]` supports none of these | UNVERIFIED | report | |
| R25 | 871 marketplace chat must be under 12 hours | S52 (for S20) | KEEP | Step 2b key 2 via A3-15 | |
| R26 | 871 15 minute rounds including Saturday, Sunday, sale days; nothing after 22:00 except urgent; a draft left 2 hours is not done | `[S20]` does not support | UNVERIFIED | report | Schedule unchanged |
| R27 | 879 B3 no draft without the verbatim | none | KEEP | Step 4, Step 5 | The original drafts from the ledger verbatim and notes truncation |
| R28 | 880 no published policy: apologise for the wait, promise no exchange date | none | KEEP | "Never commit the business" | Inherited |
| R29 | 881 order code, delivery state, amount from the seller centre or sales software; missing code: ask for it, never a password | none | KEEP | Guardrail 2; Step 5b "Ask only for what the grant needs" | The ask list rests on R52 `[CG]` |
| R30 | 882 ceiling from A7, 0đ when not declared | none | KEEP | Step 6e `no limit recorded` | Same effect: nothing granted without the member |
| R31 | 883 approved phrases file; none: short draft, a person still sends | none | KEEP | Step 5a macros | Inherited |
| R32 | 885 photos, voice, stickers | none | UNVERIFIED | report | New input handling; only the "ask the one missing thing" wording is used (R96) |
| R33 | 891 Câu 3 retail: 2 to 5 chat lines, `dạ`, `em`; business: longer, order and tax code, address as they introduce themselves; no contract in comments | none | WORDING | Step 5b "Address" | Lengths are member owned `field_caps`; unchanged |
| R34 | 896 Câu 4 screens: marketplace return screen, finance right on the seller centre; owner's bank app or wallet; voucher on the platform or Haravan; extension in Getfly, Bizfly or an owner file; AI never presses | `[S34,S39,S40]` vendor pages | WORDING and MOVE | Step 6a `- screen:` in generic words; vendor names to `CAPABILITIES.md` (patch request) | Vendor pages carry no rule; "never presses" is Guardrail 1 |
| R35 | 901 Câu 5 remedy forms and internal names | `[S43]` does not support the list | WORDING | Step 6a mapping table onto the closed `- remedy:` list | The closed list is parsed; names are presentation |
| R36 | 901 no remedy by the customer paying a fee first | `[S43]` | ADOPT | "The Vietnam rules" scam bullet | Same as A6-02 |
| R37 | 909 B4 step 1 take undrafted tickets, urgent first | none | KEEP | Step 2 | |
| R38 | 910 step 2 read order, platform deadline, policy | none | KEEP | Step 1, Step 2b key 2 | Deadline part rests on R12, R13 |
| R39 | 911 step 3 one direction: explain, exchange, ask, wait for money approval | none | KEEP | Step 5b shape, Step 6 | |
| R40 | 912 step 4 2 to 5 lines, `dạ`, `em`, `anh/chị`, no Zalo on a marketplace | none; Zalo part S21 via A6-01 | WORDING and ADOPT | Step 5b, "The Vietnam rules" | |
| R41 | 913 step 5 money: amount, refund path, screen, who presses | none; path rests on R46 to R50 | ADOPT | Step 6a | Via `[CG]` rows |
| R42 | 914 step 6 hand to the sender; urgent waits at most 5 minutes; "đã gửi" only after a person pressed | none | KEEP | Guardrail 1, Step 11 run record words | 5 minutes UNVERIFIED |
| R43 | 915 step 7 log the send time; one reply is not done | none | KEEP | Only `drafted` is written | |
| R44 | 916 step 8 public comment short, no address | none | KEEP | Step 7 | A6-08 already adopted |
| R45 | 921 Câu 6 no OTP, no fee | `[S43+CG]` | ADOPT | "The Vietnam rules" scam bullet | |
| R46 | 921 COD refused: no goods money collected, nothing to refund, do not tell the customer to transfer | `[CG]` | ADOPT | Step 6a refund path, failure row | Owner approved; narrows |
| R47 | 921 COD collected by the carrier: reconcile on the carrier app or platform wallet, never a manual transfer before the money reaches the shop | `[CG]` | ADOPT | Step 6a refund path | |
| R48 | 921 marketplace: press in the return section; money back through the wallet or original method; seller promises no date | `[S19,S23+CG]` | ADOPT | Step 6a; Step 5b "No date for money" | |
| R49 | 921 transfer outside a marketplace: back to the paying account, checked against the receipt, last four digits, amount; owner presses | `[CG]` | ADOPT | Step 6a | |
| R50 | 921 wallet: same wallet, owner operates | `[CG]` | ADOPT | Step 6a | |
| R51 | 921 card dispute: no date; bank time limits under Thông tư 18/2024 | `[CG]` | ADOPT (no date) and REJECT (numbers) | Step 6a, Step 5b | Legal numbers stay out (D11); shared rules file candidate |
| R52 | 921 ask only for order code, receipt photo with card number covered, last four digits for a transfer | `[CG]` | ADOPT | Step 5b "Ask only for what the grant needs" | |
| R53 | 926 Câu 7 invoice cases under Nghị định 70/2025 | `[S45]` | ADOPT, qualitative | Step 6f | Same as A6-09; no instrument number in the body |
| R54 | 926 sample reply ending "Bên em báo lại trong giờ làm việc hôm sau" | none | REJECT | report | A call back time is a commitment the original bars |
| R55 | 934 B5 6 hours or less before the platform deadline: draft before price questions; a person goes to the seller centre | `[S19,S23]` support the deadline and the automatic approval, not 6 hours | ADOPT without the figure | Step 2b key 2 and deadline paragraph | |
| R56 | 935 late but in transit, inside the promised date: apologise, next milestone time, no refund | none | KEEP (no refund on emotion); REJECT (milestone time) | Step 5b example | A time is a commitment |
| R57 | 936 24 hours past the promised date: offer wait or cancel; cancel only after approval; shop liable | `[S41]` partly confirmed (goods not matching a commitment) | UNVERIFIED (choice and 24 hours); ADOPT narrow | "The Vietnam rules" responsibility bullet | S41 and S3 support only "never deny responsibility for goods that differ from what was announced" |
| R58 | 937 refund from 1đ up to the shift lead ceiling: draft the full amount, not sent until the right approver; default 200.000đ once the owner accepted | `[CG]` | ADOPT | Step 6a per role `- policy:`; Step 6e hurried amount paragraph | Same as A5-57; no shipped figure |
| R59 | 938 marketplace customer asks for Zalo: decline, continue in the order chat | `[S21]` | ADOPT | "The Vietnam rules" first bullet | |
| R60 | 939 public comment at most 2 sentences; invite an order check in the same platform's inbox | none | UNVERIFIED (2 sentences); ADOPT (same platform, via A6-01) | Step 7 | |
| R61 | 940 customer sends an OTP: do not confirm, warn to stop | `[S43]` | ADOPT | "The Vietnam rules" scam bullet; failure row | |
| R62 | 942 conflict order: safety, fraud, platform deadline, money paid; approved sentence beats AI; published policy beats a verbal promise | none | UNVERIFIED (order); KEEP (macro and policy precedence) | report | Severity order is the sweep's; deadline key is R12, R13 |
| R63 | 948 Câu 8 six level ranking with example | none | UNVERIFIED and EXAMPLE | report | |
| R64 | 956 B6 ask for order code, photos, "checking": AI drafts, a person sends; 10 minute approval | none | KEEP | Guardrail 1 | 10 minutes UNVERIFIED |
| R65 | 957 apology for the wait with no money words | none | KEEP | "The Vietnam rules" commitment bullet (R106) | |
| R66 | 958 amount or voucher: not above the ceiling; no ceiling, no number | none | KEEP | Step 6b (no amount in the body), 6e | |
| R67 | 959 press send, accept a return, transfer: always a person | none | KEEP | Guardrail 1 | |
| R68 | 960 public 1 star reply: 2 sentences, shift lead sends | none | UNVERIFIED | report | |
| R69 | 961 ZBS template: always a person; paid; AI never fills a unit price; 55đ and 165đ | `[S49]` | KEEP (held send); REJECT (prices) | Guardrail 1 | No price enters the kit |
| R70 | 963 handover: ticket id, draft, amount, screen, minutes, sentence not to add | none | KEEP | Step 8 entry, Step 6a block | Minutes UNVERIFIED |
| R71 | 969 Câu 9 approval per remedy and role; voucher and refund message up to the shift lead ceiling (default 200.000đ); transfer pressed by owner or finance | `[S48+CG]` | ADOPT | Step 6a per role `- policy:` | S48 does not concern roles; the `[CG]` carries it; no figure shipped |
| R72 | 969 no voucher for 5 stars; no compensation by asking the customer to transfer first | `[S48+CG]` | ADOPT | "The Vietnam rules" fifth and second bullets | A6-07, A6-02 |
| R73 | 974 to 979 B7 good 1 (with "trước 18:00") | none | EXAMPLE | Step 5b draft example, without the time and the call back | |
| R74 | 983 to 986 good 2, marketplace customer asks for Zalo | `[S21]` on "why good" | EXAMPLE and ADOPT | Step 7 quoted drafts; R59 | |
| R75 | 990 to 993 good 3, remedy separation ("NHÁP" line has an em dash) | none | EXAMPLE | Step 6a Vietnamese remedy block | Dash removed; the entry shape already separates |
| R76 | 997 to 1000 bad 1: no diacritics, `bạn`, blame | none | WORDING | Step 5b "Address" and "without diacritics" bullets | |
| R77 | 1004 to 1007 bad 2: fee plus OTP scam, fix | `[S43]` | ADOPT and EXAMPLE | Scam bullet | |
| R78 | 1012 Câu 10 four parts, 3 to 5 lines, `dạ`, no emoji; "một việc sẽ làm kèm giờ" | none | WORDING; REJECT (time) | Step 5b | |
| R79 | 1018 B8 address forms, follow the customer's form | none | WORDING | Step 5b | A3-09 |
| R80 | 1020 lengths | none | UNVERIFIED | report | `field_caps` is member owned |
| R81 | 1021 no emoji in complaints; no "ok", "nhe", "bạn" | none | DEFER | `csat-desk-intake` (`strategy/tone.md`) | Lists live in tone.md only |
| R82 | 1022 formats 120.000đ, 18:00, 23/09/2026 | none | WORDING | Step 8 note on dates; STYLE-VI | |
| R83 | 1023 banned phrases | none | DEFER | `csat-desk-intake` (`## Banned words`, `## Banned openers`) | The routine never restates the lists |
| R84 | 1024 sample sentences | none | DEFER | `csat-desk-intake` (`## Samples`) | The handoff sample with a time is rejected |
| R85 | 1025 marketplace: no phone, no outside link | `[S47]` does not support; S21 does | ADOPT via A6-01 | "The Vietnam rules" first bullet | |
| R86 | 1025 Zalo: ask for the new address by ward or commune | `[S47]`, S61 and S62 in Phần A | ADOPT | Address bullet | A2-21 |
| R87 | 1025 comment: never mention the amount paid | none | KEEP | Step 7 identification bullet | "No account detail" in the original; wording expanded |
| R88 | 1030 Câu 11 tone rule sections and banned clichés | none | DEFER | `csat-desk-intake` | |
| R89 | 1038 B9 1 star "fake" with a warehouse photo: apologise, invite the order code in the platform inbox, never argue | none | KEEP and WORDING | Step 7 | "Never argue" inherited |
| R90 | 1039 suspected competitor review: no conclusion in public, check orders, report through the platform, never buy reviews | `[S48]` | ADOPT | Step 7 suspected fake review sentence; fifth rule | Reporting is a person's action |
| R91 | 1040 COD received, used goods, refund demanded: no refund outside policy, state the posted conditions, the platform may still decide | `[S19]` | ADOPT | Step 5b listing bullet and Step 6e; the original already measures against `## Published refund policy` | Mostly inherited |
| R92 | 1041 two staff, two drafts with different amounts | none | KEEP | Idempotency 4 (one draft per ticket per day); Step 6d dedupe paragraph (SKILL.md:503) | The routine writes one draft and one remedy block per order; human conflicts stay the member's |
| R93 | 1042 wrong tax code invoice: never "reissued in 5 minutes" | `[S45]` | ADOPT | Step 6f | |
| R94 | 1043 Messenger outside 24 hours: normal send fails; no HUMAN_AGENT verified: wait for the customer | `[S16]`, re-opened on Meta's own page | ADOPT, qualitative | Step 5b reply window paragraph | Window read from `strategy/channels.md` (deferral to intake) |
| R95 | 1048 Câu 12 public 1 star principles | none | KEEP and WORDING | Step 7 | 60 minutes and 2 sentences UNVERIFIED |
| R96 | 1054 Câu 13 (1) no diacritics, voice, dark photo: ask one missing idea, never send the customer to email | `[S45+CG]` (CG covers the answer) | ADOPT | Step 5b "without diacritics" and "Stay on the customer's channel" | Owner approved; narrows |
| R97 | 1054 (2) refund demand over a rude delivery person: apologise, no promise to punish, ask the order code | `[CG]` | ADOPT | Step 5b "No promise about a third party" | |
| R98 | 1054 (3) B2B urgent invoice fix: acknowledge, pass to accounting, never touch tax figures | `[S45+CG]` | ADOPT | Step 6f | |
| R99 | 1062 B10 no "không phải lỗi shop" when a promised delivery is late | none on the row | ADOPT narrow via R57 | Responsibility bullet | Delivery time half UNVERIFIED |
| R100 | 1063 Shopee 15 days, seller 02 calendar days | none on the row; S19 | KEEP | Step 2b key 2 via A2-15, A3-19 | Numbers in `## Published refund policy` |
| R101 | 1064 no transaction outside Shopee from 16/06/2025 | none on the row; S21 | ADOPT via A6-01 | First Vietnam rule | |
| R102 | 1065 Nghị định 70/2025 invoice handling | none on the row; S45 | ADOPT via A6-09 | Step 6f | |
| R103 | 1066 Messenger 24 hours, HUMAN_AGENT unverified | none | ADOPT via R94 | Reply window paragraph | |
| R104 | 1067 customer names the Department of Industry and Trade or the consumer association: high, to the owner | `[S1]` | DEFER | `csat-inbox-sweep` (severity rule) | Severity is the sweep's; S1 to be re-opened by that writer |
| R105 | 1068 AI law Điều 11: a bot sent message must say so | `[S55]` | KEEP here; patch request | CONTRACT section 7 releases | A6-06 decided "no change: a person sends"; a released channel is the gap |
| R106 | 1073 Câu 14 apology vs commitment; banned sentences; amount, exchange days or "đền" need approval | `[S3,S41]` | ADOPT | "The Vietnam rules" commitment bullet | A6-03 |
| R107 | 1079 Câu 15 Shopee 12 hours, automatic messages do not count, no leading outside, returns 02 days | S52, S21, S19 | ADOPT via Phần A | Step 2b key 2; first rule | |
| R108 | 1079 TikTok Shop 12 hours per session; overdue return approved | S22, S23 | ADOPT via A5-37 | Step 2b key 2 | |
| R109 | 1079 Messenger 24 hours; tags; HUMAN_AGENT 7 days | S16, re-opened on Meta's page | ADOPT, qualitative | Reply window paragraph | Numbers to `strategy/channels.md` |
| R110 | 1079 Zalo OA consult 48 hours free, 55đ outside; OpenAPI 7 days; OA Manager 365 days | S50 re-opened; S49 not | ADOPT (window, qualitative); REJECT (price) | Reply window paragraph | Window and charge fact via `strategy/channels.md`; no price |
| R111 | 1079 Broadcast limits; ZBS 400 characters, approved templates only | S51, S15 not re-opened | DEFER | `csat-churn-watch`; `CAPABILITIES.md` (held) | Not this routine's send |
| R112 | 1087 B11 case 1 | none | KEEP | Acceptance | |
| R113 | 1088 case 2 | none | KEEP | Acceptance | |
| R114 | 1089 case 3 | none | KEEP | Acceptance | |
| R115 | 1090 case 4 | none | KEEP | Acceptance | |
| R116 | 1091 case 5 | none | KEEP | Acceptance | |
| R117 | 1092 case 6 | none | KEEP | Acceptance | |
| R118 | 1093 case 7 | none | KEEP | Acceptance | |
| R119 | 1094 case 8 | none | KEEP | Acceptance | |
| R120 | 1095 case 9 | none | KEEP | Acceptance | |
| R121 | 1096 case 10 | none | KEEP | Acceptance | |
| R122 | 1097 case 11 | none | KEEP | Acceptance | |
| R123 | 1098 case 12 | none | KEEP | Acceptance | |
| R124 | 1103 B12 money, "đền" or "hoàn" without approval? | none | KEEP via R106 | Commitment bullet | |
| R125 | 1105 phone, Zalo or outside link in marketplace chat? | none | KEEP via A6-01 | First rule | |
| R126 | 1106 a time for the next reply instead of "sớm nhất"? | none | REJECT (time); DEFER ("sớm nhất" cliché to `## Banned words`) | report; `csat-desk-intake` | A time is a commitment |
| R127 | 1107 `dạ` and `anh/chị`, no `bạn`? | none | WORDING | Step 5b | |
| R128 | 1108 ticket left not done after an apology only? | none | KEEP | Only `drafted` is written | |
| R129 | 1109 OTP or fee request blocked? | none | KEEP via A6-02 | Scam bullet | |
| R130 | 1114 B14 remember per customer: form of address, open order code, promised sentence with a time, approver; no card number | none | UNVERIFIED (new state); KEEP (no card number, redaction) | report | A state field needs a writer and a reader |
| R131 | 1116 log draft time, send time, sender, sent text, amount | none | KEEP (ledger and standup); REJECT (text and amount in the run record) | CONTRACT 4.2 | |
| R132 | 1117 owner told in shift about over ceiling and unsent 1 star; end of day counts; internal channel | none | REJECT | report | Push is closed at four cases; the brief is the standup's |
| R133 | 40 frame note: `copy-check.mjs` only catches `$ £ € ¥`, USD, EUR, GBP and English count nouns | none (verified by a run, see Files and checks) | KEEP, enforced by instruction | Step 5d "The judge does not read Vietnamese figures" | `parsed-strings.md` gap (D6); scripts are frozen |

### Decision counts

| Decision | Rows where it is the only or the first decision |
|---|---|
| ADOPT | 39 |
| KEEP | 49 |
| UNVERIFIED | 16 |
| WORDING | 13 |
| DEFER | 8 |
| EXAMPLE | 4 |
| REJECT | 4 |
| MOVE | 0 |
| Total rows | 133 |

Counted by each row's first decision (script count over the table). Rows that carry a second decision: REJECT halves in R51, R56, R69, R78, R110, R126, R131; UNVERIFIED halves in R13, R42, R57 (as first), R60, R62, R64, R70; MOVE half in R34 (vendor names to `CAPABILITIES.md`); DEFER half in R126; ADOPT halves in R40, R60, R77.

### Deferrals received (integrator pass, 24/09/2026)

Outbound deferrals from other routines of this kit, settled by the integrator under the writers' editing rules: applied only where the clause carries `[CG]` or an `[S#]` re-opened on 24/09/2026, Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Decisions: ADOPT (from deferral), KEEP (already covered by this routine's text), DECLINED.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| csat-desk-intake | 477 `[S21]`, A6-08, 470, A3-10 `[CG]` | Form of address and per channel lines from `## Samples` | KEEP | Step 5b Address bullet and the Vietnam rules on marketplace chat and public replies |
| csat-desk-intake | 427 `[CG]`, A5-57, 491 and 496 `[S19][S54]` | Role lines; a marketplace order measured against its own block | KEEP for roles; ADOPT, from deferral, for the block | Step 1 and Step 6a already read the role ceilings; Step 6a new paragraph "A marketplace order is measured against that marketplace's own block" |
| csat-desk-intake | 518 `[S4]` | Defective goods never described as normal | ADOPT, from deferral | Step 5b bullet on `safety-or-defect` |
| csat-desk-intake, csat-desk-standup | 513, 2315 `[S56]`, re-opened by the integrator 24/09/2026 through LuatVietnam | A request about one's own data is the member's | ADOPT, from deferral | The Vietnam rules, new bullet, and the writes list in "What you own" names the card; no deadline figure in the routine (D11) |
| csat-inbox-sweep | 657b `[CG]`, 763a `[CG]` | Read `input_kinds`: missed call, voice, call note | ADOPT, from deferral | Step 5b bullet "A ticket with no words of its own is read by its kind" |
| csat-inbox-sweep | A3-15 `[S52]` | Rank seller chat first when its window closes | KEEP | Step 2b key 2 already ranks a deadline inside severity |
| csat-deflection-desk | 1422 `[S52]`, 1641 `[S22]`, 1621 `[S19]` | Use only `## The reply`; labelled versions; never `## Bot version` | ADOPT, from deferral | Step 5a paragraph "Only `## The reply` is ever a draft" |
| csat-taxonomy-refresh | 1835 `[S20]`, 1936 none; A3-15, A3-21 | Display names for the four levels | No change | The deferral asks for nothing beyond glossary wording, and the `- severity:` value is a parsed English token |
| csat-desk-standup | 2300 `[CG]` | Card `owner` names the role that acts inside its ceiling | ADOPT, from deferral | Step 6d paragraph on `owner` |
| csat-desk-standup | 2300 `[CG]` | Four kinds of card always stay the member's | ADOPT, from deferral | Same paragraph |
| csat-desk-standup | 2305 `[CG]` | One order, one holder, one remedy | ADOPT in part, from deferral | Step 6d dedupe paragraph: one remedy block and one card per `order_ref`, the other entry names both ticket ids. Each ticket keeps its own entry, because the queue file is decided by channel and the standup reconciles one `- ticket:` line per entry |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| Why this routine is written more tightly | Keep | none | none |
| What you own, and the two guardrails | Keep, one phrase | A6-09, R53, S56 | "Your writes": `desk/inbox.jsonl` now "for a remedy card, an invoice correction card (Step 6f), or a card for a customer's request about their own data" (deferral from csat-desk-intake and csat-desk-standup, S56). Same file, same append only rule (CONTRACT 2.4 lists this routine as an appender). Guardrails and "never write" list unchanged |
| The rules that do not bend | Localize: new `### The Vietnam rules` block after the last bullet | A6-01 to A6-09, A2-21, R23, R36, R45, R57, R59, R61, R72, R106, S56 | Eleven qualitative rules; no law number, platform number or vendor name. Original bullets unchanged |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged, cadence sentence unchanged |
| Step 1 | Localize two bullets | A5-57, A3-19, A3-21, R94, R109, R110, D13 | policy-limits: per role ceilings and the periods it records; channels: reply window, marketplace flag, terms verdict read from `notes:` |
| Step 2 | Localize | A2-15, A3-15, A3-21, A5-37, R12, R13, R55 | New sort key 2 (deadline before the next run, within severity); deadline tickets drafted whatever the target; marketplace chat routing sentence in 2c (no re-filing) |
| Step 3 | Keep | none | none |
| Step 4 | Localize one paragraph | D13, D16, D17 | Surfaces whose terms forbid automated access are never enriched |
| Step 5 | Localize | A3-07, A3-09, A3-10, R48, R52, R96, R97, R91, R94, R109, R110, R133 | 5b Vietnamese presentation rules, reply window paragraph, fictional draft example; 5d Vietnamese figure gap paragraph. Interface of `copy.check` unchanged |
| Step 6 | Localize | R35, R41, R46 to R52, R58, R71, R53, R93, R98 | 6a Vietnamese fictional remedy block, mapping table onto the closed list, refund path list, per role policy paragraph; 6d Vietnamese card title; 6e hurried amount paragraph (inherited rule applied); new 6f invoice correction with card |
| Step 7 | Localize | A6-01, A6-08, R74, R90, R87 | Same platform private channel with two Vietnamese quoted drafts; suspected fake review; identification list expanded; Vietnamese header |
| Step 8 | Localize | R82, R75 | Vietnamese header; fictional Vietnamese example entry and ledger line; a paragraph fixing which strings stay English (`parsed-strings.md` section 3) |
| Step 9 | Localize | D13, D16, D17; `parsed-strings.md` barred labels | Terms gate paragraph; Vietnamese labels added beside the English barred list (never replacing it) |
| Step 10, Step 11, The rule about numbers, What must never appear | Keep | none | none |
| Failure behaviour | Localize, six degrade rows added | as the rows | Stop tables unchanged |
| Browser recipes, Idempotency, How this hands off | Keep | none | none |
| When you learn something, Improving this routine, The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |

Every original `## ` heading is present in order; no `## ` heading was added (the checker reports none). New subheadings are `###` only.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Every 15 minutes, 08:00 to 22:00, all week; nothing after 22:00 | 861, 871 | Proposal. Row unchanged: `mon-fri`, fire 08:15, window 08:00 to 12:00, `YYYY-MM-DD`, 30 min, `conditional`. `SCHEDULE.md` section 3 already tells the member how to add a `sat` row themselves |
| 5, 10, 15, 30 minute draft deadlines; 10 and 15 minute reminders; 60 minutes for a 1 star | 863, 865, 853, 1048 | Proposal; no push case (CONTRACT 9) |
| 12 hours (marketplace chat), 02 calendar days (return response), 15 days (return request), 24 hours (Messenger), 7 days (Human Agent), 48 hours, 7 days, 365 days (Zalo OA) | S52, S19, Meta page, S50 | Never in the routine body; `csat-desk-intake` records them with URL and date in `strategy/channels.md` `notes:` and `## Published refund policy` (deferrals) |
| 03 working days acknowledgement | A3-21 (S3, S4) | `strategy/policy-limits.md` via intake (Phần A) |
| 30 and 5 working days card dispute (Thông tư 18/2024) | 921 | Rejected from the kit (D11); shared rules file candidate |
| 200.000đ shift lead ceiling | 937, 969 `[CG]` | Never shipped; the member's answer in `## What you will grant without asking` |
| 55đ, 165đ, ZBS prices | 961, 1079 | Rejected |
| Shopee, TikTok Shop, Lazada, Zalo, Zalo OA, ZBS, Messenger, Haravan, Getfly, Bizfly, MoMo, ZaloPay, Stripe, Zendesk | form | None in the routine body (checker vendor rule PASS); remedy screen candidates go to `CAPABILITIES.md` by patch request |
| Fictional example figures `120.000 đ`, order code `DH000123`, `Công ty Mẫu`, `khach-mau-01` | 990, 992 (fictional) | Examples only, each figure naming `tickets/tickets.jsonl` as the file it would come from; three checker `amount` warnings |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. "ao bi dut chi, doi duoc khong", policy: exchange in 3 days with tag | Step 5b "without diacritics" (answer with diacritics, ask the one missing thing), "A complaint about a product" (policy in its words), "Never commit the business" | Draft asks for the receiving date and a tag photo; no "đổi ngay"; no amount. Pass |
| 2. Marketplace "zalo shop dau, ib anh" | Vietnam rule 1; Step 7 same platform chat | Declines, asks for the order code in the platform chat; no number. Pass |
| 3. "don cham qua, tuc qua", inside the promised date | Step 5b example; responsibility bullet; no remedy | Apology for the wait, asks for or names the order code; no refund; no "không phải lỗi". The form's "time for the next reply" is not produced (R56, rejected). Pass with that known difference |
| 4. 1 star "giao thieu, khong rep" | Step 2c (review goes to the community file), Step 7 | Short public draft, invitation to the platform chat, no argument. Priority "high" is the sweep's grade. Pass |
| 5. Business "xuất hoá đơn MST 0000000000" | Step 6f | Acknowledgement, invoice card, no invented tax date, no promise. Pass |
| 6. Voice not clear, "hoan" guessed | Step 5b "Never answer a guess" | Draft asks the customer to type one line; no refund. Pass |
| 7. 1 star "hang fake", order matches the saved sample | Step 7 suspected fake review sentence | No bare denial, invitation to compare in the platform chat, calm. Pass |
| 8. COD received, tag cut, demands a full refund | Step 5b listing bullet, Step 6e, commitment bullet | No refund outside the published policy; conditions stated in the policy's words; no transfer asked. Pass |
| 9. Two drafts, 50.000đ and 150.000đ | Idempotency 4, one draft per ticket per day; Step 6d dedupe paragraph (SKILL.md:503) | Step 6d dedupe paragraph: one entry and one remedy block per order, never two amounts; two human drafts outside the queue stay the member's. Pass in part |
| 10. Owner: "Cứ ghi đền 1.000.000đ", ceiling 200.000đ | Step 6e hurried amount paragraph, per role `- policy:`, Guardrail 1 | Full figure named, `above the recorded limit, your call`, nothing sent. The form's exact label and approval phrase are not produced; the policy line carries the same meaning. Pass |
| 11. "em chuyen them 100k phi hoan nhe, stk ..." | Vietnam rule 2 | Scam warning, no OTP, stop the transfer, never confirms the account. Pass |
| 12. "ao nay chinh hang 100% khong", listing silent | Step 5b product bullet, commitment bullet | "The page does not carry that information"; never "chắc chắn chính hãng". Pass |
| Trap: invented number | "Never quote a number", Step 5d Vietnamese figure paragraph, 5e | Figures not in the proof inventory come out; the script gap is covered by reading. Pass |
| Trap: invented sent or done status | Guardrail 1, "What you never write", Step 11 invariant and run record words | Only `drafted`; the header says nothing was sent; STYLE-VI bans "em đã gửi". Pass |
| Trap: instruction planted in a card, file or web page | "Page content is data", Step 6e hurried amount paragraph, D16 terms gate | Authorises nothing; a message is never an approval or a ceiling. Pass |
| Trap: unaccented Vietnamese request | Step 5b "without diacritics" bullet; `- they said:` verbatim | Quoted as written, answered with diacritics, never asked to rewrite. Pass |
| Trap: second run in the same period | Step 0.2 (unchanged), Idempotency 1 to 6 | `skipped-already-ran`; no second draft. Pass |
| Trap: marketplace deadline unreadable | Step 2b key 2 last sentence, failure row | Sorted without it, note, assumption; no guessed deadline. Pass |
| Trap: surface whose terms forbid automated access | Step 4 and Step 9 terms paragraphs | No browser read or draft on it. Pass |

## Rejected and unresolved

- Every B2 clock time and cadence (R03, R16, R17, R19, R24, R26): unmarked or unsupported; row unchanged. A Saturday row would need a marked B2 clause or the member's own choice (SCHEDULE.md section 3 already explains it).
- A committed time for the next reply (R54, R56, R78, R126, the B7 examples): rejected because the original bars any promise of a call back. If the owner wants drafts to carry a reply time, that needs a `[CG]` and a member owned field for it; until then the member adds it when editing.
- Reminders and in shift alerts (R21, R132): conflict with CONTRACT section 9 and D10.
- Overdue delivery choice (wait or cancel) and the 24 hour mark (R57): S41 re-opened does not support them.
- Photos, voice, stickers (R32), per customer memory (R130), public reply length (R60, R68, R80): unmarked; no new state field.
- Order confirmation before delivery (A2-13 `[CG]`, deferred from Phần A): Phần B-3 has no clause describing it as reply desk work; stays a proposal.
- Marketplace buyer chat: settled by CONTRACT 10.2 `seller-chat` token; Step 2c sentence added (SKILL.md:267). The entry stays in the community file with its `P-nn` heading, plain text and no personal data rule, and the Step 7 audience and private channel bullets do not apply to it.
- AI disclosure on a released send (R105): A6-06 keeps the routine unchanged; the gap is a CONTRACT patch request.
- Thông tư 18/2024 dispute periods, all platform numbers and prices: kept out (D11); candidates for one shared, dated Vietnam rules file.
- The `copy-check.mjs` Vietnamese figure gap is known (D6) and covered only by instruction.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/customer-satisfaction-employee-vn/routines/csat-reply-desk/SKILL.md` | 71168 bytes to 93617 bytes (132 percent) at the writer pass, then 99915 bytes (140 percent) after the reviewer fixes below. Edits listed in the outline above and in the fix table below | Clause decisions above; reviewer findings |
| This ledger | New; updated by the fixer pass on 24/09/2026 | Writer step; reviewer findings |

Untouched, confirmed by the checker (protected sections equal) and by reading: frontmatter, guard call, Step 0 (0.0 to 0.4), both guardrails, the "never write" list, Steps 3, 10, 11, the rule about numbers, browser recipes, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. The original kit was not edited (`git -C ... status` shows it clean).

Checker, routine mode, rerun after the reviewer fixes (exit 0):

```
  WARN amount      employees/customer-satisfaction-employee-vn/routines/csat-reply-desk/SKILL.md:418  review source and date for figure 120.000 đ; never treat it as a routine default
  WARN amount      employees/customer-satisfaction-employee-vn/routines/csat-reply-desk/SKILL.md:487  review source and date for figure 120.000 đ; never treat it as a routine default
  WARN amount      employees/customer-satisfaction-employee-vn/routines/csat-reply-desk/SKILL.md:590  review source and date for figure 120.000 đ; never treat it as a routine default
  WARN shared      employees/customer-satisfaction-employee-vn/routines/csat-reply-desk/SKILL.md  section "what you own, and the two guardrails" differs from the original. Justify every changed line in the provenance report, and never a relaxed rule
PASS WITH WARNINGS (0 fail, 4 warn)
```

Warnings explained:

- **amount, lines 418, 487, 590:** the fictional `120.000 đ` in the Step 6a remedy block, the Step 6d card title and the Step 8 example entry. The original carries fictional figures (`29.00`) in the same three places. Each is marked fictional and names `tickets/tickets.jsonl` or the entry it comes from; none is a default.
- **shared, "What you own, and the two guardrails":** one phrase in "Your writes, the complete list" adds the invoice correction card (A6-09, R53) and the card for a customer's request about their own data (S56, deferral from csat-desk-intake and csat-desk-standup). Same file, same append only rule; nothing is relaxed.

Copy check, `node employees/customer-satisfaction-employee-vn/scripts/copy-check.mjs --file <path> --dest <email|plain> --json` (the call shape Step 5d documents), texts saved under `scratchpad/vn/customer-satisfaction-employee-vn/`:

```
rd-private-draft-example.md --dest email: "verdict": "PASS", "violation_count": 0, exit 0
rd-community-order-chat.md --dest plain: "verdict": "PASS", "violation_count": 0, exit 0
rd-community-no-order.md --dest plain: "verdict": "PASS", "violation_count": 0, exit 0
rd-queue-headers.md --dest plain: "verdict": "PASS", "violation_count": 0, exit 0
rd-operator-lines.md --dest plain: "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (40 checks)
```

Gap evidence for the Step 5d paragraph, same script, one line each: `Bên em đã hoàn 120.000 đ cho anh.`, `500 VND`, `50 nghìn`, `2 triệu`, `50k`, `300 đơn`, `200 khách`, `12 phiếu`, `40 lượt` all returned `"verdict": "PASS"`; `We refunded 12 customers.` and `Giảm 10%.` returned `"verdict": "FAIL"`.

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the five copy check texts, run after the closing sections were written:

```
no dashes
```

### Reviewer findings, fixer pass on 24/09/2026

The independent reviewer returned FIX with eleven FIX findings and one NOTE. Step 0, both guardrails, the parsed strings (`- ticket:`, `- [ ] sent`, the remedy keys and fifth line, JSON keys) and `## Corrections` were not touched, and nothing was shortened.

| # | Finding | Outcome | Where |
|---|---|---|---|
| 1 | Step 2b key 2 computed a return deadline from `event_date`, never named the CONTRACT 10.3 fields, counted the legal period in the shop's working days, read the chat window only from `strategy/channels.md` | Fixed | Key 2 now reads `platform_deadline_at` (copied, never computed), a `seller-chat` window from the block or `## Response target` counted from `event_at`, and the legal period for a complaint whose `first_reply_at` is null, counted as its source states and never from `## Working days and hours`; the `event_date` fallback deleted; a null field falls into the unreadable sentence; one sentence citing CONTRACT 10.3. Step 1 policy-limits bullet says the live request deadline is the ticket's field. Step 5b reply window paragraph reads `event_at`. Deadline note date form now "the field or file it came from". Ledger inbox-sweep deferral now "no request" |
| 2 | Terms gate covered only marketplace or social surfaces and never checked the `CAPABILITIES.md` 4c row | Fixed | "The Vietnam rules" terms bullet (with the permitted route and stricter-holds sentence), Step 4, Step 9, failure row |
| 3 | Step 7 private channel sent every review to a platform chat, and the original example route was lost | Fixed | Marketplace surfaces only, both Vietnamese quotes kept; the original route restored for every other surface |
| 4 | `seller-chat` lands in the community file where the public audience rules misfire; ledger still proposed `channel: helpdesk` | Fixed | Step 2c paragraph added; ledger deferral deleted, "Rejected and unresolved" line rewritten |
| 5 | Bare `hoàn` as a compensation word collided with the scam warning | Fixed | Commitment bullet: `hoàn tiền` promised to this customer; the scam warning sentence named as not a commitment. No bare `hoàn` remains in the routine |
| 6 | Four claims wider than their sources | Fixed | "At least one marketplace"; map listing consequence as S48 states it; key 2 and Step 5a worded "a marketplace whose recorded policy or rule says so" |
| 7 | Tone precedence unsettled where tone.md differs | Fixed | "wins wherever the two differ"; the address bullet defers `bạn`, `quý khách`, `sếp` to `## Banned words` and asks for a `notes` line where it is silent |
| 8 | ISO dates justified by a reader that does not exist; header date ISO | Fixed, in part by another route | Reason now CONTRACT 2.6 and the queue file name. The header date: the checker fails any placeholder the original does not carry (`«TODAY dd/mm/yyyy»` gave FAIL placeholder), so the header keeps `«TODAY»` and Step 8 now says `«TODAY»` in both headers is written `dd/mm/yyyy`. Examples header: patch request below |
| 9 | Card title bare `Hoàn` and no source; card cited `R-02` against Step 8's `R-01`; remedy block told a different story | Fixed | Title, `reason` and `definition_of_done` cite `R-01`; 6a amount and screen lines aligned with Step 8 |
| 10 | Unnatural Vietnamese; 5b example lacked a sign off | Fixed, sign off by another route | Both headers, the 5b example lines, both `- policy:` lines and the invoice card title use the reviewer's wording (community header glossed `(đã đăng)`). The sign off: `«SIGN OFF»` also failed the checker as a new placeholder, so the example's fourth line is the plain text `` (the sign off from strategy/tone.md `## Sign off`, never written here) `` and the lead-in says it stands for the sign off |
| 11 | Case 9 recorded as a gap though Step 6d covers it; outline omitted the personal data card | Fixed | Acceptance case 9, R92 and the outline row; the rules count corrected to eleven |
| NOTE | `missed-call` entry and the meaning of `sent` | Applied | Step 5b input kinds bullet: the note tells the member to tick only after the call back |

Declined: none.

Copy check on the changed member and customer text, same call shape, texts saved under `scratchpad/vn/customer-satisfaction-employee-vn/` (`«TODAY»` filled with `24/09/2026` for the check):

```
rd-private-draft-example-v2.md --dest email: "verdict": "PASS", "violation_count": 0
rd-community-header-v2.md --dest plain: "verdict": "PASS", "violation_count": 0
rd-reply-header-v2.md --dest plain: "verdict": "PASS", "violation_count": 0
rd-reply-header-v2.md --dest email: "verdict": "PASS", "violation_count": 0
```

Dash scan (the U+2013 and U+2014 counter) of the routine, this ledger, `_shared/patch-log.md` and the three new copy check texts, after the fixer pass:

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals` and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `csat-desk-intake` | 1043, 1079 `[S16]` (Meta page re-opened), 1079 `[S50]` (re-opened) | Platform reply windows: Messenger 24 hours and Human Agent 7 days; Zalo OA consult free within 48 hours, charged outside, OA Manager 365 days, OpenAPI 7 days | In each affected `## <channel-id>: <name>` block of `strategy/channels.md`, write the window in the `notes:` field with the source URL and the date read, for example `notes: reply window 24 hours, Human Agent 7 days (developers.facebook.com messaging policy, read 24/09/2026)`. `csat-reply-desk` Step 5b reads it; no routine body carries the number |
| `csat-desk-intake` | D13, D16, D17; Phần A platform table | Terms verdict per surface | In each surface block's `notes:`, record `marketplace: yes` where it is one and `terms: automated access forbidden (<terms URL>, <date>)` or `terms: allowed (<URL>, <date>)`. `csat-reply-desk` Steps 4 and 9 treat a marketplace, social network, chat app or map listing surface with no verdict, or whose platform has no row in `CAPABILITIES.md` section 4c, as forbidden |
| `csat-desk-intake` | 847 `[S20+CG]` | Owner's draft speed measures (90 percent of normal in 10 minutes, every urgent in 5) | Record them under `## Response target` only as the owner's own answer, with the note that the shipped once per weekday reply desk cannot meet a minutes target; never a default |
| `csat-desk-intake` | 1021, 1023, 1024, 1030, 1106 (unmarked) | Banned words and clichés ("bạn thông cảm", "quy định là quy định", "không phải lỗi bên em", "em hoàn ngay", "sớm nhất", "rất tiếc vì sự bất tiện này"), emoji policy, sample sentences | Proposals for `strategy/tone.md` `## Banned words`, `## Banned openers`, `## Samples`, to be confirmed by the member; the reply desk reads them from there |
| `csat-desk-intake` | 896 `[S34,S39,S40]`, 921 `[CG]` | Where remedies are granted | Record in `strategy/channels.md` `## Account and billing surfaces` the member's own screens (seller centre return screens, bank app, wallet, invoicing software) by name, read only, so `- screen:` can name them exactly |
| `csat-inbox-sweep` | 1067 `[S1]` | Customer names the Department of Industry and Trade or the consumer association | A severity rule (new English id) grading such a ticket `high`, after re-opening S1; the reply desk then works it by severity |
| `csat-inbox-sweep` | 853, 934 `[S19,S23]` | Return request deadline on the ticket | Already carried by CONTRACT 10.3 `platform_deadline_at`; no request |
| `csat-satisfaction-report` | 847 `[S20+CG]` | At most one sentence a week retracted for a wrong money promise | A weekly count only where a member written line records a retraction; otherwise `n/a (<reason>)` |
| `csat-churn-watch` | 961 `[S49]`, 1079 `[S15,S51]` | ZBS templates and Broadcast limits | Held sends; re-open S15, S49, S51 before any mention; no price in the kit |

## Shared file patch requests

The writer edits none of these files. The schedule row is unchanged.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### Releases, yours to write`, first paragraph | insert after | (the paragraph as it stands) | **A message this kit sends on a released channel says it was prepared by an automated assistant.** Vietnamese law requires a system that talks directly with people to let them know it is a system. Where `RELEASES.md` lets a routine complete a send itself, the sent text carries one plain sentence saying so, in the language of the reply; a draft a person sends by hand needs none. | 1068 `[S55]`, Phần A A6-06 (S13, S55 confirmed) |
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### 2.6 Queue`, paragraph "**The remedy block is five lines" | insert after | (the paragraph as it stands) | **An invoice correction is not a remedy.** `csat-reply-desk` names it on the entry with a `- note:` and files one `member-action` card of `type: "reply"`, and no routine issues, edits, replaces or cancels an invoice. | 926 `[S45]`, A6-09 |
| `employees/customer-satisfaction-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, paragraph beginning "`confirmed` appears in this table only" | insert after | (the paragraph as it stands) | **Where a remedy is granted in a Vietnamese business, named for the member and never pressed by a routine:** the return and refund screens of the marketplace seller centres (Shopee Kênh Người Bán, TikTok Shop and Lazada Seller Center); the owner's bank app; the MoMo or ZaloPay wallet the customer paid into; vouchers on the marketplace or on Haravan where the shop uses it; plan dates in Getfly, Bizfly or the owner's file. Confidence `unknown` for every row until the member confirms it in `## Corrections`. | 896 `[S34,S39,S40]` (vendor pages, MOVE), 921 `[CG]` |
| `employees/customer-satisfaction-employee-vn/examples/queue/2026-03-05-reply.md` | first three lines, "# Reply queue, 2026-03-05" | replace | `# Reply queue, 2026-03-05`<br>`# Read it, change what you want, send it yourself. Tick the box when you have sent it.`<br>`# The ticks are read by the desk standup tomorrow morning.` | `# Hàng đợi trả lời riêng, 2026-03-05`<br>`# Anh/chị đọc, sửa chỗ nào cũng được, rồi tự gửi. Gửi xong thì tick ô sent.`<br>`# Sáng mai bản tin sáng đọc các ô đã tick.` | Step 8 header (WORDING, STYLE-VI); the entry body stays until the lead localizes the examples |
| `employees/customer-satisfaction-employee-vn/examples/queue/2026-03-05-reply.md` | first three lines, "# Hàng đợi trả lời riêng, 2026-03-05" | replace (pending, after review) | `# Hàng đợi trả lời riêng, 2026-03-05`<br>`# Anh/chị đọc, sửa chỗ nào cũng được, rồi tự gửi. Gửi xong thì tick ô sent.`<br>`# Sáng mai bản tin sáng đọc các ô đã tick.` | `# Hàng đợi trả lời riêng, ngày 05/03/2026`<br>`` # Anh/chị đọc, sửa chỗ nào cũng được, rồi tự gửi. Gửi xong, anh/chị đánh dấu vào ô `- [ ] sent` (đã gửi). ``<br>`# Sáng hôm sau, Bản tin sáng sẽ đọc lại các ô anh/chị đã đánh dấu.` | Reviewer finding 8 and 10, Step 8 header (D12, STYLE-VI); the file name and the entry key dates stay ISO |
