const langChecker = function (langParam) {
  const supportedLanguages = ["en"]; // Alle Sprachen außer "de", weil "de" Standard ist
  const lang = langParam ?? "de";
  const language = supportedLanguages.includes(lang) ? lang : "de";
  return language;
};

export default langChecker;
