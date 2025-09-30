import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import notifactionEmail from "@/assets/providerIcon/settingIcon/notifactionEmail.svg";
import { Separator } from "@/components/ui/separator";

export default function JobSettingNotifications() {
  const [notifications, setNotifications] = useState({
    newJobs: { email: true, mobile: false },
    newReviews: { email: true, mobile: true },
    newMessage: { email: false, mobile: true },
    rejectBids: { email: true, mobile: false },
    acceptBid: { email: true, mobile: true },
  });

  const toggleNotification = (
    key: keyof typeof notifications,
    channel: "email" | "mobile"
  ) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [channel]: !prev[key][channel],
      },
    }));
  };

  return (
    <>
      <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary mb-6 border-b pb-4">
        <img src={notifactionEmail} alt="" />
        Notifications Settings
      </h2>

      {/* Personal Notifications */}
      <section className="mb-10">
        <h4 className="text-lg font-semibold text-gray-700 mb-6">
          Personal Notifications
        </h4>

        <div className="space-y-4">
          {/* Header row */}
          <div className="flex justify-between items-center border-b pb-2 font-semibold text-gray-600">
            <span className="flex-1">Type</span>
            <span className="w-20 text-center">Email</span>
            <span className="w-20 text-center">Mobile</span>
          </div>

          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="newEvaluation">
              New evaluation
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="newJobs-email"
                checked={notifications.newJobs.email}
                onCheckedChange={() => toggleNotification("newJobs", "email")}
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="newJobs-mobile"
                checked={notifications.newJobs.mobile}
                onCheckedChange={() => toggleNotification("newJobs", "mobile")}
              />
            </div>
          </div>

          {/* New Jobs */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="newJobs">
              New jobs
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="newJobs-email"
                checked={notifications.newJobs.email}
                onCheckedChange={() => toggleNotification("newJobs", "email")}
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="newJobs-mobile"
                checked={notifications.newJobs.mobile}
                onCheckedChange={() => toggleNotification("newJobs", "mobile")}
              />
            </div>
          </div>

          {/* New Reviews */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="newReviews">
              New 5 star reviews
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="newReviews-email"
                checked={notifications.newReviews.email}
                onCheckedChange={() =>
                  toggleNotification("newReviews", "email")
                }
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="newReviews-mobile"
                checked={notifications.newReviews.mobile}
                onCheckedChange={() =>
                  toggleNotification("newReviews", "mobile")
                }
              />
            </div>
          </div>

          {/* New Message */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="newMessage">
              New message
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="newMessage-email"
                checked={notifications.newMessage.email}
                onCheckedChange={() =>
                  toggleNotification("newMessage", "email")
                }
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="newMessage-mobile"
                checked={notifications.newMessage.mobile}
                onCheckedChange={() =>
                  toggleNotification("newMessage", "mobile")
                }
              />
            </div>
          </div>
          {/* New Message */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="newMessage">
              Your company was selected
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="newMessage-email"
                checked={notifications.newMessage.email}
                onCheckedChange={() =>
                  toggleNotification("newMessage", "email")
                }
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="newMessage-mobile"
                checked={notifications.newMessage.mobile}
                onCheckedChange={() =>
                  toggleNotification("newMessage", "mobile")
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Alerts */}
      <section>
        <h4 className="text-lg font-semibold text-gray-700 mb-6">
          Business Alerts
        </h4>

        <div className="space-y-4">
          {/* Header row */}
          <div className="flex justify-between items-center border-b pb-2 font-semibold text-gray-600">
            <span className="flex-1">Type</span>
            <span className="w-20 text-center">Email</span>
            <span className="w-20 text-center">Mobile</span>
          </div>

          {/* Reject Bids */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="rejectBids">
              Daily email with free jobs for the entire company
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="rejectBids-email"
                checked={notifications.rejectBids.email}
                onCheckedChange={() =>
                  toggleNotification("rejectBids", "email")
                }
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="rejectBids-mobile"
                checked={notifications.rejectBids.mobile}
                onCheckedChange={() =>
                  toggleNotification("rejectBids", "mobile")
                }
              />
            </div>
          </div>

          {/* Accept Bid */}
          <div className="flex justify-between items-center border-b pb-2">
            <Label className="flex-1" htmlFor="acceptBid">
              Daily email with relevant jobs for the entire company
            </Label>
            <div className="w-20 flex justify-center">
              <Switch
                id="acceptBid-email"
                checked={notifications.acceptBid.email}
                onCheckedChange={() => toggleNotification("acceptBid", "email")}
              />
            </div>
            <div className="w-20 flex justify-center">
              <Switch
                id="acceptBid-mobile"
                checked={notifications.acceptBid.mobile}
                onCheckedChange={() =>
                  toggleNotification("acceptBid", "mobile")
                }
              />
            </div>
          </div>
        </div>
      </section>

      <div className=" py-8 ">
        <div className="flex justify-between items-center pb-2 font-semibold ">
          <Label className="flex-1 text-lg font-semibold" htmlFor="rejectBids">
            Newsletter
          </Label>
          <div className="w-20 flex justify-center">
            <Switch
              id="rejectBids-email"
              checked={notifications.rejectBids.email}
              onCheckedChange={() => toggleNotification("rejectBids", "email")}
            />
          </div>
        </div>
        <p>
          We want you to succeed on swish.ma, and win as many jobs as possible.
          That's why we sometimes send advice, tips and newsletters on how to be
          the best you can be on swish.ma.
        </p>
      </div>
    </>
  );
}
