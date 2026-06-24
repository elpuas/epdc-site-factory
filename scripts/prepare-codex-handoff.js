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

function inferPromptMode(relativePromptPath) {
  return relativePromptPath.replace(/\\/g, "/").includes("/execution/") ? "execution" : "planning";
}

function buildHandoffId(relativePromptPath) {
  return relativePromptPath
    .replace(/\\/g, "/")
    .replace(/\.md$/, "")
    .replace(/[^a-zA-Z0-9/]+/g, "-")
    .replace(/\//g, "--")
    .toLowerCase();
}

function splitSections(markdown) {
  const sections = {};
  const lines = markdown.split("\n");
  let currentSection = null;
  let buffer = [];

  for (const line of lines) {
    const headingMatch = line.match(/^## (.+)$/);

    if (headingMatch) {
      if (currentSection) {
        sections[currentSection] = buffer.join("\n").trim();
      }

      currentSection = headingMatch[1].trim();
      buffer = [];
      continue;
    }

    if (currentSection) {
      buffer.push(line);
    }
  }

  if (currentSection) {
    sections[currentSection] = buffer.join("\n").trim();
  }

  return sections;
}

function findBulletValue(sectionBody, label) {
  const pattern = new RegExp(`^- ${label}:\\s*(.*)$`, "m");
  const match = sectionBody.match(pattern);
  return match ? match[1].trim().replace(/^`|`$/g, "") : "";
}

function extractBulletLines(sectionBody) {
  return sectionBody
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim());
}

function buildPromptMetadata(relativePromptPath, promptBody) {
  const sections = splitSections(promptBody);
  const promptMode = inferPromptMode(relativePromptPath);
  const runtimeContext = sections["Runtime Context"] || "";
  const contextSection = sections.Context || "";
  const expectedOutputLines = extractBulletLines(sections["Expected Output"] || "");

  const projectId =
    findBulletValue(runtimeContext, "Project ID") || findBulletValue(contextSection, "Slug") || "";
  const taskId =
    findBulletValue(runtimeContext, "Task ID") || findBulletValue(contextSection, "ID") || "";
  const executionIntent =
    findBulletValue(runtimeContext, "Execution intent") || (promptMode === "execution" ? "implement" : "plan");
  const targetProjectPath = findBulletValue(runtimeContext, "Target project path") || "";
  const allowedFiles = findBulletValue(runtimeContext, "Allowed files") || "[]";
  const expectedOutputs =
    findBulletValue(runtimeContext, "Expected outputs") || JSON.stringify(expectedOutputLines);
  const implementationGoal =
    findBulletValue(runtimeContext, "Implementation goal") ||
    sections.Task?.replace(/\s+/g, " ").trim() ||
    "";

  return {
    promptMode,
    projectId,
    taskId,
    executionIntent,
    targetProjectPath,
    allowedFiles,
    expectedOutputs,
    implementationGoal,
  };
}

function buildHandoffMarkdown(relativePromptPath, promptBody) {
  const category = inferCategory(relativePromptPath);
  const promptMode = inferPromptMode(relativePromptPath);
  const handoffId = buildHandoffId(relativePromptPath);
  const promptMetadata = buildPromptMetadata(relativePromptPath, promptBody);

  return `# Codex Handoff

## Handoff Metadata

- Handoff ID: \`${handoffId}\`
- Source prompt: \`${relativePromptPath}\`
- Category: \`${category}\`
- Prompt mode: \`${promptMode}\`
- Consumer: \`Codex\`
- Status: \`prepared\`
- Project ID: \`${promptMetadata.projectId}\`
- Task ID: \`${promptMetadata.taskId}\`
- Execution intent: \`${promptMetadata.executionIntent}\`
- Target project path: \`${promptMetadata.targetProjectPath}\`
- Allowed files: \`${promptMetadata.allowedFiles}\`
- Expected outputs: \`${promptMetadata.expectedOutputs}\`
- Implementation goal: ${promptMetadata.implementationGoal}

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
      promptMode: inferPromptMode(relativePromptPath),
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
