import windowDoorsBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";

export default function WindowDoors() {
  const windowDoorsHeaderContent = {
    title: "Are you need Windows & Door?",
    description:
      "Our window and door services specialize in installation, repair, and replacement, ensuring enhanced security, energy efficiency, and aesthetic appeal. Whether upgrading to modern designs or fixing existing issues, we provide high-quality solutions tailored to your needs, improving both function and style for your home or business.",
    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  const solarHeaterServiceList = [
    "Measuring Tape & Laser Levels",
    "Utility Knives & Saws",
    "Hammer & Nail Guns",
    "Screwdrivers & Drills",
    "Window & Door Frames",
    "Glass Cutters",
    "Weatherstripping Tools",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={windowDoorsHeaderContent}
          bannerImg={windowDoorsBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal mt-8">
              The Window & Door Work service focuses on the professional
              installation, repair, and replacement of windows and doors for
              residential, commercial, and industrial properties. Whether it's
              for aesthetic improvements, increased security, or energy
              efficiency, this service ensures that every window and door is
              installed correctly, functions smoothly, and meets the specific
              needs of the property.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How the Window & Door Work Service Works
            </h4>

            <p className="text-sm leading-normal">
              The process begins with a consultation where the customer’s needs,
              preferences, and budget are discussed. Whether it’s for new
              construction, renovations, or repairs, this step ensures the
              correct type of windows and doors are selected. A professional
              technician visits the property to evaluate the existing windows
              and doors, noting any issues such as drafts, security concerns, or
              wear and tear. This visit helps determine if the windows or doors
              need replacement, repair, or installation of new models.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Window & Door Selection
            </h4>
            <p className="text-sm leading-normal">
              Depending on the property’s style, location, and energy efficiency
              needs, a range of materials is available, including wood, vinyl,
              fiberglass, aluminum, and steel. Each material offers specific
              advantages in terms of aesthetics, durability, and insulation.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Style & Functionality
            </h4>
            <p className="text-sm leading-normal">
              Customers can choose from various styles, such as single-hung,
              double-hung, sliding, casement, and bay windows. For doors,
              options include entry doors, patio doors, sliding glass doors, and
              French doors. The style selected will depend on the desired look
              and functionality.
            </p>
            <p className="text-sm leading-normal mt-8">
              Old windows are carefully removed, and new ones are installed
              securely with proper sealing and insulation. Trim and finishing
              work are done for a clean, polished look. Old doors and frames are
              removed, and new doors are installed with precision, ensuring
              proper alignment and smooth operation. Weatherproofing is done to
              ensure insulation and protection from outside elements.
            </p>

            <CanHelpYou
              title="General Tools"
              electricianServiceList={solarHeaterServiceList}
            />

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you need Window & Door Work?
              </h4>
              <p className="text-sm leading-normal font-medium">
                Register the job with swish.ma
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
