import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function PersonalInfo() {
  return (
    <div className="  my-8 border border-gray-200 rounded-md overflow-hidden py-6">
      <div className="px-2">
        <div className="lg:px-10 col-span-2">
          <h3 className="text-2xl font-semibold text-blackPrimary mb-6">
            Personal information
          </h3>
        </div>
        <div className="lg:px-9 ">
          <h3 className="text-base font-medium bg-liquidGreen text-secondary mb-4 py-3 px-1">
            If you want to change the contact information for a job,do it within
            the job.
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  lg:px-10">
          <div className="form-group flex flex-col ">
            <Label htmlFor="firstName" className="text-secondary">
              First Name
            </Label>
            <Input
              id="firstName"
              className="ring-1 ring-gray-300"
              type="name"
              placeholder="John"
            />
          </div>

          <div className="form-group flex flex-col ">
            <Label htmlFor="lastName" className="text-secondary">
              Last Name
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="lastName"
              type="name"
              placeholder="Doe"
            />
          </div>

          <div className="form-group flex flex-col ">
            <Label htmlFor="email" className="text-secondary">
              Email
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="email"
              type="email"
              placeholder="email"
            />
          </div>

          <div className="form-group flex flex-col ">
            <Label htmlFor="number" className="text-secondary">
              Mobile Number
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="number"
              type="number"
              placeholder="number"
            />
          </div>

          <div className="form-group flex flex-col ">
            <Label htmlFor="city" className="text-secondary">
              City
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="city"
              type="text"
              placeholder="city"
            />
          </div>

          <div className="form-group flex flex-col ">
            <Label htmlFor="address" className="text-secondary">
              Postal Code
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="postalCode"
              type="number"
              placeholder="Postal Code"
            />
          </div>
          <div className="form-group flex flex-col col-span-2">
            <Label htmlFor="address" className="text-secondary">
              Address
            </Label>
            <Input
              className="ring-1 ring-gray-300"
              id="address"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="lg:px-10">
          <Button className="w-full mx-auto mt-8 col-span-2 ">Save</Button>
        </div>
      </div>
    </div>
  );
}
