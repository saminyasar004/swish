import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import ServiceHeaderNav from "./ServiceHeaderNav";
import LogoLight from "@/assets/providerIcon/LogoLight.svg";

export default function ServiceLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const getSelectedTab = () => {
    if (location.pathname === "/provider/message") return "message";
    if (location.pathname === "/provider/my-business") return "myBusiness";
    if (location.pathname === "/provider") return "working";
    // return "working";
  };

  const handleTabChange = (tab: string) => {
    if (tab === "working") navigate("/provider");
    if (tab === "message") navigate("/provider/message");
    if (tab === "myBusiness") navigate("/provider/my-business");
  };

  return (
    <>
      <Sonner />
      <ServiceHeaderNav
        selectedTab={getSelectedTab()}
        onTabChange={handleTabChange}
      />
      {/* <Outlet /> */}
      <Outlet />
    </>
  );
}

// import { Toaster as Sonner } from "@/components/ui/sonner";
// import ServiceHeaderNav from "./ServiceHeaderNav";
// import { useState } from "react";
// import ServiceHome from "@/pages/ServiceProvider/serviceHome/ServiceHome";

// export default function ServiceLayout({ children }) {
//   console.log({ children });
//   const [selectedTab, setSelectedTab] = useState("working");
//   return (
//     <>
//       <Sonner />
//       <ServiceHeaderNav
//         selectedTab={selectedTab}
//         onTabChange={setSelectedTab}
//       />
//       {children ? children : <ServiceHome selectedTab={selectedTab} />}
//     </>
//   );
// }
