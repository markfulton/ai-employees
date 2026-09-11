#!/usr/bin/env node
/** Validate sampled answers and compute honest denominators. No network or file writes. */
import fs from "node:fs";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

export function summarize(rows) {
  const groups = new Map(), seen = new Set();
  for (const row of rows) {
    for (const key of ["id", "run_id", "question_set", "question_id", "question", "surface", "locale", "mode", "personalization", "captured_at"])
      if (typeof row[key] !== "string" || !row[key].trim()) throw new Error(`Missing ${key}`);
    if (Number.isNaN(Date.parse(row.captured_at))) throw new Error("Invalid captured_at");
    if (seen.has(row.id)) throw new Error(`Duplicate observation ${row.id}`);
    seen.add(row.id);
    if (typeof row.available !== "boolean" || typeof row.answer_present !== "boolean") throw new Error("Availability and answer presence must be explicit");
    if (!row.available && row.answer_present) throw new Error("An unavailable surface cannot have an observed answer");
    if (row.schema !== 1 || !(row.model === null || typeof row.model === "string")) throw new Error("Invalid observation schema or model");
    if (!Array.isArray(row.cited_urls) || row.cited_urls.some(u => { try { return !["http:", "https:"].includes(new URL(u).protocol); } catch { return true; } })) throw new Error("Invalid cited_urls");
    const eligible = row.available && row.answer_present;
    if (eligible) {
      if (typeof row.mentioned !== "boolean" || typeof row.cited !== "boolean") throw new Error("Observed answers need explicit mention and citation values");
      if (typeof row.evidence !== "string" || !row.evidence) throw new Error("An observation needs evidence");
      if (row.cited && !row.cited_urls.length) throw new Error("A citation needs a URL");
    } else if (row.mentioned !== null || row.cited !== null) throw new Error("Unavailable or absent answers must use null, not false");
    if (!row.available && (typeof row.unavailable_reason !== "string" || !row.unavailable_reason)) throw new Error("Unavailable needs a reason");
    // A model API and a consumer search surface must have different surface/mode labels.
    const key = JSON.stringify([row.run_id, row.question_set, row.surface, row.locale, row.mode, row.model, row.personalization]);
    const g = groups.get(key) ?? { run_id: row.run_id, question_set: row.question_set, surface: row.surface, locale: row.locale, mode: row.mode, model: row.model, personalization: row.personalization, attempts: 0, available: 0, observed_answers: 0, unavailable: 0, no_answer: 0, mentions: 0, citations: 0, questions: new Set() };
    g.attempts++; g.questions.add(row.question_id);
    if (!row.available) g.unavailable++;
    else { g.available++; if (!row.answer_present) g.no_answer++; }
    if (eligible) { g.observed_answers++; if (row.mentioned) g.mentions++; if (row.cited) g.citations++; }
    groups.set(key, g);
  }
  return [...groups.values()].map(({ questions, ...g }) => ({ ...g, questions_attempted: questions.size,
    mention_rate: g.observed_answers ? g.mentions / g.observed_answers : null,
    citation_rate: g.observed_answers ? g.citations / g.observed_answers : null,
    answer_trigger_rate: g.available ? g.observed_answers / g.available : null }));
}
function selftest() {
  const a = { schema: 1, run_id: "r1", id: "r1:q1:surface", question_set: "v1", question_id: "q1", question: "Which service fits?", surface: "consumer-search", locale: "en-US", mode: "search", model: null, personalization: "fresh conversation", captured_at: "2026-09-11T10:00:00Z", available: true, answer_present: true, mentioned: true, cited: true, cited_urls: ["https://example.com/service"], evidence: "capture.txt" };
  const blocked = { ...a, id: "r1:q2:surface", question_id: "q2", available: false, answer_present: false, mentioned: null, cited: null, cited_urls: [], unavailable_reason: "login required" };
  const absent = { ...a, id: "r1:q3:surface", question_id: "q3", answer_present: false, mentioned: null, cited: null, cited_urls: [] };
  const negative = { ...a, id: "r1:q4:surface", question_id: "q4", mentioned: false, cited: false, cited_urls: [] };
  const [g] = summarize([a, blocked, absent, negative]);
  assert.equal(g.mention_rate, .5); assert.equal(g.citation_rate, .5); assert.equal(g.unavailable, 1); assert.equal(g.no_answer, 1); assert.equal(g.answer_trigger_rate, 2/3);
  assert.equal(summarize([blocked])[0].citation_rate, null);
  assert.equal(summarize([a, { ...a, id: "api", surface: "model-api" }]).length, 2);
  assert.equal(summarize([a, { ...a, id: "next", run_id: "r2" }]).length, 2);
  assert.throws(() => summarize([a, a]), /Duplicate/);
  assert.throws(() => summarize([{ ...blocked, mentioned: false }]), /null/);
  assert.throws(() => summarize([{ ...a, cited_urls: [] }]), /URL/);
  assert.throws(() => summarize([{ ...a, evidence: "" }]), /evidence/);
  process.stdout.write("answer-audit: selftest PASS\n");
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (process.argv.includes("--selftest")) selftest();
    else { const at = process.argv.indexOf("--input"); if (at < 0 || !process.argv[at + 1]) throw new Error("Usage: node scripts/answer-audit.mjs --input <observations.jsonl> | --selftest");
      const rows = fs.readFileSync(process.argv[at + 1], "utf8").split(/\r?\n/).filter(s => s.trim()).map(s => JSON.parse(s));
      process.stdout.write(JSON.stringify(summarize(rows), null, 2) + "\n"); }
  } catch (e) { process.stderr.write(e.message + "\n"); process.exitCode = 1; }
}
