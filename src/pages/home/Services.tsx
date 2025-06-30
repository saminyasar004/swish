import ConcreteImg from "@/assets/images/concrete.svg";
import ElectricianImg from "@/assets/images/electrician.svg";
import FloorImg from "@/assets/images/floor.svg";
import GardenSprayImg from "@/assets/images/garden-spray.svg";
import HandymanImg from "@/assets/images/handyman.svg";
import HouseRenovationImg from "@/assets/images/house-renovation.svg";
import LocksmithImg from "@/assets/images/locksmith.svg";
import PaintingImg from "@/assets/images/painting.svg";
import PlumberImg from "@/assets/images/plumber.svg";
import RenovatingBathroomsImg from "@/assets/images/renovating-bathroom.svg";
import SolarHeaterImg from "@/assets/images/solar-heater.svg";
import WindowsAndDoorsImg from "@/assets/images/windows-and-doors.svg";

import SectionHeading from "@/components/common/SectionHeading";

export default function Services() {
	const services = [
		{ name: "Plumber", image: PlumberImg },
		{ name: "Electrician", image: ElectricianImg },
		{ name: "Masonry & Concrete Work", image: ConcreteImg },
		{ name: "Floor Laying", image: FloorImg },
		{ name: "Painting", image: PaintingImg },
		{ name: "Garden & Landscaping", image: GardenSprayImg },
		{ name: "Handyman", image: HandymanImg },
		{ name: "Locksmith", image: LocksmithImg },
		{ name: "Renovating bathrooms", image: RenovatingBathroomsImg },
		{ name: "Windows & Doors", image: WindowsAndDoorsImg },
		{ name: "Solar Heater & AC Installation", image: SolarHeaterImg },
		{ name: "Full Rem & Buildout", image: HouseRenovationImg },
	];

	return (
		<section className="py-24">
			<div className="container flex flex-col gap-14 items-center">
				<SectionHeading title="Popular Services" />

				<div className="w-full grid grid-cols-3 gap-3 items-center">
					{services.map((service, index) => (
						<div
							key={index}
							className="w-full h-full flex flex-col items-center gap-4 rounded-lg p-8 bg-liquidGreen hover:bg-accent transition-all duration-300 cursor-pointer"
						>
							<img
								src={service.image}
								alt={service.name}
								className="max-w-full"
							/>

							<h4 className="text-base text-primary font-semibold">
								{service.name}
							</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
