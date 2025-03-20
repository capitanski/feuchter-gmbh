import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate, u as unescapeHTML } from '../../../chunks/astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$Layout } from '../../../chunks/Layout_Bmhv3BOY.mjs';
import { C as Circles, $ as $$ProjectTag, p as projects } from '../../../chunks/projects_BdTMjCxF.mjs';
/* empty css                                           */
import 'clsx';
import fs from 'fs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$2 = createAstro("https://capitanski.github.io/");
const $$ProjectAboveTheFold = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProjectAboveTheFold;
  const { currentProject, language } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-dfrtyu5v> <!--<img
        src={mainImage}
        alt=""
        class="scribble"
        fetchpriority="high"
        loading="eager"
    /> --> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-dfrtyu5v> <div class="container" data-astro-cid-dfrtyu5v> <div class="project-image-grid" data-astro-cid-dfrtyu5v> ${currentProject.images.map((image) => {
    return renderTemplate`<div data-astro-cid-dfrtyu5v> <img${addAttribute(image, "src")} alt="" class="project-image animatable" fetchpriority="high" loading="eager" data-astro-cid-dfrtyu5v> </div>`;
  })} </div> <img${addAttribute(Circles.src, "src")} alt="" class="circles-svg" fetchpriority="high" loading="eager" data-astro-cid-dfrtyu5v> <div class="hero-container" data-astro-cid-dfrtyu5v> <h1 class="hero-heading animatable" data-astro-cid-dfrtyu5v> ${currentProject.title[language]} </h1> <div class="project-tag-wrapper" data-astro-cid-dfrtyu5v> ${currentProject.tags[language].map((tag) => {
    return renderTemplate`${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": tag, "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })}`;
  })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": `${currentProject.amount.toLocaleString({
    language
  })} pcs`, "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": currentProject.customer[language], "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": currentProject.tl, "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": currentProject.date, "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": currentProject.status[language], "colorScheme": "bright", "data-astro-cid-dfrtyu5v": true })} </div> <p class="hero-paragraph" data-astro-cid-dfrtyu5v> ${currentProject.shortDescription[language]} </p> <div class="button-wrapper hero-button-wrapper" data-astro-cid-dfrtyu5v> ${renderComponent($$result, "Button", $$Button, { "linkText": "Jetzt anfragen", "target": "#kontakt", "class": "hero-button-1", "data-astro-cid-dfrtyu5v": true })} ${renderComponent($$result, "Button", $$Button, { "linkText": "Referenzen", "target": "#rezensionen", "class": "hero-button-2", "data-astro-cid-dfrtyu5v": true })} </div> </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/ProjectAboveTheFold.astro", void 0);

const $$Astro$1 = createAstro("https://capitanski.github.io/");
const $$ProjectRichText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectRichText;
  const { richText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-2iwxpusj> <div class="container" data-astro-cid-2iwxpusj> <h2 data-astro-cid-2iwxpusj>Projektbeschreibung</h2> <div class="rich-text" data-astro-cid-2iwxpusj>${unescapeHTML(richText)}</div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/ProjectRichText.astro", void 0);

const $$Astro = createAstro("https://capitanski.github.io/");
const $$project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$project;
  const polizeiBayernDe = fs.readFileSync(
    "./src/content/htmldata/polizeihemden_bayern_de.html",
    "utf-8"
  );
  console.log(polizeiBayernDe);
  const projectParam = Astro2.params.project;
  const currentProject = projects.find((item) => {
    return item.slug == projectParam;
  });
  if (!currentProject) {
    return new Response(null, { status: 404 });
  }
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectAboveTheFold", $$ProjectAboveTheFold, { "currentProject": currentProject, "language": pageLanguage })} ${renderComponent($$result2, "ProjectRichText", $$ProjectRichText, { "richText": currentProject.richtextData[pageLanguage] })} ` })}`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/[project].astro", void 0);

const $$file = "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/pages/[lang]/projects/[project].astro";
const $$url = "/[lang]/projects/[project]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$project,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
