import { Link } from "react-router-dom";
import helpCenterImage1 from "@/assets/helpcenter/helpCenterImage1.svg";
import helpCenterImage2 from "@/assets/helpcenter/helpCenterImage2.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";

const articles = [
  {
    title: "How to write a good job description!",
    href: "/articles/help-center/write-good-job-description",
    img: helpCenterImage2,
    alt: "Open notebook with color samples and sketches",
  },
  {
    title: "Frequently asked questions!",
    href: "/articles/help-center/faq",
    img: helpCenterImage1,
    alt: "Worker holding a speech bubble",
  },
  {
    title: "How does Swish.ma work?",
    href: "/articles/help-center/how-swish-works",
    img: helpCenterImage3,
    alt: "Contractors looking at a tablet",
  },
];

interface Article {
  title: string;
  href: string;
  img: string;
  alt: string;
}

// { articles }: { articles: Article[] }
export function RelevantArticle() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Relevant article
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles?.map((a) => (
          <Link key={a.href} to={a.href} className="group block">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={a.img}
                alt={a.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-sm md:text-base font-medium text-foreground group-hover:underline">
              {a.title}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
}

interface HowWorksArticleProps {
  heading: string;
  description: string;
  heroImg: string;
}

export function HowWorksArticle({
  heading,
  description,
  heroImg,
}: HowWorksArticleProps) {
  return (
    <>
      {" "}
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
        <p className="text-secondary font-semibold">Getting started guide</p>
        <h1 className="text-2xl md:text-4xl  font-bold tracking-tight">
          {heading}
        </h1>
        <p className=" text-muted-foreground">{description}</p>
      </div>
      {/* Hero */}
      <div className="mt-12 md:mt-16">
        <img
          src={heroImg}
          alt="Contractor working on site"
          className="w-11/12 md:w-3/4 lg:w-2/3 rounded-xl shadow-sm object-cover mx-auto"
        />
      </div>
    </>
  );
}
