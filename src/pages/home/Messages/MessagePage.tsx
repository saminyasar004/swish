// pages/MessagePage.tsx

import { useState } from "react";
import { MessageContent } from "./MessageContent";
import { MessageInput } from "./MessageInput";
import { MessageNavBar } from "./MessageNavBar";
import { MessageSidebar } from "./MessageSidebar";
import NoChatSelected from "@/pages/ServiceProvider/MessageUpdate/NoChatSelected";
import ChatContainer from "@/pages/ServiceProvider/MessageUpdate/ChatContainer";
import { X } from "lucide-react";
import CompanyProfileHome from "@/pages/companyPorfile/CompanyProfileHome";

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
  // {isOpen && <ChatHome isOpen={isOpen} onClose={() => setIsOpen(false)} />}
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(1);
  const [selectedProfilePage, setSelectedProfilePage] = useState(false);

  // fixed

  return (
    // <div className="flex flex-col w-full min-h-screen overflow-hidden shadow-2xl rounded-xl  justify-center items-center">
    <div className="flex w-full h-screen overflow-hidden rounded-xl fixed justify-center items-center">
      {/* Left Sidebar */}
      <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
        <MessageSidebar
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          onSelectUser={setSelectedUser}
        />

        {!selectedUser ? (
          <NoChatSelected />
        ) : (
          <ChatContainer selectedUser={selectedUser}  setSelectedProfilePage={setSelectedProfilePage} />
        )}
        {/* Navbar */}
        {/* <MessageNavBar name="Jane Cooper" /> */}

        {/* Main Message Content */}
        {/* <MessageContent messages={messages} /> */}

        {/* Message Input */}
        {/* <MessageInput /> */}
        {selectedProfilePage && (
        <div className="flex h-[100%] rounded-lg overflow-hidden  container mx-auto w-full">
          {" "}
          <X
            className="cursor-pointer"
            size={20}
            onClick={() => setSelectedProfilePage(false)}
          />{" "}
         <CompanyProfileHome/>
        </div>
      )}
      </div>
      
    </div>
  );
}
