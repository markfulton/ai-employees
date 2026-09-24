# Shared file patch log: customer-satisfaction-employee-vn

Integrator pass, 24/09/2026. Every `## Shared file patch requests` row from the eight routine ledgers, in the order the lead set: `CONTRACT.md`, then `SCHEDULE.md` with `employee.json` and every stale shipped time, then `CAPABILITIES.md`, `ROLE.md`, `README.md`, `INSTALL-PROMPT.md`, `AGENTS.md`, `examples/`. One outbound deferral aimed at `SCHEDULE.md` rather than a routine is logged with the schedule. New `CONTRACT.md` material sits in section 10, "Vietnam operating rules", placed just before Appendix A; every existing section number is unchanged, and each section that lost a request to section 10 carries a one sentence pointer to it.

Status words: **applied** (exact text, at the requested anchor), **applied, relocated** (same text or meaning, placed in `CONTRACT.md` section 10 because the lead asked for new material there, with a pointer at the requested anchor), **applied, merged** (combined with another request that said the same thing), **applied in part** (the reason names the part left out), **declined**.

A backup of the variant as the writers left it is in the session scratchpad, `vn/customer-satisfaction-employee-vn/customer-satisfaction-employee-vn.before-integrator`.

## CONTRACT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| intake P1 | 2.3, the `tạm` fallbacks (hours, `Tết` block, `cod-refused` value) and the legal sources the intake transcribes from | applied, relocated | 10.2, "The fallbacks" and "The legal sources". The law is named in words and by its URLs; no day count is written (D11). The 2.3 `## Response target` paragraph now points to 10.2, which is where `csat-desk-intake`'s references to "`CONTRACT.md` section 2.3" land. Six ready cards a day added to the hours fallback from `csat-desk-standup`'s 2300 `[CG]` |
| intake P2 | 2.3, first line is the only target; one refund block per source; one grant line per role | applied, relocated and merged | 10.2, `strategy/policy-limits.md` bullets, merged with standup 2 and churn 4 |
| intake P3 | 2.3, the four new rule ids; `recurrence:` counts conversations from `8 in 7 days` | applied, relocated and merged | 10.2, `strategy/themes.md` bullets, merged with taxonomy 3. The integrator adds `authority-named` and `pre-sale`, which came in through deferrals (see the intake ledger) |
| sweep P1 | 2.5, `event_at`, `platform_deadline_at`, `input_kinds` | applied, relocated and merged | 10.3, merged with standup 1. Pointer added after the 2.5 `status` paragraph |
| standup 1 | 2.5, `event_at`, `first_reply_at`, `platform_deadline`, carried forward | applied, relocated and merged; field name changed | 10.3. **Contradiction:** the sweep writes `platform_deadline_at` and the standup read `platform_deadline`. Neither exists in the original, so the name the only writer uses is kept, and the integrator renamed the three reads in `routines/csat-desk-standup/SKILL.md` (Step 5e item 2, the failure table row, the hand off line) |
| sweep P2 | 2.5 table, new row `exports/<surface-name>/YYYY-MM-DD-*` | applied | In place, with "`csat-desk-intake` creates the empty folder" added so Step A2's tree is backed by the map; a matching row added to the 2.9 table |
| sweep P3 | 2.3, the Vietnamese surfaces mapped onto the five channel values, `seller-chat` and `return-requests` | applied, relocated | 10.2, `strategy/channels.md` first and third bullets; pointer added to the 2.3 channel paragraph |
| standup 2 | 2.3, replace the `## Response target` paragraph with the three kinds of line | applied, relocated | The original paragraph is kept word for word and gains one sentence pointing to 10.2, where the three kinds are stated. Replacing it would have moved the parsed field names `unanswered_beyond_target` away from where every other kit states them |
| standup 3 | 2.4, the platform deadlines and in-shift minutes are not clocks | applied, relocated | 10.3; pointer after the "Both response numbers" paragraph |
| standup 4 | 2.4, `owner` may name a role | applied, relocated | 10.4, with the four cases that always stay the member's (the same 2300 `[CG]`); pointer after the `status` line |
| standup 5 | 2.8, `brief-latest.md` template under `## Waiting on you` | applied | In place, exact text; it matches `csat-desk-standup` Step 9 |
| churn 3 | 2.7, two slugs are one account only by `order_ref` | applied, relocated | 10.4, exact text; pointer after "One customer, one open flag" |
| churn 4 | 2.3, voucher ceiling per role and deposit rule | applied, relocated and merged | 10.2, grant bullet |
| deflection 1 | 2.3, `## Help center` lists the surfaces customers read | applied, relocated | 10.2, `strategy/product.md` paragraph; pointer in the 2.3 product paragraph |
| deflection 2 | 2.8 row, `macros/macro-<theme-id>.md` readers | applied | In place, exact text. 10.4 adds one sentence on `## Bot version` |
| taxonomy 2 | 2.3, ASCII theme ids, Vietnamese names, folded `matches:`, no personal data in a phrase | applied, relocated | 10.2, `strategy/themes.md` third bullet; pointer after the theme block paragraph |
| taxonomy 3 | 2.3, a deadline rule names the deadline, never its number | applied, relocated and merged | 10.2, `strategy/themes.md` second bullet; pointer after the global rules paragraph |
| report 1 | 2.3 row, `strategy/policy-limits.md` readers add the report (sale days only) | applied | In place, exact text |
| report 2 | 2.9 row, same | applied | In place, exact text |
| report 3 | 2.8 row, `report/manual.md` is the only route for platform figures | applied | In place, exact text |
| report 4 | 2.3, a figure copied off a platform screen never qualifies for `## Agent sourced` | applied | In place; the request was a replace whose new text begins with the old sentence, so the new sentences were added after it |
| reply 1 | Releases, a released send says it was prepared by an automated assistant | applied, relocated | 10.5, exact rule plus one sentence on bot lines; a pointer sentence added to the end of the Releases paragraph. It narrows a release and relaxes nothing |
| reply 2 | 2.6, an invoice correction is not a remedy | applied, relocated | 10.4, exact text; pointer after the remedy block paragraph |
| integrator | 2.3 and 2.9 rows, `strategy/CHANGELOG.md` readers add the report for split lines | applied | Needed by the taxonomy deferral the report took (split transition rows) |
| integrator | 8.4, the version check read the English kit and the upgrade line would install it | applied | Same repair as `gtm-engineer-vn` 1.11.0 defect 11 and `chief-of-staff-vn`: the check reads `employees/customer-satisfaction-employee-vn/`, and the upgrade line uses `node installer/cli.mjs upgrade customer-satisfaction-employee-vn`. `csat-desk-intake` Step B3a.1 already read the variant's own folder |
| integrator, Gate 8 | New 10.1, the rules three or more routines share | applied | Twelve rules; see the report's Gate 8 table |

## SCHEDULE.md, employee.json, stale times

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| report 6 | 1.2 browser column, the report's `conditional` sentence | applied | In place, exact text |
| sweep outbound deferral | Option A (no row change, reason in section 9) or Option B (`mon-fri sat` for the sweep, standup and reply desk, plus routine wording) | applied, Option A | Section 9 dated note. Option B would change each routine's Step 0.1 sentence and frontmatter cadence, which a localization pass may not touch, and `sun` is outside the closed vocabulary. The note tells the member how to write `mon-fri sat`, which `guard.mjs` parses as a list |
| version | `employee.json` version | applied | 1.9.0, with `VERSION` |
| stale time scan | Every file for a changed fire time | nothing to do | No routine row changed, so no fire time went stale in `CONTRACT.md`, `SCHEDULE.md` prose or `README.md`. The browser spacing rule is unchanged and holds as shipped |

## CAPABILITIES.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| intake P4 | 4b, a paragraph of Vietnamese routes, before the `confirmed` paragraph | applied in part | Placed after the `confirmed` paragraph with the other two Vietnam paragraphs, so the table and its legend stay together. **Contradiction:** it named the member's own page read "one item at a time" as a fallback route, while sweep P5's 4c table says Facebook and Instagram get no browser at all. The stricter 4c verdict is kept: the paragraph now sends the fallback to "the route section 4c permits for that platform", and marketplace reviews to `marketplace.read` and map reviews to `reviews.read` |
| sweep P4 | 4b rows `marketplace.read`, `calls.read` | applied | After `helpcentre.read`, confidence `unknown` |
| sweep P5 | New section 4c, platform terms table | applied | Exact text, before section 5 |
| reply 3 | 4b paragraph, where a remedy is granted | applied | After the `confirmed` paragraph, exact text |
| churn 1 | 4b row `billing.read` | applied | Exact text |
| churn 2 | 4b paragraph, free chat windows and platforms that limit their data | applied in part | Exact text except the last sentence: "one customer at a time, preferably through an authorised connector" now reads "by the route section 4c permits for that platform, preferably an authorised connector or the member's own export", for the same Facebook and Instagram reason as intake P4 |
| deflection 3 | 4b row `helpcentre.read` | applied | Exact text |
| deflection 4 | 4b row `replytool.saved` | applied | Exact text, `unknown`, no write |
| deflection 5 | Section 7 row, `csat-deflection-desk` | applied | Exact text |
| taxonomy 1 | Section 7 row, `csat-taxonomy-refresh` | applied | Exact text |
| report 5 | 4b row `reviews.read` | applied | Exact text, `unknown` |
| integrator | Section 7 row, `csat-inbox-sweep`, "Public listings and forums only through `web.fetch`" | applied | Added "never a platform section 4c forbids" and that connected routes and `exports/` still read; the old wording would have told a machine with no browser to fetch marketplace pages |

## ROLE.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, from standup 2300 `[CG]` and intake P1 | 6.2 row `«WORKING DAYS»`, "Monday to Friday and four ready cards a day" | applied | The shipped fallback contradicted `csat-desk-standup` and `csat-desk-intake`; it now names the 10.2 fallback, six cards, marked `tạm` |
| integrator | 6.1 block and 6.2 table, the Vietnamese profile fields | applied | Two optional lines in 6.1 and one 6.2 row for grant lines per role, voucher ceilings, the deposit rule and the `cod-refused` value |

## README.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator | What this variant is | applied | One paragraph under the opening |
| integrator | The intake questions this variant adds | applied | One sentence in "What it needs from you" |
| integrator | Install and upgrade | applied | The install section says the public npm package does not carry the variant and names the fork's installer; "Version and updates" read v1.2.0 (stale in the original too) and now reads v1.9.0 with the fork upgrade line and the warning against `npx ai-employees upgrade customer-satisfaction-employee` |

## INSTALL-PROMPT.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator, lead's rule that the intake asks for every profile field a routine reads | Phase 1 and Phase 3 | applied | Phase 1 item 7 (new): platforms read only on the member's own account as section 4c allows, never their public pages. Phase 3: working days with `Tết`, sale days, capacity and vacation mode; per role grants and voucher ceilings; the deposit rule; the `cod-refused` value; the ship from and return address in the current units; the form of address; the Vietnamese surfaces by name; a marketplace window is not the member's target. The old reject item is now item 8 |

## AGENTS.md

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| integrator | This is the Vietnam variant | applied | One paragraph: where its rules live, never upgrade from npm |

## examples/

| Source | Request | Status | Where it landed and why |
|---|---|---|---|
| reply 4 | `examples/queue/2026-03-05-reply.md`, the three header lines in Vietnamese | applied | Exact text, matching `csat-reply-desk` Step 8. `copy-check.mjs --dest plain`: PASS |
| integrator | `examples/README.md` | applied | One paragraph saying the header is Vietnamese and the entry bodies, brief, board and ticket lines are still the English kit's fictional example |

## Totals

37 requests from the eight ledgers (intake 4, sweep 5 plus one schedule deferral, reply 4, churn 4, deflection 5, taxonomy 3, report 6, standup 5): 37 applied, of which 16 relocated into `CONTRACT.md` section 10, 6 merged, 2 applied in part, 1 with a field name changed; 0 declined. Integrator repairs beyond the requests: 12 rows above.

## Pending, after review: _shared/glossary.md

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| deflection fixer, reviewer NOTE, 24/09/2026 | `## 4. Glosses for English cell tokens the member reads`, insert after the row "`n/a (surface marks items read on open)`": `n/a (help surface text not recorded)` glossed "anh/chị chưa dán nội dung chỗ này, em không mở trang"; `n/a (no help center recorded in strategy/channels.md)` and the inherited short form `n/a (no help center recorded)`, both glossed "chưa ghi chỗ khách tự đọc" | applied, final verifier pass | STYLE-VI requires a gloss wherever the member reads a token; these appear in `csat-deflection-desk` Step 5 and its degrade table. Exact rows in the deflection ledger, "Shared file patch requests" |

## _shared/glossary.md (fixer pass, csat-satisfaction-report, 24/09/2026)

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| report fixer, reviewer FIX on the Step 8 gloss block | Section 4, after the `above the recorded limit, your call` row, add five rows: `n/a (sale window)` tuần sale, không so với tuần thường; `n/a (not typed in report/manual.md)` anh/chị chưa chép số này vào file; `n/a (typed for another window)` số đã chép là của kỳ khác; `n/a (no audit recorded)` anh/chị chưa chép kết quả tự kiểm tra phiếu tuần này; `n/a (no retraction recorded)` anh/chị chưa ghi câu nào về tiền phải rút lại | applied, final verifier pass | So every routine that writes these tokens reuses one gloss. Exact row text in the `csat-satisfaction-report` ledger, `## Shared file patch requests` |

## Pending, after review

Requests raised after the integrator pass by a reviewer fix pass. None is applied; each waits for the lead.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| standup 6 (reviewer fix pass, 24/09/2026) | `CONTRACT.md` 2.8, `brief-latest.md` template under `## Waiting on you`: insert `«one line for the previous open day's in-shift first responses, only where the times exist»` after `«one line per open at-risk account with no outcome recorded»` | applied, final verifier pass | `csat-desk-standup` Step 9 already renders this line. **Correction to the row "standup 5" above:** its note "it matches `csat-desk-standup` Step 9" is true only once this line lands; until then the CONTRACT template lacks the in-shift line |
| standup 7 (reviewer NOTE, 24/09/2026) | `_shared/parsed-strings.md`, the row naming `## member-action`, `## local-artifact`, `### high` as parsed board headings | applied, final verifier pass | The rendered headings are `## Only you can close these` and `## The desk closes these itself` in the original, translated in the variant; no other file reads them, and the standup reads them only as delimiters and drops an English one from an earlier render. Exact text in the standup ledger's patch requests |
| standup outbound deferral (reviewer fix pass, 24/09/2026) | `csat-desk-intake` line shape for the complaint acknowledgement: add `\| counted weekdays: <the weekdays the source names, with its URL>` | no shared file change; applied in the routine (see the last row of the fixer pass table) | A routine, not a shared file; logged here so the lead sees it. S3 and S4 say "03 ngày làm việc" and name no weekdays, so the standup now computes no acknowledgement date until a source names them |

## Fixer pass, csat-reply-desk, 24/09/2026

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| reviewer findings 8 and 10, reply desk fixer | `examples/queue/2026-03-05-reply.md`, the three header lines: `# Hàng đợi trả lời riêng, ngày 05/03/2026`; `` # Anh/chị đọc, sửa chỗ nào cũng được, rồi tự gửi. Gửi xong, anh/chị đánh dấu vào ô `- [ ] sent` (đã gửi). ``; `# Sáng hôm sau, Bản tin sáng sẽ đọc lại các ô anh/chị đã đánh dấu.` | applied, final verifier pass | Matches the new `csat-reply-desk` Step 8 header; the header date is dd/mm/yyyy (D12, STYLE-VI), while the file name and the entry key dates stay ISO. Exact old and new text in the reply desk ledger, `## Shared file patch requests` |
| taxonomy fixer, reviewer NOTE, 24/09/2026 | `## 4. Glosses for English cell tokens the member reads`, insert after the row "`n/a (surface marks items read on open)`": `n/a (no browser route for this surface)` glossed "kênh này không cho đọc tự động, em không mở" | applied, final verifier pass | STYLE-VI requires a gloss wherever the member reads a token; it appears in `csat-taxonomy-refresh` Step 5 and its degrade table. Exact row in the taxonomy ledger, "Shared file patch requests" |

## Pending, after review: CAPABILITIES.md

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| taxonomy fixer, reviewer FIX and NOTE, 24/09/2026 | Section 7 row `csat-taxonomy-refresh`: after "and only on the member's own marketplace seller account, one ticket at a time" append ", after the member confirms that route under section 4c" | applied, adapted, final verifier pass | Section 4c's Shopee row allows the browser on the member's own seller account only after the member confirms it; the section 7 row did not say so. `csat-taxonomy-refresh` Step 5 now requires the 4c route and the member's dated confirmation in `## Corrections`. Exact text in the taxonomy ledger, "Shared file patch requests" |

## Pending, after review: routines/csat-satisfaction-report/SKILL.md

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| taxonomy fixer, reviewer FIX, 24/09/2026 | In the `strategy/CHANGELOG.md` input row and the "A theme split this window is shown as a transition" bullet, find a split line by the `<what changed>` clause beginning `tach <parent-id>:` and take the parent id and the new id from that clause | applied, final verifier pass | `csat-taxonomy-refresh` 6.6 now always writes a split line in that fixed shape, since the clause is otherwise free Vietnamese. Outbound deferral row in the taxonomy ledger |

## Pending, after review: CONTRACT.md and CAPABILITIES.md (sweep fixer)

| Source | Request | Status | Where it lands and why |
|---|---|---|---|
| sweep fixer, reviewer NOTE, 24/09/2026 | `CONTRACT.md` 10.2, bullet "A surface on a platform whose verdict forbids automated reading": `exports/<channel-id>/` becomes `exports/<surface-name>/` | applied, final verifier pass | 2.5, 2.9 and `csat-inbox-sweep` Step 2 all name the folder by surface. Exact text: sweep ledger block P6 |
| sweep fixer, reviewer FIX, 24/09/2026 (lead decision) | `CAPABILITIES.md` 4c intro sentence on the member's browser confirmation, the Shopee and Google Maps "Permitted route" cells, and the 4b `reviews.read` Google Business Profile route: no browser route on those platforms | applied, final verifier pass | `CONTRACT.md` 10.1 rule 1 lists no browser route and 10.0 says the stricter reading holds; D17 names only the member's own exports for Shopee; a member's confirmation is not Shopee's written consent (3.1). `csat-inbox-sweep` now reads those surfaces through a connected route or `exports/` only. Exact text and the alternative the lead may choose instead: sweep ledger block P7 |

## Fixer pass requests, pending

Added 24/09/2026 by the `csat-desk-intake` fixer after the independent review. Not applied: each waits for review before any shared file changes.

| Source | Request | Status | Where it would land and why |
|---|---|---|---|
| intake P5 | `CONTRACT.md` 10.2, `strategy/themes.md` last bullet: replace "`recurrence:` counts distinct conversations and starts at `8 in 7 days`, written with a source bracket after it so `copy.check` accepts it." with "`recurrence:` counts distinct conversations. `csat-desk-intake` writes a per theme value only where the member gives one, as `<n> in <days> days` with a source bracket after it so `copy.check` accepts it; otherwise it writes `recurrence: n/a (csat-deflection-desk default in force)`, and `csat-deflection-desk` applies its own `default_recurrence`, or its `low_volume_recurrence` for a small shop, as `recurrence_in_use` records." | applied, final verifier pass | A per theme value overrides both defaults in `csat-deflection-desk` Step 3, so a shipped `8 in 7 days` on every theme kept a small shop from the fallback. Pairs with the outbound deferral in the intake ledger asking the deflection desk to read an `n/a (<reason>)` value as naming none |
| intake P6 | `CAPABILITIES.md` 4b: withdraw P4's clause "where none is connected, the member's own signed in seller centre or page, one item at a time" | record only, no shared file change | The integrator's applied 4b text already routes every platform through section 4c, so no shipped change is needed; recorded so nobody re-applies the withdrawn clause |
| intake P7 | `routines/csat-deflection-desk/SKILL.md` Step 3, paragraph "**Decide the threshold in force, once per run, before you count any theme.**": the example bracket `[starting value from csat-desk-intake, 2026-09-23]` becomes `[set by the member in the session, 2026-09-23]`, and append after the sentence ending "is never part of it.": "A `recurrence:` value that is an `n/a (<reason>)` token names none, and the default in `recurrence_in_use` applies to that theme." | applied, final verifier pass | A routine, not a shared file; logged here so the lead applies it with P5. The intake no longer ships any per theme value, so the old bracket names a source that no longer exists and the desk never said how to read `n/a (csat-deflection-desk default in force)`. Exact old and new text: intake ledger block P7 |
| intake fixer, second review, 24/09/2026 | Record only: the row "standup outbound deferral" above (`counted weekdays:` on the complaint acknowledgement line) is now applied in `csat-desk-intake` Step A7.5, shape `counted weekdays: <the weekdays the source names, or n/a (source names none)>`, and the holiday list carries its own official page URL and date or reads `n/a (not read)` | applied in the routine (no shared file change) | Keeps the intake line shape and `csat-desk-standup` Step 9 item 3 in step. Outbound proposal to the standup for `n/a (not read)` holidays: intake ledger, `## Outbound deferrals` |

## Final verifier pass, 24/09/2026

Every row above that read "pending, after review" is settled here. Each edit was made by exact text match, one match required, from a script in the session scratchpad (`vn/customer-satisfaction-employee-vn/verifier/apply.mjs`); a copy of the variant and of this folder from before the pass is beside it (`variant.before-verifier`, `reports.before-verifier`). Step 0, both guardrails, parsed strings, `## Corrections` and `scripts/` were not touched, and nothing was shortened.

| Source | Status | Where it landed and why |
|---|---|---|
| deflection fixer, glossary | applied | `glossary.md` section 4, three rows after `n/a (surface marks items read on open)`, exact glosses |
| report fixer, glossary | applied | `glossary.md` section 4, five rows after `above the recorded limit, your call`, exact glosses; they match `csat-satisfaction-report` Step 8 word for word |
| taxonomy fixer, glossary | applied | `glossary.md` section 4, after the three deflection rows, exact gloss |
| standup 6 | applied | `CONTRACT.md` 2.8 `brief-latest.md` template, the in-shift line after the at-risk line. The row "standup 5" note ("it matches `csat-desk-standup` Step 9") is now true |
| standup 7 | applied | `parsed-strings.md`, the board headings row replaced with the exact text |
| standup outbound deferral | no shared file change | Already applied in `csat-desk-intake` Step A7.5 by its second fixer. The intake's paired outbound proposal to the standup (a `public holidays:` list reading `n/a (not read)` computes no date) is applied in `csat-desk-standup` Step 5e item 3, one clause, so the intake's new token has a reader |
| reply desk fixer, examples header | applied | `examples/queue/2026-03-05-reply.md`, the three header lines, exact text; matches `csat-reply-desk` Step 8. `copy-check.mjs --dest plain`: PASS |
| sweep P6 | applied | `CONTRACT.md` 10.2, `exports/<channel-id>/` becomes `exports/<surface-name>/`, exact text. `csat-desk-intake` A7.4 already says its `<channel-id>` is the same string |
| sweep P7 (lead decision) | applied | `CAPABILITIES.md` 4c intro sentence, the Shopee and Google Maps "Permitted route" cells, and the 4b `reviews.read` route, exact P7-new text: no browser route on any 4c platform. Chosen over the alternative because `CONTRACT.md` 10.0 says the stricter reading holds, 10.1 rule 1 lists no browser route, D17 names only the member's own exports for Shopee, and D23 says Shopee forbids manual tracking too. `csat-desk-intake`, `csat-taxonomy-refresh`, `csat-churn-watch` and `csat-satisfaction-report` open a browser on these platforms only where a 4c row permits it, so they now mean no browser with no further edit; `csat-inbox-sweep` already reads "never the browser" |
| taxonomy fixer, `CAPABILITIES.md` section 7 row | applied, adapted | Requested clause appended, plus "as shipped, no row of section 4c permits it, so this column applies only once one does", because after sweep P7 the requested clause alone would describe a route no row allows |
| taxonomy fixer, report split line | applied | `csat-satisfaction-report` Step 1 inputs row for `strategy/CHANGELOG.md` and the Step 3 transition bullet: a split line is found by its `<what changed>` clause beginning `tach <parent-id>:`, parent id after `tach`, new id in the same clause. Matches `csat-taxonomy-refresh` 6.6 |
| intake P5 | applied | `CONTRACT.md` 10.2, `strategy/themes.md` last bullet, exact text |
| intake P6 | record only | No shipped change; the withdrawn clause is not in `CAPABILITIES.md` 4b |
| intake P7 | applied | `csat-deflection-desk` Step 3, the example bracket and the appended sentence, exact text. `CONTRACT.md` 10.2, `csat-desk-intake` A7.6 and `csat-deflection-desk` Step 3 now agree |

Wording made consistent in the same pass (Vietnamese the member reads; no parsed string): the act of ticking a sent box is `đánh dấu` everywhere, as in the reply desk header. `csat-desk-standup` Step 4a, the Step 9 example and the Step 9 number check (`chưa tick ô sent (đã gửi)` three times becomes `chưa đánh dấu ô sent (đã gửi)`), the Step 7 board header (`thì tick ô của việc đó` becomes `thì đánh dấu ô của việc đó`), and `csat-satisfaction-report` Step 8 item 7 (`được tick` becomes `được đánh dấu`). `copy-check.mjs --dest plain` on the new lines: PASS.

The variant `CHANGELOG.md`, 1.9.0 entry, `CAPABILITIES.md` bullet: one sentence added, "No row permits a browser: your own account on those platforms is read through a connector you authorised or an export you drop into `exports/`." The version stays 1.9.0; nothing has been published.

Totals for this pass: 14 pending rows settled (11 applied, 1 applied and adapted, 1 record only, 1 already applied in the routine by its fixer), one paired deferral applied, one wording unification in two routines.

## Global wiring pass, D23, 24/09/2026

Decision D23 in `localization-reports/VN-DECISIONS.md`: Shopee's terms (section 3.1) forbid manual tracking as well as automated tracking, so another shop's page on Shopee is never tracked, counted or copied, by hand or automatically. The global integrator grepped every Vietnam variant (routines, `CONTRACT.md`, `INSTALL-PROMPT.md`, `README.md`, examples); in this kit one line invited the member to read another shop and paste from it. The member's own Shopee exports and connectors stay allowed. The routine names no platform, because the kit checker fails a vendor name the original routine never carries; A4.2a already says "one marketplace forbids manual monitoring as well", and `CAPABILITIES.md` 4c names it.

| File | Change | Basis |
|---|---|---|
| `routines/csat-desk-intake/SKILL.md` A4.4, the surface A4.2a rules out | "The member reads those" now excepts another shop's page or a public listing search on the marketplace that forbids manual monitoring as well: nobody reads or pastes from those for this kit, and the report names them as closed | D23 |

Check after the change: routine checker on `csat-desk-intake`, `PASS (0 fail, 0 warn)`. No version bump: 1.9.0 is unpublished and this is part of the same localization pass.
