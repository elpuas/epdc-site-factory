# Astro Domain Contract

## Purpose

Define the implementation guidance for building EPDC sites with Astro and TypeScript.

This contract documents how future frontend work should structure pages, layouts, components, project bootstrap, and shared data patterns without generating code in this phase.

## Responsibilities

- Translate planner-approved frontend tasks into Astro page and component structure.
- Organize routes, layouts, shared UI sections, and reusable content blocks.
- Keep implementation aligned with the project specification and EPDC standards.
- Protect performance, accessibility, and maintainability from the start.
- Limit client-side JavaScript to what is necessary for the required user experience.

## Project Bootstrap

When a project is being created from the factory for the first time, establish the minimum Astro structure before page implementation begins.

Minimum bootstrap expectations:

- Create `src/pages/` for public routes.
- Create `src/layouts/` for shared page shells.
- Create `src/components/` for reusable UI blocks.
- Create `src/data/` when specification-backed site content must be shared across pages.
- Create `public/` for static assets or placeholders even when the first validation build does not include production assets yet.

For validation-mode project generation, a reduced page set is acceptable only when the sprint or task explicitly narrows scope. In that case:

- Document the reduced page set explicitly.
- Keep required-but-unbuilt pages visible in reports rather than silently omitting them.
- Use TODO markers for missing business details instead of inventing them.

## Project Structure

Assume an Astro + TypeScript project with a structure close to:

```text
src/
├── components/
├── layouts/
├── pages/
├── data/
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
  - Group shared site-wide chrome under a stable namespace such as `src/components/site/`.

- `src/data/`
  - Structured site content shared across pages, such as navigation, metadata, service summaries, office details, and TODO-backed placeholders for missing specification fields.
  - Use typed exports so layout and page files consume one canonical content source.

- `src/styles/`
  - Global styles, tokens, and shared visual rules.
  - Keep style foundations centralized instead of scattering one-off rules.

- `src/utils/`
  - Formatting helpers, metadata builders, and structured-data helpers.
  - Avoid mixing rendering logic with data-shaping logic.

## Folder Conventions

- Put route files directly in `src/pages/` when the project is small and the route map is easy to scan.
- Use nested component folders only when a group has a clear shared purpose, such as `site/` for header and footer chrome.
- Keep shared page data in one source file when the initial project is small; split into multiple data modules only after repetition becomes real.
- Avoid creating empty framework folders that the generated project does not yet use.
- If a page exists only as a future requirement, track it in the factory report rather than creating an empty route file.

## TypeScript Configuration

- Use `.ts` data modules for structured site content whenever multiple pages share metadata, navigation, office details, or service summaries.
- Add explicit types for reusable structures such as navigation items, service summaries, metadata records, and office-contact records.
- Keep TypeScript close to the content shape it protects.
- Prefer one canonical exported site-data object over ad hoc per-page constants when the same facts must stay consistent across multiple routes.

## Component Rules

- Build reusable components only when repetition is real, not hypothetical.
- Keep components narrowly scoped to one clear responsibility.
- Prefer explicit props over implicit shared state.
- Do not create deep component nesting without a clear structural reason.
- Separate layout components from content components when their concerns differ.
- Avoid a component library mentality for small brochure sites; build only what the specification requires.
- Name components by business or UI meaning, such as `ServiceCard`, `TestimonialList`, or `ContactSection`.
- Keep page-specific composition in page files and shared UI behavior in components.
- Shared navigation, header, and footer components should not hardcode business details that also appear on page content; pull those facts from shared data sources instead.
- If a component would exist only once and carries mostly page-specific meaning, keep it inline in the page until repetition is proven.

## Layout Rules

- Create one base layout as soon as multiple public pages need consistent metadata, skip-link behavior, header, and footer chrome.
- Keep metadata props explicit at the layout boundary.
- Use the base layout to enforce shared accessibility requirements such as skip links and document language.
- Keep layout styling global only when it truly defines shared page tokens or base structural utilities.

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
- When business-critical details are missing from the specification, preserve the missing state with explicit TODO markers and surface the gap in generation reporting.
- Ensure page generation produces auditable evidence of what was intentionally omitted from the first validation build.

## EPDC Standards

- The page structure must trace back to the approved specification and planner tasks.
- Shared CTAs should remain consistent across key conversion pages.
- Contact information must be rendered consistently across all relevant pages.
- Service pages should follow a repeatable structure that supports SEO, trust, and conversion.
- Frontend implementation should stay static-first unless the specification clearly requires richer behavior.
- TypeScript should be used for predictable data structures such as page metadata, service records, FAQs, testimonials, and structured-data payloads.
- Maintain a clear separation between content, presentation, and utility logic.
- Favor simple, auditable architecture over clever abstractions.
