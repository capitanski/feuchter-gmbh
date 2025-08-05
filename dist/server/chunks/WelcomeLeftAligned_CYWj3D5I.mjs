import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_DhEF5pSX.mjs';
import { C as Circles } from './Circles_ByFtHb5k.mjs';
import { b as buttonTranslations } from './Layout_phyfGR1g.mjs';
/* empty css                         */

const $$Astro = createAstro("http://localhost:4321");
const $$WelcomeLeftAligned = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WelcomeLeftAligned;
  const { language, heading, subtitle, introText, Scribble, page } = Astro2.props;
  const showButton = page !== "projects";
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-trey3vdg> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="container" data-astro-cid-trey3vdg> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="hero-container" data-astro-cid-trey3vdg> <h1 class="hero-heading animatable" data-astro-cid-trey3vdg> ${heading} </h1> <p class="subtitle animatable" data-astro-cid-trey3vdg>${subtitle}</p> ${introText && renderTemplate`<p class="hero-paragraph" data-astro-cid-trey3vdg>${introText}</p>`} <div class="button-wrapper hero-button-wrapper" data-astro-cid-trey3vdg> ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("contact", language), "target": `/${language}/contact`, "class": "hero-button-1", "variant": "primary", "data-astro-cid-trey3vdg": true })} ${!showButton && renderTemplate`${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("aboutus", language), "target": `/${language}/about`, "class": "hero-button-2", "variant": "secondary", "data-astro-cid-trey3vdg": true })}`} ${showButton && renderTemplate`${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("projects", language), "target": `/${language}/projects`, "class": "hero-button-2", "data-astro-cid-trey3vdg": true })}`} </div> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/components/WelcomeLeftAligned.astro", void 0);

export { $$WelcomeLeftAligned as $ };
