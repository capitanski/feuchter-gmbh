import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_D3XaGqlG.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_v0yfXJU5.mjs';
import { C as Circles, b as buttonTranslations } from './Layout_BEzOSaoH.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$WelcomeLeftAligned = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WelcomeLeftAligned;
  const { language, heading, subtitle, introText, Scribble, page } = Astro2.props;
  const showButton = page !== "projects";
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-trey3vdg> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="container" data-astro-cid-trey3vdg> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="hero-container" data-astro-cid-trey3vdg> <h1 class="hero-heading animatable" data-astro-cid-trey3vdg> ${heading} </h1> <p class="subtitle animatable" data-astro-cid-trey3vdg>${subtitle}</p> ${introText && renderTemplate`<p class="hero-paragraph" data-astro-cid-trey3vdg>${introText}</p>`} <div class="button-wrapper hero-button-wrapper" data-astro-cid-trey3vdg> ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("contact", language), "target": `/${language}/contact`, "class": "hero-button-1", "data-astro-cid-trey3vdg": true })} ${!showButton && renderTemplate`${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("aboutus", language), "target": `/${language}/about`, "class": "hero-button-2", "data-astro-cid-trey3vdg": true })}`} ${showButton && renderTemplate`${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("projects", language), "target": `/${language}/projects`, "class": "hero-button-2", "data-astro-cid-trey3vdg": true })}`} </div> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/WelcomeLeftAligned.astro", void 0);

export { $$WelcomeLeftAligned as $ };
