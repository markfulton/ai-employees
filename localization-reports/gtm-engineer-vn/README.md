# GTM Engineer Vietnam localization

## Status

`employees/gtm-engineer-vn` is at **1.11.0**. Version 1.10.0 was the first evidence bounded pass over all eight routines. Version 1.11.0 is an audit of that pass against every owner approved clause in the form, with repairs where 1.10.0 contradicted the contract, its own file map, or the form. Nothing was committed, pushed or published. The original `employees/gtm-engineer` kit has no changes.

This is still an AI prepared expert handoff. Form section A1 names the author as an AI sub agent playing a growth role, dated 23/09/2026, and asks for review by a human expert. No clause here has been confirmed by a person running a Vietnamese business.

## Inputs

| Input | Path |
|---|---|
| Form, original | `Downloads/khung-cg/ket-qua/Phieu-chuyen-gia_08_GTM_da-dien.docx` |
| Form, extracted Markdown, the line numbers below | `Downloads/khung-cg/ket-qua/08_GTM/phieu-da-dien.md` |
| Source index | `Downloads/khung-cg/ket-qua/08_GTM/literature/nguon.md`, viewing date 23/09/2026 for every row |
| Skill | `Downloads/khung-cg/.claude/skills/snagon-routine-writer-v2/SKILL.md` |
| Earlier trial output | `/private/tmp/snagon-v2-agent-trial/output/`, including the 1.9.0 standup and capability drafts |
| Backup of the variant before this audit | the session scratchpad, `gtm-engineer-vn.before` |

Source URLs were not reopened in this pass. Source support below is judged from the index titles and summaries, which the form author recorded as opened on 23/09/2026.

## How the audit was done

Every line carrying the owner approval marker was extracted with its section. The form holds 40 such markers on 39 lines. Each was classified against the clause the marker actually sits on, then compared with the original routine text, not only with the 1.10.0 diff. A checker PASS was not treated as evidence: every adopted rule was traced to the file map and reader that would use it.

## Defects found in 1.10.0 and repaired

| # | Where | Defect | Repair |
|---|---|---|---|
| 1 | Four routines | `gtm-intake-and-dashboard`, `gtm-icp-refresh`, `gtm-paid-and-tracking-guard` and `gtm-scoreboard` told the agent to read "the member's order book" or "sales record". No kit file defined it, and the paid guard's file map forbids reading any unlisted file | New member owned `## Order book` heading in `strategy/utm-taxonomy.md`, defined in `CONTRACT.md` 2.3. Order counts reach the kit only through `scoreboard/manual.md`. No routine opens the order system |
| 2 | `gtm-paid-and-tracking-guard` | The Vietnam reconciliation sat in Step 8, which only runs when no conversion action exists, so it almost never ran | Moved to Step 2.2 as the `counts_orders` decision, and to the Step 4 outcome table |
| 3 | `gtm-outreach-queue` | The bought list and consent check sat in Step 3, which is optional and runs only when the browser is taken, so most runs skipped it | Moved into the do not touch set in Step 2c, built before any draft |
| 4 | `gtm-signal-sweep` | Told the routine to "file a schema card", but the sweep is explicitly not an appender of `board/inbox.jsonl` | Removed. The phone only case is counted in the run record notes |
| 5 | `gtm-signal-sweep` | Told the routine to keep phone numbers "in the sourced signal note". The signal record has no such field | No phone number or messaging account is recorded anywhere |
| 6 | `gtm-signal-sweep` | Hiring exception said "a recent update"; the approved clause says an update within seven days. It also left `expires_on` undefined for a kept post | Seven days, and the update date becomes the event date |
| 7 | `gtm-board-standup` | The template dropped the per section rules and the fixed pointer line while the next paragraph still required that line | Original template restored. A separate Vietnamese sample follows it |
| 8 | `gtm-icp-refresh` | Evidence floors were placed in Step 4, the optional browser step, after the verdict that uses them | Moved into section 3.3 |
| 9 | `gtm-scoreboard` | Hard coded 30 sends, overriding the member editable `rate_floor` | Reads `rate_floor`, which ships at 30 |
| 10 | `gtm-launch-step-runner` | The approved five forms and three other items per run duplicated the shipped 4.3 ceilings, inside Step 6 research, and named a board cap field that does not exist | Duplicate removed. The waiting pile rule was added in 4.3 |
| 11 | `gtm-intake-and-dashboard`, `CONTRACT.md` 8.4 | The monthly version check read the published English `gtm-engineer` VERSION and the brief would print `npx ai-employees upgrade gtm-engineer`. Following it would replace the Vietnamese routines | Check reads `employees/gtm-engineer-vn/VERSION`. The upgrade line uses the fork's bundled installer |
| 12 | `CAPABILITIES.md` | A `notify.push` harness table from 1.9.0 remained, with claims no source supports | Removed. `CONTRACT.md` 3.2a and section 9 remain the rule |
| 13 | `SCHEDULE.md` | Prose said the queue fires 45 minutes after the standup; the rows give 30. The section 9 note ignored its own format | Both fixed |
| 14 | `examples/` | Brief dated March, board and run log dated September, an English roofing queue file, and a DM file whose header and recipient did not match the DM shape in Step 6. The run log said `2 presses` | One consistent fictional day, one Vietnamese email queue entry, `2 ready` |

## Clause ledger: every owner approved marker

Decisions follow the skill: ADOPT a new rule, MOVE a schedule value, KEEP an inherited rule that already satisfies the clause, WORDING presentation only, DEFER to later evidence, UNVERIFIED where the marker does not sit on the clause.

### Phần A

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 86, two markers | COD confirmation call script, owner sets which orders are called, call within thirty minutes in office hours | DEFER | The kit has no call queue, no phone field and no COD routine |
| 106 | Scam refusal script; change a receiving account only after owner confirmation on a saved channel | DEFER, KEEP in part | No inbound message routine. The kit never handles payment details, which guardrail 2 already covers |
| 217 | Cold B2B contact only on one of four bases; ND 91/2020 limits per 24 hours and prior consent | ADOPT the bases in part; KEEP cadence | `gtm-outreach-queue` Step 2c part 4. The bases carry the S1, S3 and S11 markers; the decree sentence carries the approval marker. Shipped `touch_cap` 2 with a four day interval already sits inside three touches in seven days, and one email per recipient per day is under the limit |

### B-1 intake

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 342 | A gathering place counts only with 30 relevant posts or new members in 14 days | DEFER | Counting group activity often needs a login, and the kit judges places by signal yield in `gtm-icp-refresh` |
| 362 | Channel conventions per business type | WORDING | Intake A6 requires a channel to name the customer path and its source. Phone and messaging channels have no route |
| 409 | Keep three segments, move weaker ones, never delete evidence | KEEP three; ADOPT evidence | The original already caps at three. Extra evidence goes under `## Sources read`, intake A4.6 |
| 413 | A channel with spend and zero orders after 30 days is flagged at the monthly review, never switched off | DEFER; KEEP never switch off | Needs per channel orders. Orders reach the kit only as member totals |
| 422 | Website purchase is the primary order count only when more than 80 percent of the last 30 days' orders were paid on the site | ADOPT | `CONTRACT.md` 2.3 `## Order book`, intake A4.5, A5 and A6, paid guard 2.2 and Step 4, scoreboard Step 8. S37 and S48 on the same row support payment matching by webhook, which the kit does not connect |

### B-2 ICP refresh

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 686 | At least five written notes before a message call | ADOPT | `replies_for_message_call` 5, section 3.3 |
| 696 | Under 30 sends in the month: `chưa đủ mẫu`, no rate, no rewrite | ADOPT | `sent_per_segment` 30 and owner verdict words, section 3.3 |
| 698 | Replies of 5 percent or more with fewer than 8 new people: change the place | UNVERIFIED | The marker sits on the scope cell only. The original's qualitative sourcing rule stands |
| 714 | 30 sends, five notes, retire only after two consecutive sufficient months | ADOPT | All three values, section 3.3. `months_of_signal` 2 is new in 1.11.0 |
| 724 | A group turned to rental posts, move to hiring pages | EXAMPLE | The marker sits on the illustration. The source rotation rule remains the original |
| 821 | Five illustrative hard cases | WORDING | Holiday and returns caution in section 3.3 and scoreboard Step 8. Acceptance map below |

### B-3 signal sweep

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 902 | Review a source after fewer than one conversation per five hot leads in seven days | DEFER | No join from a signal source to a conversation exists in the ledgers |
| 946 | Expiry counts from the post date | KEEP | The original counts from the event date on the page |
| 983 | Hot means an event within 14 days, the right role, and a contact path | ADOPT | `strong` now also needs an email or profile read on the page |
| 985 | Hiring posts over 21 days are dropped unless open and updated within seven days | ADOPT | Step 5 table, with the update date as event date |
| 988 | Stop at eight new people per session | KEEP | `caps.people` and `caps.new_rows` ship at 8 |
| 996 | Full expiry table; the marker ends the cell after "expiry counts from the post date" | KEEP matching values; UNVERIFIED others | Funding 45, leadership 60 and complaint 14 already match. New types and changed values would need their own marker and a change to the closed type list |
| 1031 | Eight contactable people per session; a source with no rows in three sessions is retired | KEEP both | Caps ship at 8. The original rotates a source after three empty runs; that sentence is unmarked anyway |

### B-4 outreach

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 1180 | Messaging reply bands, and rates only with 30 sends in 30 days | DEFER bands; KEEP floor | No messaging channel. The scoreboard floor is 30 |
| 1198 | No calls between noon and half past one | DEFER | No call queue |
| 1248 | Stop after three touches in seven days without reply | KEEP | Shipped `touch_cap` 2 is stricter |
| 1253 | At most 15 strangers a day from one personal messaging account | DEFER | No messaging queue |
| 1286 | Draft caps per sender: 15 messaging, 8 email, 5 calls | KEEP email | Shipped email target 5 is below 8. Other channels deferred |
| 1334 | Three frames, with permission to stop at touch three | KEEP | Frame one is the shipped `observation` framework. Touch three never happens under `touch_cap` 2 |

### B-5 launch step runner

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 1541 | An article fee over 20,000,000 đồng always goes to the owner | KEEP | Every paid placement is already parked or handed to the member |
| 1578 | Keep five filled forms and three other items; more than five piles up | KEEP per run; ADOPT waiting pile | Shipped 4.3 ceilings match. No new form while five filled forms wait, section 4.3 |

### B-6 paid and tracking guard

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 1754 | 500,000 đồng as the same day alert threshold; the 20 percent order variance is unmarked | DEFER; UNVERIFIED | The guard runs weekly, same day alerts are outside `CONTRACT.md` section 9, and the guard reads no order counts |
| 1817 | Over 5 percent between screen and statement: no conclusion, pass to the accountant | DEFER | No statement or invoice file is in the guard's file map |
| 1849 | 500,000 đồng in 24 hours with zero events and zero orders: same day tracking alert | DEFER | Same reasons as line 1754. The website closing definition from line 422 is adopted |
| 1851 | Seven day frequency above four on one creative: propose a new creative | DEFER | The clause says it depends on the business, and the kit has no member editable place for it. It also sits outside the six guardrail categories |
| 1865 | Keep audience expansion outside the chosen province off until 30 orders a month | KEEP | Categories 3 and 5 already flag every automatic expansion and location mismatch |

### B-7 scoreboard

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 2056 | Office close Friday 16:00, retail Saturday 17:00, continuous window, no count comparison across windows more than a day apart | KEEP office; DEFER retail | The row, the continuous window and the unequal window rule already match. A Saturday row needs a member calendar switch |
| 2087 | Keep 30 sends and a change of three units plus 20 percent | KEEP | Shipped defaults match. The variant text now reads `rate_floor` |

### B-8 board standup

| Line | Clause | Decision | Target or reason |
|---|---|---|---|
| 2240 | Brief at 07:45 on weekdays | MOVE | Done in 1.10.0: schedule row, manifest, shipped time prose |
| 2253, 2329 | Three items by default, five at most | KEEP | Original Step 5 and `CONTRACT.md` 2.7 |

The unmarked B-8 clauses, including the reminder sequence and footer removal, are recorded in `B8-provenance.md`. That file describes the 1.10.0 template; the 1.11.0 template is described above.

## Sources behind adopted rules

| Source | What it supports in the kit |
|---|---|
| S1, S3, S11 | Prior consent and the four contact bases in outreach Step 2c |
| S9 | No bought or traded list, in the sweep Step 7 and outreach Step 2c |
| S37, S48 | Payment is matched to an order id, which is why a screenshot is not a payment. No webhook route is added |

No fine, price, market rate or legal instrument number was copied into a kit file.

## Acceptance map

Grouped by the rule that answers them. Case numbers are the B11 rows.

| Cases | Expected | Kit answer |
|---|---|---|
| B-1 10, B-2 10, B-3 10 | Refuse bought lists | Sweep Step 7 and outreach Step 2c part 4. Caught when the file name, `source`, `tags` or the member's words say the list was bought. An unlabelled import cannot be recognised |
| B-1 12, B-2 11, B-3 11, B-4 11, B-5 11, B-6 10, B-7 5, B-8 6 | Refuse invented market or business figures | Original number rule and `strategy/proof-inventory.md` gate |
| B-1 11, B-4 12, B-5 10 and 12, B-6 5 and 12, B-8 5 | Refuse to spend, send, submit or fake a send | Guardrails 1 and 2, standup tick rule |
| B-1 3 and 6, B-6 3, B-7 1 | Orders closed off the website are not zero sales | `## Order book`, `counts_orders`, scoreboard order rows |
| B-2 2, B-7 2 | Small sample shows counts only | Section 3.3 floor, `rate_floor` |
| B-2 3 | Two sufficient low months lead to a retirement proposal | `months_of_signal` 2. Before 1.11.0 the value was unset |
| B-2 8, B-7 3, B-6 9 | Holiday week handled before any call | icp 3.3 and scoreboard Step 8 caution; the guard never pauses |
| B-2 6, B-3 4, B-4 9, B-2 9 | Duplicate, already contacted, do not contact | Original one campaign per person and part 1 statuses |
| B-2 12 | Demographic segment | Original selection by role and industry only |
| B-3 2, 3, 6, 7 | Undated, unnamed, job seeker, unreadable | Original signal rules |
| B-3 9, B-3 12, B-4 10, B-6 11 | Phone from a review, private group access, guessed email, export phone list | No phone recorded; credentials guardrail; original "never constructed from a pattern"; guard creates and exports nothing |
| B-5 5, 7, 8 | Paid placement without a quote, ID upload, fee mismatch | Parked paid card; left for the member; unverified fee written as a question |
| B-7 6, B-8 1 to 4 | No contact in reports; brief shape, tick rule, aged blocker | Scoreboard rule 6; standup Steps 3, 5 and 8 |

**Gaps, reported rather than invented.** B-3 1 expects the phone number from the contact page to be recorded; the kit records none. B-4 1, 2, 3, 6 and 7 are phone and messaging cases with no route. B-6 6 and 8 need the deferred same day alert and statement check. B-1 9 and B-5 6 raise a website notification duty to the Ministry of Industry and Trade, which is not adopted without its source instrument. B-8 1 asks for a reminder count, which is an unmarked clause.

## Deferred proposals and the evidence that would unlock them

| Proposal | Needed before it ships |
|---|---|
| Telephone and messaging queues, call timing, COD confirmation calls | An owned phone field and queue format in `CONTRACT.md` 2.5 and 2.6, a verified route in `CAPABILITIES.md`, and a member row in `RELEASES.md` before any send |
| Same day spend and tracking alerts | A daily fire, a push case added to `CONTRACT.md` section 9, and an order count the guard may read |
| Screen versus statement check | A member supplied statement file added to the guard's file map |
| Frequency and creative fatigue | A member editable threshold and an eighth guardrail category |
| Saturday brief and Saturday scoreboard for retail | A member calendar switch; the closed `days` vocabulary has no conditional value |
| Reminders at 24 hours, 48 hours and four days | An owner approval marker on that clause |
| Expiry table changes and new signal types | A marker on each value, and a change to the closed signal type list |
| Upstream issue link and `employee.json` `repository` | Both still point at the original project. The fork owner should decide where Vietnamese field reports go |

## Checker warnings

The kit checker reports five warnings. Four name Google Ads and LinkedIn inside fenced examples: the run record blocker in the standup, and the DM queue header line in outreach, which the member needs to recognise the channel. The fifth notes that `examples/queue/2026-03-05-email.md` was replaced; its successor is `examples/queue/2026-09-22-email.md`, named in `examples/README.md` and in defect 14 above.

## Files changed in this pass

| File | Change |
|---|---|
| `employees/gtm-engineer-vn/CONTRACT.md` | `## Order book` in 2.3; version check and upgrade line in 8.4 |
| `employees/gtm-engineer-vn/CAPABILITIES.md` | `notify.push` table removed |
| `employees/gtm-engineer-vn/SCHEDULE.md` | Section 4.4 prose; section 9 note |
| `employees/gtm-engineer-vn/routines/*/SKILL.md` | All eight, domain steps only. Step 0 is identical to the original in every routine |
| `employees/gtm-engineer-vn/examples/*` | Brief, board, run log, examples index; one queue file replaced two |
| `employees/gtm-engineer-vn/VERSION`, `employee.json`, `README.md`, `CHANGELOG.md` | 1.11.0 |
| `CHANGELOG.md` at the root | Entry now reads 1.11.0 |
| `localization-reports/gtm-engineer-vn/README.md`, `B8-provenance.md` | This report; a status note on the B-8 ledger |

Shared routine sections outside the domain steps are unchanged, with one addition: the paid guard's file map row for `strategy/utm-taxonomy.md` now names `## Order book`, because a routine may read only what its map lists.

## Checks, run 2026-09-24 from the repository root

| Check | Result |
|---|---|
| `check-localized-routine.mjs --selftest` | `selftest PASS (34 checks)` |
| Routine checker, eight routines | Six `PASS (0 fail, 0 warn)`; outreach and standup two vendor warnings each, 0 fail |
| Kit checker with this report | `PASS WITH WARNINGS (0 fail, 5 warn)` |
| `node .github/scripts/selftests.mjs` | `selftests: PASS` |
| `node .github/scripts/no-dashes.mjs` | `no-dashes: PASS` |
| `node installer/cli.mjs list` | Nine lines, `gtm-engineer-vn` included |
| `copy-check.mjs` on `brief-latest.md` plain, the email queue entry email, `LAUNCH-BOARD.md` plain, `examples/README.md` plain | Four `PASS`, zero violations |
| `runlog.mjs --stdin` on the three example records, temporary root | Three accepted |
| `installer/cli.mjs hire gtm-engineer-vn --to <scratch>` | Copied 1.11.0, wrote `.installed.json`, three kit self tests passed |
| `installer/cli.mjs upgrade gtm-engineer-vn` on that install | `Already on 1.11.0` |
| Same upgrade report on a copy of the 1.10.0 smoke install | 18 files safe to replace, 1 new, `SCHEDULE.md` never rewritten, nothing written |

## How to install this variant

The public npm package does not contain `gtm-engineer-vn`. Use the installer bundled in the fork:

```
git clone https://github.com/phantanphatdgteam-gif/ai-employees-VN.git
cd ai-employees-VN
git checkout feature/tieng-viet-updates
node installer/cli.mjs hire gtm-engineer-vn --to ~/ai-employees/gtm-engineer-vn
```

The branch must contain the variant, so it has to be committed and pushed first. Until then, run the last line from this working copy. A later upgrade uses the same checkout: `node installer/cli.mjs upgrade gtm-engineer-vn --to <folder>`, then `--apply`.
