"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { X, Users, Star, Stars, StarHalf } from "lucide-react";
import axios from "axios";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { FaStar } from "react-icons/fa";

const baseURL = "https://backend.thaimassagesnearmeapp.com/";
// const baseURL = "http://10.10.13.75:3333/";

const tabs = ["Inbox", "Job"];

const users = [
  {
    name: "Jane Cooper",
    message: "I cam across your profile and...",
    review: "4.5",
    active: true,
  },
  {
    name: "Mariya Desoja",
    message: "I like your confidence",
    review: "4.5",
  },
  {
    name: "Cameron Williamson",
    message:
      "I am waiting for your rfh responsehggggggggggggggggggggggggggggggggggg frfhr",
    review: "4.5",
  },
  {
    name: "Wade Warren",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Esther Howard",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Guy Hawkins",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Brooklyn Simmons",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Jacob Jones",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Leslie Alexander",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Jacob Jones",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Leslie Alexander",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Jacob Jones",
    message: "I am waiting for your response",
    review: "4.5",
  },
  {
    name: "Leslie Alexander",
    message: "I am waiting for your response",
    review: "4.5",
  },
];

export const MessageSidebar = ({ onClose, isOpen, onSelectUser }) => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedUser, setSelectedUser] = useState("Jane Cooper");

  const token = useSelector(selectCurrentToken);
  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const onlineUsers = ["1", "2"]; // Static for now

  useEffect(() => {
    if (!isOpen) return;

    const fetchInboxUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}api/chat/inbox/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log({ response });

        setUsers(response.data || []);
      } catch (err) {
        console.error("Error fetching inbox users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInboxUsers();
  }, [isOpen, token]);

  const handleUserSelect = (user) => {
    setSelectedUserId(user._id || user.user_id);
    onSelectUser(user);
  };

  return (
    // fixed
    <aside className="w-full md:w-1/3 lg:w-1/4 h-[94%] border-r  border-base-300 flex flex-col  mx-1 shadow-xl">
      <div className="py-4 px-2 space-y-4 sticky top-0 z-10 bg-white shadow-sm">
        <h3 className="text-lg font-semibold">
          Installation of new door and door frame
        </h3>

        {/* Tabs */}
        <div className="flex items-center justify-around bg-[#E7E7E7] rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                activeTab === tab
                  ? "text-gray-900 bg-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              )}
              aria-label={`Switch to ${tab} tab`}
              aria-pressed={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className=" overflow-y-auto w-full py-3 flex flex-col gap-4">
        {users.map((user) => (
          <div
            key={user.name}
            onClick={() => setSelectedUser(user.name)}
            className={clsx(
              "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors",
              selectedUser === user.name
                ? "bg-liquidGreen"
                : "hover:bg-gray-100"
            )}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p
                className={clsx(
                  "font-semibold text-sm",
                  selectedUser === user.name && "text-green-900"
                )}
              >
                {user.name}
              </p>
              <p className="text-xs text-muted-foreground truncate w-[180px] flex  items-center gap-1">
                {user.review} <FaStar size={12} className="text-yellow-400" />{" "}
                (29 reviews)
              </p>
              <p className="text-xs font-extralight truncate w-[180px]">
                {user.message}
              </p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
