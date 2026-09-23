# Social Media Employee: capabilities

This is the only file in the kit that maps a capability to a concrete route on a concrete harness.

Routines never name a tool. They name a capability, and they name it in plain words: read the page, set the field, hand this post to the channel, append the run record. When a routine says `page.read`, it means "read this page as a structure I can click into," and it is this file's job to say what that is called on the harness you actually run.

That split is what makes the kit portable. It also means one thing for you as the owner of it: **if you ever find a tool name, an extension name, or a vendor selector inside a routine body or a recipe body, that is a defect in the routine, not a feature.** The fix is to put the capability name in the routine and the route in this file. You do not have to do that by hand. Tell your agent, and it does it.

**Who writes this file.** You do. No routine rewrites it. Every routine reads it at the top of every run, along with the `## Corrections` section at the bottom, which is where you write anything this file got wrong about your machine. A correction there outranks the tables above it.

**What this file will not do.** It will not tell you a harness supports something I could not confirm. There are eleven harnesses in section 2 and section 9, seven of them route by route in the capability tables, and I have run this kit on one of them. Everything else is marked for what it is. A row that says `unknown` is worth more to you than a row that says yes and is wrong at 05:45 on a Tuesday when nobody is awake to notice.

---

## 1. How to check what your harness supports

### 1.1 The five checks that decide everything

Do these before you install anything else. The first three are pass or fail for the whole kit. The fourth decides how much of the kit runs. The fifth decides whether anything ever goes out.

**1. Can it read and write files in `«SOC_ROOT»`?**
Ask it to write a file called `state/probe.txt` and read it back. If your harness sandboxes file access, `«SOC_ROOT»` has to be inside the allowed set, and a sandbox usually fails quietly rather than loudly. Also confirm `«SOC_ROOT»` is a local path that is not inside OneDrive, Dropbox, Google Drive, or iCloud. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened.

**2. Can it read the machine clock and the timezone id?**
Ask it for the current local time and the timezone id, then check both against your own clock. Every routine's first act after the pause check is a window check, and a routine that cannot read a clock records `failed` and stops. It will never assume a timezone and it will never trust one remembered from a previous run, because you might have moved.

**3. Can it run a local command?**
Ask it to run `node --version`. You need Node 18 or newer for the two scripts inside the kit, `scripts/runlog.mjs` and `scripts/copy-check.mjs`. Both are dependency free. There is no install step and no package file.

`shell.run` earns one more mention here than it does in most kits, because one source of material depends on it entirely: the `own-work` kind in `plan/sources.md` is the member's own repositories, build logs, and release notes on disk, and it is read with a local command and nothing else. Without a shell, the material is what you published rather than what you did, and the drafts are one step further from the work.

**4. Can it drive a browser that carries your own logged in sessions?**
This is the one people get wrong, and it is the difference between a listening routine that works and one that stares at a login page every morning.

The kit never logs in. It never creates an account, never types a password, never completes a captcha. It inherits a browser you are already signed in to. So a harness that launches a clean automated browser for you has given you a browser with no session, and every read of your own feeds, notifications, and analytics lands on a sign in wall. The routine will do the correct thing, which is to record `blocked-login`, change nothing, and tell you. It will do that every single day.

Ask your harness this exact question: **does your browser control attach to the browser profile I am already signed in to, or does it start a fresh one?** If the answer is fresh, either point it at your profile, or accept that the browser routines are read only on public pages and plan around section 7.

**5. Can it hand a post to a publishing channel you configured yourself?**
This is the check that decides whether anything ever leaves the machine, and it has no standard answer on any harness.

`channel.schedule` and `channel.publish` are the kit's names for one narrow action: give one post's body, its destination, its posting time, and any artwork to a publishing channel **you** connected, and let that channel deliver it. The kit never drives a browser to post. It never opens a composer. It never sees the channel's credentials, which stay in your harness's own secret store.

So the probe is: **does my harness have a connected route that accepts a post, a destination, and a time?** That might be a connector or integration you added, a hosted club scheduler, or nothing at all.

**Where neither has a route, everything else in this kit still works.** You get the voice file, the plan, the calendar, the material ledger, a queue of drafted posts every day, the liveness and listening sweep on anything you posted by hand, the reply queue, the morning brief, and the Friday scorecard. `soc-publish-run` records each due slot `deferred-no-scheduler` and names both capabilities once. That is a real product, and one line in the intake report tells you which capability would turn the last step on.

### 1.2 The probe

Paste this into your agent, in `«SOC_ROOT»`, once, before you register anything.

```
Read CAPABILITIES.md in this folder.

For each of the capabilities in sections 3, 4, 5 and 6, tell me three things:
  1. can you do this right now, on this machine
  2. with what, named exactly as your harness names it
  3. if you cannot, what would I have to install or turn on

Settle these two specifically, and say which:
  For the browser, do you attach to the profile I am already signed in to,
  or do you start a clean one.
  For channel.schedule and channel.publish, do you have any connected route
  that accepts a post body, a destination, and a posting time.

Rules for your answer:
  Try the cheap ones rather than reasoning about them. Reading the clock,
  listing a folder, and fetching one public URL are all cheap.
  Where you do not know, write "unknown". Never guess and never assume
  a capability exists because it usually does.
  Change no files. Publish nothing. Open no account. Enter no credential.

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

The reason is the failure it prevents. You connect a channel on Thursday. A routine that cached Wednesday's answer keeps writing queue-only output for a month and records a blocker you already fixed. Cheap check, expensive cache.

The one durable record is the run log. A capability that was missing shows up in `blockers[]` in that run's record, verbatim, and in your morning brief the next day. If the same blocker sits there for a week, that is the file telling you something on this machine needs turning on.

---

## 2. The eleven harnesses, honestly

One row each. The browser column changes how much of the kit runs. The channel column changes whether the last step runs at all.

| Harness | Files and shell | Browser control | Your signed in session | Channel route | Scheduler | Confidence overall |
|---|---|---|---|---|---|---|
| **Claude Code** | Built in | Chrome extension bridge | Yes, attaches to your Chrome | Depends entirely on what you connected. Probe | Desktop app: built in. CLI: none, use the operating system's | `confirmed` except the channel |
| **OpenClaw** | Expected, core to it | Unconfirmed. Probe | Probe this specifically | Unknown. Probe | Built in cron, `openclaw automations create` | `expected` on files, `unknown` on browser |
| **Hermes** | Expected | Probe | Probe this specifically | Probe this | Built in cron | `expected` on files, `unknown` on browser |
| **OpenCode** | Expected, core to it | Add a browser automation server | Depends on that server's config | Unknown. Probe | None of its own, use the operating system's | `expected` on files |
| **Grok Bot** | Yes, on its own cloud computer: a Linux machine with a terminal, files and a browser, shared by every bot on your account | Its own browser, on that computer | Only what you signed in to on that computer, or a session you sync to it | A channel connected at grok.com/connectors, section 4b | Built in recurring tasks | `expected`; your sessions depend on the sync |
| **Codex** | Expected, core to it | Add a browser automation server | Depends on that server's config | Unknown. Probe | Scheduled runs | `expected` on files |
| **Antigravity** | Expected, core to it | Part of the product | Probe this specifically | Unknown. Probe | The `agy` job runner | `expected` on files |
| **Pi** | Expected, core to it | Probe | Probe this specifically | Probe this | None of its own, use the operating system's | `expected` on files |
| **Cline** | Expected, core to it | Probe | Probe this specifically | Probe this | Built in cron, `cline schedule create` | `expected` on files |
| **Qwen Code** | Expected, core to it | Probe | Probe this specifically | Probe this | Built in scheduled tasks, or the operating system's | `expected` on files |
| **DeepSeek** | Expected, core to it | Part of the product | Probe this specifically | Probe this | Its scheduling plugin | `expected` on files |

The capability tables in sections 3 to 6 carry one row for each of the first seven. For Pi, Cline and Qwen Code, read the OpenCode row: a terminal agent with files and shell built in, and a browser automation server to add for the browser lane. For DeepSeek, read the Antigravity row: browser control is part of the product, and the profile it drives is the question. Whatever you find on one of those four, one line in `## Corrections` at the foot of this file is where it goes.

**Claude Code.** Anthropic's CLI. This is the harness the kit was built on and the only one I can speak about from having watched it run. It reads and writes files, runs shell commands, searches and fetches the web, drives a Chrome you are already signed in to through a browser extension, and, in the Desktop app, schedules its own recurring jobs, which is where these routines belong. **Two shapes, and the difference decides how you register the schedule.** The Claude Desktop app has a local scheduler of its own, with a permission mode per task, and it is the route this kit has run on in production. The Claude Code CLI has no local scheduler: pair it with the operating system's scheduler in section 9, using the launchers in `run/`. Its scheduled tasks and its global skills are different directories, and these are scheduled tasks. The routines ship in its skill format, a `SKILL.md` with `name` and `description` frontmatter plus one `metadata` key that marks it internal, so a skills registry never offers a scheduled routine as an on demand skill, which is a plain enough format that any harness reading markdown instructions can run them. **The channel route is the one thing I cannot answer even here**, because it depends on which publishing channel you connected.

**OpenClaw.** An agent harness that runs local sessions. Files and shell are the part I would expect to work without ceremony. I could not confirm how it drives a browser, so treat every browser row as unknown until your probe says otherwise. If it accepts MCP servers, adding a browser automation server gives the kit the whole browser table in one move, and that is the route I would try first.

**Hermes.** An agent harness with a built in cron that delivers to any platform, so the scheduler is its own. Files and shell are the part to confirm first; once they hold, the file side of the kit works, and section 7 says exactly what that gets you. Browser control is the open question: run the probe in 1.2 before you rely on any browser routine.

**OpenCode.** An open source terminal coding agent. Reading files, writing files, and running commands are core to what it is for, so the whole environment table should hold. It supports MCP servers, which is the route to browser control: add a browser automation server and the browser table becomes available under different names. I know of no built in scheduler, so use the operating system's, per section 9.

**Grok Bot.** xAI's hosted agent, and the one harness on this list that does not run on your machine. Every bot on your account shares one persistent cloud computer: a Linux machine with a terminal, file access and a real browser, where each bot has its own screen and runs one computer-use task at a time. The kit lives on that computer, so the bot installs it there itself (`npx ai-employees hire <slug> --to ~/ai-employees/<slug>`, run in its own terminal), and the cloud sync rule does not apply. One bot per Employee, named after the role, with this kit's `AGENTS.md` pasted into the bot's Instructions field, which is the map the bot reads before every task. One recurring task per routine, the Shape B prompt from section 9.2a, the fire time from `SCHEDULE.md` in the timezone that file names. Three things follow from the shared computer. Your signed in sessions are only there if you signed in on that computer or you run a sync that keeps them there (Agent Cookie syncs a Mac's Chrome cookies to the bot over Tailscale), and every bot on the account can then use every login, so bots are not a security boundary: scope by what you sign in to, never by which bot you talk to. The browser lock in `CONTRACT.md` section 6 still matters, because two bots on one platform share one browser. And the brief is a file on a computer you never open, so `brief.deliver` in section 6 posts it into the bot's own thread. Two more routes worth knowing: Claude Code can be logged in on the bot's computer, which turns this row into the Claude Code CLI row with Grok Bot as the scheduler; and Peekaboo, installed by you on a Mac, lets the bot see and click native Mac apps over the same link. The kit names both, detects them, and installs neither. Everything in this paragraph is read from operators' published accounts of the product in August 2026 and is `expected` until you write `confirmed` into `## Corrections` with the date.

**Codex.** OpenAI's coding agent. Files and commands are core. The specific thing to check here is the sandbox: confirm it can write inside `«SOC_ROOT»` and confirm whether it can reach the network, because a sandbox that blocks outbound requests turns off `web.fetch` and `web.search` without announcing it, and a routine will report a page as unreachable when the page is fine. Browser control comes from adding a browser automation server. Codex has scheduled runs; register one per routine.

**Antigravity.** Google's agentic development environment, with a command line. Files and shell are core, and browser control is part of the product rather than an add on. The question to settle before you trust a browser routine on it is the one from 1.1: does it drive the browser profile you are signed in to, or a clean automated one. The kit never signs in, so that answer decides whether your own feeds, notifications, and analytics are readable or not. Schedule with the `agy` job runner, one job per routine, pointed at the routine folder.

**Pi.** Reads skills folders directly and runs headless with a print flag. Files and shell are core. No scheduler of its own: mirror `SCHEDULE.md` into the operating system's scheduler per section 9, with «SOC_ROOT» as the working directory. Confirm the print flag against `pi --help`, then settle the browser question with the probe in 1.2.

**Cline.** The Cline CLI ships its own cron, so each routine registers as one scheduled job with auto approve on, which section 10 asks for anyway. Files and shell are core. Check that a scheduled run starts in «SOC_ROOT», then probe the browser.

**Qwen Code.** Reads the skill format and ships scheduled tasks. Files and shell are core; confirm it can write inside «SOC_ROOT» and reach the network. Probe the browser before you rely on a browser routine.

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

**This matters more to `soc-publish-run` than to anything else in the kit.** Every scheduling decision it makes compares a slot's posting time against the wall clock, so a routine that guessed the timezone would either fire a slot hours early into the wrong part of the world's day or defer every slot forever.

### `file.read`
Read a file as text.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its file read, or a shell command | `confirmed` |
| OpenClaw | Its file read, or a shell command | `expected` |
| Hermes | Unknown | `unknown` |
| OpenCode | Its file read, or a shell command | `expected` |
| Grok Bot | Its own file access on its cloud computer, where the kit lives | `expected` |
| Codex | Its file read. Confirm the sandbox includes `«SOC_ROOT»` | `expected` |
| Antigravity | Its file read, or a shell command | `expected` |

**Absent:** the kit does not run. Nothing else in this file matters.

### `file.write`
Write a file. Anything a crash could truncate is written to a temp path and renamed over the original, then read back and re-parsed.

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

**Absent:** the routine enumerates from the known paths in the contract's file map and notes the degradation in its run record. `soc-intake-and-voice` needs it once more than the others, because it enumerates `routines/*/SKILL.md` to reconcile the schedule against the folders that actually exist.

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

**Absent:** three things change and all three are survivable. `runlog.append` and `copy.check` take their in agent routes, described in section 6, and both still happen. And the `own-work` source kind reads `n/a (no shell capability)` forever, which is the largest single degradation in this kit: the material becomes what you published rather than what you built.

---

## 4. Browser

Ten capabilities, all reached through one thing: whatever your harness uses to drive a browser. If that one thing is missing, all ten are missing together, and the degradation is the same for every one of them.

**The shared degradation.** The routine does its file only work, records `partial`, and puts `no browser control capability configured` in `blockers[]`. A routine whose entire job is in the browser records `failed` with the same blocker. A missing browser never fails the day for the other routines, and it never stops the morning brief.

**There is no separate status for a missing browser.** It maps onto `partial` or `failed` and nothing else. If you see a routine invent a status for it, that is a defect.

**Nothing in this table can publish.** Every browser capability here is used to read: a permalink, a notification list, a member's own post list, an analytics screen, a source page. The one exception is `field.set`, and its only sanctioned use is setting a search or filter field on a list the routine is about to read.

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

**Whether a reported failure means the action did not happen is a property of the transport.** On some transports a failure arrives after the action already ran, which makes a blind retry a second click on a control that already fired.

| Harness | The transport, and what it does on a failed call |
|---|---|
| Claude Code | An extension bridge. A batch can report a disconnect after every one of its actions already ran. This is a serialisation artefact of the bridge and it is common enough to plan for |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | A browser automation server over a local protocol. A failed call is expected to mean a failed action, though a timeout still leaves the action's fate unknown |
| Grok Bot | Its own computer-use lane, one task per bot at a time. A failed call's fate is unknown until the page is re-read |
| Codex | As OpenCode |
| Antigravity | Unknown |

The instruction is the same in every row and it is cheap: after any failed browser call, re-read where the page actually is before you decide what happened. A read costs one call.

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

**Tab hygiene, on every harness.** Create your own tab, reuse that one tab for the whole phase, close it on every exit path, and never touch a tab you did not open. **No routine in this kit leaves a tab open**, because there is no filled form here and nothing for you to finish by hand.

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

**Absent, but the browser works:** fall back to `page.text`. Read only phases still run. Click phases do not, because a click needs a reference and there is no coordinate fallback in this kit.

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

**The rule that holds on all seven:** never act on a reference taken before the last view change.

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

**Never trust page text straight after a navigation in a single page app.** It can return the previous view, with no error and nothing that looks wrong. Verdicts get read off a capture, not off text, whenever the answer decides something. In this kit that includes every liveness verdict and every count.

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

**A count rendered by a script can read as its placeholder in the text layer while showing a real figure on screen.** Where the two disagree, the capture wins and the run record says so. That single rule is why `soc-engagement-sweep` reads every number off a capture.

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

**That matters more in this kit than in most**, because the nearest controls to any click inside a social composer are the ones that post. A skipped phase you can see beats a click that quietly did not happen, and it beats a click that happened somewhere you did not intend by a much larger margin.

**The first click after a context switch is often swallowed.** Click, wait, click again, then verify.

**Some browser control refuses an action rather than performing it, and where that lives differs.** A refusal is not a transient error and is never retried a different way, which is `retry` class 2 in `BROWSER-RECIPES.md`.

| Harness | Where a refusal can come from |
|---|---|
| Claude Code | Its own safety classifier sits between the agent and the page and can decline an action outright, on top of the harness permission layer. **On LinkedIn it independently declines clicks and keystrokes, so the kit's rule and the tooling agree** |
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

**Absent:** skip the field and record it as a blocker naming the field. In this kit that costs one filtered view, so the routine reads the unfiltered list and says so.

**Its only sanctioned use in this kit is a search or filter field on a list the routine is about to read, and never on LinkedIn.** There is no route in any routine that types into a composer, a reply box, or a message box. On LinkedIn a query is set by navigating to the search URL and confirmed by reading the box back.

**The input ladder, in the order that actually lands.** Try each and stop at the first that works.

1. A form field setter on a reference. Plain inputs take this. Typing into dialogs is unreliable and setting the field lands.
2. The native value setter plus a bubbling input event, for controlled components that ignore a direct value write.
3. A real click plus keystrokes, last resort, where the platform demands a genuine input event. Focus first: see `focus-before-keystrokes`.

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

**Never run a script that clicks or types on LinkedIn.** A script is not a way around a rule about clicks, and routing around a refusal is the single behaviour that turns a safe kit into an unsafe one.

**Keep one heavy script per round trip.** Every route in this table has a call timeout and a compound script is the thing that trips it. Where the round trip is the expensive part, chain a whole read, wait, verify cycle into one call rather than three.

**This file carries the measured figure, and `BROWSER-RECIPES.md` deliberately does not.** Claude Code's bridge times out at around 45 seconds. The others are below, and a browser automation server usually exposes a configurable default.

| Harness | Call timeout |
|---|---|
| Claude Code | Around 45 seconds |
| OpenClaw | Unknown |
| Hermes | Unknown |
| OpenCode | The browser automation server's own default, commonly 30 seconds and usually configurable |
| Grok Bot | Its own default, not published. Treat a slow call as unknown and re-read the page |
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
| Grok Bot | Its own browser on its cloud computer | `expected` |
| Codex | The browser automation server's wait for selector or load state | `expected` |
| Antigravity | Its wait | `expected` |

**Absent:** fixed waits, which are slower and less reliable, and the run record says so.

Fixed waits are not a failure mode though. They are the shipped behaviour on several surfaces where a load state lies, and the numbers that clear them live in `human-pace` in `recipes/BROWSER-RECIPES.md` rather than here, because they are per surface and were each learned the hard way.

---

## 4b. Connected sources

A connected source is a route the member connected once in their own harness that reads an account this Employee works in: a connector from the harness's own directory, the vendor's own server added by its URL, or the vendor's command line tool. The rule is the one in section 8: the kit detects a connection, uses it, degrades without it, and never installs one. A routine names the capability in the left column; this table says what it resolves to on this machine, and `docs/HARNESSES.md` says how each harness adds one.

**Prefer a connected route over the browser lane wherever both exist.** It reads the same figures the account screen shows with no tab, no mutex, no login wall, and no learned flow that drifts. The browser lane in section 4 is the fallback for every row that resolves to nothing, and section 7 says what that costs.

**Read only, scoped, and never more than this Employee reads.** Where a vendor offers a read only form of a route, that form is the only one named here. Where it offers none, the two guardrails still hold: no routine calls a tool that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel. Every connected server loads its tool descriptions into every run on most harnesses, so connect the rows a routine in this kit reads and nothing for the sake of having it.

| Capability | What it reads | Routes, in order of preference | Read only form | Confidence |
|---|---|---|---|---|
| `channel.schedule`, `channel.publish` | Handing one post, its destination, time and artwork to a channel the member connected | The Metricool connector (`https://ai.metricool.com/mcp`; works on its free plan; LinkedIn profile and page, X, Facebook, Instagram, TikTok, YouTube, Pinterest, Threads, Bluesky); the Buffer server (`https://mcp.buffer.com/mcp`, every plan); Postiz for a member who self hosts | Destinations on the allow list only, exactly as section 5 says | `expected` |
| `engagement.read` | Whether a post is live, its counts, and who spoke to you | The Metricool connector for scheduled posts and counts; the platform's own API where it is open: Threads insights and replies, the member's own Facebook Page and Instagram professional account, YouTube comment threads, Bluesky, Mastodon; X owned reads, which are metered | Read only. A professional network offers no read route and stays on the browser lane, read only | `expected` |
| `analytics.read` | Account level figures per network for the Friday review | The Metricool connector's analytics tools, including the LinkedIn profile figures LinkedIn's own API supplies to it | Read only | `expected` |
| `design.export` | A finished design pulled into the artwork folder | The Canva connector (`https://mcp.canva.com/mcp`) | Export only | `expected` |
| `community.read` | Posts and replies in a community the member runs | The Slack connector; a Discord bot through its REST API; the Circle admin API. A community with no API stays on the browser lane | Read only | `expected` |

`confirmed` appears in this table only after you have watched a row work on this machine; write it into `## Corrections` with the date. **Absent:** the browser lane route in section 4 for the same read, or `n/a (no connected route)` where section 7 says the read needs your session. The probe in 1.2 answers each row in one line: present, under what name, read only or not.

---

## 5. Channel and content

Eight capabilities. The first two are the reason this Employee has an outward surface, and they are the only two.

This is also where the club dashboard's hosted tools slot in. Where a hosted tool exists for a capability, it is the preferred route, because it is the one route that behaves identically on every harness in this table. When one appears, it becomes another row in the preference order and no routine changes by one word.

### `channel.schedule`
Hand one post's body, its destination, its posting time, and any artwork to the publishing channel **you** configured, to be held until that time.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club scheduler when available, then whatever publishing channel you connected to this harness | `unknown` |
| OpenClaw | Hosted club scheduler when available, then a channel you connected | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club scheduler when available, then a channel you connected | `unknown` |
| Grok Bot | Hosted club scheduler when available, then a channel connected at grok.com/connectors, section 4b | `expected` |
| Codex | Hosted club scheduler when available, then a channel you connected | `unknown` |
| Antigravity | Hosted club scheduler when available, then a channel you connected | `unknown` |

**Every row says `unknown` and that is the honest answer rather than a gap.** There is no standard for this on any harness. Whether it exists on yours depends entirely on which publishing channel you connected and how, and that is a decision you make outside this kit. Probe it with check 5 in section 1.1 and write what you found in `## Corrections`.

**Absent:** `soc-publish-run` records each due slot `deferred-no-scheduler` and names it in the run record, and `soc-calendar-standup` moves that slot to the next working day and names it in the brief. **The slot is never fired early through `channel.publish` instead.** Firing a lunchtime post at breakfast is not an optimisation, it is a post going out at a time nobody chose.

**Four properties of this capability that no route changes.**

1. **It is the only outward route in this kit.** There is no path from any routine to a browser control that posts, comments, replies, likes, follows, or messages. If a routine finds itself looking at a composer with a Publish button, it has taken a wrong turn: close the tab, record `publish-failed` with the reason, and move on.
2. **It holds its own credentials, in your secret store, and this Employee never sees them.** No routine reads a token, prints one, names one, or writes one anywhere. The destination is named by its human readable name and by nothing else.
3. **It only reaches a destination you typed into `publish_allow_list:` in `plan/channels.md`.** No routine adds a line to that list.
4. **What it returns is recorded verbatim.** The receipt goes on the ledger as the channel gave it. A `publish-failed` line carries the channel's own message untidied, unshortened, and untranslated, because a channel's own message is the only diagnostic evidence anybody has and a summarised one has thrown away the part that identified the cause. **The one exception: if the channel echoes a credential back, write the class of error and nothing else, and tell the member to rotate it.**

### `channel.publish`
Hand one post to the same channel for immediate delivery. **Used only for a slot whose posting time has already passed** when the routine reaches it.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Hosted club publisher when available, then whatever publishing channel you connected | `unknown` |
| OpenClaw | Hosted club publisher when available, then a channel you connected | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Hosted club publisher when available, then a channel you connected | `unknown` |
| Grok Bot | Hosted club publisher when available, then a channel connected at grok.com/connectors, section 4b | `expected` |
| Codex | Hosted club publisher when available, then a channel you connected | `unknown` |
| Antigravity | Hosted club publisher when available, then a channel you connected | `unknown` |

**Absent:** the slot is recorded `deferred-no-scheduler` with that reason and the standup moves it.

**Why this is the exception and not the normal route.** A slot timed for the early hours, or a slot on a machine that woke late, is already overdue, and scheduling it for a time in the past is undefined on most channels: some fire immediately, some silently drop it, and a routine cannot tell which from here. So an overdue slot is published now, deliberately, and a slot whose time has not arrived is always scheduled.

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

**Absent:** ship without the image and say so in one line on the queue entry. A post that goes out on time without artwork is finished. A run that stalls on artwork is not.

**The ceiling is hard and it is the part people miss.** Base64 runs roughly 1.4 characters per image byte. The budget is 24,000 base64 characters, which is about a 17 KB WebP. Over 30,000, do not proceed. An oversized image does not fail loudly. It wedges the call, and you lose the whole step rather than the picture.

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

**Absent:** leave the image out, name the file path on the queue entry, and ship the text.

**Six routes that look obvious and were tested and failed.** Do not spend a call confirming one on a harness where it is already known dead, because that is exactly how this step burns its budget.

**Dead on any harness in this table.** Rendering the image and capturing it, which produces a screenshot and not a file. Navigating to a `file://` URL, which browser control commonly rewrites to `https://`. A local HTTP server plus a fetch, which triggers a private network permission prompt and **nobody is there to click Allow in a scheduled run.**

**Claude Code only.** These three were tested on the harness this kit was built on and they are the ones worth probing rather than assuming on yours:

| Route | On Claude Code | Elsewhere |
|---|---|---|
| A screenshot based upload helper | Dead. It takes an internal image id, not a disk path | Unknown. No other harness in this file is known to offer one |
| A file upload given a workspace path outside the session folder | Rejected. See `file.upload` | Expected to work on a server that takes any readable absolute path |
| Clicking the file input to drive the operating system's file dialog | Dead. Browser control cannot drive a native dialog | **Live on a browser automation server**, where handling the file chooser event is the standard route. Try it before you rule it out |

A dead route list is a record of what was tested, not a law of nature. When you test one on your own harness, write the result in `## Corrections`.

**Never emit base64 as text.** It moves through the route, not through the transcript. A call that looks slow is not stuck. And inject into exactly one file input: some composers wire several upload routes at once, and injecting into more than one attaches the image twice.

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

**Absent:** `image.inject`.

**Some harnesses accept only a path inside the session working directory.** Where yours rejects an absolute path, copy the file in first, upload, then delete the copy. Two extra file operations, and the step works. The copy first route is harmless everywhere, so a routine that does not know may simply take it.

| Harness | What it accepts |
|---|---|
| Claude Code | A path inside the session working directory only. A cloud synced desktop path is rejected, so the copy first route is the one that runs |
| OpenClaw | Unknown. Try the absolute path first |
| Hermes | Unknown. Try the absolute path first |
| OpenCode | The browser automation server's set input files takes any readable absolute path. No copy needed |
| Grok Bot | Any readable path on its cloud computer. The kit is already there, so no copy is needed |
| Codex | As OpenCode, subject to the sandbox's own view of which paths are readable |
| Antigravity | Unknown. Try the absolute path first |

### `web.search`
Get search results for a query.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Your own search route named under `## Search source` in `plan/sources.md`, then its web search | `confirmed` |
| OpenClaw | Your own search route, then its web search if present | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | Your own search route, then a search server if you added one | `expected` |
| Grok Bot | Its built in web search, then its own browser | `expected` |
| Codex | Your own search route. Confirm the sandbox allows outbound requests | `expected` |
| Antigravity | Your own search route, then its web search | `expected` |

**Absent:** write the exact queries it would have run into the run record so you can run them yourself, and mark every finding that needed one `n/a (no search capability)`. It does not estimate and it does not fill the gap from memory.

**Never substitute a browser tab driving a search engine.** That is a different thing wearing the same clothes, and it burns browser budget that the material sweep and the listening sweep need.

If you have your own search route, name it in `plan/sources.md` under `## Search source`, by its human readable name only. **No key, no token, and no URL with a credential in it goes into that file or any other file in this kit.**

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

**This capability is what keeps the material sweep and the intake crawl alive on a machine with no browser.** It reaches public pages: the member's own site, blog index, changelog, release notes, docs, and public community feeds. It takes no browser mutex and costs no lane time, which is why both routines prefer it over a browser for everything it can reach. It cannot reach anything behind a login, which is where the saved searches, the notifications, and the analytics live. Section 7 has the honest arithmetic on that.

---

## 6. Kit capabilities

Four. Two of them ship as scripts inside the kit.

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

**Absent both routes:** write the record as the last line of `brief-latest.md` under a heading `UNRECORDED RUN` and stop. All seven routines write their unrecorded run to that same file, so you have one place to look.

**`soc-publish-run` treats this differently from every other routine, and the difference is deliberate: with no route at all, it publishes nothing.** A run that publishes and cannot record what it published has produced a post nobody can find, nobody can confirm, and nobody can stop from being published again tomorrow.

The script validates the record's shape, checks `status` against the closed list of eight, refuses anything that looks like a secret, post text, or personal data, writes UTF-8 with no byte order mark, and repairs a stray mark at the head of the file. The in agent route does the same checks. It is a different route, not a lighter one.

**Never append a run record through a shell redirect or an append cmdlet.** Several of them prepend a byte order mark by default and that corrupts the first line of the file for every reader that comes after.

Two invocations survive any shell's quoting, and a routine should reach for one of them:

```
<the JSON> | node "«SOC_ROOT»/scripts/runlog.mjs" --stdin
node "«SOC_ROOT»/scripts/runlog.mjs" --file <path to a .json file>
```

`--once` refuses a second record for the same routine and period and exits with code 4. `soc-publish-run` passes it, because a second record there would mean a second publish. Nothing else passes it, because the once per period guard legitimately writes a second record with the status `skipped-already-ran`.

### `copy.check`
The scripted judge for any text about to be written into a queue file, a plan file, the standards, or a member facing page.

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
node "«SOC_ROOT»/scripts/copy-check.mjs" --file <path> --dest <destination> [--json]
```

`--dest` is one of `post`, `dm`, `plan`, `standards`, `plain`. `--selftest` takes no other flag and confirms the script runs, which is worth doing once on install so you find out on day one rather than at 09:15 on a Tuesday. `--cap <n>` and `--first-line-cap <n>` are optional overrides for a destination whose real limits you have measured.

**The script reads two files inside the kit to do its job:** `voice/voice.md` for the banned lists, the hashtag policy, and the dash policy, and `voice/proof-inventory.md` for what may be claimed. Where either is missing it falls back to the shipped defaults and says so in its own output, so a first day with no voice file still gets a real check.

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

**Absent all routes:** the intake run writes the exact commands to `«SOC_ROOT»/schedule-commands.txt` and names that file in the first paragraph of its report. You run them yourself, once, and the kit is scheduled.

**Nothing about a routine's behaviour depends on which of the three registered it.** The routine reads the clock, reads its row in `SCHEDULE.md`, and decides for itself whether to work. A job that fires at the wrong time gets caught by the window guard. A job that fires twice gets caught by the period guard. **The scheduler is a starter motor, not a controller.**

### `notify.push`
Send one short notification to your own device.

| Harness | Route | Confidence |
|---|---|---|
| Claude Code | Its push notification tool, then a hosted club notifier | `confirmed` |
| OpenClaw | Its own notification route if it has one, then a hosted club notifier | `unknown` |
| Hermes | Unknown | `unknown` |
| OpenCode | A hosted club notifier, then none | `unknown` |
| Grok Bot | A message in the bot's own thread, which the Grok app carries to your phone | `expected` |
| Codex | A hosted club notifier, then none | `unknown` |
| Antigravity | Unknown | `unknown` |

**Absent:** that is a normal outcome, not a failure and not a blocker. The run record says `push: not available` and carries on. Every push in this kit is a shortcut to a line that is already in the brief, so you lose speed and never lose information.

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

## 7. What you lose with no browser, and what you lose with no channel

Two different gaps, and they cost you different things.

### No browser control at all

**The morning brief never needs a browser. Neither does the draft queue, and neither does the arithmetic behind the Friday scorecard.** On a machine with no browser control you still get a voice file, a plan, a calendar, a queue of drafted posts every day, a brief, and a scorecard.

**What you lose is the proof and the listening.** Nobody confirms a post is actually live. Nobody reads the counts. Nobody brings back the comments. Left alone long enough that is the more expensive gap of the two, because a channel that reports success and publishes nothing becomes invisible.

| Routine | With browser control | With none | Recorded |
|---|---|---|---|
| `soc-engagement-sweep` | Confirms liveness, reads counts, captures inbound, drafts replies | Nothing. Its whole job is in the browser | `failed`, blocker `no browser control capability configured` |
| `soc-calendar-standup` | Never uses one | Identical. Full function | `ok` |
| `soc-publish-run` | Reads each permalink back the same morning | Hands over exactly as normal, skips the read back | `ok`, permalinks marked not read this run |
| `soc-material-sweep` | Reads your saved searches and the places your audience is | Your own work through a shell, and your own published surfaces through fetch. Nothing behind a login | `partial` |
| `soc-draft-queue` | Verifies a link fetch could not read | Drops that one link and names it. **The queue files need no browser** | `ok` or `partial` |
| `soc-performance-review` | Account level figures from your read screens, plus the Friday flow replay | Everything the ledgers hold, which is most of it. No account level figures, no replay | `partial` |
| `soc-intake-and-voice` | Reads your own published posts behind a session, builds the voice file from them | Reads whatever public post surfaces fetch can reach | `ok` or `partial` |

**Five of the seven produce their main deliverable with no browser at all.** But do not buy this expecting the listening to work without one, because it will not.

### No channel route

**Everything except the last step runs.** You get the voice file, the plan, the material, the calendar, the brief with its publishing line, a full queue of drafted posts every day, and the Friday scorecard. `soc-publish-run` records each due slot `deferred-no-scheduler`, the standup moves it forward, and the brief names it.

**What you lose is autonomy on the final click.** You copy each post out of the queue file and post it yourself, which takes about a minute a day. Everything else still works: the liveness sweep still confirms what you posted by hand, the counts still land in the metrics ledger, the reply queue still fills, and the Friday cut still reads.

That is a real product and plenty of people will run it that way for a month before they connect anything. It is also the state every install starts in, twice over, because `publish_allow_list:` ships empty as well.

---

## 8. Optional named helpers

Some harnesses let you install named helpers of your own: skills, plugins, extensions, whatever yours calls them. The kit's relationship to those is fixed and short.

**It detects. It uses. It degrades. It never installs.**

Connected sources in section 4b are named helpers under exactly this rule: detect, use, degrade, never install. A routine that resolves a capability through one never calls a tool on it that creates, sends, spends, deploys or deletes unless `RELEASES.md` names that channel, and it takes the read only form of the route wherever the vendor offers one.

A routine may name an optional helper as a dependency, check whether it is present, use it when it is, and fall back to a stated route when it is not. **No routine in this kit ever creates, authors, or installs a helper in your global directory.** Your global setup is yours. You add helpers from the library when you decide to, and nothing here reaches into it.

Self repair means the same thing. When a routine needs a browser flow that has no file yet, it drives the flow once and writes what it verified into the kit's own `recipes/` folder. When a selector later drifts, it reads the live page and writes the replacement into the same file. Both are a file inside `«SOC_ROOT»`, both go in the run record as one line, and neither is a new helper installed somewhere global.

**Forbidden by name, deliberately.** No routine may call anything that publishes on its own, anything that belongs to a sibling Employee's territory, or anything billed per run that you did not agree to spend. That includes third party publishing helpers, indexing and search console helpers, and paid data or media endpoints. There is exactly one publishing route in this kit and it is `channel.schedule` and `channel.publish`, reaching a channel you configured, for a destination you allowed.

**Where a helper is genuinely useful, it is a decoration and never a dependency.** An image generation helper makes a post's artwork better and its absence costs a line on the queue entry saying so. A queue delivered on time without artwork is a success. A run that stalls waiting for artwork is not.

---

## 9. The scheduling layer

Every harness schedules differently and some do not schedule at all. The shape below is the same everywhere. Only the mechanism changes.

### 9.1 The shape

**One job per routine.** Seven routines, seven jobs. Never one job that runs several in sequence: a chained job defeats the per routine period guard, blurs the budgets, and turns one failure into seven.

**The job's only content is the invocation.** All the logic is in the routine. If your scheduler grows a shell script with business rules in it, the rules now live in two places and they will disagree, and you will find out which one is wrong on the day it matters.

**Register the fire time, not the window.** The window is enforced inside the routine.

**Name every job exactly after its routine id.** All seven ids carry the `soc-` prefix so they namespace cleanly next to other AI Employees, and the monthly drift check can only match a registered job to a row when the names are identical.

**Take the times from `SCHEDULE.md`, not from any example below.** `SCHEDULE.md` is the one place a cadence, a fire time, and a window live, and it wins over every other file in the kit including this one. The examples here carry the shipped defaults so the shape is readable.

The shipped default week:

```
Every weekday
  05:45  soc-engagement-sweep
  06:50  soc-calendar-standup
  07:25  soc-publish-run
  08:10  soc-material-sweep
  09:15  soc-draft-queue

Friday adds         16:00  soc-performance-review
First weekday adds  13:00  soc-intake-and-voice
```

No two share a fire minute, including the one that never touches a browser. Hosts flush queued jobs in bursts, and two agent sessions starting in the same second compete for the same files.

**Two orderings in that list are not preferences and a schedule that breaks either has broken the product.** `soc-calendar-standup` fires before `soc-publish-run` and its window closes before the publish run's opens, because that gap is the veto window. And `soc-draft-queue` fires after `soc-material-sweep`, on the day before the slot it serves, because a draft that has not sat in a file for a day has had no veto window either. `SCHEDULE.md` section 4 carries the arithmetic.

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

Throughout, `«RUN soc-engagement-sweep»` and its six siblings stand for the whole invocation that runs that one routine unattended. Section 9.2a says what it expands to. Section 10 applies to every line below without exception.

### 9.2a What `«RUN <routine-id>»` expands to

This is the string every scheduled job in this kit is built from, so it gets a worked example rather than a description.

**`«RUN <routine-id>»` is the entire invocation, brackets and routine id together.** It is not a prefix you append the id to. On several harnesses the id sits inside a quoted prompt rather than at the end of the line, so substitute the whole placeholder and read the shapes below before you write seven of them.

Two shapes cover every harness.

**Shape A, where the harness discovers routines from a directory.** The invocation names the routine id and the harness finds the folder itself:

```
<headless run command> "Run soc-engagement-sweep"
```

**Shape B, where it does not.** The invocation hands the routine file to the harness as the run prompt:

```
<headless run command> "Read «SOC_ROOT»/routines/soc-engagement-sweep/SKILL.md and follow it."
```

**Shape B works on both kinds**, so reach for it when you are not sure which you have. The routine's own Step 0 reads `CONTRACT.md`, `ROLE.md`, this file, and its `SCHEDULE.md` row, so the prompt never has to list them.

| Harness | The headless run command | Confidence |
|---|---|---|
| **Claude Desktop app** | Its own scheduler holds the invocation and you never write this line by hand: one local task per routine, named after the routine id, prompt `Read «SOC_ROOT»/routines/<routine-id>/SKILL.md and follow it.`, working folder `«SOC_ROOT»`, permission mode set per task. Shape B | `confirmed` |
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

**The working directory.** The run has to start in `«SOC_ROOT»`, because the routines read every path relative to it. Every harness has its own way of saying that: a directory flag, a `cd` in front of the command, or a field on the scheduled job.

**Point the job at `«SOC_ROOT»/routines/` and never at a copy of a routine folder somewhere else.** Every routine ends with a `## Corrections` section you write into and the routine reads at the top of every run. A correction written into a copy is lost the next time the folders are copied across, and one written into the original is never read at all. **Do not keep two copies.**

**The approval mode.** Section 10. A scheduled run in a prompting mode hangs at 05:45 and leaves no record at all, which is worse than failing.

**One routine run by hand, first.** Take the line for `soc-calendar-standup`, run it in a terminal, and watch it write `brief-latest.md` and one line into `runlog.jsonl`. Then register the other six. Seven jobs registered on an invocation nobody has run is seven silent failures on the same morning, and the first thing you would see is an empty brief.

**Prove the standup and never the publish run.** The standup writes files and sends nothing, so a hand run of it is safe on a first day. `soc-publish-run` is the one routine with an outward surface, and a hand run of it to test an invocation is a hand run that could publish.

### 9.2b Scheduled readiness is a scheduled fire

Registration proves that the scheduler holds a job. It does not prove that the job runs, that it runs with the permission mode you set, that it starts in the kit folder, or that it can reach the connections a chat session could. All four have failed after a clean registration, and the one that hides longest is the last: a token or a secret store that unlocks for the signed in user and not for the process the scheduler starts. The observed case was an account read that worked in the session that connected it, and a scheduled routine the same evening that could not decrypt the same saved token.

So readiness is proved once, by a fire the scheduler started, and it is reported as its own fact. The install prompt registers the jobs and reports `scheduled execution: not yet verified`. The proof is a line in `runlog.jsonl` from a run nobody started by hand, at the registered time, with the status it should have, and where a routine reads through a connected route, that first scheduled read is the second mark on the route's row in `## Corrections`, next to the mark the chat session left. Two marks, two processes, and a row with only the first is not ready.

**A run by hand never counts**, however well it went. It goes through the same guard, records the same period, writes `run by hand` in `notes`, and never claims a scheduled fire happened. Installed, scheduled and proven are three words, and a report that uses one of them for all three has hidden the failure that matters most.

### 9.3 cron, on macOS or Linux

```
45 5  * * 1-5    «RUN soc-engagement-sweep»
50 6  * * 1-5    «RUN soc-calendar-standup»
25 7  * * 1-5    «RUN soc-publish-run»
10 8  * * 1-5    «RUN soc-material-sweep»
15 9  * * 1-5    «RUN soc-draft-queue»
0  16 * * 5      «RUN soc-performance-review»
0  13 1-7 * *    «RUN soc-intake-and-voice»
```

A crontab line is handed to a shell, so a quoted prompt with spaces in it survives as written. Two cron specifics to know: `%` is special in a crontab and has to be escaped as `\%`, and cron runs with a minimal environment, so give the command an absolute path rather than assuming your shell's `PATH`.

**The monthly line is the one people get wrong.** In standard cron, when both the day of month field and the day of week field are restricted, they are combined with OR rather than AND. So `0 13 1-7 * 1-5` does not mean the first weekday of the month. It means every weekday of the month plus the first seven days of it. Leave the day of week field open, as above, and let the routine's own `days: first-weekday` and its monthly period key do the filtering. It fires up to seven times, skips the weekend dates as out of window, runs once, and skips the rest as already run. **Be generous about when, be strict about how many times.**

**On macOS, cron does not fire while the machine is asleep and does not catch up on wake.** If your machine sleeps overnight, use `launchd` with `StartCalendarInterval`, which does flush the missed fires when the machine wakes. That flush is exactly the burst the window guard was built for, so it is safe.

### 9.4 Windows Task Scheduler

```
schtasks /Create /TN "soc-engagement-sweep"    /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 05:45 /TR "«SOC_ROOT»\run\soc-engagement-sweep.cmd"
schtasks /Create /TN "soc-calendar-standup"    /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 06:50 /TR "«SOC_ROOT»\run\soc-calendar-standup.cmd"
schtasks /Create /TN "soc-publish-run"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 07:25 /TR "«SOC_ROOT»\run\soc-publish-run.cmd"
schtasks /Create /TN "soc-material-sweep"      /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 08:10 /TR "«SOC_ROOT»\run\soc-material-sweep.cmd"
schtasks /Create /TN "soc-draft-queue"         /SC WEEKLY  /D MON,TUE,WED,THU,FRI /ST 09:15 /TR "«SOC_ROOT»\run\soc-draft-queue.cmd"
schtasks /Create /TN "soc-performance-review"  /SC WEEKLY  /D FRI                 /ST 16:00 /TR "«SOC_ROOT»\run\soc-performance-review.cmd"
schtasks /Create /TN "soc-intake-and-voice"    /SC MONTHLY /MO FIRST /D MON,TUE,WED,THU,FRI /ST 13:00 /TR "«SOC_ROOT»\run\soc-intake-and-voice.cmd"
```

**Each `/TR` points at a one line file rather than at the invocation directly, and that is on purpose.** `/TR` takes a quoted string, and the invocations in 9.2a carry a quoted prompt of their own. Nesting quotes inside `/TR` is the single most common way a registered Windows task turns out to do nothing. So write one file per routine under `«SOC_ROOT»\run\`, each holding the expanded `«RUN <routine-id>»` line and nothing else, and point the task at the file. It also gives you something you can double click to test a routine by hand.

```
:: «SOC_ROOT»\run\soc-calendar-standup.cmd
@echo off
cd /d "«SOC_ROOT»"
"%USERPROFILE%\.local\bin\claude.exe" -p "Read «SOC_ROOT»/routines/soc-calendar-standup/SKILL.md and follow it." --permission-mode acceptEdits --output-format json < nul > "«SOC_ROOT»\run\soc-calendar-standup.last.json"
if errorlevel 1 node "«SOC_ROOT»\scripts\runlog.mjs" --failed-run soc-calendar-standup --exit-code %errorlevel%
```

Four things in that file are there because a scheduled fire found each one missing. **The full path to the binary**, because Task Scheduler starts with the system PATH and `claude` is not on it. **`< nul`**, because without it every fire waits three seconds for stdin that never comes. **An explicit `--permission-mode`**, because a run that waits on a prompt at 06:45 never fails and never writes a record. **The `if errorlevel 1` line**, because a run that is not logged in exits in under a second with `Not logged in` and would otherwise leave nothing behind; through `runlog.mjs --failed-run` it leaves a `failed` record the standup can put in the brief. `run/<routine-id>.cmd.example` ships one of these per routine: copy it without the `.example`, replace `«SOC_ROOT»`, and check the path.

The monthly line fires on the first Monday, the first Tuesday, and so on, up to five times. The period key reduces that to one run per month. This is the same tradeoff as the cron version and it is deliberate.

Task Scheduler has a setting called **Run task as soon as possible after a scheduled start is missed.** Turn it on for all seven. The window guard makes the catch up safe, and without it a laptop that was closed at 06:50 gets no brief at all that day.

### 9.5 Machines that sleep

If the machine is asleep at a fire time, what happens next depends on the scheduler, and none of them replays every missed fire. The Claude Desktop app skips a fire the machine slept through and, on wake, runs exactly one catch up for the most recently missed time, looking back seven days. Windows Task Scheduler runs one catch up when its setting to run a missed task as soon as possible is on, and none when it is off. launchd on macOS coalesces every missed fire into one run on wake. cron skips a missed fire and never catches up. So a late fire arrives alone, at an unplanned minute, and sometimes beside another routine's catch up.

That burst is designed for. The window guard runs whatever arrives inside the window and exits clean on whatever arrives outside it. The period guard makes sure only one of them does the work. **In `soc-publish-run` this is a hard safety property rather than a tidiness rule:** without the due-today rule a machine that slept through Wednesday and Thursday would publish three days of posts in three minutes on Friday morning, under your name, to a live audience.

**Set the earliest fire in your table after the time the machine is normally awake.** The shipped morning block starts at 05:45 and the standup's window closes at 07:20, which is deliberately narrow because it is the veto window. If your machine is not awake by then, move the whole morning block later together rather than widening one row, and `SCHEDULE.md` section 6 says how.

### 9.6 When nothing can register the schedule

The kit still runs when you launch it by hand. Nothing about a routine's behaviour changes based on who started it.

When no route can register a job, the intake run writes every command it would have run into `«SOC_ROOT»/schedule-commands.txt` and names that file in the first paragraph of its report. Run them yourself once and you are scheduled.

**Those commands are written expanded, never with `«RUN <routine-id>»` still in them.** A file you have to translate before you can run it is not a recovery path. Where the routine could not work out the invocation for your harness, it writes the line it would have used with the run command left as `<headless run command>`, says so in the report, and points you at 9.2a.

### 9.7 Drift

`soc-intake-and-voice` compares the registered job times against `SCHEDULE.md` once a month and reports any mismatch as one line naming both times. It can only do that where the harness or the operating system lets it list what is registered, which means `crontab -l` on Unix or `schtasks /query` on Windows through `shell.run`.

Where it cannot list them, it says so rather than reporting a clean check it did not perform. **A drift check that cannot see the schedule reports that it could not see the schedule.**

---

## 10. Scheduled runs get no permission prompt

This is the setting that decides whether your schedule produces anything at all, and it is worth the two minutes it takes to get right.

**A routine launched in a prompting mode stalls forever waiting for a human who is asleep.** At 05:45 the sweep asks to open a tab, or to write a file, or to run a command, and then it sits there. Nobody clicks Allow. The run does not fail, which would at least leave a record. It hangs. There is no run record, no brief, and no blocker for you to read in the morning, because the routine never reached the line that writes one. The next morning's standup opens by telling you nothing has been produced since a given date, which is the correct behaviour and a day late.

**The fix lives in your harness's own settings: run scheduled work in its auto approve mode.** Every harness calls it something different. Ask yours for the flag or setting that runs a session without interactive approval, and apply it to the seven scheduled jobs only.

Two practical points on top of that.

**Scope it where scoping is supported.** Give the auto approve setting the narrowest scope your harness allows, ideally `«SOC_ROOT»` and nothing else. These routines have no business writing anywhere else, and a scoped grant is the thing that keeps that true rather than merely intended.

**A prompt can come from below the harness too.** The private network permission prompt described under `image.inject` is a browser prompt, not a harness prompt, and no auto approve setting clears it. That is one of the reasons that route is on the dead list rather than in the fallback chain. If a step needs a click nobody is there to give, the step does not belong in a scheduled routine.

### Why this does not weaken anything

It is a fair thing to be uneasy about, and it deserves a direct answer, especially in a kit that can publish.

**The prompt gate was never what stopped this kit from publishing the wrong thing.** Four things do, and every one of them lives inside the routines rather than in your approval dialog:

1. **`publish_allow_list:` is empty until you type into it**, and no routine ever adds a line. With nothing in it, nothing goes anywhere, no matter what mode anything runs in.
2. **The draft sits on disk for a full day with a hold box under it**, because `soc-draft-queue` writes tomorrow's posts and `soc-publish-run` reads yesterday's.
3. **The brief names every slot going out today and the tick that stops it**, before the publish run fires, and the publish run confirms the brief was actually written before it hands anything over.
4. **The four conditions in `soc-publish-run` Step 3** are checked per slot, and the hold box is read live immediately before the handover.

Turning off the prompt removes a question about opening a tab and writing a file. It does not add a capability, and it does not touch any of those four.

What actually holds the line is checked at the end of every single run: nothing published, posted, replied to, liked, followed, messaged, submitted, or spent except a handover meeting all four conditions; every claim traceable to the proof inventory; no credential written or logged anywhere; and every handover matched one to one against a ledger line. If any of those does not hold, that run is a failure regardless of what else it produced.

**If your harness cannot run without interactive approval, do not schedule the browser routines.** Run them by hand, when you are at the machine. The file routines will schedule fine and you will still get the brief, the queue, and the scorecard. That is an honest limitation of the pairing, not something to work around with a longer timeout.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.`

This is where your probe result goes when it disagrees with a table above. Your machine is the authority on your machine. Every routine reads this section at the top of every run, and a line here outranks anything in sections 3 to 6.

The two lines most worth writing here on day one: what your channel route actually is, and whether your browser control attaches to the profile you are signed in to.
