#!/usr/bin/env node
/*
 * copy-check.mjs
 * The scripted judge for any text about to be written into a queue file, a
 * plan file, the drafting standards, or a member facing page.
 *
 * The script is the judge, not a reading of the file. A stated preference has
 * never been enough: every rule below exists because the same defect shipped
 * at least once.
 *
 * Requires Node 18 or newer. No dependencies, no package.json, no install.
 * Runs the same on Windows and POSIX.
 *
 * USAGE
 *   node scripts/copy-check.mjs --file <path> --dest <destination> [--json]
 *   node scripts/copy-check.mjs --file - --dest post         (reads stdin)
 *   node scripts/copy-check.mjs --selftest
 *   node scripts/copy-check.mjs --help
 *
 *   --dest is one of: post, dm, plan, standards, plain
 *   There is no --profile, no --destination, and no bare positional path.
 *   Any call site using one of those is stale and this script will say so.
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent
 *                   folder, then the SOC_ROOT environment variable. Used to
 *                   find voice/voice.md and voice/proof-inventory.md.
 *   --cap <n>       Body character cap. Off unless a call site passes one,
 *                   because only the calling routine knows which destination
 *                   this body is for.
 *   --first-line-cap <n>
 *                   Overrides the shipped first line cap of 90, which applies
 *                   to --dest post and to nothing else.
 *   --json          Print a machine readable verdict instead of a report.
 *   --quiet         Print nothing. Use the exit code.
 *
 * WHAT IT FAILS, in the order it checks
 *   1. An em dash or an en dash anywhere, including inside a code comment,
 *      and the HTML entity spellings of both.
 *   2. A metric shaped digit sequence (a percentage, a currency amount, a
 *      multiplier, or a count of followers, posts, replies, days, or people)
 *      unless that exact string appears verbatim in voice/proof-inventory.md.
 *   3. An unresolved guillemet placeholder. There are no sentinels: nothing in
 *      this kit is meant to reach a reader with a placeholder still in it.
 *   4. A banned word, banned opener, or banned closer from voice/voice.md.
 *   5. A hashtag, where voice.md sets the hashtag policy to none.
 *   6. A markdown token on a plain text destination. Social surfaces render
 *      markdown literally, so an asterisk shows as an asterisk.
 *   7. A single newline between two content lines on a plain text destination.
 *      It collapses, and a structured post becomes a wall of text.
 *   8. A first line over the cap, on --dest post. The first line is the whole
 *      preview on most surfaces, and everything after it is behind a control.
 *   9. A body over --cap, where a call site passes one.
 *  10. A secret shaped substring. Reports the class and the file name only,
 *      never the matched text.
 *  11. A dotted token left bare in prose. A platform autolinker rewrites it
 *      into a broken link. This one left dozens of dead links on a live page.
 *
 * WHICH RULES APPLY WHERE
 *   rule           post  dm   plain  standards  plan
 *   dash            y    y      y        y       y
 *   metric          y    y      y        y       y
 *   placeholder     y    y      y        y       y
 *   secret          y    y      y        y       y
 *   voice           y    y      y        y       n
 *   hashtag         y    y      y        n       n
 *   markdown        y    y      n        n       n
 *   newline         y    y      n        n       n
 *   first line      y    n      n        n       n
 *   autolink        y    y      y        y       n
 *
 *   plan skips the voice rules because voice/voice.md is the file that holds
 *   the banned lists, and a checker that fails its own vocabulary file is
 *   useless. It skips autolink because plan/channels.md and plan/sources.md
 *   are mostly URLs. standards keeps voice but drops hashtag, because the
 *   hashtag policy is a subject that file is allowed to name.
 *
 * EXIT CODES
 *   0  clean
 *   1  one or more violations
 *   2  bad usage, or the input could not be read
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SELF = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SELF);

const DESTINATIONS = ["post", "dm", "plan", "standards", "plain"];

const PROFILE = {
  post:      { voice: true,  hashtag: true,  autolink: true,  markdown: true,  newline: true,  firstLine: true },
  dm:        { voice: true,  hashtag: true,  autolink: true,  markdown: true,  newline: true,  firstLine: false },
  plain:     { voice: true,  hashtag: true,  autolink: true,  markdown: false, newline: false, firstLine: false },
  standards: { voice: true,  hashtag: false, autolink: true,  markdown: false, newline: false, firstLine: false },
  plan:      { voice: false, hashtag: false, autolink: false, markdown: false, newline: false, firstLine: false },
};

// The first line is the whole preview on most social surfaces. This is the one
// cap the script carries itself, because it is a property of how feeds render
// rather than of any one destination. Override it with --first-line-cap.
const DEFAULT_FIRST_LINE_CAP = 90;

/* ------------------------------------------------------------------ *
 * Rule 1. Dashes, by code point.
 *
 * Checked by code point and not by a shell regex on purpose: a regex handed
 * through a shell gets mangled by the locale and the check silently passes.
 * The source below carries escapes, never a literal dash character, so this
 * file passes its own rule 1.
 * ------------------------------------------------------------------ */

const DASH_CODEPOINTS = new Map([
  [0x2012, "figure dash"],
  [0x2013, "en dash"],
  [0x2014, "em dash"],
  [0x2015, "horizontal bar"],
]);

// The HTML spellings of the same characters. A code point scan misses these
// entirely, and copy pasted out of a rich text editor is exactly where they turn
// up. Built from the code points above rather than written out, so this file
// carries no literal entity for its own rule 1 to trip over.
const DASH_ENTITIES = [];
for (const [cp, name] of DASH_CODEPOINTS) {
  DASH_ENTITIES.push(["&#" + cp + ";", name + ", numeric entity"]);
  DASH_ENTITIES.push(["&#x" + cp.toString(16) + ";", name + ", hex entity"]);
}
// Split across the concatenation for the same reason.
DASH_ENTITIES.push(["&" + "mdash;", "em dash, named entity"]);
DASH_ENTITIES.push(["&" + "ndash;", "en dash, named entity"]);

/* ------------------------------------------------------------------ *
 * Rule 2. Metric shaped digit sequences.
 * ------------------------------------------------------------------ */

const COUNT_NOUNS = [
  "customers?", "clients?", "members?", "users?", "subscribers?", "people",
  "founders?", "operators?", "teams?", "companies", "agencies", "accounts?",
  "leads?", "prospects?", "contacts?", "replies", "reply", "responses?",
  "sends?", "opens?", "clicks?", "links?", "sales?", "deals?", "bookings?",
  "signups?", "sign-ups?", "installs?", "downloads?", "visitors?", "sessions?",
  "views?", "impressions?", "placements?", "posts?", "articles?", "backlinks?",
  "followers?", "follows?", "reactions?", "likes?", "comments?", "shares?",
  "reposts?", "mentions?", "connections?", "engagements?", "audiences?",
  "days?", "weeks?", "months?", "years?", "hours?", "minutes?",
];

const METRIC_PATTERNS = [
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*%", "g")],
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*percent\\b", "gi")],
  ["currency", new RegExp("[$£€¥]\\s?\\d[\\d,.]*\\s*(?:k|m|bn?|million|billion)?\\b", "gi")],
  ["currency", new RegExp("\\b\\d[\\d,.]*\\s*(?:usd|eur|gbp|dollars?|euros?|pounds?)\\b", "gi")],
  ["multiplier", new RegExp("\\b\\d[\\d,.]*x\\b", "gi")],
  ["count", new RegExp("\\b\\d[\\d,.]*\\+?\\s*(?:" + COUNT_NOUNS.join("|") + ")\\b", "gi")],
];

// Masked out before the metric scan so a date, a time, or a card id is never
// read as a claim.
const NOT_A_METRIC = [
  /\b\d{4}-\d{2}-\d{2}\b/g,   // ISO date
  /\b\d{4}-W\d{2}\b/g,        // ISO week
  /\b\d{4}-\d{2}\b/g,         // calendar month
  /\b\d{1,2}:\d{2}(?::\d{2})?\b/g, // clock time
  /\b[SC]-\d+\b/g,            // slot id
  /\b[PR]-\d+\b/g,            // queue entry id, draft and reply
  /\bp-\d+\b/g,               // pillar id
  /\bstep:\s*\d+\b/gi,
  /\bU\+[0-9A-Fa-f]{4,6}\b/g,
  /\bNode\s*\d+\b/gi,
];

/* ------------------------------------------------------------------ *
 * Rule 3. Placeholders.
 *
 * There are no sentinels in this kit. Nothing here is meant to reach a reader
 * with a placeholder still in it: a post goes out whole or it does not go out.
 * The array stays so a future kit can add one in the right place rather than
 * in the middle of the scan.
 * ------------------------------------------------------------------ */

const SENTINELS = [];

/* ------------------------------------------------------------------ *
 * Rule 4. Voice. voice/voice.md overrides these lists completely when it is
 * present. This is the shipped fallback for a kit that has not run intake yet,
 * and for one whose account is new enough to have no published posts to sample.
 * ------------------------------------------------------------------ */

const FALLBACK_VOICE = {
  bannedWords: [
    "revolutionary", "10x", "unlock", "unlocks", "unlocking",
    "supercharge", "supercharges", "supercharging",
    "game-changing", "game changing", "game-changer", "game changer",
    "seamless", "seamlessly", "effortless", "effortlessly", "frictionless",
    "robust", "powerful", "elevate", "elevates", "elevating",
    "transform", "transforms", "transforming", "transformative",
    "cutting-edge", "cutting edge", "best-in-class", "world-class",
    "skyrocket", "turbocharge", "revolutionize", "revolutionise",
    "leverage", "leveraging", "delve", "harnessing",
  ],
  bannedOpeners: [
    "Most people", "Most founders", "Most operators", "Most companies",
    "Most teams", "Most of us", "Everyone is", "Everyone's",
    "Nobody talks about", "Nobody tells you",
    "In today's", "In a world", "Let's face it", "Picture this",
    "Imagine a world", "It's no secret", "We've all been",
    "Here's the thing", "The truth is", "Unpopular opinion",
    "Hot take", "Let that sink in",
  ],
  bannedClosers: [
    "That shift feels less", "The real shift is this", "The real shift is",
    "And that changes everything", "The bottom line is this",
    "At the end of the day", "That's the whole game",
    "What do you think", "Agree or disagree", "Thoughts",
    "Drop a comment", "Like and share", "Follow for more",
  ],
  hashtagPolicy: "none",
};

/* ------------------------------------------------------------------ *
 * Rule 6. Secrets. The class and the file name are reported. Never the text.
 * ------------------------------------------------------------------ */

const SECRET_CLASSES = [
  ["stripe-key", /\bsk_(?:live|test)?_?[A-Za-z0-9]{8,}/g],
  ["webhook-secret", /\bwhsec_[A-Za-z0-9]{8,}/g],
  ["json-web-token", /\beyJ[A-Za-z0-9_-]{10,}/g],
  ["github-token", /\bgh[pousr]_[A-Za-z0-9]{16,}/g],
  ["google-api-key", /\bAIza[A-Za-z0-9_-]{20,}/g],
  ["aws-access-key", /\bAKIA[A-Z0-9]{12,}/g],
  ["slack-token", /\bxox[abprs]-[A-Za-z0-9-]{8,}/g],
  ["bearer-token", /\bBearer\s+[A-Za-z0-9._~+/-]{16,}/gi],
  ["webhook-url", /\bhook\.[a-z][\w.-]*\//gi],
  ["password-literal", /\bpass(?:word|wd)\s*[:=]\s*\S/gi],
  ["private-key-block", /-----BEGIN [A-Z ]*PRIVATE KEY-----/g],
  ["credential-in-url", /\b[a-z][a-z0-9+.-]*:\/\/[^\s/@]+:[^\s/@]+@/gi],
];

/* ------------------------------------------------------------------ *
 * Rules 6 and 7. Plain text destinations.
 *
 * Social surfaces render markdown literally: an asterisk shows as an asterisk,
 * a hash shows as a hash, and a markdown link shows as brackets and
 * parentheses with a raw URL inside them. A single newline between two lines
 * collapses on several platforms and turns a structured post into a wall of
 * text, which is exactly the shape people scroll past.
 *
 * Each pattern is line anchored and run per line, so a queue entry heading
 * such as "## P-01" can be recognised and skipped without weakening the rule
 * for the body underneath it.
 * ------------------------------------------------------------------ */

const MARKDOWN_TOKENS = [
  ["a markdown link", /\[[^\]\n]{0,200}\]\([^)\n]{0,300}\)/],
  ["an asterisk", /\*/],
  ["an underscore emphasis pair", /(^|[\s(])_[^_\n]{1,200}_(?=$|[\s).,!?])/],
  ["a backtick", /`/],
  ["a hash heading", /^[ \t]{0,3}#{1,6}[ \t]+\S/],
  ["a blockquote marker", /^[ \t]{0,3}>[ \t]?\S/],
  ["a numbered list marker", /^[ \t]{0,3}\d+[.)][ \t]+\S/],
  ["a hyphen or bullet list marker", /^[ \t]{0,3}[-+\u2022][ \t]+\S/],
];

// A line that is queue entry structure rather than body copy. The routines
// write these and the member reads them, and neither is a social surface.
const ENTRY_STRUCTURE = /^[ \t]{0,3}(?:#{1,6}[ \t]+[A-Z]-\d+[ \t]*$|-{3,}[ \t]*$)/;

/* ------------------------------------------------------------------ *
 * Rule 11. The autolinker rule.
 *
 * One platform auto-links any dotted token sitting bare in prose. Anchor text
 * containing a dot-TLD gets silently rewritten into a broken link. The method
 * is the one that caught it: strip the real URLs and the code, then look at
 * what dotted tokens are left.
 * ------------------------------------------------------------------ */

const AUTOLINK_TLDS = new Set([
  "com", "net", "org", "io", "ai", "co", "dev", "app", "me", "ly", "sh", "gg",
  "tv", "xyz", "site", "online", "store", "shop", "tech", "cloud", "live",
  "blog", "page", "link", "email", "domains", "agency", "studio", "design",
  "media", "work", "run", "new", "now", "one", "club", "top", "vip", "fun",
  "art", "pro", "name", "mobi", "asia", "biz", "info", "edu", "gov", "int",
  "us", "uk", "ca", "de", "fr", "es", "nl", "se", "jp", "au", "nz", "ie",
  "ch", "at", "be", "pt", "in", "it", "no", "is", "so", "to", "cc", "md",
]);

// A dotted token whose suffix is a file extension is a path, not a link.
// Checked before the TLD list, because md, sh, so, and in collide.
const FILE_EXTENSIONS = new Set([
  "md", "mjs", "cjs", "js", "jsx", "ts", "tsx", "json", "jsonl", "csv", "tsv",
  "html", "htm", "css", "scss", "txt", "log", "tmp", "bak", "old", "lock",
  "png", "jpg", "jpeg", "gif", "webp", "svg", "ico", "pdf", "zip", "gz", "tar",
  "yml", "yaml", "toml", "ini", "env", "xml", "sql", "db", "map", "min",
  "py", "rb", "go", "rs", "java", "php", "sh", "bat", "ps1", "exe", "dll",
  "mp4", "mp3", "wav", "so", "d",
]);

/* ------------------------------------------------------------------ *
 * Text helpers. Masking preserves offsets so every violation keeps a real
 * line and column: masked characters become spaces, newlines stay newlines.
 * ------------------------------------------------------------------ */

function maskRanges(text, ranges) {
  if (!ranges.length) return text;
  const chars = text.split("");
  for (const [start, end] of ranges) {
    for (let i = start; i < end && i < chars.length; i++) {
      if (chars[i] !== "\n" && chars[i] !== "\r") chars[i] = " ";
    }
  }
  return chars.join("");
}

function rangesOf(text, patterns, group) {
  const ranges = [];
  for (const pattern of patterns) {
    const re = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      if (group && m[group] !== undefined) {
        const offset = m[0].indexOf(m[group]);
        ranges.push([m.index + offset, m.index + offset + m[group].length]);
      } else {
        ranges.push([m.index, m.index + m[0].length]);
      }
    }
  }
  return ranges;
}

const CODE_AND_LINK_PATTERNS = [
  /```[\s\S]*?(?:```|$)/g,                 // fenced code block
  /~~~[\s\S]*?(?:~~~|$)/g,
  /`[^`\n]*`/g,                            // inline code
  /\b(?:https?:\/\/|www\.|mailto:)[^\s<>()"'\]}]+/gi, // a real URL
  /\]\([^)\s]+/g,                          // a markdown link target
  /\b(?:href|src|action|content|srcset|data-[\w-]+)\s*=\s*["'][^"']*["']/gi,
  /^\s*(?:profile_url|post_list_url|notifications_url|messages_url|search_url|source_url|screen_path|permalink|url)\s*:.*$/gim,
  // Queue entry metadata. Machine parsed structure and verbatim quoted source
  // material, neither of which is copy this script wrote or may rewrite.
  /^\s*-\s*(?:id|platform|destination|goes out|framework|pillar|material|source|link|on|kind|characters|image|prior)\s*:.*$/gim,
];

function lineStarts(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i++) if (text[i] === "\n") starts.push(i + 1);
  return starts;
}

function locate(starts, index) {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= index) lo = mid; else hi = mid - 1;
  }
  return { line: lo + 1, col: index - starts[lo] + 1 };
}

function snippet(text, index, length) {
  const lineEnd = text.indexOf("\n", index);
  const end = lineEnd === -1 ? text.length : lineEnd;
  let lineStart = text.lastIndexOf("\n", index);
  lineStart = lineStart === -1 ? 0 : lineStart + 1;
  let out = text.slice(Math.max(lineStart, index - 24), Math.min(end, index + Math.max(length, 1) + 24));
  out = out.replace(/\s+/g, " ").trim();
  return out.length > 72 ? out.slice(0, 69) + "..." : out;
}

/* ------------------------------------------------------------------ *
 * Loading the member's own vocabulary and proof
 * ------------------------------------------------------------------ */

function readIfPresent(file) {
  try { return fs.readFileSync(file, "utf8"); } catch { return null; }
}

function sectionsOf(markdown) {
  const out = new Map();
  let current = null;
  for (const rawLine of markdown.split(/\r?\n/)) {
    const heading = rawLine.match(/^\s{0,3}#{1,6}\s+(.*?)\s*$/);
    if (heading) {
      current = heading[1].trim().toLowerCase();
      out.set(current, []);
      continue;
    }
    if (current) out.get(current).push(rawLine);
  }
  return out;
}

function listItems(lines) {
  const items = [];
  for (const raw of lines || []) {
    let line = raw.trim();
    if (!line || line.startsWith("<!--")) continue;
    line = line.replace(/^[-*+]\s+/, "").replace(/^\d+\.\s+/, "");
    line = line.replace(/^["'`“‘]|["'`”’]$/g, "").trim();
    if (line.startsWith("|")) continue; // a table row is not a list item
    if (!line) continue;
    items.push(line);
  }
  return items;
}

function loadVoice(root) {
  const file = path.join(root, "voice", "voice.md");
  const text = readIfPresent(file);
  if (text === null) return { ...FALLBACK_VOICE, source: "fallback" };

  const sections = sectionsOf(text);
  const words = listItems(sections.get("banned words"));
  const openers = listItems(sections.get("banned openers"));
  const closers = listItems(sections.get("banned closers"));
  const policyLines = listItems(sections.get("hashtag policy"));
  const policy = policyLines.join(" ").toLowerCase().includes("none") ? "none" : "allowed";

  // voice.md overrides completely where it has content, and falls back per
  // list where the member left a heading empty.
  return {
    bannedWords: words.length ? words : FALLBACK_VOICE.bannedWords,
    bannedOpeners: openers.length ? openers : FALLBACK_VOICE.bannedOpeners,
    bannedClosers: closers.length ? closers : FALLBACK_VOICE.bannedClosers,
    hashtagPolicy: policyLines.length ? policy : FALLBACK_VOICE.hashtagPolicy,
    source: "voice/voice.md",
  };
}

function loadProof(root) {
  const file = path.join(root, "voice", "proof-inventory.md");
  const text = readIfPresent(file);
  if (text === null) return { allowed: "", structural: [], source: "missing" };

  const sections = sectionsOf(text);
  const memberLines = sections.get("member claims") || [];
  const agentLines = sections.get("agent sourced") || [];
  const structural = [];
  const allowed = [];

  for (const line of memberLines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith("<!--")) allowed.push(trimmed);
  }

  for (const line of agentLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("<!--")) continue;
    // Commentary under the heading carries neither a digit nor a pipe. A real
    // agent sourced entry is a number, so it carries at least one of the two.
    const looksLikeEntry = /\d/.test(trimmed) || trimmed.includes("|");
    if (!looksLikeEntry) continue;
    const parts = trimmed.split("|").map((p) => p.trim());
    if (parts.length !== 3 || !parts[0] || !parts[1] || !/^\d{4}-\d{2}-\d{2}$/.test(parts[2])) {
      structural.push(trimmed);
      continue;
    }
    allowed.push(parts[0]);
  }

  return { allowed: allowed.join("\n"), structural, source: "voice/proof-inventory.md" };
}

/* ------------------------------------------------------------------ *
 * The checks
 * ------------------------------------------------------------------ */

function check(text, dest, ctx) {
  const profile = PROFILE[dest];
  const v = [];
  const starts = lineStarts(text);
  const at = (index, length, rule, detail, showText) => {
    const where = locate(starts, index);
    v.push({
      rule,
      detail,
      line: where.line,
      col: where.col,
      text: showText === false ? null : snippet(text, index, length),
    });
  };

  /* Rule 1. Dashes, scanned by code point over the raw text, including code
     comments, and then the entity spellings. */
  for (let i = 0; i < text.length; i++) {
    const cp = text.codePointAt(i);
    const name = DASH_CODEPOINTS.get(cp);
    if (name) {
      at(i, 1, "dash", name + " (U+" + cp.toString(16).toUpperCase().padStart(4, "0") + "). Use a period, a comma, or split the sentence.");
    }
    if (cp > 0xffff) i++; // step over the low surrogate so columns stay right
  }
  const lowered = text.toLowerCase();
  for (const [entity, name] of DASH_ENTITIES) {
    let from = 0;
    for (;;) {
      const idx = lowered.indexOf(entity, from);
      if (idx === -1) break;
      at(idx, entity.length, "dash", name + ". Use a period, a comma, or split the sentence.");
      from = idx + entity.length;
    }
  }

  /* Build the prose view once: code, real URLs, and markup are not prose. */
  const prose = maskRanges(text, rangesOf(text, CODE_AND_LINK_PATTERNS));

  /* Rule 2. Metrics. */
  const metricView = maskRanges(prose, rangesOf(prose, NOT_A_METRIC));
  for (const [kind, pattern] of METRIC_PATTERNS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(metricView)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      const claim = m[0].trim();
      if (ctx.proof.allowed.includes(claim)) continue;
      at(m.index, m[0].length, "metric",
        "\"" + claim + "\" reads as a " + kind + " and does not appear verbatim in " +
        (ctx.proof.source === "missing" ? "voice/proof-inventory.md, which is missing" : "voice/proof-inventory.md"));
    }
  }

  /* The proof inventory's own shape. A line with no ledger path is invalid
     and the contract says this script rejects the file. */
  for (const bad of ctx.proof.structural) {
    v.push({
      rule: "proof-inventory",
      detail: "voice/proof-inventory.md, under ## Agent sourced, has an entry that is not " +
        "\"<claim> | <ledger path> | <YYYY-MM-DD>\": " + (bad.length > 60 ? bad.slice(0, 57) + "..." : bad),
      line: 0, col: 0, text: null,
    });
  }

  /* Rule 3. Unresolved placeholders, minus the two sentinels. */
  let placeholderView = text;
  for (const sentinel of SENTINELS) {
    const ranges = [];
    let from = 0;
    for (;;) {
      const idx = placeholderView.indexOf(sentinel, from);
      if (idx === -1) break;
      ranges.push([idx, idx + sentinel.length]);
      from = idx + sentinel.length;
    }
    placeholderView = maskRanges(placeholderView, ranges);
  }
  for (let i = 0; i < placeholderView.length; i++) {
    const cp = placeholderView.codePointAt(i);
    if (cp === 0x00ab || cp === 0x00bb) {
      at(i, 1, "placeholder", "an unresolved guillemet placeholder. Fill it. There are no sentinels in this kit.");
    }
  }

  /* Rule 4. Voice. */
  if (profile.voice) {
    for (const word of ctx.voice.bannedWords) {
      const re = new RegExp("(^|[^\\w-])(" + escapeRe(word) + ")(?![\\w-])", "gi");
      let m;
      while ((m = re.exec(prose)) !== null) {
        const idx = m.index + m[1].length;
        at(idx, m[2].length, "banned-word", "\"" + m[2] + "\" is on the banned list in " + ctx.voice.source);
      }
    }

    for (const opener of ctx.voice.bannedOpeners) {
      const needle = opener.toLowerCase();
      let cursor = 0;
      for (const rawLine of prose.split("\n")) {
        // Strip list markers, headings, quote markers, and bold so an opener
        // inside a bullet is still an opener.
        const stripped = rawLine.replace(/^[\s>]*(?:[-*+]\s+|\d+[.)]\s+)?#{0,6}\s*(?:\*\*|__)?/, "");
        const offset = rawLine.length - stripped.length;
        if (stripped.toLowerCase().startsWith(needle)) {
          at(cursor + offset, opener.length, "banned-opener",
            "\"" + opener + "\" is a banned opener in " + ctx.voice.source + ". Readers pattern match it.");
        }
        cursor += rawLine.length + 1;
      }
    }

    for (const closer of ctx.voice.bannedClosers) {
      const re = new RegExp(escapeRe(closer), "gi");
      let m;
      while ((m = re.exec(prose)) !== null) {
        at(m.index, m[0].length, "banned-closer", "\"" + closer + "\" is a banned closer in " + ctx.voice.source);
      }
    }
  }

  /* Rule 5. Hashtags. */
  if (profile.hashtag && ctx.voice.hashtagPolicy === "none") {
    const re = /(^|[^\w&#])#([A-Za-z][\w]*)/g;
    let m;
    while ((m = re.exec(prose)) !== null) {
      const tag = m[2];
      if (/^(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(tag)) continue; // a hex colour
      at(m.index + m[1].length, tag.length + 1, "hashtag",
        "#" + tag + ". The hashtag policy in " + ctx.voice.source + " is none.");
    }
  }

  /* Rules 6, 7 and 8. Plain text destinations only.
     Scanned line by line so entry structure can be recognised and skipped. */
  if (profile.markdown || profile.newline) {
    const lines = text.split("\n");
    let cursor = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const structural = ENTRY_STRUCTURE.test(line);

      if (profile.markdown && !structural) {
        for (const [name, pattern] of MARKDOWN_TOKENS) {
          const re = new RegExp(pattern.source, "g");
          let m;
          while ((m = re.exec(line)) !== null) {
            if (m[0].length === 0) { re.lastIndex++; continue; }
            at(cursor + m.index, m[0].length, "markdown",
              name + " renders literally on a social surface. Use plain text, and an arrow character for a list item.");
          }
        }
      }

      if (profile.newline && i < lines.length - 1) {
        const next = lines[i + 1];
        if (line.trim() && next.trim() && !structural && !ENTRY_STRUCTURE.test(next)) {
          at(cursor + line.length, 1, "newline",
            "two content lines with no blank line between them. A single newline collapses on several platforms, so put a blank line between every line.");
        }
      }

      cursor += line.length + 1;
    }
  }

  if (profile.firstLine) {
    const first = (text.split("\n").find((l) => l.trim().length > 0) || "").trim();
    if (first.length > ctx.firstLineCap) {
      at(Math.max(text.indexOf(first), 0), first.length, "first-line",
        "the first line runs to " + first.length + " characters against a cap of " + ctx.firstLineCap +
        ". On most surfaces the first line is the whole preview and everything after it is behind a control.");
    }
  }

  if (ctx.cap !== null) {
    const body = text.replace(/\s+$/, "");
    if (body.length > ctx.cap) {
      at(Math.max(body.length - 1, 0), 1, "length",
        "the body runs to " + body.length + " characters against a cap of " + ctx.cap +
        ". Cut a sentence, then the link, then the hashtag, in that order. Never truncate.");
    }
  }

  /* Rule 10. Secrets. Class and location only. Never the matched text. */
  for (const [cls, pattern] of SECRET_CLASSES) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      at(m.index, m[0].length, "secret",
        "a substring matching the " + cls + " class. Move it to env or secret storage and reference the account by name.",
        false);
    }
  }

  /* Rule 11. Autolinker bait. */
  if (profile.autolink) {
    // Email addresses and the anchor text of a real markdown link are masked
    // first: a dotted token inside [anchor](https://...) is a link already, not
    // bait for an autolinker. Only an anchor whose href starts with http or
    // https counts, so the same dotted token bare in prose still fails. The
    // anchor scan runs on the raw text because the prose view has already
    // blanked the "](" that opens every link target.
    const linkView = maskRanges(prose, rangesOf(prose, [/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z.]{2,}/g])
      .concat(rangesOf(text, [/\[[^\]\n]{1,200}\]\((?=https?:\/\/)/g])));
    // The middle group takes any number of labels, so a three label host is
    // caught. Without it the scan matched help.example, found example was not
    // a suffix it knew, and skipped past the .com entirely.
    const re = /(^|[^\w@/\\.])([A-Za-z0-9][\w-]{1,}(?:\.[A-Za-z0-9][\w-]*)*)\.([A-Za-z]{2,24})(?![\w-])/g;
    let m;
    while ((m = re.exec(linkView)) !== null) {
      const suffix = m[3].toLowerCase();
      if (FILE_EXTENSIONS.has(suffix)) continue;
      if (!AUTOLINK_TLDS.has(suffix)) continue;
      const token = m[2] + "." + m[3];
      at(m.index + m[1].length, token.length, "autolink",
        "\"" + token + "\" sits bare in prose. An autolinker rewrites it into a link, and that link is usually broken. " +
        "Write it as a real link, or break the dotted token.");
    }
  }

  v.sort((a, b) => (a.line - b.line) || (a.col - b.col));
  return v;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* ------------------------------------------------------------------ *
 * Reporting
 * ------------------------------------------------------------------ */

function report(violations, label, dest, ctx, opts) {
  if (opts.json) {
    const counts = {};
    for (const item of violations) counts[item.rule] = (counts[item.rule] || 0) + 1;
    process.stdout.write(JSON.stringify({
      verdict: violations.length ? "FAIL" : "PASS",
      file: label,
      dest,
      violation_count: violations.length,
      counts,
      voice_source: ctx.voice.source,
      proof_source: ctx.proof.source,
      violations: violations.map((item) => ({
        rule: item.rule, detail: item.detail, line: item.line, col: item.col, text: item.text,
      })),
    }, null, 2) + "\n");
    return;
  }

  if (opts.quiet) return;

  if (!violations.length) {
    process.stdout.write(
      "copy-check: PASS  " + label + "  dest=" + dest +
      "  (voice: " + ctx.voice.source + ", proof: " + ctx.proof.source + ")\n"
    );
    return;
  }

  process.stdout.write("copy-check: FAIL  " + label + "  dest=" + dest + "\n");
  for (const item of violations) {
    const where = item.line ? ("line " + item.line + " col " + item.col) : "file";
    // padEnd must exceed the longest rule name, or the columns run together.
    const gutter = 18 + 16;
    process.stdout.write(
      "  " + where.padEnd(18) + item.rule.padEnd(16) + item.detail + "\n" +
      (item.text ? "  " + " ".repeat(gutter) + item.text + "\n" : "")
    );
  }
  const counts = {};
  for (const item of violations) counts[item.rule] = (counts[item.rule] || 0) + 1;
  const summary = Object.entries(counts).map(([k, n]) => k + " " + n).join(", ");
  process.stdout.write("  " + violations.length + " violation(s): " + summary + "\n");
}

/* ------------------------------------------------------------------ *
 * Self test. Runs against a fixed synthetic context so it never depends on
 * the member's own strategy files.
 * ------------------------------------------------------------------ */

function selftest() {
  const base = { firstLineCap: DEFAULT_FIRST_LINE_CAP, cap: null };
  const ctx = { ...base, voice: { ...FALLBACK_VOICE, source: "fallback" }, proof: { allowed: "", structural: [], source: "missing" } };
  const withProof = { ...base, voice: ctx.voice, proof: { allowed: "42% reply rate", structural: [], source: "voice/proof-inventory.md" } };
  const capped = { ...ctx, cap: 60 };

  const cases = [
    ["clean post copy", "The migration took four attempts.\n\nThe third one is the one that taught me the thing.\n\nWriting it up this week.\n", "post", ctx, []],
    ["empty file", "", "plain", ctx, []],
    ["no trailing newline", "One clean line with nothing wrong in it", "plain", ctx, []],
    ["unicode and emoji", "Café owners ship fast 🚀 and it holds up fine.\nSecond line is clean.\n", "plain", ctx, []],
    // The dash fixtures use escapes, never a literal dash character, so this
    // source file passes its own rule 1.
    ["em dash", "This is a sentence\u2014and it continues.", "plain", ctx, ["dash"]],
    ["en dash", "Pages 10\u201312 of the doc.", "plain", ctx, ["dash"]],
    ["figure dash", "Rows 3\u20124 are stale.", "plain", ctx, ["dash"]],
    ["dash inside a code comment", "```\n// a comment \u2014 with a dash\n```\n", "plan", ctx, ["dash"]],
    ["banned word", "This will supercharge your pipeline.", "plain", ctx, ["banned-word"]],
    ["banned opener at a line start", "Most people never ship anything.", "plain", ctx, ["banned-opener"]],
    ["banned opener inside a bullet", "- Most founders skip this step.", "plain", ctx, ["banned-opener"]],
    ["banned closer", "So it goes. The real shift is this: nobody checks.", "plain", ctx, ["banned-closer"]],
    ["social banned closer", "We shipped the thing.\n\nAgree or disagree?\n", "post", ctx, ["banned-closer"]],
    ["hashtag", "Shipped it today.\n\n#founders\n", "post", ctx, ["hashtag"]],
    ["unsourced percentage", "A 42% reply rate on this one.", "post", ctx, ["metric"]],
    ["sourced percentage passes", "A 42% reply rate on this one.", "post", withProof, []],
    ["unsourced currency", "It costs $1,234 a month.", "post", ctx, ["metric"]],
    ["unsourced follower count", "We passed 40 followers this week.", "post", ctx, ["metric"]],
    ["an ISO date is not a metric", "Observed on 2026-03-04 and queued 2026-03-05.", "plain", ctx, []],
    ["an ISO week is not a metric", "Counted in 2026-W10 and written on 2026-03-06.", "plain", ctx, []],
    ["a slot id is not a metric", "S-042 is ready and P-01 is its entry.", "plain", ctx, []],
    ["a pillar id is not a metric", "The pillar is p-2 and it is carrying the account.", "plain", ctx, []],
    ["a clock time is not a metric", "It fires at 09:15 every weekday.", "plain", ctx, []],
    ["unresolved placeholder", "Shipped «feature name» this week.", "post", ctx, ["placeholder"]],
    ["a secret", "Set the key to sk_" + "live_51H8xQ2ePlaceholderValue here.", "plan", ctx, ["secret"]],
    ["a bare domain in prose", "Read more at example.com before you reply.", "plain", ctx, ["autolink"]],
    ["a dotted anchor with a real href is fine", "Read more at [club.example.com](https://club.example.com/guide) before you reply.", "plain", ctx, []],
    ["the same dotted token bare in prose still fails", "Read more at club.example.com before you reply.", "plain", ctx, ["autolink"]],
    ["a bare URL on its own line is fine", "The write up is here.\n\nhttps://www.example.com/post\n", "post", ctx, []],
    ["a path in backticks is fine", "The ledger is `posts/posts.jsonl` and it appends.", "plan", ctx, []],
    ["a bare kit path is fine", "Write it to posts/posts.jsonl every run.", "plain", ctx, []],
    ["a filename is not a link", "Open queue/2026-03-05-replies.md and tick the boxes.", "plain", ctx, []],
    ["plan skips the voice rules", "Banned words: supercharge, unlock, revolutionary.", "plan", ctx, []],
    ["a markdown link in a post", "The write up is [here](https://example.com/x).\n", "post", ctx, ["markdown"]],
    ["an asterisk in a post", "This is *important* to know.\n", "post", ctx, ["markdown"]],
    ["a hyphen bullet in a post", "What changed:\n\n- the retry policy\n\n- the wait\n", "post", ctx, ["markdown"]],
    ["an arrow bullet in a post is fine", "What changed:\n\n\u2192 the retry policy\n\n\u2192 the wait\n", "post", ctx, []],
    ["markdown is fine on a plain page", "## Today\n\n- S-042 goes out at 09:15\n", "plain", ctx, []],
    ["a collapsed paragraph break", "First line of the post.\nSecond line with no gap.\n", "post", ctx, ["newline"]],
    ["a queue entry heading is structure, not markdown", "## R-01\n\nThe answer is that it retries once.\n", "dm", ctx, []],
    ["an overlong first line", "This first line runs on and on and on and it says nothing specific at all before it finally stops.\n\nSecond line.\n", "post", ctx, ["first-line"]],
    ["a first line at the cap is fine", "The migration took four attempts and the third one taught me the thing.\n\nWriting it up.\n", "post", ctx, []],
    ["over an explicit body cap", "This body is comfortably longer than the sixty character cap that was passed in.", "post", capped, ["length"]],
    ["under an explicit body cap", "Short enough.", "post", capped, []],
  ];

  let failures = 0;
  for (const [name, text, dest, context, expected] of cases) {
    const got = check(text, dest, context);
    const gotRules = [...new Set(got.map((x) => x.rule))].sort();
    const wantRules = [...new Set(expected)].sort();
    const pass = gotRules.join(",") === wantRules.join(",");
    if (pass) {
      process.stdout.write("  ok    " + name + "\n");
    } else {
      failures++;
      process.stdout.write("  FAIL  " + name + "\n" +
        "        want [" + wantRules.join(", ") + "]  got [" + gotRules.join(", ") + "]\n");
      for (const item of got) process.stdout.write("        line " + item.line + " " + item.rule + ": " + item.detail + "\n");
    }
  }

  // Line numbers must survive a surrogate pair and a masked region.
  const multiline = "line one is clean\nline two has 🚀 an emoji\nline three has a dash \u2014 here\n";
  const found = check(multiline, "plain", ctx);
  if (found.length === 1 && found[0].line === 3) {
    process.stdout.write("  ok    line numbers survive a surrogate pair\n");
  } else {
    failures++;
    process.stdout.write("  FAIL  line numbers survive a surrogate pair (got " +
      found.map((f) => f.rule + "@" + f.line).join(", ") + ")\n");
  }

  process.stdout.write(failures === 0
    ? "copy-check: selftest PASS (" + (cases.length + 1) + " checks)\n"
    : "copy-check: selftest FAIL (" + failures + " of " + (cases.length + 1) + ")\n");
  process.exit(failures === 0 ? 0 : 1);
}

/* ------------------------------------------------------------------ *
 * Argument parsing and main
 * ------------------------------------------------------------------ */

function die(message) {
  process.stderr.write("copy-check: " + message + "\n");
  process.exit(2);
}

function usage() {
  const text = fs.readFileSync(SELF, "utf8");
  const block = text.slice(text.indexOf("/*") + 2, text.indexOf("*/"));
  process.stdout.write(block.split("\n").map((l) => l.replace(/^ \* ?/, "")).join("\n").trim() + "\n");
}

const CANONICAL = "node scripts/copy-check.mjs --file <path> --dest <" + DESTINATIONS.join("|") + "> [--json]";

function parseArgs(argv) {
  const opts = { file: null, dest: null, root: null, cap: null, firstLineCap: null, json: false, quiet: false, selftest: false, help: false };

  const asCount = (raw, flag) => {
    const n = Number(raw);
    if (!Number.isInteger(n) || n < 1) die(flag + " takes a whole number of characters, got \"" + raw + "\"");
    return n;
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    const next = () => {
      const value = argv[i + 1];
      if (value === undefined) die(arg + " needs a value\n  " + CANONICAL);
      i++;
      return value;
    };

    switch (arg) {
      case "--help": case "-h": opts.help = true; break;
      case "--selftest": opts.selftest = true; break;
      case "--json": opts.json = true; break;
      case "--quiet": opts.quiet = true; break;
      case "--file": opts.file = next(); break;
      case "--dest": opts.dest = next(); break;
      case "--root": opts.root = next(); break;
      case "--cap": opts.cap = asCount(next(), "--cap"); break;
      case "--first-line-cap": opts.firstLineCap = asCount(next(), "--first-line-cap"); break;

      // Flags earlier drafts of this kit invented. Fail loudly and name the
      // one real interface, so the stale call site gets fixed rather than
      // silently doing something else.
      case "--destination":
        die("there is no --destination. The flag is --dest.\n  " + CANONICAL);
        break;
      case "--profile":
        die("there is no --profile. The flag is --dest, one of: " + DESTINATIONS.join(", ") + "\n  " + CANONICAL);
        break;

      default:
        if (arg.startsWith("-") && arg !== "-") die("unknown option " + arg + "\n  " + CANONICAL);
        if (opts.file === null) {
          die("this script takes no bare positional path. Pass it as --file.\n  " + CANONICAL);
        }
        die("unexpected argument " + arg + "\n  " + CANONICAL);
    }
  }
  return opts;
}

function resolveRoot(opts) {
  if (opts.root) return path.resolve(opts.root);
  if (process.env.SOC_ROOT) return path.resolve(process.env.SOC_ROOT);
  return path.resolve(SCRIPT_DIR, "..");
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) { usage(); process.exit(0); }
  if (opts.selftest) { selftest(); return; }

  if (opts.dest === null) {
    die("--dest is required, one of: " + DESTINATIONS.join(", ") + "\n  " + CANONICAL);
  }
  if (!DESTINATIONS.includes(opts.dest)) {
    const guess = { "email": "dm", "form": "plain", "strategy": "plan", "dashboard": "plain", "reply": "dm", "comment": "dm", "linkedin": "post", "social": "post", "text": "plain", "queue": "plain", "voice": "plan" }[opts.dest];
    die("unknown dest \"" + opts.dest + "\"." + (guess ? " Did you mean \"" + guess + "\"?" : "") +
      "\n  Valid: " + DESTINATIONS.join(", ") + "\n  " + CANONICAL);
  }

  let text;
  let label;
  if (opts.file === null || opts.file === "-") {
    label = "(stdin)";
    try { text = fs.readFileSync(0, "utf8"); }
    catch (err) { die("could not read stdin: " + err.message + "\n  " + CANONICAL); }
  } else {
    label = opts.file;
    try { text = fs.readFileSync(opts.file, "utf8"); }
    catch (err) { die("could not read " + opts.file + ": " + err.message); }
  }

  // A byte order mark is not a violation, but leaving it in shifts every
  // column by one.
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1);

  const root = resolveRoot(opts);
  const ctx = {
    voice: loadVoice(root),
    proof: loadProof(root),
    firstLineCap: opts.firstLineCap === null ? DEFAULT_FIRST_LINE_CAP : opts.firstLineCap,
    cap: opts.cap,
  };

  const violations = check(text, opts.dest, ctx);
  report(violations, label, opts.dest, ctx, opts);
  process.exit(violations.length ? 1 : 0);
}

main();
