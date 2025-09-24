import React, { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
  jobsPerPage: number;
}

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) {
  const getPaginationRange = () => {
    const range: (number | "...")[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Always show first
        i === totalPages || // Always show last
        Math.abs(i - currentPage) <= 2 // Show nearby pages
      ) {
        range.push(i);
      } else if (
        (i === currentPage - 3 && !range.includes("...")) ||
        (i === currentPage + 3 && !range.includes("..."))
      ) {
        range.push("...");
      }
    }

    return range;
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  return (
    <div className="flex justify-center mt-6">
      <nav className="flex items-center gap-1">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-200"
        >
          &lt; Back
        </button>

        {/* Page Numbers */}
        {getPaginationRange().map((page, index) =>
          page === "..." ? (
            <span key={index} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded border ${
                currentPage === page
                  ? "bg-providerPrimary text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-200"
        >
          Next &gt;
        </button>
      </nav>
    </div>
  );
}
