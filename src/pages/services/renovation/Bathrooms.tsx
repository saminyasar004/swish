import windowDoorsBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import SketchWithText from "../SketchWithText";

export default function Bathrooms() {
  const bathroomsHeaderContent = {
    title: "Are you going to renovate your bathroom?",
    description:
      "Whether you are building a new bathroom, completely renovating or redecorating your bathroom, at Mittanbud you will find experienced craftsmen who can help you make your bathroom dream a reality.",
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
          headerContent={bathroomsHeaderContent}
          bannerImg={windowDoorsBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              What affects the price when renovating your bathroom?
            </h4>

            <p className="text-sm leading-normal mt-8">
              The cost of a bathroom project will naturally depend on whether
              you are renovating or redecorating the bathroom. The size of the
              bathroom and the extent of the work will determine both the total
              cost and the time required.
            </p>
            <p className="text-sm leading-normal mt-8">
              What determines the price of a new bathroom is primarily whether
              you choose surface renovation or a complete renovation of the
              bathroom.
            </p>
            <p className="text-sm leading-normal mt-8">
              Factors such as the choice of materials for floors, walls and
              fixtures will also affect the total price of a new bathroom.
            </p>

            <SketchWithText
              description={
                "To get an accurate price, we recommend that you contact various general contractors and invite them to come for a visit. This will give you a professional assessment of the condition of the bathroom and what needs to be done."
              }
            />

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Should the bathroom be renovated or completely renovated?
            </h4>
            <p className="text-sm leading-normal">
              The biggest price driver when renovating your bathroom is whether
              you choose a surface renovation or a complete renovation. If you
              have a well-functioning bathroom in need of an upgrade, surface
              renovation will often be a good and less expensive option.
            </p>
            <p className="text-sm leading-normal">
              A complete bathroom renovation will include the invisible work,
              such as replacing and/or moving pipes, spiking floors, installing
              new membranes and new heating cables. In addition, there will be
              new surfaces and new bathroom fixtures.
            </p>
            <p className="text-sm leading-normal">
              If walls are torn down and floors are re-laid, the project takes
              longer. It is common to replace the membrane and do pipe and drain
              work at the same time, which is also among the most expensive
              parts of a bathroom project.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Connection to water and sewage systems increases the price
            </h4>
            <p className="text-sm leading-normal">
              If you want a shower in a bathroom without a drain, a drain must
              be installed and connected to the sewer pipe. This is extra work.
              If you are moving or building a bathroom far from existing pipes,
              it will increase the cost.
            </p>
            <p className="text-sm leading-normal">
              Then you have to count on laying water pipes and establishing
              ventilation, among other things. If it is very far from the pipe
              systems that are already in place, you will also have to have a
              new pumping system for the drain. This will cost more and require
              more work.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Key Aspects of the Full Renovation and Buildout Service
            </h4>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              The condition of the pipes and electrical system in the bathroom
              can affect the price.
            </h4>
            <p className="text-sm leading-normal">
              Condition and age are also important factors when it comes to the
              total cost of a complete renovation or refurbishment of a
              bathroom. Today's bathrooms are subject to strict requirements,
              and plumbing and electrical installations often need to be updated
              to meet today's bathroom standards.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              The choice of fixtures and surfaces in the bathroom affects the
              price
            </h4>
            <p className="text-sm leading-normal">
              The price of bathroom furniture varies with design, finish and
              installation. The choice of tap, shower, bathtub, drain, washbasin
              and toilet affects the total price. The same applies to surfaces –
              exclusive tiles cost more than standard tiles, which in turn are
              more expensive than bathroom paint.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Always sign a contract and require documentation for bathroom
              renovations
            </h4>
            <p className="text-sm leading-normal">
              Bathrooms are considered wet rooms, and strict requirements are
              placed on their design – especially with regard to insurance in
              case of damage. It is also often the most expensive room in the
              home to renovate, with the risk of additional costs.
            </p>

            <p className="text-sm leading-normal">
              The contract should require that the work be documented. In the
              event of a leak, it is important to show that the job was done
              correctly and by qualified professionals. This makes it easier for
              the insurance company to process the case.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              We have simplified documentation together with Boligmappa
            </h4>
            <p className="text-sm leading-normal">
              which makes it easy and efficient for companies on the service to
              document jobs. All you need to do is request documentation after
              the job is done. The craftsman will then place all documents in
              your own Housing Folder.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              What craftsmen do you need to renovate a bathroom?
            </h4>
            <p className="text-sm leading-normal">
              When renovating or completely renovating a bathroom. They work
              with installations such as water and sewage pipes, membranes, and
              install showers, sinks, toilets and bathtubs.
            </p>
            <p className="text-sm leading-normal">
              If you are going to pour a floor, you will need both bricklyar and
              plumber who must cooperate for the correct slope towards the
              drain. When it comes to tiling, a plumber can often do this, have
              a slightly lower hourly rate – here there is often a trade-off
              between price and availability.
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you going to renovate the bathroom?
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
