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

export interface CategoryProps {
  name: string;
  url: string;
  img?: string;
  subcategories?: CategoryProps[];
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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-solidWhite shadow-xl ">
        {/* User Header */}
        <div className="flex items-center gap-3 text-2xl my-6 font-semibold mx-12">
          <div className="bg-primary text-solidWhite rounded px-3 py-1 text-3xl">
            A
          </div>
          Ali Mounji
        </div>

        <hr className="border border-gray-200" />

        <NavigationMenuContent onSelectCategory={setCurrentCategory} />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 mt-8 space-y-10 container mx-auto">
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

        {isAddServiceVisible && currentCategory?.subcategories?.length > 0 && (
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
                      checked={selectedSubcategories.includes(subcategory.name)}
                      onChange={() => handleCheckboxChange(subcategory.name)}
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
                <h2 className="text-2xl font-semibold mb-8">Service Offered</h2>
                {services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </main>
    </div>
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

// Navigation Menu with Fixed Sidebar
// function NavigationMenuContent({
//   onSelectCategory,
// }: NavigationMenuContentProps) {
//   const [currentCategory, setCurrentCategory] = useState<CategoryProps | null>(
//     null
//   );

//   return (
//     <div className="w-full h-screen min-w-max flex flex-col gap-2 relative overflow-hidden px-6">
//       {/* Category Menu */}
//       <div className="py-5 space-y-2">
//         <div className="flex flex-col gap-1">
//           <Link to="/categories">
//             <h3 className="font-semibold text-xl text-primaryDark px-2">
//               Categories
//             </h3>
//           </Link>
//         </div>

//         <div className="w-full flex flex-col gap-1">
//           {categories.map((category, index) => (
//             <Button
//               key={index}
//               variant="link"
//               className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline"
//               onClick={() => setCurrentCategory(category)}
//             >
//               {category.name}
//               <ChevronRight
//                 size={16}
//                 className="text-primary pointer-events-none"
//               />
//             </Button>
//           ))}
//         </div>
//       </div>

//       <Separator className="bg-slate-200" />

//       {/* Subcategory Menu */}
//       {currentCategory && (
//         <div className="pt-5 space-y-5">
//           <div className="flex flex-col gap-1">
//             <Link
//               to={currentCategory.url}
//               className="w-full flex items-center justify-between font-semibold text-xl transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md min-w-max"
//             >
//               {currentCategory.name}
//               <ChevronRight
//                 size={16}
//                 className="text-primary pointer-events-none"
//               />
//             </Link>
//           </div>

//           <ScrollArea className="h-[75vh] w-full">
//             <div className="w-full flex flex-col gap-1">
//               {currentCategory?.subcategories?.map((subCategoryItem, index) => (
//                 <Link
//                   key={index}
//                   to={subCategoryItem.url}
//                   className="w-full font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
//                 >
//                   {subCategoryItem.name}
//                 </Link>
//               ))}
//             </div>
//           </ScrollArea>
//         </div>
//       )}
//     </div>
//   );
// }

// import Logo from "@/assets/images/logo-black.svg";
// import UserIcon from "@/assets/images/user-icon.svg";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
// import GuardImg from "@/assets/images/guard.svg";
// import HomeImg from "@/assets/images/home.svg";
// import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
// import TradesToolsImg from "@/assets/images/trades-tools.svg";
// import { Separator } from "@/components/ui/separator";

// export interface CategoryProps {
//   name: string;
//   url: string;
//   img?: string;
//   subcategories?: CategoryProps[];
// }

// export const categories = [
//   {
//     name: "Trades & Specialized Crafts",
//     url: "/trades",
//     description:
//       "Skilled craftsmanship experts for all your specialist needs. From plumbing and wiring to stunning traditional Moroccan plasterwork and bespoke iron designs.",
//     img: TradesToolsImg,
//     subcategories: [
//       { name: "Plumber", url: "/trades/plumber" },
//       { name: "Electrician", url: "/trades/electrician" },
//       { name: "Painter", url: "/trades/painter" },
//       { name: "Locksmith", url: "/trades/locksmith" },
//       { name: "Handyman", url: "/trades/handyman" },
//     ],
//   },
//   {
//     name: "Exterior & Garden",
//     url: "/exterior-garden",
//     description:
//       "Upgrade your outdoor spaces—curb appeal, functionality, and green living in mind. We connect you with experts for gardens, terraces, roofs, driveways, and supporting systems.",
//     img: GardenCoconutTreeImg,
//     subcategories: [
//       {
//         name: "Solar Heater & AC Installation",
//         url: "/exterior-garden/solar-heater-ac-installation",
//       },
//       {
//         name: "Masonry & Concrete Work",
//         url: "/exterior-garden/masonry-concrete-work",
//       },
//       { name: "Window & Doors", url: "/exterior-garden/window-doors" },
//       {
//         name: "Garden & Landscaping",
//         url: "/exterior-garden/garden-landscaping",
//       },
//     ],
//   },
//   {
//     name: "Indoor Renovation",
//     url: "/indoor-renovation",
//     description:
//       "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
//     img: IndoorRenovationImg,
//     subcategories: [
//       {
//         name: "Full Renovation / Buildout",
//         url: "/indoor-renovation/full-renovation-buildout",
//       },
//       {
//         name: "Renovating Bathrooms",
//         url: "/indoor-renovation/renovating-bathrooms",
//       },
//       { name: "Floor Laying", url: "/indoor-renovation/floor-laying" },
//     ],
//   },
// ];

// export default function JobSetting() {
//   const [isSheetOpen, setIsSheetOpen] = useState(false);

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen ">
//       {/* Sidebar */}
//       <aside className="w-full md:w-1/4 bg-solidWhite shadow-xl">
//         <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
//           <SheetTrigger asChild>
//             <Button variant="outline" className="rounded-full space-x-1">
//               <Menu />
//               <img src={UserIcon} alt="User" className="max-w-full" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent className="py-10 min-w-max sm:max-w-lg px-5">
//             <NavigationMenuSheetContent setIsSheetOpen={setIsSheetOpen} />
//           </SheetContent>
//         </Sheet>
//       </aside>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 p-6 space-y-10 container mx-auto"></main>
//     </div>
//   );
// }

// function NavigationMenuSheetContent({
//   setIsSheetOpen,
// }: {
//   setIsSheetOpen: (open: boolean) => void;
// }) {
//   const [currentCategory, setCurrentCategory] = useState<CategoryProps | null>(
//     null
//   );

//   return (
//     <div className="w-full h-screen min-w-max flex flex-col gap-2 relative overflow-hidden">
//       <div
//         className={cn(
//           "w-full min-w-max absolute transition-transform ease-in-out duration-150",
//           currentCategory ? "translate-x-[-110%]" : "translate-x-0"
//         )}
//       >
//         <div className="py-5 space-y-2">
//           <div className="flex flex-col gap-1">
//             <Link to="/categories" onClick={() => setIsSheetOpen(false)}>
//               <h3 className="font-semibold text-xl text-primaryDark px-2">
//                 Categories
//               </h3>
//             </Link>
//           </div>

//           <div className="w-full flex flex-col gap-1">
//             {categories.map((category, index) => (
//               <Button
//                 key={index}
//                 variant="link"
//                 className="w-full flex items-center justify-between font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md hover:no-underline"
//                 onClick={() => setCurrentCategory(category)}
//               >
//                 {category.name}

//                 <ChevronRight
//                   size={16}
//                   className="text-primary pointer-events-none"
//                 />
//               </Button>
//             ))}
//           </div>
//         </div>

//         <Separator className="bg-slate-200" />
//       </div>

//       <div
//         className={cn(
//           "w-full min-w-max absolute transition-transform ease-in-out duration-150",
//           currentCategory ? "translate-x-0" : "translate-x-[110%]"
//         )}
//       >
//         <SheetHeader>
//           <div className="w-full py-2">
//             <Button
//               variant="link"
//               className="text-primary hover:text-primaryDark font-semibold px-0"
//               onClick={() => setCurrentCategory(null)}
//             >
//               <ChevronLeft
//                 size={16}
//                 className="text-primary pointer-events-none"
//               />
//               Menu
//             </Button>
//           </div>
//         </SheetHeader>

//         <Separator className="bg-slate-200" />

//         <div className="pt-5 space-y-5">
//           {currentCategory && (
//             <div className="flex flex-col gap-1">
//               <Link
//                 to={currentCategory.url}
//                 className="w-full flex items-center justify-between font-semibold text-xl transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md min-w-max"
//                 onClick={() => setIsSheetOpen(false)}
//               >
//                 {currentCategory.name}
//                 <ChevronRight
//                   size={16}
//                   className="text-primary pointer-events-none"
//                 />
//               </Link>
//             </div>
//           )}

//           <ScrollArea className="h-[75vh] w-full">
//             <div className="w-full flex flex-col gap-1">
//               {currentCategory &&
//                 currentCategory?.subcategories?.map(
//                   (subCategoryItem, index) => (
//                     <Link
//                       key={index}
//                       to={subCategoryItem.url}
//                       className="w-full font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
//                       onClick={() => {
//                         setCurrentCategory(subCategoryItem);
//                         setIsSheetOpen(false);
//                       }}
//                     >
//                       {subCategoryItem.name}
//                     </Link>
//                   )
//                 )}
//             </div>
//           </ScrollArea>
//         </div>
//       </div>
//     </div>
//   );
// }
