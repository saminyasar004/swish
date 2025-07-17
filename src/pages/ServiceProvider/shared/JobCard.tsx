import { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { CalendarDays, Heart, HeartOff, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarFallback from "@/assets/images/avatar.png";
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
  };

  return (
    <div className="border rounded-md p-4 shadow-sm hover:shadow-md transition-all">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex gap-3">
          <img
            src={avatarFallback || job.user.avatarUrl}
            alt={job.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{job.user.name}</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <FaLocationArrow className="text-primary" size={14} />
              {job.user.location}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleFavorite}
              className="bg-liquidGreen rounded-full p-2 transition hover:scale-105"
              aria-label={
                isFavorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              {isFavorite ? <HeartOff size={18} /> : <Heart size={18} />}
            </button>
            <button onClick={onViewDetails} className="text-primary underline">
              View Details
            </button>
          </div>
          <p className="text-lg font-semibold text-primary whitespace-nowrap text-end">
            {job.price}
          </p>
        </div>
      </div>

      {/* Middle */}
      <div className="mt-4">
        <p className="font-semibold text-lg mb-2">{job.title}</p>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 text-sm text-muted-foreground gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            Posted: {job.postedDate}
          </span>
          <span className="flex items-center gap-1">
            <User2 size={14} />
            {job.bids} Bids
          </span>
        </div>

        <Button
          onClick={onApplyBid}
          className="bg-primary text-solidWhite px-4 py-2 hover:bg-primary/80 text-sm rounded"
        >
          Apply For Bid
        </Button>
      </div>
    </div>
  );
};
