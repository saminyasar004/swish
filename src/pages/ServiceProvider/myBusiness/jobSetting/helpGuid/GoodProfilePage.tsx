import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "1. Upload your company logo ",
    description:
      "Creates a professional first impression and makes you easier to recognize.",
  },
  {
    id: 2,
    title: "2. Write a short and clear description ",
    description:
      "Tell who you are, what you do, and which services you provide. Keep it simple and easy to understand. ",
  },
  {
    id: 3,
    title: "3. Customer reviews ",
    description:
      "With a profile page, you can showcase customer reviews. Positive feedback builds trust. Don’t have any yet? Start with small or credit-free jobs to get going. ",
  },
  {
    id: 4,
    title: "4. Show photos of previous work ",
    description:
      "Photos give an authentic impression of the quality you deliver – and can make a big difference for customers. ",
  },
];

export default function GoodProfilePage() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          A good profile gets you more jobs
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Your profile page is often the first thing customers see – and what
          determines whether they reach out to you. With a complete and
          professional business profile, you become visible both on Swish.ma and
          on Google, making it easier for customers to find you, trust you, and
          choose your company. <br /> <br /> You can showcase reviews,
          experience, and the services you offer – giving customers confidence
          in their choice. In addition, customers can request a quote directly
          from your profile. That means no competition, no credits used – and a
          higher chance of winning the job.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              What should your profile page include?
            </h2>

            <ol className=" space-y-4 mt-2">
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
