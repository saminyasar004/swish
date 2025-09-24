import { Card, CardContent } from "@/components/ui/card";
import ProfileIcon from "@/assets/images/ProfileIcon.svg";
import SettingIcon from "@/assets/images/SettingIcon.svg";
import MyBidsIcon from "@/assets/images/MyBidsIcon.svg";


import helpGuideIcon from "@/assets/providerIcon/helpGuidIcon.svg";
import evaluationIcon from "@/assets/providerIcon/evaluationIcon.svg";
import personalSettingsIcon from "@/assets/providerIcon/personalSettingIcon.svg";
import customerServiceIcon from "@/assets/providerIcon/customerService.svg";
import { Link } from "react-router-dom";

export default function MyBusinessPage() {
  const userName = "Ali Mounji";

  const businessOptions = [
    {
      id: 1,
      title: "Profile Page",
      description:
        "Update your buniness profile page to attract more customers.",
      icon: ProfileIcon,
      link: "/provider/my-business/profile",
    },
    {
      id: 2,
      title: "Settings",
      description: "Choose the servicin ond asas you wont to mork in.",
      icon: SettingIcon,
      link: "/provider/my-business/job-setting",
    },
    {
      id: 3,
      title: "My Bids",
      description: " See your reviews and request new anas trom exising cutamers.",
      icon: MyBidsIcon,
      link: "/provider/my-business/my-bids",
    },
    {
      id: 4,
      title: "Help guide",
      description:
        "Add basic information and photos to build trust and attract customers.",
      icon: helpGuideIcon,
      link: "/provider/my-business/help-guide",
    },
    {
      id: 5,
      title: "Evaluations",
      description:
        "See your reviews and request new anas trom exising cutamers.",
      icon: evaluationIcon,
      link: "/provider/my-business/evaluations",
    },
    {
      id: 6,
      title: "Personal settings",
      description: "Customira your user protle and natifications.",
      icon: personalSettingsIcon,
      link: "/provider/my-business/personal-settings",
    },
    {
      id: 7,
      title: "Customer service",
      description:
        "Add basic information and photos to build trust and attract customers.",
      icon: customerServiceIcon,
      link: "/provider/my-business/help-guide",
    },
  ];

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
        My company
      </h2>

      {/* Business Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessOptions.map((option) => (
          <Card key={option.id} className="cursor-pointer hover:shadow-md transition">
            <Link to={option.link}>
              <CardContent className="p-4 lg:p-6 space-y-3">
                <div className="flex items-center gap-2 text-lg font-semibold">
                  <img
                    src={option.icon}
                    className="h-8 w-8"
                    alt="Profile Icon"
                  />
                  <span>{option.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
