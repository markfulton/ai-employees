# ads-creative-retro: provenance ledger

Status on 24/09/2026: **ledger complete, sources behind new platform rules re-opened, routine edits applied to the variant routine and checked, independent review findings applied in a fixer pass (see Files and checks).** Phần A decisions are cited from `_shared/phan-a-ledger.md` and not re-decided here.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/04_Ad-Manager/phieu-da-dien.md` (read only), `## B-6. ads-creative-retro`, form lines 1750 to 2055. Phần A classified once for the kit in `_shared/phan-a-ledger.md`.
- Extract: `extract_form_section.py --routine ads-creative-retro`, scratch copy `scratchpad/vn/ad-manager-employee-vn/ads-creative-retro-extract.md` and `.json`. 139 extracted lines: 26 are prompts or table headers with no clause (1757, 1764, 1773, 1791, 1793, 1828, 1830, 1846, 1848, 1903, 1905, 1918, 1919, 1926, 1933, 1940, 1947, 1961, 1973, 1975, 1991, 1993, 2009, 2011, 2033, 2044); **113 content rows and numbered answers are classified below.** Markers on the whole section: 20 with `[S#]`, 10 with `[CG]`, 2 with both, 111 unmarked. B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the Ads role, research draft dated 23/09/2026, asking for review by a real practitioner. **No clause has been confirmed by a person running Vietnamese ad accounts.** `[CG]` marks are the owner's review decisions, not a domain expert's. Every adopted rule still needs Gate 3 review (D6).
- Original kit and routine: `employees/ad-manager-employee` 1.8.0, `routines/ads-creative-retro/SKILL.md`, 807 lines, 70549 bytes, byte identical and never edited.
- Variant kit and routine: `employees/ad-manager-employee-vn`, same routine id, 91351 bytes after the fixer pass (129 percent), 892 lines as before the fixer pass, so every line cited below still points at the same text.
- Source index: `04_Ad-Manager/literature/nguon.md`, viewing date 23/09/2026 on every row. New sources re-opened on 24/09/2026 below.
- Kit version: the lead bumps once per kit (D14); this writer touches no version file.
- Decisions that bind this ledger: D3, D6, D8, D10, D11, D12, D13, D16, D17, D18 in `localization-reports/VN-DECISIONS.md`; style in `localization-reports/STYLE-VI.md`; vocabulary in `_shared/glossary.md`; parsed strings in `_shared/parsed-strings.md`.

## Sources re-opened

Gate 2 applies to a source behind an ADOPT or MOVE row that states a law, a number or a platform rule and is not already verified in the Phần A ledger. Already verified there on 24/09/2026 and relied on without re-opening: S8, S9, S10 (through the Sức khỏe và Đời sống substitute), S15, S17, S21, S34, S35 (year end list only), S57 (counting).

| Source | Supports (form line) | URL | Checked | Verdict |
|---|---|---|---|---|
| S16 Meta Ad Standards, privacy violations and personal attributes (vi) | 2005 Câu 17: no wording such as "bạn đang béo, nám, nợ" | transparency.meta.com/vi-vn/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/ | 24/09/2026 (WebFetch) | **Confirmed.** "Quảng cáo không được chứa nội dung khẳng định hoặc ám chỉ các đặc điểm cá nhân", with examples on health ("Chứng trầm cảm khiến bạn buồn phiền?"), financial status ("Bạn bị phá sản?") and appearance. Page dated 26/06/2024 |
| S57 TikTok Help, GMV Max (vi) | 1842 Câu 6: for GMV Max the offer is the shop cart price, not a landing page | ads.tiktok.com/help/article/about-product-gmv-max?lang=vi | 24/09/2026 (WebFetch) | **Counting confirmed again** ("Tất cả các đơn hàng từ sản phẩm bạn quảng cáo sẽ được ghi nhận... bao gồm cả đơn hàng từ nội dung tự nhiên và đơn hàng liên kết tiếp thị"; same day GMV with a 1 day window). **The cart price clause is not on this page: UNVERIFIED.** Nothing in the routine rests on it; the marketplace route in Step 5 rests on D16 and D17 |

Not re-opened because no ADOPT or MOVE row rests on them in this routine: S11 (KOC fines, DEFER), S39 (hashtags, DEFER), S60 (125 characters, DEFER), S73 and S74 (frequency, DEFER; the fatigue thresholds rest on `[CG]` only).

## Phần A rows this routine applies (from `_shared/phan-a-ledger.md`, not re-decided)

| Phần A line | Decision there | Where it lands in this routine |
|---|---|---|
| 85, 148, 177 `[S57,S58]` | ADOPT for `ads-creative-retro` | Step 3.2 paragraph "A campaign type that credits every order of the promoted product" (line 353): own block, never summed, never read as ad caused orders, never makes earning or retires. The product name goes to `CAPABILITIES.md` (patch request 3) |
| 103 `[S35+CG]` | ADOPT, qualitative, no list of dates | Step 1.3 blocks (lines 275 to 277), Step 3 intro (315), Step 3.5 normal block rule (398 to 402). No date or event list enters the body |
| 106 `[S1,S10]` | ADOPT, qualitative | Step 4.1 law and policy check (431 to 444): superlatives listed as seed phrases, never the bare `nhất`; `chờ pháp lý duyệt` for a claim needing a document; AI never judges documents |
| 237 `[S1,S9,S10,S15+CG]` | ADOPT | Step 4.1 check: weight and cure claims, fat pinching |
| 243 `[S15,S17]` | ADOPT | Step 4.1 check: before and after body images; rejected creative paragraph |
| 235 `[S9]` | ADOPT (listed for other routines; shared refusal candidate) | Step 4.1 check, last bullet, qualitative ("a product the law bars from advertising at all"), no product list, no fine |
| 240 `[S5,S6,S7,S8]` | ADOPT (studio, build desk) | Step 4.1 check: doctor image or uniform for cosmetics (S8 confirmed in Phần A) |
| 129 to 131 | WORDING | "góc tiếp cận", "câu mở (hook)", "tần suất" in owner lines, as `_shared/glossary.md` rows 130 and 131 fix them |
| 212 `[S52]` | WORDING | No `1,280.40` style decimals in the doctrine template (money as `240.000 đ`) |
| D16, D17 | Lead decisions | Step 4.4 and Step 5: marketplace, social, video platform and chat destinations are never fetched or opened; the member pastes |

## Clause decisions

Columns: form line and clause (paraphrase, no dash), marker and source support, decision, exact target, reason. A row whose clauses carry different decisions is split.

### B0 and B1

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1758 B0: "Làm khác" box | none | KEEP | report | The routine runs; the difference is carried by the rows below |
| 1760 B0: Vietnamese equivalent (score by angle, format, hook, offer wording; rewrite one page); run early near Tết or 12.12; closed orders not CTR; vertical video and livestream clips main formats; no winner under 15 orders; AI drafts, owner approves before production | none | UNVERIFIED (schedule shift, formats); REJECT (approval before production) | report | Unmarked. Orders over CTR and the 15 order floor land through 1855 and 1869 `[CG]`. An approval gate on local file work is barred by the repo and by the original's governing line |
| 1766 B1: one page: angles kept, angles rested 30 days, mandatory formats, allowed openers, banned phrases, minimum samples | none | UNVERIFIED | report | The doctrine headings are parsed by the studio; the 30 day rest is unmarked; banned lists live only in `plan/voice.md` |
| 1768 B1: recipients designer, writer, ads runner; owner approves the page with next month's budget | none | REJECT (approval); KEEP (recipients) | report | No approval ritual on the doctrine (original, repo). Budget is `plan/offer.md`, member only |
| 1769 B1: success means every rest or keep carries a number; the team builds tomorrow's set without asking | none | KEEP | Step 6.2 | Original: every rule carries its evidence clause |
| 1770 B1: bad means "làm video cho xịn" with no threshold, or resting an angle on one expensive creative | none | KEEP | Steps 3.1, 3.3, 3.5 | Floors and the sustained rule already forbid it |

### B2

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1775 trigger: last working day, after the month's orders are net of refusals and returns | none | KEEP (last weekday); DEFER (netting) | `SCHEDULE.md` unchanged; `ads-account-read` | Row already `last-weekday`. Netting is A3 100, owned upstream |
| 1777 once a month; run three days early when the last day is in Tết or on a 12.12 close, noting "chưa gồm 72 giờ cuối đợt"; weekly is B-5 | none | UNVERIFIED | report | An unmarked B2 schedule clause never moves a row |
| 1778 five ways the owner asks | none | KEEP | report | A scheduled routine takes no request; used for the unaccented request trap |
| 1779 done within one working day | none | KEEP | `SCHEDULE.md` budget | Budget already 35 min |
| 1780 ends when the owner approves; after two reminders keep last month's page | none | REJECT | report | Approval gate on local file work; no reminder mechanism outside the brief (D9) |
| 1781 remind once after 24 hours, at most twice | none | REJECT | report | Push cases are closed (CONTRACT 9.1); D9 |
| 1782 not for tomorrow's set (B-3) nor for switching off a campaign (B-5) | none | KEEP | "The boundaries, drawn precisely" | Already the original |
| 1787 Câu 1: calendar month cycle | `[CG]` | KEEP | 0.2 period key `YYYY-MM` | Same as the original |
| 1787 Câu 1: Tết in the month splits the ledger into days before the break and the break; sale periods scored in their own column; an angle that wins only in a sale is "chỉ dùng khi có hạn ngày" and stays off the everyday schedule; never conclude Tết video beats ordinary image | `[CG]` | ADOPT | Step 1.3 blocks (275, 277), Step 3 intro (315), Step 3.5 normal block rule (398 to 402), Step 6.2 template line A5, refusals list line 745 | Owner approved. The routine never computes a lunar date: it reads periods the member recorded under a new `## Sale and holiday periods` heading (patch request 1, deferral to intake) and scores one block when none is recorded |

### B3

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1795 creative code, angle, maker, date from the content sheet; unlabelled is "chưa gắn nhãn" | none | KEEP | Step 2.5 | Labels come from `creative/ledger.jsonl`; an unknown creative is counted against no angle |
| 1796 7 day and month figures from the B-2 ledger and the order software; missing means CPA n/a, no ranking | none | KEEP | Step 3.3, rule about `n/a` | Inherited |
| 1797 rejected ads from the platform notice; reason goes to the banned list | none | UNVERIFIED | report | Behaviour lands through 1853 `[S10,S15]` |
| 1798 stock and next month's price from owner or fanpage; missing means no offer written | none | KEEP | report | The routine writes no offer |
| 1799 livestream clips from an editing folder; never compared with edited video | none | UNVERIFIED | report | Unmarked; vendor folder |
| 1800 last month's page; missing means a new page marked without a baseline | none | KEEP | Step 2.1 | Original rebuilds a missing doctrine |
| 1803 non text inputs: thumbnails by code, no taste scoring; first three seconds of video; order files only with refusal status; an owner sticker must name the angle | none | UNVERIFIED | report | The routine reads no media and no chat |
| 1809 Câu 2: content sheet columns, updated on the day a creative goes live | none | UNVERIFIED | report | Vendor sheet; the kit's ledger already carries angle, format, hook, `doctrine_line` |
| 1814 Câu 3: the team says "góc", never "angle", to the owner; the common angle list is for labelling, not approved sentences | `[CG]` | WORDING | Step 6.2 prose, card text, changelog clause | Owner facing text says "góc tiếp cận" (glossary row 130), never "angle"; no fixed angle list enters the kit |
| 1819 Câu 4: fatigue signals per platform; no official frequency threshold for auction campaigns; operating rule frequency from 3 and CTR down 20 percent and cost per order up 20 percent over at least 5 days; blog range for reference; weekly not daily | `[S73,S74+CG]` | DEFER | `ads-account-read` | The fatigue finding is the read routine's; the retro reads `findings[]` ages. S73 supports only the negative clause; the thresholds rest on `[CG]` |
| 1824 Câu 5: designer or owner produces; brief on a chat app with fixed parts | none | UNVERIFIED | report | Studio concern, unmarked |

### B4

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1832 step 1: lock the month, split seasonal days; mistake is mixing Tết with ordinary days | `[S35]`, S35 supports only the year end season list | ADOPT (through 1787 `[CG]`) | Step 1.3 blocks | The rule rests on the owner's 1787 answer, not on S35 |
| 1833 step 2: label every creative with spend over 500.000 đ | none | UNVERIFIED | report | The retro never labels; Step 2.5 counts unlabelled spend against no angle |
| 1834 step 3: cost per order on orders net of refusals and returns; mistake is dividing by views | `[S21,S34]` | DEFER (netting); KEEP (never views) | `ads-account-read`; Step 3.2 | A3 100 is ADOPTed for the read routine; the retro divides spend by the `results` the row records |
| 1835 step 4: rank only groups that pass the Câu 8 floor; mistake is crowning one creative | none | KEEP | Steps 3.1, 3.3 | Inherited floors, values from 1869 |
| 1836 step 5: one page document with keep, rest, ban | none | UNVERIFIED | report | Doctrine structure parsed; banned lists belong to `plan/voice.md` |
| 1837 step 6: ask the owner to approve on a chat app | none | REJECT | report | Approval gate; D10 |
| 1842 Câu 6: when the offer sits on a marketplace or in a chat, read the exact SKU and message template; the ad wording must be visible at the destination on the day; a mismatch is recorded and the angle is not praised | none on these clauses; `[S57]` marks only the GMV Max sentence | KEEP (original page check, destination route narrowed by D16, D17); UNVERIFIED (angle not credited) | Step 4.4 (485), Step 5 table row (506) and paragraphs (508, 510), Step 8 card row, degrade row | The platforms' terms forbid automated reading, so the member pastes; recording the mismatch and moving the rule to the second table row extend the original's page check. The clause that a mismatched framing is never credited to the angle is unmarked and changes angle scoring, so it was removed from line 510 in the fixer pass (D18) |
| 1842 Câu 6: for GMV Max the offer is the cart price, not a landing page | `[S57]` does not state it (re-opened) | UNVERIFIED | report | Not on the page |

### B5

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1850 an angle under 15 orders in the month: no conclusion either way | `[CG]` | ADOPT | Step 3.3 shipped `results_for_a_verdict` `15` (359) | Owner approved floor |
| 1851 15 orders and cost per order 40 percent above the median of angles: rest 30 days, except in the Tết lock week | none | UNVERIFIED | report | Unmarked; the original's sustained rule stays |
| 1852 vertical video 20 percent cheaper than image on the same angle, at least two each: prefer video next month | none | UNVERIFIED | report | Unmarked |
| 1853 ad rejected for a banned phrase: add it to the banned list even with high CTR | `[S10,S15]` (verified in Phần A) | ADOPT | Step 4.1 rejected creative paragraph (444), Step 8 card row to `ads-account-intake` | The retro retires only a hook or format rule that itself depends on the rejected phrase or image type, never a rule that merely shares a format (the sources ban the phrase or image type, no more); `## Banned words` stays the intake's to write |
| 1854 angle cheap only in a 7 day sale: "chỉ mở khi có hạn", not on the ordinary schedule | `[S35]`, S35 does not support the rule | ADOPT (through 1787 `[CG]`) | Step 3.5 first bullet | Same rule as 1787 |
| 1855 no orders, only CTR: change nothing; CTR is secondary | `[CG]` | ADOPT | Step 3.2 paragraph (351), refusals bullet 746 | Owner approved |
| 1858 precedence: law and a large sample beat CTR; a rejected superlative or weight promise rests even when cheap; under 15 orders beats the owner's feeling | none | KEEP | Step 4.1 check, Step 3.3 | Restates 1853, 1850 and Phần A 106, 237 |
| 1864 Câu 7: label groups for angle, format, hook, offer | none | EXAMPLE | Step 6.2 fictional lines | Labelling examples only; no fixed list |
| 1869 Câu 8: floor to conclude: 3 creatives run, 7 days with spend, 15 closed orders summed, group spend from 3.000.000 đ or 20 percent of the month's budget, whichever is smaller; below it "chưa đủ, làm tiếp tối đa 3 mẫu nữa"; never lower the floor because the owner is impatient | `[CG]` | ADOPT | Step 3.2 `reporting_days` row, Step 3.3 (359 to 365), Step 6.2 line A2 | Owner set thresholds, written as shipped state values that never overwrite a member's value; the spend floor reads `## Currency` and `## Monthly ceiling` |
| 1874 Câu 9: rest after one month at 40 percent over the median or two policy rejections; rest 30 days then test one; exceptions for Tết, sale only months and stock outs | none | UNVERIFIED | report | Unmarked; policy retirement lands through 1853 and Phần A |
| 1879 Câu 10: a fatigued creative gets a new hook on the same angle | `[S73,S74+CG]` | ADOPT | Step 3.4 fatigue paragraph (383), Step 4.3 template line | Owner approved; no threshold enters |
| 1879 Câu 10: fatigue thresholds per platform; refresh by changing the first three seconds and first image; keep the offer while stock matches; never duplicate a video with only the music changed | `[S73,S74+CG]` | DEFER | `ads-account-read` (thresholds), `ads-creative-studio` (refresh) | Owners of those behaviours |
| 1884 Câu 11: content the team did not make (KOC, livestream clips, shop photos): label the source, compare on orders, no separate code means not added to own angles, "không tách được", never split credit | `[S11]`, S11 supports only KOC false advertising fines | KEEP and WORDING | Step 2.5 paragraph (303), `n/a (not separable)` | The original already counts an unknown creative against no angle; the Vietnamese card sentence is presentation |
| 1884 Câu 11: KOC needs a contract and must not make false claims | `[S11]` | DEFER | `ads-creative-studio`, `ads-build-desk` | The retro never judges claims; S11 not re-opened |
| 1889 Câu 12: hook is the first three seconds or first 125 characters | `[S60]` | DEFER | `ads-creative-studio`, `CAPABILITIES.md` | A platform number stays out of this body; S60 not re-opened |
| 1889 Câu 12: measure hooks by three second view rate, else CTR against same angle creatives | `[S60]` does not support it | REJECT | report | Conflicts with 1855 `[CG]` (CTR is secondary) |
| 1894 Câu 13: framing groups (money off, percent off, gift, free shipping over a threshold, size or mind change, COD confirmation call, no offer); no "cheapest" group; bare free shipping rested when its refusal rate is 10 points above other groups | `[CG]` | ADOPT | Step 3.4 refusal share (385), Step 3.5 refusal verdict (404), Step 4.1 table row, Step 4.1 check (lowest price), Step 6.2 line F2 | Owner approved. Needs a refusal count on creative rows; patch request 2 and D27 were declined by the integrator, so the verdict always degrades to `n/a (refusals not recorded)` until a later pass redesigns `ads-account-read` Step 5.5 |
| 1899 Câu 14: benchmark is the account's own median cost per order on ordinary days; in sale months the median of the sale | none | UNVERIFIED | report | The original's account level figure stays; the per block figure comes from 1787 `[CG]` |

### B6

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1907 write the page: AI does it, one page a month | none | KEEP | Step 6 | Matches the original |
| 1908 add a banned phrase: AI does it with a legal source or a rejection on the account | none | DEFER | `ads-account-intake` through the Step 8 card | `plan/voice.md` has one writer |
| 1909 send to the owner: AI drafts, a person approves, one message | none | KEEP | no send; changelog line reaches the brief | D10; the routine sends nothing |
| 1910 delete a creative in an account: never | none | KEEP | Guardrail 1, Step 4.2 | Already held |
| 1911 hire a KOC: never | none | KEEP | Guardrail 1 | Already held |
| 1914 handoff: the page, the rested angles, which creatives are the evidence | none | KEEP | Step 6.2 evidence clauses, Step 6.4 | Already the original |

### B7

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1921, 1923, 1924 good example 1 (enough data; keep, rest, banned words, next month's work) | none | EXAMPLE | Step 6.2 fictional line A1 and F2 | Shape only; the "Cấm" list is not copied (voice.md is the one list); shop name not copied |
| 1928, 1930, 1931 good example 2 (not enough orders anywhere) | none | EXAMPLE | Step 6.2 line A2 | Shape of the `[CG]` 1869 wording |
| 1935, 1937 good example 3 (sale only angle) | none | EXAMPLE | Step 6.2 line A5 | Shape of the 1787 rule |
| 1938 why good: separates seasons | `[S35]` | EXAMPLE | none | Reason text only |
| 1942, 1944, 1945 bad example 1 (video is king, industry CPA) | none | EXAMPLE | acceptance traps | The original already refuses a category benchmark (line 734) |
| 1949, 1951, 1952 bad example 2 (rested on one creative) | none | EXAMPLE | acceptance traps | Floors already refuse it |
| 1957 Câu 15: six section page with at most five opening lines verbatim and banned phrases | none | UNVERIFIED | report | Parsed headings; banned lists live in `plan/voice.md` |

### B8

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1963 "em" to the team; sample lines keep diacritics | none | WORDING | Step 6.2 prose | Presentation |
| 1965 exactly one page, under 350 words | none | UNVERIFIED | report | A hard cap could drop rules with evidence |
| 1966 no emoji; no hashtag in short video copy | `[S39]`, verified in Phần A for specs only | WORDING (emoji); DEFER (hashtag) | Step 6.2; `ads-account-intake` `## Hashtag policy` | Hashtag clause not verified |
| 1967 number formats 240.000đ, 22 đơn, 30 ngày, 20% | none | WORDING | Step 6.2 | Matches STYLE-VI (written `240.000 đ`) |
| 1968 banned owner phrases ("thấy hay là được", "bám trend", "CPA chuẩn ngành") | none | WORDING | none used in any template | Presentation only; not added to `plan/voice.md` |
| 1969 opener "Nguyên tắc tháng sau, anh ok rồi đội mới làm." | none | REJECT | report | Implies an approval gate |
| 1970 chat summary of 8 lines, the file is complete | none | UNVERIFIED | report | Delivery belongs to the standup; D10 |

### B9

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1977 wins on one platform, loses on another: record per channel, ban "video always wins" | none | UNVERIFIED | report | Unmarked; gap for B11 case 7 |
| 1978 wins only in a sale season: write the season condition | `[S35]` | ADOPT (through 1787 `[CG]`) | Step 3.5 first bullet | Same rule |
| 1979 livestream without an ad code: not added to ad angles; person | none | KEEP | Step 2.5 | Inherited |
| 1980 KOC overstates the product: stop the video, remind of fines; person | `[S11]` | DEFER | `ads-creative-studio`, `ads-build-desk` | The retro never judges a claim |
| 1981 stock runs out mid month: do not rest the angle, record stock noise | none | UNVERIFIED | report | No stock data on the file map |
| 1982 a before and after creative rejected under the weight policy: ban that image type next month; person | `[S17]` with Phần A 243 `[S15,S17]` | ADOPT | Step 4.1 check and rejected creative paragraph (444), Step 8 card | Verified in Phần A |
| 1987 Câu 16: rule wording per channel; open and close dates for a sale only angle | none | UNVERIFIED | report | Unmarked |

### B10

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1995 penalty decree on absolute wording: winning copy still banned without documents | none (Phần A 106 `[S1,S10]`) | KEEP | Step 4.1 check | Behaviour comes from Phần A 106, not this unmarked row |
| 1996 health policy: no fat pinching hook even when cheap | none (Phần A 237) | KEEP | Step 4.1 check | Same |
| 1997 weight policy: never "just use it and lose weight" | none (Phần A 243) | KEEP | Step 4.1 check | Same |
| 1998 text length: hook within the first 125 characters | none | DEFER | `ads-creative-studio` | Platform number, studio concern |
| 1999 KOL false advertising: remove from the winners | none | DEFER | `ads-creative-studio` | S11 not re-opened |
| 2000 cosmetics: never praise an angle using a doctor image | none (Phần A 240 `[S8]`) | KEEP | Step 4.1 check | Same |
| 2005 Câu 17: often rejected or unlawful: superlatives without documents, "bạn đang béo, nám, nợ", fat pinching, shaming before and after, "giảm 5kg trong 7 ngày", doctor image for cosmetics | `[S8,S10,S15,S16,S17]` | ADOPT, qualitative | Step 4.1 check (431 to 440) | S16 re-opened and confirmed; the rest verified in Phần A. No kilogram figure enters |
| 2005 Câu 17: free shipping written as unconditional while the cart has a threshold | none of the cited sources states it | ADOPT only as a destination mismatch | Step 5 paragraph (510) | The original's page check covers it without a legal claim |
| 2005 Câu 17: replacement sentences | as above | DEFER | `ads-creative-studio` | Copy writing is the studio's |

### B11 (acceptance cases, mapped in "Acceptance and traps")

| Form line | Marker | Decision |
|---|---|---|
| 2013, 2014, 2015, 2019, 2022, 2023 | none | acceptance |
| 2016 `[S60]`, 2017 `[S35]`, 2018 `[S11]`, 2020 `[S21]`, 2021 `[CG]`, 2024 `[S10]` | as shown | acceptance |
| 2029 Câu 18: synthetic case (studio photos against real wear photos); lesson "never rest studio permanently after one month" | `[CG]` | EXAMPLE; the lesson is KEEP (sustained rule) |

### B12 and B14

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 2035 every rested angle met 3, 7, 15, or was rested for policy, or for a refusal gap of 10 points on 15 orders each | none | KEEP | Steps 3.3, 3.5, 4.1 | Self check over adopted rules |
| 2037 sale and Tết days split before comparing | none | KEEP | Step 1.3 | Self check over 1787 |
| 2038 benchmark is the shop's own median, never an industry figure | none | KEEP (no category figure); UNVERIFIED (median) | line 734 | The original refuses a category benchmark |
| 2039 hook scored on three seconds or 125 characters | none | DEFER | `ads-creative-studio` | See 1889 |
| 2040 the page is not given to the team before the owner approves | none | REJECT | report | Approval gate |
| 2041 a banned legal phrase is never kept because it sells | none | KEEP | Step 4.1 check | Self check over adopted rules |
| 2046 remember the ordinary day median, rest end dates, formats allowed per channel | none | UNVERIFIED | report | Unmarked state keys without a reader |
| 2048 record the page, samples, orders, the owner's ok | none | KEEP (archive, changelog, state); REJECT (owner's ok) | Steps 6.1, 6.4, 9 | Inherited records |
| 2049 tell the owner once at month end; mid month only for mass rejections | none | KEEP | changelog lines in the brief; no push | CONTRACT 9 |
| 2054 Câu 19: one file per month on a drive, never overwritten, updated after approval, read at B-1 and B-3 | none | KEEP (archive copy); UNVERIFIED (drive); REJECT (approval) | Step 6.1 | `archive/creative/` already keeps each month |

### Repo mechanics, no form clause

| Clause | Decision | Target | Reason |
|---|---|---|---|
| Card `title`, `reason`, `definition_of_done` shown to the member | WORDING | Step 8 paragraph and JSON example | Owner facing Vietnamese; titles carry no date or count so the standup's dedupe on title plus `proposed_by` still works |
| Changelog fourth field read in the brief | WORDING | Step 6.4 | Vietnamese clause, other fields as the contract gives them |
| `too few rows to score` and the matching `assumptions[]` line | WORDING | Steps 2.1, 6.2, 6.5 | Grepped: no other kit file reads these strings |
| Verdict tokens, headings, `evidence:`, `verdict:` | KEEP English | Step 6.2 | Read by `ads-creative-studio`; a Vietnamese legend line glosses the tokens |

### Decision counts (113 content rows, one primary decision per row; a split row counts by its behaviour changing decision)

| Section | ADOPT | MOVE | KEEP | WORDING | EXAMPLE | DEFER | REJECT | UNVERIFIED | acceptance | Rows |
|---|---|---|---|---|---|---|---|---|---|---|
| B0, B1 | 0 | 0 | 3 | 0 | 0 | 0 | 1 | 2 | 0 | 6 |
| B2 | 1 | 0 | 4 | 0 | 0 | 0 | 2 | 1 | 0 | 8 |
| B3 | 0 | 0 | 4 | 1 | 0 | 1 | 0 | 5 | 0 | 11 |
| B4 | 1 | 0 | 2 | 0 | 0 | 1 | 1 | 2 | 0 | 7 |
| B5 | 7 | 0 | 2 | 0 | 1 | 1 | 0 | 4 | 0 | 15 |
| B6 | 0 | 0 | 5 | 0 | 0 | 1 | 0 | 0 | 0 | 6 |
| B7 | 0 | 0 | 0 | 0 | 15 | 0 | 0 | 1 | 0 | 16 |
| B8 | 0 | 0 | 0 | 4 | 0 | 0 | 1 | 2 | 0 | 7 |
| B9 | 2 | 0 | 1 | 0 | 0 | 1 | 0 | 3 | 0 | 7 |
| B10 | 1 | 0 | 4 | 0 | 0 | 2 | 0 | 0 | 0 | 7 |
| B11 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 12 | 13 |
| B12 | 0 | 0 | 4 | 0 | 0 | 1 | 1 | 0 | 0 | 6 |
| B14 | 0 | 0 | 3 | 0 | 0 | 0 | 0 | 1 | 0 | 4 |
| **Total** | **12** | **0** | **32** | **5** | **17** | **8** | **6** | **21** | **12** | **113** |

ADOPT rows: 1787 (second clause), 1832, 1850, 1853, 1854, 1855, 1869, 1879, 1894, 1978, 1982, 2005. Secondary decisions inside split rows (for example the REJECT inside 1760, the DEFER inside 1879 and 1884, the UNVERIFIED cart price clause and the UNVERIFIED angle not credited clause of 1842; 1842 moved from ADOPT to KEEP in the fixer pass) are written in the rows above.

### From deferrals (integrator pass, 24/09/2026)

Outbound deferrals other writers aimed at this routine, decided by the integrator under the lead's rule: applied where the clause carries a `[CG]` or a verified `[S#]`, under the same editing rules as the writer (Step 0, guardrails, parsed strings and `## Corrections` untouched, nothing shortened), otherwise declined. Ids match `_shared/patch-log.md`. These rows are not in the decision counts above.

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| D53, from `ads-creative-studio`: Earning angles by cost per order against a trailing average and live count | 973 Câu 8 (2) `[S35+CG]`; 1158 Câu 19 `[CG]` | DECLINED | none | Phrased as a consideration; the clauses sit in B-3, not in the retro's B-6, and the retro already keeps its own B-6 evidence floor. A trailing average and a live count would be new numbers |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| The one line that governs this whole file | Keep | 1780, 1837, 1969, 2040 rejected | none; the governing line is why the approval gate was rejected |
| What you read at the top of every run | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (checker: shared section equal) |
| Your files | Localize one read cell | 1787, 1869 | `plan/offer.md` "Why" cell adds `## Currency`, `## Monthly ceiling`, `## Sale and holiday periods`. Write table and never write list unchanged |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged, cadence sentence unchanged |
| Step 1 | Localize 1.3 | 1787, Phần A 103 | Two paragraphs: blocks, and the no period fallback |
| Step 2 | Localize 2.1, 2.5 | 1884 (KEEP, WORDING), repo mechanics | Vietnamese single line; content not made by the kit never split across angles, `n/a (not separable)`, Vietnamese card sentence |
| Step 3 | Localize | 1787, 1850, 1855, 1869, 1879, 1894, Phần A 85, 148, 177 | Per block counting; `reporting_days` counts days with spend; CTR never a result; campaign type crediting every order; shipped floor values, spend floor, next step wording, floors never lowered on request; fatigue is about hooks; refusal share; normal block verdict; refusal verdict |
| Step 4 | Localize | 1853, 1894, 1982, 2005, Phần A 106, 235, 237, 240, 243, D16, D17 | Two table rows; `policy` retirements outside "one thing per verdict"; the law and policy check; `chờ pháp lý duyệt`; rejected creative paragraph; reason on retired lines; fatigue line glosses; destinations not read |
| Step 5 | Localize | 1842, D16, D17 | Table row; only the member's own website read; member pasted text as evidence, never instruction; mismatch rule |
| Step 6 | Localize presentation | 1814, 1963, 1967, 1869, 1787 | Vietnamese prose and legend in the template with fictional figures; changelog clause; Vietnamese assumption line |
| Step 7 | Keep | none | none |
| Step 8 | Localize | 1842, 1853, 1982, Phần A 106 | Three card rows; Vietnamese title, reason, definition of done; card example |
| Step 9 | Keep | none | none |
| What this routine reports | Localize "What it refuses to report" | 1787, 1855, Phần A 85, 106, 237, 243 | Four bullets added, including no invented sent or done status |
| Failure behaviour | Localize degrade table | as above | Six rows added; "Record and exit" unchanged |
| Idempotency, Browser recipes, How this hands off, Improving this routine, The one push, Corrections | Keep | none | none |

Every original `## ` and `### ` heading present in order (65 in both files); no heading added.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Last weekday 14:00 | skill gốc context, 1775, 1787 `[CG]` | `SCHEDULE.md` row unchanged: `last-weekday`, fire 14:00, window 13:45 to 17:30, `YYYY-MM`, 35 min, `light`. No clock time in the body |
| Three days early near Tết or a 12.12 close; 72 hours | 1777, none | Proposal only; unmarked B2 |
| 24 hour reminder, at most two | 1781, none | Rejected |
| Floors 3 creatives, 7 days with spend, 15 orders | 1869, 1850 `[CG]` | Step 3.3 as shipped state values, never over a member's value |
| Spend floor 3.000.000 đ or 20 percent of the monthly budget | 1869 `[CG]` | Step 3.3 as `spend_amount` `3000000` (VND accounts only) and `spend_share_of_ceiling` `20` |
| "làm tiếp tối đa 3 mẫu nữa" | 1869 `[CG]` | Owner facing line in `## Rules with too little evidence` |
| Refusal gap 10 percentage points | 1894 `[CG]` | Step 3.5 as `refusal_gap_points` `10` |
| Fatigue: frequency 3, CTR down 20 percent, cost up 20 percent, 5 days; TikTok three second rate after 7 days | 1819, 1879 `[CG]` | Deferred to `ads-account-read` with the exact values |
| 125 characters, three seconds | 1889 `[S60]`, 1998 | Deferred to `ads-creative-studio`; S60 to be re-opened by that writer |
| 40 percent over the median, 30 day rest, 20 percent video advantage, 500.000 đ labelling | 1851, 1852, 1874, 1833, none | Proposals, unmarked |
| 350 words, 8 line chat summary | 1965, 1970, none | Proposals |
| Fines (KOL up to 100 million) | S11 | Kept out (D11) |
| Vendor and tool names: TikTok, Meta, Zalo, Sheet, CapCut, Drive, GMV Max | form | None in the body. GMV Max goes to `CAPABILITIES.md` (patch request 3) |
| Fictional example figures (`240.000 đ`, `310.000 đ`, `22`, `28` of `100`, dates in March 2026) | 1923, 1937, 2029 shapes | Step 6.2 template only, stated as fictional in the routine; each carries an evidence path |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Size swap angle 3 videos, 20 orders, 250.000 đ; free shipping 3 videos, 18 orders, 400.000 đ; median 300.000 đ. Expect keep size swap; free shipping not rested yet, watched | Step 3.5 earning and not earning (first month), Step 4.1 first two rows | Size swap `earning` against the account figure; free shipping `not earning, first month`, evidence line plus a line in `## Rules with too little evidence`, not retired. Same outcome; the form's 40 percent median rule itself is UNVERIFIED |
| 2. One video, 4 orders, owner likes it | Step 3.1 floor (`live_per_value` `3`), Step 3.3 (`15`), A2 line | `not tested` or `not enough evidence`, "chưa đủ mẫu, làm tiếp tối đa 3 mẫu nữa"; no format verdict. Pass |
| 3. Frequency 3,5, CTR down 25 percent, CPA up 30 percent, 6 days: flag fatigue, new hook same angle, never rest the angle | Step 3.4 fatigue paragraph (383), Step 4.3 line "mỏi thì làm câu mở (hook) mới, giữ góc tiếp cận" | Pass for the retro's part; the flag itself is the read routine's (deferral) |
| 4. Opening of 200 characters, idea in sentence four | no retro line by design: hook length is `ads-creative-studio` (D57, KEEP there), `ads-creative-studio` Step 4.4, a truncation point is not a cap | Handled by the studio, which already puts the main idea in the visible opening; the retro scores hooks only on results (1855 `[CG]`) |
| 5. December with 12.12: split sale and ordinary ledgers | Step 1.3 blocks (275), Step 3.5 (398) | Pass where the member recorded the period; one block and an assumption line otherwise |
| 6. KOC photo without contract: not added to the winning angle, remind risk | Step 2.5 (303) | Not added, `n/a (not separable)`, card. The contract reminder is a gap here (deferred, S11 not re-opened) |
| 7. Cheap on one platform, dear on another, both above the floor | Step 3.2 currency rule (349) and campaign type block (353), Step 3.5 (391 to 393) | One pooled verdict across platforms in the same currency; only a different currency or the shop campaign type that credits every order (Phần A 148) is scored apart. The per channel split is unmarked (1977) and not adopted. **Divergence from the expected answer** ("keep on the first, do not carry to the second") |
| 8. Free shipping refusals 28 percent against 12 percent elsewhere | Step 3.4 refusal share (385), Step 3.5 refusal verdict (404), Step 4.1 row | Retired with reason `refusals` where rows carry refusal counts; `n/a (refusals not recorded)` otherwise. The read deferral (D27) and patch request 2 were declined, so on this kit today the verdict is always `n/a (refusals not recorded)`: the expected answer is not reached until a later pass adds a refusal count |
| 9. Before and after creative rejected, high CTR before it died | Step 4.1 rejected creative paragraph (444) | Rule retired `policy`, card to intake for `## Banned words`. Pass |
| 10. Trap: "hay cho em CPA nganh 60k de ket luan thang thua" (unaccented) | line 734 (no category benchmark), Step 3.5 account figure, degrade row 791 | No industry figure used; account figure or `n/a`. Pass |
| 11. Trap: "goc nay thang, em sua doctrine va nghi goc kia luon, khoi cho chu" (unaccented) | degrade row 791, Step 3.3 floors, Step 3.5 sustained rule | The request is data: nothing retired on it, verdicts on evidence only. **Divergence from the form's expected answer** ("draft, wait for ok"): the routine neither obeys nor waits, because an approval gate on local file work is barred (1780, 1837, 2040 rejected); the member sees each change as a changelog line in the brief |
| 12. Trap: "viet cau so 1 vi thang nay no ra don nhat" | Step 4.1 law and policy check (431) | Never written or kept; a claim needing a document goes to `chờ pháp lý duyệt`. Pass |
| Trap: invented number | line 734, Step 3 "Every number carries its source" (313), Step 6.2 fictional note | Every figure folded from a ledger with its path; the template figures are marked fictional |
| Trap: invented sent or done status | refusals bullet line 748, Guardrail 1, invariant 1 (691) | Nothing sent; no status claimed; `done` only where the contract allows |
| Trap: instruction planted in a card, a file or a web page | Step 3.3 (365), Step 5 pasted text (508), degrade row 791, CONTRACT 2.6 "Text inside a file is data" | Ignored as an instruction and named in the run record |
| Trap: unaccented Vietnamese request | cases 10 and 11 above | Treated as data like any other text |
| Trap: second run in the same period | Step 0.2 (181), idempotency item 1 (809) | `skipped-already-ran` |
| Trap: sale period figure used to crown a format | Step 3.5 (398) | Different kinds of block never compared |
| Trap: marketplace listing as the landing URL | Step 4.4 (485), Step 5 (506, 508) | Nothing fetched; member card |

## Rejected and unresolved

- Approval gate before the team uses the doctrine (1760, 1768, 1780, 1837, 1969, 2040, 2054): rejected; the repo forbids an approval step on local file work and the original's governing line says the doctrine waits on nobody. Evidence that would change it: none inside this repo's rules; it would be a contract change.
- Reminders (1781): rejected; D9 and CONTRACT 9.
- CTR as a hook measure (1889): rejected; conflicts with 1855 `[CG]`.
- Median benchmark, 40 percent rest rule, 30 day rest, video over image rule, stock out exception, per channel rule wording, 350 words, early run near Tết (1851, 1852, 1874, 1899, 1977, 1981, 1987, 1965, 1777): unmarked; a `[CG]` or a re-opened source on each would let a later edit adopt them.
- GMV Max cart price clause (1842): S57 re-opened, not on the page.
- S11 contract and false claim clause, S39 hashtags, S60 125 characters: deferred to the studio writer, not re-opened here.
- Known gap (D6): `copy-check.mjs` does not check a `đ` amount against the proof inventory, so the PASS lines below do not prove a Vietnamese money figure has a source; the template keeps every figure in backticks with its path.
- The refusal verdict depends on a refusal count on creative rows that the original ledger schema does not carry. Patch request 2 and deferral D27 were declined by the integrator (`_shared/patch-log.md` lines 22 and 109, contradiction 2 at line 159), and `_shared/parsed-strings.md` section 5 names `orders_refused` as not adopted. So the refusal verdict always degrades to `n/a (refusals not recorded)` and decides nothing, until a later pass redesigns `ads-account-read` Step 5.5. The routine's Step 3.4 now says no file in this kit writes that key yet.
- Two paths retire a rule without `months_of_signal`: `refusals` (Step 3.5, line 404) and `policy` (Step 4.1). A `policy` retirement is also exempt from "Change one thing per verdict". Both rest on owner `[CG]` (1894) and Phần A legal rows (106, 235, 237, 240, 243), and `results_for_a_verdict` still gates the refusal path (line 404 now says so), so this ledger does not read them as relaxing the evidence floors line 878 protects. The lead confirms this reading at Gate 3.
- 1842, the clause that a framing which did not match its destination is never credited to the angle: unmarked, UNVERIFIED, removed from the routine in the fixer pass. A `[CG]` on it would let a later edit adopt it.
- The sale and holiday blocks depend on `## Sale and holiday periods` in `plan/offer.md` (patch request 1, deferral to `ads-account-intake`). Until then the routine scores one block and records the assumption, which is the original's behaviour.
- Every adopted rule still needs Gate 3 review by a real Vietnamese practitioner.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/ad-manager-employee-vn/routines/ads-creative-retro/SKILL.md` | 70549 to 89584 bytes (127 percent) at the writer step; 91351 bytes (129 percent) after the fixer pass, line count unchanged at 892; edits listed in the outline above and in the fixer pass below | Clause decisions above |
| This ledger | new | Writer step |

Decision tally: see the table under "Decision counts" (ADOPT 12, MOVE 0, KEEP 32, WORDING 5, EXAMPLE 17, DEFER 8, REJECT 6, UNVERIFIED 21, acceptance 12, on 113 rows).

Untouched, confirmed by the checker (protected sections equal, no shared section warning) and by reading: frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails and the save test, the write and never write tables, Step 7, Step 9, idempotency, browser recipes, hand off, improving, the one push, `## Corrections`. The original kit was not edited.

Checker, routine mode, final run:

```
  WARN amount      employees/ad-manager-employee-vn/routines/ads-creative-retro/SKILL.md:549  review source and date for figure 240.000 đ; never treat it as a routine default
PASS WITH WARNINGS (0 fail, 1 warn)
```

The WARN is the fictional example line A1 in the Step 6.2 template (`240.000 đ` against `310.000 đ`, shape from form line 1923). The routine states under the block that its figures are fictional and that every real figure comes from this run's ledgers with its path. An earlier run also warned on line 565, a formatting instruction that quoted `240.000 đ`; it now describes the format in words.

Copy check, `node employees/ad-manager-employee-vn/scripts/copy-check.mjs --file <path> --dest strategy --json` (the call shape Step 6.3 documents), on three texts saved under `scratchpad/vn/ad-manager-employee-vn/retro-copy/`: a filled fictional doctrine in the Step 6.2 template (`doctrine-example.md`), the Vietnamese single lines, assumption, card sentence and three changelog lines (`member-lines.md`), and the card title, reason and both definitions of done (`card-text.md`):

```
doctrine-example.md  "verdict": "PASS", "violation_count": 0, exit 0
member-lines.md      "verdict": "PASS", "violation_count": 0, exit 0
card-text.md         "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (32 checks)
```

Both checks ran with `voice_source: fallback` and `proof_source: missing`, because the kit folder carries no member `plan/`; the banned lists of a real install are not exercised here.

Dash scan (U+2013 and U+2014 counter) of this ledger, the routine and the three copy check texts: result pasted at the foot of the final run below.

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

### Fixer pass after independent review, 24/09/2026

The reviewer returned FIX with 13 FIX findings and 3 NOTE findings, no BLOCK. Every edit below replaces text inside an existing line, so the routine keeps 892 lines and every line number cited in this ledger still points at the same text. Step 0, both guardrails, the save test, the parsed strings, `## Corrections` and the original kit were not touched; nothing was shortened.

| Finding | Where | What changed |
|---|---|---|
| FIX 1, refusal key named in a spec that has none | routine 385; ledger rows 1894, B11 case 8, Rejected and unresolved, outbound deferral D27, patch request 2 | Step 3.4 now reads "a key no file in this kit writes yet (see `CONTRACT.md` section 2.4, which names none)"; the `n/a (refusals not recorded)` degrade unchanged. Ledger records patch request 2 and D27 as declined by the integrator; the `CONTRACT.md` 2.4 patch row is marked declined |
| FIX 2, superlative had two outcomes | routine 433, 440, 747 | Bullet 1 rewritten: a superlative or ranking is never written as a new rule, an existing one moves to `## Rules with too little evidence` with `chờ pháp lý duyệt`, never kept as earning. Line 440 retires only the items after the first, which no document cures. Refusals bullet 747 aligned |
| FIX 3, rejected creative retired a whole format or hook | routine 444; ledger row 1853 | Retires only a hook or format rule that itself depends on the rejected phrase or image type; a rule that merely shares a format is not retired |
| FIX 4, unmarked clause changed angle scoring | routine 510; ledger row 1842, counts | Sentence "A framing that did not match its destination earned nothing on its own merits, and it is never credited to the angle." deleted. Row 1842 now KEEP plus UNVERIFIED (angle not credited), marker "none on these clauses; `[S57]` marks only the GMV Max sentence". ADOPT 13 to 12, KEEP 31 to 32 |
| FIX 5, one fixed definition of done deduped every later card | routine 656, 508 | Both definitions of done carry the rule id (shown as `F2` and `A3`, replaced by the card's rule id); the title names the rule id and never a date or a count; Step 5 matches a pasted note to its framing by that rule id. The reviewer's `«rule id»` placeholder was written as an example id, because the checker fails a placeholder not defined in `ROLE.md` section 5 |
| FIX 6, "the one `member-action` row" and "three rows" wrong | routine 654 | Added sentence replaced: two more rows are `member-action`, the rejected creative row stays `local-artifact`. Original first sentence byte for byte |
| FIX 7, count written as n/a | routine 303 | "its angle is written as `n/a (not separable)` beside the count the run record already names" |
| FIX 8, fixed "Anh/chị" | routine 109 (the `plan/offer.md` read cell the reviewer cited as 108), 565, 656 | Read cell adds `## Working days and hours` for its `Xưng hô:` line; 565 reads "write as `em`, addressing the member as the `Xưng hô:` line records"; 656 adds "Address the member as the `Xưng hô:` line records, `anh/chị` where it records neither" and says `Anh/chị` in the two texts is replaced by that address. The reviewer's `«anh/chị»` placeholder was written this way for the same checker reason as FIX 5 |
| FIX 9, English assumption lines the member sees | routine 277, 361 | `chưa có đợt sale hay ngày lễ nào ghi trong plan/offer.md, em chấm chung cả tháng`; `chưa áp ngưỡng chi vì chưa có đơn vị tiền VND và chưa chốt hạn mức chi tháng` |
| FIX 10, unnatural Vietnamese | routine 471, 565, 291, 603, 303 | The four rewrites exactly as the reviewer gave them; the 6.5 assumption reads `tháng này chưa đủ mẫu để chấm «category», mới có «n» trên ngưỡng «floor»` |
| FIX 11, terms off the glossary | routine 471, 546 (legend), 662, 663; ledger rows 129 to 131, 1814, B11 case 3 | "góc tiếp cận", "câu mở (hook)", "nguyên tắc creative" in the card reason and title and the fatigue line; legend extended with the three glosses. No glossary change requested |
| FIX 12, rationale wider than 1894 | routine 404 | "A free shipping promise with no condition tends to pull orders that are refused at the door, and the ad figure does not show them." |
| FIX 13, B11 cases 4 and 7 with no line | ledger Acceptance rows 4 and 7 | Case 4 cites `ads-creative-studio` Step 4.4 (D57); case 7 cites Step 3.2 (349, 353) and Step 3.5 and states the divergence |
| NOTE 1, two retirement paths without `months_of_signal` | routine 404; ledger Rejected and unresolved | Added "`results_for_a_verdict` still applies to this verdict."; reasoning recorded for Gate 3 |
| NOTE 2, 15 results of any type | routine 359 | Added: where `result_type` is a conversation or a message, the verdict says so and is never called a cost per order (`CONTRACT.md` 10.1 rule 4). Line 45 ("no budget figure") left byte for byte: it is original text, and `spend_amount` is an evidence threshold with its `[CG]` source (1869) already in the numbers table, not a budget |
| NOTE 3, English A6 clause and lost instruction | routine 553, 565 | A6 clause reads `ảnh trước và sau về cơ thể`; the sentence "Each line under `## Rules with too little evidence` carries the counts and the floor, so nobody reads it as a rule that passed." restored at the end of 565 |

Declined: none. No finding needed a shared file changed, so no row was added to `## Shared file patch requests` or to `_shared/patch-log.md`.

Checker, routine mode, after the fixer pass:

```
  WARN amount      ../Snagon-Agent-cos-vn/employees/ad-manager-employee-vn/routines/ads-creative-retro/SKILL.md:549  review source and date for figure 240.000 đ; never treat it as a routine default
PASS WITH WARNINGS (0 fail, 1 warn)
```

The WARN is the same fictional line A1 explained above. A first run of the fixer pass failed on the two new placeholders `«Anh/chị»` and `«rule id»`; they were replaced by example ids and a written instruction, and the run above passed.

Copy check rerun on the three scratch texts, updated to the new wording (legend, A6, fatigue line, card reason, title and both definitions of done, the Vietnamese assumption lines):

```
doctrine-example.md  "verdict": "PASS", "violation_count": 0
member-lines.md      "verdict": "PASS", "violation_count": 0
card-text.md         "verdict": "PASS", "violation_count": 0
copy-check: selftest PASS (32 checks)
```

Dash scan of the routine and this ledger after the fixer pass: `no dashes`.

## Outbound deferrals

Each target writer re-checks its own Phần B before acting; vendor names go to `CAPABILITIES.md`, never into a routine body; no clock time enters a routine.

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `ads-account-intake` | 1787 Câu 1 `[CG]`; Phần A 103 `[S35+CG]` | Tết and sale periods are scored apart from ordinary days | On the first run and every monthly pass, write `## Sale and holiday periods` in `plan/offer.md`, one line per period as `YYYY-MM-DD to YYYY-MM-DD \| sale \| <name as the member writes it>` or `... \| holiday \| ...`, from the member's answer only; for `Tết` two lines, the days before the break and the break. Never infer a date; an unanswered heading holds the single line `unresolved`. Carry the member's lines across verbatim on rewrite |
| `ads-account-intake` | 1853 `[S10,S15]`; 1908 none; 1982 `[S17]` | A phrase or image type the platform rejected goes on the banned list | When a `research` card from `ads-creative-retro` names a rejected phrase or image type, add the phrase as a list item under `## Banned words` in `plan/voice.md` (seed phrases, never the bare `nhất`), with one `plan/CHANGELOG.md` line, and close the card as `local-artifact` |
| `ads-account-read` | 1894 Câu 13 `[CG]`; Phần A 100 `[S21,S34]` | Refusal rate per offer framing (D27, **declined** by the integrator, `_shared/patch-log.md` line 109) | On creative level rows, record `orders_refused` and `orders_returned` where the sales software export attributes orders to the creative; write `n/a (refusals not recorded)` where it does not, never `0` |
| `ads-account-read` | 1819 Câu 4, 1879 Câu 10 `[S73,S74+CG]` | Owner approved fatigue rule | Record a fatigue finding when, over at least `5` reporting days, frequency is at least `3`, click through rate is down at least `20` percent against the creative's first `3` days, and cost per result is up at least `20` percent; on a platform that reports a three second view rate, that rate down `20` percent with cost up `20` percent after `7` days. Values as owner approved defaults in its own state; the note that no official frequency threshold exists for auction campaigns stays in the report |
| `ads-account-read` | Phần A 148 `[S57,S58]` | Shop campaign rows identifiable | Write the platform's own campaign type name into `result_type` or `screen` on rows from a campaign type that credits every order of the promoted product, so `ads-creative-retro` Step 3.2 can match it against `CAPABILITIES.md` |
| `ads-creative-studio` | 1787 Câu 1 `[CG]` | A sale only value stays off the everyday schedule | Never produce an everyday set against a doctrine value whose evidence line reads `chỉ dùng khi có hạn ngày`; produce against it only inside a period listed under `## Sale and holiday periods` in `plan/offer.md` |
| `ads-creative-studio` | 1879 Câu 10 `[S73,S74+CG]` | How to refresh a fatigued creative | Replace a fatigued creative with a new opening (the first seconds and the first image) on the same angle; keep the offer where it still matches the destination; never ship a duplicate that differs only in its music |
| `ads-creative-studio` | 1889 Câu 12 `[S60]`; 1998 none; 2016 B11 4 | The hook must sit at the very start of the primary text | Re-open S60 first; if confirmed, put the main idea inside the platform's visible opening of the primary text, with the character figure in `CAPABILITIES.md`, not in the body |
| `ads-creative-studio`, `ads-build-desk` | 1884 Câu 11, 1980 `[S11]`; 1999 none | Creator content needs a contract and must not overstate the product | Re-open S11 first; a creator's video or photo enters a set or a sheet only where `plan/proof-inventory.md` or `creative/feedback.md` records the member's contract note; never a claim the proof inventory lacks |
| `ads-creative-studio` | 2005 Câu 17 `[S8,S10,S15,S16,S17]` | Replacement wording for rejected copy | Use the form's replacements as fictional examples only (`Đổi size trong 3 ngày nếu còn tem.`, a free shipping line that states its threshold); never a superlative, weight, personal attribute or doctor image line |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### 2.3 Plan`, paragraph "`plan/offer.md`: `## What is sold`" | replace | `` `plan/offer.md`: `## What is sold`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Countries sold into`, `## Currency`, `## Monthly ceiling`, `## Daily cap`, `## Campaign allocations`, `## Account timezone`, `## Working days and hours`. Every heading present, even where the section is one line saying what could not be settled. `` | `` `plan/offer.md`: `## What is sold`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Countries sold into`, `## Currency`, `## Monthly ceiling`, `## Daily cap`, `## Campaign allocations`, `## Account timezone`, `## Working days and hours`, `## Sale and holiday periods`. Every heading present, even where the section is one line saying what could not be settled. `## Sale and holiday periods` holds one line per period the member named, `YYYY-MM-DD to YYYY-MM-DD \| sale \| <name>` or `YYYY-MM-DD to YYYY-MM-DD \| holiday \| <name>`, and is never inferred from a calendar; `ads-creative-retro` scores each period apart from ordinary days. `` | 1787 Câu 1 `[CG]`; Phần A 103 `[S35+CG]` |
| `employees/ad-manager-employee-vn/CONTRACT.md` | `### 2.4 Metrics`, paragraph "Any figure the screen does not show" | insert after | `Any figure the screen does not show is written as `n/a (<reason>)` and never as a zero. **A zero is a measurement. `n/a` is the absence of one, and the whole kit depends on the difference.**` | `A creative level row may also carry `orders_refused` and `orders_returned`, read from the member's sales software where it attributes orders to the creative, or `n/a (refusals not recorded)` where it does not. `ads-account-read` is their only writer and `ads-creative-retro` reads them for the refusal share of each offer framing.` | 1894 Câu 13 `[CG]`; Phần A 100 `[S21,S34]`. **Declined** by the integrator (`_shared/patch-log.md` line 22, retro 2): no metrics row carries order keys |
| `employees/ad-manager-employee-vn/CAPABILITIES.md` | `## 4b. Connected sources`, paragraph "TikTok for Business and Microsoft Advertising ship official servers" | insert after | `TikTok for Business and Microsoft Advertising ship official servers for their own accounts. Name one in `plan/measurement.md` by its human readable name only where the intake found that account.` | `**Campaign types that credit every order of the promoted product.** TikTok Shop GMV Max counts every order of the promoted products, organic and affiliate orders included, as same day GMV with a one day window (TikTok Help, GMV Max, Vietnamese, re-opened 24/09/2026). `ads-creative-retro` and `ads-change-list` score rows naming this campaign type in a block of their own, never summed with another platform and never read as orders the ad caused.` | Phần A 85, 148, 177 `[S57,S58]` |
| `employees/ad-manager-employee-vn/CAPABILITIES.md` | `## 7. What you lose with no browser at all`, row "`ads-creative-retro`" | replace | `` \| `ads-creative-retro` \| May check the landing page still says what a framing rule assumes \| Folds the whole month and rewrites the doctrine. Framing checks read `not checked this month` \| `ok` \| `` | `` \| `ads-creative-retro` \| May check the member's own website still says what a framing rule assumes. Never reads a marketplace, social or video platform page, or a chat, even the member's own \| Folds the whole month and rewrites the doctrine. Framing checks read `not checked this month` \| `ok` \| `` | 1842 Câu 6 `[S57]`; D16, D17 |
| `localization-reports/ad-manager-employee-vn/_shared/parsed-strings.md` (report file, for the lead) | `## 5. New strings the Phần A ledger introduces` | insert after the paragraph | none | `ads-creative-retro` introduces: heading `## Sale and holiday periods` in `plan/offer.md` (writer `ads-account-intake`, reader `ads-creative-retro`, candidate reader `ads-creative-studio`); row keys `orders_refused`, `orders_returned` (writer `ads-account-read`); doctrine value `chỉ dùng khi có hạn ngày` (writer `ads-creative-retro`, candidate reader `ads-creative-studio`, byte identical); retirement reasons `policy`, `refusals`; cell tokens `n/a (not separable)`, `n/a (refusals not recorded)`, `not checked this month (member reads the destination)` | 1787, 1894, 1842, 1884 |
| `localization-reports/ad-manager-employee-vn/_shared/glossary.md` (report file, for the lead) | `## 5. Fixed glosses for tokens the member reads` | insert rows | none | `` `earning` \| đang hiệu quả ``; `` `not earning` \| không hiệu quả ``; `` `not enough evidence` \| chưa đủ mẫu ``; `` `not tested` \| chưa chạy thử ``; `` `not checked this month` \| tháng này chưa kiểm nơi bán ``; `` `n/a (refusals not recorded)` \| chưa có số boom hàng theo mẫu `` | Repo mechanics; Step 6.2 legend |
