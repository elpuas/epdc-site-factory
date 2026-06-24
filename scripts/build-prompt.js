import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { buildContextPackageByTarget } from "./assemble-context.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const targetMap = {
  planning: {
    frontend: {
      templatePath: "prompt-builder/templates/frontend-template.md",
      outputPath: "generated-prompts/generated-frontend-prompt.md",
    },
    backend: {
      templatePath: "prompt-builder/templates/backend-template.md",
      outputPath: "generated-prompts/generated-backend-prompt.md",
    },
    seo: {
      templatePath: "prompt-builder/templates/seo-template.md",
      outputPath: "generated-prompts/generated-seo-prompt.md",
    },
    qa: {
      templatePath: "prompt-builder/templates/qa-template.md",
      outputPath: "generated-prompts/generated-qa-prompt.md",
    },
    content: {
      templatePath: "prompt-builder/templates/content-template.md",
      outputPath: "generated-prompts/generated-content-prompt.md",
    },
  },
  execution: {
    frontend: {
      templatePath: "execution-prompts/templates/frontend-implementation.md",
      outputPath: "generated-prompts/execution/generated-frontend-execution-prompt.md",
    },
    backend: {
      templatePath: "execution-prompts/templates/backend-implementation.md",
      outputPath: "generated-prompts/execution/generated-backend-execution-prompt.md",
    },
    seo: {
      templatePath: "execution-prompts/templates/seo-implementation.md",
      outputPath: "generated-prompts/execution/generated-seo-execution-prompt.md",
    },
    qa: {
      templatePath: "execution-prompts/templates/qa-review.md",
      outputPath: "generated-prompts/execution/generated-qa-execution-prompt.md",
    },
    content: {
      templatePath: "execution-prompts/templates/content-implementation.md",
      outputPath: "generated-prompts/execution/generated-content-execution-prompt.md",
    },
  },
};

function readText(relPath) {
  return fs.readFileSync(path.join(rootDir, relPath), "utf8");
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

function renderBullets(items) {
  return items.filter(Boolean).map((item) => `- ${item}`).join("\n");
}

function extractHeading(markdown) {
  return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim() || "Specialized Agent";
}

function extractBulletLines(sectionBody) {
  return sectionBody
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim());
}

function extractContractData(markdown) {
  const sections = splitSections(markdown);

  return {
    heading: extractHeading(markdown),
    purpose: sections.Purpose?.replace(/\s+/g, " ").trim() || "",
    responsibilities: extractBulletLines(sections.Responsibilities || ""),
    constraints: extractBulletLines(sections.Constraints || ""),
  };
}

function extractSkillStandards(skill) {
  const sections = splitSections(skill.content);
  const standardsSection = sections["EPDC Standards"] || sections.Responsibilities || "";
  const standards = extractBulletLines(standardsSection);

  return {
    file: skill.file,
    standards: standards.length > 0 ? standards : ["Use the documented standards from this skill file."],
  };
}

function renderContextFromPackage(contextPackage) {
  const project = contextPackage.projectSpecification.project;
  const planningSummary = contextPackage.projectSpecification.planningSummary;
  const task = contextPackage.assignedTask;

  return [
    "### Project Specification",
    "",
    `- Project: ${project.name}`,
    `- Slug: \`${project.slug}\``,
    `- Industry: ${project.industry}`,
    `- Source specification: \`${project.sourceSpecification}\``,
    `- Primary goal: ${planningSummary.primaryGoal}`,
    `- Scope summary: ${planningSummary.scopeSummary}`,
    "- Planning constraints:",
    ...planningSummary.constraints.map((item) => `  - ${item}`),
    "",
    "### Assigned Task",
    "",
    `- ID: \`${task.id}\``,
    `- Title: ${task.title}`,
    `- Category: \`${task.category}\``,
    `- Priority: \`${task.priority}\``,
    `- Description: ${task.description}`,
    "- Dependencies:",
    ...(task.dependencies.length > 0 ? task.dependencies.map((item) => `  - \`${item}\``) : ["  - None"]),
  ].join("\n");
}

function renderRuntimeContextFromPackage(runtimeContext) {
  if (!runtimeContext) {
    return "";
  }

  return [
    `- Project ID: \`${runtimeContext.projectId}\``,
    `- Task ID: \`${runtimeContext.taskId}\``,
    `- Target project path: \`${runtimeContext.targetProjectPath}\``,
    `- Execution intent: \`${runtimeContext.executionIntent}\``,
    `- Allowed files: \`${JSON.stringify(runtimeContext.allowedFiles)}\``,
    `- Expected outputs: \`${JSON.stringify(runtimeContext.expectedOutputs)}\``,
    `- Implementation goal: ${runtimeContext.implementationGoal}`,
  ].join("\n");
}

function renderStandardsFromPackage(requiredSkills) {
  return requiredSkills
    .map((skill) => {
      const data = extractSkillStandards(skill);
      return [`- \`${data.file}\``, ...data.standards.map((item) => `  - ${item}`)].join("\n");
    })
    .join("\n");
}

function renderMergedConstraints(agentConstraints, topLevelConstraints) {
  const merged = [...agentConstraints, ...topLevelConstraints];
  const seen = new Set();
  const ordered = [];

  for (const item of merged) {
    if (!seen.has(item)) {
      seen.add(item);
      ordered.push(item);
    }
  }

  return renderBullets(ordered);
}

function buildPlanningPromptParts(contextPackage) {
  const agentData = extractContractData(contextPackage.agentDefinition.content);
  const task = contextPackage.assignedTask;

  return {
    role: `You are the ${agentData.heading} for EPDC Site Factory. ${agentData.purpose}`,
    responsibilities: renderBullets(agentData.responsibilities),
    context: renderContextFromPackage(contextPackage),
    runtimeContext: "",
    task: `Use this assembled context package to address task \`${task.id}\`: ${task.title}. ${task.description} Produce the outputs listed in the Expected Output section for this task.`,
    standards: renderStandardsFromPackage(contextPackage.requiredSkills),
    constraints: renderMergedConstraints(agentData.constraints, contextPackage.constraints),
    expectedOutput: renderBullets(contextPackage.expectedOutput),
  };
}

function buildExecutionPromptParts(contextPackage) {
  const agentData = extractContractData(contextPackage.agentDefinition.content);
  const task = contextPackage.assignedTask;
  const runtimeContext = contextPackage.runtimeContext;

  return {
    role: `You are the ${agentData.heading} for EPDC Site Factory. Execute the scoped runtime task without inferring project boundaries beyond the declared runtime context.`,
    responsibilities: renderBullets(agentData.responsibilities),
    context: renderContextFromPackage(contextPackage),
    runtimeContext: renderRuntimeContextFromPackage(runtimeContext),
    task: `Execute task \`${task.id}\`: ${task.title}. ${runtimeContext.implementationGoal} Work only inside \`${runtimeContext.targetProjectPath}\` and only touch files declared in \`allowedFiles\`. Produce the outputs listed in the Expected Output section for this task.`,
    standards: renderStandardsFromPackage(contextPackage.requiredSkills),
    constraints: renderMergedConstraints(agentData.constraints, contextPackage.constraints),
    expectedOutput: renderBullets(contextPackage.expectedOutput),
  };
}

export function buildPromptPartsFromContextPackage(contextPackage) {
  return contextPackage.promptMode === "execution"
    ? buildExecutionPromptParts(contextPackage)
    : buildPlanningPromptParts(contextPackage);
}

export function applyTemplate(templateMarkdown, promptParts) {
  return templateMarkdown
    .replace("{{ROLE}}", promptParts.role)
    .replace("{{RESPONSIBILITIES}}", promptParts.responsibilities)
    .replace("{{CONTEXT}}", promptParts.context)
    .replace("{{RUNTIME_CONTEXT}}", promptParts.runtimeContext || "")
    .replace("{{TASK}}", promptParts.task)
    .replace("{{STANDARDS}}", promptParts.standards)
    .replace("{{CONSTRAINTS}}", promptParts.constraints)
    .replace("{{EXPECTED_OUTPUT}}", promptParts.expectedOutput);
}

export function buildPromptFromContextPackage(contextPackage, templateMarkdown) {
  const promptParts = buildPromptPartsFromContextPackage(contextPackage);
  return `${applyTemplate(templateMarkdown, promptParts).trim()}\n`;
}

function resolveInput(arg, modeArg) {
  const value = arg || "frontend";
  const promptMode = modeArg || "planning";
  const modeTargetMap = targetMap[promptMode];

  if (!modeTargetMap) {
    throw new Error(`Unsupported prompt mode: ${promptMode}`);
  }

  if (modeTargetMap[value]) {
    return { mode: "target", promptMode, targetName: value, ...modeTargetMap[value] };
  }

  const absolutePath = path.isAbsolute(value) ? value : path.join(rootDir, value);

  if (!fs.existsSync(absolutePath)) {
    const supported = Object.keys(targetMap).join(", ");
    throw new Error(`Unknown prompt target or context path: ${value}. Supported targets: ${supported}`);
  }

  return {
    mode: "file",
    contextPath: path.relative(rootDir, absolutePath),
  };
}

function main() {
  const input = resolveInput(process.argv[2], process.argv[3]);
  let contextPackage;
  let templatePath;
  let outputPath;

  if (input.mode === "target") {
    contextPackage = buildContextPackageByTarget(input.targetName, undefined, {
      promptMode: input.promptMode,
    });
    templatePath = input.templatePath;
    outputPath = path.join(rootDir, input.outputPath);
  } else {
    contextPackage = JSON.parse(readText(input.contextPath));
    const category = contextPackage.target || contextPackage.assignedTask?.category;
    const promptMode = contextPackage.promptMode || "planning";
    const config = targetMap[promptMode]?.[category];

    if (!config) {
      const supported = Object.keys(targetMap.planning).join(", ");
      throw new Error(`Unsupported context package target: ${category}. Supported targets: ${supported}`);
    }

    templatePath = config.templatePath;
    outputPath = path.join(rootDir, config.outputPath);
  }

  const templateMarkdown = readText(templatePath);
  const finalPrompt = buildPromptFromContextPackage(contextPackage, templateMarkdown);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, finalPrompt);

  console.log(outputPath);
}

if (process.argv[1] === __filename) {
  main();
}
