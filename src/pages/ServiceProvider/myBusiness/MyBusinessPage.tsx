import { Card, CardContent } from "@/components/ui/card";
import { BadgeInfo, Settings, Briefcase, Settings2 } from "lucide-react";

export default function MyBusinessPage() {
  return (
    <div className="  container mx-auto">
      <div className="  container mx-auto mt-6">
        {/* Header */}
        <div className="flex items-center gap-4 my-12">
          <div className="bg-primary text-solidWhite rounded-md px-4 py-2 text-5xl font-semibold">
            A
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold">Ali Mounji</h1>
        </div>

        <hr className="border-grayWhite  mt-6 " />

        {/* Section Title */}
        <h2 className="text-2xl mt-10 mb-6  font-semibold text-gray-800 ">
          My business
        </h2>

        {/* Business Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition">
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                <BadgeInfo className="h-5 w-5" />
                <span>Profile Page</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Update your business profile page to attract more customers.
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition">
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Settings className="h-5 w-5" />
                <span>Job Settings</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Update your business profile page to attract more customers.
              </p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition">
            <CardContent className="p-6 space-y-2">
              <div className="flex items-center gap-2 text-lg font-semibold mb-6">
                <Briefcase className="h-5 w-5" />
                <span>My Bids</span>
              </div>
              <p className="text-sm text-muted-foreground">
                It provides detailed information on each job that you proposed.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
