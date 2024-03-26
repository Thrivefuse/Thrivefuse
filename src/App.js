import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {
    HOME_PAGE,
    PARENT_REGISTRATION_PAGE, STUDENT_DASHBOARD,
    TUTOR_REGISTRATION_PAGE
} from "./utils/constants";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import StudentDashboard from "./views/dashboard/student/StudentDashboard";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
                <Route path={PARENT_REGISTRATION_PAGE} element={<ParentSignUp/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />
                <Route path={STUDENT_DASHBOARD} element={<StudentDashboard/>} />
            </Routes>
        </Router>
    );
}
export default App;