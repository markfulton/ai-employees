#!/usr/bin/env node
/*
 * guard.mjs
 * The cheap gate in front of every routine. Run it first, before any document is read.
 *
 * Why this script exists: a fire that should not run (paused, wrong day, outside
 * the window, or already run this period) used to cost a full read of the
 * contract, the role, the capabilities file and the schedule before the guards
 * in Step 0 ran, which is about a dollar and a minute or two per skip on a
 * large model. This script does the same checks from three small files in
 * well under a second, writes the run record itself, and lets the routine exit
 * without reading anything else.
 *
 * Requires Node 18 or newer. No dependencies, no package.json, no install.
 * Runs the same on Windows and POSIX.
 *
 * USAGE
 *   node scripts/guard.mjs <routine-id>
 *   node scripts/guard.mjs <routine-id> --json
 *   node scripts/guard.mjs <routine-id> --now 2026-03-05T07:31 --no-record
 *   node scripts/guard.mjs --selftest
 *   node scripts/guard.mjs --help
 *
 * OPTIONS
 *   --root <path>   The kit working folder. Defaults to this script's parent folder.
 *   --now <local>   Pretend the local wall clock reads this, as YYYY-MM-DDTHH:MM.
 *                   For tests and dry runs only.
 *   --json          Print the verdict as one JSON object instead of lines.
 *   --no-record     Print the verdict and write nothing.
 *
 * VERDICTS, the first word on stdout
 *   run                    every guard passed: carry on with Step 0 and the routine
 *   skipped-paused         PAUSED exists and covers this routine
 *   skipped-out-of-window  today is not a listed day, or now is outside the window
 *   skipped-already-ran    state/<routine-id>.json already carries this period key
 *   failed                 no SCHEDULE.md row for this routine, or the row will not parse
 *
 * For every verdict other than run, the script appends the run record through
 * scripts/runlog.mjs before it returns, so the routine has nothing left to
 * write. It never writes a state file: the once per period write in Step 0.2
 * stays with the routine, because the cursors that file carries forward are
 * the routine's.
 *
 * The one exemption, and it is the contract's: the intake routine on its very
 * first run, identified by its row reading first-weekday and its state file
 * not existing, skips the day and window checks and says so in the notes.
 *
 * EXIT CODES
 *   0   run
 *   10  skipped, record written (or --no-record)
 *   11  failed, record written (or --no-record)
 *   2   bad usage
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const SELF = fileURLToPath(import.meta.url);
const SCRIPT_DIR = path.dirname(SELF);
const DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function die(code, message) {
  process.stderr.write("guard: " + message + "\n");
  process.exit(code);
}

function pad(n) {
  return String(n).padStart(2, "0");
}

/* ------------------------------------------------------------------ *
 * Arguments
 * ------------------------------------------------------------------ */

function parseArgs(argv) {
  const opts = { id: null, root: null, now: null, json: false, noRecord: false, selftest: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") { opts.help = true; continue; }
    if (arg === "--selftest") { opts.selftest = true; continue; }
    if (arg === "--json") { opts.json = true; continue; }
    if (arg === "--no-record") { opts.noRecord = true; continue; }
    if (arg === "--root" || arg === "--now") {
      const value = argv[i + 1];
      if (value === undefined) die(2, arg + " needs a value");
      i++;
      if (arg === "--root") opts.root = value; else opts.now = value;
      continue;
    }
    if (arg.startsWith("--")) die(2, "unknown option " + arg + ". Run with --help.");
    if (opts.id) die(2, "one routine id only");
    opts.id = arg;
  }
  return opts;
}

function resolveRoot(opts) {
  if (opts.root) return path.resolve(opts.root);
  return path.resolve(SCRIPT_DIR, "..");
}

/* ------------------------------------------------------------------ *
 * The clock. Local wall clock only, never UTC, never a remembered zone.
 * ------------------------------------------------------------------ */

function localNow(flag) {
  if (!flag) return new Date();
  const m = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(flag);
  if (!m) die(2, "--now must look like YYYY-MM-DDTHH:MM in local time");
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], 0);
}

function localDate(d) {
  return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
}

function isoLocal(d) {
  const off = -d.getTimezoneOffset();
  const sign = off >= 0 ? "+" : "-";
  const a = Math.abs(off);
  return localDate(d) + "T" + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
    sign + pad(Math.floor(a / 60)) + ":" + pad(a % 60);
}

function isoWeek(d) {
  // ISO 8601: the week with the year's first Thursday is week 1.
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t - yearStart) / 86400000 + 1) / 7);
  return t.getUTCFullYear() + "-W" + pad(week);
}

function periodKey(format, d) {
  if (format === "YYYY-MM-DD") return localDate(d);
  if (format === "YYYY-Www") return isoWeek(d);
  if (format === "YYYY-MM") return d.getFullYear() + "-" + pad(d.getMonth() + 1);
  return null;
}

function timezoneId() {
  try { return Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown"; } catch { return "unknown"; }
}

/* ------------------------------------------------------------------ *
 * The three small reads: PAUSED, the SCHEDULE.md row, the state file
 * ------------------------------------------------------------------ */

function stripBom(text) {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function readPaused(root, id) {
  const p = path.join(root, "PAUSED");
  if (!fs.existsSync(p)) return false;
  let text = "";
  try { text = stripBom(fs.readFileSync(p, "utf8")); } catch { return true; }
  const ids = text.split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
  if (ids.length === 0) return true;
  return ids.includes(id);
}

const ROW = /^\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*(\d{2}:\d{2})\s*\|\s*(\d{2}:\d{2})\s*\|\s*(\d{2}:\d{2})\s*\|\s*`([^`]+)`\s*\|\s*(\d+)\s*min\s*\|\s*([^|]+?)\s*\|\s*$/;

function readRow(root, id) {
  const p = path.join(root, "SCHEDULE.md");
  if (!fs.existsSync(p)) return { error: "no SCHEDULE.md at " + p };
  let text;
  try { text = stripBom(fs.readFileSync(p, "utf8")); } catch (err) { return { error: "cannot read SCHEDULE.md: " + err.message }; }
  for (const line of text.split(/\r?\n/)) {
    const m = ROW.exec(line);
    if (!m || m[1] !== id) continue;
    return {
      routine: m[1], days: m[2].trim(), fire: m[3], windowStart: m[4], windowEnd: m[5],
      key: m[6].trim(), budget: Number(m[7]), browser: m[8].trim(),
    };
  }
  return { error: "no SCHEDULE.md row for " + id };
}

function readState(root, id) {
  const p = path.join(root, "state", id + ".json");
  if (!fs.existsSync(p)) return { exists: false, lastPeriod: null };
  try {
    const j = JSON.parse(stripBom(fs.readFileSync(p, "utf8")));
    return { exists: true, lastPeriod: typeof j.last_period === "string" ? j.last_period : null };
  } catch {
    return { exists: true, lastPeriod: null, unreadable: true };
  }
}

/* ------------------------------------------------------------------ *
 * The checks. Same vocabulary as SCHEDULE.md section 3.
 * ------------------------------------------------------------------ */

function dayAllowed(days, d) {
  const dow = d.getDay();
  const dom = d.getDate();
  const daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  const weekday = dow >= 1 && dow <= 5;
  for (const token of days.split(/[,\s]+/).filter(Boolean)) {
    if (token === "off") return false;
    if (token === "mon-fri" && weekday) return true;
    if (DAY_NAMES.includes(token) && DAY_NAMES[dow] === token) return true;
    if (token === "first-weekday" && weekday && dom <= 7) return true;
    if (token === "last-weekday" && weekday && dom > daysInMonth - 7) return true;
  }
  return false;
}

function minutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function inWindow(start, end, d) {
  const now = d.getHours() * 60 + d.getMinutes();
  return now >= minutes(start) && now <= minutes(end);
}

/* ------------------------------------------------------------------ *
 * The verdict
 * ------------------------------------------------------------------ */

function decide(root, id, now) {
  const out = { routine: id, verdict: "run", now: isoLocal(now), timezone: timezoneId(), notes: [] };

  if (readPaused(root, id)) {
    out.verdict = "skipped-paused";
    out.period = localDate(now);
    out.notes.push("guard: PAUSED covers this routine");
    return out;
  }

  const row = readRow(root, id);
  if (row.error) {
    out.verdict = "failed";
    out.period = localDate(now);
    out.blockers = [row.error];
    out.notes.push("guard: row missing or unparsable");
    return out;
  }
  Object.assign(out, { days: row.days, fire: row.fire, window: row.windowStart + " to " + row.windowEnd, key: row.key, budget: row.budget, browser: row.browser });

  const period = periodKey(row.key, now);
  if (!period) {
    out.verdict = "failed";
    out.period = localDate(now);
    out.blockers = ["SCHEDULE.md row for " + id + " carries an unknown key format " + row.key];
    out.notes.push("guard: key format unknown");
    return out;
  }
  out.period = period;

  const state = readState(root, id);
  const firstRun = row.days === "first-weekday" && !state.exists;

  if (firstRun) {
    out.notes.push("first run, window guard not applicable");
  } else if (!dayAllowed(row.days, now)) {
    out.verdict = "skipped-out-of-window";
    out.notes.push("guard: " + DAY_NAMES[now.getDay()] + " " + localDate(now) + " is not a listed day (" + row.days + ")");
    return out;
  } else if (!inWindow(row.windowStart, row.windowEnd, now)) {
    out.verdict = "skipped-out-of-window";
    out.notes.push("guard: " + pad(now.getHours()) + ":" + pad(now.getMinutes()) + " is outside " + row.windowStart + " to " + row.windowEnd);
    return out;
  }

  if (state.lastPeriod === period) {
    out.verdict = "skipped-already-ran";
    out.notes.push("guard: state already carries period " + period);
    return out;
  }
  if (state.unreadable) out.notes.push("guard: state file present but unreadable, treated as no period");

  return out;
}

function writeRecord(root, verdict) {
  const runlog = path.join(SCRIPT_DIR, "runlog.mjs");
  if (!fs.existsSync(runlog)) return { ok: false, reason: "runlog.mjs missing beside guard.mjs" };
  const args = [
    runlog, "--root", root,
    "--routine", verdict.routine, "--period", verdict.period,
    "--start", verdict.now, "--end", verdict.now,
    "--status", verdict.verdict,
    "--notes", verdict.notes.join("; ").slice(0, 380),
  ];
  for (const b of verdict.blockers || []) args.push("--blocker", b);
  const r = spawnSync(process.execPath, args, { encoding: "utf8" });
  return { ok: r.status === 0, reason: (r.stderr || "").trim() };
}

function print(verdict, json) {
  if (json) {
    process.stdout.write(JSON.stringify(verdict) + "\n");
    return;
  }
  const lines = [verdict.verdict];
  for (const k of ["routine", "period", "now", "timezone", "days", "window", "budget", "browser"]) {
    if (verdict[k] !== undefined) lines.push(k + "=" + verdict[k]);
  }
  for (const n of verdict.notes) lines.push("note=" + n);
  for (const b of verdict.blockers || []) lines.push("blocker=" + b);
  if (verdict.record) lines.push("record=" + verdict.record);
  process.stdout.write(lines.join("\n") + "\n");
}

/* ------------------------------------------------------------------ *
 * Self test. A temp root, a synthetic table, fixed clocks.
 * ------------------------------------------------------------------ */

function selftest() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "guard-selftest-"));
  let failures = 0;
  const check = (name, got, want) => {
    const pass = got === want;
    if (!pass) failures++;
    process.stdout.write((pass ? "  ok    " : "  FAIL  ") + name + (pass ? "" : "  (got " + got + ", want " + want + ")") + "\n");
  };

  // Which prefix does this kit use. Read the first row of the real table.
  const realSchedule = path.join(SCRIPT_DIR, "..", "SCHEDULE.md");
  let prefix = "gtm";
  try {
    const first = stripBom(fs.readFileSync(realSchedule, "utf8")).split(/\r?\n/).map((l) => ROW.exec(l)).find(Boolean);
    if (first) prefix = first[1].split("-")[0];
  } catch { /* fall back to gtm */ }

  const ids = {
    daily: prefix + "-selftest-daily",
    weekly: prefix + "-selftest-weekly",
    intake: prefix + "-selftest-intake",
    last: prefix + "-selftest-last",
  };
  const table = [
    "| routine | days | fire | window_start | window_end | key | budget | browser |",
    "|---|---|---|---|---|---|---|---|",
    "| `" + ids.daily + "` | `mon-fri` | 07:30 | 07:15 | 11:30 | `YYYY-MM-DD` | 12 min | never |",
    "| `" + ids.weekly + "` | `fri` | 16:00 | 15:45 | 19:00 | `YYYY-Www` | 35 min | read only |",
    "| `" + ids.intake + "` | `first-weekday` | 13:00 | 12:45 | 17:00 | `YYYY-MM` | 45 min | light |",
    "| `" + ids.last + "` | `last-weekday` | 14:00 | 13:45 | 17:30 | `YYYY-MM` | 35 min | light |",
  ].join("\n") + "\n";

  try {
    fs.writeFileSync(path.join(tmp, "SCHEDULE.md"), "# test\n\n" + table);
    fs.mkdirSync(path.join(tmp, "state"));

    // 2026-03-05 is a Thursday, ISO week 10. 2026-03-06 is a Friday. 2026-03-07 a Saturday.
    check("weekday inside the window runs", decide(tmp, ids.daily, localNow("2026-03-05T07:31")).verdict, "run");
    check("weekday before the window skips", decide(tmp, ids.daily, localNow("2026-03-05T07:00")).verdict, "skipped-out-of-window");
    check("weekday after the window skips", decide(tmp, ids.daily, localNow("2026-03-05T11:31")).verdict, "skipped-out-of-window");
    check("saturday skips", decide(tmp, ids.daily, localNow("2026-03-07T08:00")).verdict, "skipped-out-of-window");
    check("daily period key is the local date", decide(tmp, ids.daily, localNow("2026-03-05T07:31")).period, "2026-03-05");
    check("friday weekly routine runs on friday", decide(tmp, ids.weekly, localNow("2026-03-06T16:02")).verdict, "run");
    check("friday weekly routine skips on thursday", decide(tmp, ids.weekly, localNow("2026-03-05T16:02")).verdict, "skipped-out-of-window");
    check("weekly period key is the ISO week", decide(tmp, ids.weekly, localNow("2026-03-06T16:02")).period, "2026-W10");
    check("missing row fails", decide(tmp, prefix + "-selftest-missing", localNow("2026-03-05T07:31")).verdict, "failed");

    fs.writeFileSync(path.join(tmp, "state", ids.daily + ".json"), JSON.stringify({ last_period: "2026-03-05", progress: [] }));
    check("same period already ran", decide(tmp, ids.daily, localNow("2026-03-05T08:00")).verdict, "skipped-already-ran");
    check("next day runs again", decide(tmp, ids.daily, localNow("2026-03-06T08:00")).verdict, "run");

    check("intake first run is exempt from day and window", decide(tmp, ids.intake, localNow("2026-03-21T03:00")).verdict, "run");
    check("intake first run says so", decide(tmp, ids.intake, localNow("2026-03-21T03:00")).notes[0], "first run, window guard not applicable");
    fs.writeFileSync(path.join(tmp, "state", ids.intake + ".json"), JSON.stringify({ last_period: "2026-02" }));
    check("intake with state respects the day range", decide(tmp, ids.intake, localNow("2026-03-20T13:05")).verdict, "skipped-out-of-window");
    check("intake with state runs on the 2nd", decide(tmp, ids.intake, localNow("2026-03-02T13:05")).verdict, "run");
    check("intake with this month's state already ran", (() => {
      fs.writeFileSync(path.join(tmp, "state", ids.intake + ".json"), JSON.stringify({ last_period: "2026-03" }));
      return decide(tmp, ids.intake, localNow("2026-03-03T13:05")).verdict;
    })(), "skipped-already-ran");

    check("last weekday on the 24th of a 31 day month skips", decide(tmp, ids.last, localNow("2026-03-24T14:05")).verdict, "skipped-out-of-window");
    check("last weekday on the 25th of a 31 day month runs", decide(tmp, ids.last, localNow("2026-03-25T14:05")).verdict, "run");
    check("last weekday on the 22nd of february runs", decide(tmp, ids.last, localNow("2026-02-23T14:05")).verdict, "run");

    fs.writeFileSync(path.join(tmp, "PAUSED"), "");
    check("empty PAUSED stops everything", decide(tmp, ids.daily, localNow("2026-03-06T08:00")).verdict, "skipped-paused");
    fs.writeFileSync(path.join(tmp, "PAUSED"), ids.weekly + "\n");
    check("PAUSED naming another routine lets this one run", decide(tmp, ids.daily, localNow("2026-03-06T08:00")).verdict, "run");
    check("PAUSED naming this routine stops it", decide(tmp, ids.weekly, localNow("2026-03-06T16:02")).verdict, "skipped-paused");
    fs.rmSync(path.join(tmp, "PAUSED"));

    // One real record through runlog.mjs, using a real routine id from this kit's table.
    let realId = null;
    try {
      const first = stripBom(fs.readFileSync(realSchedule, "utf8")).split(/\r?\n/).map((l) => ROW.exec(l)).find(Boolean);
      if (first) realId = first[1];
    } catch { /* no real table beside this script */ }
    if (realId && fs.existsSync(path.join(SCRIPT_DIR, "runlog.mjs"))) {
      const realRows = stripBom(fs.readFileSync(realSchedule, "utf8"));
      fs.writeFileSync(path.join(tmp, "SCHEDULE.md"), realRows);
      const v = decide(tmp, realId, localNow("2026-03-08T03:00")); // a Sunday: out of window on every row
      const wrote = writeRecord(tmp, v);
      check("a skip writes one record through runlog.mjs", wrote.ok ? "written" : "refused: " + wrote.reason, "written");
      const log = fs.existsSync(path.join(tmp, "runlog.jsonl")) ? fs.readFileSync(path.join(tmp, "runlog.jsonl"), "utf8").trim().split("\n") : [];
      check("the record parses and carries the verdict", (() => { try { return JSON.parse(log[log.length - 1]).status; } catch { return "unparsable"; } })(), v.verdict);
    } else {
      process.stdout.write("  skip  no runlog.mjs or SCHEDULE.md beside this script, record write not exercised\n");
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }

  process.stdout.write(failures === 0 ? "guard: selftest PASS\n" : "guard: selftest FAIL (" + failures + ")\n");
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
  if (!opts.id) die(2, "a routine id is required. Run with --help.");

  const root = resolveRoot(opts);
  const verdict = decide(root, opts.id, localNow(opts.now));

  if (verdict.verdict !== "run" && !opts.noRecord) {
    const wrote = writeRecord(root, verdict);
    verdict.record = wrote.ok ? "written" : "not written: " + wrote.reason;
  } else if (verdict.verdict !== "run") {
    verdict.record = "not written, --no-record";
  }

  print(verdict, opts.json);
  if (verdict.verdict === "run") process.exit(0);
  if (verdict.verdict === "failed") process.exit(11);
  process.exit(10);
}

main();
