/**
 * Utility functions for testing Arabic translation quality
 */

type TranslationValue = string | Record<string, unknown>;
type TranslationObject = Record<string, TranslationValue>;

/**
 * Check if translation keys are synchronized across all languages
 */
export const checkTranslationSync = (
  en: TranslationObject,
  ar: TranslationObject,
  fr: TranslationObject,
  path: string = ''
): string[] => {
  const issues: string[] = [];

  const getAllKeys = (obj: Record<string, unknown>, prefix: string = ''): string[] => {
    const keys: string[] = [];
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        keys.push(...getAllKeys(value as Record<string, unknown>, fullKey));
      } else {
        keys.push(fullKey);
      }
    }
    return keys;
  };

  const enKeys = new Set(getAllKeys(en));
  const arKeys = new Set(getAllKeys(ar));
  const frKeys = new Set(getAllKeys(fr));

  // Check for missing keys
  enKeys.forEach((key) => {
    if (!arKeys.has(key)) {
      issues.push(`Missing in Arabic: ${key}`);
    }
    if (!frKeys.has(key)) {
      issues.push(`Missing in French: ${key}`);
    }
  });

  arKeys.forEach((key) => {
    if (!enKeys.has(key)) {
      issues.push(`Extra in Arabic (not in English): ${key}`);
    }
  });

  frKeys.forEach((key) => {
    if (!enKeys.has(key)) {
      issues.push(`Extra in French (not in English): ${key}`);
    }
  });

  return issues;
};

/**
 * Validate Arabic text quality
 */
export const validateArabicText = (text: string): {
  isValid: boolean;
  issues: string[];
} => {
  const issues: string[] = [];

  // Check for common mistakes
  if (text.includes('?')) {
    issues.push('Contains English question mark - use Arabic question mark ؟');
  }

  if (text.includes(',') && !text.match(/[a-zA-Z]/)) {
    issues.push('Contains English comma in Arabic text - consider Arabic comma ،');
  }

  // Check for mixed numerals
  const hasWesternNumerals = /[0-9]/.test(text);
  const hasEasternNumerals = /[٠-٩]/.test(text);
  if (hasWesternNumerals && hasEasternNumerals) {
    issues.push('Mixed numeral systems - use consistent Western or Eastern Arabic numerals');
  }

  // Check for proper spacing
  if (text.match(/[a-zA-Z][ء-ي]|[ء-ي][a-zA-Z]/)) {
    issues.push('Missing space between Arabic and English text');
  }

  // Check for tatweel abuse
  if ((text.match(/ـ/g) || []).length > 2) {
    issues.push('Excessive use of tatweel (ـ) character');
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
};

/**
 * Detect if text contains Arabic characters
 */
export const hasArabicCharacters = (text: string): boolean => {
  return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
};

/**
 * Get text direction based on first strong character
 */
export const detectTextDirection = (text: string): 'rtl' | 'ltr' => {
  // Arabic Unicode ranges
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  
  for (const char of text) {
    if (arabicRegex.test(char)) {
      return 'rtl';
    }
    if (/[a-zA-Z]/.test(char)) {
      return 'ltr';
    }
  }
  
  return 'ltr';
};

/**
 * Clean and normalize Arabic text
 */
export const normalizeArabicText = (text: string): string => {
  return text
    // Normalize Arabic letters
    .replace(/[ًٌٍَُِّْٰ]/g, '') // Remove diacritics
    .replace(/[أإآ]/g, 'ا')      // Normalize alef
    .replace(/[ة]/g, 'ه')        // Normalize teh marbuta
    .replace(/ى/g, 'ي')          // Normalize alef maksura
    // Normalize punctuation
    .replace(/؟/g, '?')
    .replace(/،/g, ',')
    .trim();
};

/**
 * Count words in Arabic text (space-separated)
 */
export const countArabicWords = (text: string): number => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

/**
 * Check translation length ratio (Arabic tends to be 20-30% longer than English)
 */
export const checkTranslationLength = (
  enText: string,
  arText: string
): {
  ratio: number;
  warning: string | null;
} => {
  const enWords = enText.trim().split(/\s+/).length;
  const arWords = countArabicWords(arText);
  const ratio = arWords / enWords;

  let warning = null;
  if (ratio > 2) {
    warning = 'Arabic translation is significantly longer than English (>200%) - review for verbosity';
  } else if (ratio < 0.5) {
    warning = 'Arabic translation is significantly shorter than English (<50%) - review for completeness';
  }

  return { ratio, warning };
};

/**
 * Suggest proper punctuation for Arabic
 */
export const suggestArabicPunctuation = (text: string): string => {
  return text
    .replace(/\?/g, '؟')  // Arabic question mark
    .replace(/,(?![0-9])/g, '،') // Arabic comma (but not in numbers)
    .replace(/;/g, '؛'); // Arabic semicolon
};

/**
 * Extract and validate placeholders in translations
 */
export const validatePlaceholders = (
  enText: string,
  arText: string
): {
  isValid: boolean;
  issues: string[];
} => {
  const issues: string[] = [];

  const enPlaceholders = (enText.match(/\{\{[^}]+\}\}/g) || []).sort();
  const arPlaceholders = (arText.match(/\{\{[^}]+\}\}/g) || []).sort();

  if (enPlaceholders.length !== arPlaceholders.length) {
    issues.push(`Placeholder count mismatch: EN=${enPlaceholders.length}, AR=${arPlaceholders.length}`);
  }

  enPlaceholders.forEach((placeholder, index) => {
    if (arPlaceholders[index] !== placeholder) {
      issues.push(`Placeholder mismatch: "${placeholder}" vs "${arPlaceholders[index]}"`);
    }
  });

  return {
    isValid: issues.length === 0,
    issues,
  };
};

/**
 * Test runner - validates entire translation namespace
 */
export const runArabicTests = (
  enTranslations: TranslationObject,
  arTranslations: TranslationObject
): {
  passed: number;
  failed: number;
  warnings: string[];
  errors: string[];
} => {
  const warnings: string[] = [];
  const errors: string[] = [];
  let passed = 0;
  let failed = 0;

  const testPair = (enValue: string, arValue: string, key: string) => {
    // Validate Arabic text quality
    const quality = validateArabicText(arValue);
    if (!quality.isValid) {
      quality.issues.forEach(issue => warnings.push(`[${key}] ${issue}`));
    }

    // Validate placeholders
    const placeholders = validatePlaceholders(enValue, arValue);
    if (!placeholders.isValid) {
      placeholders.issues.forEach(issue => errors.push(`[${key}] ${issue}`));
      failed++;
    } else {
      passed++;
    }

    // Check length ratio
    const lengthCheck = checkTranslationLength(enValue, arValue);
    if (lengthCheck.warning) {
      warnings.push(`[${key}] ${lengthCheck.warning}`);
    }
  };

  const traverse = (enObj: Record<string, unknown>, arObj: Record<string, unknown> | undefined, path: string = '') => {
    for (const key in enObj) {
      const fullKey = path ? `${path}.${key}` : key;
      
      if (typeof enObj[key] === 'string' && typeof arObj?.[key] === 'string') {
        testPair(enObj[key] as string, arObj[key] as string, fullKey);
      } else if (typeof enObj[key] === 'object' && enObj[key] !== null && typeof arObj?.[key] === 'object' && arObj[key] !== null) {
        traverse(enObj[key] as Record<string, unknown>, arObj[key] as Record<string, unknown>, fullKey);
      }
    }
  };

  traverse(enTranslations, arTranslations);

  return { passed, failed, warnings, errors };
};

// Export all functions
export default {
  checkTranslationSync,
  validateArabicText,
  hasArabicCharacters,
  detectTextDirection,
  normalizeArabicText,
  countArabicWords,
  checkTranslationLength,
  suggestArabicPunctuation,
  validatePlaceholders,
  runArabicTests,
};
