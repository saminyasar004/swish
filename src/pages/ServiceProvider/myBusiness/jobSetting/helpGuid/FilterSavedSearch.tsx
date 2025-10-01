import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "Step 1: Choose the right job types and areas ",
    description:
      "Start by selecting which job categories and geographic areas you want to receive assignments from. You can easily do this in “Job Search.” Here, you should set your reach as broadly as possible. You can fine-tune it later in your saved searches. ",
  },
  {
    id: 2,
    title: "Step 2: Save your search for easier job hunting! ",
    description:
      "Once you’ve chosen relevant job types and areas, you can save the search so you can quickly find the most relevant jobs next time. You can then sort the jobs with your own filters for a better overview. Filter the jobs in the list on the left and click “Save filter” at the top right in the “New Jobs” view to get started. ",
  },
  {
    id: 3,
    title: "Step 3: Enable notifications ",
    description:
      "After the search is saved, choose how and when you want to be notified—via email, push notification, or both. You’ll be alerted as soon as relevant jobs are posted, so you can be among the first to respond. ",
  },
];

export default function FilterSavedSearch() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Take full control — with saved searches and smart notifications
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          See only the jobs that are relevant to you — when and how it suits
          best. By combining saved searches and custom filters with the right
          job types and geographic areas, you'll ensure you never miss out on
          important opportunities.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              How to get started — step by step
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
            <div className="mt-8">
              <h2 className="text-3xl font-semibold mb-4">
                Tailor swish.ma to your day-to-day
              </h2>
              <p className="text-muted-foreground text-sm">
                By choosing the right job types and areas, saving searches, and
                enabling notifications, you’ll quickly get an overview of
                relevant jobs and can respond before they’re gone. When you log
                in, you’ll see a customized overview with exactly the jobs you
                want — not a sea of irrelevant posts Combine this with a solid
                standard reply, and you can respond quickly and efficiently.
                That increases your chances of winning the job—without spending
                a lot of time.
              </p>
            </div>
          </section>

          {/* Articals */}
          {/* <section className="grid  gap-4 ">
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
          </section> */}
          <RelaventArticals />

          <CantFindContact />
        </div>
      </CardContent>
    </Card>
  );
}
