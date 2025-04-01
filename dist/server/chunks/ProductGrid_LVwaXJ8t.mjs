import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, j as renderScript, r as renderTemplate, i as renderComponent, k as Fragment } from './astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { A as Arrow } from './Arrow_sand_CKat7LSH.mjs';
import { b as buttonTranslations } from './Layout_DaASaaif.mjs';

const $$Astro$1 = createAstro("http://192.168.178.48:4321/");
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Modal;
  const { isOpen = false, content, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="modal-overlay"${addAttribute(isOpen ? "block" : "none", "style:display")} data-astro-cid-qmzm2soj> <div class="modal" data-astro-cid-qmzm2soj> <button class="close-button" data-astro-cid-qmzm2soj>×</button> <h2 data-astro-cid-qmzm2soj>${content.title[pageLanguage]}</h2> <p data-astro-cid-qmzm2soj>${content.shortDescription[pageLanguage]}</p> <div class="modal-image-grid" data-astro-cid-qmzm2soj> ${content.images.map((image) => {
    return renderTemplate`<div class="modal-grid-item" data-astro-cid-qmzm2soj> <img${addAttribute(image, "src")} data-astro-cid-qmzm2soj> </div>`;
  })} </div> ${content.lists.map((list) => {
    return renderTemplate`<h3 data-astro-cid-qmzm2soj> ${list.title[pageLanguage]} </h3>
            <ul data-astro-cid-qmzm2soj> ${list.content.map((listitem) => {
      return renderTemplate`<li data-astro-cid-qmzm2soj>${listitem[pageLanguage]}</li>`;
    })} </ul>`;
  })} <!--<div
            set:html={content.optionalRichtext.content[pageLanguage]}
            class="rich-text-dark"
        />--> </div> </div> ${renderScript($$result, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Modal.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Modal.astro", void 0);

const parkaNiederlandeFront = new Proxy({"src":"/custom-folder/Waldcamo Ripstop Jacke Front.Lcj3P0_b.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Waldcamo Ripstop Jacke Front.jpg";
							}
							
							return target[name];
						}
					});

const parkaNiederlandeSeite = new Proxy({"src":"/custom-folder/Waldcamo Ripstop Jacke Seite.DLlTtpIE.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Waldcamo Ripstop Jacke Seite.jpg";
							}
							
							return target[name];
						}
					});

const regenjackeDkFront = new Proxy({"src":"/custom-folder/Regenjacke Daenemark Front.CbyGIGlq.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Regenjacke Daenemark Front.jpg";
							}
							
							return target[name];
						}
					});

const regenjackeDkSeite = new Proxy({"src":"/custom-folder/Regenjacke Daenemark Seite.qGWhAyBo.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Regenjacke Daenemark Seite.jpg";
							}
							
							return target[name];
						}
					});

const kbsJackeFront = new Proxy({"src":"/custom-folder/Feldbekleidung Jacke Hell Front.53To_7Lb.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldbekleidung Jacke Hell Front.jpg";
							}
							
							return target[name];
						}
					});

const kbsJackeSeite = new Proxy({"src":"/custom-folder/Feldbekleidung Jacke Hell Seite.B_KgQMcy.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldbekleidung Jacke Hell Seite.jpg";
							}
							
							return target[name];
						}
					});

const bwParkaOlivFront = new Proxy({"src":"/custom-folder/Bundeswehr Parka Oliv Front.BWeQF63N.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bundeswehr Parka Oliv Front.jpg";
							}
							
							return target[name];
						}
					});

const bwParkaOlivSeite = new Proxy({"src":"/custom-folder/Bundeswehr Parka Oliv Seite.Yk2HR6XZ.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bundeswehr Parka Oliv Seite.jpg";
							}
							
							return target[name];
						}
					});

const ksJackeFront = new Proxy({"src":"/custom-folder/Kaelteschutzjacke Front.DukZ40hi.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Kaelteschutzjacke Front.jpg";
							}
							
							return target[name];
						}
					});

const ksJackeSeite = new Proxy({"src":"/custom-folder/Kaelteschutzjacke Seite.CS04OlsM.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Kaelteschutzjacke Seite.jpg";
							}
							
							return target[name];
						}
					});

const feldhoseTropentarnFront = new Proxy({"src":"/custom-folder/Tropentarn Feldhose Front.CVpXD6pT.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Tropentarn Feldhose Front.jpg";
							}
							
							return target[name];
						}
					});

const feldhoseTropentarnSeite = new Proxy({"src":"/custom-folder/Tropentarn Feldhose Seite.237zv3IB.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Tropentarn Feldhose Seite.jpg";
							}
							
							return target[name];
						}
					});

const feldhoseFlecktarnFront = new Proxy({"src":"/custom-folder/Feldhose Flecktarn Front.CHr_8RCN.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldhose Flecktarn Front.jpg";
							}
							
							return target[name];
						}
					});

const feldhoseFlecktarnSeite = new Proxy({"src":"/custom-folder/Feldhose Flecktarn Seite.DiWayZii.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldhose Flecktarn Seite.jpg";
							}
							
							return target[name];
						}
					});

const regenhoseDkFront = new Proxy({"src":"/custom-folder/Regenhose Daenemark Front.BtGBBkYj.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Regenhose Daenemark Front.jpg";
							}
							
							return target[name];
						}
					});

const regenhoseDkSeite = new Proxy({"src":"/custom-folder/Regenhose Daenemark Seite.KCTlhNck.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Regenhose Daenemark Seite.jpg";
							}
							
							return target[name];
						}
					});

const kbsHoseFront = new Proxy({"src":"/custom-folder/Feldbekleidung Hose Hell Front.gitTyns-.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldbekleidung Hose Hell Front.jpg";
							}
							
							return target[name];
						}
					});

const kbsHoseSeite = new Proxy({"src":"/custom-folder/Feldbekleidung Hose Hell Seite.DbLFnCb_.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Feldbekleidung Hose Hell Seite.jpg";
							}
							
							return target[name];
						}
					});

const ksHoseFront = new Proxy({"src":"/custom-folder/Kaelteschutzhose Front.BWHQkNwF.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Kaelteschutzhose Front.jpg";
							}
							
							return target[name];
						}
					});

const ksHoseSeite = new Proxy({"src":"/custom-folder/Kaelteschutzhose Seite.C01Ntz42.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Kaelteschutzhose Seite.jpg";
							}
							
							return target[name];
						}
					});

const feldbluseTropentarnFront = new Proxy({"src":"/custom-folder/Tropentarn Bluse Front.CI9Pb0wy.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Tropentarn Bluse Front.jpg";
							}
							
							return target[name];
						}
					});

const feldbluseTropentarnSeite = new Proxy({"src":"/custom-folder/Tropentarn Bluse Seite.CiPNycMS.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Tropentarn Bluse Seite.jpg";
							}
							
							return target[name];
						}
					});

const wuestenTarnhemdFront = new Proxy({"src":"/custom-folder/Wuestentarn Hemd Front.CyVYqD5W.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Wuestentarn Hemd Front.jpg";
							}
							
							return target[name];
						}
					});

const wuestenTarnhemdSeite = new Proxy({"src":"/custom-folder/Wuestentarn Hemd Seite.wc3nne68.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Wuestentarn Hemd Seite.jpg";
							}
							
							return target[name];
						}
					});

const bordhemdFront = new Proxy({"src":"/custom-folder/Bordhemd Marine Front.C69Flbhu.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bordhemd Marine Front.jpg";
							}
							
							return target[name];
						}
					});

const bordhemdSeite = new Proxy({"src":"/custom-folder/Bordhemd Marine Seite.DKcVCRUy.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bordhemd Marine Seite.jpg";
							}
							
							return target[name];
						}
					});

const feldMuetzeFront = new Proxy({"src":"/custom-folder/Dienstkappe Front Flecktarn.DafQIuoh.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Dienstkappe Front Flecktarn.jpg";
							}
							
							return target[name];
						}
					});

const feldMuetzeSeite = new Proxy({"src":"/custom-folder/Dienstkappe Seite Flecktarn.CKnY-W1m.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Dienstkappe Seite Flecktarn.jpg";
							}
							
							return target[name];
						}
					});

const krempenhutFlecktarnFront = new Proxy({"src":"/custom-folder/Krempenhut Flecktarn Front.CrGSiXI1.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Krempenhut Flecktarn Front.jpg";
							}
							
							return target[name];
						}
					});

const krempenhutFlecktarnSeite = new Proxy({"src":"/custom-folder/Krempenhut Flecktarn Seite.BSMfqOOA.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Krempenhut Flecktarn Seite.jpg";
							}
							
							return target[name];
						}
					});

const bwPulloverFront = new Proxy({"src":"/custom-folder/Bundeswehr Pullover Front.BLNrZnKM.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bundeswehr Pullover Front.jpg";
							}
							
							return target[name];
						}
					});

const bwPulloverSeite = new Proxy({"src":"/custom-folder/Bundeswehr Pullover Seite.DKlNsito.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Bundeswehr Pullover Seite.jpg";
							}
							
							return target[name];
						}
					});

const monteurkombiFront = new Proxy({"src":"/custom-folder/Monteurkombi Front.iYCDe86S.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Monteurkombi Front.jpg";
							}
							
							return target[name];
						}
					});

const monteurkombiSeite = new Proxy({"src":"/custom-folder/Monteurkombi Seite.CYxkTo4U.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Monteurkombi Seite.jpg";
							}
							
							return target[name];
						}
					});

const kampftragetasche = new Proxy({"src":"/custom-folder/kampftragetasche_100l.DNPv9WQJ.jpg","width":306,"height":350,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/kampftragetasche_100l.jpg";
							}
							
							return target[name];
						}
					});

const grantentasche = new Proxy({"src":"/custom-folder/granatentasche.CIY2kdDn.webp","width":468,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/granatentasche.webp";
							}
							
							return target[name];
						}
					});

const gamasche = new Proxy({"src":"/custom-folder/gamasche.BRw2E9Jt.webp","width":1920,"height":1920,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/gamasche.webp";
							}
							
							return target[name];
						}
					});

const rucksackUeberzug = new Proxy({"src":"/custom-folder/rucksack_ueberzug.BpzjhiL0.jpg","width":800,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/rucksack_ueberzug.jpg";
							}
							
							return target[name];
						}
					});

const clothingProducts = [
    {
        title: {
            de: "Parka Niederlande Wetterschutz Bilaminat",
            en: "Dutch Weather Protection Parka – Bilaminate"
        },
        shortDescription: {
            de: "Der Parka/Jacke Niederlande Militär bietet erstklassigen Schutz bei extremen Bedingungen und garantiert gleichzeitig eine hohe Funktionalität. Dank seines robusten Materials, der zahlreichen Einstellmöglichkeiten und praktischen Taschen ist dieser Parka eine ausgezeichnete Wahl für den professionellen Einsatz, sei es bei militärischen, polizeilichen oder anderen anspruchsvollen Aktivitäten.",
            en: "The Dutch military parka offers top-tier protection in extreme conditions while ensuring high functionality. Thanks to its durable materials, multiple adjustment options, and practical pockets, it is an excellent choice for professional use—whether in military, police, or other demanding environments."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            parkaNiederlandeFront.src,
            parkaNiederlandeSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Einreihige Jacke: Robuster, militärischer Parka/Jacke aus strapazierfähigem Material, ideal für den Einsatz in rauen Bedingungen.",
                        en: "Single-breasted design: Sturdy military-grade parka made from durable materials, ideal for rough conditions."
                    },
                    {
                        de: "Tarndruck: Mit einem charakteristischen Tarndruck versehen, sorgt der Parka für effektive Tarnung in verschiedenen Umgebungen.",
                        en: "Camouflage print: Provides effective concealment in a range of environments."
                    },
                    {
                        de: "Reißverschluss: Vorderer Zwei-Wege-Reißverschluss (RV) in der Mitte, der bis zum Stehkragen reicht und für schnellen Zugang und Belüftung sorgt.",
                        en: "Zipper: Center front two-way zipper extending to the stand-up collar for quick access and ventilation."
                    },
                    {
                        de: "Kragen: Hoher Kragen, ausgestattet mit flammhemmendem Fleece für zusätzlichen Schutz und Wärme.",
                        en: "Collar: High collar lined with flame-retardant fleece for added protection and warmth."
                    },
                    {
                        de: "Weitenregulierung: Der Kragen, die Taille und der Jackensaum sind mit Gummikordeln und Kordelstoppern ausgestattet, um die Passform individuell anzupassen und den Schutz gegen Wind und Wetter zu verbessern.",
                        en: "Adjustable fit: Drawcords and stoppers at the collar, waist, and hem allow individual adjustment and enhanced weather protection."
                    },
                    {
                        de: "Verstärkungen: Robuste Verstärkungen an den Schulter- und Ellenbogenbereichen für zusätzliche Haltbarkeit und Abriebfestigkeit.",
                        en: "Reinforcements: Durable fabric reinforcements at shoulders and elbows for extra abrasion resistance."
                    },
                    {
                        de: "Belüftungsöffnungen: An den Achseln und Unterarmen befinden sich Belüftungsöffnungen, hinterlegt mit flammhemmendem Netzeinsatz (formgerecht und regulär gewirkt), die mit einem Zwei-Wege-Reißverschluss verschlossen werden können.",
                        en: "Ventilation: Underarm and forearm vents with flame-retardant mesh backing, closable via two-way zippers."
                    },
                    {
                        de: "Abriebschutz: Verstärkter Stoff im Bereich der Ärmel- und Saumabschlüsse, um die Lebensdauer der Jacke zu verlängern und den Schutz vor Abrieb zu gewährleisten.",
                        en: "Abrasion protection: Reinforced fabric at sleeve and hem edges to extend durability and resist wear."
                    },
                    {
                        de: "Ärmelsaumregulierung: Durch eingesetzte Keile und Laschen mit Haftverschlüssen können die Ärmelweite angepasst werden, um den Tragekomfort zu optimieren.",
                        en: "Adjustable cuffs: Inserted gussets and hook-and-loop tabs allow sleeve width adjustment for improved comfort."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Nässeschutzjacke DK-Flecktarn",
            en: "Rain Protection Jacket DK Camouflage"
        },
        shortDescription: {
            de: "Die Nässeschutzjacke Dänemark mit Tarndruck ist speziell für den Außeneinsatz bei schlechtem Wetter konzipiert und bietet sowohl hervorragenden Schutz vor Nässe als auch maximale Bewegungsfreiheit. Sie eignet sich besonders für den militärischen Einsatz und andere anspruchsvolle Tätigkeiten in schwierigem Gelände.",
            en: "The Danish rain protection jacket with camouflage print is specifically designed for outdoor use in poor weather. It offers excellent protection against moisture while maintaining maximum freedom of movement. Ideal for military operations and other demanding activities in challenging terrain."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            regenjackeDkFront.src,
            regenjackeDkSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Einreihige Jacke: Ungefütterte Jacke mit modernem Tarndruck, ideal für den Einsatz in verdeckten, militärischen Umgebungen.",
                        en: "Single-layer jacket: Unlined, modern camouflage pattern; ideal for tactical operations in concealed environments."
                    },
                    {
                        de: "Reißverschluss: Vorderer Zwei-Wege-Reißverschluss (RV) in der Mitte, der bis in den Stehkragen reicht, für einfachen Zugang und Belüftung.",
                        en: "Zipper: Front two-way zipper extending up to the stand-up collar for easy access and ventilation."
                    },
                    {
                        de: "Schulterpasse: Ergonomische Schulterpasse für mehr Bewegungsfreiheit und Komfort bei der Arbeit.",
                        en: "Shoulder yoke: Ergonomic design improves mobility and comfort during use."
                    },
                    {
                        de: "Verstärkungen: Robuste Verstärkungen an den Armen und Schultern für erhöhte Strapazierfähigkeit bei rauem Einsatz.",
                        en: "Reinforcements: Durable fabric reinforcements on arms and shoulders increase abrasion resistance."
                    },
                    {
                        de: "Kragen: Hoher Kragen zum Schutz vor Wind und Wetter, speziell mit flammhemmendem Material ausgestattet.",
                        en: "Collar: High collar for wind and weather protection, lined with flame-retardant material."
                    },
                    {
                        de: "Weitenregulierung des Kragens: Mit Gummikordel und Kordelstopper in der Hinteren Mitte (HM), für eine individuelle Anpassung.",
                        en: "Adjustable collar: Elastic cord and stopper at the back for a custom fit."
                    },
                    {
                        de: "Weitenregulierung in der Taille und am Jackensaum: Durch Gummikordeln und Kordelstopper, um eine optimale Passform zu gewährleisten.",
                        en: "Adjustable waist and hem: Elastic drawcords and stoppers ensure an optimized fit."
                    },
                    {
                        de: "Belüftungsöffnungen: Im Achsel- und Unterarmbereich, ausgestattet mit flammhemmendem Netzeinsatz (formgerecht, regulär gewirkt). Diese sind mit einem Zwei-Wege-RV in O-Form verschließbar.",
                        en: "Ventilation: Underarm and forearm vents with flame-retardant mesh inserts, closable via O-shaped two-way zippers."
                    },
                    {
                        de: "Nationalitätsabzeichen: Auf dem Oberarm, um die Zugehörigkeit zu kennzeichnen.",
                        en: "Nationality insignia: Located on the upper arm to indicate affiliation."
                    },
                    {
                        de: "Ärmelsaumregulierung: Durch eingesetzte Keile und Laschen mit Haftverschlüssen zur Anpassung der Ärmellänge.",
                        en: "Adjustable sleeve cuffs: Gussets and hook-and-loop tabs allow custom sleeve width."
                    },
                    {
                        de: "Befestigungsmöglichkeiten für Ausrüstung: Zwei Schlingen aus Gummikordel innen und außen an den Ärmelsäumen zur Befestigung von übergezogenen Nässeschutzjacken oder untergezogenen Kälteschutzjacken (Iso-Schicht II).",
                        en: "Gear loops: Two elastic loops inside and outside the cuffs to attach rain or thermal (insulation layer II) gear."
                    },
                    {
                        de: "Reißverschluss-Garagen: An den Enden der Belüftungsöffnungen und entlang der gesamten Jacke zur Geräuschminderung.",
                        en: "Zipper garages: Located at the ends of ventilation zippers and throughout the jacket to reduce noise."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Kampfanzug KBS SK Jacke kurz",
            en: "Combat Suit KBS SK Jacket – Short"
        },
        shortDescription: {
            de: "Die Kampfjacke ist sowohl Teil der Bekleidungskomponenten des „Infanterist der Zukunft - Erweitertes System“ IdZ-ES als auch des Konzeptes „Kampfbekleidungssatz Streitkräfte“ KBS SK. Sie wird in Verbindung mit der Kampfhose, als Alternative zur Kampfjacke, lang oder dem Combat-Shirt SK getragen. Die Kampfjacke wird in den Varianten 5 Farben-Tarndruck, 3 Farben-Tarndruck und Multitarndruck mit Vektorenschutzausrüstung gefertigt.",
            en: "The combat jacket is part of both the 'Future Soldier – Extended System' (IdZ-ES) and the 'Combat Clothing Set Armed Forces' (KBS SK) concept. It is worn in combination with combat pants, as an alternative to the long combat jacket or the Combat Shirt SK. Available in 5-color camouflage, 3-color camouflage, and multi-camouflage with integrated vector protection."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            kbsJackeFront.src,
            kbsJackeSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Einreihige, nicht gefütterte Jacke: Mit verlängertem, abgerundetem Rücken und Schulterpasse für optimale Passform.",
                        en: "Single-layer, unlined jacket with extended rounded back and shoulder yoke for optimal fit."
                    },
                    {
                        de: "Konstruktion: 2 Vorderteile (VT), 1 Rückenteil (RT), 2-teilige Ärmel.",
                        en: "Construction: Two front panels, one back panel, and two-piece sleeves."
                    },
                    {
                        de: "Reißverschluss: In vorderer Mitte (VM) befindet sich ein verdeckter Zwei-Wege-Reißverschluss (RV) von Hüfthöhe bis in den Stehkragen.",
                        en: "Zipper: Concealed two-way zipper at the front center extending from waist to collar."
                    },
                    {
                        de: "Vorderteil-Belege: Eingefasst, um die Schnittkanten vor Beschädigungen durch die Haftverschlüsse zu schützen.",
                        en: "Front panel facing: Bound edges to protect seams from hook-and-loop fasteners."
                    },
                    {
                        de: "Untertritt: Mit Gurtband besetzt, um das Einklemmen im RV zu verhindern.",
                        en: "Zipper backing: Reinforced with webbing to prevent fabric from getting caught."
                    },
                    {
                        de: "Übertritt: Der RV in der Vordermitte (VM) wird mit 6 Haftverschlüssen verschlossen.",
                        en: "Zipper cover: Secured with six hook-and-loop fasteners over the front zipper."
                    },
                    {
                        de: "Aufschiebeschlaufe: Für das Dienstgradabzeichen auf dem Übertritt des RV in der Vordermitte.",
                        en: "Slide loop: For attaching rank insignia on the zipper cover."
                    },
                    {
                        de: "Namensbandanbringung: Schlingenband auf der linken Brusttaschenklappe zur Befestigung des Namensbandes.",
                        en: "Name tape: Loop patch on the left chest pocket flap for name tag attachment."
                    },
                    {
                        de: "Kragen: Mit flammhemmendem Fleece gefüttert für zusätzlichen Komfort.",
                        en: "Collar: Lined with flame-retardant fleece for added comfort."
                    },
                    {
                        de: "Weitenregulierung des Kragens: Mittels Gummikordel und Kordelstopper in der Hinteren Mitte (HM).",
                        en: "Adjustable collar: Elastic drawcord with stopper at the back center for a custom fit."
                    },
                    {
                        de: "Weitenregulierung in der Taille und am Jackensaum: Mit Gummikordel und Kordelstopper für eine individuelle Passform.",
                        en: "Adjustable waist and hem: Elastic drawcords with stoppers for a personalized fit."
                    },
                    {
                        de: "Belüftungsöffnungen: Im Achsel- und Unterarmbereich, hinterlegt mit flammhemmendem Netzeinsatz, formgerecht und regulär gewirkt. Mit Zwei-Wege-RV in O-Form verschließbar.",
                        en: "Ventilation: Underarm and forearm vents with flame-retardant mesh, closable via O-shaped two-way zippers."
                    },
                    {
                        de: "Nationalitätsabzeichen: Auf dem Oberarm angebracht.",
                        en: "Nationality insignia: Positioned on the upper arm."
                    },
                    {
                        de: "Weitenregulierung der Ärmelsäume: Mittels eingesetztem Keil und Lasche mit Haftverschluss.",
                        en: "Adjustable cuffs: Gusset inserts with hook-and-loop fasteners for width adjustment."
                    },
                    {
                        de: "Ärmelsaum-Befestigungsmöglichkeiten: Je 2 Schlingen aus Gummikordel innen und außen zur Befestigung der übergezogenen Nässeschutzjacke oder der untergezogenen Kälteschutzjacke (Iso-Schicht II) sowie der Kampfhandschuhe.",
                        en: "Cuff attachment loops: Two elastic loops (inside and outside) for securing outer rainwear, inner thermal layers (Insulation Layer II), or combat gloves."
                    },
                    {
                        de: "Reißverschluss-Griffe: Kurze Griffe an der gesamten Jacke und RV-Garagen an den Enden der Belüftungsöffnungen zur Reduzierung der Geräuschentwicklung.",
                        en: "Zipper pulls: Short pulls throughout the jacket and zipper garages at ventilation ends to reduce noise."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Feldparka oliv",
            en: "Field Parka Olive"
        },
        shortDescription: {
            de: "Der Bundeswehr Feldparka in oliv mit Teddyfleece ist eine robuste und funktionale Jacke, die ursprünglich für den Einsatz in der Bundeswehr entwickelt wurde. Sie bietet ausgezeichneten Schutz vor kaltem Wetter und eignet sich besonders gut für den Einsatz in kühleren und feuchteren Klimazonen. Die Kombination aus strapazierfähigem Außenmaterial und warmem Teddyfleece im Inneren sorgt für hohen Tragekomfort und Wärmeisolation.",
            en: "The olive Bundeswehr field parka with teddy fleece is a rugged, functional jacket originally designed for military use. It provides excellent protection in cold weather and is particularly suitable for cooler and wetter climates. The combination of durable outer fabric and warm fleece lining ensures high comfort and reliable insulation."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            bwParkaOlivFront.src,
            bwParkaOlivSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Material: Robustes, strapazierfähiges Obermaterial aus Nylon und Polyester.",
                        en: "Material: Durable outer fabric made of nylon and polyester."
                    },
                    {
                        de: "Innenfutter: Warmes Teddyfleece, das für zusätzliche Wärme sorgt.",
                        en: "Lining: Soft teddy fleece interior provides extra warmth."
                    },
                    {
                        de: "Farbe: Olivgrün, ideal für den Einsatz im Freien und bei militärischen Operationen.",
                        en: "Color: Olive green, ideal for outdoor use and military operations."
                    },
                    {
                        de: "Kapuze: Abnehmbare Kapuze mit Kordelzug für eine individuelle Anpassung.",
                        en: "Hood: Detachable hood with drawcord for adjustable fit."
                    },
                    {
                        de: "Taschen: Zahlreiche praktische Taschen, darunter Brusttaschen und aufgesetzte Seitentaschen, die ausreichend Stauraum bieten.",
                        en: "Pockets: Multiple practical pockets, including chest and flap side pockets for ample storage."
                    },
                    {
                        de: "Wärmeisolation: Hervorragende Isolierung, die auch bei niedrigen Temperaturen warm hält.",
                        en: "Insulation: Excellent thermal insulation for warmth even in low temperatures."
                    },
                    {
                        de: "Vielseitigkeit: Geeignet für den Einsatz bei Outdoor-Aktivitäten, aber auch als modisches Statement im Alltag.",
                        en: "Versatility: Suitable for outdoor activities and stylish enough for everyday wear."
                    },
                    {
                        de: "Wind- und wasserdicht: Das Außenmaterial schützt vor Wind und Regen und sorgt für zusätzlichen Komfort.",
                        en: "Wind & waterproof: The outer fabric protects against wind and rain, enhancing overall comfort."
                    },
                    {
                        de: "Langlebigkeit: Entwickelt für den militärischen Einsatz, daher besonders robust und langlebig.",
                        en: "Durability: Designed for military use—extremely robust and long-lasting."
                    },
                    {
                        de: "Komfort: Die lockere Passform ermöglicht Bewegungsfreiheit und Tragekomfort auch bei längeren Einsätzen.",
                        en: "Comfort: Loose fit offers freedom of movement and comfort during extended wear."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Kälteschutz Unterziehjacke",
            en: "Cold Weather Undershirt Jacket"
        },
        shortDescription: {
            de: "Die Unterziehjacke, Kälteschutz ist Teil der Feldbekleidung. Steppjacke mit teilbarem Reißverschluss mit Abdeckung im Kragenbereich, eingesetzten Ärmeln, Strickkragen und Ärmelbündchen, aufgesetzte rechte Reißverschluss-Brusttasche, Achselbelüftung, Zugkordel im Saum.",
            en: "The cold weather undershirt jacket is part of the standard field clothing. This quilted jacket features a separable front zipper with cover flap at the collar, set-in sleeves, knitted collar and cuffs, a right-side chest zip pocket, underarm ventilation, and a drawcord at the hem."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            ksJackeFront.src,
            ksJackeSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Farbe: oliv",
                        en: "Color: olive"
                    },
                    {
                        de: "Grundstoff 100% Polyamid",
                        en: "Shell fabric: 100% polyamide"
                    },
                    {
                        de: "Füllvlies 100% Polyester.",
                        en: "Insulation layer: 100% polyester"
                    },
                    {
                        de: "Futterstoff 100% Polyamid",
                        en: "Lining fabric: 100% polyamide"
                    },
                    {
                        de: "Hochwertige Isolation: Gefertigt aus modernen, wärmeisolierenden Materialien wie Climashield® oder ähnlichen synthetischen Fasern, die auch in extrem kalten Temperaturen zuverlässig wärmen.",
                        en: "High-performance insulation: Made from modern thermal materials such as Climashield® or similar synthetic fibers for reliable warmth in extreme cold."
                    },
                    {
                        de: "Atmungsaktiv & Feuchtigkeitsableitend: Das Material transportiert Feuchtigkeit vom Körper weg, sodass der Träger trocken und warm bleibt.",
                        en: "Breathable & moisture-wicking: Fabric wicks moisture away from the body to keep the wearer dry and warm."
                    },
                    {
                        de: "Winddicht: Die Außenschicht schützt vor kaltem Wind und verbessert die Wärmeleistung.",
                        en: "Windproof: The outer layer blocks cold wind and enhances heat retention."
                    },
                    {
                        de: "Geringes Gewicht: Trotz hoher Wärmeleistung bleibt die Jacke leicht und trägt nicht auf.",
                        en: "Lightweight: Despite excellent insulation, the jacket remains light and non-bulky."
                    },
                    {
                        de: "Kompakt verstaubar: Lässt sich klein zusammenpacken, ideal für den modularen Einsatz mit anderen Bundeswehr-Bekleidungsstücken.",
                        en: "Compact: Easily packable, ideal for modular use with other Bundeswehr clothing."
                    },
                    {
                        de: "Unterziehfunktion: Entwickelt als Midlayer für das Zwiebelprinzip, kann aber auch eigenständig getragen werden.",
                        en: "Layering capability: Designed as a midlayer in a layering system, but can also be worn standalone."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Feldhose Tropentarn",
            en: "Desert camo field trousers",
        },
        shortDescription: {
            de: `Die Feldhose, Tarndruck ist Teil des Feldanzuges der BW. Sie wird in den Varianten als 5 Farben-Tarndruck ohne und mit Vektorenschutzausrüstung gefertigt. Hose mit angeschnittenem Bund und Knopfverschluss, Reißverschluss im Schlitz, Bundfalten, 2 Flügeltaschen, 2 aufgesetzte Blasebalgtaschen mit Patten und Druckknopfverschluss, 1 Gesäß-Pattentasche mit Knopf und Knopfloch (rechtes Hinterhosenteil), 1 Klappmessertasche, 8 Bundschlaufen. Material Tarn: 65% Baumwolle, 35% Polyester`,
            en: `The camouflage field trousers are part of the German Bundeswehr (BW) uniform. They are produced in two versions: a 5-color camouflage print, with and without vector protection equipment.

    The trousers feature an integrated waistband with button closure, zipper fly, pleats at the waist, two side slash pockets, two patch bellows pockets with flaps and snap button closures, one rear flap pocket with button and buttonhole (on the right back panel), one pocket for a folding knife, and eight belt loops.
    
    Camouflage material: 65% cotton, 35% polyester.`,
        },
        category: {
            de: "Hosen",
            en: "Pants",
        },
        tag: {
            de: "Original TL",
            en: "Original TL",
        },
        images: [
            feldhoseTropentarnFront.src,
            feldhoseTropentarnSeite.src,
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data",
                },
                content: [
                    {
                        de: "gerade und bequem geschnittene Feldhose",
                        en: "Straight-cut and comfortably fitting field trousers",
                    },
                    {
                        de: "Original nach Bundeswehr TL",
                        en: "Original according to Bundeswehr technical specifications (TL)",
                    },
                    {
                        de: "2 Einschubtaschen",
                        en: "2 slash pockets",
                    },
                    {
                        de: "2 aufgesetzte Beintaschen mit Patte und Druckknopfverschluss",
                        en: "2 patch cargo pockets with flaps and snap button closures",
                    },
                    {
                        de: "1 Gesäßtasche mit Patte und Knopfverschluss",
                        en: "1 rear pocket with flap and button closure",
                    },
                    {
                        de: "umlaufend 4 cm breite Gürtelschlaufen",
                        en: "4 cm wide belt loops all around",
                    },
                    {
                        de: "Verschluss mit Reißverschluss und Knopf",
                        en: "Closure with zipper and button",
                    },
                    {
                        de: "Knöpfe am Bund zum Anbringen von Hosenträgern",
                        en: "Buttons on the waistband for attaching suspenders",
                    },
                    {
                        de: "besonders robustes Gewebe",
                        en: "Especially durable fabric",
                    },
                ],
            },
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext title optional",
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html",
            },
        },
    },
    {
        title: {
            de: "Feldhose Flecktarn",
            en: "Flecktarn camo field trousers",
        },
        shortDescription: {
            de: `Die Feldhose, Tarndruck ist Teil des Feldanzuges der BW. Sie wird in den Varianten als 5 Farben-Tarndruck ohne und mit Vektorenschutzausrüstung gefertigt. Hose mit angeschnittenem Bund und Knopfverschluss, Reißverschluss im Schlitz, Bundfalten, 2 Flügeltaschen, 2 aufgesetzte Blasebalgtaschen mit Patten und Druckknopfverschluss, 1 Gesäß-Pattentasche mit Knopf und Knopfloch (rechtes Hinterhosenteil), 1 Klappmessertasche, 8 Bundschlaufen. Material Tarn: 65% Baumwolle, 35% Polyester`,
            en: `The camouflage field trousers are part of the German Bundeswehr (BW) uniform. They are produced in two versions: a 5-color camouflage print, with and without vector protection equipment.

    The trousers feature an integrated waistband with button closure, zipper fly, pleats at the waist, two side slash pockets, two patch bellows pockets with flaps and snap button closures, one rear flap pocket with button and buttonhole (on the right back panel), one pocket for a folding knife, and eight belt loops.
    
    Camouflage material: 65% cotton, 35% polyester.`,
        },
        category: {
            de: "Hosen",
            en: "Pants",
        },
        tag: {
            de: "Original TL",
            en: "Original TL",
        },
        images: [
            feldhoseFlecktarnFront.src,
            feldhoseFlecktarnSeite.src,
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data",
                },
                content: [
                    {
                        de: "gerade und bequem geschnittene Feldhose",
                        en: "Straight-cut and comfortably fitting field trousers",
                    },
                    {
                        de: "Original nach Bundeswehr TL",
                        en: "Original according to Bundeswehr technical specifications (TL)",
                    },
                    {
                        de: "2 Einschubtaschen",
                        en: "2 slash pockets",
                    },
                    {
                        de: "2 aufgesetzte Beintaschen mit Patte und Druckknopfverschluss",
                        en: "2 patch cargo pockets with flaps and snap button closures",
                    },
                    {
                        de: "1 Gesäßtasche mit Patte und Knopfverschluss",
                        en: "1 rear pocket with flap and button closure",
                    },
                    {
                        de: "umlaufend 4 cm breite Gürtelschlaufen",
                        en: "4 cm wide belt loops all around",
                    },
                    {
                        de: "Verschluss mit Reißverschluss und Knopf",
                        en: "Closure with zipper and button",
                    },
                    {
                        de: "Knöpfe am Bund zum Anbringen von Hosenträgern",
                        en: "Buttons on the waistband for attaching suspenders",
                    },
                    {
                        de: "besonders robustes Gewebe",
                        en: "Especially durable fabric",
                    },
                ],
            },
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext title optional",
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html",
            },
        },
    },
    {
        title: {
            de: "Nässeschutzhose DK-Flecktarn",
            en: "Wet Weather Protection Trousers DK Camouflage"
        },
        shortDescription: {
            de: "Die Nässeschutzhose Dänemark mit Tarndruck ist die perfekte Wahl für den Einsatz in rauen Wetterbedingungen und bietet höchsten Schutz vor Nässe und Kälte. Sie ist robust, funktional und bietet durch ihre zahlreichen Anpassungsmöglichkeiten sowie Taschen zahlreiche Vorteile für den professionellen Einsatz in extremen Umgebungen.",
            en: "The Danish camouflage wet weather trousers are the perfect choice for operations in harsh weather conditions, offering maximum protection against moisture and cold. They are robust, functional, and offer numerous advantages for professional use in extreme environments thanks to their adjustable features and ample pocket space."
        },
        category: {
            de: "Hosen",
            en: "Pants"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            regenhoseDkFront.src,
            regenhoseDkSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Einreihige Hose: Ungefütterte Hose mit modernem Tarndruck, speziell entwickelt für den Einsatz unter extremen Wetterbedingungen.",
                        en: "Single-layer trousers: unlined with modern camouflage print, specifically designed for use in extreme weather conditions."
                    },
                    {
                        de: "Reißverschluss: Vorderer Zwei-Wege-Reißverschluss (RV) für einfachen Zugang und Belüftung, der sich bis zur Hüfthöhe erstreckt.",
                        en: "Zipper: Front two-way zipper for easy access and ventilation, extending up to hip height."
                    },
                    {
                        de: "Gürtelschlaufen: Mehrere Gürtelschlaufen für eine sichere Befestigung eines Gürtels, passend für Gürtel bis zu einer Breite von 6 cm.",
                        en: "Belt loops: Multiple loops for securely attaching a belt, suitable for belts up to 6 cm wide."
                    },
                    {
                        de: "Weitenregulierung: Verstellbare Taille durch integrierte Gummikordeln und Kordelstopper, die eine individuelle Passform ermöglichen.",
                        en: "Adjustable fit: Elastic drawcords and stoppers in the waistband allow for a customizable fit."
                    },
                    {
                        de: "Beinöffnung: Weitenregulierung an den Beinabschlüssen mittels Gummikordel und Kordelstopper, um den Komfort und Schutz zu erhöhen.",
                        en: "Leg openings: Adjustable with elastic drawcords and stoppers to enhance comfort and protection."
                    },
                    {
                        de: "Belüftungsöffnungen: An den Oberschenkeln und hinteren Beinen befinden sich Belüftungsöffnungen, die mit einem Zwei-Wege-RV verschlossen werden können, um die Körpertemperatur zu regulieren.",
                        en: "Ventilation openings: Located on the thighs and back legs, can be closed with two-way zippers to regulate body temperature."
                    },
                    {
                        de: "Abriebschutz: Verstärkungen an den inneren Beinen zum Schutz vor Abrieb und verstärktem Kontakt mit rauem Gelände.",
                        en: "Abrasion protection: Reinforcements on the inner legs protect against wear and rough terrain."
                    },
                    {
                        de: "Hosenbund: Mit flammhemmendem Fleece ausgekleidet, um zusätzlich vor extremen Wetterbedingungen zu schützen.",
                        en: "Waistband: Lined with flame-retardant fleece for additional protection against extreme weather."
                    }
                ]
            },
            {
                title: {
                    de: "Taschen",
                    en: "Pockets"
                },
                content: [
                    {
                        de: "2 Oberschenkeltaschen: Zwei große Blasebalgtaschen in Oberschenkelhöhe, ausgestattet mit verstärkten Taschenböden. Die Taschen schließen mit Kordelzug und Kordelstopper, für sicheren Stauraum.",
                        en: "2 thigh cargo pockets: Large bellows-style with reinforced bottoms and drawcord closures for secure storage."
                    },
                    {
                        de: "Messertasche: In der rechten Oberschenkeltasche befindet sich eine spezielle Messertasche mit Knopfverschluss für das sichere Verstauen von Messern oder kleinen Werkzeugen.",
                        en: "Knife pocket: Built-in knife/tool pocket in the right cargo pocket with a button closure for safe storage."
                    },
                    {
                        de: "Unterarmtaschen: Zwei flach aufgesetzte Taschen an den Oberschenkeln mit verdecktem RV-Eingriff, ideal für zusätzlichen Stauraum.",
                        en: "Thigh zipper pockets: Flat thigh pockets with concealed zippers for extra storage space."
                    },
                    {
                        de: "Zwei Protektortaschen: Ergonomisch vorgeformte Taschen für den Einschub von Knie-Protektoren. Mit verdecktem Reißverschluss-Einschub von oben für einen sicheren Sitz der Protektoren.",
                        en: "2 knee protector pockets: Ergonomically pre-shaped with concealed top-entry zippers to hold knee pads securely in place."
                    },
                    {
                        de: "Schlaufen für Ausrüstung: Schlingen aus Gummikordel an den Beinabschlüssen zur Befestigung von zusätzlicher Ausrüstung oder Schutzbekleidung.",
                        en: "Gear loops: Elastic loops at the leg cuffs for attaching additional gear or protective clothing."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext title optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Kampfanzug KBS SK Hose",
            en: "Combat Suit KBS SK Pants"
        },
        shortDescription: {
            de: "Die Kampfhose ist sowohl Teil der Bekleidungskomponenten des „Infanterist der Zukunft - Erweitertes System“ IdZ-ES als auch des Konzeptes „Kampfbekleidungssatz Streitkräfte“ KBS SK. Sie wird in Verbindung mit der Kampfjacke, mit der Kampfjacke, lang oder dem Combat-Shirt SK getragen. Die Hose wird in den Varianten 5 Farben-Tarndruck, 3 Farben-Tarndruck und Multitarndruck mit Vektorenschutzausrüstung gefertigt.",
            en: "The combat pants are part of the clothing system of the 'Future Soldier – Extended System' (IdZ-ES) as well as the 'Combat Clothing Set Armed Forces' (KBS SK) concept. They are worn in combination with the combat jacket, the long combat jacket, or the Combat Shirt SK. The trousers are available in 5-color camouflage, 3-color camouflage, and multi-camouflage versions with vector protection equipment."
        },
        category: {
            de: "Hosen",
            en: "Pants"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            kbsHoseFront.src,
            kbsHoseSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Körperferner Schnitt: Die Hose ist körpernah geschnitten für eine optimale Passform.",
                        en: "Athletic fit: Designed close to the body for optimal fit and movement."
                    },
                    {
                        de: "Bundfalte: Je eine Bundfalte auf jeder Seite, für zusätzlichen Bewegungsraum.",
                        en: "Waist pleats: One on each side to allow for greater freedom of movement."
                    },
                    {
                        de: "Reißverschluss: Vorderer Reißverschluss (RV) in der Mitte (VM) für einfaches An- und Ausziehen.",
                        en: "Zipper: Front center zipper for easy dressing and undressing."
                    },
                    {
                        de: "Gürtelschlaufen: 8 Gürtelschlaufen, geeignet für Gürtel mit einer Breite von ≤ 6,0 cm.",
                        en: "Belt loops: 8 loops suitable for belts up to 6.0 cm wide."
                    },
                    {
                        de: "Weitenregulierung: Verstellbarkeit der Taille durch im Bund integriertes Knopflochgummi.",
                        en: "Adjustable waistband: Integrated buttonhole elastic for a custom fit."
                    },
                    {
                        de: "Bund mit Gurtbandschlaufen: Zur Anbringung von Hosenträgern gemäß TL 8440-0064 ASD-Nr. 37129A, auf Höhe der Seitennaht.",
                        en: "Waistband with webbing loops: For attaching suspenders according to TL 8440-0064 ASD-No. 37129A, located at side seams."
                    },
                    {
                        de: "Gurtbandtunnel: Tunnel zur Komprimierung der befüllten Blasebalgtaschen am Oberschenkel.",
                        en: "Compression tunnels: For tightening filled cargo pockets at the thigh."
                    },
                    {
                        de: "Abriebschutz: Hosensaum an der Bein-Innenseite mit zusätzlichem Abriebschutz.",
                        en: "Abrasion protection: Extra reinforcement on the inner leg hem."
                    },
                    {
                        de: "Gamasche: Innensaum mit flammhemmender Gamasche aus Netzgewebe, formgerecht und regulär gewirkt.",
                        en: "Integrated gaiter: Made of flame-retardant mesh, ergonomically shaped and tightly woven."
                    },
                    {
                        de: "Weitenregulierung der Gamasche: Gummikordel zur Verstellung des Gamaschensaums.",
                        en: "Adjustable gaiter hem: Elastic cord allows customized adjustment."
                    },
                    {
                        de: "Haken am Gamaschensaum: Zur Fixierung der Gamasche am Schnürsenkel des Kampfstiefels.",
                        en: "Lace hook: Allows fixing the gaiter to boot laces for a secure fit."
                    },
                    {
                        de: "Belüftungsöffnungen: In Kniehöhe, hinterlegt mit flammhemmendem Netzeinsatz, formgerecht und regulär gewirkt, mit Zwei-Wege-Reißverschluss in O-Form verschließbar.",
                        en: "Ventilation: Located at knee level with flame-retardant mesh lining, closable via O-shaped two-way zipper."
                    },
                    {
                        de: "Geräuschminderung: Kurze Reißverschluss-Schieber an der gesamten Hose und Reißverschluss-Garagen an den Enden der Belüftungsöffnungen zur Reduzierung der Geräuschentwicklung.",
                        en: "Noise reduction: Short zipper pulls and zipper garages help minimize noise during movement."
                    }
                ]
            },
            {
                title: {
                    de: "Taschen",
                    en: "Pockets"
                },
                content: [
                    {
                        de: "2 Flügeltaschen: Seitlicher Eingriff an den Vorderseiten.",
                        en: "2 wing pockets: Side-access front pockets for easy reach."
                    },
                    {
                        de: "2 Blasebalgtaschen: Aus gedoppeltem Gewebe, an der Seitennaht in Oberschenkelhöhe, mit verstärkten, beschichteten Taschenböden. Taschenklappen mit verdecktem Knopfverschluss, Kordelzug und Kordelstopper zum Schließen der Taschenbeutel.",
                        en: "2 cargo bellows pockets: Double-layer fabric with reinforced, coated bottoms; concealed button flaps with drawcord and stoppers for secure closure."
                    },
                    {
                        de: "1 Messertasche: Innerhalb der rechten Blasebalgtasche, mit Knopfverschluss.",
                        en: "1 knife pocket: Integrated inside the right cargo pocket, secured with a button closure."
                    },
                    {
                        de: "2 Protektortaschen: Flammfest und abriebfest, ergonomisch vorgeformt zum Einschub von Knie-Protektoren. Mit verdecktem Reißverschluss-Einschub von oben.",
                        en: "2 protector pockets: Flame and abrasion resistant, ergonomically shaped for inserting knee protectors via concealed top zipper entry."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext title optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Kälteschutz Unterziehhose",
            en: "Cold Weather Insulated Undershorts"
        },
        shortDescription: {
            de: "Die Unterziehhose, Kälteschutz dient dem speziellen Kälteschutz der Soldatinnen und Soldaten und ist ein ergänzendes zusätzliches Teil der Kampfbekleidung. Stepphose mit angeschnittenem Nierenschutz, hinten und vorne Vorrichtung zum Einhängen in die Hosenträger der Nässeschutzhose, Reißverschlussschlitz, ohne Seitennaht, Druckknopfverschluss am Bund, seitliche Taschendurchgriffe mit Reißverschlüssen, Verstellmöglichkeit am Bund mit Kordelstopper, Beinreißverschlüsse. Farbe: oliv; 70 % Polyamid /30 % Polyester",
            en: "The cold weather undershorts provide additional thermal protection for soldiers and are a supplementary part of the combat clothing system. These quilted pants feature an integrated kidney protector, front and back attachment points for suspender integration with wet-weather trousers, a front zipper fly, no side seams, snap button waistband closure, zippered side pocket accesses, adjustable waistband with cord stopper, and leg zippers. Color: olive; 70% polyamide / 30% polyester."
        },
        category: {
            de: "Hosen",
            en: "Pants"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            ksHoseFront.src,
            ksHoseSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Hochwertige Isolation: Gefertigt aus modernen, wärmeisolierenden Materialien wie Climashield® oder ähnlichen synthetischen Fasern, die auch in extrem kalten Temperaturen zuverlässig wärmen.",
                        en: "High-performance insulation: Made from modern thermal materials like Climashield® or similar synthetic fibers that reliably retain warmth even in extremely cold temperatures."
                    },
                    {
                        de: "Atmungsaktiv & Feuchtigkeitsableitend: Das Material transportiert Feuchtigkeit vom Körper weg, sodass der Träger trocken und warm bleibt.",
                        en: "Breathable & moisture-wicking: The material draws moisture away from the body to keep the wearer dry and warm."
                    },
                    {
                        de: "Winddicht: Die Außenschicht schützt vor kaltem Wind und verbessert die Wärmeleistung.",
                        en: "Windproof: The outer layer protects against cold wind and enhances overall thermal performance."
                    },
                    {
                        de: "Geringes Gewicht: Trotz hoher Wärmeleistung bleibt die Jacke leicht und trägt nicht auf.",
                        en: "Lightweight: Despite its high insulation, the garment remains lightweight and non-bulky."
                    },
                    {
                        de: "Kompakt verstaubar: Lässt sich klein zusammenpacken, ideal für den modularen Einsatz mit anderen Bundeswehr-Bekleidungsstücken.",
                        en: "Compact storage: Easily packable, ideal for modular use with other Bundeswehr clothing layers."
                    },
                    {
                        de: "Unterziehfunktion: Entwickelt als Midlayer für das Zwiebelprinzip, kann aber auch eigenständig getragen werden.",
                        en: "Midlayer function: Designed as an insulating midlayer for layering systems but can also be worn standalone."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext title optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Tropentarn Feldbluse",
            en: "Tropical Camouflage Field Shirt"
        },
        shortDescription: {
            de: "Die Feldbluse Tropentarn nach Bundeswehr TL überzeugt durch ihre Funktionalität, Strapazierfähigkeit und hohen Tragekomfort und ist ideal für heiße Einsatzgebiete und Outdoor-Aktivitäten.",
            en: "The tropical camouflage field shirt, made according to Bundeswehr technical specifications (TL), impresses with its functionality, durability, and high wearing comfort, making it ideal for hot environments and outdoor activities."
        },
        category: {
            de: "Hemden/Blusen",
            en: "Shirts/Blouses"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            feldbluseTropentarnFront.src,
            feldbluseTropentarnSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Original Bundeswehr Feldbluse nach Technischer Lieferbedingung (TL).",
                        en: "Original Bundeswehr field shirt manufactured according to official technical specifications (TL)."
                    },
                    {
                        de: "Tropentarn-Muster für optimale Tarnung in ariden und trockenen Einsatzgebieten.",
                        en: "Tropical camouflage pattern provides optimal concealment in arid and dry environments."
                    },
                    {
                        de: "Leichtes, atmungsaktives Material für maximalen Tragekomfort bei hohen Temperaturen.",
                        en: "Lightweight, breathable fabric ensures maximum comfort in high-temperature conditions."
                    },
                    {
                        de: "Hohe Strapazierfähigkeit dank robustem Mischgewebe.",
                        en: "High durability thanks to robust blended fabric construction."
                    },
                    {
                        de: "Hochwertige Baumwoll-Polyester-Mischung für hohe Reißfestigkeit und schnelles Trocknen.",
                        en: "Premium cotton-polyester blend offers excellent tear resistance and quick-drying properties."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Wüstentarn Hemd Britische Armee",
            en: "Desert Camouflage Shirt British Army"
        },
        shortDescription: {
            de: "Britische Armee Feldjacke Combat Hemd Tropical Einsatzjacke - geknöpftes Hemd, das atmungsaktiv, feuchtigkeitsabweisend und sehr leicht.",
            en: "British Army combat shirt with desert camouflage – a button-up shirt that is breathable, moisture-resistant, and extremely lightweight. Ideal for tropical deployments and hot climates."
        },
        category: {
            de: "Hemden/Blusen",
            en: "Shirts/Blouses"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            wuestenTarnhemdFront.src,
            wuestenTarnhemdSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "2 schräg aufgesetzte Brusttaschen zum Knöpfenmit praktischen Stiftehaltern innen",
                        en: "2 slanted button-up chest pockets with practical internal pen holders"
                    },
                    {
                        de: "100% Baumwolle",
                        en: "100% cotton"
                    },
                    {
                        de: "Knopfleiste an Front",
                        en: "Full-length front button placket"
                    },
                    {
                        de: "verstellbarer Ärmelabschluss zum Knöpfen",
                        en: "Adjustable button cuffs"
                    },
                    {
                        de: "geknöpfte Rangschlaufenaufnahme",
                        en: "Buttoned epaulet mount"
                    },
                    {
                        de: "alle Knöpfe mit Stoffband angenäht",
                        en: "All buttons securely sewn with fabric tape"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Bordhemd, flammhemmend mit Vektorenschutz",
            en: "Shipboard Shirt, Flame-Resistant with Vector Protection"
        },
        shortDescription: {
            de: "Das Bordhemd Tropen ist Bestandteil des Bord- und Gefechtsanzuges und wird in tropischen und subtropischen Klimabereichen getragen. Der Warencharakter ist leicht und luftdurchlässig, flammhemmend und antistatisch. Hemd mit Kragen, 7 Schließknöpfen, 2 aufgesetzten Brusttaschen sowie Patten mit Knopf und Knopfloch, Bleistifttasche in der linken Brusttasche, Schulterpasse, Schulterklappen und Manschetten mit einer eingelegten Ärmelfalte, Nationalitätsabzeichen auf beiden Ärmeln und Vorrichtung für Namensbandanbringung. Zur Vektorenschutzausrüstung: Die Bundeswehrbekleidung mit Vektorenschutzausrüstung ist mit dem Wirkstoff Permethrin (m-Phenoxybenzyl-(3-(2,2-dichlorvinyl)-2-dimethylcyclopropan)carboxylat, CAS-Nr. 52645-53-1, Isomerenverhältnis cis : trans = 25 : 75) imprägniert.",
            en: "The tropical shipboard shirt is part of the Bundeswehr’s shipboard and combat uniform and is worn in tropical and subtropical climates. It is lightweight, breathable, flame-resistant, and antistatic. Features include a collar, 7 closure buttons, 2 sewn-on chest pockets with flaps and buttonholes, a pencil pocket inside the left chest pocket, shoulder yoke, epaulets, cuffs with pleated sleeves, nationality insignia on both sleeves, and a name tape attachment area. About the vector protection: Bundeswehr garments with vector protection are impregnated with the active agent Permethrin (m-Phenoxybenzyl-(3-(2,2-dichlorvinyl)-2-dimethylcyclopropan)carboxylate, CAS No. 52645-53-1, isomer ratio cis:trans = 25:75)."
        },
        category: {
            de: "Hemden/Blusen",
            en: "Shirts/Blouses"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            bordhemdFront.src,
            bordhemdSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Mit Kragen",
                        en: "With collar"
                    },
                    {
                        de: "7 Schließknöpfe",
                        en: "7 closure buttons"
                    },
                    {
                        de: "2 aufgesetzte Brusttaschen",
                        en: "2 sewn-on chest pockets"
                    },
                    {
                        de: "Patten mit Knopf und Knopfloch",
                        en: "Flaps with button and buttonhole"
                    },
                    {
                        de: "Bleistifttasche in der linken Brusttasche",
                        en: "Pencil pocket inside the left chest pocket"
                    },
                    {
                        de: "Schulterpasse",
                        en: "Shoulder yoke"
                    },
                    {
                        de: "Schulterklappen",
                        en: "Epaulets"
                    },
                    {
                        de: "Manschetten mit eingelegter Ärmelfalte",
                        en: "Cuffs with integrated sleeve pleat"
                    },
                    {
                        de: "Nationalitätsabzeichen auf beiden Ärmeln",
                        en: "Nationality insignia on both sleeves"
                    },
                    {
                        de: "Vorrichtung für Namensbandanbringung",
                        en: "Mounting area for name tape"
                    },
                    {
                        de: "49 % Viskose FR / 48 % Aramid / 3 % antistatische Stapelfaser",
                        en: "49% viscose FR / 48% aramid / 3% antistatic staple fiber"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Feldmütze Tarndruck",
            en: "Field Cap Camouflage Print"
        },
        shortDescription: {
            de: "Teil der Feldbekleidung, Tarndruck. Mütze mit ovalem Mützenboden, zwei Seitenteilen mit aufgesteppten Klappenteilen und Lüftungsösen und gestepptem hochklappbarem Mützenschirm. 65 % Baumwolle/35 % Polyester",
            en: "Part of the field uniform with camouflage print. Cap with oval crown, two side panels with attached fold-down flaps and ventilation eyelets, and a quilted, foldable visor. 65% cotton / 35% polyester."
        },
        category: {
            de: "Kopfbedeckungen",
            en: "Headwear"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            feldMuetzeFront.src,
            feldMuetzeSeite.src
        ],
        lists: [],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Krempenhut, Sommer",
            en: "Brim Hat, Summer"
        },
        shortDescription: {
            de: "Der Krempenhut, Sommer wird von Damen und Herren im täglichen Dienstbetrieb getragen. Farbvarianten: beige, Tarndruck, oliv, schwarz. Material: Baumwolle, Polyester.",
            en: "The brim hat for summer is worn by both men and women during everyday service. Available in beige, camouflage, olive, and black. Made from cotton and polyester."
        },
        category: {
            de: "Kopfbedeckungen",
            en: "Headwear"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            krempenhutFlecktarnFront.src,
            krempenhutFlecktarnSeite.src
        ],
        lists: [],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Bundeswehr Strickpullover",
            en: "Bundeswehr Knit Sweater"
        },
        shortDescription: {
            de: "Warmer Pullover in bewährter Qualität nach TL der Bundeswehr. Stoffbesätze auf den Schultern und Ärmeln verstärken beanspruchte Stellen. Die Schulterklappen sind selbsthaftend mit einem Klettverschluss. Eine aufgesetzte Brust- und Bleistifttasche bieten genug Stauraum. Die beiden Oberarme des Wollpullovers ziert je ein Nationalitätsabzeichen.",
            en: "Warm sweater in proven Bundeswehr TL quality. Reinforcements on shoulders and sleeves protect high-wear areas. The epaulettes are self-fastening with hook-and-loop closures. A sewn-on chest pocket and pencil pocket offer practical storage. Both upper arms feature national insignia patches."
        },
        category: {
            de: "Pullover",
            en: "Pullovers"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            bwPulloverFront.src,
            bwPulloverSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Rundhalsausschnitt",
                        en: "Crew neck"
                    },
                    {
                        de: "Stoffbesätze auf Schultern und Ärmeln",
                        en: "Fabric reinforcements on shoulders and sleeves"
                    },
                    {
                        de: "selbsthaftende Schulterklappen mit Klettverschluss",
                        en: "Self-fastening epaulettes with hook-and-loop closure"
                    },
                    {
                        de: "aufgesetzte Brust- und Bleistifttasche",
                        en: "Sewn-on chest pocket and integrated pencil pocket"
                    },
                    {
                        de: "Nationalitätsabzeichen auf beiden Oberarmen",
                        en: "National insignia on both upper arms"
                    },
                    {
                        de: "Wollgarn: 80% Schurwolle, 20% Polyamid. Besatzstoff: 70% Baumwolle, 30% Polyester",
                        en: "Wool yarn: 80% virgin wool, 20% polyamide. Reinforcement fabric: 70% cotton, 30% polyester"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Monteurkombination Sommer und Variabel",
            en: "Mechanic's Coverall – Summer and Versatile"
        },
        shortDescription: {
            de: "Funktionsbekleidung für Instandsetzungs- und Einsatzaufträge, für Arbeits-, Dienst- und Kampfbekleidung. Einteilige Kombination mit Umlegekragen und vorderem durchgehenden Zweiwege-Reißverschluss (RV) bis in die Kragenspitzen, Schulterpasse an Vorder- und Rückenteil, Taillentunnel innen mit Kordel und Kordelstopper, 2-teiliger Ärmel, Bein- und Ärmelschlitz mit RV und Laschen mit Haftverschluss zur Weitenregulierung; die RV-Schieber liegen im geschlossenen Zustand verdeckt unter der Lasche, alle RV ohne Paspelabdeckung eingenäht, je zwei Entlüftungslöcher unter den Achselhöhlen im Vorderteil, Rückenteil, Oberärmel und Unterärmel sowie je 3 in der Hinterhosen-schrittspitze als Rundloch eingearbeitet, Reflexstreifen auf Ärmel und Beinen, Schulterklappen mit Haftverschluss, Nationalitätsabzeichen und zwei Brusttaschen mit RV und nach innen aufgesteppte Blasebalgtaschenbeutel; in der linken Brusttasche ist zusätzlich eine Bleistifttasche mit 3 Köchern auf den Blasebalgtaschenbeutel aufgesteppt, zwei seitliche RV-Taschen mit innenliegenden Taschenbeuteln, zwei seitliche Unterschenkeltaschen mit RV und innenliegendem Taschenbeutel; in der rechten Unterschenkeltasche ist eine Köchertasche mit 3 Fächern auf den Taschenbeutel aufgesteppt.",
            en: "Functional garment for maintenance and operational duties, suitable as work, service, or combat wear. One-piece coverall with turn-down collar and full-length two-way front zipper up to the collar tips. Features include shoulder yokes on front and back, internal waist tunnel with drawcord and stoppers, two-piece sleeves, leg and sleeve zippers with hook-and-loop flaps for width adjustment (zippers hidden under flap when closed), stitched-in zippers without piping, ventilation holes (2 each under armpits, upper/lower sleeves, front and back, plus 3 in the rear crotch seam). Reflective strips on sleeves and legs, hook-and-loop epaulets, national insignia, two chest zip pockets with internal bellows pockets—left pocket also has pencil organizer with 3 compartments. Two side zip pockets with internal pouches and two zippered lower leg pockets; right leg pocket includes an additional 3-slot tool pouch."
        },
        category: {
            de: "Kombinationen",
            en: "Combinations"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            monteurkombiFront.src,
            monteurkombiSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "100% Baumwolle, Steingrau-oliv",
                        en: "100% cotton, stone grey-olive"
                    },
                    {
                        de: "Umlegekragen",
                        en: "Turn-down collar"
                    },
                    {
                        de: "Vorderer durchgehender Zweiwege-Reißverschluss (RV) bis in die Kragenspitzen",
                        en: "Full-length two-way front zipper up to the collar tips"
                    },
                    {
                        de: "Schulterpasse an Vorder- und Rückenteil",
                        en: "Shoulder yoke on front and back"
                    },
                    {
                        de: "Taillentunnel innen mit Kordel und Kordelstopper",
                        en: "Internal waist tunnel with drawcord and stopper"
                    },
                    {
                        de: "2-teiliger Ärmel",
                        en: "Two-piece sleeve design"
                    },
                    {
                        de: "Reflexstreifen auf Ärmel und Beinen",
                        en: "Reflective stripes on sleeves and legs"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Kampftragetasche 100 L",
            en: "Combat Carry Bag 100 L"
        },
        shortDescription: {
            de: "Die Bundeswehr Kampftragetasche ist eine robuste, vielseitige Einsatztasche für Soldaten, die optimal für den Transport von persönlicher Ausrüstung konzipiert wurde. Hergestellt aus widerstandsfähigem, wasserabweisendem Material, bietet sie ausreichend Stauraum und eine durchdachte Innenaufteilung. Dank MOLLE-Befestigungssystem kann sie flexibel an anderer Ausrüstung befestigt werden. Ein gepolsterter Schultergurt und verstärkte Tragegriffe sorgen für hohen Tragekomfort, auch bei schwerem Inhalt.",
            en: "The Bundeswehr combat carry bag is a durable, versatile deployment bag designed specifically for transporting personal gear. Made from rugged, water-repellent material, it offers generous storage space and a thoughtfully organized interior. The MOLLE attachment system allows flexible mounting to other gear. A padded shoulder strap and reinforced carrying handles ensure high comfort, even when carrying heavy loads."
        },
        category: {
            de: "Accessoires",
            en: "Accessories"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            kampftragetasche.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Steingrau-oliv",
                        en: "Stone grey-olive"
                    },
                    {
                        de: "Robuste Einsatztasche für den Transport militärischer Ausrüstung.",
                        en: "Sturdy deployment bag for transporting military gear."
                    },
                    {
                        de: "Strapazierfähiges, wasserabweisendes Material für den Einsatz unter extremen Bedingungen.",
                        en: "Durable, water-repellent material suitable for extreme conditions."
                    },
                    {
                        de: "Geräumiges Hauptfach mit durchdachter Innenaufteilung zur geordneten Verstauung.",
                        en: "Spacious main compartment with a well-organized interior layout."
                    },
                    {
                        de: "Zusätzliche Außentaschen für schnellen Zugriff auf wichtige Gegenstände.",
                        en: "Additional outer pockets for quick access to essential items."
                    },
                    {
                        de: "MOLLE-Befestigungssystem für flexible Erweiterung und Anbringung an Rucksack oder Weste.",
                        en: "MOLLE attachment system for flexible expansion and mounting to backpacks or vests."
                    },
                    {
                        de: "Verstärkte Tragegriffe für hohe Belastbarkeit und sicheres Tragen.",
                        en: "Reinforced carrying handles for durability and secure handling."
                    },
                    {
                        de: "Modulares Design: Erweiterbar mit weiteren MOLLE-kompatiblen Taschen.",
                        en: "Modular design: expandable with additional MOLLE-compatible pouches."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Trageaussattung - Granatentaschen - klein",
            en: "Carrying Equipment – Grenade Pouch – Small"
        },
        shortDescription: {
            de: "Die Granatentasche Universal klein gehört zur Trageausstattung der Bundeswehr. Die integrierten Klettbänder lassen sich in Umfang, Höhe und Länge an die jeweilige 50 mm-Granate anpassen, sodass ein stabiler Transport gewährleistet wird.",
            en: "The universal small grenade pouch is part of the Bundeswehr's standard carrying equipment. Integrated hook-and-loop straps allow adjustments in circumference, height, and length to securely hold 50 mm grenades during transport."
        },
        category: {
            de: "Accessoires",
            en: "Accessories"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            grantentasche.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Flecktarn oder steingrau",
                        en: "Flecktarn camouflage or stone grey"
                    },
                    {
                        de: "100% Polyester",
                        en: "100% polyester"
                    },
                    {
                        de: "klein: Durchmesser 50-75 mm, Länge von bis zu 160 mm",
                        en: "Small: diameter 50–75 mm, length up to 160 mm"
                    },
                    {
                        de: "groß: Durchmesser 60-90 mm, Länge von bis zu 160 mm",
                        en: "Large: diameter 60–90 mm, length up to 160 mm"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Nässeschutzgamasche Tarndruck",
            en: "Waterproof Gaiters Camouflage"
        },
        shortDescription: {
            de: "Die Nässeschutzgamaschen dienen der Gebirgstruppe und den Kradfahrern als zusätzlicher Nässeschutz im Beinbereich. Die Nässeschutzgamasche, Tarndruck, wird mit dem vorne angebrachten Haken in die Schnürsenkel des Schuhwerkes eingehängt, am Unterschenkel und Steg durch Schnürband befestigt und durch Reißverschluss / Textiler Haftverschluss geschlossen. Die Nässeschutzgamaschen sind in drei verschiedenen Längen mit jeweils zwei Weiten konzipiert. Nässeschutzgamaschen sind spezielle Überzüge für den unteren Beinbereich, die vor Nässe, Schmutz und Kälte schützen. Sie werden meist über Stiefel oder Schuhe getragen und mit elastischen Bändern, Klettverschlüssen oder Reißverschlüssen befestigt.",
            en: "These waterproof gaiters are used by mountain troops and motorcycle personnel as additional protection against moisture in the lower leg area. The camouflage-patterned gaiters are hooked into boot laces using a front hook, secured at the lower leg and instep with drawcords, and closed with a zipper and hook-and-loop fastener. They are available in three lengths, each with two width options. Gaiters are designed to cover the lower legs, protecting against moisture, dirt, and cold. Typically worn over boots or shoes, they are secured using elastic bands, Velcro, or zippers."
        },
        category: {
            de: "Accessoires",
            en: "Accessories"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            gamasche.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Wasserdicht & atmungsaktiv: Hergestellt aus wetterfesten Materialien wie Gore-Tex oder PU-beschichtetem Nylon.",
                        en: "Waterproof & breathable: Made from weather-resistant materials such as Gore-Tex or PU-coated nylon."
                    },
                    {
                        de: "Schutz vor Schmutz & Schnee: Halten Feuchtigkeit, Schlamm, Schnee und Geröll vom Schuhwerk fern.",
                        en: "Protection from dirt & snow: Keeps moisture, mud, snow, and debris away from footwear."
                    },
                    {
                        de: "Verschlusssysteme: Reißverschlüsse, Klettverschlüsse oder Druckknöpfe für einfaches An- und Ausziehen.",
                        en: "Closure systems: Zippers, Velcro, or snap fasteners allow for easy on and off."
                    },
                    {
                        de: "Elastische Bündchen & Haken: Sorgt für sicheren Sitz und verhindert das Eindringen von Wasser.",
                        en: "Elastic cuffs & hooks: Ensure a secure fit and prevent water ingress."
                    },
                    {
                        de: "Einsatzgebiete: Wandern, Trekking, Militär, Polizei und Outdoor-Sportarten.",
                        en: "Use cases: Hiking, trekking, military, police, and outdoor sports."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Rucksacküberzug",
            en: "Backpack Cover"
        },
        shortDescription: {
            de: "Rucksacküberzug für Rucksack 110 Liter und 50l. Material: Mittelfeiner Twill mit zusätzlicher Fluorcarbonausrüstung, Tarndruck (5-Farben, 3-Farben) Mit Bandschlaufen und Befestigungskordeln 65% Baumwolle, 35% Polyester + Fluorcarbonausrüstung Bandschlaufe zur Befestigung und Zugkordel zur passgenauen Abdeckung des Rucksackes Beschreibung: Der Rucksacküberzug dient dem Schutz vor optischer Aufklärung unter den jeweiligen klimatischen und geographischen Bedingungen und somit der Überlebensfähigkeit des Soldaten*in.",
            en: "Backpack cover for 110 L and 50 L rucksacks. Made of medium-weight twill with additional fluorocarbon treatment and camouflage print (3-color, 5-color). Includes strap loops and fastening cords. Material: 65% cotton / 35% polyester with fluorocarbon coating. Designed for secure attachment and custom fit using drawcord and loops. Purpose: Protects against visual detection under various climatic and geographic conditions, supporting the soldier’s operational survival."
        },
        category: {
            de: "Accessoires",
            en: "Accessories"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            rucksackUeberzug.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "An den 4 Seiten sind jeweils 2 Stellen Befestigungskordeln in den Längen 70cm bzw. 45cm in die vorhandenen Bandschlaufen eingeknüpft, um den Überzug am jeweiligen Rucksack befestigen zu können.",
                        en: "Two fastening cords (70 cm and 45 cm) are attached on all four sides via loops, allowing secure attachment to the corresponding backpack."
                    },
                    {
                        de: "Die Spannkordel ist in einem umlaufenden Tunnelzug geführt. Zum Spannen wird die Kordel oben bzw. unten durch Öffnungen im Tunnelzug nach Außen geführt und oben mit einem Kordelstopper (Bundeswehrausführung) bzw. unten durch Verknoten fixiert.",
                        en: "The drawcord runs through a continuous tunnel. It can be tightened by pulling the cord through top or bottom openings and securing it with a Bundeswehr-style cord stopper or by knotting."
                    },
                    {
                        de: "Der Rucksacküberzug ist in 2 Größen (für Rucksack 110 Ltr. und Kampfrucksack (50 Ltr.)) verfügbar und jeweils mit dem 3-Farb-Tarndruck der Bw gemäß TL 8305-0297, dem 5-Farb-Tarndruck der Bw gemäß TL 8305-0290 (nur für Rucksack 110 Ltr.) und dem Schnee-Tarndruck (nur für Kampfrucksack 50 Ltr.) versehen. Weiterhin verfügt er über ein(e) eingezogene(s) Kordel oder Gummiband.",
                        en: "Available in two sizes (for 110 L and 50 L packs) and equipped with Bundeswehr camouflage patterns: 3-color (TL 8305-0297), 5-color (TL 8305-0290, only 110 L), and snow camo (only 50 L). Includes a sewn-in drawcord or elastic band."
                    },
                    {
                        de: "Es sind keine Außentaschen oder dergleichen angebracht, Material wasserabweisend und strapazierfähig, schadstofffrei und recyclefähig.",
                        en: "No external pockets. Material is water-repellent, durable, toxin-free, and recyclable."
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
];

const schutzwandSchraeg = new Proxy({"src":"/custom-folder/schutzwand_schraeg.D7efcrPx.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/schutzwand_schraeg.jpg";
							}
							
							return target[name];
						}
					});

const schutzwandFront = new Proxy({"src":"/custom-folder/schutzwand_front.C_V45FWn.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/schutzwand_front.jpg";
							}
							
							return target[name];
						}
					});

const schutzwandVerschluss = new Proxy({"src":"/custom-folder/schutzwand_verschluss.D91v6whb.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/schutzwand_verschluss.jpg";
							}
							
							return target[name];
						}
					});

const schutzwandProducts = [
    {
        title: {
            de: "Transportwand für Rollcontainer, 720 x 815 mm",
            en: "Transport Wall for Roll Containers, 720 x 815 mm"
        },
        shortDescription: {
            de: `Unsere patentierte Schutzwand für Rollbehälter erleichtert den Transport Ihrer Ware. Außerdem wird durch die Wiederverwendung Plastikmüll gespart. Alternativ in unterschiedlichen Farben erhältlich. Außerdem für den individuellen Touch, kann das eigene Logo platziert werden. Patentiertes Produkt zur Warensicherung im Rollbehälter. Das 6-Punkt-Clicksystem ermöglicht eine einfache Befestigung an den Seitengittern.`,
            en: `Our patented protective wall for roll containers makes transporting your goods easier and more secure. By reusing the product, plastic waste is significantly reduced. Available in various colors and customizable with your company logo. The 6-point click system allows for quick and easy attachment to the container’s side panels — a patented solution for securing goods in transport.`
        },
        category: {
            de: "Schutzwände",
            en: "Protective Walls"
        },
        tag: {
            de: "Wahlweise mit Logodruck & verschiedenen Farben",
            en: "Optionally with logo print & different colors"
        },
        images: [
            schutzwandSchraeg.src,
            schutzwandFront.src,
            schutzwandVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                        en: "Eliminates the need for environmentally harmful stretch film"
                    },
                    {
                        de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                        en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                    },
                    {
                        de: "Vorspannung justierbar",
                        en: "Adjustable tensioning"
                    },
                    {
                        de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                        en: "Compatible with automated goods loading systems for roll containers"
                    },
                    {
                        de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                        en: "Can be folded or stored on the side panels when not in use"
                    },
                    {
                        de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                        en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                    },
                    {
                        de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                        en: "Outer panels available in custom colors or transparent"
                    },
                    {
                        de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo possible"
                    },
                    {
                        de: "Zusätzliche Verstärkungsstäbe",
                        en: "Optional reinforcement rods for extra durability"
                    },
                    {
                        de: "Dokumententasche",
                        en: "Integrated document pocket"
                    },
                    {
                        de: "Diebstahlschutz (Sicherungskeile)",
                        en: "Anti-theft protection (locking wedges)"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Transportwand für Rollcontainer, 724 x 815 mm",
            en: "Transport Wall for Roll Containers, 724 x 815 mm"
        },
        shortDescription: {
            de: `Unsere patentierte Schutzwand für Rollbehälter erleichtert den Transport Ihrer Ware. Außerdem wird durch die Wiederverwendung Plastikmüll gespart. Alternativ in unterschiedlichen Farben erhältlich. Außerdem für den individuellen Touch, kann das eigene Logo platziert werden. Patentiertes Produkt zur Warensicherung im Rollbehälter. Das 6-Punkt-Clicksystem ermöglicht eine einfache Befestigung an den Seitengittern.`,
            en: `Our patented protective wall for roll containers makes transporting your goods easier and more secure. By reusing the product, plastic waste is significantly reduced. Available in various colors and customizable with your company logo. The 6-point click system allows for quick and easy attachment to the container’s side panels — a patented solution for securing goods in transport.`
        },
        category: {
            de: "Schutzwände",
            en: "Protective Walls"
        },
        tag: {
            de: "Wahlweise mit Logodruck & verschiedenen Farben",
            en: "Optionally with logo print & different colors"
        },
        images: [
            schutzwandSchraeg.src,
            schutzwandFront.src,
            schutzwandVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                        en: "Eliminates the need for environmentally harmful stretch film"
                    },
                    {
                        de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                        en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                    },
                    {
                        de: "Vorspannung justierbar",
                        en: "Adjustable tensioning"
                    },
                    {
                        de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                        en: "Compatible with automated goods loading systems for roll containers"
                    },
                    {
                        de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                        en: "Can be folded or stored on the side panels when not in use"
                    },
                    {
                        de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                        en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                    },
                    {
                        de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                        en: "Outer panels available in custom colors or transparent"
                    },
                    {
                        de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo possible"
                    },
                    {
                        de: "Zusätzliche Verstärkungsstäbe",
                        en: "Optional reinforcement rods for extra durability"
                    },
                    {
                        de: "Dokumententasche",
                        en: "Integrated document pocket"
                    },
                    {
                        de: "Diebstahlschutz (Sicherungskeile)",
                        en: "Anti-theft protection (locking wedges)"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Transportwand für Rollcontainer, 720 x 630 mm",
            en: "Transport Wall for Roll Containers, 720 x 630 mm"
        },
        shortDescription: {
            de: `Unsere patentierte Schutzwand für Rollbehälter erleichtert den Transport Ihrer Ware. Außerdem wird durch die Wiederverwendung Plastikmüll gespart. Alternativ in unterschiedlichen Farben erhältlich. Außerdem für den individuellen Touch, kann das eigene Logo platziert werden. Patentiertes Produkt zur Warensicherung im Rollbehälter. Das 6-Punkt-Clicksystem ermöglicht eine einfache Befestigung an den Seitengittern.`,
            en: `Our patented protective wall for roll containers makes transporting your goods easier and more secure. By reusing the product, plastic waste is significantly reduced. Available in various colors and customizable with your company logo. The 6-point click system allows for quick and easy attachment to the container’s side panels — a patented solution for securing goods in transport.`
        },
        category: {
            de: "Schutzwände",
            en: "Protective Walls"
        },
        tag: {
            de: "Wahlweise mit Logodruck & verschiedenen Farben",
            en: "Optionally with logo print & different colors"
        },
        images: [
            schutzwandSchraeg.src,
            schutzwandFront.src,
            schutzwandVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                        en: "Eliminates the need for environmentally harmful stretch film"
                    },
                    {
                        de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                        en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                    },
                    {
                        de: "Vorspannung justierbar",
                        en: "Adjustable tensioning"
                    },
                    {
                        de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                        en: "Compatible with automated goods loading systems for roll containers"
                    },
                    {
                        de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                        en: "Can be folded or stored on the side panels when not in use"
                    },
                    {
                        de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                        en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                    },
                    {
                        de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                        en: "Outer panels available in custom colors or transparent"
                    },
                    {
                        de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo possible"
                    },
                    {
                        de: "Zusätzliche Verstärkungsstäbe",
                        en: "Optional reinforcement rods for extra durability"
                    },
                    {
                        de: "Dokumententasche",
                        en: "Integrated document pocket"
                    },
                    {
                        de: "Diebstahlschutz (Sicherungskeile)",
                        en: "Anti-theft protection (locking wedges)"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Transportwand für Rollcontainer, 682 x 815 mm",
            en: "Transport Wall for Roll Containers, 682 x 815 mm"
        },
        shortDescription: {
            de: `Unsere patentierte Schutzwand für Rollbehälter erleichtert den Transport Ihrer Ware. Außerdem wird durch die Wiederverwendung Plastikmüll gespart. Alternativ in unterschiedlichen Farben erhältlich. Außerdem für den individuellen Touch, kann das eigene Logo platziert werden. Patentiertes Produkt zur Warensicherung im Rollbehälter. Das 6-Punkt-Clicksystem ermöglicht eine einfache Befestigung an den Seitengittern.`,
            en: `Our patented protective wall for roll containers makes transporting your goods easier and more secure. By reusing the product, plastic waste is significantly reduced. Available in various colors and customizable with your company logo. The 6-point click system allows for quick and easy attachment to the container’s side panels — a patented solution for securing goods in transport.`
        },
        category: {
            de: "Schutzwände",
            en: "Protective Walls"
        },
        tag: {
            de: "Wahlweise mit Logodruck & verschiedenen Farben",
            en: "Optionally with logo print & different colors"
        },
        images: [
            schutzwandSchraeg.src,
            schutzwandFront.src,
            schutzwandVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                        en: "Eliminates the need for environmentally harmful stretch film"
                    },
                    {
                        de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                        en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                    },
                    {
                        de: "Vorspannung justierbar",
                        en: "Adjustable tensioning"
                    },
                    {
                        de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                        en: "Compatible with automated goods loading systems for roll containers"
                    },
                    {
                        de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                        en: "Can be folded or stored on the side panels when not in use"
                    },
                    {
                        de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                        en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                    },
                    {
                        de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                        en: "Outer panels available in custom colors or transparent"
                    },
                    {
                        de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo possible"
                    },
                    {
                        de: "Zusätzliche Verstärkungsstäbe",
                        en: "Optional reinforcement rods for extra durability"
                    },
                    {
                        de: "Dokumententasche",
                        en: "Integrated document pocket"
                    },
                    {
                        de: "Diebstahlschutz (Sicherungskeile)",
                        en: "Anti-theft protection (locking wedges)"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Transportwand für Rollcontainer, Individuelle Maße",
            en: "Transport Wall for Roll Containers, Custom size"
        },
        shortDescription: {
            de: `Unsere patentierte Schutzwand für Rollbehälter erleichtert den Transport Ihrer Ware. Außerdem wird durch die Wiederverwendung Plastikmüll gespart. Alternativ in unterschiedlichen Farben erhältlich. Außerdem für den individuellen Touch, kann das eigene Logo platziert werden. Patentiertes Produkt zur Warensicherung im Rollbehälter. Das 6-Punkt-Clicksystem ermöglicht eine einfache Befestigung an den Seitengittern.`,
            en: `Our patented protective wall for roll containers makes transporting your goods easier and more secure. By reusing the product, plastic waste is significantly reduced. Available in various colors and customizable with your company logo. The 6-point click system allows for quick and easy attachment to the container’s side panels — a patented solution for securing goods in transport.`
        },
        category: {
            de: "Schutzwände",
            en: "Protective Walls"
        },
        tag: {
            de: "Wahlweise mit Logodruck & verschiedenen Farben",
            en: "Optionally with logo print & different colors"
        },
        images: [
            schutzwandSchraeg.src,
            schutzwandFront.src,
            schutzwandVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Verwendung von umweltschädlicher Stretch-Folie entfällt",
                        en: "Eliminates the need for environmentally harmful stretch film"
                    },
                    {
                        de: "Schutzwand wird durch die Kraft elastischer Bänder auf Zug gehalten; somit kein Überspannen der Seitengitter nach innen; Quetschungen empfindlicher Ware daher ausgeschlossen",
                        en: "Held under tension by elastic bands — prevents side grids from bending inward and protects sensitive goods from being crushed"
                    },
                    {
                        de: "Vorspannung justierbar",
                        en: "Adjustable tensioning"
                    },
                    {
                        de: "Kompatibel mit automatisierter Warenbestückung des Rollbehälters",
                        en: "Compatible with automated goods loading systems for roll containers"
                    },
                    {
                        de: "Schutzwände können nach Gebrauch an den Seitengittern verstaut bzw. eingeklappt werden",
                        en: "Can be folded or stored on the side panels when not in use"
                    },
                    {
                        de: "Stabilität: Stabilisierung durch zwei an den Seiten eingenähte Glasfaserstäbe",
                        en: "Stabilized with two integrated fiberglass rods sewn into the sides"
                    },
                    {
                        de: "Außenbahnen in Wunschfarbe oder transparent erhältlich",
                        en: "Outer panels available in custom colors or transparent"
                    },
                    {
                        de: "Personalisierung der Schutzwand mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo possible"
                    },
                    {
                        de: "Zusätzliche Verstärkungsstäbe",
                        en: "Optional reinforcement rods for extra durability"
                    },
                    {
                        de: "Dokumententasche",
                        en: "Integrated document pocket"
                    },
                    {
                        de: "Diebstahlschutz (Sicherungskeile)",
                        en: "Anti-theft protection (locking wedges)"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    }
];

const thermohaubeSchraeg = new Proxy({"src":"/custom-folder/Thermohaube_Staubhaube Schräg.LP_BA3QO.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Thermohaube_Staubhaube Schräg.jpg";
							}
							
							return target[name];
						}
					});

const thermohaubeFront = new Proxy({"src":"/custom-folder/Thermohaube_Staubhaube Frontal.BZM-zc-h.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Thermohaube_Staubhaube Frontal.jpg";
							}
							
							return target[name];
						}
					});

const thermohaubeVerschluss = new Proxy({"src":"/custom-folder/Thermohaube_Staubhaube Verschluss.C8-npv4r.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/Thermohaube_Staubhaube Verschluss.jpg";
							}
							
							return target[name];
						}
					});

const thermohaubeProducts = [
    {
        title: {
            de: "Thermohaube für Rollcontainer, Nutzhöhe 1700mm",
            en: "Thermal Cover for Roll Containers, Usable height 1700mm"
        },
        shortDescription: {
            de: `Die Thermohaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal, ob Hitze, Kälte, Staub uvw. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden. Ideal geeignet für die thermische Isolation von Frischeartikeln, welche mittels Rollbehälter transportiert werden. Verringert das Risiko der Kühlkettenunterbrechung während der Auslieferung.`,
            en: `The thermal cover for roll containers is an innovative solution to protect goods from external influences such as heat, cold, or dust. Optionally available with or without a transparent document pocket. Custom branding with your logo is possible. Ideal for the thermal insulation of perishable goods transported in roll containers, helping to reduce the risk of cold chain interruption during delivery.`
        },
        category: {
            de: "Thermohauben",
            en: "Thermal Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Thermally insulating material (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Document pocket on the front"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height variable (on request)"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front panel with hook-and-loop closure enables easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Post-loading and unloading of goods possible at any time"
                    },
                    {
                        de: "Personalisierung der Thermohaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Thermohaube für Rollcontainer, Nutzhöhe 1450mm",
            en: "Thermal Cover for Roll Containers, Usable height 1450mm"
        },
        shortDescription: {
            de: `Die Thermohaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal, ob Hitze, Kälte, Staub uvw. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden. Ideal geeignet für die thermische Isolation von Frischeartikeln, welche mittels Rollbehälter transportiert werden. Verringert das Risiko der Kühlkettenunterbrechung während der Auslieferung.`,
            en: `The thermal cover for roll containers is an innovative solution to protect goods from external influences such as heat, cold, or dust. Optionally available with or without a transparent document pocket. Custom branding with your logo is possible. Ideal for the thermal insulation of perishable goods transported in roll containers, helping to reduce the risk of cold chain interruption during delivery.`
        },
        category: {
            de: "Thermohauben",
            en: "Thermal Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Thermally insulating material (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Document pocket on the front"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height variable (on request)"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front panel with hook-and-loop closure enables easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Post-loading and unloading of goods possible at any time"
                    },
                    {
                        de: "Personalisierung der Thermohaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Thermohaube für Rollcontainer, variable Nutzhöhe",
            en: "Thermal Cover for Roll Containers, variable height"
        },
        shortDescription: {
            de: `Die Thermohaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal, ob Hitze, Kälte, Staub uvw. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden. Ideal geeignet für die thermische Isolation von Frischeartikeln, welche mittels Rollbehälter transportiert werden. Verringert das Risiko der Kühlkettenunterbrechung während der Auslieferung.`,
            en: `The thermal cover for roll containers is an innovative solution to protect goods from external influences such as heat, cold, or dust. Optionally available with or without a transparent document pocket. Custom branding with your logo is possible. Ideal for the thermal insulation of perishable goods transported in roll containers, helping to reduce the risk of cold chain interruption during delivery.`
        },
        category: {
            de: "Thermohauben",
            en: "Thermal Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Thermally insulating material (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Document pocket on the front"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height variable (on request)"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front panel with hook-and-loop closure enables easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Post-loading and unloading of goods possible at any time"
                    },
                    {
                        de: "Personalisierung der Thermohaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    }
];

const staubhaubeProducts = [
    {
        title: {
            de: "Staubhaube für Rollcontainer, Nutzhöhe 1700mm",
            en: "Dust Cover for Roll Containers, Usable height 1700mm"
        },
        shortDescription: {
            de: `Die Staubhaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal ob Staub, Wind oder Nässe. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden.`,
            en: `The dust cover for roll containers is an innovative solution to protect your goods from external influences such as dust, wind, or moisture. Optionally available with or without a transparent document pocket. Custom branding with your company logo is also possible.`
        },
        category: {
            de: "Staubhauben",
            en: "Dust Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Protective material with thermal insulation (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Transparent document pocket on the front (optional)"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height adjustable on request"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front flap with Velcro closure allows for easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Goods can be loaded and unloaded even after the cover is applied"
                    },
                    {
                        de: "Personalisierung der Staubhaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo available"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Staubhaube für Rollcontainer, Nutzhöhe 1450mm",
            en: "Dust Cover for Roll Containers, Usable height 1450mm"
        },
        shortDescription: {
            de: `Die Staubhaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal ob Staub, Wind oder Nässe. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden.`,
            en: `The dust cover for roll containers is an innovative solution to protect your goods from external influences such as dust, wind, or moisture. Optionally available with or without a transparent document pocket. Custom branding with your company logo is also possible.`
        },
        category: {
            de: "Staubhauben",
            en: "Dust Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Protective material with thermal insulation (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Transparent document pocket on the front (optional)"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height adjustable on request"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front flap with Velcro closure allows for easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Goods can be loaded and unloaded even after the cover is applied"
                    },
                    {
                        de: "Personalisierung der Staubhaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo available"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Staubhaube für Rollcontainer, variable Nutzhöhe",
            en: "Dust Cover for Roll Containers, variable height"
        },
        shortDescription: {
            de: `Die Staubhaube für Rollbehälter ist eine innovative Lösung, um Ihre Ware vor äußeren Einflüssen zu schützen. Egal ob Staub, Wind oder Nässe. Alternativ mit oder ohne transparente Tasche für Dokumente. Auch Ihr eigenes Logo kann auf Wunsch platziert werden.`,
            en: `The dust cover for roll containers is an innovative solution to protect your goods from external influences such as dust, wind, or moisture. Optionally available with or without a transparent document pocket. Custom branding with your company logo is also possible.`
        },
        category: {
            de: "Staubhauben",
            en: "Dust Covers"
        },
        tag: {
            de: "Wahlweise mit Dokumententasche und/oder Logodruck",
            en: "Optionally with document pouch and/or logo print"
        },
        images: [
            thermohaubeSchraeg.src,
            thermohaubeFront.src,
            thermohaubeVerschluss.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Thermisch isolierender Stoff. (lebensmittelgeeignet)",
                        en: "Protective material with thermal insulation (food-safe)"
                    },
                    {
                        de: "Dokumententasche auf der Vorderseite.",
                        en: "Transparent document pocket on the front (optional)"
                    },
                    {
                        de: "Passend für Standard-Rollbehälter 720x815 mm",
                        en: "Fits standard roll containers (720×815 mm)"
                    },
                    {
                        de: "Nutzhöhe variabel (auf Anfrage)",
                        en: "Usable height adjustable on request"
                    },
                    {
                        de: "Nur in Farbe Schwarz gem. Abbildung lieferbar.",
                        en: "Available only in black (as shown)"
                    },
                    {
                        de: "Verschluss der Vorderwand mittels Klettsystem ermöglicht ein einfaches Überstülpen der kompletten Haube.",
                        en: "Front flap with Velcro closure allows for easy covering of the entire container"
                    },
                    {
                        de: "Nachträgliches Be- und Entladen von Ware jederzeit möglich.",
                        en: "Goods can be loaded and unloaded even after the cover is applied"
                    },
                    {
                        de: "Personalisierung der Staubhaube mit Ihrem Kundenlogo",
                        en: "Custom branding with your company logo available"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "Deutscher Richtext set:html",
                en: "English Richtext set:html"
            }
        }
    }
];

const bmiJackeSeite = new Proxy({"src":"/custom-folder/BMI Jacke Seite.BqlcnRqs.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/BMI Jacke Seite.jpg";
							}
							
							return target[name];
						}
					});

const bmiJackeFront = new Proxy({"src":"/custom-folder/BMI Jacke Front.CjGGwCbJ.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/BMI Jacke Front.jpg";
							}
							
							return target[name];
						}
					});

const bmiHoseSeite = new Proxy({"src":"/custom-folder/BMI Hose Seite.DU5awF8w.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/BMI Hose Seite.jpg";
							}
							
							return target[name];
						}
					});

const bmiHoseFront = new Proxy({"src":"/custom-folder/BMI Hose Front.CMPsAIaL.jpg","width":1000,"height":1000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Produkte/BMI Hose Front.jpg";
							}
							
							return target[name];
						}
					});

const officialWearProducts = [
    {
        title: {
            de: "Einsatzjacke mit schnitthemmender Einlage, flammhemmend",
            en: "Operational Jacket with Cut Protection and Flame Resistance"
        },
        shortDescription: {
            de: "Der Einsatzblouson, gefertigt aus dunkelblauem Aramidgewebe, permanent schwer entflammbar und antistatisch, Öl-& Wasserabweisend. 93% Meta-Aramid, 5% Para-Aramid, 2% antistatische Komponente.",
            en: "This operational jacket is made from dark blue aramid fabric that is permanently flame-retardant, antistatic, and resistant to oil and water. Composition: 93% meta-aramid, 5% para-aramid, 2% antistatic fiber."
        },
        category: {
            de: "Jacken",
            en: "Jackets"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            bmiJackeFront.src,
            bmiJackeSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Gefertigt aus dunkelblauem Aramidgewebe",
                        en: "Made from dark blue aramid fabric"
                    },
                    {
                        de: "Permanent schwer entflammbar und antistatisch",
                        en: "Permanently flame-retardant and antistatic"
                    },
                    {
                        de: "Stehkragen",
                        en: "Stand-up collar"
                    },
                    {
                        de: "Verdeckter Frontreißverschluss",
                        en: "Concealed front zipper"
                    },
                    {
                        de: "2 Brust- und 2 Seitentaschen",
                        en: "2 chest pockets and 2 side pockets"
                    },
                    {
                        de: "5 Durchgriffe zur Arretierung des Körperschutzes",
                        en: "5 internal access points for securing body armor"
                    },
                    {
                        de: "Lasche zur Befestigung der Funkantenne",
                        en: "Loop for attaching a radio antenna"
                    },
                    {
                        de: "Ärmelnaht-Reißverschlüsse",
                        en: "Zippers along the sleeve seams"
                    },
                    {
                        de: "Ärmelabschluss mit Gummizug",
                        en: "Elasticated sleeve cuffs"
                    },
                    {
                        de: "Kordelzug im Saumbereich",
                        en: "Drawcord at the hem"
                    },
                    {
                        de: "Klettflauschband unterhalb der linken Brusttasche zur Aufnahme eines Namensschildes",
                        en: "Velcro patch below the left chest pocket for name tag attachment"
                    },
                    {
                        de: "Schriftzug für Ihr Unternehmen mit Klettverschluss auf Vorder- und Rückenteil",
                        en: "Company branding via hook-and-loop patch on front and back"
                    },
                    {
                        de: "Klettflauschflächen für Hoheitsabzeichen und Dienstgradabzeichen",
                        en: "Velcro areas for insignia and rank patches"
                    },
                    {
                        de: "Rückenteil mit Klettflauschband in Quadratform zur Anbringung einer taktischen Kennung",
                        en: "Square-shaped Velcro patch on the back for tactical identification markers"
                    },
                    {
                        de: "Zusätzlicher Schutz durch schnitthemmende Einlagen im Kragen-, Schulterpasse- und Frontverschluss-Bereich",
                        en: "Additional cut protection inserts in collar, shoulder yoke, and front closure area"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    },
    {
        title: {
            de: "Einsatzhose, flammhemmend",
            en: "Operational Trousers – Flame Retardant"
        },
        shortDescription: {
            de: "Die Einsatzhose, gefertigt aus dunkelblauem Aramidgewebe, permanent schwer entflammbar und antistatisch, Öl-& Wasserabweisend. 93% Meta-Aramid, 5% Para-Aramid, 2% antistatische Komponente.",
            en: "These operational trousers are made from dark blue aramid fabric that is permanently flame-retardant, antistatic, and resistant to oil and water. Composition: 93% meta-aramid, 5% para-aramid, 2% antistatic fiber."
        },
        category: {
            de: "Hosen",
            en: "Pants"
        },
        tag: {
            de: "Original TL",
            en: "Original TL"
        },
        images: [
            bmiHoseFront.src,
            bmiHoseSeite.src
        ],
        lists: [
            {
                title: {
                    de: "Technische Daten",
                    en: "Technical Data"
                },
                content: [
                    {
                        de: "Angesetzter Bund mit Gürtelschlaufen",
                        en: "Attached waistband with belt loops"
                    },
                    {
                        de: "Abnehmbare Hosenträger",
                        en: "Removable suspenders"
                    },
                    {
                        de: "2 Seitentaschen, 2 Gesäßtaschen, 2 Beintaschen",
                        en: "2 side pockets, 2 rear pockets, 2 thigh cargo pockets"
                    },
                    {
                        de: "Weitenregulierbare Saumkonstruktion",
                        en: "Adjustable leg hem for individual fit"
                    },
                    {
                        de: "Vorderhosen mit zwei Einschubtaschen für Oberschenkelschutz (mit Klettband verschließbar)",
                        en: "Front trousers with two insert pockets for thigh protectors (secured with Velcro)"
                    },
                    {
                        de: "Hosenbeine mit Schrittnaht-Reißverschlüssen zur Arretierung des Schienbeinschutzes",
                        en: "Zippers along the inseam allow for shin protection to be secured"
                    },
                    {
                        de: "Kniebereich außen verstärkt",
                        en: "Reinforced outer knee area"
                    },
                    {
                        de: "Oberschenkel-Einschubtaschen & Kniekehlenbereich mit schnitthemmendem Material unterlegt",
                        en: "Thigh pockets and backs of the knees lined with cut-resistant material"
                    },
                    {
                        de: "Optimiert für Polizeieinsätze: Entwickelt für taktische Einsätze, Streifendienst und besondere Lagen.",
                        en: "Optimized for police operations: Designed for tactical use, patrol duty, and special scenarios"
                    },
                    {
                        de: "Hohe Bewegungsfreiheit: Ergonomischer Schnitt, der dynamische Bewegungen ermöglicht.",
                        en: "High mobility: Ergonomic cut for unrestricted movement"
                    },
                    {
                        de: "Vielseitige Taschenanordnung: Mehrere funktionale Taschen für Ausrüstung wie Notizblock, Handschuhe, Taschenlampe oder Dienstwaffe.",
                        en: "Versatile pocket layout: Multiple functional pockets for tools, notepad, gloves, flashlight, or service weapon"
                    },
                    {
                        de: "Kombinierbarkeit: Kann mit Schutzwesten, taktischer Ausrüstung und zusätzlicher Kleidung kombiniert werden.",
                        en: "Compatible with protective vests, tactical gear, and additional clothing layers"
                    },
                    {
                        de: "Flammhemmend (je nach Variante): Schutz bei potenziellen Brand- oder Explosionsgefahren",
                        en: "Flame retardant (depending on version): Protection against fire or explosion hazards"
                    },
                    {
                        de: "Antistatische Eigenschaften: Reduziert elektrostatische Aufladung in sensiblen Einsatzbereichen.",
                        en: "Antistatic properties: Reduces electrostatic charge in sensitive environments"
                    },
                    {
                        de: "Hochsichtbare Elemente möglich: Verbesserte Erkennbarkeit bei schlechten Lichtverhältnissen",
                        en: "Optional high-visibility elements: Enhanced visibility in low-light situations"
                    }
                ]
            }
        ],
        optionalRichtext: {
            title: {
                de: "Richtext Titel Optional",
                en: "Richtext Title Optional"
            },
            content: {
                de: "<p>Deutscher Richtext set:html</p>",
                en: "English Richtext set:html"
            }
        }
    }
];

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$ProductGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductGrid;
  const {
    products,
    pageLanguage,
    searchCategory,
    links,
    headerImage,
    heading,
    subtitle,
    introText,
    texts
  } = Astro2.props;
  let currentProducts = [];
  let content;
  if (searchCategory == "protective-wall") {
    content = texts.protectivewall;
    currentProducts = schutzwandProducts;
  }
  if (searchCategory == "thermal-cover") {
    content = texts.thermalcover;
    currentProducts = thermohaubeProducts;
  }
  if (searchCategory == "dust-cover") {
    content = texts.dustcover;
    currentProducts = staubhaubeProducts;
  }
  if (searchCategory == "military-and-survival") {
    content = texts.militarysurvival;
    currentProducts = clothingProducts;
  }
  if (searchCategory == "officialwear") {
    content = texts.officialwear;
    currentProducts = officialWearProducts;
  }
  if (searchCategory == "corporate-fashion") {
    content = texts.corporatefashion;
  }
  const productCategories = currentProducts.map((product) => {
    return {
      de: product.category.de,
      en: product.category.en
    };
  });
  const filteredCategories = productCategories.map((category) => {
    return category[pageLanguage];
  });
  console.log(filteredCategories);
  const categories = Array.from(new Set(filteredCategories));
  console.log(categories);
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-poyn3awd> <div class="container" data-astro-cid-poyn3awd> <div class="gradient-overlay" data-astro-cid-poyn3awd></div> <img${addAttribute(content.headerImage, "src")} alt="" class="header-image" fetchpriority="high" loading="eager" data-astro-cid-poyn3awd> <img${addAttribute(content.headerImage, "src")} alt="" fetchpriority="high" loading="eager" class="mobile-header-image" data-astro-cid-poyn3awd> <div class="intro" data-astro-cid-poyn3awd> <div class="headline-and-subtitle" data-astro-cid-poyn3awd> <h1 class="animatable" data-astro-cid-poyn3awd> ${content.heading[pageLanguage]} </h1> <p class="subtitle" data-astro-cid-poyn3awd> ${content.subtitle[pageLanguage]} </p> </div> <p class="intro-text" data-astro-cid-poyn3awd> ${content.introText[pageLanguage]} </p> <!--<p class="suitable-for">{suitableFor}</p>
      <div class="suitable-for-wrapper">
        <div class="tags">
          {
            content.suitableFor[pageLanguage].map((item) => {
              return <div class="tag">{item}</div>;
            })
          }
        </div>
      </div>--> </div> <div class="filter-link-container" data-astro-cid-poyn3awd> ${links.map((link) => {
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(
      link.searchCategory === searchCategory ? "active filter-link" : "filter-link",
      "class"
    )} data-astro-cid-poyn3awd> ${link.linkText[pageLanguage]} </a>`;
  })} </div> <div class="grid-holder" data-astro-cid-poyn3awd> ${categories.map((category) => {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-poyn3awd": true }, { "default": ($$result2) => renderTemplate` <h2 data-astro-cid-poyn3awd>${category}</h2> <div class="product-grid" data-astro-cid-poyn3awd> ${currentProducts.filter(
      (product) => product.category[pageLanguage].toLowerCase() == category.toLowerCase()
    ).map((p) => {
      return renderTemplate`<div class="product-grid-item" data-astro-cid-poyn3awd> <img${addAttribute(p.images[0], "src")} alt="" class="animatable" data-astro-cid-poyn3awd> <div data-astro-cid-poyn3awd> <span class="tag" data-astro-cid-poyn3awd>${p.tag[pageLanguage]}</span> <p class="product-title" data-astro-cid-poyn3awd>${p.title[pageLanguage]}</p> <button class="openBtn project-link" data-astro-cid-poyn3awd> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-poyn3awd> <span data-astro-cid-poyn3awd> ${buttonTranslations(
        "technischedaten",
        pageLanguage
      )} </span> </button> ${renderComponent($$result2, "Modal", $$Modal, { "content": p, "pageLanguage": pageLanguage, "data-astro-cid-poyn3awd": true })} </div> </div>`;
    })} </div> ` })}`;
  })} </div> </div> </section> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/ProductGrid.astro", void 0);

export { $$ProductGrid as $ };
