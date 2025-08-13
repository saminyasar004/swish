import HeroBanner from "@/assets/images/hero-banner.png";
import HeroBanner2 from "@/assets/images/LogoIcon.svg";
import Logo from "@/assets/images/logo-black.svg";
import SquaresImg from "@/assets/images/squares.svg";
import AllCategoryIcon from "@/assets/images/AllCategoryIcon.svg";
import { categories } from "@/components/common/Header";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useAllCategoryListQuery } from "@/redux/features/users/user.category.api";
import { baseUrl } from "@/redux/api/baseApi";
import WhatNeedSearch from "@/components/common/WhatNeedSearch";

export default function Hero() {
  //  const navigate = useNavigate();
  //  // Flatten all subcategories into one array
  // const allSubcategories = React.useMemo(() => {
  //   return categories.flatMap((category) =>
  //     category.subcategories.map((sub) => ({
  //       name: sub.name,
  //       url: sub.url,
  //     }))
  //   );
  // }, []);

  // const [search, setSearch] = useState("");
  // const [selected, setSelected] = useState("");
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [highlightedIndex, setHighlightedIndex] = useState(0);

  // const filteredJobs = search
  //   ? allSubcategories.filter((job) =>
  //       job.name.toLowerCase().includes(search.toLowerCase())
  //     )
  //   : [];

  // const handleKeyDown = (e: React.KeyboardEvent) => {
  //   console.log(e.key);
  //   if (e.key === "ArrowDown") {
  //     setHighlightedIndex((prevIndex) =>
  //       Math.min(prevIndex + 1, filteredJobs.length - 1)
  //     );
  //   } else if (e.key === "ArrowUp") {
  //     setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  //   } else if (e.key === "Enter") {
  //     setSearch(filteredJobs[highlightedIndex]);
  //     setSelected(filteredJobs[highlightedIndex]);
  //     setIsDropdownOpen(false);
  //   } else if (e.key === "Escape") {
  //     setIsDropdownOpen(false); // Close dropdown on Escape
  //   }
  // };
  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "ArrowDown") {
  //     setHighlightedIndex((prev) =>
  //       Math.min(prev + 1, filteredJobs.length - 1)
  //     );
  //   } else if (e.key === "ArrowUp") {
  //     setHighlightedIndex((prev) => Math.max(prev - 1, 0));
  //   } else if (e.key === "Enter" && filteredJobs.length > 0) {
  //     navigate(filteredJobs[highlightedIndex].url);
  //     setIsDropdownOpen(false);
  //   } else if (e.key === "Escape") {
  //     setIsDropdownOpen(false);
  //   }
  // };

  // if (categoryListLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-[200px]">
  //       <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
  //       <span className="ml-3 text-gray-600">Loading categories...</span>
  //     </div>
  //   );
  // }

  return (
    <section className=" py-16 md:py-24 lg:py-32 bg-liquidGreen">
      <div className="container grid lg:grid-cols-2 gap-4 item-center justify-center">
        <div className="max-w-md flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h1 className="text-5xl text-primaryDark font-semibold">
            Get the job done!
          </h1>
          <p className="font-normal text-sm text-[#404C67]">
            Describe the job and{" "}
            <span className="font-semibold">
              receive offers from skilled professionals.{" "}
            </span>
            Free and non-biding.
          </p>

          {/* <div className="relative w-full">
            <Input
              className="w-full pr-12 shadow-md"
              placeholder="What do you need to help?"
            />
            <div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
              <ArrowRight size={18} />
            </div>
          </div> */}

          {/* <div className="relative w-full max-w-xl mx-auto">
            <Input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsDropdownOpen(true);
              }}
              onKeyDown={handleKeyDown} // Add keydown handler
              placeholder="Hva trenger du hjelp til?"
              className="h-12 pr-10 pl-4 shadow-md rounded-lg"
            />

            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer">
              <ArrowRight />
            </div>

            {search && isDropdownOpen && filteredJobs.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
                <Command className="w-full ">
                  <CommandList className="max-h-[400px] overflow-y-auto">
                    {filteredJobs.map((job, index) => (
                      <CommandItem
                        key={job}
                        value={job}
                        onSelect={() => {
                          setSearch(job); // keep this if you want selected item shown
                          setSelected(job);
                          setIsDropdownOpen(false); // close dropdown
                        }}
                        className={`cursor-pointer px-4 py-2 ${
                          index === highlightedIndex
                            ? "bg-gray-200 text-black"
                            : ""
                        }`}
                      >
                        {job}
                      </CommandItem>
                    ))}
                  </CommandList>
                </Command>
              </div>
            )}
          </div> */}
          {/* <div className="relative w-full max-w-xl mx-auto">
      <Input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsDropdownOpen(true);
          setHighlightedIndex(0);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Hva trenger du hjelp til?"
        className="h-12 pr-10 pl-4 shadow-md rounded-lg"
      />

      <div
        className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer"
        onClick={() => {
          if (filteredJobs.length > 0) {
            navigate(filteredJobs[highlightedIndex].url);
          }
        }}
      >
        <ArrowRight />
      </div>

      {search && isDropdownOpen && filteredJobs.length > 0 && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
          <Command className="w-full">
            <CommandList className="max-h-[300px] overflow-y-auto">
              {filteredJobs.map((job, index) => (
                <CommandItem
                  key={job.url}
                  value={job.name}
                  onSelect={() => {
                    navigate(job.url);
                    setIsDropdownOpen(false);
                  }}
                  className={`cursor-pointer px-4 py-2 ${
                    index === highlightedIndex
                      ? "bg-indigo-100 text-indigo-800"
                      : ""
                  }`}
                >
                  {job.name}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </div>
      )}

      {search && isDropdownOpen && filteredJobs.length === 0 && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50 text-gray-500 px-4 py-2">
          No matches found
        </div>
      )}
    </div> */}
          <WhatNeedSearch />

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start ">
            {categories?.map((category, index) => (
              <Link to={category.url} key={index}>
                <div className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
                  <img
                    // src={`${baseUrl}${category?.category_icon}`}
                    src={`${category?.img}`}
                    alt={category.name}
                    className="w-12"
                  />

                  <p className="font-medium text-sm text-center">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
            <Link to="/categories">
              <div className="w-full flex flex-col  gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
                <img
                  src={AllCategoryIcon}
                  alt={"All categories"}
                  className="w-10 h-10"
                />

                <p className="font-medium text-sm text-center">
                  All categories
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-full h-full  flex items-center justify-start mt-18 ">
          <img
            src={HeroBanner2}
            alt="swish.ma"
            className="w-[1500px] max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
