import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import companyProfile from "@/assets/images/SearchCompanyLogo.svg";

interface CardProps {
  company_name;
  logo: string;
  rating: number;
  company: number;
}

export default function PrevUsedCompanyCard({ job }: { job: CardProps }) {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < Math.round(job?.rating || 0));
  return (
    <div className="flex flex-col border  rounded-lg p-4 shadow-md bg-white w-full hover:bg-gray-50 transition-all duration-300 ease-in-out ">
      <div className="flex items-center">
        <img
          src={job?.logo || companyProfile}
          alt={job?.company_name}
          className="w-20 h-20 rounded-full mr-4"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{job?.company_name}</h3>
          <div className="flex items-center mt-2">
            {stars.map((filled, index) => (
              <span
                key={index}
                className={filled ? "text-yellow-500" : "text-gray-300"}
              >
                &#9733;
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-500">
              ({job?.rating || 0})
            </span>
          </div>
        </div>
      </div>
      <Link to={`/profile/message/${job?.company}`}>
        <Button
          variant="outline"
          className="mt-4 w-full border border-primary text-primary hover:bg-liquidGreen hover:text-secondary font-semibold"
        >
          <Mail className="mr-2" />
          Contact
        </Button>
      </Link>
    </div>
  );
}
