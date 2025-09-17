import { Separator } from "@/components/ui/separator";
import step1Img from "@/assets/helpcenter/helpCenterImage2.svg";
import step2Img from "@/assets/helpcenter/helpCenterImage3.svg";
import { HowWorksArticle, RelevantArticle } from "./Resuable";

export default function WriteGoodJobDescription() {
  const steps = [
    {
      n: 1,
      title: "Relevant documentation and photos",
      body: "Do you have floor plans, inspection reports, or sketches? Attach them to your description. Adding photos of the room or area where the work will take place also helps the company understand your needs correctly.",
      img: step1Img,
      alt: "Posting a job card illustration",
    },
    {
      n: 2,
      title: "Exact measurements of the project",
      body: "Clear measurements give the company a better understanding of the scope of work. For example, if you need painting, specify how many walls and their size. If you want to build a terrace, include the dimensions you have in mind.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 3,
      title: "Plans for materials",
      body: "If you already know which materials you want, or if you plan to provide them yourself, mention this in your description. Otherwise, specify that the company should include materials in their offer.",
      img: step2Img,
      alt: "Offer list illustration",
    },
    {
      n: 4,
      title: "When the work should be done",
      body: "Include your preferred timeframe for the project. This allows companies to check their availability and confirm whether they can complete the job within your schedule. ",
      img: step2Img,
      alt: "Offer list illustration",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 md:py-16">
      {/* Title + Subtitle */}

      <HowWorksArticle
        heading="How to write a good job description 
"
        description="Have you posted a job but received few or no offers because your description lacked important details? Don’t worry — you can always repost your job with a clearer description. Here’s what a good job description should include, and why it matters. 
"
        heroImg={step2Img}
      />

      {/* Steps */}
      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        <section className="scroll-mt-20">
          <h3 className="text-xl md:text-2xl font-semibold">
            Tell the company what you need
          </h3>
          <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">
            A detailed job description is essential so that the company
            understands what needs to be done, how long it might take, and can
            provide an accurate price estimate. The better your description, the
            more precise the offers will be. This makes it easier for you as a
            customer to plan and keep track of your project.
          </p>
        </section>
      </div>

      <div className="max-w-3xl mx-auto mt-12 md:mt-16 space-y-10 md:space-y-14 lg:space-y-16">
        <section className="scroll-mt-20">
          <h3 className="text-xl md:text-2xl font-semibold">
            What to include in your job description
          </h3>
        </section>
      </div>
      <div className="max-w-3xl mx-auto mt-6 md:mt-8 space-y-3 md:space-y-4">
        {steps.map((s) => (
          <section key={s.n} className="scroll-mt-20">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm md:text-base text-[#5D5D5D]">{s.body}</p>
          </section>
        ))}
      </div>

      <Separator className="my-16" />

      <RelevantArticle />
    </div>
  );
}
