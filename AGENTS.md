# AGENTS

This repository contains a React project bootstrapped with Vite.

## Programmatic checks
Before committing any change make sure to run the following commands. Install
dependencies first if `node_modules/` is missing:

```bash
npm install
```

Then run:

```bash
npm run check-imports
npm test
```

The test suite (`vitest`) must pass and the import check should report no
issues.

## Scope
- Application source files live under `src/`. Avoid editing other directories
  unless you are updating documentation or configuration.
- Keep commit messages brief.

## Pull requests
Summarize your changes and mention the result of the test commands in the pull
request description.
