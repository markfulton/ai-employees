/*
 * Upgrade and contribute.
 *
 * An installed employee is two things sharing one folder: the kit, which is
 * ours, and the business it has been running, which is the member's. The
 * manifest in employee.json says which is which. Everything here exists so an
 * upgrade can replace the first without ever touching the second.
 *
 * The rule that shapes the whole file: a kit file the member has edited is
 * never overwritten. It is written beside the original as <name>.new and
 * reported, because a routine that has been repaired in the field carries a
 * fix that exists nowhere else.
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export const RECEIPT = ".installed.json";

function readJson(p) {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

/* A small glob: ** spans separators, * does not. */
function globToRe(glob) {
  let re = "";
  for (let i = 0; i < glob.length; i++) {
    const c = glob[i];
    if (c === "*" && glob[i + 1] === "*") { re += ".*"; i += 1; if (glob[i + 1] === "/") i += 1; continue; }
    if (c === "*") { re += "[^/]*"; continue; }
    if (c === "?") { re += "[^/]"; continue; }
    re += c.replace(/[.+^${}()|[\]\\]/g, "\\$&");
  }
  return new RegExp("^" + re + "$");
}

export function classify(manifest, rel) {
  const p = rel.split(path.sep).join("/");
  const test = (globs) => (globs || []).some((g) => globToRe(g).test(p));
  if (test(manifest.files?.member)) return "member";
  if (test(manifest.files?.merge)) return "merge";
  if (test(manifest.files?.kit)) return "kit";
  return "unknown";
}

export function walkFiles(root, base = root, acc = []) {
  for (const e of fs.readdirSync(root, { withFileTypes: true })) {
    if (e.name === ".git" || e.name === "node_modules") continue;
    const p = path.join(root, e.name);
    if (e.isDirectory()) walkFiles(p, base, acc);
    else acc.push(path.relative(base, p));
  }
  return acc;
}

export function hashFile(p) {
  return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex").slice(0, 16);
}

/*
 * Written at hire time. Without it an upgrade cannot tell a file the member
 * edited from a file the kit changed, and the safe thing becomes impossible.
 */
export function writeReceipt(dst, slug, version) {
  const manifest = readJson(path.join(dst, "employee.json"));
  const files = {};
  for (const rel of walkFiles(dst)) {
    if (rel === RECEIPT) continue;
    if (manifest && classify(manifest, rel) === "member") continue;
    files[rel.split(path.sep).join("/")] = hashFile(path.join(dst, rel));
  }
  const receipt = {
    schema: "ai-employee-receipt/1",
    slug,
    version,
    standard: manifest?.standard ?? null,
    installed_on: new Date().toISOString().slice(0, 10),
    files,
  };
  fs.writeFileSync(path.join(dst, RECEIPT), JSON.stringify(receipt, null, 2) + "\n");
  return receipt;
}

function changelogBetween(dir, from, to) {
  const p = path.join(dir, "CHANGELOG.md");
  if (!fs.existsSync(p)) return [];
  const lines = fs.readFileSync(p, "utf8").split(/\r?\n/);
  const out = [];
  let taking = false;
  for (const line of lines) {
    const m = line.match(/^##\s+([0-9]+\.[0-9]+\.[0-9]+)/);
    if (m) { taking = m[1] !== from; if (m[1] === from) break; }
    if (taking) out.push(line);
  }
  return out;
}

/*
 * Compare an installed folder against a fresh kit and report before changing
 * anything. Nothing is written unless --apply is passed, and even then a
 * locally edited kit file is written as <name>.new rather than replaced.
 */
export function upgrade({ installed, fresh, slug, apply, out, fail }) {
  if (!fs.existsSync(path.join(installed, "CONTRACT.md"))) {
    fail(installed + " does not look like an installed employee. Point --to at the folder you hired into.", 4);
  }

  const manifest = readJson(path.join(fresh, "employee.json"));
  if (!manifest) fail("the new kit has no employee.json, so nothing can be classified safely. Upgrade by hand.", 5);

  const receipt = readJson(path.join(installed, RECEIPT));
  const installedVersion = fs.existsSync(path.join(installed, "VERSION"))
    ? fs.readFileSync(path.join(installed, "VERSION"), "utf8").trim()
    : "unknown";
  const newVersion = manifest.version;

  out("Employee   " + manifest.name + " (" + slug + ")");
  out("Installed  " + installedVersion + "   at " + installed);
  out("Available  " + newVersion);
  out("");

  if (!receipt) {
    out("No " + RECEIPT + " in the installed folder, so this kit was installed before receipts existed.");
    out("Every kit file therefore has to be treated as possibly edited, and nothing will be");
    out("replaced in place. Review the .new files this run writes, then keep or discard each one.");
    out("");
  }

  if (installedVersion === newVersion) {
    out("Already on " + newVersion + ". Nothing to upgrade.");
    return { changed: 0, drifted: 0, skipped: 0 };
  }

  /*
    Count what is the member's by walking the INSTALLED folder, not the kit.
    A freshly shipped kit contains no state, no ledgers and no learned flows,
    so walking it would always report zero and hide the very thing this
    command exists to protect.
  */
  const rows = { replace: [], drifted: [], added: [], merge: [], member: 0 };
  for (const rel of walkFiles(installed)) {
    if (classify(manifest, rel) === "member") rows.member += 1;
  }

  for (const rel of walkFiles(fresh)) {
    const key = rel.split(path.sep).join("/");
    if (key === RECEIPT) continue;
    const kind = classify(manifest, rel);
    if (kind === "member") continue;

    const target = path.join(installed, rel);
    const source = path.join(fresh, rel);

    if (kind === "merge") { rows.merge.push(key); continue; }
    if (!fs.existsSync(target)) { rows.added.push(key); continue; }

    const now = hashFile(target);
    if (now === hashFile(source)) continue; // identical already
    const asShipped = receipt?.files?.[key];
    if (asShipped && asShipped === now) rows.replace.push(key);
    else rows.drifted.push(key);
  }

  out("  " + String(rows.replace.length).padStart(4) + "  kit files unchanged since install, safe to replace");
  out("  " + String(rows.added.length).padStart(4) + "  new files this version adds");
  out("  " + String(rows.drifted.length).padStart(4) + "  kit files you or your employee edited, kept and written beside as .new");
  out("  " + String(rows.merge.length).padStart(4) + "  files both sides own, never rewritten (" + rows.merge.join(", ") + ")");
  out("  " + String(rows.member).padStart(4) + "  files that are yours and are not read or written by this command");
  out("");

  if (rows.drifted.length) {
    out("Edited since install, so these keep what they have:");
    for (const f of rows.drifted) out("    " + f);
    out("");
  }

  const notes = changelogBetween(fresh, installedVersion, newVersion).filter((l) => l.trim());
  if (notes.length) {
    out("What changed between " + installedVersion + " and " + newVersion + ":");
    for (const l of notes.slice(0, 40)) out("  " + l);
    out("");
  }

  if (!apply) {
    out("This was a report. Nothing was written.");
    out("Run it again with --apply to replace the safe files and write the rest as .new.");
    return rows;
  }

  for (const rel of rows.replace.concat(rows.added)) {
    const target = path.join(installed, rel);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(fresh, rel), target);
  }
  for (const rel of rows.drifted) {
    const target = path.join(installed, rel + ".new");
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(fresh, rel), target);
  }
  for (const rel of rows.merge) {
    const target = path.join(installed, rel);
    if (!fs.existsSync(target)) fs.copyFileSync(path.join(fresh, rel), target);
    else fs.copyFileSync(path.join(fresh, rel), path.join(installed, rel + ".new"));
  }

  writeReceipt(installed, slug, newVersion);
  out("Applied. " + (rows.replace.length + rows.added.length) + " files updated, " +
      (rows.drifted.length + rows.merge.length) + " written as .new for you to read.");
  out("Your state, ledgers, strategy, learned browser flows and improvements were not touched.");
  return rows;
}

/*
 * Every kit writes improvements/CHANGELOG.md when a routine hits a defect in
 * its own instructions and repairs it, quoting the text it replaced. Those
 * entries are field reports and they are worth more than anything written from
 * a desk, so this turns them into something that can be opened upstream.
 */
export function contribute({ installed, slug, since, out, fail }) {
  const p = path.join(installed, "improvements", "CHANGELOG.md");
  if (!fs.existsSync(p)) {
    fail("no improvements/CHANGELOG.md in " + installed + ". Nothing to contribute yet, which is normal for a young install.", 4);
  }
  const version = fs.existsSync(path.join(installed, "VERSION"))
    ? fs.readFileSync(path.join(installed, "VERSION"), "utf8").trim()
    : "unknown";

  const entries = fs.readFileSync(p, "utf8").split(/\r?\n/)
    .filter((l) => l.trim())
    .filter((l) => (since ? (l.slice(0, 10) >= since) : true));

  if (!entries.length) {
    out("No entries" + (since ? " on or after " + since : "") + ". Nothing to contribute.");
    return;
  }

  out("Copy everything below into a new issue at");
  out("https://github.com/markfulton/ai-employees/issues/new?labels=field-report");
  out("");
  out("=".repeat(78));
  out("Field report: " + slug + " " + version + ", " + entries.length + " repairs");
  out("");
  out("These are repairs the running employee made to its own instructions after");
  out("hitting a defect in them. Each line gives the date, the routine, what went");
  out("wrong, and the text that was replaced.");
  out("");
  out("Kit version: " + version);
  out("");
  for (const e of entries) out("- " + e);
  out("=".repeat(78));
  out("");
  out("Read it before you send it. These lines can name your own files, your");
  out("customers and your numbers, and this command does not redact anything.");
}
