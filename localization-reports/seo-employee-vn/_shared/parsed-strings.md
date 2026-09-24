# seo-employee-vn: strings that stay in English

Built on 24/09/2026 by grepping the original kit `employees/seo-employee` (routines, CONTRACT.md, INSTALL-PROMPT.md, SCHEDULE.md, CAPABILITIES.md, AEO-PLAYBOOK.md, standards/, recipes/, examples/, scripts/) and the repo checks that read it. Each string below is either read by more than one file or parsed by a script. **Writers keep every one of them byte for byte in English**, and write the member's Vietnamese lines under or beside them (STYLE-VI, precedent `gtm-engineer-vn` 1.11.0). A Vietnamese gloss may follow a token, never replace it.

## 1. Parsed by a script in `scripts/` (scripts are never edited)

| String or shape | Parser | Also read by | Note for writers |
|---|---|---|---|
| SCHEDULE row: eight pipe separated cells, routine id in backticks, days in backticks, fire, window_start, window_end as HH:MM, key in backticks, budget as `N min`, browser value | `guard.mjs` ROW regex; `evals/run.mjs` routine wiring; `.github/scripts/aeo-check.mjs` (original kit only) | every routine Step 0.1 | Columns, backticks, `min`, and the order never change |
| `days` tokens `mon-fri`, `mon` to `sun`, `first-weekday`, `last-weekday`, `off` | `guard.mjs` dayAllowed | CONTRACT 1.2, SCHEDULE section 3 | No Vietnamese day names in the row |
| Period keys `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `guard.mjs`, `runlog.mjs` PERIOD_SHAPE | CONTRACT 1.3, every state file | Member sees dd/mm/yyyy and a date range (D12); keys stay ISO |
| Browser values `never`, `conditional`, `heavy` | `guard.mjs` | SCHEDULE section 4, every routine 0.4 | |
| `PAUSED` file, one routine id per line | `guard.mjs` readPaused | every routine 0.0 | |
| `state/<id>.json` key `last_period` | `guard.mjs` readState | CONTRACT 2.7, every routine 0.2 | Also `progress`, `assumptions`, `budget_minutes_used`, `started` |
| Run record keys `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and optional `model`, `harness`, `turns`, `input_tokens`, `output_tokens`, `cache_write_tokens`, `cache_read_tokens`, `cost_usd`, `cost_basis` | `runlog.mjs` REQUIRED, OPTIONAL | CONTRACT 4, every routine final step | |
| Status values `ok`, `partial`, `failed`, `skipped-paused`, `skipped-out-of-window`, `skipped-already-ran`, `blocked-login`, `blocked-browser-busy` | `runlog.mjs` STATUSES | CONTRACT 4.1, every routine | Never a Vietnamese status |
| Output shape `path (+N label)`, e.g. `content/published.jsonl (+1 published)` | `runlog.mjs` examples and length caps | every routine | Run record fields stay English prose, 400 characters for notes |
| `push: sent`, `push: not available` in `notes` | CONTRACT 9.4 | 9 files | |
| `UNRECORDED RUN` fallback | CONTRACT 4 | 10 files | |
| Run record refusals: a ledger keyword (4 or more characters), a URL on a host not in `strategy/properties.md`, an email address, a guillemet, a newline, a secret shape | `runlog.mjs` | CONTRACT 4.2 | Never quote a Vietnamese keyword in `notes`. Six ASCII words of exactly four letters in a row match the `wordpress-app-password` shape: unaccented Vietnamese in `notes` can trip it, so notes stay English |
| `strategy/properties.md` property heading `## «host.tld»: «Name»` and any `https://` URL in that file | `runlog.mjs` loadOwnHosts | CONTRACT 2.3, `seo-intake-and-map` | Heading shape stays |
| `content/published.jsonl` and `content/drafts.jsonl` field `keyword` | `runlog.mjs` loadKeywords | CONTRACT 2.5, all eight | Vietnamese keyword values are fine; the key stays |
| `strategy/voice.md` headings `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy` (matched lower case) | `copy-check.mjs` loadVoice | CONTRACT 2.3, INSTALL-PROMPT, `seo-intake-and-map` | Vietnamese list items are fine. **The hashtag policy line must contain the English word `none`** to mean none; "không dùng" alone reads as allowed |
| `--dest article`, `strategy`, `plain` | `copy-check.mjs` | every routine that writes member text | |
| Metric rule: a digit shaped figure needs a kit path, a URL or a parenthesised clause on the same line; counted nouns are English (articles, links, days, impressions, clicks, people) | `copy-check.mjs` rule 2 | every copy.check call | Vietnamese counts ("12 bài") are not caught (known gap, D6); writers still put the source beside every figure |
| Observation fields `schema`, `id`, `run_id`, `question_set`, `question_id`, `question`, `surface`, `locale`, `mode`, `model`, `personalization`, `captured_at`, `available`, `answer_present`, `mentioned`, `cited`, `cited_urls`, `evidence`, `unavailable_reason`, `corrections`, `audience` | `answer-audit.mjs` | AEO-PLAYBOOK "Machine-readable observation fields", `seo-answer-visibility` | `question` may hold the exact Vietnamese question; keys and `surface`, `mode` labels stay |
| Routine ids and the CADENCE map | `runlog.mjs` | CONTRACT 1 | CADENCE lists seven ids and omits `seo-answer-visibility` (original script, not ours to fix) |

## 2. Headings read by more than one file

| Heading or line | Writer | Readers |
|---|---|---|
| `# «date»`, `## Today`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit` in `brief-latest.md` | `seo-standup` | CONTRACT 2.7, `examples/brief-latest.md`, `seo-draft-run`, `seo-calendar-refill`, the member; "Waiting on you" also named in CAPABILITIES and `seo-intake-and-map` |
| `## Corrections` (every strategy file, CONTRACT, every routine, standards, recipes, SCHEDULE, CAPABILITIES, ROLE, README, INSTALL-PROMPT) | member | every routine at the top of every run; `evals/run.mjs` cuts at the last one. Never edit text under it |
| `## SEO/AEO work` (after `## Corrections` in `seo-intake-and-map`, `seo-calendar-refill`, `seo-draft-run`, `seo-rank-review`, `seo-standup`) | kit | evals ignore everything below the last Corrections heading, so this block is outside the clock time eval; writers still keep clock times out |
| `strategy/properties.md`: `## Working days and hours`, `## Thresholds`, `## Search endpoint`, `## Corrections` | `seo-intake-and-map` | CONTRACT, INSTALL-PROMPT, ROLE, SCHEDULE, `seo-standup`, every routine reading thresholds, `CAPABILITIES.md` (search endpoint), CONTRACT 9.3 (push hours) |
| Property fields `publish_route`, `repository`, `branch`, `post_registry`, `post_prefix`, `sitemaps`, `editorial_conventions`, `hero_spec`, `country`, `search_screen`, `analytics_screen`, `operator_notes` | `seo-intake-and-map` | all eight |
| Threshold keys `runway_threshold`, `judgement_window`, `stall_window`, `sitemap_staleness_window`, `archive_window_days`, `refresh_share`, `request_allowance`, `per_property_request_cap`, `second_request_cap`, `data_lag_days`, `min_compare_days`, `win_position`, `distance_position`, `impression_floor`, `rate_floor`, `path_match_floor`, `scoreboard_max_lines`, `rank_latest_max_lines`, `refill_block` | `seo-intake-and-map` | CONTRACT 2.3, the routine that owns each |
| `strategy/topic-map.md`: `## Pillars`, `## Internal link map`, `## Retired`; pillar block `### «pillar-id»: «Pillar name»` with `property`, `intent`, `why_this_business`, `clusters`, `created`, `retired` | `seo-intake-and-map` | `seo-draft-run`, `seo-calendar-refill`, `seo-rank-review`, INSTALL-PROMPT |
| `strategy/voice.md`: `## Samples`, `## What is true of this voice`, `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy`, `## Dash policy` | `seo-intake-and-map` | `copy-check.mjs`, `seo-draft-run`, INSTALL-PROMPT |
| `strategy/CHANGELOG.md` line: five pipe separated fields, ISO date, routine id, file changed, what changed, evidence path (CONTRACT 2.3) | any routine that changes a strategy file | `seo-standup` (puts it under Waiting on you), `seo-intake-and-map`, member. The clause may be Vietnamese; columns and ISO date stay |
| `strategy/answer-map.md` row fields id, exact question, audience, locale/language, intent (`learn`, `compare`, `shortlist`, `buy`), target URL, evidence source, status | `seo-intake-and-map` | AEO-PLAYBOOK, `seo-answer-visibility`, `seo-calendar-refill`, `seo-draft-run`, INSTALL-PROMPT |
| `board/WORK-BOARD.md` line: `- [ ]` or `- [x]`, then four pipe separated fields, card id `C-nnn`, title, `due YYYY-MM-DD`, artifact path (CONTRACT 2.4) | `seo-standup` | member ticks; `seo-standup` reads ticks back. The title may be Vietnamese; the box, id, `due` and ISO date stay |
| Calendar entry field labels: Slug, Title, Primary keyword (with its intent), Secondary keyword, Competitors to beat, The angle, The distinct element, Question shaped outline, FAQ questions, Internal links, Call to action | `seo-calendar-refill` | `seo-draft-run` parses them ("an entry in a shape it does not read is an entry it skips silently"); `copy-check.mjs` selftest uses "Primary keyword" | Values may be Vietnamese; labels stay |
| `tracking/rank-latest.md` lines `Rank latest, week YYYY-Www, window ...`, `Source: scoreboard/...`, `Earning clusters, strongest first`, `Clusters earning nothing since their first article`, `Striking distance, oldest evidence first`, `Invisible after a second request`, `Not measured this week` | `seo-rank-review` | `seo-calendar-refill`, `seo-standup`, `seo-intake-and-map`, `seo-draft-run`, `seo-publish-run`, `seo-index-sweep` |
| Scoreboard `# Week YYYY-Www`, `## What moved`, `## Bands, per property`, `## Clusters`, `## Not measured`, `## Filed` | `seo-rank-review` | `seo-standup`, `seo-intake-and-map` read the file; the headings are named only in `seo-rank-review`, so a writer may add a Vietnamese gloss after each but should not replace them without grepping the reader routines again |
| Band words `winning`, `striking distance`, `invisible`, `watching` (variant only), `too new`, `unclassified`; scoreboard heading `## Báo cáo tuần` (variant only, written above `## What moved`); threshold keys `win_impression_floor`, `pause_age_days`, `pause_impression_floor`; cluster state `earning`, `nothing earned since` | `seo-rank-review` | `seo-calendar-refill`, `seo-intake-and-map`, `seo-draft-run`, `seo-standup`, CONTRACT, ROLE, standards |
| `tracking/answer-latest.md` and `tracking/answers/**` | `seo-answer-visibility` | AEO-PLAYBOOK, `seo-calendar-refill`, `seo-rank-review`, `seo-standup` |
| `seo-latest.md` (machine facing) | `seo-standup` | sibling Employees, 14 files name it. Keep it English |
| `improvements/CHANGELOG.md` | every routine | `seo-standup`, `seo-intake-and-map`, 12 files |
| `standards/PUBLISH-STANDARD.md` section numbers and headings (1 Competitor research to 8, `## Corrections`) | kit | five routines cite "section 5", "section 6" by number |
| `recipes/BROWSER-RECIPES.md` recipe names `learn-a-recipe`, `repair-a-recipe`, `read-linkedin` and flow files `recipes/intake-read.json`, `recipes/publish-<property>.json`, `recipes/search-console-read.json`, `recipes/rank-read-screens.json` | kit, owners | routines by name |

## 3. Tokens and ledger vocabularies

| Token | Readers |
|---|---|
| `n/a (<reason>)` and every fixed reason: `range control also saves a view`, `no search capability`, `source refused`, `range not confirmed`, `path match rate below floor`, `no browser control capability configured`, `page not reachable`, `flow step «n» did not resolve`, `browser held by «routine»`, `budget`, `no calendar yet`, `pagination cap`, `query not confirmed` and the rest (24 distinct) | 12 files. Add a fixed Vietnamese gloss after the token where the member reads it |
| `not measured`, `below the rate floor`, `baseline week` | `seo-rank-review`, `seo-intake-and-map`, `seo-standup`, standards, README |
| Card fields `id`, `title`, `type`, `done_kind`, `property`, `slug`, `owner`, `depends_on`, `needs`, `due`, `not_before`, `definition_of_done`, `artifact`, `status`, `blocker`, `done`, `done_on`, `next`, `evidence`, `worked`, `notes` | CONTRACT 2.4, all appenders, `seo-standup` |
| Card `type` values `new-post`, `refresh`, `technical`, `research`, `verify`; `status` values `todo`, `drafted`, `published`, `blocked`, `parked`; `done_kind` values `local-artifact`, `member-action` | 10 files |
| Inbox line keys `proposed_by`, `proposed_on`, `reason`, `card`; state keys `proposed_keys`, `inbox_cursor` | 9 files |
| Draft ledger `status` `ready`, `dropped`, `consumed`; published `published`, `live-check-failed`; requests `requested`, `already-indexed`, `re-requested`; `route` `repository`, `surface` | CONTRACT 2.5 and the routines named there |
| `meta.json` keys `slug`, `property`, `card`, `kind`, `keyword`, `title`, `description`, `excerpt`, `alt`, `hero`, `hero_encoded_chars`, `internal_links`, `authority_links` (`url`, `anchor`, `checked`), `registry_fields`, `sources_read`, `drafted_on` | `seo-draft-run` writes, `seo-publish-run` reads |
| `state/pushes.jsonl` keys `at`, `routine`, `blocker_key`, `sent`, `closed` | 8 files |
| Recipe JSON keys `flow`, `owner`, `url`, `version`, `last_verified`, `last_failed`, `steps` (`n`, `action`, `target`, `expect_text`) | CONTRACT 2.7, recipes |
| Quarantine path `<folder>/<ledger>-quarantine-YYYY-MM-DD.log` | CONTRACT 2.5, every ledger reader |
| `«SEO_ROOT»` and every `«...»` placeholder | all files; `copy-check.mjs` and `runlog.mjs` fail on a guillemet in output |
| Capability names `web.fetch`, `web.search`, `copy.check`, `runlog.append`, `notify.push`, `brief.deliver`, `schedule.register`, `answer.visibility.read` | CAPABILITIES, CONTRACT 3, INSTALL-PROMPT, routines |
| Section numbers of CONTRACT (1.3, 2.4, 4.1, 7.1, 8.4, 9.1) | cited by number in routines and scripts' comments |

## 4. Repo checks that read a kit

- `evals/run.mjs`: every kit including the variant; routine wiring (SCHEDULE row, `run/<id>.cmd.example`, `routines/<id>/SKILL.md`), `guard.mjs` byte identical across kits, `VERSION` equals `employee.json` version, no new clock time above the last `## Corrections` in any routine, example emails on reserved domains.
- `.github/scripts/aeo-check.mjs`: hard coded to `employees/seo-employee`; asserts 8 SCHEDULE rows equal `employee.json` routine fields and that AGENTS.md, README.md, CONTRACT.md, INSTALL-PROMPT.md and `seo-intake-and-map` mention `seo-answer-visibility`. The variant should keep both true even though the check does not read it.
- `installer/cli.mjs`: lists kits by folder and `employee.json`.

## 5. Added by the integrator, 24/09/2026 (variant only)

These strings exist only in `seo-employee-vn`. Each has one writer and named readers, and each stays in English.

| String | Writer | Readers |
|---|---|---|
| Property fields `publish_control` (`person` or `employee`), `price_source`, `service_area` | `seo-intake-and-map` | `seo-publish-run`, `seo-draft-run`, `seo-calendar-refill`, `seo-answer-visibility`; CONTRACT 2.3 and 10.2 |
| `## Working days and hours` lines `Xưng hô:`, `no new articles:` (ISO dates), `campaign:` | `seo-intake-and-map`; `campaign:` by the member only | `seo-standup`, `seo-publish-run`, every routine writing to the member (`Xưng hô:`) |
| `## Working days and hours` lines `season lock:` (ISO date, season name, property ids) | `seo-intake-and-map` for `Tết`; the member for any other | `seo-calendar-refill` |
| `operator_notes` lines `deploy lag: <minutes>`, `launch date: YYYY-MM-DD` | `seo-intake-and-map` | `seo-publish-run`, `seo-calendar-refill` |
| Threshold keys `new_post_share`, `win_impression_floor`, `pause_age_days`, `pause_impression_floor`, `retire_min_articles`, `retire_age_days`, `retire_impression_floor`, `retire_data_days`, `unaccented_split_share` | `seo-intake-and-map` | `seo-standup`, `seo-rank-review`, `seo-intake-and-map` |
| `meta.json` key `hero_label`; `notes.md` line `hero origin: member photo`, `member design` or `AI made` | `seo-draft-run` | `seo-publish-run` |
| Card title prefix `URL lạ trên` | `seo-index-sweep` | `seo-publish-run`, `seo-standup` |
| State key `ask_sheet_reminded` in `state/seo-standup.json`; `handoffs` in `state/seo-publish-run.json` | their own routine | `seo-standup` reads both |
| Paths `research/result-sets/ask-sheet-YYYY-Www.md`, `research/result-sets/pasted/`, `tracking/answers/ask-sheet-YYYY-MM.md`, `tracking/answers/pasted/` | the refill, a person, the answer routine, a person | CONTRACT 2.6 and 10.4 |
| Capability `sitemap.declare` | `CAPABILITIES.md` 4b | `seo-index-sweep` |
