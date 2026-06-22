# Prompt Schema

This document defines the reusable prompt structure for all future EPDC Codex-ready prompts.

## Purpose

The schema standardizes how prompts are assembled so every future agent-facing prompt follows the same contract.

## Canonical Structure

Every prompt should follow this structure:

```md
# Prompt

## Role

## Responsibilities

## Context

## Task

## Standards

## Constraints

## Expected Output
```

## Section Definitions

### Role

Defines:

- Which agent the prompt represents
- The domain the prompt owns
- The implementation posture of the prompt

The role section should be concise and explicit.

### Responsibilities

Defines:

- What the agent owns
- What the prompt expects the agent to do

This section should be derived from the relevant agent contract, not written from scratch each time.

### Context

Defines the source material the prompt needs to act correctly.

This usually includes:

- Project identity
- Relevant business goals
- Relevant specification requirements
- Relevant planner tasks
- Relevant task dependencies
- Any supporting implementation notes that materially affect the assigned work

This section should be filtered to the assigned scope instead of dumping all available documents.

### Task

Defines the actual assignment for the prompt.

This should state:

- What work is being requested
- Which task IDs are in scope
- What the agent should produce for those tasks

### Standards

Defines the implementation rules the prompt must follow.

This section should be assembled from the skill documents used by the target agent.

Examples:

- Astro standards for frontend prompts
- Security rules for backend prompts
- Metadata and structured-data rules for SEO prompts
- Validation criteria for QA prompts

### Constraints

Defines what the prompt must not do.

Common examples:

- Do not invent scope
- Do not implement orchestration
- Do not define memory
- Do not generate unsupported features
- Do not ignore specification constraints

### Expected Output

Defines the output shape the prompt should produce.

Examples:

- Frontend implementation guidance
- Backend handling notes
- SEO requirements
- QA findings
- Planner JSON output

## Assembly Rules

- Start from the specification.
- Narrow the prompt to the relevant planner tasks.
- Pull role, responsibilities, outputs, and constraints from the agent definition.
- Pull standards from the required skill documents.
- Preserve traceability by referencing task IDs and page names where useful.
- Avoid including irrelevant context that increases prompt size without improving accuracy.

## Prompt Quality Checklist

Before a prompt is considered complete, confirm:

- The target agent is explicit.
- The task scope is explicit.
- The prompt includes only relevant context.
- Standards come from the correct skill documents.
- Constraints preserve the repository boundaries.
- Expected output is concrete and domain-specific.
