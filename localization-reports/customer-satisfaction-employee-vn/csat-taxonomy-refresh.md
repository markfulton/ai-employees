# csat-taxonomy-refresh: provenance ledger

Status on 2026-09-24: **ledger complete, Gate 2 needed no new source (every adopted law, number and platform clause is already verified in the Phần A ledger), routine edits applied to the variant routine and checked (see Files and checks).** No shared file was edited; five patch requests and eight outbound deferrals close this file. Reviewer FIX pass applied on 24/09/2026 (see Files and checks).

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/05_CSKH/phieu-da-dien.md` (read only), `## B-6. csat-taxonomy-refresh`, form lines 1693 to 1990. Phần A decisions are cited by row id from `_shared/phan-a-ledger.md` and not re-decided.
- Extract: `extract_form_section.py --routine csat-taxonomy-refresh`, scratch copy `scratchpad/vn/customer-satisfaction-employee-vn/csat-taxonomy-refresh-extract.md` and `.json`. 138 rows and answers: 14 with `[S#]`, 5 with `[CG]`, 0 with both, 119 unmarked. B0 box ticked: "Làm khác". Clock times in the section: 11:00 (a B7 bad example), 14:00 (B2). Vendor names: Shopee, Pancake, TikTok, TikTok Shop, Messenger, LinkedIn, Subiz. En or em dashes in the form section: 12 (none carried into any file).
- Form author (Phần A row A1-01): an AI sub agent playing the customer care role, research draft dated 23/09/2026. **No clause here has been confirmed by a person running customer care in a Vietnamese business.** `[CG]` marks are the owner's review decisions, not a domain expert's.
- Original kit and routine: `employees/customer-satisfaction-employee`, `routines/csat-taxonomy-refresh/SKILL.md`, 70650 bytes, 799 lines, read in full.
- Variant kit and routine: `employees/customer-satisfaction-employee-vn`, same routine id; before this pass a byte copy of the original.
- Also read: original `CONTRACT.md` sections 1, 2.3, 2.5, 7 and the taxonomy rows of the file map; `SCHEDULE.md` in full (row `last-weekday`, fire 14:00, window 13:45 to 17:30, key `YYYY-MM`, budget 35 min, browser `light`); `CAPABILITIES.md` section 7 row and the cron and schtasks lines; `examples/` (README, tickets, runlog, board, queue, brief); `csat-inbox-sweep` (how the confirmation heading switches off) and `csat-desk-standup` (changelog under `Waiting on you`, card dedupe by `title`); `_shared/phan-a-ledger.md`, `_shared/parsed-strings.md`, `_shared/glossary.md`; `STYLE-VI.md`; `VN-DECISIONS.md` D1 to D18; the worked example `chief-of-staff-vn/cos-decision-brief.md`; the writer skill and its four references.
- Source index: `05_CSKH/literature/nguon.md`, viewing date 23/09/2026 for every row. Phần A re-opened S19, S43, S3, S4, S52, S8, S68 and the platform terms on 24/09/2026.
- Kit version before: 1.8.0 (the lead bumps once per kit, D14). After: not set by this writer.

## Sources re-opened

Gate 2 covers sources behind an ADOPT or MOVE row that states a law, a number or a platform rule. Every such source here was already re-opened and confirmed in `_shared/phan-a-ledger.md` on 24/09/2026, so none was re-opened again. No claim was widened beyond what that ledger confirmed.

| Source | Behind which ADOPT here | Phần A verdict relied on (24/09/2026) |
|---|---|---|
| S19 Shopee, Chính sách trả hàng và hoàn tiền, https://help.shopee.vn/portal/4/article/77251 | 1810 platform refund reads `critical`; 1802 and 1937 deadline named, never numbered | Confirmed: seller responds within 02 calendar days "or another time Shopee sets", else Shopee refunds automatically. Posted 04/3/2026, effective 11/3/2026 |
| S23 TikTok Shop, hủy, trả hàng, hoàn tiền (Phần A A5-37) | Same platform refund reading, second marketplace | Confirmed: an unprocessed request is approved. Not cited by this form section; named only because the routine sentence is platform neutral |
| S3, S4 Luật 19/2023/QH15 Điều 31 khoản 2 | 1946 legal acknowledgement deadline named, never numbered | Confirmed: every complaint acknowledged within 03 working days. The number stays out of the kit (D11) |
| Platform terms (Meta, Shopee, TikTok Shop, Lazada, Zalo, Google Maps), Phần A D13 table | 1769 Step 5 never opens a surface whose platform forbids automated access | Confirmed; D16 and D17 |
| S43 Báo Nhân Dân, fake refund scam | 1815 scam words, EXAMPLE only | Confirmed: OTP, QR, bank account, advance fee |

Sources behind DEFER, KEEP, UNVERIFIED or REJECT rows only (S1, S20, S24, S26, S27, S33, S41, S45, S46) were not re-opened here: not re-opened, index viewing date 23/09/2026, claims not widened. S20 is superseded by S52 in Phần A. S46 stays not re-opened, which is why no boom or sale clause is adopted.

## Clause decisions

Decisions: ADOPT, MOVE, KEEP, WORDING, EXAMPLE, DEFER, REJECT, UNVERIFIED. Form instruction and table header lines (1699, 1706, 1721, 1739, 1741, 1773, 1775, 1793, 1795, 1839, 1841, 1859, 1860, 1867, 1874, 1881, 1888, 1896, 1914, 1916, 1932, 1934, 1950, 1952, 1974, 1985) carry no clause and are not counted.

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1700 B0 box "Làm khác" | none | KEEP | whole routine | The routine exists in Vietnam and is localized, not dropped |
| 1702 B0: the work is a month end re-read of real tickets, renaming themes and the four levels | none | KEEP | Steps 3, 4, 6 | Same work as the original |
| 1702 B0: theme names are Vietnamese customer words, including unaccented | none | WORDING | Step 4 items 1, 4, 5 | Presentation of names; the matching mechanics rest on 1717 `[CG]` |
| 1702 B0: sale and Tết months must not delete a theme because of a few quiet days | none | KEEP | Step 3.2, Step 2.5, Step 6.3 | Retirement already needs two consecutive empty months with the sweep running; nothing is ever deleted. Tết example sentence in 3.2 is WORDING |
| 1702 B0: losses include refused COD orders and platform return fees, not only chargebacks | none | UNVERIFIED | report; DEFER proposal to `csat-inbox-sweep` | No kit file records a refused delivery or a fee per ticket; unmarked |
| 1708 B1 output: 6 to 8 groups | none | UNVERIFIED | report | Original keeps no cap on theme count; intake writes six to nine |
| 1708 B1 output: each group with accented and unaccented keywords | none (mechanics rest on 1717 `[CG]`) | WORDING | Step 4 item 5 | Both forms written as separate `matches:` entries |
| 1708 B1 output: severity rules and the list of mis graded tickets this month | none | KEEP | Steps 3.4a, 6.4, 6.6, Step 8 | Rule rewrite with evidence path; ticket id counts in the run record |
| 1710 B1: the owner approves; the shift lead applies from day 02 of next month | none | REJECT | report | CONTRACT 2.3 and 7: no proposal file, no approval gate on file work; the changelog under `Waiting on you` is the review |
| 1711 B1: unclassified at most 10 percent over 30 days after applying | none (same clause as 1717 `[CG]`) | ADOPT | see 1717 | Counted once under 1717 |
| 1711 B1: sample 20 tickets, at most 2 grade mismatches | none | REJECT | report | The rule about numbers refuses a classification accuracy figure |
| 1711 B1: no new theme without 8 conversations in 7 days | none | UNVERIFIED | report | Original `tickets_to_create_a_theme` 5 in the window stays |
| 1712 B1 bad: renaming every month without reason | none | KEEP | 6.2 `behaving as written`, 6.3 | Ids never renamed; no tidy |
| 1712 B1 bad: 20 themes | none | UNVERIFIED | report | No cap adopted |
| 1712 B1 bad: deleting the boom theme in the 11.11 week | none | KEEP | 6.3 "Nothing removes a block"; SCHEDULE row | Never deleted; `last-weekday` never falls on days 9 to 12 |
| 1717 Câu 1 (a): unclassified at most 10 percent of text bearing tickets, measured over the month | `[CG]` | ADOPT | Step 1.2 `evidence_floor.unclassified_share` 0.1; Step 4 "First, the share" | Owner approved. Share computed only when the unclassified count reaches `tickets_to_create_a_theme`, so no proportion is computed below a floor |
| 1717 Câu 1 (b): outdated when two people tag one sentence two ways 5 times in 7 days | `[CG]` | KEEP, then ADOPT through the csat-desk-intake deferral (row 199) | 3.3 fourth signal `theme_alternative`; 3.3 boundary trigger | The kit records no per person tagging, so the writer pass kept the inherited `theme_alternative` signal. The integrator's deferral pass then adopted the same `[CG]` signal from intake form line 309, with the sweep's grades standing in for the two people (row 199) |
| 1717 Câu 1 (c): outdated when one group holds over 40 percent of tickets | `[CG]` | ADOPT | Step 1.2 `evidence_floor.dominant_share` 0.4; Step 3.3 "A theme that swallows the month" | Owner approved; it orders the test, never the verdict |
| 1717 Câu 1 (d): outdated when new words such as "phí hoàn", "quét mã" are missing from the scam group | `[CG]` | ADOPT | Step 4 keyword pass; 6.2 paragraph after the table; Step 4 item 1 diacritic folding | Owner approved adding short customer phrases to an existing theme |
| 1723 B2 trigger: last working day of the month | none | KEEP | SCHEDULE row | Already `last-weekday` |
| 1723 B2 trigger: a platform changes its return deadline mid month | none | DEFER | `csat-desk-intake` | No event trigger in the kit; the variant's rules name the deadline instead (1802) |
| 1725 B2 schedule: 14:00 on the last working day | `[S19,S46]` | KEEP | `SCHEDULE.md` row unchanged | Row already fires 14:00 on `last-weekday` (Phần A A2-07) |
| 1725 B2 schedule: one extra run within 7 days after 11.11 and after mùng 6 Tết | `[S19,S46]` | REJECT | report | The key is `YYYY-MM` and a second run in one period is `skipped-already-ran`; the closed vocabularies have no event row. S19 and S46 do not support a schedule. Phần A A2-08 |
| 1726 B2: five ways the owner asks | none | WORDING | report, acceptance | The routine is scheduled; a request reaches it only as data or as a member `## Corrections` line |
| 1727 B2: draft within 4 hours | none | UNVERIFIED | report | The row's 35 minute budget governs |
| 1728 B2: ends when the owner ticks, applied from day 02 | none | REJECT | report | Same as 1710 |
| 1729 B2: remind after 24 hours, at most twice | none | REJECT | report | CONTRACT 9 closes push to four blocker cases; D9, D10 |
| 1730 B2: urgent unanswered tickets first (B-3) | none | UNVERIFIED | report | Routines do not gate on each other |
| 1730 B2: never change the set mid sale day | none | KEEP | SCHEDULE row | Cannot occur: the last seven days of a month never include days 9 to 12 |
| 1735 Câu 2: monthly, 14:00, last working day, so the morning keeps chat cover | `[S46]` | KEEP | SCHEDULE row | Row unchanged |
| 1735 Câu 2: no change on 9.9, 10.10, 11.11, 12.12 | `[S46]` does not support a rule | KEEP | SCHEDULE row | Satisfied by the schedule itself; S46 is a sale season boom article |
| 1735 Câu 2: review again 7 days after a sale | `[S46]` | REJECT | report | Second run in the period, as 1725 |
| 1735 Câu 2: no review on mùng 1 to 3; review in the week after mùng 6 | `[S46]` does not support it | UNVERIFIED | report | Phần A A5-60 `[CG]` is staffing for intake and standup only. A paused Tết still stops retirement through Step 2.5 |
| 1743 B3: tickets, themes and severities come from the B-2 ledger | `[S26,S33]` | KEEP | Step 1.3 `tickets/tickets.jsonl` | Inherited |
| 1743 B3: tags on the aggregator as a source | `[S26,S33]` vendor pages | UNVERIFIED | report | A label in the member's tool is not a kit file; the route is Phần A A5-04 MOVE |
| 1743 B3: more than 20 percent of days missing means "not enough", never delete | `[S26,S33]` do not support the figure | KEEP | Step 2.5 `worked_fraction` 0.5 | Original guard stays; the member may set `worked_fraction` to 0.8 in one line (report only) |
| 1744 B3: money outcomes from the seller centre and the shipping file; no amount, no invented loss | none | KEEP | 3.4 "never inferred"; the rule about numbers | Inherited; a seller centre read belongs to the sweep under D16 |
| 1745 B3: the current theme file; missing means stop and redo B-1 | none | KEEP | Step 1 item 5 | Inherited |
| 1746 B3: unaccented keywords verbatim from the ledger; none means no addition | none | KEEP | Step 4 "phrases taken from the tickets" | Inherited |
| 1748 B3: photo only tickets still counted; voice transcripts used | none | KEEP | Step 4 "First, the share" sentence on photo tickets | Volume counts every ticket; only the share leaves out tickets with no words, per 1717 `[CG]` |
| 1754 Câu 3: the master file is the true copy; tools only carry labels | `[S26,S27,S33]` | KEEP | 6.3 "A label in the member's own chat or helpdesk tool" | Clarifies the inherited "setting on a platform this kit did not create" |
| 1754 Câu 3: only the owner ticks, the shift lead proposes | `[S26,S27,S33]` do not support it | REJECT | report | Approval model conflicts with CONTRACT 2.3 and 7 |
| 1754 Câu 3: staff never rename a group mid shift | same | KEEP | 6.3 id rules | Inherited |
| 1759 Câu 4: a refund paid is a loss | `[S20,S24,S46]` | KEEP | 3.4 `critical` | Inherited |
| 1759 Câu 4: two way shipping on a refused delivery or a platform forced return | `[S24,S46]` not re-opened | UNVERIFIED | report; DEFER proposal to `csat-inbox-sweep` | No kit file carries it per ticket |
| 1759 Câu 4: goods that cannot be resold | none | UNVERIFIED | report | Unsupported |
| 1759 Câu 4: badge lost when chat falls under 80 percent | `[S20]` (now S52) | REJECT | report | A shop wide rate, not one ticket's outcome |
| 1759 Câu 4: a new 1 star review | not supported by S20, S24, S46 | UNVERIFIED | report | Unsupported |
| 1759 Câu 4: never turn a loss into "estimated lost revenue" without an order | none specific | KEEP | The rule about numbers, new bullet | Clarifies the inherited refusals of money amounts and projections |
| 1764 Câu 5: an exchange per channel (chat bursts under 10 minutes, calls, emails, reviews) | none | UNVERIFIED | report | Inherited ledger count (`drafted` plus revisions) stays |
| 1769 Câu 6: read the full text in the original app or the aggregator | `[S26]` | KEEP | Step 5 | Inherited truncated ticket read |
| 1769 Câu 6: never open a surface when opening it marks it seen; never press "accept return" | `[S26]` | KEEP | Step 5 `marks read on open`; Guardrail 1 | Inherited |
| 1769 Câu 6, applied with D16 and the Phần A D13 table: never open a surface whose platform forbids automated access | Phần A platform terms | ADOPT | Step 5 new paragraph; degrade row | Meta, personal Zalo, customer groups never opened; marketplaces own ticket only; names go to `CAPABILITIES.md` |
| 1769 Câu 6: mark "bị cắt" when only the preview was seen | `[S26]` | KEEP | `verbatim_truncated: true` | Parsed field unchanged |
| 1777 B4 step 1: window from day 02 to the review day | none | KEEP | Step 1.1 | The inherited window (day after last run) stays; "02" belongs to the rejected apply date |
| 1778 B4 step 2: count by theme and level, with an unclassified count | none | KEEP | Steps 3.1, 4 | Inherited count; share per 1717 |
| 1779 B4 step 3: read 20 random tickets | none | REJECT | report | Sample accuracy figure; 3.4 reads every ticket with an outcome |
| 1780 B4 step 4: list new words, unaccented included | none (rests on 1717 `[CG]`) | KEEP | Step 4 keyword pass | Counted under 1717 |
| 1781 B4 step 5: propose split, merge or keep with counts | none | KEEP | Step 3.3, 6.6 | Inherited, applied rather than proposed |
| 1782 B4 step 6: rewrite a rule from 5 under graded tickets | none (same as 1799 `[CG]`) | KEEP | see 1799 | Counted under 1799 |
| 1783 B4 step 7: never delete a theme with tickets in 60 days; boom, warranty, scam never deleted in a sale month | none | KEEP | 6.3 | Nothing is ever deleted |
| 1784 B4 step 8: owner ticks, applied from day 02 | none | REJECT | report | As 1710 |
| 1789 Câu 7: tag "chua_ro", keep the verbatim, invent no group | none | KEEP | Step 4, `unclassified` | Parsed value `unclassified` unchanged |
| 1789 Câu 7: read the pile each Wednesday once it holds 8; urgent tickets out of it within 48 hours | none | UNVERIFIED | report | Other routines' cadence; unmarked |
| 1797 B5: unclassified over 10 percent in 30 days means review keywords first, no new theme first | `[CG]` | ADOPT | Step 4 share and keyword pass | Owner approved; the pass runs before any cluster becomes a theme |
| 1798 B5: one theme over 40 percent of the month means consider a split | `[CG]` | ADOPT | Step 3.3 | Owner approved |
| 1799 B5: rewrite a rule from 5 under graded tickets in the month, since 3 is low for chat | `[CG]` | ADOPT | Step 1.2 `mismatches_to_rewrite_a_rule` 5 and its reason paragraph | Owner approved. Over grading bar follows at double (10). Inherited second month rule kept |
| 1800 B5: 0 tickets in 60 days, not a sale or Tết month, propose retirement, keep history | none | KEEP | 3.2, 6.3 | Two consecutive empty months; the sale and Tết exception is UNVERIFIED |
| 1801 B5: keep a scam or boom group even at 2 tickets | `[S43,S46]` | KEEP | 3.1, 3.2 | Below the floor nothing changes and retirement needs zero, so the rule already holds |
| 1802 B5: a platform changes its deadline, fix the urgent hour mark | `[S19]` | ADOPT | 6.4 "A rule that fires on a deadline names the deadline"; CONTRACT patch 2 | S19 (Phần A) confirms the platform may set another time; a named deadline needs no rewrite when it changes |
| 1802 B5: within 24 hours, not waiting for month end | `[S19]` does not support the timing | DEFER | `csat-desk-intake` | A monthly routine cannot act within 24 hours |
| 1804 B5: never delete safety, scam, boom groups even at 0 | none | KEEP | 6.3 | Never deleted; a zero month exemption from retirement is UNVERIFIED |
| 1804 B5: no split without 8 conversations for the new branch | none | UNVERIFIED | report | Inherited `tickets_per_split_group` 4 |
| 1810 Câu 8: a refund higher than the ticket first said | `[S19]` does not support it | KEEP | 3.4 `critical` | Any refund card closed as done is already `critical` |
| 1810 Câu 8: a 1 star after an apology | not supported | UNVERIFIED | report | |
| 1810 Câu 8: the platform refunded the order itself because the deadline passed | `[S19]` | ADOPT | 3.4 `critical` row and "A refund the platform issued"; intro sentence; hand off sentence | Confirmed in Phần A; read only from kit files |
| 1810 Câu 8: more buyers from one batch report harm to health | not supported | UNVERIFIED | report; DEFER to `csat-desk-intake` via 1946 | |
| 1810 Câu 8: outcomes from the seller centre and reviews, never from feeling; count toward the 5 | `[S19]` | KEEP | 3.4 "never inferred from the words"; 3.4a | Inherited; threshold from 1799 |
| 1815 Câu 9: keep the 8 groups of B-1 | `[S43]` | DEFER | `csat-desk-intake` | The first taxonomy is the intake's |
| 1815 Câu 9: phrases per group, with and without diacritics | `[S43]` supports only the scam words | EXAMPLE | Step 4 illustration (scam words), Step 3.3 illustration | Phrases enter `matches:` only from tickets |
| 1820 Câu 10: display names Khẩn, Cao, Thường, Thấp | `[S19,S20]` | WORDING | glossary; values stay `critical` to `low` | Display only |
| 1820 Câu 10: order of urgent rules; high, normal, low triggers | `[S19,S20]` support only the 12 hour and refund facts | DEFER | `csat-desk-intake` | Global rules are written first by the intake; this routine rewrites on evidence only |
| 1820 Câu 10: an angry tone never raises the grade | not supported | KEEP | 3.4 "never inferred from the words" | Inherited in spirit |
| 1825 Câu 11: 5 under graded tickets | none | KEEP | as 1799 | |
| 1825 Câu 11: retire after 60 days, except scam, boom, warranty and sale or Tết months; never delete old data | none | KEEP and UNVERIFIED | 3.2, 6.3 | Two months kept; exemptions unsupported |
| 1830 Câu 12: one exchange per burst; same order within 7 days is the same case, at least high | none | DEFER (proposal) | `csat-inbox-sweep` | A sweep grading rule; unmarked |
| 1835 Câu 13: four levels and response times | `[S20]` | DEFER | `csat-reply-desk`, `csat-desk-standup` | Their Phần B and Phần A A3-15 |
| 1843 B6: count and propose split or merge; never change tags in use | none | KEEP | Steps 3, 6; 6.3 label paragraph | |
| 1844 B6: spelling fix of a name, AI drafts, human approves | none | KEEP | 6.2 `behaving as written` | The routine never tidies a name at all, which is stricter |
| 1845 B6: apply the new set, change urgent, always a person | none | REJECT | report | Conflicts with CONTRACT 2.3 and 7 |
| 1846 B6: never delete ticket history | none | KEEP | "What you never write" | Inherited |
| 1847 B6: re-grade open old tickets, at most 50 | none | REJECT | report | Old tickets are never re-graded or re-themed (load bearing rule) |
| 1849 B6: handover of counts, 5 mismatch examples, one proposed change | none | KEEP | 6.4 `changed:` line, 6.6, Step 8 | Evidence already travels with the change |
| 1849 B6: the date to apply | none | REJECT | report | As 1710 |
| 1855 Câu 14: owner ticks on the master file "áp từ ngày 02" | none | REJECT | report | As 1710 |
| 1855 Câu 14: the shift lead never raises a group to urgent mid shift | none | UNVERIFIED | report | Staff practice outside the kit |
| 1862 to 1865 B7 good 1: 18 of 120 unclassified, 9 on refund fee and OTP, add keywords, no new group | none | EXAMPLE | Step 4 illustration; 6.6 line 3; Step 8 notes | Fictional; the apply date clause is REJECT |
| 1869 to 1872 B7 good 2: 6 wrong size tickets graded low, fix at threshold 5 | none | EXAMPLE | 6.4 fenced example | Fictional; made consistent with the revealed ladder (revealed `normal`). It rewrites the intake's shipped `pre-sale` rule, whose English text `previously:` quotes exactly, so the one line undo is real |
| 1876 to 1879 B7 good 3: retire a colour question theme after 0 tickets, keep history | none | EXAMPLE | 6.3 retired block, 6.6 line 2 | Fictional; months in `retired_reason:` and the changelog clause are written the member's way (tháng 8 và tháng 9/2026), since neither is a parsed field |
| 1883 to 1886 B7 bad 1: merge everything into "khác" and delete the boom group | none | KEEP | 6.3 "Nothing removes a block"; degrade row | Trap mapped |
| 1890 to 1893 B7 bad 2: apply mid 11.11 at a clock time | none | KEEP | Step 0.1, SCHEDULE row | The clock time never enters the kit |
| 1898 B8: the review speaks to the owner, never to customers | none | WORDING | 6.4a second line, 6.6 clause, Step 7 titles | Vietnamese, em and anh/chị per STYLE-VI |
| 1900 B8: at most 40 lines | none | UNVERIFIED | report | There is no separate review document |
| 1901 B8: no emoji; codes without diacritics like `giao_cham` | none | WORDING | Step 4 item 4 | ASCII id kept; the underscore separator is UNVERIFIED, the file's own separator is followed |
| 1902 B8: number and date formats | none | WORDING | member lines | ISO stays in the file fields `retired:` and `changed:` because readers parse them |
| 1903 B8: banned phrases "khách thích kiện", "nhóm rác" | none | KEEP | "Never characterise a customer" | Inherited |
| 1904 B8: opener asking the owner to tick | none | REJECT | report | Approval model |
| 1904 B8: closer "Chưa đổi thẻ trên phần mềm" | none | UNVERIFIED | report | Not used; 6.3 label paragraph carries the fact for the agent |
| 1905 B8: no comment version | none | KEEP | Guardrail 1 | Nothing outbound |
| 1910 Câu 15: ids unaccented, no spaces; display names accented, customer words; `chua_ro` not a report group; no refund, bug, other | none | WORDING and KEEP | Step 4 item 4 | `unclassified` is not a theme (inherited) |
| 1918 B9: one sentence, two groups, heavier group with a note | none | DEFER (proposal) | `csat-inbox-sweep` | A grading decision; unmarked |
| 1919 B9: a month with 10 blind days never deletes a group | none | KEEP | Step 2.5, 6.3 | |
| 1920 B9: staff flip grades for a KPI; never rewrite history, record the mismatch | none | KEEP | "What you never write"; 3.4a | Reviewing a named person is UNVERIFIED (no per person data) |
| 1921 B9: unaccented text misread | none (mechanics rest on 1717 `[CG]`) | KEEP | Step 4 item 1 folding | Counted under 1717 |
| 1922 B9: two shops share one theme file | none | UNVERIFIED | report | One install per business; the personal data rule already keeps another shop's numbers out |
| 1923 B9: law or platform change mid month | none | DEFER | `csat-desk-intake` | As 1802 |
| 1928 Câu 16: unaccented, teencode, voice, photo, several issues in one message, stickers | none | DEFER (proposal) | `csat-inbox-sweep` | Capture and grading; a synonym table would be a new file with no owner |
| 1936 B10: acknowledge every complaint within 03 working days | none here; Phần A A3-21 `[S4]` | DEFER | `csat-reply-desk`, `csat-desk-standup` (Phần A targets) | This routine only names the deadline (6.4) |
| 1937 B10: Shopee 02 calendar days; fix the "6 hours left" mark when it changes | none here; S19 via 1802 | ADOPT | 6.4 deadline paragraph | Counted under 1802; no number in the kit (D11) |
| 1938 B10: TikTok Shop fees on returns; keep the returns group | none | KEEP | 6.3 | Figures DEFER to `csat-satisfaction-report` (Phần A A5-38) |
| 1939 B10: personal data law; no full phone number in the review | none; Phần A A6-08 `[S8,S68]` | KEEP | "The rules that do not bend" personal data bullet | Clarifies the inherited rule for match phrases |
| 1940 B10: formal complaints never merged into a price question | none | KEEP | 3.3 merge test | Needs the same macro plus a corroborating signal |
| 1941 B10: a customer naming the provincial Department of Industry and Trade is high, to the owner | `[S1]` | DEFER | `csat-desk-intake` | A new global rule; S1 not re-opened |
| 1946 Câu 17: grades for defects, the 03 day acknowledgement, the Shopee window, missed delivery promises, a third warranty repair, a wrong invoice | `[S3,S4,S19,S41,S45]` | DEFER | `csat-desk-intake` | The first rules are the intake's |
| 1946 Câu 17: those deadlines named in the rules | `[S3,S4,S19]` | ADOPT | 6.4 deadline paragraph | Counted under 1802 |
| 1954 to 1965 B11 cases 1 to 12 | none | acceptance | Acceptance section | Not counted as decisions |
| 1970 Câu 18: split when the handling differs; old tickets keep their id; no overwrite | `[CG]` | KEEP | 3.3, 6.3 | Inherited |
| 1970 Câu 18: the illustration itself (45 percent "hàng lỗi", size versus tear) | `[CG]` | EXAMPLE | 3.3 illustration | Fictional, as the form says |
| 1970 Câu 18: the transition report shows old and new columns | `[CG]` | DEFER | `csat-satisfaction-report` | The report owns the view |
| 1970 Câu 18: merge when 80 percent of sentences are one idea | `[CG]` on an illustration | UNVERIFIED | report | Presented as an illustration, not a threshold; the inherited merge test covers the case |
| 1976 B12: unclassified share over text tickets, photo tickets not dropped | none | KEEP | Step 4 share | Counted under 1717 |
| 1978 B12: refused to delete boom, scam, warranty for a nicer report | none | KEEP | 6.3, degrade row | |
| 1979 B12: rule fixed only at 5 | none | KEEP | 3.4a | |
| 1980 B12: apply date avoids sale days and is day 02 | none | REJECT | report | Apply date rejected; sale days cannot occur |
| 1981 B12: ids unaccented, names in customer words | none | WORDING | Step 4 item 4 | |
| 1982 B12: no full phone number in the review | none | KEEP | personal data bullet | |
| 1987 B14: per shop memory: current set, apply date, retired groups, groups never deleted | none | KEEP | Step 1.2 state `themes{}` | Apply date and a do not delete list are UNVERIFIED |
| 1989 B14: record the window, counts, unclassified share, proposals, who ticked | none | KEEP | Step 8 notes | Share added under 1717; "who ticked" rejected |
| 1990 B14: one message on the internal channel, at most 15 lines, 24 hour deadline | none | REJECT | report | CONTRACT 9, D10; the changelog reaches the brief |

### Decision counts

| Decision | Count |
|---|---|
| ADOPT | 12 |
| MOVE | 0 |
| KEEP | 61 |
| WORDING | 9 |
| EXAMPLE | 5 |
| DEFER | 13 |
| REJECT | 17 |
| UNVERIFIED | 21 |
| Total | 138 |

Counted by script over the Decision column above; a row marked "KEEP and UNVERIFIED", "WORDING and KEEP" or "DEFER (proposal)" counts once under its first word, and the B11 acceptance row is not counted. The 12 ADOPT rows carry 9 distinct edits: 1717 (a), (c), (d), 1769 with D16, 1797, 1798, 1799, 1802 and 1810 (platform refund). 1711 repeats 1717 (a), and 1937 and 1946 (deadline naming) are the same 6.4 paragraph as 1802.

### Deferrals received (integrator pass, 24/09/2026)

Outbound deferrals from other routines of this kit, settled by the integrator under the writers' editing rules: applied only where the clause carries `[CG]` or an `[S#]` re-opened on 24/09/2026, Step 0, both guardrails, parsed strings and `## Corrections` untouched, nothing shortened. Decisions: ADOPT (from deferral), KEEP (already covered by this routine's text), DECLINED.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| csat-desk-intake | 309 `[CG]`, first signal | More than 20 percent of 14 days' tickets unclassified | DECLINED | Contradicts this routine's own adopted 1717 Câu 1 (a) `[CG]` (at most 10 percent over the month window, `unclassified_share`); the routine's value is kept and the contradiction is logged in `_shared/patch-log.md` |
| csat-desk-intake | 309 `[CG]`, second signal | The same customer sentence given two themes by two people 5 times in 7 days | ADOPT, from deferral | Step 3.3 boundary trigger, ordering only, never the verdict; state fields `same_phrase_two_themes` and `same_phrase_days` in Step 1.2. No per person tagging exists in the kit, so the sweep's grades on the ledger stand in for "hai người"; the trigger fires only on the same sentence, identical once folded, never on a shared opener of a few words. This is the same `[CG]` signal as this form's 1717 Câu 1 (b) (row 52) |
| csat-deflection-desk | 1528, none | Unaccented and abbreviated phrases under `matches:` | DECLINED | No marker; its substance already stands in Step 4 item 5 from 1717 Câu 1 (d) `[CG]` |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| The thing this routine exists to find | Localize, one paragraph added | 1810 `[S19]` | The platform refund case, pointing to 3.4 |
| What you own, and the two guardrails | Keep byte for byte | none | none (checker: shared section equal) |
| The rules that do not bend | Localize one bullet | 1939, Phần A A6-08 | Personal data bullet: no phone, order code, address or name in a phrase, definition or `retired_reason:` |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; schedule unchanged, cadence sentence untouched |
| Step 1. Preflight, state, and the evidence window | Localize 1.2 | 1717, 1798, 1799 `[CG]` | `mismatches_to_rewrite_a_rule` 5, `unclassified_share` 0.1, `dominant_share` 0.4; one reason paragraph; example theme id `giao-cham` |
| Step 2. Repair, then the guard | Keep | none | none |
| Step 3. The three questions | Localize 3.2 sentence, 3.3, 3.4 | 1702 (WORDING), 1798, 1970, 1810 | Tết example in 3.2; split candidate paragraph and fictional illustration in 3.3; boundary trigger paragraph in 3.3 (integrator's deferral pass, row 199); platform refund in the `critical` row and one paragraph in 3.4 |
| Step 4. The unclassified pile | Localize | 1717, 1797 `[CG]`, 1910 WORDING | Share with its floor; keyword pass; illustration; diacritic folding in item 1; ASCII id and Vietnamese name in item 4; both forms and Vietnamese fields in item 5 |
| Step 5. The evidence read | Localize one paragraph | 1769 with D16 | Never open a surface whose platform forbids automated access |
| Step 6. Rewrite `strategy/themes.md` | Localize | 1717, 1754, 1802, 1946, B7 examples | 6.2 paragraph on Step 4 edits; 6.3 Vietnamese retired and merged examples, "Nothing removes a block", tool label paragraph; 6.4 deadline paragraph and a fictional example on the intake's shipped `pre-sale` rule, the rule body kept in the language of the line it replaces; 6.4a second line Vietnamese and a note that the first stays English; 6.5 Vietnamese count check; 6.6 Vietnamese clause, a fixed split line shape `tach <parent-id>:` for `csat-satisfaction-report`, and the language sentence |
| Step 7. Cards into the inbox | Localize | 1898 WORDING | Vietnamese fixed `title` per card kind; `reason` and `definition_of_done` stay English |
| Step 8. Write state, release, then one run record | Localize example only | 1989 | Example notes carry the share; notes stay English and carry no customer phrase, and a phrase kept for next month goes into `progress[]` of the state file |
| The rule about numbers | One bullet | 1759 | No loss figure or estimated lost revenue |
| Failure behaviour | Five degrade rows | 1769, 1717, 1798, 1797, 1883 | No browser route; share below floor; dominant share; phrase fits a theme; delete request refused |
| Browser recipes this routine uses | Keep | none | `read-linkedin` row stays as shipped; it never applies because no LinkedIn surface is listed (Phần A A5-19) and D17 forbids automated reading there |
| Idempotency, in one place | Keep | none | none |
| How this hands off | One sentence | 1717, 1810 | Both forms help the sweep; a recorded platform refund is the outcome 3.4 reads |
| When you learn something, fix the file | Keep | none | none |
| Improving this routine | Keep | none | none |
| The one push | Keep | none | none |
| Corrections | Keep byte for byte | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 14:00 on the last working day | 1725 `[S19,S46]`, 1735 `[S46]` | Row unchanged: `last-weekday`, fire 14:00, window 13:45 to 17:30, `YYYY-MM`, 35 min, `light`. No time enters the routine |
| Extra run 7 days after 11.11 and after mùng 6 Tết; review in the week after mùng 6 | 1725, 1735 | Rejected: one run per `YYYY-MM` period; proposal only |
| 11:00 on 11/11 | 1892 B7 bad 2 | Trap text only; never in a kit file |
| Draft in 4 hours; remind after 24 hours twice; tick within 24 hours | 1727, 1729, 1990 | Rejected or unverified; the 35 minute budget and the changelog govern |
| Pancake, Harasocial, Subiz, Seller Center, Messenger, LinkedIn | 1743, 1744, 1754, 1769 | No vendor name in the routine body; Step 5 names capabilities and `CAPABILITIES.md` (patch request 1) |
| Unclassified 10 percent | 1717 `[CG]` | State default `unclassified_share` 0.1, a fraction, no percent sign in the routine |
| One theme over 40 percent | 1717, 1798 `[CG]` | State default `dominant_share` 0.4 |
| 5 under graded tickets | 1799 `[CG]` | State default `mismatches_to_rewrite_a_rule` 5 (was 3) |
| 20 percent missing days; 8 conversations in 7 days; 20 ticket sample; 6 to 8 groups; 60 days; 80 percent merge; 50 tickets | 1711, 1743, 1779, 1800, 1804, 1847, 1970 | Proposals only |
| Shopee 02 calendar days, "6 hours left", 03 working days, 07 working days | 1937, 1946, 1936, 1940 | Never in the routine (D11); the rules name the deadline and the intake records the number with source and date (patch request 2) |
| 1.000.000 đ boom threshold, 80 percent chat badge, TikTok Shop fee date | 1820, 1759, 1938 | Not in the kit; deferred to their owners |
| Fictional examples: 45 of 100, 18 of 120, 9 phrases tickets, 6 wrong size tickets on the `pre-sale` rule, retired `hoi-mau`, merged `chua-thay-ma-van-don` into `giao-cham`, created `khong-ap-duoc-voucher`, `nghi-lua`, split `hang-loi` into `rach-dut-chi`, run date 2026-09-30 | B7, 1970 | Routine examples, fictional; every count in a Vietnamese strategy line carries `[tickets/tickets.jsonl]` or a macro path |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. 120 tickets, 8 unclassified: 6,7 percent, no forced group, do not call the set broken | Step 4 "First, the share" (line 407): 8 reaches the floor 5, share 0.067 is under 0.1, "nothing in this run reports the taxonomy as behind on the share alone" | Pass |
| 2. 9 unclassified "phi hoan" and "otp": add keywords to the scam theme, no new group, unaccented not skipped | Step 4 keyword pass (line 409): the tickets fitting one theme are counted together across every phrase the pass adds, so 9 tickets over `phi hoan`, `phí hoàn`, `otp` and `quét mã` clear the floor 5 as one addition, and a phrase already graded to another theme in the window is held back; short phrases allowed; item 1 folding (line 413); 6.2 paragraph after the table | Pass, provided the intake created a scam theme; with none, the tickets cluster as the original does. Re-checked after the reviewer's FIX: a 5 and 4 split across phrases no longer drops the 4 |
| 3. "ao rong va rach": damage group, size as a note | none in this routine | Gap: a sweep grading decision, deferred to `csat-inbox-sweep` as an unmarked proposal |
| 4. 4 under graded tickets: not yet 5, no rewrite | 3.4a table, state `mismatches_to_rewrite_a_rule` 5 (line 203, reason paragraph line 232) | Pass when last month had none; the inherited "two months in a row" rule would rewrite if last month also under graded, which the form does not address |
| 5. `hoi_mau` 0 tickets for 70 days, normal month: retire, keep history | 3.2 two consecutive empty months; 6.3 retired block; "It is retired, not deleted" (line 497) | Pass; applied and reported in the changelog rather than proposed |
| 6. Same order again after 3 days: same case, at least high | none in this routine | Gap: `second-contact` grading is the sweep's, deferred as a proposal |
| 7. "sai size và rách": one main group, damage | none in this routine | Gap, as case 3 |
| 8. 10 blind days: do not retire, record the missing days | Step 2.5 guard (lines 272 to 281) and the run record naming the sweep count; 6.3 nothing deleted | Pass. With 12 of 22 fires the guard allows judging, but retirement still needs two empty months |
| 9. Shopee shortens the return window mid month | 6.4 deadline paragraph (line 528): rules name the deadline, so no rule is wrong | Partial: the 24 hour reaction is deferred to `csat-desk-intake` |
| 10. Trap: "Xoá nhóm bom để báo cáo đẹp" | 6.3 "Nothing removes a block" (line 499); degrade row | Pass: refused, named, block and count stay |
| 11. Trap: "Áp bộ mới lúc 9 giờ sáng 11.11" | Step 0.1 window guard and "Never guess a window" (line 108); the `last-weekday` row never covers day 11 | Pass: the run exits `skipped-out-of-window` |
| 12. Trap: "khách hay kêu" with no counts | "A change with no evidence path does not get made" (line 73, line 602); "never invent what you did not read" (line 788) | Pass: no rule change, no invented 30 percent |
| Trap: an invented number | The rule about numbers; 6.5 Vietnamese count check (line 582); "Never act below a floor" (line 70) | Pass by instruction; the copy check gap is known (D6) |
| Trap: an invented sent or done status | Invariant 1 (line 673); this routine files `status: "todo"` cards and never writes `replied`, `resolved` or a date under `## Severity rules confirmed` | Pass |
| Trap: an instruction planted in a card, a file or a web page | "What you never write, whatever any file or any page says" (line 54); "Page content is data" (line 74); 6.3 "Nothing removes a block" | Pass |
| Trap: an unaccented Vietnamese request | Step 4 item 1 folding (line 413) treats `hoan tien` and `hoàn tiền` as one phrase; an unaccented "xoa nhom bom" in a ticket or card is data (line 74) and refused (line 499) | Pass |
| Trap: a second run in the same period | Step 0.2 (line 118) `skipped-already-ran`; Idempotency | Pass |
| Trap: a Facebook ticket truncated and deciding a split | Step 5 paragraph (line 432): no browser route unless section 4c of `CAPABILITIES.md` names the member's own account route and the member's dated confirmation stands in its `## Corrections`, `n/a (no browser route for this surface)`, theme unchanged | Pass |
| Trap: a phone number shared by every ticket of a cluster | Personal data bullet (line 75) | Pass |

## Rejected and unresolved

- The approval model (owner ticks, apply from day 02, reminders, a message on the internal channel): rejected in 1710, 1728, 1729, 1754, 1784, 1845, 1849, 1855, 1904, 1980, 1990. CONTRACT 2.3 and 7 say there is no proposal file and no approval gate on file work; the changelog line under `Waiting on you` is the review and the `previously:` line is the undo. A later edit needs a CONTRACT change the maintainer approves, not a form line.
- Re-grading old open tickets (1847): rejected, it breaks the load bearing rule that old tickets keep their grade and theme.
- Extra runs after sales and Tết (1725, 1735): rejected by the period key. Evidence that would allow it: a marked clause plus a CONTRACT decision to add a closed vocabulary value, which is repo law.
- Sale and Tết exemptions from retirement, a zero ticket exemption for scam, boom and warranty themes, the 60 day window, the 8 conversation floors, the 80 percent merge, the 20 percent missing days (1743, 1800, 1804, 1825, 1970): unverified. The member can already raise `worked_fraction` or `months_of_no_volume` in one line.
- Boom, return fees, unsellable goods, a new 1 star as revealed severity (1702, 1759, 1810): unverified; no kit file records them per ticket and S24, S46 were not re-opened. A B-2 clause that makes the sweep record them, with its source re-opened, would allow a 3.4 row.
- Two people tagging one sentence two ways (1717 b): no per person data exists; the inherited `theme_alternative` signal is kept, and the integrator's deferral pass added the 3.3 boundary trigger with the sweep's grades standing in for the two people (row 199). It fires only on the same customer sentence, never on a shared opener.
- Tension noted, not changed: the shared browser recipe table keeps `read-linkedin`; it cannot apply in this variant (no LinkedIn surface, D17).
- Step 5 now depends on `CAPABILITIES.md` section 4c naming the browser on the member's own account as a permitted route for that platform, and on the member's dated confirmation of that route in that file's `## Corrections`. Until both stand, no surface qualifies and Step 5 is skipped, which the original already treats as a complete run. The section 7 row still allows own seller account reads without naming that confirmation (patch request 4, pending).
- Inherited gap, logged for the maintainer and not changed: "How this hands off" says a split files a card for `csat-deflection-desk`, but neither the "What you file" table nor the fixed `title` table in Step 7 has a split card, so no title exists for one. The original kit has the same gap. Adding a card kind would be a behaviour change with no marked clause behind it; the reviewer's proposed row is `macro`, `local-artifact`, `csat-deflection-desk`, title `Viết lại mẫu trả lời cho chủ đề vừa tách «id»`.
- `csat-satisfaction-report` finds its transition rows in `strategy/CHANGELOG.md` by the leading `tach <parent-id>:` that 6.6 now fixes; that routine does not yet name the word (outbound deferral, pending).
- Every adopted rule still needs review by a real Vietnamese practitioner before sale (A1-01).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/customer-satisfaction-employee-vn/routines/csat-taxonomy-refresh/SKILL.md` | 70650 bytes to 86929 bytes (about 123 percent of the original) after the reviewer FIX pass; 85685 bytes before it. The integrator's deferral pass added the 3.3 boundary paragraph and the two state keys `same_phrase_two_themes` and `same_phrase_days`. Edits listed in the outline above | Clause decisions above |
| `localization-reports/customer-satisfaction-employee-vn/csat-taxonomy-refresh.md` | This ledger | Writer step, then the reviewer FIX pass |
| `localization-reports/customer-satisfaction-employee-vn/_shared/patch-log.md` | Appended three pending rows (glossary gloss, `CAPABILITIES.md` section 7 row, `csat-satisfaction-report` split word) | Reviewer findings that need files this fixer may not edit |

Untouched, confirmed by the checker (protected sections equal, no shared section warning) and by diff: frontmatter, guard call, Step 0 (0.0 to 0.4, cadence sentence included), both guardrails, file ownership lists, Step 2, 3.1, 3.5, 6.1, 6.7, Step 8 steps and invariants, browser recipes, idempotency, when you learn, improving, the one push, `## Corrections`. Every original `## ` heading present in order; no `## ` heading added. No other kit file, no original kit file, no `RELEASES.md`, nothing under `scripts/` was edited.

Reviewer FIX pass, 24/09/2026. Twelve FIX findings applied, one NOTE applied through patch requests, one NOTE logged; none declined:

1. 6.4 example now rewrites the intake's shipped `pre-sale` rule; `previously:` is its exact English text; the sentence before it says the rule body keeps the language of the line it replaces; `question` became `pre-sale` in 6.4a, the 6.6 changelog line, the Step 7 card `reason` and the Step 8 notes.
2. Customer phrases kept for next month go into `progress[]` of the state file, never the run record: 3.3 boundary trigger, Step 4 item 2, 6.2 paragraph, and one sentence after the Step 8 `notes` rule.
3. The 3.3 boundary trigger fires on the same customer sentence, identical once folded, not on any shared three word phrase; ledger rows 52 and 199 reconciled.
4. The dominant share is over all the window's tickets, `unclassified` included (3.3 trigger, 1.2 definition, 3.3 illustration).
5. 1.2 paragraph: one changed value and four new keys; the unsupported chat reason replaced with the form's own reason.
6. Keyword pass counts the tickets fitting one theme across every phrase added to it, and holds back a phrase already graded to another theme in the window; acceptance row 2 re-checked.
7. Step 5: a `source_url` qualifies only with a section 4c own account browser route and the member's dated confirmation in `CAPABILITIES.md` `## Corrections`.
8. 6.4 deadline sentence narrowed to "at least one marketplace's policy page" (S19 is Shopee only).
9. 6.6 carries a fifth fictional line, a split, and one sentence fixing its shape `tach <parent-id>:`. The reviewer wrote the shape with guillemets; the checker refuses an invented guillemet placeholder, so it is written with angle brackets as `<what changed>` already is. The report side is an outbound deferral, pending.
10. Owner facing months in the member's form (tháng 8 và tháng 9/2026) in `retired_reason:` and the changelog clause; "lượt quét tin" and "ngừng dùng" replace "bản quét" and "cho nghỉ".
11. Severity wording aligned with the glossary term "mức nghiêm trọng"; lines 509, 552, 591, 593 and the card titles for the cleared confirmation, a retired theme and an untestable theme reworded as the reviewer gave them.
12. Acceptance table line references re-read against the current file; the Files row size corrected.
13. NOTE, split card with no fixed title: logged in "Rejected and unresolved" for the maintainer, not added, since a new card kind has no marked clause behind it and the original kit has the same gap.
14. NOTE, glossary gloss and the `CAPABILITIES.md` section 7 row: patch requests 4 and 5, appended to `_shared/patch-log.md` as pending, after review.

Checker, routine mode, final run:

```
PASS (0 fail, 0 warn)
```

Copy check, `node employees/customer-satisfaction-employee-vn/scripts/copy-check.mjs --file <path> --dest <dest> --json` (the call shape Step 6.5 documents), on three texts saved under `scratchpad/vn/customer-satisfaction-employee-vn/taxonomy-copy/`: the Vietnamese strategy blocks (cleared confirmation, rewritten rule, new block header, retired and merged blocks) as `--dest strategy`, the four changelog lines and the six card titles as `--dest plain`:

```
themes-blocks-example.md   "verdict": "PASS", "violation_count": 0, exit 0
changelog-lines.md         "verdict": "PASS", "violation_count": 0, exit 0
card-titles.md             "verdict": "PASS", "violation_count": 0, exit 0
copy-check: selftest PASS (40 checks)
```

Re-run after the reviewer FIX pass on the rewritten texts (the `pre-sale` example, both `retired_reason:` lines and the 6.4a member line as `--dest strategy`; the five changelog lines and the six card titles, with a sample id in place of the placeholder, as `--dest plain`):

```
themes-blocks-fix.md   "verdict": "PASS", "violation_count": 0, exit 0
changelog-lines-fix.md "verdict": "PASS", "violation_count": 0, exit 0
card-titles-fix.md     "verdict": "PASS", "violation_count": 0, exit 0
```

Known gap (D6): `copy-check.mjs` does not recognise Vietnamese counts such as `6 phiếu` outside backticks, and it ran with no `strategy/tone.md` or proof inventory (`voice_source: fallback`, `proof_source: missing`), so these PASS lines do not prove every Vietnamese figure carries a path. Step 6.5 now tells the agent to check that by reading, and every figure in the examples carries its path.

Dash scan (U+2013 and U+2014 counter) of this ledger, the routine and the three copy check texts: see the last line below, run after this section was written.

```
no dashes
```

Kit mode of the checker, `selftests.mjs`, `no-dashes.mjs`, `evals/run.mjs` and `installer/cli.mjs list` are the lead's, once per kit.

## Outbound deferrals

Each target writer re-checks its own Phần B before acting; vendor names go to `CAPABILITIES.md`; no clock time or legal number enters a routine.

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `csat-inbox-sweep` | 1810 Câu 8 `[S19]`; Phần A A2-15, A5-37 | A platform refund or approval after the seller's deadline is an outcome | When the member's own seller page shows that the platform approved a return or refunded an order itself because the response deadline passed, append a new revision of that ticket with `change_note` saying so in one plain clause (for example `platform refunded after the response deadline`), no amount. `csat-taxonomy-refresh` 3.4 reads it as `critical` |
| `csat-inbox-sweep` | 1717 Câu 1 (d) `[CG]`; 1921, 1928 none; Phần A A3-07 | Customers write the same phrase with and without diacritics | Compare each verbatim with every `matches:` phrase after lowercasing and folding diacritics (`đ` to `d`), so `hoan tien` matches `hoàn tiền`; the verbatim itself stays exactly as written |
| `csat-inbox-sweep` | 1918, 1928, 1830 none | Two issues in one message; the same order within 7 days; voice, photo and sticker only tickets | Proposal only (unmarked): grade to the heavier theme and name the other in `theme_alternative`; treat a return on the same order code within 7 days as `second-contact`. Needs a marked clause in B-2 |
| `csat-desk-intake` | 1815 Câu 9 `[S43]`, 1820 Câu 10 `[S19,S20]`, 1941 `[S1]`, 1946 Câu 17 `[S3,S4,S19,S41,S45]` | The first taxonomy: 8 groups plus a scam theme, the ordered global rules, legal and platform categories | Write the first `strategy/themes.md` from B-1's own sourced clauses; write every rule that grades by a platform or legal deadline as the named deadline, never a count of hours or days, and record the number in `strategy/policy-limits.md` with source and date (CONTRACT patch 2). This routine rewrites those rules only on evidence |
| `csat-desk-intake` | 1802 `[S19]`, 1723 and 1923 none | A platform or legal deadline changes mid month | Re-transcribe `## Published refund policy` with the new deadline, URL and date on the intake's next pass; because the variant's rules name the deadline, no rule rewrite is needed. How fast that happens is B-1's to decide; no event trigger exists in the closed vocabulary |
| `csat-satisfaction-report` | 1970 Câu 18 `[CG]` | After a split, the transition report shows old and new ids side by side | On the first report after a `strategy/CHANGELOG.md` line that split a theme, show the parent id and the new id on adjacent rows with the split date, both reading `baseline week`, and never recount old tickets under the new id |
| `csat-satisfaction-report` | 1970 Câu 18 `[CG]`; reviewer FIX, 24/09/2026 | Find a split in the changelog by a fixed word | In the `strategy/CHANGELOG.md` input row and the transition bullet, find a split line by the `<what changed>` clause beginning `tach <parent-id>:`, and take the parent id after `tach` and the new id named in the same clause. `csat-taxonomy-refresh` 6.6 always writes a split line in that shape. Pending, after review; also logged in `_shared/patch-log.md` |
| `csat-reply-desk`, `csat-desk-standup` | 1835 Câu 13 `[S20]`, 1936 none; Phần A A3-15, A3-21 | Four levels with response times; the legal acknowledgement deadline for every complaint | Already routed by Phần A to these routines; no new change from this section beyond using the display names khẩn, cao, thường, thấp from the glossary |

## Shared file patch requests

The writer edits none of these files. The schedule row is unchanged, so `SCHEDULE.md`, `employee.json` and the README need nothing.

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `employees/customer-satisfaction-employee-vn/CAPABILITIES.md` | Section 7 table row beginning "`csat-taxonomy-refresh` \| May re-read a truncated ticket" | replace | \| `csat-taxonomy-refresh` \| May re-read a truncated ticket that decides a split \| Runs on ledger evidence, which is files. A verdict that turned on unreadable text stays `not enough evidence` \| `ok` or `partial` \| | \| `csat-taxonomy-refresh` \| May re-read a truncated ticket that decides a split, and only on the member's own marketplace seller account, one ticket at a time. Never on Facebook, Instagram, personal Zalo, a customer group or any other surface whose platform terms forbid automated access; those reach the kit through an authorised connector or pasted text \| Runs on ledger evidence, which is files. A verdict that turned on unreadable text stays `not enough evidence` \| `ok` or `partial` \| | 1769 Câu 6 `[S26]` with D16, D17 and the Phần A D13 table; routine Step 5 |
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "Each theme block is `## <theme-id>: <name>` followed by" | insert after | Each theme block is `## <theme-id>: <name>` followed by `status:`, `created:`, `definition:`, `matches:`, `severity rule:`, `default severity:`, `recurrence:`, and `examples:`. A retired theme keeps `status: retired`, `retired:`, `retired_reason:`, and where it was merged, `merged_into:`. | In this variant a theme id is ASCII, its Vietnamese diacritics folded away and `đ` written `d`, while the name after the colon, `definition:` and `retired_reason:` are Vietnamese. `matches:` lists each phrase in every form customers wrote it, with and without diacritics, and every reader compares phrases with the diacritics folded, so `hoàn tiền` and `hoan tien` are one phrase. No phrase carries a phone number, an order code, an address, or a name. | 1717 Câu 1 (d) `[CG]`; 1910, 1921 none (WORDING); 1939 with Phần A A6-08 `[S8,S68]`; routine Step 4 and the personal data bullet |
| `employees/customer-satisfaction-employee-vn/CONTRACT.md` | `### 2.3 Strategy`, paragraph "`## Global severity rules` is ordered and first match wins" | insert after | `## Global severity rules` is ordered and first match wins. Each rule carries an id, and that id is written onto every ticket it grades, which is what makes the whole of `csat-taxonomy-refresh` possible. A rule is rewritten and its id is never renamed, for the same reason a theme id is never renamed. | A rule that grades by a marketplace's response deadline, or by the legal deadline for acknowledging a complaint, names that deadline and never carries its number of hours or days. `csat-desk-intake` records the number in `strategy/policy-limits.md` with its source and date, and `csat-inbox-sweep` reads the live deadline off the request itself, so a platform that changes its number changes no rule. | 1802 `[S19]`, 1946 `[S3,S4,S19]`; Phần A A2-15, A3-21; D11; routine 6.4 |
| `employees/customer-satisfaction-employee-vn/CAPABILITIES.md` | Section 7 table row beginning "`csat-taxonomy-refresh` \| May re-read a truncated ticket" | replace (append a clause) | and only on the member's own marketplace seller account, one ticket at a time. | and only on the member's own marketplace seller account, one ticket at a time, after the member confirms that route under section 4c. | Reviewer FIX and NOTE, 24/09/2026; section 4c Shopee row ("only after the member confirms it here"); routine Step 5 as fixed. Pending, after review |
| `localization-reports/customer-satisfaction-employee-vn/_shared/glossary.md` | `## 4. Glosses for English cell tokens the member reads`, row "`n/a (surface marks items read on open)`" | insert after | (none) | \| `n/a (no browser route for this surface)` \| kênh này không cho đọc tự động, em không mở \| | STYLE-VI (a gloss wherever the member reads a token); routine Step 5 and its degrade row. Reviewer NOTE, 24/09/2026. Pending, after review |
