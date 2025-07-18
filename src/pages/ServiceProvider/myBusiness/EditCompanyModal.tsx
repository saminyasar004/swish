"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Props {
  open: boolean;
  onClose: () => void;
  data: {
    companyName: string;
    email: string;
    telephone: string;
    location: string;
    services: string[];
  };
  onUpdate: (updatedData: Props["data"]) => void;
}

export default function CompanyEditModal({
  open,
  onClose,
  data,
  onUpdate,
}: Props) {
  const [form, setForm] = useState(data);
  const [newService, setNewService] = useState("");

  useEffect(() => {
    setForm(data);
  }, [data]);

  const handleAddService = () => {
    if (newService.trim()) {
      setForm((prev) => ({
        ...prev,
        services: [...prev.services, newService.trim()],
      }));
      setNewService("");
    }
  };

  const handleDeleteService = (index: number) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  const splitServices = () => {
    const half = Math.ceil(form.services.length / 2);
    return [form.services.slice(0, half), form.services.slice(half)];
  };

  const handleDeleteServiceClick = () => {
    //   setShowDeleteMode(true); // if you're toggling a selection mode for services
  };

  const handleAddServiceClick = () => {
    if (newService.trim()) {
      setForm((prev) => ({
        ...prev,
        services: [...prev.services, newService.trim()],
      }));
      setNewService("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-4">
            Customize Your Company Info
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Name */}
          <div>
            <label className="block font-semibold mb-2">Company Name</label>
            <Input
              value={form.companyName}
              className="ring-2 ring-gray-100 w-1/2"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, companyName: e.target.value }))
              }
            />
          </div>

          {/* Services */}
          <div className="mb-6">
            <label className="block font-semibold mb-1">Services</label>
            <div className="border p-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              {splitServices().map((col, colIdx) => (
                <ul
                  key={colIdx}
                  className="space-y-2 text-sm text-muted-foreground list-disc list-inside"
                >
                  {col.map((srv, idx) => {
                    const realIdx =
                      colIdx === 0
                        ? idx
                        : idx + Math.ceil(form.services.length / 2);
                    return (
                      <li
                        key={realIdx}
                        className="flex justify-between items-center"
                      >
                        <span>{srv}</span>
                        <button
                          onClick={() => handleDeleteService(realIdx)}
                          className="text-red-500 text-xs ml-2"
                        >
                          ✕
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>

            <div className="flex text-center items-center justify-center w-full mt-6 gap-4 ">
              <Button
                type="button"
                onClick={handleDeleteServiceClick}
                className="bg-red-500 text-white px-6 py-2"
              >
                Delete Service
              </Button>
              <Button
                type="button"
                onClick={handleAddServiceClick}
                className="bg-green-600 text-white px-6 py-2"
              >
                Add Service
              </Button>
            </div>

            {/* <div className="mt-4 flex items-center gap-4">
              <Input
                value={newService}
                onChange={(e) => setNewService(e.target.value)}
                placeholder="Add new service"
                className="w-full ring-2 ring-gray-100"
              />
            </div> */}
          </div>

          {/* Contact Info */}
          <p className="font-semibold text-xl ">Contact</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <Input
                value={form.email}
                className=" ring-2 ring-gray-100"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Telephone</label>
              <Input
                className=" ring-2 ring-gray-100"
                value={form.telephone}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, telephone: e.target.value }))
                }
              />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Location</label>
              <Input
                className=" ring-2 ring-gray-100"
                value={form.location}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="text-end">
            <Button
              onClick={() => {
                onUpdate(form);
                onClose();
              }}
              className="bg-primary text-white"
            >
              Update
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
