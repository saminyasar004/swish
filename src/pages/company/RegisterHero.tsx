import Logo from "@/assets/images/LogoLight.svg";
import SquaresImg from "@/assets/images/squares.svg";
import { categories } from "@/components/common/Header";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CompanyRegisterModal } from "./CompanyRegisterModal";

export default function RegisterHero() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    countryCode: "+880",
    businessMail: "",
    companyLocation: "",
  });

  // Handle data collection
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle modal form data submission
  const handleModalSubmit = (modalData: {
    businessMail: string;
    companyLocation: string;
  }) => {
    // Combine modal data with main form data
    const completeData = { ...formData, ...modalData };
    console.log("Complete Data to Backend:", completeData);

    // Send the complete data to your backend
    // You can make an API request here to send the formData to the backend

    // Reset the modal and form
    setModalOpen(false);
    setFormData({
      companyName: "",
      phone: "",
      countryCode: "+880",
      businessMail: "",
      companyLocation: "",
    });
  };
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

        {/* Right - Form & Text */}
        <div className="max-w-lg flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-liquidGreen leading-snug">
            Get new customers and attractive jobs
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-liquidGreen">
            Thousands of new missions every week. Create a free test profile now
            and see all the jobs near you.
          </p>

          {/* Form */}
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
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="123 456 7890"
                  className="h-12 md:h-12 text-base md:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full h-10 text-sm font-medium"
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

          {/* Terms Text */}
          <p className="text-xs text-center text-gray-200 mt-2">
            By continuing to register, you agree to the terms of use of
            MyTender. You can read more about the processing of personal data{" "}
            <span className="underline cursor-pointer">here</span>.
          </p>

          {/* Already a user */}
          <div className="text-center text-white text-sm flex justify-center items-center gap-2">
            <p>Already a user?</p>
            <Link to="/login" className="text-primary font-medium underline">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
