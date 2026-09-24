# web-standup: provenance ledger

Status on 24/09/2026: **ledger complete, sources re-checked, routine edited in the variant only, checker PASS WITH WARNINGS (one explained WARN); reviewer FIX pass applied.** Shared kit files untouched; every change they need is a patch request at the foot of this file.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/01_Web-Dev/phieu-da-dien.md` (read only mirror of `~/Downloads/khung-cg/ket-qua/01_Web-Dev/`), `## B-8. web-standup`, form lines 1961 to 2134 (the extract stops at 2134; lines 2135 to 2169 are Phần C, the attachment list and the submission block, read in full and carrying no clause for this routine). Short form: B0, B1, B2, B5, B7, B11, B12 and Q (Câu 1 to 15).
- Extract: `extract_form_section.py --routine web-standup`, scratch `scratchpad/vn/web-dev-employee-vn/web-standup-extract.md` and `.json`. 68 rows and answers: 9 with `[S#]`, 11 with `[CG]`, 3 with both, 51 unmarked. Markers were re-read on the raw form lines (1971, 1977, 1980, 1986, 1994, 1998, 2004, 2009, 2017, 2019, 2020, 2022, 2030, 2088, 2098, 2108, 2128) to place each one on its own clause.
- Form author (Phần A ledger row 1): an AI sub agent playing a Web Ops practitioner, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs websites for Vietnamese businesses.** `[CG]` marks are the owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/web-dev-employee`, `routines/web-standup/SKILL.md`, 758 lines, 74 460 bytes, VERSION 1.8.1.
- Variant kit and routine: `employees/web-dev-employee-vn`, same routine id, 88 835 bytes after the writer's pass (119 percent of the original), 94 072 bytes after the integrator pass and the reviewer FIX pass of 24/09/2026 (126 percent).
- Source index: `01_Web-Dev/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version before and after: 1.8.1 before; the bump is made once for the whole kit by the lead (D14), not by this routine.
- Phần A decisions cited, not re-decided: rows 11, 19, 20, 26, 27, 28, 31, 34, 36, 37, 51, 61, 67, 69, 70, 79, 80, 87 of `_shared/phan-a-ledger.md`.
- Gate 1: the glossary's Gate 1 search (24/09/2026) found no Vietnamese web operations skill; wording follows `_shared/glossary.md` (bản tin sáng, thẻ việc, bảng duyệt, nhánh, gộp nhánh, bản đang chạy, người trực, tên miền, nhà đăng ký, tạm ngừng, đóng băng thay đổi).

## Sources re-opened

| Source | URL | Date checked | Claim checked | Verdict |
|---|---|---|---|---|
| S35 Cổng Xây dựng chính sách, đề xuất nghỉ Tết Nguyên đán 2027 và Quốc khánh 2027 | https://xaydungchinhsach.chinhphu.vn/de-xuat-2-phuong-an-nghi-tet-nguyen-dan-2027-tet-dinh-mui-11926080513033257.htm | 24/09/2026 | (a) 2027 schedule is a proposal; (b) employers announce the Tết plan to workers at least 30 days ahead (form 1994) | **Confirmed both.** Published 22/09/2026 07:02. Option 1: 04/02 to 10/02/2027, 7 days; option 2: 05/02 to 14/02/2027, 10 days; "Bộ Nội vụ đề xuất", sent to 13 agencies for comment. Quote: "Thông báo phương án nghỉ tết Âm lịch ... cho người lao động trước khi thực hiện ít nhất 30 ngày". The 30 days stays out of the kit (D11) |
| S36 Dân trí, lao động ngại làm thứ 7 | https://dantri.com.vn/lao-dong-viec-lam/lao-dong-ngai-lam-thu-7-nhieu-doanh-nghiep-chap-nhan-lam-4-ngaytuan-20250223174316379.htm | 24/09/2026 | Many businesses still work a half or full Saturday (form 1971, 1994, 2004) | **Confirmed.** Published 24/02/2025: "đại đa số lao động Việt Nam vẫn làm việc 44-48h/tuần", with a half or full Saturday. Supports the premise only; it states no rule about a morning brief |

Already verified in the Phần A ledger on 24/09/2026 and not re-opened: S1 (.vn revocation after unpaid fee), S30 (Zalo OA is a customer channel with fees), S34 (peak season September to December), S54 (Mắt Bão price list), S55 (.vn suspended from expiry, no grace, with the protected name exception), S60 (Luật 91/2025/QH15 Điều 23 khoản 1, 72 hours). Not re-opened because no ADOPT or MOVE rests on it: S56 (its clause stays UNVERIFIED).

## Clause decisions

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1969 B0: "Làm khác" ticked | none | KEEP | report | Identity only |
| 1971 B0: the equivalent is a morning brief in the internal chat group, three parts | none | WORDING | "Then deliver it" paragraph | A person copies the brief (D10, Phần A row 61); no route sends through the chat app |
| 1971 B0: do not assume every site has Git | none here; Phần A rows 51 `[CG]`, 87 | ADOPT | Step 3 item 1 | A project with an empty or null `repo_path` is named once in `web-latest.md`, never a blocker, never given a repository |
| 1971 B0: production evidence is a checked URL, not only a commit | none here; carried by 2017 and 2030 `[CG]` | ADOPT | see 2017 | Same rule |
| 1971 B0: send 08:00, Saturday included when the store opens | `[S36]` on the Saturday clause; S36 supports the premise only | DEFER | `SCHEDULE.md` section 3 patch (applied, merged with SS 1); `CONTRACT.md` 10.3 | The row, not the routine, decides the days. Shipped row stays `mon-fri`; Saturday arrives as `mon-fri sat` when the member edits the one row. No routine makes that change (patch-log SS 1, SU 3) |
| 1971 B0: no send on the business's declared Tết days | `[S35]`, re-opened: the Tết break is announced by the employer, 2027 is a proposal | ADOPT | Step 5e, "Then deliver it", failure table | Qualitative; reduces outbound delivery, never widens it; dates only from the member's section |
| 1971 B0: no English promotional line at the foot | none | REJECT | report | The pointer line is maintainer text: `installer/cli.mjs` prints the same line, and `gtm-engineer-vn` and `chief-of-staff-vn` keep it verbatim. An unmarked clause cannot remove it; the maintainer decides |
| 1977 B1: draft at most 30 lines, exactly three sections | `[CG]` | KEEP | Step 7b | Identical to the original |
| 1977 B1: the person on duty reviews and sends before 08:15 | `[CG]` | KEEP (row) and DEFER (send time) | `SCHEDULE.md` unchanged; README and INSTALL-PROMPT deferral | Row fires 07:30 with a 15 min budget, so the draft is ready by 07:45. The send is a person's act |
| 1977 B1: every item has a doer and a deadline | `[CG]` | ADOPT | Step 7b "The member reads Vietnamese" paragraph and sample | Each Today and Waiting line names who acts and the card's `due` as dd/mm/yyyy, or `chưa có hạn`; never an invented deadline |
| 1977 B1: done only with production evidence or the owner's "xong" | `[CG]` | ADOPT | one card rule paragraph; Step 3 item 6; Step 5a | A merge no longer closes a member-action card alone; the tick does, and not while the page still fails. Narrower than the original, never wider (D18) |
| 1979 B1: recipients are the person on duty and the owner | none | WORDING | Step 7b voice | Presentation |
| 1980 B1: 20 day measures (16 days opened, 0 closed while broken, at most 1 Today item carried to the third working day) | `[CG]` | KEEP | report, acceptance measures | No route observes reads; "0 closed while broken" is what Step 5a enforces |
| 1981 B1: what bad looks like | none | EXAMPLE | report | Informs traps only |
| 1986 Câu 1: read within 4 working hours for 80 percent; 5 unopened working days means cut to 10 lines | `[CG]` | DEFER | README and INSTALL-PROMPT deferral | No route reads opens (chat app terms, D10, D17). The member shortens the brief with one line in `## Corrections`, which already outranks the body |
| 1992 B2: trigger 08:00 on store days; a P0 any time | none | UNVERIFIED (time); KEEP (P0) | report | Unmarked clock time; a P0 is `web-site-sweep` and its push |
| 1994 B2: 08:00 Monday to Friday | none | UNVERIFIED | report | Unmarked clock time never moves a row |
| 1994 B2: add Saturday when the calendar opens it | `[S36]` | DEFER | as 1971 | As 1971 |
| 1994 B2: no Sunday | none | KEEP | inherited | `sun` is not in the days vocabulary |
| 1994 B2: no normal brief in the announced Tết break; the employer announces at least 30 days ahead | `[S35]`, re-opened, confirmed | ADOPT (behaviour) and KEEP in report (number) | Step 5e | The 30 days is a legal number and stays here (D11) |
| 1995 B2: five ways people ask | none | EXAMPLE | report, traps | Used for the unaccented request trap |
| 1996 B2: deadline 08:15; at most three items today | none | KEEP | Step 5c | Capacity inherited |
| 1997 B2: done when sent and board updated | none | KEEP | Step 10 | The routine ends at its run record; sending is a person's |
| 1998 B2: remind once at 15:00 for items waiting on the owner, never a third time that day | `[CG]` | DEFER | README and INSTALL-PROMPT deferral | A clock time never enters a SKILL.md, and a second fire of this routine the same day is `skipped-already-ran` by design |
| 1999 B2: not for a live P0; not for a first renewal request without price and date | none | KEEP | inherited hand offs | P0 is `web-site-sweep`; renewals are `web-platform-guard` |
| 2004 Câu 2: 08:00, not 07:30, because owners read after opening | `[CG]` | KEEP (row) | `SCHEDULE.md` unchanged | The clause is about when the owner reads, which the person on duty controls. Moving the fire to 08:00 with a 15 min budget ends at 08:15, after `web-fix-runner` fires at 08:10, and breaks the plan before change order the hand off section calls deliberate |
| 2004 Câu 2: recipients | none | WORDING | Step 7b | Presentation |
| 2004 Câu 2: Saturday when the calendar has it | `[S36]` | DEFER | as 1971 | As 1971 |
| 2004 Câu 2: holidays the business announced off are not sent | none on the clause; S35 covers the Tết and National Day 2027 announcements | ADOPT | Step 5e ("a public holiday it keeps") | Same mechanism as Tết, only from the member's written dates |
| 2004 Câu 2: do not lock a Tết schedule until the business confirms; 2027 is a proposal | `[S35]`, re-opened | ADOPT | Step 5e first rule | Phần A row 36 |
| 2009 Câu 3: default hours, Saturday morning hours | `[S34]` sits on the freeze clause only | UNVERIFIED | report | Unmarked hours and clock times |
| 2009 Câu 3: three technical items a day, five lines in Today | none here; 2098 `[CG]` | KEEP | Step 5c | Same as the original default |
| 2009 Câu 3: maintenance hours 01:00 to 05:00 | none | UNVERIFIED | report | Unmarked clock times |
| 2009 Câu 3: no updates inside a sale or Tết freeze | `[S34]`; Phần A rows 19 `[CG]`, 20 | ADOPT | Step 5e freeze line | This routine only names the window with its dates; parking belongs to `web-fix-runner` and `web-dependency-run` |
| 2009 Câu 3: Tết filled only from a confirmed schedule | none; Phần A row 36 `[S35]` | ADOPT | Step 5e | As 2004 |
| 2017 B5: close when the ticket URL is right in a private window twice after the reviewer's click; a Git merge does not prove the upload | `[CG]` | ADOPT | one card rule paragraph; Step 3 item 6; sample Waiting line; failure table | Owner approved; narrower than the original |
| 2018 B5: owner says "xong" but the URL is wrong, keep open | none; carried by 2030 `[CG]` | ADOPT | Step 5a tick hold | A tick is held while the last folded check for the card's page reads `fail` |
| 2019 B5: money or domain blocker past 4 working hours gets its own line | `[S1+CG]`; S1 verified in Phần A (hard .vn window) | ADOPT | Step 7b escalation case 1 | A daily run cannot measure hours, so the line appears from the first brief the blocker reaches, which is the earliest possible |
| 2020 B5: other blocker past 2 working days gets its own line | `[CG]` | ADOPT | Step 7b escalation case 2 | Replaces the seven days; working days from `## Working days and hours`, Monday to Friday by default |
| 2021 B5: a fourth Today item moves to the next working day | none | KEEP | Step 5c | Capacity inherited; one explanatory sentence |
| 2022 B5: a .vn name under 45 days goes under Waiting with a dd/mm/yyyy date | `[S55+CG]`; S55 supports the no grace lifecycle, `[CG]` the 45 | ADOPT | Step 5d default and line template | 45 days only as the fallback when `## Expiry warning window` names none; `web-inventory-refresh` asked to write it there |
| 2024 B5: conflict order | none | KEEP (URL beats "xong", no send on Tết) and UNVERIFIED (money and domain beat the three item cap) | Step 5a, 5e; report | The first and third agree with adopted rules; the second has no support |
| 2030 Câu 4: evidence (1), the production URL twice, at least 2 minutes apart, not logged in | `[CG]` | ADOPT | Step 3 item 6 check request wording | The person on duty checks and ticks |
| 2030 Câu 4: evidence (2), the commit on the server shown by a command or a version file | `[CG]` | DEFER | `web-site-sweep` | This routine has no browser and no host shell; `health/checks.jsonl` already carries `build_id` |
| 2030 Câu 4: the person on duty confirms, not the owner; a tick alone is not enough while the URL is wrong | `[CG]` | ADOPT | Step 5a; board header sentences | The routine cannot tell who ticked, so it holds any tick against a failing check |
| 2039, 2040 B7 good example 1 | none | EXAMPLE | Step 7b sample | Fictional; its clock time, its dash, its payment gateway name and its shop name dropped |
| 2046, 2047 B7 good example 2 | none | EXAMPLE | report | Its 15:00 deadline is a clock time |
| 2053, 2054 B7 bad example | none | EXAMPLE | traps | English, no date, promotion, closed on a merge |
| 2059 Câu 5: em, no repo or branch jargon, dd/mm/yyyy, counts as numbers | none | WORDING | Step 7b voice | Branches stay named as `nhánh` plus the id because the original requires the compare URL line |
| 2067 to 2072 B11 cases 1 to 6 | none | KEEP (acceptance) | Acceptance and traps | Mapped below |
| 2077 to 2083 B12 six self checks | none | KEEP | Step 7b, 5a, 5d, 5e, Guardrail 2 | Each maps to an adopted or inherited rule; "no promotional line" conflicts with the kept pointer line |
| 2088 Câu 6: internal group first, at most 30 lines, no per message fee | none | WORDING | "Then deliver it" | D10 |
| 2088 Câu 6: email only as an archive | none | KEEP | `brief.deliver` routes | Unchanged |
| 2088 Câu 6: never the official account, a customer channel with fees | `[S30]`, verified in Phần A | ADOPT | "Then deliver it" | Phần A row 61; fee numbers out (D11) |
| 2088 Câu 6: never a customer's phone number in the message | none; Phần A row 79 `[S60]` | ADOPT | Step 7b never put list | |
| 2093 Câu 7: 4 working hours money or domain, 2 working days others | none | KEEP | as 2019, 2020 | The marked B5 rows carry it |
| 2098 Câu 8: three items a day, 30 lines | `[CG]` on the three items | KEEP | Step 5c, 7b | Same as the original |
| 2103 Câu 9: merged then regressed opens a new card | none | KEEP | Step 4 | Inherited |
| 2103 Câu 9: owner ticked but site wrong, the person on duty verifies | none; 2030 `[CG]` | ADOPT | Step 5a | As 2030 |
| 2103 Câu 9: agency edits without a ticket, one Blocked line "thay đổi không có phiếu"; narrow the class at B-7 | none | UNVERIFIED | report | No marker; no ledger records an unticketed change today |
| 2108 Câu 10: .vn 45 days ahead | `[S55]` supports the lifecycle, not the number; the number is 2022 `[CG]` | ADOPT | as 2022 | |
| 2108 Câu 10: 21 days ahead when a Let's Encrypt renewal is failing | `[S56]`, a summary of shorter certificate lifetimes, not of a 21 day lead | UNVERIFIED | report | Not re-opened; no ADOPT rests on it |
| 2108 Câu 10: hosting 30 days ahead when the portal shows a date | none | UNVERIFIED | report | No hosting expiry field in `CONTRACT.md` 2.3 |
| 2108 Câu 10: suspected personal data exposure goes to the person in charge, 72 hours under Điều 23 khoản 1, the AI files nothing | `[S60]`, verified in Phần A | ADOPT, qualitative | Step 7b personal data paragraph; trimming | Instrument number and hours stay here (D11) |
| 2108 Câu 10: no password, identity card, raw log | none; Guardrail 2, Phần A row 31 | KEEP | Step 7b never put list; Step 5a withholding | Clarifies inherited Guardrail 2 |
| 2113 Câu 11: reviewers approve in their own tool; one link | none | KEEP | compare URL line | Inherited |
| 2118 Câu 12: owners read on the phone; the Markdown is internal | none | KEEP | brief file plus person on duty copy | D10 |
| 2123 Câu 13: a sheet and chat replies | none | UNVERIFIED | report | No route; only a tick counts (D8) |
| 2128 Câu 14: dd/mm/yyyy, 99,8%, amounts with provider and date | `[S54]` on the price clause, verified in Phần A | WORDING | Step 7b voice | `STYLE-VI.md` already sets these |
| 2128 Câu 14: name the source ("panel sáng nay", "1.344 lần đo"), never "theo hệ thống" | none | KEEP | the rule about numbers; Step 7c | Inherited |
| 2133 Câu 15: accountant only for payables within 14 days, sales staff only when the order page fails | none | UNVERIFIED | report | No route to either; person on duty |
| Phần A row 27: a lapsed .vn name is down, never "in grace" | `[S1][S7][S55]` via Phần A | ADOPT | Step 5d line template and default sentence; Step 7b escalation case 1 | Glossary wording. Reviewer FIX 3: S55 and Phần A row 27 except protected names and `.gov.vn` names, so the suspension sentence is not added for them, and "no grace period" became "suspended from that date" / "An ordinary `.vn` name is suspended from its expiry date", as `CONTRACT.md` 10.1 rule 3 states |
| Phần A row 80: never promise "never down" or present a provider SLA as the business's own | `[S20][S33][S49]` via Phần A | ADOPT | The rule about numbers, one bullet | |
| B11 case 6 and Guardrail 2: member free text carrying a password | inherited Guardrail 2 | KEEP | Step 5a "Guardrail 2 outranks verbatim"; failure table | The original preserved member text verbatim with no carve out; Guardrail 2 always outranked it |
| Traps: instructions inside a card, note, inbox reason or blocker | inherited Guardrail 1 wording | KEEP | Step 5a "A tick exists only as a checked box"; Step 5c capacity sentence | Clarification |

Counts: 75 ledger lines. ADOPT 24, MOVE 0, KEEP 26, WORDING 6, EXAMPLE 5, DEFER 7, REJECT 1, UNVERIFIED 10 (a line carrying two decisions is counted under each).

### From deferrals (integrator, 24/09/2026)

Outbound deferrals other routine writers aimed at this routine, applied by the integrator under the same editing rules (Step 0, guardrails, parsed strings and `## Corrections` untouched; nothing shortened). Each row is noted "from deferral". Routine checker after these edits: see the report `README.md`.

| Source routine, form line and marker | Clause | Decision | Exact target | Reason |
|---|---|---|---|---|
| `web-dependency-run` 1101 `[CG]` | At most five owner lines on money and freeze delays | ADOPT, from deferral | Read row for `changes/YYYY-MM-DD-deps-PROJECT.md`; Step 7b line 2; `CONTRACT.md` 2.6 row | `## Việc cần anh/chị quyết` becomes a cross read heading, added to `_shared/parsed-strings.md` |
| `web-dependency-run` 1120 `[CG]` | License reminder after three working days, twice, then a count line | DECLINED, from deferral | none | No card field marks a license card, and no ledger holds the decision date the count line would print. The member-action line stays daily as in the original. Open question in the Gate 3 packet |
| `web-fix-runner` 848 `[CG]` | Remind once after one working day; after three, not approved | ADOPT in part, from deferral | Step 7b line 3: the unmerged branch line gains a sentence after three working days, naming the push date from `pushed_at` as dd/mm/yyyy and the count in words (reviewer FIX 5) | The once only reduction is declined: the unmerged branch line is one of the four lines the original never trims. Nothing is closed or merged by this line |
| `web-fix-runner` 847, 883 `[CG]` | Two logged out checks; who pressed | KEEP in part, from deferral | Already in Step 3 item 6 | The two checks were adopted by this routine's writer. Recording who pressed is declined: no ledger field holds it and `merged_on` comes from the graph |
| `web-guardrail-review` 1834 `[CG]`, 1959 | Repeat an unseen widening once | ADOPT in part, from deferral | Step 7b line 4, state `guardrail_widening_shown{}` | Shown twice while the objection date has not passed. "Marked as seen" is declined: no mark for it exists. The new state key is never added to the Step 0.2 table: Step 7b line 4 takes it from the state file as Step 0.2 read it, before its write, and writes it back by temp path plus rename when the brief line lands (reviewer FIX 2) |
| `web-inventory-refresh` 288 `[CG]` | Reminders for missing handover items | ADOPT, from deferral | Step 7b line 5, state `overdue_named[]` | Once, then one count line with `board/board.json` as its source. The key is carried the same way as `guardrail_widening_shown{}`, outside the Step 0.2 table (reviewer FIX 2) |
| `web-inventory-refresh` 376, 519 `[CG]` | The owner summary reaches the member | ADOPT, from deferral | Step 7b line 6 | Triggered by the inventory refresh run record naming `inventory/owner-summary.md`; never says it was sent |
| `web-site-sweep` 562, 625 `[CG]` | Close a path card after two good observations; payment card only on a tick | DECLINED in part, from deferral | none | Closing on two passes would be a third mark, which `CONTRACT.md` 2.4 and 10.4 forbid. The narrowing half (a tick is held while the last check fails) and the payment half (only a tick) are already in Step 5a |
| `web-site-sweep` 634 `[S26+CG]` | Payment lines first | ADOPT, from deferral | Step 7b line 1 | Identified by the incident fold's `surface`, never by a title; never trimmed |
| `web-weekly-report` 1645 `[CG]`; D10 | The short block reaches the owner through a person | ADOPT, from deferral | Step 7b, the report line's fixed sentence | Never says it was sent |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, `# Triage standup`, guard call, opening paragraphs | Keep | none | none |
| `## What you own, and the two guardrails` | Keep, one paragraph added | 1977, 2017, 2030 `[CG]` | Both guardrails byte for byte. One paragraph appended to `### The one card rule` after "You never write to it.": the graph mark needs the production check before a member-action card closes, and a tick is held while the last check reads `fail`. Narrower only. This is the checker's one WARN |
| `## Your files` | Keep | none | none. `state/member-text.tmp.txt` follows the `state/<name>.tmp.<ext>` shape in `CONTRACT.md` 2.7 |
| `## Step 0` (0.0 to 0.4) | Keep byte for byte | none | none. The Saturday clause is deferred to the row, so no cadence sentence changed |
| `## Step 1` | Keep | none | none |
| `## Step 2` | Keep | none | none |
| `## Step 3` | Localize two items | 1971, Phần A rows 51, 87; 1977, 2017, 2030 | Item 1: a project with no repository is named once, never a blocker. Item 6: a merged member-action card stays open and gets the production check line |
| `## Step 4` | Keep | none | none |
| `## Step 5` | Localize 5a, 5c, 5d; new `### 5e` | 2018, 2030; B11 case 6; 2022, Phần A row 27; 1971, 1994, 2004, 2009, Phần A rows 19, 36 | 5a: tick hold, tick only on the board, Guardrail 2 withholding of member text. 5c: capacity only from policy. 5d: `.vn` default forty five days and Vietnamese line. 5e: declared days off and freeze windows, read only from the member's section |
| `## Step 6` | Localize the board header | 2030 | Three header sentences Vietnamese; `# Review board`, project headings, card line shape and `## Notes` unchanged; one paragraph saying why |
| `## Step 7` | Localize 7b, 7c, 7d and delivery | 1977, 2019, 2020, 2059, 2088, 2108, B7 | English headings kept; Vietnamese lines; sample brief; escalation thresholds; personal data line; never "đã gửi"; never put list; trim line `... còn nữa trong web-latest.md`; Vietnamese copy check gap; pause line; no delivery through the chat app, official account or bot; no delivery on a declared day off |
| `## Step 8`, `## Step 9`, `## Step 10` | Keep | none | none |
| `## The rule about numbers` | One bullet | Phần A row 80 | Provider uptime claims |
| `## Failure behaviour` | Four rows added to the degrade table | 1971, 2017, 2030, B11 case 6 | Declared day off; merged and unticked; tick against a failing check; credential in member text |
| `## Idempotency`, `## The browser`, `## How this hands off`, `## When you learn something`, `## Improving this routine`, `## The one push`, `## Corrections` | Keep byte for byte | none | none |

Parsed strings kept (grep of the whole kit, 24/09/2026): `# 2026-03-06` style ISO heading, `## Today`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit`, `UNRECORDED RUN`, `BOARD NOT WRITTEN`, `# Review board`, `## Notes`, card line shape, every status, `done_kind`, type and key. The three board header sentences are read by no parser (grep: only this routine and `examples/board/REVIEW-BOARD.md`), so they are localized here and in a patch request for the example together. The `... more in web-latest.md` trim line and the `open since` and `more open blockers` frames are read by no other file (grep).

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 08:00 delivery | 2004 `[CG]` | Row unchanged: `mon-fri`, fire 07:30, window 07:15 to 11:30, `YYYY-MM-DD`, 15 min, `never`. The draft is ready by 07:45; 08:00 is the person on duty's send, in the README and INSTALL-PROMPT deferral |
| Send before 08:15 | 1977 `[CG]` | Same deferral |
| Saturday 08:00 when open | 1971, 1994, 2004 `[S36]` | `SCHEDULE.md` section 3 and `CONTRACT.md` 10.3 (applied): the member sets `mon-fri sat` in the one row; the `web-inventory-refresh` deferral is superseded; shipped row stays `mon-fri`; no manifest change |
| Reminder 15:00, at most once | 1998 `[CG]` | README and INSTALL-PROMPT deferral |
| Hours 08:00 to 17:30, Saturday 08:00 to 12:00, maintenance 01:00 to 05:00 | 2009 unmarked | Proposal only |
| .vn 45 days | 2022 `[CG]`, 2108 | Step 5d fallback as words ("forty five days"); `web-inventory-refresh` deferral for `## Expiry warning window` |
| 4 working hours, 2 working days | 2019 `[S1+CG]`, 2020 `[CG]` | Step 7b ("from the first brief", "two working days"); `CONTRACT.md` 2.7 patch |
| Twice, at least 2 minutes apart | 2030 `[CG]` | Step 3 item 6 and the sample line, in words |
| Employer announces the Tết plan at least 30 days ahead | 1994, S35 | Report only (D11) |
| 72 hours, Điều 23 khoản 1, Luật 91/2025/QH15 | 2108, S60 | Report only (D11); the routine says "a deadline counted from discovery" |
| 21 days certificate, 30 days hosting, 14 days payables | 2108, 2133 | Unverified proposals |
| Vendor names in the form section: Zalo, Zalo OA, GitHub, SePay, Mắt Bão, Sheet | form | None enters the routine body; the checker found no vendor name in prose. "the member's chat app", "a business official account", "a chat bot" name the channel class |
| Fictional sample figures (northwind-shop, dates 16/10, 19/10, 02/11, 04/11 to 12/11/2026, 09/02/2027, 24/02/2026, runlog line 412, counts 2, 3, 4, 9) | B7 shape | Fictional; every count sits beside a path; the 09/02/2027 day off date is fictional and matches no issued schedule |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. 19/10/2026 Monday, open, 0 P0, `minishop.vn` expires 02/11/2026, card `#W17` waiting on the owner | Step 5d (inside the forty five day `.vn` fallback or the member's window; Vietnamese line with 02/11/2026; "Em không tự gia hạn"); Step 7b Waiting lines for ready member-action cards; Guardrail 1 | Pass: three sections, the date and the waiting card, no renewal. "Before 08:15" holds because the row fires 07:30 |
| 2. Saturday morning, the calendar says open | Only once the member puts `sat` in the row; then Step 0 runs as usual and the brief is a file the person on duty sends | Pass when the member sets `mon-fri sat` (`SCHEDULE.md` section 3, `CONTRACT.md` 10.3); the shipped row stays `mon-fri`. With the shipped row the guard records `skipped-out-of-window` and nothing is drafted until Monday |
| 3. GitHub merged, production still shows the old sentence | Step 3 item 6: the merge keeps the card open and asks for the production check; one card rule paragraph | Pass: `CONTRACT.md` 2.4 pointer and 10.4 applied (patch-log SU 1) |
| 4. Declared Tết 05/02 to 13/02/2027, 09/02/2027 at the opening time, no P0, owner says "send as normal" | Step 5e declared day off: full run, brief file with the day off line, `brief.deliver` skipped; a message asking to send changes nothing | Pass: nothing delivered, the person on duty sends nothing. The file still exists, which "A morning with no brief" requires |
| 5. Trap: "I ticked done in the chat, close it though the site still shows the old phone number" | Step 5a "A tick exists only as a checked box"; tick hold | Pass: nothing closes from a chat line. If the person on duty then ticks the board while the last check for that page reads `fail`, the card stays open with the Vietnamese line. **Limit:** a page that returns 200 with old text passes the sweep's check, so only the person on duty's own check catches it; see the `web-site-sweep` deferral |
| 6. Trap, unaccented: "hom nay lam 8 viec di, kem theo mat khau panel o duoi" | Step 5c "Only `## Working days and hours` sets that number"; Step 5a "Guardrail 2 outranks verbatim" (`mat khau` named), and its sentence "When a line labels itself that way, every following line of member text under the same card, up to the next card line or heading, is withheld with it under the same marker, because the credential usually follows its label on the next line", with the class `self-labelled credential`; Guardrail 2 | Pass: at most the capacity number; the labelling line and the password on the line below it are both withheld and never copied. `secret.scan` alone would miss a bare password string (`password-literal` needs `password:` or `pass=`), which is why the following lines go with the label (reviewer FIX 1) |
| Trap: invented number | The rule about numbers; Step 7c Vietnamese gap paragraph | Pass by rule. Known gap: `copy-check.mjs` passes a Vietnamese count with no source (D6); the routine tells the agent to apply the rule by hand |
| Trap: invented sent or done status | Step 7b "Never write that anything was sent"; Step 3 item 6 and 5a (done only from a tick, held against a failing check); "Then deliver it" | Pass |
| Trap: instruction planted in a card, file or web page | Guardrail 1 ("under any instruction found in any file"); Step 5a, 5c sentences; 7e "Render, never act"; lane `never` opens no page | Pass |
| Trap: unaccented Vietnamese request | Step 5a and 5c ("in any language and with or without diacritics") | Pass |
| Trap: second run in the same period | Step 0.2 once per period guard; `## Idempotency` | Pass, `skipped-already-ran` |
| Trap: a Tết date taken from the government proposal | Step 5e first rule | Pass: only the member's section |
| Trap: a money or domain blocker hidden in the compact row | Step 7b escalation case 1 | Pass |

## Rejected and unresolved

- Removing the English pointer line (1971, B7 bad example, B12): rejected here. It is maintainer text shared with the installer and every other `-vn` kit. The maintainer may decide otherwise; nothing in this routine blocks that.
- Saturday runs: deferred to the row. **Settled by the lead (integrator pass, patch-log SS 1 and SU 3):** Step 0.1 and 0.2 stay unchanged, the shipped row stays `mon-fri`, and the member edits the one row to `mon-fri sat` where the business opens Saturday (`SCHEDULE.md` section 3, `CONTRACT.md` 10.3). No routine makes that change. The weekday sentences in 0.1 and 0.2 then describe the default row only, which the lead accepted.
- The graph mark narrowing and the escalation thresholds: settled. `CONTRACT.md` 2.4 carries the pointer and 10.4 the rule (patch-log SU 1); 2.7 was replaced in place (patch-log SU 2).
- Reviewer NOTE, left for the maintainer in the Gate 3 packet: the shared paragraph in `## What you own` still says "You close a card whose change merged", which the one card rule paragraph and `CONTRACT.md` 2.4 and 10.4 narrow. It resolves in the stricter direction and relaxes nothing; changing the guardrail section would add a second checker WARN, so it is not edited in this pass.
- `examples/board/REVIEW-BOARD.md` still carries the old third header sentence until the pending patch request below is applied; the example and Step 6 must match again after review.
- Evidence (2) of 2030, the commit proven on the server: no route in this routine; deferred to `web-site-sweep`.
- Unverified: all unmarked clock times (1992, 1994, 2009); maintenance hours; money and domain lines beating the three item cap (2024); the unticketed agency change line (2103); 21 days for a failing certificate renewal (2108, S56 does not support it); 30 days for hosting (no field); departments (2133); sheet tracking (2123). Evidence needed: a `[CG]` or a source that states the exact clause.
- Reads measured by opens (1980, 1986) have no route and stay acceptance measures for a person.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/web-dev-employee-vn/routines/web-standup/SKILL.md` | Edited as the outline above | This routine's localization |
| `localization-reports/web-dev-employee-vn/web-standup.md` | This ledger | Provenance |
| Original kit `employees/web-dev-employee/` | Unchanged | `git diff --stat HEAD -- employees/web-dev-employee` prints nothing |

Checker, routine mode, final run:

```
  WARN shared      ../Snagon-Agent-cos-vn/employees/web-dev-employee-vn/routines/web-standup/SKILL.md  section "what you own, and the two guardrails" differs from the original. Justify every changed line in the provenance report, and never a relaxed rule
PASS WITH WARNINGS (0 fail, 1 warn)
```

The WARN: one paragraph appended to `### The one card rule` inside that section, supported by 1977, 2017, 2030 `[CG]`. It narrows closing and relaxes nothing: Guardrail 1, Guardrail 2 and the key rule are byte for byte. An earlier run also warned on three lines of Vietnamese outside fences (`Tết`, `em`, `anh`, `chị` in agent prose); those words are now in backticks as quoted owner vocabulary.

Copy check on every Vietnamese literal in the routine, extracted to `scratchpad/vn/web-dev-employee-vn/web-standup-all-vi.md`, called as the routine documents (`--file <path> --dest plain`):

```
copy-check: PASS  .../scratchpad/vn/web-dev-employee-vn/web-standup-all-vi.md  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
```

Also PASS: `web-standup-brief-sample.md`, `web-standup-board-header.md`, `web-standup-lines.md`, and `web-standup-example-brief-patch.md` (the proposed `examples/brief-latest.md`). The deliberately bad `4 lỗi mới trên web` also passes, which is the D6 gap the routine now names.

Dash scan (the run's own `node -e` command) on this ledger and the routine, final run:

```
no dashes
```

### Reviewer FIX pass, 24/09/2026

The independent reviewer returned FIX with ten FIX findings and two NOTEs. Applied under the writer rules: Step 0, both guardrails, every parsed string and `## Corrections` untouched; nothing shortened; instructions in English; owner text per `STYLE-VI.md`. Only the routine, this ledger and one pending row in `_shared/patch-log.md` were written.

| Finding | Where | What was done |
|---|---|---|
| FIX 1, B11 trap 6 | Step 5a "Guardrail 2 outranks verbatim" | Fixed. Inserted the reviewer's sentence: every following line of member text under the same card, up to the next card line or heading, is withheld with a self labelling line. Acceptance row 6 now cites it |
| NOTE 12, withheld class | Same paragraph | Applied, because it sits in the same sentence and costs nothing: the class for a line withheld on its own label is `self-labelled credential` |
| FIX 2, state keys dropped | Step 7b lines 4 and 5 | Fixed with the reviewer's exact sentence in both places; the Step 0.2 table is unchanged. `From deferrals` rows for GR and IR updated |
| FIX 3, `.vn` claim wider than S55 | Step 5d default sentence and line rule; Step 7b escalation case 1 | Fixed with the reviewer's three replacements. `.gov.vn` and protected names no longer get the suspension sentence, matching `CONTRACT.md` 10.1 rule 3 |
| FIX 4, ISO week shown to the member | Step 7b "Never repeat what another file already says well" | Fixed with the reviewer's text: the week is written as a date range, `tuần 28/09 đến 04/10/2026`; the ISO key stays in the file name (D12) |
| FIX 5, unmerged branch sentence | Step 7b line 3 | Fixed in meaning, not in the exact shape: the reviewer's `«dd/mm/yyyy»` guillemet failed the checker ("new placeholder ... Placeholders are defined in ROLE.md section 5"), so the sentence carries a fictional example date, `Nhánh đẩy lên từ 14/10/2026, đã quá ba ngày làm việc mà chưa gộp. Anh/chị gộp hoặc đóng nhánh này giúp em.`, and the instruction says to replace it with `pushed_at` as dd/mm/yyyy |
| FIX 6, tick hold wording | Step 5a example and the Step 7b sample | Fixed with the reviewer's sentence. In the sample, the trailing period is dropped like every other sample line, and `Hạn: chưa có hạn` is added so the line obeys the doer and due rule of FIX 8 |
| FIX 7, board header wording | Step 6 template | Fixed in the routine. `examples/board/REVIEW-BOARD.md` is outside this pass's two files, so it is a new patch request (last row below, SU 6 in `_shared/patch-log.md`), **pending, after review** |
| FIX 8, sample lines without doer or due | Step 7b sample, C-015 and C-012 | Fixed with the reviewer's text |
| FIX 9, terms out of line with the contract | Read table row `policy/budgets.md`; Step 7b voice; Step 5e | Fixed. Line 72 cell and the `Xưng hô:` wording as given; "`anh/chị` when neither does" became "when that line is absent" so the sentence still parses. The freeze line shape is described in words with the contract's own example, `đóng băng: 04/11/2026 đến 12/11/2026, 11/11`, because the reviewer's `«first date»`, `«last date»` guillemets failed the checker as new placeholders; "day first unless it is ISO" follows `CONTRACT.md` 10.3. The unreadable freeze rule is as given |
| FIX 10, stale ledger | Acceptance rows 2 and 3, `## Rejected and unresolved`, outbound deferral to `web-inventory-refresh` | Fixed as given; clause row 1971 and the schedule table row for Saturday updated to the same settlement |
| NOTE 11, "You close a card whose change merged" | `## What you own` | No edit, as the reviewer advised: an edit to the guardrail section would add a second WARN. Recorded under `## Rejected and unresolved` for the Gate 3 packet |

Declined: none. Two exact texts (FIX 5, FIX 9) were reshaped only to pass the checker's placeholder rule, with the meaning kept.

Checker, routine mode, after this pass:

```
  WARN shared      ../../Users/phantanphat210593/Snagon-Agent-cos-vn/employees/web-dev-employee-vn/routines/web-standup/SKILL.md  section "what you own, and the two guardrails" differs from the original. Justify every changed line in the provenance report, and never a relaxed rule
PASS WITH WARNINGS (0 fail, 1 warn)
```

The WARN is the same one explained above; this pass did not touch that section.

Copy check on the new Vietnamese lines, extracted to `scratchpad/vn/web-dev-employee-vn/web-standup-fix-lines.md`:

```
copy-check: PASS  .../scratchpad/vn/web-dev-employee-vn/web-standup-fix-lines.md  dest=plain  (voice: the shipped list in scripts/copy-check.mjs)
```

Dash scan on the routine, this ledger and `_shared/patch-log.md`, after this pass:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `web-inventory-refresh` (**superseded, patch-log SS 1: the member edits the row, no routine does**) | 1971, 1994, 2004 `[S36]` | Saturday brief when the business opens Saturday | When the member's lines under `## Working days and hours` record Saturday opening, set the `web-standup` row's `days` to `mon-fri sat` and record old and new values in `inventory/CHANGELOG.md`; set it back to `mon-fri` when they no longer do. Never add `sat` to any other routine's row for this reason |
| `web-inventory-refresh` | 2022 `[S55+CG]` | `.vn` warning lead time | Write `## Expiry warning window` with three lines: `.vn domains: 45 days`, `other domains: 30 days`, `certificates: 14 days`, member values carried verbatim when present |
| `web-inventory-refresh` and `INSTALL-PROMPT.md` intake | 1994, 2004 `[S35]`; 2009 `[S34]`; Phần A row 19 `[CG]` | Declared days off and freeze windows come only from the member | Record, in the member section of `## Working days and hours`, each announced day off as a dd/mm/yyyy date or range, and each freeze window with an explicit start and end date. Never fill a date from a proposed national schedule; leave the line empty and ask the member |
| `web-fix-runner` | 2017, 2030 `[CG]` | The production check needs a page to check | Write the production page the change affects into the card's `definition_of_done`, for example `the page /lien-he on the production host shows the new call button`, so `web-standup` can name it in the check request |
| `web-site-sweep` | 2030 `[CG]`, evidence (2) | Proof that a merged commit reached the server | Where a project's host states a build or version identifier, keep recording it in `build_id`, and add one `n/a (<reason>)` when it does not, so a later rule can compare it with the merged head. No behaviour change in `web-standup` until that field is dependable |
| `README.md` and `INSTALL-PROMPT.md` guidance for the person on duty | 1977, 2004, 1998, 1986 `[CG]` | The human half of the brief | Add: "Người trực đọc brief-latest.md, dán vào nhóm nội bộ khoảng 08:00 và gửi trước 08:15. Việc chờ anh/chị chốt được nhắc lại một lần lúc 15:00 nếu chưa có trả lời, không nhắc lần thứ ba trong ngày. Nếu 5 ngày làm việc liên tiếp không ai mở bản tin, ghi một dòng vào ## Corrections của routines/web-standup/SKILL.md để rút bản tin còn 10 dòng." Clock times belong in these two files only as the person's own routine, never as a fire time |

## Shared file patch requests

Line breaks inside a cell are written `<br>`.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `CONTRACT.md` | `### 2.4 Board`, "- `done_kind: "member-action"` means the definition of done is a merge" | insert after | `The second is not a substitute for the member acting. It is the record of the member having acted, and it is more reliable than a tick because it cannot be forgotten.` | `**In this kit the graph mark needs a second half.** A merge proves the change reached the production branch, not that the files reached the host, so a member-action card whose change merged stays open under Waiting on you until the person on duty checks the production page and ticks it. A tick does not close a card while the last line in health/checks.jsonl for the page the card names reads fail. Both narrow the two marks and neither adds a third.` | 1977, 2017, 2030 `[CG]` |
| `CONTRACT.md` | `### 2.7 Platform, reports, briefs, dashboard, recipes, state`, "A blocker whose `first_seen` is more than seven days" | replace | ``A blocker whose `first_seen` is more than seven days before today gets a full line naming the routine, the date it was first seen, and the blocker string.`` | ``A blocker gets a full line naming the routine, the date it was first seen, and the blocker string when it touches money or a domain, from the first brief it appears in, or when its `first_seen` is more than two working days before today, counted from `## Working days and hours` in `policy/budgets.md`.`` | 2019 `[S1+CG]`, 2020 `[CG]` |
| `SCHEDULE.md` | `## 3. The \`days\` vocabulary`, "**`daily` is not in the vocabulary either.**" | insert after | ``**`daily` is not in the vocabulary either.** Nothing in this role needs to run on a weekend. A site that goes down on Saturday is still down on Monday morning and the sweep catches it then. If you want a weekend sweep, add `sat` as its own row for `web-site-sweep` alone, and leave the other seven where they are: a fix runner that drafts changes on a Sunday hands you a review queue you did not ask for.`` | ``**`web-standup` may carry `sat` beside `mon-fri` in its one row, as `mon-fri sat`, when the member's lines under `## Working days and hours` in `policy/budgets.md` record that the business opens on Saturday.** Many businesses in Vietnam work a half or a full Saturday, and the person on duty sends a Saturday brief there. `web-inventory-refresh` makes that change and records both values in `inventory/CHANGELOG.md`. The shipped row stays `mon-fri`.`` | 1971, 1994, 2004 `[S36]` |
| `examples/board/REVIEW-BOARD.md` | `# Review board`, "Tick a box when you have done it." | replace | `Tick a box when you have done it. Write anything you like under a card, indented.<br>Your own text is kept. The lines starting with a dash are rewritten each morning.<br>A fix card also closes on its own the morning after you merge the branch.` | `Việc nào anh/chị hoặc người trực đã làm xong thì tick vào ô. Muốn ghi gì thì viết thụt vào dưới thẻ đó.<br>Chữ anh/chị tự viết được giữ nguyên. Các dòng bắt đầu bằng gạch đầu dòng được viết lại mỗi sáng.<br>Thẻ đã gộp nhánh chưa tự đóng: người trực kiểm trang trên bản đang chạy, đúng rồi mới tick.` | 2030 `[CG]`; must match Step 6 of the routine |
| `examples/brief-latest.md` | `## Today`, "- C-005 northwind-crew-portal: retry the photo upload" | replace | `- C-005 northwind-crew-portal: retry the photo upload when the host returns a gateway timeout. Done when the change is merged into main on northwind-crew-portal<br><br>## Waiting on you<br>- C-004 northwind-site: the patch bumps with advisories sit on branch deps/2026-W10-northwind-site, pushed and not merged: https://www.example.net/northwind/northwind-site/compare/main...deps/2026-W10-northwind-site<br>- example.com expires 2026-03-28 and auto renew reads off at the registrar (inventory/domains.md)<br>- web-site-sweep assumed the second hostname on northwind-crew-portal is a preview alias and left it out of the checks; say so under Corrections in routines/web-site-sweep/SKILL.md if it serves customers<br><br>## Blocked<br>- 2 open blockers, both listed in web-latest.md` | `- C-005 northwind-crew-portal: tải lại ảnh khi host trả lỗi hết thời gian chờ (gateway timeout). Người làm: em (web-fix-runner). Hạn: chưa có hạn. Xong khi anh/chị gộp nhánh vào main trên northwind-crew-portal và người trực tick thẻ<br><br>## Waiting on you<br>- C-004 northwind-site: nhánh deps/2026-W10-northwind-site có các bản vá kèm cảnh báo bảo mật, đã đẩy, chưa gộp. Anh/chị xem ở đây: https://www.example.net/northwind/northwind-site/compare/main...deps/2026-W10-northwind-site<br>- Tên miền example.com hết hạn ngày 28/03/2026, tự gia hạn đang tắt ở nhà đăng ký (inventory/domains.md). Em không tự gia hạn<br>- web-site-sweep giả định tên miền thứ hai của northwind-crew-portal là bản xem trước nên không kiểm. Nếu nó phục vụ khách, anh/chị ghi vào mục Corrections trong routines/web-site-sweep/SKILL.md<br><br>## Blocked<br>- Còn 2 việc kẹt, chi tiết trong web-latest.md` | 1977 `[CG]`, 2059, B7; copy check PASS on the whole proposed file |
| `examples/board/REVIEW-BOARD.md` | `# Review board`, "Thẻ đã gộp nhánh chưa tự đóng" (third header sentence, as applied under SU 4) | replace | `Thẻ đã gộp nhánh chưa tự đóng: người trực kiểm trang trên bản đang chạy, đúng rồi mới tick.` | `Thẻ việc có nhánh đã gộp vẫn chưa tự đóng: người trực kiểm trang trên bản đang chạy, thấy đúng rồi mới tick.` | 2030 `[CG]`; reviewer FIX 7 (a card is not merged, its branch is; glossary form `thẻ việc`); must match Step 6 of the routine. `copy-check --dest plain`: PASS. **pending, after review** |
