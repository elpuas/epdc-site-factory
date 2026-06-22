# Context Schema

This document defines the canonical EPDC context-package format.

## Canonical Format Decision

The canonical context package format is JSON.

Reason:

- The Context Engine assembles structured objects natively.
- JSON is the simplest deterministic interchange format between the Context Engine, Prompt Builder, and Task Runner.
- The prior markdown representation was useful for human readability, but it created ambiguity between documentation examples and executable artifacts.

Markdown context examples may still exist as illustrative source material. They are not the canonical executable format.

## Canonical Structure

Every context package should follow this JSON shape:

```json
{
  "target": "frontend",
  "projectSpecification": {
    "project": {
      "name": "Harbor Point Dental Studio",
      "slug": "harbor-point-dental-studio",
      "industry": "Family dentistry and cosmetic dental care",
      "sourceSpecification": "specs/examples/dentist.md"
    },
    "planningSummary": {
      "primaryGoal": "Increase new patient appointment requests from families and working professionals in the East Bay area.",
      "scopeSummary": "Plan the implementation work for a static-first Astro marketing site focused on appointment conversion, local dental SEO, treatment-specific service pages, and launch-ready form delivery without a database.",
      "constraints": [
        "Framework must remain Astro-based."
      ]
    },
    "sourceSpecification": "specs/examples/dentist.md",
    "relevantTaskCategory": "frontend"
  },
  "assignedTask": {
    "id": "frontend-core-pages",
    "title": "Plan implementation of Home, About, Services, New Patients, Reviews, and Contact pages",
    "description": "Break down the core site pages that support the main appointment-conversion journey.",
    "category": "frontend",
    "priority": "high",
    "dependencies": [
      "frontend-site-foundation"
    ]
  },
  "agentDefinition": {
    "file": "agents/frontend.md",
    "content": "# Frontend Agent..."
  },
  "requiredSkills": [
    {
      "file": "skills/astro.md",
      "content": "# Astro Skill..."
    }
  ],
  "constraints": [
    "Do not integrate Codex."
  ],
  "expectedOutput": [
    "Frontend implementation guidance"
  ]
}
```

## Field Definitions

### `target`

- Category-oriented context target
- Expected values currently match planner categories such as `frontend`, `backend`, `seo`, `content`, or `qa`

### `projectSpecification`

- Filtered specification data relevant to the assigned task
- Includes project identity, planning summary, source specification, and relevant task category

### `assignedTask`

- One planner task
- Includes `id`, `title`, `description`, `category`, `priority`, and `dependencies`

### `agentDefinition`

- The owning agent contract
- Includes the source file path and full contract content

### `requiredSkills`

- Array of required skill documents
- Includes the source file path and full skill content for each required skill

### `constraints`

- Combined execution boundaries for the work package
- Includes planning constraints and repository-wide phase restrictions

### `expectedOutput`

- Domain-specific output guidance for the downstream consumer

## Assembly Rules

- Start from one planner task.
- Identify the owning category from that task.
- Load the owning agent contract.
- Load the required skill contracts for that agent.
- Filter specification data to the assigned task.
- Preserve traceability through source file references.
- Keep the package deterministic for the same planner input.

## Boundary

The context package is an assembly artifact, not an execution artifact.

It exists to support:

- Prompt building
- Reviewability
- Future handoff packaging

It does not imply:

- Codex execution
- AI calls
- Orchestration
- Memory
