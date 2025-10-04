import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import companyProfile from "@/assets/images/SearchCompanyLogo.svg";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  company_name: string;
  logo: string;
  rating: number;
  company: number;
  description?: string;
}

export default function PrevUsedCompanyCard({ job }: { job: CardProps }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState<"contact" | "previous">("contact");

  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < Math.round(job?.rating || 0));

  const handleOpen = () => {
    setIsModalOpen(true);
    setStep("contact");
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setTimeout(() => setStep("contact"), 300); // reset smoothly after close
  };

  return (
    <>
      {/* Card */}
      <div className="flex flex-col border rounded-lg p-4 shadow-md bg-white w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
        <div className="flex items-center">
          <img
            src={job?.logo || companyProfile}
            alt={job?.company_name}
            className="w-20 h-20 rounded-full mr-4 object-cover"
          />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{job?.company_name}</h3>
            <div className="flex items-center mt-2">
              {stars.map((filled, index) => (
                <span
                  key={index}
                  className={filled ? "text-yellow-500" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-500">
                ({job?.rating || 0})
              </span>
            </div>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={handleOpen}
          className="mt-4 w-full border border-primary text-primary hover:bg-liquidGreen hover:text-secondary font-semibold transition-all"
        >
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </Button>
      </div>

      {/* Single Modal with dynamic content */}
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[400px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {step === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -5 }}
                transition={{ duration: 0.15 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-center">
                    Contact company
                  </DialogTitle>
                </DialogHeader>

                <p className="text-center text-gray-600 mt-2 mb-4 text-sm">
                  Do you want to contact the company about a new job or do you
                  have any questions about a previously completed job?
                </p>

                <div className="flex gap-3 mt-4">
                  <Button
                    variant="outline"
                    className="flex-1 font-medium"
                    onClick={() => setStep("previous")}
                  >
                    Previous job
                  </Button>
                  <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium">
                    <Plus className="mr-2 h-4 w-4" />
                    New job
                  </Button>
                </div>
              </motion.div>
            )}

            {step === "previous" && (
              <motion.div
                key="previous"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.15 }}
              >
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-center">
                    Which job does it apply to?
                  </DialogTitle>
                </DialogHeader>

                <div className="flex items-center gap-3 border rounded-lg p-3 shadow-sm cursor-pointer hover:bg-gray-50 transition">
                  <img
                    src={job?.logo || companyProfile}
                    alt={job?.company_name}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="text-base font-semibold">
                      {job?.company_name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {job?.description ||
                        "Give your home a new lease of life with ALISSA interior team..."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setStep("contact")}
                  >
                    Back
                  </Button>
                  <Link
                    to={`/profile/message/inbox/${job?.company}`}
                    className="flex-1"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium">
                      Go to job
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </>
  );
}

// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Mail, Plus } from "lucide-react";
// import { Link } from "react-router-dom";
// import companyProfile from "@/assets/images/SearchCompanyLogo.svg";

// interface CardProps {
//   company_name: string;
//   logo: string;
//   rating: number;
//   company: number;
//   description?: string;
// }

// export default function PrevUsedCompanyCard({ job }: { job: CardProps }) {
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);
//   const [isPreviousJobModalOpen, setIsPreviousJobModalOpen] = useState(false);

//   const stars = Array(5)
//     .fill(false)
//     .map((_, index) => index < Math.round(job?.rating || 0));

//   return (
//     <>
//       {/* Main Card */}
//       <div className="flex flex-col border rounded-lg p-4 shadow-md bg-white w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
//         <div className="flex items-center">
//           <img
//             src={job?.logo || companyProfile}
//             alt={job?.company_name}
//             className="w-20 h-20 rounded-full mr-4 object-cover"
//           />
//           <div className="ml-4">
//             <h3 className="text-lg font-semibold">{job?.company_name}</h3>
//             <div className="flex items-center mt-2">
//               {stars.map((filled, index) => (
//                 <span
//                   key={index}
//                   className={filled ? "text-yellow-500" : "text-gray-300"}
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="ml-2 text-sm text-gray-500">
//                 ({job?.rating || 0})
//               </span>
//             </div>
//           </div>
//         </div>

//         <Button
//           variant="outline"
//           onClick={() => setIsContactModalOpen(true)}
//           className="mt-4 w-full border border-primary text-primary hover:bg-liquidGreen hover:text-secondary font-semibold transition-all"
//         >
//           <Mail className="mr-2 h-4 w-4" />
//           Contact
//         </Button>
//       </div>

//       {/* First Modal — Contact Company */}
//       <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
//         <DialogContent className="sm:max-w-[400px] rounded-2xl transition-all">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-semibold text-center">
//               Contact company
//             </DialogTitle>
//           </DialogHeader>

//           <p className="text-center text-gray-600 mt-2 mb-4 text-sm">
//             Do you want to contact the company about a new job or do you have
//             any questions about a previously completed job?
//           </p>

//           <div className="flex gap-3 mt-4">
//             <Button
//               variant="outline"
//               className="flex-1 font-medium"
//               onClick={() => {
//                 setIsContactModalOpen(false);
//                 setTimeout(() => setIsPreviousJobModalOpen(true), 200); // smooth transition
//               }}
//             >
//               Previous job
//             </Button>
//             <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium">
//               <Plus className="mr-2 h-4 w-4" />
//               New job
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Second Modal — Previous Job */}
//       <Dialog
//         open={isPreviousJobModalOpen}
//         onOpenChange={setIsPreviousJobModalOpen}
//       >
//         <DialogContent className="sm:max-w-[400px] rounded-2xl transition-all">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-semibold text-center">
//               Which job does it apply to?
//             </DialogTitle>
//           </DialogHeader>

//           <div className="flex items-center gap-3 border rounded-lg p-3 shadow-sm cursor-pointer hover:bg-gray-50 transition">
//             <img
//               src={job?.logo || companyProfile}
//               alt={job?.company_name}
//               className="w-14 h-14 rounded-md object-cover"
//             />
//             <div>
//               <h4 className="text-base font-semibold">{job?.company_name}</h4>
//               <p className="text-sm text-gray-600 line-clamp-2">
//                 {job?.description ||
//                   "Give your home a new lease of life with ALISSA interior team..."}
//               </p>
//             </div>
//           </div>

//           <Link to={`/profile/message/${job?.company}`} className="w-full">
//             <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-medium">
//               Go to job
//             </Button>
//           </Link>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }
