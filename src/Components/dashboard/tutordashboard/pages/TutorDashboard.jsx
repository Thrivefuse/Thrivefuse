import React from "react";
import SideBar from "../components/SideBar";
import Profile from "./Profile";
import DateRangeCalendarCalendarsProp from "../components/Calendar";
// import Student from "./Student";

function TutorDashboard() {
  return (
      <div className="student-dashboard" style={{display: 'flex'}}>
          <div className="ml-7 mt-8">
              <SideBar />
          </div>
          <div className="ml-7 mt-5">
                   <h2 className="welcome" style={{
                        fontSize: '30px',
                        fontFamily: 'Georgia',
                        color:'#1a1a1a',
                        margin: '2% 4%',
                        textAlign: 'center',
                    /* text-align: center; */
                  }}>Welcome Back</h2>
            </div>
            <div>
            
           <div className="dashboard-display-section" style={{
                backgroundColor: 'rgb(238, 237, 255)',width: '96vw'
            }}>
                <Profile />
            </div>
          <DateRangeCalendarCalendarsProp />
        </div>
      </div>
);
}

export default TutorDashboard;
