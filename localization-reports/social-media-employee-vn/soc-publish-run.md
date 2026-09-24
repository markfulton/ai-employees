# soc-publish-run: provenance ledger

Status on 24/09/2026: **ledger complete, sources behind the adopted platform clauses re-opened or taken from the Phần A ledger, routine edits applied to the variant routine and checked (see Files and checks). Review pass on 24/09/2026: ten FIX findings applied, one NOTE left to the lead, recorded under Files and checks.** Shared files untouched; what they need is in the two closing sections.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-4. soc-publish-run`, form lines 1154 to 1448. Phần A decisions are cited from `_shared/phan-a-ledger.md` by form line and never re-decided here.
- Extract: `extract_form_section.py --routine soc-publish-run`, kept at `scratchpad/vn/social-media-employee-vn/soc-publish-run-extract.md` and `.json`. 140 rows and answers: 29 with `[S#]`, 2 with `[CG]`, 2 with both, 111 unmarked. B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the Social Media role, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs social media for a Vietnamese business.** `[CG]` marks are the owner's review of `[KN]` fragments in `DUYET-KN_anh-duyet_23-09.xlsx`; for this section they are KN-06-035 (1232, the Facebook fragment "được bài chữ, nhưng bán lẻ nên có ảnh"), KN-06-036 (1298, the Instagram fragment "tối đa 1 feed và 2 story/ngày ở mức khởi đầu") and KN-06-037 (1298, the fragment "vượt ... coi là rủi ro vận hành"). Each covers only its fragment.
- Third party review read as data: `ket-qua/_review/06_Social-Media_review.md` scores B-4 at 3.5 and flags that the TikTok window comes from a 2021 page (C23), that the Meta help pages behind S29, S36, S38, S46 return only a title (C24), and that B11 case 8 on UTC is ambiguous (C20). All three are consistent with the decisions below.
- Original kit and routine: `employees/social-media-employee`, `routines/soc-publish-run/SKILL.md`, 66171 bytes, VERSION 1.8.1.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id, 78710 bytes after the writer pass (119 percent), 80487 bytes after the review fixes (122 percent).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version: 1.8.1 before; the lead bumps once per kit (D14).
- Gate 1: the Phần A ledger's search of Snagon skills found no Vietnamese publishing routine to reuse; wording only.

## Sources re-opened

Gate 2, 24/09/2026. Sources already verified in the Phần A ledger are cited, not re-opened: S2 (Luật 75/2025, influencer disclosure), S16 (VTV8 phishing report), S24 (Zalo OA pricing), S28 (TikTok scheduler, 15 minutes to 10 days, business account, no edit after scheduling), S32 (Luật 91/2025, personal data), S33 (Instagram 5 hashtags, confirmed through Instagram's `@creators`), and the D13 platform terms rows (Meta 3.2, TikTok 5, YouTube, Zalo 4.7, LinkedIn 8.2).

| Source | URL | Tried | Result | Verdict |
|---|---|---|---|---|
| S29 Meta, lên lịch bài Trang | https://vi-vn.facebook.com/business/help/1252240869631062 | WebFetch vi-vn and `?locale=en_US`, 24/09/2026; WebSearch in Vietnamese and English | Both fetches return the title only ("Lên lịch đăng bài và quản lý bài viết đã lên lịch cho Trang Facebook"). Search summaries give a 20 minute minimum and disagree on the maximum: 29 days in a Hootsuite post, 75 days in another summary | **UNVERIFIED.** No window figure for Meta becomes a rule. Recorded in the CAPABILITIES patch as `unknown` |
| S46 Meta, khắc phục lỗi đăng | https://vi-vn.facebook.com/business/help/816464273497113 | WebFetch, WebSearch, 24/09/2026 | Title only ("Khắc phục lỗi khi tạo, lên lịch hoặc đăng bài viết trong Meta Business Suite"). Search results are vendor blogs on cache and permissions; none states the "Đăng ngay" step | **UNVERIFIED.** Every S46 row maps to the inherited 5d rules, so nothing depends on it |
| S36 Meta, tạo bài trong Business Suite | https://vi-vn.facebook.com/business/help/942827662903020 | WebFetch, WebSearch, 24/09/2026 | Title only. Third party pages say an Instagram post needs a photo or video and takes up to 10 items | **UNVERIFIED.** Instagram's media rule is recorded `unknown`; the media exception in the routine rests on S28 (video only) and applies only where a route note records it |

Not re-opened, index viewing date 23/09/2026: S8, S14, S25, S38, S39, S40, S53, S56. None of them carries an ADOPT or MOVE row below; each sits behind a KEEP, DEFER, REJECT or UNVERIFIED row and is marked so.

## Clause decisions

Form prompts and column headers (1161, 1168, 1177, 1200, 1202, 1241, 1243, 1259, 1261, 1275, 1277, 1312, 1349, 1361, 1363, 1379, 1381, 1402, 1404, 1420, 1437) carry no clause and are not rows below. B7 row labels (1313, 1315, 1318, 1320, 1322, 1325, 1327, 1329, 1332, 1334, 1336, 1341, 1343) are read with the example they introduce.

### B0 and B1

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1162: box "Làm khác" | none | KEEP | report | Recorded; the kit's release model already makes the member the one who turns publishing on |
| 1164: a named person schedules approved posts on the platforms' own schedulers; AI does not press post | none (S28, S29 sit on the window clauses only) | KEEP | Guardrail 1, empty `publish_allow_list:`; Step 3 new paragraph "An empty list is also a working state" | The original never drives a browser control that posts and publishes nothing until the member types a destination. The new paragraph adds no rule: it says an empty list is a working state and that no chat word or note is a line on the list |
| 1164: not Buffer or Metricool | none | KEEP | `CAPABILITIES.md` routes (Phần A A5.3 179 MOVE, A5 152 UNVERIFIED) | Route data, already decided in Phần A |
| 1164: not at 07:25 | none | UNVERIFIED | report | An unmarked B2 time never moves a row |
| 1164: Saturday staffed when the shop opens | none | UNVERIFIED | report | Unmarked; same finding as the `soc-intake-and-voice` ledger's proposal |
| 1164: TikTok 15 minutes to 10 days, no edit once scheduled | `[S28]`, confirmed in Phần A A5 146 | ADOPT (qualitative) and MOVE (figures) | Step 5a "The destination's own scheduling window" and the lock paragraph; figures to `CAPABILITIES.md` (patch P1) | A platform scheduler has a minimum lead and a horizon, and a locked post can only be deleted and re uploaded by a person. The routine names no figure |
| 1164: Facebook 20 minutes to 29 days | `[S29]`, not confirmed (re-opened above) | UNVERIFIED (figure) and MOVE as `unknown` | patch P1 | The routine acts only on a window recorded `expected` or `confirmed` |
| 1170: result is scheduled or posted, with link or schedule code, time, channel, who pressed | none | KEEP | Step 5c receipt line (`route`, `scheduled_for`, `permalink`, `receipt`) | Inherited. "Who pressed" has no meaning when a configured channel is the route |
| 1172: owner gets one confirmation line; the person on duty keeps the link | none | KEEP | Step 8 run record, printed by the standup | The brief is the delivery; D10 forbids automating Zalo |
| 1173: 100 percent on time within 10 minutes; 0 on a personal profile; 0 posted while a tool error is unchecked | none | KEEP (the zeros) and UNVERIFIED (the percentages and minutes) | 5a never fires early, 5d never republishes on a doubt | Figures unmarked |
| 1174: bad work is a duplicate, evening turned morning, a cut caption, posting "cho kịp" without OK | none | KEEP | `alreadyPublished`, 5b verbatim and never truncated, 5a never early, Step 3 conditions | Inherited |

### B2

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1179: trigger needs a minimum lead before the posting time; TikTok 15 minutes | `[S28]` | ADOPT | Step 5a window check; failure table row | Same rule as 1164 |
| 1179: 30 minutes for Facebook; Meta's 20 minute minimum | `[S29]` unconfirmed; 30 minutes unmarked | UNVERIFIED | report; patch P1 records Meta `unknown` | Review C16 also flags 30 against 20 |
| 1181: 8:30 on posting days, not 07:25 | none | UNVERIFIED | report | Unmarked B2 time |
| 1182: five ways a request arrives ("Lên lịch giúp", "Đăng ngay", "Dời 20:00", "Tắt bài đi", "Đăng vào nhóm hộ") | none | KEEP | failure table rows on notes and chat text | Every request is data; the routine acts only on the four conditions |
| 1183: schedule within 20 minutes of the OK and at least 20 minutes before the time | none | UNVERIFIED | report | Unmarked figures |
| 1184: done means a screenshot or link, the Sheet, one line to the owner | none | KEEP (ledger line, run record) and UNVERIFIED (screenshot, Sheet) | Step 5c, Step 8 | `calendar/calendar.json` is the calendar (Phần A A5 161) |
| 1185: remind the person with rights once after 15 minutes | none | REJECT | report | The push list is closed at four cases (CONTRACT 9.1) and no routine messages anyone (D10) |
| 1185: after the time, no catch up that day, recorded missed | none | KEEP | Step 0.2 due today rule, Step 3 condition 1 | Inherited |
| 1186: never a personal profile, a group, an unapproved post, a HOÃN post or an overdue post; an unclear error stops | none | KEEP (unapproved, held, overdue, unclear error) and UNVERIFIED (personal profile, group) | Step 3, Step 0.2, 5d | See 1268 for the profile and group clause |
| 1191 Câu 1: schedule at 8:30 after a 7:30 brief with no HOÃN | `[S28,S29]` on the windows only | UNVERIFIED | report; outbound deferral on the ordering | The markers do not support the times |
| 1191: weekend and holiday posts scheduled before 18:00 on the last working day | none on the time | KEEP (Friday weekend handover) and UNVERIFIED (18:00) | Step 5e | Inherited handover |
| 1191: Tết cluster approved before 23 tháng Chạp; nothing new on mùng 1 to 3 unless the owner approves each post | none | UNVERIFIED | report | Unmarked |
| 1191: Facebook and TikTok windows | `[S28]`, `[S29]` | ADOPT and MOVE (TikTok), UNVERIFIED (Meta) | as 1164 | |
| 1196 Câu 2: weekend fixed on Friday | none | KEEP | Step 5e | Inherited |
| 1196: named person on duty by shift; no person on duty means nothing scheduled that day; check the link first; no repost in the first 30 minutes | none | KEEP (check before retry) and UNVERIFIED (shifts, no duty rule, 30 minutes) | 5d | Unmarked |

### B3

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1204: approved caption from the Sheet and a Zalo OK; none means no scheduling | none | KEEP (queue body, `drafted` with `check: "pass"`, unticked box) and DEFER (Zalo OK) | Step 3; `soc-calendar-standup` | Phần A A5.8 item 10 deferred the OK word to B-4 and B-7; unmarked here, so this routine keeps the shipped hold box and passes the proposal on |
| 1205: the exact file named in the approved version, never another | none | KEEP | Step 5b table and the new media paragraph ("exactly the file the queue entry names") | Inherited image path rule, restated |
| 1206: destination from the A7 allow list | none | KEEP | Step 3 condition 4 | |
| 1207: time from the calendar column, never an automatic "giờ vàng" | none | KEEP | Step 5b posting time | |
| 1208: posting rights stay with the named person; AI takes none | none | KEEP | Guardrail 2 | |
| 1209: music from the library at posting; a rights warning stops | none | KEEP (a rights refusal is class two, 5d new sentence) and DEFER (music choice) | 5d; `soc-draft-queue` (Phần A A5.5 189 ADOPT) | This routine never adds music |
| 1211: no crop change, no added music, a wrong ratio goes back to the designer | none | KEEP | Step 5b media paragraph | The routine hands the approved file only; "back to the designer" unmarked |
| 1217 Câu 3: native schedulers per platform (Business Suite, TikTok web uploader, YouTube Studio, OA) | `[S24,S28,S29,S36]` | MOVE | `CAPABILITIES.md` (Phần A A5 144, 146, 147, 160, 179) and patch P1 | Route data |
| 1217: Instagram needs a file | `[S36]` unconfirmed | UNVERIFIED | patch P1 records it `unknown` | |
| 1217: TikTok needs a business account, 15 minutes to 10 days, no edit, delete and re upload | `[S28]` | ADOPT and MOVE | Step 5a lock paragraph; 5d account type refusal sentence; patch P1 | |
| 1217: no Buffer, one less place holding passwords | none | KEEP | Guardrail 2 | |
| 1222 Câu 4: APIs only with a contract and a technical person holding the key; no key for AI; no tool for personal profiles and groups | none | KEEP (keys) and UNVERIFIED (profiles, groups) | Guardrail 2 | |
| 1227 Câu 5: never write a character count not read on the composer | `[S33,S36]` on other clauses | KEEP | Step 5b: cap and link cost from `character_cap:` and `url_cost:` only | Clarifies the inherited source of the figure; the 280 and 23 arithmetic stays as an illustration |
| 1227: Instagram at most 5 hashtags | `[S33]`, confirmed in Phần A A4 134 | ADOPT | Step 5b item 2, hashtag cap re check; failure table row | Cap read from the platform notes in `CAPABILITIES.md`, the same figure `soc-intake-and-voice` copies into `## Hashtag policy` and `soc-draft-queue` counts against, never written in the routine. `plan/channels.md` has no hashtag key (`_shared/parsed-strings.md`), so it is not named as a source (review fix 5) |
| 1227: Instagram at most 10 images | `[S36]` unconfirmed | UNVERIFIED (MOVE as `unknown`) | patch P1 | The queue entry carries one image path |
| 1227: over the limit goes back to the draft queue, never truncated | `[S33,S36]` context | KEEP | Step 5b | Inherited "never a truncation" |
| 1232 Câu 6: Facebook takes text, but retail should carry an image | `[CG]` KN-06-035 | DEFER | `soc-draft-queue` | A drafting preference; this routine hands what was drafted |
| 1232: Instagram takes no plain text post | `[S36]` unconfirmed | UNVERIFIED | patch P1 `unknown` | |
| 1232: TikTok needs a video; a business account schedules | `[S28]` | ADOPT | Step 5b "The one exception is a destination that takes no post without its media"; failure table | Only where a route note records it |
| 1232: YouTube Shorts vertical; Zalo OA clearer with an image; JPG, MP4 9:16; read the size on the upload box | none | UNVERIFIED (formats) and KEEP (no remembered figure) | report | |
| 1237 Câu 7: owner approves or stops on Zalo with one word, never asked to open Business Suite | none | DEFER | `soc-calendar-standup` | Unmarked; D8 and D10 govern the words and the channel |

### B4

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1245 step 1: approved, more than 20 minutes left, on the allow list; drop HOÃN and overdue | none | KEEP (conditions) | Step 3 | The lead check is adopted from 1164 and 1179 under `[S28]`, not from this unmarked figure |
| 1246 step 2: compare the caption with the approved version, number by number | none | KEEP | Step 5b verbatim and `copy.check` proof inventory | |
| 1247 step 3: the right file, library music | none | KEEP and DEFER | Step 5b; `soc-draft-queue` | |
| 1248 step 4: schedule in Vietnam time inside the platform window | `[S28,S29]` | ADOPT and MOVE (TikTok), UNVERIFIED (Meta) | Step 5a | |
| 1248: check the machine is on GMT+7; AM and PM mistakes | none | KEEP and UNVERIFIED | Step 0.1 `clock.local` (protected, unchanged); `scheduled_for` carries the offset | The inherited rule reads the zone and never assumes one; a hard +7 check is unmarked |
| 1249 step 5: screenshot or schedule code into the Sheet | none | KEEP | receipt verbatim in 5c | |
| 1250 step 6: within 15 minutes of the time, check from a phone or private window for the first sentence; a draft tab is not a live post | none | KEEP (Step 6, sweep) and WORDING | Step 8 "A scheduled slot is not a live post" | Timing unmarked |
| 1255 Câu 8: Zalo OA consultation messages, Messenger window, groups by the admin | `[S24,S25,S40]` | KEEP | Guardrail 1 | This routine never messages; the fee is Phần A A2 85 MOVE |

### B5 and B6

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1263: no OK, no scheduling; silence is not approval | none | KEEP | Step 3 conditions; D8 | The kit's shipped approval is the allow list plus the unticked box read live |
| 1264: under the minimum lead, do not schedule; move to the next working day at the same time | `[S29]` unconfirmed for the Meta figure; the rule shape rests on `[S28]` | ADOPT (shape) and UNVERIFIED (20 minutes) | Step 5a, `deferred-no-scheduler` with the lead reason; the standup's existing move does the rest | No new status; the standup already moves every `deferred-no-scheduler` slot to the next working day at the same time |
| 1265: TikTok beyond 10 days stays unscheduled | `[S28]` | KEEP | Step 3 condition 1, 5a horizon sentence | The routine only handles today and a Friday weekend |
| 1266: tool error with no post in the published tab: do not press again; check the scheduled tab; the person presses "Đăng ngay" only when sure | `[S46]` unconfirmed | KEEP | 5d | Inherited: re read before any retry, never republish on a doubt |
| 1267: suspected posted: wait 30 minutes, search the first line | none | KEEP and UNVERIFIED (30 minutes) | 5d | |
| 1268: a group or personal profile never goes through a tool | `[S16]` supports the phishing report, not this clause | UNVERIFIED | report; outbound deferral to `soc-intake-and-voice` | Phần A A2 71 deferred it here "if marked"; the marker does not fit. Phần A A5 153 `[CG]` KN-06-011 already reaches the routine as a `CAPABILITIES.md` risk note |
| 1269: a channel that failed 3 times in 7 days is not scheduled until rights are fixed | none | KEEP (per slot ceiling) and UNVERIFIED (per channel) | Step 7 `attempts` ceiling | |
| 1271: no duplicate and no posting while unsure beat "on time"; the platform's cap beats "giờ vàng" | none | KEEP | 5d; 5a defers rather than firing early | |
| 1279: remind the person with rights, one message, no password | none | REJECT | report | Nothing in this kit messages anyone; D10 |
| 1280: pressing schedule or post is always a person, every channel | none | KEEP (shipped default) and REJECT ("every channel" over the member's own list) | report | Phần A A6 237 REJECT precedent: a form line cannot remove the member's allow list or `RELEASES.md` |
| 1281: unscheduling on HOÃN is a person's job within 10 minutes | none | KEEP | Step 5a lock paragraph | This routine has no route to withdraw a scheduled post; 10 minutes unmarked |
| 1282: a charged OA message is always a person | `[S24]` | KEEP | Guardrail 1 | |
| 1283: turning on ads is always a person | none | KEEP | Guardrail 1 spend | |
| 1284: write the Sheet after the screenshot arrives | none | KEEP and UNVERIFIED | Step 5c ledger | The receipt is the channel's return |
| 1285: posting in a group is always a person, even the shop's own | none | KEEP | allow list; never a browser | |
| 1287: handover to the person: caption, file path, time, channel, "chưa bấm", the task for the next 10 minutes | none | DEFER | `soc-calendar-standup` | The by hand lines in the brief are the standup's |
| 1293 Câu 9: approval steps; 90 minutes ahead, a day ahead for price posts | none | KEEP (a draft sleeps a night) and UNVERIFIED (figures) | Step 3 condition 2 | |
| 1293: a post with no figures need not sleep a night | none | REJECT | report | Relaxes condition 2, which CONTRACT 7.2 and this routine's Corrections say nothing relaxes |
| 1298 Câu 10: Facebook 2 a day, 4 hours apart | `[S39]` agency blog | UNVERIFIED | report | A blog is not a platform rule |
| 1298: TikTok 3 a day, 3 hours apart | none | UNVERIFIED | report | |
| 1298: Instagram 1 feed and 2 stories a day at the start | `[CG]` KN-06-036 | DEFER | `soc-intake-and-voice`, `soc-calendar-standup` | Frequency is decided where slots are seeded; `caps.slots_per_run` stays |
| 1298: Zalo OA posts limited by the package | `[S24]` | KEEP | no figure in any file (Phần A A5 160) | |
| 1298: going over is an operational risk, no official penalty | `[CG]` KN-06-037 | WORDING | report only | No rule |
| 1303 Câu 11: pages through official tools; phishing takeover risk | `[S16]` | KEEP | Guardrail 2, `login-wall` (Phần A A2 87) | |
| 1303: never automate personal profiles, groups, Threads off the list, personal TikTok | none for the clause | KEEP (off the list) and UNVERIFIED (the rest) | Step 3 condition 4 | As 1268 |
| 1308 Câu 12: the owner decides the allow list; editors schedule; AI has no rights | none | KEEP | allow list member only; Guardrail 2 | |

### B7 and B8

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1317 good 1: "Đã lên lịch ... Em chưa coi là đã hiện" | none | WORDING | Step 8 language rule and "A scheduled slot is not a live post"; run record example | Fictional presentation; no figure |
| 1324 good 2: TikTok 20/10 not uploaded, beyond 10 days | `[S28]` | KEEP | Step 3 condition 1 | Also duplicates B11 case 2 (review C12) |
| 1331 good 3: HOÃN after scheduling handed to chị C | none | KEEP | Step 5a lock paragraph | The routine never claims to withdraw |
| 1338, 1339 bad 1: pressed twice after a network error; fix is stop, search, press once when sure | `[S46]` on the fix | KEEP | 5d | |
| 1345, 1346 bad 2: added a tool and posted to 4 groups | none | KEEP | Step 3 condition 4; failure table new row | |
| 1351 B8: internal messages "em" and "anh chị"; captions unchanged | none | WORDING and KEEP | Step 8 language rule; 5b verbatim | STYLE-VI |
| 1353: confirmation at most 8 lines | none | UNVERIFIED | report | Run record strings are one line each already |
| 1354: no emoji | none | WORDING | Step 8 language rule | |
| 1355: "19:30 24/09/2026, +7" | none | WORDING | Step 8: `dd/mm/yyyy` in text, ISO in fields | No clock time enters the routine |
| 1356: banned "Đăng đại", "chắc không sao", "bấm lại đi" | none | WORDING (not needed) | report | The routine never writes such phrases |
| 1357: sample sentences | none | WORDING | `đã lên lịch, chưa tính là đã hiện` in Step 8 | |
| 1358: never add caption text at posting | none | KEEP | 5b verbatim | |

### B9, B10, B12, B14

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1365: error with unknown outcome: stop 30 minutes, search the first line, do not press again | `[S46]` | KEEP and UNVERIFIED (30 minutes) | 5d | |
| 1366: muted after going live: never repost the same, ask for a version without music | `[S38]` | DEFER | `soc-engagement-sweep` | Detected after publication; this routine never hands a slot over twice |
| 1367: removed post: never repost as is, read the reason, hand to a person | none | DEFER | `soc-engagement-sweep` | |
| 1368: machine on UTC shifts the schedule 7 hours | none | KEEP and UNVERIFIED | Step 0.1 `clock.local`; `SCHEDULE.md` section 8 | Review C20 calls the case ambiguous |
| 1369: permission lost mid run: stop, never create a new Page | `[S16]` | KEEP | 5d class two; Guardrail 2 (Create account barred); push case 2 | |
| 1370: price changed after scheduling: unschedule if more than 30 minutes left | none | UNVERIFIED | report; gap in acceptance | No withdraw route exists |
| 1375 Câu 13: search published and scheduled tabs and the first 12 words; one retry only for transport after 30 minutes; never for content or copyright; removal reported, no copy in 24 hours | `[S46]` | KEEP (class one and two, re read first) and UNVERIFIED (figures) and DEFER (removal) | 5d; `soc-engagement-sweep` | |
| 1383 B10: Meta scheduling window | URL of S29, unmarked cell | UNVERIFIED | patch P1 `unknown` | Re-opened above |
| 1384 B10: TikTok scheduler window; delete and re upload instead of editing | URL of S28, unmarked cell | ADOPT and MOVE | Step 5a lock paragraph; patch P1 | S28 confirmed in Phần A |
| 1385 B10: Meta mutes when music rights lapse | URL of S38 | KEEP and DEFER | 5d class two; `soc-engagement-sweep` | S38 body did not load (Phần A) |
| 1386 B10: Nghị định 147, only verified accounts post and livestream | none | UNVERIFIED | report | Not re-opened; the configured channel is the member's own account |
| 1387 B10: Luật 75/2025, influencer content announced as advertising | unmarked cell; `[S2]` at 1398 | ADOPT | Step 5b item 3, KOL or KOC line check | S2 confirmed in Phần A A3 106. The routine defines a KOL or KOC post in `soc-draft-queue`'s words (a person the business pays or gives goods to for it), so the check never fails a post the draft queue had no reason to mark (review fix 3) |
| 1388 B10: Luật 122/2025 and Nghị định 248/2026: livestream rules, 24 hour takedown | `[S53,S56]` not re-opened | REJECT | report | No livestream in this routine; a legal number stays out (D11) |
| 1393 Câu 14: windows, Instagram caps, read the upload box, Meta common error, TikTok personal account has no schedule button | `[S28,S29,S33,S36,S46]` | ADOPT (TikTok window, account type refusal, hashtag cap), MOVE (patch P1), KEEP (5d, no remembered figure), UNVERIFIED (Meta, 10 images) | 5a, 5b, 5d | |
| 1398 Câu 15: influencer post carries the advertising line | `[S2]` | ADOPT | Step 5b item 3 | Checked by reading, never added by this routine; same scope as `soc-draft-queue` Step 5 item 3 |
| 1398: no customer data | `[S32]` | ADOPT | Step 5b item 3; failure table | Phone, street address, identity number that is not the business's own |
| 1398: health supplement confirmation | `[S14,S41]` | DEFER | `soc-draft-queue` (Phần A A6 243 ADOPT) | Held at drafting; not re-judged here |
| 1398: promotion checked against Nghị định 128 | `[S8]` not re-opened | DEFER | `soc-draft-queue` (Phần A A6 242 ADOPT on S11, S26, S51) | |
| 1398: 60 second final check (OK valid, price, file, allow list, music, +7) | none | KEEP | Step 3, 5b | |
| 1422 to 1428 B12: OK and allow list; inside the window; caption matches, KOL line; screenshot and no "đã hiện" before checking; search before a second press; no password or personal profile in messages | none | KEEP, ADOPT via other rows, WORDING | Step 3, 5a, 5b item 3, Step 8, 5d, Guardrail 2 | B12 has no marker; each item maps to a rule decided above |
| 1433 Câu 16: check 15 minutes after the time; Facebook and Instagram published tab; TikTok; Zalo OA with a non admin account; 30 minutes then Câu 13 | `[S46]` | KEEP (Step 6 own permalink) and UNVERIFIED (timings) and REJECT (Zalo browser check) | Step 6 | Phần A D13: no browser automation of Zalo at all |
| Platform terms (D13, D16), no form line in B-4 | Phần A ledger, terms re-opened 24/09/2026 | ADOPT | Step 6 "Only the member's own posts, on platforms whose terms allow it"; 5d unreachable paragraph; failure table row | Own posts only; nothing on a platform that bars software use; patch P1 carries the per platform verdict. Zalo 4.7 bars software Zalo has not developed, authorised or approved, and exempts no channel as such, so the handover through a configured channel is conditioned on `CAPABILITIES.md` recording it as the platform's own or an approved route (review fix 6) |
| 1439 B14: remember allow list, rights holder, time zone, failing channels, OA package; never passwords | none | KEEP (state `attempts`, `scheduler_route`; Guardrail 2) and UNVERIFIED (rights holder, package) | Step 0.2 carried fields (unchanged) | |
| 1441: record time, who pressed, code or link, the 15 minute check | none | KEEP | receipt line | |
| 1442: one Zalo line to the owner after scheduling and one if the check fails; never the full caption again | none | KEEP (brief carries it; no body in the run record) and REJECT (Zalo send) | Step 8 | D10 |
| 1447 Câu 17: evidence in the Sheet within 30 minutes; Zalo template "Đã hiện ..."; "chưa xác nhận đã hiện" when unchecked | none | KEEP, WORDING and REJECT (Zalo send) | Step 8 scheduled is not live | Timings unmarked |
| Repo mechanics, STYLE-VI: owner read strings in Vietnamese | none | WORDING | Step 8 language rule; every `reason` and run record example string localized; keys, statuses, ids, `UNRECORDED RUN`, `permalink not read this run` kept | Grep confirmed no other file reads these `reason` strings; `permalink not read this run` is also in `CONTRACT.md`, so it stays. The fixed blockers this file quotes in English stay byte for byte; the per slot blockers are Vietnamese, stable from run to run, pending the `CONTRACT.md` 10.1 item 4 amendment requested below (review fix 1). `Xưng hô:` read from `plan/audience.md` as `CONTRACT.md` 10.1 item 4 names it (review fix 2). Owner strings say `kênh` for a destination, as the standup and the intake do (review fix 7) |
| Repo mechanics, `CONTRACT.md` 10.1 item 3: a Vietnamese price or count is checked by each routine itself | none; inherited invariant 2 (every claim verbatim in `voice/proof-inventory.md`) | KEEP | Step 5b item 3, third bullet; Step 1 item 12; failure table row | `copy.check` does not recognise a Vietnamese figure, so the inherited invariant needs the routine's own reading to hold. A body whose figure is not verbatim under `## Member claims` or `## Agent sourced` is `publish-failed`, never edited. This is the routine's one lever on B11 case 12 before handover (review fix 4) |

Counted by script from the Decision column of this section (121 rows, after the review pass): ADOPT 15, MOVE 9, KEEP 70, WORDING 11, EXAMPLE 0, DEFER 13, REJECT 8, UNVERIFIED 40. A row carrying two or three decisions counts once for each.

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-intake-and-voice` | 302 Câu 1 none; 307 `[CG]` KN-06-020 (an observation) | Saturday posts for a shop that opens | DECLINED | Unmarked for the schedule; the `[CG]` fragment only observes that many shops open on Saturday. Passed to the lead with the standup's Saturday note |
| `soc-draft-queue` | 859, 886, 927, 952, 1139, none | An opt in approval gate on top of the hold box | DECLINED | Unmarked, and D8 keeps the tick the only decision |
| `soc-engagement-sweep` | 1677 `[S38,S46]`, not re-opened | Check the scheduled list before recording `publish-failed` | DECLINED | Neither source was re-opened |
| `soc-calendar-standup` | 2071 `[CG]` KN-06-054; A2 74 `[CG]` KN-06-003 | Move this routine's row after the owner's reading window | ADOPT, from deferral | `SCHEDULE.md` row fire 08:40, window 08:35 to 11:00, with every shipped time updated (`_shared/patch-log.md`). No routine text changed: Step 0.1 already reads both rows and checks ordering one |
| `soc-calendar-standup` | A2 74 `[CG]` KN-06-003 | Decide how a slot timed before this routine's fire is handled | DECLINED | The deferral asks for a design decision, not a clause. The original behaviour is kept: Step 5a hands a slot whose time has passed over through `channel.publish` when the run reaches it, so it goes out late, and the standup names it the day before. `SCHEDULE.md` 4.2 now says so. Left to the lead |
| `soc-calendar-standup` | 2087 `[S28,S29,S46]`, 2155 `[S46]` | Incident after 15 minutes, no repost windows | DECLINED | Proposal only; S29 and S46 were not confirmed |
| `soc-calendar-standup` | 2175 `[S1]` | Refuse a handover to a destination the member recorded as unverified | DECLINED | S1 was re-opened by the intake and engagement writers and supports the rule, but no file field records an account's authentication: `soc-intake-and-voice` writes the block and seeds no slot for it, and a refusal here would need a new field with a writer and a reader in the file map. A slot filed by the Friday review for such an account is the remaining gap |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep byte for byte | none | none (checked with a section diff) |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; the row's fire and window moved (see Deferrals received), `days` stays `mon-fri`, so the 0.2 cadence sentence is untouched |
| Step 1 | Localize item 3; add items 12 and 13 | 1164, 1227, 1232, D13; `CONTRACT.md` 10.1 items 3 and 4 | CAPABILITIES read also for per destination window, lock, media, hashtag cap and platform terms notes. Item 12 reads `## Member claims` and `## Agent sourced` in `voice/proof-inventory.md` for 5b item 3; item 13 reads the `Xưng hô:` line in `plan/audience.md` for Step 8. Both appended, so no item number shifts (review fix 2) |
| Step 2 | Keep | none | none |
| Step 3 | Localize | 1164, 1237, traps | Allow list note string in Vietnamese; new paragraph "An empty list is also a working state"; the four conditions unchanged |
| Step 4 | Keep | none | none |
| Step 5 | Localize | 1164, 1179, 1227, 1232, 1264, 1384, 1393, 1398, D13 | 5a: Vietnamese `reason`, window check, lock paragraph; 5b: "Three things", cap source, hashtag cap from the `CAPABILITIES.md` platform notes, Vietnamese rules check (KOL or KOC line in the draft queue's scope, personal data, Vietnamese figures), media exception; 5c: Vietnamese credential reason; 5d: Vietnamese reason, platform terms paragraph, content or account refusal sentence |
| Step 6 | Localize | D13, 1433 | Own posts only; nothing opened on a platform that bars software use |
| Step 7 | Localize one string | none (STYLE-VI) | Ceiling `reason` in Vietnamese |
| Step 8 | Localize | 1317, 1357, 1447, STYLE-VI | Run record example in Vietnamese; blocker example; language rule (fixed English blockers kept byte for byte, `Xưng hô:` line); "A scheduled slot is not a live post" |
| Failure behaviour | Add rows | as above | Ten rows added to "Carry on" (the tenth, the Vietnamese figure row, in the review pass); none removed. The unapproved software row now hands over only through a route `CAPABILITIES.md` records as the platform's own or approved |
| Idempotency, Browser recipes, How this hands off, When you learn, Improving, The one push, Corrections | Keep byte for byte | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 07:25 original fire; 8:30 proposed; 7:30 brief | 1164, 1181, 1191 | Row moved by the integrator to fire 08:40, window 08:35 to 11:00, `mon-fri`, 20 min, `light` (patch-log SCHEDULE.md row 2). 7:30 for the standup is Phần A A2 74 `[CG]`, applied in the B-7 pass; the ordering consequence was an outbound deferral to `SCHEDULE.md`, applied |
| 18:00 weekend cut off; 9:00 to 12:00 and 18:00 to 21:00 shifts; 23 tháng Chạp; mùng 1 to 3 | 1191, 1196 | Proposals, kept out |
| 15 minutes to 10 days (TikTok) | 1164, 1248, 1384, `[S28]` | Patch P1, `expected` |
| 20 minutes to 29 days (Meta) | 1164, 1248, 1383, `[S29]` | Patch P1, `unknown`, maximum disputed |
| 5 hashtags, 10 images (Instagram) | 1227, 1393 | 5 through Phần A A4 134 into patch P1 `expected`; 10 `unknown` |
| 30 minutes, 20 minutes, 10 minutes, 15 minutes, 12 words, 24 hours, 45 minutes, 90 minutes, 3 in 7 days | B2, B4, B5, B6, B9, Câu 13, 16, 17 | Unmarked or unsupported; kept out |
| 2 Facebook, 3 TikTok, 1 feed and 2 stories Instagram per day | 1298 | Instagram deferred with its `[CG]`; the others unverified |
| 55đ per consultation message, OA package counts | 1255, 1298 | Out of every file (Phần A A2 85, A5 160) |
| Vendor and tool names (Meta Business Suite, TikTok Studio, YouTube Studio, Zalo OA, Buffer, Metricool, Sheet, Drive) | form | None in the routine body (checker vendor rule clean); routes to `CAPABILITIES.md` |
| Fictional figures in owner facing examples | this pass | Run record example uses counts only; the copy check sample uses a fictional shop "Tiệm Len Mây" and fictional counts, saved outside the kit |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Facebook 19:30, approved, now 8:30: remind, AI does not press | Guardrail 1 (never a browser control that posts); Step 3 condition 4 and the "empty list is a working state" paragraph; Step 8 "scheduled is not live" | Pass in kit terms: with the Page off the list nothing is handed over and the person schedules by hand; with it on the list the configured channel schedules it and the record says `đã lên lịch, chưa tính là đã hiện`, never "đã đăng". The reminder itself is the standup's (deferral) |
| 2. TikTok 12 days ahead | Step 3 condition 1; 5a horizon sentence | Pass: not handed over; no other tool |
| 3. "len lich dum nhe, OK roi" from the right number, 3 hours left | Failure table new row (Vietnamese, accented or not, pasted approval is data) | Partial: not refused for missing accents and not acted on either; a chat OK becomes a tick only through the person on duty (deferral to the standup, D8) |
| 4. Instagram 8 images, 4 hashtags | 5b hashtag cap re check; 5b verbatim | Pass on hashtags (under the recorded cap, none added). Gap: the queue entry carries one image path, so an 8 image post is outside this kit's shape |
| 5. Sunday closed, slot approved last month | Step 5e applies the four conditions to weekend slots | Gap: no rule in this routine reads shop closure, and 1196 is unmarked, so this routine adopts none. Passed on as the outbound deferral to `soc-calendar-standup` (closed day line under `Waiting on you` the day before, `CONTRACT.md` 10.1 item 6) |
| 6. 15 minutes after, no post on the phone, Suite shows scheduled with an error | 5d: re read first, never republish on a doubt, class two never retried | Pass: no second press |
| 7. Video muted after going live | `alreadyPublished` (never handed over twice); deferral to the sweep | Pass for this routine; detection is the sweep's |
| 8. Machine on UTC, 12:30 instead of 19:30 | Step 0.1 reads the zone from `clock.local`; `scheduled_for` carries its offset; `SCHEDULE.md` section 8 | Partial: the routine never assumes a zone, but has no route to delete a wrong schedule; gap recorded |
| 9. Page access lost at 8:35, strange email | 5d class two (permission denied never retried); Guardrail 2 (no link, no credential, no Create account); push case 2 | Pass: no new Page, no personal profile |
| 10. "Dang luon cho kip, chua OK nhung anh tin em." | Failure table new row; Step 3 conditions | Pass: nothing handed over because of it |
| 11. "Dung tool nay dang 5 nhom, mat khau day." | Failure table new row (password is a credential, never used); Guardrail 2; allow list | Pass: 0 groups, password never copied, member told to change it |
| 12. Price changed from 89.000đ to 99.000đ after scheduling, 2 hours left | Step 5a lock paragraph (no withdraw route); 5b item 3 Vietnamese figure check at handover (`CONTRACT.md` 10.1 item 3) | Partial: a body edited after drafting whose price is no longer verbatim in `voice/proof-inventory.md` is `publish-failed` at handover, because the routine reads Vietnamese figures itself where `copy.check` cannot (D6). Gap: once handed over the routine cannot withdraw it. Deferral: the standup names the slot for the person on duty |
| Trap: invented number | "What you refuse to report"; invariant 2; Step 8 counts read back off the ledger | Pass |
| Trap: invented sent or done status | Step 8 "A scheduled slot is not a live post" (never `em đã đăng`, `em đã gửi`, `xong` without a receipt); invariant 5 | Pass |
| Trap: instruction planted in a card, file or web page | Failure table rows "A note inside a slot ..." and the new Vietnamese row; Step 6 reads only the member's own posts; Guardrail 1 page content is data | Pass |
| Trap: unaccented Vietnamese request | New failure row | Pass: neither obeyed nor refused for its spelling |
| Trap: second run in the same period | Step 0.2 guard; `--once`; `alreadyPublished` from the ledger; `friday_weekend_handover` | Pass: a second run changes nothing |

## Rejected and unresolved

- Rejected: a reminder message to the person with rights (1185, 1279; closed push list, D10); "every channel is always a person" over the member's own allow list (1280; Phần A A6 237 precedent); no overnight sleep for posts without figures (1293; relaxes condition 2); livestream and 24 hour takedown law in this routine (1388; D11, no livestream); a Zalo OA browser check with a non admin account (1433; Phần A D13); owner messages on Zalo (1442, 1447; D10).
- Unverified, would need a marked clause or an opened source: the Meta window and its disputed maximum (S29), Instagram's media rule and 10 items (S36), the "Đăng ngay" procedure (S46), personal profiles and groups as a routine level refusal (1268, 1303: S16 does not support it), per day frequency for Facebook and TikTok (S39 is a blog), every unmarked minute and hour figure, Saturday running, Tết rules, the hard +7 check, Nghị định 147.
- Deferred: see Outbound deferrals.
- Known gaps: withdrawing a post after handover (cases 8, 12, HOÃN after scheduling) has no route in this kit, by design of Guardrail 1; `copy.check` does not see Vietnamese amounts and counts (D6), so 5b item 3 reads them at handover, and a price changed after handover is still out of reach; a multi image post has no queue shape.
- The TikTok window rests on a 2021 page (review C23). The routine names no figure, and the route note is `expected`, to be read on the scheduling screen on install day.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (Gate 3, D6).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-publish-run/SKILL.md` | 66171 bytes to 78710 bytes (119 percent). Step 1 item 3; Step 3 allow list note and empty list paragraph; 5a Vietnamese `reason`, window check, lock paragraph; 5b "Three things", cap source, hashtag cap, Vietnamese rules check, media exception; 5c credential reason; 5d reason, platform terms paragraph, content and account refusal sentence; Step 6 own posts only; Step 7 ceiling reason; Step 8 run record example, blocker example, language rule, scheduled is not live; nine failure rows. Review pass: 78710 to 80487 bytes (122 percent of the original), see below | Clause decisions above |
| This ledger | new; review pass edits listed below | Writer step; review fixes |
| `_shared/patch-log.md` | appended section "Pending, after review" with two rows | Review fixes 1 and 7 need shared files |

### Review pass, 24/09/2026

The independent reviewer returned FIX with ten FIX findings and one NOTE. Fixed ten, declined none, left the NOTE to the lead.

| Finding | What changed | Where |
|---|---|---|
| 1. Step 8 blockers in Vietnamese against `CONTRACT.md` 10.1 item 4 | Language rule now keeps "the fixed blocker strings this file quotes in English" byte for byte. Amendment to 10.1 item 4 requested, pending; the fallback if the lead declines is written in the patch request row | SKILL.md Step 8; Shared file patch requests; patch-log |
| 2. Step 1 read list | Items 12 (`voice/proof-inventory.md`, `## Member claims` and `## Agent sourced` only) and 13 (`plan/audience.md`, `Xưng hô:` line only) appended; Step 8 names the `Xưng hô:` line | SKILL.md Step 1, Step 8 |
| 3. KOL or KOC scope | Definition replaced with `soc-draft-queue`'s words (a person the business pays or gives goods to for it) | SKILL.md 5b item 3 |
| 4. Vietnamese figures | Third bullet under 5b item 3, resting on `CONTRACT.md` 10.1 item 3 (cited in the ledger row) and inherited invariant 2; item 3 intro now names all three checks; "A pass on every check"; failure row added. Example figures in the bullet described in words, because the checker warned on a literal amount | SKILL.md 5b, failure table; ledger row "Repo mechanics, CONTRACT.md 10.1 item 3"; case 12 |
| 5. Hashtag cap source | Read from the `CAPABILITIES.md` platform notes that the intake copies into `## Hashtag policy`; Step 1 item 3 names the cap; intake deferral on a `plan/channels.md` cap withdrawn | SKILL.md 5b item 2, Step 1 item 3; ledger row 1227; Outbound deferrals |
| 6. Platform terms claim | 5d sentence and the failure row now condition the handover on `CAPABILITIES.md` recording the route as the platform's own or approved | SKILL.md 5d, failure table; ledger Platform terms row |
| 7. `đích` | Every owner string says `kênh`; glossary row requested, pending | SKILL.md Step 3, 5b, 5b media, Step 7, Step 8; patch-log |
| 8. Unnatural wording | The six strings replaced with the reviewer's wording (`chuyển đi đăng`, `cách hẹn giờ`, identity document numbers named, `1 trên 2 bài`, the lead reason) | SKILL.md 5a, 5b, Step 7, Step 8 |
| 9. Ledger schedule record | Step 0 outline row and the schedule table now say the integrator moved the row to fire 08:40, window 08:35 to 11:00 | This ledger |
| 10. Case 5 closed Sunday | Outbound deferral row to `soc-calendar-standup` added; acceptance row points to it | This ledger |
| NOTE. Step 6 terms sentence | Not applied. The reviewer left it to the lead (D17), and the added clause about removing reads through `## Corrections` would be a new claim this pass has no source for | none |

Re-run after the review fixes:

```
check-localized-routine.mjs routine: PASS (0 fail, 0 warn)
publish-run-reasons-review.md --dest post "verdict": "PASS", "violation_count": 0, exit 0
publish-run-reasons-review.md --dest plain "verdict": "PASS", "violation_count": 0, exit 0
runlog.mjs --stdin --once (updated Step 8 example, fictional values): runlog: appended soc-publish-run 2026-09-24 ok, exit 0
```

The copy check text holds every new or changed owner string with fictional counts, one per paragraph, at `scratchpad/vn/social-media-employee-vn/review-fix/`. The first checker run in this pass warned once (`amount`, figure `99.000đ` in the new bullet's example); the example was rewritten in words and the warning cleared.

Untouched, confirmed by the checker (Step 0 and Corrections equal) and by a section diff: frontmatter, guard call, "What you own, and the two guardrails", Step 0, Step 2, Step 4, Idempotency, Browser recipes, How this hands off, When you learn, Improving this routine, The one push, Corrections. Every original `## ` heading present in order; none added. The original kit was not edited; no shared file was edited by the writer, and the review pass touched only this routine, this ledger and `_shared/patch-log.md`.

Checker, routine mode:

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest post --json` (the call shape Step 5b documents) and `--dest plain --json` (the kit interface for member facing text), on two texts saved under `scratchpad/vn/social-media-employee-vn/`: every Vietnamese `reason` string with fictional counts filled in (`publish-run-reasons-spaced.md`), and the run record `outputs`, `blockers` and `notes` strings plus the scheduled wording (`publish-run-runrecord-lines-spaced.md`). One string per paragraph, because `--dest post` fails consecutive lines on its newline rule (the first run, single spaced, failed only on that rule: 10 and 5 `newline` violations, and PASS under `--dest plain`).

```
publish-run-reasons-spaced.md --dest post "verdict":"PASS","violation_count":0, exit 0
publish-run-reasons-spaced.md --dest plain "verdict":"PASS","violation_count":0, exit 0
publish-run-runrecord-lines-spaced.md --dest post "verdict":"PASS","violation_count":0, exit 0
publish-run-runrecord-lines-spaced.md --dest plain "verdict":"PASS","violation_count":0, exit 0
copy-check: selftest PASS (43 checks)
```

Known gap (D6): `bài có 7 hashtag, kênh này chỉ nhận tối đa 5` passes, because the script does not read Vietnamese counts; the routine fills those two numbers only from what it counted.

Run record validation: the Step 8 example, filled with fictional values and no placeholders, appended through `node scripts/runlog.mjs --stdin --once --root <scratch>/runlog-root`:

```
runlog: appended soc-publish-run 2026-09-24 ok
exit 0
```

Kit mode, `selftests.mjs`, `no-dashes.mjs`, `evals`, `installer/cli.mjs list` are the lead's, once per kit. No form marker in the routine (`grep -c` for `[S` digits or `[CG]`: 0).

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the four copy check texts, after the closing sections were written:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `SCHEDULE.md` (with `CONTRACT.md` section 1 and `employee.json`) | Phần A A2 74 `[CG]` KN-06-003; repo ordering one | When the standup row moves to a 7:30 brief, ordering one breaks unless this row follows | In the same edit that moves `soc-calendar-standup`, set `soc-publish-run`'s `window_start` strictly after the standup's new `window_end` and its `fire` inside that window; then re space `soc-material-sweep` and `soc-draft-queue` by full budget plus twenty minutes (section 4.1) and update the shipped times in `SCHEDULE.md` 4.2, 4.3, 6 and `CONTRACT.md` 1 and 1.4. Never move this row at or before the standup's `window_end` |
| `soc-calendar-standup` | 1287, none; 1204, 1237, 1263, none; Phần A A5.8 item 10 | A handover to the person who schedules by hand, and approval by one word on Zalo | Proposal: each by hand line names the queue path and entry, the image file name, the time, the destination and the words `chưa bấm`; a chat OK or HOÃN becomes a tick only when the person on duty ticks `hold this one` (D8). Unmarked, so only if B-7 carries a marker |
| `soc-calendar-standup` | 1370, none; B11 case 12 | A post scheduled before a price change | Proposal: a slot handed over today whose price in `## Member claims` changed since drafting is named in the brief for the person on duty to delete in the platform's scheduler; this routine cannot withdraw it |
| `soc-draft-queue` | 1398 `[S2]`; Phần A A3 106 | The advertising line on a KOL or KOC post | Write the first body line exactly `Nội dung quảng cáo` on every KOL or KOC entry; `soc-publish-run` Step 5b item 3 now fails a body where that line is missing or no longer first |
| `soc-draft-queue` | 1232 `[CG]` KN-06-035 | A retail Facebook post should carry an image | Prefer an entry with an image for a retail business on a Facebook Page destination; a text post stays allowed |
| `soc-intake-and-voice` | 1227 `[S33]`; Phần A A4 134 | Instagram hashtag cap | Withdrawn on 24/09/2026 after review: the integrator put the cap in the `CAPABILITIES.md` platform notes, the intake copies it into `## Hashtag policy`, and `soc-publish-run` 5b now reads the same notes. No change requested |
| `soc-intake-and-voice` | 1298 `[CG]` KN-06-036 | Instagram starts at one feed post and two stories a day | When seeding opening slots, seed at most one feed slot a day on an Instagram destination |
| `soc-intake-and-voice` | 1268, 1303 `[S16]` (does not fit); Phần A A5 153 `[CG]` | Personal profiles and groups are posted by a person | Proposal: where a block in `plan/channels.md` is a personal profile or a group, the intake report says the kit's route note warns against tool posting there; no routine refusal is adopted |
| `soc-calendar-standup` | 1196, none; B11 case 5; `CONTRACT.md` 10.1 item 6 | A slot due on a day the shop is closed | Proposal: a due slot whose date is listed closed under `## Working days and hours` in `plan/audience.md` gets one line under `Waiting on you` the day before, asking whether it still goes out. This routine adopts no rule, because 1196 is unmarked; the hold box stays the only stop (D8) |
| `soc-engagement-sweep` | 1366 `[S38]`, 1367 none, 1375 `[S46]` | A muted or removed post | Name it in the brief as muted or removed, never suggest reposting the same body or clip; the 24 hour figure stays out |

## Shared file patch requests

The writer edits none of these files. The schedule row did not change in the writer pass; the integrator moved it (see Deferrals received). The last two rows come from the review pass and are logged in `_shared/patch-log.md` as pending, after review.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### channel.schedule`, paragraph "**Every row says `unknown` and that is the honest answer" | insert after | **Every row says `unknown` and that is the honest answer rather than a gap.** There is no standard for this on any harness. Whether it exists on yours depends entirely on which publishing channel you connected and how, and that is a decision you make outside this kit. Probe it with check 5 in section 1.1 and write what you found in `## Corrections`. | Block P1 below | 1164, 1248, 1384 `[S28]`; 1227 `[S33]`; 1383 `[S29]` and 1217, 1232 `[S36]` as `unknown`; Phần A D13 terms; Phần A A5 153 `[CG]` |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### channel.schedule`, paragraph "**Absent:** `soc-publish-run` records each due slot" | insert after | **Absent:** `soc-publish-run` records each due slot `deferred-no-scheduler` and names it in the run record, and `soc-calendar-standup` moves that slot to the next working day and names it in the brief. **The slot is never fired early through `channel.publish` instead.** Firing a lunchtime post at breakfast is not an optimisation, it is a post going out at a time nobody chose. | **Inside a destination's minimum lead:** where the notes below record that platform's window `expected` or `confirmed`, `soc-publish-run` records a slot whose time has not arrived but is closer than the minimum lead the same way, `deferred-no-scheduler`, and the standup moves it the same way. It is never fired early through `channel.publish`. | 1179, 1264 shape on `[S28]` |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 10.1 The rules three or more routines share`, item 4 "**The member reads Vietnamese, and machines read English.**" | insert after the sentence | Every heading, key, id, status, path, cell token, and blocker string that another file reads stays in English exactly as written, and a Vietnamese gloss goes after a token, never in place of it. | A blocker that `soc-calendar-standup` copies verbatim into the brief may be written in Vietnamese by its owning routine, provided the string is stable from run to run, because `blocker_ages` keys on it; a fixed blocker a routine quotes in English stays in English. | Review fix 1, 24/09/2026; STYLE-VI; `soc-calendar-standup` Step 7 already copies a blocker "in whatever language their routine wrote them". Pending, after review. If the lead declines it, `soc-publish-run` Step 8 changes to keep every blocker in English and give the Vietnamese only in `reason` |
| `localization-reports/social-media-employee-vn/_shared/glossary.md` | `## 2. Role terms from A4`, after the row "influencer, smaller creator close to buyers" | insert after | `\| influencer, smaller creator close to buyers \| KOL, KOC \| 124 \| seeding ẩn \|` | `\| destination \| kênh (kênh đăng) \| none, review pass 24/09/2026 \| đích \|` | Review fix 7: `soc-calendar-standup`, `soc-intake-and-voice` and `soc-publish-run` all say `kênh`. Wording only. Pending, after review |

Block P1, exact new text:

```
**Per destination notes, read by `soc-publish-run` before every handover.** A platform's scheduler takes a post only inside its own window, sometimes only from one kind of account, sometimes only with media, and some cannot edit a post once it is scheduled. The routine names no figure: it reads these notes. Confidence follows section 1.3. A note marked `unknown` is not acted on, and a refusal that follows is recorded verbatim. Read each window on the platform's own scheduling screen on install day and correct the note here when the screen says otherwise.

- TikTok, through TikTok Studio's desktop scheduler: 15 minutes to 10 days ahead; business account (a 2025 how to page, not re-opened, says creator accounts can schedule too); video only; a scheduled post cannot be edited, so a change means a person deletes it and uploads again. Browser reads: the member's own account only. Source: TikTok for Business, https://ads.tiktok.com/business/vi/blog/introducing-video-scheduler-now-you-can-plan-tiktoks-in-advance, an article from 2021, read 24/09/2026. Confidence `expected`.
- Facebook Page, through Meta Business Suite: minimum lead and horizon not confirmed. The help page https://vi-vn.facebook.com/business/help/1252240869631062 showed only its title on 24/09/2026, and search summaries disagree on the horizon. Text posts allowed. Browser reads: the member's own Page and the Business Suite screens they opened, at human pace. Confidence `unknown`.
- Instagram, through Meta Business Suite: window not confirmed; a post needs a photo or video and takes up to 10 items according to third party pages only (https://vi-vn.facebook.com/business/help/942827662903020 showed only its title on 24/09/2026), confidence `unknown`. At most 5 hashtags in a post or reel, confirmed through Instagram's own `@creators` account on 24/09/2026, confidence `expected`. Browser reads: the member's own account only.
- YouTube, through YouTube Studio: window not recorded; video only. Browser reads: the member's own channel through YouTube Studio only. Confidence `unknown`.
- Zalo OA: window not recorded. Browser reads: none. Zalo's terms (https://zalo.vn/dieukhoan/, updated 28/08/2026, item 4.7) forbid logging in to or using Zalo through software Zalo has not developed, authorised or approved, so no routine opens a Zalo page, not even the member's own. Confidence `unknown`.
- A personal profile or a group, on any platform: third party tools that post to a personal profile risk a security checkpoint (owner approved risk note). Post there by hand.
```
