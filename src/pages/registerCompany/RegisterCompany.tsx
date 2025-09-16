import Advantage from "./Advantage";
import FaqForCompany from "./FaqForCompany";
import GetStarted from "./GetStarted";
import IndustrySection from "./IndustrySection";
import ProcessRegister from "./ProcessRegister";
import RegisterHero from "./RegisterHero";

export default function RegisterCompany() {
  return (
    <>
      <RegisterHero />
      {/* <GetStarted/> */}
      <ProcessRegister />
      <IndustrySection />
      {/* <Advantage/> */}
      <FaqForCompany />
    </>
  );
}
