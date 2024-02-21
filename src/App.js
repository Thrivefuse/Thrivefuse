import React from "react";
import LandingPage from "./Components/LandingPage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParentSignUp from "./Components/auth/signup/parentSignUp";
import TutorSignUp from "./Components/auth/signup/tutorSignUp";
import NotFoundPage from "./Components/NotFoundPage";
import ParentDashboard from "./Components/Dashboard/ParentDashboard";




function App() {
  return (
      <Router>
          <Routes>
               <Route path={"/"} element={<LandingPage/>} />
               <Route path={"/home"} element={<LandingPage/>} />
               <Route path={"/parent-registration"} element={<ParentSignUp/>} />
               <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
               <Route path={"/dashboard"} element={<ParentDashboard />} />
               <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router>
  );
}
export default App;
