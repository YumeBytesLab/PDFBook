# PDFBook — read, create, extract & organize your PDF library

PDFBook is a desktop app for reading and managing large PDF collections — books,
papers, manuals, manga, and scans — on Windows, macOS, and Linux. It runs entirely
on your computer: no account is needed to read, and your library never leaves your
device.

![Windows](https://img.shields.io/badge/Windows-x64%20%7C%20arm64-555?logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-Apple%20Silicon%20%7C%20Intel-555?logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-AppImage%20%7C%20deb-555?logo=linux&logoColor=white)

**[⬇ Download](https://github.com/YumeBytesLab/PDFBook/releases/latest)** ·
**[📖 Documentation](https://wiki.pdfbook.app)** ·
**[🌐 Website](https://pdfbook.app)**

---

## Download for Windows, macOS & Linux

Get the latest build from the [Releases](https://github.com/YumeBytesLab/PDFBook/releases/latest)
page, or read the [download guide](https://wiki.pdfbook.app/download/).

- **Windows** — installer or portable build (x64 / arm64), also on the Microsoft Store.
- **macOS** — DMG for Apple Silicon (M1/M2/M3 and newer) and Intel Macs.
- **Linux** — AppImage or `.deb` (x64 / arm64).

## Features

### A reader built for long sessions
Page-flip and vertical-scroll modes, **right-to-left (manga) reading**, in-document
text search, bookmarks, zoom, and reading-position memory that reopens each book where
you left off. Password-protected PDFs and a distraction-free focus mode are supported.
See the [reader guide](https://wiki.pdfbook.app/features/reader/).

### A library that stays organized
Point PDFBook at folders of PDFs and it keeps your catalog in sync. Sort and filter by
**tags, ratings, favorites, and reading status**, add notes per book, and browse covers
in grid or list view. See the [library guide](https://wiki.pdfbook.app/features/library/).

### Create and extract PDFs
Build a PDF from images or pages, convert other document formats, and pull selected pages
out into a new file — all locally. See [creating PDFs](https://wiki.pdfbook.app/features/creating-pdfs/).

### Capture pages from the screen
Turn pages shown in another app into a PDF, with automatic page-turning on Windows.
See [screen capture](https://wiki.pdfbook.app/features/screen-capture/).

### Optional AI assistant
Ask questions about the page you're reading, using a provider you choose — **Ollama**
(local), OpenAI, Claude, or OpenRouter. See the [AI assistant guide](https://wiki.pdfbook.app/features/ai-assistant/).

### Private and offline
No account is required to read, and everything is processed on your machine. PDFBook works
fully offline.

## Documentation

Full guides, setup help, and FAQ live at **[wiki.pdfbook.app](https://wiki.pdfbook.app)**:

- [Getting started](https://wiki.pdfbook.app/getting-started/)
- [Download](https://wiki.pdfbook.app/download/)
- [FAQ](https://wiki.pdfbook.app/faq/)

The documentation is also available in [Japanese / 日本語](https://wiki.pdfbook.app/ja/).

---

## About this repository

This repository holds two things:

1. **The documentation site** — source for <https://wiki.pdfbook.app>, built with
   [Astro Starlight](https://starlight.astro.build) and deployed on Vercel
   (zero-config: Vercel detects Astro, runs `astro build`, serves `dist`).
2. **Release downloads** — installers for every platform are published to this
   repository's [Releases](https://github.com/YumeBytesLab/PDFBook/releases).

### Working on the docs

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into ./dist
```

Pages live in `src/content/docs/` — English at the root, Japanese under `ja/`. A page with
no Japanese translation falls back to English automatically.
