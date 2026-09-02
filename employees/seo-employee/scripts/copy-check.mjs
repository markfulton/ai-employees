#!/usr/bin/env node
/*
 * copy-check.mjs
 * The scripted judge for any text about to be written into an article body, a
 * strategy file, a calendar block, or a file the member reads.
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
 *   node scripts/copy-check.mjs --file - --dest article      (reads stdin)
 *   node scripts/copy-check.mjs --selftest
 *   node scripts/copy-check.mjs --help
 *
 *   --dest is one of: article, strategy, plain
 *   There is no --profile, no --destination, no email or dm destination, and
 *   no bare positional path. Any call site using one of those is stale.
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent
 *                   folder, then the SEO_ROOT environment variable. Used to
 *                   find strategy/voice.md.
 *   --json          Print a machine readable verdict instead of a report.
 *   --quiet         Print nothing. Use the exit code.
 *
 * WHAT IT FAILS, in the order it checks
 *   1. An em dash or an en dash anywhere, including inside a code comment,
 *      plus the figure dash, the horizontal bar, and the HTML entity
 *      spellings of all four.
 *   2. A metric shaped digit sequence (a percentage, a currency amount, a
 *      multiplier, or a count of articles, links, days, impressions, clicks,
 *      or people) unless the same line also carries its source. A source is a
 *      kit relative file path, a URL, or a parenthesised clause. This is the
 *      rule behind the whole kit's honesty about numbers:
 *        "calendar/CALENDAR.md, 11 entries not yet published"  passes
 *        "11 articles left to write"                            fails
 *   3. An unresolved guillemet placeholder. There are no sentinels in this
 *      kit: a guillemet that reaches a body is a marker that would publish.
 *   4. A banned word, banned opener, or banned closer from strategy/voice.md.
 *   5. A hashtag, where voice.md sets the hashtag policy to none.
 *   6. A secret shaped substring. Reports the class and the file name only,
 *      never the matched text.
 *   7. A dotted token left bare in prose. A platform autolinker rewrites it
 *      into a broken link. This one left dozens of dead links on a live page.
 *   8. A survey phrasing: a sentence that reports on the research rather than
 *      on the world. This is what separates an article from a report about
 *      articles, and the rule is about the shape of the sentence rather than
 *      about a word list, so rewording a survey into a synonym does not pass.
 *
 * WHICH RULES APPLY WHERE
 *   rule          article  strategy  plain
 *   dash             y        y        y
 *   metric           y        y        y
 *   placeholder      y        y        y
 *   secret           y        y        y
 *   voice            y        n        y
 *   hashtag          y        n        y
 *   autolink         y        n        y
 *   survey           y        n        y
 *
 *   strategy skips the voice rules because strategy/voice.md is the file that
 *   holds the banned lists, and a checker that fails its own vocabulary file
 *   is useless. It skips survey because a calendar entry legitimately names
 *   the intent it serves and the pages it has to beat, and it skips autolink
 *   because a competitor list is a list of domains.
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

const DESTINATIONS = ["article", "strategy", "plain"];

const PROFILE = {
  article:  { voice: true,  hashtag: true,  autolink: true,  survey: true },
  plain:    { voice: true,  hashtag: true,  autolink: true,  survey: true },
  strategy: { voice: false, hashtag: false, autolink: false, survey: false },
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
// entirely. Built from the code points above rather than written out, so this
// source file carries no literal entity for its own rule 1 to trip over.
const DASH_ENTITIES = [];
for (const [cp, name] of DASH_CODEPOINTS) {
  DASH_ENTITIES.push(["&#" + cp + ";", name + ", numeric entity"]);
  DASH_ENTITIES.push(["&#x" + cp.toString(16) + ";", name + ", hex entity"]);
}
// Split across the concatenation for the same reason.
DASH_ENTITIES.push(["&" + "mdash;", "em dash, named entity"]);
DASH_ENTITIES.push(["&" + "ndash;", "en dash, named entity"]);

/* ------------------------------------------------------------------ *
 * Rule 2. Metric shaped digit sequences, and the source that redeems one.
 * ------------------------------------------------------------------ */

const COUNT_NOUNS = [
  "customers?", "clients?", "members?", "users?", "subscribers?", "people",
  "founders?", "operators?", "teams?", "companies", "agencies", "accounts?",
  "readers?", "visitors?", "sessions?", "views?", "impressions?", "clicks?",
  "links?", "backlinks?", "posts?", "articles?", "pages?", "guides?",
  "keywords?", "entries", "drafts?", "cards?", "requests?", "sitemaps?",
  "properties", "sources?", "pillars?", "clusters?", "blockers?", "runs?",
  "positions?", "rankings?", "sales?", "signups?", "sign-ups?", "installs?",
  "days?", "weeks?", "months?", "years?", "hours?", "minutes?",
];

const NOUNS = COUNT_NOUNS.join("|");

const METRIC_PATTERNS = [
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*%", "g")],
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*percent\\b", "gi")],
  ["currency", new RegExp("[$£€¥]\\s?\\d[\\d,.]*\\s*(?:k|m|bn?|million|billion)?\\b", "gi")],
  ["currency", new RegExp("\\b\\d[\\d,.]*\\s*(?:usd|eur|gbp|dollars?|euros?|pounds?)\\b", "gi")],
  ["multiplier", new RegExp("\\b\\d[\\d,.]*x\\b", "gi")],
  // A count written either way round. A scoreboard writes "impressions 2,140"
  // and a brief writes "11 entries", and both are claims.
  ["count", new RegExp("\\b\\d[\\d,.]*\\+?\\s*(?:" + NOUNS + ")\\b", "gi")],
  ["count", new RegExp("\\b(?:" + NOUNS + ")\\s+\\d[\\d,.]*\\b", "gi")],
];

// Masked out before the metric scan so a date, a time, a threshold setting, or
// a card id is never read as a claim.
const NOT_A_METRIC = [
  /\b\d{4}-\d{2}-\d{2}\b/g,        // ISO date
  /\b\d{4}-W\d{2}\b/g,             // ISO week
  /\b\d{4}-\d{2}\b/g,              // calendar month
  /\b\d{1,2}:\d{2}(?::\d{2})?\b/g, // clock time
  /\b[Cc]-\d+\b/g,                 // card id
  /^\s*[a-z_]+\s*:\s*\d[\d.]*\s*$/gim, // a threshold line, e.g. impression_floor: 50
  /\bstep:?\s*\d+\b/gi,
  /\bU\+[0-9A-Fa-f]{4,6}\b/g,
  /\bNode\s*\d+\b/gi,
];

// What redeems a metric: the line it sits on also names where it came from.
const SOURCE_ON_LINE = [
  /[A-Za-z0-9_.-]+\/[A-Za-z0-9_./-]+/,                  // a kit relative path
  /\b[A-Za-z0-9_-]+\.(?:md|jsonl|json|csv|log|txt|webp)\b/i, // a bare filename
  /\bhttps?:\/\/\S/i,                                   // a URL
  /\([^)]{3,}\)/,                                       // a parenthesised clause
];

function hasSourceOnLine(line) {
  return SOURCE_ON_LINE.some((re) => re.test(line));
}

/* ------------------------------------------------------------------ *
 * Rule 3. Placeholders. Nothing survives: this kit has no sentinels.
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------ *
 * Rule 4. Voice. strategy/voice.md overrides these lists completely when it
 * is present. This is the shipped fallback for a kit that has not run intake.
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
    "leverage", "leveraging", "delve", "harnessing", "dive deep",
  ],
  bannedOpeners: [
    "Most people", "Most founders", "Most operators", "Most companies",
    "Most teams", "Most of us", "Everyone is", "Everyone's",
    "In today's", "In a world", "Let's face it", "Picture this",
    "Imagine a world", "It's no secret", "We've all been",
    "Here's the thing", "The truth is", "If you're like most",
  ],
  bannedClosers: [
    "That shift feels less", "The real shift is this", "The real shift is",
    "And that changes everything", "The bottom line is this",
    "At the end of the day", "That's the whole game",
    "In conclusion", "To sum up",
  ],
  hashtagPolicy: "none",
};

/* ------------------------------------------------------------------ *
 * Rule 6. Secrets. The class and the location are reported. Never the text.
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
  "mp4", "mp3", "wav", "so", "d", "mdx", "astro", "vue", "svelte",
]);

/* ------------------------------------------------------------------ *
 * Rule 8. Survey phrasing.
 *
 * A finding is stated as a fact about the world, never as the outcome of a
 * survey. The rule is about the shape of the sentence, so it is a list of
 * shapes rather than a list of words, and rewording one into a synonym does
 * not pass it. Rewrite the sentence as a fact about the world.
 * ------------------------------------------------------------------ */

const SURVEY_PHRASES = [
  "the top ranking pages", "top-ranking pages", "the top ranking page",
  "the pages that rank", "the pages currently ranking", "the ranking pages",
  "every guide i read", "the guides i read", "guides i read",
  "the articles i read", "articles i read",
  "most articles on this topic", "most articles about this",
  "most guides on this topic", "most of the guides",
  "no competitor covers", "none of the competitors", "no competing page",
  "search intent", "target keyword", "primary keyword", "secondary keyword",
  "keyword research", "competitor analysis", "the result set", "result sets",
  "the serp", "serps", "the first page of results", "first page of the results",
  "page one of the results", "the search results page",
];

const SURVEY_PATTERNS = [
  ["survey-count", /\b\d[\d,]*\s+(?:of\s+the\s+)?(?:top\s+)?(?:ranking\s+)?(?:pages|guides|competitors|results)\b/gi],
  ["survey-negation", /\b(?:none|neither|not one)\s+of\s+the\s+(?:top\s+)?(?:ranking\s+)?(?:pages|guides|articles|results|competitors)\b/gi],
  ["survey-comparison", /\b(?:outrank|outranking|outranks)\s+this\s+(?:article|page|post)\b/gi],
];

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

function rangesOf(text, patterns) {
  const ranges = [];
  for (const pattern of patterns) {
    const re = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      ranges.push([m.index, m.index + m[0].length]);
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
  /^\s*(?:url|source_url|search_screen|analytics_screen|sitemaps?|repository|post_registry)\s*:.*$/gim,
  /^---[\s\S]*?^---/gm,                    // a post's frontmatter block
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

function lineAt(text, index) {
  let start = text.lastIndexOf("\n", index);
  start = start === -1 ? 0 : start + 1;
  let end = text.indexOf("\n", index);
  if (end === -1) end = text.length;
  return text.slice(start, end);
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
 * Loading the member's own vocabulary
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
  const file = path.join(root, "strategy", "voice.md");
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
    source: "strategy/voice.md",
  };
}

/* ------------------------------------------------------------------ *
 * The checks
 * ------------------------------------------------------------------ */

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

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

  /* Build the prose view once: code, real URLs, and frontmatter are not prose. */
  const prose = maskRanges(text, rangesOf(text, CODE_AND_LINK_PATTERNS));

  /* Rule 2. Metrics, redeemed by a source on the same line. */
  const metricView = maskRanges(prose, rangesOf(prose, NOT_A_METRIC));
  const seenMetric = new Set();
  for (const [kind, pattern] of METRIC_PATTERNS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(metricView)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      // The source is read off the original line, not the masked one, because
      // masking removes the URLs and paths that redeem the number.
      if (hasSourceOnLine(lineAt(text, m.index))) continue;
      const key = m.index + "|" + m[0].length;
      if (seenMetric.has(key)) continue;
      seenMetric.add(key);
      at(m.index, m[0].length, "metric",
        "\"" + m[0].trim() + "\" reads as a " + kind + " and its line names no source. " +
        "Put the ledger path, the screen, or the window on the same line, or write the date instead of the count.");
    }
  }

  /* Rule 3. Unresolved placeholders. No sentinel survives in this kit. */
  for (let i = 0; i < text.length; i++) {
    const cp = text.codePointAt(i);
    if (cp === 0x00ab || cp === 0x00bb) {
      at(i, 1, "placeholder", "an unresolved guillemet placeholder. Fill it. This kit has no sentinels, so a marker here would publish.");
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
    const linkView = maskRanges(prose, rangesOf(prose, [/[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z.]{2,}/g]));
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

  /* Rule 8. Survey phrasing. */
  if (profile.survey) {
    const proseLower = prose.toLowerCase();
    for (const phrase of SURVEY_PHRASES) {
      let from = 0;
      for (;;) {
        const idx = proseLower.indexOf(phrase, from);
        if (idx === -1) break;
        at(idx, phrase.length, "survey",
          "\"" + phrase + "\" reports on the research rather than on the world. " +
          "Rewrite the sentence as a fact the reader can use. Rewording it into a synonym does not pass.");
        from = idx + phrase.length;
      }
    }
    for (const [kind, pattern] of SURVEY_PATTERNS) {
      const re = new RegExp(pattern.source, pattern.flags);
      let m;
      while ((m = re.exec(prose)) !== null) {
        if (m[0].length === 0) { re.lastIndex++; continue; }
        at(m.index, m[0].length, "survey",
          "\"" + m[0].trim() + "\" is a " + kind + ". State the finding as a fact about the world instead.");
      }
    }
  }

  v.sort((a, b) => (a.line - b.line) || (a.col - b.col));
  return v;
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
      violations: violations.map((item) => ({
        rule: item.rule, detail: item.detail, line: item.line, col: item.col, text: item.text,
      })),
    }, null, 2) + "\n");
    return;
  }

  if (opts.quiet) return;

  if (!violations.length) {
    process.stdout.write(
      "copy-check: PASS  " + label + "  dest=" + dest + "  (voice: " + ctx.voice.source + ")\n"
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
  const ctx = { voice: { ...FALLBACK_VOICE, source: "fallback" } };

  const cases = [
    ["clean article prose", "Transfer locks expire sixty days after a registrar change.\n\nThat is the whole rule.\n", "article", []],
    ["empty file", "", "plain", []],
    ["no trailing newline", "One clean line with nothing wrong in it", "plain", []],
    ["unicode and emoji", "Café owners ship fast 🚀 and it holds up fine.\nSecond line is clean.\n", "plain", []],
    // The dash fixtures use escapes, never a literal dash character, so this
    // source file passes its own rule 1.
    ["em dash", "This is a sentence\u2014and it continues.", "plain", ["dash"]],
    ["en dash", "Pages ten to twelve of the doc\u2013roughly.", "plain", ["dash"]],
    ["figure dash", "Rows three\u2012four are stale.", "plain", ["dash"]],
    ["dash inside a code comment", "```\n// a comment \u2014 with a dash\n```\n", "strategy", ["dash"]],
    ["banned word", "This will supercharge your pipeline.", "article", ["banned-word"]],
    ["banned opener at a line start", "Most people never ship anything.", "article", ["banned-opener"]],
    ["banned opener inside a bullet", "- Most founders skip this step.", "article", ["banned-opener"]],
    ["banned closer", "So it goes. At the end of the day nobody checks.", "article", ["banned-closer"]],
    ["hashtag", "Shipped it today. #founders", "article", ["hashtag"]],
    ["unsourced percentage", "Renewals rise 42% in the second year.", "article", ["metric"]],
    ["a percentage with a source on the line passes", "Renewals rise 42% in the second year (registry report, read 2026-03-04).", "article", []],
    ["a percentage with a link on the line passes", "Renewals rise 42% ([registry report](https://example.org/r)).", "article", []],
    ["unsourced count fails", "11 articles left to write", "plain", ["metric"]],
    ["a count with its ledger path passes", "calendar/CALENDAR.md, 11 entries not yet published", "plain", []],
    ["a reversed count with a source passes", "impressions 2,140 (search performance, window above)", "plain", []],
    ["a reversed count with no source fails", "impressions 2,140 this week", "plain", ["metric"]],
    ["a date instead of a count passes", "open since 2026-02-24", "plain", []],
    ["a threshold line is not a metric", "impression_floor: 50\nstall_window: 21\n", "strategy", []],
    ["a clock time is not a metric", "It fires at 08:15 every weekday.", "plain", []],
    ["a card id is not a metric", "C-014 is ready and C-021 is drafted.", "plain", []],
    ["unresolved placeholder", "Published to «property» this morning.", "article", ["placeholder"]],
    ["a secret", "Set the key to sk_" + "live_51H8xQ2ePlaceholderValue here.", "strategy", ["secret"]],
    ["a bare domain in prose", "Read more at example.com before you reply.", "article", ["autolink"]],
    ["a real link is fine", "Read more in [the guide](https://www.example.com) before you reply.", "article", []],
    ["a path in backticks is fine", "The ledger is `content/published.jsonl` and it appends.", "strategy", []],
    ["a bare kit path is fine", "Write it to index/requests.jsonl every run.", "plain", []],
    ["a filename is not a link", "Open drafts/domain-pricing-compared/meta.json and read it.", "plain", []],
    ["strategy skips the voice rules", "Banned words: supercharge, unlock, revolutionary.", "strategy", []],
    ["survey phrasing in an article", "None of the top ranking pages mentions the transfer lock.", "article", ["survey"]],
    ["a survey word list in an article", "This guide is built around search intent.", "article", ["survey"]],
    ["a survey count in an article", "Only 2 of the top ranking guides answer it.", "article", ["survey"]],
    ["strategy allows a calendar entry naming its intent", "Primary keyword, with its intent: search intent is informational.", "strategy", []],
    ["a fact about the world passes", "A transfer lock expires sixty days after a registrar change.", "article", []],
  ];

  let failures = 0;
  for (const [name, text, dest, expected] of cases) {
    const got = check(text, dest, ctx);
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

      // Flags that belong to a different kit or to an earlier draft. Fail
      // loudly and name the one real interface, so the stale call site gets
      // fixed rather than silently doing something else.
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
  if (process.env.SEO_ROOT) return path.resolve(process.env.SEO_ROOT);
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
    const guess = {
      email: "article", dm: "article", form: "plain", dashboard: "plain",
      body: "article", post: "article", html: "plain", text: "plain",
      calendar: "strategy", file: "strategy", internal: "strategy",
    }[opts.dest];
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
  const ctx = { voice: loadVoice(root) };

  const violations = check(text, opts.dest, ctx);
  report(violations, label, opts.dest, ctx, opts);
  process.exit(violations.length ? 1 : 0);
}

main();
