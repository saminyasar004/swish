import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import jobIcon from "@/assets/images/JobIcon.svg";
import messageIcon from "@/assets/images/MessageIcon.svg";
import businessIcon from "@/assets/images/HomeIcon.svg";

export default function TabController({ onTabChange }) {
  const [activeTab, setActiveTab] = useState("working");

  const handleTabChange = (value) => {
    console.log({ value });
    setActiveTab(value);
    onTabChange(value); // notify parent
  };

  return (
    <div className="flex w-full max-w-max items-center flex-col gap-6">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="w-full gap-6">
          <TabsTrigger value="working" className="gap-2">
            Working <img src={jobIcon} className="max-w-[20px]" />
          </TabsTrigger>
          <TabsTrigger value="message" className="gap-2">
            Message <img src={messageIcon} className="max-w-[20px]" />
          </TabsTrigger>
          <TabsTrigger value="myBusiness" className="gap-2">
            My Business <img src={businessIcon} className="max-w-[20px]" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
