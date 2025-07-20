import React from "react";
import { getStatusBadge } from "./BidDetailsModal";

export default function BidsCard({
  bid,
  onViewDetails,
}: {
  bid: {
    id: number;
    title: string;
    description: string;
    amount: string;
    timeEstimate: string;
    postedDate: string;
    status: string;
  };
  onViewDetails: () => void;
}) {
  return (
    <div
      key={bid?.id}
      className="border rounded-lg shadow-sm bg-white p-6 flex flex-col md:flex-row justify-between items-start gap-4"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">{bid?.title}</h3>
          {getStatusBadge(status)}
        </div>
        <p className="text-sm text-gray-600">{bid?.description}</p>
        <div className="flex gap-4 text-sm text-gray-500 mt-2">
          <span>💰 {bid?.amount}</span>
          <span>⏱ {bid?.timeEstimate}</span>
          <span>📅 {bid?.postedDate}</span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={onViewDetails}
          className="border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
