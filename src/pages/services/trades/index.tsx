import { Button } from "@/components/ui/button";
import PlumberBannerImg from "@/assets/images/plumber-banner.png";
import { Link } from "react-router-dom";

export default function Trades() {
	return (
		<section className="py-10">
  <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-32">
    <div className="w-full grid grid-cols-1 md:grid-cols-5 rounded-lg bg-liquidGreen relative overflow-hidden">
      {/* Left Content */}
      <div className="md:col-span-3 py-12 md:py-20 lg:py-32 px-4 sm:px-8 lg:px-12 flex flex-col gap-4 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primaryDark">
          Get hold of the right craftsman
        </h2>
        <p className="text-sm sm:text-base font-medium text-primaryDark leading-relaxed max-w-xl">
          From fixing a leaking faucet to building a whole new house – Swish helps you connect with all types of tradesmen who have available capacity to get the job done!
        </p>
        <Link to="/post-job">
          <Button size="lg">Post a job</Button>
        </Link>
      </div>

      {/* Image */}
      <div className="w-full h-64 col-span-2 md:h-auto rounded-b-lg md:rounded-b-none md:rounded-tr-lg md:rounded-br-lg overflow-hidden">
        <img
          src={PlumberBannerImg}
          alt="Plumber banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
	);
}
