import CheckRoundedImg from "@/assets/images/check-rounded.svg";
import CoffeeCupImg from "@/assets/images/coffee-cup.png";
import GreenStrokeImg from "@/assets/images/green-stroke.png";
import MessagesImg from "@/assets/images/messages.svg";
import NotelistImg from "@/assets/images/note-list.svg";

import SectionHeading from "@/components/common/SectionHeading";
import { Link } from "react-router-dom";

export default function Feature() {
	const features = [
		{
			name: "Find skilled craftsmen",
			description:
				"Swishma makes it easy to find craftsmen, regardless of whether the job is large or small. You can contact companies directly, or let us find the right one!",
			icon: MessagesImg,
			url: "#",
		},
		{
			name: "Safe and reliable businesses",
			description:
				"Swishma quality assures that companies can perform your type of job. The evaluations tell you what experiences others have had with the company.",
			icon: NotelistImg,
			url: "#",
		},
		{
			name: "Evaluations you can trust",
			description:
				"Evaluations can only be given for jobs that are posted on Mittanbud. To evaluate a job, the person posting the job must also BankID verify who they are.",
			icon: CheckRoundedImg,
			url: "#",
		},
	];

	return (
		<section className="py-32 max-w-full mx-auto bg-liquidGreen relative">
			<img
				src={GreenStrokeImg}
				alt="stroke"
				className="absolute top-0 right-0"
			/>
			<div className="container flex flex-col gap-14 items-center">
				<SectionHeading
					title="A fast and safe way to find a craftsman"
					description="At Swish.ma, we review the companies on the service regularly. We have also made it easier for you to ensure that you have chosen the best company for your project:"
				/>

				<div className="w-full grid grid-cols-3 gap-5 items-center">
					{features.map((feature, index) => (
						<div
							key={index}
							className="w-full h-full flex flex-col items-start gap-4 rounded-lg p-8 bg-white"
						>
							<img
								src={feature.icon}
								alt={feature.name}
								className="max-w-full"
							/>

							<h4 className="text-lg text-primaryDark font-semibold">
								{feature.name}
							</h4>

							<p className="text-[#404C67]">
								{feature.description}
							</p>

							<Link
								to={feature.url}
								className="text-primary font-semibold text-lg hover:underline transition-all duration-300"
							>
								Read more
							</Link>
						</div>
					))}
				</div>
			</div>
			<img
				src={CoffeeCupImg}
				alt="stroke"
				className="absolute bottom-0 left-0"
			/>
		</section>
	);
}
