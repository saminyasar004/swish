import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

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
