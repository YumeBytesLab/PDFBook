---
title: "Arquivos, privacidade e backup"
description: "Saiba o que fica no dispositivo, o que a IA opcional envia e como salvar o catálogo junto dos PDFs originais."
---

## Leitura e dados locais

Leitura, biblioteca, criação, conversão e extração de imagens funcionam no computador. Não é preciso conta para ler. O catálogo guarda caminhos e informações; não troca os PDFs por cópias na nuvem.

Mover ou renomear fora do app pode quebrar o caminho. Mantenha arquivos e unidades externas acessíveis e faça backup deles separadamente.

## Backup completo

1. Abra **Configurações → Avançado → Abrir pasta de dados do usuário**.
2. Feche o PDFBook para evitar alterações durante a cópia.
3. Copie essa pasta e as pastas dos PDFs originais.

`library.json` guarda o catálogo, `preferences.json` as configurações e `thumbnails/` as capas. Outros arquivos podem conter conversas, senhas lembradas, licenças e configuração do provedor. Guarde o backup como privado. Somente `library.json` não salva os livros.

## Conexões escolhidas

Uma URL baixa o PDF. Atualizações consultam GitHub e a ativação verifica a licença. IA cloud pode enviar mensagens, contexto, metadados, textos e imagens solicitados. Ollama só é local quando seu servidor é local; uma URL remota é remota.

## Compartilhar um relatório

Prefira passos e exemplos públicos, sem chaves API, licenças, senhas ou documentos privados. Não anexe toda a pasta de dados publicamente. Veja a [política de privacidade](https://pdfbook.app/privacy) e o [guia de IA](/pt/features/ai-assistant/).
