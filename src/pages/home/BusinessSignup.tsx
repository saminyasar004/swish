import Logo from "@/assets/images/logoWhite.svg";
import BSLogo from "@/assets/images/BSLogo.svg";
import businessImage from "@/assets/images/businessImageI.svg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function BusinessSignup() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-secondary text-white text-center md:text-left">
      <div className="container grid md:grid-cols-2 justify-center items-center ">
        <div className="flex items-center justify-center text-center ">
          <img src={businessImage} alt="swish.ma" />
        </div>

        <div className="flex flex-col gap-5 mt-5">
          {/* <h5 className="font-semibold text-primary text-xl mb-12 md:mb-0">
            swish.ma
          </h5> */}
          <div className="flex items-center justify-center md:justify-start ">
            <img src={BSLogo} alt="swish.ma" className="" />
          </div>

          <div>
            <h3 className="font-semibold text-3xl">
              Do you want more customers?
            </h3>

            <p className="text-sm font-light lg:w-[70%] mt-3">
              Register on swish.ma and get access to thousands of new jobs every
              single week!
            </p>
          </div>

          <Link
            className="flex items-center justify-center text-center md:justify-start"
            to="/register-company"
          >
            <Button
              size="lg"
              className="px-12 py-6 rounded-md text-base font-semibold"
            >
              Start here
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
