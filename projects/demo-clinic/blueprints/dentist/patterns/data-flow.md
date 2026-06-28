# Dental Blueprint Data Flow

This Blueprint now validates the active flow:

`Astro Starter -> Dental Blueprint -> src/data -> generated website`

Implementation details:

- `blueprints/dentist/layouts/DentistLayout.astro` layers dental-specific chrome on top of the starter `BaseLayout.astro`.
- `blueprints/dentist/types.ts` defines the shared contract between the Blueprint and generated projects.
- Blueprint pages receive structured records through props and pass them into typed component props.
- Generated project routes select and shape the final page data from `src/data/`.
- Components never define clinic identity, doctor profiles, services, locations, or legal text internally.
- Placeholder assets exist only to prove rendering surfaces and can be replaced by project assets later.
