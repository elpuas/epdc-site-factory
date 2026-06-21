# EPDC Site Factory

EPDC Site Factory is a workspace for experimenting with how multiple specialized agents could eventually collaborate to generate production-ready websites using Astro and Supabase from structured project specifications.

This repository does **not** implement agents, LLM integrations, orchestration logic, or memory systems yet. The current phase establishes a clean foundation for future experimentation, iteration, and documentation.

## Project Vision

The long-term vision is to create a repeatable workflow where a project specification can be transformed into a generated website through a set of clearly defined responsibilities, reusable skills, templates, and validation steps.

The repository is designed to support:

- Specification-driven website generation
- Clear separation of agent roles and responsibilities
- Reusable skills and templates
- Experimentation with memory strategies
- Storage of generated project outputs in one workspace

## Current Goals

This initial scaffolding phase focuses on:

- Establishing the repository structure
- Defining documentation for future components
- Creating placeholders for skills, agents, templates, memory, and scripts
- Keeping the project simple, dependency-free, and easy to evolve

This phase only creates the scaffolding.

## Planned Workflow

The intended future workflow is:

`SPEC -> Planner -> Specialized Agents -> QA -> Generated Project`

Conceptually, that means:

1. A specification defines the website requirements.
2. A planner interprets the specification and breaks the work into tasks.
3. Specialized agents handle focused concerns such as frontend, backend, SEO, and quality review.
4. QA validates the generated output against the specification.
5. The final generated project is stored in the workspace.

This workflow is documented here for alignment only. It is not implemented in this phase.

## Repository Structure

```text
epdc-site-factory/
├── README.md
├── AGENTS.md
├── SPEC.md
├── package.json
├── agents/
│   ├── backend.md
│   ├── frontend.md
│   ├── orchestrator.md
│   ├── planner.md
│   ├── qa.md
│   └── seo.md
├── docs/
│   ├── roadmap.md
│   └── vision.md
├── memory/
│   └── README.md
├── projects/
│   └── README.md
├── scripts/
│   ├── create-project.js
│   └── run-orchestrator.js
├── skills/
│   ├── astro.md
│   ├── planner.md
│   ├── qa.md
│   ├── seo.md
│   └── supabase.md
└── templates/
    ├── clinic/
    │   └── README.md
    ├── dentist/
    │   └── README.md
    ├── lawyer/
    │   └── README.md
    └── local-business/
        └── README.md
```

## Design Principles

- Use Node.js as the runtime for future automation scripts
- Use ESM modules consistently
- Prefer markdown documentation before implementation
- Keep all early decisions easy to revise
- Avoid external dependencies until they are justified
- Optimize for experimentation and learning rather than completeness

## Future Roadmap

### Phase 1: Repository Structure

Create the scaffold, documentation, placeholders, and baseline conventions.

### Phase 2: Specifications

Define how website specifications should be authored, validated, versioned, and extended.

### Phase 3: Skills

Document reusable capabilities for planning, Astro generation, Supabase setup, SEO work, and QA.

### Phase 4: Agent Orchestration

Explore how multiple specialized agents may coordinate around a shared specification and execution flow.

### Phase 5: Memory

Design working memory, long-term memory, storage schemas, and retrieval strategies.

### Phase 6: Project Generation

Generate, review, and iterate on real Astro + Supabase projects from specifications.

## What Is Not Implemented

The following are intentionally out of scope for this phase:

- AI agents
- LLM integrations
- Memory systems
- Orchestration logic
- Generated website code
- External service integrations

## Next Steps

Immediate next steps after this scaffolding phase could include:

- Formalizing the specification format
- Expanding the skill definitions
- Defining agent contracts and handoff boundaries
- Creating initial template standards
- Designing validation criteria for generated projects

