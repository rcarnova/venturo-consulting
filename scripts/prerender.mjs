#!/usr/bin/env node
/**
 * Static prerender for the Vite SPA.
 *
 * Reads public/sitemap.xml, spins up a tiny static server over /dist,
 * navigates each route with Playwright (Chromium), waits for network
 * idle and React hydration, then writes the fully-rendered HTML to
 * dist/<route>/index.html.
 *
 * The result: bots that don't execute JS (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended, etc.) get real content instead of
 * an empty SPA shell.
 */
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const DIST = join(ROOT, "dist");
const SITEMAP = join(DIST, "sitemap.xml");
const ORIGIN = "https://venturoconsulting.it";
const PORT = 4321;

// ---------- 1. Parse sitemap ----------
async function getRoutes() {
  const xml = await readFile(SITEMAP, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const routes = new Set();
  for (const url of locs) {
    if (!url.startsWith(ORIGIN)) continue;
    let path = url.slice(ORIGIN.length) || "/";
    if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
    routes.add(path);
  }
  return [...routes];
}

// ---------- 2. Tiny static server with SPA fallback ----------
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

async function serveFile(filePath) {
  try {
    const st = await stat(filePath);
    if (!st.isFile()) return null;
    const data = await readFile(filePath);
    return { data, type: MIME[extname(filePath).toLowerCase()] || "application/octet-stream" };
  } catch {
    return null;
  }
}

function startServer() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    let filePath = join(DIST, urlPath);
    let file = await serveFile(filePath);
    if (!file && !extname(urlPath)) {
      file = await serveFile(join(DIST, urlPath, "index.html"));
    }
    if (!file) file = await serveFile(join(DIST, "index.html")); // SPA fallback
    if (!file) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "content-type": file.type });
    res.end(file.data);
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

// ---------- 3. Prerender each route ----------
async function main() {
  let chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch (e) {
    console.error("[prerender] playwright not installed — skipping prerender step.");
    console.error("            install with: npm i -D playwright && npx playwright install chromium");
    process.exit(0);
  }

  const routes = await getRoutes();
  console.log(`[prerender] Found ${routes.length} routes in sitemap.xml`);

  const server = await startServer();
  let browser;
  try {
    browser = await chromium.launch();
  } catch (e) {
    console.error("[prerender] Could not launch Chromium:", e.message);
    console.error("            run: npx playwright install chromium");
    server.close();
    process.exit(0);
  }

  const ctx = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (compatible; VenturoPrerender/1.0; +https://venturoconsulting.it)",
  });
  const page = await ctx.newPage();

  let ok = 0;
  let fail = 0;
  for (const route of routes) {
    const target = `http://127.0.0.1:${PORT}${route}`;
    try {
      await page.goto(target, { waitUntil: "networkidle", timeout: 30_000 });
      // Give React Helmet / lazy components a final tick
      await page.waitForFunction(
        () => document.querySelector("main, h1, article") !== null,
        { timeout: 10_000 }
      ).catch(() => {});
      const html = await page.content();
      const outDir =
        route === "/" ? DIST : join(DIST, route.replace(/^\//, ""));
      await mkdir(outDir, { recursive: true });
      await writeFile(join(outDir, "index.html"), html, "utf8");
      ok++;
      process.stdout.write(`  ✓ ${route}\n`);
    } catch (e) {
      fail++;
      process.stdout.write(`  ✗ ${route}  (${e.message})\n`);
    }
  }

  await browser.close();
  server.close();
  console.log(`[prerender] Done. ${ok} ok, ${fail} failed.`);
  if (fail > 0) process.exitCode = 0; // don't break the build
}

main().catch((e) => {
  console.error("[prerender] Fatal:", e);
  process.exit(0); // never break the build
});
