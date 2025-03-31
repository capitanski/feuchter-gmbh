import { defineMiddleware } from "astro/middleware";
import langSwitcher from "./functions/langSwitcher";
import supportedLanguages from "./sitevariables/supportedlanguages";
export const onRequest = defineMiddleware(
  ({ context, locals, request, redirect }, next) => {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return next();
    }
    const pathSegments = url.pathname.split("/").filter(Boolean); // Zerlegt die URL
    //const supportedLanguages = ["de", "en", "fr", "cz"];
    const defaultLang = "de"; // Standard-Sprache
    //currentPath = currentPath.replace(/^\/(de|en|fr)/, "");
    const languages = langSwitcher(url.pathname);
    locals.languages = languages;
    // Falls die URL KEIN Sprachprefix hat (z. B. "/about"), redirecten
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
