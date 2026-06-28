# Project Assembly Engine

## Purpose

`assembler/` defines the first deterministic Project Assembly Engine for EPDC Site Factory.

The Assembly Engine does not generate code with AI and does not make architectural decisions.

It assembles a runnable project from stable Factory-owned assets:

- a Starter
- a Blueprint
- project data
- placeholder assets

## Assembly Philosophy

The Factory is shifting from file generation toward reusable asset composition.

That means the Assembly Engine is responsible for combining already-approved assets into a project without changing their roles:

- the Starter owns the Astro foundation
- the Blueprint owns reusable presentation structure
- the project data owns business-facing placeholder content
- placeholder assets fill image surfaces until a real project replaces them

The engine follows deterministic rules only. It must not improvise, infer runtime behavior, or redesign the assembled project.

## Folder Responsibilities

- `starters/`: canonical Astro foundations
- `blueprints/`: reusable vertical presentation systems
- `projects/`: assembled runnable projects and validation examples
- `scripts/assemble-project.js`: the executable CLI entrypoint for assembly
- `assembler/assembly-schema.md`: the documented input/output contract for assembly

## Assembly Order

1. Validate that the requested Starter and Blueprint exist.
2. Create `projects/<project-name>/`.
3. Copy the Starter into the new project.
4. Copy the Blueprint into the generated project so the output remains self-contained.
5. Copy the canonical placeholder project data and route files for the Blueprint.
6. Copy placeholder assets into `public/images/`.
7. Generate `project.json`.
8. Validate the required folders, layouts, pages, assets, and manifest.
9. Print an assembly summary.

## Error Handling

The engine fails early when deterministic prerequisites are missing.

Current hard-stop conditions include:

- missing Starter
- missing Blueprint
- missing placeholder template project
- existing target project directory
- missing required folders after copy
- missing required layouts, pages, assets, or manifest

The engine should stop before runtime concerns begin. Install, build, and dev validation remain separate verification steps after assembly completes.

## Current Scope

Sprint 022 introduces the first assembly implementation only.

It intentionally excludes:

- runtime execution
- Codex integration
- prompt generation
- execution packages
- business logic
- AI-driven content or code generation

## Future Runtime Boundary

The generated project is intended to become the handoff surface for a future Runtime, but the Runtime is not part of the assembler.

Current flow:

`Starter + Blueprint + Project Data + Placeholder Assets -> Assembly Engine -> Runnable Project`

Future flow:

`Specification -> Planning -> Execution Package -> Assembly Engine -> Generated Project -> Runtime`
