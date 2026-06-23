# Generated Project Audit

## Scope

This audit reviews the first generated validation project in `projects/harbor-point-dental-studio/`.

The goal is to evaluate:

- Astro structure
- Specification coverage
- Skill effectiveness
- Prompt quality
- Planner usefulness

The audit is evidence-based and tied to the generated project, `FACTORY_REPORT.md`, and the current factory contracts.

## Summary

The first generated project proves that the factory can produce a coherent Astro output from the existing specification and planning artifacts.

It does not yet prove:

- full sitemap generation
- backend completion
- structured-data delivery
- automated prompt-to-code execution

The strongest parts were shared structure, reusable layout, and consistent metadata handling. The weakest parts were missing business-detail inputs, reduced sitemap coverage, and prompts that guided planning well but still left too much implementation translation to a manual pass.

## Astro Structure

### Project structure

What worked:

- The project uses a simple, legible Astro structure under `src/pages/`, `src/layouts/`, `src/components/site/`, and `src/data/`.
- The reduced project surface was appropriate for a first validation run.
- Shared content and metadata were centralized in `src/data/site.ts`.

What was missing:

- No explicit Astro bootstrap contract existed in `skills/astro.md` before generation.
- No documented rule existed for when a reduced validation project is acceptable instead of a full sitemap build.
- No project-level initialization files were generated, so the output proves page structure but not a runnable Astro bootstrap.

### Layout usage

What worked:

- `src/layouts/BaseLayout.astro` correctly centralizes metadata, skip-link behavior, header, footer, and shared global styles.
- The layout boundary keeps page files cleaner and supports consistent SEO basics.

What was missing:

- No documented layout rule previously required a base layout once multiple public pages exist.
- Open Graph basics exist, but there is no structured-data hook or canonical URL pattern yet.

### Component structure

What worked:

- Header and footer were correctly extracted into reusable site-level components.
- The `components/site/` convention is clear and scalable.

What was missing:

- The Astro skill did not previously describe component-folder naming or when to keep content inline versus extracting a component.
- The project still relies on inline section markup for most repeated content structures because the prompts did not require component-boundary decisions strongly enough.

### Data organization

What worked:

- `src/data/site.ts` created one canonical source for shared facts, navigation, metadata, service summaries, and placeholders.
- Shared data prevented business-detail duplication across pages.

What was missing:

- The Astro skill did not previously mention `src/data/` as a first-class folder convention.
- The specification did not provide enough structured business information, so the data file became a TODO container rather than a complete content source.

## Specification Coverage

### Requirements implemented

- Shared layout, header, footer, and navigation
- Home, About, Services, and Contact pages
- Unique metadata for the generated pages
- Reusable site data organization
- Contact-form structure and mobile CTA placeholders
- Local targeting references for Alameda, Oakland, and San Leandro

### Requirements missing

- Teeth Whitening page
- Dental Implants page
- New Patients page
- Reviews page
- FAQ content blocks
- Working form delivery
- Google Analytics integration
- Structured data
- Sitemap output
- Formal QA review outputs

### TODOs that appeared

The generated project surfaced repeated TODOs for:

- local phone number
- street address
- office hours
- parking notes
- lead dentist name
- lead dentist education
- lead dentist experience
- PPO insurance networks
- payment methods
- map embed URL
- office photography and environment details

Assessment:

- These TODOs were appropriate because the project did not invent missing facts.
- Their volume shows the specification lacks required structured business-detail fields needed for first-project generation.

## Skill Evaluation

### Astro

What worked:

- Encouraged reusable layout, shared structure, semantic HTML, and static-first output.
- Supported a clean first project layout.

What was missing:

- No Astro bootstrap guidance for first-project initialization.
- No explicit `src/data/` pattern.
- No layout-rule guidance.
- No component-folder convention.
- No rule for validation-mode reduced generation.

What should be added:

- bootstrap expectations
- folder conventions
- TypeScript data-module guidance
- layout rules
- TODO/reporting guidance for missing spec data

### Content

What worked:

- Helped produce clear CTAs and reassuring tone.
- Supported page-purpose clarity.

What was missing:

- No stronger rule for handling incomplete operational details.
- No explicit fallback policy for testimonials, insurance networks, and payment data when the specification is incomplete.

What should be added:

- guidance for TODO-safe content placeholders
- guidance for minimum operational details needed before page-ready content is considered complete

### SEO

What worked:

- Supported unique metadata and local-targeting language.
- Helped keep the generated pages aligned with search intent.

What was missing:

- No stronger generation requirement for sitemap output in even a reduced build.
- No stronger implementation guidance for structured data in the first project.
- No explicit requirement to track unimplemented SEO deliverables in generation reporting.

What should be added:

- clearer minimal SEO deliverables for validation builds
- guidance for reporting when structured data or sitemap coverage is deferred

### QA

What worked:

- The QA skill remains a good evaluation target for later review.

What was missing:

- The first generated project had no embedded QA checklist artifact.
- The skill did not yet help define what a validation build must prove before it counts as successful generation.

What should be added:

- validation-build QA checkpoints
- review expectations for TODO-heavy outputs

## Prompt Evaluation

### Missing context

- Prompts did not surface enough structured business detail because the specification did not provide it.
- Prompts did not clearly distinguish which missing facts should block generation and which should become TODO markers.
- Frontend prompts did not require a minimum project bootstrap surface such as `src/data/` or site-wide layout rules.

### Redundant context

- Generated prompts repeat broad planning constraints and repository boundaries on every task.
- That repetition is acceptable for safety, but it increases prompt size without adding much implementation specificity.

### Missing implementation details

- No prompt strongly required a first-project bootstrap contract.
- No prompt strongly required reporting which required pages were intentionally excluded from a reduced validation build.
- No prompt strongly required a treatment-page or secondary-page deferral strategy.

### Missing output requirements

- Frontend prompts should require a file-generation map when the goal is project creation.
- Content prompts should require a missing-information register when specifications lack operational business details.
- SEO prompts should require an explicit implemented-vs-deferred list for metadata, sitemap, and structured data.

## Planner Evaluation

### Missing tasks

- No task explicitly covered project bootstrap or Astro initialization for a first generated validation build.
- No task explicitly covered generation reporting as a factory output.
- No task explicitly covered a reduced-build decision when sprint scope intentionally narrows the sitemap.

### Unnecessary tasks

- For a full production plan, the current task set is reasonable.
- For a first validation build, some downstream QA and backend tasks remained out of scope but still useful as traceability markers.

### Incorrect task boundaries

- `frontend-core-pages` was broad enough to support generation, but it did not distinguish between full-sitemap delivery and validation-mode delivery.
- `seo-local-targeting-and-sitemap` combines two concerns that were only partially addressable in the first build, which made deferral reporting more necessary.

## Audit Conclusions

- The project structure is sound for a first factory output.
- The strongest improvement area is not the architecture; it is the quality of implementation-ready details inside the specification and frontend generation guidance.
- The Astro skill needed direct refinement from real output evidence, especially around bootstrap and folder conventions.
- The specification schema needed stronger guidance for operational business details because their absence caused repeated TODOs across multiple pages.
