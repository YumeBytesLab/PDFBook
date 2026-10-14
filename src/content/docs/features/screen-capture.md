---
title: Capture pages into a PDF
description: Use PDFBook's screen-capture tool on Windows or Linux X11, with region selection and page-turn support where available.
---

The capture tool creates a PDF from pages visible in another app. Open it from **Creator**, choose a window or screen, mark the page area, and collect the pages you need.

## Supported systems

| Environment | Current availability |
| --- | --- |
| Windows | Screen capture supported; automatic page turning depends on the available native key-injection helper |
| Linux X11 | Screen capture supported; automatic turning depends on the native helper and architecture |
| Linux Wayland | Not currently supported |
| macOS | Not currently supported in the distributed builds |

The app checks availability for your environment. Automatic page turning is a separate capability from screen capture; do not assume every build has it.

## Capture a document

1. Open the source app on the page you want to capture.
2. Choose its window and mark one region, or two regions for a spread.
3. Set the capture count and timing. Configure a page-turn key if the app offers automatic turning.
4. Start capture, check the collected pages, and save the PDF.

Use **Stop** or press **Esc** to stop a running capture.
