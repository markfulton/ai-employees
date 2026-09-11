# Release history

The repo version tracks the kits. Each employee carries its own `CHANGELOG.md` with the detail, and this file links them.

## SEO/AEO Employee 1.6.0, 2026-09-11

The SEO/AEO kit adds buyer-question mapping, sourced answer improvements and a scheduled answer visibility audit. Other kits remain at 1.5.0. See [kit changelog](employees/seo-employee/CHANGELOG.md).

## 1.5.0, 2026-09-11

The Employees read their accounts through the connections you already have, and the install is two steps.

- **`CAPABILITIES.md` section 4b in every kit, connected sources**: one row per capability an Employee reads through a connector in the harness's own directory, the vendor's own server, or its command line tool, with the read only form of each route. A connected route is preferred over the browser lane wherever both exist; the browser lane stays the fallback for every row that resolves to nothing. Routines still name capabilities and never a vendor: ten routines across the eight kits now resolve their account reads through 4b before they open a tab.
- **The install prompt** checks every 4b row in Phase 0 and names the absent ones in the handover, each with the one step the member takes in their own harness to add it. `employee.json` carries the rows under `connections`.
- **`docs/HARNESSES.md`** gains an "Adding a connection" column, `docs/PREREQUISITES.md` an optional item 11, and the Agent Employee Standard moves to v1.3: LAW 4 covers connected sources under the same rule as skills, detect, use, degrade, never install.
- Every kit is 1.5.0.

- **README**: the two step install sits directly under the intro. Extract a kit to a local folder, open your agent there and say "install the GTM Engineer from this folder". The ten other agents fold into one collapsed block, "What sets these apart" and "How an AI Employee runs" are written for a first time reader, and the mechanics (windows, period keys, capability routes, the guard script) stay in `docs/HOW-EMPLOYEES-WORK.md` and `docs/STANDARD.md` where they belong.
- **Every kit's `INSTALL-PROMPT.md`** works when the agent reads it from the folder instead of a person pasting it: the root resolves to the folder the file sits in, and a URL the agent cannot find is one question, never a stop. The `FILL THIS IN` block stays for anyone who wants to hand those over up front.
- **Every kit's README, Install section**: the same two steps, with the one copy rule, the no prompt rule and the week one notes kept as a short list under them.
- `docs/INSTALL.md` opens with the two steps and keeps the per scheduler detail.

## 1.4.0, 2026-09-05

The guardrail on outbound actions becomes the member's.

The two stops were written as law. In practice one of them was a default that people wanted to move, channel by channel, once an employee had earned it, and the only honest gate was always the harness's own permission layer. This release says so.

- **`RELEASES.md` in every kit**, classified `member` so an upgrade never touches it: one row per channel the member releases, with the action and their conditions. Shipped empty, which means every channel held exactly as before. A routine reads it in Step 0 and, on a released channel, completes the action, records it on the queue entry and in the run record, and lists it in the brief under what went out. Only the member writes it.
- **The two guardrails** replace the two stops in every contract, role file, routine, browser recipe, launcher and `AGENTS.md`. The first is held unless released; the second, credentials, has no release.
- **Agent Employee Standard v1.2**: LAW 2 rewritten the same way; every kit's `employee.json` now implements 1.2.
- README, `docs/HOW-EMPLOYEES-WORK.md`, `SECURITY.md`, the FAQ and `CONTRIBUTING.md` describe the held default and the release, not a rule.

## 1.3.0, 2026-09-04

Upgrades become possible, and the kits tell any harness what they are.

Until now `npx ai-employees hire` copied a folder and that was the whole story: no manifest, no record of what was installed, and no way back. A kit that had been running for a few weeks had usually repaired its own instructions once or twice, and there was no route for those repairs to reach a release, or for a release to reach the kit.

- **`employee.json` in every kit**: the version, the standard it implements, every routine with its schedule row, and the file classification that makes an upgrade safe. Kit files may be replaced, member files must never be touched, and `SCHEDULE.md` is owned by both sides.
- **`.installed.json`**, written at hire time: a hash per kit file, which is what lets an upgrade tell a file you edited from a file we changed.
- **`npx ai-employees upgrade`**: reports first and writes nothing without `--apply`. A kit file you edited is never overwritten; the new version lands beside it as `.new`. State, ledgers, strategy, learned browser flows and improvements are not read or written.
- **`npx ai-employees contribute`**: turns a kit's own `improvements/CHANGELOG.md`, the repairs a routine made to its own instructions, into a field report ready to open upstream.
- **`AGENTS.md`** at the repository root and in every kit, following the convention stewarded by the Linux Foundation's Agentic AI Foundation, so a harness that has never seen these kits knows to read `CONTRACT.md`, `ROLE.md` and `SCHEDULE.md` in that order. The README already said these kits are built for every harness; this is what makes that true without a person pasting anything.
- **`docs/STANDARD.md`**: the Agent Employee Standard, published for the first time.
- **`docs/UPGRADING.md`**: how the classification works and how to merge a `.new` file.
- **The product name is "AI Employees" throughout.** "Agent Employees" is retired, across 164 occurrences in 101 files. The Agent Employee Standard keeps its name, because that is the proper noun for the specification itself.

Still deferred, and said so in `docs/COST.md`: splitting each root document into a short law section read every run and a reference section read on demand, and a flag that attaches measured cost to the record a routine just wrote.

## 1.2.0, 2026-09-03

First release of the repository. The eight kits ship at 1.2.0, the cold install release: a prerequisites section in every README, `scripts/guard.mjs` in front of every routine, Windows launcher examples that fail loudly on a missing login, a login check in Phase 0 of every install prompt, scheduler accurate sleep and catch up text, a ten minute jitter tolerance on the drift check, a `.gitignore` in every kit, `metadata: internal: true` on every routine, brand neutral self test fixtures, and one pointer line home.

Kit changelogs: [GTM Engineer](employees/gtm-engineer/CHANGELOG.md), [SEO/AEO Employee](employees/seo-employee/CHANGELOG.md), [Web Dev Employee](employees/web-dev-employee/CHANGELOG.md), [Social Media Employee](employees/social-media-employee/CHANGELOG.md), [Ad Manager Employee](employees/ad-manager-employee/CHANGELOG.md), [Sales Employee](employees/sales-employee/CHANGELOG.md), [Customer Satisfaction Employee](employees/customer-satisfaction-employee/CHANGELOG.md), [Chief of Staff](employees/chief-of-staff/CHANGELOG.md).

Also in this release: the root documents (README, LICENSE, CONTRIBUTING, TRADEMARKS, SECURITY), the docs folder, the `hire` skill, the `npx ai-employees hire` installer, fictional examples per kit, and the no-dashes workflow.

Deferred to 1.3.0, and said so in `docs/COST.md`: splitting each root document into a short law section read every run and a reference section read on demand, and a flag that attaches measured cost to the record a routine just wrote.
