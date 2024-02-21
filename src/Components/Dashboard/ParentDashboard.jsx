import React from "react";
import SideBar from "../reusableComponents/SideBar";
import MainParentDashboard from "./MainParentDashboard.jsx";
import '../../styles/dashboard/ParentDashboard.css';

const ParentDashboard = () => {
  return (
    <div className="parentDashboard">
      <div className="parent-side-content">
        <SideBar />
      </div>
      <div className="parent-main-content">
        <MainParentDashboard />
      </div>
    </div>
  )
}

export default ParentDashboard;
