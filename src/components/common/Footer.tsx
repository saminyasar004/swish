import Logo from "@/assets/images/logo-white.svg";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerRoutes = [
    { name: "Contact", url: "/contact" },
    { name: "Post a job", url: "/post-job" },
    { name: "Register Company", url: "/register-company" },
  ];

  const footerLinks = [
    { name: "Privacy Statement", url: "/privacy" },
    { name: "Sitemap", url: "/sitemap" },
    { name: "Term", url: "/term" },
    { name: "Cookie Settings", url: "/cookie-settings" },
  ];

  const quickLinks = [
    { name: "New Construction & Permits", url: "" },
    { name: "Exterior & Garden", url: "" },
    { name: "Trades & Specialized Crafts", url: "" },
    { name: "Home Services & Installations", url: "" },
    { name: "Indoor Renovation", url: "" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      url: "https://www.facebook.com/swishma",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/swishma",
    },
  ];

  return (
    <footer className="text-white">
      <div className="bg-accent text-white">
        <div className="py-16 px-2 w-full max-w-[1800px] mx-auto grid md:grid-cols-2 lg:grid-cols-7 lg:gap-4 gap-12 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          
		  
		  <div className="flex items-center justify-center md:justify-start lg:col-span-1 ">
            <img src={Logo} alt="Swish.ma" className="max-w-full" />
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2  ">
            <h6 className="font-semibold">Swish.ma</h6>

            {footerRoutes.map((route, index) => (
              <Link
                key={index}
                to={route.url}
                className="transition-all duration-300 hover:underline text-sm"
              >
                {route.name}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2 ">
            <h6 className="font-semibold">Swish.ma</h6>

            {quickLinks.map((quickLink, index) => (
              <Link
                key={index}
                to={quickLink.url}
                className="transition-all duration-300 hover:underline text-sm"
              >
                {quickLink.name}
              </Link>
            ))}
          </div>

          <div className="lg:col-span-2 flex flex-col gap-2">
            <h6 className="font-semibold">Customer Service</h6>

            <p className="text-sm lg:w-[50%]">
              09:00 - 16:00 on weekdays. closed on weekends.
            </p>

            <p className="text-sm lg:w-[50%]">Send e-post: info@swish.ma.no</p>

            <p className="text-sm lg:w-[50%]">Ring oss: 22 00 09 30</p>
          </div>

        </div>
      </div>

      <div className="py-10 bg-accentDark text-white justify-center items-center text-center md:justify-start md:items-start md:text-left">

        <div className="container grid md:grid-cols-2 gap-12">

          <div className="flex flex-col gap-3">
            <div className="flex">
              <img src={Logo} alt="Swish.ma" className="max-w-full" />
            </div>

            <p className="text-sm font-normal">
              Ali Mounji Marketplaces AS © 2025
            </p>

            <div className="w-full flex items-center justify-start gap-3">
              {footerLinks.map((link, index) => (
                <Link
                  to={link.url}
                  className="transition-all duration-300 hover:underline text-sm font-normal"
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full flex items-start justify-center gap-3">
            {socialLinks.map((socialLink, index) => (
              <Link
                to={socialLink.url}
                target="_blank"
                className="transition-all duration-300 hover:bg-primary hover:border-primary text-sm border border-white rounded-full p-2"
                key={index}
              >
                <socialLink.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
