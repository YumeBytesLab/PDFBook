---
title: "Tus archivos, privacidad y copias"
description: "Entiende el almacenamiento local, las solicitudes opcionales a IA cloud y cómo guardar el catálogo junto con tus PDF originales."
---

## Lectura y almacenamiento

Leer, guardar la biblioteca, crear y convertir PDF y extraer imágenes se realiza en tu equipo. No necesitas cuenta para leer. El catálogo guarda rutas e información. No reemplaza tus PDF con copias cloud.

Si renombras o mueves un original fuera de la app, puede romperse la ruta. Mantén disponibles los archivos y unidades externas y haz copias de ellos por separado.

## Copia de seguridad y restauración

Transfiere tu biblioteca, carpetas, posición de lectura, marcadores, portadas y ajustes de visualización entre ediciones o equipos.

1. **Ajustes → Avanzado → Copia de seguridad y restauración**
2. **Incluir archivos originales** — Copia los archivos locales de la biblioteca. Los libros en línea conservan sus URL sin descargarse. Revisa los originales que falten antes de exportar.
3. **Exportar copia** — Elige un destino para crear una carpeta de copia de PDFBook. Conserva toda la carpeta y selecciónala para restaurar.

**Sin archivos originales:** No se copian los originales. Para leer, los archivos deben seguir en sus ubicaciones originales.

**Importar copia → Revisar copia → Restaurar y reiniciar**

> Entiendo que se reemplazarán mi biblioteca y ajustes de visualización y se reiniciará PDFBook. No se fusionan bibliotecas.

Antes de reemplazar, se guarda una copia importable en backups, dentro de la carpeta de datos. Los originales existentes no se eliminan. Añade de nuevo las carpetas vigiladas después de restaurar. No se conserva el análisis automático para evitar duplicados o explorar carpetas equivocadas.

No incluye claves API, ajustes ni historial de IA, contraseñas PDF guardadas ni licencias. Se conservan los ajustes de IA y la licencia actuales.

## Copia manual de los datos de la aplicación

1. Abre **Ajustes → Avanzado → Abrir carpeta de datos de usuario**.
2. Cierra PDFBook antes de copiar para evitar cambios durante la copia.
3. Guarda tanto esa carpeta como las carpetas de PDF originales.

`library.json` contiene el catálogo, `preferences.json` los ajustes y `thumbnails/` las portadas. Otros archivos pueden contener historial, contraseñas recordadas, licencias y configuración del proveedor. Trata la copia como privada. Solo copiar `library.json` no guarda los libros.

## Conexiones elegidas

Abrir una URL descarga el PDF. Las actualizaciones consultan GitHub y la activación verifica la licencia. La IA cloud puede enviar mensajes, contexto, metadatos y textos o imágenes solicitados. Ollama es local solo si su servidor está en tu equipo. Una URL remota es remota.

## Comparte un informe

Usa pasos y ejemplos públicos, sin claves API, licencias, contraseñas ni documentos privados. No adjuntes toda la carpeta de datos públicamente. Consulta la [política de privacidad](https://pdfbook.app/privacy) y la [guía de IA](/es/features/ai-assistant/).
