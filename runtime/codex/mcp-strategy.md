# Codex MCP Strategy

This document defines the preferred MCP strategy for the Codex runtime layer.

## Purpose

MCPs belong to the runtime layer because they are execution-time knowledge and tool connections used by a selected runtime while it is performing work from an execution package.

They do not belong to the factory layer because the factory must remain deterministic, portable, and independent from any one runtime's live tool surface.

This sprint documents the strategy only. It does not implement MCPs.

## Preferred MCPs

### Astro Docs MCP

Purpose:

- Provide trusted Astro framework documentation during frontend execution work.

When it should be used:

- When a runtime is implementing or validating Astro pages, layouts, routing, metadata, components, or framework conventions.

Why it belongs to the runtime layer:

- It is an execution-time knowledge source used while generating or reviewing Astro implementation output.
- The runtime may or may not need it depending on the assigned task category and current code context.

Why it does not belong to the factory layer:

- The factory defines prompt and skill contracts ahead of execution and should not depend on live documentation access.
- Keeping Astro documentation out of the factory preserves deterministic package generation.

### Supabase MCP

Purpose:

- Provide trusted Supabase documentation and API guidance during backend-oriented execution work.

When it should be used:

- When a runtime is handling specification-approved backend tasks involving database design, auth boundaries, policies, migrations, or form delivery patterns.

Why it belongs to the runtime layer:

- It supports live execution-time implementation and verification for backend work only when backend scope actually exists.
- Runtime access can be turned on or off per execution environment and per task.

Why it does not belong to the factory layer:

- The factory should describe backend scope through specs, skills, tasks, and prompts without requiring live Supabase access.
- Factory portability would be reduced if package creation depended on a runtime-specific documentation connection.

### GitHub MCP

Purpose:

- Provide repository, pull request, issue, and code-hosting context during runtime execution and review workflows.

When it should be used:

- When runtime work needs repository context, change review support, PR metadata, or issue-linked implementation context.

Why it belongs to the runtime layer:

- It is an execution and review-time integration tied to the environment where the runtime is operating.
- Different runtimes or projects may enable different repository integrations without changing the factory.

Why it does not belong to the factory layer:

- The factory's job is to generate the work package, not to depend on a live repository integration while building it.
- Keeping GitHub access outside the factory prevents planning and prompt generation from becoming tool-coupled.

## MCP Principles

- MCP use must be optional and runtime-scoped.
- MCP access should be driven by task need, not enabled by default for every package.
- Runtime logs should record when MCPs were used during an attempt.
- MCP configuration should live with runtime configuration, not with planner, skills, or execution-package generation.

## Boundary

This strategy does not implement:

- MCP clients
- authentication
- runtime tool wiring
- live knowledge retrieval

It defines only where MCP responsibilities belong.
