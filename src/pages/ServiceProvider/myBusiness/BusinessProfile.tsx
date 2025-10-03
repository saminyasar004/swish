import BusinessContact from "./BusinessContact";
import BusinessHeader from "./BusinessHeader";
import BusinessServices from "./BusinessServices";
import BusinessSidebar from "../companyProfile/BusinessSidebar";

export default function BusinessProfile() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen ">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-solidWhite shadow-xl">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 space-y-10 container mx-auto">
        <BusinessHeader />
        <BusinessServices />
        <BusinessContact />
      </main>
    </div>
  );
}
