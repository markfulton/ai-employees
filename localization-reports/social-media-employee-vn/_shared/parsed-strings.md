# social-media-employee-vn: strings that stay in English

Built on 24/09/2026 by grep over the original kit `employees/social-media-employee` (seven `routines/*/SKILL.md`, `CONTRACT.md`, `INSTALL-PROMPT.md`, `SCHEDULE.md`, `CAPABILITIES.md`, `ROLE.md`, `recipes/BROWSER-RECIPES.md`, `examples/`, `scripts/`). A string is listed when a script parses it, when more than one file reads it, or when another Employee reads it. **Writers keep every string below byte for byte**, and write the member's Vietnamese lines under a heading, after a key, or as a fixed gloss after a token, never instead of it (STYLE-VI, precedent `gtm-engineer-vn` 1.11.0). Reader counts are files that contain the string.

## 1. Parsed by a script

| String | Parser | Other readers | Note |
|---|---|---|---|
| `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy` in `voice/voice.md` | `scripts/copy-check.mjs` `loadVoice()`, matched on the lowercased heading text | `soc-intake-and-voice` (writer), `CONTRACT.md` 2.3, `INSTALL-PROMPT.md` | A translated heading silently drops the member's list and falls back to the English defaults. Vietnamese banned words go under the English heading as list items |
| `none` inside `## Hashtag policy` | `copy-check.mjs`: any line containing `none` means no hashtags | `soc-intake-and-voice`, `CONTRACT.md` | The only policy values are `none` or anything else. An Instagram cap of five (Phần A ledger A4 134) cannot be expressed here and must be counted by `soc-draft-queue`. The hashtag scan only catches tags that start with an ASCII letter, so `#ĐồLen` passes unseen |
| `## Member claims`, `## Agent sourced` in `voice/proof-inventory.md` | `copy-check.mjs` `loadProof()` | 12 files: all seven routines, `CONTRACT.md`, `INSTALL-PROMPT.md`, `ROLE.md`, `README.md` | `## Agent sourced` lines keep the shape `<exact string> \| <ledger path> \| <YYYY-MM-DD>` |
| `## Samples`, `## Dash policy` | not parsed by the script; read by `soc-draft-queue` and `soc-intake-and-voice`, listed in CONTRACT 2.3 as the six fixed headings | `INSTALL-PROMPT.md`, `ROLE.md`, `README.md` | Keep with the four above so `voice/voice.md` keeps its six headings in order |
| Queue entry headings `## P-01`, `## R-01` and the `---` separator | `copy-check.mjs` `ENTRY_STRUCTURE` (`# ` plus one capital letter, hyphen, digits) | `soc-draft-queue`, `soc-engagement-sweep`, `soc-calendar-standup` | A Vietnamese letter or a word in the heading makes it prose, and the markdown rule then fails it |
| Metric shapes: digits before `%`, `percent`, `$ £ € ¥`, `usd`, `x`, and English count nouns (`followers`, `views`, `comments`, `posts`, `days`...) | `copy-check.mjs` `METRIC_PATTERNS` | every routine that writes copy | **Known gap (D6):** `5.000.000 đ`, `12 đơn`, `30 lượt xem` are not caught. Writers still source every Vietnamese figure from a named file |
| Masked shapes: `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM`, `HH:MM`, `S-nnn`, `C-nnn`, `P-nn`, `R-nn`, `p-n` | `copy-check.mjs` `NOT_A_METRIC` | all routines | A date shown as `dd/mm/yyyy` in owner text is not masked, so `24/11` next to a count noun can read as a metric. Keep ISO inside backticks where a check runs |
| `--dest` values `post`, `dm`, `plan`, `standards`, `plain` | `copy-check.mjs` `DESTINATIONS` | routines that call `copy.check` | |
| `SCHEDULE.md` table header `\| routine \| days \| fire \| window_start \| window_end \| key \| budget \| browser \|` and the row shape | `scripts/guard.mjs` row regex | all seven routines at Step 0.1, `CONTRACT.md` 1, the Chief of Staff `cos-fleet-reconcile` (reads sibling schedules) | Budget is read as a number of minutes (`40 min`) |
| `days` tokens `mon-fri`, `sun` to `sat`, `first-weekday`, `last-weekday`, `off` | `guard.mjs` `dayAllowed()` | `SCHEDULE.md` 3, `CONTRACT.md` 1.2 | A Saturday shop row is written `mon,tue,wed,thu,fri,sat`; there is no `mon-sat` token |
| `key` formats `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `guard.mjs` | `CONTRACT.md` 1.3 | |
| `browser` values `never`, `light`, `conditional`, `heavy` | `guard.mjs`, lane rules in `SCHEDULE.md` 1.2 and 4 | all seven | |
| `PAUSED` file name and its routine id lines | `guard.mjs` | all seven, `CONTRACT.md` 2.0a, Chief of Staff reconcile | Member only |
| Run record fields `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and the eight statuses | `scripts/runlog.mjs` `REQUIRED`, `STATUSES` | all seven, `CONTRACT.md` 4, Chief of Staff reconcile | `published` and `deferred` are refused as run statuses by the script |
| `UNRECORDED RUN` | named in five routines, `CONTRACT.md`, `CAPABILITIES.md` | 7 files | |

## 2. Read by more than one routine or file

### The brief (`brief-latest.md`, `briefs/brief-YYYY-MM-DD.md`)

| String | Readers | Note |
|---|---|---|
| `## Today`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit` | `soc-calendar-standup` (writer), `CONTRACT.md` 2.7 schema, `examples/brief-latest.md`, `copy-check.mjs` self test (`## Today`) | Parsed headings per STYLE-VI; the member's lines under them go in Vietnamese |
| `Publishing today:` line and `To stop one, tick "hold this one"...` | `soc-calendar-standup`, `examples/brief-latest.md` | The quoted tick label must stay `hold this one`; the sentence around it can be Vietnamese |
| `Guided version, updates and premium employees: [club.reinventing.ai](...)` footer | `soc-calendar-standup`, `INSTALL-PROMPT.md`, `examples/brief-latest.md` | Shared footer across kits; leave as shipped |

### Queue files

| String | Readers | Note |
|---|---|---|
| `- id:` line | `soc-draft-queue`, `soc-engagement-sweep` (writers), `soc-calendar-standup` (resolves it to a slot), `CONTRACT.md` 2.6, `INSTALL-PROMPT.md`, example queue | Never reformatted by anybody |
| `- [ ] hold this one` | 8 files: `soc-draft-queue`, `soc-publish-run`, `soc-calendar-standup`, `CONTRACT.md`, `INSTALL-PROMPT.md`, `README.md`, two examples | The box line is parsed. A Vietnamese gloss may follow on the next line, never on the box line |
| `- [ ] answered` | `soc-engagement-sweep`, `soc-calendar-standup`, `CONTRACT.md` | Same rule |
| `- destination:`, `- goes out:`, `- framework:`, `- pillar:`, `- material:`, `- source:`, `- characters:`, `- image:` | `soc-draft-queue`, `CONTRACT.md` 2.6, example queue; `soc-publish-run` reads the body and hold box | Keys stay English; values may be Vietnamese where free text |
| `- link:`, `- they wrote:`, `- suggested reply:` | `soc-engagement-sweep`, `CONTRACT.md` 2.6 | Keys stay; the suggested reply itself is Vietnamese |
| Header lines `# Drafts for tomorrow, «platform name», written YYYY-MM-DD` and the three `#` lines under it | `soc-draft-queue`, `CONTRACT.md` 2.6, example queue | **Not parsed** (only `- id:` and the box are). May be translated, but in `soc-draft-queue` and `CONTRACT.md` 2.6 together so the template stays one text |

### Plan and voice files

| String | Readers | Note |
|---|---|---|
| `plan/audience.md` headings `## Who they are`, `## What they already know`, `## What they are trying to do`, `## Where they already are`, `## Working days and hours`, `## Sources read` | `soc-intake-and-voice` (writer), `CONTRACT.md` 2.3; `## Working days and hours` also `soc-performance-review`, `soc-calendar-standup`, `ROLE.md` | Headings stay; Vietnamese content under them. The 24/11 day off (ledger A2 86) goes under `## Working days and hours` |
| `plan/pillars.md` block `## <pillar-id>: <pillar name>` and keys `what it is:`, `why this account is credible on it:`, `what a post on it looks like:` | `soc-intake-and-voice`, `CONTRACT.md` 2.3; pillar ids `p-n` in calendar, queue, posts | Pillar name may be Vietnamese; id and keys stay |
| `plan/sources.md` kinds `## own-work`, `## own-published`, `## own-saved`, `## audience-places`, `## own-inbound`, the `sources:` list, `## Search source`, `n/a (no member search route)` | `soc-material-sweep`, `soc-intake-and-voice`, `CONTRACT.md` 2.3, `CAPABILITIES.md`, `ROLE.md` | D13 narrows what may be listed under `own-saved` and `audience-places` |
| `plan/channels.md` block `## «platform-id»: «platform name»` and keys `profile_url:`, `post_list_url:`, `notifications_url:`, `messages_url:`, `read_only:`, `plain_text:`, `character_cap:`, `url_cost:`, `first_line_fold:`, `default_time:`, `publish_allow_list:` | `soc-intake-and-voice` (writer), `soc-engagement-sweep`, `soc-publish-run`, `soc-draft-queue`, `soc-performance-review`, `CONTRACT.md` 2.3, `recipes/BROWSER-RECIPES.md`, `CAPABILITIES.md`, `INSTALL-PROMPT.md`, `README.md`, `ROLE.md` | `read_only: always` on LinkedIn; `n/a (not used)` value. The allow list is member only in every language |
| `## Read screens` (line shape `«screen name» \| https://«URL» \| «figure»`), `## Scorecard settings`, `sample_floor:`, `movement_threshold:` | `soc-intake-and-voice`, `soc-performance-review`, `CONTRACT.md`, `INSTALL-PROMPT.md`, `ROLE.md`, `recipes/BROWSER-RECIPES.md` | A screen name may be the platform's Vietnamese label (`Lượt xem`), the heading stays |
| `plan/CHANGELOG.md` line `YYYY-MM-DD \| <routine-id> \| <file> \| <change> \| <evidence path>` | every routine that changes a plan file; `soc-calendar-standup`, `soc-intake-and-voice`, `soc-performance-review` | The change clause may be Vietnamese; separators and fields stay |
| `## Corrections` | 14 files: every routine, `CONTRACT.md`, `SCHEDULE.md`, `CAPABILITIES.md`, `ROLE.md`, `INSTALL-PROMPT.md`, `README.md`, `recipes/BROWSER-RECIPES.md` | Text under it is never edited by a writer |

### Ledgers, calendar, state and ids

| String | Readers | Note |
|---|---|---|
| Slot statuses `planned`, `drafted`, `held`, `published`, `publish-failed`, `reopened`, `missed` | `calendar/calendar.json` writer `soc-calendar-standup`; draft queue, publish run, performance review, `CONTRACT.md` 2.4 | Display glosses only (STYLE-VI) |
| `posts/posts.jsonl` statuses `drafted`, `published`, `publish-failed`, `deferred-no-scheduler`, `held`, `live-confirmed`, `live-missing` and fields `post_id`, `slot_id`, `route`, `receipt`, `first_line`, `body_chars`, `had_image` | all seven, `CONTRACT.md` 2.5, `scripts/runlog.mjs` (refuses `deferred` as a run status) | `first_line` is compared with the live page; a draft body in Vietnamese is fine, the key is not |
| `engagement/inbound.jsonl` statuses `new`, `answered`, `ignored`; `inbound_id`, `text` | `soc-engagement-sweep`, `soc-calendar-standup`, `soc-draft-queue`, `soc-material-sweep`, `soc-performance-review` | See ledger A6 239 on masking phone numbers in `text` |
| `material/material.jsonl` statuses `new`, `expired`, `drafted`; `material_id`, `quote`, `note`, `expires_on` | `soc-material-sweep`, `soc-draft-queue`, `soc-performance-review`, `soc-intake-and-voice`, `soc-calendar-standup` | `note` carries no digits |
| `posts/metrics.jsonl` `metric_id`; `null` never zero | `soc-engagement-sweep`, `soc-performance-review` | |
| Framework ids `build-log`, `teardown`, `question`, `contrarian-note`, `walkthrough`, `receipt`, `answer-the-reply`, `short-note` | `soc-draft-queue` (table), calendar, posts, `soc-performance-review` cuts, `soc-calendar-standup`, `scripts/runlog.mjs` example, 15 files in all | Ids stay; a Vietnamese description may sit beside them in the table |
| Slot and entry ids `S-nnn`, `P-nn`, `R-nn`, `p-n`, `«platform-id»` | calendar, queue, posts, `copy-check.mjs` masks | |
| `calendar/CALENDAR.md` line `- [ ] S-042 \| 09:15 \| ...` | `soc-calendar-standup`, member ticks, `CONTRACT.md` 2.4, example | Line shape stays; member free text under a slot is verbatim |
| `calendar/inbox.jsonl` fields `proposed_by`, `proposed_on`, `reason`, `slot` | `soc-intake-and-voice`, `soc-performance-review`, `soc-calendar-standup` | `reason` may be Vietnamese |
| `state/soc-<id>.json` base keys `last_period`, `started`, `progress`, `recipes`, `assumptions`, `budget_minutes_used`, plus `installed_employees`, `inbox_cursor`, `holds_reconciled`, `replies_reconciled` | owner routine, `soc-calendar-standup`, `soc-performance-review`, `soc-intake-and-voice`, `soc-publish-run` (standup file only), Chief of Staff reconcile (cursors and assumptions) | An `assumptions[]` string may be Vietnamese, the brief shows it |
| `state/kit-update.json`, `state/browser-lock.json`, `state/pushes.jsonl`, `state/*.tmp.*` | `soc-intake-and-voice`, `soc-calendar-standup`, every browser routine, Chief of Staff reconcile | |
| `recipes/<flow>.json` keys `flow`, `owner`, `url`, `version`, `last_verified`, `last_failed`, `steps` | owner routine, `soc-performance-review` replay | `expect_text` holds what the live page shows, so a Vietnamese page gives Vietnamese `expect_text` |

### Scorecard, standards and the sibling digest

| String | Readers | Note |
|---|---|---|
| `soc-latest.md` and its `## For other employees` block (paths and dates only) | `soc-calendar-standup` (writer); sibling Employees, the Chief of Staff `cos-fleet-reconcile` step 3f | Machine facing; stays English |
| Scorecard headline shape and `## Numbers`, `## Cuts`, `## Moved`, `## Stop`, `## Do more of`, `## Needs you`, `Stop: <call>. Do more of: <call>.` | `soc-performance-review` only; `soc-calendar-standup` and `soc-intake-and-voice` read the path and week, not the headings | **Not parsed across files.** May be localized inside `soc-performance-review` alone (B-6 writer confirms by grep first). `## Stop` also appears in `README.md` prose |
| `standards/drafting-standards.md` headings `# Drafting standards`, `## Frameworks`, `## Hook shapes and lengths`, `## Slot times`, `## Pillars`, `## Destinations` | written by `soc-performance-review`; read in full by `soc-draft-queue` and `soc-intake-and-voice` | Agent facing; keep English so the reader routines find the sections |
| Cell tokens `n/a (<reason>)`, `not measured`, `baseline week` | `n/a (` in 11 files; `baseline week` in `soc-performance-review`, `soc-calendar-standup`, `INSTALL-PROMPT.md`, `ROLE.md`, `examples/README.md`; `not measured` in `soc-performance-review` | Fixed Vietnamese gloss after the token where the member reads it (STYLE-VI) |
| `«SOC_ROOT»`, `«RUN <routine-id>»`, `«PLACEHOLDER»` tokens | 13 files, `scripts/runlog.mjs`, `CAPABILITIES.md` 9.2a | Never translated |

## 3. Safe to localize (checked: one reader, the member)

The intake report prose, the first line and body of each brief line, reply and draft bodies, `material/material-latest.md` lines (the standup reads only head counts), scorecard prose inside `soc-performance-review` only, `examples/*.md` presentation text, and the queue header comment lines when `CONTRACT.md` 2.6 changes with them. Examples stay fictional (`Northwind Roofing` is the shipped fiction); a Vietnamese example needs a fictional Vietnamese business and no real contact, account or price.
