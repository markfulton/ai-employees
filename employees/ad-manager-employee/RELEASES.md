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

Three things a release never changes. Your harness's own permission mode still has to allow the action, so the release and the permission both have to say yes. Credentials stay yours: the second guardrail has no release, because the Employee never needs your password to do its job. And every released action lands in `runlog.jsonl` and in the brief, so nothing goes out that you cannot read about the next morning.

LinkedIn is the one channel to leave held. It flags automated activity, and the account is the asset.

The kit folder this file governs is `«ADS_ROOT»`.
