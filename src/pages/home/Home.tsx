import Hero from "@/pages/Home/Hero";
import Process from "@/pages/Home/Process";
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
