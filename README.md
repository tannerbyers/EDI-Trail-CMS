# EDI Trail CMS

This will be where all the marketing content for EDI Trail will be.

# Quick Start

### Get Started (Local Development)

To get started, fork and run this project!

```
## First fork the project on Github
git clone <insert git uri>
cd EDI-Trail-CMS
npm install
## Create an env file. You'll replace the values in this in later steps.
cp local_env_template .env.local
## Run the project locally in dev mode, and launch the browser
npm run dev -- --open
```

### Developer Environment

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/format.yml), and [code linting and typechecking passes](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/linting.yml). Github disables CI on forks by default, so if you fork this repo, be sure to go into the Github Actions page for your repo and enable workflows. 

You can manually run these scripts yourself; `npm run build` for the build, `npm run format_check` to check formatting, `npm run lint` for the linting, `npm run check` for typechecking, and `npm run test` for testing (if you add tests). 

Installing extensions in your editor can automatically format-on-save, show linting/type issues inline, and run your test cases: 
- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support) 
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide) 

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
set -e
npm run format_check
npm run lint
npm run build
npm run check
npm run test_run
```

Finally: if you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and remove the git hook (`.git/hooks/pre-commit`).

---

## TODO 

Lots to do. 

- [ ] setup Stripe with real prices
- [ ] build dashboard
- [ ] backend
- [ ] update settings page
- [ ] setup uptime monitor
- [ ] setup basic logging
- [ ] document logins and processes

## Done
- [x] deploy first draft
- [ ] setup stripe, supabase
