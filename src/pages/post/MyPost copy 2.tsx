import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetMyJobsQuery } from "@/redux/features/jobsApi/myJob.api";
import { useNavigate } from "react-router-dom"; // Assuming you use react-router
import dummyImg from "@/assets/images/BusinessProfileImage.svg";
import dummyImgsa from "@/assets/images/windows-and-doors.svg";
import helpCenterImage3 from "@/assets/helpcenter/helpCenterImage3.svg";
import helpCenterImage4 from "@/assets/helpcenter/helpCenterImage1.svg";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";

interface Job {
  id: number;
  title: string;
  date: string;
  companiesContacted: number;
  status: "Open" | "In Progress" | "Completed" | "Paused";
  image?: string;
}


export default function MyPost() {
  const [selectedPostStatus, setSelectedPostStatus] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Fetch jobs using RTK Query with pagination
  const {
    data: myJobsData,
    isLoading,
    isError,
  } = useGetMyJobsQuery({
    page: currentPage,
    status: selectedPostStatus === "finished" ? "Completed" : "active",
    limit: 5, // Adjust limit as per your API
  });

  // Filter and map jobs based on selected tab
  const jobs = myJobsData?.data || [];
  console.log({ jobs });
  const totalPages = myJobsData?.totalPages || 1;

  // Use dummy data for now
  // const jobs: Job[] = dummyJobs;
  // const totalPages = 3; // Single page for dummy data

  const handleJobClick = (jobId: number) => {
    navigate(`/chat/${jobId}`); // Navigate to chat page with job ID
  };

  // Filter jobs based on selected tab
  const filteredJobs = jobs.filter((job) =>
    selectedPostStatus === "finished"
      ? job.status === "Completed" || job.status === "Paused"
      : job.status === "Open" || job.status === "In Progress"
  );

  return (
    <section className="py-16 flex flex-col gap-5">
      <div className="w-full mx-auto rounded-md">
        <div className="container flex items-center justify-between w-full">
          <h3 className="text-primaryDark font-semibold text-2xl">My jobs</h3>
          <Tabs
            value={selectedPostStatus}
            onValueChange={setSelectedPostStatus}
            className="w-auto bg-[#E7E7E7] rounded-full px-2 py-1.5"
          >
            <TabsList className="flex bg-muted p-1 rounded-full gap-1">
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-primaryDark 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                Active
              </TabsTrigger>
              <TabsTrigger
                value="finished"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-primaryDark 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                Completed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container py-4 flex flex-col gap-4">
        
      {/* <>
        <Accordion type="single" collapsible className="w-full">
          {jobs
            .filter((job) =>
              selectedPostStatus === "finished"
                ? job.status === "Completed" || job.status === "Paused"
                : job.status === "Open" || job.status === "In Progress"
            )
            .map((job: Job) => (
              <AccordionItem key={job.id} value={`item-${job.id}`}>
                <AccordionTrigger
                  onClick={() => handleJobClick(job.id)}
                  className="flex items-center justify-between hover:no-underline"
                >
                  <div className="flex items-center gap-4">
                    {job.image && (
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-24 h-24 rounded-md object-cover"
                      />
                    )}
                    <div className="text-start ">
                      <h4 className="text-primaryDark font-semibold text-xl mb-2">
                        {job.title}
                      </h4>
                      <p className="text-sm text-gray-700 font-normal">
                        {job.companiesContacted} companies have contacted -
                        Posted {new Date(job.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <Badge
                    className="ml-auto mr-2 text-xs tracking-widest px-3 py-2"
                    variant={
                      job.status === "Completed"
                        ? "default"
                        : job.status === "Paused"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {job.status}
                  </Badge>
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </>

        {totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark disabled:opacity-50"
            >
              <ChevronLeft />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant="ghost"
                size="icon"
                onClick={() => setCurrentPage(page)}
                className={cn(
                  "h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark",
                  currentPage === page && "bg-primaryDark text-white"
                )}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark disabled:opacity-50"
            >
              <ChevronRight />
            </Button>
          </div>
        )} */}

        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Error loading jobs.</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">
            No jobs available in this category.
          </p>
        ) : (
          <>
            <Accordion type="single" collapsible className="w-full">
              {filteredJobs.map((job: Job) => (
                <AccordionItem key={job.id} value={`item-${job.id}`}>
                  <AccordionTrigger
                    onClick={() => handleJobClick(job.id)}
                    className="flex items-center justify-between hover:no-underline"
                  >
                    <div className="flex items-center gap-4">
                      {job.image && (
                        <img
                          src={job.image}
                          alt={job.title}
                          className="w-24 h-24 rounded-md object-cover"
                        />
                      )}
                      <div className="text-start">
                        <h4 className="text-primaryDark font-semibold text-xl mb-2">
                          {job.title}
                        </h4>
                        <p className="text-sm text-gray-700 font-normal">
                          {job.companiesContacted} companies have contacted -
                          Posted {new Date(job.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge
                      className="ml-auto mr-2 text-xs tracking-widest px-3 py-2"
                      variant={
                        job.status === "Completed"
                          ? "default"
                          : job.status === "Paused"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {job.status}
                    </Badge>
                  </AccordionTrigger>
                  <AccordionContent></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {totalPages > 1 && (
              <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark disabled:opacity-50"
                >
                  <ChevronLeft />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant="ghost"
                      size="icon"
                      onClick={() => setCurrentPage(page)}
                      className={cn(
                        "h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark",
                        currentPage === page && "bg-primaryDark text-white"
                      )}
                    >
                      {page}
                    </Button>
                  )
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="h-10 w-10 rounded-full text-muted-foreground hover:bg-muted hover:text-primaryDark disabled:opacity-50"
                >
                  <ChevronRight />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
