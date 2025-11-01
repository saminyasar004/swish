import { Button } from "@/components/ui/button";
import ArrowRight from "@/assets/images/arrowRight.svg";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";
import JobStartedCard from "./JobStartedCard";
import googleMap from "@/assets/images/googleMap.svg";
import { Link } from "react-router-dom";
import {
  useGetMyJobsQuery,
  useGetPreviousCompanyAndStartedJobsQuery,
} from "@/redux/features/users/postJob.api";

export default function MyJobs() {
  const token = useAppSelector(selectCurrentToken);

  // GET PROFILE
  const {
    data: userProfile,
    isLoading: isUserProfileLoading,
    isError: isUserProfileError,
  } = useGetUserProfileQuery(undefined, {
    skip: !token,
  });

  // GET STARTED JOBS
  const {
    data: prevUsedCompany,
    isLoading: isPrevUsedCompanyLoading,
    isError: isPrevUsedCompanyError,
  } = useGetPreviousCompanyAndStartedJobsQuery(undefined, { skip: !token });




  // Handle loading state
  if (isUserProfileLoading || isPrevUsedCompanyLoading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="animate-pulse text-gray-500">Loading jobs...</div>
      </div>
    );
  }

  // Handle error state
  if (isUserProfileError || isPrevUsedCompanyError) {
    return (
      <div className="container mx-auto py-12 text-center">
        <p className="text-red-500">
          Failed to load jobs. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="container mx-auto py-12">
        {/* Greeting */}
        <div>
          <h1 className="text-3xl font-bold mb-8">
            Hey, {userProfile?.surname ?? "Guest"}!
          </h1>
        </div>

        {/* Section header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">My Jobs</h1>
          <Link to="/my-post"><Button
            variant="outline"
            className="rounded-3xl border-primary font-semibold"
            disabled={!prevUsedCompany?.started_jobs?.length}
            aria-label="Show all jobs"
          >
            Show All
          </Button></Link>
        </div>

        {/* Jobs content */}
        {prevUsedCompany?.started_jobs?.length > 0 ? (
         <div className="">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {prevUsedCompany.started_jobs.slice(0, 3).map((job) => (
              <JobStartedCard key={job.id} job={job} />
            ))}
          </div>

          <div className="bg-liquidGreen flex flex-col items-center justify-center gap-6 py-12 mt-6 rounded-md">
            <h4 className="text-xl font-semibold">More projects underway?</h4>
            <p className="text-sm font-medium text-center max-w-md">
             The companies at Swish.ma  offer services in crafts, cleaning, transport and cars.
            </p>
            <Link to="/post-job">
              <Button
                variant="outline"
                className="rounded-md border-primary font-semibold text-primary py-5 hover:bg-liquidGreen/80 hover:text-primary"
                aria-label="Post a new job"
              >
                Post a job
                <img
                  src={ArrowRight}
                  alt=""
                  className="ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
         
         </div>
        ) : (
          <div className="bg-liquidGreen flex flex-col items-center justify-center gap-6 py-12 mt-6 rounded-md">
            <h4 className="text-xl font-semibold">No active jobs</h4>
            <p className="text-sm font-medium text-center max-w-md">
              Create a new job to receive offers from qualified companies,
              completely non-binding and free of charge!
            </p>
            <Link to="/post-job">
              <Button
                variant="outline"
                className="rounded-md border-primary font-semibold text-primary py-5 hover:bg-liquidGreen/80 hover:text-primary"
                aria-label="Post a new job"
              >
                Post a job
                <img
                  src={ArrowRight}
                  alt=""
                  className="ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}