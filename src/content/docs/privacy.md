---
title: "Your files and privacy"
description: "Know what stays on the device, what optional cloud AI sends, and how to back up the catalog alongside your original PDFs."
---

## Reading and local storage

Reading PDFs, storing the library, creating PDFs, converting files and extracting images run on your computer. Reading local files requires no account. The library stores paths and catalog information. It does not replace your original PDFs with a cloud copy.

Renaming or moving a PDF outside the app can break its saved path. Keep originals available, including on removable drives, and back them up independently of the catalog.

## Backup and restore

Transfer your library, folders, reading positions, bookmarks, covers and display settings between editions or computers.

1. **Settings → Advanced → Backup and restore**
2. **Include original files** — Copies local files in your library. Online books keep their URLs and are not downloaded. Missing files must be fixed before exporting.
3. **Export backup** — Choose a destination to create a PDFBook backup folder. Keep the whole folder together. To restore, select that backup folder.

**Without original files:** Original files are not copied. Reading will still require files at their original locations.

**Import backup → Review backup → Restore and restart**

> I understand that this replaces my current library and display settings and restarts PDFBook. It does not merge libraries.

Before replacement, an importable safety backup is saved in the data folder’s backups folder. Existing source files are not deleted. Watch folders must be added again after restoring. Automatic scanning stays off to prevent duplicates or scanning unintended folders.

API keys, AI settings and chat history, saved PDF passwords and licenses are excluded. Your current AI settings and license are kept.

## Manual copy of application data

1. Open **Settings → Advanced → Open user data folder**.
2. Close PDFBook before copying application data so files are not changing during the copy.
3. Back up the data folder and the original PDF folders together.

`library.json` holds the catalog. `preferences.json` holds settings and `thumbnails/` contains generated covers. Other files can contain chat history, remembered document passwords, license data and provider configuration. Treat a data-folder backup as private. Copying only `library.json` does not back up the books.

## Network requests you choose

Opening a PDF URL downloads that file. Enabled startup update checks contact GitHub. Paid license activation and verification contact the licensing service. These are separate from local PDF rendering.

If you use cloud AI, messages, context, book metadata and requested document text or page images can be sent to your selected provider. A local Ollama server keeps those AI requests local. A remote Ollama URL is a remote service, not a local one.

## Sharing a support report

Prefer reproduction steps and a non-private sample. Remove API keys, license keys, saved passwords and personal documents before attaching files publicly. See the [privacy policy](https://pdfbook.app/privacy) for the service's full terms and the [AI guide](/features/ai-assistant/) for provider setup.
