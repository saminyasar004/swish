import { Dot, DotSquare, X } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Dummy user type and mock data
interface User {
  _id: string;
  fullName: string;
  profilePic?: string;
  rating: number;
}

// Dummy selected company (simulating an active chat)
const dummySelectedCompany: User = {
  _id: "u1",
  fullName: "Jane Cooper",
  profilePic: "https://i.pravatar.cc/150?img=32",
  rating: 4.2,
};

// Dummy list of online user IDs
const dummyOnlineUsers = ["u1", "u3"];

const ChatHeader = ({ setSelectedProfilePage }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(
    dummySelectedCompany
  );
  const onlineUsers = dummyOnlineUsers;

  if (!selectedUser) return null;

  return (
    <div className="p-2.5 py-4 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-16 rounded-full relative">
              <img
                src={selectedUser.profilePic || "/avatar.png"}
                alt={selectedUser.fullName}
              />
            </div>
          </div>

          {/* User Info */}
          <div>
            <h3 className="font-medium mb-1">{selectedUser.fullName}</h3>
            <p className="text-xs text-base-content/70 flex items-center gap-1">
              {/* {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"} */}
              {selectedUser?.rating} <FaStar /> (66 reviews)
            </p>
            <p className="text-xs  text-secondary">
              {/* {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"} */}
              Show more information
            </p>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <MoreVertical className="h-5 w-5 text-gray-600" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={() => console.log("Report as spam")}>
              Report as spam
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProfilePage(true)}>
              View profile page
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Archive conversation")}
            >
              Archive conversation
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default ChatHeader;

// import { X } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";
// import { useChatStore } from "../store/useChatStore";

// const ChatHeader = () => {
//   const { selectedUser, setSelectedUser } = useChatStore();
//   const { onlineUsers } = useAuthStore();

//   return (
//     <div className="p-2.5 border-b border-base-300">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {/* Avatar */}
//           <div className="avatar">
//             <div className="size-10 rounded-full relative">
//               <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
//             </div>
//           </div>

//           {/* User info */}
//           <div>
//             <h3 className="font-medium">{selectedUser.fullName}</h3>
//             <p className="text-sm text-base-content/70">
//               {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
//             </p>
//           </div>
//         </div>

//         {/* Close button */}
//         <button onClick={() => setSelectedUser(null)}>
//           <X />
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ChatHeader;
