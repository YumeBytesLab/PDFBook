---
title: "Download and install PDFBook"
description: "Find the right Windows, macOS or Linux build for x64 or ARM64, and follow the first-launch and update instructions."
---

## Pick your OS and processor

Open the **[latest official release](https://github.com/YumeBytesLab/PDFBook/releases/latest)**. File names include the version; choose by the ending below.

| Computer | File to choose |
| --- | --- |
| Windows, Intel or AMD | `windows-x64-setup.exe` or `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` or `windows-arm64-portable.exe` |
| Mac, Apple Silicon | `macos-arm64.dmg` |
| Mac, Intel | `macos-x64.dmg` |
| Linux, Intel or AMD | `linux-x64.AppImage` or `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` or `linux-arm64.deb` |

`x64`, `amd64` and older `x86_64` file names mean the same CPU family. Windows requires Windows 10 build 19041 or newer, including Windows 11.

## Windows

Run **Setup** for a regular installation, or launch **Portable** without installing. Standalone builds are unsigned and Windows may show a publisher or reputation warning. Check that the download came from this official repository before deciding to run it.

Microsoft Store distribution is being prepared. The `.appx` attachments are unsigned submission packages; use Setup or Portable for normal installation.

## macOS and Linux

On macOS, open the DMG and drag PDFBook into Applications. Current builds are not Developer ID signed or notarized; follow [Apple's first-launch guidance](https://support.apple.com/en-us/102445) if macOS blocks the app.

For Linux AppImage, allow the file to execute in its properties, then run it. On Debian/Ubuntu, install the matching deb through your package manager. Screen capture requires an X11 session.

## Updating

In **Settings → Advanced**, use the update check or enable checks on startup. Available updates offer a matching download. Keep your original PDFs and application-data backup when moving to another computer. Continue with [your first book](/getting-started/).
