import { e as createAstro, f as createComponent, i as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { $ as $$WelcomeLeftAligned } from '../../chunks/WelcomeLeftAligned_DmXir0Xz.mjs';
import { $ as $$Layout } from '../../chunks/Layout_DaASaaif.mjs';
import { $ as $$Projects } from '../../chunks/Projects_T2wigMXL.mjs';
import { B as Bekleidung } from '../../chunks/projekte_C2Tx1DqM.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  let heading = "Projekte & Referenzen";
  let subtitle = "Vom Unterhemd bis zum Einsatzanzug";
  let introText = "Unsere langj\xE4hrige Erfahrung, Innovationskraft und Verl\xE4sslichkeit machen uns zum starken Partner f\xFCr anspruchsvolle Textilprojekte.";
  if (pageLanguage == "en") {
    heading = "Projects & References";
    subtitle = "From underwear to tactical suits";
    introText = "Whether it's functional clothing for daily use, custom-made solutions for government agencies, or large-scale production runs \u2013 our decades of experience, innovation, and reliability make us a strong partner for demanding textile projects.";
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeLeftAligned", $$WelcomeLeftAligned, { "language": pageLanguage, "heading": heading, "subtitle": subtitle, "Scribble": Bekleidung, "introText": introText, "page": "projects" })} ${renderComponent($$result2, "Projects", $$Projects, { "language": pageLanguage })} ` })}`;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/projects/index.astro", void 0);

const $$file = "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/pages/[lang]/projects/index.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
