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
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import CategoryExteriorIcon from "@/assets/images/CategoryExteriorIcon.svg";
import GuardImg from "@/assets/images/guard.svg";
import HomeImg from "@/assets/images/home.svg";
import IndoorRenovationImg from "@/assets/images/IndoorRenovationImg.svg";
// import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
import CategoryConstruction from "@/assets/images/CategoryConstruction.svg";
import CategoryHomeIcon from "@/assets/images/CategoryHomeService.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";
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
// import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";

export interface CategoryProps {
  name: string;
  id: number
  url: string;
  img?: string;
  subcategories?: CategoryProps[];
}

export const categories = [
  {
    name: "Trades & Specialized Crafts",
    id: 1,
    url: "/trades",
    description:
      "Skilled craftsmanship experts for all your specialist needs. From plumbing and wiring to stunning traditional Moroccan plasterwork and bespoke iron details.",
    img: TradesToolsImg,
    subcategories: [
      { name: "Electrician", url: "/trades/electrician" },
      { name: "Plumber", url: "/trades/plumber" },
      { name: "Carpenter/Joiner", url: "/trades/carpenter" },
      { name: "Roofer", url: "/trades/roofer" },
      { name: "Painter", url: "/trades/painter" },
      { name: "Tiler", url: "/trades/tiler" },
      { name: "Locksmith", url: "/trades/locksmith" },
      { name: "Sheet Metal Specialist", url: "/trades/specialist" },
      { name: "Handyman", url: "/trades/handyman" },
      { name: "Excavation", url: "/trades/excavation" },
      { name: "Mason", url: "/trades/mason" },
      { name: "Traditional Plaster & Zellige", url: "/trades/plaster" },
      { name: "Concrete Walls", url: "/trades/concrete" },
      { name: "Ironwork", url: "/trades/ironwork" },
    ],
  },

  {
    name: "Exterior & Garden",
    id: 2,
    url: "/exterior-garden",
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
        name: "Paving",
        url: "/exterior-garden/paving",
      },
      {
        name: "Asphalting",
        url: "/exterior-garden/asphalting",
      },
      {
        name: "Pergolas",
        url: "/exterior-garden/pergolas",
      },
      {
        name: "Fence & Gate",
        url: "/exterior-garden/fence-gate",
      },
      {
        name: "Gardening",
        url: "/exterior-garden/gardening",
      },
      {
        name: "Roof Repair",
        url: "/exterior-garden/roof-repair",
      },
      {
        name: "Chimney Repair",
        url: "/exterior-garden/chimney-repair",
      },
      {
        name: "Demolition",
        url: "/exterior-garden/demolition",
      },
      {
        name: "Water & Drainage",
        url: "/exterior-garden/water-drainage",
      },
      {
        name: "Solar Heater & AC Installation",
        url: "/exterior-garden/solar-heater-ac-installation",
      },
      {
        name: "Waterproofing",
        url: "/exterior-garden/waterproofing",
      },
      {
        name: "Facade & Painting",
        url: "/exterior-garden/facade-painting",
      },
      {
        name: "Groundwork",
        url: "/exterior-garden/groundwork",
      },
      {
        name: "Garden & Landscaping",
        url: "/exterior-garden/garden-landscaping",
      },
      {
        name: "Masonry & Concrete Work",
        url: "/exterior-garden/masonry-concrete-work",
      },
      {
        name: "Deck & Patio",
        url: "/exterior-garden/deck-patio",
      },
      {
        name: "Tree Care",
        url: "/exterior-garden/tree-care",
      },
      { name: "Window & Doors", url: "/exterior-garden/window-doors" },
      {
        name: "Terrace Shade",
        url: "/exterior-garden/terrace-shade",
      },
      {
        name: "Water Tanks",
        url: "/exterior-garden/water-tanks",
      },
    ],
  },

  {
    name: "New Construction & Permits",
    id: 3,
    url: "/new-construction-permits",
    description:
      "Planning a new build? From architectural design and permits to full construction and property registration—find trusted experts to realize your dream home from the ground up.",
    img: CategoryConstruction,

    subcategories: [
      {
        name: "Architect",
        url: "/new-construction-permits/architect",
      },
      {
        name: "Building",
        url: "/new-construction-permits/building",
      },

      {
        name: "Contractor",
        url: "/new-construction-permits/contractor",
      },
      {
        name: "Project Manager",
        url: "/new-construction-permits/project-manager",
      },
      {
        name: "Structural Engineer",
        url: "/new-construction-permits/structural-engineer",
      },
      {
        name: "Full Renovation",
        url: "/new-construction-permits/full-renovation",
      },
      {
        name: "Garage/House/Hut/Extension/Add-on",
        url: "/new-construction-permits/garage-house",
      },
      {
        name: "Permit Support & Legalization",
        url: "/new-construction-permits/permit-support-legalization",
      },
      {
        name: " Property Documentation",
        url: "/new-construction-permits/property-documentation",
      },
      {
        name: "Land Surveying",
        url: "/new-construction-permits/land-surveying",
      },
    ],
  },

  {
    name: "Indoor Renovation",
    id: 4,
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
      {
        name: "Interior Architect",
        url: "/indoor-renovation/interior-architect",
      },

      {
        name: "Waterproofing",
        url: "/indoor-renovation/waterproofing",
      },
      {
        name: "Microcement",
        url: "/indoor-renovation/microcement",
      },
      {
        name: "Tiling",
        url: "/indoor-renovation/tiling",
      },
      {
        name: "Painting & Wallpapering",
        url: "/indoor-renovation/painting-wallpapering",
      },
      {
        name: "Fireplace/Stove Installation",
        url: "/indoor-renovation/fireplace-stove-installation",
      },
      {
        name: "Concrete Floor Breaking",
        url: "/indoor-renovation/concrete-floor-breaking",
      },
    ],
  },

  {
    name: " Home Services & Installations",
    id: 5,
    url: "/home-services-installations",
    description:
      "Support services that keep your home running smoothly. From security systems and cleaning, to EV chargers, pest control and moving help.",
    img: CategoryHomeIcon,

    subcategories: [
      {
        name: "Alarm & Security",
        url: "/home-services-installations/alarm-security",
      },
      {
        name: "Waste Disposal",
        url: "/home-services-installations/waste-disposal",
      },

      {
        name: "Car Services",
        url: "/home-services-installations/car-services",
      },
      {
        name: "EV Charger Install",
        url: "/home-services-installations/ev-charger-install",
      },

      {
        name: "Cleaning & Move-Out Services",
        url: "/home-services-installations/cleaning-move-out-services",
      },
      {
        name: "Pest Control",
        url: "/home-services-installations/pest-control",
      },

      {
        name: "Appliance Install & Assembly",
        url: "/home-services-installations/appliance-install-assembly",
      },
      {
        name: "Mechanical Workshops",
        url: "/home-services-installations/mechanical-workshops",
      },

      {
        name: "Sun Shading & Blinds",
        url: "/home-services-installations/sun-shading-blinds",
      },
      {
        name: "Surveyor/Valuation",
        url: "/home-services-installations/surveyor-valuation",
      },

      {
        name: "Transport & Equipment Rental",
        url: "/home-services-installations/transport-equipment-rental",
      },
      {
        name: "Solar Panels",
        url: "/home-services-installations/solar-panels",
      },
    ],
  },
];

export default function Header() {
  const location = useLocation();
  const languages = ["English", "Français", "العربية"];
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

  if (isUserProfileLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
        <span className="ml-3 text-gray-600">Loading data...</span>
      </div>
    );
  }

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
              value={currentLanguage}
              onValueChange={(e) => setCurrentLanguage(e)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languages.map((language) => (
                    <SelectItem value={language} key={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Link
              to="/register-company"
              className="hover:underline transition-all duration-300"
            >
              Register company
            </Link>

            <Link to="/post-job">
              <Button>Post a job</Button>
            </Link>
          </div>

          <Sheet onOpenChange={setIsSheetOpen} open={isSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="rounded-full space-x-1">
                <Menu />
                <img
                  src={userProfile?.image || UserIcon}
                  alt="User"
                  className="max-w-full"
                />
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex gap-3 items-center cursor-pointer p-2 rounded-md hover:bg-slate-100">
                  <img
                    src={userProfile.image || UserIcon}
                    alt="User"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium">{userProfile.surname}</span>
                  <span className="font-medium">{userProfile.email}</span>
                </div>
              </DropdownMenuTrigger>

              {/* Align dropdown to start (left) */}
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
                      Provider Panel{" "}
                    </Button>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={"/login"}>
                    <Button
                      variant="destructive"
                      size="md"
                      className="w-full rounded-md cursor-pointer"
                      onClick={handleLogOut}
                    >
                      Logout
                    </Button>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SheetHeader>
        ) : (
          <SheetHeader onClick={() => setIsSheetOpen(false)}>
            <Link to="/login">
              <div className="flex gap-3 items-center transition-all duration-300 cursor-pointer hover:bg-slate-100 mb-2 py-4 px-2 rounded-md">
                <img src={UserIcon} alt="User" className="max-w-full" />
                <SheetTitle className="font-medium text-base">
                  Log in
                </SheetTitle>
              </div>
            </Link>
          </SheetHeader>
        )}

        <Separator className="bg-slate-200" />

        <div className="flex gap-1 flex-col items-center mt-2">
          <Link
            to="/post-job"
            className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            Post a job
          </Link>

          <Link
            to="/"
            className="w-full text-primary font-semibold transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            Register your business
          </Link>
        </div>

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
            to="/my-post"
            className="w-full flex items-center justify-between font-medium text-sm transition-all duration-300 cursor-pointer hover:bg-slate-100 py-3 px-2 rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            My Post
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
