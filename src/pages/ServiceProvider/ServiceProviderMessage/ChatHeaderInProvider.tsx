import { ArrowLeft, Donut, Dot, DotSquare, X } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

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

const ChatHeaderInProvider = ({ setSelectedProfilePage }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(
    dummySelectedCompany
  );
  const [isReportSpamOpen, setIsReportSpamOpen] = useState(false);

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
          <div className="flex flex-1">
            <div>
              <h3 className="font-medium mb-1">{selectedUser.fullName}</h3>
              <p className="text-xs text-base-content/70 flex items-center gap-1">
                {/* {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"} */}
                {selectedUser?.rating} <FaStar /> (66 reviews)
              </p>
              <Button
                size="sm"
                className="bg-transparent hover:bg-transparent"
                onClick={() => setSelectedProfilePage(true)}
              >
                {" "}
                <p className="text-xs  text-secondary">
                  {/* {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"} */}
                  Show more information
                </p>
              </Button>
            </div>
           
          </div>
        </div>

        <div className="flex flex-wrap items-center">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <MoreVertical className="h-5 w-5 text-gray-600" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => setIsReportSpamOpen(true)}>
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
      {isReportSpamOpen && (
        <ReportAsSpam
          isReportSpamOpen={isReportSpamOpen}
          setIsReportSpamOpen={setIsReportSpamOpen}
        />
      )}
    </div>
  );
};

export default ChatHeaderInProvider;

const reportReasons = [
  "Black work",
  "Spam/Advertising",
  "Nonsense answer",
  "Didn't show up for the appointment",
  "Not approved for the job",
  "Other",
];
function ReportAsSpam({ isReportSpamOpen, setIsReportSpamOpen }) {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!selectedReason) return;
    console.log({
      reason: selectedReason,
      description,
    });
    setIsReportSpamOpen(false);
  };

  return (
    <Dialog open={isReportSpamOpen} onOpenChange={setIsReportSpamOpen}>
      <DialogContent
        className="max-w-lg md:max-w-xl lg:max-w-2xl"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Report ULTIMATEBYGG AS
          </DialogTitle>
        </DialogHeader>

        {/* Report reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {reportReasons.map((reason) => (
            <label
              key={reason}
              className="flex items-center gap-2 border border-primary/40 rounded-md px-4 py-3 text-sm cursor-pointer transition hover:bg-gray-50"
            >
              <input
                type="radio"
                name="reportReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={() => setSelectedReason(reason)}
                className="accent-primary"
              />
              <span>{reason}</span>
            </label>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <Label className="mb-2 block text-sm font-medium">
            Please add a description (optional)
          </Label>
          <Textarea
            placeholder="Explain why you choose to report the company."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[100px] ring-1 ring-primary"
          />
        </div>

        {/* Footer */}
        <DialogFooter className="mt-6">
          <Button
            type="button"
            onClick={handleSubmit}
            disabled={!selectedReason}
            className="w-full bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Complete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
