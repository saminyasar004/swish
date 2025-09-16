import registerBusinessProfile from "@/assets/providerIcon/registerBusinessProfile.svg";
import registerJobs from "@/assets/providerIcon/registerJobs.svg";
import registerWin from "@/assets/providerIcon/registerWin.svg";
import MessageImg from "@/assets/images/message-2.svg";
import BadgeImg from "@/assets/images/badge-3.svg";
import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ButtonProvider } from "@/components/ui/buttonProvider";

export default function ProcessRegister() {
  return (
    <section className=" py-20 lg:py-28 bg-providerSecondary">
      <div className="container flex flex-col gap-8 lg:gap-14 items-center">
        <SectionHeading title="How Does swish.ma works?" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <img
                src={registerBusinessProfile}
                alt="Register Business Profile"
                className="max-w-full"
              />

              <h5 className="text-lg font-semibold text-providerBlackSecondary">
                Register your business
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              Tell us what you need help with, and we will send out the project
              to relevant companies.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <img
                src={registerJobs}
                alt="Register Business Profile"
                className="max-w-full"
              />

              <h5 className="text-lg font-semibold text-providerBlackSecondary">
                Access relevant jobs near you
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              Get access to all the jobs within your industry and in areas of
              your choice.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 text-center">
            <div className="w-full flex flex-col gap-2 justify-center items-center">
              <img
                src={registerWin}
                alt="Register Business Profile"
                className="max-w-full"
              />

              <h5 className="text-lg font-semibold text-providerBlackSecondary">
                Win jobs and get good evaluations
              </h5>
            </div>

            <p className="text-base text-[##404C67]">
              Contact customers, win jobs and get good evaluations that will be
              visible on your company's profile page.
            </p>
          </div>
        </div>

        <Link to="/post-job">
          <ButtonProvider
            size="lg"
            className="px-12 py-6 rounded-md text-base font-semibold"
          >
            Post a job
          </ButtonProvider>
        </Link>
      </div>
    </section>
  );
}
