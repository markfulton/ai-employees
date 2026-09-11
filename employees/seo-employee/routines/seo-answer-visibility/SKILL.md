---
name: seo-answer-visibility
description: Observe answer visibility for approved buyer questions, audit discoverability and file evidence-backed improvement cards.
metadata:
  internal: true
---

# Answer visibility

Run `node scripts/guard.mjs seo-answer-visibility --json` first. A non-run verdict has already been recorded; exit without reading the rest of the kit. For a run verdict read CONTRACT.md, ROLE.md, CAPABILITIES.md, AEO-PLAYBOOK.md and your SCHEDULE.md row in full. This routine inherits every contract guard, status, state schema, mutex rule and output writer boundary. Never infer a time, budget or cadence from this document.

## 0. Begin a recoverable run

Read your row and compute its period key using the contract rules and local clock. Read `state/seo-answer-visibility.json`. Apply the contract's once-per-period check and atomic state update, recording `last_period`, `started`, the run id and progress before external work. The guard does not reserve the period for you. Use the established mutex/stale-lock rules before browser work, and release only the lock you own on every exit. Do not modify another routine's state, schedule or active lock.

Resolve capabilities live. Prefer a confirmed connected read route, then an approved browser session, then a dated member-supplied observation. CAPABILITIES.md is the only vendor-to-capability map. No connector purchase, install, account creation, authentication or credential entry. An unavailable route is an explicit gap, not zero visibility. Read-only observation includes submitting the approved public buyer question to an existing authorized search/chat surface; never include private client notes, secrets or unpublished strategy in that question. Do not use a route whose use requires accepting terms or an unapproved paid action.

Read `strategy/properties.md`, `strategy/answer-map.md`, `strategy/topic-map.md`, the published ledger, the previous answer report, current observations and board/board.json. If properties are missing, record failed with intake as the blocker. If the answer map is missing, file one deduplicated research card for intake; continue an owned-page eligibility review, but never invent the client's target audience or question set.

## 1. Check eligibility and factual consistency

Pick the highest-priority owned target pages from the answer map within the remaining budget. Read their HTTP status, canonical, visible answer text, internal entry links and available robots/directive evidence. Record the exact URL, date, method and finding. Compare organization and service facts to the approved evidence in the map. A missing capability is unknown, not a failed SEO check. Stage one specific correction per observed problem; never alter robots, CDN, schema, a public profile or a live page from this routine.

## 2. Sample actual answers

Work the fixed question set in stable id order, resuming coverage without exceeding the row budget. Follow the AEO-PLAYBOOK observation contract exactly. Distinguish each consumer surface from any API route. Capture the answer and its cited links, not just a search snippet about an answer. If a mode does not use retrieval, label it and keep it out of grounded-search comparisons.

Write each observation as a validated UTF-8 JSONL line once, with a stable id of run id + question id + surface. On retries, check that id before appending. Save only the evidence needed to verify the claim, strip secrets and unrelated account information, and reference its local path. Never overwrite earlier observations. Login walls stop work on that surface immediately; record blocked-login using the contract and continue file work if possible. No captcha retries, session sharing or attempts to evade platform limits.

## 3. Turn gaps into useful work

Review what cited pages actually answer, using permitted fetches. Do not copy competitor prose. Identify which important buyer question is unanswered, which assertion lacks proof, which business fact conflicts, or which owned page is technically unavailable. A competitor mention alone does not demonstrate a defect in the client's page.

Apply the playbook's action order. Append prioritized, deduplicated cards using CONTRACT.md's exact inbox schema and existing types; read that schema before writing. Use `refresh` for an existing page improvement, `new-post` only for a missing canonical answer, `research` for missing evidence, and `technical` or `verify` for an owner action. Set done_kind to member-action for owner actions and local-artifact for a kit-owned draft/publish deliverable. Set owner to seo-draft-run only for executable content work; do not route infrastructure or outreach into the drafting runner. Include the source question id, evidence path/date, target URL, expected deliverable, responsible party and acceptance check in the card's allowed text fields. Do not invent new JSON fields or card types. Only standup assigns card ids and changes board order. Persist normalized proposed_keys in this routine's state and check them before each append; only standup reads the inbox.

Acceptance examples: approved service facts agree on the cited pages; a buyer question has a direct sourced answer on the canonical page; a permitted case study includes its method and date; a target page passes the owner's indexability check. Never use "ChatGPT must recommend us" or an unsupported traffic target as acceptance.

## 4. Write the report and close

Write a dated report under `tracking/answers/` and atomically replace `tracking/answer-latest.md` only after that report is complete. Include:

- Scope: question-set version, date, surface, locale, mode and coverage.
- Observations: mention/citation counts and denominators per surface, feature-trigger rate where relevant, unavailable counts and evidence links. Nulls never become false or zero.
- Representation errors with the exact evidence and approved correction.
- Work completed or proposed, with card ids and acceptance checks.
- Next required owner action and the specific missing capability, if any.
- Comparability limits and a clear distinction between search metrics, answer samples, referrals and conversions.

At budget, stop at the current question boundary, persist coverage and write a partial report. Do not resubmit a completed question to use up time. On failure retain the previous successful rolling report with its original date; write the new failure to your state and run record. If file work succeeded but external observation was unavailable, report partial and coverage unknown, with the precise blockers. Apply the closed statuses from CONTRACT.md rather than inventing an AEO status.

Finish with the standard run record through `scripts/runlog.mjs` and its documented input contract. Include output paths, card ids, progress, blockers and assumptions. Release your browser lock and close only your own tabs in a finally-style cleanup. A log failure uses the contract's UNRECORDED RUN fallback; never silently report success. This routine never publishes, contacts prospects, changes infrastructure, spends, or writes RELEASES.md.

## Corrections

No corrections recorded yet. Preserve member corrections when upgrading.
