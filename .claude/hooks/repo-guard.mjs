#!/usr/bin/env node
// PreToolUse guard for this repository. Blocks the two things AGENTS.md forbids an agent outright:
// maintainer only actions (npm publish, GitHub releases, visibility changes) and em or en dashes written into a repo file.
// Exit 2 with a reason on stderr blocks the tool call; exit 0 lets it through.
// Self test: node .claude/hooks/repo-guard.mjs --selftest
import fs from "node:fs";
import path from "node:path";

// The en dash and the em dash, built from code points so this file never carries either character itself.
const DASHES = new RegExp("[" + String.fromCharCode(0x2013, 0x2014) + "]");
// A match counts only where a command starts: line start, after ; & | or a backtick, or inside $( ), optionally behind env assignments or sudo.
// Text that merely mentions the command inside a quoted string or a heredoc body is not blocked.
const AT_COMMAND = String.raw`(?:^|[;&|\x60]|\$\()\s*(?:[A-Za-z_][A-Za-z0-9_]*=\S*\s+)*(?:sudo\s+)?`;
const cmd = (body) => new RegExp(AT_COMMAND + body, "m");
const MAINTAINER_ONLY = [
  [cmd(String.raw`npm\s+(?:-{1,2}[\w=-]+\s+(?:[\w./-]+\s+)?)*publish\b`), "npm publish is the maintainer's job (AGENTS.md, out of scope)."],
  [cmd(String.raw`npm\s+(?:unpublish|dist-tag)\b`), "npm registry changes are the maintainer's job (AGENTS.md, out of scope)."],
  [cmd(String.raw`gh\s+release\s+(?:create|delete|edit|upload)\b`), "GitHub releases are the maintainer's job (AGENTS.md, out of scope)."],
  [cmd(String.raw`gh\s+repo\s+edit\b[^\n]*--visibility\b`), "Repository visibility is the maintainer's call (AGENTS.md, out of scope)."],
];

export function check(input, projectDir) {
  const tool = input.tool_name || "";
  const ti = input.tool_input || {};
  if (tool === "Bash") {
    const cmd = String(ti.command || "");
    for (const [re, why] of MAINTAINER_ONLY) if (re.test(cmd)) return "Blocked: " + why + " Tell the user what the maintainer has to run instead.";
    return null;
  }
  if (tool === "Write" || tool === "Edit" || tool === "MultiEdit") {
    const file = path.resolve(projectDir, String(ti.file_path || ""));
    const inside = file === projectDir || file.startsWith(projectDir + path.sep);
    if (!inside || file.includes(path.sep + "node_modules" + path.sep)) return null;
    const texts = [ti.content, ti.new_string, ...(Array.isArray(ti.edits) ? ti.edits.map((e) => e && e.new_string) : [])];
    if (texts.some((t) => typeof t === "string" && DASHES.test(t))) {
      return "Blocked: the new text for " + path.relative(projectDir, file) + " contains an em dash or an en dash. AGENTS.md forbids both everywhere. Use a period, a comma, or split the sentence, then retry.";
    }
  }
  return null;
}

function selftest() {
  const root = "/repo";
  const em = String.fromCharCode(0x2014), en = String.fromCharCode(0x2013);
  const cases = [
    [{ tool_name: "Bash", tool_input: { command: "npm publish --access public" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "npm --workspace x publish" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "gh release create v1.9.0" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "gh repo edit --visibility private" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "npm test && node installer/cli.mjs list" } }, false],
    [{ tool_name: "Bash", tool_input: { command: "gh release list" } }, false],
    [{ tool_name: "Bash", tool_input: { command: "cd repo && npm publish" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "NODE_ENV=prod npm publish" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "echo ok\ngh release create v2" } }, true],
    [{ tool_name: "Bash", tool_input: { command: "node -e 'j.deny=[\"Bash(npm publish:*)\"]'" } }, false],
    [{ tool_name: "Bash", tool_input: { command: "grep -n \"npm publish\" AGENTS.md" } }, false],
    [{ tool_name: "Write", tool_input: { file_path: "/repo/docs/a.md", content: "one " + em + " two" } }, true],
    [{ tool_name: "Edit", tool_input: { file_path: "docs/a.md", old_string: "x", new_string: "1" + en + "2" } }, true],
    [{ tool_name: "MultiEdit", tool_input: { file_path: "/repo/a.md", edits: [{ new_string: "ok" }, { new_string: em }] } }, true],
    [{ tool_name: "Edit", tool_input: { file_path: "/repo/a.md", old_string: em, new_string: "a period." } }, false],
    [{ tool_name: "Write", tool_input: { file_path: "/elsewhere/a.md", content: em } }, false],
    [{ tool_name: "Write", tool_input: { file_path: "/repo/a.md", content: "plain-hyphen text" } }, false],
    [{ tool_name: "Read", tool_input: { file_path: "/repo/a.md" } }, false],
  ];
  let failed = 0;
  cases.forEach(([input, blocked], i) => {
    if (Boolean(check(input, root)) !== blocked) { failed++; process.stdout.write("case " + (i + 1) + " expected " + (blocked ? "block" : "allow") + "\n"); }
  });
  process.stdout.write(failed ? "repo-guard selftest: FAIL (" + failed + ")\n" : "repo-guard selftest: PASS (" + cases.length + " cases)\n");
  process.exit(failed ? 1 : 0);
}

if (process.argv.includes("--selftest")) selftest();
else {
  let raw = "";
  try { raw = fs.readFileSync(0, "utf8"); } catch { process.exit(0); }
  let input;
  try { input = JSON.parse(raw); } catch { process.exit(0); }
  const reason = check(input, path.resolve(process.env.CLAUDE_PROJECT_DIR || input.cwd || process.cwd()));
  if (reason) { process.stderr.write(reason + "\n"); process.exit(2); }
  process.exit(0);
}
