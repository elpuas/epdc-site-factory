# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--generated-frontend-prompt`
- Source prompt: `generated-prompts/generated-frontend-prompt.md`
- Category: `frontend`
- Consumer: `Codex`
- Status: `prepared`

## Responsibilities

- Preserve the generated frontend prompt as the executable payload for downstream Codex execution.
- Attach enough metadata for a future execution surface to route the payload without reassembling project context.

## Boundaries

- Do not call Codex.
- Do not call any AI model.
- Do not modify the semantic intent of the prompt payload.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- A Codex-ready frontend handoff document containing source metadata and the final prompt payload.

## Prompt Payload

`generated-prompts/generated-frontend-prompt.md` contents would be embedded here by the CLI.
