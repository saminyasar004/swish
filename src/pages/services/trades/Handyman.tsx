import locksmithBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";

export default function Handyman() {
  const locksmithHeaderContent = {
    title: "Do you need Handyman?",
    description:
      "Our handyman services cover a wide range of home repairs, from fixing leaks to furniture assembly. Our skilled professionals ensure quality work, keeping your home in top condition.",

    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best",
    ],
  };

  // Content Section

  const locksmithServiceList = [
    "Lock Picks & Tension Wrenches",
    "Key Cutters",
    "Drills & Extractors",
    "Key Programming Tools",
    "Lock Lubricants & Cleaning Solutions",
    "Digital Tools",
    "Protective Gloves & Eye Protection",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={locksmithHeaderContent}
          bannerImg={locksmithBannerImg}
        />

        {/* // Content Section */}

        <div className="w-full grid grid-cols-3 py-5 mt-8">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal">
              Our handyman services provide expert solutions for a variety of
              home repairs and maintenance tasks. Whether you need plumbing
              fixes, electrical work, furniture assembly, or general repairs,
              our skilled professionals are ready to help. We ensure quality
              workmanship, taking care of the small tasks so you don’t have to.
              A Handyman Service provides a wide range of professional, reliable
              solutions for everyday household and commercial maintenance needs.
              From small repairs to large installations, a handyman can tackle a
              variety of tasks with expertise and efficiency. Whether it's
              fixing leaks, installing fixtures, or assembling furniture, this
              service is designed to meet the diverse needs of homeowners and
              businesses.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              How the Handyman Service Works
            </h4>

            <p className="text-sm leading-normal">
              he process begins with understanding the customer’s specific
              needs. Whether it's a repair, installation, or maintenance task, a
              handyman will discuss the details to ensure clarity.
            </p>
            <p className="text-sm leading-normal">
              For certain tasks, a handyman may visit the site to assess the
              scope of work. This visit helps to determine the tools, materials,
              and time required for the job.
            </p>
            <p className="text-sm leading-normal">
              After the initial consultation and assessment, the handyman will
              provide a detailed plan, including the timeline for completion and
              any materials or equipment needed. Once agreed upon, a convenient
              time for the service will be scheduled.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-6">
              General Home Repairs
            </h4>
           

            <h4 className="text-xl font-semibold text-primaryDark ">
              Fixing Leaks
            </h4>
            <p className="text-sm leading-normal">
            Plumbing leaks, faucet replacements, or water damage repair.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark ">
             Drywall Patching & Painting
            </h4>
            <p className="text-sm leading-normal">
           Repairing holes, cracks, and finishing walls for a smooth surface.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark ">
             Electrical Repairs
            </h4>
            <p className="text-sm leading-normal">
           Replacing light fixtures, outlets, switches, or troubleshooting electrical problems.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark ">
             Small Appliance Repairs
            </h4>
            <p className="text-sm leading-normal">
           Fixing or installing kitchen and home appliances, such as dishwashers, refrigerators, or ovens.
            </p>


            <p className="text-sm leading-normal mt-8">
             Tasks like gutter cleaning, power washing, or preparing outdoor spaces for different seasons.Fixing sticking doors, replacing door locks, or installing weather stripping to improve energy efficiency. Fixing cracked tiles, re-grouting bathroom or kitchen surfaces, and ensuring proper sealing to prevent water damage.
            </p>

            <p className="text-sm leading-normal">
             After completing the task, the handyman will perform a final inspection to ensure everything is working correctly, securely installed, and aesthetically pleasing. If required, the customer is asked to review the work to ensure satisfaction. Any last-minute adjustments or refinements will be made. Once the work is completed, the handyman will tidy up the area, removing any debris, leftover materials, or packaging associated with the job. The space is left clean and ready to use.
            </p>

            <p className="text-sm leading-normal mt-8">
              For precise measurements and to ensure that everything is installed straight and level. Essential for drilling holes and screwing fixtures into place. Used for driving nails, screws, or assembling parts. Used for cutting materials like drywall, insulation, and carpet.
            </p>
            <p className="text-sm leading-normal">
             A general handyman is skilled in a wide variety of tasks, including repairs, installations, and maintenance. They can handle most home or office improvements and basic technical repairs.For more specific tasks, specialized handymen such as electricians, plumbers, or painters may be called upon to ensure professional work and compliance with local regulations.In larger projects, assistants help with material handling, prep work, and general support during the completion of tasks.
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
               Are you need Handyman?
              </h4>
              <p className="text-sm leading-normal font-medium">
                Register the job with Swish.ma
              </p>

              <div className="">
                <Link to="/">
                  <Button size="sm">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
