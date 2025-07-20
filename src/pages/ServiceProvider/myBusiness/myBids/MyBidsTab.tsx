import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BidDetailsModal, getStatusBadge } from "./BidDetailsModal";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Timer } from "lucide-react";

export default function MyBidsTab() {
  const [workingSubTab, setWorkingSubTab] = useState("allJobs");
  const [selectedBid, setSelectedBid] = useState(null);

  const handleViewDetails = (bid) => {
    setSelectedBid(bid);
  };

  const closeModal = () => {
    setSelectedBid(null);
  };

  const filteredBids = bidData.filter((bid) => {
    if (workingSubTab === "allJobs") return true;
    if (workingSubTab === "activeJobs") return bid.status === "active";
    if (workingSubTab === "completedJobs") return bid.status === "completed";
    if (workingSubTab === "rejectedJobs") return bid.status === "rejected";
    return false;
  });

  return (
    <div className="container mx-auto">
      <h3 className="text-blackPrimary font-semibold text-2xl pt-2 mb-2">
        My Bids
      </h3>
      <hr className="border-t border-gray-200 mb-8" />

      <div className="bg-solidWhite">
        <Tabs
          value={workingSubTab}
          onValueChange={setWorkingSubTab}
          className="mb-4 gap-12 bg-liquidGreen py-3"
        >
          <TabsList className="w-full flex justify-between bg-transparent">
            <TabsTrigger
              value="allJobs"
              className="text-darkGreen px-24 py-4 text-xl data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="activeJobs"
              className="text-darkGreen px-24 py-4 text-xl data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="completedJobs"
              className="text-darkGreen px-24 py-4 text-xl data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
            >
              Complete
            </TabsTrigger>
            <TabsTrigger
              value="rejectedJobs"
              className="text-darkGreen px-24 py-4 text-xl data-[state=active]:text-solidWhite data-[state=active]:bg-primary"
            >
              Reject
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* All Jobs */}
        {workingSubTab === "allJobs" && (
          <div className="space-y-4 px-6 shadow-sm min-h-screen">
            {/* Render filtered bids */}
            {filteredBids.length > 0 ? (
              <div className="space-y-4">
                {filteredBids.map((bid) => (
                  <div
                    key={bid?.id}
                    className="border rounded-lg shadow-sm bg-white p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {bid?.title}
                        </h3>
                        <Button
                          size="sm"
                          className={`rounded-full flex items-center gap-2 ${
                            bid?.status === "active"
                              ? "bg-primary text-white"
                              : bid?.status === "completed"
                              ? "bg-blackSecondary/50 text-white"
                              : bid?.status === "rejected"
                              ? "bg-red-500 text-white"
                              : ""
                          }`}
                        >
                          <Timer size={12} />
                          {bid?.status}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        {bid?.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500 mt-2">
                        <span>$ {bid?.amount}</span>
                        <span className="flex gap-1 items-center justify-center">
                          <Timer size={16} /> {bid?.timeEstimate}
                        </span>
                        <span className="flex gap-1 items-center justify-center">
                          <Calendar size={16} /> {bid?.postedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleViewDetails(bid)}
                        className="border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No bids found for this tab.
              </p>
            )}
          </div>
        )}

        {/* Active Jobs */}
        {workingSubTab === "activeJobs" && (
          <div className="space-y-4 px-6 shadow-sm min-h-screen">
            {filteredBids.length > 0 ? (
              filteredBids
                .filter((bid) => bid.status === "active")
                .map((bid) => (
                  <div
                    key={bid?.id}
                    className="border rounded-lg shadow-sm bg-white p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {bid?.title}
                        </h3>
                        <Button
                          size="sm"
                          className={`rounded-full flex items-center gap-2 ${
                            bid?.status === "active"
                              ? "bg-primary text-white"
                              : bid?.status === "completed"
                              ? "bg-gray-500 text-primary"
                              : bid?.status === "rejected"
                              ? "bg-red-500 text-white"
                              : ""
                          }`}
                        >
                          <Timer size={12} />
                          {bid?.status}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        {bid?.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500 mt-2">
                        <span>${bid?.amount}</span>
                        <span className="flex gap-1 items-center justify-center">
                          <Timer size={16} /> {bid?.timeEstimate}
                        </span>
                        <span className="flex gap-1 items-center justify-center">
                          <Calendar size={16} /> {bid?.postedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleViewDetails(bid)}
                        className="border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-500">No active bids found.</p>
            )}
          </div>
        )}

        {/* Completed Jobs */}
        {workingSubTab === "completedJobs" && (
          <div className="space-y-4 px-6 shadow-sm min-h-screen">
            {filteredBids.length > 0 ? (
              filteredBids
                .filter((bid) => bid.status === "completed")
                .map((bid) => (
                  <div
                    key={bid?.id}
                    className="border rounded-lg shadow-sm bg-white p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {bid?.title}
                        </h3>
                        <Button
                          size="sm"
                          className={`rounded-full flex items-center gap-2 ${
                            bid?.status === "active"
                              ? "bg-primary text-white"
                              : bid?.status === "completed"
                              ? "bg-gray-500 text-primary"
                              : bid?.status === "rejected"
                              ? "bg-red-500 text-white"
                              : ""
                          }`}
                        >
                          <Timer size={12} />
                          {bid?.status}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        {bid?.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500 mt-2">
                        <span>${bid?.amount}</span>
                        <span className="flex gap-1 items-center justify-center">
                          <Timer size={16} /> {bid?.timeEstimate}
                        </span>
                        <span className="flex gap-1 items-center justify-center">
                          <Calendar size={16} /> {bid?.postedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleViewDetails(bid)}
                        className="border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-500">
                No completed bids found.
              </p>
            )}
          </div>
        )}

        {/* Rejected Jobs */}
        {workingSubTab === "rejectedJobs" && (
          <div className="space-y-4 px-6 shadow-sm min-h-screen">
            {filteredBids.length > 0 ? (
              filteredBids
                .filter((bid) => bid.status === "rejected")
                .map((bid) => (
                  <div
                    key={bid?.id}
                    className="border rounded-lg shadow-sm bg-white p-6 flex flex-col md:flex-row justify-between items-center gap-4"
                  >
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center gap-2 mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {bid?.title}
                        </h3>
                        <Button
                          size="sm"
                          className={`rounded-full flex items-center gap-2 ${
                            bid?.status === "active"
                              ? "bg-primary text-white"
                              : bid?.status === "completed"
                              ? "bg-gray-500 text-primary"
                              : bid?.status === "rejected"
                              ? "bg-red-500 text-white"
                              : ""
                          }`}
                        >
                          <Timer size={12} />
                          {bid?.status}
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600">
                        {bid?.description}
                      </p>
                      <div className="flex gap-4 text-sm text-gray-500 mt-2">
                        <span>${bid?.amount}</span>
                        <span className="flex gap-1 items-center justify-center">
                          <Timer size={16} /> {bid?.timeEstimate}
                        </span>
                        <span className="flex gap-1 items-center justify-center">
                          <Calendar size={16} /> {bid?.postedDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <button
                        onClick={() => handleViewDetails(bid)}
                        className="border border-gray-300 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
            ) : (
              <p className="text-center text-gray-500">
                No rejected bids found.
              </p>
            )}
          </div>
        )}
      </div>
      {/* Show modal if a bid is selected */}
      {selectedBid && (
        <BidDetailsModal bid={selectedBid} onClose={closeModal} />
      )}
    </div>
  );
}

const bidData = [
  {
    id: 1,
    title: "Home Renovation",
    description:
      "Complete kitchen and bathroom renovation needed for a 3-bedroom house",
    amount: "$15,000",
    timeEstimate: "4 Weeks",
    postedDate: "15/01/2024",
    status: "active",
    projectDetails: {
      value: "$15,000",
      timeEstimate: "4 Weeks",
      employeeNeed: "3 Person",
    },
    customer: {
      name: "Ali Mounji",
      location: "2972 Westheimer Rd.",
      email: "alimounji@gmail.com",
      phone: "+41 123 562 00",
    },
    projectDescription:
      "Lorem ipsum dolor sit amet consectetur. Amet amet vestibulum sed egestas nibh purus sit vitae venenatis.",
    submissionDate: "15/01/2024",
  },
  {
    id: 2,
    title: "Garden Landscaping",
    description:
      "Landscaping and maintenance of garden, new plantings and lawn work",
    amount: "$8,000",
    timeEstimate: "3 Weeks",
    postedDate: "18/01/2024",
    status: "completed",
    projectDetails: {
      value: "$8,000",
      timeEstimate: "3 Weeks",
      employeeNeed: "2 Person",
    },
    customer: {
      name: "John Doe",
      location: "4512 Maple Ave.",
      email: "johndoe@gmail.com",
      phone: "+41 123 762 99",
    },
    projectDescription:
      "Complete landscaping including tree planting and lawn seeding for the entire backyard.",
    submissionDate: "18/01/2024",
  },
  {
    id: 3,
    title: "Home Painting",
    description: "Full house painting, both interior and exterior work",
    amount: "$10,000",
    timeEstimate: "2 Weeks",
    postedDate: "20/01/2024",
    status: "rejected",
    projectDetails: {
      value: "$10,000",
      timeEstimate: "2 Weeks",
      employeeNeed: "4 Person",
    },
    customer: {
      name: "Sarah Clark",
      location: "983 Park Ln.",
      email: "sarahclark@gmail.com",
      phone: "+41 123 859 30",
    },
    projectDescription:
      "Full repaint of the house, including the exterior, fences, and all rooms inside.",
    submissionDate: "20/01/2024",
  },
  {
    id: 4,
    title: "Driveway Construction",
    description: "Construction of a new concrete driveway and parking area",
    amount: "$18,000",
    timeEstimate: "5 Weeks",
    postedDate: "25/01/2024",
    status: "active",
    projectDetails: {
      value: "$18,000",
      timeEstimate: "5 Weeks",
      employeeNeed: "5 Person",
    },
    customer: {
      name: "Emma Rose",
      location: "22 Oak St.",
      email: "emmarose@gmail.com",
      phone: "+41 124 245 13",
    },
    projectDescription:
      "Construction of a new driveway using high-quality concrete with a polished finish.",
    submissionDate: "25/01/2024",
  },
  {
    id: 5,
    title: "Roof Replacement",
    description: "Complete roof replacement, new shingles and insulation",
    amount: "$20,000",
    timeEstimate: "3 Weeks",
    postedDate: "30/01/2024",
    status: "completed",
    projectDetails: {
      value: "$20,000",
      timeEstimate: "3 Weeks",
      employeeNeed: "6 Person",
    },
    customer: {
      name: "Michael James",
      location: "1510 Pine St.",
      email: "michaeljames@gmail.com",
      phone: "+41 125 762 50",
    },
    projectDescription:
      "Remove the old roof and replace it with energy-efficient materials for improved insulation.",
    submissionDate: "30/01/2024",
  },
  {
    id: 6,
    title: "Kitchen Remodeling",
    description:
      "Complete kitchen remodel with new cabinets, countertops, and flooring",
    amount: "$22,000",
    timeEstimate: "6 Weeks",
    postedDate: "02/02/2024",
    status: "rejected",
    projectDetails: {
      value: "$22,000",
      timeEstimate: "6 Weeks",
      employeeNeed: "4 Person",
    },
    customer: {
      name: "Lucas Green",
      location: "1023 Green Valley Rd.",
      email: "lucasgreen@gmail.com",
      phone: "+41 126 453 11",
    },
    projectDescription:
      "Kitchen remodel with new modern appliances, new flooring, and custom cabinets.",
    submissionDate: "02/02/2024",
  },
  {
    id: 7,
    title: "Basement Renovation",
    description:
      "Finishing basement for living space with insulation and drywall",
    amount: "$12,000",
    timeEstimate: "4 Weeks",
    postedDate: "05/02/2024",
    status: "active",
    projectDetails: {
      value: "$12,000",
      timeEstimate: "4 Weeks",
      employeeNeed: "3 Person",
    },
    customer: {
      name: "Rachel Adams",
      location: "900 Birchwood Dr.",
      email: "racheladams@gmail.com",
      phone: "+41 127 598 00",
    },
    projectDescription:
      "Complete basement renovation to create a family room and laundry area.",
    submissionDate: "05/02/2024",
  },
  {
    id: 8,
    title: "Bathroom Remodel",
    description: "Full bathroom remodel including new tub, tiles, and plumbing",
    amount: "$8,000",
    timeEstimate: "2 Weeks",
    postedDate: "10/02/2024",
    status: "completed",
    projectDetails: {
      value: "$8,000",
      timeEstimate: "2 Weeks",
      employeeNeed: "2 Person",
    },
    customer: {
      name: "Oliver Taylor",
      location: "456 Maple Dr.",
      email: "olivertaylor@gmail.com",
      phone: "+41 128 322 90",
    },
    projectDescription:
      "Full bathroom renovation with high-end fixtures and modern tile work.",
    submissionDate: "10/02/2024",
  },
  {
    id: 9,
    title: "Fence Installation",
    description: "Installation of a new wooden privacy fence in the backyard",
    amount: "$5,000",
    timeEstimate: "2 Weeks",
    postedDate: "15/02/2024",
    status: "active",
    projectDetails: {
      value: "$5,000",
      timeEstimate: "2 Weeks",
      employeeNeed: "2 Person",
    },
    customer: {
      name: "Sophia Wright",
      location: "673 Hilltop Rd.",
      email: "sophiawright@gmail.com",
      phone: "+41 129 765 10",
    },
    projectDescription:
      "Install a new privacy fence around the backyard with treated wood.",
    submissionDate: "15/02/2024",
  },
  {
    id: 10,
    title: "Siding Replacement",
    description: "Replace old siding with modern, energy-efficient materials",
    amount: "$16,000",
    timeEstimate: "4 Weeks",
    postedDate: "20/02/2024",
    status: "rejected",
    projectDetails: {
      value: "$16,000",
      timeEstimate: "4 Weeks",
      employeeNeed: "5 Person",
    },
    customer: {
      name: "Amelia King",
      location: "3012 Sunset Blvd.",
      email: "ameliaking@gmail.com",
      phone: "+41 130 852 40",
    },
    projectDescription:
      "Replace existing siding with high-quality, insulated siding for improved energy efficiency.",
    submissionDate: "20/02/2024",
  },
  {
    id: 11,
    title: "Garage Construction",
    description:
      "Build a new detached garage with a concrete foundation and steel frame",
    amount: "$25,000",
    timeEstimate: "8 Weeks",
    postedDate: "25/02/2024",
    status: "active",
    projectDetails: {
      value: "$25,000",
      timeEstimate: "8 Weeks",
      employeeNeed: "6 Person",
    },
    customer: {
      name: "Benjamin Scott",
      location: "4597 Oakwood Dr.",
      email: "benjaminscott@gmail.com",
      phone: "+41 131 446 70",
    },
    projectDescription:
      "Construction of a detached garage with concrete foundation and steel frame.",
    submissionDate: "25/02/2024",
  },
];

// const bidData = [
//   {
//     id: 1,
//     title: "Home Renovation",
//     description:
//       "Complete kitchen and bathroom renovation needed for a 3-bedroom house",
//     amount: "$15,000",
//     timeEstimate: "4 Weeks",
//     postedDate: "15/01/2024",
//     status: "active",
//     projectDetails: {
//       value: "$15,000",
//       timeEstimate: "4 Weeks",
//       employeeNeed: "3 Person",
//     },
//     customer: {
//       name: "Ali Mounji",
//       location: "2972 Westheimer Rd.",
//       email: "alimounji@gmail.com",
//       phone: "+41 123 562 00",
//     },
//     projectDescription:
//       "Lorem ipsum dolor sit amet consectetur. Amet amet vestibulum sed egestas nibh purus sit vitae venenatis.",
//     submissionDate: "15/01/2024",
//   },
//   // Add more bids as needed
// ];
