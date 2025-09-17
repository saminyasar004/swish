import { Separator } from "@/components/ui/separator";

// Images (swap with your real assets)
import reviewsOnSwishma from "@/assets/helpcenter/reviewsOnSwishma.svg";
import reviewsOnSwishmaMaskBack from "@/assets/helpcenter/reviewsOnSwishmaMaskBack.svg";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";

export default function ReviewsOnSwishma() {
  const stepsList2 = [
    "Only jobs completed through swish.ma can be reviewed. We confirm that reviews are written after the job has been finished.",
    "It is not allowed to post a job that has already been completed, just to leave a review.",

    "Companies are notified as soon as a review is published on their profile and may respond. A full reply will be displayed alongside the review. Short responses (such as “Thank you”) are sent directly to the customer but are not made public.",
    "If a review is based on a misunderstanding or an issue resolved directly between the customer and the company, the customer can update their review. The company will be notified of the change.",
    "No company can buy their way out of negative reviews.",
    "Customers must use their full real name when leaving a review.",
    "Reviews or replies that are clearly offensive, abusive, discriminatory, or violate Moroccan law will not be published.",
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="Reviews on swish.ma"
        description="Reviews are one of the most important factors for customers when choosing a company — and a core part of swish.ma. That’s why we have strict controls and clear rules for all reviews on our platform. 
"
        heroImg={reviewsOnSwishma}
      />

      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        <section className="scroll-mt-20  py-6 md:py-10">
          <h3 className="text-2xl md:text-3xl font-bold text-blackPrimary">
            Good reviews mean good business
          </h3>
          <p className="mt-4 text-base md:text-lg text-blackSecondary">
            We know that companies with positive reviews on swish.ma have a much
            easier time attracting new customers. That’s why it is essential
            that reviews are genuine and written by real customers.
          </p>

          <div className="py-5 my-8 relative">
            <img
              src={reviewsOnSwishmaMaskBack}
              alt="section bg"
              className="absolute max-w-full -top-7 left-0 -z-10"
            />
            <p className=" mx-auto text-base leading-loose text-center">
              Most people looking to hire a company read reviews on swish.ma
              before making their choice. For that reason, we always recommend
              that you ask your customer to leave a review once the job is
              completed.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          All reviews are verified
        </h3>
        <p className="mt-6 text-base md:text-lg text-blackSecondary">
          Everyone who submits a review on swish.ma must verify their account.
          This ensures the credibility of reviews and helps us prevent fake or
          misleading feedback.
        </p>
        <p className="mt-6 text-base md:text-lg text-blackSecondary">
          Verification also allows us to identify individuals or companies that
          attempt to operate outside the rules and remove them from the
          platform. Digital tracking makes it easier to confirm that customers
          and companies are who they claim to be.
        </p>
      </div>

      <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
        <h3 className="text-lg md:text-xl font-semibold text-foreground">
          Manual control of reviews
        </h3>
        <p className="mt-4 text-base md:text-lg text-blackSecondary">
          Unfortunately, some companies attempt to create fake reviews. We
          consider this a serious violation, and that’s why we apply strict
          manual checks.
        </p>
        <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
          <li>
            Our support team reviews all evaluations before they are published
          </li>
          <li>
            Our technical systems automatically flag suspicious activity for
            further investigation.
          </li>
        </ul>
      </div>

      <div className="mt-12 md:mt-16 max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          All reviews are verified
        </h3>
        <ul className="mt-4 space-y-3 list-disc pl-5 text-muted-foreground">
          {stepsList2.map((check, index) => (
            <li key={index}>{check}</li>
          ))}
        </ul>
      </div>

      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        <section className="scroll-mt-20  py-6 md:py-10">
          <div className="py-5 my-8 relative">
            <img
              src={reviewsOnSwishmaMaskBack}
              alt="section bg"
              className="absolute max-w-full top-0 left-0 -z-10"
            />
            <h3 className="text-xl md:text-2xl text-center font-bold text-blackPrimary mb-3">
              Zero tolerance for cheating
            </h3>
            <p className=" mx-auto text-base leading-loose text-center">
              Most people looking to hire a company read reviews on swish.ma
              before making their choice. For that reason, we always recommend
              that you ask your customer to leave a review once the job is
              completed.
            </p>
          </div>
        </section>
      </div>

      <Separator className="my-16" />

      <RelevantArticle />
    </div>
  );
}
