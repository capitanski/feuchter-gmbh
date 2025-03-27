import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from '../chunks/astro/server_D3XaGqlG.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_v0yfXJU5.mjs';
import { C as Circles$1, b as buttonTranslations, $ as $$Layout } from '../chunks/Layout_BEzOSaoH.mjs';
import { S as Scribble } from '../chunks/feuchter_gmbh_header_CC9-MUSr.mjs';
/* empty css                                 */
import { $ as $$Leistungen } from '../chunks/Leistungen_CmXRQZGK.mjs';
import 'clsx';
import { $ as $$Projects } from '../chunks/Projects_CeuNvffk.mjs';
import { T as Transportloesungen, a as Thermohaube, S as Staubhaube } from '../chunks/staubhaube_BaMKudJE.mjs';
import { C as Circles$2 } from '../chunks/projects_CCNn56pS.mjs';
import { A as Arrow } from '../chunks/Arrow_sand_5oaPgMNc.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro();
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-mmc7otgs> <img${addAttribute(Scribble.src, "src")} alt="" class="scribble" fetchpriority="high" loading="eager" data-astro-cid-mmc7otgs> <div class="container" data-astro-cid-mmc7otgs> <img${addAttribute(Circles$1.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-mmc7otgs> <div class="hero-container" data-astro-cid-mmc7otgs> <h1 class="hero-heading animatable" data-astro-cid-mmc7otgs> ${heading} </h1> <p class="subtitle animatable" data-astro-cid-mmc7otgs>${subtitle}</p> <p class="hero-paragraph" data-astro-cid-mmc7otgs> ${introText} </p> <div class="button-wrapper hero-button-wrapper" data-astro-cid-mmc7otgs> ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("contact", language), "target": `/${language}/contact`, "class": "hero-button-1", "data-astro-cid-mmc7otgs": true })} ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("projects", language), "target": `/${language}/projects`, "class": "hero-button-2", "data-astro-cid-mmc7otgs": true })} </div> </div> </div> </section> `;
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

const $$Astro$3 = createAstro();
const $$Cite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cite;
  const { language } = Astro2.props;
  const cite = {
    de: `"Seit 1957 stehen wir f\xFCr erstklassige Funktionalit\xE4t, Langlebigkeit und Innovation in der Produktion von Milit\xE4r- und Beh\xF6rdenbekleidung. Mit unserer jahrzehntelangen Erfahrung und h\xF6chsten Qualit\xE4tsstandards bieten wir nun auch Outdoor-, Survival- und Sicherheitsanbietern ma\xDFgeschneiderte Bekleidungsl\xF6sungen. Unser Ziel ist es, Profis in jeder Situation zuverl\xE4ssig auszur\xFCsten \u2013 mit Kleidung, die sch\xFCtzt, unterst\xFCtzt und h\xF6chsten Anforderungen gerecht wird."`,
    en: `"Since 1957, we have stood for outstanding functionality, durability, and innovation in the production of military and official agency clothing. With decades of experience and the highest quality standards, we now also offer customized clothing solutions for outdoor, survival, and security providers. Our goal is to equip professionals reliably in any situation \u2013 with clothing that protects, supports, and meets the highest demands."`
  };
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-lwmcem6b> <img${addAttribute(Quotes.src, "src")} alt="" class="img-absolute animatable-opacity" data-astro-cid-lwmcem6b> <div class="container" data-astro-cid-lwmcem6b> <p class="cite" data-astro-cid-lwmcem6b> ${cite[language]} </p> <img${addAttribute(CEO.src, "src")} alt="" class="ceo animatable" data-astro-cid-lwmcem6b> <div class="ceo-and-role" data-astro-cid-lwmcem6b> <p class="ceo-name" data-astro-cid-lwmcem6b>Klaus Feuchter</p> <p class="job-role" data-astro-cid-lwmcem6b>CEO, Feuchter GmbH</p> </div> </div> </section> `;
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

const $$Astro$2 = createAstro();
const $$Usps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Usps;
  const { language } = Astro2.props;
  const headline = {
    de: "Ihre Vision \u2013 professionell umgesetzt",
    en: "Your vision, expertly handled"
  };
  const leistungen = [
    {
      icon: Produktionsketten.src,
      title: {
        de: "Internationale Produktionsketten",
        en: "International Production Chains"
      },
      text: {
        de: "Wir sind ein internationaler Bekleidungshersteller mit nachhaltigen Produktionsketten, hoher Qualit\xE4t und fairen Arbeitsbedingungen. Effiziente Logistik und verantwortungsvolle Prozesse sichern termingerechte Lieferungen und High-End Produkte f\xFCr spezielle Einsatzzwecke.",
        en: "We are an international clothing manufacturer with sustainable production chains, high quality, and fair working conditions. Efficient logistics and responsible processes ensure on-time deliveries and high-end products for specialized applications."
      }
    },
    {
      icon: Grossserien.src,
      title: {
        de: "Der Profi f\xFCr Gro\xDFserien",
        en: "The Expert for Large-Scale Production"
      },
      text: {
        de: "Als Experte f\xFCr Gro\xDFserienfertigung bieten wir hochwertige Bekleidung in gro\xDFen St\xFCckzahlen. Effiziente Produktion, pr\xE4zise Prozesse und verl\xE4ssliche Lieferketten garantieren erstklassige Qualit\xE4t und p\xFCnktliche Lieferung an Ziele auf der ganzen Welt.",
        en: "As experts in large-scale manufacturing, we offer high-quality clothing in large quantities. Efficient production, precise processes, and reliable supply chains guarantee top quality and on-time delivery worldwide."
      }
    },
    {
      icon: Qualitaetsstandards.src,
      title: {
        de: "H\xF6chste Qualit\xE4tsstandards",
        en: "Highest Quality Standards"
      },
      text: {
        de: "Unsere hohen Qualit\xE4tsstandards sichern erstklassige Bekleidung durch pr\xE4zise Fertigung, strenge Kontrollen und nachhaltige Materialien. Wir garantieren Langlebigkeit, Komfort und Perfektion f\xFCr anspruchsvolle Kunden weltweit.",
        en: "Our high quality standards ensure top-tier clothing through precise manufacturing, strict controls, and sustainable materials. We guarantee durability, comfort, and perfection for demanding customers worldwide."
      }
    },
    {
      icon: Neuentwicklungen.src,
      title: {
        de: "Wir lieben Neuentwicklungen",
        en: "We Love New Developments"
      },
      text: {
        de: "Wir realisieren komplette Neuentwicklungen in Bekleidung und Textil \u2014 von der Idee bis zum fertigen Produkt. Innovative Designs, moderne Materialien und ma\xDFgeschneiderte L\xF6sungen f\xFCr Ihre Vision.",
        en: "We implement complete new developments in clothing and textiles \u2014 from concept to finished product. Innovative designs, modern materials, and custom solutions for your vision."
      }
    },
    {
      icon: Lieferant.src,
      title: {
        de: "Offizieller Lieferant der Deutschen Bundeswehr",
        en: "Official Supplier to the German Armed Forces"
      },
      text: {
        de: "Als offizieller Lieferant der Deutschen Bundeswehr bieten wir hochwertige, langlebige und funktionale Bekleidung. Unsere Produkte erf\xFCllen h\xF6chste Standards und gew\xE4hrleisten Zuverl\xE4ssigkeit unter extremen Bedingungen.",
        en: "As an official supplier to the German Armed Forces, we provide high-quality, durable, and functional clothing. Our products meet the highest standards and ensure reliability under extreme conditions."
      }
    },
    {
      icon: Qualitaetsmanagement.src,
      title: {
        de: "Qualit\xE4tsmanagement vom Feinsten",
        en: "Top-Notch Quality Management"
      },
      text: {
        de: "Wir garantieren makelloses Qualit\xE4tsmanagement durch deutsche Fachkr\xE4fte in unseren ausl\xE4ndischen Produktionsst\xE4tten. Pr\xE4zise Kontrollen und h\xF6chste Standards sichern erstklassige Bekleidung \u2013 zuverl\xE4ssig, nachhaltig und effizient.",
        en: "We guarantee flawless quality management by German experts in our foreign production sites. Precise inspections and the highest standards ensure premium clothing \u2014 reliable, sustainable, and efficient."
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="usps" data-astro-cid-6yr37or7> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-6yr37or7> <div class="container" data-astro-cid-6yr37or7> <h2 class="animatable" data-astro-cid-6yr37or7>${headline[language]}</h2> <div class="rezensionen-grid" data-astro-cid-6yr37or7> ${leistungen.map((leistung) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-6yr37or7> <div class="icon-and-title" data-astro-cid-6yr37or7> <img${addAttribute(leistung.icon, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-6yr37or7> <p class="card-title" data-astro-cid-6yr37or7> ${leistung.title[language]} </p> </div> <p class="card-text" data-astro-cid-6yr37or7>${leistung.text[language]}</p> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Usps.astro", void 0);

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

const $$Astro$1 = createAstro();
const $$Categories = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Categories;
  const { language } = Astro2.props;
  const heading = {
    de: "Unser Angebot",
    en: "What we have to offer"
  };
  const categories = [
    {
      title: {
        de: "Milit\xE4r- & Survivalkleidung",
        en: "Military & Survival Clothing"
      },
      text: {
        de: "Unsere Milit\xE4r- und Survivalkleidung bietet Schutz, Komfort und Funktionalit\xE4t in extremen Umgebungen. Entwickelt f\xFCr h\xF6chste Anforderungen, eignet sie sich ideal f\xFCr taktische Eins\xE4tze, Outdoor-Abenteuer und Notfallsituationen. Strapazierf\xE4hige Materialien und durchdachtes Design garantieren zuverl\xE4ssige Leistung, auch unter h\xE4rtesten Bedingungen \u2013 weltweit einsetzbar.",
        en: "Our military and survival clothing provides protection, comfort, and functionality in extreme environments. Designed for the toughest demands, it's perfect for tactical missions, outdoor adventures, and emergency situations. Durable materials and thoughtful design ensure reliable performance, even under the harshest conditions \u2013 trusted worldwide."
      },
      slug: "clothing?category=military-and-survival",
      image: Bekleidung.src
    },
    {
      title: {
        de: "Beh\xF6rdenkleidung",
        en: "Official Agency Clothing"
      },
      text: {
        de: "Unsere Beh\xF6rdenkleidung erf\xFCllt alle Anforderungen an Funktion, Sicherheit und Tragekomfort. Ob Polizei, Zoll oder Rettungsdienste \u2013 wir bieten ma\xDFgeschneiderte L\xF6sungen f\xFCr den professionellen Alltag. Die Kombination aus modernen Stoffen, robustem Aufbau und individueller Ausstattung macht unsere Kleidung zum zuverl\xE4ssigen Partner im Einsatz.",
        en: "Our official agency clothing meets all requirements for function, safety, and wearing comfort. Whether for police, customs, or emergency services \u2013 we offer custom solutions for everyday professional use. Modern fabrics, durable construction, and tailored features make our garments a dependable choice on duty."
      },
      slug: "clothing?category=officialwear",
      image: Behoerdenkleidung.src
    },
    {
      title: {
        de: "Corporate Fashion",
        en: "Corporate Fashion"
      },
      text: {
        de: "Mit unserer Corporate Fashion st\xE4rken Sie das Erscheinungsbild Ihrer Marke durch professionelle, stilvolle Kleidung. Ob f\xFCr Messen, Kundenkontakt oder interne Veranstaltungen \u2013 wir bieten hochwertige Textilien mit individuellem Design. Komfort, Qualit\xE4t und Wiedererkennung stehen dabei im Mittelpunkt jeder Kollektion, die wir entwickeln.",
        en: "Our corporate fashion enhances your brand's appearance with professional, stylish clothing. Whether for trade fairs, customer interactions, or internal events \u2013 we offer high-quality textiles with custom designs. Comfort, quality, and brand recognition are at the heart of every collection we create for you."
      },
      slug: "clothing?category=corporate-fashion",
      image: Behoerdenkleidung.src
    },
    {
      title: {
        de: "Schutzwand f\xFCr Rollcontainer",
        en: "Protective Wall for Roll Containers"
      },
      text: {
        de: "Die Schutzwand f\xFCr Rollcontainer dient als robuster Puffer gegen St\xF6\xDFe und sch\xFCtzt empfindliche Fracht. Sie ist leicht montierbar, wiederverwendbar und erh\xF6ht die Sicherheit beim Transport. Ideal f\xFCr Logistikunternehmen und Lagerhaltung, bei denen sensible G\xFCter zuverl\xE4ssig gesichert werden m\xFCssen \u2013 effizient und langlebig.",
        en: "The protective wall for roll containers acts as a sturdy buffer against impact and protects sensitive cargo. It is easy to install, reusable, and enhances transport safety. Ideal for logistics companies and storage environments where delicate goods must be reliably secured \u2013 efficient and long-lasting."
      },
      slug: "transportsolutions?category=protective-wall",
      image: Transportloesungen.src
    },
    {
      title: {
        de: "Thermohaube f\xFCr Rollcontainer",
        en: "Thermal Cover for Roll Containers"
      },
      text: {
        de: "Unsere Thermohauben erm\xF6glichen den sicheren Transport temperaturempfindlicher Waren. Sie halten Hitze, K\xE4lte und Feuchtigkeit zuverl\xE4ssig fern und sorgen f\xFCr ein konstantes Klima im Inneren des Rollcontainers. Besonders geeignet f\xFCr Lebensmittel, Pharma oder Chemie \u2013 \xFCberall, wo konstante Temperaturen essenziell sind.",
        en: "Our thermal covers enable the safe transport of temperature-sensitive goods. They effectively protect against heat, cold, and moisture, ensuring a stable climate inside the roll container. Especially suitable for food, pharmaceuticals, or chemicals \u2013 wherever constant temperatures are critical during storage or delivery."
      },
      slug: "transportsolutions?category=thermal-cover",
      image: Thermohaube.src
    },
    {
      title: {
        de: "Staubhaube f\xFCr Rollcontainer",
        en: "Dust Cover for Roll Containers"
      },
      text: {
        de: "Die Staubhaube sch\xFCtzt Ihre Produkte zuverl\xE4ssig vor Verschmutzung w\xE4hrend Transport und Lagerung. Sie ist einfach zu handhaben, langlebig und in verschiedenen Gr\xF6\xDFen erh\xE4ltlich. Besonders n\xFCtzlich in staubigen Umgebungen oder bei l\xE4ngerer Zwischenlagerung \u2013 damit Ihre Waren stets sauber und gesch\xFCtzt bleiben.",
        en: "The dust cover reliably protects your products from contamination during transport and storage. It is easy to handle, durable, and available in various sizes. Particularly useful in dusty environments or for long-term storage \u2013 ensuring your goods stay clean and well-protected at all times."
      },
      slug: "transportsolutions?category=dust-cover",
      image: Staubhaube.src
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-qacliicl> <img${addAttribute(Circles$2.src, "src")} alt="" class="img-absolute" data-astro-cid-qacliicl> <div class="container" data-astro-cid-qacliicl> <h2 class="section-title animatable" data-astro-cid-qacliicl>${heading[language]}</h2> <div class="category-grid" data-astro-cid-qacliicl> ${categories.map((category) => {
    return renderTemplate`<div class="category-card animate-in-right" data-astro-cid-qacliicl> <div class="card-title-and-text" data-astro-cid-qacliicl> <div class="image-and-title" data-astro-cid-qacliicl> <img${addAttribute(category.image, "src")} alt="" loading="lazy" data-astro-cid-qacliicl> <h2 data-astro-cid-qacliicl>${category.title[language]}</h2> </div> <p data-astro-cid-qacliicl>${category.text[language]}</p> </div> <a${addAttribute(`/${language}/${category.slug}`, "href")} class="project-link" data-astro-cid-qacliicl> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-qacliicl> <span data-astro-cid-qacliicl>${buttonTranslations("toproducts", language)}</span> </a> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Categories.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, { "language": pageLanguage })} ${renderComponent($$result2, "Leistungen", $$Leistungen, { "language": pageLanguage })} ${renderComponent($$result2, "Categories", $$Categories, { "language": pageLanguage })} ${renderComponent($$result2, "Cite", $$Cite, { "language": pageLanguage })} ${renderComponent($$result2, "Usps", $$Usps, { "language": pageLanguage })} ${renderComponent($$result2, "Projects", $$Projects, { "language": pageLanguage })} ` })}`;
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
