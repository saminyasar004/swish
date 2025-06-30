import Hero from "@/pages/home/Hero";
import Process from "@/pages/home/Process";
import Services from "./Services";
import Feature from "./Feature";
import SearchBusiness from "./SearchBusiness";
import BusinessSignup from "./BusinessSignup";

export default function Home() {
	return (
		<>
			<Hero />
			<Process />
			<Services />
			<Feature />
			<SearchBusiness />
			<BusinessSignup />
		</>
	);
}
