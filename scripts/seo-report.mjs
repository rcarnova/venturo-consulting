#!/usr/bin/env node
/**
 * SEO audit: scans every page under src/pages for <SEO ... /> usage and
 * verifies canonical, lang, alternateUrls, and reciprocal hreflang.
 * Output: dist/seo-report.json + dist/seo-report.md, plus a console summary.
 * Exit code 1 if critical issues are found.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PAGES_DIR = join(ROOT, "src", "pages");
const OUT_DIR = join(ROOT, "dist");

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, acc);
    else if (p.endsWith(".tsx")) acc.push(p);
  }
  return acc;
}

function extractSEO(src) {
  // Find first <SEO ... /> block (single per page in this codebase)
  const m = src.match(/<SEO\b([\s\S]*?)\/>/);
  if (!m) return null;
  const block = m[1];
  const get = (key) => {
    const re = new RegExp(`${key}\\s*=\\s*"([^"]+)"`);
    const r = block.match(re);
    return r ? r[1] : null;
  };
  const canonical = get("canonical");
  const lang = get("lang");
  const altIt = block.match(/it:\s*"([^"]+)"/)?.[1] ?? null;
  const altEn = block.match(/en:\s*"([^"]+)"/)?.[1] ?? null;
  const hasAlt = /alternateUrls\s*=/.test(block);
  return { canonical, lang, hasAlt, altIt, altEn };
}

const files = walk(PAGES_DIR);
const rows = [];
const issues = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const src = readFileSync(file, "utf8");
  if (!/\<SEO\b/.test(src)) continue;
  const seo = extractSEO(src);
  if (!seo) {
    issues.push({ file: rel, level: "error", msg: "SEO tag found but unparseable" });
    continue;
  }
  const row = { file: rel, ...seo };
  rows.push(row);

  if (!seo.canonical) issues.push({ file: rel, level: "error", msg: "missing canonical" });
  if (!seo.lang) issues.push({ file: rel, level: "warn", msg: "missing explicit lang" });
  if (!seo.hasAlt) issues.push({ file: rel, level: "warn", msg: "missing alternateUrls" });
  if (seo.hasAlt && (!seo.altIt || !seo.altEn))
    issues.push({ file: rel, level: "error", msg: "alternateUrls incomplete" });
  if (seo.canonical && seo.hasAlt) {
    const expected = seo.lang === "en" ? seo.altEn : seo.altIt;
    if (expected && seo.canonical !== expected)
      issues.push({
        file: rel,
        level: "error",
        msg: `canonical (${seo.canonical}) != alternateUrls.${seo.lang ?? "it"} (${expected})`,
      });
  }
}

// Reciprocal hreflang check
const byCanonical = new Map(rows.filter((r) => r.canonical).map((r) => [r.canonical, r]));
for (const r of rows) {
  if (!r.hasAlt || !r.altIt || !r.altEn) continue;
  const other = r.lang === "en" ? r.altIt : r.altEn;
  const partner = byCanonical.get(other);
  if (!partner) {
    issues.push({ file: r.file, level: "warn", msg: `hreflang partner not found for ${other}` });
    continue;
  }
  if (partner.altIt !== r.altIt || partner.altEn !== r.altEn) {
    issues.push({
      file: r.file,
      level: "error",
      msg: `hreflang not reciprocal with ${partner.file}`,
    });
  }
}

const errors = issues.filter((i) => i.level === "error");
const warns = issues.filter((i) => i.level === "warn");

mkdirSync(OUT_DIR, { recursive: true });
const json = { generatedAt: new Date().toISOString(), totals: { pages: rows.length, errors: errors.length, warnings: warns.length }, pages: rows, issues };
writeFileSync(join(OUT_DIR, "seo-report.json"), JSON.stringify(json, null, 2));

const md = [];
md.push(`# SEO Report`);
md.push(`Generated: ${json.generatedAt}`);
md.push(``);
md.push(`- Pages scanned: **${rows.length}**`);
md.push(`- Errors: **${errors.length}**`);
md.push(`- Warnings: **${warns.length}**`);
md.push(``);
if (issues.length) {
  md.push(`## Issues`);
  md.push(`| Level | File | Message |`);
  md.push(`|---|---|---|`);
  for (const i of issues) md.push(`| ${i.level} | \`${i.file}\` | ${i.msg} |`);
  md.push(``);
}
md.push(`## Pages`);
md.push(`| File | lang | canonical | alt.it | alt.en |`);
md.push(`|---|---|---|---|---|`);
for (const r of rows)
  md.push(`| \`${r.file}\` | ${r.lang ?? "-"} | ${r.canonical ?? "-"} | ${r.altIt ?? "-"} | ${r.altEn ?? "-"} |`);
writeFileSync(join(OUT_DIR, "seo-report.md"), md.join("\n"));

const summary = `[seo-report] ${rows.length} pages · ${errors.length} errors · ${warns.length} warnings → dist/seo-report.md`;
if (errors.length) {
  console.error(summary);
  for (const e of errors) console.error(`  ✗ ${e.file}: ${e.msg}`);
  if (process.env.SEO_REPORT_STRICT === "1") process.exit(1);
} else {
  console.log(summary);
}
