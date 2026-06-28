import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const categoryConfig = {
  frontend: {
    agentFile: "agents/frontend.md",
    skillFiles: [
      ".agents/skills/astro/SKILL.md",
      ".agents/skills/content/SKILL.md",
      ".agents/skills/seo/SKILL.md",
    ],
    planningExpectedOutput: [
      "Frontend implementation guidance",
      "Route and page mapping",
      "Shared layout and component notes",
      "CTA placement and dependency notes",
    ],
    executionExpectedOutput: [
      "Implement the requested frontend changes only in the allowed files",
      "Keep Astro structure, conversion visibility, and content consistency intact",
      "Report any unresolved missing-business-data blockers as explicit TODOs or notes",
    ],
  },
  backend: {
    agentFile: "agents/backend.md",
    skillFiles: [".agents/skills/supabase/SKILL.md", ".agents/skills/qa/SKILL.md"],
    planningExpectedOutput: [
      "Backend implementation guidance",
      "Security and data-handling notes",
      "Launch-ready backend constraints",
      "Risk and future-readiness notes",
    ],
    executionExpectedOutput: [
      "Implement only the backend-facing files required by the task",
      "Preserve the no-database launch constraint unless the specification explicitly changes",
      "Report any blocked integrations or missing configuration details for review",
    ],
  },
  seo: {
    agentFile: "agents/seo.md",
    skillFiles: [
      ".agents/skills/seo/SKILL.md",
      ".agents/skills/content/SKILL.md",
      ".agents/skills/astro/SKILL.md",
    ],
    planningExpectedOutput: [
      "SEO implementation guidance",
      "Metadata and page-intent notes",
      "Local SEO consistency requirements",
      "Structured-data and dependency notes",
    ],
    executionExpectedOutput: [
      "Implement the required SEO updates only in the allowed files",
      "Keep metadata, structured data, and crawlability aligned with visible page content",
      "Report any blocked SEO facts that cannot be safely invented",
    ],
  },
  qa: {
    agentFile: "agents/qa.md",
    skillFiles: [
      ".agents/skills/qa/SKILL.md",
      ".agents/skills/astro/SKILL.md",
      ".agents/skills/seo/SKILL.md",
      ".agents/skills/content/SKILL.md",
    ],
    planningExpectedOutput: [
      "Structured QA findings",
      "Release-readiness summary",
      "Rework recommendations",
      "Coverage notes mapped to requirements",
    ],
    executionExpectedOutput: [
      "Review the scoped implementation surface against the specification and task requirements",
      "Return explicit findings with severity and affected files where applicable",
      "State an approval, rejection, or retry recommendation with rationale",
    ],
  },
  content: {
    agentFile: "agents/content.md",
    skillFiles: [
      ".agents/skills/content/SKILL.md",
      ".agents/skills/seo/SKILL.md",
      ".agents/skills/astro/SKILL.md",
    ],
    planningExpectedOutput: [
      "Content implementation guidance",
      "Page hierarchy and CTA notes",
      "Service-page or local-business messaging notes",
      "Dependency notes for frontend or SEO implementation",
    ],
    executionExpectedOutput: [
      "Implement the required content updates only in the allowed files",
      "Keep messaging consistent with the specification and existing site structure",
      "Report any missing business facts that must remain TODOs instead of invented copy",
    ],
  },
};

const defaultTargets = {
  frontend: "frontend-core-pages",
  backend: "backend-form-delivery",
  seo: "seo-page-metadata",
};

const executionProjectDefaults = {
  projectId: "harbor-point-dental-studio",
  targetProjectPath: "projects/harbor-point-dental-studio",
};

const executionTaskFiles = {
  "frontend-site-foundation": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/components/site/Header.astro",
    "projects/harbor-point-dental-studio/src/components/site/Footer.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
  ],
  "content-brand-messaging": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
  ],
  "content-dentist-bio-and-practice-details": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/new-patients.astro",
  ],
  "frontend-core-pages": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/components/site/Header.astro",
    "projects/harbor-point-dental-studio/src/components/site/Footer.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/new-patients.astro",
    "projects/harbor-point-dental-studio/src/pages/reviews.astro",
  ],
  "frontend-treatment-pages": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
  ],
  "frontend-appointment-form-and-mobile-cta": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/components/site/Header.astro",
    "projects/harbor-point-dental-studio/src/components/site/Footer.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
  ],
  "backend-form-delivery": [
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/api/appointment-request.ts",
    "projects/harbor-point-dental-studio/src/data/site.ts",
  ],
  "frontend-map-and-location-details": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
  ],
  "backend-analytics-integration": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
  ],
  "seo-page-metadata": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/new-patients.astro",
    "projects/harbor-point-dental-studio/src/pages/reviews.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
  ],
  "seo-local-targeting-and-sitemap": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/new-patients.astro",
    "projects/harbor-point-dental-studio/src/pages/reviews.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
    "projects/harbor-point-dental-studio/src/pages/sitemap.xml.ts",
    "projects/harbor-point-dental-studio/public/robots.txt",
  ],
  "seo-structured-data": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
  ],
  "content-treatment-copy": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
  ],
  "content-testimonials-and-faqs": [
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/reviews.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
  ],
  "qa-specification-coverage": [],
  "qa-conversion-and-consistency-review": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/components/site/Header.astro",
    "projects/harbor-point-dental-studio/src/components/site/Footer.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
  ],
  "qa-seo-requirements-review": [
    "projects/harbor-point-dental-studio/src/layouts/BaseLayout.astro",
    "projects/harbor-point-dental-studio/src/data/site.ts",
    "projects/harbor-point-dental-studio/src/pages/index.astro",
    "projects/harbor-point-dental-studio/src/pages/about.astro",
    "projects/harbor-point-dental-studio/src/pages/services.astro",
    "projects/harbor-point-dental-studio/src/pages/contact.astro",
    "projects/harbor-point-dental-studio/src/pages/teeth-whitening.astro",
    "projects/harbor-point-dental-studio/src/pages/dental-implants.astro",
    "projects/harbor-point-dental-studio/src/pages/sitemap.xml.ts",
    "projects/harbor-point-dental-studio/public/robots.txt",
  ],
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

function buildPlanningConstraints(planningData) {
  return [
    ...planningData.planningSummary.constraints,
    "Do not integrate Codex.",
    "Do not call any AI model.",
    "Do not generate websites.",
    "Do not implement orchestration.",
    "Do not implement memory.",
  ];
}

function buildExecutionConstraints(planningData) {
  return [
    ...planningData.planningSummary.constraints,
    "Operate only within the declared target project path and allowed files.",
    "Do not broaden scope beyond the declared implementation goal or review goal.",
    "Do not invent missing business facts; leave TODO-safe placeholders or review notes instead.",
    "Do not redesign the factory.",
    "Do not add memory.",
    "Do not add MCP execution.",
    "Do not remove planning prompts.",
  ];
}

function buildRuntimeContext(task, config) {
  return {
    projectId: executionProjectDefaults.projectId,
    taskId: task.id,
    targetProjectPath: executionProjectDefaults.targetProjectPath,
    allowedFiles: executionTaskFiles[task.id] || [],
    executionIntent: task.category === "qa" ? "review" : "implement",
    implementationGoal: task.description,
    expectedOutputs: config.executionExpectedOutput,
  };
}

export function buildContextPackageForTask(task, planningData = loadPlanningData(), options = {}) {
  const promptMode = options.promptMode || "planning";
  const target = categoryConfig[task.category];

  if (!target) {
    const supported = Object.keys(categoryConfig).join(", ");
    throw new Error(`Unsupported task category: ${task.category}. Supported categories: ${supported}`);
  }

  return {
    promptMode,
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
    runtimeContext: promptMode === "execution" ? buildRuntimeContext(task, target) : null,
    constraints:
      promptMode === "execution"
        ? buildExecutionConstraints(planningData)
        : buildPlanningConstraints(planningData),
    expectedOutput:
      promptMode === "execution" ? target.executionExpectedOutput : target.planningExpectedOutput,
  };
}

export function buildContextPackageByTarget(targetName, planningData = loadPlanningData(), options = {}) {
  const taskId = defaultTargets[targetName];

  if (!taskId) {
    const supported = Object.keys(defaultTargets).join(", ");
    throw new Error(`Unknown context target: ${targetName}. Supported targets: ${supported}`);
  }

  const task = extractTask(planningData, taskId);

  if (!task) {
    throw new Error(`Task not found in planner/example-output.json: ${taskId}`);
  }

  return buildContextPackageForTask(task, planningData, options);
}

function main() {
  const targetName = process.argv[2] || "frontend";
  const promptMode = process.argv[3] || "planning";
  const contextPackage = buildContextPackageByTarget(targetName, loadPlanningData(), { promptMode });

  console.log("Assembled Context");
  console.log(JSON.stringify(contextPackage, null, 2));
}

if (process.argv[1] === __filename) {
  main();
}
