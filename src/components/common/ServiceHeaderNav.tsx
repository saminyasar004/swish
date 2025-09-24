import Logo from "@/assets/images/logo-black.svg";
import LogoSmallScreen from "@/assets/images/LogoSmallScreen.svg";
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
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Home,
  HomeIcon,
  Menu,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import GardenCoconutTreeImg from "@/assets/images/garden-coconut-tree.svg";
import IndoorRenovationImg from "@/assets/images/indoor-renovation.svg";
import TradesToolsImg from "@/assets/images/trades-tools.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import messageIcon from "@/assets/images/MessageIcon.svg";
import jobIconActive from "@/assets/images/JobIcon.svg";
import jobIcon from "@/assets/images/JobIconActive.svg";
import messageIconActive from "@/assets/images/MessageIconActive.svg";
import businessIcon from "@/assets/images/HomeIcon.svg";
import businessIconActive from "@/assets/images/businessIconActive.svg";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import LogoLight from "@/assets/providerIcon/LogoLight.svg";

import bag from "@/assets/providerIcon/bag.svg"
import home from "@/assets/providerIcon/home.svg"
import message from "@/assets/providerIcon/message.svg"

import bagBlack from "@/assets/providerIcon/bagBlack.svg"
import homeBlack from "@/assets/providerIcon/homeBlack.svg"
import messageBlack from "@/assets/providerIcon/messageBlack.svg"

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

export default function ServiceHeaderNav({ selectedTab, onTabChange }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [isSheetOpen, setIsSheetOpen] = useState(false); // Add state for Sheet

  // Close Sheet and scroll to top on route change
  useEffect(() => {
    setIsSheetOpen(false); // Close Sheet when route changes
    window.scrollTo(0, 0);
  }, [location]);

  const handleTabClick = (tab: string) => {
    if (tab === "working") navigate("/provider");
    else if (tab === "message") navigate("/provider/message");
    else if (tab === "myBusiness") navigate("/provider/my-business");

    onTabChange(tab); // Update parent state
  };

  return (
    <>
      <header className="w-full h-auto bg-providerPrimary py-3 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
        <div className=" mx-6 lg:container lg:mx-auto flex  items-center justify-between gap-4 md:gap-6 text-center">
          {/* Logo */}
          <Link to="/provider" className="block ">
            <img
              src={LogoLight}
              alt="swish.ma"
              className="hidden md:block max-w-[90%] md:max-w-full"
            />
            <img src={LogoSmallScreen} className="block md:hidden w-12 h-12" />
          </Link>

          {/* Navigation Tabs */}
<div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-6">
  {[
    {
      key: "working",
      label: "Working",
      icon: selectedTab === "working" ? bagBlack : bag,
    },
    {
      key: "message",
      label: "Message",
      icon: selectedTab === "message" ? messageBlack : message,
    },
    {
      key: "myBusiness",
      label: "My Business",
      icon: selectedTab === "myBusiness" ? homeBlack : home,
    },
  ].map((tab) => {
    const isActive = selectedTab === tab.key
    return (
      <Button
        key={tab.key}
        onClick={() => handleTabClick(tab.key)}
        variant="outline"
        className={clsx(
          "flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition-all duration-200",
          isActive
            ? "bg-providerWhitePrimary text-providerPrimary border-providerPrimary"
            : "bg-transparent text-providerWhiteSecondary hover:bg-transparent hover:text-slate-50"
        )}
      >
        <img
          src={tab.icon}
          alt={`${tab.label} icon`}
          className="w-5 h-5"
        />
        <span className="hidden md:block">{tab.label}</span>
      </Button>
    )
  })}
</div>


          {/* Profile */}
          <Link to="/provider/my-business/profile">
            <div className="flex items-center gap-2 md:gap-2 lg:gap-3">
              <div className="bg-providerWhitePrimary text-providerAccent rounded-md  py-1.5 px-3 lg:px-4  text-md lg:text-xl font-semibold">
                A
              </div>
              <h1 className="hidden md:block text-lg md:text-lg lg:text-xl font-semibold text-providerWhiteSecondary">
                Ali Mounji
              </h1>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
}

function NavigationMenuSheetContent({
  setIsSheetOpen,
}: {
  setIsSheetOpen: (open: boolean) => void;
}) {
  const [currentCategory, setCurrentCategory] = useState<CategoryProps | null>(
    null
  );

  return (
    <div className="w-full h-screen min-w-max flex flex-col gap-2 relative overflow-hidden">
      <div
        className={cn(
          "w-full min-w-max absolute transition-transform ease-in-out duration-150",
          currentCategory ? "translate-x-[-110%]" : "translate-x-0"
        )}
      >
        <SheetHeader onClick={() => setIsSheetOpen(false)}>
          <Link to="/login">
            <div className="flex gap-3 items-center transition-all duration-300 cursor-pointer hover:bg-slate-100 mb-2 py-4 px-2 rounded-md">
              <img src={UserIcon} alt="User" className="max-w-full" />
              <SheetTitle className="font-medium text-base">Log in</SheetTitle>
            </div>
          </Link>
        </SheetHeader>

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
