"use client";

import { useState } from "react";
import { UploadCloud, Pencil } from "lucide-react";
import BusinessSidebar from "./BusinessSidebar";
import { Button } from "@/components/ui/button";

export default function GraphicsPage() {
  const [logo, setLogo] = useState<File | null>(null);
  const [wallpaper, setWallpaper] = useState<File | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "logo" | "wallpaper"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    type === "logo" ? setLogo(file) : setWallpaper(file);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-xl">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 space-y-12 mt-6 container mx-auto">
        {/* <h2 className="text-3xl font-semibold text-gray-800 border-b pb-4">
          Company Graphics
        </h2> */}

        {/* Change Logo */}
        <section className="space-y-6 ">
          <h3 className="text-3xl font-semibold text-gray-700">Change Logo</h3>
          <label
            htmlFor="logo-upload"
            className="flex items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 rounded-md h-52 cursor-pointer hover:border-primary/40"
          >
            {logo ? (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo Preview"
                className="h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center text-sm text-muted-foreground">
                <UploadCloud size={28} className="mb-1 " />
                <p>
                  Drag and drop file or{" "}
                  <span className="text-green-600 underline">Choose file</span>
                </p>
                <span className="text-xs mt-1">
                  Recommended size: 126px × 126px, PNG or JPEG
                </span>
              </div>
            )}
            <input
              type="file"
              id="logo-upload"
              className="hidden"
              accept="image/png, image/jpeg"
              onChange={(e) => handleFileChange(e, "logo")}
            />
          </label>
        </section>

        {/* Change Wallpaper */}
        <section className="space-y-6">
          <h3 className="text-3xl font-semibold text-gray-700">
            Change Wallpaper
          </h3>

          <div className="h-48 w-full bg-[#D9D9D9]">
            <label
              htmlFor="wallpaper-upload"
              className="relative h-48 w-full bg-[#D9D9D9] rounded-md overflow-hidden cursor-pointer hover:opacity-90"
            >
              {wallpaper ? (
                <img
                  src={URL.createObjectURL(wallpaper)}
                  alt="Wallpaper Preview"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  <Pencil className="mr-2" size={16} />
                  Click to upload wallpaper
                </div>
              )}
              <input
                type="file"
                id="wallpaper-upload"
                className="hidden"
                accept="image/png, image/jpeg"
                onChange={(e) => handleFileChange(e, "wallpaper")}
              />
            </label>
          </div>
          <p className="text-xs text-center text-muted-foreground">
            Recommended size: 1260px × 126px, PNG or JPEG
          </p>
        </section>

        {/* Update Button */}
        <div className="flex justify-center pt-2">
          <Button className="bg-primary  text-white px-6">Update</Button>
        </div>
      </main>
    </div>
  );
}
