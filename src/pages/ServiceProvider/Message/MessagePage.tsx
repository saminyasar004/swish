// pages/MessagePage.tsx

import { MessageContent } from "./MessageContent";
import { MessageInput } from "./MessageInput";
import { MessageNavBar } from "./MessageNavBar";
import { MessageSidebar } from "./MessageSidebar";

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

export default function MessagePage() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen">
      {/* Left Sidebar */}
      <MessageSidebar />

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <MessageNavBar name="Jane Cooper" />

        {/* Main Message Content */}
        <MessageContent messages={messages} />

        {/* Message Input */}
        <MessageInput />
      </div>
    </div>
  );
}
