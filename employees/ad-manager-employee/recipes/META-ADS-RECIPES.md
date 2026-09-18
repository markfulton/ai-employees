# Meta Ads: the production recipes

This file ships with the kit and it is read by `ads-account-intake`, `ads-account-read` and `ads-build-desk` whenever `CAPABILITIES.md` section 4b resolves an ads capability to a Meta route. It is the operational half of the contract's section 7.0: the contract says what a released channel permits, this file says how a Meta account is set up, published to and recovered, in the order a person would have wanted it the first time.

Every recipe here was written from an installation that published its first three campaigns through the Meta Ads MCP server and hit each of these dependencies one at a time. None of the identifiers below is real. Where a step names an id, the value comes from `plan/account-map.md` under `## Platform identity` and nowhere else.

Nothing in this file lifts a guardrail. A routine reaches section 3 only where `RELEASES.md` names the ad account with a released action of `prepare` or `publish`, and the browser lane never creates anything on Meta under any release: production runs through a connected route, or it does not run.

---

## 1. The dependency chain, verified in order at intake

Meta advertising through an API depends on seven things, and a failure in any one of them looks like a failure in the next. Intake verifies them in this order and records each row in `plan/account-map.md` under `## Platform identity`, with the date it was verified and the evidence path. A row it cannot verify reads `unverified (<reason>)`, never blank and never assumed from a name.

| Row | What intake verifies | How, read only | Written as |
|---|---|---|---|
| Developer app | The app the connection runs under exists and is in the mode the account needs. A development mode app can read and cannot deliver ads | The connection's own identity call names the app. Its mode is read on the app dashboard, by a person, once | `app_id`, `app_name`, `app_mode` |
| Authentication | The saved token authenticates, in the process that will run the routine, without the token ever being printed | Call the tool catalog listing and one account listing from the scheduled process itself, not from a chat session. Record the outcome, never the header | `token_owner` (the system user or person, by name), `token_verified_on`, `verified_in_scheduled_process: true/false` |
| Ad account | The account id resolves, its currency, its timezone and the actions the token is permitted on it | The account read call. Match on id, never on a name | `ad_account_id`, `account_name`, `currency`, `account_timezone`, `permitted_actions` |
| Facebook Page | The Page the ads will run under is listed on the account and the identity has advertising and insights access to it | The account's Pages listing. A Page appearing in a list proves it is visible, not that it can publish | `page_id`, `page_name`, `page_access` |
| Dataset | The conversion dataset exists, is connected to this ad account, and the identity may use it for optimisation | The datasets listing scoped to the account, then the dataset detail. Two rows carrying the same id are one dataset | `dataset_id`, `dataset_name`, `dataset_connected: true/false` |
| Media | An uploaded image resolves inside a real creative preview, not only inside the media library | Section 3, step 3. A hash that lists is not a hash that renders | recorded per creative in the receipt, not here |
| Scheduled process | The whole chain above works inside the process the scheduler starts | Section 4 | `scheduled_connection_verified_on` |

**Keep every id in its own typed field.** An app id, a business id, an ad account id, a Page id and a dataset id are all long integers and two of them will have similar names. A routine never guesses which field a number belongs to from its shape, and never copies an id from one field into another because a tool asked for one and the other was to hand.

**Verify in the scheduled process, not only in the chat session.** An interactive session may carry a decrypted token, a user session or an environment variable that the scheduled process does not inherit. The observed failure: an account read succeeded in the session that set the connection up, and the first scheduled build desk run reported that it could not decrypt the saved token. Neither result was wrong. They were two different processes. Intake records `verified_in_scheduled_process` as its own field and the install reports it as its own line.

**Business and account ids never leave the kit folder.** They belong in `plan/account-map.md` and in receipts. They never go into a routine body, a correction, a changelog line that gets contributed upstream, or any example.

---

## 2. Budget semantics, which the platform does not explain

`plan/offer.md` carries the money fields, and the contract's section 2.3 says what each one means. Three Meta facts change how a routine reads them.

**A daily budget on Meta is a pacing target, not a ceiling.** The platform may spend up to a stated multiple of a daily budget on a single day and balance it across the week. A routine that writes a daily budget into a campaign has set a pace, and it says so: the brief and the receipt call it `daily budget (pacing)` and never `daily cap`. Where the member needs a hard stop, the recorded control is the account spending limit, which the routine reads and never sets, and a lifetime campaign budget, which it sets only where the release row names it.

**Budget fields take minor units.** A tool that asks for a budget usually takes the amount in the currency's minor unit, so twenty dollars is `2000`. A routine reads the tool's own schema for the field before it writes a number, records the unit it used on the receipt, and never converts by memory.

**The aggregate is the constraint.** `## Daily cap` in `plan/offer.md` is the total across every campaign this Employee runs in the account. `## Campaign allocations` splits it. Before any create or any budget change, the routine sums the allocations of every campaign it has published that is not paused plus the one it is about to create or change, and refuses the write where the sum exceeds the cap, with a blocker naming both figures. A cap of `unresolved` or `0` refuses every write in `publish` mode and the blocker says which of the two it found.

---

## 3. The publication sequence, in `prepare` and `publish` mode

`ads-build-desk` Step 6a runs this sequence on one approved package per run. Every step writes its outcome to the receipt before the next step starts, so a run that dies between two steps leaves a receipt that says exactly how far it got, and the next run resumes from the receipt instead of creating a second campaign.

```
approved package  ->  media verified  ->  creative preview verified  ->  campaign, ad set, creative, ad created (paused)
   ->  ids recorded  ->  [publish mode only] activated, children included  ->  review status read  ->  delivery observed by account read
```

1. **The approved package.** The set's current revision hash equals the `revision` on the latest `approved` row in `creative/approvals.jsonl`. Where it does not, the set has changed since the member approved it, and the run stops here with `approval is for an earlier revision` on the card. Read `build/publication-receipts.jsonl` for the same set and revision: an existing receipt with an `ad_id` means this package is already published, so the run reconciles status and creates nothing.
2. **Media verified.** Upload each image through the connected route's own upload tool and record the returned hash or media id on the receipt. Then prove it renders: create the creative in step 4 and request a preview in step 3 before anything is activated. The observed failure: an image that listed in the media library with a valid hash produced a creative that reported `Image Not Found` at ad creation. The recovery that worked was to import the same approved image through its full resolution hosted media URL rather than its hash. Record that as a recovery you observed once, with the verification you ran, not as a rule that always works.
3. **Creative preview verified.** Request the preview for the creative on the placement the set names, with the tool's own placement value. Open the returned preview and read it back, through `web.fetch` or the browser lane, and confirm the image renders and the primary text and headline are the approved strings. A preview error explains a later generic ad creation failure more precisely than the creation error does, so it runs first. A creative whose status carries issues after a successful creation response is not usable: record the status, never activate it, and either fix the cause with a replacement object or stop.
4. **Create in dependency order, paused, and record every id the moment it returns.** Campaign, then ad set, then creative, then ad, each taking the id the previous step returned. Write `campaign_id`, `adset_id`, `creative_id` and `ad_id` to the receipt as each call returns, before the next call. A run that recorded three ids and died on the fourth resumes by creating the fourth against the three, never all four again.
5. **An uncertain response is a read, never a retry.** After a timeout, an empty body or a response the routine cannot parse, query the account for objects carrying the name and the creation window before doing anything else. A create is not idempotent. The observed failure mode is two campaigns with one name and no error anywhere.
6. **Replacement is bookkept, never improvised.** Creative media on Meta is immutable, so some repairs require a new creative and a new ad rather than an edit. A replacement is recorded on the receipt as `replaces: <old ad_id>` with the reason, and the old object is left paused and named, never deleted. Two receipts with no `replaces` link between them are a duplicate, and the run that notices files the card.
7. **Activation does not cascade.** Activating a campaign leaves its ad sets and ads in the state they were created in. In `publish` mode the routine activates the campaign, then the ad set, then the ad, reads each one back, and records all three configured statuses. In `prepare` mode it activates nothing and the receipt reads `configured_status: PAUSED` on every object.
8. **Three facts, kept apart.** `configured_status` is what the routine set. `effective_status` is what the platform reports, and a value such as pending review means the ad is with the platform and is not delivering. Delivery is impressions and spend read by `ads-account-read` in a later window. A receipt is complete when it carries the first two, and it never claims the third. The brief shows the three side by side and never collapses them into one word.
9. **The receipt.** Append one line to `build/publication-receipts.jsonl` and write the readable receipt to `build/receipt-<set slug>.md` with the Ads Manager link for the ad. Then file the card and the ledger row per Step 8 of the build desk.

---

## 4. Scheduled readiness for the connection

A connection proved in chat is not a connection proved on the schedule. Intake proves it twice.

1. In the session that sets the connection up: the tool catalog and one account read succeed.
2. In the scheduled process: the first scheduled `ads-account-read` succeeds through the same route, and its run record notes `connection verified in scheduled process`. Until that record exists, `plan/account-map.md` carries `scheduled_connection_verified_on: unverified` and the install report and every brief say so in one line.

Where the two disagree, the cause is in the environment the scheduler starts, not in the token: a secret store that unlocks for a signed in user and not for a service context, an environment variable set in one shell, a working directory that differs. The routine names the difference it can see and does not retry the write in a different way. The one thing it never does is print the token to find out.

---

## 5. Reading the account without fooling yourself

- **Reporting days are in the account's timezone, not the machine's.** Read `account_timezone` off the account and record it beside every metrics row's range. A machine in one zone and an account in another disagree about which day yesterday was, and a routine that substitutes the machine date reads a partial day as a complete one.
- **Completed days and the current partial day are two different facts.** The ledger takes completed days. The current day's figures go into the run record's notes and the brief as `today, partial, read at <time>`, never into `metrics/daily.jsonl`, and never as the headline figure beside an older complete day. A prominently displayed zero from an old complete day beside a live campaign is how a member concludes nothing is spending while it is.
- **A clean errors response is not proof of delivery.** The delivery errors tool reports the blockers it knows about. Delivery is impressions in the window.
- **A dataset that lists is not an event that fired.** The measurement states in `plan/measurement.md` are five separate facts and each is verified on its own evidence: browser events received, server events received, the purchase event received, deduplication between the two verified, attribution available. A routine reports the ones it verified and marks the rest `unverified`, and it never infers a later state from an earlier one.

---

## 6. Regression scenarios, for anyone changing this file or the build desk

A change to the publication step is tested against these before it ships. Each one was real.

| Scenario | Expected behaviour |
|---|---|
| Page listed but without advertising access | Intake row reads `page_access: unverified`; publish stops before step 4 with the row named |
| Dataset missing or not connected | Intake row reads `dataset_connected: false`; publish stops in `publish` mode unless the release row carries a measurement exception naming the campaigns, and even then the brief says purchase is unverified |
| Image hash lists, creative reports image not found | Step 2 recovery, recorded as observed; never activate the creative carrying issues |
| Create returned nothing | Step 5: query first, never re create |
| Creative approved, then the set changed | Step 1: stop, `approval is for an earlier revision` |
| Token works in chat, fails on the schedule | Section 4: report the two results as two facts, verify the process, never print the token |
| Allocations exceed the aggregate | Section 2: refuse the write, name both figures |
| Dashboard shows queued after publication | The review page reads status from the receipts file, never from a cached label; a label that disagrees with the receipt is a defect in the page |
| Campaign activated, ad still paused | Step 7: activate the children, read all three back |
