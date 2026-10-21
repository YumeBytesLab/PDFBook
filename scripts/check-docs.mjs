import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { docPath, groups, locales, slugs, ui } from "../src/i18n/site.mjs";

const root = resolve("dist");
const origin = "https://wiki.pdfbook.app";
const read = (path) => readFileSync(path, "utf8");
const walk = (path) => readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
  const child = join(path, entry.name);
  return entry.isDirectory() ? walk(child) : [child];
});
const attributes = (tag) => Object.fromEntries(
  [...tag.matchAll(/([\w:-]+)=(["'])(.*?)\2/g)].map((match) => [match[1], match[3]]),
);
const pages = walk(root).filter((path) => path.endsWith("index.html"));
const codes = Object.keys(locales);
const expectedPages = codes.length * slugs.length;
assert.equal(codes.length, 12);
assert.equal(pages.length, expectedPages, `Expected ${slugs.length} guides in each of ${codes.length} languages`);
assert.equal(walk("src/content/docs").filter(path => /\.mdx?$/.test(path)).length, expectedPages, "Every language must have its own source, without fallback pages");
const titles = new Map(codes.map(code => [code, new Set()]));
const descriptions = new Map(codes.map(code => [code, new Set()]));
const urls = new Set();
const searchTranslations = new Map(codes.map(code => [code, JSON.parse(read(`src/content/i18n/${locales[code].lang}.json`))]));
let links = 0;

for (const code of codes) {
  assert.equal(ui[code].nav.length, groups.flat().length, `Incomplete navigation: ${code}`);
  assert.equal(ui[code].groupNames.length, groups.length, `Incomplete guide groups: ${code}`);
  assert.equal(ui[code].steps.length, 3, `Incomplete getting-started sequence: ${code}`);
  assert.equal(Object.keys(searchTranslations.get(code)).length, 10, `Incomplete search translations: ${code}`);
  for (const slug of slugs) {
    const source = join("src/content/docs", code === "en" ? "" : code, slug ? `${slug}.md` : "index.mdx");
    assert(existsSync(source), `Missing native guide: ${source}`);
    const content = read(source);
    assert(!/\{\{|\(@\/|@(?:site|legal)\b/.test(content), `Unresolved authoring placeholder: ${source}`);
    if (slug) {
      assert(content.length > 600 && (content.match(/^## /gm) ?? []).length >= 3, `Guide needs complete instructions: ${source}`);
      if (["features/library", "plans-and-licenses", "faq"].includes(slug)) assert(content.includes("50"), `Missing free library limit: ${source}`);
      if (["features/reader", "plans-and-licenses", "faq"].includes(slug)) assert(content.includes("60"), `Missing Floating Reader allowance: ${source}`);
      if (slug === "plans-and-licenses") assert(content.includes("14"), `Missing offline license allowance: ${source}`);
      if (slug === "features/ai-assistant") assert(content.includes("Gemini") && content.includes("Ollama"), `Missing implemented AI providers: ${source}`);
    }
  }
}

for (const path of pages) {
  const html = read(path);
  const route = relative(root, dirname(path)).replaceAll("\\", "/");
  const first = route.split("/")[0];
  const code = codes.includes(first) ? first : "en";
  const slug = code === "en" ? route : route.split("/").slice(1).join("/");
  assert(slugs.includes(slug), `Unexpected guide: ${route}`);
  const url = `${origin}/${route ? `${route}/` : ""}`;
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attributes(match[0]));
  const value = (key) => meta.find((item) => item.name === key || item.property === key)?.content;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.get(code).has(title), `Missing or duplicate title within language: ${route}`);
  titles.get(code).add(title);
  const description = value("description");
  assert(description && !descriptions.get(code).has(description), `Missing or duplicate description within language: ${route}`);
  descriptions.get(code).add(description);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((match) => attributes(match[0])).filter((item) => item.rel === "canonical");
  assert.equal(canonical.length, 1, `Expected one canonical: ${route}`);
  assert.equal(canonical[0].href, url, `Canonical mismatch: ${route}`);
  assert.equal(value("og:url"), url, `Open Graph URL mismatch: ${route}`);
  assert.equal(value("og:image"), `${origin}/images/library-en.webp`);
  assert.equal(value("twitter:image"), value("og:image"));
  assert(!value("robots")?.includes("noindex"), `Unexpected noindex: ${route}`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Expected one H1: ${route}`);
  assert.equal(html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1], locales[code].lang, `Wrong page language: ${route}`);
  assert.equal(attributes(html.match(/<main\b[^>]*>/)?.[0] ?? "").lang, locales[code].lang, `Content language fallback: ${route}`);
  const searchData = attributes(html.match(/<site-search\b[^>]*>/)?.[0] ?? "")["data-translations"];
  assert(searchData, `Missing localized search: ${route}`);
  const search = JSON.parse(searchData.replaceAll("&quot;", '"').replaceAll("&amp;", "&"));
  for (const [key, text] of Object.entries(searchTranslations.get(code))) {
    assert.equal(search[key.replace("pagefind.", "")], text, `Search translation fallback: ${route} ${key}`);
  }
  const alternates = [...html.matchAll(/<link\b[^>]*>/g)].map(match => attributes(match[0])).filter(item => item.rel === "alternate" && item.hreflang);
  for (const translation of codes) {
    assert(alternates.some(item => item.hreflang === locales[translation].lang && item.href === `${origin}${docPath(translation, slug)}`), `Missing equivalent-language URL: ${route} -> ${translation}`);
  }
  urls.add(url);

  for (const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
    const attrs = attributes(match[0]);
    let target = attrs.href ?? attrs.src;
    if (target?.startsWith(origin)) target = target.slice(origin.length);
    if (!target?.startsWith("/") || target.startsWith("//")) continue;
    const pathname = decodeURIComponent(target.split(/[?#]/)[0]);
    const file = join(root, pathname);
    assert(existsSync(pathname.endsWith("/") ? join(file, "index.html") : file), `Broken local asset or link: ${route} -> ${target}`);
    if (match[0].startsWith("<img")) assert(attrs.alt?.trim() || pathname === "/images/app-icon.png", `Image needs descriptive alt text: ${route}`);
    if (pathname.endsWith("/") && !attrs.hreflang) {
      const segment = pathname.split("/")[1];
      const targetCode = codes.includes(segment) ? segment : "en";
      assert.equal(targetCode, code, `Guide link leaves its language: ${route} -> ${target}`);
    }
    links++;
  }
}

for (const path of walk(root).filter(path => path.endsWith(".css"))) {
  for (const match of read(path).matchAll(/url\((["']?)([^"')]+)\1\)/g)) {
    const target = match[2];
    if (/^(?:https?:|data:)/.test(target)) continue;
    const pathname = decodeURIComponent(target.split(/[?#]/)[0]);
    assert(existsSync(pathname.startsWith("/") ? join(root, pathname) : resolve(dirname(path), pathname)), `Missing CSS asset: ${path} -> ${target}`);
  }
}

const sitemapUrls = [...read(join(root, "sitemap-0.xml")).matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(new Set(sitemapUrls), urls, "Sitemap must contain exactly the canonical documentation pages");
assert(read(join(root, "robots.txt")).includes(`${origin}/sitemap-index.xml`));
const readmes = [
  "README.md", "README.ja.md", "readme/README.zh-CN.md", "readme/README.ko.md",
  "readme/README.es.md", "readme/README.fr.md", "readme/README.de.md", "readme/README.pt-BR.md",
  "readme/README.ru.md", "readme/README.it.md", "readme/README.id.md", "readme/README.vi.md",
];
for (const path of readmes) {
  const markdown = read(path);
  const htmlTags = [...markdown.matchAll(/<(?:a|img)\b[^>]*>/g)];
  const targets = [
    ...[...markdown.matchAll(/!?\[[^\]\n]*\]\(([^\s)]+)\)/g)].map((match) => match[1]),
    ...htmlTags.map((match) => {
      const attrs = attributes(match[0]);
      if (match[0].startsWith("<img")) assert(attrs.alt?.trim(), `README image needs alt text: ${path}`);
      return attrs.href ?? attrs.src;
    }),
  ].filter(Boolean);
  const localTargets = targets.filter((target) => !/^(?:https?:|#)/.test(target))
    .map((target) => resolve(dirname(path), decodeURIComponent(target.split(/[?#]/)[0])));
  for (const target of localTargets) assert(existsSync(target), `Broken README link: ${path} -> ${target}`);
  for (const translation of readmes) {
    assert(localTargets.includes(resolve(translation)), `Missing language link: ${path} -> ${translation}`);
  }
  assert.equal((markdown.match(/<h1\b/g) ?? []).length, 1, `Expected one README H1: ${path}`);
  assert(!/@(?:ASSETS|ROOT|READER_ALT|RELEASE)@/.test(markdown), `Unresolved README placeholder: ${path}`);
  assert(markdown.includes('query=%24.installerDownloads') && markdown.includes('alt="Total downloads"'), `Missing cumulative download badge: ${path}`);
  assert(!markdown.includes('#pricing'), `Keep pricing promotion out of the README: ${path}`);
}
console.log(`Documentation checks passed: ${pages.length} native pages in ${codes.length} languages, ${links} local references, equivalent-language URLs, CSS assets, canonical sitemap and ${readmes.length} READMEs.`);
