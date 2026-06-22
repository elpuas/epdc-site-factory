import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const contextTargets = {
  frontend: {
    taskId: "frontend-core-pages",
    agentFile: "agents/frontend.md",
    skillFiles: ["skills/astro.md", "skills/content.md", "skills/seo.md"],
    expectedOutput: [
      "Frontend implementation guidance",
      "Route and page mapping",
      "Shared layout and component notes",
      "CTA placement and dependency notes",
    ],
  },
  backend: {
    taskId: "backend-form-delivery",
    agentFile: "agents/backend.md",
    skillFiles: ["skills/supabase.md", "skills/qa.md"],
    expectedOutput: [
      "Backend implementation guidance",
      "Security and data-handling notes",
      "Launch-ready backend constraints",
      "Risk and future-readiness notes",
    ],
  },
  seo: {
    taskId: "seo-page-metadata",
    agentFile: "agents/seo.md",
    skillFiles: ["skills/seo.md", "skills/content.md", "skills/astro.md"],
    expectedOutput: [
      "SEO implementation guidance",
      "Metadata and page-intent notes",
      "Local SEO consistency requirements",
      "Structured-data and dependency notes",
    ],
  },
};

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
}

function loadPlanningData() {
  return JSON.parse(readText("planner/example-output.json"));
}

function extractTask(planningData, taskId) {
  return planningData.tasks.find((task) => task.id === taskId);
}

function buildSpecificationSummary(planningData, task) {
  return {
    project: planningData.project,
    planningSummary: planningData.planningSummary,
    sourceSpecification: "specs/examples/dentist.md",
    relevantTaskCategory: task.category,
  };
}

function buildContextPackage(targetName) {
  const target = contextTargets[targetName];

  if (!target) {
    const supported = Object.keys(contextTargets).join(", ");
    throw new Error(`Unknown context target: ${targetName}. Supported targets: ${supported}`);
  }

  const planningData = loadPlanningData();
  const task = extractTask(planningData, target.taskId);

  if (!task) {
    throw new Error(`Task not found in planner/example-output.json: ${target.taskId}`);
  }

  return {
    target: targetName,
    projectSpecification: buildSpecificationSummary(planningData, task),
    assignedTask: task,
    agentDefinition: {
      file: target.agentFile,
      content: readText(target.agentFile),
    },
    requiredSkills: target.skillFiles.map((skillFile) => ({
      file: skillFile,
      content: readText(skillFile),
    })),
    constraints: [
      ...planningData.planningSummary.constraints,
      "Do not integrate Codex.",
      "Do not call any AI model.",
      "Do not generate websites.",
      "Do not implement orchestration.",
      "Do not implement memory.",
    ],
    expectedOutput: target.expectedOutput,
  };
}

function main() {
  const targetName = process.argv[2] || "frontend";
  const contextPackage = buildContextPackage(targetName);

  console.log("Assembled Context");
  console.log(JSON.stringify(contextPackage, null, 2));
}

main();
