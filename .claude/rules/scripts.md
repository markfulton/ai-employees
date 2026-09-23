---
paths:
  - "employees/*/scripts/**"
  - "installer/**"
  - ".github/scripts/**"
  - "skills/**/*.mjs"
---
# Node scripts

## Runtime

- Node 18 or newer, ES modules, `node:` builtin imports only. No npm dependencies, ever: the installer and every kit script must run from a bare `npx` or a copied folder.
- Keep the file's existing style: `const`, plain functions, `process.stdout.write`, short comments that explain why.

## Self tests

- Every script under `employees/*/scripts/` must accept `--selftest`, exit 0 on pass, and print a last line that says what passed. `selftests.mjs` runs each one and reports that last line.
- A self test works in a temp folder made with `fs.mkdtempSync(path.join(os.tmpdir(), ...))`, never in the repo or the member's install.
- Change behaviour and self test together. A new branch in the code gets a case in the self test.

## Shared scripts

`guard.mjs` is byte identical in every kit. After editing one copy, copy it to every kit and confirm with `md5 -q employees/*/scripts/guard.mjs | sort | uniq -c` that only one hash remains.

`runlog.mjs` and `copy-check.mjs` exist in every kit but differ per kit, because each carries its own role's fields and copy rules. Never overwrite one kit's copy with another's. When a fix applies to all of them, port it into each file by hand and run each self test. Kit specific extras, such as the Ad Manager's `review.mjs`, stay in their own kit.

## Installer

`installer/cli.mjs` serves every kit folder under `employees/`. After adding or renaming a kit, run `node installer/cli.mjs list` and check the `hire` skill in `skills/hire/` lists it too.
