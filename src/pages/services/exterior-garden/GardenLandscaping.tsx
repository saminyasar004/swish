import windowDoorsBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import SketchWithText from "../SketchWithText";

export default function GardenLandscaping() {
  const GardenLandscapingHeaderContent = {
    title: "Do you need help with gardening and landscaping?",
    description:
      "Our garden and landscaping services offer expert design and installation to enhance the beauty and functionality of your outdoor space. From planting and lawn care to hardscaping and custom designs, we create personalized solutions tailored to your needs. Let us transform your garden into a stunning, sustainable retreat.",
    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  const gardenLandscapingServiceList = [
    "Shovels & Spades",
    "Rakes & Hoes",
    "Wheelbarrows",
    "Pruning Shears & Hedge Trimmers",
    "Garden Forks",
    "Concrete Mixers",
    "Paver Cutters & Saws",
    "Drill & Plumbing",
    "Landscape Lighting Kits",
    "Gloves & Protective Gear",
    "Eye Protection",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={GardenLandscapingHeaderContent}
          bannerImg={windowDoorsBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal mt-8">
              Garden and landscaping services focus on transforming outdoor
              spaces into beautiful, functional environments. This includes
              everything from designing custom landscapes, planting trees and
              shrubs, and installing lawns, to hardscaping elements like patios,
              walkways, and retaining walls. Expert landscaping enhances curb
              appeal, promotes sustainability, and creates outdoor areas for
              relaxation and entertainment. Whether it's a small garden makeover
              or a large-scale landscaping project, these services aim to
              elevate the natural beauty of any property
            </p>

            <SketchWithText description="To get an accurate price, we recommend contacting multiple garden and landscaping contractors and inviting them for a site visit. This will allow them to assess the project requirements and determine what needs to be done." />

            <p className="text-sm leading-normal">
              The Garden & Landscaping service offers expert solutions for
              transforming outdoor spaces into beautiful, functional, and
              sustainable environments. Whether it’s designing a garden layout,
              installing hardscaping features like patios and walkways, or
              maintaining lush greenery, every aspect is handled with
              professionalism and attention to detail. This service covers
              everything from design consultation to the installation of plants,
              structures, and finishing touches that enhance the overall appeal
              of outdoor areas.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How the Garden & Landscaping Service Works
            </h4>
            <p className="text-sm leading-normal">
              The process begins with a discussion to understand the client’s
              vision for their outdoor space. Factors such as preferred styles,
              functional needs (e.g., space for outdoor entertainment,
              children’s play areas, or vegetable gardens), and budget are
              explored.
            </p>
            <p className="text-sm leading-normal">
              A detailed site survey is conducted, taking into consideration the
              layout, existing features, topography, soil quality, and exposure
              to sunlight. This helps in crafting a tailored design that works
              with the natural elements of the site.
            </p>

            <p className="text-sm leading-normal">
              Based on the consultation and site evaluation, a custom landscape
              design plan is developed. The design includes layout diagrams,
              plant selection, hardscaping features (patios, walkways, retaining
              walls), and water features, along with a clear timeline and
              estimated cost.
            </p>
            <p className="text-sm leading-normal">
              Before any installation work begins, the site is cleared of
              debris, old plants, and structures that will not be part of the
              new design. This includes removing weeds, roots, and unwanted
              materials.
            </p>
            <p className="text-sm leading-normal">
              Soil health plays a significant role in the success of plant
              growth. Soil tests are conducted to assess its pH, drainage, and
              nutrient levels. Based on the results, soil amendments (such as
              compost, fertilizers, or organic matter) are added to improve soil
              fertility and structure.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Planting and Installation
            </h4>
            <p className="text-sm leading-normal">
              The right plants are chosen based on the local climate, soil
              conditions, and aesthetic preferences. Native plants are often
              selected for their adaptability and low maintenance, while
              flowering plants, shrubs, trees, and grass varieties are included
              to add visual interest and diversity.
            </p>
            <p className="text-sm leading-normal">
              Durable and aesthetically pleasing materials such as natural
              stone, pavers, or gravel are used to construct patios, walkways,
              or garden paths. These features not only improve the accessibility
              of the garden but also add structure and elegance.
            </p>
            <p className="text-sm leading-normal">
              For areas with slopes or uneven ground, retaining walls are
              installed to prevent erosion and create multi-level gardens. These
              walls are built from stone, brick, or timber, adding both
              functionality and visual appeal.
            </p>

            <p className="text-sm leading-normal">
              Automatic irrigation systems are installed to ensure plants are
              watered efficiently and consistently. Sprinklers, drip irrigation,
              or soaker hoses are used based on the garden layout and water
              requirements of the plants.
            </p>

            <p className="text-sm leading-normal">
              Outdoor lighting is installed to highlight features like pathways,
              trees, water features, and garden beds. This enhances both the
              aesthetic and safety of the outdoor space, allowing it to be
              enjoyed at night.
            </p>

            <CanHelpYou
              title="Required Tools & Instruments for Garden & Landscaping Work"
              electricianServiceList={gardenLandscapingServiceList}
            />

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you need Garden & Landscaping?
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
