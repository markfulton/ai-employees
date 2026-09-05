# FAQ

**Does it send anything?** No. No email, DM, post, comment, connection request, form submit, or published page leaves your machine, and nothing spends. Drafts land in queue files and, if you turn it on, as unsent drafts in your own mailbox. Forms get filled and left open in their tab. You press the button. That is the whole safety model and it is not configurable.

**What does it cost to run?** On a Claude Pro or Max plan, nothing beyond the plan: the employee runs on your own seat and spends a share of its usage limits. Measured on the GTM Engineer, that share was about 6 percent of everything my Max 20x seat sent to Claude over ten days of heavy use, so one seat carries several employees alongside a working day. On an API key, for reference, it is about $19 of Opus 5 usage at list price on a plain weekday and about $27 on Monday or Friday, and an API key loses the browser lane. Every run so far was on `claude-opus-5`. `docs/COST.md` has the full table and the dates.

**How long does the install take?** You spend about ten minutes answering questions. The employee's first run takes about an hour and may ask for a second session.

**Windows, macOS or Linux?** All three. Windows through the Desktop app scheduler or Task Scheduler, macOS through the Desktop app or launchd, Linux through cron. `docs/INSTALL.md` has the steps for each scheduler and what a first run should look like.

**Which harness?** Built for Claude Code, OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code and DeepSeek. Claude Code is the one the GTM Engineer runs my own club launch on every weekday. OpenClaw, Hermes, Cline and Qwen Code have built in cron or scheduled tasks, Codex has scheduled runs, Antigravity has the `agy` job runner, DeepSeek schedules through a plugin, OpenCode and Pi use the operating system's scheduler, and Grok Bot runs from its own cloud computer. `docs/HARNESSES.md` has the invocation and the first run check for each.

**Can I run just one?** Yes. Each employee is a self contained folder. They share nothing but a scheduler. The GTM Engineer is the one to start with; the Chief of Staff is the one to add second, because it reads the run logs of every other employee on the machine and tells you which one quietly stopped.

**What happens when my machine is asleep?** It depends on your scheduler: the Claude Desktop app and Windows Task Scheduler run one late catch up, launchd folds every missed fire into one, and cron skips it for good. Every routine has a window, so a late fire either does its work once or records a skip and exits. A closed laptop produces nothing, and the next morning's standup says so in plain words.

**Can I run it on a VPS or in the cloud?** The file routines, yes: anything that reads and writes files and runs a command. The browser routines need a browser that carries your own signed in sessions, which a headless server does not have, and an API key turns the browser lane off on Claude Code. Each kit's README has a section called "What you lose with no browser control" that says exactly what still works.

**Do I need the Chrome extension?** Only for the routines that read your own accounts (saved searches, ad dashboards, your support inbox, your analytics). The morning brief, the drafting, and the Friday scoreboard arithmetic never need a browser.

**Does it need an API key?** No. Log in once with `claude` and `/login` on a plan that includes Claude Code. An API key works for the file routines but the browser lane switches off with it.

**Why does everything say "member"?** The kits call the person who owns the employee "the member", because they were written for club members first. Read it as you. It is not a claim that you have to join anything.

**What are the «guillemets» in the files?** A placeholder the install fills in, such as `«GTM_ROOT»` for your folder path. Two survive on purpose in drafts: `«paste at send time»` where a credential goes that only you type, and `«member: paste the detail»` where a number goes that only you can supply. Nothing ships with a real value in one.

**Why is nothing scheduled on a Sunday?** A Sunday belongs to the ISO week that just ended, so a weekly routine there would share a period key with the following week and one of the two runs would be lost with no error. If you work weekends, add a Saturday row.

**Can I change the schedule?** Edit `SCHEDULE.md`. It is the only file in a kit that carries a cadence, a fire time, a window, or a budget, and the routines read it on every fire. Then re-register that one job, or let the monthly drift check remind you.

**Can I run it for a client and charge for it?** Yes. The eight are MIT. Install them, adapt them, sell the work. Do not call your version Reinventing.AI or the Agent Ops Club; `TRADEMARKS.md` says what needs a rename.

**Is any of my data sent anywhere?** Not by this repo. There is no telemetry in the kits, the installer, or the `hire` skill. What the agent reads during a run goes to your model provider the way any Claude Code session does. Everything the employee writes stays in its folder on your machine, and the `.gitignore` inside each kit keeps it out of any repo you push.

**How do updates work?** Employees update one at a time. Everything under `strategy/`, `state/`, your ledgers, your learned `recipes/*.json`, and the `## Corrections` at the foot of every file are yours and are never overwritten. Everything else is safe to replace. Each kit's `CHANGELOG.md` has the procedure under "Updating without losing your work".

**What is the club, and what is not in this repo?** The eight employees are complete and free for good; nothing in them is held back. The Agent Ops Club is where the guided walkthrough, the Masterclass, the premium software library with a resale license, the live sessions and, from October, premium employees live. A free club account gets you the session calendar, the walkthrough lesson with the launch replay, the preview lessons and employee updates. The README's Go further section has the link.

**Where do I ask something not here?** Discussions. Issues are answered within a working day for the first month; after that, Discussions is where the community answers and I read every thread.
