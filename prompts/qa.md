# QA Prompt Guidance

Use this guidance document to assemble a Codex-ready prompt for the QA Agent.

## Purpose

Transform `qa` tasks plus the EPDC QA contracts into a prompt that directs Codex to validate implementation output against the specification and implementation standards.

## Assembly Inputs

- Agent contract: `agents/qa.md`
- Skill contracts:
  - `skills/qa.md`
  - `skills/astro.md`
  - `skills/seo.md`
  - `skills/content.md`
- Prompt schema: `prompt-builder/prompt-schema.md`
- Project specification
- Planner output limited to the relevant `qa` tasks
- Any implementation outputs or release candidate materials under review

## Prompt Sections

### Role

- Identify the QA Agent
- State that the work is validation-oriented, not scope creation

### Responsibilities

- Pull from `agents/qa.md`
- Focus on requirement coverage, findings, release readiness, and rework guidance

### Context

- Include project identity
- Include acceptance criteria and validation-relevant specification requirements
- Include the assigned `qa` tasks and their dependencies
- Include the implementation outputs being reviewed

### Task

- Instruct Codex to review the relevant outputs against the specification and standards
- Require structured findings and release-readiness judgment

### Standards

- Pull functional, responsive, accessibility, performance, SEO, and release-checklist rules from `skills/qa.md`
- Include supporting frontend, SEO, and content standards when they affect verification

### Constraints

- Do not validate against taste
- Do not redefine project scope
- Do not ignore critical conversion or accessibility failures
- Do not collapse distinct issues into vague feedback

### Expected Output

- Structured findings
- Release-readiness summary
- Rework recommendations
- Coverage notes mapped to the relevant requirements

## Assembly Notes

- QA prompts should include the implementation artifact under review, not only abstract tasks.
- Acceptance criteria from the specification should appear explicitly in the prompt context.
