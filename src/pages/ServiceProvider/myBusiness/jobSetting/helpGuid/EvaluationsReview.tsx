import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "How we ensure the quality of reviews on swish.ma ",
    description:
      "All reviews are reviewed and quality-checked by our customer service team before being published. In addition, we have systems that automatically detect unusual or suspicious activity. To ensure credibility, all reviews must be written with a full name and verified with BankID. This ensures that only real customers can provide feedback.",
  },
];

export default function EvaluationsReview() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Reviews are the key to winning more jobs
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Most people looking for professionals on swish.ma read reviews before
          deciding who to contact. That’s why it’s important to always ask the
          customer to leave a review once the job is completed – it can be
          crucial for getting your next assignment.
          <br />
          <br />
          Companies with many good reviews and high star ratings are more likely
          to win new jobs. In addition, reviews appear in Google searches,
          giving your business more visibility and making it easier for
          potential customers to find and trust you. When they visit your
          profile page, they can easily get in touch directly – shortening the
          path to your next job. In the article below, you can read more about
          direct jobs.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
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
