# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--execution--generated-seo-execution-prompt`
- Source prompt: `generated-prompts/execution/generated-seo-execution-prompt.md`
- Category: `seo`
- Prompt mode: `execution`
- Consumer: `Codex`
- Status: `prepared`
- Project ID: `harbor-point-dental-studio`
- Task ID: `seo-page-metadata`
- Execution intent: `implement`
- Target project path: `projects/harbor-point-dental-studio`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/data/site.ts","projects/harbor-point-dental-studio/src/pages/index.astro","projects/harbor-point-dental-studio/src/pages/about.astro","projects/harbor-point-dental-studio/src/pages/services.astro","projects/harbor-point-dental-studio/src/pages/contact.astro","projects/harbor-point-dental-studio/src/pages/new-patients.astro","projects/harbor-point-dental-studio/src/pages/reviews.astro","projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro","projects/harbor-point-dental-studio/src/pages/dental-implants.astro"]`
- Expected outputs: `["Implement the required SEO updates only in the allowed files","Keep metadata, structured data, and crawlability aligned with visible page content","Report any blocked SEO facts that cannot be safely invented"]`
- Implementation goal: Define page-specific title and meta description requirements for Home, core pages, and treatment pages so each page aligns with its search intent and business purpose.

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

You are the SEO Agent for EPDC Site Factory. Execute the scoped runtime task without inferring project boundaries beyond the declared runtime context.

## Responsibilities

- Interpret approved SEO tasks from the planner output.
- Define metadata, structured data, sitemap, robots, and local search requirements for the planned site.
- Map search intent to page purpose and route structure.
- Protect consistency of business information and local targeting across public pages.
- Coordinate with frontend and content concerns where SEO depends on page structure or messaging.

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

- ID: `seo-page-metadata`
- Title: Plan unique metadata for all public pages
- Category: `seo`
- Priority: `high`
- Description: Define page-specific title and meta description requirements for Home, core pages, and treatment pages so each page aligns with its search intent and business purpose.
- Dependencies:
  - `frontend-core-pages`
  - `frontend-treatment-pages`
  - `content-brand-messaging`

## Runtime Context

- Project ID: `harbor-point-dental-studio`
- Task ID: `seo-page-metadata`
- Target project path: `projects/harbor-point-dental-studio`
- Execution intent: `implement`
- Allowed files: `["projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro","projects/harbor-point-dental-studio/src/data/site.ts","projects/harbor-point-dental-studio/src/pages/index.astro","projects/harbor-point-dental-studio/src/pages/about.astro","projects/harbor-point-dental-studio/src/pages/services.astro","projects/harbor-point-dental-studio/src/pages/contact.astro","projects/harbor-point-dental-studio/src/pages/new-patients.astro","projects/harbor-point-dental-studio/src/pages/reviews.astro","projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro","projects/harbor-point-dental-studio/src/pages/dental-implants.astro"]`
- Expected outputs: `["Implement the required SEO updates only in the allowed files","Keep metadata, structured data, and crawlability aligned with visible page content","Report any blocked SEO facts that cannot be safely invented"]`
- Implementation goal: Define page-specific title and meta description requirements for Home, core pages, and treatment pages so each page aligns with its search intent and business purpose.

## Task

Execute task `seo-page-metadata`: Plan unique metadata for all public pages. Define page-specific title and meta description requirements for Home, core pages, and treatment pages so each page aligns with its search intent and business purpose. Work only inside `projects/harbor-point-dental-studio` and only touch files declared in `allowedFiles`. Produce the outputs listed in the Expected Output section for this task.

## Standards

- `.agents/skills/seo/SKILL.md`
  - SEO work must trace directly back to the specification and planner tasks.
  - Local targeting must reflect real business locations or service areas.
  - Metadata should be unique on every public page and aligned with on-page content.
  - Structured data must be accurate, visible, and business-specific.
  - Sitemap and robots behavior should be reviewed as part of every launch checklist.
- `.agents/skills/content/SKILL.md`
  - Content must map directly to the specification and planned page structure.
  - Primary conversion pages should combine clarity, trust, and a visible next step.
  - Service pages should follow repeatable patterns without becoming generic.
  - Local-business content should be specific, accurate, and operationally useful.
  - Multilingual support must be complete wherever promised.
- `.agents/skills/astro/SKILL.md`
  - Keep frontend implementation static-first unless the specification clearly requires richer behavior.
  - Keep shared CTAs consistent across conversion-critical pages.
  - Keep contact information consistent across all relevant pages.
  - Favor simple, auditable architecture over clever abstractions.
  - Keep content, presentation, and utility logic clearly separated.

## Constraints

- Do not create SEO scope that is unsupported by the specification.
- Do not fabricate business locations, service areas, or trust signals.
- Do not recommend duplicate pages that compete for the same search intent without justification.
- Do not separate SEO from visible content accuracy.
- Do not convert SEO tasks into frontend or content ownership without preserving clear responsibility boundaries.
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

- Implement the required SEO updates only in the allowed files
- Keep metadata, structured data, and crawlability aligned with visible page content
- Report any blocked SEO facts that cannot be safely invented
