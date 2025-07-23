import HeroBanner from "@/assets/images/hero-banner.png";
import HeroBanner2 from "@/assets/images/LogoIcon.svg";
import Logo from "@/assets/images/logo-black.svg";
import SquaresImg from "@/assets/images/squares.svg";
import { categories } from "@/components/common/Header";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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

const jobSuggestions = [
  "Plumber",
  "Electrician",
  "Painter",
  "Locksmith",
  "Handyman",
  "Marketing Specialist",
  "Project Manager",
  "Business Analyst",
  "Graphic Designer",
];
 

export default function Hero() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredJobs = search
    ? jobSuggestions.filter((job) =>
        job.toLowerCase().includes(search.toLowerCase())
      )
    : [];
  // md:py-24 lg:py-32
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
          <div className="relative w-full max-w-xl mx-auto">
            <Input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setIsDropdownOpen(true);
              }}
              placeholder="Hva trenger du hjelp til?"
              className="h-12 pr-10 pl-4 shadow-md rounded-lg"
            />

            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer">
              <ArrowRight />
            </div>

            {search && isDropdownOpen && filteredJobs.length > 0 && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
                <Command className="w-full">
                  <CommandList className="max-h-[400px] overflow-y-auto">
                    {filteredJobs.map((job) => (
                      <CommandItem
                        key={job}
                        value={job}
                        onSelect={() => {
                          setSearch(job); // keep this if you want selected item shown
                          setSelected(job);
                          setIsDropdownOpen(false); // close dropdown
                        }}
                      >
                        {job}
                      </CommandItem>
                    ))}
                  </CommandList>
                </Command>
              </div>
            )}
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 py-6 items-start">
            {categories.map((category, index) => (
              <Link to={category.url} key={index}>
                <div className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
                  <img
                    src={category.img}
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
                  src={SquaresImg}
                  alt={"All categories"}
                  className="max-w-full"
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
