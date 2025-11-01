// Static imports for better reliability
import enCommon from "./locales/en/common.json";
import enNavigation from "./locales/en/navigation.json";
import enHome from "./locales/en/home.json";
import enAuth from "./locales/en/auth.json";
import enJobs from "./locales/en/jobs.json";

import arCommon from "./locales/ar/common.json";
import arNavigation from "./locales/ar/navigation.json";
import arHome from "./locales/ar/home.json";
import arAuth from "./locales/ar/auth.json";
import arJobs from "./locales/ar/jobs.json";

import frCommon from "./locales/fr/common.json";
import frNavigation from "./locales/fr/navigation.json";
import frHome from "./locales/fr/home.json";
import frAuth from "./locales/fr/auth.json";
import frJobs from "./locales/fr/jobs.json";

export const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    auth: enAuth,
    jobs: enJobs,
  },
  ar: {
    common: arCommon,
    navigation: arNavigation,
    home: arHome,
    auth: arAuth,
    jobs: arJobs,
  },
  fr: {
    common: frCommon,
    navigation: frNavigation,
    home: frHome,
    auth: frAuth,
    jobs: frJobs,
  },
};
