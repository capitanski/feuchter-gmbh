export interface LangEntry {
  lang: string;
  url: string;
}
export interface AstroLocals {
  language: string;
  languages: LangEntry[];
}
export interface NavigationItem {
  text: string;
  to: string;
}

export interface TranslatedNavigation {
  de: NavigationItem[];
  en: NavigationItem[];
  fr: NavigationItem[];
  cs: NavigationItem[];
  nl: NavigationItem[];
}
