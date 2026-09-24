# customer-satisfaction-employee-vn: strings that stay in English

Built 2026-09-24 by grepping the original kit (`routines/*/SKILL.md`, `CONTRACT.md`, `INSTALL-PROMPT.md`, `SCHEDULE.md`, `ROLE.md`, `CAPABILITIES.md`, `recipes/BROWSER-RECIPES.md`, `examples/`, `scripts/`). A string here is read by a script or by more than one file. **Writers keep it byte for byte.** Vietnamese goes on the member's own lines under it, or as a fixed gloss after it (STYLE-VI), never in place of it. When in doubt, grep the variant kit for the string before translating anything.

## 1. Read by a script

Scripts under `scripts/` never change (VN-DECISIONS D6), so everything they parse is frozen.

| String or shape | Parser | Also read by |
|---|---|---|
| `SCHEDULE.md` table: columns `routine`, `days`, `fire`, `window_start`, `window_end`, `key`, `budget`, `browser`; `days` tokens `mon-fri`, `mon` to `sat`, `first-weekday`, `last-weekday`, `off`; keys `YYYY-MM-DD`, `YYYY-Www`, `YYYY-MM` | `scripts/guard.mjs` | every routine at Step 0.1, CONTRACT 1.2 and 1.3 |
| `PAUSED` (empty, or routine ids one per line) | `scripts/guard.mjs` | every routine at Step 0.0 |
| `state/<routine-id>.json` key `last_period` | `scripts/guard.mjs` | every routine at Step 0.2, `csat-desk-standup` |
| Run record keys `routine`, `period`, `start`, `end`, `status`, `outputs`, `blockers`, `notes` and the optional usage keys | `scripts/runlog.mjs` | CONTRACT 4, every routine's last step |
| Statuses `ok`, `partial`, `failed`, `skipped-out-of-window`, `skipped-already-ran`, `skipped-paused`, `blocked-login`, `blocked-browser-busy` | `scripts/runlog.mjs` (closed set) | CONTRACT 4.1, every routine, `csat-desk-standup` and `csat-satisfaction-report` fold them |
| Routine ids `csat-*` and their cadence map | `scripts/runlog.mjs` | everywhere |
| Run record refusals: English salutations (`hi`, `hey`, `hello`, `dear`), sign offs, `subject:`, URLs, emails, ticket id shape, guillemets, dashes | `scripts/runlog.mjs` | CONTRACT 4.2. **Gap:** a Vietnamese greeting such as "Dạ anh" in `notes` is not caught; writers must keep `notes` free of draft text by instruction |
| `--dest` values `email`, `dm`, `form`, `strategy`, `dashboard`, `plain` | `scripts/copy-check.mjs` | every routine that calls `copy.check` |
| `strategy/tone.md` headings `## Banned words`, `## Banned openers`, `## Banned closers`, `## Hashtag policy` (value `none`) | `scripts/copy-check.mjs` (lower cased heading match) | `csat-desk-intake` writes them; `csat-reply-desk`, `csat-deflection-desk` read them. Vietnamese banned words go **as list items under** these headings |
| `strategy/proof-inventory.md` headings `## Member claims`, `## Agent sourced` and entry line `<exact string> \| <ledger path> \| YYYY-MM-DD` | `scripts/copy-check.mjs` | CONTRACT 2.3, `csat-desk-intake`, `csat-satisfaction-report` (only writer of Agent sourced), every routine that writes a claim |
| Surviving placeholders `«paste at send time»`, `«member: paste the detail»` | `scripts/copy-check.mjs` | CONTRACT, ROLE, `csat-reply-desk` |
| Metric shapes (percent, `$ £ € ¥`, `usd`, `x`, counts of customers or people) | `scripts/copy-check.mjs` | **Gap (D6):** `đ`, `VND`, `triệu`, `đơn`, `khách` are not recognised, so an unsourced Vietnamese figure passes. Writers must enforce "every figure has a source path" by instruction |
| Dash code points U+2012 to U+2015 and their entities | `scripts/copy-check.mjs`, `scripts/runlog.mjs` | repo `no-dashes.mjs` |

## 2. Headings read by more than one file

| Heading | File it lives in | Writer | Readers |
|---|---|---|---|
| `## Corrections` and the line shape `YYYY-MM-DD: what was wrong, what to do instead.` | last section of every shipped file | member | every routine at the top of every run. Never edited by a localization pass |
| `## What is sold`, `## Price and billing shape`, `## What it does today`, `## What it does not do`, `## Known open issues`, `## Recent changes`, `## Help center`, `## Claims found on your own pages`, `## Sources read` | `strategy/product.md` | `csat-desk-intake` | every routine except the standup; `csat-reply-desk` asserts a fix only from `## Recent changes` |
| `## <channel-id>: <name>`, `## Account and billing surfaces` | `strategy/channels.md` | `csat-desk-intake`, restricted `csat-inbox-sweep` | sweep, reply desk, churn watch, deflection desk, report, taxonomy, `recipes/BROWSER-RECIPES.md` |
| `## Samples`, `## Apology policy`, `## Sign off`, `## Dash policy` (plus the four in section 1) | `strategy/tone.md` | `csat-desk-intake` | `copy.check`, reply desk, deflection desk, INSTALL-PROMPT |
| `## Published refund policy`, `## Published cancellation policy`, `## What you will grant without asking`, `## What you will never grant`, `## Response target`, `## Working days and hours`, `## Sources read` | `strategy/policy-limits.md` | `csat-desk-intake` | reply desk, churn watch, standup (`## Response target`, `## Working days and hours`), deflection desk, ROLE, INSTALL-PROMPT |
| `## Severity rules confirmed`, `## Global severity rules`, `## Staleness`, `## Themes`, `## <theme-id>: <name>` | `strategy/themes.md` | `csat-desk-intake` once, then `csat-taxonomy-refresh`; the date under `## Severity rules confirmed` is member only | sweep, reply desk, churn watch, deflection desk, report, intake, README, ROLE, INSTALL-PROMPT |
| `## Effectiveness` | `macros/macro-<theme-id>.md` | `csat-deflection-desk` | `csat-satisfaction-report`, `csat-taxonomy-refresh` |
| `## Use it when`, `## Do not use it when`, `## The reply` | macro files | `csat-deflection-desk` | `csat-reply-desk` reaches for the macro body; keep the shape |
| `## What has happened since` | `risk/at-risk-<slug>.md` | `csat-churn-watch` | CONTRACT 2.7, the churn watch on its next run |
| `# «date»`, `## Today`, `## Waiting on you`, `## Blocked`, `## What changed about me`, `## About this kit`, `UNRECORDED RUN` | `brief-latest.md`, `briefs/` | `csat-desk-standup`; `UNRECORDED RUN` appended by any routine with no `runlog.append` route | the member, CONTRACT 2.8 (four sections, one conditional), README, INSTALL-PROMPT, reply desk, taxonomy, intake. Precedent: GTM 1.11.0 keeps these English and writes Vietnamese lines under them |
| `## For other employees`, `## Notes` | `csat-latest.md`, `desk/DESK-BOARD.md` | `csat-desk-standup` | sibling Employees read `## For other employees` (paths, ids, dates only); the standup re-reads `## Notes` on the board |
| `## Only you can close these`, `## The desk closes these itself` (original render; the variant renders `## Chỉ anh/chị đóng được những việc này` and `## Bàn CSKH tự đóng những việc này`) | `desk/DESK-BOARD.md` | `csat-desk-standup` | read by no other file; the standup reads them only as delimiters on its own next read, and drops an English one from an earlier render rather than carrying it into `## Notes` |
| `## R-nn`, `## P-nn` | `queue/YYYY-MM-DD-reply.md`, `-community.md` | `csat-reply-desk` | standup (ticks), churn watch, deflection desk, taxonomy, report (entry counts), `examples/queue/2026-03-05-reply.md` |
| Step headings `0.0 The pause switch` to `0.4 The browser mutex`, `What you own, and the two guardrails`, `The rule about numbers`, `Improving this routine`, `The one push` and the other shared skeleton headings | every routine | the routine itself | the skill checker compares level two headings in order against the original; keep every one |

## 3. Line tokens, keys and fixed values

| String | Where | Readers |
|---|---|---|
| `- ticket:` and `- [ ] sent` (exactly one checkbox per entry) | queue entries | CONTRACT 2.6 says both are machine parsed; standup, reply desk, taxonomy |
| `- channel:`, `- to:`, `- severity:`, `- why:`, `- waiting since:`, `- they said:`, `- theme:`, `- macro:`, `- risk:`, `- note:` | queue entries | reply desk, `recipes/BROWSER-RECIPES.md`; keep keys English, values may carry Vietnamese text |
| `- remedy:` values `refund`, `credit`, `plan-change`, `cancellation`, `extension`, `replacement`; `- amount:`, `- screen:`, `- policy:` | queue remedy block | reply desk, taxonomy, CONTRACT 2.6 |
| `- grant this first, then send the reply below` | queue remedy block, verbatim every time | CONTRACT 2.6, reply desk |
| `[member: confirm this is granted before you send]` | draft bodies | CONTRACT, ROLE, CAPABILITIES |
| `above the recorded limit, your call` | queue `- policy:` line, dossiers | CONTRACT, INSTALL-PROMPT, ROLE, churn watch, intake, reply desk. A Vietnamese gloss may follow it |
| Board line `- [ ] D-nnn \| <title> \| due YYYY-MM-DD \| <done_kind>` | `desk/DESK-BOARD.md` | standup parses id and tick; the title may be Vietnamese |
| `done_kind` values `local-artifact`, `member-action`; card `type` values `reply`, `save`, `macro`, `help`, `product`, `research`, `verify`; card `status` values `todo`, `staged`, `filled`, `blocked`, `parked` | `desk/desk.json`, `desk/inbox.jsonl` | standup, report, every appender |
| Ticket `status` values `new`, `stale`, `drafted`, `replied`, `resolved`, `dropped`; every key of the ticket line (`ticket_id`, `revision`, `channel`, `source`, `observed_on`, `event_date`, `verbatim`, `theme`, `severity`, `severity_rules`, `severity_words`, `redactions`, ...) | `tickets/tickets.jsonl` | all eight |
| `channel:` values `mailbox`, `helpdesk`, `review`, `marketplace`, `forum` (closed list of five) | `strategy/channels.md`, tickets | sweep, report (volume by channel). A Shopee chat is `marketplace`; a Google Maps review is `review`; do not add a sixth value |
| Channel block fields `channel:`, `url:`, `login state:`, `rating scale:`, `sorts by date:`, `marks read on open:`, `reply route:`, `recipe:`, `notes:` and the token `unresolved` | `strategy/channels.md` | intake, sweep, `recipes/BROWSER-RECIPES.md` |
| Theme block fields `status:`, `created:`, `definition:`, `matches:`, `severity rule:`, `default severity:`, `recurrence:`, `examples:`, `retired:`, `retired_reason:`, `merged_into:` | `strategy/themes.md` | taxonomy, sweep, reply desk. `matches:` may list Vietnamese customer phrases, including text without diacritics |
| Severity values `critical`, `high`, `normal`, `low` and the rule ids (`paid-and-blocked`, `money-wrong`, `data-or-privacy`, `leaving`, `second-contact`, `public-and-low`, `broken-feature`, `question`, `request`, `no-product-content`) | themes, tickets, queue | CONTRACT 2.3 says a rule id is never renamed; B-1 and B-6 may add rules with new English ids |
| Risk `wires` values `repeat_contact`, `escalating_severity`, `cancellation_language`, `billing_signal`, `unanswered_past_target`; statuses `at-risk`, `cleared`, `saved`, `lost` | `risk/risk.jsonl` | churn watch, standup, report, reply desk, taxonomy |
| Macro and help header keys `theme:`, `shipped:`, `rewrites:`, `built from:`, `facts checked against:`, `links to:`, `drafted:`, `status: draft, not published`, `publish to:` | `macros/`, `help/` | deflection desk, report, reply desk |
| `[redacted: <class>]`, e.g. `[redacted: api-key]` | ticket verbatim, drafts | CONTRACT, INSTALL-PROMPT, ROLE, sweep, CAPABILITIES |
| `strategy/CHANGELOG.md` line `YYYY-MM-DD \| <routine-id> \| <file changed> \| <what changed> \| <evidence path>` | append only | standup puts each line under `Waiting on you` |
| Run record note tokens `copy-check: in-agent`, `runlog: in-agent`, `push: not available`, `brief: file only`, `no local clock capability`, `no browser control capability configured`, `first run, window guard not applicable`, `scheduled execution: not yet verified` | run records, brief | CONTRACT, CAPABILITIES, SCHEDULE, INSTALL-PROMPT, several routines |
| Cell tokens `not tracked`, `stale (<date>)`, `baseline day`, `baseline week`, `baseline month`, `no items captured`, `not published`, `not enough evidence`, `no outcome recorded`, `evidence floor`, `no volume`, `audit period not complete`, and every `n/a (<reason>)` (most used: `no response target recorded`, `no outcome recorded`, `not published`, `no search capability`, `surface marks items read on open`, `no clocks recorded by csat-desk-standup`, `browser held by <routine>`) | report, brief, dossiers, state | ROLE, INSTALL-PROMPT, report, taxonomy, deflection desk. Add the glossary gloss after the token where the member reads it |
| Helpdesk control labels `Submit as Pending`, `Submit as Open`, `Submit as Solved`, `Submit as Closed`, `Send and close`, `Save and publish`, `Save and continue` | forbidden control lists | CONTRACT, INSTALL-PROMPT, ROLE, recipes, reply desk. They name English UI controls; a Vietnamese variant may **add** the Vietnamese labels it observes (for example Kênh Người Bán buttons) beside them, never replace them |
| `"the helpdesk asked for a sign in, nothing entered"`, `"auth error"`, `verbatim_truncated: true`, `marks read on open: true` | blockers, recipes | CONTRACT, recipes, sweep, taxonomy |
| `«RUN <routine-id>»`, `«CSAT_ROOT»`, and every other guillemet placeholder | launchers, templates | CAPABILITIES, INSTALL-PROMPT, `run/*.cmd.example` |

## 4. Paths

Every path in CONTRACT section 2 (`tickets/`, `queue/`, `risk/`, `macros/`, `help/`, `report/manual.md`, `report/satisfaction-YYYY-Www.md`, `desk/`, `brief-latest.md`, `briefs/`, `csat-latest.md`, `state/*.tmp.*`, `recipes/<flow>.json` and the seven named flows) stays as it is. ISO dates and ISO week keys stay in paths and ledgers; the member sees dd/mm/yyyy (D12).
