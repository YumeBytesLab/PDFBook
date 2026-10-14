# Working on the documentation

This repository contains the public documentation and release downloads. The desktop application's source is maintained separately.

## Local development

Use Node.js 22.12 or newer supported by the installed Astro version.

```sh
npm ci
npm run dev
npm run build
```

English pages are in `src/content/docs/`; Japanese translations are in `src/content/docs/ja/`. Keep equivalent pages linked and update both languages when a product fact changes.

## Content standards

- Verify features and plan limits against the shipping application. Do not promise unimplemented tools, unmeasured performance, or unreleased Store availability.
- Use real application screenshots with descriptive alt text. Keep their version and origin in `public/images/README.md`.
- Keep product links on `pdfbook.app`, documentation links on `wiki.pdfbook.app`, and installers under this repository's Releases.
- Run the production build and check links, titles, descriptions, canonical URLs, and installation instructions before publishing.
- Keep credentials, private documents, submission packages, and local reports out of commits.

## Commits and pull requests

Use short English subjects that describe the change: `docs: clarify Windows installation`, `ci: validate documentation`, or `chore(deps): update documentation dependencies`.

Keep changes focused. Do not append automatic AI co-author trailers or generated promotional footers. Credit human co-authors when their contribution warrants it.

For bugs and requests about the desktop app, use [Issues](https://github.com/YumeBytesLab/PDFBook/issues). For vulnerabilities, follow [the security policy](../SECURITY.md).
