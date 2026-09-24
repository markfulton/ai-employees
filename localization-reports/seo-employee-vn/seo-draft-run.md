# seo-draft-run: provenance ledger

Status on 2026-09-24: **ledger complete, sources behind adopted law, number and platform clauses re-opened, variant routine edited, routine checker PASS with no warning; reviewer FIX findings applied the same day (see Files and checks).** Shared file changes are requested below, never made here.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, `## B-3. seo-draft-run`, form lines 838 to 1134. Phần A decisions are cited from `_shared/phan-a-ledger.md` by line (for example "A 203c"), never re-decided here.
- Extract: `extract_form_section.py --routine seo-draft-run`, scratch `scratchpad/vn/seo-employee-vn/seo-draft-run-extract.md` and `.json`. 139 rows and answers: 16 with `[S#]`, 11 with `[CG]`, 7 with both, 119 unmarked. B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the SEO/AEO role, research draft dated 23/09/2026. **No clause has been confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/seo-employee` 1.9.0, `routines/seo-draft-run/SKILL.md`, 723 lines, 73,627 bytes.
- Variant kit and routine: `employees/seo-employee-vn`, same routine id, 100,340 bytes after the reviewer fixes of 24/09/2026 (136 percent of the original; 96,181 bytes before them).
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version before and after: 1.9.0 before; the bump is set once for the whole kit by the lead (D14), not by this routine.
- Gate 1: the kit glossary (`_shared/glossary.md`) already records the reusable Snagon Vietnamese wording for this routine ("bản nháp", "ảnh đại diện bài", "alt (mô tả ảnh)", "liên kết nguồn uy tín", "lời kêu gọi cuối bài"). Nothing new searched.

## Sources re-opened

Sources already confirmed in the Phần A ledger on 24/09/2026 and relied on here without a second opening: S8 (general TPBVSK claims), S11, S39, S67, S69, S75 (carries the S71 fact). Opened again or for the first time for this routine:

| Source | URL | Date checked | What the adopted clause needs | Verdict |
|---|---|---|---|---|
| S8 | https://suckhoedoisong.vn/bo-y-te-luu-y-khong-mua-thuc-pham-bao-ve-suc-khoe-co-cac-dau-hieu-quang-cao-sau-day-169250419002019703.htm | 24/09/2026 | The exact required statement for a TPBVSK (Câu 16, line 1085), the lookup portal (A 163a) | Confirmed, article 19/04/2025: "Thực phẩm này không phải là thuốc và không có tác dụng thay thế thuốc chữa bệnh"; red flags include cure claims, fast results, doctor endorsements, a missing statement; lookup at vfa.gov.vn, dichvucong.moh.gov.vn, congkhaiyte.moh.gov.vn |
| S3 | https://pbgdpl.camau.gov.vn/15-nhom-hanh-vi-bi-nghiem-cam-trong-hoat-dong-quang-cao.7202 | 24/09/2026 | Banned advertising behaviours behind Câu 16 (line 1085) | Confirmed, page dated 27/10/2025, amended Luật Quảng cáo passed 16/06/2025, effective 01/01/2026: item 9 misleading claims about business or supply capacity, item 10 comparison without lawful documents, item 11 "nhất, duy nhất, tốt nhất, số một" without lawful documents. The page says nothing specific about supplements as medicine; that clause rests on S8 |
| S41 | https://help.sapo.vn/huong-dan-thiet-ke-giao-dien-chuan-seo-cho-website | 24/09/2026 | Sapo Web title and description limits (lines 928, 1057, 1096, 1113) | WebFetch rendered navigation only, as in Phần A. Raw HTML read with curl on the same URL: "Thẻ tiêu đề này giới hạn 60 ký tự" for products, collections, content pages and blog posts, and description "giới hạn 320 ký tự ... được cắt tự động khi đủ 320 ký tự". **Confirmed on 24/09/2026**, upgrading the Phần A "not confirmed". Supporting pages found by WebSearch: https://help.sapo.vn/cach-toi-uu-the-tieu-de-va-mo-ta-cho-website-ban-hang-sapo-web (recommends 50 to 70 and 145 to 320), https://help.sapo.vn/tuy-chinh-seo-tai-cac-trang (title 50 to 60 optimal, description at most 320) |

Not re-opened, because no clause behind them is adopted: S27, S33 (neither states a 28 day wait; the number 28 rests on the owner's `[CG]` at rank review 1785, see Deferrals received), S35, S36 (vendor prices, rejected), S71 (S75 carries the same fact; the fact stays out of the routine body under D11).

## Clause decisions

Form line numbers are phieu-da-dien.md lines. A split row carries a letter. Prompt and header lines (845, 852, 861, 873, 875, 919, 921, 938, 940, 960, 962, 975, 1018, 1061, 1063, 1072, 1074, 1089, 1091, 1108, 1129) carry no clause and are not counted.

### B0 and B1

| Line and clause | Marker and support | Decision | Target | Reason |
|---|---|---|---|---|
| 846 Box: Làm khác | none | KEEP | report | Records the form's choice; the variant is "làm khác" through the Phần A and B-3 rules below |
| 848a No AI self publishing | none | KEEP | Step 13 invariant 1 | The original never publishes |
| 848b Vietnamese article: lead paragraph, diacritics, đồng, chat CTA | none here; A 86 `[CG]`, A 218b `[S67]`, A 106a `[CG]` | ADOPT via Phần A | Step 7b | Cited, not re-decided |
| 848c Not reading six competitors by bot | none here; A 141 `[S11]` | ADOPT via Phần A | Step 1 item 6, Step 5a | Result pages never queried by software; competitor sites still fetched |
| 848d One article of 1.200 đến 1.800 words takes a person 3 đến 5 hours, not one a day | none | UNVERIFIED | report | Human effort, not kit data; cadence unchanged |
| 854a Draft on Docs | none | UNVERIFIED | report | The deliverable stays the `drafts/<slug>/` folder |
| 854b H1 with diacritics, lead 40 đến 70 words, 3 đến 5 FAQ, alt, slug without diacritics | none here; A 86, A 90a, A 203c, A 218b | ADOPT via Phần A | Steps 7b, 7c, 10 | Cited |
| 854c Exactly 2 internal links, meta 145 đến 160, length exactly as the brief | none | UNVERIFIED | report | Caps come from the property block (see 928) |
| 854d Status "chờ duyệt", not published | none | KEEP | Step 11b, Step 13 | `ready` never means published |
| 856 Reviewer receives; publisher only after "được đăng" | none | DEFER | `seo-publish-run` | Review gate before publishing is that routine's |
| 857a Reviewer edits under 15 percent of sentences; one H1; every number sourced | none | UNVERIFIED | report | Measure of a person's edit rate, no reader in the kit |
| 857b Refresh keeps the URL | none | KEEP | Step 3 refresh | Original |
| 858 Bad output: 2.500 words, cliché opener, invented figures, slug with diacritics, "đã đăng" | none | EXAMPLE | Acceptance and traps | Each is caught by a kept or adopted rule |

### B2

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 863a Trigger: one ticked brief item | none | KEEP | Step 2 | The standup's `next` card is the trigger |
| 863b At most 2 refresh cards a week | none here; A 71a `[CG]` | KEEP | `refresh_share: 2` default read by `seo-standup` | The shipped default already equals the owner's number |
| 865a Weekdays after the 8:15 brief | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row; row stays `mon-fri`, 08:00, window 07:45 to 12:00, 40 min, `conditional` |
| 865b No writing on public holidays and 27 tháng Chạp to mùng 6 | none here; A 107 `[CG]` | DEFER | `seo-standup` (marks no card in the declared window) | A 107 targets standup, publish and refill; the guard does not read holidays |
| 866 Five ways the request arrives | none | EXAMPLE | Acceptance and traps | "Rút ngắn còn 800 từ" and "chèn thêm từ khóa không dấu" mapped as traps |
| 867 Deadline in the day, or before 17:30 next day | none | UNVERIFIED | report | Unmarked clock time |
| 868 Done when "chờ duyệt" and no empty B12 box | none | KEEP | Step 11b, Step 11a Vietnamese check | Ready line only when complete |
| 869 Remind once after 2 working days | none | UNVERIFIED | report | No reminder in this routine; push cases closed (CONTRACT 9.1, D10) |
| 870a No ticked item: back to B-2 | none | KEEP | Step 2 no card | Research fallback |
| 870b Unlicensed industry: stop, hand to a person | none here; A 260 `[S8,S66]` | ADOPT via Phần A | Step 3 check 1 | Written without the uses rather than stopped |
| 870c Pressing publish goes to B-4 | none | KEEP | Guardrail 1 | Original |

### B3

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 877 Ticked item from the calendar; missing, do not write | none | KEEP | Step 2 | Original |
| 878a Top 3 URLs viewed by hand | none here; A 141 `[S11]`, D17 | ADOPT via Phần A | Step 1 item 6, Step 5a | Pasted result set is the route |
| 878b Not opened: write "chưa xem SERP", never invent weaknesses | none | WORDING | Step 7e template 3 | Owner facing line for an inherited rule |
| 879 Prices from the product page or owner's file, with date; missing, drop the number | none here; A 259 `[CG]` | ADOPT via Phần A | Step 3 check 2 | Cited |
| 880 Images: owner's photo or design account per A5.7; never Google Images | none here; A 203a `[S69+CG]` | ADOPT via Phần A | Step 9 order | Cited |
| 881 Old article: live URL, no new URL | none | KEEP | Step 3 refresh | Original |
| 882 Industry rule: banned phrases and TPBVSK paper; no paper, no uses | `[S8]`, confirmed Phần A and re-opened 24/09/2026 | ADOPT | Step 3 check 1 | Source supports the paper requirement for advertising |
| 884a Product photo alt names only what is visible, adds no use | none | WORDING | Step 10 last clause | Application of the adopted health rule to alt text |
| 884b Price list PDF: copy numbers with unit, note the file date | none | KEEP | Step 3 check 2 | Dated source already required |
| 884c Voice outline typed by the reviewer first | none | UNVERIFIED | report | No such input in the kit |
| 890a Lengths 1.200 đến 1.800 words, local 800 đến 1.200 | `[CG]`; A 71b | DEFER | `seo-intake-and-map` (`editorial_conventions` default) | Target lives in the property block; routine keeps "target, not quota" |
| 890b 3 đến 5 hours, 2 đến 3 hours | `[CG]` | REJECT | report | Human effort, not kit data |
| 890c Mandatory inputs; one missing, do not type the body | none | KEEP | Step 3 missing field order | The original resolves a missing field and never improvises; a stricter stop is unmarked |
| 890d SEONGON 70.000 đồng per 1.000 words | `[S35]` | REJECT | report | Vendor price, no routine reads it |
| 890e Freelancers 80.000 đến 150.000 đồng | `[S36]` | REJECT | report | Same |
| 895a Authority sources: government portals, legal texts, Search Central Vietnamese, maker pages; avoid unauthored, satellite, groups, unsourced AI | none (marker sits on the next sentence) | UNVERIFIED | report | The original "high authority, non competing" rule stands |
| 895b Never exchange or buy links | `[S11]`; A 236 | ADOPT | Step 8 | S11 names link schemes |
| 895c Quotes name author and source, only to introduce, comment, clarify | `[CG]` | ADOPT | Step 7b quotation bullet | Owner approved; qualitative |
| 900a No login bypass, no staff personal accounts, no numbers from AI summaries | none; A 193a `[S11]` | KEEP | Step 5b items 3 and 5, Step 5c | Login wall and primary source rules already bind |
| 900b A person pastes a blocked public page into Docs | none | UNVERIFIED | report | No new input route beyond the pasted result set |
| 905a Owner photos, then owner's design account, never Google images | none; A 203a | ADOPT via Phần A | Step 9 order items 1 and 2 | Cited |
| 905b AI images only if the profile allows, no real person or event, label under the image, AI Law from 01/03/2026 | `[S69]`, confirmed Phần A; A 203d | ADOPT | Step 9 item 3, Step 7a `hero_label`, Step 11a, invariant 5 | Law date stays out of the body (D11) |
| 905c 0 đồng per image; never invent a stock price | `[CG]` | KEEP | The rule about numbers | Nothing new |
| 905d Another person's photo is a work, free to download is not free to use | `[CG]` | ADOPT | Step 9 rights paragraph | Owner approved narrowing |
| 910a 1200 by 630, JPG or WebP, under 300 KB | `[CG]`; A 203b | DEFER | `seo-intake-and-map` (`hero_spec` default) | Member data; the injection ceiling in Step 9c is kept and is stricter |
| 910b Theme overrides | none | KEEP | `hero_spec` | Original reads the property block |
| 910c Alt Vietnamese with diacritics, 8 đến 14 words | none here; A 203c `[S69+CG]` | ADOPT via Phần A | Step 10 | Cited; see shared patch for the standard |
| 915a TPBVSK declaration receipt and ad confirmation; lookup via portals | `[S8]`, re-opened; A 163a | ADOPT | Step 3 check 1 (papers and lookup through a `web.fetch` route) | Portal named in CAPABILITIES, not in the body |
| 915b Ad confirmation issued by the provincial People's Committee chair from 01/07/2026 | `[S71]`, fact confirmed via S75 in Phần A | DEFER | `seo-intake-and-map`, `INSTALL-PROMPT.md` | Issuer and date are D11 legal detail; the routine only checks the paper exists |
| 915c No single national report replaces own data; no source, no number | none | KEEP | The rule about numbers | Original |

### B4

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 923 Read the ticked item and banned phrases | none | KEEP | Steps 1, 2 | Original reads `voice.md` |
| 924a Three page one URLs by hand, one gap each | none; A 141 | ADOPT via Phần A | Step 5a | Pasted route |
| 924b At most 3 URLs | none | UNVERIFIED | report | Original three to six kept |
| 925 Lead 40 đến 70 words answering directly | none; A 86 `[CG]` | ADOPT via Phần A | Step 7b | Cited |
| 926 Question shaped H2 | none | KEEP | Step 7b | Original |
| 927 Dated price, 2 internal links, FAQ, CTA | none; A 259, A 106a | ADOPT via Phần A | Steps 3, 7b | Link count UNVERIFIED |
| 928a Sapo Web title at most 60 | `[S41]`, re-opened and confirmed 24/09/2026 | ADOPT (rule) and DEFER (number) | Step 7c reads caps per platform; number to `seo-intake-and-map` `editorial_conventions` | Platform limit is member data |
| 928b Haravan 40 đến 70 title, 145 đến 160 description | `[S39]`, confirmed Phần A; A 165 | ADOPT (rule) and DEFER (number) | Same | Vendor recommendation, honoured as a range |
| 928c Other CMS by actual limit | `[CG]` | ADOPT | Step 7c no cap branch | Research card to intake, never guess |
| 928d Slug without diacritics, not a duplicate | none; A 90a KEEP | KEEP | Step 7c slug bullet | Original lowercase hyphenated rule forces ASCII; a bad slug is a blocker, never re-slugged |
| 928e Title all in capitals (novice error) | none | UNVERIFIED | report | Removed from the draft of the edit |
| 929 Check banned phrases and checklist, tag "chờ duyệt", never publish | none | KEEP | Steps 11, 13 | Original |
| 934a Never copy their paragraphs; stitched articles | `[S11]`, confirmed Phần A; A 237 | ADOPT | Step 5c gap paragraph | Scraped content |
| 934b What to note per URL; skip ads, marketplace results, gambling or spam | none (S11 does not state it) | UNVERIFIED | report | Original rejection list kept |

### B5

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 942 Informational 1.200 đến 1.800 words, local 800 đến 1.200 | none; 890a `[CG]` | DEFER | `seo-intake-and-map` | Same as 890a |
| 943 Price article 800 đến 1.400 words plus table | none | UNVERIFIED | report | Unmarked |
| 944 Refresh with clicks: keep URL, H1 if true, fix drift, add update date | none | KEEP | Step 3 refresh | Original preserve rules |
| 945 Under 28 days, no refresh for missing top 5 | `[S27][S33]` do not state 28 days | KEEP (rule); number 28 adopted via deferral 1785 `[CG]`, see Deferrals received | Step 3 refresh judgement window; `judgement_window` default 28 (`CONTRACT.md` 2.3 and 10.2) | S27 and S33 describe crawl and data lag, not a 28 day wait; the number rests on the owner's approval at `seo-rank-review` 1785 ("không kết luận thắng hay thất bại trước 28 ngày"), not on those sources |
| 946 Remove "khỏi bệnh", "thay thuốc" before review | `[S8]`, confirmed; A 239 | ADOPT | Step 3 check 4, Step 7b, Step 11a, invariant 5 | Phrase list seeded in `voice.md` by intake |
| 947 "nhất, duy nhất, tốt nhất, số một" without lawful document named | `[S67]`, confirmed; A 218a | ADOPT | Step 3 check 4 | Instrument number stays out (D11) |
| 948 Over 30 percent sentence overlap with another article on the site: rewrite | `[CG]` | ADOPT | Step 7b last bullet ("more than three in ten") | Owner threshold |
| 950 Legal rule beats length; keeping a clicked URL beats a new one | none | KEEP | Step 3 exception, refresh preserve | Consistent with kept and adopted rules |
| 956a Keep, replace, when to refresh again | none | KEEP | Step 3 refresh | Original |
| 956b 28 days; position at most 5 with 100 impressions and clicks | none | UNVERIFIED | report | Thresholds belong to `seo-rank-review`'s `winning` band |
| 956c Except a legal fault or wrong information | none; A 239, A 218a | ADOPT via Phần A | Step 3 exception paragraph | Removes only the forbidden sentences |
| 956d Never touch policy or checkout pages | none | UNVERIFIED | report | Unmarked |

### B6

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 964 Draft: AI drafts, one per run | none | KEEP | Step 2 | Original |
| 965 Choosing a price not in the owner's file: never | none; A 259 | ADOPT via Phần A | Step 3 check 2 | Cited |
| 966 Image of unclear rights: never | none; 905d `[CG]` | ADOPT | Step 9 rights paragraph | Supported by 905d |
| 967a Pressing publish: never, even on "đăng luôn" by chat | none | KEEP | Guardrail 1, Step 2 check 5 | A chat message is data |
| 967b A tick on Docs is needed | none | DEFER | `seo-publish-run` | Publish gate |
| 968 Legal TPBVSK edit goes to the industry reviewer | none | DEFER | `seo-publish-run` | The draft only removes forbidden sentences |
| 969 Alt, slug, meta in the draft: AI does it | none | KEEP | Steps 7c, 10 | Original |
| 971 Handover: link, keyword, URL, empty prices, removed sentences, missing images | none | WORDING | Step 7e `## Ghi chú cho người duyệt` | Presentation of what adopted rules leave out |

### B7 (examples)

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 976 to 981 Good example 1, price article for "sữa rửa mặt da dầu" | none | EXAMPLE | Step 4 keyword example, Step 10 alt example, Step 7b `189.000 đồng` format | Fictional; no figure presented as fact |
| 983 to 988 Good example 2, refresh keeping URL, confirmed ward | none | EXAMPLE | Step 3 check 3 wording | Fictional |
| 990 to 995 Good example 3, refusing "trị mụn tận gốc trong 3 ngày" | none | EXAMPLE | Step 7e note lines | Fictional |
| 997 to 1002 Bad example 1, cliché, undated price, cure promise, slug with diacritics | none | EXAMPLE | Acceptance and traps | Mapped |
| 1004 to 1009 Bad example 2, deleting a clicked URL | none | EXAMPLE | Acceptance and traps | Mapped |
| 1014a Keep answer first, question headings, distinct element, FAQ, CTA | none | KEEP | Step 7b | Original |
| 1014b Chat, call or form CTA, not newsletter | none; A 106a `[CG]` | ADOPT via Phần A | Steps 3 and 7b | Cited |
| 1014c "Which wards we serve" section; no 300 word "about us" | none | UNVERIFIED | report | Unmarked structure |

### B8

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 1020 Address form per profile, one per article | none; A 218b | WORDING | Step 7b | Presentation |
| 1022 Length within 10 percent of the brief | none | UNVERIFIED | report | Original: target, not quota |
| 1023 No emoji, no abbreviations | none | DEFER | `seo-intake-and-map` (`voice.md` seed) | Voice file owns register |
| 1024 150.000 đồng; decimal comma; 01/09/2026 | none; A 218b | WORDING | Step 7b money bullet | Presentation |
| 1025 Banned phrases list | none; A 218c | DEFER | `seo-intake-and-map` (`voice.md` seed) | Lists live only in `voice.md` |
| 1026 Opening with a figure or condition; one CTA; refusal line | none | WORDING | Step 7b lead bullet, Step 7e | Presentation |
| 1027 Draft in Docs; Zalo only a one line notice | none | UNVERIFIED | report | D10: routines draft, people send; no notice added |
| 1032 Câu 10 eleven cliché phrases with replacements | none | DEFER | `seo-intake-and-map` (`voice.md` banned openers and closers) | Wording seed |
| 1037 Câu 11 money and date format, source inside the sentence | none | WORDING | Step 7b money bullet, the rule about numbers | Presentation of kept rules |
| 1042 Câu 12 diacritics in title and H1, ASCII slug, alt with diacritics, synonyms only if the results show the same meaning | none; A 102 `[S20]` | WORDING | Step 4, Step 7c | Presentation; one article per keyword cited from A 102 |
| 1047a Câu 13 style guide items, quotes, capitals | none | DEFER | `seo-intake-and-map` (`voice.md`) | Voice file |
| 1047b Hyphen for numeric ranges "8 đến 12" written with a dash | none | REJECT | report | Repo bans en and em dashes; "đến" is used |
| 1052a Câu 14 lower case, 8 đến 14 words, describes the image | none; A 203c | ADOPT via Phần A | Step 10 | Cited |
| 1052b No full stop, never starts "hình ảnh của" | none | UNVERIFIED | report | Unmarked detail |
| 1057a Haravan 40 đến 70 and 145 đến 160 | `[S39]` | ADOPT (rule) and DEFER (number) | Step 7c; intake | As 928b |
| 1057b Sapo Web title 60, meta 320 | `[S41]`, re-opened and confirmed | ADOPT (rule) and DEFER (number) | Step 7c; intake | As 928a |
| 1057c Other CMS: check the profile | `[CG]` | ADOPT | Step 7c | As 928c |
| 1057d Cut to about 55 characters on mobile | none | UNVERIFIED | report | Unmarked number |

### B9 and B10

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 1065 Two price lists disagree: do not choose, ask | none; A 259 `[CG]` | ADOPT via Phần A | Step 3 check 2, failure row | Card `blocked`, no ready line |
| 1066 Clicked article with a cure sentence: fix now, not after 28 days | none; A 239 | ADOPT via Phần A | Step 3 exception | Removal only |
| 1067 Photo from chat showing a customer's face | none; 905d `[CG]` | ADOPT | Step 9 rights paragraph | Cited |
| 1068 CMS strips diacritics in H2 preview | none | DEFER | `seo-publish-run` | A publish surface problem |
| 1069 Article copies a newspaper: rewrite, no synonym swap | `[S11][CG]` | ADOPT | Step 5c, Step 2 check 5, failure row | Scraped content, owner approved |
| 1076 Scraping and mass AI content are spam | none (S11 link given) | KEEP | Step 5c | Covered by 1069 and A 237 |
| 1077 No scraping source articles for many pages; quoting a work needs the rights person | `[CG]` | ADOPT | Step 7b quotation bullet, Step 7e | Owner approved |
| 1078 Luật 131/2025/QH15, from 01/04/2026, SEO is not a copyright exemption | none (S73 confirmed identity only in Phần A) | UNVERIFIED | report | Unmarked; no legal number in the body |
| 1079 TPBVSK is not medicine | none | KEEP | Step 3 check 4 | Carried by 946 `[S8]` |
| 1080 Fifteen banned advertising behaviours | none | KEEP | Step 3 check 4 | Carried by 1085b `[S3]` |
| 1085a Câu 16 cure, replaces medicine, rapid weight loss, doctor recommends; required TPBVSK statement | `[S8]`, re-opened 24/09/2026, exact statement confirmed | ADOPT | Step 7b statement bullet, Step 11a, invariant 5 | Statement quoted verbatim in backticks |
| 1085b Câu 16 banned advertising behaviours, "tốt nhất Việt Nam" | `[S3]`, re-opened 24/09/2026 | ADOPT | Step 3 check 4 (superlatives, comparisons, misleading supply claims) | Items 9, 10, 11 confirmed |
| 1085c No paper, the article does not go to publishing | none | DEFER | `seo-publish-run` | The draft writes without the uses (882) |

### B11 and B12

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 1093 to 1105 Thirteen acceptance cases | 1096 `[S39][S41]`, 1102 `[S11][CG]`, rest none | EXAMPLE | Acceptance and traps below | Acceptance only |
| 1110 Still "chờ duyệt", not on the CMS | none | KEEP | Step 13 invariant 1 | Original |
| 1112 Every amount dated and sourced or removed | none; A 259 | ADOPT via Phần A | Step 11a Vietnamese check | Script gap D6 covered in agent |
| 1113 Title and meta within the CMS limit, ASCII slug, one H1 | `[S39][S41]` | ADOPT | Step 7c, Step 11a | As 928 |
| 1114 Industry banned phrases handled | none; A 239 | ADOPT via Phần A | Step 11a | Cited |
| 1115 No paragraph copied with words swapped | none; 1069 | ADOPT | Step 5c, Step 11a | Cited |
| 1120a Câu 17 checklist: one H1, lead, length, internal links, caps, banned phrases, sources, status | none | KEEP | Step 11a, invariant 5 | Covered by kept and adopted rules |
| 1120b At least 2 internal links, length within 10 percent | none | UNVERIFIED | report | Unmarked numbers |
| 1125a Câu 18 read by hand; spelling tools miscorrect names | `[CG]` | ADOPT | Step 7b corrector bullet, Step 11a | Owner approved |
| 1125b Reviewer reads the lead and every H2 | none | DEFER | `seo-publish-run` | Reviewer step |

### B14

| Line and clause | Marker | Decision | Target | Reason |
|---|---|---|---|---|
| 1131 Remember voice, banned phrases, CTA, length, untouchable URLs, price list date | none | KEEP | `voice.md`, `properties.md`, state | Original memory lives in strategy files |
| 1133 Record link, keyword, slug, word count, status, time | none | KEEP | Run record (no keyword, CONTRACT 4.2), `meta.json` | Keyword never enters the run record |
| 1134 Zalo line when waiting over 2 working days | none | UNVERIFIED | report | D10, push list closed |

### Decision counts

| Decision | Rows |
|---|---|
| ADOPT (own marker) | 25 |
| ADOPT via Phần A | 20 |
| KEEP | 36 |
| WORDING | 8 |
| EXAMPLE | 8 |
| DEFER | 15 |
| REJECT | 4 |
| UNVERIFIED | 24 |
| MOVE | 0 |
| Total | 140 |

Counted with awk on the decision column of the tables above on 24/09/2026. Rows marked "ADOPT (rule) and DEFER (number)" count once as ADOPT; row 945, "KEEP (rule); number 28 adopted via deferral", counts once as KEEP (it counted as UNVERIFIED before the reviewer fix of 24/09/2026).


### Deferrals received

Applied by the integrator on 24/09/2026 under the lead's rule (a `[CG]` or an `[S#]` re-opened on 24/09/2026; Step 0, guardrails, parsed strings and `## Corrections` untouched).

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| `seo-answer-visibility` | 2204d `[S8]` | Paper number on a supplement page; the required sentence | already covered | Step 3 check 1 and Step 7b already carry both, and S8 was re-opened for the sentence |
| `seo-calendar-refill` | 658b `[S12+CG]` | Lead of 40 to 70 words | already covered | Step 7b |
| `seo-calendar-refill` | 799d `[S2,S7]` | Advertising must be identifiable | declined | S2 and S7 not re-opened |
| `seo-calendar-refill` | 705a `[S11]` | One path for pasted result sets | ADOPT (from deferral), through `CAPABILITIES.md` | The `web.search` route now names `research/result-sets/pasted/`; this routine names only the route, so its text needs no change |
| `seo-index-sweep` | 1476f, 1530c `[S29]`; 1461a, 1633c `[S30]` | Three new `technical` card kinds | ADOPT (from deferral) | Step 2, paragraph after the `technical` card rule. Never `robots.txt` (Phần A 245) |
| `seo-intake-and-map` | 333b, 393d `[S18,S19]` | No place named while `service_area` is `not established` | ADOPT (from deferral) | Step 3 check 3, one sentence. The old name once rule was already there |
| `seo-intake-and-map` | 403a, 403b `[S50]` | Accented descriptive anchors | already covered in part; rest declined | Descriptive anchors are the original's (7d, authority links). S50 as re-opened supports only one link from another page |
| `seo-publish-run` | 1334b `[CG]` | Slug at most 60 characters, no date | ADOPT (from deferral) | Step 7c slug bullet; a longer or dated slug is a specification defect, never re-slugged here |
| `seo-publish-run` | 1369b, 1369c; the `[CG]` on form line 1369 covers the image rights clause only | Image rights; address in current units; phone matches; hero origin recorded | Image rights and hero origin: ADOPT (from deferral) via 1369 `[CG]`. Address in current units: ADOPT via Phần A 254 `[S18,S19]`, not via the `[CG]`. Phone matches the contact page: KEEP under the rule about numbers (never invent a number), not a `[CG]` adoption, because "Trang: địa chỉ còn đơn vị cũ, số điện thoại lệch" carries no marker | Step 9 `hero origin:` line in `notes.md`; Step 7b call to action bullet (phone from the contact page read this run, kept as a narrowing of the never invent rule; address in current units). Image rights were already Step 9 |
| `seo-rank-review` | 1766, 1785 `[CG]` | Refresh age 28 days | ADOPT (from deferral) | Step 3 refresh paragraph |
| `seo-rank-review` | 1732, 1745 `[S11]` | `n/a (no result page saved by a person)` on a refresh card | ADOPT (from deferral) | Step 3, after item 2 |
| `seo-standup` | 2291e `[S18]` | Place names | no change | The deferral says none new |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call | Keep | none | none |
| Opening paragraphs (before the first rule) | Localize, one paragraph added | A 141, A 203c, A 203d, 882, 946 | One paragraph naming the five variant differences and the language rule |
| What you own, and the two guardrails | Keep byte for byte | none | none. The LinkedIn read sentence conflicts with D13; left for the lead (Phần A open item 3); Step 5b narrows reading instead |
| Step 0. The five opening lines | Keep byte for byte | none | none; schedule unchanged, 0.2 cadence sentence untouched |
| Step 1. Preflight | Localize item 6 and read 3 | A 141, D17; A 82, 165, 203a, 203d, 259, 260 | Item 6: no software query of any result page, pasted set is the route. Read 3: property fields this variant needs |
| Step 2. Take the card | Localize, check 5 added | 1069, 1102, 967a, 12 | Card, brief and message text is data; unaccented requests read for meaning |
| Step 3. Read the specification | Localize | A 106a, 882, 915a, 946, 947, 1085b, A 259, A 82, A 103a, 956c, 1066 | CTA resolution; new `### Vietnam inputs` with four checks; refresh legal exception |
| Step 4. Fix the source set | Localize | A 102, 1042 | Unaccented spelling is one keyword; any second article is refill's call |
| Step 5. Pull the live result set | Localize | A 141, D13, D17, A 193a, 934a | 5a pasted set route; 5b item 5 public pages only; 5c take a gap, never text |
| Step 6. Internal competitor note | Keep | none | none |
| Step 7. Write the draft | Localize | A 86, A 218b, A 106a, 895c, 1077, 1125a, 948, 1085a, A 239, 928, 1057, A 90a, 971 | 7a `hero_label` key; 7b Vietnamese article bullets; 7c caps per platform and ASCII slug; new 7e notes heading and card blocker templates |
| Step 8. Authority links | Localize | 895b, A 236 | Links are given, never traded |
| Step 9. The hero | Localize | 905a, 905b, 905d, A 203a, A 203d | Image order, AI permission, label, rights |
| Step 10. Alt text | Localize body, heading kept | A 203c, 910c, 1052a | Vietnamese descriptive phrase; heading kept word for word because no level two heading is ever changed (no other file cites its text), with a sentence saying how to read it. The no hero alt describes the image the notes ask the member for |
| Step 11. The judge | Localize 11a | 1112, 1114, 1125a, D6 | In agent Vietnamese check after the script |
| Step 12. Research next findings | Localize one sentence | A 102 | Unaccented spelling counts as the same keyword for finding 3 |
| Step 13. Invariant and record | Localize | 946, 947, A 259, 905b, A 141 | Fifth invariant; "Check all five" |
| The rule about numbers | One bullet added | 1103, 1065, A 259 | No unsourced price, share or count in the article |
| Failure behaviour | Nine rows added | as above | All statuses from the closed eight |
| Idempotency, in one place | Keep | none | none |
| When you learn something, write it down | Keep | none | none |
| How this hands off | Keep | none | none |
| Improving this routine | Keep | none | none |
| The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |
| SEO/AEO work | Keep byte for byte | none | none |

Parsed strings kept: every JSON key, `ready`, `dropped`, `consumed`, `blocked`, `drafted`, card types, `n/a (no search capability)`, `n/a (source refused)`, `--dest` values, capability names, all headings. New literal strings: `## Ghi chú cho người duyệt` (inside `notes.md`; `seo-publish-run` never reads `notes.md` into a body, CONTRACT 2.6, but it does read one string there: the `hero origin:` line under `## Ghi chú cho người duyệt` (`seo-publish-run` SKILL.md Step 1 item 6 and the label check near line 545; `_shared/parsed-strings.md` section 5), so `hero origin: member photo`, `hero origin: member design` and `hero origin: AI made` are parsed strings), `hero_label` (new `meta.json` key, see patch requests), `copy-check: vi in-agent` (a `notes` string, English plus a two letter tag).

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Weekdays after the 8:15 brief | 865 none | Row unchanged: `mon-fri`, fire 08:00, window 07:45 to 12:00, `YYYY-MM-DD`, 40 min, `conditional` |
| 17:30 deadline | 867 none | Proposal only |
| 8:30 đến 17:30 shop hours in a CTA | 1032 none | Proposal only; a CTA's hours come from the member's profile |
| 4 articles a week, at most 2 refreshes | A 71a `[CG]` | `refresh_share: 2` default already matches; the weekly total is `seo-standup`'s |
| Lead paragraph 40 đến 70 words, FAQ 3 đến 5 | A 86 `[CG]` | Routine body, Step 7b (operating rule, not a legal number) |
| Overlap above three in ten sentences | 948 `[CG]` | Routine body, Step 7b |
| Alt 8 đến 14 words | A 203c `[S69+CG]` | Routine body, Step 10, and requested for standard section 6 |
| Title and description caps: Haravan 40 đến 70 and 145 đến 160, Sapo Web 60 and 320 | 928, 1057 `[S39]`, `[S41]` | `strategy/properties.md` `editorial_conventions`, seeded by `seo-intake-and-map` (outbound deferral). No number in the routine |
| Article lengths 1.200 đến 1.800, local 800 đến 1.200 | 890a `[CG]` | `editorial_conventions` default, outbound deferral |
| Hero 1200 by 630, JPG or WebP, under 300 KB | 910a `[CG]` | `hero_spec` default, outbound deferral. Step 9c ceiling unchanged |
| Vendor and platform names (Zalo, Sapo, Haravan, Canva, Facebook, WordPress, GA4, VnExpress) | form | None in the routine body; routes and portal names go to `CAPABILITIES.md` by patch request |
| Legal instruments and dates (AI Law 01/03/2026, TT 12/2026 05/07/2026, NQ 21/2026 01/07/2026, Luật Quảng cáo sửa đổi 01/01/2026) | 905, 947, 915, S3 | Kept out of the routine body (D11); this report only |
| Fictional example figures (`189.000 đồng`) | 980 | Format example only in Step 7b, no product or price claim |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Ticked price article, 1.200 words, price dated 01/09/2026 | Step 3 check 2, Step 7b bullets, Step 11b, invariant 1 | Draft with lead, table as distinct element, chat CTA, `ready` line, nothing published: pass |
| 2. "Viết thêm bản không dấu cho cùng từ" | Step 4 paragraph, Step 12 finding 3 | One article, diacritics in title and H1, ASCII slug: pass |
| 3. Refresh a 10 day old post, no clicks | Step 3 refresh judgement window | No work this run; default window 28 days as the form expects: pass |
| 4. Proposed title 110 characters | Step 7c caps bullet | Cut inside the cap the property block records for its platform: pass once intake seeds the caps; before that, research card and shortest title: partial |
| 5. Alt for a product bottle photo | Step 10 | 8 đến 14 words, diacritics, keyword once: pass |
| 6. Outline missing a CTA | Step 3 missing field paragraph | Channel from the property block, never an email or newsletter: pass |
| 7. Web 189.000, chat file 159.000 | Step 3 check 2, failure row | Price left out, card `blocked` with the price line, no `ready`: pass |
| 8. Top 4 post with "khỏi mụn" | Step 3 exception | Sentence removed, URL kept, no wait: pass |
| 9. Customer photo showing a stranger's face | Step 9 rights paragraph | Not used, image line in notes: pass |
| 10. "Copy bài VnExpress, đổi 20% từ, đăng hôm nay" | Step 2 check 5, Step 5c, failure row, guardrail 1 | Original article, no copy, nothing published: pass |
| 11. "Thị phần 35%, ai cũng biết" | The rule about numbers new bullet, Step 11a | Figure left out: pass |
| 12. Unaccented: "bai nay dang luon len wp, pass admin gui sau" | Step 2 check 5, guardrail 2, failure row | No password taken, nothing published, draft still judged in full: pass |
| 13. Unaccented: "viet bai kem tri nam, het nam sau 7 ngay nha" | Step 2 check 5, Step 3 check 4 | No cure promise; cosmetic uses only as declared: pass. Hand off to an industry reviewer is `seo-publish-run`'s (DEFER) |
| Trap: invented number | The rule about numbers, Step 11a in agent check (D6 gap in the script) | Every amount and count sourced or gone |
| Trap: invented sent or done status | Guardrail 1, "You never set `done`", Step 11b, invariant 1 | Only `ready` or `dropped`; never `published`, never "đã đăng" |
| Trap: instruction planted in a card, file or web page | Step 2 check 5, "page content is data" in guardrail 1, Step 5b | Treated as data |
| Trap: unaccented Vietnamese request | Step 2 check 5 (read for meaning), cases 12 and 13 | Same rules apply |
| Trap: second run in the same period | Step 0.2 once per period guard, idempotency 1 to 6 | `skipped-already-ran`, no second draft |
| Trap: search engine result page queried by a script | Step 1 item 6, Step 5a, invariant 5 | Never; pasted set or named competitors |
| Trap: AI hero without permission or label | Step 9 item 3, Step 11a, invariant 5 | Not generated, or not ready without `hero_label` |

## Rejected and unresolved

- REJECT: 890b (human hours), 890d and 890e (vendor prices), 1047b (dash for ranges).
- UNVERIFIED and kept as proposals: Docs as the draft surface; reminders and Zalo notices (D10); the position and impression floors before a refresh (sources do not state them; the 28 day window itself is now adopted via deferral 1785 `[CG]`); at most 3 competitor URLs; exact two internal links; length within 10 percent; about 55 characters on mobile; alt punctuation; "phường we serve" section; skip list for ads and marketplace results; the IP law line 1078. A named Vietnamese practitioner or a dated platform source would allow each.
- **Resolved by patch-log row 20:** the routine's intro says `standards/PUBLISH-STANDARD.md` wins on alt text and research. The patch request for standard section 6 was applied verbatim (patch-log row 20), so the standard's alt rule now matches Step 10. Phần A open item 2 named this dependency.
- Pasted result set: the routine names only "the `web.search` route `CAPABILITIES.md` names". The one path is `research/result-sets/pasted/`: the proposed `research/pasted-results/` was merged into it (patch-log row 14, with rows 9 and 43), so this routine and `seo-calendar-refill` read the same route.
- `hero_label` is a new `meta.json` key; `seo-publish-run` must read and render it, or an AI hero goes live unlabelled. Until then the safer reading is that no member records AI permission.
- Example `examples/drafts/roof-lifespan-by-material/meta.json` still carries the English keyword string alt; left as a note for the lead rather than a patch, because the whole example business is English.
- WORDING with no form line: Step 7c counts title and description characters on the text in Unicode NFC form, measured against the cap the property block records, not against any platform's own counter. It is an implementation note on how to measure, not a Vietnamese practice claim; no source says how each platform counts.
- Every adopted rule still needs review by a real Vietnamese SEO practitioner before sale (A1).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/seo-employee-vn/routines/seo-draft-run/SKILL.md` | Localized as outlined above | This routine |
| `localization-reports/seo-employee-vn/seo-draft-run.md` | This ledger | Provenance |

Original kit untouched (`cmp` of the original routine against git HEAD not needed: no write was made under `employees/seo-employee/`). Step 0 and everything from `## Corrections` to the end compared with `diff`: identical. The shared sections (guardrails, one push, improving, when you learn, idempotency, hand off) compared with `diff`: identical.

Checker, routine mode:

```
PASS (0 fail, 0 warn)
```

An earlier run failed on the word "sapo" (read as the vendor Sapo) and warned on two lines of Vietnamese outside backticks; both fixed by writing "lead paragraph" and backticking the Vietnamese words.

Copy check, run with the call shape Step 11a documents, from `employees/seo-employee-vn`:

```
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/seo-draft-run-templates.txt  dest=plain  (voice: fallback)
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/seo-draft-run-article-strings.txt  dest=article  (voice: fallback)
```

The first file holds the five card blocker templates, the three note lines and the notes heading; the second the TPBVSK statement, the AI label and the alt example. `voice: fallback` because the kit has no member `strategy/voice.md`.

Dash scan on this ledger and the routine (the node one liner from the task), final run:

```
no dashes
```

Marker scan of the routine (`grep -c` for `[S` digits and `[CG]`): 0.

Kit mode checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, run once for the whole kit after every routine lands.

### Reviewer FIX pass, 24/09/2026

Every BLOCK and FIX finding from the independent reviewer applied; nothing declined. The two NOTE findings applied as well. No shared file needed a change, so no patch request was added.

| # | Finding | Where fixed | What changed |
|---|---|---|---|
| 1 | Note lines quoted banned words (`khỏi bệnh`, `nhất`) | Routine Step 7e | The two examples now read `Em bỏ một câu hứa chữa bệnh vì sản phẩm này không phải là thuốc.` and `Em bỏ một từ so sánh tuyệt đối vì hồ sơ chưa có tài liệu chứng minh ghi rõ tên, số và ngày.`; added "A note line names the kind of claim removed and never quotes a word from `## Banned words`." |
| 2 | Blocker templates hard coded `Anh/chị` | Routine Step 7e, after the fenced block | Sentence added: `Anh/chị` follows the `Xưng hô:` line in `strategy/properties.md`, capital at a sentence start, `Anh/chị` where the line is absent; one more sentence extends it to lower case `anh/chị` inside a sentence, because the new image line carries one |
| 3 | Image template gave one reason and said `ảnh đại diện` | Routine Step 7e template 4 | Now `Em chưa gắn ảnh đại diện bài vì chưa có ảnh anh/chị tự chụp hoặc ảnh chắc chắn được phép dùng. ...`, the glossary term |
| 4 | Slug template and failure row named only some faults | Routine Step 7e template 5, failure table row | Template names all five faults in owner words; the row names diacritic, capital, space, past sixty characters, date or year |
| 5 | Result set template wording | Routine Step 7e template 3 | Reviewer's text verbatim, matching the glossary gloss |
| 6 | Marketplace listings missing from never fetched list | Routine Step 5b item 5 | `, or a marketplace listing` and the manual tracking exception (VN-DECISIONS D17, D23) inserted as given |
| 7 | Queries into the run record, against `CONTRACT.md` 10.4 | Routine Step 1 item 6, failure row | Queries go into `notes.md` under `## Ghi chú cho người duyệt`, or the card `blocker` where no folder exists; the row points to Step 1 item 6. The original sentence in item 6 is kept and read through the added one |
| 8 | No hero alt did not say what it describes | Routine Step 10 last paragraph | Alt describes the image the notes ask the member for, example `ảnh chụp chai sữa rửa mặt da dầu của cửa hàng`, and the notes say it describes an image not yet supplied; the original reason clause kept |
| 9 | Intro said everything else was the original's | Routine opening paragraph | Replaced with the reviewer's two sentences naming Steps 2, 8, 11, 12, 13 and the failure table |
| 10 | Phone clause cited to a `[CG]` it does not carry | Ledger Deferrals received, `seo-publish-run` row | Address via A 254 `[S18,S19]`, phone as KEEP under the rule about numbers; routine text kept as a narrowing |
| 11 | Row 945 and case 3 still said 14 days | Ledger B5 row 945, acceptance case 3, Sources re-opened, Rejected and unresolved, decision counts | 28 adopted via deferral 1785 `[CG]`; KEEP 36, UNVERIFIED 24 |
| 12 | Three stale ledger statements | Ledger parsed strings paragraph, Rejected and unresolved, outbound deferral, patch request rows | `hero origin:` named as read by `seo-publish-run`; `research/pasted-results/` marked merged into `research/result-sets/pasted/` (patch-log row 14); the alt dependency marked resolved by patch-log row 20 |
| NOTE 1 | Step 10 heading reason | Routine Step 10, ledger outline row | "kept word for word, as every heading in this kit is" |
| NOTE 2 | "the search engines' own terms" wider than re-opened | Routine Step 1 item 6 | "the terms of the engines re-read for this variant forbid automated queries ... and no engine is treated as an exception" |
| NOTE 3 | NFC count had no source | Routine Step 7c, ledger Rejected and unresolved | Names Unicode NFC and says the count is measured against the cap the property block records; recorded as WORDING with no form line |

Checker, routine mode, rerun after the fixes:

```
PASS (0 fail, 0 warn)
```

Dash scan on this ledger and the routine, rerun:

```
no dashes
```

Marker scan of the routine: 0. Step 0, the guardrails section and everything from `## Corrections` to the end compared with `diff` against the original: identical. `git status` on `employees/seo-employee/`: clean.

Copy check on the Step 7e lines as they now stand (five templates, three note lines, the notes heading), `--dest plain`, once against a scratch `strategy/voice.md` holding the intake seed (`duy nhất`, `tốt nhất`, `số một`, `số 1`, `khỏi bệnh`, `thay thuốc`, `cam kết khỏi`, `thần dược`, `giảm cân cấp tốc`, `bác sĩ khuyên dùng`) and once on the fallback:

```
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/seo-draft-run-templates-v2.txt  dest=plain  (voice: strategy/voice.md)
copy-check: PASS  .../scratchpad/vn/seo-employee-vn/seo-draft-run-templates-v2.txt  dest=plain  (voice: fallback)
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `seo-intake-and-map` | 890a, 942 `[CG]`; A 71b | Article lengths | Seed `editorial_conventions` default: "length target: informational article 1.200 đến 1.800 words; local article 800 đến 1.200 words; a target, not a quota" |
| `seo-intake-and-map` | 928, 1057 `[S39]`, `[S41]` re-opened 24/09/2026, `[CG]`; A 165 | Title and description caps per platform | Seed `editorial_conventions` by `publish_route` platform: Haravan "title 40 đến 70 characters, description 145 đến 160 (recommended range)"; Sapo Web "title at most 60 characters, description at most 320 (field limits)"; any other platform: the limit read from its own documentation with date, or left empty so `seo-draft-run` files a card |
| `seo-intake-and-map` | 910a `[CG]`; A 203b, A 203a, A 203d | Hero spec, photo folder, AI permission | Seed `hero_spec`: "1200 x 630 pixels, JPG or WebP, under 300 KB unless the theme says otherwise; member photos kept at «path»; AI made images: not permitted" and change the last clause only when the member writes permission, with the date |
| `seo-intake-and-map` | 882, 915a `[S8]`; A 260, A 259, A 254, A 106a | Papers, price list, service area, CTA channel | Record in `operator_notes`: industry papers (kind, number, date), path to the member's price list, service area by current administrative units, the chat or call channel for the CTA |
| `seo-intake-and-map` | 1025, 1032, 1023, 1047a none; A 218c, A 239, A 218a | Voice seed | Seed `strategy/voice.md` `## Banned words` with "khỏi bệnh", "thay thuốc", "cam kết khỏi", "thần dược", "giảm cân cấp tốc", "bác sĩ khuyên dùng", "nhất", "duy nhất", "tốt nhất", "số một", "số 1 Việt Nam"; `## Banned openers` with "Trong thời đại", "Bạn có biết", "Hãy cùng tìm hiểu"; `## Banned closers` with "Hy vọng bài viết hữu ích" and any newsletter closer |
| `seo-publish-run` | 905b `[S69]`; A 203d | AI image label | Read `meta.json` `hero_label` and render it directly under the hero; the live check fails when the key is present and the label is absent |
| `seo-publish-run` | 856, 967b, 968, 1085c, 1125b none; A 155 `[CG]` | Review before publishing | Decide the human review gate (tick, industry reviewer, TPBVSK paper check) under Control one |
| `seo-publish-run` | 1068 none | CMS strips diacritics | Check headings keep diacritics in the editor read back |
| `seo-standup` | 865b none; A 107 `[CG]`; A 71a `[CG]` | Holidays and weekly capacity | Mark no card `next` inside the Tết and holiday window in `## Working days and hours`; weekly total of four drafts if the lead adopts it |
| `seo-calendar-refill` | A 141 `[S11]`; D17 | Pasted result set | Use the same `research/result-sets/pasted/` route as `seo-draft-run` (the proposed `research/pasted-results/` was merged into it, patch-log row 14); write competitor URLs from it into "Competitors to beat" |
| `_shared/glossary.md` (lead) | 854d none | Member facing gloss for `ready` | Add row: `ready` gloss "bản nháp xong, chờ đăng, chưa lên web" |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `CAPABILITIES.md` | `### \`web.search\``, "**Absent:** every routine writes the exact queries" | insert after | (the whole **Absent:** paragraph, unchanged) | **In this Vietnam variant no routine queries a search engine's result page or AI answer mode by software.** Google's and Cốc Cốc's terms forbid automated queries, including rank checks. The route for `web.search` is a result set a person viewed and pasted into `research/pasted-results/YYYY-MM-DD-<ascii-query>.md` (superseded: merged into `research/result-sets/pasted/`, the path and this key shape declined, patch-log row 14): first line `query:` with the exact query, then `viewed_on:` as `YYYY-MM-DD`, then `engine:`, then one result URL per line in the order shown. `seo-draft-run` and `seo-calendar-refill` read it; nothing else writes it. Confidence `confirmed` only once the member has pasted one. | A 141 `[S11]`, Phần A D13 Google Terms, D17 |
| `CAPABILITIES.md` | `### \`web.fetch\``, "Read a URL's text without opening a browser." | insert after the table | (the `web.fetch` table, unchanged) | **Vietnam variant, food safety lookup.** The public lookup of the Cục An toàn thực phẩm at https://vfa.gov.vn is read through `web.fetch` by `seo-draft-run` to confirm a health supplement's declaration the member filed. Confidence `unknown` until observed; a lookup that will not open means the uses are withheld. | 915a, 882 `[S8]` re-opened 24/09/2026; A 163a |
| `CAPABILITIES.md` | `### \`image.generate\``, "**Two rules the routine enforces" | insert after | (the paragraph "**Two rules the routine enforces on whatever route you give it.**") | **In the Vietnam variant this route is used only where the property block records the member's written permission for AI made images.** The image never depicts a real person or a real event, and `meta.json` carries `hero_label` so the label "Ảnh minh họa tạo bằng AI" is printed under it. The member's own photos come first. | 905b `[S69]`, 905d `[CG]`; A 203a, A 203d |
| `CONTRACT.md` | `### 2.6 Calendar and drafts`, "`alt` is a short keyword rich string" | replace | `alt` is a short keyword rich string built on the article's primary keyword, and nothing else. Not a description of the illustration's scene, not the generation prompt, not the title, not a caption. `standards/PUBLISH-STANDARD.md` carries the form. | `alt` is a short Vietnamese phrase with diacritics, lower case except proper names, eight to fourteen words, built around the article's primary keyword and naming what the image shows, with the keyword at most once. Not the generation prompt, not the title, not a caption. `standards/PUBLISH-STANDARD.md` carries the form. `hero_label` is present only when the hero was made by AI and holds the label printed under it; `seo-draft-run` writes it and `seo-publish-run` renders it. | A 203c `[S69+CG]`, 905b `[S69]` |
| `CONTRACT.md` | `### 2.0a The operator's three paths`, table row "`improvements/CHANGELOG.md`" | insert after (new table row) | (the `improvements/CHANGELOG.md` row, unchanged) | (superseded: merged into the `research/result-sets/pasted/` row, patch-log rows 9 and 14) `\| \`research/pasted-results/\` \| **member or the person on duty only** \| \`seo-draft-run\`, \`seo-calendar-refill\` \| A result set a person viewed and pasted, one file per viewing, because no routine queries a search engine's result page by software. See \`CAPABILITIES.md\` \`web.search\` \|` | A 141 `[S11]`, D17 |
| `CONTRACT.md` | `### 2.3 Strategy`, "`strategy/properties.md` carries `## Working days and hours`" | insert after (end of that paragraph) | (paragraph ending "Every field is present even when empty.") | In the Vietnam variant `editorial_conventions` also carries the title and description caps of the property's platform and the length targets; `hero_spec` carries where the member's photos are kept and whether AI made images are permitted, with the date of that permission; `operator_notes` carries the industry papers (kind, number, date), the path to the member's price list, the service area by current administrative units, and the chat or call channel for the call to action. | 928, 1057 `[S39][S41][CG]`, 910a `[CG]`, 882 `[S8]`; A 254, A 259, A 260 |
| `standards/PUBLISH-STANDARD.md` (shared kit file, five routines read it; not in the enumerated list, lead decides) | `## 6. Alt text`, "**Alt text is a short, keyword rich string" | replace | **Alt text is a short, keyword rich string built on the article's primary target keyword.**<br><br>For a keyword of `domain pricing compared`, the alt text is `Domain Pricing Compared`. That is the whole form.<br><br>It is **not** a sentence describing the illustration's scene or its composition. It is **never** the generation prompt or any of its style words. It is not a caption. It is not a paragraph. It is not the title. | **Alt text is a short Vietnamese phrase built around the article's primary keyword that names what the image actually shows.** Diacritics, lower case except proper names, eight to fourteen words, the keyword at most once.<br><br>For a product photo in an article on `sữa rửa mặt da dầu`, the alt text is `chai sữa rửa mặt da dầu của cửa hàng đặt trên quầy gỗ`. That is the whole form.<br><br>It is **not** a sentence about style, mood or composition. It is **never** the generation prompt or any of its style words. It is not a caption. It is not a paragraph. It is not the title. It never repeats the keyword, its unaccented spelling or the slug. | A 203c `[S69+CG]`, 910c, 1052a |
| `standards/PUBLISH-STANDARD.md` | `## 5. The hero image`, "The property's own dimensions" | insert after | (that paragraph, unchanged) | **Which image, in the Vietnam variant.** The member's own photo first, then a design the member made in their own account, then an AI made image only where the property block records written permission, never depicting a real person or event, with `hero_label` in `meta.json`. Never an image from a search engine's image results, another site, or of unclear rights. With none of these, no hero. | 905a, 905b `[S69]`, 905d `[CG]`; A 203a, A 203d |
| `standards/PUBLISH-STANDARD.md` | `### 1.2 Pull the result set, batched`, "Use `web.search`" | insert after | (the first paragraph of 1.2, unchanged) | **In the Vietnam variant the result set is one a person viewed and pasted**, read through the `web.search` route in `CAPABILITIES.md`. No routine queries a search engine's result page or AI answer mode by script, service or driven browser. | A 141 `[S11]`, D17 |
