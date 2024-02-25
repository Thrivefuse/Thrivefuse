import React from "react";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import DateRangeCalendarCalendarsProp from "../components/Calendar";
// import Student from "./Student";

function TutorDashboard() {
  return (
    <div>
      <div className="student-dashboard">
        <div className="ml-7 mt-8">
          <SideBar />
        </div>
        <div className="dashboard-display-section">
          <div className="ml-7 mt-5">
            <h2 className="welcome">Welcome Back</h2>
          </div>
          <Profile />
          {/* <Student /> */}
        </div>
        <DateRangeCalendarCalendarsProp />
      </div>
    </div>
  );
}

export default TutorDashboard;
