import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_BH2jXReb.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CxFWCwmj.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const felix = new Proxy({"src":"/custom-folder/felix_feuchter.DND1vuPT.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/felix_feuchter.webp";
							}
							
							return target[name];
						}
					});

const klaus = new Proxy({"src":"/custom-folder/CEO.C16dMTc5.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/klaus_feuchter.webp";
							}
							
							return target[name];
						}
					});

const sabrina = new Proxy({"src":"/custom-folder/sabrina_feuchter.DEl1G2_d.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/sabrina_feuchter.webp";
							}
							
							return target[name];
						}
					});

const gabriele = new Proxy({"src":"/custom-folder/gabriele_feuchter.BJpmJpmD.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/gabriele_feuchter.webp";
							}
							
							return target[name];
						}
					});

const lea = new Proxy({"src":"/custom-folder/lea_feuchter.BypRIHSf.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/lea_feuchter.webp";
							}
							
							return target[name];
						}
					});

const markus = new Proxy({"src":"/custom-folder/markus_feuchter.CoITGbud.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/markus_feuchter.webp";
							}
							
							return target[name];
						}
					});

const avatar = new Proxy({"src":"/custom-folder/avatar.DYvq9EOD.webp","width":400,"height":400,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/avatar.webp";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("http://localhost:4321");
const $$TeamGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeamGrid;
  const { language } = Astro2.props;
  const headline = {
    de: "Lernen Sie das Team kennen",
    en: "Meet the team"
  };
  const cite = {
    de: `"Unsere Liebe zum Detail und unser Anspruch an Perfektion
                treiben uns jeden Tag aufs Neue an. Auch in der
                Gro\xDFserienproduktion geben wir uns nicht mit dem Durchschnitt
                zufrieden \u2013 denn echte Qualit\xE4t zeigt sich in den kleinen
                Dingen. Daf\xFCr stehen wir mit Stolz seit \xFCber 60 Jahren."`,
    en: `"Our passion for detail and our commitment to perfection drive us every single day. Even in large-scale production, we never settle for average \u2013 because true quality reveals itself in the little things. We've proudly stood by that belief for over 60 years."`
  };
  const teamMembers = [
    {
      img: klaus.src,
      name: "Klaus Feuchter",
      role: {
        de: "CEO",
        en: "CEO"
      }
    },
    {
      img: markus.src,
      name: "Markus Feuchter",
      role: {
        de: "Produktentwicklung",
        en: "Product Development"
      }
    },
    {
      img: sabrina.src,
      name: "Sabrina Feuchter",
      role: {
        de: "Produktentwicklung",
        en: "Product Development"
      }
    },
    {
      img: avatar.src,
      name: "Kathrin Hinz",
      role: {
        de: "Assistentin d. Gesch\xE4ftsf\xFChrung",
        en: "Executive Assistant"
      }
    },
    {
      img: gabriele.src,
      name: "Gabriele Feuchter",
      role: {
        de: "Leitung d. Finanzbuchhaltung",
        en: "Head of Financial Accounting"
      }
    },
    {
      img: lea.src,
      name: "Lea Feuchter",
      role: {
        de: "Finanzbuchhaltung",
        en: "Financial Accounting"
      }
    },
    {
      img: felix.src,
      name: "Felix Feuchter",
      role: {
        de: "Head of Marketing, PR & Design",
        en: "Head of Marketing, PR & Design"
      }
    },
    {
      img: avatar.src,
      name: "Monika Walter",
      role: {
        de: "Logistik & Lagerverwaltung",
        en: "Logistics & Warehouse Management"
      }
    }
    /*{
      img: avatar.src,
      name: "Maximilian Hierl",
      role: {
        de: "M. Eng. Qualitätsingenieur",
        en: "M. Eng. Quality Engineer",
      },
    },*/
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-liz7rhkm> <div class="container" data-astro-cid-liz7rhkm> <div class="title-and-cite" data-astro-cid-liz7rhkm> <h2 class="animate-in-right" data-astro-cid-liz7rhkm>${headline[language]}</h2> <p class="zitat" data-astro-cid-liz7rhkm> ${cite[language]} </p> </div> <div class="grid" data-astro-cid-liz7rhkm> ${teamMembers.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-liz7rhkm> <img${addAttribute(item.img, "src")} alt="" data-astro-cid-liz7rhkm> <div class="grid-item-text" data-astro-cid-liz7rhkm> <p data-astro-cid-liz7rhkm>${item.name}</p> <span data-astro-cid-liz7rhkm>${item.role[language]}</span> </div> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/TeamGrid.astro", void 0);

const Scribble = new Proxy({"src":"/custom-folder/firmengebaeude.D6emVdpK.webp","width":2000,"height":1333,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/firmengebaeude.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locals } = Astro2;
  const pageLanguage = locals.language ?? "de";
  const metaData = {
    pageTitle: {
      de: "\xDCber uns | Feuchter GmbH",
      en: "About us | Feuchter GmbH"
    },
    pageDescription: {
      de: "Seit 1957 Ihr internationaler Partner f\xFCr hochwertige Schutzbekleidung f\xFCr Armeen und Beh\xF6rden. Ma\xDFgeschneiderte L\xF6sungen f\xFCr h\xF6chste Anspr\xFCche.",
      en: "Since 1957, your international partner for high-quality apparel for armies and authorities. Tailored solutions for the highest demands."
    }
  };
  let heading = "Vom Traditionellen Bekleidungshersteller bis zum international agierenden Ausstatter von Armeen und Beh\xF6rden";
  let subtitle = "Familiengef\xFChrt seit 1957";
  let introText = `Seit 1957 haben wir uns von einem traditionellen Bekleidungshersteller zu einem international t\xE4tigen Ausr\xFCster f\xFCr Armeen und Beh\xF6rden weltweit entwickelt. Mit unserer langj\xE4hrigen Erfahrung bieten wir ma\xDFgeschneiderte L\xF6sungen, die h\xF6chsten Anspr\xFCchen an Qualit\xE4t, Funktionalit\xE4t und Sicherheit gerecht werden.`;
  if (pageLanguage == "en") {
    heading = "From a traditional clothing manufacturer to an internationally operating supplier of armies and authorities";
    subtitle = "Family-owned since 1957.";
    introText = `Since 1957, we have evolved from a traditional clothing manufacturer into an internationally operating supplier for armies and authorities worldwide. With our many years of experience, we offer tailored solutions that meet the highest standards of quality, functionality, and safety.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": metaData.pageTitle[pageLanguage], "pageDescription": metaData.pageDescription[pageLanguage] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ${renderComponent($$result2, "TeamGrid", $$TeamGrid, { "language": pageLanguage })} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/about.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/about.astro";
const $$url = "/[lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
