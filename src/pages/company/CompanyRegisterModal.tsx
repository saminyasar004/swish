// import {
//   Dialog,
//   DialogContent,
//   DialogFooter,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import { useForm } from "react-hook-form";
// import { useEffect } from "react";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
// import { Label } from "@/components/ui/label";

// type CompanyRegisterModalProps = {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (data: FormData) => void;
// };

// export type FormData = {
//   companyName: string;
//   orgNumber: string;
//   address: string;
//   city: string;
//   mail: string;
//   about: string;
//   homepage: string;
//   facebook: string;
//   instagram: string;
//   youtube: string;
//   tiktok: string;
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

//   const handleFormSubmit = (data: FormData) => {
//     console.log("Form Submitted:", data);
//     onSubmit(data);
//     reset();
//     onClose();
//   };

//   useEffect(() => {
//     if (!open) reset();
//   }, [open, reset]);

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-3xl">
//         <DialogTitle className="text-2xl font-semibold ">
//           Company Info
//         </DialogTitle>

//         <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-2">
//           {/* Row 1: Company Name & Org Number */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label>Company Name</Label>
//               <Input
//                 className="ring-2 ring-gray-200 mt-2"
//                 placeholder="Enter Company Name"
//                 {...register("companyName", {
//                   required: "Company name is required",
//                 })}
//               />
//               {errors.companyName && (
//                 <p className="text-xs text-error">
//                   {errors.companyName.message}
//                 </p>
//               )}
//             </div>

//             <div>
//               <Label>Org. number (ICE)</Label>
//               <Input
//                 className="ring-2 ring-gray-200 mt-2"
//                 placeholder="Enter ICE Number"
//                 {...register("orgNumber", {
//                   required: "Organization number is required",
//                 })}
//               />
//               {errors.orgNumber && (
//                 <p className="text-sm text-error">
//                   {errors.orgNumber.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Row 2: Address & City */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label>Address</Label>
//               <Input
//                 className="ring-2 ring-gray-200 mt-2"
//                 placeholder="Company Address"
//                 {...register("address", { required: "Address is required" })}
//               />
//               {errors.address && (
//                 <p className="text-sm text-error">{errors.address.message}</p>
//               )}
//             </div>

//             <div>
//               <Label>City</Label>
//               <Input
//                 className="ring-2 ring-gray-200 mt-2"
//                 placeholder="Enter City"
//                 {...register("city", { required: "City is required" })}
//               />
//               {errors.city && (
//                 <p className="text-sm text-error">{errors.city.message}</p>
//               )}
//             </div>
//           </div>

//           {/* Row 3: Business Mail */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label>Business Mail</Label>
//               <Input
//                 className="ring-2 ring-gray-200 mt-2"
//                 placeholder="Enter Business Mail"
//                 {...register("mail", { required: "Business Mail is required" })}
//               />
//               {errors.city && (
//                 <p className="text-sm text-error">{errors.mail.message}</p>
//               )}
//             </div>
//           </div>

//           {/* About */}
//           <div>
//             <Label>About</Label>
//             <Textarea
//               className="ring-2 ring-gray-200 mt-2"
//               placeholder="Describe"
//               rows={2}
//               {...register("about", { required: "About section is required" })}
//             />
//             {errors.about && (
//               <p className="text-sm text-error">{errors.about.message}</p>
//             )}
//           </div>

//           {/* Social Media */}
//           <div>
//             <Label>Social media</Label>
//             <div className="space-y-2">
//               {[
//                 { name: "homepage", label: "Homepage" },
//                 { name: "facebook", label: "Facebook" },
//                 { name: "instagram", label: "Instagram" },
//                 { name: "youtube", label: "YouTube" },
//                 { name: "tiktok", label: "TikTok" },
//               ].map((field) => (
//                 <div key={field.name} className="grid grid-cols-3 gap-2  mt-2">
//                   <Input
//                     value={field.label}
//                     readOnly
//                     className="bg-gray-100 text-gray-700 col-span-1 cursor-default hover:bg-none hover:ring-0 hover:shadow-none focus:bg-none focus:ring-0 focus:shadow-none"
//                   />
//                   <Input
//                    className="ring-2 ring-gray-200 col-span-2"
//                     placeholder="Enter link..."
//                     {...register(field.name as keyof FormData)}

//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Footer */}
//           <DialogFooter className="pt-4">
//             <Button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white w-full"
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

// =============================
// File: components/register/CompanyRegisterModal.tsx
// =============================

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

export type CompanyFormData = {
  companyName: string;
  orgNumber: string;
  address: string;
  city: string;
  mail: string;
  about: string;
  homepage?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
  tiktok?: string;
};

export type CompanyRegisterModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CompanyFormData) => void;
  onBack?: () => void;
};

export const CompanyRegisterModal = ({
  open,
  onClose,
  onSubmit,
  onBack,
}: CompanyRegisterModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CompanyFormData>();

  const handleFormSubmit = (data: CompanyFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl shadow-2xl"
        onInteractOutside={(e) => e.preventDefault()} // optional: block outside click
        onEscapeKeyDown={(e) => e.preventDefault()} // optional: block Esc
      >
        <div className="flex items-center gap-2">
          {onBack && (
            <button
              type="button"
              aria-label="Back"
              className="rounded-full p-1 bg-primary hover:bg-muted"
              onClick={onBack}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <DialogTitle className="text-2xl font-semibold">
            Company Info
          </DialogTitle>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-2 overflow-y-auto px-2">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Company Name</Label>
              <Input
                className="ring-2 ring-gray-200 mt-1 lg:h-12"
                placeholder="Enter Company Name"
                {...register("companyName", {
                  required: "Company name is required",
                })}
              />
              {errors.companyName && (
                <p className="text-xs text-error">
                  {errors.companyName.message}
                </p>
              )}
            </div>
            <div>
              <Label>Org. number (ICE)</Label>
              <Input
                className="ring-2 ring-gray-200 mt-1"
                placeholder="Enter ICE Number"
                {...register("orgNumber", {
                  required: "Organization number is required",
                })}
              />
              {errors.orgNumber && (
                <p className="text-xs text-error">{errors.orgNumber.message}</p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Address</Label>
              <Input
                className="ring-2 ring-gray-200 mt-1"
                placeholder="Company Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <p className="text-xs text-error">{errors.address.message}</p>
              )}
            </div>
            <div>
              <Label>City</Label>
              <Input
                className="ring-2 ring-gray-200 mt-1"
                placeholder="Enter City"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <p className="text-xs text-error">{errors.city.message}</p>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Business Mail</Label>
              <Input
                className="ring-2 ring-gray-200 mt-1"
                placeholder="Enter Business Mail"
                type="email"
                {...register("mail", {
                  required: "Business mail is required",
                  pattern: {
                    value: /[^\s@]+@[^\s@]+\.[^\s@]+/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.mail && (
                <p className="text-xs text-error">{errors.mail.message}</p>
              )}
            </div>
          </div>

          {/* About */}
          <div>
            <Label>About</Label>
            <Textarea
              className="ring-2 ring-gray-200 mt-1"
              placeholder="Describe"
              rows={2}
              {...register("about", { required: "About section is required" })}
            />
            {errors.about && (
              <p className="text-xs text-error">{errors.about.message}</p>
            )}
          </div>

          {/* Socials */}
          <div>
            <Label>Social media</Label>
            <div className="space-y-2">
              {[
                { name: "homepage", label: "Homepage" },
                { name: "facebook", label: "Facebook" },
                { name: "instagram", label: "Instagram" },
                { name: "youtube", label: "YouTube" },
                { name: "tiktok", label: "TikTok" },
              ].map((field) => (
                <div key={field.name} className="grid grid-cols-3 gap-2 mt-1">
                  <Input
                    value={field.label}
                    readOnly
                    className="bg-gray-100 text-gray-700 col-span-1"
                  />
                  <Input
                    className="ring-2 ring-gray-200 col-span-2"
                    placeholder="Enter link..."
                    {...register(field.name as keyof CompanyFormData)}
                  />
                </div>
              ))}
            </div>
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="submit"
              className="bg-primary hover:bg-secondary text-white w-full transition-all ease-in-out duration-200 "
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
