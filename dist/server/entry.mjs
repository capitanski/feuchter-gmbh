import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CqJRH-hv.mjs';
import { manifest } from './manifest_CJZvLzik.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_lang_/about.astro.mjs');
const _page2 = () => import('./pages/_lang_/clothing.astro.mjs');
const _page3 = () => import('./pages/_lang_/legal/agbs.astro.mjs');
const _page4 = () => import('./pages/_lang_/legal/imprint.astro.mjs');
const _page5 = () => import('./pages/_lang_/legal/privacy.astro.mjs');
const _page6 = () => import('./pages/_lang_/projects/_project_.astro.mjs');
const _page7 = () => import('./pages/_lang_/projects.astro.mjs');
const _page8 = () => import('./pages/_lang_/services.astro.mjs');
const _page9 = () => import('./pages/_lang_/transportsolutions.astro.mjs');
const _page10 = () => import('./pages/_lang_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/[lang]/about.astro", _page1],
    ["src/pages/[lang]/clothing/index.astro", _page2],
    ["src/pages/[lang]/legal/agbs.astro", _page3],
    ["src/pages/[lang]/legal/imprint.astro", _page4],
    ["src/pages/[lang]/legal/privacy.astro", _page5],
    ["src/pages/[lang]/projects/[project].astro", _page6],
    ["src/pages/[lang]/projects/index.astro", _page7],
    ["src/pages/[lang]/services.astro", _page8],
    ["src/pages/[lang]/transportsolutions/index.astro", _page9],
    ["src/pages/[lang]/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/dist/client/",
    "server": "file:///home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/dist/server/",
    "host": true,
    "port": 4321,
    "assets": "custom-folder"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
