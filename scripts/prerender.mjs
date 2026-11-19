import { readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

const pages = [
  { file: 'index', page: 'home' },
  { file: 'testing2', page: 'home' },
  { file: 'kelab', page: 'kelab' },
  { file: 'about', page: 'about' },
  { file: 'Project', page: 'projects' },
  { file: 'service', page: 'contact' },
  { file: 'pendaftaran', page: 'register' }
];

const vite = await createServer({
  root,
  appType: 'custom',
  server: { middlewareMode: true }
});

try {
  const { render } = await vite.ssrLoadModule('/src/ssr.js');

  for (const { file, page } of pages) {
    const template = await readFile(resolve(dist, `${file}.html`), 'utf8');
    if (!template.includes('<div id="app"></div>')) {
      throw new Error(`Missing <div id="app"></div> in dist/${file}.html`);
    }

    const html = await render(page);
    const output = template.replace('<div id="app"></div>', `<div id="app">${html}</div>`);
    await writeFile(resolve(dist, `${file}.html`), output);
    console.log(`prerendered ${file}.html (${page})`);
  }

  const assetFiles = await readdir(resolve(dist, 'assets'));
  await Promise.all(
    assetFiles.filter((name) => name.endsWith('.html')).map((name) => rm(resolve(dist, 'assets', name)))
  );
} finally {
  await vite.close();
}
