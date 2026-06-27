# Dental Blueprint Data Flow

This Blueprint validates the future flow:

`Astro Starter -> Dental Blueprint -> src/data -> generated website`

Current placeholder implementation details:

- `blueprints/dentist/data/` mirrors the future `src/data/` contract.
- `blueprints/dentist/layouts/DentistLayout.astro` layers dental-specific chrome on top of the starter `BaseLayout.astro`.
- Pages import structured records and pass them into typed component props.
- Components never define clinic identity, doctor profiles, services, locations, or legal text internally.
- Placeholder assets exist only to prove rendering surfaces and can be replaced by project assets later.
