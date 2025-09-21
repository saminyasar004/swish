// pages/MessagePage.tsx
import { useState } from "react";
import { MessageSidebar } from "./MessageSidebar";
import NoChatSelected from "@/pages/ServiceProvider/MessageUpdate/NoChatSelected";
import ChatContainer from "@/pages/ServiceProvider/MessageUpdate/ChatContainer";
import { X } from "lucide-react";
import CompanyProfileHome from "@/pages/companyPorfile/CompanyProfileHome";
import CompanyProfileHomeInMsg from "@/pages/companyPorfile/companyPorfileInMsg/CompanyProfileHomeInMsg";
import TheJobMessageTab from "./TheJobMessageTab";

const messages = [
  {
    sender: "you",
    content: "I want to make an appointment tomorrow from 2:00 to 5:00pm?",
    time: "1:55pm",
  },
  {
    sender: "other",
    content: "Hello, I will check the schedule and inform you.",
    time: "1:58pm",
  },
  { sender: "you", content: "Thanks for your reply.", time: "1:59pm" },
  { sender: "other", content: "You are welcome!", time: "2:00pm" },
];

export default function MessagePageUpdated() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(1);
  const [selectedProfilePage, setSelectedProfilePage] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");

  return (
    <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center">
      {/* Left Sidebar */}
      <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
        <MessageSidebar
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          onSelectUser={setSelectedUser}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {!selectedUser ? (
          <NoChatSelected />
        ) : activeTab === "Inbox" ? (
          <ChatContainer
            selectedUser={selectedUser}
            setSelectedProfilePage={setSelectedProfilePage}
          />
        ) : (
          // <CompanyProfileHomeInMsg
          //   setSelectedProfilePage={setSelectedProfilePage}
          // />
          <TheJobMessageTab />
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
