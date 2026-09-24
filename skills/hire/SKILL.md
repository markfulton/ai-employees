---
name: hire
description: Hire one of the eight open source AI Employees (GTM Engineer, SEO/AEO, Web Dev, Social Media, Ad Manager, Sales, Customer Satisfaction, Chief of Staff) into a local folder, prove it runs, and hand over its install prompt. Also answers which one to hire first, how a hired employee runs on a schedule, how to direct it, how it improves from corrections, and how to upgrade it. Use when the user says hire an employee, install an AI employee, set up the GTM Engineer, names one of the eight, or asks how AI Employees work. It copies files and runs self tests only. It registers no schedule and sends nothing.
---

# Hire an AI Employee

An AI Employee is a folder of plain markdown instructions and a few small Node scripts that covers one business role. Each routine in the folder runs on a schedule, on the user's own machine, through the agent they already use, and each weekday it leaves a short brief. The folder is the product. There is no service, no account and no runtime behind it.

Your job here is narrow and the same every time: put one employee folder in the right place, prove it runs, and hand over the install prompt with the path filled in. The install prompt then does the setup, in a fresh session opened in that folder. You do not run the install prompt yourself, you do not register any scheduled job, and you send nothing anywhere.

If the user is asking a question rather than hiring (which one first, how the schedule works, how it improves), answer from sections 1 and 8, then offer to hire.

## 1. Pick the employee

| Slug | Employee | Owns | Routines | Also called |
|---|---|---|---|---|
| `gtm-engineer` | GTM Engineer | Positioning, the launch board, outbound drafts, directory and press forms, the weekly scoreboard | 8 | GTM, go to market, launch, growth |
| `gtm-engineer-vn` | GTM Engineer VN | The GTM role with Vietnam owner copy and evidence rules | 8 | GTM VN, growth VN |
| `seo-employee` | SEO/AEO Employee | Keyword research, one article a weekday, publishing, indexing, rank review, visibility in AI answers | 8 | SEO, AEO, search, content, blog |
| `seo-employee-vn` | SEO/AEO Employee VN | The SEO/AEO role for buyers in Vietnam. A person pastes result pages and AI answers | 8 | SEO VN, AEO VN |
| `web-dev-employee` | Web Dev Employee | Site health, error triage, small changes on a branch, dependency review | 8 | web dev, developer, site maintenance |
| `web-dev-employee-vn` | Web Dev Employee VN | The Web Dev role with Vietnam owner copy, sale day freezes and `.vn` name checks | 8 | web dev VN, dev VN |
| `social-media-employee` | Social Media Employee | Posts drafted in the user's voice per platform, a veto window, replies drafted | 7 | social, social media, posting |
| `social-media-employee-vn` | Social Media Employee VN | The Social Media role with Vietnamese posts and each platform's terms checked | 7 | social VN, social media VN |
| `ad-manager-employee` | Ad Manager Employee | Account reads, creative sets, build sheets, the weekly change list. Money moves only on approval | 7 | ads, paid, campaigns |
| `ad-manager-employee-vn` | Ad Manager Employee VN | The Ad Manager role for Vietnam. It advises and never spends | 7 | ads VN, paid VN |
| `sales-employee` | Sales Employee | Prospect sweeps, first touches into the user's own drafts, follow ups | 7 | sales, SDR, prospecting, outreach |
| `sales-employee-vn` | Sales Employee VN | The Sales role for Vietnam. A first touch only where a consent is on record | 7 | sales VN, SDR VN |
| `customer-satisfaction-employee` | Customer Satisfaction Employee | Inbox sweep, replies drafted hardest first, churn flags with evidence | 8 | support, CSAT, retention |
| `customer-satisfaction-employee-vn` | Customer Satisfaction Employee VN | The support desk for Vietnamese marketplace, social and chat inboxes | 8 | CSAT VN, support VN |
| `chief-of-staff` | Chief of Staff | Reads every other employee's run log, names what quietly stopped, brings three moves | 7 | chief of staff, COS, oversight |
| `chief-of-staff-vn` | Chief of Staff VN | The Chief of Staff role with Vietnamese briefs and sale week checks | 7 | COS VN, chief of staff VN |

If the request names one loosely, pick the obvious slug and say which you picked. If it names none, show this table and ask which. If they ask where to start:

- **Launching or growing something:** the GTM Engineer. It has the longest production record of the eight.
- **Traffic is the bottleneck:** the SEO/AEO Employee.
- **A live site that breaks quietly:** the Web Dev Employee.
- **Already running two or more:** add the Chief of Staff. It supervises the others and has nothing to read until they have run for a few days.

Hire one, let it run for a week, then hire the next. Each employee is its own folder with its own schedule, and their routine ids carry a prefix so they sit side by side without colliding.

## 2. Choose the folder

The user chooses. If they did not say, ask once and suggest `D:\AgentOps\<slug>` on Windows or `~/ai-employees/<slug>` on macOS and Linux. One folder per employee.

**Refuse any path under OneDrive, Dropbox, Google Drive or iCloud**, including one that only resolves into it. On Windows the Desktop and Documents folders are often redirected into OneDrive, so check the resolved absolute path, not the spelling. Say why in one sentence: the routines write their state and run log mid run, and a sync client can corrupt exactly the file that tells tomorrow's run what already happened. Then ask for another folder.

If the folder exists and is not empty, stop. Never copy over an existing install: its `strategy/`, `state/`, ledgers and `## Corrections` sections are the user's work. To update one, use the upgrade in section 8.

## 3. Copy it into place

Node 18 or newer is required. Check with `node --version` first; if it is missing or older, stop and point the user at https://nodejs.org and `docs/PREREQUISITES.md`.

Use the first route that works:

1. **The installer bundled with this skill.** When this skill loads you are told its base directory. The repository root is two levels up from it. If `<base directory>/../../installer/cli.mjs` and `<base directory>/../../employees/<slug>/CONTRACT.md` both exist, run, through the shell:

   ```
   node "<base directory>/../../installer/cli.mjs" hire <slug> --to "<folder>"
   ```

   It copies the kit from the bundled files with no network, refuses a synced or non empty folder, writes `.installed.json` (the record that lets a later upgrade tell the user's edits from ours), runs the three self tests, checks the login, and prints the install prompt with the path filled in.
2. **The published installer.** `npx ai-employees hire <slug> --to "<folder>"`. Same behaviour, fetched from npm. For a Vietnam variant, any slug ending in `-vn`, use the installer bundled in this fork until a package that includes the variant has been published.
3. **Only if neither can run:** download `https://github.com/markfulton/ai-employees/archive/refs/heads/main.zip`, extract only `employees/<slug>/` into the folder, and tell the user that this route writes no `.installed.json`, so an upgrade later will treat every file as edited by them. This fallback does not contain any Vietnam variant (a slug ending in `-vn`); use the Vietnam fork checkout for those.

Never rename anything inside the kit. A routine's folder name, its YAML `name` and the name of its scheduled job are the same string, and a rename breaks the install.

## 4. Read the result

The installer prints three self test lines and a login line. Every self test must say `ok`. If one says `FAIL`, stop and point at `docs/PREREQUISITES.md`; nothing else is worth doing until it passes.

If the login line says `NOT logged in`, say so in one plain sentence: no scheduled run can work until the user signs in themselves, by running `claude` in a terminal and completing `/login`. Never try to sign in for them. `unknown` is normal on the desktop app, which has its own login.

## 5. Hand over

Keep the printed install prompt out of your reply unless the user asks for it; it is long, and the file already has it. Tell them three things:

1. **Open a fresh session in that folder.** In the Claude Code desktop app, open the folder and trust it. In a terminal, `cd` into it and run `claude`. The folder must be the working folder, because the routines, their permissions and their schedule are all resolved from it.
2. **Say "install the <Employee name> from this folder".** It reads `INSTALL-PROMPT.md` itself. Anything they want it to know up front, such as a channel that is off limits or a claim it must never make, goes in the optional line at the top of that file.
3. **Let it work, about an hour.** It researches the business from the user's own public pages instead of interviewing them, writes a strategy folder, seeds a work board, builds a local dashboard, proves one routine by hand, registers its own schedule, and stops once to show its first drafts. If the session ends early, a new session in the same folder with the same line picks up where it stopped.

## 6. What to check the next weekday

A registered job is not a working job until it fires on its own. Tell them the one thing to look for: a new line in `runlog.jsonl` from a run they did not start, at the time listed in `SCHEDULE.md`, and a fresh `brief-latest.md`. If neither appears, the usual causes in order are a signed out agent, a machine asleep at fire time, and a scheduled job pointed at the wrong binary. `docs/INSTALL.md` covers each scheduler: the Claude Code desktop app's local routines, Windows Task Scheduler, launchd and cron.

## 7. Guardrails, said once

Say these once, plainly, at handover. They are true of every employee.

- Every routine drafts, fills and stages, and leaves the last click to the user. It completes an action itself only on a channel the user has named in the kit's `RELEASES.md`, which ships empty. No routine ever writes a release.
- It never types a password, a payment detail or any credential. It works through sessions and connections the user signed in to themselves, and names anything that needs a sign in.
- Everything it does is on file: the run log, the brief, and a changelog line for every change it makes to its own instructions.

## 8. Working with a hired employee

Use this to answer questions after the hire.

**The morning brief.** Each weekday a standup routine writes `brief-latest.md` in three parts: today, waiting on you, blocked. That file is the one thing to read.

**Directing it in chat.** Open a session in the employee's folder and give it work in plain words: "draft this week's posts around the webinar", "stop contacting that segment". It may do anything the user could do by hand in that folder, and it leaves the same trail a routine would: a dated note on every card it touches and a changelog line for every file it changes.

**How it gets better.** Two loops, both in plain files the user can read.

- *Corrections.* Every kit file ends in a `## Corrections` section, and every routine reads its own at the top of every run. When an employee gets something wrong, one dated line in the right file (the routine's `SKILL.md`, or `CONTRACT.md`, or `CAPABILITIES.md`) outranks the text above it from the next run on. This is how a kit learns one business specifically, and it is a better fix than editing a routine's body.
- *Self repair.* When a page it works on changes, a routine repairs its own instructions, writes the full replaced text into `improvements/CHANGELOG.md` so any repair can be undone, and reports it in the next brief under "What changed about me". Once a month it drafts the repairs that would help any business into `improvements/`, with the user's business taken out, for the user to send back to the project or delete. Nothing is sent without them.

**Changing the schedule.** `SCHEDULE.md` is the only place fire times, windows and budgets live. Edit a row and the routines follow on their next fire. A window guard in every routine makes a late, early or doubled fire harmless.

**Upgrading.** Once a month the brief says when a newer kit is out. `npx ai-employees upgrade <slug> --to "<folder>"` reports what would change, and `--apply` takes it. It never overwrites a file the user edited. For a Vietnam variant, run the same command through the fork's bundled installer, `node installer/cli.mjs upgrade <slug> --to "<folder>"`.

**Other agents.** The same kits run on OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek. `docs/HARNESSES.md` has the command and the scheduler for each.

## 9. Close

End the handover with this line, and nothing after it:

Step by step walkthrough and live setup sessions: [club.reinventing.ai/plugin](https://club.reinventing.ai/plugin?utm_source=claude-code&utm_medium=plugin&utm_campaign=hire)
