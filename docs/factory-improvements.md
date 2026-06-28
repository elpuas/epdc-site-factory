# Factory Improvements

## Improvements Identified

- Add bootstrap and folder-convention guidance to the Astro domain contract.
- Add explicit `src/data/` guidance for shared project facts and metadata.
- Add validation-build guidance for reduced page sets.
- Add schema guidance for business-critical operational details that blocked the first project.
- Add stronger prompt requirements for file-generation maps and implemented-vs-deferred reporting.
- Add QA guidance for TODO-heavy validation outputs.

## Improvements Implemented

- Updated `skills/astro.md` with:
  - project bootstrap guidance
  - folder conventions
  - TypeScript data-module guidance
  - layout rules
  - reporting guidance for missing specification data
- Updated `specs/schema.md` to require more explicit content-side business details when relevant:
  - phone number
  - full street address
  - office hours
  - parking guidance
  - office email
  - lead professional name
  - credentials or education
  - years of experience
  - insurance and payment details
  - map-embed or location-link requirements
  - approved testimonial guidance
- Added `docs/generated-project-audit.md` to make the findings reusable across future sprints.
- Refactored `blueprints/dentist/` so the Blueprint owns presentation contracts and project `src/data/` owns business content.
- Added `projects/dental-demo/` to validate the Astro Starter -> Dental Blueprint -> Project Data architecture with a full placeholder site.

## Improvements Deferred

- Prompt refinements for file-generation maps and deferral reporting
- QA domain-contract updates for validation-build review rules
- Planner refinements for bootstrap and validation-mode task boundaries
- Any execution-layer redesign for turning prompt artifacts directly into project files
- Starter-level structured-data injection from `src/data/schema.ts`

Deferred items were not implemented in this sprint because the sprint goal was limited to auditing the first generated project and refining skills or schema only where directly supported by evidence.
