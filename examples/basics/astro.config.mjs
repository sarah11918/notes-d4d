import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      // defaultLocale: 'root',
      locales: {
        // English docs in `src/content/docs/en/`
        root: {
          label: 'English',
          lang: 'en', // lang is required for root locales
        },
        // Simplified Chinese docs in `src/content/docs/zh/`
        fr: {
          label: 'French',
          lang: 'fr',
        },
        se: {
          label: 'Swedish',
          lang: 'se',
        },
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Introduction', link: '/' },
          ],
        },
        // {
        //   label: 'Guides',
        //   autogenerate: { directory: 'guides' },
        // },
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
    }),
  ],
});
