# Arabic i18n Quick Reference

## 🚀 Quick Setup

```tsx
// 1. Import RTL hook
import { useRTL } from '@/hooks/useRTL';

// 2. Use in component
const { isRTL, direction } = useRTL();

// 3. Apply to container
<div dir={direction}>{/* content */}</div>
```

## 📝 Common Patterns

### Text Display
```tsx
// Simple text
<h1>{t('title')}</h1>

// With variables
<p>{t('welcome', { name: 'أحمد' })}</p>

// Mixed content (Arabic + English)
<p className="bidi-text">{t('mixedText')}</p>
```

### Numbers & Currency
```tsx
import { formatNumber, formatCurrency } from '@/utils/arabicFormatting';

// Numbers
formatNumber(1234, 'ar')           // "١٬٢٣٤"
formatNumber(1234, 'ar', false)    // "1,234"

// Currency
formatCurrency(99.99, 'ar', 'SAR') // "٩٩٫٩٩ ر.س."
```

### Dates
```tsx
import { formatDate } from '@/utils/arabicFormatting';

formatDate(new Date(), 'ar')       // "٢٧ أكتوبر ٢٠٢٥"
```

### Forms
```tsx
<input 
  type="email"
  dir="ltr"           // Always LTR for email
  placeholder={t('email')}
/>

<input
  type="text"
  dir={direction}     // Follows language direction
  placeholder={t('name')}
/>
```

### Buttons with Icons
```tsx
<button className="flex items-center gap-2">
  {!isRTL && <ChevronLeft />}
  {t('back')}
  {isRTL && <ChevronLeft className="rtl-flip" />}
</button>
```

### Lists
```tsx
<ul 
  className="list-disc"
  style={{ 
    paddingInlineStart: '1.5rem',
    textAlign: isRTL ? 'right' : 'left'
  }}
>
  <li>{t('item1')}</li>
  <li>{t('item2')}</li>
</ul>
```

## 🎨 Styling

### Logical Properties (Recommended)
```css
/* Use instead of left/right */
padding-inline-start: 1rem;  /* replaces padding-left */
padding-inline-end: 1rem;    /* replaces padding-right */
margin-inline-start: 1rem;   /* replaces margin-left */
margin-inline-end: 1rem;     /* replaces margin-right */

/* Use instead of text-align left/right */
text-align: start;           /* replaces text-align: left */
text-align: end;             /* replaces text-align: right */
```

### RTL-Specific Classes
```tsx
<div className={isRTL ? 'rtl-flip' : ''}>   // Flip icons
<div className="ltr-numbers">              // Force LTR for numbers
<div className="bidi-text">                // Auto bidi handling
```

## 🔤 Typography

### Font Family
```css
font-family: 'Cairo', 'Tajawal', 'Noto Sans Arabic', sans-serif;
```

### Line Height
```css
[dir="rtl"] {
  line-height: 2;      /* More than English (1.5) */
}
```

## 🔢 Numeral Systems

| Western | Eastern Arabic |
|---------|---------------|
| 0       | ٠             |
| 1       | ١             |
| 2       | ٢             |
| 3       | ٣             |
| 4       | ٤             |
| 5       | ٥             |
| 6       | ٦             |
| 7       | ٧             |
| 8       | ٨             |
| 9       | ٩             |

**Usage:**
- Western: Modern apps, Egypt, North Africa
- Eastern: Saudi Arabia, UAE, formal documents

## 📋 JSON Translation Structure

```json
{
  "hero": {
    "title": "احصل على الوظيفة المناسبة!",
    "subtitle": "اوصف الوظيفة واحصل على عروض"
  },
  "welcome": "مرحباً {{name}}",
  "items": "{{count}} عنصر",
  "items_two": "عنصران",
  "items_few": "{{count}} عناصر",
  "items_many": "{{count}} عنصرًا"
}
```

## 🛠️ Utility Functions

```tsx
// Check if RTL
const isRTL = i18n.language === 'ar';

// Get direction
const dir = isRTL ? 'rtl' : 'ltr';

// Format number
const num = formatNumber(1234, i18n.language);

// Format currency
const price = formatCurrency(99.99, i18n.language, 'SAR');

// Format date
const date = formatDate(new Date(), i18n.language);
```

## ⚠️ Common Gotchas

### ❌ Don't
```tsx
<div style={{ direction: 'rtl' }}>           // Use dir attribute
<div className="text-right">                 // Use text-start/end
<p>البريد: user@example.com</p>              // No dir on email
{t('part1')} {t('part2')}                    // Don't split sentences
```

### ✅ Do
```tsx
<div dir="rtl">
<div className="text-start">
<p>البريد: <span dir="ltr">user@example.com</span></p>
{t('fullSentence')}
```

## 🎯 Testing Checklist

- [ ] Text aligns correctly (right for Arabic)
- [ ] Numbers display consistently
- [ ] Icons flip where needed
- [ ] Forms work properly
- [ ] Navigation feels natural
- [ ] Dates/currency format correctly
- [ ] No text overflow
- [ ] Smooth language switching
- [ ] Bidirectional text handles properly
- [ ] Fonts render clearly

## 📦 Installation

```bash
# Already installed in your project
npm install i18next react-i18next i18next-browser-languagedetector date-fns
```

## 🔗 Quick Links

- Main Guide: `/ARABIC_i18n_GUIDE.md`
- Modular i18n: `/MODULAR_I18N_GUIDE.md`
- Implementation: `/I18N_IMPLEMENTATION_GUIDE.md`

## 💡 Pro Tips

1. **Always test with real Arabic text** - Lorem ipsum doesn't show RTL issues
2. **Use Eastern numerals for Gulf region** - Western for others
3. **Keep emails/URLs LTR** - Always use `dir="ltr"`
4. **Don't flip symmetrical icons** - Only directional ones
5. **Increase line height** - Arabic needs more vertical space

---

**Quick Start:** Import `useRTL` hook → Add `dir={direction}` → Format numbers/dates → Test!
