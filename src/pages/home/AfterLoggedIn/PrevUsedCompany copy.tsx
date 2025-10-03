import React from "react";
import PrevUsedCompanyCard from "./PrevUsedCompanyCard";
import companyProfile from "@/assets/images/SearchCompanyLogo.svg";
import { useGetPreviousCompanyAndStartedJobsQuery } from "@/redux/features/users/postJob.api";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-6">Previous Used Companies</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper relative"
      >
        {prevUsedCompany?.previously_used_companies?.length > 0 ? (
          prevUsedCompany.previously_used_companies.map((company) => (
            <SwiperSlide key={company.id}>
              <PrevUsedCompanyCard job={company} />
            </SwiperSlide>
          ))
        ) : (
          companies.map((company) => (
            <SwiperSlide key={company.id}>
              <PrevUsedCompanyCard job={company} />
            </SwiperSlide>
          ))
        )}
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 hover:text-gray-800"
          >
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M14 8L10 12L14 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600 hover:text-gray-800"
          >
            <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
            <path d="M10 8L14 12L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </Swiper>
    </section>
  );
}