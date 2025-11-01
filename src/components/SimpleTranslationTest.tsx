import React from "react";
import { useTranslation } from "react-i18next";

const SimpleTranslationTest: React.FC = () => {
  const { t, i18n } = useTranslation(["common", "home"]);

  return (
    <div className="p-4 bg-blue-100 border border-blue-400 rounded-lg">
      <h3 className="font-bold mb-2">Simple Translation Test</h3>

      <div className="space-y-2">
        <p>
          <strong>Language:</strong> {i18n.language}
        </p>
        <p>
          <strong>Common Loading:</strong> "{t("loading")}"
        </p>
        <p>
          <strong>Home Hero Title:</strong> "{t("hero.title")}"
        </p>
        <p>
          <strong>Explicit Home Hero:</strong> "{t("home:hero.title")}"
        </p>
        <p>
          <strong>Navigation Home:</strong> "{t("navigation:home")}"
        </p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Available Resources:</h4>
        <pre className="bg-white p-2 rounded text-xs overflow-auto">
          {JSON.stringify(
            {
              common: i18n.hasResourceBundle(i18n.language, "common"),
              home: i18n.hasResourceBundle(i18n.language, "home"),
              navigation: i18n.hasResourceBundle(i18n.language, "navigation"),
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default SimpleTranslationTest;
