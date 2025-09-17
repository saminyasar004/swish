// src/pages/articles/HowSwishWorks.tsx
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import helpCenterImage1 from "@/assets/helpcenter/helpCenterImage1.svg";
import helpCenterImage2 from "@/assets/helpcenter/helpCenterImage2.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";

// Images (swap with your real assets)
import chooseCompanyImage from "@/assets/helpcenter/chooseCompanyImage.svg";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import step3Img from "@/assets/helpcenter/helpCenterImage1.svg";
import step4Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";

export default function HowChooseRightCompany() {
  const steps = [
    {
      n: 1,
      title: "Why you should choose a professional company",
      body: "It may be tempting to pay under the table when renovating, but there are many reasons why you should always choose a company that follows the law and operates professionally. ",
      img: step1Img,
      alt: "Posting a job card illustration",
    },
    {
      n: 2,
      title: "Everyone benefits when you choose right ",
      body: "It’s not only you as a homeowner who gains by working with a professional company. Choosing serious companies helps the entire community: it reduces illegal labor, secures fair wages, and creates safer standards for customers.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 3,
      title: "Compare the offers you receive ",
      body: "Renovation projects can be complex: the price, scope of work, and required specialists may vary. By gathering offers from several companies on swish.ma, you gain a clear overview of what your project involves — and what it will cost. ",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 4,
      title: "Be detailed in your job description",
      body: "When posting your project on swish.ma, take the time to describe the job in detail — and add photos if possible. Clear and thorough descriptions attract more responses from companies and lead to better offers.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 5,
      title: "Check reviews and references",
      body: "Once you start receiving offers, make sure to check the company’s reviews on swish.ma. Reading what previous customers say — especially about projects similar to yours — is one of the best ways to assess professionalism and quality.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 6,
      title: "Arrange an on-site visit",
      body: "Before signing a contract, invite the company for an on-site visit. A walkthrough ensures both sides agree on the scope of work, and gives you the chance to ask important questions before a final price is set.",
      img: step2Img,
      alt: "Offer list illustration",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="How to choose the right company 
"
        description="How can you be sure that the company you choose follows the law, delivers quality, and runs a professional business? Here’s what you should do to feel confident that you’re selecting the right company for your project."
        heroImg={chooseCompanyImage}
      />

      {/* Steps */}
      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        {steps.slice(0, 2).map((s) => (
          <section key={s.n} className="scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">{s.body}</p>
          </section>
        ))}
      </div>

      <div className="mt-12 md:mt-16 bg-liquidGreen max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          By hiring a trusted company, you ensure that:
        </h3>
        <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
          <li>
            You are protected if something goes wrong during or after the
            project.
          </li>
          <li>
            The work is properly documented, increasing your property’s value
            and making it easier to sell in the future.
          </li>
          <li>
            Workers on your project have the right skills, fair pay, and proper
            rights.
          </li>
        </ul>
      </div>

      {/* Steps */}
      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        {steps.slice(2).map((s) => (
          <section key={s.n} className="scroll-mt-20">
            <h3 className="text-xl md:text-2xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">{s.body}</p>
          </section>
        ))}
      </div>

      <Separator className="my-16" />

      <RelevantArticle />
    </div>
  );
}
