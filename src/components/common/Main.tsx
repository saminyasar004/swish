import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Sonner />
      <Header />
      <div className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
