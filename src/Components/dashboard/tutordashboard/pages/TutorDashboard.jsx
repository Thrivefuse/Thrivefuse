import React from "react";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import DateRangeCalendarCalendarsProp from "../components/Calendar";
// import Student from "./Student";

function TutorDashboard() {
  return (
    <div>
      <div className="student-dashboard" style={{display: 'flex'}}>
        <div className="ml-7 mt-8">
          <SideBar />
        </div>
        <div className="dashboard-display-section" style={{ backgroundColor: '#eed9ff',
  width: '96vw'}}>
          <div className="ml-7 mt-5">
            <h2 className="welcome" style={{
  font-size: '30px',
  font-family: 'Georgia',
  color:#1a1a1a,
  margin: 2% 4%,
  text-align: center,
  /* text-align: center; */
}}>Welcome Back</h2>
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
