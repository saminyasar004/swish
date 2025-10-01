import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "Low competition and higher chance of winning!",
    description:
      "Cut-free jobs often have few or no responses, making it easier to connect with the customer and stand out.",
  },
  {
    id: 2,
    title: "Perfect for new or small businesses",
    description:
      "Do you have few or no reviews? No-cut jobs are perfect for those who want to get their first reviews and build trust with clients. More reviews = a greater chance of winning more and better jobs later.",
  },
  {
    id: 3,
    title: "Save your clips",
    description:
      "Since all clip-free jobs are completely free to respond to, you get more opportunities to win assignments without using your clips. You can then use the clips on bigger or more relevant jobs instead.",
  },
];

export default function CutFreeJobs() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          What are cut-free jobs - and why should you respond to them?
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Jobs that haven’t received a response within 48 hours will be clip-free. This means you can respond completely free of charge – without using clips. While some of these jobs may have short descriptions or be smaller jobs, they can still lead to good and valuable assignments. Many clients just need a little push to get started – and a simple question from you can open up a good dialogue and give a clearer picture of the job.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
             The benefits of clip-free jobs
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
