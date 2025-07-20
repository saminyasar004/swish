import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { categories } from "./EditCompanyModal";

export default function AddServiceModal({ open, onClose, onAddService }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Handle checkbox selection
  const handleCheckboxChange = (subcategoryName: string) => {
    setSelectedServices((prevSelected) =>
      prevSelected.includes(subcategoryName)
        ? prevSelected.filter((service) => service !== subcategoryName)
        : [...prevSelected, subcategoryName]
    );
  };

  // Handle service addition
  const handleAddServiceClick = () => {
    onAddService(selectedServices); // Send selected services to the parent component
    onClose(); // Close the modal after adding services
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Select Services to Add
          </DialogTitle>
        </DialogHeader>

        {/* Display Categories and Subcategories */}
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.name} className="space-y-2">
              <h3 className="text-lg font-semibold">{category.name}</h3>
              {category.subcategories?.map((subcategory) => (
                <div
                  key={subcategory.name}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(subcategory.name)}
                    onChange={() => handleCheckboxChange(subcategory.name)}
                  />
                  <span>{subcategory.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Add Service Button */}
        <div className="flex justify-end mt-6">
          <Button
            onClick={handleAddServiceClick}
            disabled={selectedServices.length === 0}
            className="bg-primary text-white"
          >
            Add Service ({selectedServices.length})
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
