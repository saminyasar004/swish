// components/MessageInput.tsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PaperclipIcon, SendIcon } from "lucide-react";

export const MessageInput = () => {
  return (
    <div className="flex items-center gap-3 mt-4">
      <Input
        className="flex-1"
        placeholder="Write here..."
        aria-label="Write message"
        
      />
      <Button variant="outline" className="p-2">
        <PaperclipIcon size={16} />
      </Button>
      <Button className="bg-primary text-white p-3">
        <SendIcon size={18} />
      </Button>
    </div>
  );
};
