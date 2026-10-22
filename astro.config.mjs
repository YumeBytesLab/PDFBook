// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { locales, sidebar } from './src/i18n/site.mjs';

export default defineConfig({
  site: 'https://wiki.pdfbook.app', trailingSlash: 'always',
  integrations: [starlight({
    title: 'PDFBook', description: 'PDFBook guides for reading, organizing and working with PDFs.',
    favicon: '/images/app-icon.png', credits: false,
    head: [
      // Opt in before first paint; external CSS can arrive after the incoming transition is resolved.
      { tag: 'style', content: '@view-transition { navigation: auto; } @media (prefers-reduced-motion: reduce) { @view-transition { navigation: none; } }' },
      { tag: 'meta', attrs: { name: 'robots', content: 'index,follow,max-image-preview:large' } },
      { tag: 'meta', attrs: { property: 'og:image', content: 'https://wiki.pdfbook.app/images/library-en.webp' } },
      { tag: 'meta', attrs: { property: 'og:image:width', content: '1920' } },
      { tag: 'meta', attrs: { property: 'og:image:height', content: '1200' } },
      { tag: 'meta', attrs: { property: 'og:image:alt', content: 'PDFBook library' } },
      { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://wiki.pdfbook.app/images/library-en.webp' } },
    ],
    customCss: ['@fontsource-variable/inter/index.css', './src/styles/custom.css'],
    components: {
      Header: './src/components/Header.astro', Hero: './src/components/Hero.astro',
      PageTitle: './src/components/PageTitle.astro', Footer: './src/components/Footer.astro',
      MobileMenuToggle: './src/components/MobileMenuToggle.astro', MobileMenuFooter: './src/components/MobileMenuFooter.astro',
    },
    defaultLocale: 'root',
    locales: Object.fromEntries(Object.entries(locales).map(([code, item]) => [code === 'en' ? 'root' : code, { label: item.name, lang: item.lang }])),
    sidebar,
  })],
});
