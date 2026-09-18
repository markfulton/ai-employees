# Sales Employee: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, set the field, append the run record. When a routine says `page.read`, it means "read this page as a structure I can click into," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, or a vendor selector inside a routine body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and this kit has been run on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 06:45 on a Tuesday when nobody is awake to notice.

**There are twenty one capabilities in this kit** and every one of them is in sections 3 to 6 below. `CONTRACT.md` section 3 carries the same twenty one with their route preference order and their degradation. Where the two disagree, the contract wins on what a capability does and this file wins on what it is called on your machine.

---

## 1. How to check what your harness supports

### 1.1 The four checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth decides how much of the kit runs.

**1. Can it read and write files in `«SALES_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«SALES_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly.

Also confirm `«SALES_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. **This matters more in this kit than in most.** The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Worse, `crm/contacted.jsonl` is the dedupe truth behind every draft this kit ever writes, and a sync conflict on it is a duplicate first touch to a stranger. Both drafting routines refuse to run at all from a synced path for that reason, and the install moves the folder rather than asking you to.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause check is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**4. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a routine that works and one that stares at a sign in page every morning.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your own sources and every mailbox compose lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single day.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that the sweep is limited to public pages and that no draft will ever reach your mailbox. Section 7 is the honest accounting.

### 1.2 The probe

Paste this into your agent, in `«SALES_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the 21 capabilities in sections 3, 4, 5 and 6, tell me three things:
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
  Change no files. Send nothing. Open no account. Open no mailbox.

Give me one table and nothing else.
```

Read the result next to section 2. Where it disagrees with a table here, your machine is right and the table is wrong, and the disagreement goes in `## Corrections` at the bottom of this file in one line.

### 1.3 What the confidence column means

| Value | Means |
|---|---|
| `confirmed` | Verified working. Claude Code is the harness this kit was built and run on, so it is the only column where this appears |
| `expected` | The harness has this class of capability and the route is the one named. The exact name will differ, and may have changed since this file was written |
| `unknown` | Nothing about this could be confirmed. Probe it before you rely on it. Do not read a blank as a no, and do not read it as a yes |

### 1.4 Probe live, never cache

Capability detection happens at the top of every run, every time. No routine stores a capability result and reuses it tomorrow.

The reason is the failure it prevents. You connect a browser on Thursday. A routine that cached Wednesday's answer keeps writing queue files with no mailbox drafts beside them for a month and records a blocker you already fixed. Cheap check, expensive cache.

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
| **Grok Bot** | Expected, on its own cloud computer | Its own browser, on that computer | Check first; it runs elsewhere | Built in recurring tasks | `expected` on files, `unknown` on your sessions |
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

**Grok Bot.** Its bots already run routines on a schedule from their own cloud computer, so the scheduler is built in and the invocation is the routine file handed over as the run prompt. The thing to settle first is whether it can reach your own signed in accounts at all, because it runs somewhere else; if it cannot, section 7 says what the file side of the kit still produces.

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«SALES_ROOT»` and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it, and a routine will report a page as unreachable when the page is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust a browser routine on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your own sources, your own search pages, and your own mailbox are reachable at all. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «SALES_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «SALES_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «SALES_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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

The shell route, where you need it: on Windows, `powershell -NoProfile -Command "(Get-TimeZone).Id; Get-Date -Format 'yyyy-MM-dd HH:mm:ss'"`. On macOS or Linux, `date +"%Z %Y-%m-%d %H:%M:%S"`.

### `file.read`
Read a file as text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file read, or a shell command | `confirmed` |
| OpenClaw | Its file read, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file read, or a shell command | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its file read. Confirm the sandbox includes `«SALES_ROOT»` | `expected` |
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
| Grok Bot | Unknown | `unknown` |
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
| Grok Bot | Unknown | `unknown` |
| Codex | Its glob, or a shell command | `expected` |
| Antigravity | Its glob, or a shell command | `expected` |

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation in its run record. This works, and it misses two things specifically: a queue file you renamed by hand, and a sibling AI Employee's folder, which is how `sales-desk-setup` staggers its browser lane against a neighbour.

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

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. A missing browser never fails the day for the other six routines, and it never stops the morning brief. Section 7 has the routine by routine detail.

**There is no ninth status for this.** Missing browser control maps onto `partial` or `failed` and nothing else. If you see a routine invent a status for it, that is a defect.

### `browser.session`
Confirm browser control is attached to a browser holding your own logged in session.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | The Chrome extension bridge, attached to your own Chrome | `confirmed` |
| OpenClaw | Its own browser control if it has one, otherwise a browser automation server | `unknown` |
| Hermes | Unknown. Probe before relying on any browser routine | `unknown` |
| OpenCode | A browser automation server added to the harness | `expected` |
| Grok Bot | Unknown. Probe before relying on any browser routine | `unknown` |
| Codex | A browser automation server added to the harness | `expected` |
| Antigravity | Its built in browser control. Confirm it drives your signed in profile | `expected` |

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the platform named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either, because a run of five sign in pages is not five units of work.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired. **In this kit that is the most expensive mistake available**, because the two surfaces this Employee works are a compose window and an open mail thread: a blind retry there is a second draft to the same person, or a reply that was never meant to leave. So the kit re-reads the page before deciding anything, on every harness. What differs is how often you meet it.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re-read where the page actually is before you decide what happened. A read costs one call. A duplicate message to a prospect cannot be taken back.

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

**Tab hygiene, on every harness.** Create your own tab, close it when you are done, and never touch a tab you did not open. **There is no exception in this kit**, because this Employee fills no forms: no tab is ever the deliverable, and every deliverable is a file on disk or an unsent draft in your mailbox.

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

**Two things that are true everywhere.** A deep link can return a not found page while the same destination reached by clicking through the app works fine, so a 404 on a deep link is worth one attempt through the app before it is recorded as a blocker. And a single overlong URL can wedge a page permanently, so one target per search.

**This capability carries more weight in this kit than in most**, because it is how every query is set on LinkedIn. That surface is read only with no exception and nothing types into it, including its search box, so navigating to the search URL and reading the box back is the only route a query has.

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

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run, which in this kit means the sweep and the reply search. The compose phase does not, because the nudge needs a click by reference and there is no coordinate fallback. See `element.click` for why.

**References go stale, and how they go stale is a property of your page read.** The principle holds everywhere: an app that swaps views leaves detached copies of the old one behind, so a reference taken before a view change can resolve to nothing while looking perfectly valid. What differs is the shape of the fix.

| Harness | How references behave | What to do |
|---|---|---|
| Claude Code | References accumulate across reads and the detached copies keep theirs, so both the ghost and the live element are in the tree at once. Numbering rises | Take the highest numbered reference. The lower one is the ghost |
| OpenClaw | Unknown | Re-read after any view change and use what the fresh read returns |
| Hermes | Unknown | Same |
| OpenCode | The browser automation server's snapshot is expected to re-number on every read, with detached nodes absent | Take a fresh read after any view change. Highest numbered means nothing here and would pick an arbitrary element |
| Grok Bot | Unknown | Re-read after any view change |
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
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's text or content read | `expected` |
| Antigravity | Its text extraction | `expected` |

**Absent:** read from `page.capture` instead.

**Never trust page text straight after a navigation in a single page app.** It can return the previous view, with no error and nothing that looks wrong. Verdicts get read off a capture, not off text, whenever the answer decides something. In this kit the two answers that matter most are which message is open in a mail thread and whether a compose surface actually loaded, and both are read off a capture or off a string that belongs only to the new view.

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

**Two things worth carrying wherever this runs.** A capture of a small region focuses the tab exactly as well as a full screen capture and costs a fraction as much, which matters because focus is what makes the compose nudge land at all. And never make a capture the last action in a batch: if the batch times out, every image it already captured is discarded with it.

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

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked. **In a compose window the controls nearest a body click are the ones that send, and in an open thread they are the ones that reply and delete**, so a click landing somewhere it was not aimed is the one failure this kit will not gamble on. A skipped phase you can see beats a click that quietly did not happen.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify. And a few controls need a genuine user gesture rather than a synthetic one, so a click that reports success while nothing changed is usually this.

**Some browser control refuses an action rather than performing it, and where that lives differs.** A refusal is not a transient error and is never retried a different way, which is `retry` class 2 in `BROWSER-RECIPES.md`. What you need to know is which layer on your harness can produce one.

| Harness | Where a refusal can come from |
|---|---|
| Claude Code | Its own safety classifier sits between the agent and the page and can decline an action outright, on top of the harness permission layer. **It declines clicks and keystrokes on LinkedIn**, which is the rule and the platform agreeing rather than a fault |
| OpenClaw | Unknown. Assume the harness permission layer at minimum |
| Hermes | Unknown. Same |
| OpenCode | The harness permission layer. A browser automation server has no classifier of its own and does not refuse |
| Grok Bot | Unknown. Same |
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
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's fill or type | `expected` |
| Antigravity | Its form input | `expected` |

**Absent:** skip the field and record it as a blocker naming it. Where the field was a search box, do not classify the rows on screen: they belong to whatever query was there before, and the finding is `n/a (query not confirmed)`.

**This kit has exactly one use for this capability**, which is setting a search box on a search page it is about to read, on a surface where typing is permitted. This Employee fills no forms. The only other keystroke it ever makes is the single character nudge that saves a mail draft.

**`field.set` is unreachable on LinkedIn**, on every harness, whatever the harness would allow. Section 7 of `CONTRACT.md` is the rule and it has no exception: a query on that surface is set by navigating to the search URL and confirmed by reading the box.

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs take this. Typing into dialogs is unreliable and setting the field lands.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A real click plus keystrokes, last resort, where the platform demands a genuine input event. Focus first with a small region capture, or the keystroke is silently swallowed.

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

**Absent:** fall back to `page.read` plus `field.set` plus `element.click`. If none of those is available either, skip the phase and name it.

**Never run a script that clicks or types on LinkedIn.** The read only rule is about the effect, not about the route, and a script that does what a click could not is exactly the routing around a refusal that `retry` class 2 forbids.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it. Assume a ceiling in the tens of seconds rather than discovering yours in production. Where the round trip is the expensive part, chain a whole click, wait, verify cycle into one call rather than three.

**This file carries the measured figure, and `BROWSER-RECIPES.md` deliberately does not.** Claude Code's bridge times out at around 45 seconds. The others are below, and a browser automation server usually exposes a configurable default that you can raise or turn off.

| Harness | Call timeout |
|---|---|
| Claude Code | Around 45 seconds |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | The browser automation server's own default, commonly 30 seconds and usually configurable |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

If yours is not in that table, measure it once with a deliberately slow script and put the number in `## Corrections` at the bottom of this file. That is one measurement that saves a phase every time a mailbox is slow, and a mailbox is slow every morning.

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

**Absent:** fixed waits, which are slower and less reliable, and the run record says so.

Fixed waits are not a failure mode though. They are the shipped behaviour on the mailbox surfaces specifically, where a load state lies: 15 seconds after opening a compose URL, 30 to 38 seconds after a search reload, 18 seconds after reloading the Drafts view. Those three numbers live in `human-pace` in `BROWSER-RECIPES.md`, next to the behaviour each one clears. **If your provider is slower, measure it once and change the number there**, not here and not in a routine.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `mail.read` | Replies on the threads the ledger says were sent | The Gmail connector (`https://gmailmcp.googleapis.com/mcp/v1`); the Microsoft 365 connector for Outlook, which searches and reads only | Read tools only | `expected` |
| `mail.draft` | A first touch or follow up saved as an unsent draft in the member's own mailbox | The Gmail connector's draft tool; on Outlook the queue file stays the route | Draft only; a send is held until `RELEASES.md` names the channel | `expected` |
| `calendar.read` | Meetings booked from an outreach thread | The Google Calendar connector; the Microsoft 365 connector | Read only | `expected` |
| `crm.read` | Pipeline state the member keeps outside this kit | The member's own CRM connector: HubSpot (`https://mcp.hubspot.com`), Attio, Close, Zoho CRM, Salesflare, Salesforce | Read tools only; a write is held | `expected` |
| `people.search`, `people.enrich` | Contactable people behind a source, and the fields that qualify them | The Apollo connector (`https://mcp.apollo.io/mcp`; search costs no credits, enrichment does); the Clay or ZoomInfo connector. A professional network stays on the browser lane, read only | Read only | `expected` |
| `billing.read` | Whether a prospect became a customer | The Stripe connector with a restricted, read only key | The restricted key only | `expected` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

---

## 5. Research and notification

Three capabilities. Two are how the kit learns anything about a business or a source without opening a browser, and one is the only thing that ever interrupts you.

This is also where the club dashboard's hosted tools slot in. Where a hosted tool exists for a capability, it is the preferred route, because it is the one route that behaves identically on every harness in this table. When one appears, it becomes another row in the preference order and no routine changes by one word.

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Your own search endpoint named in `strategy/accounts.md`, then its web search | `confirmed` |
| OpenClaw | Your own search endpoint, then its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Your own search endpoint, then a search server if you added one | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Your own search endpoint. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Your own search endpoint, then its web search | `expected` |

**Absent:** the routine writes the exact queries it would have run into the run record so you can run them yourself, and marks every finding that needed one `n/a (no search capability)`. It does not estimate and it does not fill the gap from memory.

**Never substitute a browser tab driving a search engine.** It is a different thing wearing the same clothes, it burns the browser budget the sweep needs, and it takes a mutex the search never needed.

If you have your own search endpoint, name it in `strategy/accounts.md` under `## Other accounts`. **Name the account by its human readable name only.** No key, no token, and no URL with a credential in it goes into that file or any other file in this kit.

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

On a harness with no fetch of its own, `shell.run` with a fetch command is the same capability under another name, and that is what a routine gets when it asks for `web.fetch`. It comes back as raw markup rather than readable text, which costs a little context and works.

**`web.fetch` takes no browser mutex, and that is why the setup and the sweep prefer it.** A research phase that resolves entirely through fetch never writes and never deletes `state/browser-lock.json`, which leaves the lane clear for the routines behind it. It reaches public pages: your own site, your pricing page, a directory, an association member list. It cannot reach anything behind your own login, which is where your saved searches and your mailbox live.

### `notify.push`
Send one short notification to your own device.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its push notification tool, then a hosted club notifier | `confirmed` |
| OpenClaw | Its own notification route if it has one, then a hosted club notifier | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A hosted club notifier, or none | `unknown` |
| Grok Bot | Unknown | `unknown` |
| Codex | A hosted club notifier, or none | `unknown` |
| Antigravity | Its own notification route if it has one, then a hosted club notifier | `unknown` |

**Absent is not a failure and is never a blocker.** The routine puts `push: not available` in the run record `notes` and carries on. **Every push in this kit is a shortcut to a line that is already in the brief**, so with notifications off you lose speed and never information.

Four things earn one, listed in `CONTRACT.md` section 9.1, and there is no fifth. Drafts waiting in your mailbox are not one of them: that is the veto line's job, every morning, in the brief.

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

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. **A run with no record is a run that gets repeated, and in this kit a repeated run is the one that double drafts.**

The script validates the record's shape, checks `status` against the closed list of eight, refuses anything that looks like a secret or like personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. It also refuses a routine id that is not one of the seven and does not carry the `sales-` prefix, and names the correct id when it recognises one written without it. The in agent route does the same checks. It is a different route, not a lighter one.

Two portable interfaces, and every call site uses one of them:

```
node "«SALES_ROOT»/scripts/runlog.mjs" --file "«SALES_ROOT»/state/run-record.tmp.json"
<the JSON> | node "«SALES_ROOT»/scripts/runlog.mjs" --stdin
```

**Use `--file` or `--stdin`, never a positional JSON argument.** Some shells strip every double quote out of an argument on its way to a native command, so the object arrives unparseable and the run loses its record. Both forms above behave identically on every shell and every harness.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

`--selftest` takes no other flag and confirms the script runs.

### `copy.check`
The scripted judge for any text about to be written into a queue file, a strategy file, a digest, a review, or a brief.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` if present, then in agent | `unknown` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where the copy goes out unchecked.

One interface, used verbatim at every call site:

```
node "«SALES_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `email`, `dm`, `form`, `strategy`, `dashboard`, `plain`. `--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 08:15 on a Tuesday. **There is no `--profile`, no `--destination`, and no bare positional path.**

### `schedule.register`
Register, inspect, or change a recurring job named after a routine id.

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

**Absent all routes:** write the exact commands to `«SALES_ROOT»/schedule-commands.txt` and name that file in the brief. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. **The scheduler is a starter motor, not a controller.**

---

## 7. What you lose with no browser at all

The honest headline first.

**The morning brief never needs a browser. Neither does the follow up queue, and neither does any number on the Friday review.** On a machine with no browser control at all, you still get a plan every morning, a queue of follow ups to send, a reconciled pipeline, and a verdict every Friday.

**What you lose is the sourcing that feeds the queue, and every mailbox draft.** The sweep reads directories, community pages, and your own saved searches, and a good share of those sit behind your login. Without a browser it falls back to `web.fetch` on public pages, which is real but narrower. Left alone long enough, the queue runs dry, because there is nobody new in it. And the drafts stay in the queue file rather than landing in your Drafts folder, so sending them is copy and paste rather than one click.

There is a straightforward answer if that is your situation: paste your own leads into `crm/contacts.csv`, above the marker line. Rows above that marker are yours. The kit reads them, never writes them, and the rest of the loop works exactly as designed. You do the finding, it does the qualifying it can, the drafting, the deduping, the cadence, and the tracking.

**The one thing no workaround recovers is the reply search.** `sales-followup-sweep` reads replies out of your own mailbox, and there is no public route to a private inbox. Without a browser it derives who is due and writes the follow up queue, but it cannot tell you who already answered. Record replies yourself by writing a `replied` line into `crm/contacted.jsonl`, or accept that a follow up may go to somebody who wrote back. **That is the single strongest reason to give this Employee a browser that carries your own session.**

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `sales-prospect-sweep` | Reads your sources and your saved searches, captures contactable people with their evidence | Public pages only through `web.fetch`. Nothing behind your login | `partial`, or `failed` if it captured nothing |
| `sales-desk-standup` | Never uses one | Identical. Full function, brief and all | `ok` |
| `sales-first-touch-drafts` | Queue file plus an unsent draft in your own mailbox | The queue file, which is the whole deliverable minus one click | `partial` |
| `sales-followup-sweep` | Reads replies, records them, then drafts what is due | Derives what is due and writes the queue file. **No reply search** | `partial` |
| `sales-pipeline-review` | Full review plus the Friday flow replay | Full review. No replay, so a drifted flow goes unnoticed until a routine hits it | `partial` |
| `sales-desk-setup` | Researches your business, falls back to the browser where fetch returns nothing | Research narrows to what `web.fetch` reaches. Strategy folder still written, jobs still registered | `ok` or `partial` |
| `sales-qualification-refresh` | Re-checks a gathering place and verifies a rebuilt search URL | Runs on ledger evidence, which is files. Both rewrites still happen | `ok` or `partial` |

Six of the seven produce their main deliverable with no browser at all. That is most of the product, not a consolation prize. But do not buy this expecting the sweep or the reply search to work without one, because they will not, and it is better to know that now.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers when you decide to, and nothing here reaches into that decision.

Self repair means the same thing, and so does self reliance. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts and that flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into the same file. Both are a file inside `«SALES_ROOT»`. It is never a new helper installed somewhere global, and it is never a silent change: it goes in the run record as one line naming the flow or the step.

**These routines are scheduled work and they never belong in a global skills directory.** Registering them there loads all seven into every session you open and lets one be invoked outside its window, where it does nothing but record `skipped-out-of-window` and exit. On Claude Code specifically, scheduled tasks and global skills are different directories, and these belong in the first.

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.

**The job's only content is the invocation.** All the logic is in the routine. If your scheduler grows a shell script with business rules in it, the rules now live in two places and they will disagree, and you will find out which one is wrong on the day it matters.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan. Overlapping windows are deliberate. Overlapping fire times are not.

**Name every job exactly after its routine id.** All seven ids carry the `sales-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Point every job at `«SALES_ROOT»/routines/` as the routine source.** Never at a copy of a routine folder somewhere else. Every routine ends with a `## Corrections` section you write into and the routine reads at the top of every run, and with two copies you write into one and it reads from the other.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one. The examples here carry the shipped defaults so the shape is readable. If your table says something different, your table is right.

The shipped default week:

```
Every weekday
  06:45  sales-prospect-sweep
  07:30  sales-desk-standup
  08:15  sales-first-touch-drafts
  13:30  sales-followup-sweep

Friday adds         16:00  sales-pipeline-review
First weekday adds  11:00  sales-desk-setup
Last weekday adds   11:30  sales-qualification-refresh
```

No two share a fire minute, including the one that never touches a browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.

**The morning order is load bearing.** Sweep, then standup, then drafting. The sweep goes first because everything downstream reads what it captured. The standup goes second so the plan is on your screen before the copy lands. The drafting routine goes third, while you are still reading the brief. The follow up sweep belongs in the afternoon, because a reply arrives during the working day and reading it before drafting is the whole reason that routine has two halves.

### 9.2 The mechanism, per harness

| Harness | Mechanism | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own local scheduler. Ask it to register the table and it reads the routine, days, and fire columns directly, one local task per routine named after the routine id | `confirmed` |
| **Claude Code CLI** | None of its own. Use the operating system's scheduler below, with the launchers in `run/` on Windows or a launchd plist on macOS | `confirmed` that Task Scheduler reaches a running Claude Code through `run/<id>.cmd`; a full routine under it is `expected` |
| **OpenClaw** | Built in cron: `openclaw automations create "<cron>" "<message>" --name <id> --session isolated`, one per routine, with the timezone flag | `expected` |
| **Hermes** | Built in cron, one job per routine, each handed that routine's `SKILL.md` as the prompt | `expected` |
| **OpenCode** | None of its own. Use the operating system's scheduler below | `expected` |
| **Grok Bot** | Its bots run on a schedule from their own cloud computer: one recurring task per routine | `expected` |
| **Codex** | The Codex app's automations: one `kind = "cron"` automation per routine, named after the routine id, `execution_environment = "local"`, the kit folder among its working directories, and an `rrule` built from the `SCHEDULE.md` row. Each automation keeps its own memory file, which is a note to itself and never a ledger this kit reads | `confirmed` on Windows: seven routines fired on schedule under the app's automatic review mode, after the member approved the registrations in the session |
| **Antigravity** | The `agy` job runner, one job per routine, pointed at the routine folder | `expected` |
| **Pi** | None of its own. Use the operating system's scheduler below | `expected` |
| **Cline** | Built in cron: `cline schedule create "<prompt>" --cron "<cron>"`, one per routine, auto approve on | `expected` |
| **Qwen Code** | Built in scheduled tasks, one per routine, or the operating system's scheduler below | `expected` |
| **DeepSeek** | Its scheduling plugin, one run per routine | `expected` |

Three of the rows above, the Claude Code CLI, OpenCode and Pi, use the operating system's scheduler, and the rest bring their own. Either is fine. The operating system's scheduler is the more reliable of the two mechanisms on a laptop that sleeps, which is section 9.5.

Throughout, `«RUN sales-prospect-sweep»` and its six siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write seven of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run sales-prospect-sweep"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «SALES_ROOT»/routines/sales-prospect-sweep/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «SALES_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«SALES_ROOT»`, permission mode set per task. Shape B | `confirmed` |
| **Claude Code CLI** | `claude -p "<prompt>"` with the full path to the binary, an explicit `--permission-mode`, `< nul` on Windows or `< /dev/null` on POSIX so it never waits on stdin, and `--output-format json`. `run/<routine-id>.cmd.example` is that line written out, one per routine. Shape B | `expected`. The chain from Task Scheduler to a running Claude Code is confirmed; a full routine completing under it is not yet |
| **OpenClaw** | The automation holds the invocation: its message is the Shape B prompt, so there is no separate headless command to write. For a run by hand, use its own headless flag from its help output | `expected` |
| **Hermes** | The cron job's prompt is the Shape B prompt. For a run by hand, use its own headless flag from its help output | `expected` |
| **OpenCode** | `opencode run "<prompt>"` is its non interactive form. Confirm it against `opencode --help` on your version. Shape B | `expected` |
| **Grok Bot** | The recurring task's run prompt is the Shape B prompt. It runs on its own cloud computer, not on this machine | `expected` |
| **Codex** | The app's automation holds the invocation: its prompt is the Shape B prompt with the kit folder named as the working directory, and no separate headless line is written. `codex exec "<prompt>"` is the by hand form, and it runs only where the CLI is signed in, which the app's own sign in does not imply. Shape B | `confirmed` for the automation route; `codex exec` stays `expected` |
| **Antigravity** | `agy -p "<prompt>"`. The print flag is read off the CLI's own help text. That a routine then runs correctly through it is not verified | `expected` |
| **Pi** | `pi -p "<prompt>"`. Confirm the print flag against `pi --help` on your version. Shape B | `expected` |
| **Cline** | `cline schedule create "<prompt>" --cron "<cron>"` holds the invocation. For a run by hand, confirm the headless form against `cline --help`. Shape B | `expected` |
| **Qwen Code** | `qwen -p "<prompt>"`. Confirm the print flag against `qwen --help` on your version. Shape B | `expected` |
| **DeepSeek** | `dsh` runs a local server; confirm the headless prompt form against `dsh --help` on your version. Shape B | `expected` |

Three things decide whether the line works, and all three are outside the command itself.

**The working directory.** The run has to start in `«SALES_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job. Use whichever yours has.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 06:45 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `sales-desk-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other six. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you would see is an empty brief.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file. That is the line the next reader needs and the one this table could not give them.

### 9.2b Scheduled readiness is a scheduled fire

Registration proves that the scheduler holds a job. It does not prove that the job runs, that it runs with the permission mode you set, that it starts in the kit folder, or that it can reach the connections a chat session could. All four have failed after a clean registration, and the one that hides longest is the last: a token or a secret store that unlocks for the signed in user and not for the process the scheduler starts. The observed case was an account read that worked in the session that connected it, and a scheduled routine the same evening that could not decrypt the same saved token.

So readiness is proved once, by a fire the scheduler started, and it is reported as its own fact. The install prompt registers the jobs and reports `scheduled execution: not yet verified`. The proof is a line in `runlog.jsonl` from a run nobody started by hand, at the registered time, with the status it should have, and where a routine reads through a connected route, that first scheduled read is the second mark on the route's row in `## Corrections`, next to the mark the chat session left. Two marks, two processes, and a row with only the first is not ready.

**A run by hand never counts**, however well it went. It goes through the same guard, records the same period, writes `run by hand` in `notes`, and never claims a scheduled fire happened. Installed, scheduled and proven are three words, and a report that uses one of them for all three has hidden the failure that matters most.

### 9.3 cron, on macOS or Linux

```
45 6  * * 1-5    «RUN sales-prospect-sweep»
30 7  * * 1-5    «RUN sales-desk-standup»
15 8  * * 1-5    «RUN sales-first-touch-drafts»
30 13 * * 1-5    «RUN sales-followup-sweep»
0  16 * * 5      «RUN sales-pipeline-review»
0  11 1-7 * *    «RUN sales-desk-setup»
30 11 25-31 * *  «RUN sales-qualification-refresh»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The two monthly lines are the ones people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `0 11 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

`25-31` is the last weekday line, and it is a range for the same reason. Every date in it falls inside the last seven days of the month in every month length, including February, so nothing outside the intended window can fire. The routine's `days: last-weekday` check and the monthly key reduce the burst to one run.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "sales-prospect-sweep"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 06:45 /TR "«SALES_ROOT»\run\sales-prospect-sweep.cmd"
schtasks /Create /TN "sales-desk-standup"           /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:30 /TR "«SALES_ROOT»\run\sales-desk-standup.cmd"
schtasks /Create /TN "sales-first-touch-drafts"     /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:15 /TR "«SALES_ROOT»\run\sales-first-touch-drafts.cmd"
schtasks /Create /TN "sales-followup-sweep"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 13:30 /TR "«SALES_ROOT»\run\sales-followup-sweep.cmd"
schtasks /Create /TN "sales-pipeline-review"        /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«SALES_ROOT»\run\sales-pipeline-review.cmd"
schtasks /Create /TN "sales-desk-setup"             /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 11:00 /TR "«SALES_ROOT»\run\sales-desk-setup.cmd"
schtasks /Create /TN "sales-qualification-refresh"  /SC MONTHLY /MO LAST  /D MON,TUE,WED,THU,FRI /ST 11:30 /TR "«SALES_ROOT»\run\sales-qualification-refresh.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«SALES_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «SALES_ROOT»\run\sales-desk-standup.cmd
@echo off
cd /d "«SALES_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «SALES_ROOT»/routines/sales-desk-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«SALES_ROOT»\run\sales-desk-standup.last.json"
if errorlevel 1 node "«SALES_ROOT»\scripts\runlog.mjs" --failed-run sales-desk-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«SALES_ROOT»`, and check the path.

The two monthly lines fire on the first Monday, the first Tuesday, and so on, up to five times each. The period key reduces that to one run per month. This is the same tradeoff as the cron version and it is deliberate: be generous about when, be strict about how many times.

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all seven. The window guard makes the catch up safe, and without it a laptop that was closed at 07:30 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. Between them, a duplicate or an early fire is harmless, which is exactly why neither guard is ever bypassed because a run "looks due". **In a drafting routine a duplicate fire would be a second message to a person who already has one sitting in Drafts**, so those two guards are doing more here than bookkeeping.

Set the earliest fire in your table after the time the machine is normally awake. If your machine wakes at 08:00, a 06:45 fire always arrives as a catch up. That works, and it always lands after the standup, so your brief is permanently one run behind the sweep that was supposed to feed it.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, `sales-desk-setup` writes every command it would have run into `«SALES_ROOT»/schedule-commands.txt` and names that file in its report and in the brief. Run them yourself once and you are scheduled. That is the whole recovery path.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the brief in one line, and points you at 9.2a. One string for you to fill in, in one place, beats seven jobs registered on a guess.

**It writes every command, including the ones that did register**, so the file is a complete recovery path rather than a partial one.

### 9.7 Drift

`sales-desk-setup` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. **A drift check that cannot see the schedule reports that it could not see the schedule.**

It also names any routine with no run record at all in the last fourteen days, because **a routine that hangs waiting for a permission prompt looks exactly like a routine whose job was never registered.** Section 10 is the difference.

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 06:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the seven scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows, ideally `«SALES_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is the thing that keeps that true rather than merely intended.

**A prompt can come from below the harness too.** A private network permission prompt, a browser profile chooser, or an operating system keychain dialog is a browser or system prompt rather than a harness prompt, and no auto approve setting clears it. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, so here is the direct answer.

**The prompt gate was never the guardrail.** The guardrails live in `CONTRACT.md` section 7 and the routines that read it, held unless the member releases a channel in `RELEASES.md`, and a release and the permission both have to say yes before anything goes out. Shipped, the Employee never clicks Send, never presses the send key combination, never opens a composer on LinkedIn, never replies to a thread it opened, never clicks a final Submit or Publish control, never enters a credential, and spends only where you released it. There is no code path where an approval prompt is the last thing standing between a draft and a stranger's inbox. Turning off the prompt removes a question about opening a tab and writing a file. **It does not add a capability.**

What actually holds the line is in the routines and it is checked at the end of every single run: nothing sent, nothing posted, nothing submitted, nothing enabled, nothing published, nothing spent, nothing in the mailbox replied to, forwarded, archived, labelled, moved, or deleted, no credential written or logged anywhere, and every claim traceable to the proof inventory. If any of those does not hold, that run is a failure regardless of what else it produced.

**And one control sits outside the machine entirely: the veto window.** Every draft this kit writes lands unsent, and the brief tells you how many are waiting every single morning. You press Send. That is the last gate and it is the one that matters.

**If your harness cannot run without interactive approval, do not schedule the browser routines.** Run them by hand, when you are at the machine. `sales-desk-standup` schedules fine and you still get the brief, the pipeline, and the veto line, and `sales-pipeline-review` still produces the whole Friday scoreboard. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. **Your machine is the authority on your machine.** Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.
