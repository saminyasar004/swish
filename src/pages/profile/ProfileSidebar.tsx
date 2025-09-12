import CompanyIcon from "@/assets/images/CompanyIcon.svg";
import verifiedBadge from "@/assets/images/verifiedBadge.svg";
import prifileImageIcon from "@/assets/images/prifileImageIcon.svg";
import GraphicsIcon from "@/assets/images/GraphicsIcon.svg";
import NotificationsIcon from "@/assets/images/NotificationsIcon.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight, Edit, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";

import profileIconBlack from "@/assets/icon/profileIconBlack.svg";
import profileIconlight from "@/assets/icon/profileIconlight.svg";
import securityIconBlack from "@/assets/icon/securityIconBlack.svg";
import securityIconLight from "@/assets/icon/securityIconLight.svg";
import notificationIconLight from "@/assets/icon/notificationIconLight.svg";
import notificationIconBlack from "@/assets/icon/notificationIconBlack.svg";

import customerIconLight from "@/assets/icon/customerIconLight.svg";
import customerIconBlack from "@/assets/icon/customerIconBlack.svg";
import logoutIconRed from "@/assets/icon/logoutIconRed.svg";
import { toast } from "sonner";

const menuItems = [
  {
    iconBlack: profileIconBlack,
    iconLight: profileIconlight,
    label: "Personal Info",
    route: "/profile",
  },
  {
    iconBlack: securityIconBlack,
    iconLight: securityIconLight,
    label: "Login & Security",
    route: "/profile/login-security",
  },
  {
    iconBlack: notificationIconLight,
    iconLight: notificationIconBlack,
    label: "Notifications",
    route: "/profile/notifications",
  },
  {
    iconBlack: customerIconLight,
    iconLight: customerIconBlack,
    label: "Customer Service",
    route: "/profile/customer-service",
  },
];

export default function ProfileSidebar({
  closeSidebar,
}: {
  closeSidebar?: () => void;
}) {
  const token = useAppSelector(selectCurrentToken);
   const { pathname } = useLocation();

       const dispatch = useAppDispatch();
       const navigate = useNavigate();
     
       const handleLogOut = () => {
         dispatch(logout());
         toast.success("Logout Successful");
         setTimeout(() => {
           navigate("/login");
         }, 500);
       };
     

  // GET PROFILE
  const { data: userProfile, isLoading: isUserProfileLoading } =
    useGetUserProfileQuery(undefined, {
      skip: !token,
    });
  console.log({ userProfile });

  return (
    <aside className="w-full  px-6 md:px-12 py-10 space-y-10 bg-white  relative">
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
      <div className="flex items-center justify-center gap-4 relative">
        <div className="relative ">
          <img
            src={prifileImageIcon}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
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
            <Edit className="w-3 h-3 text-accent" />
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            {userProfile?.first_name + " " + userProfile?.surname}
          </h2>
          <p className="text-blackSecondary text-xs flex justify-start items-center">
            {" "}
            <img src={verifiedBadge} alt="" /> <span>Bank id verified</span>{" "}
          </p>
        </div>
      </div>

      <hr className="border-gray-300" />

      {/* Navigation List */}
     <nav>
        <ul className="space-y-3  text-lg">
          {menuItems.map(({ iconLight, iconBlack, label, route }) => {
            const isActive = pathname === route;

            return (
              <li
                key={label}
                className={`flex items-center justify-between px-3 py-3 rounded-md cursor-pointer transition ${
                  isActive ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
                }`}
              >
                <Link
                  to={route}
                  className="flex items-center gap-3 w-full"
                  onClick={closeSidebar}
                >
                  <img
                    src={isActive ? iconLight : iconBlack}
                    alt={`${label} icon`}
                    className="w-5 h-5"
                  />
                  <span
                    className={`text-base ${
                      isActive ? "font-semibold text-primary" : "text-gray-600"
                    }`}
                  >
                    {label}
                  </span>
                  <ChevronRight
                    size={16}
                    className={`ml-auto ${
                      isActive ? "text-primary" : "text-gray-400"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Button onClick={handleLogOut} className="w-full mt-3 bg-transparent text-red-500 font-semibold justify-start hover:text-red-600 px-3 py-3 gap-3 rounded-md hover:bg-red-50">
          <img src={logoutIconRed} alt="Logout icon" className="w-5 h-5" />
          Logout
        </Button>
      </nav>
    </aside>
  );
}
