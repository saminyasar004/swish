import { Separator } from "@/components/ui/separator";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What Job are available on Swish.ma",
    answer:
      "On Swish.ma there is a varied selection of jobs for different industries. Every day, assignments are posted for everything from electricians, painters and plumbers, to moving companies, cleaning companies and architects. There is therefore a high probability that your company will find jobs that suit you! . Regardless of whether your company wants small jobs or larger projects, you will find relevant projects with us!",
  },
  {
    question: "How can I register my company?",
    answer:
      "Click the 'Register' button on the homepage and fill out your company details. Once verified, you can access tenders immediately.",
  },
  {
    question: "Is there a fee for using MyTender?",
    answer:
      "Basic access is free. Premium plans with additional features are available for a monthly subscription.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@mytender.com or through the help center in your dashboard.",
  },
  {
    question: "Is there a fee for using MyTender?",
    answer:
      "Basic access is free. Premium plans with additional features are available for a monthly subscription.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at support@mytender.com or through the help center in your dashboard.",
  },
];

export default function HelpCenterFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="Frequently Asked Questions"
        description="Here you’ll find answers to the most common questions customers may have about using the service."
        heroImg={step2Img}
      />

      <div className="w-full max-w-full mx-auto my-24 space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-liquidGreen/50 transition-all duration-300 ease-in-out hover:border-primary"
            >
              <span className="font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>

      {/* Published/Updated */}
      <div className="text-sm text-muted-foreground mb-8 flex flex-col gap-2">
         <h2 className="text-xl md:text-2xl font-semibold ">
         How do i touch with mitbun
        </h2>
        <p className="text-lg text-foreground">Whatsapp: +212 0202020202 </p>
        <p className="text-lg text-foreground">
          Email: Info@swish.ma@gmail.com
        </p>
      </div>

      <Separator className="mb-8" />

      <RelevantArticle />
    </div>
  );
}
