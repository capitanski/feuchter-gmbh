import { f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const Hochzeiten = new Proxy({"src":"/custom-folder/konzeption.BZfKvx5v.jpg","width":600,"height":338,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/konzeption.jpg";
							}
							
							return target[name];
						}
					});

const Corporate = new Proxy({"src":"/custom-folder/produktion.r_3EJc1L.jpg","width":600,"height":338,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/produktion.jpg";
							}
							
							return target[name];
						}
					});

const Birthday = new Proxy({"src":"/custom-folder/logistik.CEFg3cVX.jpg","width":600,"height":338,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/logistik.jpg";
							}
							
							return target[name];
						}
					});

const $$Leistungen = createComponent(($$result, $$props, $$slots) => {
  const leistungen = [
    {
      icon: Hochzeiten.src,
      title: "Entwicklung & Konzeption",
      text: "Von der ersten Idee bis zum fertigen Design entwickeln wir passgenaue Bekleidungsl\xF6sungen, die h\xF6chsten Anforderungen gerecht werden. Unser erfahrenes Team erarbeitet individuelle Konzepte, die Funktionalit\xE4t, Komfort und Stil vereinen \u2013 ma\xDFgeschneidert auf die Bed\xFCrfnisse von Milit\xE4r, Beh\xF6rden und Unternehmen."
    },
    {
      icon: Corporate.src,
      title: "Produktion",
      text: "In unserer Produktion setzen wir auf modernste Technologien und h\xF6chste Qualit\xE4tsstandards. Jedes Kleidungsst\xFCck wird sorgf\xE4ltig gefertigt, um Langlebigkeit und maximale Funktionalit\xE4t zu gew\xE4hrleisten. Dabei kombinieren wir technisches Know-how mit einem pr\xE4zisen Auge f\xFCr Details, um robuste Arbeitskleidung und exklusive Corporate Fashion zu liefern."
    },
    {
      icon: Birthday.src,
      title: "Logistik & Vertrieb",
      text: "Effiziente Logistikprozesse und ein starker Vertriebsservice garantieren, dass Ihre Bestellung termingerecht und zuverl\xE4ssig bei Ihnen ankommt. Wir k\xFCmmern uns um die gesamte Lieferkette \u2013 von der Produktion bis zur Auslieferung \u2013 und stellen sicher, dass Ihre Mitarbeiter stets optimal ausgestattet sind."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="leistungen" data-astro-cid-qlbszkyo> <div class="container" data-astro-cid-qlbszkyo> <h2 class="animatable" data-astro-cid-qlbszkyo>Leistungen</h2> <p class="subtitle animatable" data-astro-cid-qlbszkyo>
Von der Entwicklung, über die Produktion bis hin zur Logistik
</p> <div class="rezensionen-grid" data-astro-cid-qlbszkyo> ${leistungen.map((leistung) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-qlbszkyo> <div class="icon-and-title" data-astro-cid-qlbszkyo> <img${addAttribute(leistung.icon, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-qlbszkyo> <p class="card-title" data-astro-cid-qlbszkyo>${leistung.title}</p> </div> <p class="card-text" data-astro-cid-qlbszkyo>${leistung.text}</p> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Leistungen.astro", void 0);

export { $$Leistungen as $ };
