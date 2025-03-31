import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_CofuBfMf.mjs';
import 'kleur/colors';
import { p as projects, C as Circles, $ as $$ProjectTag } from './projects_CgVXogum.mjs';
import { A as Arrow } from './Arrow_sand_CKat7LSH.mjs';
import { b as buttonTranslations, t as translations } from './Layout_Be7f7Y1O.mjs';
/* empty css                         */

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const pageLanguage = Astro2.params.lang;
  const { currentUrl, language } = Astro2.props;
  const heading = {
    de: "Projekte",
    en: "Projects"
  };
  const subtitle = {
    de: "Bekleidung, die einfach funktioniert",
    en: "Clothing that simply works"
  };
  return renderTemplate`${maybeRenderHead()}<section id="projects" data-astro-cid-amng4zvp> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-amng4zvp> <div class="container" data-astro-cid-amng4zvp> <h2 class="animatable" data-astro-cid-amng4zvp>${heading[language]}</h2> <p class="subtitle animatable" data-astro-cid-amng4zvp>${subtitle[language]}</p> <div class="rezensionen-grid" data-astro-cid-amng4zvp> ${projects.map((project) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-amng4zvp> <div data-astro-cid-amng4zvp> <div class="icon-and-title" data-astro-cid-amng4zvp> <div class="project-image-wrapper" data-astro-cid-amng4zvp> ${project.images.map((image) => {
      return renderTemplate`<img${addAttribute(image, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-amng4zvp>`;
    })} </div> <div class="project-tag-wrapper" data-astro-cid-amng4zvp> <!-- {project.tags[pageLanguage].map((tag) => {
                    return <ProjectTag tagContent={tag} colorScheme="bright"/>;
                  })}--> ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "colorScheme": "bright", "tagContent": `${project.amount} ${translations(
      "menge",
      pageLanguage
    )}`, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.customer[pageLanguage], "colorScheme": "bright", "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.tl, "colorScheme": "bright", "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.date, "colorScheme": "bright", "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.status[pageLanguage], "colorScheme": "bright", "data-astro-cid-amng4zvp": true })} </div> <p class="card-title" data-astro-cid-amng4zvp>${project.title[pageLanguage]}</p> </div> <p class="card-text" data-astro-cid-amng4zvp>${`${project.shortDescription[pageLanguage].slice(0, 200)}...`}</p> </div> <a${addAttribute(`/${pageLanguage}/projects/${project.slug}`, "href")} class="project-link" data-astro-cid-amng4zvp> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>${buttonTranslations("mehr", language)}</span> </a> </div>`;
  })} </div> </div> </section> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Projects.astro", void 0);

export { $$Projects as $ };
