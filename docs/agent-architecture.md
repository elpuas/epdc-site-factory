# Agent Architecture

This document defines the EPDC Site Factory agent layer that sits between planning and future execution.

## Workflow

`SPEC`

`↓`

`Planner Agent`

`↓`

`Task Breakdown`

`↓`

`Specialized Agents`

`↓`

`Outputs`

## Step 1 - SPEC

The project specification defines what the project requires.

It establishes:

- Business goals
- Technical requirements
- Page requirements
- Features
- SEO expectations
- Content expectations
- Integrations
- Acceptance criteria

The specification is the source of truth for every agent.

## Step 2 - Planner Agent

The Planner Agent reads the specification and produces structured work.

Its role is to:

- Interpret scope and constraints
- Create implementation tasks
- Assign categories, priority, and dependencies
- Ensure every requirement is represented in the plan

The Planner Agent does not implement the project. It defines the work contract for the specialists.

## Step 3 - Task Breakdown

The planner output becomes the shared execution contract.

Tasks are categorized as:

- `frontend`
- `backend`
- `seo`
- `content`
- `qa`

This task layer is important because it creates consistent handoffs instead of letting each specialist re-interpret the raw specification independently.

## Step 4 - Specialized Agents

Specialized agents consume the task breakdown plus the required skill packages for their domain.

### Frontend Agent

- Owns Astro + TypeScript page structure, layouts, components, responsive presentation, and conversion-path visibility.
- Uses `.agents/skills/astro/SKILL.md` plus supporting content and SEO guidance.

### Backend Agent

- Owns backend scope interpretation, form handling, data persistence decisions, integrations, authentication boundaries, and security rules when backend work is required.
- Uses `.agents/skills/supabase/SKILL.md`.

### SEO Agent

- Owns metadata, structured data, local SEO, crawlability, sitemap, robots, and page-intent alignment.
- Uses `.agents/skills/seo/SKILL.md` and supporting content/frontend guidance.

### Content Agent

- Owns page hierarchy, messaging structure, CTA strategy, service-page guidance, local business content, and multilingual consistency.
- Uses `.agents/skills/content/SKILL.md`.

### QA Agent

- Owns validation against the specification, planned tasks, and cross-domain implementation standards.
- Uses `.agents/skills/qa/SKILL.md` and supporting skills as needed for verification.

## Step 5 - Outputs

Each specialized agent produces domain-specific outputs.

Examples:

- The Frontend Agent produces frontend implementation structure.
- The Backend Agent produces backend and security implementation guidance.
- The SEO Agent produces search-readiness requirements.
- The Content Agent produces page-ready content structure guidance.
- The QA Agent produces findings and release-readiness validation.

Taken together, these outputs represent the documented implementation surface for a future generated project.

## Agent Design Principles

- The specification remains the source of truth.
- The planner owns task decomposition.
- Specialized agents own domain interpretation, not project scope.
- Skills provide implementation standards that agents must follow.
- Outputs should be replaceable and composable across future execution workflows.

## Current Boundary

This architecture documentation does not implement:

- AI systems
- Orchestration
- Memory
- Runtime agent execution
- Website generation

It only defines the production-ready contracts that future agents would follow.
