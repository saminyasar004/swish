import {
  CheckCircleIcon,
  ClockIcon,
  FolderIcon,
  XCircleIcon,
} from "lucide-react";
import StatCard from "./StatCard";
import MyBidsTab from "./MyBidsTab";

interface CardData {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export default function MyBids() {
  const cards: CardData[] = [
    {
      title: "Total Bids",
      value: 32,
      description: "All Time Projects",
      icon: <FolderIcon className="h-6 w-6 text-blue-500" />,
      color: "text-blue-500",
    },
    {
      title: "Complete Bids",
      value: 24,
      description: "Currently In Progress",
      icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
      color: "text-green-500",
    },
    {
      title: "Active Bids",
      value: 6,
      description: "All Time Projects",
      icon: <ClockIcon className="h-6 w-6 text-yellow-500" />,
      color: "text-yellow-500",
    },
    {
      title: "Reject Bids",
      value: 2,
      description: "All Time Projects",
      icon: <XCircleIcon className="h-6 w-6 text-red-500" />,
      color: "text-red-500",
    },
  ];

  return (
    <div className="container mx-auto px-6">
      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 place-items-center mx-32">
        {cards.map((card, index) => (
          <StatCard
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>

      {/* My Bids Tab Section */}
      <div className="mt-8">
        <MyBidsTab />
      </div>
    </div>
  );
}
