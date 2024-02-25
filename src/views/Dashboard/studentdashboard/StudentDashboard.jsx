import React from "react";
import Student_SideBar from "../../reusableComponents/Tutor_SideBar";
//import "../../../styles/Dashboard/tutordashboard/StudentDashboard.css";
import DateRangeCalendarCalendarsProp from "../../reusableComponents/Calendar";
import Courses from "./Courses";

function StudentDashboard() {
  return (
    <div>
      <div className="student-dashboard-main-container flex" style={{display : 'flex'}}>
        <div className="ml-7 mt-8">
            Hi
          <Student_SideBar/>
        </div>
        <div className="dashboard-display-section" style={{
        backgroundColor: 'rgb(238, 237, 255)',
        width: '96vw',
      }}>
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
