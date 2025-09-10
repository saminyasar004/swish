import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "./ProfileSidebar";
import PersonalInfo from "./PersonalInfo";
import LoginAndSecurity from "./LoginAndSecurity";
import Notification from "./Notification";
import { useLocation } from "react-router-dom";
import CustomerService from "./CustomerService";

export default function Profile() {
  const { pathname } = useLocation();

  let content;
  if (pathname === "/profile") content = <PersonalInfo />;
  else if (pathname === "/profile/login-security")
    content = <LoginAndSecurity />;
  else if (pathname === "/profile/notifications") content = <Notification />;
  else if (pathname === "/profile/customer-service") content = <CustomerService />;
  else content = <PersonalInfo />; // fallback
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-solidWhite shadow-sm">
          <ProfileSidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 container mx-auto ">
          <div className="shadow-sm ">{content}</div>
        </main>
      </div>
    </section>
  );
}
