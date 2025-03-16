import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(
  ({ locals, request, redirect }, next) => {
    const url = new URL(request.url);
    const pathSegments = url.pathname.split("/").filter(Boolean); // Zerlegt die URL
    const supportedLanguages = ["de", "en", "fr"];
    const defaultLang = "de"; // Standard-Sprache
    //currentPath = currentPath.replace(/^\/(de|en|fr)/, "");

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
