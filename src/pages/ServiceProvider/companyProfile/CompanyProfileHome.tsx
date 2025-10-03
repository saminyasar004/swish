import CompanyProfileInfo from "../../companyPorfile/CompanyProfileInfo";
import BusinessSidebar from "./BusinessSidebar";

import CompanyIcon from "@/assets/images/CompanyIcon.svg";
import EmployeesIcon from "@/assets/images/EmployeeIcon.svg";
import GraphicsIcon from "@/assets/images/GraphicsIcon.svg";
import NotificationsIcon from "@/assets/images/NotificationsIcon.svg";
import reviewIcon from "@/assets/providerIcon/profile/review.svg";
import qualificationIcon from "@/assets/providerIcon/profile/qualification.svg";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import GraphicsPage from "./GraphicsPage";
import { CompanyInfoUpdate } from "./CompanyInfoUpdate";
import PicturesAlbum from "./PicturesAlbum";
import { useState } from "react";
import BusinessProfile from "../myBusiness/BusinessProfile";

const menuItems = [
  {
    icon: CompanyIcon,
    label: "Company",
    route: "/provider/my-business/profile/company-info-update",
  },
  {
    icon: GraphicsIcon,
    label: "Graphics",
    route: "/provider/my-business/profile/graphics",
  },
  {
    icon: GraphicsIcon,
    label: "Picture",
    route: "/provider/my-business/profile/pictures",
  },
  {
    icon: EmployeesIcon,
    label: "Employees",
    route: "/provider/my-business/profile/employees",
  },
  {
    icon: qualificationIcon,
    label: "Qualifications",
    route: "/provider/my-business/profile/qualifications",
  },
  {
    icon: reviewIcon,
    label: "Review",
    route: "/provider/my-business/profile/review",
  },
  // {
  //   icon: NotificationsIcon,
  //   label: "Notifications",
  //   route: "/provider/my-business/profile/notifications",
  // },
];

export default function CompanyProfileHome() {
  const closeSidebar = () => {};

  const location = useLocation();
  const pathname = location.pathname;

  // ✅ Map path → content
  const contentMap: Record<string, JSX.Element> = {
    "/provider/my-business/profile": <CompanyProfileInfo />,
    "/provider/my-business/profile/company-info-update": <CompanyInfoUpdate />,
    "/provider/my-business/profile/graphics": <GraphicsPage />,
    "/provider/my-business/profile/pictures": <PicturesAlbum />,
  };

  const content = contentMap[pathname] ?? (
    <p className="text-gray-500">Select a setting from the sidebar.</p>
  );

  return (
    <section className="container mx-auto py-12">
      {/* Sidebar */}
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 ">
          <div className="w-full px-6  py-10 space-y-4 bg-white h-full relative">
            {/* Close on mobile */}
            {closeSidebar && (
              <button
                className="absolute top-4 right-4 block md:hidden text-gray-500 hover:text-black"
                onClick={closeSidebar}
              >
                <X size={20} />
              </button>
            )}

            {/* User Header */}
            <div className="flex items-center gap-3 text-2xl font-semibold">
              <div className="bg-primary text-white rounded px-3 py-1 text-3xl">
                A
              </div>
              Ali Mounji
            </div>

            {/* <hr className="border border-gray-200" /> */}
            <Separator />

            {/* Navigation List */}
            <nav>
              <ul className="space-y-2 text-muted-foreground text-lg">
                {menuItems.map(({ icon, label, route }) => (
                  <li
                    key={label}
                    className="flex items-center justify-between px-3 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition"
                  >
                    <Link
                      to={route}
                      className="flex items-center gap-3 w-full"
                      onClick={closeSidebar}
                    >
                      <img
                        src={icon}
                        alt={`${label} icon`}
                        className="w-5 h-5"
                      />
                      <span className="text-muted-foreground">{label}</span>
                      <ChevronRight
                        size={16}
                        className="ml-auto text-gray-400"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 mt-8 space-y-6 container mx-auto border rounded-lg bg-white">
          {content}
        </main>
      </div>
    </section>
    // </section>
  );
}
