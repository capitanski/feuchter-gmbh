import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_COPaMLlO.mjs';
import { $ as $$CategoryHeader } from '../../chunks/CategoryHeader_ZWyU2TOY.mjs';
import '../../chunks/schutzwand_verschluss_BqHNROck.mjs';
import { B as Bekleidung, a as Behoerdenkleidung, C as Corporate } from '../../chunks/Corporate Fashion_DqPmN4jq.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

new Proxy({"src":"/custom-folder/projekte_mobile.DWYZD9tg.webp","width":765,"height":1080,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/projekte_mobile.webp";
							}
							
							return target[name];
						}
					});

const clothingCategories = [
  {
    slug: "clothing/military-and-survival",
    title: {
      de: "Militär- & Survivalkleidung",
      en: "Military- & Survivalclothing",
    },
    description: {
      de: "Wir bieten Großhändlern und Onlineshops ein starkes Portfolio an hochwertigen Produkten, die sich im zivilen wie auch militärischen Umfeld vielfach bewährt haben.Profitieren Sie von zuverlässiger Qualität, attraktiven Konditionen und einer zielgruppengerechten Auswahl, die sich perfekt für den Weiterverkauf eignet.",
      en: "We provide online retailers and wholesalers with a strong portfolio of high-quality products that have proven themselves in both military and civilian environments. Benefit from consistent quality, competitive pricing, and a carefully selected assortment tailored for resale and demanding end users."
    },
    img: Bekleidung.src,
  },
  {
    slug: "clothing/officialwear",
    title: {
      de: "Behörden- & Sicherheitskleidung",
      en: "Official- & Securityclothing",
    },
    description: {
      de: "Unsere Kleidung für Behörden, Sicherheitsdienste und Einsatzkräfte vereint professionelle Optik mit funktionalem Design und hoher Strapazierfähigkeit. Ob Uniformteile, Einsatzjacken oder taktisches Zubehör – alle Produkte sind auf die Anforderungen des täglichen Dienstes abgestimmt.",
      en: "Our clothing for government agencies, security services, and law enforcement combines a professional appearance with functional design and long-lasting durability. From uniform components and duty jackets to tactical accessories – each item is tailored to meet the demands of daily service."
    },
    img: Behoerdenkleidung.src,
  },
  {
    slug: "clothing/corporate-fashion",
    title: {
      de: "Corporate Fashion",
      en: "Corporate Fashion",
    },
    description: {
      de: "Unsere Corporate Fashion verbindet modernes Design mit hohem Tragekomfort und repräsentativer Wirkung. Ob für Empfang, Service, Außendienst oder den täglichen Büroalltag – unsere Kleidung sorgt für einen einheitlichen und professionellen Auftritt Ihres Teams.",
      en: "Our corporate fashion line combines modern design, comfortable wear, and a representative look. Whether for front desk, service roles, field staff, or daily office use – our clothing ensures a consistent and professional team appearance."
    },
    img: Corporate.src,
  },
];

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageLanguage = Astro2.locals.language ?? "de";
  const metaData = {
    pageTitle: {
      de: "Individuelle Textill\xF6sungen f\xFCr Unternehmen | Feuchter GmbH",
      en: "Tailored Apparel for Businesses Since 1957 | Feuchter GmbH"
    },
    pageDescription: {
      de: "Zuverl\xE4ssige Bekleidungsl\xF6sungen f\xFCr Milit\xE4r, Beh\xF6rden, Sicherheitsdienste und Unternehmen. Funktional, langlebig, professionell \u2013 seit Jahrzehnten bew\xE4hrt.",
      en: "Reliable workwear for military, government, security, and businesses. Durable, functional, and professional \u2013 trusted for decades."
    }
  };
  const textContent = {
    title: {
      de: "Bekleidungsl\xF6sungen f\xFCr Unternehmen, Milit\xE4r und Beh\xF6rden",
      en: "Tailored Clothing Solutions for Government, Military, and Corporate Clients"
    },
    text: {
      de: "Als zuverl\xE4ssiger Partner f\xFCr Milit\xE4r, Beh\xF6rden, Sicherheitsdienste und Unternehmen bieten wir ein sorgf\xE4ltig ausgew\xE4hltes Sortiment an funktionaler und langlebiger Berufskleidung. Ob f\xFCr den anspruchsvollen Einsatz im Feld, den t\xE4glichen Dienst bei Beh\xF6rden oder ein einheitliches, professionelles Auftreten im Unternehmen \u2013 unsere Bekleidungsl\xF6sungen vereinen Funktionalit\xE4t, Komfort und Qualit\xE4t.",
      en: "As a trusted partner to the military, government agencies, security services, and corporate clients, we offer a carefully curated selection of functional and durable professional apparel. Whether for demanding field operations, daily duty within official institutions, or a cohesive and professional corporate appearance \u2013 our clothing solutions combine functionality, comfort, and quality."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": metaData.pageTitle[pageLanguage], "pageDescription": metaData.pageDescription[pageLanguage], "data-astro-cid-7tv3otf2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-7tv3otf2> <div class="container" data-astro-cid-7tv3otf2> ${renderComponent($$result2, "CategoryHeader", $$CategoryHeader, { "categories": clothingCategories, "pageLanguage": pageLanguage, "textContent": textContent, "data-astro-cid-7tv3otf2": true })} </div> </section> ` })} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/clothing/index.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/clothing/index.astro";
const $$url = "/[lang]/clothing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
