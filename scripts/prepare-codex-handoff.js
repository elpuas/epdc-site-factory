import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const promptDir = path.join(rootDir, "generated-prompts");
const outputDir = path.join(rootDir, "codex-handoff/output");

function walkMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walkMarkdownFiles(absPath);
    }

    if (!entry.name.endsWith(".md")) {
      return [];
    }

    return entry.name === "README.md" ? [] : [absPath];
  });
}

function inferCategory(relativePromptPath) {
  const normalized = relativePromptPath.replace(/\\/g, "/");
  const patterns = ["frontend", "backend", "seo", "qa", "content", "planner"];

  return patterns.find((pattern) => normalized.includes(pattern)) || "unknown";
}

function buildHandoffId(relativePromptPath) {
  return relativePromptPath
    .replace(/\\/g, "/")
    .replace(/\.md$/, "")
    .replace(/[^a-zA-Z0-9/]+/g, "-")
    .replace(/\//g, "--")
    .toLowerCase();
}

function buildHandoffMarkdown(relativePromptPath, promptBody) {
  const category = inferCategory(relativePromptPath);
  const handoffId = buildHandoffId(relativePromptPath);

  return `# Codex Handoff

## Handoff Metadata

- Handoff ID: \`${handoffId}\`
- Source prompt: \`${relativePromptPath}\`
- Category: \`${category}\`
- Consumer: \`Codex\`
- Status: \`prepared\`

## Responsibilities

- Preserve the generated prompt exactly as the executable payload for downstream Codex execution.
- Carry enough metadata for a future execution layer to route the prompt without re-reading the entire repository.
- Keep the handoff deterministic and reviewable before any execution happens.

## Boundaries

- Do not modify the prompt payload during handoff preparation.
- Do not call Codex.
- Do not call any AI model.
- Do not generate websites.
- Do not implement orchestration.
- Do not implement memory.

## Expected Output

- A Codex-ready handoff document containing source metadata and the final prompt payload.

## Prompt Payload

${promptBody.trim()}
`;
}

function main() {
  const promptFiles = walkMarkdownFiles(promptDir);
  fs.mkdirSync(outputDir, { recursive: true });

  const handoffs = [];

  for (const promptFile of promptFiles) {
    const relativePromptPath = path.relative(rootDir, promptFile).replace(/\\/g, "/");
    const promptBody = fs.readFileSync(promptFile, "utf8");
    const handoffMarkdown = buildHandoffMarkdown(relativePromptPath, promptBody);
    const relativeHandoffPath = path
      .join("codex-handoff/output", relativePromptPath.replace(/\.md$/, "-handoff.md"))
      .replace(/\\/g, "/");
    const absoluteHandoffPath = path.join(rootDir, relativeHandoffPath);

    fs.mkdirSync(path.dirname(absoluteHandoffPath), { recursive: true });
    fs.writeFileSync(absoluteHandoffPath, handoffMarkdown);

    handoffs.push({
      sourcePrompt: relativePromptPath,
      category: inferCategory(relativePromptPath),
      handoffFile: relativeHandoffPath,
    });
  }

  const manifest = {
    sourcePromptDirectory: "generated-prompts",
    outputDirectory: "codex-handoff/output",
    handoffsPrepared: handoffs,
  };

  fs.writeFileSync(path.join(outputDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

  console.log("Prepared Codex Handoffs");
  console.log(JSON.stringify(manifest, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
