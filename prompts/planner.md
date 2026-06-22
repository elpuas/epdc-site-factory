# Planner Prompt Guidance

Use this guidance document to assemble a Codex-ready prompt for the Planner Agent.

## Purpose

Transform a project specification into a structured planning prompt that directs Codex to produce planner output aligned with the EPDC contracts.

## Assembly Inputs

- Agent contract: `agents/planner.md`
- Skill contract: `skills/planner.md`
- Prompt schema: `prompt-builder/prompt-schema.md`
- Specification document
- Any repository or project conventions that materially affect planning

## Prompt Sections

### Role

- Identify the Planner Agent
- State that the prompt is documentation-contract driven
- Clarify that the task is planning, not implementation

### Responsibilities

- Pull directly from `agents/planner.md`
- Keep the list focused on planning, task decomposition, prioritization, and dependency mapping

### Context

- Include project identity and business goals from the specification
- Include technical constraints from the specification
- Include page, feature, SEO, content, integration, and acceptance requirements
- Include the planner output schema requirements from `planner/task-schema.json`

### Task

- Instruct Codex to create a planning output
- Require category-correct tasks
- Require priorities and dependencies
- Require complete coverage of the specification

### Standards

- Pull planning rules from `skills/planner.md`
- Emphasize traceability, task actionability, and acceptance-criteria coverage

### Constraints

- Do not implement AI
- Do not orchestrate agents
- Do not define memory behavior
- Do not generate website code
- Do not invent unsupported scope

### Expected Output

- JSON-shaped planner output
- Tasks with `id`, `title`, `description`, `category`, `priority`, and `dependencies`
- Optional planning notes only when constraints materially affect the plan

## Assembly Notes

- Prefer quoting or paraphrasing concrete specification requirements over generic planning language.
- Keep the prompt tied to the planner schema contract.
- Do not include skills or agent material that is irrelevant to planning output.
