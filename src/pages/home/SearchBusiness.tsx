import ArrowDownRoundedImg from "@/assets/images/arrow-down-rounded.svg";
import { Input } from "@/components/ui/input";
import { Hammer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSearchWithLocation from "@/components/common/BusinessSearchWithLocation";

export default function SearchBusiness() {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container bg-liquidGreen rounded-md p-2 md:p-5 relative">
        <div className="flex flex-col gap-3 py-8 px-2 relative z-10 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h3 className="font-bold text-primaryDark text-4xl">
            Search for a business
          </h3>

          <p className="text-[#404C67] text-sm md:text-base w-full md:w-[75%] lg:w-[50%] xl:w-[40%]">
            If you want to quickly find some relevant companies near you, you
            can search directly here.
          </p>

          <img
            src={ArrowDownRoundedImg}
            alt="arrow-down"
            className=" max-w-[20%] hidden lg:block md:max-w-full absolute top-[25%] -right-6 -translate-y-[20%] md:top-[30%] md:right-16 md:-translate-y-[25%] z-0"
          />

          {/* <div className="w-full grid grid-cols-5 gap-4 rounded-lg my-4 p-3 relative z-10">
       
            <div className=" col-span-5 lg:col-span-2 w-full relative flex items-center gap-2">
              <Hammer
                className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
                size={20}
              />
              <Input
                className="bg-transparent w-full pl-14 lg:h-16 border bg-white border-black placeholder:text-sm sm:placeholder:text-base md:placeholder:text-base"
                placeholder="What do you need help with?"
              />
            </div>

           
            <div className="col-span-5 lg:col-span-3 w-full relative flex flex-col lg:flex-row items-center gap-2">
              <MapPin
                className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
                size={20}
              />
              <Input
                className="bg-transparent w-full lg:h-16 pl-14 pr-20 border bg-white border-black placeholder:text-sm sm:placeholder:text-base md:placeholder:text-base"
                placeholder="Where will the job be done?"
              />
              <Button className="lg:absolute lg:right-2 lg:top-1/2 lg:-translate-y-1/2 xl:w-60 mt-3 lg:mt-0 hidden lg:block lg:h-12">
                Find a company
              </Button>
            </div>
            <div className="w-full col-span-5 block lg:hidden">
              <Button className="w-full text-base lg:h-12">
                Find a company
              </Button>
            </div>
          </div> */}
          <BusinessSearchWithLocation/>
        </div>
      </div>
    </section>
  );
}
