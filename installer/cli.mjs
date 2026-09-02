#!/usr/bin/env node
/*
 * ai-employees
 *
 *   npx ai-employees hire <employee> [--to <folder>]
 *   npx ai-employees list
 *
 * Copies one employee folder into place, refuses a folder under cloud sync,
 * runs the kit's three self tests, and prints its install prompt with the
 * path filled in. It registers no schedule, sends nothing, and reports
 * nothing anywhere. The only network call is the download of the repo
 * tarball when the employee folder is not already beside this script.
 *
 * Requires Node 18 or newer. No dependencies.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const SELF = fileURLToPath(import.meta.url);
const HERE = path.dirname(SELF);
const REPO = "markfulton/ai-employees";
const VERSION = readVersion();

const EMPLOYEES = {
  "gtm-engineer": { name: "GTM Engineer", role: "Go to market and launch", aliases: ["gtm", "go-to-market", "launch", "growth"] },
  "seo-employee": { name: "SEO Employee", role: "Search and content", aliases: ["seo", "search", "content"] },
  "web-dev-employee": { name: "Web Dev Employee", role: "Engineering and maintenance", aliases: ["web-dev", "webdev", "web", "developer", "dev"] },
  "social-media-employee": { name: "Social Media Employee", role: "Audience and distribution", aliases: ["social", "social-media"] },
  "ad-manager-employee": { name: "Ad Manager Employee", role: "Paid acquisition", aliases: ["ads", "ad-manager", "paid"] },
  "sales-employee": { name: "Sales Employee", role: "Pipeline and outreach", aliases: ["sales", "sdr"] },
  "customer-satisfaction-employee": { name: "Customer Satisfaction Employee", role: "Support and retention", aliases: ["csat", "support", "customer-satisfaction", "customer"] },
  "chief-of-staff": { name: "Chief of Staff", role: "Oversight and strategy", aliases: ["cos", "chief", "chief-of-staff"] },
};

const SYNC_MARKERS = ["onedrive", "dropbox", "icloud", "google drive", "googledrive", "mobile documents"];

function readVersion() {
  try { return JSON.parse(fs.readFileSync(path.join(HERE, "..", "package.json"), "utf8")).version || "0.0.0"; }
  catch { return "0.0.0"; }
}

function out(s) { process.stdout.write(s + "\n"); }
function fail(s, code = 1) { process.stderr.write("ai-employees: " + s + "\n"); process.exit(code); }

function usage() {
  out([
    "ai-employees " + VERSION,
    "",
    "  npx ai-employees hire <employee> [--to <folder>]   copy one employee into place and print its install prompt",
    "  npx ai-employees list                              the eight, one line each",
    "",
    "The folder must be outside OneDrive, Dropbox, Google Drive and iCloud. Without --to it is ./employees/<slug>.",
    "Nothing is scheduled and nothing is sent. Prerequisites: https://github.com/" + REPO + "/blob/main/docs/PREREQUISITES.md",
  ].join("\n"));
}

function list() {
  for (const [slug, e] of Object.entries(EMPLOYEES)) out("  " + slug.padEnd(32) + e.name.padEnd(32) + e.role);
}

function resolveSlug(word) {
  if (!word) return null;
  const w = word.toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-");
  if (EMPLOYEES[w]) return w;
  for (const [slug, e] of Object.entries(EMPLOYEES)) {
    if (e.aliases.includes(w) || slug.startsWith(w) || e.name.toLowerCase().replace(/\s+/g, "-") === w) return slug;
  }
  return null;
}

function underCloudSync(p) {
  const norm = path.resolve(p).toLowerCase().replace(/\\/g, "/");
  return SYNC_MARKERS.some((m) => norm.includes(m));
}

function isEmptyDir(p) {
  return fs.existsSync(p) && fs.statSync(p).isDirectory() && fs.readdirSync(p).length === 0;
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name), d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

async function fetchTarball(slug, dst) {
  const refs = ["refs/tags/v" + VERSION, "refs/heads/main"];
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "ai-employees-"));
  try {
    for (const ref of refs) {
      const url = "https://codeload.github.com/" + REPO + "/tar.gz/" + ref;
      let res;
      try { res = await fetch(url); } catch (err) { out("  download failed for " + ref + ": " + err.message); continue; }
      if (!res.ok) { out("  " + ref + " is not available (" + res.status + ")"); continue; }
      const file = path.join(tmp, "repo.tgz");
      fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
      const listing = spawnSync("tar", ["-tzf", file], { encoding: "utf8" });
      if (listing.status !== 0) fail("tar is needed to extract the download and it is not available: " + (listing.stderr || "").trim());
      const top = (listing.stdout.split("\n")[0] || "").split("/")[0];
      const member = top + "/employees/" + slug;
      if (!listing.stdout.split("\n").some((l) => l.startsWith(member + "/"))) fail("the download has no employees/" + slug + " folder");
      const extractRoot = path.join(tmp, "x");
      fs.mkdirSync(extractRoot);
      const x = spawnSync("tar", ["-xzf", file, "-C", extractRoot, member], { encoding: "utf8" });
      if (x.status !== 0) fail("extract failed: " + (x.stderr || "").trim());
      copyDir(path.join(extractRoot, member), dst);
      out("  downloaded " + ref + " and copied employees/" + slug);
      return;
    }
    fail("could not download the repo. Clone https://github.com/" + REPO + " and copy employees/" + slug + " by hand.");
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

function selftests(dst) {
  let allOk = true;
  for (const script of ["copy-check.mjs", "runlog.mjs", "guard.mjs"]) {
    const p = path.join(dst, "scripts", script);
    if (!fs.existsSync(p)) { out("  missing " + script); allOk = false; continue; }
    const r = spawnSync(process.execPath, [p, "--selftest"], { encoding: "utf8" });
    const last = (r.stdout || "").trim().split("\n").pop() || (r.stderr || "").trim();
    out("  " + (r.status === 0 ? "ok    " : "FAIL  ") + last);
    if (r.status !== 0) allOk = false;
  }
  return allOk;
}

function loginStatus() {
  const r = spawnSync("claude", ["auth", "status"], { encoding: "utf8", shell: process.platform === "win32" });
  if (r.error || r.status === null) return "unknown (claude is not on PATH here; the Desktop app has its own login)";
  const text = (r.stdout || "") + (r.stderr || "");
  if (/loggedIn"?\s*:\s*true/i.test(text)) return "logged in";
  if (/loggedIn"?\s*:\s*false/i.test(text) || /not logged in/i.test(text)) return "NOT logged in";
  return "unknown";
}

async function hire(args) {
  const slug = resolveSlug(args._[0]);
  if (!slug) { out("Which employee? One of:"); list(); process.exit(2); }
  const e = EMPLOYEES[slug];
  const dst = path.resolve(args.to || path.join(process.cwd(), "employees", slug));

  if (underCloudSync(dst)) {
    fail(dst + " sits under a cloud sync folder. The routines write state and a run log mid run, and a sync client corrupts exactly the file that tells tomorrow's run what already happened. Pick a local folder such as " + (process.platform === "win32" ? "D:\\AgentOps\\" + slug : "~/ai-employees/" + slug) + " and pass it with --to.", 3);
  }
  if (fs.existsSync(dst) && !isEmptyDir(dst)) {
    fail(dst + " already exists and is not empty. Never copy over an installed employee; its strategy, state and ledgers are yours. To update one, follow CHANGELOG.md, section Updating without losing your work.", 4);
  }

  out("Hiring the " + e.name + " into " + dst);
  const local = path.join(HERE, "..", "employees", slug);
  if (fs.existsSync(path.join(local, "CONTRACT.md"))) {
    copyDir(local, dst);
    out("  copied employees/" + slug + " from the package");
  } else {
    await fetchTarball(slug, dst);
  }

  const version = fs.existsSync(path.join(dst, "VERSION")) ? fs.readFileSync(path.join(dst, "VERSION"), "utf8").trim() : "unknown";
  out("  kit version " + version);
  out("Self tests:");
  const ok = selftests(dst);
  out("Login: " + loginStatus());

  const promptPath = path.join(dst, "INSTALL-PROMPT.md");
  let prompt = fs.readFileSync(promptPath, "utf8");
  const rootToken = (prompt.match(/«[A-Z_]+_ROOT»/) || [])[0];
  if (rootToken) prompt = prompt.split(rootToken).join(dst);

  out("");
  out("=".repeat(78));
  out("Next: open a Claude Code session in " + dst + ", fill in your home page URL in the");
  out("FILL THIS IN block below (the path is already filled), copy everything between");
  out("=== BEGIN PROMPT === and === END PROMPT ===, and paste it. You spend about ten minutes");
  out("answering questions. The employee's first run takes about an hour and may ask for a");
  out("second session." + (ok ? "" : " Fix the failed self test first; docs/PREREQUISITES.md says how."));
  out("=".repeat(78));
  out("");
  out(prompt.trim());
  out("");
  out("Guided version, updates and premium employees: club.reinventing.ai (https://club.reinventing.ai/?utm_source=github&utm_medium=kit&utm_campaign=" + slug + ")");
}

function parse(argv) {
  const args = { _: [], to: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--to") { args.to = argv[++i]; if (!args.to) fail("--to needs a folder", 2); continue; }
    if (a.startsWith("--to=")) { args.to = a.slice(5); continue; }
    if (a === "--help" || a === "-h") { args.help = true; continue; }
    if (a === "--version" || a === "-v") { out(VERSION); process.exit(0); }
    if (a.startsWith("--")) fail("unknown option " + a, 2);
    args._.push(a);
  }
  return args;
}

const args = parse(process.argv.slice(2));
const cmd = args._.shift();
if (args.help || !cmd) { usage(); process.exit(cmd ? 0 : 2); }
if (cmd === "list") { list(); process.exit(0); }
if (cmd === "hire") { await hire(args); process.exit(0); }
fail("unknown command " + cmd + ". Try: npx ai-employees hire gtm-engineer", 2);
