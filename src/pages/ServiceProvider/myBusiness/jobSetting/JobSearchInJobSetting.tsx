"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import notifactionEmail from "@/assets/providerIcon/settingIcon/notifactionEmail.svg";
import { ButtonProvider } from "@/components/ui/buttonProvider";
import { Link } from "react-router-dom";

const jobCategories = [
  {
    title: "Home Repairs & Trades",
    jobs: [
      "Mason",
      "Carpenter",
      "Electrician",
      "Plumber",
      "Roofer",
      "Locksmith",
      "Plasterwork",
      "Aluminium, Glass & Metalwork",
      "Air Conditioning (AC)",
      "Waterproofing",
      "Contractor",
      "Traditional Crafts",
      "Wells & Septic Services",
    ],
  },
  {
    title: "Cleaning Services",
    jobs: [
      "Home Cleaning",
      "Office & Commercial Cleaning",
      "Deep Cleaning",
      "Move-out Cleaning",
      "Carpet & Upholstery Cleaning",
      "Window Cleaning",
      "Kitchen & Restaurant Cleaning",
      "Water Tank Cleaning",
    ],
  },

  {
    title: "Pest Control",
    jobs: [
      "Cockroaches",
      "Termites",
      "Rodents",
      "Mosquito Control",
      "Bed Bugs",
      "Disinfection Services",
    ],
  },
  {
    title: "Construction & Renovation",
    jobs: [
      "General Contractor",
      "Project Management & Supervision",
      "Architect",
      "Interior Designer",
      "Structural Engineer",
      "Civil Engineer",
      "Demolition",
      "Excavation & Earthworks",
      "Scaffolding Services",
      "Insulation Works",
      "Facade Renovation",
      "Concrete & Foundations",
    ],
  },
  {
    title: "Garden & Outdoor",
    jobs: [
      "Gardening & Landscaping",
      "Pool Maintenance",
      "Terrace & Exterior Cleaning",
      "Tree Cutting & Stump Removal",
      "Fence & Gate Installation & Repair",
      "Irrigation Systems",
    ],
  },
  {
    title: "Moving & Transport",
    jobs: [
      "Home Moving",
      "Office Moving",
      "Furniture Assembly & Disassembly",
      "Pickup & Delivery",
      "Intercity Transport",
      "International Moving",
    ],
  },
  {
    title: "Tech & Energy",
    jobs: [
      "WiFi & Network Help",
      "TV & Satellite Installation",
      "Security Cameras & Alarms",
      "Smart Home Devices",
      "Solar Panels",
      "EV Charger Installation",
      "Energy Consulting",
    ],
  },
  {
    title: "Admin & Legal Services",
    jobs: [
      "Accountant",
      "Notary Services",
      "Lawyer",
      "Tax Declaration & Filing",
      "Company Registration",
      "Government Documents",
      "Property Paperwork",
      "Import & Export Paperwork",
      "Visa & Residency Support",
      "Translation & Forms",
    ],
  },
  {
    title: "Custom Tasks",
    jobs: [
      "Describe Your Task Freely",
      "Upload Images or Videos",
      "Get Matched with Professionals",
    ],
  },
];

const areaCategories = [
  {
    title: "Oslo",
    area: [
      "Akershus",
      "Aust-Agder",
      "Buskerud",
      "Finnmark",
      "Hedmark",
      "Hordaland",
      "Innlandet",
      "Møre og Romsdal",
      "Nordland",
      "Nord-Trøndelag",
      "Oppland",
      "Rogaland",
      "Sør-Trøndelag",
      "Sør-Agder",
      "Telemark",
      "Troms",
      "Vest-Agder",
      "Vestfold",
    ],
  },
  {
    title: "The Cove",
    area: [
      "Akershus",
      "Aust-Agder",
      "Buskerud",
      "Finnmark",
      "Hedmark",
      "Hordaland",
      "Innlandet",
      "Møre og Romsdal",
      "Nordland",
      "Nord-Trøndelag",
      "Oppland",
      "Rogaland",
      "Sør-Trøndelag",
      "Sør-Agder",
      "Telemark",
      "Troms",
      "Vest-Agder",
      "Vestfold",
    ],
  },
];

export default function JobSearchInJobSetting() {
  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-4">
        <img src={notifactionEmail} alt="" />
        Job Search
      </h2>
      <p className="text-sm text-[#151515] pb-4">
        We want you to succeed on Swish.ma, and win as many jobs as possible.
        That's why we sometimes send advice, tips and newsletters on how to be
        the best you can be on Swish.ma.
      </p>

      {/* Accordion */}
      <Accordion type="multiple" className="w-full">
        {jobCategories.map((category, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border rounded-md mb-3"
          >
            <div className="flex justify-between items-center pr-4 py-2">
              <AccordionTrigger className="px-4 py-2 text-sm font-medium w-full mr-auto">
                {category.title}
              </AccordionTrigger>
              <button className="text-sm text-providerPrimary hover:underline ">
                Turn all off
              </button>
            </div>
            <AccordionContent className="px-4 pb-4 grid grid-cols-2 gap-y-4 gap-x-6">
              {category.jobs.map((job, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{job}</span>
                  <Switch />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Areas */}
      <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-4 mt-16">
        <img src={notifactionEmail} alt="" />
        Areas
      </h2>
      <p className="text-sm text-[#151515] pb-4">
        We want you to succeed on Swish.ma , and win as many jobs as possible.
        That's why we sometimes send advice, tips and newsletters on how to be
        the best you can be on Swish.ma .
      </p>

      {/* Accordion */}
      <Accordion type="multiple" className="w-full">
        {areaCategories.map((category, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx}`}
            className="border rounded-md mb-3"
          >
            <div className="flex justify-between items-center pr-4 py-2">
              <AccordionTrigger className="px-4 py-2 text-sm font-medium w-full mr-auto">
                {category.title}
              </AccordionTrigger>
              <button className="text-sm text-providerPrimary hover:underline ">
                Turn all off
              </button>
            </div>
            <AccordionContent className="px-4 pb-4 grid grid-cols-2 gap-y-4 gap-x-6">
              {category.area.map((job, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{job}</span>
                  <Switch />
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="bg-slate-100 p-6 mt-16">
        <div>
          <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-2">
            Can't find what you're looking for?
          </h2>
          <p className="text-sm text-[#151515] pb-4">
            Please contact our customer service if you have any questions.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/provider/my-business/job-setting/customer-service">
            <ButtonProvider> Contact us</ButtonProvider>
          </Link>
          <Link to="/provider/my-business/job-setting/help-guide">
            <ButtonProvider>Help Guide</ButtonProvider>
          </Link>
        </div>
      </div>
    </div>
  );
}
