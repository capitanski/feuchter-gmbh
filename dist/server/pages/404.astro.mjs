import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Wl4CagMY.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const { locals } = Astro2;
  const pageLanguage = locals.language ?? "de";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-zetdm5md> <div class="container" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> ${pageLanguage == "de" ? renderTemplate`<h2 data-astro-cid-zetdm5md>
Die angefragte Seite konnte leider nicht gefunden
                        werden.
</h2>` : renderTemplate`<h2 data-astro-cid-zetdm5md>The requested page could not be found.</h2>`} </div> </section> ` })} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/404.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
