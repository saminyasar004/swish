# 🚀 Quick Start: Translate Any Page in 5 Minutes

## ✅ Your Header is Fixed!

**The Problem:**
```tsx
// ❌ WRONG - Line 746 in Header.tsx
const { t } = useTranslation(["navigation"]);
return <Link>{t("navigation.register-company")}</Link>;
```

**The Fix:**
```tsx
// ✅ CORRECT - Now fixed
const { t } = useTranslation("navigation");
return <Link>{t("register-company")}</Link>;
```

**Rule:** When namespace is specified in `useTranslation()`, don't prefix keys with namespace name!

---

## 📋 5-Minute Page Translation Recipe

### **Step 1: Create Translation File (2 min)**

Create `src/i18n/locales/en/[page-name].json`:

```json
{
  "page-title": "My Page Title",
  "section-1": {
    "heading": "Section Heading",
    "description": "Section description text",
    "button": "Click Here"
  },
  "form": {
    "name-label": "Name",
    "email-label": "Email",
    "submit": "Submit"
  }
}
```

**Copy this file to:**
- `ar/[page-name].json` - Replace with Arabic
- `fr/[page-name].json` - Replace with French

---

### **Step 2: Register Namespace (1 min)**

**A) Add to `config.ts`:**
```typescript
// src/i18n/config.ts (line 16)
ns: [
  "common", 
  "navigation", 
  "home", 
  "auth", 
  "jobs",
  "your-new-page" // ← Add here
],
```

**B) Add to `resources.ts`:**
```typescript
// src/i18n/resources.ts

// Import at top
import enYourPage from "./locales/en/your-new-page.json";
import arYourPage from "./locales/ar/your-new-page.json";
import frYourPage from "./locales/fr/your-new-page.json";

// Add to resources object
export const resources = {
  en: {
    // ... existing
    "your-new-page": enYourPage, // ← Add
  },
  ar: {
    // ... existing
    "your-new-page": arYourPage, // ← Add
  },
  fr: {
    // ... existing
    "your-new-page": frYourPage, // ← Add
  },
};
```

---

### **Step 3: Use in Component (2 min)**

```tsx
import { useTranslation } from "react-i18next";

export default function YourPage() {
  const { t } = useTranslation("your-new-page");

  return (
    <div>
      <h1>{t("page-title")}</h1>
      
      <section>
        <h2>{t("section-1.heading")}</h2>
        <p>{t("section-1.description")}</p>
        <button>{t("section-1.button")}</button>
      </section>

      <form>
        <label>{t("form.name-label")}</label>
        <input type="text" />
        
        <label>{t("form.email-label")}</label>
        <input type="email" />
        
        <button>{t("form.submit")}</button>
      </form>
    </div>
  );
}
```

---

## 🎯 Copy-Paste Templates

### **Template 1: Simple Page**

```json
{
  "page-title": "Page Title",
  "description": "Page description",
  "cta-button": "Call to Action"
}
```

### **Template 2: Form Page**

```json
{
  "page-title": "Form Title",
  "form": {
    "field-1": "Field Label 1",
    "field-2": "Field Label 2",
    "placeholder-1": "Enter value",
    "submit": "Submit",
    "cancel": "Cancel"
  },
  "validation": {
    "required": "This field is required",
    "invalid-email": "Invalid email address"
  },
  "success-message": "Form submitted successfully!"
}
```

### **Template 3: List/Table Page**

```json
{
  "page-title": "List Page",
  "filters": {
    "search-placeholder": "Search...",
    "sort-by": "Sort by",
    "filter-by": "Filter by"
  },
  "table": {
    "column-1": "Column 1",
    "column-2": "Column 2",
    "column-3": "Column 3",
    "no-data": "No data available"
  },
  "actions": {
    "view": "View",
    "edit": "Edit",
    "delete": "Delete"
  }
}
```

---

## 💡 Common Patterns

### **Pattern 1: With Variables**

```json
{
  "welcome": "Welcome {{name}}!",
  "items-count": "You have {{count}} items"
}
```

```tsx
<p>{t("welcome", { name: "John" })}</p>
<p>{t("items-count", { count: 5 })}</p>
```

### **Pattern 2: Pluralization**

```json
{
  "item": "{{count}} item",
  "item_plural": "{{count}} items"
}
```

```tsx
<p>{t("item", { count: 1 })}</p>  // "1 item"
<p>{t("item", { count: 5 })}</p>  // "5 items"
```

### **Pattern 3: Multiple Namespaces**

```tsx
// Use multiple namespaces
const { t } = useTranslation(["home", "common"]);

<h1>{t("page-title")}</h1>          // from home
<button>{t("common:submit")}</button> // from common (explicit)
```

### **Pattern 4: Shared Across Namespaces**

Put in `common.json` for reuse:

```json
// common.json
{
  "buttons": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete"
  },
  "messages": {
    "loading": "Loading...",
    "success": "Success!",
    "error": "Error occurred"
  }
}
```

```tsx
const { t: tCommon } = useTranslation("common");
<button>{tCommon("buttons.save")}</button>
```

---

## 🔍 Quick Debugging

### **Problem: Text not translating**

**Check these in order:**

1. ✅ **File created?** Check `src/i18n/locales/en/[name].json` exists
2. ✅ **Namespace added?** Check `config.ts` line 16
3. ✅ **Imported?** Check `resources.ts` has import and registration
4. ✅ **Correct key?** Check JSON file has the exact key
5. ✅ **No prefix?** Using `t("key")` not `t("namespace.key")`

### **Console Errors to Watch:**

```
Missing translation: en.navigation.home
```
**Solution:** Add `"home": "Home"` to `navigation.json`

```
Namespace 'profile' not found
```
**Solution:** Add `"profile"` to `config.ts` ns array

---

## 📊 Translation Status Tracker

Use this checklist for your app:

### **Core Pages:**
- [x] Header/Navigation - ✅ **DONE!**
- [ ] Home Page
- [ ] Login/Register
- [ ] Profile Page
- [ ] Job Posting Form
- [ ] Job Listings
- [ ] Categories Page
- [ ] Footer

### **For Each Page:**
- [ ] English (en) translations created
- [ ] Arabic (ar) translations created
- [ ] French (fr) translations created
- [ ] Namespace registered in config
- [ ] Files imported in resources
- [ ] Component updated to use `t()`
- [ ] Tested language switching
- [ ] No console warnings

---

## 🎨 Translation Key Naming Best Practices

### **✅ Good Names:**
```json
{
  "hero-title": "...",
  "search-placeholder": "...",
  "submit-button": "...",
  "error-message": "...",
  "user-profile-heading": "..."
}
```

### **❌ Bad Names:**
```json
{
  "text1": "...",
  "btn": "...",
  "msg": "...",
  "h1": "...",
  "thing": "..."
}
```

**Rules:**
- Use `kebab-case`
- Be descriptive
- Group related items
- Avoid abbreviations

---

## 🚦 Quick Test Checklist

After translating a page:

1. **Switch to English** - Does everything display correctly?
2. **Switch to Arabic** - Does text appear? Is RTL working?
3. **Switch to French** - All text translated?
4. **Check console** - Any missing translation warnings?
5. **Test interactions** - Buttons, forms work in all languages?

---

## 🔗 Need More Help?

- **Full Guide:** `/TRANSLATION_ORGANIZATION_GUIDE.md`
- **Arabic-Specific:** `/ARABIC_i18n_GUIDE.md`
- **Quick Reference:** `/ARABIC_CHEATSHEET.md`
- **Implementation Details:** `/I18N_IMPLEMENTATION_GUIDE.md`

---

## 🎉 You're Ready!

Your translation system is set up and working. Now just:

1. Pick a page to translate
2. Follow the 3-step recipe above
3. Test language switching
4. Move to next page

**Start with your Home page - it's the most visible!**
