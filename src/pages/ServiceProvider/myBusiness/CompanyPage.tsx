"use client";

import { useState } from "react";
import { Edit, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSidebar from "../companyProfile/BusinessSidebar";
import CompanyEditModal from "./EditCompanyModal";

export default function CompanyPage() {
  const [editOpen, setEditOpen] = useState(false);

  const [companyInfo, setCompanyInfo] = useState({
    companyName: "Ali Mounji",
    services: [
      "Landscaping and Foundation Work",
      "Demolition, Piling, Concrete, Sawing",
      "Large Projects",
      "Carpenters/Building",
      "Garage/House/Hut/Extension/Add-on",
      "Building",
      "Concrete Floor Breaking",
      "Permit Support & Legalization",
    ],
    email: "alimounji@gmail.com",
    telephone: "+41 212 635 00",
    location: "2972 Westheimer Rd.",
  });

  const splitServices = () => {
    const half = Math.ceil(companyInfo.services.length / 2);
    return [
      companyInfo.services.slice(0, half),
      companyInfo.services.slice(half),
    ];
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 ">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 space-y-10 container mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center border-b pb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Company Info</h2>
          <Button
            onClick={() => setEditOpen(true)}
            className="bg-primary text-white"
          >
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </header>

        {/* Company Name */}
        <section>
          <h4 className="text-lg font-semibold text-gray-700 mb-1">
            Company Name
          </h4>
          <p className="font-bold text-black">{companyInfo.companyName}</p>
        </section>

        {/* Services */}
        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700">
            Services Offered
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {splitServices().map((group, colIndex) => (
              <ul
                key={colIndex}
                className="space-y-1 text-sm text-muted-foreground list-disc list-inside"
              >
                {group.map((service, idx) => (
                  <li key={idx}>{service}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* Contact Info */}
        <section>
          <h4 className="text-lg font-semibold text-gray-700 mb-1">
            Contact Info
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              {companyInfo.location}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" />
              {companyInfo.email}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" />
              {companyInfo.telephone}
            </li>
          </ul>
        </section>

        {/* Edit Modal */}
        <CompanyEditModal
          open={editOpen}
          onClose={() => setEditOpen(false)}
          data={companyInfo}
          onUpdate={(updated) => setCompanyInfo(updated)}
        />
      </main>
    </div>
  );
}
