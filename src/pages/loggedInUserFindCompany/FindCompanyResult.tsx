import BusinessSearchWithLocation from "@/components/common/BusinessSearchWithLocation";
import ArrowDownRoundedImg from "@/assets/images/arrow-down-rounded.svg";
import SearchCompanyLogo from "@/assets/images/SearchCompanyLogo.svg";
import React from "react";
import BusinessCard from "./BusinessCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const businessData = [
  {
    id: 1,
    logo: SearchCompanyLogo,
    name: "HERRINGBONE PARQUET AS",
    rating: 4.7,
    reviewsCount: 677,
    referencesUrl: "#",
    respondsQuickly: true,
    chosenBy: 1059,
    description:
      "FISKEBEINPARKETT AS offers services in the category: Windows and doors in Fyresdal",
    reviewer: {
      name: "Alexander",
      date: "Aug 22",
      comment: "Very well done sanding of wooden floors, left like new.",
    },
  },
  {
    id: 2,
    logo: SearchCompanyLogo,
    name: "NORDIC BUILDERS AS",
    rating: 4.5,
    reviewsCount: 432,
    referencesUrl: "#",
    respondsQuickly: false,
    chosenBy: 820,
    description:
      "NORDIC BUILDERS provides renovation and construction services across Oslo.",
    reviewer: {
      name: "Maria",
      date: "Sep 2",
      comment: "Quick service and very professional team. Highly recommended!",
    },
  },
  {
    id: 3,
    logo: SearchCompanyLogo,
    name: "GREEN GARDEN SOLUTIONS",
    rating: 4.9,
    reviewsCount: 120,
    referencesUrl: "#",
    respondsQuickly: true,
    chosenBy: 300,
    description:
      "Expert gardening and landscaping solutions, specializing in eco-friendly designs.",
    reviewer: {
      name: "Jonas",
      date: "Aug 30",
      comment: "Transformed my backyard into a beautiful garden. Love it!",
    },
  },
  {
    id: 4,
    logo: SearchCompanyLogo,
    name: "CITY CLEAN SERVICES",
    rating: 4.3,
    reviewsCount: 215,
    referencesUrl: "#",
    respondsQuickly: true,
    chosenBy: 640,
    description:
      "CITY CLEAN specializes in residential and commercial cleaning services in Bergen.",
    reviewer: {
      name: "Emma",
      date: "Jul 19",
      comment: "Reliable and efficient. My office looks spotless every week.",
    },
  },
];

export default function FindCompanyResult() {
  return (
    <section className="py-8 md:py-12 lg:py-16 container">
      <div className=" bg-liquidGreen rounded-md p-2 md:p-5 relative">
        <div className="flex flex-col gap-3 py-8 px-2 relative z-10 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h3 className="font-bold text-primaryDark text-4xl">
            Find companies in Morocco
          </h3>

          <img
            src={ArrowDownRoundedImg}
            alt="arrow-down"
            className=" max-w-[15%] hidden lg:block md:max-w-full absolute top-[25%] -right-6 -translate-y-[20%] md:top-[20%] md:right-16 md:-translate-y-[25%] z-0"
          />

          <BusinessSearchWithLocation />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-primaryDark text-lg mt-12 mb-6">
          41 companies match your search
        </h3>
        <div className="flex items-center space-x-4">
          <span className="text-primaryDark">Sort by:</span>
          <Select>
            <SelectTrigger className="w-[220px] lg:h-12 focus:ring-0">
              <SelectValue placeholder="Most relevant" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort Options</SelectLabel>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="reviews">Reviews (high to low)</SelectItem>
                <SelectItem value="topRated">Top rated</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 ">
        {businessData.map((business, index) => (
          <BusinessCard key={index} {...business} />
        ))}
      </div>
    </section>
  );
}
