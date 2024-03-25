import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorDashboard from "./Components/dashboard/tutordashboard/pages/TutorDashboard";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {TUTOR_REGISTRATION_PAGE} from "./utils/constants";
import Student from "./views/Dashboard/studentdashboard/StudentDashboard";
import SignUpNextSteps from "./views/auth/signup/signUpNextSteps";
import Parent from "./views/Dashboard/parentdashboard/ParentDashboard";


export const PARENT_REGISTRATION_PAGE = "/parent-registration";
export const HOME_PAGE = "/home";
export const TUTOR_DASHBOARD = "/tutor-dashboard";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path={PARENT_REGISTRATION_PAGE} element={<ParentSignUp/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />        
                <Route path={TUTOR_DASHBOARD} element={<TutorDashboard />} />
                <Route path={"/student-dashboard"} element={<Student/>} /> 
                <Route path={"/dashboard"} element={Parent} />
              <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router> 
      );
}
export default App;
