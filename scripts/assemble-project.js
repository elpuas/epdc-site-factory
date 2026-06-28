import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const STARTER_DEFAULT = "astro-minimal";
const FACTORY_VERSION = JSON.parse(
  fs.readFileSync(path.join(rootDir, "package.json"), "utf8"),
).version;

const blueprintContracts = {
  dentist: {
    templateProject: "dental-demo",
    requiredBlueprintFolders: [
      "assets",
      "components",
      "layouts",
      "pages",
      "patterns",
      "placeholders",
    ],
    requiredBlueprintFiles: [
      "README.md",
      "types.ts",
      "layouts/DentistLayout.astro",
      "pages/index.astro",
      "pages/about.astro",
      "pages/services.astro",
      "pages/service-detail.astro",
      "pages/doctors.astro",
      "pages/blog.astro",
      "pages/blog-post.astro",
      "pages/faq.astro",
      "pages/contact.astro",
      "pages/privacy-policy.astro",
    ],
    requiredProjectDataFiles: [
      "about.ts",
      "blog.ts",
      "doctors.ts",
      "faq.ts",
      "footer.ts",
      "hero.ts",
      "locations.ts",
      "navigation.ts",
      "privacy.ts",
      "schema.ts",
      "seo.ts",
      "services.ts",
      "site.ts",
      "testimonials.ts",
    ],
    requiredProjectPages: [
      "index.astro",
      "about.astro",
      "services.astro",
      "service-detail.astro",
      "doctors.astro",
      "blog.astro",
      "blog-post.astro",
      "faq.astro",
      "contact.astro",
      "privacy-policy.astro",
    ],
    placeholderAssets: [
      "placeholder-hero.svg",
      "placeholder-doctor.svg",
      "placeholder-blog.svg",
      "placeholder-badge.svg",
    ],
  },
};

class AssemblyError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssemblyError";
  }
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const positional = [];
  const options = {
    starter: STARTER_DEFAULT,
    blueprint: "",
    project: "",
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }

    const key = arg.slice(2);
    const value = args[index + 1];

    if (!value || value.startsWith("--")) {
      throw new AssemblyError(`Missing value for --${key}.`);
    }

    if (!(key in options)) {
      throw new AssemblyError(`Unknown option: --${key}.`);
    }

    options[key] = value;
    index += 1;
  }

  if (!options.blueprint && positional[0]) {
    options.blueprint = positional[0];
  }

  if (!options.project && positional[1]) {
    options.project = positional[1];
  }

  if (!options.blueprint || !options.project) {
    throw new AssemblyError(
      "Usage: npm run create-project <blueprint> <project-name> or node scripts/assemble-project.js --starter astro-minimal --blueprint dentist --project demo-clinic",
    );
  }

  return options;
}

function assertPathExists(targetPath, message) {
  if (!fs.existsSync(targetPath)) {
    throw new AssemblyError(message);
  }
}

function assertDirectory(targetPath, message) {
  assertPathExists(targetPath, message);

  if (!fs.statSync(targetPath).isDirectory()) {
    throw new AssemblyError(message);
  }
}

function copyDirectory(sourcePath, targetPath) {
  fs.cpSync(sourcePath, targetPath, {
    recursive: true,
    force: true,
  });
}

function replaceImportsInDirectory(directoryPath, fromValue, toValue) {
  const entries = fs.readdirSync(directoryPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      replaceImportsInDirectory(entryPath, fromValue, toValue);
      continue;
    }

    const content = fs.readFileSync(entryPath, "utf8");
    fs.writeFileSync(entryPath, content.replaceAll(fromValue, toValue));
  }
}

function toTitleCase(value) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function writeJson(targetPath, payload) {
  fs.writeFileSync(targetPath, `${JSON.stringify(payload, null, 2)}\n`);
}

function writeProjectReadme(targetPath, { blueprint, project, starter }) {
  const projectTitle = toTitleCase(project);

  const content = `# ${projectTitle}

\`projects/${project}/\` is an assembled EPDC project created by the deterministic Project Assembly Engine.

It combines:

- the \`${starter}\` starter
- the \`${blueprint}\` blueprint
- placeholder project data derived from \`projects/${blueprintContracts[blueprint].templateProject}/\`
- placeholder assets copied into \`public/images/\`

## Commands

Run all commands from the project root:

\`\`\`sh
npm install
npm run dev
npm run build
npm run preview
\`\`\`

## Assembly Notes

- \`project.json\` is the canonical assembly manifest.
- \`blueprints/${blueprint}/\` is copied into the generated project so the project remains self-contained.
- \`src/data/\` owns the placeholder business content and page metadata.
- \`src/pages/\` owns the route files that compose project data with the copied blueprint.
`;

  fs.writeFileSync(targetPath, `${content}\n`);
}

function validateAssembly({
  blueprint,
  blueprintPath,
  manifestPath,
  projectPath,
  starterPath,
}) {
  const contract = blueprintContracts[blueprint];
  const requiredProjectFolders = [
    "src",
    "src/data",
    "src/layouts",
    "src/pages",
    "src/styles",
    "public",
    "public/images",
    `blueprints/${blueprint}`,
  ];
  const requiredStarterFiles = [
    "package.json",
    "astro.config.mjs",
    "tsconfig.json",
    ".gitignore",
    "src/layouts/BaseLayout.astro",
    "src/styles/global.css",
  ];

  assertDirectory(starterPath, `Starter directory missing: ${starterPath}`);
  assertDirectory(blueprintPath, `Blueprint directory missing: ${blueprintPath}`);

  for (const folder of contract.requiredBlueprintFolders) {
    assertDirectory(
      path.join(projectPath, "blueprints", blueprint, folder),
      `Required blueprint folder missing from assembled project: blueprints/${blueprint}/${folder}`,
    );
  }

  for (const folder of requiredProjectFolders) {
    assertDirectory(
      path.join(projectPath, folder),
      `Required project folder missing from assembled project: ${folder}`,
    );
  }

  for (const file of requiredStarterFiles) {
    assertPathExists(
      path.join(projectPath, file),
      `Required starter file missing from assembled project: ${file}`,
    );
  }

  for (const file of contract.requiredBlueprintFiles) {
    assertPathExists(
      path.join(projectPath, "blueprints", blueprint, file),
      `Required blueprint file missing from assembled project: blueprints/${blueprint}/${file}`,
    );
  }

  for (const file of contract.requiredProjectDataFiles) {
    assertPathExists(
      path.join(projectPath, "src", "data", file),
      `Required project data file missing from assembled project: src/data/${file}`,
    );
  }

  for (const file of contract.requiredProjectPages) {
    assertPathExists(
      path.join(projectPath, "src", "pages", file),
      `Required project page missing from assembled project: src/pages/${file}`,
    );
  }

  for (const file of contract.placeholderAssets) {
    assertPathExists(
      path.join(projectPath, "public", "images", file),
      `Required placeholder asset missing from assembled project: public/images/${file}`,
    );
  }

  assertPathExists(manifestPath, "Project manifest was not generated.");
}

function assembleProject({ starter, blueprint, project }) {
  const blueprintContract = blueprintContracts[blueprint];

  if (!blueprintContract) {
    throw new AssemblyError(`Unsupported blueprint: ${blueprint}.`);
  }

  const starterPath = path.join(rootDir, "starters", starter);
  const blueprintPath = path.join(rootDir, "blueprints", blueprint);
  const templateProjectPath = path.join(
    rootDir,
    "projects",
    blueprintContract.templateProject,
  );
  const projectPath = path.join(rootDir, "projects", project);
  const manifestPath = path.join(projectPath, "project.json");

  assertDirectory(starterPath, `Starter does not exist: starters/${starter}`);
  assertDirectory(blueprintPath, `Blueprint does not exist: blueprints/${blueprint}`);
  assertDirectory(
    templateProjectPath,
    `Template project does not exist: projects/${blueprintContract.templateProject}`,
  );

  if (fs.existsSync(projectPath)) {
    throw new AssemblyError(`Target project already exists: projects/${project}`);
  }

  copyDirectory(starterPath, projectPath);
  copyDirectory(
    blueprintPath,
    path.join(projectPath, "blueprints", blueprint),
  );
  copyDirectory(
    path.join(templateProjectPath, "src", "data"),
    path.join(projectPath, "src", "data"),
  );
  copyDirectory(
    path.join(templateProjectPath, "src", "pages"),
    path.join(projectPath, "src", "pages"),
  );
  copyDirectory(
    path.join(templateProjectPath, "public", "images"),
    path.join(projectPath, "public", "images"),
  );

  replaceImportsInDirectory(
    path.join(projectPath, "src", "data"),
    "../../../../blueprints/",
    "../../blueprints/",
  );
  replaceImportsInDirectory(
    path.join(projectPath, "src", "pages"),
    "../../../../blueprints/",
    "../../blueprints/",
  );

  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  packageJson.name = `epdc-${project}`;
  writeJson(packageJsonPath, packageJson);

  writeProjectReadme(path.join(projectPath, "README.md"), {
    blueprint,
    project,
    starter,
  });

  writeJson(manifestPath, {
    name: project,
    starter,
    blueprint,
    factoryVersion: FACTORY_VERSION,
    generatedAt: new Date().toISOString(),
    status: "assembled",
  });

  validateAssembly({
    blueprint,
    blueprintPath,
    manifestPath,
    projectPath,
    starterPath,
  });

  return {
    blueprint,
    project,
    projectPath,
    starter,
  };
}

function printSummary(result) {
  console.log("Project assembly complete.");
  console.log(`- project: ${result.project}`);
  console.log(`- starter: ${result.starter}`);
  console.log(`- blueprint: ${result.blueprint}`);
  console.log(`- output: ${path.relative(rootDir, result.projectPath)}`);
  console.log("- status: assembled");
}

try {
  const options = parseArgs(process.argv);
  const result = assembleProject(options);
  printSummary(result);
} catch (error) {
  if (error instanceof AssemblyError) {
    console.error(`Assembly failed: ${error.message}`);
    process.exitCode = 1;
  } else {
    throw error;
  }
}
