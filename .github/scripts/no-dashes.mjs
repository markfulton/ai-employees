#!/usr/bin/env node
// Fails on any em dash (U+2014) or en dash (U+2013) in shipped text.
// Covers README.md, the root documents, docs/, skills/, installer/, and every file under
// employees/. In a Markdown file that carries a "## Corrections" heading, only the text above
// that heading is checked, because the section below it belongs to whoever installed the kit.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
if (!fs.existsSync(path.join(ROOT, "employees"))) { process.stderr.write("no-dashes: cannot find employees/ under " + ROOT + "\n"); process.exit(2); }
const ROOTS = ["README.md", "CONTRIBUTING.md", "TRADEMARKS.md", "SECURITY.md", "CHANGELOG.md", "CREDITS.md", "docs", "skills", "installer", "employees", "assets", "package.json"];
const SKIP_DIRS = new Set([".git", "node_modules"]);
const TEXT = /\.(md|mjs|js|cjs|json|yml|yaml|txt|example|csv|jsonl)$/i;
// The en dash and the em dash, built from code points so this file never carries either character itself.
const DASHES = new RegExp("[" + String.fromCharCode(0x2013, 0x2014) + "]");

const hits = [];
function scan(file) {
  let text = fs.readFileSync(file, "utf8");
  if (file.endsWith(".md")) {
    const cut = text.indexOf("\n## Corrections");
    if (cut >= 0) text = text.slice(0, cut);
  }
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    const col = line.search(DASHES);
    if (col >= 0) hits.push(path.relative(ROOT, file) + ":" + (i + 1) + ":" + (col + 1));
  });
}
function walk(p) {
  if (!fs.existsSync(p)) return;
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const e of fs.readdirSync(p)) if (!SKIP_DIRS.has(e)) walk(path.join(p, e));
  } else if (TEXT.test(p) || path.basename(p) === "VERSION") {
    scan(p);
  }
}
for (const r of ROOTS) walk(path.join(ROOT, r));

if (hits.length) {
  process.stdout.write("no-dashes: FAIL, " + hits.length + " dash character(s) found:\n  " + hits.join("\n  ") + "\n");
  process.exit(1);
}
process.stdout.write("no-dashes: PASS\n");
