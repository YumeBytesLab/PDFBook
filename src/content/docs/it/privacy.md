---
title: "File, privacy e backup"
description: "Scopri cosa viene salvato localmente, quali richieste IA possono uscire e come conservare catalogo e PDF originali."
---

## Lettura e dati locali

Lettura, libreria, creazione, conversione ed estrazione immagini funzionano sul computer. Non serve un account. Il catalogo memorizza percorsi e informazioni, non sostituisce gli originali con copie cloud.

Spostare o rinominare fuori dall’app può interrompere un percorso. Mantieni disponibili file e dischi esterni e salvali anche separatamente.

## Backup completo

1. Apri **Impostazioni → Avanzate → Apri cartella dati utente**.
2. Chiudi PDFBook per evitare cambiamenti durante la copia.
3. Copia quella cartella e quelle dei PDF originali.

`library.json` contiene il catalogo, `preferences.json` le impostazioni, `thumbnails/` le copertine. Altri file possono contenere chat, password ricordate, licenze e configurazioni del provider: conserva il backup in privato. Solo `library.json` non salva i libri.

## Connessioni scelte

Aprire un URL scarica il PDF. Gli aggiornamenti consultano GitHub e l’attivazione verifica la licenza. L’IA cloud può inviare messaggi, contesto, metadati e testi o immagini richiesti. Ollama è locale solo con server locale; un URL remoto rimane remoto.

## Inviare un rapporto

Preferisci passaggi ed esempi pubblici, senza chiavi API, licenze, password e documenti privati. Non allegare l’intera cartella dati pubblicamente. Vedi [informativa privacy](https://pdfbook.app/privacy) e [guida IA](/it/features/ai-assistant/).
