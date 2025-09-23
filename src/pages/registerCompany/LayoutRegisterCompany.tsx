import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import FooterCompanyRegister from "./FooterCompanyRegister";
import { Outlet } from "react-router-dom";

export default function LayoutRegisterCompany() {
  return (
    <>
      <Sonner />
      <Header />
      <Outlet/>
      <FooterCompanyRegister />
    </>
  );
}
