// // import Logo from "@/assets/images/LogoLight.svg";
// import Logo from "@/assets/images/logoWhiteIcon.svg";
// import { categories } from "@/components/common/Header"; // Ensure categories are imported
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import { CompanyRegisterModal, FormData } from "./CompanyRegisterModal";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { toast } from "sonner";
// import { Label } from "@/components/ui/label";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { CompanyOpeningHour } from "./CompanyOpeningHoure";
// import { useSingleSubCategoryListByIdQuery } from "@/redux/features/registerCompany/companySubcategory.api";

// export default function RegisterHero() {
//   const [allData, setAllData] = useState({});
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isOpeningHoursModalOpen, setOpeningHoursModalOpen] = useState(false);
//   const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
//   const [isSubcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
//   const [isUploadModalOpen, setUploadModalOpen] = useState(false); // New modal for upload step
//   const [activeCategory, setActiveCategory] = useState<number | string | null>(
//     null
//   ); // Active category for subcategories
//   const [phone, setPhone] = useState("");
//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     logo: null,
//     wallpaper: null,
//     logoPreview: "",
//     wallpaperPreview: "",
//   });
//   const [selectedCategories, setSelectedCategories] = useState<string>();
//   const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
//     []
//   );

//   // FOR SUBCATEGORY GET
//   const { data: subcategories } = useSingleSubCategoryListByIdQuery(
//     activeCategory,
//     { skip: !activeCategory }
//   );
//   console.log({ subcategories });

//   // STEP:1
//   // HOME PAGE COMPANY NAME AND TELEPHONE
//   const [errors, setErrors] = useState<{
//     companyName?: string;
//     phone?: string;
//   }>({});
//   const normalizePhone = (v: string) => v.replace(/\D/g, "");
//   const isPhoneValid = (v: string) => {
//     const digits = normalizePhone(v);
//     // Basic E.164-ish check: 8–15 digits (tweak if you need stricter rules)
//     return digits.length >= 8 && digits.length <= 15;
//   };

//   const validateStepOne = () => {
//     const nextErrors: { companyName?: string; phone?: string } = {};

//     if (!formData.companyName.trim()) {
//       nextErrors.companyName = "Company name is required.";
//     }

//     if (!phone.trim()) {
//       nextErrors.phone = "Telephone is required.";
//     } else if (!isPhoneValid(phone)) {
//       nextErrors.phone = "Enter a valid phone number.";
//     }

//     setErrors(nextErrors);
//     return Object.keys(nextErrors).length === 0;
//   };

//   const handleContinueClick = () => {
//     if (!validateStepOne()) return;

//     // Persist the phone in your formData (store with + prefix if you like)
//     setFormData((prev) => ({
//       ...prev,
//       phone: phone.startsWith("+") ? phone : `+${phone}`,
//     }));

//     // proceed to next modal/step
//     setModalOpen(true);
//   };

//   // Handle form data collection for company registration
//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };
//   // END OF HOME PAGE COMPANY NAME AND TELEPHONE

//   // STEP:2
//   // HERE OPEN COMPANY REGISTER MODAL FROM PREVIOUS STEP AND SUBMIT
//   // Handle modal form data submission (Company registration)
//   const handleModalSubmit = (modalData: FormData) => {
//     const completeData = { ...formData, ...modalData };
//     console.log("Complete Data to Backend:", completeData);

//     setAllData(completeData);

//     // Send the complete data to your backend (API call)
//     setModalOpen(false);
//     // setCategoryModalOpen(true); // Open Category Modal after submitting company form
//     setOpeningHoursModalOpen(true); // Open opening hours modal
//   };
//   // END OF STEP:2

//   // STEP:3
//   // HERE OPEN OPENING HOURS MODAL FROM PREVIOUS STEP
//   const handleOpeningHoursModalSubmit = (modalDataWithHour) => {
//     const completeDataWithOpeningHours = { ...allData, ...modalDataWithHour };
//     console.log(
//       "Complete completeDataWithOpeningHours to Backend:",
//       completeDataWithOpeningHours
//     );
//     setAllData(completeDataWithOpeningHours);
//     // Send the complete data to your backend (API call)
//     setModalOpen(false);
//     setCategoryModalOpen(true); // Open Category Modal after submitting company form
//   };
//   // END OF STEP:3

//   // STEP:4
//   // Open subcategory modal when category is clicked
//   const openSubcategoryModal = (categoryId: number, categoryName: string) => {
//     setActiveCategory(categoryId); // Set the active category
//     setSelectedCategories(categoryName);
//     setSubcategoryModalOpen(true); // Open the subcategory modal
//   };

//   // Handle subcategory checkbox change
//   const handleSubcategoryChange = (subCategoryId: number, checked: boolean) => {
//     if (checked) {
//       setSelectedSubcategories((prev) => [...prev, subCategoryId]);
//     } else {
//       setSelectedSubcategories((prev) =>
//         prev.filter((sub) => sub !== subCategoryId)
//       );
//     }
//   };

//   // Handle subcategory modal submission
//   const handleSubcategoryModalSubmit = () => {
//     // You can send the selected subcategories along with other form data
//     console.log("Selected Subcategories:", selectedSubcategories);
//     setSubcategoryModalOpen(false); // Close the subcategory modal
//   };

//   // Handle category modal submission (Submit categories and subcategories)
//   const handleCategoryModalSubmit = () => {
//     const allCompanyData = {
//       ...allData,
//       // selectedCategories,
//       selectedSubcategories,
//     };
//     console.log(
//       "Complete Data to Backend with Categories and Subcategories:",
//       allCompanyData
//     );

//     // Send this data to the backend as needed
//     setCategoryModalOpen(false); // Close the category modal after submission
//     setUploadModalOpen(true); // Open the upload modal
//   };
//   // END OF STEP:4

//   // Cleanup object URLs on unmount
//   useEffect(() => {
//     return () => {
//       if (formData.logoPreview) URL.revokeObjectURL(formData.logoPreview);
//       if (formData.wallpaperPreview)
//         URL.revokeObjectURL(formData.wallpaperPreview);
//     };
//   }, [formData.logoPreview, formData.wallpaperPreview]);

//   // Handle file selection (logo and wallpaper)
//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     type: "logo" | "wallpaper"
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const previewURL = URL.createObjectURL(file);

//       setFormData((prev) => ({
//         ...prev,
//         [type]: file,
//         [`${type}Preview`]: previewURL,
//       }));
//     }
//   };

//   // Handle file upload modal submission
//   const handleUploadModalSubmit = () => {
//     const allCompanyDataWithLogoAndWallpaper = {
//       ...allData,
//       formData,
//     };
//     // Send the formData, including the logo and wallpaper, to the backend
//     console.log(
//       "Upload Complete with Files:",
//       allCompanyDataWithLogoAndWallpaper
//     );
//     setUploadModalOpen(false); // Close the upload modal
//     toast.success("Your Profile Created Successfully!");
//   };

//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-secondary">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 px-4">
//         {/* Left - Image */}
//         <div className="flex justify-center lg:justify-start">
//           <img
//             src={Logo}
//             alt="swish.ma"
//             className="w-full max-w-[70%] md:max-w-md lg:max-w-[350px]"
//           />
//         </div>

//         {/* Right - Form */}
//         <div className="max-w-lg flex flex-col gap-6 text-center md:text-start">
//           <h2 className="text-2xl md:text-4xl font-semibold text-liquidGreen leading-snug">
//             Get new customers and attractive jobs
//           </h2>

//           <p className="text-sm md:text-base text-liquidGreen">
//             Hundreds of opportunities near you every single day. Create your
//             free profile and discover real jobs waiting for someone like you.
//           </p>

//           <div>
//             {/* Company Registration Form */}

//             <form className="flex flex-col gap-4 w-full" noValidate>
//               {/* Company Name */}
//               <div className="flex flex-col gap-1">
//                 <label
//                   htmlFor="companyName"
//                   className="text-sm font-medium text-solidWhite text-start mb-2"
//                 >
//                   Company Name
//                 </label>
//                 <Input
//                   id="companyName"
//                   type="text"
//                   name="companyName"
//                   required
//                   aria-invalid={!!errors.companyName}
//                   aria-describedby={
//                     errors.companyName ? "companyName-error" : undefined
//                   }
//                   value={formData.companyName}
//                   onChange={(e) => {
//                     handleFormChange(e);
//                     if (errors.companyName && e.target.value.trim()) {
//                       setErrors((prev) => ({
//                         ...prev,
//                         companyName: undefined,
//                       }));
//                     }
//                   }}
//                   placeholder="Company Name"
//                   className="h-10 text-sm"
//                 />
//                 {errors.companyName && (
//                   <p
//                     id="companyName-error"
//                     className="text-red-500 text-xs mt-1"
//                   >
//                     {errors.companyName}
//                   </p>
//                 )}
//               </div>

//               {/* Phone Fields */}
//               <div className="flex gap-1 items-end">
//                 <div className="form-group flex flex-col w-full">
//                   <Label
//                     htmlFor="telephone"
//                     className="text-sm font-medium text-solidWhite text-start mb-2"
//                   >
//                     Telephone
//                   </Label>
//                   <PhoneInput
//                     country={"ma"}
//                     value={phone}
//                     onChange={(val) => {
//                       setPhone(val);
//                       if (errors.phone && isPhoneValid(val)) {
//                         setErrors((prev) => ({ ...prev, phone: undefined }));
//                       }
//                     }}
//                     // Make the underlying input required + accessible
//                     inputProps={{
//                       name: "telephone",
//                       id: "telephone",
//                       required: true,
//                       "aria-invalid": !!errors.phone,
//                       "aria-describedby": errors.phone
//                         ? "telephone-error"
//                         : undefined,
//                     }}
//                     placeholder="+ 123 456 7890"
//                     inputStyle={{
//                       height: "48px",
//                       width: "100%",
//                       borderRadius: "8px",
//                     }}
//                     // Optional: quickly enforce only digits & plus
//                     // onBlur={() => setErrors((prev)=>({...prev, phone: isPhoneValid(phone)? undefined : "Enter a valid phone number."}))}
//                   />
//                   {errors.phone && (
//                     <p
//                       id="telephone-error"
//                       className="text-red-500 text-xs mt-1"
//                     >
//                       {errors.phone}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               {/* Continue Button */}
//               <div className="pt-2">
//                 <Button
//                   type="button"
//                   onClick={handleContinueClick}
//                   className="w-full h-12 text-sm font-medium"
//                   // Also disable until both fields look valid
//                   disabled={
//                     !formData.companyName.trim() || !isPhoneValid(phone)
//                   }
//                 >
//                   Continue
//                 </Button>
//               </div>
//             </form>
//           </div>
//           <CompanyRegisterModal
//             open={isModalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleModalSubmit}
//           />

//           {/* Company Opening Hours */}
//           <CompanyOpeningHour
//             open={isOpeningHoursModalOpen}
//             onClose={() => setOpeningHoursModalOpen(false)}
//             onSubmit={handleOpeningHoursModalSubmit}
//           />

//           {/* Category Selection Modal */}
//           <Dialog
//             open={isCategoryModalOpen}
//             onOpenChange={setCategoryModalOpen}
//           >
//             <DialogContent className="max-w-sm md:max-w-md lg:max-w-lg">
//               <DialogHeader>
//                 <DialogTitle>Select Categories</DialogTitle>
//               </DialogHeader>

//               <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
//                 {categories.map((category, index) => (
//                   <div key={index}>
//                     <div
//                       className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
//                       onClick={() =>
//                         openSubcategoryModal(category.id, category.name)
//                       }
//                     >
//                       <img
//                         src={category.img}
//                         alt={category.name}
//                         className="max-w-full"
//                       />
//                       <p className="font-medium text-sm text-center">
//                         {category.name}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <DialogFooter className="flex justify-end pt-4">
//                 <Button
//                   type="button"
//                   onClick={handleCategoryModalSubmit}
//                   className="bg-primary text-white"
//                 >
//                   Continue
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>

//           {/* Subcategory Modal */}
//           <Dialog
//             open={isSubcategoryModalOpen}
//             onOpenChange={setSubcategoryModalOpen}
//           >
//             <DialogContent className="max-w-sm md:max-w-md lg:max-w-lg">
//               <DialogHeader>
//                 <DialogTitle>{selectedCategories}</DialogTitle>
//               </DialogHeader>
//               <div>
//                 <Input
//                   className="w-full ring-2 ring-gray-100"
//                   type="text"
//                   placeholder="Search"
//                 />
//               </div>
//               <div className="space-y-4">
//                 {activeCategory &&
//                   subcategories?.map((category) => (
//                     <div key={category.id}>
//                       {/* {category.subcategories.map(sub => ( */}
//                       <div
//                         key={category.id}
//                         className="flex items-center gap-2"
//                       >
//                         <input
//                           type="checkbox"
//                           id={`sub-${category.id}`}
//                           onChange={(e) =>
//                             handleSubcategoryChange(
//                               category.id,
//                               e.target.checked
//                             )
//                           }
//                         />
//                         <label
//                           htmlFor={`sub-${category.id}`}
//                           className="text-sm"
//                         >
//                           {category.name}
//                         </label>
//                       </div>
//                       {/* ))} */}
//                     </div>
//                   ))}
//               </div>

//               <DialogFooter className="flex justify-end pt-4">
//                 <Button
//                   type="button"
//                   onClick={handleSubcategoryModalSubmit}
//                   className="bg-primary text-white"
//                 >
//                   select
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>

//           {/* Upload Modal */}
//           {/* Upload Modal */}
//           <Dialog open={isUploadModalOpen} onOpenChange={setUploadModalOpen}>
//             <DialogContent className="max-w-lg p-6 rounded-xl">
//               <DialogHeader>
//                 <DialogTitle className="text-center text-2xl font-semibold">
//                   Upload Company Logo & Pictures
//                 </DialogTitle>
//               </DialogHeader>

//               <div className="space-y-8 py-6">
//                 {["logo", "wallpaper"].map((type) => (
//                   <div key={type} className="text-center">
//                     <p className="mb-3 font-medium">
//                       Upload {type === "logo" ? "Logo" : "Wallpaper"}
//                     </p>

//                     <div
//                       className="border border-blackSecondary rounded-lg p-6 text-blackSecondary
//                        cursor-pointer hover:border-primary transition relative"
//                     >
//                       <div className="flex flex-col items-center">
//                         {formData[`${type}Preview`] ? (
//                           <img
//                             src={formData[`${type}Preview`] as string}
//                             alt={`${type} preview`}
//                             className="max-h-32 mb-2 rounded-md object-contain"
//                           />
//                         ) : (
//                           <>
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-6 w-6 text-blackSecondary mb-2"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4"
//                               />
//                             </svg>
//                             <p>
//                               Drag and drop file or{" "}
//                               <label
//                                 htmlFor={type}
//                                 className="text-primary cursor-pointer"
//                               >
//                                 Choose file
//                               </label>
//                             </p>
//                             <p className="text-xs mt-1">
//                               Recommended size: 126px x 126px, PNG or JPEG
//                             </p>
//                           </>
//                         )}
//                       </div>
//                       <input
//                         type="file"
//                         id={type}
//                         onChange={(e) =>
//                           handleFileChange(e, type as "logo" | "wallpaper")
//                         }
//                         className="hidden"
//                         accept="image/png, image/jpeg"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <DialogFooter className="flex justify-center gap-4">
//                 <Button
//                   type="button"
//                   variant="outline"
//                   className="border-primary text-primary hover:bg-liquidGreen"
//                   onClick={() => setUploadModalOpen(false)}
//                 >
//                   Skip
//                 </Button>
//                 <Button
//                   type="button"
//                   className="bg-primary text-solidWhite"
//                   onClick={handleUploadModalSubmit}
//                 >
//                   Confirm
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </section>
//   );
// }

// =============================
// File: components/register/RegisterHero.tsx
// Description: Stepper flow with proper typing, validation, and clean state handling
// =============================

import Logo from "@/assets/images/logoWhiteIcon.svg";
import { categories } from "@/components/common/Header"; // must export an array of { id:number|string, name:string, img:string }
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { CompanyRegisterModal, CompanyFormData } from "./CompanyRegisterModal";
import { useSingleSubCategoryListByIdQuery } from "@/redux/features/registerCompany/companySubcategory.api";
import {
  CompanyOpeningHour,
  OpeningHoursFormData,
} from "./CompanyOpeningHoure";
import { ArrowLeft } from "lucide-react";
import { set } from "react-hook-form";

// Types
export type Category = { id: number | string; name: string; img: string };
export type Subcategory = { id: number; name: string };

// Local form-data for files/phone kept in RegisterHero
type LocalForm = {
  companyName: string;
  phone: string; // E.164 string, e.g. "+212..."
  logo: File | null;
  wallpaper: File | null;
  logoPreview: string;
  wallpaperPreview: string;
};

export default function RegisterHero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpeningHoursModalOpen, setOpeningHoursModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isSubcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState<number | string | null>(
    null
  );
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>("");
  const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
    []
  );

  // aggregate payload across steps
  const [companyInfo, setCompanyInfo] = useState<CompanyFormData | null>(null);
  const [openingHours, setOpeningHours] = useState<OpeningHoursFormData | null>(
    null
  );

  // For back button navigation
  const handleBack = (
    step: "company" | "opening" | "category" | "subcategory" | "upload"
  ) => {
    switch (step) {
      case "opening":
        // Go back to the company registration modal
        setModalOpen(true);
        setOpeningHoursModalOpen(false);
        break;
      case "category":
        // Go back to the opening hours modal
        setCategoryModalOpen(false);
        setOpeningHoursModalOpen(true);
        break;

      case "subcategory":
        // Go back to the category modal
        setSubcategoryModalOpen(false);
        setCategoryModalOpen(true);
        break;
      case "upload":
        // Go back to the category modal
        setUploadModalOpen(false);
        setCategoryModalOpen(true);
        break;
      default:
        break;
    }
  };

  // Step 1 local form
  const [phone, setPhone] = useState<string>("");
  const [formData, setFormData] = useState<LocalForm>({
    companyName: "",
    phone: "",
    logo: null,
    wallpaper: null,
    logoPreview: "",
    wallpaperPreview: "",
  });

  const [errors, setErrors] = useState<{
    companyName?: string;
    phone?: string;
  }>({});

  // SUBCATEGORIES API
  const { data: subcategoriesData } = useSingleSubCategoryListByIdQuery(
    activeCategory as number | string,
    {
      skip: !activeCategory,
    }
  );
  const subcategories: Subcategory[] = useMemo(
    () => subcategoriesData ?? [],
    [subcategoriesData]
  );

  // validators
  const normalizePhone = (v: string) => v.replace(/\D/g, "");
  const isPhoneValid = (v: string) => {
    const digits = normalizePhone(v);
    return digits.length >= 8 && digits.length <= 15;
  };

  const validateStepOne = () => {
    const nextErrors: { companyName?: string; phone?: string } = {};
    if (!formData.companyName.trim())
      nextErrors.companyName = "Company name is required.";
    if (!phone.trim()) nextErrors.phone = "Telephone is required.";
    else if (!isPhoneValid(phone))
      nextErrors.phone = "Enter a valid phone number.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinueClick = () => {
    if (!validateStepOne()) return;
    // persist E.164-ish with leading +
    setFormData((prev) => ({
      ...prev,
      phone: phone.startsWith("+") ? phone : `+${phone}`,
    }));
    setModalOpen(true);
  };

  // step 2 submit
  const handleCompanyModalSubmit = (data: CompanyFormData) => {
    setCompanyInfo(data);
    setModalOpen(false);
    setOpeningHoursModalOpen(true);
  };

  // step 3 submit
  const handleOpeningHoursModalSubmit = (data: OpeningHoursFormData) => {
    setOpeningHours(data);
    setOpeningHoursModalOpen(false);
    setCategoryModalOpen(true);
  };

  // step 4: category + subcategory
  const openSubcategoryModal = (categoryId: number, categoryName: string) => {
    setActiveCategory(categoryId);
    setSelectedCategoryName(categoryName);
    setSubcategoryModalOpen(true);
  };

  const handleSubcategoryChange = (subCategoryId: number, checked: boolean) => {
    setSelectedSubcategories((prev) =>
      checked
        ? Array.from(new Set([...prev, subCategoryId]))
        : prev.filter((id) => id !== subCategoryId)
    );
  };

  const handleSubcategoryModalSubmit = () => {
    setSubcategoryModalOpen(false);
  };

  const handleCategoryModalSubmit = () => {
    // At this point we have: formData (step1), companyInfo (step2), openingHours (step3), selectedSubcategories (step4)
    setCategoryModalOpen(false);
    setUploadModalOpen(true);
  };

  // files
  useEffect(() => {
    return () => {
      if (formData.logoPreview) URL.revokeObjectURL(formData.logoPreview);
      if (formData.wallpaperPreview)
        URL.revokeObjectURL(formData.wallpaperPreview);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

const handleFileChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  type: "logo" | "wallpaper"
) => {
  const file = e.target.files?.[0] ?? null;  // Get the selected file
  if (!file) return;  // If no file is selected, do nothing

  // Create a preview URL for the image
  const previewURL = URL.createObjectURL(file);

  // Update the formData to store the file and its preview URL
  setFormData((prev) => ({
    ...prev,
    [type]: file,  // Store the file itself
    ...(type === "logo" ? { logoPreview: previewURL } : { wallpaperPreview: previewURL }), // Update the preview
  }));
};

const handleFileClick = (type: "logo" | "wallpaper") => {
  // Trigger the file input when the image is clicked
  document.getElementById(type)?.click();
};

  const handleUploadModalSubmit = () => {
    const payload = {
      step1: { ...formData },
      step2: companyInfo,
      step3: openingHours,
      step4: { selectedCategoryId: activeCategory, selectedSubcategories },
    };
    console.log({ payload });
    // TODO: replace console with real API call
    // e.g. await registerCompany(payload)
    // Make sure to handle file uploads with FormData and proper content-type
    // console.log("Register payload", payload);
    toast.success("Your profile was created successfully!");
    setUploadModalOpen(false);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 px-4">
        {/* Left */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Logo}
            alt="swish.ma"
            className="w-full max-w-[70%] md:max-w-md lg:max-w-[350px]"
          />
        </div>

        {/* Right */}
        <div className="max-w-lg flex flex-col gap-6 text-center md:text-start">
          <h2 className="text-2xl md:text-4xl font-semibold text-liquidGreen leading-snug">
            Get new customers and attractive jobs
          </h2>
          <p className="text-sm md:text-base text-liquidGreen">
            Hundreds of opportunities near you every single day. Create your
            free profile and discover real jobs waiting for someone like you.
          </p>

          <div>
            <form className="flex flex-col gap-4 w-full" noValidate>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="companyName"
                  className="text-sm font-medium text-solidWhite text-start mb-2"
                >
                  Company Name
                </label>
                <Input
                  id="companyName"
                  type="text"
                  name="companyName"
                  required
                  aria-invalid={!!errors.companyName}
                  aria-describedby={
                    errors.companyName ? "companyName-error" : undefined
                  }
                  value={formData.companyName}
                  onChange={(e) => {
                    const v = e.target.value;
                    setFormData((prev) => ({ ...prev, companyName: v }));
                    if (errors.companyName && v.trim())
                      setErrors((prev) => ({
                        ...prev,
                        companyName: undefined,
                      }));
                  }}
                  placeholder="Company Name"
                  className="h-10 text-sm"
                />
                {errors.companyName && (
                  <p
                    id="companyName-error"
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.companyName}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex gap-1 items-end">
                <div className="form-group flex flex-col w-full">
                  <Label
                    htmlFor="telephone"
                    className="text-sm font-medium text-solidWhite text-start mb-2"
                  >
                    Telephone
                  </Label>
                  <PhoneInput
                    country={"ma"}
                    value={phone}
                    onChange={(val: string) => {
                      setPhone(val);
                      if (errors.phone && isPhoneValid(val))
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                    }}
                    inputProps={{
                      name: "telephone",
                      id: "telephone",
                      required: true,
                      "aria-invalid": !!errors.phone,
                      "aria-describedby": errors.phone
                        ? "telephone-error"
                        : undefined,
                    }}
                    placeholder="+ 123 456 7890"
                    inputStyle={{
                      height: "48px",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                  {errors.phone && (
                    <p
                      id="telephone-error"
                      className="text-red-500 text-xs mt-1"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  onClick={handleContinueClick}
                  className="w-full h-12 text-sm font-medium"
                  disabled={
                    !formData.companyName.trim() || !isPhoneValid(phone)
                  }
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>

          {/* Step 2 */}
          {/* <CompanyRegisterModal open={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleCompanyModalSubmit} /> */}
          <CompanyRegisterModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            onBack={() => setModalOpen(false)} // ← NEW (back to step 1)
            onSubmit={handleCompanyModalSubmit}
          />

          {/* Step 3 */}
          {/* <CompanyOpeningHour open={isOpeningHoursModalOpen} onClose={() => setOpeningHoursModalOpen(false)} onSubmit={handleOpeningHoursModalSubmit} /> */}
          <CompanyOpeningHour
            open={isOpeningHoursModalOpen}
            onClose={() => setOpeningHoursModalOpen(false)}
            onBack={() => {
              // ← NEW (back to company modal)
              setOpeningHoursModalOpen(false);
              setModalOpen(true);
            }}
            onSubmit={handleOpeningHoursModalSubmit}
          />

          {/* Step 4: Category */}
          <Dialog
            open={isCategoryModalOpen}
            onOpenChange={() => setCategoryModalOpen(false)}
          >
            <DialogContent
              className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl"
              onInteractOutside={(e) => e.preventDefault()}
            >
              <DialogHeader className="flex items-center justify-between">
                <Button
                  className="flex justify-center self-start rounded-full"
                  size="icon"
                  onClick={() => handleBack("category")}
                >
                  <ArrowLeft size={20} />
                </Button>
                <DialogTitle>Select Categories</DialogTitle>
              </DialogHeader>

              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 md:py-6 items-start">
                {(categories as Category[] | undefined)?.map((category) => (
                  <div key={String(category.id)}>
                    <button
                      type="button"
                      className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
                      onClick={() =>
                        openSubcategoryModal(Number(category.id), category.name)
                      }
                    >
                      <img
                        src={category.img}
                        alt={category.name}
                        className="max-w-full"
                      />
                      <p className="font-medium text-sm text-center">
                        {category.name}
                      </p>
                    </button>
                  </div>
                ))}
              </div>

              <DialogFooter className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={handleCategoryModalSubmit}
                  className="bg-primary text-white"
                >
                  Continue
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Step 4b: Subcategory */}
          <Dialog
            open={isSubcategoryModalOpen}
            onOpenChange={() => setSubcategoryModalOpen(false)}
          >
            <DialogContent
              className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
              onInteractOutside={(e) => e.preventDefault()}
            >
              <DialogHeader className="flex items-center justify-between">
                <Button
                  className="flex justify-center self-start rounded-full"
                  size="icon"
                  onClick={() => handleBack("subcategory")}
                >
                  <ArrowLeft className="w-5 h-5" />
                </Button>
                <DialogTitle>
                  {selectedCategoryName || "Subcategories"}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-4 max-h-80 overflow-auto">
                {activeCategory &&
                  subcategories.map((sub) => (
                    <div key={sub.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id={`sub-${sub.id}`}
                        onChange={(e) =>
                          handleSubcategoryChange(sub.id, e.target.checked)
                        }
                        checked={selectedSubcategories.includes(sub.id)}
                      />
                      <label htmlFor={`sub-${sub.id}`} className="text-sm">
                        {sub.name}
                      </label>
                    </div>
                  ))}
                {activeCategory && subcategories.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No subcategories found.
                  </p>
                )}
              </div>

              <DialogFooter className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={handleSubcategoryModalSubmit}
                  className="bg-primary text-white"
                >
                  Select
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Step 5: Upload */}
      <Dialog open={isUploadModalOpen} onOpenChange={() => setUploadModalOpen(false)}>
    <DialogContent className=" max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-6 rounded-xl" onInteractOutside={(e) => e.preventDefault()}>
      <DialogHeader className="flex items-center justify-between">
        <Button className="flex justify-center self-start rounded-full" size="icon" onClick={() => handleBack("upload")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <DialogTitle className="text-center text-2xl font-semibold flex-1">Upload Company Logo & Pictures</DialogTitle>
      </DialogHeader>

      <div className="space-y-8 py-6">
        {["logo", "wallpaper"].map((type) => (
          <div key={type} className="text-center">
            <p className="mb-3 font-medium">Upload {type === "logo" ? "Logo" : "Wallpaper"}</p>
            <div className="border border-blackSecondary rounded-lg p-6 text-blackSecondary cursor-pointer hover:border-primary transition relative">
              <div className="flex flex-col items-center">
                {/* Display preview image if available */}
                {(type === "logo" ? formData.logoPreview : formData.wallpaperPreview) ? (
                  <img
                    src={(type === "logo" ? formData.logoPreview : formData.wallpaperPreview) as string}
                    alt={`${type} preview`}
                    className="max-h-32 mb-2 rounded-md object-contain cursor-pointer"
                    onClick={() => handleFileClick(type as "logo" | "wallpaper")}  // Clicking the image will trigger file input
                  />
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blackSecondary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0l-4 4m4-4l4 4" />
                    </svg>
                    <p>
                      Drag and drop file or <label htmlFor={type} className="text-primary cursor-pointer">Choose file</label>
                    </p>
                    <p className="text-xs mt-1">Recommended size: 126px x 126px, PNG or JPEG</p>
                  </>
                )}
              </div>
              {/* File input for changing logo or wallpaper */}
              <input
                type="file"
                id={type}
                onChange={(e) => handleFileChange(e, type as "logo" | "wallpaper")}
                className="hidden"
                accept="image/png, image/jpeg"
              />
            </div>
          </div>
        ))}
      </div>

      <DialogFooter className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          className="border-primary text-primary hover:bg-liquidGreen"
          onClick={handleUploadModalSubmit}  // Trigger submit action even if skipped
        >
          Skip
        </Button>

        <Button
          type="button"
          className="bg-primary text-solidWhite"
          onClick={handleUploadModalSubmit}  // Trigger submit action
        >
          Confirm
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

        </div>
      </div>
    </section>
  );
}
