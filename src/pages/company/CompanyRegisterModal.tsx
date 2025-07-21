import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

type CompanyRegisterModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { businessMail: string; companyLocation: string }) => void;
};

type FormData = {
  businessMail: string;
  companyLocation: string;
};

export const CompanyRegisterModal = ({
  open,
  onClose,
  onSubmit,
}: CompanyRegisterModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  // Prevent default behavior and handle form submission
  const handleFormSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    onSubmit(data); // Send data to parent
    reset();
    onClose(); // Close modal after submission
  };

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <form
          onSubmit={handleSubmit(handleFormSubmit)} // Ensure you're using react-hook-form to handle the submit
          className="space-y-4"
        >
          {/* Business Mail */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Business Mail
            </label>
            <Input
              autoFocus
              type="email"
              placeholder="e.g. yourbusiness@mail.com"
              {...register("businessMail", {
                required: "Business mail is required",
                pattern: {
                  value: /^[^@]+@[^@]+\.[^@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="ring-2 ring-gray-100"
            />
            {errors.businessMail && (
              <p className="text-sm text-red-500 mt-1">
                {errors.businessMail.message}
              </p>
            )}
          </div>

          {/* Company Location */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Location
            </label>
            <Input
              type="text"
              placeholder="e.g. New York, USA"
              {...register("companyLocation", {
                required: "Company location is required",
              })}
              className="ring-2 ring-gray-100"
            />
            {errors.companyLocation && (
              <p className="text-sm text-red-500 mt-1">
                {errors.companyLocation.message}
              </p>
            )}
          </div>

          <DialogFooter className="flex w-full pt-4">
            {/* Submit Button */}
            <Button
              type="submit" // Ensure the submit button type is set
              className="bg-primary text-white w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Continue"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useForm } from "react-hook-form";
// import { useEffect } from "react";

// type CompanyRegisterModalProps = {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (data: { businessMail: string; companyLocation: string }) => void;
// };

// type FormData = {
//   businessMail: string;
//   companyLocation: string;
// };

// export const CompanyRegisterModal = ({
//   open,
//   onClose,
//   onSubmit,
// }: CompanyRegisterModalProps) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm<FormData>();

//   // Prevent default behavior and handle form submission
//   const handleFormSubmit = (data: FormData) => {
//     console.log("Form Submitted:", data);
//     onSubmit(data); // Send data to parent
//     reset();
//     onClose(); // Close modal after submission
//   };

//   useEffect(() => {
//     if (!open) reset();
//   }, [open, reset]);

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-md">
//         <form
//           onSubmit={handleSubmit(handleFormSubmit)} // Ensure you're using react-hook-form to handle the submit
//           className="space-y-4"
//         >
//           {/* Business Mail */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Business Mail
//             </label>
//             <Input
//               autoFocus
//               type="email"
//               placeholder="e.g. yourbusiness@mail.com"
//               {...register("businessMail", {
//                 required: "Business mail is required",
//                 pattern: {
//                   value: /^[^@]+@[^@]+\.[^@]+$/,
//                   message: "Invalid email address",
//                 },
//               })}
//               className="ring-2 ring-gray-100"
//             />
//             {errors.businessMail && (
//               <p className="text-sm text-red-500 mt-1">
//                 {errors.businessMail.message}
//               </p>
//             )}
//           </div>

//           {/* Company Location */}
//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Company Location
//             </label>
//             <Input
//               type="text"
//               placeholder="e.g. New York, USA"
//               {...register("companyLocation", {
//                 required: "Company location is required",
//               })}
//               className="ring-2 ring-gray-100"
//             />
//             {errors.companyLocation && (
//               <p className="text-sm text-red-500 mt-1">
//                 {errors.companyLocation.message}
//               </p>
//             )}
//           </div>

//           <DialogFooter className="flex w-full pt-4">
//             {/* Submit Button */}
//             <Button
//               type="submit" // Ensure the submit button type is set
//               className="bg-primary text-white w-full"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Continue"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };
