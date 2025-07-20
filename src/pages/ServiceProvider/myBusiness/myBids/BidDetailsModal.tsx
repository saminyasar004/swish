import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"; // Assuming ShadCN is installed

import { Calendar, MessageCircle, Timer } from "lucide-react";

type BidDetailsModalProps = {
  bid: any;
  onClose: () => void;
};

export function BidDetailsModal({ bid, onClose }: BidDetailsModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-xl shadow-lg p-8 w-3/4 max-w-3xl">
        {/* Header: Title and Close Button */}
        <div className="flex justify-between items-center mb-2">
          <DialogTitle className="text-2xl font-semibold text-blackSecondary">
            Bid Details
          </DialogTitle>
          {/* <DialogClose className="text-xl text-blackSecondary hover:text-gray-500">
            ✖
          </DialogClose> */}
        </div>

        {/* Posted Date */}
        <div className="mb-2">
          <p className="flex items-center gap-2">
            <Calendar size={16} /> <p>{bid.postedDate}</p>
          </p>
        </div>

        {/* Bid Title and Status */}
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-blackSecondary">
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

        {/* Project Description */}
        <div className="bg-liquidGreen p-4 rounded-md mt-4">
          <h4 className="font-medium text-blackPrimary mb-4">
            Project Description
          </h4>
          <p className="text-blackSecondary">{bid.projectDescription}</p>
        </div>

        <hr className="border-t border-gray-200 my-4" />

        {/* Project Details */}
        <div>
          <h3 className="text-lg font-semibold text-blackPrimary">
            Project Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-[#EFF6FF] p-4 rounded-md">
              <h4 className="font-medium text-blackSecondary mb-2">
                $ Project Value
              </h4>
              <p className="text-[#2562E9]">{bid.projectDetails.value}</p>
            </div>
            <div className="bg-[#ECF9F0] p-4 rounded-md">
              <h4 className="font-medium text-blackSecondary flex items-center gap-2 mb-2">
                <Calendar size={16} /> Time Estimate
              </h4>
              <p className="text-[#2562E9]">
                {bid.projectDetails.timeEstimate}
              </p>
            </div>
            <div className="bg-[#F9F9EC] p-4 rounded-md">
              <h4 className="font-medium text-blackSecondary mb-2">
                Employee Need
              </h4>
              <p className="text-[#2562E9]">
                {bid.projectDetails.employeeNeed}
              </p>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <div className="mt-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-xl text-blackSecondary">
              Customer Information
            </h4>
            <Button>
              {" "}
              <MessageCircle size={12} /> Message
            </Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-md">
            <p>
              <strong className="font-semibold">Name:</strong>{" "}
              {bid.customer.name}
            </p>
            <p>
              <strong className="font-semibold">Location:</strong>{" "}
              {bid.customer.location}
            </p>
            <p>
              <strong className="font-semibold">Email:</strong>{" "}
              {bid.customer.email}
            </p>
            <p>
              <strong className="font-semibold">Phone:</strong>{" "}
              {bid.customer.phone}
            </p>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-2 text-center">
          <p className="text-sm text-blackSecondary bg-liquidGreen p-3 rounded-md">
            <strong>Bid Submitted on:</strong> {bid.submissionDate}
          </p>
          {/* <Button className="mt-4" onClick={onClose}>
            Close
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function getStatusBadge(status: string) {
  switch (status) {
    case "active":
      return (
        <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
          🟢 Active
        </span>
      );
    case "completed":
      return (
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
          ✅ Completed
        </span>
      );
    case "rejected":
      return (
        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
          ❌ Rejected
        </span>
      );
    default:
      return null;
  }
}

// import { useState } from "react";
// import { Button } from "@/components/ui/button"; // Assuming you have a button component
// import { Calendar, Timer } from "lucide-react";

// type BidDetailsModalProps = {
//   bid: any;
//   onClose: () => void;
// };

// export function BidDetailsModal({ bid, onClose }: BidDetailsModalProps) {
//   return (
//     <div className="fixed inset-0 bg-blacktext-blackSecondary bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white rounded-xl shadow-lg p-8 w-3/4 max-w-3xl">
//         {/* Header: Title and Close Button */}
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-2xl font-semibold text-blackSecondary">
//             Bid Details
//           </h2>
//           <button onClick={onClose} className="text-xl text-blackSecondary">
//             ✖
//           </button>
//         </div>
//         <div className="mb-6">
//           <p className="flex  items-center  gap-2 ">
//             <Calendar size={16} /> <p>{bid.postedDate}</p>
//           </p>
//         </div>

//         {/* Bid Title and Status */}
//         <div className="flex items-center gap-2 mb-4">
//           <h3 className="text-lg font-semibold text-blackSecondary">
//             {bid?.title}
//           </h3>
//           <Button
//             size="sm"
//             className={`rounded-full flex items-center gap-2 ${
//               bid?.status === "active"
//                 ? "bg-primary text-white"
//                 : bid?.status === "completed"
//                 ? "bg-gray-500 text-primary"
//                 : bid?.status === "rejected"
//                 ? "bg-red-500 text-white"
//                 : ""
//             }`}
//           >
//             <Timer size={12} />
//             {bid?.status}
//           </Button>
//         </div>

//         {/* Project Description */}
//         <div className="bg-liquidGreen p-4 rounded-md mt-4">
//           <h4 className="font-medium text-blackPrimary mb-4">
//             Project Description
//           </h4>
//           <p className="text-blackSecondary">{bid.projectDescription}</p>
//         </div>

//         <hr className="border-t border-gray-200 my-6" />

//         {/* Project Details */}
//         <div>
//           <h3 className="text-lg font-semibold text-blackPrimary">
//             Project Details
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//             <div className="bg-[#EFF6FF] p-4 rounded-md">
//               <h4 className="font-medium text-blackSecondary mb-2">
//                 $ Project Value
//               </h4>
//               <p className="text-[#2562E9]">{bid.projectDetails.value}</p>
//             </div>
//             <div className="bg-[#ECF9F0] p-4 rounded-md">
//               <h4 className="font-medium text-blackSecondary flex items-center gap-2 mb-2">
//                 {" "}
//                 <Calendar size={16} /> Time Estimate
//               </h4>
//               <p className="text-[#2562E9]">
//                 {bid.projectDetails.timeEstimate}
//               </p>
//             </div>
//             <div className="bg-[#F9F9EC] p-4 rounded-md ">
//               <h4 className="font-medium text-blackSecondary mb-2">
//                 Employee Need
//               </h4>
//               <p className="text-[#2562E9]">
//                 {bid.projectDetails.employeeNeed}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Customer Information */}
//         <div className="mt-6">
//           <h4 className="font-medium text-blackSecondary">
//             Customer Information
//           </h4>
//           <div className="bg-gray-100 p-4 rounded-md">
//             <p>
//               <strong className="font-semibold">Name:</strong>{" "}
//               {bid.customer.name}
//             </p>
//             <p>
//               <strong className="font-semibold">Location:</strong>{" "}
//               {bid.customer.location}
//             </p>
//             <p>
//               <strong className="font-semibold">Email:</strong>{" "}
//               {bid.customer.email}
//             </p>
//             <p>
//               <strong className="font-semibold">Phone:</strong>{" "}
//               {bid.customer.phone}
//             </p>
//           </div>
//         </div>

//         {/* Bottom footer */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-500">
//             <strong>Bid Submitted on:</strong> {bid.submissionDate}
//           </p>
//           <Button className="mt-4" onClick={onClose}>
//             Close
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function getStatusBadge(status: string) {
//   switch (status) {
//     case "active":
//       return (
//         <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
//           🟢 Active
//         </span>
//       );
//     case "completed":
//       return (
//         <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
//           ✅ Completed
//         </span>
//       );
//     case "rejected":
//       return (
//         <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
//           ❌ Rejected
//         </span>
//       );
//     default:
//       return null;
//   }
// }
