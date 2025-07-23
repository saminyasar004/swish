import Logo from "@/assets/images/logoWhite.svg";
import { Button } from "@/components/ui/button";

export default function BusinessSignup() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary text-white text-center md:text-left">
      <div className="container grid md:grid-cols-2 gap-4">
        <div className="flex items-center justify-center text-center md:justify-start">
          <img src={Logo} alt="swish.ma" className="w-[60%]" />
        </div>

        <div className="flex flex-col gap-3 ">
          <h5 className="font-semibold text-primary text-xl mb-12 md:mb-0">
            swish.ma
          </h5>

          <h3 className="font-semibold text-3xl">
            Do you want more customers?
          </h3>

          <p className="text-sm font-light md:w-[70%]">
            Register on swish.ma and get access to thousands of new jobs every
            single week!
          </p>

          <div className="flex items-center justify-center text-center md:justify-start py-3">
            <Button>Start here</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
