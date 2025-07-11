import SectionHeading from "@/components/common/SectionHeading";
import CustomVideoPlayer from "./CustomVideoPlayer";

const steps = [
  {
    number: 1,
    title: "Register your business",
    description:
      "Enter your company name and phone number, and we’ll help you set up a free test profile.",
  },
  {
    number: 2,
    title: "Access relevant jobs near you",
    description:
      "Get access to all the jobs within your industry and in areas of your choice.",
  },
  {
    number: 3,
    title: "Win jobs and get good evaluations",
    description:
      "Contact customers, win jobs and get good evaluations that will be visible on your company’s profile page.",
  },
];



export default function GetStarted() {
  return (
  <section className="py-12 lg:py-24 bg-white">
  <div className=" container mx-auto  flex flex-col gap-14 items-center">
    <SectionHeading title="Get started now" />

    <div className="flex flex-col md:flex-row items-center gap-10 w-full">
      {/* Left - Video */}
      <div className="w-full md:w-1/2">
        <video
          src="/video-placeholder.mp4" // Replace with actual video path
          controls
          className="w-full h-auto rounded-lg shadow-md"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <CustomVideoPlayer /> */}



      {/* Right - Steps */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        {steps.map(({ number, title, description }) => (
          <div key={number} className="flex items-start gap-4">
            <span className="bg-[#F5F5F5] text-[#0F1C2E] font-semibold px-3 py-1 rounded-full">
              {number}
            </span>
            <div>
              <h3 className="font-semibold text-[#0F1C2E]">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
}
