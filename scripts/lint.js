const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const requiredFiles = [
  "src/index.html",
  "src/style.css",
  "scripts/build.js",
  "scripts/smoke-test.js"
];

for (const file of requiredFiles) {
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Pflichtdatei fehlt: ${file}`);
  }
}

const html = fs.readFileSync(path.join(root, "src/index.html"), "utf8");

if (!html.includes("<!doctype html>")) {
  throw new Error("index.html braucht <!doctype html>.");
}

if (!html.includes("</html>")) {
  throw new Error("index.html ist nicht vollständig geschlossen.");
}

console.log("Lint-Prüfung erfolgreich.");

