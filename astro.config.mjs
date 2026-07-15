// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// `site` is what makes Starlight emit correct canonical URLs and a sitemap.xml
// (both are SEO essentials). It must match the public custom domain exactly.
export default defineConfig({
  site: "https://wiki.pdfbook.app",
  integrations: [
    starlight({
      title: "PDFBook",
      description:
        "Read, create, extract, and organize your PDF library — a fast, private desktop app for Windows, macOS, and Linux.",
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
