import React from "react";

export default function ServiceHome({ selectedTab }) {
  console.log({ selectedTab });
  return (
    <main className="container mx-auto py-8">
      {selectedTab === "working" && <div>📂 Working Content</div>}
      {selectedTab === "message" && <div>💬 Message Content</div>}
      {selectedTab === "myBusiness" && <div>🏢 My Business Content</div>}
    </main>
  );
}
