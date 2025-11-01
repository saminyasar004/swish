// Example of how to use i18n in your components
import React from "react";
import { useTranslation } from "react-i18next";

// Example component showing different ways to use translations
const I18nUsageExample: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="p-4">
      <h2>i18n Usage Examples</h2>

      {/* Basic translation */}
      <p>{t("home")}</p>

      {/* Translation with variables */}
      <p>{t("companies-contacted", { count: 5 })}</p>

      {/* Translation with date formatting */}
      <p>{t("posted", { date: new Date().toLocaleDateString() })}</p>

      {/* Check current language */}
      <p>Current language: {i18n.language}</p>

      {/* Change language programmatically */}
      <button onClick={() => i18n.changeLanguage("ar")}>
        Switch to Arabic
      </button>
    </div>
  );
};

export default I18nUsageExample;
