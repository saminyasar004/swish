# Modular i18n Implementation Guide

## 🎯 Overview

This guide shows how to implement a modular i18n structure for large projects, organizing translations into separate files by functionality/section.

## 📁 Modular Structure

```
src/i18n/locales/
├── en/
│   ├── common.json      # Common UI elements (buttons, labels, etc.)
│   ├── navigation.json  # Navigation menu items
│   ├── home.json       # Home page content
│   ├── auth.json       # Authentication pages
│   └── jobs.json       # Job-related content
├── ar/
│   ├── common.json
│   ├── navigation.json
│   ├── home.json
│   ├── auth.json
│   └── jobs.json
└── fr/
    ├── common.json
    ├── navigation.json
    ├── home.json
    ├── auth.json
    └── jobs.json
```

## 🚀 Implementation Steps

### Step 1: Create Namespace Files

#### Common (common.json)

```json
{
  "loading": "Loading...",
  "error": "Error",
  "success": "Success",
  "cancel": "Cancel",
  "save": "Save",
  "submit": "Submit",
  "required": "Required",
  "optional": "Optional"
}
```

#### Navigation (navigation.json)

```json
{
  "home": "Home",
  "login": "Log in",
  "logout": "Log out",
  "register-company": "Register company",
  "post-job": "Post a job",
  "language": "Language"
}
```

#### Home (home.json)

```json
{
  "hero": {
    "title": "Get the job done!",
    "subtitle": "Describe the job and",
    "subtitle-bold": "receive offers from skilled professionals."
  },
  "features": {
    "title": "Why Choose Us",
    "feature1": {
      "title": "Free Service",
      "description": "No hidden fees or charges"
    }
  }
}
```

#### Auth (auth.json)

```json
{
  "login": {
    "title": "Welcome back",
    "email": "Email address",
    "password": "Password",
    "sign-in": "Sign in"
  },
  "register": {
    "title": "Create account",
    "first-name": "First name",
    "create-account": "Create account"
  }
}
```

#### Jobs (jobs.json)

```json
{
  "my-jobs": "My jobs",
  "active-tab": "Active",
  "completed-tab": "Completed",
  "post-job": {
    "title": "Post a new job",
    "job-title": "Job title",
    "description": "Job description"
  }
}
```

### Step 2: Update Resources File

```typescript
// src/i18n/resources.ts
import enCommon from "../i18n/locales/en/common.json";
import enNavigation from "../i18n/locales/en/navigation.json";
import enHome from "../i18n/locales/en/home.json";
import enAuth from "../i18n/locales/en/auth.json";
import enJobs from "../i18n/locales/en/jobs.json";

// Import for all languages...
import arCommon from "../i18n/locales/ar/common.json";
// ... etc

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
```

### Step 3: Update i18n Configuration

```typescript
// src/i18n/config.ts
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
  resources,
  ns: ["common", "navigation", "home", "auth", "jobs"], // Multiple namespaces
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
};
```

## 🛠️ Usage Patterns

### Pattern 1: Single Namespace

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation("home");

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
    </div>
  );
};
```

### Pattern 2: Multiple Namespaces

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation(["common", "home", "auth"]);

  return (
    <div>
      <h1>{t("hero.title")}</h1> {/* from home namespace */}
      <button>{t("submit")}</button> {/* from common namespace */}
      <p>{t("login.title")}</p> {/* from auth namespace */}
    </div>
  );
};
```

### Pattern 3: Specific Namespace Access

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("home:hero.title")}</h1> {/* Explicit namespace */}
      <p>{t("auth:login.title")}</p> {/* Explicit namespace */}
    </div>
  );
};
```

### Pattern 4: Multiple Translation Hooks

```typescript
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t: tCommon } = useTranslation("common");
  const { t: tHome } = useTranslation("home");
  const { t: tAuth } = useTranslation("auth");

  return (
    <div>
      <h1>{tHome("hero.title")}</h1>
      <button>{tCommon("submit")}</button>
      <p>{tAuth("login.title")}</p>
    </div>
  );
};
```

## 📋 Best Practices

### 1. File Organization

```
src/i18n/locales/
├── en/
│   ├── common.json      # UI elements, buttons, labels
│   ├── navigation.json  # Menu items, navigation
│   ├── home.json       # Home page content
│   ├── auth.json       # Login, register, auth
│   ├── jobs.json       # Job posting, job details
│   ├── profile.json    # User profile
│   ├── company.json    # Company-related content
│   └── messages.json   # Success/error messages
```

### 2. Naming Conventions

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

- `home.hero.title` - Home page hero title
- `auth.login.email` - Auth login email field
- `jobs.post-job.title` - Jobs post job title
- `navigation.home` - Navigation home link

### 3. Component-Specific Usage

```typescript
// Header component - uses navigation namespace
const Header = () => {
  const { t } = useTranslation(["common", "navigation"]);
  return <nav>{t("home")}</nav>;
};

// Home page - uses home namespace
const HomePage = () => {
  const { t } = useTranslation(["common", "home"]);
  return <h1>{t("hero.title")}</h1>;
};

// Auth page - uses auth namespace
const LoginPage = () => {
  const { t } = useTranslation(["common", "auth"]);
  return <h1>{t("login.title")}</h1>;
};
```

### 4. Variable Interpolation

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

## 🔧 Advanced Features

### 1. Lazy Loading Namespaces

```typescript
// Load namespaces on demand
const { t } = useTranslation(["common", "home"], {
  lng: "en",
  fallbackLng: "en",
  ns: ["common", "home"],
});
```

### 2. Namespace-Specific Fallbacks

```typescript
// If translation is missing in 'home', fallback to 'common'
const { t } = useTranslation(["common", "home"], {
  fallbackNS: "common",
});
```

### 3. Dynamic Namespace Loading

```typescript
// Load namespace dynamically
const loadNamespace = async (namespace: string) => {
  await i18n.loadNamespaces(namespace);
};

// Usage
useEffect(() => {
  loadNamespace("jobs");
}, []);
```

## 📝 Migration from Single File

### Before (Single File)

```typescript
// All translations in one file
const { t } = useTranslation("common");
return <h1>{t("hero.title")}</h1>;
```

### After (Modular)

```typescript
// Specific namespace
const { t } = useTranslation("home");
return <h1>{t("hero.title")}</h1>;

// Or multiple namespaces
const { t } = useTranslation(["common", "home"]);
return <h1>{t("hero.title")}</h1>;
```

## 🎯 Benefits of Modular Approach

### 1. **Better Organization**

- Each section has its own file
- Easier to find and manage translations
- Clear separation of concerns

### 2. **Team Collaboration**

- Different team members can work on different sections
- Reduces merge conflicts
- Easier code reviews

### 3. **Performance**

- Only load needed namespaces
- Smaller bundle sizes
- Better caching

### 4. **Maintainability**

- Easier to update specific sections
- Clear ownership
- Better testing and debugging

### 5. **Scalability**

- Easy to add new sections
- Modular structure grows with project
- Reusable across different projects

## 🚨 Common Issues & Solutions

### Issue 1: Namespace Not Found

**Problem:** `Namespace 'home' not found`
**Solution:** Ensure namespace is included in `ns` array in config

### Issue 2: Translation Key Not Found

**Problem:** `Key 'hero.title' not found in namespace 'home'`
**Solution:** Check if key exists in the correct namespace file

### Issue 3: Multiple Namespace Conflicts

**Problem:** Same key in multiple namespaces
**Solution:** Use explicit namespace access: `t('home:hero.title')`

### Issue 4: Build Errors

**Problem:** Import errors for translation files
**Solution:** Ensure all files exist and imports are correct

## 📚 File Structure Summary

```
src/i18n/
├── config.ts           # i18n configuration
├── index.ts            # i18n initialization
├── resources.ts        # Resource imports
└── locales/
    ├── en/
    │   ├── common.json
    │   ├── navigation.json
    │   ├── home.json
    │   ├── auth.json
    │   └── jobs.json
    ├── ar/
    │   ├── common.json
    │   ├── navigation.json
    │   ├── home.json
    │   ├── auth.json
    │   └── jobs.json
    └── fr/
        ├── common.json
        ├── navigation.json
        ├── home.json
        ├── auth.json
        └── jobs.json
```

## 🎉 Ready to Use!

Your modular i18n setup is now complete and ready for production use. Each section can be managed independently while maintaining consistency across your application.

---

**Remember:** Always test your translations thoroughly and consider the modular structure when adding new features!
