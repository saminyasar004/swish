# Perfect Arabic Translation Guide

## 🎯 Overview

This guide covers best practices for handling Arabic translations smoothly and professionally in React applications.

## 🔄 RTL (Right-to-Left) Support

### 1. Automatic Direction Switching

```typescript
// Use the useRTL hook in your components
import { useRTL } from '@/hooks/useRTL';

const MyComponent = () => {
  const { isRTL, direction } = useRTL();
  
  return <div dir={direction}>{/* content */}</div>;
};
```

### 2. Document-Level RTL

The `useRTL` hook automatically sets:
- `document.documentElement.dir = 'rtl'`
- `document.documentElement.lang = 'ar'`
- `document.body.classList.add('rtl')`

## 🔢 Number & Currency Formatting

### Arabic Numerals

Arabic has two number systems:
- **Western Arabic**: 0-9 (commonly used)
- **Eastern Arabic**: ٠-٩ (traditional)

```typescript
import { formatNumber, formatCurrency, toArabicNumerals } from '@/utils/arabicFormatting';

// Format with locale
formatNumber(1234, 'ar');           // "١٬٢٣٤" (Eastern Arabic)
formatNumber(1234, 'ar', false);    // "1,234" (Western Arabic)

// Currency
formatCurrency(99.99, 'ar', 'USD'); // "٩٩٫٩٩ US$"
formatCurrency(99.99, 'ar', 'SAR'); // "٩٩٫٩٩ ر.س."

// Manual conversion
toArabicNumerals(123);              // "١٢٣"
```

### When to Use Each System

**Use Eastern Arabic Numerals (٠-٩) for:**
- Formal documents
- Government forms
- Traditional content
- Saudi Arabia, UAE, Qatar

**Use Western Arabic Numerals (0-9) for:**
- Technical content
- Prices (often)
- Egypt, Lebanon, North Africa
- Modern web apps (recommended)

## 📅 Date & Time Formatting

```typescript
import { formatDate, formatRelativeTime } from '@/utils/arabicFormatting';

const date = new Date('2025-01-15');

// Format with Arabic locale
formatDate(date, 'ar');              // "١٥ يناير ٢٠٢٥"
formatDate(date, 'ar', 'PP');        // "١٥ يناير ٢٠٢٥"
formatDate(date, 'ar', 'PPPP');      // "الأربعاء، ١٥ يناير ٢٠٢٥"

// Relative time
formatRelativeTime(new Date(), 'ar'); // "الآن"
```

## 🎨 Typography & Fonts

### Recommended Arabic Fonts

```css
/* Import in your global CSS */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

/* Or use system fonts */
font-family: 
  'Cairo',
  'Tajawal',
  'Noto Sans Arabic',
  'IBM Plex Sans Arabic',
  -apple-system,
  sans-serif;
```

### Line Height & Spacing

Arabic needs more vertical space:

```css
[dir="rtl"] {
  line-height: 2;        /* vs 1.5 for English */
  letter-spacing: normal; /* Don't add letter spacing */
}

[dir="rtl"] h1, h2, h3 {
  line-height: 1.8;
}
```

## 🔀 Bidirectional Text (Bidi)

### Mixed Arabic + English

```html
<!-- Use bidi-text class for automatic handling -->
<p class="bidi-text">
  مرحبا بك في SWISH Platform
</p>

<!-- Force direction for specific elements -->
<p>
  البريد الإلكتروني: <span dir="ltr">user@example.com</span>
</p>

<p>
  الموقع: <span dir="ltr">https://example.com</span>
</p>
```

### Numbers in Arabic Text

```html
<!-- Keep numbers LTR for readability -->
<p>
  السعر: <span dir="ltr" class="ltr-numbers">$99.99</span>
</p>
```

## 🖼️ Layout & Components

### Flexbox in RTL

```tsx
// Bad - manual reversal
<div className={isRTL ? 'flex-row-reverse' : 'flex-row'}>

// Good - automatic with Tailwind RTL plugin or CSS
<div className="flex">
  {/* Automatically reverses in RTL */}
</div>
```

### Padding & Margins

```tsx
// Use logical properties
<div className="ps-4 pe-2"> {/* padding-inline-start, padding-inline-end */}
<div className="ms-2 me-4"> {/* margin-inline-start, margin-inline-end */}

// Or use RTL CSS
[dir="rtl"] .pl-4 { padding-right: 1rem; padding-left: 0; }
```

### Icons That Should Flip

```tsx
const { isRTL } = useRTL();

// Directional icons should flip
<ChevronRight className={isRTL ? 'rtl-flip' : ''} />
<ArrowRight className={isRTL ? 'rtl-flip' : ''} />

// Symmetrical icons should NOT flip
<Settings /> {/* No flip needed */}
<Search />   {/* No flip needed */}
```

## 📝 Translation Best Practices

### 1. Context is Key

```json
{
  "open_verb": "افتح",
  "open_adjective": "مفتوح",
  "close_verb": "أغلق", 
  "close_adjective": "مغلق"
}
```

### 2. Formality Levels

Arabic has formal and informal modes:

```json
{
  "welcome_formal": "أهلاً وسهلاً بكم",
  "welcome_informal": "أهلاً بك",
  "you_formal": "حضرتك",
  "you_informal": "أنت"
}
```

**Recommendation:** Use formal Arabic (فصحى) for professional apps.

### 3. Pluralization

Arabic has complex plural rules:

```json
{
  "item": "عنصر واحد",           // 1 item
  "item_two": "عنصران",          // 2 items (dual)
  "item_few": "{{count}} عناصر", // 3-10 items
  "item_many": "{{count}} عنصرًا", // 11+ items
  "item_other": "{{count}} عنصر"
}
```

### 4. Gender Agreement

Nouns and verbs have gender in Arabic:

```json
{
  "welcome_male": "مرحباً بك",
  "welcome_female": "مرحباً بكِ",
  "saved_male": "تم الحفظ",
  "saved_female": "تمت الحفظ"
}
```

## 🎭 Common Components

### Form Inputs

```tsx
<div dir={direction}>
  <label className="block mb-2">
    {t('email')}
  </label>
  <input
    type="email"
    dir="ltr"  // Email is always LTR
    className="w-full"
  />
</div>
```

### Buttons with Icons

```tsx
<Button>
  {isRTL ? (
    <>
      {t('next')}
      <ChevronRight className="rtl-flip" />
    </>
  ) : (
    <>
      <ChevronLeft />
      {t('back')}
    </>
  )}
</Button>
```

### Breadcrumbs

```tsx
<nav dir={direction}>
  <ol className="flex">
    <li>{t('home')}</li>
    <li className="mx-2">{isRTL ? '←' : '→'}</li>
    <li>{t('products')}</li>
  </ol>
</nav>
```

## 🧪 Testing Checklist

- [ ] All text displays correctly in RTL
- [ ] Numbers are readable (LTR in RTL context)
- [ ] Icons flip appropriately
- [ ] Forms align correctly
- [ ] Navigation works as expected
- [ ] Dates format correctly
- [ ] Currency displays properly
- [ ] Spacing looks natural
- [ ] No text overflow
- [ ] Animations work in RTL

## 🚨 Common Mistakes to Avoid

### ❌ Don't Do This

```tsx
// Bad - Hardcoded direction
<div style={{ direction: 'rtl' }}>

// Bad - Manual text alignment
<p style={{ textAlign: 'right' }}>

// Bad - Absolute positioning without RTL consideration
<div className="left-0">

// Bad - Mixing numeral systems inconsistently
<p>السعر: ٩٩.99$</p> // Mixed Eastern/Western

// Bad - Splitting Arabic sentences
<p>{t('part1')} {t('part2')}</p>
```

### ✅ Do This Instead

```tsx
// Good - Use dir attribute
<div dir={direction}>

// Good - Use logical properties
<p className="text-start">

// Good - Use logical positioning
<div className="start-0">

// Good - Consistent numeral system
<p>السعر: <span dir="ltr">$99.99</span></p>

// Good - Complete sentences
<p>{t('fullSentence')}</p>
```

## 📦 Required Packages

```json
{
  "dependencies": {
    "i18next": "^23.x",
    "react-i18next": "^14.x",
    "i18next-browser-languagedetector": "^7.x",
    "date-fns": "^3.x"
  }
}
```

## 🎨 Tailwind CSS RTL Plugin

Install and configure:

```bash
npm install tailwindcss-rtl
```

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
```

Now you can use:
```tsx
<div className="ltr:ml-4 rtl:mr-4">
```

## 🌍 Regional Variations

### Arabic Dialects

Different regions prefer different styles:

**Gulf Arabic (Saudi, UAE, Qatar)**
- More formal classical Arabic
- Eastern Arabic numerals common
- Currency: SAR (ر.س), AED (د.إ)

**Levantine Arabic (Syria, Lebanon, Jordan)**
- Mix of formal and colloquial
- Western Arabic numerals
- Currency: LBP (ل.ل), JOD (د.أ)

**Egyptian Arabic**
- Western Arabic numerals
- More colloquial acceptable
- Currency: EGP (ج.م)

**North African Arabic (Morocco, Algeria)**
- French influence in tech terms
- Western Arabic numerals
- Often bilingual Arabic/French

**Recommendation:** Use Modern Standard Arabic (MSA/فصحى) for maximum reach.

## 💡 Pro Tips

1. **Test with Real Arabic Users**: Native speakers will catch nuances.

2. **Use Arabic-Native Libraries**: 
   - Hijri calendar support if needed
   - Arabic-specific validation

3. **Performance**: 
   - Arabic fonts can be large
   - Use font-display: swap
   - Consider font subsetting

4. **Accessibility**:
   - Screen readers work differently in Arabic
   - Test with NVDA/JAWS in Arabic mode

5. **SEO**:
   - Set `<html lang="ar">` and `dir="rtl"`
   - Use proper meta tags
   - Submit Arabic sitemap

## 📚 Resources

- [Arabic Typography Guide](https://ilovetypography.com/2010/03/18/arabic-typography/)
- [Google Fonts - Arabic](https://fonts.google.com/?subset=arabic)
- [MDN - dir attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
- [W3C - RTL Guidelines](https://www.w3.org/International/questions/qa-html-dir)

---

**Remember:** Great Arabic support goes beyond translation—it requires cultural understanding and technical precision!
