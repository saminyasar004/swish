import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <>
      <Sonner />
      <Header />
      <Outlet/>
    </>
  );
}
