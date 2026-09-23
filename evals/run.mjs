#!/usr/bin/env node
// Code graded regression evals for the repository rules in AGENTS.md that selftests.mjs and no-dashes.mjs do not already check.
// Usage: node evals/run.mjs [--json] [--write-baseline]
// The clock time eval compares against evals/baseline/clock-times.json, so it fails only on a new clock time, never on one already recorded.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EMPLOYEES = path.join(ROOT, "employees");
const BASELINE = path.join(ROOT, "evals", "baseline", "clock-times.json");
const args = new Set(process.argv.slice(2));

const kits = fs.readdirSync(EMPLOYEES).filter((k) => fs.statSync(path.join(EMPLOYEES, k)).isDirectory()).sort();
const read = (file) => fs.readFileSync(file, "utf8");
const rel = (file) => path.relative(ROOT, file);
function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    return e.isDirectory() ? (e.name === "node_modules" || e.name === ".git" ? [] : walk(full)) : [full];
  });
}
function aboveCorrections(text) {
  const cut = text.lastIndexOf("\n## Corrections");
  return cut >= 0 ? text.slice(0, cut) : text;
}

// A clock time is HH:MM that is not part of an ISO timestamp (2026-05-12T07:00), a zone offset (+07:00) or a longer time (07:00:00).
const CLOCK = /(?<![\dT:+-])(?:[01]\d|2[0-3]):[0-5]\d(?![\d:])/g;
function clockTimes() {
  const counts = {};
  for (const kit of kits) {
    const dir = path.join(EMPLOYEES, kit, "routines");
    for (const id of fs.readdirSync(dir).sort()) {
      const file = path.join(dir, id, "SKILL.md");
      const n = (aboveCorrections(read(file)).match(CLOCK) || []).length;
      if (n) counts[rel(file)] = n;
    }
  }
  return counts;
}

const evals = [
  {
    id: "routine-wiring",
    rule: "A routine needs a SCHEDULE.md row, a run/<id>.cmd.example launcher and a routines/<id>/SKILL.md, all with the same id.",
    run() {
      const problems = [];
      for (const kit of kits) {
        const dir = path.join(EMPLOYEES, kit);
        const ids = fs.readdirSync(path.join(dir, "routines")).sort();
        const schedule = read(path.join(dir, "SCHEDULE.md"));
        const rows = new Set([...schedule.matchAll(/^\|\s*`([a-z0-9-]+)`\s*\|\s*`/gm)].map((m) => m[1]));
        const runDir = path.join(dir, "run");
        const launchers = fs.existsSync(runDir) ? fs.readdirSync(runDir).filter((f) => f.endsWith(".cmd.example")).map((f) => f.slice(0, -".cmd.example".length)) : [];
        for (const id of ids) {
          if (!rows.has(id)) problems.push(kit + ": " + id + " has no SCHEDULE.md row");
          if (!launchers.includes(id)) problems.push(kit + ": " + id + " has no run/" + id + ".cmd.example");
        }
        for (const id of launchers) if (!ids.includes(id)) problems.push(kit + ": run/" + id + ".cmd.example has no routine folder");
      }
      return problems;
    },
  },
  {
    id: "guard-identical",
    rule: "guard.mjs is shared standard code and is byte identical in every kit.",
    run() {
      const hashes = {};
      for (const kit of kits) {
        const file = path.join(EMPLOYEES, kit, "scripts", "guard.mjs");
        if (!fs.existsSync(file)) { hashes["missing"] = (hashes["missing"] || []).concat(kit); continue; }
        const h = crypto.createHash("md5").update(fs.readFileSync(file)).digest("hex");
        (hashes[h] = hashes[h] || []).push(kit);
      }
      const groups = Object.entries(hashes);
      return groups.length === 1 && groups[0][0] !== "missing" ? [] : groups.map(([h, ks]) => h + ": " + ks.join(", "));
    },
  },
  {
    id: "version-sync",
    rule: "The version in package.json, .claude-plugin/plugin.json and .claude-plugin/marketplace.json moves together.",
    run() {
      const pkg = JSON.parse(read(path.join(ROOT, "package.json"))).version;
      const plugin = JSON.parse(read(path.join(ROOT, ".claude-plugin", "plugin.json"))).version;
      const market = JSON.parse(read(path.join(ROOT, ".claude-plugin", "marketplace.json"))).plugins.map((p) => p.version);
      return [plugin, ...market].every((v) => v === pkg) ? [] : ["package.json " + pkg + ", plugin.json " + plugin + ", marketplace.json " + market.join("/")];
    },
  },
  {
    id: "kit-version-sync",
    rule: "A kit's VERSION and the version in its employee.json are bumped together.",
    run() {
      const problems = [];
      for (const kit of kits) {
        const dir = path.join(EMPLOYEES, kit);
        const v = read(path.join(dir, "VERSION")).trim();
        const json = JSON.parse(read(path.join(dir, "employee.json"))).version;
        if (json !== v) problems.push(kit + ": VERSION " + v + ", employee.json " + json);
      }
      return problems;
    },
  },
  {
    id: "examples-fictional",
    rule: "Everything under employees/*/examples/ is fictional: every email address uses a reserved example or test domain.",
    run() {
      const problems = [];
      const EMAIL = /[A-Za-z0-9._%+-]+@([A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+)/g;
      const RESERVED = /(^|\.)(example\.(com|org|net)|example|test|invalid|localhost)$/i;
      for (const kit of kits) {
        for (const file of walk(path.join(EMPLOYEES, kit, "examples"))) {
          for (const m of read(file).matchAll(EMAIL)) if (!RESERVED.test(m[1])) problems.push(rel(file) + ": " + m[0]);
        }
      }
      return problems;
    },
  },
  {
    id: "retired-name",
    rule: "The product name is AI Employees. Agent Employees is retired outside changelog history.",
    run() {
      const problems = [];
      const files = ["README.md", "CONTRIBUTING.md", "docs", "skills", "installer", "employees"].flatMap((p) => {
        const full = path.join(ROOT, p);
        return !fs.existsSync(full) ? [] : fs.statSync(full).isDirectory() ? walk(full) : [full];
      });
      for (const file of files) {
        if (path.basename(file) === "CHANGELOG.md" || !/\.(md|mjs|json|yml|txt)$/i.test(file)) continue;
        read(file).split("\n").forEach((line, i) => { if (/Agent Employees/.test(line)) problems.push(rel(file) + ":" + (i + 1)); });
      }
      return problems;
    },
  },
  {
    id: "no-new-clock-times",
    rule: "A routine SKILL.md holds no clock time; times live in SCHEDULE.md. Existing hits are recorded in evals/baseline/clock-times.json and may only go down.",
    run() {
      const now = clockTimes();
      const base = fs.existsSync(BASELINE) ? JSON.parse(read(BASELINE)).counts : {};
      const problems = [];
      for (const [file, n] of Object.entries(now)) if (n > (base[file] || 0)) problems.push(file + ": " + n + " clock times, baseline " + (base[file] || 0));
      return problems;
    },
  },
];

if (args.has("--write-baseline")) {
  const counts = clockTimes();
  fs.mkdirSync(path.dirname(BASELINE), { recursive: true });
  fs.writeFileSync(BASELINE, JSON.stringify({ note: "Clock times found in routine SKILL.md files above their Corrections heading. Each is a candidate defect under AGENTS.md. Lower a count after fixing, never raise it.", counts }, null, 2) + "\n");
  process.stdout.write("wrote " + rel(BASELINE) + " (" + Object.keys(counts).length + " files)\n");
  process.exit(0);
}

const results = evals.map((e) => { const problems = e.run(); return { id: e.id, rule: e.rule, pass: problems.length === 0, problems }; });
const passed = results.filter((r) => r.pass).length;
if (args.has("--json")) {
  process.stdout.write(JSON.stringify({ passed, total: results.length, results }, null, 2) + "\n");
} else {
  process.stdout.write("EVAL REPORT: repository rules\n");
  for (const r of results) {
    process.stdout.write("  " + (r.pass ? "PASS" : "FAIL") + "  " + r.id + "\n");
    for (const p of r.problems.slice(0, 20)) process.stdout.write("        " + p + "\n");
    if (r.problems.length > 20) process.stdout.write("        and " + (r.problems.length - 20) + " more\n");
  }
  process.stdout.write("evals: " + (passed === results.length ? "PASS" : "FAIL") + " (" + passed + "/" + results.length + ")\n");
}
process.exit(passed === results.length ? 0 : 1);
