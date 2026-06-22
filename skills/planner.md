# Planner Skill

## Purpose

Define how a future planner transforms an EPDC project specification into a structured, reviewable implementation task list.

This skill is documentation only. It does not implement AI behavior, orchestration, memory, or code generation.

## Responsibilities

- Read a specification that follows the canonical schema in `specs/schema.md`.
- Extract project scope, business goals, technical constraints, required pages, features, SEO requirements, content requirements, integrations, and acceptance criteria.
- Convert specification requirements into discrete implementation tasks.
- Assign each task to one of the supported task categories.
- Order work by dependency and delivery priority.
- Preserve traceability from specification requirements to planned tasks.
- Produce output that can later be consumed by specialized agents.

## Inputs

The Planner Skill expects:

- A project specification written with the canonical EPDC schema
- Repository conventions from `README.md` and `AGENTS.md`
- Any relevant template context when a future project references one

Minimum required specification inputs:

- Project identity
- Business goals
- Technical requirements
- Pages
- Features
- SEO requirements
- Content requirements
- Integrations
- Acceptance criteria

## Outputs

The Planner Skill produces:

- A structured planning output in JSON
- A task list with explicit categories, priorities, and dependencies
- Planning assumptions or notes when the specification includes constraints that affect task order

The canonical output shape is defined in `planner/task-schema.json`.

## Planning Rules

### 1. Plan From the Specification Only

- Use the specification as the source of truth.
- Do not invent product scope that is not implied by the specification.
- If the specification explicitly excludes something, the planner must not create implementation tasks for it.

### 2. Translate Requirements Into Work Units

- Convert each required page into one or more implementation tasks when appropriate.
- Convert each required feature into an implementation task.
- Convert SEO, content, and QA expectations into their own tasks rather than burying them inside frontend tasks.
- Convert integration requirements into explicit tasks even when they are lightweight.

### 3. Keep Tasks Actionable

Every task should be:

- Focused on one meaningful implementation outcome
- Small enough for a specialized agent to own
- Large enough to avoid trivial fragmentation
- Written as an instruction, not as a vague theme

### 4. Preserve Dependency Order

- Foundational tasks should come before dependent tasks.
- Page-building tasks can depend on shared content structure or shared frontend foundation tasks.
- SEO tasks can depend on page structure when page-specific metadata is required.
- QA tasks should depend on the tasks they validate.

### 5. Reflect Acceptance Criteria

- The plan must cover all acceptance criteria from the specification.
- If an acceptance criterion spans multiple concerns, create multiple tasks rather than collapsing the work.
- QA tasks should map directly to completion conditions described by the specification.

### 6. Stay Within Current Phase Boundaries

The planner must not create tasks for:

- AI implementation
- Orchestration logic
- Memory systems
- Generated code execution
- Unrequested backend systems when the specification says launch is static

## Task Categories

All tasks must use one of these categories:

### frontend

Use for:

- Site structure
- Page implementation
- Navigation
- Layout sections
- Forms and user-facing interaction patterns
- Shared UI components

### backend

Use for:

- Form handling design
- Data or integration readiness
- Delivery mechanisms tied to submissions or external services
- Future-compatible backend scaffolding requirements that are explicitly called for in the specification

If the specification says no database is required for launch, backend tasks should remain minimal and focused only on explicitly required behaviors such as form delivery.

### seo

Use for:

- Metadata planning
- Sitemap planning
- Structured data requirements
- Local SEO targeting
- Page-to-keyword mapping and search-intent coverage

### content

Use for:

- Page copy requirements
- Professional bios
- FAQs
- Testimonials
- Tone and messaging alignment
- Bilingual or localized content preparation

### qa

Use for:

- Acceptance criteria validation
- Cross-page consistency review
- Mobile and desktop checks
- Metadata and SEO verification
- Requirement coverage review

## Prioritization Rules

Use these priorities:

- `high`
- `medium`
- `low`

Assign priority using these rules:

### High

- Required to satisfy the primary business goal
- Blocks multiple downstream tasks
- Needed for core page delivery
- Needed for conversion actions such as appointment or consultation requests
- Needed to satisfy explicit acceptance criteria

### Medium

- Important for completeness but not a foundational blocker
- Supports secondary goals
- Improves usability, trust, or discoverability after core structure exists

### Low

- Helpful but not blocking for an initial complete implementation
- Refinement-oriented work that can follow core delivery

The planner should prefer fewer `high` tasks with real importance over marking nearly everything as high priority.

## Constraints

- Do not generate code.
- Do not define orchestration flow.
- Do not design memory behavior.
- Do not create tasks for unspecified features.
- Do not merge distinct work types into a single oversized task.
- Do not create QA tasks until the plan includes the work being validated.
- Do not assume a database when the specification explicitly says launch does not require one.

## Task Design Guidelines

Each task should contain:

- `id`
- `title`
- `description`
- `category`
- `priority`
- `dependencies`

Task IDs should be:

- Stable within a single plan
- Lowercase
- Hyphen-separated
- Category-prefixed when practical

Example:

- `frontend-home-page`
- `seo-local-metadata`
- `qa-acceptance-review`

Dependencies should list task IDs that must be completed first.

## How Specification Sections Map to Tasks

### Project and Business Goals

- Influence prioritization
- Clarify which pages or features are primary conversion surfaces

### Technical Requirements

- Define framework assumptions
- Limit backend scope
- Shape deployment-related planning constraints

### Pages

- Drive page implementation tasks
- Reveal shared section patterns and navigation needs

### Features

- Drive functional tasks such as forms, maps, FAQ behavior, or click-to-call actions

### SEO

- Drive metadata, sitemap, structured data, and local targeting tasks

### Content

- Drive copywriting, bios, testimonials, and tone-alignment tasks

### Integrations

- Drive external-service setup tasks such as analytics, form delivery, or map embeds

### Acceptance Criteria

- Drive QA tasks and coverage checks

## Output Expectations

A complete planning output should:

- Identify the specification being planned
- Summarize the planning scope
- Include all required implementation tasks
- Show realistic dependencies
- Cover frontend, backend, seo, content, and qa where the specification requires them
- Stay aligned with the current non-implementation phase of the repository

## Reference Files

- Task schema: `planner/task-schema.json`
- Example planner output: `planner/example-output.json`
- Workflow overview: `docs/planning-process.md`
