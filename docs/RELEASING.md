# Publishing this update

Prepared package version: 1.9.0. SEO/AEO kit: 1.10.0. Other kits: 1.9.0. Standard: 1.5.

Preparation checks completed on 2026-10-02: npm test, installer listing, whitespace check, package dry run, and strict validation of both the marketplace and plugin manifests passed. The package preview contains all eight work-cycle helpers and the GSC helper, with no operating state. npm reported 1.8.0 as the published version at that check. No publication or live scheduled model evaluation was performed.

GitHub and npm are separate distribution steps. Commit and push the reviewed source first, then publish from that same clean checkout. The existing 60 routines remain the roster. Do not run npm version again for this prepared release.

From the repository root in PowerShell:

```powershell
npm test
if ($LASTEXITCODE -ne 0) { throw "Tests failed" }
node installer/cli.mjs list
if ($LASTEXITCODE -ne 0) { throw "Installer check failed" }
npm pack --dry-run
if ($LASTEXITCODE -ne 0) { throw "Package inspection failed" }
npm view ai-employees version
```

Confirm that 1.9.0 has not already been published and that the packed files contain the new per-kit work-cycle helpers and GSC measurement helper, with no member state. Validate the plugin with `claude plugin validate . --strict` on a machine with the Claude CLI. JSON/version checks in npm test are useful but do not replace the vendor validator.

For the maintainer to publish after GitHub is current:

```powershell
npm publish --access public
if ($LASTEXITCODE -ne 0) { throw "Publish failed" }
npm view ai-employees version
npx --yes ai-employees@latest --version
```

Use `npm login` if your npm session is absent, and complete npm's account verification yourself. No credential goes in this repo. If the configured npm cache is unwritable, append `--cache "$env:TEMP/ai-employees-npm-cache"` to the npm command. Publication is a maintainer action; preparing this release does not publish it.

After publication, members request the current package explicitly:

```powershell
npx ai-employees@latest upgrade ad-manager-employee --to "C:\Agents\ad-manager-employee"
npx ai-employees@latest upgrade ad-manager-employee --to "C:\Agents\ad-manager-employee" --apply
npx ai-employees@latest reconcile ad-manager-employee --to "C:\Agents\ad-manager-employee"
```

Replace the example folder with the installed employee's real folder. Read the reconciliation report before applying it. Local files and schedules are preserved; see [upgrading](UPGRADING.md) for older installs and partial adoption.

Release validation distinguishes offline tests from observed production behavior. Automated scenario and helper checks do not establish that an unattended model has completed a real scheduled cycle. Confirm the first scheduled run, deliverable and progress receipt after upgrading an installation.

Reference: [npm publishing documentation](https://docs.npmjs.com/cli/commands/npm-publish/).
