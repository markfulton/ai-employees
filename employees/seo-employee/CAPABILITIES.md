# SEO/AEO Employee: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, set the field, generate the hero, append the run record. When a routine says `image.generate`, it means "produce one image from a prompt this kit wrote," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, a model name, or a vendor selector inside a routine body or a recipe body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 08:00 on a Tuesday when nobody is awake to notice.

---

## 1. How to check what your harness supports

### 1.1 The five checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth and fifth decide how much of the kit runs.

**1. Can it read and write files in `«SEO_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«SEO_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«SEO_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause switch is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

**A shell matters more in this kit than in most.** A property whose posts live in a repository on this machine is published by writing files, running that property's own build, committing, and pushing. All four of those are `shell.run`. Without a shell, only a property with a publishing surface can be published at all.

**4. Can it fetch a URL and get search results?**
`web.fetch` is what reads a sitemap, a competitor's article, and a live page a browser is not needed for. `web.search` is what pulls the result set every article and every calendar entry is aimed at. **Without a search route, `seo-calendar-refill` appends no entries at all**, on purpose, because an entry whose demand was never confirmed is a day of writing spent on a query nobody types. Confirm both, and confirm that a sandbox is not blocking outbound requests without saying so.

**5. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a browser routine that works and one that stares at a login page every week.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your own search console lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single Tuesday.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that `seo-index-sweep` and `seo-rank-review` cannot do their jobs and plan around section 7.

### 1.2 The probe

Paste this into your agent, in `«SEO_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the 26 capabilities in sections 3, 4, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, fetching one public URL, and running one search are
  all cheap.
  For the browser, confirm whether you attach to my signed in profile
  or start a clean one. Say which.
  For image generation, say what route you have and whether it needs a
  credential I would have to set. Do not generate anything.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Publish nothing. Open no account.

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

One row each. The browser column and the shell column are the two that change how much of the kit runs.

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

**OpenClaw.** An agent harness that runs local sessions. Files and shell are the part I would expect to work without ceremony, which means a repository publish should work. I could not confirm how it drives a browser, so treat every browser row as unknown until your probe says otherwise. If it accepts MCP servers, adding a browser automation server gives the kit the whole browser table in one move, and that is the route I would try first.

**Hermes.** An agent harness with a built in cron that delivers to any platform, so the scheduler is its own. Files and shell are the part to confirm first; once they hold, the file side of the kit works, and section 7 says exactly what that gets you. Browser control is the open question: run the probe in 1.2 before you rely on any browser routine.

**OpenCode.** An open source terminal coding agent. Reading files, writing files, and running commands are core to what it is for, so the whole environment table should hold and a repository publish should work end to end. It supports MCP servers, which is the route to browser control. I know of no built in scheduler, so use the operating system's, per section 9.

**Grok Bot.** Its bots already run routines on a schedule from their own cloud computer, so the scheduler is built in and the invocation is the routine file handed over as the run prompt. The thing to settle first is whether it can reach your own signed in accounts at all, because it runs somewhere else; if it cannot, section 7 says what the file side of the kit still produces.

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«SEO_ROOT»` and inside your property's repository, and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it, and a routine will report a sitemap as unreachable when the sitemap is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust `seo-index-sweep` on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your own search console is readable or not. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «SEO_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «SEO_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «SEO_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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
| Codex | Its file read. Confirm the sandbox includes `«SEO_ROOT»` and any property repository | `expected` |
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

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation in its run record. This works, and it misses a draft folder or a property file you added by hand that the map does not know about.

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

**Absent:** `runlog.append` and `copy.check` take their in agent routes instead, described in section 6. Both still happen and neither is skipped.

**But absent also means a repository property cannot be published**, because the build, the commit, and the push all run through a shell. `seo-publish-run` records `partial` with a blocker naming the capability, leaves the draft `ready`, and publishes a surface property instead if the candidate set holds one. This is the one place in this kit where a missing shell is worse than a missing browser.

---

## 4. Browser

Ten capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all ten are missing together, and the degradation is the same for every one of them.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. A missing browser never fails the day for the other seven routines, and **it never stops the morning brief**, because `seo-standup` has no browser lane at all.

**There is no eighth status for this.** Missing browser control maps onto `partial` or `failed` and nothing else. If you see a routine invent a status for it, that is a defect.

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

**The rule that never changes on any harness:** the agent never authenticates. It inherits a session or it stops. On a login wall, a checkpoint, a two factor prompt, or a captcha, it stops that phase immediately, changes nothing, enters nothing, records `blocked-login` with the surface named, and carries on with the phases that do not need it. It never retries a refused action a different way. A blocked attempt does not consume the run's quota either, because a run of five login pages is not five units of work.

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired. In `seo-publish-run` that would be a second article at a second URL, and in `seo-index-sweep` it would burn a unit of an allowance that does not come back. So the kit re-reads the page before deciding anything, on every harness. What differs is how often you meet it.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Unknown |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re-read where the page actually is before you decide what happened. A read costs one call. A second article at a second URL cannot be taken back.

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

**Tab hygiene, on every harness.** Create your own tab, reuse it for the whole phase, close it when you are done, and never touch a tab you did not open. **This kit has no exception to that**, because nothing it produces is a tab left open: every deliverable is a file on disk or a page that is already live.

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

**Two things that are true everywhere.** A deep link can return a not found page while the same destination reached by clicking through the app works fine, so a 404 on a deep link is worth one attempt through the app before it is recorded as a blocker. **In one place in this kit that is not a fallback but the only route that works at all:** a per URL inspection address in a search performance console returns nothing while the in app inspection box works, and `seo-index-sweep` carries that fact in its own body because it cost a whole run to learn. And a single overlong URL can wedge a page permanently, so one target per search.

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

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run. Click phases do not, because a click needs a reference and there is no coordinate fallback in this kit. See `element.click` for why.

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

**The rule that holds on all eight:** never act on a reference taken before the last view change. Where your read keeps the stale ones alongside the live ones, prefer the most recently assigned. Where it re-snapshots, read again and use what it gives you.

**This is the single most expensive row in this file for `seo-index-sweep`.** A search performance console keeps a detached copy of every previous inspection alongside the live one, so a search for the request control returns one reference per URL inspected so far in the session, and every one but the last is a ghost. A click on a ghost produces a silent no op rather than an error.

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

**Never trust page text straight after a navigation in a single page application.** It can return the previous view, with no error and nothing that looks wrong. Verdicts get read off a capture, not off text, whenever the answer decides something. In this kit that is every indexing verdict and every performance figure.

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

**Absent:** verify from `page.text` and record in the run record that verification was weaker on this run. For `seo-index-sweep` and `seo-rank-review` that is a real loss, because both read their verdicts off captures precisely because text can be stale.

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

**Absent:** the phase is skipped and named. **There is no coordinate fallback and that is deliberate.** A coordinate click silently does nothing when the page renders at a device pixel ratio that does not match the capture frame. Nothing errors. The run continues believing it clicked, and in the index sweep that means a run that inspects a hundred URLs and requests none of them while looking exactly like it worked.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify. A search console's inspection box swallows the first click and the first keystrokes right after a property switch, every time.

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

On LinkedIn specifically, some browser control independently refuses clicks and keystrokes. **When that happens the rule and the platform agree, and the refusal is the system working rather than a fault.**

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

**Absent:** skip the field and record it as a blocker naming the field. **With one exception that stops a publish: if the field is the slug, the publish stops and the draft stays `ready`.** A wrong slug is a wrong URL and it is not recoverable by editing later.

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs take this.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A synthetic paste carrying `text/html`, for rich text surfaces. See `richtext.paste`.
4. Insert text, where paste does nothing.
5. A real click plus keystrokes, last resort, where the platform demands a genuine input event.

**A required field you did not know existed can silently kill a submit,** and on some surfaces saving with one empty required field discards everything else, including an upload that succeeded. Fill everything you can see, then read the form back before you leave it.

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

**Absent:** fall back to `page.read` plus `field.set` plus `element.click`. If none of those is available either, skip the phase and name it. **`image.inject` loses its first route without this**, and falls back to `file.upload`.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it. Assume a ceiling in the tens of seconds rather than discovering yours in production. Where the round trip is the expensive part, chain a whole click, wait, verify cycle into one call rather than three.

**This file carries the measured figure, and `BROWSER-RECIPES.md` deliberately does not.**

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

**Absent:** fixed waits, which are slower and less reliable, and the run record says so.

Fixed waits are not a failure mode though. They are the shipped behaviour on several surfaces where a load state lies: a publishing surface's deploy lag and a console inspection that resolves in its own time are both polled rather than slept on, up to a number the routine that owns the surface carries. Those numbers are per surface and were each learned the hard way, so they live in the routine, not here.

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
| Grok Bot | Unknown | `unknown` |
| Codex | A hosted club notifier, or none | `unknown` |
| Antigravity | Unknown | `unknown` |

**Absent is not a failure and never a blocker.** The run record says `push: not available` and the run carries on. Every push in this kit is a shortcut to a line that is already in `brief-latest.md`, so a member with no notification route loses speed and never loses information. `CONTRACT.md` section 9 carries the four cases that earn one and the suppression rules that matter more than the trigger.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `search.performance.read` | Clicks, impressions and position per page and query for the scoring window | OpenSEO (a server plus skills, hosted or self hosted with your own DataForSEO key; its Search Console tools read the property you signed in with), or a read only Search Console API script with a service account added to each property. Google ships no server of its own for Search Console | `webmasters.readonly` scope | `expected` |
| `analytics.read` | Sessions and conversions per landing page | The Google Analytics MCP server (official, `pipx run analytics-mcp`), or the GA4 Data API from a script with the same service account | `analytics.readonly` by design | `expected` |
| `serp.read` | The live result set for one keyword, and what ranks | OpenSEO; the Apify connector (`https://mcp.apify.com`) running a Google search results actor; the Ahrefs or Semrush connector where the member already pays for one | Read only | `expected` |
| `keyword.research` | Volume, difficulty and ideas for the refill | OpenSEO; the Ahrefs, Semrush or DataForSEO server where the member already pays for one | Read only | `expected` |
| `index.request` | Telling an engine that a URL changed | IndexNow (a key file at the site root, then one request per batch of URLs) for every engine that honours it, and the Search Console API's sitemap submit call. Google offers no request route for an ordinary page, so its console stays the route for that, inside the allowance | A write, bounded by the allowance | `expected` |
| `cms.publish` | Publishing a ready draft to a surface property | The WordPress.com connector for a WordPress.com site; the WordPress MCP Adapter, or the REST API with an application password, for a self hosted site; the Webflow, Wix or Shopify connector; the Ghost admin API. A repository property needs no connection | The same guardrail as today: one draft per run, to the property's own route | `expected` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

---

## 5. Content

Seven capabilities. Five of them decide whether an article arrives finished or arrives as text with a note. Two are research, and one of those two decides whether the calendar refills at all.

This is also where the club dashboard's hosted tools slot in. Where a hosted tool exists for a capability, it is the preferred route, because it is the one route that behaves identically on every harness in this table. When one appears, it becomes another row in the preference order and no routine changes by one word.

### `image.generate`
Produce one hero image from a prompt this kit wrote.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club generator when available, then an image generation helper you already have | `expected` |
| OpenClaw | Hosted club generator when available, then a generation route the harness carries | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club generator when available, then a generation server you added | `unknown` |
| Grok Bot | Unknown | `unknown` |
| Codex | Hosted club generator when available, then a generation server you added | `unknown` |
| Antigravity | Hosted club generator when available, then a generation route the product carries | `unknown` |

**Absent:** no hero. The alt text is still written, one line goes in the run record, and the draft is still marked ready. **An article published on time without a hero is a success. A run that stalled on a hero is not.**

**The kit names the capability and never the generator.** Which model or service produces the image is yours to choose, and it is one row here rather than a line in a routine, so switching it costs you one edit and changes nothing else.

**Two rules the routine enforces on whatever route you give it.**

Every prompt ends with the no text constraint from `standards/PUBLISH-STANDARD.md`, verbatim, because generation routes reliably invent figures, amounts, dates, and scores and echo prompt words back as nonsense labels. **A published hero carrying an invented number is a fabricated claim shipped as an image.**

The generated file is read back and reviewed, not the route's own success message. A hero carrying numerals, invented metric names, leaked prompt words, garbled text, or a metaphor that contradicts the article is regenerated **once**, and dropped on the second failure.

**If the route needs a credential, it resolves it out of your own environment.** No routine reads one, prints one, echoes one, or writes one into a file, a prompt, a flow file, or a run record. If your route cannot resolve a credential without one being written down, that route is not usable by this kit and the honest answer is no hero.

### `image.compress`
Resize and re-encode an image below the injection ceiling while keeping it presentable.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club compressor when available, then a local image tool through `shell.run` | `confirmed` |
| OpenClaw | Hosted club compressor when available, then `shell.run` | `expected` |
| Hermes | Hosted club compressor when available, then `shell.run` if it has one | `unknown` |
| OpenCode | Hosted club compressor when available, then `shell.run` | `expected` |
| Grok Bot | Hosted club compressor when available, then `shell.run` if it has one | `unknown` |
| Codex | Hosted club compressor when available, then `shell.run` | `expected` |
| Antigravity | Hosted club compressor when available, then `shell.run` | `expected` |

**Absent:** ship without the image and say so in one line.

**The ceiling is hard and it is the part people miss.** Encoded characters run roughly 1.4 per image byte. The budget is 24,000 encoded characters, which is about a 17 KB WebP. **Over 30,000, do not proceed.** An oversized image does not fail loudly. It wedges the call, and the run that hits it loses the whole publish rather than the picture.

`seo-draft-run` records the encoded character count in `meta.json` as `hero_encoded_chars`, and `seo-publish-run` reads that number and refuses to inject anything above the ceiling. **An honest count at draft time is what makes the next day's publish safe**, which is why a routine never leaves it out to make a downstream check pass.

### `image.inject`
Put a compressed image into exactly one file input and dispatch a bubbling change event.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `page.script`, then `file.upload` | `confirmed` |
| OpenClaw | `page.script`, then `file.upload` | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The server's file chooser handling, then `page.script` | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The server's file chooser handling, then `page.script` | `expected` |
| Antigravity | `page.script`, then `file.upload` | `expected` |

**Absent:** publish without the hero and name the file path in the run record so the member can attach it in the ten seconds it takes them.

**Six routes that look obvious and were tested and failed.** Do not spend a call confirming one on a harness where it is already known dead, because that is exactly how this step burns its budget. Three of the six are dead for a reason that holds anywhere, and three are properties of one harness.

**Dead on any harness in this table.** Rendering the image and capturing it, which produces a screenshot and not a file. Navigating to a `file://` URL, which browser control commonly rewrites to `https://`. A local HTTP server plus a fetch, which triggers a private network permission prompt and **nobody is there to click Allow in a scheduled run.**

**Claude Code only.** These three were tested on the harness this kit was built on and they are the ones worth probing rather than assuming on yours:

| Route | On Claude Code | Elsewhere |
|---|---|---|
| A screenshot based upload helper | Dead. It takes an internal image id, not a disk path | Unknown. No other harness in this file is known to offer one |
| A file upload given a workspace path outside the session folder | Rejected. See `file.upload` | Expected to work on a server that takes any readable absolute path |
| Clicking the file input to drive the operating system's file dialog | Dead. Browser control cannot drive a native dialog | **Live on a browser automation server**, where handling the file chooser event is the standard route. Try it before you rule it out |

A dead route list is a record of what was tested, not a law of nature. When you test one on your own harness, write the result in `## Corrections`.

**Never emit encoded image data as text.** It moves through the route, not through the transcript. A call that looks slow is not stuck. And inject into exactly one file input: some composers wire several upload routes at once, and injecting into more than one attaches the image twice, which usually renders two heroes and sometimes renders none.

**One injection attempt, then move on.**

### `file.upload`
Hand a local file to a page's file input.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file upload, path inside the session working directory only | `confirmed` |
| OpenClaw | Its file upload, if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | The browser automation server's set input files | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | The browser automation server's set input files | `expected` |
| Antigravity | Its file upload | `expected` |

**Absent:** `image.inject`.

**Some harnesses accept only a path inside the session working directory.** Where yours rejects an absolute path, copy the file in first, upload, then delete the copy. Two extra file operations, and the step works.

| Harness | What it accepts |
|---|---|
| Claude Code | A path inside the session working directory only. A cloud synced desktop path is rejected, so the copy first route is the one that runs |
| OpenClaw | Unknown. Try the absolute path first |
| Hermes | Unknown. Try the absolute path first |
| OpenCode | The browser automation server's set input files takes any readable absolute path. No copy needed |
| Grok Bot | Unknown. Try the absolute path first |
| Codex | As OpenCode, subject to the sandbox's own view of which paths are readable |
| Antigravity | Unknown. Try the absolute path first |

The copy first route is harmless everywhere, so a routine that does not know may simply take it. `«SEO_ROOT»` lives outside OneDrive and its equivalents for its own reason, which is that a sync client corrupts state mid run, and that reason stands on every harness regardless of this row.

### `richtext.paste`
Put formatted copy into a rich text editor.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club converter when available, then a synthetic paste through `page.script` | `confirmed` |
| OpenClaw | Hosted club converter when available, then a synthetic paste | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club converter when available, then a synthetic paste through evaluate | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Hosted club converter when available, then a synthetic paste through evaluate | `expected` |
| Antigravity | Hosted club converter when available, then a synthetic paste | `expected` |

**Absent:** plain text, with the loss named in the run record.

**The route that lands, verified across several platforms.** Build a data transfer object, set `text/html` on it plus a throwaway `text/plain`, focus the editor, and dispatch a synthetic paste event carrying it. Where a synthetic paste does nothing, fall back to insert text. Where the target is a controlled component, use the native value setter plus a bubbling input event instead.

Three practical notes. **Clearing the editor needs real keystrokes**, because a DOM range selection is ignored and your paste then appends to whatever was already there: click the editor, select all, delete. **A background tab cannot write the system clipboard**, so a step that genuinely needs the clipboard needs that tab in front. And **check what survives**: lists usually do, headings and bold often do not, and paragraphs may render with no margin at all, which turns a clean article into one wall of text unless you join the blocks with an explicit spacer.

**In this kit the check is a count and not a look.** `seo-publish-run` reads the editor back and compares four counts against the source body: headings, links, list items, and bold runs. **Short links stop the publish**, because a body missing links is a body missing its authority links, which is the publishing standard's requirement.

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Your own search endpoint named in `strategy/properties.md`, then its web search | `confirmed` |
| OpenClaw | Your own search endpoint, then its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Your own search endpoint, then a search server if you added one | `expected` |
| Grok Bot | Unknown | `unknown` |
| Codex | Your own search endpoint. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Your own search endpoint, then its web search | `expected` |

**Absent:** every routine writes the exact queries it would have run into the run record so you can run them, and marks the finding `n/a (no search capability)`. **`seo-calendar-refill` goes further and appends no entries at all.** That is the one place in this kit where the degradation is to produce nothing rather than something weaker: an entry whose demand was never confirmed will be written, published, and never read.

**Batch the calls.** Search is a shared, budgeted resource on some harnesses, and a refill checks dozens of candidates in one run. One call carrying eight keywords costs a fraction of eight calls carrying one each, and both `seo-draft-run` and `seo-calendar-refill` are written to batch.

If you have your own search endpoint, name it in `strategy/properties.md` under `## Search endpoint`. Name it by its human readable name only. No key, no token, and no URL with a credential in it goes into that file or any other file in this kit.

### `web.fetch`
Read a URL's text without opening a browser.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its fetch, then `shell.run` with a fetch command, then `browser.navigate` plus `page.text` | `confirmed` |
| OpenClaw | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Hermes | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| OpenCode | Its fetch, then `shell.run` with a fetch command, then the browser | `expected` |
| Grok Bot | Unknown. `shell.run` with a fetch command if it has a shell | `unknown` |
| Codex | Its fetch or `shell.run`. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Its fetch, then the browser | `expected` |

**Absent:** mark the finding `n/a (page not reachable)`.

On a harness with no fetch of its own, `shell.run` with a fetch command is the same capability under another name, and that is what a routine gets when it asks for `web.fetch`. It comes back as raw markup rather than readable text, which costs a little context and works.

**This capability carries more of this kit than any other browser adjacent one.** It reads every declared sitemap, every competitor article, every primary source behind a statistic, and the live URL of a repository published article. **Two thirds of `seo-index-sweep` runs on it before a browser opens at all**, which is why a run that cannot reach the console still produces a candidate count, a stalled count, and an honest report of which sitemaps are declared where.

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

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop.

**Two routines stop rather than degrade in that state, and the reason is worth understanding.** `seo-publish-run` does not publish on a run that cannot record what it published, because tomorrow's run would find the draft still `ready` and publish the same article a second time at a second URL. `seo-index-sweep` does not spend the allowance on a run that cannot record what it spent it on, because next week would spend it on the same URLs. Every other routine writes what it can and stops.

The script validates the record's shape, checks `status` against the closed list of eight, checks the period key shape against the routine's own cadence, refuses anything that looks like a secret, a keyword, an article body, or personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

### `copy.check`
The scripted judge for any text about to be written into an article body, a strategy file, a calendar block, or a file the member reads.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | `shell.run` on `scripts/copy-check.mjs`, then the same rule set applied in agent | `confirmed` |
| OpenClaw | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Hermes | `shell.run` if present, then in agent | `unknown` |
| OpenCode | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Grok Bot | `shell.run` if present, then in agent | `unknown` |
| Codex | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |
| Antigravity | `shell.run` on `scripts/copy-check.mjs`, then in agent | `expected` |

**Absent the script:** the in agent route runs and the run record says `copy-check: in-agent`. **It is never skipped.** The in agent route is a degradation, not an exemption, and there is no third option where a body reaches a live page unchecked.

One interface, used verbatim at every call site:

```
node "«SEO_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `article`, `strategy`, `plain`. `--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 08:00 on a Tuesday. There is no `--profile`, no `--destination`, and no bare positional path, and the script names the real interface if you use one of those.

`CONTRACT.md` section 3.4 carries the eight rules it checks and the table of which rules apply to which destination.

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

**Absent all routes:** `seo-intake-and-map` writes the exact commands to `«SEO_ROOT»/schedule-commands.txt`, files a `verify` card naming that file, and puts the same line in `blockers[]` so it reaches the brief by two routes. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. The scheduler is a starter motor, not a controller.

---

## 7. What you lose with no browser at all

The honest headline first.

**The morning brief never needs a browser. Neither does the whole calendar refill, the whole draft folder, or a repository publish verified through a fetch.** On a machine with no browser control at all you still get a plan every morning, a researched draft every weekday, and an article published to a repository backed property and confirmed live.

**What you lose is measurement and discovery, and both are behind your own login.** The index sweep can union every sitemap and build its candidate set, and then it cannot open the console to spend a single request. The rank review has nothing at all to read. Left alone long enough, the calendar refill starts running blind, because the file it leans on hardest is the one the rank review writes.

There is no workaround for that pair and I will not invent one. If you cannot give this kit a browser carrying your own sessions, you are buying a research, drafting, and publishing engine, and you are keeping the measurement yourself.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `seo-standup` | Never uses one | Identical. Full function | `ok` |
| `seo-draft-run` | Reads a source that refuses a fetch | Marks those sources `n/a` and writes the draft from the ones that fetched. Most weeks that is all of them | `ok` or `partial` |
| `seo-publish-run` | Publishes a surface property, and verifies any live URL by loading it | Publishes a repository property in full and verifies through a fetch. Cannot publish a surface property at all | `ok` for repository, `partial` for surface |
| `seo-index-sweep` | Requests indexing and keeps sitemaps fresh | Unions the sitemaps, builds the candidate set, records the counts, and stops there | `partial` |
| `seo-calendar-refill` | Reads a competitor page that refuses a fetch | Takes the next ranking page instead, every time. **A refill has never needed a browser to be good** | `ok` |
| `seo-rank-review` | The whole job | Nothing. It records the blocker, leaves last week's rolling file in place, and names the consequence for the refill and the draft run | `failed` |
| `seo-intake-and-map` | Reads a site a fetch cannot render, confirms a read screen | Both facts become `n/a` with the reason. All three strategy files still get written | `ok` or `partial` |

Five of the eight produce their main deliverable with no browser at all. That is most of the product. But do not buy this expecting the rank review to work without one, because it will not, and I would rather you know that now.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

Self repair means the same thing, and so does self reliance. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts and that flow stops matching, it reads the live page, finds the element that now carries that role, and writes the replacement into the same file. Both are a file inside `«SEO_ROOT»`. It is never a new helper installed somewhere global, and it is never a silent change: it goes in the run record as one line naming the step it repaired.

The helpers this kit would actually use if you have them:

| Helper | Fills which capability | Fallback when you do not have it |
|---|---|---|
| An image generation helper | `image.generate` | No hero. Alt text still written, the draft is still ready, one line in the run record |
| A local image tool on the path | `image.compress` | Publish without the hero and say so |
| A search endpoint you already pay for | `web.search`, first route | Whatever web search your harness has. Below that, the refill appends nothing |

**Forbidden, deliberately.** No routine may call anything that publishes to a surface other than the member's own named property, anything that belongs to a sibling Employee's territory, or anything billed per run that the member did not agree to spend. That includes social publishing helpers, mailbox helpers, and paid data endpoints.

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Seven routines, eight jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into eight.

**The job's only content is the invocation.** All the logic is in the routine.

**Register the fire time, not the window.** The window is enforced inside the routine and it is a catch up net, not a concurrency plan.

**Name every job exactly after its routine id.** All seven ids carry the `seo-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one. The examples here carry the shipped defaults so the shape is readable.

The shipped default week:

```
Every weekday
  07:15  seo-standup
  08:00  seo-draft-run
  09:15  seo-publish-run

Tuesday adds        11:00  seo-index-sweep
Wednesday adds      13:00  seo-calendar-refill
Friday adds         16:00  seo-rank-review
First weekday adds  14:30  seo-intake-and-map
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
| **Grok Bot** | Its bots run on a schedule from their own cloud computer: one recurring task per routine | `expected` |
| **Codex** | The Codex app's automations: one `kind = "cron"` automation per routine, named after the routine id, `execution_environment = "local"`, the kit folder among its working directories, and an `rrule` built from the `SCHEDULE.md` row. Each automation keeps its own memory file, which is a note to itself and never a ledger this kit reads | `confirmed` on Windows: seven routines fired on schedule under the app's automatic review mode, after the member approved the registrations in the session |
| **Antigravity** | The `agy` job runner, one job per routine, pointed at the routine folder | `expected` |
| **Pi** | None of its own. Use the operating system's scheduler below | `expected` |
| **Cline** | Built in cron: `cline schedule create "<prompt>" --cron "<cron>"`, one per routine, auto approve on | `expected` |
| **Qwen Code** | Built in scheduled tasks, one per routine, or the operating system's scheduler below | `expected` |
| **DeepSeek** | Its scheduling plugin, one run per routine | `expected` |

Three of the rows above, the Claude Code CLI, OpenCode and Pi, use the operating system's scheduler, and the rest bring their own. Either is fine. The operating system's scheduler is the more reliable of the two mechanisms on a laptop that sleeps, which is section 9.5.

Throughout, `«RUN seo-standup»` and its six siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write seven of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run seo-standup"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «SEO_ROOT»/routines/seo-standup/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «SEO_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«SEO_ROOT»`, permission mode set per task. Shape B | `confirmed` |
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

**The working directory.** The run has to start in `«SEO_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job.

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 08:00 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `seo-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other seven.

Where your harness's row above says `expected` rather than `confirmed`, and you have run a routine through it, put what you found in `## Corrections` at the bottom of this file.

### 9.2b Scheduled readiness is a scheduled fire

Registration proves that the scheduler holds a job. It does not prove that the job runs, that it runs with the permission mode you set, that it starts in the kit folder, or that it can reach the connections a chat session could. All four have failed after a clean registration, and the one that hides longest is the last: a token or a secret store that unlocks for the signed in user and not for the process the scheduler starts. The observed case was an account read that worked in the session that connected it, and a scheduled routine the same evening that could not decrypt the same saved token.

So readiness is proved once, by a fire the scheduler started, and it is reported as its own fact. The install prompt registers the jobs and reports `scheduled execution: not yet verified`. The proof is a line in `runlog.jsonl` from a run nobody started by hand, at the registered time, with the status it should have, and where a routine reads through a connected route, that first scheduled read is the second mark on the route's row in `## Corrections`, next to the mark the chat session left. Two marks, two processes, and a row with only the first is not ready.

**A run by hand never counts**, however well it went. It goes through the same guard, records the same period, writes `run by hand` in `notes`, and never claims a scheduled fire happened. Installed, scheduled and proven are three words, and a report that uses one of them for all three has hidden the failure that matters most.

### 9.3 cron, on macOS or Linux

```
15 7  * * 1-5    «RUN seo-standup»
0  8  * * 1-5    «RUN seo-draft-run»
15 9  * * 1-5    «RUN seo-publish-run»
0  11 * * 2      «RUN seo-index-sweep»
0  13 * * 3      «RUN seo-calendar-refill»
0  16 * * 5      «RUN seo-rank-review»
30 14 1-7 * *    «RUN seo-intake-and-map»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The monthly line is the one people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `30 14 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run.

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe. **On this kit that matters most for the three weekly routines**, because a missed Tuesday is a week of discovery and a missed Friday is a week of measurement that cannot be recovered later.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "seo-standup"          /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:15 /TR "«SEO_ROOT»\run\seo-standup.cmd"
schtasks /Create /TN "seo-draft-run"        /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:00 /TR "«SEO_ROOT»\run\seo-draft-run.cmd"
schtasks /Create /TN "seo-publish-run"      /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 09:15 /TR "«SEO_ROOT»\run\seo-publish-run.cmd"
schtasks /Create /TN "seo-index-sweep"      /SC WEEKLY  /D TUE                 /ST 11:00 /TR "«SEO_ROOT»\run\seo-index-sweep.cmd"
schtasks /Create /TN "seo-calendar-refill"  /SC WEEKLY  /D WED                 /ST 13:00 /TR "«SEO_ROOT»\run\seo-calendar-refill.cmd"
schtasks /Create /TN "seo-rank-review"      /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«SEO_ROOT»\run\seo-rank-review.cmd"
schtasks /Create /TN "seo-intake-and-map"   /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 14:30 /TR "«SEO_ROOT»\run\seo-intake-and-map.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«SEO_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «SEO_ROOT»\run\seo-standup.cmd
@echo off
cd /d "«SEO_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «SEO_ROOT»/routines/seo-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«SEO_ROOT»\run\seo-standup.last.json"
if errorlevel 1 node "«SEO_ROOT»\scripts\runlog.mjs" --failed-run seo-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«SEO_ROOT»`, and check the path.

The monthly line fires on the first Monday, the first Tuesday, and so on, up to five times. The period key reduces that to one run per month. This is deliberate: be generous about when, be strict about how many times.

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all eight. The window guard makes the catch up safe, and without it a laptop that was closed at 07:15 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. Between them, a duplicate or an early fire is harmless, which is exactly why neither guard is ever bypassed because a run looks due.

Set the earliest fire in your table after the time the machine is normally awake. If your machine wakes at 09:00, a 07:15 fire always arrives as a catch up. That works, and the brief is permanently one run behind.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, `seo-intake-and-map` writes every command it would have run into `«SEO_ROOT»/schedule-commands.txt` and reaches you two ways: a `verify` card the standup renders under `Waiting on you`, and the same line in its own `blockers[]`, which the standup prints verbatim. Run the commands yourself once and you are scheduled.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the card, and points you at 9.2a.

### 9.7 Drift

`seo-intake-and-map` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. A drift check that cannot see the schedule reports that it could not see the schedule.

**Four cases and what it does with each.** A routine with a row and no job gets registered, which is the common case after a machine rebuild. A routine with a job and no row files a `research` card naming the mismatch, and **the job is not removed**, because a deleted row and a live job is a decision somebody made and it cannot tell which half was intended. A job whose registered time differs from its row's `fire` is re-registered at the row's time, because the row wins. A routine with neither gets a row and then a job.

**It never sets a `days` value to `off`, never removes a row, and never removes a job.** Turning a routine off is the member's decision and one word in their own table.

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 08:00 the draft run asks to fetch a page, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the eight scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows: `«SEO_ROOT»`, plus each property repository `seo-publish-run` writes into and nothing else. Those repositories are the one place outside the working folder this kit writes at all, and the writes are bounded to the post file, the registry entry, the sitemap source, and one link in one named pillar article.

**A prompt can come from below the harness too.** The private network permission prompt described under `image.inject` is a browser prompt, not a harness prompt, and no auto approve setting clears it. That is one of the reasons that route is on the dead list rather than in the fallback chain. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, so here is the direct answer.

**The prompt gate was never the guardrail.** The guardrails live in `CONTRACT.md` section 7 and the routines that read it, held unless the member releases a channel in `RELEASES.md`, and a release and the permission both have to say yes before anything goes out. Shipped, the Employee never composes an email, never comments, never posts to a third party surface, never enters a credential, and spends only where you released it. The one publish control carries three conditions that are checked in words against the screen every single time, and turning off an approval prompt does not relax one of them.

What actually holds the line is in the routines and it is checked at the end of every single run: nothing sent, nothing emailed, nothing commented, nothing shared, nothing submitted, nothing spent, at most one article published and only to a property named in `strategy/properties.md`, no credential written or logged anywhere, and every figure traceable to something read this run. If any of those does not hold, that run is a failure regardless of what else it produced.

**If your harness cannot run without interactive approval, do not schedule `seo-index-sweep` or `seo-rank-review`.** Run those two by hand, when you are at the machine. The other five will schedule fine and you will still get the brief, the drafts, and the published articles. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.

## Answer visibility reads

`answer.visibility.read`: prefer a member-provided dated capture/export of the actual surface, or an authorized browser route to Google AI Overviews/AI Mode, ChatGPT search, Gemini or another selected answer surface. Bing Webmaster Tools AI Performance may supply its own supported citation data. Probe every route live and label its product scope. These are optional, unknown until verified. A general model API response is not a consumer search observation. No unattended browser support means file-only eligibility work plus explicitly unavailable answer samples. AEO-PLAYBOOK.md defines the fields and denominators.
