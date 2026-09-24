# web-dev-employee-vn: strings that stay in English

Grep of the original kit `employees/web-dev-employee` on 24/09/2026 (routines, `CONTRACT.md`, `INSTALL-PROMPT.md`, `SCHEDULE.md`, `CAPABILITIES.md`, `README.md`, `ROLE.md`, `examples/`, `scripts/`). Every string below is read by more than one file or parsed by a script. A routine writer keeps it byte for byte and writes the member's Vietnamese lines under or beside it (precedent `gtm-engineer-vn` 1.11.0, `STYLE-VI.md`). "Readers" names the files that write or read the string.

## Parsed by a script

| String or shape | Parser | Also read by |
|---|---|---|
| `SCHEDULE.md` row of eight cells (backticked routine, backticked days, fire HH:MM, window_start HH:MM, window_end HH:MM, backticked key, `N min`, browser) and the header row `routine`, `days`, `fire`, `window_start`, `window_end`, `key`, `budget`, `browser` | `scripts/guard.mjs` (regex `ROW`, line 167) | every routine Step 0.1, `CONTRACT.md` 1.1, `web-inventory-refresh` (schedule registration) |
| `days` values: `mon-fri`, `mon`, `wed`, `fri`, `sat`, `first-weekday`, `last-weekday`, and the rest of `SCHEDULE.md` section 3 | `guard.mjs` `dayAllowed` | `CONTRACT.md` 1.2, all eight routines |
| Period keys `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `guard.mjs` | `CONTRACT.md` 1.3, state files, file names |
| Browser values `never`, `none`, `light`, `conditional`, `heavy` | `guard.mjs` (passed through) | `SCHEDULE.md` 1.2, `CONTRACT.md` 6, every routine Step 0.4 |
| `PAUSED` file and its routine id lines | `guard.mjs` | `CONTRACT.md` 5, every routine Step 0.0 |
| Run statuses: `ok`, `partial`, `failed`, `skipped-out-of-window`, `skipped-already-ran`, `skipped-paused`, `blocked-login`, `blocked-browser-busy` | `scripts/runlog.mjs` `STATUSES` | `CONTRACT.md` 4.1, all eight routines, `web-standup`, `web-weekly-report`, `web-guardrail-review` |
| Run record keys `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and optional usage keys | `runlog.mjs` `REQUIRED` | every routine's run record step |
| `first run, window guard not applicable` | `guard.mjs` note | `SCHEDULE.md` 2, `web-inventory-refresh` |
| `no SCHEDULE.md row for <routine-id>` | `guard.mjs` blocker | `SCHEDULE.md`, every routine |
| `no browser control capability configured` | written by routines, matched by readers | `SCHEDULE.md` 1.3, `CONTRACT.md` 3.2 and 4.1, browser routines |
| `copy-check.mjs` call shapes `--file <path> --dest plain` and `--secrets-only` | `scripts/copy-check.mjs` | `CONTRACT.md` 3.4 (`copy.check`, `secret.scan`), every routine that writes owner text |
| `«line withheld: «class»»` | written by routines after `secret.scan` | `CONTRACT.md` 7.2, `web-site-sweep`, `web-platform-guard`, `web-dependency-run` |
| Guillemet placeholders such as `«WEB_ROOT»`, `«date»`, `«project name»` | `copy-check.mjs` fails an unresolved one | templates in every routine |
| `# 2026-03-06` then `## Today` (the clean brief sample) | `copy-check.mjs` selftest line 674 | `web-standup` |

Note: `copy-check.mjs` rule 2 (metric digits must name their source file) only recognises English unit words, so a Vietnamese count such as `12 đơn` passes unchecked (D6 known gap). Writers keep the source path on the same line by hand.

## Brief, board and digest

| String | Writer | Readers |
|---|---|---|
| `brief-latest.md` headings `# «date»`, `## Today`, `## Waiting on you`, `## Blocked`, and the conditional `## What changed about me`, `## About this kit` | `web-standup` | `CONTRACT.md` 2.7, `web-fix-runner` (reads the brief), `web-dependency-run`, `web-inventory-refresh`, `web-platform-guard`, `web-guardrail-review` (each says its line lands under `## Waiting on you`), `examples/brief-latest.md`, `README.md` |
| `UNRECORDED RUN` heading at the foot of `brief-latest.md` | any routine with no `runlog.append` route | `CONTRACT.md` 3.4, all eight routines |
| `BOARD NOT WRITTEN` (in `web-latest.md`), `CARD NOT WRITTEN` (in a change brief) | `web-standup`, `web-fix-runner` | `CONTRACT.md` 2.4 |
| `board/REVIEW-BOARD.md`: `# Review board`, `## <project id>`, card line `- [ ] C-041 \| title \| type \| artifact or definition of done`, ticked `- [x]`, `## Notes`, member text indented under a card | `web-standup` (renders and reads ticks) | `CONTRACT.md` 2.4, `examples/board/REVIEW-BOARD.md`. The four header sentences are fixed text rendered each morning: translate them only in the `web-standup` template and the example together, after confirming the tick parser ignores them |
| `board.json` `type`: `fix`, `deps`, `platform`, `verify`, `research` | `web-standup` | `web-fix-runner`, `web-platform-guard`, `web-dependency-run`, `web-weekly-report`, `web-guardrail-review` |
| `board.json` `status`: `todo`, `drafted`, `gate-failed`, `written-up`, `filled`, `blocked`, `parked` | `web-standup`, `web-fix-runner` | same |
| `done_kind`: `member-action`, `local-artifact`, `observed` | card writers | `CONTRACT.md` 2.4 and 4, `web-standup` |
| Card ids `C-001` and `change_id` shapes `«card»:«project»:«date»`, `deps:«project»:«ISO week»` | `web-standup`, `web-fix-runner`, `web-dependency-run` | ledgers, briefs |
| `web-latest.md` (machine facing, uncapped) | `web-standup` | sibling Employees, the member's other agents: keep it English |

## Ledgers and vocabularies

| String | Writer | Readers |
|---|---|---|
| `changes/changes.jsonl` `status`: `drafted`, `gate-failed`, `merged`, `merged-edited`, `closed-unmerged`; `merge_kind`: `unchanged`, `edited`, `null` | `web-fix-runner`, `web-dependency-run`, `web-standup` | `web-weekly-report`, `web-guardrail-review` |
| `deps/dependency-ledger.jsonl` `status`: `bumped`, `held`, `gate-failed`, `superseded`, `held-by-member` | `web-dependency-run`, the member | `web-weekly-report`, `web-standup` |
| Health check `result`: `pass`, `fail`, `n/a`; incident `state`: `new`, `recurring`, `quiet`; folds `closed`, `regressed` | `web-site-sweep` | `web-standup`, `web-weekly-report`, `web-guardrail-review` |
| `inventory/projects.json` keys (`id`, `priority`, `repo_path`, `production_branch`, `public_paths[]`, `hostnames[]`, `certificate_expires_on`, `domains[]` with `domain`, `expires_on`, `auto_renew`, `registrar`, `log_surfaces[]` and the rest of `CONTRACT.md` 2.3) | `web-inventory-refresh` | all seven others |
| Recipe JSON keys `flow`, `owner`, `url`, `version`, `last_verified`, `last_failed`, `steps[]` with `n`, `action`, `target`, `expect_text` | owning routine, `web-weekly-report` (two fields) | `recipes/BROWSER-RECIPES.md`. `expect_text` holds the page's own words, Vietnamese when the page is |
| State base shape `last_period`, `started`, `progress`, `assumptions`, `budget_minutes_used` and `state/*.tmp.*` naming | each routine | `web-standup` |
| Cell tokens `n/a (<reason>)`, `n/a (no http.probe route)`, `n/a (no test command in inventory)`, `n/a (no version control capability)` | several routines | readers of the same files; add a Vietnamese gloss after, never instead |

## Policy files the member edits

| String | Writer | Readers |
|---|---|---|
| `policy/budgets.md`: `# Budgets and thresholds`, `## Performance budgets`, `## Incident threshold`, `## Expiry warning window`, `## Page load caps`, `## Replay cap`, `## Branch push cap`, `## Guardrail review`, `## Working days and hours`, `## Member set` | `web-inventory-refresh` (member sections carried verbatim) | `web-site-sweep`, `web-standup`, `web-platform-guard`, `web-dependency-run`, `web-weekly-report`, `web-guardrail-review`, `CONTRACT.md` 2.3, `INSTALL-PROMPT.md` |
| `policy/safe-fix-rules.md`: `# Safe fix rules`, `## Rungs`, `## Classes`, `## Never tuneable, at any rung, on any evidence`, `## If you disagree`; rungs `off`, `one-file`, `one-project`, `one-project-plus-test` | `web-inventory-refresh`, `web-guardrail-review` | `web-fix-runner`, `CONTRACT.md` 2.3, `INSTALL-PROMPT.md`, `README.md` |

## Headings read across routines inside reports and change briefs

| String | Writer | Readers |
|---|---|---|
| `## Project order for the dependency run` | `web-weekly-report` | `web-dependency-run` Step 2 ("the only thing in this kit that sets it") |
| `## Numbers` table and its metric labels (changes drafted, merged, merged edited, closed unmerged, gate failed) | `web-weekly-report` | `web-guardrail-review` (sums the four weeks) |
| `## Not measured`, `## What moved`, `## Performance`, `## Performance against budget` | `web-weekly-report`, `web-site-sweep` | each other, `README.md`, `CAPABILITIES.md` |
| `## Advisories closed` | `web-dependency-run` change brief | `web-weekly-report` |
| Change brief `## What changed and why`, `## Files`, `## Gate`, `## Incident this closes`, `## Rollback`, `## Compare`, `## Left for you` | `web-fix-runner`, `web-dependency-run` | each other, `examples/changes/`, `web-weekly-report` (gate lines) |
| Platform report `## Expiring`, `## Drift`, `## Build failures`, `## Environment variables`, `## Database advisors`, `## Not checked` | `web-platform-guard` | `web-weekly-report` and `web-standup` read only the path, week and open finding count; keep the headings English until the count's source is confirmed |
| Site health `## Down or failing`, `## New incidents`, `## Recurring`, `## Quiet since` | `web-site-sweep` | only its own file today; may be localized in B-2 after a fresh grep |
| `## Corrections` | the member | every routine, `CONTRACT.md`, `SCHEDULE.md`, `README.md`, `INSTALL-PROMPT.md`, `ROLE.md`, `CAPABILITIES.md`, `recipes/BROWSER-RECIPES.md`. Text under it is never edited |

## Local only (safe to localize in the owning routine)

`web-fix-runner` proposal headings (`## Why this is not automatic`, `## The evidence`, `## What I would change`, `## The proposed diff`, `## What I could not settle`, `## Rollback if you apply it`), `## Migration on this branch`, `web-dependency-run` `## Packages` and `## Held this week`, `web-weekly-report` `## Do this next week`, `## Stop this`, `## Flow replay`, `web-inventory-refresh` `# Fixes from real runs, ready to send back`. Each appears in one routine only on 24/09/2026; re-grep before translating.

## Added by the integrator, 24/09/2026

Strings that became read across routines in the integration pass. Keep each byte for byte.

| String | Writer | Readers |
|---|---|---|
| `## Việc cần anh/chị quyết` in `changes/YYYY-MM-DD-deps-PROJECT.md` | `web-dependency-run` | `web-standup` Step 7b line 2 (copies at most five lines, skips `Không có.`) |
| `"p0": true` or `"p0": false` on `health/checks.jsonl` and `health/incidents.jsonl` lines | `web-site-sweep` | `web-weekly-report` Step 4b |
| `shared upstream: ` at the start of a check line's `reason` | `web-site-sweep` | `web-weekly-report` Step 4a |
| `min_resolved_changes_to_widen:` and `quality_bar:` under `## Guardrail review` in `policy/budgets.md` | `web-inventory-refresh` template, the installing agent, the member | `web-guardrail-review` |
| `.vn domains:`, `domains:`, `certificates:` under `## Expiry warning window` | same | `web-platform-guard` Step 2, `web-standup` Step 5d |
| `đóng băng: <first date> đến <last date>, <reason>` under `## Working days and hours` | the installing agent, the member | `web-fix-runner` Step 2, `web-dependency-run` Step 5.0, `web-standup` Step 5e |
| `Xưng hô: anh` or `Xưng hô: chị` under `## Member set` | the installing agent, the member | every routine that writes to the member (`CONTRACT.md` 10.3) |
| `inventory/handover.md` headings `## Vai trò`, `## Web bán hàng thuê trên nền tảng (không có mã nguồn)`, `## Hợp đồng hosting`, `## Thông báo website bán hàng`, `## Thông tin thêm từng website`, `## Màn hình theo dõi` | `web-inventory-refresh`, once | `web-inventory-refresh` every run |
| `widened from off, objection until YYYY-MM-DD` in the `Moved this month` cell of `policy/safe-fix-rules.md` | `web-guardrail-review` | `web-fix-runner` Step 4 item 1 |
| `payment` as a fix class | `web-inventory-refresh` seed, `web-guardrail-review` | `web-fix-runner`, `web-site-sweep` |
