import React from "react";
import { useTranslation } from "react-i18next";

const TranslationDebug: React.FC = () => {
  const { t, i18n } = useTranslation(["common", "home", "navigation"]);

  return (
    <div className="p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Translation Debug</h2>

      <div className="space-y-2">
        <p>
          <strong>Current Language:</strong> {i18n.language}
        </p>
        <p>
          <strong>Available Languages:</strong> {i18n.languages.join(", ")}
        </p>
        <p>
          <strong>Namespaces:</strong> {i18n.options.ns?.join(", ")}
        </p>
        <p>
          <strong>Default Namespace:</strong> {i18n.options.defaultNS}
        </p>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="font-semibold">Translation Tests:</h3>
        <p>
          <strong>Common Loading:</strong> {t("loading")}
        </p>
        <p>
          <strong>Home Hero Title:</strong> {t("hero.title")}
        </p>
        <p>
          <strong>Navigation Home:</strong> {t("home")}
        </p>
        <p>
          <strong>Explicit Home Hero:</strong> {t("home:hero.title")}
        </p>
        <p>
          <strong>Explicit Navigation Home:</strong> {t("navigation:home")}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Raw Translation Data:</h3>
        <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto">
          {JSON.stringify(
            {
              common: i18n.getResourceBundle(i18n.language, "common"),
              home: i18n.getResourceBundle(i18n.language, "home"),
              navigation: i18n.getResourceBundle(i18n.language, "navigation"),
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default TranslationDebug;
