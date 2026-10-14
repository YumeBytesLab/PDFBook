# PDFBook — PDF reader and library manager

Read books, manga, papers, and scanned documents in one desktop app for **Windows, macOS, and Linux**. Keep your PDF collection organized and return to the page where you stopped.

**[Download PDFBook](https://github.com/YumeBytesLab/PDFBook/releases/latest)** · [Website](https://pdfbook.app) · [Documentation](https://wiki.pdfbook.app) · [日本語](README.ja.md)

![PDFBook library with book covers, folders, favorites, and reading status](public/images/library-en.webp)

## Read your way

- **Books and manga:** page-flip and vertical-scroll modes, single pages or spreads, and right-to-left reading.
- **Papers and reference material:** document text search, bookmarks, a table of contents when supplied by the PDF, and an always-on-top Floating Reader.
- **Your PDF library:** folders, tags, ratings, favorites, reading status, and notes attached to each book. Re-scan watched folders to find new files.
- **PDF tools:** make PDFs from JPG/PNG images, convert supported document and e-book formats, and extract embedded images from a PDF.
- **Optional AI:** connect your own provider or a local Ollama model. No AI subscription is included with PDFBook.

![PDFBook desktop reader displaying a two-page book spread](public/images/reader-en.webp)

## Download and install

Choose the build for your operating system and CPU from the [latest release](https://github.com/YumeBytesLab/PDFBook/releases/latest).

| Platform | Downloads |
| --- | --- |
| Windows 10 / 11 | Setup or Portable, **x64** and **ARM64** |
| macOS | DMG for **Apple Silicon (ARM64)** and **Intel (x64)** |
| Linux | AppImage or deb, **x64 / amd64** and **ARM64** |

See the [installation guide](https://wiki.pdfbook.app/download/) for file names and first-launch help. Windows standalone builds are unsigned; macOS builds are not Developer ID signed or notarized.

Microsoft Store distribution is being prepared. The `.appx` release attachments are unsigned submission packages, not regular installers. Use Setup or Portable until Store installation is available.

## Free to start

The free plan supports a library of **up to 50 books**. The Floating Reader has an unmetered first session, followed by **60 minutes of active reading per calendar month**. Pro and Lifetime remove those library and Floating Reader limits.

AI chat uses your own provider; page-reading and app-action tools require a paid plan. Provider fees are separate. See [plans and pricing](https://pdfbook.app/#pricing) for current purchase options.

## Your files and privacy

PDF reading, library storage, PDF creation, and conversion run on your computer. Reading requires no account. If you enable cloud AI, your messages, chat context, and requested document text or page images are sent to the provider you configured. A local Ollama model keeps those AI requests on your machine.

[Privacy policy](https://pdfbook.app/privacy) · [AI guide](https://wiki.pdfbook.app/features/ai-assistant/)

## Guides and support

- [Get started](https://wiki.pdfbook.app/getting-started/) · [Read books and manga](https://wiki.pdfbook.app/features/reader/) · [Organize a PDF library](https://wiki.pdfbook.app/features/library/)
- [FAQ](https://wiki.pdfbook.app/faq/) · [Report a bug](https://github.com/YumeBytesLab/PDFBook/issues/new/choose) · [Ask a question](https://github.com/YumeBytesLab/PDFBook/discussions)
- [Contact support](https://pdfbook.app/contact) · [Report a security vulnerability](SECURITY.md)

When reporting a bug, include your PDFBook version, OS, CPU architecture, and reproduction steps. Remove private documents and personal data from attachments.

## About this repository

This is the official home for **PDFBook release downloads and documentation**, maintained by [YumeBytes](https://pdfbook.app). The desktop application is closed source; this repository contains the documentation site, not the application's source code.

To work on the Astro Starlight documentation, see the [contributing guide](.github/CONTRIBUTING.md).
