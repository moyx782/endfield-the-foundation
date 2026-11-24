import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

fs.rmSync(DIST, { recursive: true, force: true });
fs.mkdirSync(DIST, { recursive: true });

const rootFiles = [
  "index.html",
  "promo_poster_ai_concept.png",
  "promo_poster_pantheon_4k.png",
  "promo_character_dossier_grid.png",
  "《明日方舟：终末地》特别映像「基石」深度角色分析与美学考究.md"
];

for (const file of rootFiles) {
  const src = path.join(ROOT, file);
  if (!fs.existsSync(src)) {
    throw new Error(`Missing required root file: ${file}`);
  }
  fs.copyFileSync(src, path.join(DIST, file));
}

fs.mkdirSync(path.join(DIST, "web", "media"), { recursive: true });

for (const f of ["web/app.js", "web/styles.css", "web/cipher-svg.js"]) {
  fs.copyFileSync(path.join(ROOT, f), path.join(DIST, f));
}

fs.cpSync(path.join(ROOT, "web", "fonts"), path.join(DIST, "web", "fonts"), { recursive: true });
fs.cpSync(path.join(ROOT, "web", "assets"), path.join(DIST, "web", "assets"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "web", "media", "pv_web.mp4"), path.join(DIST, "web", "media", "pv_web.mp4"));

let totalFiles = 0;
let rawPngs = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else {
      totalFiles += 1;
      if (full.includes(`${path.sep}raw${path.sep}`) && entry.name.endsWith(".png")) {
        rawPngs += 1;
      }
    }
  }
}
walk(DIST);

if (fs.existsSync(path.join(DIST, "web", "media", "pv_local_4k.mp4"))) {
  throw new Error("pv_local_4k.mp4 must not be copied into dist/");
}
if (rawPngs !== 53) {
  throw new Error(`Expected 53 RAW PNGs in dist/, found ${rawPngs}`);
}

console.log(`Built dist/ successfully: ${totalFiles} files (${rawPngs} RAW 4K PNGs)`);
