import HeroBanner from "@/assets/images/hero-banner.png";
import HeroBanner2 from "@/assets/images/LogoIcon.svg";
import allCategori from "@/assets/images/allCategori.svg";
import Logo from "@/assets/images/logo-black.svg";
import SquaresImg from "@/assets/images/squares.svg";
import AllCategoryIcon from "@/assets/images/AllCategoryIcon.svg";
import { categories } from "@/components/common/Header";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { baseUrl } from "@/redux/api/baseApi";
import WhatNeedSearch from "@/components/common/WhatNeedSearch";

export default function Hero() {
  const { t } = useTranslation([
    "home",
    "common",
    "navigation",
    "auth",
    "jobs",
  ]);

  console.log(t("home"));

  console.log(t("register.title"));

  // Debug: Check if translations are working
  console.log("Hero translations:", {
    "hero.title": t("hero.title"),
    "hero.subtitle": t("hero.subtitle"),
    "hero.subtitle-bold": t("hero.subtitle-bold"),
    "hero.subtitle-end": t("hero.subtitle-end"),
    "hero.all-categories": t("hero.all-categories"),
  });

  return (
    <section className=" py-12 md:py-24 lg:py-32 bg-liquidGreen">
      <div className="container grid lg:grid-cols-2 gap-4 item-center justify-center">
        <div className="max-w-xl flex flex-col gap-4 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h1 className="text-5xl text-primaryDark font-semibold">
            {t("hero.title")}
          </h1>
          <p className="font-normal text-base max-w-lg text-[#404C67]">
            {t("hero.subtitle")}{" "}
            <span className="font-semibold">{t("hero.subtitle-bold")} </span>
            {t("hero.subtitle-end")}
          </p>

          <WhatNeedSearch />

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-6 items-start">
            {categories?.slice(0, 7).map((category, index) => (
              <Link to={category.url} key={index}>
                <div className="w-full flex flex-col gap-2 md:gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
                  <img
                    // src={`${baseUrl}${category?.category_icon}`}
                    src={`${category?.img}`}
                    alt={category.name}
                    className="w-12"
                  />

                  <p className="font-medium text-sm text-center">
                    {category.name}
                  </p>
                </div>
              </Link>
            ))}
            <Link to="/categories">
              <div className="w-full flex flex-col  gap-4 items-center justify-center py-4 hover:text-primary hover:underline">
                <img
                  src={allCategori}
                  alt={t("hero.all-categories")}
                  className="w-10 h-10"
                />

                <p className="font-medium text-sm text-center">
                  {t("hero.all-categories")}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:w-full h-full flex items-center justify-start mt-18 ">
          <img
            src={HeroBanner2}
            alt="swish.ma"
            className="w-[1500px] max-w-full h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
