import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CantFindContact, { RelaventArticals } from "./Reasuable";

const listStyle = [
  {
    id: 1,
    title: "1. Show that you understand the job",
    description:
      "Start by showing that you’ve read what the customer needs. Ask a clarifying question if necessary and show that you take the job seriously. \n \n Example: “Hi [customer’s name]! This looks like something we can help you with. We have solid experience with similar jobs. Could you send a picture of the area in question, or explain a bit more about the scope?",
  },
  {
    id: 2,
    title: "2. Write in a personal and friendly tone",
    description:
      "Customers choose companies they trust. Use a warm and approachable tone and avoid replies that sound too generic.",
  },
  {
    id: 3,
    title: "3. Highlight why it’s safe to choose you ",
    description:
      "Emphasize your experience, expertise, reviews, or certifications. This creates trust and builds credibility. \n \n Example: “We are a certified wet-room company with solid experience and excellent reviews from previous customers on swish.ma.”  ",
  },
  {
    id: 4,
    title: "4. Make it easy to say yes ",
    description:
      "End your reply by inviting the customer to the next step – for example, a site visit, a phone call, or a free quote. \n\n Example: “We’d be happy to arrange a site visit this week and provide you with a non-binding quote.” ",
  },
];

export default function AnswerWinJob() {
  return (
    <Card className="w-full mx-auto border-none">
      <CardHeader className="gap-6">
        <CardTitle className="text-3xl font-semibold">
          Write replies that make customers choose you
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          To win jobs on swish.ma, you need to actively respond to the tasks
          that are posted. We recommend using all the credits included in your
          plan each month – the more relevant replies you send, the higher your
          chances of winning jobs. But it’s not just about how many replies you
          send – it’s also about how you reply.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold my-6">
              Our best tips for great replies
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
