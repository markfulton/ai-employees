# Parsed and shared strings: chief-of-staff-vn

Built on 24/09/2026 by grepping the original kit `employees/chief-of-staff` (seven `routines/*/SKILL.md`, `CONTRACT.md`, `INSTALL-PROMPT.md`, `SCHEDULE.md`, `ROLE.md`, `CAPABILITIES.md`, `README.md`, `recipes/BROWSER-RECIPES.md`, `examples/`, `scripts/*.mjs`) plus the repo checks `evals/run.mjs`, `.github/scripts/no-dashes.mjs`, `installer/cli.mjs`.

**Rule for every writer: every string below stays in English, byte for byte, in the variant.** Where the member reads one, the Vietnamese goes on the line under it or as a fixed gloss after it, never instead of it (`STYLE-VI.md`, precedent `gtm-engineer-vn` 1.11.0). Before translating any heading not listed here, grep the whole variant kit for it; a heading found in a second file is parsed or shared.

Reader names are routine ids without the `cos-` prefix where space is short: audit = `cos-charter-and-fleet-audit`, sweep = `cos-market-sweep`, metrics = `cos-metrics-review`, brief = `cos-decision-brief`, review = `cos-decision-review`, reconcile = `cos-fleet-reconcile`, dossier = `cos-fault-dossier`.

## 1. Strings a script parses

| String | Parsed by | What breaks if it changes |
|---|---|---|
| `## Corrections` (the last one in a file) | `evals/run.mjs` and `.github/scripts/no-dashes.mjs` cut the text at `\n## Corrections`; every routine reads its own section at Step 0; CONTRACT 2.0a | Evals and the dash check scan the wrong span; member corrections are lost |
| `SCHEDULE.md` row shape: `` | `routine` | `days` | HH:MM | HH:MM | HH:MM | `key` | N min | browser | `` | `scripts/guard.mjs` regex `ROW` | Guard returns `failed` with `no SCHEDULE.md row for <id>` |
| `days` values `mon-fri`, `mon`..`sun`, `first-weekday`, `last-weekday`, `off` | `guard.mjs` `dayAllowed` | Routine never runs, or runs every day |
| `key` values `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `guard.mjs` `periodKey` | `unknown key format` failure |
| `browser` values `never`, `light`, `conditional`, `heavy` | SCHEDULE 1.2, CONTRACT section 6, every Step 0.4 | Mutex taken wrongly |
| `PAUSED` file name and its one id per line format | `guard.mjs` `readPaused`; every Step 0.0; reconcile reads other kits' `PAUSED` | Pause switch stops working |
| `state/<routine-id>.json` and its key `last_period` | `guard.mjs` `readState`; reconcile; audit | Once per period guard fails open |
| `## Member claims`, `## Agent sourced` in `evidence/sourced.md` (matched lower case) | `scripts/copy-check.mjs` `loadProof`; audit creates them; metrics and review append; ROLE, README, INSTALL-PROMPT describe them | Every sourced figure fails `copy.check` |
| `## Agent sourced` line format `<exact string> | <file path> | <YYYY-MM-DD>` | `copy-check.mjs` (three pipe cells, ISO date) | Whole inventory rejected as structural error |
| `«paste at send time»`, `«member: paste the detail»` | `copy-check.mjs` placeholder sentinels | Any other guillemet fails the check |
| Run record fields `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and the optional usage fields | `scripts/runlog.mjs` `REQUIRED`; reconcile; audit; metrics | Record refused (exit 2) |
| Status values `ok`, `partial`, `failed`, `skipped-out-of-window`, `skipped-already-ran`, `skipped-paused`, `blocked-login`, `blocked-browser-busy` | `runlog.mjs` `STATUSES`; `guard.mjs` verdicts; CONTRACT 4.1 | Record refused; reconcile misclassifies |
| Guard verdict words `run`, `skipped-paused`, `skipped-out-of-window`, `skipped-already-ran`, `failed` | every routine's guard call | Routine misreads the gate |
| Blocker strings `no SCHEDULE.md row for <routine-id>`, `no browser control capability configured` | `guard.mjs`; SCHEDULE 1.3; CAPABILITIES section 7 | Reconcile cannot group repeat blockers |
| `--dest` values `email`, `dm`, `form`, `strategy`, `dashboard`, `plain` | `copy-check.mjs` | Call refused as stale |
| `routines/<id>/SKILL.md`, `run/<id>.cmd.example`, YAML `name` equal to the folder | `evals/run.mjs`, `.github/scripts/selftests.mjs`, `installer/cli.mjs` | CI fails |
| `VERSION`, `INSTALL-PROMPT.md` file names | `installer/cli.mjs` | Installer prints "unknown" or no prompt |
| `«COS_ROOT»` (304 uses), `«HOME URL»`, `«ISO»`, `«URL»` | install agent, every routine | Placeholder never filled |

## 2. Headings one routine writes and another reads

| Heading or line | Writer | Readers |
|---|---|---|
| `charter/business.md`: `## What is sold`, `## Who it is for`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Category language`, `## Closest alternatives`, `## Sources read` (this order, each present even when empty) | audit | sweep, metrics, brief; `recipes/BROWSER-RECIPES.md`; ROLE; INSTALL-PROMPT (`## Sources read`) |
| `charter/constraints.md`: `## Working days and hours`, `## What this business will not do`, `## Ceilings`, `## Corrections` | audit (carries `## Ceilings` and `## Corrections` verbatim) | reconcile (push suppression hours), sweep, metrics, brief, review; ROLE; INSTALL-PROMPT (`## Ceilings`) |
| `charter/metric-map.md`: `## Fleet metrics`, `## Business metrics`, `## Live screens`, `## Rate floor`, and the one line `rate_floor: <n>` | audit (carries `## Rate floor` verbatim) | metrics; CAPABILITIES; ROLE; INSTALL-PROMPT; BROWSER-RECIPES (`## Live screens`) |
| `charter/priorities.md`: exactly `## Calibration`, `## Priorities`, `## Corrections` | audit seeds, review owns | metrics, brief, review; the line `n/a (too few closed decisions)` under `## Calibration` |
| `charter/fleet-map.md`: `## «employee-slug»` blocks with keys `root`, `contract`, `schedule`, `runlog`, `paused_file`, `browser_lock`, `state_files`, `digest`, `weekly_output`, `present`, `first_seen`, `last_confirmed`, `routines` and the routine line `<id> | days: <d> | window: <a> to <b> | key: <k> | lane: <l>` | audit | reconcile, dossier, metrics |
| `charter/CHANGELOG.md` line `YYYY-MM-DD | <routine-id> | <file changed> | <what changed> | <evidence path>` | audit, review | reconcile, audit, review |
| `market/watchlist.md`: `## «surface-id»: «name»` with keys `url`, `kind`, `watch_for`, `flow`, `added_on`, `added_by`, `disabled` | audit seeds, sweep owns | sweep, review, audit |
| `kind` values `pricing`, `changelog`, `careers`, `category-listing`, `forum`, `review` (closed, six) | CONTRACT 2.6 | sweep, audit |
| `market/market-YYYY-Www.md`: `## What changed`, `## Baselines this week`, `## Surfaces that did not answer`, `## Watchlist changes`; observation line `«surface» | «clause» | "«quote»" | «URL» | page dated «date»` | sweep | brief (observations with quote, URL, read date), metrics, review and reconcile by path |
| `metrics/metrics-YYYY-Www.md`: `## Numbers` table with columns `Metric`, `This window`, `Last window`, `Source`; `## Moved`; `## Needs you` | metrics | brief (every figure with its Source cell), review ("go to the Numbers table ... its Source cell"), audit (via `Needs you` lines), reconcile by path |
| Metric row labels in the `Metric` column | metrics | the `metric` field of every `proposed` ledger line (`"metrics/metrics-YYYY-Www.md, <row label>"`), which review resolves months later. **A label must be identical in the page and in the ledger line.** If a writer chooses Vietnamese labels, it must use the same label forever and in both files |
| `decisions/REGISTER.md` block `## <decision_id>`, `- title: ...`, `- proposed: <date> | <routine> | <path>`, `- [ ] accept`, `- [ ] reject`, `- [ ] defer`, and `## Notes` | reconcile re-renders; member ticks | reconcile, brief, review, dashboard build |
| `brief-latest.md`: `# «date»`, `## Today`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit`; `UNRECORDED RUN` appended by any routine | reconcile (plus the one `UNRECORDED RUN` append) | member; README; examples; brief, review, dossier, sweep, metrics name `Waiting on you` and `UNRECORDED RUN` |
| `dossiers/dossier-<fault-key>.md`: first `#` line (the headline sentence) plus `## What is happening`, `## The first record that shows it`, `## What changed around that date`, `## Three candidate causes`, `## What it has cost`, `## The one line to paste`, `## What this does not tell you`, `## History` | dossier | reconcile reads path and headline only; `examples/dossiers/`; headings, metadata lines, `## History` and the correction line stay English; prose under them is Vietnamese (D15) |
| `## The one push` (CONTRACT section 9 name) | CONTRACT | every routine refers to it |
| `charter/constraints.md` under `## Working days and hours`: `- day off: YYYY-MM-DD` or `- day off: YYYY-MM-DD to YYYY-MM-DD`, then the dd/mm/yyyy dates, what the day is, and its source; the line naming `Tết`; one `Ngày sale shop tham gia:` line with dd/mm/yyyy dates (added by the integrator, 24/09/2026, CONTRACT 10.2) | audit, from the member only; carried verbatim on every monthly rewrite | reconcile (ISO part: brief delivery hold, due periods), metrics, sweep, brief, review (`Tết` and sale days) |
| `charter/business.md` under `## What is sold`: `Pháp nhân:` and one optional `Xưng hô: anh` or `Xưng hô: chị` line (integrator, CONTRACT 10.2) | audit, from the member | reconcile, brief, review, metrics, sweep (form of address; absent means `anh/chị`) |
| `market/watchlist.md` optional block line `- entity: <enterprise code or head office address> \| <YYYY-MM-DD>` (integrator, CONTRACT 10.4) | audit seeds, member | sweep (same name check) |
| `market/manual.md` line `<surface> \| <what they saw> \| "<quote>" \| <URL> \| seen <YYYY-MM-DD>` (integrator, CONTRACT 2.6 and 10.4) | member only | sweep (copied to `## What changed` with the clause ending `có người xem trực tiếp ngày dd/mm/yyyy`) |
| `n/a (sale or holiday week)`, `n/a (source connection expired)`, `n/a (platform terms bar automated reading)`, and the page line `tuần sale, không so với tuần thường` | metrics | brief, review (read as `n/a`; ROLE section 9) |
| `## For other employees` in `cos-latest.md` | reconcile | ROLE, README, the member's other agents |
| `## What changed about me` source lines in `improvements/CHANGELOG.md` | every routine appends | reconcile, audit |
| `# Fixes from real runs, ready to send back`, `## 1. «routine-id», «date»` | audit, `improvements/contribution-draft-YYYY-MM.md` | member only; English keeps it sendable upstream |

## 3. Closed vocabularies and ids (JSON, ledgers, cells)

| Vocabulary | Values | Where defined | Readers |
|---|---|---|---|
| Routine state | `running`, `stopped-loudly`, `stopped-silently`, `paused`; `unknown-schedule` reported apart | CONTRACT 2.4 | reconcile, dossier, metrics, review, dashboard |
| Fault class | `failed-twice`, `silent-stop`, `repeat-blocker`, `died-holding-lock` | CONTRACT 2.4 | reconcile, dossier |
| Fault key | `<employee slug>--<routine id>--<fault class>`, ASCII | reconcile Step 5 | dossier file names, inbox |
| Decision statuses | `proposed` (brief); `accepted`, `rejected`, `deferred` (reconcile); `done`, `dropped`, `worked`, `no-effect`, `reversed` (review) | CONTRACT 2.5 | every ledger reader |
| `decision_id` | `d-` plus English object and action slug, `a-z0-9-`, at most 48 characters | CONTRACT 2.5 | never derived from a Vietnamese title (a Vietnamese letter would slug to a hyphen) |
| Inbox `kind` | `decision`, `resolution` | CONTRACT 2.4 | reconcile |
| JSON keys | every key in `fleet.json`, `observations.jsonl`, `inbox.jsonl`, `decisions.jsonl`, `recipes/<flow>.json`, `state/*.json` (for example `predicted_effect`, `metric`, `visible_by`, `progress`, `assumptions`, `inbox_cursor`) | CONTRACT section 2 | all |
| Unknown cell tokens | `n/a (<reason>)`, `not wired`, `not tracked`, `stale (<date>)`, `baseline week`, `below the rate floor`, `windows are different lengths`, `not published by «employee»` (metrics); `baseline`, `blocked-login`, `not read this week`, `page carries no date`, `partial baseline (<date>)` (sweep); `not measured`, `not published` (brief); `too few closed decisions`, `never measured`, `still open`, `no record shows it done`, `no-effect (below the rate floor)`, `n/a (too few done decisions)` (review) | each routine; ROLE section 9 | brief and review read the metrics tokens; ROLE, examples |
| Scratch names | `state/<name>.tmp.<ext>`, `state/market-lines.tmp.md`, `state/metrics-lines.tmp.md` | CONTRACT 2.7 | archive sweep |
| Capability names | `clock.local`, `file.read`, `file.write`, `file.list`, `shell.run`, `browser.*`, `page.*`, `element.click`, `field.set`, `notify.push`, `web.search`, `web.fetch`, `runlog.append`, `copy.check`, `schedule.register`, `brief.deliver` | CAPABILITIES | every routine |

## 4. Free to localize (checked: no second reader)

- `decisions/decision-YYYY-Www.md` body headings (`### The case for`, `### The case against`, `### What would have to be true`, `### What it costs if it is wrong`, `### The cheapest test`, `## Why I might be wrong about the top move`): only `cos-decision-brief` writes them; reconcile reads the file by path only, and review reads it for the predicted effect and the metric each move named (review line 57), not for its headings. The predicted effect and metric text on the page must therefore match the `predicted_effect` and `metric` fields of the same move's ledger line. Already localized in the plan of `../cos-decision-brief.md`.
- Headline sentences of the weekly market and metrics pages, the member's own lines under a parsed heading, and every example value marked fictional.
- Anything else only after the grep described at the top.
