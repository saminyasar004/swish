import React from "react";

export default function LoadingSpinner(profs) {
  if (profs?.categoryListLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
        <span className="ml-3 text-gray-600">Loading categories...</span>
      </div>
    );
  }
}
