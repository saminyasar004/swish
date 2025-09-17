import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import helpCenterImage1 from "@/assets/helpcenter/helpCenterImage1.svg";
import helpCenterImage2 from "@/assets/helpcenter/helpCenterImage2.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";
import { RelevantArticle } from "./Resuable";

export default function HelpCenter() {
  const faqs = [
    {
      label: "How does Swish.ma work?",
      href: "/articles/help-center/how-swish-works",
    },
    {
      label: "How to choose the right company?",
      href: "/articles/help-center/choose-company",
    },
    {
      label: "What do you do if something goes wrong?",
      href: "/articles/help-center/problem-resolution",
    },
    {
      label: "Reviews on Swish.ma",
      href: "/articles/help-center/reviews-swishma",
    },
    {
      label: "How to write a good job description",
      href: "/articles/help-center/write-good-job-description",
    },
    { label: "Frequently asked questions", href: "/articles/help-center/faq" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold text-center mb-16">
        Help Center – Private Person
      </h1>

      {/* FAQ buttons (navigate on click) */}
      <div className="w-full max-w-3xl mx-auto mb-24 space-y-4">
        {faqs.map((item) => (
          <Link key={item.href} to={item.href} className="block">
            <Button
              variant="outline"
              className="w-full justify-center rounded-full border-secondary/35   text-sm md:text-base lg:h-12 text-primary hover:text-secondary font-semibold"
            >
              {item.label}
            </Button>
          </Link>
        ))}
      </div>

      {/* Published/Updated */}
      <div className="text-sm text-muted-foreground mb-6">
        <p>Published Feb 26, 2025, 6:19 pm</p>
        <p className="font-semibold text-foreground">
          Update Aug 28, 2025, 6:19 pm
        </p>
      </div>

      <Separator className="mb-8" />

      {/* Relevant Articles */}
      <RelevantArticle />
      {/* articles={articles} */}
    </div>
  );
}
