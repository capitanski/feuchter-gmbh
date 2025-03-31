import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { C as Circles, $ as $$Layout } from '../../chunks/Layout_CdeovOSY.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BPALx_-G.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://192.168.178.48:4321/");
const $$WelcomeContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WelcomeContact;
  const { language, heading, subtitle, introText, Scribble, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-eu5miymy> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-eu5miymy> <div class="container" data-astro-cid-eu5miymy> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-eu5miymy> <div class="hero-container" data-astro-cid-eu5miymy> ${renderComponent($$result, "ContactForm", $$ContactForm, { "data-astro-cid-eu5miymy": true })} </div> </div> </section> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/WelcomeContact.astro", void 0);

const Scribble = new Proxy({"src":"/custom-folder/teamimage.SGbNsW24.jpg","width":3000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/team/teamimage.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Ihr Vision ist nur noch einen Klick entfernt";
  let subtitle = "Wir freuen uns, von Ihnen zu h\xF6ren";
  let introText = `
Wir unterst\xFCtzen unsere Kunden von Anfang an bei ihren Projekten \u2013 von der Konzeption und Entwicklung \xFCber die Produktion bis hin zur Logistik. Mit unserer Expertise sorgen wir f\xFCr ma\xDFgeschneiderte L\xF6sungen, die effizient, zuverl\xE4ssig und nachhaltig sind.`;
  if (pageLanguage == "en") {
    heading = "We are looking forward to hear from you";
    subtitle = "From conception to production to logistics";
    introText = `
We support our customers from the very beginning of their projects \u2013 from conception and development to production and logistics. With our expertise, we ensure tailored solutions that are efficient, reliable, and sustainable.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeContact", $$WelcomeContact, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ` })}`;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/contact.astro", void 0);

const $$file = "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
