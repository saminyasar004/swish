"use client";

import { ButtonProvider } from "@/components/ui/buttonProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Filter,
  PlayCircle,
  Trophy,
  Briefcase,
  BadgePercent,
  MessageSquare,
  UserCircle,
  Send,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const guides = [
  {
    title: "Filters and saved searches",
    description:
      "Filter jobs, save searches, and get notifications — so you can stay up to date and respond quickly.",
    icon: Filter,
  },
  {
    title: "How clips work",
    description:
      "With Clips you can respond to all relevant jobs – here's how it works.",
    icon: PlayCircle,
  },
  {
    title: "Answers that win jobs",
    description: "Good answers get more jobs – learn what works best.",
    icon: Trophy,
  },
  {
    title: "Work types and areas",
    description:
      "See the most relevant jobs – customize the category and area to what you're looking for.",
    icon: Briefcase,
  },
  {
    title: "Cut-free jobs",
    description: "Free opportunities – how to get the most out of them.",
    icon: BadgePercent,
  },
  {
    title: "Standard response",
    description:
      "Use standard responses for faster and better customer dialogue.",
    icon: MessageSquare,
  },
  {
    title: "Profile page",
    description:
      "Get more jobs with a strong profile page – see how to improve it.",
    icon: UserCircle,
  },
  {
    title: "Get jobs directly",
    description:
      "With a profile page on Mittanbud you can receive direct jobs from customers.",
    icon: Send,
  },
  {
    title: "Evaluations",
    description: "Attract more and better assignments with good evaluations.",
    icon: Star,
  },
];

export default function HelpGuidSetting() {
  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl flex items-center gap-2 font-semibold text-providerPrimary pb-2">
        Welcome to our help guide
      </h2>
      <p className="text-sm text-[#151515] pb-4">
        Get useful tips for a good start or learn something new along the way.
      </p>

      <h3 className="text-2xl font-semibold text-providerPrimary pb-2 my-8">
        What would you like to know more about?
      </h3>

      {/* Guide cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {guides.map((guide, i) => (
          <Card
            key={i}
            className="shadow-sm hover:shadow-md cursor-pointer hover:bg-slate-50 transition-all ease-in-out duration-300"
          >
            <CardHeader className="flex flex-col gap-2">
              <guide.icon className="w-6 h-6 text-providerPrimary" />
              <CardTitle className="text-lg font-semibold leading-snug">
                {guide.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {guide.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

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
          <Link to="/provider/my-business/job-setting/customer-service">
            <ButtonProvider> Contact us</ButtonProvider>
          </Link>
        </div>
      </div>
    </div>
  );
}
