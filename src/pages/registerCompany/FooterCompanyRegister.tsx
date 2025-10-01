import Logo from "@/assets/images/logo-white.svg";
import { ButtonProvider } from "@/components/ui/buttonProvider";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FooterCompanyRegister() {
  const footerRoutes = [
    { name: "Help Guide", url: "/#" },
    { name: "Contact", url: "/contact" },
    { name: "Post a job", url: "/post-job" },
    { name: "Register Company", url: "/register-company" },
  ];

  const termCondition = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Term", url: "/terms-and-conditions" },
  ];

  const quickLinks = [
    {
      name: "How does swish work?",
      url: "/",
    },
    {
      name: "Safety & quality assurance",
      url: "/",
    },
    {
      name: "Reviews on Swish",
      url: "/",
    },
    {
      name: "How to write a good job description",
      url: "/",
    },
    {
      name: "Frequently asked questions",
      url: "/",
    },
    {
      name: "Startguide",
      url: "/",
    },
  ];
  // const quickLinks = [
  //   {
  //     name: "How does swish work?",
  //     url: "/",
  //   },
  //   {
  //     name: "Safety & quality assurance",
  //     url: "/",
  //   },
  //   {
  //     name: "Reviews on Swish",
  //     url: "/",
  //   },
  //   {
  //     name: "How to write a good job description",
  //     url: "/",
  //   },
  //   {
  //     name: "Frequently asked questions",
  //     url: "/",
  //   },
  //   {
  //     name: "Startguide",
  //     url: "/",
  //   },
  // ];

  const forBusinessLinks = [
    {
      name: "09:00 - 16:00 on weekdays.\nClosed on weekends",
      url: "#",
    },
    {
      name: "Send e-post: info@swish.ma.no",
      url: "#",
    },
    {
      name: "Ring oss: 22 00 09 30",
      url: "#",
    },
  ];
  // const forBusinessLinks = [
  //   {
  //     name: "Register your company",
  //     url: "register-company",
  //   },

  //   {
  //     name: "Startguide",
  //     url: "/",
  //   },
  // ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/swish-ma",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/swish.ma",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/swish.ma/",
    },
    {
      icon: FaTiktok,
      url: "https://www.tiktok.com/@swish.ma",
    },
  ];

  return (
    <footer className="text-white">
      <div className="bg-providerPrimary text-white">
        <div className="py-16 p-2 md:px-6 xl:px-2 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3  xl:grid-cols-5 lg:gap-4 gap-12">
          <div className="flex items-center justify-center md:justify-start ">
            <img src={Logo} alt="swish.ma" className="max-w-full" />
          </div>

          <div className="flex flex-col  justify-center items-center text-center gap-2  md:justify-start md:items-start md:text-left ">
            <h5 className="font-semibold text-providerWhitePrimary text-lg ">
              swish.ma
            </h5>

            <div className="flex flex-col">
              {footerRoutes.map((route, index) => (
                <Link
                  key={index}
                  to={route.url}
                  className="transition-all duration-300 hover:underline text-sm mt-2 font-light"
                >
                  {route.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 justify-center items-center text-center md:justify-start md:items-start md:text-left">
            <h5 className="font-semibold text-providerWhitePrimary text-lg ">
              Quick Links
            </h5>

            <div className="flex flex-col">
              {quickLinks.map((quickLink, index) => (
                <Link
                  // target="_blank"
                  key={index}
                  to={quickLink.url}
                  className="transition-all duration-300 hover:underline text-sm mt-2 font-light"
                >
                  &nbsp;{quickLink.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col col-span-1 gap-2 justify-center items-center text-center md:justify-start md:items-start md:text-left">
            <h6 className="font-semibold text-providerWhitePrimary text-lg">
              Customer Service
            </h6>

            <div className="flex flex-col">
              {forBusinessLinks.map((quickLink, index) => (
                <Link
                  // target="_blank"
                  key={index}
                  to={quickLink.url}
                  className="transition-all duration-300 hover:underline text-sm whitespace-pre-line mt-2 font-light"
                >
                  {quickLink.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="gap-4 w-full md:col-span-2 xl:col-span-1">
            {/* Newsletter Section */}
            <div className="flex flex-col gap-2 text-center items-center md:items-start md:text-left">
              <h6 className="font-semibold text-providerWhitePrimary text-lg">
                Newsletter
              </h6>

              <p className="text-sm font-light text-providerWhiteSecondary">
                Stay close to nature! Subscribe now for fresh harvest updates
                and special farm deals.
              </p>

              {/* Input + Button inline */}
              <div className="flex w-full max-w-sm rounded-md overflow-hidden border border-providerWhitePrimary mt-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border-none focus:ring-0 focus-visible:ring-0 px-3 text-sm bg-transparent lg:h-12"
                />
                <ButtonProvider className=" text-white  px-4 rounded-none md:h-12 ">
                  Subscribe
                </ButtonProvider>
              </div>
            </div>

            {/* Social Links */}
            <div className="w-full flex flex-col text-center md:items-start md:justify-center gap-3 mt-4">
              <h6 className="font-semibold text-providerWhitePrimary text-lg">Follow Us</h6>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {socialLinks.map((socialLink, index) => (
                  <Link
                    to={socialLink.url}
                    target="_blank"
                    key={index}
                    className="transition-all duration-300 hover:bg-providerWhiteSecondary hover:border-providerWhitePrimary border border-providerWhitePrimary rounded-full p-2 hover:text-providerPrimary"
                  >
                    <socialLink.icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 bg-providerAccent text-white">
        <div className="grid md:grid-cols-2 gap-6 justify-between items-center px-4 w-full max-w-[1800px] mx-auto">
          {/* Left Section */}
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-sm font-normal">
              Swish by Zoopy SARL © {new Date().getFullYear()}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            {termCondition.map((route, index) => (
              <Link
                key={index}
                to={route.url}
                className="transition-all duration-300 hover:underline text-sm font-light"
              >
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
