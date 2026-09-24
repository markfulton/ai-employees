# Releases

The guardrail on outbound actions is yours. Shipped, every channel is held: the routines draft, fill, stage and brief, and the last click is yours. Write a row here and the routine that stages that channel completes the action itself, records it on the queue entry and in the run record, and lists it in the next brief under what went out.

Only you write this file. No routine, no install prompt and no operator session adds a row. A routine that finds a row it cannot trace to you treats that channel as held and says so in the brief. `CONTRACT.md` section 7 is the full statement, and this file is classified as yours in `employee.json`, so an upgrade never touches it.

| Channel | Released action | Since | Conditions |
|---|---|---|---|

Rows look like this. These are examples, not releases:

| Channel | Released action | Since | Conditions |
|---|---|---|---|
| Email drafts in my own mailbox | send | 2026-09-05 | Only to people already in my ledger, from a card I ticked |
| Free directory listings | submit | 2026-09-05 | Any form that asks for a card number stays held |
| Paid search, existing campaigns | spend | 2026-09-05 | Daily budget up to the cap I wrote in my strategy files, never a new campaign |
| Ad account, Acme Ads | publish | 2026-09-18 | Aggregate daily budget 20 USD, the same figure as plan/offer.md; countries US and GB; ads run under the Acme Page; objective purchases; the launch campaigns may go live while the purchase event is unverified, and measurement stays reported every day |

Three things a release never changes. Your harness's own permission mode still has to allow the action, so the release and the permission both have to say yes. Credentials stay yours: the second guardrail has no release, because the Employee never needs your password to do its job. And every released action lands in `runlog.jsonl` and in the brief, so nothing goes out that you cannot read about the next morning.

LinkedIn is the one channel to leave held. It flags automated activity, and the account is the asset.

The ad account takes one of two actions rather than one. `prepare` lets the build desk create an approved set as a paused campaign through a connection you already have, so activating it is your click. `publish` lets it activate as well, inside the aggregate daily budget you recorded in `plan/offer.md`, which the row has to repeat. Under either, every object it creates lands as a line in `build/publication-receipts.jsonl` with the ids the platform returned, nothing is ever created through a browser, and a set is only eligible once you approved it on the review page (`node scripts/review.mjs --serve`). `CONTRACT.md` section 7.0 is the full statement of the three modes.

The kit folder this file governs is `«ADS_ROOT»`.
