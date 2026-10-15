# Working on the documentation

This repository contains the public documentation and release downloads. The desktop application's source is maintained separately.

## Local development

Use Node.js 22.12 or newer supported by the installed Astro version.

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
- Keep product links on `pdfbook.app`, documentation links on `wiki.pdfbook.app`, and installers under this repository's Releases.
- Run `npm run check:docs` to validate all 156 native pages, metadata, 12-language equivalents, language-scoped links, assets, sitemap and README links. Missing source translations must fail the check; do not publish English fallback pages as translations.
- Keep credentials, private documents, submission packages, and local reports out of commits.

## Commits and pull requests

Use short English subjects that describe the change: `docs: clarify Windows installation`, `ci: validate documentation`, or `chore(deps): update documentation dependencies`.

Keep changes focused. Do not append automatic AI co-author trailers or generated promotional footers. Credit human co-authors when their contribution warrants it.

For bugs and requests about the desktop app, use [Issues](https://github.com/YumeBytesLab/PDFBook/issues). For vulnerabilities, follow [the security policy](../SECURITY.md).
