# Prompt Builder

The Prompt Builder layer converts canonical JSON context packages into deterministic prompt files.

## Purpose

This layer prepares Codex-ready prompt artifacts without invoking Codex or any AI model.

It consumes:

- Project specifications
- Planner output
- Agent contracts
- Skill contracts
- Context packages from the Context Engine

It produces:

- Deterministic prompt files in `generated-prompts/`

## Prompt Layer Split

The repository has two prompt-related source layers with different responsibilities.

### Prompt Guidance Documents

Location:

- `prompts/`

Role:

- Explain how prompts for each agent category should be assembled
- Describe which sources matter for each prompt type
- Document boundaries, standards, and expected outputs

These are architecture guidance documents. They are not executable render templates.

### Prompt Builder Templates

Location:

- `prompt-builder/templates/`

Role:

- Define the final prompt-file structure used by the builder
- Contain the stable placeholder layout consumed by `scripts/build-prompt.js`

These are executable render templates.

## Canonical Input Format

The canonical context package format is JSON.

The working builder consumes a structured context package object produced by the Context Engine. Markdown examples may exist for human review, but they are not the executable source format.

## Output Types

Source examples:

- `prompt-builder/examples/frontend-prompt.md`
- `prompt-builder/examples/backend-prompt.md`
- `prompt-builder/examples/seo-prompt.md`
- `prompt-builder/examples/generated-frontend-prompt.md`
- `prompt-builder/examples/generated-backend-prompt.md`
- `prompt-builder/examples/generated-seo-prompt.md`

Generated artifacts:

- `generated-prompts/generated-frontend-prompt.md`
- `generated-prompts/generated-backend-prompt.md`
- `generated-prompts/generated-seo-prompt.md`
- `generated-prompts/tasks/*.md`

The `prompt-builder/examples/` directory is source-controlled reference material. The `generated-prompts/` directory is deterministic script output.

## Assembly Process

1. Start from a specification-backed planner task or standalone example target.
2. Assemble a JSON context package through the Context Engine.
3. Select the correct render template by category.
4. Build prompt sections in schema order.
5. Write the deterministic prompt file into `generated-prompts/`.

## CLI

Builder entrypoint:

- `scripts/build-prompt.js`

Task-runner downstream entrypoint:

- `scripts/run-tasks.js`

Examples:

```bash
npm run build-prompt frontend
npm run build-prompt backend
npm run build-prompt seo
```

## Design Principles

- The specification remains the source of truth.
- Planner tasks determine scope.
- Context packages determine what the builder receives.
- Agent contracts determine role and output posture.
- Skill contracts determine standards and constraints.
- Prompt files are generated artifacts, not handwritten source definitions.
