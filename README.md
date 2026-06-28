# PDFBook

Public documentation and release downloads for **PDFBook** — a fast, private desktop
app to read, create, extract, and organize your PDF library on Windows, macOS, and Linux.

- 📖 Documentation & guides: <https://wiki.pdfbook.app>
- ⬇️ Downloads: the [Releases](https://github.com/YumeBytesLab/PDFBook/releases) page

## About this repository

This repository serves two purposes:

1. **Documentation site** — the source for <https://wiki.pdfbook.app>, built with
   [Astro Starlight](https://starlight.astro.build) and deployed to GitHub Pages.
2. **Release distribution** — installers for every platform are published to the
   GitHub Releases of this repository.

## Working on the docs

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into ./dist
```

Pages live in `src/content/docs/` — English at the root, Japanese under `ja/`.
A page with no Japanese translation falls back to English automatically.
