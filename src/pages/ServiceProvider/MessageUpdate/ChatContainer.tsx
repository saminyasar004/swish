"use client";

import { useEffect, useRef, useState } from "react";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { formatMessageTime } from "./utils";
import { X } from "lucide-react";

type Message = {
  id: string;
  sender: number;
  sender_username: string;
  message: string;
  timestamp: string;
};

const dummyMessages: Message[] = [
  {
    id: "1",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Hi there! How are you?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "2",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "3",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "4",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Hi there! How are you?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "5",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "6",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "7",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "12",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "8",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "9",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "10",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "11",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "13",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "14",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "15",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "16",
    sender: 2,
    sender_username: "You",
    message: "Hey! I’m good, thanks for asking 😊",
    timestamp: new Date().toISOString(),
  },
  {
    id: "17",
    sender: 1,
    sender_username: "Jane Cooper",
    message: "Awesome! Are you free for a call?",
    timestamp: new Date().toISOString(),
  },
];

const authUserId = 2;

const selectedUser = {
  id: 1,
  user_id: 1,
  chat_room_id: "room_1",
  fullName: "Jane Cooper",
  profile_image: "/avatar2.png",
};

const ChatContainer = ({  setSelectedProfilePage }: {  setSelectedProfilePage: any }) => {
  const [messages, setMessages] = useState(dummyMessages);
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (payload: any) => {
    setMessages((prev) => [...prev, payload]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] w-full bg-white  border-zinc-200 shadow-xl mx-2">
      {/* Header */}
      <ChatHeader selectedUser={selectedUser} setSelectedProfilePage={setSelectedProfilePage} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => {
          const isOwn = msg.sender === authUserId;
          const isLast = i === messages.length - 1;

          return (
            <div
              key={msg.id}
              ref={isLast ? messageEndRef : null}
              className={`flex ${isOwn ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex items-end gap-2 max-w-[75%] ${
                  isOwn ? "flex-row-reverse" : ""
                }`}
              >
                {/* Avatar */}
                <img
                  src={
                    isOwn
                      ? "/avatar.png"
                      : selectedUser?.profile_image || "/avatar.png"
                  }
                  alt="avatar"
                  className="w-10 h-10 rounded-full border"
                />

                {/* Message Content */}
                <div
                  className={`flex flex-col ${
                    isOwn ? "items-end" : "items-start"
                  }`}
                >
                  {/* Name + Timestamp */}
                  <div className="text-xs text-gray-500 mb-1">
                    {isOwn ? "You" : msg.sender_username} •{" "}
                    {formatMessageTime(msg.timestamp)}
                  </div>

                  {/* Bubble */}
                  <div
                    className={`px-4 py-2 rounded-lg text-sm break-words ${
                      isOwn
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-zinc-200 text-zinc-900 rounded-bl-none"
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messageEndRef} />
      </div>

      {/* Message Input */}
      <div className="py-4 mb-2">
        <MessageInput
          roomId={selectedUser?.chat_room_id}
          senderId={authUserId}
          receiverId={selectedUser.user_id}
          onSend={handleSend}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
