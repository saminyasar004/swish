"use client";

import { useState } from "react";
import BusinessSidebar from "./BusinessSidebar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState({
    newJobs: true,
    newReviews: true,
    newMessage: true,
    rejectBids: true,
    acceptBid: true,
  });

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 ">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 container mx-auto mt-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-4">
          Notifications Settings
        </h2>

        {/* Personal Notifications */}
        <section className="mb-10">
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            Personal Notifications
          </h4>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <Label htmlFor="newJobs">New Jobs</Label>
              <Switch
                id="newJobs"
                checked={notifications.newJobs}
                onCheckedChange={() => toggleNotification("newJobs")}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <Label htmlFor="newReviews">New Reviews</Label>
              <Switch
                id="newReviews"
                checked={notifications.newReviews}
                onCheckedChange={() => toggleNotification("newReviews")}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <Label htmlFor="newMessage">New Message</Label>
              <Switch
                id="newMessage"
                checked={notifications.newMessage}
                onCheckedChange={() => toggleNotification("newMessage")}
              />
            </div>
          </div>
        </section>

        {/* Business Alerts */}
        <section>
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            Business Alerts
          </h4>

          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <Label htmlFor="rejectBids">Reject Bids</Label>
              <Switch
                id="rejectBids"
                checked={notifications.rejectBids}
                onCheckedChange={() => toggleNotification("rejectBids")}
              />
            </div>

            <div className="flex justify-between items-center border-b pb-2">
              <Label htmlFor="acceptBid">Accept Bid</Label>
              <Switch
                id="acceptBid"
                checked={notifications.acceptBid}
                onCheckedChange={() => toggleNotification("acceptBid")}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
