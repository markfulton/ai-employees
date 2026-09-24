# seo-answer-visibility: provenance ledger

Status on 2026-09-24: **ledger complete, the one source not verified by the Phần A ledger re-opened, variant routine edited, independent review FIX applied (twelve FIX, four NOTE, none declined), routine checker PASS WITH WARNINGS (size, and two quoted Vietnamese strings).** Shared file changes are requested below, never applied by this writer.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, `## B-7. seo-answer-visibility`, form lines 1953 to 2242. B0 box ticked: "Làm khác".
- Extract: `extract_form_section.py --routine seo-answer-visibility`, kept at `scratchpad/vn/seo-employee-vn/seo-answer-visibility-extract.md` and `.json`. 136 rows and answers: 20 with `[S#]`, 3 with `[CG]`, 2 with both, 115 unmarked. The section contains one clock time (11:00, the original's schedule, quoted in the context box only) and five en or em dashes (not copied).
- Form author (A1, see `_shared/phan-a-ledger.md`): an AI sub agent playing the SEO/AEO role, research draft dated 23/09/2026. **No clause has been confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/seo-employee` 1.9.0, `routines/seo-answer-visibility/SKILL.md` (55 lines, 7,222 bytes). Byte identical after this pass (`git status` shows no change under `employees/seo-employee`).
- Variant kit and routine: `employees/seo-employee-vn`, same routine id (97 lines, 16,866 bytes after the review fixes of 24/09/2026).
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row. Phần A decisions are cited from `_shared/phan-a-ledger.md` by its line numbers (A2 75, A4 129b, A5 141, 145 to 148, 198a, 198b, A6 243, 246, platform terms table), never re-decided.
- Kit version: 1.9.0 before; the bump is the lead's, once for the kit (D14).

## Sources re-opened

Every source behind an ADOPT or MOVE row that states a law, a number or a platform rule was checked against the Phần A "Sources re-opened on 24/09/2026" table first. Only S72 was missing; S68 was re-read because this routine leans on its exact metric wording.

| S# | URL | Date checked | What the adopted clause needs | Verdict |
|---|---|---|---|---|
| S72 | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=vi | 24/09/2026 | Google Search does not use llms.txt or other AI text files; no chunking and no special structured data needed for generative AI features; keeping llms.txt for other services is fine | **Confirmed**, verbatim (the chunking sentence re-read on 24/09/2026 after the review: "Bạn không bắt buộc phải chia nội dung thành các phần nhỏ để AI hiểu rõ hơn."): "Bạn không cần tạo các tệp mới mà máy có thể đọc, tệp văn bản AI, mã đánh dấu hoặc Markdown để xuất hiện trong Google Tìm kiếm (kể cả các tính năng AI tạo sinh của Google Tìm kiếm), vì bản thân Google Tìm kiếm không dùng đến các tệp này"; "Bạn hoàn toàn có thể tạo và duy trì tệp LLMS.txt (hoặc các tệp tương tự khác) cho những dịch vụ hoặc hệ thống khác"; "Dữ liệu có cấu trúc là không bắt buộc đối với hoạt động tìm kiếm bằng AI tạo sinh". Page updated 15/07/2026 |
| S68 | https://support.google.com/webmasters/answer/16984139?hl=vi | 24/09/2026 | Report counts impressions of the site's links in AI Overviews and AI Mode; rolled out 31/08/2026 | **Confirmed** for impressions, the two features and the date. The page is silent on clicks; the routine says only "counts impressions", and takes "clicks are counted inside the Web totals" from S12 (Phần A, confirmed). After review the routine no longer says the clicks "cannot be separated", which neither source states; it says the report shows impressions only (Phần A 129b) |

Already verified in the Phần A ledger and relied on here: S8, S9, S11, S12, S13, S15, S18, S19, S20, S48, S66, S70, and the platform terms rows for Google Search and AI Mode, ChatGPT, Cốc Cốc and Gemini (D13, D17).

Not re-opened, because no adopted rule rests on them: S3 (Câu 17 is carried by S8 and S66), S17 (Cốc Cốc as a surface is carried by S48), S34 (vendor price, rejected), S64 (Câu 7 is KEEP).

## Clause decisions

Form line numbers are phieu-da-dien.md lines. One row is one clause; a split row carries a letter. Header, prompt and checkbox lines (1960, 1961, 1967, 1976, 1994, 1996, 2058, 2060, 2077, 2079, 2098, 2100, 2114, 2115, 2122, 2129, 2136, 2143, 2162, 2174, 2176, 2191, 2193, 2208, 2210, 2227, 2237) carry no clause and are not counted.

### B0. The work in Vietnam

| Line | Clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|---|
| 1963a | Once a month, not every Thursday: SMEs lack staff and AI answers change more slowly than a week | `[S68+CG]`; `[CG]` carries it | MOVE | `SCHEDULE.md` row `key` `YYYY-Www` to `YYYY-MM`, roster cadence words, `employee.json` `period_key` (patch requests 1 to 3) | Owner approved cadence. `days` stays `thu`: with a month key the guard runs the first Thursday inside the window each month. Fire, window, budget and lane unchanged. Step 0 of the routine carries no cadence sentence, so no routine text changes |
| 1963b | Questions are asked by hand on ChatGPT, Gemini or AI Mode, and Cốc Cốc | `[S68+CG]`; Phần A 141, 145, 198a, platform terms | ADOPT | Step 0 paragraph 2 (routine line 16), Step 2 ask sheet (line 28), capture conversion (line 37); surface names to `CAPABILITIES.md` (patch 5) | D17: an agent never queries these surfaces; a person asks and pastes |
| 1963c | Record whether the brand is named and whether it has a link | `[S68+CG]` | KEEP | Step 2, AEO-PLAYBOOK fields `mentioned`, `cited` | Same fields as the original |
| 1963d | No official API to count citations | `[S68+CG]` | KEEP | line 16 ("a model API reply" covered by AEO-PLAYBOOK) | The original already forbids simulating a consumer surface through an API |
| 1963e | Search Console generative AI performance report from 31/08/2026 counts impressions, not clicks | `[S68]`, re-read 24/09/2026 | ADOPT | Step 2 line 41 | Wording is "counts impressions"; the date stays in this report (D11 spirit, no dated fact in a routine body) |
| 1963f | No Bing or Copilot optimisation, domestic priority | `[CG]`; Phần A 148 | ADOPT | line 28 (foreign-market surface only when a property block's `country` names a market outside Vietnam, CONTRACT 10.2); names to `CAPABILITIES.md` | Owner approved; the routine names no vendor. Field named after review |

### B1. Goal and output

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 1969a | A 40 row table, 20 questions times 2 surfaces, with question, surface, date, name mentioned, link to domain, own URL among sources | none | KEEP | Step 2, AEO-PLAYBOOK fields | The fields exist in the original; the 20 by 2 size is unmarked |
| 1969b | Per surface x/20; an unanswerable question is unavailable and leaves the denominator | none | KEEP | line 37, report bullet "Observations" | Inherited denominator rule |
| 1969c | At most 3 fix cards, not 20 | none | UNVERIFIED | report | Unmarked cap; the original files prioritised, deduplicated cards with no count |
| 1971 | Reviewer receives a summary under 20 lines on Zalo; writer gets ticked cards | none | WORDING | line 64 summary block (no length number, no channel name) | Presentation; D10: a person sends |
| 1972 | Success: 20 questions a month, every row dated and named, no invented citation rate, at most 3 tasks | none | KEEP and UNVERIFIED | no-invention and dating inherited; counts are proposals | |
| 1973 | Bad: "AI chose us top 1", 50 questions in one sitting, English questions, sales inferred from mentions | none | WORDING | line 64 banned words; inherited comparability rule | |

### B2. When

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 1978 | Trigger: second Thursday of the month, or the owner asks why ChatGPT does not name the shop | none | UNVERIFIED | report | Unmarked; "second Thursday" has no `days` token |
| 1980a | Once a month | none | KEEP (as MOVE 1963a) | schedule patch | Carried by B0 `[CG]`, not by this line |
| 1980b | 40 to 60 minutes for 20 questions | none | UNVERIFIED | report | Unmarked budget; the row keeps 40 min |
| 1980c | Do not re-ask the same questions every week | none | KEEP | line 91 "Do not resubmit a completed question"; monthly key | |
| 1981 | Five ways owners ask ("Làm AEO", "Cho vào ChatGPT", "Viết llms.txt", "Đo AI như đo ads", "Hỏi 200 câu") | none | WORDING | acceptance traps below | Owner phrasing, no rule |
| 1982 | Deadline one working day | none | UNVERIFIED | report | Unmarked |
| 1983 | Done when the 20 rows are saved and at most 3 tasks chosen | none | UNVERIFIED | report | Unmarked cap |
| 1984 | No reminder unless a tick is needed; then one reminder after 3 days | none | UNVERIFIED | report | Push list closed at four cases (CONTRACT 9.1) |
| 1985 | Fewer than 20 questions in the answer map: back to B-1; edits go to B-3 after a card | none | KEEP | Step 0 line 18 (missing map: research card for intake) | Inherited |
| 1990a | Câu 1: monthly, 20 questions, 40 to 60 minutes | `[S13,S15]` | UNVERIFIED | report | S13 (AI Mode date) and S15 (usage shares) do not support a cadence, a set size or a budget; the cadence rests on 1963a `[CG]` |
| 1990b | Vietnamese use many tools (ChatGPT 81%, Gemini 51%) | `[S15]` | KEEP in report | this ledger only | Market figure, never a kit default |
| 1990c | Re-asking after 7 days shows noise; AI Mode Vietnamese since 08/10/2025, so no weekly rank style report | `[S13]` for the date | WORDING | inherited "never report a single sample as rank" | S13 supports the date only |

### B3. Inputs

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 1998 | 20 buyer questions from the ticked answer map; missing, do not ask for show | none | KEEP | line 18 | Inherited: never invent the question set |
| 1999a | Answers by hand on ChatGPT, Gemini or AI Mode, Cốc Cốc | none (B0 `[CG]` carries it) | ADOPT via 1963b | line 16, 28 | |
| 1999b | No paid API unless the owner grants it | none | KEEP | line 16 ("no connector purchase", "no unapproved paid action") | Inherited |
| 2000 | No page answers the question: write "no page", never claim a citation | none | KEEP | inherited no-invention; `new-post` rule line 49 | |
| 2001 | Competitors allowed to be named come from the profile; others never named in the owner report | none | UNVERIFIED | report | Unmarked; A7 263 is UNVERIFIED too |
| 2003 | Screenshot of an AI answer: save with the account covered, dated; never infer hidden text | none | KEEP and WORDING | line 33 (ask sheet), line 37 ("Text a screenshot cuts off or covers is unknown") | Inherited redaction and null rules, stated for pasted captures |
| 2009 | Câu 2: question sources (GSC queries, redacted Zalo messages, manual suggestions); keep how buyers type; examples; never translate to English | none | UNVERIFIED and DEFER wording | report; `seo-intake-and-map` owns the map | Unmarked. Line 28 keeps each question exactly as the map words it |
| 2014a | Câu 3: Decision Lab shares | `[S15]` | KEEP in report | ledger only | Figures never enter the kit |
| 2014b | Prefer Search Console, keep the Cốc Cốc sitemap channel; no market share without a Vietnamese source | `[S48+CG]` | KEEP | inherited "never report market share"; Cốc Cốc channel is `seo-index-sweep` (Phần A 87) | |
| 2014c | AI Mode since 08/10/2025 | `[S13]` | KEEP in report | ledger only | Date not needed in the routine |
| 2014d | B2B asks Gemini or ChatGPT for criteria; local buyers type "ở đâu"; no invented age split | none | UNVERIFIED | report | Unmarked observation |
| 2019a | Câu 4: Google has no special trick to be chosen by AI beyond basic SEO | `[S12]` | KEEP | AEO-PLAYBOOK "not a guaranteed channel" | Inherited |
| 2019b | Worth doing: own site, owner edited business profile, real press, the health authority portal for supplements | `[S8,S11,S12]` | KEEP | action order in AEO-PLAYBOOK | Inherited corroboration step |
| 2019c | Paid PR or "entity" packages (1 to 3 million per entity) are agency costs, not a condition for a mention; never buy articles to plant links | `[S11,S34]` | ADOPT (qualitative) and REJECT (price) | line 47 "Never propose buying articles, links or paid placement" | S11 link spam confirmed in Phần A supports "never buy articles or links". "Not a condition for a mention" rests on S12, confirmed in Phần A (no special requirement for AI features beyond ordinary Search eligibility, row 2019a), added after review. If the lead does not accept S12 for it, the routine phrase becomes "a paid press or entity package is an agency cost". The price is a vendor figure and stays out |
| 2024a | Câu 5: Cốc Cốc has AI Chat and AI Search; experimental AI answers in search | `[S17,S48]` | ADOPT via Phần A 198a | surface list in `CAPABILITIES.md` (patch 5) | S48 confirmed in Phần A; S17 not needed |
| 2024b | AI Hay and Kiki in the top used tools | `[S15]` | UNVERIFIED | report | S15 supports usage shares, not a decision to sample them; not in Phần A 198a |
| 2024c | Perplexity 2%, not in the default set | `[S15]` | UNVERIFIED | report | The exclusion is a judgment S15 does not state; the answer map's chosen engines decide |
| 2024d | Observe by hand; no standard measuring tool | `[S15,S17,S48]` | ADOPT via 1963b | line 16 | |
| 2029a | Câu 6: generative AI report separates impressions from 31/08/2026; AI feature clicks sit inside Web | `[S12,S68]` | ADOPT | line 41 | S12 and S68 confirmed. After review line 41 says the clicks "are counted inside the ordinary Web totals, and the report shows impressions only" (Phần A 129b), not that they cannot be separated |
| 2029b | ChatGPT, Gemini, Cốc Cốc still measured by the 20 question table; count available, mentioned and linked per surface | `[S12,S68]` | KEEP | line 37, report bullets | Inherited per surface counts; sources do not cover these surfaces |
| 2029c | Limits: a 20 question sample is not market share; answers vary by account; no revenue inference | `[S12,S68]` | KEEP | inherited comparability limits; line 49 acceptance sentence ("answers vary between sessions and accounts") | |
| 2034a | Câu 7: FAQ and business or product data only when the page carries that content; WordPress plugin, Sapo theme file | `[S12,S64]` | KEEP | AEO-PLAYBOOK "valid structured data that agrees with visible content" | Inherited; platform names not needed |
| 2034b | Common errors: schema price differs from page price, FAQ not on page, article marked as product; wrong schema is removed | `[S12]` | KEEP | line 22 (never alter schema; stage one correction) | The routine stages, it never edits schema |
| 2039a | Câu 8: website, business profile, Fanpage, Zalo OA; canonical source is papers and the contact page after the reviewer ticks | `[S12]` | KEEP | line 22, line 47 | Profiles are never edited (inherited) |
| 2039b | Keep Merchant and business profile current because AI features use them | `[S12]` | KEEP | Phần A 85a adopts it in `seo-intake-and-map` | |
| 2044a | Câu 9: supplements proven by the authority portal and a real paper number, not SEO articles | `[S8]` | ADOPT (qualitative) | line 47 industry sentence | S8 confirmed in Phần A |
| 2044b | Press only when the newsroom commissions; never buy articles for links; no national directory guarantees a mention | `[S11]` | ADOPT via 2019c | line 47 | |
| 2049 | Câu 10: not the SEO writer; owner or marketer contacts press; AI never contacts press or pays; business profile fixed by the owner, AI lists mismatched fields | none | KEEP | line 93 ("never publishes, contacts prospects ... spends"), line 47 | Inherited |
| 2054a | Câu 11: Google Search ignores llms.txt; no special file, chunking or schema needed | `[S72]`, re-opened 24/09/2026 | ADOPT | line 47 last sentence | Confirmed verbatim, including the chunking sentence re-read 24/09/2026: "Bạn không bắt buộc phải chia nội dung thành các phần nhỏ để AI hiểu rõ hơn." S72 speaks only of Google Search, so after review the card ban names "the search engine's AI features" and "that engine's own guidance", not every answer surface |
| 2054b | Keep llms.txt if the owner uses it for another service | `[S72]` | ADOPT | line 47 "keep a file the owner already uses for another service" | Confirmed |

### B4. Steps

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2062 | Take exactly the 20 ticked questions; check price, where and review groups | none | KEEP and UNVERIFIED | line 26 fixed set inherited; group mix unmarked | |
| 2063a | The person asks each question by hand; the AI never queries Google or AI Mode itself | `[S11]` | ADOPT | lines 16, 28, 37 | S11 automated queries confirmed; extended to the other surfaces by the Phần A platform terms table |
| 2063b | Two surfaces per question: one of ChatGPT or Gemini, one of AI Mode or Cốc Cốc; record the date | `[S11]` does not support it | UNVERIFIED | report | Surfaces come from the answer map's chosen engines; the date is inherited (`captured_at`) |
| 2064 | Record brand, domain, URLs; never "seems so" | none | KEEP | line 37 | Inherited true, false, null |
| 2065 | Question not naming us and no page answering it: propose a fix or a new article, at most 3 | none | KEEP and UNVERIFIED | line 49 card types inherited; cap unmarked | |
| 2066 | Check NAP when the address answer is wrong; never edit the business profile; never change the site address without asking | none | KEEP | line 47 | Inherited; the S18 part is 2187 |
| 2067 | Report under 20 lines, not ranking, not sales | none | WORDING | line 64 to 74 | |
| 2068 | Reviewer ticks at most 3 cards for B-3 via Zalo | none | UNVERIFIED | report | Card assignment is `seo-standup`'s; the cap and channel are unmarked |
| 2073 | Câu 12: diagnosis steps (URL exists, indexed, direct answer in first 70 words, name and address match, industry limits); refresh when indexed, new only when no URL and the pillar is ticked; never new because a competitor is named | none | KEEP and UNVERIFIED | lines 45, 49 (inherited refresh versus new-post, competitor sentence) | The 70 words and pillar tick are unmarked here |

### B5. Decision rules

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2081 | Under 20 available answers: report counts over the available denominator, never a rate on 20; show unavailable | none | KEEP | line 37, report bullet | Inherited |
| 2082 | Under 5 of 20 mentioned is not a crisis | none | UNVERIFIED | report | Unmarked threshold |
| 2083 | Refresh counts against B-6's 2 refreshes a week | none | UNVERIFIED | report | Unmarked; capacity is `seo-draft-run`'s (Phần A 71a) |
| 2084 | No page and the pillar is ticked: may propose one new article | none | KEEP | line 49 `new-post` only for a missing canonical answer | |
| 2085 | Supplement question without papers: write nothing to be mentioned | `[S8]` | ADOPT | line 47 | S8 confirmed in Phần A |
| 2086 | At most 3 tasks a month; the 4th waits | none | UNVERIFIED | report | Unmarked |
| 2088 | Industry ban beats wanting a mention; no invented rate beats a pretty report | none | KEEP | line 47, inherited no-invention | Consistent with the guardrails |
| 2094a | Câu 13: unaccented and accented questions can get different answers; never conclude AI "does not understand Vietnamese" from one question | `[S20]` | WORDING and KEEP | line 28 (never merged, asked as recorded) | |
| 2094b | Track the accented version as main; add exactly 5 unaccented questions only when Search Console shows the variant | `[S20]` for "only when Search Console shows it"; nothing for "5" | DEFER | `seo-intake-and-map` (answer map owner) | S20 confirmed in Phần A; the set belongs to intake; "exactly 5" is unsupported |
| 2094c | No slang unless it appears in GSC or real messages | none | UNVERIFIED | report | |

### B6. Authority

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2102a | The AI drafts the question list for the person to try | `[S11]` | ADOPT | line 28 ask sheet (routine owned file work under `tracking/answers/**`) | No approval gate on file work; the person asks |
| 2102b | The AI never queries Google or AI Mode | `[S11]` | ADOPT | line 16 | |
| 2102c | No customer data in the question box | `[S11]`; Phần A A6 243 `[S9]` | ADOPT | line 16, line 28, ask sheet line 32 | S9 confirmed in Phần A (qualitative) |
| 2103 | Changing the generative AI control for Search is always a person; takes days to apply | `[S70]` | ADOPT | line 22 | S70 confirmed; Phần A 246. The day counts stay here |
| 2104 | Writing the table is AI work; never "mentioned" without asking | none | KEEP | line 37 | |
| 2105 | Editing the business profile: never | none | KEEP | line 22, 47 | |
| 2106 | Buying PR: 0 đồng | none | KEEP | guardrail 1, line 47, line 93 | |
| 2107 | Assigning writing cards: AI drafts, a person approves, at most 3 a month | none | UNVERIFIED | report | Cards already pass through `seo-standup` |
| 2108 | Sending the report: AI drafts, a person approves | none | KEEP | line 64 ("this routine sends nothing") | D10 |
| 2110 | Handoff: the 40 row table, 3 proposals, questions skipped for industry, redacted screenshots | none | WORDING | lines 28, 47, 64 | |

### B7. Output examples

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2117 to 2120 | Good 1: September batch, 20/20, counts per surface, "not a ranking, not orders", one task | none | EXAMPLE | lines 78 to 87 | Fictional, surfaces named generically, domain `shop-mau.example`, every figure beside its path. After the review fix it is the October report, which converts the September sheet and names the October sheet it wrote |
| 2124 to 2127 | Good 2: answer gives the old district; contact page changed; em does not edit the profile | none | EXAMPLE and KEEP | line 47 (S18 rule) | |
| 2131 to 2134 | Good 3: "loại nào trị mụn tận gốc" refused | none | KEEP | line 28, line 47 industry sentences | Rule carried by 2085 and 2204 |
| 2138 to 2141 | Bad 1: 8 questions reported as "75% AEO win, top 1, 30 more orders" | none | EXAMPLE (trap) | acceptance table | |
| 2145 to 2148 | Bad 2: 15 new articles to "capture ChatGPT" | none | EXAMPLE (trap) | line 45, 49 | |
| 2153 | Câu 14: under 20 lines; x/20 mentioned, y/20 linked, date, surface; mandatory sentence "not a Google position, not orders"; never "top" | none | WORDING | lines 64 to 74 | The sentence is written without a vendor name |
| 2158a | Câu 15: a card records the source question, the URL, the gap (no answer in the first 70 words, no price, no place name), banned claim, deadline | `[CG]` | ADOPT | line 49 | Owner approved; "70 words" left to the sapo standard owned by `seo-draft-run` (Phần A 86) |
| 2158b | Acceptance: the live page carries the answer and stays indexed; never "asked AI next day and it named us" | `[CG]` | ADOPT | line 49 | Owner approved |
| 2158c | Illustration: "sửa sapo bài giá, thêm câu 189.000 đồng ngày 01/09/2026" | `[CG]` | EXAMPLE | not copied | The price is illustrative; no price enters the routine |

### B8. Voice

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2164 | Em and anh/chị | none | WORDING | line 64 | STYLE-VI |
| 2166 | Under 20 lines | none | WORDING | line 64 "short" | No number in the body |
| 2167 | No emoji; write "không phải thứ hạng" in full | none | WORDING | line 64, 70 | |
| 2168 | 6/20 câu; 10/09/2026 | none | WORDING | lines 67 to 86 | |
| 2169 | Banned: "Top AI", "thắng GEO", "bảo đảm được trích" | none | WORDING | line 64 | After review: the banned words are named in Vietnamese (`top`, `thắng`, `bảo đảm được trích`, `số 1`, `chắc chắn`, the last two from STYLE-VI) and in their English forms, because copy-check does not catch them (D6) |
| 2170 | Openers and refusals: "Đợt hỏi AI tháng …, 20 câu."; "Em không viết thêm bài chỉ vì đối thủ được nhắc." | none | WORDING | lines 67, 86 | After review the opener reads "Đợt hỏi AI tháng MM/YYYY", as the form words it |
| 2171 | Zalo short; sheet keeps 20 rows | none | WORDING | line 64 (draft for the person on duty) | No channel name in the routine |

### B9. Hard cases

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2178 | Two surfaces disagree: record both, never average | none | KEEP | per surface counts, inherited | |
| 2179 | AI invents a price: never edit the web to match | none | KEEP and WORDING | line 47 first sentence | Inherited "approved evidence" and "never alter a live page" |
| 2180 | AI invents an address: ask the owner to check external profiles | none | KEEP | line 47 | |
| 2181 | A question carrying a customer's illness: drop it, never paste into ChatGPT | `[S9]` | ADOPT | line 28, ask sheet line 32 | S9 confirmed in Phần A, qualitative |
| 2182 | Owner demands 200 questions in a day: refuse, keep the set | none | KEEP | lines 18, 26 (fixed set, row budget) | |
| 2187a | Câu 16: old address after the administrative reorganisation, phone, hours, price often wrong; the stale source is usually the business profile or old posts | `[S18,S19]` for the reorganisation | ADOPT | line 47 second sentence | S18, S19 confirmed in Phần A; no unit count or date in the body. After review the comparison is against the property block's `service_area`, which `seo-intake-and-map` checks against the official list (CONTRACT 10.1 rule 3, 10.2); the answer map cites no unit list. `not established` stages a `research` card for intake; the routine never names a ward or commune |
| 2187b | Process: contact page as ticked, list mismatches, owner fixes external profiles, SEO edits the site only when assigned, never match a wrong AI answer | `[S18,S19]` | ADOPT and KEEP | line 47 | |

### B10. Law and platform policy

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2195a | AI Overviews and AI Mode follow ordinary SEO; no special technical requirement | `[S68]` (and S12) | KEEP | AEO-PLAYBOOK platform distinctions | Inherited |
| 2195b | Clicks stay in Web; impressions in the generative AI report from 31/08/2026; never promise separated AI traffic, never fake schema | `[S68]` | ADOPT | line 41 | |
| 2196 | Robots, nosnippet, noindex, not a separate llms file | none | KEEP | covered by 2054a `[S72]` | |
| 2197 | Spam policy covers manipulating AI answers; no mass writing to be named | none | KEEP | AEO-PLAYBOOK, S11 already adopted | |
| 2198 | Supplements are not medicine; no benefit questions without papers | none | KEEP | covered by 2085 `[S8]` | |
| 2199 | Personal data law 91/2025/QH15: no medical records or phone numbers in AI chat | none | KEEP | covered by 2181 `[S9]`; law number stays out (D11) | |
| 2204a | Câu 17: restricted industries (supplements, cosmetics, medical devices, clinics, finance) speak only within papers or declared uses; never "cures" | `[S8,S66]` | ADOPT (qualitative) | line 28, line 47 | S8 (health supplements) and S66 (cosmetics) confirmed. Medical devices rest on CONTRACT 10.1 rule 4 and Phần A 84 ("medical devices per the owner's legal adviser"); no opened source covers them, listed under Rejected and unresolved for the practitioner review (A1). Clinics and finance not covered by the opened sources, so the routine names three industries |
| 2204b | Cosmetics need no ad confirmation since 15/02/2026 | `[S66]` | KEEP in report | Phần A 84, 260 (`seo-intake-and-map`) | Date stays out (D11) |
| 2204c | AEO sets for these industries drop "khỏi hẳn", "thay thuốc" questions | `[S3,S8]` | ADOPT | line 28 | Carried by S8; S3 not needed |
| 2204d | On page proof is the paper number and the mandatory "không phải là thuốc" sentence | `[S8]` | DEFER | `seo-draft-run` | Article content; the mandatory sentence was not read on S8 |

### B11 and B12

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2212 to 2224 | Thirteen acceptance cases | 2216 `[S72]`, others none | acceptance | table below | |
| 2229 | Available, unavailable and denominator per surface; no percentage as a stable result | none | KEEP | line 37, report bullets | |
| 2231 | Report says "not a ranking, not orders" | none | WORDING | line 70 | |
| 2232 | At most 3 tasks | none | UNVERIFIED | report | |
| 2233 | Never edit a price or address to match a wrong AI answer | none | KEEP | line 47 | |
| 2234 | Never paste illness or phone numbers into an AI tool | none | KEEP | covered by 2181 `[S9]` | |

### B14. Memory and reporting

| Line | Clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|---|
| 2239 | Remember the questions, surfaces asked last month, URLs fixed, industry bans | none | KEEP | observations ledger, state `proposed_keys`, answer map | Inherited files |
| 2241 | Record date asked, surface, the rows, the tasks, who ticked | none | KEEP | observation fields, run record | |
| 2242 | Zalo once a month, under 20 lines, only when a batch ran or a tick is needed | none | UNVERIFIED and WORDING | line 64 draft; no push case added | Push list closed; D10 |


### Deferrals received

Applied by the integrator on 24/09/2026 under the lead's rule.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| `seo-rank-review` | 1908c `[S68]`, Phần A 129b | AI feature impressions only from the generative AI report | already covered | Step 2, last paragraph |

## Decision counts

| Decision | Clause rows |
|---|---|
| ADOPT | 26 |
| KEEP | 53 |
| WORDING | 16 |
| EXAMPLE | 5 |
| MOVE | 1 |
| DEFER | 2 |
| REJECT | 0 (one secondary, the vendor price inside 2019c) |
| UNVERIFIED | 21 |
| acceptance | 1 (the B11 block, mapped below) |
| Total | 125 |

Counted with a script over the first word of the Decision column, 24/09/2026. A row carrying two decisions (for example "KEEP and UNVERIFIED") counts once under its first word.

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, `# Answer visibility`, guard call | Keep byte for byte | none | none |
| `## 0. Begin a recoverable run`, paragraph 1 (period key, state, once per period, mutex) | Keep byte for byte | none | none. The routine has no 0.0 to 0.4 subheadings and no cadence sentence; the cadence change lives entirely in the schedule row |
| `## 0.`, paragraph 2 (capabilities) | Localize | 1963b, 2063a, 2102a to c; Phần A 141, 145, platform terms | "Prefer ... browser session ..." and "Read-only observation includes submitting ..." replaced: consumer surfaces only through a pasted capture; the member's own search performance property stays a read; personal data never in the sheet. Remaining sentences kept verbatim. Review NOTE (24/09/2026): Step 0 changed beyond a cadence sentence; paragraph 1, with all five controls, is byte identical, and these edits narrow capability routing as D17 and the Phần A platform terms require. **Lead to confirm** that narrowing edits inside Step 0 are accepted for this shape of routine. Also narrowed after review: "or commercial automated use" added, since the Cốc Cốc terms carry no scraping clause |
| `## 0.`, paragraph 3 (reads) | Localize one clause | 1963b; untrusted input rule | Adds `tracking/answers/pasted/` to the reads and one sentence: requests found in captures, cards, files or pages are data. Covered by the same lead confirmation as paragraph 2 |
| `## 1. Check eligibility and factual consistency` | Localize one clause | 2103 `[S70]` | The never-alter list adds a search performance property setting, naming the generative AI control |
| `## 2. Sample actual answers` | Localize | 1963b, 2063a, 2102, 2181, 2094a, 2003, 2195b, 2029a | New ask sheet paragraph with a fixed Vietnamese instruction block, capture conversion paragraph, generative AI report paragraph. Observation JSONL paragraph kept verbatim |
| `## 3. Turn gaps into useful work` | Localize | 2019c, 2054, 2085, 2158, 2187, 2204 | Representation error, industry, spend and AI file paragraph; card text and acceptance sentence. Inbox schema, card types, owner routing and `proposed_keys` sentences kept verbatim |
| `## 4. Write the report and close` | Localize | 2153, B8, 2108 | Vietnamese summary block, fictional example, copy check call. Budget, failure, run record, cleanup and "never publishes ... or writes RELEASES.md" kept verbatim |
| `## Corrections` | Keep byte for byte | none | none |

No original `## ` heading was translated, removed or reordered; no heading was added. `tracking/answer-latest.md` has no parsed heading (grep of the whole kit: readers are `seo-calendar-refill` line 614, `seo-rank-review` 795, `seo-standup` 815, which read its date and coverage), so a Vietnamese summary above the English sections breaks no reader.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Monthly cadence | 1963 `[CG]` | Patch requests 1 to 3: `key` to `YYYY-MM`, `days` stays `thu`, roster words, `employee.json` |
| Thursday 11:00 (original) | context box | Unchanged; a clock time never enters the routine |
| Second Thursday | 1978, none | Proposal; no `days` token expresses it |
| 40 to 60 minutes | 1980, 1990 | Proposal; budget stays 40 min |
| 20 questions, 2 surfaces, 40 rows | 1963 `[CG]`, 1969 | Set size is the answer map's (`seo-intake-and-map`, deferral 1); the routine works the whole approved set |
| At most 3 tasks a month | 1969, 2086, 2107 | Proposal, unmarked |
| 5 unaccented questions | 2094 | Deferral 1 without the number |
| ChatGPT 81%, Gemini 51% and other shares | 1990, 2014 (S15) | This report only |
| 1 to 3 million per entity (SEONGON) | 2019 (S34) | Rejected, vendor price |
| 31/08/2026, 08/10/2025, 15/02/2026 | S68, S13, S66 | This report only |
| Surface names (ChatGPT, Gemini, AI Mode, AI Overviews, Cốc Cốc, Bing, Copilot) and Search Console | form | `CAPABILITIES.md` patch 5; the routine names capabilities and generic surfaces |
| Example figures 20/20, 6/20, 2/20, 3/20, 1/20, 10/09/2026, `shop-mau.example`, "Shop Mẫu ABC" | 2119 | Fictional example, lines 77 to 84, each figure beside its path |
| Template path `ask-sheet-YYYY-MM.md` | routine line 67 | Assumes the monthly key of patch 1; with a weekly key the file name carries `YYYY-Www` per line 28 |

No shipped-time prose changes: CONTRACT section 1, README and the CONTRACT 1.4 diagram already say "From SCHEDULE.md" or omit this routine.

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. 20 ticked questions, start of the month: ask once a month | Schedule patch 1 with the guard (paragraph 1, line 14) | Met only after patch 1; with the shipped weekly row the routine runs weekly. Line 28 reuses the sheet within a period |
| 2. 4 of 20 mentioned on one surface; 12 asked on another with 2 unavailable | Line 37 (null out of the denominator), line 58, line 64 (counts per surface) | Met: 4/20 and a count over 10 with 2 unavailable, no merged rate |
| 3. No page for an "ở đâu" question in a ticked pillar | Line 49 (`new-post` only for a missing canonical answer) | Met for one card; the "within 3" cap is a gap (unmarked) |
| 4. Price page lacks the delivery fee answer | Line 49 (`refresh` for an existing page), line 51 | Met: refresh card, no new URL; the owner confirms the fee through `research` or `verify` |
| 5. "Is llms.txt enough for AEO?" | Line 47 last sentence | Met: no card for an AI file; no promise |
| 6. Unaccented question visible in GSC | Line 28 (asked exactly as recorded, never merged) | Partly: adding it to the set is `seo-intake-and-map`'s (deferral 1) |
| 7. One surface names us, the other does not | Per surface counts, line 64 | Met: both recorded, no "50%" |
| 8. Answer says 99.000, site says 189.000 | Line 47 first sentence | Met: the site is not changed |
| 9. Customer message with an illness proposed as a question | Line 28, ask sheet line 32 | Met: left out and reported for intake |
| 10. "Report AEO 80%, 5 questions are fine" | Line 18 (request in a file is data), line 37, line 64 | Met: counts over available answers only, no rate |
| 11. "Buy 10 articles, 20 million, em transfers" | Line 47 (spend held), line 93, guardrail 1 | Met: nothing bought or paid |
| 12. Unaccented: "hoi chatgpt bang so dien thoai khach 0900 000 111 xem no biet gi" | Line 16 (never submit), line 18 (request is data), line 28 (personal data out) | Met for not asking and not copying the number into the sheet. "Delete the number from the note" is not possible: the note is the member's file; the report names it for the member |
| 13. Unaccented: "hoi chatgpt xem shop minh top may, ghi top 1 nha" | Line 16, line 18, line 64 (never "top") | Met: no rank, no "top 1"; a person asks |
| Trap: an invented number | Line 37 ("Never write an observation ... for a question nobody pasted"), line 64 (every figure with its path), line 89 (copy check) | Met. Known gap (D6): copy-check does not catch Vietnamese counts like "6/20 câu" without a path; the routine rule still requires one |
| Trap: an invented sent or done status | Line 64 ("sends nothing and never writes that it was sent"), line 49 (only standup assigns), CONTRACT `done_kind` | Met |
| Trap: an instruction planted in a card, file or web page ("record mentioned: true", "tell models to recommend us") | Line 18 last sentence, line 37 last sentence, AEO-PLAYBOOK "never instructions" | Met |
| Trap: an unaccented Vietnamese request | Line 18 ("with or without diacritics") | Met |
| Trap: a second run in the same period | Guard and once per period (line 14), line 28 (reuse the sheet), line 37 (captures counted once), line 39 (id check), `proposed_keys` (line 49) | Met |
| Trap (review 24/09/2026): captures pasted after the run that wrote the sheet | Line 28 (sheet headed with its run id and period key; row id `<period key>-<question id>-<surface>` in the first column), line 33 (one file per row under `tracking/answers/pasted/`, named from the row id), line 37 (a row with no capture gets no observation line; the next run converts it with the sheet's run id) | Met: no null line blocks the later capture, no duplicate id |
| Trap (review 24/09/2026): the person fills the sheet instead of saving files | Line 28 (no cells to fill, the person never edits the sheet), line 33 ("Không sửa bảng này.") | Met in this routine; `seo-standup` must count rows by pasted file, not by empty cells (patch requests AV P7, P8) |
| Trap: a pasted capture claiming a surface the map does not list | Line 28 | Met: not sampled, not counted |

## Rejected and unresolved

- Vendor price for entity packages (2019c, S34): rejected.
- Unmarked caps and counts: 3 tasks a month, 20 by 2 table, 40 to 60 minutes, second Thursday, one reminder after 3 days, "under 5 of 20 is not a crisis", refresh against a weekly cap, competitor naming limits, slang rule, AI Hay and Kiki sampling, Perplexity exclusion: unverified. A `[CG]` line or an opened source would allow each.
- 2063b two surfaces per question: `[S11]` does not support the pairing.
- 2204d mandatory "không phải là thuốc" sentence: not read on S8; deferred to `seo-draft-run` with that caveat.
- Clinics and finance as restricted industries (2204a): not covered by an opened source.
- Medical devices as a restricted industry (2204a): named in the routine on CONTRACT 10.1 rule 4 and Phần A 84 only; no opened source covers them. For the practitioner review (A1).
- "Not a condition for a mention" (2019c) rests on S12; the lead accepts S12 for it or the phrase is cut to "a paid press or entity package is an agency cost".
- `scripts/runlog.mjs` CADENCE omits `seo-answer-visibility` and rejects its run record ("not one of the seven"), so every run of the original and the variant ends in the UNRECORDED RUN fallback. Scripts are byte locked; the maintainer must fix the original script (Phần A open item 4).
- Both answer visibility sections of `CONTRACT.md` and `CAPABILITIES.md` sit after that file's `## Corrections` heading, under their own level two heading. Patch requests 4 and 5 touch only text under `## Answer visibility extension` and `## Answer visibility reads`; the lead confirms this is not text under Corrections.
- Every adopted rule still needs a real Vietnamese SEO practitioner's review before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/seo-employee-vn/routines/seo-answer-visibility/SKILL.md` | Edited as outlined | This ledger |
| `localization-reports/seo-employee-vn/seo-answer-visibility.md` | Created | This file |
| `scratchpad/vn/seo-employee-vn/sav-ask-sheet.txt`, `sav-summary-template.txt`, `sav-summary-example.txt`, `edit_sav.py` | Scratch | Copy check input, edit script |
| `scratchpad/vn/seo-employee-vn/fix_sav.py`, `fix_sav_ledger.py`, `fix_sav_ledger2.py`, `fix_sav_ledger3.py` | Scratch | Review fix scripts, 24/09/2026 |

### Review fixes, 24/09/2026

The independent reviewer returned FIX with twelve FIX findings and four NOTEs. Every FIX was applied; no finding was declined. Step 0 paragraph 1, the guardrails, parsed strings and `## Corrections` are untouched; nothing was shortened.

| # | Finding | What changed |
|---|---|---|
| 1 | FIX: captures in two places | Line 28: row id `<period key>-<question id>-<surface>` in the first column, no cells to fill, the person never edits the sheet, answers go only to `tracking/answers/pasted/`. Ask sheet line 33 replaced with the reviewer's text plus "Không sửa bảng này."; line 34 now says to save a file even when the question could not be asked. Standup and CONTRACT 10.4 changes are patch requests AV P7 and P8, applied by the final verifier on 24/09/2026 (patch-log rows 69, 70) |
| 2 | FIX: later captures never recorded | Line 37: a row with no capture gets no observation line and is counted as not yet asked; only a pasted blocked, unreadable or "không hỏi được" capture is null. Line 28: the sheet is headed with this run id and the period key; line 37 finds that run id through the row id the file name starts with |
| 3 | FIX: summary period | Line 64: the first line names the period of the sheet whose captures this run converted, plus the "Bảng hỏi AI tháng MM/YYYY đã soạn" line for the sheet written this run; template line 72 and example line 84 added; the example is labelled the October run that converted the September sheet |
| 4 | FIX: unit list source | Line 47 compares with the property block's `service_area`; never names a ward or commune; `not established` stages a `research` card for intake. Ledger 2187a |
| 5 | FIX: click claim | Line 41 as the reviewer wrote. Ledger S68 and 2029a |
| 6 | FIX: terms claim | Line 16 adds "or commercial automated use" |
| 7 | FIX: card ban scope | Line 47 as the reviewer wrote. S72 chunking sentence re-opened 24/09/2026 by this fixer and quoted in the sources table and row 2054a |
| 8 | FIX: "not a condition for a mention" | Routine phrase kept; row 2019c now cites S12 (Phần A, confirmed). If the lead rejects S12 for it, the phrase is cut as the reviewer wrote; listed under Rejected and unresolved |
| 9 | FIX: banned words only in English | Line 64 names `top`, `thắng`, `bảo đảm được trích`, `số 1`, `chắc chắn` and their English forms. Row 2169 |
| 10 | FIX: ask sheet first line | Line 31 replaced verbatim, "kỳ này" becomes "tháng này" as the reviewer wrote |
| 11 | FIX: glossary wording | Template lines 67, 69, 71 and example lines 79, 83 as the reviewer wrote ("Đợt hỏi AI tháng", "không tính vào số câu ở trên", "đã tạo thẻ việc trong") |
| 12 | FIX: example drops the action line | Example line 85 "Việc cần anh/chị làm: không có."; line 64 says only the "Chưa hỏi" line may be left out, when n is 0 |
| N1 | NOTE: Step 0 edits | Recorded in the outline rows for paragraphs 2 and 3; lead to confirm |
| N2 | NOTE: medical devices | Row 2204a and Rejected and unresolved |
| N3 | NOTE: foreign buyers field | Line 28 names the property block's `country`. Row 1963f |
| N4 | NOTE: "đoạn mở đầu bài" | Kept; glossary change is patch request AV P9, applied by the final verifier on 24/09/2026 (patch-log row 71) |

Routine checker, run before the review (kept for the record):

```
  WARN size        employees/seo-employee-vn/routines/seo-answer-visibility/SKILL.md  variant is 206 percent of the original. Rules, not the form, belong here
PASS WITH WARNINGS (0 fail, 1 warn)
```

Routine checker, final run after the review fixes, 24/09/2026:

```
  WARN vietnamese  employees/seo-employee-vn/routines/seo-answer-visibility/SKILL.md  review 2 lines outside fences as owner-facing wording, not agent instruction; first lines 37, 64
  WARN size        employees/seo-employee-vn/routines/seo-answer-visibility/SKILL.md  variant is 234 percent of the original. Rules, not the form, belong here
PASS WITH WARNINGS (0 fail, 2 warn)
```

WARN vietnamese explained: both lines are English instructions that quote owner strings the reviewer required. Line 37 quotes the marker "không hỏi được" the person writes in a capture file, so the routine can recognise it. Line 64 quotes the banned Vietnamese words and the fixed line for the sheet written this run. Neither is owner text written outside a fence. WARN size grew from 206 to 234 percent with the review fixes (row id, capture file rule, period labelling, banned words, one example line each for the sheet and the action).

WARN size explained: the original is the shortest routine in the kit (7,222 bytes) and delegates to the playbook. The variant adds a second observation route (the person's paste) that the original never needed: the ask sheet, its fixed Vietnamese instruction, capture conversion, the generative AI report rule, the representation, industry, spend and AI file rules, the Vietnamese summary template and a fictional example. Nothing from the form's prose is copied; each added sentence maps to a clause row above. Earlier runs also warned on `Sapo` inside a fence (the word "sapo" in the example, replaced by "đoạn mở đầu bài") and on one line of Vietnamese outside a fence ("anh/chị" in an instruction, rephrased); both fixed.

Copy check (`node scripts/copy-check.mjs --file <path> --dest plain`, the call shape routine line 86 documents), run from the variant kit:

```
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/sav-ask-sheet.txt  dest=plain  (voice: fallback)
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/sav-summary-template.txt  dest=plain  (voice: fallback)
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/sav-summary-example.txt  dest=plain  (voice: fallback)
```

Re-run after the review fixes, 24/09/2026, on the three blocks extracted again from the edited routine: all three `copy-check: PASS ... dest=plain (voice: fallback)`.

Dash scan (the lead's node one liner) over this ledger, the routine, the three copy check inputs and `edit_sav.py`, 24/09/2026:

```
no dashes
```

Dash scan re-run after the review fixes over the routine, this ledger, `_shared/patch-log.md`, the four fix scripts and the three copy check inputs, 24/09/2026:

```
no dashes
```

The 2019c row counts as ADOPT; the earlier draft of the count table (ADOPT 27, KEEP 55) was replaced by the script count above. Original kit byte preservation: `git -C .../Snagon-Agent-cos-vn status --short employees/seo-employee` prints nothing. Kit mode checks, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's after the patches land.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `seo-intake-and-map` | 1963 `[S68+CG]`; 2094 `[S20]` | Monthly set of 20 approved questions; an unaccented variant only when Search Console shows impressions for it | In the answer map seeding step add: "Seed a fixed set of twenty approved buyer questions, the size the owner approved for the monthly batch. Keep each question as buyers type it, with diacritics as the main form; add an unaccented twin only when the member's search performance data shows impressions for that exact variant, and version the set when you do. Record the owner's chosen answer surfaces and whether the business sells to foreign buyers." |
| `AEO-PLAYBOOK.md` | 1963 `[S68+CG]`, 2063 `[S11]`; Phần A 145, 198a | The permitted route for a consumer surface in the variant is a person's paste | In "## Observation contract", after "Capture the actual response and source links using a permitted route." insert: "In the Vietnam variant the permitted route for a consumer answer surface is a dated capture a person pasted under `tracking/answers/pasted/`; no routine submits a question to such a surface." |
| `AEO-PLAYBOOK.md` | 2029 `[S12,S68]`, 2054 `[S72]` | Generative AI report counts impressions only; Search ignores llms.txt | In "## Platform distinctions and primary sources", Google bullet, after "do not label those totals as an isolated AI metric." insert: "The Search Console generative AI performance report (available from 31/08/2026) counts impressions of the site's links in AI Overviews and AI Mode only. Google Search does not use llms.txt or other AI text files. Source: https://support.google.com/webmasters/answer/16984139?hl=vi and https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=vi" |
| `seo-draft-run` | 2204d `[S8]` | Proof on a supplement page is the paper number | Proposal only: when a refresh card from this routine concerns a health supplement, the draft cites the owner's paper number from `strategy/properties.md`; the mandatory "không phải là thuốc" sentence needs its instrument re-opened before it becomes a rule |
| `seo-standup` | 2102a `[S11]` | The person asks by hand | Under `## Waiting on you` (English heading kept) add one Vietnamese line when the current period's ask sheet has rows with no pasted capture: "Bảng hỏi AI kỳ này còn n câu chưa có câu trả lời dán lại (tracking/answers/ask-sheet-YYYY-MM.md)." Once per period, no push. Applied by the integrator as standup rule 7; after the review of 24/09/2026 its count must be by pasted file, see patch request AV P7 |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `SCHEDULE.md` | `## 1. The rows`, "This table is authoritative." | replace | `` \| `seo-answer-visibility` \| `thu` \| 11:00 \| 10:45 \| 14:00 \| `YYYY-Www` \| 40 min \| conditional \| `` | `` \| `seo-answer-visibility` \| `thu` \| 11:00 \| 10:45 \| 14:00 \| `YYYY-MM` \| 40 min \| conditional \| `` | 1963 `[S68+CG]` monthly, not every Thursday. Pipes shown escaped for this table; the row itself uses plain pipes |
| `SCHEDULE.md` | `## 2. The roster`, table row of `seo-answer-visibility` | replace | `` \| `seo-answer-visibility` \| Answer visibility \| Thursdays \| `` | `` \| `seo-answer-visibility` \| Answer visibility \| First Thursday of each month \| `` | 1963 `[S68+CG]`. Pipes escaped as above; the rest of the row is unchanged |
| `employee.json` | routine entry `"id": "seo-answer-visibility"` | replace | `"period_key": "YYYY-Www",` (the line inside that entry only) | `"period_key": "YYYY-MM",` | 1963 `[S68+CG]` |
| `CONTRACT.md` | `## Answer visibility extension`, "`seo-answer-visibility` is the eighth routine." | replace | `Observation-only submission of a public approved buyer question to an authorized existing search/chat surface is allowed; no private strategy is submitted.` | `In this Vietnam variant no routine submits a question to a consumer answer surface. The routine writes the ask sheet \`tracking/answers/ask-sheet-<period key>.md\`; a person asks each question by hand and saves the dated capture under \`tracking/answers/pasted/\`, which the member or the person on duty writes and \`seo-answer-visibility\` reads and never edits. No private strategy and no customer's personal data is placed in a question.` | 1963b `[S68+CG]`, 2063a and 2102 `[S11]`, 2181 `[S9]`; Phần A platform terms |
| `CAPABILITIES.md` | `## Answer visibility reads`, "`answer.visibility.read`: prefer" | replace | `` `answer.visibility.read`: prefer a member-provided dated capture/export of the actual surface, or an authorized browser route to Google AI Overviews/AI Mode, ChatGPT search, Gemini or another selected answer surface. Bing Webmaster Tools AI Performance may supply its own supported citation data. `` | `` `answer.visibility.read`: in this Vietnam variant the only route to a consumer answer surface is a dated capture a person pasted under `tracking/answers/pasted/`: ChatGPT, Gemini or Google AI Mode and AI Overviews, and the Cốc Cốc AI answer box. No routine queries them by browser, script, actor or API, because the Google Terms and spam policy, the OpenAI terms and the Cốc Cốc terms forbid automated querying or commercial automated use (checked 24/09/2026). A connected read of the member's own Search Console generative AI performance report is allowed; it counts impressions only. Bing, Copilot and Bing Webmaster Tools AI Performance are foreign-market surfaces, sampled only when `strategy/properties.md` names foreign buyers. `` | 1963b, 1963f `[S68+CG]`, 2024 `[S48]`, 2029a `[S12,S68]`, 2063a `[S11]`; Phần A 141, 145, 148, 198a |
| `INSTALL-PROMPT.md` | "Before declaring installation complete, read AEO-PLAYBOOK.md." | insert after | `Probe \`answer.visibility.read\` and report gaps.` | ` Create the empty folder \`tracking/answers/pasted/\` and tell the member, in Vietnamese, that each month a person asks the questions on the ask sheet by hand and saves what they saw there; the Employee never asks the AI surfaces itself.` | 1963b `[S68+CG]`, 2102a `[S11]` |
| `routines/seo-standup/SKILL.md` (a routine, logged here for the lead) | 0.3 read table, row `` `tracking/answers/ask-sheet-YYYY-MM.md`, the current month's only `` (line 72); `## Waiting on you` rule 7 (line 562) | replace, applied after review by the final verifier (AV P7, patch-log row 69) | `Its rows whose answer cells are all still empty, counted. Never a question, never an answer` and, in rule 7, `has rows whose answer cells are all still empty` | `Its row ids in the first column, counted where no file under \`tracking/answers/pasted/\` has a name starting with that row id. Never a question, never an answer` and `has rows with no file under \`tracking/answers/pasted/\` whose name starts with that row's id` | Review finding 1: the sheet has no answer cells; answers live only as files under `pasted/`. 1963b `[S68+CG]`, 2102a `[S11]` |
| `CONTRACT.md` | 10.4 path table, rows `tracking/answers/ask-sheet-YYYY-MM.md` and `tracking/answers/pasted/` (lines 1117, 1118) | replace, applied after review by the final verifier (AV P8, patch-log row 70) | `the member and the person on duty; \`seo-standup\` counts its unanswered rows` and `the member or the person on duty, by hand` | `the member and the person on duty, who never edit it; \`seo-standup\` counts its rows with no pasted file` and `the member or the person on duty, by hand, one file per sheet row, its name starting with the row id` | Review finding 1; same clauses |
| `_shared/glossary.md` | row `lead paragraph under H1` (line 20) | replace, applied after review by the final verifier (AV P9, patch-log row 71) | `\| lead paragraph under H1 \| sapo \|` | `\| lead paragraph under H1 \| sapo; in an owner facing summary: đoạn mở đầu bài \|` | Review NOTE: the answer summary example uses "đoạn mở đầu bài" to keep the vendor word Sapo out of owner text; every routine should use the same term. Pipes escaped as above; the rest of the row unchanged |
