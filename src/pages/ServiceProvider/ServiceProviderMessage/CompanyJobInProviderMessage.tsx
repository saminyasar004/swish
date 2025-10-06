import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Printer,
  Copy,
  Trophy,
  ChevronDown,
  ChevronUp,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import clsx from "clsx";

export default function CompanyJobInProviderMessage({ setSelectedProfilePage }: any) {
  const [expanded, setExpanded] = useState<string | null>("actions");

  const toggleSection = (section: string) =>
    setExpanded(expanded === section ? null : section);

  return (
    <section className="mx-1 shadow-lg rounded-lg overflow-hidden h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="text-lg font-semibold">Job details</h3>
        <X
          className="cursor-pointer text-gray-500"
          size={20}
          onClick={() => setSelectedProfilePage(false)}
        />
      </div>

      <div className="w-full h-full overflow-y-auto py-4 space-y-3 px-3">
        {/* Actions */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-0">
            <button
              className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-800"
              onClick={() => toggleSection("actions")}
            >
              Actions
              {expanded === "actions" ? <ChevronUp /> : <ChevronDown />}
            </button>

            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                expanded === "actions" ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-5 pb-4 space-y-3 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <Trophy size={16} /> Mark as won
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} /> Show phone number
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} /> Show email address
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> Show address
                </div>
                <div className="flex items-center gap-2">
                  <Printer size={16} /> Print job
                </div>
                <div className="flex items-center gap-2">
                  <Copy size={16} /> Copy job details
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* About job */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-0">
            <button
              className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-800"
              onClick={() => toggleSection("about")}
            >
              About job
              {expanded === "about" ? <ChevronUp /> : <ChevronDown />}
            </button>

            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                expanded === "about" ? "max-h-[500px]" : "max-h-0"
              )}
            >
              <div className="px-5 pb-4 text-gray-600 text-sm space-y-3">
                <h4 className="font-semibold text-base text-gray-900">
                  Raising an extension
                </h4>
                <p>
                  I am looking for an experienced and reliable craftsman to assist
                  with improving an extension that needs to be lifted and straightened.
                  The work requires professional competence and accuracy.
                </p>
                <img
                  src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png"
                  alt="map"
                  className="rounded-md w-full h-40 object-cover"
                />
                <Button variant="link" className="text-green-600 p-0 h-auto">
                  Show job info
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shared Files */}
        <Card className="border-none shadow-sm">
          <CardContent className="p-0">
            <button
              className="w-full flex items-center justify-between px-4 py-3 font-medium text-gray-800"
              onClick={() => toggleSection("files")}
            >
              Shared files
              {expanded === "files" ? <ChevronUp /> : <ChevronDown />}
            </button>

            <div
              className={clsx(
                "overflow-hidden transition-all duration-300 ease-in-out",
                expanded === "files" ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="px-5 pb-4 flex gap-3">
                {[
                  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=200",
                  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=200",
                  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=200",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="shared"
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
