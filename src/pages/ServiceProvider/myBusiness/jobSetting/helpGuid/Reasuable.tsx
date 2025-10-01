import { ButtonProvider } from "@/components/ui/buttonProvider";
import React from "react";
import { Link } from "react-router-dom";

export default function CantFindContact() {
  return (
    <div className="bg-slate-100 p-6 mt-16">
      <div>
        <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-2">
          Can't find what you're looking for?
        </h2>
        <p className="text-sm text-[#151515] pb-4">
          Please contact our customer service if you have any questions.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <ButtonProvider> See package</ButtonProvider>
        <Link to="/provider/my-business/job-setting/customer-service">
          <ButtonProvider> Contact us</ButtonProvider>
        </Link>
      </div>
    </div>
  );
}
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function RelaventArticals() {
  return (
    <section className="grid  gap-4 ">
      <h3 className="text-3xl font-semibold mb-2">Relevent articals</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="py-6">
            <h3 className="font-semibold text-xl">Reviews </h3>
            <div className="mt-2 flex gap-2">
              <p className="text-providerPrimary hover:underline font-medium text-sm ">
                Attract more and larger jobs with great reviews.
              </p>
              <span className="ml-1">
                <ArrowRight />
              </span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-6">
            <h3 className="font-semibold text-xl">Standard replies </h3>
            <div className="mt-2 flex gap-2">
              <p className="text-providerPrimary hover:underline font-medium text-sm ">
                Use standard replies for faster and smoother customer
                communication.
              </p>
              <span className="ml-1">
                <ArrowRight />
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
