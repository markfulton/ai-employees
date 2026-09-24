# sales-employee-vn: strings that stay in English

Grepped on 24/09/2026 from the original kit `employees/sales-employee` (routines, `CONTRACT.md`, `INSTALL-PROMPT.md`, `SCHEDULE.md`, `ROLE.md`, `CAPABILITIES.md`, `README.md`, `examples/`, `scripts/`). Every string below is read by more than one file or parsed by a script. Writers keep each one byte for byte in the variant. Where the member reads one, a fixed Vietnamese line may follow it, never replace it (STYLE-VI).

Routine ids are shortened: setup, sweep, first-touch, followup, review, refresh, standup (all with the `sales-` prefix).

## Parsed by a script

| String | Parser | Also read by |
|---|---|---|
| `SCHEDULE.md` row shape: eight pipe separated cells in the order routine, days, fire, window_start, window_end, key, budget, browser; id, days and key in backticks, times as HH:MM, budget as `N min`; the header row names those eight columns | `scripts/guard.mjs` regex `ROW` | every routine Step 0, `run/*.cmd.example`, installer |
| Day vocabulary `mon-fri`, `fri`, `first-weekday`, `last-weekday`; key formats `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM`; browser values `never`, `read only`, `light`, heavy lanes | `guard.mjs` | `SCHEDULE.md` section 3, `CONTRACT.md` |
| `PAUSED` file name and its one routine id per line | `guard.mjs` | `CONTRACT.md`, `INSTALL-PROMPT.md` |
| Run record fields `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and optional `model`, `harness`, `turns`, token fields, `cost_usd`, `cost_basis` | `scripts/runlog.mjs` | every routine's run record step, `CONTRACT.md` 4.1 |
| The eight statuses `ok`, `partial`, `failed`, `skipped-paused`, `skipped-out-of-window`, `skipped-already-ran`, `blocked-login`, `blocked-browser-busy` | `runlog.mjs`, `guard.mjs` verdicts | all seven routines, `CONTRACT.md`, `CAPABILITIES.md` |
| `UNRECORDED RUN` heading at the foot of `brief-latest.md` | read by the next run and the standup | all seven routines, `CONTRACT.md`, `CAPABILITIES.md` |
| `strategy/voice.md` headings `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy` (the value must contain `none` to ban hashtags) | `scripts/copy-check.mjs` (lower cased heading match) | setup writes them, `CONTRACT.md` |
| `strategy/proof-inventory.md` headings `## Member claims`, `## Agent sourced` | `copy-check.mjs` | setup, refresh, review, first-touch, followup, standup, `CONTRACT.md`, `INSTALL-PROMPT.md`, `ROLE.md`, `README.md` |
| Sentinels `«paste at send time»` and `«member: paste the detail»` | `copy-check.mjs` rule 3 | first-touch, followup, refresh, `CONTRACT.md`, `ROLE.md` |
| Destinations `email`, `dm`, `form`, `strategy`, `dashboard`, `plain` | `copy-check.mjs --dest` | drafting routines' copy check step |
| Id shapes exempt from the number check: `C-<n>` cards, `c-<nnnn>` contacts, `E-`, `D-`, `F-<nn>` queue entries, `step: <n>`, ISO dates, ISO weeks, `YYYY-MM`, clock `HH:MM` | `copy-check.mjs` rule 2 exemptions | queue files, brief, pipeline |

## Ledgers and state (JSON keys and values)

| String | Writers | Readers |
|---|---|---|
| `crm/prospects.jsonl` keys (`prospect_id`, `contact_id`, `first`, `name`, `company`, `account_url`, `role`, `industry`, `email`, `linkedin_url`, `segment`, `campaign`, `source`, `source_url`, `read_on`, `expires_on`, `tests_passed`, `tests_failed`, `evidence`, `status`, `off_limits`, `off_limits_reason`, `recipe`, `recipe_version`) | sweep, first-touch, member | standup, followup, review, refresh |
| Prospect statuses `qualified`, `disqualified`, `expired`, `queued`, `dismissed` | sweep, first-touch, member | same |
| `crm/contacted.jsonl` statuses, eight and no ninth: `queued`, `dropped`, `sent`, `replied`, `booked`, `won`, `lost`, `do_not_contact` | first-touch, followup, standup, member | all seven |
| `crm/contacted.jsonl` `channel` values `email` or `linkedin` | first-touch, followup | all seven. **Vietnam note:** adopting call and Zalo first (Phần A 100a, 172) needs new channel values. That is a `CONTRACT.md` change in the variant with every reader updated together, never a translation |
| `by` values: the routine id or `member` | all writers | all readers |
| `crm/contacts.csv` header `contact_id,first,name,company,account_url,role,email,linkedin_url,segment,campaign,tags,source,added_on` and the marker line `# --- agent rows below this marker, append only, never edit above it ---` | setup, sweep | first-touch, followup, `CONTRACT.md` |
| Card fields: `type` in `reply`, `meeting`, `research`, `copy`, `verify`, `handoff`; `stage` in `new`, `in-conversation`, `meeting-booked`, `proposal`, `closed`; `status` in `todo`, `working`, `blocked`, `parked`; authority `member-action`, `local-artifact` | followup, review, refresh, setup write `pipeline/inbox.jsonl` | standup (only writer of `pipeline/pipeline.json` and `PIPELINE.md`) |
| `PIPELINE.md` stage headings `## new`, `## in-conversation`, `## meeting-booked`, `## proposal`, `## closed` and card lines of the shape tick box, `C-<n>`, text, `due YYYY-MM-DD`, authority, separated by pipes in the real line | standup | standup next morning (ticks), member |
| State files `state/sales-<id>.json`, `state/browser-lock.json`, `state/pushes.jsonl`, `state/kit-update.json`, `mailbox_drafted[]`, `queued_ttl_days` | each routine | standup (veto line), sibling routines |
| The not knowing vocabulary (`CONTRACT.md` line 717): `n/a (<reason>)`, `not tracked`, `stale (<date>)`, `baseline day`, `baseline week`, `baseline month`, `no sends recorded`, `no replies read`, `no rows captured`, `no drafts composed`, `no follow ups due`, `n/a (drafts count not read)`, `n/a (query not confirmed)`, `n/a (below the rate floor, «n» of «floor» sent)`, `n/a (evidence floor, «n» of «floor» rows)`, `not tested (worked «n» of «m» scheduled runs)`, plus `n/a (mailbox draft record not found)` and `n/a (query cannot be set without typing)` | all | standup, review, refresh, `CONTRACT.md` |

## Headings and lines read across files

| String | Readers |
|---|---|
| `## Corrections` | every routine reads its own at the top of each run; `CONTRACT.md`, `ROLE.md`, `CAPABILITIES.md`, `SCHEDULE.md`, `INSTALL-PROMPT.md`, `README.md` |
| `brief-latest.md`: `## Today`, `## Waiting on you`, `## Blocked` | standup writes; `CONTRACT.md` section 5; examples |
| Queue entry headings `## F-<nn>` and field lines `- id:`, `- to:`, `- channel:`, `- segment:`, `- step:`, `- framework:`, `- why this person:`, `- evidence:`, `- subject:` and the tick line `- [ ] sent` (`[x] sent` when ticked) | first-touch and followup write; standup reads the ticks; `CONTRACT.md` |
| Queue file names `queue/YYYY-MM-DD-first-touch.md`, `queue/YYYY-MM-DD-followup.md` | first-touch, followup, standup, setup, `runlog.mjs` notes |
| `strategy/accounts.md`: `## Mailbox`, `## Other accounts` | setup writes; first-touch, followup, `CAPABILITIES.md`, `ROLE.md` |
| `strategy/offer.md`: `## What is sold`, `## Working days and hours`, `## Claims found on your own site`, `## Price and billing shape`, `## Countries sold into`, `## Landing URL`, `## Buy URL` | setup writes; review and standup read working days; `INSTALL-PROMPT.md` |
| `strategy/voice.md`: `## Samples`, `## Dash policy` (plus the four parsed headings above) | setup, `CONTRACT.md` |
| `strategy/buyer.md` segment headings `## <segment-id>: <segment name>` and `where_they_appear:` | setup writes; sweep, refresh |
| `strategy/qualification.md` test headings `### <test-id>: <test name>` | setup and refresh write; sweep reads, `INSTALL-PROMPT.md` |
| `strategy/message-library.md` framework headings `## <framework-id>: <framework name>` | setup writes; first-touch, followup |
| `## Sources discovered this run`, `## Sources retired this run` | sweep writes; refresh, setup read |
| `## Review settings` in `review/manual.md` | review, `INSTALL-PROMPT.md`, `CONTRACT.md` |
| `## Decision` | refresh, `CONTRACT.md` |
| `## Read screens` | setup, `CONTRACT.md` |
| `## What changed about me`, `## About this kit`, `## For other employees`, `## Notes` | standup, `CONTRACT.md`, `ROLE.md` |
| Brief lines `Assumption:` and `Strategy change:` and the club footer line `Guided version, updates and premium employees:` | standup, `INSTALL-PROMPT.md`, examples |
| File names `strategy/CHANGELOG.md`, `crm/qualified-latest.md`, `crm/fallback-YYYY-MM-DD.md`, `crm/<ledger>-quarantine-YYYY-MM-DD.log`, `recipes/BROWSER-RECIPES.md`, `recipes/<flow>.json` | several routines |
| Recipe names `read-linkedin`, `verify-the-query`, `fill-a-field`, `click-an-element`, `login-wall`, `mailbox-compose`, `mailbox-reply-search`, `mailbox-compose-followup`, `buyer-gathering-place` | sweep, first-touch, followup, `recipes/BROWSER-RECIPES.md` |

## What a writer may put in Vietnamese

The member's lines under these headings (brief lines, card titles, queue entry bodies, draft text, reasons), each written per STYLE-VI. A draft body for a Vietnamese prospect is Vietnamese. The field names, the tick line and the headings stay English.

## Known checker gaps (D6)

`copy-check.mjs` counts English nouns and `$ £ € ¥` currency only. A Vietnamese amount in `đ` or `đồng` and a Vietnamese count (`12 đơn`, `30 cuộc gọi`) pass without a proof check. The script stays byte identical, so a writer checks Vietnamese figures against `strategy/proof-inventory.md` by hand.

## Added in the variant, read across files (integrator pass, 24/09/2026)

| String | Writer | Readers |
|---|---|---|
| Tag shapes `consent-email-YYYY-MM-DD`, `consent-linkedin-YYYY-MM-DD` in `tags`, above the marker only | the member | `sales-first-touch-drafts`; `CONTRACT.md` 10.3; `INSTALL-PROMPT.md` Phase 6 |
| `notes` clause `N qualified held: no consent record in crm/contacts.csv` | `sales-first-touch-drafts` | `sales-desk-standup` (one line under `Waiting on you`) |
| `strategy/offer.md` heading `## Legal identity` | `sales-desk-setup` | `CONTRACT.md` 2.3 and 10.2 |
| `strategy/voice.md` heading `## Form of address` | `sales-desk-setup` | `sales-first-touch-drafts`, `sales-followup-sweep`, `sales-desk-standup` |
| `strategy/buyer.md` field `influencer:` | `sales-desk-setup`, then `sales-qualification-refresh` | both, `CONTRACT.md` 2.3 |
| `evidence_floor.reviewed_weeks`, `evidence_floor.opt_outs_per_framework` | shipped in `CONTRACT.md` 2.7 | `sales-qualification-refresh` |
| `followup_floor{}` with `reached` and `next_steps` | `sales-pipeline-review` state | `sales-pipeline-review`; `CONTRACT.md` 2.7 |
| `resting_sources[]` | `sales-qualification-refresh` state | itself |
| `disabled_until`, `rows_read`, `rows_contactable`, `caps.source_rest_days`, `caps.yield_sample_rows`, `caps.yield_floor_percent` | `sales-prospect-sweep` state | itself, `sales-qualification-refresh` |
| `CAPABILITIES.md` heading `## Platform terms, Vietnam` | shipped | `sales-prospect-sweep` by name; the other routines by file |
| Digest line heading `Nguồn em không đọc hôm nay` | `sales-prospect-sweep` | the member |

`channel` in `crm/contacted.jsonl` and `strategy/message-library.md` is unchanged (`_shared/patch-log.md`, contradictions).
