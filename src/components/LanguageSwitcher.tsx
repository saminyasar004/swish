import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { useRTL } from "@/hooks/useRTL";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { isRTL } = useRTL();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // Persist language preference
    localStorage.setItem('preferredLanguage', lng);
  };

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const languages = [
    { code: 'en', label: 'English', dir: 'ltr' },
    { code: 'ar', label: 'العربية', dir: 'rtl' },
    { code: 'fr', label: 'Français', dir: 'ltr' },
  ];

  return (
    <div className="flex gap-2" dir={isRTL ? 'rtl' : 'ltr'}>
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={i18n.language === lang.code ? "default" : "outline"}
          size="sm"
          onClick={() => changeLanguage(lang.code)}
          className="transition-all"
          dir={lang.dir}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
