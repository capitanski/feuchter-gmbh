import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_ClesInOg.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BOf780Oc.mjs';
import { $ as $$Leistungen } from '../../chunks/Leistungen_BORZTDwV.mjs';
export { renderers } from '../../renderers.mjs';

const Scribble = new Proxy({"src":"/custom-folder/leistungen.CE96ka63.jpg","width":1920,"height":1281,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/leistungen.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Wir unterst\xFCtzen Sie bei Ihrem Vorhaben von Anfang an.";
  let subtitle = "Ein Parnter, der h\xE4lt was er verspricht";
  let introText = `
Wir unterst\xFCtzen unsere Kunden von Anfang an bei ihren Projekten \u2013 von der Konzeption und Entwicklung \xFCber die Produktion bis hin zur Logistik. Mit unserer Expertise sorgen wir f\xFCr ma\xDFgeschneiderte L\xF6sungen, die effizient, zuverl\xE4ssig und nachhaltig sind.`;
  if (pageLanguage == "en") {
    heading = "We support you in your endeavor from the very beginning.";
    subtitle = "From conception to production to logistics";
    introText = `
We support our customers from the very beginning of their projects \u2013 from conception and development to production and logistics. With our expertise, we ensure tailored solutions that are efficient, reliable, and sustainable.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ${renderComponent($$result2, "Leistungen", $$Leistungen, { "language": pageLanguage })} ` })}`;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/services.astro", void 0);

const $$file = "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/services.astro";
const $$url = "/[lang]/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Services,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
