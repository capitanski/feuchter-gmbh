import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_C5xH2p6w.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Bmhv3BOY.mjs';
import { $ as $$Projects } from '../../chunks/Projects_CWCW7Dx_.mjs';
export { renderers } from '../../renderers.mjs';

const Scribble = new Proxy({"src":"/custom-folder/projekte.Dqd8J574.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/projekte.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Projekte & Referenzen";
  let subtitle = "Vom Unterhemd bis zum Einsatzanzug - Seit 1957 bieten wir h\xF6chste qualit\xE4tsstandards";
  let introText = `
Wir unterst\xFCtzen unsere Kunden von Anfang an bei ihren Projekten \u2013 von der Konzeption und Entwicklung \xFCber die Produktion bis hin zur Logistik. Mit unserer Expertise sorgen wir f\xFCr ma\xDFgeschneiderte L\xF6sungen, die effizient, zuverl\xE4ssig und nachhaltig sind.`;
  if (pageLanguage == "en") {
    heading = "We support you in your endeavor from the very beginning.";
    subtitle = "From conception to production to logistics";
    introText = `
We support our customers from the very beginning of their projects \u2013 from conception and development to production and logistics. With our expertise, we ensure tailored solutions that are efficient, reliable, and sustainable.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ${renderComponent($$result2, "Projects", $$Projects, {})} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/index.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/index.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
