# Prompt Builder

The Prompt Builder layer defines how EPDC Site Factory assembles Codex-ready prompts from the existing documentation contracts.

## Purpose

The purpose of this layer is to transform:

- Specifications
- Planner tasks
- Agent definitions
- Skill definitions

into prompts that are ready for future Codex execution.

This layer does not implement AI, orchestration, memory, Codex integration, or website generation.

## Source Materials

Prompt assembly depends on four main sources:

- Specification documents in `specs/`
- Planner output shaped by `planner/task-schema.json`
- Agent contracts in `agents/`
- Skill contracts in `skills/`

## Output Target

The output target is a structured prompt that follows the reusable schema defined in `prompt-builder/prompt-schema.md`.

The first working CLI writes generated prompt files into `generated-prompts/`.

## Assembly Process

1. Start with the specification.
2. Select the relevant planner tasks.
3. Assemble a context package through the Context Assembly Engine.
4. Choose the prompt template for the target domain.
5. Assemble the prompt sections in schema order.
6. Write a deterministic prompt file.

## Prompt Templates

Final render templates live in:

- `prompt-builder/templates/frontend-template.md`
- `prompt-builder/templates/backend-template.md`
- `prompt-builder/templates/seo-template.md`
- `prompt-builder/templates/qa-template.md`
- `prompt-builder/templates/content-template.md`

Prompt assembly guidance still lives in:

Agent-specific prompt templates live in:

- `prompts/planner.md`
- `prompts/frontend.md`
- `prompts/backend.md`
- `prompts/seo.md`
- `prompts/qa.md`
- `prompts/content.md`

## Example Prompts

Realistic examples based on the dentist specification live in:

- `prompt-builder/examples/frontend-prompt.md`
- `prompt-builder/examples/backend-prompt.md`
- `prompt-builder/examples/seo-prompt.md`

Generated-output examples live in:

- `prompt-builder/examples/generated-frontend-prompt.md`
- `prompt-builder/examples/generated-backend-prompt.md`
- `prompt-builder/examples/generated-seo-prompt.md`

## CLI

The working builder entrypoint is:

- `scripts/build-prompt.js`

Examples:

```bash
npm run build-prompt frontend
npm run build-prompt backend
npm run build-prompt seo
```

## Design Principles

- The specification remains the source of truth.
- Planner tasks determine prompt scope.
- Agent definitions determine role and output expectations.
- Skill documents determine standards and constraints.
- Prompts should be filtered, not bloated.
- The prompt builder should preserve traceability back to its source inputs.
