# Contributing

Thank you for looking under the hood. This repo is eight AI employees, each a folder of scheduled routines, and the most useful contributions are the ones that come from running one on a real business and finding where it breaks.

## What I am looking for

- **Corrections from a real run.** A routine that asked for something it should have researched, a browser flow that no longer matches a site, a rule that reads wrong on a Monday morning. Open an issue with the routine id and what happened, or a pull request with the smallest change that fixes it. From 1.7.0 on your employee drafts these for you: once a month it writes the repairs it made to its own instructions that would help every install to `improvements/contribution-draft-YYYY-MM.md`, with your business taken out. Read it, then paste it into an issue. It never sends anything itself.
- **Routine requests.** A routine one of the eight should have. Use the routine request template; say which employee, what it would own, and what it must never do, and answer the five questions in `docs/STANDARD.md` section 4: trigger, frequency, output, silence, stop.
- **Employee proposals.** A ninth role. Use the employee request template. Read `docs/HOW-EMPLOYEES-WORK.md` first, because a proposal that keeps the two guardrails and the schedule model is one I can build on.
- **Harness notes.** Ran a kit on OpenClaw, Hermes, OpenCode, Grok Bot, Codex, Antigravity, Pi, Cline, Qwen Code or DeepSeek, or on a Mac through launchd or Linux through cron? Open an issue with the invocation you used, what the first run record said, and what you changed, and it goes into the notes in `docs/HARNESSES.md` with your name on the change.
- **Show and tell.** Post what an AI Employee did for your business in Discussions under Show and tell. Good builds go into the README with your name on them.

## Before you open a pull request

This repository is licensed under the MIT License (see LICENSE). By opening a
pull request you agree that your contribution is licensed under that same MIT
License, with no additional terms, and that you have the right to license it
that way. This is the default GitHub already applies to any repository with a
license notice; I am stating it here so nobody is surprised later.

Every commit needs a Developer Certificate of Origin sign-off. Run
`git commit -s` and git adds a line like
`Signed-off-by: Your Name <you@example.com>` to the commit message. That line
certifies the four statements at https://developercertificate.org, in short:
you wrote it, or you have the right to submit it under this license. Pull
requests without a sign-off fail the DCO check and I will not merge them.

Please know what happens to a merged correction. I fold fixes accepted here
back into the paid kits I sell inside the Agent Ops Club, which are built on
the same standard, and anyone else may reuse them in their own products,
because that is what the MIT License allows. Your name stays in the git
history and in CREDITS.md, and the MIT copyright and permission notice
travels with every copy. If that is not something you want, open an issue
with your suggestion instead of a pull request and I will write the fix
myself.

## The rules the kits are written to

These are checked by hand on every pull request, and the first one by a workflow.

1. **No em dash and no en dash, anywhere.** Not in prose, not in a code comment, not in a commit message. Use a period, a comma, or split the sentence. The `no-dashes` workflow fails the pull request otherwise. The one exception is the `## Corrections` section at the foot of each kit file, which belongs to whoever installed the kit.
2. **No hype words.** Nothing in a kit is described the way a launch page would describe it, and no multiplier is ever claimed. Say what the routine does and what it measured. Each kit's `copy-check.mjs` carries the banned list and will fail a draft that uses one.
3. **The defaults are not negotiable.** A scheduled routine drafts, fills and stages; it sends, publishes or spends only where the member configured it or authorized it. A change that makes a shipped routine cross that line on its own, enter a credential, or write a secret is closed without discussion. A change that widens what a routine may do without asking, inside its own folder, is welcome, and what a member does to the guard, the contract or a routine in their own install is their business.
4. **Routines are scheduled jobs, not skills.** Nothing in a pull request installs anything into a global skills directory, and every `routines/<id>/SKILL.md` keeps `metadata: internal: true` in its frontmatter.
5. **No links to the club inside a routine body.** The one pointer line at the end of `INSTALL-PROMPT.md` and at the foot of the brief template is the whole of it. A `SKILL.md` that markets anything is a `SKILL.md` a registry will flag.
6. **Small, reviewable changes.** Replace the block that was wrong. A pull request that rewrites a whole file is closed with a request to split it.
7. **Names stay put.** A routine's folder name, its YAML `name`, and the name of its scheduled job are the same string, always. Renaming one is a breaking change and needs a CHANGELOG line and a version bump.

## Testing a change

There is no build. Three scripts in every kit carry a self test, and all three must pass:

```
node employees/<slug>/scripts/copy-check.mjs --selftest
node employees/<slug>/scripts/runlog.mjs --selftest
node employees/<slug>/scripts/guard.mjs --selftest
```

`node .github/scripts/selftests.mjs` runs all of them for all eight kits, and `node .github/scripts/no-dashes.mjs` runs the dash check the workflow runs. If your change touches copy a routine writes, run it through that kit's `copy-check.mjs` with the right `--dest` before you commit, the way the routine itself would.

If your change touches a routine's behaviour, say in the pull request which business you ran it on and what the run record said. A change nobody has run is a change I will run before merging, and that takes longer.

## Support

Issues are answered within a working day for the first month; after that, Discussions is where the community answers and I read every thread.
