"use client";
import React from "react";
import Team from "@/components/AboutPage/OurTeam/Doctors";
import Founders from "@/components/AboutPage/OurTeam/Founders";
import ScheduleAppointment from "@/components/AboutPage/OurTeam/MeetUs";

const OurTeam = () => {
  return (
    <div className="mx-auto overflow-x-hidden">
      <Founders />
      <Team />
      <ScheduleAppointment />
    </div>
  );
};

export default OurTeam;
