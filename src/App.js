import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorDashboard from "./Components/dashboard/tutordashboard/pages/TutorDashboard";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import StudentDashboard from "./views/Dashboard/studentdashboard/StudentDashboard";
import ParentDashboard from "./views/Dashboard/parentdashboard/ParentDashboard";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";


function App() {
  return (
    <div>
{
      <Router>
          <Routes>
              <Route path={"/"} element={<LandingPage/>} />
              <Route path={"/home"} element={<LandingPage/>} />
              <Route path={"/parent-registration"} element={<ParentSignUp/>} />
              <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
              <Route path={"/student-dashboard"} element={<StudentDashboard/>} />
              <Route path={"/tutor-dashboard"} element={<TutorDashboard />} />
              <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
              <Route path={"/dashboard"} element={<ParentDashboard />} />
              <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router> }
    </div>
  );
}
export default App;
