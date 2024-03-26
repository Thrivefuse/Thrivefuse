import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {
    HOME_PAGE, PARENT_DASHBOARD,
    PARENT_REGISTRATION_PAGE, STUDENT_DASHBOARD, STUDENT_REGISTRATION_PAGE, TUTOR_DASHBOARD,
    TUTOR_REGISTRATION_PAGE
} from "./utils/constants";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import StudentDashboard from "./views/dashboard/student/StudentDashboard";
import ParentDashboard from "./views/dashboard/parent/ParentDashboard";
import TutorDashboard from "./views/dashboard/tutor/pages/TutorDashboard";
import StudentSignUp from "./views/auth/signup/studentSignUp";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
                <Route path={PARENT_REGISTRATION_PAGE} element={<ParentSignUp/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />
                <Route path={STUDENT_REGISTRATION_PAGE} element={<StudentSignUp/>} />
                <Route path={STUDENT_DASHBOARD} element={<StudentDashboard/>} />
                <Route path={PARENT_DASHBOARD} element={<ParentDashboard/>} />
                <Route path={TUTOR_DASHBOARD} element={<TutorDashboard/>} />
            </Routes>
        </Router>
    );
}
export default App;