// src/i18n/index.ts
import i18n from "i18next";
import { i18nConfig } from "./config";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize i18n with static resources
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)
  .then(() => {
    console.log("i18n initialized successfully");
    console.log("Available languages:", i18n.languages);
    console.log("Current language:", i18n.language);
    console.log("Available namespaces:", i18n.options.ns);
  })
  .catch((error) => {
    console.error("i18n initialization failed:", error);
  });

export default i18n;
