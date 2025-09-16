import NoteImg from "@/assets/images/note-1.svg";
import MessageImg from "@/assets/images/message-2.svg";
import BadgeImg from "@/assets/images/badge-3.svg";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProcessNewOne() {
  return (
    <section className=" py-20 lg:py-24">
      <div className="container flex flex-col gap-8 lg:gap-14 items-center">
        <SectionHeading title="How Does swish.ma works?" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex gap-2 justify-center items-center">
              <img src={NoteImg} alt="Note Image" className="max-w-full" />

              <h5 className="text-lg font-semibold text-primaryDark">
                Describe the project
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              Tell us what you need help with, and we will send out the project
              to relevant companies.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex gap-2 items-center justify-center">
              <img
                src={MessageImg}
                alt="Message Image"
                className="max-w-full"
              />

              <h5 className="text-lg font-semibold text-primaryDark">
                Recieve Offer
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              After a short time, you will receive non-binding offers from
              companies and professionals who will help you.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex gap-2 items-center justify-center">
              <img src={BadgeImg} alt="Badge Image" className="max-w-full" />

              <h5 className="text-lg font-semibold text-primaryDark">
                Get Started!
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              The right company for the job. When the job is done, you can post
              an evaluation.
            </p>
          </div>
        </div>

        <Link to="/post-job">
          <Button
            size="lg"
            className="px-12 py-6 rounded-md text-base font-semibold"
          >
            Post a job
          </Button>
        </Link>
      </div>
    </section>
  );
}
