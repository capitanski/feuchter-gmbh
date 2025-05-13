import { e as createAstro, f as createComponent, m as maybeRenderHead, i as renderComponent, h as addAttribute, r as renderTemplate, j as renderScript } from './astro/server_C55uJX-_.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_BukcMihT.mjs';
import { b as buttonTranslations } from './Layout_aDJLy9Xb.mjs';
/* empty css                              */
import 'clsx';

const $$Astro$5 = createAstro("http://localhost:4321");
const $$Function = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Function;
  const { product, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="function" data-astro-cid-zzvl4fxx> <div class="headline-and-title" data-astro-cid-zzvl4fxx> <div class="inner" data-astro-cid-zzvl4fxx> <h2 class="animatable" data-astro-cid-zzvl4fxx> ${product.function.headline[pageLanguage]} </h2> ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("contact", pageLanguage), "target": `/${pageLanguage}/contact`, "class": "hero-button-2 function-button", "variant": "secondary", "data-astro-cid-zzvl4fxx": true })} </div> <!-- <p class="headline-text">{product.function.intro[pageLanguage]}</p>--> </div> <div class="image-grid" data-astro-cid-zzvl4fxx> ${product.function.items.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-zzvl4fxx> <img${addAttribute(item.img, "src")} alt="" data-astro-cid-zzvl4fxx> <p class="grid-item-title" data-astro-cid-zzvl4fxx> ${item.title[pageLanguage]} </p> <p class="grid-item-text" data-astro-cid-zzvl4fxx>${item.text[pageLanguage]}</p> </div>`;
  })} </div> </div> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Function.astro", void 0);

const $$Astro$4 = createAstro("http://localhost:4321");
const $$TransportUsps = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TransportUsps;
  const { product, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="function" data-astro-cid-z2ci73di> <div class="headline-and-title" data-astro-cid-z2ci73di> <h2 class="animatable" data-astro-cid-z2ci73di>${product.usps.headline[pageLanguage]}</h2> <p class="headline-text" data-astro-cid-z2ci73di>${product.usps.intro[pageLanguage]}</p> </div> <div class="image-grid" data-astro-cid-z2ci73di> ${product.usps.items.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-z2ci73di> <p class="grid-item-title" data-astro-cid-z2ci73di> ${item.title[pageLanguage]} </p> <p class="grid-item-text" data-astro-cid-z2ci73di>${item.text[pageLanguage]}</p> </div>`;
  })} </div> </div> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/TransportUsps.astro", void 0);

const $$Astro$3 = createAstro("http://localhost:4321");
const $$TransportVariants = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TransportVariants;
  const { product, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="function" data-astro-cid-nai74nil> <div class="headline-and-title" data-astro-cid-nai74nil> <h2 class="animatable" data-astro-cid-nai74nil>${product.colors.headline[pageLanguage]}</h2> <p class="headline-text" data-astro-cid-nai74nil>${product.colors.intro[pageLanguage]}</p> </div> <div class="main-image-and-grid" data-astro-cid-nai74nil> <div class="main-image-wrapper animatable" data-astro-cid-nai74nil> <img${addAttribute(product.colors.items[0].image, "src")} alt="" id="color-mainImage" data-astro-cid-nai74nil> </div> <div class="image-grid" data-astro-cid-nai74nil> ${product.colors.items.map((item) => {
    return renderTemplate`<div class="grid-item animatable" data-astro-cid-nai74nil> <img${addAttribute(item.image, "src")} alt="" class="color-image" data-astro-cid-nai74nil> <p class="grid-item-title" data-astro-cid-nai74nil> ${item.title[pageLanguage]} </p> </div>`;
  })} </div> </div> </div> ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/TransportVariants.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/TransportVariants.astro", void 0);

const $$Astro$2 = createAstro("http://localhost:4321");
const $$VariantSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$VariantSlider;
  const { product, pageLanguage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="function" data-astro-cid-bms756br> <div class="headline-and-title" data-astro-cid-bms756br> <h2 class="animatable" data-astro-cid-bms756br>${product.images.headline[pageLanguage]}</h2> <p class="headline-text" data-astro-cid-bms756br>${product.images.intro[pageLanguage]}</p> </div> <div class="main-image-and-grid" data-astro-cid-bms756br> <div class="image-grid" data-astro-cid-bms756br> <div class="swiper mySwiper" data-astro-cid-bms756br> <div class="swiper-wrapper" data-astro-cid-bms756br> ${product.images.images.map((image) => {
    return renderTemplate`<div class="swiper-slide animatable" data-astro-cid-bms756br> <img${addAttribute(image, "src")} alt="" data-astro-cid-bms756br> </div>`;
  })} </div> </div> <div class="swiper-pagination" data-astro-cid-bms756br></div> </div> </div> </div> ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/VariantSlider.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/VariantSlider.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("http://localhost:4321");
const $$SavingsCounter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SavingsCounter;
  const { product, pageLanguage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="function" data-astro-cid-jsiynmke> <div class="headline-and-title" data-astro-cid-jsiynmke> <h2 class="animatable" data-astro-cid-jsiynmke>', '</h2> <div class="explanation" data-astro-cid-jsiynmke> ', ' </div> </div> <div class="image-grid" data-astro-cid-jsiynmke> ', ' </div> </div> <script type="module" is:browser>\n    import { CountUp } from "/countUp.min.js";\n    let foil = document.getElementById("gray");\n    let wall = document.getElementById("sand");\n    let savings = document.getElementById("white");\n    const observer = new IntersectionObserver((entries, observer) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n                const countUp = new CountUp(\n                    foil,\n                    foil.getAttribute("data-numbertarget"),\n                    {\n                        duration: 2,\n                    },\n                );\n\n                countUp.start();\n            }\n        });\n    });\n    const observer2 = new IntersectionObserver((entries, observer) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n                const countUp = new CountUp(\n                    wall,\n                    wall.getAttribute("data-numbertarget"),\n                    {\n                        duration: 2,\n                    },\n                );\n\n                countUp.start();\n            }\n        });\n    });\n    const observer3 = new IntersectionObserver((entries, observer) => {\n        entries.forEach((entry) => {\n            if (entry.isIntersecting) {\n                const countUp = new CountUp(\n                    savings,\n                    savings.getAttribute("data-numbertarget"),\n                    {\n                        duration: 2,\n                    },\n                );\n\n                countUp.start();\n            }\n        });\n    });\n\n    observer.observe(foil);\n    observer2.observe(wall);\n    observer3.observe(savings);\n<\/script> '])), maybeRenderHead(), product.numbers.headline[pageLanguage], product.numbers.list.map((item) => {
    return renderTemplate`<p data-astro-cid-jsiynmke>${item[pageLanguage]}</p>`;
  }), product.numbers.numbers.map((item) => {
    return renderTemplate`<div class="grid-item" data-astro-cid-jsiynmke> <div class="grid-item-inner" data-astro-cid-jsiynmke> <p${addAttribute(item.color + ` grid-item-text`, "class")} data-astro-cid-jsiynmke> ${item[pageLanguage]} </p> <p${addAttribute(item.color + ` grid-item-title`, "class")} data-astro-cid-jsiynmke> <span${addAttribute(item.color, "id")}${addAttribute(item.number, "data-numbertarget")} data-astro-cid-jsiynmke>
0
</span>${" "}
€
</p> </div> </div>`;
  }));
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/SavingsCounter.astro", void 0);

const $$Astro = createAstro("http://localhost:4321");
const $$ProductGridTransport = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductGridTransport;
  const { pageLanguage, searchCategory, links, texts, product, headerImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section data-astro-cid-6na2l5sn> <!-- <div class="gradient-overlay"></div>--> <div class="container" data-astro-cid-6na2l5sn> <div class="image-and-intro" data-astro-cid-6na2l5sn> <div class="image-wrapper" data-astro-cid-6na2l5sn> <img${addAttribute(product.headerImage, "src")} alt="" class="header-image animatable" fetchpriority="high" loading="eager" data-astro-cid-6na2l5sn> </div> <div class="intro" data-astro-cid-6na2l5sn> <div class="intro-inner" data-astro-cid-6na2l5sn> <div class="headline-and-subtitle" data-astro-cid-6na2l5sn> <h1 class="animatable" id="h1" data-astro-cid-6na2l5sn> ${product.title[pageLanguage]} </h1> <p class="subtitle" data-astro-cid-6na2l5sn> ${product.subtitle[pageLanguage]} </p> </div> <p class="intro-text" data-astro-cid-6na2l5sn> ${product.shortDescription[pageLanguage]} </p> </div> ${renderComponent($$result, "Button", $$Button, { "linkText": buttonTranslations("contact", pageLanguage), "target": `/${pageLanguage}/contact`, "class": "hero-button-2 button", "variant": "secondary", "data-astro-cid-6na2l5sn": true })} </div> </div> <!-- <div class="filter-link-container">
            {
                links.map((link) => {
                    return (
                        <a
                            href={link.href}
                            class={
                                link.searchCategory === searchCategory
                                    ? "active filter-link"
                                    : "filter-link"
                            }
                        >
                            {link.linkText[pageLanguage]}
                        </a>
                    );
                })
            }
        </div> --> ${renderComponent($$result, "Function", $$Function, { "product": product, "pageLanguage": pageLanguage, "data-astro-cid-6na2l5sn": true })} ${renderComponent($$result, "TransportUsps", $$TransportUsps, { "product": product, "pageLanguage": pageLanguage, "data-astro-cid-6na2l5sn": true })} ${product.images ? renderTemplate`${renderComponent($$result, "VariantSlider", $$VariantSlider, { "product": product, "pageLanguage": pageLanguage, "data-astro-cid-6na2l5sn": true })}` : null} ${product.colors ? renderTemplate`${renderComponent($$result, "TransportVariants", $$TransportVariants, { "product": product, "pageLanguage": pageLanguage, "data-astro-cid-6na2l5sn": true })}` : null} <!-- <TransportChart />--> ${product.numbers ? renderTemplate`${renderComponent($$result, "SavingsCounter", $$SavingsCounter, { "product": product, "pageLanguage": pageLanguage, "data-astro-cid-6na2l5sn": true })}` : null} </div> </section> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/ProductGridTransport.astro", void 0);

const star = new Proxy({"src":"/custom-folder/star-regular.CD5YShCy.svg","width":528,"height":512,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/star-regular.svg";
							}
							
							return target[name];
						}
					});

const einsatzjacke = new Proxy({"src":"/custom-folder/BMI Jacke Front.CJ7k7CgK.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/BMI Jacke Front.webp";
							}
							
							return target[name];
						}
					});

const einsatzhose = new Proxy({"src":"/custom-folder/BMI Hose Seite.Dc-2FBsC.webp","width":1000,"height":1000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Produkte/BMI Hose Seite.webp";
							}
							
							return target[name];
						}
					});

const headwear = new Proxy({"src":"/custom-folder/official_headwear.DKiAPmEP.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/official_headwear.webp";
							}
							
							return target[name];
						}
					});

export { $$ProductGridTransport as $, einsatzhose as a, einsatzjacke as e, headwear as h, star as s };
