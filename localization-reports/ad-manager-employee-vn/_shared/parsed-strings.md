# ad-manager-employee-vn: strings that stay in English

Built on 24/09/2026 by grepping the original kit `employees/ad-manager-employee` 1.8.0 (routines, CONTRACT.md, INSTALL-PROMPT.md, SCHEDULE.md, ROLE.md, CAPABILITIES.md, recipes, examples, scripts) plus the repo checkers `evals/run.mjs`, `.github/scripts/no-dashes.mjs` and `installer/cli.mjs`. Every string below is read by more than one file or parsed by a script. **Writers keep each one byte for byte in English and write the member's Vietnamese lines under it**, the `gtm-engineer-vn` 1.11.0 precedent named in STYLE-VI. Where the member reads a token, add a fixed Vietnamese gloss after it, never instead of it (see `glossary.md`).

Readers are named as the routine id, the file, or the script. "All seven" means every routine SKILL.md.

## 1. Parsed by a script (a change breaks a self test or a run)

| String | Parsed by | Also read by | Note |
|---|---|---|---|
| `## Corrections` | `evals/run.mjs` (cuts at the last one), `.github/scripts/no-dashes.mjs` (same cut) | 14 kit files, the foot of every SKILL.md, CONTRACT.md, CAPABILITIES.md, SCHEDULE.md, ROLE.md, README.md, INSTALL-PROMPT.md, `recipes/BROWSER-RECIPES.md` | Never translate, never move, never write under it |
| `SCHEDULE.md` row shape `\| routine \| days \| fire \| window_start \| window_end \| key \| budget \| browser \|` and each row's cells | `scripts/guard.mjs` (row regex) | all seven at Step 0.1, CONTRACT.md 1 | Column names and cell tokens stay English. Clock times live only here |
| `days` tokens `mon-fri`, `mon`, `tue`, `wed`, `thu`, `fri`, `sat`, `first-weekday`, `last-weekday`, `off` | `scripts/guard.mjs` `dayAllowed` (splits on comma or space) | SCHEDULE.md 3, CONTRACT.md 1.2 | `sun` and `daily` are refused by design. A Saturday read would be `mon-fri, sat` |
| `key` shapes `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `scripts/guard.mjs`, `scripts/runlog.mjs` (`CADENCE`) | CONTRACT.md 1.3, state files | ISO keys stay in files, JSON and backticks (D12) |
| Run record keys `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` | `scripts/runlog.mjs` `REQUIRED` | all seven, `ads-desk-standup` fold, CONTRACT.md 4 | English keys and English values in `status` |
| Status values `ok`, `partial`, `failed`, `skipped-out-of-window`, `skipped-already-ran`, `skipped-paused`, `blocked-login`, `blocked-browser-busy` | `scripts/runlog.mjs` `STATUSES` | CONTRACT.md 4.1, all seven, `ads-desk-standup` | Closed vocabulary |
| Blocker `no browser control capability configured`, `no SCHEDULE.md row for <routine-id>` | `scripts/guard.mjs` and runlog checks | SCHEDULE.md 1.3, CAPABILITIES.md 7 | Fixed strings |
| `plan/offer.md` headings `## Landing URL`, `## Countries sold into`, `## Daily cap`, `## Currency` | `scripts/review.mjs` `OFFER_HEADINGS` (regex `^## <heading>`) | CONTRACT.md 2.3, `ads-account-intake` (writer), `ads-account-read`, `ads-build-desk`, `ads-change-list`, `ads-creative-studio`, `ads-creative-retro`, INSTALL-PROMPT.md | Province and commune lists (A3 102) go under `## Countries sold into` in Vietnamese, heading unchanged |
| `set.md` heading `## Slots`, and the set folder name `creative/set-YYYY-MM-DD-<slug>` | `scripts/review.mjs` (`section(manifest, "Slots")`, folder regex `^set-\d{4}-\d{2}-\d{2}-[A-Za-z0-9_-]+$`) | `ads-creative-studio` (writer), `ads-build-desk`, example set | The slug is ASCII; derive it from English words, never from a Vietnamese title |
| Review statuses `approved`, `rejected`, `needs-revision`, `withdrawn`; derived states `awaiting-review`, `changed` | `scripts/review.mjs` `REVIEW_STATUSES` | CONTRACT.md 2.5, `ads-creative-studio`, `ads-build-desk`, `ads-desk-standup` | Member facing gloss allowed after the token |
| `plan/voice.md` headings `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy` (value containing `none`) | `scripts/copy-check.mjs` `loadVoice` (lower cased section names) | CONTRACT.md 2.3, `ads-account-intake` (writer), INSTALL-PROMPT.md | Vietnamese banned phrases (A3 106) go as list items under `## Banned words`. Seed phrases such as `tốt nhất`, `duy nhất`, `số 1`, `số một`, never the bare `nhất` (the word matcher would hit `thống nhất`, `nhất định`) |
| `plan/voice.md` `## Samples`, `## Dash policy` | CONTRACT.md schema | `ads-account-intake`, `copy.check` readers | Headings English |
| `plan/proof-inventory.md` `## Member claims`, `## Agent sourced`, entry format `<exact string> \| <ledger path> \| <YYYY-MM-DD>` | `scripts/copy-check.mjs` `loadProof` (three pipe parts, ISO date) | CONTRACT.md 2.3, README.md, ROLE.md, INSTALL-PROMPT.md, `ads-account-intake`, `ads-change-list`, `ads-creative-retro`, `ads-creative-studio`, `ads-build-desk` | Vietnamese claim text is fine in part one; the date stays ISO |
| `copy.check` destinations `email`, `dm`, `form`, `strategy`, `dashboard`, `plain` | `scripts/copy-check.mjs` `DESTINATIONS` | every routine that runs `--dest` | Flags stay English |
| Sentinels `«paste at send time»`, `«member: paste the detail»`, and any `«...»` placeholder | `scripts/copy-check.mjs` `SENTINELS`, `scripts/runlog.mjs` `PLACEHOLDER` | CONTRACT.md, templates | An unresolved guillemet fails the check |
| Footer `Guided version, updates and premium employees: [club.reinventing.ai](...utm_campaign=ad-manager-employee)` | `installer/cli.mjs` prints the same line with the slug | `ads-desk-standup` brief template, `examples/brief-latest.md`, INSTALL-PROMPT.md | Fixed text, not one of the thirty lines. Whether the variant keeps `utm_campaign=ad-manager-employee` or the variant slug is a lead decision; do not translate |

## 2. Headings one routine writes and another routine reads

### plan files (writer `ads-account-intake`)

| File | Headings (keep English) | Read by |
|---|---|---|
| `plan/offer.md` | `## What is sold`, `## Price and billing shape`, `## Buy URL`, `## Landing URL`, `## Countries sold into`, `## Currency`, `## Monthly ceiling`, `## Daily cap`, `## Campaign allocations` (lines `<campaign name>: <amount>`), `## Account timezone`, `## Working days and hours` | all seven; `scripts/review.mjs` (four of them) |
| `plan/account-map.md` | `## Accounts`, `## Platform identity` (lines `<field>: <value> \| verified <date> \| <evidence path>`), `## Read screens`, `## Objects not ours`, `## Screens never opened` | `ads-account-read`, `ads-creative-studio`, `ads-build-desk`, `ads-change-list`, `recipes/BROWSER-RECIPES.md`, `recipes/META-ADS-RECIPES.md` |
| `plan/measurement.md` | `## Primary conversion event`, `## Conversion source`, `## Signal states` (five line labels `browser events received`, `server events received`, `purchase received`, `deduplication verified`, `attribution available`), `## Read window`, `## Link convention`, `## What is not measured` | `ads-account-read`, `ads-build-desk`, `ads-change-list`, INSTALL-PROMPT.md |
| `plan/guardrails.md` | `## Networks and placements`, `## Expansion settings`, `## Audience application`, `## Locations`, `## Automatic recommendations`, `## Change list settings` (lines `movement_threshold: <n> units, <n> percent`, `evidence_floor: <n> reporting days`) | `ads-account-read`, `ads-creative-studio`, `ads-build-desk`, `ads-change-list` |
| `plan/positioning.md` | `## One liner`, `## Long version`, `## Objection map`, `## Angles`, `## Sources read` | `ads-creative-studio`, `ads-build-desk`, `ads-creative-retro` |
| `plan/CHANGELOG.md` | line `YYYY-MM-DD \| <routine-id> \| <file changed> \| <what changed> \| <evidence path>` | `ads-desk-standup`, `ads-account-intake`, member |

### creative files

| File | Headings or fields | Writer | Read by |
|---|---|---|---|
| `creative/doctrine.md` | `# Creative doctrine`, `## Angles currently earning`, `## Angles retired`, `## Formats`, `## Hooks`, `## Offer framing`, `## Fatigue curve`, `## Rules with too little evidence`; rule ids never renamed | `ads-account-intake` once, then `ads-creative-retro` | `ads-creative-studio`, `ads-creative-retro` |
| `creative/set-.../set.md` | `## Where to upload it`, `## Angle`, `## What this set is testing`, `## Slots`, `## Images`, `## Values this set could not resolve`, `## Read this before you upload` | `ads-creative-studio` | `ads-build-desk`, `scripts/review.mjs` (`## Slots`), CAPABILITIES.md, CONTRACT.md |
| `creative/ledger.jsonl` | keys `creative_id` (`<set slug>:<slot>:<variant>`), `angle`, `format`, `hook`, `doctrine_line`; statuses `produced`, `rejected`, `superseded`, `live`, `retired`; bare token `none` | `ads-creative-studio`, `ads-desk-standup`, `ads-creative-retro` | `ads-change-list`, `ads-build-desk`, `ads-account-intake` |

### build, change and board files

| File | Headings, lines or fields | Writer | Read by |
|---|---|---|---|
| `build/campaign-<slug>.md` | `## Where to create it`, `## Status to set first`, `## Campaign type and structure`, `## Ad group or ad set structure`, `## Assets by slot`, `## Sitelinks, callouts, and extensions`, `## Negative keyword seed`, `## Daily budget` (value or bare `unresolved`), `## Tracking template`, `## Final URLs`, `## Locations and targeting`, `## Values this sheet could not resolve`, `## Read this before you paste` | `ads-build-desk` | member; CONTRACT.md 2.7 names `## Daily budget`, `## Tracking template`, `## Final URLs`; ROLE.md, INSTALL-PROMPT.md |
| `changes/change-list-YYYY-Www.md` | line shape `- <change> \| screen: <screen> \| current: \`<value>\` \| proposed: \`<value>\` \| evidence: \`metrics/daily.jsonl, <object_id>, <date range>\``; `unknown (not in metrics/daily.jsonl)` | `ads-change-list` | `ads-desk-standup`, `ads-build-desk`, `ads-creative-retro` |
| `changes/ledger.jsonl` | `change_id` `<category>:<object slug>:<metric slug>`; categories `measurement`, `pace`, `guardrail`, `kill`, `scale`, `test`, `structure`; statuses `proposed`, `superseded`, `packet-ready`, `applied`, `dropped` | `ads-change-list`, `ads-build-desk`, `ads-desk-standup`, member | `ads-account-intake`, `ads-creative-retro` |
| `board/board.json` | card `type` `verify`, `change`, `upload`, `research`, `handoff`; `status` `todo`, `staged`, `blocked`, `parked`; `done_kind` `local-artifact`, `member-action`; card ids `C-nnn` | `ads-desk-standup`, `ads-build-desk` (restricted fields) | six routines |
| `board/LAUNCH-BOARD.md` | `# Ad desk board`, phase headings (`## Account` in the routine template, `## Account` and `## Creative` in the example), `## Notes`; card line `- [ ] C-nnn \| <title> \| due YYYY-MM-DD \| <path>`; the tick `[x]` | `ads-desk-standup` renders | the member ticks; `ads-desk-standup` parses ticks and indented free text back. The three intro lines under the title are member facing only and may be Vietnamese; section headings and the card line grammar may not |
| `board/inbox.jsonl` | keys `proposed_by`, `proposed_on`, `reason`, `card` | six routines and the member | `ads-desk-standup` |
| `metrics/daily.jsonl` | every key in CONTRACT.md 2.4, `level` values `account`, `campaign`, `ad set`, `creative`, `conversion_event_confirmed` | `ads-account-read` only | six routines |
| `build/publication-receipts.jsonl` | receipt keys | `ads-build-desk` | `ads-desk-standup`, `ads-account-read`, `ads-creative-studio`, `scripts/review.mjs` |

### brief and digests (writer `ads-desk-standup`)

| File | Headings | Read by | Rule for writers |
|---|---|---|---|
| `brief-latest.md` | `# <YYYY-MM-DD>`, `## Live and what it cost`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit` | the member; `examples/brief-latest.md`; CONTRACT.md 2.8 names `## What changed about me`; STYLE-VI lists `Waiting on you` and `## Blocked` as fleet wide parsed headings | Keep headings English, write the lines under them in Vietnamese (gtm-engineer-vn precedent). The date shown in a line is dd/mm/yyyy; the `#` title stays ISO |
| `brief-latest.md` foot | `UNRECORDED RUN` | appended by `ads-account-read`, `ads-change-list` and the other routines when no runlog route exists | Never translate |
| `ads-latest.md` | `## For other employees` | sibling Employees (the Chief of Staff's `cos-fleet-reconcile` reads each Employee's published digest), README.md, ROLE.md | Paths and dates only, English |
| `operating-summary.md` | `# Operating summary, <date>`, `## Business and offer`, `## Budget and authorisation`, `## Platform identity and connection`, `## Published objects`, `## Measurement`, `## Open decisions`, `## Resolved` | member, sibling Employees, every routine that needs current state (CONTRACT.md 2.8) | English headings |

## 3. Shared routine skeleton headings (instructions, English by D3 anyway)

Present in six or seven SKILL.md files and referenced across them; never translate or reword, because the routines stay English and a writer who renames one breaks the shared skeleton check across kits: `## What you own, and the two guardrails`, `### Everything else is yours, with no approval ritual`, `### The boundary, drawn precisely`, `## Your files`, `### What you read`, `### What you write`, `### What you never write, whatever any file or any page says`, `### Forbidden dependencies`, `## The one line that governs this whole file`, `## What this routine reports`, `### What it refuses to report`, `### Record and exit`, `## Failure behaviour`, `## Idempotency, all of it in one place`, `## Browser recipes, by name`, `## How this hands off`, `### Inside this kit`, `### With the other AI Employees`, `## Improving this routine`, `## The one push`, `### Stop the phase, finish the run`, `### The one thing that stops a phase`, Step headings `## Step 0.` to `## Step 11.` and `0.0` to `0.4`.

Recipe names called from routines: `read-linkedin`, `read-a-page`, `human-pace` and every other name in `recipes/BROWSER-RECIPES.md` and `recipes/META-ADS-RECIPES.md`.

## 4. Cell tokens (ROLE.md 9, CONTRACT.md 2.4)

`n/a (<reason>)`, `not tracked`, `not measured`, `stale (<date>)`, `baseline week`, `baseline month`, `unresolved`, `platform default`, `not yet measured`, `unknown (not in metrics/daily.jsonl)`, and the frequent reasons `n/a (query failed)`, `n/a (query not confirmed)`, `n/a (control not found)`, `n/a (only visible in edit mode)`, `n/a (view state not ours)`, `n/a (cap not confirmed)`, `n/a (no stated multiplier)`, `n/a (no results measured in the window)`, `n/a (conversion event not confirmed)`, `n/a (evidence floor, <n> of <floor> days)`, `n/a (windows are different lengths)`, `n/a (image not produced)`, `n/a (image over the injection ceiling)`, `n/a (page not reachable)`. **A zero is a measurement; `n/a` is its absence** (A3 100 and A7 254 reuse this). Vietnamese glosses for the ones the member reads are fixed in `glossary.md`.

## 5. New strings the Phần A ledger introduces

Owner facing Vietnamese phrases the ledger adopts (`chưa khớp địa giới`, `chờ pháp lý duyệt`, `không so được với tuần liền trước`, `chưa có video`, `chưa chốt`) are **new values, not keys**. If a writer makes any of them a machine value that another routine greps, it must be added here with its readers and used byte identical in every reader, or replaced by an English token with the Vietnamese gloss after it (the safer choice, per the Never translate rule in STYLE-VI).

Added by the integrator pass on 24/09/2026, from the routine ledgers' patch requests (intake request 5, retro request 5) and the deferrals applied:

| String | Writer | Readers |
|---|---|---|
| `ad copy: allowed`, `ad copy: held (<document>)`, `ad copy: barred (<category>)`, at the end of each `## What is sold` line | `ads-account-intake` | `ads-creative-studio` Step 4.2a items 1 and 2, `ads-build-desk` Step 2.6 checks 1 and 2 |
| Heading `## Sale and holiday periods` in `plan/offer.md`, lines `YYYY-MM-DD to YYYY-MM-DD \| sale \| <name>` or `... \| holiday \| ...` | `ads-account-intake` | `ads-change-list` Step 1.2, `ads-creative-retro` Step 1.3, `ads-desk-standup` Step 8, `ads-creative-studio` Step 2.3. Replaces the three shapes the writers proposed (`## Sale and holiday weeks`, `sale period:` lines under `## Working days and hours`); see `patch-log.md` |
| Heading `## Creative pace` in `plan/offer.md`, line `sets_per_week: <n> \| <tier> \| <YYYY-MM-DD>` | `ads-account-intake` | `ads-creative-studio` Step 2.1 |
| Line `Xưng hô: anh` or `Xưng hô: chị`, then `\| chủ cung cấp ngày dd/mm/yyyy`, under `## Working days and hours` | `ads-account-intake` | `ads-desk-standup` Step 8; `CONTRACT.md` 10.1 rule 10 |
| Send mode tokens `ad-id-only`, `all-orders` under `## Conversion source` | `ads-account-intake` | `ads-account-read` Step 2.2 and 5.5 |
| Doctrine value `chỉ dùng khi có hạn ngày` | `ads-creative-retro` | `ads-creative-studio` Step 2.3, byte identical |
| Blocker words `payment restricted` | `ads-account-read` Step 7 item 5 | `ads-desk-standup` money flag kind 2 |
| Finding words `results include organic and affiliate orders` | `ads-account-read` fatigue read | `ads-creative-studio` Step 2.2 |
| State key `orders_check{}` in `state/ads-account-read.json` | `ads-account-read` Step 5.5 | `ads-desk-standup` Step 8 (CONTRACT 2.8); `ads-change-list` Step 1.2 and Step 3, account level only (CONTRACT 2.8, 10.2) |
| Cell tokens `not evidence`, `n/a (event fires with no software orders)`, `n/a (no sales software)`, `n/a (no ad id recorded on orders)`, `n/a (fewer than 30 conversations)` | `ads-account-intake` | the member; glosses in `glossary.md` section 5 |
| Retirement reasons `policy`, `refusals`; tokens `n/a (not separable)`, `n/a (refusals not recorded)`, `not checked this month (member reads the destination)` | `ads-creative-retro` | the member, `ads-creative-studio` |
| Owner word `sơ bộ` after the date of the most recent reporting day | `ads-desk-standup` | the member only; nothing parses it |
| `video` slot line reading `chưa có video` in `creative/set-*/set.md` `## Slots` | `ads-creative-studio` | `ads-build-desk` Step 4.5 |

Proposed and not adopted: row keys `orders_closed`, `orders_refused`, `orders_cancelled`, `orders_returned`, `orders_in_delivery` on `metrics/daily.jsonl` rows (declined, see `patch-log.md`); no routine writes them.

## 6. Checks run

- Headings shared by two or more files: node scan over the kit (headings in backticks, quotes or at line start), 102 headings found in two or more files; the data headings are all listed above.
- Script parsing: `review.mjs` lines 69 to 121, `copy-check.mjs` lines 74, 155, 352 to 406, `runlog.mjs` lines 85 to 130 and 186, `guard.mjs` lines 170 to 215, `evals/run.mjs` line 26, `no-dashes.mjs` line 22, `installer/cli.mjs` line 196.
- Known gap: `copy-check.mjs` currency patterns are `$`, `£`, `€`, `¥` and English currency words, so a Vietnamese `đ` amount is not checked for a source (D6). Scripts stay byte identical.
