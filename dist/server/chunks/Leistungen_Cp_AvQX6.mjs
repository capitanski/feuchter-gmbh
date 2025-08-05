import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import 'clsx';
import { t as translations } from './Layout_phyfGR1g.mjs';
/* empty css                         */

const Hochzeiten = new Proxy({"src":"/custom-folder/konzeption.B8QB-5B4.webp","width":600,"height":338,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/konzeption.webp";
							}
							
							return target[name];
						}
					});

const Corporate = new Proxy({"src":"/custom-folder/produktion.CBsgn-VV.webp","width":600,"height":338,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/produktion.webp";
							}
							
							return target[name];
						}
					});

const Birthday = new Proxy({"src":"/custom-folder/logistik.C-9nhZRh.webp","width":600,"height":338,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/assets/logistik.webp";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://localhost:4321");
const $$Leistungen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Leistungen;
  const { language } = Astro2.props;
  const leistungen = [
    {
      translationKey: "konzeption",
      icon: Hochzeiten.src,
      title: "Entwicklung & Konzeption",
      text: {
        de: "Von der ersten Idee bis zum fertigen Design entwickeln wir passgenaue Bekleidungsl\xF6sungen, die h\xF6chsten Anforderungen gerecht werden. Unser erfahrenes Team erarbeitet individuelle Konzepte, die Funktionalit\xE4t, Komfort und Stil vereinen \u2013 ma\xDFgeschneidert auf die Bed\xFCrfnisse von Milit\xE4r, Beh\xF6rden und Unternehmen.",
        en: "From the initial idea to the final design, we develop customized clothing solutions that meet the highest standards. Our experienced team creates tailored concepts that combine functionality, comfort, and style \u2013 specifically designed to meet the needs of the military, government agencies, and businesses."
      }
    },
    {
      translationKey: "produktion",
      icon: Corporate.src,
      title: "Produktion",
      text: {
        de: "In unserer Produktion setzen wir auf modernste Technologien und h\xF6chste Qualit\xE4tsstandards. Jedes Kleidungsst\xFCck wird sorgf\xE4ltig gefertigt, um Langlebigkeit und maximale Funktionalit\xE4t zu gew\xE4hrleisten. Dabei kombinieren wir technisches Know-how mit einem pr\xE4zisen Auge f\xFCr Details, um robuste Arbeitskleidung und exklusive Corporate Fashion zu liefern.",
        en: "Our production process incorporates state-of-the-art technology and strict quality standards. Every garment is meticulously engineered for durability and peak performance. By merging advanced technical knowledge with precision craftsmanship, we create durable workwear and high-end corporate fashion."
      }
    },
    {
      translationKey: "logistik",
      icon: Birthday.src,
      title: "Logistik & Vertrieb",
      text: {
        de: "Effiziente Logistikprozesse und ein starker Vertriebsservice garantieren, dass Ihre Bestellung termingerecht und zuverl\xE4ssig bei Ihnen ankommt. Wir k\xFCmmern uns um die gesamte Lieferkette \u2013 von der Produktion bis zur Auslieferung \u2013 und stellen sicher, dass Ihre Mitarbeiter stets optimal ausgestattet sind.",
        en: "Seamless logistics and exceptional customer service ensure that your order is delivered on time and with complete reliability. From production to delivery, we handle the entire supply chain so that your team is always equipped with the best."
      }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="leistungen" data-astro-cid-qlbszkyo> <div class="container" data-astro-cid-qlbszkyo> <h2 class="animatable" data-astro-cid-qlbszkyo>${translations("leistungen", language)}</h2> <p class="subtitle animatable" data-astro-cid-qlbszkyo> ${translations("leistungensubtitle", language)} </p> <div class="rezensionen-grid" data-astro-cid-qlbszkyo> ${leistungen.map((leistung) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-qlbszkyo> <div class="icon-and-title" data-astro-cid-qlbszkyo> <img${addAttribute(leistung.icon, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-qlbszkyo> <p class="card-title" data-astro-cid-qlbszkyo> ${translations(leistung.translationKey, language)} </p> </div> <p class="card-text" data-astro-cid-qlbszkyo>${leistung.text[language]}</p> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/webprojekte/feuchter-gmbh-astro/feuchter-gmbh/src/components/Leistungen.astro", void 0);

export { $$Leistungen as $ };
