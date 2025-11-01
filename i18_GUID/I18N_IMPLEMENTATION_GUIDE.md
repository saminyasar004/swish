# Professional i18n Implementation Guide

## 🎯 Overview

This guide provides a step-by-step approach to implementing internationalization (i18n) in your React application professionally.

## 📁 Project Structure

```
src/
├── i18n/
│   ├── config.ts          # i18n configuration
│   ├── index.ts           # i18n initialization
│   ├── resources.ts        # Static resource imports
│   └── locales/
│       ├── en/
│       │   └── common.json # English translations
│       ├── ar/
│       │   └── common.json # Arabic translations
│       └── fr/
│           └── common.json # French translations
├── components/
│   └── LanguageSwitcher.tsx # Language switching component
└── pages/
    └── home/
        ├── Hero.tsx        # Example: Translated component
        └── SearchBusiness.tsx
```

## 🚀 Step-by-Step Implementation

### Step 1: Setup i18n Configuration

#### 1.1 Create i18n config (`src/i18n/config.ts`)

```typescript
import { resources } from "./resources";

export const i18nConfig = {
  fallbackLng: "en",
  lng: "en",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ["navigator", "htmlTag", "path", "subdomain"],
    caches: ["cookie"],
  },
  resources, // Static resources
  ns: ["common"],
  defaultNS: "common",
  react: {
    useSuspense: false, // Prevents suspension errors
  },
};
```

#### 1.2 Create resources file (`src/i18n/resources.ts`)

```typescript
import enCommon from "../i18n/locales/en/common.json";
import arCommon from "../i18n/locales/ar/common.json";
import frCommon from "../i18n/locales/fr/common.json";

export const resources = {
  en: { common: enCommon },
  ar: { common: arCommon },
  fr: { common: frCommon },
};
```

#### 1.3 Initialize i18n (`src/i18n/index.ts`)

```typescript
import i18n from "i18next";
import { i18nConfig } from "./config";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init(i18nConfig);

export default i18n;
```

### Step 2: Setup App Structure

#### 2.1 Update App.tsx

```typescript
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import i18n from "./i18n/index";

const App = () => (
  <I18nextProvider i18n={i18n}>
    <MantineProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Suspense fallback={<div>Loading translations...</div>}>
                <RouterProvider router={router} />
              </Suspense>
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </I18nextProvider>
);
```

### Step 3: Create Translation Files

#### 3.1 English translations (`src/i18n/locales/en/common.json`)

```json
{
  "hero": {
    "title": "Get the job done!",
    "subtitle": "Describe the job and",
    "subtitle-bold": "receive offers from skilled professionals.",
    "subtitle-end": "Free and non-binding.",
    "all-categories": "All categories"
  },
  "search-business": {
    "title": "Search for a business",
    "description": "If you want to quickly find some relevant companies near you, you can search directly here."
  }
}
```

#### 3.2 Arabic translations (`src/i18n/locales/ar/common.json`)

```json
{
  "hero": {
    "title": "أنجز المهمة!",
    "subtitle": "اوصف المهمة و",
    "subtitle-bold": "احصل على عروض من المحترفين المهرة.",
    "subtitle-end": "مجاني وغير ملزم.",
    "all-categories": "جميع الفئات"
  },
  "search-business": {
    "title": "البحث عن شركة",
    "description": "إذا كنت تريد العثور بسرعة على بعض الشركات ذات الصلة بالقرب منك، يمكنك البحث مباشرة هنا."
  }
}
```

#### 3.3 French translations (`src/i18n/locales/fr/common.json`)

```json
{
  "hero": {
    "title": "Faites le travail !",
    "subtitle": "Décrivez le travail et",
    "subtitle-bold": "recevez des offres de professionnels qualifiés.",
    "subtitle-end": "Gratuit et sans engagement.",
    "all-categories": "Toutes les catégories"
  },
  "search-business": {
    "title": "Rechercher une entreprise",
    "description": "Si vous voulez trouver rapidement des entreprises pertinentes près de chez vous, vous pouvez rechercher directement ici."
  }
}
```

### Step 4: Create Language Switcher

#### 4.1 Language Switcher Component (`src/components/LanguageSwitcher.tsx`)

```typescript
import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <Button
        variant={i18n.language === "en" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("en")}
      >
        English
      </Button>
      <Button
        variant={i18n.language === "ar" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("ar")}
      >
        العربية
      </Button>
      <Button
        variant={i18n.language === "fr" ? "default" : "outline"}
        size="sm"
        onClick={() => changeLanguage("fr")}
      >
        Français
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
```

### Step 5: Use Translations in Components

#### 5.1 Basic Usage

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
    </div>
  );
};
```

#### 5.2 Advanced Usage with Variables

```typescript
const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t("companies-contacted", { count: 5 })}</p>
      <p>{t("posted", { date: new Date().toLocaleDateString() })}</p>
    </div>
  );
};
```

#### 5.3 Nested Object Access

```typescript
const Hero = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>
        {t("hero.subtitle")}{" "}
        <span className="font-semibold">{t("hero.subtitle-bold")} </span>
        {t("hero.subtitle-end")}
      </p>
    </div>
  );
};
```

## 🛠️ Professional Best Practices

### 1. Translation Key Naming Convention

```json
{
  "section": {
    "subsection": {
      "key": "value"
    }
  }
}
```

**Examples:**

- `hero.title` - Hero section title
- `search-business.description` - Search business description
- `process.step1.title` - Process step 1 title

### 2. Translation File Organization

```json
{
  "common": {
    "buttons": {
      "submit": "Submit",
      "cancel": "Cancel"
    },
    "messages": {
      "success": "Success!",
      "error": "Error occurred"
    }
  },
  "pages": {
    "home": {
      "hero": { ... },
      "features": { ... }
    },
    "about": {
      "title": "About Us"
    }
  }
}
```

### 3. Variable Interpolation

```json
{
  "welcome": "Welcome {{name}}!",
  "items-count": "You have {{count}} items",
  "date-posted": "Posted on {{date}}"
}
```

```typescript
// Usage
t("welcome", { name: "John" });
t("items-count", { count: 5 });
t("date-posted", { date: new Date().toLocaleDateString() });
```

### 4. Pluralization

```json
{
  "items": "{{count}} item",
  "items_plural": "{{count}} items"
}
```

### 5. Context and Namespace Usage

```typescript
// Using different namespaces
const { t } = useTranslation(["common", "home"]);

// Access specific namespace
t("common:buttons.submit");
t("home:hero.title");
```

## 🔧 Advanced Features

### 1. Language Detection

```typescript
// Auto-detect user's browser language
detection: {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  caches: ["cookie"],
}
```

### 2. Fallback Language

```typescript
// If translation is missing, fallback to English
fallbackLng: "en";
```

### 3. Debug Mode

```typescript
// Enable debug logs in development
debug: process.env.NODE_ENV === "development";
```

### 4. Language Persistence

```typescript
// Save language preference in cookies
detection: {
  caches: ["cookie"],
}
```

## 📝 Implementation Checklist

### ✅ Setup Phase

- [ ] Install i18n dependencies
- [ ] Create i18n configuration
- [ ] Setup static resource imports
- [ ] Initialize i18n in App.tsx
- [ ] Add Suspense boundary

### ✅ Translation Phase

- [ ] Create translation files for all languages
- [ ] Organize translations by sections
- [ ] Use consistent naming conventions
- [ ] Add variable interpolation where needed

### ✅ Component Phase

- [ ] Import useTranslation hook
- [ ] Replace hardcoded text with t() calls
- [ ] Test all language switches
- [ ] Verify translations display correctly

### ✅ Testing Phase

- [ ] Test language switching
- [ ] Verify fallback language works
- [ ] Check for missing translations
- [ ] Test variable interpolation
- [ ] Verify responsive design in all languages

## 🚨 Common Issues & Solutions

### Issue 1: Suspension Errors

**Problem:** React suspension errors during i18n loading
**Solution:** Set `useSuspense: false` in i18n config

### Issue 2: Missing Translations

**Problem:** Translation keys not found
**Solution:** Check key names and ensure they exist in all language files

### Issue 3: Build Errors

**Problem:** Import errors for translation files
**Solution:** Use static imports instead of HTTP backend

### Issue 4: Language Not Persisting

**Problem:** Language resets on page refresh
**Solution:** Enable cookie caching in detection config

## 🎯 Next Steps

1. **Add more sections:** Apply the same pattern to other pages
2. **Add more languages:** Create new locale files for additional languages
3. **Add RTL support:** Implement right-to-left layout for Arabic
4. **Add date/number formatting:** Use i18n for localized date and number formats
5. **Add pluralization:** Implement proper plural forms for different languages

## 📚 Resources

- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Documentation](https://www.i18next.com/)
- [Translation Best Practices](https://www.i18next.com/translation-function/essentials)

---

**Remember:** Always test your translations thoroughly and consider cultural differences when translating content!
