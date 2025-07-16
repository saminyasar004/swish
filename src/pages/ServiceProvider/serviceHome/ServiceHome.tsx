import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { JobCard } from "../shared/JobCard";
import { AllJob } from "../serviceTypes/ServiceProvider.types";
import { JobDetailsModal } from "./JobDetailsModal";
import { ApplyBidModal } from "./ApplyBidModal";

export default function ServiceHome({ selectedTab }) {
  const [workingSubTab, setWorkingSubTab] = useState("allJobs");
  const [selectedJob, setSelectedJob] = useState<AllJob | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [applyBidOpen, setApplyBidOpen] = useState(false);

  const handleViewDetails = (job: AllJob) => {
    setSelectedJob(job);
    setShowModal(true);
  };
  const handleApplyBid = (job: AllJob) => () => {
    setSelectedJob(job);
    setApplyBidOpen(true);
  };

  return (
    <main className="container mx-auto py-8">
      {selectedTab === "working" && (
        <div className="grid grid-cols-9 gap-6 ">
          {/* Left Sidebar */}
          <div className="col-span-2">🔍 Search For Jobs | Filters</div>

          {/* Main Content */}
          <div className="col-span-6 bg-solidWhite">
            <Tabs
              value={workingSubTab}
              onValueChange={setWorkingSubTab}
              className="mb-6 shadow-lg"
            >
              <h3 className="text-blackPrimary font-semibold text-2xl pt-2 mb-6 mx-6">
                Total 2935 jobs
              </h3>

              <TabsList className="w-full max-w-max gap-16 mb-4 bg-transparent mx-6">
                <TabsTrigger
                  value="allJobs"
                  className="text-darkGreen px-4 py-2 rounded-full text-md data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
                >
                  All Jobs
                </TabsTrigger>
                <TabsTrigger
                  value="newJobs"
                  className="text-darkGreen px-4 py-2 rounded-full text-md data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
                >
                  New Jobs
                </TabsTrigger>
                <TabsTrigger
                  value="favorites"
                  className="text-darkGreen px-4 py-2 rounded-full text-md data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
                >
                  Favorites
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Sub-tab content */}
            {workingSubTab === "allJobs" && (
              <div className="space-y-4 px-6 shadow-sm">
                {dummyJobs.map((job) => (
                  // <JobCard key={job.id} job={job} />
                  <JobCard
                    key={job.id}
                    job={job}
                    onViewDetails={() => handleViewDetails(job)}
                    onApplyBid={handleApplyBid(job)}
                  />
                ))}
              </div>
            )}
            {workingSubTab === "newJobs" && <div>🆕 New Jobs Content</div>}
            {workingSubTab === "favorites" && <div>❤️ Favorites Content</div>}
          </div>

          {/* Right Sidebar (optional) */}
          <div className="col-span-1">📦 Extra panel / stats</div>
        </div>
      )}

      {selectedTab === "message" && <div>💬 Message Content</div>}
      {selectedTab === "myBusiness" && <div>🏢 My Business Content</div>}

      <JobDetailsModal
        open={showModal}
        onClose={() => setShowModal(false)}
        job={selectedJob}
        onApplyBid={handleApplyBid(selectedJob)}
      />

      <ApplyBidModal
        open={applyBidOpen}
        onClose={() => setApplyBidOpen(false)}
        job={selectedJob}
      />
    </main>
  );
}

export const dummyJobs: AllJob[] = [
  {
    id: "job-001",
    title: "Install new vinyl flooring in living room",
    description:
      "We are looking for someone to remove old carpet and install vinyl plank flooring in our living room (approx. 30 sq.m). The subfloor is concrete, and baseboards may also need adjustment.",
    price: "$1,800",
    postedDate: "15/01/2024",
    bids: 4,
    isFavorite: false,
    user: {
      name: "Samantha",
      avatarUrl: "/images/avatars/samantha.jpg",
      location: "1290 Elm Street, Springfield",
      contact: "+1 415 555 3489",
    },
    propertyType: "Apartment",
    employeeNeeds: "2 Workers",
    startTime: "Within 3 days",
    images: [
      "/images/flooring-1.jpg",
      "/images/flooring-2.jpg",
      "/images/flooring-3.jpg",
    ],
  },
  {
    id: "job-002",
    title: "Fix leaking roof and replace damaged tiles",
    description:
      "Our roof has a few damaged tiles and a small leak near the chimney. Need a roofer to inspect and replace broken tiles. Job needs to be done within the week.",
    price: "$3,200",
    postedDate: "16/01/2024",
    bids: 6,
    isFavorite: true,
    user: {
      name: "Marcus",
      avatarUrl: "/images/avatars/marcus.png",
      location: "832 Oak Ridge Dr, Vancouver",
      contact: "+1 604 223 1122",
    },
    propertyType: "Detached House",
    employeeNeeds: "3 Person Team",
    startTime: "As soon as possible",
    images: ["/images/roof-1.jpg", "/images/roof-2.jpg", "/images/roof-3.jpg"],
  },
  {
    id: "job-003",
    title: "Interior wall repainting for 3 rooms",
    description:
      "Repainting 3 interior rooms including ceiling and trims. Prefer someone who can also do small drywall patches before painting. Paint provided.",
    price: "$2,400",
    postedDate: "14/01/2024",
    bids: 5,
    isFavorite: false,
    user: {
      name: "Olivia",
      avatarUrl: "/images/avatars/olivia.jpg",
      location: "47 Meadowbrook Ln, San Diego",
      contact: "+1 760 888 1212",
    },
    propertyType: "Townhouse",
    employeeNeeds: "1 Person",
    startTime: "Next weekend preferred",
    images: [
      "/images/paint-1.jpg",
      "/images/paint-2.jpg",
      "/images/paint-3.jpg",
    ],
  },
  {
    id: "job-004",
    title: "Bathroom sink and faucet installation",
    description:
      "New sink and faucet purchased from Home Depot. Need removal of old unit and installation of the new one with proper sealing.",
    price: "$600",
    postedDate: "17/01/2024",
    bids: 2,
    isFavorite: false,
    user: {
      name: "Jonathan",
      avatarUrl: "/images/avatars/jonathan.jpg",
      location: "21/3 Fitzroy St, Melbourne",
      contact: "+61 412 334 221",
    },
    propertyType: "Apartment",
    employeeNeeds: "1 Person",
    startTime: "Any weekday after 5 PM",
    images: [
      "/images/bathroom-1.jpg",
      "/images/bathroom-2.jpg",
      "/images/bathroom-3.jpg",
    ],
  },
  {
    id: "job-005",
    title: "Backyard patio construction with stone pavers",
    description:
      "We need a backyard patio (4x6m) built with stone pavers. Ground is already leveled. Material will be supplied.",
    price: "$5,000",
    postedDate: "13/01/2024",
    bids: 7,
    isFavorite: true,
    user: {
      name: "Nina",
      avatarUrl: "/images/avatars/nina.png",
      location: "Rue de la Paix 14, Paris",
      contact: "+33 6 89 23 45 12",
    },
    propertyType: "Detached House",
    employeeNeeds: "4+ Crew",
    startTime: "Flexible – by end of this month",
    images: [
      "/images/patio-1.jpg",
      "/images/patio-2.jpg",
      "/images/patio-3.jpg",
    ],
  },
];
