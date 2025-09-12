import { Button } from "@/components/ui/button";
import ArrowRight from "@/assets/images/arrowRight.svg";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetUserProfileQuery } from "@/redux/features/users/user.category.api";
import JobStartedCard from "./JobStartedCard";
import MoreProjectsCard from "./MoreProjectsCard";
import googleMap from "@/assets/images/googleMap.svg";
import { Link } from "react-router-dom";

export default function MyJobs() {
  const token = useAppSelector(selectCurrentToken);
  // GET PROFILE
  const { data: userProfile, isLoading: isUserProfileLoading } =
    useGetUserProfileQuery(undefined, {
      skip: !token,
    });
  const job = 2;
  return (
    <section>
      <div className="container mx-auto py-12">
        <div>
          <h1 className="text-3xl font-bold mb-8">
            Hey, {userProfile?.surname}!
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-medium">My Jobs</h1>
          <Button
            variant="outline"
            className="rounded-3xl border-primary font-semibold"
          >
            Show All
          </Button>
        </div>

        {job ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <JobStartedCard
              backgroundImage={googleMap}
              status="Job has started"
              title="offers from qualified companies. Get an estimate for the job"
              date="10. March"
            />
            <MoreProjectsCard />
          </div>
        ) : (
          <div className="bg-liquidGreen flex flex-col items-center justify-center gap-6 py-12 mt-6">
            <h4 className="text-xl font-semibold">No active jobs</h4>
            <p className="text-sm font-medium">
              Create a new job to recive offers from qualified companies,
              completrly non-binding and free charge! Post a job
            </p>
            <Link to="/post-job">
              <Button
                variant="outline"
                className="rounded-md  border-primary  font-semibold text-primary py-5  hover:bg-liquidGreen/80 hover:text-primary"
              >
                Post a job <img src={ArrowRight} alt="Post a job" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
