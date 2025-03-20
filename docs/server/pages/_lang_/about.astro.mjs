import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, e as createAstro, i as renderComponent } from '../../chunks/astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_C5xH2p6w.mjs';
import { $ as $$Layout } from '../../chunks/Layout_Bmhv3BOY.mjs';
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

const $$TeamGrid = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      img: klaus.src,
      name: "Klaus Feuchter",
      role: "CEO"
    },
    {
      img: markus.src,
      name: "Markus Feuchter",
      role: "Produktentwicklung"
    },
    {
      img: sabrina.src,
      name: "Sabrina Feuchter",
      role: "Stellvertretende Gesch\xE4ftsf\xFChrung"
    },
    {
      img: avatar.src,
      name: "Kathrin Hinz",
      role: "Assistentin d. Gesch\xE4ftsf\xFChrung"
    },
    {
      img: gabriele.src,
      name: "Gabriele Feuchter",
      role: "Leitung d. Finanzbuchhaltung"
    },
    {
      img: lea.src,
      name: "Lea Feuchter",
      role: "Finanzbuchhaltung"
    },
    {
      img: felix.src,
      name: "Felix Feuchter",
      role: "Head of Marketing, PR & Design"
    },
    {
      img: avatar.src,
      name: "Monika Walter",
      role: "Logistik & Lagerverwaltung"
    },
    {
      img: avatar.src,
      name: "Maximilian Hierl",
      role: "M. Eng. Qualit\xE4tsingenieur"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-liz7rhkm> <div class="container" data-astro-cid-liz7rhkm> <div class="title-and-cite" data-astro-cid-liz7rhkm> <h2 class="animate-in-right" data-astro-cid-liz7rhkm>Lernen Sie das Team kennen</h2> <p class="zitat" data-astro-cid-liz7rhkm>
"Unsere Liebe zum Detail und unser Anspruch an Perfektion
                treiben uns jeden Tag aufs Neue an. Auch in der
                Großserienproduktion geben wir uns nicht mit dem Durchschnitt
                zufrieden – denn echte Qualität zeigt sich in den kleinen
                Dingen. Dafür stehen wir mit Stolz seit über 60 Jahren."
</p> </div> <div class="grid" data-astro-cid-liz7rhkm> ${teamMembers.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-liz7rhkm> <img${addAttribute(item.img, "src")} alt="" data-astro-cid-liz7rhkm> <div class="grid-item-text" data-astro-cid-liz7rhkm> <p data-astro-cid-liz7rhkm>${item.name}</p> <span data-astro-cid-liz7rhkm>${item.role}</span> </div> </div>`;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "introText": introText, "Scribble": Scribble })} ${renderComponent($$result2, "TeamGrid", $$TeamGrid, {})} ` })}`;
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
