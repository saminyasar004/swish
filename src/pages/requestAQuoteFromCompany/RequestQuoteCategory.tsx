import ConcreteImg from "@/assets/images/concrete.svg";
import ElectricianImg from "@/assets/images/electrician.svg";
import FloorImg from "@/assets/images/floor.svg";
import GardenSprayImg from "@/assets/images/garden-spray.svg";
import HandymanImg from "@/assets/images/handyman.svg";
import HouseRenovationImg from "@/assets/images/house-renovation.svg";
import LocksmithImg from "@/assets/images/locksmith.svg";
import PaintingImg from "@/assets/images/painting.svg";
import PlumberImg from "@/assets/images/plumber.svg";
import RenovatingBathroomsImg from "@/assets/images/renovating-bathroom.svg";
import SolarHeaterImg from "@/assets/images/solar-heater.svg";
import WindowsAndDoorsImg from "@/assets/images/windows-and-doors.svg";

import SectionHeading from "@/components/common/SectionHeading";
import { Link } from "react-router-dom";
import { services } from "../home/Services";
import { Button } from "@/components/ui/button";

export default function RequestQuoteCategory() {
  return (
    <section className="pb-12 pt-4 md:pb-20 lg:pb-24 ">
      <div className="container mx-auto flex flex-col  items-center mt-16 shadow-lg rounded-md max-w-6xl">
        <h4 className="text-2xl font-bold">
          What can KJEXRUD MULTISERVICE help you with?
        </h4>

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 items-center p-4 my-6">
          {services.slice(0, 6).map((service, index) => (
            // <Link to={service?.url} key={index}>
            <Link to="/post-job" key={index}>
              <div
                key={index}
                className="w-full h-32 md:h-36 flex flex-col items-center justify-center text-center  gap-4 rounded-lg p-2 border md:p-8 bg-solidWhite hover:bg-liquidGreen transition-all duration-300 cursor-pointer shadow-none"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="max-w-full"
                />

                <h4 className="text-sm md:text-base text-blackPrimary font-semibold">
                  {service.name}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <div className="mb-8">
          <Button variant="ghost" className="text-blackPrimary">
            Show more services
          </Button>
        </div>
      </div>
    </section>
  );
}
