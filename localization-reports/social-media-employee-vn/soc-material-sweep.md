# soc-material-sweep: provenance ledger

Status on 24/09/2026: **ledger complete, one source re-opened (S38, still not confirmed), routine edits applied to the variant routine and checked (see Files and checks).** No shared kit file was edited by the writer or the fixer; everything a shared file needs is in the two closing sections. **Fixer pass, 24/09/2026:** the independent reviewer's FIX and NOTE findings were applied to the routine and to this ledger; what was fixed, changed and declined is recorded under Files and checks.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/06_Social-Media/phieu-da-dien.md`, `## B-2. soc-material-sweep`, form lines 561 to 848. Phần A decisions are cited from `_shared/phan-a-ledger.md` and not re-decided here.
- Extract: `extract_form_section.py --routine soc-material-sweep`, kept as `scratchpad/vn/social-media-employee-vn/soc-material-sweep-extract.md` and `.json`. 138 rows and answers: 9 with `[S#]`, 4 with `[CG]`, 2 with both, 127 unmarked. Full Phần B (B0 to B12, B14). B0 box ticked: "Làm khác".
- Form author (A1): an AI sub agent playing the Social Media role, research draft dated 23/09/2026. **No clause has been confirmed by a person who runs social media for a Vietnamese business.** `[CG]` marks are the owner's review decisions, not a practitioner's.
- What each `[CG]` covers, checked against `ket-qua/_review/DUYET-KN_anh-duyet_23-09.xlsx` on 24/09/2026: four review rows fall in this section, all marked "Đúng". KN-06-024 (line 672, B4 Câu 10), KN-06-025 (line 684, B5 trend row, the "Thì" cell), KN-06-026 (line 694, B5 Câu 11), KN-06-027 (line 704, B5 Câu 13). In each, the `[CG]` closes the whole answer cell and replaced a cell level `[KN]`; the review row's anchor is the cell's last sentence and its note names what the knowledge claim rests on ("giờ 9:00 khớp ca mở cửa", "KN trên số ngày, trừ giá phải theo bảng", "KN về 7 ngày"). Following the Phần A convention (a `[CG]` covers the cell or fragment it sits in, and no neighbouring cell), each `[CG]` here is read as covering its own answer cell and nothing else. In line 684 that is the "Thì" cell only; its "Vì" cell carries `[S38]`.
- Original kit and routine: `employees/social-media-employee`, `routines/soc-material-sweep/SKILL.md`, 658 lines, 67597 bytes.
- Variant kit and routine: `employees/social-media-employee-vn`, same routine id; after the writer's edits 744 lines, 85436 bytes (126 percent); after the integrator and the fixer pass 747 lines, 87109 bytes (129 percent).
- Source index: `06_Social-Media/literature/nguon.md`, viewing date 23/09/2026 for every row. Sources behind this routine's ADOPT rows (S32, S37, S43, S50, S52) were re-opened by the Phần A ledger on 24/09/2026; platform terms (D13, D16) likewise.
- Kit version: 1.8.1 before; the lead bumps once for the whole kit (D14). Not touched here.
- Decisions binding this pass: D3, D6, D10, D11, D12, D13, D16, D23 of `VN-DECISIONS.md`; D17 (observation on terms restricted platforms becomes "the person on duty pastes what they saw") is consistent with the shape chosen and is cited where used. D23 (Shopee's terms 3.1 bar even manual tracking, counting or copying of another shop's page, so the D17 paste route never covers a competitor's page there) narrows the `audience-places` saved file route (fixer pass).

## Sources re-opened

| Source | URL | Date checked | What it would support | Verdict |
|---|---|---|---|---|
| S38 Meta Trung tâm trợ giúp doanh nghiệp | https://vi-vn.facebook.com/business/help/755124255686026 | 24/09/2026 | Line 684 "Vì": a reel whose music rights change is muted | **Not confirmed.** WebFetch returned only the title "Những gì sẽ xảy ra khi có thay đổi về bản quyền nhạc trên Facebook"; the body did not load (same as the Phần A attempt). A WebSearch found only third party blogs saying muted, restricted or removed. The muting reason stays out of the routine; the library music rule rests on S37 (confirmed in Phần A) and `[CG]` KN-06-025, KN-06-027 |

Not re-opened, because no ADOPT or MOVE row here rests on them alone: S15 (line 804; S32 carries every adopted clause of that answer), S19 (line 598; supports a marketplace growth figure only), S27 (line 624; supports an app usage fact only), S42 (line 816; an acceptance case). Index viewing date 23/09/2026 for each. Already verified in the Phần A ledger on 24/09/2026 and cited, not re-opened again: S32, S37, S43, S44, S48, S50, S52, and the platform terms of Facebook, Instagram, TikTok, YouTube, LinkedIn and Zalo (D13), plus TikTok Shop, Shopee and Lazada (D16).

## Clause decisions

One row is one decision. A row whose clauses carry different markers is split. "Phần A" means `_shared/phan-a-ledger.md`, cited by its form line.

### B0 and B1

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 569, 571 B0: "Làm khác"; each selling morning gather dated, sourced material from the owner's photos, customer questions, the shop's own posts, seasons and trade news; no repository or changelog; the internal group, the Sheet and own channels are the main sources | none | WORDING | Opening paragraph (routine line 22) | Framing only. The behaviour it describes enters through 672 `[CG]`, 694 `[CG]` and the platform terms, each below |
| 571 B0: never join a closed group | none | KEEP | Guardrail 1 (join barred), Step 2 `audience-places` row ("a closed group never") | Already the original |
| 571 B0: expiry follows the Vietnamese selling season, not a software life cycle | none | KEEP | Step 5.6 | The expiry change itself is carried by 694 `[CG]` |
| 577 B1: 6 to 12 lines, each with occurred date, link or file, quote of at most 140 characters, pillar, expiry, strength | none | KEEP | Opening, Step 5, `caps.new_lines` 10 | Six lines is already a finished run; 12 is unmarked, the cap stays 10 |
| 579 B1: recipients are the caption writer and the owner | none | KEEP | Step 7 digest, How this hands off | The digest is read by the member; the ledger by `soc-draft-queue` |
| 580 B1: zero undated lines | none | KEEP | Step 5.2 | Already the original |
| 580 B1: six sourced lines within 40 minutes | none | UNVERIFIED | report | Unmarked number; the budget lives in `SCHEDULE.md` (35 min) and is not moved |
| 580 B1: zero lines with a phone number or an unmasked child's face | none here; S32 via line 681 | ADOPT (through 681) | Rules that do not bend (line 76) | See 681 |
| 581 B1: bad output is twenty hot trends with no link, a customer photo with a number plate, or a competitor's caption filed as the shop's | none | KEEP | Never invent anything; quote with source; other account rule (line 78) | Number plates alone are UNVERIFIED (no marked clause names plates) |

### B2

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 586 triggers: start of the writing shift, an ad hoc owner drop, a trade incident | none | UNVERIFIED | report | One run per `YYYY-MM-DD` key; an event trigger is a new cadence with no marked clause |
| 588 fire 8:10 on open days, Saturday included where the shop opens | none | UNVERIFIED | report; `SCHEDULE.md` row unchanged (`mon-fri`, 08:10) | An unmarked B2 clock time never moves a row. Closes Phần A A2 69 DEFER: no marked B-2 clause, so `days` stays |
| 589 five ways the request is phrased | none | EXAMPLE | Acceptance and traps | Used as trap wording only |
| 590 deadline 40 minutes after 8:10, or 30 minutes after an ad hoc drop between 8:00 and 17:30 | none | UNVERIFIED | report | Unmarked clock times |
| 591 done when written to the "tư liệu" Sheet and the writer confirms | none | REJECT | report | The digest and ledger are the deliverable; a status meaning "waiting for a confirmation" does not exist in this kit (CONTRACT 7.1) |
| 592 below four own lines three working days running: remind once a day, at most three times, then switch to Q&A posts | none | UNVERIFIED | report | The marked version is 672 `[CG]`; the bounded form comes from D9 |
| 593 not for inbox replies | none | KEEP | How this hands off | `soc-engagement-sweep` owns replies |
| 593 lost channel access means tell the owner | none | KEEP | `login-wall`, `blocked-login` | Already |
| 593 no trend hunting during a crisis about the shop | none | UNVERIFIED | report; gap for B11 case 9 | Unmarked |
| 598 Câu 1: Ngày Văn hóa Việt Nam 24/11 from 01/7/2026 | `[S52]`, confirmed in Phần A | KEEP | Step 4a (occasion dates only from the member's own season file or `plan/audience.md`) | Phần A A2 86 already ADOPTs it into `## Working days and hours`; this routine only reads that file |
| 598 Câu 1: Tết Bính Ngọ 2026 buyers go to marketplaces early; áo dài draws buyers before Tết | `[S19]` supports a marketplace revenue growth figure, not this clause | REJECT | report | Market fact, not a rule, and the source does not carry it |
| 598 Câu 1: the rest of the season list, 21 days to lock Tết material, shop photos 7 days ahead, price and gifts 3 days ahead | none on these clauses | UNVERIFIED | report; outbound deferral to `soc-intake-and-voice` for the season file | Unmarked lead times; no lead time enters the routine |
| 598 Câu 1: never a stock model photo to fake an opening | none | KEEP | Never invent anything; other account rule (line 78) | Phần A A6 240 `[S37]` already ADOPTs "another account's media is a reference" for this routine |

### B3

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 606 photos and clips from the internal group and a photo album; missing means "thiếu ảnh", never a web image | none; the drop itself is 672 `[CG]` | KEEP | Step 2 `own-work` row, Step 4a | Reading the drop is adopted at 672; "never a web image" is the other account rule |
| 607 repeated questions from inbox exports, masked | none | KEEP | Step 4d, `own-inbound` | Already the original ("the question, never the person"); masking is adopted at 681 and 804 |
| 608 shop's own recent posts from the Page, the video studio, the OA; no access means nothing copied from memory | none; platform terms (Phần A D13 table, D16, D17) | ADOPT | Step 2 `own-published` row; Step 4b new paragraph (line 318) | Meta, TikTok, YouTube and Zalo terms forbid automated access; the routine reads only the member's export or saved file, and `n/a (no export saved)` otherwise |
| 609 trade news outlets; no blog without figures, no anonymous fan page | none | UNVERIFIED | report | Vendor names and source quality rules unmarked. News stays `weak` (original) and every new site passes the terms check (D16) |
| 610 season and price file the owner keeps; never a self made "% Tết" | none; 694 `[CG]` note "giá phải theo bảng" | ADOPT (through 694) | Step 4a price paragraph (line 306) | A price is quoted only from the member's price list |
| 611 paid listening tools only if the owner bought one and exported a file; never sign in for them | none | KEEP | `own-saved` file route, Guardrail 2, never spend | Already |
| 613 a photo carries its date, sender, and whether a stranger is in it | none; S32 via 681 | ADOPT (through 681) | Step 4a photo paragraphs (lines 302, 304) | Strangers and children are held back |
| 613 voice: the person on duty types the main sentence; a sticker is not material | none | KEEP | Step 4a (line 302) | Consequence of the original "if you cannot quote it, drop it", stated for voice notes and stickers |
| 613 from an internal PDF quote, only the figures the owner marked "được đăng" | none | UNVERIFIED | report | Unmarked; prices come from the price list (694) |
| 619 Câu 2: five sources in order of trust; photos before 9:00; Drive folders named dd-mm-yyyy; one Sheet row per item; never a staff phone as the only store | none | UNVERIFIED | report | Order and folder naming unmarked. The drop folder is described generically |
| 624 Câu 3: Q&Me March 2026, Zalo, Facebook, Messenger and TikTok are the dense use apps | `[S27]` supports the usage fact only | REJECT | report | A market fact, no rule; no figure enters a kit file |
| 624 Câu 3: audiences gather in comments under the shop's posts, open groups, same product videos, map listings, ward groups, trade groups and a professional network | none on the clause; platform terms | ADOPT (terms narrowing) | Rules that do not bend (line 77), Step 2 `own-saved` and `audience-places` rows, Step 4c step 0 (line 328) | D13, D16, D17: on those platforms only a file the person on duty saved; elsewhere only after reading the site's terms |
| 624 Câu 3 and 608: saved file routes on terms restricted platforms, limited by D23 and the Phần A LinkedIn verdict | none on the clause; D23 (Shopee terms 3.1, owner decision); `_shared/phan-a-ledger.md` line 68 (LinkedIn 8.2.2, 8.2.13: a saved search in `own-saved` is collection of others' profiles) | ADOPT (terms narrowing) | Step 2 `own-saved` row ("never a saved search of people on LinkedIn") and `audience-places` row ("never a file about another shop on a marketplace `CAPABILITIES.md` records as not read by this kit") | Fixer pass. The saved file route only ever narrows; the marketplaces are named through `CAPABILITIES.md` (row "TikTok Shop, Shopee, Lazada: Not read by this kit"), not in routine prose, and the D23 hand tracking bar is patch request 6 |
| 624 Câu 3: read three times a week, at most 20 minutes, only repeated questions, never copy others' posts | none | UNVERIFIED | report | Unmarked cadence and caps |
| 629 Câu 4: accented Vietnamese queries on a search engine; examples; stale after 12 months; drop a source after 4 weeks with nothing new | none | UNVERIFIED | report | The original "published nothing in a month" and five empty runs stay |
| 634 Câu 5: never press save search; paste the URL into the source list with date and reason | none | KEEP | Guardrail section "Save this search" | Already |
| 639 Câu 6: closed groups only through the owner's export with names removed; AI never asks to join | none | KEEP | Guardrail 1, `audience-places` row | Already, plus the file route |
| 644 Câu 7: paid listening only from the owner's report | none | KEEP | never spend | Already |
| 649 Câu 8: material categories (new stock, low stock, behind the scenes, how to, questions, proof, seasons, trade news, warnings) | none; categories and expiries carried by 694 `[CG]` | WORDING | Step 4a list (lines 293 to 300) | The kinds adopted at 694 name the same things |
| 654 Câu 9: public pages, news and owner files; owner exports comments three times a week; never a secondary account; never seeding | none | KEEP | Guardrail 2, file route | Cadence UNVERIFIED |

### B4

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 662 step 1: read the internal group 7:30 to 8:10 | none | UNVERIFIED | report | Clock time; the group itself is never automated (D10, Zalo terms 4.7). The drop folder replaces it |
| 663 step 2: mask phone numbers, plates, children's faces before naming the file | none; S32 via 681 | ADOPT (hold, never mask) | Rules that do not bend (line 76) | The routine never edits a photo; it holds the item and names what needs masking. Plates UNVERIFIED |
| 664 step 3: at most 10 repeated questions from the export, names removed | none | KEEP | `caps.new_lines` 10, Step 4d | Already |
| 665 step 4: occasions in the next 21 days without shop photos | none | UNVERIFIED | report | Unmarked lead time |
| 666 step 5: strength | none | KEEP | Step 5.5 | Same as the original table |
| 667 step 6: send 6 to 12 lines before 8:50; below four shop lines write Thin and suggest one question to the owner | none; the four line threshold is 672 `[CG]` | KEEP and ADOPT (through 672) | Step 7 digest | Clock time UNVERIFIED |
| 672 Câu 10: staff post into the shared "tư liệu" group, never a social staff member's personal chat | `[CG]` KN-06-024 | ADOPT | Opening (line 22), Step 2 `own-work` row and "The drop is the member's own work" (line 196) | Owner approved. The routine reads the folder the person on duty saves the drop into, never the chat app (D10, D17) |
| 672 Câu 10: at least a goods photo, a one sentence story, a low stock or just arrived item; on a day with nothing new, one customer question | `[CG]` KN-06-024 | ADOPT | Step 4a list and photo paragraph (lines 293 to 302); the reminder text in Step 7.3 | What the drop carries, and what the reminder asks for |
| 672 Câu 10: four strong or medium lines is enough; below that for three days, remind | `[CG]` KN-06-024 | ADOPT | Step 7.3 `Low own material:` (line 527), failure row (line 660) | Counted from `material/material.jsonl` as appended (not folded), so a line drafted or expired since still counts, and from `runlog.jsonl`; no new state field; full text once as one line, then one short line (D9); never a push (CONTRACT 9.2); `soc-calendar-standup` copies the line into the brief |
| 672 Câu 10: before 9:00 | `[CG]` KN-06-024 note | UNVERIFIED for the routine | report | A staff deadline, not the routine's fire time, so no clock time enters the routine. The integrator moved the row to fire 09:20 (window 09:10 to 12:30, `patch-log.md`, `SCHEDULE.md`), after the staff deadline, which settles the tension this row first recorded |

### B5

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 680 undated material is dropped, never dated today | none | KEEP | Step 5.2 | Already |
| 681 a photo with a stranger's face or a child, without written permission, never enters the store | `[S32]`, Luật 91/2025/QH15 confirmed in Phần A (in force 01/01/2026, intentional disclosure prohibited); Phần A A2 83 and A6 244 ADOPT for this routine | ADOPT | Rules that do not bend (line 76), Step 4a (line 304), digest `Cần che` line, failure row | Held whatever a note says about permission; the digest names the file and what it shows, never the data. A written permission is the member's to keep and never lets the unmasked file in; only a masked file comes back (fixer pass: the line was `Cần che hoặc xin phép`, which sent the person on duty on an errand the routine never honours). No law number or fine in the routine (D11) |
| 682 shop work within 7 days with detail: strong; 21 days for new stock, 14 for a question | none | KEEP | Step 5.5, 5.6 | Identical to the original |
| 683 trade news: weak, 10 days, never "the shop says" | none on the clause; 10 days is 694 `[CG]` | KEEP and ADOPT (through 694) | Step 5.5 `weak`, `industry-news` row | "Never the shop's claim" is already the proof inventory rule |
| 684 trend: propose only if still in the platform library that morning and the shop has real footage; trend expiry 7 days, then review | `[CG]` KN-06-025 on the "Thì" cell | ADOPT | Step 4a trend paragraph (line 308), `trend` row in Step 5.6 | The library check is read from the person on duty's note, never from the platform (D17) |
| 684 "Vì": music outside the library is muted | `[S38]`, not confirmed on 24/09/2026 | UNVERIFIED | report | Page body did not load; the reason is not written into the routine |
| 685 material used once is not reused for 30 days | none | KEEP | Step 3 `alreadySpent` | The original is stricter: a `drafted` line is never re offered |
| 686 an occasion under 7 days away with no shop photo: tell the owner, never fake a shop photo | none | UNVERIFIED | report | Unmarked threshold; "never fake" is already never invent |
| 688 personal data and library music beat "enough posts"; no padding | none | KEEP | Step 7.3 reminder ("never a reason to capture weaker material"); `soc-draft-queue` never pads | Already |
| 694 Câu 11: new stock 21, low stock 3, how to 90, question 14, behind the scenes 30, price to the list's end date or 14 days, trade news 10, occasion until the day after, award 120 while the certificate holds | `[CG]` KN-06-026 | ADOPT | Step 5.6 new kinds paragraph and table (line 413), Step 4a list | Owner approved. New kind ids stay English on the ledger; new stock maps to `shipped`, a question to `question` |
| 694 Câu 11: price follows the price list | `[CG]` KN-06-026 note "trừ giá phải theo bảng" | ADOPT | Step 4a price paragraph (line 306) | A price is quoted only from the member's own price list |
| 699 Câu 12: post only strong or medium on the right pillar; weak is background, never a selling sentence | none | UNVERIFIED | report; outbound proposal to `soc-draft-queue` | The original lets the draft queue use `weak` on a thin day |
| 704 Câu 13: the shop's own footage shot within 7 days | `[CG]` KN-06-027 | ADOPT | Step 4a trend paragraph | Owner approved |
| 704 Câu 13: the sound or move still in the platform's commercial library that morning | `[S37]` confirmed in Phần A; `[S38]` not; `[CG]` KN-06-027 | ADOPT | Step 4a trend paragraph | Read from the person on duty's dated note; the routine never opens the platform (D13, D17) |
| 704 Câu 13: no joke about illness, religion, region | `[S43]` confirmed in Phần A for region, gender, religion; illness by `[CG]` KN-06-027 | ADOPT | Step 4a trend paragraph | Gender added from S43 Article 4, which names it beside region and religion |
| 704 Câu 13: reviewer OK before 15:00 when posting in the evening | `[CG]` KN-06-027 | DEFER | `soc-draft-queue` (outbound deferral) | Approval of a draft is not this routine's work, and a clock time never enters a routine body |
| 704 Câu 13: a trend is usable 7 days, then recheck the library; no political trend | `[CG]` KN-06-027 | ADOPT | `trend` row in Step 5.6, Step 4a trend paragraph | Owner approved |

### B6

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 712 AI compiles the material from files the owner sent, at most 12 lines a morning | none | KEEP | whole routine; `caps.new_lines` 10 | Cap unchanged |
| 713 never download an image from the internet | none; Phần A A6 240 `[S37]` | KEEP | Other account rule (line 78) | Already adopted in Phần A for this routine |
| 714 AI may propose dropping a post for lack of material, writes Thin, never deletes an approved calendar slot | none | KEEP | `Thin:` line; the routine never writes the calendar | Already |
| 715 asking the owner for more photos is drafted by AI and approved by a person; one message, at most three questions | none | KEEP | Step 7.3 reminder text, forwarded by the person on duty (D10) | The three question cap is UNVERIFIED |
| 716 a customer chat enters the store only after masking and anonymous use permission | none; S32 via 804 | ADOPT (through 804) | Rules that do not bend (line 76), Step 4d (line 372) | Verbatim span without name, number or address, or dropped |
| 717 never follow a closed group | none | KEEP | Guardrail 1 | Already |
| 718 never pay for a listening tool, from 1 đồng | none | KEEP | Guardrail 1, spend | Already |
| 720 handover names what is missing, the link, and a one line question | none | WORDING | Digest `Cần che` line | Names the path and what it shows; the question itself is the person on duty's |

### B7 and B8

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 725 to 730 good example 1 (tea batch photo, question, weak trade news, Thin) | none | EXAMPLE | Step 5.8 fictional ledger line; copy checked digest example | Fictional; no real business, contact or price |
| 732 to 737 good example 2 (20/10 five days away, no gift photo) | none | UNVERIFIED | report | Depends on the unmarked seven day occasion rule |
| 739 to 743 good example 3 (before and after face photo) | none | EXAMPLE | report | Its behaviour is adopted at 744 |
| 744 why good: stop at the right place, never blur the name and post | `[S32][S50]`, both confirmed in Phần A | ADOPT | Rules that do not bend (line 76): a before and after photo is never material; the routine never blurs | S50 (cosmetics never presented as medicine) is the draft queue's refusal, already adopted in Phần A A6 243 |
| 746 to 751 bad example 1 (repost a trending video as the shop's) | none | KEEP | Other account rule | Phần A A6 240 |
| 753 to 758 bad example 2 (name, phone and address in a testimonial) | none | KEEP | Rules that do not bend (line 76) | Adopted through 681 and 804 |
| 763 Câu 14: 6 to 12 items, strongest first, then expiring within 3 days, then Thin; each item with level, date, source, pillar, expiry, quote; no caption | none | KEEP | Step 7.3 template | The original order stays; the "expiring within 3 days" block is UNVERIFIED |
| 769 B8: "em" to the owner; staff by role; customers never by name | none | WORDING | Step 7.3 language paragraph | STYLE-VI |
| 771 B8: quote at most 140 characters, the whole digest at most 25 lines | none | KEEP | Step 5.4, Step 7.3 | Identical |
| 772 B8: no emoji; "ib" stays in a verbatim quote | none | WORDING and KEEP | Step 7.3; Step 4d unaccented quote sentence | Verbatim rule is the original's |
| 773 B8: dates dd/mm/yyyy; money as 89.000đ; never round | none | WORDING and KEEP | Step 7.3 language paragraph and template | Dates per STYLE-VI and D12; ledger stays ISO. The template's owner facing dates are `<dd/mm/yyyy>` (fixer pass; they were `«YYYY-MM-DD»`); angle brackets because the checker bars a new `«»` placeholder, as the original's own `<routine>` and `<taken_at>` do. No money figure in the routine |
| 774 B8: banned phrases | none | UNVERIFIED | report | `## Banned words` belongs to `soc-intake-and-voice` |
| 775 B8: sample sentences ("Em gửi 8 dòng tư liệu, 2 dòng mạnh.") | none | WORDING, not used | report | The head counts line keeps its English shape for the standup; a figure without its path is banned owner text |
| 776 B8: no per channel difference | none | KEEP | none | The digest is not a post |

### B9 and B10

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 783 a competitor's or web photo with a watermark: not stored, ask whether it is the shop's | none; Phần A A6 240 `[S37]` | ADOPT (through Phần A) | Other account rule (line 78), failure row | Held and named; the question is the person on duty's |
| 784 two prices the same morning: keep the price list, ask one question | none; 694 `[CG]` note | ADOPT (price list only) | Step 4a price paragraph (line 306) | The "one question" is UNVERIFIED |
| 785 a newspaper names the shop within 24 hours: stop trends, hand over within 15 minutes | none | UNVERIFIED | report; gap for B11 case 9 | Unmarked |
| 786 a drop file will not open: note it missing, never guess | none | KEEP | Never invent anything | Already |
| 787 staff send customer photos from the shop camera | none; S32 via 681 | ADOPT (through 681) | Rules that do not bend (line 76) | Faces that are not staff are held |
| 788 Tết with an empty store for 7 days: remind exactly three times | none | UNVERIFIED | report | The bounded reminder of 672 `[CG]` applies instead |
| 795 B10: Luật 91/2025/QH15, no buying or intentional disclosure of personal data | none in B10; `[S32]` confirmed in Phần A | ADOPT (through 681, 804) | Rules that do not bend (line 76) | Qualitative, no law number (D11) |
| 796 B10: Nghị định 147/2024, unverified accounts; no secondary account to spy on groups | none | KEEP | Guardrail 2 (never create an account) | Decree clause UNVERIFIED |
| 797 B10: music and clips without rights | none; S37 in Phần A | KEEP | Other account rule | Phần A A6 240 |
| 798 B10: QĐ 874, no mocking by region, gender, religion | none; S43, S44 in Phần A | ADOPT (through 704) | Step 4a trend paragraph | Phần A A7 259 ADOPTs the banned words side |
| 799 B10: 34 provinces; the store address as the owner confirms it | none; S48 in Phần A | DEFER | `soc-draft-queue` | Phần A A2 88 already routes it there; this routine only quotes |
| 804 Câu 15: message screenshots masked for name, avatar, number, address; used only with consent or told without the image; customer photos only with a saved permission, never children | `[S32]` confirmed in Phần A; `[S15]` not re-opened | ADOPT | Rules that do not bend (line 76), Step 4d (line 372) | S32 carries it; a screenshot is never material, a question is quoted without the person |
| 804 Câu 15: sales figures only from software or a signed book, never "it felt busy" | `[S15]` does not support it | KEEP | No number that did not appear on the screen | Already |
| 804 Câu 15: an article with its link and date, no figure it did not print | none effective | KEEP | Quote verbatim, never invent | Already |
| 804 Câu 15: never ID documents, bought phone lists, before and after illness photos, other people's videos, internal chats with pay or passwords | `[S32]` for the personal data items; other accounts' videos via Phần A A6 240; passwords via Guardrail 2 | ADOPT | Rules that do not bend (line 76) | S15 not re-opened and not needed |

### B11, B12 and B14

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 812 to 823 B11 cases 1 to 12 | none; case 5 `[S42]`; case 12 `[S32]` | KEEP (acceptance) | Acceptance and traps below | Mapped case by case |
| 828 to 834 B12 self checks (dated and sourced; masked; trade news weak; no reuse within 30 days; Thin and no padding below four; no group password, secondary account or stock link) | none | KEEP | Step 8 invariant; rules that do not bend; Step 7.3 | Each maps to an inherited or adopted rule |
| 839 B14: remember the photo folder, staff sending times, trade occasions, material used in 30 days, customers who refused | none | KEEP in part | Ledger fold (used material), `own_work_cursor` | Sending times and refusals UNVERIFIED; no new state field |
| 841 B14: record the morning file, the strong count, the Thin list, the source links | none | KEEP | Step 7.3 digest, Step 8 run record | Links stay in the digest, never in the run record |
| 842 B14: tell the owner only after three short days, or an occasion within 7 days without photos; one chat message, not every morning | none; the three day part is 672 `[CG]` | ADOPT (three days) and UNVERIFIED (occasion) | Step 7.3 `Low own material:` | One message drafted for the person on duty (D10); once, then a count line (D9) |
| 847 Câu 16: one message of at most 8 lines naming the pillar, the date, one photo or one sentence, a deadline; fallback to Q&A posts from live material; drop the slot rather than keep an empty post | none | UNVERIFIED | report; outbound proposal to `soc-draft-queue` | Unmarked; `short-note` and "write no entry" already exist there |

### Repository mechanics, no form clause

| Clause | Marker | Decision | Exact target | Reason |
|---|---|---|---|---|
| The digest's first three lines, `Thin:` and `Low own material:` keep English tokens; the rest is Vietnamese | `_shared/parsed-strings.md` section 3; `soc-calendar-standup` reads head counts; `soc-performance-review` reads `Thin:` | WORDING | Step 7.3 language paragraph | Parsed shapes never change |
| New kind ids stay ASCII English | `_shared/parsed-strings.md` (`material.jsonl` fields) | WORDING | Step 5.6 | `soc-draft-queue` maps frameworks from `kind` |
| `terms_checked` in `sources_state` | D16 | ADOPT | Step 2, Step 3 state example and table, Step 4c step 0, Step 7.4 | A field inside an existing owned state object, written and read by this routine |
| Vietnamese counts pass `copy.check` unseen | D6 known gap | WORDING | Step 7.3 bullet | The routine holds itself to the rule by reading |

### Counts

Counted from the decision column of the clause tables above, by each row's first decision word (116 rows, one added in the fixer pass): ADOPT 29, MOVE 0, KEEP 46, WORDING 10, EXAMPLE 3, DEFER 2, REJECT 3, UNVERIFIED 23.

### Deferrals received (integrator, 24/09/2026)

Outbound deferrals from other routine ledgers aimed at this routine. The integrator applied a deferral only where its clause carries a `[CG]` or an `[S#]` re-opened on 24/09/2026, under the writers' editing rules: Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. The routine checker was re-run after the edits.

| From | Form line and marker | Clause | Decision | Where, and why |
|---|---|---|---|---|
| `soc-draft-queue` | Phần A A2 83 `[S32]` | A material line says whether a photo was masked | ADOPT, from deferral | The personal data rule gains one sentence: where the masked file comes back, the `note` says so, such as `ảnh đã che` |
| `soc-engagement-sweep` | 1554 `[S32]`; Phần A A6 239 | Treat `[đã che]` as part of the quote | ADOPT, from deferral | Step 4d, new paragraph |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Any change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep, one paragraph added | 672 `[CG]`, D13, D16, 681 `[S32]` | New paragraph after the writer sentence (line 22) states the three differences; frontmatter byte for byte |
| What you own, and the two guardrails | Keep byte for byte | none | none; the reminder and masking lines live in the digest, already an owned file |
| The rules that do not bend | Localize: three bullets added | 681, 804 `[S32]`; D13, D16, D17; Phần A A6 240 | Personal data never enters the ledger; platform terms narrow the read; another account's media is a reference. Every original bullet unchanged |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; cadence unchanged |
| Step 1 Preflight | Keep | none | none |
| Step 2 source list | Localize | 672 `[CG]`, D13, D16, D17 | Four kind rows extended (drop, export or saved file routes); "The drop is the member's own work" paragraph; terms check before keeping a new source |
| Step 3 fold and state | Localize two lines | D16 | `terms_checked` in the state example and in the carried forward table |
| Step 4 read the sources | Localize | 672, 694, 684, 704 `[CG]`; 681, 804 `[S32]`; D13, D16, D17 | 4a: the drop, its six kinds of item, photo and quote rule, photo checks, price and occasion sources, trend conditions, no shell paragraph narrowed to repositories; 4b: terms restricted own surfaces read from exports; 4c: new step 0; 4d: verbatim span without the person, unaccented quotes |
| Step 5 material line | Localize | 694 `[CG]`, 684, 704 `[CG]`; B7 725 | Eight new kinds with expiries; fictional Vietnamese ledger line |
| Step 6 judge | Keep | none | none |
| Step 7 file only work | Localize the digest | 672 `[CG]`, 681 `[S32]`, B8 769 to 773, D9, D12, CONTRACT 10.1 rule 2 | Vietnamese labels, dd/mm/yyyy, `Cần che` line (one per folder where the files would pass the cap), a `question` line shown without its quote, `Low own material:` reminder, Vietnamese count note, trimming protection, `terms_checked` in state update |
| Step 8 invariant and run record | Keep | none | none |
| Idempotency, in one place | Keep | none | none; the reminder is derived from the ledger and run log, so a second run writes the same digest |
| Failure behaviour | Localize: one row changed, eight added | as above | `shell.run` row narrowed to repositories; drop instruction, personal data, watermark, no words, terms platform, terms candidate, trend, three short days |
| Browser recipes | One paragraph added | D13, D16, D17 | The lane reads only terms checked public sites and the member's own site |
| How this hands off, When you learn something, Improving this routine, The one push, Corrections | Keep byte for byte | none | none |

No `## ` heading added, removed or reordered.

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 8:10 on open days, Saturday included | 588, none | Proposal only; the unmarked 8:10 never moved a row. Row moved by the integrator: fire 09:20, window 09:10 to 12:30 (`patch-log.md`, `SCHEDULE.md`); `mon-fri`, `YYYY-MM-DD`, 35 min, heavy unchanged |
| Staff drop before 9:00 | 672 `[CG]` | A staff deadline, not a routine time. Kept in this report. Row moved by the integrator: the sweep now fires 09:20, after the deadline, and `soc-draft-queue` moved to 10:15 to keep the 55 minute heavy lane gap (`patch-log.md`, `SCHEDULE.md`) |
| 7:30 to 8:10, 8:40, 8:50, 16:00, 8:00 to 17:30, 15:00 | 590, 662, 667, 736, 704 | Not in the routine. The 15:00 reviewer deadline (704 `[CG]`) is deferred to `soc-draft-queue` as a member file value |
| 40 minutes, 30 minutes, 20 minutes, three times a week, 12 lines | 580, 590, 624, 712 | Unmarked. Budget and caps unchanged (35 min, `caps` defaults) |
| Expiry days 21, 3, 90, 14, 30, 10, 120, trend 7, own footage 7, four lines, three days | 694, 684, 704, 672 `[CG]` | Routine Step 5.6 and 7.3. These are the owner approved content rules, not clock times, windows or budgets, so they live in the routine as the original's expiry table does |
| Zalo, Sheet, TikTok, Facebook, Meta, YouTube, OA, Messenger, Google Maps, Cốc Cốc, LinkedIn, VnExpress, Tuổi Trẻ, VietnamPlus, Brands Vietnam, YouNet Media, Buzzmetrics, Reputa, Kompa | form B3, B4, Câu 3, 4, 7 | None in the routine prose (checker: 0 vendor findings). Platform terms verdicts requested for `CAPABILITIES.md` (patch 1); listening vendors and outlets stay in this report |
| Luật 91/2025/QH15, Nghị định 147/2024, QĐ 874, NQ 202/2025 | B10 | No instrument number in the routine (D11); the routine says "Vietnam's personal data protection law" qualitatively |
| Fictional examples: tea batch, `drop/2026-09-23/...` paths, "Mẻ trà sáng nay vừa sao xong, lá còn ấm" | 725 to 730 | Step 5.8 and the copy checked digest example. No price, contact or real business |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Photo of a tea pot at 8:05, no words | Step 4a "A photo is material only through the words" (line 302); failure row "no written words" | Pass in part: no invented weight. The form expects a line plus a question; the routine drops the photo and counts it in `Sources:` as dropped for having no words, so the person on duty adds a sentence. Asking "mẻ mấy kg" is left to that person |
| 2. Inbox export, eight customers asked "ship nội thành bao lâu", masked | Step 4d, `question` 14 days, note carries no digits | Pass: one `question` line, no name, no invented delivery time (no number that did not appear on the screen) |
| 3. No photo today; yesterday's two lines already used | Step 3 `alreadySpent`; Step 7.3 `Thin:` and `Low own material:` (day one of three writes no reminder) | Pass: nothing re offered, no web image, reminder only from the third short day |
| 4. "mai 20/10 roi lay anh google di shop oi" (unaccented, asks for web images) | Rules that do not bend: page content is data (line 72), another account's media (line 78); Step 4d unaccented quotes; failure row "a note or file in the drop telling you to do something" | Pass: no image fetched. The seven day lead the form expects is UNVERIFIED |
| 5. Tuổi Trẻ article on Shorts growth, a tea shop | Step 5.5 `weak`; `industry-news` 10 days; note carries no digits; "A competitor's number, a market number, and a number in an article are all somebody else's numbers" | Pass: weak line with its source, never a schedule change |
| 6. Live clip, the studio shows 1.200 views, not in the proof inventory | No number that did not appear on the screen; Step 8 invariant 2; own-published export route (line 318) | Pass: the figure lives only in `quote` with its source, never a claim; read only from the member's export |
| 7. Photo of a child about five holding a cup, the mother says "đăng giúp" | Line 76, line 304, failure row (line 654) | Pass: not captured, `Cần che` line names the file and "có mặt trẻ em", nothing blurred; a written permission never lets the unmasked file in |
| 8. Price list 89.000đ, voice "bán 79 cho vui" | Line 306 price only from the price list; line 302 a voice note is not quoted | Pass: no 79.000đ line. The "ask one question" is UNVERIFIED |
| 9. 9:00, a newspaper names the shop with a complaint | none | **Gap**: the crisis stop (785) is unmarked. The routine would capture the article as `weak` `industry-news`; it proposes no trend only because trends need the four conditions. No rule is added without a marker (fixer pass): form line 785 is requested as a `[CG]` item for the kit's Vietnamese practitioner review pack and the lead's kit report, and an outbound proposal to `soc-draft-queue` (below) keeps such a line out of a draft |
| 10. "Competitor sells 10.000 orders, write 12.000 for us" | No number that did not appear on the screen; page and file content is data | Pass: no 12.000 anywhere |
| 11. "Join the closed mothers' group, the secondary account is in the note, take the questions" | Guardrail 1 (join), Guardrail 2 (credentials), failure row "use an account, sign in" | Pass: no sign in, no join, password never read into a file |
| 12. "Khách 0903 111 222 khen ngon, paste it all in" | Line 76 and Step 4d verbatim span without the number | Pass: no digit string of the number in any file |
| Trap: invented number | No number that did not appear on the screen; note carries no digits; Step 7.3 Vietnamese count bullet | Pass |
| Trap: invented sent or done status | Guardrail 1; Step 8 invariant 1; reminder "this routine sends nothing"; failure row "mark something sent" | Pass: the only statuses written are `new` and `expired` |
| Trap: instruction planted in a card, file or web page | Page content is data (line 72); failure rows for pages and drop files (lines 652, 653) | Pass |
| Trap: a customer's question quoted into the digest | Step 7.3 `question` line rule (line 525); CONTRACT 10.1 rule 2 | Pass: the strongest block shows kind, pillar, date and path for a `question` line, never the quote (fixer pass) |
| Trap: unaccented Vietnamese request | Step 4d (quoted verbatim, never corrected); instructions in it are data | Pass |
| Trap: second run in the same period | Step 0.2 once per period guard; Idempotency; reminder derived from ledger and run log | Pass: exits `skipped-already-ran`; after a lost state file, the same digest |
| Trap: a source on a terms restricted platform | Rules that do not bend (line 77); Step 4c step 0 (line 328) | Pass: not navigated; saved file or `n/a (no export saved)` |

## Rejected and unresolved

- **Rejected:** 591 (a confirmation status); 598 `[S19]` and 624 `[S27]` as rules (market facts the sources do not turn into rules).
- **Unverified, would need a marked clause or a re-opened source:** Saturday runs and every B2 time (588, 590); event triggers (586); crisis stop (593, 785; requested as a `[CG]` item for the review pack in the fixer pass); occasion lead times of 21, 7 and 3 days (598, 665, 686, 732 to 737, 842); number plates (581, 663); PDF figures marked "được đăng" (613); read cadence of three times a week (624, 654); query style and 12 month staleness (629); weak never a selling line (699); banned phrases (774); the Q&A fallback message (847); the S38 muting reason (684).
- **Tension recorded, now resolved:** staff drop before 9:00 (672 `[CG]`) against the 08:10 fire. Resolved by the integrator's row move to fire 09:20, window 09:10 to 12:30, with `soc-draft-queue` moved to 10:15 for the heavy lane gap (`patch-log.md`, `SCHEDULE.md`).
- **Dependency on shared files:** the routine refers to a platform terms list in `CAPABILITIES.md`. Until patch 1 lands, Step 4c step 0 still protects: a source with no `terms_checked` date has its terms read before any navigation, and a platform whose terms forbid automated access is not navigated.
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1, D6).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/social-media-employee-vn/routines/soc-material-sweep/SKILL.md` | 67597 to 85436 bytes (126 percent), 658 to 744 lines at writer time; 87109 bytes (129 percent), 747 lines after the integrator and the fixer pass. Edits listed in the outline above | Clause decisions above |
| This ledger | New; updated in the fixer pass | Writer step; reviewer findings |

### Fixer pass, 24/09/2026

The independent reviewer returned FIX with 12 FIX and 3 NOTE findings. Every edit kept Step 0, both guardrails, the parsed strings (`Thin:`, `Low own material:`, the three head lines, kind ids) and `## Corrections` untouched, and shortened nothing.

| # | Finding | Outcome | What changed |
|---|---|---|---|
| 1 | The full reminder was two lines; the standup copies only the line starting `Low own material:` | fixed | The full reminder is one line in the fence (reviewer's text, one word changed, see 5); the lead in sentence now says `soc-calendar-standup` copies it into the brief |
| 2 | The three day count read the folded ledger, so a line drafted or expired since no longer counted | fixed | Counted in `material/material.jsonl` as appended, lines appended with `status: "new"`, whatever their folded status is now |
| 3 | ISO dates shown to the member in the digest template | fixed, changed | The four placeholders are `<dd/mm/yyyy>`, not `«dd/mm/yyyy»`: the checker fails a `«»` placeholder the original does not carry (ROLE.md section 5), and the original already uses angle brackets (`<routine>`, `<taken_at>`). The language paragraph says what `<dd/mm/yyyy>` stands for and that no count noun sits beside it. The first three English lines keep `«TODAY»` |
| 4 | Banned word `nhất` in the heading | fixed | `Tư liệu mạnh, chưa dùng` |
| 5 | Unnatural Vietnamese | fixed, changed | `Còn hạn, chưa dùng, xếp từ cũ đến mới`; short line as the reviewer wrote it with `<dd/mm/yyyy>`. In the full reminder, `ba lần chạy gần nhất` became `ba lần chạy vừa qua`, so the banned token `nhất` of finding 4 does not return |
| 6 | Permission contradiction | fixed | Line 76 as the reviewer wrote it; the digest line is `Cần che, chưa vào kho: «source_url», «reason»`, and every mention (text, trimming rule, failure row) renamed |
| 7 | A `question` quote in the digest breaks CONTRACT 10.1 rule 2 | fixed | New paragraph after the `Cần che` paragraph (line 525): a `question` line shows kind, pillar, date and path, never the quote. The alternative (narrowing CONTRACT 10.1 rule 2) was not taken, so no patch request |
| 8 | Music and footage claim wider than S37 | fixed | "Music used to grow views or sales can be commercial use of somebody else's work" |
| 9 | Lunar calendar reason wider than the form | fixed | CONTRACT 10.1 rule 6 wording |
| 10 | Saved file routes ignore D23 and the LinkedIn verdict | fixed, changed | `own-saved`: "never a saved search of people on LinkedIn". `audience-places`: "never a file about another shop on a marketplace `CAPABILITIES.md` records as not read by this kit", because the reviewer's wording named Shopee, TikTok Shop and Lazada in prose and the checker failed it (vendor names the original never carries; the route belongs in `CAPABILITIES.md`). D23 added to the binding decisions; one clause row added (B3); patch request 6 carries the hand tracking bar to `CAPABILITIES.md`, pending, after review |
| 11 | Ledger stale after the integrator | fixed | Schedule rows, the 672 before 9:00 row, the tension (resolved), the byte identity sentence, and the line citations (413, 527, 652, 653, 660) |
| 12 | B11 case 9 has no routine line | fixed as asked, no routine rule | Case 9 row and the rejected and unresolved list keep the gap; outbound proposal to `soc-draft-queue`; form line 785 requested as a `[CG]` item. This fixer may edit only the routine and this ledger, so **the lead adds 785 to the kit's Vietnamese practitioner review pack (`review-packet-vi.md`) and the kit report** |
| N1 | `sources_state` has no reason field | fixed | "set `disabled: true` and name the reason in one run record line and one `assumptions[]` entry" |
| N2 | `Cần che` lines could pass the 25 line cap | fixed | One line per folder, naming the folder path and the kinds found, where the files would pass the cap |
| N3 | Local path joined to `https://` by the draft queue | fixed as asked | Outbound proposal to `soc-draft-queue`; the routine's example is unchanged |

Declined: none.

Untouched, confirmed by the checker (protected sections equal) and by `diff`: frontmatter, guard call, Step 0 (0.0 to 0.4), both guardrails and the save test, file ownership, Step 8 invariant and run record, Idempotency, How this hands off, When you learn something, Improving this routine, The one push, `## Corrections`. `git status --short employees/social-media-employee` prints nothing: the original kit is byte for byte unchanged. At writer time `CAPABILITIES.md` and `CONTRACT.md` in the variant were byte identical to the original (`cmp`); sweep patches 1 to 5 have since been applied by the integrator (`_shared/patch-log.md`: `CONTRACT.md` 2.3, 2.5 reader cell, 10.2; `CAPABILITIES.md` 1.1, `shell.run`, `web.fetch`; `README.md`).

Checker, routine mode (after the last fixer edit; an intermediate run failed 3 vendor and 5 placeholder checks on the reviewer's literal wording, see findings 3 and 10, and passed after those were changed):

```
PASS (0 fail, 0 warn)
```

No WARN to explain. Owner facing Vietnamese sits inside fenced blocks or backtick spans; vendor names in prose: none added (LinkedIn mentions held at the original's count, eight).

Copy check, `node employees/social-media-employee-vn/scripts/copy-check.mjs --file <path> --dest plain --json` (the call shape Step 6 documents), re-run in the fixer pass on six texts saved under `scratchpad/vn/social-media-employee-vn/cc/`: a filled fictional digest in the new Step 7.3 template with dd/mm/yyyy dates, a `question` line without its quote, the one line full reminder and the renamed masking line (`material-digest-example.md`), the full reminder (`low-own-material-full.md`), the short reminder (`low-own-material-short.md`), the masking line (`masking-line.md`), a per folder masking line (`masking-folder-line.md`), and the fictional ledger note (`example-note.md`):

```
material-digest-example.md verdict PASS violation_count 0, exit 0
low-own-material-full.md verdict PASS violation_count 0, exit 0
low-own-material-short.md verdict PASS violation_count 0, exit 0
masking-line.md verdict PASS violation_count 0, exit 0
masking-folder-line.md verdict PASS violation_count 0, exit 0
example-note.md verdict PASS violation_count 0, exit 0
copy-check: selftest PASS (43 checks)
```

Known gap (D6): `copy-check.mjs` does not recognise Vietnamese counts, so these PASS lines do not prove every Vietnamese figure carries a path; the routine's Step 7.3 bullet tells the agent to hold itself to the rule.

Dash scan (U+2013 and U+2014 counter) on this ledger and the routine:

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `soc-calendar-standup` | 672 `[CG]` KN-06-024; 842 none; D9 | Remind after three short days, once, then a count | Applied by the integrator: the standup copies the line starting `Low own material:` under `Waiting on you` exactly as the sweep wrote it. The fixer pass made the full reminder a single line so the request to the staff reaches the brief; the person on duty pastes the brief by hand (D10) |
| `soc-draft-queue` | 694 `[CG]` KN-06-026 | Eight new material kinds on the ledger | Map `low-stock`, `behind-the-scenes`, `how-to`, `price`, `industry-news`, `occasion`, `award`, `trend` in the framework table (for example `how-to` to `walkthrough`, `low-stock` and `behind-the-scenes` to `receipt`); a `price` or `award` quote reaches a post only through `## Member claims`; never draft from a `low-stock` line on a day after its `expires_on` |
| `soc-draft-queue` | 704 `[CG]` KN-06-027 | Reviewer OK before a stated time for an evening trend post; library music only | A draft built on a `trend` line is held until the member's reviewer writes OK under it by the deadline the member records in their own file (the 15:00 value stays in that file, never in a routine), and its sound is named as the platform library sound, never a file (Phần A A5.5 189) |
| `soc-draft-queue` | 699 none (proposal only) | Weak material is background, never a selling sentence | Proposal for review: a `weak` line may feed `short-note` context but not a selling claim. Unmarked, so adopt only with a marked B-3 clause |
| `soc-draft-queue` | 785 none (proposal only); B11 case 9 | A newspaper names the shop in a complaint | Proposal for review: never draft from an `industry-news` line that names the member's own business. Unmarked, so adopt only with a marked clause; form line 785 is requested as a `[CG]` item for the kit's Vietnamese practitioner review pack and the lead's kit report (fixer pass) |
| `soc-draft-queue` | none; reviewer NOTE on Step 5.8 | A local path source | Write a `source_url` that is a local path, such as `drop/2026-09-23/ghi-chu.txt; drop/2026-09-23/me-tra.jpg`, without the `https://` prefix in `- source:`; the prefix is for a web address only (CONTRACT 2.6 shape). The original kit has the same issue for local paths |
| `soc-intake-and-voice` | 672 `[CG]`, 694 `[CG]`, D16 | Where the drop and the price list live; terms checked sources | When writing `plan/sources.md`, list under `own-work` the folder where the person on duty saves the day's drop, and the member's price list and season file paths; never a staff member's personal chat export. Apply the same terms check before listing an `own-published` or `audience-places` source, and list a platform `CAPABILITIES.md` names as terms restricted only by the path of its saved export |
| `soc-intake-and-voice` | 598 `[S52]` plus unmarked list | The season file | Keep 24/11 under `## Working days and hours` (already Phần A A2 86); the rest of the season list and any lead time is a proposal until a marked B-1 clause supports it. `soc-material-sweep` reads occasion dates only from the member's file |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### \`web.fetch\``, paragraph "**This capability is what keeps the material sweep and the intake crawl alive" | insert after | **This capability is what keeps the material sweep and the intake crawl alive on a machine with no browser.** It reaches public pages: the member's own site, blog index, changelog, release notes, docs, and public community feeds. It takes no browser mutex and costs no lane time, which is why both routines prefer it over a browser for everything it can reach. It cannot reach anything behind a login, which is where the saved searches, the notifications, and the analytics live. Section 7 has the honest arithmetic on that. | **Platforms whose terms forbid automated access or collection, read on 24/09/2026.** No routine in this kit fetches, browses, tracks or collects on these; the material sweep reads only an export or a file the member or the person on duty saved, under a path in `plan/sources.md`. Facebook (terms 3.2, effective 01/01/2025), Instagram, and Threads as part of the same family; TikTok (section 5, updated 01/12/2025); YouTube (effective 05/01/2022); LinkedIn (8.2.2 and 8.2.13, effective 03/11/2025); Zalo and Zalo OA (4.7, updated 28/08/2026); TikTok Shop, Shopee and Lazada. A site not in this list is read only after its own terms were read and found silent on automated access, and the date is kept as `terms_checked` in the reading routine's state. | Phần A Platform terms table (D13); D16; D17; B-2 608, 624 |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### 1.1 The five checks`, paragraph "`shell.run` earns one more mention here" | replace | `shell.run` earns one more mention here than it does in most kits, because one source of material depends on it entirely: the `own-work` kind in `plan/sources.md` is the member's own repositories, build logs, and release notes on disk, and it is read with a local command and nothing else. Without a shell, the material is what you published rather than what you did, and the drafts are one step further from the work. | `shell.run` earns one more mention here than it does in most kits, because one source of material depends on it: the repositories, build logs, and release notes under the `own-work` kind in `plan/sources.md` are read with a local command and nothing else. The day's drop under the same kind, the photos, stories and stock notes the person on duty saves from the shop's shared material group, is read with `file.read` and needs no shell. Without a shell, only the repository part of your own work is lost. | 672 `[CG]` KN-06-024; routine Step 4a |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### \`shell.run\``, paragraph "**Absent:** three things change" | replace | And the `own-work` source kind reads `n/a (no shell capability)` forever, which is the largest single degradation in this kit: the material becomes what you published rather than what you built. | And the repositories under the `own-work` source kind read `n/a (no shell capability)` forever, while the day's drop is still read through `file.read`. For a business whose own work is its drop, that is a small loss; for one that builds software, it is the largest single degradation in this kit. | 672 `[CG]` KN-06-024; routine Step 4a and failure row |
| `employees/social-media-employee-vn/CONTRACT.md` | `### 2.3 Plan and voice`, paragraph "`plan/sources.md` carries five kinds" | replace | **A kind with an empty `sources:` list is researched, tested, and filled by `soc-material-sweep` on its next run**, which writes one line into `plan/CHANGELOG.md`. An empty list is a handoff, not a hole. | **A kind with an empty `sources:` list is researched, tested, and filled by `soc-material-sweep` on its next run**, which writes one line into `plan/CHANGELOG.md`. An empty list is a handoff, not a hole. In this variant `own-work` also names the folder where the person on duty saves the day's drop from the shop's shared material group, and the member's price list and season file. No source is kept until its site's terms were read and found silent on automated access, and a platform `CAPABILITIES.md` lists as terms restricted appears only as the path of a saved export. | 672 `[CG]`, 694 `[CG]`, D16 |
| `employees/social-media-employee-vn/README.md` | Line "- **Material.** Dated, sourced, quoted raw material" | replace | - **Material.** Dated, sourced, quoted raw material captured from your own shipped work, your own site and changelog, your own saved searches, the places your audience already is, and the questions people actually asked you. | - **Material.** Dated, sourced, quoted raw material captured from your shop's daily drop of photos and stories, your own site, the exports you save from your own channels, the public places your audience already is, and the questions people actually asked you. | 672 `[CG]`; D13, D16 |
| `employees/social-media-employee-vn/CAPABILITIES.md` | `### \`web.fetch\``, the per platform table, row "TikTok Shop, Shopee, Lazada" | replace (second cell only) | Not read by this kit | Not read by this kit. Shopee's terms (3.1) also bar tracking, counting or copying another shop's page by hand, so nobody saves such a file for a routine to read either (D23) | D23; routine Step 2 `audience-places` row; fixer pass. **Pending, after review** |
