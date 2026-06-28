# Dental Demo

`projects/dental-demo/` is a placeholder validation project for Sprint 021.

It extends the EPDC Astro starter and consumes the shared Dental Blueprint as a presentation layer. All visible clinic content lives in `src/data/`.

## Commands

Run all commands from the project root:

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Validation Focus

- `src/pages/` owns the project routes.
- `src/data/` owns all placeholder business content and page metadata.
- `blueprints/dentist/` remains reusable and contentless.
- `public/images/` contains generic placeholder assets only.

## Notes

- The clinic, doctors, testimonials, addresses, and contact details are fictional.
- This project is for local validation only and is not wired to runtime, deployment, or live integrations.
