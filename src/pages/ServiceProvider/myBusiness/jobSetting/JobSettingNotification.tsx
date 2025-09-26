import { useState } from "react";

export default function JobSettingNotification() {
  const [selected, setSelected] = useState("all");
  return (
    <div className="p-6 my-12 border border-gray-200 rounded-xl overflow-hidden">
      <div className="px-2">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blackPrimary">
            Notifications
          </h3>
          <p className="text-base text-blackSecondary">
            Choice which Notifications you want to receive below. one must
            always be enabled.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Only necessary */}
          <div
            onClick={() => setSelected("necessary")}
            className={`cursor-pointer border rounded-xl p-4 ${
              selected === "necessary"
                ? "border-primary bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-blackPrimary">
                  Only necessary
                </p>
                <p className="text-sm text-blackSecondary">
                  All notifications, newsletters, job-related updates, and new
                  messages.
                </p>
              </div>
              <input
                type="radio"
                checked={selected === "necessary"}
                onChange={() => setSelected("necessary")}
                className="w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300"
              />
            </div>
          </div>

          {/* All notifications */}
          <div
            onClick={() => setSelected("all")}
            className={`cursor-pointer border rounded-xl p-4 ${
              selected === "all"
                ? "border-primary bg-green-50"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-blackPrimary">
                  All notifications
                </p>
                <p className="text-sm text-blackSecondary">
                  All notifications, newsletters, job-related and new messages.
                </p>
              </div>
              <input
                type="radio"
                checked={selected === "all"}
                onChange={() => setSelected("all")}
                className="w-5 h-5 text-green-600 focus:ring-green-500 border-gray-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
