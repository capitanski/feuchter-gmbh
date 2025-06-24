import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_BLPXU9P9.mjs';
import { $ as $$Layout } from '../../chunks/Layout_COPaMLlO.mjs';
import { $ as $$Projects } from '../../chunks/Projects_C6yTqQnc.mjs';
import { S as Scribble } from '../../chunks/projekte_B500-ns2.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language ?? "de";
  const metaData = {
    pageTitle: {
      de: "Projekte & Referenzen | Feuchter GmbH",
      en: "Projects & References | Feuchter GmbH"
    },
    pageDescription: {
      de: "Unsere langj\xE4hrige Erfahrung, Innovationskraft und Verl\xE4sslichkeit machen uns zum starken Partner f\xFCr anspruchsvolle Textilprojekte.",
      en: "Our decades of experience, innovation, and reliability make us a strong partner for demanding textile projects."
    }
  };
  let heading = "Projekte & Referenzen";
  let subtitle = "Vom Unterhemd bis zum Einsatzanzug";
  let introText = "Ob Funktionskleidung f\xFCr den t\xE4glichen Einsatz, ma\xDFgeschneiderte L\xF6sungen f\xFCr Beh\xF6rden oder Gro\xDFserienproduktion \u2013 unsere jahrzehntelange Erfahrung, Innovationskraft und Zuverl\xE4ssigkeit machen uns zu einem starken Partner f\xFCr anspruchsvolle Textilprojekte.";
  if (pageLanguage == "en") {
    heading = "Projects & References";
    subtitle = "From underwear to tactical suits";
    introText = "Whether it's functional clothing for daily use, custom-made solutions for government agencies, or large-scale production runs \u2013 our decades of experience, innovation, and reliability make us a strong partner for demanding textile projects.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": metaData.pageTitle[pageLanguage], "pageDescription": metaData.pageDescription[pageLanguage] }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "Scribble": Scribble, "introText": introText, "page": "projects" })} ${renderComponent($$result2, "Projects", $$Projects, { "language": pageLanguage })} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/index.astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/index.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
