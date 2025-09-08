import { useNavigate } from "react-router-dom";
import { categories } from "./Header";
import { useMemo, useState } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";

export default function WhatNeedSearch() {
  const navigate = useNavigate();
  // Flatten all subcategories into one array
  const allSubcategories = useMemo(() => {
    return categories.flatMap((category) =>
      category.subcategories.map((sub) => ({
        name: sub.name,
        url: sub.url,
      }))
    );
  }, []);

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const filteredJobs = search
    ? allSubcategories.filter((job) =>
        job.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredJobs.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filteredJobs.length > 0) {
      navigate(filteredJobs[highlightedIndex].url);
      setIsDropdownOpen(false);
    } else if (e.key === "Escape") {
      setIsDropdownOpen(false);
    }
  };

  const handleSubmit = () => {
    if (filteredJobs.length > 0) {
      navigate(filteredJobs[highlightedIndex].url);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
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
        className="md:h-12 lg:h-14 pr-10 pl-4 shadow-md rounded-lg"
      />

      <div
        // className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer"
        className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2"
        onClick={handleSubmit}
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
    </div>
  );
}
