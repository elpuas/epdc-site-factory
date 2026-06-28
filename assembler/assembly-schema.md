# Assembly Schema

## Purpose

This document defines the deterministic input and output contract for the EPDC Project Assembly Engine.

## Inputs

The Assembly Engine accepts three primary inputs:

- Starter
- Blueprint
- Project Name

Current CLI forms:

```sh
npm run create-project dentist demo-clinic
```

```sh
node scripts/assemble-project.js \
  --starter astro-minimal \
  --blueprint dentist \
  --project demo-clinic
```

## Input Definitions

### Starter

The Starter is the canonical Astro foundation stored under `starters/<starter-name>/`.

Responsibilities:

- root Astro configuration
- base layout
- base styles
- minimal source structure
- public folder foundation

### Blueprint

The Blueprint is the reusable vertical presentation system stored under `blueprints/<blueprint-name>/`.

Responsibilities:

- reusable components
- vertical layouts
- prop-driven page templates
- shared presentation types
- placeholder asset definitions

### Project Name

The Project Name is the deterministic target folder slug for the assembled output.

Output path:

- `projects/<project-name>/`

## Assembly Rules

The engine must:

1. confirm the Starter exists
2. confirm the Blueprint exists
3. confirm the placeholder template project exists for the selected Blueprint
4. create the target project directory
5. copy the Starter
6. copy the Blueprint into the project
7. copy the project data structure
8. copy placeholder assets
9. generate `project.json`
10. validate required folders and files

The engine must not:

- invoke AI
- generate new architecture
- make runtime decisions
- integrate future systems

## Output

The output is a runnable Astro project assembled under `projects/<project-name>/`.

Current expected assembled surfaces:

- Astro starter bootstrap files
- copied Blueprint files
- project-owned `src/data/`
- project-owned `src/pages/`
- placeholder assets in `public/images/`
- `project.json`
- project README

## Manifest Contract

Every assembled project must generate a root `project.json` manifest.

Required fields:

```json
{
  "name": "demo-clinic",
  "starter": "astro-minimal",
  "blueprint": "dentist",
  "factoryVersion": "0.1.0",
  "generatedAt": "2026-06-28T00:00:00.000Z",
  "status": "assembled"
}
```

## Validation Targets

The Assembly Engine must validate:

- Starter existence
- Blueprint existence
- required folders
- required layouts
- required pages
- placeholder assets
- manifest generation

## Result

When validation passes, the output is considered:

- deterministic
- assembled
- runnable
- ready for future Runtime integration without invoking Runtime now
