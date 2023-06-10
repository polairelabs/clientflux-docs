import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";


// https://astro.build/config
export default defineConfig({
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
  }), sitemap()],
  output: "server",
  adapter: cloudflare()
});