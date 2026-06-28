# Layout Boundary

The Blueprint assumes every generated project starts from the Sprint 018 Astro Starter.

For that reason:

- the starter-owned `src/layouts/BaseLayout.astro` is not duplicated here
- `DentistLayout.astro` is the Blueprint layer that composes dental-specific header, footer, navigation, and persistent WhatsApp access on top of the starter shell

In a future generated project, `DentistLayout.astro` should resolve against the starter-provided `BaseLayout.astro`.
