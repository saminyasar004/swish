// src/pages/articles/HowSwishWorks.tsx
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import helpCenterImage1 from "@/assets/helpcenter/helpCenterImage1.svg";
import helpCenterImage2 from "@/assets/helpcenter/helpCenterImage2.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";

// Images (swap with your real assets)
import heroImg from "@/assets/helpcenter/helpCenterImage1.svg";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import step3Img from "@/assets/helpcenter/helpCenterImage1.svg";
import step4Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";

export default function HowSwishWorks() {
  const steps = [
    {
      n: 1,
      title: "Post your job",
      body: "Start by selecting the right category on the homepage. Tell us what you want done by answering a few simple questions. Your job will then be sent out to relevant companies",
      img: step1Img,
      alt: "Posting a job card illustration",
    },
    {
      n: 2,
      title: "Receive non-obliging offers",
      body: "Within a short time, you’ll receive non-binding offers from several skilled professionals and companies. You’ll find an overview of all responses under your job on swish.ma.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 3,
      title: "Choose the right pro for you",
      body: "Compare the offers. Read more about each company on their profile page on swish.ma, check their certifications, and use reviews from other users to make a well-informed decision. We also always recommend signing a contract – no matter the size of the job. ",
      img: step3Img,
      alt: "Choose provider illustration",
    },
    {
      n: 4,
      title: "Review the company",
      body: "Once the job is done, it’s important that you take the opportunity to leave a review of the company you chose. In this way, all users of swish.ma contribute to ensuring the quality of every company on the platform.",
      img: step4Img,
      alt: "Review rating illustration",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="How does Swish.ma work?"
        description="Renovate your home. Get help with your move. You can do all this – and much more – on swish.ma. Tell us what you need done, and we’ll connect you with skilled professionals. Compare offers and choose the right company for your job. It’s that simple."
        heroImg={heroImg}
      />

      {/* Steps */}
      <div className="max-w-2xl mx-auto mt-12 md:mt-16 space-y-12 md:space-y-20">
        {steps.map((s) => (
          <section key={s.n} className="scroll-mt-20">
            <h3 className="text-lg md:text-xl font-semibold">
              {s.n}. {s.title}
            </h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              {s.body}
            </p>

            <div className="mt-5 md:mt-6">
              <div className="mx-auto w-full md:w-[440px] rounded-xl border bg-card shadow-sm">
                <div className="p-4">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Separator className="my-16" />

      <RelevantArticle/>

      {/* Meta + Divider + Back link */}
      {/* <div className="max-w-3xl mx-auto">
        <div className="text-xs md:text-sm text-muted-foreground mt-12">
          <p>Published Feb 26, 2025, 6:19 pm</p>
          <p className="font-semibold text-foreground">
            Update Aug 28, 2025, 6:19 pm
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex items-center justify-between">
          <Link
            to="/help"
            className="text-primary text-sm md:text-base hover:underline"
          >
            ← Back to Help Center
          </Link>

          <div className="flex gap-4 text-sm">
            <Link to="/articles/faq" className="text-primary hover:underline">
              Frequently asked questions
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/articles/job-description"
              className="text-primary hover:underline"
            >
              How to write a good job description
            </Link>
          </div>
        </div>
      </div> */}

    </div>
  );
}
