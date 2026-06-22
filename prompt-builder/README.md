# Prompt Builder

The Prompt Builder layer defines how EPDC Site Factory assembles deterministic Codex-ready prompts from the existing documentation contracts.

## Purpose

The purpose of this layer is to transform:

- Specifications
- Planner tasks
- Agent definitions
- Skill definitions

into prompts that are ready for future Codex execution.

This layer does not implement AI, orchestration, memory, Codex integration, or website generation.

## Source Materials

Prompt assembly depends on these source layers:

- Specification documents in `specs/`
- Planner output shaped by `planner/task-schema.json`
- Agent contracts in `agents/`
- Skill contracts in `skills/`
- Context packages assembled by the Context Assembly Engine

## Output Target

The output target is a structured prompt that follows the reusable schema defined in `prompt-builder/prompt-schema.md`.

The working builder writes prompt files into `generated-prompts/`.

## Assembly Process

1. Start with the specification and planner output.
2. Assemble a context package for the target task.
3. Select the correct prompt template by category.
4. Assemble the prompt sections in schema order.
5. Write the deterministic prompt file.

## Prompt Templates

Assembly guidance lives in:

- `prompts/planner.md`
- `prompts/frontend.md`
- `prompts/backend.md`
- `prompts/seo.md`
- `prompts/qa.md`
- `prompts/content.md`

Final render templates live in:

- `prompt-builder/templates/frontend-template.md`
- `prompt-builder/templates/backend-template.md`
- `prompt-builder/templates/seo-template.md`
- `prompt-builder/templates/qa-template.md`
- `prompt-builder/templates/content-template.md`

## Example Prompts

Realistic examples based on the dentist specification live in:

- `prompt-builder/examples/frontend-prompt.md`
- `prompt-builder/examples/backend-prompt.md`
- `prompt-builder/examples/seo-prompt.md`

## CLI

Builder entrypoint:

- `scripts/build-prompt.js`

Task-runner entrypoint:

- `scripts/run-tasks.js`

## Design Principles

- The specification remains the source of truth.
- Planner tasks determine prompt scope.
- Agent definitions determine role and output expectations.
- Skill documents determine standards and constraints.
- Prompts should be filtered, not bloated.
- The prompt builder should preserve traceability back to its source inputs.
