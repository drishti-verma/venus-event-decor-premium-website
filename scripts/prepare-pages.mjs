import { copyFile, mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const repositoryName = "venus-event-decor-premium-website";
const basePath = process.env.GITHUB_ACTIONS === "true" ? `/${repositoryName}` : "";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(fullPath)));
    else files.push(fullPath);
  }

  return files;
}

function prefixRootRelativeUrls(content) {
  if (!basePath) return content;

  const escapedBasePath = basePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const rootRelativeAttribute = new RegExp(
    `(href|src|action|poster)=(['\"])/(?!${escapedBasePath.slice(2)}(?:/|['\"]))`,
    "g"
  );

  return content.replace(rootRelativeAttribute, `$1=$2${basePath}/`);
}

const files = await walk(outputDirectory);
const textExtensions = new Set([".html", ".css", ".js", ".json", ".xml", ".txt"]);

for (const file of files) {
  if (!textExtensions.has(path.extname(file))) continue;
  const original = await readFile(file, "utf8");
  const updated = prefixRootRelativeUrls(original);
  if (updated !== original) await writeFile(file, updated);
}

await writeFile(path.join(outputDirectory, ".nojekyll"), "");

const indexPath = path.join(outputDirectory, "index.html");
const fallbackPath = path.join(outputDirectory, "404.html");
try {
  await copyFile(indexPath, fallbackPath);
} catch {
  await mkdir(outputDirectory, { recursive: true });
}

console.log(`GitHub Pages output prepared${basePath ? ` for ${basePath}` : ""}.`);
