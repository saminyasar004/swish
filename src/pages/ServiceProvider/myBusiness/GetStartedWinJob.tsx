import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import profileOutlineIcon from "@/assets/providerIcon/profileOutlineIcon.svg";
import businessJobIcon from "@/assets/providerIcon/businessJobIcon.svg";
import messageOutlineIcon from "@/assets/providerIcon/messageOutlineIcon.svg";
import { Separator } from "@/components/ui/separator";
import { ButtonProvider } from "@/components/ui/buttonProvider";

export default function GetStartedWinJob() {
  const userName = "Ali Mounji";

  const businessOptions = [
    {
      id: 1,
      title: "Complete your profile",
      description:
        "Add information and images to build trust and attract customers.",
      icon: profileOutlineIcon,
      button: "Go to profile",
      link: "/provider/my-business/profile",
      color: "bg-[#365FC0]",
    },
    {
      id: 2,
      title: "Get direct jobs",
      description:
        "Ask clients to post jobs on your profile to collect reviews.",
      icon: businessJobIcon,
      button: "Read more",
      link: "/provider/my-business/job-setting/help-guide/get-jobs-directly",
      color: "bg-[#9477FF]",
    },
    {
      id: 3,
      title: "Answers to jobs",
      description: "Start with small and uncut jobs to gather \n evaluations.",
      icon: messageOutlineIcon,
      button: "See free jobs",
      link: "/provider/clip-free-jobs",
      color: "bg-[#00B68B]",
    },
  ];

  return (
    <section className="container mx-auto py-6">
      {/* Header */}
      <div className="flex items-center gap-4 my-6">
        <div className="bg-providerPrimary text-white rounded-md px-4 py-2 text-4xl font-semibold">
          {userName.charAt(0)}
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">{userName}</h1>
          <p className="text-muted-foreground">Verified</p>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Section Title */}
      <h2 className="text-2xl mt-10 mb-6 font-semibold text-gray-800">
        Get started and win your first jobs
      </h2>

      {/* Business Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {businessOptions.map((option) => (
          <Card
            key={option.id}
            className="overflow-hidden rounded-lg shadow-sm"
          >
            {/* Colored header with icon */}
            <Link to={option.link}>
              <div
                className={`${option.color} flex items-center justify-center h-52`}
              >
                <img
                  src={option.icon}
                  alt={option.title}
                  className="h-10 w-10"
                />
              </div>
            </Link>

            {/* Content */}
            <CardContent className="p-6 space-y-2 bg-white">
              <h3 className="text-lg font-semibold">{option.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {option.description}
              </p>

              <Link to={option.link}>
                <ButtonProvider
                  variant="outline"
                  className="w-fit mt-4 lg:h-12 text-providerPrimary"
                >
                  {option.button}
                </ButtonProvider>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <Separator className="mt-6" /> */}
    </section>
  );
}
