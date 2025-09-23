// components/MessageNavBar.tsx
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const MessageNavBar = ({ name }: { name: string }) => {
  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex items-center gap-4">
        <Avatar size="small" name={name} />
        <span className="font-semibold text-lg">{name}</span>
      </div>
      <Button variant="outline" size="sm">
        <span>Logout</span>
      </Button>
    </div>
  );
};
