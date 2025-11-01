import React from "react";
import { useTranslation } from "react-i18next";

const HeroTest: React.FC = () => {
  const { t } = useTranslation(["common", "home"]);

  return (
    <div className="p-6 bg-green-100 border border-green-400 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Hero Component Test</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Hero Title:</h3>
          <p className="text-xl">{t("hero.title")}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Hero Subtitle:</h3>
          <p>
            {t("hero.subtitle")}{" "}
            <span className="font-semibold">{t("hero.subtitle-bold")}</span>{" "}
            {t("hero.subtitle-end")}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">All Categories:</h3>
          <p>{t("hero.all-categories")}</p>
        </div>
      </div>

      <div className="mt-4 p-4 bg-white rounded">
        <h4 className="font-semibold mb-2">Debug Info:</h4>
        <p>
          <strong>Translation Function:</strong> {typeof t}
        </p>
        <p>
          <strong>Hero Title Raw:</strong> "{t("hero.title")}"
        </p>
        <p>
          <strong>Hero Title Length:</strong> {t("hero.title").length}
        </p>
        <p>
          <strong>Is Translation Missing:</strong>{" "}
          {t("hero.title") === "hero.title" ? "YES" : "NO"}
        </p>
      </div>
    </div>
  );
};

export default HeroTest;
