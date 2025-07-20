"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import clsx from "clsx";

const tabs = ["Inbox", "Unread", "Active"];

const users = [
  {
    name: "Jane Cooper",
    message: "I cam across your profile and...",
    active: true,
  },
  {
    name: "Mariya Desoja",
    message: "I like your confidence",
  },
  {
    name: "Cameron Williamson",
    message: "I am waiting for your response",
  },
  {
    name: "Wade Warren",
    message: "I am waiting for your response",
  },
  {
    name: "Esther Howard",
    message: "I am waiting for your response",
  },
  {
    name: "Guy Hawkins",
    message: "I am waiting for your response",
  },
  {
    name: "Brooklyn Simmons",
    message: "I am waiting for your response",
  },
  {
    name: "Jacob Jones",
    message: "I am waiting for your response",
  },
  {
    name: "Leslie Alexander",
    message: "I am waiting for your response",
  },
];

export const MessageSidebar = () => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedUser, setSelectedUser] = useState("Jane Cooper");

  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-[#F5FBF7] p-4 space-y-6 scroll-y-a">
      {/* Search */}
      <Input
        placeholder="Search"
        className="w-full ring-2 ring-gray-100 px-3 py-2"
      />

      {/* Tabs */}
      <div className="flex justify-around text-sm font-medium border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "relative pb-1 transition-colors",
              activeTab === tab ? "text-black font-semibold" : "text-gray-400"
            )}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-600 rounded-full mt-1" />
            )}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.name}
            onClick={() => setSelectedUser(user.name)}
            className={clsx(
              "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors",
              selectedUser === user.name ? "bg-green-200" : "hover:bg-gray-100"
            )}
          >
            <Avatar size="small" name={user.name} />
            <div>
              <p
                className={clsx(
                  "font-semibold text-sm",
                  selectedUser === user.name && "text-green-900"
                )}
              >
                {user.name}
              </p>
              <p className="text-xs text-muted-foreground truncate w-[180px]">
                {user.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
