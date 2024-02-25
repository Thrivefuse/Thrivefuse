import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TutorDashboard from "./Components/dashboard/tutordashboard/pages/TutorDashboard";
import ParentSignUp from "./views/auth/signup/parentSignUp";
import TutorSignUp from "./views/auth/signup/tutorSignUp";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import SignUpNextSteps from "./views/auth/signup/signUpNextSteps";


function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={"/home"} element={<LandingPage/>} />
                <Route path={"/parent-registration"} element={<ParentSignUp/>} />
                <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
                {/* <Route path={"/student-dashboard"} element={<Student/>} /> */}
                {/* <Route path={"/dashboard"} element={Paren} /> */}
                <Route path={"/tutor-dashboard"} element={<TutorDashboard />} />
              <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router> 
      );
}
export default App;
