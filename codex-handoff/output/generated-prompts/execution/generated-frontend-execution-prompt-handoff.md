# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--execution--generated-frontend-execution-prompt`
- Source prompt: `generated-prompts/execution/generated-frontend-execution-prompt.md`
- Category: `frontend`
- Prompt mode: `execution`
- Consumer: `Codex`
- Status: `prepared`
- Project ID: `harbor-point-dental-studio`
- Task ID: `frontend-core-pages`
- Execution intent: `implement`
- Target project path: `projects/harbor-point-dental-studio`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/components/site/Header.astro","projects/harbor-point-dental-studio/src/components/site/Footer.astro","projects/harbor-point-dental-studio/src/data/site.ts","projects/harbor-point-dental-studio/src/pages/index.astro","projects/harbor-point-dental-studio/src/pages/about.astro","projects/harbor-point-dental-studio/src/pages/services.astro","projects/harbor-point-dental-studio/src/pages/contact.astro","projects/harbor-point-dental-studio/src/pages/new-patients.astro","projects/harbor-point-dental-studio/src/pages/reviews.astro"]`
- Expected outputs: `["Implement the requested frontend changes only in the allowed files","Keep Astro structure, conversion visibility, and content consistency intact","Report any unresolved missing-business-data blockers as explicit TODOs or notes"]`
- Implementation goal: Break down the core site pages that support the main appointment-conversion journey, ensuring each page includes the required sections and primary calls to action from the specification.

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

You are the Frontend Agent for EPDC Site Factory. Execute the scoped runtime task without inferring project boundaries beyond the declared runtime context.

## Responsibilities

- Interpret approved frontend tasks from the planner output.
- Define route structure, page composition, layouts, shared sections, and reusable UI components.
- Keep implementation aligned with content requirements, CTA strategy, and conversion paths.
- Maintain responsive, accessible, and performant frontend standards.
- Coordinate with SEO and Content concerns where page structure depends on them.

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

- ID: `frontend-core-pages`
- Title: Plan implementation of Home, About, Services, New Patients, Reviews, and Contact pages
- Category: `frontend`
- Priority: `high`
- Description: Break down the core site pages that support the main appointment-conversion journey, ensuring each page includes the required sections and primary calls to action from the specification.
- Dependencies:
  - `frontend-site-foundation`
  - `content-brand-messaging`
  - `content-dentist-bio-and-practice-details`

## Runtime Context

- Project ID: `harbor-point-dental-studio`
- Task ID: `frontend-core-pages`
- Target project path: `projects/harbor-point-dental-studio`
- Execution intent: `implement`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/components/site/Header.astro","projects/harbor-point-dental-studio/src/components/site/Footer.astro","projects/harbor-point-dental-studio/src/data/site.ts","projects/harbor-point-dental-studio/src/pages/index.astro","projects/harbor-point-dental-studio/src/pages/about.astro","projects/harbor-point-dental-studio/src/pages/services.astro","projects/harbor-point-dental-studio/src/pages/contact.astro","projects/harbor-point-dental-studio/src/pages/new-patients.astro","projects/harbor-point-dental-studio/src/pages/reviews.astro"]`
- Expected outputs: `["Implement the requested frontend changes only in the allowed files","Keep Astro structure, conversion visibility, and content consistency intact","Report any unresolved missing-business-data blockers as explicit TODOs or notes"]`
- Implementation goal: Break down the core site pages that support the main appointment-conversion journey, ensuring each page includes the required sections and primary calls to action from the specification.

## Task

Execute task `frontend-core-pages`: Plan implementation of Home, About, Services, New Patients, Reviews, and Contact pages. Break down the core site pages that support the main appointment-conversion journey, ensuring each page includes the required sections and primary calls to action from the specification. Work only inside `projects/harbor-point-dental-studio` and only touch files declared in `allowedFiles`. Produce the outputs listed in the Expected Output section for this task.

## Standards

- `.agents/skills/astro/SKILL.md`
  - Keep frontend implementation static-first unless the specification clearly requires richer behavior.
  - Keep shared CTAs consistent across conversion-critical pages.
  - Keep contact information consistent across all relevant pages.
  - Favor simple, auditable architecture over clever abstractions.
  - Keep content, presentation, and utility logic clearly separated.
- `.agents/skills/content/SKILL.md`
  - Content must map directly to the specification and planned page structure.
  - Primary conversion pages should combine clarity, trust, and a visible next step.
  - Service pages should follow repeatable patterns without becoming generic.
  - Local-business content should be specific, accurate, and operationally useful.
  - Multilingual support must be complete wherever promised.
- `.agents/skills/seo/SKILL.md`
  - SEO work must trace directly back to the specification and planner tasks.
  - Local targeting must reflect real business locations or service areas.
  - Metadata should be unique on every public page and aligned with on-page content.
  - Structured data must be accurate, visible, and business-specific.
  - Sitemap and robots behavior should be reviewed as part of every launch checklist.

## Constraints

- Do not create or change project scope outside approved frontend tasks.
- Do not invent pages or interactive features not supported by the specification.
- Do not assume client-side interactivity when Astro static-first patterns are sufficient.
- Do not absorb backend responsibilities such as data modeling or security design.
- Do not ignore accessibility, performance, or CTA visibility requirements.
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

- Implement the requested frontend changes only in the allowed files
- Keep Astro structure, conversion visibility, and content consistency intact
- Report any unresolved missing-business-data blockers as explicit TODOs or notes
