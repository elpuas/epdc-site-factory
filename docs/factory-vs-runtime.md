# Factory vs Runtime

This document defines the ownership boundary between the factory, the runtime, and external knowledge sources.

## Factory

The factory owns deterministic pre-execution preparation.

Factory owns:

- specifications
- repo-scoped Codex skills
- agents
- planning
- context
- prompt generation

The factory also owns:

- codex handoff preparation
- execution-package preparation
- documentation-first contracts for future execution

The factory does not own:

- execution
- runtime configuration
- retries
- runtime logs
- live knowledge access

## Runtime

The runtime owns execution-time behavior after a package has been produced.

Runtime owns:

- execution
- MCP configuration
- runtime logs
- retry logic
- output validation

The runtime also owns:

- prompt delivery to a chosen AI surface
- generated file capture
- runtime reporting
- review report preparation

The runtime does not own:

- specification authoring
- planning logic
- skill definitions and package discovery
- prompt generation rules
- factory architecture redesign

## Knowledge Sources

Knowledge sources own the reference material or APIs that a runtime may consult during execution.

Knowledge sources own:

- Astro documentation
- Supabase documentation
- GitHub APIs
- vendor documentation

Knowledge sources do not own:

- project scope
- prompt design
- execution state
- approval workflow

## Responsibility Summary

- The factory defines what should be done.
- The runtime defines how a selected execution surface performs the work.
- Knowledge sources provide external reference material or APIs during execution.

## Boundary Rule

If a concern must remain deterministic across all projects and runtimes, it belongs to the factory.

If a concern exists only when a specific execution surface is actively performing work, it belongs to the runtime.
