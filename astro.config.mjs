import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
  site: 'https://help.clientflux.io',
  base: '/my-repo',
  integrations: [starlight({
    customCss: ['/src/assets/custom-styles.css', '@fontsource/roboto'],
    title: '',
    logo: {
      src: '/src/assets/clientflux-logo-white.webp'
    },
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), sitemap()]
});
