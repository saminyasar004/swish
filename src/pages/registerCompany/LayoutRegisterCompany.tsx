import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FooterCompanyRegister from "./FooterCompanyRegister";

export default function LayoutRegisterCompany({ children }) {
  return (
    <>
      <Sonner />
      <Header />
      {children}
      <FooterCompanyRegister />
    </>
  );
}
