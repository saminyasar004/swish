import { Toaster as Sonner } from "@/components/ui/sonner";
import ServiceHeaderNav from "./ServiceHeaderNav";
import { useState } from "react";
import ServiceHome from "@/pages/ServiceProvider/serviceHome/ServiceHome";

export default function ServiceLayoutMain({ children }) {
  const [selectedTab, setSelectedTab] = useState("working");
  return (
    <>
      <Sonner />
      <ServiceHeaderNav
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      {children}
    </>
  );
}
