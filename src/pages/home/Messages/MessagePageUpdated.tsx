// pages/MessagePage.tsx
import { useEffect, useState } from "react";
import { MessageSidebar } from "./MessageSidebar";
import NoChatSelected from "@/pages/ServiceProvider/MessageUpdate/NoChatSelected";
import ChatContainer from "@/pages/home/Messages/ChatContainer";
import { X } from "lucide-react";
import CompanyProfileHome from "@/pages/ServiceProvider/companyProfile/CompanyProfileHome";
import CompanyProfileHomeInMsg from "@/pages/companyPorfile/companyPorfileInMsg/CompanyProfileHomeInMsg";
import TheJobMessageTab from "./TheJobMessageTab";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MessagePageUpdated() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(1);
  const [selectedProfilePage, setSelectedProfilePage] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");

  // 🔄 Sync tab with URL
  useEffect(() => {
    if (location.pathname.includes("job")) {
      setActiveTab("The Job");
    } else {
      setActiveTab("Inbox");
    }
  }, [location.pathname]);

  // 🧭 When tab changes, navigate
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(
      tab === "Inbox"
        ? "/profile/message/inbox/1"
        : "/profile/message/job/1/job-details"
    );
  };

  return (
    <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center">
      {/* Left Sidebar */}
      <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
        <MessageSidebar
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          onSelectUser={setSelectedUser}
          activeTab={activeTab}
          setActiveTab={handleTabChange}
        />

        {!selectedUser ? (
          <NoChatSelected />
        ) : activeTab === "Inbox" ? (
          <ChatContainer
            selectedUser={selectedUser}
            setSelectedProfilePage={setSelectedProfilePage}
          />
        ) : (
          // <TheJobMessageTab />
          <Outlet />
        )}
        {selectedProfilePage && (
          // container mx-auto w-full
          <div className="flex h-[100%] rounded-lg overflow-hidden max-w-[23%] ">
            <CompanyProfileHomeInMsg
              setSelectedProfilePage={setSelectedProfilePage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
