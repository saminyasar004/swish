import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const TranslationTest: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Translation Test</h2>
      <LanguageSwitcher />
      <div className="mt-4 space-y-2">
        <p>
          <strong>Home:</strong> {t("home")}
        </p>
        <p>
          <strong>Contact:</strong> {t("contact")}
        </p>
        <p>
          <strong>Login:</strong> {t("login")}
        </p>
        <p>
          <strong>Register:</strong> {t("register")}
        </p>
        <p>
          <strong>Profile:</strong> {t("profile")}
        </p>
        <p>
          <strong>My Jobs:</strong> {t("my-jobs")}
        </p>
        <p>
          <strong>Loading:</strong> {t("loading")}
        </p>
      </div>
    </div>
  );
};

export default TranslationTest;
