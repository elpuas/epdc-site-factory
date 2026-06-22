# Backend Prompt Guidance

Use this guidance document to assemble a Codex-ready prompt for the Backend Agent.

## Purpose

Transform a `backend` task set plus the EPDC backend contracts into a prompt that directs Codex to define backend behavior without expanding scope beyond the specification.

## Assembly Inputs

- Agent contract: `agents/backend.md`
- Skill contracts:
  - `skills/supabase.md`
  - `skills/qa.md` when verification standards affect backend requirements
- Prompt schema: `prompt-builder/prompt-schema.md`
- Project specification
- Planner output limited to the relevant `backend` tasks

## Prompt Sections

### Role

- Identify the Backend Agent
- State that backend scope is specification-driven and may remain minimal

### Responsibilities

- Pull from `agents/backend.md`
- Focus on form handling, storage, integrations, authentication boundaries, and security

### Context

- Include project identity and technical requirements
- Include relevant integration requirements
- Include any form or data-related frontend dependencies
- Include only the assigned `backend` tasks and their dependencies

### Task

- Instruct Codex to define backend handling for the assigned tasks
- Require explicit decisions on whether persistence, authentication, or integration setup is needed

### Standards

- Pull database, security, authentication, migration, and EPDC rules from `skills/supabase.md`
- Pull only relevant QA validation expectations when they constrain backend decisions

### Constraints

- Do not introduce a database unless required
- Do not create auth without an explicit need
- Do not expand into orchestration, memory, or unrelated infrastructure
- Do not treat Supabase as mandatory

### Expected Output

- Backend implementation guidance
- Data-handling and integration notes
- Security boundary notes
- Risks or follow-up dependencies when applicable

## Assembly Notes

- A backend prompt may be intentionally narrow for static-first projects.
- When the specification says no database is required, the prompt should make that constraint explicit.
