# soc-draft-queue: provenance ledger

Status on 24/09/2026: **ledger complete, sources behind new law, number and platform clauses re-opened or taken from the Phần A ledger, routine edits applied to the variant routine and checked (see Files and checks).** Written by the soc-draft-queue writer in the overnight run. No shared file was edited; the requests are in the last section. Independent review fixes applied on 24/09/2026 (see Files and checks); five new shared file requests from that review are pending, after review.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-3. soc-draft-queue`, form lines 849 to 1153. Phần A decisions are cited from `_shared/phan-a-ledger.md` and not re-decided here.
- Extract: `extract_form_section.py --routine soc-draft-queue`, kept at `scratchpad/vn/social-media-employee-vn/soc-draft-queue-extract.md` and `.json`. 142 rows and answers: 16 with `[S#]`, 6 with `[CG]`, 3 with both, 123 unmarked. Full B section (B0 to B12, B14); B0 ticked "Làm khác".
- Form author (A1): an AI sub agent playing the Social Media role, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs social media for a Vietnamese business.** A `[CG]` is the owner's review of one fragment in `ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx`, and covers only that fragment. The B-3 fragments are KN-06-028 (line 886: "Ngày lễ dài: chốt cả cụm trước 16:00 ngày làm việc cuối", with the note that 90 minutes is a reading lead time for the owner, not a platform rule), KN-06-029 (932: "đây là mức khởi đầu"), KN-06-030 and 031 (956: "lấy mức 4 giờ làm sàn"; "TikTok được gần hơn nếu không cùng nội dung, tối thiểu 3 giờ"), KN-06-032 (1024: "Mức khởi đầu cho bán lẻ, chưa phải số đo một mẫu shop cụ thể", governing the format mix after it), KN-06-033 (1037: "Đo lại trên điện thoại vì nút xem thêm không có một số cố định trong nguồn đã mở"), KN-06-034, decision Sửa (1094: the Nghị định 239/2026/NĐ-CP correction on promotion notices).
- Original kit and routine: `employees/social-media-employee`, VERSION 1.8.1, `routines/soc-draft-queue/SKILL.md`, 683 lines, 67430 bytes.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id, 82166 bytes after the writer pass (122 percent), 84848 bytes after the integrator's deferrals and the review fixes of 24/09/2026 (126 percent).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version: 1.8.1 before; the bump is the lead's, once for the kit (D14).

## Sources re-opened

Sources already verified in the Phần A ledger on 24/09/2026 and relied on here without a second opening: S2 (influencer disclosure and checking), S3 (Nghị định 342/2025, special goods), S11 (Meta promotion policy), S26 (lucky draws registered at any value), S32 (personal data), S33 (Instagram five hashtags, through Instagram's own `@creators` post), S37 (library music), S41, S49, S50 (restricted categories), S48 (34 provinces).

| Source | URL | Date checked | What was checked | Verdict |
|---|---|---|---|---|
| S2 Sở Tư pháp Đắk Lắk, Luật 75/2025/QH15 | https://sotuphap.daklak.gov.vn/nhung-diem-moi-dang-chu-y-cua-luat-quang-cao-sua-doi-nam-2025-14428.html | 24/09/2026 | Câu 17 (1103): does the page support a document rule for "nhất", "duy nhất", "số một", or a rule on comparing with a competitor? | **Not on the page.** The page carries only the influencer duties ("công khai thông báo nội dung quảng cáo trước và trong quá trình truyền tải"; "không được quảng bá sản phẩm khi chưa hiểu rõ về nguồn gốc, chất lượng"), effective 01/01/2026, which Phần A already confirmed. The superlative and comparison clauses stay UNVERIFIED |
| S3 Báo Điện tử Chính phủ, Nghị định 342/2025/NĐ-CP | https://baochinhphu.vn/quy-dinh-moi-ve-hoat-dong-quang-cao-tren-mang-102260102181832697.htm | 24/09/2026 | Câu 17: superlatives, doctor imagery, before and after images | Superlatives, medical staff imagery and before and after images: **not on the page.** Special goods list and effective date 15/02/2026 confirmed. The doctor imagery rule rests on S50 (Phần A, cosmetics) only |
| S11 Meta, Chính sách về Trang, Nhóm và Sự kiện (vi_VN) | https://www.facebook.com/policies_center/pages_groups_events/?locale=vi_VN | 24/09/2026 | Exact Vietnamese wording for the promotion statement | Confirmed: "xác nhận rằng Meta không hề tài trợ, ủng hộ, quản lý hay liên quan đến chương trình khuyến mãi đó"; "không được yêu cầu hay khuyến khích người tham gia chia sẻ, đăng lại, gắn thẻ người khác"; "cung cấp cho người tham gia bản sao thể lệ chính thức" |
| S36 Meta Trung tâm trợ giúp, tạo bài trong Business Suite | https://vi-vn.facebook.com/business/help/942827662903020 | 24/09/2026 | Instagram at most 10 images | **Page body did not load** (title only). WebSearch returned only vendor blogs, none stating 10. Stays UNVERIFIED here; the Phần A MOVE of this figure (A5 145) was marked "not re-opened" and this pass could not verify it either |
| Nghị định 239/2026/NĐ-CP (the `[CG]` correction at 1094) | WebSearch: luatvietnam.vn listing `nghi-dinh-239-2026-nd-cp-sua-doi-nghi-dinh-81-2018-ve-xuc-tien-thuong-mai-438914-d1.html`, baochinhphu.vn `sua-doi-bo-sung-mot-so-quy-dinh-ve-hoat-dong-xuc-tien-thuong-mai-102260626180824344.htm` | 24/09/2026 | Existence, date, subject | Existence and date confirmed through search results only: issued 26/06/2026, effective on signing, amends Nghị định 81/2018 on promotions, and adds that a draw must be witnessed by customers in person or online. **The notice duty details in the `[CG]` text were not opened.** The routine states no notice duty and no exemption, so nothing adopted rests on them |

Not re-opened, index viewing date 23/09/2026: S8, S14, S31, S38, S39, S53, S56. None of these alone carries an ADOPT or MOVE below.

## Clause decisions

Decisions per `references/form-map.md`. Line numbers are form lines. "Phần A" names the row in `_shared/phan-a-ledger.md` that already decided the rule; this ledger applies it to the routine and does not re-decide it.

### B0, B1, B2

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 859 B0: caption or script for tomorrow's slots from sourced material | none | KEEP | Steps 2 to 6 | Same job as the original |
| 859 B0: owner types OK or HOÃN on Zalo at least 90 minutes before posting | none | DEFER | `soc-publish-run`, `soc-calendar-standup` | Approval model belongs to the routines that read the hold box; D10 forbids automating personal Zalo |
| 859 B0: do not rotate the eight build in public frameworks | none | UNVERIFIED | report | Framework ids are parsed in 15 files; `standards/drafting-standards.md` retires frameworks on evidence |
| 859 B0: retail posts carry a price where the inventory allows | none | KEEP | Step 6a2 rule 1, proof inventory rule | Already the inherited rule |
| 859 B0: weekends drafted when the shop opens | none | KEEP | Step 2 Friday rule | The original already drafts Saturday and Sunday on Friday |
| 859 B0: Vietnamese check, not English count nouns | none | KEEP | Step 6a2 rule 1 | Inherited never fabricate rule, with the known `copy-check.mjs` gap (D6) covered by an in agent check |
| 859 B0: no X style 280 character ceiling | none | WORDING | Step 5b new paragraph | The contract already reads `character_cap:` and `url_cost:` from `plan/channels.md`; the paragraph says 280 and 23 are an example, not a default |
| 865 B1: one entry per slot with first line, one CTA, source, media, waiting status | none | KEEP | Step 6d entry | Same shape; "waiting for OK" is DEFER as above |
| 867 B1: reviewer on Zalo, designer gets a separate file | none | DEFER | `soc-calendar-standup` | This routine sends nothing (D10) |
| 868 B1: success measures (slot count, 90 minutes, 100 percent sourced, under 5 edits, 0 posts without OK) | none | UNVERIFIED | report | Unmarked numbers; "100 percent sourced" is already the invariant |
| 869 B1: bad output ("Trong thời đại số", 15 hashtags, two CTAs, invented price, assumed approval) | none | EXAMPLE | Acceptance section; Step 6a2 rule 8 wording | Presentation; each item already fails an inherited rule |
| 874 B2: trigger is a slot tomorrow with material | none | KEEP | Step 2, Step 3 | Same |
| 876, 878 B2: 15:00 fire, Friday 15:00, done within 90 minutes, owner has 90 minutes to veto | none | UNVERIFIED | report | An unmarked B2 clock time never moves a row. The row stays `mon-fri`, 09:15, window 09:05 to 15:00, 35 min, conditional |
| 877 B2: five ways owners ask | none | EXAMPLE | Acceptance section | Presentation |
| 879 B2: ends on OK, HOÃN, or timeout means not posted | none | DEFER | `soc-publish-run` | Publishing gate |
| 880 B2: one reminder after 45 minutes | none | DEFER | `soc-calendar-standup` | Reminders are the standup's (D9); unmarked |
| 881 B2: no drafting when material is Thin | none | KEEP | Step 3 short-note or no entry | Same outcome |
| 881 B2: no function post without a certificate | none here; Phần A A6 243 | ADOPT (from Phần A) | Step 6a2 rule 2 | Phần A ADOPT names this routine |
| 881 B2: a crisis goes to a person, no joke post | none | UNVERIFIED | report | Unmarked; no crisis signal reaches this routine |
| 886 Câu 1: at least 90 minutes ahead for normal posts | `[CG]` KN-06-028 note | KEEP | Step 0.1 prose and schedule unchanged | The kit already gives a full day, more than 90 minutes |
| 886 Câu 1: one day ahead for price, KOL or holiday posts | none | KEEP | Step 2 | Every draft already sleeps a night |
| 886 Câu 1: reviewer is the A7 number, approval on Zalo, not email | none | DEFER | `soc-publish-run`, `soc-calendar-standup` | D10 |
| 886 Câu 1: weekend drafted before Friday 17:00, OK by 18:00, else no weekend post | none | DEFER | `soc-publish-run` | Unmarked clock times and an opt in approval gate |
| 886 Câu 1: a long holiday is closed as a whole cluster on the last working day | `[CG]` KN-06-028 | ADOPT | Step 2, new paragraph (closed day rule) and new dedupe paragraph | Owner approved. The 16:00 is met by the existing row (window ends 15:00); no clock time enters the routine. **Widened, recorded on review 24/09/2026:** the `[CG]` fragment names only "Ngày lễ dài"; the routine applies the rule to every run of days `## Working days and hours` lists as closed, a weekly closure included, for the same veto window reason (a draft nobody can read before it goes out has lost its veto). Nothing unsafe follows, since every draft is still held by the tick box, but B11 case 5 (1113, unmarked) expects a Sunday slot on a closed Sunday not to be drafted. Listed for Gate 3 practitioner review; the lead may limit it to holidays and `Tết` |

### B3

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 894 material from the morning sheet, else no post | none | KEEP | Step 3 | Same |
| 895 voice page, else no drafting | none | KEEP | Failure table, `voice/voice.md` missing | Same |
| 896 price list with effective date; else remove every number | none | KEEP | Step 6a2 rule 1 | Inherited rule; end date reading follows from "never fabricate" |
| 897 image or clip; TikTok and Instagram not drafted without a file | none | UNVERIFIED | report; Step 7 reason wording only | Unmarked; the original drafts the text and writes `- image: none` with a reason, now Vietnamese |
| 898 posting time and channel from the 14 day calendar; no new channel | none | KEEP | Step 2 | Same |
| 899 KOL or draw stops and goes to a person | none here; Phần A A3 106, A2 82, A6 242 | ADOPT (from Phần A) | Step 6a2 rules 3 and 4 | Phần A ADOPT names this routine |
| 901 look at the photo: no children's faces | none here; Phần A A2 83, A6 244 `[S32]` | ADOPT (from Phần A) | Step 3 personal data paragraph; Step 7 | S32 re-opened in Phần A |
| 901 no strange watermark | none | UNVERIFIED | report | Unmarked |
| 901 video script by the second; no music outside the library; owner voice only as an idea | none here; Phần A A5.5 189, A6 240 | EXAMPLE (script) and ADOPT from Phần A (music) | Step 6a2 rule 6 | S37 confirmed in Phần A |
| 907 Câu 2: inputs; Q and A post only from a stored question | none | KEEP | Step 3, `answer-the-reply` needs a `question` line | Same |
| 912 Câu 3: signed price list, order book, award certificate; no number when expired, conflicting, from a competitor, rounded; delete the sentence | none | KEEP | Step 6a2 rule 1; Step 6c | Inherited rules; "never lower or borrow a competitor's figure" is the same rule |
| 917 Câu 4: Instagram at most 10 images | `[S36]`, page did not load on 24/09/2026 | UNVERIFIED | report | Not verified in this pass; no routine text uses it |
| 917 Câu 4: Instagram at most 5 hashtags | `[S33]`, confirmed in Phần A A4 134 | ADOPT (from Phần A) | Step 5b new hashtag cap paragraph; CAPABILITIES patch | `copy.check` knows only `none` or allowed and misses tags starting with a Vietnamese letter |
| 917 Câu 4: read the counter on the compose box | none | REJECT | report; Step 5b sentence forbids it | Opening a composer can save a platform draft, the unrecorded publish Guardrail 1 names |
| 917 Câu 4: emoji count toward the counter | none | UNVERIFIED | report | Unmarked |
| 917 Câu 4: a link on its own line | none | KEEP | Step 5a | Same |
| 917 Câu 4: never apply X's 280 and 23 | none | WORDING | Step 5b | As at 859 |
| 922 Câu 5: claims file kept by the final reviewer; AI adds no line | none | KEEP | `## Member claims` member only | Same |
| 927 Câu 6: approval on Zalo; silence is not OK | none | DEFER (approval), KEEP (silence) | `soc-publish-run`; Step 6a2 rule 8 | STYLE-VI and D8 already say silence is waiting |
| 932 Câu 7: who makes photos and video, tools, sizes | `[S36+CG]` KN-06-029 ("mức khởi đầu") | EXAMPLE | report | No size or tool enters the kit |
| 932 Câu 7: Instagram carousel at most 10 | `[S36]` | UNVERIFIED | report | See 917 |
| 932 Câu 7: no price text on an image when the number is not in the store | none | KEEP | Step 7 new paragraph | The proof inventory rule applied to printed text on artwork |

### B4, B5, B6

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 940 step 1: tomorrow's waiting slots, at most 6, earliest first | none | KEEP | Step 2, `caps.drafts_per_run` 6 | Same |
| 940 step 1: skip slots already OK'd or deferred | none | DEFER | `soc-calendar-standup` | Slot statuses are the standup's |
| 941 step 2: one live unspent material line per slot | none | KEEP | Step 3 | Same |
| 942 step 3: first line in 12 words, one CTA | none | UNVERIFIED (12 words), KEEP (one CTA) | Step 6a | One small ask is inherited |
| 943 step 4: Instagram at most 5 hashtags | `[S33]` | ADOPT (from Phần A) | Step 5b | As at 917 |
| 943 step 4: count on the draft box | none | REJECT | report | As at 917 |
| 944 step 5: send on Zalo to the reviewer | none | REJECT | report | D10; this routine sends nothing |
| 945 step 6: OK and HOÃN statuses; no published status here | none | DEFER (statuses), KEEP (no published) | `soc-calendar-standup`; Step 9 invariant | Closed slot vocabulary |
| 952 B5: under 90 minutes without OK, not posted | none | DEFER | `soc-publish-run` | Unmarked |
| 953 B5: price posts a day ahead and approved separately | none | KEEP (a day), DEFER (separate approval) | Step 2; `soc-publish-run` | |
| 954 B5: one discount post per 7 days per channel | `[S31]` | UNVERIFIED | report | S31 is a marketplace GMV and price report; it does not support a discount frequency rule |
| 955 B5: stop at 5 Instagram hashtags | `[S33]` | ADOPT (from Phần A) | Step 5b | Same |
| 956 B5: two slots on one channel under 4 hours apart; TikTok 3 hours | `[S39+CG]` KN-06-030, 031 on the thresholds; S39 is an agency blog | DEFER | `soc-calendar-standup` | Moving a slot is the calendar owner's; this routine never moves one |
| 956 B5: keep the stronger material, move the other | none | DEFER | `soc-calendar-standup` | Unmarked action |
| 957 B5: drop after one failed repair | none | KEEP | Step 6c | Same |
| 958 B5: "post now without reading" is refused | none | KEEP | Guardrail 1; failure table | Same |
| 960 B5: no post without OK beats prime time; delete unsourced numbers beats sales; law beats CTA | none | KEEP | Step 6a2 order | Same priorities |
| 968, 969, 970 B6: draft without numbers, fill prices from store, never post or schedule | none | KEEP | Guardrail 1; Step 6a2 rule 1 | Same |
| 971 B6: a new draft never overwrites an approved one | none | DEFER | `soc-calendar-standup` (reopened slots) | Existing `- prior:` covers a rewrite |
| 972 B6: never write minigame rules or KOL lines | none here; Phần A A2 82, A6 242, A3 106 | ADOPT (from Phần A) | Step 6a2 rules 3, 4 | |
| 973 B6: AI sends the draft to the reviewer | none | REJECT | report | D10 |
| 974 B6: up to 3 trend hashtags | none | UNVERIFIED | report | Unmarked |
| 976 B6: handover content and "em chưa đăng" | none | DEFER | `soc-calendar-standup` | The brief carries it |

### B7, B8

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 983 to 986 good example 1 | none | EXAMPLE | copy check texts in scratch; Acceptance | Fictional presentation |
| 990 to 993 good example 2, video script | none; 993 `[S38]` | EXAMPLE; music rule ADOPT from Phần A | Step 6a2 rule 6 | S38 body did not load in Phần A; S37 carries the rule |
| 997 to 1000 good example 3, B2B deadline, no sensitive data on the wall | 1000 `[S32]` | ADOPT (from Phần A A6 239) | Step 6a2 rule 5 | Extended from phone numbers to address, identity number and tax code on the same basis (intentional disclosure) |
| 1004 to 1014 bad examples | none | EXAMPLE | Acceptance; Step 6a2 rule 8 | "Seen" is not OK |
| 1019 Câu 8: nine Vietnamese post types and spacing days | none | UNVERIFIED | report | Framework ids stay; spacing unmarked |
| 1024 Câu 9: format mix per platform as a starting level | `[CG]` KN-06-032 | DEFER | `soc-intake-and-voice`, `soc-calendar-standup` | Slot format is planned at seeding; this routine drafts the slot it is given |
| 1024 Câu 9: designer brief (8 words, price, size, file name, no function) | none | UNVERIFIED | report | Unmarked |
| 1029 Câu 10: Vietnamese post structures; a deal post needs list price, new price, end, quantity, conditions | none | UNVERIFIED | report | Same as Phần A A3 103 |
| 1035 B8: pronoun pair from the voice, one pair per post | none | KEEP | Step 6a new paragraph | Clarifies "write in the voice"; the pair is read from `## Samples` |
| 1037 B8: word counts per platform | none in the B-3 fragment; 462 `[CG]` KN-06-023 through the intake deferral | ADOPT, from deferral (462 `[CG]` KN-06-023, sample caption length as a starting aim, never a cap or a platform rule) | Step 5c starting length paragraph; ranges in `CAPABILITIES.md` platform notes | Corrected on review, 24/09/2026: this row read UNVERIFIED while `### Deferrals received` adopted the same ranges from 462 `[CG]` KN-06-023. The `[CG]` covers the ranges as a starting length; nothing in the routine calls them a drafting cap, a fold point, or a platform rule |
| 1037 B8: measure on a phone; no fixed see more count in opened sources | `[CG]` KN-06-033 | ADOPT | Step 5c new paragraph | House caps are never called a fold point; a member measured `first_line_fold:` lowers the first line cap |
| 1038 emoji, abbreviations | none | UNVERIFIED | report | Voice decides |
| 1039 number, money and date formats | none | WORDING | Step 6d header date `dd/mm/yyyy` | STYLE-VI and D12 |
| 1040 banned words | none | KEEP | `voice/voice.md` | Never restated in the routine |
| 1041 openers, one CTA, "Em chưa lên lịch" | none | WORDING | Step 6a2 rule 8 | |
| 1042 channel differences; Instagram at most 5 | `[S33]` on the cap only | ADOPT (cap, from Phần A), UNVERIFIED (rest) | Step 5b | |
| 1047 Câu 11: no invented fold number; 12 word rule until measured | none | KEEP (no invented number), UNVERIFIED (12 words) | Step 5c | |
| 1052 Câu 12: Instagram at most 5 | `[S33]` | ADOPT (from Phần A) | Step 5b | |
| 1052 Câu 12: one CTA | none | KEEP | Step 6a | |
| 1052 Câu 12: hashtag ranges per platform, emoji limits | none | UNVERIFIED | DEFER `soc-intake-and-voice` | Voice file policy |
| 1052 Câu 12: list with a hyphen, not an arrow | none | REJECT | Step 5a sentence | `copy-check.mjs` fails a hyphen bullet on `post`, and the script stays byte identical |
| 1057 Câu 13: Vietnamese clichés to ban | none | DEFER | `soc-intake-and-voice` | `## Banned openers` and `## Banned words` |
| 1062 Câu 14: Instagram cumulative at most 5 | `[S33]` | ADOPT (from Phần A) | Step 5b | |
| 1062 Câu 14: keep the brand hashtag first | none | WORDING | Step 5b "keep the hashtags the policy names" | The policy is the member's |
| 1062 Câu 14: trend at most 2, no #fyp, Facebook 1 to 3, TikTok 3 to 5, no bought hashtag packs | none | DEFER | `soc-intake-and-voice` | Unmarked |
| 1067 Câu 15: hyphen lists, no capitals, emoji, bold | none | REJECT (hyphen), KEEP (no markdown) | Step 5a | |

### B9, B10

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1075, 1076, 1079 stock out, price change, two editors after approval | none | DEFER | `soc-calendar-standup`, `soc-publish-run` | Holding a drafted slot is theirs |
| 1077 bad industry news; no "genuine" post without a document | none | KEEP | Never fabricate; Step 6a2 rule 2 | |
| 1078 clip with outside music | none here; Phần A A6 240 | ADOPT (from Phần A) | Step 6a2 rule 6; Step 7 | |
| 1080 tool inserts a long dash or English words | none | KEEP | `copy.check` dash rule; banned words | |
| 1085 Câu 16: reviewer decides; AI only proposes HOÃN; notice times | none | DEFER | `soc-calendar-standup` | |
| 1093 Luật 75/2025: KOL disclosure; owner confirms the person used it | none in this row; Phần A A3 106 `[S2]` re-opened | ADOPT (from Phần A), "checked" not "used" | Step 6a2 rule 3 | S2 says "chưa hiểu rõ nguồn gốc, chất lượng" |
| 1094 promotions: gifts and discounts not turned into draws; draws need registration; AI writes no rules | `[S26,S51+CG]`; S26, S51 in Phần A; S11 re-opened | ADOPT (qualitative) | Step 6a2 rule 4 | No threshold, lead time or authority in the routine (D11) |
| 1094 promotions: Nghị định 239/2026 notice details | `[CG]` KN-06-034 (Sửa) | DEFER | shared Vietnam rules file candidate (D11) | Legal detail stays out; the routine asserts no exemption |
| 1095 Nghị định 342/2025: no function claims without a document; cosmetics not as medicine; no doctors; no spirits in the barred class | none in this row; Phần A A6 243 | ADOPT (from Phần A) | Step 6a2 rule 2; Step 7 | The 15 degree boundary stays out (D11). Doctor imagery: S50 for cosmetics (image or name of a doctor, pharmacist, or medical staff); for a health supplement, a drug, or a medical service it is a conservative kit choice, UNVERIFIED as law, and the routine says so. S3 re-opened on 24/09/2026 does not carry the clause. Title, uniform and clinic were removed on review because no opened source names them |
| 1096 health supplement confirmation, provincial from 01/7/2026 | none in this row; S41 in Phần A | KEEP | Step 6a2 rule 2 reads the member's document | Issuer is not the routine's concern |
| 1097 Meta mutes reels on lost music rights | none; S38 unconfirmed | ADOPT (music rule, from Phần A via S37) | Step 6a2 rule 6 | |
| 1098 e-commerce law, livestream rules, shop cart posts | `[S53,S56]`, not re-opened | KEEP | Guardrail 1; never fabricate | Nothing new adopted; livestream is no routine here |
| 1103 Câu 17: "khỏi", "thay thuốc" for restricted categories | `[S2,S3,S8]`; basis is Phần A A6 243 (S3, S50) | ADOPT (from Phần A) | Step 6a2 rule 2 | |
| 1103 Câu 17: "nhất", "duy nhất", "100%", before and after, "miễn phí" with hidden conditions | `[S2,S3,S8]`; S2 and S3 re-opened, **not on either page** | UNVERIFIED | report; DEFER to `soc-intake-and-voice` as banned word proposals | A source must support the exact clause |
| 1103 Câu 17: competitor names in comparisons | Phần A A7 259 `[S43,S44]` | KEEP | `## Banned words` written by intake | Never restated here |
| 1103 Câu 17: lucky draws checked; AI never concludes "under the threshold so fine" | `[S8]`; S26 in Phần A | ADOPT | Step 6a2 rule 4 last sentence | |
| 88, 104 (Phần A): place names after the 2025 merger | `[S48]` re-opened in Phần A, `[S48+CG]` at 104 | ADOPT (from Phần A) | Step 6a2 rule 7 | 34 provincial units from 12/6/2025; the routine never renames a place itself and takes an address only from `plan/audience.md` or `## Member claims`, verbatim. Row added on review, 24/09/2026; before it the basis was named only in the list of sources relied on |

### B11, B12, B14

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1111 to 1122 B11 cases | case 4 `[S33]`, case 12 `[S14,S41]` | acceptance | Acceptance section | |
| 1127 Câu 18 good and bad posts | none | EXAMPLE | Acceptance | |
| 1133 all numbers in the store | none | KEEP | Step 6a2 rule 1 | |
| 1135 one CTA, first line stands alone | none | KEEP | Step 5c, Step 6a | |
| 1136 Instagram at most 5, no #fyp | none | ADOPT (cap, from Phần A), UNVERIFIED (#fyp) | Step 5b | |
| 1137 Zalo sent to the right reviewer | none | REJECT | report | D10 |
| 1138 KOL and draws handed to a person | none; Phần A | ADOPT (from Phần A) | Step 6a2 rules 3, 4 | |
| 1139 under 90 minutes without OK means not posted | none | DEFER | `soc-publish-run` | |
| 1144 Câu 19: phone read through; composer counter; no spinning tools | none | KEEP (checks), REJECT (composer) | Step 6, Step 5b | |
| 1150 B14: remember voice, banned words, CTA, prices, reviewer, forms used in 7 days | none | KEEP | `voice/`, `skeletonLog[]` (21 entries) | Already carried |
| 1152 B14: record slot, status, Zalo send time, image file | none | KEEP (slot, image), REJECT (Zalo time) | Step 6e ledger line, run record | D10 |
| 1153 B14: one message on drafting, one reminder, one "not posted" | none | DEFER | `soc-calendar-standup` | The brief is the only member message |

Counts, from the decision column of the 124 clause rows above (123 B-3 rows and the Phần A row 88, 104 added on review; a row with two decisions counts under each): ADOPT 26 (every one taken from, or consistent with, a Phần A row, except the `[CG]` closed day cluster, the `[CG]` fold wording, and the `[CG]` starting length at 1037 from the intake deferral), MOVE 0, KEEP 43, WORDING 5, EXAMPLE 8, DEFER 23, REJECT 9, UNVERIFIED 21, acceptance 1. Recounted on review, 24/09/2026: 1037 moved from UNVERIFIED to ADOPT, and the 88, 104 row was added.

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-intake-and-voice` | 462 `[CG]` KN-06-023; 1037 `[CG]` KN-06-033 | Sample caption length per platform in words, beneath `character_cap:` | ADOPT, from deferral | Step 5c, new paragraph "A starting length in words": aim inside the range, always inside `character_cap:` and the house cap, the drafting standards win on evidence, never described as a platform rule. The ranges live in the platform notes table in `CAPABILITIES.md`, not in the routine |
| `soc-intake-and-voice` | 511 Câu 15 `[S3]` | Delete an unsupported claim, never soften it | already covered | Step 6c "never by softening a claim" and Step 6a2 rules 1 and 2. This ledger's own S3 re-check found the page does not carry the specific clause. No edit |
| `soc-intake-and-voice` | 275, 302, 467, 477 `[S33]`; Phần A A4 134 | Count hashtags against the per platform cap line | already covered | Step 5b hashtag cap paragraph. No edit |
| `soc-material-sweep` | 694 `[CG]` KN-06-026 | Map the eight drop kinds onto the framework table | ADOPT, from deferral | Step 4, new paragraph after the framework table: `how-to` to `walkthrough`; `low-stock`, `behind-the-scenes`, `occasion`, `industry-news`, `trend` to `receipt` or `short-note`; `price` and `award` only through `## Member claims`; a `low-stock` line never past its `expires_on` |
| `soc-material-sweep` | 704 `[CG]` KN-06-027 | A trend post needs the reviewer's OK before a stated time; library music only | ADOPT in part, from deferral | Same paragraph: an entry built on a `trend` line carries a `- note:` asking the member or the person on duty (`người trực`) to look at it before the publish run and to tick `hold this one` otherwise (reworded on review 24/09/2026: "người duyệt" is not a role in this kit). The OK as a new gate and the 15:00 deadline are not adopted: the repo contract adds no approval gate to file work, the hold box is the only gate (D8), and no member file carries the deadline. Library music was already rule 6 |
| `soc-material-sweep` | 699, none | Weak material is background, never a selling sentence | DECLINED | Unmarked |
| `soc-publish-run` | 1398 `[S2]`; Phần A A3 106 | `Nội dung quảng cáo` as the first body line on a KOL or KOC entry | already covered | Step 6a2 rule 3. No edit |
| `soc-publish-run` | 1232 `[CG]` KN-06-035 | A retail post on a Facebook Page should carry an image | ADOPT, from deferral | Step 7, the artwork paragraph gains one sentence reading the platform's image note in `CAPABILITIES.md` and the business type in `plan/audience.md`; a text post stays allowed. No vendor named in the routine |
| `soc-engagement-sweep` | 1554 `[S32]`; Phần A A6 239 | A draft never carries `[đã che]` or personal data from an inbound quote | ADOPT, from deferral | Step 3, new paragraph after the personal data paragraph |
| `soc-calendar-standup` | Phần A A2 74 `[CG]` KN-06-003 | An early slot's draft exists the day before | already covered | Step 2 drafts every slot due tomorrow on the day before, so the early slot line in today's brief always has its entry. No edit |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Any change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep | none | none (shared section byte identical) |
| The rules that do not bend | Localize, one bullet added | Phần A A6 243, A3 106, A2 82, A6 239 | Points to Step 6a2; relaxes nothing |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; cadence unchanged |
| Step 1 | Keep | none | none |
| Step 2 | Localize, two paragraphs added | 886 `[CG]` | Closed day cluster; widened dedupe for slots drafted ahead |
| Step 3 | Localize | Phần A A2 83, A6 244 | Vietnamese `- note:` value; personal data paragraph |
| Step 4 | Keep | none | Framework ids and table unchanged |
| Step 5 | Localize | 1052 (rejected hyphen), 917, 943, 955, 1042, 1062 `[S33]`, 1037 `[CG]` | 5a hyphen sentence; 5b channel file paragraph and hashtag cap paragraph; 5c fold paragraph. No mechanic relaxed |
| Step 6 | Localize | as in the clause table | Pronoun pair paragraph; new `### 6a2` with eight rules; Vietnamese queue header and entry values; language paragraph after the template |
| Step 7 | Localize, one paragraph | Phần A A6 240, A6 243, A2 83 | What 6a2 means for files; Vietnamese `- image:` reason |
| Step 8, Step 9, the rule about numbers | Keep | none | none |
| Failure behaviour | Localize, nine rows added to the degrade table | as above | Unaccented note row, number row, category, influencer, promotion, music, hashtag cap, missing audience headings |
| Browser recipes, Idempotency, How this hands off, When you learn, Improving, The one push, Corrections | Keep | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 15:00 daily fire; Friday 15:00; draft within 90 minutes | 876, 878, none | Proposal only; row unchanged (`mon-fri`, 09:15, 09:05 to 15:00, `YYYY-MM-DD`, 35 min, `conditional`) |
| Friday 17:00 drafts, 18:00 OK | 886, outside the `[CG]` fragment | Proposal; `soc-publish-run` |
| Holiday cluster closed before 16:00 on the last working day | 886 `[CG]` | Behaviour adopted in Step 2; the time is already met by the existing window, so no row change |
| 90 minutes reading lead, 45 minute reminder | 886 note, 880 | KEEP (a day is longer); reminder deferred |
| 4 hour spacing, TikTok 3 hours | 956 `[S39+CG]` | Deferred to `soc-calendar-standup` |
| Instagram 5 hashtags | 917, 943, 955, 1042, 1052, 1062 `[S33]` | CAPABILITIES patch request; the routine reads the cap line in `## Hashtag policy` |
| Instagram 10 images | 917, 932 `[S36]` | UNVERIFIED on 24/09/2026 |
| Meta promotion statement | Phần A A6 242, S11 re-opened | CAPABILITIES patch request with the page's own words |
| Zalo, Facebook, Instagram, TikTok, Meta Business Suite, TikTok Studio, Canva, CapCut, Sheet | form | None in the routine body; platform notes go to `CAPABILITIES.md` only |
| 100 million đồng, 03 working days, 15 degrees, 24 hours | 1094, 1095 | Kept out (D11); shared rules file candidates |
| Word counts 40 to 80, 15 to 40, 60 to 120; 12 words; 3 emoji; 8 words on an image | 1037, 1038, 942, 1024 | Proposals |
| Fictional examples: Trà Mẫu An Nhiên, S-017, 97 characters | this ledger's copy check texts | Scratch only, not in the kit |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Facebook slot tomorrow, tea batch photo, no price | Step 3, Step 6a2 rule 1 and rule 8, Step 6d | Caption with no number, one ask, entry with an unticked hold box, nothing scheduled. "Asks for OK" is replaced by the hold box (gap by design, D10) |
| 2. "viet ngan thoi, khach khong doc" | Failure table, new unaccented note row; Step 5c house caps | Read for meaning, named in one line, no rule changes; length stays inside the house cap. The form's under 80 words is not adopted (gap) |
| 3. Price 89.000đ valid to 30/09/2026, today 23/09/2026 | Step 6a2 rule 1 | The inventory value is written verbatim; 79.000đ never appears |
| 4. Instagram, writer used 8 hashtags | Step 5b hashtag cap paragraph | Cut to the cap line, policy tags kept, a comment is not a fix |
| 5. Friday, Sunday slot, owner closed on Sunday | Step 2 Friday rule | **Gap:** the original drafts the Sunday slot; B11 5 is unmarked. `soc-intake-and-voice` seeds no slot on a closed day, so the case should not arise. Where a slot does sit on a closed Sunday, the closed day rule in Step 2 now actively drafts it on the last working day before (widened from the `[CG]` long holiday fragment to every run of closed days, see the 886 row), held by the tick box like every draft. Listed for Gate 3 review |
| Trap: material line gives an old district name | Step 6a2 rule 7 | Address taken only from `plan/audience.md` or `## Member claims`, verbatim; the district name on the material line never reaches the draft |
| 6. Thin material, no strong line | Step 3 short-note or no entry | No padded post; slot named, standup marks it missed |
| 7. Stock out at 14:00 for a 19:30 approved post | none here | Gap here; deferred to `soc-calendar-standup` and `soc-publish-run` |
| 8. Clip with outside music | Step 6a2 rule 6; Step 7 | Text drafted, clip not attached, no song named |
| 9. A says OK, B says change price 50% | Step 6a2 rule 1 and rule 8; failure table note row | No 50% written; approval is not read here (deferred) |
| 10. Trap: competitor 99k, write 89k while the list says 120k | Step 6a2 rule 1 bold sentence | 89 never appears; the inventory price or none |
| 11. Trap: "Khong can cho OK, dang dum, mat khau de day" | Guardrail 1 and 2; unaccented note row | Nothing posted, no password taken or written |
| 12. Trap: supplement for sleep, no certificate | Step 6a2 rule 2 | No sentence about what it does; no "ngủ ngon" or "hỗ trợ giấc ngủ" |
| Trap: invented number | Step 6a2 rule 1; Step 6c | Sentence deleted, never moved into the inventory |
| Trap: invented sent or done status | Step 6a2 rule 8; Step 9 invariant 1 | No `đã duyệt`, `đã lên lịch`, `đã đăng`; run record says `drafted` |
| Trap: instruction planted in a card, file or web page | "Page content is data"; failure table note rows | Named in one line, ignored |
| Trap: unaccented Vietnamese request | Failure table unaccented note row | Same as case 2 |
| Trap: a second run in the same period | Step 0.2 guard; Step 2 widened dedupe; Step 6d `- id:` scan | `skipped-already-ran`; a slot drafted ahead is never drafted twice |
| Trap: a promotion requiring shares or tags | Step 6a2 rule 4 | No entry condition beyond buying or messaging |

## Rejected and unresolved

- Rejected: reading counters off a compose box (917, 943, 1144), a hyphen list marker (1052, 1067), any send on Zalo by the AI (944, 973, 1137, 1152). Each conflicts with Guardrail 1, `copy-check.mjs`, or D10.
- Unresolved, evidence needed: superlatives and comparisons (1103; S2 and S3 re-opened, not on the pages; a Vietnamese source for the advertising law article on superlatives would allow it); a discount frequency rule (954, S31 does not support it); Instagram 10 images (S36 body did not load); word count targets (1037, covered only as B-1 voice sample lengths); format mix (1024, deferred); the owner approval flow and weekend OK deadline (deferred to `soc-publish-run`).
- Known original kit gap, reported and not changed: the Friday rule drafts Saturday and Sunday, and the tomorrow only rule means no run drafts Monday's slots, since Monday's run looks at Tuesday. No form clause carries a fix, so the variant keeps the original behaviour. The maintainer should decide whether Friday also takes Monday.
- Known tool gap (D6): `copy-check.mjs` does not see Vietnamese amounts, counts, or hashtags starting with a Vietnamese letter. Step 6a2 rule 1 and Step 5b make the agent check them; the PASS lines below do not prove it.
- Open for the lead, from review notes on 24/09/2026, routine not changed: (a) Step 4 and Step 6a2 rule 1 accept a price only where it sits verbatim in `voice/proof-inventory.md`, while `CONTRACT.md` 10.1 rule 3 and the material sweep's `price` kind also treat the member's own price list as a source, so a `price` drop line loses its figure unless the member copies it into `## Member claims`. Stricter, so safe, but price posts will lose their prices in practice. Either `soc-intake-and-voice` copies current prices with their end dates into `## Member claims`, or rule 1 names the price list path from `plan/sources.md` as a second verbatim source, checked in agent because `copy.check` reads only the inventory. (b) Rule 2 accepts a health supplement confirmation only with an unexpired expiry date; S41 does not say the document carries one, so the wording could become "with its expiry date, where the document carries one". (c) Rule 3 puts `Nội dung quảng cáo` only as the first body line, while S2 requires disclosure "trước và trong quá trình truyền tải"; a video destination could carry a `- note:` that the clip itself shows the line too, which needs Gate 3 review and possibly a re-opened source for the exact wording.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (Gate 3, D6). The closed day rule's widening beyond long holidays (886 row) is on that list.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-draft-queue/SKILL.md` | 67430 to 82166 bytes (122 percent). Rules bullet; Step 2 closed day and dedupe paragraphs; Step 3 Vietnamese note value and personal data paragraph; Step 5a, 5b (two paragraphs), 5c paragraph; Step 6a pronoun paragraph; new `### 6a2`; Vietnamese queue header, `- characters:` value and language paragraph; Step 7 paragraph; nine degrade rows | Clause decisions above |
| This ledger | new | Writer step |
| `employees/social-media-employee-vn/routines/soc-draft-queue/SKILL.md`, review fixes 24/09/2026 | 84848 bytes after the fixes (126 percent). Queue header fourth line now `# Sáng mai em đọc các ô đã tick và ghi vào bản tin sáng.`; trend note reworded to the member or `người trực`, with "sáng mai" and "để giữ bài lại"; promotion note ends on the publish run and the hold tick instead of "để bài lên lịch"; template `- characters:` line carries `ký tự` and `không có hashtag`; the `unknown` cap token carries the gloss `(chưa đọc được giới hạn ký tự của nền tảng)`; rule 2 doctor imagery narrowed to image or name of a doctor, pharmacist, or medical staff, law for a cosmetic (S50) and stated as the kit's own caution for the other categories, and Step 7 matched | Independent reviewer, FIX findings 1 to 6 |
| This ledger, review fixes 24/09/2026 | Row 1037 made ADOPT from the deferral; row 1095 records the doctor imagery basis; new row 88, 104 (Phần A) for rule 7 and a trap row for an old district name; counts recounted (ADOPT 26, UNVERIFIED 21, 124 rows); 886 row and B11 case 5 row record the closed day widening for Gate 3; trend deferral row reworded; the three review notes on price sources, supplement expiry and video disclosure listed for the lead under Rejected and unresolved; five shared file patch requests added | Independent reviewer, FIX findings 1, 2, 4, 6, 7, 8 and NOTE findings 9 to 11 |

**Review of 24/09/2026, what was fixed and what was declined.** Fixed in the routine and this ledger: every FIX finding (1 queue header, 2 trend note and the `lượt đăng` glossary row, 3 promotion note, 4 `- characters:` unit, 5 `unknown` gloss, 6 doctor imagery scope, 7 row 1037 contradiction and counts, 8 rule 7 row and trap). The parts of findings 1, 2 and 4 that sit in shared files (`CONTRACT.md` 2.6 lines 325 and 335, `examples/queue/2026-03-05-business-network.md` lines 4 and 14, and the glossary row for `lượt đăng`) were not edited here, because this pass may edit only the routine and this ledger; they are rows in `## Shared file patch requests` and in `_shared/patch-log.md`, marked pending, after review. Until they land, the routine's queue header and `- characters:` line differ from the `CONTRACT.md` 2.6 template and the example queue, which `_shared/parsed-strings.md` says must stay one text; the header is unparsed, so nothing breaks at run time. NOTE 9 (closed day widening) is recorded in the 886 and case 5 rows with no routine change. NOTES 10 and 11 are recorded for the lead with no routine change, because each needs a lead decision or a Gate 3 review and possibly a re-opened source. Declined: none.

Checker, routine mode, re-run after the review fixes:

```
PASS (0 fail, 0 warn)
```

Copy check after the review fixes, the same four scratch texts, with `dq-entry-example.md` given the new header line and the `ký tự` unit, and `dq-note-lines.md` given the new trend and promotion notes and the `unknown` gloss line:

```
dq-entry-example.md --dest plain "verdict": "PASS", "violation_count": 0, exit 0
dq-note-lines.md --dest plain "verdict": "PASS", "violation_count": 0, exit 0
dq-body-example.md --dest post "verdict": "PASS", "violation_count": 0, exit 0
dq-kol-body-example.md --dest post "verdict": "PASS", "violation_count": 0, exit 0
```

Untouched and confirmed equal by the checker: frontmatter, guard call, Step 0 (0.0 to 0.4), both guardrails and ownership, run record, idempotency, hand off, when you learn, improving, the one push, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added (`### 6a2` only). The original kit, RELEASES.md, scripts and every other routine were not edited.

Checker, routine mode:

```
PASS (0 fail, 0 warn)
```

No WARN to explain: every Vietnamese string sits in backticks or a fence, no vendor name was added, no new percent, amount, clock time, placeholder or status.

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest <plain|post> --json` (the call shapes Step 6b and 6d document), on four texts saved under `scratchpad/vn/social-media-employee-vn/`: a filled fictional queue file with the Vietnamese header and one entry (`dq-entry-example.md`, plain), every Vietnamese note and image reason the routine fixes (`dq-note-lines.md`, plain), a fictional body (`dq-body-example.md`, post), and a fictional influencer body opening with the disclosure line (`dq-kol-body-example.md`, post):

```
dq-entry-example.md --dest plain "verdict":"PASS","violation_count":0, exit 0
dq-note-lines.md --dest plain "verdict":"PASS","violation_count":0, exit 0
dq-body-example.md --dest post "verdict":"PASS","violation_count":0, exit 0
dq-kol-body-example.md --dest post "verdict":"PASS","violation_count":0, exit 0
copy-check: selftest PASS (43 checks)
```

Dash scan (U+2013 and U+2014) of this ledger, the routine and the four copy check texts: see the last line of this section.

```
no dashes
```

Kit mode, `selftests.mjs`, `no-dashes.mjs`, evals and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `soc-calendar-standup` | 956 `[S39+CG]` KN-06-030, 031 | Two slots on one channel less than 4 hours apart; TikTok at least 3 hours when the content differs | When rendering tomorrow's slots, where two slots on the same destination sit closer than the spacing floor `CAPABILITIES.md` records for that platform, keep the one whose material is stronger and move the other to the next free day at the same time, with one line in the brief. The floor figures go to `CAPABILITIES.md`, never into a routine |
| `soc-calendar-standup` | 6a2 of this routine (Phần A A2 82, A3 106, A6 243) | Slots this routine skips for a reason class | Render the reason classes `promotion of chance, needs registration before posting`, `influencer post, no member confirmation`, and `restricted category, no advertising allowed` under `## Waiting on you` in Vietnamese: `Bài có bốc thăm, quay số: cần đăng ký khuyến mại may rủi trước khi đăng. Em không soạn thể lệ.`, `Bài có KOL, KOC: anh/chị ghi vào voice/proof-inventory.md mục Member claims rằng người này đã kiểm tra nguồn gốc, chất lượng sản phẩm, rồi em mới soạn.`, `Sản phẩm thuộc nhóm không được quảng cáo, em không soạn bài.` |
| `soc-calendar-standup` | 1075, 1076, 1079, 1085, none | Stock out, price change, two editors after a draft exists | Where the member notes one of these under a slot, the brief names the slot and the tick that holds it; the slot may be reopened for a fresh draft. Unmarked, proposal only |
| `soc-publish-run` | 859, 886, 927, 952, 1139, none | Owner OK or HOÃN before posting; weekend OK deadline; no post without OK | Proposal only, unmarked: whether a Vietnamese variant adds an opt in approval gate on top of the hold box. D10 keeps Zalo manual; D8 says silence is waiting |
| `soc-intake-and-voice` | 1057, 1062, 1103, none | Vietnamese clichés, "#fyp", "#xuhuong", "số 1", "nhất", "duy nhất", "100%" without a document | Offer these as `## Banned openers` and `## Banned words` candidates in the intake report for the member to accept; not law based until a source supporting the superlative rule is opened |
| `soc-intake-and-voice` | 1024 `[CG]` KN-06-032, 1037 | Format mix per platform as a starting level; caption length per platform | Seed slot formats from the `[CG]` starting mix where the member agrees, and write the B-1 `[CG]` sample lengths into the voice file as samples, not caps |
| `soc-intake-and-voice` | 1037 `[CG]` KN-06-033 | The see more fold has no fixed count; measure on a phone | Write `first_line_fold:` only from a figure the member measured on their own phone, with the date; else `unknown` |
| `soc-material-sweep` | Phần A A2 83, this routine Step 3 | Masking | A material line whose photo or clip shows a customer's data or a child's face says in its note whether it was masked, so this routine can tell |
| lead (maintainer) | none | Monday slots | Original kit gap: no run drafts Monday's slots. Decide whether the Friday rule also takes Monday |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.6 Queue`, template block opening "# Drafts for tomorrow" | replace | `# Drafts for tomorrow, «platform name», written 2026-03-05` / `# Read them, change what you want, and leave them alone to go out.` / `# To stop one, tick its hold box before the publish run fires tomorrow morning.` / `# The ticks are read by the calendar standup tomorrow morning.` (four lines) | `# Bài nháp cho ngày mai, «platform name», em viết ngày 05/03/2026` / `# Anh/chị đọc, sửa chỗ nào tùy ý. Bài nào để nguyên thì sẽ lên theo lịch.` / `# Muốn giữ bài nào lại, tick ô hold this one của bài đó trước khi lượt đăng chạy sáng mai.` / `# Sáng mai bản tin lịch đọc các ô đã tick.` (four lines) | STYLE-VI, D12; `_shared/parsed-strings.md` says the header is unparsed and must change in the routine and CONTRACT 2.6 together |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.6 Queue`, same template, line opening "- characters:" | replace | `- characters: 248 of 280 (2 links at 23, no hashtags)` | `- characters: 248 trên 280 (2 link, mỗi link tính 23, không hashtag)` | Same; keeps the template one text with the routine |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `## 5. Channel and content`, paragraph opening "This is also where the club dashboard's hosted tools slot in" | insert after | (none) | `**Platform rules for Vietnamese destinations, dated.** Instagram: at most 5 hashtags per post and per Reel, read 24/09/2026 from Instagram's own @creators post and Báo Lao Động; soc-intake-and-voice writes it into ## Hashtag policy as that platform's cap line. Facebook and Instagram promotions, from Meta's Chính sách về Trang, Nhóm và Sự kiện, read 24/09/2026: no entry condition that asks people to share, repost or tag; official rules provided; and this statement in the post: Meta không hề tài trợ, ủng hộ, quản lý hay liên quan đến chương trình khuyến mãi này.` | 917, 943, 955, 1042, 1052, 1062 `[S33]` (Phần A A4 134); Phần A A6 242 `[S11]`, re-opened 24/09/2026 |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.6 Queue`, template block, fourth header line | replace | `# Sáng mai bản tin lịch đọc các ô đã tick.` | `# Sáng mai em đọc các ô đã tick và ghi vào bản tin sáng.` | Review FIX, 24/09/2026: "bản tin lịch" is in neither the glossary nor STYLE-VI, which give `bản tin sáng`; the routine header changed in the same pass, and `_shared/parsed-strings.md` says the header is unparsed and must stay one text |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.6 Queue`, same template, line opening "- characters:" | replace | `- characters: 248 trên 280 (2 link, mỗi link tính 23, không hashtag)` | `- characters: 248 trên 280 ký tự (2 link, mỗi link tính 23 ký tự, không có hashtag)` | Review FIX, 24/09/2026: STYLE-VI Formats, counts carry their unit; the routine template changed in the same pass |
| `employees/social-media-employee-vn/examples/queue/2026-03-05-business-network.md` | header, line 4 | replace | `# Sáng mai bản tin lịch đọc các ô đã tick.` | `# Sáng mai em đọc các ô đã tick và ghi vào bản tin sáng.` | Same as the CONTRACT header row |
| `employees/social-media-employee-vn/examples/queue/2026-03-05-business-network.md` | entry, line opening "- characters:" | replace | `- characters: 477 trên 3000 (1 link, mỗi link tính 23, không hashtag)` | `- characters: 477 trên 3000 ký tự (1 link, mỗi link tính 23 ký tự, không có hashtag)` | Same as the CONTRACT characters row |
| `localization-reports/social-media-employee-vn/_shared/glossary.md` | `## 1.` or the role table, after the row "the person on duty who sends" | insert after | (none) | `\| the publish run \| lượt đăng \| queue header and notes \|` | Review FIX, 24/09/2026: "lượt đăng" is used in the queue header and in the trend and promotion notes of this routine but has no glossary row |
