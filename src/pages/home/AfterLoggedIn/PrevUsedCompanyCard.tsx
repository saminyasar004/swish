import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

interface CardProps {
  name: string;
  rating: number;
  image: string;
  onContactClick: () => void;
}

export default function PrevUsedCompanyCard({
  name,
  rating,
  image,
  onContactClick,
}: CardProps) {
  const stars = Array(5)
    .fill(false)
    .map((_, index) => index < Math.round(rating));
  return (
    <div className="flex flex-col border  rounded-lg p-4 shadow-md bg-white w-96 hover:bg-gray-50 transition-all duration-300 ease-in-out ">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 rounded-full mr-4" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center mt-2">
            {stars.map((filled, index) => (
              <span
                key={index}
                className={filled ? "text-yellow-500" : "text-gray-300"}
              >
                &#9733;
              </span>
            ))}
            <span className="ml-2 text-sm text-gray-500">({rating})</span>
          </div>
        </div>
      </div>
      <Button
        variant="outline"
        className="mt-4 w-full border border-primary text-primary hover:bg-liquidGreen hover:text-secondary font-semibold"
        onClick={onContactClick}
      >
        <Mail className="mr-2" />
        Contact
      </Button>
    </div>
  );
}
