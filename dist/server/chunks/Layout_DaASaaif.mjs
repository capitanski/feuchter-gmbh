import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent, j as renderScript, l as renderHead, n as renderSlot } from './astro/server_CofuBfMf.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const Circles = new Proxy({"src":"/custom-folder/Circles.Q2htWEHX.svg","width":1338,"height":913,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Circles.svg";
							}
							
							return target[name];
						}
					});

// Jedes zu übersetzende Element sollte in seiner Definition (Quelle alias JS Object) einen Translationkey haben
// Oder die Translations direkt im Quell Objekt definieren, dann kann man sich diese Funktion hier sparen
function translations(key, lang) {
  let response;
  switch (key) {
    case "projektbeschreibung":
      switch (lang) {
        case "en":
          response = "Project description";
          break;
        case "de":
          response = "Projektbeschreibung";
          break;
      }
      break;
    case "menge":
      switch (lang) {
        case "en":
          response = "pieces";
          break;
        case "de":
          response = "Stück";
          break;
      }
      break;
    case "leistungen":
      switch (lang) {
        case "en":
          response = "Services";
          break;
        case "de":
          response = "Leistungen";
          break;
      }
      break;
    case "leistungensubtitle":
      switch (lang) {
        case "en":
          response = "From development to production and logistics";
          break;
        case "de":
          response =
            "Von der Entwicklung, über die Produktion bis hin zur Logistik";
          break;
      }
      break;
    case "konzeption":
      switch (lang) {
        case "en":
          response = "Development and Conception";
          break;
        case "de":
          response = "Entwicklung & Konzeption";
          break;
      }
      break;
    case "produktion":
      switch (lang) {
        case "en":
          response = "Production";
          break;
        case "de":
          response = "Produktion";
          break;
      }
      break;
    case "logistik":
      switch (lang) {
        case "en":
          response = "Logistics";
          break;
        case "de":
          response = "Logistik & Vertrieb";
          break;
      }
      break;
  }
  return response;
}

function buttonTranslations(text, lang) {
  let returnValue;
  switch (text) {
    case "contact":
      switch (lang) {
        case "de":
          returnValue = "Jetzt anfragen";
          break;
        case "en":
          returnValue = "Request now";
          break;
      }
      break;
    case "projects":
      switch (lang) {
        case "de":
          returnValue = "Referenzen";
          break;
        case "en":
          returnValue = "View Projects";
          break;
      }
      break;
    case "mehr":
      switch (lang) {
        case "de":
          returnValue = "mehr erfahren";
          break;
        case "en":
          returnValue = "view more";
          break;
      }
      break;
    case "aboutus":
      switch (lang) {
        case "de":
          returnValue = "Über uns";
          break;
        case "en":
          returnValue = "About us";
          break;
      }
      break;
    case "toproducts":
      switch (lang) {
        case "de":
          returnValue = "zu den Produkten";
          break;
        case "en":
          returnValue = "to the products";
          break;
      }
      break;
    case "impressum":
      switch (lang) {
        case "de":
          returnValue = "Impressum";
          break;
        case "en":
          returnValue = "Imprint";
          break;
      }
      break;
    case "datenschutz":
      switch (lang) {
        case "de":
          returnValue = "Datenschutzerklärung";
          break;
        case "en":
          returnValue = "Privacy";
          break;
      }
      break;
    case "agbs":
      switch (lang) {
        case "de":
          returnValue = "AGB";
          break;
        case "en":
          returnValue = "Terms and Conditions";
          break;
      }
      break;
    case "technischedaten":
      switch (lang) {
        case "de":
          returnValue = "Technische Daten";
          break;
        case "en":
          returnValue = "Technical Data";
          break;
      }
      break;
    case "formName":
      switch (lang) {
        case "de":
          returnValue = "Name:";
          break;
        case "en":
          returnValue = "Name:";
          break;
      }
      break;
    case "formEmail":
      switch (lang) {
        case "de":
          returnValue = "Email:";
          break;
        case "en":
          returnValue = "Email:";
          break;
      }
      break;
    case "formPhone":
      switch (lang) {
        case "de":
          returnValue = "Telefon:";
          break;
        case "en":
          returnValue = "Phone:";
          break;
      }
      break;
    case "formCompany":
      switch (lang) {
        case "de":
          returnValue = "Firma:";
          break;
        case "en":
          returnValue = "Company:";
          break;
      }
      break;
    case "formMessage":
      switch (lang) {
        case "de":
          returnValue = "Nachricht:";
          break;
        case "en":
          returnValue = "Message:";
          break;
      }
      break;
    case "formPrivacy":
      switch (lang) {
        case "de":
          returnValue = "Ich akzeptiere die";
          break;
        case "en":
          returnValue = "I accept the";
          break;
      }
      break;
    case "formSend":
      switch (lang) {
        case "de":
          returnValue = "Senden";
          break;
        case "en":
          returnValue = "Send";
          break;
      }
      break;
    case "formWait":
      switch (lang) {
        case "de":
          returnValue = "Bitte warten...";
          break;
        case "en":
          returnValue = "Please wait...";
          break;
      }
      break;
  }
  return returnValue;
}

const Logo = new Proxy({"src":"/custom-folder/feuchter_gmbh_logo.DsXPjw9d.svg","width":90,"height":33,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/feuchter_gmbh_logo.svg";
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
								return "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/assets/Menu.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$3 = createAstro("http://192.168.178.48:4321/");
const $$LangSwitcher = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LangSwitcher;
  const currentLang = Astro2.params.lang ?? "de";
  Astro2.url.pathname;
  const { langs } = Astro2.props;
  const { url } = Astro2.request;
  const searchParams = new URL(url).searchParams;
  const searchCategory = searchParams.get("category");
  let searchparamString = "";
  if (searchCategory) {
    searchparamString = `?category=${searchCategory}`;
  }
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-su6xvggn> <ul data-astro-cid-su6xvggn> ${langs.map(({ lang, url: url2 }) => renderTemplate`<li data-astro-cid-su6xvggn> <a${addAttribute(`${url2}${searchparamString}`, "href")}${addAttribute(currentLang === lang ? "active" : "", "class")} data-astro-cid-su6xvggn> ${lang.toUpperCase()} </a> </li>`)} </ul> </nav> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/LangSwitcher.astro", void 0);

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
      to: "clothing?category=military-and-survival"
    },
    {
      text: "Transportlösungen",
      to: "transportsolutions?category=protective-wall"
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
      to: "clothing?category=military-and-survival"
    },
    {
      text: "Transport Solutions",
      to: "transportsolutions?category=protective-wall"
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

const $$Astro$2 = createAstro("http://192.168.178.48:4321/");
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
  })} </div> </nav> ${renderScript($$result, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Navbar.astro", void 0);

const $$Astro$1 = createAstro("http://192.168.178.48:4321/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { languages, language } = Astro2.props;
  const links = navLinks[language];
  return renderTemplate`${maybeRenderHead()}<nav id="footer" data-astro-cid-sz7xmlte> <div class="nav-inner" data-astro-cid-sz7xmlte> <div class="logo-and-legal" data-astro-cid-sz7xmlte> <img${addAttribute(Logo.src, "src")} alt="" class="logo" loading="lazy" data-astro-cid-sz7xmlte> <div class="links legal" data-astro-cid-sz7xmlte> <a${addAttribute(`/${language}/legal/imprint`, "href")} data-astro-cid-sz7xmlte>${buttonTranslations("impressum", language)}</a> <a${addAttribute(`/${language}/legal/privacy`, "href")} data-astro-cid-sz7xmlte>${buttonTranslations("datenschutz", language)}</a> <a${addAttribute(`/${language}/legal/agbs`, "href")} data-astro-cid-sz7xmlte>${buttonTranslations("agbs", language)}</a> </div> </div> <div class="links" data-astro-cid-sz7xmlte> ${renderComponent($$result, "LangSwitcher", $$LangSwitcher, { "langs": languages, "data-astro-cid-sz7xmlte": true })} ${links.map((link) => {
    return renderTemplate`<a${addAttribute(`/${language}/${link.to}`, "href")} data-astro-cid-sz7xmlte>${link.text}</a>`;
  })} </div> <div class="langswitcher-and-contact" data-astro-cid-sz7xmlte> <div class="contact-data" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>+49 123456789</p> <p data-astro-cid-sz7xmlte>office@feuchter.com</p> <p data-astro-cid-sz7xmlte>Feuchter GmbH</p> <p data-astro-cid-sz7xmlte>Innbruckstraße 10</p> <p data-astro-cid-sz7xmlte>4780 Schärding AT</p> </div> </div> </div> </nav> `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Footer.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="login-form" data-astro-cid-b2fdlob7> <div class="form-inner" data-astro-cid-b2fdlob7> <img${addAttribute(Circles.src, "src")} alt="" data-astro-cid-b2fdlob7> <h1 data-astro-cid-b2fdlob7>Login</h1> <input type="password" name="password" id="password" placeholder="Passwort" data-astro-cid-b2fdlob7> <input type="submit" value="Anmelden" data-astro-cid-b2fdlob7> </div> </form> ${renderScript($$result, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Login.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/components/Login.astro", void 0);

const $$Astro = createAstro("http://192.168.178.48:4321/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { locals } = Astro2;
  const pageLanguage = locals.language;
  const languages = locals.languages;
  const { url } = Astro2.request;
  const searchParams = new URL(url).searchParams;
  const searchCategory = searchParams.get("category");
  let searchparamString = "";
  if (searchCategory) {
    searchparamString = `?category=${searchCategory}`;
  }
  return renderTemplate`<html${addAttribute(pageLanguage, "lang")} data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Feuchter GmbH - Bekleidungslösungen</title><meta name="description" content="Jakob Matuschek - Saxophonmusik aus dem Herzen Passau's"><link rel="canonical"${addAttribute(languages[0].url, "href")}>${languages.map(({ lang, url: url2 }) => renderTemplate`<link rel="alternate"${addAttribute(lang, "hreflang")}${addAttribute(`${url2}${searchparamString}`, "href")}>`)}<link rel="stylesheet" href="https://use.typekit.net/eff4wzj.css">${renderHead()}</head> <body id="body" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Login", $$Login, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "Navbar", $$Navbar, { "language": pageLanguage, "languages": languages, "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "language": pageLanguage, "languages": languages, "data-astro-cid-sckkx6r4": true })} ${renderScript($$result, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body></html>`;
}, "/home/felix/Desktop/feuchtergmbh_website/feuchter-gmbh/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Circles as C, buttonTranslations as b, translations as t };
