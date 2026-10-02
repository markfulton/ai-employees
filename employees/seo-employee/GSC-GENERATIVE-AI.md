# Google Search Console Generative AI measurement

Verified against Google documentation on 2026-10-02. Recheck the sources when the live interface changes:

- [Google announcement and rollout update](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- [Search report definitions](https://support.google.com/webmasters/answer/16984139)

The native Search report measures **impressions** of site links in AI Overviews and AI Mode. Discover has a separate report. These are not Gemini app mentions, unique people, clicks or conversions. AI data is also included in overall Search reporting; do not add it to Web totals. Retain exact provider labels.

## Existing owners

`seo-intake-and-map` records the exact property id, access route and native report availability in `strategy/properties.md`. `seo-answer-visibility` collects the native report during its existing run before spending remaining budget on sampled answers. It alone appends `tracking/generative-ai/observations.jsonl` and writes `tracking/generative-ai-latest.md`. `seo-rank-review` reads that report and includes the metric and source/date in the existing scorecard. `seo-standup` includes meaningful changes, gaps and the next content action in the existing brief. Calendar refill and drafting use findings through existing owned cards. No new scheduled routine.

## Read the native report

Resolve `search.generative-ai.read` live. Prefer a confirmed read connector only if it explicitly exposes this report; ordinary Search Analytics Web results are not a substitute. Otherwise use the authorized browser, select the verified property and **Performance > Generative AI**. A known Search report URL has the form `https://search.google.com/search-console/performance/search-analytics/ai?resource_id=<URL-encoded-property-id>`. Build it from the member's property map, never from a shipped real account.

Verify property, report label, displayed date range and filters after navigation. Read the chart total and useful page/country/device/date rows within the existing budget. Reporting dates use Pacific time. Retain aggregation: page rows can differ from the property total. Mark preliminary periods and avoid treating them as settled changes. Preserve current search-type filters, including text or multimodal where shown. A missing report is an access/availability gap, never evidence of zero visibility.

Exports can turn unavailable display markers into zeros. Preserve unknown values as null; confirm a numerical zero against the interface before treating an exported zero as measured. Capture only the necessary evidence and strip unrelated account details before sharing.

## Validated observations

Use schema 1 and fields `id`, `property`, `report` (`gsc-generative-ai-search` or `gsc-generative-ai-discover`), `metric: impressions`, `start_date`, `end_date`, `captured_at`, `timezone: America/Los_Angeles`, `dimension` (property, page, country, device or date), `dimension_value` where applicable, `aggregation` (property or page), `filters`, `preliminary`, `availability` (available, unavailable or not-reported), `value` (integer or null), `display_value`, `reason` when unavailable, `evidence` and `source` (ui, export or api). A verified API route also needs `native_report_verified: true`; an exported numerical zero needs `numeric_zero_verified: true`.

An id identifies one capture, property, scope and dimension row. Check existing ids before appending; never overwrite earlier observations. Validate the candidate JSONL with `node scripts/gsc-ai.mjs --input <file>` before append, then validate the complete ledger. Preserve an invalid input as diagnostic evidence and report the gap instead of deleting history. The helper is read-only and does not connect to Google.

Compare equal completed reporting windows with matching property, filters, dimensions and aggregation. Keep sampled question coverage and mention rates in the answer-observation ledger; never mix them with these native impressions. Keep GA4 referrals and qualified conversions separate too. If prior comparable data is absent, establish a baseline.

## Act on the metric

Use page-level observations to prioritize a sourced answer improvement on a relevant canonical page, investigate an evidenced eligibility issue, or prepare a question the existing content does not answer. Record a hypothesis and review checkpoint using WORK-CYCLE.md. Visibility alone does not prove business value or causal lift. Continue permitted content work if the report cannot be read; name the exact gap and next check without asking for access already available to the employee.
