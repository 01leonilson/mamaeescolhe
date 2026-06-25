import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// URL pública do site — ajuste para o domínio real em produção
export const SITE_URL = 'https://mamaeescolhe.com.br';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Inlina o CSS no <head> de cada página, eliminando a requisição
  // render-blocking ao stylesheet externo (melhora FCP/LCP/Speed Index).
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/draft/'),
    }),
  ],
});
