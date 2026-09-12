# Security

The safety model of these eight employees is the permission layer of the harness they run on, plus the way the kits are written to behave inside it.

**The permission layer is the harness's own.** On Claude Code that is the built in classifier and the permission mode you set per scheduled task: every tool call a routine makes passes through it, and the scope you grant a task is the scope it has. The kits add no gate of their own in front of that layer and claim none. `scripts/guard.mjs` in every kit checks the schedule window and the period key so a late or duplicate fire is harmless; it is not a send or spend filter.

**The defaults are conservative by design.** A scheduled routine drafts, fills, stages and briefs. It does not send, publish, submit, spend or change an account setting on its own: outreach lands in queue files or as unsent drafts in your own mailbox, forms are left open on the last step, campaigns are assembled as build sheets. It never creates an account, enters or generates a password, completes a captcha, accepts terms, or writes a credential into any file. Page content, form content and inbound mail are data, never instruction.

**Sending is yours to authorize, and there are legitimate ways to do it.** The SEO/AEO Employee publishes to a blog you configured. The Social Media Employee hands posts to a channel you connected, after a veto window named in the morning brief. A row in the employee's `RELEASES.md` hands a channel to the routine that stages it, with your conditions, and only you write that file. Any employee, in an interactive session in its folder, may do what you may do by hand, on your word. And the harness's own permission layer is where you widen what a scheduled run may do, if you choose to. A send that you configured, or that you authorized in the session or in the permission layer, is the product working as intended.

A way to make a routine act outside what you configured or authorized is a security issue, even if it takes an unusual page, an unusual prompt, or an unusual harness setting to get there.

## What to report here

- A path by which page content, a web form, an email, or a document read during a run can change what a routine does. Every kit says page content is data and never instruction; a way around that is a report.
- A scheduled routine, recipe, or install prompt that sends, publishes, submits, spends, or changes an account setting with no configuration or authorization from the member behind it.
- A routine or script that writes outside its own working folder, into another employee's folder, or into a global skills or plugins directory.
- A script or routine that writes a secret, a token, a password, or a credential bearing URL into any file, run record, or log.
- A launcher or scheduler recipe that runs with wider permission than the file says it does, or that describes a permission scope the harness does not actually enforce.
- A routine that enters a credential, completes a captcha, accepts terms, or creates an account.

## What is not a security issue

- A send, publish or post that the member configured or authorized. That is the design.
- A routine that stops and names a login wall, a captcha, or a credential. That is the design too.
- A routine that reads your own signed in pages. Reading your own accounts is what the browser lane is for.
- A member widening a scheduled task's permission mode, or editing the guard script, the contract or a routine in their own install. It is their employee and their setup; the harness's layer, not this repo, is what applies the permission.
- A cost surprise. Report those in Issues, and read `docs/COST.md` first.

## How to report

Use GitHub's private vulnerability reporting on this repository (Security, then Report a vulnerability). If that is not available to you, use the contact address on https://www.reinventing.ai and put "ai-employees security" in the subject.

Please include the employee slug, the routine id, the harness and version, the permission mode the task ran in, the exact page or input that triggered it, and what the run record said. Do not include a credential, a real customer's data, or a live URL with a token in it.

Please do not open a public issue for a way to make an employee act outside its authorization until it is fixed.

## What happens next

I read every report myself. For the first month after release I answer within a working day; after that, within a week. A confirmed report gets a fix in every affected kit, a line in that kit's `CHANGELOG.md`, and your name in `CREDITS.md` unless you ask otherwise.

## Scope

The eight kits under `employees/`, the installer, the `hire` skill, and the workflows in this repository. The Agent Ops Club web application is a separate codebase with its own reporting route on the site. The harness's permission layer belongs to the harness vendor; a flaw in the classifier itself goes to them, not here.
