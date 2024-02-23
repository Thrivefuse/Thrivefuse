import React from 'react';
import Tutor_SideBar from '../../reusableComponents/Tutor_SideBar';

const ParentDashboard = () => {
  return (
    <>
      <Tutor_SideBar />
      <div>
      </div>
      <div className="parent-main-content">
        <MainParentDashboard />
      </div>
      </div>
  )
}

export default ParentDashboard;
