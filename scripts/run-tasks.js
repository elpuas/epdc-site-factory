import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { buildContextPackageForTask } from "./assemble-context.js";
import { buildPromptFromContext } from "./build-prompt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const templateByCategory = {
  frontend: "prompt-builder/templates/frontend-template.md",
  backend: "prompt-builder/templates/backend-template.md",
  seo: "prompt-builder/templates/seo-template.md",
  qa: "prompt-builder/templates/qa-template.md",
  content: "prompt-builder/templates/content-template.md",
};

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
}

function loadPlannerOutput() {
  return JSON.parse(readText("planner/example-output.json"));
}

function renderMarkdownContext(pkg) {
  const renderItems = (items) => items.map((item) => `- ${item}`).join("\n");
  const renderLabeledList = (entries) =>
    entries
      .map((entry) => {
        if (entry.items && entry.items.length > 0) {
          return [`- ${entry.label}: ${entry.value ?? ""}`.trimEnd(), ...entry.items.map((item) => `  - ${item}`)].join("\n");
        }

        return `- ${entry.label}: ${entry.value}`;
      })
      .join("\n");

  const project = pkg.projectSpecification.project;
  const planning = pkg.projectSpecification.planningSummary;
  const task = pkg.assignedTask;

  const projectEntries = [
    { label: "Project", value: project.name },
    { label: "Industry", value: project.industry },
    { label: "Primary goal", value: planning.primaryGoal },
    { label: "Scope summary", value: planning.scopeSummary },
    { label: "Planning constraints", value: "", items: planning.constraints },
  ];

  const taskEntries = [
    { label: "ID", value: `\`${task.id}\`` },
    { label: "Title", value: task.title },
    { label: "Category", value: `\`${task.category}\`` },
    { label: "Priority", value: `\`${task.priority}\`` },
    { label: "Description", value: task.description },
    { label: "Dependencies", value: "", items: task.dependencies.length ? task.dependencies.map((dep) => `\`${dep}\``) : ["None"] },
  ];

  const agentContent = pkg.agentDefinition.content
    .split("\n")
    .filter((line) => line.startsWith("- ") || line.startsWith("## "))
    .join("\n");

  const skillsBlock = pkg.requiredSkills
    .map((skill) => `- \`${skill.file}\`\n  - Loaded for category \`${task.category}\` prompt generation`)
    .join("\n");

  return `# Context Package

## Project Specification

${renderLabeledList(projectEntries)}

## Assigned Task

${renderLabeledList(taskEntries)}

## Agent Definition

- Agent: ${path.basename(pkg.agentDefinition.file, ".md").replace(/^\w/, (char) => char.toUpperCase())} Agent
- Source file: \`${pkg.agentDefinition.file}\`

${agentContent}

## Required Skills

${skillsBlock}

## Constraints

${renderItems(pkg.constraints)}

## Expected Output

${renderItems(pkg.expectedOutput)}
`;
}

function zeroPad(value) {
  return String(value).padStart(3, "0");
}

function main() {
  const plannerOutput = loadPlannerOutput();
  const outputDir = path.join(rootDir, "generated-prompts/tasks");
  fs.mkdirSync(outputDir, { recursive: true });

  const categoryCounters = {};
  const tasksProcessed = [];

  for (const task of plannerOutput.tasks) {
    const templatePath = templateByCategory[task.category];

    if (!templatePath) {
      throw new Error(`No prompt template configured for category: ${task.category}`);
    }

    categoryCounters[task.category] = (categoryCounters[task.category] || 0) + 1;

    const contextPackage = buildContextPackageForTask(task, plannerOutput);
    const contextMarkdown = renderMarkdownContext(contextPackage);
    const templateMarkdown = readText(templatePath);
    const promptMarkdown = buildPromptFromContext(contextMarkdown, templateMarkdown);
    const filename = `${task.category}-${zeroPad(categoryCounters[task.category])}.md`;
    const relOutputPath = `generated-prompts/tasks/${filename}`;
    const absOutputPath = path.join(rootDir, relOutputPath);

    fs.writeFileSync(absOutputPath, promptMarkdown);

    tasksProcessed.push({
      taskId: task.id,
      category: task.category,
      contextTarget: task.category,
      promptFile: relOutputPath,
    });
  }

  const report = {
    sourcePlannerOutput: "planner/example-output.json",
    generatedAtLayer: "task-runner",
    tasksProcessed,
  };

  console.log("Generated Task Prompts");
  console.log(JSON.stringify(report, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
