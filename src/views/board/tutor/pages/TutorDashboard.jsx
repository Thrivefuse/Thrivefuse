import React from "react";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import DateRangeCalendarCalendarsProp from "../components/Calendar";

function TutorDashboard() {
  return (
      <div className="student-dashboard" style={{display: 'flex'}}>
        <SideBar/>
        <Profile/>
        <DateRangeCalendarCalendarsProp/>
      </div>
);
}

export default TutorDashboard;
