import ElectricianBannerImg from "@/assets/images/electricianHeader.svg";
import electricianContainerImg from "@/assets/images/electricianContainer.svg";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import ServiceContent from "../ServiceContent";
import CanHelpYou from "../CanHelpYou";

export default function Electrician() {
  const electricianHeaderContent = {
    title: "Do you need an electrician?",
    description:
      "Do you need an electrician to lay new wires, install sockets, spotlights or perform other work on the electrical system? If you post the assignment on Mittanbud, several electricians will compete to get the job done!",

    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  // Content Section

  const electricianServiceList = [
    "Install new or replace fuse box",
    "Install, check or replace electrical systems",
    "Installing an electric car charger",
    "Installing or moving electrical outlets",
    "Installing underfloor heating",
    "Installing spotlights and other lighting",
    "Various service assignments",
  ];

  const electricianServiceList2 = [
    "Size and scope of the work to be performed",

    "Number of contact points to be installed",

    "Equipment and materials",

    "Accessibility to the electrical system",

    "Any preparations before the mission",
  ];

  const electricianCostAffects = [
    "Whether the job requires special tools/equipment",
    "Procurement of materials and equipment for water and sewage",
    "If the job requires laying membrane",
    "Piping for new buildings, extensions and superstructures and laying of new pipes",
    "Whether heating cables should be taken into account",
    "Tiling or other surface treatments",
    "Procurement and installation of bathroom or kitchen fixtures",
    "Relocation, rehabilitation or change of water and sewage pipes",
  ];
  return (
    <section className="py-10">
      <div className="container px-32">
        {/* Header Section */}
        <ServiceHeader
          headerContent={electricianHeaderContent}
          bannerImg={ElectricianBannerImg}
        />

        {/* // Content Section */}

        <div className="w-full grid grid-cols-3 py-5">
          <div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
            <h4 className="text-xl font-semibold text-primaryDark">
              "What can an electrician help with?"
            </h4>
            <p className="text-sm leading-normal">
              The short answer is: if it is based on electricity, then an
              electrician can help. From pulling wires and installing sockets to
              installing spotlights. In addition, electricians can check and
              repair the entire electrical system including working with fuse
              boxes and connecting homes to the power grid.
            </p>
            <div className="text-sm leading-normal font-semibold">
              <p>
                In other words, an electrician can help with everything from
                small jobs like changing a thermostat to setting up the entire
                electrical system for complete renovations.
              </p>
            </div>
            <div className="text-sm leading-normal">
              Some electrical companies offer an emergency hotline for urgent
              assignments. If you need an electrician on very short notice, you
              should find an electrical company with an emergency hotline for
              immediate assistance.
            </div>

            <CanHelpYou
              title={"Electricians at Mittanbud help you with:"}
              electricianServiceList={electricianServiceList}
            />

            <h4 className="text-xl font-semibold text-primaryDark">
              What affects the cost of electrical work?
            </h4>
            <p className="text-sm leading-normal">
              The price for an electrician depends on the size of the project,
              how long it takes to complete the work, and what equipment is
              needed. If the electrician also has to order components or
              fixtures to be installed, this will also increase the total price.
            </p>

            <CanHelpYou
              title={"Common price drivers for electrician services are:"}
              electricianServiceList={electricianServiceList2}
            />

            <h4 className="text-xl font-semibold text-primaryDark mb-6">
              When do you need an electrician?
            </h4>
            <p className="text-sm leading-normal mb-6">
              You are allowed to do minor electrical work yourself, such as
              replacing socket covers and connecting freestanding or fixed lamps
              with sockets.
            </p>
            <p className="text-sm leading-normal mb-6">
              But if you are going to connect sugar cubes, run wires or more,
              you should use an electrician. If you choose to do such work
              yourself, you risk that insurance companies will not be able to
              help you if something goes wrong.
            </p>

            <div className="w-full overflow-hidden rounded-lg">
              <img
                src={electricianContainerImg}
                alt="Plumber 2"
                className="max-w-full"
              />
            </div>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-6">
              Renovate kitchen
            </h4>
            <p className="text-sm leading-normal">
              If you are need an electrician when installing new lights, sockets
              and electrical items. Large electrical appliances such as ovens
              and the like should have their own circuit in the fuse box, and
              this should be carried out by an electrician.
            </p>
            <p className="text-sm leading-normal">
              In older homes, it is common for the electrical system to not be
              adapted to new kitchen solutions, and you must be prepared to have
              extensive electrical work carried out if you are going to
              renovate.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark">
              - Renovate bathroom
            </h4>
            <p className="text-sm leading-normal">
              If you are need an electrician when you are going to install
              heating cables, install new lighting, sockets and thermostats.
            </p>
            <p className="text-sm leading-normal">
              Water and electricity are a bad combination, and there are strict
              rules for how a wet room should be built. By doing electrical work
              yourself, you risk shock, short circuits and breaks in the heating
              cables
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-8">
              - Replace or install a new fuse box
            </h4>
            <p className="text-sm leading-normal">
              The fuse box ensures that it is safe to use electrical
              installations and appliances in your home, without risking
              overvoltage or shock.
            </p>
            <p className="text-sm leading-normal">
              All new homes should have at least one fuse box to safely
              distribute electricity throughout the home. Some people also
              choose to have a separate fuse box in the garage, so they can
              safely use electric car chargers and power tools without having to
              pull cables from the home.
            </p>
            <p className="text-sm leading-normal">
              If you live in an older home with an old fuse box, it may be a
              good idea to modernize the fuse box, especially if the fuse box
              has screw-type fuses and lacks a ground fault circuit interrupter.
              These are not adapted to today's use of electricity.
            </p>
            <p className="text-sm leading-normal">
              The average price for a new fuse box is 18,000 kroner, but can
              vary from 10,000 to 25,000 kroner based on how much electricity
              you use and how big a fuse box you need. If you are replacing the
              fuse box, the price will be affected by how much of the fuse box
              is being replaced, the number of circuits and whether you are
              installing new circuits in the fuse box.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-8">
              - Check and control of electrical systems
            </h4>
            <p className="text-sm leading-normal">
              There are two different tasks for the electrician, and require
              different skills. Electrical checks are the most common for homes,
              and are intended to detect errors and deficiencies in the
              electrical system. During an electrical check, the electrician
              carries out a general check of the electrical system and reviews
              the fuse box, sockets, switches and cables. The electrician will
              also take random samples of various electrical connections.
            </p>
            <p className="text-sm leading-normal">
              An electrical inspection is a more comprehensive job, and should
              be performed by a certified electrical inspector. During an
              electrical inspection, the electrician will thoroughly check the
              fuse box, electricity meter, ground fault circuit interrupter and
              surge protector, in addition to electrical items in the home such
              as sockets and appliances.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-6 mb-8">
              - Installing electric car chargers
            </h4>
            <p className="text-sm leading-normal">
              You can buy a charging station for your electric car yourself, be
              taken care of by an electrician. This is because the electric car
              charger should be installed on a separate fuse circuit with a
              ground fault circuit interrupter B, to be safe in use.
            </p>
            <p className="text-sm leading-normal">
              An electric car should not be charged through a regular socket. If
              you regularly charge your car at the cabin, you should consider
              installing an electric car charger there as well.
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Find skilled plumbers
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
