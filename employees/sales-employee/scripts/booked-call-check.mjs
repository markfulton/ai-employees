#!/usr/bin/env node
/**
 * booked-call-check.mjs
 *
 * Checks a booked call queue file, queue/YYYY-MM-DD-booked-calls.md, against
 * the shape in playbooks/booked-calls/PLAYBOOK.md section 8 and the member's
 * settings in strategy/booked-calls.md. It judges structure only. Wording is
 * judged by copy-check.mjs and voice-check.mjs, which run on every message
 * before this check runs on the packet.
 *
 * Usage:
 *   node scripts/booked-call-check.mjs --file <queue file> [--config <strategy/booked-calls.md>] [--entry B-01] [--json]
 *   node scripts/booked-call-check.mjs --selftest
 *
 * Exit 0: every entry passes. Exit 1: one or more failures. Exit 2: usage.
 * No dependencies. Node 18 or newer. It reads files and writes nothing.
 */
import fs from "node:fs";

const TEXT_CAP = 160;
const TICKS = ["called", "texts sent", "email sent", "moved to today", "kept the booked time"];
const ALLOWED_SENTINELS = ["«member: paste the detail»", "«paste at send time»"];
const DASH_CHARS = String.fromCharCode(0x2013, 0x2014);
const DASHES = new RegExp("[" + DASH_CHARS + "]");
const URL_RE = /https?:\/\/[^\s)>\]]+/g;
const TEXT_BLOCKS = ["texts, no answer", "texts, after the first reply", "texts, same day offer", "texts, short notice", "video text", "branch, yes", "branch, no"];

export function parseConfig(text) {
  const cfg = {};
  if (!text) return cfg;
  for (const raw of text.replace(/^﻿/, "").split(/\r?\n/)) {
    const m = /^([a-z_]+):\s*(.*)$/.exec(raw.trim());
    if (!m) continue;
    const value = m[2].trim();
    if (value === "" || /^n\/a\b/i.test(value) || value.startsWith("«")) continue;
    cfg[m[1]] = value;
  }
  return cfg;
}

function splitEntries(text) {
  const entries = [];
  let cur = null;
  for (const line of text.replace(/^﻿/, "").split(/\r?\n/)) {
    const h = /^## (B-\d+)\s*$/.exec(line);
    if (h) { cur = { id: h[1], lines: [] }; entries.push(cur); continue; }
    if (cur) cur.lines.push(line);
  }
  return entries;
}

function blocksOf(lines) {
  const blocks = { _head: [] };
  let name = "_head";
  for (const line of lines) {
    const h = /^### (.+?)\s*$/.exec(line);
    if (h) { name = h[1].toLowerCase(); blocks[name] = []; continue; }
    if (line.trim() === "---") continue;
    blocks[name].push(line);
  }
  return blocks;
}

export function checkEntry(entry, cfg) {
  const v = [];
  const add = (rule, detail) => v.push({ entry: entry.id, rule, detail });
  const blocks = blocksOf(entry.lines);
  const head = blocks._head;
  const all = entry.lines.join("\n");

  if (!head.some((l) => /^- booking: bk-[A-Za-z0-9-]+\s*$/.test(l))) add("no-booking-line", "the entry needs a '- booking: bk-...' line before its first block");
  for (const t of TICKS) {
    if (!head.some((l) => new RegExp("^- \\[( |x|X)\\] " + t.replace(/ /g, " ") + "\\s*$").test(l))) add("tick-lines", "missing the tick line '- [ ] " + t + "'");
  }
  if (!blocks["call brief"]) add("no-call-brief", "every packet carries a '### call brief' block");

  if (/\{\{|\}\}/.test(all)) add("unfilled-field", "a {{field}} was left in the packet");
  if (/\[only if:/i.test(all)) add("unfilled-field", "an '[only if: ...]' marker was left in the packet");
  for (const m of all.matchAll(/«[^»]*»/g)) {
    if (!ALLOWED_SENTINELS.includes(m[0])) add("placeholder", "unresolved placeholder " + m[0]);
  }
  if (DASHES.test(all)) add("dash", "an em dash or an en dash is in the packet");

  const textBlocks = Object.keys(blocks).filter((b) => TEXT_BLOCKS.includes(b));
  const hasTexts = Object.keys(blocks).some((b) => b.startsWith("texts,"));
  for (const b of Object.keys(blocks)) {
    if (b !== "_head" && b !== "call brief" && b !== "call now" && b !== "email" && !TEXT_BLOCKS.includes(b)) add("unknown-block", "'### " + b + "' is not a block the playbook names");
  }
  if (hasTexts && cfg.texts === "no") add("texts-disabled", "strategy/booked-calls.md says texts: no, and the packet carries texts");
  if (blocks["texts, same day offer"]) {
    if (cfg.offer_same_day === "no") add("same-day-disabled", "strategy/booked-calls.md says offer_same_day: no, and the packet carries the offer");
    if (!blocks["texts, same day offer"].some((l) => /^- slots read: .+/.test(l))) add("slots-read", "the same day offer needs a '- slots read:' line");
  }
  if (blocks["branch, yes"] && !blocks["texts, same day offer"]) add("branch-without-offer", "'branch, yes' is staged only with the same day offer");
  if (blocks["texts, short notice"] && (blocks["texts, no answer"] || blocks["call now"])) add("short-notice-mixed", "a short notice packet carries no call now block and no other text blocks");

  for (const b of textBlocks) {
    const texts = blocks[b].filter((l) => l.startsWith("- text:"));
    if (b !== "branch, yes" && texts.length === 0) add("empty-block", "'### " + b + "' has no '- text:' line");
    for (const l of texts) {
      const msg = l.slice("- text:".length).trim();
      if (msg.length === 0) add("empty-text", "an empty '- text:' line in '### " + b + "'");
      if (msg.length > TEXT_CAP) add("text-too-long", "a message in '### " + b + "' is " + msg.length + " characters, the cap for one message is " + TEXT_CAP);
      if (b === "texts, no answer" && URL_RE.test(msg)) add("link-in-first-texts", "no link in the texts to a person who has not heard from you yet");
      URL_RE.lastIndex = 0;
    }
  }

  const sendable = textBlocks.flatMap((b) => blocks[b]).concat(blocks.email || [], blocks["call now"] || []);
  for (const l of sendable) {
    if (!/video/i.test(l)) continue;
    if (!cfg.video_url) { add("video-without-url", "a line mentions the video and strategy/booked-calls.md sets no video_url"); continue; }
    for (const u of l.match(URL_RE) || []) {
      if (u.replace(/[.,!?]+$/, "") !== cfg.video_url) add("video-url-mismatch", "a video link that is not the video_url in strategy/booked-calls.md");
    }
  }

  if (blocks.email) {
    if (!blocks.email.some((l) => /^- subject: .+/.test(l))) add("email-subject", "the email block needs a '- subject:' line");
  }
  return v;
}

export function checkFile(text, cfg, only) {
  const entries = splitEntries(text);
  const out = [];
  if (entries.length === 0) out.push({ entry: "-", rule: "no-entries", detail: "no '## B-nn' entry in the file" });
  const seen = new Set();
  for (const e of entries) {
    if (seen.has(e.id)) out.push({ entry: e.id, rule: "duplicate-entry", detail: "two entries share the heading " + e.id });
    seen.add(e.id);
    if (only && e.id !== only) continue;
    out.push(...checkEntry(e, cfg));
  }
  return { entries: entries.length, violations: out };
}

// ---------------------------------------------------------------- self test

const CFG = "## Booking source\nsource: calendar\n## Pre call video\nvideo_url: https://example.com/watch/intro\nvideo_by: Sam\n## Messages\ntexts: yes\noffer_same_day: yes\n";
const GOOD = [
  "# Booked calls, 2026-03-05", "",
  "## B-01",
  "- booking: bk-2026-03-05-01",
  "- who: Jordan Lee <jordan@example.org>",
  "- [ ] called", "- [ ] texts sent", "- [ ] email sent", "- [ ] moved to today", "- [ ] kept the booked time", "",
  "### call brief", "- who: Jordan Lee, booked last night", "",
  "### call now", "- Hi Jordan, it's Sam from Example Co.", "",
  "### video text", "- text: Here's the short video from Sam: https://example.com/watch/intro", "",
  "### texts, no answer", "- text: Hi Jordan!", "- text: Sam here, from Example Co.", "- text: Looking forward to our call on Thursday. What kind of business do you run?", "",
  "### texts, same day offer", "- slots read: 2026-03-05 08:20", "- text: I've had a couple of times open up today, 2pm or 4pm, if either suits. If not, Thursday is great too.", "",
  "### branch, yes", "- text: Great, see you then!", "",
  "### branch, no", "- text: No problem at all, Thursday it is.", "",
  "### email", "- subject: Our call on Thursday", "Hi Jordan,", "", "So I can prepare, what kind of business do you run?", "", "---", "",
].join("\n");

function selftest() {
  const cfg = parseConfig(CFG);
  const cases = [
    ["a well formed packet passes", GOOD, cfg, []],
    ["a missing booking line fails", GOOD.replace("- booking: bk-2026-03-05-01\n", ""), cfg, ["no-booking-line"]],
    ["a missing tick line fails", GOOD.replace("- [ ] email sent\n", ""), cfg, ["tick-lines"]],
    ["a ticked box still parses", GOOD.replace("- [ ] called", "- [x] called"), cfg, []],
    ["an unfilled field fails", GOOD.replace("Hi Jordan!", "Hi {{first_name}}!"), cfg, ["unfilled-field"]],
    ["an only if marker left in fails", GOOD.replace("Hi Jordan!", "Hi Jordan!   [only if: video]"), cfg, ["unfilled-field"]],
    ["an unknown placeholder fails", GOOD.replace("2pm or 4pm", "«slot one»"), cfg, ["placeholder"]],
    ["the member sentinel passes", GOOD.replace("2pm or 4pm", "«member: paste the detail»"), cfg, []],
    ["a long text fails", GOOD.replace("Hi Jordan!", "Hi Jordan! " + "x".repeat(170)), cfg, ["text-too-long"]],
    ["a link in the first texts fails", GOOD.replace("- text: Hi Jordan!", "- text: Hi Jordan! https://example.com/a"), cfg, ["link-in-first-texts"]],
    ["a video line with no video configured fails", GOOD, parseConfig("video_url: n/a (not set)\ntexts: yes"), ["video-without-url"]],
    ["a different video link fails", GOOD.replace("https://example.com/watch/intro", "https://example.com/other"), cfg, ["video-url-mismatch"]],
    ["texts when texts are off fails", GOOD, parseConfig(CFG.replace("texts: yes", "texts: no")), ["texts-disabled"]],
    ["the same day offer when it is off fails", GOOD, parseConfig(CFG.replace("offer_same_day: yes", "offer_same_day: no")), ["same-day-disabled"]],
    ["the same day offer with no slots line fails", GOOD.replace("- slots read: 2026-03-05 08:20\n", ""), cfg, ["slots-read"]],
    ["no call brief fails", GOOD.replace("### call brief\n- who: Jordan Lee, booked last night\n", ""), cfg, ["no-call-brief"]],
    ["a dash fails", GOOD.replace("Hi Jordan,", "Hi Jordan " + DASH_CHARS.charAt(1)), cfg, ["dash"]],
    ["an email with no subject fails", GOOD.replace("- subject: Our call on Thursday\n", ""), cfg, ["email-subject"]],
    ["an unknown block fails", GOOD.replace("### branch, no", "### branch, maybe"), cfg, ["unknown-block"]],
    ["a file with no entries fails", "# Booked calls, 2026-03-05\n", cfg, ["no-entries"]],
  ];
  let failed = 0;
  for (const [name, text, c, expected] of cases) {
    const got = [...new Set(checkFile(text, c).violations.map((x) => x.rule))].sort();
    const want = [...expected].sort();
    const ok = JSON.stringify(got) === JSON.stringify(want);
    if (!ok) { failed++; process.stdout.write("  FAIL  " + name + ": expected [" + want + "] got [" + got + "]\n"); }
  }
  if (failed) { process.stdout.write("booked-call-check: selftest FAIL (" + failed + " of " + cases.length + ")\n"); process.exit(1); }
  process.stdout.write("booked-call-check: selftest PASS (" + cases.length + " cases)\n");
  process.exit(0);
}

// ---------------------------------------------------------------- cli

const CANONICAL = "node scripts/booked-call-check.mjs --file <queue file> [--config <strategy/booked-calls.md>] [--entry B-01] [--json]";
function die(msg) { process.stderr.write("booked-call-check: " + msg + "\n  " + CANONICAL + "\n"); process.exit(2); }

const args = process.argv.slice(2);
const opts = { file: null, config: null, entry: null, json: false };
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a === "--selftest") selftest();
  else if (a === "--file") opts.file = args[++i];
  else if (a === "--config") opts.config = args[++i];
  else if (a === "--entry") opts.entry = args[++i];
  else if (a === "--json") opts.json = true;
  else if (a === "--help" || a === "-h") { process.stdout.write(CANONICAL + "\n"); process.exit(0); }
  else die("unknown argument " + a);
}
if (!opts.file) die("--file is required");
let text, cfgText = "";
try { text = fs.readFileSync(opts.file, "utf8"); } catch { die("cannot read " + opts.file); }
if (opts.config) { try { cfgText = fs.readFileSync(opts.config, "utf8"); } catch { die("cannot read " + opts.config); } }
const result = checkFile(text, parseConfig(cfgText), opts.entry);
if (opts.json) {
  process.stdout.write(JSON.stringify({ pass: result.violations.length === 0, entries: result.entries, violations: result.violations }) + "\n");
} else if (result.violations.length === 0) {
  process.stdout.write("booked-call-check: PASS  " + opts.file + "  entries=" + result.entries + "\n");
} else {
  process.stdout.write("booked-call-check: FAIL  " + opts.file + "\n");
  for (const x of result.violations) process.stdout.write("  " + x.entry + "  " + x.rule + ": " + x.detail + "\n");
}
process.exit(result.violations.length === 0 ? 0 : 1);
