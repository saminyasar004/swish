import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "Step 1",
    description:
      "When you’re inside a message, you’ll find “standard replies” in the tab below the message field.",
  },
  {
    id: 2,
    title: "Step 2 ",
    description:
      "When you click on “standard replies,” a window will open where you can create multiple predefined responses. From there, you can easily choose which reply to send.",
  },
  {
    id: 3,
    title: "Step 3",
    description:
      "Here, you can give your “standard reply” a name and write the content you want.",
  },
];

export default function StandardResponse() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Save time – Use standard replies
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          With standard replies, you don’t have to write everything from scratch
          – and a good, quick response increases your chances of catching the
          customer’s attention! If you have a profile page on swish.ma, you also
          have access to standard replies. You’ll find this feature in the
          messaging section where you communicate with customers.
        </p>
        <h2 className="text-2xl font-semibold my-6">
              When Should I Use Standard Replies?
            </h2>
            <p className="text-muted-foreground text-sm">
              Use standard replies for jobs you frequently respond to – it saves
              time. Simple jobs (like building a deck or an oil change) are
              perfect, while larger assignments require more customized answers.
              Create templates based on the types of jobs you often get but
              remember to adjust them slightly for each customer. Small tweaks
              lead to better results.
            </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
             How to Create Standard Replies 

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
