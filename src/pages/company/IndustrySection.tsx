import SectionHeading from "@/components/common/SectionHeading";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { FaRulerCombined, FaCommentDots, FaStar } from "react-icons/fa";
import bag from "../../assets/images/Bag.svg"; // Replace with actual icon path
import message from "../../assets/images/messages.svg";
import triangle from "../../assets/images/triangle.svg";
import star from "../../assets/images/starrr.svg";

const IndustrySection = () => {
  return (
   <section className="bg-liquidGreen py-12 lg:py-24">
  <div className="container mx-auto px-4 text-center flex flex-col items-center gap-8">
    {/* Icon */}
    <div className="w-12 h-12">
      <img src={bag} alt="Industry Icon" className="mx-auto" />
    </div>

    {/* Heading */}
    <SectionHeading title="Great demand for good people" />

    {/* Description */}
    <p className="text-gray-600 max-w-2xl text-sm md:text-base">
      Thousands of customers post jobs every week that need answers from several
      skilled companies. Select your industry below and see why your company
      should join Swish.ma
    </p>

    {/* Industry Selector */}
    <div className="w-[250px]">
      <Select>
        <SelectTrigger className="bg-white border border-gray-300 rounded-md text-sm h-10">
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
      <div className="flex flex-col items-center">
        <img src={triangle} alt="Job volume icon" className="mb-2 w-6 h-6" />
        <h3 className="text-xl font-bold text-[#0F1C2E]">211 000</h3>
        <p className="text-sm text-gray-600">Jobs in the last year</p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <img src={message} alt="Message icon" className="mb-2 w-6 h-6" />
        <h3 className="text-xl font-bold text-[#0F1C2E]">4</h3>
        <p className="text-sm text-gray-600">Average response per job</p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center">
        <img src={star} alt="Star icon" className="mb-2 w-6 h-6" />
        <h3 className="text-xl font-bold text-[#0F1C2E]">32 000</h3>
        <p className="text-sm text-gray-600">Average price per job</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default IndustrySection;
