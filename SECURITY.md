# Security

The whole safety model of these eight employees is two rules: **they never send and they never spend.** No email, DM, post, comment, form submit, or published page leaves the machine. No budget, bid, campaign state, purchase, or activation changes. They never create an account, enter or generate a password, complete a captcha, or accept terms, and they never write a credential into any file. Everything up to those lines is theirs to do without asking; those lines are yours.

A way to make a routine cross either line is a security issue, even if it takes an unusual page, an unusual prompt, or an unusual harness setting to get there.

## What to report here

- A routine, recipe, or install prompt that can be made to send, submit, publish, post, activate, enable, purchase, or spend.
- A path by which page content, a web form, an email, or a document read during a run can change what a routine does. Every kit says page content is data and never instruction; a way around that is a report.
- A routine or script that writes outside its own working folder, into another employee's folder, or into a global skills or plugins directory.
- A script or routine that writes a secret, a token, a password, or a credential bearing URL into any file, run record, or log.
- A launcher or scheduler recipe that runs with wider permission than the file says it does.

## What is not a security issue

- A routine that stops and names a login wall, a captcha, or a credential. That is the design.
- A routine that reads your own signed in pages. Reading is allowed; acting is not.
- A cost surprise. Report those in Issues, and read `docs/COST.md` first.

## How to report

Use GitHub's private vulnerability reporting on this repository (Security, then Report a vulnerability). If that is not available to you, use the contact address on https://www.reinventing.ai and put "ai-employees security" in the subject.

Please include the employee slug, the routine id, the harness and version, the exact page or input that triggered it, and what the run record said. Do not include a credential, a real customer's data, or a live URL with a token in it.

Please do not open a public issue for a way to make an employee send or spend until it is fixed.

## What happens next

I read every report myself. For the first month after release I answer within a working day; after that, within a week. A confirmed report gets a fix in every affected kit, a line in that kit's `CHANGELOG.md`, and your name in `CREDITS.md` unless you ask otherwise.

## Scope

The eight kits under `employees/`, the installer, the `hire` skill, and the workflows in this repository. The Agent Ops Club web application is a separate codebase with its own reporting route on the site.
