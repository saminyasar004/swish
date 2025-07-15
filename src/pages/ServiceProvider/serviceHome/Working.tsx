import { useState } from "react";
import TabController from "./TabController";

export default function Working(selectedTab = "working") {
  //   const [selectedTab, setSelectedTab] = useState("working");

  return (
    <div className="p-6">
      {/* Tabs */}
      {/* <TabController onTabChange={setSelectedTab} /> */}

      {/* Content shown based on selected tab */}
      <div className="mt-6">
        {selectedTab === "working" && <div>📂 Working Tab Content</div>}
        {selectedTab === "message" && <div>💬 Message Tab Content</div>}
        {selectedTab === "myBusiness" && <div>🏢 My Business Content</div>}
      </div>
    </div>
  );
}
