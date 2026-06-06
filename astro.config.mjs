// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Page de projet servie sous un domaine custom configuré sur le site
// utilisateur (benji07.github.io) -> URL finale : https://benjamin.leveque.me/photo-explore/
export default defineConfig({
  site: 'https://benjamin.leveque.me',
  base: '/photo-explore',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
