import Logo from "@/assets/images/logo-black.svg";
import UserIcon from "@/assets/images/user-icon.svg";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import GuardImg from "@/assets/images/guard.svg";
import HomeImg from "@/assets/images/home.svg";
import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ButtonProvider } from "@/components/ui/buttonProvider";

export interface CategoryProps {
  name: string;
  url: string;
  img?: string;
  subcategories?: CategoryProps[];
}

const services = [
  "Landscaping and Foundation Work",
  "Demolition, Piling, Concrete, Sawing",
  "Large Projects",
  "Carpenters/Building",
  "Garage/House/Hut/Extension/Add-on",
  "Building",
  "Concrete Floor Breaking",
  "Permit Support & Legalization",
];

const userSettings = [
  {
    name: "User Settings",
    subcategories: [
      {
        subname: "Company info",
        url: "/provider/my-business/job-setting/company-info",
      },
      {
        subname: "Notifications",
        url: "/provider/my-business/job-setting/notifications",
      },
      {
        subname: "Job search",
        url: "/provider/my-business/job-setting/job-search",
      },
      {
        subname: "Help guide",
        url: "/provider/my-business/job-setting/help-guide",
      },
      {
        subname: "Customer service",
        url: "/provider/my-business/job-setting/customer-service",
      },
    ],
  },
  {
    name: "Billing",
    subcategories: [{ subname: "Receipts", url: "/receipts" }],
  },
];

type NavigationMenuContentProps = {
  onSelectCategory: (category: CategoryProps) => void;
};

export default function JobSetting() {
  const [currentCategory, setCurrentCategory] = useState<CategoryProps | null>(
    null
  );
  const [isAddServiceVisible, setIsAddServiceVisible] = useState(false); // Toggle form visibility
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
    []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddServiceClick = () => {
    setIsAddServiceVisible(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Selected Subcategories:", selectedSubcategories);
    setIsAddServiceVisible(false); // Hide the form after submission
    toast.success("Service added successfully!");
    setSelectedSubcategories([]);
  };

  const handleCheckboxChange = (subcategoryName: string) => {
    setSelectedSubcategories((prevSelected) => {
      if (prevSelected.includes(subcategoryName)) {
        return prevSelected.filter((name) => name !== subcategoryName);
      } else {
        return [...prevSelected, subcategoryName];
      }
    });
  };

  const filteredSubcategories = currentCategory?.subcategories?.filter(
    (subcategory) =>
      subcategory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 ">
          <NavigationMenuContent onSelectCategory={setCurrentCategory} />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 mt-8 space-y-10 container mx-auto border">
          {/* <h2 className="text-2xl font-semibold mb-4">Service Offered</h2> */}
          {currentCategory && (
            <div className="shadow-sm bg-gray-50 p-4">
              <div className="flex flex-col items-center justify-center space-y-4 md:flex-row md:justify-between md:space-y-0">
                {/* Title + Back Button */}
                <div className="flex items-center justify-center">
                  <Button
                    className="mr-4 bg-primary text-white px-4 py-2 rounded-md"
                    onClick={() => setCurrentCategory(null)}
                  >
                    &lt;
                  </Button>
                  <h2 className="text-2xl font-semibold">
                    {currentCategory.name}
                  </h2>
                </div>

                {/* Add Service Button */}
                <Button
                  disabled={isAddServiceVisible}
                  className="bg-green-600 text-white hover:bg-green-700"
                  onClick={handleAddServiceClick}
                >
                  Add Service
                </Button>
              </div>
            </div>
          )}

          {isAddServiceVisible &&
            currentCategory?.subcategories?.length > 0 && (
              <div className="shadow-sm bg-gray-50 p-6 mt-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Select a Subcategory
                </h3>
                <Input
                  type="text"
                  className="w-full p-2 border ring-2 rounded mb-4"
                  placeholder="Search Subcategories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <form onSubmit={handleFormSubmit}>
                  {filteredSubcategories?.map((subcategory, index) => (
                    <div key={index} className="mb-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          name="subcategory"
                          value={subcategory.name}
                          checked={selectedSubcategories.includes(
                            subcategory.name
                          )}
                          onChange={() =>
                            handleCheckboxChange(subcategory.name)
                          }
                        />
                        <span>{subcategory.name}</span>
                      </label>
                    </div>
                  ))}
                  <div className="flex justify-end mt-4">
                    <button
                      type="submit"
                      className="bg-primary text-white px-4 py-2 rounded-md"
                    >
                      Add Service ({selectedSubcategories.length})
                    </button>
                  </div>
                </form>
              </div>
            )}

          {!isAddServiceVisible && currentCategory?.subcategories?.length ? (
            <ul className="list-disc list-inside space-y-4 text-blackSecondary">
              {currentCategory.subcategories.map((item, index) => (
                <li key={index}>{item.name}</li>
              ))}
            </ul>
          ) : (
            <>
              {!isAddServiceVisible && (
                <ul className="list-disc list-inside space-y-4 text-blackSecondary">
                  <h2 className="text-2xl font-semibold mb-8">
                    Service Offered
                  </h2>
                  {services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </main>
      </div>
    </section>
  );
}

export function NavigationMenuContent({
  onSelectCategory,
}: NavigationMenuContentProps) {
  return (
    <div className="w-full min-w-max flex flex-col gap-2 relative overflow-hidden px-6">
      <div className="py-5 space-y-2">
        <div className="flex flex-col mb-6">
          <Link to="">
            <h3 className="font-bold text-2xl text-primaryDark px-2">
              Settings
            </h3>
          </Link>
        </div>

        <div className="w-full flex flex-col gap-4">
          {userSettings.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category title */}
              <h3 className="font-semibold text-xl text-primaryDark px-2 mb-2">
                {category.name}
              </h3>

              {/* Subcategories */}
              <div className="flex flex-col">
                {category.subcategories.map((subcategory, subIndex) => (
                  <Link key={subIndex} to={subcategory.url}>
                    <ButtonProvider
                      variant="link"
                      className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
                    >
                      {subcategory.subname}
                    </ButtonProvider>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col mb-6">
          <Link to="">
            <h3 className="font-semibold text-xl text-primaryDark px-2">
              Other
            </h3>
          </Link>
        </div>
        <div className="flex flex-col ">
          <ButtonProvider
            variant="link"
            className="w-full flex items-center justify-between font-semibold text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
          >
            Switch account
          </ButtonProvider>
          <ButtonProvider
            variant="link"
            className="w-full flex items-center text-red-500 justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline text-left"
          >
            Logout
          </ButtonProvider>
        </div>
      </div>
    </div>
  );
}
