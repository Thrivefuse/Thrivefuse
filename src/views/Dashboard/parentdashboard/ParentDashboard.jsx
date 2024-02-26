import React from 'react';
import Parent_SideBar from '../../reusableComponents/Parent__SideBar';
import MainParentDashboard from './ParentDashboardContent';

const ParentDashboard = () => {
  // const [isDarkMode, toggleTheme] = useTheme();
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '4rem' }}>
      <Parent_SideBar />
      <div >
        <MainParentDashboard />
      </div>
    </div>
  )
}

export default ParentDashboard;
