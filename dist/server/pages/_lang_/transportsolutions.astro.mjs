import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Wl4CagMY.mjs';
import { $ as $$CategoryHeader } from '../../chunks/CategoryHeader_gM82gUb_.mjs';
import '../../chunks/schutzwand_verschluss_BqHNROck.mjs';
import '../../chunks/Transportwand farbig_QNd6lEeh.mjs';
import '../../chunks/Thermohaube farbig_DEdBemqE.mjs';
import { T as Transportloesungen, S as Staubhaube, a as Thermohaube } from '../../chunks/staubhaube_schraeg_header_DLhywCYd.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const transportCategories = [
    {
        slug: "transportsolutions/protectivewalls",
        title: {
            de: "Schutzwände",
            en: "Protective walls",
        },
        description: {
            de: `Unsere patentierten Schutzwände bieten eine umweltfreundliche Alternative zur herkömmlichen Stretchfolie. Sie sichern die Ladung zuverlässig, lassen sich schnell anbringen und sparen nicht nur Material, sondern auch Zeit und Kosten.`,
            en: `With our patented protective wall for roll containers, you can finally say goodbye to stretch film. It completely replaces stretch film in load securing and offers a sustainable, reusable alternative.
Thanks to the innovative 6-point click system and integrated fiberglass rods, the protective wall ensures maximum stability and safety – while also saving valuable time during installation.`
        },

        img: Transportloesungen.src
    },
    {
        slug: "transportsolutions/dustcovers",
        title: {
            de: "Staubhauben",
            en: "Dust covers",
        },
        description: {
            de: "Für besonders sensible Produkte bieten unsere Staub- und Schutzhauben optimalen Schutz vor äußeren Einflüssen wie Schmutz, Feuchtigkeit oder Beschädigung. Die hochwertigen Materialien garantieren Langlebigkeit und einfache Handhabung im täglichen Einsatz.",
            en: "For particularly sensitive products, our dust and protective covers offer optimal protection against external influences such as dirt, moisture, or damage. High-quality materials ensure long-lasting performance and easy handling in daily use."
        },
        img: Staubhaube.src
    },
    {
        slug: "transportsolutions/thermalcovers",
        title: {
            de: "Thermohauben",
            en: "Thermal covers",
        },
        description: {
            de: "Ob heiß oder kalt – unsere Thermohauben schützen temperaturempfindliche Waren zuverlässig auf dem gesamten Transportweg. Sie sind robust, mehrfach verwendbar und sorgen für konstante Bedingungen, selbst bei wechselnden Außentemperaturen.",
            en: "Hot or cold – our thermal covers reliably protect temperature-sensitive goods throughout the entire transport process. They are durable, reusable, and ensure stable conditions even in fluctuating external temperatures."
        },
        img: Thermohaube.src
    }
];

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageLanguage = Astro2.locals.language ?? "de";
  const metaData = {
    pageTitle: {
      de: "Nachhaltige L\xF6sungen f\xFCr Rollcontainer | Feuchter GmbH",
      en: "Reusable Solutions for Roll Cage Trolleys | Feuchter GmbH"
    },
    pageDescription: {
      de: "Wir setzen neue Ma\xDFst\xE4be in Sachen Nachhaltigkeit und Funktionalit\xE4t im Bereich der Rollcontainer-L\xF6sungen.",
      en: "We are setting new standards in sustainability and functionality for roll container solutions."
    }
  };
  const textContent = {
    title: {
      de: "Nachhaltige L\xF6sungen f\xFCr Rollcontainer",
      en: "Reusable Solutions for Roll Cage Trolleys"
    },
    text: {
      de: "Wir setzen neue Ma\xDFst\xE4be in Sachen Nachhaltigkeit und Funktionalit\xE4t im Bereich der Rollcontainer-L\xF6sungen. Unsere innovativen Produkte ersetzen Einwegmaterialien durch langlebige, wiederverwendbare Alternativen \u2013 ganz ohne Kompromisse bei Sicherheit oder Effizienz. Mit unseren L\xF6sungen tragen Sie aktiv zur Reduzierung von Einwegmaterialien bei und gestalten Ihre Logistikprozesse zukunftssicher \u2013 wirtschaftlich und \xF6kologisch.",
      en: "We are setting new standards in sustainability and functionality for roll container solutions. Our innovative products replace single-use materials with durable, reusable alternatives \u2013 without compromising on safety or efficiency. With our solutions, you actively reduce single-use materials and future-proof your logistics processes \u2013 both economically and ecologically."
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": metaData.pageTitle[pageLanguage], "pageDescription": metaData.pageDescription[pageLanguage], "data-astro-cid-o3sgqaj7": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-o3sgqaj7> <div class="container" data-astro-cid-o3sgqaj7> ${renderComponent($$result2, "CategoryHeader", $$CategoryHeader, { "categories": transportCategories, "pageLanguage": pageLanguage, "textContent": textContent, "data-astro-cid-o3sgqaj7": true })} </div> </section> ` })} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/transportsolutions/index.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/transportsolutions/index.astro";
const $$url = "/[lang]/transportsolutions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
