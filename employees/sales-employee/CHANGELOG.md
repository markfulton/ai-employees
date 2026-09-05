# Sales Employee: release history

The version this kit ships as lives in `VERSION` at the root. This file is written by the people who publish the kit and **no routine ever writes it**. Your own improvements go to `improvements/CHANGELOG.md`, which is a different file and stays yours.

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
- The prospect sweep now retires a source after three runs with zero contactable rows and spends the budget on sources that produce.

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
