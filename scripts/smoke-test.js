const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const indexPath = path.join(distDir, "index.html");
const infoPath = path.join(distDir, "build-info.json");

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html fehlt. Wurde der Build ausgeführt?");
}

if (!fs.existsSync(infoPath)) {
  throw new Error("dist/build-info.json fehlt.");
}

const html = fs.readFileSync(indexPath, "utf8");

if (!html.includes("automatisch gebaut")) {
  throw new Error("Erwarteter Text wurde im Build-Ergebnis nicht gefunden.");
}

console.log("Smoke-Test erfolgreich.");

