# Generated Prompts

This directory stores prompt files produced by the Prompt Builder CLI.

## Purpose

The files in this directory are deterministic build artifacts created from:

- Context packages in `context-engine/examples/`
- Prompt templates in `prompt-builder/templates/`
- The build script in `scripts/build-prompt.js`

## Current Output Targets

- `generated-frontend-prompt.md`
- `generated-backend-prompt.md`
- `generated-seo-prompt.md`

## Usage

Examples:

```bash
npm run build-prompt frontend
npm run build-prompt backend
npm run build-prompt seo
```

Each command overwrites the corresponding generated prompt file with deterministic content.
