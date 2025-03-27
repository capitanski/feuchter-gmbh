import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_D3XaGqlG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { linkText, target, class: className, language } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(target || "#", "href")}${addAttribute(className, "class")} data-astro-cid-vnzlvqnm> ${linkText} </a> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Button.astro", void 0);

export { $$Button as $ };
