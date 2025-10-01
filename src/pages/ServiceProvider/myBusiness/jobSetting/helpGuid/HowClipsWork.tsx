import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "1. Be active and respond quickly – with a good reply!",
    description:
      "The faster you respond, the greater your chances of getting the job – especially when competition is high! A well-written, personalized reply increases your chances of winning the project and maximizing the value of each clip you use.",
  },
  {
    id: 2,
    title: "2. Use clips on relevant jobs",
    description:
      "Choose assignments that fit your trade, capacity, and geographic area. Using clips on jobs you actually want and can win increases the chance of getting real value in return.  ",
  },
 
];

export default function HowClipsWork() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          How clips work on swish.ma
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          To respond to a job you’re interested in, you first need to unlock it
          by using clips. The number of clips required depends on how large and
          valuable the job is – and how popular it is among other companies.
          Most jobs require 1 clip. Larger or more attractive jobs may require
          2–3 clips. Direct jobs and credit-free jobs are completely free to
          respond to - they do not require any credits.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              Get the most out of your clips
            </h2>
            <p className="text-muted-foreground text-sm">
              Every week, thousands of new jobs are posted – and the best ones
              disappear quickly! That’s why it pays to use your clips wisely.
              Here are three simple tips:
            </p>
            <ol className=" space-y-4 mt-6">
              {listStyle.map((item) => (
                <li key={item.id} className="flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
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
