import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_CKHqU0IZ.mjs';
import { $ as $$Layout } from '../../chunks/Layout_B3q6ub7q.mjs';
import { $ as $$Projects } from '../../chunks/Projects_Bx4TpaKP.mjs';
import { S as Scribble } from '../../chunks/projekte_Dsxstb7L.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Projekte & Referenzen";
  let subtitle = "Vom Unterhemd bis zum Einsatzanzug - Seit 1957 bieten wir h\xF6chste qualit\xE4tsstandards";
  let introText = "Ob funktionale Kleidung f\xFCr den t\xE4glichen Einsatz, ma\xDFgeschneiderte L\xF6sungen f\xFCr Beh\xF6rden oder gro\xDFangelegte Serienproduktionen: Unsere langj\xE4hrige Erfahrung, Innovationskraft und Verl\xE4sslichkeit machen uns zum starken Partner f\xFCr anspruchsvolle Textilprojekte. Werfen Sie einen Blick auf ausgew\xE4hlte Referenzen und \xFCberzeugen Sie sich selbst.";
  if (pageLanguage == "en") {
    heading = "Projects & References";
    subtitle = "From underwear to tactical suits \u2013 since 1957, we\u2019ve been delivering the highest quality standards";
    introText = "Whether it's functional clothing for daily use, custom-made solutions for government agencies, or large-scale production runs \u2013 our decades of experience, innovation, and reliability make us a strong partner for demanding textile projects.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "Scribble": Scribble, "introText": introText, "page": "projects" })} ${renderComponent($$result2, "Projects", $$Projects, { "language": pageLanguage })} ` })}`;
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
