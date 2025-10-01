import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title:
      "1. The customer visits your profile page and requests a quote from you",
    description:
      "The customer can simply click the “Request a Quote” button in the top right corner of your profile page to send a request directly to you. Remember, a well-filled profile page increases the chance that the customer will contact you directly for work.",
  },
  {
    id: 2,
    title: "2. The job is quality assured by us and sent to you",
    description:
      "All jobs posted on Mittanbud are quality assured by us, including direct jobs. Customers must verify themselves before they can post a job. This gives you as a business the peace of mind that all jobs you receive come from genuine and serious customers.",
  },
  {
    id: 3,
    title: "3. You will be notified when the job is ready",
    description:
      "You will receive a notification by email, and you will find the job under “direct jobs” and “new jobs” when you log in to Mittanbud. Remember to respond quickly with a good answer to secure the job.",
  },
 
];

export default function GetJobsDirectly() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Receive direct jobs from clients
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          With a profile page on Mittanbud, you get the opportunity to receive
          direct jobs. These are inquiries from customers who have chosen to
          contact you directly – often based on your profile, reviews or
          previous work. When you receive a direct job, you don't use any clips
          to respond – it's completely free!
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              How direct jobs work on Mittanbud
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
