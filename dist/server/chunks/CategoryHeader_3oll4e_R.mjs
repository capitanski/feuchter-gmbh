import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import 'clsx';
import { A as Arrow } from './Arrow_sand_5oaPgMNc.mjs';
import { b as buttonTranslations } from './Layout_BMH1rKNG.mjs';
/* empty css                         */

const $$Astro = createAstro("http://localhost:4321");
const $$CategoryHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CategoryHeader;
  const { categories, pageLanguage, textContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="function" data-astro-cid-hp6dm2g2> <div class="headline-and-title" data-astro-cid-hp6dm2g2> <h2 class="animatable" data-astro-cid-hp6dm2g2>${textContent.title[pageLanguage]}</h2> <p class="headline-text" data-astro-cid-hp6dm2g2>${textContent.text[pageLanguage]}</p> </div> <div class="image-grid" data-astro-cid-hp6dm2g2> ${categories.map((item) => {
    return renderTemplate`<div class="grid-item" data-astro-cid-hp6dm2g2> <img${addAttribute(item.img, "src")} alt="" data-astro-cid-hp6dm2g2> <div data-astro-cid-hp6dm2g2> <p class="grid-item-title" data-astro-cid-hp6dm2g2> ${item.title[pageLanguage]} </p> <p class="grid-item-text" data-astro-cid-hp6dm2g2> ${item.description[pageLanguage]} </p> <a${addAttribute(`/${pageLanguage}/${item.slug}`, "href")} class="project-link" data-astro-cid-hp6dm2g2> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-hp6dm2g2> <span data-astro-cid-hp6dm2g2> ${buttonTranslations(
      "toproducts",
      pageLanguage
    )} </span> </a> </div> </div>`;
  })} </div> </div> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/CategoryHeader.astro", void 0);

export { $$CategoryHeader as $ };
