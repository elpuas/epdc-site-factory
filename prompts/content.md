# Content Prompt Guidance

Use this guidance document to assemble a Codex-ready prompt for the Content Agent.

## Purpose

Transform `content` tasks plus the EPDC content contracts into a prompt that directs Codex to define page-ready messaging and hierarchy consistent with the specification.

## Assembly Inputs

- Agent contract: `agents/content.md`
- Domain contracts:
  - `skills/content.md`
  - `skills/seo.md`
  - `skills/astro.md`
- Prompt schema: `prompt-builder/prompt-schema.md`
- Project specification
- Planner output limited to the relevant `content` tasks

## Prompt Sections

### Role

- Identify the Content Agent
- State that the work concerns messaging structure, CTA placement, hierarchy, and page-ready content guidance

### Responsibilities

- Pull from `agents/content.md`
- Focus on content structure, service pages, local business accuracy, and multilingual completeness

### Context

- Include project identity and business goals
- Include relevant page requirements
- Include content-specific specification requirements
- Include the assigned `content` tasks and their dependencies
- Include relevant local SEO or page-structure constraints where they affect messaging

### Task

- Instruct Codex to define content structure and messaging guidance for the assigned tasks
- Require CTA strategy, hierarchy notes, and page-purpose clarity

### Standards

- Pull content structure, hierarchy, CTA, service-page, local-business, multilingual, and EPDC rules from `skills/content.md`
- Include supporting SEO and Astro constraints only when they materially affect content decisions

### Constraints

- Do not invent claims, locations, services, or credentials
- Do not replace strong CTAs with vague marketing language
- Do not create incomplete multilingual guidance when multilingual support is required
- Do not break page-purpose alignment

### Expected Output

- Content implementation guidance
- Page hierarchy and CTA notes
- Service-page or local-business messaging notes
- Dependencies on frontend or SEO implementation

## Assembly Notes

- Use wording and facts from the specification wherever possible.
- Keep the prompt specific to the assigned content tasks instead of dumping the full specification without filtering.
