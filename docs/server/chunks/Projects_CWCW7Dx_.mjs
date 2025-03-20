import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, i as renderComponent, r as renderTemplate } from './astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import { p as projects, C as Circles, $ as $$ProjectTag } from './projects_BdTMjCxF.mjs';
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

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const pageLanguage = Astro2.params.lang;
  return renderTemplate`${maybeRenderHead()}<section id="projects" data-astro-cid-amng4zvp> <img${addAttribute(Circles.src, "src")} alt="" class="img-absolute" data-astro-cid-amng4zvp> <div class="container" data-astro-cid-amng4zvp> <h2 class="animatable" data-astro-cid-amng4zvp>Projekte & Referenzen</h2> <p class="subtitle animatable" data-astro-cid-amng4zvp>Bekleidung, die einfach funktioniert</p> <div class="rezensionen-grid" data-astro-cid-amng4zvp> ${projects.map((project) => {
    return renderTemplate`<div class="rezension-card animate-in-right" data-astro-cid-amng4zvp> <div class="icon-and-title" data-astro-cid-amng4zvp> <div class="project-image-wrapper" data-astro-cid-amng4zvp> ${project.images.map((image) => {
      return renderTemplate`<img${addAttribute(image, "src")} alt="" class="card-icon" loading="lazy" width="150" height="150" data-astro-cid-amng4zvp>`;
    })} </div> <div class="project-tag-wrapper" data-astro-cid-amng4zvp> ${project.tags[pageLanguage].map((tag) => {
      return renderTemplate`${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": tag, "data-astro-cid-amng4zvp": true })}`;
    })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": `${project.amount} pcs`, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.customer[pageLanguage], "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.tl, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.date, "data-astro-cid-amng4zvp": true })} ${renderComponent($$result, "ProjectTag", $$ProjectTag, { "tagContent": project.status[pageLanguage], "data-astro-cid-amng4zvp": true })} </div> <p class="card-title" data-astro-cid-amng4zvp>${project.title[pageLanguage]}</p> </div> <p class="card-text" data-astro-cid-amng4zvp>${project.shortDescription[pageLanguage]}</p> <a${addAttribute(`/${pageLanguage}/projects/${project.slug}`, "href")} class="project-link" data-astro-cid-amng4zvp> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-amng4zvp> <span data-astro-cid-amng4zvp>mehr erfahren</span> </a> </div>`;
  })} </div> </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Projects.astro", void 0);

export { $$Projects as $ };
