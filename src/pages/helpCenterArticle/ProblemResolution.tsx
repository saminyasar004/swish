// src/pages/articles/HowSwishWorks.tsx
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import helpCenterImage1 from "@/assets/helpcenter/helpCenterImage1.svg";
import helpCenterImage2 from "@/assets/helpcenter/helpCenterImage2.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";

// Images (swap with your real assets)
import ProblemResolutionImage from "@/assets/helpcenter/ProblemResolutionImage.svg";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import step3Img from "@/assets/helpcenter/helpCenterImage1.svg";
import step4Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";

export default function ProblemResolution() {
  const steps = [
    {
      n: 1,
      title: "Contact the company directly ",
      body: "Start by discussing the issue with the company you hired. Many problems can be solved quickly through clear communication.",
      img: step1Img,
      alt: "Posting a job card illustration",
    },
    {
      n: 2,
      title: "Refer to your contract",
      body: "This is why a written contract is so important. Go through the agreement to check what was promised, deadlines, and warranties.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 3,
      title: "Report the issue on swish.ma",
      body: "Let us know if you have experienced problems with a company on swish.ma. Your feedback is important so we can follow up and make sure unserious companies do not continue on the platform",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 4,
      title: "Seek legal advice if necessary",
      body: "If the issue is serious and cannot be resolved directly, you can consult a lawyer or local consumer protection authorities. They can advise you on your rights and the next steps to take.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 5,
      title: "Contact the police in case of fraud or illegal activity",
      body: "If you suspect fraud, unsafe practices, or other illegal actions, report the matter to the police immediately.",
      img: step2Img,
      alt: "Offer list illustration",
    },
  ];

  const stepsList1 = [
    "There are several steps you can take to reduce the risk of unpleasant surprises.",
    "Always sign a written contract with the company.",
    "Never pay the full amount in advance.",
    "Check reviews and references from previous customers on swish.ma.",
    "Avoid paying in cash without a receipt.",
    "Verify that the company is properly registered and certified for the work they do."
  ];

  const stepsList2 = [
    "To make it safer for you to find companies, swish.ma carries out checks on all businesses that register on the platform.",
    "We verify, among other things:",
    "That the company is legally registered in Morocco.",
    "That they hold the necessary certifications and licenses.",
    "That they have no history of fraud or repeated complaints.",
    "Reviews and feedback from previous customers.",
    "Continuous monitoring to ensure unserious companies do not remain on swish.ma."
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="What to do if something goes wrong?"
        description="Most home improvement and renovation projects fortunately go as planned. But sometimes problems can occur – from misunderstandings to more serious issues. In those cases, it’s important to know which steps to take."
        heroImg={ProblemResolutionImage}
      />

      {/* Steps */}
      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        <section className="scroll-mt-20">
          <h3 className="text-xl md:text-2xl font-semibold">
            Act quickly and correctly
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">
            If you experience a problem with a company hired through swish.ma,
            here’s what you should do:
          </p>
        </section>
      </div>
      <div className="max-w-3xl mx-auto mt-4 md:mt-6 space-y-3 md:space-y-4">
        {steps.map((s) => (
          <section key={s.n} className="scroll-mt-20">
            <h3 className="text-lg font-semibold">{s.n + ". " + s.title}</h3>
            <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">{s.body}</p>
          </section>
        ))}
      </div>

       <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
        How to avoid problems in advance
      </h3>
      <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
        {stepsList1.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>

     <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
        How swish.ma ensures trust and quality
      </h3>
      <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
        {stepsList2.map((check, index) => (
          <li key={index}>{check}</li>
        ))}
      </ul>
    </div>

      <Separator className="my-16" />

      <RelevantArticle />
    </div>
  );
}
