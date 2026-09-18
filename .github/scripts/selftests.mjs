#!/usr/bin/env node
// Runs the self test inside every script under each kit's scripts/ folder and checks every routine's frontmatter.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const EMPLOYEES = path.join(ROOT, "employees");
let failures = 0;

for (const slug of fs.readdirSync(EMPLOYEES).sort()) {
  const dir = path.join(EMPLOYEES, slug);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const script of fs.readdirSync(path.join(dir, "scripts")).filter((f) => f.endsWith(".mjs")).sort()) {
    const r = spawnSync(process.execPath, [path.join(dir, "scripts", script), "--selftest"], { encoding: "utf8" });
    const last = (r.stdout || "").trim().split("\n").pop() || (r.stderr || "").trim();
    const ok = r.status === 0;
    if (!ok) failures++;
    process.stdout.write((ok ? "  ok    " : "  FAIL  ") + slug + " " + script + ": " + last + "\n");
  }
  const routines = path.join(dir, "routines");
  for (const id of fs.readdirSync(routines)) {
    const text = fs.readFileSync(path.join(routines, id, "SKILL.md"), "utf8");
    const m = /^---\nname: ([^\n]+)\ndescription: ([^\n]+)\nmetadata:\n  internal: true\n---\n/.exec(text);
    if (!m || m[1].trim() !== id) {
      failures++;
      process.stdout.write("  FAIL  " + slug + " routines/" + id + ": frontmatter must be name, description, metadata.internal true, and name must equal the folder\n");
    }
  }
  const version = fs.readFileSync(path.join(dir, "VERSION"), "utf8").trim();
  const changelog = fs.readFileSync(path.join(dir, "CHANGELOG.md"), "utf8");
  if (!changelog.includes("\n## " + version + ",")) {
    failures++;
    process.stdout.write("  FAIL  " + slug + ": VERSION " + version + " has no CHANGELOG heading\n");
  }
}

process.stdout.write(failures ? "selftests: FAIL (" + failures + ")\n" : "selftests: PASS\n");
process.exit(failures ? 1 : 0);
