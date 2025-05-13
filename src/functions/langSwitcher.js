import supportedLanguages from "@/sitevariables/supportedlanguages";
const langSwitcher = function (currentPath) {
  // Change the base URL when publishing, otherwise the hreflang tags in layout
  // and the lang Switcher links will have wrong destiantions
  const baseURL = import.meta.env.SITE_URL || "https://feuchter-gmbh-kar6r.ondigitalocean.app";
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
    console.log(url)
    return { lang, url };
  });

  return final;
};

export default langSwitcher;
