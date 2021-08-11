import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_VI } from "./vi";
import { TRANSLATIONS_ZH } from "./zh";
import { TRANSLATIONS_EN } from "./en";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      zh: {
        translation: TRANSLATIONS_ZH,
      },
      vi: {
        translation: TRANSLATIONS_VI,
      },
    },
  });

i18n.changeLanguage("zh");
