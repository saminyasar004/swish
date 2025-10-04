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
import { services } from "../Services";

export default function LoggedServices() {
  // const services = [
  //   { name: "Plumber", image: PlumberImg, url: "/trades/plumber" },
  //   { name: "Electrician", image: ElectricianImg, url: "/trades/electrician" },
  //   { name: "Masonry & Concrete Work", image: ConcreteImg, url: "/exterior-garden/masonry-concrete-work" },
  //   { name: "Floor Laying", image: FloorImg, url: "/indoor-renovation/floor-laying" },
  //   { name: "Painting", image: PaintingImg , url: "/trades/painter"},
  //   { name: "Garden & Landscaping", image: GardenSprayImg, url: "/exterior-garden/garden-landscaping" },
  //   { name: "Handyman", image: HandymanImg, url: "/trades/handyman" },
  //   { name: "Locksmith", image: LocksmithImg, url: "/trades/locksmith" },
  //   { name: "Renovating bathrooms", image: RenovatingBathroomsImg, url: "/indoor-renovation/renovating-bathrooms" },
  //   { name: "Windows & Doors", image: WindowsAndDoorsImg , url: "/exterior-garden/window-doors"},
  //   { name: "Solar Heater & AC Installation", image: SolarHeaterImg, url: "/exterior-garden/solar-heater-ac-installation" },
  //   { name: "Full Rem & Buildout", image: HouseRenovationImg, url: "/indoor-renovation/full-renovation-buildout" },
  // ];

  return (
    <section className="pb-4 pt-4 ">
      <div className="container flex flex-col gap-14 items-center">
        <SectionHeading
          title="Popular services"
          description="Get the job done by proper professionals who are trusted, experienced, and ready to deliver quality results."
        />

        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 items-center">
          {services.map((service, index) => (
            <Link to={service?.url} key={index}>
              <div
                key={index}
                className="w-full h-36 md:h-40 flex flex-col items-center justify-center text-center  gap-4 rounded-lg p-2 md:p-8 bg-solidWhite hover:bg-muteWhite hover:border-primary transition-all duration-300 cursor-pointer shadow-sm border"
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
      </div>
    </section>
  );
}
