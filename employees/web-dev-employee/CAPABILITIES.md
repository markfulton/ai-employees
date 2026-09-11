# Web Dev Employee: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, probe the URL, read the commit graph, run the gate, scan for a secret. When a routine says `vcs.log`, it means "read the commit graph, read only," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, a hosting company, a registrar, or a vendor selector inside a routine body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 06:45 on a Tuesday when nobody is awake to notice.

---

## 1. How to check what your harness supports

### 1.1 The five checks that decide everything

Do these before you install anything else. The first four are pass or fail for the whole kit. The fifth decides how much of the kit runs.

**1. Can it read and write files in `«WEB_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«WEB_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«WEB_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause check is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**This one matters more here than in most kits.** A gate is a command. Version control is a command on most harnesses. A package manager is a command. Without a shell, `web-fix-runner` writes cards up instead of drafting changes and `web-dependency-run` cannot run at all. The rest of the kit still works.

**4. Can it read your repositories where they actually live?**
`«WEB_ROOT»` is not a code root and never holds one. Your projects stay where they are, and the Employee reads them there. If your harness sandboxes file access to one folder, confirm it can also reach the folders your repositories are in, read only for six routines and read plus write on a branch for two. A sandbox that quietly cannot see your code produces an inventory with nothing in it and a first run that reports finding no projects.

**5. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a platform guard that works and one that stares at a login page every Monday.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your registrar, your host, and your database lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single week.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that the browser routines are read only on public pages and plan around section 7.

### 1.2 The probe

Paste this into your agent, in `«WEB_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the capabilities in sections 3, 4, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, running node --version, and fetching one public URL
  are all cheap.
  For version control, confirm you can read a commit graph and a working
  tree status without changing either. Say how.
  For the browser, confirm whether you attach to my signed in profile
  or start a clean one. Say which.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Create no branch. Run no build. Open no account.
  Send nothing.

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

One row each. Two columns change how much of the kit runs: the shell, and the browser.

| Harness | Files and shell | Version control | Browser control | Your signed in session | Scheduler | Confidence overall |
|---|---|---|---|---|---|---|
| **Claude Code** | Built in | Through its shell | Chrome extension bridge | Yes, attaches to your Chrome | Desktop app: built in. CLI: none, use the operating system's | `confirmed` |
| **OpenClaw** | Expected, core to it | Expected, through its shell | Unconfirmed. Probe | Probe this specifically | Built in cron, `openclaw automations create` | `expected` on files, `unknown` on browser |
| **Hermes** | Expected | Probe this | Probe | Probe this specifically | Built in cron | `expected` on files, `unknown` on browser |
| **OpenCode** | Expected, core to it | Expected, through its shell | Add a browser automation server | Depends on that server's config | None of its own, use the operating system's | `expected` on files |
| **Grok Bot** | Expected, on its own cloud computer | Probe this | Its own browser, on that computer | Check first; it runs elsewhere | Built in recurring tasks | `expected` on files, `unknown` on your sessions |
| **Codex** | Expected, core to it | Expected, through its shell | Add a browser automation server | Depends on that server's config | Scheduled runs | `expected` on files |
| **Antigravity** | Expected, core to it | Expected, through its shell | Part of the product | Probe this specifically | The `agy` job runner | `expected` |
| **Pi** | Expected, core to it | Probe this | Probe | Probe this specifically | None of its own, use the operating system's | `expected` on files |
| **Cline** | Expected, core to it | Probe this | Probe | Probe this specifically | Built in cron, `cline schedule create` | `expected` on files |
| **Qwen Code** | Expected, core to it | Probe this | Probe | Probe this specifically | Built in scheduled tasks, or the operating system's | `expected` on files |
| **DeepSeek** | Expected, core to it | Probe this | Part of the product | Probe this specifically | Its scheduling plugin | `expected` on files |

The capability tables in sections 3 to 6 carry one row for each of the first seven. For Pi, Cline and Qwen Code, read the OpenCode row: a terminal agent with files and shell built in, and a browser automation server to add for the browser lane. For DeepSeek, read the Antigravity row: browser control is part of the product, and the profile it drives is the question. Whatever you find on one of those four, one line in `## Corrections` at the foot of this file is where it goes.

**Claude Code.** Anthropic's CLI. This is the harness the kit was built on and the only one I can speak about from having watched it run. It reads and writes files, runs shell commands, drives a Chrome you are already signed in to through a browser extension, and, in the Desktop app, schedules its own recurring jobs, which is where these routines belong. **Two shapes, and the difference decides how you register the schedule.** The Claude Desktop app has a local scheduler of its own, with a permission mode per task, and it is the route this kit has run on in production. The Claude Code CLI has no local scheduler: pair it with the operating system's scheduler in section 9, using the launchers in `run/`. Its scheduled tasks and its global skills are different directories, and these are scheduled tasks. The routines ship in its skill format, a `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that any harness reading markdown instructions can run them.

**OpenClaw.** An agent harness that runs local sessions. Files, shell, and therefore version control are the parts I would expect to work without ceremony. I could not confirm how it drives a browser, so treat every browser row as unknown until your probe says otherwise. If it accepts MCP servers, adding a browser automation server gives the kit the whole browser table in one move, and that is the route I would try first.

**Hermes.** An agent harness with a built in cron that delivers to any platform, so the scheduler is its own. Files and shell are the part to confirm first; once they hold, the file side of the kit works, and section 7 says exactly what that gets you. Browser control is the open question: run the probe in 1.2 before you rely on any browser routine.

**OpenCode.** An open source terminal coding agent. Reading files, writing files, and running commands are core to what it is for, so the whole environment table and the whole version control table should hold. It supports MCP servers, which is the route to browser control: add a browser automation server and the browser table becomes available under different names. I know of no built in scheduler, so use the operating system's, per section 9.

**Grok Bot.** Its bots already run routines on a schedule from their own cloud computer, so the scheduler is built in and the invocation is the routine file handed over as the run prompt. The thing to settle first is whether it can reach your own signed in accounts at all, because it runs somewhere else; if it cannot, section 7 says what the file side of the kit still produces.

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«WEB_ROOT»`, confirm it can read the folders your repositories live in, and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `http.probe` without announcing it, and the sweep will report your site as unreachable when your site is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files, shell, and version control are core, and browser control is part of the product rather than an add on. The question to settle before you trust a browser routine on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your registrar and host screens are readable or not. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «WEB_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «WEB_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «WEB_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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

### `file.read`
Read a file as text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file read, or a shell command | `confirmed` |
| OpenClaw | Its file read, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file read, or a shell command | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Its file read. Confirm the sandbox includes `«WEB_ROOT»` **and your code roots** | `expected` |
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
| Codex | Its file write. Confirm the sandbox allows writes, not just reads | `expected` |
| Grok Bot | Unknown | `unknown` |
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

**Absent:** `web-inventory-refresh` cannot discover a project and records `failed`. The other seven enumerate from the known paths in the contract's file map and note the degradation.

**The discovery walk is capped and it is capped for your sake.** It never walks a whole drive and it never walks a synced folder looking for repositories. The depth and the file count it used are both stated in the session report, and any project it left out by the cap is named there by name.

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

**Absent:** `runlog.append`, `copy.check`, and `secret.scan` take their in agent routes, described in section 6. `web-fix-runner` writes every card up instead of drafting a change, because a gate is a command and **it never pushes a branch whose gate did not run.** `web-dependency-run` records `failed`, because its whole file side is shell shaped and pretending otherwise would produce a run that reports nothing and looks fine.

---

## 4. Browser

Eleven capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all eleven are missing together, and the degradation is the same for every one of them.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. **A missing browser never fails the day for the other routines, and it never stops the morning brief.** Section 7 has the routine by routine detail.

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

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the platform named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either, because a run of five login pages is not five units of work.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired. On the provider screens this kit reads, that is the most dangerous move available, because those screens are where the member's money and their infrastructure live. So the kit re-reads the page before deciding anything, on every harness. What differs is how often you meet it.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re-read where the page actually is before you decide what happened. A read costs one call. A control pressed twice inside a provider account cannot be taken back.

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

**Tab hygiene, on every harness.** Create your own tab, reuse it for the phase, close it when you are done, and never touch a tab you did not open. The one exception in this kit is a console form filled and left open on a `platform` card: that tab stays open and the run record names which card it holds.

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

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run, which on this Employee is nearly everything. Click phases do not, because a click needs a reference and there is no coordinate fallback in this kit.

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

**Never trust page text straight after a navigation in a single page application.** It can return the previous view, with no error and nothing that looks wrong. Every provider console this kit reads is one. Verdicts get read off a capture, not off text, whenever the answer decides something, and where text has to be used, prove first that you are on the new view by finding a string that belongs only to it.

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

**Two things worth carrying wherever this runs.** A capture of a small region focuses the tab exactly as well as a full screen capture and costs a fraction as much, which matters because focus is what makes a synthetic keystroke land. And never make a capture the last action in a batch: if the batch times out, every image it already captured is discarded with it.

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

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked. On a provider screen the same miss can land on a control next to the one you meant, and several of those controls rotate a key or start a redeploy. A skipped phase you can see beats a click that quietly went somewhere else.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify. And a few controls need a genuine user gesture rather than a synthetic one, so a click that reports success while nothing changed is usually this.

**Some browser control refuses an action rather than performing it, and where that lives differs.** A refusal is not a transient error and is never retried a different way, which is `retry` class 2 in `recipes/BROWSER-RECIPES.md`. What you need to know is which layer on your harness can produce one.

| Harness | Where a refusal can come from |
|---|---|
| Claude Code | Its own safety classifier sits between the agent and the page and can decline an action outright, on top of the harness permission layer |
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

**Absent:** skip the field and record it as a blocker naming the field. A form with one field missing is left open with the rest filled and the gap named, because you are the one submitting it and you can finish the field in three seconds.

**One routine in this kit types into a form and it is `web-fix-runner` on a `platform` card.** Everywhere else, the only typing any routine does on any screen is a search box, a filter box, or a date range on a log view. If you see `field.set` reached for anywhere else, that is a defect.

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs take this. Typing into dialogs is unreliable and setting the field lands.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A real click plus keystrokes, last resort, where the platform demands a genuine input event.

**A required field you did not know existed can silently kill a submit,** and on some sites submitting with one empty required field discards everything else on the form. Fill everything you can see, then read the form back before you leave it.

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

**Absent:** fall back to `page.read` plus `element.click`. If none of those is available either, skip the phase and name it. In this kit the one thing that genuinely needs it is reading the navigation timing a page exposes, which is the second route for `perf.sample`.

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

If yours is not in that table, measure it once with a deliberately slow script and put the number in `## Corrections` at the bottom of this file. That is one measurement that saves a phase every time a page is slow.

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

### `console.read`
Read the messages a page emitted while it loaded.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its console message read | `confirmed` |
| OpenClaw | Its console read, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's console message listener | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's console message listener | `expected` |
| Antigravity | Its console read | `expected` |

**Absent:** `console_errors: null` with `"console not read"` in the check's reason. **Never zero for a count you did not take.** Zero is a measurement and `null` is an absence, and the weekly report scores them differently on purpose.

**Count errors only.** A warning is not an error and it never becomes one, however loud it looks, because a member whose console warning count is in a ledger will chase it forever and it will never mean anything.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `vcs.remote.read` | Merged pull requests, workflow runs and failed job logs, dependency alerts | The `gh` command line tool, signed in once (`gh auth status`; a token in the environment for a scheduled run); the GitHub MCP server's read only URL (`https://api.githubcopilot.com/mcp/readonly`) where the harness has no shell | The `/readonly` URL; the command line route lists read commands only | `expected` |
| `host.read` | Deployments, build logs, runtime logs and grouped errors since the cursor, web analytics | The Vercel connector (`https://mcp.vercel.com`) or the Vercel command line tool with a token; the Netlify, Railway, Render or Cloudflare observability connector for those hosts | Vercel has no read only form and carries deploy and purchase tools; this kit never calls one | `expected` |
| `db.read` | Tables, migrations, advisors and logs of the hosted database | The Supabase connector with `?read_only=true&project_ref=<ref>&features=database,debugging,development,docs`; Neon with `?readonly=true`; PlanetScale's insights only server | Enforced at the database role | `expected` |
| `errors.read` | Grouped production errors with stack traces | The Sentry connector (`https://mcp.sentry.dev/mcp/<org>/<project>?skills=inspect`); the PostHog connector; Better Stack | `skills=inspect` | `expected` |
| `browser.headless` | The render, the console and one performance sample of a path, without the member's profile | Chrome DevTools MCP (`npx -y chrome-devtools-mcp@latest --headless --isolated`), or Playwright MCP | A throwaway profile, never the signed in one | `expected` |
| `registrar.read` | Expiry, auto renew and nameservers per domain | A read only script against the registrar's own API: Porkbun v3, Cloudflare Registrar registrations, Vercel domains, Dynadot. No registrar ships a server | Read endpoints only | `expected` |
| `advisories.read` | Known vulnerabilities and the changelog behind a bump | `npm audit --json`, the OSV batch query, GitHub advisories through `gh api`; the Context7 connector for current documentation | Read only | `expected` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

---

## 5. The Employee's own surfaces

Seven capabilities, and they are what make this Employee what it is. Every one of them is read only about somebody else's running system, except the four version control routes that operate on a branch this Employee created.

### `http.probe`
Fetch one URL and read back the status code, the response time, and the final URL after any redirect.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its fetch, then `shell.run` with a fetch command | `confirmed` |
| OpenClaw | Its fetch, then `shell.run` with a fetch command | `expected` |
| Hermes | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| OpenCode | Its fetch, then `shell.run` with a fetch command | `expected` |
| Grok Bot | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| Codex | Its fetch or `shell.run`. **Confirm the sandbox allows outbound requests**, or every path reports unreachable while your site is fine | `expected` |
| Antigravity | Its fetch, then `shell.run` | `expected` |

**Absent:** `n/a (no http.probe route)` on the check, and the render in the browser phase answers for the status instead.

**This is the capability that keeps the sweep alive on a machine with no browser.** It answers the question the member actually cares about at 07:15, which is whether the site is up, and it needs no browser at all. It is also cheaper than a render, so it runs first on every declared path and the render only ever runs on the one tracked path.

**Read the final URL, not only the status.** A path that answers 200 after redirecting to a hostname the inventory does not declare is not the same observation as a path that answers 200 directly, and a lapsed certificate or a lapsed domain often shows up there first.

### `perf.sample`
Take one performance sample on one path.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | A hosted club sampler when available, then `page.script` reading the navigation timing the page exposes, then the response time `http.probe` already measured | `confirmed` for the last two |
| OpenClaw | Hosted sampler when available, then `page.script`, then the probe time | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted sampler when available, then the server's evaluate, then the probe time | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Hosted sampler when available, then the server's evaluate, then the probe time | `expected` |
| Antigravity | Hosted sampler when available, then its script evaluation, then the probe time | `expected` |

**Absent entirely:** the check records `n/a`, and the weekly report says so under `## Not measured` rather than reporting a clean week.

**Whichever route answered is written into the check line, by name.** A byte arriving is not a page rendering, and a member comparing this week against last week deserves to know which of the two they are looking at. **One sample per project per run, on the single path the project's budget names.** Sampling six paths produces six numbers nobody compares and eats the budget the log read needed.

### `secret.scan`
Decide whether a string carries a credential, and report the class and the location only, never the matched text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/secret-scan.mjs` if you put one there, then `shell.run` on `scripts/copy-check.mjs --secrets-only`, then the same rule set applied in the agent | `confirmed` for the second and third |
| OpenClaw | The same three, in the same order | `expected` |
| Hermes | `shell.run` if present, then the rule set in the agent | `unknown` |
| OpenCode | The same three, in the same order | `expected` |
| Grok Bot | `shell.run` if present, then the rule set in the agent | `unknown` |
| Codex | The same three, in the same order | `expected` |
| Antigravity | The same three, in the same order | `expected` |

**Nothing ships `scripts/secret-scan.mjs` and its absence is the normal case.** It is named first so that a member who already has a scanner they trust can drop it in and every routine picks it up. The route that actually runs on a fresh install is the second one, and `scripts/copy-check.mjs --secrets-only` refuses the same classes.

The exact call:

```
node "«WEB_ROOT»/scripts/copy-check.mjs" --file <path> --secrets-only [--json]
```

It runs the secret rule and nothing else, which is the whole point: a raw production log line carries dashes, unsourced counts, and bare dotted tokens, and judging it as prose would fail every line for reasons that have nothing to do with safety.

**Absent all three routes:** `web-site-sweep` skips the log read entirely, records `partial` with the blocker naming it, and says so in the digest. **Reading a production log with no scanner in front of you is how a token ends up in a ledger that gets pasted into a support thread.** `web-fix-runner` and `web-dependency-run` commit nothing and push nothing, and write the card up instead.

**What passes through it, without exception:** every log excerpt line, every build failure reason, every advisor detail, every package manager output line, every gate's first failing line, and every diff before it is committed.

### `vcs.status`, `vcs.log`, `vcs.branch`, `vcs.diff`, `vcs.commit`, `vcs.push`
Read the working tree, read the commit graph, create a branch, read the change, commit it, push it.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on the version control command line | `confirmed` |
| OpenClaw | Its own version control route if it has one, then `shell.run` | `expected` |
| Hermes | Unknown. `shell.run` if it has a shell | `unknown` |
| OpenCode | Its own route if it has one, then `shell.run` | `expected` |
| Grok Bot | Unknown. `shell.run` if it has a shell | `unknown` |
| Codex | Its own route if it has one, then `shell.run` inside the sandbox | `expected` |
| Antigravity | Its own route if it has one, then `shell.run` | `expected` |

**Absent, any one of them:** `web-fix-runner` and `web-dependency-run` classify and write up rather than drafting, record `partial`, and name the missing capability. **Neither ever commits or pushes without all of them**, because a change you cannot read back is a change you are guessing about and a change you cannot commit is a working tree you dirtied for nothing.

**`vcs.log` absent has one more consequence and it is the expensive one.** `web-standup` cannot resolve a merge, so every drafted change stays unresolved and marked `n/a (no version control capability)`, and it records `partial`. **It never guesses a merge from a dashboard, a deployment record, a card note, or a change brief existing on disk.** A dashboard shows what it chooses to show: a filtered list, a default branch that is not the production branch, a deployment that succeeded from a branch nobody merged. The commit graph is the record. It is local, it is cheap, and it cannot be styled into saying something else.

**Three rules govern every one of these routes on every harness.**

**Read only, except on a branch this Employee created.** `vcs.status`, `vcs.log`, `vcs.branch`, and `vcs.diff` never merge, never rebase, never check out over somebody's work, never reset, never force anything, never stash, and never delete a branch. The read only refresh that `vcs.log` uses fetches and does nothing else.

**`--force` and every variant of it are never used, on any branch, for any reason.** Not to tidy a history, not to fix a message, not on a branch only this Employee has touched. A rejected push means somebody else touched that branch: stop, change nothing, record the blocker naming the branch.

**Never touch a working tree that is not clean, and never change a checked out branch.** A repository with uncommitted changes is a member mid work. Change nothing, do not stash, name it, move to the next project.

### `build.run` and `test.run`
Run the project's own build command and its own test command, and read the exit status and the wall clock duration.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` | `confirmed` |
| OpenClaw | `shell.run` | `expected` |
| Hermes | Unknown. `shell.run` if it has a shell | `unknown` |
| OpenCode | `shell.run` | `expected` |
| Grok Bot | Unknown. `shell.run` if it has a shell | `unknown` |
| Codex | `shell.run` inside the sandbox | `expected` |
| Antigravity | `shell.run` | `expected` |

**Absent:** no gate, so nothing is committed and nothing is pushed. The card is written up with the proposed diff instead.

**The commands come from `inventory/projects.json` and from nowhere else.** Never a command an agent composed, never a shortened variant, and never a faster subset. A gate you invented proves something about a command you made up.

**Where the inventory names no test command, that is not a pass.** The result is `n/a (no test command in inventory)`, it appears in the change brief in those words, and a `research` card is filed. A project with no test command is a project where every change is riskier, and the member should read that in the brief rather than have it hidden behind a green build.

**A gate is the long pole in any run that has one**, so a routine reads the last recorded duration for that project first and does not start a gate that will not fit in the budget it has left. A gate killed halfway produces no verdict, and a change pushed without a verdict is the one thing this Employee exists not to produce.

**Nothing here applies a migration, to any environment, including a local one.** The migration file is written onto the branch with the exact command, the exact target environment, the order it depends on, and an honest rollback line. The member applies it.

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

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. A run with no record is a run that gets repeated, and on this Employee a repeated run is the one that opens a second branch for the same card.

The script validates the record's shape, checks `status` against the closed list, refuses anything that looks like a secret, a draft, or personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

**Hand the script a file path, never a bare quoted JSON object.** A common shell on Windows strips the double quotes out of a native command's arguments on the way through, so the object arrives unquoted and unparseable and the run appears to have no record at all. Every routine writes `state/run-record.tmp.json` and passes that path.

```
node "«WEB_ROOT»/scripts/runlog.mjs" --file "«WEB_ROOT»/state/run-record.tmp.json"
```

`--stdin` is the equivalent where a pipe is easier. `--selftest` takes no other flag and confirms the script runs.

### `copy.check`
The scripted judge for any text about to be written into a brief, a report, a change brief, a policy file, or a dashboard partial.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` if present, then in agent | `unknown` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where a file goes out unchecked.

One interface, used verbatim at every call site:

```
node "«WEB_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `plain`, `brief`, `report`, `change`, `policy`, `dashboard`. **Every routine in this kit calls `--dest plain`**, which is the strictest profile and the right default. The others exist so you can loosen one surface without loosening all of them. There is no `--profile`, no `--destination`, no `--root`, and no bare positional path. `--selftest` takes no other flag and is worth running once on install so you find out on day one rather than at 08:10 on a Tuesday.

**The rule that shapes everything this kit writes is rule 2.** A number fails unless the line it sits on names the file it was counted in or the screen it was read off. That is not a hurdle: it is the sentence you wanted anyway. `health/incidents.jsonl, 4 new errors on acme-site today` says where to look, and `4 new errors on your site` is a claim nothing in the file supports. Where the number is an elapsed span, the date is shorter and truer: `open since 2026-02-24` beats `open 9 days`, which is also wrong the moment you read the file on a different day.

**This script reads no other file.** There is no vocabulary file to fall out of date and no inventory of approved numbers to keep, so it behaves identically on a fresh install and on a kit that has been running for a year.

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

**Absent all routes:** write the exact commands to `«WEB_ROOT»/schedule-commands.txt` and name that file in the brief. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. The scheduler is a starter motor, not a controller.

---

## 7. What you lose with no browser at all

The honest headline first.

**The morning brief never needs a browser. Neither does the fix runner, the guardrail review, or most of the weekly report. And the sweep still tells you whether your sites are up.** On a machine with no browser control at all you still get a plan every morning, a reviewable change most weekdays, a health check on every declared path, and a verdict every Friday.

**What you lose is everything behind your own login.** The production logs, the registrar, the host, and the hosted database all sit there. So the sweep sees that a page returned 502 and cannot see the error that caused it, and the platform guard cannot read a single provider screen.

**One thing survives that and it is the one with a deadline.** The platform guard computes the expiry ladder entirely from the dates already in the inventory, so a browserless week still warns you that a domain lapses on a stated date. That is why it records `partial` and never `failed`.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `web-site-sweep` | Probes every path, renders the tracked path, reads the console, reads the production logs, fingerprints every error | Probes every path. No render, no console, no build identifier, and **no log read at all** | `partial` |
| `web-standup` | Never uses one | Identical. Full function | `ok` |
| `web-fix-runner` | Works every card type including a `platform` card with a console form | Works `fix`, `deps`, `verify`, and `research` cards, which is nearly all of them. Leaves a console form card blocked and named | `ok` or `partial` |
| `web-platform-guard` | Reads the registrar, the host, and the hosted database, and names every drift | The expiry ladder off the inventory dates, every other finding carried forward untouched | `partial` |
| `web-inventory-refresh` | Walks the code roots and binds every project to its host, its database, and its domains | Walks the code roots and writes the whole local side. Every provider field is null and fills in next month | `partial` |
| `web-dependency-run` | Classifies, bumps the patch class on a branch, reads a changelog the package manager could not give it | The same, minus the changelog reads. **An unread changelog is class three**, so those packages are held rather than bumped | `partial` |
| `web-weekly-report` | Full report plus the Friday flow replay | Full report. No replay, so a drifted flow goes unnoticed until a routine hits it | `partial` |
| `web-guardrail-review` | Never uses one | Identical. Full function | `ok` |

Two of the eight need no browser at all and four more produce their main deliverable without one. But do not buy this expecting error triage to work without one, because the logs are behind your login and it will not.

A missing browser does not get its own status, and no routine invents one. It maps onto `partial` when the routine had file work to do and `failed` when it did not, with the reason written out in plain words either way.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

Self repair means the same thing. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts, it reads the live page and writes the replacement into the same file. Both are a file inside `«WEB_ROOT»`. It is never a new helper installed somewhere global, and it is never a silent change: it goes in the run record as one line naming the flow or the step.

**Two helper shaped things are forbidden outright rather than optional**, because they would cross a stop rather than save time. No routine may call anything that deploys, publishes, or provisions, and no routine may call anything billed per run that you did not agree to spend. That covers deployment helpers, infrastructure provisioning helpers, and paid data or media endpoints. **Setting this Employee up, and running it, must not cost you money.**

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Eight routines, eight jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into eight.

**The job's only content is the invocation.** All the logic is in the routine. If your scheduler grows a shell script with business rules in it, the rules now live in two places and they will disagree, and you will find out which one is wrong on the day it matters.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan. Overlapping windows are deliberate. Overlapping fire times are not.

**Name every job exactly after its routine id.** All eight ids carry the `web-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one.

The shipped default week:

```
Every weekday
  06:45  web-site-sweep
  07:30  web-standup
  08:10  web-fix-runner

Monday adds         10:30  web-platform-guard
First weekday adds  11:45  web-inventory-refresh
Wednesday adds      13:30  web-dependency-run
Friday adds         15:30  web-weekly-report
Last weekday adds   16:45  web-guardrail-review
```

No two share a fire minute, including the ones that never touch a browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.

**One gap is load bearing.** `web-guardrail-review` must fire after `web-weekly-report`'s full budget has elapsed on a month whose last weekday is a Friday, so it reads that week's report rather than racing it. Keep it after any edit.

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

Throughout, `«RUN web-site-sweep»` and its seven siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write eight of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run web-site-sweep"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «WEB_ROOT»/routines/web-site-sweep/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «WEB_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«WEB_ROOT»`, permission mode set per task. Shape B | `confirmed` |
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

**The working directory.** The run has to start in `«WEB_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job. Use whichever yours has.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 06:45 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `web-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other seven. Eight jobs registered on an invocation nobody has run is eight silent failures on the same morning, and the first thing you would see is an empty brief.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file. That is the line the next reader needs and the one this table could not give them.

### 9.3 cron, on macOS or Linux

```
45 6  * * 1-5    «RUN web-site-sweep»
30 7  * * 1-5    «RUN web-standup»
10 8  * * 1-5    «RUN web-fix-runner»
30 10 * * 1      «RUN web-platform-guard»
45 11 1-7 * *    «RUN web-inventory-refresh»
30 13 * * 3      «RUN web-dependency-run»
30 15 * * 5      «RUN web-weekly-report»
45 16 25-31 * *  «RUN web-guardrail-review»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The two monthly lines are the ones people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `45 11 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

`25-31` is the last weekday line, and it is a range for the same reason. Every date in it falls inside the last seven days of the month in every month length, including February, so nothing outside the intended window can fire. The routine's `days: last-weekday` check and the monthly key reduce the burst to one run.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "web-site-sweep"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 06:45 /TR "«WEB_ROOT»\run\web-site-sweep.cmd"
schtasks /Create /TN "web-standup"            /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:30 /TR "«WEB_ROOT»\run\web-standup.cmd"
schtasks /Create /TN "web-fix-runner"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:10 /TR "«WEB_ROOT»\run\web-fix-runner.cmd"
schtasks /Create /TN "web-platform-guard"     /SC WEEKLY  /D MON                 /ST 10:30 /TR "«WEB_ROOT»\run\web-platform-guard.cmd"
schtasks /Create /TN "web-inventory-refresh"  /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 11:45 /TR "«WEB_ROOT»\run\web-inventory-refresh.cmd"
schtasks /Create /TN "web-dependency-run"     /SC WEEKLY  /D WED                 /ST 13:30 /TR "«WEB_ROOT»\run\web-dependency-run.cmd"
schtasks /Create /TN "web-weekly-report"      /SC WEEKLY  /D FRI                 /ST 15:30 /TR "«WEB_ROOT»\run\web-weekly-report.cmd"
schtasks /Create /TN "web-guardrail-review"   /SC MONTHLY /MO LAST  /D MON,TUE,WED,THU,FRI /ST 16:45 /TR "«WEB_ROOT»\run\web-guardrail-review.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«WEB_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «WEB_ROOT»\run\web-standup.cmd
@echo off
cd /d "«WEB_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «WEB_ROOT»/routines/web-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«WEB_ROOT»\run\web-standup.last.json"
if errorlevel 1 node "«WEB_ROOT»\scripts\runlog.mjs" --failed-run web-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«WEB_ROOT»`, and check the path.

The two monthly lines fire on the first Monday, the first Tuesday, and so on, up to five times each. The period key reduces that to one run per month. This is the same tradeoff as the cron version and it is deliberate: be generous about when, be strict about how many times.

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all eight. The window guard makes the catch up safe, and without it a laptop that was closed at 07:30 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. Between them, a duplicate or an early fire is harmless, which is exactly why neither guard is ever bypassed because a run "looks due".

Set the earliest fire in your table after the time the machine is normally awake. If your machine wakes at 08:00, a 06:45 fire always arrives as a catch up. That works, and it always lands after the standup, so your brief is permanently one run behind and it is built on yesterday's sweep.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, the routine writes every command it would have run into `«WEB_ROOT»/schedule-commands.txt` and names that file in the brief. Run them yourself once and you are scheduled. That is the whole recovery path.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the brief in one line, and points you at 9.2a. One string for you to fill in, in one place, beats eight jobs registered on a guess.

### 9.7 Drift

`web-inventory-refresh` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. A drift check that cannot see the schedule reports that it could not see the schedule.

**A job registered under a name that does not match a routine id is named as a blocker and never renamed for you**, because renaming a scheduled job is a change to your machine outside `«WEB_ROOT»`.

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 06:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the eight scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows: `«WEB_ROOT»` plus the code roots your projects live in, and nothing else. These routines have no business writing anywhere else, and a scoped grant is the thing that keeps that true rather than merely intended.

**A prompt can come from below the harness too.** A browser permission prompt is not a harness prompt and no auto approve setting clears it. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, so here is the direct answer.

**The prompt gate was never what stopped this kit from merging, deploying, or spending.** Those stops live inside the routines. The Employee never composes a merge, never presses a deploy control, never enters a credential, never buys anything, and never rotates a key. There is no code path where an approval prompt is the last thing standing between a branch and your production site. Turning off the prompt removes a question about opening a tab and writing a file. It does not add a capability.

What actually holds the line is in the routines and it is checked at the end of every single run: nothing merged into a production branch, nothing deployed, promoted, redeployed, or restored, no migration applied to any environment, nothing purchased or provisioned, nothing created or saved in any provider account, no key rotated, no credential written or logged anywhere, and every number traceable to the file it was counted in. If any of those does not hold, that run is a failure regardless of what else it produced.

**If your harness cannot run without interactive approval, do not schedule the browser routines.** Run them by hand, when you are at the machine. The file routines will schedule fine and you will still get the brief, the changes, the health checks, and the Friday report. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.
