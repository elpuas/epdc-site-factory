# Context Architecture

This document defines the Context Assembly Engine layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Tasks`

`↓`

`Agent`

`↓`

`Skill`

`↓`

`Context Assembly Engine`

`↓`

`Context Package`

## Step 1 - SPEC

The project specification remains the source of truth.

It provides:

- Business goals
- Technical requirements
- Page requirements
- Features
- SEO requirements
- Content requirements
- Integrations
- Acceptance criteria

The context engine does not replace the specification. It packages the relevant parts of it.

## Step 2 - Planner

The planning layer turns the specification into structured tasks.

This matters because the context engine should not guess scope from the raw specification alone. It should assemble context for a concrete unit of planned work.

## Step 3 - Tasks

The task layer tells the context engine:

- Which work unit is being assembled
- Which category owns that work
- Which dependencies or upstream tasks matter

Tasks are the entrypoint for context selection.

## Step 4 - Agent

The agent contract tells the context engine:

- Which agent owns the task
- Which inputs the agent expects
- Which context must be loaded
- Which outputs and constraints apply

This keeps assembled context aligned with the documented execution role.

## Step 5 - Skill

The skill layer tells the context engine which implementation standards belong in the package.

By loading only the skills required by the target agent, the engine avoids overloading the package with irrelevant rules.

## Step 6 - Context Assembly Engine

The Context Assembly Engine gathers:

- Relevant specification material
- One assigned task
- The owning agent definition
- The required skill definitions
- Shared constraints
- Expected output guidance

It then assembles these into one context package.

The current repository implementation is a simulation layer only. The script:

- Reads local files
- Selects a predefined task target
- Builds a structured package
- Prints `Assembled Context`

## Step 7 - Context Package

The context package is the reusable output of the engine.

It exists so future execution layers do not need to:

- Re-read unrelated files
- Infer ownership repeatedly
- Guess which skills apply
- Reconstruct constraints from scratch

The context package is intentionally separate from Codex because these are different responsibilities.

## Why This Layer Is Separate From Codex

The Context Assembly Engine should exist independently because:

- Context gathering is not the same as prompt execution.
- The repository needs a reusable, inspectable package before any future model execution.
- Context packages can be tested and reviewed without AI dependencies.
- Separating assembly from execution keeps the architecture modular and auditable.

If this layer were merged directly into a future Codex integration, it would be harder to:

- Validate context quality
- Reuse context across different execution strategies
- Keep the non-AI parts of the system deterministic

## Current Boundary

This layer does not implement:

- Codex integration
- AI calls
- Orchestration
- Memory
- Website generation

It only assembles context packages from the existing documentation contracts.
