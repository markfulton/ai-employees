# Upgrading an employee

An installed employee is two things sharing one folder. The **kit** is ours: the contract, the role, the routines, the scripts. The **business it has been running** is yours: its evidence, its ledgers, its strategy, the browser flows it learned on your own screens, and the repairs it made to its own instructions.

An upgrade replaces the first and never touches the second. Everything on this page exists to make that guarantee real rather than hopeful.

## Your employee tells you when there is one

From 1.7.0 on, each employee checks once a month, on its first weekday routine, whether a newer version of its kit has been published. When there is one, the next morning brief carries a short `## About this kit` section: the two version numbers, up to five plain lines on what you get, and the two lines below. It shows in full once per version and as a one line reminder once a month after that.

The check reads one public file and nothing else. **No routine ever runs the upgrade**, because a scheduled run that downloads a program and executes it unattended is the shape these kits refuse everywhere else. You run it, or you open a chat session in the employee's folder and tell your agent to run it for you. One line in that routine's `## Corrections` turns the check off.

An employee installed before 1.7.0 does not have the check, so that upgrade is the last one you have to remember by yourself.

## The short version

```bash
npx ai-employees upgrade gtm-engineer --to /path/to/your/employee
```

That reports and writes nothing. Read it, then run it again with `--apply`.

```bash
npx ai-employees upgrade gtm-engineer --to /path/to/your/employee --apply
```

## What decides which files are safe

Every kit ships `employee.json`. Its `files` block is the classification:

| Class | Examples | What an upgrade does |
|---|---|---|
| `kit` | `CONTRACT.md`, `ROLE.md`, `routines/**`, `scripts/**` | Replaces it, but only if you have not edited it |
| `merge` | `SCHEDULE.md` | Never rewritten. The new version lands as `SCHEDULE.md.new` |
| `member` | `RELEASES.md`, `state/`, `board/`, `crm/`, `queue/`, `strategy/`, `scoreboard/`, `improvements/`, `runlog.jsonl`, `recipes/*.json` | Never read, never written |

`recipes/BROWSER-RECIPES.md` ships with the kit. Every `recipes/*.json` beside it was learned by a routine on your screens, so it is yours.

## What decides whether you edited a file

`npx ai-employees hire` writes `.installed.json`, a hash of every kit file at the moment it was installed. An upgrade compares each file against that hash:

- **Unchanged since install** and different in the new version: replaced.
- **Changed since install**: kept exactly as it is. The new version is written beside it as `<name>.new` and the file is named in the report.

This matters more than it sounds. A routine that has been running for a few weeks has usually repaired its own instructions once or twice, and those repairs exist nowhere else. An upgrade that silently overwrote them would cost you more than the upgrade gained.

## If you installed before receipts existed

Kits before 1.3.0 shipped no `.installed.json`, so an upgrade cannot prove which files you edited. It says so, treats every kit file as possibly edited, and replaces nothing in place. You get a `.new` beside each one and decide file by file. After the first `--apply` a receipt is written, and every upgrade after that is clean.

## Reading a report

```
     0  kit files unchanged since install, safe to replace
    18  new files this version adds
    18  kit files you or your employee edited, kept and written beside as .new
     1  files both sides own, never rewritten (SCHEDULE.md)
   236  files that are yours and are not read or written by this command
```

The last number is the one to look at. It is the work the employee has done since you hired it, and no upgrade path should ever move it.

## Merging a `.new` file

There is no clever tool for this and there should not be. Open the two side by side, and carry your edit forward into the new version rather than carrying the new version back into your file. The kit changelog tells you what changed and why, so you usually only need to find your own edit and re-apply it.

When you are done, delete the `.new` file. Nothing reads it.

## Your own repairs are worth sending back

When a routine hits a defect in its own instructions and fixes it, it writes the date, the routine, the trigger and the text it replaced into `improvements/CHANGELOG.md`. That is a better bug report than anything written from a desk, because it comes from a real run against a real business.

```bash
npx ai-employees contribute gtm-engineer --to /path/to/your/employee --since 2026-09-01
```

That prints a field report ready to open as an issue. **Read it before you send it.** Those lines can name your own files, your customers and your numbers, and the command redacts nothing.

From 1.7.0 on the employee also does a first pass for you. The same monthly routine reads that changelog, keeps only the repairs that would be just as right on a different business, takes your business out of them, and writes `improvements/contribution-draft-YYYY-MM.md`. The brief names the draft once. It is still yours to read before it goes anywhere, and **no routine ever opens an issue or a pull request**: you paste it into a new issue, or you delete the file.

## What an upgrade will not do for you

It does not touch your scheduler. If a new version adds a routine, its row appears in `SCHEDULE.md.new` and registering it is yours to do. It also never changes a day, a window or a budget you have set, because those are the four controls the whole design hands to you.
