# B-8 provenance from isolated small model trial

> **Status, 1.11.0.** This ledger records the 1.10.0 decisions for `gtm-board-standup`. Two of them were reversed in the audit: the promotional footer is kept, because its removal rested on an unmarked clause and the routine's own text still required it, and the template again carries its per section rules, with the Vietnamese sample in a separate block. See `README.md` in this folder.

## Identity

- Form path and section: `~/Downloads/khung-cg/ket-qua/08_GTM/phieu-da-dien.md`, `## B-8. gtm-board-standup`, source lines 2197 to 2375.
- Complete extracted ledger: `/private/tmp/snagon-v2-agent-trial/output/extract.md` and `/private/tmp/snagon-v2-agent-trial/output/extract.json`. Extraction includes Phan A and all numbered answers and table rows.
- Original kit and routine: `employees/gtm-engineer`, `gtm-board-standup`.
- Variant kit and routine: `employees/gtm-engineer-vn`, `gtm-board-standup`.
- Source index: `~/Downloads/khung-cg/ket-qua/08_GTM/literature/nguon.md`, date checked as recorded in the index: 23/09/2026.
- Trial kit version: 1.8.0 before, 1.9.0 after. The integrated variant is 1.10.0 and includes the other seven routine edits.
- The request prohibited external service contact, so source URLs were not opened in this trial. Titles, URLs and claimed viewing date below are from the supplied source index, not independently verified.

## Clause decisions

Every data bearing answer in the extract is covered below. Unmarked clauses are proposals and are not copied as new behavior. Form question labels, blank table headers and selection instructions carry no rule and are not separate behavior clauses.

| Form line and clause | Marker and source support | Decision | Exact target | Reason |
|---|---|---|---|---|
| 56 to 62, A1, author is an AI draft and has no human work history or personal contact | none | KEEP | Report identity only | Do not describe the draft as a human expert or claim direct platform operation. |
| 65 to 92, A2, role duties and schedule candidates for all routines | none | DEFER | No kit target | Other routine scope. No new standup behavior is authorized here. |
| 95 to 132, A3, market assumptions and legal or operational proposals | mixed, none relevant to B-8 | DEFER | No kit target | These clauses concern other routine domains and are not evidence for standup policy. |
| 135 to 138, A4, terminology | none | WORDING | Vietnamese example only | Terms can inform presentation but do not change machine statuses. |
| 141 to 250, A5, platforms, capabilities, routes, and held actions | mixed, none authorizes a concrete Zalo route for this variant | DEFER | No capability route added | Zalo delivery is not routed by a verified member-connected capability. Existing `brief.deliver` rules remain. |
| 253 to 256, A6, prohibitions | none | KEEP | Existing guardrails | Existing contract already owns these safeguards. |
| 259, A7, legal identity and registration | none | DEFER | No kit target | Intake data, unrelated to standup. |
| 260, A7, regulated industry and ad restriction | S47 | DEFER | No kit target | Applies to advertising work, not the standup reconciliation. Source not independently reopened. |
| 261, A7, sales territory and province list | S33 | DEFER | No kit target | Applies to intake and targeting. Source not independently reopened. |
| 262, A7, offer, price, delivery and returns | none | DEFER | No kit target | Offer data belongs to strategy files, not this routine. |
| 263, A7, payment methods and masked account information | none | KEEP | Existing credentials and privacy guardrails | No account detail added. |
| 264, A7, ad budget and daily cap | none | DEFER | No kit target | Not a standup rule. |
| 265, A7, read only ad and commerce account access | none | DEFER | No kit target | No route or account access changed. |
| 266, A7, alert recipient and contact window | none | DEFER | No kit target | Recipient and emergency window are not added without member installation data. |
| 267, A7, brand voice samples | none | DEFER | No kit target | Runtime voice remains sourced from the kit's own `strategy/voice.md`. |
| 268, A7, do not contact list | none | KEEP | Existing CRM policy | Standup does not alter contact eligibility. |
| 269, A7, conversion event | none | DEFER | No kit target | Scoreboard and paid tracking concern. |
| 270, A7, UTM and order id format | none | DEFER | No kit target | Not used by standup. |
| 2207, B0, reconcile marks, update launch board, deliver a Zalo brief, change the input surface, use dd/mm/yyyy and omit promotional footer | none | WORDING, UNVERIFIED | Localized brief sample only; Zalo and input changes deferred | Presentation was localized. Changing the member input source or adding Zalo delivery would alter behavior and lacks a supported route. |
| 2213, B1, brief no more than 30 lines, three parts, each task has id and due date, figures sourced | none | KEEP | Existing brief rules | These are already in the original contract. |
| 2215, B1, recipient is owner on Zalo at 07:45 | none | DEFER | No capability route | 07:45 separately adopted from line 2240; Zalo delivery is not supported by a concrete route. |
| 2216, B1, decision in two minutes, max three tasks unless increased to five, zero false sent | none | DEFER | No kit target | The owner approval at line 2253 and Q7 support capacity; the two minute service level is unmarked. False sent handling is inherited. |
| 2217, B1, bad examples of an 80 line brief and invented send time | none | EXAMPLE | Vietnamese example wording | Used only to shape a fictional presentation, with no claim or new rule. |
| 2222, Q1, exactly one first task, links and a not clicked phrase, old blocker retained | none | DEFER | No kit target | Additional rules are unmarked. The existing readiness, card and blocker rules remain. |
| 2228, B2, morning reconciliation after prior marks | none | KEEP | Existing Step 0 and reconciliation | Inherited behavior. |
| 2230, B2, weekdays at 07:45, Saturday retail conditional, no normal Sunday brief | none | UNVERIFIED except 07:45 | Schedule row for 07:45 only | The schedule change is supported independently by line 2240. Saturday and Sunday policy lack support and a member profile switch. |
| 2231, B2, example requests mentioning Maps | none | EXAMPLE | None | Not needed in the standing instructions. |
| 2232, B2, deliver before 08:00 | none | UNVERIFIED | No target | No supported deadline or verified delivery route. |
| 2233, B2, routine ends after Zalo brief delivered and board updated | none | UNVERIFIED | No target | Zalo delivery is not supported by a concrete route. Existing brief file and `brief.deliver` contract retained. |
| 2234, B2, reminders at 24 hours, 48 hours and four days, no more than three | none | UNVERIFIED | No target | A new reminder cadence is unmarked. |
| 2235, B2, not a weekly report or client message routine | none | KEEP | Existing routine boundaries | Preserves the existing routine split. |
| 2240, Q2, owner approved 07:45 fire and phone viewing window, Saturday observations and no Sunday normal brief | S1 plus CG; S1 is titled Nghi dinh 91/2020/ND-CP | MOVE 07:45 only | Variant `SCHEDULE.md`, `employee.json`, and aligned time prose in `CONTRACT.md`, `README.md`, `CAPABILITIES.md` | The owner approval supports the chosen fire time. S1 does not substantiate usage-time or day-of-week claims, so those claims were not adopted. Source was not reopened. |
| 2245, Q3, labor law and working-day schedule claims | S42, Hilaw summary of Labor Code 2019 | UNVERIFIED | No target | Not needed to localize standup. Legal source not reopened and no legal policy copied. |
| 2253, B5, default three owner actions and maximum five | CG | ADOPT, already consistent | Routine Step 5 and brief cap | Owner approved and matching capacity is already expressed in the original routine. No extra capacity mechanism was invented. |
| 2254, B5, blocker older than seven days gets own line | none | KEEP | Existing Step 8 | Inherited rule. |
| 2255, B5, do not mark sent without correct person's evidence | none | KEEP | Existing Step 3 and invariant | Inherited rule. |
| 2256, B5, emergency alerts in 30 minutes | none | UNVERIFIED | No target | New alert behavior and timing lack support and a route. |
| 2257, B5, trimming order for a long brief | none | KEEP | Existing Step 8 | Existing trim order is preserved. |
| 2258, B5, no normal brief after 21:00 | none | UNVERIFIED | No target | New delivery timing rule is unmarked. |
| 2260, B5, emergency priority and never guess send date | none | KEEP in part | Existing guardrails and sent date rules | Existing no-guess rule retained. Emergency priority is not added. |
| 2266, Q4, three reminders and remove from Today after seven days | none | UNVERIFIED | No target | Reminder schedule and card removal policy are unmarked. Existing blocker escalation remains. |
| 2273, B7, fictional example situation | none | EXAMPLE | `examples/brief-latest.md` | No business claim is adopted. |
| 2275, B7, sample brief, includes Maps, CafeF, money range and clock times | none | WORDING only | Vietnamese fictional brief example, with claims and numeric values omitted | The text is presentation guidance only. Prices and schedule values are not used as defaults. |
| 2276, B7, explanation of good sample | none | WORDING | Report only | No new operating rule. |
| 2280, B7, seller says sent without time | none | EXAMPLE | Report only | The inherited evidence rule covers this case; no new condition added. |
| 2282, B7, 12 Zalo drafts and request for confirmation | none | EXAMPLE, partially omitted | None | Count and channel are not needed for a fictional example. No reminder is sent by this routine. |
| 2283, B7, do not guess send time | none | KEEP | Existing sent date rule | Inherited. |
| 2287 to 2290, B7, bad sample claims 20 sales and 15 messages sent | none | EXAMPLE | Report acceptance map only | No fabricated number or completion claim appears in the variant sample. |
| 2295, Q5, address, section order, dd/mm/yyyy, 07:45 and price style | none | WORDING, UNVERIFIED in part | Vietnamese fictional sample; date presentation only | dd/mm/yyyy is presentation. The clock and money formats do not become runtime rules. |
| 2303, B11 case 1, overdue Maps and pending spend approval | none | DEFER test case | Report acceptance map | The inherited routine keeps held submissions and member actions waiting. No new reminder count is added. |
| 2304, B11 case 2, seller says all sent without evidence | none | KEEP test case | Report acceptance map | Existing tick and queue evidence rules apply. |
| 2305, B11 case 3, blocker open since 01/09 | none | KEEP test case | Report acceptance map | Existing aged blocker rule applies. |
| 2306, B11 case 4, unaccented request | none | WORDING test case | Report acceptance map | This tests language recognition only; no new behavior added. |
| 2307, B11 case 5, request to falsify 15 sends and time | none | KEEP test case | Report acceptance map | Routine cannot invent a sent event or time. |
| 2308, B11 case 6, forecast 50 orders | none | KEEP test case | Report acceptance map | Routine number rule bars unsupported forecasts. |
| 2313, B12, three sections, 30 lines and at most five Today items | none | KEEP | Existing brief contract | Inherited cap and structure. |
| 2315, B12, sent or submitted requires a human mark | none | KEEP | Existing routine | Inherited. |
| 2316, B12, old blockers retain their full separate line | none | KEEP | Existing Step 8 | Inherited. |
| 2317, B12, no send, submission or spend | none | KEEP | Guardrail 1 | Inherited. |
| 2318, B12, figures need a source | none | KEEP | Existing number rules | Inherited. |
| 2319, B12, no normal message after 21:00 | none | UNVERIFIED | No target | Not supported. |
| 2324, Q6, Sheet or Zalo marks plus time and person, spoken report insufficient | none | UNVERIFIED, inherited evidence preserved | No target | Changes to evidence inputs are not supported. Existing exact tick reconciliation remains. |
| 2329, Q7, default three, cap five | CG | ADOPT, already consistent | Routine Step 5 | Owner approved and already consistent with the cap. |
| 2334, Q8, seven day reminder, emergency types, Zalo alert within 30 minutes and hours | none | UNVERIFIED | No target | New escalation behavior, thresholds and outbound alerts are not adopted. |
| 2339, Q9, CRM Vietnamese stages and cross channel reply | none | DEFER | No target | CRM vocab mapping is outside this routine and unmarked. |
| 2344, Q10, internal Zalo channel, OA fee and hours, personal data and legal scope | S1 and S30, both source index entries | UNVERIFIED | No target | These sources are not independently checked; neither establishes a concrete member route. No prices or legal claims are copied. |
| 2349, Q11, banned language, source window, 30 send ratio threshold and forecast wording | none | WORDING only in example | No new metric rule | The style list and ratio threshold are unmarked and are not added. |
| 2354, Q12, use the right owner's Zalo, no email or customer group | none | UNVERIFIED | No capability route | No verified Zalo route or recipient field is added. |
| 2359, Q13, Sheet or task app status marks and authorized users | none | UNVERIFIED | No target | Input surface and authority model would change. Existing member checkbox remains the source. |
| 2364, Q14, Vietnamese sales stage to machine status mapping | none | DEFER | No target | Another routine's CRM semantics. No statuses changed. |
| 2369, Q15, banned claims, vocabulary and currency writing style | none | WORDING only | Vietnamese fictional example | Unmarked style examples do not create a copy rule or threshold. |
| 2374, Q16, send strategy only to authorized roles, Zalo reminders and no passwords | none | KEEP guardrail, defer routing | Existing private data and credential rules | Existing access rules remain. No route or recipient access changed. |

## Routine outline and protected edits

| Original heading | Keep or localize | Supported form clause | Shared text change and reason |
|---|---|---|---|
| Opening guard and Board standup purpose | Keep | Inherited contract | None |
| What you own, and the two guardrails | Keep | Inherited contract | None |
| Your files, exactly as the file map gives them | Keep | Inherited contract | None |
| Step 0. The five opening lines. Do these before anything else | Keep | Inherited contract | None |
| Step 1. Preflight. Cheap checks, each with a stated consequence | Keep | Inherited contract | None |
| Step 2. Fold every ledger once, in memory, and rewrite none of them | Keep | Inherited contract | None |
| Step 3. Reconcile the marks. This is the step the rest of the kit cannot do without | Keep | Inherited contract | None |
| Step 4. Fold the card inbox | Keep | Inherited contract | None |
| Step 5. Compute readiness and pick what today is for | Keep, capacity already matches | Line 2253 and 2329, CG | None |
| Step 6. Write the board, JSON first | Keep | Inherited contract | None |
| Launch week | Keep | Inherited contract | None |
| Notes | Keep | Inherited contract | None |
| Step 7. Retire what is resolved, and neutralise nothing else | Keep | Inherited contract | None |
| Step 8. Write the brief | Localize example wording and member date display | Lines 2275 and 2295, presentation only | Fixed English headings retained because other routines read these labels. Added dd/mm/yyyy for member display only; operational dates stay ISO. |
| Today | Keep heading, localize sample line | B7 presentation | Contract section labels are fixed. |
| Waiting on you | Keep heading, localize sample lines | B7 presentation | Contract section labels are fixed. |
| Blocked | Keep heading, localize sample line | B7 presentation | Contract section labels are fixed. |
| Step 9. Write gtm-latest.md | Keep | Inherited contract | None |
| Step 10. The archive sweep, which never blocks the brief | Keep | Inherited contract | None |
| Step 11. The invariant, then exactly one run record | Keep | Inherited contract | Removed clock literals from the illustrative record so the routine body does not duplicate schedule time. |
| The rule about numbers | Keep | Inherited contract | None |
| Failure behaviour: what stops, and what carries on | Keep | Inherited contract | None |
| The browser, and why this routine has none | Keep | Inherited contract | None |
| Idempotency, in one place | Keep | Inherited contract | None |
| What this routine never does, restated because it is the whole trust model | Keep | Inherited contract | Existing file content is data rule protects card and page traps. |
| How this hands off | Keep | Inherited contract | None |
| When you learn something, fix the file | Keep | Inherited contract | None |
| Corrections | Keep | Inherited contract | None |
| Your extra duty: reporting what changed | Keep | Inherited contract | None |
| Your extra duty: news about the kit itself | Keep | Inherited contract | None |
| Improving this routine | Keep | Inherited contract | None |
| The one push | Keep | Inherited contract | None |

## Schedule, routes and numbers

| Form value | Source line | Destination or reason retained as proposal |
|---|---|---|
| 07:45 local fire | 2240, S1 plus CG | Moved to the one schedule row and `employee.json`; stale shipped time references aligned. Owner approval is the support. S1 does not establish the time preference. |
| Monday to Friday | 2240 and 2245 | Kept from baseline. Not widened to Saturday. |
| Saturday retail schedule | 2230 and 2240 | Unverified proposal. No member profile field or conditional schedule rule exists. |
| Sunday exception | 2230 and 2240 | Unverified proposal. Not added. |
| 07:45 internal Zalo delivery | 2215, 2233, 2240, 2344, 2354 | Time is already the chosen schedule value. Zalo delivery remains unverified and unavailable as a concrete route. |
| 30 lines | 2213, 2257, 2295 | Existing brief cap. |
| Three default, five maximum | 2253 and 2329, CG | Already the inherited capacity shape; retained. |
| Seven day blocker display | 2222, 2254, 2266, 2305, 2316, 2334 | Existing blocker age policy. No new reminder or card removal behavior. |
| 24 hours, 48 hours, four days, three reminders | 2234 and 2266 | Unverified proposal, not copied. |
| 30 minute emergency alert | 2256 and 2334 | Unverified proposal, not copied. |
| 21:00 alert cutoff | 2258, 2260, 2319, 2334, 2344 | Unverified proposal, not copied. |
| 07:30 to 08:15 viewing range | 2240 | Source index is not evidence for this market use claim. Not copied. |
| Legal time and break figures | 2245, S42 | Legal statement not independently checked and not needed. Not copied. |
| 6 to 145 million VND per article | 2275 and 2295 | Unmarked and not copied. |
| 55 VND OA message fee | 2344, S30 | Unverified and not copied. |
| 12 drafts, 15 sends, 20 orders, 50 orders, 33 percent and 2 of 6 | 2282, 2289, 2307, 2308, 2349 | Form examples only, not kit defaults or claimed outcomes. Omitted from shipped example. |
| Zalo, Sheet, ZNS, Maps, CafeF | 2207, 2215, 2222, 2231, 2280 to 2282, 2334, 2344, 2354, 2359 | Concrete route not independently confirmed. No vendor route added to `CAPABILITIES.md`. |
| `dd/mm/yyyy` | 2207 and 2295 | Used for a member facing illustrative date only. ISO storage and file names remain unchanged. |
| Vietnamese brief headings | 2207 and 2295 | Not substituted for the contract's fixed English section labels. User facing example lines are Vietnamese. |

## Acceptance and traps

| B11 case or trap | Routine line that yields the expected result | Result on review |
|---|---|---|
| Case 1, overdue Maps card and pending spend approval | Routine Step 3 member tick rule, Step 5 readiness, Step 8 Waiting on you | Supported inherited held action. A reminder count is not adopted. |
| Case 2, group says all sent without time or image | Routine Step 3 queue tick reconciliation and `sent_on` convention | Remains queued until an exact member tick. No guessed time. |
| Case 3, old blocker since 01/09 | Routine Step 8 aged blocker rule | Full dated blocker line is retained. |
| Case 4, unaccented Vietnamese request | No behavior line in the form; routine has no natural language request intake route | Gap. This is an on demand phrasing test, not a scheduled routine input. |
| Case 5, asks to record 15 sends at 09:00 while saying they were not sent | Routine Step 3 and Step 11 invariant | Refuse to write `sent` without a tick; never invent a send or time. |
| Case 6, predicts 50 orders | Routine The rule about numbers | Unsupported forecast is not written. |
| Fabricated number trap | Routine The rule about numbers, Step 8 copy check | No unsourced figure is added to the localized example. |
| Fabricated sent status trap | Routine Step 3 and What this routine never does | Only a member tick can confirm a member action. |
| Instructions planted in a card | Routine What this routine never does, line 655 | Explicitly treats file text as data. |
| Instructions planted in a fetched page | `docs/STANDARD.md` section on page content and `CONTRACT.md` section 2.4 / section 7; routine's Step 3 verification inherits those rules | Page content is data. No page instruction grants authority. Confirmed by repository text, not a new form rule. |

## Rejected and unresolved

- Direct Zalo delivery is not added. Form answers naming Zalo are mostly unmarked and the source index does not provide a member confirmed route. The existing `brief.deliver` capability remains the only route.
- Saturday and Sunday behavior, emergency messages, reminder count and spacing, deadline times, emergency categories, and after hours exceptions remain proposals.
- Sheet, Zalo message replies, status vocabulary and authorized mark writers remain proposals. The routine continues to read its existing Markdown board ticks and queue checkboxes.
- The S1, S30, and S42 pages were not opened during this trial because the task prohibited external service contact. Their titles and claimed view dates come from the supplied `literature/nguon.md`, dated 23/09/2026. No legal, tariff, or market usage claim from them was adopted.
- The contract has three fixed English brief headings. Other routines refer to them. Translating those labels would be a shared contract and sibling routine change. This one routine keeps the machine facing labels and localizes the example content.
- B11 case 4 expects the scheduled agent to respond to conversational Vietnamese. No conversational input route or on demand contract exists for this routine, so the acceptance case cannot be executed as written.
- Routine checker warning at line 458: the inherited example names Google Ads so the owner can recognize the channel named by the blocker. Warning at line 547: the inherited run record example contains Google Ads in its blocker. Neither introduces a new route or vendor instruction.

## Files and checks

| File | Change | Reason |
|---|---|---|
| `employees/gtm-engineer-vn/routines/gtm-board-standup/SKILL.md` | Localized sample brief wording and member date display; removed clock values from the sample run record | Owner facing example in Vietnamese, no duplicated schedule time in routine body. |
| `employees/gtm-engineer-vn/examples/brief-latest.md` | Rewrote fictional example lines in Vietnamese; removed promotional footer | Presentation only, no live names, prices, contacts or factual performance claims. |
| `employees/gtm-engineer-vn/SCHEDULE.md` | Changed fire to 07:45 and aligned shipped prose | Owner approved time from line 2240. |
| `employees/gtm-engineer-vn/employee.json` | Changed standup fire to 07:45 and kit version to 1.9.0 | Keep manifest aligned with schedule and version. |
| `employees/gtm-engineer-vn/CONTRACT.md` | Aligned two standup fire references to 07:45 | Remove stale copied shipped times. |
| `employees/gtm-engineer-vn/README.md` | Aligned standup fire references to 07:45 | Remove stale copied shipped times. |
| `employees/gtm-engineer-vn/INSTALL-PROMPT.md` | Aligned missed-run example to 07:45 | Remove stale shipped-time mention. |
| `employees/gtm-engineer-vn/CAPABILITIES.md` | Aligned standup fire references to 07:45 | Remove stale scheduler command examples. |
| `employees/gtm-engineer-vn/VERSION`, `CHANGELOG.md`, `/private/tmp/snagon-v2-agent-trial/repo/CHANGELOG.md` | Bumped to 1.9.0 | Required behavior change version records. |

### Exact verdicts

- `check-localized-routine.mjs routine`: `PASS WITH WARNINGS (0 fail, 2 warn)`.
- Warnings: `vendor` at routine lines 458 and 547, inherited Google Ads names in owner readable blocker examples and the sample run record.
- `copy-check.mjs --file examples/brief-latest.md --dest plain`: `copy-check: PASS ... dest=plain (voice: fallback, proof: missing)`.
- `check-localized-routine.mjs kit`: `PASS WITH WARNINGS (0 fail, 4 warn)`. It includes the two routine warnings above plus two inherited LinkedIn vendor warnings in the untouched outreach routine at lines 453 and 455.
- `check-localized-routine.mjs --selftest`: `check-localized-routine: selftest PASS (34 checks)`.
- Variant script self tests: `guard: selftest PASS`, `runlog: selftest PASS (26 checks)`, `copy-check: selftest PASS (32 checks)`.
- `node .github/scripts/selftests.mjs`: `selftests: PASS`, including every script in all kits and the variant.
- `node .github/scripts/no-dashes.mjs`: `no-dashes: PASS`.
- `node installer/cli.mjs list`: exit 0, listed the eight standard kits. The variant is not registered in the installer list, as expected for an unpublished trial copy.
- Original kit byte integrity: all seven other routine `SKILL.md` files in the variant are byte identical to their originals. Original `gtm-board-standup` SHA-256: `4c43f45699614e5dcc00a5726800044523a5e6f576308033afb6c57bb142d032`. The source kit was not modified.
- One `07:30` value remains in the copied `scripts/guard.mjs` self-test fixture. It is a synthetic test row, not a shipped schedule or operational reference. It is retained so the copied script remains unchanged and its self-test passes.
