# ADR-0001: Keep the agent harness repo local instead of installing ECC into the project

**Date**: 2026-09-24
**Status**: accepted
**Deciders**: the fork owner, with Claude Code

## Context

The ECC plugin is enabled for this project and already supplies agents, commands, skills and hooks. Its project installer (`install-apply.js --target claude-project`) would copy 828 files into `.claude/`, duplicating that surface, running every hook twice, and adding a second `plugin.json` beside the real `.claude-plugin/`. Its rule pack is written for application code, loads about 40 KB of common rules every session, and 50 of its files contain em or en dashes, which `AGENTS.md` forbids because the kits write copy published under a person's name.

## Decision

We keep the ECC plugin for its tools and install nothing from ECC into the project. Repository rules live in `.claude/rules/` as short, path scoped files written for this repo. Guardrails live in `.claude/hooks/repo-guard.mjs`, and rule checks that CI does not run live in `evals/run.mjs`.

## Alternatives Considered

### Alternative 1: full ECC project install
- **Pros**: one command, every ECC surface available offline in the repo
- **Cons**: duplicates the enabled plugin, double hooks, 828 files to review
- **Why not**: it adds weight and conflicts without adding a capability the plugin lacks

### Alternative 2: ECC rules only (`--modules rules-core`)
- **Pros**: the one ECC surface a plugin cannot deliver
- **Cons**: ships 22 language packs with no way to select one, always loaded coding rules that push toward shortening kits, dashes in the text
- **Why not**: the rules pull against `AGENTS.md` more than they help

## Consequences

### Positive
- Context stays small: one always loaded rule file of about 1.6 KB, the rest load only for matching paths.
- Every rule, hook and eval states a rule from `AGENTS.md`, so nothing contradicts the rulebook.

### Negative
- ECC rule updates do not reach this repo; the local rules are maintained by hand.

### Risks
- The local rules drift from `AGENTS.md`. Mitigation: `evals/run.mjs` checks the rules it can grade, and a change to `AGENTS.md` is the cue to reread `.claude/rules/`.
