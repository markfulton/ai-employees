# What it costs to run

This is the first question anyone asks. The short answer: on a Claude subscription, nothing beyond the subscription. The long answer is below, with the dates, the method and the price table, so you can check it. Nothing on this page is an estimate except where it says so.

## The short version

- **On a Claude Pro or Max plan, an employee costs no dollars.** It runs inside Claude Code on your own seat, which is also what the browser lane needs. What it spends is a share of your plan's usage limits.
- **How big a share, measured on my own seat:** over ten days, 2026-08-27 to 2026-09-05, the GTM Engineer's scheduled runs were about **6 percent** of everything this machine sent to Claude. The other 94 percent was me working in Claude Code all day. One employee is a small slice of one Max 20x seat, and by that measure a seat carries several employees alongside a working day. Anthropic publishes no token quota per plan, so that is a measurement of my machine, not a promise about yours.
- **On an API key, for reference:** about **$19** of Opus 5 usage at list price on a plain weekday, about **$27** on Monday and Friday, about **$500 a month** for one employee. Two thirds of that is cache reads, because every turn re-reads the kit's documents. An API key also loses the browser lane, so it is the expensive way to run these, not the normal one.
- **Every run used `claude-opus-5`** with the 1M context window, through the Claude Desktop app's scheduler. Nothing here has run on any other model, so there is no Sonnet number on this page.
- **A skipped fire** on the live 1.0.0 install costs about **$0.90 to $1.10** of API equivalent usage and 1.3 to 2.2 minutes, because the session still starts, loads the routine and reads the schedule before it exits. `scripts/guard.mjs` in 1.2.0 and later runs before the routine's documents are read and should cut that; I have not re-measured it on a live install yet and will replace this line when I have.
- **Install day** cost about **$68** API equivalent in a warm operator session across two days. A cold session pays less per turn and needs more turns; I do not have a clean number for it.

## Where the numbers come from

Every scheduled `gtm-*` session the Claude Desktop app started on my machine between 2026-08-26 and 2026-09-04: 42 sessions, all with a transcript. Each transcript was summed per assistant message, deduplicated by message id, and priced at API list rates. 27 are clean scheduled runs and make the table below. Excluded from the means: 8 skipped fires, listed separately; 5 sessions I picked up by hand afterwards as operator sessions, which ran for hours and are not what a routine costs; and 2 operator sessions that happened to carry a GTM title. The whole machine comparison sums every assistant message in every Claude Code transcript on the machine over the same window, 15,875 messages, priced at Opus 5 rates for all of them, which understates the machine total because a fifth of those messages ran on Fable 5 at double the price. So 6 percent is a ceiling on the employee's share.

Prices used, per million tokens: Opus 5 input $5, output $25, cache write $6.25, cache read $0.50. Flat pricing was applied to the 1M context model.

## Per routine, GTM Engineer, Opus 5, API list price

| Routine | Clean runs | Mean | Min | Max | Mean output tokens | Mean cache read tokens | Mean turns | Mean wall minutes |
|---|---|---|---|---|---|---|---|---|
| gtm-signal-sweep | 6 | $4.38 | $3.42 | $5.86 | 28,191 | 5.81 M | 48 | 9.8 |
| gtm-board-standup | 5 | $5.54 | $4.94 | $6.44 | 55,385 | 6.47 M | 47 | 12.6 |
| gtm-outreach-queue | 6 | $3.35 | $2.21 | $4.24 | 19,872 | 4.22 M | 33 | 5.9 |
| gtm-launch-step-runner | 6 | $6.22 | $4.22 | $9.68 | 31,500 | 8.86 M | 57 | 10.8 |
| gtm-paid-and-tracking-guard | 1 | $7.16 | | | 50,822 | 9.73 M | 69 | 24.0 |
| gtm-scoreboard | 2 | $7.50 | $7.37 | $7.64 | 51,771 | 10.09 M | 62 | 15.6 |
| gtm-intake-and-dashboard, monthly | 1 | $3.84 | | | 26,222 | 4.66 M | 36 | 7.7 |
| gtm-icp-refresh, monthly | 1 (picked up by hand, an upper bound) | $4.84 | | | 37,396 | 4.85 M | 41 | |
| A skipped fire, any routine, 1.0.0 install | 8 | $0.99 | $0.88 | $1.14 | 3,984 to 6,055 | 0.88 to 1.19 M | 11 to 14 | 1.3 to 2.2 |

Cache reads are 66 percent of the clean runs' cost and output tokens 17 percent. Each turn re-reads the contract, the role, the capabilities file, the schedule and the routine's own instructions, roughly 225 KB of documents plus a 62 to 94 KB routine file. That is the single largest cost lever and it is the split described at the end of this page.

## Per day, per month

| Scope | Opus 5, API list price |
|---|---|
| Plain weekday (sweep, standup, outreach, step runner) | $19.49 |
| Monday (adds the paid guard) | $26.65 |
| Friday (adds the scoreboard) | $27.00 |
| One employee, 30 day month (22 weekdays, 4 Mondays, 4 Fridays, one intake, one refresh, a dozen skips) | about $500 |
| Install day, once | $68, warm operator session |

The other seven employees have not yet run on a schedule anywhere, so there is no line for them. They will get real numbers as I run them on my own business.

## What a subscription actually covers

Anthropic publishes no token or dollar quota per plan, so a plan cannot be mapped to the table exactly. What their pages say: the free plan does not include Claude Code; Pro and Max share usage across Claude and Claude Code; Max has a session limit that resets every five hours plus a weekly limit across all models. What my machine says: on a Max 20x seat, the GTM Engineer's scheduled runs were 6 percent of ten days of heavy use, and the runs land at fixed times inside the same five hour windows I use interactively. I have not run an employee on Pro, so I will not tell you how many fit there.

The only way to turn the table into dollars is an API key, and an API key loses the browser lane, which most of these routines need. Run them on a seat.

## Making cost a field, not a guess

`scripts/runlog.mjs` accepts nine optional fields on a run record: `model`, `harness`, `turns`, `input_tokens`, `output_tokens`, `cache_write_tokens`, `cache_read_tokens`, `cost_usd`, and `cost_basis` (`api-list`, `subscription`, or `unknown`). They are counts and prices only, never required, and the refusal rules on the rest of the record are untouched. On the CLI, `claude -p --output-format json` prints `total_cost_usd` and the token counts on exit; the launcher in `run/` writes that JSON to `run/<id>.last.json`. A flag that attaches those numbers to the record the routine just wrote is not built yet, and until it is the fields get filled by the routine's own last step where a harness exposes them, or stay absent.

## What is deferred, and said here so nobody assumes otherwise

- **The root documents are not yet split into a short law section read every run and a reference section read on demand.** That split is the single largest cost lever, because cache reads are two thirds of every run. The numbers on this page are the pre split numbers.
- **The skip cost has not been re-measured on an install that carries `guard.mjs`.** The mechanism is in place; the number will follow.
- **No run of the other seven kits, no macOS or Linux run, no run on any model but Opus 5.** Every line above says which it is.
