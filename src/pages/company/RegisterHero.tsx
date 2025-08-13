// import Logo from "@/assets/images/LogoLight.svg";
import Logo from "@/assets/images/logoWhiteIcon.svg";
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
import { CompanyRegisterModal, FormData } from "./CompanyRegisterModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CompanyOpeningHour } from "./CompanyOpeningHoure";
import { useSingleSubCategoryListByIdQuery } from "@/redux/features/registerCompany/companySubcategory.api";

export default function RegisterHero() {
  const [allData, setAllData] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpeningHoursModalOpen, setOpeningHoursModalOpen] = useState(false);
  const [isCategoryModalOpen, setCategoryModalOpen] = useState(false);
  const [isSubcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [isUploadModalOpen, setUploadModalOpen] = useState(false); // New modal for upload step
  const [activeCategory, setActiveCategory] = useState<number | string | null>(null); // Active category for subcategories
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    logo: null,
    wallpaper: null,
  });
  const [selectedCategories, setSelectedCategories] = useState<string>();
  const [selectedSubcategories, setSelectedSubcategories] = useState<number[]>(
    []
  );

  // FOR SUBCATEGORY GET
  const { data: subcategories } = useSingleSubCategoryListByIdQuery(
    activeCategory,
    { skip: !activeCategory }
  );
  console.log({ subcategories });

  // STEP:1
  // HOME PAGE COMPANY NAME AND TELEPHONE
  const [errors, setErrors] = useState<{
    companyName?: string;
    phone?: string;
  }>({});
  const normalizePhone = (v: string) => v.replace(/\D/g, "");
  const isPhoneValid = (v: string) => {
    const digits = normalizePhone(v);
    // Basic E.164-ish check: 8–15 digits (tweak if you need stricter rules)
    return digits.length >= 8 && digits.length <= 15;
  };

  const validateStepOne = () => {
    const nextErrors: { companyName?: string; phone?: string } = {};

    if (!formData.companyName.trim()) {
      nextErrors.companyName = "Company name is required.";
    }

    if (!phone.trim()) {
      nextErrors.phone = "Telephone is required.";
    } else if (!isPhoneValid(phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleContinueClick = () => {
    if (!validateStepOne()) return;

    // Persist the phone in your formData (store with + prefix if you like)
    setFormData((prev) => ({
      ...prev,
      phone: phone.startsWith("+") ? phone : `+${phone}`,
    }));

    // proceed to next modal/step
    setModalOpen(true);
  };

  // Handle form data collection for company registration
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // END OF HOME PAGE COMPANY NAME AND TELEPHONE

  // STEP:2
  // HERE OPEN COMPANY REGISTER MODAL FROM PREVIOUS STEP AND SUBMIT
  // Handle modal form data submission (Company registration)
  const handleModalSubmit = (modalData: FormData) => {
    const completeData = { ...formData, ...modalData };
    console.log("Complete Data to Backend:", completeData);

    setAllData(completeData);

    // Send the complete data to your backend (API call)
    setModalOpen(false);
    // setCategoryModalOpen(true); // Open Category Modal after submitting company form
    setOpeningHoursModalOpen(true); // Open opening hours modal
  };
  // END OF STEP:2

  // STEP:3
  // HERE OPEN OPENING HOURS MODAL FROM PREVIOUS STEP
  const handleOpeningHoursModalSubmit = (modalDataWithHour) => {
    const completeDataWithOpeningHours = { ...allData, ...modalDataWithHour };
    console.log(
      "Complete completeDataWithOpeningHours to Backend:",
      completeDataWithOpeningHours
    );
    setAllData(completeDataWithOpeningHours);
    // Send the complete data to your backend (API call)
    setModalOpen(false);
    setCategoryModalOpen(true); // Open Category Modal after submitting company form
  };
  // END OF STEP:3


  // STEP:4
  // Open subcategory modal when category is clicked
  const openSubcategoryModal = (categoryId: number, categoryName:string) => {
    setActiveCategory(categoryId); // Set the active category
    setSelectedCategories(categoryName);
    setSubcategoryModalOpen(true); // Open the subcategory modal
  };

  // Handle subcategory checkbox change
  const handleSubcategoryChange = (subCategoryId: number, checked: boolean) => {
    if (checked) {
      setSelectedSubcategories((prev) => [...prev, subCategoryId]);
    } else {
      setSelectedSubcategories((prev) =>
        prev.filter((sub) => sub !== subCategoryId)
      );
    }
  };

  // Handle subcategory modal submission
  const handleSubcategoryModalSubmit = () => {
    // You can send the selected subcategories along with other form data
    console.log("Selected Subcategories:", selectedSubcategories);
    setSubcategoryModalOpen(false); // Close the subcategory modal
  };

  
  // Handle category modal submission (Submit categories and subcategories)
  const handleCategoryModalSubmit = () => {
    const allCompanyData = {
      ...allData,
      // selectedCategories,
      selectedSubcategories,
    };
    console.log(
      "Complete Data to Backend with Categories and Subcategories:",
      allCompanyData
    );

    // Send this data to the backend as needed
    setCategoryModalOpen(false); // Close the category modal after submission
    setUploadModalOpen(true); // Open the upload modal
  };
// END OF STEP:4


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

  // Handle file upload modal submission
  const handleUploadModalSubmit = () => {
    // Send the formData, including the logo and wallpaper, to the backend
    console.log("Upload Complete with Files:", formData);
    setUploadModalOpen(false); // Close the upload modal
    toast.success("Your Profile Created Successfully!");
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-6 px-4">
        {/* Left - Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={Logo}
            alt="swish.ma"
            className="w-full max-w-[70%] md:max-w-md lg:max-w-[350px]"
          />
        </div>

        {/* Right - Form */}
        <div className="max-w-lg flex flex-col gap-6 text-center md:text-start">
          <h2 className="text-2xl md:text-4xl font-semibold text-liquidGreen leading-snug">
            Get new customers and attractive jobs
          </h2>

          <p className="text-sm md:text-base text-liquidGreen">
            Hundreds of opportunities near you every single day. Create your
            free profile and discover real jobs waiting for someone like you.
          </p>

          <div>
            {/* Company Registration Form */}

            <form className="flex flex-col gap-4 w-full" noValidate>
              {/* Company Name */}
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
                    handleFormChange(e);
                    if (errors.companyName && e.target.value.trim()) {
                      setErrors((prev) => ({
                        ...prev,
                        companyName: undefined,
                      }));
                    }
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

              {/* Phone Fields */}
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
                    onChange={(val) => {
                      setPhone(val);
                      if (errors.phone && isPhoneValid(val)) {
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                      }
                    }}
                    // Make the underlying input required + accessible
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
                    // Optional: quickly enforce only digits & plus
                    // onBlur={() => setErrors((prev)=>({...prev, phone: isPhoneValid(phone)? undefined : "Enter a valid phone number."}))}
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

              {/* Continue Button */}
              <div className="pt-2">
                <Button
                  type="button"
                  onClick={handleContinueClick}
                  className="w-full h-12 text-sm font-medium"
                  // Also disable until both fields look valid
                  disabled={
                    !formData.companyName.trim() || !isPhoneValid(phone)
                  }
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
          <CompanyRegisterModal
            open={isModalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleModalSubmit}
          />

          {/* Company Opening Hours */}
          <CompanyOpeningHour
            open={isOpeningHoursModalOpen}
            onClose={() => setOpeningHoursModalOpen(false)}
            onSubmit={handleOpeningHoursModalSubmit}
          />

          {/* Category Selection Modal */}
          <Dialog
            open={isCategoryModalOpen}
            onOpenChange={setCategoryModalOpen}
          >
            <DialogContent className="max-w-sm md:max-w-md">
              <DialogHeader>
                <DialogTitle>Select Categories</DialogTitle>
              </DialogHeader>

              <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
                {categories.map((category, index) => (
                  <div key={index}>
                    <div
                      className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
                      onClick={() => openSubcategoryModal(category.id, category.name)}
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
            <DialogContent className="max-w-sm md:max-w-md">
              <DialogHeader>
                <DialogTitle>{selectedCategories}</DialogTitle>
              </DialogHeader>

              {/* <div className="space-y-4">
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
              </div> */}
              <div className="space-y-4">
                {activeCategory &&
                  subcategories?.map((category) => (
                    <div key={category.id}>
                      {/* {category.subcategories.map(sub => ( */}
                      <div
                        key={category.id}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id={`sub-${category.id}`}
                          onChange={(e) =>
                            handleSubcategoryChange(
                              category.id,
                              e.target.checked
                            )
                          }
                        />
                        <label
                          htmlFor={`sub-${category.id}`}
                          className="text-sm"
                        >
                          {category.name}
                        </label>
                      </div>
                      {/* ))} */}
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
            <DialogContent className="max-w-sm md:max-w-md">
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
