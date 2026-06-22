# QA Skill

## Purpose

Define the implementation guidance for validating EPDC projects against their specification, planner output, and implementation standards before release.

This skill describes what quality assurance must verify. It does not implement automated testing in this phase.

## Functional Testing

- Confirm every required page from the specification exists.
- Confirm each page includes the required sections and primary calls to action.
- Verify all navigation paths reach the intended destinations.
- Verify forms, click-to-call actions, map embeds, and other user-facing features behave as intended.
- Confirm integrations that are in scope behave correctly at the surface level expected for launch.
- Check that critical trust-building content such as bios, testimonials, hours, and contact details is present where required.

## Responsive Testing

- Review core pages on common mobile, tablet, and desktop widths.
- Confirm that primary calls to action remain visible and usable on smaller screens.
- Ensure navigation, section ordering, and forms remain understandable without layout breakage.
- Verify long service content, FAQ blocks, and testimonials remain readable on narrow viewports.
- Confirm embedded maps, buttons, and form controls remain usable on touch devices.

## Accessibility Testing

- Verify semantic heading hierarchy across all public pages.
- Check keyboard access for navigation, links, buttons, accordions, and forms.
- Confirm form inputs have labels and clear error communication patterns.
- Review color contrast and visible focus states.
- Ensure link and button labels communicate their purpose out of context.
- Confirm reading order remains logical when content stacks responsively.

## Performance Testing

- Review whether the site remains static-first where the specification allows it.
- Check for unnecessary client-side JavaScript or excessive hydration.
- Review image sizing, embed usage, and asset loading decisions.
- Identify obvious layout or asset choices that would undermine a fast marketing-site experience.
- Treat third-party scripts as a performance risk that must be justified by the specification.

## SEO Verification

- Confirm every public page has unique metadata.
- Confirm sitemap coverage matches the published public pages.
- Confirm robots behavior aligns with publishing intent.
- Verify structured data types match the visible business model and page content.
- Verify local SEO signals such as business name, address, phone number, hours, and service area references remain consistent.
- Confirm service and location pages align with the intent described in the specification.

## Release Checklist

- Specification requirements are covered.
- Planner tasks are fully represented in the delivered implementation.
- Core conversion paths are usable on desktop and mobile.
- Contact information is consistent across all required pages.
- Accessibility issues that block basic site use are resolved.
- Performance risks are reviewed and reduced where feasible.
- SEO requirements are present and accurate.
- Non-public or utility pages are not unintentionally exposed.

## EPDC Standards

- QA validates against the specification first, not against personal preference.
- Findings should be explicit, reproducible, and tied to a requirement or standard.
- Conversion-critical issues take precedence over cosmetic refinements.
- Cross-page consistency is a release requirement for business details and CTAs.
- QA should identify both missing requirements and incorrect implementation choices.
- Release readiness requires functional, responsive, accessibility, performance, and SEO review.
