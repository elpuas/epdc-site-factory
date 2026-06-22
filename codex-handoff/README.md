# Codex Handoff Layer

The Codex Handoff Layer packages generated prompt artifacts into a deterministic handoff structure that is ready for future Codex execution.

## Purpose

This layer exists so prompt generation and prompt execution remain separate responsibilities.

It takes:

- Generated prompt files

and produces:

- Codex-ready handoff documents in `codex-handoff/output/`

## Inputs

- `generated-prompts/`
- `generated-prompts/tasks/`

## Outputs

- `codex-handoff/output/`
- `codex-handoff/output/manifest.json`

## Boundary

This layer does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

It only packages prompt files for future execution.

## Source Examples vs Generated Artifacts

Source examples:

- `codex-handoff/examples/`

Generated artifacts:

- `codex-handoff/output/`

## CLI

Entrypoint:

- `scripts/prepare-codex-handoff.js`

Example:

```bash
npm run prepare-handoff
```
