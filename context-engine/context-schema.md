# Context Schema

This document defines the reusable structure for EPDC context packages.

## Purpose

A context package is the assembled input bundle for one unit of agent-owned work.

It packages the materials that a future execution layer would need without making that execution layer responsible for gathering raw documents on its own.

## Canonical Structure

Every context package should contain:

```md
# Context Package

## Project Specification

## Assigned Task

## Agent Definition

## Required Skills

## Constraints

## Expected Output
```

## Section Definitions

### Project Specification

Contains the specification material relevant to the assigned task.

This should include:

- Project identity
- Relevant business goal
- Relevant technical requirements
- Relevant page, feature, SEO, content, integration, or acceptance requirements

This section should be filtered to the assigned work rather than duplicating the full specification by default.

### Assigned Task

Contains the specific planner task being assembled.

This should include:

- Task `id`
- Task `title`
- Task `description`
- Task `category`
- Task `priority`
- Task `dependencies`

This section is the anchor that determines which agent and skills are required.

### Agent Definition

Contains the relevant agent contract material for the task.

This should include:

- Agent purpose
- Agent responsibilities
- Agent inputs
- Agent required context
- Agent constraints
- Agent success criteria

This section should come from the corresponding file in `agents/`.

### Required Skills

Contains the implementation standards required by the target agent.

This should include:

- Skill names
- Why each skill is required for the assigned task
- The relevant standards or rules pulled from those skill documents

This section should include only the skills listed by the agent contract.

### Constraints

Contains the non-negotiable boundaries for the assembled work package.

This should combine:

- Specification constraints
- Agent constraints
- Skill constraints that materially affect the task
- Repository-wide phase boundaries such as no AI, no orchestration, no memory, and no website generation

### Expected Output

Contains the output shape that the future execution layer should produce from this context package.

Examples:

- Frontend implementation guidance
- Backend handling notes
- SEO requirements
- QA findings
- Prompt-ready material

## Assembly Rules

- Start from a single assigned task.
- Identify the owning agent from the task category.
- Load the owning agent contract.
- Load the skills required by that agent.
- Pull only the specification material relevant to that task.
- Preserve traceability to the original source files.
- Keep the package narrow enough to be actionable.

## Context Quality Checklist

Before a context package is considered complete, confirm:

- The task is explicit.
- The owning agent is explicit.
- The relevant specification context is present.
- The required skills are present.
- Constraints are preserved.
- The expected output is specific to the assigned work.
