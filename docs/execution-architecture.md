# Execution Architecture

This document defines the Execution Workflow layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Task Runner`

`↓`

`Context Engine`

`↓`

`Prompt Builder`

`↓`

`Codex Handoff`

`↓`

`Execution Workflow`

`↓`

`Results`

`↓`

`Review`

## Inputs

The Execution Workflow consumes:

- Handoff documents from `codex-handoff/output/`
- Handoff manifest metadata
- Generated prompt lineage preserved inside the handoff documents

## Outputs

The Execution Workflow produces:

- Execution packages in `execution/packages/`
- An execution manifest in `execution/packages/manifest.json`
- Declared result locations in `execution/results/`

## Responsibilities

The Execution Workflow is responsible for:

- Reading handoff documents
- Preparing deterministic execution packages
- Preserving prompt payloads unchanged
- Declaring result destinations
- Embedding review requirements for downstream approval

## Boundaries

This layer does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement orchestration
- Implement memory

It only prepares execution packages and defines how future results should flow back for review.

## Results Layer

The Results layer is the future landing zone for execution outputs.

It must preserve:

- Execution-package traceability
- Category alignment
- Structural completeness
- Review status

## Review Layer

The Review layer checks:

- Whether the execution output exists
- Whether it matches the expected result path
- Whether it stays within the assigned scope
- Whether it is complete enough for downstream approval

This review process is documented in `execution/review-process.md` and is intended for future QA-aware workflow consumption.
