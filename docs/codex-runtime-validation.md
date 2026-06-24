# Codex Runtime Validation

## What Was Tested

Sprint 015 validated one controlled Codex runtime execution against the existing execution package for `frontend-site-foundation`.

Scope was intentionally limited to:

- one task only: `frontend-site-foundation`
- one project only: `projects/harbor-point-dental-studio/`
- allowed project files only:
  - `src/layouts/BaseLayout.astro`
  - `src/components/site/Header.astro`
  - `src/components/site/Footer.astro`
  - `src/data/site.ts`

The runtime attempt artifacts were written to `runtime/results/frontend-site-foundation/codex/attempt-001/`.

## What Worked

- The runtime lineage was clear enough to trace the task from generated prompt to handoff to execution package.
- Codex could stay inside the bounded project scope and produce reviewable output.
- The result-folder contract worked in practice once the runtime wrote:
  - `runtime-log.json`
  - `review-notes.md`
  - `file-summary.md`
- The existing Harbor Point project gave the runtime a concrete target for a small frontend-only execution task.
- Allowed-file discipline was workable and easy to verify with `git diff --name-only`.

## What Failed

- The task prompt remained planning-oriented instead of execution-oriented.
- The execution package still carried boundaries such as `Do not generate websites`, even though this validation required narrowly scoped code generation.
- The package did not declare project file targets directly, so the runtime had to infer them from `projects/harbor-point-dental-studio/FACTORY_REPORT.md` and the sprint instructions.
- Missing business data in the source specification still blocked full implementation of the mobile click-to-call behavior.

## Was The Runtime Schema Sufficient?

Partially.

The runtime schema was sufficient for:

- attempt identity
- runtime status
- input traceability
- generated-file recording
- review-note storage

The schema is not sufficient yet for reliable code execution at scale because it does not require:

- explicit target project paths
- explicit allowed-file lists
- implementation intent versus planning intent
- a machine-readable review decision vocabulary

## Do Execution Packages Need Changes?

Yes.

Recommended changes:

- Add `projectId` and `targetProjectPath`.
- Add `taskId` directly to the execution package.
- Add `allowedFiles` or `allowedGlobs` for bounded execution tasks.
- Add an `executionIntent` field such as `plan`, `implement`, `review`, or `revise`.
- Remove pre-runtime-only boundaries that conflict with the declared execution intent.

## Do Prompts Need Changes?

Yes.

Recommended changes:

- Rewrite task prompts for runtime execution so they request concrete file output when implementation is the goal.
- Separate planning prompts from implementation prompts instead of reusing one document for both.
- Require expected file targets in frontend implementation tasks.
- State how missing business data should be handled when implementation depends on unavailable facts.

## Recommended Sprint 016 Work

- Add execution-package fields for `projectId`, `taskId`, `targetProjectPath`, and `allowedFiles`.
- Split planning-oriented prompts from runtime implementation prompts.
- Add a small runtime-validation checklist that can be reused across attempts.
- Define a review-outcome enum such as `approved`, `rejected`, and `retry-recommended`.
- Run a second bounded validation after the package contract is updated, ideally on another single frontend task or a QA review task.
