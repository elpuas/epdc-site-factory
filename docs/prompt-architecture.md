# Prompt Architecture

This document defines the Prompt Generation Layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Tasks`

`↓`

`Context Assembly Engine`

`↓`

`Agent`

`↓`

`Skill`

`↓`

`Prompt Builder`

`↓`

`Codex`

## Step 1 - SPEC

The project specification remains the source of truth.

It provides:

- Business goals
- Technical requirements
- Pages
- Features
- SEO requirements
- Content requirements
- Integrations
- Acceptance criteria

Prompt assembly begins here because prompts must stay grounded in actual project requirements.

## Step 2 - Planner

The planning layer translates the specification into structured work.

It determines:

- What tasks exist
- Which category owns each task
- Which tasks depend on other tasks
- What priority each task has

Without planning, prompt generation would be forced to infer scope directly from the raw specification, which would create inconsistent prompt boundaries.

## Step 3 - Tasks

The task layer narrows the prompt scope.

Prompt generation should use tasks to determine:

- Which agent should receive the prompt
- Which subset of the specification matters for that prompt
- Which dependencies or upstream work must be referenced

Tasks are the main filtering mechanism that prevents overly broad prompts.

## Step 4 - Context Assembly Engine

The context engine assembles the source package that prompt generation can consume deterministically.

This matters because the prompt builder should not have to reconstruct ownership, skills, and constraints from raw files on every run.

## Step 5 - Agent

The agent contract defines the role that the prompt should assume.

The prompt builder pulls from the relevant agent definition to determine:

- Role
- Responsibilities
- Required context
- Outputs
- Constraints
- Success posture

This ensures prompt identity comes from the documented architecture instead of ad hoc role descriptions.

## Step 6 - Skill

The skill layer defines the implementation standards that the prompt must enforce.

The prompt builder pulls standards from the relevant skill documents so prompts inherit:

- Frontend rules
- Backend rules
- SEO rules
- QA rules
- Content rules
- Planning rules

Skills keep prompts aligned with EPDC standards without forcing every prompt to rewrite those standards from scratch.

## Step 7 - Prompt Builder

The Prompt Builder assembles the final prompt.

Its responsibilities are:

- Consume the assembled context package
- Assemble prompt sections in a stable order
- Preserve traceability back to the specification, tasks, agent, and skills
- Produce a Codex-ready prompt without implementing Codex integration

The reusable prompt structure is defined in `prompt-builder/prompt-schema.md`.

## Step 8 - Codex

Codex is the target consumer of the assembled prompt.

In this repository phase, Codex is only the conceptual destination of the prompt. This layer does not:

- Integrate Codex
- Execute prompts
- Route prompts automatically
- Manage prompt history or memory

It only defines what a future Codex-facing prompt should look like and how it should be assembled.

## Assembly Principles

- The specification remains the source of truth.
- Tasks determine prompt scope.
- Agent definitions determine prompt identity and output expectations.
- Skill definitions determine standards and implementation rules.
- Prompts should be filtered to the assigned work rather than bloated with every available document.
- Prompt structure should stay consistent across domains.

## Example Assembly

For a frontend prompt based on the dentist project:

1. Start with `specs/examples/dentist.md`.
2. Assemble the relevant frontend context package.
3. Load the frontend template and the context package.
4. Assemble the prompt using the schema sections:
   - Role
   - Responsibilities
   - Context
   - Task
   - Standards
   - Constraints
   - Expected Output
5. Produce a Codex-ready prompt that is narrow enough to be actionable and broad enough to include all required implementation context.

## Current Boundary

This prompt architecture does not implement:

- AI systems
- Orchestration
- Memory
- Codex integration
- Website generation

It only defines the prompt assembly contract that future execution systems would use.
