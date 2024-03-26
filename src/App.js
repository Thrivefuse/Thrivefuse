import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {HOME_PAGE, TUTOR_REGISTRATION_PAGE} from "./utils/constants";
import TutorSignUp from "./views/auth/signup/tutorSignUp";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
                <Route path={TUTOR_REGISTRATION_PAGE} element={<TutorSignUp/>} />
          </Routes>
      </Router> 
      );
}
export default App;