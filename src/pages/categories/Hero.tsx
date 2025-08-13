import SectionHeading from "@/components/common/SectionHeading";
import WhatNeedSearch from "@/components/common/WhatNeedSearch";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-24 bg-liquidGreen">
      <div className="container">
        <SectionHeading
          title="All Categories"
          description="Below you will find an overview of everything swish.ma can help you with. On these links you will find more information about the various services.
"
        />

        <div className="relative w-full py-10 max-w-lg mx-auto">
          {/* <Input
            className="w-full pr-12 shadow-md"
            placeholder="What do you need to help?"
          />
          <div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
            <ArrowRight size={18} />
          </div> */}
        <WhatNeedSearch/>
        </div>
      </div>
    </section>
  );
}
