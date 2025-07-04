import windowDoorsBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import SketchWithText from "../SketchWithText";

export default function Renovation() {
  const renovationHeaderContent = {
    title: "Are you need Full Renovation / Buildout?",
    description:
      "Our full renovation and buildout services transform your space with expert design and construction. From updating interiors to complete structural changes, we handle every aspect of the project. Whether it’s a home makeover or a commercial buildout, our team delivers high-quality results tailored to your vision, ensuring functionality and style in every detail.",
    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  const renovationServiceList = [
    "Demolition Tools",
    "Power Tools",
    "Concrete Mixers",
    "Paint Sprayers & Brushes",
    "Flooring Installers",
    "Sanding & Polishing Equipment",
    "Pipe Wrenches & Soldering Kits",
    "Electrical Wiring Tools",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={renovationHeaderContent}
          bannerImg={windowDoorsBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal mt-8">
              The Full Renovation and Buildout Service provides comprehensive
              solutions for transforming and enhancing residential, commercial,
              or industrial spaces. Whether it’s a complete renovation of an
              existing property or a buildout of a new one, this service covers
              everything from design and planning to construction and finishing
              touches. With expertise in creating functional, aesthetically
              pleasing, and modern spaces, every project is tailored to meet the
              unique needs of the client, ensuring long-term satisfaction.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How the Full Renovation and Buildout Service Work
            </h4>
            <p className="text-sm leading-normal">
              The process begins with a detailed consultation to understand the
              client’s vision, goals, and requirements for the space. Whether
              it's updating the kitchen, adding rooms, or completely
              reconfiguring an office layout, the project scope is clearly
              defined. A professional design team works closely with the client
              to create a layout that optimizes the space for both aesthetics
              and functionality. The team ensures that the design aligns with
              the client’s budget and timeline, providing cost-effective
              solutions while maintaining quality.
            </p>
            <p className="text-sm leading-normal">
              A thorough inspection of the existing property is carried out to
              assess the current structure and identify any potential issues
              that need to be addressed. This includes reviewing the foundation,
              plumbing, electrical systems, and any structural integrity
              concerns. If required, the team ensures that all necessary permits
              are obtained before work begins. Compliance with local building
              codes and regulations is strictly followed throughout the project.
              If the renovation requires the removal of existing structures,
              walls, or features, demolition is performed in a safe and
              controlled manner. The area is carefully cleared of debris to
              ensure a clean foundation for the new buildout or renovation.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Design and Buildout
            </h4>
            <p className="text-sm leading-normal">
              If the renovation involves adding new rooms, floors, or other
              structures, experienced builders take care of the construction.
              Whether it's installing new walls, adding doors and windows, or
              creating new spaces, the buildout is performed with precision and
              attention to detail.
            </p>
            <p className="text-sm leading-normal">
              This phase can include installing new plumbing, electrical
              systems, HVAC, and insulation to enhance the functionality and
              energy efficiency of the space. Customization of Layout: During
              the buildout, adjustments can be made to the floor plan, such as
              moving walls, adding storage spaces, or expanding rooms. Custom
              cabinetry, countertops, and fixtures can be integrated to suit the
              client’s needs.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Key Aspects of the Full Renovation and Buildout Service
            </h4>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Customized Designs and Layouts:
            </h4>
            <p className="text-sm leading-normal">
              This phase can include installing new plumbing, electrical
              systems, HVAC, and insulation to enhance the functionality and
              energy efficiency of the space. Customization of Layout: During
              the buildout, adjustments can be made to the floor plan, such as
              moving walls, adding storage spaces, or expanding rooms. Custom
              cabinetry, countertops, and fixtures can be integrated to suit the
              client’s needs.
            </p>
            <p className="text-sm leading-normal">
              Every aspect of the renovation and buildout is carried out by
              highly skilled craftsmen, including builders, electricians,
              plumbers, and painters. These professionals ensure that the
              project is completed to the highest standards, with meticulous
              attention to detail.
            </p>

            <p className="text-sm leading-normal">
              The entire project is managed from start to finish by an
              experienced project manager. This ensures that timelines are met,
              budgets are adhered to, and any issues are promptly addressed.
            </p>
            <p className="text-sm leading-normal">
              The service incorporates sustainable building practices and
              energy-efficient technologies, helping to reduce environmental
              impact and lower utility costs. This may include energy-efficient
              lighting, insulation, and HVAC systems.
            </p>
            <p className="text-sm leading-normal">
              Only the highest quality materials are used to ensure durability
              and longevity. Whether it’s flooring, countertops, fixtures, or
              structural materials, everything is selected to withstand the test
              of time.
            </p>

            <CanHelpYou
              title="Tools & Equipment Used for Renovation and Buildout"
              electricianServiceList={renovationServiceList}
            />

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
               Are you need Full Renovation & Buildout?
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
