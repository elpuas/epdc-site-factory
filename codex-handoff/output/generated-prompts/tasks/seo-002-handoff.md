# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--tasks--seo-002`
- Source prompt: `generated-prompts/tasks/seo-002.md`
- Category: `seo`
- Consumer: `Codex`
- Status: `prepared`

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

You are the SEO Agent for EPDC Site Factory. Own the SEO implementation interpretation for approved `seo` tasks so EPDC sites are technically crawlable, locally relevant, and aligned with search-intent requirements from the specification.

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

- ID: `seo-local-targeting-and-sitemap`
- Title: Plan local SEO targeting and sitemap coverage
- Category: `seo`
- Priority: `high`
- Description: Define the local search targeting for Alameda, Oakland, and San Leandro, along with sitemap coverage for all public pages and rules for excluding future utility pages when needed.
- Dependencies:
  - `frontend-core-pages`
  - `frontend-treatment-pages`

## Task

Use this assembled context package to address task `seo-local-targeting-and-sitemap`: Plan local SEO targeting and sitemap coverage. Define the local search targeting for Alameda, Oakland, and San Leandro, along with sitemap coverage for all public pages and rules for excluding future utility pages when needed. Produce the outputs listed in the Expected Output section for this task.

## Standards

- `skills/seo.md`
  - SEO work must trace directly back to the specification and planner tasks.
  - Local targeting must reflect real business locations or service areas, never fabricated reach.
  - Metadata should be unique on every public page and aligned with on-page content.
  - Structured data must be accurate, visible, and business-specific.
  - Sitemap and robots behavior should be reviewed as part of every launch checklist.
  - SEO should be integrated into page structure and content planning early, not bolted on after implementation.
- `skills/content.md`
  - Content must map directly to the specification and planned page structure.
  - Primary conversion pages should combine clarity, trust, and a visible next step.
  - Service pages should follow repeatable patterns without becoming generic.
  - Local-business content should be specific, accurate, and operationally useful.
  - Multilingual support must be complete wherever promised.
  - Content structure should help both users and future SEO work understand the site quickly.
- `skills/astro.md`
  - The page structure must trace back to the approved specification and planner tasks.
  - Shared CTAs should remain consistent across key conversion pages.
  - Contact information must be rendered consistently across all relevant pages.
  - Service pages should follow a repeatable structure that supports SEO, trust, and conversion.
  - Frontend implementation should stay static-first unless the specification clearly requires richer behavior.
  - TypeScript should be used for predictable data structures such as page metadata, service records, FAQs, testimonials, and structured-data payloads.
  - Maintain a clear separation between content, presentation, and utility logic.
  - Favor simple, auditable architecture over clever abstractions.

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
- Do not integrate Codex.
- Do not call any AI model.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- SEO implementation guidance
- Metadata and page-intent notes
- Local SEO consistency requirements
- Structured-data and dependency notes
