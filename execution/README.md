# Execution Workflow

The Execution Workflow layer converts Codex handoff documents into deterministic execution packages.

## Purpose

This layer defines the last non-AI boundary before any future execution surface.

It takes:

- Handoff documents from `codex-handoff/output/`

and produces:

- Execution packages in `execution/packages/`

## Inputs

- `codex-handoff/output/`
- `codex-handoff/output/manifest.json`

## Outputs

- `execution/packages/`
- `execution/packages/manifest.json`
- Future execution results under `execution/results/`

## Execution Package Role

An execution package preserves:

- The source handoff reference
- The source prompt reference
- The prompt mode
- The project and task identity
- The target project path
- The allowed file boundary
- The execution intent
- The prompt payload
- The expected outputs
- The implementation goal
- The expected result location
- The review requirements for downstream approval

## Boundaries

This layer does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

It only prepares execution packages for a future execution surface.

## Source Examples vs Generated Artifacts

Source examples:

- `execution/examples/`

Generated artifacts:

- `execution/packages/`
- `execution/results/`

## CLI

Entrypoint:

- `scripts/create-execution-package.js`

Example:

```bash
npm run create-execution-package
```
