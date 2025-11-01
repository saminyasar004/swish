import React from "react";
import { useTranslation } from "react-i18next";

// Example component showing how to use modular i18n
const ModularI18nExamples: React.FC = () => {
  // Example 1: Using specific namespaces
  const { t: tCommon } = useTranslation("common");
  const { t: tHome } = useTranslation("home");
  const { t: tAuth } = useTranslation("auth");
  const { t: tJobs } = useTranslation("jobs");
  const { t: tNav } = useTranslation("navigation");

  // Example 2: Using multiple namespaces at once
  const { t } = useTranslation(["common", "home", "auth"]);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Modular i18n Examples</h1>

      {/* Example 1: Using specific namespaces */}
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">
          Using Specific Namespaces
        </h2>
        <p>
          <strong>Common:</strong> {tCommon("loading")}
        </p>
        <p>
          <strong>Home Hero:</strong> {tHome("hero.title")}
        </p>
        <p>
          <strong>Auth Login:</strong> {tAuth("login.title")}
        </p>
        <p>
          <strong>Jobs:</strong> {tJobs("my-jobs")}
        </p>
        <p>
          <strong>Navigation:</strong> {tNav("home")}
        </p>
      </div>

      {/* Example 2: Using multiple namespaces */}
      <div className="bg-blue-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">
          Using Multiple Namespaces
        </h2>
        <p>
          <strong>Common + Home:</strong> {t("loading")} - {t("hero.title")}
        </p>
        <p>
          <strong>Auth:</strong> {t("login.title")}
        </p>
      </div>

      {/* Example 3: Namespace-specific access */}
      <div className="bg-green-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">
          Namespace-Specific Access
        </h2>
        <p>
          <strong>Home namespace:</strong> {t("home:hero.title")}
        </p>
        <p>
          <strong>Auth namespace:</strong> {t("auth:login.title")}
        </p>
        <p>
          <strong>Jobs namespace:</strong> {t("jobs:my-jobs")}
        </p>
      </div>

      {/* Example 4: Nested object access */}
      <div className="bg-yellow-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Nested Object Access</h2>
        <p>
          <strong>Hero Title:</strong> {tHome("hero.title")}
        </p>
        <p>
          <strong>Hero Subtitle:</strong> {tHome("hero.subtitle")}
        </p>
        <p>
          <strong>Login Form:</strong> {tAuth("login.email")}
        </p>
        <p>
          <strong>Job Details:</strong> {tJobs("job-details.posted-by")}
        </p>
      </div>

      {/* Example 5: Variable interpolation */}
      <div className="bg-purple-100 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Variable Interpolation</h2>
        <p>
          <strong>Companies Contacted:</strong>{" "}
          {tJobs("companies-contacted", { count: 5 })}
        </p>
        <p>
          <strong>Posted Date:</strong>{" "}
          {tJobs("posted", { date: new Date().toLocaleDateString() })}
        </p>
      </div>
    </div>
  );
};

export default ModularI18nExamples;
