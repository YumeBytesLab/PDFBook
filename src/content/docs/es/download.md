---
title: "Descarga e instalación"
description: "Elige la versión de Windows, macOS o Linux para x64 o ARM64 y consulta cómo iniciar y actualizar PDFBook."
---

## Elige el archivo

Abre la **[última versión oficial](https://github.com/YumeBytesLab/PDFBook/releases/latest)**. El nombre completo incluye la versión y termina así:

| Equipo | Archivo |
| --- | --- |
| Windows, Intel/AMD | `windows-x64-setup.exe` o `windows-x64-portable.exe` |
| Windows on Arm | `windows-arm64-setup.exe` o `windows-arm64-portable.exe` |
| Mac, Apple Silicon | `macos-arm64.dmg` |
| Mac, Intel | `macos-x64.dmg` |
| Linux, Intel/AMD | `linux-x64.AppImage` o `linux-amd64.deb` |
| Linux, Arm | `linux-arm64.AppImage` o `linux-arm64.deb` |

`x64`, `amd64` y el antiguo `x86_64` designan la misma familia. Windows requiere Windows 10 compilación 19041 o posterior, incluido Windows 11.

## Instala en Windows

Setup realiza una instalación normal; Portable se ejecuta sin instalar. Las versiones independientes no están firmadas y Windows puede mostrar un aviso de editor o reputación. Comprueba el origen oficial antes de decidir ejecutarlas.

Microsoft Store está en preparación. Los `.appx` son paquetes de envío sin firmar; para instalar usa Setup o Portable.

## macOS y Linux

Abre el DMG y arrastra PDFBook a Applications. La versión de macOS no tiene firma Developer ID ni notarización; consulta [Apple](https://support.apple.com/es-es/102445) si se bloquea el inicio. En Linux, da permiso de ejecución al AppImage o instala el deb con el gestor de paquetes. La captura necesita X11.

## Actualiza

En **Ajustes → Avanzado** comprueba actualizaciones o activa la revisión al iniciar. Guarda tus PDF y una copia de los datos de la aplicación al cambiar de equipo. Después puedes [añadir tu primer libro](/es/getting-started/).
