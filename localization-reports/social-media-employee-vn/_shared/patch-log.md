# Shared file patch log: social-media-employee-vn

Integrator pass, 24/09/2026. Every `## Shared file patch requests` row from the seven routine ledgers, in the order the lead set: `CONTRACT.md`, then `SCHEDULE.md` with `employee.json` and every stale shipped time, then `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`. New `CONTRACT.md` material sits in a new section 10, "Vietnam operating rules", placed just before Appendix A; every existing section number is unchanged. A backup of the variant before this pass is in the session scratchpad, `vn/social-media-employee-vn/social-media-employee-vn.before-integrator`.

Status words: **applied** (exact text, at the requested anchor), **applied, relocated** (same text or meaning, placed in `CONTRACT.md` section 10 with a one sentence pointer at the requested anchor, because the lead asked for new contract material there), **applied, merged** (combined with another request that carries the same fact, so the fact lives in one place), **applied, changed** (the reason names what differs from the request), **declined**.

Source codes: `intake`, `sweep` (material sweep), `drafts`, `publish`, `engagement`, `review`, `standup`, then the row number in that ledger's table.

## CONTRACT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| review 3, standup 8 | Section 1 table rows for the review and the standup | applied | Rows edited in place. The publish run, material sweep and draft queue rows moved in the same edit (see `SCHEDULE.md` below) |
| review 4, standup 9 | 1.4 block, the review and standup lines | applied | In place, with the publish run, material sweep and draft queue lines and their lane clear times |
| integrator | 1.4, ordering one | applied | One sentence: in this variant the publish run fires after the owner reads the brief, and `SCHEDULE.md` 4.2 carries `veto_lead` |
| review 12 | 2.0a, `scorecard/manual.md` row | applied | Table row edited in place, exact text. A table cell changes an existing contract row rather than adding material |
| intake 2 | 2.3, `plan/audience.md` paragraph: closed days, two dated `## Who they are` lines, certificate numbers, copied reviews | applied, relocated | 10.2, with the `Xưng hô:` line added beside the two dated lines (from the standup's deferral to intake, applied under STYLE-VI). Pointer sentence appended to the 2.3 paragraph |
| sweep 4 | 2.3, `plan/sources.md` paragraph: `own-work` drop, price list and season file; terms check before a source is kept | applied, relocated | 10.2, exact meaning. Pointer sentence appended to the 2.3 paragraph |
| engagement 1 | 2.5, inbound `text`: `[đã che]` exception | applied, relocated | 10.3, exact text. The 2.5 sentence gains "with the one exception in section 10.3, which only removes", so the verbatim rule and the exception are never read apart |
| review 11 | 2.5, a platform that changed what a metric counts starts a new series | applied, relocated | 10.3, exact text apart from "the largest social network" for the vendor name. One pointer line after the `null` paragraph in 2.5 |
| integrator, from the sweep's deferral to the standup | 2.5, `material/material-latest.md` readers | applied | Reader cell now reads "head counts and the `Low own material:` line only", because the standup now copies that line into the brief |
| drafts 1 | 2.6, the four queue header lines | applied | In place, exact text. `_shared/parsed-strings.md` confirms nothing parses them |
| drafts 2 | 2.6, the `- characters:` line | applied | In place, exact text. The key stays English; only the value changes |
| integrator, stale time scan | 2.4, 2.5, 2.6 and section 4 examples carrying `09:15` beside a queue path, which the kit checker reads as the draft queue's old fire | applied | Slot S-042's example time is `11:30` everywhere in the contract; the section 4 run record example starts `10:15:11` and ends `10:41:40`. Nothing but example values changed |
| standup 16 | 2.7, the lines of the brief in Vietnamese, what stays English, no customer data | applied, relocated | 10.4, exact text. Pointer sentence appended to the escalation paragraph in 2.7 |
| integrator | 8.4, the version check read the English kit and the upgrade line would install it | applied | Same repair as `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn`: the check reads `employees/social-media-employee-vn/`, never `social-media-employee`, and the upgrade line is `node installer/cli.mjs upgrade social-media-employee-vn`. The matching URLs in `soc-intake-and-voice` Step B3a.1 item 2 were changed in the same pass |
| integrator, Gate 8 | New 10.1, the rules three or more routines share | applied | Eleven rules, English, no legal number. The report's Gate 8 table names the routines behind each |

## SCHEDULE.md, employee.json, stale times

The standup's patches 1 to 14 apply only together with the publish run move, which both the standup (deferral 1) and the publish run (deferral 1, to `SCHEDULE.md`) asked for, so both are applied. Browser spacing after the move, full budget plus twenty minutes: engagement sweep 05:45 (40) to publish run 08:40, 175 against 60; publish run 08:40 (20) to material sweep 09:20, 40 against 40; material sweep 09:20 (35) to draft queue 10:15, 55 against 55; draft queue to intake 13:00 on a first weekday, 165 against 55; intake 13:00 (45) to the review 15:50 on a first weekday Friday, 170 against 65. No shared fire minute. Ordering one: standup `window_end` 07:40 before publish `window_start` 08:35. Ordering two: draft queue after material sweep.

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| standup 1 | Standup row: fire 07:10, window 07:00 to 07:40 | applied | In place |
| standup deferral 1, publish deferral 1 | Publish run row: fire 08:40, window 08:35 to 11:00 | applied | In place. 2071 `[CG]` KN-06-054 (the owner reads 07:30 to 08:30) and A2 74 `[CG]` KN-06-003 |
| standup deferral 1 | Material sweep row: fire 09:20, window 09:10 to 13:40 | applied, changed | Fire 09:20 and `window_start` 09:10 as asked. `window_end` stays 12:30, the original value, so the intake's window, which opens at 12:45, still opens after the sweep's closes, as in the original. The move also settles the tension the sweep's ledger recorded: the staff drop arrives before 9:00 (672 `[CG]`) and the sweep now fires after it |
| standup deferral 1 | Draft queue row: fire 10:15, window 10:05 to 16:00 | applied, changed | Fire 10:15 and `window_start` 10:05 as asked. `window_end` stays 15:00, the original value, so a catch up never reaches the Friday afternoon that `SCHEDULE.md` 4.1 rule 4 keeps single tenant; 16:00 would pass the review's new 15:35 window start. The drafts are still done hours before the 16:00 holiday cluster deadline in 886 `[CG]` KN-06-028 |
| review 1 | Review row: fire 15:50, window 15:35 to 19:00 | applied | In place. Phần A A5.10 214 `[CG]` KN-06-014 |
| standup 2 | 4.2 "In the shipped table that is 07:20 and 07:22" | applied | Now "07:40 and 08:35" |
| standup 3 | 4.2, `veto_lead: 90 min` paragraph | applied | Exact text after the "publishes nothing that run" paragraph |
| integrator, standup deferral 2 declined | 4.2, what happens to a slot timed before the publish run's fire | applied | One paragraph stating the original behaviour: the publish run reaches it at its fire and hands it over through `channel.publish`, so it goes out late, and the early slot line names it the day before. No routine changed. See the report's Deferred and unresolved |
| standup 4 | 4.2 "not awake by 07:20" | applied | Now 07:40 |
| standup 5, review 2 | 4.3 blocks | applied | Every weekday line with its lane clear time, and the Friday line with "page ready by 16:30" |
| integrator | 4.3 gap sentences, the first weekday gaps, and "the tightest gap" paragraph | applied | Recomputed: 175, 40 and 55 minutes; 130 and 125 minutes; the tightest gaps are now 40 and 55 minutes, each at the rule exactly. Moving the material sweep later now says to move the draft queue with it |
| integrator | 4.5, why the publish run goes third | applied | One sentence: it fires after the hour the owner reads the brief, and 4.2 names early slots |
| integrator | Section 6, the worked example of moving the morning block | applied | Now ninety minutes later, which still clears the first weekday intake at 13:00; the shipped "two hours later" example would put the draft queue inside the intake's spacing |
| standup 6 | Section 9 dated note | applied | Five dated lines, one per moved row |
| standup 7, review 6 | `employee.json` rows | applied | All five moved rows match `SCHEDULE.md`; version 1.9.0 in the same file |
| stale time scan | `CONTRACT.md`, `SCHEDULE.md` prose, `README.md`, `CAPABILITIES.md` | done | No shipped old time remains beside a routine name in any of them. The remaining old times are the five dated lines in `SCHEDULE.md` section 9, which the kit checker excludes by design, and `05:45`, which did not move |

## CAPABILITIES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| sweep 2 | 1.1, the `shell.run` paragraph | applied | Replaced with the requested text, which keeps every point of the original and adds the drop |
| sweep 3 | `shell.run`, the Absent sentence on `own-work` | applied | Replaced with the requested text |
| review 10 | 4b, `analytics.read` row for platforms common in Vietnam | applied | New row after the shipped `analytics.read` row, exact text, `unknown` |
| engagement 2 | 4b, `engagement.read` row for Zalo OA, connected route only | applied | New row after `community.read`, exact text, `unknown`. Read only |
| engagement 3 | 4b, the "Connected route only" paragraph | applied | Exact text after the probe sentence |
| drafts 3 | Section 5 intro, platform rules for Vietnamese destinations | applied, merged | Inserted after the hosted tools paragraph. The Meta promotion statement is exact and now sits in backticks so `soc-draft-queue` can copy it word for word. The Instagram hashtag figure is a pointer to the platform notes table, so the figure lives in one place |
| publish 1 | `channel.schedule`, per destination notes (block P1) | applied, merged | Exact text after the "Every row says `unknown`" paragraph, except the Instagram hashtag clause, which points at the platform notes table for the figure with the same date and confidence. `soc-publish-run` 5b reads a cap from "its route note", and the pointer keeps that route |
| publish 2 | `channel.schedule`, inside a destination's minimum lead | applied | Exact text after the Absent paragraph |
| sweep 1 | `web.fetch`, the platforms whose terms forbid automated access | applied, changed | Inserted after the shipped paragraph instead of replacing it: the request's operation was "replace", which would have deleted the shipped paragraph, and nothing in the kit may be shortened. Its sentence "No routine in this kit fetches, browses, tracks or collects on these" contradicted intake 1, publish 1 and review 10, which read the member's own account screens, and the original kit reads the member's own surfaces; the original behaviour is kept: "No routine fetches, tracks, or collects anything on these beyond the member's own account, as the table below records per platform, and the material sweep never navigates to them at all" |
| intake 1 | `web.fetch`, the platform notes table | applied, merged | Exact table, after the terms paragraph, widened by three columns so each figure the routines need from a platform lives in one row: minimum spacing (drafts deferral to the standup, 956 `[S39+CG]` KN-06-030, 031), starting caption length (intake deferral to drafts, 462 `[CG]` KN-06-023), image (publish deferral to drafts, 1232 `[CG]` KN-06-035; video only from 1232 `[S28]`). The intro names every routine that reads it |
| standup 10, 11, 12; review 7, 8, 9 | 9.1 block, 9.3 cron lines, 9.4 schtasks lines, 9.5 wake paragraph | applied | Every moved row, including the publish run, material sweep and draft queue lines the standup's patches left to the lead. The 9.4 paragraph on a laptop closed at the standup's fire time now reads 07:10 |
| integrator, stale time scan | `copy.check` paragraph, "at 09:15 on a Tuesday" | applied | 10:15, the draft queue's new fire |
| standup 15 | `brief.deliver`, no route into Zalo | applied | Exact text after the Absent paragraph |

## ROLE.md

No ledger filed a `ROLE.md` request. No change. The profile fields the routines now read are named in `CONTRACT.md` 10.2 and asked for by `INSTALL-PROMPT.md`.

## README.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| standup 13, review 5 | Routine table rows | applied | All five moved rows |
| standup 14 | "The next weekday" paragraph | applied | All four morning times, with "after you have read the brief" on the publish run |
| integrator, stale time scan | "What it needs from you", the brief written by 07:20; Dependencies, "at 09:15 on a Tuesday" | applied | 07:40 and 10:15 |
| sweep 5 | The Material bullet | applied, changed | The request dropped "your own shipped work" and "your own saved searches". The first is kept as "your own work, including your shop's daily drop", because the repositories under `own-work` are still read; saved searches are left out because the variant reads none on a terms restricted platform |
| standup deferral 11 | Chat app guidance for the person on duty | applied | New paragraph under "What it needs from you": the person on duty ticks `hold this one` for the member and pastes their words and the time, a heart or silence is not a decision, and the group holds only the member and the people who run their accounts. Guidance, not a routine rule, following D8 and D10 |
| integrator | What the install asks in this variant | applied | One paragraph under "What it needs from you" |
| integrator | Install, the variant is not on npm | applied | Top of `## Install`: the fork's bundled installer for hire and upgrade, never `npx ai-employees upgrade social-media-employee` |
| integrator | "This kit is v1.2.0" | applied | Now v1.9.0, the Vietnam variant. The shipped line was already stale against the original's own `VERSION` |

## INSTALL-PROMPT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, lead step 2 | The intake asks for every profile field a routine now reads | applied | FILL THIS IN lines 4 to 11: form of address, working days and weekend opening, closed days including `Tết`, restricted category with certificate numbers and expiry, influencer bookings, current address, the folders for the daily drop, price list and season file, and accounts not yet authenticated. Phase 4 item 2 says where each goes (`CONTRACT.md` 10.2) and that a blank line takes the Step A8 working answer. Phase 4 item 6 gives `scorecard/manual.md` its Vietnamese example lines. Phase 7 item 5 says the handover is in Vietnamese. **Not asked:** spending ceilings and a maximum discount, because no routine in this kit spends or reads either; a sale calendar is part of the season file in line 10 |

## AGENTS.md and examples/

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator | `AGENTS.md`: this is the Vietnam variant, where its rules live, no personal chat automation, never upgrade from npm | applied | One paragraph under the title |
| standup 17 | `examples/brief-latest.md`, whole file | applied, changed | Exact text, except the stop line's time, which follows the publish run row as applied: 08:40, not the 07:25 of the request (the request said the time follows the final row). `copy-check.mjs --dest plain`: PASS, 0 violations |
| integrator, from drafts 1 and 2 | `examples/queue/2026-03-05-business-network.md`: the four header lines and the `- characters:` value | applied | Vietnamese, the same wording as `CONTRACT.md` 2.6. `copy-check.mjs --dest plain`: PASS |
| integrator | `examples/runlog.jsonl`: the standup, review and material sweep start and end times | applied | 07:10, 15:50, 09:20, the new fires. Each record re-validated through `runlog.mjs --stdin` into a scratch root: three appended |
| integrator | `examples/README.md`: the brief and queue rows | applied | Each row says the member's lines are Vietnamese under English keys and headings. `copy-check.mjs --dest plain`: PASS |

## Contradictions kept at the original behaviour, or reconciled

1. **Reading the member's own account** (sweep 1 against intake 1, publish 1, review 10): the original reads the member's own surfaces, so the terms paragraph says "beyond the member's own account" and names the material sweep alone as the routine that never navigates there.
2. **A slot on a closed day** (intake's deferral to the standup against `soc-draft-queue` Step 2, which drafts a run of closed days on the working day before them under 886 `[CG]` KN-06-028): the standup keeps folding such a slot as the original does. Declined in `soc-calendar-standup.md`, `### Deferrals received`.
3. **Where a platform figure lives** (intake 1, drafts 3, publish 1 all carry the Instagram hashtag cap; the intake's deferral asked for caption lengths in the voice file, the draft queue's deferral asked for them in `CAPABILITIES.md`): one table under `web.fetch` holds each figure; section 5 and the P1 block point to it.
4. **Window ends of the moved rows** (standup deferral 1 against `SCHEDULE.md` 4.1 rule 4 and the intake's window): the original `window_end` values are kept for the material sweep and the draft queue.

Counts: 44 requests (intake 2, sweep 5, drafts 3, publish 2, engagement 3, review 12, standup 17), 44 applied (5 relocated to section 10, 3 merged, 3 changed), 0 declined. The rows marked `integrator` above are additions, stale time repairs, or schedule rows that came from outbound deferrals rather than patch requests.

## Pending, after review (24/09/2026)

Filed by the `soc-publish-run` fixer after the independent review. Neither row is applied; the lead decides.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| publish, review fix 1 | `CONTRACT.md` 10.1 item 4: after "Every heading, key, id, status, path, cell token, and blocker string that another file reads stays in English exactly as written, and a Vietnamese gloss goes after a token, never in place of it.", insert "A blocker that `soc-calendar-standup` copies verbatim into the brief may be written in Vietnamese by its owning routine, provided the string is stable from run to run, because `blocker_ages` keys on it; a fixed blocker a routine quotes in English stays in English." | applied, final verifier 24/09/2026 | `soc-publish-run` Step 8 writes its per slot blockers in Vietnamese and keeps its fixed blockers in English; `soc-calendar-standup` Step 7 already copies a blocker in whatever language its routine wrote it. If declined, `soc-publish-run` Step 8 keeps every blocker in English and puts the Vietnamese only in `reason` |
| publish, review fix 7 | `_shared/glossary.md` section 2: add the row `destination` / `kênh (kênh đăng)` / none, review pass 24/09/2026 / do not confuse with `đích` | applied, final verifier 24/09/2026 | `soc-calendar-standup`, `soc-intake-and-voice` and `soc-publish-run` all write `kênh` for a destination. Wording only |
| review, review note 16 | `_shared/glossary.md` section 1, row `not enough sample` / `chưa đủ mẫu`: in the note, replace "Gloss after `n/a (below the rate floor)`, never instead (STYLE-VI)" with "Gloss after `n/a (below the sample floor)`, never instead (STYLE-VI)" | applied, final verifier 24/09/2026 | `soc-performance-review` rule 2 writes the token `n/a (below the sample floor)`; this kit has no rate floor token, so a writer following the glossary would write a token the routine does not use. Wording only |

## Review fixes, soc-draft-queue, 24/09/2026

Requests from the independent review of `soc-draft-queue`. The routine and its ledger were changed in the same pass; these shared file rows wait for the lead. Exact old and new text is in `soc-draft-queue.md`, `## Shared file patch requests`, last five rows.

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| drafts review 1 | `CONTRACT.md` 2.6 template, fourth header line: `# Sáng mai em đọc các ô đã tick và ghi vào bản tin sáng.` | applied, final verifier 24/09/2026 | Replaces "bản tin lịch", which is in neither the glossary nor STYLE-VI; keeps the unparsed header one text with the routine |
| drafts review 4 | `CONTRACT.md` 2.6 template, `- characters: 248 trên 280 ký tự (2 link, mỗi link tính 23 ký tự, không có hashtag)` | applied, final verifier 24/09/2026 | STYLE-VI Formats, counts carry their unit; matches the routine template |
| drafts review 1 | `examples/queue/2026-03-05-business-network.md` line 4, the same header line | applied, final verifier 24/09/2026 | Same text as `CONTRACT.md` 2.6 |
| drafts review 4 | `examples/queue/2026-03-05-business-network.md` line 14, `- characters: 477 trên 3000 ký tự (1 link, mỗi link tính 23 ký tự, không có hashtag)` | applied, final verifier 24/09/2026 | Same unit rule |
| drafts review 2 | `_shared/glossary.md`, new row `\| the publish run \| lượt đăng \| queue header and notes \|` after "the person on duty who sends" | applied, final verifier 24/09/2026 | "lượt đăng" is used in the queue header and the trend and promotion notes with no glossary row |

## Fixer pass requests, pending, after review

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| sweep 6 (fixer pass, 24/09/2026) | `CAPABILITIES.md`, `### \`web.fetch\``, per platform table, row "TikTok Shop, Shopee, Lazada": the second cell "Not read by this kit" becomes "Not read by this kit. Shopee's terms (3.1) also bar tracking, counting or copying another shop's page by hand, so nobody saves such a file for a routine to read either (D23)" | applied, final verifier 24/09/2026 | D23. The material sweep's `audience-places` row now refuses a file about another shop on a marketplace this row records as not read; the hand tracking bar belongs beside the verdict, not in routine prose |

Filed by the `soc-calendar-standup` fixer after the independent review, 24/09/2026. Not applied; the lead decides.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| standup 18, review NOTE | `examples/calendar/CALENDAR.md`: replace the English title, the three header lines and the three `## Weekday yyyy-mm-dd` headings with the Step 5 render shape (`# Lịch nội dung`, the three Vietnamese header lines, `## Thứ Tư 04/03/2026`, `## Thứ Năm 05/03/2026`, `## Thứ Sáu 06/03/2026`); slot lines, the indented member note, `## Notes` and its text unchanged; then `copy-check.mjs --dest plain` | applied, final verifier 24/09/2026 | The variant routine's Step 5 now renders a Vietnamese header and `dd/mm/yyyy` headings, so the shipped example and the routine disagree. Exact old and new text in `soc-calendar-standup.md`, `## Shared file patch requests`, row 18 |

## Pending, after review

Requests filed by a fixer pass after the independent review. Not applied; the lead applies or declines each one.

| Source | File | Request | Status |
|---|---|---|---|
| intake P3 (fixer pass, reviewer FIX 2, 24/09/2026) | `employees/social-media-employee-vn/CONTRACT.md` 10.2, bullet "`plan/audience.md`, `## Working days and hours`" | Replace "It always carries the national day off, Ngày Văn hóa Việt Nam on 24/11, a paid day off from 01/07/2026, marked as the law's rather than the member's." with "It always carries the national day off line, Ngày Văn hóa Việt Nam on 24/11, a paid day off for workers from 01/07/2026, marked as the law's rather than the member's. The line counts as a closed day only until the member answers the Step A8 working days question; where the member says they open that day, `24/11 hằng năm: mở cửa (chủ xác nhận dd/mm/yyyy)` replaces it and the day is seeded like any other." Source: S52 gives workers the day off and says nothing about closing a business. `CONTRACT.md` 10.1 item 6 needs no change. The lead may also want to check that `soc-calendar-standup` and `soc-draft-queue` read the open line as a working day | applied, final verifier 24/09/2026 |

## Final verifier pass, 24/09/2026

Every row above marked "pending, after review" was read against the routine that asked for it, `VN-DECISIONS.md` and `STYLE-VI.md`, and applied with its exact text. Each row's status now reads `applied, final verifier 24/09/2026`. None was declined.

| Request | File changed | Check behind it |
|---|---|---|
| publish, review fix 1 | `CONTRACT.md` 10.1 item 4, one sentence inserted | `soc-publish-run` Step 8 already keeps its fixed blockers in English and writes its per slot blockers in Vietnamese; `soc-calendar-standup` keys `blocker_ages` on routine id plus string, so a stable Vietnamese string ages correctly. The fallback in the ledger is no longer needed |
| publish, review fix 7 | `_shared/glossary.md` section 2, row `destination` | Wording only |
| review, review note 16 | `_shared/glossary.md` section 1, note on `chưa đủ mẫu` | `soc-performance-review` writes `n/a (below the sample floor)` |
| drafts review 1 and 4 | `CONTRACT.md` 2.6 template, fourth header line and `- characters:` line | Now identical to the `soc-draft-queue` template |
| drafts review 1 and 4 | `examples/queue/2026-03-05-business-network.md` lines 4 and 14 | `copy-check.mjs --dest plain`: PASS |
| drafts review 2 | `_shared/glossary.md` section 3, row `the publish run` / `lượt đăng` | Wording only |
| sweep 6 | `CAPABILITIES.md`, `web.fetch` per platform table, marketplace row | D23 in `VN-DECISIONS.md` |
| standup 18 | `examples/calendar/CALENDAR.md` title, three header lines, three day headings | Text is byte identical to `soc-calendar-standup` Step 5; slot lines, the indented note and `## Notes` unchanged. `copy-check.mjs --dest plain`: PASS. `examples/README.md` row for the file now says the same |
| intake P3 | `CONTRACT.md` 10.2, `## Working days and hours` bullet | Matches `soc-intake-and-voice` Step A6 word for word on the open line. `soc-calendar-standup` Step 3b and `soc-draft-queue` Step 2 skip or cluster only days the section lists as closed, and the open line says `mở cửa`, so no routine change was needed |

Consistency pass (wording only): `soc-performance-review` example page, "trang số có tiền quảng cáo" became "trang số tuần có tiền quảng cáo", the glossary and STYLE-VI term. No other Vietnamese term the member reads differs between the routines and `CONTRACT.md`.
