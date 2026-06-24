# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--execution--tasks--backend-002`
- Source prompt: `generated-prompts/execution/tasks/backend-002.md`
- Category: `backend`
- Prompt mode: `execution`
- Consumer: `Codex`
- Status: `prepared`
- Project ID: `harbor-point-dental-studio`
- Task ID: `backend-analytics-integration`
- Execution intent: `implement`
- Target project path: `projects/harbor-point-dental-studio`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/data/site.ts"]`
- Expected outputs: `["Implement only the backend-facing files required by the task","Preserve the no-database launch constraint unless the specification explicitly changes","Report any blocked integrations or missing configuration details for review"]`
- Implementation goal: Define the backend or configuration work needed to support Google Analytics tracking for launch without expanding scope into unrelated data systems.

## Responsibilities

- Preserve the generated prompt exactly as the executable payload for downstream Codex execution.
- Carry enough metadata for a future execution layer to route the prompt without re-reading the entire repository.
- Keep the handoff deterministic and reviewable before any execution happens.

## Boundaries

- Do not modify the prompt payload during handoff preparation.
- Do not call Codex.
- Do not call any AI model.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- A Codex-ready handoff document containing source metadata and the final prompt payload.

## Prompt Payload

# Execution Prompt

## Role

You are the Backend Agent for EPDC Site Factory. Execute the scoped runtime task without inferring project boundaries beyond the declared runtime context.

## Responsibilities

- Interpret approved backend tasks from the planner output.
- Determine whether backend behavior is required at all for the project.
- Define backend handling for forms, submission delivery, data storage, integrations, authentication, and security when those items are in scope.
- Keep database and policy decisions traceable to explicit project requirements.
- Coordinate with frontend tasks where public forms or integrations depend on backend behavior.

## Context

### Project Specification

- Project: Harbor Point Dental Studio
- Slug: `harbor-point-dental-studio`
- Industry: Family dentistry and cosmetic dental care
- Source specification: `specs/examples/dentist.md`
- Primary goal: Increase new patient appointment requests from families and working professionals in the East Bay area.
- Scope summary: Plan the implementation work for a static-first Astro marketing site focused on appointment conversion, local dental SEO, treatment-specific service pages, and launch-ready form delivery without a database.
- Planning constraints:
  - Framework must remain Astro-based.
  - Launch does not require a database.
  - Deployment is static-first with room for future form handling enhancements.
  - Planning must cover local SEO for Alameda, Oakland, and San Leandro.
  - Planning must include consistent contact details and conversion actions across the site.

### Assigned Task

- ID: `backend-analytics-integration`
- Title: Plan analytics integration requirements
- Category: `backend`
- Priority: `medium`
- Description: Define the backend or configuration work needed to support Google Analytics tracking for launch without expanding scope into unrelated data systems.
- Dependencies:
  - `frontend-site-foundation`

## Runtime Context

- Project ID: `harbor-point-dental-studio`
- Task ID: `backend-analytics-integration`
- Target project path: `projects/harbor-point-dental-studio`
- Execution intent: `implement`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/data/site.ts"]`
- Expected outputs: `["Implement only the backend-facing files required by the task","Preserve the no-database launch constraint unless the specification explicitly changes","Report any blocked integrations or missing configuration details for review"]`
- Implementation goal: Define the backend or configuration work needed to support Google Analytics tracking for launch without expanding scope into unrelated data systems.

## Task

Execute task `backend-analytics-integration`: Plan analytics integration requirements. Define the backend or configuration work needed to support Google Analytics tracking for launch without expanding scope into unrelated data systems. Work only inside `projects/harbor-point-dental-studio` and only touch files declared in `allowedFiles`. Produce the outputs listed in the Expected Output section for this task.

## Standards

- `skills/supabase.md`
  - Supabase is optional and specification-driven, not a default requirement for every project.
  - Backend scope must remain minimal when a project is primarily a marketing site.
  - Form submission handling should stay lightweight unless the specification requires dashboards, workflows, or persistent records.
  - Security planning is mandatory whenever Supabase enters scope.
  - Database design must map directly to planner tasks and specification requirements.
  - Avoid hidden coupling between frontend structure and backend assumptions.
  - Favor stable, understandable schemas over generalized frameworks.
- `skills/qa.md`
  - QA validates against the specification first, not against personal preference.
  - Findings should be explicit, reproducible, and tied to a requirement or standard.
  - Conversion-critical issues take precedence over cosmetic refinements.
  - Cross-page consistency is a release requirement for business details and CTAs.
  - QA should identify both missing requirements and incorrect implementation choices.
  - Release readiness requires functional, responsive, accessibility, performance, and SEO review.

## Constraints

- Do not introduce a database when the specification says launch does not require one.
- Do not create authentication flows without an explicit requirement.
- Do not define orchestration, memory, or unrelated platform infrastructure.
- Do not broaden backend scope beyond the approved tasks.
- Do not treat Supabase as mandatory for every project.
- Framework must remain Astro-based.
- Launch does not require a database.
- Deployment is static-first with room for future form handling enhancements.
- Planning must cover local SEO for Alameda, Oakland, and San Leandro.
- Planning must include consistent contact details and conversion actions across the site.
- Operate only within the declared target project path and allowed files.
- Do not broaden scope beyond the declared implementation goal or review goal.
- Do not invent missing business facts; leave TODO-safe placeholders or review notes instead.
- Do not redesign the factory.
- Do not add memory.
- Do not add MCP execution.
- Do not remove planning prompts.

## Expected Output

- Implement only the backend-facing files required by the task
- Preserve the no-database launch constraint unless the specification explicitly changes
- Report any blocked integrations or missing configuration details for review
