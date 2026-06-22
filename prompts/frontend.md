# Frontend Prompt Template

Use this template to assemble a Codex-ready prompt for the Frontend Agent.

## Purpose

Transform a `frontend` task set plus the EPDC frontend contracts into a prompt that directs Codex to make frontend implementation decisions consistent with the specification.

## Assembly Inputs

- Agent contract: `agents/frontend.md`
- Skill contracts:
  - `skills/astro.md`
  - `skills/content.md`
  - `skills/seo.md`
- Prompt schema: `prompt-builder/prompt-schema.md`
- Project specification
- Planner output limited to the relevant `frontend` tasks

## Prompt Sections

### Role

- Identify the Frontend Agent
- State that the work concerns Astro + TypeScript frontend implementation

### Responsibilities

- Pull from `agents/frontend.md`
- Focus on pages, layouts, components, shared sections, and conversion-path visibility

### Context

- Include project identity and primary goal
- Include relevant page requirements
- Include related content and SEO requirements that influence structure
- Include only the `frontend` tasks being executed
- Include task dependencies that affect sequencing

### Task

- Instruct Codex to define the frontend implementation approach for the assigned tasks
- Require route mapping, page structure, shared component decisions, and CTA placement

### Standards

- Pull Astro structure, accessibility, performance, and EPDC standards from `skills/astro.md`
- Pull relevant hierarchy and CTA rules from `skills/content.md`
- Pull relevant metadata-aware or page-intent constraints from `skills/seo.md`

### Constraints

- Do not invent pages or features
- Do not absorb backend ownership
- Do not assume client interactivity without a requirement
- Do not break specification alignment

### Expected Output

- Frontend implementation guidance
- Route and page mapping
- Shared-structure and component notes
- Dependency notes for content, backend, or SEO coordination

## Assembly Notes

- Include only the context needed for the assigned frontend tasks.
- Keep the prompt concrete by embedding task IDs and titles from planner output.
- Treat the specification as the source of truth whenever a task summary is less detailed than the spec.
