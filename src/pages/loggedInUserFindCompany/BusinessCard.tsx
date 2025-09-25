import { Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BusinessCardProps {
  id: number;
  logo: string;
  name: string;
  rating: number;
  reviewsCount: number;
  referencesUrl: string;
  respondsQuickly: boolean;
  chosenBy: number;
  description: string;
  reviewer?: {
    name: string;
    date: string;
    comment: string;
  };
}

export default function BusinessCard({
  id,
  logo,
  name,
  rating,
  reviewsCount,
  referencesUrl,
  respondsQuickly,
  chosenBy,
  description,
  reviewer,
}: BusinessCardProps) {
  return (
    <div className="border rounded-md p-4 md:p-6 bg-solidWhite shadow-sm flex flex-col gap-4">
      {/* Top row */}
      <div className="flex justify-between items-start gap-4">
        {/* Left: Logo + Info */}
        <div className="flex gap-4">
          <Link to={`/profile/company-search/${id}`}>
            <img
              src={logo}
              alt={name}
              className="w-16 h-16 object-contain rounded-md border"
            />
          </Link>

          <div className="flex flex-col gap-1">
            <Link to={`/profile/company-search/${id}`}>
              {" "}
              <h2 className="font-bold text-lg">{name}</h2>
            </Link>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Star className="text-yellow-400 fill-yellow-400 w-4 h-4" />
              <span className="font-semibold">{rating.toFixed(1)}</span>
              <span>({reviewsCount})</span>

              <Link to={`/profile/company-search/${id}`}>
                <a
                  href={referencesUrl}
                  className="text-darkGreen hover:underline ml-2 transition-all duration-300 ease-in-out"
                >
                  See references
                </a>
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-1">
              {respondsQuickly && (
                <span className="text-xs bg-liquidGreen border rounded-full px-3 py-1">
                  Responds quickly
                </span>
              )}
              <span className="text-xs bg-liquidGreen border rounded-full px-3 py-1">
                Chosen by {chosenBy} users
              </span>
            </div>
          </div>
        </div>

        {/* Right: CTA button */}
        <Link to={`/profile/request-quote/${id}`}>
          <Button
            variant="outline"
            className="text-secondary border-primary font-semibold hover:bg-primary/20"
          >
            Request a quote
          </Button>
        </Link>
      </div>

      {/* Business description */}
      <p className="text-sm text-blackSecondary">{description}</p>

      {/* Review block */}
      {reviewer && (
        <div className="bg-liquidGreen rounded-md p-2 py-6 text-sm">
          <div className="flex items-center gap-2 font-medium text-blackPrimary mb-1">
            <div className="bg-blackPrimary text-white rounded-full w-7 h-7 flex justify-center items-center">
              {" "}
              {reviewer.name[0]}{" "}
            </div>
            Recently reviewed by {reviewer.name}
          </div>
          <div className="text-xs text-blackSecondary mb-2 ml-8">
            {reviewer.date}
          </div>
          <p className="mt-4">{reviewer.comment}</p>
        </div>
      )}
    </div>
  );
}
