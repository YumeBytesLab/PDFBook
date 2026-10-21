---
title: "Fichiers, confidentialité et sauvegarde"
description: "Découvrez les données locales, les échanges facultatifs avec une IA cloud et la sauvegarde du catalogue et des PDF originaux."
---

## Lecture et données locales

Lecture, bibliothèque, création, conversion et extraction d’images fonctionnent sur votre ordinateur. Aucun compte n’est nécessaire pour lire. Le catalogue garde chemins et informations, sans remplacer les PDF par des copies cloud.

Déplacer ou renommer un original hors de l’application peut rompre son chemin. Gardez accessibles fichiers et disques externes et sauvegardez-les séparément.

## Sauvegarder correctement

1. Ouvrez **Paramètres → Avancé → Ouvrir le dossier des données utilisateur**.
2. Fermez PDFBook pour éviter des modifications pendant la copie.
3. Copiez ce dossier et ceux contenant les PDF originaux.

`library.json` contient le catalogue, `preferences.json` les réglages et `thumbnails/` les couvertures. D’autres fichiers peuvent contenir conversations, mots de passe mémorisés, licence et configuration du fournisseur : gardez cette copie privée. `library.json` seul ne sauvegarde pas les livres.

## Connexions choisies

Une URL télécharge le PDF. Les mises à jour consultent GitHub et l’activation vérifie la licence. L’IA cloud peut envoyer messages, contexte, métadonnées et textes ou images demandés. Ollama n’est local que si son serveur l’est. Une URL distante reste distante.

## Partager un rapport

Préférez étapes et exemple public, sans clés API, licence, mots de passe ou documents privés. Ne joignez pas tout le dossier de données publiquement. Consultez la [politique de confidentialité](https://pdfbook.app/privacy) et le [guide IA](/fr/features/ai-assistant/).
