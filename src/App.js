import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {
    HOME_PAGE,
    PARENT_REGISTRATION_PAGE,
    TUTOR_DASHBOARD,
    TUTOR_REGISTRATION_PAGE
} from "./utils/constants";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import TutorDashboard from "./views/dashboard/tutor/pages/TutorDashboard";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
                <Route path={PARENT_REGISTRATION_PAGE} element={<ParentSignUp/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />
                <Route path={TUTOR_DASHBOARD} element={<TutorDashboard/>} />
            </Routes>
        </Router>
    );
}
export default App;