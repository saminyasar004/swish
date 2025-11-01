// src/pages/post/MyPost.tsx
import { useState, startTransition } from "react"; // Import startTransition
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
import { useNavigate } from "react-router-dom";
import dummyImg from "@/assets/images/BusinessProfileImage.svg";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Job {
  id: number;
  title: string;
  date: string;
  companiesContacted: number;
  status: "Open" | "In Progress" | "Completed" | "Paused";
  image?: string;
}

export default function MyPost() {
  const { t } = useTranslation(["common", "my-jobs"]);
  const [selectedPostStatus, setSelectedPostStatus] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const {
    data: myJobsData,
    isLoading,
    isError,
  } = useGetMyJobsQuery({
    page: currentPage,
    status: selectedPostStatus === "finished" ? "Completed" : "active",
    limit: 5,
  });

  const jobs = myJobsData?.data || [];
  const totalPages = myJobsData?.totalPages || 1;

  const handleJobClick = (jobId: number) => {
    navigate(`/chat/${jobId}`);
  };

  const filteredJobs = jobs.filter((job) =>
    selectedPostStatus === "finished"
      ? job.status === "Completed" || job.status === "Paused"
      : job.status === "Open" || job.status === "In Progress"
  );

  // Wrap state updates in startTransition
  const handleTabChange = (value: string) => {
    startTransition(() => {
      setSelectedPostStatus(value);
    });
  };

  const handlePageChange = (page: number) => {
    startTransition(() => {
      setCurrentPage(page);
    });
  };

  return (
    <section className="py-16 flex flex-col gap-5">
      <div className="w-full mx-auto rounded-md">
        <div className="container flex items-center justify-between w-full">
          <h3 className="text-primaryDark font-semibold text-2xl">{t("my-jobs", { ns: "common" })}</h3>
          <Tabs
            value={selectedPostStatus}
            onValueChange={handleTabChange} // Use the wrapped handler
            className="w-auto bg-gray-200 rounded-full px-2 py-1.5"
          >
            <TabsList className="flex bg-muted p-1 rounded-full gap-1">
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-gray-700 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                {t("active-tab", { ns: "common" })}
              </TabsTrigger>
              <TabsTrigger
                value="finished"
                className="data-[state=active]:bg-white data-[state=active]:shadow-sm 
                           data-[state=active]:text-primaryDark text-gray-700 
                           px-4 py-2.5 text-sm font-medium rounded-full transition"
              >
                {t("completed-tab", { ns: "common" })}
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="container py-4 flex flex-col gap-4">
        {isLoading ? (
          <p className="text-center text-gray-500">{t("loading", { ns: "common" })}</p>
        ) : isError ? (
          <p className="text-center text-red-500">{t("error", { ns: "common" })}</p>
        ) : filteredJobs.length === 0 ? (
          <p className="text-center text-gray-500">{t("no-jobs", { ns: "common" })}</p>
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
                          {t("companies-contacted", { count: job.companiesContacted, ns: "common" })}{" "}
                          - {t("posted", { date: new Date(job.date).toLocaleDateString(), ns: "common" })}
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
                      {t(`job-status.${job.status}`, { ns: "my-jobs" })}
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
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))} // Use wrapped handler
                  disabled={currentPage === 1}
                  className="h-10 w-10 rounded-full text-gray-500 hover:bg-gray-200 hover:text-primaryDark disabled:opacity-50"
                >
                  <ChevronLeft />
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePageChange(page)} // Use wrapped handler
                      className={cn(
                        "h-10 w-10 rounded-full text-gray-500 hover:bg-gray-200 hover:text-primaryDark",
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
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))} // Use wrapped handler
                  disabled={currentPage === totalPages}
                  className="h-10 w-10 rounded-full text-gray-500 hover:bg-gray-200 hover:text-primaryDark disabled:opacity-50"
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