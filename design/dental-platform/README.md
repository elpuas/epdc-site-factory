# EPDC Dental Platform

## Purpose

The EPDC Dental Platform is the first reusable commercial vertical designed on top of EPDC Site Factory.

Its role is to capture the architectural patterns, data structures, content organization, conversion strategy, and SEO assumptions needed to support future dental websites without generating a website in this sprint.

## Why It Exists

The Factory now has:

- specification contracts
- planning and execution preparation
- agent definitions
- a canonical Astro starter

The next step is to define a reusable vertical that can sit between the generic starter and a project-specific runtime output.

The Dental Platform exists to provide that missing layer.

## Why Dental Clinics Were Selected First

Dental clinics are a strong first vertical because they combine:

- clear local SEO demand
- repeatable trust signals
- strong appointment-driven conversion behavior
- recurring service-page patterns
- common location and doctor-profile needs

That makes the industry specific enough to support reuse, but still broad enough to validate how a future EPDC blueprint should work.

## Why Costa Rica

This platform focuses on Costa Rica because the source research summary reflects manually observed commercial patterns from Costa Rican dental websites.

That gives EPDC one concrete market to model first instead of trying to generalize across incompatible regions, regulations, and customer expectations.

The strongest market-specific signals identified in the research were:

- WhatsApp as a primary action path
- visible phone contact
- strong service and specialty presentation
- doctor and trust content near conversion points
- location clarity for branches or clinics
- blog content as a local SEO support channel

## Research Basis

This design is based on a provided market research summary created through manual review of high-ranking and paid dental websites in Costa Rica.

This package:

- does not claim direct site access by this repository work
- does not cite competitor names
- does not reproduce competitor copy
- uses the research only to extract reusable architectural patterns

## How This Becomes A Future Dental Blueprint

This sprint does not implement a blueprint yet.

Instead, it defines the knowledge that a future `blueprints/dentist/` package should encode:

- reusable page structure
- reusable component contracts
- reusable data modules under `src/data/`
- reusable content expectations
- repeatable dental conversion logic
- repeatable dental SEO architecture

The intended future flow is:

```text
Business Specification
↓
Factory Preparation Layers
↓
Astro Starter
↓
Dental Blueprint
↓
Project Data + Generated Content
↓
Runtime Implementation
↓
Generated Dental Website
```

## Scope Boundary

This directory is documentation only.

It does not:

- implement Astro components
- generate project files
- create runtime logic
- introduce production code

It defines the architecture the Factory will need before those later steps become safe and repeatable.
