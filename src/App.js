import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import ParentSignUp from './views/auth/signup/parentSignUp'
import {
    TUTOR_REGISTRATION_PAGE, HOME_PAGE, PARENT_REGISTRATION_PAGE,
    TUTOR_DASHBOARD, STUDENT_DASHBOARD, PARENT_DASHBOARD
} from "./utils/constants";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import TutorDashboard from "./views/dashboard/tutordashboard/pages/TutorDashboard";
import Student from "./views/dashboard/tutordashboard/pages/Student";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path={PARENT_REGISTRATION_PAGE} element={<ParentSignUp/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />
                <Route path={TUTOR_DASHBOARD} element={<TutorDashboard />} />
                <Route path={STUDENT_DASHBOARD} element={<Student/>} /> 
              <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router> 
      );
}
export default App;