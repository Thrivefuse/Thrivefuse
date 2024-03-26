import React from "react";
import LandingPage from "./views/landingpage/landingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFoundPage from "./views/reusableComponents/NotFoundPage";
import {HOME_PAGE} from "./utils/constants";

function App() {
    return(
        <Router>
            <Routes>
                <Route path={"/"} element={<LandingPage/>} />
                <Route path={HOME_PAGE} element={<LandingPage/>} />
                <Route path="*" element={<NotFoundPage/>} />
          </Routes>
      </Router> 
      );
}
export default App;