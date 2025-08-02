import { Toaster as Sonner } from "@/components/ui/sonner";
import Header from "@/components/common/Header";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Sonner />
      <Header />
      {children}
    </>
  );
}
