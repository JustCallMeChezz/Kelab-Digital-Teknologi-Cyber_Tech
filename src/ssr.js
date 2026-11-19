import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import SiteShell from './components/SiteShell.vue';
import HomeView from './views/HomeView.vue';
import KelabView from './views/KelabView.vue';
import AboutView from './views/AboutView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ContactView from './views/ContactView.vue';
import RegisterView from './views/RegisterView.vue';

const views = {
  home: HomeView,
  kelab: KelabView,
  about: AboutView,
  projects: ProjectsView,
  contact: ContactView,
  register: RegisterView
};

export async function render(page) {
  const View = views[page];
  if (!View) throw new Error(`Unknown page: ${page}`);

  const app = createSSRApp({
    render: () => h(SiteShell, { page }, { default: () => h(View) })
  });

  return renderToString(app);
}
