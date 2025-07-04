import ArrowUpImg from "@/assets/images/arrow-up.svg";
import PlumberBannerImg from "@/assets/images/plumber-banner.png";
import Plumber2Img from "@/assets/images/plumber-2.png";
import SectionBgSketch from "@/assets/images/section-bg-sketch.svg";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Plumber() {
	const plumberHeaderContent = {
		title: "Do you need a plumber?",
		description:
			"Do you need a plumber for a planned project, repairs, improvements or upgrades? On Mittanbud, skilled plumbers will compete for your assignment!",

		items: [
			"Post the job completely free of charge",
			"Receive non-binding offers from companies",
			"Choose the offer that suits you best.",
		],
	};

	const plumberServiceList = [
		"Maintenance and rehabilitation of water and sewage pipes",
		"Renewal and replacement of water and sewage pipes",
		"Flushing and repairing clogged pipes",
		"Pipe thawing and insulation to prevent frozen pipes",
		"Pipe welding and repair of cracked water pipes",
		"Renovation and complete renovation of wet rooms",
		"Several also offer plumber on-call services",
	];

	const plumbingCostAffects = [
		"Whether the job requires special tools/equipment",
		"Procurement of materials and equipment for water and sewage",
		"If the job requires laying membrane",
		"Piping for new buildings, extensions and superstructures and laying of new pipes",
		"Whether heating cables should be taken into account",
		"Tiling or other surface treatments",
		"Procurement and installation of bathroom or kitchen fixtures",
		"Relocation, rehabilitation or change of water and sewage pipes",
	];

	return (
		<section className="py-10">
			<div className="container px-32">
				<div className="w-full grid grid-cols-3 rounded-lg bg-liquidGreen relative">
					<div className="col-span-2 py-32 px-12 flex flex-col gap-2 relative">
						<h2 className="text-3xl font-semibold text-primaryDark">
							{plumberHeaderContent.title}
						</h2>
						<p className="w-[65%] leading-normal text-sm font-medium">
							{plumberHeaderContent.description}
						</p>

						<div className="py-2 space-y-1">
							{plumberHeaderContent.items.map((item, index) => (
								<div key={index} className="w-full flex gap-2">
									<span className="text-primary">✓</span>
									<span className="text-sm">{item}</span>
								</div>
							))}
						</div>

						<img
							src={ArrowUpImg}
							alt="Arrow up"
							className="w-max absolute top-[70%] right-24 -translate-y-[70%]"
						/>
					</div>

					<div className="rounded-br-lg rounded-tr-lg overflow-hidden">
						<div className="flex flex-col gap-4 w-[25rem] bg-white rounded-lg p-5 py-8 absolute right-12 top-1/2 -translate-y-1/2 z-10">
							<h3 className="font-semibold text-xl text-primaryDark">
								What do you need help with?
							</h3>

							<Input
								placeholder="Title of the projects"
								className="ring-1 ring-neutral-200"
							/>

							<Textarea
								placeholder="Describe what needs to be done"
								className="ring-1 ring-neutral-200"
								rows={7}
							/>

							<div className="w-full flex items-center">
								<Button size="lg" className="w-full">
									Post a job
								</Button>
							</div>
						</div>

						<img
							src={PlumberBannerImg}
							alt="Plumber banner"
							className="w-full h-full"
						/>
					</div>
				</div>

				<div className="w-full grid grid-cols-3 py-5">
					<div className="col-span-2 w-full py-8 px-12 flex flex-col gap-5">
						<h4 className="text-xl font-semibold text-primaryDark">
							What can a plumber do for you?
						</h4>
						<p className="text-sm leading-normal">
							Plumbers perform a wide range of services, from
							unblocking clogged pipes to major renovation
							projects for wet rooms. A plumber can take on small
							jobs such as pipe replacement and drain maintenance,
							or extensive jobs such as complete renovations where
							many different disciplines are involved.
						</p>
						<div className="text-sm leading-normal">
							Some plumbing companies also offer 24-hour emergency
							plumbing services. If you need urgent help from a
							plumber, contact a plumbing company with 24-hour
							emergency service for immediate assistance.
						</div>

						<div className="bg-liquidGreen rounded-lg p-4">
							<h4 className="text-lg font-semibold text-primaryDark">
								Plumbers at Swish.ma can help you with, among
								other things:
							</h4>

							<ul className="flex flex-col gap-2 list-disc pl-4 text-sm leading-normal py-3">
								{plumberServiceList.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>

						<h4 className="text-xl font-semibold text-primaryDark">
							When do you need a plumber?
						</h4>
						<p className="text-sm leading-normal">
							All projects that require work with water, pipes,
							and drains require you to bring in a plumber to do
							the job. You can either find a plumber yourself for
							a specific project, or you can get help from a
							contractor to hire a plumber as part of a larger
							project.
						</p>
						<div className="w-full overflow-hidden rounded-lg">
							<img
								src={Plumber2Img}
								alt="Plumber 2"
								className="max-w-full"
							/>
						</div>
						<p className="text-sm leading-normal">
							You can install a shower faucet yourself if it has a
							shut-off valve and you have the ability to turn off
							the water, but we always recommend using a
							professional. That way, you'll be safe if something
							happens.
						</p>
						<h4 className="text-xl font-semibold text-primaryDark">
							Renovate bathroom
						</h4>
						<p className="text-sm leading-normal">
							A bathroom renovation will require plumbing work.
							Whether it's a complete renovation or a surface
							renovation, a certified plumber should do the job.
						</p>
						<p className="text-sm leading-normal">
							This is because the extent of damage from any errors
							in a bathroom is much greater than on other
							projects, for example if a leak occurs. But also
							because work without certification on water and
							sewage will not be covered by insurance should
							damage occur.
						</p>

						<h4 className="text-xl font-semibold text-primaryDark">
							Renovate kitchen
						</h4>
						<p className="text-sm leading-normal">
							Kitchen renovations often require work on water and
							sewage, and then you need a plumber.
						</p>
						<p className="text-sm leading-normal">
							The scope of the work will often depend on how
							extensive the changes are to be made, and how it
							affects the existing layout of water and sewage
							pipes.
						</p>

						<h4 className="text-xl font-semibold text-primaryDark">
							Total renovation
						</h4>
						<p className="text-sm leading-normal">
							When renovating a kitchen, bathroom or entire home,
							you will need a plumber. A complete renovation where
							work is carried out on water pipes and piping
							systems requires the expertise of a certified
							plumber.
						</p>

						<div className="py-5 my-20 relative">
							<img
								src={SectionBgSketch}
								alt="section bg"
								className="absolute max-w-full top-0 left-0 -z-10"
							/>
							<p className="w-[70%] mx-auto text-base leading-loose text-center">
								A complete renovation involves in-depth
								rehabilitation and change of what lies beneath
								visible surfaces, and it is important to use
								skilled craftsmen to obtain a quality-assured
								result.
							</p>
						</div>

						<h4 className="text-xl font-semibold text-primaryDark">
							New construction
						</h4>
						<p className="text-sm leading-normal">
							New construction intended for permanent residence
							will often require work on rooms that have water and
							sewage systems. This could be a house, apartment,
							extension, outbuilding or rental unit.
						</p>
						<p className="text-sm leading-normal">
							When installing piping systems in a new building
							with rooms such as a kitchen, bathroom and laundry
							room, you should always use a qualified plumber.
						</p>

						<h4 className="text-xl font-semibold text-primaryDark">
							What affects the cost of plumbing?
						</h4>
						<p className="text-sm leading-normal">
							Projects involving plumbers are often more expensive
							than other home improvement projects, and the
							biggest expenses are related to the type of projects
							they work on. Common price drivers for projects
							performed by plumbers are:
						</p>

						<ul className="flex flex-col gap-2 list-disc pl-4 text-sm leading-normal py-3">
							{plumbingCostAffects.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>

						<h4 className="text-xl font-semibold text-primaryDark">
							Why is the hourly rate for plumbers higher than
							other tradesmen?
						</h4>
						<p className="text-sm leading-normal">
							The hourly rate for a plumber will often be slightly
							higher than for other types of tradesmen. This is
							because plumbers must have additional insurance in
							case something goes wrong.
						</p>
						<p className="text-sm leading-normal">
							Repairing a leak is not necessarily something a
							plumber earns a lot from, but if the repair does not
							hold and the damage occurs first - then this will be
							a far greater cost than what they earned on the job.
							To ensure that plumbers can cover such cases without
							having to put a mortgage on their own home, plumbers
							therefore have additional insurance that must be
							covered through the jobs they perform.
						</p>

						<div className="bg-liquidGreen rounded-lg p-4 space-y-2 my-10">
							<h4 className="text-lg font-semibold text-primaryDark">
								Find skilled plumbers
							</h4>
							<p className="text-sm leading-normal font-medium">
								Register the job with Swish.ma
							</p>

							<div className="">
								<Link to="/">
									<Button size="sm">Get Started</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
