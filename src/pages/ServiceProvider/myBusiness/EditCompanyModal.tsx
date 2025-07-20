"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import UserIcon from "@/assets/images/user-icon.svg";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { CategoryProps } from "./jobSetting/JobSetting";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";
import AddServiceModal from "./AddServiceModal";

interface Props {
  open: boolean;
  onClose: () => void;
  data: {
    companyName: string;
    email: string;
    telephone: string;
    location: string;
    services: string[];
  };
  onUpdate: (updatedData: Props["data"]) => void;
}

type NavigationMenuContentProps = {
  onSelectCategory: (category: CategoryProps) => void;
};

export default function CompanyEditModal({
  open,
  onClose,
  data,
  onUpdate,
}: Props) {
  const [form, setForm] = useState(data);
  const [isDeleteMode, setIsDeleteMode] = useState(false); // Toggle delete mode
  const [selectedServices, setSelectedServices] = useState<string[]>([]); // Track selected services for deletion

  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal open state
  const [services, setServices] = useState<string[]>([]); // Track added services

  // Handle opening the modal
  const handleAddService = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle adding services after selection in modal
  const handleAddSelectedService = (selectedServices: string[]) => {
    setServices((prev) => [...prev, ...selectedServices]);
    console.log({ services, selectedServices });
  };

  useEffect(() => {
    setForm(data);
  }, [data]);

  const handleCheckboxChange = (service: string) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(service)
        ? prevSelected.filter((item) => item !== service)
        : [...prevSelected, service]
    );
  };

  const handleDeleteServiceClick = () => {
    setIsDeleteMode(true); // Enter delete mode to display checkboxes
  };

  const handleSubmitDelete = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedServices = form.services.filter(
      (service) => !selectedServices.includes(service)
    );
    setForm((prev) => ({
      ...prev,
      services: updatedServices,
    }));
    setSelectedServices([]); // Reset selected services after deletion
    setIsDeleteMode(false); // Exit delete mode
    toast.success("Services deleted successfully!");
    onClose();
  };

  const handleSubmit = () => {
    onUpdate(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Customize Your Company Info
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-2">Company Name</label>
            <Input
              value={form.companyName}
              className="ring-2 ring-gray-100 w-1/2"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, companyName: e.target.value }))
              }
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            {!isDeleteMode && (
              <>
                <label className="block font-semibold mb-1">Services</label>
                <div className="border p-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {form.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="space-y-2 text-sm text-muted-foreground"
                    >
                      <ul className="list-disc list-inside">
                        <li>{srv}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Show delete service button if not in delete mode */}
            {!isDeleteMode && (
              <div className="flex text-center items-center justify-center gap-4 w-full mt-6 ">
                <Button
                  className="bg-primary text-white px-6 py-2"
                  onClick={handleAddService}
                >
                  Add Service
                </Button>

                {/* Display selected services */}
                {/* <div className="mt-6">
                  <h3 className="font-semibold">Selected Services:</h3>
                  <ul>
                    {services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div> */}

                {/* Add Service Modal */}
                <AddServiceModal
                  open={isModalOpen}
                  onClose={handleCloseModal}
                  onAddService={handleAddSelectedService}
                />

                <Button
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2"
                  onClick={handleDeleteServiceClick}
                >
                  Delete Service
                </Button>
              </div>
            )}

            {/* Show services as checkboxes in delete mode */}
            {isDeleteMode && (
              <form onSubmit={handleSubmitDelete} className="mt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Select Services to Delete
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {form.services.map((service, idx) => (
                    <label key={idx} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between px-2 mt-6">
                  <Button
                    onClick={() => setIsDeleteMode(false)}
                    className="bg-primary text-white px-6 py-2"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white px-6 py-2"
                  >
                    Delete Services {selectedServices.length}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <p className="font-semibold text-xl ">Contact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <Input
                value={form.email}
                className="ring-2 ring-gray-100"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Telephone</label>
              <Input
                className="ring-2 ring-gray-100"
                value={form.telephone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, telephone: e.target.value }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Location</label>
              <Input
                className="ring-2 ring-gray-100"
                value={form.location}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-end">
            <Button onClick={handleSubmit} className="bg-primary text-white">
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function NavigationMenuContent({
  onSelectCategory,
}: NavigationMenuContentProps) {
  return (
    <div className="w-full min-w-max flex flex-col gap-2 relative overflow-hidden px-6">
      <div className="py-5 space-y-2">
        <div className="flex flex-col gap-1">
          <Link to="">
            <h3 className="font-semibold text-xl text-primaryDark px-2">
              Categories
            </h3>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-1">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant="link"
              className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline"
              onClick={() => onSelectCategory(category)}
            >
              {category.name}
              <ChevronRight
                size={16}
                className="text-primary pointer-events-none"
              />
            </Button>
          ))}
        </div>
      </div>
      <Separator className="bg-slate-200" />
    </div>
  );
}

export const categories = [
  {
    name: "Trades & Specialized Crafts",
    url: "/trades",
    description:
      "Skilled craftsmanship experts for all your specialist needs. From plumbing and wiring to stunning traditional Moroccan plasterwork and bespoke iron designs.",
    img: TradesToolsImg,
    subcategories: [
      { name: "Plumber", url: "/trades/plumber" },
      { name: "Electrician", url: "/trades/electrician" },
      { name: "Painter", url: "/trades/painter" },
      { name: "Locksmith", url: "/trades/locksmith" },
      { name: "Handyman", url: "/trades/handyman" },
    ],
  },
  {
    name: "Exterior & Garden",
    url: "/exterior-garden",
    description:
      "Upgrade your outdoor spaces—curb appeal, functionality, and green living in mind. We connect you with experts for gardens, terraces, roofs, driveways, and supporting systems.",
    img: GardenCoconutTreeImg,
    subcategories: [
      {
        name: "Solar Heater & AC Installation",
        url: "/exterior-garden/solar-heater-ac-installation",
      },
      {
        name: "Masonry & Concrete Work",
        url: "/exterior-garden/masonry-concrete-work",
      },
      { name: "Window & Doors", url: "/exterior-garden/window-doors" },
      {
        name: "Garden & Landscaping",
        url: "/exterior-garden/garden-landscaping",
      },
    ],
  },
  {
    name: "Indoor Renovation",
    url: "/indoor-renovation",
    description:
      "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
    img: IndoorRenovationImg,
    subcategories: [
      {
        name: "Full Renovation / Buildout",
        url: "/indoor-renovation/full-renovation-buildout",
      },
      {
        name: "Renovating Bathrooms",
        url: "/indoor-renovation/renovating-bathrooms",
      },
      { name: "Floor Laying", url: "/indoor-renovation/floor-laying" },
    ],
  },
];
