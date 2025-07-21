import { Card, CardContent } from "@/components/ui/card";
import ProfileIcon from "@/assets/images/ProfileIcon.svg";
import SettingIcon from "@/assets/images/SettingIcon.svg";
import MyBidsIcon from "@/assets/images/MyBidsIcon.svg";
import { Link } from "react-router-dom";

export default function MyBusinessPage() {
  const userName = "Ali Mounji";

  return (
    <div className="container mx-auto py-6">
      {/* Header */}
      <div className="flex items-center gap-4 my-12">
        <div className="bg-primary text-white rounded-md px-4 py-2 text-4xl font-semibold">
          {userName.charAt(0)}
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold">{userName}</h1>
      </div>

      <hr className="border-gray-200" />

      {/* Section Title */}
      <h2 className="text-2xl mt-10 mb-6 font-semibold text-gray-800">
        My Business
      </h2>

      {/* Business Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-md transition">
          <Link to="/provider/my-business/profile">
            <CardContent className="p-4 lg:p-6 space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <img src={ProfileIcon} className="h-8 w-8" alt="Profile Icon" />
                <span>Profile Page</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Customize your profile to attract more customers and showcase
                your work.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition">
          <Link to="/provider/my-business/job-setting">
            <CardContent className="p-4 lg:p-6 space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <img
                  src={SettingIcon}
                  className="h-8 w-8"
                  alt="Settings Icon"
                />
                <span>Job Settings</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Configure how you receive and manage jobs.
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition">
          <Link to="/provider/my-business/my-bids">
            <CardContent className="p-4 lg:p-6 space-y-3">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <img src={MyBidsIcon} className="h-8 w-8" alt="Bids Icon" />
                <span>My Bids</span>
              </div>
              <p className="text-sm text-muted-foreground">
                View detailed insights into the jobs you've bid on.
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}
