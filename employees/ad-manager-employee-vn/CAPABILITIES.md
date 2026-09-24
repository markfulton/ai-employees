# Ad Manager: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, generate the image, append the run record. When a routine says `page.read`, it means "read this page as a structure I can click into," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, a model name, or a vendor selector inside a routine body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Two capabilities in this kit are the ones people most want to write a vendor name into**, and they are the reason that rule is worth stating twice. `image.generate` and `image.compress` are named as capabilities everywhere in the routines, and the name of whatever produces or shrinks an image for you appears in exactly one place: the two tables in section 5 of this file. Which generator you use is your choice. The routine's instruction is identical either way.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 06:45 on a Tuesday when nobody is awake to notice.

---

## 1. How to check what your harness supports

### 1.1 The four checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth decides how much of the kit runs.

**1. Can it read and write files in `«ADS_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«ADS_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«ADS_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. **It matters twice over in this kit**, because `creative/set-*` folders are written as a burst of image files and a sync client mangles those too.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause switch is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**4. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a browser routine that works and one that stares at a sign in page every morning.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your own ad account lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single day.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that `ads-account-read` cannot read your account and plan around section 7.

### 1.2 The probe

Paste this into your agent, in `«ADS_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the 27 capabilities in sections 3, 4, 4a, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, and fetching one public URL are all cheap.
  For image.generate, try one throwaway prompt rather than reasoning about it.
  For the browser, confirm whether you attach to my signed in profile
  or start a clean one. Say which.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Open no account screen. Create nothing anywhere.

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

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«ADS_ROOT»` and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it, and a routine will report a documentation page as unreachable when the page is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust `ads-account-read` on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your own account screens are readable or not. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «ADS_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «ADS_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «ADS_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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
| Codex | Its file read. Confirm the sandbox includes `«ADS_ROOT»` | `expected` |
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

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation in its run record. This works, and it misses a half written `creative/set-*` folder that the map does not know the name of, which is the one case where the degradation actually costs something.

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

**Absent:** `runlog.append` and `copy.check` take their in agent routes instead, described in section 6. Both still happen. Neither is skipped. The run record says which route it took. The dashboard build also falls back to an in agent concatenation, and the built file is identical either way.

---

## 4. Browser

Eleven capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all eleven are missing together, and the degradation is the same for every one of them.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. **A missing browser never fails the day for the other six routines**, and section 7 has the routine by routine detail.

**There is no ninth status for this.** Missing browser control maps onto `partial` or `failed` and nothing else. If you see a routine invent a status for it, that is a defect.

**One rule sits above every row in this section and it is the whole design of this Employee.** Inside an account that can spend, three things are permitted and nothing else: navigate, read, and type into a search box, a filter box, or a date range on a report view. No routine opens a create flow, a campaign wizard, a conversion action form, an audience builder, an asset library, or any screen in edit mode, even to look, even to read a field limit. A field limit comes off the platform's own published documentation, and where that cannot be reached the value is `n/a (cap not confirmed)`.

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

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the platform named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either, because a run of five sign in pages is not five units of work.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired. **In this kit that is the most dangerous move available**, because every page in a browser phase sits inside an account where the member's money lives. So the kit re reads the page before deciding anything, on every harness. What differs is how often you meet it.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Its own computer-use lane, one task per bot at a time. A failed call's fate is unknown until the page is re-read |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re read where the page actually is before you decide what happened. A read costs one call. A control pressed twice inside an ad account cannot be taken back.

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

**Tab hygiene, on every harness, with no exception in this kit.** Create your own tab, close it when you are done, and never touch a tab you did not open. **No tab in this kit ever holds a deliverable**, because every deliverable is a file on disk. That differs from an Employee that fills forms, and it means a tab left open here is simply a tab left open.

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

**And one specific to this kit.** Navigating away by address is how a routine leaves a screen it should not be on. If a link lands you on a create flow or an edit mode screen, navigate away by address rather than clicking a cancel, a discard, or a leave control, because on some create flows those are themselves controls that write.

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

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run, which in this kit is most of the work. Click phases do not, because a click needs a reference and there is no coordinate fallback here. See `element.click` for why.

**References go stale, and how they go stale is a property of your page read.** The principle holds everywhere: an app that swaps views leaves detached copies of the old one behind, so a reference taken before a view change can resolve to nothing while looking perfectly valid. What differs is the shape of the fix.

| Harness | How references behave | What to do |
|---|---|---|
| Claude Code | References accumulate across reads and the detached copies keep theirs, so both the ghost and the live element are in the tree at once. Numbering rises | Take the highest numbered reference. The lower one is the ghost |
| OpenClaw | Unknown | Re read after any view change and use what the fresh read returns |
| Hermes | Unknown | Same |
| OpenCode | The browser automation server's snapshot is expected to re number on every read, with detached nodes absent | Take a fresh read after any view change. Highest numbered means nothing here and would pick an arbitrary element |
| Grok Bot | Expected to re-number on every read, as a hosted browser does | Re-read after any view change and use what the fresh read returns |
| Codex | As OpenCode | As OpenCode |
| Antigravity | Unknown | Re read after any view change |

**The rule that holds on all seven:** never act on a reference taken before the last view change. Where your read keeps the stale ones alongside the live ones, prefer the most recently assigned. Where it re snapshots, read again and use what it gives you.

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

**Never trust page text straight after a navigation in a single page application.** It can return the previous view, with no error and nothing that looks wrong. Every reporting screen this kit reads is one of those. Figures get read off a capture, not off text, whenever the answer decides something, and in this kit the answer always decides something.

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

**Absent:** verify from `page.text` and record in the run record that verification was weaker on this run. **In this kit that degradation is worth naming in the brief**, because a figure read off text after a navigation can be last month's number with nothing that looks wrong.

**Two things worth carrying wherever this runs.** A capture of a small region focuses the tab exactly as well as a full screen capture and costs a fraction as much. And never make a capture the last action in a batch: if the batch times out, every image it already captured is discarded with it.

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

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked. **Inside an ad account that is the worst available failure mode**, because a click that landed somewhere unintended is exactly as silent as a click that landed nowhere. A skipped phase you can see beats either.

**What this kit clicks, exhaustively:** a link, a tab, a report, a date range, a column picker, a pagination control. That is the list. Nothing that writes to an account, and nothing on the barred label list in `ROLE.md` section 1.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify.

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

**No shipped routine in this kit calls this. See section 8.** It is documented here because `recipes/BROWSER-RECIPES.md` describes it, and it describes it because six routines name that recipe as the boundary they do not cross.

The only typing any routine does on any account screen is a search box, a filter box, or a date range on a report view, and `element.click` plus a plain value set on a report control covers those. **If a routine ever finds itself filling a form field, that is a defect and the run record says which control it was about to reach for.**

**Absent:** skip the field and name it. No routine loses anything, because none of them fills a form.

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

**Absent:** fall back to `page.read` plus `element.click`. If none of those is available either, skip the phase and name it.

**In this kit a script is a read, never a write.** Use it to confirm a date control holds the range you set, to read a figure the capture rendered ambiguously, or to count rows. **Never to press a control a click could not reach.** Routing around a control the browser would not operate is the single behaviour that turns a safe kit into an unsafe one, and inside an ad account it is the one that costs money.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it. Assume a ceiling in the tens of seconds rather than discovering yours in production.

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

If yours is not in that table, measure it once with a deliberately slow script and put the number in `## Corrections` at the bottom of this file. That is one measurement that saves a phase every time a reporting screen is slow, and reporting screens are slow.

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

Fixed waits are not a failure mode though, they are the shipped behaviour on several surfaces where a load state lies. A reporting screen that has finished loading and has not finished recomputing is the common case in this kit, and it is why `verify-the-query` exists. The numbers that clear a specific surface live in `human-pace`, and a number specific to one account's own screens lives in the routine that owns that screen.

---

## 4a. Notification

### `notify.push`
Send one short notification to your own device.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its push notification route | `confirmed` |
| OpenClaw | Its own notifier if it has one, then a hosted club notifier | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A hosted club notifier, then none | `unknown` |
| Grok Bot | A message in the bot's own thread, which the Grok app carries to your phone | `expected` |
| Codex | A hosted club notifier, then none | `unknown` |
| Antigravity | Its own notifier if it has one, then a hosted club notifier | `unknown` |

**Absence is not a failure and is never a blocker.** The routine puts `push: not available` in the run record `notes` and carries on. Every push in this kit is a shortcut to a line that is already in the brief, so you lose speed and never information.

**Four things earn a push and there is no fifth.** `CONTRACT.md` section 9 is the full statement. The one worth knowing about before you install: **the primary conversion event has stopped firing while spend is live.** Money is leaving the account against no measurement, every figure downstream of it is guesswork presented as data, and it is urgent by the hour. `ads-account-read` detects it at its first check, before it trusts any other figure, and it is the case this kit exists to catch.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `ads.account.read` | Yesterday's spend, delivery and results at four levels; the object tree once a month | Meta accounts: the Ads MCP server (`https://mcp.facebook.com/ads`, connected from Business Suite under Settings, Integrations, or through a developer app) or the Ads CLI. Google accounts: the Google Ads MCP server (official, `pipx run google-ads-mcp`, a Google Cloud project with at least Explorer access on the Ads API). Several platforms at once: the Supermetrics or Windsor.ai connector | The Google server is read only by design. The Meta server carries write tools and this kit never calls one | `expected` |
| `ads.signal.check` | Whether the primary conversion event fired inside the read window | Meta: the Ads MCP server's signals and datasets tools. Web analytics: the Google Analytics MCP server (official, `pipx run analytics-mcp`), or the host's own analytics connector where the landing page runs there | Read only by design | `expected` |
| `ads.creative.export` | A finished design pulled from the member's design tool into a set folder | The Canva connector (`https://mcp.canva.com/mcp`) export tools | Export only; this kit uploads nothing anywhere | `expected` |
| `ads.account.write` | Uploading approved media, creating a campaign, ad set, creative and ad, reading a preview back, and activating, all on one approved package | Meta accounts: the Ads MCP server's upload, create, preview and activate tools. Google accounts: `n/a (no write route in this release)` | **Held.** Called by `ads-build-desk` Step 6a only, and only where `RELEASES.md` names the account with `prepare` or `publish`. Every call lands in `build/publication-receipts.jsonl`. **In this Vietnamese variant it is never called**, whatever `RELEASES.md` says (`CONTRACT.md` section 10.3) | `expected` |

TikTok for Business and Microsoft Advertising ship official servers for their own accounts. Name one in `plan/measurement.md` by its human readable name only where the intake found that account.

**Vietnam, read only routes named by `ads-account-intake`.** The national business registration portal (`dangkykinhdoanh.gov.vn`, free fields at `dichvuthongtin.dkkd.gov.vn`): one look up of the member's own record through `web.fetch`, then `read-a-page`; never a paid extract; confidence `unknown`. The sales software the member names (Pancake, Nhanh.vn with Vpage, KiotViet, Sapo or another): read only through the member's own export or screen, never a login by the kit; Pancake and Vpage can send a chosen order status to Meta as a server event, and the Vpage connector must be an administrator of the business account; confidence `unknown`. The Vietnamese UI names the member reads: `Máy học` (Meta learning), `Kênh Người bán` (Shopee), `Trung tâm người bán` (TikTok Shop).

**Vietnam variant: routes and platform terms `ads-account-read` reads by name.** Each line carries the source it rests on and the date it was checked; a routine uses a number only with that source named, and never one that is not in this file. The platform figures themselves live once, in section 4c.

| Item | What the routine reads here | Source and date checked |
|---|---|---|
| Automated reading of the member's own session | Meta Ads Manager, Events Manager and billing, TikTok Ads Manager and Seller Center, Google Ads, Shopee Ads in Kênh Người bán, Cốc Cốc: read in the member's own signed in session, own accounts only. Zalo Ads: **export only**, `exports/ads/`, because Zalo's terms forbid use through third party software | Platform terms re-opened 24/09/2026 (Meta 3.2, TikTok, Shopee 3.1, Zalo 4.6 and 4.7, Google) |
| Levels where a platform has fewer than four | Zalo Ads: account, campaign, ad. Shopee Ads: ad account in Kênh Người bán, campaign, keyword or product. Cốc Cốc: account, campaign, ad | Expert form, Cốc Cốc source re-opened 24/09/2026 |
| Monthly charging multiplier, budget step limits during learning, account spending limit, campaign types whose results count every order of the promoted products | Section 4c, rows `average-daily-budget`, `learning-phase`, `account-spending-limit` and `shop-campaign-default` | As section 4c records |
| Sales software whose order export `exports/orders/` may hold | Pancake, Nhanh.vn, KiotViet, Sapo: export only, never read through the browser by a routine | Their terms were not re-opened, so no automated route is listed |

**Campaign types that credit every order of the promoted product.** TikTok Shop GMV Max counts every order of the promoted products, organic and affiliate orders included (section 4c, `shop-campaign-default`). `ads-account-read` reads it on its own view, `ads-creative-retro` and `ads-change-list` score rows naming this campaign type in a block of their own, never summed with another platform and never read as orders the ad caused, and `ads-desk-standup` prints that qualifier beside a GMV figure, which is never called profit.

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

**A row confirmed in a chat session is not a row confirmed on the schedule.** The scheduled process may not inherit the session's secret store, its environment or its working directory, and the observed failure was an account read that worked in the session that connected it and a scheduled build desk that could not decrypt the same saved token. Every row gets two marks in `## Corrections`: one from the session that connected it and one from the first scheduled run that read through it. `recipes/META-ADS-RECIPES.md` section 4 says what to do when the two disagree, and it never involves printing the token.

---

## 4c. Channel facts a build sheet names (Vietnam variant)

`ads-build-desk` names a platform fact on a build sheet only from this table, by
the fact name in the first column, with the source and the date beside it. A
fact with no row here is written on the sheet as a line asking the member to
check their own screen. `ads-account-read` and `ads-change-list` read the same
rows for the monthly multiplier, the budget step limits and the learning phase,
and apply the stricter of a row here and their own rules. Re-open a source
before changing a row, and write the new date.

| Fact | Platform and feature | What the sheet says | Source, date checked |
|---|---|---|---|
| `auto-apply-recommendations` | Google Ads, tự động áp dụng đề xuất | Can add broad match keywords, remove keywords and change bidding on its own; switch it off before adding keywords | support.google.com/google-ads/answer/10279006?hl=vi, 24/09/2026 |
| `final-url-expansion` | Google Ads Performance Max, mở rộng URL cuối cùng | On by default; may replace the final URL with another page on the same domain; switch off for a single landing page | support.google.com/google-ads/answer/14337539?hl=vi, 24/09/2026 |
| `text-customization` | Google Ads Performance Max, tuỳ chỉnh văn bản | On by default; writes ad text from the landing page; switch off in setup or campaign settings where the page carries an unsourced claim | support.google.com/google-ads/answer/10724897?hl=vi, 24/09/2026 |
| `average-daily-budget` | Google Ads, ngân sách trung bình hằng ngày | One day may spend up to twice the average daily budget; the month spends at most 30,4 times it | support.google.com/google-ads/answer/2375423?hl=vi, 24/09/2026 |
| `negative-close-variants` | Google Ads, từ khoá phủ định | A negative does not match close variants or plurals; each form is added separately. This kit treats a spelling without diacritics as such a variant (reading, not stated by the page) | support.google.com/google-ads/answer/2453972?hl=vi, 24/09/2026 |
| `account-spending-limit` | Meta, giới hạn chi tiêu cho tài khoản quảng cáo | A lifetime limit the member sets; at the limit ads pause and the account stops spending, while Ads Manager may still show them active. The billing threshold (ngưỡng thanh toán) is when Meta charges, not a cap | vi-vn.facebook.com/business/help/141820733085330, 24/09/2026; vi-vn.facebook.com/business/help/776240779095515, 24/09/2026 |
| `payment-restriction` | Meta, hạn chế thanh toán | Unusual activity or failed payments can restrict payment methods and pause ads | vi-vn.facebook.com/business/help/1256440956255650, 24/09/2026 |
| `learning-phase` | Meta, giai đoạn máy học; TikTok, giai đoạn tìm hiểu | Meta: about 50 results in the week after the last significant edit, and an edit restarts learning. TikTok: about 25 results or 7 days; raise a budget by at most 40 percent a step during learning and 30 percent after, no more often than every two days; avoid pausing an ad group while it learns | vi-vn.facebook.com/business/help/112167992830700, 24/09/2026; ads.tiktok.com/help/article/learning-phase?lang=vi, 24/09/2026; ads.tiktok.com/help/article/budget?lang=vi, 24/09/2026 |
| `minimum-daily-budget` | TikTok Ads, ngân sách | Documented only in USD: a campaign budget above 50 USD, an ad group above 20 USD. A VND account reads its own screen; never convert | ads.tiktok.com/help/article/budget?lang=vi, 24/09/2026 |
| `shop-campaign-default` | TikTok Shop, GMV Max | Since 07/2025 the default and only campaign type for Shop ads; counts every order of promoted products, organic and affiliate included, same day, 1 day window | ads.tiktok.com/help/article/best-practices-for-video-shopping-ads-with-tiktok-shop?lang=vi, 24/09/2026; ads.tiktok.com/help/article/about-product-gmv-max?lang=vi, 24/09/2026 |
| `verified-official-account` | Zalo Ads, OA ads and Post ads | Need a verified Zalo OA | ads.zalo.me/business/cac-hinh-thuc-quang-cao-tren-zalo-ads/, 24/09/2026 |
| `restricted-age` | Meta and TikTok, weight management products | Ads only to people 18 and over; no claim that the product alone causes weight loss | transparency.meta.com/vi-vn/policies/ad-standards/restricted-goods-services/health-wellness/, 24/09/2026; ads.tiktok.com/help/article/tiktok-ads-policy-weight-management?lang=vi, 24/09/2026 |

**Documentation a routine may read by automated means.** Google help pages
(support.google.com): allowed, robots.txt read 24/09/2026 disallows only search,
api and forum attachment paths. Meta, TikTok, TikTok Shop, Shopee and Zalo:
not allowed, their terms re-opened 24/09/2026 forbid automated access or
collection; `ads-build-desk` reads no page of theirs, and a cap on those
platforms stays `n/a (cap not confirmed)` unless the member confirmed it on a
card or the Field limits table under `web.fetch` records it with a read date
under ninety days old. In this variant `ads.account.write` in section 4b is never called: the
member recorded zero authority over money (see `CONTRACT.md` sections 7.0 and 10.3).

---

## 5. Content

Seven capabilities. Two of them decide whether a creative set arrives finished or arrives as text with a note. Two are research. Three are documented and unused, and section 8 says why.

This is also where the club dashboard's hosted tools slot in. Where a hosted tool exists for a capability, it is the preferred route, because it is the one route that behaves identically on every harness in this table. When one appears, it becomes another row in the preference order and no routine changes by one word.

### `image.generate`
Produce one image from a prompt.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club generator when available, then whichever image generation helper you have installed, detected by name | `confirmed` |
| OpenClaw | Hosted club generator when available, then an installed image helper | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club generator when available, then an installed image helper | `unknown` |
| Grok Bot | Hosted club generator when available, then an image connector you added at grok.com/connectors | `expected` |
| Codex | Hosted club generator when available, then an installed image helper | `unknown` |
| Antigravity | Hosted club generator when available, then an installed image helper | `unknown` |

**Absent:** `ads-creative-studio` produces a **text only set** and says so. The manifest carries every slot with its exact string and its character count, `## Images` reads `n/a (no image generation capability configured)`, and one line under `## Read this before you upload` tells you what to supply. **This is not a failure and it is not a blocker.** A set of strings you can paste is most of the value, and the routine files its card either way.

**This is the capability people most want to write a vendor name into a routine, and it is the one where doing so would cost the most**, because a member who changes generator next month should not have to edit seven routines. The routine says `image.generate`. This table says what that is on your machine. **Name it here and nowhere else.**

**Three rules govern the prompt, and they live in the routine rather than here because they are about content rather than route.** No claim, figure, price, or testimonial goes into an image, because text inside an image is text no checker can read and it bypasses `copy.check` entirely. No person is depicted in a way that implies a customer or a result unless the proof inventory carries that claim verbatim. No logo, brand mark, or recognisable third party asset is reproduced.

**One attempt per image, then move on.** A second prompt for the same slot is a second attempt wearing a costume, and it is how a run spends its whole budget on artwork.

### `image.compress`
Resize and re encode an image below the injection ceiling while keeping it presentable.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club compressor when available, then a local image tool through `shell.run` | `confirmed` |
| OpenClaw | Hosted club compressor when available, then `shell.run` | `expected` |
| Hermes | Hosted club compressor when available, then `shell.run` if it has one | `unknown` |
| OpenCode | Hosted club compressor when available, then `shell.run` | `expected` |
| Grok Bot | Hosted club compressor when available, then a local image tool through `shell.run` on its cloud computer | `expected` |
| Codex | Hosted club compressor when available, then `shell.run` | `expected` |
| Antigravity | Hosted club compressor when available, then `shell.run` | `expected` |

**Absent:** ship the images uncompressed, record their byte sizes in the manifest, and put one line under `## Read this before you upload` naming the sizes. Not a failure and not a blocker.

**The ceiling is hard and it is the part people miss.** Base64 runs roughly 1.4 characters per image byte. The budget is 24,000 base64 characters, which is about a 17 KB file. Over 30,000, do not proceed. An oversized image does not fail loudly. **It wedges the call, and you lose the whole step rather than the picture.**

**One question worth answering before you shrug at that ceiling in a kit that uploads nothing.** The ceiling is about what moves through a capability route, not about what a form accepts. An image that cannot come under it is an image the compress route cannot hand back, so the studio records `n/a (image over the injection ceiling)` against that slot and ships the set without it. **A set delivered on time missing one image is finished. A run that stalls on artwork is not.**

**Never emit the base64 as text.** It moves through the route, not through the transcript. A call that seems slow is not stuck.

### `image.inject`
Put a compressed image into exactly one file input and dispatch a bubbling change event.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `page.script`, then `file.upload` | `confirmed` |
| OpenClaw | `page.script`, then `file.upload` | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The server's file chooser handling, then `page.script` | `expected` |
| Grok Bot | `page.script` in its own browser, then `file.upload` | `expected` |
| Codex | The server's file chooser handling, then `page.script` | `expected` |
| Antigravity | `page.script`, then `file.upload` | `expected` |

**No shipped routine in this kit calls this. See section 8.** The compression in `ads-creative-studio` is for the file you upload, not for a form the kit fills. **The kit injects nothing into anything.**

It is documented because `image-into-a-form` is in `recipes/BROWSER-RECIPES.md`, and that recipe is in the file because the studio names it explicitly as the recipe it does not reach for. Keeping the row here is what lets the routine say that without a reader having to guess what it means.

### `file.upload`
Hand a local file to a page's file input.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file upload, path inside the session working directory only | `confirmed` |
| OpenClaw | Its file upload, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's set input files | `expected` |
| Grok Bot | Its own browser. The file is already on its cloud computer, because the kit lives there | `expected` |
| Codex | The browser automation server's set input files | `expected` |
| Antigravity | Its file upload | `expected` |

**No shipped routine in this kit calls this. See section 8.** An asset library inside an ad account is an object inside an account that can spend, and an asset saved there is one click from an ad. **You upload the set. The kit writes it.**

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

**No shipped routine in this kit calls this. See section 8.** Nothing in this kit goes into an editor. Every string it writes is a plain string in a manifest or a build sheet, with its character count beside it.

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Your own search endpoint named in `plan/measurement.md`, then its web search | `confirmed` |
| OpenClaw | Your own search endpoint, then its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Your own search endpoint, then a search server if you added one | `expected` |
| Grok Bot | Its built in web search, then its own browser | `expected` |
| Codex | Your own search endpoint. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Your own search endpoint, then its web search | `expected` |

**Absent:** write the exact queries it would have run into the run record so you can run them yourself, and mark every finding that needed one `n/a (no search capability)`. It does not estimate and it does not fill the gap from memory.

Only `ads-account-intake` uses this, and only during its market scan. **Nothing from that scan ever becomes a claim about your business.** A competitor's number is a competitor's number and it never enters the proof inventory in any form under any heading.

**Platforms whose terms forbid automated reading, re-opened 24/09/2026.** Meta (Facebook, Instagram, Messenger, Ad Library; terms 3.2, dated 01/01/2025), TikTok and TikTok Shop (terms dated 01/12/2025), Shopee (terms 3.1, posted 22/09/2026, which also forbids manual monitoring), Zalo and Zalo OA (terms 4.6 and 4.7, dated 05/09/2026), LinkedIn (8.2, dated 03/11/2025), Google Search and Google Maps (automated access only where robots.txt allows; kit practice: no scraping of results or map pages). On these, `ads-account-intake` fetches nothing and scripts no browser; the member pastes what they see or hands over their own export. Cốc Cốc Ads can import Google Ads search campaigns.

If you have your own search endpoint, name it in `plan/measurement.md` by its human readable name only. No key, no token, and no URL with a credential in it goes into that file or any other file in this kit.

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

**This is the most useful capability in the kit after the file ones, and it is easy to underrate.** Four routines prefer it over a browser for their whole browser phase, because it needs no browser, takes no mutex, and costs no lane time. It reaches the two page kinds this kit reads outside an account: **a platform's own published documentation page carrying a field limit, and your own landing page.** Both are public. Neither needs a session.

That is why `ads-creative-studio`, `ads-build-desk`, `ads-change-list`, and `ads-creative-retro` all carry a `conditional` or `light` lane and still open a browser on almost no runs.

It cannot reach anything behind your own login, which is where your ad account lives. Section 7 has the honest arithmetic on that.

#### Platform terms and documentation hosts (Vietnam variant, checked 2026-09-24)

A routine reads a platform's public documentation automatically only on a host marked open here. Every other host is closed: its limits come from the dated table below, or read `n/a (cap not confirmed)`. A host not listed is closed.

| Host | What the platform's terms say | Automated reading by a routine |
|---|---|---|
| support.google.com, `/google-ads/answer/` pages | Google's terms allow automated access only as robots.txt allows; its robots.txt disallows only search, api and forum attachment paths | open |
| facebook.com, including its business help pages | Meta terms section 3.2: no automated access or collection without permission | closed |
| ads.tiktok.com, tiktok.com, TikTok Shop | TikTok terms: no automated code to collect from or interact with the service | closed |
| shopee.vn | Shopee terms section 3.1: no automatic or manual monitoring or collection without written consent | closed |
| zalo.me, ads.zalo.me | Zalo terms 4.6 and 4.7: no unauthorised or third party access | closed |
| lazada.vn | Terms not read | closed until read |

#### Field limits read by a person (Vietnam variant)

Each line was read off the platform's own Vietnamese documentation on the date shown. A routine copies a line into its own `caps{}` with this URL and this date while the date is less than ninety days old, and reads it as `n/a (cap not confirmed)` after that. A truncation point is not a cap: text beyond it is cut on most placements, not refused.

| Platform and placement | Slot or fact | Limit | Kind | URL | Read on |
|---|---|---|---|---|---|
| Meta, most placements | primary text | 125 characters | truncation point | https://vi-vn.facebook.com/business/help/223409425500940 | 2026-09-24 |
| Meta, most placements | headline | 40 characters | truncation point | https://vi-vn.facebook.com/business/help/223409425500940 | 2026-09-24 |
| Meta, most placements | description | 25 characters | truncation point | https://vi-vn.facebook.com/business/help/223409425500940 | 2026-09-24 |
| Meta | empty text field | may be filled from the destination URL and then cannot be edited | rule | https://vi-vn.facebook.com/business/help/223409425500940 | 2026-09-24 |
| TikTok In-Feed | format | video only; vertical 9:16 recommended, at least 540x960 px; horizontal 16:9 at least 960x540 px | spec | https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=vi | 2026-09-24 |
| TikTok In-Feed | display name | 20 characters (10 in Chinese, Japanese or Korean) | hard cap | https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=vi | 2026-09-24 |
| TikTok In-Feed, non Spark ads | caption | no clickable link, no @ mention, no hashtag | rule | https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=vi | 2026-09-24 |
| TikTok In-Feed | video file | at most 10 minutes and 500 MB | hard cap | https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads?lang=vi | 2026-09-24 |
| Google Search, responsive search ad | headline | 30 characters; at least 3, at most 15 | hard cap and minimum count | https://support.google.com/google-ads/answer/7684791?hl=vi | 2026-09-24 |
| Google Search, responsive search ad | description | 90 characters; at least 2, at most 4 | hard cap and minimum count | https://support.google.com/google-ads/answer/7684791?hl=vi | 2026-09-24 |
| Google Search, responsive search ad | path | 15 characters | hard cap | https://support.google.com/google-ads/answer/7684791?hl=vi | 2026-09-24 |
| Google Performance Max | video for Shorts | at least one vertical video of 10 to 60 seconds | minimum | https://support.google.com/google-ads/answer/14528532?hl=vi | 2026-09-24 |

### 5.1 Four capabilities no shipped routine calls, stated plainly

`field.set`, `image.inject`, `file.upload`, and `richtext.paste` are in the tables above because `recipes/BROWSER-RECIPES.md` describes them, and it describes them because six routines name those recipes explicitly as the boundary they do not cross. `CONTRACT.md` section 3.5 is the same statement from the contract's side.

**No routine in this kit types into a form on any website, uploads a file anywhere, or pastes into an editor.** The only typing any routine does on any account screen is a search box, a filter box, or a date range on a report view. An image you need is written into a set folder and named by its path. A build sheet is a file you paste from.

**If a routine ever finds itself calling one of those four, that is a defect and the run record says which control it was about to reach for.**

Keeping the rows here rather than deleting them is deliberate. A routine that says "I never reach for `image-into-a-form`" is only readable if a reader can find out what that recipe would have done. Four documented and unused rows cost nothing. A routine referring to something a reader cannot look up costs a member their confidence in the whole file.

---

## 6. Kit capabilities

Four. These are the kit's own, and three of them ship as scripts inside it.

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

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. **That is the one file in this kit written by a routine that does not own it**, it is an append under its own heading rather than a rewrite, and it exists because a run with no record is a run that gets repeated.

The script validates the record's shape, checks `status` against the closed list of eight, **refuses a stale routine id by name**, refuses anything that looks like a secret, refuses draft text and personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

One interface, used verbatim at every call site:

```
node "«ADS_ROOT»/scripts/runlog.mjs" --file "«scratch path»/run-record.json"
```

`--stdin` is the equivalent where a pipe is easier, and `--selftest` takes no other flag.

**Write the record to a scratch file first and hand the script the path. Do not pass the JSON object as a bare quoted argument.** A common shell strips the double quotes out of a native command's arguments on the way through, so the object arrives unparseable and the run appears to have no record at all.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

### `copy.check`
The scripted judge for any text about to be written into a creative set, a build sheet, a change list, a plan file, or a dashboard partial.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` on its cloud computer, then in agent | `expected` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where a string goes into a set unchecked.

One interface, used verbatim at every call site:

```
node "«ADS_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `email`, `dm`, `form`, `strategy`, `dashboard`, `plain`. **This kit uses four of them:** `form` for anything you will paste into a field, which is every creative string and every build sheet asset; `strategy` for a plan file and the doctrine; `dashboard` for a dashboard partial; and `plain` for the brief, the board, the digest, and the change list. `--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 08:15 on a Tuesday. **There is no `--profile`, no `--destination`, and no bare positional path.**

The rules it applies, in order, are in `CONTRACT.md` section 3.4. **Do not eyeball any of them. The script is the judge**, including on the dashes, and a stated preference has never been enough.

### `review.catalog`
Derive every creative set's review, publication and delivery state from the three files that hold them, and serve the member's review page.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/review.mjs --catalog --json`, then the same derivation in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/review.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/review.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` on its cloud computer, then in agent | `expected` |
| Codex | `shell.run` on `scripts/review.mjs`, then in agent | `confirmed` |
| Antigravity | `shell.run` on `scripts/review.mjs`, then in agent | `expected` |

**Absent the script:** derive in agent by the same rule, the latest `member` row in `creative/approvals.jsonl` naming a set's current revision decides, and put `review: in-agent` in `notes`. **No routine ever appends a row to that file**, and the in agent route is a derivation, not a permission to approve anything.

One interface, used verbatim at every call site:

```
node "«ADS_ROOT»/scripts/review.mjs" --catalog --json
```

The member runs `node "«ADS_ROOT»/scripts/review.mjs" --serve` to open the page on the loopback address, and `--record` to review from a terminal. The page makes no network call, calls no platform, and writes one file.

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

**Absent all routes:** write the exact commands to `«ADS_ROOT»/schedule-commands.txt` and name that file in the report and in the brief. You run them yourself, once, and the kit is scheduled.

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

In the Vietnamese variant no route posts the brief into Zalo, a Zalo group, a Zalo OA or through ZNS. Where you read on Zalo, the person on duty pastes brief-latest.md exactly; the kit never logs into Zalo (its terms forbid third party access) and never uses OA broadcast or ZNS for an internal brief.

---

## 7. What you lose with no browser at all

The honest headline first.

**The morning brief never needs a browser. Neither does the creative set, the build sheet, the weekly change list, or the monthly doctrine rewrite.** On a machine with no browser control at all, you still get a plan every morning, a set of creative every weekday, a sheet whenever a card asks for one, a ranked change list every Friday, and a doctrine tested against evidence every month.

**What you lose is the evidence all five of them are built on.**

`ads-account-read` is the only routine in this kit that opens an account screen on any recurring basis, and it is the only source of a figure about your account anywhere in the kit. Without a browser it cannot reach a reporting screen at all, `metrics/daily.jsonl` gains no rows, and every routine downstream honestly reports `n/a` rather than guessing. The change list writes the dead week headline. The retrospective writes `not tested` against every category and changes nothing. The studio produces against the doctrine's angle list with no decay signal to rank against.

**That is a correct and honest degradation and it is also not much of a product.** Unlike the other Employees in this club, this one genuinely needs the browser, because the thing it manages lives behind your login and there is no public page that carries yesterday's cost per result.

There is no paste your own data workaround here, and I would rather say so than invent one. **If your harness cannot drive a browser holding your own ad account session, this is not the Employee to buy yet.** Fix the browser first, or run `ads-account-read` by hand at the machine and let the other six schedule normally.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `ads-account-read` | Confirms the conversion event, reads four levels, appends the metrics ledger | Nothing. Every figure in this kit comes from here | `failed`, with `no browser control capability configured` |
| `ads-desk-standup` | Never uses one | Identical. Full function. The brief says the ledger has no row for the day | `ok` |
| `ads-creative-studio` | May read one documentation page for a field limit | Produces the whole set. Unconfirmed caps read `n/a (cap not confirmed)` | `ok` |
| `ads-build-desk` | May read one documentation page and check the landing page resolves | Writes the whole sheet. Unconfirmed caps and unchecked URLs are named on the sheet | `ok` |
| `ads-change-list` | May check the landing page still resolves | Writes the whole list from the ledger. The page check reads `not checked this week` | `ok` |
| `ads-account-intake` | Crawls your site, reads the account structure once, opens the built dashboard | Crawl narrows to what `web.fetch` reaches, the account read is skipped and carded, the dashboard is verified off disk | `partial` |
| `ads-creative-retro` | May check the member's own website still says what a framing rule assumes. Never reads a marketplace, social or video platform page, or a chat, even the member's own | Folds the whole month and rewrites the doctrine. Framing checks read `not checked this month` | `ok` |

Six of the seven produce their main deliverable with no browser at all. **The seventh is the one that makes the other six worth reading.**

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

**The one that matters here is image generation.** If you have an image helper installed, `image.generate` resolves through it and your sets ship with artwork. If you do not, your sets ship as text only, the manifest says so in one line, and the card is filed either way. Nothing waits, nothing asks, and nothing is installed on your behalf.

Self repair means the same thing. When `ads-account-read` needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts, it reads the live page, finds the element that now carries that role, and writes the replacement into the same file. Both are a file inside `«ADS_ROOT»`. It is never a new helper installed somewhere global, and it is never silent: it goes in the run record as one line naming the step it repaired.

**Forbidden, deliberately.** No routine may call anything that publishes, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend. That includes publishing helpers, search console and indexing helpers, and paid data endpoints. **Spend is the one thing this kit exists to hold the line on, and that includes spend on itself.**

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.

**The job's only content is the invocation.** All the logic is in the routine.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan. Overlapping windows are deliberate. Overlapping fire times are not.

**Name every job exactly after its routine id.** All seven ids carry the `ads-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one. The examples here carry the shipped defaults so the shape is readable. If your table says something different, your table is right.

The shipped default week:

```
Every weekday
  06:45  ads-account-read
  07:30  ads-desk-standup
  08:15  ads-creative-studio
  09:15  ads-build-desk

Friday adds             16:00  ads-change-list
First weekday adds      13:00  ads-account-intake
Last weekday adds       14:00  ads-creative-retro
```

No two share a fire minute, including the one that never touches a browser.

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

Throughout, `«RUN ads-account-read»` and its six siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write seven of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run ads-account-read"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «ADS_ROOT»/routines/ads-account-read/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «ADS_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«ADS_ROOT»`, permission mode set per task. Shape B | `confirmed` |
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

**The working directory.** The run has to start in `«ADS_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 06:45 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `ads-desk-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other six. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you would see is an empty brief.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file.

### 9.2b Scheduled readiness is a scheduled fire

Registration proves that the scheduler holds a job. It does not prove that the job runs, that it runs with the permission mode you set, that it starts in the kit folder, or that it can reach the connections a chat session could. All four have failed after a clean registration, and the one that hides longest is the last: a token or a secret store that unlocks for the signed in user and not for the process the scheduler starts. The observed case was an account read that worked in the session that connected it, and a scheduled routine the same evening that could not decrypt the same saved token.

So readiness is proved once, by a fire the scheduler started, and it is reported as its own fact. The install prompt registers the jobs and reports `scheduled execution: not yet verified`. The proof is a line in `runlog.jsonl` from a run nobody started by hand, at the registered time, with the status it should have, and where a routine reads through a connected route, that first scheduled read is the second mark on the route's row in `## Corrections`, next to the mark the chat session left. Two marks, two processes, and a row with only the first is not ready.

**A run by hand never counts**, however well it went. It goes through the same guard, records the same period, writes `run by hand` in `notes`, and never claims a scheduled fire happened. Installed, scheduled and proven are three words, and a report that uses one of them for all three has hidden the failure that matters most.

### 9.3 cron, on macOS or Linux

```
45 6  * * 1-5    «RUN ads-account-read»
30 7  * * 1-5    «RUN ads-desk-standup»
15 8  * * 1-5    «RUN ads-creative-studio»
15 9  * * 1-5    «RUN ads-build-desk»
0  16 * * 5      «RUN ads-change-list»
0  13 1-7 * *    «RUN ads-account-intake»
0  14 25-31 * *  «RUN ads-creative-retro»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The two monthly lines are the ones people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `0 13 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

`25-31` is the last weekday line, and it is a range for the same reason. Every date in it falls inside the last seven days of the month in every month length, including February, so nothing outside the intended window can fire.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "ads-account-read"     /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 06:45 /TR "«ADS_ROOT»\run\ads-account-read.cmd"
schtasks /Create /TN "ads-desk-standup"     /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:30 /TR "«ADS_ROOT»\run\ads-desk-standup.cmd"
schtasks /Create /TN "ads-creative-studio"  /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:15 /TR "«ADS_ROOT»\run\ads-creative-studio.cmd"
schtasks /Create /TN "ads-build-desk"       /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 09:15 /TR "«ADS_ROOT»\run\ads-build-desk.cmd"
schtasks /Create /TN "ads-change-list"      /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«ADS_ROOT»\run\ads-change-list.cmd"
schtasks /Create /TN "ads-account-intake"   /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 13:00 /TR "«ADS_ROOT»\run\ads-account-intake.cmd"
schtasks /Create /TN "ads-creative-retro"   /SC MONTHLY /MO LAST  /D MON,TUE,WED,THU,FRI /ST 14:00 /TR "«ADS_ROOT»\run\ads-creative-retro.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«ADS_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «ADS_ROOT»\run\ads-desk-standup.cmd
@echo off
cd /d "«ADS_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «ADS_ROOT»/routines/ads-desk-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«ADS_ROOT»\run\ads-desk-standup.last.json"
if errorlevel 1 node "«ADS_ROOT»\scripts\runlog.mjs" --failed-run ads-desk-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«ADS_ROOT»`, and check the path.

The two monthly lines fire on the first Monday, the first Tuesday, and so on, up to five times each. The period key reduces that to one run per month. This is the same tradeoff as the cron version and it is deliberate: **be generous about when, be strict about how many times.**

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all seven. The window guard makes the catch up safe, and without it a laptop that was closed at 07:30 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. Between them, a duplicate or an early fire is harmless, which is exactly why neither guard is ever bypassed because a run "looks due".

Set the earliest fire in your table after the time the machine is normally awake. **In this kit that matters more than in most**, because `ads-account-read` reads a reporting day that nothing else can go back and read for you. A morning nobody read is a permanent gap in the ledger, and the routine's catch up read is capped on purpose rather than unbounded.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, `ads-account-intake` writes every command it would have run into `«ADS_ROOT»/schedule-commands.txt` and names that file in the first paragraph of its report and in the brief. Run them yourself once and you are scheduled.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the report in one line, and points you at 9.2a.

### 9.7 Drift

`ads-account-intake` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. **A drift check that cannot see the schedule reports that it could not see the schedule.**

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 06:45 the read routine asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the seven scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows, ideally `«ADS_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is the thing that keeps that true rather than merely intended.

**A prompt can come from below the harness too.** A private network permission prompt is a browser prompt, not a harness prompt, and no auto approve setting clears it. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about in an Employee that works inside accounts holding your money, so here is the direct answer.

**The prompt gate was never what stopped this kit from spending.** The stops live inside the routines and they are stated as behaviour rather than as permission. No routine opens a create flow, a campaign wizard, a conversion action form, an audience builder, an asset library, or any screen in edit mode. No routine presses a control that creates, saves, applies, activates, pauses, resumes, or sets a budget. No routine types a budget figure into an account. No routine enters a credential. There is no code path where an approval prompt is the last thing standing between this kit and a live campaign.

Turning off the prompt removes a question about opening a tab and writing a file. **It does not add a capability.**

What actually holds the line is in the routines and it is checked at the end of every single run: nothing sent, nothing posted, nothing submitted, nothing enabled, nothing published, nothing spent, nothing created or saved in any account in any state including draft, no create flow or edit mode screen opened at all, no credential written or logged anywhere, and every claim traceable to the proof inventory. If any of those does not hold, that run is a failure regardless of what else it produced, and the record says which control on which screen.

**If your harness cannot run without interactive approval, do not schedule `ads-account-read`.** Run it by hand, when you are at the machine. The other six schedule fine and you still get the brief, the set, the sheet, the list, and the doctrine. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.
