# Chief of Staff: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, read the clock, append the run record. When a routine says `page.read`, it means "read this page as a structure I can act on," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, or a vendor selector inside a routine body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 07:15 on a Tuesday when nobody is awake to notice.

**One thing about this Employee specifically.** It is the least browser dependent kit in the club. Six of its seven routines produce their main deliverable on a machine with no browser control at all. Read section 7 before you spend an afternoon wiring browser control for it, because most of what you get from it does not need one.

---

## 1. How to check what your harness supports

### 1.1 The four checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth decides one routine.

**1. Can it read and write files in `«COS_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«COS_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«COS_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened.

**2. Can it read files in your other AI Employees' folders?**
This is the check that is unique to this kit, and it is the one people skip. This Employee's whole job is reading other folders. If your harness sandboxes file access to one directory, it can read `«COS_ROOT»` and nothing else, and the fleet map will hold exactly one root: its own. The brief still gets written. It just has nobody else to watch.

Ask it to read one file inside another Employee's folder, by absolute path, and confirm it comes back. **Read access is what this needs. Write access outside `«COS_ROOT»` is never used and never wanted:** the kit refuses to write outside its own folder as a rule, and a harness that also refuses is a second lock on the same door.

**3. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause check is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**4. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**And a fifth, which decides one routine rather than the kit.** Can it drive a browser that carries your own logged in sessions? The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser has handed it a browser with no session, and every read of a surface behind a sign in lands on a wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every week.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, `cos-market-sweep` reads public pages only, which is most of a watchlist anyway, and everything else in the kit is unaffected.

### 1.2 The probe

Paste this into your agent, in `«COS_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the 21 capabilities in sections 3, 4, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Then answer one more, which is specific to this Employee:
  can you READ a file by absolute path in a folder outside this one,
  and does anything in your setup sandbox that

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, and fetching one public URL are all cheap.
  For the browser, confirm whether you attach to my signed in profile
  or start a clean one. Say which.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Send nothing. Open no account.

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

One row each. For this kit the file column matters more than the browser column, which is the reverse of most Employees in the club.

| Harness | Files and shell | Reads outside its own folder | Browser control | Your signed in session | Scheduler | Confidence overall |
|---|---|---|---|---|---|---|
| **Claude Code** | Built in | Yes, by absolute path | Chrome extension bridge | Yes, attaches to your Chrome | Desktop app: built in. CLI: none, use the operating system's | `confirmed` |
| **OpenClaw** | Expected, core to it | Probe this | Unconfirmed. Probe | Probe this specifically | Built in cron, `openclaw automations create` | `expected` on files, `unknown` on browser |
| **Hermes** | Expected | Probe this | Probe | Probe this specifically | Built in cron | `expected` on files, `unknown` on browser |
| **OpenCode** | Expected, core to it | Probe this | Add a browser automation server | Depends on that server's config | None of its own, use the operating system's | `expected` on files |
| **Grok Bot** | Expected, on its own cloud computer | Probe this | Its own browser, on that computer | Check first; it runs elsewhere | Built in recurring tasks | `expected` on files, `unknown` on your sessions |
| **Codex** | Expected, core to it | **Check the sandbox specifically** | Add a browser automation server | Depends on that server's config | Scheduled runs | `expected` on files |
| **Antigravity** | Expected, core to it | Probe this | Part of the product | Probe this specifically | The `agy` job runner | `expected` |
| **Pi** | Expected, core to it | Probe this | Probe | Probe this specifically | None of its own, use the operating system's | `expected` on files |
| **Cline** | Expected, core to it | Probe this | Probe | Probe this specifically | Built in cron, `cline schedule create` | `expected` on files |
| **Qwen Code** | Expected, core to it | Probe this | Probe | Probe this specifically | Built in scheduled tasks, or the operating system's | `expected` on files |
| **DeepSeek** | Expected, core to it | Probe this | Part of the product | Probe this specifically | Its scheduling plugin | `expected` on files |

The capability tables in sections 3 to 6 carry one row for each of the first seven. For Pi, Cline and Qwen Code, read the OpenCode row: a terminal agent with files and shell built in, and a browser automation server to add for the browser lane. For DeepSeek, read the Antigravity row: browser control is part of the product, and the profile it drives is the question. Whatever you find on one of those four, one line in `## Corrections` at the foot of this file is where it goes.

**Claude Code.** Anthropic's CLI. This is the harness the kit was built on and the only one I can speak about from having watched it run. It reads and writes files, reads files outside the session folder by absolute path, runs shell commands, searches and fetches the web, drives a Chrome you are already signed in to through a browser extension, and, in the Desktop app, schedules its own recurring jobs, which is where these routines belong. **Two shapes, and the difference decides how you register the schedule.** The Claude Desktop app has a local scheduler of its own, with a permission mode per task, and it is the route this kit has run on in production. The Claude Code CLI has no local scheduler: pair it with the operating system's scheduler in section 9, using the launchers in `run/`. Its scheduled tasks and its global skills are different directories, and these are scheduled tasks. The routines ship in its skill format, a `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that any harness reading markdown instructions can run them.

**OpenClaw.** An agent harness that runs local sessions. Files and shell are the part I would expect to work without ceremony. I could not confirm how it drives a browser, so treat every browser row as unknown until your probe says otherwise.

**Hermes.** An agent harness with a built in cron that delivers to any platform, so the scheduler is its own. Files and shell are the part to confirm first; once they hold, the file side of the kit works, and section 7 says exactly what that gets you. Browser control is the open question: run the probe in 1.2 before you rely on any browser routine.

**OpenCode.** An open source terminal coding agent. Reading files, writing files, and running commands are core to what it is for. It supports MCP servers, which is the route to browser control for the one routine that wants it. I know of no built in scheduler, so use the operating system's, per section 9.

**Grok Bot.** Its bots already run routines on a schedule from their own cloud computer, so the scheduler is built in and the invocation is the routine file handed over as the run prompt. The thing to settle first is whether it can reach your own signed in accounts at all, because it runs somewhere else; if it cannot, section 7 says what the file side of the kit still produces.

**Codex.** OpenAI's coding agent. Files and commands are core. **The specific thing to check here is the sandbox, and for this Employee it matters twice.** Confirm it can write inside `«COS_ROOT»`, confirm it can read by absolute path outside it, and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it and a routine will report a page as unreachable when the page is fine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust the market sweep on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «COS_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «COS_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «COS_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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
| Grok Bot | Unknown. A shell command is the fallback if it has one | `unknown` |
| Codex | Its own clock, or a shell command | `expected` |
| Antigravity | Its own clock, or a shell command | `expected` |

**Absent:** the routine records `failed` with the blocker `no local clock capability` and stops. There is no fallback and there is deliberately no default. Never assume a timezone, and never trust one remembered from a previous run.

On Windows: `powershell -NoProfile -Command "(Get-TimeZone).Id; Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"`. On macOS or Linux: `date +"%Z %Y-%m-%d %H:%M:%S"`.

### `file.read`
Read a file as text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file read, or a shell command. Reads outside the session folder by absolute path | `confirmed` |
| OpenClaw | Its file read, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file read, or a shell command | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its file read. Confirm the sandbox includes `«COS_ROOT»` **and the Employee roots you want watched** | `expected` |
| Antigravity | Its file read, or a shell command | `expected` |

**Absent:** the kit does not run. Nothing else in this file matters.

**Absent outside `«COS_ROOT»`, present inside it:** the kit runs and watches one Employee, its own. `charter/fleet-map.md` holds one root, every other Employee is invisible, and the audit says so in one line in its report. That is a real and survivable state, and it is worth knowing on day one rather than three weeks in.

### `file.write`
Write a file. Anything a crash could truncate is written to a temp path and renamed over the original.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file write, or a shell command | `confirmed` |
| OpenClaw | Its file write, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file write, or a shell command | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its file write. Confirm the sandbox allows writes, not just reads | `expected` |
| Antigravity | Its file write, or a shell command | `expected` |

**Absent:** the kit does not run.

**Scope it to `«COS_ROOT»` if your harness supports scoping.** This Employee never writes anywhere else, by rule, checked as the fifth invariant at the end of every run. A scoped write grant is what makes that true rather than merely intended, and it costs nothing, because there is no legitimate write outside the folder for it to block.

**One portability note that costs a whole file when it is missed.** Ledger files are UTF-8 with no byte order mark. On Windows, several shell append idioms prepend a mark by default, and that mark corrupts the first line for every reader afterwards. This is why run records go through `runlog.append` and never through a shell redirect. If your harness writes files through a shell on Windows, confirm the encoding once, on day one, with a file you can throw away.

### `file.list`
List paths under a folder.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its glob or search | `confirmed` |
| OpenClaw | Its glob, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its glob, or a shell command | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its glob, or a shell command | `expected` |
| Antigravity | Its glob, or a shell command | `expected` |

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation. **The bounded discovery search in `cos-charter-and-fleet-audit` genuinely needs this**, so without it the fleet map holds this Employee's own root alone, and the report asks you to name your Employee roots in one line.

### `shell.run`
Run a local command and read its output.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its shell | `confirmed` |
| OpenClaw | Its shell | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its shell | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its shell, inside the sandbox | `expected` |
| Antigravity | Its shell | `expected` |

**Absent:** `runlog.append` and `copy.check` take their in agent routes instead, described in section 6. Both still happen. Neither is skipped. The run record says which route it took.

---

## 4. Browser

Ten capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all ten are missing together, and the degradation is the same for every one of them.

**In this kit, three routines can use them and four never touch them.** `cos-fleet-reconcile`, `cos-fault-dossier`, `cos-decision-brief`, and `cos-decision-review` have the lane `never` and run identically on a machine with no browser control configured at all.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. **There is no eighth status for this**, and if you see a routine invent one, that is a defect.

### `browser.session`
Confirm browser control is attached to a browser holding your own logged in session.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | The Chrome extension bridge, attached to your own Chrome | `confirmed` |
| OpenClaw | Its own browser control if it has one, otherwise a browser automation server | `unknown` |
| Hermes | Unknown. Probe before relying on the market sweep | `unknown` |
| OpenCode | A browser automation server added to the harness | `expected` |
| Grok Bot | Unknown. Probe before relying on the market sweep | `unknown` |
| Codex | A browser automation server added to the harness | `expected` |
| Antigravity | Its built in browser control. Confirm it drives your signed in profile | `expected` |

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the platform named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second attempt at something that already fired. For a read only Employee the cost of that is wasted quota rather than a duplicate message, which is why the rule here is short: re-read where the page actually is before deciding anything.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

### `browser.tab.open` and `browser.tab.close`
Create a tab for this run and close it at the end.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its tab management | `confirmed` |
| OpenClaw | Its browser control, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's page or context handling | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's page or context handling | `expected` |
| Antigravity | Its browser control | `expected` |

**Tab hygiene, on every harness.** Create your own tab, reuse it for the whole phase, close it on every exit path, and never touch a tab you did not open. **This Employee has no exception to that**, because it never leaves a filled form behind for you. Every tab it creates is closed before the run records.

### `browser.navigate`
Go to a URL.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its navigate | `confirmed` |
| OpenClaw | Its browser control, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's navigation | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's navigation | `expected` |
| Antigravity | Its browser control | `expected` |

**Two things that are true everywhere.** A deep link can return a not found page while the same destination reached by clicking through the app works fine, so a 404 on a deep link is worth one attempt through the app before it is recorded. And a single overlong URL can wedge a page permanently, so one target per search.

### `page.read`
Read the page as a structured tree where each interactive element carries a stable reference you can act on.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its accessibility tree read, which returns a reference per element | `confirmed` |
| OpenClaw | Its page read, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's accessibility snapshot | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's accessibility snapshot | `expected` |
| Antigravity | Its page read | `expected` |

**Absent, but the browser works:** fall back to `page.text`. **For this Employee that is a smaller loss than for most**, because almost everything it does in a browser is a read. What it loses is the ability to click a disclosure control or set a date range, which is a narrower list of surfaces rather than a broken routine.

**References go stale, and how they go stale is a property of your page read.** The principle holds everywhere: an app that swaps views leaves detached copies of the old one behind, so a reference taken before a view change can resolve to nothing while looking perfectly valid.

| Harness | How references behave | What to do |
|---|---|---|
| Claude Code | References accumulate across reads and the detached copies keep theirs, so both the ghost and the live element are in the tree at once. Numbering rises | Take the highest numbered reference. The lower one is the ghost |
| OpenClaw | Unknown | Re-read after any view change and use what the fresh read returns |
| Hermes | Unknown | Same |
| OpenCode | The browser automation server's snapshot is expected to re-number on every read, with detached nodes absent | Take a fresh read after any view change. Highest numbered means nothing here and would pick an arbitrary element |
| Grok Bot | Unknown | Re-read after any view change |
| Codex | As OpenCode | As OpenCode |
| Antigravity | Unknown | Re-read after any view change |

**The rule that holds on all seven:** never act on a reference taken before the last view change.

### `page.text`
Read the visible text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its text extraction | `confirmed` |
| OpenClaw | Its text extraction, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's text or content read | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's text or content read | `expected` |
| Antigravity | Its text extraction | `expected` |

**Absent:** read from `page.capture` instead.

**Never trust page text straight after a navigation in a single page app.** It can return the previous view, with no error and nothing that looks wrong. Verdicts get read off a capture, not off text, whenever the answer decides something. For this Employee the answer usually decides whether a change goes on a page a member will click through, so it always decides something.

### `page.capture`
Capture the screen, or a region of it.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its screenshot, including a region zoom | `confirmed` |
| OpenClaw | Its screenshot, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's screenshot | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's screenshot | `expected` |
| Antigravity | Its screenshot | `expected` |

**Absent:** verify from `page.text` and record in the run record that verification was weaker on this run.

**Two things worth carrying wherever this runs.** A capture of a small region focuses the tab exactly as well as a full screen capture and costs a fraction as much. And never make a capture the last action in a batch: if the batch times out, every image it already captured is discarded with it.

### `element.click`
Click one element by its reference from `page.read`.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its click by reference | `confirmed` |
| OpenClaw | Its click, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's click on a snapshot reference | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's click on a snapshot reference | `expected` |
| Antigravity | Its click | `expected` |

**In this kit, only navigation and disclosure controls are ever clicked**, plus the save test on anything that saves, which in practice this Employee never presses because it saves nothing.

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify.

**Some browser control refuses an action rather than performing it, and where that lives differs.** A refusal is not a transient error and is never retried a different way, which is `retry` class 2 in `BROWSER-RECIPES.md`.

| Harness | Where a refusal can come from |
|---|---|
| Claude Code | Its own safety classifier sits between the agent and the page and can decline an action outright, on top of the harness permission layer |
| OpenClaw | Unknown. Assume the harness permission layer at minimum |
| Hermes | Unknown. Same |
| OpenCode | The harness permission layer. A browser automation server has no classifier of its own and does not refuse |
| Grok Bot | Unknown. Same |
| Codex | The harness permission layer plus its sandbox, which can decline network access without saying so |
| Antigravity | Unknown. Assume the harness permission layer |

**On LinkedIn some harnesses independently refuse clicks and keystrokes.** When that happens, the rule and the platform agree and the refusal is the system working rather than a fault.

### `field.set`
Set a form field's value by reference.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its form input on a reference | `confirmed` |
| OpenClaw | Its form input, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's fill or type | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's fill or type | `expected` |
| Antigravity | Its form input | `expected` |

**This kit sets exactly two kinds of field and no third:** a search box on a page it is about to read where the surface offers no URL form for the same query, and a date range control on a surface whose range cannot be set in the URL, which it sets back to what it found. **Never on LinkedIn, where a query is set by navigating to the search URL and confirmed by reading the box.**

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs take this.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A real click plus keystrokes, last resort, where the platform demands a genuine input event. Do `focus-before-keystrokes` first.

**Absent:** skip the field, record it as a blocker naming the field, and read the page as it stands. A market surface read at its default range is still a read.

### `page.script`
Evaluate a script in the page context and get a JSON result back.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its script evaluation, through the bridge | `confirmed` |
| OpenClaw | Its script evaluation, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's evaluate | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's evaluate | `expected` |
| Antigravity | Its script evaluation | `expected` |

**Absent:** fall back to `page.read` plus `field.set`. If none of those is available either, skip the phase and name it.

**Never run a script that clicks or types on LinkedIn.** That is the same rule as everywhere else in this kit and a script is not a loophole in it.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it.

| Harness | Call timeout |
|---|---|
| Claude Code | Around 45 seconds |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | The browser automation server's own default, commonly 30 seconds and usually configurable |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

If yours is not in that table, measure it once with a deliberately slow script and put the number in `## Corrections` at the bottom of this file.

### `page.wait`
Wait for a condition, polling rather than sleeping long.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its wait, or polling `page.text` | `confirmed` |
| OpenClaw | Its wait, if present, or polling | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's wait for selector or load state | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's wait for selector or load state | `expected` |
| Antigravity | Its wait | `expected` |

**Absent:** fixed waits, which are slower and less reliable, and the run record says so. The fixed values live in `human-pace` in `recipes/BROWSER-RECIPES.md` and nowhere else.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `mail.read`, `calendar.read`, `files.read` | Mail, meetings and documents the metric map or the charter names | The Gmail, Google Calendar and Google Drive connectors (Drive reads Docs, Sheets and PDFs); the Microsoft 365 connector | Read only | `expected` |
| `board.read` | Cards and status in the member's project tool | The Notion, Linear (`https://mcp.linear.app/mcp/readonly`), Asana, Atlassian, monday.com, ClickUp or Todoist connector | Read only | `expected` |
| `money.read` | Revenue, cash and subscriptions for the Thursday review | The Stripe connector with a restricted, read only key; the Xero, QuickBooks, Mercury, Ramp, Brex or Chargebee connector | Read only | `expected` |
| `analytics.read` | Traffic and signups | The PostHog connector; the Google Analytics MCP server (official, `pipx run analytics-mcp`); the host's own analytics tool | Read only | `expected` |
| `page.diff` | A competitor page read for the Wednesday sweep when a plain fetch fails | `web.fetch` first; the Firecrawl, Exa or Tavily connector; the Similarweb and Crunchbase connectors for traffic and company signals | Read only | `expected` |
| `chat.read` | A team or community channel on the watchlist | The Slack connector | Read only | `expected` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

---

## 5. Notification and research

Three capabilities. One of them is the only thing in this kit that reaches your phone, and two are how the audit and the sweep learn anything about the outside world without a browser.

### `notify.push`
Send one short notification to your own device.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its push notification tool, then a hosted club notifier | `confirmed` |
| OpenClaw | Its own notification route if it has one, then a hosted club notifier | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A hosted club notifier, or a notification server you added | `unknown` |
| Grok Bot | Unknown | `unknown` |
| Codex | A hosted club notifier, or a notification server you added | `unknown` |
| Antigravity | Its own notification route if it has one, then a hosted club notifier | `unknown` |

**Absent is not a failure and is never a blocker.** The routine puts `push: not available` in the run record `notes` and carries on. **Every push in this kit is a shortcut to a line that is already in the brief**, so with notifications off you lose speed and never information.

**Only `cos-fleet-reconcile` may send one, at most one per morning, only for the four cases in `CONTRACT.md` section 9.1, only inside the working hours in `charter/constraints.md`, and never twice for the same open blocker.** That last rule matters more than the trigger: a channel that fires every morning is a channel that gets muted, and a muted channel loses the one message that mattered.

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Your own search endpoint named in `charter/business.md`, then its web search | `confirmed` |
| OpenClaw | Your own search endpoint, then its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Your own search endpoint, then a search server if you added one | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Your own search endpoint. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Your own search endpoint, then its web search | `expected` |

**Absent:** write the exact queries it would have run into the run record so you can run them yourself, and mark every finding that needed one `n/a (no search capability)`. **Never substitute a browser tab driving a search engine.** That is a different thing wearing the same clothes, and it burns the budget the crawl needs.

If you have your own search endpoint, name it in `charter/business.md` by its human readable name only. **No key, no token, and no URL with a credential in it goes into that file or any other file in this kit.**

### `web.fetch`
Read a URL's text without opening a browser.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its fetch, then `browser.navigate` plus `page.text` | `confirmed` |
| OpenClaw | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Hermes | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| OpenCode | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Grok Bot | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| Codex | Its fetch or `shell.run`. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Its fetch, then the browser | `expected` |

**Absent:** mark the finding `n/a (page not reachable)`.

**This is the capability the monthly research crawl prefers over a browser**, because it needs no browser, takes no mutex, and costs no lane time. `cos-charter-and-fleet-audit` uses it for the whole research phase and falls back to the browser only where fetch returns nothing. It cannot reach anything behind your own login, which is a real limit and a small one for a crawl of your own public pages.

### Three capabilities this kit deliberately does not have

`image.compress`, `image.inject`, and `richtext.paste` are in other Employees in this club and are absent here on purpose. **This Employee attaches nothing and writes into no editor.** A capability with no caller is a capability nobody maintains, and a route list nobody exercises is a route list that quietly goes stale.

---

## 6. Kit capabilities

Three. These are the kit's own, and two of them ship as scripts inside it.

### `runlog.append`
Append exactly one validated run record to `runlog.jsonl`.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/runlog.mjs`, then a direct append doing the same validation | `confirmed` |
| OpenClaw | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Hermes | `shell.run` if present, then a direct append through `file.write` | `unknown` |
| OpenCode | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Grok Bot | `shell.run` if present, then a direct append through `file.write` | `unknown` |
| Codex | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |
| Antigravity | `shell.run` on `scripts/runlog.mjs`, then a direct append | `expected` |

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. A run with no record is a run that gets repeated, and every routine in this kit sends its unrecorded run to that same file so there is one place to look.

The script validates the record's shape, checks `status` against the closed list of eight, refuses anything that looks like a secret, a draft, or personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

**Three call shapes work on every shell, and one does not:**

```
<the JSON> | node "«COS_ROOT»/scripts/runlog.mjs" --stdin
node "«COS_ROOT»/scripts/runlog.mjs" --file <path to a .json file>
node "«COS_ROOT»/scripts/runlog.mjs" --routine <id> --period <key> --status ok ...
```

Passing the object as a positional argument works on POSIX shells only. **PowerShell strips every double quote out of an argument on its way to a native command**, so the object arrives unquoted and unparseable. The script detects that signature and names it rather than making you re-read the docs.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default.

**Do not pass `--once`.** The once per period guard legitimately writes a second record with the status `skipped-already-ran`, and that record is how you see the guard did its job.

### `copy.check`
The scripted judge for any text about to be written into a brief, a dossier, a weekly page, a charter file, or a dashboard partial.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` if present, then in agent | `unknown` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where a page goes out unchecked.

One interface, used verbatim at every call site:

```
node "«COS_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `email`, `dm`, `form`, `strategy`, `dashboard`, `plain`. **This kit calls three of the six:** `plain` for every page you read, `strategy` for a charter file and for `evidence/sourced.md`, `dashboard` for a partial. The other three are there because one script serves every AI Employee on the machine.

`--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 07:15 on a Tuesday. There is no `--profile`, no `--destination`, and no bare positional path.

**The banned word, opener, and closer lists ship inside the script.** This kit has no voice file, because nothing it writes is outbound copy: every page it produces is read by one person. If a word keeps coming through that you do not want, write one line into the `## Corrections` section of the routine that keeps producing it, and that routine amends its own instructions on its next run.

### `schedule.register`
Register, inspect, or change a recurring job named after a routine id **in this kit**.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its own scheduler | `confirmed` |
| OpenClaw | Its built in cron, `openclaw automations create`, through `shell.run` | `expected` |
| Hermes | Its built in cron | `expected` |
| OpenCode | Not available in the harness. The operating system's scheduler | `expected` |
| Grok Bot | Its recurring tasks, on its own cloud computer | `expected` |
| Codex | Its scheduled runs | `expected` |
| Antigravity | Its `agy` job runner, through `shell.run` | `expected` |
| Pi | Not available in the harness. The operating system's scheduler | `expected` |
| Cline | Its built in cron, `cline schedule create`, through `shell.run` | `expected` |
| Qwen Code | Its built in scheduled tasks | `expected` |
| DeepSeek | Its scheduling plugin | `expected` |

**Absent all routes:** write the exact commands to `«COS_ROOT»/schedule-commands.txt` and name that file in the report and in the brief. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. **The scheduler is a starter motor, not a controller.**

**Seven jobs, and never an eighth.** This Employee registers the seven routines in this kit. **It never registers, retimes, disables, or removes a job belonging to any other Employee**, even when it can see one is wrong. It names that in the map and in the report and leaves it to you. A Chief of Staff that silently retimes another Employee's morning is a Chief of Staff nobody can debug.

---

## 7. What you lose with no browser at all

The honest headline first.

**Six of the seven routines produce their main deliverable with no browser control at all.** The morning brief never needs one. Neither does the dossier, the weekly score, the Friday decision brief, or the monthly review. On a machine with no browser control you still get a fleet page every morning, a diagnosis every afternoon, a scorecard every Thursday, three argued moves every Friday, and a calibration figure every month.

**What you lose is the outside view.** `cos-market-sweep` is the one routine that genuinely needs a browser, because reading a competitor's pricing page, a changelog, a careers list, or a forum thread is what it does. Without one it writes the week's page from the baselines it already holds, marks every surface, and produces no new observations. Left alone long enough, `cos-decision-brief` loses one of its two evidence sources and argues from the metrics page alone, which is thinner but still real.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `cos-fleet-reconcile` | Never uses one | Identical. Full function | `ok` |
| `cos-fault-dossier` | Never uses one | Identical. Full function | `ok` |
| `cos-market-sweep` | Reads every surface on the watchlist and diffs against the baseline | No new observations. The page names every surface it could not read | `partial` |
| `cos-metrics-review` | Reads the live screens the metric map names | Every file based number, which is most of them. Screens marked `n/a` | `partial`, or `ok` where the map names no screen |
| `cos-decision-brief` | Never uses one | Identical, unless the market page is thin | `ok` |
| `cos-charter-and-fleet-audit` | Crawls through fetch, falls back to a page where fetch returns nothing, and views the built dashboard | Research narrows to what fetch reaches. The dashboard is verified off disk | `ok` or `partial` |
| `cos-decision-review` | Never uses one | Identical. Full function | `ok` |

**The most common healthy configuration takes no browser lane on most days.** If `charter/metric-map.md` names no live screen, `cos-metrics-review` opens nothing at all and produces exactly the same page, which means every number on it came out of a file. That is a better place for a metric to live than a screen somebody has to be signed in to, and it is why an empty `## Live screens` section is a good outcome rather than a gap.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

Self repair means the same thing. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts, it reads the live page and writes the replacement into the same file. Both are a file inside `«COS_ROOT»`. Neither is a new helper installed somewhere global, and neither is silent: both go in the run record as one line.

**This Employee has an unusually short optional list, and that is the point.** It needs no image helper, no carousel helper, no publishing helper, and no submission helper, because it produces pages rather than assets and it sends nothing anywhere.

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.

**The job's only content is the invocation.** All the logic is in the routine. If your scheduler grows a shell script with business rules in it, the rules now live in two places and they will disagree, and you will find out which one is wrong on the day it matters.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan. Overlapping windows are deliberate. Overlapping fire times are not.

**Name every job exactly after its routine id.** All seven ids carry the `cos-` prefix so they namespace cleanly next to the other AI Employees this one watches, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one.

The shipped default week:

```
Every weekday
  07:15  cos-fleet-reconcile
  14:30  cos-fault-dossier

Wednesday adds       10:00  cos-market-sweep
Thursday adds        10:30  cos-metrics-review
Friday adds          16:00  cos-decision-brief
First weekday adds   12:00  cos-charter-and-fleet-audit
Last weekday adds    13:00  cos-decision-review
```

No two share a fire minute, including the ones that never touch a browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.

### 9.2 The mechanism, per harness

| Harness | Mechanism | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own local scheduler. Ask it to register the table and it reads the routine, days, and fire columns directly, one local task per routine named after the routine id | `confirmed` |
| **Claude Code CLI** | None of its own. Use the operating system's scheduler below, with the launchers in `run/` on Windows or a launchd plist on macOS | `confirmed` that Task Scheduler reaches a running Claude Code through `run/<id>.cmd`; a full routine under it is `expected` |
| **OpenClaw** | Built in cron: `openclaw automations create "<cron>" "<message>" --name <id> --session isolated`, one per routine, with the timezone flag | `expected` |
| **Hermes** | Built in cron, one job per routine, each handed that routine's `SKILL.md` as the prompt | `expected` |
| **OpenCode** | None of its own. Use the operating system's scheduler below | `expected` |
| **Grok Bot** | Its bots run on a schedule from their own cloud computer: one recurring task per routine | `expected` |
| **Codex** | Scheduled runs, one per routine | `expected` |
| **Antigravity** | The `agy` job runner, one job per routine, pointed at the routine folder | `expected` |
| **Pi** | None of its own. Use the operating system's scheduler below | `expected` |
| **Cline** | Built in cron: `cline schedule create "<prompt>" --cron "<cron>"`, one per routine, auto approve on | `expected` |
| **Qwen Code** | Built in scheduled tasks, one per routine, or the operating system's scheduler below | `expected` |
| **DeepSeek** | Its scheduling plugin, one run per routine | `expected` |

Three of the rows above, the Claude Code CLI, OpenCode and Pi, use the operating system's scheduler, and the rest bring their own. Either is fine. The operating system's scheduler is the more reliable of the two mechanisms on a laptop that sleeps, which is section 9.5.

Throughout, `«RUN cos-fleet-reconcile»` and its six siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write seven of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run cos-fleet-reconcile"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «COS_ROOT»/routines/cos-fleet-reconcile/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «COS_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«COS_ROOT»`, permission mode set per task. Shape B | `confirmed` |
| **Claude Code CLI** | `claude -p "<prompt>"` with the full path to the binary, an explicit `--permission-mode`, `< nul` on Windows or `< /dev/null` on POSIX so it never waits on stdin, and `--output-format json`. `run/<routine-id>.cmd.example` is that line written out, one per routine. Shape B | `expected`. The chain from Task Scheduler to a running Claude Code is confirmed; a full routine completing under it is not yet |
| **OpenClaw** | The automation holds the invocation: its message is the Shape B prompt, so there is no separate headless command to write. For a run by hand, use its own headless flag from its help output | `expected` |
| **Hermes** | The cron job's prompt is the Shape B prompt. For a run by hand, use its own headless flag from its help output | `expected` |
| **OpenCode** | `opencode run "<prompt>"` is its non interactive form. Confirm it against `opencode --help` on your version. Shape B | `expected` |
| **Grok Bot** | The recurring task's run prompt is the Shape B prompt. It runs on its own cloud computer, not on this machine | `expected` |
| **Codex** | `codex exec "<prompt>"` is its non interactive form. Confirm it against `codex --help` on your version. Shape B | `expected` |
| **Antigravity** | `agy -p "<prompt>"`. The print flag is read off the CLI's own help text. That a routine then runs correctly through it is not verified | `expected` |
| **Pi** | `pi -p "<prompt>"`. Confirm the print flag against `pi --help` on your version. Shape B | `expected` |
| **Cline** | `cline schedule create "<prompt>" --cron "<cron>"` holds the invocation. For a run by hand, confirm the headless form against `cline --help`. Shape B | `expected` |
| **Qwen Code** | `qwen -p "<prompt>"`. Confirm the print flag against `qwen --help` on your version. Shape B | `expected` |
| **DeepSeek** | `dsh` runs a local server; confirm the headless prompt form against `dsh --help` on your version. Shape B | `expected` |

Three things decide whether the line works, and all three are outside the command itself.

**The working directory.** The run has to start in `«COS_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 07:15 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `cos-fleet-reconcile`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other six. **Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning**, and the first thing you would see is an empty brief.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file.

### 9.3 cron, on macOS or Linux

```
15 7  * * 1-5    «RUN cos-fleet-reconcile»
30 14 * * 1-5    «RUN cos-fault-dossier»
0  10 * * 3      «RUN cos-market-sweep»
30 10 * * 4      «RUN cos-metrics-review»
0  16 * * 5      «RUN cos-decision-brief»
0  12 1-7 * *    «RUN cos-charter-and-fleet-audit»
0  13 25-31 * *  «RUN cos-decision-review»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The two monthly lines are the ones people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `0 12 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

`25-31` is the last weekday line, and it is a range for the same reason. Every date in it falls inside the last seven days of the month in every month length, including February.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "cos-fleet-reconcile"          /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:15 /TR "«COS_ROOT»\run\cos-fleet-reconcile.cmd"
schtasks /Create /TN "cos-fault-dossier"            /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 14:30 /TR "«COS_ROOT»\run\cos-fault-dossier.cmd"
schtasks /Create /TN "cos-market-sweep"             /SC WEEKLY  /D WED                 /ST 10:00 /TR "«COS_ROOT»\run\cos-market-sweep.cmd"
schtasks /Create /TN "cos-metrics-review"           /SC WEEKLY  /D THU                 /ST 10:30 /TR "«COS_ROOT»\run\cos-metrics-review.cmd"
schtasks /Create /TN "cos-decision-brief"           /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«COS_ROOT»\run\cos-decision-brief.cmd"
schtasks /Create /TN "cos-charter-and-fleet-audit"  /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 12:00 /TR "«COS_ROOT»\run\cos-charter-and-fleet-audit.cmd"
schtasks /Create /TN "cos-decision-review"          /SC MONTHLY /MO LAST  /D MON,TUE,WED,THU,FRI /ST 13:00 /TR "«COS_ROOT»\run\cos-decision-review.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«COS_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «COS_ROOT»\run\cos-fleet-reconcile.cmd
@echo off
cd /d "«COS_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «COS_ROOT»/routines/cos-fleet-reconcile/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«COS_ROOT»\run\cos-fleet-reconcile.last.json"
if errorlevel 1 node "«COS_ROOT»\scripts\runlog.mjs" --failed-run cos-fleet-reconcile --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«COS_ROOT»`, and check the path.

The two monthly lines fire on the first Monday, the first Tuesday, and so on, up to five times each. The period key reduces that to one run per month. **Be generous about when, be strict about how many times.**

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all seven. The window guard makes the catch up safe, and without it a laptop that was closed at 07:15 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work.

**Set the earliest fire in your table after the time the machine is normally awake.** If your machine wakes at 08:00, a 07:15 fire always arrives as a catch up. That works, and your brief is permanently one wake behind.

**A machine that slept through a whole day is a case this Employee handles rather than misreports.** The reconcile window is `[last_window_end, this run's start)`, so a Wednesday run after a Tuesday outage covers both days once, and nothing is lost or double counted. And where every run record inside a week is a skip of any kind, `cos-metrics-review` replaces its whole headline with one sentence asking whether the machine was awake and whether the schedule is still registered, because **a table of zeros reads like a bad week of work rather than a dead one.**

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, the audit writes every command it would have run into `«COS_ROOT»/schedule-commands.txt` and names that file first in its report and in the next brief. Run them yourself once and you are scheduled.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path.

### 9.7 Drift

`cos-charter-and-fleet-audit` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times, then re-registers that one job at the row's time, because **`SCHEDULE.md` is the source.** It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. **A drift check that cannot see the schedule reports that it could not see the schedule.**

**It checks its own seven and nothing else.** If it can see that another Employee's job is unregistered or drifted, it records that in the fleet map and in the report and changes nothing.

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and for this Employee it is worth two minutes twice over: once for its own seven jobs, and once because **a routine that hangs waiting for a prompt is the exact shape of the failure this Employee exists to detect on your other Employees.**

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 07:15 the reconcile asks to write a file, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one.

**That is the `silent-stop` fault class**, and it is the failure mode nobody notices, because nothing inside that Employee can see its own absence. This kit catches it on somebody else's Employee by comparing their schedule row against their log. **Nothing catches it on this one**, except you, opening a folder and finding yesterday's brief still there.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the seven scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest write scope your harness allows, ideally `«COS_ROOT»` and nothing else. **These routines have no business writing anywhere else, and the kit says so as a rule.** A scoped grant is what makes that true rather than merely intended. Read access is a different matter and it wants to be wider, because reading your other Employees' folders is the job.

**A prompt can come from below the harness too.** A browser permission prompt is not cleared by any harness setting. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, so here is the direct answer.

**The prompt gate was never the guardrail.** The two guardrails live inside the routines, and so does the third rule. The Employee never composes a send action, never enters a credential, spends only where you released it, and **never opens a write handle outside its own folder.** There is no code path where an approval prompt is the last thing standing between this Employee and somebody else's files. Turning off the prompt removes a question about writing a file inside `«COS_ROOT»`. It does not add a capability.

What actually holds the line is checked at the end of every single run: nothing sent, nothing posted, nothing submitted, nothing enabled, nothing published, nothing deployed, nothing migrated, nothing spent, no credential written or logged, every claim traceable, and **no file outside `«COS_ROOT»` written, created, renamed, moved, or deleted.** If any of those does not hold, that run is a failure regardless of what else it produced.

**If your harness cannot run without interactive approval, schedule the four file only routines and run the rest by hand.** `cos-fleet-reconcile`, `cos-fault-dossier`, `cos-decision-brief`, and `cos-decision-review` never open a browser, so they are the least likely to raise a prompt of any kind. You still get the brief, the dossier, the Friday argument, and the monthly score.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.
