import React from "react";
import CompanyProfileInfo from "./CompanyProfileInfo";
import BusinessSidebar from "../ServiceProvider/myBusiness/BusinessSidebar";

export default function CompanyProfileHome() {
  return (
    // <section className="container mx-auto py-12 overflow-x-hidden overflow-y-auto">
    // {/* <CompanyProfileInfo /> */}
    <div className="flex flex-col md:flex-row min-h-screen  container mx-auto py-4 overflow-x-hidden overflow-y-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-solidWhite ">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 px-2 py-6 space-y-10 container mx-auto">
        <CompanyProfileInfo />
      </main>
    </div>
    // </section>
  );
}
