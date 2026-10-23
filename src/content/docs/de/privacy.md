---
title: "Dateien, Datenschutz und Sicherung"
description: "Erfahre, was lokal gespeichert wird, was optionale Cloud-KI sendet und wie du Katalog und Original-PDFs gemeinsam sicherst."
---

## Lokale Dateien

Lesen, Bibliothek, PDF-Erstellung, Konvertierung und Bildextraktion laufen auf deinem Computer. Lesen braucht kein Konto. Der Katalog speichert Pfade und Informationen, keine Cloud-Ersatzkopien deiner PDFs.

Verschieben oder Umbenennen außerhalb der App kann den Pfad unterbrechen. Halte Dateien und externe Laufwerke erreichbar und sichere sie unabhängig.

## Sichern und wiederherstellen

Übertrage Bibliothek, Ordner, Lesepositionen, Lesezeichen, Cover und Anzeigeeinstellungen zwischen Editionen oder Computern.

1. **Einstellungen → Erweitert → Sichern und wiederherstellen**
2. **Originaldateien einschließen** — Kopiert lokale Bibliotheksdateien. Onlinebücher behalten ihre URLs und werden nicht heruntergeladen. Prüfe fehlende Originale vor dem Export.
3. **Sicherung exportieren** — Wähle einen Zielordner, um einen PDFBook-Sicherungsordner zu erstellen. Bewahre den gesamten Ordner zusammen auf und wähle ihn zum Wiederherstellen.

**Ohne Originaldateien:** Originale werden nicht kopiert. Zum Lesen müssen die Dateien weiterhin am ursprünglichen Speicherort liegen.

**Sicherung importieren → Sicherung prüfen → Wiederherstellen und neu starten**

> Ich verstehe, dass Bibliothek und Anzeigeeinstellungen ersetzt werden und PDFBook neu startet. Bibliotheken werden nicht zusammengeführt.

Vor dem Ersetzen wird eine importierbare Sicherung unter backups im Datenordner gespeichert. Vorhandene Originaldateien werden nicht gelöscht. Füge überwachte Ordner nach der Wiederherstellung erneut hinzu. Automatisches Scannen wird nicht übernommen, um Duplikate und unbeabsichtigte Ordnersuchen zu vermeiden.

API-Schlüssel, KI-Einstellungen und Chatverlauf, gespeicherte PDF-Passwörter und Lizenzen sind ausgeschlossen. Aktuelle KI-Einstellungen und Lizenz bleiben erhalten.

## Anwendungsdaten manuell kopieren

1. Öffne **Einstellungen → Erweitert → Benutzerdatenordner öffnen**.
2. Beende PDFBook vor dem Kopieren, damit sich die Daten nicht verändern.
3. Sichere diesen Ordner und die Original-PDF-Ordner zusammen.

`library.json` enthält den Katalog, `preferences.json` die Einstellungen und `thumbnails/` die Cover. Weitere Dateien können Chats, gemerkte Passwörter, Lizenzen und Anbieter-Konfiguration enthalten. Bewahre die Kopie privat auf. Nur `library.json` sichert nicht die Bücher.

## Gewählte Verbindungen

Eine PDF-URL lädt die Datei herunter. Updateprüfungen kontaktieren GitHub, Aktivierung den Lizenzdienst. Cloud-KI kann Nachrichten, Kontext, Metadaten und angeforderte Texte oder Bilder senden. Ollama ist nur bei lokalem Server lokal. Eine entfernte URL bleibt entfernt.

## Support-Dateien teilen

Verwende Abläufe und öffentliche Beispiele ohne API-Schlüssel, Lizenzen, Passwörter und private Dokumente. Veröffentliche nicht den ganzen Datenordner. Details findest du in der [Datenschutzerklärung](https://pdfbook.app/privacy) und der [KI-Anleitung](/de/features/ai-assistant/).
