import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./Header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Hammer, MapPin } from "lucide-react";

const locations = [
  "San Francisco, CA",
  "Los Angeles, CA",
  "New York, NY",
  "Austin, TX",
  "Seattle, WA",
  "Miami, FL",
  "Chicago, IL",
  "Denver, CO",
  "more locations",
  "Morocco - Casablanca",
  "Morocco - Rabat",
];

export default function BusinessSearchWithLocation() {
  const navigate = useNavigate();

  // Flatten categories for autocomplete
  const allSubcategories = useMemo(() => {
    return categories.flatMap((category) =>
      category.subcategories.map((sub) => ({
        name: sub.name,
        url: sub.url,
      }))
    );
  }, []);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  // Dropdown states
  const [isJobDropdownOpen, setIsJobDropdownOpen] = useState(false);
  const [isLocDropdownOpen, setIsLocDropdownOpen] = useState(false);

  // Highlight indexes
  const [highlightedJobIndex, setHighlightedJobIndex] = useState(0);
  const [highlightedLocIndex, setHighlightedLocIndex] = useState(0);

  const filteredJobs = search
    ? allSubcategories.filter((job) =>
        job.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  const filteredLocations = location
    ? locations.filter((loc) =>
        loc.toLowerCase().includes(location.toLowerCase())
      )
    : [];

  // Job input keyboard handler
  const handleJobKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedJobIndex((prev) =>
        Math.min(prev + 1, filteredJobs.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedJobIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filteredJobs.length > 0) {
      e.preventDefault();
      const selectedJob = filteredJobs[highlightedJobIndex];
      setSearch(selectedJob.name); // ✅ update input with selected value
      setIsJobDropdownOpen(false);
      handleSubmit(selectedJob.name, location);
    } else if (e.key === "Escape") {
      setIsJobDropdownOpen(false);
    }
  };

  // Location input keyboard handler
  const handleLocKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedLocIndex((prev) =>
        Math.min(prev + 1, filteredLocations.length - 1)
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedLocIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && filteredLocations.length > 0) {
      e.preventDefault();
      const selectedLoc = filteredLocations[highlightedLocIndex];
      setLocation(selectedLoc); // ✅ update input with selected value
      setIsLocDropdownOpen(false);
      handleSubmit(search, selectedLoc);
    } else if (e.key === "Escape") {
      setIsLocDropdownOpen(false);
    }
  };

  const handleSubmit = async (jobName?: string, locName?: string) => {
    const job = jobName || search;
    const loc = locName || location;
    console.log("Searching for:", job, loc);

    // 🔥 Example: call backend
    // try {
    //   const res = await fetch(
    //     `/api/search-business?job=${encodeURIComponent(
    //       job
    //     )}&location=${encodeURIComponent(loc)}`
    //   );
    //   const data = await res.json();
    //   navigate("/results", { state: { job, location: loc, data } });
    // } catch (err) {
    //   console.error("Error searching business:", err);
    // }
  };

  return (
    <div className="w-full grid grid-cols-5 gap-4 rounded-lg my-4 p-3 relative z-10">
      {/* Job input with dropdown */}
      <div className="col-span-5 lg:col-span-2 w-full relative">
        <Hammer
          className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
          size={20}
        />
        <Input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsJobDropdownOpen(true);
            setHighlightedJobIndex(0);
          }}
          onKeyDown={handleJobKeyDown}
          placeholder="What do you need help with?"
          className="bg-white w-full pl-14 lg:h-16 border border-black placeholder:text-sm"
        />

        {search && isJobDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
            <Command className="w-full">
              <CommandList className="max-h-[300px] overflow-y-auto">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job, index) => (
                    <CommandItem
                      key={job.url}
                      value={job.name}
                      onSelect={() => {
                        setSearch(job.name);

                        setIsJobDropdownOpen(false);
                        handleSubmit(job.name, location);
                      }}
                      className={`cursor-pointer px-4 py-2 ${
                        index === highlightedJobIndex
                          ? "bg-indigo-100 text-indigo-800"
                          : ""
                      }`}
                    >
                      {job.name}
                    </CommandItem>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No matches found
                  </div>
                )}
              </CommandList>
            </Command>
          </div>
        )}
      </div>

      {/* Location input with dropdown */}
      <div className="col-span-5 lg:col-span-3 w-full relative flex flex-col lg:flex-row items-center gap-2">
        <MapPin
          className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
          size={20}
        />
        <Input
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setIsLocDropdownOpen(true);
            setHighlightedLocIndex(0);
          }}
          onKeyDown={handleLocKeyDown}
          placeholder="Where will the job be done?"
          className="bg-white w-full lg:h-16 pl-14 pr-20 border border-black placeholder:text-sm"
        />

        {location && isLocDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
            <Command className="w-full">
              <CommandList className="max-h-[300px] overflow-y-auto">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc, index) => (
                    <CommandItem
                      key={loc}
                      value={loc}
                      onSelect={() => {
                        setLocation(loc);
                        setIsLocDropdownOpen(false);
                        handleSubmit(search, loc);
                      }}
                      className={`cursor-pointer px-4 py-2 ${
                        index === highlightedLocIndex
                          ? "bg-indigo-100 text-indigo-800"
                          : ""
                      }`}
                    >
                      {loc}
                    </CommandItem>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500">
                    No matches found
                  </div>
                )}
              </CommandList>
            </Command>
          </div>
        )}

        {/* Desktop Button */}
        <Button
          onClick={() => handleSubmit()}
          className="lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2 xl:w-60 mt-3 lg:mt-0 hidden lg:block lg:h-12"
        >
          Find a company
        </Button>
      </div>

      {/* Mobile Button */}
      <div className="w-full col-span-5 block lg:hidden">
        <Button
          onClick={() => handleSubmit()}
          className="w-full text-base lg:h-12"
        >
          Find a company
        </Button>
      </div>
    </div>
  );
}

// import { useMemo, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { categories } from "./Header";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Command, CommandItem, CommandList } from "@/components/ui/command";
// import { Hammer, MapPin, ArrowRight } from "lucide-react";

// const location = [
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "San Francisco, CA",
//   "more locations",
//   "morroco more locations",
// ];

// export default function BusinessSearchWithLocation() {
//   const navigate = useNavigate();

//   // Flatten categories for autocomplete
//   const allSubcategories = useMemo(() => {
//     return categories.flatMap((category) =>
//       category.subcategories.map((sub) => ({
//         name: sub.name,
//         url: sub.url,
//       }))
//     );
//   }, []);

//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [highlightedIndex, setHighlightedIndex] = useState(0);

//   const filteredJobs = search
//     ? allSubcategories.filter((job) =>
//         job.name.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "ArrowDown") {
//       setHighlightedIndex((prev) =>
//         Math.min(prev + 1, filteredJobs.length - 1)
//       );
//     } else if (e.key === "ArrowUp") {
//       setHighlightedIndex((prev) => Math.max(prev - 1, 0));
//     } else if (e.key === "Enter" && filteredJobs.length > 0) {
//       handleSubmit(filteredJobs[highlightedIndex].name);
//     } else if (e.key === "Escape") {
//       setIsDropdownOpen(false);
//     }
//   };

//   const handleSubmit = async (jobName?: string) => {
//     const job = jobName || search;
//     console.log("Searching for:", job, location);

//     // 🔥 Call backend API with job + location
//     // try {
//     //   const res = await fetch(
//     //     `/api/search-business?job=${encodeURIComponent(
//     //       job
//     //     )}&location=${encodeURIComponent(location)}`
//     //   );
//     //   const data = await res.json();

//     //   // Example: navigate to results page
//     //   navigate("/results", { state: { job, location, data } });
//     // } catch (err) {
//     //   console.error("Error searching business:", err);
//     // }
//   };

//   return (

//       <div className="w-full grid grid-cols-5 gap-4 rounded-lg my-4 p-3 relative z-10">
//         {/* Job input with dropdown */}
//         <div className="col-span-5 lg:col-span-2 w-full relative">
//           <Hammer
//             className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
//             size={20}
//           />
//           <Input
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//               setIsDropdownOpen(true);
//               setHighlightedIndex(0);
//             }}
//             onKeyDown={handleKeyDown}
//             placeholder="What do you need help with?"
//             className="bg-white w-full pl-14 lg:h-16 border border-black placeholder:text-sm"
//           />

//           {/* Dropdown */}
//           {search && isDropdownOpen && (
//             <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
//               <Command className="w-full">
//                 <CommandList className="max-h-[300px] overflow-y-auto">
//                   {filteredJobs.length > 0 ? (
//                     filteredJobs.map((job, index) => (
//                       <CommandItem
//                         key={job.url}
//                         value={job.name}
//                         onSelect={() => {
//                           setSearch(job.name);
//                           setIsDropdownOpen(false);
//                           handleSubmit(job.name);
//                         }}
//                         className={`cursor-pointer px-4 py-2 ${
//                           index === highlightedIndex
//                             ? "bg-indigo-100 text-indigo-800"
//                             : ""
//                         }`}
//                       >
//                         {job.name}
//                       </CommandItem>
//                     ))
//                   ) : (
//                     <div className="px-4 py-2 text-gray-500">
//                       No matches found
//                     </div>
//                   )}
//                 </CommandList>
//               </Command>
//             </div>
//           )}
//         </div>

//         {/* Location input + button */}
//         <div className="col-span-5 lg:col-span-3 w-full relative flex flex-col lg:flex-row items-center gap-2">
//           <MapPin
//             className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
//             size={20}
//           />
//           <Input
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             placeholder="Where will the job be done?"
//             className="bg-white w-full lg:h-16 pl-14 pr-20 border border-black placeholder:text-sm"
//           />
//           <Button
//             onClick={() => handleSubmit()}
//             className="lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2 xl:w-60 mt-3 lg:mt-0 hidden lg:block lg:h-12"
//           >
//             Find a company
//           </Button>
//         </div>

//         {/* Mobile button */}
//         <div className="w-full col-span-5 block lg:hidden">
//           <Button
//             onClick={() => handleSubmit()}
//             className="w-full text-base lg:h-12"
//           >
//             Find a company
//           </Button>
//         </div>
//       </div>

//   );
// }

// import { useNavigate } from "react-router-dom";
// import { categories } from "./Header";
// import { useMemo, useState } from "react";
// import { Command, CommandItem, CommandList } from "@/components/ui/command";
// import { ArrowRight } from "lucide-react";
// import { Input } from "../ui/input";

// export default function BusinessSearchWithLocation() {
//   const navigate = useNavigate();
//   // Flatten all subcategories into one array
//   const allSubcategories = useMemo(() => {
//     return categories.flatMap((category) =>
//       category.subcategories.map((sub) => ({
//         name: sub.name,
//         url: sub.url,
//       }))
//     );
//   }, []);

//   const [search, setSearch] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [highlightedIndex, setHighlightedIndex] = useState(0);

//   const filteredJobs = search
//     ? allSubcategories.filter((job) =>
//         job.name.toLowerCase().includes(search.toLowerCase())
//       )
//     : [];

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "ArrowDown") {
//       setHighlightedIndex((prev) =>
//         Math.min(prev + 1, filteredJobs.length - 1)
//       );
//     } else if (e.key === "ArrowUp") {
//       setHighlightedIndex((prev) => Math.max(prev - 1, 0));
//     } else if (e.key === "Enter" && filteredJobs.length > 0) {
//       navigate(filteredJobs[highlightedIndex].url);
//       setIsDropdownOpen(false);
//     } else if (e.key === "Escape") {
//       setIsDropdownOpen(false);
//     }
//   };

//   const handleSubmit = () => {
//     if (filteredJobs.length > 0) {
//       navigate(filteredJobs[highlightedIndex].url);
//     }
//   };

//   return (
//     <div className="relative w-full max-w-xl mx-auto">
//       <Input
//         type="text"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//           setIsDropdownOpen(true);
//           setHighlightedIndex(0);
//         }}
//         onKeyDown={handleKeyDown}
//         placeholder="Hva trenger du hjelp til?"
//         className="md:h-12 pr-10 pl-4 shadow-md rounded-lg"
//       />

//       <div
//         // className="absolute top-1/2 right-3 -translate-y-1/2 text-primary cursor-pointer"
//         className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2"
//         onClick={handleSubmit}
//       >
//         <ArrowRight />
//       </div>

//       {search && isDropdownOpen && filteredJobs.length > 0 && (
//         <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50">
//           <Command className="w-full">
//             <CommandList className="max-h-[300px] overflow-y-auto">
//               {filteredJobs.map((job, index) => (
//                 <CommandItem
//                   key={job.url}
//                   value={job.name}
//                   onSelect={() => {
//                     navigate(job.url);
//                     setIsDropdownOpen(false);
//                   }}
//                   className={`cursor-pointer px-4 py-2 ${
//                     index === highlightedIndex
//                       ? "bg-indigo-100 text-indigo-800"
//                       : ""
//                   }`}
//                 >
//                   {job.name}
//                 </CommandItem>
//               ))}
//             </CommandList>
//           </Command>
//         </div>
//       )}

//       {search && isDropdownOpen && filteredJobs.length === 0 && (
//         <div className="absolute top-full left-0 mt-1 w-full bg-white border rounded-lg shadow-md z-50 text-gray-500 px-4 py-2">
//           No matches found
//         </div>
//       )}
//     </div>
//   );
// }
