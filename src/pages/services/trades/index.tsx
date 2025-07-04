import { Button } from "@/components/ui/button";
import PlumberBannerImg from "@/assets/images/plumber-banner.png";
import { Link } from "react-router-dom";

export default function Trades() {
	return (
		<section className="py-10">
			<div className="container px-32">
				<div className="w-full grid grid-cols-3 rounded-lg bg-liquidGreen relative">
					<div className="col-span-2 py-32 px-12 flex flex-col gap-4 relative">
						<h2 className="text-3xl font-semibold">
							Get hold of the right craftsman
						</h2>
						<p className="w-[70%] leading-normal text-sm font-medium text-primaryDark">
							From fixing a leaking faucet to building a whole new
							house - Swish helps you connect with all types of
							tradesmen who have available capacity to get the job
							done!
						</p>

						<Link to="/post-job">
							<Button size="lg">Post a job</Button>
						</Link>
					</div>

					<div className="rounded-br-lg rounded-tr-lg overflow-hidden">
						<img
							src={PlumberBannerImg}
							alt="Plumber banner"
							className="w-full h-full"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
