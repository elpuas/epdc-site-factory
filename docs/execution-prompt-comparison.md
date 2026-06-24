# Execution Prompt Comparison

## Purpose

Sprint 017 compares two controlled runtime validations for the same task:

- Attempt 001 used the planning prompt
- Attempt 002 used the execution prompt

Both attempts were limited to:

- Task: `frontend-site-foundation`
- Project: `projects/harbor-point-dental-studio/`
- Allowed files:
  - `src/layouts/BaseLayout.astro`
  - `src/components/site/Header.astro`
  - `src/components/site/Footer.astro`
  - `src/data/site.ts`

## Attempt Summary

| Dimension | Attempt 001 | Attempt 002 |
| --- | --- | --- |
| Prompt type | Planning prompt | Execution prompt |
| Prompt source | `generated-prompts/tasks/frontend-001.md` | `generated-prompts/execution/tasks/frontend-001.md` |
| Execution package | `execution/packages/generated-prompts/tasks/frontend-001-execution.json` | `execution/packages/generated-prompts/execution/tasks/frontend-001-execution.json` |
| Runtime intent declared | No | Yes: `implement` |
| Target project path declared | No | Yes |
| Allowed files declared | No | Yes |
| Expected outputs declared | No | Yes |
| Review outcome | `retry-recommended` | `approved` |

## Comparison

### Output quality

Attempt 001 produced a reviewable bounded implementation in the Harbor Point shared layout, header, and footer files. Attempt 002 did not require new project-file edits because the existing bounded implementation already satisfied the task goals, but it made that conclusion easier to verify because the execution prompt explicitly declared the implementation target and expected outputs.

Result:

- Attempt 001 proved implementation was possible
- Attempt 002 improved confidence in the result by reducing prompt ambiguity

### Scope control

Attempt 001 required the runtime to interpret a planning prompt as an implementation instruction. That created tension between the task goal and prompt constraints such as `Do not generate websites`.

Attempt 002 declared:

- `executionIntent: implement`
- `targetProjectPath`
- `allowedFiles`
- `implementationGoal`
- `expectedOutputs`

Result:

- Attempt 002 showed materially stronger scope control

### File targeting

Attempt 001 depended on Sprint instructions, repository context, and the Harbor Point factory report to determine which files were safe to change.

Attempt 002 declared the exact allowlist in both the execution prompt and the execution package.

Result:

- Attempt 002 improved file targeting directly
- the runtime no longer had to infer safe file boundaries from unrelated context

### Assumption count

Attempt 001 required several runtime assumptions:

- the Harbor Point project was the intended execution target
- the shared frontend files were the intended implementation surface
- a planning prompt should be treated as implementation guidance
- missing phone data should route to a safe fallback instead of an invalid `tel:` link

Attempt 002 still required some assumptions:

- the current Harbor Point shared frontend files remained the correct validation baseline
- Sprint 017 was measuring prompt-contract effectiveness rather than regenerating the project

Assumptions eliminated by Attempt 002:

- target project path inference
- allowed-file inference
- execution intent inference
- expected-output inference

Result:

- Attempt 002 reduced runtime assumptions

### Runtime compliance

Attempt 001 demonstrated bounded execution, but the prompt contract itself conflicted with runtime implementation because it still carried planning-era constraints.

Attempt 002 aligned the runtime contract with the actual task:

- implementation intent was explicit
- file boundaries were explicit
- target project lineage was explicit

Remaining runtime-compliance gap:

- the execution prompt still inherits planning-oriented wording in the task title, description, and scope summary

Result:

- Attempt 002 improved runtime compliance
- the remaining gap is refinement, not architectural redesign

### Review outcome

Attempt 001 ended in `retry-recommended` because the runtime result was usable but the prompt and package contract were not implementation-ready enough for repeated execution.

Attempt 002 ended in `approved` because the execution prompt system closed the main contract gaps identified in Sprint 015.

## Decision

### Did execution prompts reduce ambiguity?

Yes.

The execution prompt reduced ambiguity by declaring runtime intent, project scope, and allowed files directly instead of relying on repository inference.

### Did execution prompts reduce runtime assumptions?

Yes.

Attempt 002 removed the largest assumptions from Attempt 001: project-target inference, file-target inference, and implementation-intent inference.

### Did execution prompts improve file targeting?

Yes.

The allowlist now travels with the execution artifact, which makes boundary verification simpler and more reliable.

### Did execution prompts improve implementation quality?

Partially.

They improved implementation reliability and reviewability more than the rendered Harbor Point UI itself in this controlled comparison. The project implementation quality was already serviceable in Attempt 001, but Attempt 002 made it easier for the runtime to reach and validate that outcome without avoidable ambiguity.

## Remaining Runtime Issues

- Execution prompts still inherit some planning-oriented language from upstream task definitions.
- Missing business facts in the source specification still limit full contact-detail implementation.
- Review outcomes are now clearer in practice, but the repository still does not enforce a machine-readable review vocabulary beyond the current documented values.

## Conclusion

Sprint 017 validates the Sprint 016 execution prompt system for `frontend-site-foundation`.

The execution-oriented prompt is better than the planning-oriented prompt for bounded runtime work because it reduces ambiguity, lowers assumption count, improves file targeting, and produces a cleaner runtime contract without redesigning the architecture.
