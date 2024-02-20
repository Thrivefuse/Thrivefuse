import React from "react";
import LandingPage from "./Components/LandingPage/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParentSignUp from "./Components/auth/signup/parentSignUp";
import TutorSignUp from "./Components/auth/signup/tutorSignUp";



function App() {
  return (
      <Router>
          <Routes>
              <Route path={"/"} element={<LandingPage/>} />
              <Route path={"/home"} element={<LandingPage/>} />
              <Route path={"/parent-registration"} element={<ParentSignUp/>} />
              <Route path={"/tutor-registration"} element={<TutorSignUp/>} />
          </Routes>
      </Router>
  );
}

export default App;
