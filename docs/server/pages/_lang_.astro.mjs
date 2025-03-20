import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { C as Circles$1, a as $$Button, $ as $$Layout } from '../chunks/Layout_Bmhv3BOY.mjs';
/* empty css                                 */
import { $ as $$Leistungen } from '../chunks/Leistungen_DCmZN_8T.mjs';
import 'clsx';
import { $ as $$Projects } from '../chunks/Projects_CWCW7Dx_.mjs';
import { C as Circles$2 } from '../chunks/projects_BdTMjCxF.mjs';
export { renderers } from '../renderers.mjs';

const Scribble = new Proxy({"src":"/custom-folder/feuchter_gmbh_header.DKT3z74D.jpg","width":1400,"height":933,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/feuchter_gmbh_header.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://capitanski.github.io/");
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Welcome;
  const { language } = Astro2.props;
  let heading = "Professionelle Textil- & Bekleidungsl\xF6sungen seit 1957";
  let subtitle = "f\xFCr Unternehmen, Milit\xE4r und Beh\xF6rden";
  let introText = `Seit 1957 sind wir einer der f\xFChrenden Produzenten von Bekleidung f\xFCr Armeen, Beh\xF6rden und Unternehmen weltweit. Vertrauen Sie auf unsere langj\xE4hrige Erfahrung in den Bereichen Entwicklung, Produktion und Lieferung. Egal ob Sie einen Produzenten f\xFCr Ihren eigenen Onlineshop oder ihr Gesch\xE4ft suchen oder Sie Ihre Mitarbeiter neu ausstatten m\xF6chten - bei uns sind Sie in besten H\xE4nden.`;
  if (language == "en") {
    heading = "Professional Textile & Apparel Solutions since 1957";
    subtitle = "For Businesses, Military, and Government Agencies";
    introText = `Since 1957, we have been one of the leading producers of clothing for armies, government agencies, and businesses worldwide. Rely on our many years of experience in development, production, and delivery. Whether you are looking for a manufacturer for your own online shop or retail business, or you need to outfit your employees with new uniforms \u2013 you are in the best hands with us.`;
  }
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-mmc7otgs> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-mmc7otgs> <div class="container" data-astro-cid-mmc7otgs> <img${addAttribute(Circles$1.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-mmc7otgs> <div class="hero-container" data-astro-cid-mmc7otgs> <h1 class="hero-heading animatable" data-astro-cid-mmc7otgs> ${heading} </h1> <p class="subtitle animatable" data-astro-cid-mmc7otgs>${subtitle}</p> <p class="hero-paragraph" data-astro-cid-mmc7otgs> ${introText} </p> <div class="button-wrapper hero-button-wrapper" data-astro-cid-mmc7otgs> ${renderComponent($$result, "Button", $$Button, { "linkText": "Jetzt anfragen", "target": "#kontakt", "class": "hero-button-1", "data-astro-cid-mmc7otgs": true })} ${renderComponent($$result, "Button", $$Button, { "linkText": "Referenzen", "target": "#rezensionen", "class": "hero-button-2", "data-astro-cid-mmc7otgs": true })} </div> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Welcome.astro", void 0);

const CEO = new Proxy({"src":"/custom-folder/CEO.DGfP5CoV.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/CEO.jpg";
							}
							
							return target[name];
						}
					});

const Quotes = new Proxy({"src":"/custom-folder/Quotes.CNCkwFDX.svg","width":149,"height":110,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Quotes.svg";
							}
							
							return target[name];
						}
					});

const $$Cite = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-lwmcem6b> <img${addAttribute(Quotes.src, "src")} alt="" class="img-absolute animatable-opacity" data-astro-cid-lwmcem6b> <div class="container" data-astro-cid-lwmcem6b> <p class="cite" data-astro-cid-lwmcem6b>
"Seit 1957 stehen wir für erstklassige Funktionalität, Langlebigkeit und
      Innovation in der Produktion von Militär- und Behördenbekleidung. Mit
      unserer jahrzehntelangen Erfahrung und höchsten Qualitätsstandards bieten
      wir nun auch Outdoor-, Survival- und Sicherheitsanbietern maßgeschneiderte
      Bekleidungslösungen. Unser Ziel ist es, Profis in jeder Situation
      zuverlässig auszurüsten – mit Kleidung, die schützt, unterstützt und
      höchsten Anforderungen gerecht wird."
</p> <img${addAttribute(CEO.src, "src")} alt="" class="ceo animatable" data-astro-cid-lwmcem6b> <div class="ceo-and-role" data-astro-cid-lwmcem6b> <p class="ceo-name" data-astro-cid-lwmcem6b>Klaus Feuchter</p> <p class="job-role" data-astro-cid-lwmcem6b>CEO, Feuchter GmbH</p> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Cite.astro", void 0);

const Circles = new Proxy({"src":"/custom-folder/Swirl_bottom_right.DnYoQ_FE.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Swirl_bottom_right.png";
							}
							
							return target[name];
						}
					});

const Produktionsketten = new Proxy({"src":"/custom-folder/globe._mf5Q8bi.svg","width":47,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/globe.svg";
							}
							
							return target[name];
						}
					});

const Grossserien = new Proxy({"src":"/custom-folder/grossserien.Dd9sBRH0.svg","width":39,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/grossserien.svg";
							}
							
							return target[name];
						}
					});

const Qualitaetsstandards = new Proxy({"src":"/custom-folder/qualitaetsstandards.l04yRpYp.svg","width":838,"height":782,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/qualitaetsstandards.svg";
							}
							
							return target[name];
						}
					});

const Neuentwicklungen = new Proxy({"src":"/custom-folder/neuentwicklungen.CCiqWhHl.svg","width":47,"height":48,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/neuentwicklungen.svg";
							}
							
							return target[name];
						}
					});

const Lieferant = new Proxy({"src":"/custom-folder/lieferant.DLK3j3dI.svg","width":44,"height":49,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/lieferant.svg";
							}
							
							return target[name];
						}
					});

const Qualitaetsmanagement = new Proxy({"src":"/custom-folder/qualitaetsmanagement.CbWWgZWq.svg","width":873,"height":905,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/qualitaetsmanagement.svg";
							}
							
							return target[name];
						}
					});

const $$Usps = createComponent(($$result, $$props, $$slots) => {
  const leistungen = [
    {
      icon: Produktionsketten.src,
      title: "Internationale Produktionsketten",
      text: "Wir sind ein internationaler Bekleidungshersteller mit nachhaltigen Produktionsketten, hoher Qualit\xE4t und fairen Arbeitsbedingungen. Effiziente Logistik und verantwortungsvolle Prozesse sichern termingerechte Lieferungen und High-End Produkte f\xFCr spezielle Einsatzzwecke."
    },
    {
      icon: Grossserien.src,
      title: "Der Profi f\xFCr Gro\xDFserien",
      text: "Als Experte f\xFCr Gro\xDFserienfertigung bieten wir hochwertige Bekleidung in gro\xDFen St\xFCckzahlen. Effiziente Produktion, pr\xE4zise Prozesse und verl\xE4ssliche Lieferketten garantieren erstklassige Qualit\xE4t und p\xFCnktliche Lieferung an Ziele auf der ganzen Welt."
    },
    {
      icon: Qualitaetsstandards.src,
      title: "H\xF6chste Qualit\xE4tsstandards",
      text: "Unsere hohen Qualit\xE4tsstandards sichern erstklassige Bekleidung durch pr\xE4zise Fertigung, strenge Kontrollen und nachhaltige Materialien. Wir garantieren Langlebigkeit, Komfort und Perfektion f\xFCr anspruchsvolle Kunden weltweit."
    },
    {
      icon: Neuentwicklungen.src,
      title: "Wir lieben Neuentwicklungen",
      text: "Wir realisieren komplette Neuentwicklungen in Bekleidung und Textil \u2014 von der Idee bis zum fertigen Produkt. Innovative Designs, moderne Materialien und ma\xDFgeschneiderte L\xF6sungen f\xFCr Ihre Vision."
    },
    {
      icon: Lieferant.src,
      title: "Offizieller Lieferant der Deutschen Bundeswehr",
      text: "Als offizieller Lieferant der Deutschen Bundeswehr bieten wir hochwertige, langlebige und funktionale Bekleidung. Unsere Produkte erf\xFCllen h\xF6chste Standards und gew\xE4hrleisten Zuverl\xE4ssigkeit unter extremen Bedingungen."
    },
    {
      icon: Qualitaetsmanagement.src,
      title: "Qualit\xE4tsmanagement vom Feinsten",
      text: "Wir garantieren makelloses Qualit\xE4tsmanagement durch deutsche Fachkr\xE4fte in unseren ausl\xE4ndischen Produktionsst\xE4tten. Pr\xE4zise Kontrollen und h\xF6chste Standards sichern erstklassige Bekleidung \u2013 zuverl\xE4ssig, nachhaltig und effizient."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="usps" data-astro-cid-6yr37or7> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-6yr37or7> <div class="container" data-astro-cid-6yr37or7> <h2 class="animatable" data-astro-cid-6yr37or7>Ihr Vorhaben in den besten Händen</h2> <div class="rezensionen-grid" data-astro-cid-6yr37or7> ${leistungen.map((leistung) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-6yr37or7> <div class="icon-and-title" data-astro-cid-6yr37or7> <img${addAttribute(leistung.icon, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-6yr37or7> <p class="card-title" data-astro-cid-6yr37or7>${leistung.title}</p> </div> <p class="card-text" data-astro-cid-6yr37or7>${leistung.text}</p> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Usps.astro", void 0);

const Transportloesungen = new Proxy({"src":"/custom-folder/transportloesungen.Drj6yWaY.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/transportloesungen.jpg";
							}
							
							return target[name];
						}
					});

const Bekleidung = new Proxy({"src":"/custom-folder/bekleidung.CO0tQQn4.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/bekleidung.jpg";
							}
							
							return target[name];
						}
					});

const Behoerdenkleidung = new Proxy({"src":"/custom-folder/behoerden.DyRktwU4.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/behoerden.jpg";
							}
							
							return target[name];
						}
					});

const Thermohaube = new Proxy({"src":"/custom-folder/thermohaube.C9CYxG_D.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/thermohaube.jpg";
							}
							
							return target[name];
						}
					});

const Staubhaube = new Proxy({"src":"/custom-folder/staubhaube.Ci7iOeyi.jpg","width":1080,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/staubhaube.jpg";
							}
							
							return target[name];
						}
					});

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const categories = [
    {
      title: "Milit\xE4r- & Survivalkleidung",
      slug: "/bekleidung",
      image: Bekleidung.src
    },
    {
      title: "Beh\xF6rdenkleidung",
      slug: "/bekleidung",
      image: Behoerdenkleidung.src
    },
    {
      title: "Corporate Fashion",
      slug: "/bekleidung",
      image: Behoerdenkleidung.src
    },
    {
      title: "Schutzwand f\xFCr Rollcontainer",
      slug: "/transportloesungen",
      image: Transportloesungen.src
    },
    {
      title: "Thermohaube f\xFCr Rollcontainer",
      slug: "/transportloesungen",
      image: Thermohaube.src
    },
    {
      title: "Staubhaube f\xFCr Rollcontainer",
      slug: "/transportloesungen",
      image: Staubhaube.src
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-qacliicl> <img${addAttribute(Circles$2.src, "src")} alt="" class="img-absolute" data-astro-cid-qacliicl> <div class="container" data-astro-cid-qacliicl> <h2 class="section-title animatable" data-astro-cid-qacliicl>Unser Angebot</h2> <div class="category-grid" data-astro-cid-qacliicl> ${categories.map((category) => {
    return renderTemplate`<div class="category-card animate-in-right" data-astro-cid-qacliicl> <div class="card-title-and-text" data-astro-cid-qacliicl> <div class="image-and-title" data-astro-cid-qacliicl> <img${addAttribute(category.image, "src")} alt="" loading="lazy" data-astro-cid-qacliicl> <h2 data-astro-cid-qacliicl>${category.title}</h2> </div> <p data-astro-cid-qacliicl>
Lorem ipsum dolor sit amet. Et similique beatae ut illum
                  praesentium et ipsum inventore sit dolore aspernatur eos minus
                  laborum. Aut incidunt facilis ut possimus ratione vel quos
                  doloremque est fuga quidem qui velit iure. Sit pariatur quia
                  ut veniam incidunt et soluta laudantium aut voluptatem modi
                  aut fuga quia id odio voluptas ad autem incidunt. Et tenetur
                  voluptatum et accusamus sapiente ut galisum esse ea illo
                  ratione a nobis neque et beatae obcaecati ut soluta dolores!
</p> </div> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Categories.astro", void 0);

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "language": pageLanguage })} ${renderComponent($$result2, "Leistungen", $$Leistungen, {})} ${renderComponent($$result2, "Categories", $$Categories, {})} ${renderComponent($$result2, "Cite", $$Cite, {})} ${renderComponent($$result2, "Usps", $$Usps, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/index.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/index.astro";
const $$url = "/[lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
