import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function LayoutRegisterCompany({ children }) {
  return (
    <>
      <Sonner />
      <Header />
      {children}
      <Footer />
    </>
  );
}
