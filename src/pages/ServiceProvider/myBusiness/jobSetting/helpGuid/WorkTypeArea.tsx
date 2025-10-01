import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "Not finding relevant jobs? ",
    description:
      "Adjust job category and area based on season, capacity, or new services. This will give you better matches and prevent you from using credits on the wrong type of assignments. Need help setting up a broader or more precise search? Customer Service is happy to help.",
  },
  {
    id: 2,
    title: "Get notified and reply first – With saved searches ",
    description:
      "The earlier you respond, the higher your chances of winning the job. Save a search and get notified when relevant jobs are posted. The best jobs disappear quickly – with a saved search, you’ll be first in line.",
  },
];

export default function WorkTypeArea() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Get the jobs that fit you
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          New jobs are posted on swish.ma every day – and with the right setup,
          you can quickly find the ones that match your business. You can easily
          make these adjustments in the job search settings, as shown in the
          image below.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              Get the Most Out of Your Job Searches
            </h2>
            <ol className=" space-y-4 mt-2">
              {listStyle.map((item) => (
                <li key={item.id} className="flex flex-col gap-2 ">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm whitespace-pre-line">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <RelaventArticals />

          <CantFindContact />
        </div>
      </CardContent>
    </Card>
  );
}
