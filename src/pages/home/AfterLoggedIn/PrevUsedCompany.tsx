import React from "react";
import PrevUsedCompanyCard from "./PrevUsedCompanyCard";
import companyProfile from "@/assets/images/SearchCompanyLogo.svg"

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
];

export default function PrevUsedCompany() {
  const handleContactClick = (companyName: string) => {
    alert(`Contact button clicked for ${companyName}`);
  };

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-2">Previous Used Companies</h2>
      <div className="  py-6 flex flex-wrap gap-6">
        {companies.map((company) => (
          <PrevUsedCompanyCard
            key={company.id}
            name={company.name}
            rating={company.rating}
            image={company.image}
            onContactClick={() => handleContactClick(company.name)}
          />
        ))}
      </div>
    </section>
  );
}
