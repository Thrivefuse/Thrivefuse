import React from 'react';
import Parent_SideBar from '../../reusableComponents/Parent__SideBar';
import MainParentDashboard from './ParentDashboardContent';
import "../../../styles/Dashboard/parentdashboard/ParentDashboard.css";

const ParentDashboard = () => {
  // const [isDarkMode, toggleTheme] = useTheme();
  return (
    <div className="parentDashboard">
      <Parent_SideBar />
      <div className="parent-main-content">
        <MainParentDashboard />
      </div>
    </div>
  )
}

export default ParentDashboard;
