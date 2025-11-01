import Logo from "@/assets/images/logo-black.svg";
import UserIcon from "@/assets/images/user-icon.svg";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import CategoryExteriorIcon from "@/assets/images/CategoryExteriorIcon.svg";
import GuardImg from "@/assets/images/guard.svg";
import HomeImg from "@/assets/images/home.svg";
import loggedInUserIcon from "@/assets/icon/loggedInUserIcon.svg";
import CategoryConstruction from "@/assets/images/CategoryConstruction.svg";
import CategoryHomeIcon from "@/assets/images/CategoryHomeService.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
import adminlegal from "@/assets/images/admin&legal.svg";
import techEnergy from "@/assets/images/techEnergy.svg";
import MovingTransport from "@/assets/images/MovingTransport.svg";
import CleaningServices from "@/assets/images/CleaningServices.svg";
import CustomTasks from "@/assets/icon/CustomTasks.svg";
import PestControl from "@/assets/icon/PestControl.svg";
import {
  useAllCategoryListQuery,
  useGetUserProfileQuery,
} from "@/redux/features/users/user.category.api";
import LoadingSpinner from "./LoadingSpinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TUserProfile } from "@/types/user.type";
import { useTranslation } from "react-i18next";
// import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";

export interface SubCategoryProps {
  name: string;
  url: string;
}
export interface CategoryProps {
  name: string;
  id: number;
  url: string;
  img?: string;
  description: string;
  subcategories?: SubCategoryProps[];
}

export const categories = [
  {
    // name: "New Construction & Permits",
    name: "Construction & Renovation",
    id: 1,
    url: "/post-job",
    description:
      "Planning a new build? From architectural design and permits to full construction and property registration—find trusted experts to realize your dream home from the ground up.",
    img: CategoryConstruction,

    subcategories: [
      {
        name: "General Contractor",
        url: "/new-construction-permits/contractor",
      },
      {
        name: "Project Manager",
        url: "/new-construction-permits/project-manager",
      },
      {
        name: "Architect",
        url: "/new-construction-permits/architect",
      },
      {
        name: "Interior Designer",
        url: "/new-construction-permits/interior",
      },

      // {
      //   name: "Building",
      //   url: "/new-construction-permits/building",
      // },
      {
        name: "Civil Engineer",
        url: "/new-construction-permits/civil-engineer",
      },

      {
        name: "Structural Engineer",
        url: "/new-construction-permits/structural-engineer",
      },
      {
        name: "Facade Renovation ",
        url: "/new-construction-permits/facade-renovation",
      },
      // {
      //   name: "Garage/House/Hut/Extension/Add-on",
      //   url: "/new-construction-permits/garage-house",
      // },
      // {
      //   name: "Permit Support & Legalization",
      //   url: "/new-construction-permits/permit-support-legalization",
      // },
      // {
      //   name: " Property Documentation",
      //   url: "/new-construction-permits/property-documentation",
      // },
      // {
      //   name: "Land Surveying",
      //   url: "/new-construction-permits/land-surveying",
      // },
      {
        name: "Demolition",
        url: "/new-construction-permits/demolition",
      },
      {
        name: "Excavation & Earthworks",
        url: "/new-construction-permits/excavation-earthworks",
      },
      {
        name: "Scaffolding Services",
        url: "/new-construction-permits/scaffolding-services ",
      },
      {
        name: "Insulation Works",
        url: "/new-construction-permits/insulation-works",
      },
      {
        name: "Concrete & Foundations",
        url: "/new-construction-permits/concrete-foundations",
      },
    ],
  },

  {
    // name: "Trades & Specialized Crafts",
    name: "Home repairs & Trades",
    id: 2,
    url: "/trades",
    description:
      "Skilled craftsmanship experts for all your specialist needs. From plumbing and wiring to stunning traditional Moroccan plasterwork and bespoke iron details.",
    img: TradesToolsImg,
    subcategories: [
      { name: "Mason", url: "/trades/mason" },
      { name: "Carpenter/Joiner", url: "/trades/carpenter" },
      { name: "Electrician", url: "/trades/electrician" },
      { name: "Plumber", url: "/trades/plumber" },
      { name: "Roofer", url: "/trades/roofer" },
      { name: "Locksmith", url: "/trades/locksmith" },
      { name: "Plasterwork", url: "/trades/plasterwork" },
      { name: "Aluminium, Glass & Metalwork", url: "/trades/specialist" },
      { name: "Painter", url: "/trades/painter" },
      // { name: "Tiler", url: "/trades/tiler" },
      { name: "Handyman", url: "/trades/handyman" },
      // { name: "Excavation", url: "/trades/excavation" },
      // { name: "Traditional Plaster & Zellige", url: "/trades/plaster" },
      // { name: "Concrete Walls", url: "/trades/concrete" },
      // { name: "Ironwork", url: "/trades/ironwork" },
      { name: "Air Conditioning (AC)", url: "/trades/air-conditioning" },
      { name: "Waterproofing", url: "/trades/waterproofing" },
      { name: "Contractor", url: "/trades/contractor" },
      { name: "Traditional Crafts", url: "/trades/traditionalCrafts" },
      { name: "Wells & Septic Services", url: "/trades/septicServices" },
    ],
  },

  {
    // name: "Exterior & Garden",
    name: "Garden & Outdoor",
    id: 3,
    // url: "/exterior-garden",
    url: "/post-job",
    description:
      "Upgrade your outdoor spaces—curb appeal, functionality, and green living in mind. We connect you with experts for gardens, terraces, roofs, driveways, and supporting systems.",
    img: CategoryExteriorIcon,
    // subcategories: [
    //   {
    //     name: "Solar Heater & AC Installation",
    //     url: "/exterior-garden/solar-heater-ac-installation",
    //   },
    //   {
    //     name: "Masonry & Concrete Work",
    //     url: "/exterior-garden/masonry-concrete-work",
    //   },
    //   { name: "Window & Doors", url: "/exterior-garden/window-doors" },
    //   {
    //     name: "Garden & Landscaping",
    //     url: "/exterior-garden/garden-landscaping",
    //   },
    // ],
    subcategories: [
      {
        name: "Garden & Landscaping",
        url: "/exterior-garden/garden-landscaping",
      },
      {
        name: "Tree Cutting & Stump Removal",
        url: "/exterior-garden/tree-cutting-stump-removal",
      },
      {
        name: "Pool Maintenance",
        url: "/exterior-garden/pool-maintenance",
      },
      {
        name: "Terrace & Exterior Cleaning",
        url: "/exterior-garden/terrace-exterior-cleaning",
      },
      {
        name: "Fence & Gate Installation & Repair",
        url: "/exterior-garden/fence-gate-installation-repair",
      },
      {
        name: "Irrigation Systems",
        url: "/exterior-garden/irrigation-systems",
      },

      // {
      //   name: "Paving",
      //   url: "/exterior-garden/paving",
      // },
      // {
      //   name: "Asphalting",
      //   url: "/exterior-garden/asphalting",
      // },
      // {
      //   name: "Pergolas",
      //   url: "/exterior-garden/pergolas",
      // },
      // {
      //   name: "Fence & Gate",
      //   url: "/exterior-garden/fence-gate",
      // },
      // {
      //   name: "Gardening",
      //   url: "/exterior-garden/gardening",
      // },
      // {
      //   name: "Roof Repair",
      //   url: "/exterior-garden/roof-repair",
      // },
      // {
      //   name: "Chimney Repair",
      //   url: "/exterior-garden/chimney-repair",
      // },
      // {
      //   name: "Demolition",
      //   url: "/exterior-garden/demolition",
      // },
      // {
      //   name: "Water & Drainage",
      //   url: "/exterior-garden/water-drainage",
      // },

      // {
      //   name: "Waterproofing",
      //   url: "/exterior-garden/waterproofing",
      // },
      // {
      //   name: "Facade & Painting",
      //   url: "/exterior-garden/facade-painting",
      // },
      // {
      //   name: "Groundwork",
      //   url: "/exterior-garden/groundwork",
      // },

      // {
      //   name: "Masonry & Concrete Work",
      //   url: "/exterior-garden/masonry-concrete-work",
      // },
      // {
      //   name: "Deck & Patio",
      //   url: "/exterior-garden/deck-patio",
      // },
      // {
      //   name: "Tree Care",
      //   url: "/exterior-garden/tree-care",
      // },
      // { name: "Window & Doors", url: "/exterior-garden/window-doors" },
      // {
      //   name: "Terrace Shade",
      //   url: "/exterior-garden/terrace-shade",
      // },
      // {
      //   name: "Water Tanks",
      //   url: "/exterior-garden/water-tanks",
      // },
    ],
  },

  {
    name: "Admin & Legal Services",
    id: 4,
    url: "/post-job",
    description:
      "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
    img: adminlegal,

    subcategories: [
      {
        name: "Accountant",
        url: "/admin-legal-services/accountant",
      },
      {
        name: "Notary Services",
        url: "/admin-legal-services/notary-services",
      },
      {
        name: "Lawyer",
        url: "/admin-legal-services/lawyer",
      },
      {
        name: "Tax Declaration & Filing",
        url: "/admin-legal-services/tax-declaration-filing",
      },
      {
        name: "Company Registration",
        url: "/admin-legal-services/company-registration",
      },
      {
        name: "Government Documents",
        url: "/admin-legal-services/government-documents",
      },
      {
        name: "Property Paperwork",
        url: "/admin-legal-services/property-paperwork",
      },
      {
        name: "Import & Export Paperwork",
        url: "/admin-legal-services/import-export-paperwork",
      },
      {
        name: "Visa & Residency Support",
        url: "/admin-legal-services/visa-residency-support",
      },
      {
        name: "Translation & Forms",
        url: "/admin-legal-services/translation-forms",
      },
    ],
  },

  {
    name: "Tech & Energy",
    id: 5,
    url: "/post-job",
    description:
      "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
    img: techEnergy,

    subcategories: [
      {
        name: "WiFi & Network Help",
        url: "/tech-energy/wifi-network-help",
      },
      {
        name: "TV & Satellite Installation",
        url: "/tech-energy/TV-satellite-installation",
      },
      {
        name: "Security Cameras & Alarms",
        url: "/tech-energy/security-cameras-alarms",
      },
      {
        name: "Smart Home Devices",
        url: "/tech-energy/smart-home-devices",
      },
      {
        name: "Smart Home Devices",
        url: "/tech-energy/solar-panels",
      },
      {
        name: "EV Charger Installation",
        url: "/tech-energy/EV-charger-installation",
      },
      {
        name: "Energy Consulting",
        url: "/tech-energy/energy-consulting",
      },
    ],
  },

  {
    name: "Moving & Transport",
    id: 6,
    url: "/post-job",
    description:
      "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
    img: MovingTransport,

    subcategories: [
      {
        name: "Home Moving",
        url: "/moving-transport/home-moving",
      },
      {
        name: "Office Moving",
        url: "/moving-transport/office-moving",
      },
      {
        name: "Furniture Assembly & Disassembly",
        url: "/moving-transport/furniture-assembly-disassembly",
      },
      {
        name: "Pickup & Delivery",
        url: "/moving-transport/pickup-delivery",
      },

      {
        name: "Intercity Transport",
        url: "/moving-transport/intercity-transport",
      },
      {
        name: "International Moving",
        url: "/moving-transport/international-moving",
      },
    ],
  },

  {
    name: "Cleaning Services",
    id: 7,
    url: "/post-job",
    description:
      "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
    img: CleaningServices,

    subcategories: [
      {
        name: "Home Cleaning",
        url: "/cleaning-services/home-cleaning",
      },

      {
        name: "Office & Commercial Cleaning",
        url: "/cleaning-services/office-commercial-cleaning",
      },
      {
        name: "Carpet & Upholstery Cleaning",
        url: "/cleaning-services/carpet-upholstery-cleaning",
      },
      {
        name: "Window Cleaning",
        url: "/cleaning-services/window-cleaning",
      },
      {
        name: "Deep Cleaning",
        url: "/cleaning-services/deep-cleaning",
      },
      {
        name: "Kitchen & Restaurant Cleaning",
        url: "/cleaning-services/kitchen-restaurant-cleaning",
      },
      {
        name: "Move-out Cleaning",
        url: "/cleaning-services/move-out-cleaning",
      },
      {
        name: "Water Tank Cleaning",
        url: "/cleaning-services/water-tank-cleaning",
      },
    ],
  },

  {
    name: "Pest Control",
    id: 8,
    url: "/post-job",
    description:
      "Protect your home and office with our professional pest control services. Safe, effective, and reliable solutions to keep your space pest-free.",
    img: PestControl,

    subcategories: [
      {
        name: "Cockroaches",
        url: "/pest-control/cockroaches",
      },

      {
        name: "Mosquito Control",
        url: "/pest-control/mosquito-control",
      },
      {
        name: "Termites",
        url: "/pest-control/Bed Bugs",
      },
      {
        name: "Rodents",
        url: "/pest-control/rodents",
      },
      {
        name: "Disinfection Services",
        url: "/pest-control/disinfection-services",
      },
    ],
  },

  {
    name: "Custom Tasks",
    id: 9,
    url: "/post-job",
    description:
      "Get any task done your way with our flexible and reliable custom services. We handle it all, so you don’t have to worry.",
    img: CustomTasks,

    subcategories: [
      {
        name: "Describe Your Task Freely",
        url: "/custom-tasks/describe-your-task-freely",
      },
      {
        name: "Office Moving",
        url: "/custom-tasks/office-moving",
      },
      {
        name: "Furniture Assembly & Disassembly",
        url: "/custom-tasks/furniture-assembly-disassembly",
      },
      {
        name: "Upload Images or Videos",
        url: "/custom-tasks/upload-images-videos",
      },
      {
        name: "Get Matched with Professionals",
        url: "/custom-tasks/get-matched-with-professionals",
      },
    ],
  },

  // {
  //   name: "Indoor Renovation",
  //   id: 4,
  //   url: "/indoor-renovation",
  //   description:
  //     "Transform your interiors—whether modern upgrades, full remodels or cozy rental conversions. We'll help you find trusted craftsmen for every room.",
  //   img: IndoorRenovationImg,

  //   subcategories: [
  //     {
  //       name: "Full Renovation / Buildout",
  //       url: "/indoor-renovation/full-renovation-buildout",
  //     },
  //     {
  //       name: "Renovating Bathrooms",
  //       url: "/indoor-renovation/renovating-bathrooms",
  //     },
  //     { name: "Floor Laying", url: "/indoor-renovation/floor-laying" },
  //     {
  //       name: "Interior Architect",
  //       url: "/indoor-renovation/interior-architect",
  //     },

  //     {
  //       name: "Waterproofing",
  //       url: "/indoor-renovation/waterproofing",
  //     },
  //     {
  //       name: "Microcement",
  //       url: "/indoor-renovation/microcement",
  //     },
  //     {
  //       name: "Tiling",
  //       url: "/indoor-renovation/tiling",
  //     },
  //     {
  //       name: "Painting & Wallpapering",
  //       url: "/indoor-renovation/painting-wallpapering",
  //     },
  //     {
  //       name: "Fireplace/Stove Installation",
  //       url: "/indoor-renovation/fireplace-stove-installation",
  //     },
  //     {
  //       name: "Concrete Floor Breaking",
  //       url: "/indoor-renovation/concrete-floor-breaking",
  //     },
  //   ],
  // },

  // {
  //   name: " Home Services & Installations",
  //   id: 5,
  //   url: "/home-services-installations",
  //   description:
  //     "Support services that keep your home running smoothly. From security systems and cleaning, to EV chargers, pest control and moving help.",
  //   img: CategoryHomeIcon,

  //   subcategories: [
  //     {
  //       name: "Alarm & Security",
  //       url: "/home-services-installations/alarm-security",
  //     },
  //     {
  //       name: "Waste Disposal",
  //       url: "/home-services-installations/waste-disposal",
  //     },

  //     {
  //       name: "Car Services",
  //       url: "/home-services-installations/car-services",
  //     },
  //     {
  //       name: "EV Charger Install",
  //       url: "/home-services-installations/ev-charger-install",
  //     },

  //     {
  //       name: "Cleaning & Move-Out Services",
  //       url: "/home-services-installations/cleaning-move-out-services",
  //     },
  //     {
  //       name: "Pest Control",
  //       url: "/home-services-installations/pest-control",
  //     },

  //     {
  //       name: "Appliance Install & Assembly",
  //       url: "/home-services-installations/appliance-install-assembly",
  //     },
  //     {
  //       name: "Mechanical Workshops",
  //       url: "/home-services-installations/mechanical-workshops",
  //     },

  //     {
  //       name: "Sun Shading & Blinds",
  //       url: "/home-services-installations/sun-shading-blinds",
  //     },
  //     {
  //       name: "Surveyor/Valuation",
  //       url: "/home-services-installations/surveyor-valuation",
  //     },

  //     {
  //       name: "Transport & Equipment Rental",
  //       url: "/home-services-installations/transport-equipment-rental",
  //     },
  //     {
  //       name: "Solar Panels",
  //       url: "/home-services-installations/solar-panels",
  //     },
  //   ],
  // },
];

export default function Header() {
  const { t, i18n } = useTranslation("navigation");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const location = useLocation();
  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isSheetOpen, setIsSheetOpen] = useState(false); // Add state for Sheet
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);

  // GET PROFILE
  const { data: userProfile, isLoading: isUserProfileLoading } =
    useGetUserProfileQuery(undefined, {
      skip: !token,
    });
  console.log({ userProfile });

  // Close Sheet and scroll to top on route change
  useEffect(() => {
    setIsSheetOpen(false); // Close Sheet when route changes
    window.scrollTo(0, 0);
  }, [location]);

  // if (isUserProfileLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[200px]">
  //       <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
  //       <span className="ml-3 text-gray-600">Loading data...</span>
  //     </div>
  //   );
  // }

  return (
    <header className="w-full h-auto bg-white/50 py-3 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <Link to="/">
            <img
              src={Logo}
              alt="swish.ma"
              className="max-w-[90%] md:max-w-full"
            />
          </Link>
        </div>

        <div className="nav-items flex items-center justify-around gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Select
              value={i18n.language}
              onValueChange={(e) => changeLanguage(e)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languages.map((language) => (
                    <SelectItem value={language.code} key={language.code}>
                      {language.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Link
              to="/register-company"
              className="hover:underline transition-all duration-300"
            >
              {t("register-company")}
            </Link>

            <Link to="/post-job">
              <Button>{t("post-job")}</Button>
            </Link>
          </div>

          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full space-x-1">
                <Menu />
                {/* <img
                  // src={userProfile?.image || UserIcon}
                  src={userProfile?.image || loggedInUserIcon}
                  alt="User"
                  className="max-w-full"
                /> */}

                {userProfile ? (
                  <img
                    src={userProfile?.image || loggedInUserIcon}
                    alt="User"
                    className="max-w-full"
                  />
                ) : (
                  <img
                    // src={userProfile?.image || UserIcon}
                    src={userProfile?.image || UserIcon}
                    alt="User"
                    className="max-w-full"
                  />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="py-10 min-w-max sm:max-w-lg px-5">
              <NavigationMenuSheetContent
                setIsSheetOpen={setIsSheetOpen}
                userProfile={userProfile}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavigationMenuSheetContent({
  setIsSheetOpen,
  userProfile,
}: {
  setIsSheetOpen: (open: boolean) => void;
  userProfile: TUserProfile;
}) {
  const [currentCategory, setCurrentCategory] = useState<CategoryProps | null>(
    null
  );

  const { t, i18n } = useTranslation(["common", "navigation"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "fr", name: "Français" },
    { code: "ar", name: "العربية" },
  ];

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logout Successful");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="w-full h-screen min-w-max flex flex-col gap-2 relative overflow-hidden">
      <div
        className={cn(
          "w-full min-w-max absolute transition-transform ease-in-out duration-150",
          currentCategory ? "translate-x-[-110%]" : "translate-x-0"
        )}
      >
        {userProfile ? (
          <SheetHeader onClick={() => setIsSheetOpen(false)}>
            <div className="flex justify-between items-center p-2 rounded-md hover:bg-slate-100">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-3 items-center cursor-pointer">
                    {/* <img
                      src={userProfile.image || UserIcon}
                      alt="User"
                      className="w-8 h-8 rounded-full"
                    /> */}
                    {userProfile ? (
                      <img
                        src={userProfile?.image || loggedInUserIcon}
                        alt="User"
                        className="max-w-full"
                      />
                    ) : (
                      <img
                        // src={userProfile?.image || UserIcon}
                        src={userProfile?.image || UserIcon}
                        alt="User"
                        className="max-w-full"
                      />
                    )}
                    <div className="flex flex-col">
                      <span className="font-medium text-sm">
                        {userProfile.surname}
                      </span>
                      <span className="font-light text-xs">
                        {userProfile.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">
                      <Button
                        size="md"
                        className="w-full rounded-md cursor-pointer"
                      >
                        Profile
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/provider">
                      <Button
                        size="md"
                        className="w-full rounded-md cursor-pointer"
                      >
                        Provider Panel
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login" onClick={handleLogOut}>
                      <Button
                        variant="destructive"
                        size="md"
                        className="w-full rounded-md cursor-pointer"
                      >
                        Logout
                      </Button>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ✅ OUTSIDE THE TRIGGER */}
              <Link to="/switch-account">
                <h3 className="font-medium text-blue-500 hover:underline">
                  Change User
                </h3>
              </Link>
            </div>
          </SheetHeader>
        ) : (
          <SheetHeader onClick={() => setIsSheetOpen(false)}>
            <Link to="/login">
              <div className="flex gap-3 items-center transition-all duration-300 cursor-pointer hover:bg-slate-100 mb-2 py-4 px-2 rounded-md">
                <img src={UserIcon} alt="User" className="max-w-full" />
                <SheetTitle className="font-medium text-base">
                  {t("login")}
                </SheetTitle>
              </div>
            </Link>
          </SheetHeader>
        )}

        {/* <Separator className="bg-slate-200" /> */}

        {/* Language Switcher for Mobile */}
        {/* <div className="flex flex-col gap-2 py-2">
          <span className="text-sm font-medium text-gray-600">
            {t("navigation.language")}
          </span>
          <Select
            value={i18n.language}
            onValueChange={(e) => changeLanguage(e)}
          >
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {languages.map((language) => (
                  <SelectItem value={language.code} key={language.code}>
                    {language.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div> */}

        <Separator className="bg-slate-200" />

        {userProfile ? (
          <div className="flex flex-col items-center mt-2">
            <Link
              to="/"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
            >
              {t("home")}
            </Link>
            <Link
              to="/post-job"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
              onClick={() => setIsSheetOpen(false)}
            >
              {t("post-job")}
            </Link>
            <Link
              to="/profile"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
              onClick={() => setIsSheetOpen(false)}
            >
              {t("profile")}
            </Link>

            <Link
              to="/my-post"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
              onClick={() => setIsSheetOpen(false)}
            >
              {t("my-jobs")}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-2">
            <Link
              to="/post-job"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
              onClick={() => setIsSheetOpen(false)}
            >
              {t("post-job")}
            </Link>

            <Link
              to="/"
              className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-2 px-2 rounded-md"
              onClick={() => setIsSheetOpen(false)}
            >
              {t("register-company")}
            </Link>
          </div>
        )}

        <Separator className="bg-slate-200" />

        <div className="py-5 space-y-2">
          <div className="flex flex-col gap-1">
            <Link to="/categories" onClick={() => setIsSheetOpen(false)}>
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
                onClick={() => setCurrentCategory(category)}
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

        <div className="py-5 flex flex-col gap-1">
          <Link
            to="/company-search"
            className="w-full flex items-center justify-between font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            Company search
            <ChevronRight
              size={16}
              className="text-primary pointer-events-none"
            />
          </Link>
          <Link
            to="/"
            className="w-full flex items-center justify-between font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            Message
            <ChevronRight
              size={16}
              className="text-primary pointer-events-none"
            />
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "w-full min-w-max absolute transition-transform ease-in-out duration-150",
          currentCategory ? "translate-x-0" : "translate-x-[110%]"
        )}
      >
        <SheetHeader>
          <div className="w-full py-2">
            <Button
              variant="link"
              className="text-primary hover:text-primaryDark font-semibold px-0"
              onClick={() => setCurrentCategory(null)}
            >
              <ChevronLeft
                size={16}
                className="text-primary pointer-events-none"
              />
              Menu
            </Button>
          </div>
        </SheetHeader>

        <Separator className="bg-slate-200" />

        <div className="pt-5 space-y-5">
          {currentCategory && (
            <div className="flex flex-col gap-1">
              <Link
                to={currentCategory.url}
                className="w-full flex items-center justify-between font-semibold text-xl transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md min-w-max"
                onClick={() => setIsSheetOpen(false)}
              >
                {currentCategory.name}
                <ChevronRight
                  size={16}
                  className="text-primary pointer-events-none"
                />
              </Link>
            </div>
          )}

          <ScrollArea className="h-[75vh] w-full">
            <div className="w-full flex flex-col gap-1">
              {currentCategory &&
                currentCategory?.subcategories?.map(
                  (subCategoryItem, index) => (
                    <Link
                      key={index}
                      to={subCategoryItem.url}
                      className="w-full font-medium text-sm whitespace-normal break-words transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
                      onClick={() => {
                        setCurrentCategory(subCategoryItem);
                        setIsSheetOpen(false);
                      }}
                    >
                      {subCategoryItem.name}
                    </Link>
                  )
                )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
