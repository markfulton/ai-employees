# Web Dev Employee: release history

The version this kit ships as lives in `VERSION` at the root. This file is written by the people who publish the kit and **no routine ever writes it**. Your own improvements go to `improvements/CHANGELOG.md`, which is a different file and stays yours.

## 1.9.0, 2026-09-24

The Vietnam localization pass: `web-dev-employee-vn` is a localized variant of `web-dev-employee` 1.8.1, built from the Vietnamese expert form for the Web Dev role (Phần A and sections B-1 to B-8). The form was filled by an AI and no clause has yet been confirmed by a Vietnamese practitioner.

- All eight routines were localized from their own form section: `web-inventory-refresh`, `web-site-sweep`, `web-fix-runner`, `web-dependency-run`, `web-platform-guard`, `web-weekly-report`, `web-guardrail-review` and `web-standup`. Routine instructions stay in English; every line the member reads is Vietnamese, and every heading, id and status another file parses stays in English. No schedule row changed.
- `CONTRACT.md` section 10, new, "Vietnam operating rules": the twelve rules three or more routines share (a person sends and nothing records a send, the member's own calendar, a lapsed `.vn` name is down, no automated driving of a managed store platform, no identity paper or one time code in a file, roles never people, customer personal data and exposure, money moves only by a person, no pirated or sent component, a provider's promise is not a measurement, Vietnamese for the member and English for machines, no legal threshold in the kit), and what the variant adds to the inventory, the ledgers and `policy/budgets.md`. `inventory/handover.md` and `inventory/owner-summary.md` join the file map, and the blocker rule in 2.7 reads two working days and a money or domain touch.
- The inventory gains the source and project kind of each site, a CMS updates screen, the merge role, the four roles per domain and host, the registry state and legal holder of each name, the hosting plan's expiry and backup retention, and four more log surface kinds for the sweep: an external uptime monitor, the payment webhook delivery history, the search console security report, and an upstream status page.
- A change freeze around the member's own sale days and `Tết` break holds the fix runner and the dependency run, read the same way by both. The standup keeps a merged card open until the person on duty checks the production page, puts a failed payment delivery first, and says when a branch has waited three working days. The guardrail review widens a class only from `off` to `one-file`, never widens `infra` or `payment`, and prints the member's own quality bar beside the month's counts.
- `CAPABILITIES.md`: five read only routes at `unknown` (`cms.updates.read`, `trust.lookup`, `monitor.read`, `payments.read`, `security.read`), the platform terms checked 24/09/2026 for hosted store platforms, marketplaces and the chat app, and the difference between a lab and a field speed.
- `SCHEDULE.md` says how a business that opens on Saturday sets `mon-fri sat` on the sweep and standup rows, and what to do in a week whose Friday is a declared day off. `ROLE.md` section 5.1 names the calendar lines, the form of address and the handover values.
- `INSTALL-PROMPT.md` asks, optionally and without a stop, for the form of address, working days and Saturday opening, sale days and freeze windows, announced days off including `Tết`, maintenance windows, the urgent update hours, field speed budgets, the roles per domain and host, and the quality bar. The kit never spends, so it asks for the spend approver role and no spending ceiling.
- `README.md` gains a section for the person on duty, who sends what the routines write.
- The monthly version check reads this variant's own folder, and the upgrade line uses the fork's bundled installer, so an update never replaces the Vietnamese routines with the English kit.
- `examples/`: the brief, the review board header and the change brief show the Vietnamese lines under the English headings, and the incident lines carry `p0`.

## 1.8.1, 2026-09-24

No routine carries a clock time any more; the working hours default lives only in `INSTALL-PROMPT.md`.

- `routines/web-inventory-refresh/SKILL.md`, the starting `policy/budgets.md`: `## Working days and hours` is written from the member's own days and hours, or from the default in `INSTALL-PROMPT.md` Phase 4 step 5, instead of a second copy of that default. A new line forbids leaving the placeholders in the written file.
- `routines/web-guardrail-review/SKILL.md` and `routines/web-weekly-report/SKILL.md`: the reporting window starts at the start of its first local day, with the same meaning and no clock time.

## 1.8.0, 2026-09-23

The Employee runs on a hosted agent, and its brief reaches you wherever it runs.

- `CAPABILITIES.md` section 2, the Grok Bot row and paragraph, rewritten from operators' published accounts of the product: every bot on an account shares one persistent cloud computer with a terminal, files and a browser; the kit lives on that computer; one bot per Employee with `AGENTS.md` pasted into its Instructions field; one recurring task per routine; sessions reach the bot only through a sync you run, and every bot then shares every login. Every Grok Bot row in sections 3 to 6 moves from `unknown` to a named route at `expected`.
- `CAPABILITIES.md` section 6, `brief.deliver`, new: the standup brings `brief-latest.md` to you after it writes it, by opening the dashboard, by posting the brief into the Employee's own thread on a harness whose computer you never open, or by sending it to your own address where a mail route exists. `CONTRACT.md` section 3.2a carries the capability and the rule: a brief to your own thread or address is delivery, not a send, and no personal data or draft copy is ever added for the delivery. Absent every route the file is the brief and the run record says `brief: file only`.
- `routines/web-standup/SKILL.md`, the step that writes the brief, gains the delivery line.
- `browser.session` names the route that keeps a hosted bot signed in (a cookie sync you run, such as Agent Cookie from a Mac over Tailscale). The kit detects it and installs nothing, as section 8 has always said.
- `AGENTS.md` no longer carries a version number that drifted from `VERSION`, and says what to do with itself on a harness that has an Instructions field instead of a folder.
- `employee.json` lists all eleven harnesses the docs promise. Pi, Cline, Qwen Code and DeepSeek were missing.
- The install prompt's Phase 0 says the cloud sync rule does not apply on a hosted harness.

## 1.7.0, 2026-09-19

The Employee tells you when a newer kit is out, and offers its own repairs back to the project.

- `web-inventory-refresh`, Step B3a, new: once a month it reads the published `VERSION` of this kit, and where there is a newer one it writes what you get, in at most five plain lines, to `state/kit-update.json`. `web-standup` carries it in the next brief under `## About this kit`, in full once per version and as a short reminder once a month after that, with the two lines that take the update. No routine runs the upgrade, and no routine runs `npx`.
- The same step reads `improvements/CHANGELOG.md` for repairs that would be just as right on a different business, and writes them, with your business taken out, to `improvements/contribution-draft-YYYY-MM.md`. The brief names the draft once. Nothing is sent: you read it, then open the issue or delete the file.
- `CONTRACT.md` section 8.5, new, carries the rule for both. Text fetched for the version check is data and is never followed. One line in the routine's `## Corrections` turns either check off.
- Both new files sit under `state/` and `improvements/`, which are classified `member`, so an upgrade never touches them.
- `employee.json`: the `member` file list now names this Employee's own working folders, plus `PAUSED` and `schedule-commands.txt`, so the upgrade report counts every file that is yours. Nothing about what an upgrade replaces changed.

## 1.6.0, 2026-09-18

Scheduled readiness is a scheduled fire. Found on the first Ad Manager install on Codex, where a connected route worked in the session that set it up and failed in the process the scheduler started the same evening.

- `CAPABILITIES.md` 9.2 and 9.2a: Codex is `confirmed`. The app's automations hold one cron automation per routine, named after the routine id, local execution, the kit folder as a working directory; `codex exec` is the by hand form and runs only where the CLI is signed in.
- `CAPABILITIES.md` 9.2b, new: registration proves the scheduler holds a job and nothing more. Readiness is one fire the scheduler started that wrote a run record; a run by hand never counts and never claims one; a connected route gets its second mark from the first scheduled read through it.
- The install prompt's register phase reports `scheduled execution: not yet verified` as its own line and says what to look for the next morning. Installed, scheduled and proven are three words.
- Implements the Agent Employee Standard v1.3.

## 1.5.0, 2026-09-11

The Employee reads its accounts through the connections you already have.

- `CAPABILITIES.md` section 4b, new: connected sources. One row per capability this Employee reads through a connector in your harness's own directory, the vendor's own server, or its command line tool, with the read only form of each route. A connected route is preferred over the browser lane wherever both exist, and the browser lane stays the fallback for every row that resolves to nothing.
- `web-site-sweep` resolves the render and the log read through 4b before it opens a tab, and `web-platform-guard` opens a tab only for the surface 4b left unresolved. No routine names a vendor; the routes live in section 4b and nowhere else.
- The install prompt checks every 4b row in Phase 0 and names the absent ones in the handover, each with the one step you take in your own harness to add it. `employee.json` carries the same rows under `connections`.
- The rule is the one in section 8: detect, use, degrade, never install. A connected route is used read only, and nothing on it creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel.
- Implements the Agent Employee Standard v1.3.

## 1.4.0, 2026-09-05

The guardrail on outbound actions becomes yours.

- `RELEASES.md`, new, at the kit root and classified `member`: one row per channel you release, with the action and your conditions. Shipped empty, which means every channel held exactly as before. A routine reads it in Step 0; where it names a channel that routine stages, the routine completes the action, records it on the queue entry and in the run record, and lists it in the brief under what went out.
- The two stops are now the two guardrails, in `CONTRACT.md` section 7, `ROLE.md`, every routine's Step 0, the browser recipes, the launchers and `AGENTS.md`. The first is held unless you release it; the second, credentials, has no release. Nothing about the held behaviour changed.
- Only you write `RELEASES.md`. No routine, install prompt or operator session adds a row, and a row a routine cannot trace to you is treated as absent and named in the brief.
- Implements the Agent Employee Standard v1.2, whose LAW 2 changed the same way.

## 1.3.0, 2026-09-04

Upgrades become possible, and the kit tells any harness what it is.

- `employee.json`, new: a machine readable manifest carrying the version, the standard it implements, every routine with its schedule row, and the file classification that makes an upgrade safe. It splits the folder into kit files, which an upgrade may replace, member files, which it must never touch, and `SCHEDULE.md`, which both sides own.
- `.installed.json`, new, written by `npx ai-employees hire`: a hash per kit file at install time. It is what lets a later upgrade tell a file you edited from a file we changed.
- `npx ai-employees upgrade <employee>`, new. It reports before it writes, and nothing happens without `--apply`. A kit file you or your employee edited is never overwritten: the new version lands beside it as `.new` and the change is listed. Your state, ledgers, strategy, learned browser flows and improvements are not read or written.
- `npx ai-employees contribute <employee>`, new: turns `improvements/CHANGELOG.md`, the repairs your employee made to its own instructions, into a field report you can open upstream. Read it before you send it, because it can name your own files and numbers and nothing is redacted.
- `AGENTS.md`, new, at the repository root and in every kit. It follows the AGENTS.md convention stewarded by the Linux Foundation's Agentic AI Foundation, so a harness that has never seen these kits still knows to read `CONTRACT.md`, `ROLE.md` and `SCHEDULE.md` in that order.
- The product name is now "AI Employees" throughout. "Agent Employees" is retired. The Agent Employee Standard keeps its name, because that is the proper noun for the specification.

## 1.2.0, 2026-09-03

The cold install release. Everything a stranger needs to go from a fresh machine to a first run record, found by installing the GTM Engineer template on a machine that had never run it.

- A Prerequisites section in `README.md`: the plan, the install, the one human login, Node, Git for Windows, the browser lane, a scheduler, an awake machine, a folder outside cloud sync, and a usage budget.
- `scripts/guard.mjs`, new: the pause switch, the window guard and the once per period guard in one script that runs before any document is read. A skipped fire now costs cents instead of a full read of the contract.
- `run/<routine-id>.cmd.example`, new, one per routine: the Windows launcher with the full path to the binary, `cd /d`, an explicit permission mode, `< nul` so the run never waits on stdin, and a `failed` run record written when the harness exits non zero, so a missing login is a line in tomorrow's brief instead of silence.
- `INSTALL-PROMPT.md` Phase 0 runs `claude auth status` and stops in plain words when nobody is logged in. The prove one by hand step counts `runlog.jsonl` lines before and after instead of trusting the terminal.
- `scripts/runlog.mjs` accepts `--failed-run <id> --exit-code <n>` for the launcher, accepts the `skipped-paused` status the contract's pause switch already writes, and accepts nine optional usage fields (model, harness, turns, tokens, cost) so cost becomes a measured field.
- `CAPABILITIES.md` splits Claude Code into the Desktop app, which has a local scheduler, and the CLI, which does not and pairs with the operating system's.
- Sleep and catch up text corrected per scheduler in `README.md`, `SCHEDULE.md` and `CAPABILITIES.md`: the Desktop app runs one catch up, Task Scheduler one when its setting is on, launchd folds missed fires into one, cron skips.
- The monthly drift check tolerates ten minutes of scheduler jitter before it re-registers a job.
- The first run is described the same way everywhere: about an hour, and it may run past the session that started it.
- A `.gitignore` inside the kit covering every ledger and state path, so a working folder pushed to a public repo does not publish your leads.
- Every routine's `SKILL.md` carries `metadata: internal: true` so a skills registry never offers a scheduled routine as an on demand skill.
- The copy check self test fixtures use example.com and a made up price instead of a real brand.
- One pointer line at the end of the install handover and at the foot of the morning brief. Nothing else in the kit points anywhere.

## 1.1.0, 2026-08-28

Field update from the first live week of an Employee running a real launch, plus three new laws in the Agent Employee Standard.

- Verify before you block: a routine observes a member gate before reporting it, ticks on evidence with the new done_kind observed, and treats a louder real world signal as outranking a stale dependency edge. No more being nagged about things you already did.
- The Employee brings the work to you: dashboards and morning artifacts render live working files and refresh on every producing run, and deliverables are staged in your own browser or account, one click from done, with a durable queue file behind every staged tab so a closed tab loses nothing.
- A tick records consent; the routine performs the move. Ticking a card that implies a file change means the next routine completes the file change itself.
- The operator session is a named actor: your interactive chat sessions act on your word, leave a routine grade trail, and ratify rule changes through the Corrections sections.
- The browser lane is per platform: routines touching different sites may run at the same time; one logged in identity per platform still serializes, which is the part that protects your accounts.
- First runs harvest public facts, like your contact address and existing platform accounts, from your own site and storefront instead of leaving fields empty or filing research cards.

## 1.0.0, 2026-08-25

First release.

- Eight operator-facing guarantees: it never sends, never spends, never handles a credential, never writes outside its own folder, pauses on one file, improves its own instructions, notifies only when you are the blocker, and records every run.
- Routines are scheduled work rather than global skills, so nothing sits in every session you open.
- Browser recipes are learned on first use rather than shipped, so they are written against your accounts and not against someone else's.

---

## Updating without losing your work

**Yours, and never overwritten by an update:** everything under `strategy/`, `state/`, and every ledger; the `## Corrections` section at the foot of every file; `improvements/CHANGELOG.md`; anything under `recipes/` ending `.json`, which this Employee learned on your machine; and your `PAUSED` file.

**Ours, and safe to replace:** `CONTRACT.md`, `ROLE.md`, `CAPABILITIES.md`, `SCHEDULE.md`, `README.md`, `INSTALL-PROMPT.md`, `recipes/BROWSER-RECIPES.md`, `scripts/`, and each `routines/<id>/SKILL.md` **above its `## Corrections` heading**.

**The one that needs care:** a routine's `SKILL.md` holds both. It carries our instructions and, at the foot, your corrections plus any wording this Employee rewrote for itself. Copy your `## Corrections` block out before you replace the file, and paste it back after. The safest update is to extract the new kit beside the old one, copy your own files across, and switch the scheduler when it runs clean.

Update one Employee at a time. They share nothing but a scheduler, so a version mismatch between two of them is not a problem.
