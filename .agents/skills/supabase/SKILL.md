---
name: supabase
description: Use when a task involves EPDC backend planning or execution for projects that may require Supabase, including form handling, data storage decisions, authentication boundaries, security rules, and migration discipline.
---

# Supabase Skill

## When To Use

Use this skill when the task involves:

- backend form delivery
- persistent data decisions
- Supabase-backed integrations
- authentication or role boundaries
- row-level security or data exposure concerns
- migration planning for backend scope

Do not use this skill for:

- purely static frontend work
- content or SEO planning without backend implications
- adding a database just because a backend tool exists

## Required Context

- `AGENTS.md`
- `specs/schema.md`
- the active project specification
- the assigned planner task
- `agents/backend.md` when the backend agent contract is in play
- frontend task context when public forms or integrations cross the boundary

## Instructions

1. Determine whether backend behavior is actually required by the specification.
2. Keep launch scope minimal when the project is primarily static.
3. Add tables or persistent records only for real business needs.
4. Define authentication only when protected workflows are explicit requirements.
5. Treat every public form or input as untrusted.
6. Keep service-role usage off the client when possible.
7. Use explicit migrations for schema changes.
8. Document how backend decisions map back to specification requirements.
9. Surface blocked integrations or missing configuration details explicitly.

## Constraints

- Do not add a database when launch is static.
- Do not add authentication without a real requirement.
- Do not broaden backend scope beyond the assigned task.
- Do not expose sensitive data through loose client permissions.
- Do not treat Supabase as mandatory for every EPDC project.

## EPDC Standards

- Backend scope must remain proportional to the specification.
- Security planning is mandatory whenever Supabase enters scope.
- Database design must map directly to planner tasks and specification requirements.
- Form submission handling should stay lightweight unless dashboards or persistent workflows are required.
- Avoid hidden coupling between frontend structure and backend assumptions.

## References

- `agents/backend.md`
- `specs/schema.md`
- `docs/planning-process.md`
- `prompts/backend.md`
