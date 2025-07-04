import Logo from "@/assets/images/logo-black.svg";
import SquaresImg from "@/assets/images/squares.svg";
import { categories } from "@/components/common/Header";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="py-28 bg-liquidGreen">
			<div className="container grid grid-cols-2 gap-4 item-center justify-center">
				<div className="max-w-md flex flex-col gap-3">
					<h1 className="text-5xl text-primaryDark font-semibold">
						Get the job done!
					</h1>
					<p className="font-normal text-sm text-[#404C67]">
						Describe the job and{" "}
						<span className="font-semibold">
							receive offers from skilled professionals.
						</span>
						Free and non-binding.
					</p>

					<div className="relative w-full">
						<Input
							className="w-full pr-12 shadow-md"
							placeholder="What do you need to help?"
						/>
						<div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
							<ArrowRight size={18} />
						</div>
					</div>

					<div className="w-full grid grid-cols-3 gap-6 py-6 items-start">
						{categories.map((category, index) => (
							<Link to={category.url} key={index}>
								<div
									className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline"
								>
									<img
										src={category.img}
										alt={category.name}
										className="max-w-full"
									/>

									<p className="font-medium text-sm text-center">
										{category.name}
									</p>
								</div>
							</Link>
						))}
						<Link to="/categories">
							<div className="w-full flex flex-col gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
								<img
									src={SquaresImg}
									alt={"All categories"}
									className="max-w-full"
								/>

								<p className="font-medium text-sm text-center">
									All categories
								</p>
							</div>
						</Link>
					</div>
				</div>
				<div className="w-full flex items-center justify-start">
					<img src={Logo} alt="Swish.ma" className="w-[500px]" />
				</div>
			</div>
		</section>
	);
}
