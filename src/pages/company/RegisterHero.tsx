import Logo from "@/assets/images/LogoLight.svg";
import { categories } from "@/components/common/Header"; // Ensure categories are imported
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CompanyRegisterModal } from "./CompanyRegisterModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export default function RegisterHero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isSubcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false); // New modal for upload step
  const [activeCategory, setActiveCategory] = useState<string | null>(null); // Active category for subcategories
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    countryCode: "+880",
    businessMail: "",
    companyLocation: "",
    logo: null,
    wallpaper: null,
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );

  // Handle form data collection for company registration
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file selection (logo and wallpaper)
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "logo" | "wallpaper"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        [type]: file,
      }));
    }
  };

  // Handle modal form data submission (Company registration)
  const handleModalSubmit = (modalData: {
    businessMail: string;
    companyLocation: string;
  }) => {
    const completeData = { ...formData, ...modalData };
    console.log("Complete Data to Backend:", completeData);

    // Send the complete data to your backend (API call)
    setModalOpen(false);
    setCategoryModalOpen(true); // Open Category Modal after submitting company form
  };

  // Handle category selection (Checkboxes for categories)
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, category]);
    } else {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    }
  };

  // Handle subcategory checkbox change
  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    if (checked) {
      setSelectedSubcategories((prev) => [...prev, subcategory]);
    } else {
      setSelectedSubcategories((prev) =>
        prev.filter((sub) => sub !== subcategory)
      );
    }
  };

  // Open subcategory modal when category is clicked
  const openSubcategoryModal = (category: string) => {
    setActiveCategory(category); // Set the active category
    setSubcategoryModalOpen(true); // Open the subcategory modal
  };

  // Handle category modal submission (Submit categories and subcategories)
  const handleCategoryModalSubmit = () => {
    const allData = {
      ...formData,
      selectedCategories,
      selectedSubcategories,
    };
    console.log(
      "Complete Data to Backend with Categories and Subcategories:",
      allData
    );

    // Send this data to the backend as needed
    setCategoryModalOpen(false); // Close the category modal after submission
    setUploadModalOpen(true); // Open the upload modal
  };

  // Handle subcategory modal submission
  const handleSubcategoryModalSubmit = () => {
    // You can send the selected subcategories along with other form data
    console.log("Selected Subcategories:", selectedSubcategories);
    setSubcategoryModalOpen(false); // Close the subcategory modal
  };

  // Handle file upload modal submission
  const handleUploadModalSubmit = () => {
    // Send the formData, including the logo and wallpaper, to the backend
    console.log("Upload Complete with Files:", formData);
    setUploadModalOpen(false); // Close the upload modal
    toast.success("Your Profile Created Successfully!");
  };

  // Country Codes for dropdown
  const countryCodes = ["+880", "+91", "+1", "+44", "+61"];
  const [currentCode, setCurrentCode] = useState(countryCodes[0]);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-8 px-4">
        {/* Left - Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Logo}
            alt="Swish.ma"
            className="w-full max-w-md lg:max-w-[500px]"
          />
        </div>

        {/* Right - Form */}
        <div className="max-w-lg flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
            Get new customers and attractive jobs
          </h2>

          <p className="text-sm md:text-base text-liquidGreen">
            Thousands of new missions every week. Create a free test profile now
            and see all the jobs near you.
          </p>

          {/* Company Registration Form */}
          <form className="flex flex-col gap-4 w-full">
            {/* Company Name */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="companyName"
                className="text-sm font-medium text-gray-200"
              >
                Company Name
              </label>
              <Input
                id="companyName"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleFormChange}
                placeholder="Company Name"
                className="h-10 text-sm"
              />
            </div>

            {/* Phone Fields */}
            <div className="flex gap-3 items-end">
              {/* Country Code */}
              <div className="w-[100px] flex flex-col gap-1">
                <label
                  htmlFor="countryCode"
                  className="text-sm font-medium text-gray-700"
                >
                  Code
                </label>
                <Select value={currentCode} onValueChange={setCurrentCode}>
                  <SelectTrigger
                    id="countryCode"
                    className="h-12 w-full rounded-md border-none bg-white px-4 py-2 text-base md:text-sm text-[#A8A8A8] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary hover:ring-2 hover:ring-primary transition-all duration-200"
                  >
                    <SelectValue
                      placeholder={formData.countryCode}
                      className="leading-none"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {countryCodes.map((code) => (
                        <SelectItem key={code} value={code} className="text-sm">
                          {code}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Phone Number */}
              <div className="flex-1 flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="123 456 7890"
                  className="h-12 md:h-12 text-base md:text-sm"
                />
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-2">
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full h-12 text-sm font-medium"
              >
                Continue
              </Button>
            </div>
          </form>

          <CompanyRegisterModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleModalSubmit}
          />

          {/* Category Selection Modal */}
          <Dialog
            open={isCategoryModalOpen}
            onOpenChange={setCategoryModalOpen}
          >
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Select Categories</DialogTitle>
              </DialogHeader>

              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
                {categories.map((category, index) => (
                  <div key={index}>
                    <div
                      className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
                      onClick={() => openSubcategoryModal(category.name)}
                    >
                      <img
                        src={category.img}
                        alt={category.name}
                        className="max-w-full"
                      />
                      <p className="font-medium text-sm text-center">
                        {category.name}
                      </p>
                    </div>
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

          {/* Subcategory Modal */}
          <Dialog
            open={isSubcategoryModalOpen}
            onOpenChange={setSubcategoryModalOpen}
          >
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Select Subcategories</DialogTitle>
              </DialogHeader>

              <div className="space-y-4">
                {activeCategory &&
                  categories
                    .filter((category) => category.name === activeCategory)
                    .map((category) => (
                      <div key={category.name}>
                        {category.subcategories.map((sub, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              id={sub.name}
                              onChange={(e) =>
                                handleSubcategoryChange(
                                  sub.name,
                                  e.target.checked
                                )
                              }
                            />
                            <label htmlFor={sub.name} className="text-sm">
                              {sub.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    ))}
              </div>

              <DialogFooter className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={handleSubcategoryModalSubmit}
                  className="bg-primary text-white"
                >
                  select
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Upload Modal */}
          <Dialog open={isUploadModalOpen} onOpenChange={setUploadModalOpen}>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Upload Company Logo & Pictures</DialogTitle>
              </DialogHeader>

              {/* File Uploads */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="logo" className="block text-sm font-medium">
                    Upload Logo
                  </label>
                  <input
                    type="file"
                    id="logo"
                    onChange={(e) => handleFileChange(e, "logo")}
                    className="mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="wallpaper"
                    className="block text-sm font-medium"
                  >
                    Upload Wallpaper
                  </label>
                  <input
                    type="file"
                    id="wallpaper"
                    onChange={(e) => handleFileChange(e, "wallpaper")}
                    className="mt-2"
                  />
                </div>
              </div>

              <DialogFooter className="flex justify-end pt-4">
                <Button
                  type="button"
                  onClick={handleUploadModalSubmit}
                  className="bg-primary text-white"
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

// import Logo from "@/assets/images/LogoLight.svg";
// import { categories } from "@/components/common/Header"; // Ensure categories are imported
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { CompanyRegisterModal } from "./CompanyRegisterModal";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// export default function RegisterHero() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
//   const [isSubcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState<string | null>(null); // Active category for subcategories
//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     countryCode: "+880",
//     businessMail: "",
//     companyLocation: "",
//   });
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
//     []
//   );

//   // Handle form data collection for company registration
//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle modal form data submission (Company registration)
//   const handleModalSubmit = (modalData: {
//     businessMail: string;
//     companyLocation: string;
//   }) => {
//     const completeData = { ...formData, ...modalData };
//     console.log("Complete Data to Backend:", completeData);

//     // Send the complete data to your backend (API call)
//     setModalOpen(false);
//     setCategoryModalOpen(true); // Open Category Modal after submitting company form
//   };

//   // Handle category selection (Checkboxes for categories)
//   const handleCategoryChange = (category: string, checked: boolean) => {
//     if (checked) {
//       setSelectedCategories((prev) => [...prev, category]);
//     } else {
//       setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
//     }
//   };

//   // Handle subcategory checkbox change
//   const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
//     if (checked) {
//       setSelectedSubcategories((prev) => [...prev, subcategory]);
//     } else {
//       setSelectedSubcategories((prev) =>
//         prev.filter((sub) => sub !== subcategory)
//       );
//     }
//   };

//   // Open subcategory modal when category is clicked
//   const openSubcategoryModal = (category: string) => {
//     setActiveCategory(category); // Set the active category
//     setSubcategoryModalOpen(true); // Open the subcategory modal
//   };

//   // Handle category modal submission (Submit categories and subcategories)
//   const handleCategoryModalSubmit = () => {
//     const allData = {
//       ...formData,
//       selectedCategories,
//       selectedSubcategories,
//     };
//     console.log(
//       "Complete Data to Backend with Categories and Subcategories:",
//       allData
//     );

//     // Send this data to the backend as needed
//     setCategoryModalOpen(false); // Close the category modal after submission
//   };

//   // Handle subcategory modal submission
//   const handleSubcategoryModalSubmit = () => {
//     // You can send the selected subcategories along with other form data
//     console.log("Selected Subcategories:", selectedSubcategories);
//     setSubcategoryModalOpen(false); // Close the subcategory modal
//   };

//   // Country Codes for dropdown
//   const countryCodes = ["+880", "+91", "+1", "+44", "+61"];
//   const [currentCode, setCurrentCode] = useState(countryCodes[0]);

//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-secondary">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-8 px-4">
//         {/* Left - Image */}
//         <div className="flex justify-center lg:justify-start">
//           <img
//             src={Logo}
//             alt="Swish.ma"
//             className="w-full max-w-md lg:max-w-[500px]"
//           />
//         </div>

//         {/* Right - Form */}
//         <div className="max-w-lg flex flex-col gap-6">
//           <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
//             Get new customers and attractive jobs
//           </h2>

//           <p className="text-sm md:text-base text-liquidGreen">
//             Thousands of new missions every week. Create a free test profile now
//             and see all the jobs near you.
//           </p>

//           {/* Company Registration Form */}
//           <form className="flex flex-col gap-4 w-full">
//             {/* Company Name */}
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="companyName"
//                 className="text-sm font-medium text-gray-200"
//               >
//                 Company Name
//               </label>
//               <Input
//                 id="companyName"
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleFormChange}
//                 placeholder="Company Name"
//                 className="h-10 text-sm"
//               />
//             </div>

//             {/* Phone Fields */}
//             <div className="flex gap-3 items-end">
//               {/* Country Code */}
//               <div className="w-[100px] flex flex-col gap-1">
//                 <label
//                   htmlFor="countryCode"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Code
//                 </label>
//                 <Select value={currentCode} onValueChange={setCurrentCode}>
//                   <SelectTrigger
//                     id="countryCode"
//                     className="h-12 w-full rounded-md border-none bg-white px-4 py-2 text-base md:text-sm text-[#A8A8A8] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary hover:ring-2 hover:ring-primary transition-all duration-200"
//                   >
//                     <SelectValue
//                       placeholder={formData.countryCode}
//                       className="leading-none"
//                     />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {countryCodes.map((code) => (
//                         <SelectItem key={code} value={code} className="text-sm">
//                           {code}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Phone Number */}
//               <div className="flex-1 flex flex-col gap-1">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   placeholder="123 456 7890"
//                   className="h-12 md:h-12 text-base md:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Continue Button */}
//             <div className="pt-2">
//               <Button
//                 type="button"
//                 onClick={() => setModalOpen(true)}
//                 className="w-full h-12 text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </div>
//           </form>

//           <CompanyRegisterModal
//             open={isModalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleModalSubmit}
//           />

//           {/* Category Selection Modal */}
//           <Dialog
//             open={isCategoryModalOpen}
//             onOpenChange={setCategoryModalOpen}
//           >
//             <DialogContent className="max-w-md">
//               <DialogHeader>
//                 <DialogTitle>Select Categories</DialogTitle>
//               </DialogHeader>

//               <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
//                 {categories.map((category, index) => (
//                   <div key={index}>
//                     <div
//                       className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
//                       onClick={() => openSubcategoryModal(category.name)}
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
//             <DialogContent className="max-w-md">
//               <DialogHeader>
//                 <DialogTitle>Select Subcategories</DialogTitle>
//               </DialogHeader>

//               <div className="space-y-4">
//                 {activeCategory &&
//                   categories
//                     .filter((category) => category.name === activeCategory)
//                     .map((category) => (
//                       <div key={category.name}>
//                         {category.subcategories.map((sub, idx) => (
//                           <div key={idx} className="flex items-center gap-2">
//                             <input
//                               type="checkbox"
//                               id={sub.name}
//                               onChange={(e) =>
//                                 handleSubcategoryChange(
//                                   sub.name,
//                                   e.target.checked
//                                 )
//                               }
//                             />
//                             <label htmlFor={sub.name} className="text-sm">
//                               {sub.name}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     ))}
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
//         </div>
//       </div>
//     </section>
//   );
// }

// import Logo from "@/assets/images/LogoLight.svg";
// import { categories } from "@/components/common/Header"; // Ensure categories are imported
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { CompanyRegisterModal } from "./CompanyRegisterModal";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// export default function RegisterHero() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     countryCode: "+880",
//     businessMail: "",
//     companyLocation: "",
//   });
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
//     []
//   );

//   // Handle form data collection for company registration
//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle modal form data submission (Company registration)
//   const handleModalSubmit = (modalData: {
//     businessMail: string;
//     companyLocation: string;
//   }) => {
//     const completeData = { ...formData, ...modalData };
//     console.log("Complete Data to Backend:", completeData);

//     // Send the complete data to your backend (API call)
//     setModalOpen(false);
//     setCategoryModalOpen(true); // Open Category Modal after submitting company form
//   };

//   // Handle category selection (Checkboxes for categories)
//   const handleCategoryChange = (category: string, checked: boolean) => {
//     if (checked) {
//       setSelectedCategories((prev) => [...prev, category]);
//     } else {
//       setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
//     }
//   };

//   // Handle subcategory checkbox change
//   const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
//     if (checked) {
//       setSelectedSubcategories((prev) => [...prev, subcategory]);
//     } else {
//       setSelectedSubcategories((prev) =>
//         prev.filter((sub) => sub !== subcategory)
//       );
//     }
//   };

//   // Handle category modal submission (Submit categories and subcategories)
//   const handleCategoryModalSubmit = () => {
//     const allData = {
//       ...formData,
//       selectedCategories,
//       selectedSubcategories,
//     };
//     console.log(
//       "Complete Data to Backend with Categories and Subcategories:",
//       allData
//     );

//     // Send this data to the backend as needed
//     setCategoryModalOpen(false); // Close the category modal after submission
//   };

//   // Country Codes for dropdown
//   const countryCodes = ["+880", "+91", "+1", "+44", "+61"];
//   const [currentCode, setCurrentCode] = useState(countryCodes[0]);

//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-secondary">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-8 px-4">
//         {/* Left - Image */}
//         <div className="flex justify-center lg:justify-start">
//           <img
//             src={Logo}
//             alt="Swish.ma"
//             className="w-full max-w-md lg:max-w-[500px]"
//           />
//         </div>

//         {/* Right - Form */}
//         <div className="max-w-lg flex flex-col gap-6">
//           <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
//             Get new customers and attractive jobs
//           </h2>

//           <p className="text-sm md:text-base text-liquidGreen">
//             Thousands of new missions every week. Create a free test profile now
//             and see all the jobs near you.
//           </p>

//           {/* Company Registration Form */}
//           <form className="flex flex-col gap-4 w-full">
//             {/* Company Name */}
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="companyName"
//                 className="text-sm font-medium text-gray-200"
//               >
//                 Company Name
//               </label>
//               <Input
//                 id="companyName"
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleFormChange}
//                 placeholder="Company Name"
//                 className="h-10 text-sm"
//               />
//             </div>

//             {/* Phone Fields */}
//             <div className="flex gap-3 items-end">
//               {/* Country Code */}
//               <div className="w-[100px] flex flex-col gap-1">
//                 <label
//                   htmlFor="countryCode"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Code
//                 </label>
//                 <Select value={currentCode} onValueChange={setCurrentCode}>
//                   <SelectTrigger
//                     id="countryCode"
//                     className="h-12 w-full rounded-md border-none bg-white px-4 py-2 text-base md:text-sm text-[#A8A8A8] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary hover:ring-2 hover:ring-primary transition-all duration-200"
//                   >
//                     <SelectValue
//                       placeholder={formData.countryCode}
//                       className="leading-none"
//                     />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {countryCodes.map((code) => (
//                         <SelectItem key={code} value={code} className="text-sm">
//                           {code}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Phone Number */}
//               <div className="flex-1 flex flex-col gap-1">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   placeholder="123 456 7890"
//                   className="h-12 md:h-12 text-base md:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <Button
//                 type="button"
//                 onClick={() => setModalOpen(true)}
//                 className="w-full h-12 text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </div>
//           </form>

//           <CompanyRegisterModal
//             open={isModalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleModalSubmit}
//           />

//           <Dialog
//             open={isCategoryModalOpen}
//             onOpenChange={setCategoryModalOpen}
//           >
//             <DialogContent className="max-w-md">
//               <DialogHeader>
//                 <DialogTitle>Select Categories and Subcategories</DialogTitle>
//               </DialogHeader>

//               <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
//                 {categories.map((category, index) => (
//                   <div key={index}>
//                     <div
//                       className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
//                       onClick={() =>
//                         handleCategoryChange(
//                           category.name,
//                           !selectedCategories.includes(category.name)
//                         )
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

//                     {selectedCategories.includes(category.name) && (
//                       <div className="pl-4 space-y-2">
//                         {category.subcategories.map((sub, idx) => (
//                           <div key={idx} className="flex items-center gap-2">
//                             <input
//                               type="checkbox"
//                               id={sub.name}
//                               onChange={(e) =>
//                                 handleSubcategoryChange(
//                                   sub.name,
//                                   e.target.checked
//                                 )
//                               }
//                             />
//                             <label htmlFor={sub.name} className="text-sm">
//                               {sub.name}
//                             </label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>

//               <DialogFooter className="flex justify-end pt-4">
//                 <Button
//                   type="button"
//                   onClick={handleCategoryModalSubmit}
//                   className="bg-primary text-white"
//                 >
//                   Submit
//                 </Button>
//               </DialogFooter>
//             </DialogContent>
//           </Dialog>

//           {/* Terms Text */}
//           <p className="text-xs text-center text-gray-200 mt-2">
//             By continuing to register, you agree to the terms of use of
//             MyTender. You can read more about the processing of personal data{" "}
//             <span className="underline cursor-pointer">here</span>.
//           </p>

//           {/* Already a user */}
//           <div className="text-center text-white text-sm flex justify-center items-center gap-2">
//             <p>Already a user?</p>
//             <Link to="/login" className="text-primary font-medium underline">
//               Login here
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Logo from "@/assets/images/LogoLight.svg";
// import { categories } from "@/components/common/Header";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { CompanyRegisterModal } from "./CompanyRegisterModal";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// export default function RegisterHero() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     countryCode: "+880",
//     businessMail: "",
//     companyLocation: "",
//   });
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
//     []
//   );

//   // Handle form data collection
//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle modal form data submission
//   const handleModalSubmit = (modalData: {
//     businessMail: string;
//     companyLocation: string;
//   }) => {
//     const completeData = { ...formData, ...modalData };
//     console.log("Complete Data to Backend:", completeData);

//     // Send the complete data to your backend (API call)
//     setModalOpen(false);
//     setCategoryModalOpen(true); // Open Category Modal after submitting company form
//   };

//   const handleCategoryModalSubmit = () => {
//     const allData = {
//       ...formData,
//       selectedCategories,
//       selectedSubcategories,
//     };
//     console.log(
//       "Complete Data to Backend with Categories and Subcategories:",
//       allData
//     );

//     // Send this data to the backend as needed
//     setCategoryModalOpen(false); // Close the category modal
//   };

//   const countryCodes = ["+880", "+91", "+1", "+44", "+61"];
//   const [currentCode, setCurrentCode] = useState(countryCodes[0]);

//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-secondary">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-8 px-4">
//         {/* Left - Image */}
//         <div className="flex justify-center lg:justify-start">
//           <img
//             src={Logo}
//             alt="Swish.ma"
//             className="w-full max-w-md lg:max-w-[500px]"
//           />
//         </div>

//         {/* Right - Form & Text */}
//         <div className="max-w-lg flex flex-col gap-6">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
//             Get new customers and attractive jobs
//           </h2>

//           {/* Description */}
//           <p className="text-sm md:text-base text-liquidGreen">
//             Thousands of new missions every week. Create a free test profile now
//             and see all the jobs near you.
//           </p>

//           {/* Form */}
//           <form className="flex flex-col gap-4 w-full">
//             {/* Company Name */}
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="companyName"
//                 className="text-sm font-medium text-gray-200"
//               >
//                 Company Name
//               </label>
//               <Input
//                 id="companyName"
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleFormChange}
//                 placeholder="Company Name"
//                 className="h-10 text-sm"
//               />
//             </div>

//             {/* Phone Fields */}
//             <div className="flex gap-3 items-end">
//               {/* Country Code */}
//               <div className="w-[100px] flex flex-col gap-1">
//                 <label
//                   htmlFor="countryCode"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Code
//                 </label>
//                 <Select value={currentCode} onValueChange={setCurrentCode}>
//                   <SelectTrigger
//                     id="countryCode"
//                     className="h-12 w-full rounded-md border-none bg-white px-4 py-2 text-base md:text-sm text-[#A8A8A8] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary hover:ring-2 hover:ring-primary transition-all duration-200"
//                   >
//                     <SelectValue
//                       placeholder={formData.countryCode}
//                       className="leading-none"
//                     />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {countryCodes.map((code) => (
//                         <SelectItem key={code} value={code} className="text-sm">
//                           {code}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Phone Number */}
//               <div className="flex-1 flex flex-col gap-1">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   placeholder="123 456 7890"
//                   className="h-12 md:h-12 text-base md:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <Button
//                 type="button"
//                 onClick={() => setModalOpen(true)}
//                 className="w-full h-12 text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </div>
//           </form>

//           <CompanyRegisterModal
//             open={isModalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleModalSubmit}
//           />

//           {/* Terms Text */}
//           <p className="text-xs text-center text-gray-200 mt-2">
//             By continuing to register, you agree to the terms of use of
//             MyTender. You can read more about the processing of personal data{" "}
//             <span className="underline cursor-pointer">here</span>.
//           </p>

//           {/* Already a user */}
//           <div className="text-center text-white text-sm flex justify-center items-center gap-2">
//             <p>Already a user?</p>
//             <Link to="/login" className="text-primary font-medium underline">
//               Login here
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Category Selection Modal */}
//       <Dialog open={isCategoryModalOpen} onOpenChange={setCategoryModalOpen}>
//         <DialogContent className="max-w-md">
//           <DialogHeader>
//             <DialogTitle>Select Categories and Subcategories</DialogTitle>
//           </DialogHeader>

//           <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
//             {categories.map((category, index) => (
//               <div key={index}>
//                 <div className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
//                   <img
//                     src={category.img}
//                     alt={category.name}
//                     className="max-w-full"
//                   />

//                   <p className="font-medium text-sm text-center">
//                     {category.name}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <DialogFooter className="flex justify-end pt-4">
//             <Button
//               type="button"
//               onClick={handleCategoryModalSubmit}
//               className="bg-primary text-white"
//             >
//               Submit
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }

// import Logo from "@/assets/images/LogoLight.svg";
// import SquaresImg from "@/assets/images/squares.svg";
// import { categories } from "@/components/common/Header";

// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { ArrowRight } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { CompanyRegisterModal } from "./CompanyRegisterModal";

// export default function RegisterHero() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     companyName: "",
//     phone: "",
//     countryCode: "+880",
//     businessMail: "",
//     companyLocation: "",
//   });

//   // Handle data collection
//   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle modal form data submission
//   const handleModalSubmit = (modalData: {
//     businessMail: string;
//     companyLocation: string;
//   }) => {
//     // Combine modal data with main form data
//     const completeData = { ...formData, ...modalData };
//     console.log("Complete Data to Backend:", completeData);

//     // Send the complete data to your backend
//     // You can make an API request here to send the formData to the backend

//     // Reset the modal and form
//     setModalOpen(false);
//     setFormData({
//       companyName: "",
//       phone: "",
//       countryCode: "+880",
//       businessMail: "",
//       companyLocation: "",
//     });
//   };
//   const countryCodes = ["+880", "+91", "+1", "+44", "+61"];

//   const [currentCode, setCurrentCode] = useState(countryCodes[0]);
//   return (
//     <section className="py-16 md:py-24 lg:py-32 bg-secondary">
//       <div className="container mx-auto grid lg:grid-cols-2 items-center gap-8 px-4">
//         {/* Left - Image */}
//         <div className="flex justify-center lg:justify-start">
//           <img
//             src={Logo}
//             alt="Swish.ma"
//             className="w-full max-w-md lg:max-w-[500px]"
//           />
//         </div>

//         {/* Right - Form & Text */}
//         <div className="max-w-lg flex flex-col gap-6">
//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
//             Get new customers and attractive jobs
//           </h2>

//           {/* Description */}
//           <p className="text-sm md:text-base text-liquidGreen">
//             Thousands of new missions every week. Create a free test profile now
//             and see all the jobs near you.
//           </p>

//           {/* Form */}
//           <form className="flex flex-col gap-4 w-full">
//             {/* Company Name */}
//             <div className="flex flex-col gap-1">
//               <label
//                 htmlFor="companyName"
//                 className="text-sm font-medium text-gray-200"
//               >
//                 Company Name
//               </label>
//               <Input
//                 id="companyName"
//                 type="text"
//                 name="companyName"
//                 value={formData.companyName}
//                 onChange={handleFormChange}
//                 placeholder="Company Name"
//                 className="h-10 text-sm"
//               />
//             </div>

//             {/* Phone Fields */}
//             <div className="flex gap-3 items-end">
//               {/* Country Code */}
//               <div className="w-[100px] flex flex-col gap-1">
//                 <label
//                   htmlFor="countryCode"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Code
//                 </label>
//                 <Select value={currentCode} onValueChange={setCurrentCode}>
//                   <SelectTrigger
//                     id="countryCode"
//                     className="h-12 w-full rounded-md border-none bg-white px-4 py-2 text-base md:text-sm text-[#A8A8A8] ring-offset-white focus-visible:ring-2 focus-visible:ring-primary hover:ring-2 hover:ring-primary transition-all duration-200"
//                   >
//                     <SelectValue
//                       placeholder={formData.countryCode}
//                       className="leading-none"
//                     />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {countryCodes.map((code) => (
//                         <SelectItem key={code} value={code} className="text-sm">
//                           {code}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Phone Number */}
//               <div className="flex-1 flex flex-col gap-1">
//                 <label
//                   htmlFor="phone"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Phone
//                 </label>
//                 <Input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   required
//                   value={formData.phone}
//                   onChange={handleFormChange}
//                   placeholder="123 456 7890"
//                   className="h-12 md:h-12 text-base md:text-sm"
//                 />
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="pt-2">
//               <Button
//                 type="button"
//                 onClick={() => setModalOpen(true)}
//                 className="w-full h-12 text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </div>
//           </form>

//           <CompanyRegisterModal
//             open={isModalOpen}
//             onClose={() => setModalOpen(false)}
//             onSubmit={handleModalSubmit}
//           />

//           {/* Terms Text */}
//           <p className="text-xs text-center text-gray-200 mt-2">
//             By continuing to register, you agree to the terms of use of
//             MyTender. You can read more about the processing of personal data{" "}
//             <span className="underline cursor-pointer">here</span>.
//           </p>

//           {/* Already a user */}
//           <div className="text-center text-white text-sm flex justify-center items-center gap-2">
//             <p>Already a user?</p>
//             <Link to="/login" className="text-primary font-medium underline">
//               Login here
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
