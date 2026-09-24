#!/usr/bin/env node
/*
 * runlog.mjs
 * The only sanctioned way to append a run record to «SEO_ROOT»/runlog.jsonl.
 *
 * Why this script exists: a shell redirect, an append cmdlet, or a hand rolled
 * write prepends a byte order mark on Windows, and that corrupts the first line
 * of the log for every reader after it. This script writes UTF-8 with no mark,
 * repairs a stray mark already at the head of the file, and refuses a record
 * that carries a secret, article text, a keyword, or personal data.
 *
 * Requires Node 18 or newer. No dependencies, no package.json, no install.
 * Runs the same on Windows and POSIX.
 *
 * USAGE
 *   These three work on every shell, so a routine should reach for one of them:
 *
 *     <the JSON> | node scripts/runlog.mjs --stdin
 *     node scripts/runlog.mjs --file <path to a .json file>
 *     node scripts/runlog.mjs --routine seo-publish-run --period 2026-03-05 \
 *          --start <ISO> --end <ISO> --status ok \
 *          --output "content/published.jsonl (+1 published)" \
 *          --blocker "..." --notes "one line"
 *
 *   This one works on POSIX shells only. PowerShell strips every double quote
 *   out of an argument on its way to a native command, so the object arrives
 *   unquoted and unparseable. Do not put it in a routine that has to be
 *   portable:
 *
 *     node scripts/runlog.mjs '<one JSON object>'
 *     node scripts/runlog.mjs --json '<one JSON object>'
 *
 *   node scripts/runlog.mjs --failed-run gtm-board-standup --exit-code 1
 *       (the launcher's form: appends a failed record when the harness exited
 *        before the routine could write one, which is what a missing login looks like)
 *
 *   node scripts/runlog.mjs --selftest
 *   node scripts/runlog.mjs --help
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent
 *                   folder, then the SEO_ROOT environment variable.
 *   --log <path>    Write to this file instead of «SEO_ROOT»/runlog.jsonl.
 *   --dry-run       Validate and print the line. Write nothing.
 *   --once          Refuse if a record for this routine and period already
 *                   exists. Off by default, because the once per period guard
 *                   legitimately writes a second record with the status
 *                   skipped-already-ran.
 *
 * THE RECORD
 *   Every field is required. outputs and blockers are always arrays, empty
 *   rather than absent. notes is one line.
 *
 *   Nine optional fields are accepted when present, counts and prices only:
 *   model, harness (strings), turns, input_tokens, output_tokens,
 *   cache_write_tokens, cache_read_tokens (whole numbers), cost_usd (number or
 *   null), cost_basis (api-list | subscription | unknown).
 *
 *   {"routine":"seo-publish-run","period":"2026-03-05",
 *    "start":"2026-03-05T09:15:07+07:00","end":"2026-03-05T09:44:51+07:00",
 *    "status":"ok",
 *    "outputs":["content/published.jsonl (+1 published)"],
 *    "blockers":[],
 *    "notes":"repository route; build passed; live check 4 of 4"}
 *
 * WHAT IT REFUSES, and why the refusal names a class and never the text
 *   The run log is the file most likely to be pasted into a support thread, a
 *   screenshot, or a shared folder. So it carries counts, slugs, file paths,
 *   live URLs on the member's own properties, and blockers, and nothing else.
 *
 *   secret            a key, token, password, private key block, or a URL with
 *                     a credential embedded in it
 *   foreign-url       a URL whose host is not one of the member's own
 *                     properties, read from strategy/properties.md. A live
 *                     article URL on a property in that file is fine and is
 *                     the point. A competitor URL or a profile URL is not
 *   email-address     personal data
 *   keyword           a primary keyword folded out of the content ledgers.
 *                     Commercial intelligence, and it stays in the kit
 *   multiple-lines    a field carrying a newline is prose, not a record
 *   unresolved-placeholder  a guillemet. There are no sentinels in this kit
 *
 * EXIT CODES
 *   0  appended (or validated, under --dry-run)
 *   1  could not write the file
 *   2  bad input: bad usage, bad JSON, bad shape, bad status, bad period
 *   3  refused: the record carries something that must stay inside the kit
 *   4  refused by --once: a record for this routine and period already exists
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SELF = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SELF);

/* ------------------------------------------------------------------ *
 * The closed vocabularies. These come from CONTRACT.md sections 1 and 4.
 * ------------------------------------------------------------------ */

const REQUIRED = ["routine", "period", "start", "end", "status", "outputs", "blockers", "notes"];

// Optional usage fields, validated when present and never required, so older records stay valid.
// Counts and prices only, never prose. They exist so cost is a measured field rather than a guess.
const OPTIONAL = {
  model: "string", harness: "string", turns: "integer", input_tokens: "integer", output_tokens: "integer",
  cache_write_tokens: "integer", cache_read_tokens: "integer", cost_usd: "number-or-null", cost_basis: "cost-basis",
};
const COST_BASIS = new Set(["api-list", "subscription", "unknown"]);

// CONTRACT.md 4.1. Eight values. There is no ninth.
const STATUSES = new Set([
  "ok",
  "partial",
  "failed",
  "skipped-paused",
  "skipped-out-of-window",
  "skipped-already-ran",
  "blocked-login",
  "blocked-browser-busy",
  "skipped-paused",
]);

// Statuses an agent might reach for that this kit does not have. Naming the
// replacement is cheaper than a member reading the contract to work out what
// went wrong.
const RETIRED_STATUSES = {
  "blocked-approval": "nothing in this kit waits for an approval. Use partial, or ok",
  "blocked-machine": "use partial when file work was done, failed when it was not",
  "skipped-browser-busy": "use blocked-browser-busy",
  "blocked-capability": "use partial when file work was done, failed when it was not",
  "skipped-no-work": "a run with nothing to do is a successful run. Use ok",
  "published": "that is not a status. Use ok",
  "done": "that is not a status. Use ok",
};

// CONTRACT.md 1.3. Which period key shape each routine writes.
const CADENCE = {
  "seo-standup": "day",
  "seo-draft-run": "day",
  "seo-publish-run": "day",
  "seo-index-sweep": "week",
  "seo-calendar-refill": "week",
  "seo-rank-review": "week",
  "seo-intake-and-map": "month",
};

const PERIOD_SHAPE = {
  day: /^\d{4}-\d{2}-\d{2}$/,
  week: /^\d{4}-W\d{2}$/,
  month: /^\d{4}-\d{2}$/,
};

/* ------------------------------------------------------------------ *
 * What a run record may never carry. CONTRACT.md 4.2.
 * ------------------------------------------------------------------ */

const SECRET_CLASSES = [
  ["stripe-key", /\bsk_(live|test)?_?[A-Za-z0-9]{8,}/],
  ["webhook-secret", /\bwhsec_[A-Za-z0-9]{8,}/],
  ["json-web-token", /\beyJ[A-Za-z0-9_-]{10,}/],
  ["github-token", /\bgh[pousr]_[A-Za-z0-9]{16,}/],
  ["google-api-key", /\bAIza[A-Za-z0-9_-]{20,}/],
  ["aws-access-key", /\bAKIA[A-Z0-9]{12,}/],
  ["slack-token", /\bxox[abprs]-[A-Za-z0-9-]{8,}/],
  ["bearer-token", /\bBearer\s+[A-Za-z0-9._~+/-]{16,}/i],
  ["wordpress-app-password", /\b(?:[A-Za-z0-9]{4}\s){5}[A-Za-z0-9]{4}\b/],
  ["password-literal", /\bpass(word|wd)\s*[:=]/i],
  ["private-key-block", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  ["credential-in-url", /\b[a-z][a-z0-9+.-]*:\/\/[^\s/@]+:[^\s/@]+@/i],
];

const EMAIL_ADDRESS = /[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}/;
const URL_IN_TEXT = /\bhttps?:\/\/([^\s/?#"'<>]+)/gi;
const PLACEHOLDER = /[«»]/; // guillemets. There are no sentinels in this kit

// Length caps. A run record carries counts and paths, never prose.
const CAPS = { notes: 400, output: 220, blocker: 320 };

/* ------------------------------------------------------------------ *
 * Small helpers
 * ------------------------------------------------------------------ */

function die(code, message) {
  process.stderr.write("runlog: " + message + "\n");
  process.exit(code);
}

function warn(message) {
  process.stderr.write("runlog: note: " + message + "\n");
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function readStdin() {
  try {
    return fs.readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function readIfPresent(file) {
  try { return fs.readFileSync(file, "utf8"); } catch { return null; }
}

function normaliseHost(host) {
  return String(host || "").toLowerCase().replace(/^www\./, "").replace(/:\d+$/, "");
}

/* ------------------------------------------------------------------ *
 * The member's own hosts, and the member's own keywords.
 *
 * A live article URL on one of the member's own properties is exactly what a
 * member asks for when they ask whether it shipped, so it belongs in the
 * record. A URL on anybody else's site is a competitor page or a profile, and
 * that is somebody else's data sitting in the file most likely to be pasted
 * somewhere. Reading the property list is what tells the two apart.
 *
 * A keyword is the member's commercial intelligence. It lives in the calendar
 * and the ledgers and it never leaves them.
 * ------------------------------------------------------------------ */

function loadOwnHosts(root) {
  const text = readIfPresent(path.join(root, "strategy", "properties.md"));
  if (text === null) return { hosts: null, source: "missing" };
  const hosts = new Set();
  let m;
  const re = /\bhttps?:\/\/([^\s/?#"'<>)\]]+)/gi;
  while ((m = re.exec(text)) !== null) hosts.add(normaliseHost(m[1]));
  // A bare domain on a property heading line, e.g. "## example-com: Example"
  for (const line of text.split(/\r?\n/)) {
    const head = line.match(/^\s{0,3}##\s+([a-z0-9][a-z0-9.-]*\.[a-z]{2,})\s*:/i);
    if (head) hosts.add(normaliseHost(head[1]));
  }
  return { hosts, source: "strategy/properties.md" };
}

function loadKeywords(root) {
  const out = new Set();
  for (const name of ["published.jsonl", "drafts.jsonl"]) {
    const text = readIfPresent(path.join(root, "content", name));
    if (text === null) continue;
    for (const line of stripBom(text).split("\n")) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      try {
        const row = JSON.parse(trimmed);
        const k = row && typeof row.keyword === "string" ? row.keyword.trim() : "";
        // Short strings collide with ordinary words. Four characters is the
        // floor at which a match is a keyword rather than a coincidence.
        if (k.length >= 4) out.add(k.toLowerCase());
      } catch { /* a malformed ledger line is not this script's problem */ }
    }
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Argument parsing
 * ------------------------------------------------------------------ */

function parseArgs(argv) {
  const opts = {
    failedRun: null, exitCode: null,
    root: null, log: null, json: null, file: null,
    stdin: false, dryRun: false, once: false, selftest: false, help: false,
    fields: {}, outputs: [], blockers: [], positional: [],
  };

  const takesValue = new Set([
    "--root", "--log", "--json", "--file",
    "--routine", "--period", "--start", "--end", "--status", "--notes",
    "--output", "--blocker",
  ]);

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (arg === "--help" || arg === "-h") { opts.help = true; continue; }
    if (arg === "--selftest") { opts.selftest = true; continue; }
    if (arg === "--dry-run") { opts.dryRun = true; continue; }
    if (arg === "--once") { opts.once = true; continue; }
    if (arg === "--failed-run") { opts.failedRun = argv[++i]; if (opts.failedRun === undefined) die(2, "--failed-run needs a routine id"); continue; }
    if (arg === "--exit-code") { opts.exitCode = argv[++i]; if (opts.exitCode === undefined) die(2, "--exit-code needs a number"); continue; }
    if (arg === "--stdin" || arg === "-") { opts.stdin = true; continue; }

    if (takesValue.has(arg)) {
      const value = argv[i + 1];
      if (value === undefined) die(2, arg + " needs a value");
      i++;
      switch (arg) {
        case "--root": opts.root = value; break;
        case "--log": opts.log = value; break;
        case "--json": opts.json = value; break;
        case "--file": opts.file = value; break;
        case "--output": opts.outputs.push(value); break;
        case "--blocker": opts.blockers.push(value); break;
        default: opts.fields[arg.slice(2)] = value; break;
      }
      continue;
    }

    if (arg.startsWith("--")) {
      die(2, "unknown option " + arg + ". Run with --help for the interface.");
    }
    opts.positional.push(arg);
  }

  return opts;
}

function resolveRoot(opts) {
  if (opts.root) return path.resolve(opts.root);
  if (process.env.SEO_ROOT) return path.resolve(process.env.SEO_ROOT);
  // The script lives at «SEO_ROOT»/scripts/runlog.mjs, so its parent is the
  // root no matter which folder the routine was launched from.
  return path.resolve(SCRIPT_DIR, "..");
}

/* ------------------------------------------------------------------ *
 * Building the record from whatever the caller gave us
 * ------------------------------------------------------------------ */

function recordFromFlags(opts) {
  const f = opts.fields;
  const record = {
    routine: f.routine,
    period: f.period,
    start: f.start,
    end: f.end,
    status: f.status,
    outputs: opts.outputs,
    blockers: opts.blockers,
    notes: f.notes === undefined ? "" : f.notes,
  };
  for (const key of ["routine", "period", "start", "end", "status"]) {
    if (record[key] === undefined) {
      die(2, "missing --" + key + ". Run with --help for the interface.");
    }
  }
  return record;
}

/*
 * The launcher's record. run/<id>.cmd calls this when the harness exits non zero
 * before the routine wrote anything, which is what a missing login looks like.
 */
function failedRecord(opts) {
  const id = String(opts.failedRun).trim();
  const code = String(opts.exitCode === null ? "unknown" : opts.exitCode).trim();
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const off = -now.getTimezoneOffset();
  const stamp = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate()) + "T" + pad(now.getHours()) + ":" + pad(now.getMinutes()) + ":" + pad(now.getSeconds()) +
    (off >= 0 ? "+" : "-") + pad(Math.floor(Math.abs(off) / 60)) + ":" + pad(Math.abs(off) % 60);
  const cadence = CADENCE[id] || "day";
  let period = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
  if (cadence === "month") period = now.getFullYear() + "-" + pad(now.getMonth() + 1);
  if (cadence === "week") {
    const t = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    const day = t.getUTCDay() || 7;
    t.setUTCDate(t.getUTCDate() + 4 - day);
    const ys = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
    period = t.getUTCFullYear() + "-W" + pad(Math.ceil(((t - ys) / 86400000 + 1) / 7));
  }
  return {
    routine: id, period, start: stamp, end: stamp, status: "failed", outputs: [],
    blockers: ["launcher: the harness exited with code " + code + " before this routine wrote a run record. Check the login first (claude auth status), then the path to the binary in run/" + id + ".cmd"],
    notes: "written by the launcher, not by the routine",
  };
}

function loadPayload(opts) {
  const usedFlagForm = Object.keys(opts.fields).length > 0 || opts.outputs.length > 0 || opts.blockers.length > 0;

  let raw = null;
  let source = "";

  if (opts.json !== null) { raw = opts.json; source = "--json"; }
  else if (opts.file !== null) {
    source = opts.file;
    try { raw = fs.readFileSync(opts.file, "utf8"); }
    catch (err) { die(2, "cannot read " + opts.file + ": " + err.message); }
  } else if (opts.positional.length > 0) { raw = opts.positional.join(" "); source = "argument"; }
  else if (usedFlagForm) { return { record: recordFromFlags(opts), source: "flags" }; }
  else if (opts.stdin || !process.stdin.isTTY) { raw = readStdin(); source = "stdin"; }
  else {
    die(2, "no payload. Pass a JSON object, --file <path>, --stdin, or the --routine flag set. Run with --help.");
  }

  raw = stripBom(raw).trim();
  if (!raw) die(2, "empty payload from " + source);

  let parsed;
  try { parsed = JSON.parse(raw); }
  catch (err) {
    // PowerShell strips every double quote out of an argument on its way to a
    // native command, so a JSON object passed positionally arrives with no
    // quotes at all and cannot be recovered without guessing. The signature is
    // unmistakable, so name it rather than letting the member re-read the docs.
    const quoteStripped = raw.startsWith("{") && raw.includes(":") && !raw.includes("\"");
    if (quoteStripped) {
      die(2,
        "the JSON arrived with every double quote removed, which is what PowerShell does to an\n" +
        "  argument handed to a native command. The object cannot be rebuilt from it.\n" +
        "  Three routes work on every shell. Any of them is fine:\n" +
        "    1. pipe it in:   $record | node scripts/runlog.mjs --stdin\n" +
        "    2. write a file: node scripts/runlog.mjs --file <path to a .json file>\n" +
        "    3. use flags:    node scripts/runlog.mjs --routine <id> --period <key> --status ok ...\n" +
        "  Passing the object as a positional argument works on POSIX shells only."
      );
    }
    die(2, "payload from " + source + " is not valid JSON: " + err.message +
      "\n  Pipe it to --stdin, or pass --file, if your shell is rewriting the quotes.");
  }
  if (!isPlainObject(parsed)) die(2, "payload must be one JSON object, not an array or a scalar");
  return { record: parsed, source };
}

/* ------------------------------------------------------------------ *
 * Validation: shape first, then content
 * ------------------------------------------------------------------ */

function validateShape(record) {
  const problems = [];

  for (const key of REQUIRED) {
    if (!(key in record)) problems.push("missing key " + key);
  }
  if (problems.length) return problems;

  const extra = Object.keys(record).filter((k) => !REQUIRED.includes(k) && !(k in OPTIONAL));
  for (const [key, kind] of Object.entries(OPTIONAL)) {
    if (!(key in record)) continue;
    const v = record[key];
    const ok = kind === "string" ? typeof v === "string"
      : kind === "integer" ? Number.isInteger(v) && v >= 0
      : kind === "number-or-null" ? (v === null || (typeof v === "number" && Number.isFinite(v) && v >= 0))
      : COST_BASIS.has(v);
    if (!ok) problems.push(key + " must be " + (kind === "cost-basis" ? "one of api-list, subscription, unknown" : kind === "number-or-null" ? "a number or null" : kind === "integer" ? "a whole number" : "a string"));
  }
  if (extra.length) problems.push("unexpected key(s): " + extra.join(", ") + ". The schema is closed.");

  for (const key of ["routine", "period", "start", "end", "status", "notes"]) {
    if (typeof record[key] !== "string") problems.push(key + " must be a string");
  }
  for (const key of ["outputs", "blockers"]) {
    if (!Array.isArray(record[key])) problems.push(key + " must be an array, empty rather than absent");
    else if (record[key].some((v) => typeof v !== "string")) problems.push("every entry in " + key + " must be a string");
  }
  if (problems.length) return problems;

  // Routine id
  const routine = record.routine.trim();
  if (!routine) problems.push("routine is empty");
  else if (!CADENCE[routine]) {
    problems.push(
      "routine \"" + routine + "\" is not one of the seven in CONTRACT.md section 1" +
      "\n  the seven: " + Object.keys(CADENCE).join(" | ")
    );
  }

  // Status
  if (!STATUSES.has(record.status)) {
    const hint = RETIRED_STATUSES[record.status];
    problems.push(
      "status \"" + record.status + "\" is not one of the eight" +
      (hint ? ": " + hint : "") +
      "\n  allowed: " + [...STATUSES].join(" | ")
    );
  }

  // Period shape
  const period = record.period.trim();
  const shapeOk = Object.values(PERIOD_SHAPE).some((re) => re.test(period));
  if (!shapeOk) {
    problems.push("period \"" + period + "\" is not a period key. Use YYYY-MM-DD, YYYY-Www, or YYYY-MM (CONTRACT.md 1.3).");
  }

  // Timestamps
  for (const key of ["start", "end"]) {
    const value = record[key].trim();
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/.test(value) || Number.isNaN(Date.parse(value))) {
      problems.push(key + " \"" + value + "\" is not an ISO 8601 timestamp");
    }
  }

  // Length caps
  if (record.notes.length > CAPS.notes) problems.push("notes is " + record.notes.length + " characters. It is one line, cap " + CAPS.notes + ".");
  record.outputs.forEach((v, i) => {
    if (v.length > CAPS.output) problems.push("outputs[" + i + "] is " + v.length + " characters, cap " + CAPS.output);
  });
  record.blockers.forEach((v, i) => {
    if (v.length > CAPS.blocker) problems.push("blockers[" + i + "] is " + v.length + " characters, cap " + CAPS.blocker);
  });

  return problems;
}

function stringFields(record) {
  const out = [
    ["routine", record.routine], ["period", record.period],
    ["start", record.start], ["end", record.end],
    ["status", record.status], ["notes", record.notes],
  ];
  for (const k of ["model", "harness", "cost_basis"]) if (typeof record[k] === "string") out.push([k, record[k]]);
  (record.outputs || []).forEach((v, i) => out.push(["outputs[" + i + "]", v]));
  (record.blockers || []).forEach((v, i) => out.push(["blockers[" + i + "]", v]));
  return out.filter(([, v]) => typeof v === "string");
}

/*
 * Refusals. The report names the field and the class, never the matched text.
 */
function findRefusals(record, ctx) {
  const refusals = [];

  for (const [field, value] of stringFields(record)) {
    for (const [cls, re] of SECRET_CLASSES) {
      if (re.test(value)) refusals.push({ field, cls: "secret:" + cls });
    }
    if (EMAIL_ADDRESS.test(value)) refusals.push({ field, cls: "personal-data:email-address" });

    // A URL is allowed only where its host is one of the member's own
    // properties. With no property list on disk yet, no URL is allowed,
    // because nothing can tell the member's own page from anybody else's.
    URL_IN_TEXT.lastIndex = 0;
    let m;
    while ((m = URL_IN_TEXT.exec(value)) !== null) {
      const host = normaliseHost(m[1]);
      if (ctx.ownHosts && ctx.ownHosts.has(host)) continue;
      refusals.push({
        field,
        cls: ctx.ownHosts
          ? "personal-data:foreign-url"
          : "personal-data:url (strategy/properties.md not readable, so no host can be confirmed as yours)",
      });
      break;
    }

    const lowered = value.toLowerCase();
    for (const keyword of ctx.keywords) {
      if (lowered.includes(keyword)) {
        refusals.push({ field, cls: "commercial-intelligence:keyword" });
        break;
      }
    }

    if (value.includes("\n") || value.includes("\r")) refusals.push({ field, cls: "article-text:multiple-lines" });
    if (PLACEHOLDER.test(value)) refusals.push({ field, cls: "template:unresolved-placeholder" });
  }

  // De-duplicate on field plus class.
  const seen = new Set();
  return refusals.filter((r) => {
    const key = r.field + "|" + r.cls;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* Advisory only. Never lose a record over one of these. */
function advisories(record) {
  const notes = [];
  const cadence = CADENCE[record.routine];
  if (cadence && !PERIOD_SHAPE[cadence].test(String(record.period || "").trim())) {
    const want = { day: "YYYY-MM-DD", week: "YYYY-Www", month: "YYYY-MM" }[cadence];
    notes.push(record.routine + " runs on a " + cadence + " cadence, so its period key should look like " + want +
      ". Got \"" + record.period + "\". The once per period guard will not match.");
  }
  for (const key of ["start", "end"]) {
    const value = String(record[key] || "");
    if (!/(Z|[+-]\d{2}:?\d{2})$/.test(value)) {
      notes.push(key + " carries no timezone offset. Read the machine timezone and stamp it, never assume one.");
    }
  }
  if (Date.parse(record.end) < Date.parse(record.start)) notes.push("end is earlier than start");
  for (const [field, value] of stringFields(record)) {
    for (const ch of value) {
      const cp = ch.codePointAt(0);
      if (cp === 0x2013 || cp === 0x2014 || cp === 0x2012 || cp === 0x2015) {
        notes.push(field + " carries a dash character at code point U+" + cp.toString(16).toUpperCase() + ". Use a comma or a period.");
        break;
      }
    }
    // Two or more sentences in a field is usually prose that belongs in the
    // draft folder rather than in the record. Advisory, because a blocker
    // written for a member to read cold can legitimately be two sentences.
    if (/[.!?]\s+[A-Z]/.test(value)) {
      notes.push(field + " reads as more than one sentence. A record carries counts, paths, and one clause per blocker.");
    }
  }
  return notes;
}

/* ------------------------------------------------------------------ *
 * Writing
 * ------------------------------------------------------------------ */

function repairBom(logPath) {
  // A byte order mark left by an earlier shell append corrupts the first line
  // for every reader. Strip it through a temp file plus rename so a crash
  // mid repair cannot truncate the log.
  let head;
  try {
    const fd = fs.openSync(logPath, "r");
    head = Buffer.alloc(3);
    fs.readSync(fd, head, 0, 3, 0);
    fs.closeSync(fd);
  } catch { return false; }
  if (!(head[0] === 0xef && head[1] === 0xbb && head[2] === 0xbf)) return false;

  const body = fs.readFileSync(logPath).slice(3);
  const tmp = logPath + ".bomfix." + process.pid + ".tmp";
  fs.writeFileSync(tmp, body);
  fs.renameSync(tmp, logPath);
  return true;
}

function needsLeadingNewline(logPath) {
  // A previous writer that died mid line leaves no trailing newline. Our line
  // has to start on a fresh one or it silently merges into the broken record.
  try {
    const size = fs.statSync(logPath).size;
    if (size === 0) return false;
    const fd = fs.openSync(logPath, "r");
    const last = Buffer.alloc(1);
    fs.readSync(fd, last, 0, 1, size - 1);
    fs.closeSync(fd);
    return last[0] !== 0x0a;
  } catch {
    return false;
  }
}

function alreadyRecorded(logPath, routine, period) {
  if (!fs.existsSync(logPath)) return false;
  let text;
  try { text = stripBom(fs.readFileSync(logPath, "utf8")); } catch { return false; }
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    try {
      const row = JSON.parse(trimmed);
      if (row && row.routine === routine && row.period === period) return true;
    } catch { /* a malformed line is not our problem here */ }
  }
  return false;
}

function appendRecord(logPath, line) {
  fs.mkdirSync(path.dirname(logPath), { recursive: true });
  if (fs.existsSync(logPath)) repairBom(logPath);

  const payload = (needsLeadingNewline(logPath) ? "\n" : "") + line + "\n";
  const buf = Buffer.from(payload, "utf8");

  // One write to a descriptor opened in append mode. The seek to end and the
  // write are a single operation, so a concurrent routine cannot interleave
  // half of its line into the middle of ours.
  const fd = fs.openSync(logPath, "a");
  try {
    fs.writeSync(fd, buf, 0, buf.length, null);
    try { fs.fsyncSync(fd); } catch { /* some filesystems refuse fsync, the write still landed */ }
  } finally {
    fs.closeSync(fd);
  }
}

/* ------------------------------------------------------------------ *
 * Self test
 * ------------------------------------------------------------------ */

function good() {
  return {
    routine: "seo-publish-run",
    period: "2026-03-05",
    start: "2026-03-05T09:15:07+07:00",
    end: "2026-03-05T09:44:51+07:00",
    status: "ok",
    outputs: ["content/published.jsonl (+1 published)", "content/drafts.jsonl (+1 consumed)"],
    blockers: [],
    notes: "repository route; build passed; live check 4 of 4; hero injected, 1 file",
  };
}

function selftest() {
  const ctx = { ownHosts: new Set(["example.com"]), keywords: new Set(["domain pricing compared"]) };
  const noProps = { ownHosts: null, keywords: new Set() };

  const cases = [];
  const add = (name, mutate, expectShape, expectRefusal, context) => {
    const record = good();
    if (mutate) mutate(record);
    cases.push({ name, record, expectShape, expectRefusal, context: context || ctx });
  };

  add("a valid record", null, false, false);
  add("weekly key on a weekly routine", (r) => { r.routine = "seo-index-sweep"; r.period = "2026-W11"; }, false, false);
  add("monthly key on a monthly routine", (r) => { r.routine = "seo-intake-and-map"; r.period = "2026-03"; }, false, false);
  add("skipped-paused is a status", (r) => { r.status = "skipped-paused"; r.outputs = []; r.notes = "paused"; }, false, false);
  add("missing key", (r) => { delete r.notes; }, true, false);
  add("extra key", (r) => { r.extra = "x"; }, true, false);
  add("blockers as a string", (r) => { r.blockers = "none"; }, true, false);
  add("retired status", (r) => { r.status = "blocked-approval"; }, true, false);
  add("invented status", (r) => { r.status = "published"; }, true, false);
  add("a routine that is not one of the seven", (r) => { r.routine = "seo-not-a-routine"; }, true, false);
  add("a routine without the prefix", (r) => { r.routine = "my-routine"; }, true, false);
  add("bad period shape", (r) => { r.period = "March 5"; }, true, false);
  add("bad timestamp", (r) => { r.start = "this morning"; }, true, false);
  add("overlong notes", (r) => { r.notes = "x".repeat(CAPS.notes + 1); }, true, false);
  add("the pause status", (r) => { r.status = "skipped-paused"; }, false, false);
  add("optional usage fields", (r) => { r.model = "claude-sonnet-5"; r.harness = "claude-cli 2.1.255"; r.turns = 12; r.output_tokens = 5000; r.cost_usd = 1.23; r.cost_basis = "api-list"; }, false, false);
  add("optional field of the wrong type", (r) => { r.turns = "twelve"; }, true, false);
  add("optional cost basis outside the three", (r) => { r.cost_basis = "guess"; }, true, false);
  // The fake key is split across a concatenation so a repository secret
  // scanner does not flag this test fixture. It is one string at runtime.
  add("a secret", (r) => { r.notes = "used key sk_" + "live_51H8xQ2ePlacehold"; }, false, true);
  add("an email address", (r) => { r.blockers = ["could not reach sam@example.com"]; }, false, true);
  add("a live URL on the member's own property passes",
    (r) => { r.outputs = ["https://example.com/blog/pricing live"]; }, false, false);
  add("a live URL with www on the member's own property passes",
    (r) => { r.outputs = ["https://www.example.com/blog/pricing live"]; }, false, false);
  add("a competitor URL is refused",
    (r) => { r.notes = "read https://competitor.io/guide this run"; }, false, true);
  add("with no property list, even an own URL is refused",
    (r) => { r.outputs = ["https://example.com/blog/pricing live"]; }, false, true, noProps);
  add("a keyword is refused", (r) => { r.notes = "wrote domain pricing compared today"; }, false, true);
  add("a slug that resembles a keyword is fine",
    (r) => { r.outputs = ["drafts/domain-pricing-compared/ (4 files)"]; }, false, false);
  add("a multi line field", (r) => { r.notes = "line one\nline two"; }, false, true);
  add("an unresolved placeholder", (r) => { r.notes = "published to «property»"; }, false, true);
  add("a kit path is fine", (r) => { r.outputs = ["index/requests.jsonl (+9 requested)"]; }, false, false);

  let failures = 0;
  for (const c of cases) {
    const shape = validateShape(c.record);
    const refusals = shape.length ? [] : findRefusals(c.record, c.context);
    const gotShape = shape.length > 0;
    const gotRefusal = refusals.length > 0;
    const pass = gotShape === c.expectShape && gotRefusal === c.expectRefusal;
    if (!pass) {
      failures++;
      process.stdout.write("  FAIL  " + c.name +
        "  (shape " + gotShape + " want " + c.expectShape +
        ", refusal " + gotRefusal + " want " + c.expectRefusal + ")\n");
      if (gotShape) process.stdout.write("        " + shape.join(" / ") + "\n");
      if (gotRefusal) process.stdout.write("        " + refusals.map((r) => r.field + ": " + r.cls).join(" / ") + "\n");
    } else {
      process.stdout.write("  ok    " + c.name + "\n");
    }
  }

  // Round trip an append into a temp file so the write path is exercised too.
  const tmpDir = fs.mkdtempSync(path.join(process.env.TMPDIR || process.env.TEMP || ".", "runlog-selftest-"));
  const tmpLog = path.join(tmpDir, "nested", "runlog.jsonl");
  try {
    fs.mkdirSync(path.dirname(tmpLog), { recursive: true });
    // A byte order mark and no trailing newline: the two states a shell
    // append leaves behind, and the two this script has to repair. The mark is
    // written as an escape, never as the character itself, because the
    // character is invisible in a source file and the next person to edit this
    // line would lose it without noticing.
    fs.writeFileSync(tmpLog, "\uFEFF{\"routine\":\"seo-standup\",\"period\":\"2026-03-04\"}");
    appendRecord(tmpLog, JSON.stringify(good()));
    const raw = fs.readFileSync(tmpLog);
    const text = raw.toString("utf8");
    const lines = text.split("\n").filter((l) => l.trim());
    const bomGone = raw[0] !== 0xef;
    const twoLines = lines.length === 2;
    const parses = lines.every((l) => { try { JSON.parse(l); return true; } catch { return false; } });
    const endsNewline = text.endsWith("\n");
    if (bomGone && twoLines && parses && endsNewline) {
      process.stdout.write("  ok    append repairs a byte order mark and a missing trailing newline\n");
    } else {
      failures++;
      process.stdout.write("  FAIL  append round trip (bom removed " + bomGone + ", two lines " + twoLines +
        ", all parse " + parses + ", trailing newline " + endsNewline + ")\n");
    }
  } finally {
    fs.rmSync(tmpDir, { recursive: true, force: true });
  }

  process.stdout.write(failures === 0
    ? "runlog: selftest PASS (" + (cases.length + 1) + " checks)\n"
    : "runlog: selftest FAIL (" + failures + " of " + (cases.length + 1) + ")\n");
  process.exit(failures === 0 ? 0 : 1);
}

function usage() {
  const text = fs.readFileSync(SELF, "utf8");
  const block = text.slice(text.indexOf("/*") + 2, text.indexOf("*/"));
  process.stdout.write(block.split("\n").map((l) => l.replace(/^ \* ?/, "")).join("\n").trim() + "\n");
}

/* ------------------------------------------------------------------ *
 * Main
 * ------------------------------------------------------------------ */

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) { usage(); process.exit(0); }
  if (opts.selftest) { selftest(); return; }

  const { record } = opts.failedRun ? { record: failedRecord(opts) } : loadPayload(opts);

  const shape = validateShape(record);
  if (shape.length) {
    die(2, "record rejected, " + shape.length + " problem(s):\n  " + shape.join("\n  "));
  }

  const root = resolveRoot(opts);
  const own = loadOwnHosts(root);
  const ctx = { ownHosts: own.hosts, keywords: loadKeywords(root) };

  const refusals = findRefusals(record, ctx);
  if (refusals.length) {
    const lines = refusals.map((r) => r.field + ": " + r.cls);
    die(3,
      "refused to write this record. A run record carries counts, slugs, paths, live URLs on your own\n" +
      "  properties, and blockers, and never a secret, article text, a keyword, or personal data\n" +
      "  (CONTRACT.md 4.2). The detail belongs in the draft folder and the scoreboard.\n" +
      "  " + lines.join("\n  ") +
      "\n  The matched text is deliberately not printed."
    );
  }

  for (const note of advisories(record)) warn(note);

  const logPath = opts.log ? path.resolve(opts.log) : path.join(root, "runlog.jsonl");
  const line = JSON.stringify(record);

  if (opts.dryRun) {
    process.stdout.write(line + "\n");
    process.stderr.write("runlog: dry run, nothing written. Target was " + logPath + "\n");
    process.exit(0);
  }

  if (opts.once && alreadyRecorded(logPath, record.routine, record.period)) {
    die(4, "a record for " + record.routine + " and period " + record.period + " already exists. Nothing written.");
  }
  if (!opts.once && alreadyRecorded(logPath, record.routine, record.period)) {
    warn("a record for " + record.routine + " and period " + record.period + " already exists. Appending anyway, which is correct for skipped-already-ran and a defect otherwise.");
  }

  try {
    appendRecord(logPath, line);
  } catch (err) {
    die(1, "could not write " + logPath + ": " + err.message);
  }

  process.stdout.write("runlog: appended " + record.routine + " " + record.period + " " + record.status + "\n");
}

main();
