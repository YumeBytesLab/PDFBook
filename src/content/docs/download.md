---
title: Download PDFBook
description: Download PDFBook for Windows, macOS, and Linux. Choose Setup, Portable, DMG, AppImage, or deb for x64 or ARM64 and follow the installation guide.
---

[**Download the latest release**](https://github.com/YumeBytesLab/PDFBook/releases/latest). PDFBook is free to start with a library of up to 50 books.

## Choose your operating system and CPU

| System | Choose |
| --- | --- |
| Windows 10 / 11, Intel or AMD | `windows-x64-setup.exe` or `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` or `windows-arm64-portable.exe` |
| macOS, Apple Silicon | `macos-arm64.dmg` |
| macOS, Intel | `macos-x64.dmg` |
| Linux, Intel or AMD | `linux-x64.AppImage` (older releases use `x86_64`) or `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` or `linux-arm64.deb` |

The complete file name also includes the PDFBook version. `x64`, `x86_64`, and `amd64` refer to the same CPU family; `arm64` is a different build.

## Windows

Run **Setup** for a normal installation, or launch **Portable** without installing. These standalone downloads are unsigned, so Windows may show a publisher or reputation warning. Download from this official repository and verify the file before deciding whether to run it.

Microsoft Store distribution is being prepared. The `.appx` attachments are unsigned Partner Center submission packages, not regular end-user installers. Use Setup or Portable until Store installation is available.

## macOS

Open the DMG and drag PDFBook into Applications. Choose ARM64 for Apple Silicon and x64 for an Intel Mac.

Current builds are not Developer ID signed or notarized. If macOS blocks launch, follow [Apple's guidance for opening an app from an unidentified developer](https://support.apple.com/en-us/102445) only after checking its source. Do not disable Gatekeeper globally.

## Linux

For AppImage, grant the downloaded file executable permission, then run it. For Debian or Ubuntu, install the matching deb file with `sudo apt install ./PDFBook-<version>-linux-<architecture>.deb`, substituting the actual file name.

Screen capture is supported on Windows and Linux X11. It is currently unavailable on macOS and Linux Wayland; [read the capture guide](/features/screen-capture/) for details.

## Updates and next steps

With startup update checks enabled, standalone builds notify you about releases and link to the matching download. See [Getting started](/getting-started/) to add your first PDFs, or the [FAQ](/faq/) for plan limits and privacy.
