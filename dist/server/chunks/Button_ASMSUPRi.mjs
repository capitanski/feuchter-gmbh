import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { linkText, target, class: className, language, variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(target || "#", "href")}${addAttribute(`${className} ${variant}`, "class")} data-astro-cid-vnzlvqnm> ${linkText} </a> `;
}, "C:/Users/felix/Desktop/feuchter-gmbh/feuchter-gmbh/src/components/Button.astro", void 0);

export { $$Button as $ };
