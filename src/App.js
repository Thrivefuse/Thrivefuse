import React from "react";
import LandingPage from "./views/LandingPage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import StudentDashboard from "./views/dashboard/tutordashboard/StudentDashboard";
import ParentDashboard from "./views/dashboard/ParentDashboard";
import NotFoundPage from "./views/NotFoundPage";


function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={<LandingPage/>} />
              <Route path={"/home"} element={<LandingPage/>} />
              <Route path={"/parent-registration"} element={<ParentSignUp/>} />
              <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
              <Route path={"/student-dashboard"} element={<StudentDashboard/>} />
               <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
               <Route path={"/dashboard"} element={<ParentDashboard />} />
               <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}
export default App;
