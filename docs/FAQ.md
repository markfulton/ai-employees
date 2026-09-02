# FAQ

**Does it send anything?** No. No email, DM, post, comment, connection request, form submit, or published page leaves your machine, and nothing spends. Drafts land in queue files and, if you turn it on, as unsent drafts in your own mailbox. Forms get filled and left open in their tab. You press the button. That is the whole safety model and it is not configurable.

**What does it cost to run?** Measured on the GTM Engineer: about $20 of API equivalent usage on a plain weekday on Opus, about $27 on Monday or Friday, about $8 a weekday on Sonnet by repricing the same tokens. On a Max 20x plan one employee fits comfortably in my experience; on Pro it will hit the weekly limit. `docs/COST.md` has the full table and the dates.

**How long does the install take?** You spend about ten minutes answering questions. The employee's first run takes about an hour and may ask for a second session.

**Windows or macOS?** Tested on Claude Code on Windows through the Desktop app scheduler and Task Scheduler. macOS through launchd is expected to work and untested until a Mac tester runs the checklist in `docs/INSTALL.md`. Linux through cron is untested.

**Which harness?** Claude Code is the one it was built and run on. OpenClaw and Hermes have built in cron and their install notes are included, not yet tested by me. OpenCode, Grok Bot, Codex and Antigravity notes come from the club docs and are untested. `docs/HARNESSES.md` is the honest table.

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
