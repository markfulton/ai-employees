# Upgrading an employee

An installed employee is two things sharing one folder. The **kit** is ours: the contract, the role, the routines, the scripts. The **business it has been running** is yours: its evidence, its ledgers, its strategy, the browser flows it learned on your own screens, and the repairs it made to its own instructions.

An upgrade replaces the first and never touches the second. Everything on this page exists to make that guarantee real rather than hopeful.

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

## What an upgrade will not do for you

It does not touch your scheduler. If a new version adds a routine, its row appears in `SCHEDULE.md.new` and registering it is yours to do. It also never changes a day, a window or a budget you have set, because those are the four controls the whole design hands to you.
