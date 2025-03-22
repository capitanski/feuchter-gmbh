// Jedes zu übersetzende Element sollte in seiner Definition (Quelle alias JS Object) einen Translationkey haben
// Oder die Translations direkt im Quell Objekt definieren, dann kann man sich diese Funktion hier sparen
export function translations(key, lang) {
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

export function buttonTranslations(text, lang) {
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
  }
  return returnValue;
}
