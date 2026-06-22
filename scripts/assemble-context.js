import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const categoryConfig = {
  frontend: {
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
    agentFile: "agents/seo.md",
    skillFiles: ["skills/seo.md", "skills/content.md", "skills/astro.md"],
    expectedOutput: [
      "SEO implementation guidance",
      "Metadata and page-intent notes",
      "Local SEO consistency requirements",
      "Structured-data and dependency notes",
    ],
  },
  qa: {
    agentFile: "agents/qa.md",
    skillFiles: ["skills/qa.md", "skills/astro.md", "skills/seo.md", "skills/content.md"],
    expectedOutput: [
      "Structured QA findings",
      "Release-readiness summary",
      "Rework recommendations",
      "Coverage notes mapped to requirements",
    ],
  },
  content: {
    agentFile: "agents/content.md",
    skillFiles: ["skills/content.md", "skills/seo.md", "skills/astro.md"],
    expectedOutput: [
      "Content implementation guidance",
      "Page hierarchy and CTA notes",
      "Service-page or local-business messaging notes",
      "Dependency notes for frontend or SEO implementation",
    ],
  },
};

const defaultTargets = {
  frontend: "frontend-core-pages",
  backend: "backend-form-delivery",
  seo: "seo-page-metadata",
};

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
}

function loadPlanningData() {
  return JSON.parse(readText("planner/example-output.json"));
}

export function extractTask(planningData, taskId) {
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

export function buildContextPackageForTask(task, planningData = loadPlanningData()) {
  const target = categoryConfig[task.category];

  if (!target) {
    const supported = Object.keys(categoryConfig).join(", ");
    throw new Error(`Unsupported task category: ${task.category}. Supported categories: ${supported}`);
  }

  return {
    target: task.category,
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

export function buildContextPackageByTarget(targetName, planningData = loadPlanningData()) {
  const taskId = defaultTargets[targetName];

  if (!taskId) {
    const supported = Object.keys(defaultTargets).join(", ");
    throw new Error(`Unknown context target: ${targetName}. Supported targets: ${supported}`);
  }

  const task = extractTask(planningData, taskId);

  if (!task) {
    throw new Error(`Task not found in planner/example-output.json: ${taskId}`);
  }

  return buildContextPackageForTask(task, planningData);
}

function main() {
  const targetName = process.argv[2] || "frontend";
  const contextPackage = buildContextPackageByTarget(targetName);

  console.log("Assembled Context");
  console.log(JSON.stringify(contextPackage, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
