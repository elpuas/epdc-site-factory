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

function parseMetadata(sectionBody) {
  return Object.fromEntries(
    sectionBody
      .split("\n")
      .map((line) => line.match(/^- ([^:]+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key.trim(), value.trim().replace(/^`|`$/g, "")]),
  );
}

function inferResultPath(sourcePrompt) {
  const normalized = sourcePrompt.replace(/\\/g, "/").replace(/\.md$/, "");
  return `execution/results/${normalized}/result.json`;
}

function buildReviewRequirements(category) {
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
      "Confirm boundaries are preserved",
      "Confirm result path is valid for future execution output",
      "Mark package as approved for future execution",
    ],
  };

  return {
    ...common,
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

function buildExecutionPackage(relativeHandoffPath, handoffMarkdown) {
  const sections = splitSections(handoffMarkdown);
  const metadata = parseMetadata(sections["Handoff Metadata"] || "");
  const sourcePrompt = metadata["Source prompt"];
  const category = metadata.Category || "unknown";
  const handoffId = metadata["Handoff ID"];
  const promptPayload = sections["Prompt Payload"] || "";

  const executionId = `${handoffId}-execution`;
  const resultPath = inferResultPath(sourcePrompt);

  return {
    executionId,
    sourceHandoff: relativeHandoffPath.replace(/\\/g, "/"),
    sourcePrompt,
    category,
    status: "prepared",
    promptPayload,
    expectedResultPath: resultPath,
    reviewRequirements: buildReviewRequirements(category),
    boundaries: [
      "Do not call Codex.",
      "Do not call any AI model.",
      "Do not generate websites.",
      "Do not implement orchestration.",
      "Do not implement memory.",
    ],
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
