import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_D3XaGqlG.mjs';
import 'kleur/colors';
import { p as projects, C as Circles, $ as $$ProjectTag } from './projects_CCNn56pS.mjs';
import { b as buttonTranslations, t as translations } from './Layout_BEzOSaoH.mjs';
/* empty css                         */

const Arrow = new Proxy({"src":"/custom-folder/Arrow_link.4yBbKQU6.svg","width":827,"height":826,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Arrow_link.svg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const pageLanguage = Astro2.params.lang;
  const { currentUrl, language } = Astro2.props;
  const heading = {
    de: "Projekte & Referenzen",
    en: "Projects & References"
  };
  const subtitle = {
    de: "Bekleidung, die einfach funktioniert",
    en: "Clothing that simply works"
  };
  return renderTemplate`${maybeRenderHead()}<section id="projects" data-astro-cid-amng4zvp> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-amng4zvp> <div class="container" data-astro-cid-amng4zvp> <h2 class="animatable" data-astro-cid-amng4zvp>${heading[language]}</h2> <p class="subtitle animatable" data-astro-cid-amng4zvp>${subtitle[language]}</p> <div class="rezensionen-grid" data-astro-cid-amng4zvp> ${projects.map((project) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-amng4zvp> <div data-astro-cid-amng4zvp> <div class="icon-and-title" data-astro-cid-amng4zvp> <div class="project-image-wrapper" data-astro-cid-amng4zvp> ${project.images.map((image) => {
      return renderTemplate`<img${addAttribute(image, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-amng4zvp>`;
    })} </div> <div class="project-tag-wrapper" data-astro-cid-amng4zvp> <!-- {project.tags[pageLanguage].map((tag) => {
                    return <ProjectTag tagContent={tag} />;
                  })}--> ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": `${project.amount} ${translations(
      "menge",
      pageLanguage
    )}`, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.customer[pageLanguage], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.tl, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.date, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.status[pageLanguage], "data-astro-cid-amng4zvp": true })} </div> <p class="card-title" data-astro-cid-amng4zvp>${project.title[pageLanguage]}</p> </div> <p class="card-text" data-astro-cid-amng4zvp>${`${project.shortDescription[pageLanguage].slice(0, 200)}...`}</p> </div> <a${addAttribute(`/${pageLanguage}/projects/${project.slug}`, "href")} class="project-link" data-astro-cid-amng4zvp> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>${buttonTranslations("mehr", language)}</span> </a> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Projects.astro", void 0);

export { $$Projects as $ };
