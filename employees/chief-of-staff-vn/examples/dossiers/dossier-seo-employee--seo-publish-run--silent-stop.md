# seo-publish-run on seo-employee: việc đăng bài không có bản ghi nào từ 19/02/2026

- fault: seo-employee--seo-publish-run--silent-stop
- class: silent-stop
- open since: 2026-02-24
- employee root: D:\AgentOps\seo-employee
- routine file: D:\AgentOps\seo-employee\routines\seo-publish-run\SKILL.md
- fleet state read from: fleet/fleet.json, generated 2026-03-04

## What is happening
Việc đăng bài của nhân viên SEO khởi động mỗi sáng ngày làm việc nhưng không lần nào chạy xong. Từ 19/02/2026 chưa có bài nào được đăng, theo seo-employee runlog.jsonl line 402. Bản tin của chính nhân viên SEO cũng không báo được việc này, vì bước ghi dòng đó không bao giờ chạy tới.

## The first record that shows it
2026-02-19 | seo-employee runlog.jsonl line 402 | status ok | no blocker. This is the last record the routine wrote. Every record after it on that log belongs to another routine.

## What changed around that date
- 2026-02-19 | D:\AgentOps\seo-employee\improvements\CHANGELOG.md | "seo-publish-run | Step 4 | when the publish API returns an error, open the site editor in the browser and publish there"
- 2026-02-20 | D:\AgentOps\seo-employee\state\seo-publish-run.json | last_period has stayed at 2026-02-19 while started has moved to every weekday since, most recently 2026-03-04T09:15:05+07:00, and progress is empty

## Three candidate causes
1. The browser route added on 2026-02-19 waits on a site permission grant that the browser extension asks for the first time a site is opened, and nobody is present at 09:15 to give it | evidence: D:\AgentOps\seo-employee\improvements\CHANGELOG.md, dated line 2026-02-19, and D:\AgentOps\seo-employee\state\seo-publish-run.json, started 2026-03-04T09:15:05+07:00 with progress empty
2. The publish API has returned an error on every run since 2026-02-20, which is what sends the routine down the browser route at all | evidence: n/a (the evidence would be in files this Employee does not read)
3. The machine was asleep at the fire time | n/a (no record shows this): seo-draft-run fires at 08:00 and gtm-launch-step-runner at 09:15, and both carry a record on every weekday since 2026-02-20, seo-employee runlog.jsonl lines 403 to 446 and gtm-engineer runlog.jsonl lines 601 to 655

## What it has cost
Khi còn chạy tốt, việc này đăng một bài mỗi lần chạy ngày làm việc, theo seo-employee runlog.jsonl lines 380 to 402.
Từ 20/02/2026 đến nay, việc này đã lỡ chín lần chạy đến hạn và không lần nào để lại bản ghi. Bản ghi cuối cùng của việc này vẫn là seo-employee runlog.jsonl line 402.

## The one line to paste
Paste into: D:\AgentOps\seo-employee\routines\seo-publish-run\SKILL.md
Under the heading: "## Corrections", newest at the top
2026-03-04: since 2026-02-20 your browser route to the site editor has waited on a permission grant nobody is present to give, and no run since then has written a record. Publish through the API route only. When the API returns an error, record partial with the error class in blockers and stop. Never open the editor.

## What this does not tell you
- Vì sao API đăng bài báo lỗi ngay từ đầu. Câu trả lời nằm trong các file hàng đợi của việc đăng bài, em không đọc các file này. Anh/chị mở các file đó và xem các mục ngày 20/02/2026.

## History
- 2026-02-24 | first written, silent-stop, open since 2026-02-24
- 2026-02-25 | rewritten, cause ranking unchanged
- 2026-02-26 | rewritten, cause ranking unchanged
- 2026-02-27 | rewritten, cause ranking unchanged
- 2026-03-02 | rewritten, cause ranking unchanged
- 2026-03-04 | rewritten, cost section updated from seo-employee runlog.jsonl
