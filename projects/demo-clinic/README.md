# Demo Clinic

`projects/demo-clinic/` is an assembled EPDC project created by the deterministic Project Assembly Engine.

It combines:

- the `astro-minimal` starter
- the `dentist` blueprint
- placeholder project data derived from `projects/dental-demo/`
- placeholder assets copied into `public/images/`

## Commands

Run all commands from the project root:

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Assembly Notes

- `project.json` is the canonical assembly manifest.
- `blueprints/dentist/` is copied into the generated project so the project remains self-contained.
- `src/data/` owns the placeholder business content and page metadata.
- `src/pages/` owns the route files that compose project data with the copied blueprint.

