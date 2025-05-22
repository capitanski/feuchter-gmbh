import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { C as Circles } from '../../chunks/Circles_Bt8dJA-c.mjs';
import { $ as $$ContactForm } from '../../chunks/ContactForm_BKLBO8rD.mjs';
/* empty css                                      */
import { $ as $$Layout } from '../../chunks/Layout_BPuxJA3I.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:4321");
const $$WelcomeContact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WelcomeContact;
  const { language, heading, subtitle, introText, Scribble, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-eu5miymy> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-eu5miymy> <div class="container" data-astro-cid-eu5miymy> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-eu5miymy> <div class="hero-container" data-astro-cid-eu5miymy> ${renderComponent($$result, "ContactForm", $$ContactForm, { "heading": heading, "subtitle": subtitle, "language": language, "data-astro-cid-eu5miymy": true })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/WelcomeContact.astro", void 0);

const Scribble = new Proxy({"src":"/custom-folder/teamimage.BdaDh2zy.webp","width":3000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/teamimage.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321");
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { locals } = Astro2;
  const pageLanguage = locals.language ?? "de";
  const metaData = {
    pageTitle: {
      de: "Kontakt | Feuchter GmbH",
      en: "Contact | Feuchter GmbH"
    },
    pageDescription: {
      de: "Ihre Vision ist nur noch einen Klick entfernt - Wir freuen uns, von Ihnen zu h\xF6ren.",
      en: "Your Vision is just a click away - We are looking forward to hear from you."
    }
  };
  let heading = "Ihre Vision ist nur noch einen Klick entfernt";
  let subtitle = "Wir freuen uns, von Ihnen zu h\xF6ren";
  let introText = `
Wir unterst\xFCtzen unsere Kunden von Anfang an bei ihren Projekten \u2013 von der Konzeption und Entwicklung \xFCber die Produktion bis hin zur Logistik. Mit unserer Expertise sorgen wir f\xFCr ma\xDFgeschneiderte L\xF6sungen, die effizient, zuverl\xE4ssig und nachhaltig sind.`;
  if (pageLanguage == "en") {
    heading = "Your Vision is just a click away";
    subtitle = "We are looking forward to hear from you";
    introText = `
We support our customers from the very beginning of their projects \u2013 from conception and development to production and logistics. With our expertise, we ensure tailored solutions that are efficient, reliable, and sustainable.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": metaData.pageTitle[pageLanguage], "pageDescription": metaData.pageDescription[pageLanguage] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeContact", $$WelcomeContact, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/contact.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
