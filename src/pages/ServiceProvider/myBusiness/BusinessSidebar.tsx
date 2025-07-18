import CompanyIcon from "@/assets/images/CompanyIcon.svg";
import EmployeesIcon from "@/assets/images/EmployeeIcon.svg";
import GraphicsIcon from "@/assets/images/GraphicsIcon.svg";
import NotificationsIcon from "@/assets/images/NotificationsIcon.svg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BusinessSidebar() {
  const menuItems = [
    {
      icon: CompanyIcon,
      label: "Company",
      route: "/provider/my-business/profile/company",
    },
    {
      icon: GraphicsIcon,
      label: "Graphics",
      route: "/provider/my-business/profile/graphics",
    },
    {
      icon: EmployeesIcon,
      label: "Employees",
      route: "/provider/my-business/profile/employees",
    },
    {
      icon: NotificationsIcon,
      label: "Notifications",
      route: "/provider/my-business/profile/notifications",
    },
  ];

  return (
    <aside className="w-full px-6 md:px-12 py-10 space-y-10 bg-white">
      {/* User Header */}
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <div className="bg-primary text-solidWhite rounded px-3 py-1 text-3xl">
          A
        </div>
        Ali Mounji
      </div>

      <hr className="border border-gray-200" />

      {/* Navigation List */}
      <nav>
        <ul className="space-y-2 text-muted-foreground text-lg">
          {menuItems.map(({ icon, label, route }) => (
            <li
              key={label}
              className="flex items-center justify-between px-3 py-3 rounded-md cursor-pointer hover:bg-gray-100 transition"
            >
              <Link to={route} className="flex items-center gap-3 w-full">
                <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
                <span className="text-muted-foreground group-hover:text-black">
                  {label}
                </span>
                <ChevronRight
                  size={16}
                  className="ml-auto text-gray-400 group-hover:text-black"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
