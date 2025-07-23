import solarHeaterBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";

export default function MasonryConcrete() {
  const solarHeaterHeaderContent = {
    title: "Are you need Masonry & Concrete Work?",
    description:
      "We offer expert masonry and concrete services, from custom brickwork to durable foundations, driveways, and patios. Quality craftsmanship and reliable results, built to last.",
    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={solarHeaterHeaderContent}
          bannerImg={solarHeaterBannerImg}
        />

        {/* Content Section */}
        <div className="w-full grid grid-cols-3 py-5 mt-6">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <p className="text-sm leading-normal mt-8">
              Our Masonry & Concrete Work service provides comprehensive
              solutions for residential and commercial projects, offering
              exceptional craftsmanship in every aspect of installation and
              repair. Whether it's building custom brick structures, laying
              foundations, or creating decorative concrete features, we ensure
              top-tier quality, durability, and precision throughout the entire
              process.
            </p>

            <div className="py-5 my-20 relative">
              <img
                src={SectionBgSketch}
                alt="section bg"
                className="absolute max-w-full top-0 left-0 -z-10"
              />
              <p className="w-[70%] mx-auto text-base leading-loose text-center">
                A complete renovation involves in-depth rehabilitation and
                change of what lies beneath visible surfaces, and it is
                important to use skilled craftsmen to obtain a quality-assured
                result.
              </p>
            </div>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How Masonry & Concrete Work Service Works
            </h4>

            <p className="text-sm leading-normal">
              The process begins with a thorough consultation, where we gather
              all relevant details about the scope of the project. Our experts
              discuss your design preferences, project timeline, budget, and any
              specific challenges the site may present. We provide you with
              professional guidance, helping you choose the best materials,
              design, and approach for your masonry and concrete work.
            </p>

            <p className="text-sm leading-normal">
              Before any masonry or concrete installation begins, the site must
              be properly prepared. This step includes the removal of debris,
              vegetation, and any obstacles that may affect the project. For
              concrete installations, the ground needs to be excavated to the
              correct depth to ensure a solid base for the pour. Additionally,
              the soil is compacted and leveled to prevent uneven settling and
              ensure structural stability. For masonry, the base must be
              properly leveled and firm to support the weight of the materials
              being laid. If working on uneven ground, additional measures may
              be needed to ensure stability.
            </p>

            <p className="text-sm leading-normal mt-6">
              Masonry work includes the use of bricks, blocks, stone, and other
              materials to construct walls, walkways, firepits, fireplaces,
              patios, or any custom design. The mason begins by mixing mortar to
              the ideal consistency and laying it evenly between the bricks,
              stones, or blocks, ensuring a strong bond.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Concrete Pouring & Finishing
            </h4>
            <p className="text-sm leading-normal">
              For concrete installations, this stage involves mixing the right
              proportions of cement, sand, aggregate, and water to create the
              desired consistency. The mixture is then poured into the
              designated area, whether it's a foundation, patio, driveway, or
              decorative surface.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Pouring the Concrete:
            </h4>
            <p className="text-sm leading-normal">
              Once the formwork (such as wooden frames or molds) is in place,
              the concrete is poured into the prepared site, ensuring it fills
              the area completely.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Edge and Control Joint
            </h4>
            <p className="text-sm leading-normal">
              Special attention is paid to the edges, where forms are removed,
              and control joints are added to allow for the natural expansion
              and contraction of the concrete. This helps prevent cracks as the
              concrete cures and hardens.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Curing & Inspection
            </h4>
            <p className="text-sm leading-normal mb-6">
              Once the concrete is poured or masonry work is completed, we allow
              sufficient time for curing. Proper curing of concrete is essential
              for ensuring its full strength and durability. For masonry, the
              mortar must be allowed to set and harden properly to ensure the
              structure's integrity.
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
            <p className="text-sm leading-normal">
              Concrete specialists are experts in mixing, pouring, and finishing
              concrete for various applications. These professionals understand
              the chemistry of concrete, how to achieve the right consistency,
              and how to finish concrete surfaces to meet specific requirements.
              They also handle the curing process to ensure long-lasting,
              durable results.
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
