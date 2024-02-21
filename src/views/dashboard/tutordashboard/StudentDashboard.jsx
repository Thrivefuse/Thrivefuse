import React from "react";
import SideBar from "../../reusableComponents/SideBar";
import "../../../styles/dashboard/tutordashboard/StudentDashboard.css";
import DateRangeCalendarCalendarsProp from "../../reusableComponents/Calendar";
import Courses from "./Courses";

function StudentDashboard() {
  return (
    <div>
      <div className="student-dashboard-main-container flex">
        <div className="ml-7 mt-8">
            Hi
          <SideBar/>
        </div>
        <div className="dashboard-display-section">
        <div className="ml-7 mt-5">
            <h2 className=" text-xl font-bold">Dashboard</h2>
          </div>
          {/* <Profile /> */}
          <Courses/>
        </div>
        <DateRangeCalendarCalendarsProp/>
      </div>
    </div>
  );
}

export default StudentDashboard;
