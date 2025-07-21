import GreenStroke2Img from "@/assets/images/green-stroke-2.png";
import GoldenLeafImg from "@/assets/images/golden-leaf.png";
import ArrowDownRoundedImg from "@/assets/images/arrow-down-rounded.svg";
import { Input } from "@/components/ui/input";
import { Hammer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBusiness() {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container bg-liquidGreen rounded-md p-5 relative">
        {/* <img
          src={GreenStroke2Img}
          alt="stroke"
          className="absolute top-0 right-0"
        /> */}

        <div className="flex flex-col gap-3 py-8 px-5 relative z-10 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h3 className="font-semibold text-primaryDark text-3xl">
            Search for a business
          </h3>

          <p className="text-[#404C67] text-sm w-full md:w-[75%] lg:w-[50%] xl:w-[30%]">
            If you want to quickly find some relevant companies near you, you
            can search directly here.
          </p>

          <img
    src={ArrowDownRoundedImg}
    alt="arrow-down"
    className=" max-w-[20%] md:max-w-full absolute top-[25%] -right-5 -translate-y-[20%] md:top-[30%] md:right-10 md:-translate-y-[30%] z-0"
  />

          <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 rounded-lg my-4 p-3 relative z-10">
            {/* Help with */}
            <div className="md:col-span-3 lg:col-span-2 w-full relative flex items-center gap-2">
              <Hammer
                className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
                size={20}
              />
              <Input
                className="bg-transparent w-full pl-14 border bg-white border-black placeholder:text-sm sm:placeholder:text-base md:placeholder:text-base"
                placeholder="What do you need help with?"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2 lg:col-span-2 w-full relative flex items-center gap-2">
              <MapPin
                className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
                size={20}
              />
              <Input
                className="bg-transparent w-full pl-14 border bg-white border-black placeholder:text-sm sm:placeholder:text-base md:placeholder:text-base"
                placeholder="Where will the job be done?"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-5 lg:col-span-1 w-full flex items-center justify-end">
              <Button className="w-full md:w-auto">Find a company</Button>
            </div>
          </div>
        </div>

        {/* <img
          src={GoldenLeafImg}
          alt="stroke"
          className="absolute bottom-0 left-0"
        /> */}
      </div>
    </section>
  );
}
