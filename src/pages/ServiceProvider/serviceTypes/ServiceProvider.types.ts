// types/job.ts
export type AllJob = {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    location: string;
    contact?: string;
  };
  title: string;
  description: string;
  postedDate: string;
  price: string;
  bids: number;
  isFavorite?: boolean;
  propertyType: string;
  employeeNeeds: string;
  startTime: string;
  images: string[];
};
