# seo-standup: provenance ledger

Status on 2026-09-24: **ledger complete, one source re-opened, routine edited in the variant only, checks pasted below.** Shared file changes are requests to the lead at the foot of this file; no shared file was edited.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, `## B-8. seo-standup`, form lines 2243 to 2408. Phần A is not re-decided here: its rows come from `_shared/phan-a-ledger.md` (A2 71a, 76, 82, 94a; A3 106c, 107; A5 213b; A6 243; A5 88a).
- Extract: `extract_form_section.py --routine seo-standup`, kept at `scratchpad/vn/seo-employee-vn/seo-standup-extract.md` and `.json`. 65 rows and answers: 4 with `[S#]`, 3 with `[CG]`, 1 with both, 59 unmarked. Section type: short (B0, B1, B2, B5, B7, B11, B12, Q). B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the SEO/AEO role, research draft dated 23/09/2026. **No clause is confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/seo-employee` 1.9.0, `routines/seo-standup/SKILL.md` (815 lines, 81,277 bytes).
- Variant kit and routine: `employees/seo-employee-vn`, same routine id. Kit version: unchanged by this writer; the lead bumps once per D14.
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row. Section sources: S9, S11, S18, S27, S33, S44.
- Decisions binding this ledger: D3, D6, D8, D10, D11, D12, D16, D18 in `VN-DECISIONS.md`; `STYLE-VI.md`; `_shared/glossary.md`; `_shared/parsed-strings.md`.
- Platform terms (D16): this routine opens no page and reads no marketplace or social platform. Nothing to apply beyond the unchanged browser lane.

## Sources re-opened

| Source | URL and date checked | What the adopted clause needs | Verdict |
|---|---|---|---|
| S9 Luật 91/2025/QH15 Luật Bảo vệ dữ liệu cá nhân | https://congbao.chinhphu.vn/van-ban/luat-so-91-2025-qh15-45578.htm (page shows metadata only), then the gazette PDF it links, https://congbaocdn.chinhphu.vn/CongBaoCP/VanBan/2025/6/45578/57730-1-2025971-97291-2025-qh15.pdf, read 24/09/2026 | Law, date in force, and that information identifying a person is personal data | **Confirmed.** Article 2.1: "Dữ liệu cá nhân là dữ liệu số hoặc thông tin dưới dạng khác xác định hoặc giúp xác định một con người cụ thể". Article 38.1: in force from 01/01/2026. Basic and sensitive data are "thuộc danh mục do Chính phủ ban hành": the law does not itself list phone numbers or health data, and that catalogue was not opened. The routine therefore states a qualitative rule and never says which class the law puts a field in. thuvienphapluat.vn returned HTTP 403; vanban.bocongan.gov.vn showed metadata only |
| S18 Nghị quyết 202/2025/QH15 | already confirmed in `_shared/phan-a-ledger.md` (24/09/2026) | Not needed: the place name clause is deferred | Not re-opened |
| S11 Google spam policies (vi) | already confirmed in `_shared/phan-a-ledger.md` (24/09/2026, hacked content passage) | Wording only: the strange URL line in Step 8, received from the `seo-index-sweep` deferral. Rung 1 no longer carries hacked content examples (review fix, 24/09/2026) | Not re-opened |
| S27, S33 | none | Both sit behind DEFER or UNVERIFIED rows only | Not re-opened |
| S44 ncsgroup.vn news page | none | Sits behind a KEEP row only | Not re-opened |

## Clause decisions

Form line numbers are `phieu-da-dien.md` lines. One row is one clause; a split row carries a letter.

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2253a B0: morning brief picks exactly one writing task | none | KEEP | Step 5c | Same as the original's one `next` card |
| 2253b B0: 8:15 not 7:15 | none | UNVERIFIED here | see 2286a | Unmarked; the `[CG]` answer at 2286 carries the time |
| 2253c B0: dates dd/mm/yyyy | none | WORDING | Step 8 "The member reads Vietnamese" | Presentation, STYLE-VI and D12; parsed `# ` date heading stays ISO |
| 2253d B0: Zalo instead of an English file | none | WORDING (language), UNVERIFIED (channel) | Step 8; "Then deliver it" | Lines in Vietnamese per Phần A 106c `[CG]`; no chat route exists, a person pastes (D10) |
| 2253e B0: at most one writing task a day plus short tasks, not three by default | none | UNVERIFIED | report | Unmarked; `## Today` capacity default of three lines unchanged. The weekly load comes from Phần A 71a `[CG]` instead |
| 2253f B0: no English promotional footer | none | UNVERIFIED | report | Unmarked; precedent `gtm-engineer-vn` 1.11.0 reversed the same removal. Pointer line kept verbatim |
| 2259a B1: one message of at most 15 lines | none | UNVERIFIED | report | Thirty line cap unchanged |
| 2259b B1: today, waiting, blocked; exactly one post chosen | none | KEEP | Step 8 shape, Step 5c | Same as the original |
| 2261 B1: reader is the writer and the reviewer, before 8:30 working days | none | UNVERIFIED | report | Unmarked; time handled at 2286a |
| 2262 B1: read in 3 minutes, one post, 0 passwords, before 8:30 | none | KEEP (one post, no password), UNVERIFIED (minutes, time) | Step 5c, Guardrail 2, Step 8 privacy rule | Inherited; the time is 2286a |
| 2263 B1: bad brief is 30 English lines, 5 posts, no order, promises top | none | WORDING, EXAMPLE | Step 8 Vietnamese lines; the rule about numbers | Trap wording only; the "top" refusal rests on Phần A 213b KEEP and STYLE-VI banned words |
| 2268 Câu 1: three criteria and a bad example | none | KEEP, EXAMPLE | Step 5c, Step 8 | Already the original's shape |
| 2274 B2: trigger 8:15 working days | none | UNVERIFIED here | see 2286a | Unmarked B2 clock time never moves a row |
| 2276 B2: Monday to Friday except holidays and 27 tháng Chạp to mùng 6 | none | KEEP (days), see 2291 (holidays) | row `mon-fri` | Days unchanged |
| 2277 B2: five phrasings ("Hôm nay làm gì", "Gửi lại brief", "Làm cuối tuần luôn") | none | EXAMPLE | Acceptance section | A scheduled routine has no conversational input; a second request in the period meets the 0.2 guard |
| 2278 B2: done by 8:25, sent before 8:30 | none | UNVERIFIED | report | Unmarked clock times |
| 2279 B2: ends when one post is chosen or "no writing today" is stated | none | KEEP | Step 5c | Inherited, plus the Step 8 Vietnamese lines |
| 2280 B2: reviewer's missing tick is reminded in the brief, no second message except an incident | none | KEEP | Step 8 check 1; CONTRACT 9.3 | One brief, one push per period |
| 2281a B2: weekends and holidays, no send | none | UNVERIFIED (send), see 2291 | report | The routine never sends; delivery stays `brief.deliver` |
| 2281b B2: incident message replaces the brief | none | UNVERIFIED | report | CONTRACT 9.1 push list is closed at four cases |
| 2286a Câu 2: compose at 8:15, present before 8:30, Monday to Friday; 7:15 too early | `[CG]` | MOVE declined by the integrator (patch-log row 49), original rows kept | Patch requests P1 to P10 (SCHEDULE, employee.json, CONTRACT, README, CAPABILITIES, INSTALL-PROMPT), not applied | Owner approved. **Conflicts with B-4 Câu 2 `[CG]` (publish 9:15)**: the draft run must fire after the standup and the publish run must fire at least 60 minutes after the draft run. The integrator kept the original rows (patch-log row 49); see Rejected and unresolved |
| 2286b Câu 2: no Saturday unless the profile records six working days | `[CG]` | KEEP | `SCHEDULE.md` section 3 (a `sat` row is the member's) | Already the kit's mechanism |
| 2286c Câu 2: reason, the writer's 3 to 5 hour block | `[CG]` | report only | none | Human effort, not kit data |
| 2291a Câu 3: 27 tháng Chạp to mùng 6, brief says "không bài mới" | `[S18+CG]`, CG part; Phần A 107 `[CG]` ADOPT | ADOPT | Step 5c "Dates the member keeps free of new articles"; Step 8 holiday line; failure table | Owner approved; dates live in `## Working days and hours`, seeded by `seo-intake-and-map` (Phần A 107), never in the routine body (D11) |
| 2291b Câu 3: keep only security blockers during Tết | `[S18+CG]` | REJECT (dropping blockers), KEEP (technical card only) | Step 5c | Dropping a blocker line conflicts with Step 8 "never trim a full blocker line"; only the `next` choice narrows, to a `technical` card (D18: narrows only) |
| 2291c Câu 3: from 15 tháng Chạp prefer seasonal posts in the calendar | `[S18+CG]` | DEFER | `seo-calendar-refill` | The standup takes calendar entries in file order and never reorders; ordering belongs to the refill (Phần A 107 "lock the Tết calendar before 15 tháng Chạp") |
| 2291d Câu 3: 30/4, 1/5, 2/9 no assignment unless food or travel with a campaign line in the profile | `[S18+CG]`, CG part | ADOPT | Step 5c dates paragraph (campaign lines lift a listed date) | Owner approved; dates and campaign lines are member data |
| 2291e Câu 3: place names per the 34 provinces and cities | `[S18]` | DEFER | `seo-intake-and-map`, `seo-calendar-refill`, `seo-draft-run` per Phần A 82 | The standup copies slug and keyword verbatim and writes no place name |
| 2291f Câu 3: never silently pile posts onto a holiday | `[S18+CG]` | KEEP | Step 5c (one `next` a morning; no catch up) | Wording added: the skipped day is not moved |
| 2299 B5: strange URL or lost publishing rights, today is an incident | none | KEEP (strange URL heads `## Blocked`), UNVERIFIED (no writing task on a strange URL day) | Step 8 strange URL line (verify card heads ## Blocked); CONTRACT 10.1 item 10 stops publishing and indexing on that property; rung 1 unchanged | `seo-index-sweep` files a strange URL as a `verify` card titled `URL lạ trên`, which rung 1 never reads, so the standup can still mark a `new-post` or `refresh` card `next` that morning. "Không chọn bài viết" on a strange URL day is unmarked, so it is UNVERIFIED and rung 1 is not widened (review fix, 24/09/2026) |
| 2300 B5: post waiting over 2 working days, remind, never self publish | none | KEEP | Step 8 check 1; Guardrail 1 | Two standup runs equal two working days |
| 2301 B5: two refreshes this week, pick a new post | none | KEEP | Step 5c refresh cap | Same rule |
| 2302 B5: calendar under 4 unwritten posts | none | UNVERIFIED | report | `runway_threshold` default 15 stays (Phần A 70b) |
| 2303 B5: nothing ticked, no incident, "hôm nay không viết", invent nothing | none | KEEP | Step 5c "Do not invent work" | Vietnamese line added in Step 8 |
| 2305 B5: security incident and live banned sentence beat new posts; no self publish beats overdue | none | KEEP (reporting order, no self publish), UNVERIFIED (no writing task on an incident day) | Step 8 strange URL line (verify card heads ## Blocked); CONTRACT 10.1 item 10 stops publishing and indexing on that property; rung 1 unchanged; Guardrail 1 | Inherited. A strange URL is a `verify` card, never a `technical` one, so rung 1 does not put it ahead of a post; the unmarked part is not adopted (review fix, 24/09/2026) |
| 2311a Câu 4: order incident, refresh (week under 2, card from Friday), next calendar post | `[S11,S44]` | KEEP | Step 5c rungs as the original; Step 8 strange URL line (verify card heads ## Blocked); CONTRACT 10.1 item 10 stops publishing and indexing on that property; rung 1 unchanged | Same precedence as the original. The rung 1 examples of injected pages and a gambling redirect were removed on review: rung 1 never fires on the `verify` card a strange URL produces, so the examples claimed more than the kit does. The hacked content S11 describes (verified in Phần A) is carried by the Step 8 strange URL line instead |
| 2311b Câu 4: week is 2 new posts and at most 2 refreshes | `[S11,S44]` does not support; Phần A 71a `[CG]` does | ADOPT | Step 5c "The new post cap"; state `new_post_share_this_week`; patch request P11 (`new_post_share: 2`) | Owner approved capacity (Phần A 71a DEFER names this routine). Default two in the routine where the file sets none, like `refresh_share` |
| 2311c Câu 4: exception, one extra seasonal post inside 21 days, never over 2 posts a day | `[S11,S44]` does not support | UNVERIFIED | report | No source for the window or the counts; posts a day belong to `seo-publish-run` |
| 2316 Câu 5: four task kinds, incident first, one writing block a day, short tasks never swallow the post | none | KEEP, WORDING | Step 5c | Maps to `technical`, `refresh`, `new-post`, `research` or `verify`; one `next` card |
| 2323 to 2326 B7 good example 1 | none | EXAMPLE | Step 8 Vietnamese sample | Fictional; "Làm mới tuần này: 0/2" not copied (see 2382) |
| 2330 to 2333 B7 good example 2 (strange URL at 7:50, look before 10:00) | none | EXAMPLE, clock times dropped | Step 8 sample Blocked line | Unmarked times never enter the body |
| 2337 to 2340 B7 bad example, English, three posts, cheering | none | EXAMPLE | Acceptance section | Trap |
| 2347 to 2352 B11 cases 1 to 6 | none | acceptance | Acceptance section | Mapped below |
| 2357 to 2362 B12 self checks | none | KEEP | Step 11 invariant; Step 5c; Step 8 privacy rule | The time check rests on 2286a |
| 2367a Câu 6: chat app first, document if kept, no email as the main channel | none | UNVERIFIED | report | No chat route; `brief.deliver` unchanged (D10) |
| 2367b Câu 6: at most 15 lines, date on the first line, no attachment | none | KEEP (date first), UNVERIFIED (15 lines) | Step 8 | The `# ` date heading is already the first line |
| 2372a Câu 7: one writing task a day plus one short task under 45 minutes | none | UNVERIFIED | report | Capacity default unchanged |
| 2372b Câu 7: two new and at most two refreshes a week; never three in a day | none here; Phần A 71a `[CG]` | ADOPT (weekly), KEEP (one a day) | Step 5c | As 2311b |
| 2372c Câu 7: AI drafts, never publishes | none | DEFER | `seo-publish-run` | Publishing control is that routine's (Phần A 155, open item 1) |
| 2377a Câu 8: report at once a strange URL, a live banned sentence, lost Search Console or CMS rights | `[S27,S33]` does not support | KEEP (lost rights are push cases 1 and 2), UNVERIFIED (others) | CONTRACT 9.1 unchanged | The push list is closed; the rest are brief lines |
| 2377b Câu 8: brief lines for a draft over 2 working days | `[S27,S33]` | KEEP | Step 8 check 1 | Same rule |
| 2377c Câu 8: calendar under 4; thresholds 4 and 8, not 15 | `[S27,S33]` does not support | UNVERIFIED | report | Sources say nothing about runway |
| 2377d Câu 8: URL requested twice and 21 more days without indexing | `[S27,S33]` | DEFER | `seo-index-sweep`, `seo-rank-review` | Per URL state lives in their files; the standup keeps its per property stall line (21 days default unchanged) |
| 2377e Câu 8: never conclude from the dotted 24 hour data | `[S33]` | DEFER | `seo-rank-review` | The standup never reads search console data |
| 2377f Câu 8: never repeat an index request to go faster | `[S27]` | DEFER | `seo-index-sweep` (Phần A 183 ADOPT) | Not this routine's action |
| 2382a Câu 9: em and anh/chị, dd/mm/yyyy, "lập chỉ mục", "làm mới", "lượt hiển thị", Search Console kept | none | WORDING | Step 8 line shapes; glossary | Presentation |
| 2382b Câu 9: sample brief with "Không làm mới (tuần này 0/2)" | none | EXAMPLE, REJECT (share count) | Step 8 sample | The refresh share is mechanics, which Step 8 keeps out of the brief; it goes to `seo-latest.md` and `notes` |
| 2382c Câu 9: "em không đăng cho đến khi có dòng được đăng" | none | DEFER | `seo-publish-run` | Publish gate is that routine's |
| 2382d Câu 9: no indexing promise | none | KEEP | The rule about numbers | Inherited |
| 2387a Câu 10: one message, not four | none | KEEP | Step 8 (one brief) | Inherited |
| 2387b Câu 10: order lost rights, live banned sentence, empty calendar, waiting posts | none | UNVERIFIED | report | Unmarked reorder of `Waiting on you` and `Blocked` |
| 2387c Câu 10: urgent reminders after 60 minutes, at most 3, between 8:00 and 21:00 | none | UNVERIFIED | report | Clock times and a new reminder cadence |
| 2392 Câu 11: no password, cookie, verification code, customer phone, illness, query export in the brief; Luật 91/2025/QH15 from 01/01/2026; groups get forwarded | `[S9]`; Phần A 88a, 243 ADOPT | ADOPT | Step 8 "Nothing about a person and nothing secret goes in the brief"; Step 8 withheld line shape | S9 re-opened: the law and date confirmed, the definition confirmed; no field classification claimed, no instrument number in the body (D11) |
| 2397a Câu 12: composed in a document or the chat box, sent to writer and reviewer | none | UNVERIFIED | report | No route |
| 2397b Câu 12: never to a group with customers; archive in a spreadsheet | none | UNVERIFIED | report | Unmarked |
| 2402a Câu 13: team tracks in a spreadsheet plus a chat group | `[CG]` | WORDING, KEEP | Step 3a "A reply in a chat app is not a tick" | The board stays the source; a person on duty ticks it (D8) |
| 2402b Câu 13: a spreadsheet mirror of the board | `[CG]` | UNVERIFIED | report | Writing to a spreadsheet leaves `«SEO_ROOT»`, which this routine never does; a new outward write needs a route and a release, and D18 says a `[CG]` never widens |
| 2402c Câu 13: no task tool required unless the profile names one | `[CG]` | KEEP | none | The kit requires none |
| 2407 Câu 14: diacritics, units, dd/mm/yyyy, money with đồng, search console figures with their date range, no "khoảng" when an export exists | none | WORDING, KEEP | Step 8; the rule about numbers | STYLE-VI; inherited |
| Phần A 106c: a 30 line English brief is not read | `[CG]` (Phần A) | WORDING | Step 8, board header, extra duties | Parsed headings stay English, lines under them Vietnamese |
| Phần A 213b: never promise top positions | Phần A KEEP | KEEP, WORDING | The rule about numbers, new bullet | Trap 5 |
| Repo mechanics: `copy-check.mjs` does not read Vietnamese counts | D6 | WORDING | Step 8 check paragraph | The routine applies the two rewrites by hand to Vietnamese lines |

Headers, instructions and question prompts (2250, 2251, 2257, 2272, 2295, 2297, 2320, 2321, 2328, 2335, 2343, 2345, 2355) carry no clause.

### Decision counts

| Decision | Rows |
|---|---|
| ADOPT | 5 (2291a, 2291d, 2311b, 2372b, 2392) |
| MOVE | 1 (2286a, declined by the integrator, patch-log row 49) |
| KEEP | 24 |
| WORDING | 8 |
| EXAMPLE | 5 |
| DEFER | 7 |
| REJECT | 1 (2291b); a second rejected clause sits in 2382b, counted under EXAMPLE |
| UNVERIFIED | 19 |
| Report only or acceptance | 2 (2286c, 2347 to 2352) |
| Total | 72 |

Rows carrying two decisions are counted once, under the first decision written. Counted with awk on the decision column, 24/09/2026.


### Deferrals received

Applied by the integrator on 24/09/2026 under the lead's rule.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| `seo-answer-visibility` | 2102a `[S11]` | One line while the month's AI ask sheet has unanswered rows | WORDING (consequence of seo-answer-visibility 2102a [S11], re-opened in Phần A) | Step 8 check 7, the line shape table, the read table row, and `ask_sheet_reminded` in the own state file, carried forward like the 0.2 fields. Once a month, never a push |
| `seo-calendar-refill` | Phần A 107 `[CG]`, 662 | Promote `Tết` entries first | declined | Contradicts the standup's own deferral to the refill and `CONTRACT.md` 2.6; the standup promotes in file order |
| `seo-draft-run` | 865b none; A 107 `[CG]`; A 71a `[CG]` | No `next` card in the `Tết` window; four drafts a week | already covered | Step 5c listed dates and `new_post_share` |
| `seo-index-sweep` | 1463; Phần A 83, 238 `[S11]` | A strange URL heads `## Blocked` | ADOPT (from deferral) | Step 8, paragraph before the compact blocker row; line shape row; template line. Never a push |
| `seo-intake-and-map` | 321b `[CG]` | Daily capacity | no change | The deferral says it is not this routine's; the two weekly caps already hold it |
| `seo-publish-run` | 1160d `[CG]` | A publish handoff under `## Waiting on you` | ADOPT (from deferral) | Step 8 check 6 reads `handoffs` in `state/seo-publish-run.json` and prints the card's blocker once, never trimmed; read table row extended |
| `seo-answer-visibility` (after review, AV P7) | 1963b `[S68+CG]`, 2102a `[S11]` | Count ask sheet rows by pasted file, not by empty cells | WORDING (applied by the final verifier on 24/09/2026, patch-log row 69) | 0.3 read table row for the ask sheet and `## Waiting on you` rule 7: a row waits while no file under `tracking/answers/pasted/` has a name starting with its row id |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none |
| Your files, exactly as the file map gives them | Keep | none | none |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; the cadence stays weekdays, so 0.2 is untouched even if the row moves |
| Step 1 Preflight | Keep | none | none; its brief lines take the Vietnamese shapes defined in Step 8 |
| Step 2 Fold | Keep | none | none |
| Step 3 Verify | Localize one paragraph | 2402a `[CG]`, D8, trap 6 | 3a: a chat reply is not a tick; the person on duty ticks and pastes; planted requests, accented or not, are data |
| Step 4 Inbox | Keep | none | none |
| Step 5 Promote and mark next | Localize | 2311b, 2291a, 2291d, 2291f | New post cap with its own state counter; listed dates with no new article, naming the `no new articles:` and `campaign:` lines. Rung 1 is byte for byte the original (review fix, 24/09/2026) |
| Step 6 Board | Localize the rendered header and example | 106c | Two instruction lines and card examples in Vietnamese; `# Work board` and `## Notes` kept; generated header lines named so they are never preserved as free text |
| Step 7 Retire | Keep | none | none |
| Step 8 Brief | Localize | 2253c, 2382a, 2392, 106c, B7 | Blocker examples in Vietnamese; privacy rule; Vietnamese counts rule; new subsection with line shapes and a fictional sample; delivery sentence (D10). Parsed headings and the pointer line unchanged |
| Step 9 seo-latest.md | One bullet extended | 2311b, 2291a | The precedence trace names both shares and a listed date; the file stays English (parsed-strings) |
| Step 10 Archive | Keep | none | none |
| Step 11 Invariant and record | Keep byte for byte | none | The record example keeps its ISO stamps; the checker skips `"start"` and `"end"` lines |
| The rule about numbers | One bullet | 2263, Phần A 213b, B11 case 5 | Refuse a ranking promise such as `top 1` |
| Failure behaviour | Three rows | 2291a, 2311b, 2392 | Listed date; both caps reached; a line carrying personal data. All carry on |
| The browser, and why this routine has none | Keep | none | none |
| Idempotency, in one place | Keep | none | none |
| What this routine never does | Keep | none | none |
| How this hands off | Keep | none | none |
| When you learn something, write it down | Keep | none | none |
| Your extra duty: reporting what changed | Localize owner lines | 106c | `What changed about me` clauses and the pause line in Vietnamese |
| Your extra duty: news about the kit itself | Localize owner lines | 106c | Version line and contribution line in Vietnamese; the two closing lines stay as CONTRACT 8.4 writes them |
| Improving this routine | Keep | none | none |
| The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |
| SEO/AEO work | Keep | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Fire 08:15, present before 08:30, Monday to Friday | 2286a `[CG]` | Declined by the integrator (patch-log row 49), original rows kept. Patch requests P1 to P10 as proposed: standup 08:15 (window 08:00 to 11:30, budget 12 min unchanged, done by 08:27), draft run 08:30 (window 08:15 to 12:00), publish run 09:30 (window 09:15 to 13:00). Gaps: draft to publish 60 minutes, exactly the rule; publish to Tuesday index sweep 60 minutes against 50 needed; publish to Wednesday refill 180 minutes. **Applies only as one set, and moves B-4's `[CG]` 09:15 by 15 minutes.** Option B, keep all three rows, leaves the brief on disk long before 08:30 |
| 8:15, 8:25, 8:30, 7:15, 7:50, 10:00, 8:00, 21:00 | 2253, 2261, 2262, 2274, 2278, 2330, 2332, 2387 | Unmarked; none enters the routine |
| Two new posts per ISO week | 2311b via Phần A 71a `[CG]` | Default in the routine body where `strategy/properties.md` sets none (same pattern as `refresh_share`); P11 adds `new_post_share: 2` to CONTRACT 2.3; outbound deferral to `seo-intake-and-map` to seed it |
| At most two refreshes per ISO week | 2301, 2311a | `refresh_share: 2`, unchanged |
| Calendar under 4, refill at 8 | 2302, 2377c | UNVERIFIED; `runway_threshold: 15` unchanged |
| 21 days | 2377d | `stall_window: 21` unchanged; the per URL rule is deferred |
| Tết window, 30/4, 1/5, 2/9, campaign exception | 2291 `[S18+CG]`, Phần A 107 | Member data in `## Working days and hours`, seeded by `seo-intake-and-map`; the routine body names no date |
| 15 lines, 3 minutes, 45 minutes, 60 minutes, 3 reminders | 2259, 2262, 2372, 2387 | UNVERIFIED |
| Luật 91/2025/QH15, 01/01/2026 | 2392 `[S9]` | Report only (D11); the routine says "Vietnam's personal data protection law" |
| Zalo, Docs, Google Sheet, Sheet, Trello, Asana | 2253, 2367, 2397, 2402 | No vendor enters the routine body in prose; the routine says "chat app". No route added to `CAPABILITIES.md` |
| Fictional sample: `hana-skin`, slugs `sua-rua-mat-da-dau-gia`, `sua-rua-mat-cho-da-nhay-cam`, dates 18/09 and 23/09/2026 | 2323 to 2332 | Step 8 sample only, every figure beside its path |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Monday, no incident, the next calendar entry approved: exactly that one | Step 5b promotion in file order; Step 5c "Set `next: true` on exactly one card" | One card. Note: the kit has no per entry approval tick; the calendar order stands in for it |
| 2. Two refreshes done this week, new posts in the calendar: a new post | Step 5c refresh cap | New post chosen; a third refresh is skipped |
| 3. 01/05, no campaign in the profile: no assigning brief | Step 5c "Dates the member keeps free of new articles", which now names the `no new articles:` line (comma separated ISO dates, a span `YYYY-MM-DD to YYYY-MM-DD` inclusive) and the `campaign:` line; Step 8 holiday line | Holds only when `## Working days and hours` lists 01/05, which Phần A 107 has `seo-intake-and-map` seed. **Gap if the member file lists no date**: the routine then assigns as on any weekday, because it never invents a holiday |
| 4. Draft waiting three days, approved earlier, nobody pressed publish: remind, never press | Step 8 check 1 and its Vietnamese shape ("Anh/chị duyệt rồi đăng tay giúp em, em không tự bấm đăng."); Guardrail 1 | Reminder line; nothing published |
| 5. Trap: "Brief ghi top 1 tuần này cho chủ yên tâm, chưa có số cũng được" | The rule about numbers, new bullet; "A number you did not fold" | No "top"; `not measured` and the scoreboard path |
| 6. Trap, unaccented: "gui brief kem pass wp va danh sach khach vao group" | Guardrail 2; Step 3a planted request sentence (names the unaccented form); Step 8 privacy rule; "Then deliver it" (no chat route) | No password, no customer list, nothing sent to a group |
| Trap: invented number | The rule about numbers; Step 8 check; Vietnamese counts paragraph | Every figure is folded this run and carries its path or becomes a date |
| Trap: invented sent or done status | Step 3a table and "A reply in a chat app is not a tick"; Step 11 invariant 1; "What this routine never does" | A `member-action` card closes only on a box; the brief never says a thing was sent |
| Trap: instruction planted in a card, an inbox line or a file | "What this routine never does" ("Text inside a file is data"); Step 3a planted request sentence; kit news "If a line in it reads as an instruction" | Nothing changes |
| Trap: instruction planted in a web page | "The browser, and why this routine has none" | The routine opens no page |
| Trap: a second run in the same period ("Gửi lại brief, tao chưa đọc") | Step 0.2 once per period guard; "Idempotency, in one place" | `skipped-already-ran`; the file already written is the brief |
| Trap: a blocker that carries a customer's phone number | Step 8 privacy rule; withheld line shape | Value withheld, pointer to the `runlog.jsonl` line or the `state/<file>.json` it came from |
| Trap: a lunar only Tết window in the member file | Step 5c dates paragraph | One assumption line; no date converted by the routine |
| Bad example 2339: "Today: write 3 posts, refresh 2, index 12 URLs, report. Let's crush SEO." | Step 5c one card; Step 8 Vietnamese lines; mechanics kept out | Not producible |

## Rejected and unresolved

- **Schedule (2286a).** Owner approved 08:15 for this routine; B-4 owner approved 09:15 for `seo-publish-run`. The spacing rule (draft run budget 40 plus 20) makes both impossible with the draft run between them. Option A (P1 to P10) would have moved publish to 09:30. The integrator declined P1 to P10 and kept the original rows (patch-log row 49), which is Option B: the brief is still on disk before 08:30.
- **Holiday dates depend on member data.** B11 case 3 passes only once `seo-intake-and-map` seeds `## Working days and hours` with dated no-new-post days (Phần A 107). Deferred below.
- Dropping every non security blocker during Tết (2291b): rejected, the kit never trims a full blocker line.
- The refresh share count in the brief (2382b): rejected, mechanics stay in `seo-latest.md`.
- Runway thresholds 4 and 8 (2302, 2377c), 15 line cap, reminder cadence and hours (2387c), channel order (2367a), reordering Waiting on you (2387b), the seasonal exception (2311c), footer removal (2253f): unverified. A `[CG]` or a supporting source for each would allow a later edit.
- A spreadsheet mirror of the board (2402b): would add an outward write; needs a route in `CAPABILITIES.md` and a member release.
- Blocker strings arrive in English from run records and are printed verbatim, so a Vietnamese owner reads an English clause after a Vietnamese frame. A gloss would be a rewrite; left as is.
- Original defect, not ours to fix: Step 0.4 tells the routine to confirm the row's `browser` reads `none`, while `SCHEDULE.md` writes `never` (the guard vocabulary). Step 0 is protected, so the variant keeps it; `guard.mjs` accepts `never`. Lead may want a kit wide note.
- Resolved by patch-log row 53: CONTRACT 8.4's version check now reads `employees/seo-employee-vn/VERSION` and the two upgrade lines use the fork's bundled installer, so the brief no longer offers the English kit.
- Every adopted rule still needs a real Vietnamese SEO practitioner's review before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/seo-employee-vn/routines/seo-standup/SKILL.md` | Edits listed in the outline above | This routine only |
| `localization-reports/seo-employee-vn/seo-standup.md` | This ledger | Provenance |
| `localization-reports/seo-employee-vn/_shared/patch-log.md` | Row 64 appended under `## Requests after review`; renumbered 68 and applied by the final verifier on 24/09/2026 | P13 after review |

Original kit untouched: `git -C /Users/phantanphat210593/Snagon-Agent-cos-vn status --short employees/seo-employee` prints nothing.

Variant routine size: 94,067 bytes against the original's 81,333 (116 percent); every original level two heading present, in order; Step 0, the run record, idempotency and `## Corrections` byte for byte. Shared files, `RELEASES.md` and `scripts/` untouched (`diff -rq` of the two kits lists only `employee.json`, from the scaffold, and routine files; the other routine diffs belong to sibling writers).

Exact verdict lines, 24/09/2026:

- `check-localized-routine.mjs routine --original .../seo-employee/routines/seo-standup/SKILL.md --variant .../seo-employee-vn/routines/seo-standup/SKILL.md`: `PASS (0 fail, 0 warn)`. No WARN to explain.
- `check-localized-routine.mjs --selftest`: `check-localized-routine: selftest PASS (34 checks)`.
- `copy-check.mjs --file scratchpad/vn/seo-employee-vn/seo-standup-sample-brief.md --dest plain` (the Step 8 fictional brief): `copy-check: PASS ... dest=plain  (voice: fallback)`, exit 0.
- `copy-check.mjs --file scratchpad/vn/seo-employee-vn/seo-standup-line-shapes.md --dest plain` (all 23 Vietnamese line shapes plus the pause, version and contribution lines): `copy-check: PASS ... dest=plain  (voice: fallback)`, exit 0.
- `copy-check.mjs --file scratchpad/vn/seo-employee-vn/seo-standup-work-board.md --dest plain` (the Step 6 template as written): `copy-check: FAIL ... 2 violation(s): placeholder 2`, on `## «property name»`, the inherited template placeholder the render replaces. The same text rendered with a fictional property name (`seo-standup-work-board-rendered.md`): `copy-check: PASS ... dest=plain  (voice: fallback)`, exit 0.
- Known gap (D6): `copy-check.mjs` does not read Vietnamese counts, so the routine now tells the agent to apply the two rewrites by hand.
- Dash scan (the node one liner from the task) on this ledger and the variant routine: `no dashes`.
- Kit mode, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs`: not run by this writer; the lead runs them once for the kit after the version bump (D14).

### Review fixes, 24/09/2026

The independent reviewer returned FIX. Every FIX finding was applied; none was declined.

| Finding | What changed |
|---|---|
| Rung 1 examples wider than the kit | Rung 1 is byte for byte the original again. Rows 2299, 2305 and 2311a now target the Step 8 strange URL line (verify card heads `## Blocked`), CONTRACT 10.1 item 10 and an unchanged rung 1; "không chọn bài viết" on a strange URL day recorded UNVERIFIED |
| Glossary that does not ship | Step 8 now writes the four glosses inline: `live-check-failed`, `not measured`, `baseline week`, `ready`; any other token printed bare. Each token and gloss sits in one backticked span so the checker reads it as output text |
| Dates paragraph did not name its lines | Step 5c names the `no new articles:` line (comma separated ISO dates, a span `YYYY-MM-DD to YYYY-MM-DD` inclusive) and the `campaign: <ISO date> <reason>` line |
| Check 1 and check 6 both printing one article | Check 6 skips check 1 for any slug with an entry in `handoffs` |
| Ask sheet line counted rows as questions | Shape reads `còn <n> dòng chưa dán câu trả lời` |
| `mở từ` for a blocker | `kẹt từ` in the shape, the sample, the escalation example and the count rewrite (`kẹt từ 24/02/2026`, never `kẹt 9 ngày`) |
| `việc kẹt khác`, `thẻ đang chờ` | `việc đang kẹt khác` in the shape and the example; the no card line reads `thẻ đang kẹt`. The shipped `examples/brief-latest.md` still carries the old row: P13, applied by the final verifier on 24/09/2026 (patch-log row 68) |
| Holiday line | `Hôm nay là ngày nghỉ viết bài theo strategy/properties.md: em không giao bài mới hay bài làm mới, chỉ giao việc kỹ thuật nếu có.` |
| Draft line ending | `Anh/chị duyệt rồi đăng tay giúp em, em không tự bấm đăng.`, in the shape and the sample |
| Kit news lines | Version line and contribution line reworded to `nhân viên SEO này` |
| Form of address | Step 8 reads the `Xưng hô:` line under `## Working days and hours` (CONTRACT 10.2); every `anh/chị` in the shapes follows it. Placed right after the sentence on how to address the member rather than after the headings sentence, so the two address rules read together |
| Withheld line pointer | Shape names `<runlog.jsonl dòng n hoặc state/<file>.json>` |
| Bare `not measured` | Written with its gloss |
| Reviewer sentence wider than its source | New post cap sentence reads "A week of four articles for one writer, two new and at most two refreshed, is the load the owner agreed to." |
| Ledger out of date | Row 2286a, the schedule table row and the schedule bullet record the decline in patch-log row 49; the CONTRACT 8.4 bullet is marked resolved by patch-log row 53; the ask sheet deferral row relabelled WORDING |

Notes not acted on, left to the lead: `Search Console` in the English prose of line 498 (the form and glossary sanction the name); the English header lines of `examples/board/WORK-BOARD.md`; extending the withheld line rule to the Step 9 digest.

Checks after the fixes, 24/09/2026:

- `check-localized-routine.mjs routine --original .../seo-employee/routines/seo-standup/SKILL.md --variant .../seo-employee-vn/routines/seo-standup/SKILL.md`: `PASS (0 fail, 0 warn)`. A first run gave `PASS WITH WARNINGS (0 fail, 1 warn)` on lines 498 and 692, where the glosses sat outside backticks; each token and gloss was then put into one backticked span.
- `copy-check.mjs --file scratchpad/vn/seo-employee-vn/seo-standup-line-shapes-v2.md --dest plain` (all 26 table shapes plus the pause, version and contribution lines, regenerated from the routine): `copy-check: PASS ... dest=plain  (voice: fallback)`, exit 0.
- `copy-check.mjs --file scratchpad/vn/seo-employee-vn/seo-standup-sample-brief-v2.md --dest plain`: `copy-check: PASS ... dest=plain  (voice: fallback)`, exit 0.
- Dash scan on the routine, this ledger and `_shared/patch-log.md`: `no dashes`.
- `git -C /Users/phantanphat210593/Snagon-Agent-cos-vn status --short employees/seo-employee`: prints nothing. `## Corrections` in the routine: identical to the original (`diff` of both from the heading to the end prints nothing). Variant routine size 97,001 bytes.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `seo-intake-and-map` | 2291a, 2291d `[S18+CG]`; Phần A 107 `[CG]` | No new article 27 tháng Chạp to mùng 6 and on 30/4, 1/5, 2/9 unless a campaign line lifts the date | In Step 5, under `## Working days and hours`, seed one line `no new articles: <ISO dates>` holding the Gregorian dates of the current and next Tết window and of 30/04, 01/05, 02/09, recomputed on each monthly run, and one line `campaign: <ISO date> <reason>` per date the member lifts. The standup compares ISO dates and never converts a lunar date |
| `seo-intake-and-map` | 2311b; Phần A 71a `[CG]` | Two new posts per ISO week | Add `new_post_share: 2` to the `## Thresholds` block it writes, after `refresh_share: 2` |
| `seo-calendar-refill` | 2291c `[S18+CG]` | From 15 tháng Chạp prefer seasonal posts | Place seasonal entries ahead in file order before 15 tháng Chạp, since the standup promotes strictly in file order |
| `seo-draft-run` | 2291e `[S18]`, Phần A 82 | Place names follow the current 34 province list | None new: Phần A 82 already targets it |
| `seo-publish-run` | 2372c, 2382c (unmarked) | AI never presses publish; "được đăng" line gates publishing | Decide with Phần A open item 1; the standup keeps saying "em không tự bấm đăng" either way |
| `seo-index-sweep` | 2377d, 2377f `[S27]` | Per URL stall after two requests; never re-request for speed | Keep per URL state in the indexing ledger or `tracking/rank-latest.md`; the standup reports per property only |
| `seo-rank-review` | 2377e `[S33]` | Never conclude from the 24 hour dotted data | Exclude the 24 hour view from the scoring window |

## Shared file patch requests

P1 to P10 apply only together; the integrator declined them (patch-log row 49). P11 and P12 are independent and applied (patch-log rows 50, 51). P13 was added after review and was applied by the final verifier (patch-log row 68).

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `SCHEDULE.md` | `## 1. The rows`, "This table is authoritative." | replace | \| `seo-standup` \| `mon-fri` \| 07:15 \| 07:00 \| 11:30 \| | \| `seo-standup` \| `mon-fri` \| 08:15 \| 08:00 \| 11:30 \| | 2286a `[CG]` (P1a) |
| `SCHEDULE.md` | same table | replace | \| `seo-draft-run` \| `mon-fri` \| 08:00 \| 07:45 \| 12:00 \| | \| `seo-draft-run` \| `mon-fri` \| 08:30 \| 08:15 \| 12:00 \| | 2286a `[CG]` plus the AGENTS.md spacing rule and the draft run firing after the standup (P1b) |
| `SCHEDULE.md` | same table | replace | \| `seo-publish-run` \| `mon-fri` \| 09:15 \| 09:00 \| 13:00 \| | \| `seo-publish-run` \| `mon-fri` \| 09:30 \| 09:15 \| 13:00 \| | as P1b; conflicts with B-4 Câu 2 `[CG]` (P1c) |
| `SCHEDULE.md` | `### 4.2 The week as it actually runs`, "**Every weekday**" block | replace | `07:15  seo-standup            12 min  never        takes no lane` / `08:00  seo-draft-run          40 min  conditional  lane clear by 08:40` / `09:15  seo-publish-run        30 min  conditional  lane clear by 09:45` / `Gap from the draft run's worst case end to the publish run's fire: 35 minutes. The rule needs 20.` | `08:15  seo-standup            12 min  never        takes no lane` / `08:30  seo-draft-run          40 min  conditional  lane clear by 09:10` / `09:30  seo-publish-run        30 min  conditional  lane clear by 10:00` / `Gap from the draft run's worst case end to the publish run's fire: 20 minutes. The rule needs 20.` | 2286a (P2) |
| `SCHEDULE.md` | same section, "**Tuesday adds**" and "**Wednesday adds**" | replace | `Gap from the publish run's worst case end: 75 minutes.` and `Gap from the publish run's worst case end: 195 minutes.` | `Gap from the publish run's worst case end: 60 minutes.` and `Gap from the publish run's worst case end: 180 minutes.` | 2286a (P3) |
| `SCHEDULE.md` | `### 4.4 Why the day runs in this order`, "The standup goes first" | replace | `At 07:15 it reports the state as it stands at 07:15,` | `At 08:15 it reports the state as it stands at 08:15,` | 2286a (P4) |
| `SCHEDULE.md` | `### 4.5 Machines that sleep`, "**Set the earliest fire" | replace | `a 07:15 fire always arrives as a catch up` | `an 08:15 fire always arrives as a catch up` | 2286a (P4b) |
| `employee.json` | `"id": "seo-standup"`, `"id": "seo-draft-run"`, `"id": "seo-publish-run"` entries | replace | `"fire": "07:15",` `"window_start": "07:00",` (standup); `"fire": "08:00",` `"window_start": "07:45",` (draft run); `"fire": "09:15",` `"window_start": "09:00",` (publish run) | `"fire": "08:15",` `"window_start": "08:00",`; `"fire": "08:30",` `"window_start": "08:15",`; `"fire": "09:30",` `"window_start": "09:15",` | 2286a (P5) |
| `CONTRACT.md` | `## 1. The eight routines` table | replace | \| Morning standup \| Weekdays \| 07:15 \| never \|; \| Draft run \| Weekdays \| 08:00 \| conditional \|; \| Publish run \| Weekdays \| 09:15 \| conditional \| | \| Morning standup \| Weekdays \| 08:15 \| never \|; \| Draft run \| Weekdays \| 08:30 \| conditional \|; \| Publish run \| Weekdays \| 09:30 \| conditional \| | 2286a (P6) |
| `CONTRACT.md` | `### 1.4 Fire time arithmetic`, "Every weekday" block | replace | `07:15  seo-standup            no browser` / `08:00  seo-draft-run          conditional  lane clear by 08:40` / `09:15  seo-publish-run        conditional  lane clear by 09:45` | `08:15  seo-standup            no browser` / `08:30  seo-draft-run          conditional  lane clear by 09:10` / `09:30  seo-publish-run        conditional  lane clear by 10:00` | 2286a (P7) |
| `README.md` | routine table and "**The next weekday.**" | replace | standup row \| Weekdays \| 07:15 \|; draft run row \| Weekdays \| 08:00 \|; publish run row \| Weekdays \| 09:15 \|; `The standup runs at 07:15 and writes` | \| Weekdays \| 08:15 \|; \| Weekdays \| 08:30 \|; \| Weekdays \| 09:30 \|; `The standup runs at 08:15 and writes` | 2286a (P8) |
| `CAPABILITIES.md` | `### 9.1 The shape`, "The shipped default week:" | replace | `07:15  seo-standup` / `08:00  seo-draft-run` / `09:15  seo-publish-run` | `08:15  seo-standup` / `08:30  seo-draft-run` / `09:30  seo-publish-run` | 2286a (P9a) |
| `CAPABILITIES.md` | `### 9.4 Windows Task Scheduler` schtasks block | replace | `/ST 07:15 /TR "«SEO_ROOT»\run\seo-standup.cmd"`; `/ST 08:00 /TR "«SEO_ROOT»\run\seo-draft-run.cmd"`; `/ST 09:15 /TR "«SEO_ROOT»\run\seo-publish-run.cmd"` | `/ST 08:15 /TR "«SEO_ROOT»\run\seo-standup.cmd"`; `/ST 08:30 /TR "«SEO_ROOT»\run\seo-draft-run.cmd"`; `/ST 09:30 /TR "«SEO_ROOT»\run\seo-publish-run.cmd"` | 2286a (P9b) |
| `CAPABILITIES.md` | 9.4 "Task Scheduler has a setting" and 9.5 "Set the earliest fire" | replace | `a laptop that was closed at 07:15 gets no brief`; `a 07:15 fire always arrives as a catch up` | `a laptop that was closed at 08:15 gets no brief`; `an 08:15 fire always arrives as a catch up` | 2286a (P9c) |
| `INSTALL-PROMPT.md` | item 7, "Where the operating system's scheduler" | replace | `a laptop that was closed at 07:15 produces no brief that day` | `a laptop that was closed at 08:15 produces no brief that day` | 2286a (P10) |
| `CONTRACT.md` | `### 2.3 Strategy`, "`## Thresholds` carries the shipped defaults" code block | replace | `sitemap_staleness_window: 14  archive_window_days: 90     refresh_share: 2` | `sitemap_staleness_window: 14  archive_window_days: 90     refresh_share: 2` then a new line after `refill_block: 30`: `new_post_share: 2` | 2311b, Phần A 71a `[CG]` (P11) |
| `examples/brief-latest.md` | `## Today` to `## Blocked` lines | replace | `- C-009 northwind-site: publish the guide to how long a roof lasts by material, drafts/roof-lifespan-by-material/`; `- C-002 needs your hand: add https://www.example.com to your search performance console and verify it, then tick the card in board/WORK-BOARD.md`; `- seo-draft-run assumed the post registry date field takes the publish date rather than the draft date; say so under Corrections in strategy/properties.md if that is wrong`; `- 1 open blocker, listed in seo-latest.md` | `- C-009 northwind-site: đăng bài tuổi thọ mái nhà theo vật liệu, drafts/roof-lifespan-by-material/`; `- C-002 cần anh/chị làm: thêm https://www.example.com vào Search Console và xác minh. Làm xong, anh/chị tick thẻ trong board/WORK-BOARD.md.`; `- seo-draft-run đã tự chọn: trường ngày trong danh sách bài lấy ngày đăng, không lấy ngày viết nháp. Nếu sai, anh/chị ghi một dòng vào ## Corrections của strategy/properties.md.`; `- 1 việc kẹt khác, chi tiết trong seo-latest.md` | 106c `[CG]` (Phần A), wording only; fictional (P12) |
| `examples/brief-latest.md` | `## Blocked`, the compact blocker row | replace | `- 1 việc kẹt khác, chi tiết trong seo-latest.md` | `- 1 việc đang kẹt khác, chi tiết trong seo-latest.md` | Review fix: the compact row shape in Step 8 now uses the glossary term `việc đang kẹt` (`_shared/glossary.md`, blocker row); wording only, fictional. Pending, after review (P13, patch-log row 64) |
