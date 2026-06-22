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

## Assembly Process

1. Start with the specification.
2. Select the relevant planner tasks.
3. Load the target agent contract.
4. Load the skill documents required by that agent.
5. Assemble the prompt sections in schema order.
6. Filter context so the prompt includes only material relevant to the assigned task set.

## Prompt Templates

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

## Design Principles

- The specification remains the source of truth.
- Planner tasks determine prompt scope.
- Agent definitions determine role and output expectations.
- Skill documents determine standards and constraints.
- Prompts should be filtered, not bloated.
- The prompt builder should preserve traceability back to its source inputs.
