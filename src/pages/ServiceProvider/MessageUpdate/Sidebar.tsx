"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { cn } from "@/lib/utils"; // utility to conditionally join classNames
import avatar from "@/assets/images/avatar.png"; // default avatar fallback

interface ChatUser {
  id: string;
  name: string;
  message: string;
  profilePic: string;
  isOnline?: boolean;
}

const dummyUsers: ChatUser[] = [
  {
    id: "1",
    name: "Jane Cooper",
    message: "I cam across your profile and...",
    profilePic: "/avatar1.png",
    isOnline: true,
  },
  {
    id: "2",
    name: "Mariya Desoja",
    message: "I like your confidence",
    profilePic: "/avatar2.png",
  },
  {
    id: "3",
    name: "Cameron Williamson",
    message: "I am waiting for your response",
    profilePic: "/avatar3.png",
    isOnline: true,
  },
  {
    id: "4",
    name: "Wade Warren",
    message: "I am waiting for your response",
    profilePic: "/avatar4.png",
  },
  {
    id: "5",
    name: "Esther Howard",
    message: "I am waiting for your response",
    profilePic: "/avatar5.png",
  },
  {
    id: "6",
    name: "Guy Hawkins",
    message: "I am waiting for your response",
    profilePic: "/avatar6.png",
    isOnline: true,
  },
  {
    id: "7",
    name: "Brooklyn Simmons",
    message: "I am waiting for your response",
    profilePic: "/avatar7.png",
  },
  {
    id: "8",
    name: "Jacob Jones",
    message: "I am waiting for your response",
    profilePic: "/avatar8.png",
  },
  {
    id: "9",
    name: "Leslie Alexander",
    message: "I am waiting for your response",
    profilePic: "/avatar9.png",
  },
  {
    id: "10",
    name: "Esther Howard",
    message: "I am waiting for your response",
    profilePic: "/avatar5.png",
  },
  {
    id: "11",
    name: "Guy Hawkins",
    message: "I am waiting for your response",
    profilePic: "/avatar6.png",
    isOnline: true,
  },
  {
    id: "12",
    name: "Brooklyn Simmons",
    message: "I am waiting for your response",
    profilePic: "/avatar7.png",
  },
  {
    id: "13",
    name: "Jacob Jones",
    message: "I am waiting for your response",
    profilePic: "/avatar8.png",
  },
  {
    id: "14",
    name: "Leslie Alexander",
    message: "I am waiting for your response",
    profilePic: "/avatar9.png",
  },
];

export default function MessageSidebar() {
  const [selectedUserId, setSelectedUserId] = useState("1");
  const [tab, setTab] = useState("inbox");
  const [search, setSearch] = useState("");

  const filteredUsers = dummyUsers.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full md:w-[400px] h-full border-r border-muted bg-liquidGreen ">
      {/* Search */}
      <div className="mb-4 px-3 py-4">
        <Input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-none"
        />
      </div>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab} className="mb-8">
        <TabsList className="w-full bg-transparent justify-start gap-8 px-2 border-b border-gray-200">
          <TabsTrigger
            value="inbox"
            className="text-sm data-[state=active]:border-b-2  data-[state=active]:border-primary rounded-none pb-2"
          >
            Inbox
          </TabsTrigger>
          <TabsTrigger
            value="unread"
            className="text-sm data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2"
          >
            Unread
          </TabsTrigger>
          <TabsTrigger
            value="active"
            className="text-sm data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2"
          >
            Active
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* User List */}
      <ScrollArea className="h-[calc(100vh-200px)] pr-2">
        <div className="space-y-1">
          {filteredUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={cn(
                "flex items-center gap-3 w-full p-2 rounded-md transition",
                selectedUserId === user.id
                  ? "bg-primary/60 text-foreground"
                  : "hover:bg-muted/60"
              )}
            >
              <div className="relative">
                <img
                  src={avatar || user.profilePic}
                  alt={user.name}
                  className="size-10 rounded-full object-cover"
                />
                {user.isOnline && (
                  <span className="absolute bottom-0 right-0 size-2.5 bg-green-500 border border-white rounded-full" />
                )}
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">
                  {user.name}
                </p>
                <p className="text-xs text-muted-foreground truncate w-[200px]">
                  {user.message}
                </p>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
