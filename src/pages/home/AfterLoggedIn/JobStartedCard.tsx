interface JobStartedCardProps {
  backgroundImage: string;
  status: string;
  title: string;
  description?: string;
  date: string;
}

const JobStartedCard = ({
  backgroundImage,
  status,
  title,
  description,
  date,
}: JobStartedCardProps) => {
  return (
    <div
      className="relative  rounded-sm overflow-hidden shadow-lg opacity-50 mt-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Status Tag */}
      <div className="absolute top-5 left-4 bg-white text-black text-md font-medium px-5 py-2 rounded-full shadow-md">
        {status}
      </div>

      {/* Bottom Text Section */}
      <div className="absolute bottom-0 w-full p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
        <p className="text-sm opacity-70 mt-1">Published {date}</p>
      </div>
    </div>
  );
};

export default JobStartedCard;
