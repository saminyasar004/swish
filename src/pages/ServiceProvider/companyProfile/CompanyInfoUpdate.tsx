import React from "react";
import companyInfoBag from "@/assets/providerIcon/settingIcon/companyInfoBag.svg";
import { Button } from "@/components/ui/button";

export function CompanyInfoUpdate() {
  return (
    <>
      {/* Company Info */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <img src={companyInfoBag} alt="company-info" className="w-5 h-5" />
          <h2 className="text-2xl font-semibold text-primaryDark">
            Company Info
          </h2>
        </div>

        <form className="text-sm space-y-4">
          {/* Details */}
          <div className="space-y-2">
            <h3 className="font-semibold text-xl mb-4">Details</h3>
            <div>
              <label className="font-semibold">Company name</label>
              <input
                type="text"
                defaultValue="Tovsvyftem AS"
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Organization Number</label>
              <input
                type="text"
                defaultValue="123654123 (ICE)"
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Phone</label>
              <input
                type="tel"
                defaultValue="+4755855"
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Address</label>
              <input
                type="text"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Zip code</label>
              <input
                type="text"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
          </div>

          {/* About Company */}
          <div className="space-y-2">
            <h3 className="font-semibold  ">About company</h3>
            <div>
              <textarea
                defaultValue=""
                placeholder="Describe your company"
                className="w-full p-2 border rounded-md text-gray-700 h-24"
              />
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-semibold text-xl mb-4 mt-8">Social media</h3>
            <div>
              <label className="font-semibold">Company website</label>
              <input
                type="url"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Facebook</label>
              <input
                type="url"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">Instagram</label>
              <input
                type="url"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">YouTube</label>
              <input
                type="url"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
            <div>
              <label className="font-semibold">TikTok</label>
              <input
                type="url"
                defaultValue=""
                className="w-full p-2 border rounded-md text-gray-700"
              />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-2">
            <h3 className="font-semibold">Opening hours</h3>
            <div className="flex items-center gap-2">
              <label className="font-semibold">
                Different opening hours every day
              </label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold">Open on weekends</label>
              <input type="checkbox" className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label>Mon-Fri</label>
                <input
                  type="time"
                  defaultValue="09:00"
                  className="p-2 border rounded-md text-gray-700"
                />
                <span>-</span>
                <input
                  type="time"
                  defaultValue="18:00"
                  className="p-2 border rounded-md text-gray-700"
                />
              </div>
              <div>
                <label>Saturday</label>
                <button className="ml-2 px-4 py-1 bg-gray-200 rounded-md">
                  Closed
                </button>
              </div>
              <div>
                <label>Sunday</label>
                <button className="ml-2 px-4 py-1 bg-gray-200 rounded-md">
                  Closed
                </button>
              </div>
            </div>

            {/* Update Button */}
            <div className="flex justify-center pt-2">
              <Button className="bg-primary  text-white px-6">Update</Button>
            </div>
          </div>
        </form>
      </section>

      <hr />
    </>
  );
}
