import ElectricianBannerImg from "@/assets/images/electricianHeader.svg";
import painterContainer from "@/assets/images/painterContainer.svg";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";

export default function Painter() {
  const painterHeaderContent = {
    title: "Do you need a painter?",
    description:
      "Are you planning to renovate and need a painter? By using professional painters you will get great and long-lasting results. If you post the job on Mittanbud, you will be connected with skilled painters in your area!",

    items: [
      "Post the job completely free of charge",

      "Receive non-binding offers from companies",

      "Choose the offer that suits you best.",
    ],
  };

  // Content Section

  const commonPriceDrivers = [
    "Number of square meters to be surface treated",
    "Number of layers of treatment",
    "Preparation before painting (removing paint, wallpaper or glue, cleaning and priming - possibly also taping windows, preventing spills or stains on other surfaces)",
    "Purchasing and selection of materials (quantity and quality)",
    "Use of scaffolding (rental, assembly and disassembly)",
    "Special equipment (rental or wear)",
    "What type of painting services you need (for example, spray painting requires special equipment and more coverage of areas not to be treated)",
  ];

  const paintingServiceList = [
    "Painting houses",
    "Painting tiles",
    "Facade paint",
    "Painting the ceiling",
    "Painting floors",
    "Painting of interior walls",
    "Painting stairs",
    "Painting plaster and painting walls",
    "Painting plaster",
    "Painting outdoors",
    "Painting indoors",
    "Chalk paint",
  ];

  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={painterHeaderContent}
          bannerImg={ElectricianBannerImg}
        />

        {/* // Content Section */}

        <div className="w-full grid grid-cols-3 py-5 mt-8">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              "Common price drivers for work done by a painter"
            </h4>
            <p className="text-sm leading-normal">
              The total cost of hiring a painter will depend on several things.
              The most important factor affecting the price is the number of
              hours it takes to get the job done satisfactorily.
            </p>

            {/* // List of common price drivers */}
            <div className="">
              <ul className="flex flex-col gap-2 list-disc pl-4 text-sm leading-normal py-3">
                {commonPriceDrivers.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              "What painting services can you get help with via swish.ma?"
            </h4>
            <p className="text-sm leading-normal">
              When you are painting something, it is always worth using a
              professional painting company. They have the right equipment,
              experience and expertise to give the best end result. You will
              also get the job done more efficiently, and a result that will
              last a long time.
            </p>

            <CanHelpYou
              title={
                "Here are some examples of common painting services people need help with:"
              }
              electricianServiceList={paintingServiceList}
            />

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-6">
              When do you need a painter?
            </h4>
            <p className="text-sm leading-normal">
              There is no requirement that an experienced painter is needed to
              paint or surface-treat walls, either indoors or outdoors. However,
              there are some treatments that you should still leave to
              professionals. Painting and other surface treatments of surfaces
              exposed to the elements is one example where the wrong choice of
              surface treatment or poor quality of workmanship can be an
              expensive affair.
            </p>
            <p className="text-sm leading-normal">
              The end result will often be better if you bring in experts,
              especially if you don't have much experience yourself. A
              professional painter also has in-depth knowledge of different
              substrates such as wood, concrete, plaster, brick and metal, and
              how they work with different treatments. They are also
              particularly skilled at surface restoration work.
            </p>
            <p className="text-sm leading-normal">
              Painters are also usually far more efficient at getting the job
              done, especially when the end result is to be nice. For example,
              getting wallpaper joints (especially with patterns) to overlap as
              neatly as possible - as well as getting good corners and edges.
            </p>
            <p className="text-sm leading-normal">
              In addition, they also have experience with painting techniques
              that make them effective without being overly demanding, as well
              as, of course, good equipment to be able to work as efficiently as
              possible.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-6">
              Various home painting services
            </h4>
            <p className="text-sm leading-normal">
              Sometimes you need a painter for smaller projects that are more
              concrete and specific. For example, painting a specific room or
              giving a different surface treatment surface. Other times,
              painters are part of a larger renovation project with other
              tradespeople.
            </p>
            <p className="text-sm leading-normal">
              Professional painters have a good understanding of what goes into
              a painting project, from start to finish. This includes things
              like preparation, the right tools, and techniques that will
              produce a lasting result.
            </p>
            <p className="text-sm leading-normal">
              If the painting job requires a lot of groundwork and preparation,
              it can quickly become a bigger job. For example, if the wall has
              damage, old wallpaper that needs to be removed, or if it does not
              have the necessary primer, a professional painter will carry out
              the necessary preparations before the wall is painted.
            </p>
            <p className="text-sm leading-normal">
              In addition, they also have experience with painting techniques
              that make them effective without being overly demanding, as well
              as, of course, good equipment to be able to work as efficiently as
              possible.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-6">
              Paint the exterior
            </h4>
            <p className="text-sm leading-normal">
              An outdoor painting job will be largely governed by weather and
              season, both in terms of when you should do it and what
              preparations are needed.
            </p>
            <p className="text-sm leading-normal mb-6">
              It is therefore important to talk to a painter well in advance of
              an outdoor project, so that time can be set aside to paint while
              it is as dry as possible and not too wet outside. A professional
              painter will also know what type of paint is most appropriate to
              use for your particular home.
            </p>

            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={painterContainer}
                alt="Plumber 2"
                className="max-w-full"
              />
            </div>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              Paint the interior
            </h4>
            <p className="text-sm leading-normal">
              Painting the interior can mean many different things. Common
              indoor projects include:
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint floors
            </h4>
            <p className="text-sm leading-normal">
              Floors are exposed to more wear and tear than many other things in
              the home. When painting floors, you need materials and paints that
              can withstand this stress.
            </p>
            <p className="text-sm leading-normal">
              Talk to a professional to help you choose paint that is suitable
              for floors and that matches the type of floor. This will prevent
              the paint from peeling and wearing away again.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint frames and moldings
            </h4>
            <p className="text-sm leading-normal">
              Painting frames and moldings is usually part of other home
              improvement projects, unless you opt for a frameless finish.
              Frames and moldings sometimes require extra durable paint to
              prevent scuff marks. Keep in mind that if you have stucco that
              needs painting, it requires extra technical knowledge to preserve
              the details.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint stairs
            </h4>
            <p className="text-sm leading-normal">
              A staircase is exposed to a lot of wear and tear, in addition to
              having many angles, nooks and crannies. When painting your
              staircase, you should therefore use a professional painter who has
              a good eye for detail and knows what it takes to get a nice and
              lasting result.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint walls
            </h4>
            <p className="text-sm leading-normal">
              Walls are often the easiest to paint, but even here there is a lot
              to think about before you get started. Remember that all surfaces
              require proper priming first, and that the choice of paint has a
              lot to do with it. Different rooms will require different types of
              wall paint, and color choice is crucial in combination with
              natural light and the size of the room.
            </p>
            <p className="text-sm leading-normal">
              A professional painter will help you with color choices and other
              details that are difficult to implement on your own. For example,
              if you want edges along the wall and ceiling that resemble
              moldings, or details with different transitions and differences
              between colors.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint kitchen
            </h4>
            <p className="text-sm leading-normal">
              You don't have to replace all the fronts if you want to renovate
              your kitchen. Paint can often be enough to change the look and
              style. For example, spray painting kitchen fronts is popular
              because it gives a smooth and even finish. Remember to ask the
              painters you are considering if they have the right equipment for
              this type of job.
            </p>
            <p className="text-sm leading-normal">
              The kitchen also has different needs when it comes to paint than
              other living spaces. Due to, for example, grease and steam,
              surfaces in the kitchen will become stained or worn more quickly.
              Therefore, the paint for the kitchen must be adapted to such wear
              and tear.
            </p>
            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Paint tiles
            </h4>
            <p className="text-sm leading-normal">
              Tiles can be expensive to replace. If your bathroom only needs a
              little refresh, you can go for painting the tiles instead of
              replacing them.
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

            <p className="text-sm leading-normal">
              If you want to replace the tiles, you should contact. Also
              remember that in many cases you will need to involve a plumber
              when renovating your bathroom, especially if the bathroom
              renovation is more than just a surface treatment. If you want to
              replace or repair tiles in your bathroom, you should therefore
              bring in so that you are sure that you do not suffer unforeseen
              damage that could lead to leaks or rot.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-4">
              - Removal of paint, wallpaper or plaster
            </h4>
            <p className="text-sm leading-normal">
              If you are going to remove paint, wallpaper or stucco, it may be a
              good idea to contact a craftsman.
            </p>
            <p className="text-sm leading-normal">
              Be aware that older types of paint may contain lead and other
              chemicals that can be harmful to both you and the environment.
              Therefore, good procedures are required for both the removal of
              paint and adhesive residues, and if the waste is environmentally
              harmful, it must be delivered to an approved landfill. Remember to
              wear a mask if you are going to do this yourself!
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Find a skilled painter
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
