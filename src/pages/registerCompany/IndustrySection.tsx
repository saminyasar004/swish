import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import bag from "../../assets/images/Bag.svg"; // Replace with actual icon path
import message from "../../assets/images/messages.svg";
import triangle from "../../assets/images/triangle.svg";
import star from "../../assets/images/starrr.svg";
import demandIcon from "@/assets/providerIcon/demandIcon.svg";
import avgPriceIcon from "@/assets/providerIcon/avgPriceIcon.svg";
import jobsLastYear from "@/assets/providerIcon/jobsLastYear.svg";
import responseIcon from "@/assets/providerIcon/responseIcon.svg";
import ProviderSectionHeading from "@/components/common/ProviderSectionHeading";

const IndustrySection = () => {
  return (
    <section className="bg-providerPrimary py-12 lg:py-28">
      <div className="container mx-auto px-4 text-center flex flex-col items-center gap-8">
        {/* Icon */}
        <div className="w-12 h-12">
          <img src={demandIcon} alt="Industry Icon" className="mx-auto" />
        </div>

        {/* Heading */}
        <ProviderSectionHeading
          title="Great demand for good people"
          description=" Thousands of customers post jobs every week that need answers from
          several skilled companies. Select your industry below and see why your
          company should join swish.ma"
        />

        {/* Industry Selector */}
        <div className="w-[250px]">
          <Select>
            <SelectTrigger className="bg-white  rounded-md text-sm lg:h-12">
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="plumbing">Plumbing</SelectItem>
              <SelectItem value="cleaning">Cleaning</SelectItem>
              <SelectItem value="electrical">Electrical</SelectItem>
              {/* Add more industries if needed */}
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center w-full max-w-4xl">
          {/* Stat 1 */}
          <div className="flex flex-col  items-center">
            <img src={jobsLastYear} alt="Job volume icon" />
            <h3 className="text-xl font-bold text-providerWhitePrimary mt-3">5M+</h3>
            <p className="text-sm text-providerWhiteSecondary">Households</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center">
            <img src={responseIcon} alt="Message icon" />
            <h3 className="text-xl font-bold text-providerWhitePrimary mt-3">
              36M+{" "}
            </h3>
            <p className="text-sm text-providerWhiteSecondary">People</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center">
            <img src={avgPriceIcon} alt="Star icon" />
            <h3 className="text-xl font-bold text-providerWhitePrimary mt-3">1</h3>
            <p className="text-sm text-providerWhiteSecondary">Platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
