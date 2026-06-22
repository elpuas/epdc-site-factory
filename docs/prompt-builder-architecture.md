# Prompt Builder Architecture

This document defines the first working Prompt Builder layer for EPDC Site Factory.

## Workflow

`SPEC`

`↓`

`Planner`

`↓`

`Tasks`

`↓`

`Context Assembly Engine`

`↓`

`Prompt Builder`

`↓`

`Prompt File`

## Step 1 - SPEC

The specification remains the source of truth for project scope.

It defines:

- Business goals
- Technical requirements
- Pages
- Features
- SEO requirements
- Content requirements
- Integrations
- Acceptance criteria

## Step 2 - Planner

The planner turns specification requirements into structured tasks.

This matters because the prompt builder should not guess what work is in scope. It should build prompts for a concrete planned task category.

## Step 3 - Tasks

Tasks determine:

- Which work unit is being targeted
- Which category owns the work
- Which dependencies matter

Tasks are what keep prompt generation deterministic and bounded.

## Step 4 - Context Assembly Engine

The Context Assembly Engine collects the relevant materials for one unit of work and assembles a context package.

That package includes:

- Project specification summary
- Assigned task
- Agent definition
- Required skills
- Constraints
- Expected output

The prompt builder consumes this package instead of re-reading the raw architecture on every build.

## Step 5 - Prompt Builder

The Prompt Builder is responsible for:

- Reading a context package
- Choosing the correct prompt template
- Assembling the final prompt sections
- Writing a deterministic prompt file

It does not:

- Call Codex
- Call any AI model
- Execute prompts
- Generate websites
- Implement memory

## Step 6 - Prompt File

The output is a Codex-ready prompt file stored in `generated-prompts/`.

This file is:

- Deterministic
- Rebuildable
- Derived from a context package and template
- Separate from execution

## Responsibilities

The Prompt Builder owns:

- Prompt file construction
- Template application
- Deterministic markdown output
- Prompt-file path reporting through the CLI

The Context Assembly Engine owns:

- Context gathering
- Context-package construction
- Source selection for task, agent, and skills

Keeping these responsibilities separate makes it easier to test context quality independently from prompt rendering.

## Boundaries

The Prompt Builder does not implement:

- Codex integration
- AI calls
- Orchestration
- Memory
- Website generation

It only renders prompt files from assembled context.

## Current Limitations

- The working CLI currently targets the example frontend, backend, and SEO context packages.
- The template set exists for QA and Content, but those targets do not yet have generated example outputs in this sprint.
- The builder currently reads the markdown context-package format defined in `context-engine/`.
