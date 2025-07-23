import windowDoorsBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import SketchWithText from "../SketchWithText";

export default function FloorLaying() {
  const floorLayingHeaderContent = {
    title: "Do you need a Floor Laying",
    description:
      "Our Floor Laying service provides expert installation of hardwood, laminate, vinyl, tile, and carpet flooring. We handle everything from site preparation to final finishing, ensuring precise, durable, and aesthetically pleasing results. This guide covers the process, tools, techniques, and skilled craftsmen involved.",
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
          headerContent={floorLayingHeaderContent}
          bannerImg={windowDoorsBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal mt-8">
              Our Floor Laying service offers expert solutions for installing a
              wide variety of flooring types to transform any space. Whether
              it’s hardwood, laminate, vinyl, tile, or carpet, we deliver
              precise, durable, and aesthetically appealing installations. From
              site preparation to the final finishing touches, we handle every
              aspect to ensure a seamless and high-quality result. This guide
              outlines the step-by-step process of floor laying, the tools and
              techniques used, and the skilled craftsmen involved.
            </p>

            <SketchWithText
              description={
                "To get an accurate price, we recommend contacting various flooring contractors and scheduling a site visit. This will allow them to provide a professional assessment of the project requirements and determine the best approach for your flooring installation."
              }
            />

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How Floor Laying Service Works
            </h4>
            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Initial Discussion
            </h4>
            <p className="text-sm leading-normal">
              The first step in the process is to discuss the needs and
              preferences of the customer. During this consultation, the
              appropriate flooring material is chosen based on factors like
              aesthetics, functionality, traffic levels, and budget.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Site Visit
            </h4>
            <p className="text-sm leading-normal">
              A team member visits the site to assess the condition of the floor
              and surrounding area. The subfloor is examined for stability,
              levelness, and any existing damage. The subfloor is the base that
              supports the flooring material, so its condition is critical for a
              successful installation.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Customized Recommendations
            </h4>

            <p className="text-sm leading-normal">
              Based on the assessment, tailored recommendations for flooring
              materials, installation methods, and any preparatory work required
              are provided.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Removal of Existing Flooring
            </h4>
            <p className="text-sm leading-normal">
              If replacing existing flooring, the old material—whether it's
              carpet, vinyl, tile, or hardwood—is carefully removed. This
              process includes lifting, cutting, and disposing of the old
              flooring, ensuring that the subfloor is ready for new materials.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Subfloor Inspection
            </h4>
            <p className="text-sm leading-normal">
              The subfloor (the layer directly under the flooring material) is
              thoroughly examined. It must be level, clean, and solid. Any
              imperfections or damages—such as moisture, cracks, or
              unevenness—are addressed. For example, if there’s moisture in a
              basement floor, additional moisture-resistant barriers might be
              added before installing new flooring.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Tile Flooring
            </h4>
            <p className="text-sm leading-normal">
              Ceramic, porcelain, and stone tiles offer a wide variety of
              designs, colors, and textures. Tile is extremely durable and ideal
              for high-moisture areas like kitchens and bathrooms. Tiles may
              need to be cut to fit specific dimensions and layouts.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Vinyl Flooring
            </h4>
            <p className="text-sm leading-normal">
              Vinyl is a cost-effective, versatile flooring solution available
              in sheets, tiles, or planks. It's water-resistant, easy to
              maintain, and comes in a wide variety of designs, including
              options that mimic natural wood or stone
            </p>
            <p className="text-sm leading-normal">
              Hardwood flooring can be installed using three main
              methods—nailing, gluing, or floating (where the planks interlock
              and are laid over an underlayment). The method chosen fits the
              subfloor and the type of hardwood being installed.
            </p>
            <p className="text-sm leading-normal">
              Hardwood requires expansion gaps along the perimeter to account
              for changes in temperature and humidity. These gaps are hidden by
              baseboards or molding after installation.
            </p>
            <p className="text-sm leading-normal">
              If unfinished hardwood is chosen, the floor will be sanded,
              stained (if desired), and sealed to achieve a smooth, durable
              surface. The finishing process can also include applying
              protective coatings such as polyurethane.
            </p>
            <p className="text-sm leading-normal">
              Masons are highly skilled professionals who specialize in the
              installation of brick, stone, block, and other masonry materials.
              Their work requires precision in laying each unit with mortar to
              form strong, stable, and visually appealing structures. Masons are
              responsible for ensuring the structural integrity and aesthetic
              quality of the work, including performing intricate designs and
              ensuring that materials are set correctly.
            </p>
            <h4 className="text-xl font-semibold text-primaryDark mt-4 mb-4">
              Installation Process
            </h4>
            <p className="text-sm leading-normal">
              Hardwood flooring can be installed using three main
              methods—nailing, gluing, or floating (where the planks interlock
              and are laid over an underlayment). The method chosen fits the
              subfloor and the type of hardwood being installed.
            </p>
            <p className="text-sm leading-normal">
              Once the installation is complete, a final inspection is conducted
              to ensure the flooring is correctly installed, level, and free of
              imperfections. Any areas of concern are addressed, and necessary
              adjustments are made. Detailed care instructions for maintaining
              the flooring are provided to ensure its longevity.
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you need Masonry & Concrete Work?
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
