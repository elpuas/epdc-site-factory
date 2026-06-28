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

`Domain Contract`

`↓`

`Context Assembly Engine`

`↓`

`JSON Context Package`

## Step 1 - SPEC

The specification remains the source of truth.

## Step 2 - Planner

The planner turns the specification into structured tasks so context can be assembled for one concrete unit of work.

## Step 3 - Tasks

The task tells the Context Engine:

- Which work unit is being assembled
- Which category owns it
- Which dependencies matter

## Step 4 - Agent

The agent contract tells the Context Engine which role owns the task and what outputs and constraints apply.

## Step 5 - Domain Contract

The domain-contract layer tells the Context Engine which implementation standards belong in the package.

## Step 6 - Context Assembly Engine

The Context Engine gathers:

- Relevant specification material
- One assigned task
- The owning agent definition
- The required domain-contract definitions
- Shared constraints
- Expected output guidance

## Step 7 - JSON Context Package

The output is a canonical JSON context package.

This format exists so downstream layers can:

- Consume one stable structured artifact
- Avoid re-reading raw files repeatedly
- Avoid rebuilding task ownership logic
- Preserve deterministic behavior

## Why JSON Is Canonical

JSON is the chosen format because:

- It matches the structured nature of the assembled data
- It is easy for scripts to consume directly
- It removes the previous ambiguity between readable markdown examples and executable context artifacts

## Current Boundary

This layer does not implement:

- Codex integration
- AI calls
- Prompt rendering
- Orchestration
- Memory
- Website generation
