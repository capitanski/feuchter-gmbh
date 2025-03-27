import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, j as renderScript, r as renderTemplate, i as renderComponent, k as Fragment } from './astro/server_D3XaGqlG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { A as Arrow } from './Arrow_sand_5oaPgMNc.mjs';
import { b as buttonTranslations } from './Layout_BEzOSaoH.mjs';

const $$Astro$1 = createAstro();
const $$Modal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Modal;
  const { isOpen = false, content, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="modal-overlay"${addAttribute(isOpen ? "block" : "none", "style:display")} data-astro-cid-qmzm2soj> <div class="modal" data-astro-cid-qmzm2soj> <button class="close-button" data-astro-cid-qmzm2soj>×</button> <h2 data-astro-cid-qmzm2soj>${content.title[pageLanguage]}</h2> <p data-astro-cid-qmzm2soj>${content.description[pageLanguage]}</p> <div class="modal-image-grid" data-astro-cid-qmzm2soj> ${content.images.map((image) => {
    return renderTemplate`<div class="modal-grid-item" data-astro-cid-qmzm2soj> <img${addAttribute(image, "src")} data-astro-cid-qmzm2soj> </div>`;
  })} </div> <small class="rich-text-dark" data-astro-cid-qmzm2soj>${unescapeHTML(content.technicalData[pageLanguage])}</small> </div> </div> ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Modal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Modal.astro", void 0);

const $$Astro = createAstro();
const $$ProductGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductGrid;
  const {
    categories,
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
  console.log(searchCategory);
  let content;
  let suitableFor;
  if (searchCategory == "protective-wall") {
    content = texts.protectivewall;
  }
  if (searchCategory == "thermal-cover") {
    content = texts.thermalcover;
  }
  if (searchCategory == "dust-cover") {
    content = texts.dustcover;
  }
  if (searchCategory == "military-and-survival") {
    content = texts.militarysurvival;
  }
  if (searchCategory == "officialwear") {
    content = texts.officialwear;
  }
  if (searchCategory == "corporate-fashion") {
    content = texts.corporatefashion;
  }
  if (pageLanguage == "de") {
    suitableFor = "Ideal f\xFCr:";
  }
  if (pageLanguage == "en") {
    suitableFor = "Ideal for:";
  }
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-poyn3awd> <img${addAttribute(content.headerImage, "src")} alt="" class="header-image" data-astro-cid-poyn3awd> <img${addAttribute(content.mobileHeaderImage, "src")} alt="" class="mobile-header-image" data-astro-cid-poyn3awd> <div class="container" data-astro-cid-poyn3awd> <div class="intro" data-astro-cid-poyn3awd> <div class="headline-and-subtitle" data-astro-cid-poyn3awd> <h1 class="animatable" data-astro-cid-poyn3awd> ${content.heading[pageLanguage]} </h1> <p class="subtitle" data-astro-cid-poyn3awd> ${content.subtitle[pageLanguage]} </p> </div> <p class="intro-text" data-astro-cid-poyn3awd> ${content.introText[pageLanguage]} </p><p class="suitable-for" data-astro-cid-poyn3awd>${suitableFor}</p> <div class="suitable-for-wrapper" data-astro-cid-poyn3awd> <div class="tags" data-astro-cid-poyn3awd> ${content.suitableFor[pageLanguage].map((item) => {
    return renderTemplate`<div class="tag" data-astro-cid-poyn3awd>${item}</div>`;
  })} </div> </div> </div> <div class="filter-link-container" data-astro-cid-poyn3awd> ${links.map((link) => {
    return renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(
      link.searchCategory === searchCategory ? "active filter-link" : "filter-link",
      "class"
    )} data-astro-cid-poyn3awd> ${link.linkText[pageLanguage]} </a>`;
  })} </div> ${categories.map((category) => {
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-poyn3awd": true }, { "default": ($$result2) => renderTemplate` <h2 data-astro-cid-poyn3awd>${category.value}</h2> <div class="product-grid" data-astro-cid-poyn3awd> ${products.filter(
      (product) => product.category.key == category.key && product.category.overall == searchCategory
    ).map((p) => {
      return renderTemplate`<div class="product-grid-item" data-astro-cid-poyn3awd> <img${addAttribute(p.mainImage, "src")} alt="" class="animatable" data-astro-cid-poyn3awd> <div data-astro-cid-poyn3awd> ${p.originalTl ? renderTemplate`<span data-astro-cid-poyn3awd>Original TL</span>` : ""} ${p.individual ? renderTemplate`<span data-astro-cid-poyn3awd>Individualisierbar</span>` : ""} <p class="product-title" data-astro-cid-poyn3awd>${p.title[pageLanguage]}</p> <button class="openBtn project-link" data-astro-cid-poyn3awd> <img${addAttribute(Arrow.src, "src")} alt="" data-astro-cid-poyn3awd> <span data-astro-cid-poyn3awd> ${buttonTranslations(
        "technischedaten",
        pageLanguage
      )} </span> </button> ${renderComponent($$result2, "Modal", $$Modal, { "content": p, "pageLanguage": pageLanguage, "data-astro-cid-poyn3awd": true })} </div> </div>`;
    })} </div> ` })}`;
  })} </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/ProductGrid.astro", void 0);

export { $$ProductGrid as $ };
