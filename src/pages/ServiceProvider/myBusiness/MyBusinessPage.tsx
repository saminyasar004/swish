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
      link: "/provider/my-business/job-setting/company-info",
    },
    // {
    //   id: 3,
    //   title: "My Bids",
    //   description:
    //     " See your reviews and request new anas trom exising cutamers.",
    //   icon: MyBidsIcon,
    //   link: "/provider/my-business/my-bids",
    // },
    {
      id: 4,
      title: "Help guide",
      description:
        "Add basic information and photos to build trust and attract customers.",
      icon: helpGuideIcon,
      link: "/provider/my-business/job-setting/help-guide",
    },
    {
      id: 5,
      title: "Evaluations",
      description:
        "See your reviews and request new anas trom exising cutamers.",
      icon: evaluationIcon,
      link: "/provider/my-business/job-setting/help-guide/evaluations",
    },
    {
      id: 6,
      title: "Personal settings",
      description: "Customira your user protle and natifications.",
      icon: personalSettingsIcon,
      link: "/provider/my-business/job-setting/company-info",
    },
    {
      id: 7,
      title: "Customer service",
      description:
        "Add basic information and photos to build trust and attract customers.",
      icon: customerServiceIcon,
      link: "/provider/my-business/job-setting/customer-service",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      {/* Header */}

      {/* Section Title */}
      <h2 className="text-2xl  mb-6 font-semibold text-gray-800">My company</h2>

      {/* Business Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessOptions.map((option) => (
          <Card
            key={option.id}
            className="cursor-pointer hover:shadow-md transition"
          >
            <Link to={option.link}>
              <CardContent className="p-4 lg:p-6 ">
                <img
                  src={option.icon}
                  className="h-8 w-8 mb-4"
                  alt="Profile Icon"
                />
                <div className=" text-lg font-semibold mb-2">
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
