---
title: "Arquivos, privacidade e backup"
description: "Saiba o que fica no dispositivo, o que a IA opcional envia e como salvar o catálogo junto dos PDFs originais."
---

## Leitura e dados locais

Leitura, biblioteca, criação, conversão e extração de imagens funcionam no computador. Não é preciso conta para ler. O catálogo guarda caminhos e informações. Não troca os PDFs por cópias na nuvem.

Mover ou renomear fora do app pode quebrar o caminho. Mantenha arquivos e unidades externas acessíveis e faça backup deles separadamente.

## Backup e restauração

Transfira biblioteca, pastas, posições de leitura, marcadores, capas e configurações de exibição entre edições ou computadores.

1. **Configurações → Avançado → Backup e restauração**
2. **Incluir arquivos originais** — Copia arquivos locais da biblioteca. Livros on-line mantêm suas URLs sem baixar o conteúdo. Confira os originais ausentes antes de exportar.
3. **Exportar backup** — Escolha um destino para criar uma pasta de backup do PDFBook. Mantenha toda a pasta junta e selecione-a para restaurar.

**Sem os arquivos originais:** Os originais não são copiados. Para ler, os arquivos ainda precisam estar nos locais originais.

**Importar backup → Revisar backup → Restaurar e reiniciar**

> Entendo que a biblioteca e as configurações de exibição atuais serão substituídas e o PDFBook reiniciará. As bibliotecas não serão mescladas.

Antes da substituição, um backup importável é salvo em backups, na pasta de dados. Os originais existentes não são excluídos. Adicione novamente as pastas monitoradas após restaurar. A verificação automática não é transferida para evitar duplicatas ou examinar pastas indevidas.

Chaves de API, configurações e histórico de IA, senhas de PDF salvas e licenças não são incluídos. As configurações de IA e a licença atuais são mantidas.

## Cópia manual dos dados do aplicativo

1. Abra **Configurações → Avançado → Abrir pasta de dados do usuário**.
2. Feche o PDFBook para evitar alterações durante a cópia.
3. Copie essa pasta e as pastas dos PDFs originais.

`library.json` guarda o catálogo, `preferences.json` as configurações e `thumbnails/` as capas. Outros arquivos podem conter conversas, senhas lembradas, licenças e configuração do provedor. Guarde o backup como privado. Somente `library.json` não salva os livros.

## Conexões escolhidas

Uma URL baixa o PDF. Atualizações consultam GitHub e a ativação verifica a licença. IA cloud pode enviar mensagens, contexto, metadados, textos e imagens solicitados. Ollama só é local quando seu servidor é local. Uma URL remota é remota.

## Compartilhar um relatório

Prefira passos e exemplos públicos, sem chaves API, licenças, senhas ou documentos privados. Não anexe toda a pasta de dados publicamente. Veja a [política de privacidade](https://pdfbook.app/privacy) e o [guia de IA](/pt/features/ai-assistant/).
