# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--generated-backend-prompt`
- Source prompt: `generated-prompts/generated-backend-prompt.md`
- Category: `backend`
- Consumer: `Codex`
- Status: `prepared`

## Responsibilities

- Preserve the generated backend prompt as the executable payload for downstream Codex execution.
- Carry the prompt forward without re-interpreting backend scope at handoff time.

## Boundaries

- Do not call Codex.
- Do not call any AI model.
- Do not modify the semantic intent of the prompt payload.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- A Codex-ready backend handoff document containing source metadata and the final prompt payload.

## Prompt Payload

`generated-prompts/generated-backend-prompt.md` contents would be embedded here by the CLI.
