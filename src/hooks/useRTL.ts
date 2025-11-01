import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isRTL = i18n.language === 'ar';
    
    // Set document direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Set document language
    document.documentElement.lang = i18n.language;
    
    // Add RTL class to body for conditional styling
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [i18n.language]);

  return {
    isRTL: i18n.language === 'ar',
    direction: i18n.language === 'ar' ? 'rtl' : 'ltr',
  };
};
