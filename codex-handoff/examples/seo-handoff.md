# Codex Handoff

## Handoff Metadata

- Handoff ID: `generated-prompts--generated-seo-prompt`
- Source prompt: `generated-prompts/generated-seo-prompt.md`
- Category: `seo`
- Consumer: `Codex`
- Status: `prepared`

## Responsibilities

- Preserve the generated SEO prompt as the executable payload for downstream Codex execution.
- Keep the packaged output deterministic and reviewable before any execution boundary is crossed.

## Boundaries

- Do not call Codex.
- Do not call any AI model.
- Do not modify the semantic intent of the prompt payload.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- A Codex-ready SEO handoff document containing source metadata and the final prompt payload.

## Prompt Payload

`generated-prompts/generated-seo-prompt.md` contents would be embedded here by the CLI.
