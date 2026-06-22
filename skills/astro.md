# Astro Skill

## Purpose

Define the implementation guidance for building EPDC sites with Astro and TypeScript.

This skill documents how future frontend work should structure pages, layouts, components, and client-side behavior without generating code in this phase.

## Responsibilities

- Translate planner-approved frontend tasks into Astro page and component structure.
- Organize routes, layouts, shared UI sections, and reusable content blocks.
- Keep implementation aligned with the project specification and EPDC standards.
- Protect performance, accessibility, and maintainability from the start.
- Limit client-side JavaScript to what is necessary for the required user experience.

## Project Structure

Assume an Astro + TypeScript project with a structure close to:

```text
src/
├── components/
├── content/
├── layouts/
├── pages/
├── styles/
└── utils/
```

Recommended responsibilities:

- `src/pages/`
  - Public routes that map directly to planned pages.
  - Keep route structure readable and aligned with the specification sitemap.

- `src/layouts/`
  - Shared page shells such as site layout, landing layout, or legal layout.
  - Centralize repeated page wrappers rather than duplicating structure across pages.

- `src/components/`
  - Reusable UI blocks such as hero sections, CTA banners, testimonial blocks, FAQ sections, service cards, and contact blocks.
  - Prefer composable building blocks over page-specific duplication.

- `src/content/`
  - Structured content sources when the project benefits from separating content from presentation.
  - Use only when it improves maintainability for repeated service pages, FAQs, or provider bios.

- `src/styles/`
  - Global styles, tokens, and shared visual rules.
  - Keep style foundations centralized instead of scattering one-off rules.

- `src/utils/`
  - Formatting helpers, metadata builders, and structured-data helpers.
  - Avoid mixing rendering logic with data-shaping logic.

## Component Rules

- Build reusable components only when repetition is real, not hypothetical.
- Keep components narrowly scoped to one clear responsibility.
- Prefer explicit props over implicit shared state.
- Do not create deep component nesting without a clear structural reason.
- Separate layout components from content components when their concerns differ.
- Avoid a component library mentality for small brochure sites; build only what the specification requires.
- Name components by business or UI meaning, such as `ServiceCard`, `TestimonialList`, or `ContactSection`.
- Keep page-specific composition in page files and shared UI behavior in components.

## Performance Rules

- Default to Astro server-rendered or static output with minimal hydration.
- Hydrate components only when interaction is required by the specification.
- Keep images optimized and appropriately sized for their layout context.
- Avoid shipping large client bundles for simple marketing-site interactions.
- Prefer CSS and native browser behavior before adding client-side logic.
- Keep fonts, scripts, and embeds limited to assets that support a clear business goal.
- Treat third-party integrations as performance liabilities unless they are explicitly required.

## Accessibility Rules

- Use semantic HTML first.
- Preserve heading hierarchy so pages remain scannable and screen-reader friendly.
- Ensure all interactive controls have clear accessible names.
- Maintain visible focus states for navigation and form interactions.
- Provide sufficient color contrast for text, buttons, links, and status messages.
- Use descriptive link and button labels instead of vague text such as `Learn more`.
- Ensure forms include labels, helpful error messaging, and clear submission affordances.
- Design page sections so content order remains logical on mobile and assistive technologies.

## Astro Best Practices

- Use Astro pages for route-level composition and keep shared wrappers in layouts.
- Prefer content-driven page assembly over hardcoded repetition across route files.
- Use islands only when interactivity provides clear value, such as FAQ toggles or complex form behavior.
- Keep TypeScript types close to the data shapes they protect.
- Centralize repeated metadata-building patterns.
- Keep route files easy to scan by delegating repeated section markup into components.
- Avoid mixing speculative backend concerns into frontend structure unless the specification requires a real integration point.

## EPDC Standards

- The page structure must trace back to the approved specification and planner tasks.
- Shared CTAs should remain consistent across key conversion pages.
- Contact information must be rendered consistently across all relevant pages.
- Service pages should follow a repeatable structure that supports SEO, trust, and conversion.
- Frontend implementation should stay static-first unless the specification clearly requires richer behavior.
- TypeScript should be used for predictable data structures such as page metadata, service records, FAQs, testimonials, and structured-data payloads.
- Maintain a clear separation between content, presentation, and utility logic.
- Favor simple, auditable architecture over clever abstractions.
