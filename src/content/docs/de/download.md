---
title: "PDFBook herunterladen und installieren"
description: "Wähle die passende Windows-, macOS- oder Linux-Ausgabe für x64 oder ARM64 und lies die Hinweise zum ersten Start und zu Updates."
---

## Die richtige Datei wählen

Öffne die **[aktuelle offizielle Veröffentlichung](https://github.com/YumeBytesLab/PDFBook/releases/latest)**. Im vollständigen Namen steht zusätzlich die Version.

| Computer | Dateiendung im Namen |
| --- | --- |
| Windows, Intel/AMD | `windows-x64-setup.exe` oder `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` oder `windows-arm64-portable.exe` |
| Mac, Apple Silicon | `macos-arm64.dmg` |
| Mac, Intel | `macos-x64.dmg` |
| Linux, Intel/AMD | `linux-x64.AppImage` oder `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` oder `linux-arm64.deb` |

`x64`, `amd64` und ältere `x86_64`-Namen bezeichnen dieselbe CPU-Familie. Windows benötigt Windows 10 Build 19041 oder neuer, einschließlich Windows 11.

## Windows

Setup installiert die App. Portable startet ohne Installation. Die eigenständigen Ausgaben sind unsigniert, deshalb kann Windows einen Herausgeber- oder Reputationshinweis zeigen. Prüfe die offizielle Herkunft, bevor du sie ausführst.

Die Microsoft-Store-Veröffentlichung wird vorbereitet. Verwende unter Windows **Setup** oder **Portable**.

## macOS und Linux

Öffne das DMG und ziehe PDFBook nach Applications. Die Mac-Ausgaben sind weder mit Developer ID signiert noch notarisiert. Bei einer Startsperre helfen [Apples Hinweise](https://support.apple.com/de-de/102445). AppImages müssen ausführbar sein. Deb-Dateien installierst du über die Paketverwaltung. Bildschirmaufnahme benötigt X11.

## Aktualisieren

Unter **Einstellungen → Erweitert** kannst du Updates prüfen oder Startprüfungen einschalten. Sichere beim Computerwechsel Original-PDFs und App-Daten. Danach kannst du [das erste Buch hinzufügen](/de/getting-started/).
