# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--generated-backend-prompt`
- Source prompt: `generated-prompts/generated-backend-prompt.md`
- Category: `backend`
- Prompt mode: `planning`
- Consumer: `Codex`
- Status: `prepared`
- Project ID: `harbor-point-dental-studio`
- Task ID: `backend-form-delivery`
- Execution intent: `plan`
- Target project path: ``
- Allowed files: `[]`
- Expected outputs: `["Backend implementation guidance","Security and data-handling notes","Launch-ready backend constraints","Risk and future-readiness notes"]`
- Implementation goal: Use this assembled context package to address task `backend-form-delivery`: Plan launch-ready form delivery without database storage. Define the backend-facing work needed to deliver appointment request submissions to the practice email inbox while preserving the launch constraint of no database requirement. Produce the outputs listed in the Expected Output section for this task.

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

# Prompt

## Role

You are the Backend Agent for EPDC Site Factory. Own the backend implementation interpretation for approved `backend` tasks, keeping backend scope minimal, specification-driven, and aligned with Supabase standards when backend capability is required.

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

- ID: `backend-form-delivery`
- Title: Plan launch-ready form delivery without database storage
- Category: `backend`
- Priority: `high`
- Description: Define the backend-facing work needed to deliver appointment request submissions to the practice email inbox while preserving the launch constraint of no database requirement.
- Dependencies:
  - `frontend-appointment-form-and-mobile-cta`

## Task

Use this assembled context package to address task `backend-form-delivery`: Plan launch-ready form delivery without database storage. Define the backend-facing work needed to deliver appointment request submissions to the practice email inbox while preserving the launch constraint of no database requirement. Produce the outputs listed in the Expected Output section for this task.

## Standards

- `.agents/skills/supabase/SKILL.md`
  - Backend scope must remain proportional to the specification.
  - Security planning is mandatory whenever Supabase enters scope.
  - Database design must map directly to planner tasks and specification requirements.
  - Form submission handling should stay lightweight unless dashboards or persistent workflows are required.
  - Avoid hidden coupling between frontend structure and backend assumptions.
- `.agents/skills/qa/SKILL.md`
  - Findings must be explicit, reproducible, and traceable to requirements or standards.
  - Conversion-critical issues take precedence over cosmetic refinements.
  - Cross-page consistency is a release requirement for business details and CTAs.
  - Review functional, responsive, accessibility, performance, and SEO concerns before approval.
  - Release readiness must be stated clearly.

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
- Do not integrate Codex.
- Do not call any AI model.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- Backend implementation guidance
- Security and data-handling notes
- Launch-ready backend constraints
- Risk and future-readiness notes
