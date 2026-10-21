export const locales = {
  en: { name: 'English', lang: 'en' }, ja: { name: '日本語', lang: 'ja' },
  zh: { name: '简体中文', lang: 'zh-CN' }, ko: { name: '한국어', lang: 'ko' },
  es: { name: 'Español', lang: 'es' }, fr: { name: 'Français', lang: 'fr' },
  de: { name: 'Deutsch', lang: 'de' }, pt: { name: 'Português (Brasil)', lang: 'pt-BR' },
  ru: { name: 'Русский', lang: 'ru' }, it: { name: 'Italiano', lang: 'it' },
  id: { name: 'Bahasa Indonesia', lang: 'id' }, vi: { name: 'Tiếng Việt', lang: 'vi' },
};

export const groups = [
  ['getting-started', 'download'],
  ['features/reader', 'features/library'],
  ['features/creating-pdfs', 'features/screen-capture', 'features/ai-assistant'],
  ['settings', 'plans-and-licenses', 'privacy', 'troubleshooting', 'faq'],
];
export const slugs = ['', ...groups.flat()];

// Copy shared by navigation and the guide directory, separate from article text.
export const ui = {
  en: {
    guide: 'Guides', website: 'Website', download: 'Download', start: 'Start with your first PDF', language: 'Choose your language',
    homeTitle: 'Get to know your bookshelf.', homeIntro: 'From your first book to a shelf full of favorites. Find your reading rhythm, organize your PDFs, and make the tools your own.',
    browse: 'What would you like to do?', browseIntro: 'Follow a guide, or jump straight to what you need.',
    steps: ['Install PDFBook', 'Add your books', 'Make time to read'],
    groupNames: ['Start here', 'Read and organize', 'Work with PDFs', 'Make it yours'],
    nav: ['Get started', 'Download and install', 'Reader and manga', 'Your library', 'Create, convert, extract', 'Screen capture', 'AI assistant', 'Settings', 'Plans and licenses', 'Files and privacy', 'Troubleshooting', 'FAQ'],
    support: 'A hand when you need one.', supportText: 'Find an answer, share a question, or tell us what went wrong.', contact: 'Contact support', faq: 'Common questions',
    shot: 'PDFBook reader with a two-page book spread', libraryShot: 'PDFBook library with covers and folders',
    privacy: 'Read on your computer. Choose AI only when you need it.', privacyText: 'Reading and PDF tools run locally. Cloud AI sends your requests and any requested document content to the provider you choose.',
  },
  ja: {
    guide: 'ガイド', website: '公式サイト', download: 'ダウンロード', start: '最初の一冊を追加する', language: '表示言語を選ぶ',
    homeTitle: '本棚づくりから、\n次の一ページまで。', homeIntro: 'はじめての一冊も、増えていくお気に入りも。PDFを整理して、自分に合う読み方を見つけるためのガイドです。',
    browse: '何をしてみたいですか？', browseIntro: '順番に読み進めても、必要なところから開いても。',
    steps: ['PDFBookをインストール', '本棚にPDFを追加', '自分に合う表示で読む'],
    groupNames: ['はじめに', '読む・整理する', 'PDFを活用する', '自分に合わせる'],
    nav: ['はじめて使う', 'ダウンロード・インストール', 'リーダー・マンガ', 'ライブラリの整理', 'PDF作成・変換・画像抽出', '画面から取り込む', 'AIアシスタント', '設定', 'プラン・ライセンス', 'ファイルとプライバシー', '困ったときは', 'よくある質問'],
    support: '困ったときも、次のページへ。', supportText: 'よくある質問で調べるか、サポートにお問い合わせください。', contact: '問い合わせる', faq: 'よくある質問',
    shot: '本を見開きで表示したPDFBookのリーダー', libraryShot: '表紙とフォルダで本を整理したPDFBookのライブラリ',
    privacy: '読書は手元のPCで。AIは必要なときに。', privacyText: '読書やPDFの作成・変換はPC内で動作します。クラウドAIを使うと、依頼した内容や対象の文書データが設定先へ送信されます。',
  },
  zh: {
    guide: '使用指南', website: '官方网站', download: '下载', start: '添加你的第一本书', language: '选择语言',
    homeTitle: '从整理书架，到翻开下一页。', homeIntro: '从第一本书到不断增加的收藏，了解如何整理 PDF、选择合适的阅读方式，并使用实用工具。',
    browse: '你想做什么？', browseIntro: '从头开始，或直接找到需要的操作。', steps: ['安装 PDFBook', '添加书籍', '开始阅读'],
    groupNames: ['开始使用', '阅读与整理', 'PDF 工具', '个性化与帮助'],
    nav: ['快速入门', '下载与安装', '阅读器与漫画', '书库管理', '创建、转换与图片提取', '屏幕采集', 'AI 助手', '设置', '方案与许可证', '文件与隐私', '故障排查', '常见问题'],
    support: '需要帮助时，我们在这里。', supportText: '查找常见问题、提出疑问，或告诉我们遇到的情况。', contact: '联系支持', faq: '常见问题',
    shot: 'PDFBook 阅读器显示双页书籍', libraryShot: 'PDFBook 书库的封面和文件夹',
    privacy: '在本机阅读，按需选择 AI。', privacyText: '阅读和 PDF 工具在本机运行。云端 AI 会将请求及所请求的文档内容发送给你选择的服务商。',
  },
  ko: {
    guide: '사용 가이드', website: '공식 웹사이트', download: '다운로드', start: '첫 번째 PDF 추가하기', language: '언어 선택',
    homeTitle: '책장을 꾸미고, 다음 페이지로.', homeIntro: '첫 책부터 늘어나는 즐겨찾기까지. PDF를 정리하고 나에게 맞는 읽기 방식과 도구를 찾아보세요.',
    browse: '무엇을 하고 싶으신가요?', browseIntro: '처음부터 따라 하거나 필요한 내용으로 바로 이동하세요.', steps: ['PDFBook 설치', '책 추가', '나에게 맞게 읽기'],
    groupNames: ['시작하기', '읽기와 정리', 'PDF 도구', '설정과 도움말'],
    nav: ['처음 사용하기', '다운로드와 설치', '리더와 만화', '라이브러리', '만들기·변환·이미지 추출', '화면 캡처', 'AI 도우미', '설정', '플랜과 라이선스', '파일과 개인정보', '문제 해결', '자주 묻는 질문'],
    support: '도움이 필요할 때.', supportText: '자주 묻는 질문을 확인하거나 문의와 문제 상황을 보내 주세요.', contact: '지원 문의', faq: '자주 묻는 질문',
    shot: '책을 두 페이지로 펼쳐 보여 주는 PDFBook 리더', libraryShot: '표지와 폴더로 구성된 PDFBook 라이브러리',
    privacy: '읽기는 내 컴퓨터에서. AI는 필요할 때만.', privacyText: '읽기와 PDF 도구는 기기에서 실행됩니다. 클라우드 AI를 사용하면 요청과 요청한 문서 내용이 선택한 제공업체에 전송됩니다.',
  },
  es: {
    guide: 'Guías', website: 'Sitio web', download: 'Descargar', start: 'Añade tu primer PDF', language: 'Elige tu idioma',
    homeTitle: 'Tu biblioteca, a tu manera.', homeIntro: 'Del primer libro a una colección de favoritos. Organiza tus PDF, encuentra tu ritmo de lectura y aprende a usar las herramientas.',
    browse: '¿Qué te gustaría hacer?', browseIntro: 'Sigue una guía o ve directamente a lo que necesitas.', steps: ['Instala PDFBook', 'Añade tus libros', 'Empieza a leer'],
    groupNames: ['Primeros pasos', 'Leer y organizar', 'Trabajar con PDF', 'A tu medida'],
    nav: ['Empezar', 'Descarga e instalación', 'Lector y manga', 'Tu biblioteca', 'Crear, convertir y extraer', 'Captura de pantalla', 'Asistente de IA', 'Ajustes', 'Planes y licencias', 'Archivos y privacidad', 'Solución de problemas', 'Preguntas frecuentes'],
    support: 'Una mano cuando la necesitas.', supportText: 'Busca una respuesta, haz una pregunta o cuéntanos qué ha ocurrido.', contact: 'Contactar con soporte', faq: 'Preguntas frecuentes',
    shot: 'Lector de PDFBook mostrando un libro a doble página', libraryShot: 'Biblioteca de PDFBook con portadas y carpetas',
    privacy: 'Lee en tu equipo. Usa IA cuando la necesites.', privacyText: 'La lectura y las herramientas PDF funcionan localmente. La IA en la nube envía tus solicitudes y el contenido solicitado al proveedor que elijas.',
  },
  fr: {
    guide: 'Guides', website: 'Site officiel', download: 'Télécharger', start: 'Ajoutez votre premier PDF', language: 'Choisir la langue',
    homeTitle: 'Votre bibliothèque prend vie.', homeIntro: 'Du premier livre aux favoris qui s’accumulent. Organisez vos PDF, trouvez votre rythme de lecture et découvrez les outils.',
    browse: 'Que souhaitez-vous faire ?', browseIntro: 'Suivez un guide ou allez directement à l’essentiel.', steps: ['Installer PDFBook', 'Ajouter vos livres', 'Prendre le temps de lire'],
    groupNames: ['Premiers pas', 'Lire et organiser', 'Travailler avec les PDF', 'À votre façon'],
    nav: ['Bien démarrer', 'Télécharger et installer', 'Lecteur et mangas', 'Votre bibliothèque', 'Créer, convertir, extraire', 'Capture d’écran', 'Assistant IA', 'Réglages', 'Offres et licences', 'Fichiers et confidentialité', 'Dépannage', 'Questions fréquentes'],
    support: 'Un coup de main au bon moment.', supportText: 'Trouvez une réponse, posez une question ou décrivez votre problème.', contact: 'Contacter l’assistance', faq: 'Questions fréquentes',
    shot: 'Lecteur PDFBook affichant un livre en double page', libraryShot: 'Bibliothèque PDFBook avec couvertures et dossiers',
    privacy: 'Lisez sur votre ordinateur. Choisissez l’IA à votre rythme.', privacyText: 'La lecture et les outils PDF fonctionnent localement. L’IA cloud transmet vos demandes et le contenu demandé au fournisseur choisi.',
  },
  de: {
    guide: 'Anleitungen', website: 'Website', download: 'Herunterladen', start: 'Dein erstes PDF hinzufügen', language: 'Sprache wählen',
    homeTitle: 'Dein Bücherregal kennenlernen.', homeIntro: 'Vom ersten Buch bis zur Sammlung voller Favoriten. Ordne deine PDFs, finde deinen Leserhythmus und entdecke die Werkzeuge.',
    browse: 'Was möchtest du tun?', browseIntro: 'Folge einer Anleitung oder spring direkt zum passenden Thema.', steps: ['PDFBook installieren', 'Bücher hinzufügen', 'Mit dem Lesen anfangen'],
    groupNames: ['Erste Schritte', 'Lesen und ordnen', 'Mit PDFs arbeiten', 'Deine Einstellungen'],
    nav: ['Loslegen', 'Download und Installation', 'Reader und Manga', 'Deine Bibliothek', 'Erstellen, konvertieren, extrahieren', 'Bildschirmaufnahme', 'KI-Assistent', 'Einstellungen', 'Tarife und Lizenzen', 'Dateien und Datenschutz', 'Problemlösung', 'Häufige Fragen'],
    support: 'Hilfe, wenn du sie brauchst.', supportText: 'Finde eine Antwort, stelle eine Frage oder beschreibe dein Problem.', contact: 'Support kontaktieren', faq: 'Häufige Fragen',
    shot: 'PDFBook-Reader mit einem Buch auf einer Doppelseite', libraryShot: 'PDFBook-Bibliothek mit Covern und Ordnern',
    privacy: 'Auf deinem Computer lesen. KI nach Bedarf nutzen.', privacyText: 'Lesen und PDF-Werkzeuge laufen lokal. Cloud-KI sendet deine Anfragen und angeforderte Dokumentinhalte an den gewählten Anbieter.',
  },
  pt: {
    guide: 'Guias', website: 'Site oficial', download: 'Baixar', start: 'Adicione seu primeiro PDF', language: 'Escolher idioma',
    homeTitle: 'Conheça sua própria estante.', homeIntro: 'Do primeiro livro a uma coleção de favoritos. Organize seus PDFs, encontre seu ritmo de leitura e descubra as ferramentas.',
    browse: 'O que você quer fazer?', browseIntro: 'Siga um guia ou vá direto ao que precisa.', steps: ['Instalar o PDFBook', 'Adicionar seus livros', 'Começar a ler'],
    groupNames: ['Primeiros passos', 'Ler e organizar', 'Trabalhar com PDFs', 'Do seu jeito'],
    nav: ['Começar', 'Download e instalação', 'Leitor e mangás', 'Sua biblioteca', 'Criar, converter e extrair', 'Captura de tela', 'Assistente de IA', 'Configurações', 'Planos e licenças', 'Arquivos e privacidade', 'Solução de problemas', 'Perguntas frequentes'],
    support: 'Uma ajuda quando você precisar.', supportText: 'Encontre uma resposta, faça uma pergunta ou conte o que aconteceu.', contact: 'Falar com o suporte', faq: 'Perguntas frequentes',
    shot: 'Leitor do PDFBook exibindo um livro em página dupla', libraryShot: 'Biblioteca do PDFBook com capas e pastas',
    privacy: 'Leia no seu computador. Use IA quando quiser.', privacyText: 'A leitura e as ferramentas PDF funcionam localmente. A IA na nuvem envia suas solicitações e o conteúdo solicitado ao provedor escolhido.',
  },
  ru: {
    guide: 'Руководства', website: 'Сайт', download: 'Скачать', start: 'Добавить первый PDF', language: 'Выбрать язык',
    homeTitle: 'Освойтесь на своей книжной полке.', homeIntro: 'От первой книги до коллекции избранного. Упорядочьте PDF, найдите свой ритм чтения и познакомьтесь с инструментами.',
    browse: 'Что вы хотите сделать?', browseIntro: 'Пройдите руководство по порядку или сразу откройте нужную тему.', steps: ['Установить PDFBook', 'Добавить книги', 'Начать чтение'],
    groupNames: ['Начало работы', 'Чтение и библиотека', 'Работа с PDF', 'Настройки и помощь'],
    nav: ['Первые шаги', 'Загрузка и установка', 'Читалка и манга', 'Библиотека', 'Создание, конвертация, извлечение', 'Захват экрана', 'ИИ-помощник', 'Настройки', 'Планы и лицензии', 'Файлы и конфиденциальность', 'Решение проблем', 'Частые вопросы'],
    support: 'Помощь, когда она нужна.', supportText: 'Найдите ответ, задайте вопрос или расскажите о проблеме.', contact: 'Связаться с поддержкой', faq: 'Частые вопросы',
    shot: 'Читалка PDFBook с двухстраничным разворотом книги', libraryShot: 'Библиотека PDFBook с обложками и папками',
    privacy: 'Читайте на своём компьютере. Выбирайте ИИ по желанию.', privacyText: 'Чтение и PDF-инструменты работают локально. Облачный ИИ отправляет запросы и запрошенное содержимое документов выбранному провайдеру.',
  },
  it: {
    guide: 'Guide', website: 'Sito ufficiale', download: 'Scarica', start: 'Aggiungi il tuo primo PDF', language: 'Scegli la lingua',
    homeTitle: 'Fai spazio alla tua libreria.', homeIntro: 'Dal primo libro a una raccolta di preferiti. Organizza i PDF, trova il tuo ritmo di lettura e scopri gli strumenti.',
    browse: 'Che cosa vuoi fare?', browseIntro: 'Segui una guida o passa direttamente a ciò che ti serve.', steps: ['Installa PDFBook', 'Aggiungi i tuoi libri', 'Inizia a leggere'],
    groupNames: ['Primi passi', 'Leggere e organizzare', 'Lavorare con i PDF', 'A modo tuo'],
    nav: ['Per iniziare', 'Download e installazione', 'Lettore e manga', 'La tua libreria', 'Creare, convertire, estrarre', 'Cattura dello schermo', 'Assistente IA', 'Impostazioni', 'Piani e licenze', 'File e privacy', 'Risoluzione dei problemi', 'Domande frequenti'],
    support: 'Una mano quando serve.', supportText: 'Trova una risposta, fai una domanda o raccontaci il problema.', contact: 'Contatta l’assistenza', faq: 'Domande frequenti',
    shot: 'Lettore PDFBook con un libro su due pagine', libraryShot: 'Libreria PDFBook con copertine e cartelle',
    privacy: 'Leggi sul tuo computer. Scegli l’IA quando serve.', privacyText: 'La lettura e gli strumenti PDF funzionano in locale. L’IA cloud invia le richieste e i contenuti richiesti al provider scelto.',
  },
  id: {
    guide: 'Panduan', website: 'Situs resmi', download: 'Unduh', start: 'Tambahkan PDF pertama', language: 'Pilih bahasa',
    homeTitle: 'Kenali rak buku Anda sendiri.', homeIntro: 'Dari buku pertama hingga koleksi favorit. Rapikan PDF, temukan cara membaca yang nyaman, dan pelajari alat yang tersedia.',
    browse: 'Apa yang ingin Anda lakukan?', browseIntro: 'Ikuti panduan atau langsung buka topik yang dibutuhkan.', steps: ['Pasang PDFBook', 'Tambahkan buku', 'Mulai membaca'],
    groupNames: ['Mulai di sini', 'Membaca dan mengatur', 'Bekerja dengan PDF', 'Sesuai kebutuhan'],
    nav: ['Memulai', 'Unduh dan pasang', 'Pembaca dan manga', 'Pustaka Anda', 'Buat, konversi, ekstrak', 'Tangkapan layar', 'Asisten AI', 'Pengaturan', 'Paket dan lisensi', 'Berkas dan privasi', 'Pemecahan masalah', 'Pertanyaan umum'],
    support: 'Bantuan saat Anda memerlukannya.', supportText: 'Cari jawaban, ajukan pertanyaan, atau ceritakan masalah Anda.', contact: 'Hubungi dukungan', faq: 'Pertanyaan umum',
    shot: 'Pembaca PDFBook menampilkan buku dalam dua halaman', libraryShot: 'Pustaka PDFBook dengan sampul dan folder',
    privacy: 'Membaca di komputer Anda. AI hanya saat dibutuhkan.', privacyText: 'Membaca dan alat PDF berjalan lokal. AI cloud mengirim permintaan dan isi dokumen yang diminta ke penyedia pilihan Anda.',
  },
  vi: {
    guide: 'Hướng dẫn', website: 'Trang web', download: 'Tải xuống', start: 'Thêm tệp PDF đầu tiên', language: 'Chọn ngôn ngữ',
    homeTitle: 'Làm quen với kệ sách của bạn.', homeIntro: 'Từ cuốn sách đầu tiên đến bộ sưu tập yêu thích. Sắp xếp PDF, tìm nhịp đọc phù hợp và khám phá các công cụ.',
    browse: 'Bạn muốn làm gì?', browseIntro: 'Làm theo hướng dẫn hoặc chuyển thẳng đến nội dung cần tìm.', steps: ['Cài PDFBook', 'Thêm sách', 'Bắt đầu đọc'],
    groupNames: ['Bắt đầu', 'Đọc và sắp xếp', 'Làm việc với PDF', 'Theo cách của bạn'],
    nav: ['Lần đầu sử dụng', 'Tải và cài đặt', 'Trình đọc và manga', 'Thư viện', 'Tạo, chuyển đổi, trích xuất', 'Chụp màn hình', 'Trợ lý AI', 'Cài đặt', 'Gói và giấy phép', 'Tệp và quyền riêng tư', 'Khắc phục sự cố', 'Câu hỏi thường gặp'],
    support: 'Trợ giúp khi bạn cần.', supportText: 'Tìm câu trả lời, đặt câu hỏi hoặc cho chúng tôi biết vấn đề.', contact: 'Liên hệ hỗ trợ', faq: 'Câu hỏi thường gặp',
    shot: 'Trình đọc PDFBook hiển thị sách ở chế độ hai trang', libraryShot: 'Thư viện PDFBook với bìa sách và thư mục',
    privacy: 'Đọc trên máy của bạn. Dùng AI khi cần.', privacyText: 'Đọc và các công cụ PDF hoạt động cục bộ. AI đám mây gửi yêu cầu và nội dung tài liệu được yêu cầu đến nhà cung cấp bạn chọn.',
  },
};

export function localeFromRoute(locale) { return locale && locale !== 'root' ? locale : 'en'; }
export function docPath(locale, slug = '') { return `/${locale === 'en' ? '' : `${locale}/`}${slug ? `${slug}/` : ''}`; }
export function productPath(locale) { return `https://pdfbook.app${locale === 'en' ? '' : `/${locale}`}`; }

export const sidebar = groups.map((items, index) => ({
  label: ui.en.groupNames[index],
  translations: Object.fromEntries(Object.keys(locales).filter(code => code !== 'en').map(code => [code, ui[code].groupNames[index]])),
  items: items.map(slug => {
    const page = slugs.indexOf(slug) - 1;
    return { slug, label: ui.en.nav[page], translations: Object.fromEntries(Object.keys(locales).filter(code => code !== 'en').map(code => [code, ui[code].nav[page]])) };
  }),
}));
