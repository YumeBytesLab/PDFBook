---
title: "Capture visible pages into a PDF"
description: "Collect a window’s visible pages, crop the reading area and send captured images to Creator on Windows or Linux X11."
---

## Check availability first

Screen capture is available on **Windows** and **Linux X11**. It is disabled on macOS and Linux Wayland. Automatic page turning is a separate capability: it depends on the keyboard helper, architecture and permissions. Linux ARM64 can capture under X11 but does not have the automatic-turn helper.

The app reports available capabilities. A missing or disabled capture control does not prevent you from creating a PDF from saved JPG/PNG images.

## Capture a window

1. Open **Creator** and select **Capture from screen**.
2. Choose the target window and set the capture area. Crop out toolbars or margins you do not want in the PDF.
3. Set the page count and capture timing. If automatic turning is available, choose the direction/key and allow enough delay for the target app to finish drawing each page.
4. Start the capture, inspect the resulting images, then use Creator to arrange and export the PDF.

Keep the target window available during capture. A blank, unchanged or obscured view cannot produce the intended next page.

## If pages repeat or are blank

Capture one visible page first. Make sure the target window is selected and not minimized. Increase the delay if a page-turn animation is still in progress. If automatic turning is unavailable, do not assume the capture itself is broken; check the capability message and use image input or an available manual workflow instead.

Capture collects the visible screen; it does not import the source app's document, add OCR or recover hidden pages. For normal image-to-PDF export, see [PDF tools](/features/creating-pdfs/).
