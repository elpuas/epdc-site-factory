# SEO Prompt Guidance

Use this guidance document to assemble a Codex-ready prompt for the SEO Agent.

## Purpose

Transform `seo` tasks plus the EPDC SEO contracts into a prompt that directs Codex to define search-readiness requirements tied to the project specification.

## Assembly Inputs

- Agent contract: `agents/seo.md`
- Skill contracts:
  - `skills/seo.md`
  - `skills/content.md`
  - `skills/astro.md` when page structure affects SEO output
- Prompt schema: `prompt-builder/prompt-schema.md`
- Project specification
- Planner output limited to the relevant `seo` tasks

## Prompt Sections

### Role

- Identify the SEO Agent
- State that the work covers technical SEO, local SEO, metadata, and structured data

### Responsibilities

- Pull from `agents/seo.md`
- Focus on metadata, page intent, local discoverability, structured data, sitemap, and robots

### Context

- Include project identity and local targeting requirements
- Include relevant page and service requirements
- Include related content constraints that affect visible accuracy
- Include only the assigned `seo` tasks and their dependencies

### Task

- Instruct Codex to define SEO implementation requirements for the assigned tasks
- Require page-aware and business-aware recommendations

### Standards

- Pull technical SEO, local SEO, metadata, OpenGraph, structured-data, sitemap, robots, and EPDC rules from `skills/seo.md`
- Pull relevant content and structure rules where SEO depends on them

### Constraints

- Do not fabricate service areas or trust signals
- Do not create duplicate-intent pages without justification
- Do not separate SEO from visible page accuracy
- Do not invent SEO scope that the specification does not support

### Expected Output

- SEO implementation guidance
- Metadata and page-intent notes
- Local SEO consistency requirements
- Structured-data, sitemap, and robots requirements

## Assembly Notes

- Include page names from the specification and related task IDs from planner output.
- Keep the prompt tied to the actual business geography and service scope.
