import { format } from 'date-fns';
import { ar, enUS, fr } from 'date-fns/locale';

// Locale mapping
const locales = { en: enUS, ar, fr };

/**
 * Convert Western numerals to Eastern Arabic numerals
 * 0-9 → ٠-٩
 */
export const toArabicNumerals = (num: string | number): string => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num
    .toString()
    .split('')
    .map((digit) => (digit >= '0' && digit <= '9' ? arabicNumbers[parseInt(digit)] : digit))
    .join('');
};

/**
 * Format numbers according to locale
 */
export const formatNumber = (num: number, locale: string, useArabicNumerals = true): string => {
  const formatted = new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : locale).format(num);
  
  // Optionally convert to Arabic numerals for Arabic locale
  if (locale === 'ar' && useArabicNumerals) {
    return toArabicNumerals(formatted);
  }
  
  return formatted;
};

/**
 * Format currency according to locale
 */
export const formatCurrency = (
  amount: number,
  locale: string,
  currency: string = 'USD',
  useArabicNumerals = true
): string => {
  const formatted = new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : locale, {
    style: 'currency',
    currency,
  }).format(amount);

  if (locale === 'ar' && useArabicNumerals) {
    return toArabicNumerals(formatted);
  }

  return formatted;
};

/**
 * Format date according to locale
 */
export const formatDate = (
  date: Date,
  locale: string,
  formatStr: string = 'PPP'
): string => {
  const dateLocale = locales[locale as keyof typeof locales] || locales.en;
  return format(date, formatStr, { locale: dateLocale });
};

/**
 * Format relative time (e.g., "2 hours ago")
 */
export const formatRelativeTime = (date: Date, locale: string): string => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale === 'ar' ? 'ar-SA' : locale, {
    numeric: 'auto',
  });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
  }
};
