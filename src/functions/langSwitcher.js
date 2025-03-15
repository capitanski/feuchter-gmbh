const langSwitcher = function (currentPath) {
  // This function implements the language switching function
  // By clicking one of the Links it changes the language and stays on the same site
  // Returns an array of object containing the current path and lang url-segment
  // to render the hreflang tags in the layout
  const supportedLanguages = ["de", "en"];
  currentPath = currentPath.replace(/^\/(en|fr)/, "");
  const final = supportedLanguages.map((lang) => {
    const url = lang === "de" ? currentPath || "/" : `/${lang}${currentPath}`;
    return { lang, url };
  });
  return final;
};

export default langSwitcher;
