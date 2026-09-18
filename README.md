<div align="center">

# AI Employees

**Eight open source AI Employees. Each one runs a whole business role on a schedule, on your own machine, on the AI agent you already use.**

59 scheduled routines. Windows, macOS and Linux. Claude Code and ten other agents. They drive your browser and your PC the way you do, and every run makes the next one better. Running my own business every weekday since August 27, 2026.

[![Claude Code](https://img.shields.io/badge/Claude_Code-ready-D97757?style=for-the-badge&logo=anthropic&logoColor=white)](https://claude.com/claude-code)
[![License](https://img.shields.io/badge/License-MIT-3FB950?style=for-the-badge)](LICENSE)
[![Agents](https://img.shields.io/badge/Claude_Code_+_10_agents-ready-0B7FC7?style=for-the-badge)](docs/HARNESSES.md)
[![Runs on](https://img.shields.io/badge/Windows_macOS_Linux-ready-2B2B2B?style=for-the-badge)](docs/INSTALL.md)
[![npm](https://img.shields.io/badge/npm-ai--employees-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/ai-employees)

**Created by [Mark Fulton](https://www.reinventing.ai/?utm_source=github&utm_medium=readme&utm_campaign=ai-employees), Reinventing.AI.** Founder of [Vibe Coding is Life](https://facebook.com/groups/vibecodinglife) (335,000+ members)

</div>

<a href="https://club.reinventing.ai/ai-employees?utm_source=github&utm_medium=readme&utm_campaign=ai-employees"><img src="assets/banner.png" alt="The eight AI Employees: GTM Engineer, SEO, Web Dev, Social Media, Ad Manager, Sales, Customer Satisfaction and Chief of Staff" width="100%"></a>

An AI Employee is a folder of scheduled routines that covers one business role. It runs on your own machine, on the AI agent you already use, and briefs you every morning. Eight roles, every routine and schedule in this repo, nothing held back.

> **Updated 2026-09-18.** The Ad Manager 1.6.0 is the production release: once you release the ad account it publishes approved creative through your own Meta connection, with a receipt for every id, a review page for approvals, and a Meta recipe file written from a real launch. Every kit now confirms Codex as a harness and reports scheduled readiness as its own fact. The GTM Engineer and the Ad Manager have both run live launches end to end, and every field report goes back into the kits. [Release history](CHANGELOG.md).

## Install in two steps

**1. Download a kit and extract it to your PC.** Click **Code, Download ZIP** above, or run `npx ai-employees hire gtm-engineer --to <folder>`. Any folder not inside OneDrive, Dropbox, Google Drive or iCloud.

**2. Open your agent in that folder and say "Install the GTM Engineer from this folder."** It researches your business from your website, builds your dashboard, schedules its own routines, and stops once to show you its first drafts.

You need an AI agent you are logged in to (Claude Code is what I use) and a browser signed in to the accounts it should read. [Prerequisites](docs/PREREQUISITES.md). [Full install guide](docs/INSTALL.md).

<details>
<summary><b>Not on Claude Code?</b> The same two steps on OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek</summary>

<br>

The kits are written for whichever agent you already use. The one difference is how each agent schedules the routines, and the agent handles that during the install. [docs/HARNESSES.md](docs/HARNESSES.md) has the command and the first run check for each; the short version per agent is below.

<details>
<summary>OpenClaw</summary>

Reads the same `SKILL.md` format. Register each routine's schedule as an OpenClaw automation pointed at the kit's `routines/` folder: `openclaw automations create "<cron>" "Read <root>/routines/<id>/SKILL.md and follow it." --name <id> --session isolated`, one per routine, with the timezone flag. Probe its browser control first: the kit never signs in, so a clean browser means every read of your own accounts lands on a login wall. [docs/HARNESSES.md](docs/HARNESSES.md).
</details>

<details>
<summary>Hermes</summary>

Point its built in cron at the kit's `routines/` folder and mirror the cadence in `SCHEDULE.md`, one job per routine, each handed that routine's `SKILL.md` as the prompt. Confirm it reads files and runs a shell command; then the file routines work and the browser question decides the rest.
</details>

<details>
<summary>OpenCode</summary>

Reads the Claude Code skill format directly. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler with `opencode run "Read <root>/routines/<id>/SKILL.md and follow it."`, one job per routine. Add a browser automation server for the browser lane.
</details>

<details>
<summary>Grok Bot</summary>

Its bots already run routines on a schedule from their own cloud computer. Create one recurring task per routine and hand it that routine's `SKILL.md` as the run prompt. Whether it can reach your own signed in accounts is the thing to check first, because it runs somewhere else.
</details>

<details>
<summary>Codex</summary>

Drive the cadence with scheduled runs, one per routine, each `codex exec "Read <root>/routines/<id>/SKILL.md and follow it."`. Confirm the sandbox can write inside the kit folder and reach the network before you trust a run.
</details>

<details>
<summary>Antigravity</summary>

Schedule each routine with the `agy` job runner pointed at the routine folder rather than registered as a global pack: `agy -p "Read <root>/routines/<id>/SKILL.md and follow it."`. Settle whether it drives the browser profile you are signed in to or a clean one.
</details>

<details>
<summary>Pi</summary>

Reads skills folders directly and runs headless with `pi -p "Read <root>/routines/<id>/SKILL.md and follow it."`. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler, one job per routine, with the kit folder as the working directory. Confirm the print flag against `pi --help`, then settle the browser question.
</details>

<details>
<summary>Cline</summary>

The Cline CLI has its own cron: `cline schedule create "Read <root>/routines/<id>/SKILL.md and follow it." --cron "<cron>"`, one per routine, run with auto approve on so a scheduled run never hangs on a prompt. Confirm the flags against `cline --help`. Check that a scheduled run starts in the kit folder before you trust it.
</details>

<details>
<summary>Qwen Code</summary>

Reads the skill format and ships scheduled tasks. Register one per routine, or drive `qwen -p "Read <root>/routines/<id>/SKILL.md and follow it."` from the operating system's scheduler. Confirm the print flag against `qwen --help`, and confirm it can write inside the kit folder and reach the network.
</details>

<details>
<summary>DeepSeek</summary>

`dsh` runs a local server with a web interface, and scheduling is one of its plugins. Register one scheduled run per routine, handed that routine's `SKILL.md` as the prompt, with the kit folder as the working directory. Confirm the headless prompt form against `dsh --help`, then settle whether it drives your signed in browser profile or a clean one.
</details>
</details>

<table>
<tr><td align="center" width="900">

<h2>Hiring more than one? Get one install prompt for all of them</h2>

<p>Tick the roles you want in the Agent Ops Club and copy a single prompt for your agent, with every role in the order you picked. Includes the guided Hire Your First AI Employee walkthrough.</p>

<a href="https://club.reinventing.ai/pricing?utm_source=github&utm_medium=readme&utm_campaign=install-prompt"><img src="assets/cta-install-prompt.png" width="470" alt="Get my install prompt and walkthrough, free in the Agent Ops Club"></a>

<p><sub><b>Free account, no card.</b></sub></p>

</td></tr>
</table>

## What sets these AI Employees apart

- **They get better at your business every run.** When a page moves, a button changes or a step now needs a scroll, the routine fixes its own instructions in the run that hit it, keeps the text it replaced as the undo, and tells you in the next morning's brief under "What changed about me".
- **They drive your browser and your PC the way you do.** Every browser routine works from a technique library written from real runs on my own machine, not from documentation: click what the page actually shows, read the page back to verify, leave a filled form open on the last step. Each site's flow is learned on your machine the first time a routine needs it and repaired every time after. Two routines never use the same signed in account at once, and on LinkedIn they read and never click.
- **One push to your phone, only when you are the blocker.** A login expired, a credential is missing, your conversion tracking stopped while ads are live, or a run died holding the browser. Four cases and no fifth. One short line, never twice for the same thing, never outside your working hours, never on a first run. Everything else waits for the brief. [The one push](docs/STANDARD.md#23-the-one-push).
- **They use the connections you already have.** Where your agent already has a connector for an account, the routine reads through it instead of the screen: Meta's own Ads MCP server for an ad account, the Gmail connector for drafts and replies, the Vercel and Supabase connectors for logs and advisors, Metricool for publishing. Each kit names its connections in one table, uses them read only, and works without any of them; nothing is installed for you.
- **They run on the agent you already use.** Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek, without a routine changing by one word. Routines describe what they need done, and one file per kit says how each agent does it.
- **You can direct any of them in chat.** Open a session in the employee's folder and it does anything you could do by hand, on your word: tick a card you confirmed, stage a form now, retune a strategy file, correct a stale brief. It leaves the same trail a routine would, and the scheduled runs treat that work as yours.
- **You set how far they go.** Every employee drafts, fills and stages by default, and the last click is yours. Release a channel in `RELEASES.md` and the routine completes that action itself from then on. Your agent's own permission settings are the gate, and every file in the kit is plain text in your own folder, yours to change.
- **Upgrades never overwrite your work.** `npx ai-employees upgrade` reports first, leaves any file you edited alone, and never reads your strategy or your ledgers. Every kit follows the published [Agent Employee Standard](docs/STANDARD.md), and `npx ai-employees contribute` turns the fixes a kit made to itself into a report you can send upstream.

## The eight AI Employees

| Employee | Role | What it owns | Routines | Cadence | Folder |
|---|---|---|---|---|---|
| <img src="https://club.reinventing.ai/img/employees/thumbs/gtm-engineer.webp" width="72" height="72" alt=""><br>**GTM Engineer** | Go to market and launch | The growth hire who would own your entire launch: ICP, positioning, the launch board, outbound drafts, directory and press forms, paid setup, the weekly scoreboard | 8 | 4 weekday, 2 weekly, 2 monthly | [employees/gtm-engineer](employees/gtm-engineer) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/seo-employee.webp" width="72" height="72" alt=""><br>**SEO/AEO Employee** | Search and content | A content marketer plus the SEO retainer: keyword research, one article a weekday, publishing to properties with no API, indexing, rank review, the calendar | 7 | 3 weekday, 3 weekly, 1 monthly | [employees/seo-employee](employees/seo-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/web-dev-employee.webp" width="72" height="72" alt=""><br>**Web Dev Employee** | Engineering and maintenance | The monthly maintenance retainer and the ticket queue: site health, error triage, small changes on a branch, dependency review, platform drift | 8 | 3 weekday, 3 weekly, 2 monthly | [employees/web-dev-employee](employees/web-dev-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/social-media-employee.webp" width="72" height="72" alt=""><br>**Social Media Employee** | Audience and distribution | The social manager you keep meaning to hire: material sweep, platform native drafts in your voice, a veto window, engagement replies drafted never sent | 7 | 5 weekday, 1 weekly, 1 monthly | [employees/social-media-employee](employees/social-media-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/ad-manager-employee.webp" width="72" height="72" alt=""><br>**Ad Manager Employee** | Paid acquisition | The percentage of spend agency, for the cadence work: account reads, creative sets, build sheets, the weekly change list, and, once you release the account, the publish itself through your own Meta connection with a receipt for every id. Money moves only when you approve | 7 | 4 weekday, 1 weekly, 2 monthly | [employees/ad-manager-employee](employees/ad-manager-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/sales-employee.webp" width="72" height="72" alt=""><br>**Sales Employee** | Pipeline and outreach | The SDR you cannot justify hiring yet: prospect sweeps, first touches into your own drafts, follow ups that never go quiet, the pipeline review | 7 | 4 weekday, 1 weekly, 2 monthly | [employees/sales-employee](employees/sales-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/customer-satisfaction-employee.webp" width="72" height="72" alt=""><br>**Customer Satisfaction Employee** | Support and retention | The support lead role, before you can afford one: inbox sweep, replies drafted hardest first, churn flags with evidence, the one product change that removes the most tickets | 8 | 4 weekday, 2 weekly, 2 monthly | [employees/customer-satisfaction-employee](employees/customer-satisfaction-employee) |
| <img src="https://club.reinventing.ai/img/employees/thumbs/chief-of-staff.webp" width="72" height="72" alt=""><br>**Chief of Staff** | Oversight and strategy | The operator who would run your week: reads every other employee's run log, names what quietly stopped, and argues against its own top recommendation | 7 | 2 weekday, 3 weekly, 2 monthly | [employees/chief-of-staff](employees/chief-of-staff) |

Fifty nine routines. Each one is a folder with one instruction file, and the folder's name is the name of its scheduled job.

## How an AI Employee runs

A folder. Every file in it is plain text you can open, and nothing runs anywhere else.

```
gtm-engineer/
  INSTALL-PROMPT.md    what your agent reads to set itself up, once
  ROLE.md              who this employee is and how it thinks
  CONTRACT.md          the rules every routine follows, every run
  SCHEDULE.md          when each routine runs
  RELEASES.md          yours: the channels you have released, shipped empty
  CAPABILITIES.md      how the routines map onto your agent
  routines/<id>/SKILL.md   one folder per routine
  scripts/             the kit's own checks, each with a self test
  run/                 one Windows launcher example per routine
```

**Scheduled, inside a window.** Each routine has a time it runs and a window it works in. If your machine was asleep and the job fires late, or fires twice, the routine sees that today's work is done or the window has passed and does nothing. That is what makes it safe on any scheduler.

**Jobs, not skills.** A skill is something you ask for. A routine runs at its time, in its folder, on its own. Your agent points its scheduler at the kit's `routines/` folder and keeps one copy; the only on demand skill in this repo is [`hire`](skills/hire/SKILL.md).

**Glossary:** member: the person who owns this Employee. The kits say "the member" throughout; read it as you. The «guillemets» are placeholders the install fills in. [docs/HOW-EMPLOYEES-WORK.md](docs/HOW-EMPLOYEES-WORK.md) is the whole model, including the five laws every kit is built to.

## Two guardrails, and what each routine does

**The first guardrail is on outbound actions, and it is yours.** Every AI Employee can send, post, submit, publish and spend. Shipped, every one of those is held: the draft is written, the form is filled and left open on the last step, the campaign arrives as a build sheet, and the last click is yours. `RELEASES.md` in the employee's folder is where you hand a channel over, one row at a time, with your conditions on it. From then on the routine that stages that channel completes the action itself and tells you in the morning brief what went out. Two of the eight ship with a channel already yours to configure: the SEO/AEO Employee publishes articles to the blog you name, and the Social Media Employee hands drafted posts to the channel you connect, after a veto window in the brief.

**The second guardrail is on credentials, and it stays on.** No AI Employee creates an account, enters or generates a password, completes a captcha, accepts terms, or writes a credential into any file. It never needs your password to do its job, so there is nothing to release.

| Routine kind | Reads | Writes | Leaves for you | Holds, unless you release it |
|---|---|---|---|---|
| The standup, every weekday | Every ledger, run record and tick since yesterday | The board and the thirty line brief | The brief, first thing | Uses a browser |
| Sweeps (signals, prospects, inbox, site health, material, market) | Your own signed in pages and public pages | Dated, sourced ledger lines | Nothing to do; the drafts come from these | Types into a page, replies, marks anything read |
| Drafting (outreach, replies, posts, articles, creative) | The ledgers, your strategy files, your proof inventory | Queue files, unsent mailbox drafts, article drafts, creative sets | The drafts, to edit and send | Sends, posts, submits, or uses a number not in your proof inventory |
| Form filling (directories, press, listings) | The card and your strategy files | The queue entry with every field's value | The tab, filled, on the last step | Clicks Submit, Publish, Post, Send, Activate, Enable, or Create account |
| Account reads (ads, billing, analytics, registrar, host) | Read screens in accounts you are signed in to | Metrics ledgers, drift findings, build sheets | Every change as a paste ready line with the screen named | Changes a setting, saves a draft in an account that can spend |
| Weekly reviews and monthly refreshes | A week or a month of the kit's own ledgers | The scoreboard with a source beside every number, rewritten strategy where evidence disagrees | One kill and one scale, as cards | Estimates a number it did not measure |
| The Chief of Staff | Every other AI Employee's run log, read only | The fleet page, the fault dossier, the decision brief | Three moves, argued both ways | Writes into another AI Employee's folder |

Everything the employee decides on its own lands as one dated line in a changelog you can read in a minute. Everything it learns about your sites lands in a recipe file inside its own folder. When it gets something wrong, one dated line in that file's `## Corrections` section outranks the file from the next run on.

## Example output

From a fictional business, Northwind Roofing, on a baseline week. The real ones look like this with your cards in them. Every AI Employee folder has an `examples/` directory with a brief, a run log and the ledgers the first run creates.

```
# 2026-03-05

## Today
- C-007 | Stage the storm season email for segment-1 | queue/2026-03-05-email.md
- C-011 | Fill the local trades directory listing and leave the tab open | queue/2026-03-05-form.md
- C-012 | Verify the quote request conversion event fires on the thank you page | paid/conversion-quote-request.md

## Waiting on you
- queue/2026-03-05-email.md: three drafts, none ticked
- queue/2026-03-04-dm.md: two drafts, one ticked
- C-009 | Submit the supplier co-marketing listing | filled in its tab, the submit is yours
- Assumption: working hours weekdays, seven to five local, read from the contact page; correct it in strategy/offer.md
- Strategy change: segment-3, property managers, gained a gathering place from the sweep, strategy/CHANGELOG.md

## Blocked
- gtm-signal-sweep, open since 2026-02-26: the review platform asked for a sign in, nothing entered
- one more open blocker, listed in gtm-latest.md

Guided version, updates and premium employees: club.reinventing.ai
```

[employees/gtm-engineer/examples/brief-latest.md](employees/gtm-engineer/examples/brief-latest.md), with the run log and the ledgers beside it.

## What AI Employees cost to run

- **On a Claude Pro or Max plan, nothing beyond the plan.** The AI Employees run inside Claude Code on your own seat, which is also what the browser lane needs. They spend a share of your plan's usage limits, not dollars.
- **How big a share, measured on one employee as the example:** over ten days on my own Max seat, the GTM Engineer's scheduled runs were about 6 percent of everything this machine sent to Claude, and the rest was me working in Claude Code all day. One AI Employee is a small slice of one seat, and by that measure a seat carries several of them alongside a working day. Anthropic publishes no quota per plan, so that is my machine, not a promise about yours.
- **On an API key, for reference only:** about $19 of Opus 5 usage at list price on a plain weekday, about $27 on Monday and Friday, measured over 27 scheduled runs. Two thirds of that is cache reads, because every turn re-reads the kit's documents. An API key also loses the browser lane, so it is the expensive way to run these, not the normal one.
- The runs behind these numbers used `claude-opus-5` with the 1M context window. [docs/COST.md](docs/COST.md) has the per routine table, the dates and the method.

## Before first run

- **Nothing to fill in.** The install researches your offer, your buyer and your positioning from your own public pages and confirms a short list with you. If it cannot find your home page on its own it asks once. Anything you want it to know up front, a channel that is off limits or a claim that must never be made, goes in one optional line at the top of `INSTALL-PROMPT.md`.
- **A browser signed in** to the accounts the employee should read, and your mailbox if you want drafts landing there. Log in yourself; it never will.
- **Real customer words, if you have any.** Real quotes are the only social proof the routines are allowed to use. With none, they write copy with no social proof rather than inventing any.
- **Your ceilings.** A paid ceiling of zero puts the guard into observation only. Which channels are off limits, and any claim that must never be made, one line each.
- **A machine that is awake** at the fire times in `SCHEDULE.md`, or fire times moved to after it normally wakes.

## Contributing

Routine requests, AI Employee proposals, harness reports, translations, and corrections from real runs. Post what an employee did for your business in Discussions under Show and tell; good builds go into the README with your name on them. [CONTRIBUTING.md](CONTRIBUTING.md) has the rules: MIT in and out, a DCO sign off on every commit, no em or en dash anywhere, and the drafting defaults are not negotiable in a shipped routine.

Issues are answered within a working day for the first month; after that, Discussions is where the community answers and I read every thread.

## Go further

The eight are free for good. The Agent Ops Masterclass, the premium software library with a resale license, the live sessions and, from October, premium AI Employees live in the [Agent Ops Club](https://club.reinventing.ai/?utm_source=github&utm_medium=readme&utm_campaign=ai-employees). A free club account gets you the session calendar, the walkthrough lesson with the launch replay, the preview lessons and AI Employee updates.

## FAQ

**Does it send anything?** By default, no: drafts, filled forms, build sheets, and you press the button. Where you configured a channel, authorized it in a session, or widened the task's permission, yes. **Windows, Mac or Linux?** All three; the install page has the scheduler steps for each. **Can I run just one?** Yes; each is a self contained folder. **What if my machine is asleep?** The Desktop app and Task Scheduler run one late catch up, launchd folds missed fires into one, cron skips; the window makes any of that safe. **Can I sell installs to clients?** Yes, it is MIT; just do not call yours by the club's name. The rest is in [docs/FAQ.md](docs/FAQ.md).

## License

MIT. Copyright (c) 2026 Mark Fulton. [LICENSE](LICENSE).

## Trademarks

Names and logos are not licensed. "Reinventing.AI" and "Agent Ops Club" are claimed as marks; "AI Employees" and the role names are descriptive and free to use. Forks get their own name. [TRADEMARKS.md](TRADEMARKS.md).

## Credits

Built by Mark Fulton with Claude Code. Every contributor is in [CREDITS.md](CREDITS.md) and in the git history. Report a way to make an employee send or spend through [SECURITY.md](SECURITY.md), not a public issue.
