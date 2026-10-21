# Working on the documentation

This repository contains the public documentation and release downloads. The desktop application's source is maintained separately.

## Local development

Use the Node.js version pinned in `.node-version`, shared by CI and Cloudflare Workers Builds.

```sh
npm ci
npm run dev
npm run build
```

English pages are in `src/content/docs/`; translations are in the `ja`, `zh`, `ko`, `es`, `fr`, `de`, `pt`, `ru`, `it`, `id`, and `vi` subdirectories. Every language has the same 13 pages. Update all languages when a product fact changes and keep article links within the current language.

Homepage and navigation text is in `src/i18n/site.mjs`. Search result messages are in `src/content/i18n/`, keyed by BCP-47 language tag. Keep both sets complete for all 12 languages.

The product introductions are also available in 12 languages: `README.md` (English), `README.ja.md` (Japanese), and ten translations under `readme/`. Every introduction must link to all 12 languages and to its corresponding Wiki language. Keep interface control names consistent with the shipping app's translation. Chinese is Simplified Chinese; Portuguese is Brazilian Portuguese.

## Content standards

- Verify features and plan limits against the shipping application. Do not promise unimplemented tools, unmeasured performance, or unreleased Store availability.
- Use real application screenshots with descriptive alt text. Keep their version and origin in `public/images/README.md`.
- Keep README introductions focused on features, installation and documentation. Pricing and plan comparisons belong on the product website and relevant guides. Keep the closed-source disclosure clear and publisher attribution understated.
- Write natural sentences instead of joining clauses with semicolons. Link to screenshot provenance rather than explaining old release numbers in the introduction.
- Keep the README download badge based on archived plus current installer requests from the public release metadata API. GitHub's remaining-release counter alone loses retired downloads.
- Publish release notes in English, using the versioned source in the desktop repository.
- Keep product links on `pdfbook.app`, documentation links on `wiki.pdfbook.app`, and installers under this repository's Releases.
- Run `npm run check:docs` to validate all 156 native pages, metadata, 12-language equivalents, language-scoped links, assets, sitemap and README links. Missing source translations must fail the check; do not publish English fallback pages as translations.
- Keep credentials, private documents, submission packages, and local reports out of commits.

## Commits and pull requests

Use short English subjects that describe the change: `docs: clarify Windows installation`, `ci: validate documentation`, or `chore(deps): update documentation dependencies`.

Keep changes focused. Do not append automatic AI co-author trailers or generated promotional footers. Credit human co-authors when their contribution warrants it.

For bugs and requests about the desktop app, use [Issues](https://github.com/YumeBytesLab/PDFBook/issues). For vulnerabilities, follow [the security policy](../SECURITY.md).

## Cloudflare Workers deployment

The existing `pdfbook-wiki` Worker serves this static Astro site through Workers Builds:

| Setting | Value |
| --- | --- |
| Repository | `YumeBytesLab/PDFBook` |
| Production branch | `main` |
| Worker | `pdfbook-wiki` |
| Root directory | `/` |
| Build command | `npm run check:docs` |
| Deploy command | `npx wrangler deploy` |
| Static assets directory | `dist` |
| Node.js | `.node-version` |

No server adapter, runtime bindings or application secrets are required. Keep `https://wiki.pdfbook.app` as the production origin in Astro, metadata and the sitemap. When reconnecting Git integration, select the current repository ID and preserve the existing Worker, custom domain and DNS. Preserve the generated `404.html`; do not add an SPA catch-all rewrite.

References: [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), [Builds API](https://developers.cloudflare.com/workers/ci-cd/builds/api-reference/), [static assets](https://developers.cloudflare.com/workers/static-assets/).
