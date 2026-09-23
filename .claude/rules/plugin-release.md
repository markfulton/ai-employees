---
paths:
  - ".claude-plugin/**"
  - "package.json"
  - "package-lock.json"
  - "skills/**"
---
# Plugin and package

- The repo root is the Claude Code plugin `ai-employees` and its own marketplace. `.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json` both carry a `version` that moves with `package.json`. Change all three together.
- After any change here, run `claude plugin validate . --strict` as well as the three core checks.
- A published npm version can never be reused. Bumping is fine; publishing is the maintainer's job, so never run `npm publish`.
- `skills/hire/` runs the bundled `installer/cli.mjs`. Keep its instructions in step with the installer's real commands.
