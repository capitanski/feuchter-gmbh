import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { linkText, target, class: className, language } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(target || "#", "href")}${addAttribute(className, "class")} data-astro-cid-vnzlvqnm> ${linkText} </a> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Button.astro", void 0);

export { $$Button as $ };
