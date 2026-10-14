import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

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
assert.equal(pages.length, 18, "Expected nine English and nine Japanese documentation pages");
const titles = new Set();
const descriptions = new Set();
const urls = new Set();
let links = 0;

for (const path of pages) {
  const html = read(path);
  const route = relative(root, dirname(path)).replaceAll("\\", "/");
  const url = `${origin}/${route ? `${route}/` : ""}`;
  const meta = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attributes(match[0]));
  const value = (key) => meta.find((item) => item.name === key || item.property === key)?.content;
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Missing or duplicate title: ${route}`);
  titles.add(title);
  const description = value("description");
  assert(description && !descriptions.has(description), `Missing or duplicate description: ${route}`);
  descriptions.add(description);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)]
    .map((match) => attributes(match[0])).filter((item) => item.rel === "canonical");
  assert.equal(canonical.length, 1, `Expected one canonical: ${route}`);
  assert.equal(canonical[0].href, url, `Canonical mismatch: ${route}`);
  assert.equal(value("og:url"), url, `Open Graph URL mismatch: ${route}`);
  assert.equal(value("og:image"), `${origin}/images/library-en.webp`);
  assert.equal(value("twitter:image"), value("og:image"));
  assert(!value("robots")?.includes("noindex"), `Unexpected noindex: ${route}`);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Expected one H1: ${route}`);
  assert.equal(html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1], route.startsWith("ja") ? "ja" : "en");
  assert(html.includes('hreflang="en"') && html.includes('hreflang="ja"'), `Missing language links: ${route}`);
  assert(!html.includes('data-has-language-fallback'), `Unexpected untranslated page: ${route}`);
  urls.add(url);

  for (const match of html.matchAll(/<(?:a|img|script|link)\b[^>]*>/g)) {
    const attrs = attributes(match[0]);
    let target = attrs.href ?? attrs.src;
    if (target?.startsWith(origin)) target = target.slice(origin.length);
    if (!target?.startsWith("/") || target.startsWith("//")) continue;
    const pathname = decodeURIComponent(target.split(/[?#]/)[0]);
    const file = join(root, pathname);
    assert(existsSync(pathname.endsWith("/") ? join(file, "index.html") : file), `Broken local asset or link: ${route} -> ${target}`);
    if (match[0].startsWith("<img")) assert(attrs.alt?.trim(), `Image needs descriptive alt text: ${route}`);
    links++;
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
}
console.log(`Documentation checks passed: ${pages.length} pages, ${links} local references, unique metadata, canonical sitemap and ${readmes.length} READMEs with complete language links.`);
