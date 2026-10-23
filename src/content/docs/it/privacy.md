---
title: "File, privacy e backup"
description: "Scopri cosa viene salvato localmente, quali richieste IA possono uscire e come conservare catalogo e PDF originali."
---

## Lettura e dati locali

Lettura, libreria, creazione, conversione ed estrazione immagini funzionano sul computer. Non serve un account. Il catalogo memorizza percorsi e informazioni, non sostituisce gli originali con copie cloud.

Spostare o rinominare fuori dall’app può interrompere un percorso. Mantieni disponibili file e dischi esterni e salvali anche separatamente.

## Backup e ripristino

Trasferisci libreria, cartelle, posizioni di lettura, segnalibri, copertine e impostazioni di visualizzazione tra edizioni o computer.

1. **Impostazioni → Avanzate → Backup e ripristino**
2. **Includi file originali** — Copia i file locali della libreria. I libri online mantengono gli URL senza scaricamento. Controlla gli originali mancanti prima di esportare.
3. **Esporta backup** — Scegli una destinazione per creare una cartella di backup PDFBook. Conserva l’intera cartella e selezionala per ripristinare.

**Senza i file originali:** Gli originali non vengono copiati. Per leggere servono ancora i file nelle posizioni originali.

**Importa backup → Verifica backup → Ripristina e riavvia**

> Comprendo che la libreria e le impostazioni di visualizzazione attuali saranno sostituite e PDFBook verrà riavviato. Le librerie non vengono unite.

Prima della sostituzione, viene salvato un backup importabile in backups nella cartella dati. Gli originali esistenti non vengono eliminati. Aggiungi nuovamente le cartelle monitorate dopo il ripristino. La scansione automatica non viene trasferita per evitare duplicati o cartelle indesiderate.

Sono esclusi chiavi API, impostazioni e cronologia IA, password PDF salvate e licenze. Le impostazioni IA e la licenza attuali restano invariate.

## Copia manuale dei dati dell’app

1. Apri **Impostazioni → Avanzate → Apri cartella dati utente**.
2. Chiudi PDFBook per evitare cambiamenti durante la copia.
3. Copia quella cartella e quelle dei PDF originali.

`library.json` contiene il catalogo, `preferences.json` le impostazioni, `thumbnails/` le copertine. Altri file possono contenere chat, password ricordate, licenze e configurazioni del provider: conserva il backup in privato. Solo `library.json` non salva i libri.

## Connessioni scelte

Aprire un URL scarica il PDF. Gli aggiornamenti consultano GitHub e l’attivazione verifica la licenza. L’IA cloud può inviare messaggi, contesto, metadati e testi o immagini richiesti. Ollama è locale solo con server locale. Un URL remoto rimane remoto.

## Inviare un rapporto

Preferisci passaggi ed esempi pubblici, senza chiavi API, licenze, password e documenti privati. Non allegare l’intera cartella dati pubblicamente. Vedi [informativa privacy](https://pdfbook.app/privacy) e [guida IA](/it/features/ai-assistant/).
