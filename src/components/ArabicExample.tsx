import React from "react";
import { useTranslation } from "react-i18next";
import { useRTL } from "@/hooks/useRTL";
import { formatNumber, formatCurrency, formatDate } from "@/utils/arabicFormatting";

/**
 * Example component demonstrating proper Arabic handling
 */
const ArabicExample: React.FC = () => {
  const { t, i18n } = useTranslation("home");
  const { isRTL, direction } = useRTL();

  // Example data
  const price = 1250.99;
  const quantity = 42;
  const date = new Date();

  return (
    <div className="space-y-4 p-6" dir={direction}>
      {/* Hero Section */}
      <section>
        <h1 className="text-3xl font-bold">
          {t("hero.title")}
        </h1>
        <p className="text-lg mt-2">
          {t("hero.subtitle")}
        </p>
      </section>

      {/* Numbers and Currency */}
      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">
          {t("formatting-example", { defaultValue: "Formatting Example" })}
        </h2>
        
        {/* Formatted Number */}
        <div className="mb-2">
          <span className="font-medium">
            {t("quantity", { defaultValue: "Quantity" })}:
          </span>{" "}
          <span dir="ltr">{formatNumber(quantity, i18n.language)}</span>
        </div>

        {/* Formatted Currency */}
        <div className="mb-2">
          <span className="font-medium">
            {t("price", { defaultValue: "Price" })}:
          </span>{" "}
          <span dir="ltr">{formatCurrency(price, i18n.language)}</span>
        </div>

        {/* Formatted Date */}
        <div className="mb-2">
          <span className="font-medium">
            {t("date", { defaultValue: "Date" })}:
          </span>{" "}
          {formatDate(date, i18n.language)}
        </div>
      </section>

      {/* Mixed Content (Arabic + English) */}
      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">
          {t("mixed-content", { defaultValue: "Mixed Content" })}
        </h2>
        
        {/* Proper handling of mixed bidirectional text */}
        <p className="bidi-text">
          {t("company-name-example", {
            defaultValue: "Welcome to {{companyName}}",
            companyName: "SWISH Platform",
          })}
        </p>
        
        {/* Email should always be LTR */}
        <p>
          <span>{t("email", { defaultValue: "Email" })}: </span>
          <span dir="ltr" className="text-blue-600">
            contact@example.com
          </span>
        </p>
      </section>

      {/* Icons with RTL */}
      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">
          {t("icons-example", { defaultValue: "Icons & Navigation" })}
        </h2>
        
        {/* Icons that should flip in RTL */}
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border rounded">
            <span className={isRTL ? "rtl-flip" : ""}>→</span>
            {t("next", { defaultValue: "Next" })}
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded">
            {t("back", { defaultValue: "Back" })}
            <span className={isRTL ? "rtl-flip" : ""}>←</span>
          </button>
        </div>
      </section>

      {/* List with Proper Alignment */}
      <section className="border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-3">
          {t("features", { defaultValue: "Features" })}
        </h2>
        
        <ul className="list-disc space-y-2" style={{ 
          paddingInlineStart: isRTL ? '1.5rem' : '1.5rem',
          textAlign: isRTL ? 'right' : 'left'
        }}>
          <li>{t("feature-1", { defaultValue: "Free and easy to use" })}</li>
          <li>{t("feature-2", { defaultValue: "Professional support" })}</li>
          <li>{t("feature-3", { defaultValue: "Fast response time" })}</li>
        </ul>
      </section>
    </div>
  );
};

export default ArabicExample;
