// src/i18n/config.ts
import { resources } from "./resources";

export const i18nConfig = {
  fallbackLng: "en",
  lng: "en", // Set default language explicitly
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // React handles escaping
  },
  detection: {
    order: ["navigator", "htmlTag", "path", "subdomain"],
    caches: ["cookie"],
  },
  resources, // Use static resources instead of HTTP backend
  ns: ["common", "navigation", "home", "auth", "jobs"], // Multiple namespaces
  // defaultNS: "common",
  react: {
    useSuspense: false, // Disable suspense to prevent suspension errors
  },
  // Add some debugging
  saveMissing: process.env.NODE_ENV === "development",
  missingKeyHandler: (lng, ns, key) => {
    console.warn(`Missing translation: ${lng}.${ns}.${key}`);
  },
};

export default i18nConfig;
