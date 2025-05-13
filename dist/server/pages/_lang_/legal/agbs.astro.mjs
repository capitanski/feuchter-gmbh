import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import fs from 'fs/promises';
import { $ as $$Layout } from '../../../chunks/Layout_aDJLy9Xb.mjs';
/* empty css                                      */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Agbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Agbs;
  const { language } = Astro2.locals;
  let richtext = "";
  try {
    richtext = await fs.readFile(
      `./src/content/htmldata/legal/agbs_${language}.html`,
      "utf-8"
    );
  } catch (err) {
    return new Response(null, { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-wljiisl4": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-wljiisl4> <div class="container rich-text-dark" data-astro-cid-wljiisl4>${unescapeHTML(richtext)}</div> </section> ` })} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/legal/agbs.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/legal/agbs.astro";
const $$url = "/[lang]/legal/agbs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Agbs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
