"use client";

import { Folder } from "lucide-react";

export default function ReceiptsInSetting() {
  return (
    <div>
      {/* Header */}

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center text-center py-20">
        <Folder className="w-14 h-14 text-[#2d3e5e] mb-4" />
        <p className="text-lg font-semibold text-[#1a1a1a]">
          You don't have any receipts yet.
        </p>
        <p className="text-sm text-muted-foreground">
          Your receipts will appear here.
        </p>
      </div>
    </div>
  );
}
