# 📚 Complete Translation Organization Guide

## 🐛 The Problem You Had

### ❌ **Wrong Usage:**
```tsx
const { t } = useTranslation(["navigation"]);
return <h1>{t("navigation.register-company")}</h1>;
```

### ✅ **Correct Usage:**
```tsx
const { t } = useTranslation("navigation");
return <h1>{t("register-company")}</h1>;
```

**Rule:** When you specify a namespace in `useTranslation()`, you DON'T need to prefix keys with the namespace name.

---

## 📋 Step-by-Step Translation Organization

### **Step 1: Plan Your Namespace Structure**

Organize translations by **feature/page**, not by type:

```
src/i18n/locales/
├── en/
│   ├── common.json          # Buttons, labels, errors (used everywhere)
│   ├── navigation.json      # Header, menu, navigation
│   ├── home.json           # Home page content
│   ├── auth.json           # Login, register, forgot password
│   ├── jobs.json           # Job posting, job listings
│   ├── profile.json        # User profile page
│   ├── categories.json     # Category listings
│   └── footer.json         # Footer content
├── ar/ (same structure)
└── fr/ (same structure)
```

---

### **Step 2: Define Translation Keys**

Use a **hierarchical structure** with descriptive names:

#### ✅ **Good Structure:**

```json
{
  "hero": {
    "title": "Get the job done!",
    "subtitle": "Describe the job and receive offers",
    "cta-button": "Post a Job"
  },
  "features": {
    "section-title": "Why Choose Us",
    "feature-1": {
      "title": "Free Service",
      "description": "No hidden fees"
    }
  }
}
```

#### ❌ **Bad Structure:**

```json
{
  "title1": "Get the job done!",
  "text2": "Describe the job",
  "btn3": "Post a Job"
}
```

---

### **Step 3: Create Translation Files for Each Page**

Let's translate your entire app page by page:

#### **3.1 Create `home.json`**

Create for all languages (en, ar, fr):

```json
// en/home.json
{
  "hero": {
    "title": "Get the job done!",
    "subtitle": "Describe the job and",
    "subtitle-bold": "receive offers from skilled professionals.",
    "subtitle-end": "Free and non-binding.",
    "search-placeholder": "What service do you need?",
    "all-categories": "All categories"
  },
  "search-business": {
    "title": "Search for a business",
    "description": "Find relevant companies near you quickly.",
    "search-button": "Search"
  },
  "how-it-works": {
    "title": "How it works",
    "step-1": {
      "title": "Post your job",
      "description": "Describe what you need done"
    },
    "step-2": {
      "title": "Get quotes",
      "description": "Receive offers from professionals"
    },
    "step-3": {
      "title": "Choose & hire",
      "description": "Select the best offer"
    }
  }
}
```

#### **3.2 Create `categories.json`**

```json
// en/categories.json
{
  "page-title": "Browse Categories",
  "all-categories": "All Categories",
  "construction": {
    "name": "Construction & Renovation",
    "description": "From architectural design to full construction",
    "subcategories": {
      "contractor": "General Contractor",
      "architect": "Architect",
      "engineer": "Civil Engineer"
    }
  },
  "trades": {
    "name": "Home repairs & Trades",
    "description": "Skilled craftsmanship for all your needs"
  }
}
```

#### **3.3 Create `profile.json`**

```json
// en/profile.json
{
  "page-title": "My Profile",
  "edit-profile": "Edit Profile",
  "personal-info": {
    "title": "Personal Information",
    "first-name": "First Name",
    "last-name": "Last Name",
    "email": "Email Address",
    "phone": "Phone Number"
  },
  "settings": {
    "title": "Settings",
    "notifications": "Email Notifications",
    "language": "Preferred Language",
    "timezone": "Time Zone"
  },
  "buttons": {
    "save": "Save Changes",
    "cancel": "Cancel",
    "delete-account": "Delete Account"
  }
}
```

---

### **Step 4: Update i18n Configuration**

Add all new namespaces to your config:

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
  ns: [
    "common",
    "navigation",
    "home",
    "auth",
    "jobs",
    "profile",
    "categories",
    "footer"
  ], // Add all namespaces here
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
};
```

---

### **Step 5: Update Resources File**

Import and register all translation files:

```typescript
// src/i18n/resources.ts
// English
import enCommon from "./locales/en/common.json";
import enNavigation from "./locales/en/navigation.json";
import enHome from "./locales/en/home.json";
import enAuth from "./locales/en/auth.json";
import enJobs from "./locales/en/jobs.json";
import enProfile from "./locales/en/profile.json";
import enCategories from "./locales/en/categories.json";
import enFooter from "./locales/en/footer.json";

// Arabic
import arCommon from "./locales/ar/common.json";
import arNavigation from "./locales/ar/navigation.json";
import arHome from "./locales/ar/home.json";
import arAuth from "./locales/ar/auth.json";
import arJobs from "./locales/ar/jobs.json";
import arProfile from "./locales/ar/profile.json";
import arCategories from "./locales/ar/categories.json";
import arFooter from "./locales/ar/footer.json";

// French
import frCommon from "./locales/fr/common.json";
import frNavigation from "./locales/fr/navigation.json";
import frHome from "./locales/fr/home.json";
import frAuth from "./locales/fr/auth.json";
import frJobs from "./locales/fr/jobs.json";
import frProfile from "./locales/fr/profile.json";
import frCategories from "./locales/fr/categories.json";
import frFooter from "./locales/fr/footer.json";

export const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
    home: enHome,
    auth: enAuth,
    jobs: enJobs,
    profile: enProfile,
    categories: enCategories,
    footer: enFooter,
  },
  ar: {
    common: arCommon,
    navigation: arNavigation,
    home: arHome,
    auth: arAuth,
    jobs: arJobs,
    profile: arProfile,
    categories: arCategories,
    footer: arFooter,
  },
  fr: {
    common: frCommon,
    navigation: frNavigation,
    home: frHome,
    auth: frAuth,
    jobs: frJobs,
    profile: frProfile,
    categories: frCategories,
    footer: frFooter,
  },
};
```

---

### **Step 6: Use Translations in Components**

#### **Pattern 1: Single Namespace**

```tsx
// HomePage.tsx
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation("home");

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <button>{t("hero.cta-button")}</button>
    </div>
  );
}
```

#### **Pattern 2: Multiple Namespaces**

```tsx
// HomePage.tsx
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div>
      <h1>{t("hero.title")}</h1> {/* from home */}
      <button>{t("common:submit")}</button> {/* from common */}
    </div>
  );
}
```

#### **Pattern 3: Separate Hook for Each Namespace**

```tsx
// Header.tsx
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t: tNav } = useTranslation("navigation");
  const { t: tCommon } = useTranslation("common");

  return (
    <header>
      <Link to="/">{tNav("home")}</Link>
      <Link to="/profile">{tNav("profile")}</Link>
      <button>{tCommon("submit")}</button>
    </header>
  );
}
```

---

### **Step 7: Translation Workflow - Page by Page**

#### **For Each Page:**

1. **Create JSON files** in en/ar/fr folders
2. **Add namespace** to `config.ts` and `resources.ts`
3. **Import useTranslation** in component
4. **Replace hardcoded text** with `t()` calls
5. **Test** language switching

#### **Example: Translating Profile Page**

**Step 1:** Create `profile.json` (shown in Step 3.3)

**Step 2:** Update config and resources (shown in Steps 4 & 5)

**Step 3:** Use in component:

```tsx
// ProfilePage.tsx - BEFORE
export default function ProfilePage() {
  return (
    <div>
      <h1>My Profile</h1>
      <label>First Name</label>
      <input type="text" />
      <button>Save Changes</button>
    </div>
  );
}

// ProfilePage.tsx - AFTER
import { useTranslation } from "react-i18next";

export default function ProfilePage() {
  const { t } = useTranslation("profile");

  return (
    <div>
      <h1>{t("page-title")}</h1>
      <label>{t("personal-info.first-name")}</label>
      <input type="text" />
      <button>{t("buttons.save")}</button>
    </div>
  );
}
```

---

## 🎯 **Quick Reference Cheat Sheet**

### **Common Patterns:**

```tsx
// ✅ Single namespace
const { t } = useTranslation("home");
<h1>{t("hero.title")}</h1>

// ✅ Multiple namespaces (access with prefix)
const { t } = useTranslation(["home", "common"]);
<h1>{t("hero.title")}</h1>        // from home (first/default)
<p>{t("common:error")}</p>        // explicit namespace

// ✅ Separate hooks
const { t: tHome } = useTranslation("home");
const { t: tCommon } = useTranslation("common");
<h1>{tHome("hero.title")}</h1>
<p>{tCommon("error")}</p>

// ❌ WRONG - Don't prefix when namespace is specified
const { t } = useTranslation("navigation");
<h1>{t("navigation.home")}</h1>   // ❌ WRONG!
<h1>{t("home")}</h1>               // ✅ CORRECT
```

### **With Variables:**

```tsx
const { t } = useTranslation("home");

// JSON: "welcome": "Welcome {{name}}!"
<p>{t("welcome", { name: "John" })}</p>

// JSON: "items": "{{count}} item", "items_plural": "{{count}} items"
<p>{t("items", { count: 5 })}</p>  // "5 items"
```

---

## 📝 **Page-by-Page Translation Checklist**

### **✅ For Each Page You Want to Translate:**

- [ ] **1. Identify all text** on the page (buttons, labels, paragraphs, etc.)
- [ ] **2. Create JSON structure** (hierarchical, descriptive keys)
- [ ] **3. Create translation files** (en, ar, fr)
- [ ] **4. Update config.ts** (add namespace to `ns` array)
- [ ] **5. Update resources.ts** (import and register)
- [ ] **6. Import useTranslation** in component
- [ ] **7. Replace hardcoded text** with `t()` calls
- [ ] **8. Test language switching** (check all 3 languages)
- [ ] **9. Check for missing keys** (look in console for warnings)

---

## 🚀 **Priority Translation Order**

Translate in this order for best UX:

1. **Navigation & Header** ✅ (Already done!)
2. **Home Page** (Most visible)
3. **Authentication** (Login, Register)
4. **Job Posting** (Core feature)
5. **Profile** (User-facing)
6. **Categories** (Browse experience)
7. **Footer** (Last priority)

---

## 🔍 **Debugging Translation Issues**

### **Problem: Translation not showing**

**Check:**
1. ✅ Namespace added to `config.ts` ns array?
2. ✅ Files imported in `resources.ts`?
3. ✅ Using correct key name? (check JSON file)
4. ✅ Using correct namespace in `useTranslation()`?
5. ✅ NOT prefixing with namespace name?

### **Console Warnings:**

```
Missing translation: en.navigation.home
```

**Solution:** Add `"home": "Home"` to `navigation.json`

---

## 💡 **Pro Tips**

### **1. Use Common Namespace for Shared Text**

```json
// common.json
{
  "buttons": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "edit": "Edit"
  },
  "messages": {
    "success": "Success!",
    "error": "An error occurred",
    "loading": "Loading..."
  }
}
```

### **2. Keep Keys Consistent Across Languages**

All language files must have the **same structure**:

```
en/home.json keys === ar/home.json keys === fr/home.json keys
```

### **3. Use Descriptive Key Names**

```json
// ❌ Bad
{ "txt1": "Hello", "btn2": "Click" }

// ✅ Good
{ "greeting": "Hello", "submit-button": "Click" }
```

### **4. Group Related Content**

```json
{
  "login-form": {
    "title": "Login",
    "email-label": "Email",
    "password-label": "Password",
    "submit-button": "Sign In",
    "forgot-password": "Forgot password?"
  }
}
```

---

## 📚 **Example: Full Page Translation**

### **Hero.tsx - Complete Example**

```tsx
// src/pages/home/Hero.tsx
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useRTL } from "@/hooks/useRTL";

export default function Hero() {
  const { t } = useTranslation("home");
  const { direction } = useRTL();

  return (
    <section dir={direction} className="hero-section">
      <h1 className="text-4xl font-bold">
        {t("hero.title")}
      </h1>
      
      <p className="text-lg">
        {t("hero.subtitle")} 
        <span className="font-semibold"> {t("hero.subtitle-bold")}</span> 
        {t("hero.subtitle-end")}
      </p>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder={t("hero.search-placeholder")}
        />
        <Button>{t("hero.cta-button")}</Button>
      </div>

      <div className="categories">
        <span>{t("hero.all-categories")}</span>
      </div>
    </section>
  );
}
```

---

## 🎉 **Summary**

### **Key Takeaways:**

1. **Don't prefix keys** with namespace when it's already in `useTranslation()`
2. **Organize by feature/page**, not by text type
3. **Keep structure consistent** across all languages
4. **Use descriptive key names** (kebab-case)
5. **Test each language** after translation
6. **Translate page by page** systematically

### **Your Header is Now Fixed!** ✅

The translations will now work correctly. Follow this guide to translate the rest of your pages!

---

**Need help translating a specific page? Follow Steps 1-9 from the checklist above!**
