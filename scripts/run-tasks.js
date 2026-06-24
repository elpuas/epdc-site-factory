import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { buildContextPackageForTask } from "./assemble-context.js";
import { buildPromptFromContextPackage } from "./build-prompt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const templateByCategory = {
  planning: {
    frontend: "prompt-builder/templates/frontend-template.md",
    backend: "prompt-builder/templates/backend-template.md",
    seo: "prompt-builder/templates/seo-template.md",
    qa: "prompt-builder/templates/qa-template.md",
    content: "prompt-builder/templates/content-template.md",
  },
  execution: {
    frontend: "execution-prompts/templates/frontend-implementation.md",
    backend: "execution-prompts/templates/backend-implementation.md",
    seo: "execution-prompts/templates/seo-implementation.md",
    qa: "execution-prompts/templates/qa-review.md",
    content: "execution-prompts/templates/content-implementation.md",
  },
};

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
}

function loadPlannerOutput() {
  return JSON.parse(readText("planner/example-output.json"));
}

function zeroPad(value) {
  return String(value).padStart(3, "0");
}

function main() {
  const promptMode = process.argv[2] || "planning";
  const plannerOutput = loadPlannerOutput();
  const outputDir =
    promptMode === "execution"
      ? path.join(rootDir, "generated-prompts/execution/tasks")
      : path.join(rootDir, "generated-prompts/tasks");
  fs.mkdirSync(outputDir, { recursive: true });

  const categoryCounters = {};
  const tasksProcessed = [];

  for (const task of plannerOutput.tasks) {
    const templatePath = templateByCategory[promptMode]?.[task.category];

    if (!templatePath) {
      throw new Error(`No prompt template configured for category: ${task.category}`);
    }

    categoryCounters[task.category] = (categoryCounters[task.category] || 0) + 1;

    const contextPackage = buildContextPackageForTask(task, plannerOutput, { promptMode });
    const templateMarkdown = readText(templatePath);
    const promptMarkdown = buildPromptFromContextPackage(contextPackage, templateMarkdown);
    const filename = `${task.category}-${zeroPad(categoryCounters[task.category])}.md`;
    const relOutputPath =
      promptMode === "execution"
        ? `generated-prompts/execution/tasks/${filename}`
        : `generated-prompts/tasks/${filename}`;
    const absOutputPath = path.join(rootDir, relOutputPath);

    fs.writeFileSync(absOutputPath, promptMarkdown);

    tasksProcessed.push({
      taskId: task.id,
      category: task.category,
      contextTarget: task.category,
      promptMode,
      promptFile: relOutputPath,
    });
  }

  const report = {
    sourcePlannerOutput: "planner/example-output.json",
    generatedAtLayer: "task-runner",
    promptMode,
    tasksProcessed,
  };

  console.log("Generated Task Prompts");
  console.log(JSON.stringify(report, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
