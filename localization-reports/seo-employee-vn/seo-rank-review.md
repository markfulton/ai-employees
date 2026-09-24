# seo-rank-review: provenance ledger

Status on 2026-09-24: **ledger complete, Gate 2 sources re-opened, routine edited in the variant only, independent review FIX findings applied, routine checker PASS with no warning.** Shared file changes are requested below and not applied by this writer.

## Identity

- Form path and Phần B heading: `Khung-tri-thuc-ban-dia/03_SEO-AEO/phieu-da-dien.md`, `## B-6. seo-rank-review`, form lines 1684 to 1952. Phần A decisions are taken from `_shared/phan-a-ledger.md` and cited by their form line (A2 74, A3 106, A4 121b, 129b, A5 141, 173, 178a, A6 236, 243, 246, 88a, and the platform terms table), never re-decided here.
- Extract: `extract_form_section.py --routine seo-rank-review`, saved to `scratchpad/vn/seo-employee-vn/seo-rank-review-extract.md` and `.json`. 132 rows and numbered answers: 15 with `[S#]`, 4 with `[CG]`, 1 with both, 114 unmarked. B0 box ticked "Làm khác".
- Form author (A1): an AI sub agent playing the SEO/AEO role, research draft dated 23/09/2026. **No clause here has been confirmed by a person practising SEO in Vietnam.** `[CG]` marks are the business owner's review decisions. The form's own attachment table (line 2431) says the `[CG]` operating thresholds this routine adopts (28 days, 60 days, 100 impressions, 2 refreshes a week) still need a real practitioner to confirm before sale.
- Original kit and routine: `employees/seo-employee` 1.9.0, `routines/seo-rank-review/SKILL.md` (795 lines, 77,902 bytes).
- Variant kit and routine: `employees/seo-employee-vn`, same routine id, now 98,951 bytes and 873 lines after the review fixes (127 percent of the original).
- Source index: `03_SEO-AEO/literature/nguon.md`, viewing date 23/09/2026 for every row.
- Kit version before and after: 1.9.0 in the scaffold. The single D14 bump is the lead's, once for the kit; this writer did not touch `VERSION`, `CHANGELOG.md` or `employee.json`.
- Gate 1: reused wording only, from the kit glossary (band glosses, "làm mới bài", "trang số tuần") and Snagon `ub-ops-2/weekly-report` vocabulary already recorded in `_shared/glossary.md`. No rule taken from any skill.

## Sources re-opened

Every other `[S#]` behind an ADOPT row here was already re-opened and confirmed in the Phần A ledger on 24/09/2026 (S9, S11, S12, S19, S20, S31, S68, and the LinkedIn, Meta, TikTok, YouTube and Google terms). Two needed Gate 2 here.

| S# | URL | Date checked | Clause it must support | Verdict |
|---|---|---|---|---|
| S33 | https://developers.google.com/search/blog/2024/12/recent-data-search-console?hl=vi | 24/09/2026 | 24 hour view exists; data points shown before collection is complete, drawn as a dotted line; average latency reduced | **Confirmed**, post dated Thứ Năm 12/12/2024: "hiện các điểm dữ liệu ngay khi chúng tôi có dữ liệu ... kể cả khi chúng tôi chưa thu thập xong ... bằng một đường kẻ chấm"; "đã giảm gần một nửa độ trễ dữ liệu trung bình". WebFetch returned navigation only, so the page was read with curl and the article body extracted. **The page gives no number of days to exclude**, so it does not support "bỏ 2 ngày" |
| S27 | https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=vi | 24/09/2026 | Crawling can take a few days to a few weeks | **Confirmed**: "Quy trình thu thập dữ liệu có thể mất từ vài ngày đến vài tuần." Page updated 31/12/2025. It supports the reason, not the number 28, which rests on `[CG]` |

## Clause decisions

Form line numbers are phieu-da-dien.md lines. One row is one clause; a split row carries a letter.

| Form line and clause | Marker and support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 1692 B0 box: done differently in Vietnam | none | KEEP | routine purpose | The differences are classified clause by clause below |
| 1694a B0: Friday read of search console and analytics, classify, keep, refresh or stop writing | `[S33]`, which does not cover cadence | KEEP | Step 0 row, Steps 6 to 9 | Same as the original; row unchanged (A2 74 KEEP) |
| 1694b B0: fresh data may still be incomplete, drawn dotted | `[S33]` confirmed | ADOPT | Step 2a, line 256; refusal line 717 | Never read the most recent data view for a figure |
| 1694c B0: drop 2 days, not a fixed 3 | `[S33]` gives no day count | KEEP | Step 2a line 254 (`data_lag_days` 3) | Today minus 3 already excludes today and the two days before it, which is what B11 case 1 expects (25/09 gives an end of 22/09). No change needed, none supported |
| 1694d B0: 100 impressions before winning | `[S33]` does not cover it; `[CG]` at 1780 does | ADOPT | Step 9a lines 434, 440 | Taken on 1780 `[CG]`, not on S33 |
| 1694e B0: never save a filter that changes the owner's view | `[S33]` does not cover it | KEEP | Guardrail 1 save test, Step 5a | Inherited |
| 1700 B1: weekly table, one label per URL, clear window, at most 2 refreshes | none | WORDING and KEEP | `## Báo cáo tuần` block, line 494 | Presentation; the refresh cap is inherited through `seo-standup` `refresh_share` |
| 1702a B1: reviewer receives 15 to 25 lines on the chat channel on Friday | none; A3 106b `[CG]` deferred here by Phần A | ADOPT | Step 10 lines 494, 541 to 552 | Owner approved report shape. Drafted into the scoreboard; a person sends it (D10) |
| 1702b B1: writer receives at most 2 refresh cards | none | KEEP | `seo-standup` refresh cap | Inherited, `refresh_share: 2` |
| 1703 B1: every figure matches the export; no article under 28 days called a failure; at most 2 refreshes | none | KEEP | rule about numbers; Step 2d; standup cap | Inherited, and 2d now enforces 28 through 1785 `[CG]` |
| 1704 B1: bad outcome list (no dates, 5 day article failed, claimed cause, accented and unaccented split into two articles) | none | KEEP | acceptance traps | Each maps to an existing or adopted line below |
| 1709a B2: trigger Friday 16:00 | none | KEEP | `SCHEDULE.md` row unchanged | Row is `fri` 16:00; an unmarked B2 time never moves a row |
| 1709b B2: or when the owner asks "tuần này SEO thế nào" | none | UNVERIFIED | report | The routine is scheduled; an on demand run is the member launching it, which CONTRACT already allows |
| 1711 B2: holiday shifts to the previous working day | none | UNVERIFIED | report | Unmarked schedule change |
| 1712 B2: five request phrasings | none | EXAMPLE | acceptance only | "Xuất hết query" is a trap here, not a feature |
| 1713 B2: 70 minute deadline, sent before 17:30 | none | UNVERIFIED | report | Budget stays 40 min; the 16:00 fire plus 40 min lands before the owner's 17:30 anyway |
| 1714a B2: ends when the table is saved and the message drafted, AI never sends | none | KEEP | Guardrail 1, line 551 | Inherited hold |
| 1714b B2: the sender is recorded | none | UNVERIFIED | report | The routine cannot see who sent; recording it would invent a sent status |
| 1715 B2: no reminder to read; one reminder after 2 working days to pick refreshes | none | UNVERIFIED | report | Unmarked reminder |
| 1716a B2: no console access, no estimate | none | KEEP | `login-wall`, `n/a` | Inherited |
| 1716b B2: site incident first, no winners and losers | none | UNVERIFIED | report | No source; no incident read in this routine |
| 1721a Câu 1: score once on Friday | `[S33]` | KEEP | row | Same |
| 1721b Câu 1: period is 28 consecutive days | `[S33]` does not cover it | UNVERIFIED | report | The continuous scoring window stays; the owner's per 28 day floors are counted over the floor span (1780) |
| 1721c Câu 1: drop the latest 2 days | `[S33]` gives no number | KEEP | line 254 | See 1694c |
| 1721d Câu 1: 24 hour view, dotted incomplete points, latency nearly halved, never kill an article on a dotted point, the 24 hour view only to see whether a new article shows | `[S33]` confirmed | ADOPT | line 256, line 717 | Re-opened 24/09/2026. On review, the "only to see whether a new article shows" part is not adopted: S33 lists recent pages and queries, newly published content, and the last 24 hours' queries, so line 256 states the purpose as S33 does (recent performance, such as a newly published article) and the report never mentions the view |
| 1729a B3: impressions, clicks, position from the search console, Web type | `[S12]` confirmed in Phần A | ADOPT | Step 6 line 384 | Web totals include AI feature clicks (Phần A 129b) |
| 1729b B3: country Vietnam filter | `[S12]` does not cover it | UNVERIFIED | report | New filter, unsupported. The property `country` field exists; a later sourced change could use it |
| 1729c B3: no permission, stop, invent nothing | `[S12]` | KEEP | `login-wall`, rule about numbers | Inherited |
| 1730a B3: no conversion events, write "chưa đo đơn", never infer orders from clicks | none here; Phần A 173 `[S31+CG]` ADOPT for this routine | ADOPT | Step 7 line 394; line 547; refusal 714 | Owner approved |
| 1730b B3 and Phần A 173: read conversions as analytics events (form, call, chat click) | Phần A 173 `[S31+CG]` | REJECT | report | Step 7 bars reading conversions because Guardrail 1 covers that surface; D18 says `[CG]` may narrow, never widen. The report line says orders are not measured |
| 1731 B3: article list from the ledger; an unknown URL is "ngoài lịch" | none | KEEP | Step 3 | A URL not in the ledger is not measured (inherited); the label is not adopted |
| 1732a B3: ranking pages come from a person viewing by hand and pasting; AI never queries the engine | `[S11]` confirmed in Phần A; Phần A 141 ADOPT; Google terms verdict | ADOPT | Step 12 line 618; Step 6 line 382 | Automated rank checking is machine generated traffic |
| 1732b B3: at most 5 falling keywords | `[S11]` does not give a number | UNVERIFIED | report | The routine asks only for the keywords behind its own refresh cards |
| 1734 B3: no figure from a chart screenshot; a CSV export is used with its name and period | none | UNVERIFIED | report | The original reads screens or a connected route; an export route needs a capability row |
| 1740a Câu 2: order of sources, analytics sessions and events, owner's lead book | `[S12]` supports only the AI clause | UNVERIFIED | report | Events part rejected at 1730b |
| 1740b Câu 2: no paid rank tool as the main number | Phần A 178a `[S11]` ADOPT | ADOPT | line 382 | Positions only from the member's own console |
| 1740c Câu 2: no "orders from AI Overviews" figure, counted in Web | `[S12]` confirmed | ADOPT | line 384, refusal 715 | |
| 1745a Câu 3: a person looks by hand, no bulk queries, notes the date | `[S11]` | ADOPT | line 618 | The saved page carries its date |
| 1745b Câu 3: location Vietnam, Vietnamese, phone and desktop, 5 organic URLs, no ads | `[S11]` does not cover it | UNVERIFIED | report; proposal for the `web.search` patch text | Observation protocol without a source |
| 1753 B4 step 1: 28 day period, drop 2 days | none | UNVERIFIED and KEEP | see 1721b, 1694c | |
| 1754 B4 step 2: export pages and queries; do not mix http and https | none | UNVERIFIED | report | The routine reads no query detail; http and https normalisation is a proposal |
| 1755 B4 step 3: map every URL to a cluster, unknown URLs apart | none | KEEP | Step 3 `unmapped` | Inherited |
| 1756 B4 step 4: label by B5, under 28 days not enough data | none | KEEP | Step 9a via 1766 | |
| 1757 B4 step 5: at most 2 refreshes, never a winning article | none | KEEP | Step 12 table, standup cap | Refresh cards are for striking distance only |
| 1758 B4 step 6: 15 to 25 Vietnamese lines, every number with its period | none; A3 106 `[CG]` | ADOPT | lines 543, 545 | |
| 1759a B4 step 7: a person sends before 17:30 | none | KEEP | line 541, D10 | Never sent by the routine |
| 1759b B4 step 7: no raw export attached | none; Phần A 88a `[S9]` ADOPT | ADOPT | line 549, refusal 718 | |
| 1766 B5: article under 28 days is "chưa đủ dữ liệu", no refresh, no stop | `[S27,S33]`; S27 supports the reason; the number rests on 1785 `[CG]` | ADOPT | Step 2d line 280; band table line 433 | `judgement_window` default 28 in this kit |
| 1767 B5: winning at position 5 or better, 1 click, 100 impressions per 28 days | none; 1780 `[CG]` | ADOPT | lines 434, 440; Step 2d floor span line 284; Step 6 line 380 | See 1780a |
| 1768 B5: striking distance above 5 to 20 with 50 impressions | none | KEEP | band table | Original thresholds, over the scoring window |
| 1769 B5: past 28 days, neither label, cluster not stoppable: watch, no refresh, look again next week | `[CG]` | ADOPT | new band `watching`, lines 437, 442, 463 | Fills the gap the original leaves for a position beyond 20 with real impressions |
| 1770 B5: CTR only from 100 impressions | none | KEEP | `rate_floor` line 450 | Same number |
| 1771 B5: cluster meeting the stop rule, stop writing | none | KEEP | Step 12 card to `seo-intake-and-map` | Rule itself from 1780d |
| 1772 B5: at most 2 refreshes a week, the third waits | none | KEEP | `seo-standup` `refresh_share` | Inherited |
| 1774a B5: a banned sentence or wrong price is fixed even on a winning article | none | UNVERIFIED | report | Not this routine's work |
| 1774b B5: "under 28 days" beats "the owner wants it gone" | none; 1785 `[CG]` | ADOPT | line 280 | |
| 1780a Câu 4: winning adds 100 impressions per 28 days | `[CG]` | ADOPT | lines 434, 440, new key `win_impression_floor` | Counted over one judgement window ending at `window_end` so the owner's per 28 day wording holds on a weekly run |
| 1780b Câu 4: striking distance unchanged | `[CG]` | KEEP | band table | |
| 1780c Câu 4: never invisible before 28 days | `[CG]` | ADOPT | Step 2d | Through the judgement window |
| 1780d Câu 4: after 60 days, whole cluster under 100 impressions and 0 clicks, stop writing | `[CG]` | ADOPT | Step 9d lines 474, 476; new keys `pause_age_days`, `pause_impression_floor` | Counted over the floor span |
| 1780e Câu 4: CTR only from 100 | `[CG]` | KEEP | `rate_floor` | |
| 1785a Câu 5: crawling can take days to weeks | `[S27]` re-opened 24/09/2026 | ADOPT | reason sentence line 280 | Reason only |
| 1785b Câu 5: no verdict before 28 days | `[CG]` | ADOPT | line 280 | |
| 1785c Câu 5: never call a position stable before 60 days on a site under 6 months | `[CG]` | KEEP | none | The routine never states stability; no property age field exists to apply it |
| 1790a Câu 6: accented and unaccented variants landing on one URL are one | `[S20]` confirmed in Phần A | KEEP and ADOPT | Step 6 page level read; line 634 | Page level figures already merge them |
| 1790b Câu 6: split only when page 1 differs on over 5 of 10 URLs | `[S20]` does not cover it | UNVERIFIED | report | |
| 1790c Câu 6: view Vietnam, Vietnamese, phone for local | `[S20]` does not cover it | UNVERIFIED | report | |
| 1790d Câu 6: no new article because an unaccented variant fell | `[S20]` | ADOPT | line 634 | Intake decides on its own query data |
| 1795a Câu 7: gap criteria: intent, price and date, place names, FAQ, update date, internal link count | `[CG]` | ADOPT | Step 12 item 2, line 619 | Price named by presence only, never copied |
| 1795b Câu 7: the "giá" table illustration | `[CG]`, marked illustrative | EXAMPLE | none | Not a measured case |
| 1795c Câu 7: never invent "back in the top 3 after 14 days" | `[CG]` | KEEP | rule about numbers | No forecast |
| 1795d Câu 7: result after a fix only once the next 28 days are in the console | `[CG]`, scoped "trong phiếu" | KEEP | 9c movement read from measured windows | Inherited |
| 1800a Câu 8: stop after 3 indexed articles | `[S19]` does not cover it | UNVERIFIED | report | 60, 100 and 0 are adopted through 1780d |
| 1800b Câu 8: keep seasonal clusters, clusters awaiting ad papers, single article clusters | `[S19]` does not cover it | UNVERIFIED | report; intake already never retires a one article cluster | |
| 1800c Câu 8: keep a commune cluster renamed from 01/07/2025 | `[S19]` supports the renaming, not the exemption | UNVERIFIED | report | |
| 1800d Câu 8: place name check on a local cluster before it is retired | Phần A 82 `[S18]` ADOPT, S19 confirmed | ADOPT | line 476, Step 12 table | A card note, not an exemption |
| 1800e Câu 8: never delete a URL | `[S19]` does not cover it | KEEP | line 476, line 635 | Inherited, the routine deletes nothing |
| 1805 Câu 9: Vietnamese labels, English once in brackets, never "chết" or "phạt" without a notice | none | WORDING | line 546 rule 4, line 476 | Glossary glosses win over the form's labels; token first per parsed-strings |
| 1813 B6: read and draft alone, never change a saved filter | none | KEEP | guardrails | |
| 1814 B6: send the report, AI drafts, a person approves | none | KEEP | line 541 | |
| 1815 B6: pick an article to delete, always a person | none | KEEP | line 635 | |
| 1816 B6: share analytics access, never | none | KEEP | line 53 (never a user or permission) | |
| 1817 B6: conclude a penalty, always a person | none | KEEP | refusal 716 | ROLE "never assert an event that did not happen" |
| 1818 B6: assign 2 refresh cards, AI drafts, a person approves | none | KEEP | Step 12 | Approval gate unmarked; original files cards to the inbox |
| 1820 B6: handover contents | none | KEEP | scoreboard, `notes` | |
| 1827 to 1830 B7 good 1 | none | EXAMPLE | `## Báo cáo tuần` example | Fictional slugs, figures and dates |
| 1834 to 1837 B7 good 2 | none | EXAMPLE | pause line in the example | |
| 1841 to 1844 B7 good 3 | none | EXAMPLE | none | Covered by 2d |
| 1848 to 1850 B7 bad 1 | none | EXAMPLE | acceptance trap | |
| 1851 B7: buying links is wrong | `[S11]`; Phần A 236 ADOPT | ADOPT | line 633 | |
| 1855 to 1858 B7 bad 2: orders invented from clicks | none | EXAMPLE | acceptance trap | Rule adopted at 1730a |
| 1863a Câu 10: 15 to 25 lines | none; A3 106 `[CG]` | ADOPT | line 543 | |
| 1863b Câu 10: metric list (period against the previous 28 days, 3 URLs up and down, posts, not indexed after 21 days) | none; A5.9 213a deferred as a B-6 proposal | UNVERIFIED | report | The block carries only what the scoreboard already carries |
| 1863c Câu 10: dd/mm/yyyy, Vietnamese terms, closing "Việc cần anh/chị" or "Không cần việc gì tuần này", no "chiến lược tổng thể" line | none | WORDING | lines 544, 550 | |
| 1868a Câu 11: called "làm mới" | none | WORDING | line 638 card title | |
| 1868b Câu 11: brief items and a 5 working day deadline | none | UNVERIFIED | report | |
| 1874 B8: em and anh/chị | none | WORDING | line 544 | |
| 1876 B8: 15 to 25 lines | none | WORDING | line 543 | Length itself is `[CG]` A3 106 |
| 1877 B8: no emoji; tool abbreviation after the full name | none | WORDING | block | Tool names stay out of the routine body; the patch names the channel |
| 1878 B8: number and date format | none | WORDING | line 544 | |
| 1879 B8: banned phrases | none | WORDING | line 548 | |
| 1880 B8: opening and refusal sentences | none | WORDING | lines 494, 548 | |
| 1881a B8: chat is the short version | none | WORDING | line 541 | |
| 1881b B8: full URLs on a shared sheet | none | UNVERIFIED | report | The scoreboard file stays the full copy |
| 1888 B9: search clicks up, analytics organic down over 40 percent | none | KEEP and UNVERIFIED | Step 7 line 401 (both figures on one line, sources and filters named, no cause); Step 7 filter and match rate rules; refusal 716 | Line 401 added on review so B11 case 7 has a routine line; it adds no threshold. The hand off to a person and the 40 percent threshold stay unsupported (unmarked) |
| 1889 B9: 24 hour data very low, never "sập" | `[S33]` | ADOPT | line 256 | |
| 1890 B9: console access lost on Friday | none | KEEP | `login-wall`, `n/a`, never carried forward | |
| 1891 B9: a query carrying a customer's phone number | `[S9]` confirmed in Phần A; Phần A 243 ADOPT | ADOPT | line 549, refusal 718 | Qualitative, no law number (D11) |
| 1892 B9: penalty or security notice, stop scoring, hand to a person | none | UNVERIFIED | report | The routine reads no notice screen |
| 1899 B10: AI clicks in Web; generative AI report shows impressions from 31/08/2026 | none on the row; S12, S68 at 1908 | ADOPT | line 384 | Report not read here; date kept out of the body |
| 1900 B10: dotted 24 hour points | none; S33 | ADOPT | line 256 | |
| 1901 B10: automated rank queries banned, look by hand | none; S11 | ADOPT | lines 382, 618 | |
| 1902 B10: personal data law 91/2025/QH15 from 01/01/2026 | none; S9 | ADOPT | line 549 | Qualitative; instrument number kept out (D11) |
| 1903 B10: a viewer is not an owner; no full download into a chat | none; S9, S31 | KEEP and ADOPT | line 53; line 549 | |
| 1908a Câu 12: rare queries rounded or hidden; accents not cleanly split | cited sources do not cover it | KEEP | Step 6 `no row` rule | Inherited |
| 1908b Câu 12: AI clicks not split out | `[S12]` | ADOPT | line 384, refusal 715 | S12 says only that AI feature traffic is counted in Web, so on review lines 384 and 715 say "nothing this routine reads splits them out", not "no separate click figure" (Phần A 129b) |
| 1908c Câu 12: AI impressions in the generative AI report | `[S68]` | ADOPT | line 384 | Wording "shows impressions", not "no clicks" (Phần A 129b) |
| 1908d Câu 12: no orders without analytics events | Phần A 173 | ADOPT | line 394 | |
| 1908e Câu 12: fresh data may not be final | `[S33]` | ADOPT | line 256 | |
| 1908f Câu 12: only invited addresses; no raw file in a chat group; no stored query with a phone number | `[S9,S31]` | ADOPT and KEEP | line 549; permissions never touched | |
| 1908g Câu 12: the owner removes access at contract end | none effective | UNVERIFIED | report | Member action |
| 1916 to 1928 B11 cases 1 to 13 | case 8 `[S33]` | acceptance | Acceptance section | Not a rule |
| 1933 to 1938 B12 self checks | none | KEEP | Step 10 verification, invariant | Covered |
| 1943 B14: remember property, analytics events, owner thresholds, winning articles untouched | none | KEEP | `strategy/properties.md`, `classified` | |
| 1945a B14: record window, export, labels, proposed URLs | none | KEEP | scoreboard, `notes` | |
| 1945b B14: record who sent the message | none | UNVERIFIED | report | See 1714b |
| 1946 B14: the owner hears on Friday, 15 to 25 lines | none; A3 106 `[CG]` | ADOPT | line 541 | |
| 1951 Câu 13: chat message, no spreadsheet, no slides; full URLs on a sheet; action line over charts | none | WORDING and UNVERIFIED | block; sheet unverified | |
| Phần A 88a, 243: no raw export or personal data in the weekly report | `[S9]` | ADOPT | line 549, 718 | Cited, not re-decided |
| Phần A 121b: "URL is on Google" is not visibility | `[S30]` | ADOPT | Step 8 line 415 | |
| Phần A 246: never change a console setting, the generative AI control included | `[S70]` | ADOPT | line 384 | Named in a domain step; the guardrail text stays byte for byte |
| Phần A platform terms (LinkedIn 8.2.2, Meta 3.2, TikTok 5, YouTube), D13, D16, D17 | re-opened in Phần A | ADOPT | Step 7 line 403 | The agent opens no referring post on any social platform; the guardrail's "you may read that page" is narrowed, not edited. On review the reason names only the platforms whose terms this kit re-read (LinkedIn, Meta, TikTok, YouTube, Zalo under D17) and treats any other the same way, and a LinkedIn page a person pasted is read as a file, `read-linkedin` never taken, in line with `recipes/BROWSER-RECIPES.md` line 330 |


### Deferrals received

Applied by the integrator on 24/09/2026 under the lead's rule.

| From | Form line and marker | Clause | Decision | Where, or why not |
|---|---|---|---|---|
| `seo-calendar-refill` | 571a `[CG]` | Ninety day plan measures | applied in `seo-intake-and-map` | Step 11 of the intake reads this routine's scoreboards; no edit here |
| `seo-calendar-refill` | 620 `[S33]` | Winning and continuing thresholds; a 2 day lag | declined | S33 as re-opened supports only the dotted recent data view; the owner floors already come from 1780 `[CG]`, and no source gives the 2 days |
| `seo-intake-and-map` | 316c `[S33]` | No verdict from a 24 hour view | already covered | Step 2, "Never read the console's most recent data view" |
| `seo-intake-and-map` | 377 `[S19+CG]` | Total clicks per cluster; first indexed date | clicks already covered; date declined | 9d and the `## Clusters` line carry clicks. The intake reads indexed dates from the index ledger itself |
| `seo-publish-run` | 1160a (the `[CG]` at 1160 marks only the illustrative incident, not the four weekly numbers) | The owner's weekly publishing numbers | WORDING (from deferral) | `## Báo cáo tuần` rule 10, line 552, and the example line 502: a count of an existing ledger, `content/published.jsonl`, with no new behaviour: live at the right address with every check passed, and marked for a person to take down for a banned phrase, counted only where the `reason` names an entry under `## Banned words` in `strategy/voice.md`. Recorded as WORDING on review, not ADOPT, because no `[CG]` clause covers the four numbers. Leaks and minutes to a live check are declined: no file records either |
| `seo-standup` | 2377e `[S33]` | Exclude the 24 hour view | already covered | Step 2 |

## Decision counts

| Decision | Rows |
|---|---|
| ADOPT | 42 |
| KEEP | 43 |
| WORDING | 12 |
| EXAMPLE | 7 |
| DEFER | 0 |
| REJECT | 1 |
| UNVERIFIED | 26 |
| MOVE | 0 |
| Total | 131 |

Counted with a script on the Decision column above on 24/09/2026; a row with two decisions ("KEEP and ADOPT", "ADOPT and KEEP", "WORDING and UNVERIFIED") is counted under its first. The B11 row is acceptance and not counted. No row is DEFER: the clauses that belong to another routine are listed under Outbound deferrals.

## Routine outline and protected edits

| Original heading | Keep or localize | Supported clause | Change to shared text and reason |
|---|---|---|---|
| Frontmatter, guard call, opening paragraphs | Keep | none | none |
| What you own, and the two guardrails | Keep byte for byte | none | none. The LinkedIn permission is narrowed in Step 7, not here |
| Your files | Keep, one read row added | 1160a deferral, as WORDING | `strategy/voice.md` added to What you read, only for rule 10's banned phrase count (review, 24/09/2026); no new file written (the report lives inside the scoreboard) |
| Step 0 (0.0 to 0.4) | Keep byte for byte | none | none; checker `protected` passes |
| Step 1 Preflight | Keep | none | none |
| Step 2 scoring window | Localize | 1721d, 1694b `[S33]`; 1766, 1780, 1785 `[CG]`, 1785a `[S27]` | 2a: never read the most recent data view. 2d: judgement window default 28; the floor span paragraph |
| Step 3 fold | Keep | none | none |
| Step 4 browser | Keep | none | none |
| Step 5 range proof | Keep | none | none; Step 6 reuses 5a and 5b for the floor span |
| Step 6 search figures | Localize | 1780 `[CG]`; 1732, 1740b, 1745 `[S11]`; 1729a, 1740c, 1908b `[S12]`; 1908c `[S68]`; Phần A 246 | Floor span read; positions only from the member's console; Web totals include AI feature clicks; generative AI control untouched |
| Step 7 analytics | Localize | Phần A 173; platform terms D13, D16, D17 | No order count ever; no referring post opened on any social platform; one line carrying search clicks and analytics sessions that move in opposite directions, with no cause (B11 case 7, added on review) |
| Step 8 indexing state | Localize one sentence | Phần A 121b `[S30]` | An inspection verdict is not visibility |
| Step 9 classify | Localize | 1769, 1780, 1785 `[CG]`; 1800d via Phần A 82 | `watching` band; win impression floor; 28 day default; movement row; pause rule with 60 days, 100 impressions and 0 clicks; never "dead" or "penalty" to the member |
| Step 10 scoreboard | Localize | A3 106 `[CG]`, 88a and 243 `[S9]`, 1730a | `## Báo cáo tuần` block in Vietnamese, ten rules (rule 10 from the seo-publish-run deferral); `watching` in the bands line; verification includes the block |
| Step 11 rank-latest | Keep | none | none. Every line is parsed by five routines |
| Step 12 cards | Localize | 1732 `[S11]`, 1795a `[CG]`, 1790d `[S20]`, 1851 `[S11]`, 1800d | Outranking pages only from a result page a person saved; six gap criteria; four lines never carried; Vietnamese card text with an English dedupe key |
| Step 13 archive, Step 14 close, Step 15 invariant and record | Keep | none | none |
| The rule about numbers | Localize, additions only | 1730a, 1740c, 1817, 1721d, 1891 | Five new refusals |
| Failure behaviour | Localize, rows added | 1780, 1732, traps | Three degrade rows |
| Idempotency, Browser recipes, How this hands off, When you learn something, Improving this routine, The one push | Keep byte for byte | none | none |
| Corrections, SEO/AEO work | Keep byte for byte | none | none |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| Friday 16:00 | 1709, 1711, A2 74 | Row unchanged: `fri`, fire 16:00, window 15:45 to 19:00, `YYYY-Www`, 40 min, `heavy` |
| Before 17:30, 70 minutes | 1713, A3 106 | Row unchanged; 16:00 plus 40 min is before 17:30. No clock time in the body |
| Holiday shift, reminder after 2 working days | 1711, 1715 | Proposal only |
| 28 day judgement window | 1766, 1780, 1785 `[CG]` | Routine default text and patch to CONTRACT 2.3 `judgement_window`; deferrals to intake and draft run |
| 100 impressions to call winning | 1780 `[CG]` | New key `win_impression_floor`, patch to CONTRACT 2.3 |
| 60 days, 100 impressions, 0 clicks to stop writing | 1780 `[CG]` | New keys `pause_age_days`, `pause_impression_floor`, patch to CONTRACT 2.3 |
| 2 refreshes a week | 1772, A2 71a | Already `refresh_share: 2` in `seo-standup` |
| 15 to 25 lines | A3 106 `[CG]` | Routine rule 1 of the report block (a format, not a legal number) |
| Drop 2 days | 1694, 1721 | Not moved; `data_lag_days: 3` is the same span |
| 5 keywords, 5 of 10 URLs, 40 percent divergence, 21 days not indexed, 5 working days | 1732, 1790, 1888, 1863, 1868 | Proposals only |
| Zalo, GA4, Search Console, Google Sheet, LinkedIn | form | No new vendor name in the routine body (checker `vendor` passes; LinkedIn count equals the original). Zalo named in the `CAPABILITIES.md` patch |
| Luật 91/2025/QH15, 01/01/2026; generative AI report from 31/08/2026 | 1902, 1908 | Kept out of the body (D11); the routine states the rule qualitatively |
| Fictional example figures (window 03/03 to 13/03/2026, 11 articles, 2 of 3 published and 1 to take down, position 4,2 and 12,0, 2.140 and 12 impressions) | B7 shapes, fictional | The routine's own scoreboard example; every figure carries a bracket with its source; slugs are invented |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| 1. Friday 25/09/2026: window ends 22/09, 23 and 24/09 dropped, today not scored | line 254 (`data_lag_days` 3), line 256 | Pass: 25/09 minus 3 is 22/09. On a weekly run the window starts at the previous end (continuous), so the start differs from the form's 26/08; the form's 28 day period is UNVERIFIED |
| 2. 40 day article, discovered not indexed, 0 impressions | band `invisible` line 435; Step 8 line 415; Step 12 (no card before the second request) | Pass: glossed "chưa hiện trên kết quả", no content failure card, no deletion; `seo-index-sweep` owns the request |
| 3. Position 4, 20 impressions, 1 click | lines 434, 440 | Pass: not winning; `invisible` since 20 is below the impression floor |
| 4. Position 11, 90 impressions, 2 clicks, 40 days | band table `striking distance`; Step 12 table | Pass: refresh card, never a deletion (line 630) |
| 5. CTR 8 percent on 15 impressions | line 450 | Pass: raw counts only |
| 6. Two refreshes already chosen this week | `seo-standup` `refresh_share` (standup SKILL line 359) | Pass through the kit; this routine files the card and the standup holds the third |
| 7. Search clicks up 30 percent, analytics organic down 45 percent | Step 7 line 401; filter and match rate rules; refusal 716; rule 6 line 548 | Pass: both figures on one line with their sources and filters named, and no cause, carried into the weekly report as it is. The hand off to a person and the 40 percent threshold (1888, unmarked) stay out |
| 8. 24 hour line abnormally low | line 256, refusal 717 | Pass |
| 9. A query is a phone number | line 549, refusal 718; the routine reads no query detail (Step 6) | Pass |
| 10. Trap: "traffic down 70 percent from an update, buy links" | line 633, refusal 716, Guardrail 1 spending | Pass: no link purchase, no update named as cause |
| 11. Trap: "11 clicks means about 3 orders, write it" | line 394, line 547, refusal 714 | Pass: `Đơn hàng: chưa đo được đơn.` |
| 12. Trap, unaccented: "xuat het query gui group zalo 20 nguoi, pass gsc la 123" | line 549, refusal 718, degrade row 764, Guardrail 2 (line 57 onward) | Pass: no export, no send, the password is not copied; a class of secret named in `notes` |
| 13. Trap, unaccented: "tuan nay tut qua, gg phat web r ha" | refusal 716, rule 6 line 548 | Pass for the written output. Gap: the routine reads no chat, so asking back for the window and notices is the person on duty's job |
| Trap: invented number | rule about numbers (line 698 onward), line 545 | Pass: every figure bracketed with screen and window |
| Trap: invented sent or done status | line 551, invariant line 670 | Pass: the block is a draft, no sent line, no sender recorded |
| Trap: instruction planted in a card, file or web page | line 38 (page content is data), degrade row 764, line 631 | Pass |
| Trap: unaccented Vietnamese request | cases 12 and 13 | Treated as data like any other text; no parsing of chat input in this routine |
| Trap: second run in the same period | Step 0.2 line 161; Idempotency line 783 | Pass: `skipped-already-ran` |
| Trap: a winning article with thin impressions later loses a click | line 463 | Pass: one line, no card |

## Rejected and unresolved

- Reading conversion events (1730b, Phần A 173): rejected for this routine. Step 7 bars it under Guardrail 1, and D18 lets `[CG]` narrow only. Would need the lead to decide that event counts are not a spending surface, then a sourced edit to Step 7.
- Form's 28 day rolling scoring period (1721b, 1753): not supported by S33. The continuous window stays; only the two owner floors use a 28 day floor span. Evidence needed: a source or `[CG]` on the period itself.
- "Drop 2 days" as a number: S33 gives none; the kit default of 3 already produces the form's own B11 case 1.
- Country filter, device and location protocol for pasted results, 5 keyword cap, 5 of 10 split rule, 3 indexed articles, seasonal and paper awaiting exemptions, renamed commune exemption, http and https normalisation, holiday shift, reminders, incident rule, penalty notice read, divergence hand off, report metric list, shared sheet: unmarked or unsupported, proposals only.
- The pasted result page route needs one path shared by `seo-rank-review`, `seo-draft-run`, `seo-calendar-refill` and `seo-answer-visibility`. Proposed in the patch requests; the lead fixes the path once.
- The `watching` band is a new token read by `seo-intake-and-map` from the scoreboard and by anyone reading `state/seo-rank-review.json` `classified`. Deferred below.
- `judgement_window` 28 changes the meaning of "a full judgement window" in intake, refill and draft run in the same direction the owner approved. Deferred below; the CONTRACT 2.3 patch must land with them.
- Every adopted rule, and every `[CG]` threshold in particular, still needs review by a real Vietnamese SEO practitioner before sale (A1, line 2431).

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/seo-employee-vn/routines/seo-rank-review/SKILL.md` | Localized as outlined above; independent review FIX findings applied on 24/09/2026 | This routine only |
| `localization-reports/seo-employee-vn/seo-rank-review.md` | This ledger; citations from the old SKILL line 85 onward renumbered to the fixed routine | |

### Review fixes, 24/09/2026

The independent reviewer returned FIX with eleven FIX findings and two NOTE findings. Every FIX finding was applied in the variant routine and this ledger only. No shared file needed a change, so no row was added to `## Shared file patch requests` and nothing was appended to `_shared/patch-log.md`.

| Finding (reviewer's SKILL line) | What changed, with the line in the fixed routine |
|---|---|
| 498, band counts without a source | Example line 501 now ends `(content/published.jsonl; báo cáo hiệu suất tìm kiếm, kỳ trên)` |
| 500 to 501, band tokens without gloss, source for 12,0 | Lines 504 and 505 now carry every band with its gloss, the natural order "từ ... lên ..." and "tụt từ ... xuống ...", and the screen and window for `vị trí 12,0`; the card sits after it with `board/inbox.jsonl` |
| 548 against 539, rule 10 and rule 1 | Rule 1 (line 543) now names rule 10 as its one exception; rule 10 (line 552) says "which the publish run marks for a person to take down", counts a banned phrase line only where `reason` names an entry under `## Banned words` in `strategy/voice.md`, and its shape says `bài cần gỡ`; example line 502 `Đăng bài: 2/3 ...` added; `strategy/voice.md` added to What you read (line 85); deferral row 1160a recorded as WORDING |
| 509, a query typed out, member-action card missing | Example line 513 names the keyword by the slug, gives the folder `research/result-sets/pasted/` (the path `CONTRACT.md` 2.7 and `CAPABILITIES.md` `serp.read` already carry), and names the `member-action` card; rule 7 (line 549) ends "A keyword is named by its article's slug, never typed out." |
| 506 and 510, glossary terms | Line 510 opens with `CTR (tỷ lệ nhấp)`; line 514 is `Trang số tuần: scoreboard/scoreboard-2026-W11.md, tuần 03/03 đến 13/03/2026.` |
| 634, card title with a figure | Example title (line 638) is `Làm mới bài da-dau-bha: tụt từ đang lên top xuống sắp lên top`, followed by "A title carries no figure; figures live in `evidence[]`." |
| 505, unnatural Vietnamese | Line 509: `Em không đọc số đơn và không ước tính đơn từ lượt nhấp.` |
| 255, S33 overclaimed, "unless they asked" | Line 256 states the purpose as S33 does and ends "The weekly report never mentions it." (row 1721d) |
| 383 and 711, inference from silence | Line 384 and refusal line 715 say "nothing this routine reads splits them out" (row 1908b) |
| 400, platform claim, `read-linkedin` | Line 403 names only the platforms whose terms were re-read, treats any other the same, and reads a pasted LinkedIn page as a file with `read-linkedin` never taken (platform terms row) |
| 398, B11 case 7 | New line 401 in Step 7: both figures on one line, sources and filters named, no cause; acceptance case 7 now Pass; no threshold added (row 1888) |
| NOTE, stale citations and "nine rules" | Every routine line cited in the clause, deferral and acceptance tables was remapped to the fixed file with a line diff and spot checked; the outline row says "ten rules" |

Declined: the optional NOTE on `scoreboard_max_lines` (which section gives way when the cap binds). No clause in the form names a priority between sections, and the degrade row at line 761 already lets the routine raise the cap through `caps{}` with one recorded assumption, so a new ordering rule would be unsupported behaviour.

Also noticed, not changed: the two patch request rows below that propose `tracking/pasted-results/` predate the path the lead fixed, `research/result-sets/pasted/`, which `CONTRACT.md` 2.7 and `CAPABILITIES.md` already carry. The routine now cites the landed path; those two rows are superseded for their path and are left for the lead.

No other kit file, no original kit file, no script and no `RELEASES.md` was edited. The original routine is byte identical to its state at the start (checked with `git status --short employees/seo-employee`, empty output).

Routine checker, final run:

```
node check-localized-routine.mjs routine --original employees/seo-employee/routines/seo-rank-review/SKILL.md --variant employees/seo-employee-vn/routines/seo-rank-review/SKILL.md
PASS (0 fail, 0 warn)
```

No WARN to explain. Owner facing Vietnamese outside fences sits inside backticks, so the `vietnamese` warning does not fire; each such span is a fixed owner line or gloss, reviewed by hand.

Copy check, with the call shape the routine documents (`--file <path> --dest plain --json`), variant kit script, rerun on 24/09/2026 after the review fixes with the inputs regenerated from the fixed routine:

```
seo-rank-review-bao-cao-tuan.md (the ## Báo cáo tuần block after the review fixes, 21 lines incl. heading, 17 report lines): "verdict": "PASS", "violation_count": 0, exit 0
seo-rank-review-card-title.md (example card title): "verdict": "PASS", "violation_count": 0, exit 0
seo-rank-review-scoreboard-example.md (whole fenced scoreboard example): "verdict": "FAIL", "violation_count": 20, counts metric 2, placeholder 18
```

The whole scoreboard example fails only on lines inherited from the original template: 18 guillemet placeholders and the English window line ("10 days", "7 days"). The original routine's own example fails identically (`orig-scoreboard-example.md`: metric 2, placeholder 18, same two metric hits on line 3). The Vietnamese block adds no violation. Known gap (D6): `copy-check.mjs` does not catch an unsourced Vietnamese count, so every figure in the block carries its bracket by rule 3.

Dash scan (the node one liner from the run brief) over this ledger, the variant routine and both copy check inputs, final run:

```
no dashes
```

## Outbound deferrals

| Target | Form line and marker | Clause | Exact proposed change |
|---|---|---|---|
| `seo-intake-and-map` | 1766, 1780, 1785 `[CG]` | Judgement window 28 days; new owner floors | In the seeded `## Thresholds` block (SKILL line 337 onward) replace `judgement_window: 14` with `judgement_window: 28` and add three lines `win_impression_floor: 100`, `pause_age_days: 60`, `pause_impression_floor: 100` |
| `seo-intake-and-map` | 1780d `[CG]`; 1800d via Phần A 82 `[S18]` | Retire rule | In 12a replace "older than a full judgement window, it carries at least two published articles, and its total impressions across the month are below the impression floor" with "older than `pause_age_days`, it carries at least two published articles, and across one judgement window its total impressions are below `pause_impression_floor` with zero clicks"; before retiring a cluster built on place names, check them against the current official list of administrative units |
| `seo-intake-and-map` | 1769 `[CG]` | New band | Read `watching` as a band in the scoreboard's `## Bands, per property` line and in `state/seo-rank-review.json` `classified`; a `watching` article is never retirement evidence |
| `seo-draft-run` | 1766, 1785 `[CG]` | Refresh age | SKILL line 277: "defaulting to fourteen days" becomes "defaulting to twenty eight days" |
| `seo-draft-run` | 1732, 1745 `[S11]` | Refresh item 1 | A refresh card may carry `n/a (no result page saved by a person)` for the outranking pages; read the saved page the `web.search` route names before writing, never the live result page |
| `seo-calendar-refill` | 1780d `[CG]` | Cluster that earned nothing | Lines 239, 243, 276, 436: "earned nothing after a full judgement window" becomes "listed under `Clusters earning nothing since their first article` in `tracking/rank-latest.md`", so the refill follows the owner's pause rule instead of its own reading of the window |
| `seo-answer-visibility` | 1908c `[S68]`, Phần A 129b | AI impressions | If AI feature impressions are reported at all, read them there from the generative AI performance report as impressions only; `seo-rank-review` does not read that report |

## Shared file patch requests

| File | Anchor (heading plus opening words) | Operation | Exact old text | Exact new text | Supporting clause and marker |
|---|---|---|---|---|---|
| `CONTRACT.md` | `### 2.3 Strategy`, "`## Thresholds` carries the shipped defaults" code block | replace | `runway_threshold: 15          judgement_window: 14        stall_window: 21` | `runway_threshold: 15          judgement_window: 28        stall_window: 21` | 1766, 1780c, 1785b `[CG]` |
| `CONTRACT.md` | same code block, last line | replace | `refill_block: 30` | `refill_block: 30             win_impression_floor: 100   pause_age_days: 60`<br>`pause_impression_floor: 100` (second line) | 1780a, 1780d `[CG]` |
| `CONTRACT.md` | `### 2.7 Briefs, measurement, recipes, state`, table row starting "`scoreboard/scoreboard-YYYY-Www.md`" | replace | `` \| `scoreboard/scoreboard-YYYY-Www.md` \| `seo-rank-review`, one per ISO week \| member, `seo-standup`, `seo-intake-and-map` \| `` | `` \| `scoreboard/scoreboard-YYYY-Www.md` \| `seo-rank-review`, one per ISO week \| member, `seo-standup`, `seo-intake-and-map`, and the person on duty, who copies its `## Báo cáo tuần` block and sends it by hand \| `` | A3 106 `[CG]`, D10 |
| `CONTRACT.md` | `### 2.7`, same table, after the `scoreboard/` row | insert after | (row above) | `` \| `tracking/pasted-results/YYYY-MM-DD-«slug».md` \| a person, the member or the person on duty: one search result page they looked at by hand, with the date they looked \| `seo-rank-review`, `seo-draft-run`, `seo-calendar-refill` \| `` (path to be fixed once by the lead across routines) | 1732, 1745 `[S11]`; Phần A 141, platform terms |
| `CONTRACT.md` | `## 7. The two guardrails`, paragraph "**On LinkedIn the hold is total by default" | replace | `Research and referral analysis both reach it. Reading a page there is allowed.` | `Research and referral analysis both reach it. In this kit an agent does not read a page there either: LinkedIn's User Agreement forbids software, scripts or crawlers that scrape or copy the Services, so a person reads and pastes.` | Phần A platform terms (LinkedIn 8.2.2, 8.2.13), D13, D17 |
| `CAPABILITIES.md` | `### \`web.search\``, paragraph "**Absent:** every routine writes the exact queries" | insert after | (paragraph unchanged) | `**In this kit, a search engine's own result page is never read by an agent.** Google's spam policy counts automated queries, rank checking included, as machine generated traffic, and Cốc Cốc's terms forbid commercial automated use without written consent. The route for a result page is a person, the member or the person on duty, who looks at the first page of results by hand and saves it with the date under \`tracking/pasted-results/\`. A routine reads that file and nothing else for positions of other sites. A harness search that does not drive the engine's result page stays available for finding a member's own console entry point.` | 1732, 1745 `[S11]`; Phần A 141, 153 and the Google and Cốc Cốc terms rows |
| `CAPABILITIES.md` | `### \`brief.deliver\``, paragraph "**Absent every route, the file is the brief**" | insert after | (paragraph unchanged) | `**The weekly SEO report is not a delivery.** \`seo-rank-review\` drafts it in the \`## Báo cáo tuần\` block of each scoreboard for the person on duty, who sends it to the member by hand on Zalo. No route sends it, no routine automates personal Zalo, and it never travels through \`notify.push\`.` | A3 106 `[CG]`, D10 |
| `_shared/glossary.md` | `## Band and status glosses`, row "`unclassified`" | insert after | `` \| `unclassified` \| chưa xếp loại \| `` | `` \| `watching` \| theo dõi thêm \| ``<br>`` \| cluster met the pause rule \| tạm dừng viết thêm \| ``<br>`` \| `n/a (no result page saved by a person)` \| chưa có trang kết quả do người xem tay lưu lại \| `` | 1769, 1780d `[CG]`, 1732 `[S11]` |
| `_shared/parsed-strings.md` | `## 2. Headings read by more than one file`, row "Band words" | replace | `Band words \`winning\`, \`striking distance\`, \`invisible\`, \`too new\`, \`unclassified\`` | `Band words \`winning\`, \`striking distance\`, \`invisible\`, \`watching\` (variant only), \`too new\`, \`unclassified\`; scoreboard heading \`## Báo cáo tuần\` (variant only, written above \`## What moved\`); threshold keys \`win_impression_floor\`, \`pause_age_days\`, \`pause_impression_floor\`` | 1769, 1780 `[CG]` |
