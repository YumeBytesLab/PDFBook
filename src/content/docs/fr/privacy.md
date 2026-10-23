---
title: "Fichiers, confidentialité et sauvegarde"
description: "Découvrez les données locales, les échanges facultatifs avec une IA cloud et la sauvegarde du catalogue et des PDF originaux."
---

## Lecture et données locales

Lecture, bibliothèque, création, conversion et extraction d’images fonctionnent sur votre ordinateur. Aucun compte n’est nécessaire pour lire. Le catalogue garde chemins et informations, sans remplacer les PDF par des copies cloud.

Déplacer ou renommer un original hors de l’application peut rompre son chemin. Gardez accessibles fichiers et disques externes et sauvegardez-les séparément.

## Sauvegarde et restauration

Transférez bibliothèque, dossiers, positions de lecture, signets, couvertures et réglages d’affichage entre éditions ou ordinateurs.

1. **Paramètres → Avancé → Sauvegarde et restauration**
2. **Inclure les fichiers originaux** — Copie les fichiers locaux de la bibliothèque. Les livres en ligne conservent leur URL sans téléchargement. Vérifiez les originaux manquants avant l’exportation.
3. **Exporter une sauvegarde** — Choisissez une destination pour créer un dossier de sauvegarde PDFBook. Conservez le dossier entier et sélectionnez-le pour restaurer.

**Sans les fichiers originaux:** Les originaux ne sont pas copiés. La lecture nécessite toujours les fichiers à leur emplacement initial.

**Importer une sauvegarde → Vérifier la sauvegarde → Restaurer et redémarrer**

> Je comprends que ma bibliothèque et mes réglages d’affichage seront remplacés et que PDFBook redémarrera. Les bibliothèques ne seront pas fusionnées.

Avant le remplacement, une sauvegarde importable est enregistrée dans backups, dans le dossier de données. Les originaux existants ne sont pas supprimés. Ajoutez à nouveau les dossiers surveillés après la restauration. L’analyse automatique n’est pas transférée afin d’éviter doublons et dossiers involontaires.

Les clés API, réglages et historique IA, mots de passe PDF enregistrés et licences sont exclus. Vos réglages IA et votre licence actuels sont conservés.

## Copie manuelle des données de l’application

1. Ouvrez **Paramètres → Avancé → Ouvrir le dossier des données utilisateur**.
2. Fermez PDFBook pour éviter des modifications pendant la copie.
3. Copiez ce dossier et ceux contenant les PDF originaux.

`library.json` contient le catalogue, `preferences.json` les réglages et `thumbnails/` les couvertures. D’autres fichiers peuvent contenir conversations, mots de passe mémorisés, licence et configuration du fournisseur : gardez cette copie privée. `library.json` seul ne sauvegarde pas les livres.

## Connexions choisies

Une URL télécharge le PDF. Les mises à jour consultent GitHub et l’activation vérifie la licence. L’IA cloud peut envoyer messages, contexte, métadonnées et textes ou images demandés. Ollama n’est local que si son serveur l’est. Une URL distante reste distante.

## Partager un rapport

Préférez étapes et exemple public, sans clés API, licence, mots de passe ou documents privés. Ne joignez pas tout le dossier de données publiquement. Consultez la [politique de confidentialité](https://pdfbook.app/privacy) et le [guide IA](/fr/features/ai-assistant/).
