import { d as defineMiddleware, s as sequence } from './chunks/index_CJF4I_6v.mjs';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Usz6dny8.mjs';
import 'kleur/colors';
import './chunks/astro/server_C55uJX-_.mjs';
import 'clsx';
import 'cookie';

const supportedLanguages = ["de", "en"];

const langSwitcher = function (currentPath) {
  // Change the base URL when publishing, otherwise the hreflang tags in layout
  // and the lang Switcher links will have wrong destiantions
  const baseURL = "http://localhost:4321";
  // This function implements the language switching function
  // By clicking one of the Links it changes the language and stays on the same site
  // Returns an array of objects containing the current path and lang url-segment
  // to render the hreflang tags in the layout
  //const supportedLanguages = ["de", "en", "fr", "cz"]; // DE muss als erstes stehen, weil das die Canonical URL bildet
  currentPath = currentPath.split("/").filter(Boolean);
  //currentPath = currentPath.replace(/^\/(de|en|fr)/, "");
  currentPath.shift();
  currentPath = currentPath.join("/");
  const final = supportedLanguages.map((lang) => {
    const url = `${baseURL}/${lang}/${currentPath}`;
    return { lang, url };
  });

  return final;
};

function auth(cookies, redirect) {
    const token = cookies.get('accessToken')?.value;
    console.log(token);
    if (!token) throw new Error("bad token")
}

const onRequest$1 = defineMiddleware(
  ({ context, locals, request, redirect, cookies }, next) => {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return next();
    }
    if (!url.pathname.includes("login")) {
      try {
        auth(cookies, redirect);
      } catch (e) {
        return redirect("/login")
      }
    }

    const pathSegments = url.pathname.split("/").filter(Boolean); // Zerlegt die URL
    //const supportedLanguages = ["de", "en", "fr", "cz"];
    const defaultLang = "de"; // Standard-Sprache
    //currentPath = currentPath.replace(/^\/(de|en|fr)/, "");
    const languages = langSwitcher(url.pathname);
    locals.languages = languages;
    // Falls die URL KEIN Sprachprefix hat (z. B. "/about"), redirecten
    console.log('redirect in middleware');
    if (!supportedLanguages.includes(pathSegments[0])) {
      locals.language = defaultLang;
      return new Response(null, {
        status: 301,
        headers: { Location: `/${defaultLang}${url.pathname}` },
      });
    }
    locals.language = pathSegments[0];
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
