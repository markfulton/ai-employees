## What changed

<!-- One plain sentence per concern. No prefix, no dash. -->

## Why

<!-- The reason for the change. Name the run record or field report if one prompted it. -->

## Checks

- [ ] `node .github/scripts/selftests.mjs` passes
- [ ] `node .github/scripts/no-dashes.mjs` passes
- [ ] `node installer/cli.mjs list` runs
- [ ] `node evals/run.mjs` passes
- [ ] `claude plugin validate . --strict` passes, if `.claude-plugin/` changed

## Kit changes

- [ ] No kit behaviour changed, or every changed kit has `VERSION` and `CHANGELOG.md` bumped and a line in the root `CHANGELOG.md`
- [ ] The other kits were checked for the same shared section change
- [ ] Clock times, budgets and prices live only in `SCHEDULE.md` or a named, dated source file
- [ ] Everything under `examples/` is fictional
- [ ] No routine gained a send, submit, post or spend without a release in `RELEASES.md`

## Publish

- [ ] This change does not need an npm publish
- [ ] This change needs a publish: the root `package.json` version is bumped and the maintainer has to run `npm publish --access public`
