---
title: "Set up the optional AI assistant"
description: "Connect Bookie to your own provider or a local Ollama model. Understand model selection, page access, plan requirements and data sent."
---

## Connect a provider

**Bookie** is the optional reading assistant. Open **Settings → AI** and choose **Ollama, OpenAI, Anthropic (Claude), OpenRouter or Gemini**. Configure the provider's API key or the local Ollama server, then choose an available model.

Cloud providers ask you to acknowledge the data-sharing notice. PDFBook does not include a provider subscription or API credits. Your provider may charge for requests, including document images.

## Local Ollama

Start Ollama and install a compatible model on your computer. In the AI tab, check the server URL and model list. If the list is empty, verify the server is running and the chosen model is installed. These AI requests stay on your machine when the configured server is local.

## Chat and document tools

Open the assistant and send a question. **Free users can chat.** Tools that read a page or cover, or perform app actions, require a paid PDFBook plan. Merely opening a PDF does not automatically provide its whole contents to the model.

Page tools may return text, a rendered page image, or both. Scanned pages and diagrams need a model capable of understanding images. App actions depend on the enabled tools and permissions. Check the model's answer against the actual page; it can make mistakes.

## What leaves the device

Cloud requests can contain messages, conversation context, book metadata and document text or page images requested through tools. Those go to your configured provider. Choose a local setup or leave AI unused if you do not want to send that material. See [privacy](/privacy/) and [plans](/plans-and-licenses/).
