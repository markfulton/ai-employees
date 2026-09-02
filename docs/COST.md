# What it costs to run

This is the first question anyone asks, so here are the measured numbers, the dates, and the price table they were computed with. Nothing on this page is an estimate except where it says so.

## The short version

- A plain weekday of the GTM Engineer on Opus costs about **$20** of API equivalent usage. Monday and Friday, which add the paid guard and the scoreboard, about **$27**. About **$513 a month** for one employee.
- The same tokens repriced at Sonnet rates come to about **$8 a weekday** and about **$205 a month**. That is a repricing, not a run; I have not yet run the kit on Sonnet.
- A skipped fire used to cost about **$1** and one to two minutes, because the guards ran after the routine had read about 225 KB of contract documents. `scripts/guard.mjs` now runs before any document is read, so a skip should cost cents. I have not re-measured it since the change, and I will update this line when I have.
- Install day cost **$68** measured in a warm operator session across two days. A cold session pays less per turn and needs more turns; I do not have a clean number for it yet.
- On a Max 20x plan one employee fits comfortably in my experience; on Pro it will hit the weekly limit; on an API key it costs what the table says and loses the browser lane.

## Where the numbers come from

29 production runs of the GTM Engineer on my own machine, 2026-08-27 to 2026-09-02, fired by the Claude Desktop app's local scheduler, model `claude-opus-5` with the 1M context window. Every run's transcript was summed per assistant message (deduplicated by message id) and priced at API list rates. Five sessions I resumed by hand as operator sessions are excluded from the means; skip fires are listed separately.

Prices used, per million tokens, from the price table dated 2026-06-24: Opus 5 input $5, output $25, cache write $6.25, cache read $0.50. Sonnet 5 input $2, output $10, cache write $2.50, cache read $0.20. Flat pricing was applied to the 1M context model; whether a long context premium applies is not verified, so treat the Opus numbers as a floor.

## Per routine, GTM Engineer, Opus

| Routine | Clean runs | Mean | Min | Max | Mean output tokens | Mean cache read tokens | Mean turns | Mean wall minutes |
|---|---|---|---|---|---|---|---|---|
| gtm-signal-sweep | 5 | $4.31 | $3.42 | $5.86 | 27,117 | 5.70 M | 47 | 9.6 |
| gtm-board-standup | 3 | $5.42 | $4.94 | $5.93 | 53,309 | 6.38 M | 47 | 12.2 |
| gtm-outreach-queue | 4 | $3.17 | $2.21 | $3.94 | 19,531 | 4.02 M | 33 | 6.1 |
| gtm-launch-step-runner | 4 | $7.10 | $4.45 | $9.68 | 35,933 | 10.36 M | 67 | 12.6 |
| gtm-paid-and-tracking-guard | 1 | $7.16 | | | 50,822 | 9.73 M | 69 | 24.0 |
| gtm-scoreboard | 1 (a blocked login run) | $7.37 | | | 39,082 | 10.48 M | 64 | 14.0 |
| gtm-intake-and-dashboard, monthly | 1 (partial) | $3.84 | | | 26,222 | 4.66 M | 36 | 7.7 |
| gtm-icp-refresh | 1 (resumed by hand, an upper bound) | $4.84 | | | 37,396 | 4.85 M | 41 | |
| A skipped fire, any routine, before guard.mjs | 5 | $1.00 | $0.91 | $1.14 | 3,984 to 6,055 | 0.89 to 1.19 M | 11 to 14 | 1.3 to 2.2 |

Cache reads are 51 to 73 percent of every run's cost, because each turn re-reads the contract, the role, the capabilities file, the schedule, and the routine's own instructions, roughly 225 KB of documents plus a 62 to 94 KB routine file.

## Per day, per month, per fleet

| Scope | Opus, measured | Sonnet, repriced from the same tokens, not run |
|---|---|---|
| Plain weekday (sweep, standup, outreach, step runner) | $20.00 | about $8.00 |
| Monday (adds the paid guard) | $27.16 | about $10.90 |
| Friday (adds the scoreboard) | $27.37 | about $11.00 |
| One employee, 30 day month (22 weekdays, 4 Mondays, 4 Fridays, one productive intake plus skips, one productive refresh plus skips) | about $513 | about $205 |
| Install day, once | $68, warm operator session | |
| Eight employees, one month | about $4,100 | about $1,640 |

The eight employee line assumes each has the GTM Engineer's shape. The other seven have not yet run on a schedule anywhere, so that line is arithmetic, not a measurement. It will be replaced with real numbers as I run them on my own business from launch day.

## What a subscription actually covers

Anthropic publishes no token or dollar quota per plan, so a plan cannot be mapped to the table exactly. What can be said from their pages: the free plan does not include Claude Code; Pro and Max share usage across Claude and Claude Code; Max has a session limit that resets every five hours plus a weekly limit across all models. One employee on Opus is about $513 a month of API equivalent usage, which is five times the Max 5x sticker price and two and a half times Max 20x, and it runs at fixed times inside the same five hour windows you use interactively. My own machine sustains more than one employee's worth on a subscription, which is the basis for the plan line above. It is my experience, not a guarantee.

## Making cost a field, not a guess

`scripts/runlog.mjs` now accepts nine optional fields on a run record: `model`, `harness`, `turns`, `input_tokens`, `output_tokens`, `cache_write_tokens`, `cache_read_tokens`, `cost_usd`, and `cost_basis` (`api-list`, `subscription`, or `unknown`). They are counts and prices only, never required, and the refusal rules on the rest of the record are untouched. On the CLI, `claude -p --output-format json` prints `total_cost_usd` and the token counts on exit; the launcher in `run/` writes that JSON to `run/<id>.last.json`. A flag that attaches those numbers to the record the routine just wrote is not built yet, and until it is the fields get filled by the routine's own last step where a harness exposes them, or stay absent.

## What is deferred, and said here so nobody assumes otherwise

- **The root documents are not yet split into a short law section read every run and a reference section read on demand.** That split is the single largest cost lever (cache reads are most of every run) and it is v1.3.0 work. The numbers on this page are the pre split numbers.
- **The skip cost has not been re-measured since `guard.mjs` shipped.** The mechanism is in place; the number will follow.
- **No Sonnet run, no macOS run, no run of the other seven kits.** Every line above says which it is.
