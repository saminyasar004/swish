// components/JobFilterSidebar.tsx
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const JobFilterSidebar = () => {
  return (
    <aside className="w-full sm:w-64 p-2 bg-white space-y-6">
      {/* Search */}
      <div>
        <h2 className="font-semibold text-2xl mb-6">Search For Jobs</h2>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={16}
          />
          <Input
            className="w-full pl-10 ring-2 ring-gray-100"
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
  );
};
