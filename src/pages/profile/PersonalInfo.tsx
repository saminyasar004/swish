import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function PersonalInfo() {
  return (
     <div className="grid grid-cols-1 space-y-5  md:grid-cols-2 gap-6">
              <div className="form-group flex flex-col gap-3 lg:px-10">
                <Label htmlFor="firstName" className="text-secondary">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  className="ring-2 ring-gray-100"
                  type="name"
                  placeholder="John"
                />
              </div>

              <div className="form-group flex flex-col gap-3 lg:px-10 ">
                <Label htmlFor="lastName" className="text-secondary">
                  Last Name
                </Label>
                <Input
                  className="ring-2 ring-gray-100"
                  id="lastName"
                  type="name"
                  placeholder="Doe"
                />
              </div>

              <div className="form-group flex flex-col gap-3 lg:px-10 ">
                <Label htmlFor="email" className="text-secondary">
                  Email
                </Label>
                <Input
                  className="ring-2 ring-gray-100"
                  id="email"
                  type="email"
                  placeholder="email"
                />
              </div>

              <div className="form-group flex flex-col gap-3 lg:px-10 ">
                <Label htmlFor="number" className="text-secondary">
                  Mobile Number
                </Label>
                <Input
                  className="ring-2 ring-gray-100"
                  id="number"
                  type="number"
                  placeholder="number"
                />
              </div>

              <div className="form-group flex flex-col gap-3 lg:px-10 ">
                <Label htmlFor="city" className="text-secondary">
                  City
                </Label>
                <Input
                  className="ring-2 ring-gray-100"
                  id="city"
                  type="text"
                  placeholder="city"
                />
              </div>

              <div className="form-group flex flex-col gap-3 lg:px-10 ">
                <Label htmlFor="address" className="text-secondary">
                  Address
                </Label>
                <Input
                  className="ring-2 ring-gray-100"
                  id="address"
                  type="text"
                  placeholder="Address"
                />
              </div>

              <Button className="w-1/4 mx-auto mt-16 col-span-2">Save</Button>
            </div>
  )
}
