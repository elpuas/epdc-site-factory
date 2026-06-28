# Agent Registry

This document is the central registry for the EPDC Site Factory agent contracts.

These agents are documentation-defined only. They do not implement AI behavior, orchestration logic, memory, or website generation in this phase.

## Architecture Summary

The intended flow is:

`SPEC -> Planner Agent -> Task Breakdown -> Specialized Agents -> Outputs`

The specification defines scope, the planner creates structured work, and specialized agents apply Codex skills to produce implementation outputs.

## Registered Agents

### Planner Agent

- Purpose: Transform a project specification into structured implementation tasks.
- Primary domain: Planning and task decomposition.
- Detailed definition: [agents/planner.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/planner.md)

### Frontend Agent

- Purpose: Define how approved frontend tasks become Astro + TypeScript implementation output.
- Primary domain: Pages, layouts, components, and frontend structure.
- Detailed definition: [agents/frontend.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/frontend.md)

### Backend Agent

- Purpose: Define how approved backend tasks become Supabase-aligned backend design and integration output.
- Primary domain: Data, forms, integrations, security, and backend scope control.
- Detailed definition: [agents/backend.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/backend.md)

### SEO Agent

- Purpose: Define how approved SEO tasks become technical and local search implementation output.
- Primary domain: Metadata, structured data, crawlability, and local discoverability.
- Detailed definition: [agents/seo.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/seo.md)

### QA Agent

- Purpose: Validate delivered output against the specification, planner tasks, and implementation standards.
- Primary domain: Functional quality, responsive behavior, accessibility, performance, and SEO verification.
- Detailed definition: [agents/qa.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/qa.md)

### Content Agent

- Purpose: Define how approved content tasks become page-ready messaging and content structure.
- Primary domain: Page hierarchy, conversion messaging, service-page content, local business content, and multilingual consistency.
- Detailed definition: [agents/content.md](/Users/alfredonavas/REACT/EPDC%20Site%20Factory/agents/content.md)

## Registry Rules

- Agents must operate from the project specification and planner task output.
- Agents must load their required context before producing outputs.
- Agents must use the skill packages assigned to their domain.
- Agents must not expand scope beyond the specification or planner-approved tasks.
- Agents remain separable so implementation knowledge can evolve without changing the specification format.
