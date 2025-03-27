import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_CKHqU0IZ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B3q6ub7q.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const felix = new Proxy({"src":"/custom-folder/felix_feuchter.Bs_2rl0v.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/felix_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const klaus = new Proxy({"src":"/custom-folder/CEO.DGfP5CoV.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/klaus_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const sabrina = new Proxy({"src":"/custom-folder/sabrina_feuchter.fXOFD15A.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/sabrina_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const gabriele = new Proxy({"src":"/custom-folder/gabriele_feuchter.Bs7CAuDl.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/gabriele_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const lea = new Proxy({"src":"/custom-folder/lea_feuchter.CDapj7kA.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/lea_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const markus = new Proxy({"src":"/custom-folder/markus_feuchter.DRKi8Bbc.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/markus_feuchter.jpg";
							}
							
							return target[name];
						}
					});

const avatar = new Proxy({"src":"/custom-folder/avatar.BIt64UI2.jpg","width":400,"height":400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/team/avatar.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://capitanski.github.io/");
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
        de: "Stellvertretende Gesch\xE4ftsf\xFChrung",
        en: "Deputy Managing Director"
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
    },
    {
      img: avatar.src,
      name: "Maximilian Hierl",
      role: {
        de: "M. Eng. Qualit\xE4tsingenieur",
        en: "M. Eng. Quality Engineer"
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-liz7rhkm> <div class="container" data-astro-cid-liz7rhkm> <div class="title-and-cite" data-astro-cid-liz7rhkm> <h2 class="animate-in-right" data-astro-cid-liz7rhkm>${headline[language]}</h2> <p class="zitat" data-astro-cid-liz7rhkm> ${cite[language]} </p> </div> <div class="grid" data-astro-cid-liz7rhkm> ${teamMembers.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-liz7rhkm> <img${addAttribute(item.img, "src")} alt="" data-astro-cid-liz7rhkm> <div class="grid-item-text" data-astro-cid-liz7rhkm> <p data-astro-cid-liz7rhkm>${item.name}</p> <span data-astro-cid-liz7rhkm>${item.role[language]}</span> </div> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/TeamGrid.astro", void 0);

const Scribble = new Proxy({"src":"/custom-folder/firmengebaeude.bFyYJ3Pd.jpg","width":2000,"height":1333,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/firmengebaeude.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://capitanski.github.io/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Vom Traditionellen Bekleidungshersteller bis zum international agierenden Ausstatter von Armeen und Beh\xF6rden";
  let subtitle = "Familiengef\xFChrt seit 1957";
  let introText = `
Seit 1957 haben wir uns vom traditionellen Bekleidungshersteller zu einem international agierenden Ausstatter f\xFCr Armeen und Beh\xF6rden weltweit entwickelt. Mit unserer langj\xE4hrigen Erfahrung bieten wir ma\xDFgeschneiderte L\xF6sungen, die h\xF6chste Standards in Qualit\xE4t, Funktionalit\xE4t und Sicherheit erf\xFCllen.`;
  if (pageLanguage == "en") {
    heading = "From a traditional clothing manufacturer to an internationally operating supplier of armies and authorities";
    subtitle = "Family-owned since 1957.";
    introText = `Since 1957, we have evolved from a traditional clothing manufacturer into an internationally operating supplier for armies and authorities worldwide. With our many years of experience, we offer tailored solutions that meet the highest standards of quality, functionality, and safety.`;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ${renderComponent($$result2, "TeamGrid", $$TeamGrid, { "language": pageLanguage })} ` })}`;
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
