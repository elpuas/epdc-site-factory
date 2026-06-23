# Project Generation Learnings

## What Worked

- The specification provided enough structure to generate a coherent first Astro project without redefining the architecture.
- The planner output was useful for separating what could be built immediately from what should remain documented as incomplete.
- The Astro, Content, and SEO skills were practical guardrails for reusable layout structure, accessible navigation, and metadata consistency.
- The generated prompt and handoff layers made it easy to see which frontend and content concerns were already expected by the factory.

## What Failed

- The current factory did not generate the project automatically end to end. The project still required a manual implementation pass using the documented contracts.
- The minimum validation build did not cover the full specification sitemap, backend tasks, or structured-data requirements.
- The architecture proved the planning and packaging pipeline, but not an automated execution-to-code path.

## What Was Missing

- Core business identity details needed for publishable pages: dentist name, address, phone, hours, and confirmed parking notes.
- New Patients and Reviews page content details, especially insurance networks, payment methods, and approved social-proof content.
- Treatment-page specifics needed for Teeth Whitening and Dental Implants.
- A defined factory rule for when a sprint should generate a reduced validation build versus the full specification.

## Which Parts Of The Architecture Proved Useful

- `specs/examples/dentist.md` as the single source of truth for the project scope.
- `planner/example-output.json` for mapping implementation work to explicit task IDs.
- `skills/astro.md`, `skills/content.md`, and `skills/seo.md` for implementation standards.
- `generated-prompts/tasks/` as a practical reference for which frontend, content, and SEO concerns mattered most for the first project.
- The reporting layers in `codex-handoff/` and `execution/` as evidence that the factory preserves traceability well even before automated code generation exists.

## Which Parts Need Redesign

- The transition from prompt artifacts to actual project files remains manual and should eventually become a defined execution path.
- The current execution workflow packages prompts and expected results, but it does not yet define how code outputs are written into a project directory.
- The factory needs a clear validation-mode generation contract so partial first-project builds are deliberate rather than ad hoc.
- The project-generation phase will need a stronger content-completeness policy for when TODO markers are acceptable and when generation should stop.
