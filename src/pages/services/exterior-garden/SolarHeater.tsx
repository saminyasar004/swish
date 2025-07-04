import solarHeaterBannerImg from "@/assets/images/locksmithImg.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceHeader from "../ServiceHeader";
import CanHelpYou from "../CanHelpYou";

export default function SolarHeater() {
  const solarHeaterHeaderContent = {
    title: "Are you need Solar Heater & AC Installation?",
    description:
      "Our Solar Heater and AC installation services offer energy-efficient solutions for cooling and heating your space. We provide expert installation of solar-powered water heaters and air conditioning systems, ensuring optimal performance and reduced energy costs. With professional installation and reliable service, we help you achieve a comfortable and sustainable environment.",
    items: [
      "Post the job completely free of charge",
      "Receive non-binding offers from companies",
      "Choose the offer that suits you best.",
    ],
  };

  const solarHeaterServiceList = [
    "Solar Panels",
    "Heat Exchangers",
    "Thermostats",
    "Pumps & Valves",
    "Insulation Materials",
    "AC Units",
    "Installation Tools",
  ];

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
              The Solar Heater & AC Installation Service provides expert
              solutions for installing both solar water heating systems and air
              conditioning units, ensuring energy-efficient and cost-effective
              solutions for homes and businesses. This service includes precise
              installation, system integration, and optimization to improve
              indoor comfort and reduce energy consumption. Here's a detailed
              overview of the installation process, tools required, and the
              professionals involved in the installation of solar heaters and
              air conditioners.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              How Solar Heater & AC Installation Works
            </h4>

            <p className="text-sm leading-normal">
              The process begins with a consultation to determine the customer’s
              heating and cooling needs. Factors such as room size, building
              layout, and specific energy requirements are considered to suggest
              the best system for the property. A technician visits the site to
              evaluate the location for optimal placement of the solar heater
              and air conditioning units. For solar water heaters, factors like
              sun exposure and roof space are assessed to ensure maximum
              efficiency. For air conditioners, the technician will assess
              airflow, cooling needs, and ductwork (if applicable) to determine
              the best installation approach.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Choosing the Right System
            </h4>
            <p className="text-sm leading-normal">
              Solar water heating systems are available in two main types:
              active systems (using pumps to circulate water) and passive
              systems (relying on natural convection). The best system depends
              on factors like available roof space, budget, and hot water needs
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Air Conditioning System Selection
            </h4>
            <p className="text-sm leading-normal">
              The type of AC system is selected based on the property’s size,
              the number of rooms, and desired cooling efficiency. Options
              include split systems, ductless mini-split systems, and central
              air conditioning.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Installation of Solar Heater System
            </h4>
            <p className="text-sm leading-normal">
              The solar collector panels are mounted on the roof or another area
              with adequate sun exposure. These panels absorb sunlight and
              convert it into heat, which is transferred to the water in the
              storage tank. The solar collector is connected to the water
              storage tank and the plumbing system. The water is heated in the
              storage tank, and the system is connected to the home’s hot water
              supply for use in showers, sinks, and other appliances.
            </p>
            <p className="text-sm leading-normal">
              For active systems, an electrical connection is made to the pump
              that circulates the water through the system. The system is also
              connected to a temperature regulator to monitor and maintain the
              water’s temperature. Once the system is installed, it is tested
              for functionality. This includes checking for leaks, ensuring
              water is flowing properly, and confirming that the system is
              operating at peak efficiency.
            </p>

            <h4 className="text-xl font-semibold text-primaryDark mt-8 mb-4">
              Installation of Air Conditioning System
            </h4>
            <p className="text-sm leading-normal">
              For split and ductless systems, the indoor units are installed in
              the desired rooms, and the outdoor compressor/condenser unit is
              placed in a well-ventilated area. The outdoor unit should be
              located away from heat sources or obstructions to maximize
              efficiency.
            </p>
            <p className="text-sm leading-normal">
              For central AC systems, ductwork is installed to distribute cool
              air throughout the home. Existing ducts may be used if the house
              is already equipped with a central system, or new ducts may be
              installed as needed.
            </p>
            <p className="text-sm leading-normal">
              A refrigerant line is run between the indoor and outdoor units.
              This line allows the AC system to circulate the coolant that
              absorbs heat from the air inside the home.
            </p>
            <p className="text-sm leading-normal">
              The AC system is connected to the electrical supply, and a
              thermostat is installed to control the system. The thermostat is
              calibrated to ensure proper temperature regulation for optimal
              comfort and energy efficiency.
            </p>
            <p className="text-sm leading-normal">
              Once the installation is complete, the system is thoroughly tested
              for proper operation. This includes checking the cooling
              performance, airflow, refrigerant levels, and temperature control
              settings.
            </p>

            <div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
              <h4 className="text-lg font-semibold text-primaryDark">
                Are you need Solar Heater & AC Installation?
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
