import ArrowDownRoundedImg from "@/assets/images/arrow-down-rounded.svg";
import { Input } from "@/components/ui/input";
import { Hammer, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import BusinessSearchWithLocation from "@/components/common/BusinessSearchWithLocation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function SearchBusiness() {
  const { t } = useTranslation(["common", "home"]);
  const [submittedJob, setSubmittedJob] = useState("");
  const [submittedLoc, setSubmittedLoc] = useState("");

  return (
    <section className="py-12 md:py-20 lg:py-24">
      <div className="container bg-liquidGreen rounded-md p-2 md:p-5 relative">
        <div className="flex flex-col gap-3 py-8 px-2 relative z-10 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h3 className="font-bold text-primaryDark text-4xl">
            {t("search-business.title")}
          </h3>

          <p className="text-[#404C67] text-sm md:text-base w-full md:w-[75%] lg:w-[50%] xl:w-[40%]">
            {t("search-business.description")}
          </p>

          <img
            src={ArrowDownRoundedImg}
            alt="arrow-down"
            className=" max-w-[20%] hidden lg:block md:max-w-full absolute top-[25%] -right-6 -translate-y-[20%] md:top-[30%] md:right-16 md:-translate-y-[25%] z-0"
          />

          <BusinessSearchWithLocation />
        </div>
      </div>
    </section>
  );
}
