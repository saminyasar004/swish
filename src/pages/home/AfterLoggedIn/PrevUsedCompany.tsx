import React from "react";
import PrevUsedCompanyCard from "./PrevUsedCompanyCard";
import companyProfile from "@/assets/images/SearchCompanyLogo.svg";
import { useGetPreviousCompanyAndStartedJobsQuery } from "@/redux/features/users/postJob.api";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";

const companies = [
  {
    id: 1,
    name: "Proff Rehab AS",
    rating: 4.9,
    image: companyProfile,
  },
  {
    id: 2,
    name: "Tech Solutions Ltd.",
    rating: 4.7,
    image: companyProfile,
  },
  {
    id: 3,
    name: "Green Building Co.",
    rating: 4.8,
    image: companyProfile,
  },
  {
    id: 4,
    name: "Fast Delivery Services",
    rating: 4.6,
    image: companyProfile,
  },
  {
    id: 5,
    name: "Fast Delivery Services",
    rating: 5,
    image: companyProfile,
  },
];

export default function PrevUsedCompany() {
  const token = useAppSelector(selectCurrentToken);
  // GET STARTED JOBS
  const {
    data: prevUsedCompany,
    isLoading: isPrevUsedCompanyLoading,
    isError: isPrevUsedCompanyError,
  } = useGetPreviousCompanyAndStartedJobsQuery(undefined, { skip: !token });

  console.log({ prevUsedCompany });

  // Handle loading state
  if (isPrevUsedCompanyLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="animate-pulse text-gray-500">Loading jobs...</div>
      </div>
    );
  }
  const handleContactClick = (companyName: string) => {
    alert(`Contact button clicked for ${companyName}`);
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-2">Previous Used Companies</h2>
      <div className="  py-6 grid grid-cols-2 md:grid-cols-3 gap-6">
        {prevUsedCompany?.previously_used_companies?.map((job) => (
          <PrevUsedCompanyCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
}
