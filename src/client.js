import './styles/site.css';
import './fonts.js';
import { createApp, createSSRApp, h } from 'vue';
import SiteShell from './components/SiteShell.vue';

export function mountPage(View, page) {
  const factory = import.meta.env.DEV ? createApp : createSSRApp;
  const app = factory({
    render: () => h(SiteShell, { page }, { default: () => h(View) })
  });
  app.mount('#app');
}
