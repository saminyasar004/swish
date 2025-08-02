import CompanyIcon from "@/assets/images/CompanyIcon.svg";
import EmployeesIcon from "@/assets/images/EmployeeIcon.svg";
import GraphicsIcon from "@/assets/images/GraphicsIcon.svg";
import NotificationsIcon from "@/assets/images/NotificationsIcon.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight, Edit, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProfileSidebar({
  closeSidebar,
}: {
  closeSidebar?: () => void;
}) {
  const menuItems = [
    {
      icon: CompanyIcon,
      label: "Personal Info",
      route: "/profile",
    },
    {
      icon: GraphicsIcon,
      label: "Login & Security",
      route: "/profile/login-security",
    },
    {
      icon: NotificationsIcon,
      label: "Notifications",
      route: "/profile/notifications",
    },
  ];
  

  return (
    <aside className="w-full px-6 md:px-12 py-10 space-y-10 bg-white  relative">
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
      <div className="flex items-center gap-6 relative">
        <div className="relative w-32 h-32">
          <img
            src={EmployeesIcon}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />

          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            // {...register("avatar")}
            // onChange={handleImageChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => document.getElementById("avatarInput").click()}
            className="absolute bottom-0 right-0 p-1 bg-liquidGreen rounded-full hover:scale-105 transition"
          >
            <Edit className="w-6 h-6 text-accent" />
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-700">Ali Mounji</h2>
          <p className="text-gray-500">alimounji@gmail.com</p>
        </div>
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
              <Link
                to={route}
                className="flex items-center gap-3 w-full"
                onClick={closeSidebar}
              >
                <img src={icon} alt={`${label} icon`} className="w-5 h-5" />
                <span className="text-muted-foreground">{label}</span>
                <ChevronRight size={16} className="ml-auto  text-gray-400" />
              </Link>
            </li>
          ))}

        </ul>
          <Button variant="outline" className="w-full mt-12 border border-red-400 font-semibold">Logout</Button>
      </nav>
    </aside>
  );
}
