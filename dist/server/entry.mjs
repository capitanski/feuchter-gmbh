import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CExxISlE.mjs';
import { manifest } from './manifest_DwafXhkE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/api/login.astro.mjs');
const _page4 = () => import('./pages/_lang_/about.astro.mjs');
const _page5 = () => import('./pages/_lang_/clothing/_solution_.astro.mjs');
const _page6 = () => import('./pages/_lang_/clothing.astro.mjs');
const _page7 = () => import('./pages/_lang_/contact.astro.mjs');
const _page8 = () => import('./pages/_lang_/legal/agbs.astro.mjs');
const _page9 = () => import('./pages/_lang_/legal/imprint.astro.mjs');
const _page10 = () => import('./pages/_lang_/legal/privacy.astro.mjs');
const _page11 = () => import('./pages/_lang_/login.astro.mjs');
const _page12 = () => import('./pages/_lang_/projects/_project_.astro.mjs');
const _page13 = () => import('./pages/_lang_/projects.astro.mjs');
const _page14 = () => import('./pages/_lang_/services.astro.mjs');
const _page15 = () => import('./pages/_lang_/transportsolutions/_solution_.astro.mjs');
const _page16 = () => import('./pages/_lang_/transportsolutions.astro.mjs');
const _page17 = () => import('./pages/_lang_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/api/login.ts", _page3],
    ["src/pages/[lang]/about.astro", _page4],
    ["src/pages/[lang]/clothing/[solution].astro", _page5],
    ["src/pages/[lang]/clothing/index.astro", _page6],
    ["src/pages/[lang]/contact.astro", _page7],
    ["src/pages/[lang]/legal/agbs.astro", _page8],
    ["src/pages/[lang]/legal/imprint.astro", _page9],
    ["src/pages/[lang]/legal/privacy.astro", _page10],
    ["src/pages/[lang]/login.astro", _page11],
    ["src/pages/[lang]/projects/[project].astro", _page12],
    ["src/pages/[lang]/projects/index.astro", _page13],
    ["src/pages/[lang]/services.astro", _page14],
    ["src/pages/[lang]/transportsolutions/[solution].astro", _page15],
    ["src/pages/[lang]/transportsolutions/index.astro", _page16],
    ["src/pages/[lang]/index.astro", _page17]
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
    "client": "file:///C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/dist/client/",
    "server": "file:///C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/dist/server/",
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
