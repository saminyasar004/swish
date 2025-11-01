import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * RTLProvider - Wraps app to handle RTL automatically
 * Import this in your root App component
 */
export const RTLProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Import RTL styles dynamically
    const loadRTLStyles = async () => {
      if (i18n.language === 'ar') {
        await import('@/styles/rtl.css');
      }
    };

    loadRTLStyles();

    // Set document direction and language
    const isRTL = i18n.language === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;

    // Add/remove RTL class
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }

    // Optional: Add smooth transition
    document.body.style.transition = 'all 0.3s ease';

  }, [i18n.language]);

  return <>{children}</>;
};
