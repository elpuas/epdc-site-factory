# Supabase Skill

## Purpose

Define the implementation guidance for future backend-oriented EPDC work that uses Supabase.

This skill describes how future projects should approach data, authentication, security, and migrations when the specification requires backend capability. It does not introduce backend scope where the specification says launch is static.

## Responsibilities

- Interpret planner-approved backend tasks and determine whether Supabase is actually required.
- Define how data models support forms, appointments, inquiries, profiles, or business workflows.
- Keep database design aligned with real specification needs rather than speculative features.
- Protect security boundaries for public forms, authenticated workflows, and administrative data.
- Establish migration discipline so schema changes remain reviewable and reversible.

## Database Rules

- Do not add a database if the specification explicitly says launch does not require one.
- Add tables only for data that has a clear business or operational need.
- Prefer simple relational structures over premature normalization.
- Use explicit primary keys, timestamps, and ownership fields where appropriate.
- Keep naming consistent, lowercase, and pluralized for tables unless a strong reason suggests otherwise.
- Separate public-facing submissions from internal administrative data when access expectations differ.
- Document the purpose of each table and how it maps back to the specification.
- Avoid storing duplicated business metadata that should instead live in content or configuration.

## Authentication Rules

- Introduce authentication only when the specification requires protected user or staff workflows.
- Use the least privileged model possible for the use case.
- Distinguish clearly between public visitors, internal staff, and business administrators.
- Keep public marketing sites unauthenticated by default.
- Do not add sign-in flows merely because Supabase is available.
- If authentication is required later, define session behavior, role boundaries, and access-controlled routes before implementation begins.

## Security Rules

- Treat every public form or input surface as untrusted.
- Apply row-level security to any table containing business or user-submitted data.
- Keep service-role usage out of the client whenever possible.
- Limit environment-variable exposure to what the frontend actually needs.
- Protect personally identifiable information and intake details with restrictive access rules.
- Ensure data access policies align with real actor roles, not generic open access.
- Review integrations for data leakage risk before planning broad permissions.

## Migration Rules

- Use explicit, versioned migrations for all schema changes.
- Keep each migration focused on one coherent change set.
- Do not modify production schema manually outside the migration path.
- Document rollback expectations or remediation notes for risky changes.
- Sequence schema changes so dependent application work is not planned before the schema supports it.
- Review naming and policy impacts as part of each migration change.

## EPDC Standards

- Supabase is optional and specification-driven, not a default requirement for every project.
- Backend scope must remain minimal when a project is primarily a marketing site.
- Form submission handling should stay lightweight unless the specification requires dashboards, workflows, or persistent records.
- Security planning is mandatory whenever Supabase enters scope.
- Database design must map directly to planner tasks and specification requirements.
- Avoid hidden coupling between frontend structure and backend assumptions.
- Favor stable, understandable schemas over generalized frameworks.
