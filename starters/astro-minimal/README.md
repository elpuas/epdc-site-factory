# EPDC Astro Minimal Starter

This starter is the canonical Astro foundation for future EPDC-generated projects.

It stays close to the current official Astro starter while removing demo content and adding the minimum stable structure the Factory needs for predictable project generation.

## Commands

Run all commands from the starter root:

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

## EPDC Conventions Implemented

- TypeScript-first configuration with Astro's strict template.
- Static-first Astro foundation with no client hydration by default.
- Predictable `src/components`, `src/layouts`, `src/pages`, `src/data`, and `src/styles` directories.
- Shared site configuration separated from rendering through `src/data/site.ts`.
- One base layout that future generated pages can extend consistently.

## Default vs EPDC Starter

Current official baseline:

- `npm create astro@latest` currently defaults to the `basics` template.
- The official starter includes demo assets, a `Welcome.astro` component, a `Layout.astro` file, and starter favicons.

EPDC changes:

- Demo assets and welcome content are removed so generated projects start from a neutral foundation.
- `src/data/site.ts` is added so shared site facts have a canonical typed location from the first generated page.
- `src/styles/global.css` is added so shared styles have a stable entrypoint.
- `Layout.astro` becomes `BaseLayout.astro` to make its role explicit once future blueprints add more pages and layouts.
- `public/` is kept, but no default icons are shipped because generated project assets should be project-specific.

See `../../docs/astro-starter.md` for the full architectural rationale.
