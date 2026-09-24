#!/usr/bin/env node
/*
 * copy-check.mjs
 * The scripted judge for any text about to be written into a brief, a dossier,
 * a weekly page, a charter file, or a dashboard partial.
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
 *   node scripts/copy-check.mjs --file - --dest email        (reads stdin)
 *   node scripts/copy-check.mjs --selftest
 *   node scripts/copy-check.mjs --help
 *
 *   --dest is one of: email, dm, form, strategy, dashboard, plain
 *   There is no --profile, no --destination, and no bare positional path.
 *   Any call site using one of those is stale and this script will say so.
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent
 *                   folder, then the COS_ROOT environment variable. Used to
 *                   find evidence/sourced.md, which is this kit's proof
 *                   inventory.
 *   --json          Print a machine readable verdict instead of a report.
 *   --quiet         Print nothing. Use the exit code.
 *
 * WHAT IT FAILS, in the order it checks
 *   1. An em dash or an en dash anywhere, including inside a code comment,
 *      and the HTML entity spellings of both.
 *   2. A metric shaped digit sequence (a percentage, a currency amount, a
 *      multiplier, or a count of customers, links, days, or people) unless
 *      that exact string appears verbatim in evidence/sourced.md.
 *   3. An unresolved guillemet placeholder. Two sentinels survive on purpose:
 *      «paste at send time» and «member: paste the detail».
 *   4. A banned word, banned opener, or banned closer. The lists ship inside
 *      this script, because nothing this kit writes is outbound copy and there
 *      is no voice file in its map for a member to override them in.
 *   5. A hashtag. Nothing this kit writes carries one.
 *   6. A secret shaped substring. Reports the class and the file name only,
 *      never the matched text.
 *   7. A dotted token left bare in prose. A platform autolinker rewrites it
 *      into a broken link. This one left 49 dead links on a live post.
 *
 * WHICH RULES APPLY WHERE
 *   rule          email  dm  form  plain  strategy  dashboard
 *   dash            y     y    y     y       y         y
 *   metric          y     y    y     y       y         y
 *   placeholder     y     y    y     y       y         y
 *   secret          y     y    y     y       y         y
 *   voice           y     y    y     y       n         y
 *   hashtag         y     y    y     y       n         n
 *   autolink        y     y    y     y       n         n
 *
 *   strategy skips the voice rules because a charter file quotes the business
 *   back in its own words, and a checker that fails a quotation is useless.
 *   dashboard skips hashtag and autolink because a hex colour and a markup
 *   attribute are not prose.
 *
 *   This kit calls three of the six: plain for every page the member reads,
 *   strategy for a charter file and for evidence/sourced.md, dashboard for a
 *   partial. The other three are kept so one script serves every Agent
 *   Employee on the machine.
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

const DESTINATIONS = ["email", "dm", "form", "strategy", "dashboard", "plain"];

const PROFILE = {
  email:     { voice: true,  hashtag: true,  autolink: true,  markup: false },
  dm:        { voice: true,  hashtag: true,  autolink: true,  markup: false },
  form:      { voice: true,  hashtag: true,  autolink: true,  markup: false },
  plain:     { voice: true,  hashtag: true,  autolink: true,  markup: false },
  strategy:  { voice: false, hashtag: false, autolink: false, markup: false },
  dashboard: { voice: true,  hashtag: false, autolink: false, markup: true },
};

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
// entirely, and a dashboard partial is exactly where they turn up. Built from
// the code points above rather than written out, so this source file carries
// no literal entity for its own rule 1 to trip over.
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
  /\b[Cc]-\d+\b/g,            // card id and contact id
  /\b[EDF]-\d+\b/g,           // queue entry id, on kits that have queues
  /\bline \d+\b/gi,           // a run log citation, which is a pointer and not a claim
  /\blines \d+ to \d+\b/gi,
  /\bstep:\s*\d+\b/gi,
  /\bU\+[0-9A-Fa-f]{4,6}\b/g,
  /\bNode\s*\d+\b/gi,
];

/* ------------------------------------------------------------------ *
 * Rule 3. Placeholders. Two sentinels survive into a draft on purpose.
 * ------------------------------------------------------------------ */

const SENTINELS = ["«paste at send time»", "«member: paste the detail»"];

/* ------------------------------------------------------------------ *
 * Rule 4. Voice. These lists ship inside this script and nothing overrides
 * them, because this kit writes no outbound copy and its file map carries no
 * voice file. Every page it produces is read by one person, the member.
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
    "In today's", "In a world", "Let's face it", "Picture this",
    "Imagine a world", "It's no secret", "We've all been",
    "Here's the thing", "The truth is",
  ],
  bannedClosers: [
    "That shift feels less", "The real shift is this", "The real shift is",
    "And that changes everything", "The bottom line is this",
    "At the end of the day", "That's the whole game",
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
 * Rule 7. The autolinker rule.
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
  /^\s*(?:search_url|source_url|account_url|url|buy_url|landing_url|linkedin_url)\s*:.*$/gim,
];

const MARKUP_PATTERNS = [
  /<style[\s\S]*?<\/style>/gi,
  /<script[\s\S]*?<\/script>/gi,
  /\sstyle\s*=\s*["'][^"']*["']/gi,
  /<!--[\s\S]*?-->/g,
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

function loadVoice() {
  // One source, shipped, and no file read. A member who wants a word added
  // writes a line into the Corrections section of the routine that keeps
  // producing it, and that routine amends its own instructions.
  return { ...FALLBACK_VOICE, source: "the shipped list in copy-check.mjs" };
}

function loadProof(root) {
  const file = path.join(root, "evidence", "sourced.md");
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

  return { allowed: allowed.join("\n"), structural, source: "evidence/sourced.md" };
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
  let prose = maskRanges(text, rangesOf(text, CODE_AND_LINK_PATTERNS));
  if (profile.markup) prose = maskRanges(prose, rangesOf(prose, MARKUP_PATTERNS));

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
        (ctx.proof.source === "missing" ? "evidence/sourced.md, which is missing" : "evidence/sourced.md") +
        ". Name the file path the figure was read from instead, or write the date rather than the elapsed count.");
    }
  }

  /* The proof inventory's own shape. A line with no ledger path is invalid
     and the contract says this script rejects the file. */
  for (const bad of ctx.proof.structural) {
    v.push({
      rule: "proof-inventory",
      detail: "evidence/sourced.md, under ## Agent sourced, has an entry that is not " +
        "\"<claim> | <file path> | <YYYY-MM-DD>\": " + (bad.length > 60 ? bad.slice(0, 57) + "..." : bad),
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
      at(i, 1, "placeholder", "an unresolved guillemet placeholder. Fill it, or use one of the two sentinels.");
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

  /* Rule 6. Secrets. Class and location only. Never the matched text. */
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

  /* Rule 7. Autolinker bait. */
  if (profile.autolink) {
    // Email addresses and the anchor text of a markdown link are masked first: a dotted token inside
    // [anchor](url) is a real link already, not bait for an autolinker.
    const linkView = maskRanges(prose, rangesOf(prose, [/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z.]{2,}/g]).concat(rangesOf(text, [/\[[^\]\n]{1,200}\]\(/g])));
    const re = /(^|[^\w@/\\.])([A-Za-z0-9][\w-]{1,})\.([A-Za-z]{2,24})(?![\w-])/g;
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
 * the member's own charter files.
 * ------------------------------------------------------------------ */

function selftest() {
  const ctx = { voice: loadVoice(), proof: { allowed: "", structural: [], source: "missing" } };
  const withProof = { voice: ctx.voice, proof: { allowed: "42% reply rate", structural: [], source: "evidence/sourced.md" } };

  const cases = [
    ["clean email copy", "Hi Sam,\n\nI saw the ops role you opened last week. I run a small kit that files the busywork.\n\nWorth a look?\n\nMark\n", "email", ctx, []],
    ["empty file", "", "plain", ctx, []],
    ["no trailing newline", "One clean line with nothing wrong in it", "plain", ctx, []],
    ["unicode and emoji", "Café owners ship fast 🚀 and it holds up fine.\nSecond line is clean.\n", "plain", ctx, []],
    // The dash fixtures use escapes, never a literal dash character, so this
    // source file passes its own rule 1.
    ["em dash", "This is a sentence\u2014and it continues.", "plain", ctx, ["dash"]],
    ["en dash", "Pages 10\u201312 of the doc.", "plain", ctx, ["dash"]],
    ["figure dash", "Rows 3\u20124 are stale.", "plain", ctx, ["dash"]],
    ["dash inside a code comment", "```\n// a comment \u2014 with a dash\n```\n", "strategy", ctx, ["dash"]],
    ["banned word", "This will supercharge your pipeline.", "email", ctx, ["banned-word"]],
    ["banned opener at a line start", "Most people never ship anything.", "dm", ctx, ["banned-opener"]],
    ["banned opener inside a bullet", "- Most founders skip this step.", "dm", ctx, ["banned-opener"]],
    ["banned closer", "So it goes. The real shift is this: nobody checks.", "email", ctx, ["banned-closer"]],
    ["hashtag", "Shipped it today. #founders", "dm", ctx, ["hashtag"]],
    ["hex colour is not a hashtag", "<div style=\"color:#fff\">ok</div>", "dashboard", ctx, []],
    ["unsourced percentage", "We see a 42% reply rate on this segment.", "email", ctx, ["metric"]],
    ["sourced percentage passes", "We see a 42% reply rate on this segment.", "email", withProof, []],
    ["unsourced currency", "It costs $1,234 a month.", "email", ctx, ["metric"]],
    ["unsourced count", "We work with 40 founders.", "email", ctx, ["metric"]],
    ["an ISO date is not a metric", "Observed on 2026-03-04 and folded 2026-03-05.", "plain", ctx, []],
    ["a card id is not a metric", "C-014 is ready and c-0142 is the contact.", "plain", ctx, []],
    ["a clock time is not a metric", "It fires at 08:15 every weekday.", "plain", ctx, []],
    ["unresolved placeholder", "Hi «first name», quick question.", "email", ctx, ["placeholder"]],
    ["send time sentinel survives", "Paste the code «paste at send time» before sending.", "email", ctx, []],
    ["member detail sentinel survives", "Their number was «member: paste the detail» last quarter.", "email", ctx, []],
    ["a secret", "Set the key to sk_" + "live_51H8xQ2ePlaceholderValue here.", "strategy", ctx, ["secret"]],
    ["a bare domain in prose", "Read more at example.com before you reply.", "email", ctx, ["autolink"]],
    ["a real link is fine", "Read more at [the site](https://www.example.com) before you reply.", "email", ctx, []],
    ["a path in backticks is fine", "The ledger is `fleet/observations.jsonl` and it appends.", "strategy", ctx, []],
    ["a bare kit path is fine", "Write it to crm/signals.jsonl every run.", "plain", ctx, []],
    ["a filename is not a link", "Open decisions/REGISTER.md and tick the boxes.", "plain", ctx, []],
    ["strategy skips the voice rules", "Banned words: supercharge, unlock, revolutionary.", "strategy", ctx, []],
    ["a run log citation is not a metric", "gtm-engineer runlog.jsonl line 812, status failed.", "plain", ctx, []],
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
  const opts = { file: null, dest: null, root: null, json: false, quiet: false, selftest: false, help: false };

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
  if (process.env.COS_ROOT) return path.resolve(process.env.COS_ROOT);
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
    const guess = { "linkedin-dm": "dm", "linkedin": "dm", "file": "strategy", "internal": "strategy", "html": "dashboard", "text": "plain", "brief": "plain", "dossier": "plain", "charter": "strategy" }[opts.dest];
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
  const ctx = { voice: loadVoice(), proof: loadProof(root) };

  const violations = check(text, opts.dest, ctx);
  report(violations, label, opts.dest, ctx, opts);
  process.exit(violations.length ? 1 : 0);
}

main();
