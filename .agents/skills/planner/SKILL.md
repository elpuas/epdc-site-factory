---
name: planner
description: Use when a task involves transforming an EPDC specification into structured implementation tasks, including category assignment, dependency ordering, priority selection, and acceptance-criteria coverage.
---

# Planner Skill

## When To Use

Use this skill when the task involves:

- planning from a project specification
- task decomposition
- category assignment
- dependency ordering
- priority setting
- mapping acceptance criteria into implementation work

Do not use this skill for:

- implementing frontend, backend, SEO, content, or QA deliverables
- redefining the specification itself
- runtime execution or project assembly work

## Required Context

- `AGENTS.md`
- `specs/schema.md`
- `planner/task-schema.json`
- the active project specification
- `agents/planner.md` when the planner agent contract is in play
- `docs/planning-process.md`

## Instructions

1. Treat the specification as the only source of scope truth.
2. Extract business goals, technical constraints, required pages, features, SEO requirements, content requirements, integrations, and acceptance criteria.
3. Convert requirements into discrete implementation tasks with meaningful ownership.
4. Assign each task to exactly one supported category.
5. Keep tasks actionable for a specialized agent without fragmenting them into trivial steps.
6. Order tasks by real dependency, not by convenience.
7. Reflect acceptance criteria explicitly in the combined task set.
8. Add QA tasks only after the work they validate exists in the plan.
9. Avoid inventing backend, memory, orchestration, or runtime scope that the specification does not require.

## Constraints

- Do not generate code.
- Do not invent unsupported scope.
- Do not assume a database or authentication layer when launch is static.
- Do not merge unrelated work types into one oversized task.
- Do not omit acceptance-criteria coverage.

## EPDC Standards

- Tasks must stay traceable to specification requirements.
- Category ownership must stay explicit.
- Dependency order must reflect real implementation sequencing.
- QA coverage must exist for acceptance criteria.
- Planning must stay inside current Factory scope boundaries.

## References

- `agents/planner.md`
- `planner/task-schema.json`
- `docs/planning-process.md`
- `specs/schema.md`
