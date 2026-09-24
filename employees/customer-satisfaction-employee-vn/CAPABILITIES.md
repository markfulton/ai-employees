# Customer Satisfaction Employee: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, set the field, append the run record. When a routine says `page.read`, it means "read this page as a structure I can click into," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, or a vendor selector inside a routine body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 06:45 on a Tuesday when nobody is awake to notice.

---

## 1. How to check what your harness supports

### 1.1 The four checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth decides how much of the kit runs.

**1. Can it read and write files in `«CSAT_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«CSAT_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«CSAT_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened.

**There is a second reason that matters more here than in a sibling kit.** This folder fills up with customer names, their own words, order references, billing states, and a list of accounts about to leave. Put it on a local disk in a folder you control, not on a shared drive somebody else's laptop syncs.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause check is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**4. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a support desk that reads your inbox every morning and one that stares at a login page.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your own mailbox, helpdesk, or billing screens lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single day.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that the sweep reads public review and forum surfaces only and plan around section 7.

### 1.2 The probe

Paste this into your agent, in `«CSAT_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the 22 capabilities in sections 3, 4, 4a, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, and fetching one public URL are all cheap.
  For the browser, confirm whether you attach to my signed in profile
  or start a clean one. Say which.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Send nothing. Open no account. Open no ticket.

Give me one table and nothing else.
```

Read the result next to section 2. Where it disagrees with a table here, your machine is right and the table is wrong, and the disagreement goes in `## Corrections` at the bottom of this file in one line.

### 1.3 What the confidence column means

| Value | Means |
|---|---|
| `confirmed` | Verified working. Claude Code is the harness this kit was built and run on, so it is the only column where this appears |
| `expected` | The harness has this class of capability and the route is the one named. The exact name will differ, and may have changed since this file was written |
| `unknown` | I could not confirm anything about this. Probe it before you rely on it. Do not read a blank as a no, and do not read it as a yes |

### 1.4 Probe live, never cache

Capability detection happens at the top of every run, every time. No routine stores a capability result and reuses it tomorrow.

The reason is the failure it prevents. You connect a browser on Thursday. A routine that cached Wednesday's answer keeps writing file only output for a month and records a blocker you already fixed. Cheap check, expensive cache.

The one durable record is the run log. A capability that was missing shows up in `blockers[]` in that run's record, verbatim, and in your morning brief the next day. If the same blocker sits there for a week, that is the file telling you something on this machine needs turning on.

---

## 2. The eleven harnesses, honestly

One row each. The browser column is the one that changes how much of the kit runs.

| Harness | Files and shell | Browser control | Your signed in session | Scheduler | Confidence overall |
|---|---|---|---|---|---|
| **Claude Code** | Built in | Chrome extension bridge | Yes, attaches to your Chrome | Desktop app: built in. CLI: none, use the operating system's | `confirmed` |
| **OpenClaw** | Expected, core to it | Unconfirmed. Probe | Probe this specifically | Built in cron, `openclaw automations create` | `expected` on files, `unknown` on browser |
| **Hermes** | Expected | Probe | Probe this specifically | Built in cron | `expected` on files, `unknown` on browser |
| **OpenCode** | Expected, core to it | Add a browser automation server | Depends on that server's config | None of its own, use the operating system's | `expected` on files |
| **Grok Bot** | Yes, on its own cloud computer: a Linux machine with a terminal, files and a browser, shared by every bot on your account | Its own browser, on that computer | Only what you signed in to on that computer, or a session you sync to it | Built in recurring tasks | `expected`; your sessions depend on the sync |
| **Codex** | Expected, core to it | Add a browser automation server | Depends on that server's config | Scheduled runs | `expected` on files |
| **Antigravity** | Expected, core to it | Part of the product | Probe this specifically | The `agy` job runner | `expected` |
| **Pi** | Expected, core to it | Probe | Probe this specifically | None of its own, use the operating system's | `expected` on files |
| **Cline** | Expected, core to it | Probe | Probe this specifically | Built in cron, `cline schedule create` | `expected` on files |
| **Qwen Code** | Expected, core to it | Probe | Probe this specifically | Built in scheduled tasks, or the operating system's | `expected` on files |
| **DeepSeek** | Expected, core to it | Part of the product | Probe this specifically | Its scheduling plugin | `expected` on files |

The capability tables in sections 3 to 6 carry one row for each of the first seven. For Pi, Cline and Qwen Code, read the OpenCode row: a terminal agent with files and shell built in, and a browser automation server to add for the browser lane. For DeepSeek, read the Antigravity row: browser control is part of the product, and the profile it drives is the question. Whatever you find on one of those four, one line in `## Corrections` at the foot of this file is where it goes.

**Claude Code.** Anthropic's CLI. This is the harness the kit was built on and the only one I can speak about from having watched it run. It reads and writes files, runs shell commands, searches and fetches the web, drives a Chrome you are already signed in to through a browser extension, and, in the Desktop app, schedules its own recurring jobs, which is where these routines belong. **Two shapes, and the difference decides how you register the schedule.** The Claude Desktop app has a local scheduler of its own, with a permission mode per task, and it is the route this kit has run on in production. The Claude Code CLI has no local scheduler: pair it with the operating system's scheduler in section 9, using the launchers in `run/`. Its scheduled tasks and its global skills are different directories, and these are scheduled tasks. The routines ship in its skill format, a `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that any harness reading markdown instructions can run them.

**OpenClaw.** An agent harness that runs local sessions. Files and shell are the part I would expect to work without ceremony. I could not confirm how it drives a browser, so treat every browser row as unknown until your probe says otherwise. If it accepts MCP servers, adding a browser automation server gives the kit the whole browser table in one move, and that is the route I would try first.

**Hermes.** An agent harness with a built in cron that delivers to any platform, so the scheduler is its own. Files and shell are the part to confirm first; once they hold, the file side of the kit works, and section 7 says exactly what that gets you. Browser control is the open question: run the probe in 1.2 before you rely on any browser routine.

**OpenCode.** An open source terminal coding agent. Reading files, writing files, and running commands are core to what it is for, so the whole environment table should hold. It supports MCP servers, which is the route to browser control: add a browser automation server and the browser table becomes available under different names. I know of no built in scheduler, so use the operating system's, per section 9.

**Grok Bot.** xAI's hosted agent, and the one harness on this list that does not run on your machine. Every bot on your account shares one persistent cloud computer: a Linux machine with a terminal, file access and a real browser, where each bot has its own screen and runs one computer-use task at a time. The kit lives on that computer, so the bot installs it there itself (`npx ai-employees hire <slug> --to ~/ai-employees/<slug>`, run in its own terminal), and the cloud sync rule does not apply. One bot per Employee, named after the role, with this kit's `AGENTS.md` pasted into the bot's Instructions field, which is the map the bot reads before every task. One recurring task per routine, the Shape B prompt from section 9.2a, the fire time from `SCHEDULE.md` in the timezone that file names. Three things follow from the shared computer. Your signed in sessions are only there if you signed in on that computer or you run a sync that keeps them there (Agent Cookie syncs a Mac's Chrome cookies to the bot over Tailscale), and every bot on the account can then use every login, so bots are not a security boundary: scope by what you sign in to, never by which bot you talk to. The browser lock in `CONTRACT.md` section 6 still matters, because two bots on one platform share one browser. And the brief is a file on a computer you never open, so `brief.deliver` in section 6 posts it into the bot's own thread. Two more routes worth knowing: Claude Code can be logged in on the bot's computer, which turns this row into the Claude Code CLI row with Grok Bot as the scheduler; and Peekaboo, installed by you on a Mac, lets the bot see and click native Mac apps over the same link. The kit names both, detects them, and installs neither. Everything in this paragraph is read from operators' published accounts of the product in August 2026 and is `expected` until you write `confirmed` into `## Corrections` with the date.

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«CSAT_ROOT»` and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it, and a routine will report a page as unreachable when the page is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust a browser routine on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your mailbox, your helpdesk, and your billing screens are readable or not. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «CSAT_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «CSAT_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «CSAT_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

**DeepSeek.** `dsh` runs a local server with a web interface and schedules through one of its plugins. Files and shell are core. The question is the one from 1.1: does it drive the browser profile you are signed in to, or a clean one.

---

## 3. Environment and files

Five capabilities. The first four are not optional. The kit does not run without them, and nothing here degrades into a workaround, because a kit that cannot read a file has nothing to degrade to.

### `clock.local`
Read the machine timezone id and the local wall clock time.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its own clock, or a shell command | `confirmed` |
| OpenClaw | Its own clock, or a shell command | `expected` |
| Hermes | Unknown. A shell command is the fallback if it has one | `unknown` |
| OpenCode | Its own clock, or a shell command | `expected` |
| Grok Bot | A shell command on its cloud computer. That computer keeps its own clock, so read the timezone from `SCHEDULE.md` and never assume the machine's | `expected` |
| Codex | Its own clock, or a shell command | `expected` |
| Antigravity | Its own clock, or a shell command | `expected` |

**Absent:** the routine records `failed` with the blocker `no local clock capability` and stops. There is no fallback and there is deliberately no default. Never assume a timezone, and never trust one remembered from a previous run.

### `file.read`
Read a file as text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file read, or a shell command | `confirmed` |
| OpenClaw | Its file read, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file read, or a shell command | `expected` |
| Grok Bot | Its own file access on its cloud computer, where the kit lives | `expected` |
| Codex | Its file read. Confirm the sandbox includes `«CSAT_ROOT»` | `expected` |
| Antigravity | Its file read, or a shell command | `expected` |

**Absent:** the kit does not run. Nothing else in this file matters.

### `file.write`
Write a file. Anything a crash could truncate is written to a temp path and renamed over the original.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file write, or a shell command | `confirmed` |
| OpenClaw | Its file write, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file write, or a shell command | `expected` |
| Grok Bot | Its own file access on its cloud computer, where the kit lives | `expected` |
| Codex | Its file write. Confirm the sandbox allows writes, not just reads | `expected` |
| Antigravity | Its file write, or a shell command | `expected` |

**Absent:** the kit does not run.

**One portability note that costs a whole file when it is missed.** Ledger files are UTF-8 with no byte order mark. On Windows, several shell append idioms prepend a mark by default, and that mark corrupts the first line for every reader afterwards. This is why run records go through `runlog.append` and never through a shell redirect. If your harness writes files through a shell on Windows, confirm the encoding once, on day one, with a file you can throw away.

### `file.list`
List paths under a folder.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its glob or search | `confirmed` |
| OpenClaw | Its glob, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its glob, or a shell command | `expected` |
| Grok Bot | Its own file access on its cloud computer, where the kit lives | `expected` |
| Codex | Its glob, or a shell command | `expected` |
| Antigravity | Its glob, or a shell command | `expected` |

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation in its run record. This works, and it misses a queue file or a dossier you added by hand that the map does not know about.

### `shell.run`
Run a local command and read its output.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its shell | `confirmed` |
| OpenClaw | Its shell | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its shell | `expected` |
| Grok Bot | The terminal on its cloud computer | `expected` |
| Codex | Its shell, inside the sandbox | `expected` |
| Antigravity | Its shell | `expected` |

**Absent:** `runlog.append` and `copy.check` take their in agent routes instead, described in section 6. Both still happen. Neither is skipped. The run record says which route it took.

---

## 4. Browser

Ten capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all ten are missing together, and the degradation is the same for every one of them.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. A missing browser never fails the day for the other seven routines, and it never stops the morning brief. Section 7 has the routine by routine detail.

**There is no separate status for this.** Missing browser control maps onto `partial` or `failed` and nothing else. If you see a routine invent a status for it, that is a defect.

### `browser.session`
Confirm browser control is attached to a browser holding your own logged in session.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | The Chrome extension bridge, attached to your own Chrome | `confirmed` |
| OpenClaw | Its own browser control if it has one, otherwise a browser automation server | `unknown` |
| Hermes | Unknown. Probe before relying on any browser routine | `unknown` |
| OpenCode | A browser automation server added to the harness | `expected` |
| Grok Bot | Its own browser on its cloud computer. Your session is there only if you signed in on that computer, or you run a sync that keeps it there (Agent Cookie syncs a Mac's Chrome cookies over Tailscale, every fifteen minutes). Every bot on the account shares that browser and its logins | `expected` |
| Codex | A browser automation server added to the harness | `expected` |
| Antigravity | Its built in browser control. Confirm it drives your signed in profile | `expected` |

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the platform named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either, because a run of five login pages is not five units of work.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired. In this kit that matters most in one place: the helpdesk composer, where a blind retry means a second draft, or worse a second reply, on a ticket that already has one. So the routine re-reads the page before deciding anything, on every harness. What differs is how often you meet it.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Its own computer-use lane, one task per bot at a time. A failed call's fate is unknown until the page is re-read |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re-read where the page actually is before you decide what happened. A read costs one call. A reply a customer has already read cannot be taken back.

### `browser.tab.open` and `browser.tab.close`
Create a tab for this run and close it at the end.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its tab management | `confirmed` |
| OpenClaw | Its browser control, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's page or context handling | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's page or context handling | `expected` |
| Antigravity | Its browser control | `expected` |

**Tab hygiene, on every harness.** Create your own tab, close it when you are done, and never touch a tab you did not open. **This Employee has no exception to that rule**, because nothing it produces is a filled form left open: every deliverable is a file on disk. A tab left open by one of these routines is a defect.

### `browser.navigate`
Go to a URL.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its navigate | `confirmed` |
| OpenClaw | Its browser control, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's navigation | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's navigation | `expected` |
| Antigravity | Its browser control | `expected` |

**Two things that are true everywhere.** A deep link can return a not found page while the same destination reached by clicking through the app works fine, so a 404 on a deep link is worth one attempt through the app before it is recorded as a blocker. And a single overlong URL can wedge a page permanently, so one target per search.

### `page.read`
Read the page as a structured tree where each interactive element carries a stable reference you can act on.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its accessibility tree read, which returns a reference per element | `confirmed` |
| OpenClaw | Its page read, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's accessibility snapshot | `expected` |
| Grok Bot | Its own browser on its cloud computer, reading the page as a tree; fall back to `page.text` where a read returns only a picture | `expected` |
| Codex | The browser automation server's accessibility snapshot | `expected` |
| Antigravity | Its page read | `expected` |

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run, which in this kit is nearly all of them. Click phases do not, because a click needs a reference and there is no coordinate fallback. See `element.click` for why.

**References go stale, and how they go stale is a property of your page read.** The principle holds everywhere: an app that swaps views leaves detached copies of the old one behind, so a reference taken before a view change can resolve to nothing while looking perfectly valid. What differs is the shape of the fix.

| Harness | How references behave | What to do |
|---|---|---|
| Claude Code | References accumulate across reads and the detached copies keep theirs, so both the ghost and the live element are in the tree at once. Numbering rises | Take the highest numbered reference. The lower one is the ghost |
| OpenClaw | Unknown | Re-read after any view change and use what the fresh read returns |
| Hermes | Unknown | Same |
| OpenCode | The browser automation server's snapshot is expected to re-number on every read, with detached nodes absent | Take a fresh read after any view change. Highest numbered means nothing here and would pick an arbitrary element |
| Grok Bot | Expected to re-number on every read, as a hosted browser does | Re-read after any view change and use what the fresh read returns |
| Codex | As OpenCode | As OpenCode |
| Antigravity | Unknown | Re-read after any view change |

**The rule that holds on all seven:** never act on a reference taken before the last view change. Where your read keeps the stale ones alongside the live ones, prefer the most recently assigned. Where it re-snapshots, read again and use what it gives you.

### `page.text`
Read the visible text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its text extraction | `confirmed` |
| OpenClaw | Its text extraction, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's text or content read | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's text or content read | `expected` |
| Antigravity | Its text extraction | `expected` |

**Absent:** read from `page.capture` instead.

**Never trust page text straight after a navigation in a single page app.** It can return the previous view, with no error and nothing that looks wrong. In this kit that failure has a specific cost worth naming: a ticket captured off a stale view carries a real customer's name attached to somebody else's words. Verdicts get read off a capture, not off text, whenever the answer decides something.

### `page.capture`
Capture the screen, or a region of it.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its screenshot, including a region zoom | `confirmed` |
| OpenClaw | Its screenshot, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's screenshot | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's screenshot | `expected` |
| Antigravity | Its screenshot | `expected` |

**Absent:** verify from `page.text` and record in the run record that verification was weaker on this run.

**Two things worth carrying wherever this runs.** A capture of a small region focuses the tab exactly as well as a full screen capture and costs a fraction as much, which matters because focus is what makes a synthetic keystroke land. And never make a capture the last action in a batch: if the batch times out, every image it already captured is discarded with it.

### `element.click`
Click one element by its reference from `page.read`.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its click by reference | `confirmed` |
| OpenClaw | Its click, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's click on a snapshot reference | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's click on a snapshot reference | `expected` |
| Antigravity | Its click | `expected` |

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked.

**In this Employee that matters more than in any sibling, and it is worth being blunt about why.** The nearest controls to a body click in a helpdesk composer are the ones that reply to the customer, and the nearest controls to a figure on a billing screen are the ones that refund it. A skipped phase you can see beats a click that quietly did not happen, and it beats a click that quietly did.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify. And a few controls need a genuine user gesture rather than a synthetic one, so a click that reports success while nothing changed is usually this.

**Some browser control refuses an action rather than performing it, and where that lives differs.** A refusal is not a transient error and is never retried a different way, which is `retry` class 2 in `BROWSER-RECIPES.md`. What you need to know is which layer on your harness can produce one.

| Harness | Where a refusal can come from |
|---|---|
| Claude Code | Its own safety classifier sits between the agent and the page and can decline an action outright, on top of the harness permission layer |
| OpenClaw | Unknown. Assume the harness permission layer at minimum |
| Hermes | Unknown. Same |
| OpenCode | The harness permission layer. A browser automation server has no classifier of its own and does not refuse |
| Grok Bot | Its own approval layer, which pauses a bot and asks you in its thread. A routine that hits it records the blocker and carries on with the phases that do not need it |
| Codex | The harness permission layer plus its sandbox, which can decline network access without saying so |
| Antigravity | Unknown. Assume the harness permission layer |

Every harness has a permission layer that can decline, so the routine's behaviour is written against the refusal and not against whatever produced it: skip that phase, name it, carry on.

### `field.set`
Set a form field's value by reference.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its form input on a reference | `confirmed` |
| OpenClaw | Its form input, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's fill or type | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's fill or type | `expected` |
| Antigravity | Its form input | `expected` |

**Absent:** skip the field and record it as a blocker naming the field.

**This capability has exactly two callers in this kit and no third.** `csat-inbox-sweep` uses it to set a search or filter field on a list page it is about to read. `csat-reply-desk` uses it to put a body into a helpdesk composer, and only while `helpdesk_draft_mode` is on, which ships off. On every other surface this Employee navigates and reads and types nothing at all, so a harness with no `field.set` loses one optional mode and one search box, and keeps the whole desk.

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs and search boxes take this.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A synthetic paste carrying `text/html`, for the rich text surfaces most helpdesk composers actually are. See `richtext.paste`.
4. Insert text, where paste does nothing.
5. A real click plus keystrokes, last resort, where the platform demands a genuine input event.

### `page.script`
Evaluate a script in the page context and get a JSON result back.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its script evaluation, through the bridge | `confirmed` |
| OpenClaw | Its script evaluation, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's evaluate | `expected` |
| Grok Bot | Its own browser on its cloud computer, where it exposes script evaluation; otherwise `page.read` plus `field.set` plus `element.click` | `expected` |
| Codex | The browser automation server's evaluate | `expected` |
| Antigravity | Its script evaluation | `expected` |

**Absent:** fall back to `page.read` plus `field.set` plus `element.click`. If none of those is available either, skip the phase and name it.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it. Where the round trip is the expensive part, chain a whole read, wait, verify cycle into one call rather than three.

**This file carries the measured figure, and `BROWSER-RECIPES.md` deliberately does not.** Claude Code's bridge times out at around 45 seconds. The others are below, and a browser automation server usually exposes a configurable default that you can raise or turn off.

| Harness | Call timeout |
|---|---|
| Claude Code | Around 45 seconds |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | The browser automation server's own default, commonly 30 seconds and usually configurable |
| Grok Bot | Its own default, not published. Treat a slow call as unknown and re-read the page |
| Codex | As OpenCode |
| Antigravity | Unknown |

If yours is not in that table, measure it once with a deliberately slow script and put the number in `## Corrections` at the bottom of this file. That is one measurement that saves a phase every time a mailbox is slow.

### `page.wait`
Wait for a condition, polling rather than sleeping long.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its wait, or polling `page.text` | `confirmed` |
| OpenClaw | Its wait, if present, or polling | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's wait for selector or load state | `expected` |
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's wait for selector or load state | `expected` |
| Antigravity | Its wait | `expected` |

**Absent:** fixed waits, which are slower and less reliable, and the run record says so.

Fixed waits are not a failure mode though, they are the shipped behaviour on several surfaces where a load state lies. A webmail splash screen is the standard example: the page reports itself loaded and shows a splash, and a short wait lands on the splash rather than on the inbox. Those numbers are per surface and were each learned the hard way, so they live in `human-pace` in the recipes file, not here.

---

## 4a. Notification

### `notify.push`
Send one short notification to your own device.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its push notification tool, then a hosted club notifier | `confirmed` |
| OpenClaw | Its own notification route if it has one, then a hosted club notifier | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A hosted club notifier, or none | `unknown` |
| Grok Bot | A message in the bot's own thread, which the Grok app carries to your phone | `expected` |
| Codex | A hosted club notifier, or none | `unknown` |
| Antigravity | Unknown | `unknown` |

**Absent is a normal outcome, not a failure and never a blocker.** The routine puts `push: not available` in the run record `notes` and carries on. Every push in this kit is a shortcut to a line that is already in the brief, so you lose speed and never lose information.

`CONTRACT.md` section 9 carries what earns one, and the list is four cases long. **Nothing about a customer ever earns one**, however urgent it feels, because a push naming a customer puts their name and their unhappiness on a lock screen.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `helpdesk.read` | New and changed conversations in the member's helpdesk | The Intercom connector (`https://mcp.intercom.com/mcp`); Help Scout (`https://mcp.helpscout.net/mcp`, read only by design); Front (`https://mcp.frontapp.com/mcp`); the Zoho Desk connector. Zendesk's own server is in early access; until it is general, the browser lane | Read only | `expected` |
| `helpdesk.note` | A reply saved as a private draft or an internal note, never sent | Front drafts; Intercom internal notes; the Gmail draft tool on a mailbox channel. Help Scout has no write route | Draft or note only; a send is held until `RELEASES.md` names the channel | `expected` |
| `mail.read` | Support mail | The Gmail connector (`https://gmailmcp.googleapis.com/mcp/v1`); the Microsoft 365 connector | Read tools only | `expected` |
| `community.read` | Threads in a community channel | The Slack connector; a Discord bot through its REST API. A community with no API stays on the browser lane | Read only | `expected` |
| `billing.read` | Subscriptions, failed payments and disputes for the churn watch | The Stripe connector with a restricted, read only key; the Paddle or Chargebee connector where the member bills there. In Vietnam, where plans are paid by manual bank transfer: the member's Getfly or Bizfly CRM in a read only role, or the member's own debt sheet, read as the member would read it | The restricted key only; a CRM read only role; the sheet is never edited | `expected` for the card processors, `unknown` for the Vietnamese routes until the member confirms one |
| `usage.read` | Whether an account is still active | The PostHog connector; the Supabase connector in its read only form | Read only | `expected` |
| `reviews.read` | Rating movement on a listing | The member's own Google Business Profile, through a connector the member authorised or an export of the member's own account, no bulk download (Google Maps terms). Shopee, TikTok Shop and Lazada ratings, chat response rates and return counts are never read automatically, because their terms forbid automated tracking or collection: they arrive as lines the member types into `report/manual.md` or as an export of the member's own account. Trustpilot is not used in Vietnam | Read only | `unknown` |
| `helpcentre.read` | Whether an article for a theme already exists | Intercom articles; the Notion connector; the site's own CMS connector. A surface on Shopee, TikTok Shop, Lazada, Facebook or Zalo OA has no route: their terms forbid automated access, so it is read only as text pasted into `strategy/product.md` `## Help center` | Read only | `expected` |
| `replytool.saved` | Where the member keeps saved replies and bot scripts copied from `macros/` | Pancake, Harasocial, Botcake where the member uses them; otherwise `macros/` is the only copy | None. Pasting a macro or turning on a bot script is the member's action; no routine writes into these tools | `unknown` |
| `marketplace.read` | The member's own seller chat, return requests and order reviews | The marketplace's own open platform connector where the member authorised it; an aggregator the member connected (Pancake, Harasocial, Subiz); otherwise an `exports/` folder, per section 4c | Read only | `unknown` |
| `calls.read` | Missed calls and call notes in the member's call centre | The call centre's own API or ticket view (CareSoft, Stringee, OMICall) where the member connected it; otherwise an `exports/` folder | Read only; no call is ever placed | `unknown` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

**Vietnam routes, read only, all `unknown` until the member confirms them.** `helpdesk.read`: a chat aggregator the member already pays for and connected (Pancake, Harasocial, Subiz), reading marketplace chat, page inbox and official chat account messages. The member's own marketplace order and product reviews go through `marketplace.read`, and the member's own Google Business Profile reviews through `reviews.read`, each as section 4c allows. **Never** a marketplace's, a social platform's or a map's public pages by fetch or crawl, and never a personal Zalo account: their terms forbid automated collection (`csat-desk-intake` Step A4.2a). Where nothing is connected, the route is the one section 4c permits for that platform, which for most of them is an export or a paste under `exports/`.

**Where a remedy is granted in a Vietnamese business, named for the member and never pressed by a routine:** the return and refund screens of the marketplace seller centres (Shopee Kênh Người Bán, TikTok Shop and Lazada Seller Center); the owner's bank app; the MoMo or ZaloPay wallet the customer paid into; vouchers on the marketplace or on Haravan where the shop uses it; plan dates in Getfly, Bizfly or the owner's file. Confidence `unknown` for every row until the member confirms it in `## Corrections`.

**Chat channels with a free window, and platforms that limit their data, for the Vietnamese variant.** A Zalo Official Account consult message is free only inside a window after the follower's last interaction and paid outside it, and a Broadcast is unavailable on some OA plans and rationed per month and per day on the others, with fixed send hours (Zalo OA guides, checked 24/09/2026; the figures are read from those pages when needed, never copied here). Every OA send is held. TikTok Shop's seller terms allow data received through its messaging to be used only to fulfil and handle that order, refund, cancellation or complaint, so `csat-churn-watch` suggests nothing else for such a customer. Shopee, Meta and Lazada terms forbid tracking or collecting their content, so routines read only the member's own seller or page account, one customer at a time, by the route section 4c permits for that platform, preferably an authorised connector or the member's own export.

---

## 4c. Platform terms, read before any platform read

Several platforms forbid automated access, collection, or copying in their own terms, logged in or not. A routine reads each platform only as its row allows, and a marketplace, social network, chat app, or map listing with no row here is treated as forbidding automated reading. Every row was opened on 24/09/2026. No row permits a browser, as `CONTRACT.md` section 10.1 rule 1 says.

| Platform | Terms page and clause | Verdict | Permitted route |
|---|---|---|---|
| Shopee | https://help.shopee.vn/portal/4/article/77243, 3.1 | No automatic or manual tracking, statistics, collection or copying of Shopee content without written consent | Own seller chat, returns and order reviews through an authorised connector or `exports/`; no browser; never a listing, shop or competitor page |
| Facebook, Instagram | https://vi-vn.facebook.com/legal/terms, effective 01/01/2025 | No automated access or collection without prior permission, logged in or not | A Meta authorised connector the member connected, or `exports/`; no browser |
| TikTok Shop | https://seller-vn.tiktok.com/university/essay?knowledge_id=2581017870255874, updated 09/02/2026 | Platform message data only for fulfilling orders and handling refunds, cancellations, requests and complaints | Own order chat through a connector or `exports/`; never reused for a save, a renewal, a promotion or a broadcast |
| Lazada | https://cdn.contract.alibaba.com/terms/common_platform_service/20260713175157767/20260713175157767.html?lng=vi, 4.2, updated 21/07/2026 | No storing Lazada content in another system without written permission; the seller's own business data is allowed | Own orders, returns and messages through a connector or `exports/`; no listing content |
| Zalo | https://zalo.vn/dieukhoan/, 4.7 | No use through third party software Zalo did not develop or authorise | Official accounts through their own tools only; personal accounts never automated |
| Google Maps | https://www.google.com/intl/vi/help/terms_maps/, modified 04/06/2025 | No bulk download or high volume feeds of content | The member's own Business Profile reviews, through a connector the member authorised or `exports/`; no browser |

---

## 5. Content

Three capabilities. One of them puts formatted copy where plain typing will not go, and two are research.

This is also where the club dashboard's hosted tools slot in. Where a hosted tool exists for a capability, it is the preferred route, because it is the one route that behaves identically on every harness in this table. When one appears, it becomes another row in the preference order and no routine changes by one word.

### `richtext.paste`
Put formatted copy into a rich text editor.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club converter when available, then a synthetic paste through `page.script` | `confirmed` |
| OpenClaw | Hosted club converter when available, then a synthetic paste | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club converter when available, then a synthetic paste through evaluate | `expected` |
| Grok Bot | Hosted club converter, then a synthetic paste in its own browser | `expected` |
| Codex | Hosted club converter when available, then a synthetic paste through evaluate | `expected` |
| Antigravity | Hosted club converter when available, then a synthetic paste | `expected` |

**Absent:** plain text, with the loss named in the run record.

**It has one caller: rung 3 of `fill-a-field`, reached when a helpdesk composer ignores a plain value write.** Most helpdesk composers are rich text surfaces that ignore plain typing and ignore direct DOM writes, so without this rung the optional draft mode falls back to a body with no paragraph breaks in it, which is worse than a queue file and the member should be told so in one line.

**The route that lands, verified across several platforms.** Build a data transfer object, set `text/html` on it plus a throwaway `text/plain`, focus the editor, and dispatch a synthetic paste event carrying it. Where a synthetic paste does nothing, fall back to insert text. Where the target is a controlled component, use the native value setter plus a bubbling input event instead.

Three practical notes. **Clearing the editor needs real keystrokes**, because a DOM range selection is ignored and your paste then appends to whatever was already there. **A background tab cannot write the system clipboard**, so a step that genuinely needs the clipboard needs that tab in front. And **check what survives**: lists usually do, headings and bold often do not, and paragraphs may render with no margin at all, which turns a clean reply into one wall of text unless you join the blocks with an explicit spacer.

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its web search | `confirmed` |
| OpenClaw | Its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A search server if you added one | `expected` |
| Grok Bot | Its built in web search, then its own browser | `expected` |
| Codex | Its search. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Its web search | `expected` |

**Absent:** write the exact queries it would have run into the run record so you can run them yourself, and mark every finding that needed one `n/a (no search capability)`. It does not estimate and it does not fill the gap from memory.

**Do not substitute a browser tab driving a search engine.** That is a different thing wearing the same clothes and it burns browser budget the crawl needs. Two routines depend on this capability: `csat-desk-intake` uses it once a month to find where the product is actually discussed, and `csat-inbox-sweep` uses it to research a replacement when a surface goes dead. Both degrade to what they can already reach and say so.

### `web.fetch`
Read a URL's text without opening a browser.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its fetch, then `browser.navigate` plus `page.text` | `confirmed` |
| OpenClaw | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Hermes | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| OpenCode | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Grok Bot | `shell.run` with a fetch command on its cloud computer, then its own browser | `expected` |
| Codex | Its fetch or `shell.run`. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Its fetch, then the browser | `expected` |

**Absent:** mark the finding `n/a (page not reachable)`.

On a harness with no fetch of its own, `shell.run` with a fetch command is the same capability under another name. It comes back as raw markup rather than readable text, which costs a little context and works.

**This capability is what keeps the intake crawl and the public half of the sweep alive on a machine with no browser.** It reaches the pricing page, the refund policy, the help centre, the changelog, and any review or forum surface that is public. It cannot reach your mailbox or your helpdesk, which is where the tickets with a clock running live. Section 7 has the honest arithmetic on that.

### The four capabilities that are absent on purpose

`image.compress`, `image.inject`, and `file.upload` are in the reference kit and are **not** in this one, because nothing this Employee produces carries artwork. A support reply is words. A macro is words. A help draft is words the member publishes themselves. A capability with no caller is cut for the same reason a file with no reader is cut, and leaving it in this table would tell you to install something for a step that never runs.

If a later routine genuinely needs one, it goes into this table and into `CONTRACT.md` section 3 in the same edit.

---

## 6. Kit capabilities

Four. These are the kit's own, and two of them ship as scripts inside it.

### `runlog.append`
Append exactly one validated run record to `runlog.jsonl`.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/runlog.mjs`, then a direct append doing the same validation | `confirmed` |
| OpenClaw | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Hermes | `shell.run` if present, then a direct append through `file.write` | `unknown` |
| OpenCode | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Grok Bot | `shell.run` on its cloud computer, then a direct append through `file.write` | `expected` |
| Codex | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Antigravity | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. A run with no record is a run that gets repeated, and a repeated run of the reply desk is a second answer to a customer who already has one.

The script validates the record's shape, checks `status` against the closed list of eight, refuses anything that looks like a secret, a draft, or customer data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

**One of its refusals is specific to this Employee and worth knowing about before it surprises you.** It refuses a ticket id in `notes`, in `outputs`, or in `blockers`, because a ticket id is `<surface>:<slug>:<item>` and the slug names the customer who complained. Report the count, never the id.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

Three call shapes work on every shell. A fourth, passing the object as a positional argument, works on POSIX shells only, because PowerShell strips every double quote out of an argument on its way to a native command.

```
<the JSON> | node scripts/runlog.mjs --stdin
node scripts/runlog.mjs --file <path to a .json file>
node scripts/runlog.mjs --routine csat-reply-desk --period 2026-03-04 --status ok ...
```

### `copy.check`
The scripted judge for any text about to be written into a queue file, a strategy file, a dossier, a macro, a help draft, a digest, a report, or a dashboard partial.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` on its cloud computer, then in agent | `expected` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where the copy goes out unchecked.

One interface, used verbatim at every call site:

```
node "«CSAT_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `email`, `dm`, `form`, `strategy`, `dashboard`, `plain`. `--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 08:15 on a Tuesday.

**Two of its rules are shaped for this Employee and are not in the reference version, so they are worth reading once.**

**The count nouns include this desk's own vocabulary:** tickets, complaints, cases, reviews, ratings, refunds, credits, cancellations, escalations, exchanges, and the rest. A support desk states those casually and cannot defend them, and the ones that move money are the ones you would be held to.

**A block that names its source in square brackets is sourced, and its numbers pass.** A block is what sits between two blank lines, so a dossier that states four claims and closes with one `[tickets/tickets.jsonl]` underneath them is sourced in full. Three shapes count: a path with a slash in it, a bare kit filename with a data extension, or a screen named with the date it was read on. **`[redacted: api-key]` and `[member: confirm this is granted before you send]` are markers rather than sources and suppress nothing**, which is right, because neither one says where a number came from.

That second rule is why every routine's repair for a metric failure is "put the bracket back" rather than "delete the number". Without it, the honest form of a dossier would fail the check forever.

### `schedule.register`
Register, inspect, or change a recurring job named after a routine id.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its own scheduler | `confirmed` |
| OpenClaw | Its built in cron, `openclaw automations create`, through `shell.run` | `expected` |
| Hermes | Its built in cron | `expected` |
| OpenCode | Not available in the harness. The operating system's scheduler | `expected` |
| Grok Bot | Its recurring tasks, one per routine, on its own cloud computer | `expected` |
| Codex | Its scheduled runs | `expected` |
| Antigravity | Its `agy` job runner, through `shell.run` | `expected` |
| Pi | Not available in the harness. The operating system's scheduler | `expected` |
| Cline | Its built in cron, `cline schedule create`, through `shell.run` | `expected` |
| Qwen Code | Its built in scheduled tasks | `expected` |
| DeepSeek | Its scheduling plugin | `expected` |

**Absent all routes:** write the exact commands to `«CSAT_ROOT»/schedule-commands.txt` and name that file in the brief. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. The scheduler is a starter motor, not a controller.

### `brief.deliver`
Bring `brief-latest.md` to you after the standup writes it. The brief is the product, and on a harness whose computer you never open it is otherwise a file nobody reads.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Rebuild the dashboard and open it, as the standup already does | `confirmed` |
| OpenClaw | The dashboard, then the harness's own delivery channel where its cron delivers to one | `expected` |
| Hermes | Its cron's delivery target, which reaches any platform you set | `expected` |
| OpenCode | The dashboard, then none | `expected` |
| Grok Bot | The brief text posted into this Employee's own thread, where the Grok app shows it and carries it to your phone | `expected` |
| Codex | The dashboard, then the automation's own result view | `expected` |
| Antigravity | The dashboard, then none | `expected` |

**Absent every route, the file is the brief** and the run record says `brief: file only`. That is a normal outcome and never a blocker. The brief posted anywhere is the same text as the file: no draft copy, no personal data and no credential ever leaves the file in a delivery, because a thread and a phone are less private than a folder. A brief delivered to your own address or your own thread is delivery, not a send, and needs no row in `RELEASES.md`; every other destination is a send and is held.

---

## 7. What you lose with no browser at all

The honest headline first.

**The morning brief never needs a browser. Neither does the reply queue, neither do the macros, and neither does the arithmetic behind the Friday report.** On a machine with no browser control at all you still get a plan every morning, drafts to send, dossiers on the accounts your ledger says are at risk, and a scored week every Friday.

**What you lose is the intake, and the intake is where every ticket comes from.** Your mailbox and your helpdesk sit behind your login, and those are the two surfaces where a customer is waiting with a clock running. Without a browser the sweep falls back to fetching public pages, which reaches your review listings, your marketplace pages, and your public forums, and reaches nothing private at all.

There is a straightforward answer if that is your situation, and it is the same shape as the rest of the kit. **Paste the tickets you want answered into `tickets/tickets.jsonl` yourself**, one JSON object per line to the shape in `CONTRACT.md` section 2.5, or forward them into a public surface the kit can read. The rest of the loop works exactly as designed: the reply desk drafts, the standup reconciles your ticks and computes the clocks, the churn watch reads the same ledger, and Friday still scores. You do the finding, it does the drafting, the grading, the deduping, the tracking, and the measuring.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `csat-inbox-sweep` | Reads the mailbox, the helpdesk, the listings, and the forums | Public listings and forums only through `web.fetch`, never a platform section 4c forbids. Connected routes and `exports/` folders still read. Nothing behind your login | `partial`, or `failed` if it captured nothing |
| `csat-desk-standup` | Never uses one | Identical. Full function | `ok` |
| `csat-reply-desk` | May also create a private draft in your helpdesk, if you turned that on, and may read a truncated ticket's full text | Queue files, which is the default mode anyway. A truncated ticket gets an honest note | `ok` |
| `csat-churn-watch` | Adds the billing and usage wires read off your own account screens | The seven ledger wires still fire. The billing and usage wires read `n/a` and the dossier says which | `partial` |
| `csat-deflection-desk` | Checks your website help centre before drafting an article | Every macro still written. Surfaces on a marketplace, social page or chat account are checked from the text you pasted, browser or not. No article for a theme whose only surfaces could not be checked | `partial` |
| `csat-satisfaction-report` | Full page plus the rating movement and the Friday flow replay | Full page except the listing cells. No replay, so a drifted flow goes unnoticed until a routine hits it | `partial` |
| `csat-desk-intake` | Researches the business, probes every channel, builds and opens the dashboard | Research narrows to what `web.fetch` reaches, signed in channels are written `unconfirmed`, the dashboard still gets built and verified off disk | `ok` or `partial` |
| `csat-taxonomy-refresh` | May re-read a truncated ticket that decides a split, and only on the member's own marketplace seller account, one ticket at a time, after the member confirms that route under section 4c; as shipped, no row of section 4c permits it, so this column applies only once one does. Never on Facebook, Instagram, personal Zalo, a customer group or any other surface whose platform terms forbid automated access; those reach the kit through an authorised connector or pasted text | Runs on ledger evidence, which is files. A verdict that turned on unreadable text stays `not enough evidence` | `ok` or `partial` |

Seven of the eight produce their main deliverable with no browser at all. That is most of the product. **But do not buy this expecting the sweep to read your support mailbox without one, because it will not**, and I would rather you know that now than on your second Tuesday.

A missing browser does not get its own status, and no routine invents one. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

Self repair means the same thing, and so does self reliance. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts and that flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into the same file. Both are a file inside `«CSAT_ROOT»`. It is never a new helper installed somewhere global, and it is never a silent change: it goes in the run record as one line naming the flow or the step.

**This Employee names no required helper at all**, and that is deliberate rather than an omission. Nothing it produces needs an image, a slide, a converter, or a publisher. The two scripts inside the kit are the only tooling it depends on, and both ship with it.

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Eight routines, eight jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into eight.

**The job's only content is the invocation.** All the logic is in the routine. If your scheduler grows a shell script with business rules in it, the rules now live in two places and you find out which one is wrong on the day it matters.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan. Overlapping windows are deliberate. Overlapping fire times are not.

**Name every job exactly after its routine id.** All eight ids carry the `csat-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one. The examples here carry the shipped defaults so the shape is readable. If your table says something different, your table is right.

The shipped default week:

```
Every weekday
  06:45  csat-inbox-sweep
  07:30  csat-desk-standup
  08:15  csat-reply-desk
  09:20  csat-churn-watch

Wednesday adds      11:00  csat-deflection-desk
Friday adds         16:00  csat-satisfaction-report
First weekday adds  13:00  csat-desk-intake
Last weekday adds   14:00  csat-taxonomy-refresh
```

No two share a fire minute, including the one that never touches a browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.

### 9.2 The mechanism, per harness

| Harness | Mechanism | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own local scheduler. Ask it to register the table and it reads the routine, days, and fire columns directly, one local task per routine named after the routine id | `confirmed` |
| **Claude Code CLI** | None of its own. Use the operating system's scheduler below, with the launchers in `run/` on Windows or a launchd plist on macOS | `confirmed` that Task Scheduler reaches a running Claude Code through `run/<id>.cmd`; a full routine under it is `expected` |
| **OpenClaw** | Built in cron: `openclaw automations create "<cron>" "<message>" --name <id> --session isolated`, one per routine, with the timezone flag | `expected` |
| **Hermes** | Built in cron, one job per routine, each handed that routine's `SKILL.md` as the prompt | `expected` |
| **OpenCode** | None of its own. Use the operating system's scheduler below | `expected` |
| **Grok Bot** | Its recurring tasks, on the shared cloud computer: one recurring task per routine, on the bot named after this Employee, with the fire time in the timezone `SCHEDULE.md` names | `expected` |
| **Codex** | The Codex app's automations: one `kind = "cron"` automation per routine, named after the routine id, `execution_environment = "local"`, the kit folder among its working directories, and an `rrule` built from the `SCHEDULE.md` row. Each automation keeps its own memory file, which is a note to itself and never a ledger this kit reads | `confirmed` on Windows: seven routines fired on schedule under the app's automatic review mode, after the member approved the registrations in the session |
| **Antigravity** | The `agy` job runner, one job per routine, pointed at the routine folder | `expected` |
| **Pi** | None of its own. Use the operating system's scheduler below | `expected` |
| **Cline** | Built in cron: `cline schedule create "<prompt>" --cron "<cron>"`, one per routine, auto approve on | `expected` |
| **Qwen Code** | Built in scheduled tasks, one per routine, or the operating system's scheduler below | `expected` |
| **DeepSeek** | Its scheduling plugin, one run per routine | `expected` |

Three of the rows above, the Claude Code CLI, OpenCode and Pi, use the operating system's scheduler, and the rest bring their own. Either is fine. The operating system's scheduler is the more reliable of the two mechanisms on a laptop that sleeps, which is section 9.5.

Throughout, `«RUN csat-inbox-sweep»` and its seven siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write eight of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run csat-inbox-sweep"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «CSAT_ROOT»/routines/csat-inbox-sweep/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «CSAT_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«CSAT_ROOT»`, permission mode set per task. Shape B | `confirmed` |
| **Claude Code CLI** | `claude -p "<prompt>"` with the full path to the binary, an explicit `--permission-mode`, `< nul` on Windows or `< /dev/null` on POSIX so it never waits on stdin, and `--output-format json`. `run/<routine-id>.cmd.example` is that line written out, one per routine. Shape B | `expected`. The chain from Task Scheduler to a running Claude Code is confirmed; a full routine completing under it is not yet |
| **OpenClaw** | The automation holds the invocation: its message is the Shape B prompt, so there is no separate headless command to write. For a run by hand, use its own headless flag from its help output | `expected` |
| **Hermes** | The cron job's prompt is the Shape B prompt. For a run by hand, use its own headless flag from its help output | `expected` |
| **OpenCode** | `opencode run "<prompt>"` is its non interactive form. Confirm it against `opencode --help` on your version. Shape B | `expected` |
| **Grok Bot** | The recurring task's run prompt is the Shape B prompt, with the kit's path on the bot's own cloud computer, where the kit lives. Nothing runs on your machine. Shape B | `expected` |
| **Codex** | The app's automation holds the invocation: its prompt is the Shape B prompt with the kit folder named as the working directory, and no separate headless line is written. `codex exec "<prompt>"` is the by hand form, and it runs only where the CLI is signed in, which the app's own sign in does not imply. Shape B | `confirmed` for the automation route; `codex exec` stays `expected` |
| **Antigravity** | `agy -p "<prompt>"`. The print flag is read off the CLI's own help text. That a routine then runs correctly through it is not verified | `expected` |
| **Pi** | `pi -p "<prompt>"`. Confirm the print flag against `pi --help` on your version. Shape B | `expected` |
| **Cline** | `cline schedule create "<prompt>" --cron "<cron>"` holds the invocation. For a run by hand, confirm the headless form against `cline --help`. Shape B | `expected` |
| **Qwen Code** | `qwen -p "<prompt>"`. Confirm the print flag against `qwen --help` on your version. Shape B | `expected` |
| **DeepSeek** | `dsh` runs a local server; confirm the headless prompt form against `dsh --help` on your version. Shape B | `expected` |

Three things decide whether the line works, and all three are outside the command itself.

**The working directory.** The run has to start in `«CSAT_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job. Use whichever yours has.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 06:45 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `csat-desk-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other seven. Eight jobs registered on an invocation nobody has run is eight silent failures on the same morning, and the first thing you would see is an empty brief.

**Point every job at `«CSAT_ROOT»/routines/` and never at a copy of that folder somewhere else.** Every routine ends with a `## Corrections` section you write into and the routine reads at the top of every run. A correction written into a copy is lost the next time the folders are copied across, and one written into the original is never read at all.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file. That is the line the next reader needs and the one this table could not give them.

### 9.2b Scheduled readiness is a scheduled fire

Registration proves that the scheduler holds a job. It does not prove that the job runs, that it runs with the permission mode you set, that it starts in the kit folder, or that it can reach the connections a chat session could. All four have failed after a clean registration, and the one that hides longest is the last: a token or a secret store that unlocks for the signed in user and not for the process the scheduler starts. The observed case was an account read that worked in the session that connected it, and a scheduled routine the same evening that could not decrypt the same saved token.

So readiness is proved once, by a fire the scheduler started, and it is reported as its own fact. The install prompt registers the jobs and reports `scheduled execution: not yet verified`. The proof is a line in `runlog.jsonl` from a run nobody started by hand, at the registered time, with the status it should have, and where a routine reads through a connected route, that first scheduled read is the second mark on the route's row in `## Corrections`, next to the mark the chat session left. Two marks, two processes, and a row with only the first is not ready.

**A run by hand never counts**, however well it went. It goes through the same guard, records the same period, writes `run by hand` in `notes`, and never claims a scheduled fire happened. Installed, scheduled and proven are three words, and a report that uses one of them for all three has hidden the failure that matters most.

### 9.3 cron, on macOS or Linux

```
45 6  * * 1-5    «RUN csat-inbox-sweep»
30 7  * * 1-5    «RUN csat-desk-standup»
15 8  * * 1-5    «RUN csat-reply-desk»
20 9  * * 1-5    «RUN csat-churn-watch»
0  11 * * 3      «RUN csat-deflection-desk»
0  16 * * 5      «RUN csat-satisfaction-report»
0  13 1-7 * *    «RUN csat-desk-intake»
0  14 25-31 * *  «RUN csat-taxonomy-refresh»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The two monthly lines are the ones people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `0 13 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

`25-31` is the last weekday line, and it is a range for the same reason. Every date in it falls inside the last seven days of the month in every month length, including February, so nothing outside the intended window can fire. The routine's `days: last-weekday` check and the monthly key reduce the burst to one run.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "csat-inbox-sweep"          /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 06:45 /TR "«CSAT_ROOT»\run\csat-inbox-sweep.cmd"
schtasks /Create /TN "csat-desk-standup"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:30 /TR "«CSAT_ROOT»\run\csat-desk-standup.cmd"
schtasks /Create /TN "csat-reply-desk"           /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:15 /TR "«CSAT_ROOT»\run\csat-reply-desk.cmd"
schtasks /Create /TN "csat-churn-watch"          /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 09:20 /TR "«CSAT_ROOT»\run\csat-churn-watch.cmd"
schtasks /Create /TN "csat-deflection-desk"      /SC WEEKLY  /D WED                 /ST 11:00 /TR "«CSAT_ROOT»\run\csat-deflection-desk.cmd"
schtasks /Create /TN "csat-satisfaction-report"  /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«CSAT_ROOT»\run\csat-satisfaction-report.cmd"
schtasks /Create /TN "csat-desk-intake"          /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 13:00 /TR "«CSAT_ROOT»\run\csat-desk-intake.cmd"
schtasks /Create /TN "csat-taxonomy-refresh"     /SC MONTHLY /MO LAST  /D MON,TUE,WED,THU,FRI /ST 14:00 /TR "«CSAT_ROOT»\run\csat-taxonomy-refresh.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«CSAT_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «CSAT_ROOT»\run\csat-desk-standup.cmd
@echo off
cd /d "«CSAT_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «CSAT_ROOT»/routines/csat-desk-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«CSAT_ROOT»\run\csat-desk-standup.last.json"
if errorlevel 1 node "«CSAT_ROOT»\scripts\runlog.mjs" --failed-run csat-desk-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«CSAT_ROOT»`, and check the path.

The two monthly lines fire on the first Monday, the first Tuesday, and so on, up to five times each. The period key reduces that to one run per month. This is the same tradeoff as the cron version and it is deliberate: be generous about when, be strict about how many times.

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all eight. The window guard makes the catch up safe, and without it a laptop that was closed at 06:45 misses the sweep entirely, which in this kit means a day of tickets nobody captured.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. Between them, a duplicate or an early fire is harmless, which is exactly why neither guard is ever bypassed because a run "looks due".

Set the earliest fire in your table after the time the machine is normally awake. If your machine wakes at 08:00, a 06:45 fire always arrives as a catch up. That works, and it always lands after the standup, so your brief is permanently one run behind.

**A day the sweep did not run is a day of tickets nobody captured, and nothing later recovers them**, because the sweep works from what is on the page today. That is the one place where a sleeping laptop costs this Employee more than it costs a sibling, and the standup says so plainly the next morning rather than showing you a quiet board.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, the routine writes every command it would have run into `«CSAT_ROOT»/schedule-commands.txt` and names that file in the brief. Run them yourself once and you are scheduled. That is the whole recovery path.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the brief in one line, and points you at 9.2a. One string for you to fill in, in one place, beats eight jobs registered on a guess.

### 9.7 Drift

`csat-desk-intake` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. **A drift check that cannot see the schedule reports that it could not see the schedule.**

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 06:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the eight scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows, ideally `«CSAT_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is the thing that keeps that true rather than merely intended.

**A prompt can come from below the harness too.** A browser's own private network permission prompt is not a harness prompt and no auto approve setting clears it. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, and it is fairer here than in a sibling kit, because this Employee reads your mailbox and your billing screens. So here is the direct answer.

**The prompt gate was never the guardrail.** The guardrails live in `CONTRACT.md` section 7 and the routines that read it, held unless the member releases a channel in `RELEASES.md`, and a release and the permission both have to say yes before anything goes out. Shipped, the Employee never composes a send action, never presses a barred control, never marks a ticket read, never assigns or resolves anything, never touches a control on a billing screen, never enters a credential, and spends only where you released it. There is no code path where an approval prompt is the last thing standing between a draft and a customer. Turning off the prompt removes a question about opening a tab and writing a file. It does not add a capability.

What actually holds the line is in the routines and it is checked at the end of every single run: nothing sent, nothing posted, nothing submitted, nothing replied, nothing resolved, nothing marked read, nothing refunded, credited, or cancelled, no control touched on any billing screen, no credential written or logged anywhere, and every claim traceable to its source. If any of those does not hold, that run is a failure regardless of what else it produced.

**If your harness cannot run without interactive approval, do not schedule the browser routines.** Run them by hand, when you are at the machine. The file routines will schedule fine and you will still get the brief, the queue, the dossiers your ledger supports, the macros, and the report. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.
