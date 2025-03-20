import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import fs from 'fs';

const Circles = new Proxy({"src":"/custom-folder/Swirl.DDUPOy4D.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Swirl.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://capitanski.github.io/");
const $$ProjectTag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectTag;
  const { tagContent, colorScheme } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(colorScheme && colorScheme == "bright" ? "is-bright project-tag" : "is-dark project-tag", "class")} data-astro-cid-hp42x6y6> ${tagContent} </div> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/ProjectTag.astro", void 0);

const PolizeihemdSeite = new Proxy({"src":"/custom-folder/polizeihemd_bayern_seite.C04EstQ5.jpg","width":500,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/polizeihemd_bayern_seite.jpg";
							}
							
							return target[name];
						}
					});

const PolizeihemdFront = new Proxy({"src":"/custom-folder/polizeihemd_bayern_front.D9iq360O.jpg","width":500,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/polizeihemd_bayern_front.jpg";
							}
							
							return target[name];
						}
					});

const PolizeihemdWappen = new Proxy({"src":"/custom-folder/polizeihemd_bayern_wappen.D9p1qFhq.jpg","width":500,"height":500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/polizeihemd_bayern_wappen.jpg";
							}
							
							return target[name];
						}
					});

const MonteurkombiFront = new Proxy({"src":"/custom-folder/Monteurkombi_Front.iYCDe86S.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Monteurkombi_Front.jpg";
							}
							
							return target[name];
						}
					});

const MonteurkombiSeite = new Proxy({"src":"/custom-folder/Monteurkombi_Seite.CYxkTo4U.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Monteurkombi_Seite.jpg";
							}
							
							return target[name];
						}
					});

// HTML-Datei synchron lesen
const polizeiBayernDe = fs.readFileSync("./src/content/htmldata/polizeihemden_bayern_de.html", "utf-8");
const polizeiBayernEn = fs.readFileSync("./src/content/htmldata/polizeihemden_bayern_en.html", "utf-8");
const monteurKombiDe = fs.readFileSync("./src/content/htmldata/monteurkombi_de.html", "utf-8");
const monteurKombiEn = fs.readFileSync("./src/content/htmldata/monteurkombi_en.html", "utf-8");

const translatedProject = {
  slug: "polizeihemden-bayern",
  title: {
    de: "Polizeihemden Bayern",
    en: "Police Shirts Bavaria"
  },
  customer: {
    de: "Polizei Bayern",
    en: "Bavarian Police"
  },
  tl: "TL-BY4",
  date: "2023",
  amount: 680000,
  status: {
    de: "Laufend",
    en: "Running"
  },
  tags: {
    de: ["Mischgewebe"],
    en: ["Blended Fabric"]
  },
  mainImage: PolizeihemdSeite.src,
  images: [PolizeihemdSeite.src, PolizeihemdFront.src, PolizeihemdWappen.src],
  shortDescription: {
    de: `Es handelt sich hierbei um das Uniformhemd der Polizei Bayern. Die Hemden sind Teil eines funktionellen Bekleidungssystems und werden sowohl im Wach- und Wechseldienst als auch im Bürodienst getragen.`,
    en: `This is the uniform shirt of the Bavarian police. The shirts are part of a functional clothing system and are worn both in patrol and shift duty as well as in office duty.`
  },
  richtextData: {
    de: polizeiBayernDe,
    en: polizeiBayernEn
  }
};
const monteurKombi = {
  slug: "monteurkombi-lfz",
  title: {
    de: "Monteurkombi Lfz. TechnPers Sommer & Variabel",
    en: "Mechanic coverall Aircraft Technical Personnel Summer & Variable"
  },
  customer: {
    de: "BWBM",
    en: "BWBM"
  },
  tl: "TL-BY4",
  date: "2023",
  amount: 680000,
  status: {
    de: "Laufend",
    en: "Running"
  },
  tags: {
    de: ["Mischgewebe"],
    en: ["Blended Fabric"]
  },
  mainImage: MonteurkombiFront.src,
  images: [MonteurkombiFront.src, MonteurkombiSeite.src],
  shortDescription: {
    de: `Die Monteurkombi der Deutschen Bundeswehr ist eine Funktionsbekleidung für Instandsetzungs- und Einsatzaufträge, für Arbeits-, Dienst- und Kampfbekleidung.`,
    en: `The mechanic coverall of the German Bundeswehr is functional clothing designed for maintenance and operational assignments, as well as for work, service, and combat wear.`
  },
  richtextData: {
    de: monteurKombiDe,
    en: monteurKombiEn
  }
};
const projects = [
  translatedProject,
  monteurKombi
];

export { $$ProjectTag as $, Circles as C, projects as p };
