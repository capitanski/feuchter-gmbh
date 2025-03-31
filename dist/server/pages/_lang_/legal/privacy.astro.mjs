import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import fs from 'fs/promises';
import { $ as $$Layout } from '../../../chunks/Layout_Be7f7Y1O.mjs';
/* empty css                                         */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Privacy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Privacy;
  const { language } = Astro2.locals;
  let richtext = "";
  try {
    richtext = await fs.readFile(
      `./src/content/htmldata/legal/privacy_${language}.html`,
      "utf-8"
    );
  } catch (err) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-mzzvkl6c": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-mzzvkl6c> <div class="container rich-text-dark" data-astro-cid-mzzvkl6c>${unescapeHTML(richtext)}</div> </section> ` })} `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/legal/privacy.astro", void 0);

const $$file = "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/legal/privacy.astro";
const $$url = "/[lang]/legal/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
