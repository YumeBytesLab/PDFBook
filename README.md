<div align="center">

<a href="https://pdfbook.app"><img src="https://pdfbook.app/icon-512.png" width="88" alt="PDFBook app icon"></a>

# PDFBook

**Fast, private PDF reader and library manager for Windows, macOS, and Linux**

Read books, manga, papers, and scans in a page-flip or scroll view. Keep thousands of PDFs
organized with tags, ratings, and reading status. Turn images or on-screen pages into new
PDFs. No account, no upload. Your library never leaves your computer.

[![Latest release](https://img.shields.io/github/v/release/YumeBytesLab/PDFBook?label=latest&color=2563eb)](https://github.com/YumeBytesLab/PDFBook/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/YumeBytesLab/PDFBook/total?color=2563eb)](https://github.com/YumeBytesLab/PDFBook/releases)
![Windows](https://img.shields.io/badge/Windows-x64%20%7C%20arm64-555?logo=windows&logoColor=white)
![macOS](https://img.shields.io/badge/macOS-Apple%20Silicon%20%7C%20Intel-555?logo=apple&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-AppImage%20%7C%20deb-555?logo=linux&logoColor=white)

**[⬇ Download](https://github.com/YumeBytesLab/PDFBook/releases/latest)** ·
**[Website](https://pdfbook.app)** ·
**[Documentation](https://wiki.pdfbook.app)** ·
**[日本語](https://wiki.pdfbook.app/ja/)**

<a href="https://pdfbook.app"><img src="https://pdfbook.app/opengraph-image" width="720" alt="PDFBook, a desktop PDF reader and library manager for Windows, macOS, and Linux"></a>

</div>

## Download PDFBook

Installers for every platform are on the [Releases](https://github.com/YumeBytesLab/PDFBook/releases/latest)
page. The [download guide](https://wiki.pdfbook.app/download/) walks through setup on each OS.

| Platform | Builds |
| --- | --- |
| **Windows 10 / 11** | Installer or portable, x64 and arm64. Also on the Microsoft Store |
| **macOS** | DMG for Apple Silicon (M1 and newer) and Intel |
| **Linux** | AppImage or `.deb`, x64 and arm64 |

## What PDFBook does

Most PDF software treats a PDF as a file you open once and close. PDFBook treats your PDFs
as a library: hundreds of books, manga volumes, papers, and scanned documents that you
actually come back to.

### A reader that remembers where you were

Page-flip and vertical scroll modes, right-to-left reading for manga, in-document text
search, bookmarks, and zoom. Every book reopens exactly where you left off.
Password-protected PDFs open in place, and focus mode hides everything but the page.
[Reader guide](https://wiki.pdfbook.app/features/reader/)

### A library that organizes itself

Point PDFBook at your folders and the catalog stays in sync as files come and go. Filter
by tag, rating, favorite, or reading status. Add notes to any book and browse covers in a
grid or list. [Library guide](https://wiki.pdfbook.app/features/library/)

### Create and extract PDFs locally

Build a PDF from images, convert other document formats, or pull selected pages out into
a new file. Conversion runs on your machine, so nothing is uploaded anywhere.
[Creating PDFs](https://wiki.pdfbook.app/features/creating-pdfs/)

### Capture pages from any app

Turn pages displayed in another program into a PDF. On Windows, PDFBook can press the
page-turn key for you and capture an entire book hands-free.
[Screen capture](https://wiki.pdfbook.app/features/screen-capture/)

### An AI assistant, if you want one

Ask questions about the page you are reading. Bring your own provider: Ollama for fully
local answers, or OpenAI, Claude, and OpenRouter. Entirely optional.
[AI assistant guide](https://wiki.pdfbook.app/features/ai-assistant/)

### Private by design

Reading requires no account. PDFBook works offline, and your files, notes, and reading
history stay on your device.

## Free plan and Pro

PDFBook is free to download and use with a library of up to 50 books. Pro removes the cap
and keeps development going. Plans and prices are on the
[pricing page](https://pdfbook.app/#pricing).

## Documentation

Guides, setup help, and the FAQ live at [wiki.pdfbook.app](https://wiki.pdfbook.app):

- [Getting started](https://wiki.pdfbook.app/getting-started/)
- [Download and install](https://wiki.pdfbook.app/download/)
- [FAQ](https://wiki.pdfbook.app/faq/)

The full documentation is also available in [Japanese / 日本語](https://wiki.pdfbook.app/ja/).

## About this repository

This repository holds two things:

1. **The documentation site**, source for <https://wiki.pdfbook.app>, built with
   [Astro Starlight](https://starlight.astro.build) and deployed on Vercel.
2. **Release downloads**, published under
   [Releases](https://github.com/YumeBytesLab/PDFBook/releases) for every platform.

### Working on the docs

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # production build into ./dist
```

Pages live in `src/content/docs/`, English at the root and Japanese under `ja/`. A page
with no Japanese translation falls back to English automatically.

---

<div align="center">Made by <a href="https://pdfbook.app">YumeBytes</a></div>
