// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// Keep canonical URLs and the generated sitemap on the documentation domain.
export default defineConfig({
  site: "https://wiki.pdfbook.app",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "PDFBook",
      description:
        "PDFBook documentation: read books and manga, organize local PDFs, create and convert documents, and install the desktop app on Windows, macOS, or Linux.",
      head: [
        { tag: "meta", attrs: { name: "robots", content: "index,follow,max-image-preview:large" } },
        { tag: "meta", attrs: { property: "og:image", content: "https://wiki.pdfbook.app/images/library-en.webp" } },
        { tag: "meta", attrs: { property: "og:image:width", content: "1920" } },
        { tag: "meta", attrs: { property: "og:image:height", content: "1200" } },
        { tag: "meta", attrs: { property: "og:image:alt", content: "PDFBook desktop library with demonstration books" } },
        { tag: "meta", attrs: { name: "twitter:image", content: "https://wiki.pdfbook.app/images/library-en.webp" } },
        { tag: "meta", attrs: { name: "twitter:image:alt", content: "PDFBook desktop library with demonstration books" } },
      ],
      // Self-hosted Inter (matches the app + pdfbook.app), then the monochrome
      // theme + native-element overrides. Font CSS must load before custom.css.
      customCss: ["@fontsource-variable/inter/index.css", "./src/styles/custom.css"],
      // English lives at the root path (/) for the widest search reach;
      // Japanese is served under /ja/. Pages without a Japanese translation
      // fall back to English automatically.
      defaultLocale: "root",
      locales: {
        root: { label: "English", lang: "en" },
        ja: { label: "日本語", lang: "ja" },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/YumeBytesLab/PDFBook",
        },
      ],
      sidebar: [
        {
          label: "Start here",
          translations: { ja: "はじめに" },
          items: [
            { label: "Getting started", slug: "getting-started" },
            { label: "Download", slug: "download" },
          ],
        },
        {
          label: "Features",
          translations: { ja: "機能" },
          items: [
            { label: "Reader", slug: "features/reader" },
            { label: "Library", slug: "features/library" },
            { label: "Creating PDFs", slug: "features/creating-pdfs" },
            { label: "Screen capture", slug: "features/screen-capture" },
            { label: "AI assistant", slug: "features/ai-assistant" },
          ],
        },
        {
          label: "Help",
          translations: { ja: "ヘルプ" },
          items: [{ label: "FAQ", slug: "faq" }],
        },
      ],
    }),
  ],
});
