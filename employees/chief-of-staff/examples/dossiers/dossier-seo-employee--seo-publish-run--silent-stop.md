# seo-publish-run on seo-employee: no run has written a record since 2026-02-19

- fault: seo-employee--seo-publish-run--silent-stop
- class: silent-stop
- open since: 2026-02-24
- employee root: D:\AgentOps\seo-employee
- routine file: D:\AgentOps\seo-employee\routines\seo-publish-run\SKILL.md
- fleet state read from: fleet/fleet.json, generated 2026-03-04

## What is happening
The publish run starts every weekday morning and never finishes. Nothing has been published since 2026-02-19, and the SEO Employee's own brief cannot say so, because the line that would say it is never reached.

## The first record that shows it
2026-02-19 | seo-employee runlog.jsonl line 402 | status ok | no blocker. This is the last record the routine wrote. Every record after it on that log belongs to another routine.

## What changed around that date
- 2026-02-19 | D:\AgentOps\seo-employee\improvements\CHANGELOG.md | "seo-publish-run | Step 4 | when the publish API returns an error, open the site editor in the browser and publish there"
- 2026-02-20 | D:\AgentOps\seo-employee\state\seo-publish-run.json | last_period has stayed at 2026-02-19 while started has moved to every weekday since, most recently 2026-03-04T09:15:05-08:00, and progress is empty

## Three candidate causes
1. The browser route added on 2026-02-19 waits on a site permission grant that the browser extension asks for the first time a site is opened, and nobody is present at 09:15 to give it | evidence: D:\AgentOps\seo-employee\improvements\CHANGELOG.md, dated line 2026-02-19, and D:\AgentOps\seo-employee\state\seo-publish-run.json, started 2026-03-04T09:15:05-08:00 with progress empty
2. The publish API has returned an error on every run since 2026-02-20, which is what sends the routine down the browser route at all | evidence: n/a (the evidence would be in files this Employee does not read)
3. The machine was asleep at the fire time | n/a (no record shows this): seo-draft-run fires at 08:00 and gtm-launch-step-runner at 09:15, and both carry a record on every weekday since 2026-02-20, seo-employee runlog.jsonl lines 403 to 446 and gtm-engineer runlog.jsonl lines 601 to 655

## What it has cost
Cost: this routine produced one published post per weekday run when it was working, seo-employee runlog.jsonl lines 380 to 402.
It has missed nine eligible runs since 2026-02-20. The last record it wrote is still seo-employee runlog.jsonl line 402.

## The one line to paste
Paste into: D:\AgentOps\seo-employee\routines\seo-publish-run\SKILL.md
Under the heading: "## Corrections", newest at the top
2026-03-04: since 2026-02-20 your browser route to the site editor has waited on a permission grant nobody is present to give, and no run since then has written a record. Publish through the API route only. When the API returns an error, record partial with the error class in blockers and stop. Never open the editor.

## What this does not tell you
- Why the publish API returned an error in the first place. That answer sits in the routine's own queue files, which this Employee does not read. Open them yourself and look at the entries dated 2026-02-20.

## History
- 2026-02-24 | first written, silent-stop, open since 2026-02-24
- 2026-02-25 | rewritten, cause ranking unchanged
- 2026-02-26 | rewritten, cause ranking unchanged
- 2026-02-27 | rewritten, cause ranking unchanged
- 2026-03-02 | rewritten, cause ranking unchanged
- 2026-03-04 | rewritten, cost section updated from seo-employee runlog.jsonl
