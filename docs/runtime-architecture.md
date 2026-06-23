# Runtime Architecture

This document defines where the runtime layer sits relative to the existing EPDC Site Factory pipeline.

## Flow

`Factory`

`↓`

`Execution Package`

`↓`

`Runtime`

`↓`

`Knowledge Sources`

`↓`

`AI Agent`

## Layer Responsibilities

### Factory

The factory owns deterministic preparation.

It is responsible for:

- specifications
- planning
- skills
- agent contracts
- context assembly
- prompt generation
- handoff preparation
- execution-package preparation

The factory stops after producing a reviewable execution package.

### Execution Package

The execution package is the handoff contract between the factory and a runtime.

It preserves:

- prompt payload
- category scope
- review requirements
- expected result path
- non-negotiable boundaries

### Runtime

The runtime owns execution-time behavior for a chosen external surface.

It is responsible for:

- package consumption
- prompt delivery
- generated file capture
- runtime logs
- failure handling
- retry handling
- runtime reporting
- review handoff

The runtime does not redefine the package. It executes within it.

### Knowledge Sources

Knowledge sources are external references or tools used by a runtime during execution.

Examples:

- Astro documentation
- Supabase documentation
- GitHub APIs
- vendor documentation

They support execution-time decisions but are not part of deterministic factory preparation.

### AI Agent

The AI agent is the model surface selected by the runtime.

It receives:

- runtime-delivered prompt input
- specification context
- any runtime-approved knowledge access

It returns generated output that the runtime must capture and route into review.

## Boundary Decisions

- The factory remains documentation-first and deterministic.
- The runtime begins only after an execution package exists.
- Knowledge integrations belong to runtime configuration, not factory generation.
- QA review remains downstream of runtime output, even when the runtime produces its own review report.

## Why This Split Matters

- It keeps factory outputs portable across multiple runtimes.
- It prevents prompt generation from becoming coupled to one execution tool.
- It allows runtime-specific configuration, logs, retries, and tool access without redesigning the factory.
