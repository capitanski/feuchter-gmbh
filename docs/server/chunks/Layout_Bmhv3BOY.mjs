import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as renderScript, k as renderHead, l as renderSlot } from './astro/server_Li3VZHa6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
/* empty css                         */

const $$Astro$4 = createAstro("https://capitanski.github.io/");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { linkText, target, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(target || "#", "href")}${addAttribute(className, "class")} data-astro-cid-vnzlvqnm> ${linkText} </a> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Button.astro", void 0);

const Circles = new Proxy({"src":"/custom-folder/Circles.Q2htWEHX.svg","width":1338,"height":913,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Circles.svg";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/custom-folder/feuchter_gmbh_logo.DsXPjw9d.svg","width":90,"height":33,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/feuchter_gmbh_logo.svg";
							}
							
							return target[name];
						}
					});

const Menu = new Proxy({"src":"/custom-folder/Menu.BmJbz0by.svg","width":49,"height":27,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/assets/Menu.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("https://capitanski.github.io/");
const $$LangSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LangSwitcher;
  const currentLang = Astro2.params.lang ?? "de";
  Astro2.url.pathname;
  const { langs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-su6xvggn> <ul data-astro-cid-su6xvggn> ${langs.map(({ lang, url }) => renderTemplate`<li data-astro-cid-su6xvggn> <a${addAttribute(url, "href")}${addAttribute(currentLang === lang ? "active" : "", "class")} data-astro-cid-su6xvggn> ${lang.toUpperCase()} </a> </li>`)} </ul> </nav> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/LangSwitcher.astro", void 0);

const navLinks = {
  de: [
    {
      text: "Über uns",
      to: "about"
    },
    {
      text: "Leistungen",
      to: "services"
    },
    {
      text: "Kontakt",
      to: "contact"
    },
    {
      text: "Projekte & Referenzen",
      to: "projects"
    },
    {
      text: "Bekleidung",
      to: "clothing"
    },
    {
      text: "Transportlösungen",
      to: "transportsolutions"
    }
  ],
  en: [
    {
      text: "About Us",
      to: "about"
    },
    {
      text: "Services",
      to: "services"
    },
    {
      text: "Contact",
      to: "contact"
    },
    {
      text: "Projects & References",
      to: "projects"
    },
    {
      text: "Clothing",
      to: "clothing"
    },
    {
      text: "Transport Solutions",
      to: "transportsolutions"
    }
  ],
  fr: [
    {
      text: "À propos de nous",
      to: "about"
    },
    {
      text: "Services",
      to: "services"
    },
    {
      text: "Contact",
      to: "contact"
    },
    {
      text: "Projets et références",
      to: "projects"
    },
    {
      text: "Vêtements",
      to: "clothing"
    },
    {
      text: "Solutions de transport",
      to: "transportsolutions"
    }
  ],
  cs: [
    {
      text: "O nás",
      to: "about"
    },
    {
      text: "Služby",
      to: "services"
    },
    {
      text: "Kontakt",
      to: "contact"
    },
    {
      text: "Projekty a reference",
      to: "projects"
    },
    {
      text: "Oblečení",
      to: "clothing"
    },
    {
      text: "Dopravní řešení",
      to: "transportsolutions"
    }
  ],
  nl: [
    {
      text: "Over ons",
      to: "about"
    },
    {
      text: "Diensten",
      to: "services"
    },
    {
      text: "Contact",
      to: "contact"
    },
    {
      text: "Projecten en referenties",
      to: "projects"
    },
    {
      text: "Kleding",
      to: "clothing"
    },
    {
      text: "Transportoplossingen",
      to: "transportsolutions"
    }
  ]
};

const $$Astro$2 = createAstro("https://capitanski.github.io/");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { languages, language } = Astro2.props;
  const links = navLinks[language];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" data-astro-cid-5blmo7yk> <div class="nav-inner" data-astro-cid-5blmo7yk> <a${addAttribute(`/${language}/`, "href")} data-astro-cid-5blmo7yk> <img${addAttribute(Logo.src, "src")} alt="" class="logo" fetchpriority="high" loading="eager" data-astro-cid-5blmo7yk> </a> <div class="links" data-astro-cid-5blmo7yk> ${links.map((link) => {
    return renderTemplate`<a${addAttribute(`/${language}/${link.to}`, "href")}${addAttribute(currentPath === `/${language}/${link.to}` ? "active" : "", "class")} data-astro-cid-5blmo7yk> ${link.text} </a>`;
  })} </div> ${renderComponent($$result, "LangSwitcher", $$LangSwitcher, { "langs": languages, "data-astro-cid-5blmo7yk": true })} <div class="menu-button-wrapper" data-astro-cid-5blmo7yk> <img${addAttribute(Menu.src, "src")} alt="" class="menu" id="menu" fetchpriority="high" loading="eager" data-astro-cid-5blmo7yk> </div> </div> <div class="mobile-links hidden" id="mobile-links" data-astro-cid-5blmo7yk> ${renderComponent($$result, "LangSwitcher", $$LangSwitcher, { "langs": languages, "data-astro-cid-5blmo7yk": true })} ${links.map((link) => {
    return renderTemplate`<a${addAttribute(`/${language}/${link.to}`, "href")}${addAttribute(
      currentPath === `/${language}/${link.to}` ? "active mobile-link" : "mobile-link",
      "class"
    )} data-astro-cid-5blmo7yk> ${link.text} </a>`;
  })} </div> </nav> ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro("https://capitanski.github.io/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { languages, language } = Astro2.props;
  const links = navLinks[language];
  return renderTemplate`${maybeRenderHead()}<nav id="footer" data-astro-cid-sz7xmlte> <div class="nav-inner" data-astro-cid-sz7xmlte> <img${addAttribute(Logo.src, "src")} alt="" class="logo" fetchpriority="high" loading="eager" data-astro-cid-sz7xmlte> <div class="links" data-astro-cid-sz7xmlte> ${renderComponent($$result, "LangSwitcher", $$LangSwitcher, { "langs": languages, "data-astro-cid-sz7xmlte": true })} ${links.map((link) => {
    return renderTemplate`<a${addAttribute(`/${language}/${link.to}`, "href")} data-astro-cid-sz7xmlte>${link.text}</a>`;
  })} </div> <div class="langswitcher-and-contact" data-astro-cid-sz7xmlte> <div class="contact-data" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>+49 123456789</p> <p data-astro-cid-sz7xmlte>office@feuchter.com</p> <p data-astro-cid-sz7xmlte>Feuchter GmbH</p> <p data-astro-cid-sz7xmlte>Innbruckstraße 10</p> <p data-astro-cid-sz7xmlte>4780 Schärding AT</p> </div> </div> </div> </nav> `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Footer.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="login-form" data-astro-cid-b2fdlob7> <div class="form-inner" data-astro-cid-b2fdlob7> <img${addAttribute(Circles.src, "src")} alt="" data-astro-cid-b2fdlob7> <h1 data-astro-cid-b2fdlob7>Login</h1> <input type="password" name="password" id="password" placeholder="Passwort" data-astro-cid-b2fdlob7> <input type="submit" value="Anmelden" data-astro-cid-b2fdlob7> </div> </form> ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Login.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/components/Login.astro", void 0);

const $$Astro = createAstro("https://capitanski.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  const languages = locals.languages;
  return renderTemplate`<html${addAttribute(pageLanguage, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Jakob Matuschek - Saxophonmusik aus dem Herzen Passau's</title><meta name="description" content="Jakob Matuschek - Saxophonmusik aus dem Herzen Passau's"><link rel="canonical"${addAttribute(languages[0].url, "href")}>${languages.map(({ lang, url }) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(url, "href")}>`)}${renderHead()}</head> <body id="body" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Login", $$Login, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Navbar", $$Navbar, { "language": pageLanguage, "languages": languages, "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "language": pageLanguage, "languages": languages, "data-astro-cid-sckkx6r4": true })} ${renderScript($$result, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "C:/Users/sabri/OneDrive/Desktop/feuchter-gmbh-astro/feuchter-gmbh/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Circles as C, $$Button as a };
