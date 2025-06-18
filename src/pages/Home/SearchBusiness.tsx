import GreenStroke2Img from "@/assets/images/green-stroke-2.png";
import GoldenLeafImg from "@/assets/images/golden-leaf.png";
import ArrowDownRoundedImg from "@/assets/images/arrow-down-rounded.svg";
import { Input } from "@/components/ui/input";
import { Hammer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBusiness() {
	return (
		<section className="py-24">
			<div className="container bg-liquidGreen rounded-md p-5 relative">
				<img
					src={GreenStroke2Img}
					alt="stroke"
					className="absolute top-0 right-0"
				/>

				<div className="flex flex-col gap-3 py-8 px-5 relative z-10">
					<h3 className="font-semibold text-primaryDark text-3xl">
						Search for a business
					</h3>

					<p className="text-[#404C67] text-sm w-[25%]">
						If you want to quickly find some relevant companies near
						you, you can search directly here.
					</p>

					<img
						src={ArrowDownRoundedImg}
						alt="arrow-down"
						className="max-w-full absolute top-[30%] right-10 -translate-y-[30%]"
					/>

					<div className="w-full grid grid-cols-5 gap-1 bg-white h-14 rounded-md my-4">
						<div className="col-span-2 w-full relative flex items-center gap-2">
							<Hammer
								className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
								size={20}
							/>
							<Input
								className="bg-transparent w-full h-full pl-14 focus-visible:ring-offset-0 focus-visible:ring-0 border-0 ring-0"
								placeholder="What do you need help with?"
							/>
						</div>

						<div className="col-span-2 w-full relative flex items-center gap-2">
							<MapPin
								className="text-primaryDark absolute left-5 top-1/2 -translate-y-1/2"
								size={20}
							/>
							<Input
								className="bg-transparent w-full h-full pl-14 focus-visible:ring-offset-0 focus-visible:ring-0 border-0 ring-0"
								placeholder="Where will the job be done?"
							/>
						</div>

						<div className="w-full flex items-center justify-end    ">
							<Button>Find a company</Button>
						</div>
					</div>
				</div>

				<img
					src={GoldenLeafImg}
					alt="stroke"
					className="absolute bottom-0 left-0"
				/>
			</div>
		</section>
	);
}
