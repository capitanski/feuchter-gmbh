import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DiuBhDLF.mjs';
import { manifest } from './manifest_B6p8YpR1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_lang_/about.astro.mjs');
const _page2 = () => import('./pages/_lang_/projects/_project_.astro.mjs');
const _page3 = () => import('./pages/_lang_/projects.astro.mjs');
const _page4 = () => import('./pages/_lang_/services.astro.mjs');
const _page5 = () => import('./pages/_lang_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/[lang]/about.astro", _page1],
    ["src/pages/[lang]/projects/[project].astro", _page2],
    ["src/pages/[lang]/projects/index.astro", _page3],
    ["src/pages/[lang]/services.astro", _page4],
    ["src/pages/[lang]/index.astro", _page5]
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
    "client": "file:///C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/docs/client/",
    "server": "file:///C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/docs/server/",
    "host": false,
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
