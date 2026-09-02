# The publishing standard

One file. Five routines read it. It holds the rules that are true of every property and every article, so that no routine carries its own copy of them.

`seo-draft-run` and `seo-publish-run` read it in full at the top of every run. `seo-calendar-refill` reads it for the research procedure and the source verification rule. `seo-rank-review` reads it for the end of run report shape. `seo-intake-and-map` reads it so that the conventions it writes into a property block do not contradict it.

**Where a routine and this file disagree about research, authority links, heroes, alt text, or the report, this file wins.** That is what it is for. A rule copied out of here into a routine body is a rule that will drift, and then one of the two copies teaches the wrong thing to whichever routine happens to read it.

**Where this file and `CONTRACT.md` disagree, `CONTRACT.md` wins.** Nothing here relaxes a stop, the save test, or the rules on what may be pressed.

**Who writes it.** It ships with the kit. `seo-draft-run`, `seo-publish-run`, and `seo-calendar-refill` amend it surgically when one of them learns something true of every property: replace the specific block that was wrong, never rewrite the file, never reorder it, and never touch the `## Corrections` section, which is the member's. Every amendment appends one line to `improvements/CHANGELOG.md` carrying the date, the trigger, and the full text it replaced, and names itself in the run record.

---

## 1. Competitor research

Everything an article claims about the field comes from a result set pulled in the run that wrote it.

### 1.1 Fix the target before you spend a call

Write down, before any search: the primary keyword verbatim from the specification, the secondary keyword where the entry names one, the country the property sells into from its block in `strategy/properties.md`, and the competitors the calendar entry named. **A result set pulled without the country is a result set for somewhere else.**

### 1.2 Pull the result set, batched

Use `web.search`, and **batch every keyword for this piece of work into one call.** Search is a shared, budgeted resource on some harnesses, and one call carrying three keywords costs a fraction of three calls carrying one each.

Take **three to six currently ranking pages.** Fewer than three and the field has not been seen. More than six and the writing budget is being spent on reading.

**Reject a result before you fetch it**, and never spend a fetch confirming one of these:

- It is the member's own page.
- It is a sibling property in the member's own roster.
- It is a result set page rather than an article.
- It is an aggregator whose whole content is outbound links.

None of those is a competitor and all four burn a fetch.

**If the calendar entry names competitors that no longer rank, beat what ranks now.** The entry was written when it was written. The result set is today.

### 1.3 Read each source, fetch first

`web.fetch` first, every time. It needs no browser, takes no mutex, and costs no lane time, and it is the route for the overwhelming majority of sources.

**A source that refuses a fetch** returns nothing, returns a challenge page, or returns a body with no article text in it. Only for that source, take the browser and read the page. **Never retry a refusal a different way.** A page behind a sign in wall or a challenge is a `login-wall`: stop that source immediately, change nothing, enter nothing, mark it `n/a (source refused)`, and take the next ranking page instead. There are always more.

**One unreadable source never aborts the phase and never counts against the source cap.** A run of three challenge pages is not three sources read.

### 1.4 What to take from each source

- Word count.
- Headings, and the subtopics they cover.
- Data and statistics cited, with the source each one names.
- Format: tables, lists, FAQs, worked examples.
- The search intent it satisfies.
- **Its gaps**, which is the part that actually matters: what it does not cover, where its figures are out of date, and which reader questions it answers badly or not at all.

**Never cite a competitor as an authority.** A page you are trying to outrank is not a source, and linking to it hands it the signal you were trying to earn.

### 1.5 Every statistic is verified at its own primary source

**Fetch the primary source, this run, and confirm the figure is there.** Not the page that quoted it. Not a page that quoted the page that quoted it.

**If a figure cannot be verified this run, write around it.** A number in a published article is a promise the member has to stand behind, and it stays on their page for years.

Where a primary source will not open to an automated fetch, and some will not however valid they are, either cite a reputable independent source reporting the same figure, or state the figure as a range with the month it was read. **Never enter a figure nobody could open.**

---

## 2. The research is internal and it is invisible in the article

This is the single most repeated defect in this kind of work, and it is what separates an article from a report about articles.

**State a finding as a fact about the world, never as the outcome of a survey.**

> "Transfer locks expire sixty days after a registrar change" is a fact about the world.
>
> "None of the top ranking guides mentions the sixty day transfer lock" is a survey result, and it tells the reader something about the process rather than about their problem.

**These phrasings are banned from the body, the excerpt, the description, and the FAQ**, in every form: the top ranking pages, every guide I read, most articles on this topic, no competitor covers, search intent, target keyword, keyword research, the SERP, the first page of results, and any count of pages, guides, articles, or competitors.

`copy.check` fails them on `--dest article` and `--dest plain`. **The rule is about the shape of the sentence, not about a word list**, so rewording a survey into a synonym does not pass it and is not the fix. Rewrite the sentence as a fact about the world.

**A comparison to a named competitor is allowed only where the specification asks for one and the claim is verifiable.** A comparison table between the member's product and two named alternatives is legitimate content. A sentence saying those two alternatives rank above this article is not.

**The internal competitor note lives in `drafts/<slug>/notes.md`.** It never ships to a property and `seo-publish-run` never reads it into a body. It exists so that a refresh six months from now can see what the field looked like today.

---

## 3. Authority links, which are required

**Two to three outbound links, to high authority, non competing sources, with descriptive anchor text.** Original research, primary data, a standards document, or a reputable industry report. Linking out to credible sources is itself a quality signal, so treat these as required rather than optional.

**A draft with fewer than two does not get marked ready.**

**Fetch every one at draft time.** A link that does not resolve, that resolves to a parked page, or that redirects somewhere unrelated is swapped for a verified alternative, and the swap is recorded with both URLs. Record the check date on each link in `meta.json` so a refresh a year from now knows how stale the verification is.

**Fetch them again immediately before the publish.** A link that has died between drafting and publishing is removed from the body and named in the run record. **A dead outbound link on a live article is worse than a missing one**, and the member is the one it embarrasses. If removing one leaves fewer than two, the draft goes back with a blocker naming the shortfall rather than publishing short.

**Do not link something nobody could open.** Where a primary source will not open, section 1.5 gives the two ways round it, and neither is a link.

**Never link a competitor's marketing page, marketplace page, or product page as an authority**, and never link a page from the source set the article was written against.

Render each link in the property's own format: a real anchor with descriptive text, followed rather than marked nofollow, in whatever markup that property uses. `strategy/properties.md` carries the format per property.

### 3.1 The autolinker trap, which costs real links

Some publishing surfaces rewrite any dotted token sitting bare in prose into a link, and a bare domain in a sentence becomes a dead link the moment it publishes. One surface once turned dozens of them into dead links on a single live page.

**The check is the one that caught it: strip the real URLs out of the text, then look at what is left for dotted tokens.** Write each one as a real link, or break the token.

`seo-draft-run` runs it on the body before the draft is marked ready, and `seo-publish-run` runs it again on the rendered live page, because a surface that rewrites tokens does it at publish time and the draft looks clean. Catching it at draft time is far cheaper than catching it after.

---

## 4. Internal links

**Every internal link points at a page that exists on the same property, right now.** Resolve each one against the folded `content/published.jsonl` and, where the property has a repository, against the file on disk.

**Never link forward to an article that has not published.** The specification is written ahead of the calendar, and an entry that is still pending is not a page. A link the specification named that does not exist yet is dropped, with one line in the run record.

**A link out from an existing pillar article to a new one is made after the new one is live, not before.** `seo-draft-run` writes it into `meta.json` as a pending internal link naming the pillar's slug and the anchor text, and `seo-publish-run` makes it once the article is up. A link into an article that does not exist yet is a dead link on a live page.

That edit is bounded: **one link, in one named file, and nothing else in that file changes.** It is the only edit this kit ever makes to a published article that is not the one being published.

---

## 5. The hero image

The property's own dimensions, format, hero path, and brand style clause live in its block in `strategy/properties.md`. What follows is the procedure and the two limits, and both limits are hard.

### 5.1 Build a prompt that carries this article's thesis

**A concrete scene doing the thing the article is about, with objects from the article in it.** Never a generic scene of a person at a desk with papers, and never an abstract gradient that would fit any article on any property.

**Reuse the property's own brand style clause verbatim**, so the property stays visually consistent across months of articles.

### 5.2 The no text constraint, which is quoted verbatim into every prompt

End every prompt with this, exactly as written. **Do not paraphrase it and do not soften it.** The softer wordings fail: generation routes reliably invent figures, amounts, dates, and scores, and echo prompt words back as nonsense labels.

> No text of any kind anywhere in the image. No words, no letters, no numerals, no digits, no percentages, no currency amounts, no dates, no scores, no ratings, no labels, no captions, no titles, no watermarks, no logos, no brand marks, no signage, no user interface chrome, no charts with axis labels, no legends, and no invented metrics. Nothing that reads as writing. If a surface in the scene would normally carry text, leave that surface blank.

**A published hero carrying an invented number is a fabricated claim shipped as an image**, and it is not recoverable by editing the post later, because the member already published it.

Where a property's block names an allow list of tokens its brand style genuinely requires, that allow list is valid only for the exact tokens it names, everything outside it stays banned, and the review in 5.3 still runs in full.

### 5.3 Read the image back, and regenerate once

**Read the generated file.** Not the prompt, and not the route's own success message.

Reject and regenerate any hero that carries numerals, invented metric names, leaked prompt words, garbled text, or a metaphor that contradicts the article.

**One regeneration, then stop.** On the second failure, drop the hero: one line in the run record naming the slug and what was wrong, no `hero` key in `meta.json`, and the run carries on.

### 5.4 Compress, and respect the injection ceiling

`image.compress` resizes and re-encodes to the property's hero dimensions while keeping the image presentable. The target is the injection ceiling, and the ceiling is not a suggestion.

- Encoded characters run roughly **1.4 per image byte**.
- The budget is about **24,000 encoded characters**, roughly a **17 KB WebP**.
- **Over 30,000, do not proceed.**

An oversized image does not fail loudly on the publish side. It wedges the call, and the run that hits it loses the whole publish, not just the picture.

Record the encoded character count in `meta.json` as `hero_encoded_chars`. `seo-publish-run` reads that number and refuses to inject anything above the ceiling, so **an honest count at draft time is what makes the publish safe.** Never leave it out to make a downstream check pass.

**A hero that will not fit after one compression attempt is dropped**, exactly as in 5.3. Never compress a third time and never ship above thirty thousand.

### 5.5 The rule that governs all of it

**An article published on time without a hero is a success. A run that stalled on a hero is not.** Every step above has a cap and a stated fallback for that reason.

---

## 6. Alt text

**Alt text is a short, keyword rich string built on the article's primary target keyword.**

For a keyword of `domain pricing compared`, the alt text is `Domain Pricing Compared`. That is the whole form.

It is **not** a sentence describing the illustration's scene or its composition. It is **never** the generation prompt or any of its style words. It is not a caption. It is not a paragraph. It is not the title.

**This is the single rule in this kit that drifts back the fastest.** Every time an agent writes alt text describing what is in the picture, it has to be corrected, and the correction has to be written down again. It is written here once so that five routines read the same sentence.

Write it into `meta.json` as `alt`, and write it **even where the hero was dropped**: the property may render an image the member adds later, and the string is one line.

`seo-publish-run` sets the alt attribute from that string and from nothing else, and confirms it on the rendered live page.

---

## 7. The end of run report

Every routine writes exactly one run record through `runlog.append`, to the schema in `CONTRACT.md` section 4. What belongs here is the standard the report holds itself to, which is the same one for all seven.

**Report what you did, never what you intended.** If six sources were planned and four were read, the number is four. If twelve requests were budgeted and the allowance refused after nine, the number is nine. If a block of thirty entries was planned and twenty eight could be defended, the number is twenty eight.

**Report what you produced, what drifted, and what blocked. Never a list of what passed.** Silence on a check means it was fine. A report that narrates every clean step is a report nobody finishes reading, and the one line that mattered is at the bottom of it.

**Never report your own mechanics.** Window guards, cursors, fold counts, and phase names are not news. They belong in `seo-latest.md`, which is the machine facing file, and nowhere near anything the member reads with a coffee.

**Where a number does not exist, use the vocabulary rather than an estimate:**

`n/a (<reason>)` `not tracked` `stale (<date>)` `source refused` `no search capability` `no browser control capability configured` `nothing ready to publish` `nothing needed refilling` `baseline week` `no comparison (windows of 7 and 14 days)` `below the rate floor, no rate computed` `no row (below the reporting floor or zero)`

Pick one and say why.

**What never goes in a run record:** an article body, a headline, a description, an excerpt, an FAQ question, a quote read off a page, a keyword, a person's name, a secret, a credential, or a URL carrying one. The record carries counts, card ids, slugs, file paths, live URLs on the member's own properties, and blockers. The detail stays in the draft folders, the scoreboards, and the digest, all of which stay inside `«SEO_ROOT»`.

**A blocker is written so a member can read it cold with no context.** `"the search performance console asked for a sign in, nothing entered"` rather than `"auth error"`. The standup prints them verbatim in the morning, so the wording in the record is the wording the member reads.

---

## 8. When you learn something that belongs here

**Amend this file rather than your own.** A rule about research, authority links, heroes, alt text, or the report is true of every property, and a fix here fixes every publishing routine at once.

1. Replace the specific block that was wrong. Never rewrite this file whole, never reorder it, and never touch `## Corrections`.
2. Append one line to `improvements/CHANGELOG.md` carrying the date, the trigger, and **the full text you replaced**. That line is the member's undo.
3. Put one short string in the run record `notes` naming the change.

**Never write an amendment that relaxes a stop, the save test, the rule that every statistic is verified at its own primary source, the no text constraint, the injection ceiling, or the alt text form.** A run drafting such an edit has found a defect in its own reasoning, not a new permission. **An amendment can make allowed work better. It can never widen what is allowed.**

A rule about one property goes in `operator_notes` in that property's block, through a card for `seo-intake-and-map`, which is that file's only writer. A rule about one site's screens goes in the flow file. A rule about any site goes in `recipes/BROWSER-RECIPES.md`. A rule about one routine goes in that routine's own file.

---

## Corrections

Format: one line per correction, newest at the top, `YYYY-MM-DD: what was wrong, what to do instead.` Write your own here. Every routine that reads this file reads this section with it, and a line here outranks the guidance above.
