// components/MessageSidebar.tsx
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const MessageSidebar = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 bg-lightGray p-4">
      <div className="mb-6">
        <Input placeholder="Search" className="w-full ring-2 ring-gray-100" />
      </div>
      <div className="space-y-4">
        {/* List of users */}
        {[
          "Jane Cooper",
          "Mariya Desoja",
          "Cameron Williamson",
          "Wade Warren",
        ].map((user, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
          >
            <Avatar size="small" name={user} />
            <div className="flex flex-col">
              <span>{user}</span>
              <span className="text-sm text-muted-foreground">
                I am waiting for your response
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
