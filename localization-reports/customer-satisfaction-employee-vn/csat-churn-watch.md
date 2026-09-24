# csat-churn-watch: provenance ledger

Status on 2026-09-24: **ledger complete, the sources behind new law, number and platform clauses re-opened, routine edits applied to the variant routine and checked (see Files and checks). Reviewer FIX findings applied on 24/09/2026 (Files and checks, "Reviewer pass").** Written by the B-4 writer. The kit wide Phần A decisions are cited by row id from `_shared/phan-a-ledger.md` and not re-decided here.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/05_CSKH/phieu-da-dien.md`, `## B-4. csat-churn-watch`, form lines 1118 to 1412 (read only).
- Extract: `extract_form_section.py --routine csat-churn-watch`, scratch copy only (`scratchpad/vn/customer-satisfaction-employee-vn/csat-churn-watch-extract.md`, `.json`). 142 rows and answers: 20 with `[S#]`, 5 with `[CG]`, 2 with both, 119 unmarked. B0 box ticked "Làm khác". Full Phần B (B0 to B12, B14).
- Form author (Phần A A1-01): an AI sub agent playing the customer care role, research draft dated 23/09/2026. **No clause has been confirmed by a person running customer care in a Vietnamese business.** `[CG]` marks are the owner's review decisions, not a domain expert's. B9 Câu 15 says so itself: "Không có vụ cá nhân. Ba tình huống tổng hợp".
- Original kit and routine: `employees/customer-satisfaction-employee`, `routines/csat-churn-watch/SKILL.md`, 709 lines, 57599 bytes, VERSION 1.8.0.
- Variant kit and routine: `employees/customer-satisfaction-employee-vn`, same routine id, 76019 bytes after the reviewer pass (132 percent; 74642 after the writer pass).
- Source index: `05_CSKH/literature/nguon.md`, viewing date 23/09/2026 for every row. Sources behind this routine's new adopted clauses re-opened on 24/09/2026 (below).
- Kit version before: 1.8.0. After: set once for the whole kit by the lead (D14); this writer bumps nothing.
- Only one kit file edited: `employees/customer-satisfaction-employee-vn/routines/csat-churn-watch/SKILL.md`.

## Sources re-opened

Only sources behind an ADOPT or MOVE here that states a law, a number or a platform rule and is not already verified in the Phần A ledger. Already verified there and relied on here without re-opening: S7 and S59 (A6-04, consent and a number that refused), S21 (A6-01, off platform), S43 (A3-13, fake refund), S48 (A6-07, reviews for rewards), S68 (silence is not consent), S19 and S23 (return requests), and the D13 platform terms table (Shopee 3.1, Meta 3.2, TikTok Shop data use, Lazada 4.2, Zalo 4.7, Google Maps).

| Source | URL | Date checked | What it supports here | Verdict |
|---|---|---|---|---|
| S50 Zalo OA, Tổng quan các loại tin nhắn | https://oa.zalo.me/home/documents/guides/tong-quan-cac-loai-tin-nhan-tren-zalo-official-account-_3651713298729094511 | 24/09/2026 (WebFetch) | Consult messages inside 48 hours of the follower's last interaction are free, outside charged; OA Manager 365 days, OpenAPI 07 days; Broadcast only 6h00 to 19h59; valid from 01/01/2026 | **Confirmed.** Adopted qualitatively only: a chat channel free inside a window and paid outside it; every number stays out of the kit (D11, A5-32) |
| S51 Zalo OA, Câu hỏi thường gặp tin Broadcast | https://oa.zalo.me/home/documents/guides/cau-hoi-thuong-gap-tin-broadcast | 24/09/2026 (WebFetch) | From 01/06/2026 Broadcast unavailable on Cơ bản and Tiêu chuẩn; Tăng trưởng and Toàn diện at most 04 free per month and 01 per day per follower; older plans keep their quota until expiry | **Confirmed.** No page date shown. The page itself does not state send hours; S50 does. Adopted qualitatively: a broadcast is rationed by plan and is never a save |
| S46 24h.com.vn, Gia tăng boom hàng | https://www.24h.com.vn/thi-truong-tieu-dung/gia-tang-boom-hang-c52a1714932.html | 24/09/2026 (WebFetch) | 10 of 100 orders returned (kitchenware), fashion 15 percent; big marketplaces allow returns within 15 days; "Các đơn giá trị cao nên yêu cầu đặt cọc 10%-30%"; shops put pleading notes in parcels ("Em cầu xin...") | **Partly confirmed.** Article dated 19/11/2025. Deposit advice confirmed (adopted only as "a deposit exists only where the member recorded the rule", with no range). The pleading notes are documented as having spread on social media, **but the page does not say they backfire**, so form 1250 "phản tác dụng ... vẫn hoàn" stays UNVERIFIED |

Not re-opened, index viewing date 23/09/2026, claims not widened: S44 (context only, A3-01), S24 (context only, A5-38), S39 and S40 (vendor pages behind a MOVE, no rule), S20 (replaced by S52 in Phần A), S16 (deferred to B-3), S14 (superseded, A5-33), S6 and S11 (the consent rule rests on S7, S59 and S68 per Phần A), S49 (a price; never a kit default).

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. A marker covers its own clause only; rows are split where clauses carry different markers.

| Id | Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|---|
| B4-01 | 1125 B0 box "Làm khác" | none | KEEP | this report | Report fact; the variant keeps the original's job and localizes its evidence and saves |
| B4-02 | 1127 B0: most customers pay COD or per order, no card "past due" | `[S44]` supports the COD share only | WORDING | this report | Market context (A3-01); the figure never enters the kit |
| B4-03 | 1127 B0: equivalent job is refused delivery, bad review, plan cancel, public complaint; keywords unaccented; saves are exchange, apology, small voucher, stop COD | none | UNVERIFIED | report | Unmarked. Parts land through B4-26, B4-54, B4-98 on their own markers |
| B4-04 | 1133 B1 output: one flag one dossier, quote, order code, one save with amount, no percentage | none | KEEP and WORDING | Step 5 header line `Mã đơn trên sổ`; "Name the order" rule | Inherited dossier; the order line only shows what the ledger's `order_ref` already holds |
| B4-05 | 1135 B1 reader: owner or shift lead, four minutes | none | KEEP | opening paragraph | Same as the original |
| B4-06 | 1136 B1: dossier under 15 lines | none | REJECT | report | Conflicts with the inherited rule that the history goes back as far as the ledger goes |
| B4-07 | 1136 B1: 100 percent carry a quote and an order code or "chưa có mã" | none | WORDING | Step 5 "Name the order" (`chưa nối được đơn`) | Presentation of a field the ledger already carries |
| B4-08 | 1136 B1: zero dossiers sent to a customer | none | KEEP | Guardrail 1, Step 9 invariant 1 | Inherited |
| B4-09 | 1136 B1: outcome recorded after 14 days | none | UNVERIFIED | report | Unmarked; outcome timing belongs to the member (see B4-56 for the `[CG]` part) |
| B4-10 | 1137 B1 bad: flag every customer silent 7 days, 50 percent uncapped, "80 percent probability" | none | KEEP | Step 3c silence, Step 9 refusals, Step 5 ceiling rule | Inherited refusals |
| B4-11 | 1142 B2 trigger: after the morning tickets exist | none | KEEP | SCHEDULE order (sweep, standup, reply desk, churn watch) | Same data dependency |
| B4-12 | 1144 B2: 11:00 every open day, Saturday and Sunday included | none on the time | UNVERIFIED | report | An unmarked B2 clock time never moves a row; `daily` and `sun` are outside the closed vocabulary; 11:00 would also share the Wednesday fire minute of `csat-deflection-desk` |
| B4-13 | 1144, 1154: extra 17:00 pass in sale seasons and 15 days after | `[S19][S46]` support the 15 day return window and the sale season surge, not a second fire | REJECT | report | One fire per period key (`YYYY-MM-DD`); a second daily pass needs a second routine |
| B4-14 | 1144: two passes for seven days after Tết | none | UNVERIFIED | report | Unmarked; same vocabulary limit |
| B4-15 | 1145 B2: five typical requests | none | WORDING | Acceptance and traps below | Trap material only |
| B4-16 | 1146 B2: done within 40 minutes for shops under 500 orders a month | none | UNVERIFIED | report | Row budget stays 25 min |
| B4-17 | 1147 B2: done when the dossier is in the internal channel, customer not messaged | none | KEEP | Step 7 card, Guardrail 1 | Inherited |
| B4-18 | 1148 B2: reminder after 30 minutes, at most twice | none | REJECT | report | A reminder is a push; CONTRACT 9.1 closes push to four blocker classes and "a customer about to leave never earns a push" |
| B4-19 | 1149 B2: sweep blind over half its rounds, no new flag | none (times unmarked) | KEEP | Step 2 | Same guard; the clock window is not adopted |
| B4-20 | 1154 reason: not 09:20 because Vietnamese inboxes just open | none | UNVERIFIED | report | Unmarked reason; row unchanged |
| B4-21 | 1162 B3: 30 days of tickets; missing half the sweeps means no flag | none | KEEP | Step 2 | Inherited |
| B4-22 | 1163 B3: orders, COD and delivery states from the seller centre and the shipping app; no code means "chưa nối được đơn" | none | WORDING (the line) and UNVERIFIED (new surfaces) | Step 5 "Name the order" | The shipping app as a new surface has no marker and no file map owner |
| B4-23 | 1164 B3: plans and debts in a CRM or the owner's own file | `[S39][S40]`, vendor pages | MOVE | Patch request, `CAPABILITIES.md` `billing.read`; Step 1 inputs sentence (no vendor named) | Same as Phần A A5-48; routes stay read only and `unknown` |
| B4-24 | 1164: a shop with no plans drops the renewal wires | none | KEEP | Step 1 inputs, failure row "names no billing or usage surface" | Inherited `n/a (no surface named)` |
| B4-25 | 1165 B3: new reviews on marketplaces and Google Maps | `[S48]` | KEEP | `public_negative` reads the ledger; channels `review` and `marketplace` | Phần A A5-12; each surface under its D13 verdict |
| B4-26 | 1165: no average under 5 reviews in 30 days | none | UNVERIFIED | report | This routine computes no average |
| B4-27 | 1166 B3: voucher ceiling from A7; no amount when it is 0đ | none, but restated by 1245 `[CG]` | ADOPT through B4-54 | Step 5 "Too expensive" bullet | Carried by the `[CG]` row |
| B4-28 | 1168 B3: photos, voice, stickers | none | UNVERIFIED | report | Phần A A2-23; B-2 owns transcription |
| B4-29 | 1174 Câu 2 sentences 1 to 4: Vietnamese status words (`quá hạn`, `chưa chuyển khoản`, `tạm ngưng`, `đã huỷ`, `hết hạn`, `còn nợ`), no "past due", auto renew off rare because of manual transfers, downgrade appears as `đổi sang gói nhỏ` or `giảm số buổi` in a sales note | `[CG]` | ADOPT | Step 3 `billing_signal` row; Step 4 read 1; Step 1 inputs sentence | Owner approved. Strings are copied verbatim, never translated, as the original already requires |
| B4-30 | 1174 sentence 5: a shop selling per order uses none of these | none | KEEP | Step 1 inputs sentence | Same as B4-24 |
| B4-31 | 1179 Câu 3: return requests are made in the seller centre | `[S19][S23]` | KEEP and ADOPT (read only) | Step 4 paragraph on marketplace seller views: never press accept, refuse, refund or respond on a return request | S19 and S23 confirmed in Phần A; the press is the refund, so it is Guardrail 1 |
| B4-32 | 1179: off platform channels; banks report a card dispute; no Stripe inbox | none | UNVERIFIED | report | Context; no rule |
| B4-33 | 1179: a fake refund call is not a real dispute | `[S43]` | ADOPT | Step 3c bullet "A fake refund or a fake courier"; digest line; failure row | S43 confirmed (A3-13). The bullet reads the rule id `fake-refund-scam` in the ticket line's `severity_rules`, the id CONTRACT 10.2 names in the starting set |
| B4-34 | 1179: staff seeing "ngân hàng bảo hoàn" ask the owner, never transfer | none | KEEP | Guardrail 1 | Inherited |
| B4-35 | 1184 Câu 4: keys in order: order code, 10 digit phone, name plus ward; nickname not enough; no join means two files "chưa ghép" | none | UNVERIFIED (phone, name plus ward) and WORDING (`chưa ghép`) | Step 3d | The order code key is adopted on 1348 `[CG]`; phone and address keys stay proposals |
| B4-36 | 1192 to 1198 B4 steps 1 to 7 | none | KEEP | Steps 2 to 7 | Same order as the original |
| B4-37 | 1199 B4 step 8 and 1273 B6: the AI only proposes clearing, a person records it; clear only with an order or a collected period | none | REJECT | report | CONTRACT 2.7 makes `cleared` this routine's own line and keeps it distinct from the member's `saved`; unmarked text cannot move ownership |
| B4-38 | 1206 B5: `huỷ`, `không lấy`, `không mua nữa`, `nghỉ gói` flag at once on one sign | none | KEEP (single wire) and UNVERIFIED (Vietnamese default phrases) | Step 1 phrase paragraph | `cancellation_language` is already a single wire; the phrases are unmarked, so the member adds them |
| B4-39 | 1207 B5: 2 complaints in 14 days or a rise to high | none | UNVERIFIED | report | Shipped 3 in 30 and 2 steps in 30 stay; the member may tune them in one line |
| B4-40 | 1208 B5: 1 to 2 stars is a public negative | `[S48]` supports the reason only | KEEP and WORDING | Step 3 `public_negative` row: "one or two stars" on a five star scale | Same arithmetic as the original midpoint |
| B4-41 | 1208: a 1 to 2 star review flags on its own; answer within 60 minutes | none | UNVERIFIED | report | Single wire status unmarked; 60 minutes is B-3 and unmarked (A2-18). The member can add `public_negative` to `single_wire_flags` |
| B4-42 | 1208: comments with "lừa", "fake", "bóc" | none | UNVERIFIED | report | Unmarked keyword trigger |
| B4-43 | 1209: off marketplace, the same phone refusing 2 COD orders in 30 days flags "stop COD for this number"; no new order without a deposit | none on the rule; `[S46]` on the reason (refusals cost fees) | UNVERIFIED | report; Outbound deferral to `csat-desk-intake` and `csat-inbox-sweep` | No marker supports the 2 in 30 threshold or a new wire; refused deliveries do not reach the ticket ledger today |
| B4-44 | 1209: marketplace orders never asked for a deposit or a transfer outside the platform | `[S21]` | ADOPT | Step 5 "Anything off a marketplace" | S21 confirmed (A6-01, A3-16) |
| B4-45 | 1210: a new customer's unconfirmed order of 1.000.000đ or more is not "about to leave" | none | KEEP | Step 3c bullet "An order not yet confirmed" | Already not a wire; bullet restates the inherited "a guess is not a wire" |
| B4-46 | 1210: suggest a confirmation call or a 10 to 30 percent deposit; threshold is the owner's | `[S46]` on the deposit (re-opened, confirmed), `[CG]` on "threshold up to the owner" | ADOPT, qualitative | Step 5 "A deposit or prepayment the member never set"; failure row for no limits | Only where `strategy/policy-limits.md` records the member's rule; no range or threshold enters the kit (D11, A7-11) |
| B4-47 | 1210: marketplace orders confirmed only in marketplace chat | `[S21]` | ADOPT | Step 5 "Anything off a marketplace" | Same as B4-44 |
| B4-48 | 1211: plan overdue by 3 days raises a renewal flag | none | UNVERIFIED | report | `billing_signal` already fires on the overdue string itself (B4-29); a 3 day grace is unmarked |
| B4-49 | 1211: remind at most 1 call and 3 messages in 24 hours, in advertising hours, when the content invites renewal | `[S7]` | ADOPT, qualitative | Step 5 "A save that is a promotion is labelled as one" | Phần A A6-04; hours and counts stay out (D11) |
| B4-50 | 1212: silent 14 days, no complaint, no flag | none | KEEP | Step 3c silence | Inherited |
| B4-51 | 1214: conflict rules | none | KEEP | 3a single wire; Step 2; Step 5 save matching | Already the original's order |
| B4-52 | 1220 Câu 5: retail and plan definitions, threshold 2, data in seller centre and tickets | none on thresholds | UNVERIFIED | report | Unmarked |
| B4-53 | 1220: plan data in a file or CRM | `[S39]` | MOVE | as B4-23 | Vendor page |
| B4-54 | 1220 and 1225: no percentage of churn; no usage wire without usage data | none | KEEP | Step 9 refusals; `usage_collapse` `n/a` | Inherited |
| B4-55 | 1225 Câu 6: six signs with thresholds | none | UNVERIFIED | report | Unmarked |
| B4-56 | 1230 Câu 7: worrying signals (second failed delivery, unhandled return, 3 days overdue, "trừ hai lần") | none | UNVERIFIED | report | "charged twice" already reaches the ledger as a money ticket |
| B4-57 | 1230: from 01/04/2026 TikTok Shop sellers bear return and cancel fees | `[S24]` | WORDING | this report | Not re-opened; context only (A5-38) |
| B4-58 | 1235 Câu 8: sixteen unaccented phrases ("thoi e khong lay", "huy dum e", "nghi goi" ...) | none | UNVERIFIED | report; Outbound deferral to `csat-desk-intake` | Unmarked phrases cannot become shipped defaults |
| B4-59 | 1235 and A3-07: customers type without diacritics | none (A3-07 WORDING) | WORDING, matching mechanics | Step 1 phrase paragraph; rules that do not bend, "how they write" | Repo mechanics, like the slug rule in the worked example: a member listed phrase of two or more words also matches its unaccented spelling, with `đ` read as `d` as CONTRACT 10.1 rule 10 does; a one word phrase matches only as listed, which the routine names as narrower than rule 10 on purpose because a listed phrase fires a flag by itself. Adds no phrase and no threshold |
| B4-60 | 1240 Câu 9: urgent combinations in 30 minutes; clear on an order or a collected period; "hết theo dõi" | none | UNVERIFIED and REJECT (clearing) | report | Clearing stays the inherited evidence plus window rule |
| B4-61 | 1245 Câu 10: saves by cause: delivery fault means exchange or send the missing part at the item's price within the ceiling; a wrong charge is refunded by the same path, the owner presses; "too expensive" gets no discount at a 0đ ceiling | `[CG]` | ADOPT | Step 5 save bullets | Owner approved; narrows the original's save choice |
| B4-62 | 1245: a signed ceiling caps the discount, and never above 10 percent of the item price | `[CG]` | ADOPT | Step 1 state `save_limits.discount_max_fraction_of_item: 0.1`; Step 5 "Too expensive" | A member default in owned state, lowers only (D18) |
| B4-63 | 1245: success is the replacement received in 7 days and a refund record matching the amount (before the `[CG]`); a new order in 14 days and "a bare ok is not success" (after the `[CG]`, unmarked) | `[CG]` on the first two clauses only | ADOPT (7 days, refund record match) and UNVERIFIED (14 day window, bare ok clause) | Step 1 state `outcome_windows_days` with `replacement_received: 7` and `new_order: null`; Step 5 `outcome check:` line, where a discount save reads `n/a (no window recorded)` until the member sets `new_order` | Owner approved the clauses before the mark. Split on review 24/09/2026: by this ledger's own convention (B4-30) a clause after a `[CG]` is unmarked, and no record says the owner's mark covers the whole cell, so the 14 day default and the bare ok sentence left the routine; the member still writes `saved` or `lost` |
| B4-64 | 1250 Câu 11: apology and handling on time cost 0đ | none | KEEP | Step 5 call save, "cost: thời gian" | Inherited |
| B4-65 | 1250: voucher 20.000 to 50.000đ for a small fault | `[CG]` | DEFER | `csat-desk-intake` | An amount is never a kit default; usable only as the range intake shows the member when asking for the ceiling |
| B4-66 | 1250: free shipping on the next order, about 30.000đ | none | UNVERIFIED | report | Unmarked |
| B4-67 | 1250: 10 to 30 percent deposit on high value orders | `[S46]` | ADOPT, qualitative | as B4-46 | Range stays out |
| B4-68 | 1250: a COD confirmation call costs one call | none | UNVERIFIED | report | Unmarked |
| B4-69 | 1250: a pleading note in the parcel backfires | `[S46]` does not support "backfires" | UNVERIFIED | report | Re-opened: S46 documents the notes, not their effect |
| B4-70 | 1250: a voucher to trade for 5 stars backfires | `[S48]` | ADOPT | Step 5 "A reward for a rating" | Phần A A6-07. S48 covers Google Maps only, so the routine says Google removes such reviews and every marketplace is treated the same way, never that every platform penalises them |
| B4-71 | 1250: 50 percent off with no ceiling backfires | none | KEEP | Step 5 ceiling rule | Inherited plus B4-61 |
| B4-72 | 1255 Câu 12: inbox 15 minutes, marketplace under 12 hours, comments 30 minutes | `[S20]` on 12 hours | DEFER | `csat-desk-intake`, `csat-desk-standup` (A3-15) | Response targets are `## Response target`, read by `unanswered_past_target` |
| B4-73 | 1255: Messenger 24 hours, HUMAN_AGENT unverified | `[S16]` | DEFER | `csat-reply-desk` (A5-35) | This routine sends nothing |
| B4-74 | 1255: Zalo OA consult free within 48 hours, 55đ outside | `[S49][S50]` | ADOPT, qualitative (S50 re-opened); REJECT the price | Step 5 promotion paragraph, last sentence; patch request to `CAPABILITIES.md` | A5-32 and A4-25 deferred this to B-4; the window and price stay out of the kit |
| B4-75 | 1255: a renewal reminder outside an open case is advertising: 3 messages, 1 call per 24 hours, call hours | `[S7]` | ADOPT, qualitative | Step 5 promotion paragraph | A6-04 |
| B4-76 | 1255: never Zalo to retain a marketplace customer | `[S21]` | ADOPT | Step 5 "Anything off a marketplace" | A6-01 |
| B4-77 | 1260 Câu 13: 1 to 2 stars on marketplaces and Google Maps | `[S48]` | KEEP and WORDING | as B4-40 | |
| B4-78 | 1260: group posts without an order still flag; never argue in public; a bare 1 star flags | none | UNVERIFIED | report | Reading customer groups is also rejected by D13 and A5-18 |
| B4-79 | 1268 B6: at most 4 new flags a round | none | KEEP | `caps.new_flags: 4` | Same default |
| B4-80 | 1269 B6: voucher up to the signed ceiling; 0đ means apology only | none | KEEP | as B4-61 | |
| B4-81 | 1270, 1272 B6: calls, messages and "saved" are always a person's | none | KEEP | Guardrail 1; "What you never write" | Inherited |
| B4-82 | 1271 B6: turning off COD for a number after 2 refusals in 30 days | none | UNVERIFIED | report | As B4-43 |
| B4-83 | 1275 B6: hand over dossier id, quote, order code, wires, save, amount, screen | none | KEEP | Step 5 template | Already the dossier |
| B4-84 | 1275: a 30 minute deadline when 1 star or cancel | none | UNVERIFIED | report | |
| B4-85 | 1284 B7 good example 1 (two refused COD orders) | none | UNVERIFIED | report | Presumes the unadopted COD wire (B4-43) |
| B4-86 | 1291 B7 good example 2 (overdue plan, no discount, one reminder in hours) | `[S7]` on the hours | EXAMPLE | Step 5 fictional dossier (overdue `chưa chuyển khoản`, no discount) | Shape only; no clock time, no price |
| B4-87 | 1298 B7 good example 3 (1 star, invite exchange, no "khách khó tính") | none | WORDING | rules that do not bend, characterisation line | A single review stays a single wire |
| B4-88 | 1305, 1306 B7 bad example 1 (85 percent, 200.000đ, Zalo now) | none | KEEP | acceptance; Step 9 refusals | Inherited refusals |
| B4-89 | 1312, 1313 B7 bad example 2 and fix | `[S21]` on the fix | ADOPT | as B4-44 | |
| B4-90 | 1318 Câu 14: order of the dossier and phrases banned if leaked | none | WORDING | rules that do not bend, characterisation line (`khách bom chuyên nghiệp`, `khó tính`, `đừng bán cho loại này`, nickname) | Presentation of the inherited rule |
| B4-91 | 1324 B8: no "em" in the dossier | none | REJECT | report | STYLE-VI binds: the assistant is "em"; the dossier is mostly impersonal anyway |
| B4-92 | 1326 B8: 15 lines | none | REJECT | report | As B4-06 |
| B4-93 | 1327 B8: no emoji, keep the verbatim | none | WORDING | Step 5 language paragraph | |
| B4-94 | 1328 B8: 50.000đ, 23/09/2026 11:10 | none | WORDING | Step 5 language paragraph (`dd/mm/yyyy`) | No clock time adopted |
| B4-95 | 1329 B8: banned "xác suất", "chắc chắn sẽ bỏ", "bom thủ", "đền thoải mái" | none | WORDING | Step 9 refusals; characterisation line | Examples of inherited refusals |
| B4-96 | 1330 B8: opener "HS-22, cần anh/chị tick trước 11:40"; closer "Chưa nhắn khách." | none | WORDING (closer) and REJECT (opener) | Step 5 last line `Chưa nhắn khách. Chưa hoàn hay tặng gì cho khách.` | Opener carries a clock time and an id the kit does not have |
| B4-97 | 1331 B8: marketplace dossier shows only `0900 *** 111` | none | UNVERIFIED | report | Protective but unmarked |
| B4-98 | 1338 B9: two nicknames, one order code or the last four phone digits | none | ADOPT (order code, through B4-102) and UNVERIFIED (phone digits) | Step 3d | |
| B4-99 | 1339 B9: "không lấy" but COD collected | none | UNVERIFIED | report | No COD wire |
| B4-100 | 1340 B9: 1 star with no matching order | none | KEEP | Step 3c "A low rating from somebody who is not a customer" | Inherited |
| B4-101 | 1341, 1343 B9: blind morning; two flags for one phone | none | KEEP | Step 2; Step 3b | Inherited |
| B4-102 | 1342 B9: owner wants a promotional call at 21:00 | `[S7]` | ADOPT, qualitative | Step 5 promotion paragraph; failure row "a message sent tonight" | A6-04; the hours stay out |
| B4-103 | 1348 Câu 15 (1): join names only on the same order code | `[CG]` | ADOPT | Step 3d; state `joined_slugs`; Step 7 dedupe | Owner approved; never on a name, nickname or partial phone |
| B4-104 | 1348 (2): "không lấy" because of a wrong size is not leaving; read the whole thread | `[CG]` | ADOPT | Step 5 save bullet | Keeps the flag, changes the save to the exchange |
| B4-105 | 1348 (3): a business customer quiet while waiting for an invoice; ask the accountant first | `[CG]` | ADOPT | Step 5 save bullet | |
| B4-106 | 1356 B10: Nghị định 91/2020 limits | none in the form row | KEEP through A6-04 | Step 5 promotion paragraph | Numbers out (D11) |
| B4-107 | 1357 B10: Zalo OA Broadcast from 01/06/2026 | `[S51][S50]` | ADOPT, qualitative (both re-opened) | Step 5 "A broadcast" | Numbers out |
| B4-108 | 1358 B10: PDP law: dossier never shown to customer groups; phones masked in the brief | none | KEEP (first half) and UNVERIFIED (masking) | "Personal data stays inside «CSAT_ROOT»" | Inherited |
| B4-109 | 1359 B10: no pulling Shopee customers elsewhere | none (A6-01 `[S21]`) | ADOPT | as B4-44 | |
| B4-110 | 1360 B10: 77,5% COD | none | WORDING | this report | A3-01 |
| B4-111 | 1361, 1362 B10: Nghị định 330/2026 fines | none | REJECT | report | A6-05; fines never copied |
| B4-112 | 1363 B10: Luật 19/2023 Điều 42 khoản 3, a customer may end a continuing service at any time | none | UNVERIFIED | report | Unmarked legal claim; the original already never obstructs a cancellation |
| B4-113 | 1368 Câu 16: dossier only for the shift; no quotes posted; promotion under Decree 91; marketplace never to Zalo; "đừng nhắn nữa" stops promotion; silence is not consent | `[S6][S7][S11][S21]` | ADOPT | Step 5 promotion paragraph; failure row "asked not to be messaged" | S7, S21, S68 confirmed in Phần A; S11 partly (silence rests on S68) |
| B4-114 | 1368: Zalo limits per S14 | `[S14]` | REJECT | report | Superseded 2023 figures (A5-33) |
| B4-115 | 1368: handling a current order on its own channel is not a campaign | none | KEEP | Step 5 promotion paragraph ("rather than resolving the order") | Restates the scope of A6-04 |
| B4-116 | 1376 to 1387 B11 twelve cases | none | acceptance | Acceptance and traps | |
| B4-117 | 1392 to 1398 B12 self checks | none | KEEP | Step 9 invariant; Step 5 rules | Masking check stays UNVERIFIED (B4-97) |
| B4-118 | 1403 B14: remember open dossier, date, wires, ticked save, allowed clear date | none | KEEP | `accounts{}` | Inherited |
| B4-119 | 1405 B14: record flags not raised for missing data, dossiers unopened after 30 minutes | none | KEEP (first) and UNVERIFIED (second) | Step 2 blocker line | |
| B4-120 | 1406 B14: 11:10 list of new flags to the internal channel | none | REJECT | report | Clock time; delivery belongs to the standup's brief; D10 |
| B4-121 | 1411 Câu 17: outcome recorded by the shift lead, 14 or 21 days, three states "còn mua", "mất", "chưa biết" | none | KEEP and UNVERIFIED (days) | "What you never write"; `n/a (no outcome recorded)` | Member writes `saved` or `lost`; "chưa biết" is the existing no outcome case |
| B4-122 | D13 and D16 platform terms (Phần A table) | Phần A, re-opened 24/09/2026 | ADOPT | new bullet in the rules that do not bend; Step 4 marketplace paragraph; Step 8a rating read; failure row | Own account only, one flagged customer at a time, only by the route `CAPABILITIES.md` 4c permits for that platform (connector or `exports/`; the browser only where the row allows it and the member confirmed it); automated collection is forbidden on every row, manual collection only on the one row that says so; a marketplace customer's dossier suggests handling that order or complaint and nothing else (CONTRACT 10.1 rule 1); a marketplace rating that clears a wire comes only from a 4c route or `report/manual.md` (4b `reviews.read`) |
| B4-123 | Repo mechanics, no form clause: `copy.check` misses Vietnamese counts and amounts (D6) | none | WORDING | Step 5 "Then run the judge" | Probe run on 24/09/2026 confirms (Files and checks) |
| B4-124 | Repo mechanics: dossier headings, digest labels and card text in Vietnamese | none | WORDING | Step 5 template, Step 7, Step 8b | Only `## What has happened since` and the digest's first three lines are read by another file; kept English |

## Decision counts

| Decision | Count |
|---|---|
| ADOPT | 26 |
| MOVE | 2 |
| KEEP | 38 |
| WORDING | 19 |
| EXAMPLE | 1 |
| DEFER | 3 |
| REJECT | 12 |
| UNVERIFIED | 37 |
| Total decisions | 138 |

Counted one per decision word, so a split row (for example B4-22 WORDING and UNVERIFIED) counts in both columns; B4-116 (acceptance) is not counted. 124 rows.

### Deferrals received (integrator pass, 24/09/2026)

Outbound deferrals from other routines of this kit, settled by the integrator under the writers' editing rules: applied only where the clause carries `[CG]` or an `[S#]` re-opened on 24/09/2026, Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Decisions: ADOPT (from deferral), KEEP (already covered by this routine's text), DECLINED.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| csat-reply-desk | 961 `[S49]`, 1079 `[S15,S51]` | Official account templates and broadcasts are held sends | KEEP | "Four saves are never suggested" names a broadcast, and guardrail 1 holds every send. S15 and S49 were not re-opened and no price enters the kit |
| csat-satisfaction-report | 2079 Câu 8, 2084 Câu 9, unmarked | Saved and lost signals from orders and payments | DECLINED | No marker; the member still writes both statuses |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| `## A flag is never a bare score, and this is why` | Keep | none | none |
| `## What you own, and the two guardrails` (with both `###` lists) | Keep byte for byte | none | none (checker: no shared warning) |
| `## The rules that do not bend` | Localize | B4-90, B4-95, B4-59, B4-122 | Characterisation bullet gains the Vietnamese labels it bars; selection bullet says unaccented writing is weighed like any other; one new bullet on marketplace and social platform reading |
| `## Step 0. The five opening lines` (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged, so the 0.2 cadence sentence is unchanged |
| `## Step 1. Preflight, state, and the inputs` | Localize | B4-62, B4-63, B4-103, B4-59, B4-23, B4-29 | State adds `save_limits`, `outcome_windows_days`, `joined_slugs` (owned file, this routine reads and writes); example slug `tran-thi-b`; paragraph on the two new fields; tuning may lower `save_limits`, never raise; phrase paragraph; inputs sentence on manual transfer plans |
| `## Step 2. The guard that stops this routine lying about a quiet week` | Keep | B4-19, B4-21 | none |
| `## Step 3. The trip wires, run on the file side first` | Localize | B4-40, B4-29, B4-33, B4-45, B4-103 | Grouping after 3d; one or two stars; phrase evidence as typed; `billing_signal` Vietnamese states; two 3c bullets; new `### 3d. One customer under two names` (a `###`, so no extra `## ` heading) |
| `## Step 4. The account, billing, and usage read, only for accounts already tripped` | Localize | B4-29, B4-31, B4-122 | Vietnamese status strings in read 1; marketplace seller views paragraph |
| `## Step 5. Write the dossier` | Localize | B4-04, B4-07, B4-61 to B4-63, B4-44, B4-46, B4-49, B4-70, B4-74, B4-102 to B4-105, B4-107, B4-113, B4-123 | Language paragraph; Vietnamese fictional dossier; "Name the order"; renamed section reference; `policy:` gloss; `outcome check:` row; Vietnamese save causes; four never suggested saves; promotion paragraph; exact closing line; judge gap sentence |
| `## Step 6. The ledger line` | Localize example slug | none | `acme-co` to `tran-thi-b` only |
| `## Step 7. The card` | Localize | B4-103, B4-124 | Vietnamese `title`, `reason`, `definition_of_done`; joined slug dedupe; planted instruction paragraph |
| `## Step 8. Clear what receded, write the digest, release` | Localize | B4-122, B4-33, B4-124 | 8a marketplace rating read in the member's own seller view; 8b Vietnamese labels, fake refund line, phrase list line, source bracket under the first three lines |
| `## Step 9. The invariant, then one run record` | Keep, two bullets extended | B4-95 | Refusal list: Vietnamese probability words; certainty and open handed compensation |
| `## Failure behaviour: what stops, and what carries on` | Localize degrade table | B4-46, B4-33, B4-103, B4-122, B4-113, B4-59, trap rows | No limits row extended; six new degrade rows; no new status |
| `## Browser recipes this routine uses`, `## Idempotency, in one place`, `## How this hands off`, `## When you learn something, fix the file`, `## Improving this routine`, `## The one push`, `## Corrections` | Keep byte for byte | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 11:00 daily incl. Saturday and Sunday; extra 17:00 in sale seasons and 15 days after; two passes seven days after Tết | 1144, 1154 | Row unchanged: `mon-fri`, fire 09:20, window 09:05 to 13:00, key `YYYY-MM-DD`, budget 25 min, browser `conditional`. No shipped time prose touched |
| 40 minutes to finish | 1146 | Proposal; budget 25 min stays |
| 30 minute reminder, 60 minute review reply, 11:10 list | 1148, 1208, 1406 | Rejected or unverified; push stays CONTRACT 9 |
| Getfly, Bizfly, owner's file | 1164 | Patch request to `CAPABILITIES.md` `billing.read` (A5-48); routine names no vendor |
| Zalo OA 48 hour window, 55đ, Broadcast 04 per month, 01 per day, 06:00 to 19:59 | 1255, 1357 | Qualitative only in Step 5; numbers in this report only; patch request to `CAPABILITIES.md` without numbers |
| Decree 91 hours and counts; Decree 330 fines | 1211, 1255, 1342, 1356, 1361, 1362 | Out of the kit (D11); Step 5 says the member checks them |
| 10 percent discount cap; 7 day replacement window; 14 day new order window | 1245 `[CG]` (the 14 day clause sits after the mark) | State defaults `save_limits.discount_max_fraction_of_item: 0.1` and `outcome_windows_days.replacement_received: 7`; `new_order` ships `null` (B4-63 UNVERIFIED), the member sets it; member editable; `save_limits` lowers only |
| Voucher 20.000 to 50.000đ; free ship 30.000đ; deposit 10 to 30 percent; 1.000.000đ threshold; 2 refusals in 30 days; 3 days overdue | 1250, 1210, 1209, 1211 | Out of the kit; deferrals and proposals below |
| Fictional example figures (DH000123, 04/03/2026, 19/03/2026, `4 phiếu`, `4 trên 5`) | Step 5, 7 | Fictional; every figure sits in a block with its bracket source |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. "thoi e khong lay", DH000123, COD, not delivered: cancel flag, stop delivery, no voucher | Step 1 phrase paragraph (two word unaccented match of a member listed phrase); Step 3 `cancellation_language` single wire; Step 5 "Money taken wrongly" and ceiling bullets | **Partial gap.** Flags only once the member has listed `không lấy` (the form's phrases are unmarked, B4-58). Never skipped for being unaccented: the rules that do not bend and the digest line naming an empty Vietnamese list. "Stop delivery" is the member's press |
| 2. Two complaints 5 days apart, same phone, normal then high: two signs, flag | Step 3 `escalating_severity` (2 steps) and `repeat_contact` (3 in 30) | **Gap.** Normal to high is one step and two tickets are under 3; no flag on shipped defaults. The form's thresholds (B4-39) are unmarked; the member can tune `wires` in one line |
| 3. Silent 12 days, last order delivered: no flag | Step 3c silence; Step 2 | Pass |
| 4. Shopee 1 star "dat qua" at 10:50: flag, answer in 60 minutes, voucher 0đ, no Zalo | Step 3 `public_negative`; Step 5 "Anything off a marketplace", "Too expensive" | **Partial gap.** One wire, no flag unless the member adds `public_negative` to `single_wire_flags` (B4-41). No Zalo and no voucher hold |
| 5. Plan 300.000đ overdue 4 days, no quit word: renewal flag, one reminder in office hours, no night call | Step 3 `billing_signal` on `chưa chuyển khoản` (B4-29); Step 5 promotion paragraph | Pass for the flag and the save label; the hours are named as the member's check, never stated |
| 6. One failed delivery, "hom nay e di vang": do not turn off COD | Step 3c single ticket and guess; no COD wire | Pass |
| 7. Facebook nick and Shopee name differ, same DH000123: one dossier | Step 3d join on `order_ref`; Step 7 dedupe on joined slugs | Pass, provided the sweep carries `order_ref` on both tickets (outbound deferral) |
| 8. "khong lay" but the waybill shows COD collected: no bom label, reconcile money | Rules that do not bend (no `bom` label); Step 5 "Money taken wrongly" | Partial: no label and no demand; the reconciliation step itself is unverified (B4-99) |
| 9. Shopee disconnected 6 of 8 rounds: no new flag | Step 2 | Pass |
| 10. Owner: "write 90% will leave, give 300.000đ", ceiling 50.000đ | Step 9 refusals (`xác suất`, number beside `sẽ bỏ`); Step 5 "Too expensive" at most the ceiling; failure row "asks for a percentage, a bigger gesture" | Pass |
| 11. "nhan zalo nay gui ma otp de giu uu dai" | Step 3c fake refund bullet; failure row; Guardrail 2 | Pass: no wire, no OTP copied, digest warning line |
| 12. "this customer is difficult", no quote, no order | Step 3c "A guess"; rules that do not bend, characterisation line | Pass: no dossier |
| Trap: invented number | Rules that do not bend, "Never invent"; Step 5 "Every claim carries its source"; judge gap sentence; Step 9 "The rule about numbers" | Pass by instruction; `copy.check` cannot catch a Vietnamese count (probe below) |
| Trap: invented sent or done status | Guardrail 1; Step 5 closing line `Chưa nhắn khách. Chưa hoàn hay tặng gì cho khách.`; Step 7 `done_kind: member-action` and planted instruction paragraph; Step 9 invariant 1 | Pass |
| Trap: instruction planted in a card, file or web page ("mark this account saved", "offer 50% now") | Rules that do not bend, "Page content is data"; Step 7 planted instruction paragraph; "What you never write" | Pass |
| Trap: an unaccented Vietnamese request | Rules that do not bend (unaccented weighed like any other); Step 1 phrase paragraph; Step 5 language paragraph (quoted as typed) | Pass for reading and quoting; firing depends on the member's list (case 1) |
| Trap: a second run in the same period | Step 0.2; Idempotency | Pass (`skipped-already-ran`) |
| Trap: a marketplace listing or a competitor page in scope | New platform bullet; Step 4 marketplace paragraph; Step 8a | Pass: own seller account only |

## Rejected and unresolved

- **COD refusal wire** (1209, 1220, 1230, 1271, B7 example 1, B9 1339): the most Vietnamese signal in the form, but its 2 in 30 threshold and the stop COD action are unmarked, and refused deliveries do not reach `tickets/tickets.jsonl` today. A later edit needs a `[CG]` on the threshold, a sweep rule that captures a refused delivery as a ticket, and a file map entry.
- **Vietnamese cancellation phrases** (1206, 1235): unmarked; the member adds them. An owner `[CG]` on the list in 1235 would let a later pass ship them as defaults.
- **Outcome window of 14 days for a new order after a discount, and "a bare ok is not success"** (1245, after the `[CG]`): unmarked by this ledger's convention; `new_order` ships `null` and a discount save's outcome check reads `n/a (no window recorded)` until the member sets it. An owner record that the 1245 mark covers the whole cell would let a later pass restore 14.
- **Thresholds 2 complaints in 14 days, rise to high, 3 days overdue, 1 to 2 stars as single wire** (1207, 1211, 1208): unmarked; B11 cases 2 and 4 are gaps on shipped defaults until the member tunes `wires` or `single_wire_flags`.
- **Schedule** (1144, 1154): unmarked time; the extra pass is impossible under one period key.
- **Clearing proposed by the AI and recorded by a person** (1199, 1273, 1240): conflicts with CONTRACT 2.7.
- **15 line dossier, no "em"** (1136, 1326, 1324): conflicts with the inherited full history rule and STYLE-VI.
- **Pleading notes backfire** (1250): S46 re-opened does not say so.
- **Phone masking in dossiers and the brief** (1331, 1358, 1396): protective but unmarked.
- **Luật 19/2023 Điều 42 khoản 3** (1363): unmarked legal claim; would need an `[S#]` to become a rule.
- **Fines** (1361, 1362): rejected (A6-05).
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1-01).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/customer-satisfaction-employee-vn/routines/csat-churn-watch/SKILL.md` | 57599 to 74642 bytes (130 percent) after the writer pass, 76019 bytes (132 percent) after the reviewer pass; see the outline table | Clause decisions above; reviewer findings below |
| This ledger | new | Writer step |
| Scratch texts under `scratchpad/vn/customer-satisfaction-employee-vn/` | `churn-dossier-example.md`, `churn-digest-example.md`, `churn-card-text.md`, `churn-promo-save-lines.md`, `vn-count-probe.md`, `en-count-probe.md` | Copy check inputs |

Untouched, confirmed by the checker (protected sections equal, no shared warning) and by `diff`: frontmatter, guard call, `## What you own, and the two guardrails`, Step 0 (0.0 to 0.4, cadence sentence included), Step 2, the browser recipes table, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. Every original `## ` heading outside code fences present in order; no `## ` heading added. Four `## ` headings inside the fenced dossier template are Vietnamese (B4-124); no other file reads them, and `## What has happened since` is kept. The original kit was not edited.

Implementation notes:

- **The digest's first three lines stay English and gained a bracket line under them.** `csat-desk-standup` reads the open flag count there. In the original the line `Open flags: 1. Accounts checked ...` itself fails `copy.check` (`"1. Accounts" reads as a count`); the added `[risk/risk.jsonl, state/csat-churn-watch.json]` in the same block fixes that inherited defect without changing the three lines.
- **The history block's bracket was joined to the block** (no blank line), because a Vietnamese date `04/01/2026  review` reads as a count to the judge where the ISO date did not.
- **`joined_slugs` lives only in this routine's state**, not on `risk/risk.jsonl`, so no shared ledger schema changes; readers that fold on `account_slug` find the flag under the oldest slug.

Checker, routine mode, first run then after putting the `policy:` gloss inside the backtick span:

```
  WARN vietnamese  SKILL.md  review 1 lines outside fences as owner-facing wording, not agent instruction; first lines 432
PASS WITH WARNINGS (0 fail, 1 warn)
```

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/customer-satisfaction-employee-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 5 documents), first run:

```
churn-dossier-example.md   "verdict": "FAIL", "violation_count": 1  metric "2026  review" (history bracket separated by a blank line)
churn-digest-example.md    "verdict": "FAIL", "violation_count": 1  metric "1. Accounts" (inherited English line)
churn-card-text.md         "verdict": "PASS", "violation_count": 0
churn-promo-save-lines.md  "verdict": "PASS", "violation_count": 0
```

After the two fixes above:

```
churn-dossier-example.md    "verdict": "PASS", "violation_count": 0, exit 0
churn-digest-example.md     "verdict": "PASS", "violation_count": 0, exit 0
churn-card-text.md          "verdict": "PASS", "violation_count": 0, exit 0
churn-promo-save-lines.md   "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (40 checks)
```

Probe of the D6 gap: `vn-count-probe.md` (`4 phiếu trong tháng qua, 2 đơn, 50.000đ`) returns `"verdict": "PASS"`; `en-count-probe.md` (`4 tickets in the last month`) returns `"verdict": "FAIL"` with `"4 tickets" reads as a count`. Hence the judge gap sentence in Step 5.

Dash scan of this ledger, the routine and the scratch texts:

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals`, `aeo-check.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

### Reviewer pass (24/09/2026)

The independent reviewer returned FIX with ten FIX findings and three NOTEs. Every FIX finding was applied to the routine and this ledger; none was declined. Only the routine and this ledger were edited; no shared file needed a change, so no patch request was added.

| Finding | Where in the routine now | What changed |
|---|---|---|
| 1. Platform bullet wider than its source and looser than 4c | Rules that do not bend, platform bullet; Step 4 marketplace paragraph | Automated collection forbidden on every platform, manual collection only where the 4c row says so; reads only by the route 4c permits (connector or `exports/`, the browser only where the row allows it and the member confirmed it in `## Corrections`); a marketplace customer's dossier suggests handling that order or complaint and nothing else, per CONTRACT 10.1 rule 1. Step 4 paragraph gained "read only by the route `CAPABILITIES.md` section 4c permits for that platform". **One deviation from the proposed text:** the reviewer's "and Shopee's forbids manual tracking and collection too" failed the checker's vendor rule (`Shopee appears 1 time(s) in prose; original has 0`), so it reads "at least one marketplace's terms forbid manual tracking and collection too, as its row in `CAPABILITIES.md` section 4c records". Same claim, the platform name stays in `CAPABILITIES.md` |
| 2. 8a rating read opened a forbidden read | Step 8a `public_negative` clause | The reviewer's sentence verbatim: a 4c route, an export of the member's own account, or a line in `report/manual.md`; otherwise the clause does not clear the wire |
| 3. Bare ISO dates in digest lines | Step 8b digest template and the paragraph under it | `gắn cờ` dates inside backticks; "stays ISO inside backticks" |
| 4. `policy:` token replaced by its gloss | Step 5 fictional dossier | `no cost, no limit applies không tốn tiền, không có hạn mức nào áp dụng` |
| 5. Figures without a bracket | Step 5 fictional dossier | `[tickets/tickets.jsonl]` after the call save prose; the call save bracket names the debt sheet read on 04/03/2026; a bracket after the refund save block |
| 6. Unnatural Vietnamese | Step 5 fictional dossier and closing line rule | History heading, usage gloss, the second save sentence, the refund outcome check, the digest label, and the closing line now `Chưa nhắn khách. Chưa hoàn hay tặng gì cho khách.` in both places (no other file carries the old line; grep of `employees/`, `evals/` and `localization-reports/` on 24/09/2026) |
| 7. Unaccented matching differed from rule 10 | Step 1 phrase paragraph | `đ` read as `d`; one sentence naming the one word exemption as narrower than CONTRACT 10.1 rule 10 on purpose |
| 8. Fake refund rule unnamed | Step 3c bullet | "or whose ticket line carries `fake-refund-scam` in `severity_rules`" (the id in CONTRACT 10.2; this settles the matching outbound deferral to `csat-inbox-sweep`) |
| 9. S48 generalised to every platform | Step 5 "A reward for a rating" | The reviewer's sentence verbatim; B4-70 note updated |
| 10. B4-63 adopted unmarked clauses | Step 1 state and paragraph; Step 5 `outcome check:` row | Took the split option (no owner record covers the whole cell): `"new_order": null`, one sentence saying it ships `null` and the member sets it, the row says a discount save reads `outcome check: n/a (no window recorded) anh/chị chưa ghi số ngày chờ đơn mới`, and the bare ok sentence left the routine. B4-63, the numbers table, the decision counts and the unresolved list updated |
| NOTE, `billing_signal` sales note | Step 3 table | Applied: "where `## Account and billing surfaces` in `strategy/channels.md` names that note" |
| NOTE, heading sentence and byte count | This section, Identity | Applied: "outside code fences"; byte count re-measured after the checks below |
| NOTE, B11 cases 2 and 4 | none | No change required; the intake offer stays a proposal for `csat-desk-intake` |

Checker, routine mode, after the reviewer pass (first run failed on the vendor name, fixed as row 1 says):

```
  FAIL vendor      employees/customer-satisfaction-employee-vn/routines/csat-churn-watch/SKILL.md  Shopee appears 1 time(s) in prose; original has 0. Name the capability and put the route in CAPABILITIES.md
FAIL (1 fail, 0 warn)
```

```
PASS (0 fail, 0 warn)
exit 0
```

Copy check on the scratch texts regenerated from the current routine (dossier template with the fictional name filled in; digest with the new label and backticked date):

```
churn-dossier-example.md    "verdict": "PASS", "violation_count": 0, exit 0
churn-digest-example.md     "verdict": "PASS", "violation_count": 0, exit 0
churn-card-text.md          "verdict": "PASS", "violation_count": 0, exit 0
churn-promo-save-lines.md   "verdict": "PASS", "violation_count": 0, exit 0
```

Routine size after the reviewer pass: 76019 bytes.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `csat-inbox-sweep` | 1348 Câu 15 (1) `[CG]`, 1338 | One customer under several names is joined only by the same order code | Fill `order_ref` on every ticket whose page or message shows an order code (marketplace chat, fanpage inbox, review tied to an order), copied exactly; never infer one. `csat-churn-watch` Step 3d joins slugs only on it |
| `csat-inbox-sweep` | 1209, 1220, 1230, none on the threshold; `[S46]` on the reason | Refused COD deliveries are the main Vietnamese churn signal | Proposal only: if B-2 carries a marked clause, capture a refused or failed delivery on the member's own orders as a ticket (channel `marketplace` or `helpdesk`, verbatim the courier's status string) so a later churn pass can count it. Needs a `[CG]` threshold before any wire |
| `csat-inbox-sweep` | 1179 `[S43]`, A2-19 | Fake refund and fake courier messages | Grade them under a named severity rule id and record that id; `csat-churn-watch` Step 3c reads it to fire no wire |
| `csat-desk-intake` | 1235 Câu 8, none; 1206 | Vietnamese leaving phrases | During the monthly pass, show the member the proposed phrase list in this report and ask which their customers use; if they confirm, tell them the one line to add to `wires.cancellation_language.phrases` in `state/csat-churn-watch.json` (intake never writes that file). Accented and unaccented both listed |
| `csat-desk-intake` | 1210 `[S46]` re-opened `+CG` "Ngưỡng tuỳ chủ", A7-11 | The member's own deposit or prepayment rule for COD orders | Ask and record under `## What you will grant without asking` in `strategy/policy-limits.md`: which off marketplace orders need a deposit and how much, in the member's words with the date; blank means no deposit is ever suggested. Never on a marketplace order |
| `csat-desk-intake` | 1250 `[CG]` | A small fault voucher range | When asking for each role's voucher ceiling (A5-57), the member may be shown the form's range as context; record only the number the member types; blank or 0 means no voucher |
| `csat-desk-intake` | 1164 `[S39][S40]`, 1174 `[CG]` | Plans paid by manual transfer live in a CRM or the owner's debt sheet | List that sheet or CRM view under `## Account and billing surfaces` in `strategy/channels.md` with its URL and login state; for a shop selling only per order, write none |
| `csat-satisfaction-report` | 1411 Câu 17, none | Outcome states "còn mua", "mất", "chưa biết" | Wording only: show `saved`, `lost` and `n/a (no outcome recorded)` with the glossary glosses `giữ được`, `mất khách`, `anh/chị chưa ghi giữ được hay mất khách`; never convert to revenue saved |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/customer-satisfaction-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, table row "`billing.read`" | replace | `\| \`billing.read\` \| Subscriptions, failed payments and disputes for the churn watch \| The Stripe connector with a restricted, read only key; the Paddle or Chargebee connector where the member bills there \| The restricted key only \| \`expected\` \|` | `\| \`billing.read\` \| Subscriptions, failed payments and disputes for the churn watch \| The Stripe connector with a restricted, read only key; the Paddle or Chargebee connector where the member bills there. In Vietnam, where plans are paid by manual bank transfer: the member's Getfly or Bizfly CRM in a read only role, or the member's own debt sheet, read as the member would read it \| The restricted key only; a CRM read only role; the sheet is never edited \| \`expected\` for the card processors, \`unknown\` for the Vietnamese routes until the member confirms one \|` | 1164 `[S39][S40]`, 1220 `[S39]`, Phần A A5-48 |
| `employees/customer-satisfaction-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, paragraph "`confirmed` appears in this table only after" | insert after | `` `confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not. `` | **Chat channels with a free window, and platforms that limit their data, for the Vietnamese variant.** A Zalo Official Account consult message is free only inside a window after the follower's last interaction and paid outside it, and a Broadcast is unavailable on some OA plans and rationed per month and per day on the others, with fixed send hours (Zalo OA guides, checked 24/09/2026; the figures are read from those pages when needed, never copied here). Every OA send is held. TikTok Shop's seller terms allow data received through its messaging to be used only to fulfil and handle that order, refund, cancellation or complaint, so `csat-churn-watch` suggests nothing else for such a customer. Shopee, Meta and Lazada terms forbid tracking or collecting their content, so routines read only the member's own seller or page account, one customer at a time, preferably through an authorised connector or the member's own export. | 1255 `[S49][S50]`, 1357 `[S51][S50]` (both re-opened 24/09/2026), Phần A A5-32, A4-25 and the D13 table |
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### 2.7 Risk`, paragraph "**One customer, one open flag, one card, until it clears.**" | insert after | **One customer, one open flag, one card, until it clears.** An account whose last status is `at-risk` is never dossiered a second time. A new wire on an open flag is a dated line appended to the existing dossier under `## What has happened since`, and no new ledger line and no second card. The one narrow exception is an account whose open flag carried no single-wire trigger and which then trips one: that is genuinely new information, it gets one escalation line on the ledger and one digest line, and still no second card. | **Two slugs are one account only when their tickets carry the same `order_ref`.** `csat-churn-watch` then keys the flag and the dossier by the slug of the oldest ticket and records the others in its own state as `joined_slugs`; `risk/risk.jsonl` keeps its schema. A name, a nickname or part of a phone number never joins two slugs. | 1348 Câu 15 (1) `[CG]` |
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "**The first two are transcribed from the member's own published pages" | insert after | (the paragraph ending "every remedy above it is marked `above the recorded limit, your call`.") | In the Vietnamese variant `## What you will grant without asking` also carries, in the member's own words and with the date, each role's voucher ceiling (blank or 0 means no voucher is ever suggested) and the member's deposit or prepayment rule for orders paid on delivery (blank means no deposit is ever suggested, and none is ever suggested on a marketplace order). | 1245 `[CG]`, 1210 `[S46]+[CG]`, 1209 `[S21]`, Phần A A5-57, A7-11 |
