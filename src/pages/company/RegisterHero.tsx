import Logo from "@/assets/images/LogoLight.svg";
import SquaresImg from "@/assets/images/squares.svg";
import { categories } from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterHero() {
   const languages = ["English", "Français", "العربية"];
    const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  return (
    <section className=" py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid lg:grid-cols-2 gap-4 item-center justify-center">
        <div className="lg:w-full flex items-center justify-start mt-8 lg:mt-0">
          <img src={Logo} alt="Swish.ma" className="w-[500px]" />
        </div>

        <div className="max-w-lg flex flex-col gap-3 justify-center items-center text-center md:justify-start md:items-start md:text-left">
          <h1 className="text-5xl text-liquidGreen font-semibold">
            Get new customers and attractive jobs
          </h1>
          <p className="font-normal text-sm text-liquidGreen">
            Thousands of new missions every week. Create a free test profile now
            and see all the jobs near you.
          </p>

          <div className="w-full flex flex-col gap-4  py-4 md:gap-6 items-start">
            <div className="form-group w-full flex flex-col gap-3 ">
              <Input id="companyName" type="name" placeholder="Company Name" />
            </div>

            <div className="form-group w-full flex gap-3 items-center">
              
              
              <div className="form-group flex flex-col gap-3 lg:px-10 ">
            <Label htmlFor="Language" className="text-secondary">
              Language
            </Label>
            <Select
              value={currentLanguage}
              onValueChange={(e) => setCurrentLanguage(e)}
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {languages.map((language) => (
                    <SelectItem value={language} key={language}>
                      {language}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>


              <Input id="telephone" type="tel" placeholder="+123 456 7890" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
