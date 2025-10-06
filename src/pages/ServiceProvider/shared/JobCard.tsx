import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import {
  CalendarDays,
  Heart,
  HeartOff,
  Locate,
  LocationEdit,
  User2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarFallback from "@/assets/images/avatar.png";
import LocationIcon from "@/assets/providerIcon/locationIcon.svg";
import calendarIcon from "@/assets/providerIcon/calendarIcon.svg";
import { AllJob } from "../serviceTypes/ServiceProvider.types";

type JobCardProps = {
  job: AllJob;
  onViewDetails: () => void;
  onApplyBid: () => void;
};

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onViewDetails,
  onApplyBid,
}) => {
  const [isFavorite, setIsFavorite] = useState(job?.isFavorite || false);

  // Sync favorite status to localStorage whenever it's changed
  useEffect(() => {
    const favoriteJobIds = JSON.parse(
      localStorage.getItem("favoriteJobs") || "[]"
    ) as string[];

    if (isFavorite) {
      // Add to favorites
      if (!favoriteJobIds.includes(job.id)) {
        favoriteJobIds.push(job.id);
      }
    } else {
      // Remove from favorites
      const updatedFavorites = favoriteJobIds.filter(
        (id: string) => id !== job.id
      );
      localStorage.setItem("favoriteJobs", JSON.stringify(updatedFavorites));
      return;
    }

    // Save updated favorites list back to localStorage
    localStorage.setItem("favoriteJobs", JSON.stringify(favoriteJobIds));
  }, [isFavorite, job.id]); // Dependency array ensures this is called when isFavorite changes

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev); // Toggle favorite status
    // onClick={onViewDetails}
  };

  return (
    <button className="w-full" onClick={onViewDetails}>
      <div className="border  rounded-md p-4 shadow-sm transition-all hover:bg-gray-50  duration-300 ease-in-out">
        {/* Top */}
        <div className="flex flex-row justify-between items-start md:items-center gap-2 md:gap-4">
         
          <div className="flex gap-3 items-center">
            <img
              src={avatarFallback || job.user.avatarUrl}
              alt={job.user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-start">
              <p className="font-semibold">{job.user.name}</p>
              <p className="text-sm text-providerPrimary flex items-center gap-1 max-w-36 md:max-w-max">
                
                <img src={LocationIcon} className="max-w-[20px]" />
                {job.user.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center  text-sm text-muted-foreground gap-2">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
               
                <img src={calendarIcon} className="max-w-[14px]" />
                Posted: {job.postedDate}
              </span>
              <span className="flex items-center gap-1">
                <User2 size={14} />
                {job.bids} Bids
              </span>
            </div>
          </div>
        </div>

        {/* Middle */}
        <div className="mt-6 text-start">
          <p className="font-semibold text-lg mb-2">{job.title}</p>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {job.description}
          </p>
        </div>
      </div>
    </button>
  );
};
