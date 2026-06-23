# Review Process

This document defines how future execution output should be reviewed after an execution package has been processed.

## What Must Be Reviewed

- Execution package completeness
- Prompt payload preservation
- Category-to-result alignment
- Structural correctness of the returned result artifact
- Boundary compliance
- Requirement coverage against the originating prompt category

## What Constitutes Success

- The execution result exists at the expected result path
- The result clearly maps back to the execution package and source handoff
- The result stays within the assigned category scope
- The result is reviewable and structurally complete
- No boundary violations are introduced

## What Constitutes Failure

- Missing result artifact
- Missing traceability back to the execution package
- Output that exceeds the assigned prompt scope
- Output that omits key expected deliverables from the prompt payload
- Any evidence of prohibited behavior such as orchestration, memory, or unintended external execution

## How Results Are Approved

1. Confirm the execution package metadata matches the returned result.
2. Confirm the result exists in the declared `execution/results/` structure.
3. Confirm the result matches the expected output shape for its category.
4. Confirm the result preserves repository boundaries.
5. Mark the result as approved, rejected, or needing revision.

## Future QA Consumption

This review process is designed to be consumed later by QA-oriented workflow layers.

That future review layer can use this process to:

- Validate category-specific completeness
- Record approval outcomes
- Escalate failures
- Gate downstream publication or project-assembly steps
