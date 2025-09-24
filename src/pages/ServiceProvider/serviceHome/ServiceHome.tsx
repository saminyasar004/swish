import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";
import { JobCard } from "../shared/JobCard";
import { AllJob } from "../serviceTypes/ServiceProvider.types";
import { JobDetailsModal } from "./JobDetailsModal";
import { ApplyBidModal } from "./ApplyBidModal";
import { JobFilterSidebar } from "./JobFilterSidebar";
import Pagination from "../shared/Pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LightbulbImage from "@/assets/providerIcon/LightbulbImage.svg";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { ButtonProvider } from "@/components/ui/buttonProvider";
import { BuyClipsModal } from "./BuyClipsModal";
import { set } from "react-hook-form";

export default function ServiceHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [workingSubTab, setWorkingSubTab] = useState("allJobs");
  const [selectedJob, setSelectedJob] = useState<AllJob | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [applyBidOpen, setApplyBidOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleViewDetails = (job: AllJob) => {
    setSelectedJob(job);
    setShowModal(true);
  };
  const handleApplyBid = (job: AllJob) => () => {
    setSelectedJob(job);
    setApplyBidOpen(true);
  };

  const jobsPerPage = 4;
  const totalPages = Math.ceil(dummyJobs.length / jobsPerPage);
  const currentJobs = dummyJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const favoriteJobIds = JSON.parse(
    localStorage.getItem("favoriteJobs") || "[]"
  ) as string[];
  const favoriteJobs = dummyJobs.filter((job) =>
    favoriteJobIds.includes(job.id)
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [workingSubTab]);

  const onClose = () => {
    setShowModal(false);
    setApplyBidOpen(false);
  };

  const [isBuyClipsModalOpen, setBuyClipsModalOpen] = useState(false);

  const handleBuyClips = () => {
    setBuyClipsModalOpen(!isBuyClipsModalOpen);
  };

  const tips = true;
  const subtabs = [
    {
      value: "allJobs",
      label: "All Jobs",
    },
    {
      value: "newJobs",
      label: "New Jobs",
    },
    {
      value: "favorites",
      label: "Favorites",
    },
    {
      value: "directJobs",
      label: "Direct Jobs",
    },
    {
      value: "wantMoreAnswers",
      label: "Want More Answers",
    },
    {
      value: "clipFree",
      label: "Clip Free",
    },

    {
      value: "won",
      label: "Won",
    },
    {
      value: "Deleted",
      label: "deleted",
    },
  ];

  return (
    <main className="lg:container px-4 lg:px-0 mx-auto md:py-8">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-2">
        {/* Sidebar */}
        <div className="mb-6 col-span-1 md:col-span-2 ">
          <JobFilterSidebar
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
          />
        </div>

        {/* Main Content */}
        <div className=" col-span-8 md:col-span-7 bg-solidWhite ">
          {tips && (
            <Card className="relative flex items-center justify-between border rounded-md px-4 py-2 shadow-sm mb-8">
              <CardContent className="p-0 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">
                  Make the most of your trial period
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Want to get off to a good start? See our top tips on how to
                  increase your chances of winning jobs.
                </p>
                <Button
                  variant="default"
                  className="mt-3 w-fit bg-providerPrimary hover:bg-providerPrimary/90"
                >
                  See tips
                </Button>
              </CardContent>

              <div className="ml-4 flex-shrink-0">
                <img
                  src={LightbulbImage}
                  alt="Lightbulb"
                  className="w-full h-full"
                />
              </div>

              <button
                onClick={onClose}
                className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
              >
                <X size={18} />
              </button>
            </Card>
          )}

          <Tabs
            value={workingSubTab}
            onValueChange={setWorkingSubTab}
            className="mb-6 border rounded-md  shadow-sm"
          >
            {/* <h3 className="text-blackPrimary font-semibold text-xl pt-2 mb-4 lg:mb-6 mx-6">
             Total {dummyJobs.length} jobs
            </h3> */}

            <div className="flex items-center justify-between mx-3  mb-2 ">
              <h3 className="text-providerBlackSecondary font-normal text-xl  pt-2">
                Total {dummyJobs.length} jobs
              </h3>

              <button
                className="sm:hidden p-2 rounded-md relative text-white bg-primary translate-y-12"
                onClick={toggleDrawer}
              >
                ☰
              </button>
            </div>

            <TabsList className="w-full max-w-max gap-3 mb-4 bg-transparent mx-3 ">
              {subtabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className=" md:px-4 ring-2 ring-providerPrimary text-providerPrimary  focus-visible:ring-1 focus-visible:ring-offset-0 py-2   border-1 rounded-full text-xs md:text-md  data-[state=active]:text-solidWhite data-[state=active]:bg-providerPrimary"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Content */}
          {workingSubTab === "allJobs" && (
            <div className="space-y-2   shadow-sm min-h-screen w-full">
              {currentJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onViewDetails={() => handleViewDetails(job)}
                  onApplyBid={handleApplyBid(job)}
                />
              ))}
              <div className="mt-auto mb-6 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                  jobsPerPage={jobsPerPage}
                />
              </div>
            </div>
          )}

          {workingSubTab === "newJobs" && <div>🆕 New Jobs Content</div>}

          {workingSubTab === "favorites" && (
            <div className="space-y-4 px-6 shadow-sm min-h-screen">
              {favoriteJobs.length > 0 ? (
                favoriteJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    onViewDetails={() => handleViewDetails(job)}
                    onApplyBid={handleApplyBid(job)}
                  />
                ))
              ) : (
                <p className="text-center text-muted-foreground py-12">
                  You haven’t added any favorite jobs yet.
                </p>
              )}
              <div className="mt-auto mb-6 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalPages={totalPages}
                  jobsPerPage={jobsPerPage}
                />
              </div>
            </div>
          )}
        </div>

        {tips && (
          <div className="col-span-1 ">
            <Card className=" border rounded-md  shadow-sm p-2 mb-6">
              <CardContent className="p-0 flex flex-col">
                <h3 className="text-base font-semibold">Available clips</h3>
                <h1 className="text-2xl font-semibold">7</h1>
                <p className="mt-3 text-xs font-semibold text-providerPrimary">
                  Expiring clips
                </p>
              </CardContent>
            </Card>
            <Card className=" border rounded-md  shadow-sm p-2 mb-6">
              <CardContent className="p-0 flex flex-col text-providerPrimary">
                <h3 className="text-base font-semibold">Profile view</h3>
                <h1 className="text-2xl font-semibold">45</h1>
              </CardContent>
            </Card>

            <Card className="border rounded-md  shadow-sm p-2 mb-6">
              <CardContent className="p-0 flex flex-col gap-3">
                <h3 className="text-base font-semibold">Need More Clips</h3>
                <h1 className="text-xs font-light">
                  Easily buy clip with just a few clicks! Unlock jobs and gain
                  full access instantly.
                </h1>
                <ButtonProvider
                  onClick={handleBuyClips}
                  size="md"
                  className="w-full "
                >
                  Buy Clips
                </ButtonProvider>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <BuyClipsModal open={isBuyClipsModalOpen} onClose={handleBuyClips} />

      <JobDetailsModal
        open={showModal}
        onClose={() => setShowModal(false)}
        job={selectedJob}
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
    isFavorite: false,
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
    isFavorite: false,
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
  {
    id: "job-006",
    title: "Kitchen cabinet installation and adjustment",
    description:
      "Purchased IKEA kitchen cabinets. Need installation with precise leveling and alignment. Plumbing hookup already done. Includes minor drywall patching.",
    price: "$2,700",
    postedDate: "18/01/2024",
    bids: 3,
    isFavorite: false,
    user: {
      name: "Emily",
      avatarUrl: "/images/avatars/emily.jpg",
      location: "804 Greenview Ave, Austin",
      contact: "+1 737 999 0101",
    },
    propertyType: "Condo",
    employeeNeeds: "2 Workers",
    startTime: "This weekend",
    images: ["/images/kitchen-1.jpg", "/images/kitchen-2.jpg"],
  },

  {
    id: "job-007",
    title: "Garden landscaping and tree trimming",
    description:
      "Looking for a team to trim 5 large trees, remove shrubs, and install new turf in backyard (approx. 60 sq.m). Must bring tools.",
    price: "$3,600",
    postedDate: "19/01/2024",
    bids: 5,
    isFavorite: false,
    user: {
      name: "George",
      avatarUrl: "/images/avatars/george.png",
      location: "Old Kent Road, London",
      contact: "+44 7780 554412",
    },
    propertyType: "Townhouse",
    employeeNeeds: "3-4 Crew",
    startTime: "By next Wednesday",
    images: [
      "/images/garden-1.jpg",
      "/images/garden-2.jpg",
      "/images/garden-3.jpg",
    ],
  },

  {
    id: "job-008",
    title: "Install smart home lighting system",
    description:
      "Need an electrician to replace standard lights with Philips Hue smart bulbs and configure app. 10 bulbs total. Alexa integration a plus.",
    price: "$950",
    postedDate: "20/01/2024",
    bids: 4,
    isFavorite: false,
    user: {
      name: "Tomás",
      avatarUrl: "/images/avatars/tomas.jpg",
      location: "Av. Paulista 1009, São Paulo",
      contact: "+55 11 99887 2211",
    },
    propertyType: "Apartment",
    employeeNeeds: "1 Person",
    startTime: "Weekday morning",
    images: ["/images/smart-lighting-1.jpg"],
  },

  {
    id: "job-009",
    title: "Assemble and mount 3 wall shelves",
    description:
      "Shelves purchased from Wayfair. Require assembly and wall-mounting (drywall with studs). Please bring tools and level.",
    price: "$300",
    postedDate: "21/01/2024",
    bids: 2,
    isFavorite: false,
    user: {
      name: "Chloe",
      avatarUrl: "/images/avatars/chloe.jpg",
      location: "515 Mission St, San Francisco",
      contact: "+1 415 888 8888",
    },
    propertyType: "Studio",
    employeeNeeds: "1 Person",
    startTime: "Any evening after 6 PM",
    images: ["/images/shelves-1.jpg", "/images/shelves-2.jpg"],
  },

  {
    id: "job-010",
    title: "Replace broken fence panels and repaint",
    description:
      "Storm damaged 4 wood fence panels. Need them replaced and entire fence repainted (~25m). Paint will be provided.",
    price: "$2,200",
    postedDate: "22/01/2024",
    bids: 5,
    isFavorite: false,
    user: {
      name: "Ravi",
      avatarUrl: "/images/avatars/ravi.png",
      location: "Bangalore 560001, India",
      contact: "+91 99889 22334",
    },
    propertyType: "Detached House",
    employeeNeeds: "2-3 Workers",
    startTime: "Next week preferred",
    images: [
      "/images/fence-1.jpg",
      "/images/fence-2.jpg",
      "/images/fence-3.jpg",
    ],
  },
];
