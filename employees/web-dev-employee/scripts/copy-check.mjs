#!/usr/bin/env node
/*
 * copy-check.mjs
 * The scripted judge for any text about to be written into a brief, a report,
 * a change brief, a policy file, or a dashboard partial.
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
 *   node scripts/copy-check.mjs --file - --dest plain        (reads stdin)
 *   node scripts/copy-check.mjs --file <path> --secrets-only [--json]
 *   node scripts/copy-check.mjs --selftest
 *   node scripts/copy-check.mjs --help
 *
 *   --dest is one of: plain, brief, report, change, policy, dashboard
 *   There is no --profile, no --destination, and no bare positional path.
 *   Any call site using one of those is stale and this script will say so.
 *
 *   --secrets-only is the secret.scan route. It runs rule 6 and nothing else,
 *   so a raw production log line can be scanned for a credential without
 *   being judged as prose. It takes no --dest. Use it before a log excerpt,
 *   a build failure reason, a package manager output line, or a diff is
 *   copied into any file in this kit.
 *
 * OPTIONS
 *   --json          Print a machine readable verdict instead of a report.
 *   --quiet         Print nothing. Use the exit code.
 *
 * THIS SCRIPT READS NO OTHER FILE. It judges the text it is handed and
 * nothing else, so it behaves identically on a fresh install and on a kit
 * that has been running for a year. There is no vocabulary file to fall out
 * of date and no inventory of approved numbers to keep.
 *
 * WHAT IT FAILS, in the order it checks
 *   1. An em dash or an en dash anywhere, including inside a code comment,
 *      and the HTML entity spellings of both.
 *   2. A metric shaped digit sequence (a percentage, a currency amount, a
 *      multiplier, or a count of errors, incidents, checks, packages, days,
 *      or people) unless the line it sits on also names the file the number
 *      was counted in. A date, an ISO week, a clock time, and a card id are
 *      masked out first and are never read as a claim.
 *   3. An unresolved guillemet placeholder. This kit has no sentinels: every
 *      guillemet in a generated file is a value that did not get filled.
 *   4. A banned word, banned opener, or banned closer.
 *   5. A hashtag. Nothing this Employee writes has one.
 *   6. A secret shaped substring. Reports the class and the file name only,
 *      never the matched text.
 *   7. A dotted token left bare in prose, which a publishing platform's
 *      autolinker rewrites into a broken link. OFF in every profile here:
 *      this Employee publishes nothing, and a bare domain name is its
 *      subject matter. See the note above rule 7 in the source.
 *
 * WHICH RULES APPLY WHERE
 *   rule          plain  brief  report  change  policy  dashboard
 *   dash            y      y      y       y       y        y
 *   metric          y      y      y       y       y        y
 *   placeholder     y      y      y       y       y        y
 *   secret          y      y      y       y       y        y
 *   voice           y      y      y       y       n        y
 *   hashtag         y      y      y       y       n        n
 *   autolink        n      n      n       n       n        n
 *
 *   Every routine in this kit calls --dest plain, which is the strictest
 *   profile and the right default. The other five exist so a member can
 *   loosen one surface without loosening all of them.
 *
 *   policy skips the voice rules because policy/safe-fix-rules.md is a table
 *   of rung names rather than prose, and a checker that fails a boundary file
 *   is a checker that gets turned off. dashboard skips hashtag and autolink
 *   because a hex colour and a markup attribute are not prose.
 *
 * EXIT CODES
 *   0  clean
 *   1  one or more violations
 *   2  bad usage, or the input could not be read
 */

import fs from "node:fs";
import { fileURLToPath } from "node:url";

const SELF = fileURLToPath(import.meta.url);

const DESTINATIONS = ["plain", "brief", "report", "change", "policy", "dashboard"];

// Rule 7, the autolinker rule, is off in every profile in this kit, and that
// is the one rule this Employee deliberately does not run. See the note above
// rule 7 below for why: a bare dotted token is this Employee's subject matter,
// not a hazard, because nothing it writes is ever published anywhere an
// autolinker could reach.
const PROFILE = {
  plain:     { voice: true,  hashtag: true,  autolink: false, markup: false },
  brief:     { voice: true,  hashtag: true,  autolink: false, markup: false },
  report:    { voice: true,  hashtag: true,  autolink: false, markup: false },
  change:    { voice: true,  hashtag: true,  autolink: false, markup: false },
  policy:    { voice: false, hashtag: false, autolink: false, markup: false },
  dashboard: { voice: true,  hashtag: false, autolink: false, markup: true },
};

// Destinations that belong to a sibling Employee rather than to this one.
// Naming the replacement is cheaper than a member reading the contract to
// work out why a call site stopped working.
const RETIRED_DESTINATIONS = {
  email: "this Employee writes no outbound copy. Use plain",
  dm: "this Employee writes no outbound copy. Use plain",
  form: "this Employee fills no listing forms. Use plain",
  strategy: "there is no strategy folder in this kit. Use policy, or plain",
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

// The nouns this Employee actually writes numbers against. A count of one of
// these in front of a member reads as a measurement, so it carries its source
// or it does not go in.
//
// Four nouns are deliberately absent and every one of them would misfire.
// "lines" is a limit in policy/safe-fix-rules.md rather than a claim.
// "observations" only ever appears inside the n/a string that says a metric
// was below its floor, which is the honest answer this rule exists to
// encourage. "minutes" and "hours" are almost always a duration this run
// measured off its own clock, and a clock is a source no line can name.
const COUNT_NOUNS = [
  "errors?", "incidents?", "fingerprints?", "regressions?", "failures?",
  "blockers?", "findings?", "advisories", "advisory", "vulnerabilities",
  "projects?", "packages?", "dependencies", "branches", "branch",
  "changes?", "commits?", "cards?", "checks?", "migrations?",
  "domains?", "certificates?", "hostnames?", "builds?", "deploys?",
  "customers?", "clients?", "members?", "users?", "people", "teams?",
  "companies", "accounts?", "visitors?", "sessions?", "views?", "clicks?",
  "requests?", "links?",
  "days?", "weeks?", "months?", "years?",
];

const METRIC_PATTERNS = [
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*%", "g")],
  ["percentage", new RegExp("\\b\\d[\\d,.]*\\s*percent\\b", "gi")],
  ["currency", new RegExp("[$£€¥]\\s?\\d[\\d,.]*\\s*(?:k|m|bn?|million|billion)?\\b", "gi")],
  ["currency", new RegExp("\\b\\d[\\d,.]*\\s*(?:usd|eur|gbp|dollars?|euros?|pounds?)\\b", "gi")],
  ["multiplier", new RegExp("\\b\\d[\\d,.]*x\\b", "gi")],
  // Up to two words may sit between the number and the noun, because "4 new
  // errors" and "3 consecutive clean months" are exactly the shapes that read
  // as a claim, and a pattern that only matches a noun touching the digit
  // misses both.
  ["count", new RegExp("\\b\\d[\\d,.]*\\+?\\s*(?:[A-Za-z]{2,12}\\s+){0,2}(?:" + COUNT_NOUNS.join("|") + ")\\b", "gi")],
];

// Masked out before the metric scan so a date, a time, or a card id is never
// read as a claim.
const NOT_A_METRIC = [
  /\b\d{4}-\d{2}-\d{2}\b/g,   // ISO date
  /\b\d{4}-W\d{2}\b/g,        // ISO week
  /\b\d{4}-\d{2}\b/g,         // calendar month
  /\b\d{1,2}:\d{2}(?::\d{2})?\b/g, // clock time
  /\b[Cc]-\d+\b/g,            // card id
  /\bstep\s*\u00ab?n?\u00bb?\s*\d*\b/gi,
  /\bstep:\s*\d+\b/gi,
  /\bHTTP\/\d(?:\.\d)?\b/gi,
  /\b[1-5]\d{2}\s*(?:status|response)?\b(?=\s*(?:status|code|response|returned|and|,|\.|$))/g,
  /\bU\+[0-9A-Fa-f]{4,6}\b/g,
  /\bNode\s*\d+\b/gi,
];

/* ------------------------------------------------------------------ *
 * Rule 3. Placeholders.
 *
 * This kit has no sentinels and that is deliberate. A sibling Employee needs
 * one because a member has to paste a credential into a draft by hand. This
 * Employee never writes a draft anybody sends, so every guillemet left in a
 * generated file is a value the run failed to fill, and the honest fix is to
 * fill it or to write one of the n/a strings the routines carry.
 * ------------------------------------------------------------------ */

const SENTINELS = [];

/* ------------------------------------------------------------------ *
 * Rule 4. Voice. These lists ship inside this script and there is no file
 * that overrides them, because this Employee writes reports and briefs rather
 * than marketing copy and has no voice to configure. A member who wants one
 * of these words allowed writes a line in the Corrections section of the
 * routine that keeps tripping on it.
 * ------------------------------------------------------------------ */

const SHIPPED_VOICE = {
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
 * Rule 7. The autolinker rule, which is OFF in every profile in this kit.
 *
 * The rule itself is real: one publishing platform auto-links any dotted
 * token sitting bare in prose, and anchor text carrying a dot-TLD gets
 * silently rewritten into a broken link. It once left dozens of dead links on
 * a live page.
 *
 * It is off here because this Employee has no publishing surface at all.
 * Every file it writes is a local markdown file the member opens, and no
 * autolinker ever sees one. Meanwhile a bare domain name is this Employee's
 * actual subject matter: "«domain» expires 2026-04-02 and auto renew reads
 * off" is the exact line the platform guard and the standup are required to
 * write, and failing it would fail the deliverable rather than protect it.
 *
 * The code stays, with every profile set to false, because the knowledge is
 * worth keeping and a member who repurposes this script for a surface that
 * does publish can turn it back on in one line. FILE_EXTENSIONS below is not
 * dead either: SOURCE_ON_LINE is built from it.
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
 * Rule 2, the second half. A number passes when the line it sits on names
 * the file the number was counted in.
 *
 * Every figure this Employee produces was folded out of one of its own
 * ledgers this run, so naming the ledger is always possible and it is always
 * the better sentence. "health/incidents.jsonl, 4 fingerprints new today"
 * says where to look. "4 new errors on your site" is a claim about the
 * member's business that nothing in the file supports.
 *
 * A source is a path or a bare filename carrying one of the extensions above,
 * or the URL of the screen the value was read off. The platform guard reads
 * its values off a provider screen rather than out of a ledger, so a screen
 * is a source in exactly the way a ledger path is.
 * ------------------------------------------------------------------ */

const SOURCE_ON_LINE = new RegExp(
  "(?:^|[\\s(\\[`|/\"'])[A-Za-z0-9_][A-Za-z0-9_.-]*(?:/[A-Za-z0-9_.-]+)*\\.(?:" +
  [...FILE_EXTENSIONS].join("|") + ")(?![A-Za-z0-9])" +
  "|https?://[^\\s<>()\"']+"
);

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
 * The one line lookup rule 2 needs
 * ------------------------------------------------------------------ */

function lineTextAt(text, starts, index) {
  let lo = 0;
  let hi = starts.length - 1;
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (starts[mid] <= index) lo = mid; else hi = mid - 1;
  }
  const from = starts[lo];
  const nl = text.indexOf("\n", from);
  return text.slice(from, nl === -1 ? text.length : nl);
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

  /* Rule 2. Metrics, and the source that redeems one. */
  const metricView = maskRanges(prose, rangesOf(prose, NOT_A_METRIC));
  for (const [kind, pattern] of METRIC_PATTERNS) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(metricView)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      const claim = m[0].trim();
      if (SOURCE_ON_LINE.test(lineTextAt(text, starts, m.index))) continue;
      at(m.index, m[0].length, "metric",
        "\"" + claim + "\" reads as a " + kind + " and the line it sits on names no source. " +
        "Put the path of the file you counted it in on the same line, or write the date instead of the count.");
    }
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

  v.sort((a, b) => (a.line - b.line) || (a.col - b.col));
  return v;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function shippedVoice() {
  return { ...SHIPPED_VOICE, source: "the shipped list in scripts/copy-check.mjs" };
}

/* The secret.scan route. Rule 6 and nothing else, so a raw production log
   line, a build failure reason, a package manager output line, or a diff can
   be scanned for a credential without being judged as prose. It reports the
   class and the location and never the matched text, on purpose: a scanner
   that echoes what it found has written the secret into a second file. */
function checkSecretsOnly(text) {
  const v = [];
  const starts = lineStarts(text);
  for (const [cls, pattern] of SECRET_CLASSES) {
    const re = new RegExp(pattern.source, pattern.flags);
    let m;
    while ((m = re.exec(text)) !== null) {
      if (m[0].length === 0) { re.lastIndex++; continue; }
      const where = locate(starts, m.index);
      v.push({
        rule: "secret",
        detail: "a substring matching the " + cls + " class. Withhold the line, name the class and the screen, " +
          "and never rotate the key yourself.",
        line: where.line, col: where.col, text: null,
      });
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
      metric_rule: "a number carries the path of the file it was counted in, on the same line",
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
 * Self test. This script reads no file at all, so the context is the shipped
 * one and the test is the same on every machine.
 * ------------------------------------------------------------------ */

function selftest() {
  const ctx = { voice: shippedVoice() };

  const cases = [
    ["a clean brief line", "# 2026-03-06\n\n## Today\nC-041 on acme-site, changes/2026-03-05-fix-C-041.md\n", "brief", ctx, []],
    ["empty file", "", "plain", ctx, []],
    ["no trailing newline", "One clean line with nothing wrong in it", "plain", ctx, []],
    ["unicode and emoji", "Cafe owners ship fast and it holds up fine.\nSecond line is clean.\n", "plain", ctx, []],
    // The dash fixtures use escapes, never a literal dash character, so this
    // source file passes its own rule 1.
    ["em dash", "This is a sentence\u2014and it continues.", "plain", ctx, ["dash"]],
    ["en dash", "Pages 10\u201312 of the doc.", "plain", ctx, ["dash"]],
    ["figure dash", "Rows 3\u20124 are stale.", "plain", ctx, ["dash"]],
    ["dash inside a code comment", "```\n// a comment \u2014 with a dash\n```\n", "policy", ctx, ["dash"]],
    ["banned word", "This will supercharge the build.", "report", ctx, ["banned-word"]],
    ["banned opener at a line start", "Most people never check their logs.", "report", ctx, ["banned-opener"]],
    ["banned opener inside a bullet", "- Most teams skip this step.", "report", ctx, ["banned-opener"]],
    ["banned closer", "So it goes. The real shift is this: nobody checks.", "report", ctx, ["banned-closer"]],
    ["hashtag", "Shipped it today. #founders", "brief", ctx, ["hashtag"]],
    ["hex colour is not a hashtag", "<div style=\"color:#fff\">ok</div>", "dashboard", ctx, []],
    ["an unsourced count", "4 new errors on your site today.", "brief", ctx, ["metric"]],
    ["the same count with its ledger passes", "health/incidents.jsonl, 4 new errors today.", "brief", ctx, []],
    ["an unsourced elapsed count", "That blocker has been open 9 days.", "brief", ctx, ["metric"]],
    ["the date instead of the count passes", "That blocker has been open since 2026-02-24.", "brief", ctx, []],
    ["an unsourced percentage", "Uptime was 99.4% last week.", "report", ctx, ["metric"]],
    ["a value sourced to a screen passes", "auto renew reads off, read on https://example.com/domains/acme", "report", ctx, []],
    ["a gate duration is not a claim", "ran at: 2026-03-05T08:31:07+07:00 took: 4 minutes", "change", ctx, []],
    ["a sourced percentage passes", "Uptime 99.4% | acme-site | health/checks.jsonl", "report", ctx, []],
    ["an unsourced currency", "The plan upgrade costs $20 a month.", "report", ctx, ["metric"]],
    ["a line count limit is not a claim", "content   one-file    12 lines", "policy", ctx, []],
    ["an observation floor is not a claim", "median response n/a (2 observations, floor 3)", "report", ctx, []],
    ["an ISO date is not a metric", "Observed on 2026-03-04 and merged 2026-03-05.", "plain", ctx, []],
    ["an ISO week is not a metric", "Window 2026-W11 to 2026-W12.", "report", ctx, []],
    ["a card id is not a metric", "C-041 is ready and C-038 is done.", "plain", ctx, []],
    ["a clock time is not a metric", "It fires at 08:10 every weekday.", "plain", ctx, []],
    ["an unresolved placeholder", "The domain \u00abdomain\u00bb expires soon.", "report", ctx, ["placeholder"]],
    ["a secret", "Set the key to sk_" + "live_51H8xQ2ePlaceholderValue here.", "policy", ctx, ["secret"]],
    ["a bare domain in prose is fine here", "The host serves example.com from that project.", "report", ctx, []],
    ["the expiry line the platform guard has to write", "example.com expires 2026-04-02 and auto renew reads off", "report", ctx, []],
    ["a real link is fine", "Open [the screen](https://example.com/projects) to change it.", "report", ctx, []],
    ["a path in backticks is fine", "The ledger is `health/incidents.jsonl` and it appends.", "policy", ctx, []],
    ["a bare kit path is fine", "Write it to health/incidents.jsonl every run.", "plain", ctx, []],
    ["a filename is not a link", "Open changes/2026-03-05-fix-C-041.md and read the gate.", "plain", ctx, []],
    ["policy skips the voice rules", "Banned words: supercharge, unlock, revolutionary.", "policy", ctx, []],
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

  // The secret.scan route. It runs rule 6 and nothing else, so a raw log line
  // carrying a dash and an unsourced count is clean unless it carries a key.
  const rawLogLine = "2026-03-04 ERROR 37 errors \u2014 cannot read properties of undefined";
  if (checkSecretsOnly(rawLogLine).length === 0) {
    process.stdout.write("  ok    secrets-only ignores prose rules on a raw log line\n");
  } else {
    failures++;
    process.stdout.write("  FAIL  secrets-only ignores prose rules on a raw log line\n");
  }
  const leakyLogLine = "connect failed for postgres://user:hunter2@db.internal:5432/app";
  const leaks = checkSecretsOnly(leakyLogLine);
  if (leaks.length === 1 && leaks[0].rule === "secret" && leaks[0].text === null) {
    process.stdout.write("  ok    secrets-only catches a credential and never echoes it\n");
  } else {
    failures++;
    process.stdout.write("  FAIL  secrets-only catches a credential and never echoes it\n");
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
    ? "copy-check: selftest PASS (" + (cases.length + 3) + " checks)\n"
    : "copy-check: selftest FAIL (" + failures + " of " + (cases.length + 3) + ")\n");
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
  const opts = { file: null, dest: null, json: false, quiet: false, selftest: false, help: false, secretsOnly: false };

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
      case "--secrets-only": opts.secretsOnly = true; break;

      // Flags earlier drafts of this kit invented. Fail loudly and name the
      // one real interface, so the stale call site gets fixed rather than
      // silently doing something else.
      case "--destination":
        die("there is no --destination. The flag is --dest.\n  " + CANONICAL);
        break;
      case "--profile":
        die("there is no --profile. The flag is --dest, one of: " + DESTINATIONS.join(", ") + "\n  " + CANONICAL);
        break;
      case "--root":
        die("there is no --root. This script reads no other file.\n  " + CANONICAL);
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

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) { usage(); process.exit(0); }
  if (opts.selftest) { selftest(); return; }

  if (opts.secretsOnly) {
    if (opts.dest !== null) {
      die("--secrets-only takes no --dest. It runs rule 6 and nothing else.\n  " + CANONICAL);
    }
  } else if (opts.dest === null) {
    die("--dest is required, one of: " + DESTINATIONS.join(", ") +
      "\n  Or pass --secrets-only to scan a raw log line for a credential.\n  " + CANONICAL);
  } else if (!DESTINATIONS.includes(opts.dest)) {
    const retired = RETIRED_DESTINATIONS[opts.dest];
    const guess = { html: "dashboard", text: "plain", markdown: "plain", file: "policy", internal: "policy" }[opts.dest];
    die("unknown dest \"" + opts.dest + "\"." +
      (retired ? " " + retired + "." : (guess ? " Did you mean \"" + guess + "\"?" : "")) +
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

  const ctx = { voice: shippedVoice() };
  const dest = opts.secretsOnly ? "secrets-only" : opts.dest;
  const violations = opts.secretsOnly ? checkSecretsOnly(text) : check(text, opts.dest, ctx);
  report(violations, label, dest, ctx, opts);
  process.exit(violations.length ? 1 : 0);
}

main();
