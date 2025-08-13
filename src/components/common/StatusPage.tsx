import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const StatusPage = () => {
  const location = useLocation();
  const [pageType, setPageType] = useState<"construction" | "404">("404");

  useEffect(() => {
    // Example logic: You can trigger "construction" based on certain paths
    if (location.pathname.includes("home-services-installations") || location.pathname.includes("new-construction-permits")) {
      setPageType("construction");
    } else {
      setPageType("404");
    }
  }, [location]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
        <h1 className="text-6xl font-bold text-indigo-600">
          {pageType === "404" ? "404" : "🚧"}
        </h1>
        <h2 className="text-2xl font-semibold mt-4">
          {pageType === "404"
            ? "Oops! Page not found"
            : "This page is under construction"}
        </h2>
        <p className="text-gray-600 mt-2">
          {pageType === "404"
            ? "The page you’re looking for doesn’t exist or has been moved."
            : "We’re working hard to bring this page to life. Please check back soon."}
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition"
        >
          ⬅ Back to Home
        </Link>

        {pageType === "construction" && (
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-secondary h-2 rounded-full animate-pulse" style={{ width: "70%" }}></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Estimated launch: Coming soon
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusPage;
