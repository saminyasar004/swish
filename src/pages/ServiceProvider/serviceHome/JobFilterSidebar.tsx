import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Transition } from "@headlessui/react"; // For smooth transitions

export const JobFilterSidebar = ({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) => {
  // State to control the drawer visibility
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle function for the drawer
  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  return (
    <>
      {/* Hamburger Button for Small Screens */}
      {/* <button
        className="sm:hidden p-2 rounded-md text-white bg-primary"
        onClick={toggleDrawer}
      >
        ☰
      </button> */}

      {/* Drawer Sidebar */}
      <Transition
        show={isDrawerOpen}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="transform translate-x-0"
        leaveTo="transform translate-x-full"
      >
        <aside className="fixed inset-0 sm:w-64 w-full p-4 bg-providerSecondary space-y-6 z-50 sm:relative sm:translate-x-0">
          {/* Close Button */}
          <button
            className="sm:hidden absolute top-4 right-4 text-xl font-bold"
            onClick={toggleDrawer}
          >
            &times;
          </button>

          {/* Search */}
          <div>
            <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-6">
              Search For Jobs
            </h2>

            <div className="relative">
              {/* <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              /> */}
              <Input
                className="w-full lg:pl-10 ring-2 ring-gray-100"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-medium text-sm mb-3">Size</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="size-large" />
                Large (404)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="size-regular" />
                Regular (1647)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="size-small" />
                Small (860)
              </label>
            </div>
          </div>

          {/* Area Filter */}
          <div>
            <h3 className="font-medium text-sm mb-3">Area</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="area-oslo" />
                Oslo (1622)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="area-cove" />
                The Cove (1318)
              </label>
            </div>
            <button className="text-primary text-sm font-semibold mt-3 hover:underline">
              Add Area
            </button>
          </div>

          {/* Work Types */}
          <div>
            <h3 className="font-medium text-sm mb-3">Types of Work</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="type-electrician" />
                Electrician
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-carpenter" />
                Carpenter / Joiner
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-painter" />
                Painter
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-roofer" />
                Roofer
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-mason" />
                Mason
              </label>
            </div>
            <button className="text-primary text-sm font-semibold mt-3 hover:underline">
              Add Work Types
            </button>
          </div>
        </aside>
      </Transition>

      {/* Main Content */}
      <div className="sm:block hidden bg-providerSecondary min-h-full">
        <aside className="w-full  p-4 bg-providerSecondary space-y-6">
          {/* Search */}
          <div>
            <h2 className="font-semibold text-lg md:text-lg lg:text-xl xl:text-2xl mb-4 text-providerBlackTertiary">
              Search For Jobs
            </h2>

            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={16}
              />
              <Input
                className="w-full h-4 md:h-6 lg:h-12  pl-10 ring-2 ring-gray-100"
                placeholder="Search"
              />
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h3 className="font-medium text-sm mb-3">Size</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="size-large" />
                Large (404)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="size-regular" />
                Regular (1647)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="size-small" />
                Small (860)
              </label>
            </div>
          </div>

          {/* Area Filter */}
          <div>
            <h3 className="font-medium text-sm mb-3">Area</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="area-oslo" />
                Oslo (1622)
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="area-cove" />
                The Cove (1318)
              </label>
            </div>
            <button className="text-providerAccent text-sm font-bold mt-3 hover:underline">
              Add Area
            </button>
          </div>

          {/* Work Types */}
          <div>
            <h3 className="font-medium text-sm mb-3">Types of Work</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <label className="flex items-center gap-2">
                <Checkbox id="type-electrician" />
                Electrician
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-carpenter" />
                Carpenter / Joiner
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-painter" />
                Painter
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-roofer" />
                Roofer
              </label>
              <label className="flex items-center gap-2">
                <Checkbox id="type-mason" />
                Mason
              </label>
            </div>
            <button className="text-providerAccent text-sm font-bold mt-3 hover:underline">
              Add Work Types
            </button>
          </div>
        </aside>
      </div>
    </>
  );
};

// // components/JobFilterSidebar.tsx
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";

// export const JobFilterSidebar = () => {
//   return (
//     <aside className="w-full sm:w-64 p-2 bg-white space-y-6">
//       {/* Search */}
//       <div>
//         <h2 className="font-semibold text-lg md:text-xl lg:text-2xl mb-6">
//           Search For Jobs
//         </h2>

//         <div className="relative">
//           <Search
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
//             size={16}
//           />
//           <Input
//             className="w-full pl-10 ring-2 ring-gray-100"
//             placeholder="Search"
//           />
//         </div>
//       </div>

//       {/* Size Filter */}
//       <div>
//         <h3 className="font-medium text-sm mb-3">Size</h3>
//         <div className="space-y-2 text-sm text-muted-foreground">
//           <label className="flex items-center gap-2">
//             <Checkbox id="size-large" />
//             Large (404)
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="size-regular" />
//             Regular (1647)
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="size-small" />
//             Small (860)
//           </label>
//         </div>
//       </div>

//       {/* Area Filter */}
//       <div>
//         <h3 className="font-medium text-sm mb-3">Area</h3>
//         <div className="space-y-2 text-sm text-muted-foreground">
//           <label className="flex items-center gap-2">
//             <Checkbox id="area-oslo" />
//             Oslo (1622)
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="area-cove" />
//             The Cove (1318)
//           </label>
//         </div>
//         <button className="text-primary text-sm font-semibold mt-3 hover:underline">
//           Add Area
//         </button>
//       </div>

//       {/* Work Types */}
//       <div>
//         <h3 className="font-medium text-sm mb-3">Types of Work</h3>
//         <div className="space-y-2 text-sm text-muted-foreground">
//           <label className="flex items-center gap-2">
//             <Checkbox id="type-electrician" />
//             Electrician
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="type-carpenter" />
//             Carpenter / Joiner
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="type-painter" />
//             Painter
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="type-roofer" />
//             Roofer
//           </label>
//           <label className="flex items-center gap-2">
//             <Checkbox id="type-mason" />
//             Mason
//           </label>
//         </div>
//         <button className="text-primary text-sm font-semibold mt-3 hover:underline">
//           Add Work Types
//         </button>
//       </div>
//     </aside>
//   );
// };
