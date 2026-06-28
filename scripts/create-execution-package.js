import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const handoffDir = path.join(rootDir, "codex-handoff/output");
const executionDir = path.join(rootDir, "execution/packages");

function walkFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const absPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walkFiles(absPath);
    }

    return [absPath];
  });
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

function extractPromptPayload(markdown) {
  const marker = "\n## Prompt Payload\n";
  const index = markdown.indexOf(marker);

  if (index === -1) {
    return "";
  }

  return markdown.slice(index + marker.length).trim();
}

function parseMetadata(sectionBody) {
  return Object.fromEntries(
    sectionBody
      .split("\n")
      .map((line) => line.match(/^- ([^:]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key.trim(), value.trim().replace(/^`|`$/g, "")]),
  );
}

function parseArrayValue(value) {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function inferResultPath(sourcePrompt) {
  const normalized = sourcePrompt.replace(/\\/g, "/").replace(/\.md$/, "");
  return `execution/results/${normalized}/result.json`;
}

function inferSourcePrompt(relativeHandoffPath) {
  return relativeHandoffPath
    .replace(/\\/g, "/")
    .replace(/^codex-handoff\/output\//, "")
    .replace(/-handoff\.md$/, ".md");
}

function buildReviewRequirements(category, executionIntent) {
  const common = {
    reviewer: "future-qa-layer",
    approvalStatus: "pending-review",
    mustReview: [
      "Prompt payload completeness",
      "Category-to-task alignment",
      "Boundary compliance",
      "Output-path readiness",
    ],
    successConditions: [
      "Execution package is structurally complete",
      "Source handoff metadata is preserved",
      "Prompt payload is present without semantic modification",
      "Result location is predeclared for downstream execution output",
    ],
    failureConditions: [
      "Missing prompt payload",
      "Missing source handoff reference",
      "Category mismatch between handoff and package",
      "Execution package points outside the repository execution/results structure",
    ],
    approvalProcess: [
      "Review package metadata and payload completeness",
      "Confirm runtime scope and boundaries are preserved",
      "Confirm result path is valid for future execution output",
      "Mark package as approved for future execution",
    ],
  };

  return {
    ...common,
    executionIntent,
    categoryFocus:
      category === "frontend"
        ? "Route, layout, component, and conversion-surface execution output"
        : category === "backend"
          ? "Backend scope, data handling, and security-boundary execution output"
          : category === "seo"
            ? "Metadata, structured data, crawlability, and local SEO execution output"
            : category === "content"
              ? "Messaging, page hierarchy, and CTA execution output"
              : category === "qa"
                ? "Validation, findings, and release-readiness execution output"
                : "General execution output validation",
  };
}

function buildExecutionBoundaries(executionIntent) {
  const common = [
    "Do not implement orchestration.",
    "Do not add memory.",
    "Do not add MCP execution.",
  ];

  if (executionIntent === "plan") {
    return ["Do not modify target project files.", ...common];
  }

  if (executionIntent === "review") {
    return ["Do not expand scope from review into unrelated implementation.", ...common];
  }

  if (executionIntent === "revise") {
    return ["Revise only within the declared target project path and allowed files.", ...common];
  }

  return ["Modify only the declared allowed files inside the target project path.", ...common];
}

function buildExecutionPackage(relativeHandoffPath, handoffMarkdown) {
  const sections = splitSections(handoffMarkdown);
  const metadata = parseMetadata(sections["Handoff Metadata"] || "");
  const sourcePrompt = metadata["Source prompt"] || inferSourcePrompt(relativeHandoffPath);
  const category = metadata.Category || "unknown";
  const handoffId = metadata["Handoff ID"];
  const promptMode = metadata["Prompt mode"] || "planning";
  const promptPayload = extractPromptPayload(handoffMarkdown);
  const projectId = metadata["Project ID"] || "";
  const taskId = metadata["Task ID"] || "";
  const executionIntent = metadata["Execution intent"] || (promptMode === "execution" ? "implement" : "plan");
  const targetProjectPath = metadata["Target project path"] || "";
  const allowedFiles = parseArrayValue(metadata["Allowed files"]);
  const expectedOutputs = parseArrayValue(metadata["Expected outputs"]);
  const implementationGoal = metadata["Implementation goal"] || "";

  const executionId = `${handoffId}-execution`;
  const resultPath = inferResultPath(sourcePrompt);

  return {
    executionId,
    promptMode,
    projectId,
    taskId,
    targetProjectPath,
    allowedFiles,
    executionIntent,
    sourceHandoff: relativeHandoffPath.replace(/\\/g, "/"),
    sourcePrompt,
    category,
    status: "prepared",
    promptPayload,
    expectedOutputs,
    implementationGoal,
    expectedResultPath: resultPath,
    reviewRequirements: buildReviewRequirements(category, executionIntent),
    boundaries: buildExecutionBoundaries(executionIntent),
  };
}

function main() {
  const handoffFiles = walkFiles(handoffDir).filter((file) => {
    const rel = path.relative(rootDir, file).replace(/\\/g, "/");
    return rel.endsWith(".md") && !rel.endsWith("/README.md");
  });

  fs.mkdirSync(executionDir, { recursive: true });

  const packagesCreated = [];

  for (const handoffFile of handoffFiles) {
    const relativeHandoffPath = path.relative(rootDir, handoffFile).replace(/\\/g, "/");
    const handoffMarkdown = fs.readFileSync(handoffFile, "utf8");
    const executionPackage = buildExecutionPackage(relativeHandoffPath, handoffMarkdown);
    const relativeOutputPath = relativeHandoffPath
      .replace(/^codex-handoff\/output\//, "execution/packages/")
      .replace(/-handoff\.md$/, "-execution.json");
    const absoluteOutputPath = path.join(rootDir, relativeOutputPath);

    fs.mkdirSync(path.dirname(absoluteOutputPath), { recursive: true });
    fs.writeFileSync(absoluteOutputPath, `${JSON.stringify(executionPackage, null, 2)}\n`);

    packagesCreated.push({
      promptMode: executionPackage.promptMode,
      projectId: executionPackage.projectId,
      taskId: executionPackage.taskId,
      sourceHandoff: relativeHandoffPath,
      category: executionPackage.category,
      executionPackage: relativeOutputPath,
      expectedResultPath: executionPackage.expectedResultPath,
    });
  }

  const manifest = {
    sourceHandoffDirectory: "codex-handoff/output",
    outputDirectory: "execution/packages",
    packagesCreated,
  };

  fs.writeFileSync(path.join(executionDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

  console.log("Execution Package Created");
  console.log(JSON.stringify(manifest, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
