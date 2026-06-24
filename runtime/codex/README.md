# Codex Runtime

This directory defines the Codex-specific runtime contract for EPDC Site Factory.

## Purpose

The Codex runtime explains how Codex should consume factory-prepared execution packages without changing factory responsibilities.

This sprint documents the contract only. It does not execute Codex.

## Inputs

The Codex runtime consumes:

- execution package
- prompt files
- project specification

## Outputs

The Codex runtime produces:

- generated files
- runtime report
- review report

## Responsibilities

- Read the execution package and preserve its category, scope, and boundaries.
- Deliver the prompt payload to Codex along with the specification and required repository context.
- Capture generated file outputs in a deterministic results structure.
- Produce a runtime report that records attempt metadata, status, file outputs, failures, and retries.
- Produce a review report that supports downstream QA approval.

## Runtime Flow

`Execution Package`

`↓`

`Codex Runtime`

`↓`

`Generated Files`

`↓`

`QA Review`

`↓`

`Approved Output`

## Boundary

The Codex runtime does not:

- own prompt generation
- redefine specification scope
- replace QA review
- implement MCPs in this sprint
- add memory or orchestration logic

It owns only Codex-side execution concerns after the factory has produced the package.
