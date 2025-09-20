import googleMap from "@/assets/images/googleMap.svg";
import { Link } from "react-router-dom";

const JobStartedCard = ({ job }) => {
  // Fallback image: prioritize job.image, then googleMap, then a default
  const backgroundImage = googleMap;

  return (
    <Link to={`/message/${job?.id}`}>
      <div
        className="relative rounded-sm shadow-lg mt-6 min-h-[200px]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        role="article"
        aria-label={`Job card: ${job?.heading || job?.title || "Untitled Job"}`}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-sm"></div>

        {/* Status Tag */}
        <div className="absolute top-5 left-4 bg-white text-black text-md font-medium px-5 py-2 rounded-full shadow-md z-10">
          {job?.status || "Unknown Status"}
        </div>

        {/* Bottom Text Section */}
        <div className="absolute bottom-0 w-full p-4 text-white z-10">
          <h3 className="text-lg font-semibold">
            {job?.heading || job?.title || "Untitled Job"}
          </h3>
          <p className="text-sm opacity-70 mt-1">
            Published{" "}
            {job?.created_at
              ? new Date(job.created_at).toDateString()
              : job?.published || "Unknown Date"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobStartedCard;
