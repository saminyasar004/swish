import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const baseURL = "https://backend.thaimassagesnearmeapp.com/";
// const baseURL = "http://10.10.13.75:3333/";

const tabs = ["Inbox", "Unread", "Won", "Archived"];

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
  // const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedUser, setSelectedUser] = useState("Jane Cooper");

  const [users, setUsers] = useState(dummyUsers);

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Inbox");

  const token = useSelector(selectCurrentToken);
  // const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

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
    <aside className="w-full md:w-1/3 lg:w-1/4 h-[94%] border-r  border-base-300 flex flex-col  mx-1 shadow-sm min-w-[20%] bg-white">
      <div className="py-4 px-1 space-y-4 sticky top-0 z-10  ">
        <h3 className="text-lg font-semibold">
          Installation of new door and door frame
        </h3>

        {/* Tabs */}
        {/* Underline Tabs */}
<div className="w-full  scrollbar-hide border-b border-gray-200">
  <div className="flex min-w-max space-x-5 px-2">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={clsx(
          "relative pb-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap",
          activeTab === tab
            ? "text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-gray-800"
            : "text-gray-500 hover:text-gray-800"
        )}
      >
        {tab}
      </button>
    ))}
  </div>
</div>

      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto w-full py-3 flex flex-col gap-4">
        {activeTab === "Inbox" &&
          users.map((user) => (
            <div
              key={user.name}
              onClick={() => handleUserSelect(user)}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors",
                selectedUser === user.name
                  ? "bg-liquidGreen"
                  : "hover:bg-gray-100"
              )}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
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
                <p className="text-xs text-muted-foreground truncate w-[180px] flex items-center gap-1">
                  {user.review} <FaStar size={12} className="text-yellow-400" />{" "}
                  (29 reviews)
                </p>
                <p className="text-xs font-extralight truncate w-[180px]">
                  {user.message}
                </p>
              </div>
            </div>
          ))}

        {activeTab === "The Job" && (
          <div className="flex flex-col gap-6 p-3">
            {/* Information about the job */}
            <div>
              <h5 className="text-sm font-semibold mb-2">Job Information</h5>
              <Link to="/profile/message/job/1/job-details">
                <button className="w-full text-left  py-4 rounded-md  text-gray-900 text-sm font-normal hover:bg-gray-50">
                  See the job
                </button>
              </Link>
            </div>
            <div>
              <div className="">
                <h5 className="text-sm font-semibold mb-2">Documentation</h5>
                <Link to="/profile/message/job/1/appointment">
                  <button className="w-full text-left  py-4 rounded-md  text-gray-900 text-sm font-normal hover:bg-gray-50">
                    Create an appointment
                  </button>
                </Link>
                <Link to="/profile/message/job/1/documentation">
                  <button className="w-full text-left  py-4 rounded-md  text-gray-900 text-sm font-normal hover:bg-gray-50">
                    Documentation
                  </button>
                </Link>
              </div>
            </div>

            {/* Evaluation */}
            <div>
              <h5 className="text-sm font-semibold mb-2">Evaluation</h5>

              <Link to="/profile/message/job/1/evaluation">
                <button className="w-full text-left  py-4 rounded-md  text-gray-900 text-sm font-normal hover:bg-gray-50">
                  Write Evaluation
                </button>
              </Link>
            </div>

            {/* Settings */}
            <div>
              <h5 className="text-sm font-semibold mb-2">Settings</h5>
              <button className="text-sm text-red-500 hover:text-red-600">
                Close job
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
