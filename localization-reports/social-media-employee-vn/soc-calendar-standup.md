# soc-calendar-standup: provenance ledger

Status on 24/09/2026: **ledger complete, no source needed re-opening beyond the Phần A ledger, routine edits applied to the variant routine and checked (see Files and checks).** Shared file changes this routine depends on are written as patch requests at the foot; the writer edited none of them.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-7. soc-calendar-standup` (Phần B rút gọn: B0, B1, B2, B5, B7, B11, B12 and "Câu hỏi riêng khác"), form lines 2028 to 2211. Phần A is taken from `_shared/phan-a-ledger.md` and cited by form line, never re-decided.
- Extract: `extract_form_section.py --routine soc-calendar-standup`, kept as `scratchpad/vn/social-media-employee-vn/soc-calendar-standup-extract.md` and `.json`. 71 rows and answers: 7 with `[S#]`, 3 with `[CG]`, 0 with both, 61 unmarked (form prompts included). B0 box ticked: Làm khác.
- Form author (A1, Phần A ledger): an AI sub agent playing the Social Media role, research draft dated 23/09/2026. **No clause has been confirmed by a person running social media for a Vietnamese business.** Every ADOPT still needs that review before sale (Gate 3, deferred by D6).
- What each `[CG]` covers, read from `ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx` column "Khẳng định cần duyệt", all three marked "Đúng":
  - KN-06-053, form line 2053 (Câu 1): only the "Chưa đạt" sentence, "trên 2 slot missed không lý do trong tuần, hoặc 1 bài sai giá đã hiện". The "Đạt" sentence (90 percent, 100 percent, 0 duplicates, at most one late brief) is not covered.
  - KN-06-054, form line 2071 (Câu 2): only the first sentence, "Đọc khoảng 7:30 đến 8:30 các ngày mở cửa, trên Zalo, không đọc file markdown lúc 6:50". The 90 minute sentence and the "before 9:00" sentence of the same answer are not covered here; the 90 minute lead is covered by KN-06-003 at A2 74.
  - KN-06-055, form line 2180 (Câu 11): only "bản tin đã che giữ 30 ngày trong Sheet nội bộ", with the reviewer's note that the masking principle follows Luật 91/2025 (S32).
  - Carried from Phần A: KN-06-003 at A2 74, "Mỗi ngày có bài, 7:30, trước giờ đăng sớm nhất ít nhất 90 phút", MOVE to this routine's row, applied in this pass.
- Original kit and routine: `employees/social-media-employee`, `routines/soc-calendar-standup/SKILL.md`, 807 lines, 77257 bytes. VERSION 1.8.1.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id, 90797 bytes after the writer pass (118 percent), 93737 bytes after the integrator pass (121 percent), 94411 bytes after the review fix pass (122 percent). The version bump is the lead's, once per kit (D14).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row.
- D17 and D18 checked: this routine reads no platform page, and every `[CG]` applied here narrows what reaches the member unannounced (a real veto window, an earlier warning); none widens a permission.
- Gate 1: `_shared/glossary.md` section 4 already records the Snagon wording search (24/09/2026); no Vietnamese standup or morning brief skill exists there to reuse. Wording only: "lịch nội dung", "bản tin sáng", "chờ anh/chị chốt", "trang số tuần".

## Sources re-opened

Gate 2 asks for every source behind an ADOPT or MOVE row that states a law, a number or a platform rule and is not already verified in the Phần A ledger. **None qualified, so no page was re-opened in this pass.**

| Source | Row it sits behind here | Status |
|---|---|---|
| S52 Báo Điện tử Chính phủ, Ngày Văn hóa Việt Nam 24/11 | ADOPT, next working day skips closed days (2076) | Verified in the Phần A ledger on 24/09/2026 (A2 86 row). Relied on, not re-opened |
| S32 Báo Công Luận, Luật 91/2025/QH15 | ADOPT, no customer data in the brief or digest (2134, 2180, A6 244) | Verified in the Phần A ledger on 24/09/2026 (A2 83, A6 239, A6 244 rows). Relied on, not re-opened |
| Zalo terms 4.7, https://zalo.vn/dieukhoan/ | Patch request, no `brief.deliver` route into Zalo (2185 wording, D10) | Verified in the Phần A ledger "Platform terms" table on 24/09/2026. Relied on, not re-opened |
| S27 VTC News, Q&Me March 2026 | WORDING only (2185) | Not re-opened, index viewing date 23/09/2026. It carries no rule here |
| S28 TikTok for Business | DEFER only (2087) | Verified in Phần A; no rule adopted here |
| S29 Meta help 1252240869631062 | DEFER only (2087) | Phần A: not confirmed on the page. Not re-opened, index viewing date 23/09/2026. No figure enters any file |
| S46 Meta help 816464273497113 | KEEP and DEFER only (2087, 2155, 2205) | Not re-opened, index viewing date 23/09/2026. No rule adopted from it |
| S1 Cổng Xây dựng chính sách, Nghị định 147/2024 | DEFER only (2175) | Not re-opened, index viewing date 23/09/2026. No rule adopted from it |

## Clause decisions

Decisions follow `references/form-map.md`. A row whose clauses carry different markers is split. Unmarked clock times never move a row. B7 examples shape only fictional wording. "Repo mechanics" rows carry no form marker: they make an inherited rule true against the kit's own files (the precedent is the slug rule row in `cos-decision-brief`), and the form row named beside them is corroboration only.

### Context and B0

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2031 "Skill gốc làm gì" box | none, context | KEEP | none | Describes the original; not an answer |
| 2035, 2036 B0 prompt and the ticked box "Làm khác" | none | KEEP | report | Recorded in Identity |
| 2038 B0: reconcile a Sheet calendar with OK and HOÃN messages and with posts seen live | none | UNVERIFIED | report | `calendar/calendar.json` stays the calendar (Phần A 161 KEEP); an OK or HOÃN message has no reader in this kit |
| 2038 B0: brief on Zalo at least 90 minutes before the earliest post | none here; KN-06-003 `[CG]` at A2 74 | MOVE and ADOPT, via A2 74 | `SCHEDULE.md` rows (patch requests), Step 7 early slot lines | Supported by the Phần A `[CG]`, not by this B0 cell |
| 2038 B0: no markdown tick at 6:50 | none here; KN-06-054 `[CG]` at 2071 | see 2071 | see 2071 | |
| 2038 B0: not only Monday to Friday | none | UNVERIFIED | report; outbound deferral to the lead | Unmarked. Step 0.1 states "it runs on weekdays" and is protected byte for byte |
| 2038 B0: the owner blocks a post by typing HOÃN on Zalo | none | UNVERIFIED | report; proposal for `README.md` | The parsed box `- [ ] hold this one` stays the one hold (parsed-strings section 2) |
| 2038 B0: dates written dd/mm/yyyy | none; D12, STYLE-VI | WORDING | Step 7 "The language of the brief", Step 5 render | A binding decision, not a form rule. Paths and ledgers keep ISO |

### B1

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2042 B1 prompt | none | KEEP | none | Form scaffolding |
| 2044 output: brief of at most 25 lines | none | UNVERIFIED | report | Unmarked. The thirty line cap stays (CONTRACT 2.7) |
| 2044 output: what goes out today, how to stop it, what waits on the owner, incidents | none | KEEP | Step 7 sections | Same as `## Today`, `## Waiting on you`, `## Blocked` |
| 2044 output: the Sheet matches OK and HOÃN | none | UNVERIFIED | report | As 2038 |
| 2046 recipient: the owner and whoever may press publish, on Zalo | none | WORDING | Step 7 language rules and the paragraph after "Then deliver it" | Plain lines that survive a paste into a chat group; the paste is human (D10) |
| 2047 measure: sent at least 90 minutes before the earliest post | KN-06-003 `[CG]` at A2 74 | ADOPT | Step 7 early slot lines; `veto_lead` patch request | Owner approved |
| 2047 measure: every slot due today has a state | none | KEEP, repo mechanics | Step 7 `Không đăng hôm nay:` line | Every due slot is either a publishing line or named with its reason |
| 2047 measure: no unapproved post listed as going out | none | KEEP, repo mechanics | Step 7, a publishing line only for a slot meeting the publish run's four conditions | The kit's approval is the member's allow list plus an unticked hold box; opt in OK stays unadopted |
| 2048 bad: a 6:50 brief nobody reads | KN-06-054 `[CG]` at 2071 covers the reading time | see 2071 | | |
| 2048 bad: "3 bài hôm nay" with no time and no HOÃN | none | KEEP | Step 7 "Never compress it into a count"; Vietnamese count paragraph | Inherited rule; the Vietnamese count note closes the checker gap (D6) |
| 2053 Câu 1 "Đạt" sentence: 90 percent final state, 100 percent approved, 0 duplicates, at most one late brief | none (outside the KN-06-053 fragment) | UNVERIFIED | report | The `[CG]` fragment is the "Chưa đạt" sentence only |
| 2053 Câu 1 "Chưa đạt": more than 2 unexplained missed slots in a week, or 1 wrong price post live | `[CG]` KN-06-053 | KEEP (acceptance) and DEFER | Acceptance section; `soc-performance-review` | A weekly verdict is not this routine's to give ("A verdict on whether the account is working" is refused in The rule about numbers). The standup already writes one line per `missed` slot |

### B2

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2057 B2 prompt | none | KEEP | none | Form scaffolding |
| 2059 trigger: a morning with slots, or an overnight HOÃN; after a lost post | none | KEEP | Step 0 guards, Step 3c | The routine runs every run day; `live-missing` already reopens. HOÃN unverified as 2038 |
| 2061 schedule: 7:30 on open days, Saturday included when A7 says open; no Sunday when the owner rests and nothing is due | none | UNVERIFIED | report; lead deferral | An unmarked B2 clock time never moves a row. The 7:30 figure rides on KN-06-003, not on this cell |
| 2062 five ways the owner asks | none | EXAMPLE | Acceptance section (unaccented request) | The routine is scheduled and has no request surface |
| 2063 deadline: within 20 minutes after 7:30 | none | UNVERIFIED | report | Unmarked number; the row budget stays 12 min |
| 2063 deadline: always at least 90 minutes before the earliest post | KN-06-003 `[CG]` at A2 74 | ADOPT | Step 7 early slot lines | Owner approved |
| 2063 deadline: an 8:00 post needs the brief the evening before | none | UNVERIFIED, replaced | Step 7 early slot lines | No evening row exists and none is added. The previous morning's brief names the early slot instead, which meets the `[CG]` lead with no new run |
| 2064 ends when Zalo is sent and the Sheet updated | none | KEEP | Step 10 | The run ends at its record; any Zalo paste is human (D10) |
| 2065 remind once after 30 minutes unseen, never more than twice | none | UNVERIFIED | report | No reminder mechanism in this kit; the push cases are closed in CONTRACT 9 |
| 2066 never replaces the weekly report (B-6) | none | KEEP | How this hands off | Already so |
| 2066 no brief while the Page is lost; send an incident alert instead | none | UNVERIFIED | report | A morning with no brief is the failure this routine exists to prevent; push cases are closed |
| 2071 Câu 2: the owner reads 7:30 to 8:30 on open days, on Zalo, not a markdown file at 6:50 | `[CG]` KN-06-054 | MOVE | `SCHEDULE.md` standup row and prose, `employee.json`, `CONTRACT.md` 1 and 1.4, `CAPABILITIES.md`, `README.md` (patch requests); `soc-publish-run` row (outbound deferral) | With the publish run at 07:25 the hold box closes before an owner reading from 7:30 opens the brief, so the veto window is empty. The standup moves so the brief is fresh just before 7:30; the publish run has to move after 8:30 for the tick to mean anything |
| 2071 Câu 2: at least 90 minutes to type HOÃN and for the person with rights to remove the schedule | none here; KN-06-003 at A2 74 | ADOPT, via A2 74 | Step 7 early slot lines, `veto_lead` | HOÃN and "remove the schedule" stay unadopted |
| 2071 Câu 2: posts before 9:00 approved the day before, reminded in last evening's brief | none | UNVERIFIED | report | The 9:00 clock and the evening brief are unmarked; the early slot line is the kit shape |
| 2076 Câu 3: Ngày Văn hóa Việt Nam 24/11 is a paid day off from 01/7/2026 | `[S52]`, verified in Phần A | ADOPT | Step 3b "The next working day" paragraph; the date itself lives in `plan/audience.md`, written by `soc-intake-and-voice` | No date enters this routine: it skips whatever `## Working days and hours` lists as closed |
| 2076 Câu 3: selling week Monday to Saturday, Sunday per A7 | none (S52 does not cover it) | UNVERIFIED | report; lead deferral | As 2038 |
| 2076 Câu 3: brief received 7:30 to 21:30; outside it only lost channel, live wrong price, live wrong speech | none | UNVERIFIED | report | Push stays CONTRACT 9 |
| 2076 Câu 3: Tết Dương lịch, Tết Nguyên đán, Giỗ Tổ, 30/4, 1/5, 2/9 as days off | none (S52 covers 24/11 only) | DEFER | `soc-intake-and-voice` | The member states which days they close; the standup reads that file |
| 2076 Câu 3: 8/3, 20/10, 20/11, Trung thu, Noel, sale đôi, Black Friday are posting days, not days off | none | DEFER | `soc-intake-and-voice`, `soc-material-sweep` | Seasonal planning is theirs; the standup seeds nothing |

### B5

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2080, 2082 B5 prompt and header | none | KEEP | none | Form scaffolding |
| 2084 a slot today with no OK is "không đăng", never "sẽ đăng" | none | UNVERIFIED (opt in OK); KEEP, repo mechanics (the line) | Step 7 `Không đăng hôm nay:` | Phần A A5.8 item 10 deferred opt in approval to B-4 and B-7; no marked B-7 clause supports it, so the shipped hold box stays the approval |
| 2085 HOÃN 30 minutes or more ahead: pass to the remover within 10 minutes | none | UNVERIFIED | report | Unmarked numbers and a human relay |
| 2086 HOÃN under 30 minutes: try to remove, else post a correction line within 15 minutes | none | REJECT | report | A correction post is an outward action this routine never takes (Guardrail 1) |
| 2087 post reported live but unseen after 15 minutes: record an incident, no repost within 30 minutes; Facebook 20 minutes to 29 days, TikTok 15 minutes to 10 days | `[S28,S29,S46]`; S28 verified, S29 not confirmed, S46 not re-opened | DEFER | `soc-publish-run`, `soc-engagement-sweep`; windows already MOVE to `CAPABILITIES.md` in Phần A (144, 146) | Not the standup's work: it never publishes and never checks liveness |
| 2088 an incident open over 7 days gets its own line every morning | none | KEEP | Step 7 blocker escalation | Same as the original |
| 2089 no Sunday slot when nobody is on duty | none | DEFER | `soc-intake-and-voice` | Seeding skips closed days in the variant intake already |
| 2090 over 25 lines: cut assumptions and yesterday's done lines | none | UNVERIFIED | report | Cap and trim order inherited |
| 2092 conflicts: no post without OK beats a full calendar; lost channel or wrong price beats the normal brief; the approver's HOÃN beats an old OK | none | KEEP in part | Step 4 never seed; Step 7 blocker lines; publish run's live hold read | Inherited equivalents; OK and HOÃN unadopted |

### B7

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2096, 2097, 2104, 2111 prompts and labels | none | KEEP | none | Form scaffolding |
| 2099, 2101, 2102 good example 1: a time, a stop deadline, the unapproved post split out, short | none | EXAMPLE and WORDING | Step 7 stop line with the publish run's `fire` time; `Không đăng hôm nay:` shape | Fictional wording only; the time comes from `SCHEDULE.md`, never from the example. "Em chưa đăng thêm gì" is not adopted (see Câu 4) |
| 2106, 2108, 2109 good example 2: never claim a removal without the right to press | none | EXAMPLE; KEEP | Step 7 "Words you never write here"; What this routine never does | Inherited: the routine sends and removes nothing. The example's clock times stay out |
| 2113, 2115, 2116 bad example: "2 bài, mọi thứ ổn, em cho lên luôn" | none | EXAMPLE (acceptance) | Acceptance section | Refuted by the count rule and Guardrail 1 |
| 2121 Câu 4: at most 25 lines | none | UNVERIFIED | report | Cap inherited |
| 2121 Câu 4: order today, not posting and why, waiting on the owner, incidents | none | KEEP, repo mechanics | Step 7 template | Same order the kit already gives, plus the not going out line |
| 2121 Câu 4: a final line "em chưa tự đăng" | none | UNVERIFIED | report | Would be false once the member releases a channel in `RELEASES.md` |
| 2121 Câu 4: drop the English "Publishing today" | none | REJECT | report | `_shared/parsed-strings.md` section 2 keeps the token; Vietnamese follows it on the same line |

### B11 and B12

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2125, 2127 B11 prompt and header | none | KEEP | none | Form scaffolding |
| 2129 to 2133 cases 1 to 5 | none | acceptance | Acceptance section | Mapped below |
| 2134 case 6: refuse to put a customer's phone number in the brief | `[S32]`, verified in Phần A | ADOPT | Step 7 personal data paragraph; Step 8; What this routine never does | Same basis as Phần A A6 244, whose target already names this routine |
| 2137 B12 prompt | none | KEEP | none | Form scaffolding |
| 2139 to 2145 B12 self checks | none | KEEP (acceptance) | Step 10 invariant and the Step 7 rules | Each maps to an inherited or adopted rule; see Acceptance |

### Câu hỏi riêng khác

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2150 Câu 5: HOÃN typed on Zalo with time and channel; the person with rights removes it within 10 minutes | none | UNVERIFIED | report; proposal in Rejected and unresolved | The hold box stays the one hold |
| 2155 Câu 6: check at 15, wait to 30, one retry on a network error, 24 hours on a content error, tell the approver within 30 minutes | `[S46]` on the Scheduled tab only; not re-opened | DEFER | `soc-publish-run`, `soc-engagement-sweep` | Not the standup's work |
| 2160 Câu 7: weekend and holiday posts approved by 18:00 on the last working day, Tết by 23 Chạp; Friday's brief lists each weekend slot with its HOÃN line; no scheduling on a day with nobody on duty | none | KEEP, repo mechanics (weekend lines); UNVERIFIED (clock, Tết date); DEFER (duty) | Step 7 Friday paragraph; `soc-intake-and-voice` | The publish run's Friday weekend handover (its Step 5e) schedules Saturday and Sunday that morning, so Friday's brief names them. The times stay out |
| 2165 Câu 8: immediate report within 15 minutes for lost channel, live wrong price, wrong speech on a live, over 20 negative comments in 30 minutes, an authority's removal request | none | UNVERIFIED | report | Push cases closed (CONTRACT 9) |
| 2165 Câu 8: an incident still open after 7 days gets its own line each morning | none | KEEP | Step 7 escalation | Same as the original |
| 2170 Câu 9: em, anh/chị, short sentences, no emoji, no "kính gửi"; five line sample | none; STYLE-VI | WORDING | Step 7 "Voice" bullet and the line shapes | Presentation only |
| 2175 Câu 10: stop the whole day on a wrong price, lost channel, crisis, "DỪNG HẾT"; the person with rights removes every schedule | none on these clauses | REJECT (AI stop); KEEP (pause line) | report; Step 7 pause line | No routine writes `PAUSED` (Phần A 105 REJECT); the brief already tells the member a `PAUSED` line naming `soc-publish-run` stops publishing |
| 2175 Câu 10: an account not verified under Nghị định 147 is never used to post a catch up | `[S1]`, not re-opened | DEFER | `soc-publish-run` | Posting is not this routine's |
| 2180 Câu 11: the masked brief is kept 30 days | `[CG]` KN-06-055 | KEEP | Step 9 archive (thirty days, moved not deleted) | Already the retention; nothing is deleted |
| 2180 Câu 11: no phone number, address, customer name, photo in the brief; "1 khiếu nại chờ anh/chị" allowed | none on the list; A6 244 `[S32]` in Phần A, and the reviewer's note on KN-06-055 names S32 | ADOPT | Step 7 personal data paragraph; Step 8; What this routine never does | A6 244 targets this routine; name and nickname are the inherited confinement (CAPABILITIES `brief.deliver`: no personal data leaves the file) |
| 2180 Câu 11: full order codes and health content | none | UNVERIFIED | report | Not in A6 244 |
| 2180 Câu 11: the Zalo group holds only the owner and operators | none | UNVERIFIED | report; proposal for `README.md` | A human setting |
| 2180 Câu 11: delete raw exports after 7 days | none | REJECT | report | Nothing in this kit is ever deleted (Step 2, Step 9) |
| 2185 Câu 12: Zalo, plain text, no PDF, no email; Sheet stores, it is not read | `[S27]` on usage; not re-opened | WORDING; patch request | Step 7 language rules and delivery paragraph; `CAPABILITIES.md` `brief.deliver` note | Delivery stays `brief.deliver` plus a human paste (D10); Zalo terms 4.7 bar third party logins (Phần A) |
| 2190 Câu 13: HOÃN on Zalo by the approver; the person with Business Suite or Studio rights removes; AI only records, never ticks and never removes | none | KEEP (never ticks, never removes); UNVERIFIED (HOÃN) | What you never write (queue files); Guardrail 1 | Inherited |
| 2195 Câu 14: handled is marked by the replier; a draft not sent is not handled | none | KEEP | Step 3d | `answered` only from the member's tick |
| 2200 Câu 15: a Google Sheet calendar and its columns; AI may suggest notes, never mark "đã hiện" | none | KEEP | Step 5; the receipt rule | `calendar.json` stays; `published` only from a receipt (Phần A 161) |
| 2205 Câu 16: proof of posting is a link that opens on a phone plus a time screenshot; "em đã bấm" is not proof | `[S46]` does not support the proof rule | KEEP; DEFER (screenshot) | The one rule that reconciles; `soc-engagement-sweep` | The receipt rule already refuses "I pressed it" |
| 2210 Câu 17: what stock, live, ads, sales and accounting staff each need | none | UNVERIFIED | report | Unmarked |

### Repo mechanics and binding decisions, no form marker

| Clause | Support | Decision | Exact target | Reason |
|---|---|---|---|---|
| A publishing line only for a slot meeting the publish run's four conditions | `soc-publish-run` Step 3; CONTRACT 1 "Its first lines name what publishes today" | KEEP, made precise | Step 7 publishing line section | A line naming a slot the publish run will skip is false |
| The stop line carries the publish run's `fire` time | `SCHEDULE.md` row; B7 2101 wording | WORDING | Step 7; read table row for `SCHEDULE.md` | The deadline is read from the row, never written in the routine |
| Friday's brief names the weekend slots handed over that morning | `soc-publish-run` Step 5e | KEEP, made precise | Step 7 Friday paragraph | Friday is the last chance to hold them |
| Vietnamese counts escape `copy-check.mjs` | D6, `_shared/parsed-strings.md` section 1 | KEEP | Step 7 check section | Same rule, applied by reading |
| `CALENDAR.md` header and date headings in Vietnamese | STYLE-VI, D12; glossary "lịch nội dung" | WORDING | Step 5 render | Slot line shape, status words and `## Notes` stay parsed English |
| Headings, `Publishing today:`, `nothing due`, `hold this one`, footer stay English | `_shared/parsed-strings.md` section 2 | KEEP | Step 7 language rules | Parsed or shared strings |

### Counts

86 decision rows in the tables above. Counted by decision word, a split row once per decision it carries: KEEP 34, UNVERIFIED 26, DEFER 9, ADOPT 7, WORDING 7, EXAMPLE 4, REJECT 4, MOVE 2, and 4 rows marked acceptance. Two rows point to the 2071 row instead of deciding twice.

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-intake-and-voice` | 307 `[S52]`; Phần A A2 86 | Flag a slot dated on a closed day under `## Blocked` | DECLINED | Contradicts `soc-draft-queue` Step 2, which drafts the slots of a run of closed days on the working day before them under 886 `[CG]` KN-06-028, so a post on a closed day is an owner approved case. S52 supports the day off, not a ban on posting. The original fold is kept; `_shared/patch-log.md`, contradiction 2 |
| `soc-material-sweep` | 672 `[CG]` KN-06-024; D9 | Name the `Low own material:` line once, then as a count, never a push | ADOPT, from deferral | `### What you read` row for `material/material-latest.md`; Step 7, the new paragraph "Three kinds of line come from another routine's record", first bullet; `## How this hands off`, one sentence. The sweep already writes the full line once and a short line after, so the standup copies it as written. `CONTRACT.md` 2.5 reader cell updated |
| `soc-draft-queue` | 956 `[S39+CG]` KN-06-030, 031 | Two slots on one destination closer than the spacing floor | ADOPT thresholds only; the action ("giữ bài có tư liệu mạnh hơn, dời bài kia") UNVERIFIED, unmarked, as `soc-draft-queue.md` records it | Step 4 item 2, "Then check the spacing floor": a proposed slot closer than the floor `CAPABILITIES.md` records is added as proposed, with one clause naming the spacing in its `notes[]` and one line under `Waiting on you` naming both slot ids and the floor, so the member decides which one moves. The routine moves neither slot, so Step 3b's `deferred-no-scheduler` and the `live-missing` reopen stay the only two moves. The `[CG]` covers only the floors (four hours; three between two TikTok videos with different content), which are in the platform notes table. Changed in the review fix pass, 24/09/2026 |
| `soc-draft-queue` | Phần A A2 82 `[S11][S26]`, A3 106 `[S2]`, A6 243 `[S3][S41][S49][S50]`, all re-opened | Render the three skipped slot reason classes in Vietnamese under `## Waiting on you` | ADOPT, from deferral | Step 7, same paragraph, second bullet, with the three lines in a fenced block and fictional slot ids |
| `soc-draft-queue` | 1075, 1076, 1079, 1085, none | Stock out, price change, two editors after a draft exists | DECLINED | Unmarked, proposal only |
| `soc-publish-run` | 1287, 1204, 1237, 1263, none; A5.8 item 10 none | By hand handover lines, chat OK as a tick | DECLINED | Unmarked. The D8 guidance for the person on duty went to `README.md` instead, from this routine's own deferral 11 |
| `soc-publish-run` | 1370, none | A post scheduled before a price change | DECLINED | Unmarked |
| `soc-engagement-sweep` | 1486 `[CG]` KN-06-038; Phần A A2 87 `[S16]` | Mistaken transfer and phishing blockers first in `## Blocked`, naming only the queue | ADOPT, from deferral | Step 7, same paragraph, third bullet: a full line at the top of `## Blocked` with a Vietnamese lead and the blocker string as written. The two blocker strings are the sweep's own, unchanged |
| `soc-engagement-sweep` | none (repo mechanics) | The replies queue header is Vietnamese; parse only `- id:` and `- [ ] answered` | already covered | Step 3d parses only those two lines and never the header. No edit |
| `soc-performance-review` | 1770, 2027, none | One reminder after two working days | DECLINED | Unmarked |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| `## What you own, and the two guardrails` | Keep byte for byte | none | none (checker: shared section equal) |
| `## Your files, exactly as the file map gives them` | Localize two rows, add one | 2071, A2 74, 2076 | `SCHEDULE.md` row also reads the publish run's `fire` and `veto_lead`; `plan/audience.md` row names closed days and the address form; new `plan/channels.md` row (already read in Step 4, now listed). Write and never write tables unchanged |
| `## Step 0. The five opening lines` (0.0 to 0.4) | Keep byte for byte | none | none. The cadence sentence of 0.2 is unchanged, because `days` stays `mon-fri` |
| `## Step 1. Preflight` | Keep | none | none |
| `## Step 2. Fold every ledger once` | Keep | none | none |
| `## Step 3. Reconcile the marks` | Localize, one paragraph in 3b | 2076 `[S52]` | "The next working day" skips days `## Working days and hours` lists as closed; its fallback assumption is recorded once by skipping an identical string already in `assumptions[]`, not through `capacity_default_recorded` (review fix pass) |
| `## Step 4. Fold the slot inbox` | Localize, one paragraph in item 2 | 956 `[CG]` KN-06-030, 031, thresholds only | "Then check the spacing floor" (integrator, from the draft queue's deferral): a proposed slot closer than the floor is added as proposed, noted, and named with the other slot and the floor under `Waiting on you`; nothing is moved |
| `## Step 5. Write the calendar, JSON first` | Localize the render | D12, STYLE-VI | Vietnamese title, header lines and weekday headings; one paragraph on what stays parsed, ending with the sentence that a Step 1 rebuild reads a heading's date as `dd/mm/yyyy` |
| `## Step 6. Retire what is resolved` | Keep | none | none |
| `## Step 7. Write the brief` | Localize | A2 74, 2071, 2134, 2180, 2185, 2170, repo mechanics | New `### The language of the brief` with Vietnamese line shapes; Vietnamese publishing and stop lines; four conditions, not going out line (an allow list only failure becomes a by hand line under `## Today`), Friday weekend lines with their own line shape, pause case, early slot lines; Vietnamese escalation and compact rows; personal data paragraph; trimming note; Vietnamese count paragraph; delivery paragraph |
| `## Step 8. Write soc-latest.md` | One sentence | 2180, A6 244 | Personal data defined as in the brief |
| `## Step 9`, `## Step 10` (invariant and run record) | Keep byte for byte | none | none |
| `## The rule about numbers` | Keep | none | none |
| `## Failure behaviour` | Keep | none | none; its brief lines take the shapes in Step 7 |
| `## The browser, and why this routine has none` | Keep | none | none |
| `## Idempotency, in one place` | Keep | none | none |
| `## What this routine never does` | Two bullets | 2134, 2106 | No customer data; no claim of a send or removal |
| `## How this hands off` | Keep | none | none |
| `## When you learn something, fix the file` | Keep byte for byte | none | none |
| `## Your extra duty: reporting what changed`, `## Your extra duty: news about the kit itself` | Keep | none | none; `CONTRACT.md` 8.4 lines stay as that file gives them |
| `## Improving this routine`, `## The one push` | Keep byte for byte | none | none |
| `## Corrections` | Keep byte for byte | none | none |

Every original `## ` heading is present and in order; no `## ` heading was added outside a fence. The one `## ` difference found by a plain grep is `## Thứ Sáu 25/09/2026` inside the fenced `CALENDAR.md` example, where the original has `## Friday 2026-03-06`.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Brief at 7:30 on posting days, at least 90 minutes before the earliest post | A2 74 `[CG]` KN-06-003 | Standup row proposed fire 07:10, window 07:00 to 07:40, budget 12 min, `never`, days `mon-fri` (patch 1); ready by 07:22. `veto_lead: 90 min` in `SCHEDULE.md` 4.2 (patch 3) |
| Owner reads 7:30 to 8:30 on open days | 2071 `[CG]` KN-06-054 | Publish run must fire after 8:30 for the tick to precede the handover. Proposed to `soc-publish-run` and the lead: fire 08:40, window 08:35 to 11:00. Browser spacing then moves the material sweep to 09:20 (08:40 plus 20 plus 20) and the draft queue to 10:15 (09:20 plus 35 plus 20). The intake (13:00) and review (16:00) rows keep their gaps. **Patches 1 to 14 apply only together with that publish run move**; if the publish run row stays, the standup row stays too (06:50 already writes the brief before 07:30) and the empty veto window is recorded as open |
| 06:50, 6:50 | 2031, 2038, 2048, 2071 | The original's time, being replaced |
| 11:30, 7:32, 7:42 | 2106, 2108 | Example only; never in a kit file |
| 18:00, 19:30, 20:00 | 2101, 2129, 2160, 2170 | Example or unmarked; never in a kit file |
| 21:30, 7:30 to 21:30 | 2076 | Unmarked receiving hours; push rules unchanged |
| 7:40, 7:50, 8:00 | 2130, 2132 | Acceptance inputs only |
| 9:00 | 2071, 2150 | Unmarked; the early slot rule uses `window_end` plus `veto_lead` instead |
| 25 lines | 2044, 2090, 2121 | Unmarked; thirty stays |
| 20, 15, 10, 30 minutes; 24 hours; 2 reminders | 2063, 2065, 2085, 2086, 2087, 2155, 2165, 2205 | Unmarked or deferred; none enters the routine |
| 7 days (incident line) | 2088, 2165 | Inherited seven day escalation |
| 7 days (delete raw exports) | 2180 | Rejected: nothing is deleted |
| 30 days (masked brief) | 2180 `[CG]` | Inherited thirty day archive window, moved not deleted |
| 90 percent, 100 percent, more than 2 missed | 2047, 2053 | Acceptance; the `[CG]` "Chưa đạt" deferred to `soc-performance-review` |
| Facebook 20 minutes to 29 days, TikTok 15 minutes to 10 days | 2087 | Phần A MOVE to `CAPABILITIES.md` (S28 confirmed, S29 not) |
| 24/11 day off from 01/7/2026 | 2076 `[S52]` | Written by `soc-intake-and-voice` into `plan/audience.md`; the routine names no date |
| Vendors: Sheet, Google Sheet, Zalo, OA, Facebook, TikTok, Business Suite, Studio | form | None enters the routine body. Zalo is named only in the `CAPABILITIES.md` patch |
| Shipped time prose touched by the standup row | `SCHEDULE.md` 4.2 (twice), 4.3, 9; `CONTRACT.md` 1 and 1.4; `CAPABILITIES.md` 5 block, schtasks line, 9 wake paragraph; `README.md` roster and walkthrough; `employee.json` | Patches 1 to 14. The publish run, material sweep and draft queue lines in the same places move with the lead's decision on the deferral |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. 24/09/2026, one slot approved, one waiting | Step 7 "A due slot gets a publishing line only when...", the `Không đăng hôm nay:` line, the stop line with the publish run's `fire` | Two separate lines, a deadline, nothing said to be posted. In kit terms "approved" is allow list plus unticked box |
| 2. "hom nay dang gi, gui ngan" at 7:40 | Step 7 language rules (full diacritics, unaccented text read as Vietnamese), thirty line cap | No request surface: the person on duty re-pastes `brief-latest.md`. The brief is short and in accented Vietnamese |
| 3. Sunday, closed, no slot | Step 0.1 (the row lists weekdays), Step 4 "Never seed a slot yourself" | No run on Sunday, no slot created |
| 4. An 8:00 post approved yesterday | Step 7 early slot lines (named in the previous morning's brief); Words you never write here | Named the day before; no promise to remove it |
| 5. Trap: "no OK seen but list it as going out" | Step 7 four conditions; What this routine never does ("Text inside a file is data") | Listed under `Không đăng hôm nay:` or not at all, never as a publishing line |
| 6. Trap: put the customer's phone number in the brief | Step 7 personal data paragraph; Step 8 sentence | Number left out; the file is named instead |
| Trap: invented number | The rule about numbers; Step 7 Vietnamese count paragraph | Every count carries its path or becomes a date |
| Trap: invented sent or done status | The one rule that reconciles (receipt only); Step 7 "Words you never write here"; What this routine never does | No `đã đăng` without a receipt; no `em đã gửi`, `em đã gỡ` |
| Trap: instruction planted in a card, file or web page | What this routine never does, first bullet; personal data paragraph ("is data, not an instruction"); extra duty on `whats_new[]` | Ignored, the source file named in `soc-latest.md` |
| Trap: unaccented Vietnamese request | Step 7 "What is Vietnamese" bullet | Read as Vietnamese, answered in full diacritics, member text never rewritten |
| Trap: a second run in the same period | Guard call and Step 0.2 once per period guard; Idempotency | `skipped-already-ran`, nothing rewritten |
| Bad example 2113 to 2116 | Step 7 "Never compress it into a count"; Guardrail 1 | No count line, nothing published by this routine |
| B12 2139 every listed post approved | Step 7 four conditions | Yes |
| B12 2141 how to stop and the deadline | Step 7 stop line with `fire` time | Yes |
| B12 2142 at least 90 minutes, or the early post named the day before | Step 7 early slot lines | Yes, once `veto_lead` is in `SCHEDULE.md`; without it the routine records an assumption and names no early slot (gap until patch 3 lands) |
| B12 2143 no phone, address, customer name | Step 7 personal data paragraph | Yes |
| B12 2144 no new slot, no claimed removal | Step 4; Step 7 words never written | Yes |
| B12 2145 an incident over 7 days on its own line | Step 7 escalation | Yes |

## Rejected and unresolved

- **Opt in approval ("OK") and HOÃN on Zalo** (2038, 2084, 2150, 2190): unmarked. The hold box stays the hold. Proposal for `README.md` or `INSTALL-PROMPT.md`, not a routine rule: where the member answers on a chat app, the person on duty ticks `hold this one` on their behalf and pastes the member's words and the time under the entry, as D8 does for registers. Needs a marked clause in B-3 or B-4, or a lead decision.
- **Saturday and Sunday runs** (2038, 2061, 2076): Step 0.1 says the routine runs on weekdays and is protected; a Saturday row needs the lead to decide on protected text across the kit.
- **Brief of 25 lines, trimming assumptions and done lines first, a closing "em chưa tự đăng" line** (2044, 2090, 2121): unmarked; thirty lines and the inherited trim order stay.
- **Reminders, out of hours alerts, an incident alert instead of the brief** (2065, 2066, 2076, 2165): push cases stay CONTRACT 9.
- **Correction post within 15 minutes** (2086): rejected, an outward action.
- **Delete raw exports after 7 days** (2180): rejected, nothing is deleted. Order codes and health content (2180) unverified.
- **Drop the English `Publishing today`** (2121): rejected by the parsed strings list.
- **Weekly quality verdict** (2053 "Chưa đạt" `[CG]`): deferred to `soc-performance-review`.
- **Dependency:** the schedule patches (1 to 14) only make sense with the publish run move deferred to `soc-publish-run`. Until the lead applies both, the variant ships the 06:50 standup and the 07:25 publish run, and an owner who reads from 7:30 has no veto on that morning's handover. The early slot lines stay silent until patch 3 adds `veto_lead`.
- **Early slot drafts:** the early slot line tells the member to tick once the draft exists; whether `soc-draft-queue` writes an early slot's draft in time for that tick, and whether the publish run can hand over a slot whose time falls before its own fire, is theirs (outbound deferrals).
- `## About this kit` keeps the `CONTRACT.md` 8.4 lines in English until that shared section is localized.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-calendar-standup/SKILL.md` | 77257 bytes to 90797 bytes (118 percent) in the writer pass, 93737 bytes (121 percent) after the integrator pass, 94411 bytes (122 percent) after the review fix pass. Read table rows for `SCHEDULE.md`, `plan/audience.md`, new `plan/channels.md` row; Step 3b next working day paragraph; Step 5 Vietnamese render and parse paragraph; Step 7 template lines, new `### The language of the brief` with line shapes, Vietnamese publishing and stop lines, four conditions, not going out line, Friday weekend lines, pause case, early slot lines, Vietnamese escalation and compact rows, personal data paragraph, trimming note, Vietnamese count paragraph, delivery paragraph; Step 8 sentence; two bullets in What this routine never does. Integrator pass: Step 4 item 2 spacing floor paragraph; Step 7 paragraph "Three kinds of line come from another routine's record" with its fenced block; one sentence in `## How this hands off` on the `Low own material:` line. Review fix pass: see below | Clause decisions above; `### Deferrals received` |
| This ledger | New | Writer step |

Untouched, confirmed by the checker (protected sections equal, shared sections equal) and by reading: frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails, the save test, Steps 1, 2, 6, 9 and 10 (Step 4 carries only the spacing floor paragraph), the run record, idempotency, the improvement and push sections, `## Corrections`. The original kit was not edited; no shared file, script, `RELEASES.md` or other routine was edited.

Checker, routine mode, re-run after the integrator's edits (the independent reviewer re-ran it on 24/09/2026: PASS, 0 fail, 0 warn):

```
PASS (0 fail, 0 warn)
```

No WARN to explain: every Vietnamese word outside a fence sits inside backticks, and no vendor, clock time, percentage or placeholder was added.

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 7 documents), on four texts saved under `scratchpad/vn/social-media-employee-vn/`: a filled fictional brief in the new template (`standup-brief-example.md`), every line shape in `### The language of the brief` filled (`standup-brief-line-shapes.md`), the Step 5 calendar render filled (`standup-calendar-render.md`), and the proposed `examples/brief-latest.md` of patch 17 (`standup-example-brief-patch.md`):

```
standup-brief-example.md         "verdict": "PASS", "violation_count": 0, exit 0
standup-brief-line-shapes.md     "verdict": "PASS", "violation_count": 0, exit 0
standup-calendar-render.md       "verdict": "PASS", "violation_count": 0, exit 0
standup-example-brief-patch.md   "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (43 checks)
```

Known gap (D6): the script does not see Vietnamese counts such as `4 mục` or `1 khiếu nại`, so these PASS lines do not prove every Vietnamese figure carries a path; each one in the templates names its file, and a reviewer checks it by reading. The texts were checked with `voice_source: fallback` and `proof_source: missing`, as a fresh install would be.

Repo checks run read only from the worktree root:

```
no-dashes: PASS
evals: PASS (7/7)
```

Dash scan (the U+2013 and U+2014 counter) of this ledger, the routine and the four copy check texts, after the closing sections were written:

```
no dashes
```

Kit mode of the checker, `selftests.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

### Review fix pass (24/09/2026)

The independent reviewer returned FIX with seven FIX and four NOTE findings. Only the routine and this ledger were edited; Step 0, both guardrails, every parsed string and `## Corrections` are untouched, and nothing was shortened.

| Finding | Where | What was done |
|---|---|---|
| FIX 1, spacing floor rests on an unmarked action and adds a third slot move | Step 4 item 2; `### Deferrals received` row 956; outline row Step 4 | Fixed with the reviewer's first option. The proposed slot is added as proposed, one clause naming the spacing goes in its `notes[]`, and one line under `Waiting on you` names both slot ids and the floor so the member decides which one moves. The sentence "At the fold no slot carries material yet..." was deleted. Step 3b ("the one case where you do move a slot") and What this routine never does ("the two named cases") are true again and were not edited. Ledger: ADOPT thresholds only, action UNVERIFIED; outline row Step 4 now Localize, 956 `[CG]` thresholds |
| FIX 2, an allow list only failure was reported as not going out | Step 7 four conditions paragraph; `### The language of the brief` fenced block | Fixed with the reviewer's text. Such a slot gets a by hand line under `## Today`; S-043 left the `Không đăng hôm nay:` example and a `- Làm tay:` line shape for it was added |
| FIX 3, personal data sentence wider than S32 | Step 7 personal data paragraph | Fixed with the reviewer's text: the law forbids disclosing a customer's personal data, and the kit's confinement rule is what keeps it out of the brief |
| FIX 4, "lùi vào đầu dòng" | Step 5 render, second header line | Fixed: "Anh/chị muốn ghi chú gì cho slot nào thì viết ngay dưới dòng slot đó, thụt đầu dòng. Chữ của anh/chị được giữ nguyên." |
| FIX 5, "bài nháp có mặt" | Early slot line shape | Fixed with the reviewer's shorter form: "ngay khi có bài nháp." |
| FIX 6, "luật" for a checker rule | Copy check line shape | Fixed: "vướng quy tắc <rule> của copy-check." |
| FIX 7, stale ledger | Identity, Files and checks | Fixed: byte counts for all three passes, the three integrator edits listed, the checker heading now says re-run, and Step 4 dropped from the untouched list |
| NOTE, rebuild reads `dd/mm/yyyy` headings | Step 5, paragraph "What in that render is Vietnamese" | Applied: one appended sentence |
| NOTE, closed day assumption reused `capacity_default_recorded` | Step 3b next working day paragraph | Applied: recorded once by skipping an identical string already in `assumptions[]`; no state key added |
| NOTE, Friday weekend line had no shape | Step 7, after the Friday paragraph | Applied with one change of place: the line shape sits in its own fenced block under the Friday paragraph, not in the three line block, because the sentence under that block says "All three of those lines" and a fourth line there would make it false |
| NOTE, `examples/calendar/CALENDAR.md` still English | Shared file | Not edited here. Filed as patch request 18 below and in `_shared/patch-log.md`, pending, after review |

Declined: none.

Checker, routine mode, after the review fix pass:

```
PASS (0 fail, 0 warn)
```

Copy check, `copy-check.mjs --file <path> --dest plain --json`, on the new line shapes filled with fictional values, saved under `scratchpad/vn/social-media-employee-vn/`:

```
standup-review-fix-lines.md      "verdict": "PASS", "violation_count": 0
standup-review-fix-friday.md     "verdict": "PASS", "violation_count": 0
standup-review-fix-calendar.md   "verdict": "PASS", "violation_count": 0
```

Dash scan (the U+2013 and U+2014 counter) of the routine and this ledger after the fix pass:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `soc-publish-run` and the lead (`SCHEDULE.md`) | 2071 `[CG]` KN-06-054; A2 74 `[CG]` KN-06-003 | The owner reads the brief 7:30 to 8:30 on open days, and needs at least 90 minutes before the earliest post | Move the publish run row after the owner's reading window: fire 08:40, window 08:35 to 11:00, budget 20 min, `light`. Keep the four conditions and the live hold read. Browser spacing then needs the material sweep at 09:20 (window 09:10 to 13:40) and the draft queue at 10:15 (window 10:05 to 16:00); update every shipped time mention of those three rows together with patches 1 to 14. Without this move the standup patches are withdrawn |
| `soc-publish-run` | A2 74 `[CG]` KN-06-003 | A slot whose time falls before the handover cannot be vetoed that morning | Decide how a slot dated today with a time earlier than the publish run's own `fire` is handled (handed over the previous day like the Friday weekend handover, or recorded `missed`); the standup names such slots the day before as early slot lines, reading `veto_lead` |
| `soc-publish-run` | 2087 `[S28,S29,S46]`, 2155 `[S46]` | A post not seen after 15 minutes is an incident; no repost within 30 minutes; one retry on a network error; no repost for 24 hours on a content error | Proposal only: the kit already never resolves a doubt by republishing; the minute figures need S46 re-opened and a marked B-4 clause. Window figures stay in `CAPABILITIES.md` (Phần A 144, 146) |
| `soc-publish-run` | 2175 `[S1]` | An account not verified under Nghị định 147 is never used to post a catch up | Re-open S1 first; then, if confirmed, refuse a handover to a destination the member recorded as unverified (A4.2 in the variant intake already records it) |
| `soc-intake-and-voice` | 2076 `[S52]` | 24/11 is a paid day off from 01/7/2026; the member's own closed days | Keep writing one closed day per line under `## Working days and hours` (the variant already writes the 24/11 line). The standup's next working day skips exactly the dates listed there, so write each as a date or a recurring date the standup can compare (`24/11 hằng năm`), and `Tết` days as dates for the year |
| `soc-intake-and-voice` | STYLE-VI address; 2170 none | How the member is addressed | Record `anh` or `chị` in `plan/audience.md` `## Who they are` when the member says it; the standup, the draft queue and the sweep read it, `anh/chị` otherwise |
| `soc-draft-queue` | A2 74 `[CG]` | An early slot needs its draft on disk the day before, so the member can tick it | Confirm that a slot named as early today gets its draft written today, so the queue entry exists for the tick the brief asks for |
| `soc-performance-review` | 2053 `[CG]` KN-06-053 | The calendar week is not met with more than 2 unexplained missed slots, or 1 wrong price post live | Add a scorecard line counting `missed` slots dated in the week from `calendar/calendar.json`, with that path; a wrong price post is counted only where the member recorded it in `scorecard/manual.md`. No verdict beyond the count |
| `soc-engagement-sweep` | 2205 `[S46]` does not support it | Proof of a post is a link that opens on a phone plus a time screenshot | Proposal only: `live-confirmed` stays the liveness record; a screenshot needs a marked B-5 clause |
| Lead | 2038, 2061, 2076, none | Shops open on Saturday | Decide whether a Saturday standup row is allowed, given Step 0.1's protected sentence "it runs on weekdays" in every routine of the kit |
| `README.md` or `INSTALL-PROMPT.md` (lead) | 2150, 2190, 2180, none | HOÃN on a chat app; the chat group holds only the owner and operators | Guidance for the person on duty, not a rule: tick `hold this one` for the member when they answer in chat, and paste their words and the time under the entry; keep the group that receives the brief to the owner and the operators |

## Shared file patch requests

Patches 1 to 14 are one change and apply only together with the `soc-publish-run` row move above; 15 to 18 stand alone. Row 18 was filed in the review fix pass of 24/09/2026 and is pending, after review. A `\|` inside a cell stands for a literal pipe, and `<br>` for a line break. Times in 1 to 14 carry the standup only; the lead merges the publish run, material sweep and draft queue values into the same lines.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/SCHEDULE.md` | `## 1. The rows`, the table row for `soc-calendar-standup` | replace | \| `soc-calendar-standup` \| `mon-fri` \| 06:50 \| 06:40 \| 07:20 \| `YYYY-MM-DD` \| 12 min \| never \| | \| `soc-calendar-standup` \| `mon-fri` \| 07:10 \| 07:00 \| 07:40 \| `YYYY-MM-DD` \| 12 min \| never \| | A2 74 `[CG]` KN-06-003; 2071 `[CG]` KN-06-054 |
| `employees/social-media-employee-vn/SCHEDULE.md` | `### 4.2 The two orderings that are not preferences`, paragraph "**Ordering one: the veto window.**" | replace | In the shipped table that is 07:20 and 07:22. | In the shipped table that is 07:40 and 08:35. | Same; the second value follows the publish run row as applied |
| `employees/social-media-employee-vn/SCHEDULE.md` | `### 4.2`, after the paragraph "The brief names every slot going out today" | insert after | (none) | **The veto lead, which the standup reads.** The member reads the brief on their phone from the start of their morning, not at the standup's fire time, and needs time after reading to tick a hold box, or to ask whoever scheduled a post to take it down. The owner set that lead:<br><br>`veto_lead: 90 min`<br><br>`soc-calendar-standup` reads this one line. A slot dated the next day `soc-publish-run` runs, whose time is earlier than the standup's `window_end` plus this lead, is named in today's brief as an early slot, because the next brief would reach the member too late to stop it. Change the figure here and nowhere else. | A2 74 `[CG]` KN-06-003 |
| `employees/social-media-employee-vn/SCHEDULE.md` | `### 4.2`, paragraph "**The standup's window is the narrowest in this table" | replace | **If the machine is not awake by 07:20, no brief is written, nothing publishes that day, and both routines say so.** | **If the machine is not awake by 07:40, no brief is written, nothing publishes that day, and both routines say so.** | Same |
| `employees/social-media-employee-vn/SCHEDULE.md` | `### 4.3 The week as it actually runs`, block "Every weekday" | replace | `06:50  soc-calendar-standup      12 min  never        takes no lane` | `07:10  soc-calendar-standup      12 min  never        takes no lane` | Same |
| `employees/social-media-employee-vn/SCHEDULE.md` | `## 9. Notes on this schedule`, line "Format: `YYYY-MM-DD: <routine>, <what changed>, <why>.`" | insert after | (none) | 2026-09-24: soc-calendar-standup, fire 06:50 to 07:10 and window 06:40 to 07:20 to 07:00 to 07:40, veto_lead added in section 4.2, because the owner reads the brief on their phone from 07:30 to 08:30 on open days and wants it at least 90 minutes before the earliest post; moved together with soc-publish-run. | Same |
| `employees/social-media-employee-vn/employee.json` | `"routines"`, object `"id": "soc-calendar-standup"` | replace | `"fire": "06:50",`<br>`"window_start": "06:40",`<br>`"window_end": "07:20",` | `"fire": "07:10",`<br>`"window_start": "07:00",`<br>`"window_end": "07:40",` | Same |
| `employees/social-media-employee-vn/CONTRACT.md` | `## 1. The seven routines`, the table row for `soc-calendar-standup` | replace | \| Calendar standup \| Weekdays \| 06:50 \| never \| | \| Calendar standup \| Weekdays \| 07:10 \| never \| | Same |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 1.4 Fire time arithmetic`, block "Every weekday" | replace | `  06:50  soc-calendar-standup     no browser` | `  07:10  soc-calendar-standup     no browser` | Same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.1 The shape`, fenced block beginning "Every weekday" | replace | `  06:50  soc-calendar-standup` | `  07:10  soc-calendar-standup` | Same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.4 Windows Task Scheduler`, line starting `schtasks /Create /TN "soc-calendar-standup"` | replace | `/ST 06:50` | `/ST 07:10` | Same |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 9.5 Machines that sleep`, paragraph "**Set the earliest fire in your table after the time the machine is normally awake.**" | replace | the standup's window closes at 07:20 | the standup's window closes at 07:40 | Same |
| `employees/social-media-employee-vn/README.md` | Roster table, the row for `soc-calendar-standup` (first of two rows naming it) | replace | \| `soc-calendar-standup` \| Weekdays \| 06:50 \| | \| `soc-calendar-standup` \| Weekdays \| 07:10 \| | Same |
| `employees/social-media-employee-vn/README.md` | Paragraph "**The next weekday.**" | replace | The standup runs at 06:50 and writes | The standup runs at 07:10 and writes | Same; the publish run, material sweep and draft queue times in the same paragraph follow the lead's values |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### brief.deliver`, paragraph "**Absent every route, the file is the brief**" | insert after | (none) | **In this Vietnamese variant no route delivers the brief into Zalo**, whatever a harness's delivery target could reach. Zalo's terms (section 4.7, read 24/09/2026) bar logging in or using Zalo through third party software it has not approved, and this variant automates no personal chat app. Where the member reads their brief in a Zalo group, the person on duty pastes the text of `brief-latest.md` there by hand, unchanged; that group should hold only the member and the people who run their accounts. | 2185 `[S27]` (usage); D10; Phần A platform terms, Zalo 4.7 |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.7 Scorecard, standards, briefs, recipes, state`, paragraph "A blocker open for more than seven days gets a full line." | insert after | (none) | In this variant the lines under the five headings are written in Vietnamese for the member, and every date the member reads is `dd/mm/yyyy`. The five headings, the `Publishing today:` token, `nothing due`, the `hold this one` label, paths, ids, status words and blocker strings copied from other routines stay exactly as written, because other files read them. No customer's phone number, address, name, photo, identity document, child's photo, or the words of their comment or message ever appears in the brief. | D12, STYLE-VI, `_shared/parsed-strings.md` section 2; A6 244 `[S32]`, 2134 `[S32]` |
| `employees/social-media-employee-vn/examples/brief-latest.md` | Whole file, starting `# 2026-03-05` | replace | The whole shipped file (21 lines, `# 2026-03-05` to the pointer line) | `# 05/03/2026`<br><br>`## Today`<br>`Publishing today: 09:15 short video tới Northwind Roofing page, S-003, queue/2026-03-04-short-video.md#P-01`<br>`Muốn giữ bài nào lại, anh/chị tick ô "hold this one" ở mục đó trong file queue trước 07:25 sáng nay, lúc soc-publish-run chạy.`<br>`- Làm tay: một bình luận ở bài short video hôm thứ Tư hỏi giá. Câu trả lời đã soạn ở queue/2026-03-05-replies.md#R-01, cần anh/chị điền con số trước khi nó được gửi đi đâu.`<br><br>`## Waiting on you`<br>`- queue/2026-03-05-replies.md, 2 mục chưa tick answered.`<br>`- Em tự quyết: clip lỗ thông gió nóc được tính là tư liệu build-log dù công trình xong từ thứ Ba, vì video quay đúng hôm đó. Nếu sai, anh/chị ghi một dòng dưới S-003 trong calendar/CALENDAR.md.`<br>`- plan/CHANGELOG.md: plan/sources.md có thêm trang nhật ký công trình của anh/chị, do soc-material-sweep thêm ngày 03/03/2026.`<br><br>`## Blocked`<br>`- Còn 2 việc bị chặn, chưa việc nào mở quá bảy ngày, xem soc-latest.md`<br><br>`## What changed about me`<br>`- soc-material-sweep: giờ đọc trang nhật ký công trình của anh/chị trước các nguồn tin ngành, vì mọi tư liệu dùng được tuần này đều từ trang đó. Cách hoàn tác nằm trong improvements/CHANGELOG.md.`<br><br>the pointer line, unchanged | Step 7 template; STYLE-VI; the same fictional Northwind snapshot as the rest of `examples/`. The `07:25` in line 2 follows the `soc-publish-run` row as finally applied. Copy check PASS (`standup-example-brief-patch.md`) |
| `employees/social-media-employee-vn/examples/calendar/CALENDAR.md` | Whole file, starting `# Content calendar` | replace lines 1 to 17 (title, three header lines, three date headings); slot lines, the member's indented note, `## Notes` and its text unchanged | `# Content calendar`<br><br>`Tick a box in a queue file to hold a post before it goes out.`<br>`Write anything you like under a slot, indented. Your own text is kept.`<br>`The lines starting with a dash are rewritten each morning.`<br>and the headings `## Wednesday 2026-03-04`, `## Thursday 2026-03-05`, `## Friday 2026-03-06` | `# Lịch nội dung`<br><br>`Muốn giữ một bài lại trước khi đăng, anh/chị tick ô "hold this one" của bài đó trong file queue.`<br>`Anh/chị muốn ghi chú gì cho slot nào thì viết ngay dưới dòng slot đó, thụt đầu dòng. Chữ của anh/chị được giữ nguyên.`<br>`Các dòng bắt đầu bằng gạch đầu dòng được em viết lại mỗi sáng.`<br>and the headings `## Thứ Tư 04/03/2026`, `## Thứ Năm 05/03/2026`, `## Thứ Sáu 06/03/2026`. Then run `copy-check.mjs --dest plain` on the file | Step 5 render shape; D12, STYLE-VI; review NOTE, 24/09/2026. Pending, after review. The lead may also align the example's `09:15` slot times with the stale time repair already made in `CONTRACT.md` |
