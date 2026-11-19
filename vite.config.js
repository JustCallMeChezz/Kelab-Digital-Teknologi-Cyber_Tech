import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const pages = ['index', 'kelab', 'about', 'Project', 'service', 'pendaftaran', 'testing2'];

export default defineConfig({
  base: './',
  plugins: [vue()],
  build: {
    cssMinify: false,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [`page-${page}`, fileURLToPath(new URL(`./${page}.html`, import.meta.url))])
      )
    }
  }
});
