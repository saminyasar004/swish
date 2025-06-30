import Logo from "@/assets/images/logo-white.svg";
import { Button } from "@/components/ui/button";

export default function BusinessSignup() {
	return (
		<section className="py-32 bg-secondary text-white">
			<div className="container grid grid-cols-2 gap-4">
				<div className="flex items-center justify-start">
					<img src={Logo} alt="Swish.ma" className="w-[60%]" />
				</div>

				<div className="flex flex-col gap-3">
					<h5 className="font-semibold text-primary text-xl">
						Swish.ma
					</h5>

					<h3 className="font-semibold text-3xl">
						Do you want more customers?
					</h3>

					<p className="text-sm font-light w-[70%]">
						Register on Swish.ma and get access to thousands of new
						jobs every single week!
					</p>

					<div className="flex items-start py-3">
						<Button>Start here</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
