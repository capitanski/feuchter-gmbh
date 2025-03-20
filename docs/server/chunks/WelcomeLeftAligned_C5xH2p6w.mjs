import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { C as Circles, a as $$Button } from './Layout_Bmhv3BOY.mjs';
/* empty css                         */

const $$Astro = createAstro("https://capitanski.github.io/");
const $$WelcomeLeftAligned = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WelcomeLeftAligned;
  const { language, heading, subtitle, introText, Scribble } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-trey3vdg> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="container" data-astro-cid-trey3vdg> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-trey3vdg> <div class="hero-container" data-astro-cid-trey3vdg> <h1 class="hero-heading animatable" data-astro-cid-trey3vdg> ${heading} </h1> <p class="subtitle animatable" data-astro-cid-trey3vdg>${subtitle}</p> <p class="hero-paragraph" data-astro-cid-trey3vdg> ${introText} </p> <div class="button-wrapper hero-button-wrapper" data-astro-cid-trey3vdg> ${renderComponent($$result, "Button", $$Button, { "linkText": "Jetzt anfragen", "target": "#kontakt", "class": "hero-button-1", "data-astro-cid-trey3vdg": true })} ${renderComponent($$result, "Button", $$Button, { "linkText": "Referenzen", "target": "#rezensionen", "class": "hero-button-2", "data-astro-cid-trey3vdg": true })} </div> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/WelcomeLeftAligned.astro", void 0);

export { $$WelcomeLeftAligned as $ };
