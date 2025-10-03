import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SeeTheJob } from "./SeeTheJob";
import { Evaluation } from "./Evaluation";
import { CreateAppointment } from "./TheJob/CreateAppointment";

export default function TheJobMessageTab() {
  const location = useLocation();
  const pathname = location.pathname;

  // ✅ Map path → content
  const contentMap: Record<string, JSX.Element> = {
    "/profile/message/job/1/job-details": <SeeTheJob />,
    "/profile/message/job/1/evaluation": <Evaluation />,
    "/profile/message/job/1/appointment": <CreateAppointment />,
  };

  const content = contentMap[pathname] ?? (
    <p className="text-gray-500">Select a setting from the sidebar.</p>
  );

  // return <div className="p-2 overflow-y-auto">{content}</div>;
  return <div className="p-2 overflow-y-auto"><Outlet /></div>;
}
