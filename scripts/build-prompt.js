import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const targetMap = {
  frontend: {
    contextPath: "context-engine/examples/frontend-context.md",
    templatePath: "prompt-builder/templates/frontend-template.md",
    outputPath: "generated-prompts/generated-frontend-prompt.md",
  },
  backend: {
    contextPath: "context-engine/examples/backend-context.md",
    templatePath: "prompt-builder/templates/backend-template.md",
    outputPath: "generated-prompts/generated-backend-prompt.md",
  },
  seo: {
    contextPath: "context-engine/examples/seo-context.md",
    templatePath: "prompt-builder/templates/seo-template.md",
    outputPath: "generated-prompts/generated-seo-prompt.md",
  },
  qa: {
    contextPath: null,
    templatePath: "prompt-builder/templates/qa-template.md",
    outputPath: "generated-prompts/generated-qa-prompt.md",
  },
  content: {
    contextPath: null,
    templatePath: "prompt-builder/templates/content-template.md",
    outputPath: "generated-prompts/generated-content-prompt.md",
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

function parseEntries(sectionBody) {
  const entries = [];
  let current = null;

  for (const line of sectionBody.split("\n")) {
    const fieldMatch = line.match(/^- ([^:]+):\s*(.*)$/);
    const itemMatch = line.match(/^  - (.*)$/);
    const bulletMatch = line.match(/^- (.*)$/);

    if (fieldMatch) {
      current = {
        label: fieldMatch[1].trim(),
        value: fieldMatch[2].trim(),
        items: [],
      };
      entries.push(current);
      continue;
    }

    if (itemMatch && current) {
      current.items.push(itemMatch[1].trim());
      continue;
    }

    if (bulletMatch) {
      current = {
        label: null,
        value: bulletMatch[1].trim(),
        items: [],
      };
      entries.push(current);
    }
  }

  return entries;
}

function getEntry(entries, label) {
  return entries.find((entry) => entry.label?.toLowerCase() === label.toLowerCase());
}

function renderBullets(items) {
  return items.filter(Boolean).map((item) => `- ${item}`).join("\n");
}

function renderContext(projectEntries, taskEntries) {
  const projectBlock = renderBullets(
    projectEntries.map((entry) => {
      if (entry.label && entry.items.length > 0 && entry.value) {
        return `${entry.label}: ${entry.value}`.trim();
      }

      if (entry.label && entry.items.length === 0) {
        return `${entry.label}: ${entry.value}`.trim();
      }

      return entry.items.length === 0 ? entry.value : null;
    }),
  );

  const nestedProjectDetails = projectEntries
    .filter((entry) => entry.items.length > 0)
    .map((entry) => {
      const heading = `### ${entry.label}`;
      const body = renderBullets(entry.items);
      return `${heading}\n\n${body}`;
    })
    .join("\n\n");

  const taskBlock = renderBullets(
    taskEntries.map((entry) => {
      if (entry.label && entry.items.length > 0 && entry.value) {
        return `${entry.label}: ${entry.value}`.trim();
      }

      if (entry.label && entry.items.length === 0) {
        return `${entry.label}: ${entry.value}`.trim();
      }

      return entry.items.length === 0 ? entry.value : null;
    }),
  );

  const nestedTaskDetails = taskEntries
    .filter((entry) => entry.items.length > 0)
    .map((entry) => {
      const heading = `### ${entry.label}`;
      const body = renderBullets(entry.items);
      return `${heading}\n\n${body}`;
    })
    .join("\n\n");

  return [
    "### Project Specification",
    "",
    projectBlock,
    nestedProjectDetails || "",
    "",
    "### Assigned Task",
    "",
    taskBlock,
    nestedTaskDetails || "",
  ]
    .filter(Boolean)
    .join("\n");
}

function renderStandards(skillEntries) {
  return skillEntries
    .map((entry) => {
      const intro = entry.label ? `- \`${entry.label}\`` : `- ${entry.value}`;
      const details = entry.items.map((item) => `  - ${item}`).join("\n");
      return details ? `${intro}\n${details}` : intro;
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

export function buildPromptParts(contextMarkdown) {
  const sections = splitSections(contextMarkdown);
  const projectEntries = parseEntries(sections["Project Specification"] || "");
  const taskEntries = parseEntries(sections["Assigned Task"] || "");
  const agentEntries = parseEntries(sections["Agent Definition"] || "");
  const skillEntries = parseEntries(sections["Required Skills"] || "");
  const constraintEntries = parseEntries(sections["Constraints"] || "");
  const expectedEntries = parseEntries(sections["Expected Output"] || "");

  const agentName = getEntry(agentEntries, "Agent")?.value || "Specialized Agent";
  const purpose = getEntry(agentEntries, "Purpose")?.value || "";
  const responsibilities = getEntry(agentEntries, "Responsibilities")?.items || [];
  const agentConstraints = getEntry(agentEntries, "Constraints")?.items || [];
  const taskId = getEntry(taskEntries, "ID")?.value || "";
  const taskTitle = getEntry(taskEntries, "Title")?.value || "";
  const taskDescription = getEntry(taskEntries, "Description")?.value || "";
  const topLevelConstraints = constraintEntries.map((entry) => entry.value);
  const expectedOutput = expectedEntries.map((entry) => entry.value);

  return {
    role: `You are the ${agentName} for EPDC Site Factory. ${purpose}`,
    responsibilities: renderBullets(responsibilities),
    context: renderContext(projectEntries, taskEntries),
    task: `Use this assembled context package to address task ${taskId}: ${taskTitle}. ${taskDescription} Produce the outputs listed in the Expected Output section for this task.`,
    standards: renderStandards(skillEntries),
    constraints: renderMergedConstraints(agentConstraints, topLevelConstraints),
    expectedOutput: renderBullets(expectedOutput),
  };
}

export function applyTemplate(templateMarkdown, promptParts) {
  return templateMarkdown
    .replace("{{ROLE}}", promptParts.role)
    .replace("{{RESPONSIBILITIES}}", promptParts.responsibilities)
    .replace("{{CONTEXT}}", promptParts.context)
    .replace("{{TASK}}", promptParts.task)
    .replace("{{STANDARDS}}", promptParts.standards)
    .replace("{{CONSTRAINTS}}", promptParts.constraints)
    .replace("{{EXPECTED_OUTPUT}}", promptParts.expectedOutput);
}

export function buildPromptFromContext(contextMarkdown, templateMarkdown) {
  const promptParts = buildPromptParts(contextMarkdown);
  return `${applyTemplate(templateMarkdown, promptParts).trim()}\n`;
}

function resolveInput(arg) {
  const value = arg || "frontend";

  if (targetMap[value]) {
    return targetMap[value];
  }

  const absolutePath = path.isAbsolute(value) ? value : path.join(rootDir, value);

  if (!fs.existsSync(absolutePath)) {
    const supported = Object.keys(targetMap).join(", ");
    throw new Error(`Unknown prompt target or context path: ${value}. Supported targets: ${supported}`);
  }

  return {
    contextPath: path.relative(rootDir, absolutePath),
    templatePath: "prompt-builder/templates/frontend-template.md",
    outputPath: "generated-prompts/generated-custom-prompt.md",
  };
}

function main() {
  const target = resolveInput(process.argv[2]);

  if (!target.contextPath) {
    throw new Error(`No default context package is configured for target.`);
  }

  const contextMarkdown = readText(target.contextPath);
  const templateMarkdown = readText(target.templatePath);
  const finalPrompt = buildPromptFromContext(contextMarkdown, templateMarkdown);
  const outputPath = path.join(rootDir, target.outputPath);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, finalPrompt);

  console.log(outputPath);
}

if (process.argv[1] === __filename) {
  main();
}
